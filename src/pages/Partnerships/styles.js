import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  grid: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 10,
    height: 100,
    width: 350,
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 2,
  },
  avatar: {
    flexDirection: 'row',
    marginLeft: 10,
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
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },
  statusBar: {
    backgroundColor: '#fff',
  },
});

export default styles;
