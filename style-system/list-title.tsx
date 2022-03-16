import { useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../libraries/theme";
import Box from "./box";
import Text from "./text";

type Props = {
  text: string;
  isClosed: boolean;
  onTitlePress: () => void;
  onAddPress?: () => void;
};

const styles = StyleSheet.create({
  textPressable: { flex: 1 },
  iconUnpressed: { opacity: 1 },
  iconPressed: { opacity: 0.4 }
});

function ListTitle({
  text,
  isClosed,
  onTitlePress,
  onAddPress
}: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      // backgroundColor="cardPrimaryBackground"
    >
      <Pressable onPress={onTitlePress} style={styles.textPressable}>
        {({ pressed }): JSX.Element => (
          <Box
            paddingTop="s"
            paddingBottom="m"
            paddingLeft="m"
            paddingRight="s"
          >
            <Text variant="header" opacity={pressed ? 0.4 : 1}>
              {text}
            </Text>
          </Box>
        )}
      </Pressable>
      {onAddPress ? (
        <Pressable onPress={onAddPress}>
          {({ pressed }): JSX.Element => (
            <Box paddingTop="s" paddingBottom="m" paddingHorizontal="s">
              <Icon
                name="add-outline"
                size={20}
                color={theme.colors.text}
                style={pressed ? styles.iconPressed : styles.iconUnpressed}
              />
            </Box>
          )}
        </Pressable>
      ) : undefined}
      <Pressable onPress={onTitlePress}>
        {({ pressed }): JSX.Element => (
          <Box
            paddingTop="s"
            paddingBottom="m"
            paddingLeft="s"
            paddingRight="m"
          >
            <Icon
              name="chevron-up-outline"
              size={20}
              color={theme.colors.text}
              style={[
                pressed ? styles.iconPressed : styles.iconUnpressed,
                {
                  transform: [{ rotateZ: isClosed ? "180deg" : "0deg" }]
                }
              ]}
            />
          </Box>
        )}
      </Pressable>
    </Box>
  );
}

export default ListTitle;
