import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  points: { x: number; y: number; z: number }[] | null;
};

export default function HandOverlay({ points }: Props) {
  if (!points || points.length === 0) return null;

  return (
    <View style={StyleSheet.absoluteFill}>
      {points.map((p, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            {
              left: p.x * 360,
              top: p.y * 640,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    position: "absolute",
    width: 8,
    height: 8,
    backgroundColor: "gold",
    borderRadius: 4,
  },
});

