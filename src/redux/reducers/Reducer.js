import { CHANGE_CATEGORY } from '../actions/actionsType';

const initialState = {
	name: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_CATEGORY:
			return {
				...state,
				name: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
