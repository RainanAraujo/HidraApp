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
export default function Contact(props) {
  const [currentContact, setCurrentContact] = useState(false);
  return (
    <Modal animationType="slide" visible={true} statusBarTranslucent={true}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.modalContainer}>
        {currentContact ? (
          <>
            <View>
              <Text style={styles.textTitle}>
                Observamos que já existe um contato cadastrado!
              </Text>
              <View style={styles.currentContact}>
                <Text style={styles.textCurrentContact}>+55(99)9817-9097</Text>
              </View>
            </View>
            <View style={styles.form}>
              <Text style={styles.textSubTitle}>
                Caso deseje alterá-lo insira no campo abaixo ultilizando somente
                números.
              </Text>
              <View style={{alignItems: 'center'}}>
                <TextInput
                  style={styles.Input}
                  placeholder="(DDD) 99999-9999"
                  autoCompleteType="off"
                  textContentType="telephoneNumber"
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.butons}>
                <TouchableOpacity style={styles.butonAcept}>
                  <Text style={styles.textButonAccept}>Adicionar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.butonRemove}>
                  <Text style={styles.textButonAccept}>Apenas remover</Text>
                </TouchableOpacity>
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
        ) : (
          <>
            <View>
              <Text style={styles.textTitle}>Adicionar Contato</Text>
              <Text style={styles.textSubTitle}>
                Ao adicionar seu contato no perfil, ele será visível para os
                demais membros da atlética.
              </Text>
            </View>

            <View style={styles.form}>
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
              <View style={styles.butons}>
                <TouchableOpacity style={styles.butonAcept}>
                  <Text style={styles.textButonAccept}>Adicionar</Text>
                </TouchableOpacity>
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
        )}
      </View>
    </Modal>
  );
}
