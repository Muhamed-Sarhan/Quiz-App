import { CHANGE_CATEGORY } from './actionsType';

export const handleOnChange = (payload) => ({
	type: CHANGE_CATEGORY,
	payload,
});
