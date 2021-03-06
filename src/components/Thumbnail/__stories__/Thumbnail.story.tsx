import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import { notShowInDocTable } from '../../../storybook';
import { RcThumbnail } from '../Thumbnail';

export default {
  title: 'Components/Thumbnail',
  component: RcThumbnail,
} as Meta;

type ThumbnailProps = ComponentProps<typeof RcThumbnail>;

export const Thumbnail: Story<ThumbnailProps> = ({ children, ...args }) => {
  return <RcThumbnail {...args}>{children}</RcThumbnail>;
};

Thumbnail.args = {
  children: 'Text',
  color: 'blue',
  background: 'yellow',
};

Thumbnail.argTypes = {
  ...notShowInDocTable<keyof ThumbnailProps>([]),
};
