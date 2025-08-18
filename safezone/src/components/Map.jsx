import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';
import useReports from '../util/useReports';
import '../styles/mapView.css';
import LocationMarker from '../util/LocationMarker'
import UserLocation from '../util/UserLocation';
import MapSearch from '../util/MapSearch';
import L from 'leaflet';

export default function Map({ mapViewState, setMapViewState }) {

    const position = [42.6977, 23.3219]; // Sofia, Bulgaria

    const reports = useReports();

    const redIcon = L.icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
                        shadowSize: [41, 41]
                    })

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} touchZoom={true} tap={false}
            style={{ height: "50vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://carto.com/">CARTO</a> | © OpenStreetMap contributors'>
            </TileLayer>

            <MapSearch setSelectedLocation={mapViewState.setSelectedLocation} />
            <UserLocation mapViewState={mapViewState} setMapViewState={setMapViewState} />
            <LocationMarker onSelect={(location) => {
                if(mapViewState.isSelectingOnMap)
                    setMapViewState({ ...mapViewState, selectedLocation: location })
            }} />

            {mapViewState.selectedLocation && (
                <Marker id="selectedLocationMarker" position={mapViewState.selectedLocation}>
                    <Popup>
                        <span id="selectedLocationMarkerSpan" style={{ cursor: "pointer", color: "#2c84cb" }} 
                        onClick={(e) => {
                            setMapViewState({ ...mapViewState, selectedLocation: null });
                            e.stopPropagation();
                            console.log("Marker removed");
                        }}>Click here to remove</span>
                    </Popup>
                </Marker>
            )}

            {/* <MarkerClusterGroup> */}
                {reports.map((report) => (
                    <Marker
                        key={report.id}
                        position={[report.location.latitude, report.location.longitude]}
                        icon={redIcon}
                    >
                    <Popup>
                        <strong>{report.category}</strong><br />
                        {report.description || 'No description'}<br />
                        {report.timestamp && new Date(report.timestamp.seconds * 1000).toLocaleString()}
                    </Popup>
                    </Marker>
                    ))
                }
            {/* </MarkerClusterGroup> */}
        </MapContainer>
    )
}