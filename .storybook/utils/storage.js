import { getTheme } from './customThemes';

const THEME_KEY = 'storybook-themeId';

const getUserSystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }

  return 'light';
};

export function getThemeType() {
  const theme = getTheme(
    localStorage.getItem(THEME_KEY) || getUserSystemTheme(),
  );

  if (theme) {
    return [theme.base, theme];
  }
  return ['light', {}];
}

export function setThemeValue(type) {
  localStorage.setItem(THEME_KEY, type);
}
