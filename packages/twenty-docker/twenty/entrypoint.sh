#!/bin/sh

# Check if the initialization has already been done and that we enabled automatic migration
if [ "${ENABLE_DB_MIGRATIONS}" = "true" ] && [ ! -f /app/docker-data/db_status ]; then
    echo "Running database setup and migrations..."

    # Creating the database if it doesn't exist
    PGUSER=$(echo $PG_DATABASE_URL | awk -F '//' '{print $2}' | awk -F ':' '{print $1}')
    PGPASS=$(echo $PG_DATABASE_URL | awk -F ':' '{print $3}' | awk -F '@' '{print $1}')
    PGHOST=$(echo $PG_DATABASE_URL | awk -F '@' '{print $2}' | awk -F '/' '{print $1}')
    PGPASSWORD=${PGPASSWORD_SUPERUSER} psql -h ${PGHOST} -p 5432 -U ${PGUSER_SUPERUSER} -d postgres -tc "SELECT 1 FROM pg_database WHERE datname = 'default'" | grep -q 1 || \
    PGPASSWORD=${PGPASSWORD_SUPERUSER} psql -h ${PGHOST} -p 5432 -U ${PGUSER_SUPERUSER} -d postgres -c "CREATE DATABASE \"default\""

    # Run setup and migration scripts
    NODE_OPTIONS="--max-old-space-size=1500" tsx ./scripts/setup-db.ts
    yarn database:migrate:prod

    # Mark initialization as done
    echo "Successfuly migrated DB!"
    touch /app/docker-data/db_status
fi

# Continue with the original Docker command
exec "$@"
