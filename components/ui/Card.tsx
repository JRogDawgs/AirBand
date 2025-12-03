import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { theme } from "@/theme/index";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function ABCard({ children, style }: Props) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.borders.radius.lg,
    borderWidth: theme.borders.width.thin,
    borderColor: theme.colors.gold,
    ...theme.shadows.soft,
  },
});

export default ABCard;

