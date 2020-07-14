import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    bottom: 0,
  },
  circle: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 0,
    height: 0,
    borderRadius: 999,
  },
});
