import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import DirectMessagesScreen from "../screens/direct-messages";
import HomeScreen from "../screens/home";
import MentionsScreen from "../screens/mentions";
import SearchScreen from "../screens/search";
import YouScreen from "../screens/you";

const Tab = createBottomTabNavigator();

function HomeTabBarIcon({ focused, color, size }) {
  return <Icon name={"home-outline"} size={size} color={color} />;
}

function Application() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabBarIcon
        }}
      />
      <Tab.Screen name="DMs" component={DirectMessagesScreen} />
      <Tab.Screen name="Mentions" component={MentionsScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="You" component={YouScreen} />
    </Tab.Navigator>
  );
}

export default Application;
