import React from "react";
import { Text as RNText, StyleSheet, TextStyle } from "react-native";
import { theme } from "@/theme/index";

type Variant = "title" | "subtitle" | "body" | "label";

interface Props {
  children: React.ReactNode;
  variant?: Variant;
  style?: TextStyle;
}

export function ABText({ children, variant = "body", style }: Props) {
  return (
    <RNText style={[styles.base, styles[variant], style]}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  base: {
    color: theme.colors.text,
    fontFamily: "System",
  },
  title: {
    fontSize: theme.typography.lg,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: theme.typography.md,
    fontWeight: "600",
    color: theme.colors.textMuted,
  },
  body: {
    fontSize: theme.typography.sm,
  },
  label: {
    fontSize: theme.typography.xs,
    opacity: 0.8,
  },
});

export default ABText;
