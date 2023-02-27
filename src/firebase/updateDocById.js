import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase.config";

export default async function updateDocById(collection, docId, data) {
  try {
    const docRef = doc(db, collection, docId);
    await updateDoc(docRef, data);
  } catch (error) {
    console.log(error);
  }
}
