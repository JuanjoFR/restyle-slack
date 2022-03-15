import { BoxProps, useTheme } from "@shopify/restyle";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../../libraries/theme";
import Box from "../../style-system/box";
import ListItemWithArrow from "../../style-system/list-item-with-arrow";

type Props = {
  onPauseNotificationsPress: () => void;
  onSetActivePress: () => void;
} & BoxProps<Theme>;

function ShortcutsMenu({
  onPauseNotificationsPress,
  onSetActivePress,
  ...rest
}: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Box {...rest}>
      <ListItemWithArrow
        leftComponent={
          <Icon
            name="notifications-off-outline"
            size={20}
            color={theme.colors.text}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="Pause notifications"
        onPress={onPauseNotificationsPress}
        marginHorizontal="s"
        showChevron={false}
      />
      <ListItemWithArrow
        leftComponent={
          <Icon
            name="person-circle-outline"
            size={20}
            color={theme.colors.listItemBoldForeground}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="Set yourself as active"
        onPress={onSetActivePress}
        marginHorizontal="s"
        showChevron={false}
      />
    </Box>
  );
}

export default ShortcutsMenu;
