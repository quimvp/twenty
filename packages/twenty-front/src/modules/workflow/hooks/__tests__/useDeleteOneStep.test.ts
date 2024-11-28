import { TRIGGER_STEP_ID } from '@/workflow/constants/TriggerStepId';
import { WorkflowWithCurrentVersion } from '@/workflow/types/Workflow';
import { removeStep } from '@/workflow/utils/removeStep';
import { renderHook } from '@testing-library/react';
import { useDeleteOneStep } from '../useDeleteOneStep';

jest.mock('@/workflow/utils/removeStep', () => ({
  removeStep: jest.fn(),
}));

const mockUpdateOneWorkflowVersion = jest.fn();
jest.mock('@/object-record/hooks/useUpdateOneRecord', () => ({
  useUpdateOneRecord: () => ({
    updateOneRecord: mockUpdateOneWorkflowVersion,
  }),
}));

const mockCreateNewWorkflowVersion = jest.fn();
jest.mock('@/workflow/hooks/useCreateNewWorkflowVersion', () => ({
  useCreateNewWorkflowVersion: () => ({
    createNewWorkflowVersion: mockCreateNewWorkflowVersion,
  }),
}));

describe('useDeleteOneStep', () => {
  const mockWorkflow = {
    id: '123',
    versions: [],
    currentVersion: {
      id: '456',
      status: 'DRAFT',
      steps: [],
      trigger: { type: 'manual' },
    },
  };

  it('should delete step in draft version', async () => {
    const { result } = renderHook(() =>
      useDeleteOneStep({
        stepId: '789',
        workflow: mockWorkflow as unknown as WorkflowWithCurrentVersion,
      }),
    );

    await result.current.deleteOneStep();

    expect(removeStep).toHaveBeenCalled();
    expect(mockUpdateOneWorkflowVersion).toHaveBeenCalled();
  });

  it('should delete trigger in draft version', async () => {
    const { result } = renderHook(() =>
      useDeleteOneStep({
        stepId: TRIGGER_STEP_ID,
        workflow: mockWorkflow as unknown as WorkflowWithCurrentVersion,
      }),
    );

    await result.current.deleteOneStep();

    expect(mockUpdateOneWorkflowVersion).toHaveBeenCalledWith({
      idToUpdate: '456',
      updateOneRecordInput: { trigger: null },
    });
  });

  it('should create new version when not draft', async () => {
    const nonDraftWorkflow = {
      ...mockWorkflow,
      currentVersion: { ...mockWorkflow.currentVersion, status: 'ACTIVE' },
    };

    const { result } = renderHook(() =>
      useDeleteOneStep({
        stepId: '789',
        workflow: nonDraftWorkflow as unknown as WorkflowWithCurrentVersion,
      }),
    );

    await result.current.deleteOneStep();

    expect(mockCreateNewWorkflowVersion).toHaveBeenCalled();
  });
});
