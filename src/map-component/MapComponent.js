import React, { Component } from "react";
import "./MapComponent.css"
import { MapContainer, Marker, Polygon, Popup, TileLayer, Circle, useMapEvents } from 'react-leaflet'
import L from 'leaflet';
import map from 'leaflet';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

export default class MapCompomemt extends Component {

    state = {
        lat: 59.88225,
        lng: 35.45758,
        zoom: 12,
        position: null,
    }

    render() {
        const pos = [this.state.lat, this.state.lng]

        let LocationMarker = () => {
            const map = useMapEvents({
                dubbleclick(e) {
                    map.locate()
                },
                locationfound: (e) => {
                    this.setState({ position: e.latlng })
                    map.flyTo(e.latlng, map.getZoom())
                },
            })
            return this.state.position === null ? null : (
                <Marker position={this.state.position}>
                    <Popup>You are here</Popup>
                </Marker>
            )
        }

        const polygon = [
            [51.88225, 33.45758],
            [51.88081647, 33.46624867],
            [51.88026499, 33.46595845],
            [51.87999703, 33.46577868],
            [51.87973525, 33.46557644],
            [51.87948036, 33.46535228],
            [51.87923307, 33.46510682],
            [51.87899404, 33.46484073],
            [51.87876394, 33.46455475],
            [51.87854339, 33.46424964],
            [51.878333, 33.46392626],
            [51.87813334, 33.46358548],
            [51.87794497, 33.46322824],
            [51.8777684, 33.46285552],
            [51.87760411, 33.46246834],
            [51.87745255, 33.46206777],
            [51.87731414, 33.46165489],
            [51.87718926, 33.46123085],
            [51.87707825, 33.4607968],
            [51.87689902, 33.45990347]
        ]





        return (
            <MapContainer center={pos} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle center={pos} pathOptions={{ color: "blue" }} radius={1200} >
                    <Popup>
                        А це - <br /> КОЛО.
                    </Popup>

                </Circle>
                <Polygon pathOptions={{ color: "blue" }} positions={polygon} >
                    <Popup>
                        Це є <br /> ПолІГОН.
                    </Popup>
                </Polygon>
                <Marker position={pos}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>

                <LocationMarker />
            </MapContainer>

        );
    }
}

