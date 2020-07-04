import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function Button({disabled, onPress, text, backgroundColor}) {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{...styles.button, backgroundColor}}
        disabled={disabled}
        onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>

      {
        //} <Icon name="camera" color="#ffffff" size={20} />
      }
    </>
  );
}
