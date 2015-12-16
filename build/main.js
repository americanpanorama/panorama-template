(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/basemaps/cartodb/basemaps.json":[function(require,module,exports){
module.exports={"name":"PanoramaBasemap","version":"0.0.1","layergroup":{"version":"1.3.0","layers":[{"type":"mapnik","options":{"sql":"SELECT * FROM unified_basemap_layers ORDER BY ord\n","cartocss":"@water: #dde9e9;\n@waterlines: #aacccc;\n@land: #f9f9f9;\n\nMap {\n  buffer-size: 128;\n  background-color: @water;\n}\n\n#unified_basemap_layers[layer='ne_10m_coastline_2163']{\n  line-color: @waterlines;\n  line-width: 0.75;\n  line-opacity: 1;\n  line-join: round;\n  line-cap: round;\n}\n\n#unified_basemap_layers[layer='ne_10m_lakes_2163'] {\n  line-color: @waterlines;\n  line-width: 2.5;\n  line-opacity: 1;\n  line-join: round;\n  line-cap: round;\n\n  /* Soften lines at lower zooms */\n  [zoom<=7] {\n    line-width: 2.5;\n    line-color: lighten(desaturate(#aacccc,2%),2%);\n  }\n  [zoom<=5] {\n    line-width: 1.5;\n    line-color: lighten(desaturate(#aacccc,5%),5%);\n  }\n\n  /* Separate attachment because seams */\n  ::fill {\n    polygon-fill: @water;\n    polygon-opacity: 1;\n  }\n\n  /* Remove small lakes at lower zooms */\n  [scalerank>3][zoom<=5] {\n    ::fill {\n      polygon-opacity: 0;\n    }\n    line-opacity: 0;\n  }\n  [scalerank>6][zoom<=7] {\n    ::fill {\n      polygon-opacity: 0;\n    }\n    line-opacity: 0;\n  }\n}\n\n#unified_basemap_layers[layer='ne_10m_rivers_lake_centerlines_2163'] {\n  line-color: @waterlines;\n  line-width: 1.5;\n  line-opacity: 1;\n  line-join: round;\n  line-cap: round;\n\n  [name='Mississippi'],\n  [name='St. Lawrence'],\n  [name='Columbia'],\n  [name='Ohio'],\n  [name='Hudson'],\n  [name='Missouri'],\n  [name='Rio Grande'] {\n    line-width: 4;\n  }\n  [zoom<=8][name='Mississippi'],\n  [zoom<=8][name='St. Lawrence'],\n  [zoom<=8][name='Columbia'],\n  [zoom<=8][name='Ohio'],\n  [zoom<=8][name='Hudson'],\n  [zoom<=8][name='Missouri'],\n  [zoom<=8][name='Rio Grande'] {\n    line-width: 2;\n  }\n  [zoom<=8][name!='Mississippi'][name!='St. Lawrence'][name!='Rio Grande'][name!='Ohio'][name!='Hudson'][name!='Columbia'][name!='Missouri'],\n  [zoom<=6][name='Mississippi'],\n  [zoom<=6][name='Columbia'],\n  [zoom<=6][name='Ohio'],\n  [zoom<=6][name='Hudson'],\n  [zoom<=6][name='Missouri'],\n  [zoom<=6][name='Rio Grande'] {\n    line-width: 1;\n    line-color: lighten(desaturate(@waterlines,2%),2%);\n  }\n  [zoom<=6][name!='Mississippi'][name!='St. Lawrence'][name!='Rio Grande'][name!='Ohio'][name!='Hudson'][name!='Columbia'][name!='Missouri'] {\n    line-width: 0.5;\n    line-color: lighten(desaturate(@waterlines,5%),5%);\n  }\n  [zoom<=5][name!='Mississippi'][name!='St. Lawrence'][name!='Rio Grande'][name!='Ohio'][name!='Hudson'][name!='Columbia'][name!='Missouri'] {\n    line-width: 0;\n  }\n  [zoom<=5][name='Mississippi'],\n  [zoom<=5][name='St. Lawrence'],\n  [zoom<=5][name='Columbia'],\n  [zoom<=5][name='Ohio'],\n  [zoom<=5][name='Hudson'],\n  [zoom<=5][name='Missouri'],\n  [zoom<=5][name='Rio Grande'] {\n    line-width: 0.5;\n    line-color: lighten(desaturate(@waterlines,2%),2%);\n  }\n}\n\n#unified_basemap_layers[layer='ne_10m_admin_0_countries_lakes_2163'] {\n\n  line-color: @land;\n  line-width: 1;\n  line-opacity: 1;\n  line-join: round;\n  line-cap: round;\n  polygon-fill: @land;\n  polygon-opacity: 1;\n\n}\n","cartocss_version":"2.1.1"}},{"type":"mapnik","options":{"sql":"SELECT cartodb_id, lat::float, long::float, ST_Transform(the_geom,2163) as the_geom_webmercator, start, state, town, rank FROM canal_towns\n","cartocss":"@textcolor: #666;\n@halocolor: #f9f9f9;\n\nMap {\n  buffer-size: 128;\n}\n\n#canals_cities_basemap[rank=1][zoom>=5],\n#canals_cities_basemap[rank=2][zoom>=6],\n#canals_cities_basemap[rank>=3][zoom>=8]{\n  // Note: have to use markers not shields to change svg color\n  ::halo {\n    marker-placement: point;\n    marker-fill-opacity: 1;\n    marker-line-width: 0;\n    marker-type: ellipse;\n    marker-width: 9;\n    marker-fill: @halocolor;\n  }\n  marker-fill-opacity: 0.9;\n  marker-line-color: @halocolor;\n  marker-line-width: 1.5;\n  marker-line-opacity: 1;\n  marker-placement: point;\n  //marker-type: ellipse;\n  marker-file: url('https://raw.githubusercontent.com/mapbox/maki/mb-pages/src/circle-12.svg');\n  marker-width: 6;\n  marker-fill: @textcolor;\n\n  marker-allow-overlap: true;\n}\n\n@default_size: 9;\n@x_distance_positive: 3;\n@y_distance_positive: 3;\n@x_distance_negative: -3;\n@y_distance_negative: -3;\n\n#canals_cities_basemap[rank=1][zoom>=5]::labels,\n#canals_cities_basemap[rank=2][zoom>=6]::labels,\n#canals_cities_basemap[rank>=3][zoom>=8]::labels, {\n\n  text-name: [town];\n  text-face-name: 'DejaVu Sans Book';\n  text-size: @default_size;\n  [zoom>=6][rank=1] {\n    text-size: @default_size + 3;\n  }\n  text-label-position-tolerance: 0;\n  text-fill: @textcolor;\n  text-halo-fill: @halocolor;\n  text-halo-radius: 1.5;\n  // Default is upper right from dot\n  text-dy: @y_distance_negative;\n  text-dx: @x_distance_positive;\n\n  // Labels to float left instead\n  [state='Illinois'],\n  [state='Indiana'],\n  [state='Ohio'][town!='Cincinnati'],\n  [town='Bellefonte'],\n  [town='Pittsburgh'],\n  [town='Rochester'],\n  [town='Newark'],\n  [town='Oswego'],\n  [town='Buffalo'],\n  [town='Corning'],\n  [town='Bristol'],\n  [town='Reading'],\n  [town='Buchanan'] {\n    text-dx: @x_distance_negative;\n  }\n\n  // Labels to float below dot\n\n  [town='New Brunswick'],\n  [town='La Salle'],\n  [town='Lawrenceburg'],\n  [town='Akron'],\n  [town='Albany'],\n  [town='Athens'],\n  [town='Utica'],\n  [town='Reading'],\n  [town='Bordentown'],\n  [town='Philadelphia'],\n  [town='Lynchburg'],\n  [town='Toledo'],\n  [town='Pittsburgh'],\n  [town='Cincinnati'] {\n    text-dy: @y_distance_positive;\n  }\n\n  text-allow-overlap: true;\n  text-placement: point;\n  text-placement-type: dummy;\n\n}","cartocss_version":"2.1.1"}}],"minzoom":2,"maxzoom":9}}

},{}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/basemaps/cartodb/config.json":[function(require,module,exports){
module.exports={
	"userId": "digitalscholarshiplab"
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

// utils
// TODO: refactor to use same structure as PanoramaDispatcher;
// Having `flux` as a dependency, and two different files, is overkill.

var _utilsAppActionCreator = require('./utils/AppActionCreator');

var _utilsAppDispatcher = require('./utils/AppDispatcher');

var _utilsAppDispatcher2 = _interopRequireDefault(_utilsAppDispatcher);

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

    console.log('Welcome to your Panorama data flow tour!');
    console.log('Panorama applications use a variant of the `Flux` pattern, and store application state in the URL hash.');
    console.log('Here\'s an overview:');
    console.log('The root of the application (`App`) listens for changes in application state, stores them in the hash.');
    console.log('When the hash changes, App responds by passing the new state down through all its child components.');
    console.log('In this pattern, the hash is the single source of truth for application state, and all components are stateless; they do as they are told by the root of the application, which in turn is directed by the hash.');
    console.log('* * * * * * * * * *');

    this.handleAppStateChanges();

    // set up initial state in constructor
    // (instead of ES5-style getInitialState)
    this.state = this.getDefaultState();

    // bind handlers to this component instance,
    // since React no longer does this automatically when using ES6
    this.onWindowResize = this.onWindowResize.bind(this);
    this.hashChanged = this.hashChanged.bind(this);
    this.onMapMoved = this.onMapMoved.bind(this);
    this.onLegendItemSelected = this.onLegendItemSelected.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.triggerIntro = this.triggerIntro.bind(this);
    this.onIntroExit = this.onIntroExit.bind(this);
  }

  _createClass(App, [{
    key: 'handleAppStateChanges',
    value: function handleAppStateChanges() {
      var _this = this;

      console.log('[1] App registers with AppDispatcher to be notified of changes in application state, most frequently caused by user actions.');

      // Register callback to handle all updates
      _utilsAppDispatcher2['default'].register(function (action) {

        var key = undefined;

        switch (action.type) {

          case _utilsAppActionCreator.AppActionTypes.itemSelected:
            key = App.STATE_KEYS.ITEM;
            break;

          case _utilsAppActionCreator.AppActionTypes.mapMoved:
            _this.mapHashUpdated = true;
            key = _panoramaToolkit.HashManager.MAP_STATE_KEY;
            break;

        }

        if (key) {
          var hash = {};
          hash[key] = action.value;
          console.log('[6a] App is notified of a change in application state of type and value { ' + action.type + ': ' + action.value + ' }. It updates the hash with the new state....');
          _panoramaToolkit.HashManager.updateHash(hash);
        }

        return true;
      });
    }

    // ============================================================ //
    // React Lifecycle
    // ============================================================ //

  }, {
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
        selectedItemId: 0,

        // Override defaults with map state in hash, if present
        map: Object.assign({}, {
          zoom: 5,
          center: [-3.300, 2.800]
        }, _panoramaToolkit.HashManager.getState(_panoramaToolkit.HashManager.MAP_STATE_KEY))
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.computeComponentDimensions();

      console.log('[2] Immediately before the root component (`App`) mounts, it requests initial data from ExampleStore.');
      _storesExampleStore2['default'].loadInitialData().then(function () {

        console.log('[5] App responds to the initial data load by manually triggering `hashChanged()` in order to `render()` application with the loaded data.');
        _this2.hashChanged();
      }, function (error) {

        // fail loudly, do not swallow the error
        throw error;
      });

      // Prepare object to deliver default application state to HashManager,
      // with initial values paired with keys to use in the hash.
      var initialState = {};
      initialState[App.STATE_KEYS.ITEM] = this.state.selectedItemId;
      initialState[_panoramaToolkit.HashManager.MAP_STATE_KEY] = {
        zoom: this.state.map.zoom,
        center: this.state.map.center
      };

      // Overwrite default states with any states present in the hash
      initialState = Object.assign({}, initialState, _panoramaToolkit.HashManager.getState());

      // Update hash with merged result.
      // Do this before setting up the `hashChanged` event handler,
      // so that `render()` is not called until initial data are loaded.
      console.log('[3a] The hash is updated with a merge of default state and state already existing in the hash.');
      _panoramaToolkit.HashManager.updateHash(initialState);

      // Handle all hash changes subsequent to the above initialization.
      console.log('[3b] App registers with HashManager to be notified of subsequent changes in the hash.');
      _panoramaToolkit.HashManager.addListener(_panoramaToolkit.HashManager.EVENT_HASH_CHANGED, this.hashChanged);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      window.addEventListener('resize', this.onWindowResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      _panoramaToolkit.HashManager.removeListener(_panoramaToolkit.HashManager.EVENT_HASH_CHANGED, this.hashChanged);
      window.removeEventListener('resize', this.onWindowResize);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {

      // Do not re-render if the state change was just map state.
      return !this.mapHashUpdated;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}

    //

    // ============================================================ //
    // Handlers
    // ============================================================ //

  }, {
    key: 'hashChanged',
    value: function hashChanged(event, suppressRender) {

      // Ignore hash changes before initial data have loaded.
      if (!_storesExampleStore2['default'].hasLoadedInitialData()) {
        return;
      }

      if (event) {
        console.log('[6b] ...App handles a change in the hash. A setState() call updates the application with the new state and triggers a render(), from where the new state will flow down the component tree.');
      }

      var data = _storesExampleStore2['default'].getData(),
          selectedItemId = _panoramaToolkit.HashManager.getState(App.STATE_KEYS.ITEM),
          mapState = _panoramaToolkit.HashManager.getState(_panoramaToolkit.HashManager.MAP_STATE_KEY),
          newState = undefined;

      newState = {
        exampleComponent: {
          title: data.exampleTitle,
          loading: false
        },
        selectedItem: selectedItemId,
        legend: _extends({}, data.legend, { // merge existing state into new state
          selectedItem: selectedItemId
        }),
        punchcard: data.punchcard
      };

      if (mapState) {
        newState.zoom = mapState.zoom;
        newState.center = mapState.center;
      }

      // setState with the updated data, which causes a re-render()
      this.setState(newState);

      this.mapHashUpdated = false;
    }
  }, {
    key: 'onLegendItemSelected',
    value: function onLegendItemSelected(value, index) {

      if (!isNaN(index)) {
        _utilsAppActionCreator.AppActions.itemSelected(index);
      }
    }
  }, {
    key: 'onMapMoved',
    value: function onMapMoved(event) {

      if (event && event.target) {
        _utilsAppActionCreator.AppActions.mapMoved({
          zoom: event.target.getZoom(),
          center: event.target.getCenter()
        });
      }
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
          }],

          onExit: this.onIntroExit
        }
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
          return React.createElement(_panoramaToolkit.CartoDBTileLayer, {
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

      var modalStyle = {
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
                { className: 'intro-button', 'data-step': '1', onClick: this.triggerIntro },
                React.createElement('span', { className: 'icon info' })
              )
            ),
            React.createElement(
              'div',
              { className: 'row top-row template-tile', style: { height: this.state.dimensions.upperLeft.height + 'px' } },
              React.createElement(
                _reactLeaflet.Map,
                _extends({}, this.state.map, { onLeafletMoveend: this.onMapMoved }),
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
                { className: 'intro-button', 'data-step': '2', onClick: this.triggerIntro },
                React.createElement('span', { className: 'icon info' })
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'columns four right-column full-height' },
            React.createElement(
              'div',
              { className: 'row top-row template-tile', style: { height: this.state.dimensions.upperRight.height + 'px' } },
              this.state.punchcard ? React.createElement(_panoramaToolkit.Punchcard, this.state.punchcard[this.state.selectedItem]) : null,
              React.createElement(
                'button',
                { className: 'intro-button', 'data-step': '3', onClick: this.triggerIntro },
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
              this.state.legend ? React.createElement(_panoramaToolkit.Legend, _extends({}, this.state.legend, { onItemSelected: this.onLegendItemSelected })) : null,
              React.createElement(
                'button',
                { className: 'intro-button', 'data-step': '4', onClick: this.triggerIntro },
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
            '"Oh, if you take it that way," said John Bunsby, "I\'ve nothing more to say." John Bunsby\'s suspicions were confirmed.  At a less advanced season of the year the typhoon, according to a famous meteorologist, would have passed away like a luminous cascade of electric flame; but in the winter equinox it was to be feared that it would burst upon them with great violence.'
          ),
          React.createElement(
            'h3',
            null,
            'Sources'
          ),
          React.createElement(
            'p',
            null,
            'The pilot took his precautions in advance.  He reefed all sail, the pole-masts were dispensed with; all hands went forward to the bows.  A single triangular sail, of strong canvas, was hoisted as a storm-jib, so as to hold the wind from behind.  Then they waited.'
          ),
          React.createElement(
            'h3',
            null,
            'Suggested Reading'
          ),
          React.createElement(
            'p',
            null,
            'John Bunsby had requested his passengers to go below; but this imprisonment in so narrow a space, with little air, and the boat bouncing in the gale, was far from pleasant.  Neither Mr. Fogg, Fix, nor Aouda consented to leave the deck.'
          ),
          React.createElement(
            'h3',
            null,
            'Acknowledgements'
          ),
          React.createElement(
            'p',
            null,
            'The storm of rain and wind descended upon them towards eight o\'clock. With but its bit of sail, the Tankadere was lifted like a feather by a wind, an idea of whose violence can scarcely be given.  To compare her speed to four times that of a locomotive going on full steam would be below the truth.'
          )
        ),
        React.createElement(_panoramaToolkit.IntroManager, this.state.intro)
      );
    }
  }], [{
    key: 'STATE_KEYS',
    value: {
      'ITEM': 'item'
    },
    enumerable: true
  }]);

  return App;
})(React.Component);

exports['default'] = App;
module.exports = exports['default'];

},{"../basemaps/cartodb/basemaps.json":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/basemaps/cartodb/basemaps.json","../basemaps/cartodb/config.json":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/basemaps/cartodb/config.json","../basemaps/tileLayers.json":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/basemaps/tileLayers.json","./components/ExampleComponent.jsx":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/components/ExampleComponent.jsx","./stores/ExampleStore":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/stores/ExampleStore.js","./utils/AppActionCreator":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/utils/AppActionCreator.js","./utils/AppDispatcher":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/utils/AppDispatcher.js","@panorama/toolkit":"@panorama/toolkit","react":"react","react-leaflet":"react-leaflet","react-modal":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/node_modules/react-modal/lib/index.js"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/components/ExampleComponent.jsx":[function(require,module,exports){
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
   * Check if the initial data load request has completed.
   * @return {Boolean}
   */
  hasLoadedInitialData: function hasLoadedInitialData() {

    return !!this.data;
  },

  /**
   * Make a request for data needed on application init.
   */
  loadInitialData: function loadInitialData() {
    var _this = this;

    // Sample query; format varies by data provider
    return this.dataLoader.query([{
      query: 'SELECT * FROM tablename',
      format: 'JSON'
    }]).then(function () {

      _this.setData(_this.parseData.apply(_this, arguments));
      console.log('[4] ExampleStore finishes loading and parsing initial data.');
    }, function (error) {

      console.error('Example received error:', error);
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
  },

  /**
   * Parse returned data as necessary.
   */
  parseData: function parseData() {

    var firstResponse = arguments[0];
    return firstResponse;
  }

};

exports['default'] = ExampleStore;
module.exports = exports['default'];

},{"../../static/sampleData.json":"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/static/sampleData.json"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-template/src/utils/AppActionCreator.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _AppDispatcher = require('./AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var AppActionTypes = {

  itemSelected: 'itemSelected',
  mapMoved: 'mapMoved'

};

exports.AppActionTypes = AppActionTypes;
var AppActions = {

  /**
   * Dispatch action when an item is selected (usually by user action).
   * @param {String} item     ID of the selected item.
   */
  itemSelected: function itemSelected(item) {
    _AppDispatcher2['default'].dispatch({
      type: AppActionTypes.itemSelected,
      value: item
    });
  },

  /**
   * Dispatch action when map is zoomed or panned.
   * @param {Object} mapState   { zoom, center: { lat, lng } }
   */
  mapMoved: function mapMoved(mapState) {
    _AppDispatcher2['default'].dispatch({
      type: AppActionTypes.mapMoved,
      value: mapState
    });
  }

};
exports.AppActions = AppActions;

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiYXNlbWFwcy9jYXJ0b2RiL2Jhc2VtYXBzLmpzb24iLCJiYXNlbWFwcy9jYXJ0b2RiL2NvbmZpZy5qc29uIiwiYmFzZW1hcHMvdGlsZUxheWVycy5qc29uIiwibm9kZV9tb2R1bGVzL2VsZW1lbnQtY2xhc3MvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlYXNzaWduL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5fYmFzZWNvcHkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLl9iaW5kY2FsbGJhY2svaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLl9jcmVhdGVhc3NpZ25lci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guX2dldG5hdGl2ZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guX2lzaXRlcmF0ZWVjYWxsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmlzYXJndW1lbnRzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5pc2FycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5rZXlzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5yZXN0cGFyYW0vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsUG9ydGFsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2FyaWFBcHBIaWRlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9mb2N1c01hbmFnZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2NvcGVUYWIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvdGFiYmFibGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2luZGV4LmpzIiwiL1VzZXJzL2VyaWNzb2NvbG9mc2t5L0RvY3VtZW50cy9zdGFtZW4vZ2l0L3Bhbm9yYW1hLXRlbXBsYXRlL3NyYy9BcHAuanN4IiwiL1VzZXJzL2VyaWNzb2NvbG9mc2t5L0RvY3VtZW50cy9zdGFtZW4vZ2l0L3Bhbm9yYW1hLXRlbXBsYXRlL3NyYy9jb21wb25lbnRzL0V4YW1wbGVDb21wb25lbnQuanN4IiwiL1VzZXJzL2VyaWNzb2NvbG9mc2t5L0RvY3VtZW50cy9zdGFtZW4vZ2l0L3Bhbm9yYW1hLXRlbXBsYXRlL3NyYy9tYWluLmpzeCIsIi9Vc2Vycy9lcmljc29jb2xvZnNreS9Eb2N1bWVudHMvc3RhbWVuL2dpdC9wYW5vcmFtYS10ZW1wbGF0ZS9zcmMvc3RvcmVzL0V4YW1wbGVTdG9yZS5qcyIsIi9Vc2Vycy9lcmljc29jb2xvZnNreS9Eb2N1bWVudHMvc3RhbWVuL2dpdC9wYW5vcmFtYS10ZW1wbGF0ZS9zcmMvdXRpbHMvQXBwQWN0aW9uQ3JlYXRvci5qcyIsIi9Vc2Vycy9lcmljc29jb2xvZnNreS9Eb2N1bWVudHMvc3RhbWVuL2dpdC9wYW5vcmFtYS10ZW1wbGF0ZS9zcmMvdXRpbHMvQXBwRGlzcGF0Y2hlci5qcyIsInN0YXRpYy9zYW1wbGVEYXRhLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9e1wibmFtZVwiOlwiUGFub3JhbWFCYXNlbWFwXCIsXCJ2ZXJzaW9uXCI6XCIwLjAuMVwiLFwibGF5ZXJncm91cFwiOntcInZlcnNpb25cIjpcIjEuMy4wXCIsXCJsYXllcnNcIjpbe1widHlwZVwiOlwibWFwbmlrXCIsXCJvcHRpb25zXCI6e1wic3FsXCI6XCJTRUxFQ1QgKiBGUk9NIHVuaWZpZWRfYmFzZW1hcF9sYXllcnMgT1JERVIgQlkgb3JkXFxuXCIsXCJjYXJ0b2Nzc1wiOlwiQHdhdGVyOiAjZGRlOWU5O1xcbkB3YXRlcmxpbmVzOiAjYWFjY2NjO1xcbkBsYW5kOiAjZjlmOWY5O1xcblxcbk1hcCB7XFxuICBidWZmZXItc2l6ZTogMTI4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogQHdhdGVyO1xcbn1cXG5cXG4jdW5pZmllZF9iYXNlbWFwX2xheWVyc1tsYXllcj0nbmVfMTBtX2NvYXN0bGluZV8yMTYzJ117XFxuICBsaW5lLWNvbG9yOiBAd2F0ZXJsaW5lcztcXG4gIGxpbmUtd2lkdGg6IDAuNzU7XFxuICBsaW5lLW9wYWNpdHk6IDE7XFxuICBsaW5lLWpvaW46IHJvdW5kO1xcbiAgbGluZS1jYXA6IHJvdW5kO1xcbn1cXG5cXG4jdW5pZmllZF9iYXNlbWFwX2xheWVyc1tsYXllcj0nbmVfMTBtX2xha2VzXzIxNjMnXSB7XFxuICBsaW5lLWNvbG9yOiBAd2F0ZXJsaW5lcztcXG4gIGxpbmUtd2lkdGg6IDIuNTtcXG4gIGxpbmUtb3BhY2l0eTogMTtcXG4gIGxpbmUtam9pbjogcm91bmQ7XFxuICBsaW5lLWNhcDogcm91bmQ7XFxuXFxuICAvKiBTb2Z0ZW4gbGluZXMgYXQgbG93ZXIgem9vbXMgKi9cXG4gIFt6b29tPD03XSB7XFxuICAgIGxpbmUtd2lkdGg6IDIuNTtcXG4gICAgbGluZS1jb2xvcjogbGlnaHRlbihkZXNhdHVyYXRlKCNhYWNjY2MsMiUpLDIlKTtcXG4gIH1cXG4gIFt6b29tPD01XSB7XFxuICAgIGxpbmUtd2lkdGg6IDEuNTtcXG4gICAgbGluZS1jb2xvcjogbGlnaHRlbihkZXNhdHVyYXRlKCNhYWNjY2MsNSUpLDUlKTtcXG4gIH1cXG5cXG4gIC8qIFNlcGFyYXRlIGF0dGFjaG1lbnQgYmVjYXVzZSBzZWFtcyAqL1xcbiAgOjpmaWxsIHtcXG4gICAgcG9seWdvbi1maWxsOiBAd2F0ZXI7XFxuICAgIHBvbHlnb24tb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIC8qIFJlbW92ZSBzbWFsbCBsYWtlcyBhdCBsb3dlciB6b29tcyAqL1xcbiAgW3NjYWxlcmFuaz4zXVt6b29tPD01XSB7XFxuICAgIDo6ZmlsbCB7XFxuICAgICAgcG9seWdvbi1vcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIGxpbmUtb3BhY2l0eTogMDtcXG4gIH1cXG4gIFtzY2FsZXJhbms+Nl1bem9vbTw9N10ge1xcbiAgICA6OmZpbGwge1xcbiAgICAgIHBvbHlnb24tb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICBsaW5lLW9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbiN1bmlmaWVkX2Jhc2VtYXBfbGF5ZXJzW2xheWVyPSduZV8xMG1fcml2ZXJzX2xha2VfY2VudGVybGluZXNfMjE2MyddIHtcXG4gIGxpbmUtY29sb3I6IEB3YXRlcmxpbmVzO1xcbiAgbGluZS13aWR0aDogMS41O1xcbiAgbGluZS1vcGFjaXR5OiAxO1xcbiAgbGluZS1qb2luOiByb3VuZDtcXG4gIGxpbmUtY2FwOiByb3VuZDtcXG5cXG4gIFtuYW1lPSdNaXNzaXNzaXBwaSddLFxcbiAgW25hbWU9J1N0LiBMYXdyZW5jZSddLFxcbiAgW25hbWU9J0NvbHVtYmlhJ10sXFxuICBbbmFtZT0nT2hpbyddLFxcbiAgW25hbWU9J0h1ZHNvbiddLFxcbiAgW25hbWU9J01pc3NvdXJpJ10sXFxuICBbbmFtZT0nUmlvIEdyYW5kZSddIHtcXG4gICAgbGluZS13aWR0aDogNDtcXG4gIH1cXG4gIFt6b29tPD04XVtuYW1lPSdNaXNzaXNzaXBwaSddLFxcbiAgW3pvb208PThdW25hbWU9J1N0LiBMYXdyZW5jZSddLFxcbiAgW3pvb208PThdW25hbWU9J0NvbHVtYmlhJ10sXFxuICBbem9vbTw9OF1bbmFtZT0nT2hpbyddLFxcbiAgW3pvb208PThdW25hbWU9J0h1ZHNvbiddLFxcbiAgW3pvb208PThdW25hbWU9J01pc3NvdXJpJ10sXFxuICBbem9vbTw9OF1bbmFtZT0nUmlvIEdyYW5kZSddIHtcXG4gICAgbGluZS13aWR0aDogMjtcXG4gIH1cXG4gIFt6b29tPD04XVtuYW1lIT0nTWlzc2lzc2lwcGknXVtuYW1lIT0nU3QuIExhd3JlbmNlJ11bbmFtZSE9J1JpbyBHcmFuZGUnXVtuYW1lIT0nT2hpbyddW25hbWUhPSdIdWRzb24nXVtuYW1lIT0nQ29sdW1iaWEnXVtuYW1lIT0nTWlzc291cmknXSxcXG4gIFt6b29tPD02XVtuYW1lPSdNaXNzaXNzaXBwaSddLFxcbiAgW3pvb208PTZdW25hbWU9J0NvbHVtYmlhJ10sXFxuICBbem9vbTw9Nl1bbmFtZT0nT2hpbyddLFxcbiAgW3pvb208PTZdW25hbWU9J0h1ZHNvbiddLFxcbiAgW3pvb208PTZdW25hbWU9J01pc3NvdXJpJ10sXFxuICBbem9vbTw9Nl1bbmFtZT0nUmlvIEdyYW5kZSddIHtcXG4gICAgbGluZS13aWR0aDogMTtcXG4gICAgbGluZS1jb2xvcjogbGlnaHRlbihkZXNhdHVyYXRlKEB3YXRlcmxpbmVzLDIlKSwyJSk7XFxuICB9XFxuICBbem9vbTw9Nl1bbmFtZSE9J01pc3Npc3NpcHBpJ11bbmFtZSE9J1N0LiBMYXdyZW5jZSddW25hbWUhPSdSaW8gR3JhbmRlJ11bbmFtZSE9J09oaW8nXVtuYW1lIT0nSHVkc29uJ11bbmFtZSE9J0NvbHVtYmlhJ11bbmFtZSE9J01pc3NvdXJpJ10ge1xcbiAgICBsaW5lLXdpZHRoOiAwLjU7XFxuICAgIGxpbmUtY29sb3I6IGxpZ2h0ZW4oZGVzYXR1cmF0ZShAd2F0ZXJsaW5lcyw1JSksNSUpO1xcbiAgfVxcbiAgW3pvb208PTVdW25hbWUhPSdNaXNzaXNzaXBwaSddW25hbWUhPSdTdC4gTGF3cmVuY2UnXVtuYW1lIT0nUmlvIEdyYW5kZSddW25hbWUhPSdPaGlvJ11bbmFtZSE9J0h1ZHNvbiddW25hbWUhPSdDb2x1bWJpYSddW25hbWUhPSdNaXNzb3VyaSddIHtcXG4gICAgbGluZS13aWR0aDogMDtcXG4gIH1cXG4gIFt6b29tPD01XVtuYW1lPSdNaXNzaXNzaXBwaSddLFxcbiAgW3pvb208PTVdW25hbWU9J1N0LiBMYXdyZW5jZSddLFxcbiAgW3pvb208PTVdW25hbWU9J0NvbHVtYmlhJ10sXFxuICBbem9vbTw9NV1bbmFtZT0nT2hpbyddLFxcbiAgW3pvb208PTVdW25hbWU9J0h1ZHNvbiddLFxcbiAgW3pvb208PTVdW25hbWU9J01pc3NvdXJpJ10sXFxuICBbem9vbTw9NV1bbmFtZT0nUmlvIEdyYW5kZSddIHtcXG4gICAgbGluZS13aWR0aDogMC41O1xcbiAgICBsaW5lLWNvbG9yOiBsaWdodGVuKGRlc2F0dXJhdGUoQHdhdGVybGluZXMsMiUpLDIlKTtcXG4gIH1cXG59XFxuXFxuI3VuaWZpZWRfYmFzZW1hcF9sYXllcnNbbGF5ZXI9J25lXzEwbV9hZG1pbl8wX2NvdW50cmllc19sYWtlc18yMTYzJ10ge1xcblxcbiAgbGluZS1jb2xvcjogQGxhbmQ7XFxuICBsaW5lLXdpZHRoOiAxO1xcbiAgbGluZS1vcGFjaXR5OiAxO1xcbiAgbGluZS1qb2luOiByb3VuZDtcXG4gIGxpbmUtY2FwOiByb3VuZDtcXG4gIHBvbHlnb24tZmlsbDogQGxhbmQ7XFxuICBwb2x5Z29uLW9wYWNpdHk6IDE7XFxuXFxufVxcblwiLFwiY2FydG9jc3NfdmVyc2lvblwiOlwiMi4xLjFcIn19LHtcInR5cGVcIjpcIm1hcG5pa1wiLFwib3B0aW9uc1wiOntcInNxbFwiOlwiU0VMRUNUIGNhcnRvZGJfaWQsIGxhdDo6ZmxvYXQsIGxvbmc6OmZsb2F0LCBTVF9UcmFuc2Zvcm0odGhlX2dlb20sMjE2MykgYXMgdGhlX2dlb21fd2VibWVyY2F0b3IsIHN0YXJ0LCBzdGF0ZSwgdG93biwgcmFuayBGUk9NIGNhbmFsX3Rvd25zXFxuXCIsXCJjYXJ0b2Nzc1wiOlwiQHRleHRjb2xvcjogIzY2NjtcXG5AaGFsb2NvbG9yOiAjZjlmOWY5O1xcblxcbk1hcCB7XFxuICBidWZmZXItc2l6ZTogMTI4O1xcbn1cXG5cXG4jY2FuYWxzX2NpdGllc19iYXNlbWFwW3Jhbms9MV1bem9vbT49NV0sXFxuI2NhbmFsc19jaXRpZXNfYmFzZW1hcFtyYW5rPTJdW3pvb20+PTZdLFxcbiNjYW5hbHNfY2l0aWVzX2Jhc2VtYXBbcmFuaz49M11bem9vbT49OF17XFxuICAvLyBOb3RlOiBoYXZlIHRvIHVzZSBtYXJrZXJzIG5vdCBzaGllbGRzIHRvIGNoYW5nZSBzdmcgY29sb3JcXG4gIDo6aGFsbyB7XFxuICAgIG1hcmtlci1wbGFjZW1lbnQ6IHBvaW50O1xcbiAgICBtYXJrZXItZmlsbC1vcGFjaXR5OiAxO1xcbiAgICBtYXJrZXItbGluZS13aWR0aDogMDtcXG4gICAgbWFya2VyLXR5cGU6IGVsbGlwc2U7XFxuICAgIG1hcmtlci13aWR0aDogOTtcXG4gICAgbWFya2VyLWZpbGw6IEBoYWxvY29sb3I7XFxuICB9XFxuICBtYXJrZXItZmlsbC1vcGFjaXR5OiAwLjk7XFxuICBtYXJrZXItbGluZS1jb2xvcjogQGhhbG9jb2xvcjtcXG4gIG1hcmtlci1saW5lLXdpZHRoOiAxLjU7XFxuICBtYXJrZXItbGluZS1vcGFjaXR5OiAxO1xcbiAgbWFya2VyLXBsYWNlbWVudDogcG9pbnQ7XFxuICAvL21hcmtlci10eXBlOiBlbGxpcHNlO1xcbiAgbWFya2VyLWZpbGU6IHVybCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL21hcGJveC9tYWtpL21iLXBhZ2VzL3NyYy9jaXJjbGUtMTIuc3ZnJyk7XFxuICBtYXJrZXItd2lkdGg6IDY7XFxuICBtYXJrZXItZmlsbDogQHRleHRjb2xvcjtcXG5cXG4gIG1hcmtlci1hbGxvdy1vdmVybGFwOiB0cnVlO1xcbn1cXG5cXG5AZGVmYXVsdF9zaXplOiA5O1xcbkB4X2Rpc3RhbmNlX3Bvc2l0aXZlOiAzO1xcbkB5X2Rpc3RhbmNlX3Bvc2l0aXZlOiAzO1xcbkB4X2Rpc3RhbmNlX25lZ2F0aXZlOiAtMztcXG5AeV9kaXN0YW5jZV9uZWdhdGl2ZTogLTM7XFxuXFxuI2NhbmFsc19jaXRpZXNfYmFzZW1hcFtyYW5rPTFdW3pvb20+PTVdOjpsYWJlbHMsXFxuI2NhbmFsc19jaXRpZXNfYmFzZW1hcFtyYW5rPTJdW3pvb20+PTZdOjpsYWJlbHMsXFxuI2NhbmFsc19jaXRpZXNfYmFzZW1hcFtyYW5rPj0zXVt6b29tPj04XTo6bGFiZWxzLCB7XFxuXFxuICB0ZXh0LW5hbWU6IFt0b3duXTtcXG4gIHRleHQtZmFjZS1uYW1lOiAnRGVqYVZ1IFNhbnMgQm9vayc7XFxuICB0ZXh0LXNpemU6IEBkZWZhdWx0X3NpemU7XFxuICBbem9vbT49Nl1bcmFuaz0xXSB7XFxuICAgIHRleHQtc2l6ZTogQGRlZmF1bHRfc2l6ZSArIDM7XFxuICB9XFxuICB0ZXh0LWxhYmVsLXBvc2l0aW9uLXRvbGVyYW5jZTogMDtcXG4gIHRleHQtZmlsbDogQHRleHRjb2xvcjtcXG4gIHRleHQtaGFsby1maWxsOiBAaGFsb2NvbG9yO1xcbiAgdGV4dC1oYWxvLXJhZGl1czogMS41O1xcbiAgLy8gRGVmYXVsdCBpcyB1cHBlciByaWdodCBmcm9tIGRvdFxcbiAgdGV4dC1keTogQHlfZGlzdGFuY2VfbmVnYXRpdmU7XFxuICB0ZXh0LWR4OiBAeF9kaXN0YW5jZV9wb3NpdGl2ZTtcXG5cXG4gIC8vIExhYmVscyB0byBmbG9hdCBsZWZ0IGluc3RlYWRcXG4gIFtzdGF0ZT0nSWxsaW5vaXMnXSxcXG4gIFtzdGF0ZT0nSW5kaWFuYSddLFxcbiAgW3N0YXRlPSdPaGlvJ11bdG93biE9J0NpbmNpbm5hdGknXSxcXG4gIFt0b3duPSdCZWxsZWZvbnRlJ10sXFxuICBbdG93bj0nUGl0dHNidXJnaCddLFxcbiAgW3Rvd249J1JvY2hlc3RlciddLFxcbiAgW3Rvd249J05ld2FyayddLFxcbiAgW3Rvd249J09zd2VnbyddLFxcbiAgW3Rvd249J0J1ZmZhbG8nXSxcXG4gIFt0b3duPSdDb3JuaW5nJ10sXFxuICBbdG93bj0nQnJpc3RvbCddLFxcbiAgW3Rvd249J1JlYWRpbmcnXSxcXG4gIFt0b3duPSdCdWNoYW5hbiddIHtcXG4gICAgdGV4dC1keDogQHhfZGlzdGFuY2VfbmVnYXRpdmU7XFxuICB9XFxuXFxuICAvLyBMYWJlbHMgdG8gZmxvYXQgYmVsb3cgZG90XFxuXFxuICBbdG93bj0nTmV3IEJydW5zd2ljayddLFxcbiAgW3Rvd249J0xhIFNhbGxlJ10sXFxuICBbdG93bj0nTGF3cmVuY2VidXJnJ10sXFxuICBbdG93bj0nQWtyb24nXSxcXG4gIFt0b3duPSdBbGJhbnknXSxcXG4gIFt0b3duPSdBdGhlbnMnXSxcXG4gIFt0b3duPSdVdGljYSddLFxcbiAgW3Rvd249J1JlYWRpbmcnXSxcXG4gIFt0b3duPSdCb3JkZW50b3duJ10sXFxuICBbdG93bj0nUGhpbGFkZWxwaGlhJ10sXFxuICBbdG93bj0nTHluY2hidXJnJ10sXFxuICBbdG93bj0nVG9sZWRvJ10sXFxuICBbdG93bj0nUGl0dHNidXJnaCddLFxcbiAgW3Rvd249J0NpbmNpbm5hdGknXSB7XFxuICAgIHRleHQtZHk6IEB5X2Rpc3RhbmNlX3Bvc2l0aXZlO1xcbiAgfVxcblxcbiAgdGV4dC1hbGxvdy1vdmVybGFwOiB0cnVlO1xcbiAgdGV4dC1wbGFjZW1lbnQ6IHBvaW50O1xcbiAgdGV4dC1wbGFjZW1lbnQtdHlwZTogZHVtbXk7XFxuXFxufVwiLFwiY2FydG9jc3NfdmVyc2lvblwiOlwiMi4xLjFcIn19XSxcIm1pbnpvb21cIjoyLFwibWF4em9vbVwiOjl9fVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcInVzZXJJZFwiOiBcImRpZ2l0YWxzY2hvbGFyc2hpcGxhYlwiXG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG5cdFwibGF5ZXJzXCI6IFtcblx0XHR7XG5cdFx0XHRcInVybFwiOiBcImh0dHA6Ly9zbS5tYXBzdGFjay5zdGFtZW4uY29tL29wZW50ZXJyYWluXzIxNjMve3p9L3t4fS97eX0ucG5nXCJcblx0XHR9XG5cdF1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICByZXR1cm4gbmV3IEVsZW1lbnRDbGFzcyhvcHRzKVxufVxuXG5mdW5jdGlvbiBpbmRleE9mKGFyciwgcHJvcCkge1xuICBpZiAoYXJyLmluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihwcm9wKVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgIGlmIChhcnJbaV0gPT09IHByb3ApIHJldHVybiBpXG4gIHJldHVybiAtMVxufVxuXG5mdW5jdGlvbiBFbGVtZW50Q2xhc3Mob3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRWxlbWVudENsYXNzKSkgcmV0dXJuIG5ldyBFbGVtZW50Q2xhc3Mob3B0cylcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmICghb3B0cykgb3B0cyA9IHt9XG5cbiAgLy8gc2ltaWxhciBkb2luZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IGJ1dCB3b3JrcyBpbiBJRThcbiAgaWYgKG9wdHMubm9kZVR5cGUpIG9wdHMgPSB7ZWw6IG9wdHN9XG5cbiAgdGhpcy5vcHRzID0gb3B0c1xuICB0aGlzLmVsID0gb3B0cy5lbCB8fCBkb2N1bWVudC5ib2R5XG4gIGlmICh0eXBlb2YgdGhpcy5lbCAhPT0gJ29iamVjdCcpIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZWwpXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmIChlbC5jbGFzc05hbWUgPT09IFwiXCIpIHJldHVybiBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICBpZiAoaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpID4gLTEpIHJldHVybiBjbGFzc2VzXG4gIGNsYXNzZXMucHVzaChjbGFzc05hbWUpXG4gIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXG4gIHJldHVybiBjbGFzc2VzXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmIChlbC5jbGFzc05hbWUgPT09IFwiXCIpIHJldHVyblxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIHZhciBpZHggPSBpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgaWYgKGlkeCA+IC0xKSBjbGFzc2VzLnNwbGljZShpZHgsIDEpXG4gIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXG4gIHJldHVybiBjbGFzc2VzXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgcmV0dXJuIGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKSA+IC0xXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmICh0aGlzLmhhcyhjbGFzc05hbWUpKSB0aGlzLnJlbW92ZShjbGFzc05hbWUpXG4gIGVsc2UgdGhpcy5hZGQoY2xhc3NOYW1lKVxufVxuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBCYXNlZCBvbiBjb2RlIHRoYXQgaXMgQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY2FuVXNlRE9NID0gISEoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuXHQpO1xuXG5cdHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuXHRcdGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG5cdFx0Y2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cblx0XHRjYW5Vc2VFdmVudExpc3RlbmVyczpcblx0XHRcdGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG5cdFx0Y2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW5cblxuXHR9O1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkV4ZWN1dGlvbkVudmlyb25tZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH1cblxufSgpKTtcbiIsIi8qKlxuICogbG9kYXNoIDMuMi4wIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgYmFzZUNvcHkgPSByZXF1aXJlKCdsb2Rhc2guX2Jhc2Vjb3B5JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJ2xvZGFzaC5rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFyZ3VtZW50IGp1Z2dsaW5nLFxuICogbXVsdGlwbGUgc291cmNlcywgYW5kIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBzb3VyY2UgPT0gbnVsbFxuICAgID8gb2JqZWN0XG4gICAgOiBiYXNlQ29weShzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy4wLjEgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQ29weShzb3VyY2UsIHByb3BzLCBvYmplY3QpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIG9iamVjdFtrZXldID0gc291cmNlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ29weTtcbiIsIi8qKlxuICogbG9kYXNoIDMuMC4xIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlQ2FsbGJhY2tgIHdoaWNoIG9ubHkgc3VwcG9ydHMgYHRoaXNgIGJpbmRpbmdcbiAqIGFuZCBzcGVjaWZ5aW5nIHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiaW5kLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge251bWJlcn0gW2FyZ0NvdW50XSBUaGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgY2FsbGJhY2suXG4gKi9cbmZ1bmN0aW9uIGJpbmRDYWxsYmFjayhmdW5jLCB0aGlzQXJnLCBhcmdDb3VudCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodGhpc0FyZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cbiAgc3dpdGNoIChhcmdDb3VudCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICAgIGNhc2UgNTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSkge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgb3RoZXIsIGtleSwgb2JqZWN0LCBzb3VyY2UpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgcHJvdmlkZWQgdG8gaXQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsaXR5XG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICd1c2VyJzogJ2ZyZWQnIH07XG4gKlxuICogXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3Q7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kQ2FsbGJhY2s7XG4iLCIvKipcbiAqIGxvZGFzaCAzLjEuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIGJpbmRDYWxsYmFjayA9IHJlcXVpcmUoJ2xvZGFzaC5fYmluZGNhbGxiYWNrJyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCdsb2Rhc2guX2lzaXRlcmF0ZWVjYWxsJyksXG4gICAgcmVzdFBhcmFtID0gcmVxdWlyZSgnbG9kYXNoLnJlc3RwYXJhbScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGFzc2lnbnMgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0KHMpIHRvIGEgZ2l2ZW5cbiAqIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSBgXy5hc3NpZ25gLCBgXy5kZWZhdWx0c2AsIGFuZCBgXy5tZXJnZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiByZXN0UGFyYW0oZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbbGVuZ3RoIC0gMl0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQsXG4gICAgICAgIHRoaXNBcmcgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjdXN0b21pemVyID0gYmluZENhbGxiYWNrKGN1c3RvbWl6ZXIsIHRoaXNBcmcsIDUpO1xuICAgICAgbGVuZ3RoIC09IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSB0eXBlb2YgdGhpc0FyZyA9PSAnZnVuY3Rpb24nID8gdGhpc0FyZyA6IHVuZGVmaW5lZDtcbiAgICAgIGxlbmd0aCAtPSAoY3VzdG9taXplciA/IDEgOiAwKTtcbiAgICB9XG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBc3NpZ25lcjtcbiIsIi8qKlxuICogbG9kYXNoIDMuOS4xIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkgPiA1KS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZm5Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZuVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICByZXR1cm4gaXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpIHdoaWNoIHJldHVybiAnZnVuY3Rpb24nIGZvciByZWdleGVzXG4gIC8vIGFuZCBTYWZhcmkgOCBlcXVpdmFsZW50cyB3aGljaCByZXR1cm4gJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9ycy5cbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBmdW5jVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTmF0aXZlKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmF0aXZlKF8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIHJlSXNOYXRpdmUudGVzdChmblRvU3RyaW5nLmNhbGwodmFsdWUpKTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiByZUlzSG9zdEN0b3IudGVzdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy4wLjkgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL15cXGQrJC87XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGEgW0pJVCBidWddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI3OTIpXG4gKiB0aGF0IGFmZmVjdHMgU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgXCJsZW5ndGhcIiB2YWx1ZS5cbiAqL1xudmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpID8gK3ZhbHVlIDogLTE7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGg7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIHZhbHVlIGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpKSB7XG4gICAgdmFyIG90aGVyID0gb2JqZWN0W2luZGV4XTtcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gKHZhbHVlID09PSBvdGhlcikgOiAob3RoZXIgIT09IG90aGVyKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0l0ZXJhdGVlQ2FsbDtcbiIsIi8qKlxuICogbG9kYXNoIDMuMi4wIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC5fYmFzZWFzc2lnbicpLFxuICAgIGNyZWF0ZUFzc2lnbmVyID0gcmVxdWlyZSgnbG9kYXNoLl9jcmVhdGVhc3NpZ25lcicpLFxuICAgIGtleXMgPSByZXF1aXJlKCdsb2Rhc2gua2V5cycpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5hc3NpZ25gIGZvciBjdXN0b21pemluZyBhc3NpZ25lZCB2YWx1ZXMgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgYXJndW1lbnQganVnZ2xpbmcsIG11bHRpcGxlIHNvdXJjZXMsIGFuZCBgdGhpc2AgYmluZGluZyBgY3VzdG9taXplcmBcbiAqIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBhc3NpZ25XaXRoKG9iamVjdCwgc291cmNlLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcHJvcHMgPSBrZXlzKHNvdXJjZSksXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICByZXN1bHQgPSBjdXN0b21pemVyKHZhbHVlLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSk7XG5cbiAgICBpZiAoKHJlc3VsdCA9PT0gcmVzdWx0ID8gKHJlc3VsdCAhPT0gdmFsdWUpIDogKHZhbHVlID09PSB2YWx1ZSkpIHx8XG4gICAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgICBvYmplY3Rba2V5XSA9IHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLyoqXG4gKiBBc3NpZ25zIG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdChzKSB0byB0aGUgZGVzdGluYXRpb25cbiAqIG9iamVjdC4gU3Vic2VxdWVudCBzb3VyY2VzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICogSWYgYGN1c3RvbWl6ZXJgIGlzIHByb3ZpZGVkIGl0IGlzIGludm9rZWQgdG8gcHJvZHVjZSB0aGUgYXNzaWduZWQgdmFsdWVzLlxuICogVGhlIGBjdXN0b21pemVyYCBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kIGludm9rZWQgd2l0aCBmaXZlIGFyZ3VtZW50czpcbiAqIChvYmplY3RWYWx1ZSwgc291cmNlVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UpLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgIGFuZCBpcyBiYXNlZCBvblxuICogW2BPYmplY3QuYXNzaWduYF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5hc3NpZ24pLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAYWxpYXMgZXh0ZW5kXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgY3VzdG9taXplcmAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmFzc2lnbih7ICd1c2VyJzogJ2Jhcm5leScgfSwgeyAnYWdlJzogNDAgfSwgeyAndXNlcic6ICdmcmVkJyB9KTtcbiAqIC8vID0+IHsgJ3VzZXInOiAnZnJlZCcsICdhZ2UnOiA0MCB9XG4gKlxuICogLy8gdXNpbmcgYSBjdXN0b21pemVyIGNhbGxiYWNrXG4gKiB2YXIgZGVmYXVsdHMgPSBfLnBhcnRpYWxSaWdodChfLmFzc2lnbiwgZnVuY3Rpb24odmFsdWUsIG90aGVyKSB7XG4gKiAgIHJldHVybiBfLmlzVW5kZWZpbmVkKHZhbHVlKSA/IG90aGVyIDogdmFsdWU7XG4gKiB9KTtcbiAqXG4gKiBkZWZhdWx0cyh7ICd1c2VyJzogJ2Jhcm5leScgfSwgeyAnYWdlJzogMzYgfSwgeyAndXNlcic6ICdmcmVkJyB9KTtcbiAqIC8vID0+IHsgJ3VzZXInOiAnYmFybmV5JywgJ2FnZSc6IDM2IH1cbiAqL1xudmFyIGFzc2lnbiA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlLCBjdXN0b21pemVyKSB7XG4gIHJldHVybiBjdXN0b21pemVyXG4gICAgPyBhc3NpZ25XaXRoKG9iamVjdCwgc291cmNlLCBjdXN0b21pemVyKVxuICAgIDogYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247XG4iLCIvKipcbiAqIGxvZGFzaCAzLjAuNCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBcImxlbmd0aFwiIHByb3BlcnR5IHZhbHVlIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgYSBbSklUIGJ1Z10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0Mjc5MilcbiAqIHRoYXQgYWZmZWN0cyBTYWZhcmkgb24gYXQgbGVhc3QgaU9TIDguMS04LjMgQVJNNjQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBcImxlbmd0aFwiIHZhbHVlLlxuICovXG52YXIgZ2V0TGVuZ3RoID0gYmFzZVByb3BlcnR5KCdsZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKSAmJlxuICAgIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJiAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy4wLjQgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkgPiA1KS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZm5Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZuVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNBcnJheSA9IGdldE5hdGl2ZShBcnJheSwgJ2lzQXJyYXknKTtcblxuLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgcmV0dXJuIGlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcnJheVRhZztcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpIHdoaWNoIHJldHVybiAnZnVuY3Rpb24nIGZvciByZWdleGVzXG4gIC8vIGFuZCBTYWZhcmkgOCBlcXVpdmFsZW50cyB3aGljaCByZXR1cm4gJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9ycy5cbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBmdW5jVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTmF0aXZlKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmF0aXZlKF8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIHJlSXNOYXRpdmUudGVzdChmblRvU3RyaW5nLmNhbGwodmFsdWUpKTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiByZUlzSG9zdEN0b3IudGVzdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsIi8qKlxuICogbG9kYXNoIDMuMS4yIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnbG9kYXNoLl9nZXRuYXRpdmUnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJ2xvZGFzaC5pc2FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2guaXNhcnJheScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXlxcZCskLztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IGdldE5hdGl2ZShPYmplY3QsICdrZXlzJyk7XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBcImxlbmd0aFwiIHByb3BlcnR5IHZhbHVlIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgYSBbSklUIGJ1Z10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0Mjc5MilcbiAqIHRoYXQgYWZmZWN0cyBTYWZhcmkgb24gYXQgbGVhc3QgaU9TIDguMS04LjMgQVJNNjQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBcImxlbmd0aFwiIHZhbHVlLlxuICovXG52YXIgZ2V0TGVuZ3RoID0gYmFzZVByb3BlcnR5KCdsZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgPyArdmFsdWUgOiAtMTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIGJhc2VkIG9uIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQSBmYWxsYmFjayBpbXBsZW1lbnRhdGlvbiBvZiBgT2JqZWN0LmtleXNgIHdoaWNoIGNyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlXG4gKiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gc2hpbUtleXMob2JqZWN0KSB7XG4gIHZhciBwcm9wcyA9IGtleXNJbihvYmplY3QpLFxuICAgICAgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBwcm9wc0xlbmd0aCAmJiBvYmplY3QubGVuZ3RoO1xuXG4gIHZhciBhbGxvd0luZGV4ZXMgPSAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgcHJvcHNMZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIGlmICgoYWxsb3dJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xudmFyIGtleXMgPSAhbmF0aXZlS2V5cyA/IHNoaW1LZXlzIDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciBDdG9yID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3QuY29uc3RydWN0b3I7XG4gIGlmICgodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0KSB8fFxuICAgICAgKHR5cGVvZiBvYmplY3QgIT0gJ2Z1bmN0aW9uJyAmJiBpc0FycmF5TGlrZShvYmplY3QpKSkge1xuICAgIHJldHVybiBzaGltS2V5cyhvYmplY3QpO1xuICB9XG4gIHJldHVybiBpc09iamVjdChvYmplY3QpID8gbmF0aXZlS2V5cyhvYmplY3QpIDogW107XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB9XG4gIHZhciBsZW5ndGggPSBvYmplY3QubGVuZ3RoO1xuICBsZW5ndGggPSAobGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpICYmIGxlbmd0aCkgfHwgMDtcblxuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBpc1Byb3RvID0gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0LFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgIHNraXBJbmRleGVzID0gbGVuZ3RoID4gMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSAoaW5kZXggKyAnJyk7XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKHNraXBJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSAmJlxuICAgICAgICAhKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCIvKipcbiAqIGxvZGFzaCAzLjYuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGVcbiAqIGNyZWF0ZWQgZnVuY3Rpb24gYW5kIGFyZ3VtZW50cyBmcm9tIGBzdGFydGAgYW5kIGJleW9uZCBwcm92aWRlZCBhcyBhbiBhcnJheS5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgYmFzZWQgb24gdGhlIFtyZXN0IHBhcmFtZXRlcl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvRnVuY3Rpb25zL3Jlc3RfcGFyYW1ldGVycykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgc2F5ID0gXy5yZXN0UGFyYW0oZnVuY3Rpb24od2hhdCwgbmFtZXMpIHtcbiAqICAgcmV0dXJuIHdoYXQgKyAnICcgKyBfLmluaXRpYWwobmFtZXMpLmpvaW4oJywgJykgK1xuICogICAgIChfLnNpemUobmFtZXMpID4gMSA/ICcsICYgJyA6ICcnKSArIF8ubGFzdChuYW1lcyk7XG4gKiB9KTtcbiAqXG4gKiBzYXkoJ2hlbGxvJywgJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnKTtcbiAqIC8vID0+ICdoZWxsbyBmcmVkLCBiYXJuZXksICYgcGViYmxlcydcbiAqL1xuZnVuY3Rpb24gcmVzdFBhcmFtKGZ1bmMsIHN0YXJ0KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6ICgrc3RhcnQgfHwgMCksIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgcmVzdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgcmVzdFtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXJ0KSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpcywgcmVzdCk7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJnc1swXSwgcmVzdCk7XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJnc1swXSwgYXJnc1sxXSwgcmVzdCk7XG4gICAgfVxuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIGluZGV4ID0gLTE7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gcmVzdDtcbiAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3RQYXJhbTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnZXhlbnYnKTtcbnZhciBNb2RhbFBvcnRhbCA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkocmVxdWlyZSgnLi9Nb2RhbFBvcnRhbCcpKTtcbnZhciBhcmlhQXBwSGlkZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2FyaWFBcHBIaWRlcicpO1xudmFyIGVsZW1lbnRDbGFzcyA9IHJlcXVpcmUoJ2VsZW1lbnQtY2xhc3MnKTtcbnZhciByZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lciA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIikudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI7XG5cbnZhciBTYWZlSFRNTEVsZW1lbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyB3aW5kb3cuSFRNTEVsZW1lbnQgOiB7fTtcblxudmFyIE1vZGFsID0gbW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdNb2RhbCcsXG4gIHN0YXRpY3M6IHtcbiAgICBzZXRBcHBFbGVtZW50OiBhcmlhQXBwSGlkZXIuc2V0RWxlbWVudCxcbiAgICBpbmplY3RDU1M6IGZ1bmN0aW9uKCkge1xuICAgICAgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WXG4gICAgICAgICYmIGNvbnNvbGUud2FybignUmVhY3QtTW9kYWw6IGluamVjdENTUyBoYXMgYmVlbiBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FuZCBubyBsb25nZXIgaGFzIGFueSBlZmZlY3QuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGxhdGVyIHZlcnNpb24nKTtcbiAgICB9XG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaXNPcGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY29udGVudDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIG92ZXJsYXk6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICB9KSxcbiAgICBhcHBFbGVtZW50OiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihTYWZlSFRNTEVsZW1lbnQpLFxuICAgIG9uUmVxdWVzdENsb3NlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBjbG9zZVRpbWVvdXRNUzogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBhcmlhSGlkZUFwcDogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIGFyaWFIaWRlQXBwOiB0cnVlLFxuICAgICAgY2xvc2VUaW1lb3V0TVM6IDBcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLm5vZGUuY2xhc3NOYW1lID0gJ1JlYWN0TW9kYWxQb3J0YWwnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICB0aGlzLnJlbmRlclBvcnRhbCh0aGlzLnByb3BzKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXdQcm9wcykge1xuICAgIHRoaXMucmVuZGVyUG9ydGFsKG5ld1Byb3BzKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLm5vZGUpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfSxcblxuICByZW5kZXJQb3J0YWw6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmlzT3Blbikge1xuICAgICAgZWxlbWVudENsYXNzKGRvY3VtZW50LmJvZHkpLmFkZCgnUmVhY3RNb2RhbF9fQm9keS0tb3BlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50Q2xhc3MoZG9jdW1lbnQuYm9keSkucmVtb3ZlKCdSZWFjdE1vZGFsX19Cb2R5LS1vcGVuJyk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmFyaWFIaWRlQXBwKSB7XG4gICAgICBhcmlhQXBwSGlkZXIudG9nZ2xlKHByb3BzLmlzT3BlbiwgcHJvcHMuYXBwRWxlbWVudCk7XG4gICAgfVxuICAgIHNhbml0aXplUHJvcHMocHJvcHMpO1xuICAgIHRoaXMucG9ydGFsID0gcmVuZGVyU3VidHJlZUludG9Db250YWluZXIodGhpcywgTW9kYWxQb3J0YWwocHJvcHMpLCB0aGlzLm5vZGUpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBSZWFjdC5ET00ubm9zY3JpcHQoKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHNhbml0aXplUHJvcHMocHJvcHMpIHtcbiAgZGVsZXRlIHByb3BzLnJlZjtcbn1cbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZGl2ID0gUmVhY3QuRE9NLmRpdjtcbnZhciBmb2N1c01hbmFnZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2ZvY3VzTWFuYWdlcicpO1xudmFyIHNjb3BlVGFiID0gcmVxdWlyZSgnLi4vaGVscGVycy9zY29wZVRhYicpO1xudmFyIEFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC5hc3NpZ24nKTtcblxuXG4vLyBzbyB0aGF0IG91ciBDU1MgaXMgc3RhdGljYWxseSBhbmFseXphYmxlXG52YXIgQ0xBU1NfTkFNRVMgPSB7XG4gIG92ZXJsYXk6IHtcbiAgICBiYXNlOiAnUmVhY3RNb2RhbF9fT3ZlcmxheScsXG4gICAgYWZ0ZXJPcGVuOiAnUmVhY3RNb2RhbF9fT3ZlcmxheS0tYWZ0ZXItb3BlbicsXG4gICAgYmVmb3JlQ2xvc2U6ICdSZWFjdE1vZGFsX19PdmVybGF5LS1iZWZvcmUtY2xvc2UnXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBiYXNlOiAnUmVhY3RNb2RhbF9fQ29udGVudCcsXG4gICAgYWZ0ZXJPcGVuOiAnUmVhY3RNb2RhbF9fQ29udGVudC0tYWZ0ZXItb3BlbicsXG4gICAgYmVmb3JlQ2xvc2U6ICdSZWFjdE1vZGFsX19Db250ZW50LS1iZWZvcmUtY2xvc2UnXG4gIH1cbn07XG5cbnZhciBkZWZhdWx0U3R5bGVzID0ge1xuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb24gICAgICAgIDogJ2ZpeGVkJyxcbiAgICB0b3AgICAgICAgICAgICAgOiAwLFxuICAgIGxlZnQgICAgICAgICAgICA6IDAsXG4gICAgcmlnaHQgICAgICAgICAgIDogMCxcbiAgICBib3R0b20gICAgICAgICAgOiAwLFxuICAgIGJhY2tncm91bmRDb2xvciA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpJ1xuICB9LFxuICBjb250ZW50OiB7XG4gICAgcG9zaXRpb24gICAgICAgICAgICAgICAgOiAnYWJzb2x1dGUnLFxuICAgIHRvcCAgICAgICAgICAgICAgICAgICAgIDogJzQwcHgnLFxuICAgIGxlZnQgICAgICAgICAgICAgICAgICAgIDogJzQwcHgnLFxuICAgIHJpZ2h0ICAgICAgICAgICAgICAgICAgIDogJzQwcHgnLFxuICAgIGJvdHRvbSAgICAgICAgICAgICAgICAgIDogJzQwcHgnLFxuICAgIGJvcmRlciAgICAgICAgICAgICAgICAgIDogJzFweCBzb2xpZCAjY2NjJyxcbiAgICBiYWNrZ3JvdW5kICAgICAgICAgICAgICA6ICcjZmZmJyxcbiAgICBvdmVyZmxvdyAgICAgICAgICAgICAgICA6ICdhdXRvJyxcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZyA6ICd0b3VjaCcsXG4gICAgYm9yZGVyUmFkaXVzICAgICAgICAgICAgOiAnNHB4JyxcbiAgICBvdXRsaW5lICAgICAgICAgICAgICAgICA6ICdub25lJyxcbiAgICBwYWRkaW5nICAgICAgICAgICAgICAgICA6ICcyMHB4J1xuICB9XG59O1xuXG5mdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbnZhciBNb2RhbFBvcnRhbCA9IG1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnTW9kYWxQb3J0YWwnLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG92ZXJsYXk6IHt9LFxuICAgICAgICBjb250ZW50OiB7fVxuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWZ0ZXJPcGVuOiBmYWxzZSxcbiAgICAgIGJlZm9yZUNsb3NlOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIEZvY3VzIG5lZWRzIHRvIGJlIHNldCB3aGVuIG1vdW50aW5nIGFuZCBhbHJlYWR5IG9wZW5cbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0Rm9jdXNBZnRlclJlbmRlcih0cnVlKTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VUaW1lcik7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24obmV3UHJvcHMpIHtcbiAgICAvLyBGb2N1cyBvbmx5IG5lZWRzIHRvIGJlIHNldCBvbmNlIHdoZW4gdGhlIG1vZGFsIGlzIGJlaW5nIG9wZW5lZFxuICAgIGlmICghdGhpcy5wcm9wcy5pc09wZW4gJiYgbmV3UHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldEZvY3VzQWZ0ZXJSZW5kZXIodHJ1ZSk7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmICFuZXdQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNBZnRlclJlbmRlcikge1xuICAgICAgdGhpcy5mb2N1c0NvbnRlbnQoKTtcbiAgICAgIHRoaXMuc2V0Rm9jdXNBZnRlclJlbmRlcihmYWxzZSk7XG4gICAgfVxuICB9LFxuXG4gIHNldEZvY3VzQWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIChmb2N1cykge1xuICAgIHRoaXMuZm9jdXNBZnRlclJlbmRlciA9IGZvY3VzO1xuICB9LFxuXG4gIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgIGZvY3VzTWFuYWdlci5zZXR1cFNjb3BlZEZvY3VzKHRoaXMubm9kZSk7XG4gICAgZm9jdXNNYW5hZ2VyLm1hcmtGb3JGb2N1c0xhdGVyKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNPcGVuOiB0cnVlfSwgZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHthZnRlck9wZW46IHRydWV9KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMub3duZXJIYW5kbGVzQ2xvc2UoKSlcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUyA+IDApXG4gICAgICB0aGlzLmNsb3NlV2l0aFRpbWVvdXQoKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmNsb3NlV2l0aG91dFRpbWVvdXQoKTtcbiAgfSxcblxuICBmb2N1c0NvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVmcy5jb250ZW50LmZvY3VzKCk7XG4gIH0sXG5cbiAgY2xvc2VXaXRoVGltZW91dDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YmVmb3JlQ2xvc2U6IHRydWV9LCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQodGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0LCB0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIGNsb3NlV2l0aG91dFRpbWVvdXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWZ0ZXJPcGVuOiBmYWxzZSxcbiAgICAgIGJlZm9yZUNsb3NlOiBmYWxzZVxuICAgIH0sIHRoaXMuYWZ0ZXJDbG9zZSk7XG4gIH0sXG5cbiAgYWZ0ZXJDbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgZm9jdXNNYW5hZ2VyLnJldHVybkZvY3VzKCk7XG4gICAgZm9jdXNNYW5hZ2VyLnRlYXJkb3duU2NvcGVkRm9jdXMoKTtcbiAgfSxcblxuICBoYW5kbGVLZXlEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDkgLyp0YWIqLykgc2NvcGVUYWIodGhpcy5yZWZzLmNvbnRlbnQsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNyAvKmVzYyovKSB0aGlzLnJlcXVlc3RDbG9zZSgpO1xuICB9LFxuXG4gIGhhbmRsZU92ZXJsYXlDbGljazogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3duZXJIYW5kbGVzQ2xvc2UoKSlcbiAgICAgIHRoaXMucmVxdWVzdENsb3NlKCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5mb2N1c0NvbnRlbnQoKTtcbiAgfSxcblxuICByZXF1ZXN0Q2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkpXG4gICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKCk7XG4gIH0sXG5cbiAgb3duZXJIYW5kbGVzQ2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlO1xuICB9LFxuXG4gIHNob3VsZEJlQ2xvc2VkOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXRoaXMucHJvcHMuaXNPcGVuICYmICF0aGlzLnN0YXRlLmJlZm9yZUNsb3NlO1xuICB9LFxuXG4gIGJ1aWxkQ2xhc3NOYW1lOiBmdW5jdGlvbih3aGljaCwgYWRkaXRpb25hbCkge1xuICAgIHZhciBjbGFzc05hbWUgPSBDTEFTU19OQU1FU1t3aGljaF0uYmFzZTtcbiAgICBpZiAodGhpcy5zdGF0ZS5hZnRlck9wZW4pXG4gICAgICBjbGFzc05hbWUgKz0gJyAnK0NMQVNTX05BTUVTW3doaWNoXS5hZnRlck9wZW47XG4gICAgaWYgKHRoaXMuc3RhdGUuYmVmb3JlQ2xvc2UpXG4gICAgICBjbGFzc05hbWUgKz0gJyAnK0NMQVNTX05BTUVTW3doaWNoXS5iZWZvcmVDbG9zZTtcbiAgICByZXR1cm4gYWRkaXRpb25hbCA/IGNsYXNzTmFtZSArICcgJyArIGFkZGl0aW9uYWwgOiBjbGFzc05hbWU7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaG91bGRCZUNsb3NlZCgpID8gZGl2KCkgOiAoXG4gICAgICBkaXYoe1xuICAgICAgICByZWY6IFwib3ZlcmxheVwiLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuYnVpbGRDbGFzc05hbWUoJ292ZXJsYXknLCB0aGlzLnByb3BzLm92ZXJsYXlDbGFzc05hbWUpLFxuICAgICAgICBzdHlsZTogQXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzLm92ZXJsYXksIHRoaXMucHJvcHMuc3R5bGUub3ZlcmxheSB8fCB7fSksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlT3ZlcmxheUNsaWNrXG4gICAgICB9LFxuICAgICAgICBkaXYoe1xuICAgICAgICAgIHJlZjogXCJjb250ZW50XCIsXG4gICAgICAgICAgc3R5bGU6IEFzc2lnbih7fSwgZGVmYXVsdFN0eWxlcy5jb250ZW50LCB0aGlzLnByb3BzLnN0eWxlLmNvbnRlbnQgfHwge30pLFxuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5idWlsZENsYXNzTmFtZSgnY29udGVudCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgICAgICB0YWJJbmRleDogXCItMVwiLFxuICAgICAgICAgIG9uQ2xpY2s6IHN0b3BQcm9wYWdhdGlvbixcbiAgICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93blxuICAgICAgICB9LFxuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuIiwidmFyIF9lbGVtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuXG5mdW5jdGlvbiBzZXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCk7XG4gICAgZWxlbWVudCA9ICdsZW5ndGgnIGluIGVsID8gZWxbMF0gOiBlbDtcbiAgfVxuICBfZWxlbWVudCA9IGVsZW1lbnQgfHwgX2VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGhpZGUoYXBwRWxlbWVudCkge1xuICB2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudCk7XG4gIChhcHBFbGVtZW50IHx8IF9lbGVtZW50KS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbn1cblxuZnVuY3Rpb24gc2hvdyhhcHBFbGVtZW50KSB7XG4gIHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KTtcbiAgKGFwcEVsZW1lbnQgfHwgX2VsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlKHNob3VsZEhpZGUsIGFwcEVsZW1lbnQpIHtcbiAgaWYgKHNob3VsZEhpZGUpXG4gICAgaGlkZShhcHBFbGVtZW50KTtcbiAgZWxzZVxuICAgIHNob3coYXBwRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KSB7XG4gIGlmICghYXBwRWxlbWVudCAmJiAhX2VsZW1lbnQpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdyZWFjdC1tb2RhbDogWW91IG11c3Qgc2V0IGFuIGVsZW1lbnQgd2l0aCBgTW9kYWwuc2V0QXBwRWxlbWVudChlbClgIHRvIG1ha2UgdGhpcyBhY2Nlc3NpYmxlJyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9yVGVzdGluZygpIHtcbiAgX2VsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xufVxuXG5leHBvcnRzLnRvZ2dsZSA9IHRvZ2dsZTtcbmV4cG9ydHMuc2V0RWxlbWVudCA9IHNldEVsZW1lbnQ7XG5leHBvcnRzLnNob3cgPSBzaG93O1xuZXhwb3J0cy5oaWRlID0gaGlkZTtcbmV4cG9ydHMucmVzZXRGb3JUZXN0aW5nID0gcmVzZXRGb3JUZXN0aW5nO1xuIiwidmFyIGZpbmRUYWJiYWJsZSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvdGFiYmFibGUnKTtcbnZhciBtb2RhbEVsZW1lbnQgPSBudWxsO1xudmFyIGZvY3VzTGF0ZXJFbGVtZW50ID0gbnVsbDtcbnZhciBuZWVkVG9Gb2N1cyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBoYW5kbGVCbHVyKGV2ZW50KSB7XG4gIG5lZWRUb0ZvY3VzID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgaWYgKG5lZWRUb0ZvY3VzKSB7XG4gICAgbmVlZFRvRm9jdXMgPSBmYWxzZTtcbiAgICBpZiAoIW1vZGFsRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBuZWVkIHRvIHNlZSBob3cgalF1ZXJ5IHNoaW1zIGRvY3VtZW50Lm9uKCdmb2N1c2luJykgc28gd2UgZG9uJ3QgbmVlZCB0aGVcbiAgICAvLyBzZXRUaW1lb3V0LCBmaXJlZm94IGRvZXNuJ3Qgc3VwcG9ydCBmb2N1c2luLCBpZiBpdCBkaWQsIHdlIGNvdWxkIGZvY3VzXG4gICAgLy8gdGhlIGVsZW1lbnQgb3V0c2lkZSBvZiBhIHNldFRpbWVvdXQuIFNpZGUtZWZmZWN0IG9mIHRoaXMgaW1wbGVtZW50YXRpb24gXG4gICAgLy8gaXMgdGhhdCB0aGUgZG9jdW1lbnQuYm9keSBnZXRzIGZvY3VzLCBhbmQgdGhlbiB3ZSBmb2N1cyBvdXIgZWxlbWVudCByaWdodCBcbiAgICAvLyBhZnRlciwgc2VlbXMgZmluZS5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKG1vZGFsRWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgdmFyIGVsID0gKGZpbmRUYWJiYWJsZShtb2RhbEVsZW1lbnQpWzBdIHx8IG1vZGFsRWxlbWVudCk7XG4gICAgICBlbC5mb2N1cygpO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmV4cG9ydHMubWFya0ZvckZvY3VzTGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgZm9jdXNMYXRlckVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xufTtcblxuZXhwb3J0cy5yZXR1cm5Gb2N1cyA9IGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIGZvY3VzTGF0ZXJFbGVtZW50LmZvY3VzKCk7XG4gIH1cbiAgY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1lvdSB0cmllZCB0byByZXR1cm4gZm9jdXMgdG8gJytmb2N1c0xhdGVyRWxlbWVudCsnIGJ1dCBpdCBpcyBub3QgaW4gdGhlIERPTSBhbnltb3JlJyk7XG4gIH1cbiAgZm9jdXNMYXRlckVsZW1lbnQgPSBudWxsO1xufTtcblxuZXhwb3J0cy5zZXR1cFNjb3BlZEZvY3VzID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICBtb2RhbEVsZW1lbnQgPSBlbGVtZW50O1xuXG4gIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1ciwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25CbHVyJywgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQoJ29uRm9jdXMnLCBoYW5kbGVGb2N1cyk7XG4gIH1cbn07XG5cbmV4cG9ydHMudGVhcmRvd25TY29wZWRGb2N1cyA9IGZ1bmN0aW9uKCkge1xuICBtb2RhbEVsZW1lbnQgPSBudWxsO1xuXG4gIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cyk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmRldGFjaEV2ZW50KCdvbkJsdXInLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5kZXRhY2hFdmVudCgnb25Gb2N1cycsIGhhbmRsZUZvY3VzKTtcbiAgfVxufTtcblxuXG4iLCJ2YXIgZmluZFRhYmJhYmxlID0gcmVxdWlyZSgnLi4vaGVscGVycy90YWJiYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5vZGUsIGV2ZW50KSB7XG4gIHZhciB0YWJiYWJsZSA9IGZpbmRUYWJiYWJsZShub2RlKTtcbiAgdmFyIGZpbmFsVGFiYmFibGUgPSB0YWJiYWJsZVtldmVudC5zaGlmdEtleSA/IDAgOiB0YWJiYWJsZS5sZW5ndGggLSAxXTtcbiAgdmFyIGxlYXZpbmdGaW5hbFRhYmJhYmxlID0gKFxuICAgIGZpbmFsVGFiYmFibGUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgfHxcbiAgICAvLyBoYW5kbGUgaW1tZWRpYXRlIHNoaWZ0K3RhYiBhZnRlciBvcGVuaW5nIHdpdGggbW91c2VcbiAgICBub2RlID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICk7XG4gIGlmICghbGVhdmluZ0ZpbmFsVGFiYmFibGUpIHJldHVybjtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdmFyIHRhcmdldCA9IHRhYmJhYmxlW2V2ZW50LnNoaWZ0S2V5ID8gdGFiYmFibGUubGVuZ3RoIC0gMSA6IDBdO1xuICB0YXJnZXQuZm9jdXMoKTtcbn07XG4iLCIvKiFcbiAqIEFkYXB0ZWQgZnJvbSBqUXVlcnkgVUkgY29yZVxuICpcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vY2F0ZWdvcnkvdWktY29yZS9cbiAqL1xuXG5mdW5jdGlvbiBmb2N1c2FibGUoZWxlbWVudCwgaXNUYWJJbmRleE5vdE5hTikge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAoL2lucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b258b2JqZWN0Ly50ZXN0KG5vZGVOYW1lKSA/XG4gICAgIWVsZW1lbnQuZGlzYWJsZWQgOlxuICAgIFwiYVwiID09PSBub2RlTmFtZSA/XG4gICAgICBlbGVtZW50LmhyZWYgfHwgaXNUYWJJbmRleE5vdE5hTiA6XG4gICAgICBpc1RhYkluZGV4Tm90TmFOKSAmJiB2aXNpYmxlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBoaWRkZW4oZWwpIHtcbiAgcmV0dXJuIChlbC5vZmZzZXRXaWR0aCA8PSAwICYmIGVsLm9mZnNldEhlaWdodCA8PSAwKSB8fFxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJztcbn1cblxuZnVuY3Rpb24gdmlzaWJsZShlbGVtZW50KSB7XG4gIHdoaWxlIChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkpIGJyZWFrO1xuICAgIGlmIChoaWRkZW4oZWxlbWVudCkpIHJldHVybiBmYWxzZTtcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB0YWJiYWJsZShlbGVtZW50KSB7XG4gIHZhciB0YWJJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICBpZiAodGFiSW5kZXggPT09IG51bGwpIHRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICB2YXIgaXNUYWJJbmRleE5hTiA9IGlzTmFOKHRhYkluZGV4KTtcbiAgcmV0dXJuIChpc1RhYkluZGV4TmFOIHx8IHRhYkluZGV4ID49IDApICYmIGZvY3VzYWJsZShlbGVtZW50LCAhaXNUYWJJbmRleE5hTik7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYWJiYWJsZURlc2NlbmRhbnRzKGVsZW1lbnQpIHtcbiAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJyksIDApLmZpbHRlcihmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiB0YWJiYWJsZShlbCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRUYWJiYWJsZURlc2NlbmRhbnRzO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Nb2RhbCcpO1xuXG4iLCIvLyBpbXBvcnQgbm9kZSBtb2R1bGVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IHsgTWFwLCBUaWxlTGF5ZXIsIEdlb0pzb24gfSBmcm9tICdyZWFjdC1sZWFmbGV0JztcblxuLy8gaW1wb3J0IGNvbXBvbmVudHMgZnJvbSBAcGFub3JhbWEvdG9vbGtpdFxuaW1wb3J0IHtcbiAgQ2FydG9EQlRpbGVMYXllcixcbiAgSGFzaE1hbmFnZXIsXG4gIEludHJvTWFuYWdlcixcbiAgTGVnZW5kLFxuICBQdW5jaGNhcmRcbn0gZnJvbSAnQHBhbm9yYW1hL3Rvb2xraXQnO1xuXG4vKlxuICogRGF0YSBmbG93IHZpYSBGbHV4OlxuICogaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vZmx1eC9kb2NzL292ZXJ2aWV3Lmh0bWxcbiAqIFxuICogICAgICAgICAgICAgICAgICDilIwtLS0tLSAgIGFjdGlvbnMgICA8LS0tLS3ilJBcbiAqICAgICAgICAgICAgICAgICAgdiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIGFjdGlvbnMgLS0+IGRpc3BhdGNoZXIgLS0+IHN0b3JlcyAtLT4gcm9vdCB2aWV3XG4gKi9cblxuLy8gc3RvcmVzXG5pbXBvcnQgRXhhbXBsZVN0b3JlIGZyb20gJy4vc3RvcmVzL0V4YW1wbGVTdG9yZSc7XG5cbi8vIGxvY2FsIChub3QgaW5zdGFsbGVkIHZpYSBucG0pIGNvbXBvbmVudHMgKHZpZXdzKVxuaW1wb3J0IEV4YW1wbGVDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0V4YW1wbGVDb21wb25lbnQuanN4JztcblxuLy8gdXRpbHNcbi8vIFRPRE86IHJlZmFjdG9yIHRvIHVzZSBzYW1lIHN0cnVjdHVyZSBhcyBQYW5vcmFtYURpc3BhdGNoZXI7XG4vLyBIYXZpbmcgYGZsdXhgIGFzIGEgZGVwZW5kZW5jeSwgYW5kIHR3byBkaWZmZXJlbnQgZmlsZXMsIGlzIG92ZXJraWxsLlxuaW1wb3J0IHsgQXBwQWN0aW9ucywgQXBwQWN0aW9uVHlwZXMgfSBmcm9tICcuL3V0aWxzL0FwcEFjdGlvbkNyZWF0b3InO1xuaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnLi91dGlscy9BcHBEaXNwYXRjaGVyJztcblxuLy8gY29uZmlnXG5pbXBvcnQgdGlsZUxheWVycyBmcm9tICcuLi9iYXNlbWFwcy90aWxlTGF5ZXJzLmpzb24nO1xuaW1wb3J0IGNhcnRvZGJDb25maWcgZnJvbSAnLi4vYmFzZW1hcHMvY2FydG9kYi9jb25maWcuanNvbic7XG5pbXBvcnQgY2FydG9kYkxheWVycyBmcm9tICcuLi9iYXNlbWFwcy9jYXJ0b2RiL2Jhc2VtYXBzLmpzb24nO1xuXG5cbi8vIG1haW4gYXBwIGNvbnRhaW5lclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcblxuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHlvdXIgUGFub3JhbWEgZGF0YSBmbG93IHRvdXIhJyk7XG4gICAgY29uc29sZS5sb2coJ1Bhbm9yYW1hIGFwcGxpY2F0aW9ucyB1c2UgYSB2YXJpYW50IG9mIHRoZSBgRmx1eGAgcGF0dGVybiwgYW5kIHN0b3JlIGFwcGxpY2F0aW9uIHN0YXRlIGluIHRoZSBVUkwgaGFzaC4nKTtcbiAgICBjb25zb2xlLmxvZygnSGVyZVxcJ3MgYW4gb3ZlcnZpZXc6Jyk7XG4gICAgY29uc29sZS5sb2coJ1RoZSByb290IG9mIHRoZSBhcHBsaWNhdGlvbiAoYEFwcGApIGxpc3RlbnMgZm9yIGNoYW5nZXMgaW4gYXBwbGljYXRpb24gc3RhdGUsIHN0b3JlcyB0aGVtIGluIHRoZSBoYXNoLicpO1xuICAgIGNvbnNvbGUubG9nKCdXaGVuIHRoZSBoYXNoIGNoYW5nZXMsIEFwcCByZXNwb25kcyBieSBwYXNzaW5nIHRoZSBuZXcgc3RhdGUgZG93biB0aHJvdWdoIGFsbCBpdHMgY2hpbGQgY29tcG9uZW50cy4nKTtcbiAgICBjb25zb2xlLmxvZygnSW4gdGhpcyBwYXR0ZXJuLCB0aGUgaGFzaCBpcyB0aGUgc2luZ2xlIHNvdXJjZSBvZiB0cnV0aCBmb3IgYXBwbGljYXRpb24gc3RhdGUsIGFuZCBhbGwgY29tcG9uZW50cyBhcmUgc3RhdGVsZXNzOyB0aGV5IGRvIGFzIHRoZXkgYXJlIHRvbGQgYnkgdGhlIHJvb3Qgb2YgdGhlIGFwcGxpY2F0aW9uLCB3aGljaCBpbiB0dXJuIGlzIGRpcmVjdGVkIGJ5IHRoZSBoYXNoLicpO1xuICAgIGNvbnNvbGUubG9nKCcqICogKiAqICogKiAqICogKiAqJyk7XG5cbiAgICB0aGlzLmhhbmRsZUFwcFN0YXRlQ2hhbmdlcygpO1xuXG4gICAgLy8gc2V0IHVwIGluaXRpYWwgc3RhdGUgaW4gY29uc3RydWN0b3JcbiAgICAvLyAoaW5zdGVhZCBvZiBFUzUtc3R5bGUgZ2V0SW5pdGlhbFN0YXRlKVxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldERlZmF1bHRTdGF0ZSgpO1xuXG4gICAgLy8gYmluZCBoYW5kbGVycyB0byB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZSxcbiAgICAvLyBzaW5jZSBSZWFjdCBubyBsb25nZXIgZG9lcyB0aGlzIGF1dG9tYXRpY2FsbHkgd2hlbiB1c2luZyBFUzZcbiAgICB0aGlzLm9uV2luZG93UmVzaXplID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFzaENoYW5nZWQgPSB0aGlzLmhhc2hDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1hcE1vdmVkID0gdGhpcy5vbk1hcE1vdmVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkxlZ2VuZEl0ZW1TZWxlY3RlZCA9IHRoaXMub25MZWdlbmRJdGVtU2VsZWN0ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUFib3V0ID0gdGhpcy50b2dnbGVBYm91dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudHJpZ2dlckludHJvID0gdGhpcy50cmlnZ2VySW50cm8uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW50cm9FeGl0ID0gdGhpcy5vbkludHJvRXhpdC5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBoYW5kbGVBcHBTdGF0ZUNoYW5nZXMgKCkge1xuXG4gICAgY29uc29sZS5sb2coJ1sxXSBBcHAgcmVnaXN0ZXJzIHdpdGggQXBwRGlzcGF0Y2hlciB0byBiZSBub3RpZmllZCBvZiBjaGFuZ2VzIGluIGFwcGxpY2F0aW9uIHN0YXRlLCBtb3N0IGZyZXF1ZW50bHkgY2F1c2VkIGJ5IHVzZXIgYWN0aW9ucy4nKTtcblxuICAgIC8vIFJlZ2lzdGVyIGNhbGxiYWNrIHRvIGhhbmRsZSBhbGwgdXBkYXRlc1xuICAgIEFwcERpc3BhdGNoZXIucmVnaXN0ZXIoKGFjdGlvbikgPT4ge1xuXG4gICAgICBsZXQga2V5O1xuXG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICAgIGNhc2UgQXBwQWN0aW9uVHlwZXMuaXRlbVNlbGVjdGVkOlxuICAgICAgICBrZXkgPSBBcHAuU1RBVEVfS0VZUy5JVEVNO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBBcHBBY3Rpb25UeXBlcy5tYXBNb3ZlZDpcbiAgICAgICAgdGhpcy5tYXBIYXNoVXBkYXRlZCA9IHRydWU7XG4gICAgICAgIGtleSA9IEhhc2hNYW5hZ2VyLk1BUF9TVEFURV9LRVk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgbGV0IGhhc2ggPSB7fTtcbiAgICAgICAgaGFzaFtrZXldID0gYWN0aW9uLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZygnWzZhXSBBcHAgaXMgbm90aWZpZWQgb2YgYSBjaGFuZ2UgaW4gYXBwbGljYXRpb24gc3RhdGUgb2YgdHlwZSBhbmQgdmFsdWUgeyAnICsgYWN0aW9uLnR5cGUgKyAnOiAnICsgYWN0aW9uLnZhbHVlICsgJyB9LiBJdCB1cGRhdGVzIHRoZSBoYXNoIHdpdGggdGhlIG5ldyBzdGF0ZS4uLi4nKTtcbiAgICAgICAgSGFzaE1hbmFnZXIudXBkYXRlSGFzaChoYXNoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICB9KTtcblxuICB9XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cbiAgLy8gUmVhY3QgTGlmZWN5Y2xlXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXG4gIGdldERlZmF1bHRTdGF0ZSAoKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICB1cHBlckxlZnQ6IHtcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfSxcbiAgICAgICAgdXBwZXJSaWdodDoge1xuICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgIGhlaWdodDogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWRJdGVtSWQ6IDAsXG5cbiAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHRzIHdpdGggbWFwIHN0YXRlIGluIGhhc2gsIGlmIHByZXNlbnRcbiAgICAgIG1hcDogT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICB6b29tOiA1LFxuICAgICAgICBjZW50ZXI6IFstMy4zMDAsIDIuODAwXVxuICAgICAgfSwgSGFzaE1hbmFnZXIuZ2V0U3RhdGUoSGFzaE1hbmFnZXIuTUFQX1NUQVRFX0tFWSkpXG4gICAgfTtcblxuICB9XG5cbiAgc3RhdGljIFNUQVRFX0tFWVMgPSB7XG4gICAgJ0lURU0nOiAnaXRlbSdcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuXG4gICAgdGhpcy5jb21wdXRlQ29tcG9uZW50RGltZW5zaW9ucygpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCdbMl0gSW1tZWRpYXRlbHkgYmVmb3JlIHRoZSByb290IGNvbXBvbmVudCAoYEFwcGApIG1vdW50cywgaXQgcmVxdWVzdHMgaW5pdGlhbCBkYXRhIGZyb20gRXhhbXBsZVN0b3JlLicpO1xuICAgIEV4YW1wbGVTdG9yZS5sb2FkSW5pdGlhbERhdGEoKVxuICAgIC50aGVuKCgpID0+IHtcblxuICAgICAgY29uc29sZS5sb2coJ1s1XSBBcHAgcmVzcG9uZHMgdG8gdGhlIGluaXRpYWwgZGF0YSBsb2FkIGJ5IG1hbnVhbGx5IHRyaWdnZXJpbmcgYGhhc2hDaGFuZ2VkKClgIGluIG9yZGVyIHRvIGByZW5kZXIoKWAgYXBwbGljYXRpb24gd2l0aCB0aGUgbG9hZGVkIGRhdGEuJyk7XG4gICAgICB0aGlzLmhhc2hDaGFuZ2VkKCk7XG5cbiAgICB9LCAoZXJyb3IpID0+IHtcblxuICAgICAgLy8gZmFpbCBsb3VkbHksIGRvIG5vdCBzd2FsbG93IHRoZSBlcnJvclxuICAgICAgdGhyb3cgZXJyb3I7XG5cbiAgICB9KTtcblxuICAgIC8vIFByZXBhcmUgb2JqZWN0IHRvIGRlbGl2ZXIgZGVmYXVsdCBhcHBsaWNhdGlvbiBzdGF0ZSB0byBIYXNoTWFuYWdlcixcbiAgICAvLyB3aXRoIGluaXRpYWwgdmFsdWVzIHBhaXJlZCB3aXRoIGtleXMgdG8gdXNlIGluIHRoZSBoYXNoLlxuICAgIGxldCBpbml0aWFsU3RhdGUgPSB7fTtcbiAgICBpbml0aWFsU3RhdGVbQXBwLlNUQVRFX0tFWVMuSVRFTV0gPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbUlkO1xuICAgIGluaXRpYWxTdGF0ZVtIYXNoTWFuYWdlci5NQVBfU1RBVEVfS0VZXSA9IHtcbiAgICAgIHpvb206IHRoaXMuc3RhdGUubWFwLnpvb20sXG4gICAgICBjZW50ZXI6IHRoaXMuc3RhdGUubWFwLmNlbnRlclxuICAgIH07XG5cbiAgICAvLyBPdmVyd3JpdGUgZGVmYXVsdCBzdGF0ZXMgd2l0aCBhbnkgc3RhdGVzIHByZXNlbnQgaW4gdGhlIGhhc2hcbiAgICBpbml0aWFsU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUsIEhhc2hNYW5hZ2VyLmdldFN0YXRlKCkpO1xuXG4gICAgLy8gVXBkYXRlIGhhc2ggd2l0aCBtZXJnZWQgcmVzdWx0LlxuICAgIC8vIERvIHRoaXMgYmVmb3JlIHNldHRpbmcgdXAgdGhlIGBoYXNoQ2hhbmdlZGAgZXZlbnQgaGFuZGxlcixcbiAgICAvLyBzbyB0aGF0IGByZW5kZXIoKWAgaXMgbm90IGNhbGxlZCB1bnRpbCBpbml0aWFsIGRhdGEgYXJlIGxvYWRlZC5cbiAgICBjb25zb2xlLmxvZygnWzNhXSBUaGUgaGFzaCBpcyB1cGRhdGVkIHdpdGggYSBtZXJnZSBvZiBkZWZhdWx0IHN0YXRlIGFuZCBzdGF0ZSBhbHJlYWR5IGV4aXN0aW5nIGluIHRoZSBoYXNoLicpO1xuICAgIEhhc2hNYW5hZ2VyLnVwZGF0ZUhhc2goaW5pdGlhbFN0YXRlKTtcblxuICAgIC8vIEhhbmRsZSBhbGwgaGFzaCBjaGFuZ2VzIHN1YnNlcXVlbnQgdG8gdGhlIGFib3ZlIGluaXRpYWxpemF0aW9uLlxuICAgIGNvbnNvbGUubG9nKCdbM2JdIEFwcCByZWdpc3RlcnMgd2l0aCBIYXNoTWFuYWdlciB0byBiZSBub3RpZmllZCBvZiBzdWJzZXF1ZW50IGNoYW5nZXMgaW4gdGhlIGhhc2guJyk7XG4gICAgSGFzaE1hbmFnZXIuYWRkTGlzdGVuZXIoSGFzaE1hbmFnZXIuRVZFTlRfSEFTSF9DSEFOR0VELCB0aGlzLmhhc2hDaGFuZ2VkKTtcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cbiAgICBIYXNoTWFuYWdlci5yZW1vdmVMaXN0ZW5lcihIYXNoTWFuYWdlci5FVkVOVF9IQVNIX0NIQU5HRUQsIHRoaXMuaGFzaENoYW5nZWQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcblxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuXG4gICAgLy8gRG8gbm90IHJlLXJlbmRlciBpZiB0aGUgc3RhdGUgY2hhbmdlIHdhcyBqdXN0IG1hcCBzdGF0ZS5cbiAgICByZXR1cm4gIXRoaXMubWFwSGFzaFVwZGF0ZWQ7XG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG5cbiAgICAvL1xuXG4gIH1cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG4gIC8vIEhhbmRsZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXG4gIGhhc2hDaGFuZ2VkIChldmVudCwgc3VwcHJlc3NSZW5kZXIpIHtcblxuICAgIC8vIElnbm9yZSBoYXNoIGNoYW5nZXMgYmVmb3JlIGluaXRpYWwgZGF0YSBoYXZlIGxvYWRlZC5cbiAgICBpZiAoIUV4YW1wbGVTdG9yZS5oYXNMb2FkZWRJbml0aWFsRGF0YSgpKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygnWzZiXSAuLi5BcHAgaGFuZGxlcyBhIGNoYW5nZSBpbiB0aGUgaGFzaC4gQSBzZXRTdGF0ZSgpIGNhbGwgdXBkYXRlcyB0aGUgYXBwbGljYXRpb24gd2l0aCB0aGUgbmV3IHN0YXRlIGFuZCB0cmlnZ2VycyBhIHJlbmRlcigpLCBmcm9tIHdoZXJlIHRoZSBuZXcgc3RhdGUgd2lsbCBmbG93IGRvd24gdGhlIGNvbXBvbmVudCB0cmVlLicpO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gRXhhbXBsZVN0b3JlLmdldERhdGEoKSxcbiAgICAgIHNlbGVjdGVkSXRlbUlkID0gSGFzaE1hbmFnZXIuZ2V0U3RhdGUoQXBwLlNUQVRFX0tFWVMuSVRFTSksXG4gICAgICBtYXBTdGF0ZSA9IEhhc2hNYW5hZ2VyLmdldFN0YXRlKEhhc2hNYW5hZ2VyLk1BUF9TVEFURV9LRVkpLFxuICAgICAgbmV3U3RhdGU7XG5cbiAgICBuZXdTdGF0ZSA9IHtcbiAgICAgIGV4YW1wbGVDb21wb25lbnQ6IHtcbiAgICAgICAgdGl0bGU6IGRhdGEuZXhhbXBsZVRpdGxlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkSXRlbTogc2VsZWN0ZWRJdGVtSWQsXG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgLi4uZGF0YS5sZWdlbmQsIC8vIG1lcmdlIGV4aXN0aW5nIHN0YXRlIGludG8gbmV3IHN0YXRlXG4gICAgICAgIHNlbGVjdGVkSXRlbTogc2VsZWN0ZWRJdGVtSWRcbiAgICAgIH0sXG4gICAgICBwdW5jaGNhcmQ6IGRhdGEucHVuY2hjYXJkXG4gICAgfTtcblxuICAgIGlmIChtYXBTdGF0ZSkge1xuICAgICAgbmV3U3RhdGUuem9vbSA9IG1hcFN0YXRlLnpvb207XG4gICAgICBuZXdTdGF0ZS5jZW50ZXIgPSBtYXBTdGF0ZS5jZW50ZXI7XG4gICAgfVxuXG4gICAgLy8gc2V0U3RhdGUgd2l0aCB0aGUgdXBkYXRlZCBkYXRhLCB3aGljaCBjYXVzZXMgYSByZS1yZW5kZXIoKVxuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXG4gICAgdGhpcy5tYXBIYXNoVXBkYXRlZCA9IGZhbHNlO1xuXG4gIH1cblxuICBvbkxlZ2VuZEl0ZW1TZWxlY3RlZCAodmFsdWUsIGluZGV4KSB7XG5cbiAgICBpZiAoIWlzTmFOKGluZGV4KSkge1xuICAgICAgQXBwQWN0aW9ucy5pdGVtU2VsZWN0ZWQoaW5kZXgpO1xuICAgIH1cblxuICB9XG5cbiAgb25NYXBNb3ZlZCAoZXZlbnQpIHtcblxuICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgIEFwcEFjdGlvbnMubWFwTW92ZWQoe1xuICAgICAgICB6b29tOiBldmVudC50YXJnZXQuZ2V0Wm9vbSgpLFxuICAgICAgICBjZW50ZXI6IGV2ZW50LnRhcmdldC5nZXRDZW50ZXIoKVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICBvbldpbmRvd1Jlc2l6ZSAoZXZlbnQpIHtcblxuICAgIHRoaXMuY29tcHV0ZUNvbXBvbmVudERpbWVuc2lvbnMoKTtcblxuICB9XG5cbiAgdG9nZ2xlQWJvdXQgKCkge1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhYm91dE1vZGFsT3BlbjogIXRoaXMuc3RhdGUuYWJvdXRNb2RhbE9wZW5cbiAgICB9KTtcblxuICB9XG5cbiAgdHJpZ2dlckludHJvIChldmVudCkge1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuYWJvdXRNb2RhbE9wZW4pIHtcbiAgICAgIHRoaXMudG9nZ2xlQWJvdXQoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGludHJvOiB7XG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgIHN0ZXA6IChldmVudCAmJiBldmVudC5jdXJyZW50VGFyZ2V0KSA/IHBhcnNlSW50KGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zdGVwKSA6IG51bGwsXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgIHNob3dTdGVwTnVtYmVyczogZmFsc2UsXG4gICAgICAgICAgc2tpcExhYmVsOiAnw5cnLFxuICAgICAgICAgIG5leHRMYWJlbDogJ+KfqScsXG4gICAgICAgICAgcHJldkxhYmVsOiAn4p+oJyxcbiAgICAgICAgICBkb25lTGFiZWw6ICfDlydcbiAgICAgICAgfSxcblxuICAgICAgICBzdGVwczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVsZW1lbnQ6ICcubGVmdC1jb2x1bW4gLnRvcC1yb3cudGVtcGxhdGUtdGlsZScsXG4gICAgICAgICAgICBpbnRybzogJ2NvcHkgZm9yIHN0ZXAgT05FIGdvZXMgaGVyZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudDogJy5sZWZ0LWNvbHVtbiAuYm90dG9tLXJvdy50ZW1wbGF0ZS10aWxlJyxcbiAgICAgICAgICAgIGludHJvOiAnY29weSBmb3Igc3RlcCBUV08gZ29lcyBoZXJlJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudDogJy5yaWdodC1jb2x1bW4gLnRvcC1yb3cudGVtcGxhdGUtdGlsZScsXG4gICAgICAgICAgICBpbnRybzogJ2NvcHkgZm9yIHN0ZXAgVEhSRUUgZ29lcyBoZXJlJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVsZW1lbnQ6ICcucmlnaHQtY29sdW1uIC5ib3R0b20tcm93LnRlbXBsYXRlLXRpbGUnLFxuICAgICAgICAgICAgaW50cm86ICdjb3B5IGZvciBzdGVwIEZPVVIgZ29lcyBoZXJlJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcblxuICAgICAgICBvbkV4aXQ6IHRoaXMub25JbnRyb0V4aXRcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgb25JbnRyb0V4aXQgKCkge1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnRybzoge1xuICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG4gIC8vIEhlbHBlcnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cbiAgY29tcHV0ZUNvbXBvbmVudERpbWVuc2lvbnMgKCkge1xuXG4gICAgLy8gYmFzZWQgb2ZmIG9mIHNpemVzIHN0b3JlZCB3aXRoaW4gX3ZhcmlhYmxlcy5zY3NzIC0tXG4gICAgLy8gaWYgeW91IGNoYW5nZSB0aGVtIHRoZXJlLCBjaGFuZ2UgdGhlbSBoZXJlLlxuICAgIGxldCBjb250YWluZXJQYWRkaW5nID0gMjAsXG4gICAgICBoZWFkZXJIZWlnaHQgPSA5MCxcbiAgICAgIGJyZWFrcG9pbnRXaWR0aFdpZGUgPSAxMjgwLFxuICAgICAgYm90dG9tUm93SGVpZ2h0U2hvcnQgPSAyMzAsXG4gICAgICBib3R0b21Sb3dIZWlnaHRUYWxsID0gMzEwLFxuICAgICAgYm90dG9tUm93SGVpZ2h0LFxuICAgICAgZGltZW5zaW9ucyA9IHt9O1xuXG4gICAgLy8gQ2FsY3VsYXRlIGJvdHRvbSByb3cgaGVpZ2h0IGFzIHNldCBieSBtZWRpYSBicmVha3BvaW50c1xuICAgIGxldCBib3R0b21Sb3dFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20tcm93JyksXG4gICAgICBib3R0b21Sb3dIZWlnaHRTdHlsZTtcblxuICAgIGlmIChib3R0b21Sb3dFbCkge1xuICAgICAgYm90dG9tUm93SGVpZ2h0U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib3R0b21Sb3dFbCk7XG4gICAgICBib3R0b21Sb3dIZWlnaHQgPSBib3R0b21Sb3dFbC5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KGJvdHRvbVJvd0hlaWdodFN0eWxlLm1hcmdpblRvcC5yZXBsYWNlKCdweCcsICcnKSkgKyBwYXJzZUZsb2F0KGJvdHRvbVJvd0hlaWdodFN0eWxlLm1hcmdpbkJvdHRvbS5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdHRvbVJvd0hlaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIDwgYnJlYWtwb2ludFdpZHRoV2lkZSA/IGJvdHRvbVJvd0hlaWdodFNob3J0IDogYm90dG9tUm93SGVpZ2h0VGFsbDtcbiAgICB9XG5cbiAgICBkaW1lbnNpb25zLnVwcGVyUmlnaHQgPSB7XG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIGJvdHRvbVJvd0hlaWdodCAtIDMgKiBjb250YWluZXJQYWRkaW5nXG4gICAgfTtcbiAgICBkaW1lbnNpb25zLnVwcGVyTGVmdCA9IHtcbiAgICAgIGhlaWdodDogZGltZW5zaW9ucy51cHBlclJpZ2h0LmhlaWdodCAtIGhlYWRlckhlaWdodFxuICAgIH07XG4gICAgZGltZW5zaW9ucy5sb3dlckxlZnQgPSB7XG4gICAgICBoZWlnaHQ6IGJvdHRvbVJvd0hlaWdodCAtIDIgKiBjb250YWluZXJQYWRkaW5nXG4gICAgfTtcbiAgICBkaW1lbnNpb25zLmxvd2VyUmlnaHQgPSB7XG4gICAgICBoZWlnaHQ6IGRpbWVuc2lvbnMubG93ZXJMZWZ0LmhlaWdodFxuICAgIH07XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgZGltZW5zaW9uczogZGltZW5zaW9ucyB9KTtcblxuICB9XG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuICAvLyBSZW5kZXIgZnVuY3Rpb25zXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXG4gIHJlbmRlclRpbGVMYXllcnMgKCkge1xuXG4gICAgbGV0IGxheWVycyA9IFtdO1xuXG4gICAgaWYgKGNhcnRvZGJMYXllcnMubGF5ZXJncm91cCAmJiBjYXJ0b2RiTGF5ZXJzLmxheWVyZ3JvdXAubGF5ZXJzKSB7XG4gICAgICBsYXllcnMgPSBsYXllcnMuY29uY2F0KGNhcnRvZGJMYXllcnMubGF5ZXJncm91cC5sYXllcnMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENhcnRvREJUaWxlTGF5ZXJcbiAgICAgICAgICAgIGtleT17ICdjYXJ0b2RiLXRpbGUtbGF5ZXItJyArIGkgfVxuICAgICAgICAgICAgdXNlcklkPXsgY2FydG9kYkNvbmZpZy51c2VySWQgfVxuICAgICAgICAgICAgc3FsPXsgaXRlbS5vcHRpb25zLnNxbCB9XG4gICAgICAgICAgICBjYXJ0b2Nzcz17IGl0ZW0ub3B0aW9ucy5jYXJ0b2NzcyB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAodGlsZUxheWVycy5sYXllcnMpIHtcbiAgICAgIGxheWVycyA9IGxheWVycy5jb25jYXQodGlsZUxheWVycy5sYXllcnMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRpbGVMYXllclxuICAgICAgICAgICAga2V5PXsgJ3RpbGUtbGF5ZXItJyArIGkgfVxuICAgICAgICAgICAgdXJsPXsgaXRlbS51cmwgfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxheWVycztcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICBsZXQgbW9kYWxTdHlsZSA9IHtcbiAgICAgIG92ZXJsYXkgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbnVsbFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQgOiB7XG4gICAgICAgIHRvcDogbnVsbCxcbiAgICAgICAgbGVmdDogbnVsbCxcbiAgICAgICAgcmlnaHQ6IG51bGwsXG4gICAgICAgIGJvdHRvbTogbnVsbCxcbiAgICAgICAgYm9yZGVyOiBudWxsLFxuICAgICAgICBiYWNrZ3JvdW5kOiBudWxsLFxuICAgICAgICBib3JkZXJSYWRpdXM6IG51bGwsXG4gICAgICAgIHBhZGRpbmc6IG51bGwsXG4gICAgICAgIHBvc2l0aW9uOiBudWxsXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGZ1bGwtaGVpZ2h0Jz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGZ1bGwtaGVpZ2h0Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyBlaWdodCBsZWZ0LWNvbHVtbiBmdWxsLWhlaWdodCc+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0ncm93IHUtZnVsbC13aWR0aCc+XG4gICAgICAgICAgICAgIDxoMT48c3BhbiBjbGFzc05hbWU9J2hlYWRlci1tYWluJz5QQU5PUkFNQSBURU1QTEFURTwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgICA8aDQgb25DbGljaz17IHRoaXMudG9nZ2xlQWJvdXQgfT5BQk9VVCBUSElTIE1BUDwvaDQ+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdpbnRyby1idXR0b24nIGRhdGEtc3RlcD0nMScgb25DbGljaz17IHRoaXMudHJpZ2dlckludHJvIH0+PHNwYW4gY2xhc3NOYW1lPSdpY29uIGluZm8nLz48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyB0b3Atcm93IHRlbXBsYXRlLXRpbGUnIHN0eWxlPXsgeyBoZWlnaHQ6IHRoaXMuc3RhdGUuZGltZW5zaW9ucy51cHBlckxlZnQuaGVpZ2h0ICsgJ3B4JyB9IH0+XG4gICAgICAgICAgICA8TWFwIHsgLi4udGhpcy5zdGF0ZS5tYXAgfSBvbkxlYWZsZXRNb3ZlZW5kPXsgdGhpcy5vbk1hcE1vdmVkIH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlclRpbGVMYXllcnMoKSB9XG4gICAgICAgICAgICAgIDwvTWFwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGJvdHRvbS1yb3cgdGVtcGxhdGUtdGlsZSc+XG4gICAgICAgICAgICAgIDxoMj5Mb2NhbCBjb21wb25lbnQ6PC9oMj5cbiAgICAgICAgICAgICAgPEV4YW1wbGVDb21wb25lbnQgeyAuLi50aGlzLnN0YXRlLmV4YW1wbGVDb21wb25lbnQgfSAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0naW50cm8tYnV0dG9uJyBkYXRhLXN0ZXA9JzInIG9uQ2xpY2s9eyB0aGlzLnRyaWdnZXJJbnRybyB9PjxzcGFuIGNsYXNzTmFtZT0naWNvbiBpbmZvJy8+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyBmb3VyIHJpZ2h0LWNvbHVtbiBmdWxsLWhlaWdodCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHRvcC1yb3cgdGVtcGxhdGUtdGlsZScgc3R5bGU9eyB7IGhlaWdodDogdGhpcy5zdGF0ZS5kaW1lbnNpb25zLnVwcGVyUmlnaHQuaGVpZ2h0ICsgJ3B4JyB9IH0+XG4gICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5wdW5jaGNhcmQgPyA8UHVuY2hjYXJkIHsgLi4udGhpcy5zdGF0ZS5wdW5jaGNhcmRbdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1dIH0gLz4gOiBudWxsIH1cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ludHJvLWJ1dHRvbicgZGF0YS1zdGVwPSczJyBvbkNsaWNrPXsgdGhpcy50cmlnZ2VySW50cm8gfT48c3BhbiBjbGFzc05hbWU9J2ljb24gaW5mbycvPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGJvdHRvbS1yb3cgdGVtcGxhdGUtdGlsZSc+XG4gICAgICAgICAgICAgIDxoMj5JbXBvcnRlZCBjb21wb25lbnQ6PC9oMj5cbiAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmxlZ2VuZCA/IDxMZWdlbmQgeyAuLi50aGlzLnN0YXRlLmxlZ2VuZCB9IG9uSXRlbVNlbGVjdGVkPXsgdGhpcy5vbkxlZ2VuZEl0ZW1TZWxlY3RlZCB9Lz4gOiBudWxsIH1cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ludHJvLWJ1dHRvbicgZGF0YS1zdGVwPSc0JyBvbkNsaWNrPXsgdGhpcy50cmlnZ2VySW50cm8gfT48c3BhbiBjbGFzc05hbWU9J2ljb24gaW5mbycvPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxNb2RhbCBpc09wZW49eyB0aGlzLnN0YXRlLmFib3V0TW9kYWxPcGVuIH0gb25SZXF1ZXN0Q2xvc2U9eyB0aGlzLnRvZ2dsZUFib3V0IH0gc3R5bGU9eyBtb2RhbFN0eWxlIH0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Nsb3NlJyBvbkNsaWNrPXsgdGhpcy50b2dnbGVBYm91dCB9PjxzcGFuPsOXPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgIDxoMz5BYm91dCB0aGlzIE1hcDwvaDM+XG4gICAgICAgICAgPHA+XCJPaCwgaWYgeW91IHRha2UgaXQgdGhhdCB3YXksXCIgc2FpZCBKb2huIEJ1bnNieSwgXCJJJ3ZlIG5vdGhpbmcgbW9yZSB0byBzYXkuXCIgSm9obiBCdW5zYnkncyBzdXNwaWNpb25zIHdlcmUgY29uZmlybWVkLiAgQXQgYSBsZXNzIGFkdmFuY2VkIHNlYXNvbiBvZiB0aGUgeWVhciB0aGUgdHlwaG9vbiwgYWNjb3JkaW5nIHRvIGEgZmFtb3VzIG1ldGVvcm9sb2dpc3QsIHdvdWxkIGhhdmUgcGFzc2VkIGF3YXkgbGlrZSBhIGx1bWlub3VzIGNhc2NhZGUgb2YgZWxlY3RyaWMgZmxhbWU7IGJ1dCBpbiB0aGUgd2ludGVyIGVxdWlub3ggaXQgd2FzIHRvIGJlIGZlYXJlZCB0aGF0IGl0IHdvdWxkIGJ1cnN0IHVwb24gdGhlbSB3aXRoIGdyZWF0IHZpb2xlbmNlLjwvcD5cbiAgICAgICAgICA8aDM+U291cmNlczwvaDM+XG4gICAgICAgICAgPHA+VGhlIHBpbG90IHRvb2sgaGlzIHByZWNhdXRpb25zIGluIGFkdmFuY2UuICBIZSByZWVmZWQgYWxsIHNhaWwsIHRoZSBwb2xlLW1hc3RzIHdlcmUgZGlzcGVuc2VkIHdpdGg7IGFsbCBoYW5kcyB3ZW50IGZvcndhcmQgdG8gdGhlIGJvd3MuICBBIHNpbmdsZSB0cmlhbmd1bGFyIHNhaWwsIG9mIHN0cm9uZyBjYW52YXMsIHdhcyBob2lzdGVkIGFzIGEgc3Rvcm0tamliLCBzbyBhcyB0byBob2xkIHRoZSB3aW5kIGZyb20gYmVoaW5kLiAgVGhlbiB0aGV5IHdhaXRlZC48L3A+XG4gICAgICAgICAgPGgzPlN1Z2dlc3RlZCBSZWFkaW5nPC9oMz5cbiAgICAgICAgICA8cD5Kb2huIEJ1bnNieSBoYWQgcmVxdWVzdGVkIGhpcyBwYXNzZW5nZXJzIHRvIGdvIGJlbG93OyBidXQgdGhpcyBpbXByaXNvbm1lbnQgaW4gc28gbmFycm93IGEgc3BhY2UsIHdpdGggbGl0dGxlIGFpciwgYW5kIHRoZSBib2F0IGJvdW5jaW5nIGluIHRoZSBnYWxlLCB3YXMgZmFyIGZyb20gcGxlYXNhbnQuICBOZWl0aGVyIE1yLiBGb2dnLCBGaXgsIG5vciBBb3VkYSBjb25zZW50ZWQgdG8gbGVhdmUgdGhlIGRlY2suPC9wPlxuICAgICAgICAgIDxoMz5BY2tub3dsZWRnZW1lbnRzPC9oMz5cbiAgICAgICAgICA8cD5UaGUgc3Rvcm0gb2YgcmFpbiBhbmQgd2luZCBkZXNjZW5kZWQgdXBvbiB0aGVtIHRvd2FyZHMgZWlnaHQgbydjbG9jay4gV2l0aCBidXQgaXRzIGJpdCBvZiBzYWlsLCB0aGUgVGFua2FkZXJlIHdhcyBsaWZ0ZWQgbGlrZSBhIGZlYXRoZXIgYnkgYSB3aW5kLCBhbiBpZGVhIG9mIHdob3NlIHZpb2xlbmNlIGNhbiBzY2FyY2VseSBiZSBnaXZlbi4gIFRvIGNvbXBhcmUgaGVyIHNwZWVkIHRvIGZvdXIgdGltZXMgdGhhdCBvZiBhIGxvY29tb3RpdmUgZ29pbmcgb24gZnVsbCBzdGVhbSB3b3VsZCBiZSBiZWxvdyB0aGUgdHJ1dGguPC9wPlxuICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgIDxJbnRyb01hbmFnZXIgeyAuLi50aGlzLnN0YXRlLmludHJvIH0gLz5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4YW1wbGVTdG9yZSBmcm9tICcuLi9zdG9yZXMvRXhhbXBsZVN0b3JlJztcbmltcG9ydCB7IEFwcEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vdXRpbHMvQXBwQWN0aW9uQ3JlYXRvcic7XG5cbi8qKlxuICogQW4gZXh0cmVtZWx5IG1pbmltYWwgY29tcG9uZW50LFxuICogZGVzaWduZWQgYXMgYm9pbGVycGxhdGUgZm9yIG5ldyBjb21wb25lbnRzXG4gKiBhbmQgdG8gZGVtb25zdHJhdGUgZGF0YSBmbG93IHRocm91Z2ggYSBSZWFjdC9GbHV4IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBwcm9wZXJ0eSB2YWxpZGF0aW9uXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbG9hZGluZzogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICAvLyBwcm9wZXJ0eSBkZWZhdWx0cyAoRVM3LXN0eWxlIFJlYWN0KVxuICAvLyAoaW5zdGVhZCBvZiBFUzUtc3R5bGUgZ2V0RGVmYXVsdFByb3BzKVxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRpdGxlOiAnRGVmYXVsdCBUaXRsZScsXG4gICAgbG9hZGluZzogdHJ1ZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuXG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuXG4gICAgLy9cblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuXG4gICAgLy9cblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuXG4gICAgLy9cblxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcblxuICAgIC8vXG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2V4YW1wbGUtY29tcG9uZW50Jz5cbiAgICAgICAgPGgzPnsgdGhpcy5wcm9wcy50aXRsZSB9PC9oMz5cbiAgICAgICAgPHA+SW5pdGlhbCBkYXRhIGxvYWQgeyB0aGlzLnByb3BzLmxvYWRpbmcgPyAncGVuZGluZy4uLicgOiAnY29tcGxldGUhJyB9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICB9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanN4JztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jb250YWluZXInKSk7XG4iLCJpbXBvcnQgc2FtcGxlRGF0YSBmcm9tICcuLi8uLi9zdGF0aWMvc2FtcGxlRGF0YS5qc29uJztcblxuY29uc3QgRXhhbXBsZVN0b3JlID0ge1xuXG4gIGRhdGE6IG51bGwsXG5cbiAgLyoqXG4gICAqIFNhbXBsZSBkYXRhIGxvYWRlciwgd2l0aCBzZXRUaW1lb3V0XG4gICAqIGVtdWxhdGluZyBuZXR3b3JrIHJlc3BvbnNlIGRlbGF5LFxuICAgKiByZXR1cm5pbmcgc2FtcGxlIGRhdGEgZnJvbSBhIGxvY2FsIGpzb24gZmlsZS5cbiAgICogQSByZWFsIGRhdGEgbG9hZGVyIHdvdWxkIGZvbGxvdyB0aGUgc2FtZSBwYXR0ZXJuLFxuICAgKiBidXQgcHJvYmFibHkgbWFrZSBhbiBYSFIgYW5kIHJldHVybiB0aGUgcmVzcG9uc2UgZGF0YS5cbiAgICovXG4gIGRhdGFMb2FkZXI6IHtcbiAgICBxdWVyeTogKHZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShzYW1wbGVEYXRhKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBpbml0aWFsIGRhdGEgbG9hZCByZXF1ZXN0IGhhcyBjb21wbGV0ZWQuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBoYXNMb2FkZWRJbml0aWFsRGF0YTogZnVuY3Rpb24gKCkge1xuXG4gICAgcmV0dXJuICEhdGhpcy5kYXRhO1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1ha2UgYSByZXF1ZXN0IGZvciBkYXRhIG5lZWRlZCBvbiBhcHBsaWNhdGlvbiBpbml0LlxuICAgKi9cbiAgbG9hZEluaXRpYWxEYXRhOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBTYW1wbGUgcXVlcnk7IGZvcm1hdCB2YXJpZXMgYnkgZGF0YSBwcm92aWRlclxuICAgIHJldHVybiB0aGlzLmRhdGFMb2FkZXIucXVlcnkoW1xuICAgICAge1xuICAgICAgICBxdWVyeTogJ1NFTEVDVCAqIEZST00gdGFibGVuYW1lJyxcbiAgICAgICAgZm9ybWF0OiAnSlNPTidcbiAgICAgIH1cbiAgICBdKS50aGVuKCguLi5yZXNwb25zZXMpID0+IHtcblxuICAgICAgdGhpcy5zZXREYXRhKHRoaXMucGFyc2VEYXRhKC4uLnJlc3BvbnNlcykpO1xuICAgICAgY29uc29sZS5sb2coJ1s0XSBFeGFtcGxlU3RvcmUgZmluaXNoZXMgbG9hZGluZyBhbmQgcGFyc2luZyBpbml0aWFsIGRhdGEuJyk7XG5cbiAgICB9LFxuICAgIChlcnJvcikgPT4ge1xuXG4gICAgICBjb25zb2xlLmVycm9yKCdFeGFtcGxlIHJlY2VpdmVkIGVycm9yOicsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuXG4gICAgfSk7XG5cbiAgfSxcblxuICAvKipcbiAgICogUmV0cmlldmUgZGF0YSBmcm9tIHRoZSBzdG9yZS5cbiAgICovXG4gIGdldERhdGE6IGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIEZvciBzaW1wbGljaXR5IG9mIGV4YW1wbGUsIHdlIHJldHVybiBhbGwgb2YgdGhlIGRhdGEuXG4gICAgLy8gQSByZWFsIGFwcGxpY2F0aW9uIHdvdWxkIG1vcmUgbGlrZWx5IHJldHVybiBhIGNvcHlcbiAgICAvLyAodG8gYXZvaWQgYWNjaWRlbnRhbCBtdXRhdGlvbiBieSBjb25zdW1lcnMpIFxuICAgIC8vIG9mIGEgc3Vic2V0IG9mIHRoZSBkYXRhLlxuICAgIHJldHVybiB0aGlzLmRhdGE7XG5cbiAgfSxcblxuICAvKipcbiAgICogQ2FjaGUgdGhlIGxvYWRlZCwgcGFyc2VkIGRhdGEgZm9yIGZ1dHVyZSB1c2UgYnkgdGhlIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgc2V0RGF0YTogZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cbiAgfSxcblxuICAvKipcbiAgICogUGFyc2UgcmV0dXJuZWQgZGF0YSBhcyBuZWNlc3NhcnkuXG4gICAqL1xuICBwYXJzZURhdGE6IGZ1bmN0aW9uICguLi5kYXRhKSB7XG5cbiAgICBsZXQgZmlyc3RSZXNwb25zZSA9IGRhdGFbMF07XG4gICAgcmV0dXJuIGZpcnN0UmVzcG9uc2U7XG5cbiAgfVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGVTdG9yZTtcbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJy4vQXBwRGlzcGF0Y2hlcic7XG5cbmV4cG9ydCBjb25zdCBBcHBBY3Rpb25UeXBlcyA9IHtcblxuICBpdGVtU2VsZWN0ZWQ6ICdpdGVtU2VsZWN0ZWQnLFxuICBtYXBNb3ZlZDogJ21hcE1vdmVkJ1xuXG59O1xuXG5leHBvcnQgY29uc3QgQXBwQWN0aW9ucyA9IHtcblxuICAvKipcbiAgICogRGlzcGF0Y2ggYWN0aW9uIHdoZW4gYW4gaXRlbSBpcyBzZWxlY3RlZCAodXN1YWxseSBieSB1c2VyIGFjdGlvbikuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtICAgICBJRCBvZiB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICovXG4gIGl0ZW1TZWxlY3RlZDogKGl0ZW0pID0+IHtcbiAgICBBcHBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFwcEFjdGlvblR5cGVzLml0ZW1TZWxlY3RlZCxcbiAgICAgIHZhbHVlOiBpdGVtXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIGFjdGlvbiB3aGVuIG1hcCBpcyB6b29tZWQgb3IgcGFubmVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gbWFwU3RhdGUgICB7IHpvb20sIGNlbnRlcjogeyBsYXQsIGxuZyB9IH1cbiAgICovXG4gIG1hcE1vdmVkOiAobWFwU3RhdGUpID0+IHtcbiAgICBBcHBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFwcEFjdGlvblR5cGVzLm1hcE1vdmVkLFxuICAgICAgdmFsdWU6IG1hcFN0YXRlXG4gICAgfSk7XG4gIH1cblxufTtcbiIsImltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICdmbHV4JztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IERpc3BhdGNoZXIoKTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJsZWdlbmRcIjoge1xuXHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XCJFcmllIENhbmFsXCIsXG5cdFx0XHRcIlNjaHV5bGtpbGwgTmF2aWdhdGlvblwiLFxuXHRcdFx0XCJDaGVzYXBlYWtlICYgT2hpb1wiXG5cdFx0XSxcblx0XHRcInNlbGVjdGVkSXRlbVwiOiBcIkVyaWUgQ2FuYWxcIlxuXHR9LFxuXG5cdFwiZXhhbXBsZVRpdGxlXCI6IFwiRXhhbXBsZSBDb21wb25lbnRcIixcblxuXHRcInB1bmNoY2FyZFwiOiBbXG5cdFx0e1xuXHRcdFx0XCJoZWFkZXJcIjoge1xuXHRcdFx0XHRcInRpdGxlXCI6IFwiRXJpZSBDYW5hbFwiLFxuXHRcdFx0XHRcInN1YnRpdGxlXCI6IDE4NDksXG5cdFx0XHRcdFwiY2FwdGlvblwiOiAxNjIyNDQ0XG5cdFx0XHR9LFxuXHRcdFx0XCJjYXRlZ29yaWVzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDQ2LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJGbG91clwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDMyNjMwODcsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDMxOTc4Mi41MjZcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMjUyLFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJXaGVhdFwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDI3MzQzODksXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI2Nzk3MC4xMjJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNTEsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkdyYWluXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogOTI1MjMwMSxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjE3NDI5LjA3MzVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdyYWlucywgQWxjb2hvbCAmIFRvYmFjY29cIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiA4MDUxODEuNzIxNVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb21tb2RpdGllc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTMsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkJvYXJkcyAmIHNjYW50bGluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDI5NzQzMTE0MCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDQ2MTQ2LjcxXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDEzMCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU2hpbmdsZXNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiA1MTI1ODAwMCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjU2Mjlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkJ1aWxkaW5nIE1hdGVyaWFsc1wiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDQ3MTc3NS43MVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb21tb2RpdGllc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTA3LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJQcm9kdWN0IG9mIHRoZSBGb3Jlc3RcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMTA0ODQwLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxMTA0ODQwXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDI1Myxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU3RhdmVzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTU0MTU5MzU5LFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA3NzA3OS42Nzk1XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDE0Mixcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiVGltYmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTQ5NzYyNyxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjMzNjIuOTgxMlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMTEsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIldvb2RcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMTk3MCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTc5NTVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkx1bWJlclxcL1RpbWJlclxcL1dvb2RcIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiAxMjIzMjM3LjY2MDdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDI1MSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQWdyaWN1bHR1cmVcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMDIwMjU5LFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxMDIwMjU5XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJBZ3JpY3VsdHVyYWwgUHJvZHVjdHMgKG90aGVyIHRoYW4gZ3JhaW5zKVwiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDEwMjAyNTlcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDI1NSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTWVyY2hhbmRpc2VcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyNTU0NTUsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI1NTQ1NVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyNTQsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIk1hbnVmYWN0dXJlc1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDIwMzk5MCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjAzOTkwXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJGaW5pc2hlZCBQcm9kdWN0c1wiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDQ1OTQ0NVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb21tb2RpdGllc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTU4LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJNaXNjZWxsYW5lb3VzXFwvT3RoZXIgQXJ0aWNsZXNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzMTAwODgsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDMxMDA4OFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiT3RoZXIgQXJ0aWNsZXNcIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiAzMTAwODhcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxMyxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJCb2FyZHMgJiBzY2FudGxpbmdcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDI5NzQzMTE0MCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA0NDYxNDYuNzFcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNDYsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRmxvdXJcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDMyNjMwODcsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMzE5NzgyLjUyNlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiA1MSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHcmFpblwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogOTI1MjMwMSxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMTc0MjkuMDczNVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxMDcsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiUHJvZHVjdCBvZiB0aGUgRm9yZXN0XCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMTA0ODQwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDExMDQ4NDBcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTMwLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlNoaW5nbGVzXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA1MTI1ODAwMCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyNTYyOVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxNDIsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiVGltYmVyXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxNDk3NjI3LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDIzMzYyLjk4MTJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTU4LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk1pc2NlbGxhbmVvdXNcXC9PdGhlciBBcnRpY2xlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMzEwMDg4LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDMxMDA4OFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyMTEsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiV29vZFwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMTE5NzAsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTc5NTVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjUxLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkFncmljdWx0dXJlXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMDIwMjU5LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEwMjAyNTlcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjUyLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIldoZWF0XCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyNzM0Mzg5LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI2Nzk3MC4xMjJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjUzLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlN0YXZlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMTU0MTU5MzU5LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDc3MDc5LjY3OTVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjU0LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk1hbnVmYWN0dXJlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMjAzOTkwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDIwMzk5MFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyNTUsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTWVyY2hhbmRpc2VcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDI1NTQ1NSxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyNTU0NTVcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJoZWFkZXJcIjoge1xuXHRcdFx0XHRcInRpdGxlXCI6IFwiU2NodXlsa2lsbCBOYXZpZ2F0aW9uXCIsXG5cdFx0XHRcdFwic3VidGl0bGVcIjogMTg0OSxcblx0XHRcdFx0XCJjYXB0aW9uXCI6IDcxMTUyNVxuXHRcdFx0fSxcblx0XHRcdFwiY2F0ZWdvcmllc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMjksXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvYWxcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiA0ODkyMDgsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ4OTIwOFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRnVlbCBhbmQgT3JlXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogNDg5MjA4XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNTgsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIk1pc2NlbGxhbmVvdXNcXC9PdGhlciBBcnRpY2xlc1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDIyMjMxNyxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjIyMzE3XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJPdGhlciBBcnRpY2xlc1wiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDIyMjMxN1xuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdFx0XCJpdGVtc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDE1OCxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJNaXNjZWxsYW5lb3VzXFwvT3RoZXIgQXJ0aWNsZXNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDIyMjMxNyxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMjIzMTdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjI5LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvYWxcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDQ4OTIwOCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA0ODkyMDhcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJoZWFkZXJcIjoge1xuXHRcdFx0XHRcInRpdGxlXCI6IFwiQ2hlc2FwZWFrZSAmIE9oaW9cIixcblx0XHRcdFx0XCJzdWJ0aXRsZVwiOiAxODQ5XG5cdFx0XHR9LFxuXHRcdFx0XCJjYXRlZ29yaWVzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDQ2LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJGbG91clwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDIzNjYyMCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjMxODguNzZcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMjA1LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb3JuXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMjQ0MjgxLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA4NTQ5LjgzNVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNDgsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIldoZWF0XCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMjQwMDczLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA3MjAyLjE5XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDg0LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJNaWxsIG9mZmFsXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogNDU0MjMsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ0NTEuNDU0XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDI4NCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiV2hpc2tleVwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDI2NzQsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI1Mi42OTNcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogODksXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIk9hdHNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMzIwMCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjExLjJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMzEsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvcm4gbWVhbFwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDcyMjUsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE4MC42MjVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNTgsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkhheSwgU3RyYXdcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxNDcsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE0N1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNDUsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlRvYmFjY29cIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyMDAsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEwMFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMTYsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlJ5ZVwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDE3OTUsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDUwLjI2XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHcmFpbnMsIEFsY29ob2wgJiBUb2JhY2NvXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogNDQzMzQuMDE3XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMTQsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlJvdWdoIHN0b25lLCBvdGhlciB0aGFuIGxpbWVzdG9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDE3NzUwLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMTc0My43NVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA3Nixcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTGltZXN0b25lXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogODY2Mixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTc2ODYuOTM3OFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA5Nyxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiUGxhc3RlclwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDY1OTksXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDY1OTlcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNzQsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkxpbWVcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiA3MjMsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDcyM1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQnJpY2tzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogODEwMDAsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDMyNFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQ2VtZW50XCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTM4Mixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjU5LjgxNlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA4Nyxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTmFpbHNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzNjgyLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxODQuMVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA3NSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTGltZSBhbmQgQ2VtZW50XCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTQwLFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxNDBcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTEwLFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJSYWlsc1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDM5MDYsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDExNy4xOFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQnVpbGRpbmcgTWF0ZXJpYWxzXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogNDc3NzcuNzgzXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMjYsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlNhbHQgXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMjAxOSxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjAxOVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyNTAsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlN1bmRyaWVzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTY5Myxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTY5M1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMjMsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlNhbHRlZCBmaXNoXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMzk5NSxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDk5LjM3NVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiU3VuZHJpZXM6IGZpc2ggaW4gYnVsayBhbmQgZ3JvY2VyaWVzXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogNDIxMS4zNzVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDIxMSxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiV29vZFwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDUwODMsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDc2MjQuNVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiA4MCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiTHVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMzE3Nzk1Nixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDc2Ni45MzRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMjEyLFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJCYXJrXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTA3Nixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTYxNFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTHVtYmVyXFwvVGltYmVyXFwvV29vZFwiLFxuXHRcdFx0XHRcdFwiYWdncmVnYXRlTm9ybWFsaXplZFZhbHVlXCI6IDE0MDA1LjQzNFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb21tb2RpdGllc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMTEsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkJpdHVtaW5vdXMgQ29hbFwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDUyMjQsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDUyMjRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNjUsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIklyb24gT3JlXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogNDAyNSxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDAyNVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAyMzAsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNva2VcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyODU0LFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyODU0XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDY1LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJJcm9uIE9yZVwiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDEzNTEsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEzNTFcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogMjI5LFxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb2FsXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTIzNixcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTIzNlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRnVlbCBhbmQgT3JlXCIsXG5cdFx0XHRcdFx0XCJhZ2dyZWdhdGVOb3JtYWxpemVkVmFsdWVcIjogMTQ2OTBcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29tbW9kaXRpZXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDEyNyxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU2hhZCwgSGVycmluZyAoZnJlc2gpXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogNDM0LFxuXHRcdFx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA0MzRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogNCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQXBwbGVzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTI5NzAsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI1OS40XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IDIxMCxcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiRmxheCBTZWVkc1wiLFxuXHRcdFx0XHRcdFx0XHRcInZhbHVlXCI6IDE2NDMsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ2LjAwNFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMDMsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlBvdGF0b2VzXCIsXG5cdFx0XHRcdFx0XHRcdFwidmFsdWVcIjogMTQ0MCxcblx0XHRcdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDMuMlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQWdyaWN1bHR1cmFsIFByb2R1Y3RzIChvdGhlciB0aGFuIGdyYWlucylcIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiA3ODIuNjA0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNvbW1vZGl0aWVzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxNjUsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIk1hbnVyZXNcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiA2NDgsXG5cdFx0XHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDY0OFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiT3RoZXIgQXJ0aWNsZXNcIixcblx0XHRcdFx0XHRcImFnZ3JlZ2F0ZU5vcm1hbGl6ZWRWYWx1ZVwiOiA2NDhcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiA0LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkFwcGxlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMTI5NzAsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjU5LjRcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTEsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQml0dW1pbm91cyBDb2FsXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA1MjI0LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDUyMjRcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTUsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQnJpY2tzXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA4MTAwMCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAzMjRcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjAsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQ2VtZW50XCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMzgyLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDI1OS44MTZcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMzEsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQ29ybiBtZWFsXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA3MjI1LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE4MC42MjVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNDYsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRmxvdXJcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDIzNjYyMCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMzE4OC43NlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiA1OCxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJIYXksIFN0cmF3XCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxNDcsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTQ3XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDY1LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIklyb24gT3JlXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA0MDI1LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQwMjVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNzQsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTGltZVwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogNzIzLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDcyM1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiA3NSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJMaW1lIGFuZCBDZW1lbnRcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE0MCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxNDBcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNzYsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTGltZXN0b25lXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA4NjYyLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE3Njg2LjkzNzhcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogODAsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTHVtYmVyXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzMTc3OTU2LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ3NjYuOTM0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDg0LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk1pbGwgb2ZmYWxcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDQ1NDIzLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ0NTEuNDU0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDg3LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk5haWxzXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzNjgyLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDE4NC4xXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDg5LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk9hdHNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDEzMjAwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDIxMS4yXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDk3LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlBsYXN0ZXJcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDY1OTksXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNjU5OVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxMDMsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiUG90YXRvZXNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE0NDAsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDMuMlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxMTAsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiUmFpbHNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDM5MDYsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTE3LjE4XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDExNCxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJSb3VnaCBzdG9uZSwgb3RoZXIgdGhhbiBsaW1lc3RvbmVcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE3NzUwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDIxNzQzLjc1XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDExNixcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJSeWVcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE3OTUsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNTAuMjZcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTIzLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlNhbHRlZCBmaXNoXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAzOTk1LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQ5OS4zNzVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMTI3LFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlNoYWQsIEhlcnJpbmcgKGZyZXNoKVwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogNDM0LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDQzNFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxNDUsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiVG9iYWNjb1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMjAwLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEwMFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxNDgsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiV2hlYXRcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDI0MDA3Myxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiA3MjAyLjE5XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDE2NSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJNYW51cmVzXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA2NDgsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNjQ4XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIwNSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb3JuXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAyNDQyODEsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogODU0OS44MzVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjEwLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkZsYXggU2VlZHNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE2NDMsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogNDYuMDA0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIxMSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJXb29kXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiA1MDgzLFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDc2MjQuNVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyMTIsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQmFya1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMTA3Nixcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAxNjE0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIyNixcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJTYWx0IFwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMjAxOSxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyMDE5XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIyOSxcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb2FsXCIsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiAxMjM2LFxuXHRcdFx0XHRcdFwibm9ybWFsaXplZFZhbHVlXCI6IDEyMzZcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMjMwLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkNva2VcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDI4NTQsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMjg1NFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyNTAsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiU3VuZHJpZXNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IDE2OTMsXG5cdFx0XHRcdFx0XCJub3JtYWxpemVkVmFsdWVcIjogMTY5M1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyODQsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiV2hpc2tleVwiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogMjY3NCxcblx0XHRcdFx0XHRcIm5vcm1hbGl6ZWRWYWx1ZVwiOiAyNTIuNjkzXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9XG5cdF1cbn1cbiJdfQ==
