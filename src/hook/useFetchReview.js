import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase.config";
import extractData from "../utils/extractData";

export default function useFetchReview(movieId) {
  const [data, setData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // get the reviews
    const queryReview = query(
      collection(db, "reviews"),
      where("movieId", "==", movieId)
    );

    const unSubReview = onSnapshot(queryReview, (snapShot) => {
      const fetchReview = [];
      snapShot.forEach((doc) => {
        fetchReview.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setReviews(fetchReview);
    });

    let userIds;
    if (reviews.length > 0) {
      userIds = extractData(reviews, "userId");
    } else {
      userIds = ["defaultId"];
    }

    const queryUsers = query(
      collection(db, "users"),
      where("__name__", "in", userIds)
    );

    const unSubUsers = onSnapshot(queryUsers, (snapShot) => {
      const fetchUsers = [];
      snapShot.forEach((doc) => {
        if (doc.id !== "defaultId") {
          fetchUsers.push({
            id: doc.id,
            ...doc.data(),
          });
        }
      });
      setUsers(fetchUsers);
    });

    if (users.length > 0 && reviews.length > 0) {
      const list = reviews.map((review) => {
        // console.log(users);
        let user = users.find(({ id }) => id === review.userId);

        return {
          userId: user.id,
          name: user.name,
          text: review.text,
          count: review.count,
        };
      });

      setData(list);
    }

    return () => {
      unSubReview();
      unSubUsers();
    };
  }, [movieId, reviews, users]);

  return { data };
}
