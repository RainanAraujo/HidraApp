import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import LoginTransitionsContent from '../../components/LoginTransitionsContent';
import styles from './styles';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" style={styles.StatusBar} />
      <LoginTransitionsContent />
    </SafeAreaView>
  );
}
