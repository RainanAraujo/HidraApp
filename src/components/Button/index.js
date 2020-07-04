import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
export default function Button({
  disabled,
  onPress,
  text,
  iconName,
  loading,
  style,
}) {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{...styles.button, ...style}}
        disabled={disabled}
        onPress={onPress}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <>
            <Text style={styles.text}>{text}</Text>
            {iconName ? (
              <Icon name={iconName} color={styles.iconColor.color} size={20} />
            ) : (
              <></>
            )}
          </>
        )}
      </TouchableOpacity>
    </>
  );
}
