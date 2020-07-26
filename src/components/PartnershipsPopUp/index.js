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
import MapView, {Marker} from 'react-native-maps';
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
            <MapView
              style={{
                height: 400,
                width: 300,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
              }}
              showsUserLocation
              loadingEnabled>
              <Marker coordinate={currentCoordinate} title={'JR Cabelos'} />
            </MapView>
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
