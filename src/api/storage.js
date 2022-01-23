import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export const getPictures = (setImages) => {
    var storage = getStorage();
    var storageRef = ref(storage, 'images');
    const images = []
    listAll(storageRef)
        .then(({ items }) => {
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