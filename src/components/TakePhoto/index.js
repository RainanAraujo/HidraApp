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
import profileExemple from '../../assets/images/profileExemple.png';
export default function TakePhoto({onClose}) {
  const [isStep, setIsStep] = useState(false);
  const [photo, setPhoto] = useState();
  const screenWidth = Math.round(Dimensions.get('window').width);
  const [picture, setPicture] = useState();

  const submitPhotoGallery = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setPhoto(source);
        setPicture(true);
      }
    });
  };

  const submitPhotoCamera = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setPhoto(source);
        setPicture(true);
      }
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      {picture ? (
        <View style={styles.container}>
          <Text style={styles.textTitle}>Sua foto :)</Text>
          <View
            style={{
              flex: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.warning}>
              <Icon name={'alert-triangle'} size={35} color="#fff" />
              <Text style={styles.textWarning}>
                Você so poderá alterar sua foto novamente após 3 meses.
              </Text>
            </View>

            <Avatar
              rounded
              size={screenWidth * 0.6}
              source={photo}
              activeOpacity={0.7}
            />

            <Text style={styles.textSubTitle}>
              Essa foto será visível em sua carteira virtual e na lista de
              membros da atlética.
            </Text>

            <Button
              style={styles.buttonRetry}
              text={'Tentar Novamente'}
              onPress={() => setPicture(null)}
            />
          </View>
          {isStep && (
            <View style={styles.buttons}>
              <Button
                outlined
                style={styles.buttonCancel}
                text={'Cancelar'}
                onPress={onClose}
              />
              <Button
                style={styles.buttonContinue}
                text={'Confirmar'}
                onPress={onClose}
              />
            </View>
          )}
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.textTitle}>Altere sua foto de perfil</Text>
          <View
            style={{
              flex: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={profileExemple} style={styles.imagePhotoExemple} />
            <Text style={styles.textSubTitle}>
              Lembre-se que é um documento formal. Caso sua foto não esteja de
              acordo, ela será analisada e você deverá obrigatoriamente anexar
              outra.
            </Text>
            <Button
              style={styles.takePhoto}
              text={'Tirar foto'}
              onPress={() => submitPhotoCamera()}
            />
            <TouchableOpacity
              style={styles.selectValery}
              onPress={() => submitPhotoGallery()}>
              <Text style={styles.textSelectGallery}>
                Selecionar da Galeria
              </Text>
            </TouchableOpacity>
          </View>
          {isStep && (
            <Button
              outlined
              style={styles.buttonCancel}
              text={'Cancelar'}
              onPress={onClose}
            />
          )}
        </View>
      )}
    </>
  );
}
