import { APPLICATION_LOADED } from "../actions/application";

export const application = (state = { loaded: false }, action) => {
	if (action.type == APPLICATION_LOADED) {
		return { 
			loaded: true
		};
	}

	return state;
}