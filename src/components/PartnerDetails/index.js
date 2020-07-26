import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
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

export default function PartnerDetails({onPress, onClose}) {
  const [currentCoordinate, setCurrentCoordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalContainer}>
        <View style={styles.boxContainer}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.content}>
              <View style={styles.avatar}>
                <Avatar
                  rounded
                  source={{
                    uri:
                      'https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2019/09/nego-ney-2.jpg',
                  }}
                  size={16 * vh}
                />
              </View>
              <View style={styles.textBox}>
                <Text style={styles.textTitle}>JR Cabelos - Cabeleireiro</Text>
                <Text style={styles.textSubTitle}>
                  Desconto de 10% se der a bunda pro
                  ADMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas
                </Text>
              </View>
              <Maps style={styles.maps} />
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
