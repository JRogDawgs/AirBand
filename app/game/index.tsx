import { View, Text, StyleSheet } from "react-native";
import { theme } from "@/theme/index";

export default function GameIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Home (placeholder)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.text,
    fontSize: 22,
  },
});
