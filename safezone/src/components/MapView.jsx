import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';

import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase'

import '../styles/mapView.css';


export default function MapView() {

    const position = [42.6977, 23.3219]; // Sofia, Bulgaria

    function useReports() {
        const [reps, setReps] = useState([]);

        useEffect(() => {
            const unsub = onSnapshot(collection(db, "reports"), (snapshot) => {
            const newReports = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setReps(newReports);
            });

            return () => unsub();
        }, []);

        return reps;
    }

    const reports = useReports();

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}
            style={{ height: "50vh", width: "100%" }}>
        <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a> | © OpenStreetMap contributors'
        />


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