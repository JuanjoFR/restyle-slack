import { useTheme } from "@shopify/restyle";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../../libraries/theme";
import ListItemWithArrow from "../../style-system/list-item-with-arrow";

type Props = {
  onBrowsePeoplePress: () => void;
  onBrowseChannelsPress: () => void;
};

function Search({
  onBrowsePeoplePress,
  onBrowseChannelsPress
}: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <React.Fragment>
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
        marginTop="s"
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
        marginBottom="s"
        marginHorizontal="s"
      />
    </React.Fragment>
  );
}

export default Search;
