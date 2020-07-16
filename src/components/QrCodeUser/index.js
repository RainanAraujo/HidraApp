import React, {useState} from 'react';
import {View, Modal} from 'react-native';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import {useSelector} from 'react-redux';
import IconButton from '../../components/IconButton';
import Alerts from '../../utils/alerts';
import RNFS from 'react-native-fs';

export default function QrCodeUser({onClose, onError, onSuccess}) {
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
          onSuccess('Salvo em Downloads/my-qr-code.png');
        })
        .catch((error) => {
          onError(error);
        });
    });
  };

  return (
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
  );
}
