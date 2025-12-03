import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";
import { theme } from "@/theme/index";

type Variant = "primary" | "secondary" | "outline";

interface Props {
  title: string;
  onPress?: () => void;
  variant?: Variant;
  style?: ViewStyle;
}

export function ABButton({ title, onPress, variant = "primary", style }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borders.radius.md,
    alignItems: "center",
  },
  primary: {
    backgroundColor: theme.colors.surfaceAlt,
    borderWidth: 2,
    borderColor: theme.colors.goldBright,
    shadowColor: theme.colors.neonBlueSoft,
    shadowRadius: 12,
    shadowOpacity: 1,
  },
  secondary: {
    backgroundColor: theme.colors.surfaceAlt,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: theme.borders.width.thin,
    borderColor: theme.colors.goldBright,
    shadowColor: theme.colors.neonPinkSoft,
    shadowRadius: 10,
    shadowOpacity: 0.9,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: theme.colors.text,
    fontSize: theme.typography.md,
    fontWeight: "700",
  },
});

export default ABButton;
