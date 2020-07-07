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
export default function ChangePassword({visible, onClose}) {
  return (
    <Modal animationType="slide" visible={visible} statusBarTranslucent={true}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalContainer}>
        <Text style={styles.textTitle}>Altere sua Senha</Text>
        <View style={styles.form}>
          <View style={{alignItems: 'center'}}>
            <TextInput
              style={styles.Input}
              placeholder="Senha Atual"
              secureTextEntry={true}
              autoCompleteType="off"
            />
            <TextInput
              style={styles.Input}
              placeholder="Nova senha"
              secureTextEntry={true}
              autoCompleteType="off"
            />
            <TextInput
              style={styles.Input}
              placeholder="Repita a nova senha"
              secureTextEntry={true}
              autoCompleteType="off"
            />
          </View>
          <View style={styles.butons}>
            <TouchableOpacity style={styles.butonAcept}>
              <Text style={styles.textButonAccept}>Alterar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.butonCancel}
              onPress={() => {
                onClose();
              }}>
              <Text style={styles.textButonClose}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View />
      </View>
    </Modal>
  );
}
