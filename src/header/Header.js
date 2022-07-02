import React, { Component } from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container, Row, Col, fluid } from 'react-bootstrap';



export default class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Forecast</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Розрахунки
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Проміжні розрахунки</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Таблиці даних</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Про</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Поширені запитання</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Як працювати з програмою</a>
                                    <a className="dropdown-item" href="#">Читати наказ ДСНС № 1000</a>
                                    <a className="dropdown-item" href="#">Про запас</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Про Forecast</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}