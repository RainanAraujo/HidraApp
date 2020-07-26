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
    width: 90 * vw,
    height: 80 * vh,
    marginTop: 8 * vh,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    position: 'absolute',
    zIndex: 1,
    top: 6 * vh,
    height: 16 * vh,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  textBox: {
    marginTop: 8 * vh,
    height: '15%',
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 6 * vw,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textTitle: {
    height: '40%',
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 6 * vw,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textSubTitle: {
    height: '60%',
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
    height: '10%',
    width: '50%',
    margin: '2.5%',
  },
  maps: {
    width: 80 * vw,
    height: '40%',
    alignItems: 'center',
  },
});
