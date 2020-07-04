import React from 'react';
import {Text, View, Image, Animated} from 'react-native';
import styles from './styles';
import ApresentationImage from '../../assets/images/apresentationImage.png';
export default function ApresetationContainer({translateY}) {
  return (
    <Animated.View
      style={{
        ...styles.content,
        opacity: translateY.interpolate({
          inputRange: [-230, 0, 0],
          outputRange: [0, 1, 1],
          extrapolate: 'clamp',
        }),
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [-230, 0, 0],
              outputRange: [-50, 0, 0],
              extrapolate: 'clamp',
            }),
          },
        ],
      }}>
      <Image source={ApresentationImage} />
      <Text style={styles.text}>
        Aplicação feita para os associados da Atlética Hidra do Instituto
        Federal de Educação, Ciência e Tecnologia do Maranhão - Campus Caxias
      </Text>
    </Animated.View>
  );
}
