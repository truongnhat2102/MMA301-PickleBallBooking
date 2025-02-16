import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BottomTabNavigator() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00be76",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderColor: "#ddd",
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      {/* Home Screen */}
      <Tabs.Screen
        name="index" // Home page should be "index" in expo-router
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Icon name="th-large" size={size} color={color} />,
        }}
      />

      {/* Booking Screen */}
      <Tabs.Screen
        name="booking"
        options={{
          title: "Booking",
          tabBarIcon: ({ color, size }) => <Icon name="calendar" size={size} color={color} />,
        }}
      />

      {/* Favorites Screen */}
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => <Icon name="heart" size={size} color={color} />,
        }}
      />

      {/* Profile Screen */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Icon name="user" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
