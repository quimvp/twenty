import { getOperationName } from '@apollo/client/utilities';
import { Key } from 'ts-key-enum';

import { useFilteredSearchPeopleQuery } from '@/people/queries';
import { SingleEntitySelect } from '@/ui/input/relation-picker/components/SingleEntitySelect';
import { relationPickerSearchFilterScopedState } from '@/ui/input/relation-picker/states/relationPickerSearchFilterScopedState';
import { EntityForSelect } from '@/ui/input/relation-picker/types/EntityForSelect';
import { RelationPickerHotkeyScope } from '@/ui/input/relation-picker/types/RelationPickerHotkeyScope';
import { isCreateModeScopedState } from '@/ui/table/editable-cell/states/isCreateModeScopedState';
import { useScopedHotkeys } from '@/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';
import {
  Person,
  PipelineProgress,
  useUpdateOnePipelineProgressMutation,
} from '~/generated/graphql';

import { GET_PIPELINE_PROGRESS, GET_PIPELINES } from '../queries';

export type OwnProps = {
  pipelineProgress: Pick<PipelineProgress, 'id'> & {
    pointOfContact?: Pick<Person, 'id'> | null;
  };
  onSubmit?: () => void;
  onCancel?: () => void;
};

export function PipelineProgressPointOfContactPicker({
  pipelineProgress,
  onSubmit,
  onCancel,
}: OwnProps) {
  const [, setIsCreating] = useRecoilScopedState(isCreateModeScopedState);

  const [searchFilter] = useRecoilScopedState(
    relationPickerSearchFilterScopedState,
  );
  const [updatePipelineProgress] = useUpdateOnePipelineProgressMutation();

  const people = useFilteredSearchPeopleQuery({
    searchFilter,
    selectedIds: pipelineProgress.pointOfContact?.id
      ? [pipelineProgress.pointOfContact.id]
      : [],
  });

  async function handleEntitySelected(
    entity: EntityForSelect | null | undefined,
  ) {
    if (!entity) {
      return;
    }

    await updatePipelineProgress({
      variables: {
        where: { id: pipelineProgress.id },
        data: {
          ...pipelineProgress,
          pointOfContact: { connect: { id: entity.id } },
        },
      },
      refetchQueries: [
        getOperationName(GET_PIPELINE_PROGRESS) ?? '',
        getOperationName(GET_PIPELINES) ?? '',
      ],
    });

    onSubmit?.();
  }

  function handleCreate() {
    setIsCreating(true);
    onSubmit?.();
  }

  useScopedHotkeys(
    Key.Escape,
    () => {
      onCancel && onCancel();
    },
    RelationPickerHotkeyScope.RelationPicker,
    [],
  );

  return (
    <SingleEntitySelect
      onCreate={handleCreate}
      onCancel={onCancel}
      onEntitySelected={handleEntitySelected}
      entities={{
        entitiesToSelect: people.entitiesToSelect,
        selectedEntity: people.selectedEntities[0],
        loading: people.loading,
      }}
    />
  );
}
