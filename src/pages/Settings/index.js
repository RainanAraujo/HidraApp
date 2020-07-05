import React, {useState} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import ChangePasswordModal from '../../components/ChangePassword';
import ToggleSwitch from 'toggle-switch-react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import {signOut} from '../../services/auth';
import {getUserData} from '../../services/store';
import styles from './styles';
import {useDispatch} from 'react-redux';

export default function Settings({data, navigation}) {
  const dispatch = useDispatch();
  const [modalPasswordVisible, setModalPasswordVisible] = useState(false);
  const [defaultToggle, setDefaultToggle] = useState(false);
  const [PasswordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      {modalPasswordVisible ? (
        <ChangePasswordModal onClose={() => setModalPasswordVisible(false)} />
      ) : (
        <>
          <View style={styles.titleContent}>
            <Text style={styles.textTitle}>Ajustes</Text>
            <Text style={styles.textSubTitle}>Isso é auto-explicativo.</Text>
          </View>
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              signOut(navigation.navigate('Login'));
              dispatch({type: 'SET_USER_DATA', data: {}});
            }}>
            <Text style={styles.textExitButton}>Sair</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}
