import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './../constants/actionTypes';


const user = function auth(action, state = {
	isFetching: false,
	isAuthenticated: localStorage.getItem('id_token') ? true : false
}) {
	switch (action.type) {
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
		default:
			return state;
	}
};

export default user;
