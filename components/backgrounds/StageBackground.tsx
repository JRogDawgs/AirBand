import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme/index";
import { StyleSheet } from "react-native";

interface Props {
  children: React.ReactNode;
}

export function StageBackground({ children }: Props) {
  return (
    <LinearGradient
      colors={[
        theme.colors.background,
        theme.colors.neonPurpleSoft,
        theme.colors.background,
      ]}
      style={styles.bg}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});

export default StageBackground;

