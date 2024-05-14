import { DistantTables } from 'src/engine/metadata-modules/remote-server/remote-table/distant-table/types/distant-table';

export const STRIPE_DISTANT_TABLES: DistantTables = {
  balance_transactions: [
    { columnName: 'id', dataType: 'text', udtName: 'text' },
    { columnName: 'amount', dataType: 'bigint', udtName: 'int8' },
    { columnName: 'currency', dataType: 'text', udtName: 'text' },
    { columnName: 'description', dataType: 'text', udtName: 'text' },
    { columnName: 'fee', dataType: 'bigint', udtName: 'int8' },
    { columnName: 'net', dataType: 'bigint', udtName: 'int8' },
    { columnName: 'status', dataType: 'text', udtName: 'text' },
    { columnName: 'type', dataType: 'text', udtName: 'text' },
    { columnName: 'created', dataType: 'timestamp', udtName: 'timestamp' },
  ],
  customers: [
    { columnName: 'id', dataType: 'text', udtName: 'text' },
    { columnName: 'email', dataType: 'text', udtName: 'text' },
    { columnName: 'name', dataType: 'text', udtName: 'text' },
    { columnName: 'description', dataType: 'text', udtName: 'text' },
    { columnName: 'created', dataType: 'timestamp', udtName: 'timestamp' },
  ],
  disputes: [
    { columnName: 'id', dataType: 'text', udtName: 'text' },
    { columnName: 'amount', dataType: 'bigint', udtName: 'int8' },
    { columnName: 'currency', dataType: 'text', udtName: 'text' },
    { columnName: 'charge', dataType: 'text', udtName: 'text' },
    { columnName: 'payment_intent', dataType: 'text', udtName: 'text' },
    { columnName: 'reason', dataType: 'text', udtName: 'text' },
    { columnName: 'status', dataType: 'text', udtName: 'text' },
    { columnName: 'created', dataType: 'timestamp', udtName: 'timestamp' },
  ],
  files: [
    { columnName: 'id', dataType: 'text', udtName: 'text' },
    { columnName: 'filename', dataType: 'text', udtName: 'text' },
    { columnName: 'purpose', dataType: 'text', udtName: 'text' },
    { columnName: 'title', dataType: 'text', udtName: 'text' },
    { columnName: 'size', dataType: 'bigint', udtName: 'int8' },
    { columnName: 'type', dataType: 'text', udtName: 'text' },
    { columnName: 'url', dataType: 'text', udtName: 'text' },
    { columnName: 'created', dataType: 'timestamp', udtName: 'timestamp' },
    { columnName: 'expires_at', dataType: 'timestamp', udtName: 'timestamp' },
  ],
  file_links: [
    { columnName: 'id', dataType: 'text', udtName: 'text' },
    { columnName: 'file', dataType: 'text', udtName: 'text' },
    { columnName: 'url', dataType: 'text', udtName: 'text' },
    { columnName: 'created', dataType: 'timestamp', udtName: 'timestamp' },
    { columnName: 'expired', dataType: 'bool', udtName: 'boolean' },
    { columnName: 'expires_at', dataType: 'timestamp', udtName: 'timestamp' },
  ],
  mandates: [
    { columnName: 'id', dataType: 'text', udtName: 'text' },
    { columnName: 'payment_method', dataType: 'text', udtName: 'text' },
    { columnName: 'status', dataType: 'text', udtName: 'text' },
    { columnName: 'type', dataType: 'text', udtName: 'text' },
  ],
  payouts: [
    { columnName: 'id', dataType: 'text', udtName: 'text' },
    { columnName: 'amount', dataType: 'bigint', udtName: 'int8' },
    { columnName: 'currency', dataType: 'text', udtName: 'text' },
    { columnName: 'description', dataType: 'text', udtName: 'text' },
    { columnName: 'status', dataType: 'text', udtName: 'text' },
    { columnName: 'created', dataType: 'timestamp', udtName: 'timestamp' },
  ],
  refunds: [
    { columnName: 'id', dataType: 'text', udtName: 'text' },
    { columnName: 'amount', dataType: 'bigint', udtName: 'int8' },
    { columnName: 'currency', dataType: 'text', udtName: 'text' },
    { columnName: 'charge', dataType: 'text', udtName: 'text' },
    { columnName: 'payment_intent', dataType: 'text', udtName: 'text' },
    { columnName: 'reason', dataType: 'text', udtName: 'text' },
    { columnName: 'status', dataType: 'text', udtName: 'text' },
    { columnName: 'created', dataType: 'timestamp', udtName: 'timestamp' },
  ],
  topups: [
    { columnName: 'id', dataType: 'text', udtName: 'text' },
    { columnName: 'amount', dataType: 'bigint', udtName: 'int8' },
    { columnName: 'currency', dataType: 'text', udtName: 'text' },
    { columnName: 'description', dataType: 'text', udtName: 'text' },
    { columnName: 'status', dataType: 'text', udtName: 'text' },
    { columnName: 'created', dataType: 'timestamp', udtName: 'timestamp' },
  ],
  transfers: [
    { columnName: 'id', dataType: 'text', udtName: 'text' },
    { columnName: 'amount', dataType: 'bigint', udtName: 'int8' },
    { columnName: 'currency', dataType: 'text', udtName: 'text' },
    { columnName: 'description', dataType: 'text', udtName: 'text' },
    { columnName: 'destination', dataType: 'text', udtName: 'text' },
    { columnName: 'created', dataType: 'timestamp', udtName: 'timestamp' },
  ],
};
