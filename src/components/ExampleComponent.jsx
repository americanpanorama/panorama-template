import * as React from 'react';
import ExampleStore from '../stores/ExampleStore';
import { AppActionTypes } from '../utils/AppActionCreator';

/**
 * An extremely minimal component,
 * designed as boilerplate for new components
 * and to demonstrate data flow through a React/Flux application.
 */
export default class ExampleComponent extends React.Component {

	// property validation
	static propTypes = {
		title: React.PropTypes.string,
		loading: React.PropTypes.bool
	};

	// property defaults (ES7-style React)
	// (instead of ES5-style getDefaultProps)
	static defaultProps = {
		title: 'Default Title',
		loading: true
	};

	constructor (props) {

		super(props);

	}

	componentWillMount () {

		//

	}

	componentDidMount () {

		//

	}

	componentWillUnmount () {

		//

	}

	componentDidUpdate () {

		//

	}

	render () {

		return (
			<div className='example-component'>
				<h3>{ this.props.title }</h3>
				<p>Initial data load { this.props.loading ? 'pending...' : 'complete!' }</p>
			</div>
		);

	}

}
