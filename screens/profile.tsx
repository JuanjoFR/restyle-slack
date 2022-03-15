import { useTheme } from "@shopify/restyle";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import SettingsMenu from "../features/profile/settings-menu";
import ShortcutsMenu from "../features/profile/shortcuts-menu";
import Status from "../features/profile/status";
import type { Theme } from "../libraries/theme";
import PressableTextInput from "../style-system/pressable-text-input";
import Separator from "../style-system/separator";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pressableTextInputIcon: {
    marginTop: 1
  }
});

function Profile(): JSX.Element {
  const theme = useTheme<Theme>();

  function handleProfilePress(): void {
    Alert.alert("Go to profile screen");
  }

  function handleChangeStatusPress(): void {
    Alert.alert("Go to change status screen");
  }

  function handlePauseNotificationsPress(): void {
    Alert.alert("Handle pause notifications press");
  }

  function handleSetActivePress(): void {
    Alert.alert("Handle set active press");
  }

  function handleSavedItemsPress(): void {
    Alert.alert("Go to saved items screen");
  }

  function handleNotificationsPress(): void {
    Alert.alert("Go to notifications screen");
  }

  function handlePreferencesPress(): void {
    Alert.alert("Go to preferences screen");
  }

  return (
    <SafeAreaView
      edges={["right", "left"]}
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.mainBackground
        }
      ]}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <Status marginVertical="s" onPress={handleProfilePress} />
        <PressableTextInput
          text="What's your status?"
          icon={
            <Icon
              name="happy-outline"
              size={20}
              color={theme.colors.text}
              style={[
                styles.pressableTextInputIcon,
                { marginRight: theme.spacing.m }
              ]}
            />
          }
          backgroundColor="inputBackground"
          marginHorizontal="m"
          marginBottom="s"
          onPress={handleChangeStatusPress}
        />
        <ShortcutsMenu
          marginBottom="s"
          onPauseNotificationsPress={handlePauseNotificationsPress}
          onSetActivePress={handleSetActivePress}
        />
        <Separator />
        <SettingsMenu
          marginTop="s"
          onSavedItemsPress={handleSavedItemsPress}
          onViewProfilePress={handleProfilePress}
          onNotificationsPress={handleNotificationsPress}
          onPreferencesPress={handlePreferencesPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
