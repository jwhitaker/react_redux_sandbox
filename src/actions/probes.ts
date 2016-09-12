import Action from "./action";
import { ProbeList } from "../model/Probe";

export const PROBES_LOADING = "PROBES_LOADING";
export const PROBES_LOADED = "PROBES_LOADED";

export type ProbesLoading = {};
export type ProbesLoaded = { probes: ProbeList };

export function probesLoading(): Action<ProbesLoading> {
	return {
		type: PROBES_LOADING,
		payload: {}
	}
}

export function probesLoaded(probes: ProbeList): Action<ProbesLoaded> {
	return {
		type: PROBES_LOADED,
		payload: {
			probes: probes
		}
	};
}
