import { PROBES_LOADING, PROBES_LOADED } from "../actions/probes";
import { ProbeList } from "../model/Probe";

type ProbeState = { loading: boolean, probes: ProbeList }

export const probes = (state = { loading: false, probes: [] }, action) => {
	if (action.type == PROBES_LOADING) {
		return {
			loading: true,
			probes: probes
		};
	} else if (action.type == PROBES_LOADED) {
		return {
			loading: false,
			probes: action.payload.probes
		};
	}

	return state;
};
