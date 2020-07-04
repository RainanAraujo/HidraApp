import firestore from '@react-native-firebase/firestore';

export function getUserData(userID) {
  if (!userID.includes('/')) {
    firestore()
      .collection('users')
      .doc(userID)
      .get()
      .then((data) => {
        if (data.exists) {
          return {
            status: 'success',
            data: {...data.data(), uid: userID},
          };
        } else {
          return {
            status: 'error',
            msg: 'Codigo inválido',
          };
        }
      })
      .catch((error) => {
        return {
          status: 'error',
          msg: 'Não foi possivel carregar dados do usuário',
        };
      });
  } else {
    return {
      status: 'error',
      msg: 'Codigo inválido',
    };
  }
}
