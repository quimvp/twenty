import { useContext } from 'react';

import { RecoilScope } from '@/ui/utilities/recoil-scope/components/RecoilScope';
import { ComponentParameters } from '~/types/ComponentParameters';

import { FieldContext } from '../contexts/FieldContext';
import { BooleanFieldInput } from '../meta-types/input/components/BooleanFieldInput';
import { DateFieldInput } from '../meta-types/input/components/DateFieldInput';
import { NumberFieldInput } from '../meta-types/input/components/NumberFieldInput';
import { PhoneFieldInput } from '../meta-types/input/components/PhoneFieldInput';
import { ProbabilityFieldInput } from '../meta-types/input/components/ProbabilityFieldInput';
import { RelationFieldInput } from '../meta-types/input/components/RelationFieldInput';
import { TextFieldInput } from '../meta-types/input/components/TextFieldInput';
import { URLFieldInput } from '../meta-types/input/components/URLFieldInput';
import { isFieldBoolean } from '../types/guards/isFieldBoolean';
import { isFieldDate } from '../types/guards/isFieldDate';
import { isFieldNumber } from '../types/guards/isFieldNumber';
import { isFieldPhone } from '../types/guards/isFieldPhone';
import { isFieldProbability } from '../types/guards/isFieldProbability';
import { isFieldRelation } from '../types/guards/isFieldRelation';
import { isFieldText } from '../types/guards/isFieldText';
import { isFieldURL } from '../types/guards/isFieldURL';

export type FieldInputEvent = (persist: () => void) => void;

type OwnProps = {
  onSubmit?: FieldInputEvent;
  onCancel?: () => void;
  onClickOutside?: FieldInputEvent;
  onEnter?: FieldInputEvent;
  onEscape?: FieldInputEvent;
  onTab?: FieldInputEvent;
  onShiftTab?: FieldInputEvent;
};

export const FieldInput = ({
  onCancel,
  onSubmit,
  onEnter,
  onEscape,
  onShiftTab,
  onTab,
  onClickOutside,
}: OwnProps) => {
  const { fieldDefinition } = useContext(FieldContext);

  return (
    <>
      {isFieldRelation(fieldDefinition) ? (
        <RecoilScope>
          <RelationFieldInput onSubmit={onSubmit} onCancel={onCancel} />
        </RecoilScope>
      ) : isFieldText(fieldDefinition) ? (
        <TextFieldInput
          {...({
            onEnter,
            onEscape,
            onClickOutside,
            onTab,
            onShiftTab,
          } satisfies ComponentParameters<typeof TextFieldInput>)}
        />
      ) : isFieldDate(fieldDefinition) ? (
        <DateFieldInput
          {...({
            onEnter,
            onEscape,
            onClickOutside,
            onTab,
            onShiftTab,
          } satisfies ComponentParameters<typeof DateFieldInput>)}
        />
      ) : isFieldNumber(fieldDefinition) ? (
        <NumberFieldInput
          {...({
            onEnter,
            onEscape,
            onClickOutside,
            onTab,
            onShiftTab,
          } satisfies ComponentParameters<typeof NumberFieldInput>)}
        />
      ) : isFieldURL(fieldDefinition) ? (
        <URLFieldInput
          {...({
            onEnter,
            onEscape,
            onClickOutside,
            onTab,
            onShiftTab,
          } satisfies ComponentParameters<typeof URLFieldInput>)}
        />
      ) : isFieldPhone(fieldDefinition) ? (
        <PhoneFieldInput
          {...({
            onEnter,
            onEscape,
            onClickOutside,
            onTab,
            onShiftTab,
          } satisfies ComponentParameters<typeof PhoneFieldInput>)}
        />
      ) : isFieldBoolean(fieldDefinition) ? (
        <BooleanFieldInput
          {...({
            onSubmit,
          } satisfies ComponentParameters<typeof BooleanFieldInput>)}
        />
      ) : isFieldProbability(fieldDefinition) ? (
        <ProbabilityFieldInput
          {...({
            onSubmit,
          } satisfies ComponentParameters<typeof ProbabilityFieldInput>)}
        />
      ) : (
        <></>
      )}
    </>
  );
};
