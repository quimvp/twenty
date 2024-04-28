import gql from 'graphql-tag';
import { useRecoilValue } from 'recoil';

import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { objectMetadataItemsState } from '@/object-metadata/states/objectMetadataItemsState';
import { mapObjectMetadataToGraphQLQuery } from '@/object-metadata/utils/mapObjectMetadataToGraphQLQuery';
import { EMPTY_MUTATION } from '@/object-record/constants/EmptyMutation';
import { RecordGqlOperationFields } from '@/object-record/graphql-operations/types/RecordGqlOperationFields';
import { getCreateManyRecordsMutationResponseField } from '@/object-record/utils/getCreateManyRecordsMutationResponseField';
import { isUndefinedOrNull } from '~/utils/isUndefinedOrNull';
import { capitalize } from '~/utils/string/capitalize';

export const useCreateManyRecordsMutation = ({
  objectNameSingular,
  operationFields,
}: {
  objectNameSingular: string;
  operationFields?: RecordGqlOperationFields;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  if (isUndefinedOrNull(objectMetadataItem)) {
    return { createManyRecordsMutation: EMPTY_MUTATION };
  }

  const mutationResponseField = getCreateManyRecordsMutationResponseField(
    objectMetadataItem.namePlural,
  );

  const createManyRecordsMutation = gql`
    mutation Create${capitalize(
      objectMetadataItem.namePlural,
    )}($data: [${capitalize(objectMetadataItem.nameSingular)}CreateInput!]!)  {
      ${mutationResponseField}(data: $data) ${mapObjectMetadataToGraphQLQuery({
        objectMetadataItems,
        objectMetadataItem,
        operationFields,
      })}
  }`;

  return {
    createManyRecordsMutation,
  };
};
