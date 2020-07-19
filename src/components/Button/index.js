import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/Feather';
import Ripple from 'react-native-material-ripple';

export default function Button({
  disabled,
  onPress,
  text,
  iconName,
  loading,
  style = styles.default,
  outlined,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        ...styles.button,
        ...style,
        ...(outlined && styles.outlined),
        ...(style.color && {borderColor: style.color}),
      }}
      disabled={disabled}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={styles.ActivityIndicator.color}
        />
      ) : (
        <>
          <Text
            style={{
              ...styles.default,
              ...(style.color && {
                color: style.color,
              }),
              ...(style.fontSize && {
                fontSize: style.fontSize,
              }),
            }}>
            {text}
          </Text>
          {iconName && (
            <Icon
              name={iconName}
              color={
                {
                  ...styles.default,
                  ...(style.color && {color: style.color}),
                }.color
              }
              size={20}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
}
