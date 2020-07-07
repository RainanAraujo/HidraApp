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
export default function TakePhotoModal({visible, onClose}) {
  const [camera, setCamera] = useState();
  const [picture, setPicture] = useState();
  const takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      setPicture(data);
    }
  };
  return (
    <Modal animationType="slide" visible={visible} statusBarTranslucent={true}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalContainer}>
        {picture ? (
          <View>
            <Avatar
              rounded
              size="xlarge"
              source={picture}
              activeOpacity={0.7}
            />
          </View>
        ) : (
          <RNCamera
            ref={(ref) => {
              setCamera(ref);
            }}
            style={styles.camera}
            type={RNCamera.Constants.Type.front}>
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> SNAP </Text>
              </TouchableOpacity>
            </View>
          </RNCamera>
        )}
      </View>
    </Modal>
  );
}
