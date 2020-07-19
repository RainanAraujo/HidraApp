import storage from '@react-native-firebase/storage';
import {UPDATE_PIC_ERROR, LOAD_PIC_ERROR} from '../utils/errorTypes';

const profile_pictures = storage().ref('profile_pictures');

export const setProfilePic = async (userID, pathPhoto) => {
  return new Promise((resolve, reject) => {
    profile_pictures
      .child(userID + '.png')
      .putFile(pathPhoto)
      .then(() => resolve('A foto do usuário foi atualizada com sucesso'))
      .catch(() => reject(new Error(UPDATE_PIC_ERROR)));
  });
};

export const getProfilePic = async (userID) => {
  return new Promise((resolve, reject) => {
    profile_pictures
      .child(userID + '.png')
      .getDownloadURL()
      .then((url) => resolve(url))
      .catch((error) => reject(new Error(error)));
  });
};
