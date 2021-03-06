import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 10,
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textButton: {
    marginLeft: 8,
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
  textExitButton: {
    color: 'red',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
  modalContainer: {
    backgroundColor: '#ffffff75',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
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
  },
  iconAdjustWithName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    color: '#2242A7',
    fontFamily: 'Nunito-Regular',
    fontSize: 36,
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 20,
  },
  textSubTitle: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  titleContent: {
    marginBottom: 20,
  },
});

export default styles;
