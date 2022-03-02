import { useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Box from "./box";
import Text from "./text";

/**
 * Renders a list item with a label and an icon on the left.
 *
 * @param {object} props Component properties
 * @param {string} props.iconName Icon name.
 * @param {string} props.text Item label.
 * @param {object} props.style Component style.
 * @param {Function} props.onPress Function executed when the item is pressed.
 * @returns {object} Component JSX.
 */
function ListItem({ iconName, text, style, onPress }) {
  const theme = useTheme();

  return (
    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        alignItems="center"
        paddingVertical="s"
        paddingHorizontal="m"
        style={style}
      >
        <Icon
          name={iconName}
          size={20}
          color={theme.colors.text}
          style={{ marginRight: theme.spacing.m }}
        />
        <Text variant="body">{text}</Text>
      </Box>
    </Pressable>
  );
}

export default ListItem;
