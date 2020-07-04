import firestore from '@react-native-firebase/firestore';

export const getUserData = (userID) => {
  return new Promise((resolve) => {
    if (!userID.includes('/')) {
      firestore()
        .collection('users')
        .doc(userID)
        .get()
        .then((data) => {
          if (data.exists) {
            resolve({...data.data(), uid: userID});
          } else {
            throw new Error('Codigo inválido');
          }
        })
        .catch((error) => {
          throw new Error('Não foi possivel carregar dados do usuário');
        });
    } else {
      throw new Error('Codigo inválido');
    }
  });
};
