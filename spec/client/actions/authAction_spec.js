import request from 'superagent';
import mocker from 'superagent-mocker';
import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import * as actionCreators from '../../../app/actions/authActions';
import * as actionTypes from '../../../app/constants';

const middlewares = [thunk];
const mockStore = configMockStore(middlewares);
const mock = mocker(request);

describe('Authentication actions', () => {
  const credentials = {
    email: 'test@gmail.com',
    password: 'test'
  };

  it('creates LOGIN_REQUEST action', () => {
    const action = {
      type: actionTypes.LOGIN_REQUEST,
      credentials
    };

    expect(actionCreators.loginRequest(credentials)).toEqual(action);
  });

  it('creates LOGIN_SUCCESS action', () => {
    const action = {
      type: actionTypes.LOGIN_SUCCESS,
      user: credentials
    };

    expect(actionCreators.loginSuccess({text: credentials})).toEqual(action);
  });

  it('creates LOGIN_FAILURE action', () => {
    const error = {
      message: 'Invalid credentials'
    };

    const action = {
      type: actionTypes.LOGIN_FAILURE,
      error
    };

    expect(actionCreators.loginFailure(error)).toEqual(action);
  });

  it('creates SIGNUP_REQUEST action', () => {
    const action = {
      type: actionTypes.SIGNUP_REQUEST,
      credentials
    };

    expect(actionCreators.signupRequest(credentials)).toEqual(action);
  });

  it('creates SIGNUP_SUCCESS action', () => {
    const action = {
      type: actionTypes.SIGNUP_SUCCESS,
      user: credentials
    };

    expect(actionCreators.signupSuccess({text: credentials})).toEqual(action);
  });

  it('creates SIGNUP_FAILURE action', () => {
    const error = {
      message: 'Invalid credentials'
    };

    const action = {
      type: actionTypes.SIGNUP_FAILURE,
      error
    };

    expect(actionCreators.signupFailure(error)).toEqual(action);
  });

  describe('mock actions', () => {
    afterEach(() => {
      mock.clearRoutes();
    });

    it('logs in a user', () => {
      mock
        .post('/api/login', () => ({
          body: credentials
        }));

      const actions = [{
        type: actionTypes.LOGIN_REQUEST,
        credentials
      }, {
        type: actionTypes.LOGIN_SUCCESS,
        user: credentials
      }];

      const store = mockStore({});
      return store.dispatch(actionCreators.loginUser(credentials))
        .then(() => {
          expect(store.getActions()).toEqual(actions);
        });
    });

    it('logs in a user', () => {
        mock
          .post('/api/login', () => ({
            body: credentials
          }));

        const actions = [{
          type: actionTypes.LOGIN_REQUEST,
          credentials
        }, {
          type: actionTypes.LOGIN_SUCCESS,
          user: credentials
        }];

        const store = mockStore({});
        return store.dispatch(actionCreators.loginUser(credentials))
          .then(() => {
            expect(store.getActions()).toEqual(actions);
          });
      });

    it('mocks failed login', () => {
      const error = new Error('Invalid credentials');
      mock
        .post('/api/login', () => ({
          response: {
            body: error
          }
        }));

      const actions = [{
        type: actionTypes.LOGIN_REQUEST,
        credentials
      }, {
        type: actionTypes.LOGIN_FAILURE,
        error
      }];

      const store = mockStore();

      return store.dispatch(actionCreators.loginUser(credentials))
        .then(() => {
          expect(store.getActions()).toEqual(actions);
        });
    });

    it('signs up a user', () => {
      const details = Object.assign({}, credentials, {
        text: {
          domain: 'boozeit.com',
          visitors: 100
        }
      });
      mock
        .post('/api/signup', () => ({
          body: details
        }));

      const actions = [{
        type: actionTypes.SIGNUP_REQUEST,
        credentials
      }, {
        type: actionTypes.SIGNUP_SUCCESS,
        user: details.text
      }];

      const store = mockStore();
      return store.dispatch(actionCreators.signupUser(credentials))
        .then(() => {
          expect(store.getActions()).toEqual(actions);
        });
    });

    it('mocks failed signup', () => {
      const error = new Error('Oopsy');
      mock
        .post('/api/signup', () => ({
          body: error
        }));

      const actions = [{
        type: actionTypes.SIGNUP_REQUEST,
        credentials
      }, {
        type: actionTypes.SIGNUP_FAILURE,
        error
      }];

      const store = mockStore();
      return store.dispatch(actionCreators.signupUser(credentials))
        .then(() => {
          expect(store.getActions()).toEqual(actions);
        });
    });

  });
});
