import { MetadataFieldDataType } from '@/settings/data-model/types/ObjectFieldDataType';
import { Field } from '~/generated/graphql';

import { formatMetadataFieldInput } from '../utils/formatMetadataFieldInput';

import { useCreateOneMetadataField } from './useCreateOneMetadataField';
import { useDeleteOneMetadataField } from './useDeleteOneMetadataField';
import { useUpdateOneMetadataField } from './useUpdateOneMetadataField';

export const useMetadataField = () => {
  const { createOneMetadataField } = useCreateOneMetadataField();
  const { updateOneMetadataField } = useUpdateOneMetadataField();
  const { deleteOneMetadataField } = useDeleteOneMetadataField();

  const createMetadataField = (
    input: Pick<Field, 'label' | 'icon' | 'description'> & {
      objectMetadataId: string;
      type: MetadataFieldDataType;
    },
  ) =>
    createOneMetadataField({
      ...formatMetadataFieldInput(input),
      objectMetadataId: input.objectMetadataId,
      type: input.type,
    });

  const editMetadataField = (
    input: Pick<Field, 'id' | 'label' | 'icon' | 'description'>,
  ) =>
    updateOneMetadataField({
      fieldMetadataIdToUpdate: input.id,
      updatePayload: formatMetadataFieldInput(input),
    });

  const activateMetadataField = (metadataField: Field) =>
    updateOneMetadataField({
      fieldMetadataIdToUpdate: metadataField.id,
      updatePayload: { isActive: true },
    });

  const disableMetadataField = (metadataField: Field) =>
    updateOneMetadataField({
      fieldMetadataIdToUpdate: metadataField.id,
      updatePayload: { isActive: false },
    });

  const eraseMetadataField = (metadataField: Field) =>
    deleteOneMetadataField(metadataField.id);

  return {
    activateMetadataField,
    createMetadataField,
    disableMetadataField,
    eraseMetadataField,
    editMetadataField,
  };
};
