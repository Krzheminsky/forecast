import { MapContainer, Marker, Polygon, Popup, TileLayer, Circle, useMapEvents } from 'react-leaflet';
import Calculation from '../calculation/Calculation';
import Asimut from '../calculation/Asimut';
import React, { Component } from "react";
import "./MapCoordinate.css";
import map from 'leaflet';
import L from 'leaflet';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

export default class MapCoordinate extends Component {

    state = {
        lat: 49.16,
        lng: 34.41,
        zoom: 6,
        radAvar: 0,
        radZMHZ: 0,
        secDepth: 1,
        anglF1: 360,
        anglF2: 360,
        primDepth: 1,
        position: null,
    }

    render() {
        const { lat, lng, radAvar, radZMHZ, position, zoom } = this.state;
        const { data } = this.props;

        const pos = [lat, lng]

        let obj = new Calculation({ ...data })
        let globDepth = obj.globalDepth().toFixed(3);
        let radAsid = obj.radiusAccident();
        let primDepth = obj.primaryDepth();
        let secDepth = obj.secondaryDepth();
        let anglF1 = obj.angleF1();
        let anglF2 = obj.angleF2();
        let amount = this.props.data.dataChimistry.amountNHR / 1000;
        let arZMHZ = obj.areaZMHZ().toFixed(3);
        let arFirst = obj.areaFirst().toFixed(3);
        let arSecond = obj.areaSecond().toFixed(3);
        let globalDepth = obj.globalDepth().toFixed(3);

        let angl = new Asimut({
            lat,
            lng,
            anglF1,
            anglF2,
            radAsid,
            secDepth,
            globDepth,
            primDepth,
            ...data
        })

        let cloudOne = angl.cloudOne();
        let cloudTwo = angl.cloudTwo();

        let LocationMarker = () => {
            const map = useMapEvents({
                click: (e) => {
                    this.setState({
                        anglF1: anglF1,
                        radAvar: radAsid,
                        lat: e.latlng.lat,
                        lng: e.latlng.lng,
                        position: e.latlng,
                        radZMHZ: globDepth,
                        secDepth: secDepth,
                        primDepth: primDepth,
                    })
                },
                locationfound: (e) => {
                },

            })
            return position === null ? null : (

                < Marker position={position} >
                    <Popup>{data.dataChimistry.chemical},{amount} ??<br />
                        ????????????????????:<br /> {lat.toFixed(4)}, {lng.toFixed(4)}
                    </Popup>
                </Marker >
            )
        }

        let firstArea = [cloudOne]
        let secondArea = [cloudTwo]

        return (

            <MapContainer center={pos} zoom={zoom} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle center={pos} pathOptions={{ color: "yellow" }} radius={globalDepth != '-' ? globalDepth * 1000 : 0} >
                    <Popup>
                        ???????? ?????????????????? ?????????????????? ??????????????????????, <br />
                        ?????????????? ????????: {globalDepth} ????,<br /> ?????????? ????????: {arZMHZ} ????<sup>2</sup>
                    </Popup>
                </Circle>

                <Circle center={pos} pathOptions={{ color: "red" }} radius={radAsid != '-' ? radAsid * 1000 : 0} >
                    <Popup>
                        ???????????? ???????????? {radAsid} ????
                    </Popup>
                </Circle>

                <Polygon pathOptions={{ color: "green" }} positions={secondArea} >
                    <Popup>
                        ???????????????? ??????????,<br /> ?????????????? ??2: {secDepth.toFixed(3)} ????,<br /> ?????????? S2: {arSecond} ????<sup>2</sup>
                    </Popup>
                </Polygon>

                <Polygon pathOptions={{ color: "blue" }} positions={firstArea} >
                    <Popup>
                        ???????????????? ??????????,<br /> ?????????????? ??1: {primDepth != '-' ? primDepth.toFixed(3) : 0}  ????,<br /> ?????????? S1: {arFirst} ????<sup>2</sup>
                    </Popup>
                </Polygon>

                <Marker position={pos}>
                    <Popup>
                        ?????????????????? ???????????????????? ?????????????????? ??????????????????????, <br />???????????????? ?????????? ???????????? ??a ???????????????? ?????????? ???????????????? ????????.
                    </Popup>
                </Marker>
                <LocationMarker />
            </MapContainer>
        );
    }
}

