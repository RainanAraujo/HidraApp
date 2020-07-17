import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#61666935',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCode: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  buttonOptions: {
    flexDirection: 'row',
  },
  closeButton: {
    margin: 20,
    backgroundColor: '#FF4646',
  },
  downloadButton: {
    margin: 20,
    backgroundColor: '#38B124',
  },
});

export default styles;
