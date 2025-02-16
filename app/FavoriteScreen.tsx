import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

export default function FavouritesScreen() {
  const router = useRouter();

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

      {/* Favourites Title */}
      <Text style={styles.sectionTitle}>Favourites</Text>

      {/* Scrollable List of Venues */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <VenueCard
          title="Hotfut SPR City"
          location="Stephenson Road, Premblar"
          imageSource={require("../assets/venue1.png")}
        />
        <VenueCard
          title="Hotfut Vivira Mall"
          location="OMR Road, Navalur"
          imageSource={require("../assets/venue2.png")}
        />
      </ScrollView>
    </View>
  );
}

/* Venue Card Component */
interface VenueCardProps {
  title: string;
  location: string;
  imageSource: any;
}

const VenueCard: React.FC<VenueCardProps> = ({ title, location, imageSource }) => (
  <View style={styles.venueCard}>
    <Image source={imageSource} style={styles.venueImage} />
    <TouchableOpacity style={styles.heartIcon}>
      <Icon name="heart" size={20} color="green" />
    </TouchableOpacity>
    <View style={styles.venueDetails}>
      <Text style={styles.venueTitle}>{title}</Text>
      <Text style={styles.venueLocation}>{location}</Text>
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
  venueCard: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    position: "relative",
  },
  venueImage: {
    width: "100%",
    height: 150,
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
});

