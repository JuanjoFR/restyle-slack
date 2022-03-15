import { faker } from "@faker-js/faker";
import {
  BottomTabHeaderProps,
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import {
  HeaderButtonProps,
  HeaderTitleProps
} from "@react-navigation/elements";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SearchForm from "../features/search/form";
import type { Theme } from "../libraries/theme";
import HomeScreen from "../screens/home";
import MentionsScreen from "../screens/mentions";
import MessagesScreen from "../screens/messages";
import ProfileScreen from "../screens/profile";
import SearchScreen from "../screens/search";
import Box from "../style-system/box";
import HeaderProfileButton from "../style-system/header-profile-button";
import HeaderSortButton from "../style-system/header-sort-button";
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
  return (
    <Text variant="screenHeader" marginBottom="s">
      {children}
    </Text>
  );
}

function Application(): JSX.Element {
  const theme = useTheme<Theme>();

  function handleProfilePress(): void {
    Alert.alert("Open drawer menu");
  }

  function handleSortPress(): void {
    Alert.alert("Handle sort press");
  }

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
          title: faker.company.companyName(),
          tabBarIcon: HomeTabBarIcon,
          tabBarLabel: "Home",
          headerLeft: (props: HeaderButtonProps): JSX.Element => (
            <Box marginLeft="m">
              <HeaderProfileButton
                source={[
                  {
                    uri: faker.image
                      .business(32, 32)
                      .replace("http://", "https://"),
                    width: 32,
                    height: 32
                  },
                  {
                    uri: faker.image
                      .business(64, 64)
                      .replace("http://", "https://"),
                    width: 64,
                    height: 64
                  },
                  {
                    uri: faker.image
                      .business(96, 96)
                      .replace("http://", "https://"),
                    width: 96,
                    height: 96
                  }
                ]}
                onPress={handleProfilePress}
                {...props}
              />
            </Box>
          ),
          headerRight: (props: HeaderButtonProps): JSX.Element => (
            <Box marginRight="m">
              <HeaderSortButton {...props} onPress={handleSortPress} />
            </Box>
          )
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
          header: (props: BottomTabHeaderProps): JSX.Element => (
            <SearchForm {...props} />
          ),
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
