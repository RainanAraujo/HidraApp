import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textButtonAccept: {
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    alignSelf: 'center',
  },

  buttonCancel: {
    height: 50,
    width: '40%',
    borderRadius: 50,
    paddingHorizontal: 20,

    color: '#FF4646',
  },
  buttonAcept: {
    backgroundColor: '#2343A9',
    height: 50,
    width: '40%',
    borderRadius: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  modalContainer: {
    backgroundColor: '#ffffff75',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 70,
  },
  textTitle: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 25,
    marginTop: 10,
    alignSelf: 'center',
  },
  Input: {
    backgroundColor: '#EDF6FF',
    height: 50,
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  form: {
    alignItems: 'center',
    width: '100%',
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
});
