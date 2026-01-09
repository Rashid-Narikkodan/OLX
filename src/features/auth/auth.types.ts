import type { User } from "firebase/auth";
import type { UserCredential } from "firebase/auth";
export interface AuthPageProps{
    onClose:()=>void
}

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  openLogin:boolean;
  setLogin:(val:boolean)=>void
  loginWithGoogle: () => Promise<UserCredential>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};