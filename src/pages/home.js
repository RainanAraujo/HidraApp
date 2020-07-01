import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from './profile';
import Partnerships from './partnerships';
import Members from './members';
import Settings from './settings';
import DropdownAlert from 'react-native-dropdownalert';
import Icon from 'react-native-vector-icons/Feather';
const Tab = createMaterialTopTabNavigator();

export default function Home({navigation, route}) {
  const [data, setData] = useState({
    name: '',
    course: '',
    age: 0,
    since: 0,
    qrcode: 'null',
    post: '',
  });

  return (
    <>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          style: {
            backgroundColor: '#F9F9F9',
            borderTopColor: '#F6F6F6',
            borderTopWidth: 1,
          },
          indicatorStyle: {
            backgroundColor: '#ffffff',
          },
        }}>
        <Tab.Screen
          name="Perfil"
          component={() =>
            Profile({data: route.params.data, navigation: navigation})
          }
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="home"
                size={20}
                color={focused ? '#141414' : '#A4A4A4'}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Membros"
          component={Members}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="users"
                size={20}
                color={focused ? '#141414' : '#A4A4A4'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Parcerias"
          component={Partnerships}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="dollar-sign"
                size={20}
                color={focused ? '#141414' : '#A4A4A4'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Definições"
          component={() =>
            Settings({data: route.params.data, navigation: navigation})
          }
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="settings"
                size={20}
                color={focused ? '#141414' : '#A4A4A4'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
