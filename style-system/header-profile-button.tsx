import { HeaderButtonProps } from "@react-navigation/elements";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { Image, ImageSourcePropType, Pressable } from "react-native";
import type { Theme } from "../libraries/theme";

type Props = {
  source: ImageSourcePropType;
  onPress: () => void;
} & HeaderButtonProps;

function HeaderProfileButton({ source, onPress }: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Pressable onPress={onPress}>
      <Image
        source={source}
        width={32}
        height={32}
        borderRadius={5}
        style={{ marginBottom: theme.spacing.s }}
      />
    </Pressable>
  );
}

export default HeaderProfileButton;
