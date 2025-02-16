import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import OTPInput from "react-native-otp-input";

export default function ForgetPasswordScreen() {
  const router = useRouter(); // Initialize router for navigation
  const [timer, setTimer] = useState(30);
  const [otp, setOtp] = useState("");

  // Timer countdown for Resend OTP
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <View style={styles.container}>
      {/* Back Button and Title */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="arrow-left" size={20} color="black" />
        <Text style={styles.title}>Forgot Password</Text>
      </TouchableOpacity>

      {/* OTP Verification Text */}
      <Text style={styles.otpText}>
        Verify with OTP to change Password{"\n"}sent to 95****4572
      </Text>

      {/* OTP Input Fields */}
      <OTPInput
        style={styles.otpContainer}
        pinCount={6}
        onCodeChanged={setOtp}
        autoFocusOnLoad
        codeInputFieldStyle={styles.otpBox}
      />

      {/* Auto-fetching OTP Indicator */}
      <View style={styles.autoFetchContainer}>
        <Icon name="refresh" size={18} color="#ccc" />
        <Text style={styles.autoFetchText}> Auto fetching OTP...</Text>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Resend OTP */}
      <Text style={styles.resendText}>
        Didn’t receive it? <Text style={styles.retryText}>Retry in 00:{timer < 10 ? `0${timer}` : timer}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00be76",
    marginLeft: 10,
  },
  otpText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    marginBottom: 20,
  },
  otpContainer: {
    width: "100%",
    height: 60,
    alignSelf: "center",
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    textAlign: "center",
    fontSize: 18,
  },
  autoFetchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  autoFetchText: {
    fontSize: 14,
    color: "#aaa",
    marginLeft: 5,
  },
  submitButton: {
    backgroundColor: "#00be76",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  resendText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginTop: 10,
  },
  retryText: {
    color: "#00be76",
    fontWeight: "bold",
  },
});
