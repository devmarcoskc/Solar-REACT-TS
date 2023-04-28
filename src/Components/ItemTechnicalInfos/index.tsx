import React from 'react';
import * as C from './styles';
import {BsFillXDiamondFill} from 'react-icons/bs';
import {GiHeatHaze} from 'react-icons/gi';
import {GiReceiveMoney} from 'react-icons/gi';
import {TbCircuitResistor} from 'react-icons/tb';

type Props = {
    description: string;
    values: {
        value: string;
    }[];
}

const ItemTechnicalInfos = ({description, values}: Props) => {
  return (
    <C.Container>
        <h1>Panel technical infos and description:</h1>
        <p>{description}</p>

        <C.HightlightArea>
            <C.HightlightItem>
                <div className='left-side-icon'>
                    <BsFillXDiamondFill/>
                </div>
                <div className='right-side-icon-desc'>
                    <h4>Half-cut Technology</h4>
                    <p>
                        New circuit design, lower internal current and
                        lower internal resistance loss
                    </p>
                </div>
            </C.HightlightItem>

           <C.HightlightItem>
                <div className='left-side-icon'>
                    <GiHeatHaze/>
                </div>
                <div className='right-side-icon-desc'>
                    <h4>Significantly avoiding heat spot</h4>
                    <p>
                        The unique circuit design to reduce the temperature
                        of heat spot significantly,so that to reduce the power loss
                        and then increase the output of modules.
                    </p>
                </div>
            </C.HightlightItem>

            <C.HightlightItem>
                <div className='left-side-icon'>
                    <GiReceiveMoney/>
                </div>
                <div className='right-side-icon-desc'>
                    <h4>Lower Cost</h4>
                    <p>
                        Increasing power generation can reduce the
                        cost per kilowatt-hour
                    </p>
                </div>
            </C.HightlightItem>

             <C.HightlightItem>
                <div className='left-side-icon'>
                    <TbCircuitResistor/>
                </div>
                <div className='right-side-icon-desc'>
                    <h4>Excellent performance of PID resistance</h4>
                    <p>
                        The performance of PID resistance(Potential Induced
                        Degradation) passed the standard of TUV Nord.
                    </p>
                </div>
            </C.HightlightItem>     
        </C.HightlightArea>

        <C.TechnicalInfosArea>
            <h1>Eletrical Data:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Info:</th>
                        <th>Value:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Peak Power(Pmax)</td>
                        <td>{values[0].value}</td>
                    </tr>
                    <tr>
                        <td>Maxium Power Voltage(Vmp)</td>
                        <td>{values[1].value}</td>
                    </tr>
                    <tr>
                        <td>Maxium Power Current(Imp)</td>
                        <td>{values[2].value}</td>
                    </tr>
                    <tr>
                        <td>Open Circuit Voltage(Voc)</td>
                        <td>{values[3].value}</td>
                    </tr>
                    <tr>
                        <td>Short Circuit CUrrent(Isc)</td>
                        <td>{values[4].value}</td>
                    </tr>
                    <tr>
                        <td>Module Efficiency(%)</td>
                        <td>{values[5].value}</td>
                    </tr>
                </tbody>
            </table>

            <h1>Temperature & Maximum Rating</h1>
            <table>
                <thead>
                    <tr>
                        <th>Info:</th>
                        <th>Value:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maximum System Voltage(V)</td>
                        <td>{values[6].value}</td>
                    </tr>
                    <tr>
                        <td>Maximum Serier Fuse Rating(A)</td>
                        <td>{values[7].value}</td>
                    </tr>
                    <tr>
                        <td>PowerTolerance</td>
                        <td>{values[8].value}</td>
                    </tr>
                    <tr>
                        <td>PmaxTemperature Coefficients(w/ºC)</td>
                        <td>{values[9].value}</td>
                    </tr>
                    <tr>
                        <td>Voc Temperature Coefficients(V/ºC)</td>
                        <td>{values[10].value}</td>
                    </tr>
                    <tr>
                        <td>Isc Temperature Coefficients(A/ºC)</td>
                        <td>{values[11].value}</td>
                    </tr>
                    <tr>
                        <td>NOCT Nominal Operating CellRemperature(ºC)</td>
                        <td>{values[12].value}</td>
                    </tr>
                    <tr>
                        <td>Operating and Storage Temperature(℃)</td>
                        <td>{values[13].value}</td>
                    </tr>
                </tbody>
            </table>

            <h1>Mechanical Characterisrtics</h1>
            <table>
                <thead>
                    <tr>
                        <th>Info:</th>
                        <th>Value:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cell Type</td>
                        <td>{values[14].value}</td>
                    </tr>
                    <tr>
                        <td>No. of Cells</td>
                        <td>{values[15].value}</td>
                    </tr>
                    <tr>
                        <td>Dimensions</td>
                        <td>{values[16].value}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{values[17].value}</td>
                    </tr>
                    <tr>
                        <td>Frame</td>
                        <td>{values[18].value}</td>
                    </tr>
                    <tr>
                        <td>Output cables</td>
                        <td>{values[19].value}</td>
                    </tr>
                </tbody>
            </table>
        </C.TechnicalInfosArea>
    </C.Container>
  )
}

export default ItemTechnicalInfos;