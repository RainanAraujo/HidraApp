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
import {
  screenWidth,
  screenHeight,
  diagonalScreenSize,
} from '../../utils/dimensions';
import styles from './styles';

const rootRef = createRef();

export const Modal = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    Show: (event) => {
      rootRef.current.CreateModal(event, props.children);
    },
    Hide: () => {
      rootRef.current.HideModal();
    },
  }));

  return;
});

const ModalAnimated = forwardRef((props, ref) => {
  const expand = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const [anim, setAnim] = useState({});

  useImperativeHandle(ref, () => ({
    CreateModal: (event, component) => {
      setAnim({
        action: 'show',
        component: component,
        x: event.nativeEvent.pageX,
        y: event.nativeEvent.pageY,
      });
    },
    HideModal: () => {
      setAnim({...anim, action: 'hide'});
    },
  }));

  useEffect(() => {
    if (anim.action == 'show') {
      opacity.setValue(1);
      Animated.timing(expand, {
        toValue: 1,
        duration: 500,
        easing: Easing.in(Easing.ease),
        extrapolate: 'clamp',
      }).start();
    } else if (anim.action == 'hide') {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        extrapolate: 'clamp',
      }).start(() => {
        expand.setValue(0);
        setAnim({});
      });
    }
  }, [anim]);

  const calculateDiameter = (x, y) => {
    if (!(x && y)) return 0;
    const clickHypot = Math.hypot(
      Math.abs(x - screenWidth),
      Math.abs(y - screenHeight),
    );
    return 2 * Math.abs(clickHypot - diagonalScreenSize);
  };

  return (
    <>
      {props.children}
      {anim.action && (
        <MaskedView
          style={{
            ...styles.container,
          }}
          maskElement={
            <View
              style={{
                ...styles.masked,
                left: anim.x,
                top: anim.y,
              }}>
              <Animated.View
                style={{
                  ...styles.circle,
                  borderRadius: calculateDiameter(anim.x, anim.y),
                  opacity: opacity,
                  width: expand.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, calculateDiameter(anim.x, anim.y)],
                  }),
                  height: expand.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, calculateDiameter(anim.x, anim.y)],
                  }),
                }}></Animated.View>
            </View>
          }>
          {anim.component}
        </MaskedView>
      )}
    </>
  );
});

export const ModalRoot = (props) => (
  <ModalAnimated ref={rootRef}>{props.children}</ModalAnimated>
);
