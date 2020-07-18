import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  card: {
    aspectRatio: 13 / 12,
    width: '90%',
    height: undefined,
    alignContent: 'flex-end',
  },
  cardBackground: {
    flex: 1,
  },
  avatar: {
    alignSelf: 'center',
    height: '40%',
    aspectRatio: 1 / 1,
    width: undefined,
    borderRadius: 123,
    borderWidth: 4,
    marginTop: '-5%',
  },
  infoBox: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '5%',
    padding: '5%',
    alignItems: 'stretch',
    flex: 1,
  },
  titleText: {
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    flex: 1,
    textAlignVertical: 'center',
  },
  subTitleText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    flex: 1,
    textAlignVertical: 'center',
  },
  infoCardRow: {
    flexDirection: 'row',
    paddingBottom: '4%',
    paddingTop: '4%',
    flex: 1,
  },
  nameText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Bold',
    textAlignVertical: 'center',
    fontSize: 20,
    flex: 1,
  },
});
