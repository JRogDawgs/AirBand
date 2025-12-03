import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import AnimatedWaveBackground from "@/components/backgrounds/AnimatedWaveBackground";
import { theme } from "@/theme/index";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function ABScreen({ children, style }: Props) {
  return (
    <AnimatedWaveBackground>
      <View style={[styles.container, style]}>{children}</View>
    </AnimatedWaveBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
  },
});

export default ABScreen;
