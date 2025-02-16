import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

export default function SavePasswordScreen() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Button and Title */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="arrow-left" size={20} color="black" />
        <Text style={styles.title}>Save Password</Text>
      </TouchableOpacity>

      {/* Verification Message */}
      <Text style={styles.otpText}>
        Verify with OTP to change Password{"\n"}sent to 95****4572
      </Text>

      {/* New Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="key" size={20} color="#00be76" style={styles.icon} />
        <TextInput
          placeholder="New Password"
          secureTextEntry={!isPasswordVisible}
          style={styles.input}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={20} color="#b0b0b0" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="key" size={20} color="#00be76" style={styles.icon} />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={!isConfirmVisible}
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setIsConfirmVisible(!isConfirmVisible)}>
          <Icon name={isConfirmVisible ? "eye-slash" : "eye"} size={20} color="#b0b0b0" />
        </TouchableOpacity>
      </View>

      {/* Save Password Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Password</Text>
      </TouchableOpacity>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00be76",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",
    height: 50,
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#00be76",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
