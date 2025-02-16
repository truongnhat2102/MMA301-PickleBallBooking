import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";
import TitleComponent from "../components/TitleComponent"; // Import the title component

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Title Component (Text) */}
      <TitleComponent />

      {/* PNG Illustration */}
      <Image
        source={require("../assets/cricketbro-1.png")} // Ensure file exists
        style={styles.image}
        resizeMode="contain"
      />

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <View>
          <Text style={styles.buttonText}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  image: {
    width: "90%", // Responsive image size
    height: 350,
    marginTop: 40,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
