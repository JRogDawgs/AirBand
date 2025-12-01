import { ThemeProvider as TP } from "@react-navigation/native";
import { theme } from "./index";

export function ThemeProvider({ children }) {
  return (
    <TP
      value={{
        colors: {
          background: theme.colors.background,
          card: theme.colors.surface,
          text: theme.colors.text,
          border: theme.colors.textMuted,
          primary: theme.colors.primary,
        },
      }}
    >
      {children}
    </TP>
  );
}

