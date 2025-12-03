import React, { useEffect, useRef, useState } from "react";
import { Platform, View, StyleSheet, Text } from "react-native";
import { Camera } from "expo-camera";
import { router } from "expo-router";
import { StageBackground } from "@/components/backgrounds/StageBackground";
import { NeonBorder } from "@/components/ui/NeonBorder";
import { ABButton } from "@/components/ui/Button";
import { theme } from "@/theme/index";

export default function LightingCheck() {
  console.log("DEBUG: LightingCheck mounted");
  const [ready, setReady] = useState(false);
  console.log("DEBUG: Ready state =", ready);
  const cameraRef = useRef<Camera | null>(null);

  async function startCamera() {
    console.log("DEBUG → Requesting camera for lighting check");

    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      console.log("DEBUG → Camera denied");
      return;
    }

    setReady(true);
  }

  useEffect(() => {
    startCamera();
  }, []);

  console.log("DEBUG: StageBackground rendered");
  
  return (
    <StageBackground>
      <View style={styles.container}>
        <NeonBorder style={styles.cameraFrame}>
          {ready && Platform.OS !== "web" ? (
            <Camera
              ref={cameraRef}
              style={styles.camera}
              ratio="16:9"
            />
          ) : (
            <View style={styles.webFallback}>
              <Text style={styles.webText}>
                Camera not supported on Web. Continue to proceed.
              </Text>
            </View>
          )}
        </NeonBorder>

        <ABButton
          title="Continue"
          variant="primary"
          onPress={() => router.push("/game/success")}
          style={styles.button}
        />
      </View>
    </StageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraFrame: {
    width: "90%",
    height: "55%",
    marginBottom: theme.spacing.xl,
  },
  camera: {
    width: "100%",
    height: "100%",
    borderRadius: theme.borders.radius.lg,
  },
  button: {
    width: "80%",
  },
  webFallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borders.radius.lg,
  },
  webText: {
    color: theme.colors.text,
  },
});
