import { HeaderButtonProps } from "@react-navigation/elements";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../libraries/theme";
import Box from "./box";

type Props = {
  onPress: () => void;
} & HeaderButtonProps;

function HeaderSortButton({ onPress }: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Pressable onPress={onPress}>
      {({ pressed }): JSX.Element => (
        <Box
          padding="s"
          marginBottom="s"
          borderRadius={50}
          backgroundColor="headerButtonBackground"
          opacity={pressed ? 0.6 : 1}
        >
          <Icon
            name="filter-outline"
            size={20}
            color={theme.colors.mainBackground}
            // color={theme.colors.text}
            // style={{ marginRight: theme.spacing.m }}
          />
        </Box>
      )}
    </Pressable>
  );
}

export default HeaderSortButton;
