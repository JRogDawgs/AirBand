import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import { theme } from "@/theme/index";
import AirBandTextLogo from "@/assets/images/AirBand-Text-Only-Logo.png";

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
    <LinearGradient
      colors={[theme.colors.primaryBlue, "#000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Image source={AirBandTextLogo} style={styles.logo} resizeMode="contain" />

        <Text style={styles.title}>Camera Access Needed</Text>

        <Text style={styles.subtitle}>
          AirBand uses your camera to track hand movement and instrument actions in real-time.
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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
  },
  logo: {
    width: 240,
    height: 60,
    marginBottom: 40,
  },
  title: {
    color: theme.colors.text,
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    color: theme.colors.textMuted,
    fontSize: 17,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
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
    fontSize: 20,
    fontWeight: "700",
  },
  warning: {
    color: theme.colors.accentOrange,
    marginTop: 24,
    fontSize: 15,
    textAlign: "center",
  },
});

