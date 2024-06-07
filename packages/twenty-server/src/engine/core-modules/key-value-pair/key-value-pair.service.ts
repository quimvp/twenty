import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';

import { Repository } from 'typeorm';

import { KeyValuePair } from 'src/engine/core-modules/key-value-pair/key-value-pair.entity';
import { UserStates } from 'src/engine/core-modules/user-state/enums/user-states.enum';
import { UserStateOnboardingStepValues } from 'src/engine/core-modules/user-state/enums/values/user-state-onboarding-step-values.enum';

export enum KeyValueTypes {
  USER_STATE = 'USER_STATE',
}

type KeyValuePairs = {
  [KeyValueTypes.USER_STATE]: {
    [UserStates.ONBOARDING_STEP]: UserStateOnboardingStepValues;
  };
};

type KeyValueType<
  TYPE extends keyof KeyValuePairs,
  K extends keyof KeyValuePairs[TYPE],
> = KeyValuePairs[TYPE][K];
export class KeyValuePairService<TYPE extends keyof KeyValuePairs> {
  constructor(
    @InjectRepository(KeyValuePair, 'core')
    private readonly keyValuePairRepository: Repository<KeyValuePair>,
  ) {}

  async get<K extends keyof KeyValuePairs[TYPE]>({
    userId,
    workspaceId,
    key,
  }: {
    userId?: string;
    workspaceId?: string;
    key: K;
  }): Promise<KeyValueType<TYPE, K> | undefined> {
    return (
      await this.keyValuePairRepository.findOne({
        where: {
          userId,
          workspaceId,
          key: key as string,
        },
      })
    )?.value as KeyValueType<TYPE, K> | undefined;
  }

  async set<K extends keyof KeyValuePairs[TYPE]>({
    userId,
    workspaceId,
    key,
    value,
  }: {
    userId?: string;
    workspaceId?: string;
    key: K;
    value: KeyValuePairs[TYPE][K];
  }) {
    if (!userId && !workspaceId) {
      throw new BadRequestException('userId and workspaceId are undefined');
    }
    const upsertData = {
      userId,
      workspaceId,
      key: key as string,
      value: value as string,
    };

    const conflictPaths = Object.keys(upsertData).filter(
      (key) => key !== 'value' && upsertData[key] !== undefined,
    );

    const indexPredicate = !userId
      ? '"userId" is NULL'
      : !workspaceId
        ? '"workspaceId" is NULL'
        : undefined;

    await this.keyValuePairRepository.upsert(upsertData, {
      conflictPaths,
      indexPredicate,
    });
  }

  async delete<K extends keyof KeyValuePairs[TYPE]>({
    userId,
    workspaceId,
    key,
  }: {
    userId?: string;
    workspaceId?: string;
    key: K;
  }) {
    if (!userId && !workspaceId) {
      throw new BadRequestException('userId and workspaceId are undefined');
    }

    await this.keyValuePairRepository.delete({
      userId,
      workspaceId,
      key: key as string,
    });
  }
}
