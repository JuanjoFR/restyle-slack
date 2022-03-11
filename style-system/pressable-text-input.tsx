import React from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import Box from "./box";
import Text from "./text";

type Props = {
  text: string;
  pressableStyle: StyleProp<ViewStyle>;
  containerStyle: StyleProp<ViewStyle>;
  onPress: () => void;
};

function PressableTextInput({
  text,
  pressableStyle,
  containerStyle,
  onPress
}: Props): JSX.Element {
  return (
    <Pressable onPress={onPress} style={pressableStyle}>
      {({ pressed }): JSX.Element => (
        <Box
          paddingHorizontal="m"
          paddingVertical="s"
          borderWidth={1}
          borderColor="inputBorder"
          borderRadius={8}
          style={containerStyle}
          backgroundColor={pressed ? "inputPress" : "mainBackground"}
        >
          <Text variant="body" color="placeholderText">
            {text}
          </Text>
        </Box>
      )}
    </Pressable>
  );
}

export default PressableTextInput;
