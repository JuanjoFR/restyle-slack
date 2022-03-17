import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
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
const LIST_ITEM_HEIGHT = 40;
const HEIGHT_MIN = 0;
const HEIGHT_MAX = (hotChannels.length + 1) * LIST_ITEM_HEIGHT;
const styles = StyleSheet.create({
  bodyContainer: {
    overflow: "hidden"
  }
});

function HotChannelsList({
  style,
  onChannelPress,
  onAddChannelPress
}: Props): JSX.Element {
  const theme = useTheme<Theme>();
  const [isClosed, setIsClosed] = React.useState(false);
  const height = useSharedValue(HEIGHT_MAX);
  const animatedStyles = useAnimatedStyle(() => ({
    height: withTiming(height.value, {
      duration: 200
    })
  }));

  function handleTitlePress(): void {
    setIsClosed(!isClosed);
  }

  React.useEffect(() => {
    height.value = isClosed ? HEIGHT_MIN : HEIGHT_MAX;
  }, [height, isClosed]);

  return (
    <View style={style}>
      <ListTitle
        text="Channels"
        isClosed={isClosed}
        onTitlePress={handleTitlePress}
      />
      <Animated.View style={[styles.bodyContainer, animatedStyles]}>
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
      </Animated.View>
    </View>
  );
}

export default HotChannelsList;
