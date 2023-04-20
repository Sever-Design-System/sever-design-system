import { FC } from 'react';
import { styled } from '../stitches.config';

export interface IInputProps {
  size?: 'small' | 'medium';
  placeholder?: string;
  value: string;
  disabled?: boolean;
  readonly?: boolean;
  valid?: boolean;
  invalid?: boolean;
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
  '&:hover': {
    border: '1px solid $neutral300',
  },
  '&:focus': {
    outline: '1px solid $primary200',
    boxShadow: '0px 0px 0px 4px rgba(192, 206, 255, 0.6)',
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
    valid: {
      true: {
        borderColor: '$success200',
      },
    },
    invalid: {
      true: {
        borderColor: '$danger200',
      },
    },
  },
});

const HelpMessage = styled('span', {
  variants: {
    valid: {
      true: {
        color: '$success200',
      },
    },
    invalid: {
      true: {
        color: '$danger200',
      },
    },
  },
});

export const Input: FC<IInputProps> = ({
  size = 'medium',
  helpMessage,
  valid,
  invalid,
  ...props
}) => {
  console.log(valid);
  return (
    <>
      <StyledInput size={size} valid={valid} invalid={invalid} {...props} />
      {helpMessage && (
        <HelpMessage valid={valid} invalid={invalid}>
          {helpMessage}
        </HelpMessage>
      )}
    </>
  );
};
