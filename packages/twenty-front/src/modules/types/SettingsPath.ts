export enum SettingsPath {
  ProfilePage = 'profile',
  Appearance = 'appearance',
  Accounts = 'accounts',
  NewAccount = 'accounts/new',
  AccountsCalendars = 'accounts/calendars',
  AccountsCalendarsSettings = 'accounts/calendars/:accountUuid',
  AccountsEmails = 'accounts/emails',
  AccountsEmailsInboxSettings = 'accounts/emails/:accountUuid',
  Billing = 'billing',
  Objects = 'objects',
  ObjectOverview = 'objects/overview',
  ObjectDetail = 'objects/:objectSlug',
  ObjectNewFieldSelect = 'objects/:objectSlug/new-field/select',
  ObjectNewFieldConfigure = 'objects/:objectSlug/new-field/configure',
  ObjectFieldEdit = 'objects/:objectSlug/:fieldSlug',
  NewObject = 'objects/new',
  NewServerlessFunction = 'functions/new',
  ServerlessFunctionDetail = 'functions/:serverlessFunctionId',
  WorkspaceMembersPage = 'workspace-members',
  Workspace = 'workspace',
  CRMMigration = 'crm-migration',
  Developers = 'developers',
  ServerlessFunctions = 'functions',
  DevelopersNewApiKey = 'api-keys/new',
  DevelopersApiKeyDetail = 'api-keys/:apiKeyId',
  Integrations = 'integrations',
  IntegrationDatabase = 'integrations/:databaseKey',
  IntegrationDatabaseConnection = 'integrations/:databaseKey/:connectionId',
  IntegrationEditDatabaseConnection = 'integrations/:databaseKey/:connectionId/edit',
  IntegrationNewDatabaseConnection = 'integrations/:databaseKey/new',
  Security = 'security',
  NewSSOIdentityProvider = 'security/sso/new',
  EditSSOIdentityProvider = 'security/sso/:identityProviderId',
  DevelopersNewWebhook = 'webhooks/new',
  DevelopersNewWebhookDetail = 'webhooks/:webhookId',
  Releases = 'releases',
  Admin = 'admin',
  FeatureFlags = 'admin/feature-flags',
}
