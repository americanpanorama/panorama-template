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
						'The developers, designers, and staff at ',
						React.createElement(
							'a',
							{ href: 'http://stamen.com' },
							'Stamen Design'
						),
						' have been exceptional partners on this project. Our thanks to Kai Chang, Jon Christensen, Sean Connelley, Seth Fitzsimmons, Eric Gelinas, Heather Grates, Nicolette Hayes, Alan McConchie, Michael Neuman, Dan Rademacher, Eric Rodenbeck, and Eric Socolofsky.'
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiYXNlbWFwcy9jYXJ0b2RiL2Jhc2VtYXBzLmpzb24iLCJiYXNlbWFwcy9jYXJ0b2RiL2NvbmZpZy5qc29uIiwiYmFzZW1hcHMvdGlsZUxheWVycy5qc29uIiwibm9kZV9tb2R1bGVzL2VsZW1lbnQtY2xhc3MvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9leGVudi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2Vhc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlY29weS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guX2JpbmRjYWxsYmFjay9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guX2NyZWF0ZWFzc2lnbmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5fZ2V0bmF0aXZlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5faXNpdGVyYXRlZWNhbGwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guaXNhcmd1bWVudHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmlzYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmtleXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnJlc3RwYXJhbS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2NvbXBvbmVudHMvTW9kYWwuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2NvbXBvbmVudHMvTW9kYWxQb3J0YWwuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvYXJpYUFwcEhpZGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2ZvY3VzTWFuYWdlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9zY29wZVRhYi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy90YWJiYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaW5kZXguanMiLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtdGVtcGxhdGUvc3JjL0FwcC5qc3giLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtdGVtcGxhdGUvc3JjL2NvbXBvbmVudHMvQ2FydG9EQlRpbGVMYXllci5qc3giLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtdGVtcGxhdGUvc3JjL2NvbXBvbmVudHMvRXhhbXBsZUNvbXBvbmVudC5qc3giLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtdGVtcGxhdGUvc3JjL21haW4uanN4IiwiL1VzZXJzL2VyaWNzb2NvbG9mc2t5L0RvY3VtZW50cy9zdGFtZW4vZ2l0L3Bhbm9yYW1hLXRlbXBsYXRlL3NyYy9zdG9yZXMvRXhhbXBsZVN0b3JlLmpzIiwiL1VzZXJzL2VyaWNzb2NvbG9mc2t5L0RvY3VtZW50cy9zdGFtZW4vZ2l0L3Bhbm9yYW1hLXRlbXBsYXRlL3NyYy91dGlscy9BcHBBY3Rpb25DcmVhdG9yLmpzIiwiL1VzZXJzL2VyaWNzb2NvbG9mc2t5L0RvY3VtZW50cy9zdGFtZW4vZ2l0L3Bhbm9yYW1hLXRlbXBsYXRlL3NyYy91dGlscy9BcHBEaXNwYXRjaGVyLmpzIiwic3RhdGljL3NhbXBsZURhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcIm5hbWVcIjpcIlBhbm9yYW1hQmFzZW1hcFwiLFwidmVyc2lvblwiOlwiMC4wLjFcIixcImxheWVyZ3JvdXBcIjp7XCJ2ZXJzaW9uXCI6XCIxLjMuMFwiLFwibGF5ZXJzXCI6W3tcInR5cGVcIjpcIm1hcG5pa1wiLFwib3B0aW9uc1wiOntcInNxbFwiOlwiU0VMRUNUICogRlJPTSB1bmlmaWVkX2Jhc2VtYXBfbGF5ZXJzIE9SREVSIEJZIG9yZFxcblwiLFwiY2FydG9jc3NcIjpcIkB3YXRlcjogI2RkZTllOTtcXG5Ad2F0ZXJsaW5lczogI2FhY2NjYztcXG5AbGFuZDogI2Y5ZjlmOTtcXG5cXG5NYXAge1xcbiAgYnVmZmVyLXNpemU6IDEyODtcXG4gIGJhY2tncm91bmQtY29sb3I6IEB3YXRlcjtcXG59XFxuXFxuI3VuaWZpZWRfYmFzZW1hcF9sYXllcnNbbGF5ZXI9J25lXzEwbV9jb2FzdGxpbmVfMjE2Mydde1xcbiAgbGluZS1jb2xvcjogQHdhdGVybGluZXM7XFxuICBsaW5lLXdpZHRoOiAwLjc1O1xcbiAgbGluZS1vcGFjaXR5OiAxO1xcbiAgbGluZS1qb2luOiByb3VuZDtcXG4gIGxpbmUtY2FwOiByb3VuZDtcXG59XFxuXFxuI3VuaWZpZWRfYmFzZW1hcF9sYXllcnNbbGF5ZXI9J25lXzEwbV9sYWtlc18yMTYzJ10ge1xcbiAgbGluZS1jb2xvcjogQHdhdGVybGluZXM7XFxuICBsaW5lLXdpZHRoOiAyLjU7XFxuICBsaW5lLW9wYWNpdHk6IDE7XFxuICBsaW5lLWpvaW46IHJvdW5kO1xcbiAgbGluZS1jYXA6IHJvdW5kO1xcblxcbiAgLyogU29mdGVuIGxpbmVzIGF0IGxvd2VyIHpvb21zICovXFxuICBbem9vbTw9N10ge1xcbiAgICBsaW5lLXdpZHRoOiAyLjU7XFxuICAgIGxpbmUtY29sb3I6IGxpZ2h0ZW4oZGVzYXR1cmF0ZSgjYWFjY2NjLDIlKSwyJSk7XFxuICB9XFxuICBbem9vbTw9NV0ge1xcbiAgICBsaW5lLXdpZHRoOiAxLjU7XFxuICAgIGxpbmUtY29sb3I6IGxpZ2h0ZW4oZGVzYXR1cmF0ZSgjYWFjY2NjLDUlKSw1JSk7XFxuICB9XFxuXFxuICAvKiBTZXBhcmF0ZSBhdHRhY2htZW50IGJlY2F1c2Ugc2VhbXMgKi9cXG4gIDo6ZmlsbCB7XFxuICAgIHBvbHlnb24tZmlsbDogQHdhdGVyO1xcbiAgICBwb2x5Z29uLW9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAvKiBSZW1vdmUgc21hbGwgbGFrZXMgYXQgbG93ZXIgem9vbXMgKi9cXG4gIFtzY2FsZXJhbms+M11bem9vbTw9NV0ge1xcbiAgICA6OmZpbGwge1xcbiAgICAgIHBvbHlnb24tb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICBsaW5lLW9wYWNpdHk6IDA7XFxuICB9XFxuICBbc2NhbGVyYW5rPjZdW3pvb208PTddIHtcXG4gICAgOjpmaWxsIHtcXG4gICAgICBwb2x5Z29uLW9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgbGluZS1vcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4jdW5pZmllZF9iYXNlbWFwX2xheWVyc1tsYXllcj0nbmVfMTBtX3JpdmVyc19sYWtlX2NlbnRlcmxpbmVzXzIxNjMnXSB7XFxuICBsaW5lLWNvbG9yOiBAd2F0ZXJsaW5lcztcXG4gIGxpbmUtd2lkdGg6IDEuNTtcXG4gIGxpbmUtb3BhY2l0eTogMTtcXG4gIGxpbmUtam9pbjogcm91bmQ7XFxuICBsaW5lLWNhcDogcm91bmQ7XFxuXFxuICBbbmFtZT0nTWlzc2lzc2lwcGknXSxcXG4gIFtuYW1lPSdTdC4gTGF3cmVuY2UnXSxcXG4gIFtuYW1lPSdDb2x1bWJpYSddLFxcbiAgW25hbWU9J09oaW8nXSxcXG4gIFtuYW1lPSdIdWRzb24nXSxcXG4gIFtuYW1lPSdNaXNzb3VyaSddLFxcbiAgW25hbWU9J1JpbyBHcmFuZGUnXSB7XFxuICAgIGxpbmUtd2lkdGg6IDQ7XFxuICB9XFxuICBbem9vbTw9OF1bbmFtZT0nTWlzc2lzc2lwcGknXSxcXG4gIFt6b29tPD04XVtuYW1lPSdTdC4gTGF3cmVuY2UnXSxcXG4gIFt6b29tPD04XVtuYW1lPSdDb2x1bWJpYSddLFxcbiAgW3pvb208PThdW25hbWU9J09oaW8nXSxcXG4gIFt6b29tPD04XVtuYW1lPSdIdWRzb24nXSxcXG4gIFt6b29tPD04XVtuYW1lPSdNaXNzb3VyaSddLFxcbiAgW3pvb208PThdW25hbWU9J1JpbyBHcmFuZGUnXSB7XFxuICAgIGxpbmUtd2lkdGg6IDI7XFxuICB9XFxuICBbem9vbTw9OF1bbmFtZSE9J01pc3Npc3NpcHBpJ11bbmFtZSE9J1N0LiBMYXdyZW5jZSddW25hbWUhPSdSaW8gR3JhbmRlJ11bbmFtZSE9J09oaW8nXVtuYW1lIT0nSHVkc29uJ11bbmFtZSE9J0NvbHVtYmlhJ11bbmFtZSE9J01pc3NvdXJpJ10sXFxuICBbem9vbTw9Nl1bbmFtZT0nTWlzc2lzc2lwcGknXSxcXG4gIFt6b29tPD02XVtuYW1lPSdDb2x1bWJpYSddLFxcbiAgW3pvb208PTZdW25hbWU9J09oaW8nXSxcXG4gIFt6b29tPD02XVtuYW1lPSdIdWRzb24nXSxcXG4gIFt6b29tPD02XVtuYW1lPSdNaXNzb3VyaSddLFxcbiAgW3pvb208PTZdW25hbWU9J1JpbyBHcmFuZGUnXSB7XFxuICAgIGxpbmUtd2lkdGg6IDE7XFxuICAgIGxpbmUtY29sb3I6IGxpZ2h0ZW4oZGVzYXR1cmF0ZShAd2F0ZXJsaW5lcywyJSksMiUpO1xcbiAgfVxcbiAgW3pvb208PTZdW25hbWUhPSdNaXNzaXNzaXBwaSddW25hbWUhPSdTdC4gTGF3cmVuY2UnXVtuYW1lIT0nUmlvIEdyYW5kZSddW25hbWUhPSdPaGlvJ11bbmFtZSE9J0h1ZHNvbiddW25hbWUhPSdDb2x1bWJpYSddW25hbWUhPSdNaXNzb3VyaSddIHtcXG4gICAgbGluZS13aWR0aDogMC41O1xcbiAgICBsaW5lLWNvbG9yOiBsaWdodGVuKGRlc2F0dXJhdGUoQHdhdGVybGluZXMsNSUpLDUlKTtcXG4gIH1cXG4gIFt6b29tPD01XVtuYW1lIT0nTWlzc2lzc2lwcGknXVtuYW1lIT0nU3QuIExhd3JlbmNlJ11bbmFtZSE9J1JpbyBHcmFuZGUnXVtuYW1lIT0nT2hpbyddW25hbWUhPSdIdWRzb24nXVtuYW1lIT0nQ29sdW1iaWEnXVtuYW1lIT0nTWlzc291cmknXSB7XFxuICAgIGxpbmUtd2lkdGg6IDA7XFxuICB9XFxuICBbem9vbTw9NV1bbmFtZT0nTWlzc2lzc2lwcGknXSxcXG4gIFt6b29tPD01XVtuYW1lPSdTdC4gTGF3cmVuY2UnXSxcXG4gIFt6b29tPD01XVtuYW1lPSdDb2x1bWJpYSddLFxcbiAgW3pvb208PTVdW25hbWU9J09oaW8nXSxcXG4gIFt6b29tPD01XVtuYW1lPSdIdWRzb24nXSxcXG4gIFt6b29tPD01XVtuYW1lPSdNaXNzb3VyaSddLFxcbiAgW3pvb208PTVdW25hbWU9J1JpbyBHcmFuZGUnXSB7XFxuICAgIGxpbmUtd2lkdGg6IDAuNTtcXG4gICAgbGluZS1jb2xvcjogbGlnaHRlbihkZXNhdHVyYXRlKEB3YXRlcmxpbmVzLDIlKSwyJSk7XFxuICB9XFxufVxcblxcbiN1bmlmaWVkX2Jhc2VtYXBfbGF5ZXJzW2xheWVyPSduZV8xMG1fYWRtaW5fMF9jb3VudHJpZXNfbGFrZXNfMjE2MyddIHtcXG5cXG4gIGxpbmUtY29sb3I6IEBsYW5kO1xcbiAgbGluZS13aWR0aDogMTtcXG4gIGxpbmUtb3BhY2l0eTogMTtcXG4gIGxpbmUtam9pbjogcm91bmQ7XFxuICBsaW5lLWNhcDogcm91bmQ7XFxuICBwb2x5Z29uLWZpbGw6IEBsYW5kO1xcbiAgcG9seWdvbi1vcGFjaXR5OiAxO1xcblxcbn1cXG5cIixcImNhcnRvY3NzX3ZlcnNpb25cIjpcIjIuMS4xXCJ9fSx7XCJ0eXBlXCI6XCJtYXBuaWtcIixcIm9wdGlvbnNcIjp7XCJzcWxcIjpcIlNFTEVDVCBjYXJ0b2RiX2lkLCBsYXQ6OmZsb2F0LCBsb25nOjpmbG9hdCwgU1RfVHJhbnNmb3JtKHRoZV9nZW9tLDIxNjMpIGFzIHRoZV9nZW9tX3dlYm1lcmNhdG9yLCBzdGFydCwgc3RhdGUsIHRvd24sIHJhbmsgRlJPTSBjYW5hbF90b3duc1xcblwiLFwiY2FydG9jc3NcIjpcIkB0ZXh0Y29sb3I6ICM2NjY7XFxuQGhhbG9jb2xvcjogI2Y5ZjlmOTtcXG5cXG5NYXAge1xcbiAgYnVmZmVyLXNpemU6IDEyODtcXG59XFxuXFxuI2NhbmFsc19jaXRpZXNfYmFzZW1hcFtyYW5rPTFdW3pvb20+PTVdLFxcbiNjYW5hbHNfY2l0aWVzX2Jhc2VtYXBbcmFuaz0yXVt6b29tPj02XSxcXG4jY2FuYWxzX2NpdGllc19iYXNlbWFwW3Jhbms+PTNdW3pvb20+PThde1xcbiAgLy8gTm90ZTogaGF2ZSB0byB1c2UgbWFya2VycyBub3Qgc2hpZWxkcyB0byBjaGFuZ2Ugc3ZnIGNvbG9yXFxuICA6OmhhbG8ge1xcbiAgICBtYXJrZXItcGxhY2VtZW50OiBwb2ludDtcXG4gICAgbWFya2VyLWZpbGwtb3BhY2l0eTogMTtcXG4gICAgbWFya2VyLWxpbmUtd2lkdGg6IDA7XFxuICAgIG1hcmtlci10eXBlOiBlbGxpcHNlO1xcbiAgICBtYXJrZXItd2lkdGg6IDk7XFxuICAgIG1hcmtlci1maWxsOiBAaGFsb2NvbG9yO1xcbiAgfVxcbiAgbWFya2VyLWZpbGwtb3BhY2l0eTogMC45O1xcbiAgbWFya2VyLWxpbmUtY29sb3I6IEBoYWxvY29sb3I7XFxuICBtYXJrZXItbGluZS13aWR0aDogMS41O1xcbiAgbWFya2VyLWxpbmUtb3BhY2l0eTogMTtcXG4gIG1hcmtlci1wbGFjZW1lbnQ6IHBvaW50O1xcbiAgLy9tYXJrZXItdHlwZTogZWxsaXBzZTtcXG4gIG1hcmtlci1maWxlOiB1cmwoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9tYXBib3gvbWFraS9tYi1wYWdlcy9zcmMvY2lyY2xlLTEyLnN2ZycpO1xcbiAgbWFya2VyLXdpZHRoOiA2O1xcbiAgbWFya2VyLWZpbGw6IEB0ZXh0Y29sb3I7XFxuXFxuICBtYXJrZXItYWxsb3ctb3ZlcmxhcDogdHJ1ZTtcXG59XFxuXFxuQGRlZmF1bHRfc2l6ZTogOTtcXG5AeF9kaXN0YW5jZV9wb3NpdGl2ZTogMztcXG5AeV9kaXN0YW5jZV9wb3NpdGl2ZTogMztcXG5AeF9kaXN0YW5jZV9uZWdhdGl2ZTogLTM7XFxuQHlfZGlzdGFuY2VfbmVnYXRpdmU6IC0zO1xcblxcbiNjYW5hbHNfY2l0aWVzX2Jhc2VtYXBbcmFuaz0xXVt6b29tPj01XTo6bGFiZWxzLFxcbiNjYW5hbHNfY2l0aWVzX2Jhc2VtYXBbcmFuaz0yXVt6b29tPj02XTo6bGFiZWxzLFxcbiNjYW5hbHNfY2l0aWVzX2Jhc2VtYXBbcmFuaz49M11bem9vbT49OF06OmxhYmVscywge1xcblxcbiAgdGV4dC1uYW1lOiBbdG93bl07XFxuICB0ZXh0LWZhY2UtbmFtZTogJ0RlamFWdSBTYW5zIEJvb2snO1xcbiAgdGV4dC1zaXplOiBAZGVmYXVsdF9zaXplO1xcbiAgW3pvb20+PTZdW3Jhbms9MV0ge1xcbiAgICB0ZXh0LXNpemU6IEBkZWZhdWx0X3NpemUgKyAzO1xcbiAgfVxcbiAgdGV4dC1sYWJlbC1wb3NpdGlvbi10b2xlcmFuY2U6IDA7XFxuICB0ZXh0LWZpbGw6IEB0ZXh0Y29sb3I7XFxuICB0ZXh0LWhhbG8tZmlsbDogQGhhbG9jb2xvcjtcXG4gIHRleHQtaGFsby1yYWRpdXM6IDEuNTtcXG4gIC8vIERlZmF1bHQgaXMgdXBwZXIgcmlnaHQgZnJvbSBkb3RcXG4gIHRleHQtZHk6IEB5X2Rpc3RhbmNlX25lZ2F0aXZlO1xcbiAgdGV4dC1keDogQHhfZGlzdGFuY2VfcG9zaXRpdmU7XFxuXFxuICAvLyBMYWJlbHMgdG8gZmxvYXQgbGVmdCBpbnN0ZWFkXFxuICBbc3RhdGU9J0lsbGlub2lzJ10sXFxuICBbc3RhdGU9J0luZGlhbmEnXSxcXG4gIFtzdGF0ZT0nT2hpbyddW3Rvd24hPSdDaW5jaW5uYXRpJ10sXFxuICBbdG93bj0nQmVsbGVmb250ZSddLFxcbiAgW3Rvd249J1BpdHRzYnVyZ2gnXSxcXG4gIFt0b3duPSdSb2NoZXN0ZXInXSxcXG4gIFt0b3duPSdOZXdhcmsnXSxcXG4gIFt0b3duPSdPc3dlZ28nXSxcXG4gIFt0b3duPSdCdWZmYWxvJ10sXFxuICBbdG93bj0nQ29ybmluZyddLFxcbiAgW3Rvd249J0JyaXN0b2wnXSxcXG4gIFt0b3duPSdSZWFkaW5nJ10sXFxuICBbdG93bj0nQnVjaGFuYW4nXSB7XFxuICAgIHRleHQtZHg6IEB4X2Rpc3RhbmNlX25lZ2F0aXZlO1xcbiAgfVxcblxcbiAgLy8gTGFiZWxzIHRvIGZsb2F0IGJlbG93IGRvdFxcblxcbiAgW3Rvd249J05ldyBCcnVuc3dpY2snXSxcXG4gIFt0b3duPSdMYSBTYWxsZSddLFxcbiAgW3Rvd249J0xhd3JlbmNlYnVyZyddLFxcbiAgW3Rvd249J0Frcm9uJ10sXFxuICBbdG93bj0nQWxiYW55J10sXFxuICBbdG93bj0nQXRoZW5zJ10sXFxuICBbdG93bj0nVXRpY2EnXSxcXG4gIFt0b3duPSdSZWFkaW5nJ10sXFxuICBbdG93bj0nQm9yZGVudG93biddLFxcbiAgW3Rvd249J1BoaWxhZGVscGhpYSddLFxcbiAgW3Rvd249J0x5bmNoYnVyZyddLFxcbiAgW3Rvd249J1RvbGVkbyddLFxcbiAgW3Rvd249J1BpdHRzYnVyZ2gnXSxcXG4gIFt0b3duPSdDaW5jaW5uYXRpJ10ge1xcbiAgICB0ZXh0LWR5OiBAeV9kaXN0YW5jZV9wb3NpdGl2ZTtcXG4gIH1cXG5cXG4gIHRleHQtYWxsb3ctb3ZlcmxhcDogdHJ1ZTtcXG4gIHRleHQtcGxhY2VtZW50OiBwb2ludDtcXG4gIHRleHQtcGxhY2VtZW50LXR5cGU6IGR1bW15O1xcblxcbn1cIixcImNhcnRvY3NzX3ZlcnNpb25cIjpcIjIuMS4xXCJ9fV0sXCJtaW56b29tXCI6MixcIm1heHpvb21cIjo5fX1cbiIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJ1c2VySWRcIjogXCJkaWdpdGFsc2Nob2xhcnNoaXBsYWJcIixcblx0XCJhcGlLZXlcIjogXCJmMzA3YzIwMjczMjc0YmE4OTdhZThlY2UzNmYzYTU0M2I1OTkyZjIzXCJcbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJsYXllcnNcIjogW1xuXHRcdHtcblx0XHRcdFwidXJsXCI6IFwiaHR0cDovL3NtLm1hcHN0YWNrLnN0YW1lbi5jb20vb3BlbnRlcnJhaW5fMjE2My97en0ve3h9L3t5fS5wbmdcIlxuXHRcdH1cblx0XVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzKSB7XG4gIHJldHVybiBuZXcgRWxlbWVudENsYXNzKG9wdHMpXG59XG5cbmZ1bmN0aW9uIGluZGV4T2YoYXJyLCBwcm9wKSB7XG4gIGlmIChhcnIuaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKHByb3ApXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspXG4gICAgaWYgKGFycltpXSA9PT0gcHJvcCkgcmV0dXJuIGlcbiAgcmV0dXJuIC0xXG59XG5cbmZ1bmN0aW9uIEVsZW1lbnRDbGFzcyhvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFbGVtZW50Q2xhc3MpKSByZXR1cm4gbmV3IEVsZW1lbnRDbGFzcyhvcHRzKVxuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKCFvcHRzKSBvcHRzID0ge31cblxuICAvLyBzaW1pbGFyIGRvaW5nIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgYnV0IHdvcmtzIGluIElFOFxuICBpZiAob3B0cy5ub2RlVHlwZSkgb3B0cyA9IHtlbDogb3B0c31cblxuICB0aGlzLm9wdHMgPSBvcHRzXG4gIHRoaXMuZWwgPSBvcHRzLmVsIHx8IGRvY3VtZW50LmJvZHlcbiAgaWYgKHR5cGVvZiB0aGlzLmVsICE9PSAnb2JqZWN0JykgdGhpcy5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5lbClcbn1cblxuRWxlbWVudENsYXNzLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgdmFyIGVsID0gdGhpcy5lbFxuICBpZiAoIWVsKSByZXR1cm5cbiAgaWYgKGVsLmNsYXNzTmFtZSA9PT0gXCJcIikgcmV0dXJuIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIGlmIChpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSkgPiAtMSkgcmV0dXJuIGNsYXNzZXNcbiAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSlcbiAgZWwuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJylcbiAgcmV0dXJuIGNsYXNzZXNcbn1cblxuRWxlbWVudENsYXNzLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgdmFyIGVsID0gdGhpcy5lbFxuICBpZiAoIWVsKSByZXR1cm5cbiAgaWYgKGVsLmNsYXNzTmFtZSA9PT0gXCJcIikgcmV0dXJuXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgdmFyIGlkeCA9IGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKVxuICBpZiAoaWR4ID4gLTEpIGNsYXNzZXMuc3BsaWNlKGlkeCwgMSlcbiAgZWwuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJylcbiAgcmV0dXJuIGNsYXNzZXNcbn1cblxuRWxlbWVudENsYXNzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgdmFyIGVsID0gdGhpcy5lbFxuICBpZiAoIWVsKSByZXR1cm5cbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICByZXR1cm4gaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpID4gLTFcbn1cblxuRWxlbWVudENsYXNzLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgdmFyIGVsID0gdGhpcy5lbFxuICBpZiAoIWVsKSByZXR1cm5cbiAgaWYgKHRoaXMuaGFzKGNsYXNzTmFtZSkpIHRoaXMucmVtb3ZlKGNsYXNzTmFtZSlcbiAgZWxzZSB0aGlzLmFkZChjbGFzc05hbWUpXG59XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfVxuICAgICAgdGhyb3cgVHlwZUVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgdmFyIG07XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCFlbWl0dGVyLl9ldmVudHMgfHwgIWVtaXR0ZXIuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSAwO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKGVtaXR0ZXIuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gMTtcbiAgZWxzZVxuICAgIHJldCA9IGVtaXR0ZXIuX2V2ZW50c1t0eXBlXS5sZW5ndGg7XG4gIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIEJhc2VkIG9uIGNvZGUgdGhhdCBpcyBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBjYW5Vc2VET00gPSAhIShcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudCAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG5cdCk7XG5cblx0dmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG5cdFx0Y2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cblx0XHRjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuXHRcdGNhblVzZUV2ZW50TGlzdGVuZXJzOlxuXHRcdFx0Y2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cblx0XHRjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlblxuXG5cdH07XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fVxuXG59KCkpO1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy4yLjAgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBiYXNlQ29weSA9IHJlcXVpcmUoJ2xvZGFzaC5fYmFzZWNvcHknKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnbG9kYXNoLmtleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXJndW1lbnQganVnZ2xpbmcsXG4gKiBtdWx0aXBsZSBzb3VyY2VzLCBhbmQgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIHNvdXJjZSA9PSBudWxsXG4gICAgPyBvYmplY3RcbiAgICA6IGJhc2VDb3B5KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG4iLCIvKipcbiAqIGxvZGFzaCAzLjAuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgbmFtZXMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDb3B5KHNvdXJjZSwgcHJvcHMsIG9iamVjdCkge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgb2JqZWN0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDb3B5O1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy4wLjEgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VDYWxsYmFja2Agd2hpY2ggb25seSBzdXBwb3J0cyBgdGhpc2AgYmluZGluZ1xuICogYW5kIHNwZWNpZnlpbmcgdGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGJpbmQuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJnQ291bnRdIFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBjYWxsYmFjay5cbiAqL1xuZnVuY3Rpb24gYmluZENhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0aGlzQXJnID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuICBzd2l0Y2ggKGFyZ0NvdW50KSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG90aGVyLCBrZXksIG9iamVjdCwgc291cmNlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBwcm92aWRlZCB0byBpdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdHlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiBfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdDtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmRDYWxsYmFjaztcbiIsIi8qKlxuICogbG9kYXNoIDMuMS4xIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgYmluZENhbGxiYWNrID0gcmVxdWlyZSgnbG9kYXNoLl9iaW5kY2FsbGJhY2snKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJ2xvZGFzaC5faXNpdGVyYXRlZWNhbGwnKSxcbiAgICByZXN0UGFyYW0gPSByZXF1aXJlKCdsb2Rhc2gucmVzdHBhcmFtJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgYXNzaWducyBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3QocykgdG8gYSBnaXZlblxuICogZGVzdGluYXRpb24gb2JqZWN0LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIGBfLmFzc2lnbmAsIGBfLmRlZmF1bHRzYCwgYW5kIGBfLm1lcmdlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIHJlc3RQYXJhbShmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAyID8gc291cmNlc1tsZW5ndGggLSAyXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgdGhpc0FyZyA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBiaW5kQ2FsbGJhY2soY3VzdG9taXplciwgdGhpc0FyZywgNSk7XG4gICAgICBsZW5ndGggLT0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VzdG9taXplciA9IHR5cGVvZiB0aGlzQXJnID09ICdmdW5jdGlvbicgPyB0aGlzQXJnIDogdW5kZWZpbmVkO1xuICAgICAgbGVuZ3RoIC09IChjdXN0b21pemVyID8gMSA6IDApO1xuICAgIH1cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFzc2lnbmVyO1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy45LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSA+IDUpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZm5Ub1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZywgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIHJldHVybiBpc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmkgd2hpY2ggcmV0dXJuICdmdW5jdGlvbicgZm9yIHJlZ2V4ZXNcbiAgLy8gYW5kIFNhZmFyaSA4IGVxdWl2YWxlbnRzIHdoaWNoIHJldHVybiAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgY29uc3RydWN0b3JzLlxuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGZ1bmNUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAvLyBBdm9pZCBhIFY4IEpJVCBidWcgaW4gQ2hyb21lIDE5LTIwLlxuICAvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTIyOTEgZm9yIG1vcmUgZGV0YWlscy5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOYXRpdmUoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYXRpdmUoXyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICByZXR1cm4gcmVJc05hdGl2ZS50ZXN0KGZuVG9TdHJpbmcuY2FsbCh2YWx1ZSkpO1xuICB9XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIHJlSXNIb3N0Q3Rvci50ZXN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCIvKipcbiAqIGxvZGFzaCAzLjAuOSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXlxcZCskLztcblxuLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBcImxlbmd0aFwiIHByb3BlcnR5IHZhbHVlIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgYSBbSklUIGJ1Z10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0Mjc5MilcbiAqIHRoYXQgYWZmZWN0cyBTYWZhcmkgb24gYXQgbGVhc3QgaU9TIDguMS04LjMgQVJNNjQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBcImxlbmd0aFwiIHZhbHVlLlxuICovXG52YXIgZ2V0TGVuZ3RoID0gYmFzZVByb3BlcnR5KCdsZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgPyArdmFsdWUgOiAtMTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdCkpIHtcbiAgICB2YXIgb3RoZXIgPSBvYmplY3RbaW5kZXhdO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyAodmFsdWUgPT09IG90aGVyKSA6IChvdGhlciAhPT0gb3RoZXIpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIGJhc2VkIG9uIFtgVG9MZW5ndGhgXShodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSXRlcmF0ZWVDYWxsO1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy4yLjAgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBiYXNlQXNzaWduID0gcmVxdWlyZSgnbG9kYXNoLl9iYXNlYXNzaWduJyksXG4gICAgY3JlYXRlQXNzaWduZXIgPSByZXF1aXJlKCdsb2Rhc2guX2NyZWF0ZWFzc2lnbmVyJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJ2xvZGFzaC5rZXlzJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmFzc2lnbmAgZm9yIGN1c3RvbWl6aW5nIGFzc2lnbmVkIHZhbHVlcyB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBhcmd1bWVudCBqdWdnbGluZywgbXVsdGlwbGUgc291cmNlcywgYW5kIGB0aGlzYCBiaW5kaW5nIGBjdXN0b21pemVyYFxuICogZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbldpdGgob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBwcm9wcyA9IGtleXMoc291cmNlKSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHJlc3VsdCA9IGN1c3RvbWl6ZXIodmFsdWUsIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKTtcblxuICAgIGlmICgocmVzdWx0ID09PSByZXN1bHQgPyAocmVzdWx0ICE9PSB2YWx1ZSkgOiAodmFsdWUgPT09IHZhbHVlKSkgfHxcbiAgICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICAgIG9iamVjdFtrZXldID0gcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIEFzc2lnbnMgb3duIGVudW1lcmFibGUgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0KHMpIHRvIHRoZSBkZXN0aW5hdGlvblxuICogb2JqZWN0LiBTdWJzZXF1ZW50IHNvdXJjZXMgb3ZlcndyaXRlIHByb3BlcnR5IGFzc2lnbm1lbnRzIG9mIHByZXZpb3VzIHNvdXJjZXMuXG4gKiBJZiBgY3VzdG9taXplcmAgaXMgcHJvdmlkZWQgaXQgaXMgaW52b2tlZCB0byBwcm9kdWNlIHRoZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBUaGUgYGN1c3RvbWl6ZXJgIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmQgaW52b2tlZCB3aXRoIGZpdmUgYXJndW1lbnRzOlxuICogKG9iamVjdFZhbHVlLCBzb3VyY2VWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSkuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAgYW5kIGlzIGJhc2VkIG9uXG4gKiBbYE9iamVjdC5hc3NpZ25gXShodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LmFzc2lnbikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBleHRlbmRcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBjdXN0b21pemVyYC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uYXNzaWduKHsgJ3VzZXInOiAnYmFybmV5JyB9LCB7ICdhZ2UnOiA0MCB9LCB7ICd1c2VyJzogJ2ZyZWQnIH0pO1xuICogLy8gPT4geyAndXNlcic6ICdmcmVkJywgJ2FnZSc6IDQwIH1cbiAqXG4gKiAvLyB1c2luZyBhIGN1c3RvbWl6ZXIgY2FsbGJhY2tcbiAqIHZhciBkZWZhdWx0cyA9IF8ucGFydGlhbFJpZ2h0KF8uYXNzaWduLCBmdW5jdGlvbih2YWx1ZSwgb3RoZXIpIHtcbiAqICAgcmV0dXJuIF8uaXNVbmRlZmluZWQodmFsdWUpID8gb3RoZXIgOiB2YWx1ZTtcbiAqIH0pO1xuICpcbiAqIGRlZmF1bHRzKHsgJ3VzZXInOiAnYmFybmV5JyB9LCB7ICdhZ2UnOiAzNiB9LCB7ICd1c2VyJzogJ2ZyZWQnIH0pO1xuICogLy8gPT4geyAndXNlcic6ICdiYXJuZXknLCAnYWdlJzogMzYgfVxuICovXG52YXIgYXNzaWduID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpIHtcbiAgcmV0dXJuIGN1c3RvbWl6ZXJcbiAgICA/IGFzc2lnbldpdGgob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpXG4gICAgOiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbjtcbiIsIi8qKlxuICogbG9kYXNoIDMuMC40IChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIFwibGVuZ3RoXCIgcHJvcGVydHkgdmFsdWUgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKVxuICogdGhhdCBhZmZlY3RzIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIGJhc2VkIG9uIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpICYmXG4gICAgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIGxvZGFzaCAzLjAuNCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSA+IDUpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZm5Ub1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZywgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0FycmF5ID0gZ2V0TmF0aXZlKEFycmF5LCAnaXNBcnJheScpO1xuXG4vKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICByZXR1cm4gaXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFycmF5VGFnO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmkgd2hpY2ggcmV0dXJuICdmdW5jdGlvbicgZm9yIHJlZ2V4ZXNcbiAgLy8gYW5kIFNhZmFyaSA4IGVxdWl2YWxlbnRzIHdoaWNoIHJldHVybiAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgY29uc3RydWN0b3JzLlxuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGZ1bmNUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAvLyBBdm9pZCBhIFY4IEpJVCBidWcgaW4gQ2hyb21lIDE5LTIwLlxuICAvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTIyOTEgZm9yIG1vcmUgZGV0YWlscy5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOYXRpdmUoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYXRpdmUoXyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICByZXR1cm4gcmVJc05hdGl2ZS50ZXN0KGZuVG9TdHJpbmcuY2FsbCh2YWx1ZSkpO1xuICB9XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIHJlSXNIb3N0Q3Rvci50ZXN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy4xLjIgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBnZXROYXRpdmUgPSByZXF1aXJlKCdsb2Rhc2guX2dldG5hdGl2ZScpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnbG9kYXNoLmlzYXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC5pc2FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eXFxkKyQvO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2tleXMnKTtcblxuLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIFwibGVuZ3RoXCIgcHJvcGVydHkgdmFsdWUgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKVxuICogdGhhdCBhZmZlY3RzIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSA/ICt2YWx1ZSA6IC0xO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBBIGZhbGxiYWNrIGltcGxlbWVudGF0aW9uIG9mIGBPYmplY3Qua2V5c2Agd2hpY2ggY3JlYXRlcyBhbiBhcnJheSBvZiB0aGVcbiAqIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBzaGltS2V5cyhvYmplY3QpIHtcbiAgdmFyIHByb3BzID0ga2V5c0luKG9iamVjdCksXG4gICAgICBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IHByb3BzTGVuZ3RoICYmIG9iamVjdC5sZW5ndGg7XG5cbiAgdmFyIGFsbG93SW5kZXhlcyA9ICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBwcm9wc0xlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgaWYgKChhbGxvd0luZGV4ZXMgJiYgaXNJbmRleChrZXksIGxlbmd0aCkpIHx8IGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG52YXIga2V5cyA9ICFuYXRpdmVLZXlzID8gc2hpbUtleXMgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlID09PSBvYmplY3QpIHx8XG4gICAgICAodHlwZW9mIG9iamVjdCAhPSAnZnVuY3Rpb24nICYmIGlzQXJyYXlMaWtlKG9iamVjdCkpKSB7XG4gICAgcmV0dXJuIHNoaW1LZXlzKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBuYXRpdmVLZXlzKG9iamVjdCkgOiBbXTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7XG4gIGxlbmd0aCA9IChsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSkgJiYgbGVuZ3RoKSB8fCAwO1xuXG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgaW5kZXggPSAtMSxcbiAgICAgIGlzUHJvdG8gPSB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlID09PSBvYmplY3QsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBsZW5ndGggPiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IChpbmRleCArICcnKTtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoc2tpcEluZGV4ZXMgJiYgaXNJbmRleChrZXksIGxlbmd0aCkpICYmXG4gICAgICAgICEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsIi8qKlxuICogbG9kYXNoIDMuNi4xIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZVxuICogY3JlYXRlZCBmdW5jdGlvbiBhbmQgYXJndW1lbnRzIGZyb20gYHN0YXJ0YCBhbmQgYmV5b25kIHByb3ZpZGVkIGFzIGFuIGFycmF5LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBiYXNlZCBvbiB0aGUgW3Jlc3QgcGFyYW1ldGVyXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9GdW5jdGlvbnMvcmVzdF9wYXJhbWV0ZXJzKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBzYXkgPSBfLnJlc3RQYXJhbShmdW5jdGlvbih3aGF0LCBuYW1lcykge1xuICogICByZXR1cm4gd2hhdCArICcgJyArIF8uaW5pdGlhbChuYW1lcykuam9pbignLCAnKSArXG4gKiAgICAgKF8uc2l6ZShuYW1lcykgPiAxID8gJywgJiAnIDogJycpICsgXy5sYXN0KG5hbWVzKTtcbiAqIH0pO1xuICpcbiAqIHNheSgnaGVsbG8nLCAnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcycpO1xuICogLy8gPT4gJ2hlbGxvIGZyZWQsIGJhcm5leSwgJiBwZWJibGVzJ1xuICovXG5mdW5jdGlvbiByZXN0UGFyYW0oZnVuYywgc3RhcnQpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogKCtzdGFydCB8fCAwKSwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICByZXN0ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICByZXN0W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhcnQpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCByZXN0KTtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmdzWzBdLCByZXN0KTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmdzWzBdLCBhcmdzWzFdLCByZXN0KTtcbiAgICB9XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgaW5kZXggPSAtMTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSByZXN0O1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzdFBhcmFtO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCdleGVudicpO1xudmFyIE1vZGFsUG9ydGFsID0gUmVhY3QuY3JlYXRlRmFjdG9yeShyZXF1aXJlKCcuL01vZGFsUG9ydGFsJykpO1xudmFyIGFyaWFBcHBIaWRlciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYXJpYUFwcEhpZGVyJyk7XG52YXIgZWxlbWVudENsYXNzID0gcmVxdWlyZSgnZWxlbWVudC1jbGFzcycpO1xudmFyIHJlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcjtcblxudmFyIFNhZmVIVE1MRWxlbWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHdpbmRvdy5IVE1MRWxlbWVudCA6IHt9O1xuXG52YXIgTW9kYWwgPSBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ01vZGFsJyxcbiAgc3RhdGljczoge1xuICAgIHNldEFwcEVsZW1lbnQ6IGFyaWFBcHBIaWRlci5zZXRFbGVtZW50LFxuICAgIGluamVjdENTUzogZnVuY3Rpb24oKSB7XG4gICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlZcbiAgICAgICAgJiYgY29uc29sZS53YXJuKCdSZWFjdC1Nb2RhbDogaW5qZWN0Q1NTIGhhcyBiZWVuIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnYW5kIG5vIGxvbmdlciBoYXMgYW55IGVmZmVjdC4gSXQgd2lsbCBiZSByZW1vdmVkIGluIGEgbGF0ZXIgdmVyc2lvbicpO1xuICAgIH1cbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBpc09wZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgc3R5bGU6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjb250ZW50OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgICAgb3ZlcmxheTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIH0pLFxuICAgIGFwcEVsZW1lbnQ6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFNhZmVIVE1MRWxlbWVudCksXG4gICAgb25SZXF1ZXN0Q2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNsb3NlVGltZW91dE1TOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGFyaWFIaWRlQXBwOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgYXJpYUhpZGVBcHA6IHRydWUsXG4gICAgICBjbG9zZVRpbWVvdXRNUzogMFxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMubm9kZS5jbGFzc05hbWUgPSAnUmVhY3RNb2RhbFBvcnRhbCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuICAgIHRoaXMucmVuZGVyUG9ydGFsKHRoaXMucHJvcHMpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5ld1Byb3BzKSB7XG4gICAgdGhpcy5yZW5kZXJQb3J0YWwobmV3UHJvcHMpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMubm9kZSk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9LFxuXG4gIHJlbmRlclBvcnRhbDogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuaXNPcGVuKSB7XG4gICAgICBlbGVtZW50Q2xhc3MoZG9jdW1lbnQuYm9keSkuYWRkKCdSZWFjdE1vZGFsX19Cb2R5LS1vcGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRDbGFzcyhkb2N1bWVudC5ib2R5KS5yZW1vdmUoJ1JlYWN0TW9kYWxfX0JvZHktLW9wZW4nKTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuYXJpYUhpZGVBcHApIHtcbiAgICAgIGFyaWFBcHBIaWRlci50b2dnbGUocHJvcHMuaXNPcGVuLCBwcm9wcy5hcHBFbGVtZW50KTtcbiAgICB9XG4gICAgc2FuaXRpemVQcm9wcyhwcm9wcyk7XG4gICAgdGhpcy5wb3J0YWwgPSByZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcih0aGlzLCBNb2RhbFBvcnRhbChwcm9wcyksIHRoaXMubm9kZSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFJlYWN0LkRPTS5ub3NjcmlwdCgpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc2FuaXRpemVQcm9wcyhwcm9wcykge1xuICBkZWxldGUgcHJvcHMucmVmO1xufVxuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBkaXYgPSBSZWFjdC5ET00uZGl2O1xudmFyIGZvY3VzTWFuYWdlciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvZm9jdXNNYW5hZ2VyJyk7XG52YXIgc2NvcGVUYWIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3Njb3BlVGFiJyk7XG52YXIgQXNzaWduID0gcmVxdWlyZSgnbG9kYXNoLmFzc2lnbicpO1xuXG5cbi8vIHNvIHRoYXQgb3VyIENTUyBpcyBzdGF0aWNhbGx5IGFuYWx5emFibGVcbnZhciBDTEFTU19OQU1FUyA9IHtcbiAgb3ZlcmxheToge1xuICAgIGJhc2U6ICdSZWFjdE1vZGFsX19PdmVybGF5JyxcbiAgICBhZnRlck9wZW46ICdSZWFjdE1vZGFsX19PdmVybGF5LS1hZnRlci1vcGVuJyxcbiAgICBiZWZvcmVDbG9zZTogJ1JlYWN0TW9kYWxfX092ZXJsYXktLWJlZm9yZS1jbG9zZSdcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGJhc2U6ICdSZWFjdE1vZGFsX19Db250ZW50JyxcbiAgICBhZnRlck9wZW46ICdSZWFjdE1vZGFsX19Db250ZW50LS1hZnRlci1vcGVuJyxcbiAgICBiZWZvcmVDbG9zZTogJ1JlYWN0TW9kYWxfX0NvbnRlbnQtLWJlZm9yZS1jbG9zZSdcbiAgfVxufTtcblxudmFyIGRlZmF1bHRTdHlsZXMgPSB7XG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbiAgICAgICAgOiAnZml4ZWQnLFxuICAgIHRvcCAgICAgICAgICAgICA6IDAsXG4gICAgbGVmdCAgICAgICAgICAgIDogMCxcbiAgICByaWdodCAgICAgICAgICAgOiAwLFxuICAgIGJvdHRvbSAgICAgICAgICA6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSknXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwb3NpdGlvbiAgICAgICAgICAgICAgICA6ICdhYnNvbHV0ZScsXG4gICAgdG9wICAgICAgICAgICAgICAgICAgICAgOiAnNDBweCcsXG4gICAgbGVmdCAgICAgICAgICAgICAgICAgICAgOiAnNDBweCcsXG4gICAgcmlnaHQgICAgICAgICAgICAgICAgICAgOiAnNDBweCcsXG4gICAgYm90dG9tICAgICAgICAgICAgICAgICAgOiAnNDBweCcsXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgICAgOiAnMXB4IHNvbGlkICNjY2MnLFxuICAgIGJhY2tncm91bmQgICAgICAgICAgICAgIDogJyNmZmYnLFxuICAgIG92ZXJmbG93ICAgICAgICAgICAgICAgIDogJ2F1dG8nLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nIDogJ3RvdWNoJyxcbiAgICBib3JkZXJSYWRpdXMgICAgICAgICAgICA6ICc0cHgnLFxuICAgIG91dGxpbmUgICAgICAgICAgICAgICAgIDogJ25vbmUnLFxuICAgIHBhZGRpbmcgICAgICAgICAgICAgICAgIDogJzIwcHgnXG4gIH1cbn07XG5cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxudmFyIE1vZGFsUG9ydGFsID0gbW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdNb2RhbFBvcnRhbCcsXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgb3ZlcmxheToge30sXG4gICAgICAgIGNvbnRlbnQ6IHt9XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZnRlck9wZW46IGZhbHNlLFxuICAgICAgYmVmb3JlQ2xvc2U6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy8gRm9jdXMgbmVlZHMgdG8gYmUgc2V0IHdoZW4gbW91bnRpbmcgYW5kIGFscmVhZHkgb3BlblxuICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRGb2N1c0FmdGVyUmVuZGVyKHRydWUpO1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZVRpbWVyKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXdQcm9wcykge1xuICAgIC8vIEZvY3VzIG9ubHkgbmVlZHMgdG8gYmUgc2V0IG9uY2Ugd2hlbiB0aGUgbW9kYWwgaXMgYmVpbmcgb3BlbmVkXG4gICAgaWYgKCF0aGlzLnByb3BzLmlzT3BlbiAmJiBuZXdQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0Rm9jdXNBZnRlclJlbmRlcih0cnVlKTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgIW5ld1Byb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5mb2N1c0FmdGVyUmVuZGVyKSB7XG4gICAgICB0aGlzLmZvY3VzQ29udGVudCgpO1xuICAgICAgdGhpcy5zZXRGb2N1c0FmdGVyUmVuZGVyKGZhbHNlKTtcbiAgICB9XG4gIH0sXG5cbiAgc2V0Rm9jdXNBZnRlclJlbmRlcjogZnVuY3Rpb24gKGZvY3VzKSB7XG4gICAgdGhpcy5mb2N1c0FmdGVyUmVuZGVyID0gZm9jdXM7XG4gIH0sXG5cbiAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgZm9jdXNNYW5hZ2VyLnNldHVwU2NvcGVkRm9jdXModGhpcy5ub2RlKTtcbiAgICBmb2N1c01hbmFnZXIubWFya0ZvckZvY3VzTGF0ZXIoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpc09wZW46IHRydWV9LCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FmdGVyT3BlbjogdHJ1ZX0pO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5vd25lckhhbmRsZXNDbG9zZSgpKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TID4gMClcbiAgICAgIHRoaXMuY2xvc2VXaXRoVGltZW91dCgpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuY2xvc2VXaXRob3V0VGltZW91dCgpO1xuICB9LFxuXG4gIGZvY3VzQ29udGVudDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZWZzLmNvbnRlbnQuZm9jdXMoKTtcbiAgfSxcblxuICBjbG9zZVdpdGhUaW1lb3V0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtiZWZvcmVDbG9zZTogdHJ1ZX0sIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5jbG9zZVRpbWVyID0gc2V0VGltZW91dCh0aGlzLmNsb3NlV2l0aG91dFRpbWVvdXQsIHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgY2xvc2VXaXRob3V0VGltZW91dDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhZnRlck9wZW46IGZhbHNlLFxuICAgICAgYmVmb3JlQ2xvc2U6IGZhbHNlXG4gICAgfSwgdGhpcy5hZnRlckNsb3NlKTtcbiAgfSxcblxuICBhZnRlckNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICBmb2N1c01hbmFnZXIucmV0dXJuRm9jdXMoKTtcbiAgICBmb2N1c01hbmFnZXIudGVhcmRvd25TY29wZWRGb2N1cygpO1xuICB9LFxuXG4gIGhhbmRsZUtleURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gOSAvKnRhYiovKSBzY29wZVRhYih0aGlzLnJlZnMuY29udGVudCwgZXZlbnQpO1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDI3IC8qZXNjKi8pIHRoaXMucmVxdWVzdENsb3NlKCk7XG4gIH0sXG5cbiAgaGFuZGxlT3ZlcmxheUNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vd25lckhhbmRsZXNDbG9zZSgpKVxuICAgICAgdGhpcy5yZXF1ZXN0Q2xvc2UoKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmZvY3VzQ29udGVudCgpO1xuICB9LFxuXG4gIHJlcXVlc3RDbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3duZXJIYW5kbGVzQ2xvc2UoKSlcbiAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoKTtcbiAgfSxcblxuICBvd25lckhhbmRsZXNDbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2U7XG4gIH0sXG5cbiAgc2hvdWxkQmVDbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhdGhpcy5wcm9wcy5pc09wZW4gJiYgIXRoaXMuc3RhdGUuYmVmb3JlQ2xvc2U7XG4gIH0sXG5cbiAgYnVpbGRDbGFzc05hbWU6IGZ1bmN0aW9uKHdoaWNoLCBhZGRpdGlvbmFsKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IENMQVNTX05BTUVTW3doaWNoXS5iYXNlO1xuICAgIGlmICh0aGlzLnN0YXRlLmFmdGVyT3BlbilcbiAgICAgIGNsYXNzTmFtZSArPSAnICcrQ0xBU1NfTkFNRVNbd2hpY2hdLmFmdGVyT3BlbjtcbiAgICBpZiAodGhpcy5zdGF0ZS5iZWZvcmVDbG9zZSlcbiAgICAgIGNsYXNzTmFtZSArPSAnICcrQ0xBU1NfTkFNRVNbd2hpY2hdLmJlZm9yZUNsb3NlO1xuICAgIHJldHVybiBhZGRpdGlvbmFsID8gY2xhc3NOYW1lICsgJyAnICsgYWRkaXRpb25hbCA6IGNsYXNzTmFtZTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNob3VsZEJlQ2xvc2VkKCkgPyBkaXYoKSA6IChcbiAgICAgIGRpdih7XG4gICAgICAgIHJlZjogXCJvdmVybGF5XCIsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5idWlsZENsYXNzTmFtZSgnb3ZlcmxheScsIHRoaXMucHJvcHMub3ZlcmxheUNsYXNzTmFtZSksXG4gICAgICAgIHN0eWxlOiBBc3NpZ24oe30sIGRlZmF1bHRTdHlsZXMub3ZlcmxheSwgdGhpcy5wcm9wcy5zdHlsZS5vdmVybGF5IHx8IHt9KSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVPdmVybGF5Q2xpY2tcbiAgICAgIH0sXG4gICAgICAgIGRpdih7XG4gICAgICAgICAgcmVmOiBcImNvbnRlbnRcIixcbiAgICAgICAgICBzdHlsZTogQXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzLmNvbnRlbnQsIHRoaXMucHJvcHMuc3R5bGUuY29udGVudCB8fCB7fSksXG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmJ1aWxkQ2xhc3NOYW1lKCdjb250ZW50JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgICAgIHRhYkluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgb25DbGljazogc3RvcFByb3BhZ2F0aW9uLFxuICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duXG4gICAgICAgIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG4iLCJ2YXIgX2VsZW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5cbmZ1bmN0aW9uIHNldEVsZW1lbnQoZWxlbWVudCkge1xuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50KTtcbiAgICBlbGVtZW50ID0gJ2xlbmd0aCcgaW4gZWwgPyBlbFswXSA6IGVsO1xuICB9XG4gIF9lbGVtZW50ID0gZWxlbWVudCB8fCBfZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaGlkZShhcHBFbGVtZW50KSB7XG4gIHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KTtcbiAgKGFwcEVsZW1lbnQgfHwgX2VsZW1lbnQpLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xufVxuXG5mdW5jdGlvbiBzaG93KGFwcEVsZW1lbnQpIHtcbiAgdmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpO1xuICAoYXBwRWxlbWVudCB8fCBfZWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGUoc2hvdWxkSGlkZSwgYXBwRWxlbWVudCkge1xuICBpZiAoc2hvdWxkSGlkZSlcbiAgICBoaWRlKGFwcEVsZW1lbnQpO1xuICBlbHNlXG4gICAgc2hvdyhhcHBFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpIHtcbiAgaWYgKCFhcHBFbGVtZW50ICYmICFfZWxlbWVudClcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlYWN0LW1vZGFsOiBZb3UgbXVzdCBzZXQgYW4gZWxlbWVudCB3aXRoIGBNb2RhbC5zZXRBcHBFbGVtZW50KGVsKWAgdG8gbWFrZSB0aGlzIGFjY2Vzc2libGUnKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRGb3JUZXN0aW5nKCkge1xuICBfZWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG59XG5cbmV4cG9ydHMudG9nZ2xlID0gdG9nZ2xlO1xuZXhwb3J0cy5zZXRFbGVtZW50ID0gc2V0RWxlbWVudDtcbmV4cG9ydHMuc2hvdyA9IHNob3c7XG5leHBvcnRzLmhpZGUgPSBoaWRlO1xuZXhwb3J0cy5yZXNldEZvclRlc3RpbmcgPSByZXNldEZvclRlc3Rpbmc7XG4iLCJ2YXIgZmluZFRhYmJhYmxlID0gcmVxdWlyZSgnLi4vaGVscGVycy90YWJiYWJsZScpO1xudmFyIG1vZGFsRWxlbWVudCA9IG51bGw7XG52YXIgZm9jdXNMYXRlckVsZW1lbnQgPSBudWxsO1xudmFyIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGhhbmRsZUJsdXIoZXZlbnQpIHtcbiAgbmVlZFRvRm9jdXMgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb2N1cyhldmVudCkge1xuICBpZiAobmVlZFRvRm9jdXMpIHtcbiAgICBuZWVkVG9Gb2N1cyA9IGZhbHNlO1xuICAgIGlmICghbW9kYWxFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG5lZWQgdG8gc2VlIGhvdyBqUXVlcnkgc2hpbXMgZG9jdW1lbnQub24oJ2ZvY3VzaW4nKSBzbyB3ZSBkb24ndCBuZWVkIHRoZVxuICAgIC8vIHNldFRpbWVvdXQsIGZpcmVmb3ggZG9lc24ndCBzdXBwb3J0IGZvY3VzaW4sIGlmIGl0IGRpZCwgd2UgY291bGQgZm9jdXNcbiAgICAvLyB0aGUgZWxlbWVudCBvdXRzaWRlIG9mIGEgc2V0VGltZW91dC4gU2lkZS1lZmZlY3Qgb2YgdGhpcyBpbXBsZW1lbnRhdGlvbiBcbiAgICAvLyBpcyB0aGF0IHRoZSBkb2N1bWVudC5ib2R5IGdldHMgZm9jdXMsIGFuZCB0aGVuIHdlIGZvY3VzIG91ciBlbGVtZW50IHJpZ2h0IFxuICAgIC8vIGFmdGVyLCBzZWVtcyBmaW5lLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobW9kYWxFbGVtZW50LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKVxuICAgICAgICByZXR1cm47XG4gICAgICB2YXIgZWwgPSAoZmluZFRhYmJhYmxlKG1vZGFsRWxlbWVudClbMF0gfHwgbW9kYWxFbGVtZW50KTtcbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgfSwgMCk7XG4gIH1cbn1cblxuZXhwb3J0cy5tYXJrRm9yRm9jdXNMYXRlciA9IGZ1bmN0aW9uKCkge1xuICBmb2N1c0xhdGVyRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG59O1xuXG5leHBvcnRzLnJldHVybkZvY3VzID0gZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgZm9jdXNMYXRlckVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybignWW91IHRyaWVkIHRvIHJldHVybiBmb2N1cyB0byAnK2ZvY3VzTGF0ZXJFbGVtZW50KycgYnV0IGl0IGlzIG5vdCBpbiB0aGUgRE9NIGFueW1vcmUnKTtcbiAgfVxuICBmb2N1c0xhdGVyRWxlbWVudCA9IG51bGw7XG59O1xuXG5leHBvcnRzLnNldHVwU2NvcGVkRm9jdXMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIG1vZGFsRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cywgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbkJsdXInLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5hdHRhY2hFdmVudCgnb25Gb2N1cycsIGhhbmRsZUZvY3VzKTtcbiAgfVxufTtcblxuZXhwb3J0cy50ZWFyZG93blNjb3BlZEZvY3VzID0gZnVuY3Rpb24oKSB7XG4gIG1vZGFsRWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuZGV0YWNoRXZlbnQoJ29uQmx1cicsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LmRldGFjaEV2ZW50KCdvbkZvY3VzJywgaGFuZGxlRm9jdXMpO1xuICB9XG59O1xuXG5cbiIsInZhciBmaW5kVGFiYmFibGUgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3RhYmJhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obm9kZSwgZXZlbnQpIHtcbiAgdmFyIHRhYmJhYmxlID0gZmluZFRhYmJhYmxlKG5vZGUpO1xuICB2YXIgZmluYWxUYWJiYWJsZSA9IHRhYmJhYmxlW2V2ZW50LnNoaWZ0S2V5ID8gMCA6IHRhYmJhYmxlLmxlbmd0aCAtIDFdO1xuICB2YXIgbGVhdmluZ0ZpbmFsVGFiYmFibGUgPSAoXG4gICAgZmluYWxUYWJiYWJsZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB8fFxuICAgIC8vIGhhbmRsZSBpbW1lZGlhdGUgc2hpZnQrdGFiIGFmdGVyIG9wZW5pbmcgd2l0aCBtb3VzZVxuICAgIG5vZGUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgKTtcbiAgaWYgKCFsZWF2aW5nRmluYWxUYWJiYWJsZSkgcmV0dXJuO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YXIgdGFyZ2V0ID0gdGFiYmFibGVbZXZlbnQuc2hpZnRLZXkgPyB0YWJiYWJsZS5sZW5ndGggLSAxIDogMF07XG4gIHRhcmdldC5mb2N1cygpO1xufTtcbiIsIi8qIVxuICogQWRhcHRlZCBmcm9tIGpRdWVyeSBVSSBjb3JlXG4gKlxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9jYXRlZ29yeS91aS1jb3JlL1xuICovXG5cbmZ1bmN0aW9uIGZvY3VzYWJsZShlbGVtZW50LCBpc1RhYkluZGV4Tm90TmFOKSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuICgvaW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QvLnRlc3Qobm9kZU5hbWUpID9cbiAgICAhZWxlbWVudC5kaXNhYmxlZCA6XG4gICAgXCJhXCIgPT09IG5vZGVOYW1lID9cbiAgICAgIGVsZW1lbnQuaHJlZiB8fCBpc1RhYkluZGV4Tm90TmFOIDpcbiAgICAgIGlzVGFiSW5kZXhOb3ROYU4pICYmIHZpc2libGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGhpZGRlbihlbCkge1xuICByZXR1cm4gKGVsLm9mZnNldFdpZHRoIDw9IDAgJiYgZWwub2Zmc2V0SGVpZ2h0IDw9IDApIHx8XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiB2aXNpYmxlKGVsZW1lbnQpIHtcbiAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkgYnJlYWs7XG4gICAgaWYgKGhpZGRlbihlbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHRhYmJhYmxlKGVsZW1lbnQpIHtcbiAgdmFyIHRhYkluZGV4ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gIGlmICh0YWJJbmRleCA9PT0gbnVsbCkgdGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gIHZhciBpc1RhYkluZGV4TmFOID0gaXNOYU4odGFiSW5kZXgpO1xuICByZXR1cm4gKGlzVGFiSW5kZXhOYU4gfHwgdGFiSW5kZXggPj0gMCkgJiYgZm9jdXNhYmxlKGVsZW1lbnQsICFpc1RhYkluZGV4TmFOKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhYmJhYmxlRGVzY2VuZGFudHMoZWxlbWVudCkge1xuICByZXR1cm4gW10uc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSwgMCkuZmlsdGVyKGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuIHRhYmJhYmxlKGVsKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmluZFRhYmJhYmxlRGVzY2VuZGFudHM7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL01vZGFsJyk7XG5cbiIsIi8vIGltcG9ydCBub2RlIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgeyBNYXAsIFRpbGVMYXllciwgR2VvSnNvbiB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnO1xuXG4vLyBpbXBvcnQgY29tcG9uZW50cyBmcm9tIEBwYW5vcmFtYS90b29sa2l0XG5pbXBvcnQge1xuXHRJbnRyb01hbmFnZXIsXG5cdExlZ2VuZCxcblx0UHVuY2hjYXJkXG59IGZyb20gJ0BwYW5vcmFtYS90b29sa2l0JztcblxuLypcbiAqIERhdGEgZmxvdyB2aWEgRmx1eDpcbiAqIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL2ZsdXgvZG9jcy9vdmVydmlldy5odG1sXG4gKiBcbiAqICAgICAgICAgICAgICAgICAg4pSMLS0tLS0gICBhY3Rpb25zICAgPC0tLS0t4pSQXG4gKiAgICAgICAgICAgICAgICAgIHYgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiBhY3Rpb25zIC0tPiBkaXNwYXRjaGVyIC0tPiBzdG9yZXMgLS0+IHJvb3Qgdmlld1xuICovXG5cbi8vIHN0b3Jlc1xuaW1wb3J0IEV4YW1wbGVTdG9yZSBmcm9tICcuL3N0b3Jlcy9FeGFtcGxlU3RvcmUnO1xuXG4vLyBsb2NhbCAobm90IGluc3RhbGxlZCB2aWEgbnBtKSBjb21wb25lbnRzICh2aWV3cylcbmltcG9ydCBFeGFtcGxlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9FeGFtcGxlQ29tcG9uZW50LmpzeCc7XG5cbi8vIFRPRE86IG1vdmUgdGhpcyB0byBhbm90aGVyIHJlcG8sIHByb2JhYmx5IEBwYW5vcmFtYS90b29sa2l0XG5pbXBvcnQgQ2FydG9EQlRpbGVMYXllciBmcm9tICcuL2NvbXBvbmVudHMvQ2FydG9EQlRpbGVMYXllci5qc3gnO1xuXG4vLyB1dGlsc1xuLy8gVE9ETzogcmVmYWN0b3IgdG8gdXNlIHNhbWUgc3RydWN0dXJlIGFzIFBhbm9yYW1hRGlzcGF0Y2hlcjtcbi8vIEhhdmluZyBgZmx1eGAgYXMgYSBkZXBlbmRlbmN5LCBhbmQgdHdvIGRpZmZlcmVudCBmaWxlcywgaXMgb3ZlcmtpbGwuXG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICcuL3V0aWxzL0FwcERpc3BhdGNoZXInO1xuaW1wb3J0IHsgQXBwQWN0aW9uVHlwZXMsIEV4YW1wbGVBY3Rpb25zIH0gZnJvbSAnLi91dGlscy9BcHBBY3Rpb25DcmVhdG9yJztcblxuLy8gY29uZmlnXG5pbXBvcnQgdGlsZUxheWVycyBmcm9tICcuLi9iYXNlbWFwcy90aWxlTGF5ZXJzLmpzb24nO1xuaW1wb3J0IGNhcnRvZGJDb25maWcgZnJvbSAnLi4vYmFzZW1hcHMvY2FydG9kYi9jb25maWcuanNvbic7XG5pbXBvcnQgY2FydG9kYkxheWVycyBmcm9tICcuLi9iYXNlbWFwcy9jYXJ0b2RiL2Jhc2VtYXBzLmpzb24nO1xuXG5cbi8vIG1haW4gYXBwIGNvbnRhaW5lclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciAocHJvcHMpIHtcblxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIHNldCB1cCBpbml0aWFsIHN0YXRlIGluIGNvbnN0cnVjdG9yXG5cdFx0Ly8gKGluc3RlYWQgb2YgRVM1LXN0eWxlIGdldEluaXRpYWxTdGF0ZSlcblx0XHR0aGlzLnN0YXRlID0gdGhpcy5nZXREZWZhdWx0U3RhdGUoKTtcblxuXHRcdC8vIGJpbmQgaGFuZGxlcnMgdG8gdGhpcyBjb21wb25lbnQgaW5zdGFuY2UsXG5cdFx0Ly8gc2luY2UgUmVhY3Qgbm8gbG9uZ2VyIGRvZXMgdGhpcyBhdXRvbWF0aWNhbGx5IHdoZW4gdXNpbmcgRVM2XG5cdFx0dGhpcy5zdG9yZUNoYW5nZWQgPSB0aGlzLnN0b3JlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25MZWdlbmRJdGVtU2VsZWN0ZWQgPSB0aGlzLm9uTGVnZW5kSXRlbVNlbGVjdGVkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZSA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRvZ2dsZUFib3V0ID0gdGhpcy50b2dnbGVBYm91dC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudHJpZ2dlckludHJvID0gdGhpcy50cmlnZ2VySW50cm8uYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uSW50cm9FeGl0ID0gdGhpcy5vbkludHJvRXhpdC5iaW5kKHRoaXMpO1xuXG5cdH1cblxuXG5cblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cdC8vIFJlYWN0IExpZmVjeWNsZVxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblxuXHRnZXREZWZhdWx0U3RhdGUgKCkge1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGRpbWVuc2lvbnM6IHtcblx0XHRcdFx0dXBwZXJMZWZ0OiB7XG5cdFx0XHRcdFx0d2lkdGg6IDAsXG5cdFx0XHRcdFx0aGVpZ2h0OiAwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHVwcGVyUmlnaHQ6IHtcblx0XHRcdFx0XHR3aWR0aDogMCxcblx0XHRcdFx0XHRoZWlnaHQ6IDBcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHNlbGVjdGVkSXRlbTogMFxuXHRcdH07XG5cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG5cblx0XHR0aGlzLmNvbXB1dGVDb21wb25lbnREaW1lbnNpb25zKCk7XG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcblxuXHRcdGNvbnNvbGUubG9nKGBXZWxjb21lIHRvIHlvdXIgRmx1eCB0b3VyLiBXYXRjaCB0aGUgZGF0YSBmbG93Li4uYCk7XG5cdFx0Y29uc29sZS5sb2coYFsxYV0gQXBwIGxpc3RlbnMgZm9yIGNoYW5nZSBldmVudHMgZGlzcGF0Y2hlZCBmcm9tIEV4YW1wbGVTdG9yZS5gKTtcblx0XHRFeGFtcGxlU3RvcmUuYWRkTGlzdGVuZXIoQXBwQWN0aW9uVHlwZXMuc3RvcmVDaGFuZ2VkLCB0aGlzLnN0b3JlQ2hhbmdlZCk7XG5cdFx0XG5cdFx0Y29uc29sZS5sb2coYFsxYl0gQXBwIHJlcXVlc3RzIGluaXRpYWwgZGF0YSBpbiBBcHAuY29tcG9uZW50RGlkTW91bnQoKS5gKTtcblx0XHRFeGFtcGxlQWN0aW9ucy5nZXRJbml0aWFsRGF0YSh0aGlzLnN0YXRlKTtcblxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuXG5cdFx0RXhhbXBsZVN0b3JlLnJlbW92ZUxpc3RlbmVyKEFwcEFjdGlvblR5cGVzLnN0b3JlQ2hhbmdlZCwgdGhpcy5zdG9yZUNoYW5nZWQpO1xuXG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUgKCkge1xuXG5cdFx0Ly9cblxuXHR9XG5cblxuXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXHQvLyBIYW5kbGVyc1xuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblxuXHRzdG9yZUNoYW5nZWQgKCkge1xuXG5cdFx0Y29uc29sZS5sb2coYFs0XSBUaGUgZGF0YSByZXF1ZXN0ZWQgb24gYXBwIGluaXQgbGFuZCBpbiB0aGUgcm9vdCB2aWV3IChBcHAuc3RvcmVDaGFuZ2VkKSwgZnJvbSB3aGVyZSB0aGV5IHdpbGwgZmxvdyBkb3duIHRoZSBjb21wb25lbnQgdHJlZS4gQSBzZXRTdGF0ZSgpIGNhbGwgdXBkYXRlcyB0aGUgZGF0YSBhbmQgdHJpZ2dlcnMgYSByZW5kZXIoKS5gKTtcblxuXHRcdGxldCBkYXRhID0gRXhhbXBsZVN0b3JlLmdldERhdGEoKTtcblxuXHRcdC8vIHNldFN0YXRlIHdpdGggdGhlIHVwZGF0ZWQgZGF0YSwgd2hpY2ggY2F1c2VzIGEgcmUtcmVuZGVyKClcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGV4YW1wbGVDb21wb25lbnQ6IHtcblx0XHRcdFx0dGl0bGU6IGRhdGEuZXhhbXBsZVRpdGxlLFxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGxlZ2VuZDogZGF0YS5sZWdlbmQsXG5cdFx0XHRwdW5jaGNhcmQ6IGRhdGEucHVuY2hjYXJkXG5cdFx0fSk7XG5cblx0fVxuXG5cdG9uTGVnZW5kSXRlbVNlbGVjdGVkICh2YWx1ZSwgaW5kZXgpIHtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VsZWN0ZWRJdGVtOiBpbmRleCxcblx0XHRcdGxlZ2VuZDoge1xuXHRcdFx0XHQuLi50aGlzLnN0YXRlLmxlZ2VuZCxcdC8vIG1lcmdlIGV4aXN0aW5nIHN0YXRlIGludG8gbmV3IHN0YXRlXG5cdFx0XHRcdHNlbGVjdGVkSXRlbTogdmFsdWVcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0fVxuXG5cdG9uV2luZG93UmVzaXplIChldmVudCkge1xuXG5cdFx0dGhpcy5jb21wdXRlQ29tcG9uZW50RGltZW5zaW9ucygpO1xuXG5cdH1cblxuXHR0b2dnbGVBYm91dCAoKSB7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFib3V0TW9kYWxPcGVuOiAhdGhpcy5zdGF0ZS5hYm91dE1vZGFsT3BlblxuXHRcdH0pO1xuXG5cdH1cblxuXHR0cmlnZ2VySW50cm8gKGV2ZW50KSB7XG5cblx0XHRpZiAodGhpcy5zdGF0ZS5hYm91dE1vZGFsT3Blbikge1xuXHRcdFx0dGhpcy50b2dnbGVBYm91dCgpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aW50cm86IHtcblx0XHRcdFx0b3BlbjogdHJ1ZSxcblx0XHRcdFx0c3RlcDogKGV2ZW50ICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQpID8gcGFyc2VJbnQoZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnN0ZXApIDogbnVsbCxcblx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0c2hvd1N0ZXBOdW1iZXJzOiBmYWxzZSxcblx0XHRcdFx0XHRza2lwTGFiZWw6ICfDlycsXG5cdFx0XHRcdFx0bmV4dExhYmVsOiAn4p+pJyxcblx0XHRcdFx0XHRwcmV2TGFiZWw6ICfin6gnLFxuXHRcdFx0XHRcdGRvbmVMYWJlbDogJ8OXJ1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdHN0ZXBzOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZWxlbWVudDogJy5sZWZ0LWNvbHVtbiAudG9wLXJvdy50ZW1wbGF0ZS10aWxlJyxcblx0XHRcdFx0XHRcdGludHJvOiAnY29weSBmb3Igc3RlcCBPTkUgZ29lcyBoZXJlJyxcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiAncmlnaHQnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRlbGVtZW50OiAnLmxlZnQtY29sdW1uIC5ib3R0b20tcm93LnRlbXBsYXRlLXRpbGUnLFxuXHRcdFx0XHRcdFx0aW50cm86ICdjb3B5IGZvciBzdGVwIFRXTyBnb2VzIGhlcmUnLFxuXHRcdFx0XHRcdFx0cG9zaXRpb246ICd0b3AnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRlbGVtZW50OiAnLnJpZ2h0LWNvbHVtbiAudG9wLXJvdy50ZW1wbGF0ZS10aWxlJyxcblx0XHRcdFx0XHRcdGludHJvOiAnY29weSBmb3Igc3RlcCBUSFJFRSBnb2VzIGhlcmUnLFxuXHRcdFx0XHRcdFx0cG9zaXRpb246ICdsZWZ0J1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZWxlbWVudDogJy5yaWdodC1jb2x1bW4gLmJvdHRvbS1yb3cudGVtcGxhdGUtdGlsZScsXG5cdFx0XHRcdFx0XHRpbnRybzogJ2NvcHkgZm9yIHN0ZXAgRk9VUiBnb2VzIGhlcmUnLFxuXHRcdFx0XHRcdFx0cG9zaXRpb246ICd0b3AnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblxuXHRcdFx0b25FeGl0OiB0aGlzLm9uSW50cm9FeGl0XG5cdFx0fSk7XG5cblx0fVxuXG5cdG9uSW50cm9FeGl0ICgpIHtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aW50cm86IHtcblx0XHRcdFx0b3BlbjogZmFsc2Vcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9XG5cblxuXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXHQvLyBIZWxwZXJzXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXG5cdGNvbXB1dGVDb21wb25lbnREaW1lbnNpb25zICgpIHtcblxuXHRcdC8vIGJhc2VkIG9mZiBvZiBzaXplcyBzdG9yZWQgd2l0aGluIF92YXJpYWJsZXMuc2NzcyAtLVxuXHRcdC8vIGlmIHlvdSBjaGFuZ2UgdGhlbSB0aGVyZSwgY2hhbmdlIHRoZW0gaGVyZS5cblx0XHRsZXQgY29udGFpbmVyUGFkZGluZyA9IDIwLFxuXHRcdFx0aGVhZGVySGVpZ2h0ID0gOTAsXG5cdFx0XHRicmVha3BvaW50V2lkdGhXaWRlID0gMTI4MCxcblx0XHRcdGJvdHRvbVJvd0hlaWdodFNob3J0ID0gMjMwLFxuXHRcdFx0Ym90dG9tUm93SGVpZ2h0VGFsbCA9IDMxMCxcblx0XHRcdGJvdHRvbVJvd0hlaWdodCxcblx0XHRcdGRpbWVuc2lvbnMgPSB7fTtcblxuXHRcdC8vIENhbGN1bGF0ZSBib3R0b20gcm93IGhlaWdodCBhcyBzZXQgYnkgbWVkaWEgYnJlYWtwb2ludHNcblx0XHRsZXQgYm90dG9tUm93RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tLXJvdycpLFxuXHRcdFx0Ym90dG9tUm93SGVpZ2h0U3R5bGU7XG5cblx0XHRpZiAoYm90dG9tUm93RWwpIHtcblx0XHRcdGJvdHRvbVJvd0hlaWdodFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYm90dG9tUm93RWwpO1xuXHRcdFx0Ym90dG9tUm93SGVpZ2h0ID0gYm90dG9tUm93RWwub2Zmc2V0SGVpZ2h0ICsgcGFyc2VGbG9hdChib3R0b21Sb3dIZWlnaHRTdHlsZS5tYXJnaW5Ub3AucmVwbGFjZSgncHgnLCAnJykpICsgcGFyc2VGbG9hdChib3R0b21Sb3dIZWlnaHRTdHlsZS5tYXJnaW5Cb3R0b20ucmVwbGFjZSgncHgnLCAnJykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRib3R0b21Sb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IGJyZWFrcG9pbnRXaWR0aFdpZGUgPyBib3R0b21Sb3dIZWlnaHRTaG9ydCA6IGJvdHRvbVJvd0hlaWdodFRhbGw7XG5cdFx0fVxuXG5cdFx0ZGltZW5zaW9ucy51cHBlclJpZ2h0ID0ge1xuXHRcdFx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBib3R0b21Sb3dIZWlnaHQgLSAzICogY29udGFpbmVyUGFkZGluZ1xuXHRcdH07XG5cdFx0ZGltZW5zaW9ucy51cHBlckxlZnQgPSB7XG5cdFx0XHRoZWlnaHQ6IGRpbWVuc2lvbnMudXBwZXJSaWdodC5oZWlnaHQgLSBoZWFkZXJIZWlnaHRcblx0XHR9O1xuXHRcdGRpbWVuc2lvbnMubG93ZXJMZWZ0ID0ge1xuXHRcdFx0aGVpZ2h0OiBib3R0b21Sb3dIZWlnaHQgLSAyICogY29udGFpbmVyUGFkZGluZ1xuXHRcdH07XG5cdFx0ZGltZW5zaW9ucy5sb3dlclJpZ2h0ID0ge1xuXHRcdFx0aGVpZ2h0OiBkaW1lbnNpb25zLmxvd2VyTGVmdC5oZWlnaHRcblx0XHR9O1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRpbWVuc2lvbnM6IGRpbWVuc2lvbnMgfSk7XG5cblx0fVxuXG5cblxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblx0Ly8gUmVuZGVyIGZ1bmN0aW9uc1xuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblxuXHRyZW5kZXJUaWxlTGF5ZXJzICgpIHtcblxuXHRcdGxldCBsYXllcnMgPSBbXTtcblxuXHRcdGlmIChjYXJ0b2RiTGF5ZXJzLmxheWVyZ3JvdXAgJiYgY2FydG9kYkxheWVycy5sYXllcmdyb3VwLmxheWVycykge1xuXHRcdFx0bGF5ZXJzID0gbGF5ZXJzLmNvbmNhdChjYXJ0b2RiTGF5ZXJzLmxheWVyZ3JvdXAubGF5ZXJzLm1hcCgoaXRlbSwgaSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxDYXJ0b0RCVGlsZUxheWVyXG5cdFx0XHRcdFx0XHRrZXk9eyAnY2FydG9kYi10aWxlLWxheWVyLScgKyBpIH1cblx0XHRcdFx0XHRcdHVzZXJJZD17IGNhcnRvZGJDb25maWcudXNlcklkIH1cblx0XHRcdFx0XHRcdHNxbD17IGl0ZW0ub3B0aW9ucy5zcWwgfVxuXHRcdFx0XHRcdFx0Y2FydG9jc3M9eyBpdGVtLm9wdGlvbnMuY2FydG9jc3MgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRpbGVMYXllcnMubGF5ZXJzKSB7XG5cdFx0XHRsYXllcnMgPSBsYXllcnMuY29uY2F0KHRpbGVMYXllcnMubGF5ZXJzLm1hcCgoaXRlbSwgaSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxUaWxlTGF5ZXJcblx0XHRcdFx0XHRcdGtleT17ICd0aWxlLWxheWVyLScgKyBpIH1cblx0XHRcdFx0XHRcdHVybD17IGl0ZW0udXJsIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBsYXllcnM7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXG5cdFx0Ly8gVE9ETzogdGhlc2UgdmFsdWVzIG5lZWQgdG8gZ28gZWxzZXdoZXJlLCBwcm9iYWJseSBpbiBhIGNvbXBvbmVudGl6ZWQgaGFzaCBwYXJzZXIvbWFuYWdlclxuXHRcdGxldCBsb2MgPSBbLTUuMjAwLCAwLjMzMF0sXG5cdFx0XHR6b29tID0gNSxcblxuXHRcdFx0bW9kYWxTdHlsZSA9IHtcblx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdFx0fSxcblx0XHRcdFx0Y29udGVudCA6IHtcblx0XHRcdFx0XHR0b3A6IG51bGwsXG5cdFx0XHRcdFx0bGVmdDogbnVsbCxcblx0XHRcdFx0XHRyaWdodDogbnVsbCxcblx0XHRcdFx0XHRib3R0b206IG51bGwsXG5cdFx0XHRcdFx0Ym9yZGVyOiBudWxsLFxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IG51bGwsXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBudWxsLFxuXHRcdFx0XHRcdHBhZGRpbmc6IG51bGwsXG5cdFx0XHRcdFx0cG9zaXRpb246IG51bGxcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGZ1bGwtaGVpZ2h0Jz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IGZ1bGwtaGVpZ2h0Jz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyBlaWdodCBsZWZ0LWNvbHVtbiBmdWxsLWhlaWdodCc+XG5cdFx0XHRcdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT0ncm93IHUtZnVsbC13aWR0aCc+XG5cdFx0XHRcdFx0XHRcdDxoMT48c3BhbiBjbGFzc05hbWU9J2hlYWRlci1tYWluJz5QQU5PUkFNQSBURU1QTEFURTwvc3Bhbj48L2gxPlxuXHRcdFx0XHRcdFx0XHQ8aDQgb25DbGljaz17IHRoaXMudG9nZ2xlQWJvdXQgfT5BQk9VVCBUSElTIE1BUDwvaDQ+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaW50cm8tYnV0dG9uXCIgZGF0YS1zdGVwPVwiMFwiIG9uQ2xpY2s9eyB0aGlzLnRyaWdnZXJJbnRybyB9PjxzcGFuIGNsYXNzTmFtZT0naWNvbiBpbmZvJy8+PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgdG9wLXJvdyB0ZW1wbGF0ZS10aWxlJyBzdHlsZT17IHsgaGVpZ2h0OiB0aGlzLnN0YXRlLmRpbWVuc2lvbnMudXBwZXJMZWZ0LmhlaWdodCArIFwicHhcIiB9IH0+XG5cdFx0XHRcdFx0XHRcdDxNYXAgY2VudGVyPXsgbG9jIH0gem9vbT17IHpvb20gfT5cblx0XHRcdFx0XHRcdFx0XHR7IHRoaXMucmVuZGVyVGlsZUxheWVycygpIH1cblx0XHRcdFx0XHRcdFx0PC9NYXA+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgYm90dG9tLXJvdyB0ZW1wbGF0ZS10aWxlJz5cblx0XHRcdFx0XHRcdFx0PGgyPkxvY2FsIGNvbXBvbmVudDo8L2gyPlxuXHRcdFx0XHRcdFx0XHQ8RXhhbXBsZUNvbXBvbmVudCB7IC4uLnRoaXMuc3RhdGUuZXhhbXBsZUNvbXBvbmVudCB9IC8+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaW50cm8tYnV0dG9uXCIgZGF0YS1zdGVwPVwiMVwiIG9uQ2xpY2s9eyB0aGlzLnRyaWdnZXJJbnRybyB9PjxzcGFuIGNsYXNzTmFtZT0naWNvbiBpbmZvJy8+PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyBmb3VyIHJpZ2h0LWNvbHVtbiBmdWxsLWhlaWdodCc+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IHRvcC1yb3cgdGVtcGxhdGUtdGlsZScgc3R5bGU9eyB7IGhlaWdodDogdGhpcy5zdGF0ZS5kaW1lbnNpb25zLnVwcGVyUmlnaHQuaGVpZ2h0ICsgXCJweFwiIH0gfT5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnN0YXRlLnB1bmNoY2FyZCA/IDxQdW5jaGNhcmQgeyAuLi50aGlzLnN0YXRlLnB1bmNoY2FyZFt0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbV0gfSAvPiA6ICcnIH1cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpbnRyby1idXR0b25cIiBkYXRhLXN0ZXA9XCIyXCIgb25DbGljaz17IHRoaXMudHJpZ2dlckludHJvIH0+PHNwYW4gY2xhc3NOYW1lPSdpY29uIGluZm8nLz48L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBib3R0b20tcm93IHRlbXBsYXRlLXRpbGUnPlxuXHRcdFx0XHRcdFx0XHQ8aDI+SW1wb3J0ZWQgY29tcG9uZW50OjwvaDI+XG5cdFx0XHRcdFx0XHRcdHsgdGhpcy5zdGF0ZS5sZWdlbmQgPyA8TGVnZW5kIHsgLi4udGhpcy5zdGF0ZS5sZWdlbmQgfSBvbkl0ZW1TZWxlY3RlZD17IHRoaXMub25MZWdlbmRJdGVtU2VsZWN0ZWQgfS8+IDogJycgfVxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImludHJvLWJ1dHRvblwiIGRhdGEtc3RlcD1cIjNcIiBvbkNsaWNrPXsgdGhpcy50cmlnZ2VySW50cm8gfT48c3BhbiBjbGFzc05hbWU9J2ljb24gaW5mbycvPjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxNb2RhbCBpc09wZW49eyB0aGlzLnN0YXRlLmFib3V0TW9kYWxPcGVuIH0gb25SZXF1ZXN0Q2xvc2U9eyB0aGlzLnRvZ2dsZUFib3V0IH0gc3R5bGU9eyBtb2RhbFN0eWxlIH0+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZUFib3V0IH0+PHNwYW4+w5c8L3NwYW4+PC9idXR0b24+XG5cdFx0XHRcdFx0PGgzPkFib3V0IHRoaXMgTWFwPC9oMz5cblx0XHRcdFx0XHQ8cD5UaGUgc3VidGl0bGUgaXMgYm9ycm93ZWQgZnJvbSBoaXN0b3JpYW4gUm9iaW4gRC5HLiBLZWxsZXksIHdobyBiZWdpbnMgb25lIG9mIGhpcyBlc3NheXMgd2l0aCB0aGUgcXVlc3Rpb24gXCJXaGF0IGlzIHRoZSBVbml0ZWQgU3RhdGVzLCBpZiBub3QgYSBuYXRpb24gb2Ygb3ZlcmxhcHBpbmcgZGlhc3BvcmFzP1wiIEF0IGFsbCBwb2ludHMgaW4gaXRzIGhpc3RvcnksIGEgc2lnbmlmaWNhbnQgcHJvcG9ydGlvbiBvZiB0aGUgcG9wdWxhdGlvbiBvZiB0aGUgVW5pdGVkIFN0YXRlcyBoYWQgYmVlbiBib3JuIGluIG90aGVyIGNvdW50cmllcyBhbmQgcmVnaW9ucy4gVGhpcyBiZWluZyB0aGUgY2FzZSwgQW1lcmljYW4gaGlzdG9yeSBjYW4gbmV2ZXIgYmUgdW5kZXJzdG9vZCBieSBqdXN0IGxvb2tpbmcgd2l0aGluIGl0cyBib3JkZXJzLiBUaGUgY3VsdHVyZSBhbmQgcG9saXRpY3Mgb2YgdGhlIFVTIGhhdmUgYWx3YXlzIGJlZW4gcHJvZm91bmRseSBzaGFwZWQgYnkgdGhlIG1hdGVyaWFsIGFuZCBlbW90aW9uYWwgdGllcyBtYW55IG9mIGl0cyByZXNpZGVudHMgaGF2ZSBoYWQgdG8gdGhlIHBsYWNlcyB3aGVyZSB0aGV5IHdlcmUgYm9ybi4gVGhpcyBtYXAgd2lsbCBhbGxvdyB5b3UgdG8gYmVnaW4gdG8gZXhwbG9yZSB0aG9zZSBjb25uZWN0aW9ucyBhdCB0aGUgYmFzaWMgbGV2ZWwgb2YgZGVtb2dyYXBoaWMgc3RhdGlzdGljcy4gPC9wPlxuXHRcdFx0XHRcdDxoMz5Tb3VyY2VzPC9oMz5cblx0XHRcdFx0XHQ8cD5BbGwgb2YgdGhlIGRhdGEgY29tZXMgZnJvbSA8YSBocmVmPSdodHRwczovL3d3dy5uaGdpcy5vcmcvJz5NaW5uZXNvdGEgUG9wdWxhdGlvbiBDZW50ZXIsIE5hdGlvbmFsIEhpc3RvcmljYWwgR2VvZ3JhcGhpYyBJbmZvcm1hdGlvbiBTeXN0ZW06IFZlcnNpb24gMi4wIChNaW5uZWFwb2xpcywgTU46IFVuaXZlcnNpdHkgb2YgTWlubmVzb3RhLCAyMDExKTwvYT4uIENvdW50eSBib3VuZGFyaWVzIGFyZSBmcm9tIHRoZSBOZXdiZXJyeSBMaWJyYXJ5J3MgPGEgaHJlZj0naHR0cDovL3B1YmxpY2F0aW9ucy5uZXdiZXJyeS5vcmcvYWhjYnAvJz5BdGxhcyBvZiBIaXN0b3JpY2FsIENvdW50eSBCb3VuZGFyaWVzPC9hPi48L3A+XG5cdFx0XHRcdFx0PGgzPlN1Z2dlc3RlZCBSZWFkaW5nPC9oMz5cblx0XHRcdFx0XHQ8cD5NdWNoIG9mIHRoZSBiZXN0IHNjaG9sYXJzaGlwIG9uIHRoZSBmb3JlaWduIGJvcm4gY29uY2VudHJhdGVzIG9uIHBhcnRpY3VsYXIgZ3JvdXBzIGF0IHNwZWNpZmljIG1vbWVudHMgaW4gdGltZSwgd29ya3MgbGlrZSBHZW9yZ2UgSi4gU2FuY2hleidzIDxjaXRlPkJlY29taW5nIE1leGljYW4gQW1lcmljYW46IEV0aG5pY2l0eSwgQ3VsdHVyZSBhbmQgSWRlbnRpdHkgaW4gQ2hpY2FubyBMb3MgQW5nZWxlcywgMTkwMC0xOTQ1PC9jaXRlPi4gU29tZSB0aG91Z2h0ZnVsIHdvcmtzIHRoYXQgZGVhbCB3aXRoIHRoZSBmb3JlaWduLWJvcm4gcG9wdWxhdGlvbiBhbmQgaXNzdWVzIG9mIG1pZ3JhdGlvbiBtb3JlIGdlbmVyYWxseSBhcmU6PC9wPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxsaT5Sb2dlciBEYW5pZWxzLCA8Y2l0ZT5Db21pbmcgdG8gQW1lcmljYTogQSBIaXN0b3J5IG9mIEltbWlncmF0aW9uIGFuZCBFdGhuaWNpdHkgaW4gQW1lcmljYW4gTGlmZTwvY2l0ZT4gKE5ldyBZb3JrOiBIYXJwZXIgQ29sbGlucywgMTk5MCkuPC9saT5cblx0XHRcdFx0XHRcdDxsaT5UaG9tYXMgQmVuZGVyLCBlZC4gPGNpdGU+UmV0aGlua2luZyBBbWVyaWNhbiBIaXN0b3J5IGluIGEgR2xvYmFsIEFnZTwvY2l0ZT4gKEJlcmtlbGV5LCBDQTogVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhIFByZXNzLCAyMDAyKS4gW0tlbGxleSdzIGVzc2F5IFwiSG93IHRoZSBXZXN0IFdhcyBPbmU6IFRoZSBBZnJpY2FuIERpYXNwb3JhIGFuZCB0aGUgUmVtYXBwaW5nIG9mIFUuUy4gSGlzdG9yeVwiIGlzIGluIHRoaXMgY29sbGVjdGlvbi5dPC9saT5cblx0XHRcdFx0XHRcdDxsaT5IZW5yeSBZdSwgXCJMb3MgQW5nZWxlcyBhbmQgQW1lcmljYW4gU3R1ZGllcyBpbiBhIFBhY2lmaWMgV29ybGQgb2YgTWlncmF0aW9ucyxcIiA8Y2l0ZT5BbWVyaWNhbiBRdWFydGVybHk8L2NpdGU+IDU2IChTZXB0ZW1iZXIgMjAwNCkgNTMxLTU0My48L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8aDM+QWNrbm93bGVkZ2VtZW50czwvaDM+XG5cdFx0XHRcdFx0PHA+VGhpcyBtYXAgaXMgYXV0aG9yZWQgYnkgdGhlIHN0YWZmIG9mIHRoZSBEaWdpdGFsIFNjaG9sYXJzaGlwIExhYjogUm9iZXJ0IEsuIE5lbHNvbiwgU2NvdHQgTmVzYml0LCBFZHdhcmQgTC4gQXllcnMsIEp1c3RpbiBNYWRyb24sIGFuZCBOYXRoYW5pZWwgQXllcnMuIEtpbSBEJ2Fnb3N0aW5pIGFuZCBFcmljYSBIYXZlbnMgZ2VvbG9jYXRlZCBjb3VudHJ5IGxvY2F0aW9ucy48L3A+XG5cdFx0XHQgICAgPHA+VGhlIGRldmVsb3BlcnMsIGRlc2lnbmVycywgYW5kIHN0YWZmIGF0IDxhIGhyZWY9J2h0dHA6Ly9zdGFtZW4uY29tJz5TdGFtZW4gRGVzaWduPC9hPiBoYXZlIGJlZW4gZXhjZXB0aW9uYWwgcGFydG5lcnMgb24gdGhpcyBwcm9qZWN0LiBPdXIgdGhhbmtzIHRvIEthaSBDaGFuZywgSm9uIENocmlzdGVuc2VuLCBTZWFuIENvbm5lbGxleSwgU2V0aCBGaXR6c2ltbW9ucywgRXJpYyBHZWxpbmFzLCBIZWF0aGVyIEdyYXRlcywgTmljb2xldHRlIEhheWVzLCBBbGFuIE1jQ29uY2hpZSwgTWljaGFlbCBOZXVtYW4sIERhbiBSYWRlbWFjaGVyLCBFcmljIFJvZGVuYmVjaywgYW5kIEVyaWMgU29jb2xvZnNreS48L3A+XG5cdFx0XHRcdDwvTW9kYWw+XG5cblx0XHRcdFx0PEludHJvTWFuYWdlciB7IC4uLnRoaXMuc3RhdGUuaW50cm8gfSAvPlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCIvKlxuICogVE9ETzogU3VibWl0IHRoaXMgY29tcG9uZW50IGFzIGEgUFIgdG8gcmVhY3QtbGVhZmxldCxcbiAqIGluc3RlYWQgb2YgYWRkaW5nIHRvIEBwYW5vcmFtYS5cbiAqIE1pZ2h0IG5lZWQgdG8gc3VibWl0IHdpdGggdGVzdHMsIGJ1dCBvdGhlciBzaW1pbGFyIGNvbXBvbmVudHMgYXJlIG5vdCBjdXJyZW50bHkgdGVzdGVkLlxuICogV2lsbCBuZWVkIHRvIHB1bGwgaW4gQ2FydG9EQiBkZXBlbmRlbmN5IHZpYSBhbiBgbnBtIGluc3RhbGxgIGFuZCBhbiBgaW1wb3J0YFxuICogcmF0aGVyIHRoYW4gdmlhIGEgZ2xvYmFsIDxzY3JpcHQ+IGluY2x1ZGUuXG4gKi9cblxuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdGlsZUxheWVyIH0gZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyBCYXNlVGlsZUxheWVyIH0gZnJvbSAncmVhY3QtbGVhZmxldCc7XG5cbi8vIE5vdCBwb3NzaWJsZSB1bnRpbCBDYXJ0b0RCIHJlbGVhc2VzIGFuIG5wbSBwYWNrYWdlIGZvciB0aGUgQ29yZSBBUEkuXG4vLyBpbXBvcnQgeyBUaWxlcyB9IGZyb20gJ2NhcnRvZGInO1xuXG4vLyBVbnRpbCB0aGVuLCBjb25zdW1lciBhcHBsaWNhdGlvbnMgbXVzdCBpbmNsdWRlIHRoZSBjYXJ0b2RiLmpzIHNjcmlwdCBlbHNld2hlcmUsXG4vLyBlLmcuIGluIGluZGV4Lmh0bWwgYXMgPHNjcmlwdCBzcmM9XCJodHRwOi8vbGlicy5jYXJ0b2Nkbi5jb20vY2FydG9kYi5qcy92My8zLjE1L2NhcnRvZGIuY29yZS5qc1wiPjwvc2NyaXB0PlxuY29uc3QgVGlsZXMgPSBjYXJ0b2RiLlRpbGVzO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRvREJUaWxlTGF5ZXIgZXh0ZW5kcyBCYXNlVGlsZUxheWVyIHtcblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdHVzZXJJZDogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRzcWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0Y2FydG9jc3M6IFByb3BUeXBlcy5zdHJpbmdcblx0fTtcblxuXHRjb21wb25lbnRXaWxsTW91bnQgKCkge1xuXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0dGhpcy5sZWFmbGV0RWxlbWVudCA9IHRpbGVMYXllcignJywgdGhpcy5wcm9wcyk7XG5cblx0XHR0aGlzLl9nZXRDYXJ0b0RCVGlsZXNUZW1wbGF0ZXMoZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdC8vIFRPRE86IGhhbmRsZSBlcnJvclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubGVhZmxldEVsZW1lbnQuc2V0VXJsKHJlc3BvbnNlLnRpbGVzWzBdKTtcblx0XHRcdH1cblx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0X2dldENhcnRvREJUaWxlc1RlbXBsYXRlcyAoY2FsbGJhY2spIHtcblx0XHRUaWxlcy5nZXRUaWxlcyh7XG5cdFx0XHR0eXBlOiAnY2FydG9kYicsXG5cdFx0XHR1c2VyX25hbWU6IHRoaXMucHJvcHMudXNlcklkLFxuXHRcdFx0c3VibGF5ZXJzOiBbe1xuXHRcdFx0XHRcInNxbFwiOiB0aGlzLnByb3BzLnNxbCxcblx0XHRcdFx0XCJjYXJ0b2Nzc1wiOiB0aGlzLnByb3BzLmNhcnRvY3NzXG5cdFx0XHR9XVxuXHRcdH0sXG5cblx0XHRmdW5jdGlvbiAodGlsZXMsIGVycm9yKSB7XG5cdFx0XHRpZiAoIXRpbGVzIHx8IGVycm9yKSB7XG5cdFx0XHRcdGlmICghZXJyb3IpIHtcblx0XHRcdFx0XHRlcnJvciA9IFwiRW1wdHkgcmVzcG9uc2UuXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FsbGJhY2soZXJyb3IsIHRpbGVzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhbGxiYWNrKG51bGwsIHRpbGVzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXhhbXBsZVN0b3JlIGZyb20gJy4uL3N0b3Jlcy9FeGFtcGxlU3RvcmUnO1xuaW1wb3J0IHsgQXBwQWN0aW9uVHlwZXMgfSBmcm9tICcuLi91dGlscy9BcHBBY3Rpb25DcmVhdG9yJztcblxuLyoqXG4gKiBBbiBleHRyZW1lbHkgbWluaW1hbCBjb21wb25lbnQsXG4gKiBkZXNpZ25lZCBhcyBib2lsZXJwbGF0ZSBmb3IgbmV3IGNvbXBvbmVudHNcbiAqIGFuZCB0byBkZW1vbnN0cmF0ZSBkYXRhIGZsb3cgdGhyb3VnaCBhIFJlYWN0L0ZsdXggYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGVDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdC8vIHByb3BlcnR5IHZhbGlkYXRpb25cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHR0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0XHRsb2FkaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxuXHR9O1xuXG5cdC8vIHByb3BlcnR5IGRlZmF1bHRzIChFUzctc3R5bGUgUmVhY3QpXG5cdC8vIChpbnN0ZWFkIG9mIEVTNS1zdHlsZSBnZXREZWZhdWx0UHJvcHMpXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0dGl0bGU6ICdEZWZhdWx0IFRpdGxlJyxcblx0XHRsb2FkaW5nOiB0cnVlXG5cdH07XG5cblx0Y29uc3RydWN0b3IgKHByb3BzKSB7XG5cblx0XHRzdXBlcihwcm9wcyk7XG5cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG5cblx0XHQvL1xuXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCAoKSB7XG5cblx0XHQvL1xuXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cblx0XHQvL1xuXG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUgKCkge1xuXG5cdFx0Ly9cblxuXHR9XG5cblx0cmVuZGVyICgpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZXhhbXBsZS1jb21wb25lbnQnPlxuXHRcdFx0XHQ8aDM+eyB0aGlzLnByb3BzLnRpdGxlIH08L2gzPlxuXHRcdFx0XHQ8cD5Jbml0aWFsIGRhdGEgbG9hZCB7IHRoaXMucHJvcHMubG9hZGluZyA/ICdwZW5kaW5nLi4uJyA6ICdjb21wbGV0ZSEnIH08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5qc3gnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpKTtcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICcuLi91dGlscy9BcHBEaXNwYXRjaGVyJztcbmltcG9ydCB7IEFwcEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vdXRpbHMvQXBwQWN0aW9uQ3JlYXRvcic7XG5cbmltcG9ydCBzYW1wbGVEYXRhIGZyb20gJy4uLy4uL3N0YXRpYy9zYW1wbGVEYXRhLmpzb24nO1xuXG5cbmNvbnN0IEV4YW1wbGVTdG9yZSA9IHtcblxuXHRkYXRhOiBudWxsLFxuXG5cdC8qKlxuXHQgKiBTYW1wbGUgZGF0YSBsb2FkZXIsIHdpdGggc2V0VGltZW91dFxuXHQgKiBlbXVsYXRpbmcgbmV0d29yayByZXNwb25zZSBkZWxheSxcblx0ICogcmV0dXJuaW5nIHNhbXBsZSBkYXRhIGZyb20gYSBsb2NhbCBqc29uIGZpbGUuXG5cdCAqIEEgcmVhbCBkYXRhIGxvYWRlciB3b3VsZCBmb2xsb3cgdGhlIHNhbWUgcGF0dGVybixcblx0ICogYnV0IHByb2JhYmx5IG1ha2UgYW4gWEhSIGFuZCByZXR1cm4gdGhlIHJlc3BvbnNlIGRhdGEuXG5cdCAqL1xuXHRkYXRhTG9hZGVyOiB7XG5cdFx0cXVlcnk6ICh2YWx1ZSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoc2FtcGxlRGF0YSk7XG5cdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBNYWtlIGEgcmVxdWVzdCBmb3IgZGF0YSBuZWVkZWQgb24gYXBwbGljYXRpb24gaW5pdC5cblx0ICovXG5cdGdldEluaXRpYWxEYXRhOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRjb25zb2xlLmxvZyhgWzNiXSBFeGFtcGxlU3RvcmUgbWFrZXMgYSBkYXRhIHJlcXVlc3QuLi5gKTtcblxuXHRcdC8vIFNhbXBsZSBxdWVyeTsgZm9ybWF0IHZhcmllcyBieSBkYXRhIHByb3ZpZGVyXG5cdFx0dGhpcy5kYXRhTG9hZGVyLnF1ZXJ5KFtcblx0XHRcdHtcblx0XHRcdFx0cXVlcnk6IFwiU0VMRUNUICogRlJPTSB0YWJsZW5hbWVcIixcblx0XHRcdFx0Zm9ybWF0OiBcIkpTT05cIlxuXHRcdFx0fVxuXHRcdF0pLnRoZW4oKC4uLnJlc3BvbnNlcykgPT4ge1xuXG5cdFx0XHR0aGlzLnNldERhdGEodGhpcy5wYXJzZURhdGEoLi4ucmVzcG9uc2VzKSk7XG5cblx0XHR9LFxuXHRcdChlcnJvcikgPT4ge1xuXG5cdFx0XHQvLyBUT0RPOiBoYW5kbGUgdGhpcy5cblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFeGFtcGxlIHJlY2VpdmVkIGVycm9yOlwiLCBlcnJvcik7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblxuXHRcdH0pO1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIFJldHJpZXZlIGRhdGEgZnJvbSB0aGUgc3RvcmUuXG5cdCAqL1xuXHRnZXREYXRhOiBmdW5jdGlvbiAoKSB7XG5cblx0XHQvLyBGb3Igc2ltcGxpY2l0eSBvZiBleGFtcGxlLCB3ZSByZXR1cm4gYWxsIG9mIHRoZSBkYXRhLlxuXHRcdC8vIEEgcmVhbCBhcHBsaWNhdGlvbiB3b3VsZCBtb3JlIGxpa2VseSByZXR1cm4gYSBjb3B5XG5cdFx0Ly8gKHRvIGF2b2lkIGFjY2lkZW50YWwgbXV0YXRpb24gYnkgY29uc3VtZXJzKSBcblx0XHQvLyBvZiBhIHN1YnNldCBvZiB0aGUgZGF0YS5cblx0XHRyZXR1cm4gdGhpcy5kYXRhO1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIENhY2hlIHRoZSBsb2FkZWQsIHBhcnNlZCBkYXRhIGZvciBmdXR1cmUgdXNlIGJ5IHRoZSBhcHBsaWNhdGlvbi5cblx0ICovXG5cdHNldERhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XG5cblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXG5cdFx0Y29uc29sZS5sb2coYFszY10gRXhhbXBsZVN0b3JlIHVwZGF0ZXMgaXRzIGNhY2hlIHdpdGggdGhlIGxvYWRlZCBhbmQgcGFyc2VkIGRhdGEsIGFuZCBlbWl0cyBhICckeyBBcHBBY3Rpb25UeXBlcy5zdG9yZUNoYW5nZWQgfScgZXZlbnQgZnJvbSBFeGFtcGxlU3RvcmUuc2V0RGF0YSgpLmApO1xuXHRcdHRoaXMuZW1pdChBcHBBY3Rpb25UeXBlcy5zdG9yZUNoYW5nZWQpO1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIFBhcnNlIHJldHVybmVkIGRhdGEgYXMgbmVjZXNzYXJ5LlxuXHQgKi9cblx0cGFyc2VEYXRhOiBmdW5jdGlvbiAoLi4uZGF0YSkge1xuXG5cdFx0bGV0IGZpcnN0UmVzcG9uc2UgPSBkYXRhWzBdO1xuXHRcdHJldHVybiBmaXJzdFJlc3BvbnNlO1xuXG5cdH1cblxuXG59O1xuXG4vLyBNaXhpbiBFdmVudEVtaXR0ZXIgZnVuY3Rpb25hbGl0eVxuT2JqZWN0LmFzc2lnbihFeGFtcGxlU3RvcmUsIEV2ZW50RW1pdHRlci5wcm90b3R5cGUpO1xuXG4vLyBSZWdpc3RlciBjYWxsYmFjayB0byBoYW5kbGUgYWxsIHVwZGF0ZXNcbkFwcERpc3BhdGNoZXIucmVnaXN0ZXIoKGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuXHRcdGNhc2UgQXBwQWN0aW9uVHlwZXMuZ2V0SW5pdGlhbERhdGE6XG5cdFx0XHRjb25zb2xlLmxvZyhgWzNhXSBUaGUgJyR7IEFwcEFjdGlvblR5cGVzLmdldEluaXRpYWxEYXRhIH0nIGFjdGlvbiBpcyBoYW5kbGVkIGJ5IEV4YW1wbGVTdG9yZS4uLi5gKTtcblx0XHRcdEV4YW1wbGVTdG9yZS5nZXRJbml0aWFsRGF0YShhY3Rpb24uc3RhdGUpO1xuXHRcdFx0YnJlYWs7XG5cblx0fVxuXG5cdHJldHVybiB0cnVlO1xuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZVN0b3JlO1xuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnLi9BcHBEaXNwYXRjaGVyJztcblxuZXhwb3J0IGNvbnN0IEFwcEFjdGlvblR5cGVzID0ge1xuXG5cdC8vIE5vdGU6IHN0b3JlcyBlbWl0IHRoaXMgdHlwZSBvZiBldmVudC5cblx0Ly8gVGhvdWdoIGl0IGlzIG5vdCBhY3R1YWxseSBhbiBBY3Rpb24gdHlwZTtcblx0Ly8gaXQncyBlbnVtZXJhdGVkIGhlcmUgZm9yIGVhc2Ugb2YgYWNjZXNzLlxuXHRzdG9yZUNoYW5nZWQ6ICdzdG9yZUNoYW5nZWQnLFxuXG5cdGdldEluaXRpYWxEYXRhOiAnZ2V0SW5pdGlhbERhdGEnXG5cbn07XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlQWN0aW9ucyA9IHtcblxuXHQvKipcblx0ICogTG9hZCBkYXRhIG5lZWRlZCBieSB0aGUgYXBwbGljYXRpb24gb24gaW5pdC5cblx0ICovXG5cdGdldEluaXRpYWxEYXRhOiAoc3RhdGUpID0+IHtcblx0XHRjb25zb2xlLmxvZyhgWzJdIEEgJyR7IEFwcEFjdGlvblR5cGVzLmdldEluaXRpYWxEYXRhIH0nIGFjdGlvbiBpcyBicm9hZGNhc3QgZ2xvYmFsbHkgZnJvbSBBcHBBY3Rpb25DcmVhdG9yLmdldEluaXRpYWxEYXRhKCkuYCk7XG5cdFx0QXBwRGlzcGF0Y2hlci5kaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBBcHBBY3Rpb25UeXBlcy5nZXRJbml0aWFsRGF0YSxcblx0XHRcdHN0YXRlOiBzdGF0ZVxuXHRcdH0pO1xuXHR9XG5cbn1cbiIsImltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICdmbHV4JztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IERpc3BhdGNoZXIoKTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJsZWdlbmRcIjoge1xuXHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XCJFcmllIENhbmFsXCIsXG5cdFx0XHRcIlNjaHV5bGtpbGwgTmF2aWdhdGlvblwiLFxuXHRcdFx0XCJDaGVzYXBlYWtlICYgT2hpb1wiXG5cdFx0XSxcblx0XHRcInNlbGVjdGVkSXRlbVwiOiBcIkVyaWUgQ2FuYWxcIlxuXHR9LFxuXG5cdFwiZXhhbXBsZVRpdGxlXCI6IFwiRXhhbXBsZSBDb21wb25lbnRcIixcblxuXHRcInB1bmNoY2FyZFwiOiBbXG5cdFx0e1xuXHRcdFx0XCJoZWFkZXJcIjoge1xuXHRcdFx0XHRcInRpdGxlXCI6IFwiRXJpZSBDYW5hbFwiLFxuXHRcdFx0XHRcInN1YnRpdGxlXCI6IDE4NDksXG5cdFx0XHRcdFwiY2FwdGlvblwiOiAxNjIyNDQ0XG5cdFx0XHR9LFxuXHRcdFx0XCJjYXRlZ29yaWVzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDQ2LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJGbG91clwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDMyNjMwODcsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDMxOTc4Mi41MjZcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMjUyLFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJXaGVhdFwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDI3MzQzODksXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI2Nzk3MC4xMjJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNTEsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkdyYWluXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogOTI1MjMwMSxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjE3NDI5LjA3MzVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdyYWlucywgQWxjb2hvbCAmIFRvYmFjY29cIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiA4MDUxODEuNzIxNVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb21tb2RpdGllc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTMsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkJvYXJkcyAmIHNjYW50bGluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDI5NzQzMTE0MCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDQ2MTQ2LjcxXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDEzMCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU2hpbmdsZXNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiA1MTI1ODAwMCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjU2Mjlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkJ1aWxkaW5nIE1hdGVyaWFsc1wiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDQ3MTc3NS43MVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb21tb2RpdGllc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTA3LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJQcm9kdWN0IG9mIHRoZSBGb3Jlc3RcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMTA0ODQwLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxMTA0ODQwXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDI1Myxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU3RhdmVzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTU0MTU5MzU5LFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA3NzA3OS42Nzk1XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDE0Mixcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiVGltYmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTQ5NzYyNyxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjMzNjIuOTgxMlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMTEsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIldvb2RcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMTk3MCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTc5NTVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkx1bWJlclxcL1RpbWJlclxcL1dvb2RcIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiAxMjIzMjM3LjY2MDdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDI1MSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQWdyaWN1bHR1cmVcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMDIwMjU5LFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxMDIwMjU5XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJBZ3JpY3VsdHVyYWwgUHJvZHVjdHMgKG90aGVyIHRoYW4gZ3JhaW5zKVwiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDEwMjAyNTlcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDI1NSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTWVyY2hhbmRpc2VcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyNTU0NTUsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI1NTQ1NVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyNTQsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIk1hbnVmYWN0dXJlc1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDIwMzk5MCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjAzOTkwXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJGaW5pc2hlZCBQcm9kdWN0c1wiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDQ1OTQ0NVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb21tb2RpdGllc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTU4LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJNaXNjZWxsYW5lb3VzXFwvT3RoZXIgQXJ0aWNsZXNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzMTAwODgsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDMxMDA4OFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiT3RoZXIgQXJ0aWNsZXNcIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiAzMTAwODhcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxMyxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJCb2FyZHMgJiBzY2FudGxpbmdcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDI5NzQzMTE0MCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA0NDYxNDYuNzFcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNDYsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRmxvdXJcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDMyNjMwODcsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMzE5NzgyLjUyNlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiA1MSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHcmFpblwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogOTI1MjMwMSxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMTc0MjkuMDczNVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxMDcsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiUHJvZHVjdCBvZiB0aGUgRm9yZXN0XCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMTA0ODQwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDExMDQ4NDBcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTMwLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlNoaW5nbGVzXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA1MTI1ODAwMCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyNTYyOVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxNDIsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiVGltYmVyXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxNDk3NjI3LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDIzMzYyLjk4MTJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTU4LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk1pc2NlbGxhbmVvdXNcXC9PdGhlciBBcnRpY2xlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMzEwMDg4LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDMxMDA4OFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyMTEsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiV29vZFwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMTE5NzAsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTc5NTVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjUxLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkFncmljdWx0dXJlXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMDIwMjU5LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEwMjAyNTlcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjUyLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIldoZWF0XCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyNzM0Mzg5LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI2Nzk3MC4xMjJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjUzLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlN0YXZlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMTU0MTU5MzU5LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDc3MDc5LjY3OTVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjU0LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk1hbnVmYWN0dXJlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMjAzOTkwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDIwMzk5MFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyNTUsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTWVyY2hhbmRpc2VcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDI1NTQ1NSxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyNTU0NTVcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJoZWFkZXJcIjoge1xuXHRcdFx0XHRcInRpdGxlXCI6IFwiU2NodXlsa2lsbCBOYXZpZ2F0aW9uXCIsXG5cdFx0XHRcdFwic3VidGl0bGVcIjogMTg0OSxcblx0XHRcdFx0XCJjYXB0aW9uXCI6IDcxMTUyNVxuXHRcdFx0fSxcblx0XHRcdFwiY2F0ZWdvcmllc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMjksXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvYWxcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiA0ODkyMDgsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ4OTIwOFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRnVlbCBhbmQgT3JlXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogNDg5MjA4XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNTgsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIk1pc2NlbGxhbmVvdXNcXC9PdGhlciBBcnRpY2xlc1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDIyMjMxNyxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjIyMzE3XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJPdGhlciBBcnRpY2xlc1wiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDIyMjMxN1xuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdFx0XCJpdGVtc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDE1OCxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJNaXNjZWxsYW5lb3VzXFwvT3RoZXIgQXJ0aWNsZXNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDIyMjMxNyxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMjIzMTdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjI5LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvYWxcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDQ4OTIwOCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA0ODkyMDhcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJoZWFkZXJcIjoge1xuXHRcdFx0XHRcInRpdGxlXCI6IFwiQ2hlc2FwZWFrZSAmIE9oaW9cIixcblx0XHRcdFx0XCJzdWJ0aXRsZVwiOiAxODQ5XG5cdFx0XHR9LFxuXHRcdFx0XCJjYXRlZ29yaWVzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDQ2LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJGbG91clwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDIzNjYyMCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjMxODguNzZcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMjA1LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb3JuXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMjQ0MjgxLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA4NTQ5LjgzNVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNDgsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIldoZWF0XCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMjQwMDczLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA3MjAyLjE5XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDg0LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJNaWxsIG9mZmFsXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogNDU0MjMsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ0NTEuNDU0XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDI4NCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiV2hpc2tleVwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDI2NzQsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI1Mi42OTNcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogODksXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIk9hdHNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMzIwMCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjExLjJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMzEsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvcm4gbWVhbFwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDcyMjUsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE4MC42MjVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNTgsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkhheSwgU3RyYXdcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxNDcsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE0N1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNDUsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlRvYmFjY29cIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyMDAsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEwMFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMTYsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlJ5ZVwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDE3OTUsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDUwLjI2XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHcmFpbnMsIEFsY29ob2wgJiBUb2JhY2NvXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogNDQzMzQuMDE3XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMTQsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlJvdWdoIHN0b25lLCBvdGhlciB0aGFuIGxpbWVzdG9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDE3NzUwLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMTc0My43NVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA3Nixcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTGltZXN0b25lXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogODY2Mixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTc2ODYuOTM3OFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA5Nyxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiUGxhc3RlclwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDY1OTksXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDY1OTlcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNzQsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkxpbWVcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiA3MjMsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDcyM1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQnJpY2tzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogODEwMDAsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDMyNFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQ2VtZW50XCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTM4Mixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjU5LjgxNlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA4Nyxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTmFpbHNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzNjgyLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxODQuMVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA3NSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTGltZSBhbmQgQ2VtZW50XCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTQwLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxNDBcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTEwLFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJSYWlsc1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDM5MDYsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDExNy4xOFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQnVpbGRpbmcgTWF0ZXJpYWxzXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogNDc3NzcuNzgzXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMjYsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlNhbHQgXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMjAxOSxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjAxOVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyNTAsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlN1bmRyaWVzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTY5Myxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTY5M1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMjMsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlNhbHRlZCBmaXNoXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMzk5NSxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDk5LjM3NVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiU3VuZHJpZXM6IGZpc2ggaW4gYnVsayBhbmQgZ3JvY2VyaWVzXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogNDIxMS4zNzVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDIxMSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiV29vZFwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDUwODMsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDc2MjQuNVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA4MCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTHVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMzE3Nzk1Nixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDc2Ni45MzRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMjEyLFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJCYXJrXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTA3Nixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTYxNFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTHVtYmVyXFwvVGltYmVyXFwvV29vZFwiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDE0MDA1LjQzNFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb21tb2RpdGllc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTEsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkJpdHVtaW5vdXMgQ29hbFwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDUyMjQsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDUyMjRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNjUsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIklyb24gT3JlXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogNDAyNSxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDAyNVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMzAsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNva2VcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyODU0LFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyODU0XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDY1LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJJcm9uIE9yZVwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDEzNTEsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEzNTFcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMjI5LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb2FsXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTIzNixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTIzNlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRnVlbCBhbmQgT3JlXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogMTQ2OTBcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDEyNyxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU2hhZCwgSGVycmluZyAoZnJlc2gpXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogNDM0LFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA0MzRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQXBwbGVzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTI5NzAsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI1OS40XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDIxMCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiRmxheCBTZWVkc1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDE2NDMsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ2LjAwNFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMDMsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlBvdGF0b2VzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTQ0MCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDMuMlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQWdyaWN1bHR1cmFsIFByb2R1Y3RzIChvdGhlciB0aGFuIGdyYWlucylcIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiA3ODIuNjA0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNjUsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIk1hbnVyZXNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiA2NDgsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDY0OFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiT3RoZXIgQXJ0aWNsZXNcIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiA2NDhcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiA0LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkFwcGxlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMTI5NzAsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjU5LjRcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTEsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQml0dW1pbm91cyBDb2FsXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA1MjI0LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDUyMjRcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTUsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQnJpY2tzXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA4MTAwMCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAzMjRcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjAsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQ2VtZW50XCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMzgyLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI1OS44MTZcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMzEsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQ29ybiBtZWFsXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA3MjI1LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE4MC42MjVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNDYsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRmxvdXJcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDIzNjYyMCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMzE4OC43NlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiA1OCxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJIYXksIFN0cmF3XCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxNDcsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTQ3XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDY1LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIklyb24gT3JlXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA0MDI1LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQwMjVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNzQsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTGltZVwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogNzIzLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDcyM1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiA3NSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJMaW1lIGFuZCBDZW1lbnRcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE0MCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxNDBcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNzYsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTGltZXN0b25lXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA4NjYyLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE3Njg2LjkzNzhcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogODAsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTHVtYmVyXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzMTc3OTU2LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ3NjYuOTM0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDg0LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk1pbGwgb2ZmYWxcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDQ1NDIzLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ0NTEuNDU0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDg3LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk5haWxzXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzNjgyLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE4NC4xXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDg5LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk9hdHNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDEzMjAwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDIxMS4yXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDk3LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlBsYXN0ZXJcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDY1OTksXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNjU5OVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxMDMsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiUG90YXRvZXNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE0NDAsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDMuMlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxMTAsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiUmFpbHNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDM5MDYsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTE3LjE4XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDExNCxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJSb3VnaCBzdG9uZSwgb3RoZXIgdGhhbiBsaW1lc3RvbmVcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE3NzUwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDIxNzQzLjc1XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDExNixcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJSeWVcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE3OTUsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNTAuMjZcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTIzLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlNhbHRlZCBmaXNoXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzOTk1LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ5OS4zNzVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTI3LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlNoYWQsIEhlcnJpbmcgKGZyZXNoKVwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogNDM0LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQzNFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxNDUsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiVG9iYWNjb1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMjAwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEwMFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxNDgsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiV2hlYXRcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDI0MDA3Myxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA3MjAyLjE5XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDE2NSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJNYW51cmVzXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA2NDgsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNjQ4XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIwNSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb3JuXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyNDQyODEsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogODU0OS44MzVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjEwLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkZsYXggU2VlZHNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE2NDMsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDYuMDA0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIxMSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJXb29kXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA1MDgzLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDc2MjQuNVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyMTIsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQmFya1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMTA3Nixcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxNjE0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIyNixcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJTYWx0IFwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMjAxOSxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMDE5XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIyOSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb2FsXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMjM2LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEyMzZcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjMwLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkNva2VcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDI4NTQsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjg1NFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyNTAsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiU3VuZHJpZXNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE2OTMsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTY5M1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyODQsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiV2hpc2tleVwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMjY3NCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyNTIuNjkzXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9XG5cdF1cbn1cbiJdfQ==
