import Map from "./Map";
import ReportForm from "./ReportForm";

import { useState } from "react";

export default function MapView() {

    const [selectedLocation, setSelectedLocation] = useState(null);

    return (
        <div className="main-container">
            <Map selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
            <ReportForm selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
        </div>
    );
}