import React from "react";
import { Pressable } from "react-native";
import Box from "./box";
import Text from "./text";

/**
 * Renders a "fake" text input that is pressable.
 *
 * @param {object} props Component properties.
 * @param {string} props.text Component text.
 * @param {object} props.pressableStyle Pressable component style.
 * @param {object} props.containerStyle Container component style.
 * @param {Function} props.onPress Function executed when the component is pressed.
 * @returns {object} Component JSX.
 */
function PressableTextInput({ text, pressableStyle, containerStyle, onPress }) {
  return (
    <Pressable onPress={onPress} style={pressableStyle}>
      {({ pressed }) => (
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
