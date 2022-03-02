import React, { Fragment } from "react";
import ListItem from "../../style-system/list-item";
import ListTitle from "../../style-system/list-title";
import { getChannels } from "./data";

const hotChannels = getChannels();

/**
 * Renders the list of hot channels.
 *
 * @param {object} props Component properties.
 * @param {Function} props.onChannelPress Executed when a channel is pressed.
 * @param {Function} props.onAddChannelPress Executed when the add channel item is pressed.
 * @returns {object} Component JSX.
 */
function HotChannelsList({ onChannelPress, onAddChannelPress }) {
  /**
   * Toggle the list.
   */
  function handleTitlePress() {
    console.log("TODO handle title press");
  }

  return (
    <Fragment>
      <ListTitle text="Channels" onPress={handleTitlePress} />
      {hotChannels.map((channel) => (
        <ListItem
          key={channel.id}
          iconName="code-outline"
          text={channel.name}
          onPress={() => onChannelPress(channel.id)}
        />
      ))}
      <ListItem
        iconName="add-outline"
        text="Add channel"
        onPress={() => onAddChannelPress()}
      />
    </Fragment>
  );
}

export default HotChannelsList;
