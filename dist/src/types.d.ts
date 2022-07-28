import { CSSProperties, ReactNode } from 'react';
export declare type XOrds = 'e' | 'w';
export declare type YOrds = 'n' | 's';
export declare type XYOrds = 'nw' | 'ne' | 'se' | 'sw';
export declare type Ords = XOrds | YOrds | XYOrds;
export declare type CustomStyles = Omit<CSSProperties, 'position' | 'touchAction' | 'top' | 'left' | 'width' | 'height' | 'boxSizing'>;
export declare type CustomAreaRenderer = (areaProps: IAreaRendererProps) => ReactNode;
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