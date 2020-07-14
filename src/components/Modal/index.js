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
  const dimensions = Dimensions.get('window');
  const expand = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
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

  return (
    <>
      {props.children}
      {anim.action && (
        <MaskedView
          style={{
            ...styles.container,
            width: '100%',
            height: '100%',
          }}
          maskElement={
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                width: 0,
                height: 0,
                left: anim.x,
                top: anim.y,
              }}>
              <Animated.View
                style={{
                  ...styles.circle,
                  opacity: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                  width: expand.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      0,
                      2 * Math.hypot(dimensions.width, dimensions.height),
                    ],
                  }),
                  height: expand.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      0,
                      2 * Math.hypot(dimensions.width, dimensions.height),
                    ],
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
