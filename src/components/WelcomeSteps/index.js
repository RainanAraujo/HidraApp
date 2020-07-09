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
export default function WelcomeStep({index, currentStep, currentStepBack}) {
  const slideAnim = useRef(
    new Animated.Value(
      index == currentStep && currentStepBack == false ? 390 : -390,
    ),
  ).current;
  useEffect(() => {
    if (index == currentStep && currentStepBack == false) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  }, [currentStep]);

  return (
    <Animated.View style={{...styles.container, translateX: slideAnim}}>
      <Icon name={'smile'} size={100} color={styles.iconUser.color} />
      <Text style={styles.textTitle}>Bem-Vindo ao seu primeiro acesso!</Text>
      <Text style={styles.textSubTitle}>
        Vamos passar pelas etapas de cadastro em nosso aplicativo!
      </Text>
    </Animated.View>
  );
}
