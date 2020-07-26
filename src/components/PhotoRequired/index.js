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
import {AlertTypes, SendAlert} from '../Alert';
import PhotoRequiredImage from '../../assets/images/photoRequired.png';
import {getCurrentUser} from '../../services/auth';
export default function PhotoRequired({onPress}) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalContainer}>
        <Text style={styles.textTitle}>Sua foto foi removida!</Text>

        <Image source={PhotoRequiredImage} style={styles.image} />
        <Text style={styles.textSubTitle}>
          Você não está usando o padrão de foto corretamente. Você deve
          obrigatoriamente alterá-la de acordo com os padrões de documentos
          formais.
        </Text>

        <Button
          style={styles.takePhoto}
          text={'Alterar Foto'}
          onPress={() => onPress()}
        />
      </View>
    </>
  );
}
