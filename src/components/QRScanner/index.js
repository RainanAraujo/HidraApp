import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {getUserData} from '../../services/store';
import {INVALID_QRCODE_ERROR} from '../../utils/errorTypes';
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
      <View style={styles.contentScan}>
        <QRCodeScanner
          ref={(ref) => setCameraRef(ref)}
          onRead={(e) => onScan(e.data)}
          showMarker={true}
          reactivate={false}
          flashMode={flash}
          markerStyle={{borderRadius: 10}}
          bottomContent={
            <View
              style={{
                marginTop: 30,
                width: '100%',
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
                  {flash ? (
                    <Icon name={'zap-off'} size={24} />
                  ) : (
                    <Icon name={'zap'} size={24} />
                  )}
                </View>
              </TouchableOpacity>
              <Button
                outlined
                style={styles.scanClose}
                text={'Cancelar'}
                onPress={() => onClose()}
              />
            </View>
          }
        />
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
