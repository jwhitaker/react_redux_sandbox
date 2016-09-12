import * as React from "react";
import { incrementClick } from "../actions/incrementClick";
import { connect } from "react-redux";


interface SomeButtonProperties {
	text: string
}

interface DispatchProps {
	onClick()
}

interface StateProps {
	onClick?:any
}


function mapDispatchToProps(dispatch: any, ownProps: any) {
	return {
		onClick: () => {
			dispatch(incrementClick(1));
		}
	};
}

function mapStateToProps(state) {
	return {};
}

@connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)
export class SomeButton extends React.Component<any, any> {
	render() {
		return <button onClick={this.props.onClick}>{this.props.text}</button>;
	}
}