import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  butons: {
    width: '70%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textButonAccept: {
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    alignSelf: 'center',
  },
  textButonClose: {
    color: '#D10E29',
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    alignSelf: 'center',
  },
  butonCancel: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D10E29',
  },
  butonAcept: {
    backgroundColor: '#519918',
    height: 50,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
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
  form: {
    alignItems: 'center',
    width: '100%',
  },
});
