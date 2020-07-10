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
  const [scannedData, setScaneedData] = useState({});
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
  const onScan = async (data) => {
    try {
      if (data.match(/^[0-9a-zA-Z]+$/) && data.length === 28) {
        let userData = await getUserData(data);
        setScaneedData(userData);
      } else {
        throw new Error(INVALID_QRCODE_ERROR);
      }
    } catch (error) {
      onError(error.message);
      onClose();
    }
  };

  return (
    <Modal animationType="fade" visible={true}>
      {Object.keys(scannedData).length ? (
        <View style={styles.modalContainer}>
          <Text style={styles.textTitle}>Híbrido detectado</Text>
          <Card user={scannedData} />
          <Button
            activeOpacity={0.7}
            style={styles.scanClose}
            text={'Cancelar'}
            onPress={() => onClose()}
            styleText={{color: '#D10E29'}}
          />
        </View>
      ) : (
        <View style={styles.contentScan}>
          <QRCodeScanner
            onRead={(e) => onScan(e.data)}
            showMarker={true}
            reactivate={false}
            flashMode={flash}
            markerStyle={{borderRadius: 10}}
          />
          <Button
            activeOpacity={0.7}
            style={styles.scanClose}
            text={'Cancelar'}
            onPress={() => onClose()}
            styleText={{color: '#D10E29'}}
          />
          <TouchableOpacity
            onPress={() => {
              flash == RNCamera.Constants.FlashMode.off
                ? setFlash(RNCamera.Constants.FlashMode.torch)
                : setFlash(RNCamera.Constants.FlashMode.off);
            }}>
            <View
              style={{
                borderWidth: 2,
                borderColor: '#484D55',
                borderRadius: 20,
                padding: 3,
                marginBottom: '5%',
              }}>
              {flash ? (
                <Icon name={'zap-off'} size={24} />
              ) : (
                <Icon name={'zap'} size={24} />
              )}
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Modal>
  );
}
