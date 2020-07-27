import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  TextInput,
  StatusBar,
  Image,
  ScrollView,
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
        <View style={styles.boxContainer}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <View style={styles.avatar}>
                <Avatar
                  rounded
                  source={{
                    uri: partnerData.pic,
                  }}
                  size={16 * vh}
                />
              </View>

              <View style={styles.textBox}>
                <Text style={styles.textTitle}>{partnerData.name}</Text>
                <Text style={styles.textSubTitle}>
                  {partnerData.discountDescription +
                    'asdasdasdasdasdasdaaaaaaaaaaaasdsssssssssas'}
                </Text>
              </View>
              <Maps
                destination={{
                  latitude: partnerData.location.latitude,
                  longitude: partnerData.location.longitude,
                }}
                style={styles.maps}
              />
            </View>
          </ScrollView>
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
