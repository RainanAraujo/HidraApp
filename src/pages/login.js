import React, {useState, useEffect} from 'react';
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
  ActivityIndicator,
  Animated,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DropdownAlert from 'react-native-dropdownalert';
import CircleEffectBack from '../assets/images/circleEffectBack.svg';
import LoginBarTop from '../assets/images/loginBarWithHidra.png';
import Hidra from '../assets/images/hidra.png';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import ApresentationImage from '../assets/images/apresentationImage.png';
import Qrscan from '../components/qrscan';
import Icon from 'react-native-vector-icons/Feather';
import QrCodeExemple from '../assets/images/qrCodeExemple.png';
export default function Login({navigation}) {
  const [scanQrVisible, setScanQrVisible] = useState(false);
  const [value, setValue] = useState(0);
  const translateY = new Animated.Value(value);
  let offset = 0;
  const [loading, setLoading] = useState(false);
  const [Form, setForm] = useState({
    email: '',
    pass: '',
  });
  const [alert, setAlert] = useState({});
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;
      if (translationY <= -70) {
        opened = true;
        setValue(-230);
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? -230 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? -230 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  useEffect(() => {
    if (auth().currentUser != null) {
      setLoading(true);
      loadUserMenu(auth().currentUser.uid);
    }
  }, []);

  function loadUserMenu(userID) {
    firestore()
      .collection('users')
      .doc(userID)
      .get()
      .then((data) => {
        setLoading(false);
        navigation.navigate('Home', {
          data: {...data.data(), qrcode: userID},
        });
      })
      .catch((error) => {
        setLoading(false);
        alert.alertWithType(
          'error',
          'Erro',
          'Não foi possivel carregar dados do usuário',
        );
      });
  }

  function Login(form) {
    setLoading(true);
    if (form.email && form.pass) {
      auth()
        .signInWithEmailAndPassword(form.email.trim(), form.pass.trim())
        .then((res) => {
          loadUserMenu(res.user.uid);
        })
        .catch((error) => {
          setLoading(false);
          if (error.code == 'auth/network-request-failed') {
            alert.alertWithType('error', 'Erro', 'Erro na Rede');
          } else if (error.code == 'auth/invalid-email') {
            alert.alertWithType('error', 'Erro', 'Email Inválido');
          } else {
            alert.alertWithType('error', 'Erro', 'Login Inválido');
          }
        });
    } else {
      setLoading(false);
      alert.alertWithType('error', 'Erro', 'Login Inválido');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3251B2" />
      {scanQrVisible ? (
        <QrScan />
      ) : (
        <>
          <DropdownAlert closeInterval={1000} ref={(ref) => setAlert(ref)} />

          <CircleEffectBack style={styles.circleEffectBack} width={'100%'} />

          <View style={styles.loginContainer}>
            <TouchableOpacity style={styles.scanButton}>
              <Image source={QrCodeExemple} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <Animated.Text
              style={{
                ...styles.textAcess,
                opacity: translateY.interpolate({
                  inputRange: [-230, 0, 0],
                  outputRange: [0, 1, 1],
                  extrapolate: 'clamp',
                }),
              }}>
              Olá!
            </Animated.Text>

            <Animated.View
              style={{
                alignItems: 'center',
                opacity: translateY.interpolate({
                  inputRange: [-230, 0, 0],
                  outputRange: [0, 1, 1],
                  extrapolate: 'clamp',
                }),
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [-230, 0, 0],
                      outputRange: [-50, 0, 0],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}>
              <Image source={ApresentationImage} />
              <Text style={styles.textApresentation}>
                Aplicação feita para os associados da Atlética Hidra do
                Instituto Federal de Educação, Ciência e Tecnologia do Maranhão
                - Campus Caxias
              </Text>
            </Animated.View>

            <PanGestureHandler
              onGestureEvent={animatedEvent}
              onHandlerStateChange={onHandlerStateChange}>
              <Animated.View
                style={{
                  ...styles.loginContainerPush,
                  transform: [
                    {
                      translateY: translateY.interpolate({
                        inputRange: [-230, 0, 300],
                        outputRange: [-230, 0, 50],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                }}>
                <Animated.Image
                  source={Hidra}
                  style={{
                    ...styles.hidraImage,
                    opacity: translateY.interpolate({
                      inputRange: [-230, -200, 0],
                      outputRange: [1, 0, 0],
                    }),
                  }}
                />
                <ImageBackground
                  source={LoginBarTop}
                  style={styles.loginBarPush}>
                  {loading ? (
                    <Animated.View
                      style={{
                        opacity: translateY.interpolate({
                          inputRange: [-230, 0, 0],
                          outputRange: [0, 1, 0],
                          extrapolate: 'clamp',
                        }),
                      }}>
                      <ActivityIndicator size="large" color="#2343A9" />
                    </Animated.View>
                  ) : (
                    <Animated.Text
                      style={{
                        ...styles.loginText,
                        opacity: translateY.interpolate({
                          inputRange: [-200, 0, 300],
                          outputRange: [0, 1, 1],
                        }),
                      }}>
                      Arraste para fazer Login
                    </Animated.Text>
                  )}
                  <Animated.View
                    style={{
                      marginTop: 90,
                      opacity: translateY.interpolate({
                        inputRange: [-230, 0, 0],
                        outputRange: [1, 0, 0],
                        extrapolate: 'clamp',
                      }),
                      transform: [
                        {
                          translateY: translateY.interpolate({
                            inputRange: [-230, 0, 0],
                            outputRange: [-70, 0, 0],
                            extrapolate: 'clamp',
                          }),
                        },
                      ],
                    }}>
                    <View style={{alignItems: 'center'}}>
                      <TextInput
                        style={styles.emailInput}
                        autoCapitalize="none"
                        placeholder="Email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        value={Form.email}
                        returnKeyType="next"
                        onChangeText={(str) => setForm({...Form, email: str})}
                      />
                      <TextInput
                        style={styles.passwordInput}
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={Form.pass}
                        onChangeText={(str) => setForm({...Form, pass: str})}
                      />
                    </View>

                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.loginButton}
                      disabled={loading}
                      onPress={() => Login(Form)}>
                      {loading ? (
                        <ActivityIndicator size="large" color="#ffffff" />
                      ) : (
                        <Text style={styles.textButton}>Login</Text>
                      )}
                    </TouchableOpacity>
                  </Animated.View>
                </ImageBackground>
              </Animated.View>
            </PanGestureHandler>
            <View></View>
          </View>
        </>
      )}
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
    alignSelf: 'center',
  },
  loginContainer: {
    paddingTop: 20,
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
  },
  hidraImageContainer: {
    justifyContent: 'space-around',
    paddingTop: 50,
    width: 393,
    height: 400,
  },
  hidraImage: {
    transform: [
      {
        translateY: 100,
      },
    ],
  },
  emailInput: {
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
    width: '100%',
    bottom: 0,
    position: 'absolute',
    zIndex: 1,
  },
  loginBarPush: {
    width: '100%',
    height: 400,
    alignItems: 'center',
    paddingTop: 90,
  },
  loginText: {
    marginTop: 90,
    position: 'absolute',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
  textApresentation: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#ffffff',
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 20,
  },
  scanButton: {
    position: 'absolute',
    right: 20,
    top: 30,
    backgroundColor: '#FFFFFF',
    height: 60,
    width: 60,
    borderRadius: 50,
    paddingHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
