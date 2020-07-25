import storage from '@react-native-firebase/storage';
import {UPDATE_PIC_ERROR, LOAD_PIC_ERROR} from '../utils/errorTypes';
import ImageResizer from 'react-native-image-resizer';

const profile_pictures = storage().ref('profile_pictures');

export const setProfilePic = (userID, pathPhoto) => {
  return new Promise((resolve, reject) => {
    ImageResizer.createResizedImage(pathPhoto, 320, 320, 'JPEG', 100)
      .then((response) => {
        console.log(response.path);
        profile_pictures
          .child(userID)
          .putFile('file:' + response.path)
          .then(() => {
            getProfilePic(userID).then((url) => {
              resolve(url);
            });
          })
          .catch((error) => {
            reject(new Error(UPDATE_PIC_ERROR));
          });
      })
      .catch((error) => console.log(error));
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
