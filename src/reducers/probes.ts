import { PROBES_LOADING, PROBES_LOADED } from "../actions/probes";
import { ProbeList } from "../model/Probe";

type ProbeState = { loading: boolean, probes: ProbeList }

export const probes = (state = { loading: false, probes: [] }, action) => {
	if (action.type == PROBES_LOADING) {
		console.log("ProbesLoading", state);
		return {
			loading: true,
			probes: probes
		};
	} else if (action.type == PROBES_LOADED) {
		console.log("ProbesLoaded", state, action);
		
		return {
			loading: false,
			probes: action.probes
		};
	}

	return state;
};
