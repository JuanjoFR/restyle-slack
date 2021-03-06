import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ApplicationNavigator from "../navigators/application";
import theme from "./theme";

const styles = StyleSheet.create({
  gestureHandlerRootView: { flex: 1 }
});

function Application(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={styles.gestureHandlerRootView}>
        <SafeAreaProvider>
          <NavigationContainer>
            <ApplicationNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default Application;
