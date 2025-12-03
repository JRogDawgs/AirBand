import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme/index";
import { StyleSheet } from "react-native";

console.log("DEBUG: StageBackground component loaded");

interface Props {
  children: React.ReactNode;
}

export function StageBackground({ children }: Props) {
  console.log("DEBUG: StageBackground return executing");
  
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

