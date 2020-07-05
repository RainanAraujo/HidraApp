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
import {Assets} from '@react-navigation/stack';

export default function Settings({navigation}) {
  const dispatch = useDispatch();
  const [modalPasswordVisible, setModalPasswordVisible] = useState(false);

  const [ToggleDarkMode, setToggleDarkMode] = useState(false);
  const [ToggleNotification, setToggleNotification] = useState(false);
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
          <TouchableOpacity style={styles.button}>
            <View style={styles.iconAdjustWithName}>
              <Icon name="user" size={20} />
              <Text style={styles.textButton}>Alterar foto de perfil</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.iconAdjustWithName}>
              <Icon name="phone" size={20} />
              <Text style={styles.textButton}>Adicionar contato</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            style={styles.button}
            onPress={() => {
              ToggleDarkMode
                ? setToggleDarkMode(false)
                : setToggleDarkMode(true);
            }}>
            <>
              <View style={styles.iconAdjustWithName}>
                <Icon name="moon" size={20} />
                <Text style={styles.textButton}>Modo escuro (Em Breve)</Text>
              </View>
              <View>
                <ToggleSwitch
                  disabled={true}
                  isOn={ToggleDarkMode}
                  onColor="#38B124"
                  offColor="#ecf0f1"
                  onToggle={() => {
                    ToggleDarkMode
                      ? setToggleDarkMode(false)
                      : setToggleDarkMode(true);
                  }}
                />
              </View>
            </>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              ToggleNotification
                ? setToggleNotification(false)
                : setToggleNotification(true);
            }}>
            <>
              <View style={styles.iconAdjustWithName}>
                <Icon name="bell" size={20} />
                <Text style={styles.textButton}>Notificações</Text>
              </View>
              <View>
                <ToggleSwitch
                  isOn={ToggleNotification}
                  onColor="#38B124"
                  offColor="#ecf0f1"
                  onToggle={() => {
                    ToggleNotification
                      ? setToggleNotification(false)
                      : setToggleNotification(true);
                  }}
                />
              </View>
            </>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await signOut();
              dispatch({type: 'SET_USER_DATA', data: {}});
              navigation.replace('Login');
            }}>
            <Text style={styles.textExitButton}>Sair</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}
