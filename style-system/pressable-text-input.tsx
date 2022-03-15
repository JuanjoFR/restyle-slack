import { BoxProps } from "@shopify/restyle";
import React from "react";
import { Pressable } from "react-native";
import type { Theme } from "../libraries/theme";
import Box from "./box";
import Text from "./text";

type Props = {
  text: string;
  icon?: JSX.Element;
  onPress: () => void;
} & BoxProps<Theme>;

function PressableTextInput({
  text,
  icon,
  onPress,
  ...rest
}: Props): JSX.Element {
  return (
    <Box {...rest}>
      <Pressable onPress={onPress}>
        {({ pressed }): JSX.Element => (
          <Box
            flexDirection="row"
            backgroundColor={pressed ? "inputBorder" : undefined}
            borderWidth={1}
            borderColor="inputBorder"
            borderRadius={8}
            paddingHorizontal="m"
            paddingVertical="s"
          >
            {icon ? icon : undefined}
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
