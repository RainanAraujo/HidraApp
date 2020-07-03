import React, {useState} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
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
import ChangePasswordModal from '../../components/changePassword';
import ToggleSwitch from 'toggle-switch-react-native';
import auth from '@react-native-firebase/auth';
import DropdownAlert from 'react-native-dropdownalert';
import Icon from 'react-native-vector-icons/Feather';

export default function Settings({data, navigation}) {
  const [modalPasswordVisible, setModalPasswordVisible] = useState(false);
  const [defaultToggle, setDefaultToggle] = useState(false);
  const [alert, setAlert] = useState({});
  const [PasswordVisible, setPasswordVisible] = useState(false);

  function Logout() {
    auth()
      .signOut()
      .then(() => navigation.navigate('Login'));
  }

  function ChangePassword(oldPassword, newPassword) {
    this.reauthenticate(oldPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(newPassword)
          .then(() => {
            alert.alertWithType('success', 'Sucesso', 'Senha Alterada');
          })
          .catch((error) => {
            alert.alertWithType('error', 'Erro', 'Erro ao Trocar Senha');
          });
      })
      .catch((error) => {
        alert.alertWithType('error', 'Erro', 'Senha Incorreta');
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      {modalPasswordVisible ? (
        <ChangePasswordModal onClose={() => setModalPasswordVisible(false)} />
      ) : (
        <>
          <DropdownAlert closeInterval={1000} ref={(ref) => setAlert(ref)} />
          <TouchableOpacity
            onPress={() => setModalPasswordVisible(true)}
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

          <TouchableOpacity onPress={Logout} style={styles.button}>
            <Text style={styles.textExitButton}>Sair</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}
