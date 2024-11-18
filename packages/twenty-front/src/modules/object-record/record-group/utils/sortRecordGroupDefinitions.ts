import { RecordGroupDefinition } from '@/object-record/record-group/types/RecordGroupDefinition';
import { RecordGroupSort } from '@/object-record/record-group/types/RecordGroupSort';

export const sortRecordGroupDefinitions = (
  recordGroupDefinitions: RecordGroupDefinition[],
  recordGroupSort: RecordGroupSort,
) => {
  const visibleGroups = recordGroupDefinitions.filter(
    (boardGroup) => boardGroup.isVisible,
  );

  const compareAlphabetical = (a: string, b: string, reverse = false) => {
    if (a < b) return reverse ? 1 : -1;
    if (a > b) return reverse ? -1 : 1;
    return 0;
  };

  switch (recordGroupSort) {
    case RecordGroupSort.Alphabetical:
      return visibleGroups.sort((a, b) =>
        compareAlphabetical(a.title.toLowerCase(), b.title.toLowerCase()),
      );
    case RecordGroupSort.Reverse_alphabetical:
      return visibleGroups.sort((a, b) =>
        compareAlphabetical(a.title.toLowerCase(), b.title.toLowerCase(), true),
      );
    case RecordGroupSort.Manual:
    default:
      return visibleGroups.sort((a, b) => a.position - b.position);
  }
};
