import { FunctionComponent, CSSProperties, Fragment } from 'react';
import { IAreaProps } from './types';

const HANDLE_SIZE = 10;
const HANDLE_STYLES: CSSProperties = {
    position: 'absolute',
    outline: '1px solid rgba(0,0,0,0.5)',
    border: '1px solid rgba(255,255,255,0.5)',
    width: HANDLE_SIZE,
    height: HANDLE_SIZE
};

export const Area: FunctionComponent<IAreaProps> = ({
    area,
    onCropStart,
    showHandles,
    globalAreaStyle,
    customAreaRenderer
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
            {customAreaRenderer ? customAreaRenderer(area) : null}
            {showHandles ? (
                <Fragment>
                    <div
                        data-dir="s"
                        data-ord="s"
                        style={{
                            ...HANDLE_STYLES,
                            bottom: 0,
                            left: '50%',
                            marginBottom: (-1 * HANDLE_SIZE) / 2,
                            marginLeft: (-1 * HANDLE_SIZE) / 2,
                            cursor: 's-resize'
                        }}
                    />
                    <div
                        data-dir="n"
                        data-ord="n"
                        style={{
                            ...HANDLE_STYLES,
                            top: 0,
                            left: '50%',
                            marginTop: (-1 * HANDLE_SIZE) / 2,
                            marginLeft: (-1 * HANDLE_SIZE) / 2,
                            cursor: 'n-resize'
                        }}
                    />
                    <div
                        data-dir="w"
                        data-ord="w"
                        style={{
                            ...HANDLE_STYLES,
                            top: '50%',
                            left: 0,
                            marginTop: (-1 * HANDLE_SIZE) / 2,
                            marginLeft: (-1 * HANDLE_SIZE) / 2,
                            cursor: 'w-resize'
                        }}
                    />
                    <div
                        data-dir="e"
                        data-ord="e"
                        style={{
                            ...HANDLE_STYLES,
                            top: '50%',
                            right: 0,
                            marginTop: (-1 * HANDLE_SIZE) / 2,
                            marginRight: (-1 * HANDLE_SIZE) / 2,
                            cursor: 'e-resize'
                        }}
                    />
                    <div
                        data-dir="se"
                        data-ord="se"
                        style={{
                            ...HANDLE_STYLES,
                            bottom: 0,
                            right: 0,
                            marginBottom: (-1 * HANDLE_SIZE) / 2,
                            marginRight: (-1 * HANDLE_SIZE) / 2,
                            cursor: 'se-resize'
                        }}
                    />

                    <div
                        data-dir="sw"
                        data-ord="sw"
                        style={{
                            ...HANDLE_STYLES,
                            bottom: 0,
                            left: 0,
                            marginBottom: (-1 * HANDLE_SIZE) / 2,
                            marginLeft: (-1 * HANDLE_SIZE) / 2,
                            cursor: 'sw-resize'
                        }}
                    />
                    <div
                        data-dir="nw"
                        data-ord="nw"
                        style={{
                            ...HANDLE_STYLES,
                            top: 0,
                            left: 0,
                            marginTop: (-1 * HANDLE_SIZE) / 2,
                            marginLeft: (-1 * HANDLE_SIZE) / 2,
                            cursor: 'nw-resize'
                        }}
                    />
                    <div
                        data-dir="ne"
                        data-ord="ne"
                        style={{
                            ...HANDLE_STYLES,
                            top: 0,
                            right: 0,
                            marginTop: (-1 * HANDLE_SIZE) / 2,
                            marginRight: (-1 * HANDLE_SIZE) / 2,
                            cursor: 'ne-resize'
                        }}
                    />
                </Fragment>
            ) : null}
        </div>
    );
};
