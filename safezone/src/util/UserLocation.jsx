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
            keepCurrentZoomLevel: true,
            drawCircle: true,
            drawMarker: true,
            flyTo: false,
            setView: false,
            locateOptions: {
                enableHighAccuracy: true
            },
            clickBehavior: {
                inView: 'setView',
                outOfView: 'setView',
                inViewNotFollowing: 'setView'
            }
        });

        locateControl._onZoomEnd = function () {
              if (this._event && this._event.getBounds) {
                this._map.fitBounds(this._event.getBounds());
              }
        }

        locateControl.addTo(map);

        map.on('locationfound', (e) => {
            if(e.latlng !== null) {
                setMapViewState(prevState => ({ ...prevState, currentLocation: e.latlng }));
                console.log("Updating user location, old - ", mapViewState);
            }
        });

        locateControl.start();

        return () => {
            locateControl.remove();
        }

    }, [])

    return null;
}