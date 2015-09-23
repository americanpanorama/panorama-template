import * as React from 'react';

export default class ExampleComponent extends React.Component {

	constructor () {

		super();

		// set up initial state (instead of ES5-style getInitialState)
		// this.state = 

		// bind handlers to this component instance,
		// since React no longer does this automatically when using ES6
		// this.onThingClicked = this.onThingClicked.bind(this);

	}

	componentWillMount () {

		//

	}

	componentDidMount () {

		// ExampleStore.addChangeListener(this.onChange);

	}

	componentWillUnmount () {

		// ExampleStore.removeChangeListener(this.onChange);

	}

	componentDidUpdate () {

		//

	}

	render () {

		return (
			<div className='example-component'>
				<h3>{this.props.title}</h3>
			</div>
		);

	}

}

// property validation
ExampleComponent.propTypes = {

	title: React.PropTypes.string

};

// property defaults
// (instead of ES5-style getDefaultProps)
ExampleComponent.defaultProps = {

	title: 'Default Title'

};