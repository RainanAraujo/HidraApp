import React, {useState, useEffect, createRef} from 'react';

import CircleEffectBack from '../../assets/images/circleEffectBack.svg';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {
  View,
  Animated,
  StatusBar,
  SafeAreaView,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import AppPresentation from '../../components/AppPresentation';
import {getCurrentUser, signIn} from '../../services/auth';
import LoginFormBar from '../../components/LoginFormBar';
import {useDispatch} from 'react-redux';
import LoginForm from '../../components/LoginForm';
import QRScanner from '../../components/QRScanner';
import {RNCamera} from 'react-native-camera';
import {getUserData} from '../../services/store';
import Button from '../../components/Button';
import {Modal} from '../../components/Modal';
import {SendAlert, AlertTypes} from '../../components/Alert';
import styles from './styles';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [scanQRVisible, setScanQRVisible] = useState(false);
  const [loading, setLoading] = useState(false);
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
    let newUserData = await getUserData(uid);
    dispatch({type: 'SET_USER_DATA', data: newUserData});
    if (Object.keys(newUserData).length > 1) {
      navigation.replace('Home');
    } else {
      navigation.replace('Steps');
    }
  };

  const onSubmitForm = async (email, pass) => {
    try {
      setLoading(true);
      let uid = await signIn(email, pass);
      await loadProfileData(uid);
    } catch (error) {
      SendAlert(AlertTypes.ERROR, error.message);
      setLoading(false);
    }
  };

  const autoSignIn = async () => {
    try {
      if (getCurrentUser() != null) {
        setLoading(true);
        let uid = getCurrentUser().uid;
        await loadProfileData(uid);
      } else {
        setLoading(false);
      }
    } catch (error) {
      SendAlert(AlertTypes.ERROR, error.message);
      setLoading(false);
    }
  };

  const getAllPermissions = async () => {
    try {
      if (
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA) &&
        PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        )
      ) {
        const reponse = PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
      }
    } catch (error) {
      SendAlert(AlertTypes.ERROR, error.message);
    }
  };

  useEffect(() => {
    getAllPermissions();
    autoSignIn();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.statusBar.backgroundColor}
      />
      <Modal
        animation={'slide'}
        visible={scanQRVisible}
        notAnimateContent
        backgroundColor={'white'}>
        <QRScanner
          onError={(error) => SendAlert(AlertTypes.ERROR, error.message)}
          onClose={() => setScanQRVisible(false)}></QRScanner>
      </Modal>
      <CircleEffectBack style={styles.circleEffectBack} width={'100%'} />
      <View style={styles.loginContainer}>
        <Button
          text="Steps TESTE"
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Steps')}
        />
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
                outlined
                text={'Escanear Híbrido'}
                iconName={'camera'}
                style={styles.buttonScan}
                onPress={() => setScanQRVisible(true)}
              />
            </LoginFormBar>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </SafeAreaView>
  );
}
