import React from "react";
import { StyleSheet } from "react-native";
import Box from "./box";

function Separator(): JSX.Element {
  return (
    <Box
      height={StyleSheet.hairlineWidth}
      backgroundColor="separator"
      marginBottom="s"
    />
  );
}

export default Separator;
