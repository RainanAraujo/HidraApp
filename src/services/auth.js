import auth from '@react-native-firebase/auth';

export const Logout = () => {
  return new Promise((resolve) => {
    auth()
      .signOut()
      .then(() => {
        resolve();
      })
      .catch(() => {
        throw new Error('Erro ao realizar logout');
      });
  });
};

export const ChangePassword = (oldPassword, newPassword) => {
  return new Promise((resolve) => {
    this.reauthenticate(oldPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(newPassword)
          .then(() => {
            resolve();
          })
          .catch((error) => {
            throw new Error('Erro ao Trocar Senha');
          });
      })
      .catch((error) => {
        throw new Error('Senha Incorreta');
      });
  });
};

export const Login = (email, pass) => {
  return new Promise((resolve) => {
    if (email && pass) {
      auth()
        .signInWithEmailAndPassword(email.trim(), pass.trim())
        .then((res) => {
          resolve(res.user.uid);
        })
        .catch((error) => {
          if (error.code == 'auth/network-request-failed') {
            return {status: 'error', msg: 'Erro na Rede'};
          } else if (error.code == 'auth/invalid-email') {
            throw new Error('Email Inválido');
          } else {
            throw new Error('Login Inválido');
          }
        });
    } else {
      throw new Error('Login Inválido');
    }
  });
};
