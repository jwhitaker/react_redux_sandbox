import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import { Provider, connect } from "react-redux";
import { Application } from "./components/application";
import { ProbeService } from "./services/probeService";

import { applicationLoaded } from "./actions/application";
import { probesLoading, probesLoaded } from "./actions/probes";

import reducer  from "./reducers/index";

var store = Redux.createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<Application />
	</Provider>,
	document.getElementById("app")
);

store.dispatch(probesLoading());

let probeService = new ProbeService();
probeService.loadProbes().subscribe((probes) => {
	store.dispatch(probesLoaded(probes));
	store.dispatch(applicationLoaded());
});