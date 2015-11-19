import { EventEmitter } from 'events';
import AppDispatcher from '../utils/AppDispatcher';
import { AppActionTypes } from '../utils/AppActionCreator';

import sampleData from '../../static/sampleData.json';


const ExampleStore = {

	data: null,

	/**
	 * Sample data loader, with setTimeout
	 * emulating network response delay,
	 * returning sample data from a local json file.
	 * A real data loader would follow the same pattern,
	 * but probably make an XHR and return the response data.
	 */
	dataLoader: {
		query: (value) => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					return resolve(sampleData);
				}, 1000);
			});
		}
	},

	/**
	 * Make a request for data needed on application init.
	 */
	getInitialData: function () {

		console.log(`[3b] ExampleStore makes a data request...`);

		// Sample query; format varies by data provider
		this.dataLoader.query([
			{
				query: "SELECT * FROM tablename",
				format: "JSON"
			}
		]).then((...responses) => {

			this.setData(this.parseData(...responses));

		},
		(error) => {

			// TODO: handle this.
			console.error("Example received error:", error);
			throw error;

		});

	},

	/**
	 * Retrieve data from the store.
	 */
	getData: function () {

		// For simplicity of example, we return all of the data.
		// A real application would more likely return a copy
		// (to avoid accidental mutation by consumers) 
		// of a subset of the data.
		return this.data;

	},

	/**
	 * Cache the loaded, parsed data for future use by the application.
	 */
	setData: function (data) {

		this.data = data;

		console.log(`[3c] ExampleStore updates its cache with the loaded and parsed data, and emits a '${ AppActionTypes.storeChanged }' event from ExampleStore.setData().`);
		this.emit(AppActionTypes.storeChanged);

	},

	/**
	 * Parse returned data as necessary.
	 */
	parseData: function (...data) {

		let firstResponse = data[0];
		return firstResponse;

	}


};

// Mixin EventEmitter functionality
Object.assign(ExampleStore, EventEmitter.prototype);

// Register callback to handle all updates
AppDispatcher.register((action) => {

	switch (action.type) {

		case AppActionTypes.getInitialData:
			console.log(`[3a] The '${ AppActionTypes.getInitialData }' action is handled by ExampleStore....`);
			ExampleStore.getInitialData(action.state);
			break;

	}

	return true;

});

export default ExampleStore;
