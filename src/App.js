import React, { Component } from "react";
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import MapCoordinate from "./map-coordinate/MapCoordinate";
import Header from "./header/Header";
import LeftAdd from "./left-add/LeftAdd";
import LeftOut from "./left-out/LeftOut";
import RightAdd from "./right-add/RightAdd";
import Footer from "./footer/Footer";
import About from "./about/About.js";
import HowToWork from "./howToWork/HowToWork";
import TableChim from "./table/TableChim"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {

  state = {
    dataChimistry: '',
    directionWind: '',
    losses: ''
  }

  render() {
    let calcFunction = (dataChimistry) => {
      this.setState({ dataChimistry })
    }

    let calcWind = (directionWind) => {
      this.setState({ directionWind })
    }

    let calcFunctionSecond = (losses) => {
      this.setState({ losses })
    }

    return (

      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <LeftAdd
              calcFunction={calcFunction}
              calcWind={calcWind} />
            <RightAdd calcFunctionSecond={calcFunctionSecond} />
          </Col>
          <Col md={6}>
            <Routes >
              <Route exact path="/" element={<MapCoordinate data={this.state} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/how" element={<HowToWork />} />
              <Route exact path="/table" element={<TableChim />} />
            </Routes >
          </Col>
          <Col md={3}>
            <LeftOut data={this.state} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}
