import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  circleEffectBack: {
    justifyContent: 'flex-start',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  loginContainer: {
    paddingTop: 20,
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
  },

  containerPush: {
    marginBottom: -230,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    zIndex: 1,
  },
});

export default styles;
