import { CSSProperties, ReactNode } from 'react';
export type XOrds = 'e' | 'w';
export type YOrds = 'n' | 's';
export type XYOrds = 'nw' | 'ne' | 'se' | 'sw';
export type Ords = XOrds | YOrds | XYOrds;
export type CustomStyles = Omit<CSSProperties, 'position' | 'touchAction' | 'top' | 'left' | 'width' | 'height' | 'boxSizing'>;
export type CustomAreaRenderer = (areaProps: IAreaRendererProps) => ReactNode;
export interface IRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface IArea extends IRectangle {
    unit: 'px' | '%';
    isNew?: boolean;
    isChanging?: boolean;
    areaStyle?: CustomStyles;
}
export interface IAreaRendererProps extends Omit<IArea, 'customAreaRenderer'> {
    areaNumber: number;
}
export interface IPixelArea extends IArea {
    unit: 'px';
}
export interface IPercentArea extends IArea {
    unit: '%';
}
//# sourceMappingURL=types.d.ts.map