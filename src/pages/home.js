import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from './profile';
import Partnerships from './partnerships';
import Settings from './settings';
import firestore from '@react-native-firebase/firestore';
const Tab = createMaterialTopTabNavigator();

export default function Home({ navigation, route }) {

  const [data, setData] = useState({
    name: "",
    course: "",
    age: 0,
    since: 0,
    qrcode: "null"
  });

  useEffect(() => {
    firestore().collection("users").doc(route.params.userID).get().then(data => {
      setData({ ...data.data(), qrcode: route.params.userID });
    }).catch(error => {
      console.log(error)
    });
  }, []);

  return (
    <>
      <Tab.Navigator tabBarPosition="bottom">
        <Tab.Screen name="Perfil" component={() => Profile(data)} />
        <Tab.Screen name="Parcerias" component={Partnerships} />
        <Tab.Screen name="Definições" component={Settings} />
      </Tab.Navigator>
    </>
  );
}
