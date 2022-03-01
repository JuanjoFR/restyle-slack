import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@shopify/restyle";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import DirectMessagesScreen from "../screens/direct-messages";
import HomeScreen from "../screens/home";
import MentionsScreen from "../screens/mentions";
import SearchScreen from "../screens/search";
import YouScreen from "../screens/you";
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
 * Renders the direct messages bottom tab bar icon.
 *
 * @param {object} props Component properties.
 * @returns {object} Component JSX.
 */
function DirectMessagesTabBarIcon(props) {
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
function YouTabBarIcon(props) {
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
        tabBarActiveTintColor: theme.colors.tabBarActiveTint,
        tabBarInactiveTintColor: theme.colors.tabBarInactiveTint
      }}
    >
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
