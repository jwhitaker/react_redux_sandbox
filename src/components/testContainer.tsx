import * as React from "react";
import { connect } from "react-redux";
import { SomeButton } from "./someButton";

interface TestContainerState {
}

interface TestContainerProps {
	numberOfClicks: String
}

function mapStateToProps(state): TestContainerProps {
	return {
		numberOfClicks: state.incrementClick
	};
}

@connect<TestContainerProps, any, any>(mapStateToProps, null)
export class TestContainer extends React.Component<any, any> {	
	render() { 
		return <div>
			{ this.props.numberOfClicks }
			
			<SomeButton text="Click Me!!!" />	
		</div>;
	}
}