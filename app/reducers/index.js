import { combineReducers } from 'redux-immutable';

import authReducer from './authReducer';

const root = combineReducers({
  auth: authReducer
});

export default root;
