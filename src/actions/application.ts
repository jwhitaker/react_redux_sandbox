import Action from "./action";

export const APPLICATION_LOADED = "APPLICATION_LOADED";

export type ApplicationLoaded = {};

export function applicationLoaded(): Action<ApplicationLoaded> {
	return {
		type: APPLICATION_LOADED,
		payload: { }
	};
}