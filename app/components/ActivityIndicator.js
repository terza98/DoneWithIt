import React, { useEffect, useRef } from "react";
import AnimatedLottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  const animation = useRef();
  useEffect(() => {
    animation.current.play();
  }, []);

  if (!visible) return null;
  return (
    <AnimatedLottieView
      ref={animation}
      source={require("../assets/animations/loader.json")}
      autoplay
      loop
    />
  );
}

export default ActivityIndicator;
