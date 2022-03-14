import { BoxProps } from "@shopify/restyle";
import React from "react";
import { Pressable } from "react-native";
import type { Theme } from "../libraries/theme";
import Box from "./box";
import Text from "./text";

type Props = {
  text: string;
  onPress: () => void;
} & BoxProps<Theme>;

function PressableTextInput({ text, onPress, ...rest }: Props): JSX.Element {
  return (
    <Box {...rest}>
      <Pressable onPress={onPress}>
        {({ pressed }): JSX.Element => (
          <Box
            backgroundColor={pressed ? "inputBorder" : undefined}
            borderWidth={1}
            borderColor="inputBorder"
            borderRadius={8}
            paddingHorizontal="m"
            paddingVertical="s"
          >
            <Text variant="body" color="placeholderText">
              {text}
            </Text>
          </Box>
        )}
      </Pressable>
    </Box>
  );
}

export default PressableTextInput;
