import React, { Component } from "react";
import './LeftOut.css';
import stup from "./stup.png";
import { Container, Row, Col } from 'react-bootstrap';
import Calculation from '../calculation/Calculation'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card } from "react-bootstrap";


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
                            <th scope="row">Радіус аварії <span>Ra</span> (км)</th>
                            <td>{radAsid}</td>
                        </tr>
                        <tr>
                            <th scope="row">Площа аварії <span>Sa</span> (км<sup>2</sup>)</th>
                            <td>{checkTypeOff(arAccident)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Глибина поширення первинної хмари <span>Г1</span> (км)</th>
                            <td>{primDepth}</td>
                        </tr>
                        <tr>
                            <th scope="row">Глибина поширення вторинної хмари <span>Г2</span> (км)</th>
                            <td>{secDepth}</td>
                        </tr>
                        <tr>
                            <th scope="row">Глибина зони хімічного забруднення <span>Г</span> (км)</th>
                            <td>{globDepth}</td>
                        </tr>
                        <tr>
                            <th scope="row">Площа ЗМХЗ <span>Sзмхз</span> (км<sup>2</sup>)</th>
                            <td>{checkTypeOff(arZMHZ)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Площа первинної хмари <span>S1</span> (км<sup>2</sup>)</th>
                            <td>{arFirst}</td>
                        </tr>
                        <tr>
                            <th scope="row">Площа вторинної хмари <span>S2</span> (км<sup>2</sup>)</th>
                            <td>{checkTypeOff(arSecond)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Площа ПЗХЗ <span>Sпмхз</span> (км<sup>2</sup>)</th>
                            <td>{checkTypeO(arPZHZ)}</td>
                        </tr>
                        <tr >
                            <th className="ogl" scope="row">Результати розрахунку можливих втрат</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Кількість населення в ПЗХЗ <span>L</span> (тис.чол)</th>
                            <td>{checkTypeOff(populPZHZ / 1000)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Прогнозована кількість уражених <span>B</span> (тис.чол.)</th>
                            <td>{checkTypeOff(numAffected / 1000)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Тривалість хімічного забруднення <span>Твип</span> (хв.)</th>
                            <td>{checkTypeOff(duration)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Швидкість перенесення фронту хмари <span>v</span> (км/год)</th>
                            <td>{checkTypeOff(tranSpeed)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Час підходу хмари <span>t</span> (хв.)</th>
                            <td>{checkTypeOff(apprTime)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Глибина розповсюдження хмари з моменту аварії <span>Гр</span> (км)</th>
                            <td>{disseminat}</td>
                        </tr>
                    </tbody>
                </table >

                <div className="accordion" id="accordionExample">

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Проміжні розрахунки
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <table className="table table-hover">
                                    <tbody >
                                        <tr>
                                            <th scope="row">Розрахункова глибина первинної хмари <span>Г1р</span> (км)</th>
                                            <td>{checkTypeOff(pCloud)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Розрахункова глибина вторинної хмари <span>Г2р</span> (км)</th>
                                            <td>{checkTypeOff(sCloud)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">К-сть НХР, що перейшла у первинну хмару <span>Q1</span> (т)</th>
                                            <td>{checkTypeOff((primCloud / 1000).toFixed(3))}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">К-сть НХР, що перейшла у вторинну хмару <span>Q2</span> (т)</th>
                                            <td>{checkTypeOff((secCloud / 1000).toFixed(3))}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Приведений діаметр площі виливу НХР <span>dпр</span> (м)</th>
                                            <td>{checkTypeOff(diamArea)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Площа поверхні виливу НХР <span>Sпр</span> (км<sup>2</sup>)</th>
                                            <td>{checkTypeOff(surArea)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Питома швидкість випаровування <span>E</span> (кг/м<sup>2</sup>*с)</th>
                                            <td>{checkTypeOff(evaporRate)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Час випаровування <span>τ</span> (год)</th>
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
                                            <th scope="row">Половина кута Ф1 (первинна хмара)</th>
                                            <td>{anglF1}&#xb0;</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Половина кута Ф2 (вторинна хмара)</th>
                                            <td>{anglF2}&#176;</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Довідкова інформація про НХР
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="nhr" >{this.props.data.dataChimistry.nhr}</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Ступені вертикальної стійкості повітря
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <img className="imgChim" src={stup} alt="Таблиця стану НХР" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}