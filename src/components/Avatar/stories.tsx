import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Avatar from './index';

export default {
  title: 'Avatar',
  component: Avatar
} as Meta;

export const Default: Story = () => <Avatar />;
