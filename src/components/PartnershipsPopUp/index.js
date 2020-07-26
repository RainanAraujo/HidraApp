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
import Button from '../Button';
import Maps from '../../components/Maps';
export default function PhotoRequired({onPress, onClose}) {
  const [currentCoordinate, setCurrentCoordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <Text style={styles.textTitle}>JR Cabelos</Text>
          <Text style={styles.textSubTitle}>
            Inforsaaaaaaaaaaaaaaaaaasmações
          </Text>
          <View>
            <Maps
              style={{
                height: 400,
                width: 300,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            />
          </View>

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
