import type { ReactNode } from "react";
import { AuthProvider } from "../context/AuthProvider";
import { WishProvider } from "@/context/WishProvider";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <WishProvider>
        {children}
      </WishProvider>
    </AuthProvider>
  );
};
