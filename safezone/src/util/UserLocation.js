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
            drawCircle: false,
            drawMarker: true,
            showCompass: true,
            cacheLocation: true,
            clickBehavior: {inView: 'setView', outOfView: 'setView', inViewNotFollowing: 'setView'}
        });

        locateControl.addTo(map);
        locateControl.start();

        return () => {
            locateControl.remove();
        }

    }, [])

    return null;
}