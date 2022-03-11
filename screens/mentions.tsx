import { useTheme } from "@shopify/restyle";
import React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Theme } from "../libraries/theme";
import Text from "../style-system/text";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function Mentions(): JSX.Element {
  const theme = useTheme<Theme>();

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
        <Text variant="header">Mentions</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Mentions;
