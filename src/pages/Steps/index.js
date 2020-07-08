import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  StatusBar,
} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
export default function Steps({visible, onClose}) {
  const [focused, setFocused] = useState();
  const Step = ({focused, stepCount}) => {
    let steps = [];
    for (let position = 0; position < stepCount; position++) {
      steps.push(
        <>
          {focused ? (
            <View style={styles.stepsFocused}></View>
          ) : (
            <View style={styles.steps}></View>
          )}
        </>,
      );
    }
    return <View>{steps}</View>;
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.content}>
        <Button
          text={'Continuar'}
          iconName={'arrow-right'}
          style={styles.buttonContinue}
        />
      </View>
      <View style={styles.stepsConteiner}>
        <Step focused={true} />
        <Step focused={false} />
        <Step focused={false} />
      </View>
    </View>
  );
}
