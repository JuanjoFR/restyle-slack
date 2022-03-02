import { useTheme } from "@shopify/restyle";
import React from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import ListItem from "../../style-system/list-item";
import ListTitle from "../../style-system/list-title";
import { getMessages } from "./data";

const hotMessages = getMessages();
const styles = StyleSheet.create({
  avatar: {
    borderRadius: 4
  }
});

/**
 * Renders the list of hot messages.
 *
 * @param {object} props Component properties.
 * @param {object} props.style Component style.
 * @param {Function} props.onMessagePress Executed when a message is pressed.
 * @param {Function} props.onAddMessagePress Executed when the add message button is pressed.
 * @returns {object} Component JSX.
 */
function HotMessagesList({ style, onMessagePress, onAddMessagePress }) {
  const theme = useTheme();

  /**
   * Toggle the list.
   */
  function handleTitlePress() {
    Alert.alert("Handle title press");
  }

  return (
    <View style={style}>
      <ListTitle
        text="Direct messages"
        onAddPress={onAddMessagePress}
        onTitlePress={handleTitlePress}
      />
      {hotMessages.map((message) => (
        <ListItem
          key={message.id}
          leftComponent={
            <Image
              source={message.avatarSource}
              width={20}
              height={20}
              style={[styles.avatar, { marginRight: theme.spacing.m }]}
            />
          }
          text={message.name}
          onPress={() => onMessagePress(message.id)}
        />
      ))}
    </View>
  );
}

export default HotMessagesList;
