import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StatusBar,
  Image,
  Animated,
} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
import styles from './styles';
import {RNCamera} from 'react-native-camera';
import Button from '../Button';
import Icon from 'react-native-vector-icons/dist/Feather';
import TakePhoto from '../../components/TakePhoto';
export default function TakePhotoStep() {
  const [goTakePhoto, setGoTakePhoto] = useState(false);

  return (
    <>
      {goTakePhoto ? (
        <TakePhoto />
      ) : (
        <View style={styles.container}>
          <Text style={styles.textTitle}>Foto de perfil</Text>
          <Text style={styles.textSubTitle}>
            Sua foto de perfil é importante para sua identificação.
          </Text>
          <View
            style={{
              flex: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.iconView}>
              <Icon name={'user'} size={100} color={styles.iconUser.color} />
            </View>

            <Text style={styles.textIcon}>
              Ao inserir sua foto, você so poderá altera-la após 3 mases.
            </Text>
            <Button
              text={'Adicionar Foto'}
              style={styles.buttonTake}
              styleText={styles.textButtonTake}
              iconName={'camera'}
              styleIcon={styles.textButtonTake.color}
              onPress={() => {
                setGoTakePhoto(true);
              }}
            />
          </View>
        </View>
      )}
    </>
  );
}
