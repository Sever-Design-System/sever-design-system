import {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import {styled} from '../stitches.config';

type size = 'small' | 'medium'| 'large' | 'extraLarge';
type appearance = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  size: size;
  appearance: appearance;
  disabled?: boolean;
  isLoading?: boolean;
  label: string;
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

/**
 * Primary UI component for user interaction
 */

const StyledButton = styled('button', {
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '$small',
  lineHeight: '$small',
  border: 0,

  variants: {
    size: {
      small: {
        padding: '0 $xs2'
      },
      medium: {
        padding: '$xs2 $s'
      },
      large: {
        padding: '$xs $l',
      },
      extraLarge: {
        padding: '$s $xl',
      }
    }
  }
});

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <StyledButton {...props}>
      {label}
    </StyledButton>
  );
};

export default Button;
