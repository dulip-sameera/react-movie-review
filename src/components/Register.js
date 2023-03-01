import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "../firebase/firebase.config";
import { signInUser } from "../firebase/signInUser";
import { signOutUser } from "../firebase/signOutUser";
import { login, logout, userSelector } from "../store/user.slice";

const Register = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          login({
            name: currentUser.displayName,
            id: currentUser.uid,
          })
        );

        try {
          setDoc(doc(db, "users", currentUser.uid), {
            name: currentUser.displayName,
            email: currentUser.email,
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const handleLogOut = async () => {
    await signOutUser();
    dispatch(logout());
  };

  return (
    <div className="flex text-white mt-4 text-xs sm:text-lg sm:mt-0">
      {user ? (
        <button
          className="py-1 px-2 bg-white text-orange sm:hover:cursor-pointer sm:hover:bg-white sm:hover:text-lightOrange sm:hover:border-white rounded-md transition-all duration-300"
          onClick={handleLogOut}
        >
          {user.name}
        </button>
      ) : (
        <button
          className="py-1 px-2 sm:hover:cursor-pointer sm:hover:bg-white sm:hover:text-orange sm:hover:border-white sm:hover:rounded-md transition-all sm:duration-300 active:bg-white active:text-orange active:border-white active:rounded-md duration-100"
          onClick={signInUser}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default Register;
