import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { UISwitch } from '../Switch';

export default {
  title: 'Components/Switch',
  component: UISwitch,
  argTypes: {
    ...sortInDocTable<keyof SwitchProps>([]),
    ...notControlInDocTable<keyof SwitchProps>([]),
    ...notShowInDocTable<keyof SwitchProps>([]),
  },
} as Meta;

type SwitchProps = ComponentProps<typeof UISwitch>;

export const Switch: Story<SwitchProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return <UISwitch {...args}>{children}</UISwitch>;
};

Switch.args = {
  children: 'Title',
};

Switch.argTypes = {
  ...notControlInDocTable<keyof SwitchProps>([]),
};

Switch.parameters = {
  tags: [
    {
      name: 'Spec',
      href: '',
    },
    {
      name: 'Mui',
      href: '',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
