import { styled } from '../stitches.config';

export const IconWrapper = styled('span', {
  display: 'inline-flex',
  alignSelf: 'center',

  variants: {
    left: {
      true: {
        marginInlineEnd: '$xs',
      },
    },
    right: {
      true: {
        marginInlineStart: '$xs',
      },
    },
  },
});
