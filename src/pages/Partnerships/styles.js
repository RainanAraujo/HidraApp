import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  grid: {
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 10,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  avatar: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  textInfo: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    marginBottom: 3,
    marginLeft: 10,
  },
  textPriceBefore: {
    color: '#FC1818',
    fontFamily: 'Nunito-Regular',
    fontSize: 9,
  },
  textPriceAfter: {
    color: '#38B124',
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
  },
  pricesContent: {
    alignSelf: 'center',
  },
  statusBar: {
    backgroundColor: '#fff',
  },
  textTitle: {
    color: '#2242A7',
    fontFamily: 'Nunito-Regular',
    fontSize: 36,
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  textSubTitle: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  divider: {
    backgroundColor: '#DBDBDB',
    height: 1,
    width: '90%',
    alignSelf: 'center',
  },
  textButtonMoreInfo: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
  },
  buttonMoreInfo: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default styles;
