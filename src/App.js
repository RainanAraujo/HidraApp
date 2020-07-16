import React from 'react';
import Routes from './routes/main';
import messaging from '@react-native-firebase/messaging';
import store from './reducers';
import {Provider} from 'react-redux';
import {AlertRoot} from './components/Alert';
import {ModalRoot} from './components/Modal';
import Alerts from './utils/alerts';
import {View} from 'react-native';

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AlertRoot />
        <ModalRoot>
          <Routes />
        </ModalRoot>
      </Provider>
    </>
  );
}
