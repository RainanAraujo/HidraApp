import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/Feather';
import Ripple from 'react-native-material-ripple';
export default function Button({
  disabled,
  onPress,
  text,
  iconName,
  loading,
  style,
  styleText,
  styleIcon,
}) {
  return (
    <>
      <Ripple
        rippleCentered={true}
        rippleOpacity={0.1}
        style={{...styles.button, ...style}}
        disabled={disabled}
        onPress={onPress}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={styles.ActivityIndicator.color}
          />
        ) : (
          <>
            <Text style={{...styles.text, ...styleText}}>{text}</Text>
            {iconName ? (
              <Icon name={iconName} color={styleIcon} size={20} />
            ) : (
              <></>
            )}
          </>
        )}
      </Ripple>
    </>
  );
}
