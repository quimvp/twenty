import { renderHook } from '@testing-library/react';
import { useDeleteOneWorkflowVersion } from '../useDeleteOneWorkflowVersion';

const mockDeleteOneRecord = jest.fn();
jest.mock('@/object-record/hooks/useDeleteOneRecord', () => ({
  useDeleteOneRecord: () => ({
    deleteOneRecord: mockDeleteOneRecord,
  }),
}));

describe('useDeleteOneWorkflowVersion', () => {
  it('should delete workflow version', async () => {
    const { result } = renderHook(() => useDeleteOneWorkflowVersion());
    await result.current.deleteOneWorkflowVersion({ workflowVersionId: '123' });

    expect(mockDeleteOneRecord).toHaveBeenCalledWith('123');
  });
});
