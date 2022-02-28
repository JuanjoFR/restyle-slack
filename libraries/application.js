import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ApplicationNavigator from "../navigators/application";

function Application() {
  return (
    <NavigationContainer>
      <ApplicationNavigator />
    </NavigationContainer>
  );
}

export default Application;
