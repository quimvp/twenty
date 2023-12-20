import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';

import { AppPath } from '@/types/AppPath';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '~/testing/decorators/PageDecorator';
import { graphqlMocks } from '~/testing/graphqlMocks';

import { CreateProfile } from '../CreateProfile';

// Adds messages only in a dev environment
loadDevMessages();
loadErrorMessages();

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Auth/CreateProfile',
  component: CreateProfile,
  decorators: [PageDecorator],
  args: { routePath: AppPath.CreateProfile },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof CreateProfile>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByText('Create profile');
  },
};
