import AuthNavigator from "./AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigator from "./StackNavigator";
import { useSelector } from "react-redux";

const Navigator = () => {
  //need to show auth navigator if its not signed in
  const user = useSelector((state) => state.UserReducer.user);

  return (
    <NavigationContainer>
      {user ? <StackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
