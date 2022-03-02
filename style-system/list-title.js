import { useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Box from "./box";
import Text from "./text";

/**
 * Renders a list title with a chevron icon on right.
 *
 * @param {object} props Component properties.
 * @param {string} props.text Title text.
 * @param {Function} props.onPress Function executed when the title is pressed.
 * @returns {object} Component JSX.
 */
function ListTitle({ text, onPress }) {
  const theme = useTheme();

  return (
    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        paddingTop="s"
        paddingBottom="m"
        paddingHorizontal="m"
      >
        <Text variant="header">{text}</Text>
        <Icon name="chevron-up-outline" size={22} color={theme.colors.text} />
      </Box>
    </Pressable>
  );
}

export default ListTitle;
