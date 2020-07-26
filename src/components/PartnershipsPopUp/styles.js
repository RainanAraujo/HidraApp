import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    width: '90%',
    height: '90%',
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textTitle: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 25,
    marginTop: 10,
    alignSelf: 'center',
  },

  textSubTitle: {
    textAlign: 'center',
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    marginHorizontal: 50,
    letterSpacing: 0.15,
    lineHeight: 23,
  },

  buttonCancel: {
    color: '#FF4646',
    width: '46%',
    margin: 5,
  },
});
