import firestore from '@react-native-firebase/firestore';
import {
  NOT_FOUND_USER_ERROR,
  LOAD_USER_DATA_ERROR,
  CHANGE_DATA_ERROR,
} from '../utils/errorTypes';

export const getUserData = (userID) => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('users')
      .doc(userID)
      .get()
      .then((data) => {
        if (data.exists) {
          resolve(data.data());
        } else {
          reject(new Error(NOT_FOUND_USER_ERROR));
        }
      })
      .catch(() => reject(new Error(LOAD_USER_DATA_ERROR)));
  });
};

export const addContact = (userID, newContact) => {
  firestore()
    .collection('users')
    .doc(userID)
    .update({contact, newContact})
    .then(() => {
      resolve(['success', 'Sucesso', 'Contato adicionado com sucesso']);
    })
    .catch(() => reject(new Error(CHANGE_DATA_ERROR)));
};
