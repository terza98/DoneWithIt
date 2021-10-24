import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import { Button, Image } from "react-native";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  return <ListingEditScreen />;
}
