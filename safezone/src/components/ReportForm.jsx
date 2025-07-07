import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp, GeoPoint } from "firebase/firestore";

import "../App.css";

export default function ReportForm() {


    // State to hold form data
    const [formData, setFormData] = useState({
        category: "",
        description: ""
    });

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted with data:", formData);


        try
        {
            const docRef = await addDoc(collection(db, "reports"), {
                ...formData,
                timestamp: Timestamp.now(),
                location: new GeoPoint(42.6977, 23.3219) // Placeholder for location
            });
            console.log("Report submitted with ID:", docRef.id);
            alert("Your report has been submitted successfully.");
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
            <button 
                type="submit"
                >
                    Submit Report
            </button>
        </form>
        
    )
}
