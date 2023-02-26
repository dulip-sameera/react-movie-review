import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const useFetchDocsConditionally = (query) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      if (query) {
        try {
          setLoading(true);
          const response = await getDocs(query);
          const result = [];
          response.forEach((doc) => result.push({ id: doc.id, ...doc.data() }));
          setData(result);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [query]);

  return [data, error, loading];
};

export default useFetchDocsConditionally;
