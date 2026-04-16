import { createContext, useContext } from "react";

type ThemeContextType = {
  dark: boolean;
  setDark: (value: boolean) => void;
};

export const ThemeCtx = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeCtx);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};