import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '~/testing/decorators/PageDecorator';
import { PrefetchLoadingDecorator } from '~/testing/decorators/PrefetchLoadingDecorator';
import { graphqlMocks, userMetadataLoaderMocks } from '~/testing/graphqlMocks';

import { RecordIndexPage } from '../RecordIndexPage';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/ObjectRecord/RecordIndexPage',
  component: RecordIndexPage,
  args: {
    routePath: '/objects/:objectNamePlural',
    routeParams: {
      ':objectNamePlural': 'companies',
    },
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof RecordIndexPage>;

export const Default: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  decorators: [PageDecorator],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText('People');
    await canvas.findAllByText('Companies');
    await canvas.findByText('Opportunities');
    await canvas.findByText('Listings');
    await canvas.findByText('My Customs');
  },
};

export const PrefetchLoading: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  decorators: [PrefetchLoadingDecorator, PageDecorator],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.queryByText('People')).toBeNull();
    expect(canvas.queryByText('Opportunities')).toBeNull();
    expect(canvas.queryByText('Listings')).toBeNull();
    expect(canvas.queryByText('My Customs')).toBeNull();
  },
};

export const UserMetadataLoading: Story = {
  parameters: userMetadataLoaderMocks,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  decorators: [PageDecorator],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.queryByText('Search')).toBeNull();
    expect(canvas.queryByText('Settings')).toBeNull();
    expect(canvas.queryByText('Tasks')).toBeNull();
    expect(canvas.queryByText('People')).toBeNull();
    expect(canvas.queryByText('Opportunities')).toBeNull();
    expect(canvas.queryByText('Listings')).toBeNull();
    expect(canvas.queryByText('My Customs')).toBeNull();
  },
};
