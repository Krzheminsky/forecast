import React, { Component } from "react";
import './TableChim.css';
import tab from "./tableChim.png"

export default class TableChim extends Component {

    render() {

        return (
            <div className="table">

                <h2>Фізико-хімічні властивості деяких НХР</h2>
                <img className="imgChim" src={tab} alt="Таблиця стану НХР" width="99%" />


            </div >
        );
    }
}