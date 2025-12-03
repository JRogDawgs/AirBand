import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { theme } from "@/theme/index";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function ABScreen({ children, style }: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
});

export default ABScreen;

