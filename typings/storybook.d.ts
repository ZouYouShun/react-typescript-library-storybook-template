import '@storybook/addons';
import { RcPaletteKeys } from '../src/foundation/styles/theme/palette.type';

type TagProps = {
  name: 'Mui' | 'Spec' | 'Accessibility';
  value?: string;
  color?: RcPaletteKeys;
  href?: string;
};

declare module '@storybook/addons' {
  // you can extend storybook type here
  interface Parameters {
    tags?: TagProps[];
  }
}
