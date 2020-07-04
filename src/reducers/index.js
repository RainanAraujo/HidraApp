import {createStore} from 'redux';

const INITIAL_STATE = {userData: {}};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {...state, userData: action.data};
    case 'RESET_USER_DATA':
      return {...state, userData: {}};
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
