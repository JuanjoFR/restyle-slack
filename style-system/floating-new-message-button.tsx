import { useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../libraries/theme";
import Box from "./box";

type Props = {
  style: StyleProp<ViewStyle>;
  onPress: () => void;
};

const styles = StyleSheet.create({
  icon: { top: -2, left: 1 }
});

function FloatingNewMessageButton({ style, onPress }: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Pressable onPress={onPress}>
      {({ pressed }): JSX.Element => (
        <Box
          position="absolute"
          backgroundColor="button"
          padding="m"
          borderRadius={50}
          opacity={pressed ? 0.4 : 1}
          style={style}
        >
          <Icon
            name="create-outline"
            size={25}
            color={theme.colors.mainBackground}
            style={styles.icon}
          />
        </Box>
      )}
    </Pressable>
  );
}

export default FloatingNewMessageButton;
