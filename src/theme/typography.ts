import * as BP from '~/breakpoints';
import { colors } from './colors';

export const textVariants = {
  body: {
    color: colors.text,
    fontSize: '1.063rem',
    letterSpacing: '0.006875rem',
    lineHeight: '1.75rem',

    [BP.atMinMd]: {
      lineHeight: 0,
    },
  },
  h1: {
    color: colors.text,
    fontSize: '100px',
    fontVariationSettings: '"wght" 900',
    fontWeight: 'bold',
    letterSpacing: '0px',
    lineHeight: 1.04,
    margin: 0,
    padding: 0,
  },
  h2: {
    color: colors.action,
    fontSize: '50px',
    fontVariationSettings: '"wght" 700',
    fontWeight: 'bold',
    letterSpacing: 'normal',
    lineHeight: 1.2,
    margin: 0,
    padding: 0,
  },
  h3: {
    color: colors.text,
    fontSize: '30px',
    fontVariationSettings: '"wght" 400',
    fontWeight: 'normal',
    letterSpacing: 'normal',
    lineHeight: 1.33,
    margin: 0,
    padding: 0,
  },
  hero: {
    color: colors.text,
    fontSize: '240px',
    fontVariationSettings: '"wght" 900',
    fontWeight: 'bold',
    letterSpacing: 'normal',
    lineHeight: 0.58,
    margin: 0,
    padding: 0,
  },
};

export type ThemeTextVariants = keyof typeof textVariants;
