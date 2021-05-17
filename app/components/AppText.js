import React from "react";
import { Text, View } from "react-native";

import defaultStyles from "../config/defaultStyles";

function AppText({ children, style, containerStyle, ...otherProps }) {
  return (
    <View style={containerStyle}>
      <Text style={[defaultStyles.text, style]} {...otherProps}>
        {children}
      </Text>
    </View>
  );
}

export default AppText;

// Tamil
