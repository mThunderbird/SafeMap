import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { LocateControl } from "leaflet.locatecontrol";

import "leaflet.locatecontrol/dist/L.Control.Locate.css";

export default function UserLocation({ mapViewState, setMapViewState }) {

    const map = useMap();

    useEffect(() => {

        const locateControl = new LocateControl({
            position: 'bottomleft',
            cacheLocation: true,
            initialZoomLevel: 13,
            locateOptions: {
                enableHighAccuracy: true
            },
            clickBehavior: {
                inView: 'stop',
                outOfView: 'setView',
                inViewNotFollowing: 'setView'
            }
        });

        locateControl.addTo(map);

        map.on('locationfound', (e) => {
            setMapViewState({ ...mapViewState, currentLocation: e.latlng });
        });

        locateControl.start();

        return () => {
            locateControl.remove();
        }

    }, [])

    return null;
}