import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { IconChevronRight } from 'twenty-ui';

import { SettingsListCard } from '@/settings/components/SettingsListCard';
import { SettingsIntegrationDatabaseConnectedTablesStatus } from '@/settings/integrations/components/SettingsIntegrationDatabaseConnectedTablesStatus';
import { SettingsIntegration } from '@/settings/integrations/types/SettingsIntegration';
import { getConnectionDbName } from '@/settings/integrations/utils/getConnectionDbName';
import { LightIconButton } from '@/ui/input/button/components/LightIconButton';
import { RemoteServer } from '~/generated-metadata/graphql';

type SettingsIntegrationDatabaseConnectionsListCardProps = {
  integration: SettingsIntegration;
  connections: RemoteServer[];
};

const StyledDatabaseLogoContainer = styled.div`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.spacing(4)};
  justify-content: center;
  width: ${({ theme }) => theme.spacing(4)};
`;

const StyledDatabaseLogo = styled.img`
  height: 100%;
`;

const StyledRowRightContainer = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const SettingsIntegrationDatabaseConnectionsListCard = ({
  integration,
  connections,
}: SettingsIntegrationDatabaseConnectionsListCardProps) => {
  const navigate = useNavigate();

  return (
    <SettingsListCard
      items={connections}
      RowIcon={() => (
        <StyledDatabaseLogoContainer>
          <StyledDatabaseLogo alt="" src={integration.from.image} />
        </StyledDatabaseLogoContainer>
      )}
      RowRightComponent={({ item: connection }) => (
        <StyledRowRightContainer>
          <SettingsIntegrationDatabaseConnectedTablesStatus
            connectionId={connection.id}
          />
          <LightIconButton Icon={IconChevronRight} accent="tertiary" />
        </StyledRowRightContainer>
      )}
      onRowClick={(connection) => navigate(`./${connection.id}`)}
      getItemLabel={(connection) =>
        getConnectionDbName({ integration, connection })
      }
      hasFooter
      footerButtonLabel="Add connection"
      onFooterButtonClick={() => navigate('./new')}
    />
  );
};
