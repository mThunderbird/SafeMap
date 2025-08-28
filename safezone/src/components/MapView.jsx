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

            <div className="welcome-section">
                <h2>Welcome to SafeZone!</h2>
                <p>
                    The map displays community-reported incidents in your area. This information helps you stay informed 
                    about your surroundings and make safer decisions when traveling.
                </p>
                <p>
                    <strong>Please note:</strong> All reports are user-generated and unverified. We encourage honest, 
                    respectful reporting to help keep our community safe.
                </p>
                <p className="disclaimer">
                    <em>Development Notice: Reports marked "fake report" are test data used to display the app's functionality.</em>
                </p>
            </div>

            <Map mapViewState={mapViewState} setMapViewState={setMapViewState}/>

            { !mapViewState.isReporting && 
            <button className="report-button" 
                onClick={() => {
                    setMapViewState(prevState => ({ ...prevState, isReporting: true }))
                }}>
                Make a report
            </button>
            }

            { mapViewState.isReporting && 
            <ReportForm mapViewState={mapViewState} setMapViewState={setMapViewState} />
            }
        </div>
    );
}