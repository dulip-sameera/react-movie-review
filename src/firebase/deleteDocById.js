import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase.config";

export default async function deleteDocById(collection, id) {
  try {
    await deleteDoc(doc(db, collection, id));
    console.log("Document with ID ", id, " successfully deleted!");
  } catch (err) {
    console.log("Error Deleting document: ", err);
  }
}
