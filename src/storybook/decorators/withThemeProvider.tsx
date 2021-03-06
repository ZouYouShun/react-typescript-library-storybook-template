import { StoryContext } from '@storybook/addons';
import { Story as StoryType } from '@storybook/react';
import React from 'react';

// const channel = addons.getChannel();

type CustomStoryContext = StoryContext & {
  globals: StoryContext['globals'] & {
    themeId: string;
  };
};

export function withThemeProvider(
  Story: StoryType,
  context: CustomStoryContext,
) {
  // const { themeId } = context.globals;

  return <Story {...context} />;
}
