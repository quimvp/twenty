export const mockedObjectMetadataItems = {
  edges: [
    {
      node: {
        id: 'b25eb5e6-9fdc-4df2-a039-40ccea4c8032',
        dataSourceId: '',
        nameSingular: 'viewV2',
        namePlural: 'viewsV2',
        labelSingular: 'View',
        labelPlural: 'Views',
        description: '(System) Views',
        icon: 'IconLayoutCollage',
        isCustom: false,
        isActive: true,
        createdAt: '',
        updatedAt: '',
        fields: {
          edges: [
            {
              node: {
                id: '5db475e7-8208-402d-97a1-62c9ce344dd4',
                type: 'TEXT',
                name: 'objectMetadataId',
                label: 'Object Id',
                description: 'View target object',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: 'ddc89a56-9add-4110-aa53-4ecdbba36767',
                type: 'TEXT',
                name: 'type',
                label: 'Type',
                description: 'View type',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: '35fa806b-5d9d-446d-bd0e-1a6874b871ee',
                type: 'TEXT',
                name: 'name',
                label: 'Name',
                description: 'View name',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
            endCursor: null,
          },
          totalCount: 3,
        },
      },
    },
    {
      node: {
        id: 'c419540f-ff6e-47bf-9d87-3aa366afd8e4',
        dataSourceId: '',
        nameSingular: 'viewFieldV2',
        namePlural: 'viewFieldsV2',
        labelSingular: 'View Field',
        labelPlural: 'View Fields',
        description: '(System) View Fields',
        icon: 'IconColumns3',
        isCustom: false,
        isActive: true,
        createdAt: '',
        updatedAt: '',
        fields: {
          edges: [
            {
              node: {
                id: '1d718fcf-5a17-4694-91a4-4d3968a51aa4',
                type: 'TEXT',
                name: 'viewId',
                label: 'View Id',
                description: 'View Field related view',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: '8ead2e86-7b60-4a47-9b4f-ad008e744d52',
                type: 'NUMBER',
                name: 'position',
                label: 'Position',
                description: 'View Field position',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: '4d77c2dd-2b04-4989-b11e-cb0e386d1b4d',
                type: 'TEXT',
                name: 'fieldMetadataId',
                label: 'Field Id',
                description: 'View Field target field',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: '0f5ab566-9fc4-44b7-85c5-1e05db9f6b49',
                type: 'BOOLEAN',
                name: 'isVisible',
                label: 'Visible',
                description: 'View Field visibility',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: '21268ece-7002-4b04-a442-f25278f8ca13',
                type: 'NUMBER',
                name: 'size',
                label: 'Size',
                description: 'View Field size',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
            endCursor: null,
          },
          totalCount: 5,
        },
      },
    },
    {
      node: {
        id: 'a3195559-cc20-4749-9565-572a2f506581',
        dataSourceId: '',
        nameSingular: 'company',
        namePlural: 'companies',
        labelSingular: 'Company',
        labelPlural: 'Companies',
        description: null,
        icon: 'IconBuildingSkyscraper',
        isCustom: false,
        isActive: true,
        createdAt: '',
        updatedAt: '',
        fields: {
          edges: [
            {
              node: {
                id: '397eabc0-c5a1-4550-8e68-839c878a8d0e',
                type: 'TEXT',
                name: 'name',
                label: 'Name',
                description: 'The company name.',
                placeholder: null,
                icon: 'IconBuildingSkyscraper',
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: '7ad234c7-f3b9-4efc-813c-43dc97070b07',
                type: 'URL',
                name: 'URL',
                label: 'URL',
                description:
                  'The company website URL. We use this url to fetch the company icon.',
                placeholder: null,
                icon: 'IconLink',
                isCustom: false,
                isActive: true,
                isNullable: true,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: 'a578ffb2-13db-483c-ace7-5c30a13dff2d',
                type: 'RELATION',
                name: 'accountOwner',
                label: 'Account Owner',
                description:
                  'Your team member responsible for managing the company account.',
                placeholder: null,
                icon: 'IconUserCircle',
                isCustom: false,
                isActive: true,
                isNullable: true,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: 'b7fd622d-7d8b-4f5a-b148-a7e9fd2c4660',
                type: 'NUMBER',
                name: 'employees',
                label: 'Employees',
                description: 'Number of employees in the company.',
                placeholder: null,
                icon: 'IconUsers',
                isCustom: true,
                isActive: true,
                isNullable: true,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: '60ab27ed-a959-471e-b583-887387f7accd',
                type: 'URL',
                name: 'linkedin',
                label: 'Linkedin',
                description: null,
                placeholder: null,
                icon: 'IconBrandLinkedin',
                isCustom: false,
                isActive: true,
                isNullable: true,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: '6daadb98-83ca-4c85-bca5-7792a7d958ad',
                type: 'BOOLEAN',
                name: 'prioritySupport',
                label: 'Priority Support',
                description: 'Whether the company has priority support.',
                placeholder: null,
                icon: 'IconHeadphones',
                isCustom: true,
                isActive: false,
                isNullable: true,
                createdAt: '',
                updatedAt: '',
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
            endCursor: null,
          },
          totalCount: 6,
        },
      },
    },
    {
      node: {
        id: 'c973efa3-436e-47ea-8dbc-983ed869c04d',
        dataSourceId: '',
        nameSingular: 'workspace',
        namePlural: 'workspaces',
        labelSingular: 'Workspace',
        labelPlural: 'Workspaces',
        description: null,
        icon: 'IconApps',
        isCustom: true,
        isActive: true,
        createdAt: '',
        updatedAt: '',
        fields: {
          edges: [
            {
              node: {
                id: 'f955402c-9e8f-4b91-a82c-95f6de392b99',
                type: 'TEXT',
                name: 'slug',
                label: 'Slug',
                description: null,
                placeholder: null,
                icon: 'IconSlash',
                isCustom: true,
                isActive: true,
                isNullable: true,
                createdAt: '',
                updatedAt: '',
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
            endCursor: null,
          },
          totalCount: 1,
        },
      },
    },
  ],
  pageInfo: {
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: null,
    endCursor: null,
  },
  totalCount: 4,
};
