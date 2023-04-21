import Home from "../screens/Home";
import React from "react";
import Todo from "../screens/Todo";
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
      <Stack.Screen component={Todo} name="Todo" />
    </Stack.Navigator>
  );
};

export default StackNavigator;
