import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "./firebase.config";

export const signInUser = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
