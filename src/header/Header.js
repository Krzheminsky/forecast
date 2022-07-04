import React, { Component } from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export default class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Forecast<br /><h1 className="title">Прогнозування наслідків аварій на ХНО</h1></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse  header" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Головна<span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href="https://zakon.rada.gov.ua/laws/show/z0440-20#Text">Методика</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/table">Таблиця НХР</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/how">Як користуватися</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Про Forecast</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Поширені запитання</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Як працювати з програмою</a>
                                    <a className="dropdown-item" href="#">Читати наказ ДСНС № 1000</a>
                                    <a className="dropdown-item" href="#">Про запас</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/about">Про Forecast</a>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}