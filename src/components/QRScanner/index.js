import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {getUserData} from '../../services/store';
import {INVALID_QRCODE_ERROR} from '../../utils/errorTypes';
import styles from './styles';
import Card from '../Card';

export default function QRScanner({onError, onClose}) {
  const [scannedData, setScaneedData] = useState({});

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
    <>
      {Object.keys(scannedData).length ? (
        <Modal animationType="fade" visible={true} statusBarTranslucent={true}>
          <View style={styles.modalContainer}>
            <Text style={styles.textTitle}>ASSOCIADO</Text>
            <Card user={scannedData} />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.scanClose}
              onPress={() => {
                setScaneedData({});
              }}>
              <Icon name="x" color={styles.icons.color} size={17} />
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
        <QRCodeScanner
          onRead={(e) => onScan(e.data)}
          showMarker={true}
          reactivate={false}
          bottomContent={
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.scanClose}
              onPress={() => onClose()}>
              <Icon name="x" color={styles.icons.color} size={17} />
            </TouchableOpacity>
          }
        />
      )}
    </>
  );
}
