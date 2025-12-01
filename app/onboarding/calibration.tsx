import { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme/index";
import HandOverlay from "@/components/overlay/HandOverlay";
import { useHandTracking } from "@/hooks/useHandTracking";
import { isHandInsideCircle } from "@/utils/gestures";

export default function CalibrationScreen() {
  const router = useRouter();

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera | null>(null);
  const [isReady, setIsReady] = useState(false);

  const landmarks = useHandTracking(cameraRef);

  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 0.7, duration: 600, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 600, useNativeDriver: true })
      ])
    ).start();
  }, []);

  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    }
  }, []);

  const onContinue = () => {
    router.push("/onboarding/success");
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        onCameraReady={() => setIsReady(true)}
      />

      <View style={styles.overlay}>
        <Animated.View style={[styles.circle, { transform: [{ scale: pulse }] }]} />

        <HandOverlay points={landmarks} />

        <Text style={styles.title}>Calibration</Text>
        <Text style={styles.subtitle}>Hold your dominant hand inside the circle.</Text>

        {isReady && isHandInsideCircle(landmarks, 180, 320, 130) && (
          <TouchableOpacity onPress={onContinue} style={styles.buttonWrapper}>
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
  container: { flex: 1, backgroundColor: theme.colors.background },
  camera: { flex: 1 },
  overlay: {
    position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
    alignItems: "center", justifyContent: "center"
  },
  circle: {
    width: 260, height: 260, borderRadius: 130,
    borderWidth: 6, borderColor: theme.colors.surface,
    marginBottom: 20
  },
  title: { color: theme.colors.text, fontSize: 32, fontWeight: "700", marginBottom: 10 },
  subtitle: {
    color: theme.colors.textMuted,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 25
  },
  buttonWrapper: { width: "70%" },
  buttonBorder: { padding: 3, borderRadius: 16 },
  buttonInner: {
    backgroundColor: theme.colors.surface,
    paddingVertical: 14, borderRadius: 14, alignItems: "center"
  },
  buttonText: { color: theme.colors.text, fontSize: 20, fontWeight: "700" }
});

