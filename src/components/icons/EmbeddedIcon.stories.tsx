import { Meta, Story } from '@storybook/react';
import React from 'react';

import { EmbeddedIcon } from '..';
import { SvgProps } from './types';

export default {
  component: EmbeddedIcon,
  title: 'Icons/Embedded',
} as Meta;

export const Embedded: Story<SvgProps> = (args) => {
  return <EmbeddedIcon {...args} />;
};

Embedded.storyName = 'Embedded';