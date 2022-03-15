import React from "react";
import Box from "./box";
import Text from "./text";

type Props = {
  text: string;
};

function ListTitleSimple({ text }: Props): JSX.Element {
  return (
    <Box flexDirection="row" alignItems="center">
      <Box paddingTop="s" paddingBottom="m" paddingLeft="m" paddingRight="s">
        <Text variant="header" fontWeight="600">
          {text}
        </Text>
      </Box>
    </Box>
  );
}

export default ListTitleSimple;
