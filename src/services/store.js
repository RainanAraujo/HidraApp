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

export const updateUserData = (userID, userData) => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('users')
      .doc(userID)
      .set(userData, {merge: true})
      .then(() => {
        resolve('Dados registrados com sucesso sucesso');
      })
      .catch((error) => {
        return reject(new Error(CHANGE_DATA_ERROR));
      });
  });
};

export const getAllUserData = () => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('users')
      .get()
      .then((data) => {
        const allUserData = data.docs.map((doc) => {
          return {...doc.data(), uid: doc.id};
        });
        resolve(allUserData);
      })
      .catch((error) => {
        return reject(new Error(LOAD_USER_DATA_ERROR));
      });
  });
};

export const getAllPartnerships = () => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('partnerships')
      .get()
      .then((data) => {
        resolve(data.docs.map((item) => item.data()));
      })
      .catch((error) => {
        return reject(new Error(error.message));
      });
  });
};
