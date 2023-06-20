import { FunctionComponent } from 'react';
import { IAreaProps } from './types';
import Handles from './Handles';

export const Area: FunctionComponent<IAreaProps> = ({
    area,
    onCropStart,
    showHandles,
    globalAreaStyle,
    customAreaRenderer,
    areaNumber,
    removeArea
}) => {
    const localStyle = {
        top: `${area.y}${area.unit}`,
        left: `${area.x}${area.unit}`,
        width: `${area.width}${area.unit}`,
        height: `${area.height}${area.unit}`
    };
    return (
        <div
            style={{
                position: 'absolute',
                border: '1px dashed rgba(0,0,0,0.5)',
                outline: '1px dashed rgba(255,255,255,0.5)',
                cursor: 'move',
                boxSizing: 'border-box',
                touchAction: 'none',
                ...localStyle,
                ...globalAreaStyle,
                ...area.areaStyle
            }}
            onPointerDown={onCropStart}
            data-wrapper="wrapper"
        >
            {customAreaRenderer
                ? customAreaRenderer({ ...area, areaNumber, removeArea })
                : null}
            {showHandles ? <Handles /> : null}
        </div>
    );
};
