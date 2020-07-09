import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 70,
  },
  camera: {
    marginTop: 20,
    width: '100%',
    height: '80%',
  },
  capture: {
    width: 70,
    height: 70,
    backgroundColor: '#FF4646',
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFF',
    marginBottom: 10,
  },
  captureText: {
    color: '#fff',
  },
  buttonRetry: {
    backgroundColor: '#FF4646',

    margin: 10,
  },
  buttonContinue: {
    backgroundColor: '#2343A9',
    width: 160,
    margin: 10,
  },

  textName: {
    fontSize: 20,
    margin: 10,
    color: '#484D55',
    fontFamily: 'Nunito-SemiBold',
  },
  textTitle: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 60,
    letterSpacing: 0,
  },

  textSubTitle: {
    textAlign: 'center',
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 10,
    letterSpacing: 0.15,
  },
  iconUser: {
    color: '#484D55',
  },
  textIcon: {
    textAlign: 'center',
    color: '#484D55',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    marginHorizontal: 40,
    marginTop: 10,
    marginBottom: 10,
    letterSpacing: 0.1,
  },
  iconView: {
    borderColor: '#484D55',
    borderWidth: 2,
    borderRadius: 100,
    padding: 20,
  },
  buttonTake: {
    width: 240,
    borderWidth: 1,
    borderColor: '#2343A9',
    margin: 10,
  },
  textButtonTake: {
    color: '#2343A9',
  },
});
