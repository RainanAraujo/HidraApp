import React from 'react';
import Routes from './routes/main';
import messaging from '@react-native-firebase/messaging';
import store from './reducers';
import {Provider} from 'react-redux';
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
