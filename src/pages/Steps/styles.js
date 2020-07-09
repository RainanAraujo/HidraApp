import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '4%',
  },
  navigationContent: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContinue: {
    backgroundColor: '#2343A9',
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
