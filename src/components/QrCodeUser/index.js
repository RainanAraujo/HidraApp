import React from 'react';
import {View, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import {useSelector} from 'react-redux';
import IconButton from '../../components/IconButton';
export default function QrCodeUser({modalVisible, onClose}) {
  const userData = useSelector((state) => state);
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.qrCode}>
          <QRCode value={userData.userData.uid} size={200} />
        </View>
        <View style={styles.buttonOptions}>
          <IconButton
            iconName="x"
            style={styles.closeButton}
            onPress={() => onClose()}
          />
          <IconButton iconName="download" style={styles.downloadButton} />
        </View>
      </View>
    </Modal>
  );
}
