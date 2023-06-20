import {
    PointerEvent as ReactPointerEvent,
    FunctionComponent,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import { IArea, IPixelArea, IRectangle, Ords, XYOrds } from 'src/types';
import {
    areAreasEqual,
    clamp,
    containArea,
    convertToPixelArea,
    formatArea
} from 'src/utils';
import { Area } from '../Area/Area';
import Debugger from './Debugger';
import { IAreaSelectorProps, IAreaStatus, IEventData } from './types';
import { isSubElement } from './utils';

const DOC_MOVE_OPTS = { capture: true, passive: false };

const xOrds = ['e', 'w'];
const yOrds = ['n', 's'];
const xyOrds = ['nw', 'ne', 'se', 'sw'];

export const AreaSelector: FunctionComponent<IAreaSelectorProps> = ({
    maxAreas = Infinity,
    unit = 'pixel',
    minWidth = 0,
    minHeight = 0,
    debug = false,
    children,
    areas,
    onChange,
    maxWidth,
    maxHeight,
    wrapperStyle,
    globalAreaStyle,
    customAreaRenderer,
    mediaWrapperClassName
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null!);
    const mediaRef = useRef<HTMLDivElement>(null!);
    const [areaCounter, setAreaCounter] = useState(0);
    const [eventData, setEventData] = useState<IEventData>({
        startClientX: 0,
        startClientY: 0,
        startAreaX: 0,
        startAreaY: 0,
        clientX: 0,
        clientY: 0,
        isResize: false
    });
    const [areaStatus, setAreaStatus] = useState<IAreaStatus>({
        areaChangeIndex: 0,
        isChanging: false
    });

    const getBox = (): IRectangle => {
        const element = mediaRef.current;

        if (!element) {
            return { x: 0, y: 0, width: 0, height: 0 };
        }
        const { x, y, width, height } = element.getBoundingClientRect();
        return { x, y, width, height };
    };

    const getPointRegion = useCallback(
        (box: IRectangle): XYOrds => {
            const relativeX = eventData.clientX - box.x;
            const relativeY = eventData.clientY - box.y;
            const topHalf = relativeY < eventData.startAreaY;
            const leftHalf = relativeX < eventData.startAreaX;
            if (leftHalf) {
                return topHalf ? 'nw' : 'sw';
            } else {
                return topHalf ? 'ne' : 'se';
            }
        },
        [eventData]
    );

    const makePixelArea = useCallback((area: IArea) => {
        const box = getBox();
        return convertToPixelArea(area, box.width, box.height);
    }, []);

    const onPointerDownHandler = (event: ReactPointerEvent<HTMLDivElement>) => {
        const target = event.currentTarget;
        if (
            target.dataset.wrapper ||
            target.dataset.direction ||
            isSubElement(target, (element) => element.dataset?.wrapper)
        ) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();

        const box = getBox();

        const areaX = event.clientX - box.x;
        const areaY = event.clientY - box.y;
        const nextArea: IPixelArea = {
            unit: 'px',
            x: areaX,
            y: areaY,
            width: 0,
            height: 0,
            isChanging: true,
            isNew: true
        };

        setEventData({
            startClientX: event.clientX,
            startClientY: event.clientY,
            startAreaX: areaX,
            startAreaY: areaY,
            clientX: event.clientX,
            clientY: event.clientY,
            isResize: true
        });

        setAreaCounter(areaCounter + 1);

        const area = formatArea(nextArea, box.width, box.height, unit);
        let areaIndex: number;
        if (areas.length < maxAreas) {
            onChange(areas.concat(area));
            areaIndex = areas.length;
        } else {
            onChange([...areas.slice(0, maxAreas - 1), area]);
            areaIndex = maxAreas - 1;
        }
        setAreaStatus({
            areaChangeIndex: areaIndex,
            isChanging: true
        });
    };

    const dragArea = useCallback(
        (updatedArea: IArea) => {
            const box = getBox();
            const nextArea = makePixelArea(updatedArea);
            const xDiff = eventData.clientX - eventData.startClientX;
            const yDiff = eventData.clientY - eventData.startClientY;

            nextArea.x = clamp(
                eventData.startAreaX + xDiff,
                0,
                box.width - nextArea.width
            );
            nextArea.y = clamp(
                eventData.startAreaY + yDiff,
                0,
                box.height - nextArea.height
            );
            return nextArea;
        },
        [eventData, makePixelArea]
    );

    const resizeArea = useCallback(
        (updatedArea: IArea) => {
            const box = getBox();
            const direction = getPointRegion(box);
            const nextArea = makePixelArea(updatedArea);
            const resolvedOrd: Ords = eventData.ord ? eventData.ord : direction;
            const xDiff = eventData.clientX - eventData.startClientX;
            const yDiff = eventData.clientY - eventData.startClientY;

            const tmpArea: IPixelArea = {
                unit: 'px',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                isChanging: true,
                isNew: false
            };
            if (direction === 'ne') {
                tmpArea.x = eventData.startAreaX;
                tmpArea.width = xDiff;
                tmpArea.height = Math.abs(yDiff);
                tmpArea.y = eventData.startAreaY - tmpArea.height;
            } else if (direction === 'se') {
                tmpArea.x = eventData.startAreaX;
                tmpArea.y = eventData.startAreaY;
                tmpArea.width = xDiff;
                tmpArea.height = yDiff;
            } else if (direction === 'sw') {
                tmpArea.x = eventData.startAreaX + xDiff;
                tmpArea.y = eventData.startAreaY;
                tmpArea.width = Math.abs(xDiff);

                tmpArea.height = yDiff;
            } else if (direction === 'nw') {
                tmpArea.x = eventData.startAreaX + xDiff;
                tmpArea.width = Math.abs(xDiff);
                tmpArea.height = Math.abs(yDiff);
                tmpArea.y = eventData.startAreaY + yDiff;
            }

            const containedArea = containArea(
                tmpArea,
                direction,
                box.width,
                box.height,
                minWidth,
                minHeight,
                maxWidth,
                maxHeight
            );

            // Apply x/y/width/height changes depending on ordinate
            // (fixed aspect always applies both).
            if (xyOrds.indexOf(resolvedOrd) > -1) {
                nextArea.x = containedArea.x;
                nextArea.y = containedArea.y;
                nextArea.width = containedArea.width;
                nextArea.height = containedArea.height;
            } else if (xOrds.indexOf(resolvedOrd) > -1) {
                nextArea.x = containedArea.x;
                nextArea.width = containedArea.width;
            } else if (yOrds.indexOf(resolvedOrd) > -1) {
                nextArea.y = containedArea.y;
                nextArea.height = containedArea.height;
            }
            return nextArea;
        },
        [
            eventData,
            getPointRegion,
            makePixelArea,
            minWidth,
            minHeight,
            maxWidth,
            maxHeight
        ]
    );

    const onDocPointerMoveHandler = useCallback(
        (event: PointerEvent) => {
            event.preventDefault();
            event.stopPropagation();
            // resize or move area
            const { isChanging, areaChangeIndex } = areaStatus;
            if (!isChanging) {
                return;
            }
            const box = getBox();
            const updatedArea = areas[areaChangeIndex];
            setEventData((currentData) => ({
                ...currentData,
                clientX: event.clientX,
                clientY: event.clientY
            }));
            let nextArea: IArea;

            if (eventData.isResize) {
                nextArea = resizeArea(updatedArea);
            } else {
                nextArea = dragArea(updatedArea);
            }

            if (!areAreasEqual(updatedArea, nextArea)) {
                const area = formatArea(nextArea, box.width, box.height, unit);
                onChange([
                    ...areas.slice(0, areaChangeIndex),
                    { ...area },
                    ...areas.slice(areaChangeIndex + 1)
                ]);
            }
        },
        [areaStatus, areas, eventData, dragArea, onChange, unit, resizeArea]
    );

    const onDocPointerDoneHandler = useCallback(
        (event: PointerEvent) => {
            event.preventDefault();
            event.stopPropagation();
            const { isChanging, areaChangeIndex } = areaStatus;
            if (isChanging) {
                setAreaStatus({
                    isChanging: false,
                    areaChangeIndex: -1
                });
                setEventData({
                    startClientX: 0,
                    startClientY: 0,
                    startAreaX: 0,
                    startAreaY: 0,
                    clientX: 0,
                    clientY: 0,
                    isResize: false
                });
                const updatedArea = areas[areaChangeIndex];

                onChange([
                    ...areas.slice(0, areaChangeIndex),
                    { ...updatedArea, isNew: false, isChanging: false },
                    ...areas.slice(areaChangeIndex + 1)
                ]);
            }
        },
        [areaStatus, areas, onChange]
    );

    useEffect(() => {
        document.addEventListener(
            'pointermove',
            onDocPointerMoveHandler,
            DOC_MOVE_OPTS
        );
        document.addEventListener(
            'pointerup',
            onDocPointerDoneHandler,
            DOC_MOVE_OPTS
        );
        document.addEventListener(
            'pointercancel',
            onDocPointerDoneHandler,
            DOC_MOVE_OPTS
        );

        return () => {
            document.removeEventListener(
                'pointermove',
                onDocPointerMoveHandler,
                DOC_MOVE_OPTS
            );
            document.removeEventListener(
                'pointerup',
                onDocPointerDoneHandler,
                DOC_MOVE_OPTS
            );
            document.removeEventListener(
                'pointercancel',
                onDocPointerDoneHandler,
                DOC_MOVE_OPTS
            );
        };
    }, [onDocPointerMoveHandler, onDocPointerDoneHandler]);

    const onAreaPointerDown = (
        event: ReactPointerEvent<HTMLDivElement>,
        index: number
    ) => {
        event.preventDefault();
        event.stopPropagation();
        const box = getBox();
        const area = areas[index];
        const pixelArea = convertToPixelArea(area, box.width, box.height);

        const ord = (event.target as HTMLElement).dataset.ord as Ords;
        const isResize = Boolean(ord);
        let startClientX = event.clientX;
        let startClientY = event.clientY;
        let startAreaX = pixelArea.x;
        let startAreaY = pixelArea.y;

        // Set the starting coords to the opposite corner.
        if (ord) {
            if (ord === 'ne' || ord == 'e') {
                startAreaX = pixelArea.x;
                startAreaY = pixelArea.y + pixelArea.height;
            } else if (ord === 'se' || ord === 's') {
                startAreaX = pixelArea.x;
                startAreaY = pixelArea.y;
            } else if (ord === 'sw' || ord == 'w') {
                startAreaX = pixelArea.x + pixelArea.width;
                startAreaY = pixelArea.y;
            } else if (ord === 'nw' || ord == 'n') {
                startAreaX = pixelArea.x + pixelArea.width;
                startAreaY = pixelArea.y + pixelArea.height;
            }

            startClientX = startAreaX + box.x;
            startClientY = startAreaY + box.y;
        }
        setEventData({
            startClientX,
            startClientY,
            startAreaX,
            startAreaY,
            clientX: event.clientX,
            clientY: event.clientY,
            isResize,
            ord
        });

        setAreaStatus({
            isChanging: true,
            areaChangeIndex: index
        });
    };

    const removeArea = (index: number) => {
        onChange([...areas.slice(0, index), ...areas.slice(index + 1)]);
    };

    return (
        <div
            ref={wrapperRef}
            style={{
                position: 'relative',
                display: 'inline-block',
                cursor: 'crosshair',
                boxSizing: 'border-box',
                maxWidth: '100%',
                touchAction: 'none',
                lineHeight: 0,
                ...wrapperStyle
            }}
        >
            <div
                ref={mediaRef}
                onPointerDown={onPointerDownHandler}
                style={{ boxSizing: 'border-box' }}
                className={mediaWrapperClassName}
            >
                {children}
            </div>
            {areas.map((area, index) => (
                <Area
                    key={index}
                    area={area}
                    showHandles={!area.isNew}
                    onCropStart={(event) => onAreaPointerDown(event, index)}
                    globalAreaStyle={globalAreaStyle}
                    customAreaRenderer={customAreaRenderer}
                    areaNumber={index + 1}
                    removeArea={removeArea}
                />
            ))}
            {debug ? <Debugger areas={areas} /> : null}
        </div>
    );
};
