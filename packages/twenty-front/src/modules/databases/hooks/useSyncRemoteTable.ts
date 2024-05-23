import { useCallback } from 'react';
import { ApolloClient, useApolloClient, useMutation } from '@apollo/client';

import { SYNC_REMOTE_TABLE } from '@/databases/graphql/mutations/syncRemoteTable';
import { modifyRemoteTableFromCache } from '@/databases/utils/modifyRecordTableFromCache';
import { useApolloMetadataClient } from '@/object-metadata/hooks/useApolloMetadataClient';
import { useFindManyObjectMetadataItems } from '@/object-metadata/hooks/useFindManyObjectMetadataItems';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecordsQuery } from '@/object-record/hooks/useFindManyRecordsQuery';
import { RemoteTableStatus } from '~/generated/graphql';
import {
  RemoteTableInput,
  SyncRemoteTableMutation,
  SyncRemoteTableMutationVariables,
} from '~/generated-metadata/graphql';

export const useSyncRemoteTable = () => {
  const apolloMetadataClient = useApolloMetadataClient();
  const apolloClient = useApolloClient();

  const { refetch: refetchObjectMetadataItems } =
    useFindManyObjectMetadataItems();

  const { findManyRecordsQuery: findManyViewsQuery } = useFindManyRecordsQuery({
    objectNameSingular: CoreObjectNameSingular.View,
  });
  const [mutate] = useMutation<
    SyncRemoteTableMutation,
    SyncRemoteTableMutationVariables
  >(SYNC_REMOTE_TABLE, {
    client: apolloMetadataClient ?? ({} as ApolloClient<any>),
  });

  const syncRemoteTable = useCallback(
    async (input: RemoteTableInput) => {
      const remoteTable = await mutate({
        variables: {
          input,
        },
        update: (cache) => {
          modifyRemoteTableFromCache({
            cache: cache,
            remoteTableName: input.name,
            fieldModifiers: {
              status: () => RemoteTableStatus.Synced,
            },
          });
        },
      });

      await refetchObjectMetadataItems();
      await apolloClient.query({
        query: findManyViewsQuery,
        fetchPolicy: 'network-only',
      });

      return remoteTable;
    },
    [apolloClient, findManyViewsQuery, mutate, refetchObjectMetadataItems],
  );

  return {
    syncRemoteTable,
  };
};
