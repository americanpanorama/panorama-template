// import node modules
import * as React from 'react';
import { render } from 'react-dom';
import { Map, TileLayer, GeoJson } from 'react-leaflet';

// import example module from @panorama
import Legend from '@panorama/legend';

/*
 * Data flow via Flux:
 * https://facebook.github.io/flux/docs/overview.html
 * 
 *                  ┌-----   actions  <-----┐
 *                  v                       |
 * actions --> dispatcher --> stores --> views
 */

// components (views)
import ExampleComponent from './components/ExampleComponent.jsx';
// TODO: can component require css instead of having that happen elsewhere? more modular.
// (if i get this to work, make it happen for legend component too?)

// 
import CartoDBTileLayer from './components/CartoDBTileLayer.jsx';

// utils
import config from '../.env.json';
import AppDispatcher from './utils/AppDispatcher';
import { ExampleActions } from './utils/AppActionCreator';



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
		this.state = this.getDefaultState();

		// bind handlers to this component instance,
		// since React no longer does this automatically when using ES6
		this.onMapMove = this.onMapMove.bind(this);
		this.onWindowResize = this.onWindowResize.bind(this);

	}

	componentWillMount () {

		this.computeComponentDimensions();

	}

	componentDidMount () {

		window.addEventListener('resize', this.onWindowResize);

		console.log(`Welcome to your Flux tour. Watch the data flow...`);
		console.log(`[1] App requests initial data in App.componentDidMount().`);
		ExampleActions.getInitialData(this.state);

	}

	componentWillUnmount () {

		// 

	}

	componentDidUpdate () {

		//

	}

	onWindowResize (event) {

		this.computeComponentDimensions();

	}

	onMapMove (event) {

		// TODO: emit event that is picked up by hash manager component
		// this.updateURL({loc: hashUtils.formatCenterAndZoom(evt.target)}, true);
		console.log(">>>>> map moved");

	}

	getDefaultState () {

		return {
			dimensions: {
				upperLeft: {
					width: 0,
					height: 0
				},
				upperRight: {
					width: 0,
					height: 0
				}
			}
		};

	}

	computeComponentDimensions () {

		// based off of sizes stored within _variables.scss --
		// if you change them there, change them here.
		var containerPadding = 20,
		    headerHeight = 60,
		    bottomRowHeight = 230,
		    dimensions = {};

		dimensions.upperRight = {
			height: window.innerHeight - bottomRowHeight - 3 * containerPadding
		};

		dimensions.upperLeft = {
			height: dimensions.upperRight.height - headerHeight
		};

		this.setState({ dimensions: dimensions });

	}

	render () {

		// TODO: these values need to go elsewhere, probably in a componentized hash parser/manager
		var loc = [-5.200, 0.330],
			zoom = 5;

		return (
			<div className='container full-height'>
				<div className='row full-height'>
					<div className='columns eight full-height'>
						<header className='row u-full-width'>
							<h1><span className='header-main'>American Panorama Template</span><span className='header-sub'>1800&ndash;2000</span></h1>
						</header>
						<div className='row top-row template-tile' style={{height: this.state.dimensions.upperLeft.height + "px"}}>
							<Map
								center={loc}
								zoom={zoom}
							>
								<CartoDBTileLayer
									url={config.cartodb.layers[0].url}
									userId={config.cartodb.userId}
									sql={config.cartodb.layers[0].sql}
									cartocss={config.cartodb.layers[0].cartocss}
								/>
							</Map>
						</div>
						<div className='row bottom-row template-tile'>
							<h2>Application component:</h2>
							<ExampleComponent title={this.props.exampleTitle}/>
						</div>
					</div>
					<div className='columns four full-height'>
						<div className='row top-row template-tile' style={{height: this.state.dimensions.upperRight.height + "px"}}>
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
