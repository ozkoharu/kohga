import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng } from "leaflet";
import L from 'leaflet';
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

const CreateMap = () => {
    return (
        <div>
            <MapContainer center={position} zoom={zoomlebel}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        ここにくるな <br /> 救いはないぞ
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
    );
};
export default CreateMap;