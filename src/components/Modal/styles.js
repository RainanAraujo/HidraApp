import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    left: 0,
    bottom: 0,
  },
  masked: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 0,
    height: 0,
  },
  circle: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 999,
  },
});
