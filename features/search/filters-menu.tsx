import { useTheme } from "@shopify/restyle";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../../libraries/theme";
import ListItemWithValue from "../../style-system/list-item-with-value";
import ListTitleSimple from "../../style-system/list-title-simple";

type Props = {
  onFromFilterPress: () => void;
  onIsFilterPress: () => void;
  onAfterFilterPress: () => void;
  onInFilterPress: () => void;
};

function FiltersMenu({
  onFromFilterPress,
  onIsFilterPress,
  onAfterFilterPress,
  onInFilterPress
}: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <React.Fragment>
      <ListTitleSimple text="Narrow Your Search" />
      <ListItemWithValue
        leftComponent={
          <Icon
            name="add-circle-outline"
            size={20}
            color={theme.colors.listItemBoldForeground}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="from:"
        value="Ex. @zoemaxwell"
        onPress={onFromFilterPress}
        marginHorizontal="s"
      />
      <ListItemWithValue
        leftComponent={
          <Icon
            name="add-circle-outline"
            size={20}
            color={theme.colors.listItemBoldForeground}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="is:"
        value="Ex. saved"
        onPress={onIsFilterPress}
        marginHorizontal="s"
      />
      <ListItemWithValue
        leftComponent={
          <Icon
            name="add-circle-outline"
            size={20}
            color={theme.colors.listItemBoldForeground}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="after:"
        value="Ex. 2020-12-18"
        onPress={onAfterFilterPress}
        marginHorizontal="s"
      />
      <ListItemWithValue
        leftComponent={
          <Icon
            name="add-circle-outline"
            size={20}
            color={theme.colors.listItemBoldForeground}
            style={{ marginRight: theme.spacing.m }}
          />
        }
        text="in:"
        value="Ex. #project-unicorn"
        onPress={onInFilterPress}
        marginHorizontal="s"
      />
    </React.Fragment>
  );
}

export default FiltersMenu;
