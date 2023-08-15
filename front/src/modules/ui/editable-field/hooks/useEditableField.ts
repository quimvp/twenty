import { usePreviousHotkeyScope } from '@/ui/utilities/hotkey/hooks/usePreviousHotkeyScope';
import { HotkeyScope } from '@/ui/utilities/hotkey/types/HotkeyScope';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';

import { isFieldInEditModeScopedState } from '../states/isFieldInEditModeScopedState';
import { FieldRecoilScopeContext } from '../states/recoil-scope-contexts/FieldRecoilScopeContext';
import { EditableFieldHotkeyScope } from '../types/EditableFieldHotkeyScope';

export function useEditableField() {
  const [isFieldInEditMode, setIsFieldInEditMode] = useRecoilScopedState(
    isFieldInEditModeScopedState,
    FieldRecoilScopeContext,
  );

  const {
    setHotkeyScopeAndMemorizePreviousScope,
    goBackToPreviousHotkeyScope,
  } = usePreviousHotkeyScope();

  function closeEditableField() {
    setIsFieldInEditMode(false);

    goBackToPreviousHotkeyScope();
  }

  function openEditableField(customEditHotkeyScopeForField?: HotkeyScope) {
    setIsFieldInEditMode(true);

    if (customEditHotkeyScopeForField) {
      setHotkeyScopeAndMemorizePreviousScope(
        customEditHotkeyScopeForField.scope,
        customEditHotkeyScopeForField.customScopes,
      );
    } else {
      setHotkeyScopeAndMemorizePreviousScope(
        EditableFieldHotkeyScope.EditableField,
      );
    }
  }

  return {
    isFieldInEditMode,
    closeEditableField,
    openEditableField,
  };
}
