import { H2Title, IconPlayerPlay, IconGitCommit, IconRestore } from 'twenty-ui';
import { CodeEditor } from '@/ui/input/code-editor/components/CodeEditor';
import { Section } from '@/ui/layout/section/components/Section';
import { ServerlessFunctionFormValues } from '@/settings/serverless-functions/hooks/useServerlessFunctionUpdateFormState';
import { Button } from '@/ui/input/button/components/Button';
import { CoreEditorHeader } from '@/ui/input/code-editor/components/CodeEditorHeader';
import styled from '@emotion/styled';
import { TabList } from '@/ui/layout/tab/components/TabList';

const StyledTabList = styled(TabList)`
  border-bottom: none;
`;

export const SettingsServerlessFunctionCodeEditorTab = ({
  formValues,
  handleExecute,
  handlePublish,handleReset,
  onChange,
}: {
  formValues: ServerlessFunctionFormValues;
  handleExecute: () => void;
  handlePublish: () => void;
  handleReset: () => void;
  onChange: (key: string) => (value: string) => void;
}) => {
  const TestButton = (
    <Button
      title="Test"
      variant="primary"
      accent="blue"
      size="small"
      Icon={IconPlayerPlay}
      onClick={handleExecute}
    />
  );
  const PublishButton = (
    <Button
      title="Publish"
      variant="secondary"
      size="small"
      Icon={IconGitCommit}
      onClick={handlePublish}
    />
  );
  const ResetButton = (
    <Button
      title="Reset"
      variant="secondary"
      size="small"
      Icon={IconRestore}
      onClick={handleReset}
    />
  );

  const TAB_LIST_COMPONENT_ID = 'serverless-function-editor';

  const HeaderTabList = (
    <StyledTabList
      tabListId={TAB_LIST_COMPONENT_ID}
      tabs={[{ id: 'index.ts', title: 'index.ts' }]}
    />
  );

  const Header = (
    <CoreEditorHeader
      leftNodes={[HeaderTabList]}
      rightNodes={[TestButton, PublishButton, ResetButton]}
    />
  );

  return (
    <Section>
      <H2Title
        title="Code your function"
        description="Write your function (in typescript) below"
      />
      <CodeEditor
        value={formValues.code}
        onChange={onChange('code')}
        header={Header}
      />
    </Section>
  );
};
