import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from 'twenty-ui';

import { EmailThreadMessageParticipant } from '@/activities/emails/types/EmailThreadMessageParticipant';
import { getDisplayNameFromParticipant } from '@/activities/emails/utils/getDisplayNameFromParticipant';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { RecordChip } from '@/object-record/components/RecordChip';
import { beautifyPastDateRelativeToNow } from '~/utils/date-utils';

const StyledEmailThreadMessageSender = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledEmailThreadMessageSenderUser = styled.div`
  align-items: flex-start;
  display: flex;
`;

const StyledAvatar = styled(Avatar)`
  margin: ${({ theme }) => theme.spacing(0, 1)};
`;

const StyledSenderName = styled.span`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledThreadMessageSentAt = styled.div`
  align-items: flex-end;
  display: flex;
  color: ${({ theme }) => theme.font.color.tertiary};
  font-size: ${({ theme }) => theme.font.size.sm};
`;

const StyledRecordChip = styled(RecordChip)`
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

type EmailThreadMessageSenderProps = {
  sender: EmailThreadMessageParticipant;
  sentAt: string;
};

export const EmailThreadMessageSender = ({
  sender,
  sentAt,
}: EmailThreadMessageSenderProps) => {
  const { person, workspaceMember } = sender;

  const displayName = getDisplayNameFromParticipant({
    participant: sender,
    shouldUseFullName: true,
  });

  const avatarUrl = person?.avatarUrl ?? workspaceMember?.avatarUrl ?? '';

  return (
    <StyledEmailThreadMessageSender>
      <StyledEmailThreadMessageSenderUser>
        {person ? (
          <StyledRecordChip
            objectNameSingular={CoreObjectNameSingular.Person}
            record={person}
          />
        ) : (
          <>
            <StyledAvatar
              avatarUrl={avatarUrl}
              type="rounded"
              placeholder={displayName}
              size="sm"
            />
            <StyledSenderName>{displayName}</StyledSenderName>
          </>
        )}
      </StyledEmailThreadMessageSenderUser>
      <StyledThreadMessageSentAt>
        {beautifyPastDateRelativeToNow(sentAt)}
      </StyledThreadMessageSentAt>
    </StyledEmailThreadMessageSender>
  );
};
