import { getDocs } from "firebase/firestore";

export default async function fetchDocsConditionally(query) {
  const result = [];
  if (query) {
    try {
      const response = await getDocs(query);
      response.forEach((doc) => result.push({ id: doc.id, ...doc.data() }));
    } catch (err) {
      console.log(err);
    }
  }

  return result;
}
