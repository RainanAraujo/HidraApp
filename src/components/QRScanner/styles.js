import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  scanClose: {
    backgroundColor: '#FF4646',
    borderRadius: 99,
    padding: 10,
  },
  flashButton: {
    backgroundColor: '#171818',
    borderRadius: 99,
    padding: 10,
  },
  userPopupContainer: {
    position: 'absolute',
    zIndex: 1,
    elevation: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fffffff5',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 22,
  },
  contentScan: {
    backgroundColor: 'white',
    flex: 1,
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
