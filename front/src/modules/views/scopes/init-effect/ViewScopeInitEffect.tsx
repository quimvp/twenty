import { useEffect } from 'react';

import { Filter } from '@/ui/object/object-filter-dropdown/types/Filter';
import { Sort } from '@/ui/object/object-sort-dropdown/types/Sort';
import { useView } from '@/views/hooks/useView';
import { ViewField } from '@/views/types/ViewField';

type ViewScopeInitEffectProps = {
  viewScopeId: string;
  onViewSortsChange?: (sorts: Sort[]) => void | Promise<void>;
  onViewFiltersChange?: (filters: Filter[]) => void | Promise<void>;
  onViewFieldsChange?: (fields: ViewField[]) => void | Promise<void>;
};

export const ViewScopeInitEffect = ({
  onViewSortsChange,
  onViewFiltersChange,
  onViewFieldsChange,
}: ViewScopeInitEffectProps) => {
  const {
    setOnViewSortsChange,
    setOnViewFieldsChange,
    setOnViewFiltersChange,
  } = useView();

  useEffect(() => {
    setOnViewSortsChange(() => onViewSortsChange);
    setOnViewFiltersChange(() => onViewFiltersChange);
    setOnViewFieldsChange(() => onViewFieldsChange);
  }, [
    onViewFieldsChange,
    onViewFiltersChange,
    onViewSortsChange,
    setOnViewFieldsChange,
    setOnViewFiltersChange,
    setOnViewSortsChange,
  ]);

  return <></>;
};
