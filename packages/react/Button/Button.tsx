import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { styled } from '../stitches.config';

type size = 'small' | 'medium' | 'large' | 'extraLarge';
type appearance = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: size;
  appearance: appearance;
  disabled?: boolean;
  isLoading?: boolean;
  label: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */

const StyledButton = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  border: 0,
  padding: 0,
  whiteSpace: 'nowrap',
  fontSize: '$small',
  fontWeight: '$medium',
  lineHeight: '$small',
  cursor: 'pointer',

  variants: {
    size: {
      small: {
        paddingInline: '$xs2',
        height: '$l',
      },
      medium: {
        paddingInline: '$s',
        height: '$xl2',
      },
      large: {
        paddingInline: '$l',
        height: '$xl3',
      },
      extraLarge: {
        paddingInline: '$xl',
        height: '$xl4',
      },
    },
    appearance: {
      primary: {
        backgroundColor: '$primary200',
        color: '$neutral25',
      },
      secondary: {
        backgroundColor: '$neutralA25',
        color: '$neutral500',
        border: '1px solid $neutral200',
      },
      tertiary: {
        backgroundColor: '$neutralA25',
        color: '$neutral500',
      },
    },
  },
});

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return <StyledButton {...props}>{label}</StyledButton>;
};

export default Button;
