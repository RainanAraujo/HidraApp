import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  StatusBar,
  Animated,
} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import StepsPoints from '../../components/StepsPoints';
import ContactModal from '../../components/ContactModal';
import WelcomeStep from '../../components/WelcomeSteps';
import TakePhoto from '../../components/TakePhoto';
import Cadastro from '../../components/Cadastro';
export default function Steps({navegation}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentStepBack, setCurrentStepBack] = useState(false);
  const [currentStepView, setCurrentStepView] = useState(<View></View>);
  const steps = [
    <WelcomeStep
      index={0}
      currentStep={currentStep}
      currentStepBack={currentStepBack}
    />,
    <Cadastro
      index={1}
      currentStep={currentStep}
      currentStepBack={currentStepBack}
    />,
    <TakePhoto
      index={2}
      currentStep={currentStep}
      currentStepBack={currentStepBack}
    />,
  ];

  useEffect(() => {
    setCurrentStepView(steps[currentStep]);
  }, [currentStep]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.content}>
        {currentStepView}
        <View style={styles.buttonsContainer}>
          {currentStep > 0 ? (
            <Button
              text={'Voltar'}
              style={styles.buttonBack}
              styleText={styles.textButtonBack}
              onPress={() => {
                setCurrentStepBack(true);
                setCurrentStep(currentStep - 1);
              }}
            />
          ) : (
            <></>
          )}

          <Button
            text={'Continuar'}
            iconName={'arrow-right'}
            style={styles.buttonContinue}
            styleIcon={styles.buttonContinue.color}
            onPress={() => {
              setCurrentStepBack(false);
              setCurrentStep(currentStep + 1);
            }}
          />
        </View>
      </View>
      <View style={styles.stepsContainer}>
        <StepsPoints stepCount={steps.length} currentStep={currentStep} />
      </View>
    </View>
  );
}
