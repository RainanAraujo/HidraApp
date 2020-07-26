import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';

export default function Maps({style, destination}) {
  console.log(destination);

  return (
    destination && (
      <>
        <MapView
          style={style}
          region={{
            latitude: destination.latitude,
            longitude: destination.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          loadingEnabled
          loadingIndicatorColor={'#3251B2'}>
          <Marker coordinate={destination} title={'Estabelecimanto'}></Marker>
        </MapView>
      </>
    )
  );
}
