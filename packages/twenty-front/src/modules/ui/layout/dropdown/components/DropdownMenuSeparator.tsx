import styled from '@emotion/styled';

const StyledDropdownMenuSeparator = styled.div`
  background-color: ${({ theme }) => theme.border.color.light};
  min-height: 1px;

  width: 100%;
`;

export const DropdownMenuSeparator = StyledDropdownMenuSeparator;
