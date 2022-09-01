import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng, LatLngExpression, marker } from "leaflet";
import 'leaflet-contextmenu';
import L from 'leaflet';
import React from "react";
import { useState } from "react";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';  //marker壊れたの直すよう
import markerIcon from "leaflet/dist/images/marker-Icon.png";   //marker壊れたの直すよう
import markerShadow from 'leaflet/dist/images/marker-shadow.png';   //marker壊れたの直すよう
//壊れたアイコンの処理
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

const position = new LatLng(38.72311671577611, 141.0346841825174);
const zoomlebel = 18;
const maxzoom = 21;

// export const Clickevent = () => {
//     const [nowlat, setlat] = useState<Number>();
//     const [nowlng, setlng] = useState<Number>();
//     const map = useMapEvents({
//         click: () => {
//             map.locate();
//         },
//         locationfound: (location) => {
//             setlat(location.latlng.lat);
//             setlng(location.latlng.lng);
//             count++;
//             console.log('lat : ' + nowlat + 'lng : ' + nowlng + ' カウント' + count);
//         },
//     })
//     return null;
// }

// const LocationMarker = () => {
//     const [pos, setPos] = useState<LatLng>(position);
//     const map = useMapEvents({
//         click: e => {
//             map.locate();
//             console.log(e.latlng);
//             setPos(e.latlng);
//         },

//     })
//     if (pos != position) {
//         return (
//             <Marker position={pos}>
//                 <Popup>
//                     You are here
//                 </Popup>
//             </Marker>
//         )
//     } else {
//         console.log('おなじ緯度経度')
//         return null;
//     }

// }

const LocationMarker = () => {
    const [markers, setMarkers] = useState<LatLng[]>([]);

    const map = useMapEvents({
        click(e) {
            setMarkers((prevValues) => [...prevValues, e.latlng]);
            console.log(markers);
        },
    });

    return (
        <React.Fragment>
            {markers.map(marker => <Marker position={marker}></Marker>)}
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