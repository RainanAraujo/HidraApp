import React, {useState, useEffect} from 'react';
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
import StepsPoints from '../../components/StepsPoints';
import ContactModal from '../../components/ContactModal';

export default function Steps({navegation}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentStepView, setCurrentStepView] = useState(<View></View>);

  const steps = [
    <Text>{currentStep}</Text>,
    <Text>{currentStep}</Text>,
    <Text>{currentStep}</Text>,
    <Text>{currentStep}</Text>,
    <Text>{currentStep}</Text>,
  ];

  useEffect(() => {
    setCurrentStepView(steps[currentStep]);
  }, [currentStep]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.content}>
        {currentStepView}
        <Button
          text={'Continuar'}
          iconName={'arrow-right'}
          style={styles.buttonContinue}
          onPress={() => {
            if (steps.length > currentStep + 1) setCurrentStep(currentStep + 1);
          }}
        />
      </View>
      <View style={styles.stepsContainer}>
        <StepsPoints stepCount={steps.length} currentStep={currentStep} />
      </View>
    </View>
  );
}
