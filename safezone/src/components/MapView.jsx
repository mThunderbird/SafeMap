import Map from "./Map";
import ReportForm from "./ReportForm";

import { useEffect, useState } from "react";

export default function MapView() {


    const [mapViewState, setMapViewState] = useState({
        currentLocation: null,
        selectedLocation: null,
        isReporting: false,
        isSelectingOnMap: false
    });

    return (
        <div className="main-container">
            <Map mapViewState={mapViewState} setMapViewState={setMapViewState}/>

            { !mapViewState.isReporting && 
            <button className="report-button" 
                onClick={() => setMapViewState({ ...mapViewState, isReporting: true })}>
                Make a report
            </button>
            }

            {mapViewState.isReporting && 
            <ReportForm mapViewState={mapViewState} setMapViewState={setMapViewState} />
            }
        </div>
    );
}