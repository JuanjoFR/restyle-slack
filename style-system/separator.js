import React from "react";
import Box from "./box";

/**
 * Renders an horizontal line as a list separator.
 *
 * @returns {object} Component JSX.
 */
function Separator() {
  return <Box height={1} backgroundColor="separator" marginBottom="s" />;
}

export default Separator;
