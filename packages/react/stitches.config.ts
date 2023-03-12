import { createStitches } from '@stitches/react';
import { colors } from '../../tokens/colors';
import { typography } from '../../tokens/typography';
import { spacing } from '../../tokens/spacing';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary100: colors.indigo[50],
      primary200: colors.indigo[500],
      primary300: colors.indigo[600],
      primary400: colors.indigo[700],

      success100: colors.green[50],
      success200: colors.green[500],
      success300: colors.green[600],
      success400: colors.green[700],

      info100: colors.cyan[50],
      info200: colors.cyan[500],
      info300: colors.cyan[600],
      info400: colors.cyan[700],

      warning100: colors.orange[50],
      warning200: colors.orange[500],
      warning300: colors.orange[600],
      warning400: colors.orange[700],

      danger100: colors.red[50],
      danger200: colors.red[500],
      danger300: colors.red[600],
      danger400: colors.red[700],

      neutral25: colors.white,
      neutral50: colors.greyBlue[50],
      neutral100: colors.greyBlue[100],
      neutral200: colors.greyBlue[200],
      neutral300: colors.greyBlue[500],
      neutral400: colors.greyBlue[700],

      neutralA25: '#ffffff1a',
      neutralA50: '#6869a80d',
      neutralA100: '#51518c1a',
      neutralA200: '#7a71864d',
      neutralA300: '#29203c9c',
      neutralA400: '#0b0719cc'
    },
    space: {
      ...spacing,
    },
    fontSizes: {
      hero: typography.size[56],
      h1: typography.size[40],
      h2: typography.size[32],
      h3: typography.size[24],
      h4: typography.size[20],
      h5: typography.size[18],
      h6: typography.size[16],
      large: typography.size[18],
      medium: typography.size[16],
      small: typography.size[14],
      subLabel: typography.size[12],
      support: typography.size[12],
      monospace: typography.size[14],
    },
    fonts: {
      base: typography.family.base,
      heading: typography.family.heading,
      monospace: typography.family.monospace,
    },
    fontWeights: {
      regular: typography.fontWeight.regular,
      medium: typography.fontWeight.medium,
      bold: typography.fontWeight.bold,
    },
    lineHeights: {
      hero: typography.lineHeight[72],
      h1: typography.lineHeight[48],
      h2: typography.lineHeight[40],
      h3: typography.lineHeight[32],
      h4: typography.lineHeight[24],
      h5: typography.lineHeight[24],
      h6: typography.lineHeight[24],

      large: typography.lineHeight[24],
      medium: typography.lineHeight[24],
      small: typography.lineHeight[20],
      subLabel: typography.lineHeight[16],
      support: typography.lineHeight[16],
      monospace: typography.lineHeight[20],
    },
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
