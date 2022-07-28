import { PointerEvent } from 'react';
import { CustomAreaRenderer, CustomStyles, IArea } from '../../types';
export interface IAreaProps {
    area: IArea;
    globalAreaStyle?: CustomStyles;
    onCropStart: (event: PointerEvent<HTMLDivElement>) => void;
    showHandles: boolean;
    customAreaRenderer?: CustomAreaRenderer;
    areaNumber: number;
}
//# sourceMappingURL=types.d.ts.map