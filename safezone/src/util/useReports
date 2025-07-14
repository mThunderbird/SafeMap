import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase'

export default function useReports() {
    const [reps, setReps] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "reports"), (snapshot) => {
        const newReports = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setReps(newReports);
        });

        return () => unsub();
    }, []);

    return reps;
}