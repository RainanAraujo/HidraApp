import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import LoginBar from '../../components/LoginBar';
import styles from './styles';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" style={styles.StatusBar} />
      <LoginBar />
    </SafeAreaView>
  );
}
