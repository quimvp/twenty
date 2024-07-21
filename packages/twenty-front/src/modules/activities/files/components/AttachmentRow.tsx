import { AttachmentDropdown } from '@/activities/files/components/AttachmentDropdown';
import { AttachmentIcon } from '@/activities/files/components/AttachmentIcon';
import { Attachment } from '@/activities/files/types/Attachment';
import { downloadFile } from '@/activities/files/utils/downloadFile';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useDeleteOneRecord } from '@/object-record/hooks/useDeleteOneRecord';
import { useUpdateOneRecord } from '@/object-record/hooks/useUpdateOneRecord';
import {
  FieldContext,
  GenericFieldContextType,
} from '@/object-record/record-field/contexts/FieldContext';
import { EditableField } from '@/ui/field/input/components/EditableField';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useMemo, useState } from 'react';
import { IconCalendar } from 'twenty-ui';
import { REACT_APP_SERVER_BASE_URL } from '~/config';
import { formatToHumanReadableDate } from '~/utils/date-utils';

const StyledRow = styled.div`
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid ${({ theme }) => theme.border.color.light};
  color: ${({ theme }) => theme.font.color.primary};
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing(2)};
`;

const StyledLeftContent = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const StyledRightContent = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

const StyledCalendarIconContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.font.color.light};
  display: flex;
`;

const StyledLink = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.font.color.primary};
  display: flex;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.font.color.secondary};
  }
`;

export const AttachmentRow = ({ attachment }: { attachment: Attachment }) => {
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(attachment.name);
  const fieldContext = useMemo(
    () => ({ recoilScopeId: attachment?.id ?? '' }),
    [attachment?.id],
  );

  const { deleteOneRecord: deleteOneAttachment } = useDeleteOneRecord({
    objectNameSingular: CoreObjectNameSingular.Attachment,
  });

  const handleDelete = () => {
    deleteOneAttachment(attachment.id);
  };

  const { updateOneRecord: updateOneAttachment } = useUpdateOneRecord({
    objectNameSingular: CoreObjectNameSingular.Attachment,
  });

  const handleUpdate = () => {
    updateOneAttachment({
      idToUpdate: attachment.id,
      updateOneRecordInput: { name: newName },
    });
    setIsEditing(false);
  };

  const handleRename = () => {
    setIsEditing(true);
  };

  const handleInputChange = (text: string) => {
    setNewName(text);
  };

  const handleInputBlur = () => {
    handleUpdate();
  };

  return (
    <FieldContext.Provider value={fieldContext as GenericFieldContextType}>
      <StyledRow>
        <StyledLeftContent>
          <AttachmentIcon attachmentType={attachment.type} />
          {isEditing ? (
            <EditableField
              value={newName}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleUpdate();
                }
              }}
              autoFocus
              fullWidth
            />
          ) : (
            <StyledLink
              href={REACT_APP_SERVER_BASE_URL + '/files/' + attachment.fullPath}
              target="__blank"
            >
              {attachment.name}
            </StyledLink>
          )}
        </StyledLeftContent>
        <StyledRightContent>
          <StyledCalendarIconContainer>
            <IconCalendar size={theme.icon.size.md} />
          </StyledCalendarIconContainer>
          {formatToHumanReadableDate(attachment.createdAt)}
          <AttachmentDropdown
            scopeKey={attachment.id}
            onDelete={handleDelete}
            onDownload={() => {
              downloadFile(attachment.fullPath, attachment.name);
            }}
            onRename={handleRename}
          />
        </StyledRightContent>
      </StyledRow>
    </FieldContext.Provider>
  );
};
