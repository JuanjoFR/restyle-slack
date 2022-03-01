import React from "react";
import ScreenWrapper from "../style-system/screen-wrapper";
import Text from "../style-system/text";

/**
 * Renders the direct messages screen.
 *
 * @returns {object} Component JSX.
 */
function DirectMessages() {
  return (
    <ScreenWrapper>
      <Text variant="header">Direct messages</Text>
    </ScreenWrapper>
  );
}

export default DirectMessages;
