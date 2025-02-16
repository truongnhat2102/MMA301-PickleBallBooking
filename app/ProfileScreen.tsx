import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* User Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={require("../assets/user.png")} style={styles.profileImage} />
        <View>
          <Text style={styles.userName}>Surendhar</Text>
          <Text style={styles.userEmail}>Surendharpv01@gmail.com</Text>
        </View>
      </View>

      {/* Profile Options */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileOption icon="user" title="Account" />
        <ProfileOption icon="calendar" title="Your Booking" />
        <ProfileOption icon="money" title="Refunds" />
        <ProfileOption icon="bookmark" title="Favourite Venues" />
        <ProfileOption icon="headset" title="Support" />
        <ProfileOption icon="lock" title="Privacy Policy" />
        <ProfileOption icon="shield" title="Terms of use" />

        {/* Logout Option */}
        <TouchableOpacity style={styles.logoutButton}>
          <Icon name="sign-out" size={20} color="red" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

/* Profile Option Component */
interface ProfileOptionProps {
  icon: string;
  title: string;
}

const ProfileOption: React.FC<ProfileOptionProps> = ({ icon, title }) => (
  <TouchableOpacity style={styles.profileOption}>
    <Icon name={icon} size={22} color="#00be76" />
    <Text style={styles.optionText}>{title}</Text>
  </TouchableOpacity>
);

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
  profileOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 16,
    marginLeft: 15,
    fontWeight: "500",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  logoutText: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    fontWeight: "500",
  },
});
