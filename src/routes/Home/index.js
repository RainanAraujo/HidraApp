import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from '../../pages/Profile';
import Partnerships from '../../pages/Partnerships';
import Members from '../../pages/Members';
import Settings from '../../pages/Settings';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';

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
          style: styles.tabBarOptions,
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
                color={
                  focused
                    ? styles.componentSelected
                    : styles.componentNotSelected
                }
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
                color={
                  focused
                    ? styles.componentSelected
                    : styles.componentNotSelected
                }
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
                color={
                  focused
                    ? styles.componentSelected
                    : styles.componentNotSelected
                }
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
                color={
                  focused
                    ? styles.componentSelected
                    : styles.componentNotSelected
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
