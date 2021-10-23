import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ childer }) {
  return <Text style={styles.text}>{childer}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: tomato,
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
