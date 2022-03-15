import { BoxProps, spacing, useRestyle, useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable } from "react-native";
import type { Theme } from "../libraries/theme";
import Box from "./box";
import Text from "./text";

const restyleFunctions = [spacing];

type Props = {
  leftComponent: JSX.Element;
  text: string;
  value: string;
  onPress: () => void;
} & BoxProps<Theme>;

function ListItemWithValue({
  leftComponent,
  text,
  value,
  onPress,
  ...rest
}: Props): JSX.Element {
  const theme = useTheme<Theme>();
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Pressable onPress={onPress}>
      {({ pressed }): JSX.Element => (
        <Box
          flexDirection="row"
          alignItems="center"
          paddingVertical="s"
          paddingHorizontal="s"
          borderRadius={theme.spacing.s}
          backgroundColor={pressed ? "listItemPressRegular" : undefined}
          {...props}
        >
          {leftComponent}
          <Box flex={1} marginRight="m">
            <Text variant="body" color="listItemBoldForeground">
              {text}
            </Text>
          </Box>

          <Box>
            <Text variant="body" color="text">
              {value}
            </Text>
          </Box>
        </Box>
      )}
    </Pressable>
  );
}

export default ListItemWithValue;
