import { useTheme } from "@shopify/restyle";
import React from "react";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import type { Theme } from "../../libraries/theme";
import Box from "../../style-system/box";
import ListItem from "../../style-system/list-item";
import ListTitle from "../../style-system/list-title";
import { getMessages } from "./data";

type Props = {
  isClosed: boolean;
  style: StyleProp<ViewStyle>;
  onTitlePress: () => void;
  onMessagePress: (id: string) => void;
  onAddMessagePress: () => void;
};

const hotMessages = getMessages();
const LIST_ITEM_HEIGHT = 40;
const styles = StyleSheet.create({
  bodyContainer: {
    overflow: "hidden"
  },
  bodyContainerOpen: { height: hotMessages.length * LIST_ITEM_HEIGHT },
  bodyContainerClose: { height: 0 },
  avatar: {
    borderRadius: 4
  }
});

function HotMessagesList({
  isClosed,
  style,
  onTitlePress,
  onMessagePress,
  onAddMessagePress
}: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <View style={style}>
      <ListTitle
        text="Direct messages"
        isClosed={isClosed}
        onAddPress={onAddMessagePress}
        onTitlePress={onTitlePress}
      />
      <Box
        style={[
          styles.bodyContainer,
          isClosed ? styles.bodyContainerClose : styles.bodyContainerOpen
        ]}
      >
        {hotMessages.map(message => (
          <ListItem
            variant="regular"
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
            onPress={(): void => onMessagePress(message.id)}
          />
        ))}
      </Box>
    </View>
  );
}

export default HotMessagesList;
