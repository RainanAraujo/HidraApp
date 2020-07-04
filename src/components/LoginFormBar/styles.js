import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  hidraImage: {
    transform: [
      {
        translateY: 100,
      },
    ],
  },

  headerBarPush: {
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
});

export default styles;
