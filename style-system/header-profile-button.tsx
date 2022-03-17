import { HeaderButtonProps } from "@react-navigation/elements";
import * as React from "react";
import { Image, ImageSourcePropType, Pressable } from "react-native";

type Props = {
  source: ImageSourcePropType;
  onPress: () => void;
} & HeaderButtonProps;

function HeaderProfileButton({ source, onPress }: Props): JSX.Element {
  return (
    <Pressable onPress={onPress}>
      <Image source={source} width={32} height={32} borderRadius={5} />
    </Pressable>
  );
}

export default HeaderProfileButton;
