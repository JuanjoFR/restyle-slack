import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ApplicationNavigator from "../navigators/application";
import theme from "./theme";

function Application(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <ApplicationNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default Application;
