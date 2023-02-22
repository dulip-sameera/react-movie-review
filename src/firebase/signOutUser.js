import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";

export const signOutUser = () => {
  signOut(auth);
};
