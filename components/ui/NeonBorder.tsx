import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme/index";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function NeonBorder({ children, style }: Props) {
  return (
    <LinearGradient
      colors={theme.gradients.neonBluePink}
      style={[styles.wrapper, style]}
    >
      <View style={styles.inner}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 3,
    borderRadius: theme.borders.radius.lg,
  },
  inner: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borders.radius.lg,
  },
});

export default NeonBorder;

