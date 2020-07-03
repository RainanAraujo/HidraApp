import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  ImageBackground,
  ActivityIndicator,
  Animated,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DropdownAlert from 'react-native-dropdownalert';
import CircleEffectBack from '../assets/images/circleEffectBack.svg';
import LoginBarTop from '../assets/images/loginBarWithHidra.png';
import Hidra from '../assets/images/hidra.png';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import ApresentationImage from '../assets/images/apresentationImage.png';
import QrScan from '../components/qrscan';
import Icon from 'react-native-vector-icons/Feather';
import TextInput from '../components/TextInput/index';
import LoginBar from '../components/LoginBar/index';
export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3251B2" />
      <LoginBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2242A7',
  },
});
