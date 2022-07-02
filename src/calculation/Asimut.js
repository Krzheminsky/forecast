import React, { Component } from "react";


export default class Asimut extends Component {

    cloudOne() {
        const {
            lat,
            lng,
            anglF1,
            radAsid,
            secDepth,
            primDepth,
            directionWind
        } = this.props;

        let result = [];
        let latOne;
        let lngOne;
        if (primDepth == 0) {
            latOne = lat;
            lngOne = lng;
            result.push([latOne, lngOne]);
        }
        else {
            result.push([lat, lng]);
            for (let i = (0 - anglF1); i <= anglF1; i++) {
                latOne = lat + ((((primDepth + radAsid) * 1000) * Math.cos((i + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
                lngOne = lng + (primDepth + radAsid) * 1000 * Math.sin((i + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180);
                result.push([latOne, lngOne]);
            }

        }
        return result;
    }

    cloudTwo() {
        const {
            lat,
            lng,
            anglF2,
            radAsid,
            secDepth,
            primDepth,
            directionWind
        } = this.props;

        let result = [];
        let latOne;
        let lngOne;
        if (secDepth == 0) {
            latOne = lat;
            lngOne = lng;
            result.push([latOne, lngOne]);
        }
        else {
            result.push([lat, lng]);
            for (let i = (0 - anglF2); i <= anglF2; i++) {
                latOne = lat + ((((secDepth + radAsid) * 1000) * Math.cos((i + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
                lngOne = lng + (secDepth + radAsid) * 1000 * Math.sin((i + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180);
                result.push([latOne, lngOne]);
            }
        }
        return result;
    }




}

