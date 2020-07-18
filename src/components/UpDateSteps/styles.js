import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 30,
  },

  buttonCancel: {
    color: '#FF4646',
    width: '46%',
    margin: 5,
    marginBottom: 40,
  },
  captureText: {
    color: '#fff',
  },
  buttonRetry: {
    backgroundColor: '#2343A9',

    margin: 15,
  },
  takePhoto: {
    backgroundColor: '#2343A9',

    margin: 10,
  },
  buttonContinue: {
    backgroundColor: '#2343A9',
    width: '40%',
    margin: 5,
    marginBottom: 40,
  },
  buttons: {
    flexDirection: 'row',
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
  textSelectGallery: {
    color: '#2343A9',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  selectValery: {
    margin: 5,
  },
  imagePhotoExemple: {
    width: 69 * vw,
    height: 35 * vh,
  },

  warning: {
    backgroundColor: '#F3AE27',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWarning: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    letterSpacing: 0.15,
  },
});
