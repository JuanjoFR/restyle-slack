import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../../libraries/theme";
import Box from "../../style-system/box";
import ListItem from "../../style-system/list-item";
import ListTitle from "../../style-system/list-title";
import { getChannels } from "./data";

type Props = {
  isClosed: boolean;
  style: StyleProp<ViewStyle>;
  onTitlePress: () => void;
  onChannelPress: (id: string) => void;
  onAddChannelPress: () => void;
};

const hotChannels = getChannels();
const LIST_ITEM_HEIGHT = 40;
const styles = StyleSheet.create({
  bodyContainer: {
    overflow: "hidden"
  },
  bodyContainerOpen: { height: (hotChannels.length + 1) * LIST_ITEM_HEIGHT },
  bodyContainerClose: { height: 0 }
});

function HotChannelsList({
  isClosed,
  style,
  onTitlePress,
  onChannelPress,
  onAddChannelPress
}: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <View style={style}>
      <ListTitle
        text="Channels"
        isClosed={isClosed}
        onTitlePress={onTitlePress}
      />
      <Box
        style={[
          styles.bodyContainer,
          isClosed ? styles.bodyContainerClose : styles.bodyContainerOpen
        ]}
      >
        {hotChannels.map((channel: { id: string; name: string }) => (
          <ListItem
            variant="regular"
            key={channel.id}
            leftComponent={
              <Icon
                name="code-outline"
                size={20}
                color={theme.colors.text}
                style={{
                  marginRight: theme.spacing.m
                }}
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
      </Box>
    </View>
  );
}

export default HotChannelsList;
