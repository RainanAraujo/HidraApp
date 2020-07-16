import React, {useState} from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StatusBar,
} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
import styles from './styles';
import {RNCamera} from 'react-native-camera';
import Button from '../Button';
import Icon from 'react-native-vector-icons/dist/Feather';
import {check} from 'react-native-permissions';
export default function TakePhoto({visible}) {
  const [camera, setCamera] = useState();
  const [goTakePhoto, setGoTakePhoto] = useState();
  const screenWidth = Math.round(Dimensions.get('window').width);
  const [picture, setPicture] = useState();

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
    <>
      <StatusBar barStyle="dark-content" />
      {picture ? (
        <View style={styles.container}>
          <Text style={styles.textTitle}>Sua foto :)</Text>
          <View
            style={{
              flex: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Avatar
              rounded
              size={screenWidth * 0.6}
              source={picture}
              activeOpacity={0.7}
            />

            <Text style={styles.textSubTitle}>
              Essa foto será visível em sua carteira virtual e na lista de
              membros da atlética.
            </Text>
            <Button
              style={styles.buttonRetry}
              text={'Tentar Novamente'}
              onPress={() => setPicture(null)}
            />
          </View>
        </View>
      ) : (
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
      )}
    </>
  );
}
