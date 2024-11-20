import styled from '@emotion/styled';
import { MOBILE_VIEWPORT } from 'twenty-ui';

const StyledSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.betweenSiblingsGap};
  overflow: hidden;
  flex-direction: column;
  flex-shrink: 1;

  min-height: fit-content;

  @media (max-width: ${MOBILE_VIEWPORT}px) {
    gap: ${({ theme }) => theme.spacing(0.5)};
    flex-direction: row;
    min-width: fit-content;
    height: ${({ theme }) => theme.spacing(8)};
  }
`;

export { StyledSection as NavigationDrawerSection };
