import React from 'react';
import {ImageBackground, ActivityIndicator, Animated} from 'react-native';
import LoginBarTop from '../../assets/images/loginBarWithHidra.png';
import Hidra from '../../assets/images/hidra.png';
import Icon from 'react-native-vector-icons/Feather';
import LoginForm from '../LoginForm';
import styles from './styles';
import Button from '../Button';
export default function LoginFormBar({translateY, loading}) {
  return (
    <>
      <Animated.Image
        source={Hidra}
        style={{
          ...styles.hidraImage,
          opacity: translateY.interpolate({
            inputRange: [-230, -200, 0],
            outputRange: [1, 0, 0],
          }),
        }}
      />
      <ImageBackground source={LoginBarTop} style={styles.headerBarPush}>
        {loading ? (
          <Animated.View
            style={{
              opacity: translateY.interpolate({
                inputRange: [-230, 0, 0],
                outputRange: [0, 1, 0],
                extrapolate: 'clamp',
              }),
            }}>
            <ActivityIndicator
              size="large"
              color={styles.ActivityIndicator.color}
            />
          </Animated.View>
        ) : (
          <Animated.Text
            style={{
              ...styles.loginText,
              opacity: translateY.interpolate({
                inputRange: [-200, 0, 300],
                outputRange: [0, 1, 1],
              }),
            }}>
            ARRASTE{' '}
            <Icon name="arrow-up" color={styles.IconUp.color} size={20} /> PARA
            FAZER LOGIN
          </Animated.Text>
        )}
        <Animated.View
          style={{
            marginTop: 90,
            opacity: translateY.interpolate({
              inputRange: [-230, 0, 0],
              outputRange: [1, 0, 0],
              extrapolate: 'clamp',
            }),
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-230, 0, 0],
                  outputRange: [-70, 0, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <LoginForm />
          <Button
            text={'Escanear Híbrido'}
            iconName={'camera'}
            style={styles.buttonScan}
          />
        </Animated.View>
      </ImageBackground>
    </>
  );
}
