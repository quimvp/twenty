import { FieldMetadataType } from '~/generated-metadata/graphql';

export const fieldValue = [
  {
    __typename: 'Company',
    domainName: 'google.com',
    xLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
    name: 'Google',
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: '',
    },
    employees: null,
    accountOwnerId: null,
    address: '',
    idealCustomerProfile: false,
    createdAt: '2024-05-01T13:16:29.046Z',
    id: '20202020-c21e-4ec2-873b-de4264d89025',
    position: 6,
    updatedAt: '2024-05-01T13:16:29.046Z',
    linkedinLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
  },
  {
    __typename: 'Company',
    domainName: 'airbnb.com',
    xLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
    name: 'Airbnb',
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: '',
    },
    employees: null,
    accountOwnerId: null,
    address: '',
    idealCustomerProfile: false,
    createdAt: '2024-05-01T13:16:29.046Z',
    id: '20202020-171e-4bcc-9cf7-43448d6fb278',
    position: 6,
    updatedAt: '2024-05-01T13:16:29.046Z',
    linkedinLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
  },
];

export const otherPersonMock = {
  entityValue: {
    __typename: 'Person',
    asd: '',
    city: 'Paris',
    jobTitle: '',
    name: 'John Doe',
    createdAt: '2024-05-01T13:16:29.046Z',
    company: {
      __typename: 'Company',
      domainName: 'google.com',
      xLink: {
        __typename: 'Link',
        label: '',
        url: '',
      },
      name: 'Google',
      annualRecurringRevenue: {
        __typename: 'Currency',
        amountMicros: null,
        currencyCode: '',
      },
      employees: null,
      accountOwnerId: null,
      address: '',
      idealCustomerProfile: false,
      createdAt: '2024-05-01T13:16:29.046Z',
      id: '20202020-c21e-4ec2-873b-de4264d89025',
      position: 6,
      updatedAt: '2024-05-01T13:16:29.046Z',
      linkedinLink: {
        __typename: 'Link',
        label: '',
        url: '',
      },
    },
    id: 'd3e70589-c449-4e64-8268-065640fdaff0',
    email: 'john.doe@google.com',
    phone: '+33744332211',
    linkedinLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
    xLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
    tEst: '',
    position: 14,
  },
};

export const relationFromManyFieldDisplayMock = {
  entityId: '20202020-2d40-4e49-8df4-9c6a049191df',
  relationEntityId: '20202020-c21e-4ec2-873b-de4264d89025',
  entityValue: {
    __typename: 'Person',
    asd: '',
    city: 'Seattle',
    jobTitle: '',
    name: 'Lorie Vladim',
    createdAt: '2024-05-01T13:16:29.046Z',
    company: {
      __typename: 'Company',
      domainName: 'google.com',
      xLink: {
        __typename: 'Link',
        label: '',
        url: '',
      },
      name: 'Google',
      annualRecurringRevenue: {
        __typename: 'Currency',
        amountMicros: null,
        currencyCode: '',
      },
      employees: null,
      accountOwnerId: null,
      address: '',
      idealCustomerProfile: false,
      createdAt: '2024-05-01T13:16:29.046Z',
      id: '20202020-c21e-4ec2-873b-de4264d89025',
      position: 6,
      updatedAt: '2024-05-01T13:16:29.046Z',
      linkedinLink: {
        __typename: 'Link',
        label: '',
        url: '',
      },
    },
    id: '20202020-2d40-4e49-8df4-9c6a049191df',
    email: 'lorie.vladim@google.com',
    phone: '+33788901235',
    linkedinLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
    xLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
    tEst: '',
    position: 15,
  },
  relationFieldValue: {
    __typename: 'Company',
    domainName: 'microsoft.com',
    xLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
    name: 'Microsoft',
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: '',
    },
    employees: null,
    accountOwnerId: null,
    address: '',
    idealCustomerProfile: false,
    createdAt: '2024-05-01T13:16:29.046Z',
    id: '20202020-ed89-413a-b31a-962986e67bb4',
    position: 4,
    updatedAt: '2024-05-01T13:16:29.046Z',
    linkedinLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
  },
  fieldDefinition: {
    fieldMetadataId: '4e79f0b7-d100-4e89-a07b-315a710b8059',
    label: 'Company',
    metadata: {
      fieldName: 'company',
      placeHolder: 'Company',
      relationType: 'FROM_MANY_OBJECTS',
      relationFieldMetadataId: '01fa2247-7937-4493-b7e2-3d72f05d6d25',
      relationObjectMetadataNameSingular: 'company',
      relationObjectMetadataNamePlural: 'companies',
      objectMetadataNameSingular: 'person',
      options: null,
    },
    type: FieldMetadataType.Relation,
    iconName: 'IconUsers',
    defaultValue: null,
    editButtonIcon: {
      propTypes: {},
    },
    position: 3,
    size: 100,
    isLabelIdentifier: false,
    isVisible: true,
  },
};
