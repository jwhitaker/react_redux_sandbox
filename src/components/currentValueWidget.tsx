import * as React from "react";
import { Probe } from "../model/Probe";

type CurrentValueWidgetProperties = { probe: Probe, value: string }

export class CurrentValueWidget extends React.Component<CurrentValueWidgetProperties, any> {
	render() {
		return <div>Current Value { this.props.probe.name } { this.props.value }</div>;
	}
}