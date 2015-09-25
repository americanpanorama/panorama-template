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

	// property validation (ES7-style React)
	static propTypes = {

		legendData: React.PropTypes.object,
		exampleTitle: React.PropTypes.string,

	};

	// property defaults (ES7-style React)
	// (instead of ES5-style getDefaultProps)
	static defaultProps = {

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

	constructor (props) {

		super(props);

		// set up initial state in constructor
		// (instead of ES5-style getInitialState)
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
			<div className='container full-height'>
				<div className='row full-height'>
					<div className='columns eight full-height'>
						<div className='row top-row template-tile'>
							<h2>Application component:</h2>
							<ExampleComponent title={this.props.exampleTitle}/>
						</div>
						<div className='row bottom-row template-tile'>
						</div>
					</div>
					<div className='columns four full-height'>
						<div className='row top-row template-tile'>
						</div>
						<div className='row bottom-row template-tile'>
							<h2>Imported component:</h2>
							<Legend data={this.props.legendData}/>
						</div>
					</div>
				</div>
			</div>
		);

	}

}
