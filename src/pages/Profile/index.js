import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import QrCodeExemple from '../../assets/images/qrCodeExemple.png';
import DropdownAlert from 'react-native-dropdownalert';
import Card from '../../components/Card';
import {useSelector} from 'react-redux';
import styles from './styles';
import QRScanner from '../../components/QRScanner';
import QrCodeUser from '../../components/QrCodeUser';
import Button from '../../components/Button';

export default function Profile() {
  const [scanQrVisible, setScanQrVisible] = useState(false);
  const userData = useSelector((state) => state.userData);
  const [modalVisible, setModalVisible] = useState(false);
  const [alert, setAlert] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <DropdownAlert closeInterval={1000} ref={(ref) => setAlert(ref)} />
      {scanQrVisible ? (
        <QRScanner onClose={() => setScanQrVisible(false)} />
      ) : (
        <>
          <QrCodeUser
            modalVisible={modalVisible}
            onClose={() => setModalVisible(false)}
          />

          <View style={styles.profileContainer}>
            <Text style={styles.textWelcome}>Olá, Híbrido</Text>
            <View>
              <Card user={userData} />
              <View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.qrCodeButton}
                  onPress={() => {
                    setModalVisible(true);
                  }}>
                  <Image source={QrCodeExemple} style={styles.qrImage} />
                </TouchableOpacity>
                <Text style={styles.qrCodeText}>Acesse aqui o QR CODE</Text>
              </View>
            </View>
            <Button
              text={'Escanear Híbrido'}
              iconName={'camera'}
              style={styles.buttonScan}
              styleIcon={'#fff'}
              onPress={() => setScanQrVisible(true)}></Button>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
