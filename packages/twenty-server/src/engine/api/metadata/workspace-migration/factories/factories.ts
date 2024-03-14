import { BasicColumnActionFactory } from 'src/engine/api/metadata/workspace-migration/factories/basic-column-action.factory';
import { EnumColumnActionFactory } from 'src/engine/api/metadata/workspace-migration/factories/enum-column-action.factory';

export const workspaceColumnActionFactories = [
  BasicColumnActionFactory,
  EnumColumnActionFactory,
];
