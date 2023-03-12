import {FC, ReactNode} from 'react';

type size = 'small' | 'medium'| 'large' | 'extraLarge';
type type = 'primary' | 'secondary' | 'tertiary';
export interface ButtonProps{
  size: size;
  type: type;
  disabled?: boolean;
  isLoading?: boolean;
  label: string;
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

/**
 * Primary UI component for user interaction
 */
const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};

export default Button;
