import { useNavigate } from 'react-router-dom';

import { IconArrowUpRight } from '@/ui/display/icon';
import { IconComponent } from '@/ui/display/icon/types/IconComponent';
import { MenuItemCommand } from '@/ui/navigation/menu-item/components/MenuItemCommand';

import { useCommandMenu } from '../hooks/useCommandMenu';

export type CommandMenuItemProps = {
  label: string;
  to?: string;
  key: string;
  onClick?: () => void;
  Icon?: IconComponent;
  firstHotKey?: string;
  secondHotKey?: string;
  isSelected?: boolean;
};

export const CommandMenuItem = ({
  label,
  to,
  onClick,
  Icon,
  isSelected,
  firstHotKey,
  secondHotKey,
}: CommandMenuItemProps) => {
  const navigate = useNavigate();
  const { toggleCommandMenu } = useCommandMenu();

  if (to && !Icon) {
    Icon = IconArrowUpRight;
  }

  const onItemClick = () => {
    toggleCommandMenu();

    if (onClick) {
      onClick();
      return;
    }
    if (to) {
      navigate(to);
      return;
    }
  };

  return (
    <MenuItemCommand
      LeftIcon={Icon}
      text={label}
      firstHotKey={firstHotKey}
      secondHotKey={secondHotKey}
      onClick={onItemClick}
      isSelected={isSelected}
    />
  );
};
