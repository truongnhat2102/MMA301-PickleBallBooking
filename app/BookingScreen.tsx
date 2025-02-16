import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

export default function BookingScreen() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("Upcoming");

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Icon name="map-marker" size={16} color="black" />
          <Text style={styles.locationText}> Kilpauk</Text>
        </View>
        <Text style={styles.welcomeText}>WELCOME BACK, Surendhar</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <TouchableOpacity>
          <Icon name="microphone" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Booking Section */}
      <Text style={styles.sectionTitle}>My Bookings</Text>

      {/* Tabs: Upcoming & Past */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "Upcoming" && styles.activeTab]}
          onPress={() => setSelectedTab("Upcoming")}
        >
          <Text style={[styles.tabText, selectedTab === "Upcoming" && styles.activeTabText]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "Past" && styles.activeTab]}
          onPress={() => setSelectedTab("Past")}
        >
          <Text style={[styles.tabText, selectedTab === "Past" && styles.activeTabText]}>Past</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable List of Bookings */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {selectedTab === "Upcoming" ? (
          <BookingCard
            title="Hotfut SPR City"
            location="Stephenson Road, Premblar"
            date="15 Sep"
            time="9 pm - 10 pm"
            slots="2 Slots"
            imageSource={require("../assets/venue1.png")}
          />
        ) : (
          <Text style={styles.noBookingText}>No Past Bookings</Text>
        )}
      </ScrollView>
    </View>
  );
}

/* Booking Card Component */
interface BookingCardProps {
  title: string;
  location: string;
  date: string;
  time: string;
  slots: string;
  imageSource: any; // You can replace 'any' with the specific type if known
}

const BookingCard: React.FC<BookingCardProps> = ({ title, location, date, time, slots, imageSource }) => (
  <View style={styles.bookingCard}>
    <Image source={imageSource} style={styles.venueImage} />
    <TouchableOpacity style={styles.heartIcon}>
      <Icon name="heart" size={20} color="green" />
    </TouchableOpacity>
    <View style={styles.venueDetails}>
      <Text style={styles.venueTitle}>{title}</Text>
      <Text style={styles.venueLocation}>{location}</Text>
      <Text style={styles.bookingInfo}>
        {date} <Text style={styles.timeText}>[{time}]</Text> - {slots}
      </Text>
      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.directionButton}>
          <Text style={styles.buttonText}>Get Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.callButton}>
          <Icon name="phone" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.buttonText}>Download Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: 14,
    color: "#666",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: "#00be76",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTabText: {
    color: "white",
  },
  bookingCard: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    position: "relative",
    padding: 10,
  },
  venueImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 50,
  },
  venueDetails: {
    padding: 10,
  },
  venueTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  venueLocation: {
    fontSize: 14,
    color: "#666",
  },
  bookingInfo: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
  },
  timeText: {
    color: "#00be76",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  directionButton: {
    backgroundColor: "#E74C3C",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  callButton: {
    backgroundColor: "#00be76",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  downloadButton: {
    backgroundColor: "#27AE60",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  noBookingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 20,
  },
});

