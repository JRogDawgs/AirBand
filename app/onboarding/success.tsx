import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme";

export default function Success() {
  return (
    <LinearGradient
      colors={[theme.colors.primaryBlue, "#000"]}
      style={styles.container}
    >
      <Text style={styles.title}>You're Ready!</Text>
      <Text style={styles.subtitle}>Calibration complete.</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { color: theme.colors.text, fontSize: 36, fontWeight: "800" },
  subtitle: { color: theme.colors.textMuted, marginTop: 10, fontSize: 18 }
});

