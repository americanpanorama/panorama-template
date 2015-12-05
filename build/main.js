(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/basemaps/cartodb/basemaps.json":[function(require,module,exports){
module.exports={"name":"PanoramaBasemap","version":"0.0.1","layergroup":{"version":"1.3.0","layers":[{"type":"mapnik","options":{"sql":"SELECT * FROM unified_basemap_layers ORDER BY ord\n","cartocss":"@water: #dde9e9;\n@waterlines: #aacccc;\n@land: #f9f9f9;\n\nMap {\n  buffer-size: 128;\n  background-color: @water;\n}\n\n#unified_basemap_layers[layer='ne_10m_coastline_2163']{\n  line-color: @waterlines;\n  line-width: 0.75;\n  line-opacity: 1;\n  line-join: round;\n  line-cap: round;\n}\n\n#unified_basemap_layers[layer='ne_10m_lakes_2163'] {\n  line-color: @waterlines;\n  line-width: 2.5;\n  line-opacity: 1;\n  line-join: round;\n  line-cap: round;\n\n  /* Soften lines at lower zooms */\n  [zoom<=7] {\n    line-width: 2.5;\n    line-color: lighten(desaturate(#aacccc,2%),2%);\n  }\n  [zoom<=5] {\n    line-width: 1.5;\n    line-color: lighten(desaturate(#aacccc,5%),5%);\n  }\n\n  /* Separate attachment because seams */\n  ::fill {\n    polygon-fill: @water;\n    polygon-opacity: 1;\n  }\n\n  /* Remove small lakes at lower zooms */\n  [scalerank>3][zoom<=5] {\n    ::fill {\n      polygon-opacity: 0;\n    }\n    line-opacity: 0;\n  }\n  [scalerank>6][zoom<=7] {\n    ::fill {\n      polygon-opacity: 0;\n    }\n    line-opacity: 0;\n  }\n}\n\n#unified_basemap_layers[layer='ne_10m_rivers_lake_centerlines_2163'] {\n  line-color: @waterlines;\n  line-width: 1.5;\n  line-opacity: 1;\n  line-join: round;\n  line-cap: round;\n\n  [name='Mississippi'],\n  [name='St. Lawrence'],\n  [name='Columbia'],\n  [name='Ohio'],\n  [name='Hudson'],\n  [name='Missouri'],\n  [name='Rio Grande'] {\n    line-width: 4;\n  }\n  [zoom<=8][name='Mississippi'],\n  [zoom<=8][name='St. Lawrence'],\n  [zoom<=8][name='Columbia'],\n  [zoom<=8][name='Ohio'],\n  [zoom<=8][name='Hudson'],\n  [zoom<=8][name='Missouri'],\n  [zoom<=8][name='Rio Grande'] {\n    line-width: 2;\n  }\n  [zoom<=8][name!='Mississippi'][name!='St. Lawrence'][name!='Rio Grande'][name!='Ohio'][name!='Hudson'][name!='Columbia'][name!='Missouri'],\n  [zoom<=6][name='Mississippi'],\n  [zoom<=6][name='Columbia'],\n  [zoom<=6][name='Ohio'],\n  [zoom<=6][name='Hudson'],\n  [zoom<=6][name='Missouri'],\n  [zoom<=6][name='Rio Grande'] {\n    line-width: 1;\n    line-color: lighten(desaturate(@waterlines,2%),2%);\n  }\n  [zoom<=6][name!='Mississippi'][name!='St. Lawrence'][name!='Rio Grande'][name!='Ohio'][name!='Hudson'][name!='Columbia'][name!='Missouri'] {\n    line-width: 0.5;\n    line-color: lighten(desaturate(@waterlines,5%),5%);\n  }\n  [zoom<=5][name!='Mississippi'][name!='St. Lawrence'][name!='Rio Grande'][name!='Ohio'][name!='Hudson'][name!='Columbia'][name!='Missouri'] {\n    line-width: 0;\n  }\n  [zoom<=5][name='Mississippi'],\n  [zoom<=5][name='St. Lawrence'],\n  [zoom<=5][name='Columbia'],\n  [zoom<=5][name='Ohio'],\n  [zoom<=5][name='Hudson'],\n  [zoom<=5][name='Missouri'],\n  [zoom<=5][name='Rio Grande'] {\n    line-width: 0.5;\n    line-color: lighten(desaturate(@waterlines,2%),2%);\n  }\n}\n\n#unified_basemap_layers[layer='ne_10m_admin_0_countries_lakes_2163'] {\n\n  line-color: @land;\n  line-width: 1;\n  line-opacity: 1;\n  line-join: round;\n  line-cap: round;\n  polygon-fill: @land;\n  polygon-opacity: 1;\n\n}\n","cartocss_version":"2.1.1"}},{"type":"mapnik","options":{"sql":"SELECT cartodb_id, lat::float, long::float, ST_Transform(the_geom,2163) as the_geom_webmercator, start, state, town, rank FROM canal_towns\n","cartocss":"@textcolor: #666;\n@halocolor: #f9f9f9;\n\nMap {\n  buffer-size: 128;\n}\n\n#canals_cities_basemap[rank=1][zoom>=5],\n#canals_cities_basemap[rank=2][zoom>=6],\n#canals_cities_basemap[rank>=3][zoom>=8]{\n  // Note: have to use markers not shields to change svg color\n  ::halo {\n    marker-placement: point;\n    marker-fill-opacity: 1;\n    marker-line-width: 0;\n    marker-type: ellipse;\n    marker-width: 9;\n    marker-fill: @halocolor;\n  }\n  marker-fill-opacity: 0.9;\n  marker-line-color: @halocolor;\n  marker-line-width: 1.5;\n  marker-line-opacity: 1;\n  marker-placement: point;\n  //marker-type: ellipse;\n  marker-file: url('https://raw.githubusercontent.com/mapbox/maki/mb-pages/src/circle-12.svg');\n  marker-width: 6;\n  marker-fill: @textcolor;\n\n  marker-allow-overlap: true;\n}\n\n@default_size: 9;\n@x_distance_positive: 3;\n@y_distance_positive: 3;\n@x_distance_negative: -3;\n@y_distance_negative: -3;\n\n#canals_cities_basemap[rank=1][zoom>=5]::labels,\n#canals_cities_basemap[rank=2][zoom>=6]::labels,\n#canals_cities_basemap[rank>=3][zoom>=8]::labels, {\n\n  text-name: [town];\n  text-face-name: 'DejaVu Sans Book';\n  text-size: @default_size;\n  [zoom>=6][rank=1] {\n    text-size: @default_size + 3;\n  }\n  text-label-position-tolerance: 0;\n  text-fill: @textcolor;\n  text-halo-fill: @halocolor;\n  text-halo-radius: 1.5;\n  // Default is upper right from dot\n  text-dy: @y_distance_negative;\n  text-dx: @x_distance_positive;\n\n  // Labels to float left instead\n  [state='Illinois'],\n  [state='Indiana'],\n  [state='Ohio'][town!='Cincinnati'],\n  [town='Bellefonte'],\n  [town='Pittsburgh'],\n  [town='Rochester'],\n  [town='Newark'],\n  [town='Oswego'],\n  [town='Buffalo'],\n  [town='Corning'],\n  [town='Bristol'],\n  [town='Reading'],\n  [town='Buchanan'] {\n    text-dx: @x_distance_negative;\n  }\n\n  // Labels to float below dot\n\n  [town='New Brunswick'],\n  [town='La Salle'],\n  [town='Lawrenceburg'],\n  [town='Akron'],\n  [town='Albany'],\n  [town='Athens'],\n  [town='Utica'],\n  [town='Reading'],\n  [town='Bordentown'],\n  [town='Philadelphia'],\n  [town='Lynchburg'],\n  [town='Toledo'],\n  [town='Pittsburgh'],\n  [town='Cincinnati'] {\n    text-dy: @y_distance_positive;\n  }\n\n  text-allow-overlap: true;\n  text-placement: point;\n  text-placement-type: dummy;\n\n}","cartocss_version":"2.1.1"}}],"minzoom":2,"maxzoom":9}}

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/basemaps/cartodb/config.json":[function(require,module,exports){
module.exports={
	"userId": "digitalscholarshiplab",
	"apiKey": "f307c20273274ba897ae8ece36f3a543b5992f23"
}

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/basemaps/tileLayers.json":[function(require,module,exports){
module.exports={
	"layers": [
		{
			"url": "http://sm.mapstack.stamen.com/openterrain_2163/{z}/{x}/{y}.png"
		}
	]
}

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/element-class/index.js":[function(require,module,exports){
module.exports = function(opts) {
  return new ElementClass(opts)
}

function indexOf(arr, prop) {
  if (arr.indexOf) return arr.indexOf(prop)
  for (var i = 0, len = arr.length; i < len; i++)
    if (arr[i] === prop) return i
  return -1
}

function ElementClass(opts) {
  if (!(this instanceof ElementClass)) return new ElementClass(opts)
  var self = this
  if (!opts) opts = {}

  // similar doing instanceof HTMLElement but works in IE8
  if (opts.nodeType) opts = {el: opts}

  this.opts = opts
  this.el = opts.el || document.body
  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
}

ElementClass.prototype.add = function(className) {
  var el = this.el
  if (!el) return
  if (el.className === "") return el.className = className
  var classes = el.className.split(' ')
  if (indexOf(classes, className) > -1) return classes
  classes.push(className)
  el.className = classes.join(' ')
  return classes
}

ElementClass.prototype.remove = function(className) {
  var el = this.el
  if (!el) return
  if (el.className === "") return
  var classes = el.className.split(' ')
  var idx = indexOf(classes, className)
  if (idx > -1) classes.splice(idx, 1)
  el.className = classes.join(' ')
  return classes
}

ElementClass.prototype.has = function(className) {
  var el = this.el
  if (!el) return
  var classes = el.className.split(' ')
  return indexOf(classes, className) > -1
}

ElementClass.prototype.toggle = function(className) {
  var el = this.el
  if (!el) return
  if (this.has(className)) this.remove(className)
  else this.add(className)
}

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/events/events.js":[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/exenv/index.js":[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define(function () {
			return ExecutionEnvironment;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash._baseassign/index.js":[function(require,module,exports){
/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseCopy = require('lodash._basecopy'),
    keys = require('lodash.keys');

/**
 * The base implementation of `_.assign` without support for argument juggling,
 * multiple sources, and `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return source == null
    ? object
    : baseCopy(source, keys(source), object);
}

module.exports = baseAssign;

},{"lodash._basecopy":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash._basecopy/index.js","lodash.keys":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash.keys/index.js"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash._basecopy/index.js":[function(require,module,exports){
/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property names to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @returns {Object} Returns `object`.
 */
function baseCopy(source, props, object) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    object[key] = source[key];
  }
  return object;
}

module.exports = baseCopy;

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash._bindcallback/index.js":[function(require,module,exports){
/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = bindCallback;

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash._createassigner/index.js":[function(require,module,exports){
/**
 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var bindCallback = require('lodash._bindcallback'),
    isIterateeCall = require('lodash._isiterateecall'),
    restParam = require('lodash.restparam');

/**
 * Creates a function that assigns properties of source object(s) to a given
 * destination object.
 *
 * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return restParam(function(object, sources) {
    var index = -1,
        length = object == null ? 0 : sources.length,
        customizer = length > 2 ? sources[length - 2] : undefined,
        guard = length > 2 ? sources[2] : undefined,
        thisArg = length > 1 ? sources[length - 1] : undefined;

    if (typeof customizer == 'function') {
      customizer = bindCallback(customizer, thisArg, 5);
      length -= 2;
    } else {
      customizer = typeof thisArg == 'function' ? thisArg : undefined;
      length -= (customizer ? 1 : 0);
    }
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

},{"lodash._bindcallback":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash._bindcallback/index.js","lodash._isiterateecall":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash._isiterateecall/index.js","lodash.restparam":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash.restparam/index.js"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash._getnative/index.js":[function(require,module,exports){
/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash._isiterateecall/index.js":[function(require,module,exports){
/**
 * lodash 3.0.9 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/**
 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if the provided arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
      ? (isArrayLike(object) && isIndex(index, object.length))
      : (type == 'string' && index in object)) {
    var other = object[index];
    return value === value ? (value === other) : (other !== other);
  }
  return false;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isIterateeCall;

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash.assign/index.js":[function(require,module,exports){
/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseAssign = require('lodash._baseassign'),
    createAssigner = require('lodash._createassigner'),
    keys = require('lodash.keys');

/**
 * A specialized version of `_.assign` for customizing assigned values without
 * support for argument juggling, multiple sources, and `this` binding `customizer`
 * functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 */
function assignWith(object, source, customizer) {
  var index = -1,
      props = keys(source),
      length = props.length;

  while (++index < length) {
    var key = props[index],
        value = object[key],
        result = customizer(value, source[key], key, object, source);

    if ((result === result ? (result !== value) : (value === value)) ||
        (value === undefined && !(key in object))) {
      object[key] = result;
    }
  }
  return object;
}

/**
 * Assigns own enumerable properties of source object(s) to the destination
 * object. Subsequent sources overwrite property assignments of previous sources.
 * If `customizer` is provided it is invoked to produce the assigned values.
 * The `customizer` is bound to `thisArg` and invoked with five arguments:
 * (objectValue, sourceValue, key, object, source).
 *
 * **Note:** This method mutates `object` and is based on
 * [`Object.assign`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign).
 *
 * @static
 * @memberOf _
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {*} [thisArg] The `this` binding of `customizer`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
 * // => { 'user': 'fred', 'age': 40 }
 *
 * // using a customizer callback
 * var defaults = _.partialRight(_.assign, function(value, other) {
 *   return _.isUndefined(value) ? other : value;
 * });
 *
 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
 * // => { 'user': 'barney', 'age': 36 }
 */
var assign = createAssigner(function(object, source, customizer) {
  return customizer
    ? assignWith(object, source, customizer)
    : baseAssign(object, source);
});

module.exports = assign;

},{"lodash._baseassign":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash._baseassign/index.js","lodash._createassigner":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash._createassigner/index.js","lodash.keys":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash.keys/index.js"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash.isarguments/index.js":[function(require,module,exports){
/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Native method references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  return isObjectLike(value) && isArrayLike(value) &&
    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
}

module.exports = isArguments;

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash.isarray/index.js":[function(require,module,exports){
/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isArray;

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash.keys/index.js":[function(require,module,exports){
/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = require('lodash._getnative'),
    isArguments = require('lodash.isarguments'),
    isArray = require('lodash.isarray');

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;

},{"lodash._getnative":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash._getnative/index.js","lodash.isarguments":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash.isarguments/index.js","lodash.isarray":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash.isarray/index.js"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash.restparam/index.js":[function(require,module,exports){
/**
 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array.
 *
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.restParam(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function restParam(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        rest = Array(length);

    while (++index < length) {
      rest[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, args[0], rest);
      case 2: return func.call(this, args[0], args[1], rest);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = rest;
    return func.apply(this, otherArgs);
  };
}

module.exports = restParam;

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/components/Modal.js":[function(require,module,exports){
(function (process){
var React = require('react');
var ReactDOM = require('react-dom');
var ExecutionEnvironment = require('exenv');
var ModalPortal = React.createFactory(require('./ModalPortal'));
var ariaAppHider = require('../helpers/ariaAppHider');
var elementClass = require('element-class');
var renderSubtreeIntoContainer = require("react-dom").unstable_renderSubtreeIntoContainer;

var SafeHTMLElement = ExecutionEnvironment.canUseDOM ? window.HTMLElement : {};

var Modal = module.exports = React.createClass({

  displayName: 'Modal',
  statics: {
    setAppElement: ariaAppHider.setElement,
    injectCSS: function() {
      "production" !== process.env.NODE_ENV
        && console.warn('React-Modal: injectCSS has been deprecated ' +
                        'and no longer has any effect. It will be removed in a later version');
    }
  },

  propTypes: {
    isOpen: React.PropTypes.bool.isRequired,
    style: React.PropTypes.shape({
      content: React.PropTypes.object,
      overlay: React.PropTypes.object
    }),
    appElement: React.PropTypes.instanceOf(SafeHTMLElement),
    onRequestClose: React.PropTypes.func,
    closeTimeoutMS: React.PropTypes.number,
    ariaHideApp: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      isOpen: false,
      ariaHideApp: true,
      closeTimeoutMS: 0
    };
  },

  componentDidMount: function() {
    this.node = document.createElement('div');
    this.node.className = 'ReactModalPortal';
    document.body.appendChild(this.node);
    this.renderPortal(this.props);
  },

  componentWillReceiveProps: function(newProps) {
    this.renderPortal(newProps);
  },

  componentWillUnmount: function() {
    ReactDOM.unmountComponentAtNode(this.node);
    document.body.removeChild(this.node);
  },

  renderPortal: function(props) {
    if (props.isOpen) {
      elementClass(document.body).add('ReactModal__Body--open');
    } else {
      elementClass(document.body).remove('ReactModal__Body--open');
    }

    if (props.ariaHideApp) {
      ariaAppHider.toggle(props.isOpen, props.appElement);
    }
    sanitizeProps(props);
    this.portal = renderSubtreeIntoContainer(this, ModalPortal(props), this.node);
  },

  render: function () {
    return React.DOM.noscript();
  }
});

function sanitizeProps(props) {
  delete props.ref;
}

}).call(this,require('_process'))

},{"../helpers/ariaAppHider":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/helpers/ariaAppHider.js","./ModalPortal":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/components/ModalPortal.js","_process":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/process/browser.js","element-class":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/element-class/index.js","exenv":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/exenv/index.js","react":"react","react-dom":"react-dom"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/components/ModalPortal.js":[function(require,module,exports){
var React = require('react');
var div = React.DOM.div;
var focusManager = require('../helpers/focusManager');
var scopeTab = require('../helpers/scopeTab');
var Assign = require('lodash.assign');


// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: {
    base: 'ReactModal__Overlay',
    afterOpen: 'ReactModal__Overlay--after-open',
    beforeClose: 'ReactModal__Overlay--before-close'
  },
  content: {
    base: 'ReactModal__Content',
    afterOpen: 'ReactModal__Content--after-open',
    beforeClose: 'ReactModal__Content--before-close'
  }
};

var defaultStyles = {
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position                : 'absolute',
    top                     : '40px',
    left                    : '40px',
    right                   : '40px',
    bottom                  : '40px',
    border                  : '1px solid #ccc',
    background              : '#fff',
    overflow                : 'auto',
    WebkitOverflowScrolling : 'touch',
    borderRadius            : '4px',
    outline                 : 'none',
    padding                 : '20px'
  }
};

function stopPropagation(event) {
  event.stopPropagation();
}

var ModalPortal = module.exports = React.createClass({

  displayName: 'ModalPortal',

  getDefaultProps: function() {
    return {
      style: {
        overlay: {},
        content: {}
      }
    };
  },

  getInitialState: function() {
    return {
      afterOpen: false,
      beforeClose: false
    };
  },

  componentDidMount: function() {
    // Focus needs to be set when mounting and already open
    if (this.props.isOpen) {
      this.setFocusAfterRender(true);
      this.open();
    }
  },

  componentWillUnmount: function() {
    clearTimeout(this.closeTimer);
  },

  componentWillReceiveProps: function(newProps) {
    // Focus only needs to be set once when the modal is being opened
    if (!this.props.isOpen && newProps.isOpen) {
      this.setFocusAfterRender(true);
      this.open();
    } else if (this.props.isOpen && !newProps.isOpen) {
      this.close();
    }
  },

  componentDidUpdate: function () {
    if (this.focusAfterRender) {
      this.focusContent();
      this.setFocusAfterRender(false);
    }
  },

  setFocusAfterRender: function (focus) {
    this.focusAfterRender = focus;
  },

  open: function() {
    focusManager.setupScopedFocus(this.node);
    focusManager.markForFocusLater();
    this.setState({isOpen: true}, function() {
      this.setState({afterOpen: true});
    }.bind(this));
  },

  close: function() {
    if (!this.ownerHandlesClose())
      return;
    if (this.props.closeTimeoutMS > 0)
      this.closeWithTimeout();
    else
      this.closeWithoutTimeout();
  },

  focusContent: function() {
    this.refs.content.focus();
  },

  closeWithTimeout: function() {
    this.setState({beforeClose: true}, function() {
      this.closeTimer = setTimeout(this.closeWithoutTimeout, this.props.closeTimeoutMS);
    }.bind(this));
  },

  closeWithoutTimeout: function() {
    this.setState({
      afterOpen: false,
      beforeClose: false
    }, this.afterClose);
  },

  afterClose: function() {
    focusManager.returnFocus();
    focusManager.teardownScopedFocus();
  },

  handleKeyDown: function(event) {
    if (event.keyCode == 9 /*tab*/) scopeTab(this.refs.content, event);
    if (event.keyCode == 27 /*esc*/) this.requestClose();
  },

  handleOverlayClick: function() {
    if (this.ownerHandlesClose())
      this.requestClose();
    else
      this.focusContent();
  },

  requestClose: function() {
    if (this.ownerHandlesClose())
      this.props.onRequestClose();
  },

  ownerHandlesClose: function() {
    return this.props.onRequestClose;
  },

  shouldBeClosed: function() {
    return !this.props.isOpen && !this.state.beforeClose;
  },

  buildClassName: function(which, additional) {
    var className = CLASS_NAMES[which].base;
    if (this.state.afterOpen)
      className += ' '+CLASS_NAMES[which].afterOpen;
    if (this.state.beforeClose)
      className += ' '+CLASS_NAMES[which].beforeClose;
    return additional ? className + ' ' + additional : className;
  },

  render: function() {
    return this.shouldBeClosed() ? div() : (
      div({
        ref: "overlay",
        className: this.buildClassName('overlay', this.props.overlayClassName),
        style: Assign({}, defaultStyles.overlay, this.props.style.overlay || {}),
        onClick: this.handleOverlayClick
      },
        div({
          ref: "content",
          style: Assign({}, defaultStyles.content, this.props.style.content || {}),
          className: this.buildClassName('content', this.props.className),
          tabIndex: "-1",
          onClick: stopPropagation,
          onKeyDown: this.handleKeyDown
        },
          this.props.children
        )
      )
    );
  }
});

},{"../helpers/focusManager":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/helpers/focusManager.js","../helpers/scopeTab":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/helpers/scopeTab.js","lodash.assign":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/lodash.assign/index.js","react":"react"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/helpers/ariaAppHider.js":[function(require,module,exports){
var _element = typeof document !== 'undefined' ? document.body : null;

function setElement(element) {
  if (typeof element === 'string') {
    var el = document.querySelectorAll(element);
    element = 'length' in el ? el[0] : el;
  }
  _element = element || _element;
}

function hide(appElement) {
  validateElement(appElement);
  (appElement || _element).setAttribute('aria-hidden', 'true');
}

function show(appElement) {
  validateElement(appElement);
  (appElement || _element).removeAttribute('aria-hidden');
}

function toggle(shouldHide, appElement) {
  if (shouldHide)
    hide(appElement);
  else
    show(appElement);
}

function validateElement(appElement) {
  if (!appElement && !_element)
    throw new Error('react-modal: You must set an element with `Modal.setAppElement(el)` to make this accessible');
}

function resetForTesting() {
  _element = document.body;
}

exports.toggle = toggle;
exports.setElement = setElement;
exports.show = show;
exports.hide = hide;
exports.resetForTesting = resetForTesting;

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/helpers/focusManager.js":[function(require,module,exports){
var findTabbable = require('../helpers/tabbable');
var modalElement = null;
var focusLaterElement = null;
var needToFocus = false;

function handleBlur(event) {
  needToFocus = true;
}

function handleFocus(event) {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation 
    // is that the document.body gets focus, and then we focus our element right 
    // after, seems fine.
    setTimeout(function() {
      if (modalElement.contains(document.activeElement))
        return;
      var el = (findTabbable(modalElement)[0] || modalElement);
      el.focus();
    }, 0);
  }
}

exports.markForFocusLater = function() {
  focusLaterElement = document.activeElement;
};

exports.returnFocus = function() {
  try {
    focusLaterElement.focus();
  }
  catch (e) {
    console.warn('You tried to return focus to '+focusLaterElement+' but it is not in the DOM anymore');
  }
  focusLaterElement = null;
};

exports.setupScopedFocus = function(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener('blur', handleBlur, false);
    document.addEventListener('focus', handleFocus, true);
  } else {
    window.attachEvent('onBlur', handleBlur);
    document.attachEvent('onFocus', handleFocus);
  }
};

exports.teardownScopedFocus = function() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener('blur', handleBlur);
    document.removeEventListener('focus', handleFocus);
  } else {
    window.detachEvent('onBlur', handleBlur);
    document.detachEvent('onFocus', handleFocus);
  }
};



},{"../helpers/tabbable":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/helpers/tabbable.js"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/helpers/scopeTab.js":[function(require,module,exports){
var findTabbable = require('../helpers/tabbable');

module.exports = function(node, event) {
  var tabbable = findTabbable(node);
  var finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
  var leavingFinalTabbable = (
    finalTabbable === document.activeElement ||
    // handle immediate shift+tab after opening with mouse
    node === document.activeElement
  );
  if (!leavingFinalTabbable) return;
  event.preventDefault();
  var target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
  target.focus();
};

},{"../helpers/tabbable":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/helpers/tabbable.js"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/helpers/tabbable.js":[function(require,module,exports){
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  return (/input|select|textarea|button|object/.test(nodeName) ?
    !element.disabled :
    "a" === nodeName ?
      element.href || isTabIndexNotNaN :
      isTabIndexNotNaN) && visible(element);
}

function hidden(el) {
  return (el.offsetWidth <= 0 && el.offsetHeight <= 0) ||
    el.style.display === 'none';
}

function visible(element) {
  while (element) {
    if (element === document.body) break;
    if (hidden(element)) return false;
    element = element.parentNode;
  }
  return true;
}

function tabbable(element) {
  var tabIndex = element.getAttribute('tabindex');
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll('*'), 0).filter(function(el) {
    return tabbable(el);
  });
}

module.exports = findTabbableDescendants;


},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/index.js":[function(require,module,exports){
module.exports = require('./components/Modal');


},{"./components/Modal":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/components/Modal.js"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/App.jsx":[function(require,module,exports){
// import node modules
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _reactLeaflet = require('react-leaflet');

// import components from @panorama/toolkit

var _panoramaToolkit = require('@panorama/toolkit');

/*
 * Data flow via Flux:
 * https://facebook.github.io/flux/docs/overview.html
 * 
 *                  ┌-----   actions   <-----┐
 *                  v                        |
 * actions --> dispatcher --> stores --> root view
 */

// stores

var _storesExampleStore = require('./stores/ExampleStore');

var _storesExampleStore2 = _interopRequireDefault(_storesExampleStore);

// local (not installed via npm) components (views)

var _componentsExampleComponentJsx = require('./components/ExampleComponent.jsx');

var _componentsExampleComponentJsx2 = _interopRequireDefault(_componentsExampleComponentJsx);

// TODO: move this to another repo, probably @panorama/toolkit

var _componentsCartoDBTileLayerJsx = require('./components/CartoDBTileLayer.jsx');

var _componentsCartoDBTileLayerJsx2 = _interopRequireDefault(_componentsCartoDBTileLayerJsx);

// utils
// TODO: refactor to use same structure as PanoramaDispatcher;
// Having `flux` as a dependency, and two different files, is overkill.

var _utilsAppDispatcher = require('./utils/AppDispatcher');

var _utilsAppDispatcher2 = _interopRequireDefault(_utilsAppDispatcher);

var _utilsAppActionCreator = require('./utils/AppActionCreator');

// config

var _basemapsTileLayersJson = require('../basemaps/tileLayers.json');

var _basemapsTileLayersJson2 = _interopRequireDefault(_basemapsTileLayersJson);

var _basemapsCartodbConfigJson = require('../basemaps/cartodb/config.json');

var _basemapsCartodbConfigJson2 = _interopRequireDefault(_basemapsCartodbConfigJson);

var _basemapsCartodbBasemapsJson = require('../basemaps/cartodb/basemaps.json');

var _basemapsCartodbBasemapsJson2 = _interopRequireDefault(_basemapsCartodbBasemapsJson);

// main app container

var App = (function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);

		// set up initial state in constructor
		// (instead of ES5-style getInitialState)
		this.state = this.getDefaultState();

		// bind handlers to this component instance,
		// since React no longer does this automatically when using ES6
		this.storeChanged = this.storeChanged.bind(this);
		this.onLegendItemSelected = this.onLegendItemSelected.bind(this);
		this.onWindowResize = this.onWindowResize.bind(this);
		this.toggleAbout = this.toggleAbout.bind(this);
		this.triggerIntro = this.triggerIntro.bind(this);
		this.onIntroExit = this.onIntroExit.bind(this);
	}

	// ============================================================ //
	// React Lifecycle
	// ============================================================ //

	_createClass(App, [{
		key: 'getDefaultState',
		value: function getDefaultState() {

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
				},
				selectedItem: 0
			};
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {

			this.computeComponentDimensions();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			window.addEventListener('resize', this.onWindowResize);

			console.log('Welcome to your Flux tour. Watch the data flow...');
			console.log('[1a] App listens for change events dispatched from ExampleStore.');
			_storesExampleStore2['default'].addListener(_utilsAppActionCreator.AppActionTypes.storeChanged, this.storeChanged);

			console.log('[1b] App requests initial data in App.componentDidMount().');
			_utilsAppActionCreator.ExampleActions.getInitialData(this.state);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {

			_storesExampleStore2['default'].removeListener(_utilsAppActionCreator.AppActionTypes.storeChanged, this.storeChanged);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {}

		//

		// ============================================================ //
		// Handlers
		// ============================================================ //

	}, {
		key: 'storeChanged',
		value: function storeChanged() {

			console.log('[4] The data requested on app init land in the root view (App.storeChanged), from where they will flow down the component tree. A setState() call updates the data and triggers a render().');

			var data = _storesExampleStore2['default'].getData();

			// setState with the updated data, which causes a re-render()
			this.setState({
				exampleComponent: {
					title: data.exampleTitle,
					loading: false
				},
				legend: data.legend,
				punchcard: data.punchcard
			});
		}
	}, {
		key: 'onLegendItemSelected',
		value: function onLegendItemSelected(value, index) {

			this.setState({
				selectedItem: index,
				legend: _extends({}, this.state.legend, { // merge existing state into new state
					selectedItem: value
				})
			});
		}
	}, {
		key: 'onWindowResize',
		value: function onWindowResize(event) {

			this.computeComponentDimensions();
		}
	}, {
		key: 'toggleAbout',
		value: function toggleAbout() {

			this.setState({
				aboutModalOpen: !this.state.aboutModalOpen
			});
		}
	}, {
		key: 'triggerIntro',
		value: function triggerIntro(event) {

			if (this.state.aboutModalOpen) {
				this.toggleAbout();
			}

			this.setState({
				intro: {
					open: true,
					step: event && event.currentTarget ? parseInt(event.currentTarget.dataset.step) : null,
					config: {
						showStepNumbers: false,
						skipLabel: '×',
						nextLabel: '⟩',
						prevLabel: '⟨',
						doneLabel: '×'
					},

					steps: [{
						element: '.left-column .top-row.template-tile',
						intro: 'copy for step ONE goes here',
						position: 'right'
					}, {
						element: '.left-column .bottom-row.template-tile',
						intro: 'copy for step TWO goes here',
						position: 'top'
					}, {
						element: '.right-column .top-row.template-tile',
						intro: 'copy for step THREE goes here',
						position: 'left'
					}, {
						element: '.right-column .bottom-row.template-tile',
						intro: 'copy for step FOUR goes here',
						position: 'top'
					}]
				},

				onExit: this.onIntroExit
			});
		}
	}, {
		key: 'onIntroExit',
		value: function onIntroExit() {

			this.setState({
				intro: {
					open: false
				}
			});
		}

		// ============================================================ //
		// Helpers
		// ============================================================ //

	}, {
		key: 'computeComponentDimensions',
		value: function computeComponentDimensions() {

			// based off of sizes stored within _variables.scss --
			// if you change them there, change them here.
			var containerPadding = 20,
			    headerHeight = 90,
			    breakpointWidthWide = 1280,
			    bottomRowHeightShort = 230,
			    bottomRowHeightTall = 310,
			    bottomRowHeight = undefined,
			    dimensions = {};

			// Calculate bottom row height as set by media breakpoints
			var bottomRowEl = document.querySelector('.bottom-row'),
			    bottomRowHeightStyle = undefined;

			if (bottomRowEl) {
				bottomRowHeightStyle = window.getComputedStyle(bottomRowEl);
				bottomRowHeight = bottomRowEl.offsetHeight + parseFloat(bottomRowHeightStyle.marginTop.replace('px', '')) + parseFloat(bottomRowHeightStyle.marginBottom.replace('px', ''));
			} else {
				bottomRowHeight = window.innerWidth < breakpointWidthWide ? bottomRowHeightShort : bottomRowHeightTall;
			}

			dimensions.upperRight = {
				height: window.innerHeight - bottomRowHeight - 3 * containerPadding
			};
			dimensions.upperLeft = {
				height: dimensions.upperRight.height - headerHeight
			};
			dimensions.lowerLeft = {
				height: bottomRowHeight - 2 * containerPadding
			};
			dimensions.lowerRight = {
				height: dimensions.lowerLeft.height
			};

			this.setState({ dimensions: dimensions });
		}

		// ============================================================ //
		// Render functions
		// ============================================================ //

	}, {
		key: 'renderTileLayers',
		value: function renderTileLayers() {

			var layers = [];

			if (_basemapsCartodbBasemapsJson2['default'].layergroup && _basemapsCartodbBasemapsJson2['default'].layergroup.layers) {
				layers = layers.concat(_basemapsCartodbBasemapsJson2['default'].layergroup.layers.map(function (item, i) {
					return React.createElement(_componentsCartoDBTileLayerJsx2['default'], {
						key: 'cartodb-tile-layer-' + i,
						userId: _basemapsCartodbConfigJson2['default'].userId,
						sql: item.options.sql,
						cartocss: item.options.cartocss
					});
				}));
			}

			if (_basemapsTileLayersJson2['default'].layers) {
				layers = layers.concat(_basemapsTileLayersJson2['default'].layers.map(function (item, i) {
					return React.createElement(_reactLeaflet.TileLayer, {
						key: 'tile-layer-' + i,
						url: item.url
					});
				}));
			}

			return layers;
		}
	}, {
		key: 'render',
		value: function render() {

			// TODO: these values need to go elsewhere, probably in a componentized hash parser/manager
			var loc = [-5.200, 0.330],
			    zoom = 5,
			    modalStyle = {
				overlay: {
					backgroundColor: null
				},
				content: {
					top: null,
					left: null,
					right: null,
					bottom: null,
					border: null,
					background: null,
					borderRadius: null,
					padding: null,
					position: null
				}
			};

			return React.createElement(
				'div',
				{ className: 'container full-height' },
				React.createElement(
					'div',
					{ className: 'row full-height' },
					React.createElement(
						'div',
						{ className: 'columns eight left-column full-height' },
						React.createElement(
							'header',
							{ className: 'row u-full-width' },
							React.createElement(
								'h1',
								null,
								React.createElement(
									'span',
									{ className: 'header-main' },
									'PANORAMA TEMPLATE'
								)
							),
							React.createElement(
								'h4',
								{ onClick: this.toggleAbout },
								'ABOUT THIS MAP'
							),
							React.createElement(
								'button',
								{ className: 'intro-button', 'data-step': '0', onClick: this.triggerIntro },
								React.createElement('span', { className: 'icon info' })
							)
						),
						React.createElement(
							'div',
							{ className: 'row top-row template-tile', style: { height: this.state.dimensions.upperLeft.height + "px" } },
							React.createElement(
								_reactLeaflet.Map,
								{ center: loc, zoom: zoom },
								this.renderTileLayers()
							)
						),
						React.createElement(
							'div',
							{ className: 'row bottom-row template-tile' },
							React.createElement(
								'h2',
								null,
								'Local component:'
							),
							React.createElement(_componentsExampleComponentJsx2['default'], this.state.exampleComponent),
							React.createElement(
								'button',
								{ className: 'intro-button', 'data-step': '1', onClick: this.triggerIntro },
								React.createElement('span', { className: 'icon info' })
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'columns four right-column full-height' },
						React.createElement(
							'div',
							{ className: 'row top-row template-tile', style: { height: this.state.dimensions.upperRight.height + "px" } },
							this.state.punchcard ? React.createElement(_panoramaToolkit.Punchcard, this.state.punchcard[this.state.selectedItem]) : '',
							React.createElement(
								'button',
								{ className: 'intro-button', 'data-step': '2', onClick: this.triggerIntro },
								React.createElement('span', { className: 'icon info' })
							)
						),
						React.createElement(
							'div',
							{ className: 'row bottom-row template-tile' },
							React.createElement(
								'h2',
								null,
								'Imported component:'
							),
							this.state.legend ? React.createElement(_panoramaToolkit.Legend, _extends({}, this.state.legend, { onItemSelected: this.onLegendItemSelected })) : '',
							React.createElement(
								'button',
								{ className: 'intro-button', 'data-step': '3', onClick: this.triggerIntro },
								React.createElement('span', { className: 'icon info' })
							)
						)
					)
				),
				React.createElement(
					_reactModal2['default'],
					{ isOpen: this.state.aboutModalOpen, onRequestClose: this.toggleAbout, style: modalStyle },
					React.createElement(
						'button',
						{ className: 'close', onClick: this.toggleAbout },
						React.createElement(
							'span',
							null,
							'×'
						)
					),
					React.createElement(
						'h3',
						null,
						'About this Map'
					),
					React.createElement(
						'p',
						null,
						'The subtitle is borrowed from historian Robin D.G. Kelley, who begins one of his essays with the question "What is the United States, if not a nation of overlapping diasporas?" At all points in its history, a significant proportion of the population of the United States had been born in other countries and regions. This being the case, American history can never be understood by just looking within its borders. The culture and politics of the US have always been profoundly shaped by the material and emotional ties many of its residents have had to the places where they were born. This map will allow you to begin to explore those connections at the basic level of demographic statistics. '
					),
					React.createElement(
						'h3',
						null,
						'Sources'
					),
					React.createElement(
						'p',
						null,
						'All of the data comes from ',
						React.createElement(
							'a',
							{ href: 'https://www.nhgis.org/' },
							'Minnesota Population Center, National Historical Geographic Information System: Version 2.0 (Minneapolis, MN: University of Minnesota, 2011)'
						),
						'. County boundaries are from the Newberry Library\'s ',
						React.createElement(
							'a',
							{ href: 'http://publications.newberry.org/ahcbp/' },
							'Atlas of Historical County Boundaries'
						),
						'.'
					),
					React.createElement(
						'h3',
						null,
						'Suggested Reading'
					),
					React.createElement(
						'p',
						null,
						'Much of the best scholarship on the foreign born concentrates on particular groups at specific moments in time, works like George J. Sanchez\'s ',
						React.createElement(
							'cite',
							null,
							'Becoming Mexican American: Ethnicity, Culture and Identity in Chicano Los Angeles, 1900-1945'
						),
						'. Some thoughtful works that deal with the foreign-born population and issues of migration more generally are:'
					),
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							'Roger Daniels, ',
							React.createElement(
								'cite',
								null,
								'Coming to America: A History of Immigration and Ethnicity in American Life'
							),
							' (New York: Harper Collins, 1990).'
						),
						React.createElement(
							'li',
							null,
							'Thomas Bender, ed. ',
							React.createElement(
								'cite',
								null,
								'Rethinking American History in a Global Age'
							),
							' (Berkeley, CA: University of California Press, 2002). [Kelley\'s essay "How the West Was One: The African Diaspora and the Remapping of U.S. History" is in this collection.]'
						),
						React.createElement(
							'li',
							null,
							'Henry Yu, "Los Angeles and American Studies in a Pacific World of Migrations," ',
							React.createElement(
								'cite',
								null,
								'American Quarterly'
							),
							' 56 (September 2004) 531-543.'
						)
					),
					React.createElement(
						'h3',
						null,
						'Acknowledgements'
					),
					React.createElement(
						'p',
						null,
						'This map is authored by the staff of the Digital Scholarship Lab: Robert K. Nelson, Scott Nesbit, Edward L. Ayers, Justin Madron, and Nathaniel Ayers. Kim D\'agostini and Erica Havens geolocated country locations.'
					),
					React.createElement(
						'p',
						null,
						'The developers, designers, and staff at Stamen Design have been exceptional partners on this project. Our thanks to Kai Chang, Jon Christensen, Seth Fitzsimmons, Eric Gelinas, Sean Connelley, Nicolette Hayes, Alan McConchie, Michael Neuman, Dan Rademacher, and Eric Rodenbeck.'
					)
				),
				React.createElement(_panoramaToolkit.IntroManager, this.state.intro)
			);
		}
	}]);

	return App;
})(React.Component);

exports['default'] = App;
module.exports = exports['default'];

},{"../basemaps/cartodb/basemaps.json":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/basemaps/cartodb/basemaps.json","../basemaps/cartodb/config.json":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/basemaps/cartodb/config.json","../basemaps/tileLayers.json":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/basemaps/tileLayers.json","./components/CartoDBTileLayer.jsx":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/components/CartoDBTileLayer.jsx","./components/ExampleComponent.jsx":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/components/ExampleComponent.jsx","./stores/ExampleStore":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/stores/ExampleStore.js","./utils/AppActionCreator":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/utils/AppActionCreator.js","./utils/AppDispatcher":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/utils/AppDispatcher.js","@panorama/toolkit":"@panorama/toolkit","react":"react","react-leaflet":"react-leaflet","react-modal":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/index.js"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/components/CartoDBTileLayer.jsx":[function(require,module,exports){
/*
 * TODO: Submit this component as a PR to react-leaflet,
 * instead of adding to @panorama.
 * Might need to submit with tests, but other similar components are not currently tested.
 * Will need to pull in CartoDB dependency via an `npm install` and an `import`
 * rather than via a global <script> include.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _leaflet = require('leaflet');

var _reactLeaflet = require('react-leaflet');

// Not possible until CartoDB releases an npm package for the Core API.
// import { Tiles } from 'cartodb';

// Until then, consumer applications must include the cartodb.js script elsewhere,
// e.g. in index.html as <script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.core.js"></script>
var Tiles = cartodb.Tiles;

var CartoDBTileLayer = (function (_BaseTileLayer) {
	_inherits(CartoDBTileLayer, _BaseTileLayer);

	function CartoDBTileLayer() {
		_classCallCheck(this, CartoDBTileLayer);

		_get(Object.getPrototypeOf(CartoDBTileLayer.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(CartoDBTileLayer, [{
		key: 'componentWillMount',
		value: function componentWillMount() {

			_get(Object.getPrototypeOf(CartoDBTileLayer.prototype), 'componentWillMount', this).call(this);
			this.leafletElement = (0, _leaflet.tileLayer)('', this.props);

			this._getCartoDBTilesTemplates((function (error, response) {
				if (error) {
					// TODO: handle error
					console.error(error);
				} else {
					this.leafletElement.setUrl(response.tiles[0]);
				}
			}).bind(this));
		}
	}, {
		key: '_getCartoDBTilesTemplates',
		value: function _getCartoDBTilesTemplates(callback) {
			Tiles.getTiles({
				type: 'cartodb',
				user_name: this.props.userId,
				sublayers: [{
					"sql": this.props.sql,
					"cartocss": this.props.cartocss
				}]
			}, function (tiles, error) {
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
	}], [{
		key: 'propTypes',
		value: {
			userId: _react.PropTypes.string,
			sql: _react.PropTypes.string,
			cartocss: _react.PropTypes.string
		},
		enumerable: true
	}]);

	return CartoDBTileLayer;
})(_reactLeaflet.BaseTileLayer);

exports['default'] = CartoDBTileLayer;
module.exports = exports['default'];

},{"leaflet":"leaflet","react":"react","react-leaflet":"react-leaflet"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/components/ExampleComponent.jsx":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _storesExampleStore = require('../stores/ExampleStore');

var _storesExampleStore2 = _interopRequireDefault(_storesExampleStore);

var _utilsAppActionCreator = require('../utils/AppActionCreator');

/**
 * An extremely minimal component,
 * designed as boilerplate for new components
 * and to demonstrate data flow through a React/Flux application.
 */

var ExampleComponent = (function (_React$Component) {
	_inherits(ExampleComponent, _React$Component);

	_createClass(ExampleComponent, null, [{
		key: 'propTypes',

		// property validation
		value: {
			title: React.PropTypes.string,
			loading: React.PropTypes.bool
		},

		// property defaults (ES7-style React)
		// (instead of ES5-style getDefaultProps)
		enumerable: true
	}, {
		key: 'defaultProps',
		value: {
			title: 'Default Title',
			loading: true
		},
		enumerable: true
	}]);

	function ExampleComponent(props) {
		_classCallCheck(this, ExampleComponent);

		_get(Object.getPrototypeOf(ExampleComponent.prototype), 'constructor', this).call(this, props);
	}

	_createClass(ExampleComponent, [{
		key: 'componentWillMount',
		value: function componentWillMount() {

			//

		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			//

		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {

			//

		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {

			//

		}
	}, {
		key: 'render',
		value: function render() {

			return React.createElement(
				'div',
				{ className: 'example-component' },
				React.createElement(
					'h3',
					null,
					this.props.title
				),
				React.createElement(
					'p',
					null,
					'Initial data load ',
					this.props.loading ? 'pending...' : 'complete!'
				)
			);
		}
	}]);

	return ExampleComponent;
})(React.Component);

exports['default'] = ExampleComponent;
module.exports = exports['default'];

},{"../stores/ExampleStore":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/stores/ExampleStore.js","../utils/AppActionCreator":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/utils/AppActionCreator.js","react":"react"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/main.jsx":[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AppJsx = require('./App.jsx');

var _AppJsx2 = _interopRequireDefault(_AppJsx);

_reactDom2['default'].render(_react2['default'].createElement(_AppJsx2['default'], null), document.getElementById('app-container'));

},{"./App.jsx":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/App.jsx","react":"react","react-dom":"react-dom"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/stores/ExampleStore.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _events = require('events');

var _utilsAppDispatcher = require('../utils/AppDispatcher');

var _utilsAppDispatcher2 = _interopRequireDefault(_utilsAppDispatcher);

var _utilsAppActionCreator = require('../utils/AppActionCreator');

var _staticSampleDataJson = require('../../static/sampleData.json');

var _staticSampleDataJson2 = _interopRequireDefault(_staticSampleDataJson);

var ExampleStore = {

	data: null,

	/**
  * Sample data loader, with setTimeout
  * emulating network response delay,
  * returning sample data from a local json file.
  * A real data loader would follow the same pattern,
  * but probably make an XHR and return the response data.
  */
	dataLoader: {
		query: function query(value) {
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					return resolve(_staticSampleDataJson2['default']);
				}, 1000);
			});
		}
	},

	/**
  * Make a request for data needed on application init.
  */
	getInitialData: function getInitialData() {
		var _this = this;

		console.log('[3b] ExampleStore makes a data request...');

		// Sample query; format varies by data provider
		this.dataLoader.query([{
			query: "SELECT * FROM tablename",
			format: "JSON"
		}]).then(function () {

			_this.setData(_this.parseData.apply(_this, arguments));
		}, function (error) {

			// TODO: handle this.
			console.error("Example received error:", error);
			throw error;
		});
	},

	/**
  * Retrieve data from the store.
  */
	getData: function getData() {

		// For simplicity of example, we return all of the data.
		// A real application would more likely return a copy
		// (to avoid accidental mutation by consumers)
		// of a subset of the data.
		return this.data;
	},

	/**
  * Cache the loaded, parsed data for future use by the application.
  */
	setData: function setData(data) {

		this.data = data;

		console.log('[3c] ExampleStore updates its cache with the loaded and parsed data, and emits a \'' + _utilsAppActionCreator.AppActionTypes.storeChanged + '\' event from ExampleStore.setData().');
		this.emit(_utilsAppActionCreator.AppActionTypes.storeChanged);
	},

	/**
  * Parse returned data as necessary.
  */
	parseData: function parseData() {

		var firstResponse = arguments[0];
		return firstResponse;
	}

};

// Mixin EventEmitter functionality
Object.assign(ExampleStore, _events.EventEmitter.prototype);

// Register callback to handle all updates
_utilsAppDispatcher2['default'].register(function (action) {

	switch (action.type) {

		case _utilsAppActionCreator.AppActionTypes.getInitialData:
			console.log('[3a] The \'' + _utilsAppActionCreator.AppActionTypes.getInitialData + '\' action is handled by ExampleStore....');
			ExampleStore.getInitialData(action.state);
			break;

	}

	return true;
});

exports['default'] = ExampleStore;
module.exports = exports['default'];

},{"../../static/sampleData.json":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/static/sampleData.json","../utils/AppActionCreator":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/utils/AppActionCreator.js","../utils/AppDispatcher":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/utils/AppDispatcher.js","events":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/events/events.js"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/utils/AppActionCreator.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _AppDispatcher = require('./AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var AppActionTypes = {

	// Note: stores emit this type of event.
	// Though it is not actually an Action type;
	// it's enumerated here for ease of access.
	storeChanged: 'storeChanged',

	getInitialData: 'getInitialData'

};

exports.AppActionTypes = AppActionTypes;
var ExampleActions = {

	/**
  * Load data needed by the application on init.
  */
	getInitialData: function getInitialData(state) {
		console.log('[2] A \'' + AppActionTypes.getInitialData + '\' action is broadcast globally from AppActionCreator.getInitialData().');
		_AppDispatcher2['default'].dispatch({
			type: AppActionTypes.getInitialData,
			state: state
		});
	}

};
exports.ExampleActions = ExampleActions;

},{"./AppDispatcher":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/utils/AppDispatcher.js"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/utils/AppDispatcher.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _flux = require('flux');

exports['default'] = new _flux.Dispatcher();
module.exports = exports['default'];

},{"flux":"flux"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/static/sampleData.json":[function(require,module,exports){
module.exports={
	"legend": {
		"items": [
			"Erie Canal",
			"Schuylkill Navigation",
			"Chesapeake & Ohio"
		],
		"selectedItem": "Erie Canal"
	},

	"exampleTitle": "Example Component",

	"punchcard": [
		{
			"header": {
				"title": "Erie Canal",
				"subtitle": 1849,
				"caption": 1622444
			},
			"categories": [
				{
					"commodities": [
						{
							"id": 46,
							"name": "Flour",
							"value": 3263087,
							"normalizedValue": 319782.526
						},
						{
							"id": 252,
							"name": "Wheat",
							"value": 2734389,
							"normalizedValue": 267970.122
						},
						{
							"id": 51,
							"name": "Grain",
							"value": 9252301,
							"normalizedValue": 217429.0735
						}
					],
					"name": "Grains, Alcohol & Tobacco",
					"aggregateNormalizedValue": 805181.7215
				},
				{
					"commodities": [
						{
							"id": 13,
							"name": "Boards & scantling",
							"value": 297431140,
							"normalizedValue": 446146.71
						},
						{
							"id": 130,
							"name": "Shingles",
							"value": 51258000,
							"normalizedValue": 25629
						}
					],
					"name": "Building Materials",
					"aggregateNormalizedValue": 471775.71
				},
				{
					"commodities": [
						{
							"id": 107,
							"name": "Product of the Forest",
							"value": 1104840,
							"normalizedValue": 1104840
						},
						{
							"id": 253,
							"name": "Staves",
							"value": 154159359,
							"normalizedValue": 77079.6795
						},
						{
							"id": 142,
							"name": "Timber",
							"value": 1497627,
							"normalizedValue": 23362.9812
						},
						{
							"id": 211,
							"name": "Wood",
							"value": 11970,
							"normalizedValue": 17955
						}
					],
					"name": "Lumber\/Timber\/Wood",
					"aggregateNormalizedValue": 1223237.6607
				},
				{
					"commodities": [
						{
							"id": 251,
							"name": "Agriculture",
							"value": 1020259,
							"normalizedValue": 1020259
						}
					],
					"name": "Agricultural Products (other than grains)",
					"aggregateNormalizedValue": 1020259
				},
				{
					"commodities": [
						{
							"id": 255,
							"name": "Merchandise",
							"value": 255455,
							"normalizedValue": 255455
						},
						{
							"id": 254,
							"name": "Manufactures",
							"value": 203990,
							"normalizedValue": 203990
						}
					],
					"name": "Finished Products",
					"aggregateNormalizedValue": 459445
				},
				{
					"commodities": [
						{
							"id": 158,
							"name": "Miscellaneous\/Other Articles",
							"value": 310088,
							"normalizedValue": 310088
						}
					],
					"name": "Other Articles",
					"aggregateNormalizedValue": 310088
				}
			],
			"items": [
				{
					"id": 13,
					"name": "Boards & scantling",
					"value": 297431140,
					"normalizedValue": 446146.71
				},
				{
					"id": 46,
					"name": "Flour",
					"value": 3263087,
					"normalizedValue": 319782.526
				},
				{
					"id": 51,
					"name": "Grain",
					"value": 9252301,
					"normalizedValue": 217429.0735
				},
				{
					"id": 107,
					"name": "Product of the Forest",
					"value": 1104840,
					"normalizedValue": 1104840
				},
				{
					"id": 130,
					"name": "Shingles",
					"value": 51258000,
					"normalizedValue": 25629
				},
				{
					"id": 142,
					"name": "Timber",
					"value": 1497627,
					"normalizedValue": 23362.9812
				},
				{
					"id": 158,
					"name": "Miscellaneous\/Other Articles",
					"value": 310088,
					"normalizedValue": 310088
				},
				{
					"id": 211,
					"name": "Wood",
					"value": 11970,
					"normalizedValue": 17955
				},
				{
					"id": 251,
					"name": "Agriculture",
					"value": 1020259,
					"normalizedValue": 1020259
				},
				{
					"id": 252,
					"name": "Wheat",
					"value": 2734389,
					"normalizedValue": 267970.122
				},
				{
					"id": 253,
					"name": "Staves",
					"value": 154159359,
					"normalizedValue": 77079.6795
				},
				{
					"id": 254,
					"name": "Manufactures",
					"value": 203990,
					"normalizedValue": 203990
				},
				{
					"id": 255,
					"name": "Merchandise",
					"value": 255455,
					"normalizedValue": 255455
				}
			]
		},
		{
			"header": {
				"title": "Schuylkill Navigation",
				"subtitle": 1849,
				"caption": 711525
			},
			"categories": [
				{
					"commodities": [
						{
							"id": 229,
							"name": "Coal",
							"value": 489208,
							"normalizedValue": 489208
						}
					],
					"name": "Fuel and Ore",
					"aggregateNormalizedValue": 489208
				},
				{
					"commodities": [
						{
							"id": 158,
							"name": "Miscellaneous\/Other Articles",
							"value": 222317,
							"normalizedValue": 222317
						}
					],
					"name": "Other Articles",
					"aggregateNormalizedValue": 222317
				}
			],
			"items": [
				{
					"id": 158,
					"name": "Miscellaneous\/Other Articles",
					"value": 222317,
					"normalizedValue": 222317
				},
				{
					"id": 229,
					"name": "Coal",
					"value": 489208,
					"normalizedValue": 489208
				}
			]
		},
		{
			"header": {
				"title": "Chesapeake & Ohio",
				"subtitle": 1849
			},
			"categories": [
				{
					"commodities": [
						{
							"id": 46,
							"name": "Flour",
							"value": 236620,
							"normalizedValue": 23188.76
						},
						{
							"id": 205,
							"name": "Corn",
							"value": 244281,
							"normalizedValue": 8549.835
						},
						{
							"id": 148,
							"name": "Wheat",
							"value": 240073,
							"normalizedValue": 7202.19
						},
						{
							"id": 84,
							"name": "Mill offal",
							"value": 45423,
							"normalizedValue": 4451.454
						},
						{
							"id": 284,
							"name": "Whiskey",
							"value": 2674,
							"normalizedValue": 252.693
						},
						{
							"id": 89,
							"name": "Oats",
							"value": 13200,
							"normalizedValue": 211.2
						},
						{
							"id": 31,
							"name": "Corn meal",
							"value": 7225,
							"normalizedValue": 180.625
						},
						{
							"id": 58,
							"name": "Hay, Straw",
							"value": 147,
							"normalizedValue": 147
						},
						{
							"id": 145,
							"name": "Tobacco",
							"value": 200,
							"normalizedValue": 100
						},
						{
							"id": 116,
							"name": "Rye",
							"value": 1795,
							"normalizedValue": 50.26
						}
					],
					"name": "Grains, Alcohol & Tobacco",
					"aggregateNormalizedValue": 44334.017
				},
				{
					"commodities": [
						{
							"id": 114,
							"name": "Rough stone, other than limestone",
							"value": 17750,
							"normalizedValue": 21743.75
						},
						{
							"id": 76,
							"name": "Limestone",
							"value": 8662,
							"normalizedValue": 17686.9378
						},
						{
							"id": 97,
							"name": "Plaster",
							"value": 6599,
							"normalizedValue": 6599
						},
						{
							"id": 74,
							"name": "Lime",
							"value": 723,
							"normalizedValue": 723
						},
						{
							"id": 15,
							"name": "Bricks",
							"value": 81000,
							"normalizedValue": 324
						},
						{
							"id": 20,
							"name": "Cement",
							"value": 1382,
							"normalizedValue": 259.816
						},
						{
							"id": 87,
							"name": "Nails",
							"value": 3682,
							"normalizedValue": 184.1
						},
						{
							"id": 75,
							"name": "Lime and Cement",
							"value": 140,
							"normalizedValue": 140
						},
						{
							"id": 110,
							"name": "Rails",
							"value": 3906,
							"normalizedValue": 117.18
						}
					],
					"name": "Building Materials",
					"aggregateNormalizedValue": 47777.783
				},
				{
					"commodities": [
						{
							"id": 226,
							"name": "Salt ",
							"value": 2019,
							"normalizedValue": 2019
						},
						{
							"id": 250,
							"name": "Sundries",
							"value": 1693,
							"normalizedValue": 1693
						},
						{
							"id": 123,
							"name": "Salted fish",
							"value": 3995,
							"normalizedValue": 499.375
						}
					],
					"name": "Sundries: fish in bulk and groceries",
					"aggregateNormalizedValue": 4211.375
				},
				{
					"commodities": [
						{
							"id": 211,
							"name": "Wood",
							"value": 5083,
							"normalizedValue": 7624.5
						},
						{
							"id": 80,
							"name": "Lumber",
							"value": 3177956,
							"normalizedValue": 4766.934
						},
						{
							"id": 212,
							"name": "Bark",
							"value": 1076,
							"normalizedValue": 1614
						}
					],
					"name": "Lumber\/Timber\/Wood",
					"aggregateNormalizedValue": 14005.434
				},
				{
					"commodities": [
						{
							"id": 11,
							"name": "Bituminous Coal",
							"value": 5224,
							"normalizedValue": 5224
						},
						{
							"id": 65,
							"name": "Iron Ore",
							"value": 4025,
							"normalizedValue": 4025
						},
						{
							"id": 230,
							"name": "Coke",
							"value": 2854,
							"normalizedValue": 2854
						},
						{
							"id": 65,
							"name": "Iron Ore",
							"value": 1351,
							"normalizedValue": 1351
						},
						{
							"id": 229,
							"name": "Coal",
							"value": 1236,
							"normalizedValue": 1236
						}
					],
					"name": "Fuel and Ore",
					"aggregateNormalizedValue": 14690
				},
				{
					"commodities": [
						{
							"id": 127,
							"name": "Shad, Herring (fresh)",
							"value": 434,
							"normalizedValue": 434
						},
						{
							"id": 4,
							"name": "Apples",
							"value": 12970,
							"normalizedValue": 259.4
						},
						{
							"id": 210,
							"name": "Flax Seeds",
							"value": 1643,
							"normalizedValue": 46.004
						},
						{
							"id": 103,
							"name": "Potatoes",
							"value": 1440,
							"normalizedValue": 43.2
						}
					],
					"name": "Agricultural Products (other than grains)",
					"aggregateNormalizedValue": 782.604
				},
				{
					"commodities": [
						{
							"id": 165,
							"name": "Manures",
							"value": 648,
							"normalizedValue": 648
						}
					],
					"name": "Other Articles",
					"aggregateNormalizedValue": 648
				}
			],
			"items": [
				{
					"id": 4,
					"name": "Apples",
					"value": 12970,
					"normalizedValue": 259.4
				},
				{
					"id": 11,
					"name": "Bituminous Coal",
					"value": 5224,
					"normalizedValue": 5224
				},
				{
					"id": 15,
					"name": "Bricks",
					"value": 81000,
					"normalizedValue": 324
				},
				{
					"id": 20,
					"name": "Cement",
					"value": 1382,
					"normalizedValue": 259.816
				},
				{
					"id": 31,
					"name": "Corn meal",
					"value": 7225,
					"normalizedValue": 180.625
				},
				{
					"id": 46,
					"name": "Flour",
					"value": 236620,
					"normalizedValue": 23188.76
				},
				{
					"id": 58,
					"name": "Hay, Straw",
					"value": 147,
					"normalizedValue": 147
				},
				{
					"id": 65,
					"name": "Iron Ore",
					"value": 4025,
					"normalizedValue": 4025
				},
				{
					"id": 74,
					"name": "Lime",
					"value": 723,
					"normalizedValue": 723
				},
				{
					"id": 75,
					"name": "Lime and Cement",
					"value": 140,
					"normalizedValue": 140
				},
				{
					"id": 76,
					"name": "Limestone",
					"value": 8662,
					"normalizedValue": 17686.9378
				},
				{
					"id": 80,
					"name": "Lumber",
					"value": 3177956,
					"normalizedValue": 4766.934
				},
				{
					"id": 84,
					"name": "Mill offal",
					"value": 45423,
					"normalizedValue": 4451.454
				},
				{
					"id": 87,
					"name": "Nails",
					"value": 3682,
					"normalizedValue": 184.1
				},
				{
					"id": 89,
					"name": "Oats",
					"value": 13200,
					"normalizedValue": 211.2
				},
				{
					"id": 97,
					"name": "Plaster",
					"value": 6599,
					"normalizedValue": 6599
				},
				{
					"id": 103,
					"name": "Potatoes",
					"value": 1440,
					"normalizedValue": 43.2
				},
				{
					"id": 110,
					"name": "Rails",
					"value": 3906,
					"normalizedValue": 117.18
				},
				{
					"id": 114,
					"name": "Rough stone, other than limestone",
					"value": 17750,
					"normalizedValue": 21743.75
				},
				{
					"id": 116,
					"name": "Rye",
					"value": 1795,
					"normalizedValue": 50.26
				},
				{
					"id": 123,
					"name": "Salted fish",
					"value": 3995,
					"normalizedValue": 499.375
				},
				{
					"id": 127,
					"name": "Shad, Herring (fresh)",
					"value": 434,
					"normalizedValue": 434
				},
				{
					"id": 145,
					"name": "Tobacco",
					"value": 200,
					"normalizedValue": 100
				},
				{
					"id": 148,
					"name": "Wheat",
					"value": 240073,
					"normalizedValue": 7202.19
				},
				{
					"id": 165,
					"name": "Manures",
					"value": 648,
					"normalizedValue": 648
				},
				{
					"id": 205,
					"name": "Corn",
					"value": 244281,
					"normalizedValue": 8549.835
				},
				{
					"id": 210,
					"name": "Flax Seeds",
					"value": 1643,
					"normalizedValue": 46.004
				},
				{
					"id": 211,
					"name": "Wood",
					"value": 5083,
					"normalizedValue": 7624.5
				},
				{
					"id": 212,
					"name": "Bark",
					"value": 1076,
					"normalizedValue": 1614
				},
				{
					"id": 226,
					"name": "Salt ",
					"value": 2019,
					"normalizedValue": 2019
				},
				{
					"id": 229,
					"name": "Coal",
					"value": 1236,
					"normalizedValue": 1236
				},
				{
					"id": 230,
					"name": "Coke",
					"value": 2854,
					"normalizedValue": 2854
				},
				{
					"id": 250,
					"name": "Sundries",
					"value": 1693,
					"normalizedValue": 1693
				},
				{
					"id": 284,
					"name": "Whiskey",
					"value": 2674,
					"normalizedValue": 252.693
				}
			]
		}
	]
}

},{}]},{},["/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/main.jsx"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiYXNlbWFwcy9jYXJ0b2RiL2Jhc2VtYXBzLmpzb24iLCJiYXNlbWFwcy9jYXJ0b2RiL2NvbmZpZy5qc29uIiwiYmFzZW1hcHMvdGlsZUxheWVycy5qc29uIiwibm9kZV9tb2R1bGVzL2VsZW1lbnQtY2xhc3MvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9leGVudi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2Vhc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlY29weS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guX2JpbmRjYWxsYmFjay9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guX2NyZWF0ZWFzc2lnbmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5fZ2V0bmF0aXZlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5faXNpdGVyYXRlZWNhbGwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guaXNhcmd1bWVudHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmlzYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmtleXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnJlc3RwYXJhbS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2NvbXBvbmVudHMvTW9kYWwuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2NvbXBvbmVudHMvTW9kYWxQb3J0YWwuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvYXJpYUFwcEhpZGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2ZvY3VzTWFuYWdlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9zY29wZVRhYi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy90YWJiYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaW5kZXguanMiLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtdGVtcGxhdGUvc3JjL0FwcC5qc3giLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtdGVtcGxhdGUvc3JjL2NvbXBvbmVudHMvQ2FydG9EQlRpbGVMYXllci5qc3giLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtdGVtcGxhdGUvc3JjL2NvbXBvbmVudHMvRXhhbXBsZUNvbXBvbmVudC5qc3giLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtdGVtcGxhdGUvc3JjL21haW4uanN4IiwiL1VzZXJzL2VyaWNzb2NvbG9mc2t5L0RvY3VtZW50cy9zdGFtZW4vZ2l0L3Bhbm9yYW1hLXRlbXBsYXRlL3NyYy9zdG9yZXMvRXhhbXBsZVN0b3JlLmpzIiwiL1VzZXJzL2VyaWNzb2NvbG9mc2t5L0RvY3VtZW50cy9zdGFtZW4vZ2l0L3Bhbm9yYW1hLXRlbXBsYXRlL3NyYy91dGlscy9BcHBBY3Rpb25DcmVhdG9yLmpzIiwiL1VzZXJzL2VyaWNzb2NvbG9mc2t5L0RvY3VtZW50cy9zdGFtZW4vZ2l0L3Bhbm9yYW1hLXRlbXBsYXRlL3NyYy91dGlscy9BcHBEaXNwYXRjaGVyLmpzIiwic3RhdGljL3NhbXBsZURhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9e1wibmFtZVwiOlwiUGFub3JhbWFCYXNlbWFwXCIsXCJ2ZXJzaW9uXCI6XCIwLjAuMVwiLFwibGF5ZXJncm91cFwiOntcInZlcnNpb25cIjpcIjEuMy4wXCIsXCJsYXllcnNcIjpbe1widHlwZVwiOlwibWFwbmlrXCIsXCJvcHRpb25zXCI6e1wic3FsXCI6XCJTRUxFQ1QgKiBGUk9NIHVuaWZpZWRfYmFzZW1hcF9sYXllcnMgT1JERVIgQlkgb3JkXFxuXCIsXCJjYXJ0b2Nzc1wiOlwiQHdhdGVyOiAjZGRlOWU5O1xcbkB3YXRlcmxpbmVzOiAjYWFjY2NjO1xcbkBsYW5kOiAjZjlmOWY5O1xcblxcbk1hcCB7XFxuICBidWZmZXItc2l6ZTogMTI4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogQHdhdGVyO1xcbn1cXG5cXG4jdW5pZmllZF9iYXNlbWFwX2xheWVyc1tsYXllcj0nbmVfMTBtX2NvYXN0bGluZV8yMTYzJ117XFxuICBsaW5lLWNvbG9yOiBAd2F0ZXJsaW5lcztcXG4gIGxpbmUtd2lkdGg6IDAuNzU7XFxuICBsaW5lLW9wYWNpdHk6IDE7XFxuICBsaW5lLWpvaW46IHJvdW5kO1xcbiAgbGluZS1jYXA6IHJvdW5kO1xcbn1cXG5cXG4jdW5pZmllZF9iYXNlbWFwX2xheWVyc1tsYXllcj0nbmVfMTBtX2xha2VzXzIxNjMnXSB7XFxuICBsaW5lLWNvbG9yOiBAd2F0ZXJsaW5lcztcXG4gIGxpbmUtd2lkdGg6IDIuNTtcXG4gIGxpbmUtb3BhY2l0eTogMTtcXG4gIGxpbmUtam9pbjogcm91bmQ7XFxuICBsaW5lLWNhcDogcm91bmQ7XFxuXFxuICAvKiBTb2Z0ZW4gbGluZXMgYXQgbG93ZXIgem9vbXMgKi9cXG4gIFt6b29tPD03XSB7XFxuICAgIGxpbmUtd2lkdGg6IDIuNTtcXG4gICAgbGluZS1jb2xvcjogbGlnaHRlbihkZXNhdHVyYXRlKCNhYWNjY2MsMiUpLDIlKTtcXG4gIH1cXG4gIFt6b29tPD01XSB7XFxuICAgIGxpbmUtd2lkdGg6IDEuNTtcXG4gICAgbGluZS1jb2xvcjogbGlnaHRlbihkZXNhdHVyYXRlKCNhYWNjY2MsNSUpLDUlKTtcXG4gIH1cXG5cXG4gIC8qIFNlcGFyYXRlIGF0dGFjaG1lbnQgYmVjYXVzZSBzZWFtcyAqL1xcbiAgOjpmaWxsIHtcXG4gICAgcG9seWdvbi1maWxsOiBAd2F0ZXI7XFxuICAgIHBvbHlnb24tb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIC8qIFJlbW92ZSBzbWFsbCBsYWtlcyBhdCBsb3dlciB6b29tcyAqL1xcbiAgW3NjYWxlcmFuaz4zXVt6b29tPD01XSB7XFxuICAgIDo6ZmlsbCB7XFxuICAgICAgcG9seWdvbi1vcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIGxpbmUtb3BhY2l0eTogMDtcXG4gIH1cXG4gIFtzY2FsZXJhbms+Nl1bem9vbTw9N10ge1xcbiAgICA6OmZpbGwge1xcbiAgICAgIHBvbHlnb24tb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICBsaW5lLW9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbiN1bmlmaWVkX2Jhc2VtYXBfbGF5ZXJzW2xheWVyPSduZV8xMG1fcml2ZXJzX2xha2VfY2VudGVybGluZXNfMjE2MyddIHtcXG4gIGxpbmUtY29sb3I6IEB3YXRlcmxpbmVzO1xcbiAgbGluZS13aWR0aDogMS41O1xcbiAgbGluZS1vcGFjaXR5OiAxO1xcbiAgbGluZS1qb2luOiByb3VuZDtcXG4gIGxpbmUtY2FwOiByb3VuZDtcXG5cXG4gIFtuYW1lPSdNaXNzaXNzaXBwaSddLFxcbiAgW25hbWU9J1N0LiBMYXdyZW5jZSddLFxcbiAgW25hbWU9J0NvbHVtYmlhJ10sXFxuICBbbmFtZT0nT2hpbyddLFxcbiAgW25hbWU9J0h1ZHNvbiddLFxcbiAgW25hbWU9J01pc3NvdXJpJ10sXFxuICBbbmFtZT0nUmlvIEdyYW5kZSddIHtcXG4gICAgbGluZS13aWR0aDogNDtcXG4gIH1cXG4gIFt6b29tPD04XVtuYW1lPSdNaXNzaXNzaXBwaSddLFxcbiAgW3pvb208PThdW25hbWU9J1N0LiBMYXdyZW5jZSddLFxcbiAgW3pvb208PThdW25hbWU9J0NvbHVtYmlhJ10sXFxuICBbem9vbTw9OF1bbmFtZT0nT2hpbyddLFxcbiAgW3pvb208PThdW25hbWU9J0h1ZHNvbiddLFxcbiAgW3pvb208PThdW25hbWU9J01pc3NvdXJpJ10sXFxuICBbem9vbTw9OF1bbmFtZT0nUmlvIEdyYW5kZSddIHtcXG4gICAgbGluZS13aWR0aDogMjtcXG4gIH1cXG4gIFt6b29tPD04XVtuYW1lIT0nTWlzc2lzc2lwcGknXVtuYW1lIT0nU3QuIExhd3JlbmNlJ11bbmFtZSE9J1JpbyBHcmFuZGUnXVtuYW1lIT0nT2hpbyddW25hbWUhPSdIdWRzb24nXVtuYW1lIT0nQ29sdW1iaWEnXVtuYW1lIT0nTWlzc291cmknXSxcXG4gIFt6b29tPD02XVtuYW1lPSdNaXNzaXNzaXBwaSddLFxcbiAgW3pvb208PTZdW25hbWU9J0NvbHVtYmlhJ10sXFxuICBbem9vbTw9Nl1bbmFtZT0nT2hpbyddLFxcbiAgW3pvb208PTZdW25hbWU9J0h1ZHNvbiddLFxcbiAgW3pvb208PTZdW25hbWU9J01pc3NvdXJpJ10sXFxuICBbem9vbTw9Nl1bbmFtZT0nUmlvIEdyYW5kZSddIHtcXG4gICAgbGluZS13aWR0aDogMTtcXG4gICAgbGluZS1jb2xvcjogbGlnaHRlbihkZXNhdHVyYXRlKEB3YXRlcmxpbmVzLDIlKSwyJSk7XFxuICB9XFxuICBbem9vbTw9Nl1bbmFtZSE9J01pc3Npc3NpcHBpJ11bbmFtZSE9J1N0LiBMYXdyZW5jZSddW25hbWUhPSdSaW8gR3JhbmRlJ11bbmFtZSE9J09oaW8nXVtuYW1lIT0nSHVkc29uJ11bbmFtZSE9J0NvbHVtYmlhJ11bbmFtZSE9J01pc3NvdXJpJ10ge1xcbiAgICBsaW5lLXdpZHRoOiAwLjU7XFxuICAgIGxpbmUtY29sb3I6IGxpZ2h0ZW4oZGVzYXR1cmF0ZShAd2F0ZXJsaW5lcyw1JSksNSUpO1xcbiAgfVxcbiAgW3pvb208PTVdW25hbWUhPSdNaXNzaXNzaXBwaSddW25hbWUhPSdTdC4gTGF3cmVuY2UnXVtuYW1lIT0nUmlvIEdyYW5kZSddW25hbWUhPSdPaGlvJ11bbmFtZSE9J0h1ZHNvbiddW25hbWUhPSdDb2x1bWJpYSddW25hbWUhPSdNaXNzb3VyaSddIHtcXG4gICAgbGluZS13aWR0aDogMDtcXG4gIH1cXG4gIFt6b29tPD01XVtuYW1lPSdNaXNzaXNzaXBwaSddLFxcbiAgW3pvb208PTVdW25hbWU9J1N0LiBMYXdyZW5jZSddLFxcbiAgW3pvb208PTVdW25hbWU9J0NvbHVtYmlhJ10sXFxuICBbem9vbTw9NV1bbmFtZT0nT2hpbyddLFxcbiAgW3pvb208PTVdW25hbWU9J0h1ZHNvbiddLFxcbiAgW3pvb208PTVdW25hbWU9J01pc3NvdXJpJ10sXFxuICBbem9vbTw9NV1bbmFtZT0nUmlvIEdyYW5kZSddIHtcXG4gICAgbGluZS13aWR0aDogMC41O1xcbiAgICBsaW5lLWNvbG9yOiBsaWdodGVuKGRlc2F0dXJhdGUoQHdhdGVybGluZXMsMiUpLDIlKTtcXG4gIH1cXG59XFxuXFxuI3VuaWZpZWRfYmFzZW1hcF9sYXllcnNbbGF5ZXI9J25lXzEwbV9hZG1pbl8wX2NvdW50cmllc19sYWtlc18yMTYzJ10ge1xcblxcbiAgbGluZS1jb2xvcjogQGxhbmQ7XFxuICBsaW5lLXdpZHRoOiAxO1xcbiAgbGluZS1vcGFjaXR5OiAxO1xcbiAgbGluZS1qb2luOiByb3VuZDtcXG4gIGxpbmUtY2FwOiByb3VuZDtcXG4gIHBvbHlnb24tZmlsbDogQGxhbmQ7XFxuICBwb2x5Z29uLW9wYWNpdHk6IDE7XFxuXFxufVxcblwiLFwiY2FydG9jc3NfdmVyc2lvblwiOlwiMi4xLjFcIn19LHtcInR5cGVcIjpcIm1hcG5pa1wiLFwib3B0aW9uc1wiOntcInNxbFwiOlwiU0VMRUNUIGNhcnRvZGJfaWQsIGxhdDo6ZmxvYXQsIGxvbmc6OmZsb2F0LCBTVF9UcmFuc2Zvcm0odGhlX2dlb20sMjE2MykgYXMgdGhlX2dlb21fd2VibWVyY2F0b3IsIHN0YXJ0LCBzdGF0ZSwgdG93biwgcmFuayBGUk9NIGNhbmFsX3Rvd25zXFxuXCIsXCJjYXJ0b2Nzc1wiOlwiQHRleHRjb2xvcjogIzY2NjtcXG5AaGFsb2NvbG9yOiAjZjlmOWY5O1xcblxcbk1hcCB7XFxuICBidWZmZXItc2l6ZTogMTI4O1xcbn1cXG5cXG4jY2FuYWxzX2NpdGllc19iYXNlbWFwW3Jhbms9MV1bem9vbT49NV0sXFxuI2NhbmFsc19jaXRpZXNfYmFzZW1hcFtyYW5rPTJdW3pvb20+PTZdLFxcbiNjYW5hbHNfY2l0aWVzX2Jhc2VtYXBbcmFuaz49M11bem9vbT49OF17XFxuICAvLyBOb3RlOiBoYXZlIHRvIHVzZSBtYXJrZXJzIG5vdCBzaGllbGRzIHRvIGNoYW5nZSBzdmcgY29sb3JcXG4gIDo6aGFsbyB7XFxuICAgIG1hcmtlci1wbGFjZW1lbnQ6IHBvaW50O1xcbiAgICBtYXJrZXItZmlsbC1vcGFjaXR5OiAxO1xcbiAgICBtYXJrZXItbGluZS13aWR0aDogMDtcXG4gICAgbWFya2VyLXR5cGU6IGVsbGlwc2U7XFxuICAgIG1hcmtlci13aWR0aDogOTtcXG4gICAgbWFya2VyLWZpbGw6IEBoYWxvY29sb3I7XFxuICB9XFxuICBtYXJrZXItZmlsbC1vcGFjaXR5OiAwLjk7XFxuICBtYXJrZXItbGluZS1jb2xvcjogQGhhbG9jb2xvcjtcXG4gIG1hcmtlci1saW5lLXdpZHRoOiAxLjU7XFxuICBtYXJrZXItbGluZS1vcGFjaXR5OiAxO1xcbiAgbWFya2VyLXBsYWNlbWVudDogcG9pbnQ7XFxuICAvL21hcmtlci10eXBlOiBlbGxpcHNlO1xcbiAgbWFya2VyLWZpbGU6IHVybCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL21hcGJveC9tYWtpL21iLXBhZ2VzL3NyYy9jaXJjbGUtMTIuc3ZnJyk7XFxuICBtYXJrZXItd2lkdGg6IDY7XFxuICBtYXJrZXItZmlsbDogQHRleHRjb2xvcjtcXG5cXG4gIG1hcmtlci1hbGxvdy1vdmVybGFwOiB0cnVlO1xcbn1cXG5cXG5AZGVmYXVsdF9zaXplOiA5O1xcbkB4X2Rpc3RhbmNlX3Bvc2l0aXZlOiAzO1xcbkB5X2Rpc3RhbmNlX3Bvc2l0aXZlOiAzO1xcbkB4X2Rpc3RhbmNlX25lZ2F0aXZlOiAtMztcXG5AeV9kaXN0YW5jZV9uZWdhdGl2ZTogLTM7XFxuXFxuI2NhbmFsc19jaXRpZXNfYmFzZW1hcFtyYW5rPTFdW3pvb20+PTVdOjpsYWJlbHMsXFxuI2NhbmFsc19jaXRpZXNfYmFzZW1hcFtyYW5rPTJdW3pvb20+PTZdOjpsYWJlbHMsXFxuI2NhbmFsc19jaXRpZXNfYmFzZW1hcFtyYW5rPj0zXVt6b29tPj04XTo6bGFiZWxzLCB7XFxuXFxuICB0ZXh0LW5hbWU6IFt0b3duXTtcXG4gIHRleHQtZmFjZS1uYW1lOiAnRGVqYVZ1IFNhbnMgQm9vayc7XFxuICB0ZXh0LXNpemU6IEBkZWZhdWx0X3NpemU7XFxuICBbem9vbT49Nl1bcmFuaz0xXSB7XFxuICAgIHRleHQtc2l6ZTogQGRlZmF1bHRfc2l6ZSArIDM7XFxuICB9XFxuICB0ZXh0LWxhYmVsLXBvc2l0aW9uLXRvbGVyYW5jZTogMDtcXG4gIHRleHQtZmlsbDogQHRleHRjb2xvcjtcXG4gIHRleHQtaGFsby1maWxsOiBAaGFsb2NvbG9yO1xcbiAgdGV4dC1oYWxvLXJhZGl1czogMS41O1xcbiAgLy8gRGVmYXVsdCBpcyB1cHBlciByaWdodCBmcm9tIGRvdFxcbiAgdGV4dC1keTogQHlfZGlzdGFuY2VfbmVnYXRpdmU7XFxuICB0ZXh0LWR4OiBAeF9kaXN0YW5jZV9wb3NpdGl2ZTtcXG5cXG4gIC8vIExhYmVscyB0byBmbG9hdCBsZWZ0IGluc3RlYWRcXG4gIFtzdGF0ZT0nSWxsaW5vaXMnXSxcXG4gIFtzdGF0ZT0nSW5kaWFuYSddLFxcbiAgW3N0YXRlPSdPaGlvJ11bdG93biE9J0NpbmNpbm5hdGknXSxcXG4gIFt0b3duPSdCZWxsZWZvbnRlJ10sXFxuICBbdG93bj0nUGl0dHNidXJnaCddLFxcbiAgW3Rvd249J1JvY2hlc3RlciddLFxcbiAgW3Rvd249J05ld2FyayddLFxcbiAgW3Rvd249J09zd2VnbyddLFxcbiAgW3Rvd249J0J1ZmZhbG8nXSxcXG4gIFt0b3duPSdDb3JuaW5nJ10sXFxuICBbdG93bj0nQnJpc3RvbCddLFxcbiAgW3Rvd249J1JlYWRpbmcnXSxcXG4gIFt0b3duPSdCdWNoYW5hbiddIHtcXG4gICAgdGV4dC1keDogQHhfZGlzdGFuY2VfbmVnYXRpdmU7XFxuICB9XFxuXFxuICAvLyBMYWJlbHMgdG8gZmxvYXQgYmVsb3cgZG90XFxuXFxuICBbdG93bj0nTmV3IEJydW5zd2ljayddLFxcbiAgW3Rvd249J0xhIFNhbGxlJ10sXFxuICBbdG93bj0nTGF3cmVuY2VidXJnJ10sXFxuICBbdG93bj0nQWtyb24nXSxcXG4gIFt0b3duPSdBbGJhbnknXSxcXG4gIFt0b3duPSdBdGhlbnMnXSxcXG4gIFt0b3duPSdVdGljYSddLFxcbiAgW3Rvd249J1JlYWRpbmcnXSxcXG4gIFt0b3duPSdCb3JkZW50b3duJ10sXFxuICBbdG93bj0nUGhpbGFkZWxwaGlhJ10sXFxuICBbdG93bj0nTHluY2hidXJnJ10sXFxuICBbdG93bj0nVG9sZWRvJ10sXFxuICBbdG93bj0nUGl0dHNidXJnaCddLFxcbiAgW3Rvd249J0NpbmNpbm5hdGknXSB7XFxuICAgIHRleHQtZHk6IEB5X2Rpc3RhbmNlX3Bvc2l0aXZlO1xcbiAgfVxcblxcbiAgdGV4dC1hbGxvdy1vdmVybGFwOiB0cnVlO1xcbiAgdGV4dC1wbGFjZW1lbnQ6IHBvaW50O1xcbiAgdGV4dC1wbGFjZW1lbnQtdHlwZTogZHVtbXk7XFxuXFxufVwiLFwiY2FydG9jc3NfdmVyc2lvblwiOlwiMi4xLjFcIn19XSxcIm1pbnpvb21cIjoyLFwibWF4em9vbVwiOjl9fVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcInVzZXJJZFwiOiBcImRpZ2l0YWxzY2hvbGFyc2hpcGxhYlwiLFxuXHRcImFwaUtleVwiOiBcImYzMDdjMjAyNzMyNzRiYTg5N2FlOGVjZTM2ZjNhNTQzYjU5OTJmMjNcIlxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcImxheWVyc1wiOiBbXG5cdFx0e1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwOi8vc20ubWFwc3RhY2suc3RhbWVuLmNvbS9vcGVudGVycmFpbl8yMTYzL3t6fS97eH0ve3l9LnBuZ1wiXG5cdFx0fVxuXHRdXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50Q2xhc3Mob3B0cylcbn1cblxuZnVuY3Rpb24gaW5kZXhPZihhcnIsIHByb3ApIHtcbiAgaWYgKGFyci5pbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2YocHJvcClcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICBpZiAoYXJyW2ldID09PSBwcm9wKSByZXR1cm4gaVxuICByZXR1cm4gLTFcbn1cblxuZnVuY3Rpb24gRWxlbWVudENsYXNzKG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEVsZW1lbnRDbGFzcykpIHJldHVybiBuZXcgRWxlbWVudENsYXNzKG9wdHMpXG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fVxuXG4gIC8vIHNpbWlsYXIgZG9pbmcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCBidXQgd29ya3MgaW4gSUU4XG4gIGlmIChvcHRzLm5vZGVUeXBlKSBvcHRzID0ge2VsOiBvcHRzfVxuXG4gIHRoaXMub3B0cyA9IG9wdHNcbiAgdGhpcy5lbCA9IG9wdHMuZWwgfHwgZG9jdW1lbnQuYm9keVxuICBpZiAodHlwZW9mIHRoaXMuZWwgIT09ICdvYmplY3QnKSB0aGlzLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmVsKVxufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAoZWwuY2xhc3NOYW1lID09PSBcIlwiKSByZXR1cm4gZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgaWYgKGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKSA+IC0xKSByZXR1cm4gY2xhc3Nlc1xuICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKVxuICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKVxuICByZXR1cm4gY2xhc3Nlc1xufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAoZWwuY2xhc3NOYW1lID09PSBcIlwiKSByZXR1cm5cbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICB2YXIgaWR4ID0gaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpXG4gIGlmIChpZHggPiAtMSkgY2xhc3Nlcy5zcGxpY2UoaWR4LCAxKVxuICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKVxuICByZXR1cm4gY2xhc3Nlc1xufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIHJldHVybiBpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSkgPiAtMVxufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAodGhpcy5oYXMoY2xhc3NOYW1lKSkgdGhpcy5yZW1vdmUoY2xhc3NOYW1lKVxuICBlbHNlIHRoaXMuYWRkKGNsYXNzTmFtZSlcbn1cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2Uge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IDA7XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24oZW1pdHRlci5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSAxO1xuICBlbHNlXG4gICAgcmV0ID0gZW1pdHRlci5fZXZlbnRzW3R5cGVdLmxlbmd0aDtcbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG4iLCIvKipcbiAqIGxvZGFzaCAzLjIuMCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIGJhc2VDb3B5ID0gcmVxdWlyZSgnbG9kYXNoLl9iYXNlY29weScpLFxuICAgIGtleXMgPSByZXF1aXJlKCdsb2Rhc2gua2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBhcmd1bWVudCBqdWdnbGluZyxcbiAqIG11bHRpcGxlIHNvdXJjZXMsIGFuZCBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gc291cmNlID09IG51bGxcbiAgICA/IG9iamVjdFxuICAgIDogYmFzZUNvcHkoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbjtcbiIsIi8qKlxuICogbG9kYXNoIDMuMC4xIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBuYW1lcyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUNvcHkoc291cmNlLCBwcm9wcywgb2JqZWN0KSB7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICBvYmplY3Rba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNvcHk7XG4iLCIvKipcbiAqIGxvZGFzaCAzLjAuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUNhbGxiYWNrYCB3aGljaCBvbmx5IHN1cHBvcnRzIGB0aGlzYCBiaW5kaW5nXG4gKiBhbmQgc3BlY2lmeWluZyB0aGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYmluZC5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtudW1iZXJ9IFthcmdDb3VudF0gVGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGNhbGxiYWNrLlxuICovXG5mdW5jdGlvbiBiaW5kQ2FsbGJhY2soZnVuYywgdGhpc0FyZywgYXJnQ291bnQpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHRoaXNBcmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmdW5jO1xuICB9XG4gIHN3aXRjaCAoYXJnQ291bnQpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICAgIGNhc2UgNDogcmV0dXJuIGZ1bmN0aW9uKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgICBjYXNlIDU6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgb3RoZXIsIGtleSwgb2JqZWN0LCBzb3VyY2UpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUsIG90aGVyLCBrZXksIG9iamVjdCwgc291cmNlKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IHByb3ZpZGVkIHRvIGl0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbGl0eVxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0O1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZENhbGxiYWNrO1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy4xLjEgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBiaW5kQ2FsbGJhY2sgPSByZXF1aXJlKCdsb2Rhc2guX2JpbmRjYWxsYmFjaycpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnbG9kYXNoLl9pc2l0ZXJhdGVlY2FsbCcpLFxuICAgIHJlc3RQYXJhbSA9IHJlcXVpcmUoJ2xvZGFzaC5yZXN0cGFyYW0nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBhc3NpZ25zIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdChzKSB0byBhIGdpdmVuXG4gKiBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgYF8uYXNzaWduYCwgYF8uZGVmYXVsdHNgLCBhbmQgYF8ubWVyZ2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gcmVzdFBhcmFtKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzW2xlbmd0aCAtIDJdIDogdW5kZWZpbmVkLFxuICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkLFxuICAgICAgICB0aGlzQXJnID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY3VzdG9taXplciA9IGJpbmRDYWxsYmFjayhjdXN0b21pemVyLCB0aGlzQXJnLCA1KTtcbiAgICAgIGxlbmd0aCAtPSAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXN0b21pemVyID0gdHlwZW9mIHRoaXNBcmcgPT0gJ2Z1bmN0aW9uJyA/IHRoaXNBcmcgOiB1bmRlZmluZWQ7XG4gICAgICBsZW5ndGggLT0gKGN1c3RvbWl6ZXIgPyAxIDogMCk7XG4gICAgfVxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBjdXN0b21pemVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQXNzaWduZXI7XG4iLCIvKipcbiAqIGxvZGFzaCAzLjkuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpID4gNSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZuVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmblRvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgcmV0dXJuIGlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaSB3aGljaCByZXR1cm4gJ2Z1bmN0aW9uJyBmb3IgcmVnZXhlc1xuICAvLyBhbmQgU2FmYXJpIDggZXF1aXZhbGVudHMgd2hpY2ggcmV0dXJuICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvcnMuXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gZnVuY1RhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc05hdGl2ZShBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc05hdGl2ZShfKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHJldHVybiByZUlzTmF0aXZlLnRlc3QoZm5Ub1N0cmluZy5jYWxsKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgcmVJc0hvc3RDdG9yLnRlc3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsIi8qKlxuICogbG9kYXNoIDMuMC45IChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eXFxkKyQvO1xuXG4vKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIFwibGVuZ3RoXCIgcHJvcGVydHkgdmFsdWUgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKVxuICogdGhhdCBhZmZlY3RzIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSA/ICt2YWx1ZSA6IC0xO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KSkge1xuICAgIHZhciBvdGhlciA9IG9iamVjdFtpbmRleF07XG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICh2YWx1ZSA9PT0gb3RoZXIpIDogKG90aGVyICE9PSBvdGhlcik7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAvLyBBdm9pZCBhIFY4IEpJVCBidWcgaW4gQ2hyb21lIDE5LTIwLlxuICAvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTIyOTEgZm9yIG1vcmUgZGV0YWlscy5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJdGVyYXRlZUNhbGw7XG4iLCIvKipcbiAqIGxvZGFzaCAzLjIuMCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIGJhc2VBc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2guX2Jhc2Vhc3NpZ24nKSxcbiAgICBjcmVhdGVBc3NpZ25lciA9IHJlcXVpcmUoJ2xvZGFzaC5fY3JlYXRlYXNzaWduZXInKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnbG9kYXNoLmtleXMnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uYXNzaWduYCBmb3IgY3VzdG9taXppbmcgYXNzaWduZWQgdmFsdWVzIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGFyZ3VtZW50IGp1Z2dsaW5nLCBtdWx0aXBsZSBzb3VyY2VzLCBhbmQgYHRoaXNgIGJpbmRpbmcgYGN1c3RvbWl6ZXJgXG4gKiBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYXNzaWduV2l0aChvYmplY3QsIHNvdXJjZSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHByb3BzID0ga2V5cyhzb3VyY2UpLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgcmVzdWx0ID0gY3VzdG9taXplcih2YWx1ZSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpO1xuXG4gICAgaWYgKChyZXN1bHQgPT09IHJlc3VsdCA/IChyZXN1bHQgIT09IHZhbHVlKSA6ICh2YWx1ZSA9PT0gdmFsdWUpKSB8fFxuICAgICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgICAgb2JqZWN0W2tleV0gPSByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQXNzaWducyBvd24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3QocykgdG8gdGhlIGRlc3RpbmF0aW9uXG4gKiBvYmplY3QuIFN1YnNlcXVlbnQgc291cmNlcyBvdmVyd3JpdGUgcHJvcGVydHkgYXNzaWdubWVudHMgb2YgcHJldmlvdXMgc291cmNlcy5cbiAqIElmIGBjdXN0b21pemVyYCBpcyBwcm92aWRlZCBpdCBpcyBpbnZva2VkIHRvIHByb2R1Y2UgdGhlIGFzc2lnbmVkIHZhbHVlcy5cbiAqIFRoZSBgY3VzdG9taXplcmAgaXMgYm91bmQgdG8gYHRoaXNBcmdgIGFuZCBpbnZva2VkIHdpdGggZml2ZSBhcmd1bWVudHM6XG4gKiAob2JqZWN0VmFsdWUsIHNvdXJjZVZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlKS5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YCBhbmQgaXMgYmFzZWQgb25cbiAqIFtgT2JqZWN0LmFzc2lnbmBdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QuYXNzaWduKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIGV4dGVuZFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGN1c3RvbWl6ZXJgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5hc3NpZ24oeyAndXNlcic6ICdiYXJuZXknIH0sIHsgJ2FnZSc6IDQwIH0sIHsgJ3VzZXInOiAnZnJlZCcgfSk7XG4gKiAvLyA9PiB7ICd1c2VyJzogJ2ZyZWQnLCAnYWdlJzogNDAgfVxuICpcbiAqIC8vIHVzaW5nIGEgY3VzdG9taXplciBjYWxsYmFja1xuICogdmFyIGRlZmF1bHRzID0gXy5wYXJ0aWFsUmlnaHQoXy5hc3NpZ24sIGZ1bmN0aW9uKHZhbHVlLCBvdGhlcikge1xuICogICByZXR1cm4gXy5pc1VuZGVmaW5lZCh2YWx1ZSkgPyBvdGhlciA6IHZhbHVlO1xuICogfSk7XG4gKlxuICogZGVmYXVsdHMoeyAndXNlcic6ICdiYXJuZXknIH0sIHsgJ2FnZSc6IDM2IH0sIHsgJ3VzZXInOiAnZnJlZCcgfSk7XG4gKiAvLyA9PiB7ICd1c2VyJzogJ2Jhcm5leScsICdhZ2UnOiAzNiB9XG4gKi9cbnZhciBhc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgY3VzdG9taXplcikge1xuICByZXR1cm4gY3VzdG9taXplclxuICAgID8gYXNzaWduV2l0aChvYmplY3QsIHNvdXJjZSwgY3VzdG9taXplcilcbiAgICA6IGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy4wLjQgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGEgW0pJVCBidWddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI3OTIpXG4gKiB0aGF0IGFmZmVjdHMgU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgXCJsZW5ndGhcIiB2YWx1ZS5cbiAqL1xudmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSkgJiZcbiAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiYgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogbG9kYXNoIDMuMC40IChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpID4gNSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZuVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmblRvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQXJyYXkgPSBnZXROYXRpdmUoQXJyYXksICdpc0FycmF5Jyk7XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIHJldHVybiBpc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIGJhc2VkIG9uIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJyYXlUYWc7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaSB3aGljaCByZXR1cm4gJ2Z1bmN0aW9uJyBmb3IgcmVnZXhlc1xuICAvLyBhbmQgU2FmYXJpIDggZXF1aXZhbGVudHMgd2hpY2ggcmV0dXJuICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvcnMuXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gZnVuY1RhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc05hdGl2ZShBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc05hdGl2ZShfKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHJldHVybiByZUlzTmF0aXZlLnRlc3QoZm5Ub1N0cmluZy5jYWxsKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgcmVJc0hvc3RDdG9yLnRlc3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCIvKipcbiAqIGxvZGFzaCAzLjEuMiAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJ2xvZGFzaC5fZ2V0bmF0aXZlJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCdsb2Rhc2guaXNhcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoLmlzYXJyYXknKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL15cXGQrJC87XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBnZXROYXRpdmUoT2JqZWN0LCAna2V5cycpO1xuXG4vKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGEgW0pJVCBidWddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI3OTIpXG4gKiB0aGF0IGFmZmVjdHMgU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgXCJsZW5ndGhcIiB2YWx1ZS5cbiAqL1xudmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpID8gK3ZhbHVlIDogLTE7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGg7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIEEgZmFsbGJhY2sgaW1wbGVtZW50YXRpb24gb2YgYE9iamVjdC5rZXlzYCB3aGljaCBjcmVhdGVzIGFuIGFycmF5IG9mIHRoZVxuICogb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIHNoaW1LZXlzKG9iamVjdCkge1xuICB2YXIgcHJvcHMgPSBrZXlzSW4ob2JqZWN0KSxcbiAgICAgIHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gcHJvcHNMZW5ndGggJiYgb2JqZWN0Lmxlbmd0aDtcblxuICB2YXIgYWxsb3dJbmRleGVzID0gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IHByb3BzTGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICBpZiAoKGFsbG93SW5kZXhlcyAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSkgfHwgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAvLyBBdm9pZCBhIFY4IEpJVCBidWcgaW4gQ2hyb21lIDE5LTIwLlxuICAvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTIyOTEgZm9yIG1vcmUgZGV0YWlscy5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbnZhciBrZXlzID0gIW5hdGl2ZUtleXMgPyBzaGltS2V5cyA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgQ3RvciA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBpZiAoKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCkgfHxcbiAgICAgICh0eXBlb2Ygb2JqZWN0ICE9ICdmdW5jdGlvbicgJiYgaXNBcnJheUxpa2Uob2JqZWN0KSkpIHtcbiAgICByZXR1cm4gc2hpbUtleXMob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3Qob2JqZWN0KSA/IG5hdGl2ZUtleXMob2JqZWN0KSA6IFtdO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDtcbiAgbGVuZ3RoID0gKGxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKSAmJiBsZW5ndGgpIHx8IDA7XG5cbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICBpbmRleCA9IC0xLFxuICAgICAgaXNQcm90byA9IHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCksXG4gICAgICBza2lwSW5kZXhlcyA9IGxlbmd0aCA+IDA7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gKGluZGV4ICsgJycpO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShza2lwSW5kZXhlcyAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSkgJiZcbiAgICAgICAgIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy42LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlXG4gKiBjcmVhdGVkIGZ1bmN0aW9uIGFuZCBhcmd1bWVudHMgZnJvbSBgc3RhcnRgIGFuZCBiZXlvbmQgcHJvdmlkZWQgYXMgYW4gYXJyYXkuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGJhc2VkIG9uIHRoZSBbcmVzdCBwYXJhbWV0ZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0Z1bmN0aW9ucy9yZXN0X3BhcmFtZXRlcnMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHNheSA9IF8ucmVzdFBhcmFtKGZ1bmN0aW9uKHdoYXQsIG5hbWVzKSB7XG4gKiAgIHJldHVybiB3aGF0ICsgJyAnICsgXy5pbml0aWFsKG5hbWVzKS5qb2luKCcsICcpICtcbiAqICAgICAoXy5zaXplKG5hbWVzKSA+IDEgPyAnLCAmICcgOiAnJykgKyBfLmxhc3QobmFtZXMpO1xuICogfSk7XG4gKlxuICogc2F5KCdoZWxsbycsICdmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJyk7XG4gKiAvLyA9PiAnaGVsbG8gZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnXG4gKi9cbmZ1bmN0aW9uIHJlc3RQYXJhbShmdW5jLCBzdGFydCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiAoK3N0YXJ0IHx8IDApLCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIHJlc3QgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHJlc3RbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgc3dpdGNoIChzdGFydCkge1xuICAgICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIHJlc3QpO1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3NbMF0sIHJlc3QpO1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3NbMF0sIGFyZ3NbMV0sIHJlc3QpO1xuICAgIH1cbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICBpbmRleCA9IC0xO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHJlc3Q7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXN0UGFyYW07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJ2V4ZW52Jyk7XG52YXIgTW9kYWxQb3J0YWwgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KHJlcXVpcmUoJy4vTW9kYWxQb3J0YWwnKSk7XG52YXIgYXJpYUFwcEhpZGVyID0gcmVxdWlyZSgnLi4vaGVscGVycy9hcmlhQXBwSGlkZXInKTtcbnZhciBlbGVtZW50Q2xhc3MgPSByZXF1aXJlKCdlbGVtZW50LWNsYXNzJyk7XG52YXIgcmVuZGVyU3VidHJlZUludG9Db250YWluZXIgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyO1xuXG52YXIgU2FmZUhUTUxFbGVtZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gd2luZG93LkhUTUxFbGVtZW50IDoge307XG5cbnZhciBNb2RhbCA9IG1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnTW9kYWwnLFxuICBzdGF0aWNzOiB7XG4gICAgc2V0QXBwRWxlbWVudDogYXJpYUFwcEhpZGVyLnNldEVsZW1lbnQsXG4gICAgaW5qZWN0Q1NTOiBmdW5jdGlvbigpIHtcbiAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICAgICAgICAmJiBjb25zb2xlLndhcm4oJ1JlYWN0LU1vZGFsOiBpbmplY3RDU1MgaGFzIGJlZW4gZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbmQgbm8gbG9uZ2VyIGhhcyBhbnkgZWZmZWN0LiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBsYXRlciB2ZXJzaW9uJyk7XG4gICAgfVxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIGlzT3BlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNvbnRlbnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgICBvdmVybGF5OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgfSksXG4gICAgYXBwRWxlbWVudDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoU2FmZUhUTUxFbGVtZW50KSxcbiAgICBvblJlcXVlc3RDbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xvc2VUaW1lb3V0TVM6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgYXJpYUhpZGVBcHA6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICBhcmlhSGlkZUFwcDogdHJ1ZSxcbiAgICAgIGNsb3NlVGltZW91dE1TOiAwXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5ub2RlLmNsYXNzTmFtZSA9ICdSZWFjdE1vZGFsUG9ydGFsJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgdGhpcy5yZW5kZXJQb3J0YWwodGhpcy5wcm9wcyk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24obmV3UHJvcHMpIHtcbiAgICB0aGlzLnJlbmRlclBvcnRhbChuZXdQcm9wcyk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5ub2RlKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gIH0sXG5cbiAgcmVuZGVyUG9ydGFsOiBmdW5jdGlvbihwcm9wcykge1xuICAgIGlmIChwcm9wcy5pc09wZW4pIHtcbiAgICAgIGVsZW1lbnRDbGFzcyhkb2N1bWVudC5ib2R5KS5hZGQoJ1JlYWN0TW9kYWxfX0JvZHktLW9wZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudENsYXNzKGRvY3VtZW50LmJvZHkpLnJlbW92ZSgnUmVhY3RNb2RhbF9fQm9keS0tb3BlbicpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5hcmlhSGlkZUFwcCkge1xuICAgICAgYXJpYUFwcEhpZGVyLnRvZ2dsZShwcm9wcy5pc09wZW4sIHByb3BzLmFwcEVsZW1lbnQpO1xuICAgIH1cbiAgICBzYW5pdGl6ZVByb3BzKHByb3BzKTtcbiAgICB0aGlzLnBvcnRhbCA9IHJlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKHRoaXMsIE1vZGFsUG9ydGFsKHByb3BzKSwgdGhpcy5ub2RlKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUmVhY3QuRE9NLm5vc2NyaXB0KCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzYW5pdGl6ZVByb3BzKHByb3BzKSB7XG4gIGRlbGV0ZSBwcm9wcy5yZWY7XG59XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGRpdiA9IFJlYWN0LkRPTS5kaXY7XG52YXIgZm9jdXNNYW5hZ2VyID0gcmVxdWlyZSgnLi4vaGVscGVycy9mb2N1c01hbmFnZXInKTtcbnZhciBzY29wZVRhYiA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvc2NvcGVUYWInKTtcbnZhciBBc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2guYXNzaWduJyk7XG5cblxuLy8gc28gdGhhdCBvdXIgQ1NTIGlzIHN0YXRpY2FsbHkgYW5hbHl6YWJsZVxudmFyIENMQVNTX05BTUVTID0ge1xuICBvdmVybGF5OiB7XG4gICAgYmFzZTogJ1JlYWN0TW9kYWxfX092ZXJsYXknLFxuICAgIGFmdGVyT3BlbjogJ1JlYWN0TW9kYWxfX092ZXJsYXktLWFmdGVyLW9wZW4nLFxuICAgIGJlZm9yZUNsb3NlOiAnUmVhY3RNb2RhbF9fT3ZlcmxheS0tYmVmb3JlLWNsb3NlJ1xuICB9LFxuICBjb250ZW50OiB7XG4gICAgYmFzZTogJ1JlYWN0TW9kYWxfX0NvbnRlbnQnLFxuICAgIGFmdGVyT3BlbjogJ1JlYWN0TW9kYWxfX0NvbnRlbnQtLWFmdGVyLW9wZW4nLFxuICAgIGJlZm9yZUNsb3NlOiAnUmVhY3RNb2RhbF9fQ29udGVudC0tYmVmb3JlLWNsb3NlJ1xuICB9XG59O1xuXG52YXIgZGVmYXVsdFN0eWxlcyA9IHtcbiAgb3ZlcmxheToge1xuICAgIHBvc2l0aW9uICAgICAgICA6ICdmaXhlZCcsXG4gICAgdG9wICAgICAgICAgICAgIDogMCxcbiAgICBsZWZ0ICAgICAgICAgICAgOiAwLFxuICAgIHJpZ2h0ICAgICAgICAgICA6IDAsXG4gICAgYm90dG9tICAgICAgICAgIDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSdcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHBvc2l0aW9uICAgICAgICAgICAgICAgIDogJ2Fic29sdXRlJyxcbiAgICB0b3AgICAgICAgICAgICAgICAgICAgICA6ICc0MHB4JyxcbiAgICBsZWZ0ICAgICAgICAgICAgICAgICAgICA6ICc0MHB4JyxcbiAgICByaWdodCAgICAgICAgICAgICAgICAgICA6ICc0MHB4JyxcbiAgICBib3R0b20gICAgICAgICAgICAgICAgICA6ICc0MHB4JyxcbiAgICBib3JkZXIgICAgICAgICAgICAgICAgICA6ICcxcHggc29saWQgI2NjYycsXG4gICAgYmFja2dyb3VuZCAgICAgICAgICAgICAgOiAnI2ZmZicsXG4gICAgb3ZlcmZsb3cgICAgICAgICAgICAgICAgOiAnYXV0bycsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgOiAndG91Y2gnLFxuICAgIGJvcmRlclJhZGl1cyAgICAgICAgICAgIDogJzRweCcsXG4gICAgb3V0bGluZSAgICAgICAgICAgICAgICAgOiAnbm9uZScsXG4gICAgcGFkZGluZyAgICAgICAgICAgICAgICAgOiAnMjBweCdcbiAgfVxufTtcblxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG52YXIgTW9kYWxQb3J0YWwgPSBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ01vZGFsUG9ydGFsJyxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBvdmVybGF5OiB7fSxcbiAgICAgICAgY29udGVudDoge31cbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFmdGVyT3BlbjogZmFsc2UsXG4gICAgICBiZWZvcmVDbG9zZTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAvLyBGb2N1cyBuZWVkcyB0byBiZSBzZXQgd2hlbiBtb3VudGluZyBhbmQgYWxyZWFkeSBvcGVuXG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldEZvY3VzQWZ0ZXJSZW5kZXIodHJ1ZSk7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlVGltZXIpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5ld1Byb3BzKSB7XG4gICAgLy8gRm9jdXMgb25seSBuZWVkcyB0byBiZSBzZXQgb25jZSB3aGVuIHRoZSBtb2RhbCBpcyBiZWluZyBvcGVuZWRcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuICYmIG5ld1Byb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRGb2N1c0FmdGVyUmVuZGVyKHRydWUpO1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiAhbmV3UHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmZvY3VzQWZ0ZXJSZW5kZXIpIHtcbiAgICAgIHRoaXMuZm9jdXNDb250ZW50KCk7XG4gICAgICB0aGlzLnNldEZvY3VzQWZ0ZXJSZW5kZXIoZmFsc2UpO1xuICAgIH1cbiAgfSxcblxuICBzZXRGb2N1c0FmdGVyUmVuZGVyOiBmdW5jdGlvbiAoZm9jdXMpIHtcbiAgICB0aGlzLmZvY3VzQWZ0ZXJSZW5kZXIgPSBmb2N1cztcbiAgfSxcblxuICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICBmb2N1c01hbmFnZXIuc2V0dXBTY29wZWRGb2N1cyh0aGlzLm5vZGUpO1xuICAgIGZvY3VzTWFuYWdlci5tYXJrRm9yRm9jdXNMYXRlcigpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzT3BlbjogdHJ1ZX0sIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWZ0ZXJPcGVuOiB0cnVlfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMgPiAwKVxuICAgICAgdGhpcy5jbG9zZVdpdGhUaW1lb3V0KCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0KCk7XG4gIH0sXG5cbiAgZm9jdXNDb250ZW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlZnMuY29udGVudC5mb2N1cygpO1xuICB9LFxuXG4gIGNsb3NlV2l0aFRpbWVvdXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2JlZm9yZUNsb3NlOiB0cnVlfSwgZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmNsb3NlVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuY2xvc2VXaXRob3V0VGltZW91dCwgdGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBjbG9zZVdpdGhvdXRUaW1lb3V0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFmdGVyT3BlbjogZmFsc2UsXG4gICAgICBiZWZvcmVDbG9zZTogZmFsc2VcbiAgICB9LCB0aGlzLmFmdGVyQ2xvc2UpO1xuICB9LFxuXG4gIGFmdGVyQ2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgIGZvY3VzTWFuYWdlci5yZXR1cm5Gb2N1cygpO1xuICAgIGZvY3VzTWFuYWdlci50ZWFyZG93blNjb3BlZEZvY3VzKCk7XG4gIH0sXG5cbiAgaGFuZGxlS2V5RG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA5IC8qdGFiKi8pIHNjb3BlVGFiKHRoaXMucmVmcy5jb250ZW50LCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMjcgLyplc2MqLykgdGhpcy5yZXF1ZXN0Q2xvc2UoKTtcbiAgfSxcblxuICBoYW5kbGVPdmVybGF5Q2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkpXG4gICAgICB0aGlzLnJlcXVlc3RDbG9zZSgpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZm9jdXNDb250ZW50KCk7XG4gIH0sXG5cbiAgcmVxdWVzdENsb3NlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vd25lckhhbmRsZXNDbG9zZSgpKVxuICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xuICB9LFxuXG4gIG93bmVySGFuZGxlc0Nsb3NlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZTtcbiAgfSxcblxuICBzaG91bGRCZUNsb3NlZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICF0aGlzLnByb3BzLmlzT3BlbiAmJiAhdGhpcy5zdGF0ZS5iZWZvcmVDbG9zZTtcbiAgfSxcblxuICBidWlsZENsYXNzTmFtZTogZnVuY3Rpb24od2hpY2gsIGFkZGl0aW9uYWwpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gQ0xBU1NfTkFNRVNbd2hpY2hdLmJhc2U7XG4gICAgaWYgKHRoaXMuc3RhdGUuYWZ0ZXJPcGVuKVxuICAgICAgY2xhc3NOYW1lICs9ICcgJytDTEFTU19OQU1FU1t3aGljaF0uYWZ0ZXJPcGVuO1xuICAgIGlmICh0aGlzLnN0YXRlLmJlZm9yZUNsb3NlKVxuICAgICAgY2xhc3NOYW1lICs9ICcgJytDTEFTU19OQU1FU1t3aGljaF0uYmVmb3JlQ2xvc2U7XG4gICAgcmV0dXJuIGFkZGl0aW9uYWwgPyBjbGFzc05hbWUgKyAnICcgKyBhZGRpdGlvbmFsIDogY2xhc3NOYW1lO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdWxkQmVDbG9zZWQoKSA/IGRpdigpIDogKFxuICAgICAgZGl2KHtcbiAgICAgICAgcmVmOiBcIm92ZXJsYXlcIixcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmJ1aWxkQ2xhc3NOYW1lKCdvdmVybGF5JywgdGhpcy5wcm9wcy5vdmVybGF5Q2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IEFzc2lnbih7fSwgZGVmYXVsdFN0eWxlcy5vdmVybGF5LCB0aGlzLnByb3BzLnN0eWxlLm92ZXJsYXkgfHwge30pLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZU92ZXJsYXlDbGlja1xuICAgICAgfSxcbiAgICAgICAgZGl2KHtcbiAgICAgICAgICByZWY6IFwiY29udGVudFwiLFxuICAgICAgICAgIHN0eWxlOiBBc3NpZ24oe30sIGRlZmF1bHRTdHlsZXMuY29udGVudCwgdGhpcy5wcm9wcy5zdHlsZS5jb250ZW50IHx8IHt9KSxcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuYnVpbGRDbGFzc05hbWUoJ2NvbnRlbnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgICAgICBvbkNsaWNrOiBzdG9wUHJvcGFnYXRpb24sXG4gICAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd25cbiAgICAgICAgfSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcbiIsInZhciBfZWxlbWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcblxuZnVuY3Rpb24gc2V0RWxlbWVudChlbGVtZW50KSB7XG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQgPSAnbGVuZ3RoJyBpbiBlbCA/IGVsWzBdIDogZWw7XG4gIH1cbiAgX2VsZW1lbnQgPSBlbGVtZW50IHx8IF9lbGVtZW50O1xufVxuXG5mdW5jdGlvbiBoaWRlKGFwcEVsZW1lbnQpIHtcbiAgdmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpO1xuICAoYXBwRWxlbWVudCB8fCBfZWxlbWVudCkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG59XG5cbmZ1bmN0aW9uIHNob3coYXBwRWxlbWVudCkge1xuICB2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudCk7XG4gIChhcHBFbGVtZW50IHx8IF9lbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZShzaG91bGRIaWRlLCBhcHBFbGVtZW50KSB7XG4gIGlmIChzaG91bGRIaWRlKVxuICAgIGhpZGUoYXBwRWxlbWVudCk7XG4gIGVsc2VcbiAgICBzaG93KGFwcEVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudCkge1xuICBpZiAoIWFwcEVsZW1lbnQgJiYgIV9lbGVtZW50KVxuICAgIHRocm93IG5ldyBFcnJvcigncmVhY3QtbW9kYWw6IFlvdSBtdXN0IHNldCBhbiBlbGVtZW50IHdpdGggYE1vZGFsLnNldEFwcEVsZW1lbnQoZWwpYCB0byBtYWtlIHRoaXMgYWNjZXNzaWJsZScpO1xufVxuXG5mdW5jdGlvbiByZXNldEZvclRlc3RpbmcoKSB7XG4gIF9lbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbn1cblxuZXhwb3J0cy50b2dnbGUgPSB0b2dnbGU7XG5leHBvcnRzLnNldEVsZW1lbnQgPSBzZXRFbGVtZW50O1xuZXhwb3J0cy5zaG93ID0gc2hvdztcbmV4cG9ydHMuaGlkZSA9IGhpZGU7XG5leHBvcnRzLnJlc2V0Rm9yVGVzdGluZyA9IHJlc2V0Rm9yVGVzdGluZztcbiIsInZhciBmaW5kVGFiYmFibGUgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3RhYmJhYmxlJyk7XG52YXIgbW9kYWxFbGVtZW50ID0gbnVsbDtcbnZhciBmb2N1c0xhdGVyRWxlbWVudCA9IG51bGw7XG52YXIgbmVlZFRvRm9jdXMgPSBmYWxzZTtcblxuZnVuY3Rpb24gaGFuZGxlQmx1cihldmVudCkge1xuICBuZWVkVG9Gb2N1cyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvY3VzKGV2ZW50KSB7XG4gIGlmIChuZWVkVG9Gb2N1cykge1xuICAgIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG4gICAgaWYgKCFtb2RhbEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbmVlZCB0byBzZWUgaG93IGpRdWVyeSBzaGltcyBkb2N1bWVudC5vbignZm9jdXNpbicpIHNvIHdlIGRvbid0IG5lZWQgdGhlXG4gICAgLy8gc2V0VGltZW91dCwgZmlyZWZveCBkb2Vzbid0IHN1cHBvcnQgZm9jdXNpbiwgaWYgaXQgZGlkLCB3ZSBjb3VsZCBmb2N1c1xuICAgIC8vIHRoZSBlbGVtZW50IG91dHNpZGUgb2YgYSBzZXRUaW1lb3V0LiBTaWRlLWVmZmVjdCBvZiB0aGlzIGltcGxlbWVudGF0aW9uIFxuICAgIC8vIGlzIHRoYXQgdGhlIGRvY3VtZW50LmJvZHkgZ2V0cyBmb2N1cywgYW5kIHRoZW4gd2UgZm9jdXMgb3VyIGVsZW1lbnQgcmlnaHQgXG4gICAgLy8gYWZ0ZXIsIHNlZW1zIGZpbmUuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChtb2RhbEVsZW1lbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpXG4gICAgICAgIHJldHVybjtcbiAgICAgIHZhciBlbCA9IChmaW5kVGFiYmFibGUobW9kYWxFbGVtZW50KVswXSB8fCBtb2RhbEVsZW1lbnQpO1xuICAgICAgZWwuZm9jdXMoKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5leHBvcnRzLm1hcmtGb3JGb2N1c0xhdGVyID0gZnVuY3Rpb24oKSB7XG4gIGZvY3VzTGF0ZXJFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbn07XG5cbmV4cG9ydHMucmV0dXJuRm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBmb2N1c0xhdGVyRWxlbWVudC5mb2N1cygpO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKCdZb3UgdHJpZWQgdG8gcmV0dXJuIGZvY3VzIHRvICcrZm9jdXNMYXRlckVsZW1lbnQrJyBidXQgaXQgaXMgbm90IGluIHRoZSBET00gYW55bW9yZScpO1xuICB9XG4gIGZvY3VzTGF0ZXJFbGVtZW50ID0gbnVsbDtcbn07XG5cbmV4cG9ydHMuc2V0dXBTY29wZWRGb2N1cyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgbW9kYWxFbGVtZW50ID0gZWxlbWVudDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUJsdXIsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29uQmx1cicsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50KCdvbkZvY3VzJywgaGFuZGxlRm9jdXMpO1xuICB9XG59O1xuXG5leHBvcnRzLnRlYXJkb3duU2NvcGVkRm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgbW9kYWxFbGVtZW50ID0gbnVsbDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5kZXRhY2hFdmVudCgnb25CbHVyJywgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQuZGV0YWNoRXZlbnQoJ29uRm9jdXMnLCBoYW5kbGVGb2N1cyk7XG4gIH1cbn07XG5cblxuIiwidmFyIGZpbmRUYWJiYWJsZSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvdGFiYmFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihub2RlLCBldmVudCkge1xuICB2YXIgdGFiYmFibGUgPSBmaW5kVGFiYmFibGUobm9kZSk7XG4gIHZhciBmaW5hbFRhYmJhYmxlID0gdGFiYmFibGVbZXZlbnQuc2hpZnRLZXkgPyAwIDogdGFiYmFibGUubGVuZ3RoIC0gMV07XG4gIHZhciBsZWF2aW5nRmluYWxUYWJiYWJsZSA9IChcbiAgICBmaW5hbFRhYmJhYmxlID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IHx8XG4gICAgLy8gaGFuZGxlIGltbWVkaWF0ZSBzaGlmdCt0YWIgYWZ0ZXIgb3BlbmluZyB3aXRoIG1vdXNlXG4gICAgbm9kZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICApO1xuICBpZiAoIWxlYXZpbmdGaW5hbFRhYmJhYmxlKSByZXR1cm47XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHZhciB0YXJnZXQgPSB0YWJiYWJsZVtldmVudC5zaGlmdEtleSA/IHRhYmJhYmxlLmxlbmd0aCAtIDEgOiAwXTtcbiAgdGFyZ2V0LmZvY3VzKCk7XG59O1xuIiwiLyohXG4gKiBBZGFwdGVkIGZyb20galF1ZXJ5IFVJIGNvcmVcbiAqXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL2NhdGVnb3J5L3VpLWNvcmUvXG4gKi9cblxuZnVuY3Rpb24gZm9jdXNhYmxlKGVsZW1lbnQsIGlzVGFiSW5kZXhOb3ROYU4pIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKC9pbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9ufG9iamVjdC8udGVzdChub2RlTmFtZSkgP1xuICAgICFlbGVtZW50LmRpc2FibGVkIDpcbiAgICBcImFcIiA9PT0gbm9kZU5hbWUgP1xuICAgICAgZWxlbWVudC5ocmVmIHx8IGlzVGFiSW5kZXhOb3ROYU4gOlxuICAgICAgaXNUYWJJbmRleE5vdE5hTikgJiYgdmlzaWJsZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gaGlkZGVuKGVsKSB7XG4gIHJldHVybiAoZWwub2Zmc2V0V2lkdGggPD0gMCAmJiBlbC5vZmZzZXRIZWlnaHQgPD0gMCkgfHxcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHZpc2libGUoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSBicmVhaztcbiAgICBpZiAoaGlkZGVuKGVsZW1lbnQpKSByZXR1cm4gZmFsc2U7XG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdGFiYmFibGUoZWxlbWVudCkge1xuICB2YXIgdGFiSW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgaWYgKHRhYkluZGV4ID09PSBudWxsKSB0YWJJbmRleCA9IHVuZGVmaW5lZDtcbiAgdmFyIGlzVGFiSW5kZXhOYU4gPSBpc05hTih0YWJJbmRleCk7XG4gIHJldHVybiAoaXNUYWJJbmRleE5hTiB8fCB0YWJJbmRleCA+PSAwKSAmJiBmb2N1c2FibGUoZWxlbWVudCwgIWlzVGFiSW5kZXhOYU4pO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFiYmFibGVEZXNjZW5kYW50cyhlbGVtZW50KSB7XG4gIHJldHVybiBbXS5zbGljZS5jYWxsKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpLCAwKS5maWx0ZXIoZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gdGFiYmFibGUoZWwpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kVGFiYmFibGVEZXNjZW5kYW50cztcblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTW9kYWwnKTtcblxuIiwiLy8gaW1wb3J0IG5vZGUgbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCB7IE1hcCwgVGlsZUxheWVyLCBHZW9Kc29uIH0gZnJvbSAncmVhY3QtbGVhZmxldCc7XG5cbi8vIGltcG9ydCBjb21wb25lbnRzIGZyb20gQHBhbm9yYW1hL3Rvb2xraXRcbmltcG9ydCB7XG5cdEludHJvTWFuYWdlcixcblx0TGVnZW5kLFxuXHRQdW5jaGNhcmRcbn0gZnJvbSAnQHBhbm9yYW1hL3Rvb2xraXQnO1xuXG4vKlxuICogRGF0YSBmbG93IHZpYSBGbHV4OlxuICogaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vZmx1eC9kb2NzL292ZXJ2aWV3Lmh0bWxcbiAqIFxuICogICAgICAgICAgICAgICAgICDilIwtLS0tLSAgIGFjdGlvbnMgICA8LS0tLS3ilJBcbiAqICAgICAgICAgICAgICAgICAgdiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIGFjdGlvbnMgLS0+IGRpc3BhdGNoZXIgLS0+IHN0b3JlcyAtLT4gcm9vdCB2aWV3XG4gKi9cblxuLy8gc3RvcmVzXG5pbXBvcnQgRXhhbXBsZVN0b3JlIGZyb20gJy4vc3RvcmVzL0V4YW1wbGVTdG9yZSc7XG5cbi8vIGxvY2FsIChub3QgaW5zdGFsbGVkIHZpYSBucG0pIGNvbXBvbmVudHMgKHZpZXdzKVxuaW1wb3J0IEV4YW1wbGVDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0V4YW1wbGVDb21wb25lbnQuanN4JztcblxuLy8gVE9ETzogbW92ZSB0aGlzIHRvIGFub3RoZXIgcmVwbywgcHJvYmFibHkgQHBhbm9yYW1hL3Rvb2xraXRcbmltcG9ydCBDYXJ0b0RCVGlsZUxheWVyIGZyb20gJy4vY29tcG9uZW50cy9DYXJ0b0RCVGlsZUxheWVyLmpzeCc7XG5cbi8vIHV0aWxzXG4vLyBUT0RPOiByZWZhY3RvciB0byB1c2Ugc2FtZSBzdHJ1Y3R1cmUgYXMgUGFub3JhbWFEaXNwYXRjaGVyO1xuLy8gSGF2aW5nIGBmbHV4YCBhcyBhIGRlcGVuZGVuY3ksIGFuZCB0d28gZGlmZmVyZW50IGZpbGVzLCBpcyBvdmVya2lsbC5cbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJy4vdXRpbHMvQXBwRGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBBcHBBY3Rpb25UeXBlcywgRXhhbXBsZUFjdGlvbnMgfSBmcm9tICcuL3V0aWxzL0FwcEFjdGlvbkNyZWF0b3InO1xuXG4vLyBjb25maWdcbmltcG9ydCB0aWxlTGF5ZXJzIGZyb20gJy4uL2Jhc2VtYXBzL3RpbGVMYXllcnMuanNvbic7XG5pbXBvcnQgY2FydG9kYkNvbmZpZyBmcm9tICcuLi9iYXNlbWFwcy9jYXJ0b2RiL2NvbmZpZy5qc29uJztcbmltcG9ydCBjYXJ0b2RiTGF5ZXJzIGZyb20gJy4uL2Jhc2VtYXBzL2NhcnRvZGIvYmFzZW1hcHMuanNvbic7XG5cblxuLy8gbWFpbiBhcHAgY29udGFpbmVyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yIChwcm9wcykge1xuXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gc2V0IHVwIGluaXRpYWwgc3RhdGUgaW4gY29uc3RydWN0b3Jcblx0XHQvLyAoaW5zdGVhZCBvZiBFUzUtc3R5bGUgZ2V0SW5pdGlhbFN0YXRlKVxuXHRcdHRoaXMuc3RhdGUgPSB0aGlzLmdldERlZmF1bHRTdGF0ZSgpO1xuXG5cdFx0Ly8gYmluZCBoYW5kbGVycyB0byB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZSxcblx0XHQvLyBzaW5jZSBSZWFjdCBubyBsb25nZXIgZG9lcyB0aGlzIGF1dG9tYXRpY2FsbHkgd2hlbiB1c2luZyBFUzZcblx0XHR0aGlzLnN0b3JlQ2hhbmdlZCA9IHRoaXMuc3RvcmVDaGFuZ2VkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbkxlZ2VuZEl0ZW1TZWxlY3RlZCA9IHRoaXMub25MZWdlbmRJdGVtU2VsZWN0ZWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uV2luZG93UmVzaXplID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlQWJvdXQgPSB0aGlzLnRvZ2dsZUFib3V0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy50cmlnZ2VySW50cm8gPSB0aGlzLnRyaWdnZXJJbnRyby5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25JbnRyb0V4aXQgPSB0aGlzLm9uSW50cm9FeGl0LmJpbmQodGhpcyk7XG5cblx0fVxuXG5cblxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblx0Ly8gUmVhY3QgTGlmZWN5Y2xlXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXG5cdGdldERlZmF1bHRTdGF0ZSAoKSB7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGltZW5zaW9uczoge1xuXHRcdFx0XHR1cHBlckxlZnQ6IHtcblx0XHRcdFx0XHR3aWR0aDogMCxcblx0XHRcdFx0XHRoZWlnaHQ6IDBcblx0XHRcdFx0fSxcblx0XHRcdFx0dXBwZXJSaWdodDoge1xuXHRcdFx0XHRcdHdpZHRoOiAwLFxuXHRcdFx0XHRcdGhlaWdodDogMFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c2VsZWN0ZWRJdGVtOiAwXG5cdFx0fTtcblxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50ICgpIHtcblxuXHRcdHRoaXMuY29tcHV0ZUNvbXBvbmVudERpbWVuc2lvbnMoKTtcblxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQgKCkge1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuXG5cdFx0Y29uc29sZS5sb2coYFdlbGNvbWUgdG8geW91ciBGbHV4IHRvdXIuIFdhdGNoIHRoZSBkYXRhIGZsb3cuLi5gKTtcblx0XHRjb25zb2xlLmxvZyhgWzFhXSBBcHAgbGlzdGVucyBmb3IgY2hhbmdlIGV2ZW50cyBkaXNwYXRjaGVkIGZyb20gRXhhbXBsZVN0b3JlLmApO1xuXHRcdEV4YW1wbGVTdG9yZS5hZGRMaXN0ZW5lcihBcHBBY3Rpb25UeXBlcy5zdG9yZUNoYW5nZWQsIHRoaXMuc3RvcmVDaGFuZ2VkKTtcblx0XHRcblx0XHRjb25zb2xlLmxvZyhgWzFiXSBBcHAgcmVxdWVzdHMgaW5pdGlhbCBkYXRhIGluIEFwcC5jb21wb25lbnREaWRNb3VudCgpLmApO1xuXHRcdEV4YW1wbGVBY3Rpb25zLmdldEluaXRpYWxEYXRhKHRoaXMuc3RhdGUpO1xuXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cblx0XHRFeGFtcGxlU3RvcmUucmVtb3ZlTGlzdGVuZXIoQXBwQWN0aW9uVHlwZXMuc3RvcmVDaGFuZ2VkLCB0aGlzLnN0b3JlQ2hhbmdlZCk7XG5cblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG5cblx0XHQvL1xuXG5cdH1cblxuXG5cblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cdC8vIEhhbmRsZXJzXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXG5cdHN0b3JlQ2hhbmdlZCAoKSB7XG5cblx0XHRjb25zb2xlLmxvZyhgWzRdIFRoZSBkYXRhIHJlcXVlc3RlZCBvbiBhcHAgaW5pdCBsYW5kIGluIHRoZSByb290IHZpZXcgKEFwcC5zdG9yZUNoYW5nZWQpLCBmcm9tIHdoZXJlIHRoZXkgd2lsbCBmbG93IGRvd24gdGhlIGNvbXBvbmVudCB0cmVlLiBBIHNldFN0YXRlKCkgY2FsbCB1cGRhdGVzIHRoZSBkYXRhIGFuZCB0cmlnZ2VycyBhIHJlbmRlcigpLmApO1xuXG5cdFx0bGV0IGRhdGEgPSBFeGFtcGxlU3RvcmUuZ2V0RGF0YSgpO1xuXG5cdFx0Ly8gc2V0U3RhdGUgd2l0aCB0aGUgdXBkYXRlZCBkYXRhLCB3aGljaCBjYXVzZXMgYSByZS1yZW5kZXIoKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZXhhbXBsZUNvbXBvbmVudDoge1xuXHRcdFx0XHR0aXRsZTogZGF0YS5leGFtcGxlVGl0bGUsXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0bGVnZW5kOiBkYXRhLmxlZ2VuZCxcblx0XHRcdHB1bmNoY2FyZDogZGF0YS5wdW5jaGNhcmRcblx0XHR9KTtcblxuXHR9XG5cblx0b25MZWdlbmRJdGVtU2VsZWN0ZWQgKHZhbHVlLCBpbmRleCkge1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZEl0ZW06IGluZGV4LFxuXHRcdFx0bGVnZW5kOiB7XG5cdFx0XHRcdC4uLnRoaXMuc3RhdGUubGVnZW5kLFx0Ly8gbWVyZ2UgZXhpc3Rpbmcgc3RhdGUgaW50byBuZXcgc3RhdGVcblx0XHRcdFx0c2VsZWN0ZWRJdGVtOiB2YWx1ZVxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHR9XG5cblx0b25XaW5kb3dSZXNpemUgKGV2ZW50KSB7XG5cblx0XHR0aGlzLmNvbXB1dGVDb21wb25lbnREaW1lbnNpb25zKCk7XG5cblx0fVxuXG5cdHRvZ2dsZUFib3V0ICgpIHtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWJvdXRNb2RhbE9wZW46ICF0aGlzLnN0YXRlLmFib3V0TW9kYWxPcGVuXG5cdFx0fSk7XG5cblx0fVxuXG5cdHRyaWdnZXJJbnRybyAoZXZlbnQpIHtcblxuXHRcdGlmICh0aGlzLnN0YXRlLmFib3V0TW9kYWxPcGVuKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUFib3V0KCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpbnRybzoge1xuXHRcdFx0XHRvcGVuOiB0cnVlLFxuXHRcdFx0XHRzdGVwOiAoZXZlbnQgJiYgZXZlbnQuY3VycmVudFRhcmdldCkgPyBwYXJzZUludChldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc3RlcCkgOiBudWxsLFxuXHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRzaG93U3RlcE51bWJlcnM6IGZhbHNlLFxuXHRcdFx0XHRcdHNraXBMYWJlbDogJ8OXJyxcblx0XHRcdFx0XHRuZXh0TGFiZWw6ICfin6knLFxuXHRcdFx0XHRcdHByZXZMYWJlbDogJ+KfqCcsXG5cdFx0XHRcdFx0ZG9uZUxhYmVsOiAnw5cnXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0c3RlcHM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRlbGVtZW50OiAnLmxlZnQtY29sdW1uIC50b3Atcm93LnRlbXBsYXRlLXRpbGUnLFxuXHRcdFx0XHRcdFx0aW50cm86ICdjb3B5IGZvciBzdGVwIE9ORSBnb2VzIGhlcmUnLFxuXHRcdFx0XHRcdFx0cG9zaXRpb246ICdyaWdodCdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGVsZW1lbnQ6ICcubGVmdC1jb2x1bW4gLmJvdHRvbS1yb3cudGVtcGxhdGUtdGlsZScsXG5cdFx0XHRcdFx0XHRpbnRybzogJ2NvcHkgZm9yIHN0ZXAgVFdPIGdvZXMgaGVyZScsXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogJ3RvcCdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGVsZW1lbnQ6ICcucmlnaHQtY29sdW1uIC50b3Atcm93LnRlbXBsYXRlLXRpbGUnLFxuXHRcdFx0XHRcdFx0aW50cm86ICdjb3B5IGZvciBzdGVwIFRIUkVFIGdvZXMgaGVyZScsXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogJ2xlZnQnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRlbGVtZW50OiAnLnJpZ2h0LWNvbHVtbiAuYm90dG9tLXJvdy50ZW1wbGF0ZS10aWxlJyxcblx0XHRcdFx0XHRcdGludHJvOiAnY29weSBmb3Igc3RlcCBGT1VSIGdvZXMgaGVyZScsXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogJ3RvcCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXG5cdFx0XHRvbkV4aXQ6IHRoaXMub25JbnRyb0V4aXRcblx0XHR9KTtcblxuXHR9XG5cblx0b25JbnRyb0V4aXQgKCkge1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpbnRybzoge1xuXHRcdFx0XHRvcGVuOiBmYWxzZVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH1cblxuXG5cblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cdC8vIEhlbHBlcnNcblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cblx0Y29tcHV0ZUNvbXBvbmVudERpbWVuc2lvbnMgKCkge1xuXG5cdFx0Ly8gYmFzZWQgb2ZmIG9mIHNpemVzIHN0b3JlZCB3aXRoaW4gX3ZhcmlhYmxlcy5zY3NzIC0tXG5cdFx0Ly8gaWYgeW91IGNoYW5nZSB0aGVtIHRoZXJlLCBjaGFuZ2UgdGhlbSBoZXJlLlxuXHRcdGxldCBjb250YWluZXJQYWRkaW5nID0gMjAsXG5cdFx0XHRoZWFkZXJIZWlnaHQgPSA5MCxcblx0XHRcdGJyZWFrcG9pbnRXaWR0aFdpZGUgPSAxMjgwLFxuXHRcdFx0Ym90dG9tUm93SGVpZ2h0U2hvcnQgPSAyMzAsXG5cdFx0XHRib3R0b21Sb3dIZWlnaHRUYWxsID0gMzEwLFxuXHRcdFx0Ym90dG9tUm93SGVpZ2h0LFxuXHRcdFx0ZGltZW5zaW9ucyA9IHt9O1xuXG5cdFx0Ly8gQ2FsY3VsYXRlIGJvdHRvbSByb3cgaGVpZ2h0IGFzIHNldCBieSBtZWRpYSBicmVha3BvaW50c1xuXHRcdGxldCBib3R0b21Sb3dFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20tcm93JyksXG5cdFx0XHRib3R0b21Sb3dIZWlnaHRTdHlsZTtcblxuXHRcdGlmIChib3R0b21Sb3dFbCkge1xuXHRcdFx0Ym90dG9tUm93SGVpZ2h0U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib3R0b21Sb3dFbCk7XG5cdFx0XHRib3R0b21Sb3dIZWlnaHQgPSBib3R0b21Sb3dFbC5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KGJvdHRvbVJvd0hlaWdodFN0eWxlLm1hcmdpblRvcC5yZXBsYWNlKCdweCcsICcnKSkgKyBwYXJzZUZsb2F0KGJvdHRvbVJvd0hlaWdodFN0eWxlLm1hcmdpbkJvdHRvbS5yZXBsYWNlKCdweCcsICcnKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJvdHRvbVJvd0hlaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIDwgYnJlYWtwb2ludFdpZHRoV2lkZSA/IGJvdHRvbVJvd0hlaWdodFNob3J0IDogYm90dG9tUm93SGVpZ2h0VGFsbDtcblx0XHR9XG5cblx0XHRkaW1lbnNpb25zLnVwcGVyUmlnaHQgPSB7XG5cdFx0XHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIGJvdHRvbVJvd0hlaWdodCAtIDMgKiBjb250YWluZXJQYWRkaW5nXG5cdFx0fTtcblx0XHRkaW1lbnNpb25zLnVwcGVyTGVmdCA9IHtcblx0XHRcdGhlaWdodDogZGltZW5zaW9ucy51cHBlclJpZ2h0LmhlaWdodCAtIGhlYWRlckhlaWdodFxuXHRcdH07XG5cdFx0ZGltZW5zaW9ucy5sb3dlckxlZnQgPSB7XG5cdFx0XHRoZWlnaHQ6IGJvdHRvbVJvd0hlaWdodCAtIDIgKiBjb250YWluZXJQYWRkaW5nXG5cdFx0fTtcblx0XHRkaW1lbnNpb25zLmxvd2VyUmlnaHQgPSB7XG5cdFx0XHRoZWlnaHQ6IGRpbWVuc2lvbnMubG93ZXJMZWZ0LmhlaWdodFxuXHRcdH07XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgZGltZW5zaW9uczogZGltZW5zaW9ucyB9KTtcblxuXHR9XG5cblxuXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXHQvLyBSZW5kZXIgZnVuY3Rpb25zXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXG5cdHJlbmRlclRpbGVMYXllcnMgKCkge1xuXG5cdFx0bGV0IGxheWVycyA9IFtdO1xuXG5cdFx0aWYgKGNhcnRvZGJMYXllcnMubGF5ZXJncm91cCAmJiBjYXJ0b2RiTGF5ZXJzLmxheWVyZ3JvdXAubGF5ZXJzKSB7XG5cdFx0XHRsYXllcnMgPSBsYXllcnMuY29uY2F0KGNhcnRvZGJMYXllcnMubGF5ZXJncm91cC5sYXllcnMubWFwKChpdGVtLCBpKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PENhcnRvREJUaWxlTGF5ZXJcblx0XHRcdFx0XHRcdGtleT17ICdjYXJ0b2RiLXRpbGUtbGF5ZXItJyArIGkgfVxuXHRcdFx0XHRcdFx0dXNlcklkPXsgY2FydG9kYkNvbmZpZy51c2VySWQgfVxuXHRcdFx0XHRcdFx0c3FsPXsgaXRlbS5vcHRpb25zLnNxbCB9XG5cdFx0XHRcdFx0XHRjYXJ0b2Nzcz17IGl0ZW0ub3B0aW9ucy5jYXJ0b2NzcyB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH0pKTtcblx0XHR9XG5cblx0XHRpZiAodGlsZUxheWVycy5sYXllcnMpIHtcblx0XHRcdGxheWVycyA9IGxheWVycy5jb25jYXQodGlsZUxheWVycy5sYXllcnMubWFwKChpdGVtLCBpKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PFRpbGVMYXllclxuXHRcdFx0XHRcdFx0a2V5PXsgJ3RpbGUtbGF5ZXItJyArIGkgfVxuXHRcdFx0XHRcdFx0dXJsPXsgaXRlbS51cmwgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxheWVycztcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cblx0XHQvLyBUT0RPOiB0aGVzZSB2YWx1ZXMgbmVlZCB0byBnbyBlbHNld2hlcmUsIHByb2JhYmx5IGluIGEgY29tcG9uZW50aXplZCBoYXNoIHBhcnNlci9tYW5hZ2VyXG5cdFx0bGV0IGxvYyA9IFstNS4yMDAsIDAuMzMwXSxcblx0XHRcdHpvb20gPSA1LFxuXG5cdFx0XHRtb2RhbFN0eWxlID0ge1xuXHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRjb250ZW50IDoge1xuXHRcdFx0XHRcdHRvcDogbnVsbCxcblx0XHRcdFx0XHRsZWZ0OiBudWxsLFxuXHRcdFx0XHRcdHJpZ2h0OiBudWxsLFxuXHRcdFx0XHRcdGJvdHRvbTogbnVsbCxcblx0XHRcdFx0XHRib3JkZXI6IG51bGwsXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbnVsbCxcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IG51bGwsXG5cdFx0XHRcdFx0cGFkZGluZzogbnVsbCxcblx0XHRcdFx0XHRwb3NpdGlvbjogbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgZnVsbC1oZWlnaHQnPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgZnVsbC1oZWlnaHQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zIGVpZ2h0IGxlZnQtY29sdW1uIGZ1bGwtaGVpZ2h0Jz5cblx0XHRcdFx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPSdyb3cgdS1mdWxsLXdpZHRoJz5cblx0XHRcdFx0XHRcdFx0PGgxPjxzcGFuIGNsYXNzTmFtZT0naGVhZGVyLW1haW4nPlBBTk9SQU1BIFRFTVBMQVRFPC9zcGFuPjwvaDE+XG5cdFx0XHRcdFx0XHRcdDxoNCBvbkNsaWNrPXsgdGhpcy50b2dnbGVBYm91dCB9PkFCT1VUIFRISVMgTUFQPC9oND5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpbnRyby1idXR0b25cIiBkYXRhLXN0ZXA9XCIwXCIgb25DbGljaz17IHRoaXMudHJpZ2dlckludHJvIH0+PHNwYW4gY2xhc3NOYW1lPSdpY29uIGluZm8nLz48L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JvdyB0b3Atcm93IHRlbXBsYXRlLXRpbGUnIHN0eWxlPXsgeyBoZWlnaHQ6IHRoaXMuc3RhdGUuZGltZW5zaW9ucy51cHBlckxlZnQuaGVpZ2h0ICsgXCJweFwiIH0gfT5cblx0XHRcdFx0XHRcdFx0PE1hcCBjZW50ZXI9eyBsb2MgfSB6b29tPXsgem9vbSB9PlxuXHRcdFx0XHRcdFx0XHRcdHsgdGhpcy5yZW5kZXJUaWxlTGF5ZXJzKCkgfVxuXHRcdFx0XHRcdFx0XHQ8L01hcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBib3R0b20tcm93IHRlbXBsYXRlLXRpbGUnPlxuXHRcdFx0XHRcdFx0XHQ8aDI+TG9jYWwgY29tcG9uZW50OjwvaDI+XG5cdFx0XHRcdFx0XHRcdDxFeGFtcGxlQ29tcG9uZW50IHsgLi4udGhpcy5zdGF0ZS5leGFtcGxlQ29tcG9uZW50IH0gLz5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpbnRyby1idXR0b25cIiBkYXRhLXN0ZXA9XCIxXCIgb25DbGljaz17IHRoaXMudHJpZ2dlckludHJvIH0+PHNwYW4gY2xhc3NOYW1lPSdpY29uIGluZm8nLz48L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zIGZvdXIgcmlnaHQtY29sdW1uIGZ1bGwtaGVpZ2h0Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgdG9wLXJvdyB0ZW1wbGF0ZS10aWxlJyBzdHlsZT17IHsgaGVpZ2h0OiB0aGlzLnN0YXRlLmRpbWVuc2lvbnMudXBwZXJSaWdodC5oZWlnaHQgKyBcInB4XCIgfSB9PlxuXHRcdFx0XHRcdFx0XHR7IHRoaXMuc3RhdGUucHVuY2hjYXJkID8gPFB1bmNoY2FyZCB7IC4uLnRoaXMuc3RhdGUucHVuY2hjYXJkW3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtXSB9IC8+IDogJycgfVxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImludHJvLWJ1dHRvblwiIGRhdGEtc3RlcD1cIjJcIiBvbkNsaWNrPXsgdGhpcy50cmlnZ2VySW50cm8gfT48c3BhbiBjbGFzc05hbWU9J2ljb24gaW5mbycvPjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IGJvdHRvbS1yb3cgdGVtcGxhdGUtdGlsZSc+XG5cdFx0XHRcdFx0XHRcdDxoMj5JbXBvcnRlZCBjb21wb25lbnQ6PC9oMj5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnN0YXRlLmxlZ2VuZCA/IDxMZWdlbmQgeyAuLi50aGlzLnN0YXRlLmxlZ2VuZCB9IG9uSXRlbVNlbGVjdGVkPXsgdGhpcy5vbkxlZ2VuZEl0ZW1TZWxlY3RlZCB9Lz4gOiAnJyB9XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaW50cm8tYnV0dG9uXCIgZGF0YS1zdGVwPVwiM1wiIG9uQ2xpY2s9eyB0aGlzLnRyaWdnZXJJbnRybyB9PjxzcGFuIGNsYXNzTmFtZT0naWNvbiBpbmZvJy8+PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PE1vZGFsIGlzT3Blbj17IHRoaXMuc3RhdGUuYWJvdXRNb2RhbE9wZW4gfSBvblJlcXVlc3RDbG9zZT17IHRoaXMudG9nZ2xlQWJvdXQgfSBzdHlsZT17IG1vZGFsU3R5bGUgfT5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17IHRoaXMudG9nZ2xlQWJvdXQgfT48c3Bhbj7Dlzwvc3Bhbj48L2J1dHRvbj5cblx0XHRcdFx0XHQ8aDM+QWJvdXQgdGhpcyBNYXA8L2gzPlxuXHRcdFx0XHRcdDxwPlRoZSBzdWJ0aXRsZSBpcyBib3Jyb3dlZCBmcm9tIGhpc3RvcmlhbiBSb2JpbiBELkcuIEtlbGxleSwgd2hvIGJlZ2lucyBvbmUgb2YgaGlzIGVzc2F5cyB3aXRoIHRoZSBxdWVzdGlvbiBcIldoYXQgaXMgdGhlIFVuaXRlZCBTdGF0ZXMsIGlmIG5vdCBhIG5hdGlvbiBvZiBvdmVybGFwcGluZyBkaWFzcG9yYXM/XCIgQXQgYWxsIHBvaW50cyBpbiBpdHMgaGlzdG9yeSwgYSBzaWduaWZpY2FudCBwcm9wb3J0aW9uIG9mIHRoZSBwb3B1bGF0aW9uIG9mIHRoZSBVbml0ZWQgU3RhdGVzIGhhZCBiZWVuIGJvcm4gaW4gb3RoZXIgY291bnRyaWVzIGFuZCByZWdpb25zLiBUaGlzIGJlaW5nIHRoZSBjYXNlLCBBbWVyaWNhbiBoaXN0b3J5IGNhbiBuZXZlciBiZSB1bmRlcnN0b29kIGJ5IGp1c3QgbG9va2luZyB3aXRoaW4gaXRzIGJvcmRlcnMuIFRoZSBjdWx0dXJlIGFuZCBwb2xpdGljcyBvZiB0aGUgVVMgaGF2ZSBhbHdheXMgYmVlbiBwcm9mb3VuZGx5IHNoYXBlZCBieSB0aGUgbWF0ZXJpYWwgYW5kIGVtb3Rpb25hbCB0aWVzIG1hbnkgb2YgaXRzIHJlc2lkZW50cyBoYXZlIGhhZCB0byB0aGUgcGxhY2VzIHdoZXJlIHRoZXkgd2VyZSBib3JuLiBUaGlzIG1hcCB3aWxsIGFsbG93IHlvdSB0byBiZWdpbiB0byBleHBsb3JlIHRob3NlIGNvbm5lY3Rpb25zIGF0IHRoZSBiYXNpYyBsZXZlbCBvZiBkZW1vZ3JhcGhpYyBzdGF0aXN0aWNzLiA8L3A+XG5cdFx0XHRcdFx0PGgzPlNvdXJjZXM8L2gzPlxuXHRcdFx0XHRcdDxwPkFsbCBvZiB0aGUgZGF0YSBjb21lcyBmcm9tIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lm5oZ2lzLm9yZy8nPk1pbm5lc290YSBQb3B1bGF0aW9uIENlbnRlciwgTmF0aW9uYWwgSGlzdG9yaWNhbCBHZW9ncmFwaGljIEluZm9ybWF0aW9uIFN5c3RlbTogVmVyc2lvbiAyLjAgKE1pbm5lYXBvbGlzLCBNTjogVW5pdmVyc2l0eSBvZiBNaW5uZXNvdGEsIDIwMTEpPC9hPi4gQ291bnR5IGJvdW5kYXJpZXMgYXJlIGZyb20gdGhlIE5ld2JlcnJ5IExpYnJhcnkncyA8YSBocmVmPSdodHRwOi8vcHVibGljYXRpb25zLm5ld2JlcnJ5Lm9yZy9haGNicC8nPkF0bGFzIG9mIEhpc3RvcmljYWwgQ291bnR5IEJvdW5kYXJpZXM8L2E+LjwvcD5cblx0XHRcdFx0XHQ8aDM+U3VnZ2VzdGVkIFJlYWRpbmc8L2gzPlxuXHRcdFx0XHRcdDxwPk11Y2ggb2YgdGhlIGJlc3Qgc2Nob2xhcnNoaXAgb24gdGhlIGZvcmVpZ24gYm9ybiBjb25jZW50cmF0ZXMgb24gcGFydGljdWxhciBncm91cHMgYXQgc3BlY2lmaWMgbW9tZW50cyBpbiB0aW1lLCB3b3JrcyBsaWtlIEdlb3JnZSBKLiBTYW5jaGV6J3MgPGNpdGU+QmVjb21pbmcgTWV4aWNhbiBBbWVyaWNhbjogRXRobmljaXR5LCBDdWx0dXJlIGFuZCBJZGVudGl0eSBpbiBDaGljYW5vIExvcyBBbmdlbGVzLCAxOTAwLTE5NDU8L2NpdGU+LiBTb21lIHRob3VnaHRmdWwgd29ya3MgdGhhdCBkZWFsIHdpdGggdGhlIGZvcmVpZ24tYm9ybiBwb3B1bGF0aW9uIGFuZCBpc3N1ZXMgb2YgbWlncmF0aW9uIG1vcmUgZ2VuZXJhbGx5IGFyZTo8L3A+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpPlJvZ2VyIERhbmllbHMsIDxjaXRlPkNvbWluZyB0byBBbWVyaWNhOiBBIEhpc3Rvcnkgb2YgSW1taWdyYXRpb24gYW5kIEV0aG5pY2l0eSBpbiBBbWVyaWNhbiBMaWZlPC9jaXRlPiAoTmV3IFlvcms6IEhhcnBlciBDb2xsaW5zLCAxOTkwKS48L2xpPlxuXHRcdFx0XHRcdFx0PGxpPlRob21hcyBCZW5kZXIsIGVkLiA8Y2l0ZT5SZXRoaW5raW5nIEFtZXJpY2FuIEhpc3RvcnkgaW4gYSBHbG9iYWwgQWdlPC9jaXRlPiAoQmVya2VsZXksIENBOiBVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEgUHJlc3MsIDIwMDIpLiBbS2VsbGV5J3MgZXNzYXkgXCJIb3cgdGhlIFdlc3QgV2FzIE9uZTogVGhlIEFmcmljYW4gRGlhc3BvcmEgYW5kIHRoZSBSZW1hcHBpbmcgb2YgVS5TLiBIaXN0b3J5XCIgaXMgaW4gdGhpcyBjb2xsZWN0aW9uLl08L2xpPlxuXHRcdFx0XHRcdFx0PGxpPkhlbnJ5IFl1LCBcIkxvcyBBbmdlbGVzIGFuZCBBbWVyaWNhbiBTdHVkaWVzIGluIGEgUGFjaWZpYyBXb3JsZCBvZiBNaWdyYXRpb25zLFwiIDxjaXRlPkFtZXJpY2FuIFF1YXJ0ZXJseTwvY2l0ZT4gNTYgKFNlcHRlbWJlciAyMDA0KSA1MzEtNTQzLjwvbGk+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDxoMz5BY2tub3dsZWRnZW1lbnRzPC9oMz5cblx0XHRcdFx0XHQ8cD5UaGlzIG1hcCBpcyBhdXRob3JlZCBieSB0aGUgc3RhZmYgb2YgdGhlIERpZ2l0YWwgU2Nob2xhcnNoaXAgTGFiOiBSb2JlcnQgSy4gTmVsc29uLCBTY290dCBOZXNiaXQsIEVkd2FyZCBMLiBBeWVycywgSnVzdGluIE1hZHJvbiwgYW5kIE5hdGhhbmllbCBBeWVycy4gS2ltIEQnYWdvc3RpbmkgYW5kIEVyaWNhIEhhdmVucyBnZW9sb2NhdGVkIGNvdW50cnkgbG9jYXRpb25zLjwvcD5cblx0XHRcdFx0XHQ8cD5UaGUgZGV2ZWxvcGVycywgZGVzaWduZXJzLCBhbmQgc3RhZmYgYXQgU3RhbWVuIERlc2lnbiBoYXZlIGJlZW4gZXhjZXB0aW9uYWwgcGFydG5lcnMgb24gdGhpcyBwcm9qZWN0LiBPdXIgdGhhbmtzIHRvIEthaSBDaGFuZywgSm9uIENocmlzdGVuc2VuLCBTZXRoIEZpdHpzaW1tb25zLCBFcmljIEdlbGluYXMsIFNlYW4gQ29ubmVsbGV5LCBOaWNvbGV0dGUgSGF5ZXMsIEFsYW4gTWNDb25jaGllLCBNaWNoYWVsIE5ldW1hbiwgRGFuIFJhZGVtYWNoZXIsIGFuZCBFcmljIFJvZGVuYmVjay48L3A+XG5cdFx0XHRcdDwvTW9kYWw+XG5cblx0XHRcdFx0PEludHJvTWFuYWdlciB7IC4uLnRoaXMuc3RhdGUuaW50cm8gfSAvPlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCIvKlxuICogVE9ETzogU3VibWl0IHRoaXMgY29tcG9uZW50IGFzIGEgUFIgdG8gcmVhY3QtbGVhZmxldCxcbiAqIGluc3RlYWQgb2YgYWRkaW5nIHRvIEBwYW5vcmFtYS5cbiAqIE1pZ2h0IG5lZWQgdG8gc3VibWl0IHdpdGggdGVzdHMsIGJ1dCBvdGhlciBzaW1pbGFyIGNvbXBvbmVudHMgYXJlIG5vdCBjdXJyZW50bHkgdGVzdGVkLlxuICogV2lsbCBuZWVkIHRvIHB1bGwgaW4gQ2FydG9EQiBkZXBlbmRlbmN5IHZpYSBhbiBgbnBtIGluc3RhbGxgIGFuZCBhbiBgaW1wb3J0YFxuICogcmF0aGVyIHRoYW4gdmlhIGEgZ2xvYmFsIDxzY3JpcHQ+IGluY2x1ZGUuXG4gKi9cblxuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdGlsZUxheWVyIH0gZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyBCYXNlVGlsZUxheWVyIH0gZnJvbSAncmVhY3QtbGVhZmxldCc7XG5cbi8vIE5vdCBwb3NzaWJsZSB1bnRpbCBDYXJ0b0RCIHJlbGVhc2VzIGFuIG5wbSBwYWNrYWdlIGZvciB0aGUgQ29yZSBBUEkuXG4vLyBpbXBvcnQgeyBUaWxlcyB9IGZyb20gJ2NhcnRvZGInO1xuXG4vLyBVbnRpbCB0aGVuLCBjb25zdW1lciBhcHBsaWNhdGlvbnMgbXVzdCBpbmNsdWRlIHRoZSBjYXJ0b2RiLmpzIHNjcmlwdCBlbHNld2hlcmUsXG4vLyBlLmcuIGluIGluZGV4Lmh0bWwgYXMgPHNjcmlwdCBzcmM9XCJodHRwOi8vbGlicy5jYXJ0b2Nkbi5jb20vY2FydG9kYi5qcy92My8zLjE1L2NhcnRvZGIuY29yZS5qc1wiPjwvc2NyaXB0PlxuY29uc3QgVGlsZXMgPSBjYXJ0b2RiLlRpbGVzO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRvREJUaWxlTGF5ZXIgZXh0ZW5kcyBCYXNlVGlsZUxheWVyIHtcblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdHVzZXJJZDogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRzcWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0Y2FydG9jc3M6IFByb3BUeXBlcy5zdHJpbmdcblx0fTtcblxuXHRjb21wb25lbnRXaWxsTW91bnQgKCkge1xuXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0dGhpcy5sZWFmbGV0RWxlbWVudCA9IHRpbGVMYXllcignJywgdGhpcy5wcm9wcyk7XG5cblx0XHR0aGlzLl9nZXRDYXJ0b0RCVGlsZXNUZW1wbGF0ZXMoZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdC8vIFRPRE86IGhhbmRsZSBlcnJvclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubGVhZmxldEVsZW1lbnQuc2V0VXJsKHJlc3BvbnNlLnRpbGVzWzBdKTtcblx0XHRcdH1cblx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0X2dldENhcnRvREJUaWxlc1RlbXBsYXRlcyAoY2FsbGJhY2spIHtcblx0XHRUaWxlcy5nZXRUaWxlcyh7XG5cdFx0XHR0eXBlOiAnY2FydG9kYicsXG5cdFx0XHR1c2VyX25hbWU6IHRoaXMucHJvcHMudXNlcklkLFxuXHRcdFx0c3VibGF5ZXJzOiBbe1xuXHRcdFx0XHRcInNxbFwiOiB0aGlzLnByb3BzLnNxbCxcblx0XHRcdFx0XCJjYXJ0b2Nzc1wiOiB0aGlzLnByb3BzLmNhcnRvY3NzXG5cdFx0XHR9XVxuXHRcdH0sXG5cblx0XHRmdW5jdGlvbiAodGlsZXMsIGVycm9yKSB7XG5cdFx0XHRpZiAoIXRpbGVzIHx8IGVycm9yKSB7XG5cdFx0XHRcdGlmICghZXJyb3IpIHtcblx0XHRcdFx0XHRlcnJvciA9IFwiRW1wdHkgcmVzcG9uc2UuXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FsbGJhY2soZXJyb3IsIHRpbGVzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhbGxiYWNrKG51bGwsIHRpbGVzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXhhbXBsZVN0b3JlIGZyb20gJy4uL3N0b3Jlcy9FeGFtcGxlU3RvcmUnO1xuaW1wb3J0IHsgQXBwQWN0aW9uVHlwZXMgfSBmcm9tICcuLi91dGlscy9BcHBBY3Rpb25DcmVhdG9yJztcblxuLyoqXG4gKiBBbiBleHRyZW1lbHkgbWluaW1hbCBjb21wb25lbnQsXG4gKiBkZXNpZ25lZCBhcyBib2lsZXJwbGF0ZSBmb3IgbmV3IGNvbXBvbmVudHNcbiAqIGFuZCB0byBkZW1vbnN0cmF0ZSBkYXRhIGZsb3cgdGhyb3VnaCBhIFJlYWN0L0ZsdXggYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGVDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdC8vIHByb3BlcnR5IHZhbGlkYXRpb25cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHR0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0XHRsb2FkaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxuXHR9O1xuXG5cdC8vIHByb3BlcnR5IGRlZmF1bHRzIChFUzctc3R5bGUgUmVhY3QpXG5cdC8vIChpbnN0ZWFkIG9mIEVTNS1zdHlsZSBnZXREZWZhdWx0UHJvcHMpXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0dGl0bGU6ICdEZWZhdWx0IFRpdGxlJyxcblx0XHRsb2FkaW5nOiB0cnVlXG5cdH07XG5cblx0Y29uc3RydWN0b3IgKHByb3BzKSB7XG5cblx0XHRzdXBlcihwcm9wcyk7XG5cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG5cblx0XHQvL1xuXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCAoKSB7XG5cblx0XHQvL1xuXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cblx0XHQvL1xuXG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUgKCkge1xuXG5cdFx0Ly9cblxuXHR9XG5cblx0cmVuZGVyICgpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZXhhbXBsZS1jb21wb25lbnQnPlxuXHRcdFx0XHQ8aDM+eyB0aGlzLnByb3BzLnRpdGxlIH08L2gzPlxuXHRcdFx0XHQ8cD5Jbml0aWFsIGRhdGEgbG9hZCB7IHRoaXMucHJvcHMubG9hZGluZyA/ICdwZW5kaW5nLi4uJyA6ICdjb21wbGV0ZSEnIH08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5qc3gnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpKTtcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICcuLi91dGlscy9BcHBEaXNwYXRjaGVyJztcbmltcG9ydCB7IEFwcEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vdXRpbHMvQXBwQWN0aW9uQ3JlYXRvcic7XG5cbmltcG9ydCBzYW1wbGVEYXRhIGZyb20gJy4uLy4uL3N0YXRpYy9zYW1wbGVEYXRhLmpzb24nO1xuXG5cbmNvbnN0IEV4YW1wbGVTdG9yZSA9IHtcblxuXHRkYXRhOiBudWxsLFxuXG5cdC8qKlxuXHQgKiBTYW1wbGUgZGF0YSBsb2FkZXIsIHdpdGggc2V0VGltZW91dFxuXHQgKiBlbXVsYXRpbmcgbmV0d29yayByZXNwb25zZSBkZWxheSxcblx0ICogcmV0dXJuaW5nIHNhbXBsZSBkYXRhIGZyb20gYSBsb2NhbCBqc29uIGZpbGUuXG5cdCAqIEEgcmVhbCBkYXRhIGxvYWRlciB3b3VsZCBmb2xsb3cgdGhlIHNhbWUgcGF0dGVybixcblx0ICogYnV0IHByb2JhYmx5IG1ha2UgYW4gWEhSIGFuZCByZXR1cm4gdGhlIHJlc3BvbnNlIGRhdGEuXG5cdCAqL1xuXHRkYXRhTG9hZGVyOiB7XG5cdFx0cXVlcnk6ICh2YWx1ZSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoc2FtcGxlRGF0YSk7XG5cdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBNYWtlIGEgcmVxdWVzdCBmb3IgZGF0YSBuZWVkZWQgb24gYXBwbGljYXRpb24gaW5pdC5cblx0ICovXG5cdGdldEluaXRpYWxEYXRhOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRjb25zb2xlLmxvZyhgWzNiXSBFeGFtcGxlU3RvcmUgbWFrZXMgYSBkYXRhIHJlcXVlc3QuLi5gKTtcblxuXHRcdC8vIFNhbXBsZSBxdWVyeTsgZm9ybWF0IHZhcmllcyBieSBkYXRhIHByb3ZpZGVyXG5cdFx0dGhpcy5kYXRhTG9hZGVyLnF1ZXJ5KFtcblx0XHRcdHtcblx0XHRcdFx0cXVlcnk6IFwiU0VMRUNUICogRlJPTSB0YWJsZW5hbWVcIixcblx0XHRcdFx0Zm9ybWF0OiBcIkpTT05cIlxuXHRcdFx0fVxuXHRcdF0pLnRoZW4oKC4uLnJlc3BvbnNlcykgPT4ge1xuXG5cdFx0XHR0aGlzLnNldERhdGEodGhpcy5wYXJzZURhdGEoLi4ucmVzcG9uc2VzKSk7XG5cblx0XHR9LFxuXHRcdChlcnJvcikgPT4ge1xuXG5cdFx0XHQvLyBUT0RPOiBoYW5kbGUgdGhpcy5cblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFeGFtcGxlIHJlY2VpdmVkIGVycm9yOlwiLCBlcnJvcik7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblxuXHRcdH0pO1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIFJldHJpZXZlIGRhdGEgZnJvbSB0aGUgc3RvcmUuXG5cdCAqL1xuXHRnZXREYXRhOiBmdW5jdGlvbiAoKSB7XG5cblx0XHQvLyBGb3Igc2ltcGxpY2l0eSBvZiBleGFtcGxlLCB3ZSByZXR1cm4gYWxsIG9mIHRoZSBkYXRhLlxuXHRcdC8vIEEgcmVhbCBhcHBsaWNhdGlvbiB3b3VsZCBtb3JlIGxpa2VseSByZXR1cm4gYSBjb3B5XG5cdFx0Ly8gKHRvIGF2b2lkIGFjY2lkZW50YWwgbXV0YXRpb24gYnkgY29uc3VtZXJzKSBcblx0XHQvLyBvZiBhIHN1YnNldCBvZiB0aGUgZGF0YS5cblx0XHRyZXR1cm4gdGhpcy5kYXRhO1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIENhY2hlIHRoZSBsb2FkZWQsIHBhcnNlZCBkYXRhIGZvciBmdXR1cmUgdXNlIGJ5IHRoZSBhcHBsaWNhdGlvbi5cblx0ICovXG5cdHNldERhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XG5cblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXG5cdFx0Y29uc29sZS5sb2coYFszY10gRXhhbXBsZVN0b3JlIHVwZGF0ZXMgaXRzIGNhY2hlIHdpdGggdGhlIGxvYWRlZCBhbmQgcGFyc2VkIGRhdGEsIGFuZCBlbWl0cyBhICckeyBBcHBBY3Rpb25UeXBlcy5zdG9yZUNoYW5nZWQgfScgZXZlbnQgZnJvbSBFeGFtcGxlU3RvcmUuc2V0RGF0YSgpLmApO1xuXHRcdHRoaXMuZW1pdChBcHBBY3Rpb25UeXBlcy5zdG9yZUNoYW5nZWQpO1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIFBhcnNlIHJldHVybmVkIGRhdGEgYXMgbmVjZXNzYXJ5LlxuXHQgKi9cblx0cGFyc2VEYXRhOiBmdW5jdGlvbiAoLi4uZGF0YSkge1xuXG5cdFx0bGV0IGZpcnN0UmVzcG9uc2UgPSBkYXRhWzBdO1xuXHRcdHJldHVybiBmaXJzdFJlc3BvbnNlO1xuXG5cdH1cblxuXG59O1xuXG4vLyBNaXhpbiBFdmVudEVtaXR0ZXIgZnVuY3Rpb25hbGl0eVxuT2JqZWN0LmFzc2lnbihFeGFtcGxlU3RvcmUsIEV2ZW50RW1pdHRlci5wcm90b3R5cGUpO1xuXG4vLyBSZWdpc3RlciBjYWxsYmFjayB0byBoYW5kbGUgYWxsIHVwZGF0ZXNcbkFwcERpc3BhdGNoZXIucmVnaXN0ZXIoKGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuXHRcdGNhc2UgQXBwQWN0aW9uVHlwZXMuZ2V0SW5pdGlhbERhdGE6XG5cdFx0XHRjb25zb2xlLmxvZyhgWzNhXSBUaGUgJyR7IEFwcEFjdGlvblR5cGVzLmdldEluaXRpYWxEYXRhIH0nIGFjdGlvbiBpcyBoYW5kbGVkIGJ5IEV4YW1wbGVTdG9yZS4uLi5gKTtcblx0XHRcdEV4YW1wbGVTdG9yZS5nZXRJbml0aWFsRGF0YShhY3Rpb24uc3RhdGUpO1xuXHRcdFx0YnJlYWs7XG5cblx0fVxuXG5cdHJldHVybiB0cnVlO1xuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZVN0b3JlO1xuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnLi9BcHBEaXNwYXRjaGVyJztcblxuZXhwb3J0IGNvbnN0IEFwcEFjdGlvblR5cGVzID0ge1xuXG5cdC8vIE5vdGU6IHN0b3JlcyBlbWl0IHRoaXMgdHlwZSBvZiBldmVudC5cblx0Ly8gVGhvdWdoIGl0IGlzIG5vdCBhY3R1YWxseSBhbiBBY3Rpb24gdHlwZTtcblx0Ly8gaXQncyBlbnVtZXJhdGVkIGhlcmUgZm9yIGVhc2Ugb2YgYWNjZXNzLlxuXHRzdG9yZUNoYW5nZWQ6ICdzdG9yZUNoYW5nZWQnLFxuXG5cdGdldEluaXRpYWxEYXRhOiAnZ2V0SW5pdGlhbERhdGEnXG5cbn07XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlQWN0aW9ucyA9IHtcblxuXHQvKipcblx0ICogTG9hZCBkYXRhIG5lZWRlZCBieSB0aGUgYXBwbGljYXRpb24gb24gaW5pdC5cblx0ICovXG5cdGdldEluaXRpYWxEYXRhOiAoc3RhdGUpID0+IHtcblx0XHRjb25zb2xlLmxvZyhgWzJdIEEgJyR7IEFwcEFjdGlvblR5cGVzLmdldEluaXRpYWxEYXRhIH0nIGFjdGlvbiBpcyBicm9hZGNhc3QgZ2xvYmFsbHkgZnJvbSBBcHBBY3Rpb25DcmVhdG9yLmdldEluaXRpYWxEYXRhKCkuYCk7XG5cdFx0QXBwRGlzcGF0Y2hlci5kaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBBcHBBY3Rpb25UeXBlcy5nZXRJbml0aWFsRGF0YSxcblx0XHRcdHN0YXRlOiBzdGF0ZVxuXHRcdH0pO1xuXHR9XG5cbn1cbiIsImltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICdmbHV4JztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IERpc3BhdGNoZXIoKTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJsZWdlbmRcIjoge1xuXHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XCJFcmllIENhbmFsXCIsXG5cdFx0XHRcIlNjaHV5bGtpbGwgTmF2aWdhdGlvblwiLFxuXHRcdFx0XCJDaGVzYXBlYWtlICYgT2hpb1wiXG5cdFx0XSxcblx0XHRcInNlbGVjdGVkSXRlbVwiOiBcIkVyaWUgQ2FuYWxcIlxuXHR9LFxuXG5cdFwiZXhhbXBsZVRpdGxlXCI6IFwiRXhhbXBsZSBDb21wb25lbnRcIixcblxuXHRcInB1bmNoY2FyZFwiOiBbXG5cdFx0e1xuXHRcdFx0XCJoZWFkZXJcIjoge1xuXHRcdFx0XHRcInRpdGxlXCI6IFwiRXJpZSBDYW5hbFwiLFxuXHRcdFx0XHRcInN1YnRpdGxlXCI6IDE4NDksXG5cdFx0XHRcdFwiY2FwdGlvblwiOiAxNjIyNDQ0XG5cdFx0XHR9LFxuXHRcdFx0XCJjYXRlZ29yaWVzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDQ2LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJGbG91clwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDMyNjMwODcsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDMxOTc4Mi41MjZcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMjUyLFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJXaGVhdFwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDI3MzQzODksXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI2Nzk3MC4xMjJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNTEsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkdyYWluXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogOTI1MjMwMSxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjE3NDI5LjA3MzVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdyYWlucywgQWxjb2hvbCAmIFRvYmFjY29cIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiA4MDUxODEuNzIxNVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb21tb2RpdGllc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTMsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkJvYXJkcyAmIHNjYW50bGluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDI5NzQzMTE0MCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDQ2MTQ2LjcxXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDEzMCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU2hpbmdsZXNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiA1MTI1ODAwMCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjU2Mjlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkJ1aWxkaW5nIE1hdGVyaWFsc1wiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDQ3MTc3NS43MVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb21tb2RpdGllc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTA3LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJQcm9kdWN0IG9mIHRoZSBGb3Jlc3RcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMTA0ODQwLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxMTA0ODQwXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDI1Myxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU3RhdmVzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTU0MTU5MzU5LFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA3NzA3OS42Nzk1XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDE0Mixcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiVGltYmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTQ5NzYyNyxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjMzNjIuOTgxMlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMTEsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIldvb2RcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMTk3MCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTc5NTVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkx1bWJlclxcL1RpbWJlclxcL1dvb2RcIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiAxMjIzMjM3LjY2MDdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDI1MSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQWdyaWN1bHR1cmVcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMDIwMjU5LFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxMDIwMjU5XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJBZ3JpY3VsdHVyYWwgUHJvZHVjdHMgKG90aGVyIHRoYW4gZ3JhaW5zKVwiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDEwMjAyNTlcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDI1NSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTWVyY2hhbmRpc2VcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyNTU0NTUsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI1NTQ1NVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyNTQsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIk1hbnVmYWN0dXJlc1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDIwMzk5MCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjAzOTkwXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJGaW5pc2hlZCBQcm9kdWN0c1wiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDQ1OTQ0NVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb21tb2RpdGllc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTU4LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJNaXNjZWxsYW5lb3VzXFwvT3RoZXIgQXJ0aWNsZXNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzMTAwODgsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDMxMDA4OFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiT3RoZXIgQXJ0aWNsZXNcIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiAzMTAwODhcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxMyxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJCb2FyZHMgJiBzY2FudGxpbmdcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDI5NzQzMTE0MCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA0NDYxNDYuNzFcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNDYsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRmxvdXJcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDMyNjMwODcsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMzE5NzgyLjUyNlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiA1MSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHcmFpblwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogOTI1MjMwMSxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMTc0MjkuMDczNVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxMDcsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiUHJvZHVjdCBvZiB0aGUgRm9yZXN0XCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMTA0ODQwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDExMDQ4NDBcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTMwLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlNoaW5nbGVzXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA1MTI1ODAwMCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyNTYyOVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxNDIsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiVGltYmVyXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxNDk3NjI3LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDIzMzYyLjk4MTJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTU4LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk1pc2NlbGxhbmVvdXNcXC9PdGhlciBBcnRpY2xlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMzEwMDg4LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDMxMDA4OFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyMTEsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiV29vZFwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMTE5NzAsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTc5NTVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjUxLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkFncmljdWx0dXJlXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMDIwMjU5LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEwMjAyNTlcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjUyLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIldoZWF0XCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyNzM0Mzg5LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI2Nzk3MC4xMjJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjUzLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlN0YXZlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMTU0MTU5MzU5LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDc3MDc5LjY3OTVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjU0LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk1hbnVmYWN0dXJlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMjAzOTkwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDIwMzk5MFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyNTUsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTWVyY2hhbmRpc2VcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDI1NTQ1NSxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyNTU0NTVcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJoZWFkZXJcIjoge1xuXHRcdFx0XHRcInRpdGxlXCI6IFwiU2NodXlsa2lsbCBOYXZpZ2F0aW9uXCIsXG5cdFx0XHRcdFwic3VidGl0bGVcIjogMTg0OSxcblx0XHRcdFx0XCJjYXB0aW9uXCI6IDcxMTUyNVxuXHRcdFx0fSxcblx0XHRcdFwiY2F0ZWdvcmllc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMjksXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvYWxcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiA0ODkyMDgsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ4OTIwOFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRnVlbCBhbmQgT3JlXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogNDg5MjA4XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNTgsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIk1pc2NlbGxhbmVvdXNcXC9PdGhlciBBcnRpY2xlc1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDIyMjMxNyxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjIyMzE3XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJPdGhlciBBcnRpY2xlc1wiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDIyMjMxN1xuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdFx0XCJpdGVtc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDE1OCxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJNaXNjZWxsYW5lb3VzXFwvT3RoZXIgQXJ0aWNsZXNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDIyMjMxNyxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMjIzMTdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjI5LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvYWxcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDQ4OTIwOCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA0ODkyMDhcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJoZWFkZXJcIjoge1xuXHRcdFx0XHRcInRpdGxlXCI6IFwiQ2hlc2FwZWFrZSAmIE9oaW9cIixcblx0XHRcdFx0XCJzdWJ0aXRsZVwiOiAxODQ5XG5cdFx0XHR9LFxuXHRcdFx0XCJjYXRlZ29yaWVzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDQ2LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJGbG91clwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDIzNjYyMCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjMxODguNzZcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMjA1LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb3JuXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMjQ0MjgxLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA4NTQ5LjgzNVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNDgsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIldoZWF0XCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMjQwMDczLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA3MjAyLjE5XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDg0LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJNaWxsIG9mZmFsXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogNDU0MjMsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ0NTEuNDU0XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDI4NCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiV2hpc2tleVwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDI2NzQsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI1Mi42OTNcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogODksXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIk9hdHNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMzIwMCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjExLjJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMzEsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvcm4gbWVhbFwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDcyMjUsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE4MC42MjVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNTgsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkhheSwgU3RyYXdcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxNDcsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE0N1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNDUsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlRvYmFjY29cIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyMDAsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEwMFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMTYsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlJ5ZVwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDE3OTUsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDUwLjI2XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHcmFpbnMsIEFsY29ob2wgJiBUb2JhY2NvXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogNDQzMzQuMDE3XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMTQsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlJvdWdoIHN0b25lLCBvdGhlciB0aGFuIGxpbWVzdG9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDE3NzUwLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMTc0My43NVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA3Nixcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTGltZXN0b25lXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogODY2Mixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTc2ODYuOTM3OFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA5Nyxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiUGxhc3RlclwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDY1OTksXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDY1OTlcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNzQsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkxpbWVcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiA3MjMsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDcyM1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQnJpY2tzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogODEwMDAsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDMyNFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQ2VtZW50XCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTM4Mixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjU5LjgxNlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA4Nyxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTmFpbHNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzNjgyLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxODQuMVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA3NSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTGltZSBhbmQgQ2VtZW50XCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTQwLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxNDBcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTEwLFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJSYWlsc1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDM5MDYsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDExNy4xOFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQnVpbGRpbmcgTWF0ZXJpYWxzXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogNDc3NzcuNzgzXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMjYsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlNhbHQgXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMjAxOSxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjAxOVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyNTAsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlN1bmRyaWVzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTY5Myxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTY5M1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMjMsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlNhbHRlZCBmaXNoXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMzk5NSxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDk5LjM3NVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiU3VuZHJpZXM6IGZpc2ggaW4gYnVsayBhbmQgZ3JvY2VyaWVzXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogNDIxMS4zNzVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDIxMSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiV29vZFwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDUwODMsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDc2MjQuNVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA4MCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTHVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMzE3Nzk1Nixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDc2Ni45MzRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMjEyLFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJCYXJrXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTA3Nixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTYxNFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTHVtYmVyXFwvVGltYmVyXFwvV29vZFwiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDE0MDA1LjQzNFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb21tb2RpdGllc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTEsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkJpdHVtaW5vdXMgQ29hbFwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDUyMjQsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDUyMjRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNjUsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIklyb24gT3JlXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogNDAyNSxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDAyNVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMzAsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNva2VcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyODU0LFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyODU0XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDY1LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJJcm9uIE9yZVwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDEzNTEsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEzNTFcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMjI5LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb2FsXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTIzNixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTIzNlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRnVlbCBhbmQgT3JlXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogMTQ2OTBcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDEyNyxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU2hhZCwgSGVycmluZyAoZnJlc2gpXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogNDM0LFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA0MzRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQXBwbGVzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTI5NzAsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI1OS40XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDIxMCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiRmxheCBTZWVkc1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDE2NDMsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ2LjAwNFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMDMsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlBvdGF0b2VzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTQ0MCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDMuMlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQWdyaWN1bHR1cmFsIFByb2R1Y3RzIChvdGhlciB0aGFuIGdyYWlucylcIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiA3ODIuNjA0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNjUsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIk1hbnVyZXNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiA2NDgsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDY0OFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiT3RoZXIgQXJ0aWNsZXNcIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiA2NDhcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiA0LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkFwcGxlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMTI5NzAsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjU5LjRcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTEsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQml0dW1pbm91cyBDb2FsXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA1MjI0LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDUyMjRcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTUsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQnJpY2tzXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA4MTAwMCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAzMjRcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjAsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQ2VtZW50XCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMzgyLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI1OS44MTZcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMzEsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQ29ybiBtZWFsXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA3MjI1LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE4MC42MjVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNDYsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRmxvdXJcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDIzNjYyMCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMzE4OC43NlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiA1OCxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJIYXksIFN0cmF3XCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxNDcsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTQ3XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDY1LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIklyb24gT3JlXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA0MDI1LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQwMjVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNzQsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTGltZVwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogNzIzLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDcyM1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiA3NSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJMaW1lIGFuZCBDZW1lbnRcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE0MCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxNDBcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNzYsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTGltZXN0b25lXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA4NjYyLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE3Njg2LjkzNzhcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogODAsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTHVtYmVyXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzMTc3OTU2LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ3NjYuOTM0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDg0LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk1pbGwgb2ZmYWxcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDQ1NDIzLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ0NTEuNDU0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDg3LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk5haWxzXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzNjgyLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE4NC4xXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDg5LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk9hdHNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDEzMjAwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDIxMS4yXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDk3LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlBsYXN0ZXJcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDY1OTksXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNjU5OVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxMDMsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiUG90YXRvZXNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE0NDAsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDMuMlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxMTAsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiUmFpbHNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDM5MDYsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTE3LjE4XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDExNCxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJSb3VnaCBzdG9uZSwgb3RoZXIgdGhhbiBsaW1lc3RvbmVcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE3NzUwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDIxNzQzLjc1XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDExNixcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJSeWVcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE3OTUsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNTAuMjZcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTIzLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlNhbHRlZCBmaXNoXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzOTk1LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ5OS4zNzVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTI3LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlNoYWQsIEhlcnJpbmcgKGZyZXNoKVwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogNDM0LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQzNFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxNDUsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiVG9iYWNjb1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMjAwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEwMFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxNDgsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiV2hlYXRcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDI0MDA3Myxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA3MjAyLjE5XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDE2NSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJNYW51cmVzXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA2NDgsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNjQ4XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIwNSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb3JuXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyNDQyODEsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogODU0OS44MzVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjEwLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkZsYXggU2VlZHNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE2NDMsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDYuMDA0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIxMSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJXb29kXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA1MDgzLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDc2MjQuNVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyMTIsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQmFya1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMTA3Nixcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxNjE0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIyNixcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJTYWx0IFwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMjAxOSxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMDE5XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIyOSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb2FsXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMjM2LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEyMzZcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjMwLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkNva2VcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDI4NTQsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjg1NFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyNTAsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiU3VuZHJpZXNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE2OTMsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTY5M1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyODQsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiV2hpc2tleVwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMjY3NCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyNTIuNjkzXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9XG5cdF1cbn1cbiJdfQ==
