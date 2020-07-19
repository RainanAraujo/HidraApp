import React, {useState, useEffect, useRef} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import Button from '../Button';
import Icon from 'react-native-vector-icons/dist/Feather';
import welcomeSteps from '../../assets/images/welcomeSteps.png';
export default function WelcomeStep() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Bem-vindo ao seu primeiro acesso!</Text>
      <Image source={welcomeSteps} style={styles.imageWelcome} />
      <Text style={styles.textSubTitle}>
        Vamos passar pelas etapas de cadastro em nosso aplicativo!
      </Text>
    </View>
  );
}
