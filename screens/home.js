import { useTheme } from "@shopify/restyle";
import React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PressableTextInput from "../style-system/pressable-text-input";
import Text from "../style-system/text";

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
          paddingTop: theme.spacing.m * 4 + theme.textVariants.body.lineHeight
        }}
      >
        <Text variant="header">Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
