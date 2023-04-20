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
  boxSizing: 'border-box',

  borderRadius: '$s',
  border: '1px solid $neutral200',
  color: '$neutral500',

  '&::placeholder': {
    color: '$neutral400',
  },

  variants: {
    size: {
      small: {
        padding: '$xs4 $xs2',
        height: '$xl',
      },
      medium: {
        padding: '$s $xs2',
        height: '$xl2',
      },
    },
    disabled: {
      true: {
        border: 'none',
        backgroundColor: '$neutral100',
        color: '$neutral300',
        pointerEvents: 'none',
      },
    },
    readonly: {
      true: {
        border: 'none',
        backgroundColor: '$neutral100',
        color: '$neutral400',
      },
    },
  },
});

export const Input: FC<IInputProps> = ({
  size = 'medium',
  readonly = false,
  ...props
}) => {
  return <StyledInput size={size} readonly={readonly} {...props} />;
};
