import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import AuthHomeScreen from "../screens/AuthHomeScreen";
import LoginScreen from "../screens/LoginScreen";
import {authStackNavigations} from "../constants";
import SignupScreen from "../screens/SignupScreen";

export type AuthStackParamList = {
  [authStackNavigations.AUTH_HOME]: undefined;
  [authStackNavigations.LOGIN]: undefined;
  [authStackNavigations.SIGNUP]: undefined;
}
function AuthStackNavigator() {
  const Stack = createStackNavigator<AuthStackParamList>();
  return (
    <Stack.Navigator screenOptions={{
      cardStyle:{
        backgroundColor: 'white',
      },
      headerStyle:{
        backgroundColor: 'white',
      },
    }}>
      <Stack.Screen name={authStackNavigations.AUTH_HOME} component={AuthHomeScreen}/>
      <Stack.Screen name={authStackNavigations.LOGIN} component={LoginScreen}/>
      <Stack.Screen name={authStackNavigations.SIGNUP} component={SignupScreen}/>
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
