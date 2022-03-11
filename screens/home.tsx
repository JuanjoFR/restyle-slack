import { useTheme } from "@shopify/restyle";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import HotChannelsList from "../features/channels/hot-channels-list";
import HotMessagesList from "../features/messages/hot-messages-list";
import type { Theme } from "../libraries/theme";
import FloatingNewMessageButton from "../style-system/floating-new-message-button";
import ListItem from "../style-system/list-item";
import PressableTextInput from "../style-system/pressable-text-input";
import Separator from "../style-system/separator";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shortcutsPressable: {
    zIndex: 1
  },
  containerShortcuts: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  }
});

function Home(): JSX.Element {
  const theme = useTheme<Theme>();

  function handleShortcutsPress(): void {
    Alert.alert("Go to shortcuts screen");
  }

  function handleThreadsPress(): void {
    Alert.alert("Handle threads press");
  }

  function handleChannelPress(id: string): void {
    Alert.alert(`Handle channel ${id} press`);
  }

  function handleAddChannelPress(): void {
    Alert.alert("Handle add channel press");
  }

  function handleAddTeammatesPress(): void {
    Alert.alert("Handle add teammates press");
  }

  function handleMessagePress(id: string): void {
    Alert.alert(`Handle message ${id} press`);
  }

  function handleAddDirectMessagePress(): void {
    Alert.alert("Handle add direct message press");
  }

  function handleNewMessagePress(): void {
    Alert.alert("Go to new message screen");
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
      <PressableTextInput
        text="Jump to..."
        pressableStyle={styles.shortcutsPressable}
        containerStyle={[
          styles.containerShortcuts,
          {
            marginTop: theme.spacing.m,
            marginHorizontal: theme.spacing.m
          }
        ]}
        onPress={handleShortcutsPress}
      />
      <ScrollView
        contentContainerStyle={{
          paddingTop: theme.spacing.m * 3 + theme.textVariants.body.lineHeight
        }}
      >
        <ListItem
          variant="regular"
          leftComponent={
            <Icon
              name="chatbubble-ellipses-outline"
              size={20}
              color={theme.colors.text}
              style={{ marginRight: theme.spacing.m }}
            />
          }
          text="Threads"
          onPress={(): void => handleThreadsPress()}
          marginBottom="s"
        />
        <Separator />
        <HotChannelsList
          onChannelPress={handleChannelPress}
          onAddChannelPress={handleAddChannelPress}
          style={{ marginBottom: theme.spacing.s }}
        />
        <Separator />
        <HotMessagesList
          onMessagePress={handleMessagePress}
          onAddMessagePress={handleAddDirectMessagePress}
          style={{ marginBottom: theme.spacing.s }}
        />
        <Separator />
        <ListItem
          variant="regular"
          leftComponent={
            <Icon
              name="add-outline"
              size={20}
              color={theme.colors.text}
              style={{ marginRight: theme.spacing.m }}
            />
          }
          text="Add teammates"
          onPress={handleAddTeammatesPress}
          marginBottom="s"
        />
      </ScrollView>
      <FloatingNewMessageButton
        style={{ bottom: theme.spacing.m, right: theme.spacing.m }}
        onPress={handleNewMessagePress}
      />
    </SafeAreaView>
  );
}

export default Home;
