import React, { Component } from "react";
import './LeftOut.css';
import stup from "./stup.png";
import { Container, Row, Col } from 'react-bootstrap';
import Calculation from '../calculation/Calculation'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class LeftOut extends Component {
    state = {
        rad: '',
    }

    render() {

        let obj = new Calculation({ ...this.props.data })

        let result2 = obj.calcData();
        let koefA = obj.coeficientA().toFixed(2);
        let koefB1 = obj.coeficientB1().toFixed(2);
        let koefB2 = obj.coeficientB2().toFixed(2);
        let anglF1 = obj.angleF1();
        let anglF2 = obj.angleF2();
        let radAsid = obj.radiusAccident().toFixed(3);
        let primCloud = obj.primaryСloud();
        let secCloud = obj.secondaryCloud().toFixed(2);
        let diamArea = obj.diameterArea().toFixed(2);
        let surArea = obj.surfaceArea().toFixed(2);
        let evaporRate = obj.evaporationRate().toFixed(5);
        let evaporTime = obj.evaporationTime().toFixed(5);
        let pCloud = obj.primaCloud().toFixed(3);
        let sCloud = obj.secCloud().toFixed(3);
        let arAccident = obj.areaAccident().toFixed(3);
        let primDepth = obj.primaryDepth().toFixed(3);
        let secDepth = obj.secondaryDepth().toFixed(3);
        let globDepth = obj.globalDepth().toFixed(3);
        let arZMHZ = obj.areaZMHZ().toFixed(3);
        let arFirst = obj.areaFirst().toFixed(3);
        let arSecond = obj.areaSecond().toFixed(3);
        let arPZHZ = obj.areaPZHZ().toFixed(3);
        let populPZHZ = obj.populationPZHZ().toFixed(3);
        let numAffected = obj.numberAffected().toFixed(0);
        let tranSpeed = obj.transferSpeed().toFixed(1);
        let duration = obj.duration().toFixed(2);
        let apprTime = obj.approachTime().toFixed(0);
        let disseminat = obj.dissemination();

        let checkTypeOff = (param) => {
            return param != 'NaN' && !isNaN(param) ? param : '-';
        }

        let checkTypeO = (param) => {
            return param != 'NaN' && !isNaN(param) ? param : '0.000';
        }

        return (

            <div className="left-out">
                <h5 className="h5">Результати розрахунків</h5>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th scope="row">Радіус аварії (км)</th>
                            <td>{radAsid}</td>
                        </tr>
                        <tr>
                            <th scope="row">Площа аварії (км2)</th>
                            <td>{checkTypeOff(arAccident)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Глибина поширення первинної хмари (км)</th>
                            <td>{primDepth}</td>
                        </tr>
                        <tr>
                            <th scope="row">Глибина поширення вторинної хмари (км)</th>
                            <td>{secDepth}</td>
                        </tr>
                        <tr>
                            <th scope="row">Глибина зони хімічного забруднення (км)</th>
                            <td>{globDepth}</td>
                        </tr>
                        <tr>
                            <th scope="row">Площа ЗМХЗ (км2)</th>
                            <td>{checkTypeOff(arZMHZ)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Площа первинної хмари (км2)</th>
                            <td>{arFirst}</td>
                        </tr>
                        <tr>
                            <th scope="row">Площа вторинної хмари (км2)</th>
                            <td>{checkTypeOff(arSecond)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Площа ПЗХЗ (км2)</th>
                            <td>{checkTypeO(arPZHZ)}</td>
                        </tr>
                        <tr >
                            <th className="ogl" scope="row">Результати розрахунку можливих втрат</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Кількість населення в ПЗХЗ (тис.чол)</th>
                            <td>{checkTypeOff(populPZHZ)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Прогнозована кількість уражених (тис.чол.)</th>
                            <td>{checkTypeOff(numAffected)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Тривалість хімічного забруднення (хв.)</th>
                            <td>{checkTypeOff(duration)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Швидкість перенесення фронту хмари (км/год)</th>
                            <td>{checkTypeOff(tranSpeed)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Час підходу хмари (хвил)</th>
                            <td>{checkTypeOff(apprTime)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Глибина розповсюдження хмари з моменту аварії (км)</th>
                            <td>{disseminat}</td>
                        </tr>
                    </tbody>
                </table >
                <ul className="promijni-ul">
                    <li className="nav-item dropdown">
                        <p className="promijni-p" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Проміжні розрахунки</p>
                        <div className="dropdown-menu">
                            <table className="table table-hover">
                                <tbody >
                                    <tr>
                                        <th scope="row">Розрахункова глибина первинної хмари</th>
                                        <td>{checkTypeOff(pCloud)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Розрахункова глибина вторинної хмари</th>
                                        <td>{checkTypeOff(sCloud)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">К-сть НХР, що перейшла у первинну хмару</th>
                                        <td>{checkTypeOff(primCloud)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">К-сть НХР, що перейшла у вторинну хмару</th>
                                        <td>{checkTypeOff(secCloud)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Привед. діам. площі виливу НХР</th>
                                        <td>{checkTypeOff(diamArea)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Площа поверхні виливу НХР</th>
                                        <td>{checkTypeOff(surArea)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Питома швидкість випаровування</th>
                                        <td>{checkTypeOff(evaporRate)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Час випаровування</th>
                                        <td>{checkTypeOff(evaporTime)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Коефіціент А</th>
                                        <td>{checkTypeOff(koefA)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Коефіціент В1</th>
                                        <td>{checkTypeOff(koefB1)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Коефіціент В2</th>
                                        <td>{checkTypeOff(koefB2)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Половина кута Ф1</th>
                                        <td>{anglF1}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Половина кута Ф2</th>
                                        <td>{anglF2}</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </li>
                </ul>
                <ul className="promijni-ul">
                    <li className="nav-item dropdown">
                        <p className="promijni-ul" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Довідкова інформація про НХР</p>
                        <div className="dropdown-menu">
                            <p className="nhr" >{this.props.data.dataChimistry.nhr}</p>

                        </div>
                    </li>
                </ul>
                <ul className="promijni-ul">
                    <li className="nav-item dropdown">
                        <p className="promijni-ul" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ступені вертикальної стійкості повітря</p>
                        <div className="dropdown-menu">
                            <img className="imgChim" src={stup} alt="Таблиця стану НХР" width="100%" />

                        </div>
                    </li>
                </ul>

            </div >


        );
    }
}