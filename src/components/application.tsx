import * as React from "react";
import { CurrentValueWidget } from "./currentValueWidget";
import { TestContainer } from "./testContainer";
import { ApplicationLoadingIndicator } from "./applicationLoadingIndicator";
import { connect } from "react-redux";
import { ProbeList } from "../model/Probe";

type ApplicationProperties = { loaded: boolean, probes: ProbeList }
const mapStateToProps = (state) => {
	return {
		loaded: state.application.loaded,
		probes: state.probes
	}
};

@connect<ApplicationProperties, any, any>(mapStateToProps, null)
export class Application extends React.Component<any, any> {
	render() {
		if (!this.props.loaded) {
			return <ApplicationLoadingIndicator />;
		}

		let renderCurrentValueWidget = (probe, index) => {
			return <CurrentValueWidget key={index} probe={probe} value="0"></CurrentValueWidget>;
		};

		console.log(this.props);

		return <div>
			{ this.props.probes.map(renderCurrentValueWidget) }
			</div>;
	}
}