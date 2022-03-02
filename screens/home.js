import { useTheme } from "@shopify/restyle";
import React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HotChannelsList from "../features/channels/hot-channels-list";
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
    console.log("TODO go to shortcuts screen");
  }

  /**
   * Go to the channel screen.
   *
   * @param {string} id Channel identifier.
   */
  function handleChannelPress(id) {
    console.log(`TODO handle channel ${id} press`);
  }

  /**
   * Go to the new channel screen.
   */
  function handleAddChannelPress() {
    console.log("TODO handle add channel press");
  }

  /**
   * Go to the threads screen.
   */
  function handleThreadsPress() {
    console.log("TODO handle threads press");
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
          iconName="chatbubble-ellipses-outline"
          text="Threads"
          onPress={() => handleThreadsPress()}
          style={{ marginVertical: theme.spacing.s }}
        />
        <Separator />
        <HotChannelsList
          onChannelPress={handleChannelPress}
          onAddChannelPress={handleAddChannelPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
