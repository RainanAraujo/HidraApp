import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from './profile';
import Partnerships from './partnerships';
const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <>
      <Tab.Navigator tabBarPosition="bottom">
        <Tab.Screen name="Home" component={Profile} />
        <Tab.Screen name="Parcerias" component={Partnerships} />
      </Tab.Navigator>
    </>
  );
}
