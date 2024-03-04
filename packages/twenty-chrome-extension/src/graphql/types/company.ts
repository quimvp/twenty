export type Company = {
  name: string;
  domainName?: string;
  address?: string;
  accountOwnerId?: string | null;
  linkedinLink?: { url: string; label: string };
  xLink?: { url: string; label: string };
  annualRecurringRevenue?: {
    amountMicros: number | null;
    currencyCode: string;
  };
  employees?: number | null;
};
