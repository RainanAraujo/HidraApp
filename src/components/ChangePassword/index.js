import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  StatusBar,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/Feather';
import Button from '../Button';
export default function ChangePassword({visible, onClose}) {
  const [loading, setLoading] = useState();
  const [send, setSend] = useState(false);
  return (
    <Modal animationType="slide" visible={visible} statusBarTranslucent={true}>
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
              <Icon name={'mail'} size={80} color="#484D55" />
              <Text style={styles.textSubTitle}>
                {
                  'Será enviado um link de alteração de senha no e-mail:\n rainanaraujo@ifma.edu.br'
                }
              </Text>
            </>
          )}
        </View>

        <View style={styles.form}>
          <View style={{alignItems: 'center'}}></View>
          <View style={styles.butons}>
            {send ? (
              <></>
            ) : (
              <Button
                style={styles.butonAcept}
                text={'Continuar'}
                loading={loading}
              />
            )}

            <Button
              style={styles.butonCancel}
              onPress={() => {
                onClose();
              }}
              text={'Cancelar'}
              styleText={styles.textButonClose}
            />
          </View>
        </View>
        <View />
      </View>
    </Modal>
  );
}
