import { Platform } from "react-native";
import { Camera } from "expo-camera";

export async function requestCameraAccess(): Promise<boolean> {
  // Mobile (iOS / Android): keep REAL permissions
  if (Platform.OS !== "web") {
    console.log("DEBUG → requestCameraAccess: mobile platform", Platform.OS);
    const { status } = await Camera.requestCameraPermissionsAsync();
    const granted = status === "granted";
    console.log("DEBUG → mobile camera status:", status, "granted?", granted);
    return granted;
  }

  // WEB: TEMP DEV BEHAVIOR
  console.log("DEBUG → requestCameraAccess: web platform");

  // If mediaDevices is missing, log and bypass
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    console.warn(
      "DEBUG → navigator.mediaDevices.getUserMedia unavailable — bypassing camera permission on web (DEV ONLY)"
    );
    return true; // DEV BYPASS
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    console.log("DEBUG → getUserMedia success on web, tracks:", stream.getTracks().length);
    // Stop all tracks immediately; we just needed permission
    stream.getTracks().forEach((track) => track.stop());
    return true;
  } catch (error) {
    console.error("DEBUG → getUserMedia error on web:", error);
    console.warn(
      "DEBUG → Treating camera as granted on web for DEV so you can continue building flows."
    );
    return true; // DEV BYPASS EVEN ON ERROR (web only)
  }
}
