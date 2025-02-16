import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

export default function LoginScreen() {
    const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Login Heading */}
      <Text style={styles.loginText}>Login</Text>
      
      {/* Subheading */}
      <Text style={styles.subheading}>Have Fun with Friends!</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#00be76" style={styles.icon} />
        <TextInput placeholder="Username" style={styles.input} />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#00be76" style={styles.icon} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        <Icon name="eye" size={20} color="#b0b0b0" style={styles.eyeIcon} />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotText}  onPress={() => router.push("/forgetPassword")}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText} onPress={() => router.push("/HomePage")}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <Text style={styles.signUpText}>
        Didn’t Have an Account? <Text style={styles.signUpLink} onPress={() => router.push("/signup")}>Sign Up</Text>
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
  loginText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00be76",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
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
  forgotText: {
    color: "#00be76",
    fontSize: 14,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#00be76",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpText: {
    fontSize: 14,
    color: "#000",
  },
  signUpLink: {
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
