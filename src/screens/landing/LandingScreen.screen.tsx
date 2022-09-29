import React from "react";
import { Image, View } from "react-native";
import LayoutWithoutNav from "../../layouts/LayoutWithoutNav";

const LandingScreen = () => {
  return (
    <LayoutWithoutNav>
      <View>Edwin</View>
      <Image
        source={require("../../images/image-1.png")}
        style={{ height: "50%" }}
      />
    </LayoutWithoutNav>
  );
};

export default LandingScreen;
