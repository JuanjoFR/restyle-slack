import { useTheme } from "@shopify/restyle";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

/**
 * Renders the screen wrapper with the common styles and components applied.
 *
 * @param {object} props Component properties.
 * @param {object} props.children Component children.
 * @returns {object} Component JSX.
 */
function ScreenWrapper({ children }) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.mainBackground,
          paddingBottom: insets.bottom
        }
      ]}
    >
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
}

export default ScreenWrapper;
