import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    elevation: 1,
    zIndex: 1,
    width: '90%',
    marginHorizontal: '5%',
  },
  iconContainer: {
    height: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {flex: 1, fontSize: 20, color: 'white'},
  msgContainer: {flex: 1, fontSize: 15, color: 'white'},
});
