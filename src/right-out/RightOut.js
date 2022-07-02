import React, { Component } from "react";
import './RightOut.css';
import { Container, Row, Col } from 'react-bootstrap';


export default class RightOut extends Component {


    render() {

        return (
            <div className="right-out">
                <h6>Результати розрахунків</h6>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th scope="row">Кількість населення в ПЗХЗ (тис.чол)</th>
                            <td>content</td>
                        </tr>
                        <tr>
                            <th scope="row">Прогнозована кількість уражених (тис.чол.)</th>
                            <td>2345676632465</td>
                        </tr>
                        <tr>
                            <th scope="row">Тривалість хімічного забруднення (год)</th>
                            <td>content</td>
                        </tr>
                        <tr>
                            <th scope="row">Швидкість перенесення фронту хмари (км/год)</th>
                            <td>content</td>
                        </tr>
                        <tr>
                            <th scope="row">Час підходу хмари (хвил)</th>
                            <td>content</td>
                        </tr>
                        <tr>
                            <th scope="row">Глибина розповсюдження хмари з моменту аварії (км)</th>
                            <td>content</td>
                        </tr>
                    </tbody>
                </table >
            </div >
        );
    }
}