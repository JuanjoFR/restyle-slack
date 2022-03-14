import { BoxProps, useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../libraries/theme";
import Box from "./box";

type Props = {
  onPress: () => void;
} & BoxProps<Theme>;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8
  },
  icon: { top: -2, left: 1 }
});

function FloatingNewMessageButton({ onPress, ...rest }: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Box position="absolute" {...rest}>
      <Pressable onPress={onPress}>
        {({ pressed }): JSX.Element => (
          <Box
            backgroundColor={pressed ? "leadButtonActiveBackground" : "button"}
            borderRadius={50}
            style={styles.container}
            padding="m"
          >
            <Icon
              name="create-outline"
              size={25}
              color={
                pressed
                  ? theme.colors.mainForeground
                  : theme.colors.mainBackground
              }
              style={styles.icon}
            />
          </Box>
        )}
      </Pressable>
    </Box>
  );
}

export default FloatingNewMessageButton;
