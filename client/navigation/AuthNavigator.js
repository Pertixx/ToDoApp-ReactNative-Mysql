import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={SignUp} name="SignUp" />
      <Stack.Screen component={SignIn} name="SignIn" />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
