import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from './profile';
import Partnerships from './partnerships';
import Settings from './settings';
const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <>
      <Tab.Navigator tabBarPosition="bottom">
        <Tab.Screen name="Perfil" component={Profile} />
        <Tab.Screen name="Parcerias" component={Partnerships} />
        <Tab.Screen name="Definições" component={Settings} />
      </Tab.Navigator>
    </>
  );
}
