import { combineReducers } from 'redux';

import reducer from './Reducer';

const allReducers = combineReducers({
	reducer: reducer,
});

export default allReducers;
