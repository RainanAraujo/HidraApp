import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  steps: {
    backgroundColor: '#D2D2D2',
    width: 15,
    height: 15,
    borderRadius: 10,
    margin: 2,
  },
  stepsFocused: {
    backgroundColor: '#D2D2D2',
    width: 35,
    height: 15,
    borderRadius: 10,
    margin: 2,
  },
  stepsConteiner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  content: {
    flex: 13,
    justifyContent: 'flex-end',
    paddingVertical: 20,
  },
  buttonContinue: {
    backgroundColor: '#519918',
    width: 180,
  },
});

export default styles;
