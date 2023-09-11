import { useRef } from 'react';
import styled from '@emotion/styled';

import { overlayBackground } from '@/ui/theme/constants/effects';

import { useRegisterCloseFieldHandlers } from '../hooks/useRegisterCloseFieldHandlers';

const StyledEditableFieldEditModeContainer = styled.div<OwnProps>`
  align-items: center;

  display: flex;
  height: 24px;

  margin-left: -${({ theme }) => theme.spacing(1)};
  position: relative;
  z-index: 10;
`;

const StyledEditableFieldInput = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  display: flex;
  margin-left: -1px;
  min-height: 32px;
  width: inherit;

  ${overlayBackground}

  z-index: 10;
`;

type OwnProps = {
  children: React.ReactNode;
  onOutsideClick?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
};

export function EditableFieldEditMode({
  children,
  onCancel,
  onSubmit,
}: OwnProps) {
  const wrapperRef = useRef(null);

  useRegisterCloseFieldHandlers(wrapperRef, onSubmit, onCancel);

  return (
    <StyledEditableFieldEditModeContainer
      data-testid="editable-field-edit-mode-container"
      ref={wrapperRef}
    >
      <StyledEditableFieldInput>{children}</StyledEditableFieldInput>
    </StyledEditableFieldEditModeContainer>
  );
}
