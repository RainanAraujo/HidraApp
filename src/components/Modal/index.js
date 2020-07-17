import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  createRef,
} from 'react';
import {View, Animated, Dimensions, Easing} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import {screenWidth, screenHeight} from '../../utils/dimensions';
import styles from './styles';

const rootRef = createRef();

export const Modal = (
  {
    visible = false,
    animation = 'fade',
    children,
    notAnimateContent,
    backgroundColor = 'transparent',
  },
  ref,
) => {
  useEffect(() => {
    if (visible) {
      rootRef.current.CreateModal(
        children,
        animation,
        notAnimateContent,
        backgroundColor,
      );
    } else {
      rootRef.current.HideModal();
    }
  }, [visible]);

  return null;
};

const ModalAnimated = forwardRef((props, ref) => {
  const slide = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const [loadNow, setLoadNow] = useState(true);
  const [anim, setAnim] = useState({});

  useImperativeHandle(ref, () => ({
    CreateModal: (component, animation, notAnimateContent, backgroundColor) => {
      if (Object.keys(anim).length == 0) {
        setLoadNow(!notAnimateContent);
        setAnim({
          action: animation,
          component: component,
          backgroundColor: backgroundColor,
          animateContent: !notAnimateContent,
        });
      } else {
        throw new Error('There is already an active modal instance');
      }
    },
    HideModal: () => {
      if (Object.keys(anim).length != 0) {
        setLoadNow(anim.animateContent);
        if (anim.action == 'fade') {
          fadeOut();
        } else if (anim.action == 'slide') {
          slideOut();
        }
      }
    },
  }));

  const fadeIn = () => {
    slide.setValue(1);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      extrapolate: 'clamp',
    }).start(() => {
      if (!loadNow) setLoadNow(true);
    });
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      extrapolate: 'clamp',
    }).start(() => {
      slide.setValue(0);
      setAnim({});
    });
  };

  const slideIn = () => {
    opacity.setValue(1);
    Animated.timing(slide, {
      toValue: 1,
      duration: 200,
      extrapolate: 'clamp',
      easing: Easing.bezier(0, 0.5, 0.5, 1),
    }).start(() => {
      if (!loadNow) setLoadNow(true);
    });
  };

  const slideOut = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 300,
      extrapolate: 'clamp',
      easing: Easing.bezier(0, 0.5, 0.5, 1),
    }).start(() => {
      opacity.setValue(0);
      setAnim({});
    });
  };

  useEffect(() => {
    if (anim.action == 'fade') {
      fadeIn();
    } else if (anim.action == 'slide') {
      slideIn();
    }
  }, [anim]);

  return (
    <>
      {props.children}
      {anim.action && (
        <Animated.View
          style={{
            ...styles.container,
            backgroundColor: anim.backgroundColor,
            opacity: opacity,
            translateX: slide.interpolate({
              inputRange: [0, 1],
              outputRange: [screenWidth, 0],
            }),
          }}>
          {loadNow && anim.component}
        </Animated.View>
      )}
    </>
  );
});

export const ModalRoot = (props) => (
  <ModalAnimated ref={rootRef}>{props.children}</ModalAnimated>
);
