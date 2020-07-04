import React, {useState} from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import {StatusBar, SafeAreaView} from 'react-native';
import LoginTransitionsContent from '../../components/LoginTransitionsContent';
import styles from './styles';

export default function Login({navigation}) {
  const [alert, setAlert] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <DropdownAlert closeInterval={1000} ref={(ref) => setAlert(ref)} />
      <StatusBar barStyle="light-content" style={styles.StatusBar} />
      <LoginTransitionsContent />
    </SafeAreaView>
  );
}
