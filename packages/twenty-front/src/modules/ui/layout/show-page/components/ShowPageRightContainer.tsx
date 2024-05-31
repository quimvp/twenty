import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import {
  IconCalendarEvent,
  IconCheckbox,
  IconMail,
  IconNotes,
  IconPaperclip,
  IconTimelineEvent,
} from 'twenty-ui';

import { Calendar } from '@/activities/calendar/components/Calendar';
import { EmailThreads } from '@/activities/emails/components/EmailThreads';
import { Attachments } from '@/activities/files/components/Attachments';
import { Notes } from '@/activities/notes/components/Notes';
import { ObjectTasks } from '@/activities/tasks/components/ObjectTasks';
import { Timeline } from '@/activities/timeline/components/Timeline';
import { TimelineQueryEffect } from '@/activities/timeline/components/TimelineQueryEffect';
import { TimelineActivities } from '@/activities/timelineActivities/components/TimelineActivities';
import { TimelineActivitiesQueryEffect } from '@/activities/timelineActivities/components/TimelineActivitiesQueryEffect';
import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { TabList } from '@/ui/layout/tab/components/TabList';
import { useTabList } from '@/ui/layout/tab/hooks/useTabList';
import { useIsMobile } from '@/ui/utilities/responsive/hooks/useIsMobile';
import { useIsFeatureEnabled } from '@/workspace/hooks/useIsFeatureEnabled';

const StyledShowPageRightContainer = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  justify-content: start;
  overflow: ${() => (useIsMobile() ? 'none' : 'hidden')};
  width: calc(100% + 4px);
`;

const StyledTabListContainer = styled.div`
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.border.color.light}`};
  box-sizing: border-box;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  height: 40px;
`;

export const TAB_LIST_COMPONENT_ID = 'show-page-right-tab-list';

type ShowPageRightContainerProps = {
  targetableObject: Pick<
    ActivityTargetableObject,
    'targetObjectNameSingular' | 'id'
  >;
  timeline?: boolean;
  tasks?: boolean;
  notes?: boolean;
  emails?: boolean;
  loading: boolean;
};

export const ShowPageRightContainer = ({
  targetableObject,
  timeline,
  tasks,
  notes,
  emails,
  loading,
}: ShowPageRightContainerProps) => {
  const { activeTabIdState } = useTabList(TAB_LIST_COMPONENT_ID);
  const activeTabId = useRecoilValue(activeTabIdState);

  const targetObjectNameSingular =
    targetableObject.targetObjectNameSingular as CoreObjectNameSingular;

  const isCompanyOrPerson = [
    CoreObjectNameSingular.Company,
    CoreObjectNameSingular.Person,
  ].includes(targetObjectNameSingular);

  const shouldDisplayCalendarTab = isCompanyOrPerson;
  const shouldDisplayLogTab = useIsFeatureEnabled('IS_EVENT_OBJECT_ENABLED');
  const shouldDisplayEmailsTab = emails && isCompanyOrPerson;

  const TAB_LIST = [
    {
      id: 'timeline',
      title: 'Timeline',
      Icon: IconTimelineEvent,
      hide: !timeline,
    },
    { id: 'tasks', title: 'Tasks', Icon: IconCheckbox, hide: !tasks },
    { id: 'notes', title: 'Notes', Icon: IconNotes, hide: !notes },
    { id: 'files', title: 'Files', Icon: IconPaperclip, hide: !notes },
    {
      id: 'emails',
      title: 'Emails',
      Icon: IconMail,
      hide: !shouldDisplayEmailsTab,
    },
    {
      id: 'calendar',
      title: 'Calendar',
      Icon: IconCalendarEvent,
      hide: !shouldDisplayCalendarTab,
    },
  ];

  const renderActiveTabContent = () => {
    switch (activeTabId) {
      case 'timeline':
        return shouldDisplayLogTab ? (
          <>
            <TimelineActivitiesQueryEffect
              targetableObject={targetableObject}
            />
            <TimelineActivities targetableObject={targetableObject} />
          </>
        ) : (
          <>
            <TimelineQueryEffect targetableObject={targetableObject} />
            <Timeline loading={loading} targetableObject={targetableObject} />
          </>
        );
      case 'tasks':
        return <ObjectTasks targetableObject={targetableObject} />;
      case 'notes':
        return <Notes targetableObject={targetableObject} />;
      case 'files':
        return <Attachments targetableObject={targetableObject} />;
      case 'emails':
        return <EmailThreads targetableObject={targetableObject} />;
      case 'calendar':
        return <Calendar targetableObject={targetableObject} />;
      default:
        return null;
    }
  };

  return (
    <StyledShowPageRightContainer>
      <StyledTabListContainer>
        <TabList
          loading={loading}
          tabListId={TAB_LIST_COMPONENT_ID}
          tabs={TAB_LIST}
        />
      </StyledTabListContainer>
      {renderActiveTabContent()}
    </StyledShowPageRightContainer>
  );
};
