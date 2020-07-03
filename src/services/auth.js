import auth from '@react-native-firebase/auth';

export function Logout() {
  auth().signOut();
}

export function ChangePassword(oldPassword, newPassword) {
  this.reauthenticate(oldPassword)
    .then(() => {
      var user = firebase.auth().currentUser;
      user
        .updatePassword(newPassword)
        .then(() => {
          return {status: 'success', msg: 'Senha Alterada'};
        })
        .catch((error) => {
          return {status: 'error', msg: 'Erro ao Trocar Senha'};
        });
    })
    .catch((error) => {
      return {status: 'error', msg: 'Senha Incorreta'};
    });
}

export function Login(email, pass) {
  if (email && pass) {
    auth()
      .signInWithEmailAndPassword(email.trim(), pass.trim())
      .then((res) => {
        return {
          status: 'success',
          msg: res.user.uid,
        };
      })
      .catch((error) => {
        if (error.code == 'auth/network-request-failed') {
          return {status: 'error', msg: 'Erro na Rede'};
        } else if (error.code == 'auth/invalid-email') {
          return {
            status: 'error',
            msg: 'Email Inválido',
          };
        } else {
          return {
            status: 'error',
            msg: 'Login Inválido',
          };
        }
      });
  } else {
    return {
      status: 'error',
      msg: 'Login Inválido',
    };
  }
}
