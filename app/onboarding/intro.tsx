import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "@/theme";
import Page from "@/components/layout/Page";

import AirBandLogo from "@/assets/images/AirBand-Logo.png";

export default function IntroScreen() {
  const fade = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const goNext = () => {
    router.push("/onboarding/camera-permissions");
  };

  return (
    <LinearGradient
      colors={[theme.colors.primaryBlue, "#000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <Animated.View style={[styles.center, { opacity: fade }]}>
        <Image source={AirBandLogo} style={styles.logo} resizeMode="contain" />

        <TouchableOpacity onPress={goNext} style={styles.buttonWrapper}>
          <LinearGradient
            colors={[theme.gradients.goldBorder.start, theme.gradients.goldBorder.end]}
            style={styles.buttonBorder}
          >
            <View style={styles.buttonInner}>
              <Animated.Text style={styles.buttonText}>Tap to Begin</Animated.Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 320,
    height: 320,
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
    fontSize: 20,
    fontWeight: "700",
  },
});

