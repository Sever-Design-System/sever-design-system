import { createStitches } from '@stitches/react';
import { colors } from '../../tokens/colors';
import { typography } from '../../tokens/typography'


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
      danger400: colors.red[700]
    },
    space: {},
    fontSizes: {
      hero: typography.size[56],
      h1: typography.size[40],
      h2: typography.size[32],
      h3: typography.size[24],
      h4: typography.size[20],
      h5: typography.size[18],
      h6: typography.size[16],
    },
    fonts: {},
    fontWeights: {},
    lineHeights: {},
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
