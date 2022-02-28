import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import ApplicationNavigator from "../navigators/application";
import theme from "./theme";

function Application() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <ApplicationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default Application;
