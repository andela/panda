import { Map, fromJS } from 'immutable';

import {
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST,
  SIGNUP_SUCCESS,SIGNUP_REQUEST
} from '../../../app/constants';

import authReducer, {
  INITIAL_AUTH_STATE
} from '../../../app/reducers/authReducer';

describe('Authentication Reducer', () => {
  it('returns initial state', () => {
    expect(authReducer(undefined, {})).toBe(INITIAL_AUTH_STATE);
  });

  it('handles LOGIN_REQUEST', () => {
    const state = Map();
    const action = {
      type: LOGIN_REQUEST,
      credentials: {
        email: 'user@user.com',
        password: 'user'
      }
    };

    expect(authReducer(state, action)).toEqual(Map({
      isFetching: true,
      credentials: fromJS(action.credentials)
    }));
  });

  it('handles SIGNUP_REQUEST', () => {
    const state = Map();
    const action = {
      type: SIGNUP_REQUEST,
      credentials: {
        name: 'user',
        email: 'user@user.com',
        password: 'user',
        confirmPassword: 'user'
      }
    };

    expect(authReducer(state, action)).toEqual(Map({
      isFetching: true,
      credentials: fromJS(action.credentials)
    }));
  });

  it('handles LOGIN_SUCCESS', () => {
    const action = {
      type: LOGIN_SUCCESS,
      user: {
        email: 'user@user.com'
      }
    };

    expect(authReducer(undefined, action)).toEqual(INITIAL_AUTH_STATE.merge(Map({
      isAuthenticated: true,
      user: Map({
        email: 'user@user.com'
      })
    })));
  });

  it('handles SIGNUP_SUCCESS', () => {
    const action = {
      type: SIGNUP_SUCCESS,
      user: {
        email: 'user@user.com'
      }
    };

    expect(authReducer(undefined, action)).toEqual(INITIAL_AUTH_STATE.merge(Map({
      isAuthenticated: true,
      user: Map({
        email: 'user@user.com'
      })
    })));
  });

  it('handles LOGIN_FAILURE', () => {
    const action = {
      type: LOGIN_FAILURE,
      error: 'Sorry, you provided invalid credentials',
      user: null
    };

    expect(authReducer(undefined, action)).toEqual(INITIAL_AUTH_STATE.merge(Map({
      isAuthenticated: false,
      isFetching: false,
      error: 'Sorry, you provided invalid credentials',
      user: null
    })));
  });
});
