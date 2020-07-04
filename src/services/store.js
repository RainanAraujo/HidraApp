import firestore from '@react-native-firebase/firestore';

export const getUserData = (userID) => {
  return new Promise((resolve, reject) => {
    if (!userID.includes('/')) {
      firestore()
        .collection('users')
        .doc(userID)
        .get()
        .then((data) => {
          if (data.exists) {
            resolve(data.data());
          } else {
            reject(new Error('Codigo inválido'));
          }
        })
        .catch((error) => {
          reject(new Error('Não foi possivel carregar dados do usuário'));
        });
    } else {
      reject(new Error('Codigo inválido'));
    }
  });
};
