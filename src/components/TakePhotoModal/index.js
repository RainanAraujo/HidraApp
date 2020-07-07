import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StatusBar,
} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
import styles from './styles';
import {RNCamera} from 'react-native-camera';
import Button from '../../components/Button';
export default function TakePhotoModal({visible, onClose}) {
  const [camera, setCamera] = useState();
  const [picture, setPicture] = useState();
  const takePicture = async () => {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        exif: true,
      };
      const data = await camera.takePictureAsync(options);
      data.exif.Orientation = '180deg';
      setPicture(data);
    }
  };
  return (
    <Modal animationType="slide" visible={visible} statusBarTranslucent={true}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalContainer}>
        {picture ? (
          <View>
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
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Button
                text={'Voltar'}
                style={styles.buttonCancel}
                styleText={styles.textButton}
                onPress={() => setPicture(null)}
              />

              <Button text={'Continuar'} style={styles.buttonContinue} />
            </View>
          </View>
        ) : (
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
              }}>
              <Button
                text={'Cancelar'}
                style={styles.buttonCancel}
                styleText={styles.textButton}
                onPress={() => onClose()}
              />
            </View>
          </>
        )}
      </View>
    </Modal>
  );
}
