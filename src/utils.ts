import { IPropUnit } from './components/AreaSelector/types';
import { IPixelArea, IPercentArea, IArea, Ords } from './types';

export const defaultArea: IPixelArea = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    unit: 'px'
};

export function clamp(num: number, min: number, max: number) {
    return Math.min(Math.max(num, min), max);
}

export function areAreasEqual(areaA: Partial<IArea>, areaB: Partial<IArea>) {
    return (
        areaA.width === areaB.width &&
        areaA.height === areaB.height &&
        areaA.x === areaB.x &&
        areaA.y === areaB.y &&
        areaA.unit === areaB.unit
    );
}

export const formatArea = (
    area: Partial<IArea>,
    containerWidth: number,
    containerHeight: number,
    unit: IPropUnit
): IArea => {
    if (unit === 'pixel') {
        return convertToPixelArea(area, containerWidth, containerHeight);
    } else {
        return convertToPercentArea(area, containerWidth, containerHeight);
    }
};

export const convertToPercentArea = (
    area: Partial<IArea>,
    containerWidth: number,
    containerHeight: number
): IPercentArea => {
    if (area.unit === '%') {
        return { ...defaultArea, ...area, unit: '%' };
    }

    return {
        unit: '%',
        x: area.x ? (area.x / containerWidth) * 100 : 0,
        y: area.y ? (area.y / containerHeight) * 100 : 0,
        width: area.width ? (area.width / containerWidth) * 100 : 0,
        height: area.height ? (area.height / containerHeight) * 100 : 0
    };
};

export function convertToPixelArea(
    area: Partial<IArea>,
    containerWidth: number,
    containerHeight: number
): IPixelArea {
    if (!area.unit) {
        return { ...defaultArea, ...area, unit: 'px' };
    }

    if (area.unit === 'px') {
        return { ...defaultArea, ...area, unit: 'px' };
    }

    return {
        unit: 'px',
        x: area.x ? (area.x * containerWidth) / 100 : 0,
        y: area.y ? (area.y * containerHeight) / 100 : 0,
        width: area.width ? (area.width * containerWidth) / 100 : 0,
        height: area.height ? (area.height * containerHeight) / 100 : 0
    };
}

export function containArea(
    pixelArea: IPixelArea,
    ord: Ords,
    containerWidth: number,
    containerHeight: number,
    minWidth = 0,
    minHeight = 0,
    maxWidth = containerWidth,
    maxHeight = containerHeight
) {
    const containedArea = { ...pixelArea };

    // Stop underflow on top.
    if (containedArea.y < 0) {
        containedArea.height = Math.max(
            containedArea.height + containedArea.y,
            minHeight
        );
        containedArea.y = 0;
    }

    // Stop underflow on left.
    if (containedArea.x < 0) {
        containedArea.width = Math.max(
            containedArea.width + containedArea.x,
            minWidth
        );
        containedArea.x = 0;
    }

    // Stop overflow on right.
    const xOverflow = containerWidth - (containedArea.x + containedArea.width);
    if (xOverflow < 0) {
        containedArea.x = Math.min(containedArea.x, containerWidth - minWidth);
        containedArea.width += xOverflow;
    }

    // Stop overflow on bottom.
    const yOverflow =
        containerHeight - (containedArea.y + containedArea.height);
    if (yOverflow < 0) {
        containedArea.y = Math.min(
            containedArea.y,
            containerHeight - minHeight
        );
        containedArea.height += yOverflow;
    }

    // Make area respect min width generally.
    if (containedArea.width < minWidth) {
        if (ord === 'sw' || ord == 'nw') {
            // Stops box moving when min is hit.
            containedArea.x -= minWidth - containedArea.width;
        }
        containedArea.width = minWidth;
    }

    // Make area respect min height generally.
    if (containedArea.height < minHeight) {
        if (ord === 'nw' || ord == 'ne') {
            // Stops box moving when min is hit.
            containedArea.y -= minHeight - containedArea.height;
        }
        containedArea.height = minHeight;
    }

    // Make area respect max width generally.
    if (containedArea.width > maxWidth) {
        if (ord === 'sw' || ord == 'nw') {
            // Stops box moving when max is hit.
            containedArea.x -= maxWidth - containedArea.width;
        }
        containedArea.width = maxWidth;
    }

    // Make areea respect max height generally.
    if (containedArea.height > maxHeight) {
        if (ord === 'nw' || ord == 'ne') {
            // Stops box moving when min is hit.
            containedArea.y -= maxHeight - containedArea.height;
        }
        containedArea.height = maxHeight;
    }

    return containedArea;
}
