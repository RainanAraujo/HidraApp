import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import styles from './styles';

export default StepsPoints = ({stepCount, currentStep}) => {
  let widthState = [];
  for (let position = 0; position < stepCount; position++) {
    widthState.push(
      useRef(new Animated.Value(position == currentStep ? 35 : 15)).current,
    );
  }

  useEffect(() => {
    widthState.map((width, position) => {
      if (position == currentStep) {
        Animated.timing(width, {
          toValue: 35,
          duration: 500,
        }).start();
      } else {
        Animated.timing(width, {
          toValue: 15,
          duration: 500,
        }).start();
      }
    });
  }, [currentStep]);

  return [...Array(stepCount).keys()].map((position) => (
    <Animated.View
      style={{
        ...styles.stepsFocused,
        width: widthState[position],
      }}
    />
  ));
};
