import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';

import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ApiKeyService {
  constructor(private readonly prismaService: PrismaService) {}

  findFirst = this.prismaService.client.apiKey.findFirst;
  findUniqueOrThrow = this.prismaService.client.apiKey.findUniqueOrThrow;
  findMany = this.prismaService.client.apiKey.findMany;
  create = this.prismaService.client.apiKey.create;
  delete = this.prismaService.client.apiKey.delete;

  async createApiKey({
    name,
    workspaceId,
  }: {
    name: string;
    workspaceId: string;
  }) {
    const customApiKey = v4();
    await this.create({
      data: {
        key: customApiKey,
        name,
        workspace: { connect: { id: workspaceId } },
      },
    });
    return this.findUniqueOrThrow({
      where: { key: customApiKey },
    });
  }
}
