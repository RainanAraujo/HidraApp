import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  butons: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textButons: {
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    alignSelf: 'center',
  },
  butonCancel: {
    backgroundColor: '#D10E29',
    height: 50,
    width: 120,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  butonAcept: {
    backgroundColor: '#519918',
    height: 50,
    width: 120,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#ffffff75',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 70,
  },
  textTitle: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 25,
    marginTop: 10,
    alignSelf: 'center',
  },
  Input: {
    backgroundColor: '#EDF6FF',
    height: 50,
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
