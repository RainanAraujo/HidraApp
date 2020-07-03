import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

export default function textInput({
  placeholder,
  keyboardType,
  textContentType,
  value,
  onChangeText,
  autoCapitalize,
  secureTextEntry,
}) {
  return (
    <TextInput
      style={styles.textInput}
      autoCapitalize={autoCapitalize}
      placeholder={placeholder}
      keyboardType={keyboardType}
      textContentType={textContentType}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
}
