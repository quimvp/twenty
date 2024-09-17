import styled from '@emotion/styled';
import { H2Title, IconCalendarEvent, IconMailCog } from 'twenty-ui';

import { SettingsCard } from '@/settings/components/SettingsCard';
import { getSettingsPagePath } from '@/settings/utils/getSettingsPagePath';
import { SettingsPath } from '@/types/SettingsPath';
import { Section } from '@/ui/layout/section/components/Section';
import { UndecoratedLink } from '@/ui/navigation/link/components/UndecoratedLink';

const StyledCardsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const SettingsAccountsSettingsSection = () => {
  return (
    <Section>
      <H2Title
        title="Settings"
        description="Configure your emails and calendar settings."
      />
      <StyledCardsContainer>
        <UndecoratedLink to={getSettingsPagePath(SettingsPath.AccountsEmails)}>
          <SettingsCard
            Icon={IconMailCog}
            title="Emails"
            description="Set email visibility, manage your blocklist and more."
          />
        </UndecoratedLink>
        <UndecoratedLink
          to={getSettingsPagePath(SettingsPath.AccountsCalendars)}
        >
          <SettingsCard
            Icon={IconCalendarEvent}
            title="Calendar"
            description="Configure and customize your calendar preferences."
          />
        </UndecoratedLink>
      </StyledCardsContainer>
    </Section>
  );
};
