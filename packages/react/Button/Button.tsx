import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { styled } from '../stitches.config';
import { IconWrapper } from './IcconWrapper';
import { Spinner, spinnerSize } from '../Spinner';

type size = 'small' | 'medium' | 'large' | 'extraLarge';
type appearance = 'primary' | 'secondary' | 'tertiary';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: size;
  appearance: appearance;
  disabled?: boolean;
  isLoading?: boolean;
  label: string;
  IconLeft?: ReactNode;
  IconRight?: ReactNode;
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

        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '$primary300',
        },
        '&:active': {
          backgroundColor: '$primary400',
        },
        '&:focus': {
          boxShadow: '0px 0px 0px 2px rgba(192, 206, 255, 0.6)',
        },
      },
      secondary: {
        backgroundColor: '$neutralA25',
        color: '$neutral500',
        border: '1px solid $neutral200',

        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '$neutralA50',
          color: '$primary300',
        },
        '&:active': {
          backgroundColor: '$neutralA100',
          color: '$primary400',
        },
        '&:focus': {
          boxShadow: '0px 0px 0px 2px rgba(192, 206, 255, 0.6)',
        },
      },
      tertiary: {
        backgroundColor: '$neutralA25',
        color: '$neutral500',

        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '$neutralA50',
          color: '$primary300',
        },
        '&:active': {
          backgroundColor: '$neutralA100',
          color: '$primary400',
        },
        '&:focus': {
          boxShadow: '0px 0px 0px 2px rgba(192, 206, 255, 0.6)',
        },
      },
    },
    disabled: {
      true: {
        backgroundColor: '$neutral100',
        color: '$neutral300',
        cursor: 'not-allowed',

        '&:hover': {
          backgroundColor: '$neutral100',
          color: '$neutral300',
          cursor: 'not-allowed',
        },
      },
    },
  },
});

export const Button: FC<IButtonProps> = ({
  label = '',
  IconLeft = undefined,
  IconRight = undefined,
  isLoading = false,
  ...props
}) => {
  let isSpinnerInverted = false;
  if (props.appearance === 'primary') {
    isSpinnerInverted = true;
  }
  let spinnerSize: spinnerSize = 'small';
  if (props.size === 'large' || props.size === 'extraLarge') {
    spinnerSize = 'medium';
  }

  return (
    <StyledButton {...props}>
      {isLoading ? (
        <Spinner inverted={isSpinnerInverted} size={spinnerSize} />
      ) : (
        <>
          {IconLeft && <IconWrapper left>{IconLeft}</IconWrapper>}
          {label}
          {IconRight && <IconWrapper right>{IconRight}</IconWrapper>}
        </>
      )}
    </StyledButton>
  );
};
