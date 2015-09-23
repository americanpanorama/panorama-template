// npm modules
import * as React from 'react';
// var Legend = require("@panorama/legend");

/*
Data flow via Flux: https://facebook.github.io/flux/docs/overview.html

                 ┌-----   actions  <-----┐
                 v                       |    
actions --> dispatcher --> stores --> views
*/

// stores
import ExampleStore from './stores/ExampleStore';

//
// TODO WEDS:
// switch from reactify to babelify
// to enable this kind of ES6 action.
// find "jsx" on https://github.com/babel/babelify
// for more info.
//



// components

// actions

// utils

// main app container
export default class App extends React.Component {

	constructor () {

		super();

		// instead of getInitialState
		// this.state = 

	}

	getDefaultProps () {

		/*
		return {
			legendData: {
				items: [
					'narratives',
					'cotton',
					'sugar'
				],
				initialSelection: 'narratives'
			}
		};
		*/

	}

	componentWillMount () {

	}

	componentDidMount () {

		console.log("did mount");

	}

	componentWillUnmount () {

	}

	componentDidUpdate () {

	}

	render () {

		return (
			<div></div>
		);

		/*
		return (
			<Legend data={this.props.legendData}/>
		);
		*/

	}

}
