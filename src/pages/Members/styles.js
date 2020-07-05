import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  grid: {
    flexDirection: 'row',
    height: 80,
    width: '95%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  avatar: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },

  pricesContent: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
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
  textPersonalTitle: {
    color: '#57AE00',
    fontFamily: 'Nunito-Regular',
    marginLeft: 10,
  },
  textName: {
    color: '#484D55',
    fontSize: 23,
    fontFamily: 'Nunito-Regular',
    marginLeft: 10,
  },
  divider: {
    backgroundColor: '#DBDBDB',
    height: 1,
    width: '80%',
    alignSelf: 'flex-end',
  },
  titleContent: {},
  searchBar: {
    backgroundColor: '#DBDBDB',
    marginLeft: 10,
  },
});

export default styles;
