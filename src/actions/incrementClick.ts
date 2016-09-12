import Action from "./action";

export const INCREMENT_CLICK = "INCREMENT_CLICK";
export type INCREMENT_CLICK = { delta: number };

export function incrementClick(delta: number): Action<INCREMENT_CLICK> {
	return {
		type: INCREMENT_CLICK,
		payload: {
			delta: delta
		}
	};
}
