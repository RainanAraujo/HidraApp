import auth from '@react-native-firebase/auth';
import {
  LOGOUT_ERROR,
  INVALID_LOGIN_ERROR,
  getFirebaseError,
} from '../utils/errorTypes';

export const getCurrentUser = () => auth().currentUser;

export const signOut = () => {
  return new Promise((resolve, reject) => {
    auth()
      .signOut()
      .then(() => {
        resolve(['success', 'Sucesso', 'Logout concluído']);
      })
      .catch(() => reject(new Error(LOGOUT_ERROR)));
  });
};

export const changePassword = (oldPassword, newPassword) => {
  return new Promise((resolve, reject) => {
    auth()
      .sendPasswordResetEmail(auth().currentUser.email)
      .then(() => {
        resolve('Email de redefinição de senha foi enviado');
      })
      .catch((error) => reject(getFirebaseError(error.code)));
  });
};

export const signIn = (email, pass) => {
  return new Promise((resolve, reject) => {
    if (email && pass) {
      auth()
        .signInWithEmailAndPassword(email.trim(), pass.trim())
        .then((res) => {
          resolve(res.user.uid);
        })
        .catch((error) => reject(getFirebaseError(error.code)));
    } else {
      reject(new Error(INVALID_LOGIN_ERROR));
    }
  });
};
