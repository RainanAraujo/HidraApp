import React, {useState, useEffect} from 'react';

import CircleEffectBack from '../../assets/images/circleEffectBack.svg';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {View, Animated, StatusBar, SafeAreaView} from 'react-native';
import AppPresentation from '../../components/AppPresentation';
import {getCurrentUser, signIn} from '../../services/auth';
import LoginFormBar from '../../components/LoginFormBar';
import DropdownAlert from 'react-native-dropdownalert';
import {useSelector, useDispatch} from 'react-redux';
import LoginForm from '../../components/LoginForm';
import QRScanner from '../../components/QRScanner';
import {getUserData} from '../../services/store';
import Button from '../../components/Button';
import styles from './styles';

export default function Login({navigation, route}) {
  const dispatch = useDispatch();
  const [scanQrVisible, setScanQrVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({});
  const [value, setValue] = useState(0);
  const translateY = new Animated.Value(value);
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
  let offset = 0;

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

  const loadProfileData = async (uid) => {
    setLoading(true);
    let newUserData = {...(await getUserData(uid)), uid: uid};
    dispatch({type: 'SET_USER_DATA', data: newUserData});
    navigation.navigate('Home');
  };

  const onSubmitForm = async (email, pass) => {
    try {
      let uid = await signIn(email, pass);
      await loadProfileData(uid);
    } catch (error) {
      alert.alertWithType('error', 'Erro', error.message);
    }
  };

  useEffect(async () => {
    try {
      if (getCurrentUser()) {
        let uid = getCurrentUser().uid;
        await loadProfileData(uid);
      }
    } catch (error) {
      alert.alertWithType('error', 'Erro', error.message);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <DropdownAlert closeInterval={1000} ref={(ref) => setAlert(ref)} />
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.statusBar.backgroundColor}
      />
      {scanQrVisible ? (
        <QRScanner
          onError={(msg) => alert.alertWithType('error', 'Erro', msg)}
          onClose={() => setScanQrVisible(false)}
        />
      ) : (
        <>
          <CircleEffectBack style={styles.circleEffectBack} width={'100%'} />

          <View style={styles.loginContainer}>
            <Animated.Text
              style={{
                ...styles.textHeader,
                opacity: translateY.interpolate({
                  inputRange: [-230, 0, 0],
                  outputRange: [0, 1, 1],
                  extrapolate: 'clamp',
                }),
              }}>
              Olá!
            </Animated.Text>
            <AppPresentation translateY={translateY} />
            <PanGestureHandler
              onGestureEvent={animatedEvent}
              onHandlerStateChange={onHandlerStateChange}
              enabled={!loading}>
              <Animated.View
                style={{
                  ...styles.containerPush,
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
                <LoginFormBar translateY={translateY} loading={loading}>
                  <LoginForm onSubmit={onSubmitForm} loading={loading} />
                  <Button
                    text={'Escanear Híbrido'}
                    iconName={'camera'}
                    style={styles.buttonScan}
                    onPress={() => setScanQrVisible(true)}
                  />
                </LoginFormBar>
              </Animated.View>
            </PanGestureHandler>
            <View></View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
