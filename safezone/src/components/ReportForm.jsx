import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp, GeoPoint } from "firebase/firestore";

import "../styles/reportForm.css";

export default function ReportForm({mapViewState, setMapViewState}) {

    // State to hold form data
    const [formData, setFormData] = useState({
        category: "",
        description: ""
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

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted with data:", formData);

        setMapViewState({ ...mapViewState, isReporting: false }); // Close the report form after submission

        try
        {
            const docRef = await addDoc(collection(db, "reports"), {
                ...formData,
                timestamp: Timestamp.now(),
                location: new GeoPoint(mapViewState.selectedLocation.lat, mapViewState.selectedLocation.lng)
            });
            console.log("Report submitted with ID:", docRef.id);

            setMapViewState({ ...mapViewState, selectedLocation: null }); // Clear the selected location after submission
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
                <option value="" disabled selected>Select your option</option>
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
                placeholder="Optional description of the incident"
            />            
            <div className="location-selection">
                <div style={{ background: locationSelectionState === "current" ? "#67b1ff86" : "lightgray" }} 
                onClick={() => {
                    if(mapViewState.currentLocation)
                    {
                        setLocationSelectionState("current")
                        setButtonForMapText("Select on map")
                        setMapViewState({ ...mapViewState, isSelectingOnMap: false })
                    }
                    else
                        alert("Current location is not available. Try adjusting permissions and use the location button on the bottom left!");
                }}>Use current location</div>
                <div style={{ background: locationSelectionState === "map" ? "#67b1ff86" : "lightgray" }} 
                onClick={() => {
                    setLocationSelectionState("map")
                    setButtonForMapText("Click on the map to select a location")
                    setMapViewState({ ...mapViewState, isSelectingOnMap: true })
                }}>{buttonForMapText}</div>
            </div>
            <button type="submit">
                Submit Report
            </button>

        </form>
        
    )
}
