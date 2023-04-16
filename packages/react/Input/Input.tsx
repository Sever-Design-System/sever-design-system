import { FC } from 'react';
import { styled } from '../stitches.config';

export interface IInputProps {
  size: 'small' | 'medium';
}

const StyledInput = styled('input', {});

export const Input: FC<IInputProps> = () => {
  return <StyledInput />;
};
