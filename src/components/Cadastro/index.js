import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  StatusBar,
  Animated,
  Picker,
} from 'react-native';
import styles from './styles';
import Button from '../Button';
import Input from '../../components/TextInput';
export default function Cadastro({index, currentStep, currentStepBack}) {
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
      <View>
        <Text style={styles.textTitle}>Cadastro</Text>
        <Text style={styles.textSubTitle}>
          Adicione suas informações para conhecer melhor sobre você :)
        </Text>
      </View>
      <View>
        <Text>Nome *</Text>
        <Input keyboardType="name-phone-pad" textContentType="name" />
        <Text>Sobrenome *</Text>
        <Input keyboardType="name-phone-pad" textContentType="name" />
        <Text>Apelido (Opicional) </Text>
        <Input keyboardType="name-phone-pad" textContentType="name" />

        <Text>Nascimento *</Text>
        <View style={{flexDirection: 'row'}}></View>
      </View>
    </Animated.View>
  );
}
