import React, {useState} from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StatusBar,
  Image,
} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import Button from '../Button';
import Icon from 'react-native-vector-icons/dist/Feather';
import {check} from 'react-native-permissions';
import finishStep from '../../assets/images/finishStep.png';
export default function FinishStep() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.textTitle}>Enviar dados</Text>
        <View>
          <Image source={finishStep} style={styles.imagePhotoExemple} />
          <Text style={styles.textSubTitle}>
            Volte, verifique se seus dados estão corretos e clique em "Concluir"
            para finalizar o cadastro na Atlética HIDRA!
          </Text>
        </View>
      </View>
    </>
  );
}
