import { useMapEvents } from "react-leaflet";

export default function LocationMarker({ onSelect }) {
    const map = useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            onSelect({ lat, lng });
        },
    });

    return null; // This component does not render anything itself
}