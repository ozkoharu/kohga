import { MapContainer, Marker, Popup, TileLayer, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng, LatLngExpression, marker } from "leaflet";
import 'leaflet-contextmenu';
import L from "leaflet";
import React from "react";
import { useState, useEffect } from "react";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';  //marker壊れたの直すよう
import markerIcon from "leaflet/dist/images/marker-Icon.png";   //marker壊れたの直すよう
import markerShadow from 'leaflet/dist/images/marker-shadow.png';   //marker壊れたの直すよう
//壊れたアイコンの処理
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});
import { useContext } from "react";
import { TestCickContext } from "../../pages/View/ViewMap";
import axios from "axios";


const position = new LatLng(38.72311671577611, 141.0346841825174);
const zoomlebel = 18;
const maxzoom = 21;
const takatomo = 'http://192.168.54.129:3000/api/notNotAstar';

const LocationMarker: React.FunctionComponent = () => {
    const { clickflag, setClickFlag } = useContext(TestCickContext);
    const [markers, setMarkers] = useState<LatLng[]>([]);

    if (clickflag) {
        console.log('mark', markers);
        console.log('clickflag' + clickflag);
        axios.post(takatomo, {
            "type": "watanabe",
            "data": markers,
        })
            .then(function (res) {
                console.log('takatomo post');
                //データを受け取る処理
            })
            .catch(err => {
                console.log('たかともPOSTエラー', err);
            })
    }

    const map = useMapEvents({
        click(e) {
            setMarkers((prevValues) => {
                const newValue = [...prevValues, e.latlng];
                console.log('newValue', newValue);
                return newValue;
            });
        },
    });

    if (clickflag && markers != null) {
        console.log('POST Location');
    }
    return (
        <React.Fragment>
            {markers.map(marker => {
                return (
                    <Marker position={marker}></Marker>
                );
            }
            )}
        </React.Fragment>
    );
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

                <LocationMarker />
            </MapContainer>

        </div>
    );
};
export default CreateMap;