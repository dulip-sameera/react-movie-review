import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const useFetchDocument = (collection, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        setLoading(true);
        const documentRef = doc(db, collection, id);
        const documentSnapshot = await getDoc(documentRef);
        if (documentSnapshot.exists()) {
          setData({ ...documentSnapshot.data() });
        } else {
          setError(`Document with ID '${id}' not found.`);
        }
      } catch (error) {
        console.error(error);
        setError("Error fetching document.");
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [collection, id]);

  return { data, loading, error };
};

export default useFetchDocument;
