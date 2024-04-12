import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInUserWithEmailandPassword,
} from "firebase/auth";

export const doCreateUserWithEmailandPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInUserWithEmailandPassword = async (email, password) => {
  return signInUserWithEmailandPassword(auth, email, password);
};
