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
import IconButton from '../IconButton';
import Icon from 'react-native-vector-icons/dist/Feather';
import {INVALID_CONTACT_ERROR} from '../../utils/errorTypes';
import Button from '../Button';

export default function Contact({visible, onClose, onSave, contactValue}) {
  const [contact, setContact] = useState(contactValue ? contactValue : '');
  const [contactEnabled, setContactEnabled] = useState(
    contactValue ? true : false,
  );

  return (
    <Modal animationType="slide" visible={visible} statusBarTranslucent={true}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalContainer}>
        <View>
          <Text style={styles.textTitle}>Adicionar / Alterar Contato</Text>
          <Text style={styles.textSubTitle}>
            Ao adicionar seu contato no perfil, ele será visível para os demais
            membros da atlética.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="phone" color={styles.textTitle.color} size={50} />
            <Icon name="arrow-right" color={styles.textTitle.color} size={40} />
            <Icon name="user" color={styles.textTitle.color} size={50} />
          </View>
          <View style={styles.contactContainer}>
            {contactEnabled ? (
              <>
                <TextInput
                  style={{
                    ...styles.Input,
                    backgroundColor:
                      contact.length && contact.length != 11
                        ? '#f6e1e1'
                        : styles.Input.backgroundColor,
                  }}
                  placeholder="(99) 99999-9999"
                  autoCompleteType="off"
                  textContentType="telephoneNumber"
                  keyboardType="number-pad"
                  onChangeText={(text) => setContact(text)}>
                  {contact}
                </TextInput>
                <IconButton
                  iconName="trash"
                  style={styles.iconView}
                  onPress={() => {
                    setContactEnabled(false);
                    setContact('');
                  }}
                />
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.buttonAdd}
                  onPress={() => setContactEnabled(true)}>
                  <Icon
                    name="plus"
                    color={styles.buttonAdd.borderColor}
                    size={25}
                  />
                  <Text style={styles.textButtonAdd}>Adicionar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
        <View style={styles.buttons}>
          <Button
            text={'Salvar'}
            style={styles.buttonSave}
            onPress={() => {
              (!contact || contact.length == 11) &&
                (onSave(contact), onClose());
            }}
          />
          <Button
            style={styles.buttonCancel}
            onPress={() => onClose()}
            text={'Cancelar'}
            styleText={styles.textButtonClose}
          />
        </View>

        <View />
      </View>
    </Modal>
  );
}
