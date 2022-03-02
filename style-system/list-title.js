import { useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Box from "./box";
import Text from "./text";

const styles = StyleSheet.create({
  textPressable: { flex: 1 }
});

/**
 * Renders a list title with a chevron icon on right.
 *
 * @param {object} props Component properties.
 * @param {string} props.text Title text.
 * @param {Function} props.onTitlePress Function executed when the title is pressed.
 * @param {Function} props.onAddPress Function executed when the "add" icon is pressed.
 * @returns {object} Component JSX.
 */
function ListTitle({ text, onTitlePress, onAddPress }) {
  const theme = useTheme();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      // backgroundColor="cardPrimaryBackground"
    >
      <Pressable onPress={onTitlePress} style={styles.textPressable}>
        <Box paddingTop="s" paddingBottom="m" paddingLeft="m" paddingRight="s">
          <Text variant="header">{text}</Text>
        </Box>
      </Pressable>
      {onAddPress ? (
        <Pressable onPress={onAddPress}>
          <Box paddingTop="s" paddingBottom="m" paddingHorizontal="s">
            <Icon name="add-outline" size={20} color={theme.colors.text} />
          </Box>
        </Pressable>
      ) : undefined}
      <Pressable onPress={onTitlePress}>
        <Box paddingTop="s" paddingBottom="m" paddingLeft="s" paddingRight="m">
          <Icon name="chevron-up-outline" size={20} color={theme.colors.text} />
        </Box>
      </Pressable>
    </Box>
  );
}

export default ListTitle;
