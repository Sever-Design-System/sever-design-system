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

const StyledSpinner = styled('span', {
  variants: {
    size: {
      small: {},
      medium: {
        width: '32px',
        height: '32px',
        border: '4px solid #FFF',
        borderBottomColor: 'transparent',
        borderRadius: '50%',
        display: 'inline-block',
        boxSizing: 'border-box',
        animation: `${rotation} 1s linear infinite`,
      },
      large: {},
    },
    inverted: {
      true: {},
      false: {},
    },
  },
});

export const Spinner: FC<ISpinnerProps> = ({
  size = 'medium',
  inverted = false,
}) => {
  return <StyledSpinner size={size} inverted={inverted} />;
};
