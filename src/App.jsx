import * as React from 'react';

// example module from @panorama
import Legend from '@panorama/legend';

/*
 * Data flow via Flux:
 * https://facebook.github.io/flux/docs/overview.html
 * 
 *                  ┌-----   actions  <-----┐
 *                  v                       |    
 * actions --> dispatcher --> stores --> views
 */

// stores
import ExampleStore from './stores/ExampleStore';


// components
// TODO: make component, use exampleComponent.scss.
// can component require css instead of having that happen elsewhere? more modular.
// (if i get this to work, make it happen for legend component too?)




// actions


// utils


// main app container
export default class App extends React.Component {

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
			<Legend data={this.props.legendData}/>
		);

	}

}

// property validation
App.propTypes = {

};

// property defaults
// (instead of ES5-style getDefaultProps)
App.defaultProps = {

	legendData: {
		items: [
			'narratives',
			'cotton',
			'sugar'
		],
		initialSelection: 'narratives'
	}

};