import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
export default function Button({
  disabled,
  onPress,
  text,
  backgroundColor,
  iconName,
}) {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{...styles.button, backgroundColor}}
        disabled={disabled}
        onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        {iconName ? (
          <Icon name={iconName} color={styles.iconColor} size={20} />
        ) : (
          <></>
        )}
      </TouchableOpacity>
    </>
  );
}
