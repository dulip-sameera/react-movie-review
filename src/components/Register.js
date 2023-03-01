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
    <div className="hidden md:flex gap-4 text-white text-lg">
      {user ? (
        <button
          className="py-1 px-2 bg-white text-orange hover:cursor-pointer hover:bg-white hover:text-lightOrange hover:border-white rounded-md transition-all duration-300"
          onClick={handleLogOut}
        >
          {user.name}
        </button>
      ) : (
        <button
          className="py-1 px-2 hover:cursor-pointer hover:bg-white hover:text-orange hover:border-white hover:rounded-md transition-all duration-300"
          onClick={signInUser}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default Register;
