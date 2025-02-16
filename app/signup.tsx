import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router"; // Navigation

export default function SignupScreen() {
  const router = useRouter(); // Initialize router for navigation

  return (
    <View style={styles.container}>
      {/* Sign Up Heading */}
      <Text style={styles.signupText}>Sign - Up</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#00be76" style={styles.icon} />
        <TextInput placeholder="Username" style={styles.input} />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#00be76" style={styles.icon} />
        <TextInput placeholder="Email Id" style={styles.input} />
      </View>

      {/* Contact Number Input */}
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#00be76" style={styles.icon} />
        <TextInput placeholder="Contact Number" keyboardType="phone-pad" style={styles.input} />
      </View>

      {/* New Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#00be76" style={styles.icon} />
        <TextInput placeholder="New Password" secureTextEntry style={styles.input} />
        <Icon name="eye" size={20} color="#b0b0b0" style={styles.eyeIcon} />
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#00be76" style={styles.icon} />
        <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />
        <Icon name="eye" size={20} color="#b0b0b0" style={styles.eyeIcon} />
      </View>

      {/* Sign-Up Button */}
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign-Up</Text>
      </TouchableOpacity>

      {/* Login Redirect */}
      <Text style={styles.loginText}>
        Didn’t Have an Account?{" "}
        <Text style={styles.loginLink} onPress={() => router.push("/login")}>
          Sign Up
        </Text>
      </Text>

      {/* Social Login */}
      <Text style={styles.socialText}>Others Ways to sign-in</Text>
      <View style={styles.socialIcons}>
        <Image source={require("../assets/facebook.png")} style={styles.socialIcon} />
        <Image source={require("../assets/google.png")} style={styles.socialIcon} />
        <Image source={require("../assets/apple.png")} style={styles.socialIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  signupText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00be76",
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",
    height: 50,
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  signupButton: {
    backgroundColor: "#00be76",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  signupButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 14,
    color: "#000",
  },
  loginLink: {
    color: "#00be76",
    fontWeight: "bold",
  },
  socialText: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 10,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});
