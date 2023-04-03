import { FC, HTMLProps, ReactNode } from 'react';
import { css } from '../stitches.config';

type display = 'block' | 'flex';

export interface IBoxProps extends HTMLProps<HTMLDivElement> {
  display: display;
  backgroundColor: string | undefined;
  children: ReactNode | Array<ReactNode> | string | undefined;
}

const Div = css('div', {});

export const Box: FC<IBoxProps> = ({
  children,
  display = 'block',
  backgroundColor,
  ...divAttributes
}) => {
  return (
    <div
      className={Div({
        css: {
          display: display,
          backgroundColor: backgroundColor,
        },
      })}
      {...divAttributes}
    >
      {children}
    </div>
  );
};
