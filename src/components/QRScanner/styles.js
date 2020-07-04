import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'space-around',
    display: 'flex',
    alignItems: 'center',
  },

  card: {
    paddingTop: 55,
    aspectRatio: 4 / 5,
    width: '90%',
  },
  cardBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    alignItems: 'center',
    marginBottom: -200,
    zIndex: 1,
  },

  scanClose: {
    marginTop: 30,
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  qrCodeButton: {
    marginTop: -40,
    backgroundColor: '#ffffff',
    height: 80,
    width: 80,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrCodeText: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
    alignSelf: 'center',
  },

  titleText: {
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 10,
  },
  subTitleText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    marginLeft: 20,
  },
  inforCardRow: {
    flexDirection: 'row',
  },
  nameText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    marginTop: 40,
    marginLeft: 20,
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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textWelcome: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 36,
    marginTop: 10,
    alignSelf: 'center',
  },
});
