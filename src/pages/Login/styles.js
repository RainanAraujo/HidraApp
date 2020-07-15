import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonScan: {
    top: 20,
    color: '#2343A9',
  },
  textButtonScan: {
    color: '#2343A9',
  },
  container: {
    flex: 1,
    backgroundColor: '#2242A7',
  },
  statusBar: {
    backgroundColor: '#3251B2',
  },
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
  textHeader: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
    fontSize: 36,
    alignSelf: 'center',
  },
});

export default styles;
