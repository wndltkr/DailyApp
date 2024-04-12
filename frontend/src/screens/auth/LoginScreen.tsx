import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import InputField from "../../components/inputField";
import CustomButton from "../../components/CustomButton";

function LoginScreen(){
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  //
  // const handleChangeEmail = (text:string) => {
  //   setEmail(text);
  // };
  //
  // const handleChangePassword = (text:string) => {
  //   setPassword(text);
  // };

  const [values, setValues] = useState({
    email: false,
    password: false
  });

  const [touched, setTouched] = useState({
    email: '',
    password: ''
  });

  const handleChangeText = (name: string, text: string) =>{
    setValues({
      ...values,
      [name]: text,
    })
  }

  const handleBlur = (name: string) => {
    setTouched({
      ...touched,
      [name]: true,
    })
  }

  const handleSubmit = () =>{
    console.log('values', values);
  }

  return(
    <SafeAreaView style={styles.container}>
    <View style={styles.inputContainer}>
      <InputField
        placeholder='이메일'
        error={'이메일을 입력해주세요'}
        touched={touched.email}
        inputMode="email"
        value={values.email}
        onChangeText={(text)=>handleChangeText('email',text)}
        onBlur={() => handleBlur('email')}
      />
      <InputField
        placeholder='비밀번호'
        error={'비밀번호를 입력해주세요'}
        touched={touched.password}
        secureTextEntry
        value={values.password}
        onChangeText={(text)=>handleChangeText('password',text)}
        onBlur={() => handleBlur('password')}
      />
    </View>
      <CustomButton label='로그인' variant='filled' size='large' onPress={handleSubmit}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:30
  },
  inputContainer:{
    gap: 20,
    marginBottom: 30,
  }
});

export default LoginScreen;
