import { IPropUnit } from './components/AreaSelector/types';
import { IPixelArea, IPercentArea, IArea, Ords } from './types';
export declare const defaultArea: IPixelArea;
export declare function clamp(num: number, min: number, max: number): number;
export declare function areAreasEqual(areaA: Partial<IArea>, areaB: Partial<IArea>): boolean;
export declare const formatArea: (area: Partial<IArea>, containerWidth: number, containerHeight: number, unit: IPropUnit) => IArea;
export declare const convertToPercentArea: (area: Partial<IArea>, containerWidth: number, containerHeight: number) => IPercentArea;
export declare function convertToPixelArea(area: Partial<IArea>, containerWidth: number, containerHeight: number): IPixelArea;
export declare function containArea(pixelArea: IPixelArea, ord: Ords, containerWidth: number, containerHeight: number, minWidth?: number, minHeight?: number, maxWidth?: number, maxHeight?: number): {
    unit: "px";
    isNew?: boolean;
    isChanging?: boolean;
    areaStyle?: import('./types').CustomStyles;
    x: number;
    y: number;
    width: number;
    height: number;
};
//# sourceMappingURL=utils.d.ts.map