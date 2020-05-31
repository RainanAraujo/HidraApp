import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from './profile';
import Partnerships from './partnerships';
import Settings from './settings';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createMaterialTopTabNavigator();

export default function Home({ navigation, route }) {

  const [data, setData] = useState({
    name: "",
    course: "",
    age: 0,
    since: 0,
    qrcode: "null",
    post: ""
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
          component={() => Profile(data)}
          options={{
            tabBarIcon: ({ focused }) => (
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
            tabBarIcon: ({ focused }) => (
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
            tabBarIcon: ({ focused }) => (
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
