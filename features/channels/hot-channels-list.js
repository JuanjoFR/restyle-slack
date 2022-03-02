import { useTheme } from "@shopify/restyle";
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ListItem from "../../style-system/list-item";
import ListTitle from "../../style-system/list-title";
import { getChannels } from "./data";

const hotChannels = getChannels();

/**
 * Renders the list of hot channels.
 *
 * @param {object} props Component properties.
 * @param {object} props.style Component style.
 * @param {Function} props.onChannelPress Executed when a channel is pressed.
 * @param {Function} props.onAddChannelPress Executed when the add channel item is pressed.
 * @returns {object} Component JSX.
 */
function HotChannelsList({ style, onChannelPress, onAddChannelPress }) {
  const theme = useTheme();

  /**
   * Toggle the list.
   */
  function handleTitlePress() {
    console.log("TODO handle title press");
  }

  return (
    <View style={style}>
      <ListTitle text="Channels" onTitlePress={handleTitlePress} />
      {hotChannels.map((channel) => (
        <ListItem
          key={channel.id}
          leftComponent={
            <Icon
              name="code-outline"
              size={20}
              color={theme.colors.text}
              style={{ marginRight: theme.spacing.m }}
            />
          }
          text={channel.name}
          onPress={() => onChannelPress(channel.id)}
        />
      ))}
      <ListItem
        leftComponent={
          <Icon
            name="add-outline"
            size={20}
            color={theme.colors.text}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="Add channel"
        onPress={() => onAddChannelPress()}
      />
    </View>
  );
}

export default HotChannelsList;
