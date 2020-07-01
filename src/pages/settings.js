import React, {useState} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Image,
  FlatList,
  CameraRoll,
  ToastAndroid,
  Modal,
} from 'react-native';

import {Divider} from 'react-native-elements';
import ToggleSwitch from 'toggle-switch-react-native';
import auth from '@react-native-firebase/auth';
import {set} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';

export default function Settings({data, navigation}) {
  const [defaultToggle, setDefaultToggle] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  function logout() {
    auth()
      .signOut()
      .then(() => navigation.navigate('Login'));
  }
  function ModalPassword() {
    return (
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}></View>
        </View>
      </Modal>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ModalPassword />
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.button}>
        <View style={styles.iconAdjustWithName}>
          <Icon name="lock" size={20} />
          <Text style={styles.textButton}>Alterar Senha</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          defaultToggle ? setDefaultToggle(false) : setDefaultToggle(true);
        }}>
        <>
          <View style={styles.iconAdjustWithName}>
            <Icon name="bell" size={20} />
            <Text style={styles.textButton}>Notificações</Text>
          </View>
          <View>
            <ToggleSwitch
              isOn={defaultToggle}
              onColor="#38B124"
              offColor="#ecf0f1"
              onToggle={() => {
                defaultToggle
                  ? setDefaultToggle(false)
                  : setDefaultToggle(true);
              }}
            />
          </View>
        </>
      </TouchableOpacity>

      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.textExitButton}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 10,
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textButton: {
    marginLeft: 8,
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
  textExitButton: {
    color: 'red',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
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
  },
  iconAdjustWithName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
