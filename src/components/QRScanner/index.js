import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {getUserData} from '../../services/store';
import {INVALID_QRCODE_ERROR} from '../../utils/errorTypes';
import {screenHeight, screenWidth, vw} from '../../utils/dimensions';
import styles from './styles';
import Card from '../Card';
import Button from '../Button';
import {RNCamera} from 'react-native-camera';

export default function QRScanner({onError, onClose}) {
  const [scannedData, setScannedData] = useState({});
  const [cameraRef, setCameraRef] = useState();

  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
  const onScan = async (data) => {
    try {
      if (data.match(/^[0-9a-zA-Z]+$/) && data.length === 28) {
        let userData = await getUserData(data);
        setScannedData(userData);
      } else {
        throw new Error(INVALID_QRCODE_ERROR);
      }
    } catch (error) {
      onError(error.message);
      onClose();
    }
  };

  return (
    <>
      <StatusBar backgroundColor="black" />
      <View style={styles.contentScan}>
        <QRCodeScanner
          ref={(ref) => setCameraRef(ref)}
          onRead={(e) => onScan(e.data)}
          showMarker={true}
          reactivate={false}
          flashMode={flash}
          containerStyle={{height: '100%', backgroundColor: 'white'}}
          cameraStyle={{
            height: '100%',
          }}
          markerStyle={{borderRadius: 10}}
        />
        <View
          style={{
            position: 'absolute',
            bottom: '2%',
            width: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => {
              flash == RNCamera.Constants.FlashMode.off
                ? setFlash(RNCamera.Constants.FlashMode.torch)
                : setFlash(RNCamera.Constants.FlashMode.off);
            }}>
            <View style={styles.flashButton}>
              <Icon
                name={flash ? 'zap-off' : 'zap'}
                size={9 * vw}
                color="#fff"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onClose()}>
            <View style={styles.scanClose}>
              <Icon name={'x'} color="#fff" size={9 * vw} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {scannedData.uid && (
        <View style={styles.userPopupContainer}>
          <Text style={styles.textTitle}>Híbrido detectado</Text>
          <Card user={scannedData} />
          <Button
            outlined
            style={styles.scanClose}
            text={'Cancelar'}
            onPress={() => {
              setScannedData({});
              cameraRef.reactivate();
            }}
          />
        </View>
      )}
    </>
  );
}
