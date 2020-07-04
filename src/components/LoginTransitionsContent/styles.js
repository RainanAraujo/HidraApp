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
});
