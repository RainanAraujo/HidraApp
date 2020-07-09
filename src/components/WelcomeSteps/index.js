import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  StatusBar,
  Animated,
} from 'react-native';
import styles from './styles';
import Button from '../Button';
import Icon from 'react-native-vector-icons/dist/Feather';
export default function WelcomeStep() {
  return (
    <View style={styles.container}>
      <Icon name={'smile'} size={100} color={styles.iconUser.color} />
      <Text style={styles.textTitle}>Bem-vindo ao seu primeiro acesso!</Text>
      <Text style={styles.textSubTitle}>
        Vamos passar pelas etapas de cadastro em nosso aplicativo!
      </Text>
    </View>
  );
}
