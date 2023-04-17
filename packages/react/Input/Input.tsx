import { FC } from 'react';
import { styled } from '../stitches.config';

export interface IInputProps {
  size?: 'small' | 'medium';
  placeholder?: string;
  value: string;
  disabled?: boolean;
  readonly?: boolean;
  valid?: boolean;
  helpMessage?: string;
  label?: string;
  ghost?: boolean;
}

const StyledInput = styled('input', {
  variants: {
    size: {
      small: {},
      medium: {},
    },
    disabled: {
      true: {},
      false: {},
    },
    readonly: {
      true: {},
      false: {},
    },
  },
});

export const Input: FC<IInputProps> = () => {
  return <StyledInput />;
};
