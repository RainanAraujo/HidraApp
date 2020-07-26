import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {PermissionsAndroid} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';
export default function Maps({style}) {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyAcwr4_LgPkCGOEYlaUpLuEKpW4k6gfvU4';
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [currentUserCoordinate, setCurrentUserCoordinate] = useState({
    latitude: -4.881904,
    longitude: -44.88298,
  });
  const [
    currentDestinationCoordinate,
    setCurrentDestinationCoordinate,
  ] = useState({
    latitude: -4.876008,
    longitude: -44.879263,
  });

  async function verifyLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permissão concedida');
        setHasLocationPermission(true);
      } else {
        console.error('permissão negada');
        setHasLocationPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    verifyLocationPermission();
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          setCurrentUserCoordinate({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log({currentUserCoordinate});
        },
        (error) => {
          console.log(error.code, error.message);
        },
      );
    }
  }, []);

  return (
    <>
      <MapView
        style={style}
        region={{
          latitude:
            (currentUserCoordinate.latitude +
              currentDestinationCoordinate.latitude) /
            2,
          longitude:
            (currentUserCoordinate.longitude +
              currentDestinationCoordinate.longitude) /
            2,
          latitudeDelta:
            Math.abs(
              currentUserCoordinate.latitude -
                currentDestinationCoordinate.latitude,
            ) +
            Math.abs(
              currentUserCoordinate.latitude -
                currentDestinationCoordinate.latitude,
            ) *
              0.1,
          longitudeDelta:
            Math.abs(
              currentUserCoordinate.longitude -
                currentDestinationCoordinate.longitude,
            ) +
            Math.abs(
              currentUserCoordinate.longitude -
                currentDestinationCoordinate.longitude,
            ) *
              0.1,
        }}
        showsUserLocation
        loadingEnabled>
        <Marker
          coordinate={currentDestinationCoordinate}
          title={'JR Cabelos'}></Marker>
        <Marker coordinate={currentUserCoordinate}></Marker>
        <MapViewDirections
          strokeWidth={5}
          strokeColor="#3251B2"
          origin={currentUserCoordinate}
          destination={currentDestinationCoordinate}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
    </>
  );
}
