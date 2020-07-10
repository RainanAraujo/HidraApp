import React, {useState} from 'react';
import {View, Modal} from 'react-native';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import {useSelector} from 'react-redux';
import IconButton from '../../components/IconButton';
import Alerts from '../../utils/alerts';
import RNFS from 'react-native-fs';

export default function QrCodeUser({modalVisible, onClose}) {
  const userData = useSelector((state) => state.userData);
  const [qrCode, setQRCode] = useState();

  const saveQrToDisk = () => {
    qrCode.toDataURL((data) => {
      RNFS.writeFile(
        RNFS.DownloadDirectoryPath + '/my-qr-code.png',
        data,
        'base64',
      )
        .then(() => {
          Alerts.getDropDown().alertWithType(
            'success',
            'Success',
            'Salvo em ' + RNFS.DownloadDirectoryPath + '/my-qr-code.png',
          );
        })
        .catch((error) => {
          Alerts.getDropDown().alertWithType('error', 'Erro', error.menssage);
        });
    });
  };

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.qrCode}>
          <QRCode
            getRef={(ref) => setQRCode(ref)}
            value={userData.uid}
            size={200}
          />
        </View>
        <View style={styles.buttonOptions}>
          <IconButton
            iconName="x"
            style={styles.closeButton}
            onPress={() => onClose()}
          />
          <IconButton
            onPress={saveQrToDisk}
            iconName="download"
            style={styles.downloadButton}
          />
        </View>
      </View>
    </Modal>
  );
}
