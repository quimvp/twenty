import { EditableField } from '@/ui/editable-field/components/EditableField';
import { FieldContext } from '@/ui/editable-field/states/FieldContext';
import {
  ViewFieldDefinition,
  ViewFieldProbabilityMetadata,
} from '@/ui/editable-field/types/ViewField';
import { RecoilScope } from '@/ui/utilities/recoil-scope/components/RecoilScope';

import { ProbabilityFieldEditMode } from './ProbabilityFieldEditMode';

type OwnProps = {
  viewField: ViewFieldDefinition<ViewFieldProbabilityMetadata>;
};

export function ProbabilityEditableField({ viewField }: OwnProps) {
  return (
    <RecoilScope SpecificContext={FieldContext}>
      <EditableField
        iconLabel={viewField.columnIcon}
        displayModeContent={<ProbabilityFieldEditMode viewField={viewField} />}
        displayModeContentOnly
        disableHoverEffect
      />
    </RecoilScope>
  );
}
