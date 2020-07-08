import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#ffffff75',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 70,
  },
  camera: {
    flex: 7,
    width: '100%',
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
  buttonCancelAndRetry: {
    borderColor: '#FF4646',
    borderWidth: 1,
    width: 140,
    margin: 10,
  },
  buttonContinue: {
    backgroundColor: '#519918',
    width: 160,
    margin: 10,
  },
  textButton: {
    color: '#FF4646',
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
    fontSize: 25,
    marginTop: 30,
    alignSelf: 'center',
    textAlign: 'center',
  },

  textSubTitle: {
    textAlign: 'center',
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 10,
  },
});
