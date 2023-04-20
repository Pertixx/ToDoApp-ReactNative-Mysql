import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigator from "./StackNavigator";

const Navigator = () => {
  //need to show auth navigator if its not signed in
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
