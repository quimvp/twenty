import { isDefined } from 'class-validator';
import graphqlFields from 'graphql-fields';
import {
  FindManyOptions,
  FindOptionsRelations,
  In,
  ObjectLiteral,
} from 'typeorm';

import {
  Record as IRecord,
  RecordFilter,
  RecordOrderBy,
} from 'src/engine/api/graphql/workspace-query-builder/interfaces/record.interface';
import { IConnection } from 'src/engine/api/graphql/workspace-query-runner/interfaces/connection.interface';
import { WorkspaceQueryRunnerOptions } from 'src/engine/api/graphql/workspace-query-runner/interfaces/query-runner-option.interface';
import { FindManyResolverArgs } from 'src/engine/api/graphql/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';

import { QUERY_MAX_RECORDS } from 'src/engine/api/graphql/graphql-query-runner/constants/query-max-records.constant';
import {
  GraphqlQueryRunnerException,
  GraphqlQueryRunnerExceptionCode,
} from 'src/engine/api/graphql/graphql-query-runner/errors/graphql-query-runner.exception';
import { GraphqlQueryParser } from 'src/engine/api/graphql/graphql-query-runner/graphql-query-parsers/graphql-query.parser';
import { ObjectRecordsToGraphqlConnectionMapper } from 'src/engine/api/graphql/graphql-query-runner/orm-mappers/object-records-to-graphql-connection.mapper';
import { applyRangeFilter } from 'src/engine/api/graphql/graphql-query-runner/utils/apply-range-filter.util';
import { decodeCursor } from 'src/engine/api/graphql/graphql-query-runner/utils/cursors.util';
import { getObjectMetadataOrThrow } from 'src/engine/api/graphql/graphql-query-runner/utils/get-object-metadata-or-throw.util';
import {
  getRelationMetadata,
  getRelationObjectMetadata,
} from 'src/engine/api/graphql/graphql-query-runner/utils/get-relation-object-metadata.util';
import {
  generateObjectMetadataMap,
  ObjectMetadataMap,
  ObjectMetadataMapItem,
} from 'src/engine/metadata-modules/utils/generate-object-metadata-map.util';
import { TwentyORMGlobalManager } from 'src/engine/twenty-orm/twenty-orm-global.manager';
import { deduceRelationDirection } from 'src/engine/utils/deduce-relation-direction.util';

export class GraphqlQueryFindManyResolverService {
  private twentyORMGlobalManager: TwentyORMGlobalManager;

  constructor(twentyORMGlobalManager: TwentyORMGlobalManager) {
    this.twentyORMGlobalManager = twentyORMGlobalManager;
  }

  async findMany<
    ObjectRecord extends IRecord = IRecord,
    Filter extends RecordFilter = RecordFilter,
    OrderBy extends RecordOrderBy = RecordOrderBy,
  >(
    args: FindManyResolverArgs<Filter, OrderBy>,
    options: WorkspaceQueryRunnerOptions,
  ): Promise<IConnection<ObjectRecord>> {
    const { authContext, objectMetadataItem, info, objectMetadataCollection } =
      options;

    this.validateArgsOrThrow(args);

    const repository =
      await this.twentyORMGlobalManager.getRepositoryForWorkspace(
        authContext.workspace.id,
        objectMetadataItem.nameSingular,
      );
    const objectMetadataMap = generateObjectMetadataMap(
      objectMetadataCollection,
    );
    const objectMetadata = getObjectMetadataOrThrow(
      objectMetadataMap,
      objectMetadataItem.nameSingular,
    );
    const graphqlQueryParser = new GraphqlQueryParser(
      objectMetadata.fields,
      objectMetadataMap,
    );

    const { select, relations } = graphqlQueryParser.parseSelectedFields(
      objectMetadataItem,
      graphqlFields(info),
    );
    const isForwardPagination = !isDefined(args.before);
    const order = graphqlQueryParser.parseOrder(
      args.orderBy ?? [],
      isForwardPagination,
    );
    const where = graphqlQueryParser.parseFilter(args.filter ?? ({} as Filter));

    const cursor = this.getCursor(args);
    const limit = args.first ?? args.last ?? QUERY_MAX_RECORDS;

    this.addOrderByColumnsToSelect(order, select);

    const findOptions: FindManyOptions<ObjectLiteral> = {
      where,
      order,
      select,
      take: limit + 1,
    };
    const totalCount = await repository.count({ where });

    if (cursor) {
      applyRangeFilter(where, cursor, isForwardPagination);
    }

    const objectRecords = (await repository.find(
      findOptions,
    )) as ObjectRecord[];

    const { hasNextPage, hasPreviousPage } = this.getPaginationInfo(
      objectRecords,
      limit,
      isForwardPagination,
    );

    if (objectRecords.length > limit) {
      objectRecords.pop();
    }

    if (relations) {
      await this.processNestedRelations(
        objectMetadataMap,
        objectMetadata,
        objectRecords,
        relations,
        limit,
        authContext,
      );
    }

    const typeORMObjectRecordsParser =
      new ObjectRecordsToGraphqlConnectionMapper(objectMetadataMap);

    return typeORMObjectRecordsParser.createConnection(
      objectRecords,
      objectMetadataItem.nameSingular,
      limit,
      totalCount,
      order,
      hasNextPage,
      hasPreviousPage,
    );
  }

  private async processNestedRelations<
    T extends ObjectLiteral,
    ObjectRecord extends IRecord = IRecord,
  >(
    objectMetadataMap: ObjectMetadataMap,
    parentObjectMetadataItem: ObjectMetadataMapItem,
    parentObjectRecords: ObjectRecord[],
    relations: Record<string, FindOptionsRelations<T>>,
    limit: number,
    authContext: any,
  ) {
    for (const [relationName, nestedRelations] of Object.entries(relations)) {
      const parentObjectName = parentObjectMetadataItem.nameSingular;
      const relationFieldMetadata =
        parentObjectMetadataItem.fields[relationName];
      const relationMetadata = getRelationMetadata(relationFieldMetadata);

      const relationDirection = deduceRelationDirection(
        relationFieldMetadata,
        relationMetadata,
      );

      const referenceObjectMetadata = getRelationObjectMetadata(
        relationFieldMetadata,
        objectMetadataMap,
      );

      const referenceObjectMetadataName = referenceObjectMetadata.nameSingular;

      const relationRepository =
        await this.twentyORMGlobalManager.getRepositoryForWorkspace(
          authContext.workspace.id,
          referenceObjectMetadataName,
        );

      let relationFindOptions: FindManyOptions = {};

      if (relationDirection === 'to') {
        const relationIds = parentObjectRecords.map(
          (item) => item[`${relationName}Id`],
        );

        relationFindOptions = {
          where: {
            id: In(relationIds),
          },
          take: limit,
        };
      } else {
        const ids = parentObjectRecords.map((item) => item.id);

        relationFindOptions = {
          where: {
            [`${parentObjectName}Id`]: In(ids),
          },
          take: limit,
        };
      }

      const relationResults =
        await relationRepository.find(relationFindOptions);

      parentObjectRecords.forEach((item) => {
        if (relationDirection === 'to') {
          (item as any)[relationName] = relationResults.filter(
            (rel) => rel.id === item[`${relationName}Id`],
          )[0];
        } else {
          (item as any)[relationName] = relationResults.filter(
            (rel) => rel[`${parentObjectName}Id`] === item.id,
          );
        }
      });

      // Recursively process deeper nested relations
      if (Object.keys(nestedRelations).length > 0) {
        await this.processNestedRelations(
          objectMetadataMap,
          objectMetadataMap[relationName],
          relationResults as ObjectRecord[],
          nestedRelations as Record<
            string,
            FindOptionsRelations<ObjectLiteral>
          >,
          limit,
          authContext,
        );
      }
    }
  }

  private validateArgsOrThrow(args: FindManyResolverArgs<any, any>) {
    if (args.first && args.last) {
      throw new GraphqlQueryRunnerException(
        'Cannot provide both first and last',
        GraphqlQueryRunnerExceptionCode.ARGS_CONFLICT,
      );
    }
    if (args.before && args.after) {
      throw new GraphqlQueryRunnerException(
        'Cannot provide both before and after',
        GraphqlQueryRunnerExceptionCode.ARGS_CONFLICT,
      );
    }
    if (args.before && args.first) {
      throw new GraphqlQueryRunnerException(
        'Cannot provide both before and first',
        GraphqlQueryRunnerExceptionCode.ARGS_CONFLICT,
      );
    }
    if (args.after && args.last) {
      throw new GraphqlQueryRunnerException(
        'Cannot provide both after and last',
        GraphqlQueryRunnerExceptionCode.ARGS_CONFLICT,
      );
    }
    if (args.first !== undefined && args.first < 0) {
      throw new GraphqlQueryRunnerException(
        'First argument must be non-negative',
        GraphqlQueryRunnerExceptionCode.INVALID_ARGS_FIRST,
      );
    }
    if (args.last !== undefined && args.last < 0) {
      throw new GraphqlQueryRunnerException(
        'Last argument must be non-negative',
        GraphqlQueryRunnerExceptionCode.INVALID_ARGS_LAST,
      );
    }
  }

  private getCursor(
    args: FindManyResolverArgs<any, any>,
  ): Record<string, any> | undefined {
    if (args.after) return decodeCursor(args.after);
    if (args.before) return decodeCursor(args.before);

    return undefined;
  }

  private addOrderByColumnsToSelect(
    order: Record<string, any>,
    select: Record<string, boolean>,
  ) {
    for (const column of Object.keys(order || {})) {
      if (!select[column]) {
        select[column] = true;
      }
    }
  }

  private getPaginationInfo(
    objectRecords: any[],
    limit: number,
    isForwardPagination: boolean,
  ) {
    const hasMoreRecords = objectRecords.length > limit;

    return {
      hasNextPage: isForwardPagination && hasMoreRecords,
      hasPreviousPage: !isForwardPagination && hasMoreRecords,
    };
  }
}
