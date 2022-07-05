import React, { Component } from "react";
import './LeftAdd.css';
import { Container, Row, Col } from 'react-bootstrap';
import Wind from "../wind/Wind";
import { chemicalSubstances, phisicalState, verticalStability, probability, nhr } from '../database';



export default class LeftAdd extends Component {

    result = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let chemical = elements['chemical-substances'].value;
        let vertical = elements['vertical-stability'].value;
        let phisical = elements['phisical-state'].value;
        let probab = elements['prognoz'].value;
        let windSpeed = +elements['wind'].value;
        let airTemperature = +elements['term'].value;
        let amountNHR = +elements['massa'].value;
        let coefficient = +elements['koef'].value;
        let palletHeight = +elements['visota'].value;

        let him = '';
        chemicalSubstances.map((el) => {
            if (el.name === chemical) {
                him = el;
            }
        })
        let { boilingPoint, coecificHeat, density, densityGas, id, molWeight, toxiCosis, vaporisation, nhr } = him;

        let vert = '';
        verticalStability.map((el) => {
            if (el.name === vertical) {
                vert = el;
            }
        })

        let phis = '';
        phisicalState.map((el) => {
            if (el.name === phisical) {
                phis = el;
            }
        })

        let prob = '';
        probability.map((el) => {
            if (el.name === probab) {
                prob = el;
            }
        })

        let obj = {
            id,
            nhr,
            density,
            chemical,
            molWeight,
            toxiCosis,
            windSpeed,
            amountNHR,
            densityGas,
            coefficient,
            boilingPoint,
            coecificHeat,
            vaporisation,
            palletHeight,
            airTemperature,
            vert: vert.param,
            prob: prob.param,
            phis: phis.param,
        }
        this.props.calcFunction(obj);
    }


    render() {

        const calcWind = (data) => {
            this.props.calcWind(data);
        }


        return (
            <div className="left-add">
                <h5 className="h5">Вихідні дані</h5>
                <form onSubmit={this.result}>
                    <div className="form-group">
                        <table className="table table-hover">
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <label forhtml="exampleSelect1" className="form-label">Вибір хімічної речовини</label>
                                    </th>
                                    <td>
                                        <select className="form-select" id="exampleSelect1" name="chemical-substances">
                                            {chemicalSubstances.map((el, key) => (
                                                <option key={key} id={el.id} value={el.name}>{el.name}</option>)
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label forhtml="exampleSelect1" className="form-label">Ступінь вертикальної стійкості</label>
                                    </th>
                                    <td>
                                        <select className="form-select" id="exampleSelect2" name="vertical-stability">
                                            {verticalStability.map((el, key) => (
                                                <option key={key} value={el.name}>{el.name}</option>)
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label forhtml="exampleSelect1" className="form-label">Агрегатний стан НХР</label>
                                    </th>
                                    <td>
                                        <select className="form-select" id="exampleSelect3" name="phisical-state">
                                            {phisicalState.map((el, key) => (
                                                <option key={key} value={el.name}>{el.name}</option>)
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label forhtml="exampleSelect1" className="form-label">Характер прогнозування</label>
                                    </th>
                                    <td>
                                        <select className="form-select" id="exampleSelect4" name="prognoz">
                                            {probability.map((el, key) => (
                                                <option key={key} value={el.name}>{el.name}</option>)
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label className="form-label">Швидкість вітру (м/с)</label>
                                    </th>
                                    <td>
                                        <input type="number" className="form-num" defaultValue={1} name="wind" step="0.1" min="0.1" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label className="form-label">Температура повітря (С&#xb0;)</label>
                                    </th>
                                    <td>
                                        <input type="number" className="form-num" defaultValue={20} name="term" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label className="form-label">Кількість НХР в ємності (кг)</label>
                                    </th>
                                    <td>
                                        <input type="number" className="form-num" defaultValue={1000} name="massa" min="0" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label className="form-label">Коефіцієнт впливу місцевості</label>
                                    </th>
                                    <td>
                                        <input type="number" className="form-num" defaultValue={0.5} placeholder="0.5" name="koef" step="0.1" min="0.1" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label className="form-label">Висота піддону (м) </label>
                                    </th>
                                    <td>
                                        <input type="number" className="form-num" step="0.1" placeholder="0 - якщо відсутній" name="visota" min="0" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label forhtml="exampleInput6" className="form-label">Напрямок вітру</label>
                                    </th>
                                    <td>
                                        <Wind calcWind={calcWind} />
                                    </td>
                                </tr>

                            </tbody>
                        </table >

                        <button
                            type="submit"
                            className="btn btn-outline-primary">Розрахувати</button>
                    </div>
                </form>
            </div >


        );
    }
}