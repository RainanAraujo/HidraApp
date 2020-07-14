import React, {
  useEffect,
  useRef,
  useState,
  createRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {View, Animated, Easing, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import styles from './styles';

export const AlertTypes = {
  ERROR: {
    title: 'Erro',
    color: 'red',
    icon: 'x',
  },
  SUCCESS: {
    title: 'Sucesso',
    color: 'green',
    icon: 'check',
  },
};

const rootRef = createRef();

export const SendAlert = (type, msg) => {
  rootRef.current.SendAlert(type, msg);
};

const AlertQueue = forwardRef((props, ref) => {
  const [config, setConfig] = useState({
    type: AlertTypes.ERROR,
    msg: '',
  });
  const slide = useRef(new Animated.Value(0)).current;

  useImperativeHandle(ref, () => ({
    SendAlert: (type, msg) => {
      if (config.msg == '') {
        setConfig({
          type,
          msg,
        });
      }
    },
  }));

  useEffect(() => {
    if (config.msg != '') {
      Animated.timing(slide, {
        toValue: 1,
        duration: 300,
        easing: Easing.bezier(0, 0.5, 0.5, 1),
      }).start(() => {
        Animated.timing(slide, {
          toValue: 0,
          duration: 300,
          delay: props.timeOut,
          easing: Easing.bezier(0, 0.5, 0.5, 1),
        }).start(() => {
          setConfig({
            type: {
              title: '',
              color: 'red',
              icon: 'x',
            },
            msg: '',
          });
        });
      });
    }
  }, [config]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        flexDirection: 'row',
        elevation: 1,
        zIndex: 1,
        width: '90%',
        height: props.height,
        marginHorizontal: '5%',
        padding: props.height / 8,
        marginTop: props.height / 4,
        borderRadius: 999,
        translateY: slide.interpolate({
          inputRange: [0, 1],
          outputRange: [-props.height - props.height / 4, 0],
        }),
        backgroundColor: config.type.color,
      }}>
      <View
        style={{
          height: '100%',
          aspectRatio: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name={config.type.icon}
          color="white"
          size={props.height / 2}
          containerStyle={{
            margin: 20,
          }}
        />
      </View>
      <View>
        <Text style={{flex: 2, fontSize: 20, color: 'white'}}>
          {config.type.title}
        </Text>
        <Text style={{flex: 3, fontSize: 15, color: 'white'}}>
          {config.msg}
        </Text>
      </View>
    </Animated.View>
  );
});

export const AlertRoot = (props) => <AlertQueue ref={rootRef} {...props} />;
