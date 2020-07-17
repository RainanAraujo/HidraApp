import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/Feather';
import Button from '../Button';
import {AlertTypes, SendAlert} from '../../components/Alert';
import sendEmail from '../../assets/images/sendEmail.png';
import {getCurrentUser} from '../../services/auth';
export default function ChangePassword({visible, onClose}) {
  const [loading, setLoading] = useState();
  const [send, setSend] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalContainer}>
        <Text style={styles.textTitle}>Altere sua Senha</Text>
        <View style={{alignItems: 'center'}}>
          {send ? (
            <>
              <Icon name={'send'} size={80} color="#484D55" />
              <Text style={styles.textTitle}>Link enviado! :D</Text>
            </>
          ) : (
            <>
              <Image source={sendEmail} style={styles.imageSendEmail} />
              <Text style={styles.textSubTitle}>
                {'Será enviado um link de alteração de senha no e-mail:'}
              </Text>
              <View style={styles.emailUser}>
                <Text style={styles.textEmailUser}>
                  {getCurrentUser().email}
                </Text>
              </View>
            </>
          )}
        </View>

        <View style={styles.buttons}>
          <Button
            outlined
            style={styles.buttonCancel}
            onPress={() => {
              onClose();
            }}
            text={'Cancelar'}
          />
          {send ? (
            <></>
          ) : (
            <Button
              style={styles.buttonAccept}
              text={'Continuar'}
              loading={loading}
              onPress={() =>
                SendAlert(AlertTypes.SUCCESS, 'Confira seu e-mail')
              }
            />
          )}
        </View>
      </View>
    </>
  );
}
