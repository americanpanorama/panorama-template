// npm modules
var React = require("react");
var Legend = require("@panorama/legend");

var App = React.createClass({

	getDefaultProps: function () {

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

	},

	getInitialState: function () {
		return null;
	},

	componentWillMount: function () {

	},

	componentDidMount: function () {

	},

	componentWillUnmount: function () {

	},

	componentDidUpdate: function () {

	},

	render: function () {

		return (
			<Legend data={this.props.legendData}/>
		);

	}

});

module.exports = App;
