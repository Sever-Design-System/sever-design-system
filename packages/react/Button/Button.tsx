import { FC } from 'react';

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
const Button: FC<ButtonProps> = ({
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};






export default Button;
