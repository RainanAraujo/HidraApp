import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../utils/dimensions';

export default styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    width: screenWidth,
    height: screenHeight,
    top: 0,
    left: 0,
  },
});
