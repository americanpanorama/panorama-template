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
import ExampleStore from './stores/ExampleStore.jsx';


// components
import ExampleComponent from './components/ExampleComponent.jsx';
// TODO: can component require css instead of having that happen elsewhere? more modular.
// (if i get this to work, make it happen for legend component too?)




// actions


// utils


// main app container
export default class App extends React.Component {

	constructor (props) {

		super(props);

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
			<div className='example-app'>
				<h2>Application component:</h2>
				<ExampleComponent title={this.props.exampleTitle}/>
				<h2>Imported component:</h2>
				<Legend data={this.props.legendData}/>
			</div>
		);

	}

}

// property validation
App.propTypes = {

	legendData: React.PropTypes.object,
	exampleTitle: React.PropTypes.string,

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
	},

	exampleTitle: 'Example Component'

};
