import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[style, defaultStyles.text]}>{children}</Text>;
}

export default AppText;
