import { BoxProps, spacing, useRestyle, useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable } from "react-native";
import type { Theme } from "../libraries/theme";
import Box from "./box";
import Text from "./text";

const restyleFunctions = [spacing];

type Props = {
  variant: "regular" | "bold";
  leftComponent: JSX.Element;
  text: string;
  onPress: () => void;
} & BoxProps<Theme>;

function ListItem({
  variant,
  leftComponent,
  text,
  onPress,
  ...rest
}: Props): JSX.Element {
  const theme = useTheme<Theme>();
  const props = useRestyle(restyleFunctions, rest);

  // function getIconColor(): ColorProps<Theme> {
  //   switch (variant) {
  //     case "regular": {
  //       return "icon";
  //     }
  //     case "bold": {
  //       return "iconBold";
  //     }
  //   }
  // }

  function getTextVariant(): "body" | "boldBody" {
    switch (variant) {
      case "regular": {
        return "body";
      }
      case "bold": {
        return "boldBody";
      }
    }
  }

  function getPressedBackgroundColor():
    | "listItemPressRegular"
    | "listItemPressBold" {
    switch (variant) {
      case "regular": {
        return "listItemPressRegular";
      }
      case "bold": {
        return "listItemPressBold";
      }
    }
  }

  return (
    <Pressable onPress={onPress}>
      {({ pressed }): JSX.Element => (
        <Box
          flexDirection="row"
          alignItems="center"
          paddingVertical="s"
          marginHorizontal="s"
          paddingHorizontal="s"
          borderRadius={theme.spacing.s}
          // color={getIconColor()}
          backgroundColor={pressed ? getPressedBackgroundColor() : undefined}
          {...props}
        >
          {leftComponent}
          <Text variant={getTextVariant()}>{text}</Text>
        </Box>
      )}
    </Pressable>
  );
}

export default ListItem;
