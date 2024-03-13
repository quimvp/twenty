import { useLocation, useNavigate } from 'react-router-dom';

import { useObjectMetadataItemForSettings } from '@/object-metadata/hooks/useObjectMetadataItemForSettings';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';
import { usePrefetchedData } from '@/prefetch/hooks/usePrefetch';
import { PrefetchKey } from '@/prefetch/types/PrefetchKeys';
import { useIcons } from '@/ui/display/icon/hooks/useIcons';
import { NavigationDrawerItem } from '@/ui/navigation/navigation-drawer/components/NavigationDrawerItem';

export const ObjectMetadataNavItems = () => {
  const { activeObjectMetadataItems } = useObjectMetadataItemForSettings();
  const navigate = useNavigate();
  const { getIcon } = useIcons();
  const currentPath = useLocation().pathname;

  const { prefetchQueryKey, isDataPrefetched } = usePrefetchedData(
    PrefetchKey.AllViews,
  );

  const { records } = useFindManyRecords({
    skip: !isDataPrefetched,
    ...prefetchQueryKey,
    useRecordsWithoutConnection: true,
  });

  return (
    <>
      {[
        ...activeObjectMetadataItems
          .filter((item) =>
            ['person', 'company', 'opportunity'].includes(item.nameSingular),
          )
          .sort((objectMetadataItemA, objectMetadataItemB) => {
            const order = ['person', 'company', 'opportunity'];
            const indexA = order.indexOf(objectMetadataItemA.nameSingular);
            const indexB = order.indexOf(objectMetadataItemB.nameSingular);
            if (indexA === -1 || indexB === -1) {
              return objectMetadataItemA.nameSingular.localeCompare(
                objectMetadataItemB.nameSingular,
              );
            }
            return indexA - indexB;
          }),
        ...activeObjectMetadataItems
          .filter(
            (item) =>
              !['person', 'company', 'opportunity'].includes(item.nameSingular),
          )
          .sort((objectMetadataItemA, objectMetadataItemB) => {
            return new Date(objectMetadataItemA.createdAt) <
              new Date(objectMetadataItemB.createdAt)
              ? 1
              : -1;
          }),
      ].map((objectMetadataItem) => {
        const viewId = records?.find(
          (view: any) => view?.objectMetadataId === objectMetadataItem.id,
        )?.id;

        const navigationPath = `/objects/${objectMetadataItem.namePlural}${
          viewId ? `?view=${viewId}` : ''
        }`;

        return (
          <NavigationDrawerItem
            key={objectMetadataItem.id}
            label={objectMetadataItem.labelPlural}
            to={navigationPath}
            active={currentPath === `/objects/${objectMetadataItem.namePlural}`}
            Icon={getIcon(objectMetadataItem.icon)}
            onClick={() => {
              navigate(navigationPath);
            }}
          />
        );
      })}
    </>
  );
};
