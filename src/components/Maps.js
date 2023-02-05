import React from 'react';
import { TileLayer, Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = new L.Icon({
    iconUrl: require('../images/logo-small.jpg'),
    iconSize: new L.Point(50, 20),
    iconAnchor: new L.Point(25, 10),
});

const Maps = () => {
    const position = [50.061389, 19.936667];
    return (
        <MapContainer center={position} zoom={13} className='mapa'>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={icon}>
                <Popup>
                    Tutaj znajduje się mój salon
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Maps;