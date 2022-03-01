import { useTheme } from "@shopify/restyle";
import React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../style-system/text";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

/**
 * Renders the search screen.
 *
 * @returns {object} Component JSX.
 */
function Search() {
  const theme = useTheme();

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
        <Text variant="header">Search</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Search;
