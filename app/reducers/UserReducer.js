import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, FIND_USER } from './../constants/actionTypes';

const user = function auth(action, state = {
	isFetching: false,
	isAuthenticated: localStorage.getItem('id_token') ? true : false
}) {

	switch (action.type) {

		//logging in
		case LOGIN_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				isAuthenticated: false,
				user: user.action.creds
			});
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: true,
				errorMessage: ''
			});
		case LOGIN_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: false,
				errorMessage: action.message
			});

		// logging out
		case LOGOUT_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				isAuthenticated: true,
				user: action.cred
			});
		case LOGOUT_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: false,
				errorMessage: ''
			});
		case LOGOUT_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: false,
				errorMessage: action.message
			});

		// finding a user
		case FIND_USER:
			return Object.assign({}, state, {
				user: action.cred
			});

		default:
			return state;
	}
};

export default user;
