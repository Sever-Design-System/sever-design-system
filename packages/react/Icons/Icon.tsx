import { FC } from 'react';

export interface Props {
  path: string;
  width?: number;
  height?: number;
}
const DEFAULT_ICON_SIZE = 32;
export const Icon: FC<Props> = ({
  path,
  width = DEFAULT_ICON_SIZE,
  height = DEFAULT_ICON_SIZE,
}) => {
  return (
    <svg viewBox="0 0 32 32" width={width} height={height}>
      <path fill="currentColor" d={path} />
    </svg>
  );
};
