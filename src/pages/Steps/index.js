import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StatusBar,
  Animated,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import TakePhoto from '../../components/TakePhoto';
import WelcomeStep from '../../components/WelcomeSteps';
import FinishStep from '../../components/FinishStep';
import StepsPoints from '../../components/StepsPoints';
import {registerUserData} from '../../services/store';
import {setProfilePic} from '../../services/storage';
import {getCurrentUser} from '../../services/auth';
import {screenWidth, screenHeight} from '../../utils/dimensions';
import Register from '../../components/Register';
import Button from '../../components/Button';
import {SendAlert, AlertTypes} from '../../components/Alert';
import {useSelector} from 'react-redux';
import styles from './styles';

export default function Steps({navigation}) {
  const userData = useSelector((state) => state.userData);
  const [currentStep, setCurrentStep] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [currentData, setCurrentData] = useState({});
  const [registerStatus, setRegisterStatus] = useState(false);
  const [photoStatus, setPhotoStatus] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const steps = [
    {
      status: true,
      component: <WelcomeStep />,
    },
    {
      status: registerStatus,
      component: (
        <Register
          onChange={(data) => {
            if (!data) {
              setRegisterStatus(false);
            } else {
              setCurrentData(data);
              setRegisterStatus(true);
            }
          }}
        />
      ),
    },
    {
      status: photoStatus,
      component: (
        <TakePhoto
          onChange={(data) => {
            if (!data) {
              setPhotoStatus(false);
            } else {
              setCurrentPhoto(data);
              setPhotoStatus(true);
            }
          }}
        />
      ),
    },
    {
      status: true,
      component: <FinishStep />,
    },
  ];

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

  const nextStep = async () => {
    console.log(currentPhoto + ' - ');
    if (currentStep + 1 < steps.length && steps[currentStep].status) {
      let targetValue = (currentStep + 1) * screenWidth;
      Animated.timing(slideAnim, {
        toValue: -targetValue,
        duration: 300,
      }).start();
      setCurrentStep(currentStep + 1);
    } else if (currentStep + 1 == steps.length) {
      try {
        const msgData = await registerUserData(userData.uid, currentData);
        SendAlert(AlertTypes.SUCCESS, msgData);
        const msgPic = await setProfilePic(userData.uid, currentPhoto);
        SendAlert(AlertTypes.SUCCESS, msgPic);
        navigation.replace('Home');
      } catch (error) {
        console.log(error + ' - error');
        SendAlert(AlertTypes.ERROR, error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{height: screenHeight, flex: 1}}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <Animated.View
            style={{
              width: steps.length * screenWidth,
              height: 520,
              translateX: slideAnim,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
            }}>
            {steps.map((step) => (
              <View style={{width: screenWidth, height: '100%'}}>
                {step.component}
              </View>
            ))}
          </Animated.View>

          <View style={styles.navigationContent}>
            <View style={styles.buttonsContainer}>
              {currentStep > 0 && (
                <Button
                  outlined
                  text={'Voltar'}
                  style={styles.buttonBack}
                  onPress={previousStep}
                />
              )}
              <Button
                text={
                  currentStep == steps.length - 1 ? 'Concluir' : 'Continuar'
                }
                iconName={'arrow-right'}
                style={{
                  ...styles.buttonContinue,
                  backgroundColor: steps[currentStep].status
                    ? '#2343A9'
                    : '#d2d2d2',
                }}
                onPress={() => {
                  console.log(screenHeight);
                  nextStep();
                }}
              />
            </View>
            <View style={styles.stepsContainer}>
              <StepsPoints stepCount={steps.length} currentStep={currentStep} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
