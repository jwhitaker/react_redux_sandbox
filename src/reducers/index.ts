import { combineReducers } from "redux";
import { application } from "./application";
import { probes } from "./probes";

const reducer = combineReducers({
	application,
	probes
})

export default reducer;