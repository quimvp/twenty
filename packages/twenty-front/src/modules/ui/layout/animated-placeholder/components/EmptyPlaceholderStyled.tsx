import styled from '@emotion/styled';

const StyledEmptyContainer = styled.div`
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  justify-content: center;
  text-align: center;
`;

export const AnimatedPlaceholderEmptyContainer = StyledEmptyContainer;

const StyledEmptyTextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const AnimatedPlaceholderEmptyTextContainer = StyledEmptyTextContainer;

const StyledEmptyTitle = styled.div`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const AnimatedPlaceholderEmptyTitle = StyledEmptyTitle;

const StyledEmptySubTitle = styled.div`
  color: ${({ theme }) => theme.font.color.tertiary};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: ${({ theme }) => theme.text.lineHeight.md};
  max-height: 2.4em;
  overflow: hidden;
  width: 50%;
`;

export const AnimatedPlaceholderEmptySubTitle = StyledEmptySubTitle;
