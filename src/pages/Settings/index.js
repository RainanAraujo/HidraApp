import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import ChangePasswordModal from '../../components/ChangePassword';
import TakePhoto from '../../components/TakePhoto';
import Icon from 'react-native-vector-icons/dist/Feather';
import Contact from '../../components/Contact';
import ToggleSwitch from 'toggle-switch-react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUserData, updateContact} from '../../services/store';
import {signOut} from '../../services/auth';
import {SendAlert, AlertTypes} from '../../components/Alert';
import {Modal} from '../../components/Modal';
import styles from './styles';

export default function Settings({navigation}) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  const [modalPasswordVisible, setModalPasswordVisible] = useState(false);
  const [modalContactVisible, setModalContactVisible] = useState(false);
  const [modalTakePhoto, setModalTakePhoto] = useState(false);
  const [ToggleDarkMode, setToggleDarkMode] = useState(false);
  const [ToggleNotification, setToggleNotification] = useState(false);

  const changeContact = async (contact) => {
    console.log(userData.uid);
    try {
      Alerts.getDropDown().alertWithType(
        ...(await updateContact(userData.uid, contact)),
      );
      let newUserData = {...(await getUserData(uid)), uid: uid};
      dispatch({type: 'SET_USER_DATA', data: newUserData});
    } catch (error) {
      SendAlert(AlertTypes.ERROR, error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <Modal
        animation={'slide'}
        visible={modalContactVisible}
        backgroundColor={'white'}>
        <Contact
          contactValue={userData.contact}
          visible={modalContactVisible}
          onClose={() => setModalContactVisible(false)}
          onSave={changeContact}
        />
      </Modal>

      <Modal
        animation={'slide'}
        visible={modalPasswordVisible}
        backgroundColor={'white'}>
        <ChangePasswordModal onClose={() => setModalPasswordVisible(false)} />
      </Modal>

      <Modal visible={modalTakePhoto}>
        <TakePhoto />
      </Modal>

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
        onPress={() => setModalTakePhoto(true)}>
        <View style={styles.iconAdjustWithName}>
          <Icon name="user" size={20} />
          <Text style={styles.textButton}>Alterar foto de perfil</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalContactVisible(true)}>
        <View style={styles.iconAdjustWithName}>
          <Icon name="phone" size={20} />
          <Text style={styles.textButton}>Contato</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={true}
        style={styles.button}
        onPress={() => {
          ToggleDarkMode ? setToggleDarkMode(false) : setToggleDarkMode(true);
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
    </SafeAreaView>
  );
}
