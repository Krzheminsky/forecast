
import React, { Component } from "react";


export default class CalculationFirst extends Component {
    state = {
        primCloud: 0
    }

    calcData() {
        const { speedWind, dataChimistry: { boilingPoint } } = this.props;
        return speedWind * boilingPoint
    }

    coeficientA() {
        const { dataChimistry: { vert } } = this.props;
        return (0.57 * Math.exp(0.86 * vert))
    }

    coeficientB1() {
        const { dataChimistry: { vert } } = this.props;
        return (15.4 * Math.exp(6.96 * vert))
    }

    coeficientB2() {
        const { dataChimistry: { vert } } = this.props;
        return (16.84 * Math.exp(6.87 * vert))
    }

    angleF1() {
        const { dataChimistry: { vert }, dataChimistry: { prob }, dataChimistry } = this.props;
        let result;

        if (!dataChimistry) {
            return '-';
        }

        if (vert == -0.15 && prob == 0.5) {
            result = 15;
        }
        else if (vert == -0.15 && prob == 0.75) {
            result = 25;
        }
        else if (vert == -0.15 && prob == 0.9) {
            result = 30;
        }
        else if (vert == 0 && prob == 0.5) {
            result = 12;
        }
        else if (vert == 0 && prob == 0.75) {
            result = 20;
        }
        else if (vert == 0 && prob == 0.9) {
            result = 25;
        }
        else if (vert == 0.15 && prob == 0.5) {
            result = 9;
        }
        else if (vert == 0.15 && prob == 0.75) {
            result = 15;
        }
        else {
            result = 20;
        }
        return result;
    }

    radiusAccident() {
        const { dataChimistry: { amountNHR }, dataChimistry: { boilingPoint } } = this.props;
        let result;

        if (!amountNHR || !boilingPoint) {
            return 0;
        }

        if (boilingPoint < 20 && amountNHR < 100000) {
            result = 0.5;
        }
        else if (boilingPoint < 20 && amountNHR >= 100000) {
            result = 1;
        }
        else if (boilingPoint >= 20 && amountNHR >= 100000) {
            result = 0.5;
        }
        else {
            result = 0.3;
        }
        return result;
    }

    primaryСloud = () => {
        const {
            dataChimistry: { phis, amountNHR, coecificHeat, airTemperature, boilingPoint, vaporisation } = '', dataChimistry } = this.props;

        if (!dataChimistry) {
            return '-';
        }

        let result;
        if (phis == 1 && (amountNHR * coecificHeat * (airTemperature - boilingPoint) / vaporisation > 0)) {
            result = amountNHR * coecificHeat * (airTemperature - boilingPoint) / vaporisation
        }
        else if (phis == 0 && (amountNHR * coecificHeat * (airTemperature - boilingPoint) / vaporisation > 0)) {
            result = amountNHR;
        }
        else {
            result = 0;
        }

        return result.toFixed(3);
    }

    secondaryCloud() {
        const { dataChimistry: { amountNHR } } = this.props;

        return (amountNHR - this.primaryСloud());
    }

    diameterArea() {
        const { dataChimistry: { amountNHR }, dataChimistry: { palletHeight }, dataChimistry: { density } } = this.props;
        let result;
        if (palletHeight == 0) {
            result = 5.04 * (Math.sqrt((amountNHR - this.primaryСloud()) / density));
        }
        else if (palletHeight > 0 && amountNHR < 200000) {
            result = 1.22 * (Math.sqrt((amountNHR - this.primaryСloud()) / density));
        }
        else {
            result = 1.22 / Math.sqrt(palletHeight) * (Math.sqrt((amountNHR - this.primaryСloud()) / density))
        }
        return result;
    }

    surfaceArea() {
        return (3.1415 * this.diameterArea() * this.diameterArea() / 4)
    }

    evaporationRate() {
        const { dataChimistry: { phis }, dataChimistry: { windSpeed }, dataChimistry: { molWeight }, dataChimistry: { vaporisation }, dataChimistry: { boilingPoint } } = this.props;
        let result;
        if (phis == 0) {
            result = 0;
        }
        else {
            result = (0.041 * ((windSpeed * molWeight) / (Math.pow(this.diameterArea(), 0.14) * 273)) * Math.exp((vaporisation * molWeight / 8.31) * ((1 / (boilingPoint + 273)) - (1 / 273))))
        }
        return result;
    }

    evaporationTime() {
        const { dataChimistry: { phis } } = this.props;
        let result;
        if (phis == 0) {
            result = 0;
        }
        else {
            result = this.secondaryCloud() / (3600 * this.evaporationRate() * this.surfaceArea())
        }
        return result;
    }

    primaCloud() {
        const { dataChimistry: { windSpeed }, dataChimistry: { toxiCosis } } = this.props;
        let result;
        if (windSpeed > 0) {
            result = (this.coeficientB1() * Math.pow((this.primaryСloud() / (1000 * windSpeed * toxiCosis)), this.coeficientA()));
        }
        else {
            result = (this.coeficientB1() * Math.pow((this.primaryСloud() / (1000 * 0.6 * toxiCosis)), this.coeficientA()));
        }
        return result;
    }

    secCloud() {
        const { dataChimistry: { windSpeed }, dataChimistry: { toxiCosis }, dataChimistry: { phis } } = this.props;
        let result;
        if (phis == 0) {
            result = 0;
        }
        else if (phis == 1 && this.evaporationTime() > 24) {
            result = this.coeficientB2() * Math.pow(24, -0.5) * Math.pow((this.secondaryCloud() / (1000 * windSpeed * toxiCosis)), this.coeficientA());
        }
        else {
            result = this.coeficientB2() * Math.pow(this.evaporationTime(), -0.5) * Math.pow((this.secondaryCloud() / (1000 * windSpeed * toxiCosis)), this.coeficientA());
        }
        return result;
    }

    angleF2() {
        const { dataChimistry: { vert }, dataChimistry: { prob }, dataChimistry } = this.props;

        if (!dataChimistry) {
            return '-';
        }

        let result;
        if (vert == -0.15 && prob == 0.5) {
            result = 20;
        }
        else if (vert == -0.15 && prob == 0.75) {
            result = 35;
        }
        else if (vert == -0.15 && prob == 0.9) {
            result = 50;
        }
        else if (vert == 0 && prob == 0.5 && this.evaporationTime() < 6) {
            result = 15;
        }
        else if (vert == 0 && prob == 0.75 && this.evaporationTime() < 6) {
            result = 25;
        }
        else if (vert == 0 && prob == 0.9 && this.evaporationTime() < 6) {
            result = 40;
        }
        else if (vert == 0 && prob == 0.5 && this.evaporationTime() >= 6 && this.evaporationTime() < 12) {
            result = 22;
        }
        else if (vert == 0 && prob == 0.75 && this.evaporationTime() >= 6 && this.evaporationTime() < 12) {
            result = 37;
        }
        else if (vert == 0 && prob == 0.9 && this.evaporationTime() >= 6 && this.evaporationTime() < 12) {
            result = 52;
        }
        else if (vert == 0 && prob == 0.75 && this.evaporationTime() >= 12) {
            result = 50;
        }
        else if (vert == 0 && prob == 0.9 && this.evaporationTime() >= 12) {
            result = 70;
        }
        else if (vert == 0 && prob == 0.5 && this.evaporationTime() >= 12) {
            result = 30;
        }
        else if (vert == 0.15 && prob == 0.5) {
            result = 12;
        }
        else if (vert == 0.15 && prob == 0.75) {
            result = 20;
        }
        else {
            result = 30;
        }
        return result;
    }

    areaAccident() {
        return (3.1415 * Math.pow(this.radiusAccident(), 2))
    }

    primaryDepth() {
        const { dataChimistry: { coefficient } } = this.props;
        let result;
        if (this.primaCloud() > 0) {
            result = (coefficient * this.primaCloud());
        }
        else {
            result = 0;
        }
        return result;
    }

    secondaryDepth() {
        const { dataChimistry: { coefficient } } = this.props;
        let result;
        if (this.secCloud() > 0) {
            result = (coefficient * this.secCloud());
        }
        else {
            result = 0;
        }
        return result;
    }

    globalDepth() {
        let result;
        if (this.primaryDepth() > this.secondaryDepth()) {
            result = (this.primaryDepth() + this.radiusAccident());
        }
        else if (this.primaryDepth() < this.secondaryDepth()) {
            result = (this.secondaryDepth() + this.radiusAccident());
        }
        else {
            result = 0;
        }
        return result;
    }

    areaZMHZ() {
        return (3.1415 * Math.pow(this.globalDepth(), 2))
    }

    areaFirst() {
        let result;
        if (this.primaryDepth() == 0) {
            result = 0;
        }
        else {
            result = Math.pow((this.primaryDepth() + this.radiusAccident()), 2) * this.angleF1() / 60
        }
        return result;
    }

    areaSecond() {
        let result;
        if (this.secondaryDepth() == 0) {
            result = 0;
        }
        else {
            result = Math.pow((this.secondaryDepth() + this.radiusAccident()), 2) * this.angleF2() / 60
        }
        return result;
    }

    areaPZHZ() {
        let result;
        if (this.primaryDepth() > this.secondaryDepth()) {
            result = 3.1415 * ((Math.pow(this.radiusAccident(), 2) * (180 - this.angleF2()) / 180) +
                (Math.pow((this.primaryDepth() + this.radiusAccident()), 2) * this.angleF1() / 180) +
                (Math.pow((this.secondaryDepth() + this.radiusAccident()), 2) * (this.angleF2() - this.angleF1()) / 180));
        }
        else {
            result = 3.1415 * ((Math.pow(this.radiusAccident(), 2) * (180 - this.angleF2()) / 180) +
                (Math.pow((this.secondaryDepth() + this.radiusAccident()), 2) * this.angleF2() / 180))
        }
        return result;
    }

    populationPZHZ() {
        const { losses: { areaAffected }, losses: { populationDensity }, losses: { distanceSource }
        } = this.props;
        let result;
        if (distanceSource > this.globalDepth()) {
            result = 0;
        }
        else {
            result = populationDensity * areaAffected;
        }
        return result;
    }

    numberAffected() {
        const { losses: { coefficientProtection } } = this.props;
        return (this.populationPZHZ() * (1 - coefficientProtection))
    }

    transferSpeed() {
        const { dataChimistry: { vert }, dataChimistry: { windSpeed } } = this.props;
        let result;
        if (vert == 0.15) {
            result = windSpeed * 5.24;
        }
        else if (vert == 0) {
            result = windSpeed * 5.8;
        }
        else {
            result = windSpeed * 7;
        }
        return result;
    }
    duration() {
        return this.evaporationTime() * 60;
    }

    approachTime() {
        const { losses: { distanceSource } } = this.props;
        return ((distanceSource / this.transferSpeed()) * 60)
    }

    dissemination() {
        const { losses: { timeMoment } } = this.props;
        let result;
        if (timeMoment / 60 * this.transferSpeed() < this.globalDepth()) {
            result = timeMoment / 60 * this.transferSpeed();
        }
        else {
            result = `досягла максимуму`
        }
        return result;

    }

}