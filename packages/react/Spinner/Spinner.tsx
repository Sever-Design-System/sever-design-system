import { keyframes, styled } from '../stitches.config';
import { FC } from 'react';

export interface ISpinnerProps {
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
}

const rotation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const StyledSpinner = styled('div', {
  borderRadius: '50%',
  display: 'inline-block',
  boxSizing: 'border-box',
  animation: `${rotation} 1s linear infinite`,
  borderStyle: 'solid',

  variants: {
    size: {
      small: {
        borderWidth: '2px',
        width: '12px',
        height: '12px',
      },
      medium: {
        borderWidth: '4px',
        width: '32px',
        height: '32px',
      },
      large: {
        borderWidth: '4px',
        width: '56px',
        height: '56px',
      },
    },
    inverted: {
      true: {
        borderColor: '$neutral25',
        borderBottomColor: 'transparent',
      },
      false: {
        borderColor: '$neutral500',
        borderBottomColor: 'transparent',
      },
    },
  },
});

export const Spinner: FC<ISpinnerProps> = ({
  size = 'medium',
  inverted = false,
}) => {
  return <StyledSpinner size={size} inverted={inverted} />;
};
