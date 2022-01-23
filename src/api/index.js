import { initializeApp } from "firebase/app"
import { collection, getDocs, getFirestore, query, where, setDoc, doc } from "firebase/firestore";
import { getDatabase, ref, onValue, set } from "firebase/database";

import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export const unFormatName = (name) => {
    return name.replace(/\s/g, ' ')
}

export const getAttendees = (setAttendees) => {
    const db = getDatabase();
    const attendeeDbRef = ref(db, 'attendees/');
    onValue(attendeeDbRef, (snapshot) => {
        const data = snapshot.val();
        setAttendees(data);
        console.log(data);
    });
}

export const setAttendee = async ({ attendeeId, data, setIsLoading, setIsSuccess }) => {
    setIsLoading(true);
    try {
        const db = getDatabase();
        await set(ref(db, 'attendees/' + attendeeId), data);
        setIsLoading(false);
        setIsSuccess(true);
    } catch (error) {
        setIsLoading(false);
    }
}
