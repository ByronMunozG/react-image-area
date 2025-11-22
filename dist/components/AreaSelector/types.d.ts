import { ReactNode, CSSProperties } from 'react';
import { CustomAreaRenderer, CustomStyles, IArea, Ords } from '../../types';
export interface IDefaultAreaSelectorProps {
    maxAreas: number;
    unit: IPropUnit;
    minWidth: number;
    minHeight: number;
    debug: boolean;
}
export interface IAreaSelectorProps extends Partial<IDefaultAreaSelectorProps> {
    children?: ReactNode;
    areas: IArea[];
    onChange: (areas: IArea[]) => void;
    maxWidth?: number;
    maxHeight?: number;
    wrapperStyle?: Omit<CSSProperties, 'touchAction' | 'boxSizing'>;
    globalAreaStyle?: CustomStyles;
    customAreaRenderer?: CustomAreaRenderer;
    mediaWrapperClassName?: string;
}
export interface IEventData {
    startClientX: number;
    startClientY: number;
    startAreaX: number;
    startAreaY: number;
    clientX: number;
    clientY: number;
    isResize: boolean;
    ord?: Ords;
}
export interface IAreaStatus {
    areaChangeIndex: number;
    isChanging: boolean;
}
export type IPropUnit = 'pixel' | 'percentage';
//# sourceMappingURL=types.d.ts.map