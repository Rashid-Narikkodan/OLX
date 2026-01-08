import type { User } from "firebase/auth";

export interface AuthPageProps{
    onClose:()=>void
}


export type AuthContextType = {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
};
