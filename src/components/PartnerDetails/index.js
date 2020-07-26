import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';
import styles from './styles';
import Button from '../Button';
import Maps from '../../components/Maps';
import {Avatar} from 'react-native-elements';
import {vw, vh} from '../../utils/dimensions';

export default function PartnerDetails({onPress, onClose, partnerData}) {
  const [currentCoordinate, setCurrentCoordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  console.log(partnerData);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalContainer}>
        <View style={styles.avatar}>
          <Avatar
            rounded
            source={{
              uri: partnerData.pic,
            }}
            size={16 * vh}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.textBox}>
            <Text style={styles.textTitle}>{partnerData.name}</Text>
            <Text style={styles.textSubTitle}>
              {partnerData.discountDescription}
            </Text>
          </View>
          <Maps
            destination={{
              latitude: partnerData.location.latitude,
              longitude: partnerData.location.longitude,
            }}
            style={styles.maps}
          />
          <Button
            outlined
            style={styles.buttonCancel}
            onPress={() => {
              Linking.openURL(
                `geo:0,0?q=${partnerData.location.latitude}${partnerData.location.longitude}(${partnerData.name})`,
              );
            }}
            text={'Maps'}
          />
          <Button
            outlined
            style={styles.buttonCancel}
            onPress={() => onClose()}
            text={'Cancelar'}
          />
        </View>
      </View>
    </>
  );
}
