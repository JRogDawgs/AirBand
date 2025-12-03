import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { theme } from "@/theme/index";
import { requestCameraAccess } from "@/utils/camera";
import { ABButton } from "@/components/ui/Button";

console.log("DEBUG → camera-permissions screen mounted");

export default function CameraPermissions() {
  async function handleEnable() {
    console.log("DEBUG → Enable button clicked");

    const granted = await requestCameraAccess();
    console.log("DEBUG → Camera granted?", granted);

    if (granted) {
      console.log("DEBUG → Navigating to /game/lighting");
      router.push("/game/lighting");
    } else {
      console.log("DEBUG → Camera DENIED or failed");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Access Needed</Text>
      <Text style={styles.subtitle}>
        AirBand needs your camera to track motion and gameplay.
      </Text>

      <ABButton title="Enable Camera" onPress={handleEnable} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: theme.colors.text,
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },
  subtitle: {
    color: theme.colors.textMuted,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    color: theme.colors.textMuted,
    fontSize: 18,
  },
});
