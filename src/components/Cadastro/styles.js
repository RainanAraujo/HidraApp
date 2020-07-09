import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  textTitle: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 60,
    letterSpacing: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  textSubTitle: {
    textAlign: 'center',
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 10,
    letterSpacing: 0.15,
  },
  iconUser: {
    color: '#484D55',
  },
  textIcon: {
    textAlign: 'center',
    color: '#484D55',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  iconView: {
    borderColor: '#484D55',
    borderWidth: 2,
    borderRadius: 100,
    padding: 20,
  },
  titleInput: {
    color: '#2F3145',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 3,
    letterSpacing: 0.25,
  },
  picker: {
    height: 50,
    width: 100,
  },
  itemPicker: {
    color: '#2F3145',
  },
});
