import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from './profile';
import Partnerships from './partnerships';
import Settings from './settings';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          indicatorStyle: {
            backgroundColor: '#ffffff',
          },
        }}>
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="user-circle"
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
                name="users"
                size={20}
                color={focused ? '#141414' : '#A4A4A4'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Definições"
          component={Settings}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="cog"
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
