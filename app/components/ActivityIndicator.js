import React from "react";
import AnimatedLottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <AnimatedLottieView
      source={require("../assets/animations/loader.json")}
      autoplay
      loop
    />
  );
}

export default ActivityIndicator;
