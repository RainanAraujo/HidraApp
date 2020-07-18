import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import QrCodeExample from '../../assets/images/qrCodeExemple.png';
import DropdownAlert from 'react-native-dropdownalert';
import Card from '../../components/Card';
import {useSelector} from 'react-redux';
import styles from './styles';
import QRScanner from '../../components/QRScanner';
import QrCodeUser from '../../components/QrCodeUser';
import Button from '../../components/Button';
import {Modal} from '../../components/Modal';
import {SendAlert, AlertTypes} from '../../components/Alert';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {getAllClasses} from '../../utils/tools';

export default function Profile() {
  const [scanQRVisible, setScanQRVisible] = useState(false);
  const userData = useSelector((state) => state.userData);
  const [qrUserVisible, setQRUserVisible] = useState(false);
  const [alert, setAlert] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <DropdownAlert closeInterval={1000} ref={(ref) => setAlert(ref)} />
      <Modal
        animation={'slide'}
        visible={scanQRVisible}
        notAnimateContent
        backgroundColor={'white'}>
        <QRScanner
          onError={(error) => SendAlert(AlertTypes.ERROR, error.message)}
          onClose={() => setScanQRVisible(false)}></QRScanner>
      </Modal>
      <Modal visible={qrUserVisible}>
        <QrCodeUser
          onSuccess={(msg) => SendAlert(AlertTypes.SUCCESS, msg)}
          onError={(error) => SendAlert(AlertTypes.ERROR, error.message)}
          onClose={() => setQRUserVisible(false)}
        />
      </Modal>
      <View style={styles.profileContainer}>
        <Text style={styles.textWelcome}>Olá, Híbrido</Text>
        <View>
          <Card user={userData} />
          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.qrCodeButton}
              onPress={() => {
                setQRUserVisible(true);
              }}>
              <Image source={QrCodeExample} style={styles.qrImage} />
            </TouchableOpacity>
            <Text style={styles.qrCodeText}>Acesse aqui o QR CODE</Text>
          </View>
        </View>
        <Button
          text={'Escanear Híbrido'}
          iconName={'camera'}
          style={styles.buttonScan}
          styleIcon={'#fff'}
          onPress={() => setScanQRVisible(true)}></Button>
      </View>
    </SafeAreaView>
  );
}
