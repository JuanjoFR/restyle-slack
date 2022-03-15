import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { Image, ImageSourcePropType, Pressable } from "react-native";
import type { Theme } from "../libraries/theme";
import Box from "./box";
import Text from "./text";

type Props = {
  data: {
    name: string;
    avatarSource: ImageSourcePropType;
    currentStatus: "Away";
  };
  onPress: () => void;
};

function ProfileStatusCard({ data, onPress }: Props): JSX.Element {
  const theme = useTheme<Theme>();

  return (
    <Pressable onPress={onPress}>
      {({ pressed }): JSX.Element => (
        <Box
          flexDirection="row"
          paddingVertical="s"
          paddingHorizontal="m"
          backgroundColor={pressed ? "listItemPressBold" : undefined}
        >
          <Image
            source={data.avatarSource}
            width={56}
            height={56}
            borderRadius={theme.spacing.s}
            style={{ marginRight: theme.spacing.m }}
          />
          <Box flex={1} justifyContent="center">
            <Text variant="header">{data.name}</Text>
            <Text variant="body">{data.currentStatus}</Text>
          </Box>
        </Box>
      )}
    </Pressable>
  );
}

export default ProfileStatusCard;
