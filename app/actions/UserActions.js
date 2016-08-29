import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './../constants/actionTypes';
import request from 'superagent';

// logging in
function logInRequest(creds) {
	return {
		type: LOGIN_REQUEST,
		isFetching: true,
		isAuthenticated: false,
		creds
	};
}

function receiveLogIn(user) {
	return {
		type: LOGIN_SUCCESS,
		isFetching: false,
		isAuthenticated: true,
		id_token: user.id_token
	};
}

function logInError(message) {
	return {
		type: LOGIN_FAILURE,
		isFetching: false,
		isAuthenticated: false,
		message
	};
}

// calls the API to get atoken and dispatches actions along the way
export function logInUser(creds) {

	return dispatch => {
		// kickOff the call to the API
		dispatch(logInRequest(creds));

		request
			.post('/login')
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.send({name:creds.name, email:creds.email})
			.end(function(err, response) {
				var user = response.body;
				if (!response.ok || err) {
					dispatch(logInError(err));
				} else {
					localStorage.setItem('id_token', user);
					dispatch(receiveLogIn(user));
				}
			});
	};
}

// logging out
function requestLogOut() {
	return {
		type: LOGOUT_REQUEST,
		isFetching: true,
		isAuthenticated: true
	};
}

function receiveLogOut() {
	return {
		type: LOGOUT_SUCCESS,
		isFetching: false,
		isAuthenticated: false
	};
}

export function logOutUser() {
	return dispatch => {
		dispatch(requestLogOut());
		localStorage.removeItem('id_token');
		dispatch(receiveLogOut());
	};
}
