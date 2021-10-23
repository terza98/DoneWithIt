import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function AppButton({ text }) {
  return <View style={styles.button}>{text}</View>;
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
    height: 70,
  },
});
export default Button;
