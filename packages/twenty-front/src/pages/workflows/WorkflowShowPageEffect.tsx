import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useFindOneRecord } from '@/object-record/hooks/useFindOneRecord';
import { showPageWorkflowDiagramState } from '@/workflow/states/showPageWorkflowDiagramState';
import { showPageWorkflowErrorState } from '@/workflow/states/showPageWorkflowErrorState';
import { showPageWorkflowLoadingState } from '@/workflow/states/showPageWorkflowLoadingState';
import {
  Workflow,
  WorkflowAction,
  WorkflowTrigger,
} from '@/workflow/types/Workflow';
import {
  WorkflowDiagram,
  WorkflowDiagramNodeData,
} from '@/workflow/types/WorkflowDiagram';
import { Edge, MarkerType, Node } from '@xyflow/react';
import { useEffect, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';

type WorkflowShowPageEffectProps = {
  workflowId: string;
};

const EMPTY_FLOW_DATA: WorkflowDiagram = {
  nodes: [],
  edges: [],
};

const generateId = () => {
  return Math.random().toString(16).slice(2);
};

const workflowTriggerToFlow = (trigger: WorkflowTrigger): WorkflowDiagram => {
  const nodes: Array<Node<WorkflowDiagramNodeData>> = [];
  const edges: Array<Edge> = [];

  // Helper function to generate nodes and edges recursively
  const generateFlow = (
    action: WorkflowAction,
    parentNodeId: string,
    xPos: number,
    yPos: number,
  ) => {
    const nodeId = generateId();
    nodes.push({
      id: nodeId,
      data: {
        nodeType: 'action',
        label: action.name,
      },
      position: {
        x: xPos,
        y: yPos,
      },
    });

    // Create an edge from the parent node to this node
    edges.push({
      id: generateId(),
      source: parentNodeId,
      target: nodeId,
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    });

    // Recursively generate flow for the next action if it exists
    if (action.nextAction !== undefined) {
      generateFlow(action.nextAction, nodeId, xPos + 150, yPos + 100);
    }
  };

  // Start with the trigger node
  const triggerNodeId = generateId();
  nodes.push({
    id: triggerNodeId,
    data: {
      nodeType: 'trigger',
      label: trigger.settings.triggerName,
    },
    position: {
      x: 0,
      y: 0,
    },
  });

  // If there's a next action, start the recursive generation
  if (trigger.nextAction !== undefined) {
    generateFlow(trigger.nextAction, triggerNodeId, 150, 100);
  }

  return {
    nodes,
    edges,
  };
};

const getFlowLastVersion = (
  workflow: Workflow | undefined,
): WorkflowDiagram => {
  if (workflow === undefined) {
    return EMPTY_FLOW_DATA;
  }

  const lastVersion = workflow.versions[0];
  if (lastVersion === undefined || lastVersion.trigger === undefined) {
    return EMPTY_FLOW_DATA;
  }

  return workflowTriggerToFlow(lastVersion.trigger);
};

const addCreateStepNodes = (
  nodes: Array<Node<WorkflowDiagramNodeData>>,
  edges: Array<Edge>,
) => {
  const nodesWithoutTargets = nodes.filter((node) =>
    edges.every((edge) => edge.source !== node.id),
  );

  const updatedNodes: typeof nodes = nodes.slice();
  const updatedEdges: typeof edges = edges.slice();

  for (const node of nodesWithoutTargets) {
    const newCreateStepNode: Node<WorkflowDiagramNodeData> = {
      id: generateId(),
      type: 'create-step',
      data: {},
      position: { x: 0, y: 0 },
    };

    updatedNodes.push(newCreateStepNode);

    updatedEdges.push({
      id: generateId(),
      source: node.id,
      target: newCreateStepNode.id,
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    });
  }

  return {
    nodes: updatedNodes,
    edges: updatedEdges,
  };
};

export const WorkflowShowPageEffect = ({
  workflowId,
}: WorkflowShowPageEffectProps) => {
  const {
    record: workflow,
    loading,
    error,
  } = useFindOneRecord<Workflow>({
    objectNameSingular: CoreObjectNameSingular.Workflow,
    objectRecordId: workflowId,
    recordGqlFields: {
      id: true,
      name: true,
      versions: true,
      publishedVersionId: true,
    },
  });

  const flowLastVersion = useMemo(
    () => getFlowLastVersion(workflow),
    [workflow],
  );

  const flowWithCreateStepNodes = useMemo(
    () => addCreateStepNodes(flowLastVersion.nodes, flowLastVersion.edges),
    [flowLastVersion],
  );

  const setCurrentWorkflowData = useSetRecoilState(
    showPageWorkflowDiagramState,
  );
  const setCurrentWorkflowLoading = useSetRecoilState(
    showPageWorkflowLoadingState,
  );
  const setCurrentWorkflowError = useSetRecoilState(showPageWorkflowErrorState);

  useEffect(() => {
    setCurrentWorkflowData(
      workflow === undefined ? undefined : flowWithCreateStepNodes,
    );
  }, [flowWithCreateStepNodes, setCurrentWorkflowData, workflow]);

  useEffect(() => {
    setCurrentWorkflowLoading(loading);
  }, [loading, setCurrentWorkflowLoading]);

  useEffect(() => {
    setCurrentWorkflowError(error);
  }, [error, setCurrentWorkflowError]);

  return null;
};
