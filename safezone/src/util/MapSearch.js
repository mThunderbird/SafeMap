import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-control-geocoder";

import "leaflet-control-geocoder/dist/Control.Geocoder.css";

export default function MapSearch({ mapViewState, setMapViewState }) {

    const map = useMap();

    useEffect(() => {

        const geocoder = L.Control.geocoder({
        defaultMarkGeocode: false,
        position: 'topleft'
        })
        .on('markgeocode', function(e) {

            map.setView(e.geocode.center, 16);
        });

        geocoder.addTo(map);

        return () => {
            geocoder.remove();
        }

    }, []);

    return null;
}