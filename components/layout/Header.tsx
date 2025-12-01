import { Image, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme/index";

import AirBandTextLogo from "@/assets/images/AirBand-Text-Only-Logo.png";

export default function Header() {
  const g = theme.gradients.goldBorder;

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[g.start, g.end]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.border}
      >
        <View style={styles.inner}>
          <Image
            source={AirBandTextLogo}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: theme.spacing.lg,
  },
  border: {
    borderRadius: 16,
    padding: 2, // gold border thickness
  },
  inner: {
    borderRadius: 14,
    backgroundColor: theme.colors.surface,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 40,
  },
});

