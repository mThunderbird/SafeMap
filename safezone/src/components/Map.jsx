import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import useReports from '../util/useReports';
import '../styles/mapView.css';
import LocationMarker from '../util/LocationMarker'

export default function Map({ selectedLocation, setSelectedLocation }) {

    const position = [42.6977, 23.3219]; // Sofia, Bulgaria

    const reports = useReports();

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}
            style={{ height: "50vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://carto.com/">CARTO</a> | © OpenStreetMap contributors'>
            </TileLayer>
            <LocationMarker onSelect={(location) => setSelectedLocation(location)} />

            {selectedLocation && (
                <Marker id="selectedLocationMarker" position={selectedLocation}>
                    <Popup>
                        <span id="selectedLocationMarkerSpan" style={{ cursor: "pointer", color: "darkred" }} onClick={(e) => {
                            setSelectedLocation(null);
                            e.stopPropagation();
                            console.log("Marker removed");
                        }}>Remove marker</span>
                    </Popup>
                </Marker>
            )}

            <MarkerClusterGroup>
                {reports.map((report) => (
                    <Marker
                        key={report.id}
                        position={[report.location.latitude, report.location.longitude]}
                    >
                    <Popup>
                        <strong>{report.category}</strong><br />
                        {report.description || 'No description'}<br />
                        {report.timestamp && new Date(report.timestamp.seconds * 1000).toLocaleString()}
                    </Popup>
                    </Marker>
                    ))
                }
            </MarkerClusterGroup>
        </MapContainer>
    )
}