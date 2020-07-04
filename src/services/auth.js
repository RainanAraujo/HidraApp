import auth from '@react-native-firebase/auth';

export const getCurrentUser = () => auth().currentUser;

export const signOut = () => {
  return new Promise((resolve, reject) => {
    auth()
      .signOut()
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject(new Error('Erro ao realizar logout'));
      });
  });
};

export const changePassword = (oldPassword, newPassword) => {
  return new Promise((resolve, reject) => {
    this.reauthenticate(oldPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(newPassword)
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject(new Error('Erro ao Trocar Senha'));
          });
      })
      .catch((error) => {
        reject(new Error('Senha Incorreta'));
      });
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
        .catch((error) => {
          if (error.code == 'auth/network-request-failed') {
            reject(new Error('Erro na Rede'));
          } else if (error.code == 'auth/invalid-email') {
            reject(new Error('Email Inválido'));
          } else {
            reject(new Error('Login Inválido'));
          }
        });
    } else {
      reject(new Error('Login Inválido'));
    }
  });
};
