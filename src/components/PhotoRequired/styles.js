import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#ffffff75',
    flex: 1,
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
  image: {
    height: '40%',
    aspectRatio: 1,
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
  takePhoto: {
    backgroundColor: '#2343A9',
    margin: '2%',
  },
});
