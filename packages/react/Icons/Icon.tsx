import { FC } from 'react';

export interface Props {
  path: string;
}

export const Icon: FC<Props> = ({ path }) => {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20}>
      <path fill="currentColor" d={path} />
    </svg>
  );
};
