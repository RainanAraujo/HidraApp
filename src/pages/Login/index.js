import React, {useState, useEffect} from 'react';
import {View, Animated, StatusBar, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import DropdownAlert from 'react-native-dropdownalert';
import CircleEffectBack from '../../assets/images/circleEffectBack.svg';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import QRScanner from '../../components/QRScanner';
import styles from './styles';
import AppApresentation from '../../components/AppApresentation';
import LoginFormBar from '../../components/LoginFormBar';

export default function Login() {
  let offset = 0;
  const [scanQrVisible, setScanQrVisible] = useState(false);
  const [value, setValue] = useState(0);
  const translateY = new Animated.Value(value);
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
            <AppApresentation translateY={translateY} />
            <PanGestureHandler
              onGestureEvent={animatedEvent}
              onHandlerStateChange={onHandlerStateChange}>
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
                <LoginFormBar translateY={translateY} loading={loading} />
              </Animated.View>
            </PanGestureHandler>
            <View></View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
