import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import * as cam from "@mediapipe/camera_utils";
import { Hands } from "@mediapipe/hands";

export function useHandTracking(cameraRef: any) {
  const [landmarks, setLandmarks] = useState<any[]>([]);
  const mpCamera = useRef<any>(null);

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.6,
      modelComplexity: 1
    });

    hands.onResults((results) => {
      if (results.multiHandLandmarks) {
        setLandmarks(results.multiHandLandmarks[0]);
      } else {
        setLandmarks([]);
      }
    });

    if (cameraRef.current) {
      mpCamera.current = new cam.Camera(cameraRef.current, {
        onFrame: async () => {
          await hands.send({ image: cameraRef.current });
        },
        width: 640,
        height: 480,
      });

      mpCamera.current.start();
    }
  }, [cameraRef]);

  return landmarks;
}

