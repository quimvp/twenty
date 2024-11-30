import { Field, ObjectType } from '@nestjs/graphql';

import { IDField } from '@ptc-org/nestjs-query-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

import { UUIDScalarType } from 'src/engine/api/graphql/workspace-schema-builder/graphql-types/scalars';
import { BillingEntitlement } from 'src/engine/core-modules/billing/entities/billing-entitlement.entity';
import { BillingSubscription } from 'src/engine/core-modules/billing/entities/billing-subscription.entity';
import { Workspace } from 'src/engine/core-modules/workspace/workspace.entity';

@Entity({ name: 'billingCustomer', schema: 'core' })
@ObjectType('billingCustomer')
@Unique('IndexOnWorkspaceIdAndStripeCustomerIdUnique', [
  'workspaceId',
  'stripeCustomerId',
])
export class BillingCustomer {
  @IDField(() => UUIDScalarType)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, type: 'timestamptz' })
  deletedAt?: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @JoinColumn()
  workspace: Relation<Workspace>;

  @Column({ nullable: false, unique: true })
  stripeCustomerId: string;

  @Field()
  @Column({ nullable: false, type: 'uuid' })
  workspaceId: string;

  @OneToMany(
    () => BillingSubscription,
    (billingSubscription) => billingSubscription.billingCustomer,
  )
  billingSubscriptions: Relation<BillingSubscription[]>;

  @OneToMany(
    () => BillingEntitlement,
    (billingEntitlement) => billingEntitlement.billingCustomer,
  )
  billingEntitlements: Relation<BillingEntitlement[]>;
}
