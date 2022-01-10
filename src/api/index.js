import { initializeApp } from "firebase/app"
import { collection, getDocs, getFirestore, query, where, setDoc, doc } from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

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

// export const addAttendee = ({ postData, setIsLoading, setIsSuccess, toast }) => {
//     setIsLoading(true);
//     const attendeeDbRef = firebase.database().ref(`attendees`);
//     attendeeDbRef.push({
//         ...postData,
//         createdDate: new Date().toISOString(),
//     }).then(() => {
//         console.log('success');
//         setIsLoading(false);
//         setIsSuccess(true);
//         if (postData.attending) {
//             toast({
//                 title: "You're confirmed!",
//                 description: "See ya on the dance floor!",
//                 status: "success",
//                 duration: 9000,
//                 isClosable: true,
//             })
//         }
//         else {
//             toast({
//                 title: "Hope to see you soon!",
//                 description: "We've confirmed you're not able to make it to the wedding.",
//                 status: "info",
//                 duration: 9000,
//                 isClosable: true,
//             })
//         }

//     })
//         .catch(() => {
//             toast({
//                 title: "Sorry!",
//                 description: "An error occured, please try again later.",
//                 status: "error",
//                 duration: 9000,
//                 isClosable: true,
//             })
//             setIsLoading(false);
//         })
//     // const rawAttendeeDbRef = firebase.database().ref(`attendees-list/${formatName(postData.name)}`);
//     // rawAttendeeDbRef.set(formatName(postData.name));
//     // if (postData.hasPlusOne) {
//     //     const rawAttendeeDbRefPlusOne = firebase.database().ref(`attendees-list/${formatName(postData.plusOneName)}`);
//     //     rawAttendeeDbRefPlusOne.set(formatName(postData.plusOneName));
//     // }
// }

// export const getAttendees = ({ setAttendees }) => {
//     const attendeeRef = firebase.database().ref(`attendees`);
//     attendeeRef.on('value', (snapshot) => {
//         const snapshotValue = snapshot.val();
//         setAttendees(snapshotValue);
//     });
// }

export const getPictures = (setImages) => {
    var storage = getStorage();
    var storageRef = ref(storage, 'images');
    const images = []
    listAll(storageRef)
        .then(({ items }) => {
            // const urls = items.map(async (item) => {
            //     const url = await item.getDownloadURL();
            //     images.push(url);
            //     return { url };
            // });
            setImages(items);
        })
        .catch((error) => {
            console.log(error)
            debugger
            // Handle any errors
        });
    return images;
}

export const getImage = async (url) => {
    const storage = getStorage();
    const imageUrl = await getDownloadURL(ref(storage, url));
    return imageUrl;
}

export const getInvite = async () => {
    // const q = query(collection(db, "attendees"), where("confirmed", "==", true));
    // const querySnapshot = await getDocs(q);
    // console.log(querySnapshot)
    // querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    // });
    const citiesRef = collection(db, "attendees");

    await setDoc(doc(citiesRef, "SF"), {
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"]
    });
    const q = query(citiesRef, where("guests", "array-contains-any", ["jimfreymiller"]));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });

}