import { CSSProperties } from 'react';

export const HANDLE_SIZE = 10;
export const HANDLE_STYLES: CSSProperties = {
    position: 'absolute',
    outline: '1px solid rgba(0,0,0,0.5)',
    border: '1px solid rgba(255,255,255,0.5)',
    width: HANDLE_SIZE,
    height: HANDLE_SIZE
};
