import { useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable } from "react-native";
import Box from "./box";
import Text from "./text";

/**
 * Renders a list item with a label and another component on the left.
 *
 * @param {object} props Component properties
 * @param {object} props.leftComponent Component rendered on left.
 * @param {string} props.text Item label.
 * @param {object} props.style Component style.
 * @param {Function} props.onPress Function executed when the item is pressed.
 * @returns {object} Component JSX.
 */
function ListItem({ leftComponent, text, style, onPress }) {
  const theme = useTheme();

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <Box
          flexDirection="row"
          alignItems="center"
          paddingVertical="s"
          marginHorizontal="s"
          paddingHorizontal="s"
          borderRadius={theme.spacing.s}
          backgroundColor={pressed ? "listItemPress" : undefined}
          style={style}
        >
          {leftComponent}
          <Text variant="body">{text}</Text>
        </Box>
      )}
    </Pressable>
  );
}

export default ListItem;
