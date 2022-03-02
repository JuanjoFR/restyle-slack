import { useTheme } from "@shopify/restyle";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import HotChannelsList from "../features/channels/hot-channels-list";
import HotMessagesList from "../features/messages/hot-messages-list";
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

/**
 * Renders the home screen.
 *
 * @returns {object} Component JSX.
 */
function Home() {
  const theme = useTheme();

  /**
   * Go to the shortcuts screen.
   */
  function handleShortcutsPress() {
    Alert.alert("Go to shortcuts screen");
  }

  /**
   * Go to the threads screen.
   */
  function handleThreadsPress() {
    Alert.alert("Handle threads press");
  }

  /**
   * Go to the channel screen.
   *
   * @param {string} id Channel identifier.
   */
  function handleChannelPress(id) {
    Alert.alert(`Handle channel ${id} press`);
  }

  /**
   * Go to the new channel screen.
   */
  function handleAddChannelPress() {
    Alert.alert("Handle add channel press");
  }

  /**
   * Go to the new teammates screen.
   */
  function handleAddTeammatesPress() {
    Alert.alert("Handle add teammates press");
  }

  /**
   * Go to the message screen.
   *
   * @param {string} id Message identifier.
   */
  function handleMessagePress(id) {
    Alert.alert(`Handle message ${id} press`);
  }

  /**
   * Go to the new message screen.
   */
  function handleAddMessagePress() {
    Alert.alert("Handle add message press");
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
          leftComponent={
            <Icon
              name="chatbubble-ellipses-outline"
              size={20}
              color={theme.colors.text}
              style={{ marginRight: theme.spacing.m }}
            />
          }
          text="Threads"
          onPress={() => handleThreadsPress()}
          style={{ marginBottom: theme.spacing.s }}
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
          onAddMessagePress={handleAddMessagePress}
          style={{ marginBottom: theme.spacing.s }}
        />
        <Separator />
        <ListItem
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
          style={{ marginBottom: theme.spacing.s }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
