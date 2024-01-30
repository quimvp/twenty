import { act, renderHook } from '@testing-library/react';
import { RecoilRoot, useSetRecoilState } from 'recoil';

import { objectMetadataItemsState } from '@/object-metadata/states/objectMetadataItemsState';
import { getObjectMetadataItemsMock } from '@/object-metadata/utils/getObjectMetadataItemsMock';
import { useMultiObjectRecordsQueryResultFormattedAsObjectRecordForSelectArray } from '@/object-record/relation-picker/hooks/useMultiObjectRecordsQueryResultFormattedAsObjectRecordForSelectArray';
import { RelationPickerScopeInternalContext } from '@/object-record/relation-picker/scopes/scope-internal-context/RelationPickerScopeInternalContext';

const scopeId = 'scopeId';
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <RelationPickerScopeInternalContext.Provider value={{ scopeId }}>
    <RecoilRoot>{children}</RecoilRoot>
  </RelationPickerScopeInternalContext.Provider>
);

const objectMetadataItemsMock = getObjectMetadataItemsMock();

const opportunityId = 'cb702502-4b1d-488e-9461-df3fb096ebf6';
const personId = 'ab091fd9-1b81-4dfd-bfdb-564ffee032a2';

describe('useMultiObjectRecordsQueryResultFormattedAsObjectRecordForSelectArray', () => {
  it('should return object formatted from objectMetadataItemsState', async () => {
    const { result } = renderHook(
      () => {
        return {
          formattedRecord:
            useMultiObjectRecordsQueryResultFormattedAsObjectRecordForSelectArray(
              {
                multiObjectRecordsQueryResult: {
                  opportunities: {
                    edges: [
                      {
                        node: {
                          id: opportunityId,
                          pointOfContactId:
                            'e992bda7-d797-4e12-af04-9b427f42244c',
                          updatedAt: '2023-11-30T11:13:15.308Z',
                          createdAt: '2023-11-30T11:13:15.308Z',
                        },
                        cursor: 'cursor',
                      },
                    ],
                    pageInfo: {},
                  },
                  people: {
                    edges: [
                      {
                        node: {
                          id: personId,
                          updatedAt: '2023-11-30T11:13:15.308Z',
                          createdAt: '2023-11-30T11:13:15.308Z',
                        },
                        cursor: 'cursor',
                      },
                    ],
                    pageInfo: {},
                  },
                },
              },
            ),
          setObjectMetadata: useSetRecoilState(objectMetadataItemsState),
        };
      },
      {
        wrapper: Wrapper,
      },
    );
    act(() => {
      result.current.setObjectMetadata(objectMetadataItemsMock);
    });

    expect(
      result.current.formattedRecord.objectRecordForSelectArray.length,
    ).toBe(2);

    const [opportunityRecordForSelect, personRecordForSelect] =
      result.current.formattedRecord.objectRecordForSelectArray;

    expect(opportunityRecordForSelect.objectMetadataItem.namePlural).toBe(
      'opportunities',
    );
    expect(opportunityRecordForSelect.record.id).toBe(opportunityId);
    expect(opportunityRecordForSelect.recordIdentifier.linkToShowPage).toBe(
      `/object/opportunity/${opportunityId}`,
    );

    expect(personRecordForSelect.objectMetadataItem.namePlural).toBe('people');
    expect(personRecordForSelect.record.id).toBe(personId);
    expect(personRecordForSelect.recordIdentifier.linkToShowPage).toBe(
      `/object/person/${personId}`,
    );
  });
});
