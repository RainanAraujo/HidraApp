import React, {useState} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  ImageBackground,
  Modal,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import DropdownAlert from 'react-native-dropdownalert';
import QRCode from 'react-native-qrcode-svg';
import firestore from '@react-native-firebase/firestore';
import NoobCard from '../assets/images/noobCard.png';
import VeteranCard from '../assets/images/veteranCard.png';
import MonitorCard from '../assets/images/monitorCard.png';
import MainCard from '../assets/images/mainCard.png';
import iconHidra from '../assets/images/iconHidra.png';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import QrCodeExemple from '../assets/images/qrCodeExemple.png';

export default function Profile(data) {
  const [modalVisible, setModalVisible] = useState(false);
  const [scanQrVisible, setScanQrVisible] = useState(false);
  const [scannedQrVisible, setScaneedQrVisible] = useState(false);
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
            <View style={styles.avatar}>
              <Avatar
                rounded
                source={{
                  uri:
                    'https://avatars2.githubusercontent.com/u/48322946?s=460&u=b6afd31c4b3184d5b11d6a0615ab104876ef824a&v=4',
                }}
                size={123}
                containerStyle={{
                  borderWidth: 5,
                  borderColor: getPostStyle(data.since, scannedData.post).color,
                }}
              />
            </View>
            <View style={styles.card}>
              <ImageBackground
                source={getPostStyle(data.since, scannedData.post).card}
                style={styles.cardBackground}
                resizeMode="contain">
                <Text style={styles.nameText}>{scannedData.name}</Text>
                <Text style={styles.titleText}>Curso:</Text>
                <Text style={styles.subTitleText}>{scannedData.course}</Text>
                <View style={styles.inforCardRow}>
                  <View>
                    <Text style={styles.titleText}>Ano de associação:</Text>
                    <Text style={styles.subTitleText}>{scannedData.since}</Text>
                  </View>
                  <View>
                    <Text style={styles.titleText}>Idade</Text>
                    <Text style={styles.subTitleText}>
                      {scannedData.age}Anos
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
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
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.scanClose}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Icon name="times" color="#ffffff" size={17} />
          </TouchableOpacity>
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
            <Text style={styles.textWelcome}>Olá Híbrido!</Text>
            <View>
              <View style={styles.avatar}>
                <Avatar
                  rounded
                  source={{
                    uri:
                      'https://avatars2.githubusercontent.com/u/48322946?s=460&u=b6afd31c4b3184d5b11d6a0615ab104876ef824a&v=4',
                  }}
                  size={123}
                  containerStyle={{
                    borderWidth: 5,
                    borderColor: getPostStyle(data.since, data.post).color,
                  }}
                />
              </View>
              <View style={styles.card}>
                <ImageBackground
                  source={getPostStyle(data.since, data.post).card}
                  style={styles.cardBackground}
                  resizeMode="contain">
                  <Text style={styles.nameText}>{data.name}</Text>
                  <Text style={styles.titleText}>Curso:</Text>
                  <Text style={styles.subTitleText}>{data.course}</Text>
                  <View style={styles.inforCardRow}>
                    <View>
                      <Text style={styles.titleText}>Ano de associação:</Text>
                      <Text style={styles.subTitleText}>{data.since}</Text>
                    </View>
                    <View>
                      <Text style={styles.titleText}>Idade</Text>
                      <Text style={styles.subTitleText}>{data.age} Anos</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'space-around',
    display: 'flex',
    alignItems: 'center',
  },
  textWelcome: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 36,
    marginTop: 10,
    alignSelf: 'center',
  },
  card: {
    paddingTop: 55,
    aspectRatio: 4 / 5,
    width: '90%',
  },
  cardBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    alignItems: 'center',
    marginBottom: -200,
    zIndex: 1,
  },
  scanButton: {
    marginTop: 30,
    backgroundColor: '#2343A9',
    height: 50,
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  scanClose: {
    marginTop: 30,
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrCodeButton: {
    marginTop: -70,
    backgroundColor: '#ffffff',
    height: 80,
    width: 80,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrCodeText: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
    alignSelf: 'center',
  },
  textButton: {
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
  },
  titleText: {
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 10,
  },
  subTitleText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    marginLeft: 20,
  },
  inforCardRow: {
    flexDirection: 'row',
  },
  nameText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    marginTop: 40,
    marginLeft: 20,
  },
  modalContainer: {
    backgroundColor: '#ffffff75',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
