import { ApolloClient, useMutation } from '@apollo/client';
import { getOperationName } from '@apollo/client/utilities';

import {
  UpdateOneMetadataFieldMutation,
  UpdateOneMetadataFieldMutationVariables,
} from '~/generated-metadata/graphql';

import { UPDATE_ONE_METADATA_FIELD } from '../graphql/mutations';
import { FIND_MANY_METADATA_OBJECTS } from '../graphql/queries';

import { useApolloClientMetadata } from './useApolloClientMetadata';
import { useFindManyMetadataObjects } from './useFindManyMetadataObjects';

export const useUpdateOneMetadataField = () => {
  const apolloClientMetadata = useApolloClientMetadata();

  const { metadataObjects } = useFindManyMetadataObjects();

  const [mutate] = useMutation<
    UpdateOneMetadataFieldMutation,
    UpdateOneMetadataFieldMutationVariables
  >(UPDATE_ONE_METADATA_FIELD, {
    client: apolloClientMetadata ?? ({} as ApolloClient<any>),
  });

  const updateOneMetadataField = ({
    objectIdToUpdate,
    fieldIdToUpdate,
    updatePayload,
  }: {
    objectIdToUpdate: string;
    fieldIdToUpdate: UpdateOneMetadataFieldMutationVariables['idToUpdate'];
    updatePayload: Partial<
      Pick<
        UpdateOneMetadataFieldMutationVariables['updatePayload'],
        'description' | 'icon' | 'isActive' | 'labelPlural' | 'labelSingular'
      >
    >;
  }) => {
    const foundMetadataObject = metadataObjects.find(
      (metadataObject) => metadataObject.id === objectIdToUpdate,
    );

    if (!foundMetadataObject)
      throw new Error(`Metadata object with id ${objectIdToUpdate} not found`);

    const foundMetadataField = foundMetadataObject.fields.find(
      (metadataField) => metadataField.id === fieldIdToUpdate,
    );

    if (!foundMetadataField)
      throw new Error(`Metadata field with id ${fieldIdToUpdate} not found`);

    return mutate({
      variables: {
        idToUpdate: fieldIdToUpdate,
        updatePayload: {
          ...foundMetadataField,
          ...updatePayload,
        },
      },
      refetchQueries: [getOperationName(FIND_MANY_METADATA_OBJECTS) ?? ''],
    });
  };

  return {
    updateOneMetadataField,
  };
};
