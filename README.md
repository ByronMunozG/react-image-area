# react-image-area

![react](https://img.shields.io/badge/react-^17.0.0-blue.svg)
![language](https://img.shields.io/badge/language-typescript-blue.svg)
![license](https://img.shields.io/badge/license-MIT-green.svg)

> React component to select multiple areas/regions of images.

[Live Example](https://byronmunozg.github.io/react-image-area/)

## :books: Table of Contents

-   [Installation](#package-installation)
-   [Usage](#rocket-usage)
-   [Features](#key-features)
-   [Docs](#notebook-docs)
-   [Support](#hammer_and_wrench-support)
-   [Contributing](#memo-contributing)
-   [License](#scroll-license)

## :package: Installation

```bash
npm i @bmunozg/react-image-area
```

## :rocket: Usage

> Usage with types

```jsx
import { AreaSelector, IArea } from '@bmunozg/react-image-area'

const ExampleComponent = () => {
    const [areas, setAreas] = useState<IArea[]>([]);

    const onChangeHandler = (areas: IArea[]) => {
        setAreas(areas);
    }

    return (
        <AreaSelector
            areas={areas}
            onChange={onChangeHandler}
        >
            <img src='my-image.jpg' alt='my image'/>
        </AreaSelector>
    )
}

```

## :key: Features

-   Responsive (you can use pixels or percentages).
-   Touch enabled.
-   Min/max area size.
-   Custom area render

## :notebook: Docs

-   ### Required Props

    -   **`areas: IArea[]`**

        Starting with no areas:

        ```jsx
        // ...
        const [areas,setAreas] = useState<IArea[]>([])
        // ...
        return (
            <AreaSelector
                areas={areas}
            >
                <img src='my-image.jpg' alt='my image'/>
            </AreaSelector>
        )
        // ...
        ```

    -   **`onChange: (areas: IArea[]) => void`**

        A callback which happens for every change on the selection area.

        ```jsx
        // ...
        const [areas,setAreas] = useState<IArea[]>()
        // ...
        return (
            <AreaSelector
                onChange={setAreas}
            >
                <img src='my-image.jpg' alt='my image'/>
            </AreaSelector>
        )
        // ...
        ```

-   ### Default Props

    -   **`maxAreas: number`**

        **Default: `Infinity`**

        Set the maximum areas that can be drawn, by default there are no limit.

    -   **`unit: 'pixel' | 'percentage'`**

        **Default: `pixel`**

        Set the unit you want to work with.

    -   **`minWidth: number`**

        **Default: `0`**

        Min width of the areas.

    -   **`minHeight: number`**

        **Default: `0`**

        Min height of the areas.

    -   **`debug: boolean`**

        **Default: `false`**

        Display info of the current areas.

-   ### Optional Props

    -   **`maxWidth: number`**

        Max width of the areas.

    -   **`maxHeight: number`**

        Max height of the areas.

    -   **`wrapperStyle: CSSProperties`**

        Apply styles to the wrapper element.

        _Omited Styles_: `touchAction` | `boxSizing`

        ```js
        wrapperStyle={{
            border: '2px solid black'
        }}
        ```

    -   **`globalAreaStyle: CSSProperties`**

        Apply global styles to the areas.

        _Omited Styles_: `position` | `touchAction` | `top` | `left` | `width` |
        `height` | `boxSizing`

        ```js
        globalAreaStyle={{
            border: '1.5px dashed blue',
            backgroundColor: 'lightblue',
            opacity: '0.5'
        }}
        ```

    -   **`customAreaRenderer: (areaProps: IAreaRendererProps) => ReactNode`**

        Custom render function to display info inside the areas. _Remember to
        add a key_

        ```jsx
        import { AreaSelector, IAreaRendererProps } from '@bmunozg/react-image-area'
        // ...
        const customRender = (areaProps: IAreaRendererProps) => {
            if (!areaProps.isChanging) {
                return (
                    <div key={areaProps.areaNumber}>
                        {areaProps.areaNumber}
                    </div>
                );
            }
        };
        // ...
        return (
            <AreaSelector
                {/*...*/}
                customAreaRenderer={customRender}
            >
                <img src='my-image.jpg' />
            </AreaSelector>
        );
        // ...
        ```

    -   **`mediaWrapperClassName: string`**

        Classname to apply to the media wrapper (image passed as children).

        ```jsx
        // ...
        return (
            <AreaSelector>
                <img src="my-image.jpg" />
            </AreaSelector>
        );
        // ...
        ```

        _inside the component_ :arrow_down:

        ```jsx
        // ...
        return (
            <div {/*wrapperStyle*/}>
                <div className={mediaWrapperClassName}>
                    {/*image passed as children*/}
                </div>
                {/*...Areas*/}
            </div>
        )
        //...
        ```

## :hammer_and_wrench: Support

Please
[open an issue](https://github.com/ByronMunozG/react-image-area/issues/new) for
support.

## :memo: Contributing

Please contribute using
[Github Flow](https://guides.github.com/introduction/flow/). Create a branch,
add commits, and
[open a pull request](https://github.com/ByronMunozG/react-image-area/compare/).

## :scroll: License

[MIT](LICENSE) © [ByronMunozG](https://github.com/ByronMunozG)
