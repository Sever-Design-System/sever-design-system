import { FC, HTMLProps, ReactNode } from 'react';
import type * as Stitches from '@stitches/react';
import { css } from '../stitches.config';

type display = 'block' | 'flex';
type justifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between '
  | 'space-around'
  | 'space-evenly';

type alignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
type flexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type flexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type BackgroundColor = Stitches.PropertyValue<'backgroundColor'>;

export interface IBoxProps extends HTMLProps<HTMLDivElement> {
  display: display;
  backgroundColor: BackgroundColor;
  width: string | number | undefined;
  height: string | number | undefined;
  justifyContent: justifyContent;
  alignItems: alignItems;
  flexDirection: flexDirection;
  flexWrap: flexWrap;
  children: ReactNode | Array<ReactNode> | string | null;
}

const Div = css('div', {});

export const Box: FC<IBoxProps> = ({
  children,
  display = 'block',
  backgroundColor,
  width,
  height,
  justifyContent,
  alignItems,
  flexDirection,
  flexWrap,
  ...divAttributes
}) => {
  return (
    <div
      className={Div({
        css: {
          display: display,
          // @ts-ignore
          backgroundColor: backgroundColor,
          width,
          height,
          justifyContent,
          alignItems,
          flexDirection,
          flexWrap,
        },
      })}
      {...divAttributes}
    >
      {children}
    </div>
  );
};
