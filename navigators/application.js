import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@shopify/restyle";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/home";
import MentionsScreen from "../screens/mentions";
import MessagesScreen from "../screens/messages";
import ProfileScreen from "../screens/profile";
import SearchScreen from "../screens/search";
import Text from "../style-system/text";

const Tab = createBottomTabNavigator();

/**
 * Renders an icon component for a bottom tab.
 *
 * @param {object} props Component properties.
 * @param {string} props.icon Tab icon name.
 * @param {boolean} props.focused Indicates if the icon is selected or not.
 * @param {string} props.color Icon tint color.
 * @param {number} props.size Icon size
 * @returns {object} Component JSX.
 */
function TabBarIcon({ icon, focused, color, size }) {
  return (
    <Icon
      name={`${icon}${focused ? "" : "-outline"}`}
      size={size}
      color={color}
    />
  );
}

/**
 * Renders the home bottom tab bar icon.
 *
 * @param {object} props Component properties.
 * @returns {object} Component JSX.
 */
function HomeTabBarIcon(props) {
  return <TabBarIcon icon="home" {...props} />;
}

/**
 * Renders the messages bottom tab bar icon.
 *
 * @param {object} props Component properties.
 * @returns {object} Component JSX.
 */
function MessagesTabBarIcon(props) {
  return <TabBarIcon icon="chatbubbles" {...props} />;
}

/**
 * Renders the mentions bottom tab bar icon.
 *
 * @param {object} props Component properties.
 * @returns {object} Component JSX.
 */
function MentionsTabBarIcon(props) {
  return <TabBarIcon icon="at" {...props} />;
}

/**
 * Renders the search bottom tab bar icon.
 *
 * @param {object} props Component properties.
 * @returns {object} Component JSX.
 */
function SearchTabBarIcon(props) {
  return <TabBarIcon icon="search" {...props} />;
}

/**
 * Renders the profile bottom tab bar icon.
 *
 * @param {object} props Component properties.
 * @returns {object} Component JSX.
 */
function ProfileTabBarIcon(props) {
  return <TabBarIcon icon="person-circle" {...props} />;
}

/**
 * Renders the navigator header text.
 *
 * @param {object} props Component properties.
 * @param {string} props.children Header text.
 * @param {object} props.rest Rest of component properties.
 * @returns {object} Component JSX.
 */
function HeaderTitle({ children, ...rest }) {
  return (
    <Text variant="screenHeader" {...rest}>
      {children}
    </Text>
  );
}

/**
 * Renders the application bottom tab navigator.
 *
 * @returns {object} Component JSX.
 */
function Application() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.headerBackground
        },
        headerTitle: HeaderTitle,
        headerTitleAlign: "left",
        tabBarActiveTintColor: theme.colors.tabBarActiveTint,
        tabBarInactiveTintColor: theme.colors.tabBarInactiveTint
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Human After All Studio",
          tabBarIcon: HomeTabBarIcon,
          tabBarLabel: "Home"
        }}
      />
      <Tab.Screen
        name="messages"
        component={MessagesScreen}
        options={{
          title: "Direct Messages",
          tabBarIcon: MessagesTabBarIcon,
          tabBarLabel: "DMs"
        }}
      />
      <Tab.Screen
        name="mentions"
        component={MentionsScreen}
        options={{
          title: "Mentions & Reactions",
          tabBarIcon: MentionsTabBarIcon,
          tabBarLabel: "Mentions"
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          title: "Search",
          tabBarIcon: SearchTabBarIcon,
          tabBarLabel: "Search"
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: "You",
          tabBarIcon: ProfileTabBarIcon,
          tabBarLabel: "You"
        }}
      />
    </Tab.Navigator>
  );
}

export default Application;
