import { useRecoilValue } from 'recoil';

import { findActivityTargetsOperationSignatureFactory } from '@/activities/graphql-operations/factories/findActivityTargetsOperationSignatureFactory';
import { ActivityTarget } from '@/activities/types/ActivityTarget';
import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';
import { getActivityTargetsFilter } from '@/activities/utils/getActivityTargetsFilter';
import { objectMetadataItemsState } from '@/object-metadata/states/objectMetadataItemsState';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';

export const useActivityTargetsForTargetableObjects = ({
  targetableObjects,
  skip,
}: {
  targetableObjects: Pick<
    ActivityTargetableObject,
    'id' | 'targetObjectNameSingular'
  >[];
  skip?: boolean;
}) => {
  const activityTargetsFilter = getActivityTargetsFilter({
    targetableObjects: targetableObjects,
  });

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const FIND_ACTIVITY_TARGETS_OPERATION_SIGNATURE =
    findActivityTargetsOperationSignatureFactory({ objectMetadataItems });

  // TODO: We want to optimistically remove from this request
  //   If we are on a show page and we remove the current show page object corresponding activity target
  //   See also if we need to update useTimelineActivities
  const { records: activityTargets, loading: loadingActivityTargets } =
    useFindManyRecords<ActivityTarget>({
      skip,
      objectNameSingular:
        FIND_ACTIVITY_TARGETS_OPERATION_SIGNATURE.objectNameSingular,
      filter: activityTargetsFilter,
      operationFields: FIND_ACTIVITY_TARGETS_OPERATION_SIGNATURE.fields,
    });

  return {
    activityTargets,
    loadingActivityTargets,
  };
};
