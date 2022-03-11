import { useTheme } from "@shopify/restyle";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../libraries/theme";
import Box from "../style-system/box";
import FloatingNewMessageButton from "../style-system/floating-new-message-button";
import ListItem from "../style-system/list-item";
import PressableTextInput from "../style-system/pressable-text-input";

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
  },
  addTeammatesIcon: { padding: 10 }
});

function Messages(): JSX.Element {
  const theme = useTheme<Theme>();

  function handleShortcutsPress(): void {
    Alert.alert("Go to shortcuts screen");
  }

  function handleAddTeammatesPress(): void {
    Alert.alert("Go to new teammates screen");
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
          variant="bold"
          paddingVertical="m"
          leftComponent={
            <Box marginRight="m">
              <Box backgroundColor="iconBackground" borderRadius={50}>
                <Icon
                  name="person-add-outline"
                  size={16}
                  style={styles.addTeammatesIcon}
                />
              </Box>
            </Box>
          }
          text="Add teammates"
          onPress={(): void => handleAddTeammatesPress()}
        />
      </ScrollView>
      <FloatingNewMessageButton
        style={{ bottom: theme.spacing.m, right: theme.spacing.m }}
        onPress={handleNewMessagePress}
      />
    </SafeAreaView>
  );
}

export default Messages;
