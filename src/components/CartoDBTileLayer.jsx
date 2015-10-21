/*
 * TODO: Submit this component as a PR to react-leaflet,
 * instead of adding to @panorama.
 * Might need to submit with tests, but other similar components are not currently tested.
 * Will need to pull in CartoDB dependency via an `npm install` and an `import`
 * rather than via a global <script> include.
 */

import { PropTypes } from 'react';
import { tileLayer } from 'leaflet';
import { BaseTileLayer } from 'react-leaflet';


export default class CartoDBTileLayer extends BaseTileLayer {

	static propTypes = {
		userId: PropTypes.string,
		sql: PropTypes.string,
		cartocss: PropTypes.string
	};

	componentWillMount () {

		super.componentWillMount();
		this.leafletElement = tileLayer('', this.props);

		this._getCartoDBTilesTemplates(function (error, response) {
			if (error) {
				// TODO: handle error
				console.error(error);
			} else {
				this.leafletElement.setUrl(response.tiles[0]);
			}
		}.bind(this));
	}

	_getCartoDBTilesTemplates (callback) {
		// cartodb is a global, defined by cartodb.js, loaded in index.html
		// TODO: `npm install cartodb` instead of including as <script>
		cartodb.Tiles.getTiles({
			type: 'cartodb',
			user_name: this.props.userId,
			sublayers: [{
				"sql": this.props.sql,
				"cartocss": this.props.cartocss
			}]
		},

		function (tiles, error) {
			if (!tiles || error) {
				if (!error) {
					error = "Empty response.";
				}
				callback(error, tiles);
			} else {
				callback(null, tiles);
			}
		});
	}

}
