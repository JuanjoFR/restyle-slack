import { useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Box from "./box";

const styles = StyleSheet.create({
  icon: { top: -2, left: 1 }
});

/**
 * Renders an absolute positioned rounded button.
 *
 * @param {object} props Component properties.
 * @param {object} props.style Component container style.
 * @param {Function} props.onPress Function executed when the button is pressed.
 * @returns {object} Component JSX.
 */
function FloatingNewMessageButton({ style, onPress }) {
  const theme = useTheme();

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <Box
          position="absolute"
          backgroundColor="button"
          padding="m"
          borderRadius={50}
          opacity={pressed ? 0.4 : 1}
          style={style}
        >
          <Icon
            name="create-outline"
            size={25}
            color={theme.colors.mainBackground}
            style={styles.icon}
          />
        </Box>
      )}
    </Pressable>
  );
}

export default FloatingNewMessageButton;
