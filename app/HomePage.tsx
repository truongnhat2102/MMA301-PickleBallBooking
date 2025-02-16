import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

export default function HomePage() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Icon name="map-marker" size={16} color="black" />
          <Text style={styles.locationText}> DA NANG</Text>
        </View>
        <Text style={styles.welcomeText}>WELCOME BACK, Smoggy</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <TouchableOpacity>
          <Icon name="microphone" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Referral Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Refer a friend and</Text>
        <Text style={styles.bannerHighlight}>Win 50K VND</Text>
        <Text style={styles.bannerSubtext}>On their First 2 Booking</Text>
      </View>

      {/* Sports Categories */}
      <Text style={styles.sectionTitle}>Sports</Text>
      <View style={styles.categories}>
        <CategoryButton title="Football" imageSource={require("../assets/football.png")}/>
        <CategoryButton title="Cricket" imageSource={require("../assets/cricket.png")}/>
        <CategoryButton title="Basketball" imageSource={require("../assets/basketball.png")}/>
        <CategoryButton title="Swimming" imageSource={require("../assets/swimming.png")}/>
      </View>

      {/* Venue Filters */}
      <Text style={styles.sectionTitle}>Available Venues</Text>
      <View style={styles.filters}>
        <FilterButton title="14 Sep" selected/>
        <FilterButton title="All Sports" selected />
        <FilterButton title="Cricket" selected/>
        <FilterButton title="Football" selected/>
      </View>

      {/* Venue Cards */}
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
      <VenueCard
        title="Play Champs Badminton"
        location="OMR Road, Navalur"
        imageSource={require("../assets/venue3.png")}
      />
      <VenueCard
        title="Hello how are you"
        location="OMR Road, Navalur"
        imageSource={require("../assets/venue4.png")}
      />

    </ScrollView>
  );
}

/* Reusable Components */
const CategoryButton = ({ title, imageSource }: { title: string, imageSource: any }) => (
  <TouchableOpacity style={styles.categoryButton}>
    <Image source={imageSource} style={styles.categoryImage} />
    <Text style={styles.categoryText}>{title}</Text>
  </TouchableOpacity>
);

const FilterButton = ({ title, selected }: { title: string; selected: boolean }) => (
  <TouchableOpacity style={[styles.filterButton, selected && styles.selectedFilter]}>
    <Text style={[styles.filterText, selected && styles.selectedFilterText]}>{title}</Text>
  </TouchableOpacity>
);

const VenueCard = ({ title, location, imageSource }: { title: string; location: string; imageSource: any }) => (
  <View style={styles.venueCard}>
    <Image source={imageSource} style={styles.venueImage} />
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
  banner: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  bannerText: {
    color: "white",
    fontSize: 14,
  },
  bannerHighlight: {
    color: "yellow",
    fontSize: 18,
    fontWeight: "bold",
  },
  bannerSubtext: {
    color: "white",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  categoryButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  categoryImage: {
    width: 40,  // Adjust size
    height: 40,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  filterButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  selectedFilter: {
    backgroundColor: "#00be76",
  },
  filterText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  selectedFilterText: {
    color: "white",
  },
  venueCard: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
  },
  venueImage: {
    width: "100%",
    height: 150,
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
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
  },
});

