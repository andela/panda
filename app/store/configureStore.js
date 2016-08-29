import {createStore} from 'redux';
import rootReducer from '../reducers/index.js';

const initialState = {
	creds: {
		name: '',
		email: ''
	}
};

export default function configureStore(initialState) {
	return createStore (
		rootReducer,
		initialState
		);
}
