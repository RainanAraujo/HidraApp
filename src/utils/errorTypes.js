export const LOGOUT_ERROR = 'Erro ao realizar logout';
export const CHANGE_PASSWORD_ERROR = 'Erro ao Trocar Senha';
export const WRONG_PASSWORD_ERROR = 'Senha Incorreta';
export const NETWORK_REQUEST_ERROR = 'Erro na Rede';
export const INVALID_LOGIN_ERROR = 'Login Inválido';
export const INVALID_EMAIL_ERROR = 'Email Inválido';
export const WRONG_PASSWORD_ERROR = 'Senha Incorreta';
export const NOT_FOUND_USER_ERROR = 'Usuário não foi encontrado';
export const LOAD_USER_DATA_ERROR =
  'Não foi possivel carregar dados do usuário';
export const INVALID_QRCODE_ERROR = 'QR Code inválido';
export const CHANGE_DATA_ERROR = 'Não foi possivel alterar os dados';
export const DEFAULT_AUTH_ERROR = 'Erro desconhecido';

export const getFirebaseError = (errorCode) => {
  if (errorCode == 'auth/network-request-failed') {
    return new Error(NETWORK_REQUEST_ERROR);
  } else if (errorCode == 'auth/invalid-email') {
    return new Error(INVALID_EMAIL_ERROR);
  } else if (errorCode == 'auth/user-not-found') {
    return new Error(NOT_FOUND_USER_ERROR);
  } else if (errorCode == 'auth/wrong-password') {
    return new Error(WRONG_PASSWORD_ERROR);
  } else {
    return new Error(DEFAULT_AUTH_ERROR);
  }
};
