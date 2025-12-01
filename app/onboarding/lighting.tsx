import { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, Animated, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { theme } from "@/theme/index";
import { getBrightnessFromRGBA } from "@/utils/lighting";

export default function LightingScreen() {
  const router = useRouter();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [brightness, setBrightness] = useState(0.5);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    }
  }, []);

  useEffect(() => {
    // Simulate lighting sampling (real implementation would use takePictureAsync)
    const interval = setInterval(() => {
      // Gradually vary brightness for demo
      setBrightness((prev) => {
        const change = (Math.random() - 0.5) * 0.1;
        return Math.max(0, Math.min(1, prev + change));
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.7,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const getLightingColor = () => {
    if (brightness < 0.3) return "#BA0C2F"; // too dark → Georgia Red
    if (brightness < 0.65) return "#FF8200"; // middle → Tennessee Orange
    return "#C99700"; // good → Notre Dame Gold
  };

  const getLightingMessage = () => {
    if (brightness < 0.3) return "Too dark - add more light";
    if (brightness < 0.65) return "Adjust your lighting";
    return "Perfect lighting!";
  };

  const goNext = () => {
    router.push("/onboarding/calibration");
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        onCameraReady={() => console.log("Camera ready")}
        onMountError={(e) => console.log("Camera error:", e)}
      />

      <View style={styles.overlay}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <LinearGradient
            colors={[getLightingColor(), "transparent"]}
            style={styles.gradientRing}
          />
        </Animated.View>
        <Text style={styles.text}>{getLightingMessage()}</Text>

        {brightness >= 0.65 && (
          <TouchableOpacity onPress={goNext} style={styles.buttonWrapper}>
            <LinearGradient
              colors={[theme.gradients.goldBorder.start, theme.gradients.goldBorder.end]}
              style={styles.buttonBorder}
            >
              <View style={styles.buttonInner}>
                <Text style={styles.buttonText}>Continue</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        )}
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
    marginBottom: 30,
  },
  buttonWrapper: {
    width: "60%",
    marginTop: 20,
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
});

