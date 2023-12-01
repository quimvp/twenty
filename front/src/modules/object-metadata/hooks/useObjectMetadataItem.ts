import { gql } from '@apollo/client';
import { useRecoilValue } from 'recoil';

import { ObjectMetadataItemNotFoundError } from '@/object-metadata/errors/ObjectMetadataNotFoundError';
import { objectMetadataItemFamilySelector } from '@/object-metadata/states/objectMetadataItemFamilySelector';
import { objectMetadataItemsState } from '@/object-metadata/states/objectMetadataItemsState';
import { useGenerateCreateOneRecordMutation } from '@/object-record/hooks/useGenerateCreateOneRecordMutation';
import { useGenerateFindManyRecordsQuery } from '@/object-record/hooks/useGenerateFindManyRecordsQuery';
import { useGenerateFindOneRecordQuery } from '@/object-record/hooks/useGenerateFindOneRecordQuery';
import { useGenerateUpdateOneRecordMutation } from '@/object-record/hooks/useGenerateUpdateOneRecordMutation';
import { useGetRecordFromCache } from '@/object-record/hooks/useGetRecordFromCache';
import { useModifyRecordFromCache } from '@/object-record/hooks/useModifyRecordFromCache';
import { generateDeleteOneRecordMutation } from '@/object-record/utils/generateDeleteOneRecordMutation';
import { isDefined } from '~/utils/isDefined';

import { ObjectMetadataItemIdentifier } from '../types/ObjectMetadataItemIdentifier';

export const EMPTY_QUERY = gql`
  query EmptyQuery {
    empty
  }
`;

export const EMPTY_MUTATION = gql`
  mutation EmptyMutation {
    empty
  }
`;

export const useObjectMetadataItem = (
  { objectNameSingular }: ObjectMetadataItemIdentifier,
  depth?: number,
) => {
  const objectMetadataItem = useRecoilValue(
    objectMetadataItemFamilySelector({
      objectName: objectNameSingular,
      objectNameType: 'singular',
    }),
  );

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  if (!isDefined(objectMetadataItem)) {
    throw new ObjectMetadataItemNotFoundError(
      objectNameSingular,
      objectMetadataItems,
    );
  }

  const getRecordFromCache = useGetRecordFromCache({
    objectMetadataItem,
  });

  const modifyRecordFromCache = useModifyRecordFromCache({
    objectMetadataItem,
  });

  const findManyRecordsQuery = useGenerateFindManyRecordsQuery({
    objectMetadataItem,
    depth,
  });

  const findOneRecordQuery = useGenerateFindOneRecordQuery({
    objectMetadataItem,
    depth,
  });

  const createOneRecordMutation = useGenerateCreateOneRecordMutation({
    objectMetadataItem,
  });

  const updateOneRecordMutation = useGenerateUpdateOneRecordMutation({
    objectMetadataItem,
  });

  const deleteOneRecordMutation = generateDeleteOneRecordMutation({
    objectMetadataItem,
  });

  const labelIdentifierFieldMetadataId = objectMetadataItem.fields.find(
    ({ name }) => name === 'name',
  )?.id;

  const basePathToShowPage = `/object/${objectMetadataItem.nameSingular}/`;

  return {
    labelIdentifierFieldMetadataId,
    basePathToShowPage,
    objectMetadataItem,
    getRecordFromCache,
    modifyRecordFromCache,
    findManyRecordsQuery,
    findOneRecordQuery,
    createOneRecordMutation,
    updateOneRecordMutation,
    deleteOneRecordMutation,
  };
};
