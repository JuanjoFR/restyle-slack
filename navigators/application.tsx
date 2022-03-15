import {
  BottomTabHeaderProps,
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import { HeaderTitleProps } from "@react-navigation/elements";
import { useTheme } from "@shopify/restyle";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import SearchForm from "../features/search/form";
import type { Theme } from "../libraries/theme";
import HomeScreen from "../screens/home";
import MentionsScreen from "../screens/mentions";
import MessagesScreen from "../screens/messages";
import ProfileScreen from "../screens/profile";
import SearchScreen from "../screens/search";
import Text from "../style-system/text";

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator();

function TabBarIcon({
  icon,
  focused,
  color,
  size
}: TabBarIconProps & {
  icon: string;
}): JSX.Element {
  return (
    <Icon
      name={`${icon}${focused ? "" : "-outline"}`}
      size={size}
      color={color}
    />
  );
}

function HomeTabBarIcon(props: TabBarIconProps): JSX.Element {
  return <TabBarIcon icon="home" {...props} />;
}

function MessagesTabBarIcon(props: TabBarIconProps): JSX.Element {
  return <TabBarIcon icon="chatbubbles" {...props} />;
}

function MentionsTabBarIcon(props: TabBarIconProps): JSX.Element {
  return <TabBarIcon icon="at" {...props} />;
}

function SearchTabBarIcon(props: TabBarIconProps): JSX.Element {
  return <TabBarIcon icon="search" {...props} />;
}

function ProfileTabBarIcon(props: TabBarIconProps): JSX.Element {
  return <TabBarIcon icon="person-circle" {...props} />;
}

function HeaderTitle({ children }: HeaderTitleProps): JSX.Element {
  return <Text variant="screenHeader">{children}</Text>;
}

function Application(): JSX.Element {
  const theme = useTheme<Theme>();

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
          header: (props): BottomTabHeaderProps => <SearchForm {...props} />,
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
