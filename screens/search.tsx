import { useTheme } from "@shopify/restyle";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FiltersMenu from "../features/search/filters-menu";
import Menu from "../features/search/menu";
import type { Theme } from "../libraries/theme";
import Separator from "../style-system/separator";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function Search(): JSX.Element {
  const theme = useTheme<Theme>();

  function handleBrowsePeoplePress(): void {
    Alert.alert("Handle browse people press");
  }

  function handleBrowseChannelsPress(): void {
    Alert.alert("Handle browse channels press");
  }

  function handleFromFilterPress(): void {
    Alert.alert('Handle "from" filter press');
  }

  function handleIsFilterPress(): void {
    Alert.alert('Handle "is" filter press');
  }

  function handleAfterFilterPress(): void {
    Alert.alert('Handle "after" filter press');
  }

  function handleInFilterPress(): void {
    Alert.alert('Handle "in" filter press');
  }

  return (
    <SafeAreaView
      edges={["right", "left"]}
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.mainBackground
        }
      ]}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <Menu
          marginVertical="s"
          onBrowsePeoplePress={handleBrowsePeoplePress}
          onBrowseChannelsPress={handleBrowseChannelsPress}
        />
        <Separator />
        <FiltersMenu
          onFromFilterPress={handleFromFilterPress}
          onIsFilterPress={handleIsFilterPress}
          onAfterFilterPress={handleAfterFilterPress}
          onInFilterPress={handleInFilterPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Search;
