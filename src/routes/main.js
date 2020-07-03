import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/login';
import Home from './Home';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
