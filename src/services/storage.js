import storage from '@react-native-firebase/storage';
import {UPDATE_PIC_ERROR, LOAD_PIC_ERROR} from '../utils/errorTypes';

const profile_pictures = storage().ref('profile_pictures');

export const setProfilePic = (userID, pathPhoto) => {
  return new Promise((resolve, reject) => {
    profile_pictures
      .child(userID)
      .putFile('file:' + pathPhoto)
      .then(() => {
        getProfilePic(userID).then((url) => {
          resolve(url);
        });
      })
      .catch((error) => {
        reject(new Error(UPDATE_PIC_ERROR));
      });
  });
};

export const getProfilePic = (userID) => {
  return new Promise((resolve, reject) => {
    profile_pictures
      .child(userID)
      .getDownloadURL()
      .then((url) => resolve(url))
      .catch((error) => reject(new Error(error)));
  });
};
