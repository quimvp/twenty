import { useRecoilCallback } from 'recoil';

import { isDefined } from '~/utils/isDefined';

import { DEFAULT_HOTKEYS_SCOPE_CUSTOM_SCOPES } from '../constants';
import { currentHotkeyScopeState } from '../states/internal/currentHotkeyScopeState';
import { internalHotkeysEnabledScopesState } from '../states/internal/internalHotkeysEnabledScopesState';
import { AppHotkeyScope } from '../types/AppHotkeyScope';
import { CustomHotkeyScopes } from '../types/CustomHotkeyScope';
import { HotkeyScope } from '../types/HotkeyScope';

const isCustomScopesEqual = (
  customScopesA: CustomHotkeyScopes | undefined,
  customScopesB: CustomHotkeyScopes | undefined,
) => {
  return (
    customScopesA?.commandMenu === customScopesB?.commandMenu &&
    customScopesA?.goto === customScopesB?.goto &&
    customScopesA?.keyboardShortcutMenu === customScopesB?.keyboardShortcutMenu
  );
};

export const useSetHotkeyScope = () =>
  useRecoilCallback(
    ({ snapshot, set }) =>
      async (hotkeyScopeToSet: string, customScopes?: CustomHotkeyScopes) => {
        const currentHotkeyScope = snapshot
          .getLoadable(currentHotkeyScopeState)
          .valueOrThrow();

        if (currentHotkeyScope.scope === hotkeyScopeToSet) {
          if (!isDefined(customScopes)) {
            if (
              isCustomScopesEqual(
                currentHotkeyScope?.customScopes,
                DEFAULT_HOTKEYS_SCOPE_CUSTOM_SCOPES,
              )
            ) {
              return;
            }
          } else {
            if (
              isCustomScopesEqual(
                currentHotkeyScope?.customScopes,
                customScopes,
              )
            ) {
              return;
            }
          }
        }

        const newHotkeyScope: HotkeyScope = {
          scope: hotkeyScopeToSet,
          customScopes: {
            commandMenu: customScopes?.commandMenu ?? true,
            goto: customScopes?.goto ?? false,
            keyboardShortcutMenu: customScopes?.keyboardShortcutMenu ?? false,
          },
        };

        const scopesToSet: string[] = [];

        if (newHotkeyScope.customScopes?.commandMenu) {
          scopesToSet.push(AppHotkeyScope.CommandMenu);
        }

        if (newHotkeyScope?.customScopes?.goto) {
          scopesToSet.push(AppHotkeyScope.Goto);
        }

        if (newHotkeyScope?.customScopes?.keyboardShortcutMenu) {
          scopesToSet.push(AppHotkeyScope.KeyboardShortcutMenu);
        }

        scopesToSet.push(newHotkeyScope.scope);
        console.log(scopesToSet);
        set(internalHotkeysEnabledScopesState, scopesToSet);
        set(currentHotkeyScopeState, newHotkeyScope);
      },
    [],
  );
