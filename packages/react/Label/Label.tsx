import { FC, LabelHTMLAttributes, ReactNode } from 'react';
import { styled } from '../stitches.config';

export interface ILabelProps extends LabelHTMLAttributes<ILabelProps> {
  required?: boolean;
  icon?: ReactNode;
  text: string;
  disabled?: boolean;
}

const StyledLabel = styled('label', {
  varinants: {
    required: {
      true: {},
    },
    disabled: {
      true: {},
    },
  },
});

export const Label: FC<ILabelProps> = () => {
  return <StyledLabel />;
};
