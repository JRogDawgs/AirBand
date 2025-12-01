import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Camera } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme";

export default function LightingScreen() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [brightness, setBrightness] = useState(0);

  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBrightness(Math.random());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getLightingColor = () => {
    if (brightness < 0.3) return "#BA0C2F"; // too dark → Georgia Red
    if (brightness < 0.6) return "#FF8200"; // middle → Tennessee Orange
    return "#C99700"; // good → Notre Dame Gold
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        onCameraReady={() => console.log("Camera ready")}
        onMountError={(e) => console.log("Camera error:", e)}
      />

      <View style={styles.overlay}>
        <LinearGradient
          colors={[getLightingColor(), "transparent"]}
          style={styles.gradientRing}
        />
        <Text style={styles.text}>Adjust your lighting</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  gradientRing: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 6,
    borderColor: theme.colors.surface,
    marginBottom: 20,
  },
  text: {
    color: theme.colors.text,
    fontSize: 22,
    fontWeight: "700",
  },
});

