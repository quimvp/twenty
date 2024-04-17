import { FallbackProps } from 'react-error-boundary';
import { ThemeProvider, useTheme, useTheme } from '@emotion/react';
import { IconRefresh, THEME_LIGHT } from 'twenty-ui';

import { Button } from '@/ui/input/button/components/Button';
import AnimatedPlaceholder from '@/ui/layout/animated-placeholder/components/AnimatedPlaceholder';
import {
  AnimatedPlaceholderEmptyContainer,
  AnimatedPlaceholderEmptySubTitle,
  AnimatedPlaceholderEmptyTextContainer,
  AnimatedPlaceholderEmptyTitle,
} from '@/ui/layout/animated-placeholder/components/EmptyPlaceholderStyled';

type GenericErrorFallbackProps = FallbackProps;

export const GenericErrorFallback = ({
  error,
  resetErrorBoundary,
}: GenericErrorFallbackProps) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme || THEME_LIGHT}>
      <AnimatedPlaceholderEmptyContainer>
        <AnimatedPlaceholder type="errorIndex" />
        <AnimatedPlaceholderEmptyTextContainer>
          <AnimatedPlaceholderEmptyTitle>
            Server’s on a coffee break
          </AnimatedPlaceholderEmptyTitle>
          <AnimatedPlaceholderEmptySubTitle>
            {error.message}
          </AnimatedPlaceholderEmptySubTitle>
        </AnimatedPlaceholderEmptyTextContainer>
        <Button
          Icon={IconRefresh}
          title="Reload"
          variant={'secondary'}
          onClick={() => resetErrorBoundary()}
        />
      </AnimatedPlaceholderEmptyContainer>
    </ThemeProvider>
  );
};
