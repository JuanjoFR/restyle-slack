import { useTheme } from "@shopify/restyle";
import React from "react";
import {
  Alert,
  Image,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from "react-native";
import type { Theme } from "../../libraries/theme";
import ListItem from "../../style-system/list-item";
import ListTitle from "../../style-system/list-title";
import { getMessages } from "./data";

type Props = {
  style: StyleProp<ViewStyle>;
  onMessagePress: (id: string) => void;
  onAddMessagePress: () => void;
};

const hotMessages = getMessages();
const styles = StyleSheet.create({
  avatar: {
    borderRadius: 4
  }
});

function HotMessagesList({
  style,
  onMessagePress,
  onAddMessagePress
}: Props): JSX.Element {
  const theme = useTheme<Theme>();

  function handleTitlePress(): void {
    Alert.alert("Handle title press");
  }

  return (
    <View style={style}>
      <ListTitle
        text="Direct messages"
        onAddPress={onAddMessagePress}
        onTitlePress={handleTitlePress}
      />
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
    </View>
  );
}

export default HotMessagesList;
