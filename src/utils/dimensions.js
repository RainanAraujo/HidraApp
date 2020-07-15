import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');

export const screenHeight = dimensions.height;
export const screenWidth = dimensions.width;
export const vh = dimensions.height / 100;
export const vw = dimensions.width / 100;
export const screenRatio = dimensions.width / dimensions.height;
export const diagonalScreenSize = Math.hypot(
  dimensions.width,
  dimensions.height,
);
