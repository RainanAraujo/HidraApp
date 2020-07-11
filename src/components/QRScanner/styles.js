import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  scanClose: {
    borderWidth: 2,
    width: 240,
    borderColor: '#D10E29',
  },

  modalContainer: {
    backgroundColor: '#ffffff75',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 22,
  },
  contentScan: {
    flex: 1,
    marginBottom: '8%',
    alignItems: 'center',
  },
  textTitle: {
    backgroundColor: '#519918',
    borderRadius: 30,
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    fontSize: 24,
    marginTop: 10,
    alignSelf: 'center',
    fontFamily: 'Nunito-Regular',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  icons: {
    color: '#fff',
  },
  scannerView: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
});
