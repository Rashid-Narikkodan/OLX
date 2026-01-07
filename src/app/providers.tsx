import { ReactNode } from "react";
import { AuthProvider } from "../context/AuthContext";
import { FavoritesProvider } from "../context/FavoritesContext";
import { ThemeProvider } from "../context/ThemeContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
};
