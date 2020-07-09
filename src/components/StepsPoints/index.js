import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import styles from './styles';

export default StepsPoints = ({stepCount, currentStep}) => {
  let widthState = [];

  useEffect(() => {
    widthState.map((width, position) => {
      if (position == currentStep) {
        Animated.timing(width, {
          toValue: 35,
          duration: 300,
        }).start();
      } else if (width != 15) {
        Animated.timing(width, {
          toValue: 15,
          duration: 300,
        }).start();
      }
    });
  }, [currentStep]);

  return [...Array(stepCount).keys()].map((position) => {
    widthState.push(
      useRef(new Animated.Value(position == currentStep ? 35 : 15)).current,
    );
    return (
      <Animated.View
        style={{
          ...styles.stepsFocused,
          width: widthState[position],
        }}
      />
    );
  });
};
