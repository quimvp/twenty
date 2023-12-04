import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import {
  FieldMetadata,
  IsSystem,
  ObjectMetadata,
} from 'src/workspace/workspace-manager/decorators/metadata.decorator';

@ObjectMetadata({
  namePlural: 'webhooks',
  labelSingular: 'Webhook',
  labelPlural: 'Webhooks',
  description: 'A webhook',
  icon: 'IconRobot',
})
@IsSystem()
export class WebhookRecord {
  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Target Url',
    description: 'Webhook target url',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  targetUrl: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Operation',
    description: 'Webhook operation',
    icon: 'IconCheckbox',
    defaultValue: { value: '' },
  })
  operation: string;
}
