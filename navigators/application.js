import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import DirectMessagesScreen from "../screens/direct-messages";
import HomeScreen from "../screens/home";
import MentionsScreen from "../screens/mentions";
import SearchScreen from "../screens/search";
import YouScreen from "../screens/you";

const Tab = createBottomTabNavigator();

function TabBarIcon({ icon, focused, color, size }) {
  return (
    <Icon
      name={`${icon}${focused ? "" : "-outline"}`}
      size={size}
      color={color}
    />
  );
}

function HomeTabBarIcon(props) {
  return <TabBarIcon icon="home" {...props} />;
}

function DirectMessagesTabBarIcon(props) {
  return <TabBarIcon icon="chatbubbles" {...props} />;
}

function MentionsTabBarIcon(props) {
  return <TabBarIcon icon="at" {...props} />;
}

function SearchTabBarIcon(props) {
  return <TabBarIcon icon="search" {...props} />;
}

function YouTabBarIcon(props) {
  return <TabBarIcon icon="person-circle" {...props} />;
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
      <Tab.Screen
        name="DMs"
        component={DirectMessagesScreen}
        options={{
          tabBarIcon: DirectMessagesTabBarIcon
        }}
      />
      <Tab.Screen
        name="Mentions"
        component={MentionsScreen}
        options={{
          tabBarIcon: MentionsTabBarIcon
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: SearchTabBarIcon
        }}
      />
      <Tab.Screen
        name="You"
        component={YouScreen}
        options={{
          tabBarIcon: YouTabBarIcon
        }}
      />
    </Tab.Navigator>
  );
}

export default Application;
