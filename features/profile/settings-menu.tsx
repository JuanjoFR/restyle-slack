import { BoxProps, useTheme } from "@shopify/restyle";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../../libraries/theme";
import Box from "../../style-system/box";
import ListItemWithArrow from "../../style-system/list-item-with-arrow";

type Props = {
  onSavedItemsPress: () => void;
  onViewProfilePress: () => void;
  onNotificationsPress: () => void;
  onPreferencesPress: () => void;
} & BoxProps<Theme>;

function SettingsMenu({
  onSavedItemsPress,
  onViewProfilePress,
  onNotificationsPress,
  onPreferencesPress,
  ...rest
}: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Box {...rest}>
      <ListItemWithArrow
        leftComponent={
          <Icon
            name="bookmark-outline"
            size={20}
            color={theme.colors.text}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="Saved items"
        onPress={onSavedItemsPress}
        marginHorizontal="s"
        showChevron={false}
      />
      <ListItemWithArrow
        leftComponent={
          <Icon
            name="person-outline"
            size={20}
            color={theme.colors.listItemBoldForeground}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="View profile"
        onPress={onViewProfilePress}
        marginHorizontal="s"
        showChevron={false}
      />
      <ListItemWithArrow
        leftComponent={
          <Icon
            name="notifications-outline"
            size={20}
            color={theme.colors.listItemBoldForeground}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="Notifications"
        onPress={onNotificationsPress}
        marginHorizontal="s"
        showChevron={false}
      />
      <ListItemWithArrow
        leftComponent={
          <Icon
            name="settings-outline"
            size={20}
            color={theme.colors.listItemBoldForeground}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="Preferences"
        onPress={onPreferencesPress}
        marginHorizontal="s"
        showChevron={false}
      />
    </Box>
  );
}

export default SettingsMenu;
