import type { ReactNode } from "react";
import { AuthProvider } from "../context/AuthProvider";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  );
};
