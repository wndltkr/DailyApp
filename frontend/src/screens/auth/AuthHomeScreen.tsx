import React from 'react';
import { Animated, Button, Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import { AuthStackParamList } from "../../navigations/AuthStackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { authStackNavigations } from "../../constants/navigations";
import CustomButton from "../../components/CustomButton";
import Image = Animated.Image;

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList,typeof authStackNavigations.AUTH_HOME>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" style={styles.image} source={require('../../assets/image.png')}/>
      </View>
    <View style={styles.buttonContainer}>
      <CustomButton label='로그인' onPress={()=>navigation.navigate(authStackNavigations.LOGIN)}
      />
      <CustomButton label='회원가입' variant='outlined' onPress={()=>navigation.navigate(authStackNavigations.SIGNUP)}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 30,
    alignItems: 'center',
  },
  imageContainer:{
    flex: 1.5,
    width: Dimensions.get('screen').width /2,
  },
  image:{
    width: '100%',
    height: '100%'
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  }
});

export default AuthHomeScreen;
