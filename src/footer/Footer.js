import React, { Component } from "react";
import './Footer.css';

export default class Footer extends Component {

    render() {
        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item active">  © 2022 Victor Krzheminsky, <a className="footer" href="mailto:krzheminsky@ukr.net">krzheminsky@ukr.net</a></li>
            </ol>
        );
    }
}