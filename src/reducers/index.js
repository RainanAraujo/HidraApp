import {createStore} from 'redux';
import React, {useState} from 'react';

const INITIAL_STATE = {valueTranslation: 0};

function reducer(state = INITIAL_STATE, action) {
  return state;
}

const store = createStore(reducer);

export default store;
