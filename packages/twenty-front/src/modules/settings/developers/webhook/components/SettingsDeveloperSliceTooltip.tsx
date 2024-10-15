import styled from '@emotion/styled';
import { format } from 'date-fns';
import { ReactElement } from 'react';
const StyledTooltipContainer = styled.div`
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius.md};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  display: flex;
  width: 128px;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.background.transparent.secondary};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  backdrop-filter: ${({ theme }) => theme.blur.medium};
`;

const StyledTooltipDateContainer = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  justify-content: center;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-family: ${({ theme }) => theme.font.family};
  gap: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.font.color.secondary};
  padding: ${({ theme }) => theme.spacing(2)};
`;

const StyledTooltipDataRow = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.font.color.tertiary};
  padding: ${({ theme }) => theme.spacing(2)};
`;

const StyledLine = styled.div`
  background-color: ${({ theme }) => theme.border.color.medium};
  height: 1px;
  width: 100%;
`;
const StyledColorPoint = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  height: 8px;
  width: 8px;
  display: inline-block;
`;
const StyledDataDefinition = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;
const StyledSpan = styled.span`
  color: ${({ theme }) => theme.font.color.primary};
`;

export const SettingsDevelopersWebhookTooltip = ({
  point,
}: any): ReactElement => {
  const newDate = new Date(point.data.x);
  return (
    <StyledTooltipContainer>
      <StyledTooltipDateContainer>
        {format(newDate, 'MMM d · HH:mm')}
      </StyledTooltipDateContainer>
      <StyledLine />
      <StyledTooltipDataRow>
        <StyledDataDefinition>
          <StyledColorPoint color={point.serieColor} />
          {String(point.serieId)}
        </StyledDataDefinition>
        <StyledSpan>{String(point.data.y)}</StyledSpan>
      </StyledTooltipDataRow>
    </StyledTooltipContainer>
  );
};
