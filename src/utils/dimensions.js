import {Dimensions} from 'react-native';

export const screenHeight = Math.round(Dimensions.get('window').height);
export const screenWidth = Math.round(Dimensions.get('window').width);
export const vh = screenHeight / 100;
export const vw = screenWidth / 100;
export const screenRatio = screenWidth / screenHeight;
export const diagonalScreenSize = Math.hypot(screenWidth, screenHeight);
