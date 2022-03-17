import { useTheme } from "@shopify/restyle";
import React from "react";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
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
const LIST_ITEM_HEIGHT = 40;
const HEIGHT_MIN = 0;
const HEIGHT_MAX = (hotMessages.length + 1) * LIST_ITEM_HEIGHT;
const styles = StyleSheet.create({
  bodyContainer: {
    overflow: "hidden"
  },
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
        text="Direct messages"
        isClosed={isClosed}
        onAddPress={onAddMessagePress}
        onTitlePress={handleTitlePress}
      />
      <Animated.View style={[styles.bodyContainer, animatedStyles]}>
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
      </Animated.View>
    </View>
  );
}

export default HotMessagesList;
