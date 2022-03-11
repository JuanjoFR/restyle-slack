import { useTheme } from "@shopify/restyle";
import React from "react";
import { Alert, StyleProp, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../../libraries/theme";
import ListItem from "../../style-system/list-item";
import ListTitle from "../../style-system/list-title";
import { getChannels } from "./data";

type Props = {
  style: StyleProp<ViewStyle>;
  onChannelPress: (id: string) => void;
  onAddChannelPress: () => void;
};

const hotChannels = getChannels();

function HotChannelsList({
  style,
  onChannelPress,
  onAddChannelPress
}: Props): JSX.Element {
  const theme = useTheme<Theme>();

  function handleTitlePress(): void {
    Alert.alert("Handle title press");
  }

  return (
    <View style={style}>
      <ListTitle text="Channels" onTitlePress={handleTitlePress} />
      {hotChannels.map((channel: { id: string; name: string }) => (
        <ListItem
          variant="regular"
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
          onPress={(): void => onChannelPress(channel.id)}
        />
      ))}
      <ListItem
        variant="regular"
        leftComponent={
          <Icon
            name="add-outline"
            size={20}
            color={theme.colors.text}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="Add channel"
        onPress={(): void => onAddChannelPress()}
      />
    </View>
  );
}

export default HotChannelsList;
