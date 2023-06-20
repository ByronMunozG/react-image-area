import { useState } from 'react';
import { AreaSelector } from 'src/components/AreaSelector';
import { CustomAreaRenderer, IArea } from 'src/types';
import type { Story } from '@ladle/react';
import { IPropUnit } from './types';

export const AreaSelectExample: Story<{
    maxAreas: number;
    debug: boolean;
    customRenderExampleText: string;
    unit: IPropUnit;
}> = ({ maxAreas, debug, customRenderExampleText, unit }) => {
    const [areas, setAreas] = useState<IArea[]>([]);
    const onChangeHandler = (areas: IArea[]) => {
        setAreas(areas);
    };

    const customRender: CustomAreaRenderer = (areaProps) => {
        if (!areaProps.isChanging) {
            return (
                <div key={areaProps.areaNumber}>
                    {customRenderExampleText} - {areaProps.areaNumber}
                    <button
                        style={{
                            position: 'absolute',
                            bottom: '-30px',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }}
                        onClick={() =>
                            areaProps.removeArea(areaProps.areaNumber - 1)
                        }
                    >
                        remove
                    </button>
                </div>
            );
        }
    };

    return (
        <AreaSelector
            onChange={onChangeHandler}
            areas={areas}
            maxAreas={maxAreas}
            debug={debug}
            wrapperStyle={{
                border: '2px solid black'
            }}
            globalAreaStyle={{
                border: '1.5px dashed blue',
                backgroundColor: 'lightblue',
                opacity: '0.5'
            }}
            customAreaRenderer={customRender}
            unit={unit}
        >
            <img src="logo512.png" />
        </AreaSelector>
    );
};
AreaSelectExample.storyName = 'Area Select';
AreaSelectExample.args = {
    maxAreas: 1,
    debug: true,
    customRenderExampleText: 'test'
};
AreaSelectExample.argTypes = {
    unit: {
        options: ['pixel', 'percentage'],
        control: { type: 'select' },
        defaultValue: 'pixel'
    }
};
