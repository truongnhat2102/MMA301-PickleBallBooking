import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface RectangleProps {
  style?: ViewStyle;
  children: React.ReactNode;
}

const Rectangle: React.FC<RectangleProps> = ({ style, children }) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Rectangle;