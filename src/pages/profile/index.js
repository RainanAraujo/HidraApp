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

import QRCodeScanner from 'react-native-qrcode-scanner';
import DropdownAlert from 'react-native-dropdownalert';
import QRCode from 'react-native-qrcode-svg';
import firestore from '@react-native-firebase/firestore';
import NoobCard from '../../assets/images/noobCard.png';
import VeteranCard from '../../assets/images/veteranCard.png';
import MonitorCard from '../../assets/images/monitorCard.png';
import MainCard from '../../assets/images/mainCard.png';
import Card from '../../components/card';
import Icon from 'react-native-vector-icons/FontAwesome';
import QrCodeExemple from '../../assets/images/qrCodeExemple.png';

export default function Profile({data, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [scanQrVisible, setScanQrVisible] = useState(false);
  const [scannedQrVisible, setScaneedQrVisible] = useState(false);
  const [modalApesentation, setModalApresentation] = useState(true);
  const [scannedData, setScaneedData] = useState({});
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
            <QRCode value={data.qrcode} size={200} />
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

  QRScanned = (e) => {
    if (!e.data.includes('/')) {
      firestore()
        .collection('users')
        .doc(e.data)
        .get()
        .then((data) => {
          if (data.exists) {
            setScaneedData(data.data());
            setScaneedQrVisible(true);
          } else {
            alert.alertWithType('error', 'Erro', 'Codigo inválido');
            setScanQrVisible(false);
          }
        })
        .catch((error) => {
          alert.alertWithType(
            'error',
            'Erro',
            'Não foi possivel carregar dados do usuário',
          );
          setScanQrVisible(false);
        });
    } else {
      alert.alertWithType('error', 'Erro', 'Codigo inválido');
      setScanQrVisible(false);
    }
  };

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
                data={data}
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
