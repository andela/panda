import makeStore from '../../../app/store/store';
import {
  INITIAL_AUTH_STATE
} from '../../../app/reducers/authReducer';

describe('store', () => {
  it ('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect((store.getState().toJS()).auth).toEqual(INITIAL_AUTH_STATE.toJS());

    store.dispatch({
      type: 'LOGIN_REQUEST',
      credentials: {
        email: 'hey@hey.com',
        password: 'hey'
      }
    });

    expect((store.getState().toJS()).auth).toEqual({
      isAuthenticated: false,
      isFetching: true,
      credentials: {
        email: 'hey@hey.com',
        password: 'hey'
      },
      error: null,
      user: null
    });
  });
});
