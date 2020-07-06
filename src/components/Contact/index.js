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
import IconButton from '../../components/IconButton';
export default function Contact(props) {
  const [contactEnabled, setcontactEnabled] = useState(true);
  return (
    <Modal animationType="slide" visible={true} statusBarTranslucent={true}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalContainer}>
        <>
          <View>
            <Text style={styles.textTitle}>Adicionar / Alterar Contato</Text>
            <Text style={styles.textSubTitle}>
              Ao adicionar seu contato no perfil, ele será visível para os
              demais membros da atlética.
            </Text>
          </View>

          <View style={styles.form}>
            {contactEnabled ? (
              <>
                <Text style={styles.textWarning}>
                  Detectamos que você ja possui um contato cadastrado. Prossiga
                  caso queira altera-lo.
                </Text>
                <View style={styles.contactEnabledContainer}>
                  <View style={styles.contactEnabled}>
                    <Text style={styles.textContactEnabled}>
                      +55 (99) 98817-9097
                    </Text>
                  </View>
                  <IconButton
                    iconName="trash"
                    style={styles.iconView}
                    onPress={() => setcontactEnabled(false)}
                  />
                </View>
              </>
            ) : (
              <>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.textWarning}>
                    * Preencha somente com números
                  </Text>
                  <TextInput
                    style={styles.Input}
                    placeholder="(DDD) 99999-9999"
                    autoCompleteType="off"
                    textContentType="telephoneNumber"
                    keyboardType="number-pad"
                  />
                </View>
                <TouchableOpacity
                  style={styles.butonAcept}
                  onPress={() => setcontactEnabled(true)}>
                  <Text style={styles.textButonAccept}>Adicionar</Text>
                </TouchableOpacity>
              </>
            )}

            <View style={styles.butons}>
              <TouchableOpacity
                style={styles.butonCancel}
                onPress={() => {
                  props.onClose();
                }}>
                <Text style={styles.textButonClose}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View />
        </>
      </View>
    </Modal>
  );
}
