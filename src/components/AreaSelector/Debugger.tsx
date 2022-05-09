import { IArea } from 'src/types';
import { FunctionComponent } from 'react';

interface IDebuggerProps {
    areas: IArea[];
}

const Debugger: FunctionComponent<IDebuggerProps> = ({ areas }) => {
    return (
        <table style={{ position: 'absolute', right: 0, top: 0 }}>
            <tbody>
                {areas.map((area, index) => {
                    return (
                        <tr key={index}>
                            <td>x: {Math.round(area.x)}</td>
                            <td>y: {Math.round(area.y)}</td>
                            <td>width: {Math.round(area.width)}</td>
                            <td>height: {Math.round(area.height)}</td>
                            <td>unit: {area.unit}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Debugger;
