import { View, Text, StyleSheet } from "react-native";
import { theme } from "@/theme/index";

export default function GameSuccess() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You're ready!</Text>
      <Text style={styles.subtitle}>Calibration complete.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: 34,
    fontWeight: "700",
  },
  subtitle: {
    color: theme.colors.textMuted,
    fontSize: 18,
    marginTop: 10,
  },
});

