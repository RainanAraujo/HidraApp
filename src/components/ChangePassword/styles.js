import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
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
  buttonAccept: {
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
    marginHorizontal: 50,
    margin: 20,
    letterSpacing: 0.15,
  },
  imageSendEmail: {
    width: 67 * vw,
    height: 35 * vh,
  },
  emailUser: {
    backgroundColor: '#2343A9',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
  },
  textEmailUser: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    letterSpacing: 0.15,
  },
});
