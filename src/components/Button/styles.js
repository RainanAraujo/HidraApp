import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 300,
    borderRadius: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  default: {
    marginHorizontal: 10,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
  },
  outlined: {
    backgroundColor: '#ffffff00',
    borderWidth: 2,
  },
  ActivityIndicator: {
    color: '#fff',
  },
});

export default styles;
