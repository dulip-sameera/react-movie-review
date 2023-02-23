import { useState, useEffect } from "react";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const useFirestoreData = (collectionPath, queryConstraints = []) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = collection(db, collectionPath);

    // Apply query constraints
    const constraints = queryConstraints.map((constraint) =>
      where(constraint.field, constraint.operator, constraint.value)
    );
    const q = query(collectionRef, ...constraints);

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
  }, [collectionPath, queryConstraints]);

  return [data, isLoading];
};

export default useFirestoreData;
