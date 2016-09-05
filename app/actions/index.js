import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, FIND_USER, UPDATE } from '../constants';
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

function find(user) {
	return {
		type: FIND_USER,
		isFetching: false,
		isAuthorised: true,
		user
	};
}

function update() {
	return {
		type: UPDATE,
		isFetching: false,
		isAuthenticated: true
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

export function logOutUser() {
	return dispatch => {
		dispatch(requestLogOut());
		localStorage.removeItem('id_token');
		dispatch(receiveLogOut());
	};
}

export function findUser() {
	return dispatch => {
		dispatch(find());

		request
			.get('/users')
			.end(function(err, response) {
				var user = response.body;
				if(!response.ok || err) {
					dispatch(find(err));
				} else {
					localStorage.getItem('id_token');
					dispatch(find(user));
				}
			});
	};
}

export function updateUser() {
	return dispatch => {
		dispatch(update());
	};
}
