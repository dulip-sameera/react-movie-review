import { useState, useEffect } from "react";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const useFirestoreDataById = (collectionPath, documentIds = []) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = collection(db, collectionPath);

    // Use `whereIn` method to retrieve specific documents by ID
    const q = query(collectionRef, where("__name__", "in", documentIds));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedData = [];
      snapshot.forEach((doc) => {
        fetchedData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setData(fetchedData);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [collectionPath, documentIds]);

  return [data, isLoading];
};

export default useFirestoreDataById;
