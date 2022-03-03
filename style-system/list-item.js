import { spacing, useRestyle, useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable } from "react-native";
import Box from "./box";
import Text from "./text";

const restyleFunctions = [spacing];

/**
 * @typedef properties
 * @type {object}
 * @property {string} variant Component variant (regular or bold).
 * @property {object} leftComponent Component rendered on left.
 * @property {string} text Item label.
 * @property {Function} onPress Function executed when the item is pressed.
 */

/**
 * Renders a list item with a label and another component on the left.
 *
 * @param {properties} properties Component properties
 * @returns {object} Component JSX.
 */
function ListItem({ variant, leftComponent, text, onPress, ...rest }) {
  const theme = useTheme();
  const props = useRestyle(restyleFunctions, rest);

  /**
   * Returns the icon color key declared in the theme file.
   *
   * @returns {string} Color key.
   */
  function getIconColor() {
    switch (variant) {
      case "regular": {
        return "icon";
      }
      case "bold": {
        return "iconBold";
      }
      default:
        throw new Error(`Can't extract icon color from variant "${variant}"`);
    }
  }

  /**
   * Returns the text variant key declared in the theme file.
   *
   * @returns {string} Text variant key.
   */
  function getTextVariant() {
    switch (variant) {
      case "regular": {
        return "body";
      }
      case "bold": {
        return "boldBody";
      }
      default:
        throw new Error(`Can't extract text variant from variant "${variant}"`);
    }
  }

  /**
   * Returns the component background color key when it's pressed.
   *
   * @returns {string} Babckground color key.
   */
  function getPressedBackgroundColor() {
    switch (variant) {
      case "regular": {
        return "listItemPressRegular";
      }
      case "bold": {
        return "listItemPressBold";
      }
      default:
        throw new Error(
          `Can't extract pressed background color from variant "${variant}"`
        );
    }
  }

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
          color={getIconColor()}
          backgroundColor={pressed ? getPressedBackgroundColor() : undefined}
          {...props}
        >
          {leftComponent}
          <Text variant={getTextVariant()}>{text}</Text>
        </Box>
      )}
    </Pressable>
  );
}

export default ListItem;
