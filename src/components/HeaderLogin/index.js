import React from 'react';
import {Text, Animated} from 'react-native';
import styles from './styles';

export default function ApresetationContainer({translateY}) {
  return (
    <Animated.Text
      style={{
        ...styles.text,
        opacity: translateY.interpolate({
          inputRange: [-230, 0, 0],
          outputRange: [0, 1, 1],
          extrapolate: 'clamp',
        }),
      }}>
      Olá!
    </Animated.Text>
  );
}
