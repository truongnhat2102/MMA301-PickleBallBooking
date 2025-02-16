import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function TitleComponent() {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>
        GEAR UP{"\n"}A BIG GAME
      </Text>

      {/* Subheading */}
      <Text style={styles.subheading}>
        Have Fun with Friends!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Center text horizontally
    justifyContent: "center",
  },
  heading: {
    fontSize: 32, // Matches the image size
    fontWeight: "800", // Extra bold
    color: "#4CAF50", // Green color
    textAlign: "center",
    lineHeight: 36, // Prevents extra spacing
  },
  subheading: {
    fontSize: 18, // Proper font size
    fontWeight: "900", // Very bold
    color: "#000", // Black color
    textAlign: "center",
    marginTop: 4, // Small spacing
  },
});
