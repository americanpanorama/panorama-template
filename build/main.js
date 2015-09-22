(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/@panorama/legend/src/legend.jsx":[function(require,module,exports){
var React = require("react");

var Legend = React.createClass({displayName: "Legend",

	getInitialState: function () {

		return {
			selectedItem: this.props.data.initialSelection || null
		};

	},

	componentDidMount: function () {

	},

	componentWillUnmount: function () {

	},

	componentDidUpdate: function () {

	},

	onItemClick: function (event) {

		// Defense.
		if (!event.currentTarget || !event.currentTarget.dataset) { return; }

		// Store the selected item for use in render().
		this.setState({ selectedItem: event.currentTarget.dataset.item });

	},

	onItemEnter: function (event) {

		// Any desired mouse enter functionality goes here.
		// console.log("entering:", event.currentTarget.dataset.item);

	},

	onItemLeave: function (event) {

		// Any desired mouse leave functionality goes here.
		// console.log("leaving:", event.currentTarget.dataset.item);
		
	},

	render: function() {

		return (
			React.createElement("div", {className: "panorama legend"}, 
				React.createElement("ul", null, 
				this.props.data.items.map(item => {
					return (
						React.createElement("li", {
							className: 'item' + (this.state.selectedItem === item ? ' selected' : ''), 
							"data-item": item, 
							key: item, 
							onClick: this.onItemClick, 
							onMouseEnter: this.onItemEnter, 
							onMouseLeave: this.onItemLeave
						}, 
							React.createElement("span", null, this.capitalize(item))
						)
					);
				})
				)
			)
		);

	},

	capitalize: function (str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

});

module.exports = Legend;

},{"react":"react"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/@panorama/legend/src/main.js":[function(require,module,exports){
module.exports = require('./legend.jsx');

},{"./legend.jsx":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/@panorama/legend/src/legend.jsx"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/App.jsx":[function(require,module,exports){
// npm modules
var React = require("react");
var Legend = require("@panorama/legend");

var App = React.createClass({displayName: "App",

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
			React.createElement(Legend, {data: this.props.legendData})
		);

	}

});

module.exports = App;

},{"@panorama/legend":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/@panorama/legend/src/main.js","react":"react"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/main.jsx":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react'),
    App   = require('./App.jsx');

React.render(React.createElement(App, null), document.body);

},{"./App.jsx":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/App.jsx","react":"react"}]},{},["/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/main.jsx"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtdGVtcGxhdGUvbm9kZV9tb2R1bGVzL0BwYW5vcmFtYS9sZWdlbmQvc3JjL2xlZ2VuZC5qc3giLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtdGVtcGxhdGUvbm9kZV9tb2R1bGVzL0BwYW5vcmFtYS9sZWdlbmQvc3JjL21haW4uanMiLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtdGVtcGxhdGUvc3JjL0FwcC5qc3giLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtdGVtcGxhdGUvc3JjL21haW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3QixJQUFJLDRCQUE0QixzQkFBQTs7QUFFaEMsQ0FBQyxlQUFlLEVBQUUsWUFBWTs7RUFFNUIsT0FBTztHQUNOLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJO0FBQ3pELEdBQUcsQ0FBQzs7QUFFSixFQUFFOztBQUVGLENBQUMsaUJBQWlCLEVBQUUsWUFBWTs7QUFFaEMsRUFBRTs7QUFFRixDQUFDLG9CQUFvQixFQUFFLFlBQVk7O0FBRW5DLEVBQUU7O0FBRUYsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZOztBQUVqQyxFQUFFOztBQUVGLENBQUMsV0FBVyxFQUFFLFVBQVUsS0FBSyxFQUFFO0FBQy9COztBQUVBLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsYUFB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LEVBQUU7O0FBRUYsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7OztBQ25EckIscUJBQXFCO0FBQ3JCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDNUIsSUFBSSxHQUFHLEtBQUssT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUVqQyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLEdBQUcsRUFBQSxJQUFFLENBQUEsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgTGVnZW5kID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbGVjdGVkSXRlbTogdGhpcy5wcm9wcy5kYXRhLmluaXRpYWxTZWxlY3Rpb24gfHwgbnVsbFxuXHRcdH07XG5cblx0fSxcblxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuXG5cdH0sXG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcblxuXHR9LFxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gKCkge1xuXG5cdH0sXG5cblx0b25JdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuXG5cdFx0Ly8gRGVmZW5zZS5cblx0XHRpZiAoIWV2ZW50LmN1cnJlbnRUYXJnZXQgfHwgIWV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldCkgeyByZXR1cm47IH1cblxuXHRcdC8vIFN0b3JlIHRoZSBzZWxlY3RlZCBpdGVtIGZvciB1c2UgaW4gcmVuZGVyKCkuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW0gfSk7XG5cblx0fSxcblxuXHRvbkl0ZW1FbnRlcjogZnVuY3Rpb24gKGV2ZW50KSB7XG5cblx0XHQvLyBBbnkgZGVzaXJlZCBtb3VzZSBlbnRlciBmdW5jdGlvbmFsaXR5IGdvZXMgaGVyZS5cblx0XHQvLyBjb25zb2xlLmxvZyhcImVudGVyaW5nOlwiLCBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbSk7XG5cblx0fSxcblxuXHRvbkl0ZW1MZWF2ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG5cblx0XHQvLyBBbnkgZGVzaXJlZCBtb3VzZSBsZWF2ZSBmdW5jdGlvbmFsaXR5IGdvZXMgaGVyZS5cblx0XHQvLyBjb25zb2xlLmxvZyhcImxlYXZpbmc6XCIsIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtKTtcblx0XHRcblx0fSxcblxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFub3JhbWEgbGVnZW5kXCI+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0e3RoaXMucHJvcHMuZGF0YS5pdGVtcy5tYXAoaXRlbSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWUgPSB7J2l0ZW0nICsgKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtID09PSBpdGVtID8gJyBzZWxlY3RlZCcgOiAnJyl9XG5cdFx0XHRcdFx0XHRcdGRhdGEtaXRlbSA9IHtpdGVtfVxuXHRcdFx0XHRcdFx0XHRrZXkgPSB7aXRlbX1cblx0XHRcdFx0XHRcdFx0b25DbGljayA9IHt0aGlzLm9uSXRlbUNsaWNrfVxuXHRcdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXIgPSB7dGhpcy5vbkl0ZW1FbnRlcn1cblx0XHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlID0ge3RoaXMub25JdGVtTGVhdmV9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPnt0aGlzLmNhcGl0YWxpemUoaXRlbSl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cblx0fSxcblxuXHRjYXBpdGFsaXplOiBmdW5jdGlvbiAoc3RyKSB7XG5cdFx0cmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0fVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMZWdlbmQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGVnZW5kLmpzeCcpO1xuIiwiLy8gbnBtIG1vZHVsZXNcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBMZWdlbmQgPSByZXF1aXJlKFwiQHBhbm9yYW1hL2xlZ2VuZFwiKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRsZWdlbmREYXRhOiB7XG5cdFx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdFx0J25hcnJhdGl2ZXMnLFxuXHRcdFx0XHRcdCdjb3R0b24nLFxuXHRcdFx0XHRcdCdzdWdhcidcblx0XHRcdFx0XSxcblx0XHRcdFx0aW5pdGlhbFNlbGVjdGlvbjogJ25hcnJhdGl2ZXMnXG5cdFx0XHR9XG5cdFx0fTtcblxuXHR9LFxuXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXG5cdGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gKCkge1xuXG5cdH0sXG5cblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcblxuXHR9LFxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG5cblx0fSxcblxuXHRjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uICgpIHtcblxuXHR9LFxuXG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMZWdlbmQgZGF0YT17dGhpcy5wcm9wcy5sZWdlbmREYXRhfS8+XG5cdFx0KTtcblxuXHR9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBBcHAgICA9IHJlcXVpcmUoJy4vQXBwLmpzeCcpO1xuXG5SZWFjdC5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5ib2R5KTtcbiJdfQ==
