import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "@/services/firebase";
import { logout as logoutService, signInWithGoogle as loginWithGoogle, sendEmailLoginLink } from "@/features/auth/auth.service";
import { AuthContext } from "./AuthContext";
import type { AuthContextType } from "@/features/auth/auth.types";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    user,
    loading,
    logout: logoutService,
    loginWithGoogle:loginWithGoogle,
    loginWithEmail: sendEmailLoginLink ,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
