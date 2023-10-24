import { useAvailableScopeIdOrThrow } from '@/ui/utilities/recoil-scope/scopes-internal/hooks/useAvailableScopeId';

import { ViewScopeInternalContext } from '../scopes/scope-internal-context/ViewScopeInternalContext';

import { useViewStates } from './useViewStates';

type UseViewProps = {
  viewScopeId?: string;
};

export const useView = (props?: UseViewProps) => {
  const scopeId = useAvailableScopeIdOrThrow(
    ViewScopeInternalContext,
    props?.viewScopeId,
  );

  const { currentViewId, setCurrentViewId, sorts, setSorts } = useViewStates({
    scopeId,
  });

  if (!currentViewId) {
    throw new Error('currentViewId is not defined');
  }

  return {
    scopeId,
    currentViewId,
    setCurrentViewId,
    sorts,
    setSorts,
  };
};
