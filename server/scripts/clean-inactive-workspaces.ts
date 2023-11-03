import console from 'console';

import { connectionSource, performQuery } from './utils';

const getWorkspacesFromSchema = async () => {
  return await performQuery(
    `
        SELECT nspname FROM pg_catalog.pg_namespace 
        WHERE nspname LIKE 'workspace_twenty%';
      `,
    'List workspaces',
  );
};

const getTables = async (workspace) => {
  return await performQuery(
    `
            select * from pg_tables where schemaname='${workspace.nspname}';
        `,
    'List tables',
  );
};
const getMaxUpdatedAt = async (table) => {
  return await performQuery(
    `
          select MAX("updatedAt") from ${table.schemaname}."${table.tablename}";
      `,
    `Get max updatedAt from table ${table}`,
    false,
  );
};

const logMaxUpdatedAtFromWorkspaceSchema = async () => {
  const workspaces = await getWorkspacesFromSchema();
  for (const workspace of workspaces) {
    const tables = await getTables(workspace);
    let maxUpdatedAt;
    for (const table of tables) {
      const updatedAt = await getMaxUpdatedAt(table);
      if (
        updatedAt[0].max &&
        (!maxUpdatedAt || maxUpdatedAt < new Date(updatedAt[0].max))
      ) {
        maxUpdatedAt = updatedAt[0].max;
      }
    }
    console.log('maxUpdatedAt for ', workspace.nspname, maxUpdatedAt);
  }
};
connectionSource
  .initialize()
  .then(async () => {
    await logMaxUpdatedAtFromWorkspaceSchema();
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
