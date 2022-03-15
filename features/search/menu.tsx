import { BoxProps, useTheme } from "@shopify/restyle";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../../libraries/theme";
import Box from "../../style-system/box";
import ListItemWithArrow from "../../style-system/list-item-with-arrow";

type Props = {
  onBrowsePeoplePress: () => void;
  onBrowseChannelsPress: () => void;
} & BoxProps<Theme>;

function Search({
  onBrowsePeoplePress,
  onBrowseChannelsPress,
  ...rest
}: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Box {...rest}>
      <ListItemWithArrow
        leftComponent={
          <Icon
            name="people-outline"
            size={20}
            color={theme.colors.text}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="Browse People"
        onPress={onBrowsePeoplePress}
        marginHorizontal="s"
      />
      <ListItemWithArrow
        leftComponent={
          <Icon
            name="code-outline"
            size={20}
            color={theme.colors.listItemBoldForeground}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="Browse Channels"
        onPress={onBrowseChannelsPress}
        marginHorizontal="s"
      />
    </Box>
  );
}

export default Search;
