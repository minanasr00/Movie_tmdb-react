
import { auth } from './config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    type UserCredential,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";

export async function signIn( email : string , password : string) : Promise<UserCredential> {
    return signInWithEmailAndPassword(auth , email , password )
}

export async function signUp( email : string , password : string) : Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth , email , password )
}

const googleProvider = new GoogleAuthProvider()

export async function signinWithGoogle() : Promise<UserCredential> {
    return await signInWithPopup(auth, googleProvider)
}

export const handleSignOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};