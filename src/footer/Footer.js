import React, { Component } from "react";
import './Footer.css';

export default class Footer extends Component {

    render() {
        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item active">Copyright (с) Victor Krzheminsky, 2022 </li>
                <li ><a className="footer" href="mailto:krzheminsky@ukr.net">krzheminsky@ukr.net</a></li>
            </ol>
        );
    }
}