import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { LocateControl } from "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.css";

export default function UserLocation() {

    const map = useMap();

    useEffect(() => {

        console.log(L);
        const locateControl = new LocateControl({
            position: 'topright',
            flyTo: true,
            keepCurrentZoomLevel: true,
            drawCircle: true,
            drawMarker: true,
            showCompass: true
        });

        locateControl.addTo(map);

        return () => {
            locateControl.remove();
        }

    }, [])

    return null;
}