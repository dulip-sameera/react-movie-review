import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebase.config";
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
            photo: currentUser.photoURL,
          })
        );
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
    <div className="hidden sm:flex gap-4 text-white text-lg">
      {user ? (
        <button
          className="py-1 px-2 hover:cursor-pointer hover:bg-white hover:text-orange hover:border-white hover:rounded-md transition-all duration-300"
          onClick={handleLogOut}
        >
          LogOut
        </button>
      ) : (
        <button
          className="py-1 px-2 hover:cursor-pointer hover:bg-white hover:text-orange hover:border-white hover:rounded-md transition-all duration-300"
          onClick={signInUser}
        >
          LogIn
        </button>
      )}
    </div>
  );
};

export default Register;
