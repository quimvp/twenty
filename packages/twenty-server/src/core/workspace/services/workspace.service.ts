import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';

import assert from 'assert';

import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';
import { Repository } from 'typeorm';

import { WorkspaceManagerService } from 'src/workspace/workspace-manager/workspace-manager.service';
import { Workspace } from 'src/core/workspace/workspace.entity';
import { User } from 'src/core/user/user.entity';
import { UserService } from 'src/core/user/services/user.service';
import { CreateWorkspaceSchemaInput } from 'src/core/workspace/dtos/create-workspace-schema-input';

export class WorkspaceService extends TypeOrmQueryService<Workspace> {
  constructor(
    @InjectRepository(Workspace, 'core')
    private readonly workspaceRepository: Repository<Workspace>,
    private readonly workspaceManagerService: WorkspaceManagerService,
    private readonly userService: UserService,
  ) {
    super(workspaceRepository);
  }

  async createWorkspaceSchema(user: User, data: CreateWorkspaceSchemaInput) {
    if (!data.displayName || !data.displayName.length) {
      throw new BadRequestException("'displayName' not provided");
    }
    await this.workspaceRepository.update(user.defaultWorkspace.id, {
      displayName: data.displayName,
    });
    await this.workspaceManagerService.init(user.defaultWorkspace.id);
    await this.userService.createWorkspaceMember(user);

    return user.defaultWorkspace;
  }

  async deleteWorkspace(id: string) {
    const workspace = await this.workspaceRepository.findOneBy({ id });

    assert(workspace, 'Workspace not found');

    await this.workspaceManagerService.delete(id);
    await this.workspaceRepository.delete(id);

    return workspace;
  }
}
