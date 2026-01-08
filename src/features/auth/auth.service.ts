import { auth } from "@/services/firebase";
import {
  sendSignInLinkToEmail,
  signInWithEmailLink,
  isSignInWithEmailLink,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
  type UserCredential,
} from "firebase/auth";

/* ----------------------------------
   EMAIL LINK (PASSWORDLESS)
----------------------------------- */

const actionCodeSettings = {
  url: "http://localhost:5173/auth/complete", // update in prod
  handleCodeInApp: true,
};

export const sendEmailLoginLink = async (email: string): Promise<void> => {
  await sendSignInLinkToEmail(auth, email, actionCodeSettings);
  localStorage.setItem("emailForSignIn", email);
};

export const completeEmailLinkSignIn = async (
  link: string
): Promise<UserCredential> => {
  if (!isSignInWithEmailLink(auth, link)) {
    throw new Error("Invalid email sign-in link");
  }
  const email = localStorage.getItem("emailForSignIn");
  if (!email) {
    throw new Error("Email not found in storage");
  }
  localStorage.removeItem("emailForSignIn");
  return signInWithEmailLink(auth, email, link);
};

export const signInWithGoogle = (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const setupRecaptcha = (containerId: string): RecaptchaVerifier => {
  return new RecaptchaVerifier(auth, containerId, {
    size: "invisible",
  });
};

export const sendOtpToPhone = (
  phoneNumber: string,
  recaptcha: RecaptchaVerifier
) => {
  return signInWithPhoneNumber(auth, phoneNumber, recaptcha);
};

export const logout = (): Promise<void> => {
  return signOut(auth);
};
