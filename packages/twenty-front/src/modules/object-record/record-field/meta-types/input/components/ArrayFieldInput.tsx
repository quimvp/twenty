import { useArrayField } from '@/object-record/record-field/meta-types/hooks/useArrayField';
import { ArrayFieldMenuItem } from '@/object-record/record-field/meta-types/input/components/ArrayFieldMenuItem';
import { MultiItemFieldInput } from '@/object-record/record-field/meta-types/input/components/MultiItemFieldInput';
import { useMemo } from 'react';

type ArrayFieldInputProps = {
  onCancel?: () => void;
};

export const ArrayFieldInput = ({ onCancel }: ArrayFieldInputProps) => {
  const { persistArrayField, hotkeyScope, fieldValue } = useArrayField();

  const arrayItems = useMemo<Array<string>>(
    () => (Array.isArray(fieldValue) ? fieldValue : []),
    [fieldValue],
  );

  return (
    <MultiItemFieldInput
      hotkeyScope={hotkeyScope}
      newItemLabel="Add Item"
      items={arrayItems}
      onPersist={persistArrayField}
      onCancel={onCancel}
      placeholder="Enter value"
      renderItem={({ value, index, handleEdit, handleDelete }) => (
        <ArrayFieldMenuItem
          key={index}
          dropdownId={`${hotkeyScope}-array-${index}`}
          value={value}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    ></MultiItemFieldInput>
  );
};
