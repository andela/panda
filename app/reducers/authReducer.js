import { Map, fromJS } from 'immutable';
import {
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT_REQUEST,
  SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST
} from '../constants';

export const INITIAL_AUTH_STATE = Map({
  isAuthenticated: false,
  isFetching: false,
  credentials: Map({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),
  error: null,
  user: null
});

export default function authReducer(state = INITIAL_AUTH_STATE, action) { 
  switch(action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return state.merge(Map({
        isFetching: true,
        credentials: fromJS(action.credentials)
      }));
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return state.merge(Map({
        isAuthenticated: true,
        isFetching: false,
        credentials: Map({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }),
        error: null,
        user: fromJS(action.user)
      }));
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return state.merge(Map({
        isAuthenticated: false,
        isFetching: false,
        error: fromJS(action.error),
        user: null
      }));
    case LOGOUT_REQUEST:
      return INITIAL_AUTH_STATE.merge({
        isAuthenticated: false
      });
    default:
      return state;
  }
}
