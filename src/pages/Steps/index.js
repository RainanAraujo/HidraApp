import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  View,
  Dimensions,
  StatusBar,
  Animated,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import StepsPoints from '../../components/StepsPoints';
import ContactModal from '../../components/ContactModal';
import WelcomeStep from '../../components/WelcomeSteps';
import TakePhoto from '../../components/TakePhoto';
import Cadastro from '../../components/Cadastro';
import {debug} from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';
export default function Steps({navigation}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentStepBack, setCurrentStepBack] = useState(false);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const steps = [<WelcomeStep />, <Cadastro />, <TakePhoto />];

  const previousStep = () => {
    if (currentStep > 0) {
      let targetValue = (currentStep - 1) * screenWidth;
      Animated.timing(slideAnim, {
        toValue: -targetValue,
        duration: 300,
      }).start();
      setCurrentStep(currentStep - 1);
    }
  };

  const nextStep = () => {
    if (currentStep + 1 < steps.length) {
      let targetValue = (currentStep + 1) * screenWidth;
      Animated.timing(slideAnim, {
        toValue: -targetValue,
        duration: 300,
      }).start();
      setCurrentStep(currentStep + 1);
    } else if (currentStep + 1 == steps.length) {
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Animated.View
          style={{
            width: steps.length * 100 + '%',
            height: '87%',
            translateX: slideAnim,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignSelf: 'flex-start',
          }}>
          {steps.map((step) => (
            <View style={{width: 100 / steps.length + '%', height: '100%'}}>
              {step}
            </View>
          ))}
        </Animated.View>

        <View style={styles.navigationContent}>
          <View style={styles.buttonsContainer}>
            {currentStep > 0 && (
              <Button
                text={'Voltar'}
                style={styles.buttonBack}
                styleText={styles.textButtonBack}
                onPress={previousStep}
              />
            )}
            {currentStep == steps.length - 1 ? (
              <Button
                text={'Concluir'}
                style={styles.buttonContinue}
                styleIcon={styles.buttonContinue.color}
                onPress={() => navigation.replace('Home')}
              />
            ) : (
              <Button
                text={'Continuar'}
                iconName={'arrow-right'}
                style={styles.buttonContinue}
                styleIcon={styles.buttonContinue.color}
                onPress={nextStep}
              />
            )}
          </View>
          <View style={styles.stepsContainer}>
            <StepsPoints stepCount={steps.length} currentStep={currentStep} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
