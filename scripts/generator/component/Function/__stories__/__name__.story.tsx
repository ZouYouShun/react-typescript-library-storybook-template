import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { __prefix____name__ } from '../__name__';

export default {
  title: 'Components/__name__',
  component: __prefix____name__,
  argTypes: {
    ...sortInDocTable<keyof __name__Props>([]),
    ...notControlInDocTable<keyof __name__Props>([]),
    ...notShowInDocTable<keyof __name__Props>([]),
  },
} as Meta;

type __name__Props = ComponentProps<typeof __prefix____name__>;

export const __name__: Story<__name__Props> = ({ children, ...args }) => {
  switchToControlKnobs();
  return <__prefix____name__ {...args}>{children}</__prefix____name__>;
};

__name__.args = {
  children: 'Title',
};

__name__.argTypes = {
  ...notControlInDocTable<keyof __name__Props>([]),
};

__name__.parameters = {
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
