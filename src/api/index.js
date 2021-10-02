import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

export const addAttendee = ({ postData, setIsLoading, setIsSuccess, toast }) => {
    setIsLoading(true);
    var attendeeDbRef = firebase.database().ref(`attendees`);
    attendeeDbRef.push({ ...postData, createdDate: new Date().toISOString() }).then(() => {
        console.log('success');
        setIsLoading(false);
        setIsSuccess(true);
        toast({
            title: "You're confirmed!",
            description: "We've confirmed you're coming to the wedding.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
    });
}

export const getAttendees = ({ setAttendees }) => {
    const attendeeRef = firebase.database().ref(`attendees`);
    attendeeRef.once('value', (snapshot) => {
        const snapshotValue = snapshot.val();
        setAttendees(snapshotValue);
    });
}