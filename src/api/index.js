import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const formatName = (name) => {
    return name.replace(/\s/g, '-').toLowerCase()
}

export const unFormatName = (name) => {
    return name.replace(/\s/g, ' ')
}

export const addAttendee = ({ postData, setIsLoading, setIsSuccess, toast }) => {
    setIsLoading(true);
    const attendeeDbRef = firebase.database().ref(`attendees`);
    attendeeDbRef.push({
        ...postData,
        createdDate: new Date().toISOString(),
    }).then(() => {
        console.log('success');
        setIsLoading(false);
        setIsSuccess(true);
        if (postData.attending) {
            toast({
                title: "You're confirmed!",
                description: "We've confirmed you're coming to the wedding.",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
        }
        else {
            toast({
                title: "Hope to see you soon!",
                description: "We've confirmed you're not able to make it to the wedding.",
                status: "info",
                duration: 9000,
                isClosable: true,
            })
        }

    })
        .catch(() => {
            toast({
                title: "Sorry!",
                description: "An error occured, please try again later.",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
            setIsLoading(false);
        })
    // const rawAttendeeDbRef = firebase.database().ref(`attendees-list/${formatName(postData.name)}`);
    // rawAttendeeDbRef.set(formatName(postData.name));
    // if (postData.hasPlusOne) {
    //     const rawAttendeeDbRefPlusOne = firebase.database().ref(`attendees-list/${formatName(postData.plusOneName)}`);
    //     rawAttendeeDbRefPlusOne.set(formatName(postData.plusOneName));
    // }
}

export const getAttendees = ({ setAttendees }) => {
    const attendeeRef = firebase.database().ref(`attendees`);
    attendeeRef.on('value', (snapshot) => {
        const snapshotValue = snapshot.val();
        setAttendees(snapshotValue);
    });
}