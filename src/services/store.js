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
          resolve({...data.data(), uid: userID});
        } else {
          reject(new Error(NOT_FOUND_USER_ERROR));
        }
      })
      .catch(() => reject(new Error(LOAD_USER_DATA_ERROR)));
  });
};

export const updateContact = (userID, newContact) => {
  console.log(userID);
  return new Promise((resolve, reject) => {
    firestore()
      .collection('users')
      .doc(userID)
      .update({contact: newContact})
      .then(() => {
        resolve('Contato adicionado com sucesso');
      })
      .catch((error) => {
        return reject(new Error(CHANGE_DATA_ERROR));
      });
  });
};

export const updateUserData = (userID, userData) => {
  return new Promise((resolve, reject) => {
    console.log(firestore().collection('users').doc(userID).path);
    firestore()
      .collection('users')
      .doc(userID)
      .set(userData)
      .then(() => {
        resolve('Dados registrados com sucesso sucesso');
      })
      .catch((error) => {
        console.log(error);
        return reject(new Error(CHANGE_DATA_ERROR));
      });
  });
  /*firestore()
      .collection('users')
      .doc(userID)
      .update(userData)
      .then(() => {
        resolve('Dados registrados com sucesso sucesso');
      })
      .catch((error) => {
        console.log(error);
        return reject(new Error(CHANGE_DATA_ERROR));
      });
  });*/
};
