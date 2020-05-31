import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import CircleEffectBack from '../assets/images/circleEffectBack.svg';
import LoginBarTop from '../assets/images/loginBarWithHidra.png';
import Hidra from '../assets/images/hidra.png';
export default function Login({ navigation }) {
  const [Form, setForm] = useState({
    email: '',
    pass: '',
  });

  function Login(form) {
    if (form.email != null && form.pass != null) {
      auth()
        .signInWithEmailAndPassword(form.email.trim(), form.pass.trim())
        .then((res) => {
          navigation.navigate('Home', {
            userID: res.user.uid,
          });
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3251B2"></StatusBar>
      <CircleEffectBack style={styles.circleEffectBack} width={'100%'} />

      <View style={styles.loginContainer}>
        <Text style={styles.textAcess}>Acesso Híbrido</Text>

        {/* <View style={styles.loginContainerPush}>
          <ImageBackground source={LoginBarTop} style={styles.loginBarPush}>
            <Text style={styles.loginText}>Faça o login em sua conta</Text>
          </ImageBackground>
  </View>*/}
        <View>
          <Image source={Hidra} style={styles.hidraImage} />
          <ImageBackground source={LoginBarTop} style={styles.loginBarTop}>
            <View>
              <TextInput
                style={styles.emailInput}
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={Form.email}
                onChangeText={(str) => setForm({ ...Form, email: str })}
              />
              <TextInput
                style={styles.passwordInput}
                placeholder="Senha"
                secureTextEntry={true}
                value={Form.pass}
                onChangeText={(str) => setForm({ ...Form, pass: str })}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.loginButton}
              onPress={() => Login(Form)}>
              <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.textPasswordRequest}>
              Acaso esquecer sua senha entre em contato com o diretor da
              atlética
            </Text>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2242A7',
  },
  circleEffectBack: {
    justifyContent: 'flex-start',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  textAcess: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
    fontSize: 36,
    marginTop: 10,
    alignSelf: 'center',
  },
  loginContainer: {
    paddingTop: 20,
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  loginBarTop: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 50,
    width: 393,
    height: 400,
  },
  hidraImage: { marginBottom: -100 },
  emailInput: {
    marginTop: 10,
    backgroundColor: '#EDF6FF',
    height: 50,
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  passwordInput: {
    marginTop: 10,
    backgroundColor: '#EDF6FF',
    height: 50,
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: '#2343A9',
    height: 50,
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
  },
  textPasswordRequest: {
    color: '#484D55',
    marginTop: 50,
    marginBottom: 10,
    fontFamily: 'Nunito-Regular',
    fontSize: 10,
  },
  loginContainerPush: {
    marginBottom: -230,
    bottom: 0,
    position: 'absolute',
    zIndex: 1,
  },
  loginBarPush: {
    width: 393,
    height: 400,
    alignItems: 'center',
    paddingTop: 100,
  },
  loginText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
});
