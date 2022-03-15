import { BoxProps } from "@shopify/restyle";
import * as React from "react";
import type { Theme } from "../../libraries/theme";
import Box from "../../style-system/box";
import ProfileStatusCard from "../../style-system/profile-status-card";
import { getStatus } from "./data";

type Props = {
  onPress: () => void;
} & BoxProps<Theme>;

const statusData = getStatus();

function Status({ onPress, ...rest }: Props): JSX.Element {
  return (
    <Box {...rest}>
      <ProfileStatusCard data={statusData} onPress={onPress} />
    </Box>
  );
}

export default Status;
