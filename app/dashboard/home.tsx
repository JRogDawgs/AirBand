import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme/index";

export default function DashboardHome() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.gradients.goldBorder.start, theme.gradients.goldBorder.end]}
        style={styles.headerBorder}
      >
        <View style={styles.headerInner}>
          <Text style={styles.logo}>AIRBAND</Text>
        </View>
      </LinearGradient>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push("/game/camera-permissions")}
      >
        <Text style={styles.primaryText}>Play AirBand</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.push("/game/camera-permissions")}
      >
        <Text style={styles.secondaryText}>Practice Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 80,
    alignItems: "center",
  },

  headerBorder: {
    width: "95%",
    padding: 3,
    borderRadius: 18,
    marginBottom: 40,
  },

  headerInner: {
    backgroundColor: theme.colors.surface,
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: "center",
  },

  logo: {
    color: theme.colors.text,
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: 2,
  },

  primaryButton: {
    backgroundColor: theme.colors.primaryBlue,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: "70%",
    alignItems: "center",
    marginBottom: 20,
  },

  primaryText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  secondaryButton: {
    backgroundColor: theme.colors.surfaceAlt,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: "70%",
    alignItems: "center",
  },

  secondaryText: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: "600",
  },
});
