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
  borderRadius: '$s',
  border: '1px solid $neutral200',
  padding: '$xs4 $xs2',
  height: '$xl2',
  color: '$neutral500',

  '&::placeholder': {
    color: '$neutral400',
  },

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
  return <StyledInput placeholder="Super Input" />;
};
