import { getFirestore, doc, updateDoc } from "firebase/firestore";
import firebase_app from "../config";

const db = getFirestore(firebase_app);

const updateDocument = async (collectionName, documentId, updatedData) => {
    try {
        const docRef = doc(db, collectionName, documentId);
        await updateDoc(docRef, updatedData); // updatedData should be an object with fields to update
    } catch (error) {
        console.error("Error updating document: ", error);
    }
};

export default updateDocument;