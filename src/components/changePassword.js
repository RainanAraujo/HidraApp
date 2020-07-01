import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  StatusBar,
} from 'react-native';

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

const styles = StyleSheet.create({
  butons: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textButons: {
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    alignSelf: 'center',
  },
  butonCancel: {
    backgroundColor: '#D10E29',
    height: 50,
    width: 120,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  butonAcept: {
    backgroundColor: '#519918',
    height: 50,
    width: 120,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#ffffff75',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 70,
  },
  textTitle: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 25,
    marginTop: 10,
    alignSelf: 'center',
  },
  Input: {
    backgroundColor: '#EDF6FF',
    height: 50,
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
