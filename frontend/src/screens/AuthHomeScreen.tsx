import React from 'react';
import { Button, SafeAreaView, StyleSheet, View } from "react-native";
import { AuthStackParamList } from "../navigations/AuthStackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { authStackNavigations } from "../constants";

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList,typeof authStackNavigations.AUTH_HOME>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps){
  return (
    <SafeAreaView>
    <View>
      <Button title='로그인' onPress={()=>navigation.navigate(authStackNavigations.LOGIN)}/>
      <Button title='회원가입' onPress={()=>navigation.navigate(authStackNavigations.SIGNUP)}/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
