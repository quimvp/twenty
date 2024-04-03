import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IconSettings } from 'twenty-ui';

import { SettingsPageContainer } from '@/settings/components/SettingsPageContainer';
import { useSettingsIntegrationCategories } from '@/settings/integrations/hooks/useSettingsIntegrationCategories';
import { getSettingsPagePath } from '@/settings/utils/getSettingsPagePath';
import { AppPath } from '@/types/AppPath';
import { SettingsPath } from '@/types/SettingsPath';
import { H2Title } from '@/ui/display/typography/components/H2Title';
import { SubMenuTopBarContainer } from '@/ui/layout/page/SubMenuTopBarContainer';
import { Section } from '@/ui/layout/section/components/Section';
import { Breadcrumb } from '@/ui/navigation/bread-crumb/components/Breadcrumb';
import { useIsFeatureEnabled } from '@/workspace/hooks/useIsFeatureEnabled';
import { SettingsIntegrationDatabaseConnectionSummaryCard } from '~/pages/settings/integrations/SettingsIntegrationDatabaseConnectionSummaryCard';
import { mockedRemoteObjectIntegrations } from '~/testing/mock-data/remoteObjectDatabases';

export const SettingsIntegrationDatabaseConnection = () => {
  const { databaseKey = '', connectionKey = '' } = useParams();
  const navigate = useNavigate();

  const [integrationCategoryAll] = useSettingsIntegrationCategories();
  const integration = integrationCategoryAll.integrations.find(
    ({ from: { key } }) => key === databaseKey,
  );

  const isAirtableIntegrationEnabled = useIsFeatureEnabled(
    'IS_AIRTABLE_INTEGRATION_ENABLED',
  );
  const isPostgresqlIntegrationEnabled = useIsFeatureEnabled(
    'IS_POSTGRESQL_INTEGRATION_ENABLED',
  );
  const isIntegrationAvailable =
    !!integration &&
    ((databaseKey === 'airtable' && isAirtableIntegrationEnabled) ||
      (databaseKey === 'postgresql' && isPostgresqlIntegrationEnabled));

  const connections =
    mockedRemoteObjectIntegrations.find(
      ({ key }) => key === integration?.from.key,
    )?.connections || [];
  const connection = connections.find(({ key }) => key === connectionKey);

  useEffect(() => {
    if (!isIntegrationAvailable || !connection) {
      navigate(AppPath.NotFound);
    }
  }, [integration, databaseKey, navigate, isIntegrationAvailable, connection]);

  if (!isIntegrationAvailable || !connection) return null;

  return (
    <SubMenuTopBarContainer Icon={IconSettings} title="Settings">
      <SettingsPageContainer>
        <Breadcrumb
          links={[
            {
              children: 'Integrations',
              href: getSettingsPagePath(SettingsPath.Integrations),
            },
            {
              children: integration.text,
              href: `/settings/integrations/${databaseKey}`,
            },
            { children: connection.name },
          ]}
        />
        <Section>
          <H2Title title="About" description="About this remote object" />
          <SettingsIntegrationDatabaseConnectionSummaryCard
            databaseLogoUrl={integration.from.image}
            connectionName={connection.name}
            connectedTablesNb={connection.tables.length}
          />
        </Section>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
