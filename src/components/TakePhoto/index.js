import React, {useState, useRef, useEffect} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StatusBar,
  Image,
  Animated,
} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
import styles from './styles';
import {RNCamera} from 'react-native-camera';
import Button from '../Button';
import Icon from 'react-native-vector-icons/dist/Feather';
import {check} from 'react-native-permissions';
export default function TakePhoto({
  onClose,
  index,
  currentStep,
  currentStepBack,
}) {
  const [camera, setCamera] = useState();
  const [goTakePhoto, setGoTakePhoto] = useState();
  const [picture, setPicture] = useState();
  const slideAnim = useRef(
    new Animated.Value(
      index == currentStep && currentStepBack == false ? 390 : -390,
    ),
  ).current;
  useEffect(() => {
    if (index == currentStep && currentStepBack == false) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  }, [currentStep]);

  const takePicture = async () => {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        mirrorImage: true,
        fixOrientation: true,
        pauseAfterCapture: true,
      };
      const data = await camera.takePictureAsync(options);
      setPicture(data);
    }
  };

  return (
    <Animated.View style={{translateX: slideAnim}}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalContainer}>
        {picture ? (
          <View>
            <Text style={styles.textTitle}>Sua foto :)</Text>
            <View
              style={{
                flex: 7,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Avatar
                rounded
                size="xlarge"
                source={picture}
                activeOpacity={0.7}
              />
              <Text style={styles.textName}>Rainan Carneiro Araújo</Text>

              <Text style={styles.textSubTitle}>
                Essa foto será visível em sua carteira virtual e lista de
                membros da atlética.
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
          </View>
        ) : (
          <>
            {goTakePhoto ? (
              <>
                <RNCamera
                  ref={(ref) => {
                    setCamera(ref);
                  }}
                  zoom={0.1}
                  style={styles.camera}
                  type={RNCamera.Constants.Type.front}
                  autoFocus={RNCamera.Constants.AutoFocus.on}
                  permissionDialogTitle={'Autorização pasa uso de câmera'}
                  permissionDialogMessage={
                    'Precisamos de sua autorização para acessar sua câmera.'
                  }>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      paddingBottom: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => takePicture(camera)}
                      style={styles.capture}
                    />
                  </View>
                </RNCamera>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></View>
              </>
            ) : (
              <>
                <Text style={styles.textTitle}>Foto de perfil</Text>
                <Text style={styles.textSubTitle}>
                  Sua foto de perfil é importante para sua identificação.
                </Text>
                <View
                  style={{
                    flex: 7,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View style={styles.iconView}>
                    <Icon
                      name={'user'}
                      size={100}
                      color={styles.iconUser.color}
                    />
                  </View>

                  <Text style={styles.textIcon}>
                    Ao inserir sua foto, você so poderá altera-la após 3 mases.
                  </Text>
                  <Button
                    text={'Adicionar Foto'}
                    style={styles.buttonTake}
                    styleText={styles.textButtonTake}
                    iconName={'camera'}
                    styleIcon={styles.textButtonTake.color}
                    onPress={() => {
                      setGoTakePhoto(true);
                    }}
                  />
                </View>
              </>
            )}
          </>
        )}
      </View>
    </Animated.View>
  );
}
