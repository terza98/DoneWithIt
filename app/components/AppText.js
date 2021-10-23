import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
