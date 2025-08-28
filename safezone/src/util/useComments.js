import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase'

export default function useComments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "comments"), (snapshot) => {
        const newComments = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setComments(newComments);
        });

        return () => unsub();
    }, []);

    return comments;
}