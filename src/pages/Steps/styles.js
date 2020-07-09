import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  content: {
    width: '100%',
    justifyContent: 'flex-end',
    paddingVertical: 20,
  },
  buttonContinue: {
    backgroundColor: '#519918',
    width: 170,
    color: '#fff',
    margin: 3,
  },
  buttonBack: {
    width: 170,
    borderWidth: 1,
    borderColor: '#D10E29',
    margin: 3,
  },
  textButtonBack: {
    color: '#D10E29',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
