import { useLastVisitedObjectMetadataItem } from '@/navigation/hooks/useLastVisitedObjectMetadataItem';
import { useLastVisitedView } from '@/navigation/hooks/useLastVisitedView';
import { useFilteredObjectMetadataItems } from '@/object-metadata/hooks/useFilteredObjectMetadataItems';
import { usePrefetchedData } from '@/prefetch/hooks/usePrefetchedData';
import { PrefetchKey } from '@/prefetch/types/PrefetchKey';
import { useViewFromQueryParams } from '@/views/hooks/internal/useViewFromQueryParams';
import { useViewStates } from '@/views/hooks/internal/useViewStates';
import { useGetCurrentView } from '@/views/hooks/useGetCurrentView';
import { useResetCurrentView } from '@/views/hooks/useResetCurrentView';
import { View } from '@/views/types/View';
import { isUndefined } from '@sniptt/guards';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isDeeplyEqual } from '~/utils/isDeeplyEqual';
import { isDefined } from '~/utils/isDefined';

export const QueryParamsViewIdEffect = () => {
  const { getFiltersFromQueryParams, viewIdQueryParam } =
    useViewFromQueryParams();
  const { currentViewIdState, componentId: objectNamePlural } = useViewStates();

  const [currentViewId, setCurrentViewId] = useRecoilState(currentViewIdState);
  const { viewsOnCurrentObject } = useGetCurrentView();
  const { findObjectMetadataItemByNamePlural } =
    useFilteredObjectMetadataItems();
  const objectMetadataItemId =
    findObjectMetadataItemByNamePlural(objectNamePlural);
  const { getLastVisitedViewIdFromObjectNamePlural, setLastVisitedView } =
    useLastVisitedView();
  const { lastVisitedObjectMetadataItemId, setLastVisitedObjectMetadataItem } =
    useLastVisitedObjectMetadataItem();

  const lastVisitedViewId =
    getLastVisitedViewIdFromObjectNamePlural(objectNamePlural);
  const isLastVisitedObjectMetadataItemDifferent = !isDeeplyEqual(
    objectMetadataItemId?.id,
    lastVisitedObjectMetadataItemId,
  );

  const { records: views } = usePrefetchedData<View>(PrefetchKey.AllViews);

  const { resetCurrentView } = useResetCurrentView();

  const { unsavedToUpsertViewFiltersState, unsavedToUpsertViewSortsState } =
    useViewStates();

  const setUnsavedViewFilters = useSetRecoilState(
    unsavedToUpsertViewFiltersState,
  );

  const setUnsavedViewSorts = useSetRecoilState(unsavedToUpsertViewSortsState);

  useEffect(() => {
    if (isDefined(currentViewId)) {
      const view = views.find((view) => view.id === currentViewId);

      if (isDefined(view)) {
        setUnsavedViewFilters(view.viewFilters ?? []);
        setUnsavedViewSorts(view.viewSorts ?? []);
      }
    }
  }, [currentViewId, views, setUnsavedViewFilters, setUnsavedViewSorts]);

  useEffect(() => {
    const indexView = viewsOnCurrentObject.find((view) => view.key === 'INDEX');

    if (isUndefined(viewIdQueryParam) && isDefined(lastVisitedViewId)) {
      if (isLastVisitedObjectMetadataItemDifferent) {
        setLastVisitedObjectMetadataItem(objectNamePlural);
        setLastVisitedView({
          objectNamePlural,
          viewId: lastVisitedViewId,
        });
      }

      setCurrentViewId(lastVisitedViewId);

      return;
    }

    if (isDefined(viewIdQueryParam)) {
      if (isLastVisitedObjectMetadataItemDifferent) {
        setLastVisitedObjectMetadataItem(objectNamePlural);
      }
      if (!isDeeplyEqual(viewIdQueryParam, lastVisitedViewId)) {
        setLastVisitedView({
          objectNamePlural,
          viewId: viewIdQueryParam,
        });
      }

      setCurrentViewId(viewIdQueryParam);

      return;
    }

    if (isDefined(indexView)) {
      if (isLastVisitedObjectMetadataItemDifferent) {
        setLastVisitedObjectMetadataItem(objectNamePlural);
      }
      if (!isDeeplyEqual(indexView.id, lastVisitedViewId)) {
        setLastVisitedView({
          objectNamePlural,
          viewId: indexView.id,
        });
      }

      setCurrentViewId(indexView.id);

      return;
    }
  }, [
    views,
    setUnsavedViewFilters,
    setUnsavedViewSorts,
    currentViewId,
    getFiltersFromQueryParams,
    isLastVisitedObjectMetadataItemDifferent,
    lastVisitedViewId,
    objectMetadataItemId?.id,
    objectNamePlural,
    setCurrentViewId,
    setLastVisitedObjectMetadataItem,
    setLastVisitedView,
    viewIdQueryParam,
    viewsOnCurrentObject,
    resetCurrentView,
  ]);

  return <></>;
};
