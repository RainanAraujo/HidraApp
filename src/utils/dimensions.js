import {
  getRealWindowHeight,
  getRealWindowWidth,
  getStatusBarHeight,
} from 'react-native-extra-dimensions-android';

export const screenHeight = Math.round(
  getRealWindowHeight() - getStatusBarHeight(),
);
export const screenWidth = Math.round(getRealWindowWidth());
export const vh = screenHeight / 100;
export const vw = screenWidth / 100;
export const screenRatio = screenWidth / screenHeight;
export const diagonalScreenSize = Math.hypot(screenWidth, screenHeight);
