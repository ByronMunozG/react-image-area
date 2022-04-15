import { useState } from 'react';
import { AreaSelector } from 'src/components/AreaSelector';
import logo from 'public/logo512.png';
import { CustomAreaRenderer, IArea } from 'src/types';
import type { Story } from '@ladle/react';

export const AreaSelectExample: Story<{
    maxAreas: number;
    debug: boolean;
    customRenderExampleText: string;
}> = ({ maxAreas, debug, customRenderExampleText }) => {
    const [areas, setAreas] = useState<IArea[]>([]);
    const onChangeHandler = (areas: IArea[]) => {
        setAreas(areas);
    };

    const customRender: CustomAreaRenderer = (areaProps) => {
        if (!areaProps.isChanging) {
            return (
                <div key={areaProps.areaNumber}>
                    {customRenderExampleText} - {areaProps.areaNumber}
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
        >
            <img src={logo} />
        </AreaSelector>
    );
};
AreaSelectExample.storyName = 'Area Select';
AreaSelectExample.args = {
    maxAreas: 1,
    debug: true,
    customRenderExampleText: 'test'
};
