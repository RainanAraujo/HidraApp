import React from 'react';
import Routes from './routes/main';
import messaging from '@react-native-firebase/messaging';
import store from './reducers';
import {Provider} from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import Alerts from './utils/alerts';

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});

export default function App() {
  return (
    <>
      <DropdownAlert
        ref={(ref) => Alerts.setDropDown(ref)}
        closeInterval={1000}
      />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
