import { collection, getDocs, query, where } from "firebase/firestore";
import extractData from "../utils/extractData";
import { db } from "./firebase.config";

export default async function fetchReviewData(movieId, currentUser) {
  //   console.log(movieId, currentUser);
  // fetch reviews that specific to a movie
  const reviewsSnap = await getDocs(
    query(collection(db, "reviews"), where("movieId", "==", movieId))
  );
  const reviews = [];

  reviewsSnap.forEach((doc) => {
    reviews.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  //   console.log(reviews);
  //   return empty array if there are no reviews
  if (reviews.length <= 0) return [];

  // extract all the users ids in the reviews
  let userIds = [];
  userIds = extractData(reviews, "userId");
  //   console.log(userIds);
  // fetch all the users who added those reviews
  const userSnap = await getDocs(
    query(collection(db, "users"), where("__name__", "in", userIds))
  );
  const users = [];
  userSnap.forEach((doc) => {
    users.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  // make a new array to store review data
  const reviewData = [];
  //   console.log(noOfReviewsDisplayed);
  // if currentUser is present
  if (currentUser) {
    // extract currentUser's review
    const currentUserReview = reviews.find(
      (review) => review.userId === currentUser.id
    );
    // console.log(currentUserReview);
    // create a new review object that has the current user's review
    // and add it to review data array
    currentUserReview &&
      reviewData.push({
        name: currentUser.name,
        userId: currentUser.id,
        text: currentUserReview.text,
        reviewId: currentUserReview.id,
      });
  }
  //   console.log(reviewData);
  reviews.forEach((review) => {
    // if the review is the current user's review skip it (it's already added)
    if (currentUser && review.userId === currentUser.id) return;
    const reviewUser = users.find((e) => e.id === review.userId);

    reviewData.push({
      name: reviewUser.name,
      userId: reviewUser.id,
      text: review.text,
      reviewId: review.id,
    });
  });
  //   console.log(reviewData);
  //   return the review array
  return reviewData;
}
