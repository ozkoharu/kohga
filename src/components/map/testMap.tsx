import { MapContainer, Marker, Popup, TileLayer, useMapEvent, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng, LatLngExpression, marker } from "leaflet";
import 'leaflet-contextmenu';
import L from 'leaflet';
import React from "react";
import { useState } from "react";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';  //marker壊れたの直すよう
import markerIcon from "leaflet/dist/images/marker-icon.png";   //marker壊れたの直すよう
import markerShadow from 'leaflet/dist/images/marker-shadow.png';   //marker壊れたの直すよう
import { GuestHeader } from "../templates/guest/guestHeader";
//壊れたアイコンの処理
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

const position = new LatLng(38.72311671577611, 141.0346841825174);
const zoomlebel = 18;
const maxzoom = 21;

const ClickMarker = () => {
    const [pos, setPos] = useState<LatLng[]>([position]);
    const map = useMapEvent('click', (e) => {
        setPos((prevValues) => [...prevValues, e.latlng]);
        pos.push(e.latlng);
        console.log(pos);
    })
    return (
        <React.Fragment>
            {pos.map(pos => <Marker position={pos}></Marker>)}
        </React.Fragment>
    )
}


const CreateMap = () => {
    return (
        <div>

            <MapContainer
                center={position}
                zoom={zoomlebel}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxNativeZoom={maxzoom}
                />
                <ClickMarker />
            </MapContainer>
        </div>
    );
};
export default CreateMap;