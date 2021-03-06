import './index.css';

import { addons } from '@storybook/addons';
import { UPDATE_GLOBALS } from '@storybook/core-events';
import { themes } from '@storybook/theming';

import { withThemeProvider } from '../src/storybook/decorators';
import { getThemeType } from './utils';

const [themeType] = getThemeType();

export const globalTypes = {
  themeId: {
    name: 'themeId',
    description: 'Global theme for components',
    defaultValue: themeType,
    toolbar: {
      icon: 'paintbrush',
      items: [
        { title: 'Light', value: 'light' },
        { title: 'Dark', value: 'dark' },
      ],
    },
  },
};

// TODO: this doc will not render when switch theme, check how to resolve this issue
export const parameters = {
  docs: {
    theme: themes[themeType],
  },
  options: {
    storySort: {
      order: ['README', 'CHANGELOG', 'CONTRIBUTION', 'Components'],
    },
  },
  viewMode: 'docs',
};

export const decorators = [withThemeProvider];

const channel = addons.getChannel();

channel.on(UPDATE_GLOBALS, (args) => {
  // console.log(args);
  // console.log('change', window, window.location.href);

  // TODO: that is workaround for coc page can't change parameters after file load
  if ((window, window.location.href.includes('viewMode=docs'))) {
    window.location.reload();
  }
});
