import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../screens/auth/AuthHomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import {authStackNavigations} from '../constants';
import SignupScreen from '../screens/auth/SignupScreen';

export type AuthStackParamList = {
  [authStackNavigations.AUTH_HOME]: undefined;
  [authStackNavigations.LOGIN]: undefined;
  [authStackNavigations.SIGNUP]: undefined;
};
function AuthStackNavigator() {
  const Stack = createStackNavigator<AuthStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'grat',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name={authStackNavigations.AUTH_HOME}
        component={AuthHomeScreen}
        options={{headerTitle: '', headerShown: false}}
      />
      <Stack.Screen
        name={authStackNavigations.LOGIN}
        component={LoginScreen}
        options={{headerTitle: '로그인'}}
      />
      <Stack.Screen
        name={authStackNavigations.SIGNUP}
        component={SignupScreen}
        options={{headerTitle: '회원가입'}}
      />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
