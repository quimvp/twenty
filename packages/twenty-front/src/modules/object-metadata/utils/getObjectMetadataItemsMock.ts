import { ObjectMetadataItem } from '@/object-metadata/types/ObjectMetadataItem';

export const COMPANY_LABEL_IDENTIFIER_FIELD_METADATA_ID = '39403bee-314b-4f14-bc91-70d500397517';
export const COMPANY_OBJECT_METADATA_ID = 'f1231579-8e7d-4b84-9a60-41844902f2c4';

export const getObjectMetadataItemsMock = () => {
    const mockArray = [
        {
            "__typename": "object",
            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "person",
            "namePlural": "people",
            "labelSingular": "Person",
            "labelPlural": "People",
            "description": "A person",
            "icon": "IconUser",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": false,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "f01f1b33-0a27-49a7-b119-5f9bd58477a5",
            "imageIdentifierFieldMetadataId": "ef9ff5ea-8aff-4d91-9ab6-6dc38d3eccbe",
            "fields": [
                {
                    "__typename": "field",
                    "id": "102963b7-3e77-4293-a1e6-1ab59a02b663",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6697751c-3150-483b-8167-c5bc1d620c10",
                    "type": "UUID",
                    "name": "myCustomObjectId",
                    "label": "myCustomObject Foreign Key",
                    "description": null,
                    "icon": null,
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:10:31.391Z",
                    "updatedAt": "2024-08-05T17:10:31.391Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e1ecbeb4-76cb-4f9a-8829-ac0665854c69",
                    "type": "RELATION",
                    "name": "pointOfContactForOpportunities",
                    "label": "Linked Opportunities",
                    "description": "List of opportunities for which that person is the point of contact",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "3e039f55-e535-406a-8a80-185123910b7a",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "e1ecbeb4-76cb-4f9a-8829-ac0665854c69",
                            "name": "pointOfContactForOpportunities"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "dc7898b0-d2b7-4910-bedc-a6fe8eb4c41e",
                            "name": "pointOfContact"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "194ff398-99f9-4cbb-b87a-e44408f9c1ed",
                    "type": "PHONES",
                    "name": "whatsapp",
                    "label": "Whatsapp",
                    "description": "Contact's Whatsapp Number",
                    "icon": "IconBrandWhatsapp",
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:39:01.956Z",
                    "updatedAt": "2024-08-05T16:39:01.956Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "d2729410-3db8-44b0-b88f-fa3ba9b10650",
                    "type": "LINKS",
                    "name": "linkedinLink",
                    "label": "Linkedin",
                    "description": "Contact’s Linkedin account",
                    "icon": "IconBrandLinkedin",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "primaryLinkUrl": "''",
                        "secondaryLinks": null,
                        "primaryLinkLabel": "''"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f01f1b33-0a27-49a7-b119-5f9bd58477a5",
                    "type": "FULL_NAME",
                    "name": "name",
                    "label": "Name",
                    "description": "Contact’s name",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "lastName": "''",
                        "firstName": "''"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "a6d4fe23-a569-4cbb-a68c-96e30a0b0d5b",
                    "type": "EMAIL",
                    "name": "email",
                    "label": "Email",
                    "description": "Contact’s Email",
                    "icon": "IconMail",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "55a856ae-0a48-4ff6-874d-b630818c8cea",
                    "type": "POSITION",
                    "name": "position",
                    "label": "Position",
                    "description": "Person record Position",
                    "icon": "IconHierarchy2",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "d44bf743-b557-47d4-9341-04114fd05d52",
                    "type": "RELATION",
                    "name": "calendarEventParticipants",
                    "label": "Calendar Event Participants",
                    "description": "Calendar Event Participants",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "20d67b64-4e67-44a1-81c7-116c0c8c6368",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "d44bf743-b557-47d4-9341-04114fd05d52",
                            "name": "calendarEventParticipants"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "2128a43e-af47-44bf-b7e9-5d00ddd27a99",
                            "nameSingular": "calendarEventParticipant",
                            "namePlural": "calendarEventParticipants"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "a7eb211d-4481-4269-99d7-cf2183b45598",
                            "name": "person"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "9b018bba-687b-4850-9e0e-c192d3b5977d",
                    "type": "RELATION",
                    "name": "activityTargets",
                    "label": "Activities",
                    "description": "Activities tied to the contact",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "9a3a145b-6d06-4892-84d4-af523f40c58d",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "9b018bba-687b-4850-9e0e-c192d3b5977d",
                            "name": "activityTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "648268ca-94bf-418e-853c-56d0f51472b3",
                            "nameSingular": "activityTarget",
                            "namePlural": "activityTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "940d1664-b17c-4f66-820b-abfec70adaa5",
                            "name": "person"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "4c9ba269-244f-4768-a52d-9b1ffbe3339f",
                    "type": "RELATION",
                    "name": "taskTargets",
                    "label": "Tasks",
                    "description": "Tasks tied to the contact",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "182b32c3-9ee9-4a65-937b-d9035ab65300",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "4c9ba269-244f-4768-a52d-9b1ffbe3339f",
                            "name": "taskTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "77d124cc-049a-44f9-ab59-56e3dd55bb69",
                            "nameSingular": "taskTarget",
                            "namePlural": "taskTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "fc1a31f8-6e1c-4ce1-b6ff-80d1cd605e58",
                            "name": "person"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "e41d7b2e-3e60-4741-b410-a432b1a12b77",
                    "type": "ACTOR",
                    "name": "createdBy",
                    "label": "Created by",
                    "description": "The creator of the record",
                    "icon": "IconCreativeCommonsSa",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "name": "''",
                        "source": "'MANUAL'"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "ef9ff5ea-8aff-4d91-9ab6-6dc38d3eccbe",
                    "type": "TEXT",
                    "name": "avatarUrl",
                    "label": "Avatar",
                    "description": "Contact’s avatar",
                    "icon": "IconFileUpload",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c9d4cb92-7460-4bee-8ed7-0fbdca4ba546",
                    "type": "TEXT",
                    "name": "jobTitle",
                    "label": "Job Title",
                    "description": "Contact’s job title",
                    "icon": "IconBriefcase",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "d1fb7174-82ab-4e31-8e1c-53036d0eefe2",
                    "type": "LINKS",
                    "name": "xLink",
                    "label": "X",
                    "description": "Contact’s X/Twitter account",
                    "icon": "IconBrandX",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "primaryLinkUrl": "''",
                        "secondaryLinks": null,
                        "primaryLinkLabel": "''"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "ff809df8-9372-4345-9a73-393960c31950",
                    "type": "RATING",
                    "name": "performanceRating",
                    "label": "Performance Rating",
                    "description": "Person's Performance Rating",
                    "icon": "IconStars",
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:39:01.997Z",
                    "updatedAt": "2024-08-05T16:39:01.997Z",
                    "defaultValue": null,
                    "options": [
                        {
                            "id": "d0d6de5e-0bf5-4cdd-a599-1f8005723f6e",
                            "label": "1",
                            "value": "RATING_1",
                            "position": 0
                        },
                        {
                            "id": "a0c86a34-6914-43b0-a7ab-9fb4f9b9641c",
                            "label": "2",
                            "value": "RATING_2",
                            "position": 1
                        },
                        {
                            "id": "750dd542-0172-42da-ae00-50423f0179d3",
                            "label": "3",
                            "value": "RATING_3",
                            "position": 2
                        },
                        {
                            "id": "8b935586-9844-49f1-ad92-3e633d613ede",
                            "label": "4",
                            "value": "RATING_4",
                            "position": 3
                        },
                        {
                            "id": "eab17ee7-5aa8-40b1-a431-34438ba6b54e",
                            "label": "5",
                            "value": "RATING_5",
                            "position": 4
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6672a066-7a7f-44ae-bb5c-ae3a5e82d835",
                    "type": "RELATION",
                    "name": "company",
                    "label": "Company",
                    "description": "Contact’s company",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "0562d399-7053-4d7f-a415-cabfc889bd16",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "6672a066-7a7f-44ae-bb5c-ae3a5e82d835",
                            "name": "company"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "48dba12f-4429-4ee2-9b3a-6df97c45141d",
                            "name": "people"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "c08e6ba8-b7ef-4fa7-b199-c8e93045f8ee",
                    "type": "RELATION",
                    "name": "timelineActivities",
                    "label": "Events",
                    "description": "Events linked to the person",
                    "icon": "IconTimelineEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "ba3d762d-8fbf-45e5-a958-136a269a396d",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "c08e6ba8-b7ef-4fa7-b199-c8e93045f8ee",
                            "name": "timelineActivities"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "69e1ecef-09d7-4b53-826e-f440ae72d2b7",
                            "name": "person"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "1b21ef27-ba22-46ab-967e-f2d9f780bf8b",
                    "type": "RELATION",
                    "name": "attachments",
                    "label": "Attachments",
                    "description": "Attachments linked to the contact.",
                    "icon": "IconFileImport",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "4b90ec4b-3199-4cea-9e8b-01498967bd9f",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "1b21ef27-ba22-46ab-967e-f2d9f780bf8b",
                            "name": "attachments"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "df6ee118-1cb0-4b2e-8668-3693d4d87ae2",
                            "name": "person"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "9fbf2632-6f28-400d-86d7-3cadfbbcf7ac",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "9c2bf923-304d-47b7-beb0-286e3229f6ac",
                    "type": "PHONES",
                    "name": "phone",
                    "label": "Phone",
                    "description": "Contact’s phone number",
                    "icon": "IconPhone",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "4cd944c2-a252-42c2-93d3-c71d71b4587d",
                    "type": "RELATION",
                    "name": "favorites",
                    "label": "Favorites",
                    "description": "Favorites linked to the contact",
                    "icon": "IconHeart",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "66551942-e576-4eb7-96c4-f78182f44491",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "4cd944c2-a252-42c2-93d3-c71d71b4587d",
                            "name": "favorites"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "b7caceaa-d49a-43c8-8b9b-10dc4298ade5",
                            "name": "person"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "c817d48c-071b-47f0-917c-5e0717678c5c",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "22b21809-4eab-43a9-9ddc-0bbe04daffe3",
                    "type": "TEXT",
                    "name": "city",
                    "label": "City",
                    "description": "Contact’s city",
                    "icon": "IconMap",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "4227c9a5-6dd3-4de0-9248-e62572afc92b",
                    "type": "RELATION",
                    "name": "messageParticipants",
                    "label": "Message Participants",
                    "description": "Message Participants",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "f26f3e6e-35bf-474a-9679-fbfbb009d67d",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "4227c9a5-6dd3-4de0-9248-e62572afc92b",
                            "name": "messageParticipants"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "b889efa2-e58a-471c-b258-3c5ef2fa09e9",
                            "nameSingular": "messageParticipant",
                            "namePlural": "messageParticipants"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "3779c76a-30a8-45bc-a56a-6bfc084a9b29",
                            "name": "person"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "14c3ddf2-a50b-40c3-9f93-6f3108c0dd72",
                    "type": "UUID",
                    "name": "companyId",
                    "label": "Company id (foreign key)",
                    "description": "Contact’s company id foreign key",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "9048daf8-bd6f-4c83-8887-14c764ec0053",
                    "type": "TEXT",
                    "name": "intro",
                    "label": "Intro",
                    "description": "Contact's Intro",
                    "icon": "IconNote",
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:39:01.936Z",
                    "updatedAt": "2024-08-05T16:39:01.936Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "1c1c7ffc-3a45-4069-996a-bdfa8f46b037",
                    "type": "RELATION",
                    "name": "noteTargets",
                    "label": "Notes",
                    "description": "Notes tied to the contact",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "9d20f0c0-e37b-48ca-bc45-da16461aa547",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "1c1c7ffc-3a45-4069-996a-bdfa8f46b037",
                            "name": "noteTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "bd4e44a0-4b0d-4392-b0c9-d6c8684e3d44",
                            "nameSingular": "noteTarget",
                            "namePlural": "noteTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "2f2fc7fb-51c5-4084-8d97-13b43b49c68a",
                            "name": "person"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "f7002609-5760-4ae6-ba29-a8b9066b95de",
                    "type": "RELATION",
                    "name": "myCustomObject",
                    "label": "myCustomObject",
                    "description": null,
                    "icon": "IconUser",
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:10:31.391Z",
                    "updatedAt": "2024-08-05T17:10:31.391Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "27f9741d-f967-4b75-affa-240f0f5f8d77",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "f7002609-5760-4ae6-ba29-a8b9066b95de",
                            "name": "myCustomObject"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "23006c79-19fe-4148-9ee4-6db039ebc6fb",
                            "name": "people"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "fdcffad9-a55c-4a74-9d3e-e0052cb3454e",
                    "type": "MULTI_SELECT",
                    "name": "workPrefereance",
                    "label": "Work Preference",
                    "description": "Person's Work Preference",
                    "icon": "IconHome",
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:39:01.977Z",
                    "updatedAt": "2024-08-05T16:39:01.977Z",
                    "defaultValue": null,
                    "options": [
                        {
                            "id": "05ae5e3e-80bb-4a89-8539-de88f875384e",
                            "color": "green",
                            "label": "On-Site",
                            "value": "ON_SITE",
                            "position": 0
                        },
                        {
                            "id": "fa7fb51a-3c52-48db-ac7c-ba23daed31cc",
                            "color": "turquoise",
                            "label": "Hybrid",
                            "value": "HYBRID",
                            "position": 1
                        },
                        {
                            "id": "c29d7f0e-f82b-4bff-973a-5081f6d60a39",
                            "color": "sky",
                            "label": "Remote Work",
                            "value": "REMOTE_WORK",
                            "position": 2
                        }
                    ],
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "f62992f2-80ef-477c-ae60-fc7a862b0f4a",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "note",
            "namePlural": "notes",
            "labelSingular": "Note",
            "labelPlural": "Notes",
            "description": "A note",
            "icon": "IconNotes",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": false,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "2be5c772-b9f3-4851-9d9e-8990f81c475e",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "6c2c95b9-8e58-4956-a796-926fec68c67a",
                    "type": "ACTOR",
                    "name": "createdBy",
                    "label": "Created by",
                    "description": "The creator of the record",
                    "icon": "IconCreativeCommonsSa",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "name": "''",
                        "source": "'MANUAL'"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "854f4b18-7f4a-458a-b4b8-47ab09478625",
                    "type": "POSITION",
                    "name": "position",
                    "label": "Position",
                    "description": "Note record position",
                    "icon": "IconHierarchy2",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "eb26a816-6dbd-4128-9a5f-fe92dd63ba55",
                    "type": "RICH_TEXT",
                    "name": "body",
                    "label": "Body",
                    "description": "Note body",
                    "icon": "IconFilePencil",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "383d3f90-d691-4487-a13d-e80c50fb756e",
                    "type": "RELATION",
                    "name": "timelineActivities",
                    "label": "Timeline Activities",
                    "description": "Timeline Activities linked to the note.",
                    "icon": "IconTimelineEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "bc6b24e6-9fcd-43fd-a2ba-c12f5d022132",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f62992f2-80ef-477c-ae60-fc7a862b0f4a",
                            "nameSingular": "note",
                            "namePlural": "notes"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "383d3f90-d691-4487-a13d-e80c50fb756e",
                            "name": "timelineActivities"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "99599532-c0e9-4d62-b4a6-89866e0374be",
                            "name": "note"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "a723f071-bc95-4a94-84d5-0f5904d88ea7",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "ff8e5043-6168-4c65-984d-ef4d28eb76ce",
                    "type": "RELATION",
                    "name": "favorites",
                    "label": "Favorites",
                    "description": "Favorites linked to the note",
                    "icon": "IconHeart",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "a39ebd92-e37e-46d7-b545-aed1945476f2",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f62992f2-80ef-477c-ae60-fc7a862b0f4a",
                            "nameSingular": "note",
                            "namePlural": "notes"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "ff8e5043-6168-4c65-984d-ef4d28eb76ce",
                            "name": "favorites"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "b4b7114a-8536-438a-8d13-917eae164506",
                            "name": "note"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "143a13af-842b-4f5d-913c-648472fbfc28",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "38a2a378-bac0-4c4d-bf05-7f9ff995b860",
                    "type": "RELATION",
                    "name": "attachments",
                    "label": "Attachments",
                    "description": "Note attachments",
                    "icon": "IconFileImport",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "ac29383b-d63e-4c0e-b28a-1abc03ab2b5a",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f62992f2-80ef-477c-ae60-fc7a862b0f4a",
                            "nameSingular": "note",
                            "namePlural": "notes"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "38a2a378-bac0-4c4d-bf05-7f9ff995b860",
                            "name": "attachments"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "e985e32a-532f-4259-828f-cac80c5fc3b8",
                            "name": "note"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "d6d5a326-5a21-46a6-96b5-c70549f8f937",
                    "type": "RELATION",
                    "name": "noteTargets",
                    "label": "Targets",
                    "description": "Note targets",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "72daf099-f592-4521-8a4e-febd67309f47",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f62992f2-80ef-477c-ae60-fc7a862b0f4a",
                            "nameSingular": "note",
                            "namePlural": "notes"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "d6d5a326-5a21-46a6-96b5-c70549f8f937",
                            "name": "noteTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "bd4e44a0-4b0d-4392-b0c9-d6c8684e3d44",
                            "nameSingular": "noteTarget",
                            "namePlural": "noteTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "b8d93efe-14da-47a2-bb24-96ae2d037b59",
                            "name": "note"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "2be5c772-b9f3-4851-9d9e-8990f81c475e",
                    "type": "TEXT",
                    "name": "title",
                    "label": "Title",
                    "description": "Note title",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "0baad27f-ac7b-48a3-b0a7-f2eb9613b2c6",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "f5a97cba-781d-4665-9dea-0eda6d687a99",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "message",
            "namePlural": "messages",
            "labelSingular": "Message",
            "labelPlural": "Messages",
            "description": "Message",
            "icon": "IconMessage",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "314263a0-4be7-4b22-bac1-37c8df91bdb2",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "938b8c3d-af73-43e7-acf9-ac634186d3aa",
                    "type": "DATE_TIME",
                    "name": "receivedAt",
                    "label": "Received At",
                    "description": "The date the message was received",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "2e91d365-c35a-446e-b019-bdf7e51d7d79",
                    "type": "RELATION",
                    "name": "messageThread",
                    "label": "Message Thread Id",
                    "description": "Message Thread Id",
                    "icon": "IconHash",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "01efe0bd-eda8-494a-b7ea-b4813dcf0b5a",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f5a97cba-781d-4665-9dea-0eda6d687a99",
                            "nameSingular": "message",
                            "namePlural": "messages"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "2e91d365-c35a-446e-b019-bdf7e51d7d79",
                            "name": "messageThread"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "c62f3148-1b8d-4fa3-ac29-8a20585bcee9",
                            "nameSingular": "messageThread",
                            "namePlural": "messageThreads"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "11a2bd26-4856-4ab2-916d-86a07beaccd3",
                            "name": "messages"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "5291bbf6-1c32-47fe-8164-ebd6dca187ad",
                    "type": "RELATION",
                    "name": "messageParticipants",
                    "label": "Message Participants",
                    "description": "Message Participants",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "099ebe85-572a-4f77-b077-475f97c0d54c",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f5a97cba-781d-4665-9dea-0eda6d687a99",
                            "nameSingular": "message",
                            "namePlural": "messages"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "5291bbf6-1c32-47fe-8164-ebd6dca187ad",
                            "name": "messageParticipants"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "b889efa2-e58a-471c-b258-3c5ef2fa09e9",
                            "nameSingular": "messageParticipant",
                            "namePlural": "messageParticipants"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "2efee208-73da-4ca1-ba73-19763d507611",
                            "name": "message"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "232561ae-1e5f-4cde-a093-53597948a567",
                    "type": "SELECT",
                    "name": "direction",
                    "label": "Direction",
                    "description": "Message Direction",
                    "icon": "IconDirection",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'INCOMING'",
                    "options": [
                        {
                            "id": "14216544-33d1-47d0-99a9-717763d49c0f",
                            "color": "green",
                            "label": "Incoming",
                            "value": "INCOMING",
                            "position": 0
                        },
                        {
                            "id": "f1b89e48-1107-45a2-b54a-31a75e76b9b2",
                            "color": "blue",
                            "label": "Outgoing",
                            "value": "OUTGOING",
                            "position": 1
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c31a967f-0c76-4a07-9299-01ac653b3807",
                    "type": "TEXT",
                    "name": "headerMessageId",
                    "label": "Header message Id",
                    "description": "Message id from the message header",
                    "icon": "IconHash",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "055e1afd-6445-4747-b489-0bb412c42e1e",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "314263a0-4be7-4b22-bac1-37c8df91bdb2",
                    "type": "TEXT",
                    "name": "subject",
                    "label": "Subject",
                    "description": "Subject",
                    "icon": "IconMessage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c9419522-6ce4-48d6-bad8-8d71336ca964",
                    "type": "UUID",
                    "name": "messageThreadId",
                    "label": "Message Thread Id id (foreign key)",
                    "description": "Message Thread Id id foreign key",
                    "icon": "IconHash",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "cb6eb250-d255-4446-88f3-bc6b7dd20800",
                    "type": "RELATION",
                    "name": "messageChannelMessageAssociations",
                    "label": "Message Channel Association",
                    "description": "Messages from the channel.",
                    "icon": "IconMessage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "3d3b5a91-f7b7-4c50-98d2-093be343711c",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f5a97cba-781d-4665-9dea-0eda6d687a99",
                            "nameSingular": "message",
                            "namePlural": "messages"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "cb6eb250-d255-4446-88f3-bc6b7dd20800",
                            "name": "messageChannelMessageAssociations"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "d0f0efa4-9f44-4812-96f9-d91ee933a5e8",
                            "nameSingular": "messageChannelMessageAssociation",
                            "namePlural": "messageChannelMessageAssociations"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "6e2131e3-b688-4b61-99bf-f0b50f100a5f",
                            "name": "message"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "367b2c39-dca7-48cb-b04a-8dd4e5e489af",
                    "type": "TEXT",
                    "name": "text",
                    "label": "Text",
                    "description": "Text",
                    "icon": "IconMessage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c2c61dcb-08ee-4761-b5d6-53b44fda1431",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "41cf0d75-84f4-4063-a428-d699a731b080",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "f3189217-0595-44ad-a51c-6145a2f7c6ba",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "apiKey",
            "namePlural": "apiKeys",
            "labelSingular": "Api Key",
            "labelPlural": "Api Keys",
            "description": "An api key",
            "icon": "IconRobot",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "13406939-4334-4820-ada4-3197dedc51b0",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "6a350a28-c036-4018-8caa-97128d74c3d9",
                    "type": "DATE_TIME",
                    "name": "revokedAt",
                    "label": "Revocation date",
                    "description": "ApiKey revocation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "22031e60-824f-4458-b265-bcae66ae8555",
                    "type": "DATE_TIME",
                    "name": "expiresAt",
                    "label": "Expiration date",
                    "description": "ApiKey expiration date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "eff85403-ee56-4b40-9d6c-d57197318bd2",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "13406939-4334-4820-ada4-3197dedc51b0",
                    "type": "TEXT",
                    "name": "name",
                    "label": "Name",
                    "description": "ApiKey name",
                    "icon": "IconLink",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "75eccaec-4a93-4b74-a844-89b89ca98598",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "7f3deab6-000a-40e4-b513-8658642168cd",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "company",
            "namePlural": "companies",
            "labelSingular": "Company",
            "labelPlural": "Companies",
            "description": "A company",
            "icon": "IconBuildingSkyscraper",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": false,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "2599d01d-02ee-4d55-9063-35c67cc81a0f",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "b229e842-ca29-4c1a-ba74-e69be1f357ac",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "65ed4460-c5b9-4634-bdc1-80f59515a2f6",
                    "type": "BOOLEAN",
                    "name": "visaSponsorship",
                    "label": "Visa Sponsorship",
                    "description": "Company's Visa Sponsorship Policy",
                    "icon": "IconBrandVisa",
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:39:01.913Z",
                    "updatedAt": "2024-08-05T16:39:01.913Z",
                    "defaultValue": false,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "a7c771af-639a-4f01-b1fa-3b245c3d4e92",
                    "type": "ACTOR",
                    "name": "createdBy",
                    "label": "Created by",
                    "description": "The creator of the record",
                    "icon": "IconCreativeCommonsSa",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "name": "''",
                        "source": "'MANUAL'"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6cc3a88a-be92-47c7-9f17-8d726bb7f8b6",
                    "type": "LINKS",
                    "name": "domainName",
                    "label": "Domain Name",
                    "description": "The company website URL. We use this url to fetch the company icon",
                    "icon": "IconLink",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "primaryLinkUrl": "''",
                        "secondaryLinks": null,
                        "primaryLinkLabel": "''"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "ec77df7f-a933-4415-a515-8b4938c9f125",
                    "type": "LINKS",
                    "name": "introVideo",
                    "label": "Intro Video",
                    "description": "Company's Intro Video",
                    "icon": "IconVideo",
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:39:01.865Z",
                    "updatedAt": "2024-08-05T16:39:01.865Z",
                    "defaultValue": {
                        "primaryLinkUrl": "''",
                        "secondaryLinks": null,
                        "primaryLinkLabel": "''"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "3ece1b4d-c052-4b32-bd2a-ba0f8c8b6f3e",
                    "type": "RELATION",
                    "name": "accountOwner",
                    "label": "Account Owner",
                    "description": "Your team member responsible for managing the company account",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "0896a728-e2cf-4032-9af2-a471645e9697",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "3ece1b4d-c052-4b32-bd2a-ba0f8c8b6f3e",
                            "name": "accountOwner"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "de44f939-76d9-4c1a-96aa-7c5a646f2045",
                            "name": "accountOwnerForCompanies"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "c06142b8-52a9-4b0b-93f6-99e2b5b67ab8",
                    "type": "RELATION",
                    "name": "timelineActivities",
                    "label": "Timeline Activities",
                    "description": "Timeline Activities linked to the company",
                    "icon": "IconIconTimelineEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "c542c9e0-b4b6-4073-aae6-66299868e9fb",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "c06142b8-52a9-4b0b-93f6-99e2b5b67ab8",
                            "name": "timelineActivities"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "979ea933-d8a1-4db6-8c29-5c747a690326",
                            "name": "company"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "b08f7cc5-f0c9-4ab1-a2bd-2733ab95d97b",
                    "type": "POSITION",
                    "name": "position",
                    "label": "Position",
                    "description": "Company record position",
                    "icon": "IconHierarchy2",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f0c8cde4-5a5d-4a6f-8273-94396a60f918",
                    "type": "CURRENCY",
                    "name": "annualRecurringRevenue",
                    "label": "ARR",
                    "description": "Annual Recurring Revenue: The actual or estimated annual revenue of the company",
                    "icon": "IconMoneybag",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "amountMicros": null,
                        "currencyCode": "''"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "5e24424a-db05-468b-bd45-7cab4059be3a",
                    "type": "NUMBER",
                    "name": "employees",
                    "label": "Employees",
                    "description": "Number of employees in the company",
                    "icon": "IconUsers",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "63261a95-39ac-4826-bc8b-7fc0fd21a8ad",
                    "type": "RELATION",
                    "name": "noteTargets",
                    "label": "Notes",
                    "description": "Notes tied to the company",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "d420db15-3060-4760-afd0-8485c76e53b4",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "63261a95-39ac-4826-bc8b-7fc0fd21a8ad",
                            "name": "noteTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "bd4e44a0-4b0d-4392-b0c9-d6c8684e3d44",
                            "nameSingular": "noteTarget",
                            "namePlural": "noteTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "cb654210-43c9-4ff7-95ee-8250c1d80e8d",
                            "name": "company"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "cb47633a-1b44-41b9-8bce-16e28616c2ad",
                    "type": "RELATION",
                    "name": "taskTargets",
                    "label": "Tasks",
                    "description": "Tasks tied to the company",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "f80bfd64-c33d-4488-bc49-1635e092ea3f",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "cb47633a-1b44-41b9-8bce-16e28616c2ad",
                            "name": "taskTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "77d124cc-049a-44f9-ab59-56e3dd55bb69",
                            "nameSingular": "taskTarget",
                            "namePlural": "taskTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "1e4e3b2b-113f-4af3-aed8-94b03785a626",
                            "name": "company"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "c132d454-299e-4885-89b0-de5b824e43e2",
                    "type": "LINKS",
                    "name": "linkedinLink",
                    "label": "Linkedin",
                    "description": "The company Linkedin account",
                    "icon": "IconBrandLinkedin",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "primaryLinkUrl": "''",
                        "secondaryLinks": null,
                        "primaryLinkLabel": "''"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "64f76ec9-3fae-4a61-b30f-7c646f4fe33d",
                    "type": "MULTI_SELECT",
                    "name": "workPolicy",
                    "label": "Work Policy",
                    "description": "Company's Work Policy",
                    "icon": "IconHome",
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:39:01.888Z",
                    "updatedAt": "2024-08-05T16:39:01.888Z",
                    "defaultValue": null,
                    "options": [
                        {
                            "id": "2a832e12-073e-4b58-bb71-9f68c00cabda",
                            "color": "green",
                            "label": "On-Site",
                            "value": "ON_SITE",
                            "position": 0
                        },
                        {
                            "id": "231423db-f097-4410-8efc-95bc19f9e87f",
                            "color": "turquoise",
                            "label": "Hybrid",
                            "value": "HYBRID",
                            "position": 1
                        },
                        {
                            "id": "db436d25-f1e3-45aa-9f81-7a5ef84a50ef",
                            "color": "sky",
                            "label": "Remote Work",
                            "value": "REMOTE_WORK",
                            "position": 2
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "79452277-0e6e-4dc5-b972-470c29bd6d12",
                    "type": "ADDRESS",
                    "name": "address",
                    "label": "Address",
                    "description": "Address of the company",
                    "icon": "IconMap",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "addressLat": null,
                        "addressLng": null,
                        "addressCity": "''",
                        "addressState": "''",
                        "addressCountry": "''",
                        "addressStreet1": "''",
                        "addressStreet2": "''",
                        "addressPostcode": "''"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "2599d01d-02ee-4d55-9063-35c67cc81a0f",
                    "type": "TEXT",
                    "name": "name",
                    "label": "Name",
                    "description": "The company name",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "4cbb077e-ccce-4892-8fc0-9b9238d7a009",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "3a2bd134-5b31-4bde-a64f-d5244a8e6271",
                    "type": "RELATION",
                    "name": "attachments",
                    "label": "Attachments",
                    "description": "Attachments linked to the company",
                    "icon": "IconFileImport",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "be6051cd-703c-4539-89ed-e643784bad26",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "3a2bd134-5b31-4bde-a64f-d5244a8e6271",
                            "name": "attachments"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "6496b8e0-2d8f-493e-8973-fcba2aa84b59",
                            "name": "company"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "1ce2452b-75a2-4989-ad48-f6f696fe1a38",
                    "type": "LINKS",
                    "name": "xLink",
                    "label": "X",
                    "description": "The company Twitter/X account",
                    "icon": "IconBrandX",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "primaryLinkUrl": "''",
                        "secondaryLinks": null,
                        "primaryLinkLabel": "''"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "48dba12f-4429-4ee2-9b3a-6df97c45141d",
                    "type": "RELATION",
                    "name": "people",
                    "label": "People",
                    "description": "People linked to the company.",
                    "icon": "IconUsers",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "0562d399-7053-4d7f-a415-cabfc889bd16",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "48dba12f-4429-4ee2-9b3a-6df97c45141d",
                            "name": "people"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "6672a066-7a7f-44ae-bb5c-ae3a5e82d835",
                            "name": "company"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "a49c82ff-0483-4acc-9e67-16e121daa11f",
                    "type": "TEXT",
                    "name": "myCustomField",
                    "label": "myCustomField",
                    "description": null,
                    "icon": "IconUsers",
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T17:09:37.502Z",
                    "updatedAt": "2024-08-05T17:09:37.502Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "0f2127dd-9364-4a9e-a66f-a866eb629d8b",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "4d74b886-b359-4c4c-a2c0-692edc8a3273",
                    "type": "RELATION",
                    "name": "activityTargets",
                    "label": "Activities",
                    "description": "Activities tied to the company",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "2ed70c2c-b17a-4ed1-9f35-b570139440fa",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "4d74b886-b359-4c4c-a2c0-692edc8a3273",
                            "name": "activityTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "648268ca-94bf-418e-853c-56d0f51472b3",
                            "nameSingular": "activityTarget",
                            "namePlural": "activityTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "10150d34-2f00-4642-8a9d-6b0b6ab72562",
                            "name": "company"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "cbd94612-00a2-4efd-8869-93f945e93076",
                    "type": "RELATION",
                    "name": "opportunities",
                    "label": "Opportunities",
                    "description": "Opportunities linked to the company.",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "67d4ff08-f5e6-4382-8996-67fdc2d02125",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "cbd94612-00a2-4efd-8869-93f945e93076",
                            "name": "opportunities"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "28b61c8a-8437-4770-9b12-f3d0e591bee8",
                            "name": "company"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "ae74690d-94d5-4860-928f-4ed8ea36be1d",
                    "type": "RELATION",
                    "name": "favorites",
                    "label": "Favorites",
                    "description": "Favorites linked to the company",
                    "icon": "IconHeart",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "31819eaa-5847-4207-b4a3-0ecffefd9332",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "ae74690d-94d5-4860-928f-4ed8ea36be1d",
                            "name": "favorites"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "69b1d954-1ed3-4bf9-b9e1-b886a00953b4",
                            "name": "company"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "abc8bbb4-cc34-428b-a182-b032c2b3c7ff",
                    "type": "UUID",
                    "name": "accountOwnerId",
                    "label": "Account Owner id (foreign key)",
                    "description": "Your team member responsible for managing the company account id foreign key",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "9bbd039b-40e0-4742-879e-0be3cf9b12b7",
                    "type": "TEXT",
                    "name": "tagline",
                    "label": "Tagline",
                    "description": "Company's Tagline",
                    "icon": "IconAdCircle",
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:39:01.834Z",
                    "updatedAt": "2024-08-05T16:39:01.834Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f90f1fda-258f-4b52-af93-9f157e2ed187",
                    "type": "BOOLEAN",
                    "name": "idealCustomerProfile",
                    "label": "ICP",
                    "description": "Ideal Customer Profile:  Indicates whether the company is the most suitable and valuable customer for you",
                    "icon": "IconTarget",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": false,
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "ee025446-440d-49ae-8d0e-ad30b6309840",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "viewField",
            "namePlural": "viewFields",
            "labelSingular": "View Field",
            "labelPlural": "View Fields",
            "description": "(System) View Fields",
            "icon": "IconTag",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "440d28bb-2d5f-4624-8fdd-5476ac84baa5",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "2c466c0c-926a-4722-846c-3bd89c2751da",
                    "type": "BOOLEAN",
                    "name": "isVisible",
                    "label": "Visible",
                    "description": "View Field visibility",
                    "icon": "IconEye",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": true,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6725c7ad-a704-436a-be67-a4612bc48e37",
                    "type": "RELATION",
                    "name": "view",
                    "label": "View",
                    "description": "View Field related view",
                    "icon": "IconLayoutCollage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "57d32129-b126-417e-98a8-7f1217b29dea",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "ee025446-440d-49ae-8d0e-ad30b6309840",
                            "nameSingular": "viewField",
                            "namePlural": "viewFields"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "6725c7ad-a704-436a-be67-a4612bc48e37",
                            "name": "view"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "90df20e5-c655-474f-bb98-b423652e36df",
                            "nameSingular": "view",
                            "namePlural": "views"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "6ea01d0e-340e-40e4-a029-89a7cbc07291",
                            "name": "viewFields"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "21015789-4b34-4a98-8669-1ceb7e408d0c",
                    "type": "UUID",
                    "name": "viewId",
                    "label": "View id (foreign key)",
                    "description": "View Field related view id foreign key",
                    "icon": "IconLayoutCollage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "4ce74348-740e-49e4-b13f-05a7810fc021",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "be8726a0-5584-4e78-82b8-4be201cd8870",
                    "type": "UUID",
                    "name": "fieldMetadataId",
                    "label": "Field Metadata Id",
                    "description": "View Field target field",
                    "icon": "IconTag",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6a582800-ad4d-4a5b-ac51-9a4a28f7b348",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "619cb257-468c-4496-8db7-3d119013b5a8",
                    "type": "NUMBER",
                    "name": "size",
                    "label": "Size",
                    "description": "View Field size",
                    "icon": "IconEye",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": 0,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c82925e9-c98a-497d-9d70-c39158402171",
                    "type": "NUMBER",
                    "name": "position",
                    "label": "Position",
                    "description": "View Field position",
                    "icon": "IconList",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": 0,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "440d28bb-2d5f-4624-8fdd-5476ac84baa5",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "e0bf07c5-4729-46ab-aa15-480f26999477",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "webhook",
            "namePlural": "webhooks",
            "labelSingular": "Webhook",
            "labelPlural": "Webhooks",
            "description": "A webhook",
            "icon": "IconRobot",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "1b437ef4-0bcf-4a8d-9ebf-f25ffccb3d54",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "1b437ef4-0bcf-4a8d-9ebf-f25ffccb3d54",
                    "type": "TEXT",
                    "name": "targetUrl",
                    "label": "Target Url",
                    "description": "Webhook target url",
                    "icon": "IconLink",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "b3ce5dca-00ec-4ea3-ae2a-4f08cac53a3b",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e11a3ed9-2576-4bca-bc8d-4559b247f466",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "670a4724-178c-44b4-94a6-30e11f015cb0",
                    "type": "TEXT",
                    "name": "operation",
                    "label": "Operation",
                    "description": "Webhook operation",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "a3d5bfcd-ed28-4dcb-a650-c474de21ec58",
                    "type": "TEXT",
                    "name": "description",
                    "label": "Description",
                    "description": null,
                    "icon": "IconInfo",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "7ab0a589-fe02-4e80-8ae9-4ea51d3b8907",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "favorite",
            "namePlural": "favorites",
            "labelSingular": "Favorite",
            "labelPlural": "Favorites",
            "description": "A favorite",
            "icon": "IconHeart",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "18c9dce6-51cb-4326-890f-156a3e19a88d",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "3d4cd287-7435-4574-aedd-09f6f5b34afb",
                    "type": "UUID",
                    "name": "taskId",
                    "label": "Task id (foreign key)",
                    "description": "Favorite task id foreign key",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "3214e46b-3728-42ea-bdcc-dc8d0d15e64c",
                    "type": "UUID",
                    "name": "myCustomObjectId",
                    "label": "myCustomObject ID (foreign key)",
                    "description": "Favorite myCustomObject id foreign key",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.167Z",
                    "updatedAt": "2024-08-05T17:09:54.167Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "b5845911-ec5b-4032-a60e-bcdbd1a6b1f2",
                    "type": "UUID",
                    "name": "workspaceMemberId",
                    "label": "Workspace Member id (foreign key)",
                    "description": "Favorite workspace member id foreign key",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "407a2cbc-6c15-41dd-942c-5322d273bec3",
                    "type": "RELATION",
                    "name": "workspaceMember",
                    "label": "Workspace Member",
                    "description": "Favorite workspace member",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "b0f40da3-1fda-4803-be21-14a2755bc834",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "407a2cbc-6c15-41dd-942c-5322d273bec3",
                            "name": "workspaceMember"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "f537669a-4524-4dfc-91d3-79438e2a481e",
                            "name": "favorites"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "9c99e6fc-aed4-44f6-a231-1d1ce3f218ab",
                    "type": "UUID",
                    "name": "companyId",
                    "label": "Company id (foreign key)",
                    "description": "Favorite company id foreign key",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "87c2dd65-2c54-4184-9a19-0bdce7781a3f",
                    "type": "RELATION",
                    "name": "myCustomObject",
                    "label": "myCustomObject",
                    "description": "Favorite myCustomObject",
                    "icon": "IconHeart",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.168Z",
                    "updatedAt": "2024-08-05T17:09:54.168Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "143c2257-721f-46eb-8114-987a70979146",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "87c2dd65-2c54-4184-9a19-0bdce7781a3f",
                            "name": "myCustomObject"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "c475ebbc-f86b-4956-9d67-d0bb62062408",
                            "name": "favorites"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "0c955466-cf7a-43b5-a0c5-4703b9703193",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "18c9dce6-51cb-4326-890f-156a3e19a88d",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "3464f1ce-34d3-4bf1-ac74-072bf750cc5c",
                    "type": "RELATION",
                    "name": "opportunity",
                    "label": "Opportunity",
                    "description": "Favorite opportunity",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "c1110f68-bbc9-4dbf-aae4-c6e5e2569240",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "3464f1ce-34d3-4bf1-ac74-072bf750cc5c",
                            "name": "opportunity"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "a1a7bb38-6f6c-4bdb-803f-804cdd97cb77",
                            "name": "favorites"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "9520f201-9dec-4e48-ba68-4fb9f2a4c662",
                    "type": "UUID",
                    "name": "noteId",
                    "label": "Note id (foreign key)",
                    "description": "Favorite note id foreign key",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "b4b7114a-8536-438a-8d13-917eae164506",
                    "type": "RELATION",
                    "name": "note",
                    "label": "Note",
                    "description": "Favorite note",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "a39ebd92-e37e-46d7-b545-aed1945476f2",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "b4b7114a-8536-438a-8d13-917eae164506",
                            "name": "note"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f62992f2-80ef-477c-ae60-fc7a862b0f4a",
                            "nameSingular": "note",
                            "namePlural": "notes"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "ff8e5043-6168-4c65-984d-ef4d28eb76ce",
                            "name": "favorites"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "4f2c079a-0221-47e9-ab92-68f529726424",
                    "type": "UUID",
                    "name": "personId",
                    "label": "Person id (foreign key)",
                    "description": "Favorite person id foreign key",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e7201f19-bfa7-42e1-9550-7c848a842ecc",
                    "type": "RELATION",
                    "name": "task",
                    "label": "Task",
                    "description": "Favorite task",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "32b10a0d-0ca4-4027-be9e-ab8d8be608d1",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "e7201f19-bfa7-42e1-9550-7c848a842ecc",
                            "name": "task"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "99f8caa6-263c-4690-8dc0-eb7645304cf5",
                            "nameSingular": "task",
                            "namePlural": "tasks"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "80fe7004-903e-4bdd-985d-9ef7e6acd793",
                            "name": "favorites"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "ce728fc3-01f7-4e2b-b71c-05ed44b50836",
                    "type": "UUID",
                    "name": "opportunityId",
                    "label": "Opportunity id (foreign key)",
                    "description": "Favorite opportunity id foreign key",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "674ead9c-88e9-481c-b5b3-dec4a450d67e",
                    "type": "NUMBER",
                    "name": "position",
                    "label": "Position",
                    "description": "Favorite position",
                    "icon": "IconList",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": 0,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "5966af59-a371-42a3-85de-1b9a8e9768c9",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "69b1d954-1ed3-4bf9-b9e1-b886a00953b4",
                    "type": "RELATION",
                    "name": "company",
                    "label": "Company",
                    "description": "Favorite company",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "31819eaa-5847-4207-b4a3-0ecffefd9332",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "69b1d954-1ed3-4bf9-b9e1-b886a00953b4",
                            "name": "company"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "ae74690d-94d5-4860-928f-4ed8ea36be1d",
                            "name": "favorites"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "b7caceaa-d49a-43c8-8b9b-10dc4298ade5",
                    "type": "RELATION",
                    "name": "person",
                    "label": "Person",
                    "description": "Favorite person",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "66551942-e576-4eb7-96c4-f78182f44491",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "b7caceaa-d49a-43c8-8b9b-10dc4298ade5",
                            "name": "person"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "4cd944c2-a252-42c2-93d3-c71d71b4587d",
                            "name": "favorites"
                        }
                    }
                }
            ]
        },
        {
            "__typename": "object",
            "id": "d0f0efa4-9f44-4812-96f9-d91ee933a5e8",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "messageChannelMessageAssociation",
            "namePlural": "messageChannelMessageAssociations",
            "labelSingular": "Message Channel Message Association",
            "labelPlural": "Message Channel Message Associations",
            "description": "Message Synced with a Message Channel",
            "icon": "IconMessage",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "f3df53cf-dad8-4880-9b06-cd24188c77e5",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "53f2d078-7fd1-4ba7-bae7-e58398dd2d6e",
                    "type": "UUID",
                    "name": "messageThreadId",
                    "label": "Message Thread Id id (foreign key)",
                    "description": "Message Thread Id id foreign key",
                    "icon": "IconHash",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "70a1610d-08ea-44eb-a453-02c1749e6e0c",
                    "type": "UUID",
                    "name": "messageId",
                    "label": "Message Id id (foreign key)",
                    "description": "Message Id id foreign key",
                    "icon": "IconHash",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "930b7926-639c-43c1-85ba-4c185a9ad5d3",
                    "type": "RELATION",
                    "name": "messageThread",
                    "label": "Message Thread Id",
                    "description": "Message Thread Id",
                    "icon": "IconHash",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "6be1cb67-30fe-41b3-8695-09cf6cbef18a",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "d0f0efa4-9f44-4812-96f9-d91ee933a5e8",
                            "nameSingular": "messageChannelMessageAssociation",
                            "namePlural": "messageChannelMessageAssociations"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "930b7926-639c-43c1-85ba-4c185a9ad5d3",
                            "name": "messageThread"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "c62f3148-1b8d-4fa3-ac29-8a20585bcee9",
                            "nameSingular": "messageThread",
                            "namePlural": "messageThreads"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "bfa74ef1-b2d8-4720-a9bd-3084ceb005f3",
                            "name": "messageChannelMessageAssociations"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "aa5c5146-05fc-4f48-a90a-1570bdc91ed9",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "470b0e39-1f5b-45e3-a092-c0f247539933",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6e2131e3-b688-4b61-99bf-f0b50f100a5f",
                    "type": "RELATION",
                    "name": "message",
                    "label": "Message Id",
                    "description": "Message Id",
                    "icon": "IconHash",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "3d3b5a91-f7b7-4c50-98d2-093be343711c",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "d0f0efa4-9f44-4812-96f9-d91ee933a5e8",
                            "nameSingular": "messageChannelMessageAssociation",
                            "namePlural": "messageChannelMessageAssociations"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "6e2131e3-b688-4b61-99bf-f0b50f100a5f",
                            "name": "message"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f5a97cba-781d-4665-9dea-0eda6d687a99",
                            "nameSingular": "message",
                            "namePlural": "messages"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "cb6eb250-d255-4446-88f3-bc6b7dd20800",
                            "name": "messageChannelMessageAssociations"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "621d12d5-80e5-4d0e-9c93-2433ff447dda",
                    "type": "UUID",
                    "name": "messageChannelId",
                    "label": "Message Channel Id id (foreign key)",
                    "description": "Message Channel Id id foreign key",
                    "icon": "IconHash",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "ec0e8151-40a6-4695-a3bd-68794b26ea40",
                    "type": "TEXT",
                    "name": "messageExternalId",
                    "label": "Message External Id",
                    "description": "Message id from the messaging provider",
                    "icon": "IconHash",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f3df53cf-dad8-4880-9b06-cd24188c77e5",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f2561dd5-c695-4635-816c-27175470b285",
                    "type": "RELATION",
                    "name": "messageChannel",
                    "label": "Message Channel Id",
                    "description": "Message Channel Id",
                    "icon": "IconHash",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "e420b731-e1e1-425a-ac7a-488d37d1958b",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "d0f0efa4-9f44-4812-96f9-d91ee933a5e8",
                            "nameSingular": "messageChannelMessageAssociation",
                            "namePlural": "messageChannelMessageAssociations"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "f2561dd5-c695-4635-816c-27175470b285",
                            "name": "messageChannel"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "219d7acf-5934-44dc-8789-62ade666cb43",
                            "nameSingular": "messageChannel",
                            "namePlural": "messageChannels"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "2682d5c3-f05e-4c5c-87eb-bb1a6c0c37bb",
                            "name": "messageChannelMessageAssociations"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "b93119d3-d244-42a4-8d7d-8c312f683f55",
                    "type": "TEXT",
                    "name": "messageThreadExternalId",
                    "label": "Thread External Id",
                    "description": "Thread id from the messaging provider",
                    "icon": "IconHash",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "cf6f8138-3445-4a36-b137-41ebb8f2e3dc",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "activity",
            "namePlural": "activities",
            "labelSingular": "Activity",
            "labelPlural": "Activities",
            "description": "An activity",
            "icon": "IconCheckbox",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "7690dd7a-0c0d-444a-845a-2ea9ea4fa54d",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "beac3449-af10-43a2-9abb-276a798df3de",
                    "type": "RELATION",
                    "name": "author",
                    "label": "Author",
                    "description": "Activity author",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "6d4e8025-7ee9-4079-ae80-b18de7b5ff4e",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "cf6f8138-3445-4a36-b137-41ebb8f2e3dc",
                            "nameSingular": "activity",
                            "namePlural": "activities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "beac3449-af10-43a2-9abb-276a798df3de",
                            "name": "author"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "5e889b07-de1e-47f0-aeb9-301a684bd6a4",
                            "name": "authoredActivities"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "9045116d-0fed-433c-80a4-f4296db72ae5",
                    "type": "RELATION",
                    "name": "comments",
                    "label": "Comments",
                    "description": "Activity comments",
                    "icon": "IconComment",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "00b07eda-840c-4a91-a8f7-365c008a2ea1",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "cf6f8138-3445-4a36-b137-41ebb8f2e3dc",
                            "nameSingular": "activity",
                            "namePlural": "activities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "9045116d-0fed-433c-80a4-f4296db72ae5",
                            "name": "comments"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "3af96291-b873-402f-bd90-f4731984c8dd",
                            "nameSingular": "comment",
                            "namePlural": "comments"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "88c3a2b9-b59a-413a-b2d3-44b151185929",
                            "name": "activity"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "bec64b6b-d141-45fe-a166-4f5d9ae578ce",
                    "type": "UUID",
                    "name": "authorId",
                    "label": "Author id (foreign key)",
                    "description": "Activity author id foreign key",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6e363f5f-737c-4b94-b5ce-5fe034330f47",
                    "type": "TEXT",
                    "name": "body",
                    "label": "Body",
                    "description": "Activity body",
                    "icon": "IconList",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "605e8c91-456d-4a53-906c-df02d6425362",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "d8477f91-7cb2-4455-b2c3-911dcb4c464f",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "8958f22c-ba22-42f5-8db9-11ea3df92c5b",
                    "type": "UUID",
                    "name": "assigneeId",
                    "label": "Assignee id (foreign key)",
                    "description": "Activity assignee id foreign key",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "41f8fd90-2de9-402f-8b37-fb023d318de2",
                    "type": "RELATION",
                    "name": "activityTargets",
                    "label": "Targets",
                    "description": "Activity targets",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "16017cba-688e-4483-a258-9cef3999cbbf",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "cf6f8138-3445-4a36-b137-41ebb8f2e3dc",
                            "nameSingular": "activity",
                            "namePlural": "activities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "41f8fd90-2de9-402f-8b37-fb023d318de2",
                            "name": "activityTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "648268ca-94bf-418e-853c-56d0f51472b3",
                            "nameSingular": "activityTarget",
                            "namePlural": "activityTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "aa1c7e04-31c1-4b62-8451-6b32926cab47",
                            "name": "activity"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "ea9aa19c-22d8-4b72-83ff-78d9653c27c4",
                    "type": "RELATION",
                    "name": "assignee",
                    "label": "Assignee",
                    "description": "Activity assignee",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "cf9ac76a-9f22-4252-a00a-63cc45fcabc4",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "cf6f8138-3445-4a36-b137-41ebb8f2e3dc",
                            "nameSingular": "activity",
                            "namePlural": "activities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "ea9aa19c-22d8-4b72-83ff-78d9653c27c4",
                            "name": "assignee"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "a147a0df-eb28-4259-a304-0460f92adf30",
                            "name": "assignedActivities"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "7690dd7a-0c0d-444a-845a-2ea9ea4fa54d",
                    "type": "TEXT",
                    "name": "title",
                    "label": "Title",
                    "description": "Activity title",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "918033d1-237e-45fd-960f-3fa4f0e45292",
                    "type": "DATE_TIME",
                    "name": "reminderAt",
                    "label": "Reminder Date",
                    "description": "Activity reminder date",
                    "icon": "IconCalendarEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "5c749bc8-9331-4744-8697-a03a4ad46a3d",
                    "type": "TEXT",
                    "name": "type",
                    "label": "Type",
                    "description": "Activity type",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'Note'",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "7b24a2df-8118-4dea-862b-ec21e5a12e47",
                    "type": "DATE_TIME",
                    "name": "completedAt",
                    "label": "Completion Date",
                    "description": "Activity completion date",
                    "icon": "IconCheck",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "29a1593e-7704-4e43-ae88-507b1ff0febb",
                    "type": "DATE_TIME",
                    "name": "dueAt",
                    "label": "Due Date",
                    "description": "Activity due date",
                    "icon": "IconCalendarEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "d9f1711b-a8b1-48ee-9f81-503bbf945b87",
                    "type": "RELATION",
                    "name": "attachments",
                    "label": "Attachments",
                    "description": "Activity attachments",
                    "icon": "IconFileImport",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "23518310-2443-4907-8ac6-b77bf340d99d",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "cf6f8138-3445-4a36-b137-41ebb8f2e3dc",
                            "nameSingular": "activity",
                            "namePlural": "activities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "d9f1711b-a8b1-48ee-9f81-503bbf945b87",
                            "name": "attachments"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "394c0644-d8bd-44a8-82c9-6e2a4c9aa19c",
                            "name": "activity"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "2d969fc8-07b3-470e-8bb5-b6e78fbfb22a",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "c62f3148-1b8d-4fa3-ac29-8a20585bcee9",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "messageThread",
            "namePlural": "messageThreads",
            "labelSingular": "Message Thread",
            "labelPlural": "Message Threads",
            "description": "Message Thread",
            "icon": "IconMessage",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "260b37ba-7451-488f-ae65-a7143aa694e8",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "f05ccb65-325b-4bef-b946-695e598092b5",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "bfa74ef1-b2d8-4720-a9bd-3084ceb005f3",
                    "type": "RELATION",
                    "name": "messageChannelMessageAssociations",
                    "label": "Message Channel Association",
                    "description": "Messages from the channel",
                    "icon": "IconMessage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "6be1cb67-30fe-41b3-8695-09cf6cbef18a",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "c62f3148-1b8d-4fa3-ac29-8a20585bcee9",
                            "nameSingular": "messageThread",
                            "namePlural": "messageThreads"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "bfa74ef1-b2d8-4720-a9bd-3084ceb005f3",
                            "name": "messageChannelMessageAssociations"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "d0f0efa4-9f44-4812-96f9-d91ee933a5e8",
                            "nameSingular": "messageChannelMessageAssociation",
                            "namePlural": "messageChannelMessageAssociations"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "930b7926-639c-43c1-85ba-4c185a9ad5d3",
                            "name": "messageThread"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "463d59e6-add9-494a-a88f-a280329fb16e",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "260b37ba-7451-488f-ae65-a7143aa694e8",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "11a2bd26-4856-4ab2-916d-86a07beaccd3",
                    "type": "RELATION",
                    "name": "messages",
                    "label": "Messages",
                    "description": "Messages from the thread.",
                    "icon": "IconMessage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "01efe0bd-eda8-494a-b7ea-b4813dcf0b5a",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "c62f3148-1b8d-4fa3-ac29-8a20585bcee9",
                            "nameSingular": "messageThread",
                            "namePlural": "messageThreads"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "11a2bd26-4856-4ab2-916d-86a07beaccd3",
                            "name": "messages"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f5a97cba-781d-4665-9dea-0eda6d687a99",
                            "nameSingular": "message",
                            "namePlural": "messages"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "2e91d365-c35a-446e-b019-bdf7e51d7d79",
                            "name": "messageThread"
                        }
                    }
                }
            ]
        },
        {
            "__typename": "object",
            "id": "bd4e44a0-4b0d-4392-b0c9-d6c8684e3d44",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "noteTarget",
            "namePlural": "noteTargets",
            "labelSingular": "Note Target",
            "labelPlural": "Note Targets",
            "description": "A note target",
            "icon": "IconCheckbox",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "96b428bf-6cda-44ec-a774-764075c44326",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "c60efe10-abb9-4c1f-8a27-e97884770401",
                    "type": "UUID",
                    "name": "personId",
                    "label": "Person id (foreign key)",
                    "description": "NoteTarget person id foreign key",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "96b428bf-6cda-44ec-a774-764075c44326",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e1b3d8bb-787a-4f2c-a6b0-5384f7ce19fe",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f4814caa-d470-415b-83e0-015903b68bca",
                    "type": "UUID",
                    "name": "myCustomObjectId",
                    "label": "myCustomObject ID (foreign key)",
                    "description": "NoteTarget myCustomObject id foreign key",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.176Z",
                    "updatedAt": "2024-08-05T17:09:54.176Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e884eac3-4cbd-40af-970e-a34b409c0acd",
                    "type": "RELATION",
                    "name": "myCustomObject",
                    "label": "myCustomObject",
                    "description": "NoteTarget myCustomObject",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.177Z",
                    "updatedAt": "2024-08-05T17:09:54.177Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "4f4d3969-913b-478c-a41d-9daffc9b2255",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "bd4e44a0-4b0d-4392-b0c9-d6c8684e3d44",
                            "nameSingular": "noteTarget",
                            "namePlural": "noteTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "e884eac3-4cbd-40af-970e-a34b409c0acd",
                            "name": "myCustomObject"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "87631266-4a85-4c49-82d1-90d1805c3de6",
                            "name": "noteTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "6267cb8e-04e2-48ce-a479-3108b2bf1801",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c4946aa0-9c73-4daf-af28-85fff088525c",
                    "type": "UUID",
                    "name": "opportunityId",
                    "label": "Opportunity id (foreign key)",
                    "description": "NoteTarget opportunity id foreign key",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "b8d93efe-14da-47a2-bb24-96ae2d037b59",
                    "type": "RELATION",
                    "name": "note",
                    "label": "Note",
                    "description": "NoteTarget note",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "72daf099-f592-4521-8a4e-febd67309f47",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "bd4e44a0-4b0d-4392-b0c9-d6c8684e3d44",
                            "nameSingular": "noteTarget",
                            "namePlural": "noteTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "b8d93efe-14da-47a2-bb24-96ae2d037b59",
                            "name": "note"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f62992f2-80ef-477c-ae60-fc7a862b0f4a",
                            "nameSingular": "note",
                            "namePlural": "notes"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "d6d5a326-5a21-46a6-96b5-c70549f8f937",
                            "name": "noteTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "18504863-6684-44f8-afa6-12e2eae7f428",
                    "type": "UUID",
                    "name": "companyId",
                    "label": "Company id (foreign key)",
                    "description": "NoteTarget company id foreign key",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "459cd941-1db8-4e61-af0e-35812736cfd1",
                    "type": "RELATION",
                    "name": "opportunity",
                    "label": "Opportunity",
                    "description": "NoteTarget opportunity",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "a0fa9159-85ab-47c5-bdac-46f7acbb78a7",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "bd4e44a0-4b0d-4392-b0c9-d6c8684e3d44",
                            "nameSingular": "noteTarget",
                            "namePlural": "noteTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "459cd941-1db8-4e61-af0e-35812736cfd1",
                            "name": "opportunity"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "8ee18f64-937c-489b-893c-80bc44f9c105",
                            "name": "noteTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "cb654210-43c9-4ff7-95ee-8250c1d80e8d",
                    "type": "RELATION",
                    "name": "company",
                    "label": "Company",
                    "description": "NoteTarget company",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "d420db15-3060-4760-afd0-8485c76e53b4",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "bd4e44a0-4b0d-4392-b0c9-d6c8684e3d44",
                            "nameSingular": "noteTarget",
                            "namePlural": "noteTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "cb654210-43c9-4ff7-95ee-8250c1d80e8d",
                            "name": "company"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "63261a95-39ac-4826-bc8b-7fc0fd21a8ad",
                            "name": "noteTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "2d7a63c8-3a4f-4e20-aa73-f417ee714632",
                    "type": "UUID",
                    "name": "noteId",
                    "label": "Note id (foreign key)",
                    "description": "NoteTarget note id foreign key",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "2f2fc7fb-51c5-4084-8d97-13b43b49c68a",
                    "type": "RELATION",
                    "name": "person",
                    "label": "Person",
                    "description": "NoteTarget person",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "9d20f0c0-e37b-48ca-bc45-da16461aa547",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "bd4e44a0-4b0d-4392-b0c9-d6c8684e3d44",
                            "nameSingular": "noteTarget",
                            "namePlural": "noteTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "2f2fc7fb-51c5-4084-8d97-13b43b49c68a",
                            "name": "person"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "1c1c7ffc-3a45-4069-996a-bdfa8f46b037",
                            "name": "noteTargets"
                        }
                    }
                }
            ]
        },
        {
            "__typename": "object",
            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "opportunity",
            "namePlural": "opportunities",
            "labelSingular": "Opportunity",
            "labelPlural": "Opportunities",
            "description": "An opportunity",
            "icon": "IconTargetArrow",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": false,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "945ed2b8-974b-47cd-a40e-63dd1130919e",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "40cdd413-5239-4887-b5e6-eb32eb1d95e3",
                    "type": "RELATION",
                    "name": "taskTargets",
                    "label": "Tasks",
                    "description": "Tasks tied to the opportunity",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "e594dda4-55fc-46ba-8108-5f672a5b1301",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "40cdd413-5239-4887-b5e6-eb32eb1d95e3",
                            "name": "taskTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "77d124cc-049a-44f9-ab59-56e3dd55bb69",
                            "nameSingular": "taskTarget",
                            "namePlural": "taskTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "705e4379-9ba2-4853-b267-c86dad461dd7",
                            "name": "opportunity"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "8ee18f64-937c-489b-893c-80bc44f9c105",
                    "type": "RELATION",
                    "name": "noteTargets",
                    "label": "Notes",
                    "description": "Notes tied to the opportunity",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "a0fa9159-85ab-47c5-bdac-46f7acbb78a7",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "8ee18f64-937c-489b-893c-80bc44f9c105",
                            "name": "noteTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "bd4e44a0-4b0d-4392-b0c9-d6c8684e3d44",
                            "nameSingular": "noteTarget",
                            "namePlural": "noteTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "459cd941-1db8-4e61-af0e-35812736cfd1",
                            "name": "opportunity"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "b32abba8-6801-4bf2-8c62-748fb0f2c224",
                    "type": "UUID",
                    "name": "companyId",
                    "label": "Company id (foreign key)",
                    "description": "Opportunity company id foreign key",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "a1a7bb38-6f6c-4bdb-803f-804cdd97cb77",
                    "type": "RELATION",
                    "name": "favorites",
                    "label": "Favorites",
                    "description": "Favorites linked to the opportunity",
                    "icon": "IconHeart",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "c1110f68-bbc9-4dbf-aae4-c6e5e2569240",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "a1a7bb38-6f6c-4bdb-803f-804cdd97cb77",
                            "name": "favorites"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "3464f1ce-34d3-4bf1-ac74-072bf750cc5c",
                            "name": "opportunity"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "b32af3b6-330f-405b-b9ce-6156797f836a",
                    "type": "RELATION",
                    "name": "attachments",
                    "label": "Attachments",
                    "description": "Attachments linked to the opportunity",
                    "icon": "IconFileImport",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "0ee1046a-3f9f-477e-8811-5d29021eca38",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "b32af3b6-330f-405b-b9ce-6156797f836a",
                            "name": "attachments"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "31bbc876-619d-4444-b954-9b6c66343314",
                            "name": "opportunity"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "59d9b42a-aedf-4bd4-89bb-79416d1c45ba",
                    "type": "DATE_TIME",
                    "name": "closeDate",
                    "label": "Close date",
                    "description": "Opportunity close date",
                    "icon": "IconCalendarEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "23598371-f3eb-4dc3-9254-c8150639fa2d",
                    "type": "SELECT",
                    "name": "stage",
                    "label": "Stage",
                    "description": "Opportunity stage",
                    "icon": "IconProgressCheck",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'NEW'",
                    "options": [
                        {
                            "id": "20e58665-2b7c-464b-b25e-6ed2f27cc94a",
                            "color": "red",
                            "label": "New",
                            "value": "NEW",
                            "position": 0
                        },
                        {
                            "id": "9c2a17fd-65ad-4b55-82e1-eaf62da947ee",
                            "color": "purple",
                            "label": "Screening",
                            "value": "SCREENING",
                            "position": 1
                        },
                        {
                            "id": "a0e93b94-c12f-433d-9971-2e7a6d55881b",
                            "color": "sky",
                            "label": "Meeting",
                            "value": "MEETING",
                            "position": 2
                        },
                        {
                            "id": "7c510ced-cbea-4e39-98a0-35b449a1ac28",
                            "color": "turquoise",
                            "label": "Proposal",
                            "value": "PROPOSAL",
                            "position": 3
                        },
                        {
                            "id": "ff6973c2-a8eb-4e37-b742-259ea74893dd",
                            "color": "yellow",
                            "label": "Customer",
                            "value": "CUSTOMER",
                            "position": 4
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f1e9a8ea-6c0a-4bf4-acef-86d0855ac9ae",
                    "type": "ACTOR",
                    "name": "createdBy",
                    "label": "Created by",
                    "description": "The creator of the record",
                    "icon": "IconCreativeCommonsSa",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "name": "''",
                        "source": "'MANUAL'"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f28ff3e4-c792-4f94-84d2-4df0572d29cb",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "64c6f5b9-63c4-4079-bd72-b54bf2b0c1ae",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "71341870-4e4d-4399-ab74-8f277047664e",
                    "type": "RELATION",
                    "name": "activityTargets",
                    "label": "Activities",
                    "description": "Activities tied to the opportunity",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "d2a53784-3664-49ab-983e-5ad5bf15dbd0",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "71341870-4e4d-4399-ab74-8f277047664e",
                            "name": "activityTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "648268ca-94bf-418e-853c-56d0f51472b3",
                            "nameSingular": "activityTarget",
                            "namePlural": "activityTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "997b0618-d3f7-4e5c-8c8e-2ba1bad10549",
                            "name": "opportunity"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "713c39d7-63e2-4b0e-bd5c-d240b840255e",
                    "type": "RELATION",
                    "name": "timelineActivities",
                    "label": "Timeline Activities",
                    "description": "Timeline Activities linked to the opportunity.",
                    "icon": "IconTimelineEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "61e4edee-13d4-4edd-9101-b9dc5ea5506a",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "713c39d7-63e2-4b0e-bd5c-d240b840255e",
                            "name": "timelineActivities"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "2c3baa6b-7ffe-470e-bd9d-0532e2bce3ac",
                            "name": "opportunity"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "945ed2b8-974b-47cd-a40e-63dd1130919e",
                    "type": "TEXT",
                    "name": "name",
                    "label": "Name",
                    "description": "The opportunity name",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "eeeecdec-299d-4ac1-8475-180b9de43351",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "28b61c8a-8437-4770-9b12-f3d0e591bee8",
                    "type": "RELATION",
                    "name": "company",
                    "label": "Company",
                    "description": "Opportunity company",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "67d4ff08-f5e6-4382-8996-67fdc2d02125",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "28b61c8a-8437-4770-9b12-f3d0e591bee8",
                            "name": "company"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "cbd94612-00a2-4efd-8869-93f945e93076",
                            "name": "opportunities"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "dc7898b0-d2b7-4910-bedc-a6fe8eb4c41e",
                    "type": "RELATION",
                    "name": "pointOfContact",
                    "label": "Point of Contact",
                    "description": "Opportunity point of contact",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "3e039f55-e535-406a-8a80-185123910b7a",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "dc7898b0-d2b7-4910-bedc-a6fe8eb4c41e",
                            "name": "pointOfContact"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "e1ecbeb4-76cb-4f9a-8829-ac0665854c69",
                            "name": "pointOfContactForOpportunities"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "35f32ceb-5f9c-4106-84e1-a480e015fb6f",
                    "type": "UUID",
                    "name": "pointOfContactId",
                    "label": "Point of Contact id (foreign key)",
                    "description": "Opportunity point of contact id foreign key",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "d4fdbcc2-9de3-4ec8-a3d2-6126f01cd930",
                    "type": "CURRENCY",
                    "name": "amount",
                    "label": "Amount",
                    "description": "Opportunity amount",
                    "icon": "IconCurrencyDollar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "amountMicros": null,
                        "currencyCode": "''"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6fe0ff62-8159-4a5f-b0cd-2ca1dfcf5fb7",
                    "type": "POSITION",
                    "name": "position",
                    "label": "Position",
                    "description": "Opportunity record position",
                    "icon": "IconHierarchy2",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "b889efa2-e58a-471c-b258-3c5ef2fa09e9",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "messageParticipant",
            "namePlural": "messageParticipants",
            "labelSingular": "Message Participant",
            "labelPlural": "Message Participants",
            "description": "Message Participants",
            "icon": "IconUserCircle",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "3ad8eb5c-c148-43f4-89b9-3152b77854e5",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "a7036ff9-a86d-4290-9f2a-cc360c86fe1e",
                    "type": "RELATION",
                    "name": "workspaceMember",
                    "label": "Workspace Member",
                    "description": "Workspace member",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "94c22c13-b00a-4f60-b2d2-f34b9efe6aa2",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "b889efa2-e58a-471c-b258-3c5ef2fa09e9",
                            "nameSingular": "messageParticipant",
                            "namePlural": "messageParticipants"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "a7036ff9-a86d-4290-9f2a-cc360c86fe1e",
                            "name": "workspaceMember"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "dd7ee456-52bf-4335-bee9-7ba18a1e9a09",
                            "name": "messageParticipants"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "3779c76a-30a8-45bc-a56a-6bfc084a9b29",
                    "type": "RELATION",
                    "name": "person",
                    "label": "Person",
                    "description": "Person",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "f26f3e6e-35bf-474a-9679-fbfbb009d67d",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "b889efa2-e58a-471c-b258-3c5ef2fa09e9",
                            "nameSingular": "messageParticipant",
                            "namePlural": "messageParticipants"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "3779c76a-30a8-45bc-a56a-6bfc084a9b29",
                            "name": "person"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "4227c9a5-6dd3-4de0-9248-e62572afc92b",
                            "name": "messageParticipants"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "2efee208-73da-4ca1-ba73-19763d507611",
                    "type": "RELATION",
                    "name": "message",
                    "label": "Message",
                    "description": "Message",
                    "icon": "IconMessage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "099ebe85-572a-4f77-b077-475f97c0d54c",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "b889efa2-e58a-471c-b258-3c5ef2fa09e9",
                            "nameSingular": "messageParticipant",
                            "namePlural": "messageParticipants"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "2efee208-73da-4ca1-ba73-19763d507611",
                            "name": "message"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f5a97cba-781d-4665-9dea-0eda6d687a99",
                            "nameSingular": "message",
                            "namePlural": "messages"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "5291bbf6-1c32-47fe-8164-ebd6dca187ad",
                            "name": "messageParticipants"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "199bc901-b741-42c5-85dd-4869ce61c879",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e218128f-4d7f-4aa8-9dd2-28849b6c538b",
                    "type": "TEXT",
                    "name": "displayName",
                    "label": "Display Name",
                    "description": "Display Name",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "71f33a61-2df2-4e23-bdd4-175e572e87ed",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "25cbd116-0230-46f6-88a7-4943ac810ec7",
                    "type": "UUID",
                    "name": "personId",
                    "label": "Person id (foreign key)",
                    "description": "Person id foreign key",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "3ad8eb5c-c148-43f4-89b9-3152b77854e5",
                    "type": "TEXT",
                    "name": "handle",
                    "label": "Handle",
                    "description": "Handle",
                    "icon": "IconAt",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "0e8a37ac-fd49-4d07-9695-7a156b5469b7",
                    "type": "SELECT",
                    "name": "role",
                    "label": "Role",
                    "description": "Role",
                    "icon": "IconAt",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'from'",
                    "options": [
                        {
                            "id": "333b63f9-8a5a-4532-ac53-c03b300fc23e",
                            "color": "green",
                            "label": "From",
                            "value": "from",
                            "position": 0
                        },
                        {
                            "id": "0e980644-befb-4f91-91db-b566c8ff5533",
                            "color": "blue",
                            "label": "To",
                            "value": "to",
                            "position": 1
                        },
                        {
                            "id": "662e29a9-43bd-40ad-a4b7-e728cc2489f0",
                            "color": "orange",
                            "label": "Cc",
                            "value": "cc",
                            "position": 2
                        },
                        {
                            "id": "c3405807-634e-4195-bc58-5d4f0eae8b29",
                            "color": "red",
                            "label": "Bcc",
                            "value": "bcc",
                            "position": 3
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "dd20415d-fb86-40b6-99bb-25b128d81776",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6c0f1e3e-8aea-4e5d-9298-089a0a3dd0de",
                    "type": "UUID",
                    "name": "workspaceMemberId",
                    "label": "Workspace Member id (foreign key)",
                    "description": "Workspace member id foreign key",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "4bef8eac-ecb2-4de2-af0e-7c9e1fca1f06",
                    "type": "UUID",
                    "name": "messageId",
                    "label": "Message id (foreign key)",
                    "description": "Message id foreign key",
                    "icon": "IconMessage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "attachment",
            "namePlural": "attachments",
            "labelSingular": "Attachment",
            "labelPlural": "Attachments",
            "description": "An attachment",
            "icon": "IconFileImport",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "13649d8b-94c8-40ce-9dbb-9c7ab32a2ed8",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "e985e32a-532f-4259-828f-cac80c5fc3b8",
                    "type": "RELATION",
                    "name": "note",
                    "label": "Note",
                    "description": "Attachment note",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "ac29383b-d63e-4c0e-b28a-1abc03ab2b5a",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "e985e32a-532f-4259-828f-cac80c5fc3b8",
                            "name": "note"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f62992f2-80ef-477c-ae60-fc7a862b0f4a",
                            "nameSingular": "note",
                            "namePlural": "notes"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "38a2a378-bac0-4c4d-bf05-7f9ff995b860",
                            "name": "attachments"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "2352488a-4c22-42ac-9645-2ef1cedc80b5",
                    "type": "UUID",
                    "name": "activityId",
                    "label": "Activity id (foreign key)",
                    "description": "Attachment activity id foreign key",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c2ace3e1-07b9-4073-b27d-023586dfc0d2",
                    "type": "TEXT",
                    "name": "type",
                    "label": "Type",
                    "description": "Attachment type",
                    "icon": "IconList",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "df6ee118-1cb0-4b2e-8668-3693d4d87ae2",
                    "type": "RELATION",
                    "name": "person",
                    "label": "Person",
                    "description": "Attachment person",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "4b90ec4b-3199-4cea-9e8b-01498967bd9f",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "df6ee118-1cb0-4b2e-8668-3693d4d87ae2",
                            "name": "person"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "1b21ef27-ba22-46ab-967e-f2d9f780bf8b",
                            "name": "attachments"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "53d23be1-1b1f-4782-900c-3501e5ff1e96",
                    "type": "TEXT",
                    "name": "fullPath",
                    "label": "Full path",
                    "description": "Attachment full path",
                    "icon": "IconLink",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "41623677-7310-44a0-80a2-4a19880bccd1",
                    "type": "UUID",
                    "name": "opportunityId",
                    "label": "Opportunity id (foreign key)",
                    "description": "Attachment opportunity id foreign key",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "0f978508-2e4a-4bc6-bbaf-87ad6acbe08a",
                    "type": "RELATION",
                    "name": "task",
                    "label": "Task",
                    "description": "Attachment task",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "aeca7339-1ff5-45cb-b9f4-d8bd9ec572d9",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "0f978508-2e4a-4bc6-bbaf-87ad6acbe08a",
                            "name": "task"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "99f8caa6-263c-4690-8dc0-eb7645304cf5",
                            "nameSingular": "task",
                            "namePlural": "tasks"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "7e719850-091f-4876-87b0-4eb5fd9847af",
                            "name": "attachments"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "263a372a-3df9-4c57-9e5b-80db73c7b56e",
                    "type": "UUID",
                    "name": "authorId",
                    "label": "Author id (foreign key)",
                    "description": "Attachment author id foreign key",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "b86a10c8-fc7f-436a-8b05-7b6c618357a7",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "d9a522cf-9b09-496d-b5be-a57589c42bc5",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "3d2bbb4e-e908-4bc5-97d7-a152dd7652bf",
                    "type": "RELATION",
                    "name": "author",
                    "label": "Author",
                    "description": "Attachment author",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "c86299f2-7210-4c89-a2ab-29e17f21edc8",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "3d2bbb4e-e908-4bc5-97d7-a152dd7652bf",
                            "name": "author"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "1b2d1e2c-290d-4a0e-adf9-192e5fac103c",
                            "name": "authoredAttachments"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "31bbc876-619d-4444-b954-9b6c66343314",
                    "type": "RELATION",
                    "name": "opportunity",
                    "label": "Opportunity",
                    "description": "Attachment opportunity",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "0ee1046a-3f9f-477e-8811-5d29021eca38",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "31bbc876-619d-4444-b954-9b6c66343314",
                            "name": "opportunity"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "b32af3b6-330f-405b-b9ce-6156797f836a",
                            "name": "attachments"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "3ec97541-3618-453f-b498-e2a0b2d7aee4",
                    "type": "UUID",
                    "name": "noteId",
                    "label": "Note id (foreign key)",
                    "description": "Attachment note id foreign key",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "2e1b103b-a75b-4ebc-8219-4b59027bd3fd",
                    "type": "RELATION",
                    "name": "myCustomObject",
                    "label": "myCustomObject",
                    "description": "Attachment myCustomObject",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.173Z",
                    "updatedAt": "2024-08-05T17:09:54.173Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "bd914a9e-b1f8-43c6-af60-3afe46518988",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "2e1b103b-a75b-4ebc-8219-4b59027bd3fd",
                            "name": "myCustomObject"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "a4580aee-6fb4-4b5d-87c0-daf24745ca13",
                            "name": "attachments"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "c538c173-a98b-4019-b956-ab997255a429",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "13649d8b-94c8-40ce-9dbb-9c7ab32a2ed8",
                    "type": "TEXT",
                    "name": "name",
                    "label": "Name",
                    "description": "Attachment name",
                    "icon": "IconFileUpload",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "fffa8f0c-6e71-42fa-8127-50c27909efe2",
                    "type": "UUID",
                    "name": "taskId",
                    "label": "Task id (foreign key)",
                    "description": "Attachment task id foreign key",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6496b8e0-2d8f-493e-8973-fcba2aa84b59",
                    "type": "RELATION",
                    "name": "company",
                    "label": "Company",
                    "description": "Attachment company",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "be6051cd-703c-4539-89ed-e643784bad26",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "6496b8e0-2d8f-493e-8973-fcba2aa84b59",
                            "name": "company"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "3a2bd134-5b31-4bde-a64f-d5244a8e6271",
                            "name": "attachments"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "827ed149-e80e-4d73-a687-23e005e20670",
                    "type": "UUID",
                    "name": "personId",
                    "label": "Person id (foreign key)",
                    "description": "Attachment person id foreign key",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "352954a9-daf9-4d56-9360-51587debc379",
                    "type": "UUID",
                    "name": "myCustomObjectId",
                    "label": "myCustomObject ID (foreign key)",
                    "description": "Attachment myCustomObject id foreign key",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.172Z",
                    "updatedAt": "2024-08-05T17:09:54.172Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "394c0644-d8bd-44a8-82c9-6e2a4c9aa19c",
                    "type": "RELATION",
                    "name": "activity",
                    "label": "Activity",
                    "description": "Attachment activity",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "23518310-2443-4907-8ac6-b77bf340d99d",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "394c0644-d8bd-44a8-82c9-6e2a4c9aa19c",
                            "name": "activity"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "cf6f8138-3445-4a36-b137-41ebb8f2e3dc",
                            "nameSingular": "activity",
                            "namePlural": "activities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "d9f1711b-a8b1-48ee-9f81-503bbf945b87",
                            "name": "attachments"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "86007c49-92a3-4b62-aa0a-5d6418675b0a",
                    "type": "UUID",
                    "name": "companyId",
                    "label": "Company id (foreign key)",
                    "description": "Attachment company id foreign key",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "99f8caa6-263c-4690-8dc0-eb7645304cf5",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "task",
            "namePlural": "tasks",
            "labelSingular": "Task",
            "labelPlural": "Tasks",
            "description": "A task",
            "icon": "IconCheckbox",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": false,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "3a9c10bc-f466-42e3-aa9d-203c8a946955",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "4e474cea-2549-45bc-9c60-4eecff56a186",
                    "type": "SELECT",
                    "name": "status",
                    "label": "Status",
                    "description": "Task status",
                    "icon": "IconCheck",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'TODO'",
                    "options": [
                        {
                            "id": "d6af8120-3e3d-49ba-b6ac-3089e3446b6c",
                            "color": "sky",
                            "label": "To do",
                            "value": "TODO",
                            "position": 0
                        },
                        {
                            "id": "0d66033b-96f3-4128-8182-a25751a50ce2",
                            "color": "purple",
                            "label": "In progress",
                            "value": "IN_PROGESS",
                            "position": 1
                        },
                        {
                            "id": "8e897afd-d233-4943-92c3-89e8979faa9c",
                            "color": "green",
                            "label": "Done",
                            "value": "DONE",
                            "position": 1
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "53347f0d-658a-45b0-91b5-2088adbeaaf0",
                    "type": "RELATION",
                    "name": "assignee",
                    "label": "Assignee",
                    "description": "Task assignee",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "5527b9f6-55ec-4efd-b244-03e91b01e91b",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "99f8caa6-263c-4690-8dc0-eb7645304cf5",
                            "nameSingular": "task",
                            "namePlural": "tasks"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "53347f0d-658a-45b0-91b5-2088adbeaaf0",
                            "name": "assignee"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "fefca31b-ba53-4860-b04e-5b9944587693",
                            "name": "assignedTasks"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "9233de38-fac9-4df0-bb13-d68c14389a59",
                    "type": "UUID",
                    "name": "assigneeId",
                    "label": "Assignee id (foreign key)",
                    "description": "Task assignee id foreign key",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "886d752e-cc9d-43c5-8e73-ee99943ae04c",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "7f33f6b1-1c59-4860-ba51-ed0bc3356f06",
                    "type": "RICH_TEXT",
                    "name": "body",
                    "label": "Body",
                    "description": "Task body",
                    "icon": "IconFilePencil",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "90f8da4c-865b-4ebe-ae5c-d4377081d8d5",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c7759c16-3319-40b2-873d-84e3d4a1d3ad",
                    "type": "DATE_TIME",
                    "name": "dueAt",
                    "label": "Due Date",
                    "description": "Task due date",
                    "icon": "IconCalendarEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "a6c74223-e44c-4677-bde7-e3e06c28fe01",
                    "type": "POSITION",
                    "name": "position",
                    "label": "Position",
                    "description": "Task record position",
                    "icon": "IconHierarchy2",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "7e719850-091f-4876-87b0-4eb5fd9847af",
                    "type": "RELATION",
                    "name": "attachments",
                    "label": "Attachments",
                    "description": "Task attachments",
                    "icon": "IconFileImport",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "aeca7339-1ff5-45cb-b9f4-d8bd9ec572d9",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "99f8caa6-263c-4690-8dc0-eb7645304cf5",
                            "nameSingular": "task",
                            "namePlural": "tasks"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "7e719850-091f-4876-87b0-4eb5fd9847af",
                            "name": "attachments"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "0f978508-2e4a-4bc6-bbaf-87ad6acbe08a",
                            "name": "task"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "f1ed6bba-53bc-4f9c-ac40-504a9ff5bade",
                    "type": "RELATION",
                    "name": "taskTargets",
                    "label": "Targets",
                    "description": "Task targets",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "85f92b6a-bc71-4da4-ba4e-7b0685a05fde",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "99f8caa6-263c-4690-8dc0-eb7645304cf5",
                            "nameSingular": "task",
                            "namePlural": "tasks"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "f1ed6bba-53bc-4f9c-ac40-504a9ff5bade",
                            "name": "taskTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "77d124cc-049a-44f9-ab59-56e3dd55bb69",
                            "nameSingular": "taskTarget",
                            "namePlural": "taskTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "31d8d648-5118-4b59-8c1e-876e83bf85f3",
                            "name": "task"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "e10938b5-0a72-48b3-8fb1-4984d1bd651b",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "80fe7004-903e-4bdd-985d-9ef7e6acd793",
                    "type": "RELATION",
                    "name": "favorites",
                    "label": "Favorites",
                    "description": "Favorites linked to the task",
                    "icon": "IconHeart",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "32b10a0d-0ca4-4027-be9e-ab8d8be608d1",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "99f8caa6-263c-4690-8dc0-eb7645304cf5",
                            "nameSingular": "task",
                            "namePlural": "tasks"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "80fe7004-903e-4bdd-985d-9ef7e6acd793",
                            "name": "favorites"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "e7201f19-bfa7-42e1-9550-7c848a842ecc",
                            "name": "task"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "3a9c10bc-f466-42e3-aa9d-203c8a946955",
                    "type": "TEXT",
                    "name": "title",
                    "label": "Title",
                    "description": "Task title",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "49cf9eb7-53bc-4347-93f5-daec9c219cfa",
                    "type": "RELATION",
                    "name": "timelineActivities",
                    "label": "Timeline Activities",
                    "description": "Timeline Activities linked to the task.",
                    "icon": "IconTimelineEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "9f7f6a7c-072e-4818-8077-d0d0c9601cb0",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "99f8caa6-263c-4690-8dc0-eb7645304cf5",
                            "nameSingular": "task",
                            "namePlural": "tasks"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "49cf9eb7-53bc-4347-93f5-daec9c219cfa",
                            "name": "timelineActivities"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "6ea41d58-7eae-4434-bb2f-9a1b2c30dba3",
                            "name": "task"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "504f6d88-cdaa-4e7f-beda-14d7e8adf203",
                    "type": "ACTOR",
                    "name": "createdBy",
                    "label": "Created by",
                    "description": "The creator of the record",
                    "icon": "IconCreativeCommonsSa",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "name": "''",
                        "source": "'MANUAL'"
                    },
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "timelineActivity",
            "namePlural": "timelineActivities",
            "labelSingular": "Timeline Activity",
            "labelPlural": "Timeline Activities",
            "description": "Aggregated / filtered event to be displayed on the timeline",
            "icon": "IconIconTimelineEvent",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "13cff5d9-b6d4-4eaa-82d3-31c98395deca",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "13cff5d9-b6d4-4eaa-82d3-31c98395deca",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "99599532-c0e9-4d62-b4a6-89866e0374be",
                    "type": "RELATION",
                    "name": "note",
                    "label": "Note",
                    "description": "Event note",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "bc6b24e6-9fcd-43fd-a2ba-c12f5d022132",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "99599532-c0e9-4d62-b4a6-89866e0374be",
                            "name": "note"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f62992f2-80ef-477c-ae60-fc7a862b0f4a",
                            "nameSingular": "note",
                            "namePlural": "notes"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "383d3f90-d691-4487-a13d-e80c50fb756e",
                            "name": "timelineActivities"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "b148030f-e465-4961-9c94-d096dc332bf7",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e86bb958-5af5-4e89-8104-925159a41d79",
                    "type": "TEXT",
                    "name": "name",
                    "label": "Event name",
                    "description": "Event name",
                    "icon": "IconAbc",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "a866ea59-2ff6-4a55-816f-f19927ff742e",
                    "type": "UUID",
                    "name": "taskId",
                    "label": "Task id (foreign key)",
                    "description": "Event task id foreign key",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "136cece0-793d-4274-9cc4-f03d5aea0ce0",
                    "type": "UUID",
                    "name": "myCustomObjectId",
                    "label": "myCustomObject ID (foreign key)",
                    "description": "Timeline Activity myCustomObject id foreign key",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.152Z",
                    "updatedAt": "2024-08-05T17:09:54.152Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6c46473c-5baa-4795-8eed-3b0649cc9ef0",
                    "type": "UUID",
                    "name": "opportunityId",
                    "label": "Opportunity id (foreign key)",
                    "description": "Event opportunity id foreign key",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "dba195e2-63d6-42ca-94aa-42c87b4306ea",
                    "type": "RELATION",
                    "name": "workspaceMember",
                    "label": "Workspace Member",
                    "description": "Event workspace member",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "170c6f88-63b3-41ff-9e5d-044968a062a4",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "dba195e2-63d6-42ca-94aa-42c87b4306ea",
                            "name": "workspaceMember"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "4ae17923-dd16-45c7-9df3-8cee92584a52",
                            "name": "timelineActivities"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "a4101adc-223b-4fa3-a375-b5e49e5a05eb",
                    "type": "UUID",
                    "name": "linkedRecordId",
                    "label": "Linked Record id",
                    "description": "Linked Record id",
                    "icon": "IconAbc",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "da41fbb2-1e52-416b-be9c-32242ae63e33",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "69e1ecef-09d7-4b53-826e-f440ae72d2b7",
                    "type": "RELATION",
                    "name": "person",
                    "label": "Person",
                    "description": "Event person",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "ba3d762d-8fbf-45e5-a958-136a269a396d",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "69e1ecef-09d7-4b53-826e-f440ae72d2b7",
                            "name": "person"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "c08e6ba8-b7ef-4fa7-b199-c8e93045f8ee",
                            "name": "timelineActivities"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "6ea41d58-7eae-4434-bb2f-9a1b2c30dba3",
                    "type": "RELATION",
                    "name": "task",
                    "label": "Task",
                    "description": "Event task",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "9f7f6a7c-072e-4818-8077-d0d0c9601cb0",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "6ea41d58-7eae-4434-bb2f-9a1b2c30dba3",
                            "name": "task"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "99f8caa6-263c-4690-8dc0-eb7645304cf5",
                            "nameSingular": "task",
                            "namePlural": "tasks"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "49cf9eb7-53bc-4347-93f5-daec9c219cfa",
                            "name": "timelineActivities"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "979ea933-d8a1-4db6-8c29-5c747a690326",
                    "type": "RELATION",
                    "name": "company",
                    "label": "Company",
                    "description": "Event company",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "c542c9e0-b4b6-4073-aae6-66299868e9fb",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "979ea933-d8a1-4db6-8c29-5c747a690326",
                            "name": "company"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "c06142b8-52a9-4b0b-93f6-99e2b5b67ab8",
                            "name": "timelineActivities"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "55701d3c-1710-4f70-ae03-25690249dddf",
                    "type": "RAW_JSON",
                    "name": "properties",
                    "label": "Event details",
                    "description": "Json value for event details",
                    "icon": "IconListDetails",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "ff438247-19b7-4ea6-a00e-1f66b4caa523",
                    "type": "UUID",
                    "name": "linkedObjectMetadataId",
                    "label": "Linked Object Metadata Id",
                    "description": "inked Object Metadata Id",
                    "icon": "IconAbc",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "faacecdd-08e4-4d9a-b64d-abbac4d5320e",
                    "type": "TEXT",
                    "name": "linkedRecordCachedName",
                    "label": "Linked Record cached name",
                    "description": "Cached record name",
                    "icon": "IconAbc",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "2a612f5a-c6c8-4e82-9368-2ba6f458b4f2",
                    "type": "UUID",
                    "name": "companyId",
                    "label": "Company id (foreign key)",
                    "description": "Event company id foreign key",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "8d4a2a2f-a04f-4cd4-add6-8a417220306e",
                    "type": "UUID",
                    "name": "noteId",
                    "label": "Note id (foreign key)",
                    "description": "Event note id foreign key",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e7e04af7-a0a2-4999-9265-e9bafcd0197c",
                    "type": "RELATION",
                    "name": "myCustomObject",
                    "label": "myCustomObject",
                    "description": "Timeline Activity myCustomObject",
                    "icon": "IconTimeline",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.153Z",
                    "updatedAt": "2024-08-05T17:09:54.153Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "e143276e-7f4a-46e8-bf0f-61111f36d4fd",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "e7e04af7-a0a2-4999-9265-e9bafcd0197c",
                            "name": "myCustomObject"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "e7cd7adb-152e-4d19-b2ba-d1b66bc40e79",
                            "name": "timelineActivities"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "a5a11b28-dc40-42b1-b160-f95e36f25682",
                    "type": "UUID",
                    "name": "personId",
                    "label": "Person id (foreign key)",
                    "description": "Event person id foreign key",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "5494a528-2d5c-402b-b5b0-30b0d30852a1",
                    "type": "UUID",
                    "name": "workspaceMemberId",
                    "label": "Workspace Member id (foreign key)",
                    "description": "Event workspace member id foreign key",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "2c3baa6b-7ffe-470e-bd9d-0532e2bce3ac",
                    "type": "RELATION",
                    "name": "opportunity",
                    "label": "Opportunity",
                    "description": "Event opportunity",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "61e4edee-13d4-4edd-9101-b9dc5ea5506a",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "2c3baa6b-7ffe-470e-bd9d-0532e2bce3ac",
                            "name": "opportunity"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "713c39d7-63e2-4b0e-bd5c-d240b840255e",
                            "name": "timelineActivities"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "2371abba-e2a8-42c1-96cf-127f2fd2fddc",
                    "type": "DATE_TIME",
                    "name": "happensAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "90e63030-f26d-46c8-b27a-13686b717538",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "connectedAccount",
            "namePlural": "connectedAccounts",
            "labelSingular": "Connected Account",
            "labelPlural": "Connected Accounts",
            "description": "A connected account",
            "icon": "IconAt",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "6a63f624-b6fe-4b46-ab94-6d9e327dedf8",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "6b464b10-e402-4862-887c-eccc38af9145",
                    "type": "UUID",
                    "name": "accountOwnerId",
                    "label": "Account Owner id (foreign key)",
                    "description": "Account Owner id foreign key",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "b392b533-9e94-4c00-8dfd-5183c6a544df",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "b6b3881a-852b-42dd-bfe0-65eab4dbcb0a",
                    "type": "TEXT",
                    "name": "provider",
                    "label": "provider",
                    "description": "The account provider",
                    "icon": "IconSettings",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "7e0a02a3-6d2f-4064-a2fa-e13da62c0e6f",
                    "type": "TEXT",
                    "name": "refreshToken",
                    "label": "Refresh Token",
                    "description": "Messaging provider refresh token",
                    "icon": "IconKey",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "55a55985-3e1d-4db6-b0ac-3585d72b69ed",
                    "type": "RELATION",
                    "name": "messageChannels",
                    "label": "Message Channels",
                    "description": "Message Channels",
                    "icon": "IconMessage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "1a74fdd8-63d4-407f-9d25-7e2e6c4d271c",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "90e63030-f26d-46c8-b27a-13686b717538",
                            "nameSingular": "connectedAccount",
                            "namePlural": "connectedAccounts"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "55a55985-3e1d-4db6-b0ac-3585d72b69ed",
                            "name": "messageChannels"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "219d7acf-5934-44dc-8789-62ade666cb43",
                            "nameSingular": "messageChannel",
                            "namePlural": "messageChannels"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "252a6670-31ea-4b7a-a75f-09c44f4822be",
                            "name": "connectedAccount"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "ff264a3b-dcfa-4a94-aa6b-3416456ca567",
                    "type": "TEXT",
                    "name": "handleAliases",
                    "label": "Handle Aliases",
                    "description": "Handle Aliases",
                    "icon": "IconMail",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "793ca9eb-06ac-433a-b0c3-d62139cbd71c",
                    "type": "RELATION",
                    "name": "calendarChannels",
                    "label": "Calendar Channels",
                    "description": "Calendar Channels",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "69dde225-0e12-4df6-ab55-d870d6dec717",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "90e63030-f26d-46c8-b27a-13686b717538",
                            "nameSingular": "connectedAccount",
                            "namePlural": "connectedAccounts"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "793ca9eb-06ac-433a-b0c3-d62139cbd71c",
                            "name": "calendarChannels"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "3f89df71-38d5-46f4-818f-076a5ee77e48",
                            "nameSingular": "calendarChannel",
                            "namePlural": "calendarChannels"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "f7f4925d-e186-4fe6-80f5-1ddd1ae5bf22",
                            "name": "connectedAccount"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "044bb29e-1cea-455e-8cd4-76c3aecfe9c5",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6a63f624-b6fe-4b46-ab94-6d9e327dedf8",
                    "type": "TEXT",
                    "name": "handle",
                    "label": "handle",
                    "description": "The account handle (email, username, phone number, etc.)",
                    "icon": "IconMail",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "02ff8c81-8978-4dae-b719-2efed251c95d",
                    "type": "TEXT",
                    "name": "accessToken",
                    "label": "Access Token",
                    "description": "Messaging provider access token",
                    "icon": "IconKey",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "8c36e0eb-108e-4797-97a1-b9b5ea096180",
                    "type": "RELATION",
                    "name": "accountOwner",
                    "label": "Account Owner",
                    "description": "Account Owner",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "9a65de46-ef09-429f-b7ba-31cb8a8c7038",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "90e63030-f26d-46c8-b27a-13686b717538",
                            "nameSingular": "connectedAccount",
                            "namePlural": "connectedAccounts"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "8c36e0eb-108e-4797-97a1-b9b5ea096180",
                            "name": "accountOwner"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "4d977e6a-4d0e-4bca-b743-9bc3df1744d6",
                            "name": "connectedAccounts"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "7aa3c042-1267-4ff7-9dcf-51bf6dafb96d",
                    "type": "DATE_TIME",
                    "name": "authFailedAt",
                    "label": "Auth failed at",
                    "description": "Auth failed at",
                    "icon": "IconX",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "608ca34b-405b-4b6e-8eaa-7183c45f9b13",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "46ffb6c5-a7fc-4035-bf98-e02f06d67059",
                    "type": "TEXT",
                    "name": "lastSyncHistoryId",
                    "label": "Last sync history ID",
                    "description": "Last sync history ID",
                    "icon": "IconHistory",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "90df20e5-c655-474f-bb98-b423652e36df",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "view",
            "namePlural": "views",
            "labelSingular": "View",
            "labelPlural": "Views",
            "description": "(System) Views",
            "icon": "IconLayoutCollage",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "1558d329-6983-48af-a136-e5b10f9edd3a",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "fa6d3625-a637-421d-97f6-354c92915ff1",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "4a7f5e32-8c16-43fe-a20b-0847e8002a8a",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "0d2e0bfe-fe67-4df4-af4f-49722ba4bf96",
                    "type": "RELATION",
                    "name": "viewFilters",
                    "label": "View Filters",
                    "description": "View Filters",
                    "icon": "IconFilterBolt",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "bd7a6047-3eb5-413e-9315-bb28533c4aed",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "90df20e5-c655-474f-bb98-b423652e36df",
                            "nameSingular": "view",
                            "namePlural": "views"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "0d2e0bfe-fe67-4df4-af4f-49722ba4bf96",
                            "name": "viewFilters"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "666caea5-3c1e-4847-9fd9-2d8c1d08eabb",
                            "nameSingular": "viewFilter",
                            "namePlural": "viewFilters"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "c56cc7db-9e19-470e-9d6d-2b7180fb0fb7",
                            "name": "view"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "4c25b9f8-40e3-4889-ab95-551cd9fdfbb6",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "0e220989-7171-4776-9045-4cea28effd86",
                    "type": "TEXT",
                    "name": "type",
                    "label": "Type",
                    "description": "View type",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'table'",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "1a7b73fc-a1b3-41e1-8971-e11bc73421cf",
                    "type": "BOOLEAN",
                    "name": "isCompact",
                    "label": "Compact View",
                    "description": "Describes if the view is in compact mode",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": false,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "d8c8b4c5-d58c-4990-9c43-65d8c070d629",
                    "type": "POSITION",
                    "name": "position",
                    "label": "Position",
                    "description": "View position",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6ea01d0e-340e-40e4-a029-89a7cbc07291",
                    "type": "RELATION",
                    "name": "viewFields",
                    "label": "View Fields",
                    "description": "View Fields",
                    "icon": "IconTag",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "57d32129-b126-417e-98a8-7f1217b29dea",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "90df20e5-c655-474f-bb98-b423652e36df",
                            "nameSingular": "view",
                            "namePlural": "views"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "6ea01d0e-340e-40e4-a029-89a7cbc07291",
                            "name": "viewFields"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "ee025446-440d-49ae-8d0e-ad30b6309840",
                            "nameSingular": "viewField",
                            "namePlural": "viewFields"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "6725c7ad-a704-436a-be67-a4612bc48e37",
                            "name": "view"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "737edb22-8d06-4d16-aac0-4eda04062485",
                    "type": "TEXT",
                    "name": "kanbanFieldMetadataId",
                    "label": "kanbanfieldMetadataId",
                    "description": "View Kanban column field",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "1558d329-6983-48af-a136-e5b10f9edd3a",
                    "type": "TEXT",
                    "name": "name",
                    "label": "Name",
                    "description": "View name",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "8b65e9c3-764d-4569-9d47-0e9146b27802",
                    "type": "TEXT",
                    "name": "icon",
                    "label": "Icon",
                    "description": "View icon",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "b6cb0290-080b-4bab-867a-6d32122d24ad",
                    "type": "SELECT",
                    "name": "key",
                    "label": "Key",
                    "description": "View key",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'INDEX'",
                    "options": [
                        {
                            "id": "54770bee-85b8-48db-87e9-9ba47fde5b27",
                            "color": "red",
                            "label": "Index",
                            "value": "INDEX",
                            "position": 0
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "df99390b-b681-4c2b-ba91-8279f0bf0707",
                    "type": "UUID",
                    "name": "objectMetadataId",
                    "label": "Object Metadata Id",
                    "description": "View target object",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "4abadd14-56cd-48e4-8013-7b46de4ffe22",
                    "type": "RELATION",
                    "name": "viewSorts",
                    "label": "View Sorts",
                    "description": "View Sorts",
                    "icon": "IconArrowsSort",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "53abf7c2-810d-478b-bb2d-689f31322d67",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "90df20e5-c655-474f-bb98-b423652e36df",
                            "nameSingular": "view",
                            "namePlural": "views"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "4abadd14-56cd-48e4-8013-7b46de4ffe22",
                            "name": "viewSorts"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1b5e63b9-9fc3-485d-86ff-de70ff17a665",
                            "nameSingular": "viewSort",
                            "namePlural": "viewSorts"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "673fb6fb-5123-4336-9b4b-e4b268c1cffe",
                            "name": "view"
                        }
                    }
                }
            ]
        },
        {
            "__typename": "object",
            "id": "77d124cc-049a-44f9-ab59-56e3dd55bb69",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "taskTarget",
            "namePlural": "taskTargets",
            "labelSingular": "Task Target",
            "labelPlural": "Task Targets",
            "description": "An task target",
            "icon": "IconCheckbox",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "4d792e46-cd2f-4db4-a348-50f1adbf0ebf",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "85958c6a-882f-4304-947c-45a44fb73585",
                    "type": "UUID",
                    "name": "taskId",
                    "label": "Task id (foreign key)",
                    "description": "TaskTarget task id foreign key",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "90e006e0-f7b9-49da-acd5-7c36a85e5d53",
                    "type": "UUID",
                    "name": "opportunityId",
                    "label": "Opportunity id (foreign key)",
                    "description": "TaskTarget opportunity id foreign key",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "cd786729-40e1-4829-a6ee-9e4bf2e0a04f",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "4d792e46-cd2f-4db4-a348-50f1adbf0ebf",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e0094c52-055f-4f11-9334-927f01ac586f",
                    "type": "UUID",
                    "name": "personId",
                    "label": "Person id (foreign key)",
                    "description": "TaskTarget person id foreign key",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "ea500914-d6c5-45d6-90ef-40c9912c98c2",
                    "type": "UUID",
                    "name": "companyId",
                    "label": "Company id (foreign key)",
                    "description": "TaskTarget company id foreign key",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "fc1a31f8-6e1c-4ce1-b6ff-80d1cd605e58",
                    "type": "RELATION",
                    "name": "person",
                    "label": "Person",
                    "description": "TaskTarget person",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "182b32c3-9ee9-4a65-937b-d9035ab65300",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "77d124cc-049a-44f9-ab59-56e3dd55bb69",
                            "nameSingular": "taskTarget",
                            "namePlural": "taskTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "fc1a31f8-6e1c-4ce1-b6ff-80d1cd605e58",
                            "name": "person"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "4c9ba269-244f-4768-a52d-9b1ffbe3339f",
                            "name": "taskTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "0cfef76e-8309-4946-bfad-0a400d2327b9",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "7c6ab6b0-9978-456b-bb7c-c7c1dc454e3d",
                    "type": "RELATION",
                    "name": "myCustomObject",
                    "label": "myCustomObject",
                    "description": "TaskTarget myCustomObject",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.181Z",
                    "updatedAt": "2024-08-05T17:09:54.181Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "3f2b2bab-8411-41b7-a87b-06dd0007eab4",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "77d124cc-049a-44f9-ab59-56e3dd55bb69",
                            "nameSingular": "taskTarget",
                            "namePlural": "taskTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "7c6ab6b0-9978-456b-bb7c-c7c1dc454e3d",
                            "name": "myCustomObject"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "90dd4b06-8b21-4411-9f38-b95968a1d4e1",
                            "name": "taskTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "705e4379-9ba2-4853-b267-c86dad461dd7",
                    "type": "RELATION",
                    "name": "opportunity",
                    "label": "Opportunity",
                    "description": "TaskTarget opportunity",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "e594dda4-55fc-46ba-8108-5f672a5b1301",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "77d124cc-049a-44f9-ab59-56e3dd55bb69",
                            "nameSingular": "taskTarget",
                            "namePlural": "taskTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "705e4379-9ba2-4853-b267-c86dad461dd7",
                            "name": "opportunity"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "40cdd413-5239-4887-b5e6-eb32eb1d95e3",
                            "name": "taskTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "31d8d648-5118-4b59-8c1e-876e83bf85f3",
                    "type": "RELATION",
                    "name": "task",
                    "label": "Task",
                    "description": "TaskTarget task",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "85f92b6a-bc71-4da4-ba4e-7b0685a05fde",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "77d124cc-049a-44f9-ab59-56e3dd55bb69",
                            "nameSingular": "taskTarget",
                            "namePlural": "taskTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "31d8d648-5118-4b59-8c1e-876e83bf85f3",
                            "name": "task"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "99f8caa6-263c-4690-8dc0-eb7645304cf5",
                            "nameSingular": "task",
                            "namePlural": "tasks"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "f1ed6bba-53bc-4f9c-ac40-504a9ff5bade",
                            "name": "taskTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "f6566665-bc44-4d92-9e6a-7405e8f505cb",
                    "type": "UUID",
                    "name": "myCustomObjectId",
                    "label": "myCustomObject ID (foreign key)",
                    "description": "TaskTarget myCustomObject id foreign key",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.180Z",
                    "updatedAt": "2024-08-05T17:09:54.180Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "1e4e3b2b-113f-4af3-aed8-94b03785a626",
                    "type": "RELATION",
                    "name": "company",
                    "label": "Company",
                    "description": "TaskTarget company",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "f80bfd64-c33d-4488-bc49-1635e092ea3f",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "77d124cc-049a-44f9-ab59-56e3dd55bb69",
                            "nameSingular": "taskTarget",
                            "namePlural": "taskTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "1e4e3b2b-113f-4af3-aed8-94b03785a626",
                            "name": "company"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "cb47633a-1b44-41b9-8bce-16e28616c2ad",
                            "name": "taskTargets"
                        }
                    }
                }
            ]
        },
        {
            "__typename": "object",
            "id": "666caea5-3c1e-4847-9fd9-2d8c1d08eabb",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "viewFilter",
            "namePlural": "viewFilters",
            "labelSingular": "View Filter",
            "labelPlural": "View Filters",
            "description": "(System) View Filters",
            "icon": "IconFilterBolt",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "5a3d73f8-918d-49f5-a890-aac2b3163ed2",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "2d97f9a5-4f5b-45d0-aabd-843c7f2ed19b",
                    "type": "TEXT",
                    "name": "operand",
                    "label": "Operand",
                    "description": "View Filter operand",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'Contains'",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "40f77e70-c43b-4f16-8a20-beb0aafd77a0",
                    "type": "TEXT",
                    "name": "displayValue",
                    "label": "Display Value",
                    "description": "View Filter Display Value",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c56cc7db-9e19-470e-9d6d-2b7180fb0fb7",
                    "type": "RELATION",
                    "name": "view",
                    "label": "View",
                    "description": "View Filter related view",
                    "icon": "IconLayoutCollage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "bd7a6047-3eb5-413e-9315-bb28533c4aed",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "666caea5-3c1e-4847-9fd9-2d8c1d08eabb",
                            "nameSingular": "viewFilter",
                            "namePlural": "viewFilters"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "c56cc7db-9e19-470e-9d6d-2b7180fb0fb7",
                            "name": "view"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "90df20e5-c655-474f-bb98-b423652e36df",
                            "nameSingular": "view",
                            "namePlural": "views"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "0d2e0bfe-fe67-4df4-af4f-49722ba4bf96",
                            "name": "viewFilters"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "5a3d73f8-918d-49f5-a890-aac2b3163ed2",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f2f27130-bc36-4a22-96eb-a7a3a0aee6c5",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "97ecc896-e994-4822-8758-6f06de23b1d5",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "1927b1c6-5531-43f4-9c3d-078aeeedbafc",
                    "type": "TEXT",
                    "name": "value",
                    "label": "Value",
                    "description": "View Filter value",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6e257f21-2577-46eb-81e1-30b6280411ce",
                    "type": "UUID",
                    "name": "viewId",
                    "label": "View id (foreign key)",
                    "description": "View Filter related view id foreign key",
                    "icon": "IconLayoutCollage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "97920c5b-939b-489f-9132-15522c8b2f25",
                    "type": "UUID",
                    "name": "fieldMetadataId",
                    "label": "Field Metadata Id",
                    "description": "View Filter target field",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "648268ca-94bf-418e-853c-56d0f51472b3",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "activityTarget",
            "namePlural": "activityTargets",
            "labelSingular": "Activity Target",
            "labelPlural": "Activity Targets",
            "description": "An activity target",
            "icon": "IconCheckbox",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "ba72ff28-333c-4a4e-a9a7-97625ae1a899",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "aa1c7e04-31c1-4b62-8451-6b32926cab47",
                    "type": "RELATION",
                    "name": "activity",
                    "label": "Activity",
                    "description": "ActivityTarget activity",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "16017cba-688e-4483-a258-9cef3999cbbf",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "648268ca-94bf-418e-853c-56d0f51472b3",
                            "nameSingular": "activityTarget",
                            "namePlural": "activityTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "aa1c7e04-31c1-4b62-8451-6b32926cab47",
                            "name": "activity"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "cf6f8138-3445-4a36-b137-41ebb8f2e3dc",
                            "nameSingular": "activity",
                            "namePlural": "activities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "41f8fd90-2de9-402f-8b37-fb023d318de2",
                            "name": "activityTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "702bc8dc-83d5-4367-82e9-a221dcf05687",
                    "type": "UUID",
                    "name": "companyId",
                    "label": "Company id (foreign key)",
                    "description": "ActivityTarget company id foreign key",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "a2e154ce-eb15-4d30-adcf-f8b6f969b007",
                    "type": "UUID",
                    "name": "opportunityId",
                    "label": "Opportunity id (foreign key)",
                    "description": "ActivityTarget opportunity id foreign key",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "997b0618-d3f7-4e5c-8c8e-2ba1bad10549",
                    "type": "RELATION",
                    "name": "opportunity",
                    "label": "Opportunity",
                    "description": "ActivityTarget opportunity",
                    "icon": "IconTargetArrow",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "d2a53784-3664-49ab-983e-5ad5bf15dbd0",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "648268ca-94bf-418e-853c-56d0f51472b3",
                            "nameSingular": "activityTarget",
                            "namePlural": "activityTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "997b0618-d3f7-4e5c-8c8e-2ba1bad10549",
                            "name": "opportunity"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "b95b3f38-9fc2-4d7e-a823-7791cf13d089",
                            "nameSingular": "opportunity",
                            "namePlural": "opportunities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "71341870-4e4d-4399-ab74-8f277047664e",
                            "name": "activityTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "0dbe65bc-b07e-4359-a7ab-c70cdf95dcf7",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "29b26108-6f7e-4424-b430-de1b54a9629a",
                    "type": "UUID",
                    "name": "myCustomObjectId",
                    "label": "myCustomObject ID (foreign key)",
                    "description": "ActivityTarget myCustomObject id foreign key",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.160Z",
                    "updatedAt": "2024-08-05T17:09:54.160Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f522e7f8-7e9c-4fde-9e8a-1ddd5fa40063",
                    "type": "UUID",
                    "name": "personId",
                    "label": "Person id (foreign key)",
                    "description": "ActivityTarget person id foreign key",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "5032f1f4-d2ae-46de-bff6-b596a73c0d8c",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "ba72ff28-333c-4a4e-a9a7-97625ae1a899",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "10150d34-2f00-4642-8a9d-6b0b6ab72562",
                    "type": "RELATION",
                    "name": "company",
                    "label": "Company",
                    "description": "ActivityTarget company",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "2ed70c2c-b17a-4ed1-9f35-b570139440fa",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "648268ca-94bf-418e-853c-56d0f51472b3",
                            "nameSingular": "activityTarget",
                            "namePlural": "activityTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "10150d34-2f00-4642-8a9d-6b0b6ab72562",
                            "name": "company"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "4d74b886-b359-4c4c-a2c0-692edc8a3273",
                            "name": "activityTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "940d1664-b17c-4f66-820b-abfec70adaa5",
                    "type": "RELATION",
                    "name": "person",
                    "label": "Person",
                    "description": "ActivityTarget person",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "9a3a145b-6d06-4892-84d4-af523f40c58d",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "648268ca-94bf-418e-853c-56d0f51472b3",
                            "nameSingular": "activityTarget",
                            "namePlural": "activityTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "940d1664-b17c-4f66-820b-abfec70adaa5",
                            "name": "person"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "9b018bba-687b-4850-9e0e-c192d3b5977d",
                            "name": "activityTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "d20eb128-2dd6-49e2-ac71-9d8991bc22fb",
                    "type": "RELATION",
                    "name": "myCustomObject",
                    "label": "myCustomObject",
                    "description": "ActivityTarget myCustomObject",
                    "icon": "IconBuildingSkyscraper",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.161Z",
                    "updatedAt": "2024-08-05T17:09:54.161Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "1271db29-f60e-4cf2-83cb-b31f62211850",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "648268ca-94bf-418e-853c-56d0f51472b3",
                            "nameSingular": "activityTarget",
                            "namePlural": "activityTargets"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "d20eb128-2dd6-49e2-ac71-9d8991bc22fb",
                            "name": "myCustomObject"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "7e079b54-1abf-486d-850e-5a5d32fed77b",
                            "name": "activityTargets"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "23a39b63-86cb-46da-b4a1-a49317ad06f5",
                    "type": "UUID",
                    "name": "activityId",
                    "label": "Activity id (foreign key)",
                    "description": "ActivityTarget activity id foreign key",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "5b55de69-76d8-4170-94d3-ff85ee7640ca",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "calendarChannelEventAssociation",
            "namePlural": "calendarChannelEventAssociations",
            "labelSingular": "Calendar Channel Event Association",
            "labelPlural": "Calendar Channel Event Associations",
            "description": "Calendar Channel Event Associations",
            "icon": "IconCalendar",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "5966ae0a-06c2-4f9e-92e7-e908b4afbcbc",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "94180d42-50ed-48a0-a62b-e00f1a6f4753",
                    "type": "RELATION",
                    "name": "calendarChannel",
                    "label": "Channel ID",
                    "description": "Channel ID",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "876e63a4-ce57-4852-b1b7-5659021ea34c",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "5b55de69-76d8-4170-94d3-ff85ee7640ca",
                            "nameSingular": "calendarChannelEventAssociation",
                            "namePlural": "calendarChannelEventAssociations"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "94180d42-50ed-48a0-a62b-e00f1a6f4753",
                            "name": "calendarChannel"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "3f89df71-38d5-46f4-818f-076a5ee77e48",
                            "nameSingular": "calendarChannel",
                            "namePlural": "calendarChannels"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "0751ede9-2493-4079-b976-14b98a4eb971",
                            "name": "calendarChannelEventAssociations"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "c9dfb626-58e2-4aab-986c-4839dc7f5e0b",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "2baeedd7-34a0-4d07-ab4c-5e6995213ec5",
                    "type": "RELATION",
                    "name": "calendarEvent",
                    "label": "Event ID",
                    "description": "Event ID",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "09476064-1403-4948-84c2-d87a02a022ca",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "5b55de69-76d8-4170-94d3-ff85ee7640ca",
                            "nameSingular": "calendarChannelEventAssociation",
                            "namePlural": "calendarChannelEventAssociations"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "2baeedd7-34a0-4d07-ab4c-5e6995213ec5",
                            "name": "calendarEvent"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "37d40c3f-e106-4348-af22-201659bbd8a6",
                            "nameSingular": "calendarEvent",
                            "namePlural": "calendarEvents"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "46421d40-86ab-4f44-aee4-862320bf7534",
                            "name": "calendarChannelEventAssociations"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "a00a384b-ab25-4dc5-a778-25d9b9cb8ffd",
                    "type": "UUID",
                    "name": "calendarEventId",
                    "label": "Event ID id (foreign key)",
                    "description": "Event ID id foreign key",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "fea76c39-2d44-4d78-b346-eec8a9d55102",
                    "type": "TEXT",
                    "name": "eventExternalId",
                    "label": "Event external ID",
                    "description": "Event external ID",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "5966ae0a-06c2-4f9e-92e7-e908b4afbcbc",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6bec724b-ce56-4ebb-82fb-f2c79c4ef360",
                    "type": "UUID",
                    "name": "calendarChannelId",
                    "label": "Channel ID id (foreign key)",
                    "description": "Channel ID id foreign key",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "00171466-dba6-4b35-81a5-e37a9d4ea659",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "myCustomObject",
            "namePlural": "myCustomObjects",
            "labelSingular": "myCustomObject",
            "labelPlural": "myCustomObjects",
            "description": null,
            "icon": "IconListNumbers",
            "isCustom": true,
            "isRemote": false,
            "isActive": true,
            "isSystem": false,
            "createdAt": "2024-08-05T17:09:54.141Z",
            "updatedAt": "2024-08-05T17:09:54.141Z",
            "labelIdentifierFieldMetadataId": null,
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "c475ebbc-f86b-4956-9d67-d0bb62062408",
                    "type": "RELATION",
                    "name": "favorites",
                    "label": "Favorites",
                    "description": "Favorites tied to the myCustomObject",
                    "icon": "IconHeart",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.168Z",
                    "updatedAt": "2024-08-05T17:09:54.168Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "143c2257-721f-46eb-8114-987a70979146",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "c475ebbc-f86b-4956-9d67-d0bb62062408",
                            "name": "favorites"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "87c2dd65-2c54-4184-9a19-0bdce7781a3f",
                            "name": "myCustomObject"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "7e079b54-1abf-486d-850e-5a5d32fed77b",
                    "type": "RELATION",
                    "name": "activityTargets",
                    "label": "Activities",
                    "description": "Activities tied to the myCustomObject",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.161Z",
                    "updatedAt": "2024-08-05T17:09:54.161Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "1271db29-f60e-4cf2-83cb-b31f62211850",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "7e079b54-1abf-486d-850e-5a5d32fed77b",
                            "name": "activityTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "648268ca-94bf-418e-853c-56d0f51472b3",
                            "nameSingular": "activityTarget",
                            "namePlural": "activityTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "d20eb128-2dd6-49e2-ac71-9d8991bc22fb",
                            "name": "myCustomObject"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "90dd4b06-8b21-4411-9f38-b95968a1d4e1",
                    "type": "RELATION",
                    "name": "taskTargets",
                    "label": "Tasks",
                    "description": "Tasks tied to the myCustomObject",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.181Z",
                    "updatedAt": "2024-08-05T17:09:54.181Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "3f2b2bab-8411-41b7-a87b-06dd0007eab4",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "90dd4b06-8b21-4411-9f38-b95968a1d4e1",
                            "name": "taskTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "77d124cc-049a-44f9-ab59-56e3dd55bb69",
                            "nameSingular": "taskTarget",
                            "namePlural": "taskTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "7c6ab6b0-9978-456b-bb7c-c7c1dc454e3d",
                            "name": "myCustomObject"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "13b6535d-d523-4e2b-9ba4-90630173388a",
                    "type": "ACTOR",
                    "name": "createdBy",
                    "label": "Created by",
                    "description": "The creator of the record",
                    "icon": "IconCreativeCommonsSa",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T17:09:54.141Z",
                    "updatedAt": "2024-08-05T17:09:54.141Z",
                    "defaultValue": {
                        "name": "''",
                        "source": "'MANUAL'"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "9d9aa060-cdfd-4e01-80fc-92549f025a9d",
                    "type": "POSITION",
                    "name": "position",
                    "label": "Position",
                    "description": "Position",
                    "icon": "IconHierarchy2",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.141Z",
                    "updatedAt": "2024-08-05T17:09:54.141Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "5842b56f-0029-4205-9ee2-d90bc51f25e5",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T17:09:54.141Z",
                    "updatedAt": "2024-08-05T17:09:54.141Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "87631266-4a85-4c49-82d1-90d1805c3de6",
                    "type": "RELATION",
                    "name": "noteTargets",
                    "label": "Notes",
                    "description": "Notes tied to the myCustomObject",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.177Z",
                    "updatedAt": "2024-08-05T17:09:54.177Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "4f4d3969-913b-478c-a41d-9daffc9b2255",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "87631266-4a85-4c49-82d1-90d1805c3de6",
                            "name": "noteTargets"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "bd4e44a0-4b0d-4392-b0c9-d6c8684e3d44",
                            "nameSingular": "noteTarget",
                            "namePlural": "noteTargets"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "e884eac3-4cbd-40af-970e-a34b409c0acd",
                            "name": "myCustomObject"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "7dd8ba1c-17d8-491b-bc6d-1bf024b38eee",
                    "type": "TEXT",
                    "name": "name",
                    "label": "Name",
                    "description": "Name",
                    "icon": "IconAbc",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T17:09:54.141Z",
                    "updatedAt": "2024-08-05T17:09:54.141Z",
                    "defaultValue": "'Untitled'",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c2a859ac-2667-4f12-8cbd-6cc55e45664f",
                    "type": "TEXT",
                    "name": "myCustomField",
                    "label": "myCustomField",
                    "description": null,
                    "icon": "IconUsers",
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T17:10:03.185Z",
                    "updatedAt": "2024-08-05T17:10:03.185Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "a4580aee-6fb4-4b5d-87c0-daf24745ca13",
                    "type": "RELATION",
                    "name": "attachments",
                    "label": "Attachments",
                    "description": "Attachments tied to the myCustomObject",
                    "icon": "IconFileImport",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.173Z",
                    "updatedAt": "2024-08-05T17:09:54.173Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "bd914a9e-b1f8-43c6-af60-3afe46518988",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "a4580aee-6fb4-4b5d-87c0-daf24745ca13",
                            "name": "attachments"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "2e1b103b-a75b-4ebc-8219-4b59027bd3fd",
                            "name": "myCustomObject"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "6e5b1581-2e88-44e4-ac0c-2143cc92ad19",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T17:09:54.141Z",
                    "updatedAt": "2024-08-05T17:09:54.141Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e7cd7adb-152e-4d19-b2ba-d1b66bc40e79",
                    "type": "RELATION",
                    "name": "timelineActivities",
                    "label": "Timeline Activities",
                    "description": "Timeline Activities tied to the myCustomObject",
                    "icon": "IconIconTimelineEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:09:54.153Z",
                    "updatedAt": "2024-08-05T17:09:54.153Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "e143276e-7f4a-46e8-bf0f-61111f36d4fd",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "e7cd7adb-152e-4d19-b2ba-d1b66bc40e79",
                            "name": "timelineActivities"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "e7e04af7-a0a2-4999-9265-e9bafcd0197c",
                            "name": "myCustomObject"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "dbf144b7-885d-40ae-af3e-3efdb424fe26",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T17:09:54.141Z",
                    "updatedAt": "2024-08-05T17:09:54.141Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "23006c79-19fe-4148-9ee4-6db039ebc6fb",
                    "type": "RELATION",
                    "name": "people",
                    "label": "people",
                    "description": null,
                    "icon": "IconUsers",
                    "isCustom": true,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T17:10:31.391Z",
                    "updatedAt": "2024-08-05T17:10:31.391Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "27f9741d-f967-4b75-affa-240f0f5f8d77",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "56dffccc-daf8-4c49-8919-f19787f07846",
                            "nameSingular": "myCustomObject",
                            "namePlural": "myCustomObjects"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "23006c79-19fe-4148-9ee4-6db039ebc6fb",
                            "name": "people"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "f7002609-5760-4ae6-ba29-a8b9066b95de",
                            "name": "myCustomObject"
                        }
                    }
                }
            ]
        },
        {
            "__typename": "object",
            "id": "3f89df71-38d5-46f4-818f-076a5ee77e48",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "calendarChannel",
            "namePlural": "calendarChannels",
            "labelSingular": "Calendar Channel",
            "labelPlural": "Calendar Channels",
            "description": "Calendar Channels",
            "icon": "IconCalendar",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "fc64465a-ab08-4df8-93e2-a19e758e54d8",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "26d457d6-8f93-4813-88fa-78704b780644",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "895be714-df44-4d95-8860-a40ab37bf61d",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "11816da4-27dd-475c-ae34-c578b21d1072",
                    "type": "DATE_TIME",
                    "name": "syncStageStartedAt",
                    "label": "Sync stage started at",
                    "description": "Sync stage started at",
                    "icon": "IconHistory",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "17cc8c28-aa8d-43a0-9c11-ccfc43300d57",
                    "type": "BOOLEAN",
                    "name": "isContactAutoCreationEnabled",
                    "label": "Is Contact Auto Creation Enabled",
                    "description": "Is Contact Auto Creation Enabled",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": true,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "bb8528d4-eb52-469b-a87a-895e41fce448",
                    "type": "NUMBER",
                    "name": "throttleFailureCount",
                    "label": "Throttle Failure Count",
                    "description": "Throttle Failure Count",
                    "icon": "IconX",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": 0,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "cc4fbb8e-3d27-461c-be5e-3b55c3d059d0",
                    "type": "BOOLEAN",
                    "name": "isSyncEnabled",
                    "label": "Is Sync Enabled",
                    "description": "Is Sync Enabled",
                    "icon": "IconRefresh",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": true,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "fc64465a-ab08-4df8-93e2-a19e758e54d8",
                    "type": "TEXT",
                    "name": "handle",
                    "label": "Handle",
                    "description": "Handle",
                    "icon": "IconAt",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "0751ede9-2493-4079-b976-14b98a4eb971",
                    "type": "RELATION",
                    "name": "calendarChannelEventAssociations",
                    "label": "Calendar Channel Event Associations",
                    "description": "Calendar Channel Event Associations",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "876e63a4-ce57-4852-b1b7-5659021ea34c",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "3f89df71-38d5-46f4-818f-076a5ee77e48",
                            "nameSingular": "calendarChannel",
                            "namePlural": "calendarChannels"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "0751ede9-2493-4079-b976-14b98a4eb971",
                            "name": "calendarChannelEventAssociations"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "5b55de69-76d8-4170-94d3-ff85ee7640ca",
                            "nameSingular": "calendarChannelEventAssociation",
                            "namePlural": "calendarChannelEventAssociations"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "94180d42-50ed-48a0-a62b-e00f1a6f4753",
                            "name": "calendarChannel"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "ce4b8d97-0dbc-4e35-b07d-9b76b78b0805",
                    "type": "SELECT",
                    "name": "visibility",
                    "label": "Visibility",
                    "description": "Visibility",
                    "icon": "IconEyeglass",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'SHARE_EVERYTHING'",
                    "options": [
                        {
                            "id": "b6afdf8e-219c-4fa4-b493-2ef201cf08ae",
                            "color": "green",
                            "label": "Metadata",
                            "value": "METADATA",
                            "position": 0
                        },
                        {
                            "id": "1005e275-acda-4842-9b5f-202a82d7eef9",
                            "color": "orange",
                            "label": "Share Everything",
                            "value": "SHARE_EVERYTHING",
                            "position": 1
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f7f4925d-e186-4fe6-80f5-1ddd1ae5bf22",
                    "type": "RELATION",
                    "name": "connectedAccount",
                    "label": "Connected Account",
                    "description": "Connected Account",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "69dde225-0e12-4df6-ab55-d870d6dec717",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "3f89df71-38d5-46f4-818f-076a5ee77e48",
                            "nameSingular": "calendarChannel",
                            "namePlural": "calendarChannels"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "f7f4925d-e186-4fe6-80f5-1ddd1ae5bf22",
                            "name": "connectedAccount"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "90e63030-f26d-46c8-b27a-13686b717538",
                            "nameSingular": "connectedAccount",
                            "namePlural": "connectedAccounts"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "793ca9eb-06ac-433a-b0c3-d62139cbd71c",
                            "name": "calendarChannels"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "fb9fa3ad-8a76-4b35-9e3d-2d70e0bd9b43",
                    "type": "TEXT",
                    "name": "syncCursor",
                    "label": "Sync Cursor",
                    "description": "Sync Cursor. Used for syncing events from the calendar provider",
                    "icon": "IconReload",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "cc894f79-0ce0-4534-8874-f6f7b38bcfe8",
                    "type": "SELECT",
                    "name": "contactAutoCreationPolicy",
                    "label": "Contact auto creation policy",
                    "description": "Automatically create records for people you participated with in an event.",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'AS_PARTICIPANT_AND_ORGANIZER'",
                    "options": [
                        {
                            "id": "479dcab1-99b1-49db-a398-c838657d694c",
                            "color": "green",
                            "label": "As Participant and Organizer",
                            "value": "AS_PARTICIPANT_AND_ORGANIZER",
                            "position": 0
                        },
                        {
                            "id": "8736e812-170f-46ff-ace4-e16a58a6426d",
                            "color": "orange",
                            "label": "As Participant",
                            "value": "AS_PARTICIPANT",
                            "position": 1
                        },
                        {
                            "id": "afffd87a-0025-4c0e-bd88-6808da2a6d4c",
                            "color": "blue",
                            "label": "As Organizer",
                            "value": "AS_ORGANIZER",
                            "position": 2
                        },
                        {
                            "id": "45145a84-a014-436a-bf88-a174e6da5352",
                            "color": "red",
                            "label": "None",
                            "value": "NONE",
                            "position": 3
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "87dda3f9-e513-44c1-87f3-1c2b322368e6",
                    "type": "UUID",
                    "name": "connectedAccountId",
                    "label": "Connected Account id (foreign key)",
                    "description": "Connected Account id foreign key",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "465d2623-1abb-4587-878c-4752cacf5fc9",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "2a2b8f04-c432-4a96-9eb2-7b824b68dfc6",
                    "type": "SELECT",
                    "name": "syncStage",
                    "label": "Sync stage",
                    "description": "Sync stage",
                    "icon": "IconStatusChange",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'FULL_CALENDAR_EVENT_LIST_FETCH_PENDING'",
                    "options": [
                        {
                            "id": "37376ca4-6926-4128-9395-9cd599d1dc56",
                            "color": "blue",
                            "label": "Full calendar event list fetch pending",
                            "value": "FULL_CALENDAR_EVENT_LIST_FETCH_PENDING",
                            "position": 0
                        },
                        {
                            "id": "0ee03d31-3ffc-4b2d-9e8d-0eea0179bf04",
                            "color": "blue",
                            "label": "Partial calendar event list fetch pending",
                            "value": "PARTIAL_CALENDAR_EVENT_LIST_FETCH_PENDING",
                            "position": 1
                        },
                        {
                            "id": "aaa2d5b7-c930-4672-b381-8759b53c3c12",
                            "color": "orange",
                            "label": "Calendar event list fetch ongoing",
                            "value": "CALENDAR_EVENT_LIST_FETCH_ONGOING",
                            "position": 2
                        },
                        {
                            "id": "940eeb35-e2f6-44ca-9b81-cd682b9f4d32",
                            "color": "blue",
                            "label": "Calendar events import pending",
                            "value": "CALENDAR_EVENTS_IMPORT_PENDING",
                            "position": 3
                        },
                        {
                            "id": "ff49a7d8-b7ee-4804-85a3-b0b1641681f2",
                            "color": "orange",
                            "label": "Calendar events import ongoing",
                            "value": "CALENDAR_EVENTS_IMPORT_ONGOING",
                            "position": 4
                        },
                        {
                            "id": "10e8fafb-a086-491e-a6b5-b33bb11e757b",
                            "color": "red",
                            "label": "Failed",
                            "value": "FAILED",
                            "position": 5
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "335172ff-f683-4cd4-96d0-3120d505ee7e",
                    "type": "SELECT",
                    "name": "syncStatus",
                    "label": "Sync status",
                    "description": "Sync status",
                    "icon": "IconStatusChange",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": [
                        {
                            "id": "427be75a-3309-4ac7-ad9f-6315829ec1de",
                            "color": "yellow",
                            "label": "Ongoing",
                            "value": "ONGOING",
                            "position": 1
                        },
                        {
                            "id": "5caefabb-b384-4d23-84cf-569ae417e0e9",
                            "color": "blue",
                            "label": "Not Synced",
                            "value": "NOT_SYNCED",
                            "position": 2
                        },
                        {
                            "id": "34d49c7c-ea37-4293-ab2c-1d1e68bb0e09",
                            "color": "green",
                            "label": "Active",
                            "value": "ACTIVE",
                            "position": 3
                        },
                        {
                            "id": "b7ed2a50-b048-4f30-b7f8-b586a7e8deef",
                            "color": "red",
                            "label": "Failed Insufficient Permissions",
                            "value": "FAILED_INSUFFICIENT_PERMISSIONS",
                            "position": 4
                        },
                        {
                            "id": "73e4ce2f-f208-482f-b054-85ecb9cbfb9c",
                            "color": "red",
                            "label": "Failed Unknown",
                            "value": "FAILED_UNKNOWN",
                            "position": 5
                        }
                    ],
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "3af96291-b873-402f-bd90-f4731984c8dd",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "comment",
            "namePlural": "comments",
            "labelSingular": "Comment",
            "labelPlural": "Comments",
            "description": "A comment",
            "icon": "IconMessageCircle",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "95c741f7-cf0f-403e-9664-83a052f3934c",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "209c9e5d-c82d-4d30-8fb1-1f7bc70d74ec",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "95c741f7-cf0f-403e-9664-83a052f3934c",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e2400fef-dfb4-4ec8-b83f-705b923b7b00",
                    "type": "UUID",
                    "name": "authorId",
                    "label": "Author id (foreign key)",
                    "description": "Comment author id foreign key",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "7e3e4ebe-fc63-47c6-b21d-0934b2842806",
                    "type": "TEXT",
                    "name": "body",
                    "label": "Body",
                    "description": "Comment body",
                    "icon": "IconLink",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "239d39c7-de84-462e-b99c-c7e9c1b99d8a",
                    "type": "UUID",
                    "name": "activityId",
                    "label": "Activity id (foreign key)",
                    "description": "Comment activity id foreign key",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "5a74f15a-2abd-4631-b324-575dd0a81b14",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "1a7fec45-dd33-43a0-9302-5b0b9052d2f0",
                    "type": "RELATION",
                    "name": "author",
                    "label": "Author",
                    "description": "Comment author",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "4917f689-5cc2-4716-b4ab-6906aef009b3",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "3af96291-b873-402f-bd90-f4731984c8dd",
                            "nameSingular": "comment",
                            "namePlural": "comments"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "1a7fec45-dd33-43a0-9302-5b0b9052d2f0",
                            "name": "author"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "12d19915-891e-4a4e-8c42-49a12639264f",
                            "name": "authoredComments"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "88c3a2b9-b59a-413a-b2d3-44b151185929",
                    "type": "RELATION",
                    "name": "activity",
                    "label": "Activity",
                    "description": "Comment activity",
                    "icon": "IconNotes",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "00b07eda-840c-4a91-a8f7-365c008a2ea1",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "3af96291-b873-402f-bd90-f4731984c8dd",
                            "nameSingular": "comment",
                            "namePlural": "comments"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "88c3a2b9-b59a-413a-b2d3-44b151185929",
                            "name": "activity"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "cf6f8138-3445-4a36-b137-41ebb8f2e3dc",
                            "nameSingular": "activity",
                            "namePlural": "activities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "9045116d-0fed-433c-80a4-f4296db72ae5",
                            "name": "comments"
                        }
                    }
                }
            ]
        },
        {
            "__typename": "object",
            "id": "37d40c3f-e106-4348-af22-201659bbd8a6",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "calendarEvent",
            "namePlural": "calendarEvents",
            "labelSingular": "Calendar event",
            "labelPlural": "Calendar events",
            "description": "Calendar events",
            "icon": "IconCalendar",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "c84c6690-4785-4487-a164-75b35fa6b5ed",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "2563cdaf-19b2-4ca7-bea7-d233228ac87b",
                    "type": "TEXT",
                    "name": "description",
                    "label": "Description",
                    "description": "Description",
                    "icon": "IconFileDescription",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f67e0a42-d909-4029-b740-ed4ba6fef8d2",
                    "type": "BOOLEAN",
                    "name": "isCanceled",
                    "label": "Is canceled",
                    "description": "Is canceled",
                    "icon": "IconCalendarCancel",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": false,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "21f11229-c9a8-4d90-8f78-8803296de422",
                    "type": "DATE_TIME",
                    "name": "endsAt",
                    "label": "End Date",
                    "description": "End Date",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "3f88228c-6666-4c18-b4c3-2355e9fb74fd",
                    "type": "TEXT",
                    "name": "iCalUID",
                    "label": "iCal UID",
                    "description": "iCal UID",
                    "icon": "IconKey",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "b9ff2603-b060-47f7-8b74-367411c97043",
                    "type": "DATE_TIME",
                    "name": "externalCreatedAt",
                    "label": "Creation DateTime",
                    "description": "Creation DateTime",
                    "icon": "IconCalendarPlus",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "65f9e0fd-c875-43e0-9988-94dcd1105951",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e4b6323e-2faa-472a-b369-394b7682f7f1",
                    "type": "BOOLEAN",
                    "name": "isFullDay",
                    "label": "Is Full Day",
                    "description": "Is Full Day",
                    "icon": "Icon24Hours",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": false,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "eec86c3b-f7ac-4066-ae3e-f7add17f1f97",
                    "type": "TEXT",
                    "name": "location",
                    "label": "Location",
                    "description": "Location",
                    "icon": "IconMapPin",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "46421d40-86ab-4f44-aee4-862320bf7534",
                    "type": "RELATION",
                    "name": "calendarChannelEventAssociations",
                    "label": "Calendar Channel Event Associations",
                    "description": "Calendar Channel Event Associations",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "09476064-1403-4948-84c2-d87a02a022ca",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "37d40c3f-e106-4348-af22-201659bbd8a6",
                            "nameSingular": "calendarEvent",
                            "namePlural": "calendarEvents"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "46421d40-86ab-4f44-aee4-862320bf7534",
                            "name": "calendarChannelEventAssociations"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "5b55de69-76d8-4170-94d3-ff85ee7640ca",
                            "nameSingular": "calendarChannelEventAssociation",
                            "namePlural": "calendarChannelEventAssociations"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "2baeedd7-34a0-4d07-ab4c-5e6995213ec5",
                            "name": "calendarEvent"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "c84c6690-4785-4487-a164-75b35fa6b5ed",
                    "type": "TEXT",
                    "name": "title",
                    "label": "Title",
                    "description": "Title",
                    "icon": "IconH1",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "26107044-238f-49dc-89ce-179b46450864",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "57f8f510-2486-47cf-aa05-b10c14f3cc43",
                    "type": "LINKS",
                    "name": "conferenceLink",
                    "label": "Meet Link",
                    "description": "Meet Link",
                    "icon": "IconLink",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "primaryLinkUrl": "''",
                        "secondaryLinks": null,
                        "primaryLinkLabel": "''"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "75f5a937-b2c8-4225-bbd6-c8b575e2dd25",
                    "type": "DATE_TIME",
                    "name": "startsAt",
                    "label": "Start Date",
                    "description": "Start Date",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e286138c-24c0-49d9-8f51-41d47f7958cd",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "849a0245-051d-4dac-8ecf-f35462912b3f",
                    "type": "DATE_TIME",
                    "name": "externalUpdatedAt",
                    "label": "Update DateTime",
                    "description": "Update DateTime",
                    "icon": "IconCalendarCog",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c9a2189f-abb1-4166-9d1d-f870f0e32b3e",
                    "type": "RELATION",
                    "name": "calendarEventParticipants",
                    "label": "Event Participants",
                    "description": "Event Participants",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "28688620-c3df-463d-a655-ad6435f6215b",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "37d40c3f-e106-4348-af22-201659bbd8a6",
                            "nameSingular": "calendarEvent",
                            "namePlural": "calendarEvents"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "c9a2189f-abb1-4166-9d1d-f870f0e32b3e",
                            "name": "calendarEventParticipants"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "2128a43e-af47-44bf-b7e9-5d00ddd27a99",
                            "nameSingular": "calendarEventParticipant",
                            "namePlural": "calendarEventParticipants"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "9ae2ccf9-1390-4861-a771-324ab4310f33",
                            "name": "calendarEvent"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "cb31cbcb-b866-46d9-aeda-4b4aacd32e6e",
                    "type": "TEXT",
                    "name": "conferenceSolution",
                    "label": "Conference Solution",
                    "description": "Conference Solution",
                    "icon": "IconScreenShare",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c1a46da5-904c-4883-8cf1-730ecd860a18",
                    "type": "TEXT",
                    "name": "recurringEventExternalId",
                    "label": "Recurring Event ID",
                    "description": "Recurring Event ID",
                    "icon": "IconHistory",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "219d7acf-5934-44dc-8789-62ade666cb43",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "messageChannel",
            "namePlural": "messageChannels",
            "labelSingular": "Message Channel",
            "labelPlural": "Message Channels",
            "description": "Message Channels",
            "icon": "IconMessage",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "ee88f9a9-318c-44ce-ba9e-3d64c740e090",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "47b231aa-01e2-49e0-bafb-d2b63a153265",
                    "type": "NUMBER",
                    "name": "throttleFailureCount",
                    "label": "Throttle Failure Count",
                    "description": "Throttle Failure Count",
                    "icon": "IconX",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": 0,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "2821a085-4008-4b66-a99d-f3c2e1557967",
                    "type": "SELECT",
                    "name": "type",
                    "label": "Type",
                    "description": "Channel Type",
                    "icon": "IconMessage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'email'",
                    "options": [
                        {
                            "id": "08b1d086-9a6f-4343-8f13-2201c1310f5e",
                            "color": "green",
                            "label": "Email",
                            "value": "email",
                            "position": 0
                        },
                        {
                            "id": "2cef0d80-3db0-4793-b849-650cca4d5021",
                            "color": "blue",
                            "label": "SMS",
                            "value": "sms",
                            "position": 1
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "b4d39140-3163-4a87-98fe-bb9e8cc137d8",
                    "type": "DATE_TIME",
                    "name": "syncStageStartedAt",
                    "label": "Sync stage started at",
                    "description": "Sync stage started at",
                    "icon": "IconHistory",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6485d1ba-0c12-4843-bef8-2ecd53074e7d",
                    "type": "UUID",
                    "name": "connectedAccountId",
                    "label": "Connected Account id (foreign key)",
                    "description": "Connected Account id foreign key",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "608b0c0a-a828-44e8-9491-e58507090911",
                    "type": "SELECT",
                    "name": "syncStatus",
                    "label": "Sync status",
                    "description": "Sync status",
                    "icon": "IconStatusChange",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": [
                        {
                            "id": "3b0b0655-df75-40cc-b2a3-5b0a44d4e89e",
                            "color": "yellow",
                            "label": "Ongoing",
                            "value": "ONGOING",
                            "position": 1
                        },
                        {
                            "id": "668d19e4-a5f7-471b-aa2d-5b9ee0bd38a4",
                            "color": "blue",
                            "label": "Not Synced",
                            "value": "NOT_SYNCED",
                            "position": 2
                        },
                        {
                            "id": "5d0b907a-0f0d-48ef-971e-6da5c8c6cb08",
                            "color": "green",
                            "label": "Active",
                            "value": "ACTIVE",
                            "position": 3
                        },
                        {
                            "id": "919a86ec-634a-4d12-8a70-0da59eed2ed7",
                            "color": "red",
                            "label": "Failed Insufficient Permissions",
                            "value": "FAILED_INSUFFICIENT_PERMISSIONS",
                            "position": 4
                        },
                        {
                            "id": "360e055a-314f-4e1f-b1a3-bde1cb3a3743",
                            "color": "red",
                            "label": "Failed Unknown",
                            "value": "FAILED_UNKNOWN",
                            "position": 5
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "898058fb-b487-4300-a3d7-a9f5d7efc928",
                    "type": "TEXT",
                    "name": "syncCursor",
                    "label": "Last sync cursor",
                    "description": "Last sync cursor",
                    "icon": "IconHistory",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "ee851ccd-e643-40aa-9553-bb0487d4b4b9",
                    "type": "BOOLEAN",
                    "name": "isContactAutoCreationEnabled",
                    "label": "Is Contact Auto Creation Enabled",
                    "description": "Is Contact Auto Creation Enabled",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": true,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "60c85385-7576-4f68-a3a3-4539f9a79f14",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "7dc2ea04-202c-4f02-a302-6438d5100423",
                    "type": "SELECT",
                    "name": "visibility",
                    "label": "Visibility",
                    "description": "Visibility",
                    "icon": "IconEyeglass",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'SHARE_EVERYTHING'",
                    "options": [
                        {
                            "id": "30bf3541-7afe-4a39-a070-79b85f6de6ce",
                            "color": "green",
                            "label": "Metadata",
                            "value": "METADATA",
                            "position": 0
                        },
                        {
                            "id": "edb11f69-2cda-4959-9fd2-0629f8d9d4c5",
                            "color": "blue",
                            "label": "Subject",
                            "value": "SUBJECT",
                            "position": 1
                        },
                        {
                            "id": "5728b6b0-59fc-4def-ae0a-6aa261a18ad9",
                            "color": "orange",
                            "label": "Share Everything",
                            "value": "SHARE_EVERYTHING",
                            "position": 2
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "1987d97a-4dd3-4d12-a991-8e514f6999ca",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "ee88f9a9-318c-44ce-ba9e-3d64c740e090",
                    "type": "TEXT",
                    "name": "handle",
                    "label": "Handle",
                    "description": "Handle",
                    "icon": "IconAt",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6a84ba01-5f11-40bf-99e4-a5a7e9a8dadb",
                    "type": "DATE_TIME",
                    "name": "syncedAt",
                    "label": "Last sync date",
                    "description": "Last sync date",
                    "icon": "IconHistory",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "252a6670-31ea-4b7a-a75f-09c44f4822be",
                    "type": "RELATION",
                    "name": "connectedAccount",
                    "label": "Connected Account",
                    "description": "Connected Account",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "1a74fdd8-63d4-407f-9d25-7e2e6c4d271c",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "219d7acf-5934-44dc-8789-62ade666cb43",
                            "nameSingular": "messageChannel",
                            "namePlural": "messageChannels"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "252a6670-31ea-4b7a-a75f-09c44f4822be",
                            "name": "connectedAccount"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "90e63030-f26d-46c8-b27a-13686b717538",
                            "nameSingular": "connectedAccount",
                            "namePlural": "connectedAccounts"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "55a55985-3e1d-4db6-b0ac-3585d72b69ed",
                            "name": "messageChannels"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "2682d5c3-f05e-4c5c-87eb-bb1a6c0c37bb",
                    "type": "RELATION",
                    "name": "messageChannelMessageAssociations",
                    "label": "Message Channel Association",
                    "description": "Messages from the channel.",
                    "icon": "IconMessage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "e420b731-e1e1-425a-ac7a-488d37d1958b",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "219d7acf-5934-44dc-8789-62ade666cb43",
                            "nameSingular": "messageChannel",
                            "namePlural": "messageChannels"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "2682d5c3-f05e-4c5c-87eb-bb1a6c0c37bb",
                            "name": "messageChannelMessageAssociations"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "d0f0efa4-9f44-4812-96f9-d91ee933a5e8",
                            "nameSingular": "messageChannelMessageAssociation",
                            "namePlural": "messageChannelMessageAssociations"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "f2561dd5-c695-4635-816c-27175470b285",
                            "name": "messageChannel"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "6484b400-3a26-4e67-94d4-f286e758d32d",
                    "type": "SELECT",
                    "name": "syncStage",
                    "label": "Sync stage",
                    "description": "Sync stage",
                    "icon": "IconStatusChange",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'FULL_MESSAGE_LIST_FETCH_PENDING'",
                    "options": [
                        {
                            "id": "542073b7-5d8d-456a-9f97-c4318c965ee1",
                            "color": "blue",
                            "label": "Full messages list fetch pending",
                            "value": "FULL_MESSAGE_LIST_FETCH_PENDING",
                            "position": 0
                        },
                        {
                            "id": "9b6e03b6-7f79-4af9-adc6-be179c7e12ba",
                            "color": "blue",
                            "label": "Partial messages list fetch pending",
                            "value": "PARTIAL_MESSAGE_LIST_FETCH_PENDING",
                            "position": 1
                        },
                        {
                            "id": "1e551bc2-cc65-4b02-9538-3964763ed964",
                            "color": "orange",
                            "label": "Messages list fetch ongoing",
                            "value": "MESSAGE_LIST_FETCH_ONGOING",
                            "position": 2
                        },
                        {
                            "id": "d9fb2786-ccbb-4c26-a8e8-efa09cec9779",
                            "color": "blue",
                            "label": "Messages import pending",
                            "value": "MESSAGES_IMPORT_PENDING",
                            "position": 3
                        },
                        {
                            "id": "a0c3a8c3-be71-4b7e-9fbd-79e9d564e033",
                            "color": "orange",
                            "label": "Messages import ongoing",
                            "value": "MESSAGES_IMPORT_ONGOING",
                            "position": 4
                        },
                        {
                            "id": "0bea2ea8-99cf-4a04-80a7-197022bab014",
                            "color": "red",
                            "label": "Failed",
                            "value": "FAILED",
                            "position": 5
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "5d8b9142-82f7-44cc-931b-457a7895c864",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "53050215-3982-4ed7-857f-6089bb66e63e",
                    "type": "BOOLEAN",
                    "name": "excludeGroupEmails",
                    "label": "Exclude group emails",
                    "description": "Exclude group emails",
                    "icon": "IconUsersGroup",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": true,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "95465535-60f1-4a23-8c0d-0e3c98b986da",
                    "type": "BOOLEAN",
                    "name": "excludeNonProfessionalEmails",
                    "label": "Exclude non professional emails",
                    "description": "Exclude non professional emails",
                    "icon": "IconBriefcase",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": true,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "71179534-e47a-4f19-916e-adad2e0360c8",
                    "type": "SELECT",
                    "name": "contactAutoCreationPolicy",
                    "label": "Contact auto creation policy",
                    "description": "Automatically create People records when receiving or sending emails",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'SENT'",
                    "options": [
                        {
                            "id": "61e4a068-f941-4951-940b-4534b55036e5",
                            "color": "green",
                            "label": "Sent and Received",
                            "value": "SENT_AND_RECEIVED",
                            "position": 0
                        },
                        {
                            "id": "8922afcf-f166-48cd-bdbe-1fc29cbc9d83",
                            "color": "blue",
                            "label": "Sent",
                            "value": "SENT",
                            "position": 1
                        },
                        {
                            "id": "e992588f-fb3c-483c-9bd8-3798c944246b",
                            "color": "red",
                            "label": "None",
                            "value": "NONE",
                            "position": 2
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "697a053e-b751-469e-a46a-c1d9ca189ed0",
                    "type": "BOOLEAN",
                    "name": "isSyncEnabled",
                    "label": "Is Sync Enabled",
                    "description": "Is Sync Enabled",
                    "icon": "IconRefresh",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": true,
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "2128a43e-af47-44bf-b7e9-5d00ddd27a99",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "calendarEventParticipant",
            "namePlural": "calendarEventParticipants",
            "labelSingular": "Calendar event participant",
            "labelPlural": "Calendar event participants",
            "description": "Calendar event participants",
            "icon": "IconCalendar",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "40ddb08c-2b24-429b-8c38-538aa6793d9e",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "57c875cf-6453-4e41-9bd5-3c804464de3b",
                    "type": "UUID",
                    "name": "workspaceMemberId",
                    "label": "Workspace Member id (foreign key)",
                    "description": "Workspace Member id foreign key",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "cc3faae7-be01-435f-aafb-835e0f7cd8e4",
                    "type": "UUID",
                    "name": "personId",
                    "label": "Person id (foreign key)",
                    "description": "Person id foreign key",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "00b58d77-0409-4fb0-a6b4-7a4b4f4ec71b",
                    "type": "UUID",
                    "name": "calendarEventId",
                    "label": "Event ID id (foreign key)",
                    "description": "Event ID id foreign key",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "40ddb08c-2b24-429b-8c38-538aa6793d9e",
                    "type": "TEXT",
                    "name": "handle",
                    "label": "Handle",
                    "description": "Handle",
                    "icon": "IconMail",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "b2982cd8-c796-4718-b74b-298b46d19841",
                    "type": "RELATION",
                    "name": "workspaceMember",
                    "label": "Workspace Member",
                    "description": "Workspace Member",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "67aaa999-8332-43ba-8830-76bf48d53cf2",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "2128a43e-af47-44bf-b7e9-5d00ddd27a99",
                            "nameSingular": "calendarEventParticipant",
                            "namePlural": "calendarEventParticipants"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "b2982cd8-c796-4718-b74b-298b46d19841",
                            "name": "workspaceMember"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "6623a9d7-e137-4709-a592-02ae76e5bfd7",
                            "name": "calendarEventParticipants"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "00578ebe-8d35-4f34-8f67-02485d704025",
                    "type": "SELECT",
                    "name": "responseStatus",
                    "label": "Response Status",
                    "description": "Response Status",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'NEEDS_ACTION'",
                    "options": [
                        {
                            "id": "fd0a498b-4600-41c1-9a96-cebe90c41a55",
                            "color": "orange",
                            "label": "Needs Action",
                            "value": "NEEDS_ACTION",
                            "position": 0
                        },
                        {
                            "id": "81a5956c-b7d4-45a2-afde-0f956ce68aee",
                            "color": "red",
                            "label": "Declined",
                            "value": "DECLINED",
                            "position": 1
                        },
                        {
                            "id": "4adf3c41-f7a4-4614-8226-0ce0918c0503",
                            "color": "yellow",
                            "label": "Tentative",
                            "value": "TENTATIVE",
                            "position": 2
                        },
                        {
                            "id": "23c5a1c2-1d16-40ce-a747-660be35bd518",
                            "color": "green",
                            "label": "Accepted",
                            "value": "ACCEPTED",
                            "position": 3
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "da6e6808-841d-4079-b050-a2d59e7b1a37",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "bd330d82-e102-43ed-88fe-caf5abe486f4",
                    "type": "TEXT",
                    "name": "displayName",
                    "label": "Display Name",
                    "description": "Display Name",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6cf6873a-af1e-46ab-aacd-80b2254b0239",
                    "type": "BOOLEAN",
                    "name": "isOrganizer",
                    "label": "Is Organizer",
                    "description": "Is Organizer",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": false,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "61840181-5ec1-4e0f-a133-b705d19a38ff",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "9ae2ccf9-1390-4861-a771-324ab4310f33",
                    "type": "RELATION",
                    "name": "calendarEvent",
                    "label": "Event ID",
                    "description": "Event ID",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "28688620-c3df-463d-a655-ad6435f6215b",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "2128a43e-af47-44bf-b7e9-5d00ddd27a99",
                            "nameSingular": "calendarEventParticipant",
                            "namePlural": "calendarEventParticipants"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "9ae2ccf9-1390-4861-a771-324ab4310f33",
                            "name": "calendarEvent"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "37d40c3f-e106-4348-af22-201659bbd8a6",
                            "nameSingular": "calendarEvent",
                            "namePlural": "calendarEvents"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "c9a2189f-abb1-4166-9d1d-f870f0e32b3e",
                            "name": "calendarEventParticipants"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "a7eb211d-4481-4269-99d7-cf2183b45598",
                    "type": "RELATION",
                    "name": "person",
                    "label": "Person",
                    "description": "Person",
                    "icon": "IconUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "20d67b64-4e67-44a1-81c7-116c0c8c6368",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "2128a43e-af47-44bf-b7e9-5d00ddd27a99",
                            "nameSingular": "calendarEventParticipant",
                            "namePlural": "calendarEventParticipants"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "a7eb211d-4481-4269-99d7-cf2183b45598",
                            "name": "person"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "ff2881da-89f6-4f15-8f0a-e3f355ea3b94",
                            "nameSingular": "person",
                            "namePlural": "people"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "d44bf743-b557-47d4-9341-04114fd05d52",
                            "name": "calendarEventParticipants"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "eb0946e3-084e-477f-8aba-3c88ed29cf3b",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "workspaceMember",
            "namePlural": "workspaceMembers",
            "labelSingular": "Workspace Member",
            "labelPlural": "Workspace Members",
            "description": "A workspace member",
            "icon": "IconUserCircle",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "db603745-ca4c-4a32-bb0d-d475216111d9",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "b97b813e-dc34-4c16-b7d3-7dee169c3f11",
                    "type": "UUID",
                    "name": "userId",
                    "label": "User Id",
                    "description": "Associated User Id",
                    "icon": "IconCircleUsers",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "12d19915-891e-4a4e-8c42-49a12639264f",
                    "type": "RELATION",
                    "name": "authoredComments",
                    "label": "Authored comments",
                    "description": "Authored comments",
                    "icon": "IconComment",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "4917f689-5cc2-4716-b4ab-6906aef009b3",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "12d19915-891e-4a4e-8c42-49a12639264f",
                            "name": "authoredComments"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "3af96291-b873-402f-bd90-f4731984c8dd",
                            "nameSingular": "comment",
                            "namePlural": "comments"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "1a7fec45-dd33-43a0-9302-5b0b9052d2f0",
                            "name": "author"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "5e889b07-de1e-47f0-aeb9-301a684bd6a4",
                    "type": "RELATION",
                    "name": "authoredActivities",
                    "label": "Authored activities",
                    "description": "Activities created by the workspace member",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "6d4e8025-7ee9-4079-ae80-b18de7b5ff4e",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "5e889b07-de1e-47f0-aeb9-301a684bd6a4",
                            "name": "authoredActivities"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "cf6f8138-3445-4a36-b137-41ebb8f2e3dc",
                            "nameSingular": "activity",
                            "namePlural": "activities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "beac3449-af10-43a2-9abb-276a798df3de",
                            "name": "author"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "dd7ee456-52bf-4335-bee9-7ba18a1e9a09",
                    "type": "RELATION",
                    "name": "messageParticipants",
                    "label": "Message Participants",
                    "description": "Message Participants",
                    "icon": "IconUserCircle",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "94c22c13-b00a-4f60-b2d2-f34b9efe6aa2",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "dd7ee456-52bf-4335-bee9-7ba18a1e9a09",
                            "name": "messageParticipants"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "b889efa2-e58a-471c-b258-3c5ef2fa09e9",
                            "nameSingular": "messageParticipant",
                            "namePlural": "messageParticipants"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "a7036ff9-a86d-4290-9f2a-cc360c86fe1e",
                            "name": "workspaceMember"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "de44f939-76d9-4c1a-96aa-7c5a646f2045",
                    "type": "RELATION",
                    "name": "accountOwnerForCompanies",
                    "label": "Account Owner For Companies",
                    "description": "Account owner for companies",
                    "icon": "IconBriefcase",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "0896a728-e2cf-4032-9af2-a471645e9697",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "de44f939-76d9-4c1a-96aa-7c5a646f2045",
                            "name": "accountOwnerForCompanies"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "f1231579-8e7d-4b84-9a60-41844902f2c4",
                            "nameSingular": "company",
                            "namePlural": "companies"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "3ece1b4d-c052-4b32-bd2a-ba0f8c8b6f3e",
                            "name": "accountOwner"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "45b45740-d6cd-476c-af07-f6ed323953b6",
                    "type": "RELATION",
                    "name": "auditLogs",
                    "label": "Audit Logs",
                    "description": "Audit Logs linked to the workspace member",
                    "icon": "IconTimelineEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "025cb05b-3bdb-4418-8a07-8b7a8c22dbc1",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "45b45740-d6cd-476c-af07-f6ed323953b6",
                            "name": "auditLogs"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "189129d8-8037-4edf-9c91-63001ab52370",
                            "nameSingular": "auditLog",
                            "namePlural": "auditLogs"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "0e09a491-d3bd-4a23-9c50-cda32acbc7ef",
                            "name": "workspaceMember"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "956a552e-b573-4d31-afd4-b65cb8f2b4b8",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "1b2d1e2c-290d-4a0e-adf9-192e5fac103c",
                    "type": "RELATION",
                    "name": "authoredAttachments",
                    "label": "Authored attachments",
                    "description": "Attachments created by the workspace member",
                    "icon": "IconFileImport",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "c86299f2-7210-4c89-a2ab-29e17f21edc8",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "1b2d1e2c-290d-4a0e-adf9-192e5fac103c",
                            "name": "authoredAttachments"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "9a53b4e1-bce2-4160-8ce3-028e14b2abb7",
                            "nameSingular": "attachment",
                            "namePlural": "attachments"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "3d2bbb4e-e908-4bc5-97d7-a152dd7652bf",
                            "name": "author"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "89b50259-5ed6-4504-9c89-3f4457dc43a6",
                    "type": "RELATION",
                    "name": "blocklist",
                    "label": "Blocklist",
                    "description": "Blocklisted handles",
                    "icon": "IconForbid2",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "d9eb657a-f97b-4cec-af79-0e113d47279b",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "89b50259-5ed6-4504-9c89-3f4457dc43a6",
                            "name": "blocklist"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "033ae6fd-c59e-475e-ba93-bbc1b2b185a5",
                            "nameSingular": "blocklist",
                            "namePlural": "blocklists"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "597169c3-ad77-4a48-8a2a-94b7cc155e25",
                            "name": "workspaceMember"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "aa2d23d6-1303-4347-b252-48dd9f9bd52b",
                    "type": "SELECT",
                    "name": "dateFormat",
                    "label": "Date format",
                    "description": "User's preferred date format",
                    "icon": "IconCalendarEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'SYSTEM'",
                    "options": [
                        {
                            "id": "6a0b0a55-082b-4d1e-ac29-2d423a05744c",
                            "color": "turquoise",
                            "label": "System",
                            "value": "SYSTEM",
                            "position": 0
                        },
                        {
                            "id": "eee2180b-4f0e-41ef-9a6a-2e2938322270",
                            "color": "red",
                            "label": "Month First",
                            "value": "MONTH_FIRST",
                            "position": 1
                        },
                        {
                            "id": "4cbf15d8-a63c-4615-ad5d-74e798199ffd",
                            "color": "purple",
                            "label": "Day First",
                            "value": "DAY_FIRST",
                            "position": 2
                        },
                        {
                            "id": "c391f77e-7728-4369-ad35-60a1d84ee49e",
                            "color": "sky",
                            "label": "Year First",
                            "value": "YEAR_FIRST",
                            "position": 3
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "95db483c-ff8c-430f-a995-de4f96fff94b",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "ddadaf73-086d-4453-b631-5e16afce87b5",
                    "type": "TEXT",
                    "name": "locale",
                    "label": "Language",
                    "description": "Preferred language",
                    "icon": "IconLanguage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'en'",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6623a9d7-e137-4709-a592-02ae76e5bfd7",
                    "type": "RELATION",
                    "name": "calendarEventParticipants",
                    "label": "Calendar Event Participants",
                    "description": "Calendar Event Participants",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "67aaa999-8332-43ba-8830-76bf48d53cf2",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "6623a9d7-e137-4709-a592-02ae76e5bfd7",
                            "name": "calendarEventParticipants"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "2128a43e-af47-44bf-b7e9-5d00ddd27a99",
                            "nameSingular": "calendarEventParticipant",
                            "namePlural": "calendarEventParticipants"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "b2982cd8-c796-4718-b74b-298b46d19841",
                            "name": "workspaceMember"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "7b895d3d-e6df-4b0e-8497-28d91431de59",
                    "type": "TEXT",
                    "name": "avatarUrl",
                    "label": "Avatar Url",
                    "description": "Workspace member avatar",
                    "icon": "IconFileUpload",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "4d977e6a-4d0e-4bca-b743-9bc3df1744d6",
                    "type": "RELATION",
                    "name": "connectedAccounts",
                    "label": "Connected accounts",
                    "description": "Connected accounts",
                    "icon": "IconAt",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "9a65de46-ef09-429f-b7ba-31cb8a8c7038",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "4d977e6a-4d0e-4bca-b743-9bc3df1744d6",
                            "name": "connectedAccounts"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "90e63030-f26d-46c8-b27a-13686b717538",
                            "nameSingular": "connectedAccount",
                            "namePlural": "connectedAccounts"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "8c36e0eb-108e-4797-97a1-b9b5ea096180",
                            "name": "accountOwner"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "156aa42f-667a-46aa-9aea-ff8472f28509",
                    "type": "TEXT",
                    "name": "timeZone",
                    "label": "Time zone",
                    "description": "User time zone",
                    "icon": "IconTimezone",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'system'",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "fefca31b-ba53-4860-b04e-5b9944587693",
                    "type": "RELATION",
                    "name": "assignedTasks",
                    "label": "Assigned tasks",
                    "description": "Tasks assigned to the workspace member",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "5527b9f6-55ec-4efd-b244-03e91b01e91b",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "fefca31b-ba53-4860-b04e-5b9944587693",
                            "name": "assignedTasks"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "99f8caa6-263c-4690-8dc0-eb7645304cf5",
                            "nameSingular": "task",
                            "namePlural": "tasks"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "53347f0d-658a-45b0-91b5-2088adbeaaf0",
                            "name": "assignee"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "db603745-ca4c-4a32-bb0d-d475216111d9",
                    "type": "FULL_NAME",
                    "name": "name",
                    "label": "Name",
                    "description": "Workspace member name",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": {
                        "lastName": "''",
                        "firstName": "''"
                    },
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "83def86f-9dbd-4606-a7a1-844c1d0f3080",
                    "type": "TEXT",
                    "name": "userEmail",
                    "label": "User Email",
                    "description": "Related user email address",
                    "icon": "IconMail",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "a147a0df-eb28-4259-a304-0460f92adf30",
                    "type": "RELATION",
                    "name": "assignedActivities",
                    "label": "Assigned activities",
                    "description": "Activities assigned to the workspace member",
                    "icon": "IconCheckbox",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "cf9ac76a-9f22-4252-a00a-63cc45fcabc4",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "a147a0df-eb28-4259-a304-0460f92adf30",
                            "name": "assignedActivities"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "cf6f8138-3445-4a36-b137-41ebb8f2e3dc",
                            "nameSingular": "activity",
                            "namePlural": "activities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "ea9aa19c-22d8-4b72-83ff-78d9653c27c4",
                            "name": "assignee"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "56975f55-db1f-464f-b03e-2ecadb8b59cd",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f537669a-4524-4dfc-91d3-79438e2a481e",
                    "type": "RELATION",
                    "name": "favorites",
                    "label": "Favorites",
                    "description": "Favorites linked to the workspace member",
                    "icon": "IconHeart",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "b0f40da3-1fda-4803-be21-14a2755bc834",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "f537669a-4524-4dfc-91d3-79438e2a481e",
                            "name": "favorites"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "d19be8c8-2cf4-4c29-80ae-0d1841dc11c1",
                            "nameSingular": "favorite",
                            "namePlural": "favorites"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "407a2cbc-6c15-41dd-942c-5322d273bec3",
                            "name": "workspaceMember"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "f1374fe7-1b98-4868-96b0-63d64996e397",
                    "type": "SELECT",
                    "name": "timeFormat",
                    "label": "Time format",
                    "description": "User's preferred time format",
                    "icon": "IconClock2",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'SYSTEM'",
                    "options": [
                        {
                            "id": "91233e08-341a-4dfd-bb89-450a4f40c579",
                            "color": "sky",
                            "label": "System",
                            "value": "SYSTEM",
                            "position": 0
                        },
                        {
                            "id": "9e680299-7bee-432a-9e65-dfa9ad270769",
                            "color": "red",
                            "label": "24HRS",
                            "value": "HOUR_24",
                            "position": 1
                        },
                        {
                            "id": "c1d9ba3d-291b-4636-9909-14e41a5812db",
                            "color": "purple",
                            "label": "12HRS",
                            "value": "HOUR_12",
                            "position": 2
                        }
                    ],
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "6c5481e3-b9a4-4298-b011-14dfc7ed3be4",
                    "type": "TEXT",
                    "name": "colorScheme",
                    "label": "Color Scheme",
                    "description": "Preferred color scheme",
                    "icon": "IconColorSwatch",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'Light'",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "4ae17923-dd16-45c7-9df3-8cee92584a52",
                    "type": "RELATION",
                    "name": "timelineActivities",
                    "label": "Events",
                    "description": "Events linked to the workspace member",
                    "icon": "IconTimelineEvent",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "170c6f88-63b3-41ff-9e5d-044968a062a4",
                        "direction": "ONE_TO_MANY",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "4ae17923-dd16-45c7-9df3-8cee92584a52",
                            "name": "timelineActivities"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "94ef21ab-5eca-4c80-b378-2a207dcca2e4",
                            "nameSingular": "timelineActivity",
                            "namePlural": "timelineActivities"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "dba195e2-63d6-42ca-94aa-42c87b4306ea",
                            "name": "workspaceMember"
                        }
                    }
                }
            ]
        },
        {
            "__typename": "object",
            "id": "1b5e63b9-9fc3-485d-86ff-de70ff17a665",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "viewSort",
            "namePlural": "viewSorts",
            "labelSingular": "View Sort",
            "labelPlural": "View Sorts",
            "description": "(System) View Sorts",
            "icon": "IconArrowsSort",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "35329333-5b6c-4160-8a2a-48ff1f40c500",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "14b9ac38-97c5-44f9-b4f5-a6bbc18dd87c",
                    "type": "TEXT",
                    "name": "direction",
                    "label": "Direction",
                    "description": "View Sort direction",
                    "icon": null,
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "'asc'",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "673fb6fb-5123-4336-9b4b-e4b268c1cffe",
                    "type": "RELATION",
                    "name": "view",
                    "label": "View",
                    "description": "View Sort related view",
                    "icon": "IconLayoutCollage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "53abf7c2-810d-478b-bb2d-689f31322d67",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "1b5e63b9-9fc3-485d-86ff-de70ff17a665",
                            "nameSingular": "viewSort",
                            "namePlural": "viewSorts"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "673fb6fb-5123-4336-9b4b-e4b268c1cffe",
                            "name": "view"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "90df20e5-c655-474f-bb98-b423652e36df",
                            "nameSingular": "view",
                            "namePlural": "views"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "4abadd14-56cd-48e4-8013-7b46de4ffe22",
                            "name": "viewSorts"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "75ec0934-d5bf-4a0a-9b18-cadb0a56e489",
                    "type": "UUID",
                    "name": "fieldMetadataId",
                    "label": "Field Metadata Id",
                    "description": "View Sort target field",
                    "icon": "IconTag",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "35329333-5b6c-4160-8a2a-48ff1f40c500",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "a5baa6c5-3cf2-4f2d-a7ff-b5d7176a1498",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "bdfdc845-c48e-4671-b07b-579ad800408f",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "e9572e7f-c327-4da6-93c0-64bf5a465de4",
                    "type": "UUID",
                    "name": "viewId",
                    "label": "View id (foreign key)",
                    "description": "View Sort related view id foreign key",
                    "icon": "IconLayoutCollage",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "189129d8-8037-4edf-9c91-63001ab52370",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "auditLog",
            "namePlural": "auditLogs",
            "labelSingular": "Audit Log",
            "labelPlural": "Audit Logs",
            "description": "An audit log of actions performed in the system",
            "icon": "IconIconTimelineEvent",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "8407e296-b80d-4bcb-9e33-8bf9bf942625",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "3cc5ffd0-17da-42f6-87bb-2021b3ad41e3",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "78632f28-cdfa-4f91-a019-de3d7b711d4d",
                    "type": "RAW_JSON",
                    "name": "context",
                    "label": "Event context",
                    "description": "Json object to provide context (user, device, workspace, etc.)",
                    "icon": "IconListDetails",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "b706c04a-686d-45a4-b2a0-f28fb8e743fa",
                    "type": "TEXT",
                    "name": "objectMetadataId",
                    "label": "Object metadata id",
                    "description": "Object metadata id",
                    "icon": "IconAbc",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "fadfc339-188a-4563-a502-478e72ce09c3",
                    "type": "TEXT",
                    "name": "objectName",
                    "label": "Object name",
                    "description": "Object name",
                    "icon": "IconAbc",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "f90ab65b-1171-4c1e-9603-7b744058c317",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "5e4525b9-5a43-414e-ad35-f1eb19858a27",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "522226c1-3446-423c-b6a6-44776f59b076",
                    "type": "RAW_JSON",
                    "name": "properties",
                    "label": "Event details",
                    "description": "Json value for event details",
                    "icon": "IconListDetails",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "0e09a491-d3bd-4a23-9c50-cda32acbc7ef",
                    "type": "RELATION",
                    "name": "workspaceMember",
                    "label": "Workspace Member",
                    "description": "Event workspace member",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "025cb05b-3bdb-4418-8a07-8b7a8c22dbc1",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "189129d8-8037-4edf-9c91-63001ab52370",
                            "nameSingular": "auditLog",
                            "namePlural": "auditLogs"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "0e09a491-d3bd-4a23-9c50-cda32acbc7ef",
                            "name": "workspaceMember"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "45b45740-d6cd-476c-af07-f6ed323953b6",
                            "name": "auditLogs"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "8407e296-b80d-4bcb-9e33-8bf9bf942625",
                    "type": "TEXT",
                    "name": "name",
                    "label": "Event name",
                    "description": "Event name/type",
                    "icon": "IconAbc",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "9d2e7f7f-d1a9-4f42-bfe9-437fe0e72088",
                    "type": "UUID",
                    "name": "recordId",
                    "label": "Record id",
                    "description": "Record id",
                    "icon": "IconAbc",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "7d8d0023-c979-4c93-850e-7fce90b500ae",
                    "type": "UUID",
                    "name": "workspaceMemberId",
                    "label": "Workspace Member id (foreign key)",
                    "description": "Event workspace member id foreign key",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                }
            ]
        },
        {
            "__typename": "object",
            "id": "033ae6fd-c59e-475e-ba93-bbc1b2b185a5",
            "dataSourceId": "9af88cea-baa2-4c00-bc22-c55cfbcd7e3c",
            "nameSingular": "blocklist",
            "namePlural": "blocklists",
            "labelSingular": "Blocklist",
            "labelPlural": "Blocklists",
            "description": "Blocklist",
            "icon": "IconForbid2",
            "isCustom": false,
            "isRemote": false,
            "isActive": true,
            "isSystem": true,
            "createdAt": "2024-08-05T16:38:57.285Z",
            "updatedAt": "2024-08-05T16:38:57.285Z",
            "labelIdentifierFieldMetadataId": "231e4111-5613-4925-97e4-6c84bcee60b7",
            "imageIdentifierFieldMetadataId": null,
            "fields": [
                {
                    "__typename": "field",
                    "id": "2b4e97a1-b598-47f4-83ab-4ec184dac6ed",
                    "type": "DATE_TIME",
                    "name": "createdAt",
                    "label": "Creation date",
                    "description": "Creation date",
                    "icon": "IconCalendar",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "54603149-fda9-4d0b-87eb-0c093c297599",
                    "type": "UUID",
                    "name": "workspaceMemberId",
                    "label": "WorkspaceMember id (foreign key)",
                    "description": "WorkspaceMember id foreign key",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "597169c3-ad77-4a48-8a2a-94b7cc155e25",
                    "type": "RELATION",
                    "name": "workspaceMember",
                    "label": "WorkspaceMember",
                    "description": "WorkspaceMember",
                    "icon": "IconCircleUser",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": true,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": null,
                    "options": null,
                    "relationDefinition": {
                        "__typename": "RelationDefinition",
                        "relationId": "d9eb657a-f97b-4cec-af79-0e113d47279b",
                        "direction": "MANY_TO_ONE",
                        "sourceObjectMetadata": {
                            "__typename": "object",
                            "id": "033ae6fd-c59e-475e-ba93-bbc1b2b185a5",
                            "nameSingular": "blocklist",
                            "namePlural": "blocklists"
                        },
                        "sourceFieldMetadata": {
                            "__typename": "field",
                            "id": "597169c3-ad77-4a48-8a2a-94b7cc155e25",
                            "name": "workspaceMember"
                        },
                        "targetObjectMetadata": {
                            "__typename": "object",
                            "id": "1e9ad365-ccb9-4dec-b42f-13b6e86477e3",
                            "nameSingular": "workspaceMember",
                            "namePlural": "workspaceMembers"
                        },
                        "targetFieldMetadata": {
                            "__typename": "field",
                            "id": "89b50259-5ed6-4504-9c89-3f4457dc43a6",
                            "name": "blocklist"
                        }
                    }
                },
                {
                    "__typename": "field",
                    "id": "231e4111-5613-4925-97e4-6c84bcee60b7",
                    "type": "TEXT",
                    "name": "handle",
                    "label": "Handle",
                    "description": "Handle",
                    "icon": "IconAt",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "''",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "88c47801-89ed-43ee-8b0d-172eccef5445",
                    "type": "DATE_TIME",
                    "name": "updatedAt",
                    "label": "Last update",
                    "description": "Last time the record was changed",
                    "icon": "IconCalendarClock",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": false,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "now",
                    "options": null,
                    "relationDefinition": null
                },
                {
                    "__typename": "field",
                    "id": "c1f89a93-80b6-4601-a330-8d9f7d5ef894",
                    "type": "UUID",
                    "name": "id",
                    "label": "Id",
                    "description": "Id",
                    "icon": "Icon123",
                    "isCustom": false,
                    "isActive": true,
                    "isSystem": true,
                    "isNullable": false,
                    "createdAt": "2024-08-05T16:38:57.285Z",
                    "updatedAt": "2024-08-05T16:38:57.285Z",
                    "defaultValue": "uuid",
                    "options": null,
                    "relationDefinition": null
                }
            ]
        }
    ];
    
    // Todo fix typing here (the backend is not in sync with the frontend)
    return mockArray as ObjectMetadataItem[];
};