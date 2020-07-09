import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff75',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  qrCode: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
