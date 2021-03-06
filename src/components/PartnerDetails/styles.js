import {StyleSheet} from 'react-native';
import {
  screenHeight,
  screenWidth,
  vh,
  vw,
  screenRatio,
} from '../../utils/dimensions';
export default styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    height: 80 * vh,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  boxContainer: {
    width: 90 * vw,
    height: 80 * vh,
    marginTop: 8 * vh,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    alignSelf: 'center',
  },
  textBox: {
    marginTop: 10,
    marginBottom: 20,
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 6 * vw,
  },
  textTitle: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 6 * vw,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textSubTitle: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 4 * vw,
    marginHorizontal: 5 * vw,
    letterSpacing: 0.15,
    lineHeight: 23,
    textAlign: 'center',
  },

  buttonCancel: {
    color: '#FF4646',
    height: '7%',
    width: '50%',
    margin: '2.5%',
  },
  maps: {
    width: 80 * vw,
    alignItems: 'center',
    height: '60%',
    alignSelf: 'center',
  },
});
