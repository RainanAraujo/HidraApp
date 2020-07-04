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

export default function ChangePassword(props) {
  return (
    <>
      <Modal animationType="fade" visible={true} statusBarTranslucent={true}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.modalContainer}>
          <Text style={styles.textTitle}>Altere sua Senha</Text>
          <View style={{alignItems: 'center'}}>
            <TextInput
              style={styles.Input}
              placeholder="Senha Atual"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.Input}
              placeholder="Nova senha"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.Input}
              placeholder="Repita a nova senha"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.butons}>
            <TouchableOpacity
              style={styles.butonCancel}
              onPress={() => {
                props.onClose();
              }}>
              <Text style={styles.textButons}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.butonAcept}>
              <Text style={styles.textButons}>Alterar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
