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
import firestore from '@react-native-firebase/firestore';
import NoobCard from '../../assets/images/noobCard.png';
import MainCard from '../../assets/images/mainCard.png';
import QRCodeScanner from 'react-native-qrcode-scanner';
import DropdownAlert from 'react-native-dropdownalert';
import QRCode from 'react-native-qrcode-svg';
import Card from '../../components/Card';
import {useSelector} from 'react-redux';
import styles from './styles';
export default function Profile() {
  const [scannedQrVisible, setScaneedQrVisible] = useState(false);
  const [scanQrVisible, setScanQrVisible] = useState(false);
  const userData = useSelector((state) => state);
  const [modalVisible, setModalVisible] = useState(false);
  const [scannedData, setScaneedData] = useState({});

  console.log(userData);

  const [alert, setAlert] = useState({});

  function QrScan() {
    return (
      <>
        <Modal
          animationType="fade"
          transparent={true}
          visible={scannedQrVisible}>
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
                setScaneedQrVisible(false);
                setScanQrVisible(false);
                setScaneedData({});
              }}>
              <Icon name="times" color="#ffffff" size={17} />
            </TouchableOpacity>
          </View>
        </Modal>
        {scannedQrVisible ? null : (
          <QRCodeScanner
            onRead={QRScanned}
            showMarker={true}
            reactivate={false}
            bottomContent={
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.scanClose}
                onPress={() => {
                  setScanQrVisible(!scanQrVisible);
                }}>
                <Icon name="times" color="#ffffff" size={17} />
              </TouchableOpacity>
            }
          />
        )}
      </>
    );
  }

  function ModalQr() {
    return (
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <QRCode value={userData.userData.uid} size={200} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.scanClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="times" color="#ffffff" size={17} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.downloadScanButton}>
              <Icon name="download" color="#ffffff" size={17} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

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
        <QrScan />
      ) : (
        <>
          <ModalQr />

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
                  <Image
                    source={QrCodeExemple}
                    style={{width: 50, height: 50}}
                  />
                </TouchableOpacity>
                <Text style={styles.qrCodeText}>Acesse aqui o QR CODE</Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.scanButton}
              onPress={() => {
                setScanQrVisible(true);
              }}>
              <Text style={styles.textButton}>Escanear Híbrido</Text>
              <Icon name="camera" color="#ffffff" size={20} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
