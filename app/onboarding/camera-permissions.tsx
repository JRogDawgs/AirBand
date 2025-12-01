import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import { theme } from "@/theme";

export default function CameraPermissionsScreen() {
  const router = useRouter();
  const [status, requestPermission] = Camera.useCameraPermissions();

  const askPermission = async () => {
    const res = await requestPermission();
    if (res.granted) {
      router.push("/onboarding/lighting");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Access Needed</Text>

      <Text style={styles.subtitle}>
        AirBand uses your camera to track hand movement and instrument actions.
      </Text>

      <TouchableOpacity onPress={askPermission} style={styles.buttonWrapper}>
        <LinearGradient
          colors={[theme.gradients.goldBorder.start, theme.gradients.goldBorder.end]}
          style={styles.buttonBorder}
        >
          <View style={styles.buttonInner}>
            <Text style={styles.buttonText}>Enable Camera</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {status && status.granted === false && (
        <Text style={styles.warning}>Permission denied. Please enable in settings.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 22,
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
    marginBottom: 30,
  },
  buttonWrapper: {
    width: "70%",
  },
  buttonBorder: {
    padding: 3,
    borderRadius: 16,
  },
  buttonInner: {
    backgroundColor: theme.colors.surface,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: "700",
  },
  warning: {
    color: theme.colors.accentOrange,
    marginTop: 20,
    fontSize: 14,
  },
});

