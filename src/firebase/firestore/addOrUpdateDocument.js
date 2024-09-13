import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import firebase_app from "../config";

const db = getFirestore(firebase_app);

const addOrUpdateDocument = async (collectionName, documentId, data) => {
    try {
        const docRef = doc(db, collectionName, documentId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            // Update the document by appending data to an array
            await updateDoc(docRef, {
                comentarios: arrayUnion(data) // Assuming you are adding to "comentarios" array
            });
        } else {
            // Create the document with an initial array
            await setDoc(docRef, {
                comentarios: [data] // Assuming you are adding to "comentarios" array
            });
        }
    } catch (error) {
        console.error("Error adding or updating document: ", error);
    }
};

export default addOrUpdateDocument;