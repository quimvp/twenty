import { renderHook } from '@testing-library/react';

import { useNotes } from '@/activities/notes/hooks/useNotes';
import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';

jest.mock('@/activities/hooks/useActivities', () => ({
  useActivities: jest.fn(() => ({
    activities: [{ id: '1', content: 'Example Note' }],
    initialized: true,
    loading: false,
  })),
}));

jest.mock('recoil', () => {
  const actualRecoil = jest.requireActual('recoil');
  return {
    ...actualRecoil,
    useRecoilState: jest.fn(() => {
      const mockCurrentNotesQueryVariables = {
        filter: {
          type: { eq: 'Note' },
        },
        orderBy: 'mockOrderBy',
      };
      return [mockCurrentNotesQueryVariables, jest.fn()];
    }),
    atom: jest.fn(),
  };
});

describe('useNotes', () => {
  it('should return notes, initialized, and loading as expected', () => {
    const mockTargetableObject: ActivityTargetableObject = {
      id: '1',
      targetObjectNameSingular: 'Example Target',
    };
    const { result } = renderHook(() => useNotes(mockTargetableObject));

    expect(result.current.notes).toEqual([
      { id: '1', content: 'Example Note' },
    ]);
    expect(result.current.initialized).toBe(true);
    expect(result.current.loading).toBe(false);
  });
});
