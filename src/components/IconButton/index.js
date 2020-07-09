import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/Feather';
export default function IconButton({iconName, style, onPress, iconColor}) {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{...styles.button, ...style}}
        onPress={onPress}>
        {iconName ? (
          <Icon name={iconName} color={styles.iconColor.color} size={17} />
        ) : (
          <></>
        )}
      </TouchableOpacity>
    </>
  );
}
