import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { IconComponent } from '@/ui/display/icon/types/IconComponent';

const StyledIconButton = styled.div<{ isActive?: boolean }>`
  align-items: center;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.background.transparent.light : 'none'};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing(1)};
  height: ${({ theme }) => theme.spacing(10)};
  width: ${({ theme }) => theme.spacing(10)};
  justify-content: center;
  display: flex;
  transition: background-color ${({ theme }) => theme.animation.duration.fast}s
    ease;

  &:hover {
    background-color: ${({ theme }) => theme.background.transparent.light};
  }
`;

type NavigationBarItemProps = {
  Icon: IconComponent;
  isActive: boolean;
  onClick: () => void;
};

export const NavigationBarItem = ({
  Icon,
  isActive,
  onClick,
}: NavigationBarItemProps) => {
  const theme = useTheme();

  return (
    <StyledIconButton isActive={isActive} onClick={onClick}>
      <Icon color={theme.color.gray50} size={theme.icon.size.lg} />
    </StyledIconButton>
  );
};
