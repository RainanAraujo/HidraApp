import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
export default styles = StyleSheet.create({
  container: {
    padding: '5%',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  buttonCancel: {
    fontSize: 5 * vw,
    color: '#FF4646',
    width: '45%',
    marginHorizontal: '2.5%',
  },
  captureText: {
    color: '#fff',
  },
  buttonRetry: {
    backgroundColor: '#2343A9',
    margin: 'auto',
  },
  takePhoto: {
    backgroundColor: '#2343A9',
    margin: '2%',
  },
  buttonContinue: {
    fontSize: 5 * vw,
    backgroundColor: '#2343A9',
    width: '45%',
    marginHorizontal: '2.5%',
  },
  buttons: {
    height: '15%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textName: {
    fontSize: 20,
    margin: 10,
    color: '#484D55',
    fontFamily: 'Nunito-SemiBold',
  },
  textTitle: {
    height: '10%',
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 7 * vw,
    alignSelf: 'center',
    textAlign: 'center',
  },

  textSubTitle: {
    textAlign: 'center',
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    margin: '5%',
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
  selectGallery: {
    margin: '5%',
  },
  imagePhotoExample: {
    height: '40%',
    aspectRatio: 1,
  },

  warning: {
    backgroundColor: '#F3AE27',
    borderRadius: 10,
    padding: '4%',
    margin: '5%',
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
