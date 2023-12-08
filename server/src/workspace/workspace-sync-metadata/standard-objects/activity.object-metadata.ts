import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { RelationMetadataType } from 'src/metadata/relation-metadata/relation-metadata.entity';
import {
  ObjectMetadata,
  IsSystem,
  IsNullable,
  FieldMetadata,
  RelationMetadata,
} from 'src/workspace/workspace-sync-metadata/decorators/metadata.decorator';
import { ActivityTargetObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/activity-target.object-metadata';
import { AttachmentObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/attachment.object-metadata';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { CommentObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/comment.object-metadata';
import { WorkspaceMemberObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/workspace-member.object-metadata';

@ObjectMetadata({
  namePlural: 'activities',
  labelSingular: 'Activity',
  labelPlural: 'Activities',
  description: 'An activity',
  icon: 'IconCheckbox',
})
@IsSystem()
export class ActivityObjectMetadata extends BaseObjectMetadata {
  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Title',
    description: 'Activity title',
    icon: 'IconNotes',
  })
  @IsNullable()
  title: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Body',
    description: 'Activity body',
    icon: 'IconList',
  })
  @IsNullable()
  body: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Type',
    description: 'Activity type',
    icon: 'IconCheckbox',
    defaultValue: { value: 'Note' },
  })
  type: string;

  @FieldMetadata({
    type: FieldMetadataType.DATE_TIME,
    label: 'Reminder Date',
    description: 'Activity reminder date',
    icon: 'IconCalendarEvent',
  })
  @IsNullable()
  reminderAt: Date;

  @FieldMetadata({
    type: FieldMetadataType.DATE_TIME,
    label: 'Due Date',
    description: 'Activity due date',
    icon: 'IconCalendarEvent',
  })
  @IsNullable()
  dueAt: Date;

  @FieldMetadata({
    type: FieldMetadataType.DATE_TIME,
    label: 'Completion Date',
    description: 'Activity completion date',
    icon: 'IconCheck',
  })
  @IsNullable()
  completedAt: Date;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Targets',
    description: 'Activity targets',
    icon: 'IconCheckbox',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_MANY,
    objectName: 'activityTarget',
  })
  activityTargets: ActivityTargetObjectMetadata[];

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Attachments',
    description: 'Activity attachments',
    icon: 'IconFileImport',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_MANY,
    objectName: 'attachment',
  })
  attachments: AttachmentObjectMetadata[];

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Comments',
    description: 'Activity comments',
    icon: 'IconComment',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_MANY,
    objectName: 'comment',
  })
  comments: CommentObjectMetadata[];

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Author',
    description: 'Activity author',
    icon: 'IconUserCircle',
    joinColumn: 'authorId',
  })
  author: WorkspaceMemberObjectMetadata;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Assignee',
    description: 'Acitivity assignee',
    icon: 'IconUserCircle',
    joinColumn: 'assigneeId',
  })
  assignee: WorkspaceMemberObjectMetadata;
}
