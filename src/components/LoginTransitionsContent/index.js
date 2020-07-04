import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  ImageBackground,
  ActivityIndicator,
  Animated,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DropdownAlert from 'react-native-dropdownalert';
import CircleEffectBack from '../../assets/images/circleEffectBack.svg';
import LoginBarTop from '../../assets/images/loginBarWithHidra.png';
import Hidra from '../../assets/images/hidra.png';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import ApresentationImage from '../../assets/images/apresentationImage.png';
import QrScan from '../qrscan';
import Icon from 'react-native-vector-icons/Feather';
import LoginForm from '../LoginForm';
import {styles} from './styles';

export default function loginTransitionsContent({}) {
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
    <>
      <DropdownAlert closeInterval={1000} ref={(ref) => setAlert(ref)} />
      {scanQrVisible ? (
        <QrScan
          onError={(msg) => alert.alertWithType('error', 'Erro', msg)}
          onClose={() => setScanQrVisible(false)}
        />
      ) : (
        <>
          <CircleEffectBack style={styles.circleEffectBack} width={'100%'} />

          <View style={styles.loginContainer}>
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
                      ARRASTE <Icon name="arrow-up" color="#000" size={20} />{' '}
                      PARA FAZER LOGIN
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
                    <LoginForm />
                  </Animated.View>
                </ImageBackground>
              </Animated.View>
            </PanGestureHandler>
            <View></View>
          </View>
        </>
      )}
    </>
  );
}
