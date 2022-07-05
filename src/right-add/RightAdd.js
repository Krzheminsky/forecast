import React, { Component } from "react";
import './RightAdd.css';
import { Container, Row, Col } from 'react-bootstrap';


export default class RightAdd extends Component {

    resultSecond = (e) => {

        e.preventDefault();
        let elements = e.target.elements;
        let timeMoment = +elements['time'].value;
        let distanceSource = +elements['distance'].value;
        let populationDensity = +elements['density'].value;
        let coefficientProtection = +elements['protection'].value;
        let areaAffected = +elements['area'].value;


        let obj = {
            elements,
            timeMoment,
            distanceSource,
            populationDensity,
            coefficientProtection,
            areaAffected
        }
        this.props.calcFunctionSecond(obj);
    }

    render() {

        return (
            <div className="right-add">
                <h6>Для розрахунку можливих втрат</h6>
                <form onSubmit={this.resultSecond}>
                    <div className="form-group">
                        <table className="table table-hover">
                            <tbody>

                                <tr>
                                    <th scope="row">
                                        <label className="form-label">Час, з моменту аварії (хвилин)</label>
                                    </th>
                                    <td>
                                        <input type="number" className="form-num" defaultValue={240} id="exampleInput1" name="time" placeholder="240" min="0" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label className="form-label">Відстань від джерела до об'єкта (км)</label>
                                    </th>
                                    <td>
                                        <input type="number" className="form-num" name="distance" id="exampleInput2" defaultValue={1} placeholder="0" step="0.1" min="0" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label className="form-label">Щильність населення (осіб/км<sup>2</sup>)</label>
                                    </th>
                                    <td>
                                        <input type="number" className="form-num" name="density" id="exampleInput3" placeholder="0" min="0" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label className="form-label">Коефіціент захищеності</label>
                                    </th>
                                    <td>
                                        <input type="number" className="form-num" name="protection" id="exampleInput4" defaultValue={0.72} placeholder="0.72" step="0.01" min="0.01" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label className="form-label">Площа ураженої території (км<sup>2</sup>)</label>
                                    </th>
                                    <td>
                                        <input type="number" name="area" className="form-num" id="exampleInput5" placeholder="0" step="0.1" min="0" />
                                    </td>
                                </tr>


                            </tbody>
                        </table >

                        <button type="submit" className="btn btn-outline-primary btn-2">Розрахувати</button>

                    </div>
                </form>

            </div>

        );
    }
}