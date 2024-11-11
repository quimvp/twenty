import { FieldMetadataInterface } from 'src/engine/metadata-modules/field-metadata/interfaces/field-metadata.interface';

import {
  GraphqlQueryRunnerException,
  GraphqlQueryRunnerExceptionCode,
} from 'src/engine/api/graphql/graphql-query-runner/errors/graphql-query-runner.exception';
import { GraphqlQuerySelectedFieldsRelationParser } from 'src/engine/api/graphql/graphql-query-runner/graphql-query-parsers/graphql-query-selected-fields/graphql-selected-fields-relation.parser';
import { compositeTypeDefinitions } from 'src/engine/metadata-modules/field-metadata/composite-types';
import { isCompositeFieldMetadataType } from 'src/engine/metadata-modules/field-metadata/utils/is-composite-field-metadata-type.util';
import { ObjectMetadataMaps } from 'src/engine/metadata-modules/types/object-metadata-maps';
import { CompositeFieldMetadataType } from 'src/engine/metadata-modules/workspace-migration/factories/composite-column-action.factory';
import { isRelationFieldMetadataType } from 'src/engine/utils/is-relation-field-metadata-type.util';
import { capitalize } from 'src/utils/capitalize';
import { isPlainObject } from 'src/utils/is-plain-object';

export class GraphqlQuerySelectedFieldsParser {
  private graphqlQuerySelectedFieldsRelationParser: GraphqlQuerySelectedFieldsRelationParser;

  constructor(objectMetadataMaps: ObjectMetadataMaps) {
    this.graphqlQuerySelectedFieldsRelationParser =
      new GraphqlQuerySelectedFieldsRelationParser(objectMetadataMaps);
  }

  parse(
    graphqlSelectedFields: Partial<Record<string, any>>,
    fieldMetadataMapByName: Record<string, FieldMetadataInterface>,
  ): { select: Record<string, any>; relations: Record<string, any> } {
    const result: {
      select: Record<string, any>;
      relations: Record<string, any>;
    } = {
      select: {},
      relations: {},
    };

    const hasEdges = Object.keys(graphqlSelectedFields).includes('edges');

    for (const [fieldKey, fieldValue] of Object.entries(
      graphqlSelectedFields,
    )) {
      if (hasEdges && fieldKey !== 'edges') {
        continue;
      }
      if (this.shouldNotParseField(fieldKey)) {
        continue;
      }

      if (this.isConnectionField(fieldKey, fieldValue)) {
        const subResult = this.parse(fieldValue, fieldMetadataMapByName);

        Object.assign(result.select, subResult.select);
        Object.assign(result.relations, subResult.relations);
        continue;
      }

      const fieldMetadata = fieldMetadataMapByName[fieldKey];

      if (!fieldMetadata) {
        throw new GraphqlQueryRunnerException(
          `Field "${fieldKey}" does not exist or is not selectable`,
          GraphqlQueryRunnerExceptionCode.FIELD_NOT_FOUND,
        );
      }

      if (isRelationFieldMetadataType(fieldMetadata.type)) {
        this.graphqlQuerySelectedFieldsRelationParser.parseRelationField(
          fieldMetadata,
          fieldKey,
          fieldValue,
          result,
        );
      } else if (isCompositeFieldMetadataType(fieldMetadata.type)) {
        const compositeResult = this.parseCompositeField(
          fieldMetadata,
          fieldValue,
        );

        Object.assign(result.select, compositeResult);
      } else {
        result.select[fieldKey] = true;
      }
    }

    return result;
  }

  private isConnectionField(fieldKey: string, fieldValue: any): boolean {
    return ['edges', 'node'].includes(fieldKey) && isPlainObject(fieldValue);
  }

  private shouldNotParseField(fieldKey: string): boolean {
    return ['__typename', 'cursor'].includes(fieldKey);
  }

  private parseCompositeField(
    fieldMetadata: FieldMetadataInterface,
    fieldValue: any,
  ): Record<string, any> {
    const compositeType = compositeTypeDefinitions.get(
      fieldMetadata.type as CompositeFieldMetadataType,
    );

    if (!compositeType) {
      throw new Error(
        `Composite type definition not found for type: ${fieldMetadata.type}`,
      );
    }

    return Object.keys(fieldValue)
      .filter((subFieldKey) => subFieldKey !== '__typename')
      .reduce(
        (acc, subFieldKey) => {
          const subFieldMetadata = compositeType.properties.find(
            (property) => property.name === subFieldKey,
          );

          if (!subFieldMetadata) {
            throw new Error(
              `Sub field metadata not found for composite type: ${fieldMetadata.type}`,
            );
          }

          const fullFieldName = `${fieldMetadata.name}${capitalize(subFieldKey)}`;

          acc[fullFieldName] = true;

          return acc;
        },
        {} as Record<string, any>,
      );
  }
}
