import AnimatedPlaceholder from '@/ui/layout/animated-placeholder/components/AnimatedPlaceholder';
import {
  StyledEmptyContainer,
  StyledEmptyTextContainer,
  StyledEmptyTitle,
} from '@/ui/layout/animated-placeholder/components/EmptyPlaceholderStyled';

export const EmailLoader = () => (
  <StyledEmptyContainer>
    <AnimatedPlaceholder type="loadingMessages" />
    <StyledEmptyTextContainer>
      <StyledEmptyTitle>Loading emails</StyledEmptyTitle>
    </StyledEmptyTextContainer>
  </StyledEmptyContainer>
);
