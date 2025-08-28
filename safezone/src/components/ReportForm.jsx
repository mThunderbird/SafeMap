import { useEffect, useState, useRef } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp, GeoPoint } from "firebase/firestore";

import "../styles/reportForm.css";

export default function ReportForm({mapViewState, setMapViewState}) {

    // Function to get current local datetime in format needed for datetime-local input
    const getCurrentLocalDateTime = () => {
        const now = new Date();
        const localTime = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));
        return localTime.toISOString().slice(0, 16);
    };

    // Keep a ref to always have the latest state
    const mapViewStateRef = useRef(mapViewState);
    
    // Update the ref whenever mapViewState changes
    useEffect(() => {
        mapViewStateRef.current = mapViewState;
    }, [mapViewState]);

    // State to hold form data
    const [formData, setFormData] = useState({
        category: "",
        description: "",
        selectedDateTime: getCurrentLocalDateTime()
    });

    const [buttonForMapText, setButtonForMapText] = useState("Select on map");

    const [locationSelectionState, setLocationSelectionState] = useState("map");

    useEffect(() => {
        
        if(mapViewState.isReporting)
        {
            if(mapViewState.currentLocation)
                setLocationSelectionState("current");
            else
                setLocationSelectionState("map");
        }

    }, [mapViewState.isReporting]);

    useEffect(() => {
        if (locationSelectionState === "map" && mapViewState.selectedLocation !== null) {
            setButtonForMapText("Selected: " + mapViewState.selectedLocation.lat.toFixed(4) + ", " + mapViewState.selectedLocation.lng.toFixed(4));
        }
    }, [locationSelectionState, mapViewState.selectedLocation]);

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted with data:", formData);

        
        try
        {
            let loc = null;
            const currentMapViewState = mapViewStateRef.current;
            if(locationSelectionState === "current"
                && currentMapViewState.currentLocation)
                loc = currentMapViewState.currentLocation;
            else if(locationSelectionState === "map" && currentMapViewState.selectedLocation)
                loc = currentMapViewState.selectedLocation;

            const docRef = await addDoc(collection(db, "reports"), {
                ...formData,
                timestamp: Timestamp.fromDate(new Date(formData.selectedDateTime)),
                location: new GeoPoint(loc.lat, loc.lng)
            });
            console.log("Report submitted with ID:", docRef.id);
            
            setMapViewState(prevState => ({ ...prevState, selectedLocation: null, isReporting: false, isSelectingOnMap: false })); // Clear the selected location and close the report form after submission
        }
        catch (error) 
        {
            console.error("Error submitting report:", error);
            alert("There was an error submitting your report. Please try again later.");
            return;
        }

    }

    return (
        <form className="report-form" onSubmit={handleSubmit}>
            <select 
            name="category"
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
            >
                <option value={""} defaultValue={""}>Categorize the incident</option>
                <option value="Harassment">Harassment</option>
                <option value="Sexual harassment">Sexual Harassment</option>
                <option value="Mugging">Mugging</option>
                <option value="Gang activity">Gang activity</option>
                <option value="Drunk crowd">Drunk crowd</option>
                <option value="Other suspicious activity">Other suspicious activity</option>
            </select>
            <textarea
                name="description"
                onChange={(e) => { setFormData({...formData, description: e.target.value})}}
                placeholder="Tell us what happened..."
            />            
            <div className="location-selection">
                <div style={{ background: locationSelectionState === "current" ? "#67b1ff86" : "lightgray" }} 
                onClick={() => {
                    if(mapViewState.currentLocation)
                    {
                        setLocationSelectionState("current")
                        setButtonForMapText("Select on map")
                        setMapViewState(prevState => ({ ...prevState, selectedLocation: null, isSelectingOnMap: false }))
                    }
                    else
                        alert("Current location is not available. Try adjusting permissions and use the location button on the bottom left!");
                }}>Use current location</div>
                <div style={{ background: locationSelectionState === "map" ? "#67b1ff86" : "lightgray" }} 
                onClick={() => {
                    setLocationSelectionState("map")
                    setButtonForMapText("Click on the map to select a location")
                    setMapViewState(prevState => ({ ...prevState, isSelectingOnMap: true }))
                }}>{buttonForMapText}</div>
            </div>

            <div className="timeDateSelection">
                <label htmlFor="datetime">When did this incident occur?</label>
                <input
                    type="datetime-local"
                    id="datetime"
                    name="datetime"
                    value={formData.selectedDateTime}
                    onChange={(e) => setFormData({ ...formData, selectedDateTime: e.target.value })}
                    max={getCurrentLocalDateTime()} // Prevent future dates
                    required
                />
            </div>

            <button type="submit">
                Submit Report
            </button>

        </form>
        
    )
}
