import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import CircleEffectBack from '../assets/images/circleEffectBack.svg';
import LoginBarTop from '../assets/images/loginBarWithHidra.png';

export default function Login({navigation}) {
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

      <View style={styles.loginBarContainer}>
        <Text style={styles.textAcess}>Acesso Híbrido</Text>
        <View>
          <Image style={styles.loginBarTop} source={LoginBarTop} />
          <View style={styles.loginBar}>
            <TextInput
              style={styles.emailInput}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={Form.email}
              onChangeText={(str) => setForm({...Form, email: str})}
            />
            <TextInput
              style={styles.passwordInput}
              placeholder="Senha"
              secureTextEntry={true}
              value={Form.pass}
              onChangeText={(str) => setForm({...Form, pass: str})}
            />
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
          </View>
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
  loginBarContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  loginBarTop: {
    width: 393,
  },
  loginBar: {
    backgroundColor: '#ffffff',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});
