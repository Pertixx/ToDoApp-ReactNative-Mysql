import Home from "../screens/Home";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
};

export default StackNavigator;
