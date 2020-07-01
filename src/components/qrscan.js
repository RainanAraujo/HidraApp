import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import QRCodeScanner from 'react-native-qrcode-scanner';
import firestore from '@react-native-firebase/firestore';
import NoobCard from '../assets/images/noobCard.png';
import VeteranCard from '../assets/images/veteranCard.png';
import MonitorCard from '../assets/images/monitorCard.png';
import MainCard from '../assets/images/mainCard.png';
import Card from '../components/card';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function QrScan(props) {
  const [scannedQrVisible, setScaneedQrVisible] = useState(false);
  const [scannedData, setScaneedData] = useState({});
  const [alert, setAlert] = useState({});

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
            props.onError('Codigo inválido');
            props.onClose();
          }
        })
        .catch((error) => {
          console.log(error);
          props.onError('Não foi possivel carregar dados do usuário');
          props.onClose();
        });
    } else {
      props.onError('Codigo inválido');
      props.onClose();
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
    <>
      <DropdownAlert closeInterval={1000} ref={(ref) => setAlert(ref)} />
      {scannedQrVisible ? (
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
                setScaneedQrVisible(false);
                setScaneedData({});
              }}>
              <Icon name="times" color="#ffffff" size={17} />
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
        <QRCodeScanner
          onRead={QRScanned}
          showMarker={true}
          reactivate={false}
          bottomContent={
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.scanClose}
              onPress={() => {
                props.onClose();
              }}>
              <Icon name="times" color="#ffffff" size={17} />
            </TouchableOpacity>
          }
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  downloadScanButton: {
    marginTop: 30,
    backgroundColor: '#38B124',
    height: 50,
    width: 50,
    marginLeft: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrCodeButton: {
    marginTop: -40,
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
