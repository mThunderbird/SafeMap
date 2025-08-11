import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { LocateControl } from "leaflet.locatecontrol";

import "leaflet.locatecontrol/dist/L.Control.Locate.css";

export default function UserLocation() {

    const map = useMap();

    useEffect(() => {

        const locateControl = new LocateControl({
            position: 'bottomleft',
            cacheLocation: true,
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

        return () => {
            locateControl.remove();
        }

    }, [])

    return null;
}