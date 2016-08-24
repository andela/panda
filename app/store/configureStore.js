import {createStore} from 'redux';
import rootReducer from '../reducers/index.js';

const initialState = {
	creds: {
		name: '',
		email: ''
	}
};


const store = function configureStore(initialState) {
	return createStore (
		rootReducer,
		initialState
		);
};
