import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { LightIconButton } from 'twenty-ui';

import { CalendarChannel } from '@/accounts/types/CalendarChannel';
import { ConnectedAccount } from '@/accounts/types/ConnectedAccount';
import { currentWorkspaceMemberState } from '@/auth/states/currentWorkspaceMemberState';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';
import { SettingsAccountsListCard } from '@/settings/accounts/components/SettingsAccountsListCard';
import { SettingsAccountsSynchronizationStatus } from '@/settings/accounts/components/SettingsAccountsSynchronizationStatus';
import { IconChevronRight } from '@/ui/display/icon';
import { IconGoogleCalendar } from '@/ui/display/icon/components/IconGoogleCalendar';

const StyledRowRightContainer = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const SettingsAccountsCalendarChannelsListCard = () => {
  const currentWorkspaceMember = useRecoilValue(currentWorkspaceMemberState);
  const navigate = useNavigate();

  const { records: accounts, loading: accountsLoading } =
    useFindManyRecords<ConnectedAccount>({
      objectNameSingular: CoreObjectNameSingular.ConnectedAccount,
      filter: {
        accountOwnerId: {
          eq: currentWorkspaceMember?.id,
        },
      },
    });

  const { records: calendarChannels, loading: calendarChannelsLoading } =
    useFindManyRecords<CalendarChannel>({
      objectNameSingular: CoreObjectNameSingular.CalendarChannel,
      filter: {
        connectedAccountId: {
          in: accounts.map((account) => account.id),
        },
      },
    });

  return (
    <SettingsAccountsListCard
      items={calendarChannels}
      isLoading={accountsLoading || calendarChannelsLoading}
      onRowClick={(calendarChannel) =>
        navigate(`/settings/accounts/calendars/${calendarChannel.id}`)
      }
      RowIcon={IconGoogleCalendar}
      RowRightComponent={({ item: calendarChannel }) => (
        <StyledRowRightContainer>
          <SettingsAccountsSynchronizationStatus
            synced={!!calendarChannel.isSyncEnabled}
          />
          <LightIconButton Icon={IconChevronRight} accent="tertiary" />
        </StyledRowRightContainer>
      )}
    />
  );
};
