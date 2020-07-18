import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth, vh} from '../../utils/dimensions';

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
    height: 96,
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
    color: '#D10E29',
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
