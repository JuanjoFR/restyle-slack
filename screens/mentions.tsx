import { useTheme } from "@shopify/restyle";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Theme } from "../libraries/theme";
import FloatingNewMessageButton from "../style-system/floating-new-message-button";
import Text from "../style-system/text";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

function Mentions(): JSX.Element {
  const theme = useTheme<Theme>();

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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text variant="emptyContentLabel">No Messages</Text>
      </ScrollView>
      <FloatingNewMessageButton
        bottom={theme.spacing.m}
        right={theme.spacing.m}
        onPress={handleNewMessagePress}
      />
    </SafeAreaView>
  );
}

export default Mentions;
