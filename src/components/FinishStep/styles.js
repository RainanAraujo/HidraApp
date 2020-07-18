import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 30,
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
    marginTop: 30,
    marginBottom: 10,
    letterSpacing: 0.15,
  },

  imagePhotoExemple: {
    width: 69 * vw,
    height: 36 * vh,
    alignSelf: 'center',
  },
});
