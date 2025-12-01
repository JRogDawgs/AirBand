import { Text as RNText } from "react-native";
import { theme } from "@/theme";

export default function Text({ children, style, ...rest }) {
  return (
    <RNText
      style={[{ color: theme.colors.text, fontSize: theme.typography.body.fontSize }, style]}
      {...rest}
    >
      {children}
    </RNText>
  );
}

