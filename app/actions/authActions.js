import request from 'superagent';


import {
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST,
  LOGOUT_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  SIGNUP_REQUEST
} from '../constants';

export function loginRequest(credentials) {
  return {
    type: LOGIN_REQUEST,
    credentials
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user: user.text
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error: error.data || {message: error.message}
  };
}

export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
}

export function signupRequest(credentials) {
  return {
    type: SIGNUP_REQUEST,
    credentials
  };
}

export function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user: user.text
  };
}

export function signupFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    error: error.data || {message: error.message}
  };
}

export function loginUser(credentials) {
  return (dispatch) => {
    dispatch(loginRequest(credentials));
    return request
      .post('/api/login')
      .send(credentials)
      .then((res) => {
        let user = res.body;
        localStorage.setItem('token', user);
        dispatch(loginSuccess(user));
      }).catch((err) => {
        dispatch(loginFailure(err));
      });
  };
 }

export function logoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logoutRequest());
  };
}

export function signupUser(credentials) {
  return (dispatch) => {
    dispatch(signupRequest(credentials));
    return request
      .post('/api/signup')
      .send(credentials)
      .then((res) => {
        let user = res.body;
        localStorage.setItem('token', user);
        dispatch(signupSuccess(user));
      }).catch((err) => {
        dispatch(signupFailure(err));
      });
  };
 }
