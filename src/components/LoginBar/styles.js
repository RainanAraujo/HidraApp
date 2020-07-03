import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  circleEffectBack: {
    justifyContent: 'flex-start',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  textAcess: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
    fontSize: 36,
    alignSelf: 'center',
  },
  loginContainer: {
    paddingTop: 20,
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
  },
  hidraImageContainer: {
    justifyContent: 'space-around',
    paddingTop: 50,
    width: 393,
    height: 400,
  },
  hidraImage: {
    transform: [
      {
        translateY: 100,
      },
    ],
  },
  loginButton: {
    backgroundColor: '#519918',
    height: 50,
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
  },
  textPasswordRequest: {
    color: '#484D55',
    marginTop: 50,
    marginBottom: 10,
    fontFamily: 'Nunito-Regular',
    fontSize: 10,
  },
  loginContainerPush: {
    marginBottom: -230,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    zIndex: 1,
  },
  loginBarPush: {
    width: '100%',
    height: 400,
    alignItems: 'center',
    paddingTop: 90,
  },
  loginText: {
    marginTop: 90,
    position: 'absolute',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
  textApresentation: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#ffffff',
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 20,
  },
  scanButton: {
    marginTop: 30,
    backgroundColor: '#2343A9',
    height: 50,
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
