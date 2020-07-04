import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {getUserData} from '../../services/store';
import styles from './styles';
import Card from '../Card';

export default function QRScanner({onError, onClose}) {
  const [scannedData, setScaneedData] = useState({});

  const onScan = async (data) => {
    try {
      let res = await getUserData(data);
      setScaneedData(res);
    } catch (error) {
      onError(error.message);
      onClose();
    }
  };

  return (
    <>
      {Object.keys(scannedData).length ? (
        <Modal animationType="fade" visible={true}>
          <View style={styles.modalContainer}>
            <Text
              style={{
                ...styles.textWelcome,
                color: '#519918',
                marginBottom: 30,
                fontFamily: 'Nunito-Bold',
              }}>
              ASSOCIADO
            </Text>
            <Card
              avatar="https://avatars2.githubusercontent.com/u/48322946?s=460&u=b6afd31c4b3184d5b11d6a0615ab104876ef824a&v=4"
              data={scannedData}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.scanClose}
              onPress={() => {
                setScaneedData({});
              }}>
              <Icon name="times" color="#ffffff" size={17} />
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
              <Icon name="times" color="#ffffff" size={17} />
            </TouchableOpacity>
          }
        />
      )}
    </>
  );
}
