import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  Modal,
  Animated,
} from 'react-native';

import QrCodeExemple from '../../assets/images/qrCodeExemple.png';
import VeteranCard from '../../assets/images/veteranCard.png';
import MonitorCard from '../../assets/images/monitorCard.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import NoobCard from '../../assets/images/noobCard.png';
import MainCard from '../../assets/images/mainCard.png';
import QRCodeScanner from 'react-native-qrcode-scanner';
import DropdownAlert from 'react-native-dropdownalert';
import Card from '../../components/Card';
import {useSelector} from 'react-redux';
import styles from './styles';
import QRScanner from '../../components/QRScanner';
import QrCodeUser from '../../components/QrCodeUser';
import Button from '../../components/Button';
export default function Profile() {
  const [scanQrVisible, setScanQrVisible] = useState(false);
  const userData = useSelector((state) => state);
  const [modalVisible, setModalVisible] = useState(false);

  const [alert, setAlert] = useState({});
  function getPostStyle(since, post) {
    var postStyle = {};

    if (post == 'monitor') {
      postStyle.color = '#2D2C2B';

      postStyle.card = MonitorCard;
    } else if (post == 'director') {
      postStyle.color = '#97007F';

      postStyle.card = MainCard;
    } else {
      var years = new Date().getFullYear() - since;
      if (years >= 1) {
        postStyle.color = '#2242A7';
        postStyle.card = VeteranCard;
      } else {
        postStyle.color = '#38B124';
        postStyle.card = NoobCard;
      }
    }
    console.log(postStyle);
    return postStyle;
  }

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
            <Animated.Text style={styles.textWelcome}>
              Olá Híbrido!
            </Animated.Text>
            <View>
              <Card
                avatar="https://avatars2.githubusercontent.com/u/48322946?s=460&u=b6afd31c4b3184d5b11d6a0615ab104876ef824a&v=4"
                data={userData.userData}
              />
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
              onPress={() => setScanQrVisible(true)}></Button>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
