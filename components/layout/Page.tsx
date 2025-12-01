import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, ViewStyle, View } from "react-native";
import { theme } from "@/theme";

type PageProps = {
  children: ReactNode;
  style?: ViewStyle;
};

export default function Page({ children, style }: PageProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },
});

