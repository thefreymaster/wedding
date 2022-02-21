import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getPerformance } from "firebase/performance";
import { getStorage, ref as storRef, listAll, getDownloadURL } from "firebase/storage";

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
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const perf = getPerformance(app);
const auth = getAuth();

export const signIn = () =>
  signInAnonymously(auth)
    .then((acc) => {})
    .catch((error) => {});

export const unFormatName = (name) => {
  return name.replace(/\s/g, " ");
};

export const getAttendees = (setAttendees) => {
  const db = getDatabase();
  const attendeeDbRef = ref(db, "attendees/");
  onValue(attendeeDbRef, (snapshot) => {
    const data = snapshot.val();
    setAttendees(data);
  });
};

export const setAttendee = async ({
  attendeeId,
  data,
  setIsLoading,
  setIsSuccess,
}) => {
  setIsLoading(true);
  try {
    const db = getDatabase();
    await set(ref(db, "attendees/" + attendeeId), {
      ...data,
      confirmedOn: new Date().toISOString(),
    });
    setIsLoading(false);
    setIsSuccess(true);
  } catch (error) {
    setIsLoading(false);
  }
};

export const getPictures = (setImages) => {
  var storage = getStorage();
  var storageRef = storRef(storage, 'images');
  const images = []
  listAll(storageRef)
      .then(({ items }) => {
          setImages(items);
      })
      .catch((error) => {
          console.log(error)
      });
  return images;
}

export const getImage = async (url) => {
  const storage = getStorage();
  const imageUrl = await getDownloadURL(storRef(storage, url));
  return imageUrl;
}