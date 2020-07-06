import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'space-around',
    display: 'flex',
    alignItems: 'center',
  },
  textWelcome: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 36,
    alignSelf: 'center',
  },

  qrCodeButton: {
    marginTop: -40,
    backgroundColor: '#ffffff',
    height: 80,
    width: 80,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrCodeText: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
    alignSelf: 'center',
  },

  buttonScan: {
    backgroundColor: '#2343A9',
  },
  qrImage: {
    width: 50,
    height: 50,
  },
});

export default styles;
