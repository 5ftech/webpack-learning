webpackJsonp([0,1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	__webpack_require__(39);
	__webpack_require__(42);
	__webpack_require__(46);
	__webpack_require__(50);
	__webpack_require__(54);
	__webpack_require__(65);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(81);



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by brave on 17/4/13.
	 */
	__webpack_require__(3);

	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);

	__webpack_require__(11);

	__webpack_require__(25);

	__webpack_require__(26);
	__webpack_require__(33);
	//
	__webpack_require__(34);
	//
	__webpack_require__(35);
	__webpack_require__(37);
	__webpack_require__(38);

	window.console = window.console || (function () {
	        var c = {};
	        c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () {
	        };
	        return c;
	    })();

	$.fn.datetimepicker.dates['zh-CN'] = {
	    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
	    daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
	    daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
	    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
	    monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
	    today: "今天",
	    suffix: [],
	    meridiem: ["上午", "下午"]
	};

	$("body").css("font-family", "Microsoft YaHei");



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.12.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:17Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var deletedIds = [];

	var document = window.document;

	var slice = deletedIds.slice;

	var concat = deletedIds.concat;

	var push = deletedIds.push;

	var indexOf = deletedIds.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "1.12.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray || function( obj ) {
			return jQuery.type( obj ) === "array";
		},

		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		isPlainObject: function( obj ) {
			var key;

			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			try {

				// Not own constructor property must be Object
				if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
					return false;
				}
			} catch ( e ) {

				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}

			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if ( !support.ownFirst ) {
				for ( key in obj ) {
					return hasOwn.call( obj, key );
				}
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {

				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
				} )( data );
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1, IE<9
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			var len;

			if ( arr ) {
				if ( indexOf ) {
					return indexOf.call( arr, elem, i );
				}

				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

				for ( ; i < len; i++ ) {

					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}

			return -1;
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			while ( j < len ) {
				first[ i++ ] = second[ j++ ];
			}

			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if ( len !== len ) {
				while ( second[ j ] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var args, proxy, tmp;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: function() {
			return +( new Date() );
		},

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// init accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt( 0 ) === "<" &&
					selector.charAt( selector.length - 1 ) === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {

							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[ 2 ] ) {
								return rootjQuery.find( selector );
							}

							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof root.ready !== "undefined" ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;

			return this.filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[ 0 ], jQuery( elem ) );
			}

			// Locate the position of the desired element
			return jQuery.inArray(

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem, this );
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );

		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					ret = jQuery.uniqueSort( ret );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}
			}

			return this.pushStack( ret );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = true;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );

						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * Clean-up method for dom ready events
	 */
	function detach() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed );
			window.removeEventListener( "load", completed );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	}

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener ||
			window.event.type === "load" ||
			document.readyState === "complete" ) {

			detach();
			jQuery.ready();
		}
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE6-10
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );

			// If IE event model is used
			} else {

				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );

				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );

				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;

				try {
					top = window.frameElement == null && document.documentElement;
				} catch ( e ) {}

				if ( top && top.doScroll ) {
					( function doScrollCheck() {
						if ( !jQuery.isReady ) {

							try {

								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll( "left" );
							} catch ( e ) {
								return window.setTimeout( doScrollCheck, 50 );
							}

							// detach all dom ready events
							detach();

							// and execute any waiting functions
							jQuery.ready();
						}
					} )();
				}
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownFirst = i === "0";

	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;

	// Execute ASAP in case we need to set body.style.zoom
	jQuery( function() {

		// Minified: var a,b,c,d
		var val, div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Return for frameset docs that don't have a body
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		if ( typeof div.style.zoom !== "undefined" ) {

			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

			support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
			if ( val ) {

				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );
	} );


	( function() {
		var div = document.createElement( "div" );

		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch ( e ) {
			support.deleteExpando = false;
		}

		// Null elements to avoid leaks in IE.
		div = null;
	} )();
	var acceptData = function( elem ) {
		var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
			nodeType = +elem.nodeType || 1;

		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ?
			false :

			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
	};




	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {

			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );

			} else {
				data = undefined;
			}
		}

		return data;
	}

	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {

			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}

		return true;
	}

	function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !acceptData( elem ) ) {
			return;
		}

		var ret, thisCache,
			internalKey = jQuery.expando,

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
			data === undefined && typeof name === "string" ) {
			return;
		}

		if ( !id ) {

			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {

			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( typeof name === "string" ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	}

	function internalRemoveData( elem, name, pvt ) {
		if ( !acceptData( elem ) ) {
			return;
		}

		var thisCache, i,
			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split( " " );
						}
					}
				} else {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}

				i = name.length;
				while ( i-- ) {
					delete thisCache[ name[ i ] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}

		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );

		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		/* jshint eqeqeq: false */
		} else if ( support.deleteExpando || cache != cache.window ) {
			/* jshint eqeqeq: true */
			delete cache[ id ];

		// When all else fails, undefined
		} else {
			cache[ id ] = undefined;
		}
	}

	jQuery.extend( {
		cache: {},

		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,

			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},

		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},

		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},

		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},

		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},

		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );

					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					jQuery.data( this, key );
				} );
			}

			return arguments.length > 1 ?

				// Sets one value
				this.each( function() {
					jQuery.data( this, key, value );
				} ) :

				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
		},

		removeData: function( key ) {
			return this.each( function() {
				jQuery.removeData( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object,
		// or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );


	( function() {
		var shrinkWrapBlocksVal;

		support.shrinkWrapBlocks = function() {
			if ( shrinkWrapBlocksVal != null ) {
				return shrinkWrapBlocksVal;
			}

			// Will be changed later if needed.
			shrinkWrapBlocksVal = false;

			// Minified: var b,c,d
			var div, body, container;

			body = document.getElementsByTagName( "body" )[ 0 ];
			if ( !body || !body.style ) {

				// Test fired too early or in an unsupported environment, exit.
				return;
			}

			// Setup
			div = document.createElement( "div" );
			container = document.createElement( "div" );
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild( container ).appendChild( div );

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			if ( typeof div.style.zoom !== "undefined" ) {

				// Reset CSS: box-sizing; display; margin; border
				div.style.cssText =

					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;" +
					"padding:1px;width:1px;zoom:1";
				div.appendChild( document.createElement( "div" ) ).style.width = "5px";
				shrinkWrapBlocksVal = div.offsetWidth !== 3;
			}

			body.removeChild( container );

			return shrinkWrapBlocksVal;
		};

	} )();
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn(
						elems[ i ],
						key,
						raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );

	var rleadingWhitespace = ( /^\s+/ );

	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
			"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
			"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();

		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}


	( function() {
		var div = document.createElement( "div" ),
			fragment = document.createDocumentFragment(),
			input = document.createElement( "input" );

		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName( "tbody" ).length;

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone =
			document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild( input );
		support.appendChecked = input.checked;

		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild( div );

		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input = document.createElement( "input" );
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<9
		// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
		support.noCloneEvent = !!div.addEventListener;

		// Support: IE<9
		// Since attributes and properties are the same in IE,
		// cleanData must set properties to undefined rather than use removeAttribute
		div[ jQuery.expando ] = 1;
		support.attributes = !div.getAttribute( jQuery.expando );
	} )();


	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],

		// Support: IE8
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
	};

	// Support: IE8-IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
					undefined;

		if ( !found ) {
			for ( found = [], elems = context.childNodes || context;
				( elem = elems[ i ] ) != null;
				i++
			) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			jQuery._data(
				elem,
				"globalEval",
				!refElements || jQuery._data( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/,
		rtbody = /<tbody/i;

	function fixDefaultChecked( elem ) {
		if ( rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
								!tbody.childNodes.length ) {

								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}

				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	}


	( function() {
		var i, eventName,
			div = document.createElement( "div" );

		// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
		for ( i in { submit: true, change: true, focusin: true } ) {
			eventName = "on" + i;

			if ( !( support[ i ] = eventName in window ) ) {

				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute( eventName, "t" );
				support[ i ] = div.attributes[ eventName ].expando === false;
			}
		}

		// Null elements to avoid leaks in IE.
		div = null;
	} )();


	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" &&
						( !e || jQuery.event.triggered !== e.type ) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};

				// Add elem as a property of the handle fn to prevent a memory leak
				// with IE non-native events
				eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );

						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;

				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
					jQuery._data( cur, "handle" );

				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if (
					( !special._default ||
					 special._default.apply( eventPath.pop(), data ) === false
					) && acceptData( elem )
				) {

					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {

							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				/* jshint eqeqeq: false */
				for ( ; cur != this; cur = cur.parentNode || this ) {
					/* jshint eqeqeq: true */

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}

			// Support: Safari 6-8+
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
				"pageX pageY screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ?
						original.toElement :
						fromElement;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						try {
							this.focus();
							return false;
						} catch ( e ) {

							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// Guard for simulated events was moved to jQuery.event.stopPropagation function
					// since `originalEvent` should point to the original event for the
					// constancy with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {

			// This "if" is needed for plain objects
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;

			if ( elem.detachEvent ) {

				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event,
				// to properly expose it to GC
				if ( typeof elem[ name ] === "undefined" ) {
					elem[ name ] = null;
				}

				elem.detachEvent( name, handle );
			}
		};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: IE < 9, Android < 4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}

			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();

			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( !e || this.isSimulated ) {
				return;
			}

			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}

			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	// IE submit delegation
	if ( !support.submit ) {

		jQuery.event.special.submit = {
			setup: function() {

				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

							// Support: IE <=8
							// We use jQuery.prop instead of elem.form
							// to allow fixing the IE8 delegated submit issue (gh-2332)
							// by 3rd party polyfills/workarounds.
							jQuery.prop( elem, "form" ) :
							undefined;

					if ( form && !jQuery._data( form, "submit" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submitBubble = true;
						} );
						jQuery._data( form, "submit", true );
					}
				} );

				// return undefined since we don't need an event listener
			},

			postDispatch: function( event ) {

				// If form was submitted by the user, bubble the event up the tree
				if ( event._submitBubble ) {
					delete event._submitBubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event );
					}
				}
			},

			teardown: function() {

				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}

	// IE change delegation and checkbox/radio fix
	if ( !support.change ) {

		jQuery.event.special.change = {

			setup: function() {

				if ( rformElems.test( this.nodeName ) ) {

					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._justChanged = true;
							}
						} );
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._justChanged && !event.isTrigger ) {
								this._justChanged = false;
							}

							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event );
						} );
					}
					return false;
				}

				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;

					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event );
							}
						} );
						jQuery._data( elem, "change", true );
					}
				} );
			},

			handle: function( event ) {
				var elem = event.target;

				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger ||
					( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

					return event.handleObj.handler.apply( this, arguments );
				}
			},

			teardown: function() {
				jQuery.event.remove( this, "._change" );

				return !rformElems.test( this.nodeName );
			}
		};
	}

	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						jQuery._removeData( doc, fix );
					} else {
						jQuery._data( doc, fix, attaches );
					}
				}
			};
		} );
	}

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		},

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}

		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;

		if ( events ) {
			delete curData.handle;
			curData.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}

		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}

	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;

		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}

		nodeName = dest.nodeName.toLowerCase();

		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );

			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}

			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}

		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );

		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}

			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
				dest.innerHTML = src.innerHTML;
			}

		} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set

			dest.defaultChecked = dest.checked = src.checked;

			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}

		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;

		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval(
									( node.text || node.textContent || node.innerHTML || "" )
										.replace( rcleanScript, "" )
								);
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			elems = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = elems[ i ] ) != null; i++ ) {

			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );

			if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
				!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

				clone = elem.cloneNode( true );

			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}

			if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
					( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				// Fix all IE cloning issues
				for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[ i ] ) {
						fixCloneNodeIssues( node, destElements[ i ] );
					}
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
						cloneCopyEvent( node, destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			destElements = srcElements = node = null;

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems, /* internal */ forceAcceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				attributes = support.attributes,
				special = jQuery.event.special;

			for ( ; ( elem = elems[ i ] ) != null; i++ ) {
				if ( forceAcceptData || acceptData( elem ) ) {

					id = elem[ internalKey ];
					data = id && cache[ id ];

					if ( data ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {

							delete cache[ id ];

							// Support: IE<9
							// IE does not allow us to delete expando properties from nodes
							// IE creates expando attributes along with the property
							// IE does not have a removeAttribute function on Document nodes
							if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
								elem.removeAttribute( internalKey );

							// Webkit & Blink performance suffers when deleting properties
							// from DOM nodes, so set to undefined instead
							// https://code.google.com/p/chromium/issues/detail?id=378607
							} else {
								elem[ internalKey ] = undefined;
							}

							deletedIds.push( id );
						}
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append(
						( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
					);
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {

				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}

				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}

				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {

							// Remove element nodes and prevent memory leaks
							elem = this[ i ] || {};
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
			reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		div.style.cssText = "float:left;opacity:.5";

		// Support: IE<9
		// Make sure that element opacity exists (as opposed to filter)
		support.opacity = div.style.opacity === "0.5";

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!div.style.cssFloat;

		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container = document.createElement( "div" );
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		div.innerHTML = "";
		container.appendChild( div );

		// Support: Firefox<29, Android 2.3
		// Vendor-prefix box-sizing
		support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
			div.style.WebkitBoxSizing === "";

		jQuery.extend( support, {
			reliableHiddenOffsets: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableHiddenOffsetsVal;
			},

			boxSizingReliable: function() {

				// We're checking for pixelPositionVal here instead of boxSizingReliableVal
				// since that compresses better and they're computed together anyway.
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},

			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},

			pixelPosition: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},

			reliableMarginRight: function() {

				// Support: Android 2.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginRightVal;
			},

			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			}
		} );

		function computeStyleTests() {
			var contents, divStyle,
				documentElement = document.documentElement;

			// Setup
			documentElement.appendChild( container );

			div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";

			// Support: IE<9
			// Assume reasonable values in the absence of getComputedStyle
			pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
			pixelMarginRightVal = reliableMarginRightVal = true;

			// Check for getComputedStyle so that this code is not run in IE<9.
			if ( window.getComputedStyle ) {
				divStyle = window.getComputedStyle( div );
				pixelPositionVal = ( divStyle || {} ).top !== "1%";
				reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
				boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

				// Support: Android 4.0 - 4.3 only
				// Some styles come back with percentage values, even though they shouldn't
				div.style.marginRight = "50%";
				pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

				// Support: Android 2.3 only
				// Div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				contents = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				contents.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				contents.style.marginRight = contents.style.width = "0";
				div.style.width = "1px";

				reliableMarginRightVal =
					!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

				div.removeChild( contents );
			}

			// Support: IE6-8
			// First check that getClientRects works as expected
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.style.display = "none";
			reliableHiddenOffsetsVal = div.getClientRects().length === 0;
			if ( reliableHiddenOffsetsVal ) {
				div.style.display = "";
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				div.childNodes[ 0 ].style.borderCollapse = "separate";
				contents = div.getElementsByTagName( "td" );
				contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				if ( reliableHiddenOffsetsVal ) {
					contents[ 0 ].style.display = "";
					contents[ 1 ].style.display = "none";
					reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				}
			}

			// Teardown
			documentElement.removeChild( container );
		}

	} )();


	var getStyles, curCSS,
		rposition = /^(top|right|bottom|left)$/;

	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

		curCSS = function( elem, name, computed ) {
			var width, minWidth, maxWidth, ret,
				style = elem.style;

			computed = computed || getStyles( elem );

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

			// Support: Opera 12.1x only
			// Fall back to style even without computed
			// computed is undefined for elems on document fragments
			if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			if ( computed ) {

				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value"
				// instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values,
				// but width seems to be reliably pixels
				// this is against the CSSOM draft spec:
				// http://dev.w3.org/csswg/cssom/#resolved-values
				if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "";
		};
	} else if ( documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};

		curCSS = function( elem, name, computed ) {
			var left, rs, rsLeft, ret,
				style = elem.style;

			computed = computed || getStyles( elem );
			ret = computed ? computed[ name ] : undefined;

			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are
			// proportional to the parent element instead
			// and we can't measure the parent instead because it
			// might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;

				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "" || "auto";
		};
	}




	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

			ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/i,

		// swappable if display is none or starts with table except
		// "table", "table-cell", or "table-caption"
		// see here for display values:
		// https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;


	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] =
						jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
				}
			} else {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = support.boxSizing &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {

			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set. See: #7116
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight
				// (for every problematic property) identical functions
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						style[ name ] = value;
					} catch ( e ) {}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var num, val, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						support.boxSizing &&
							jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	} );

	if ( !support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {

				// IE uses filters for opacity
				return ropacity.test( ( computed && elem.currentStyle ?
					elem.currentStyle.filter :
					elem.style.filter ) || "" ) ?
						( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
						computed ? "1" : "";
			},

			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";

				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;

				// if setting opacity to 1, and no other filters exist -
				// attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {

					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );

					// if there is no filter style applied in a css rule
					// or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}

				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}

	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return (
					parseFloat( curCSS( elem, "marginLeft" ) ) ||

					// Support: IE<=11+
					// Running getBoundingClientRect on a disconnected node in IE throws an error
					// Support: IE8 only
					// getClientRects() errors on disconnected elems
					( jQuery.contains( elem.ownerDocument, elem ) ?
						elem.getBoundingClientRect().left -
							swap( elem, { marginLeft: 0 }, function() {
								return elem.getBoundingClientRect().left;
							} ) :
						0
					)
				) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// we're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = jQuery._data( elem, "fxshow" );

		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !support.shrinkWrapBlocks() ) {
				anim.always( function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				} );
			}
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data( elem, "fxshow", {} );
			}

			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// enable finishing flag on private data
				data.finish = true;

				// empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var a,
			input = document.createElement( "input" ),
			div = document.createElement( "div" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		// Setup
		div = document.createElement( "div" );
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];

		// Support: Windows Web Apps (WWA)
		// `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "checkbox" );
		div.appendChild( input );

		a = div.getElementsByTagName( "a" )[ 0 ];

		// First batch of tests.
		a.style.cssText = "top:1px";

		// Test setAttribute on camelCase class.
		// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test( a.getAttribute( "style" ) );

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute( "href" ) === "/a";

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;

		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement( "form" ).enctype;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement( "input" );
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";

		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";
	} )();


	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if (
						hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// handle most common string cases
						ret.replace( rreturn, "" ) :

						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled :
									option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;

							} catch ( _ ) {

								// Will be executed only in IE6
								option.scrollHeight;
							}

						} else {
							option.selected = false;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}

					return options;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {

						// Setting the type on a radio button after the value resets the value in IE8-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
							elem[ propName ] = false;

						// Support: IE<9
						// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						}

					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}

					elem.removeAttribute( getSetAttribute ? name : propName );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

			} else {

				// Support: IE<9
				// Use defaultChecked and defaultSelected for oldIE
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			attrHandle[ name ] = function( elem, name, isXML ) {
				var ret, handle;
				if ( !isXML ) {

					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[ name ];
					attrHandle[ name ] = ret;
					ret = getter( elem, name, isXML ) != null ?
						name.toLowerCase() :
						null;
					attrHandle[ name ] = handle;
				}
				return ret;
			};
		} else {
			attrHandle[ name ] = function( elem, name, isXML ) {
				if ( !isXML ) {
					return elem[ jQuery.camelCase( "default-" + name ) ] ?
						name.toLowerCase() :
						null;
				}
			};
		}
	} );

	// fix oldIE attroperties
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {

					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {

					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}

	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {

		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function( elem, value, name ) {

				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						( ret = elem.ownerDocument.createAttribute( name ) )
					);
				}

				ret.value = value += "";

				// Break association with cloned elements by also using setAttribute (#9646)
				if ( name === "value" || value === elem.getAttribute( name ) ) {
					return value;
				}
			}
		};

		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords =
			function( elem, name, isXML ) {
				var ret;
				if ( !isXML ) {
					return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
						ret.value :
						null;
				}
			};

		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				if ( ret && ret.specified ) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};

		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};

		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each( [ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			};
		} );
	}

	if ( !support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {

				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case sensitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}




	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each( function() {

				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch ( e ) {}
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !support.hrefNormalized ) {

		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each( [ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		} );
	}

	// Support: Safari, IE9+
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;

				if ( parent ) {
					parent.selectedIndex;

					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );

	// IE6/7 call enctype encoding
	if ( !support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return jQuery.attr( elem, "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// store className if set
						jQuery._data( this, "__className__", className );
					}

					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					jQuery.attr( this, "class",
						className || value === false ?
						"" :
						jQuery._data( this, "__className__" ) || ""
					);
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	// Return jQuery for attributes-only inclusion


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );


	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

	jQuery.parseJSON = function( data ) {

		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {

			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse( data + "" );
		}

		var requireNonComma,
			depth = null,
			str = jQuery.trim( data + "" );

		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

			// Force termination if we see a misplaced comma
			if ( requireNonComma && comma ) {
				depth = 0;
			}

			// Perform no more replacements after returning to outermost depth
			if ( depth === 0 ) {
				return token;
			}

			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;

			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;

			// Remove this token
			return "";
		} ) ) ?
			( Function( "return " + str ) )() :
			jQuery.error( "Invalid JSON: " + data );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new window.DOMParser();
				xml = tmp.parseFromString( data, "text/xml" );
			} else { // IE
				xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch ( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,

		// IE leaves an \r character at EOL
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Document location
		ajaxLocation = location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType.charAt( 0 ) === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var

				// Cross-domain detection vars
				parts,

				// Loop variable
				i,

				// URL without anti-cache param
				cacheURL,

				// Response headers as string
				responseHeadersString,

				// timeout handle
				timeoutTimer,

				// To know if global events are to be dispatched
				fireGlobals,

				transport,

				// Response headers
				responseHeaders,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" )
				.replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	function getDisplay( elem ) {
		return elem.style && elem.style.display || jQuery.css( elem, "display" );
	}

	function filterHidden( elem ) {

		// Disconnected elements are considered hidden
		if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
			return true;
		}
		while ( elem && elem.nodeType === 1 ) {
			if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
				return true;
			}
			elem = elem.parentNode;
		}
		return false;
	}

	jQuery.expr.filters.hidden = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return support.reliableHiddenOffsets() ?
			( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
				!elem.getClientRects().length ) :
				filterHidden( elem );
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

		// Support: IE6-IE8
		function() {

			// XHR cannot access local files, always use ActiveX for that case
			if ( this.isLocal ) {
				return createActiveXHR();
			}

			// Support: IE 9-11
			// IE seems to error on cross-domain PATCH requests when ActiveX XHR
			// is used. In IE 9+ always use the native XHR.
			// Note: this condition won't catch Edge as it doesn't define
			// document.documentMode but it also doesn't support ActiveX so it won't
			// reach this code.
			if ( document.documentMode > 8 ) {
				return createStandardXHR();
			}

			// Support: IE<9
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
				createStandardXHR() || createActiveXHR();
		} :

		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		} );
	}

	// Determine support properties
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = support.ajax = !!xhrSupported;

	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {

		jQuery.ajaxTransport( function( options ) {

			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !options.crossDomain || support.cors ) {

				var callback;

				return {
					send: function( headers, complete ) {
						var i,
							xhr = options.xhr(),
							id = ++xhrId;

						// Open the socket
						xhr.open(
							options.type,
							options.url,
							options.async,
							options.username,
							options.password
						);

						// Apply custom fields if provided
						if ( options.xhrFields ) {
							for ( i in options.xhrFields ) {
								xhr[ i ] = options.xhrFields[ i ];
							}
						}

						// Override mime type if needed
						if ( options.mimeType && xhr.overrideMimeType ) {
							xhr.overrideMimeType( options.mimeType );
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
							headers[ "X-Requested-With" ] = "XMLHttpRequest";
						}

						// Set headers
						for ( i in headers ) {

							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if ( headers[ i ] !== undefined ) {
								xhr.setRequestHeader( i, headers[ i ] + "" );
							}
						}

						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( options.hasContent && options.data ) || null );

						// Listener
						callback = function( _, isAbort ) {
							var status, statusText, responses;

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Clean up
								delete xhrCallbacks[ id ];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;

								// Abort manually if needed
								if ( isAbort ) {
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;

									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch ( e ) {

										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && options.isLocal && !options.crossDomain ) {
										status = responses.text ? 200 : 404;

									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}

							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, xhr.getAllResponseHeaders() );
							}
						};

						// Do send the request
						// `xhr.send` may raise an exception, but it will be
						// handled in jQuery.ajax (so no try/catch here)
						if ( !options.async ) {

							// If we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {

							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							window.setTimeout( callback );
						} else {

							// Register the callback, but delay it in case `xhr.send` throws
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
						}
					},

					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		} );
	}

	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	}

	function createActiveXHR() {
		try {
			return new window.ActiveXObject( "Microsoft.XMLHTTP" );
		} catch ( e ) {}
	}




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {

			var script,
				head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

			return {

				send: function( _, callback ) {

					script = document.createElement( "script" );

					script.async = true;

					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}

					script.src = s.url;

					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {

						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;

							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}

							// Dereference the script
							script = null;

							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};

					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},

				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off, url.length ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};





	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

			// need to be able to calculate position if either top or left
			// is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );
			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[ 0 ],
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ( typeof elem.getBoundingClientRect !== "undefined" ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
				left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = /Y/.test( prop );

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? ( prop in win ) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only,
						// but there is currently no good, small way to fix it.
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/*yanick for gis*/
	var config = __webpack_require__(4);
	var source = config.source;
	var abtest = "20170322";
	var gistf = "gis";
	var gispu = "";
	var gispf = "gis";
	var gissu = window.location;
	var gissf = document.referrer;
	var gisof = "";
	var gisop = "";
	var gisops = 1;
	var gisot = 1;
	var gisd = new Date();
	var giscolor = "";
	if (navigator.appName == "Netscape") {
	    giscolor = screen.pixelDepth
	} else {
	    giscolor = screen.colorDepth
	}
	try {
	    gistf = top.document.referrer
	} catch (e) {
	}
	try {
	    gispu = window.parent.location
	} catch (e) {
	}
	try {
	    gispf = window.parent.document.referrer
	} catch (e) {
	}
	try {
	    gisops = document.cookie.match(new RegExp("(^| )gis_ok_pages=([^;]*)(;|$)"));
	    gisops = (gisops == null) ? 1 : (parseInt(unescape((gisops)[2])) + 1);
	    var gisoe = new Date();
	    gisoe.setTime(gisoe.getTime() + 60 * 60 * 1000);
	    document.cookie = "gis_ok_pages=" + gisops + ";path=/;expires=" + gisoe.toGMTString();
	    gisot = document.cookie.match(new RegExp("(^| )gis_ok_times=([^;]*)(;|$)"));
	    if (gisot == null) {
	        gisot = 1
	    } else {
	        gisot = parseInt(unescape((gisot)[2]));
	        gisot = (gisops == 1) ? (gisot + 1) : (gisot)
	    }
	    gisoe.setTime(gisoe.getTime() + 365 * 24 * 60 * 60 * 1000);
	    document.cookie = "gis_ok_times=" + gisot + ";path=/;expires=" + gisoe.toGMTString()
	} catch (e) {
	}
	try {
	    if (document.cookie == "") {
	        gisops = -1;
	        gisot = -1
	    }
	} catch (e) {
	}
	gisof = gissf;
	if (gispf !== "gis") {
	    gisof = gispf
	}
	if (gistf !== "gis") {
	    gisof = gistf
	}
	gisop = gispu;
	try {
	    lainframe
	} catch (e) {
	    gisop = gissu
	}
	gissrc = config.host + config.appName + '/webGo?source=' + source + '&abtest=' + abtest + '&tpages=' + gisops + '&ttimes=' + gisot + '&tzone=' + (0 - gisd.getTimezoneOffset() / 60) + '&tcolor=' + giscolor + '&sSize=' + screen.width + 'x' + screen.height + '&referrer=' + escape(gisof) + '&vpage=' + escape(gisop) + '&vvtime=' + gisd.getTime();
	setTimeout('gisimg = new Image;gisimg.src=gissrc;', 0);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Created by brave on 17/3/28.
	 */

	var env = ("uat");
	var mobileUploadUrl = ("https://hms-uat.test-cignacmb.com/gis_server/uattouw/opr/touw/M");
	var cancelTestUrl = ("https://t.ihaola.com.cn/partners/zhaoshangdm-a1239dcd-4605-2a18-6a51-b39cf339e1ec/azzs/launching.html?openid=");
	var envHost = ("https://hms-uat.test-cignacmb.com");
	var companyName = '招商信诺醇享人生个人高端医疗保险';
	var source = 'touw';
	var serverUrl = '/gis_server';
	var lifeTimeInsurancePeriod = 100;//终生保险起期间
	var type = '401';
	var object = {
	    type: type,
	    source: source,
	    companyName: companyName,
	    lifeTimeInsurancePeriod: lifeTimeInsurancePeriod,
	    companyShortName: '招商信诺醇享人生个人高端医疗保险',
	    envHost: envHost,
	    env: env,
	    serverUrl: serverUrl,
	    cancelTestUrl: cancelTestUrl,//癌症检查url
	    host: '',//项目主机
	    uploadHost: mobileUploadUrl,//上传文件的主机ip及相对路径
	    loginCodeUrl: serverUrl + '/' + env + '/getAuthImage',//上传文件的主机ip及相对路径
	    payUrl: 'http://esales-old.test-cignacmb.com/payment-uat1/index.xhtml',//上传文件的主机ip及相对路径
	    appName: serverUrl + '/' + env + '/op/' + source,//项目接口appName
	    payAppName: serverUrl + '/' + env,//用于支付成功回调页获取列表appName
	    uploadFileAppName: serverUrl + '/' + env + '/file/' + source,//项目接口appName
	    notifyConfirmUrl: serverUrl + '/' + env + '/notifyConfirm?source=' + source,//项目下载投保确认书路径
	    downLoadBodyCheckUrl: serverUrl + '/' + env + '/downLoadBodyCheck?source=' + source,//项目下载投保确认书路径
	    downloadConfirmUrl: serverUrl + '/' + env + '/downloadConfirm?source=' + source,//项目下载投保确认书路径
	    previewDownloadFileUrl: serverUrl + '/' + env + '/downLoadBodyCheck?source=' + source,//项目下载投保确认书路径
	    notLoginRedirectUrl: serverUrl + '/' + env + '/opr/' + source + '/userIdentification',//项目下载投保确认书路径
	    token: 'kohler-mKeyTest'
	};
	if (env == 'uat' || env == 'uat2') {
	    object.payUrl = 'http://esales-old.test-cignacmb.com/payment-uat2/index.xhtml'
	}
	if (env == 'prd') {
	    object.notLoginRedirectUrl = serverUrl + '/' + env + '/opr/' + source + '/userIdentification';
	}
	module.exports = object;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	built in 2017-7-11:11:27 version 2.2.9 by 司徒正美
	https://github.com/RubyLouvre/avalon/tree/2.2.9
	修复ms-for循环生成option与ms-deplex的联动问题
	解决 IE8 html 属性中的中文被转成 unicode 字符串问题 
	修复多个计算属性不更新的问题

	*/(function (global, factory) {
	     true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.avalon = factory();
	})(this, function () {
	    'use strict';

	    var win = typeof window === 'object' ? window : typeof global === 'object' ? global : {};

	    var inBrowser = !!win.location && win.navigator;
	    /* istanbul ignore if  */

	    var document$1 = inBrowser ? win.document : {
	        createElement: Object,
	        createElementNS: Object,
	        documentElement: 'xx',
	        contains: Boolean
	    };
	    var root = inBrowser ? document$1.documentElement : {
	        outerHTML: 'x'
	    };

	    var versions = {
	        objectobject: 7, //IE7-8
	        objectundefined: 6, //IE6
	        undefinedfunction: NaN, // other modern browsers
	        undefinedobject: NaN };
	    /* istanbul ignore next  */
	    var msie$1 = document$1.documentMode || versions[typeof document$1.all + typeof XMLHttpRequest];

	    var modern = /NaN|undefined/.test(msie$1) || msie$1 > 8;

	    /*
	     https://github.com/rsms/js-lru
	     entry             entry             entry             entry        
	     ______            ______            ______            ______       
	     | head |.newer => |      |.newer => |      |.newer => | tail |      
	     |  A   |          |  B   |          |  C   |          |  D   |      
	     |______| <= older.|______| <= older.|______| <= older.|______|      
	     
	     removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added 
	     */
	    function Cache(maxLength) {
	        // 标识当前缓存数组的大小
	        this.size = 0;
	        // 标识缓存数组能达到的最大长度
	        this.limit = maxLength;
	        //  head（最不常用的项），tail（最常用的项）全部初始化为undefined

	        this.head = this.tail = void 0;
	        this._keymap = {};
	    }

	    Cache.prototype = {
	        put: function put(key, value) {
	            var entry = {
	                key: key,
	                value: value
	            };
	            this._keymap[key] = entry;
	            if (this.tail) {
	                // 如果存在tail（缓存数组的长度不为0），将tail指向新的 entry
	                this.tail.newer = entry;
	                entry.older = this.tail;
	            } else {
	                // 如果缓存数组的长度为0，将head指向新的entry
	                this.head = entry;
	            }
	            this.tail = entry;
	            // 如果缓存数组达到上限，则先删除 head 指向的缓存对象
	            /* istanbul ignore if */
	            if (this.size === this.limit) {
	                this.shift();
	            } else {
	                this.size++;
	            }
	            return value;
	        },
	        shift: function shift() {
	            /* istanbul ignore next */
	            var entry = this.head;
	            /* istanbul ignore if */
	            if (entry) {
	                // 删除 head ，并改变指向
	                this.head = this.head.newer;
	                // 同步更新 _keymap 里面的属性值
	                this.head.older = entry.newer = entry.older = this._keymap[entry.key] = void 0;
	                delete this._keymap[entry.key]; //#1029
	                // 同步更新 缓存数组的长度
	                this.size--;
	            }
	        },
	        get: function get(key) {
	            var entry = this._keymap[key];
	            // 如果查找不到含有`key`这个属性的缓存对象
	            if (entry === void 0) return;
	            // 如果查找到的缓存对象已经是 tail (最近使用过的)
	            /* istanbul ignore if */
	            if (entry === this.tail) {
	                return entry.value;
	            }
	            // HEAD--------------TAIL
	            //   <.older   .newer>
	            //  <--- add direction --
	            //   A  B  C  <D>  E
	            if (entry.newer) {
	                // 处理 newer 指向
	                if (entry === this.head) {
	                    // 如果查找到的缓存对象是 head (最近最少使用过的)
	                    // 则将 head 指向原 head 的 newer 所指向的缓存对象
	                    this.head = entry.newer;
	                }
	                // 将所查找的缓存对象的下一级的 older 指向所查找的缓存对象的older所指向的值
	                // 例如：A B C D E
	                // 如果查找到的是D，那么将E指向C，不再指向D
	                entry.newer.older = entry.older; // C <-- E.
	            }
	            if (entry.older) {
	                // 处理 older 指向
	                // 如果查找到的是D，那么C指向E，不再指向D
	                entry.older.newer = entry.newer; // C. --> E
	            }
	            // 处理所查找到的对象的 newer 以及 older 指向
	            entry.newer = void 0; // D --x
	            // older指向之前使用过的变量，即D指向E
	            entry.older = this.tail; // D. --> E
	            if (this.tail) {
	                // 将E的newer指向D
	                this.tail.newer = entry; // E. <-- D
	            }
	            // 改变 tail 为D 
	            this.tail = entry;
	            return entry.value;
	        }
	    };

	    var delayCompile = {};

	    var directives = {};

	    function directive(name, opts) {
	        if (directives[name]) {
	            avalon.warn(name, 'directive have defined! ');
	        }
	        directives[name] = opts;
	        if (!opts.update) {
	            opts.update = function () {};
	        }
	        if (opts.delay) {
	            delayCompile[name] = 1;
	        }
	        return opts;
	    }

	    function delayCompileNodes(dirs) {
	        for (var i in delayCompile) {
	            if ('ms-' + i in dirs) {
	                return true;
	            }
	        }
	    }

	    var window$1 = win;
	    function avalon(el) {
	        return new avalon.init(el);
	    }

	    avalon.init = function (el) {
	        this[0] = this.element = el;
	    };

	    avalon.fn = avalon.prototype = avalon.init.prototype;

	    function shadowCopy(destination, source) {
	        for (var property in source) {
	            destination[property] = source[property];
	        }
	        return destination;
	    }
	    var rword = /[^, ]+/g;
	    var rnowhite = /\S+/g; //存在非空字符
	    var platform = {}; //用于放置平台差异的方法与属性


	    function oneObject(array, val) {
	        if (typeof array === 'string') {
	            array = array.match(rword) || [];
	        }
	        var result = {},
	            value = val !== void 0 ? val : 1;
	        for (var i = 0, n = array.length; i < n; i++) {
	            result[array[i]] = value;
	        }
	        return result;
	    }

	    var op = Object.prototype;
	    function quote(str) {
	        return avalon._quote(str);
	    }
	    var inspect = op.toString;
	    var ohasOwn = op.hasOwnProperty;
	    var ap = Array.prototype;

	    var hasConsole = typeof console === 'object';
	    avalon.config = { debug: true };
	    function log() {
	        if (hasConsole && avalon.config.debug) {
	            Function.apply.call(console.log, console, arguments);
	        }
	    }
	    function warn() {
	        if (hasConsole && avalon.config.debug) {
	            var method = console.warn || console.log;
	            // http://qiang106.iteye.com/blog/1721425
	            Function.apply.call(method, console, arguments);
	        }
	    }
	    function error(str, e) {
	        throw (e || Error)(str);
	    }
	    function noop() {}
	    function isObject(a) {
	        return a !== null && typeof a === 'object';
	    }

	    function range(start, end, step) {
	        // 用于生成整数数组
	        step || (step = 1);
	        if (end == null) {
	            end = start || 0;
	            start = 0;
	        }
	        var index = -1,
	            length = Math.max(0, Math.ceil((end - start) / step)),
	            result = new Array(length);
	        while (++index < length) {
	            result[index] = start;
	            start += step;
	        }
	        return result;
	    }

	    var rhyphen = /([a-z\d])([A-Z]+)/g;
	    function hyphen(target) {
	        //转换为连字符线风格
	        return target.replace(rhyphen, '$1-$2').toLowerCase();
	    }

	    var rcamelize = /[-_][^-_]/g;
	    function camelize(target) {
	        //提前判断，提高getStyle等的效率
	        if (!target || target.indexOf('-') < 0 && target.indexOf('_') < 0) {
	            return target;
	        }
	        //转换为驼峰风格
	        return target.replace(rcamelize, function (match) {
	            return match.charAt(1).toUpperCase();
	        });
	    }

	    var _slice = ap.slice;
	    function slice(nodes, start, end) {
	        return _slice.call(nodes, start, end);
	    }

	    var rhashcode = /\d\.\d{4}/;
	    //生成UUID http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
	    function makeHashCode(prefix) {
	        /* istanbul ignore next*/
	        prefix = prefix || 'avalon';
	        /* istanbul ignore next*/
	        return String(Math.random() + Math.random()).replace(rhashcode, prefix);
	    }
	    //生成事件回调的UUID(用户通过ms-on指令)
	    function getLongID(fn) {
	        /* istanbul ignore next */
	        return fn.uuid || (fn.uuid = makeHashCode('e'));
	    }
	    var UUID = 1;
	    //生成事件回调的UUID(用户通过avalon.bind)
	    function getShortID(fn) {
	        /* istanbul ignore next */
	        return fn.uuid || (fn.uuid = '_' + ++UUID);
	    }

	    var rescape = /[-.*+?^${}()|[\]\/\\]/g;
	    function escapeRegExp(target) {
	        //http://stevenlevithan.com/regex/xregexp/
	        //将字符串安全格式化为正则表达式的源码
	        return (target + '').replace(rescape, '\\$&');
	    }

	    var eventHooks = {};
	    var eventListeners = {};
	    var validators = {};
	    var cssHooks = {};

	    window$1.avalon = avalon;

	    function createFragment() {
	        /* istanbul ignore next  */
	        return document$1.createDocumentFragment();
	    }

	    var rentities = /&[a-z0-9#]{2,10};/;
	    var temp = document$1.createElement('div');
	    shadowCopy(avalon, {
	        Array: {
	            merge: function merge(target, other) {
	                //合并两个数组 avalon2新增
	                target.push.apply(target, other);
	            },
	            ensure: function ensure(target, item) {
	                //只有当前数组不存在此元素时只添加它
	                if (target.indexOf(item) === -1) {
	                    return target.push(item);
	                }
	            },
	            removeAt: function removeAt(target, index) {
	                //移除数组中指定位置的元素，返回布尔表示成功与否
	                return !!target.splice(index, 1).length;
	            },
	            remove: function remove(target, item) {
	                //移除数组中第一个匹配传参的那个元素，返回布尔表示成功与否
	                var index = target.indexOf(item);
	                if (~index) return avalon.Array.removeAt(target, index);
	                return false;
	            }
	        },
	        evaluatorPool: new Cache(888),
	        parsers: {
	            number: function number(a) {
	                return a === '' ? '' : parseFloat(a) || 0;
	            },
	            string: function string(a) {
	                return a === null || a === void 0 ? '' : a + '';
	            },
	            "boolean": function boolean(a) {
	                if (a === '') return a;
	                return a === 'true' || a === '1';
	            }
	        },
	        _decode: function _decode(str) {
	            if (rentities.test(str)) {
	                temp.innerHTML = str;
	                return temp.innerText || temp.textContent;
	            }
	            return str;
	        }
	    });

	    //============== config ============
	    function config(settings) {
	        for (var p in settings) {
	            var val = settings[p];
	            if (typeof config.plugins[p] === 'function') {
	                config.plugins[p](val);
	            } else {
	                config[p] = val;
	            }
	        }
	        return this;
	    }

	    var plugins = {
	        interpolate: function interpolate(array) {
	            var openTag = array[0];
	            var closeTag = array[1];
	            if (openTag === closeTag) {
	                throw new SyntaxError('interpolate openTag cannot equal to closeTag');
	            }
	            var str = openTag + 'test' + closeTag;

	            if (/[<>]/.test(str)) {
	                throw new SyntaxError('interpolate cannot contains "<" or ">"');
	            }

	            config.openTag = openTag;
	            config.closeTag = closeTag;
	            var o = escapeRegExp(openTag);
	            var c = escapeRegExp(closeTag);

	            config.rtext = new RegExp(o + '(.+?)' + c, 'g');
	            config.rexpr = new RegExp(o + '([\\s\\S]*)' + c);
	        }
	    };
	    function createAnchor(nodeValue) {
	        return document$1.createComment(nodeValue);
	    }
	    config.plugins = plugins;
	    config({
	        interpolate: ['{{', '}}'],
	        debug: true
	    });
	    //============  config ============

	    shadowCopy(avalon, {
	        shadowCopy: shadowCopy,

	        oneObject: oneObject,
	        inspect: inspect,
	        ohasOwn: ohasOwn,
	        rword: rword,
	        version: "2.2.9",
	        vmodels: {},

	        directives: directives,
	        directive: directive,

	        eventHooks: eventHooks,
	        eventListeners: eventListeners,
	        validators: validators,
	        cssHooks: cssHooks,

	        log: log,
	        noop: noop,
	        warn: warn,
	        error: error,
	        config: config,

	        modern: modern,
	        msie: msie$1,
	        root: root,
	        document: document$1,
	        window: window$1,
	        inBrowser: inBrowser,

	        isObject: isObject,
	        range: range,
	        slice: slice,
	        hyphen: hyphen,
	        camelize: camelize,
	        escapeRegExp: escapeRegExp,
	        quote: quote,

	        makeHashCode: makeHashCode

	    });

	    /**
	     * 此模块用于修复语言的底层缺陷
	     */
	    function isNative(fn) {
	        return (/\[native code\]/.test(fn)
	        );
	    }

	    /* istanbul ignore if*/
	    if (!isNative('司徒正美'.trim)) {
	        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	        String.prototype.trim = function () {
	            return this.replace(rtrim, '');
	        };
	    }
	    if (!Object.create) {
	        Object.create = function () {
	            function F() {}

	            return function (o) {
	                if (arguments.length != 1) {
	                    throw new Error('Object.create implementation only accepts one parameter.');
	                }
	                F.prototype = o;
	                return new F();
	            };
	        }();
	    }
	    var hasDontEnumBug = !{
	        'toString': null
	    }.propertyIsEnumerable('toString');
	    var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
	    var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
	    var dontEnumsLength = dontEnums.length;
	    /* istanbul ignore if*/
	    if (!isNative(Object.keys)) {
	        Object.keys = function (object) {
	            //ecma262v5 15.2.3.14
	            var theKeys = [];
	            var skipProto = hasProtoEnumBug && typeof object === 'function';
	            if (typeof object === 'string' || object && object.callee) {
	                for (var i = 0; i < object.length; ++i) {
	                    theKeys.push(String(i));
	                }
	            } else {
	                for (var name in object) {
	                    if (!(skipProto && name === 'prototype') && ohasOwn.call(object, name)) {
	                        theKeys.push(String(name));
	                    }
	                }
	            }

	            if (hasDontEnumBug) {
	                var ctor = object.constructor,
	                    skipConstructor = ctor && ctor.prototype === object;
	                for (var j = 0; j < dontEnumsLength; j++) {
	                    var dontEnum = dontEnums[j];
	                    if (!(skipConstructor && dontEnum === 'constructor') && ohasOwn.call(object, dontEnum)) {
	                        theKeys.push(dontEnum);
	                    }
	                }
	            }
	            return theKeys;
	        };
	    }
	    /* istanbul ignore if*/
	    if (!isNative(Array.isArray)) {
	        Array.isArray = function (a) {
	            return Object.prototype.toString.call(a) === '[object Array]';
	        };
	    }

	    /* istanbul ignore if*/
	    if (!isNative(isNative.bind)) {
	        /* istanbul ignore next*/
	        Function.prototype.bind = function (scope) {
	            if (arguments.length < 2 && scope === void 0) return this;
	            var fn = this,
	                argv = arguments;
	            return function () {
	                var args = [],
	                    i;
	                for (i = 1; i < argv.length; i++) {
	                    args.push(argv[i]);
	                }for (i = 0; i < arguments.length; i++) {
	                    args.push(arguments[i]);
	                }return fn.apply(scope, args);
	            };
	        };
	    }
	    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
	    /**
	     * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
	     * on host objects like NamedNodeMap, NodeList, and HTMLCollection
	     * (technically, since host objects have been implementation-dependent,
	     * at least before ES6, IE hasn't needed to work this way).
	     * Also works on strings, fixes IE < 9 to allow an explicit undefined
	     * for the 2nd argument (as in Firefox), and prevents errors when
	     * called on other DOM objects.
	     */

	    try {
	        // Can't be used with DOM elements in IE < 9
	        _slice.call(avalon.document.documentElement);
	    } catch (e) {
	        // Fails in IE < 9
	        // This will work for genuine arrays, array-like objects,
	        // NamedNodeMap (attributes, entities, notations),
	        // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
	        // and will not fail on other DOM objects (as do DOM elements in IE < 9)
	        /* istanbul ignore next*/
	        ap.slice = function (begin, end) {
	            // IE < 9 gets unhappy with an undefined end argument
	            end = typeof end !== 'undefined' ? end : this.length;

	            // For native Array objects, we use the native slice function
	            if (Array.isArray(this)) {
	                return _slice.call(this, begin, end);
	            }

	            // For array like object we handle it ourselves.
	            var i,
	                cloned = [],
	                size,
	                len = this.length;

	            // Handle negative value for "begin"
	            var start = begin || 0;
	            start = start >= 0 ? start : len + start;

	            // Handle negative value for "end"
	            var upTo = end ? end : len;
	            if (end < 0) {
	                upTo = len + end;
	            }

	            // Actual expected size of the slice
	            size = upTo - start;

	            if (size > 0) {
	                cloned = new Array(size);
	                if (this.charAt) {
	                    for (i = 0; i < size; i++) {
	                        cloned[i] = this.charAt(start + i);
	                    }
	                } else {
	                    for (i = 0; i < size; i++) {
	                        cloned[i] = this[start + i];
	                    }
	                }
	            }

	            return cloned;
	        };
	    }
	    /* istanbul ignore next*/
	    function iterator(vars, body, ret) {
	        var fun = 'for(var ' + vars + 'i=0,n = this.length; i < n; i++){' + body.replace('_', '((i in this) && fn.call(scope,this[i],i,this))') + '}' + ret;
	        /* jshint ignore:start */
	        return Function('fn,scope', fun);
	        /* jshint ignore:end */
	    }
	    /* istanbul ignore if*/
	    if (!isNative(ap.map)) {
	        avalon.shadowCopy(ap, {
	            //定位操作，返回数组中第一个等于给定参数的元素的索引值。
	            indexOf: function indexOf(item, index) {
	                var n = this.length,
	                    i = ~~index;
	                if (i < 0) i += n;
	                for (; i < n; i++) {
	                    if (this[i] === item) return i;
	                }return -1;
	            },
	            //定位操作，同上，不过是从后遍历。
	            lastIndexOf: function lastIndexOf(item, index) {
	                var n = this.length,
	                    i = index == null ? n - 1 : index;
	                if (i < 0) i = Math.max(0, n + i);
	                for (; i >= 0; i--) {
	                    if (this[i] === item) return i;
	                }return -1;
	            },
	            //迭代操作，将数组的元素挨个儿传入一个函数中执行。Prototype.js的对应名字为each。
	            forEach: iterator('', '_', ''),
	            //迭代类 在数组中的每个项上运行一个函数，如果此函数的值为真，则此元素作为新数组的元素收集起来，并返回新数组
	            filter: iterator('r=[],j=0,', 'if(_)r[j++]=this[i]', 'return r'),
	            //收集操作，将数组的元素挨个儿传入一个函数中执行，然后把它们的返回值组成一个新数组返回。Prototype.js的对应名字为collect。
	            map: iterator('r=[],', 'r[i]=_', 'return r'),
	            //只要数组中有一个元素满足条件（放进给定函数返回true），那么它就返回true。Prototype.js的对应名字为any。
	            some: iterator('', 'if(_)return true', 'return false'),
	            //只有数组中的元素都满足条件（放进给定函数返回true），它才返回true。Prototype.js的对应名字为all。
	            every: iterator('', 'if(!_)return false', 'return true')
	        });
	    }

	    //这里放置存在异议的方法
	    var compaceQuote = function () {
	        //https://github.com/bestiejs/json3/blob/master/lib/json3.js
	        var Escapes = {
	            92: "\\\\",
	            34: '\\"',
	            8: "\\b",
	            12: "\\f",
	            10: "\\n",
	            13: "\\r",
	            9: "\\t"
	        };

	        var leadingZeroes = '000000';
	        var toPaddedString = function toPaddedString(width, value) {
	            return (leadingZeroes + (value || 0)).slice(-width);
	        };
	        var unicodePrefix = '\\u00';
	        var escapeChar = function escapeChar(character) {
	            var charCode = character.charCodeAt(0),
	                escaped = Escapes[charCode];
	            if (escaped) {
	                return escaped;
	            }
	            return unicodePrefix + toPaddedString(2, charCode.toString(16));
	        };
	        var reEscape = /[\x00-\x1f\x22\x5c]/g;
	        return function (value) {
	            /* istanbul ignore next */
	            reEscape.lastIndex = 0;
	            /* istanbul ignore next */
	            return '"' + (reEscape.test(value) ? String(value).replace(reEscape, escapeChar) : value) + '"';
	        };
	    }();
	    try {
	        avalon._quote = msie <= 8 ? compaceQuote : JSON.stringify;
	    } catch (e) {
	        /* istanbul ignore next  */
	        avalon._quote = compaceQuote;
	    }

	    var class2type = {};
	    'Boolean Number String Function Array Date RegExp Object Error'.replace(avalon.rword, function (name) {
	        class2type['[object ' + name + ']'] = name.toLowerCase();
	    });

	    avalon.type = function (obj) {
	        //取得目标的类型
	        if (obj == null) {
	            return String(obj);
	        }
	        // 早期的webkit内核浏览器实现了已废弃的ecma262v4标准，可以将正则字面量当作函数使用，因此typeof在判定正则时会返回function
	        return typeof obj === 'object' || typeof obj === 'function' ? class2type[inspect.call(obj)] || 'object' : typeof obj;
	    };

	    var rfunction = /^\s*\bfunction\b/;

	    avalon.isFunction = /* istanbul ignore if */typeof alert === 'object' ? function (fn) {
	        /* istanbul ignore next */
	        try {
	            /* istanbul ignore next */
	            return rfunction.test(fn + '');
	        } catch (e) {
	            /* istanbul ignore next */
	            return false;
	        }
	    } : function (fn) {
	        return inspect.call(fn) === '[object Function]';
	    };

	    // 利用IE678 window == document为true,document == window竟然为false的神奇特性
	    // 标准浏览器及IE9，IE10等使用 正则检测
	    /* istanbul ignore next */
	    function isWindowCompact(obj) {
	        if (!obj) {
	            return false;
	        }
	        return obj == obj.document && obj.document != obj; //jshint ignore:line
	    }

	    var rwindow = /^\[object (?:Window|DOMWindow|global)\]$/;

	    function isWindowModern(obj) {
	        return rwindow.test(inspect.call(obj));
	    }

	    avalon.isWindow = isWindowModern(avalon.window) ? isWindowModern : isWindowCompact;

	    var enu;
	    var enumerateBUG;
	    for (enu in avalon({})) {
	        break;
	    }

	    enumerateBUG = enu !== '0'; //IE6下为true, 其他为false

	    /*判定是否是一个朴素的javascript对象（Object），不是DOM对象，不是BOM对象，不是自定义类的实例*/
	    /* istanbul ignore next */
	    function isPlainObjectCompact(obj, key) {
	        if (!obj || avalon.type(obj) !== 'object' || obj.nodeType || avalon.isWindow(obj)) {
	            return false;
	        }
	        try {
	            //IE内置对象没有constructor
	            if (obj.constructor && !ohasOwn.call(obj, 'constructor') && !ohasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
	                return false;
	            }
	            var isVBscript = obj.$vbthis;
	        } catch (e) {
	            //IE8 9会在这里抛错
	            return false;
	        }
	        /* istanbul ignore if */
	        if (enumerateBUG) {
	            for (key in obj) {
	                return ohasOwn.call(obj, key);
	            }
	        }
	        for (key in obj) {}
	        return key === undefined$1 || ohasOwn.call(obj, key);
	    }

	    /* istanbul ignore next */
	    function isPlainObjectModern(obj) {
	        // 简单的 typeof obj === 'object'检测，会致使用isPlainObject(window)在opera下通不过
	        return inspect.call(obj) === '[object Object]' && Object.getPrototypeOf(obj) === Object.prototype;
	    }
	    /* istanbul ignore next */
	    avalon.isPlainObject = /\[native code\]/.test(Object.getPrototypeOf) ? isPlainObjectModern : isPlainObjectCompact;

	    var rcanMix = /object|function/;

	    //与jQuery.extend方法，可用于浅拷贝，深拷贝
	    /* istanbul ignore next */
	    avalon.mix = avalon.fn.mix = function () {
	        var n = arguments.length,
	            isDeep = false,
	            i = 0,
	            array = [];
	        if (arguments[0] === true) {
	            isDeep = true;
	            i = 1;
	        }
	        //将所有非空对象变成空对象
	        for (; i < n; i++) {
	            var el = arguments[i];
	            el = el && rcanMix.test(typeof el) ? el : {};
	            array.push(el);
	        }
	        if (array.length === 1) {
	            array.unshift(this);
	        }
	        return innerExtend(isDeep, array);
	    };
	    var undefined$1;

	    function innerExtend(isDeep, array) {
	        var target = array[0],
	            copyIsArray,
	            clone,
	            name;
	        for (var i = 1, length = array.length; i < length; i++) {
	            //只处理非空参数
	            var options = array[i];
	            var noCloneArrayMethod = Array.isArray(options);
	            for (name in options) {
	                if (noCloneArrayMethod && !options.hasOwnProperty(name)) {
	                    continue;
	                }
	                try {
	                    var src = target[name];
	                    var copy = options[name]; //当options为VBS对象时报错
	                } catch (e) {
	                    continue;
	                }

	                // 防止环引用
	                if (target === copy) {
	                    continue;
	                }
	                if (isDeep && copy && (avalon.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

	                    if (copyIsArray) {
	                        copyIsArray = false;
	                        clone = src && Array.isArray(src) ? src : [];
	                    } else {
	                        clone = src && avalon.isPlainObject(src) ? src : {};
	                    }

	                    target[name] = innerExtend(isDeep, [clone, copy]);
	                } else if (copy !== undefined$1) {
	                    target[name] = copy;
	                }
	            }
	        }
	        return target;
	    }

	    var rarraylike = /(Array|List|Collection|Map|Arguments)\]$/;
	    /*判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象*/
	    /* istanbul ignore next */
	    function isArrayLike(obj) {
	        if (!obj) return false;
	        var n = obj.length;
	        if (n === n >>> 0) {
	            //检测length属性是否为非负整数
	            var type = inspect.call(obj);
	            if (rarraylike.test(type)) return true;
	            if (type !== '[object Object]') return false;
	            try {
	                if ({}.propertyIsEnumerable.call(obj, 'length') === false) {
	                    //如果是原生对象
	                    return rfunction.test(obj.item || obj.callee);
	                }
	                return true;
	            } catch (e) {
	                //IE的NodeList直接抛错
	                return !obj.window; //IE6-8 window
	            }
	        }
	        return false;
	    }

	    avalon.each = function (obj, fn) {
	        if (obj) {
	            //排除null, undefined
	            var i = 0;
	            if (isArrayLike(obj)) {
	                for (var n = obj.length; i < n; i++) {
	                    if (fn(i, obj[i]) === false) break;
	                }
	            } else {
	                for (i in obj) {
	                    if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
	                        break;
	                    }
	                }
	            }
	        }
	    };
	    (function () {
	        var welcomeIntro = ["%cavalon.js %c" + avalon.version + " %cin debug mode, %cmore...", "color: rgb(114, 157, 52); font-weight: normal;", "color: rgb(85, 85, 85); font-weight: normal;", "color: rgb(85, 85, 85); font-weight: normal;", "color: rgb(82, 140, 224); font-weight: normal; text-decoration: underline;"];
	        var welcomeMessage = "You're running avalon in debug mode - messages will be printed to the console to help you fix problems and optimise your application.\n\n" + 'To disable debug mode, add this line at the start of your app:\n\n  avalon.config({debug: false});\n\n' + 'Debug mode also automatically shut down amicably when your app is minified.\n\n' + "Get help and support:\n  https://segmentfault.com/t/avalon\n  http://avalonjs.coding.me/\n  http://www.baidu-x.com/?q=avalonjs\n  http://www.avalon.org.cn/\n\nFound a bug? Raise an issue:\n  https://github.com/RubyLouvre/avalon/issues\n\n";
	        if (typeof console === 'object') {
	            var con = console;
	            var method = con.groupCollapsed || con.log;
	            Function.apply.call(method, con, welcomeIntro);
	            con.log(welcomeMessage);
	            if (method !== console.log) {
	                con.groupEnd(welcomeIntro);
	            }
	        }
	    })();

	    function toFixedFix(n, prec) {
	        var k = Math.pow(10, prec);
	        return '' + (Math.round(n * k) / k).toFixed(prec);
	    }
	    function numberFilter(number, decimals, point, thousands) {
	        //https://github.com/txgruppi/number_format
	        //form http://phpjs.org/functions/number_format/
	        //number 必需，要格式化的数字
	        //decimals 可选，规定多少个小数位。
	        //point 可选，规定用作小数点的字符串（默认为 . ）。
	        //thousands 可选，规定用作千位分隔符的字符串（默认为 , ），如果设置了该参数，那么所有其他参数都是必需的。
	        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	        var n = !isFinite(+number) ? 0 : +number,
	            prec = !isFinite(+decimals) ? 3 : Math.abs(decimals),
	            sep = typeof thousands === 'string' ? thousands : ",",
	            dec = point || ".",
	            s = '';

	        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
	        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	        if (s[0].length > 3) {
	            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	        }
	        /** //好像没有用
	         var s1 = s[1] || ''
	        
	          if (s1.length < prec) {
	                  s1 += new Array(prec - s[1].length + 1).join('0')
	                  s[1] = s1
	          }
	          **/
	        return s.join(dec);
	    }

	    var rscripts = /<script[^>]*>([\S\s]*?)<\/script\s*>/gim;
	    var ron = /\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g;
	    var ropen = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/ig;
	    var rsanitize = {
	        a: /\b(href)\=("javascript[^"]*"|'javascript[^']*')/ig,
	        img: /\b(src)\=("javascript[^"]*"|'javascript[^']*')/ig,
	        form: /\b(action)\=("javascript[^"]*"|'javascript[^']*')/ig
	    };

	    //https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	    //    <a href="javasc&NewLine;ript&colon;alert('XSS')">chrome</a> 
	    //    <a href="data:text/html;base64, PGltZyBzcmM9eCBvbmVycm9yPWFsZXJ0KDEpPg==">chrome</a>
	    //    <a href="jav	ascript:alert('XSS');">IE67chrome</a>
	    //    <a href="jav&#x09;ascript:alert('XSS');">IE67chrome</a>
	    //    <a href="jav&#x0A;ascript:alert('XSS');">IE67chrome</a>
	    function sanitizeFilter(str) {
	        return str.replace(rscripts, "").replace(ropen, function (a, b) {
	            var match = a.toLowerCase().match(/<(\w+)\s/);
	            if (match) {
	                //处理a标签的href属性，img标签的src属性，form标签的action属性
	                var reg = rsanitize[match[1]];
	                if (reg) {
	                    a = a.replace(reg, function (s, name, value) {
	                        var quote = value.charAt(0);
	                        return name + "=" + quote + "javascript:void(0)" + quote; // jshint ignore:line
	                    });
	                }
	            }
	            return a.replace(ron, " ").replace(/\s+/g, " "); //移除onXXX事件
	        });
	    }

	    /*
	     'yyyy': 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
	     'yy': 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
	     'y': 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
	     'MMMM': Month in year (January-December)
	     'MMM': Month in year (Jan-Dec)
	     'MM': Month in year, padded (01-12)
	     'M': Month in year (1-12)
	     'dd': Day in month, padded (01-31)
	     'd': Day in month (1-31)
	     'EEEE': Day in Week,(Sunday-Saturday)
	     'EEE': Day in Week, (Sun-Sat)
	     'HH': Hour in day, padded (00-23)
	     'H': Hour in day (0-23)
	     'hh': Hour in am/pm, padded (01-12)
	     'h': Hour in am/pm, (1-12)
	     'mm': Minute in hour, padded (00-59)
	     'm': Minute in hour (0-59)
	     'ss': Second in minute, padded (00-59)
	     's': Second in minute (0-59)
	     'a': am/pm marker
	     'Z': 4 digit (+sign) representation of the timezone offset (-1200-+1200)
	     format string can also be one of the following predefined localizable formats:
	     
	     'medium': equivalent to 'MMM d, y h:mm:ss a' for en_US locale (e.g. Sep 3, 2010 12:05:08 pm)
	     'short': equivalent to 'M/d/yy h:mm a' for en_US locale (e.g. 9/3/10 12:05 pm)
	     'fullDate': equivalent to 'EEEE, MMMM d,y' for en_US locale (e.g. Friday, September 3, 2010)
	     'longDate': equivalent to 'MMMM d, y' for en_US locale (e.g. September 3, 2010
	     'mediumDate': equivalent to 'MMM d, y' for en_US locale (e.g. Sep 3, 2010)
	     'shortDate': equivalent to 'M/d/yy' for en_US locale (e.g. 9/3/10)
	     'mediumTime': equivalent to 'h:mm:ss a' for en_US locale (e.g. 12:05:08 pm)
	     'shortTime': equivalent to 'h:mm a' for en_US locale (e.g. 12:05 pm)
	     */

	    function toInt(str) {
	        return parseInt(str, 10) || 0;
	    }

	    function padNumber(num, digits, trim) {
	        var neg = '';
	        /* istanbul ignore if*/
	        if (num < 0) {
	            neg = '-';
	            num = -num;
	        }
	        num = '' + num;
	        while (num.length < digits) {
	            num = '0' + num;
	        }if (trim) num = num.substr(num.length - digits);
	        return neg + num;
	    }

	    function dateGetter(name, size, offset, trim) {
	        return function (date) {
	            var value = date["get" + name]();
	            if (offset > 0 || value > -offset) value += offset;
	            if (value === 0 && offset === -12) {
	                /* istanbul ignore next*/
	                value = 12;
	            }
	            return padNumber(value, size, trim);
	        };
	    }

	    function dateStrGetter(name, shortForm) {
	        return function (date, formats) {
	            var value = date["get" + name]();
	            var get = (shortForm ? "SHORT" + name : name).toUpperCase();
	            return formats[get][value];
	        };
	    }

	    function timeZoneGetter(date) {
	        var zone = -1 * date.getTimezoneOffset();
	        var paddedZone = zone >= 0 ? "+" : "";
	        paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
	        return paddedZone;
	    }
	    //取得上午下午
	    function ampmGetter(date, formats) {
	        return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
	    }
	    var DATE_FORMATS = {
	        yyyy: dateGetter("FullYear", 4),
	        yy: dateGetter("FullYear", 2, 0, true),
	        y: dateGetter("FullYear", 1),
	        MMMM: dateStrGetter("Month"),
	        MMM: dateStrGetter("Month", true),
	        MM: dateGetter("Month", 2, 1),
	        M: dateGetter("Month", 1, 1),
	        dd: dateGetter("Date", 2),
	        d: dateGetter("Date", 1),
	        HH: dateGetter("Hours", 2),
	        H: dateGetter("Hours", 1),
	        hh: dateGetter("Hours", 2, -12),
	        h: dateGetter("Hours", 1, -12),
	        mm: dateGetter("Minutes", 2),
	        m: dateGetter("Minutes", 1),
	        ss: dateGetter("Seconds", 2),
	        s: dateGetter("Seconds", 1),
	        sss: dateGetter("Milliseconds", 3),
	        EEEE: dateStrGetter("Day"),
	        EEE: dateStrGetter("Day", true),
	        a: ampmGetter,
	        Z: timeZoneGetter
	    };
	    var rdateFormat = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/;
	    var raspnetjson = /^\/Date\((\d+)\)\/$/;
	    function dateFilter(date, format) {
	        var locate = dateFilter.locate,
	            text = "",
	            parts = [],
	            fn,
	            match;
	        format = format || "mediumDate";
	        format = locate[format] || format;
	        if (typeof date === "string") {
	            if (/^\d+$/.test(date)) {
	                date = toInt(date);
	            } else if (raspnetjson.test(date)) {
	                date = +RegExp.$1;
	            } else {
	                var trimDate = date.trim();
	                var dateArray = [0, 0, 0, 0, 0, 0, 0];
	                var oDate = new Date(0);
	                //取得年月日
	                trimDate = trimDate.replace(/^(\d+)\D(\d+)\D(\d+)/, function (_, a, b, c) {
	                    var array = c.length === 4 ? [c, a, b] : [a, b, c];
	                    dateArray[0] = toInt(array[0]); //年
	                    dateArray[1] = toInt(array[1]) - 1; //月
	                    dateArray[2] = toInt(array[2]); //日
	                    return "";
	                });
	                var dateSetter = oDate.setFullYear;
	                var timeSetter = oDate.setHours;
	                trimDate = trimDate.replace(/[T\s](\d+):(\d+):?(\d+)?\.?(\d)?/, function (_, a, b, c, d) {
	                    dateArray[3] = toInt(a); //小时
	                    dateArray[4] = toInt(b); //分钟
	                    dateArray[5] = toInt(c); //秒
	                    if (d) {
	                        //毫秒
	                        dateArray[6] = Math.round(parseFloat("0." + d) * 1000);
	                    }
	                    return "";
	                });
	                var tzHour = 0;
	                var tzMin = 0;
	                trimDate = trimDate.replace(/Z|([+-])(\d\d):?(\d\d)/, function (z, symbol, c, d) {
	                    dateSetter = oDate.setUTCFullYear;
	                    timeSetter = oDate.setUTCHours;
	                    if (symbol) {
	                        tzHour = toInt(symbol + c);
	                        tzMin = toInt(symbol + d);
	                    }
	                    return '';
	                });

	                dateArray[3] -= tzHour;
	                dateArray[4] -= tzMin;
	                dateSetter.apply(oDate, dateArray.slice(0, 3));
	                timeSetter.apply(oDate, dateArray.slice(3));
	                date = oDate;
	            }
	        }
	        if (typeof date === 'number') {
	            date = new Date(date);
	        }

	        while (format) {
	            match = rdateFormat.exec(format);
	            /* istanbul ignore else */
	            if (match) {
	                parts = parts.concat(match.slice(1));
	                format = parts.pop();
	            } else {
	                parts.push(format);
	                format = null;
	            }
	        }
	        parts.forEach(function (value) {
	            fn = DATE_FORMATS[value];
	            text += fn ? fn(date, locate) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
	        });
	        return text;
	    }

	    var locate = {
	        AMPMS: {
	            0: '上午',
	            1: '下午'
	        },
	        DAY: {
	            0: '星期日',
	            1: '星期一',
	            2: '星期二',
	            3: '星期三',
	            4: '星期四',
	            5: '星期五',
	            6: '星期六'
	        },
	        MONTH: {
	            0: '1月',
	            1: '2月',
	            2: '3月',
	            3: '4月',
	            4: '5月',
	            5: '6月',
	            6: '7月',
	            7: '8月',
	            8: '9月',
	            9: '10月',
	            10: '11月',
	            11: '12月'
	        },
	        SHORTDAY: {
	            '0': '周日',
	            '1': '周一',
	            '2': '周二',
	            '3': '周三',
	            '4': '周四',
	            '5': '周五',
	            '6': '周六'
	        },
	        fullDate: 'y年M月d日EEEE',
	        longDate: 'y年M月d日',
	        medium: 'yyyy-M-d H:mm:ss',
	        mediumDate: 'yyyy-M-d',
	        mediumTime: 'H:mm:ss',
	        'short': 'yy-M-d ah:mm',
	        shortDate: 'yy-M-d',
	        shortTime: 'ah:mm'
	    };
	    locate.SHORTMONTH = locate.MONTH;
	    dateFilter.locate = locate;

	    /**
	    $$skipArray:是系统级通用的不可监听属性
	    $skipArray: 是当前对象特有的不可监听属性
	    
	     不同点是
	     $$skipArray被hasOwnProperty后返回false
	     $skipArray被hasOwnProperty后返回true
	     */
	    var falsy;
	    var $$skipArray = {
	        $id: falsy,
	        $render: falsy,
	        $track: falsy,
	        $element: falsy,
	        $computed: falsy,
	        $watch: falsy,
	        $fire: falsy,
	        $events: falsy,
	        $accessors: falsy,
	        $hashcode: falsy,
	        $mutations: falsy,
	        $vbthis: falsy,
	        $vbsetter: falsy
	    };

	    /*
	    https://github.com/hufyhang/orderBy/blob/master/index.js
	    */

	    function orderBy(array, by, decend) {
	        var type = avalon.type(array);
	        if (type !== 'array' && type !== 'object') throw 'orderBy只能处理对象或数组';
	        var criteria = typeof by == 'string' ? function (el) {
	            return el && el[by];
	        } : typeof by === 'function' ? by : function (el) {
	            return el;
	        };
	        var mapping = {};
	        var temp = [];
	        __repeat(array, Array.isArray(array), function (key) {
	            var val = array[key];
	            var k = criteria(val, key);
	            if (k in mapping) {
	                mapping[k].push(key);
	            } else {
	                mapping[k] = [key];
	            }
	            temp.push(k);
	        });

	        temp.sort();
	        if (decend < 0) {
	            temp.reverse();
	        }
	        var _array = type === 'array';
	        var target = _array ? [] : {};
	        return recovery(target, temp, function (k) {
	            var key = mapping[k].shift();
	            if (_array) {
	                target.push(array[key]);
	            } else {
	                target[key] = array[key];
	            }
	        });
	    }

	    function __repeat(array, isArray$$1, cb) {
	        if (isArray$$1) {
	            array.forEach(function (val, index) {
	                cb(index);
	            });
	        } else if (typeof array.$track === 'string') {
	            array.$track.replace(/[^☥]+/g, function (k) {
	                cb(k);
	            });
	        } else {
	            for (var i in array) {
	                if (array.hasOwnProperty(i)) {
	                    cb(i);
	                }
	            }
	        }
	    }
	    function filterBy(array, search) {
	        var type = avalon.type(array);
	        if (type !== 'array' && type !== 'object') throw 'filterBy只能处理对象或数组';
	        var args = avalon.slice(arguments, 2);
	        var stype = avalon.type(search);
	        if (stype === 'function') {
	            var criteria = search._orig || search;
	        } else if (stype === 'string' || stype === 'number') {
	            if (search === '') {
	                return array;
	            } else {
	                var reg = new RegExp(avalon.escapeRegExp(search), 'i');
	                criteria = function criteria(el) {
	                    return reg.test(el);
	                };
	            }
	        } else {
	            return array;
	        }
	        var isArray$$1 = type === 'array';
	        var target = isArray$$1 ? [] : {};
	        __repeat(array, isArray$$1, function (key) {
	            var val = array[key];
	            if (criteria.apply({
	                key: key
	            }, [val, key].concat(args))) {
	                if (isArray$$1) {
	                    target.push(val);
	                } else {
	                    target[key] = val;
	                }
	            }
	        });
	        return target;
	    }

	    function selectBy(data, array, defaults) {
	        if (avalon.isObject(data) && !Array.isArray(data)) {
	            var target = [];
	            return recovery(target, array, function (name) {
	                target.push(data.hasOwnProperty(name) ? data[name] : defaults ? defaults[name] : '');
	            });
	        } else {
	            return data;
	        }
	    }

	    function limitBy(input, limit, begin) {
	        var type = avalon.type(input);
	        if (type !== 'array' && type !== 'object') throw 'limitBy只能处理对象或数组';
	        //必须是数值
	        if (typeof limit !== 'number') {
	            return input;
	        }
	        //不能为NaN
	        if (limit !== limit) {
	            return input;
	        }
	        //将目标转换为数组
	        if (type === 'object') {
	            input = convertArray(input, false);
	        }
	        var n = input.length;
	        limit = Math.floor(Math.min(n, limit));
	        begin = typeof begin === 'number' ? begin : 0;
	        if (begin < 0) {
	            begin = Math.max(0, n + begin);
	        }
	        var data = [];
	        for (var i = begin; i < n; i++) {
	            if (data.length === limit) {
	                break;
	            }
	            data.push(input[i]);
	        }
	        var isArray$$1 = type === 'array';
	        if (isArray$$1) {
	            return data;
	        }
	        var target = {};
	        return recovery(target, data, function (el) {
	            target[el.key] = el.value;
	        });
	    }

	    function recovery(ret, array, callback) {
	        for (var i = 0, n = array.length; i < n; i++) {
	            callback(array[i]);
	        }
	        return ret;
	    }

	    //Chrome谷歌浏览器中js代码Array.sort排序的bug乱序解决办法
	    //http://www.cnblogs.com/yzeng/p/3949182.html
	    function convertArray(array, isArray$$1) {
	        var ret = [],
	            i = 0;
	        __repeat(array, isArray$$1, function (key) {
	            ret[i] = {
	                oldIndex: i,
	                value: array[key],
	                key: key
	            };
	            i++;
	        });
	        return ret;
	    }

	    var eventFilters = {
	        stop: function stop(e) {
	            e.stopPropagation();
	            return e;
	        },
	        prevent: function prevent(e) {
	            e.preventDefault();
	            return e;
	        }
	    };
	    var keys = {
	        esc: 27,
	        tab: 9,
	        enter: 13,
	        space: 32,
	        del: 46,
	        up: 38,
	        left: 37,
	        right: 39,
	        down: 40
	    };
	    for (var name$1 in keys) {
	        (function (filter, key) {
	            eventFilters[filter] = function (e) {
	                if (e.which !== key) {
	                    e.$return = true;
	                }
	                return e;
	            };
	        })(name$1, keys[name$1]);
	    }

	    //https://github.com/teppeis/htmlspecialchars
	    function escapeFilter(str) {
	        if (str == null) return '';

	        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
	    }

	    var filters = avalon.filters = {};

	    avalon.composeFilters = function () {
	        var args = arguments;
	        return function (value) {
	            for (var i = 0, arr; arr = args[i++];) {
	                var name = arr[0];
	                var filter = avalon.filters[name];
	                if (typeof filter === 'function') {
	                    arr[0] = value;
	                    try {
	                        value = filter.apply(0, arr);
	                    } catch (e) {}
	                }
	            }
	            return value;
	        };
	    };

	    avalon.escapeHtml = escapeFilter;

	    avalon.mix(filters, {
	        uppercase: function uppercase(str) {
	            return String(str).toUpperCase();
	        },
	        lowercase: function lowercase(str) {
	            return String(str).toLowerCase();
	        },
	        truncate: function truncate(str, length, end) {
	            //length，新字符串长度，truncation，新字符串的结尾的字段,返回新字符串
	            if (!str) {
	                return '';
	            }
	            str = String(str);
	            if (isNaN(length)) {
	                length = 30;
	            }
	            end = typeof end === "string" ? end : "...";
	            return str.length > length ? str.slice(0, length - end.length) + end : /* istanbul ignore else*/
	            str;
	        },

	        camelize: avalon.camelize,
	        date: dateFilter,
	        escape: escapeFilter,
	        sanitize: sanitizeFilter,
	        number: numberFilter,
	        currency: function currency(amount, symbol, fractionSize) {
	            return (symbol || '\xA5') + numberFilter(amount, isFinite(fractionSize) ? /* istanbul ignore else*/fractionSize : 2);
	        }
	    }, { filterBy: filterBy, orderBy: orderBy, selectBy: selectBy, limitBy: limitBy }, eventFilters);

	    var rcheckedType = /^(?:checkbox|radio)$/;

	    /* istanbul ignore next */
	    function fixElement(dest, src) {
	        if (dest.nodeType !== 1) {
	            return;
	        }
	        var nodeName = dest.nodeName.toLowerCase();

	        if (nodeName === "script") {
	            if (dest.text !== src.text) {
	                dest.type = "noexec";
	                dest.text = src.text;
	                dest.type = src.type || "";
	            }
	        } else if (nodeName === 'object') {
	            var params = src.childNodes;
	            if (dest.childNodes.length !== params.length) {
	                avalon.clearHTML(dest);
	                for (var i = 0, el; el = params[i++];) {
	                    dest.appendChild(el.cloneNode(true));
	                }
	            }
	        } else if (nodeName === 'input' && rcheckedType.test(src.nodeName)) {

	            dest.defaultChecked = dest.checked = src.checked;
	            if (dest.value !== src.value) {
	                dest.value = src.value;
	            }
	        } else if (nodeName === 'option') {
	            dest.defaultSelected = dest.selected = src.defaultSelected;
	        } else if (nodeName === 'input' || nodeName === 'textarea') {
	            dest.defaultValue = src.defaultValue;
	        }
	    }

	    /* istanbul ignore next */
	    function getAll(context) {
	        return typeof context.getElementsByTagName !== 'undefined' ? context.getElementsByTagName('*') : typeof context.querySelectorAll !== 'undefined' ? context.querySelectorAll('*') : [];
	    }

	    /* istanbul ignore next */
	    function fixClone(src) {
	        var target = src.cloneNode(true);
	        //http://www.myexception.cn/web/665613.html
	        // target.expando = null
	        var t = getAll(target);
	        var s = getAll(src);
	        for (var i = 0; i < s.length; i++) {
	            fixElement(t[i], s[i]);
	        }
	        return target;
	    }

	    /* istanbul ignore next */
	    function fixContains(root, el) {
	        try {
	            //IE6-8,游离于DOM树外的文本节点，访问parentNode有时会抛错
	            while (el = el.parentNode) {
	                if (el === root) return true;
	            }
	        } catch (e) {}
	        return false;
	    }

	    avalon.contains = fixContains;

	    avalon.cloneNode = function (a) {
	        return a.cloneNode(true);
	    };

	    //IE6-11的文档对象没有contains
	    /* istanbul ignore next */
	    function shimHack() {
	        if (msie$1 < 10) {
	            avalon.cloneNode = fixClone;
	        }
	        if (!document$1.contains) {
	            document$1.contains = function (b) {
	                return fixContains(document$1, b);
	            };
	        }
	        if (avalon.modern) {
	            if (!document$1.createTextNode('x').contains) {
	                Node.prototype.contains = function (child) {
	                    //IE6-8没有Node对象
	                    return fixContains(this, child);
	                };
	            }
	        }
	        //firefox 到11时才有outerHTML
	        function fixFF(prop, cb) {
	            if (!(prop in root) && HTMLElement.prototype.__defineGetter__) {
	                HTMLElement.prototype.__defineGetter__(prop, cb);
	            }
	        }
	        fixFF('outerHTML', function () {
	            var div = document$1.createElement('div');
	            div.appendChild(this);
	            return div.innerHTML;
	        });
	        fixFF('children', function () {
	            var children = [];
	            for (var i = 0, el; el = this.childNodes[i++];) {
	                if (el.nodeType === 1) {
	                    children.push(el);
	                }
	            }
	            return children;
	        });
	        fixFF('innerText', function () {
	            //firefox45+, chrome4+ http://caniuse.com/#feat=innertext
	            return this.textContent;
	        });
	    }

	    if (inBrowser) {
	        shimHack();
	    }

	    function ClassList(node) {
	        this.node = node;
	    }

	    ClassList.prototype = {
	        toString: function toString() {
	            var node = this.node;
	            var cls = node.className;
	            var str = typeof cls === 'string' ? cls : cls.baseVal;
	            var match = str.match(rnowhite);
	            return match ? match.join(' ') : '';
	        },
	        contains: function contains(cls) {
	            return (' ' + this + ' ').indexOf(' ' + cls + ' ') > -1;
	        },
	        add: function add(cls) {
	            if (!this.contains(cls)) {
	                this.set(this + ' ' + cls);
	            }
	        },
	        remove: function remove(cls) {
	            this.set((' ' + this + ' ').replace(' ' + cls + ' ', ' '));
	        },
	        set: function set(cls) {
	            cls = cls.trim();
	            var node = this.node;
	            if (typeof node.className === 'object') {
	                //SVG元素的className是一个对象 SVGAnimatedString { baseVal='', animVal=''}，只能通过set/getAttribute操作
	                node.setAttribute('class', cls);
	            } else {
	                node.className = cls;
	            }
	            if (!cls) {
	                node.removeAttribute('class');
	            }
	            //toggle存在版本差异，因此不使用它
	        }
	    };

	    function classListFactory(node) {
	        if (!('classList' in node)) {
	            node.classList = new ClassList(node);
	        }
	        return node.classList;
	    }

	    'add,remove'.replace(rword, function (method) {
	        avalon.fn[method + 'Class'] = function (cls) {
	            var el = this[0] || {};
	            //https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox/Releases/26
	            if (cls && typeof cls === 'string' && el.nodeType === 1) {
	                cls.replace(rnowhite, function (c) {
	                    classListFactory(el)[method](c);
	                });
	            }
	            return this;
	        };
	    });

	    avalon.shadowCopy(avalon.fn, {
	        hasClass: function hasClass(cls) {
	            var el = this[0] || {};
	            return el.nodeType === 1 && classListFactory(el).contains(cls);
	        },
	        toggleClass: function toggleClass(value, stateVal) {
	            var isBool = typeof stateVal === 'boolean';
	            var me = this;
	            String(value).replace(rnowhite, function (c) {
	                var state = isBool ? stateVal : !me.hasClass(c);
	                me[state ? 'addClass' : 'removeClass'](c);
	            });
	            return this;
	        }
	    });

	    var propMap = {}; //不规则的属性名映射


	    //防止压缩时出错
	    'accept-charset,acceptCharset|char,ch|charoff,chOff|class,className|for,htmlFor|http-equiv,httpEquiv'.replace(/[^\|]+/g, function (a) {
	        var k = a.split(',');
	        propMap[k[0]] = k[1];
	    });
	    /*
	    contenteditable不是布尔属性
	    http://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/
	    contenteditable=''
	    contenteditable='events'
	    contenteditable='caret'
	    contenteditable='plaintext-only'
	    contenteditable='true'
	    contenteditable='false'
	     */
	    var bools = ['autofocus,autoplay,async,allowTransparency,checked,controls', 'declare,disabled,defer,defaultChecked,defaultSelected,', 'isMap,loop,multiple,noHref,noResize,noShade', 'open,readOnly,selected'].join(',');

	    bools.replace(/\w+/g, function (name) {
	        propMap[name.toLowerCase()] = name;
	    });

	    var anomaly = ['accessKey,bgColor,cellPadding,cellSpacing,codeBase,codeType,colSpan', 'dateTime,defaultValue,contentEditable,frameBorder,longDesc,maxLength,' + 'marginWidth,marginHeight,rowSpan,tabIndex,useMap,vSpace,valueType,vAlign'].join(',');

	    anomaly.replace(/\w+/g, function (name) {
	        propMap[name.toLowerCase()] = name;
	    });

	    //module.exports = propMap

	    function isVML(src) {
	        var nodeName = src.nodeName;
	        return nodeName.toLowerCase() === nodeName && !!src.scopeName && src.outerText === '';
	    }

	    var rvalidchars = /^[\],:{}\s]*$/;
	    var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	    var rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g;
	    var rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;

	    function compactParseJSON(data) {
	        if (typeof data === 'string') {
	            data = data.trim();
	            if (data) {
	                if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
	                    return new Function('return ' + data)(); // jshint ignore:line
	                }
	            }
	            throw TypeError('Invalid JSON: [' + data + ']');
	        }
	        return data;
	    }

	    var rsvg = /^\[object SVG\w*Element\]$/;
	    var ramp = /&amp;/g;
	    function updateAttrs(node, attrs) {
	        for (var attrName in attrs) {
	            try {
	                var val = attrs[attrName];
	                // 处理路径属性
	                /* istanbul ignore if*/

	                //处理HTML5 data-*属性 SVG
	                if (attrName.indexOf('data-') === 0 || rsvg.test(node)) {
	                    node.setAttribute(attrName, val);
	                } else {
	                    var propName = propMap[attrName] || attrName;
	                    /* istanbul ignore if */
	                    if (typeof node[propName] === 'boolean') {
	                        if (propName === 'checked') {
	                            node.defaultChecked = !!val;
	                        }
	                        node[propName] = !!val;
	                        //布尔属性必须使用el.xxx = true|false方式设值
	                        //如果为false, IE全系列下相当于setAttribute(xxx,''),
	                        //会影响到样式,需要进一步处理
	                    }

	                    if (val === false) {
	                        //移除属性
	                        node.removeAttribute(propName);
	                        continue;
	                    }
	                    //IE6中classNamme, htmlFor等无法检测它们为内建属性　
	                    if (avalon.msie < 8 && /[A-Z]/.test(propName)) {
	                        node[propName] = val + '';
	                        continue;
	                    }
	                    //SVG只能使用setAttribute(xxx, yyy), VML只能使用node.xxx = yyy ,
	                    //HTML的固有属性必须node.xxx = yyy
	                    /* istanbul ignore next */
	                    var isInnate = !avalon.modern && isVML(node) ? true : isInnateProps(node.nodeName, attrName);
	                    if (isInnate) {
	                        if (attrName === 'href' || attrName === 'src') {
	                            /* istanbul ignore if */
	                            if (avalon.msie < 8) {
	                                val = String(val).replace(ramp, '&'); //处理IE67自动转义的问题
	                            }
	                        }
	                        node[propName] = val + '';
	                    } else {
	                        node.setAttribute(attrName, val);
	                    }
	                }
	            } catch (e) {
	                // 对象不支持此属性或方法 src https://github.com/ecomfe/zrender 
	                // 未知名称。\/n
	                // e.message大概这样,需要trim
	                //IE6-8,元素节点不支持其他元素节点的内置属性,如src, href, for
	                /* istanbul ignore next */
	                avalon.log(String(e.message).trim(), attrName, val);
	            }
	        }
	    }
	    var innateMap = {};

	    function isInnateProps(nodeName, attrName) {
	        var key = nodeName + ":" + attrName;
	        if (key in innateMap) {
	            return innateMap[key];
	        }
	        return innateMap[key] = attrName in document$1.createElement(nodeName);
	    }
	    try {
	        avalon.parseJSON = JSON.parse;
	    } catch (e) {
	        /* istanbul ignore next */
	        avalon.parseJSON = compactParseJSON;
	    }

	    avalon.fn.attr = function (name, value) {
	        if (arguments.length === 2) {
	            this[0].setAttribute(name, value);
	            return this;
	        } else {
	            return this[0].getAttribute(name);
	        }
	    };

	    var cssMap = oneObject('float', 'cssFloat');
	    avalon.cssNumber = oneObject('animationIterationCount,columnCount,order,flex,flexGrow,flexShrink,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom');
	    var prefixes = ['', '-webkit-', '-o-', '-moz-', '-ms-'];
	    /* istanbul ignore next */
	    avalon.cssName = function (name, host, camelCase) {
	        if (cssMap[name]) {
	            return cssMap[name];
	        }
	        host = host || avalon.root.style || {};
	        for (var i = 0, n = prefixes.length; i < n; i++) {
	            camelCase = avalon.camelize(prefixes[i] + name);
	            if (camelCase in host) {
	                return cssMap[name] = camelCase;
	            }
	        }
	        return null;
	    };
	    /* istanbul ignore next */
	    avalon.css = function (node, name, value, fn) {
	        //读写删除元素节点的样式
	        if (node instanceof avalon) {
	            node = node[0];
	        }
	        if (node.nodeType !== 1) {
	            return;
	        }
	        var prop = avalon.camelize(name);
	        name = avalon.cssName(prop) || /* istanbul ignore next*/prop;
	        if (value === void 0 || typeof value === 'boolean') {
	            //获取样式
	            fn = cssHooks[prop + ':get'] || cssHooks['@:get'];
	            if (name === 'background') {
	                name = 'backgroundColor';
	            }
	            var val = fn(node, name);
	            return value === true ? parseFloat(val) || 0 : val;
	        } else if (value === '') {
	            //请除样式
	            node.style[name] = '';
	        } else {
	            //设置样式
	            if (value == null || value !== value) {
	                return;
	            }
	            if (isFinite(value) && !avalon.cssNumber[prop]) {
	                value += 'px';
	            }
	            fn = cssHooks[prop + ':set'] || cssHooks['@:set'];
	            fn(node, name, value);
	        }
	    };
	    /* istanbul ignore next */
	    avalon.fn.css = function (name, value) {
	        if (avalon.isPlainObject(name)) {
	            for (var i in name) {
	                avalon.css(this, i, name[i]);
	            }
	        } else {
	            var ret = avalon.css(this, name, value);
	        }
	        return ret !== void 0 ? ret : this;
	    };
	    /* istanbul ignore next */
	    avalon.fn.position = function () {
	        var offsetParent,
	            offset,
	            elem = this[0],
	            parentOffset = {
	            top: 0,
	            left: 0
	        };
	        if (!elem) {
	            return parentOffset;
	        }
	        if (this.css('position') === 'fixed') {
	            offset = elem.getBoundingClientRect();
	        } else {
	            offsetParent = this.offsetParent(); //得到真正的offsetParent
	            offset = this.offset(); // 得到正确的offsetParent
	            if (offsetParent[0].tagName !== 'HTML') {
	                parentOffset = offsetParent.offset();
	            }
	            parentOffset.top += avalon.css(offsetParent[0], 'borderTopWidth', true);
	            parentOffset.left += avalon.css(offsetParent[0], 'borderLeftWidth', true);

	            // Subtract offsetParent scroll positions
	            parentOffset.top -= offsetParent.scrollTop();
	            parentOffset.left -= offsetParent.scrollLeft();
	        }
	        return {
	            top: offset.top - parentOffset.top - avalon.css(elem, 'marginTop', true),
	            left: offset.left - parentOffset.left - avalon.css(elem, 'marginLeft', true)
	        };
	    };
	    /* istanbul ignore next */
	    avalon.fn.offsetParent = function () {
	        var offsetParent = this[0].offsetParent;
	        while (offsetParent && avalon.css(offsetParent, 'position') === 'static') {
	            offsetParent = offsetParent.offsetParent;
	        }
	        return avalon(offsetParent || avalon.root);
	    };

	    /* istanbul ignore next */
	    cssHooks['@:set'] = function (node, name, value) {
	        try {
	            //node.style.width = NaN;node.style.width = 'xxxxxxx';
	            //node.style.width = undefine 在旧式IE下会抛异常
	            node.style[name] = value;
	        } catch (e) {}
	    };
	    /* istanbul ignore next */
	    cssHooks['@:get'] = function (node, name) {
	        if (!node || !node.style) {
	            throw new Error('getComputedStyle要求传入一个节点 ' + node);
	        }
	        var ret,
	            styles = window$1.getComputedStyle(node, null);
	        if (styles) {
	            ret = name === 'filter' ? styles.getPropertyValue(name) : styles[name];
	            if (ret === '') {
	                ret = node.style[name]; //其他浏览器需要我们手动取内联样式
	            }
	        }
	        return ret;
	    };

	    cssHooks['opacity:get'] = function (node) {
	        var ret = cssHooks['@:get'](node, 'opacity');
	        return ret === '' ? '1' : ret;
	    };

	    'top,left'.replace(avalon.rword, function (name) {
	        cssHooks[name + ':get'] = function (node) {
	            var computed = cssHooks['@:get'](node, name);
	            return (/px$/.test(computed) ? computed : avalon(node).position()[name] + 'px'
	            );
	        };
	    });

	    var cssShow = {
	        position: 'absolute',
	        visibility: 'hidden',
	        display: 'block'
	    };

	    var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
	    /* istanbul ignore next */
	    function showHidden(node, array) {
	        //http://www.cnblogs.com/rubylouvre/archive/2012/10/27/2742529.html
	        if (node.offsetWidth <= 0) {
	            //opera.offsetWidth可能小于0
	            if (rdisplayswap.test(cssHooks['@:get'](node, 'display'))) {
	                var obj = {
	                    node: node
	                };
	                for (var name in cssShow) {
	                    obj[name] = node.style[name];
	                    node.style[name] = cssShow[name];
	                }
	                array.push(obj);
	            }
	            var parent = node.parentNode;
	            if (parent && parent.nodeType === 1) {
	                showHidden(parent, array);
	            }
	        }
	    }
	    /* istanbul ignore next*/
	    avalon.each({
	        Width: 'width',
	        Height: 'height'
	    }, function (name, method) {
	        var clientProp = 'client' + name,
	            scrollProp = 'scroll' + name,
	            offsetProp = 'offset' + name;
	        cssHooks[method + ':get'] = function (node, which, override) {
	            var boxSizing = -4;
	            if (typeof override === 'number') {
	                boxSizing = override;
	            }
	            which = name === 'Width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	            var ret = node[offsetProp]; // border-box 0
	            if (boxSizing === 2) {
	                // margin-box 2
	                return ret + avalon.css(node, 'margin' + which[0], true) + avalon.css(node, 'margin' + which[1], true);
	            }
	            if (boxSizing < 0) {
	                // padding-box  -2
	                ret = ret - avalon.css(node, 'border' + which[0] + 'Width', true) - avalon.css(node, 'border' + which[1] + 'Width', true);
	            }
	            if (boxSizing === -4) {
	                // content-box -4
	                ret = ret - avalon.css(node, 'padding' + which[0], true) - avalon.css(node, 'padding' + which[1], true);
	            }
	            return ret;
	        };
	        cssHooks[method + '&get'] = function (node) {
	            var hidden = [];
	            showHidden(node, hidden);
	            var val = cssHooks[method + ':get'](node);
	            for (var i = 0, obj; obj = hidden[i++];) {
	                node = obj.node;
	                for (var n in obj) {
	                    if (typeof obj[n] === 'string') {
	                        node.style[n] = obj[n];
	                    }
	                }
	            }
	            return val;
	        };
	        avalon.fn[method] = function (value) {
	            //会忽视其display
	            var node = this[0];
	            if (arguments.length === 0) {
	                if (node.setTimeout) {
	                    //取得窗口尺寸
	                    return node['inner' + name] || node.document.documentElement[clientProp] || node.document.body[clientProp]; //IE6下前两个分别为undefined,0
	                }
	                if (node.nodeType === 9) {
	                    //取得页面尺寸
	                    var doc = node.documentElement;
	                    //FF chrome    html.scrollHeight< body.scrollHeight
	                    //IE 标准模式 : html.scrollHeight> body.scrollHeight
	                    //IE 怪异模式 : html.scrollHeight 最大等于可视窗口多一点？
	                    return Math.max(node.body[scrollProp], doc[scrollProp], node.body[offsetProp], doc[offsetProp], doc[clientProp]);
	                }
	                return cssHooks[method + '&get'](node);
	            } else {
	                return this.css(method, value);
	            }
	        };
	        avalon.fn['inner' + name] = function () {
	            return cssHooks[method + ':get'](this[0], void 0, -2);
	        };
	        avalon.fn['outer' + name] = function (includeMargin) {
	            return cssHooks[method + ':get'](this[0], void 0, includeMargin === true ? 2 : 0);
	        };
	    });

	    function getWindow(node) {
	        return node.window || node.defaultView || node.parentWindow || false;
	    }

	    /* istanbul ignore if */
	    if (msie$1 < 9) {
	        avalon.shadowCopy(cssMap, oneObject('float', 'styleFloat'));
	        var rnumnonpx = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i;
	        var rposition = /^(top|right|bottom|left)$/;
	        var ralpha = /alpha\([^)]+\)/i;
	        var ropactiy = /(opacity|\d(\d|\.)*)/g;
	        var ie8 = msie$1 === 8;
	        var salpha = 'DXImageTransform.Microsoft.Alpha';
	        var border = {
	            thin: ie8 ? '1px' : '2px',
	            medium: ie8 ? '3px' : '4px',
	            thick: ie8 ? '5px' : '6px'
	        };
	        cssHooks['@:get'] = function (node, name) {
	            //取得精确值，不过它有可能是带em,pc,mm,pt,%等单位
	            var currentStyle = node.currentStyle;
	            var ret = currentStyle[name];
	            if (rnumnonpx.test(ret) && !rposition.test(ret)) {
	                //①，保存原有的style.left, runtimeStyle.left,
	                var style = node.style,
	                    left = style.left,
	                    rsLeft = node.runtimeStyle.left;
	                //②由于③处的style.left = xxx会影响到currentStyle.left，
	                //因此把它currentStyle.left放到runtimeStyle.left，
	                //runtimeStyle.left拥有最高优先级，不会style.left影响
	                node.runtimeStyle.left = currentStyle.left;
	                //③将精确值赋给到style.left，然后通过IE的另一个私有属性 style.pixelLeft
	                //得到单位为px的结果；fontSize的分支见http://bugs.jquery.com/ticket/760
	                style.left = name === 'fontSize' ? '1em' : ret || 0;
	                ret = style.pixelLeft + 'px';
	                //④还原 style.left，runtimeStyle.left
	                style.left = left;
	                node.runtimeStyle.left = rsLeft;
	            }
	            if (ret === 'medium') {
	                name = name.replace('Width', 'Style');
	                //border width 默认值为medium，即使其为0'
	                if (currentStyle[name] === 'none') {
	                    ret = '0px';
	                }
	            }
	            return ret === '' ? 'auto' : border[ret] || ret;
	        };
	        cssHooks['opacity:set'] = function (node, name, value) {
	            var style = node.style;

	            var opacity = Number(value) <= 1 ? 'alpha(opacity=' + value * 100 + ')' : '';
	            var filter = style.filter || '';
	            style.zoom = 1;
	            //不能使用以下方式设置透明度
	            //node.filters.alpha.opacity = value * 100
	            style.filter = (ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + ' ' + opacity).trim();

	            if (!style.filter) {
	                style.removeAttribute('filter');
	            }
	        };
	        cssHooks['opacity:get'] = function (node) {
	            var match = node.style.filter.match(ropactiy) || [];
	            var ret = false;
	            for (var i = 0, el; el = match[i++];) {
	                if (el === 'opacity') {
	                    ret = true;
	                } else if (ret) {
	                    return el / 100 + '';
	                }
	            }
	            return '1'; //确保返回的是字符串
	        };
	    }

	    /* istanbul ignore next */
	    avalon.fn.offset = function () {
	        //取得距离页面左右角的坐标
	        var node = this[0],
	            box = {
	            left: 0,
	            top: 0
	        };
	        if (!node || !node.tagName || !node.ownerDocument) {
	            return box;
	        }
	        var doc = node.ownerDocument;
	        var body = doc.body;
	        var root$$1 = doc.documentElement;
	        var win = doc.defaultView || doc.parentWindow;
	        if (!avalon.contains(root$$1, node)) {
	            return box;
	        }
	        //http://hkom.blog1.fc2.com/?mode=m&no=750 body的偏移量是不包含margin的
	        //我们可以通过getBoundingClientRect来获得元素相对于client的rect.
	        //http://msdn.microsoft.com/en-us/library/ms536433.aspx
	        if (node.getBoundingClientRect) {
	            box = node.getBoundingClientRect(); // BlackBerry 5, iOS 3 (original iPhone)
	        }
	        //chrome/IE6: body.scrollTop, firefox/other: root.scrollTop
	        var clientTop = root$$1.clientTop || body.clientTop,
	            clientLeft = root$$1.clientLeft || body.clientLeft,
	            scrollTop = Math.max(win.pageYOffset || 0, root$$1.scrollTop, body.scrollTop),
	            scrollLeft = Math.max(win.pageXOffset || 0, root$$1.scrollLeft, body.scrollLeft);
	        // 把滚动距离加到left,top中去。
	        // IE一些版本中会自动为HTML元素加上2px的border，我们需要去掉它
	        // http://msdn.microsoft.com/en-us/library/ms533564(VS.85).aspx
	        return {
	            top: box.top + scrollTop - clientTop,
	            left: box.left + scrollLeft - clientLeft
	        };
	    };

	    //生成avalon.fn.scrollLeft, avalon.fn.scrollTop方法
	    /* istanbul ignore next */
	    avalon.each({
	        scrollLeft: 'pageXOffset',
	        scrollTop: 'pageYOffset'
	    }, function (method, prop) {
	        avalon.fn[method] = function (val) {
	            var node = this[0] || {};
	            var win = getWindow(node);
	            var root$$1 = avalon.root;
	            var top = method === 'scrollTop';
	            if (!arguments.length) {
	                return win ? prop in win ? win[prop] : root$$1[method] : node[method];
	            } else {
	                if (win) {
	                    win.scrollTo(!top ? val : avalon(win).scrollLeft(), top ? val : avalon(win).scrollTop());
	                } else {
	                    node[method] = val;
	                }
	            }
	        };
	    });

	    function getDuplexType(elem) {
	        var ret = elem.tagName.toLowerCase();
	        if (ret === 'input') {
	            return rcheckedType.test(elem.type) ? 'checked' : elem.type;
	        }
	        return ret;
	    }

	    /**
	     * IE6/7/8中，如果option没有value值，那么将返回空字符串。
	     * IE9/Firefox/Safari/Chrome/Opera 中先取option的value值，如果没有value属性，则取option的innerText值。
	     * IE11及W3C，如果没有指定value，那么node.value默认为node.text（存在trim作），但IE9-10则是取innerHTML(没trim操作)
	     */

	    function getOption(node) {
	        if (node.hasAttribute && node.hasAttribute('value')) {
	            return node.getAttribute('value');
	        }
	        var attr = node.getAttributeNode('value');
	        if (attr && attr.specified) {
	            return attr.value;
	        }
	        return node.innerHTML.trim();
	    }

	    var valHooks = {
	        'option:get': msie$1 ? getOption : function (node) {
	            return node.value;
	        },
	        'select:get': function selectGet(node, value) {
	            var option,
	                options = node.options,
	                index = node.selectedIndex,
	                getter = valHooks['option:get'],
	                one = node.type === 'select-one' || index < 0,
	                values = one ? null : [],
	                max = one ? index + 1 : options.length,
	                i = index < 0 ? max : one ? index : 0;
	            for (; i < max; i++) {
	                option = options[i];
	                //IE6-9在reset后不会改变selected，需要改用i === index判定
	                //我们过滤所有disabled的option元素，但在safari5下，
	                //如果设置optgroup为disable，那么其所有孩子都disable
	                //因此当一个元素为disable，需要检测其是否显式设置了disable及其父节点的disable情况
	                if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || option.parentNode.tagName !== 'OPTGROUP')) {
	                    value = getter(option);
	                    if (one) {
	                        return value;
	                    }
	                    //收集所有selected值组成数组返回
	                    values.push(value);
	                }
	            }
	            return values;
	        },
	        'select:set': function selectSet(node, values, optionSet) {
	            values = [].concat(values); //强制转换为数组
	            var getter = valHooks['option:get'];
	            for (var i = 0, el; el = node.options[i++];) {
	                if (el.selected = values.indexOf(getter(el)) > -1) {
	                    optionSet = true;
	                }
	            }
	            if (!optionSet) {
	                node.selectedIndex = -1;
	            }
	        }
	    };

	    avalon.fn.val = function (value) {
	        var node = this[0];
	        if (node && node.nodeType === 1) {
	            var get = arguments.length === 0;
	            var access = get ? ':get' : ':set';
	            var fn = valHooks[getDuplexType(node) + access];
	            if (fn) {
	                var val = fn(node, value);
	            } else if (get) {
	                return (node.value || '').replace(/\r/g, '');
	            } else {
	                node.value = value;
	            }
	        }
	        return get ? val : this;
	    };

	    var voidTag = {
	        area: 1,
	        base: 1,
	        basefont: 1,
	        bgsound: 1,
	        br: 1,
	        col: 1,
	        command: 1,
	        embed: 1,
	        frame: 1,
	        hr: 1,
	        img: 1,
	        input: 1,
	        keygen: 1,
	        link: 1,
	        meta: 1,
	        param: 1,
	        source: 1,
	        track: 1,
	        wbr: 1
	    };

	    function makeObject(str) {
	        return oneObject(str + ',template,#document-fragment,#comment');
	    }
	    var pNestChild = oneObject('div,ul,ol,dl,table,h1,h2,h3,h4,h5,h6,form,fieldset');
	    var tNestChild = makeObject('tr,style,script');
	    var nestObject = {
	        p: pNestChild,
	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
	        select: makeObject('option,optgroup,#text'),
	        optgroup: makeObject('option,#text'),
	        option: makeObject('#text'),
	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
	        // No special behavior since these rules fall back to "in body" mode for
	        // all except special table nodes which cause bad parsing behavior anyway.

	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
	        tr: makeObject('th,td,style,script'),

	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
	        tbody: tNestChild,
	        tfoot: tNestChild,
	        thead: tNestChild,
	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
	        colgroup: makeObject('col'),
	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
	        // table: oneObject('caption,colgroup,tbody,thead,tfoot,style,script,template,#document-fragment'),
	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
	        head: makeObject('base,basefont,bgsound,link,style,script,meta,title,noscript,noframes'),
	        // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
	        html: oneObject('head,body')
	    };

	    /**
	     * ------------------------------------------------------------
	     * avalon2.2.6的新式lexer
	     * 将字符串变成一个虚拟DOM树,方便以后进一步变成模板函数
	     * 此阶段只会生成VElement,VText,VComment
	     * ------------------------------------------------------------
	     */
	    var specalTag = { xmp: 1, style: 1, script: 1, noscript: 1, textarea: 1, '#comment': 1, template: 1 };
	    var hiddenTag = { style: 1, script: 1, noscript: 1, template: 1 };
	    var rcontent = /\S/; //判定里面有没有内容
	    var rsp = /\s/;
	    function fromString(str) {
	        return from(str);
	    }
	    avalon.lexer = fromString;

	    var strCache = new Cache(100);

	    function from(str) {
	        var cacheKey = str;
	        var cached = strCache.get(cacheKey);
	        if (cached) {
	            return avalon.mix(true, [], cached);
	        }

	        var ret = parse(str, false);
	        strCache.put(cacheKey, avalon.mix(true, [], ret));
	        return ret;
	    }

	    /**
	     * 
	     * 
	     * @param {any} string 
	     * @param {any} getOne 只返回一个节点
	     * @returns 
	     */
	    function parse(string, getOne) {
	        getOne = getOne === void 666 || getOne === true;
	        var ret = lexer(string, getOne);
	        if (getOne) {
	            return typeof ret[0] === 'string' ? ret[1] : ret[0];
	        }
	        return ret;
	    }

	    function lexer(string, getOne) {
	        var tokens = [];
	        var breakIndex = 9990;
	        var stack = [];
	        var origString = string;
	        var origLength = string.length;

	        stack.last = function () {
	            return stack[stack.length - 1];
	        };
	        var ret = [];

	        function addNode(node) {
	            var p = stack.last();
	            if (p && p.children) {
	                p.children.push(node);
	            } else {
	                ret.push(node);
	            }
	        }

	        var lastNode;
	        do {
	            if (--breakIndex === 0) {
	                break;
	            }
	            var arr = getCloseTag(string);

	            if (arr) {
	                //处理关闭标签
	                string = string.replace(arr[0], '');
	                var _node = stack.pop();
	                if (!_node) {
	                    throw '是不是有属性值没有用引号括起';
	                }
	                //处理下面两种特殊情况：
	                //1. option会自动移除元素节点，将它们的nodeValue组成新的文本节点
	                //2. table会将没有被thead, tbody, tfoot包起来的tr或文本节点，收集到一个新的tbody元素中

	                if (_node.nodeName === 'option') {
	                    _node.children = [{
	                        nodeName: '#text',
	                        nodeValue: getText(_node)
	                    }];
	                } else if (_node.nodeName === 'table') {
	                    insertTbody(_node.children);
	                }
	                lastNode = null;
	                if (getOne && ret.length === 1 && !stack.length) {
	                    return [origString.slice(0, origLength - string.length), ret[0]];
	                }
	                continue;
	            }

	            var arr = getOpenTag(string);
	            if (arr) {
	                string = string.replace(arr[0], '');
	                var node = arr[1];
	                addNode(node);
	                var selfClose = !!(node.isVoidTag || specalTag[node.nodeName]);
	                if (!selfClose) {
	                    //放到这里可以添加孩子
	                    stack.push(node);
	                }
	                if (getOne && selfClose && !stack.length) {
	                    return [origString.slice(0, origLength - string.length), node];
	                }
	                lastNode = node;
	                continue;
	            }

	            var text = '';
	            do {
	                //处理<div><<<<<<div>的情况
	                var _index = string.indexOf('<');
	                if (_index === 0) {
	                    text += string.slice(0, 1);
	                    string = string.slice(1);
	                } else {
	                    break;
	                }
	            } while (string.length);

	            //处理<div>{aaa}</div>,<div>xxx{aaa}xxx</div>,<div>xxx</div>{aaa}sss的情况
	            var index = string.indexOf('<'); //判定它后面是否存在标签
	            if (index === -1) {
	                text = string;
	                string = '';
	            } else {
	                var openIndex = string.indexOf(config.openTag);

	                if (openIndex !== -1 && openIndex < index) {
	                    if (openIndex !== 0) {
	                        text += string.slice(0, openIndex);
	                    }
	                    var dirString = string.slice(openIndex);
	                    var textDir = parseTextDir(dirString);
	                    text += textDir;
	                    string = dirString.slice(textDir.length);
	                } else {
	                    text += string.slice(0, index);
	                    string = string.slice(index);
	                }
	            }
	            var mayNode = addText(lastNode, text, addNode);
	            if (mayNode) {
	                lastNode = mayNode;
	            }
	        } while (string.length);
	        return ret;
	    }

	    function addText(lastNode, text, addNode) {
	        if (rcontent.test(text)) {
	            if (lastNode && lastNode.nodeName === '#text') {
	                lastNode.nodeValue += text;
	                return lastNode;
	            } else {
	                lastNode = {
	                    nodeName: '#text',
	                    nodeValue: text
	                };
	                addNode(lastNode);
	                return lastNode;
	            }
	        }
	    }

	    function parseTextDir(string) {
	        var closeTag = config.closeTag;
	        var openTag = config.openTag;
	        var closeTagFirst = closeTag.charAt(0);
	        var closeTagLength = closeTag.length;
	        var state = 'code',
	            quote$$1,
	            escape;
	        for (var i = openTag.length, n = string.length; i < n; i++) {

	            var c = string.charAt(i);
	            switch (state) {
	                case 'code':
	                    if (c === '"' || c === "'") {
	                        state = 'string';
	                        quote$$1 = c;
	                    } else if (c === closeTagFirst) {
	                        //如果遇到}
	                        if (string.substr(i, closeTagLength) === closeTag) {
	                            return string.slice(0, i + closeTagLength);
	                        }
	                    }
	                    break;
	                case 'string':
	                    if (c === '\\' && /"'/.test(string.charAt(i + 1))) {
	                        escape = !escape;
	                    }
	                    if (c === quote$$1 && !escape) {
	                        state = 'code';
	                    }
	                    break;
	            }
	        }
	        throw '找不到界定符' + closeTag;
	    }

	    var rtbody = /^(tbody|thead|tfoot)$/;

	    function insertTbody(nodes) {
	        var tbody = false;
	        for (var i = 0, n = nodes.length; i < n; i++) {
	            var node = nodes[i];
	            if (rtbody.test(node.nodeName)) {
	                tbody = false;
	                continue;
	            }

	            if (node.nodeName === 'tr') {
	                if (tbody) {
	                    nodes.splice(i, 1);
	                    tbody.children.push(node);
	                    n--;
	                    i--;
	                } else {
	                    tbody = {
	                        nodeName: 'tbody',
	                        props: {},
	                        children: [node]
	                    };
	                    nodes.splice(i, 1, tbody);
	                }
	            } else {
	                if (tbody) {
	                    nodes.splice(i, 1);
	                    tbody.children.push(node);
	                    n--;
	                    i--;
	                }
	            }
	        }
	    }

	    //<div>{{<div/>}}</div>
	    function getCloseTag(string) {
	        if (string.indexOf("</") === 0) {
	            var match = string.match(/\<\/(\w+[^\s\/\>]*)>/);
	            if (match) {
	                var tag = match[1];
	                string = string.slice(3 + tag.length);
	                return [match[0], {
	                    nodeName: tag
	                }];
	            }
	        }
	        return null;
	    }
	    var ropenTag = /\<(\w[^\s\/\>]*)/;

	    function getOpenTag(string) {
	        if (string.indexOf("<") === 0) {
	            var i = string.indexOf('<!--'); //处理注释节点
	            if (i === 0) {
	                var l = string.indexOf('-->');
	                if (l === -1) {
	                    thow('注释节点没有闭合 ' + string.slice(0, 100));
	                }
	                var node = {
	                    nodeName: '#comment',
	                    nodeValue: string.slice(4, l)
	                };
	                return [string.slice(0, l + 3), node];
	            }
	            var match = string.match(ropenTag); //处理元素节点
	            if (match) {
	                var leftContent = match[0],
	                    tag = match[1];
	                var node = {
	                    nodeName: tag,
	                    props: {},
	                    children: []
	                };

	                string = string.replace(leftContent, ''); //去掉标签名(rightContent)
	                try {
	                    var arr = getAttrs(string); //处理属性
	                } catch (e) {}
	                if (arr) {
	                    node.props = arr[1];
	                    string = string.replace(arr[0], '');
	                    leftContent += arr[0];
	                }

	                if (string.charAt(0) === '>') {
	                    //处理开标签的边界符
	                    leftContent += '>';
	                    string = string.slice(1);
	                    if (voidTag[node.nodeName]) {
	                        node.isVoidTag = true;
	                    }
	                } else if (string.slice(0, 2) === '/>') {
	                    //处理开标签的边界符
	                    leftContent += '/>';
	                    string = string.slice(2);
	                    node.isVoidTag = true;
	                }

	                if (!node.isVoidTag && specalTag[tag]) {
	                    //如果是script, style, xmp等元素
	                    var closeTag = '</' + tag + '>';
	                    var j = string.indexOf(closeTag);
	                    var nodeValue = string.slice(0, j);
	                    leftContent += nodeValue + closeTag;
	                    node.children.push({
	                        nodeName: '#text',
	                        nodeValue: nodeValue
	                    });
	                    if (tag === 'textarea') {
	                        node.props.type = tag;
	                        node.props.value = nodeValue;
	                    }
	                }
	                return [leftContent, node];
	            }
	        }
	    }

	    function getText(node) {
	        var ret = '';
	        node.children.forEach(function (el) {
	            if (el.nodeName === '#text') {
	                ret += el.nodeValue;
	            } else if (el.children && !hiddenTag[el.nodeName]) {
	                ret += getText(el);
	            }
	        });
	        return ret;
	    }

	    function getAttrs(string) {
	        var state = 'AttrName',
	            attrName = '',
	            attrValue = '',
	            quote$$1,
	            escape,
	            props = {};
	        for (var i = 0, n = string.length; i < n; i++) {
	            var c = string.charAt(i);
	            switch (state) {
	                case 'AttrName':
	                    if (c === '/' && string.charAt(i + 1) === '>' || c === '>') {
	                        if (attrName) props[attrName] = attrName;
	                        return [string.slice(0, i), props];
	                    }
	                    if (rsp.test(c)) {
	                        if (attrName) {
	                            state = 'AttrEqual';
	                        }
	                    } else if (c === '=') {
	                        if (!attrName) {
	                            throw '必须指定属性名';
	                        }
	                        state = 'AttrQuote';
	                    } else {
	                        attrName += c;
	                    }
	                    break;
	                case 'AttrEqual':
	                    if (c === '=') {
	                        state = 'AttrQuote';
	                    } else if (rcontent.test(c)) {
	                        props[attrName] = attrName;
	                        attrName = c;
	                        state = 'AttrName';
	                    }
	                    break;
	                case 'AttrQuote':
	                    if (c === '"' || c === "'") {
	                        quote$$1 = c;
	                        state = 'AttrValue';
	                        escape = false;
	                    }
	                    break;
	                case 'AttrValue':
	                    if (c === '\\' && /"'/.test(string.charAt(i + 1))) {
	                        escape = !escape;
	                    }
	                    if (c === '\n') {
	                        break;
	                    }
	                    if (c !== quote$$1) {
	                        attrValue += c;
	                    } else if (c === quote$$1 && !escape) {
	                        props[attrName] = attrValue;
	                        attrName = attrValue = '';
	                        state = 'AttrName';
	                    }
	                    break;
	            }
	        }
	        throw '必须关闭标签';
	    }

	    var rhtml = /<|&#?\w+;/;
	    var htmlCache = new Cache(128);
	    var rxhtml = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig;

	    avalon.parseHTML = function (html) {
	        var fragment = createFragment();
	        //处理非字符串
	        if (typeof html !== 'string') {
	            return fragment;
	        }
	        //处理非HTML字符串
	        if (!rhtml.test(html)) {
	            return document$1.createTextNode(html);
	        }

	        html = html.replace(rxhtml, '<$1></$2>').trim();
	        var hasCache = htmlCache.get(html);
	        if (hasCache) {
	            return avalon.cloneNode(hasCache);
	        }
	        var vnodes = fromString(html);
	        for (var i = 0, el; el = vnodes[i++];) {
	            var child = avalon.vdom(el, 'toDOM');
	            fragment.appendChild(child);
	        }
	        if (html.length < 1024) {
	            htmlCache.put(html, fragment);
	        }
	        return fragment;
	    };

	    avalon.innerHTML = function (node, html) {
	        var parsed = avalon.parseHTML(html);
	        this.clearHTML(node);
	        node.appendChild(parsed);
	    };

	    //https://github.com/karloespiritu/escapehtmlent/blob/master/index.js
	    avalon.unescapeHTML = function (html) {
	        return String(html).replace(/&quot;/g, '"').replace(/&#39;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
	    };

	    avalon.clearHTML = function (node) {
	        /* istanbul ignore next */
	        while (node.lastChild) {
	            node.removeChild(node.lastChild);
	        }
	        return node;
	    };

	    //http://www.feiesoft.com/html/events.html
	    //http://segmentfault.com/q/1010000000687977/a-1020000000688757
	    var canBubbleUp = {
	        click: true,
	        dblclick: true,
	        keydown: true,
	        keypress: true,
	        keyup: true,
	        mousedown: true,
	        mousemove: true,
	        mouseup: true,
	        mouseover: true,
	        mouseout: true,
	        wheel: true,
	        mousewheel: true,
	        input: true,
	        change: true,
	        beforeinput: true,
	        compositionstart: true,
	        compositionupdate: true,
	        compositionend: true,
	        select: true,
	        //http://blog.csdn.net/lee_magnum/article/details/17761441
	        cut: true,
	        copy: true,
	        paste: true,
	        beforecut: true,
	        beforecopy: true,
	        beforepaste: true,
	        focusin: true,
	        focusout: true,
	        DOMFocusIn: true,
	        DOMFocusOut: true,
	        DOMActivate: true,
	        dragend: true,
	        datasetchanged: true
	    };

	    /* istanbul ignore if */
	    var hackSafari = avalon.modern && document$1.ontouchstart;

	    //添加fn.bind, fn.unbind, bind, unbind
	    avalon.fn.bind = function (type, fn, phase) {
	        if (this[0]) {
	            //此方法不会链
	            return avalon.bind(this[0], type, fn, phase);
	        }
	    };

	    avalon.fn.unbind = function (type, fn, phase) {
	        if (this[0]) {
	            var args = _slice.call(arguments);
	            args.unshift(this[0]);
	            avalon.unbind.apply(0, args);
	        }
	        return this;
	    };

	    /*绑定事件*/
	    avalon.bind = function (elem, type, fn) {
	        if (elem.nodeType === 1) {
	            var value = elem.getAttribute('avalon-events') || '';
	            //如果是使用ms-on-*绑定的回调,其uuid格式为e12122324,
	            //如果是使用bind方法绑定的回调,其uuid格式为_12
	            var uuid = getShortID(fn);
	            var hook = eventHooks[type];
	            /* istanbul ignore if */
	            if (type === 'click' && hackSafari) {
	                elem.addEventListener('click', avalon.noop);
	            }
	            /* istanbul ignore if */
	            if (hook) {
	                type = hook.type || type;
	                if (hook.fix) {
	                    fn = hook.fix(elem, fn);
	                    fn.uuid = uuid;
	                }
	            }
	            var key = type + ':' + uuid;
	            avalon.eventListeners[fn.uuid] = fn;
	            /* istanbul ignore if */
	            if (value.indexOf(type + ':') === -1) {
	                //同一种事件只绑定一次
	                if (canBubbleUp[type] || avalon.modern && focusBlur[type]) {
	                    delegateEvent(type);
	                } else {
	                    avalon._nativeBind(elem, type, dispatch);
	                }
	            }
	            var keys = value.split(',');
	            /* istanbul ignore if */
	            if (keys[0] === '') {
	                keys.shift();
	            }
	            if (keys.indexOf(key) === -1) {
	                keys.push(key);
	                setEventId(elem, keys.join(','));
	                //将令牌放进avalon-events属性中
	            }
	            return fn;
	        } else {
	            /* istanbul ignore next */
	            var cb = function cb(e) {
	                fn.call(elem, new avEvent(e));
	            };

	            avalon._nativeBind(elem, type, cb);
	            return cb;
	        }
	    };

	    function setEventId(node, value) {
	        node.setAttribute('avalon-events', value);
	    }
	    /* istanbul ignore next */
	    avalon.unbind = function (elem, type, fn) {
	        if (elem.nodeType === 1) {
	            var value = elem.getAttribute('avalon-events') || '';
	            switch (arguments.length) {
	                case 1:
	                    avalon._nativeUnBind(elem, type, dispatch);
	                    elem.removeAttribute('avalon-events');
	                    break;
	                case 2:
	                    value = value.split(',').filter(function (str) {
	                        return str.indexOf(type + ':') === -1;
	                    }).join(',');
	                    setEventId(elem, value);
	                    break;
	                default:
	                    var search = type + ':' + fn.uuid;
	                    value = value.split(',').filter(function (str) {
	                        return str !== search;
	                    }).join(',');
	                    setEventId(elem, value);
	                    delete avalon.eventListeners[fn.uuid];
	                    break;
	            }
	        } else {
	            avalon._nativeUnBind(elem, type, fn);
	        }
	    };

	    var typeRegExp = {};

	    function collectHandlers(elem, type, handlers) {
	        var value = elem.getAttribute('avalon-events');
	        if (value && (elem.disabled !== true || type !== 'click')) {
	            var uuids = [];
	            var reg = typeRegExp[type] || (typeRegExp[type] = new RegExp("\\b" + type + '\\:([^,\\s]+)', 'g'));
	            value.replace(reg, function (a, b) {
	                uuids.push(b);
	                return a;
	            });
	            if (uuids.length) {
	                handlers.push({
	                    elem: elem,
	                    uuids: uuids
	                });
	            }
	        }
	        elem = elem.parentNode;
	        var g = avalon.gestureEvents || {};
	        if (elem && elem.getAttribute && (canBubbleUp[type] || g[type])) {
	            collectHandlers(elem, type, handlers);
	        }
	    }

	    var rhandleHasVm = /^e/;

	    function dispatch(event) {
	        event = new avEvent(event);
	        var type = event.type;
	        var elem = event.target;
	        var handlers = [];
	        collectHandlers(elem, type, handlers);
	        var i = 0,
	            j,
	            uuid,
	            handler;
	        while ((handler = handlers[i++]) && !event.cancelBubble) {
	            var host = event.currentTarget = handler.elem;
	            j = 0;
	            while (uuid = handler.uuids[j++]) {
	                if (event.stopImmediate) {
	                    break;
	                }
	                var fn = avalon.eventListeners[uuid];
	                if (fn) {
	                    var vm = rhandleHasVm.test(uuid) ? handler.elem._ms_context_ : 0;
	                    if (vm && vm.$hashcode === false) {
	                        return avalon.unbind(elem, type, fn);
	                    }
	                    var ret = fn.call(vm || elem, event);

	                    if (ret === false) {
	                        event.preventDefault();
	                        event.stopPropagation();
	                    }
	                }
	            }
	        }
	    }

	    var focusBlur = {
	        focus: true,
	        blur: true
	    };

	    function delegateEvent(type) {
	        var value = root.getAttribute('delegate-events') || '';
	        if (value.indexOf(type) === -1) {
	            //IE6-8会多次绑定同种类型的同一个函数,其他游览器不会
	            var arr = value.match(avalon.rword) || [];
	            arr.push(type);
	            root.setAttribute('delegate-events', arr.join(','));
	            avalon._nativeBind(root, type, dispatch, !!focusBlur[type]);
	        }
	    }

	    var eventProto = {
	        webkitMovementY: 1,
	        webkitMovementX: 1,
	        keyLocation: 1,
	        fixEvent: function fixEvent() {},
	        preventDefault: function preventDefault() {
	            var e = this.originalEvent || {};
	            e.returnValue = this.returnValue = false;
	            if (modern && e.preventDefault) {
	                e.preventDefault();
	            }
	        },
	        stopPropagation: function stopPropagation() {
	            var e = this.originalEvent || {};
	            e.cancelBubble = this.cancelBubble = true;
	            if (modern && e.stopPropagation) {
	                e.stopPropagation();
	            }
	        },
	        stopImmediatePropagation: function stopImmediatePropagation() {
	            this.stopPropagation();
	            this.stopImmediate = true;
	        },
	        toString: function toString() {
	            return '[object Event]'; //#1619
	        }
	    };

	    function avEvent(event) {
	        if (event.originalEvent) {
	            return event;
	        }
	        for (var i in event) {
	            if (!eventProto[i]) {
	                this[i] = event[i];
	            }
	        }
	        if (!this.target) {
	            this.target = event.srcElement;
	        }
	        var target = this.target;
	        this.fixEvent();
	        this.timeStamp = new Date() - 0;
	        this.originalEvent = event;
	    }
	    avEvent.prototype = eventProto;
	    //针对firefox, chrome修正mouseenter, mouseleave
	    /* istanbul ignore if */
	    if (!('onmouseenter' in root)) {
	        avalon.each({
	            mouseenter: 'mouseover',
	            mouseleave: 'mouseout'
	        }, function (origType, fixType) {
	            eventHooks[origType] = {
	                type: fixType,
	                fix: function fix(elem, fn) {
	                    return function (e) {
	                        var t = e.relatedTarget;
	                        if (!t || t !== elem && !(elem.compareDocumentPosition(t) & 16)) {
	                            delete e.type;
	                            e.type = origType;
	                            return fn.apply(this, arguments);
	                        }
	                    };
	                }
	            };
	        });
	    }
	    //针对IE9+, w3c修正animationend
	    avalon.each({
	        AnimationEvent: 'animationend',
	        WebKitAnimationEvent: 'webkitAnimationEnd'
	    }, function (construct, fixType) {
	        if (window$1[construct] && !eventHooks.animationend) {
	            eventHooks.animationend = {
	                type: fixType
	            };
	        }
	    });

	    /* istanbul ignore if */
	    if (!("onmousewheel" in document$1)) {
	        /* IE6-11 chrome mousewheel wheelDetla 下 -120 上 120
	         firefox DOMMouseScroll detail 下3 上-3
	         firefox wheel detlaY 下3 上-3
	         IE9-11 wheel deltaY 下40 上-40
	         chrome wheel deltaY 下100 上-100 */
	        var fixWheelType = document$1.onwheel !== void 0 ? 'wheel' : 'DOMMouseScroll';
	        var fixWheelDelta = fixWheelType === 'wheel' ? 'deltaY' : 'detail';
	        eventHooks.mousewheel = {
	            type: fixWheelType,
	            fix: function fix(elem, fn) {
	                return function (e) {
	                    var delta = e[fixWheelDelta] > 0 ? -120 : 120;
	                    e.wheelDelta = ~~elem._ms_wheel_ + delta;
	                    elem._ms_wheel_ = e.wheelDeltaY = e.wheelDelta;
	                    e.wheelDeltaX = 0;
	                    if (Object.defineProperty) {
	                        Object.defineProperty(e, 'type', {
	                            value: 'mousewheel'
	                        });
	                    }
	                    return fn.apply(this, arguments);
	                };
	            }
	        };
	    }

	    /* istanbul ignore if */
	    if (!modern) {
	        delete canBubbleUp.change;
	        delete canBubbleUp.select;
	    }
	    /* istanbul ignore next */
	    avalon._nativeBind = modern ? function (el, type, fn, capture) {
	        el.addEventListener(type, fn, !!capture);
	    } : function (el, type, fn) {
	        el.attachEvent('on' + type, fn);
	    };
	    /* istanbul ignore next */
	    avalon._nativeUnBind = modern ? function (el, type, fn, a) {
	        el.removeEventListener(type, fn, !!a);
	    } : function (el, type, fn) {
	        el.detachEvent('on' + type, fn);
	    };
	    /* istanbul ignore next */
	    avalon.fireDom = function (elem, type, opts) {
	        if (document$1.createEvent) {
	            var hackEvent = document$1.createEvent('Events');
	            hackEvent.initEvent(type, true, true, opts);
	            avalon.shadowCopy(hackEvent, opts);
	            elem.dispatchEvent(hackEvent);
	        } else if (root.contains(elem)) {
	            //IE6-8触发事件必须保证在DOM树中,否则报'SCRIPT16389: 未指明的错误'
	            hackEvent = document$1.createEventObject();
	            if (opts) avalon.shadowCopy(hackEvent, opts);
	            try {
	                elem.fireEvent('on' + type, hackEvent);
	            } catch (e) {
	                avalon.log('fireDom', type, 'args error');
	            }
	        }
	    };

	    var rmouseEvent = /^(?:mouse|contextmenu|drag)|click/;
	    /* istanbul ignore next */
	    avEvent.prototype.fixEvent = function () {
	        var event = this;
	        if (event.which == null && event.type.indexOf('key') === 0) {
	            event.which = event.charCode != null ? event.charCode : event.keyCode;
	        }
	        if (rmouseEvent.test(event.type) && !('pageX' in event)) {
	            var DOC = event.target.ownerDocument || document$1;
	            var box = DOC.compatMode === 'BackCompat' ? DOC.body : DOC.documentElement;
	            event.pageX = event.clientX + (box.scrollLeft >> 0) - (box.clientLeft >> 0);
	            event.pageY = event.clientY + (box.scrollTop >> 0) - (box.clientTop >> 0);
	            event.wheelDeltaY = ~~event.wheelDelta;
	            event.wheelDeltaX = 0;
	        }
	    };

	    //针对IE6-8修正input
	    /* istanbul ignore if */
	    if (!('oninput' in document$1.createElement('input'))) {
	        eventHooks.input = {
	            type: 'propertychange',
	            fix: function fix(elem, fn) {
	                return function (e) {
	                    if (e.propertyName === 'value') {
	                        e.type = 'input';
	                        return fn.apply(this, arguments);
	                    }
	                };
	            }
	        };
	    }

	    var readyList = [];

	    function fireReady(fn) {
	        avalon.isReady = true;
	        while (fn = readyList.shift()) {
	            fn(avalon);
	        }
	    }

	    avalon.ready = function (fn) {
	        readyList.push(fn);
	        if (avalon.isReady) {
	            fireReady();
	        }
	    };

	    avalon.ready(function () {
	        avalon.scan && avalon.scan(document$1.body);
	    });

	    /* istanbul ignore next */
	    function bootstrap() {
	        function doScrollCheck() {
	            try {
	                //IE下通过doScrollCheck检测DOM树是否建完
	                root.doScroll('left');
	                fireReady();
	            } catch (e) {
	                setTimeout(doScrollCheck);
	            }
	        }
	        if (document$1.readyState === 'complete') {
	            setTimeout(fireReady); //如果在domReady之外加载
	        } else if (document$1.addEventListener) {
	            document$1.addEventListener('DOMContentLoaded', fireReady, false);
	        } else if (document$1.attachEvent) {
	            //必须传入三个参数，否则在firefox4-26中报错
	            //caught exception: [Exception... "Not enough arguments"  nsresult: "0x
	            document$1.attachEvent('onreadystatechange', function () {
	                if (document$1.readyState === 'complete') {
	                    fireReady();
	                }
	            });
	            try {
	                var isTop = window$1.frameElement === null;
	            } catch (e) {}
	            if (root.doScroll && isTop && window$1.external) {
	                //fix IE iframe BUG
	                doScrollCheck();
	            }
	        }

	        avalon.bind(window$1, 'load', fireReady);
	    }
	    if (inBrowser) {
	        bootstrap();
	    }

	    /**
	     * ------------------------------------------------------------
	     *                          DOM Api
	     * shim,class,data,css,val,html,event,ready  
	     * ------------------------------------------------------------
	     */

	    var orphanTag = {
	        script: 1,
	        style: 1,
	        textarea: 1,
	        xmp: 1,
	        noscript: 1,
	        template: 1
	    };

	    /* 
	     *  此模块只用于文本转虚拟DOM, 
	     *  因为在真实浏览器会对我们的HTML做更多处理,
	     *  如, 添加额外属性, 改变结构
	     *  此模块就是用于模拟这些行为
	     */
	    function makeOrphan(node, nodeName, innerHTML) {
	        switch (nodeName) {
	            case 'style':
	            case 'script':
	            case 'noscript':
	            case 'template':
	            case 'xmp':
	                node.children = [{
	                    nodeName: '#text',
	                    nodeValue: innerHTML
	                }];
	                break;
	            case 'textarea':
	                var props = node.props;
	                props.type = nodeName;
	                props.value = innerHTML;
	                node.children = [{
	                    nodeName: '#text',
	                    nodeValue: innerHTML
	                }];
	                break;
	            case 'option':
	                node.children = [{
	                    nodeName: '#text',
	                    nodeValue: trimHTML(innerHTML)
	                }];
	                break;
	        }
	    }

	    //专门用于处理option标签里面的标签
	    var rtrimHTML = /<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi;
	    function trimHTML(v) {
	        return String(v).replace(rtrimHTML, '').trim();
	    }

	    //widget rule duplex validate

	    function fromDOM(dom) {
	        return [from$1(dom)];
	    }

	    function from$1(node) {
	        var type = node.nodeName.toLowerCase();
	        switch (type) {
	            case '#text':
	            case '#comment':
	                return {
	                    nodeName: type,
	                    dom: node,
	                    nodeValue: node.nodeValue
	                };
	            default:
	                var props = markProps(node, node.attributes || []);
	                var vnode = {
	                    nodeName: type,
	                    dom: node,
	                    isVoidTag: !!voidTag[type],
	                    props: props
	                };
	                if (type === 'option') {
	                    //即便你设置了option.selected = true,
	                    //option.attributes也找不到selected属性
	                    props.selected = node.selected;
	                }
	                if (orphanTag[type] || type === 'option') {
	                    makeOrphan(vnode, type, node.text || node.innerHTML);
	                    if (node.childNodes.length === 1) {
	                        vnode.children[0].dom = node.firstChild;
	                    }
	                } else if (!vnode.isVoidTag) {
	                    vnode.children = [];
	                    for (var i = 0, el; el = node.childNodes[i++];) {
	                        var child = from$1(el);
	                        if (/\S/.test(child.nodeValue)) {
	                            vnode.children.push(child);
	                        }
	                    }
	                }
	                return vnode;
	        }
	    }

	    var rformElement = /input|textarea|select/i;

	    function markProps(node, attrs) {
	        var ret = {};
	        for (var i = 0, n = attrs.length; i < n; i++) {
	            var attr = attrs[i];
	            if (attr.specified) {
	                //IE6-9不会将属性名变小写,比如它会将用户的contenteditable变成contentEditable
	                ret[attr.name.toLowerCase()] = attr.value;
	            }
	        }
	        if (rformElement.test(node.nodeName)) {
	            ret.type = node.type;
	            var a = node.getAttributeNode('value');
	            if (a && /\S/.test(a.value)) {
	                //IE6,7中无法取得checkbox,radio的value
	                ret.value = a.value;
	            }
	        }
	        var style = node.style.cssText;
	        if (style) {
	            ret.style = style;
	        }
	        //类名 = 去重(静态类名+动态类名+ hover类名? + active类名)
	        if (ret.type === 'select-one') {
	            ret.selectedIndex = node.selectedIndex;
	        }
	        return ret;
	    }

	    function VText(text) {
	        this.nodeName = '#text';
	        this.nodeValue = text;
	    }

	    VText.prototype = {
	        constructor: VText,
	        toDOM: function toDOM() {
	            /* istanbul ignore if*/
	            if (this.dom) return this.dom;
	            var v = avalon._decode(this.nodeValue);
	            return this.dom = document$1.createTextNode(v);
	        },
	        toHTML: function toHTML() {
	            return this.nodeValue;
	        }
	    };

	    function VComment(text) {
	        this.nodeName = '#comment';
	        this.nodeValue = text;
	    }
	    VComment.prototype = {
	        constructor: VComment,
	        toDOM: function toDOM() {
	            if (this.dom) return this.dom;
	            return this.dom = document$1.createComment(this.nodeValue);
	        },
	        toHTML: function toHTML() {
	            return '<!--' + this.nodeValue + '-->';
	        }
	    };

	    function VElement(type, props, children, isVoidTag) {
	        this.nodeName = type;
	        this.props = props;
	        this.children = children;
	        this.isVoidTag = isVoidTag;
	    }
	    VElement.prototype = {
	        constructor: VElement,
	        toDOM: function toDOM() {
	            if (this.dom) return this.dom;
	            var dom,
	                tagName = this.nodeName;
	            if (avalon.modern && svgTags[tagName]) {
	                dom = createSVG(tagName);
	                /* istanbul ignore next*/
	            } else if (!avalon.modern && (VMLTags[tagName] || rvml.test(tagName))) {
	                dom = createVML(tagName);
	            } else {
	                dom = document$1.createElement(tagName);
	            }

	            var props = this.props || {};

	            for (var i in props) {
	                var val = props[i];
	                if (skipFalseAndFunction(val)) {
	                    /* istanbul ignore if*/
	                    if (specalAttrs[i] && avalon.msie < 8) {
	                        specalAttrs[i](dom, val);
	                    } else {
	                        dom.setAttribute(i, val + '');
	                    }
	                }
	            }
	            var c = this.children || [];
	            var template = c[0] ? c[0].nodeValue : '';
	            switch (this.nodeName) {
	                case 'script':
	                    dom.type = 'noexec';
	                    dom.text = template;
	                    try {
	                        dom.innerHTML = template;
	                    } catch (e) {}
	                    dom.type = props.type || '';
	                    break;
	                case 'noscript':
	                    dom.textContent = template;
	                case 'style':
	                case 'xmp':
	                case 'template':
	                    try {
	                        dom.innerHTML = template;
	                    } catch (e) {
	                        /* istanbul ignore next*/
	                        hackIE(dom, this.nodeName, template);
	                    }
	                    break;
	                case 'option':
	                    //IE6-8,为option添加文本子节点,不会同步到text属性中
	                    /* istanbul ignore next */
	                    if (msie$1 < 9) dom.text = template;
	                default:
	                    /* istanbul ignore next */
	                    if (!this.isVoidTag && this.children) {
	                        this.children.forEach(function (el) {
	                            return c && dom.appendChild(avalon.vdom(c, 'toDOM'));
	                        });
	                    }
	                    break;
	            }
	            return this.dom = dom;
	        },

	        /* istanbul ignore next */

	        toHTML: function toHTML() {
	            var arr = [];
	            var props = this.props || {};
	            for (var i in props) {
	                var val = props[i];
	                if (skipFalseAndFunction(val)) {
	                    arr.push(i + '=' + avalon.quote(props[i] + ''));
	                }
	            }
	            arr = arr.length ? ' ' + arr.join(' ') : '';
	            var str = '<' + this.nodeName + arr;
	            if (this.isVoidTag) {
	                return str + '/>';
	            }
	            str += '>';
	            if (this.children) {
	                str += this.children.map(function (el) {
	                    return el ? avalon.vdom(el, 'toHTML') : '';
	                }).join('');
	            }
	            return str + '</' + this.nodeName + '>';
	        }
	    };
	    function hackIE(dom, nodeName, template) {
	        switch (nodeName) {
	            case 'style':
	                dom.setAttribute('type', 'text/css');
	                dom.styleSheet.cssText = template;
	                break;
	            case 'xmp': //IE6-8,XMP元素里面只能有文本节点,不能使用innerHTML
	            case 'noscript':
	                dom.textContent = template;
	                break;
	        }
	    }
	    function skipFalseAndFunction(a) {
	        return a !== false && Object(a) !== a;
	    }
	    /* istanbul ignore next */
	    var specalAttrs = {
	        "class": function _class(dom, val) {
	            dom.className = val;
	        },
	        style: function style(dom, val) {
	            dom.style.cssText = val;
	        },
	        type: function type(dom, val) {
	            try {
	                //textarea,button 元素在IE6,7设置 type 属性会抛错
	                dom.type = val;
	            } catch (e) {}
	        },
	        'for': function _for(dom, val) {
	            dom.setAttribute('for', val);
	            dom.htmlFor = val;
	        }
	    };

	    function createSVG(type) {
	        return document$1.createElementNS('http://www.w3.org/2000/svg', type);
	    }
	    var svgTags = avalon.oneObject('circle,defs,ellipse,image,line,' + 'path,polygon,polyline,rect,symbol,text,use,g,svg');

	    var rvml = /^\w+\:\w+/;
	    /* istanbul ignore next*/
	    function createVML(type) {
	        if (document$1.styleSheets.length < 31) {
	            document$1.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
	        } else {
	            // no more room, add to the existing one
	            // http://msdn.microsoft.com/en-us/library/ms531194%28VS.85%29.aspx
	            document$1.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
	        }
	        var arr = type.split(':');
	        if (arr.length === 1) {
	            arr.unshift('v');
	        }
	        var tag = arr[1];
	        var ns = arr[0];
	        if (!document$1.namespaces[ns]) {
	            document$1.namespaces.add(ns, "urn:schemas-microsoft-com:vml");
	        }
	        return document$1.createElement('<' + ns + ':' + tag + ' class="rvml">');
	    }

	    var VMLTags = avalon.oneObject('shape,line,polyline,rect,roundrect,oval,arc,' + 'curve,background,image,shapetype,group,fill,' + 'stroke,shadow, extrusion, textbox, imagedata, textpath');

	    function VFragment(children, key, val, index) {
	        this.nodeName = '#document-fragment';
	        this.children = children;
	        this.key = key;
	        this.val = val;
	        this.index = index;
	        this.props = {};
	    }
	    VFragment.prototype = {
	        constructor: VFragment,
	        toDOM: function toDOM() {
	            if (this.dom) return this.dom;
	            var f = this.toFragment();
	            //IE6-11 docment-fragment都没有children属性 
	            this.split = f.lastChild;
	            return this.dom = f;
	        },
	        dispose: function dispose() {
	            this.toFragment();
	            this.innerRender && this.innerRender.dispose();
	            for (var i in this) {
	                this[i] = null;
	            }
	        },
	        toFragment: function toFragment() {
	            var f = createFragment();
	            this.children.forEach(function (el) {
	                return f.appendChild(avalon.vdom(el, 'toDOM'));
	            });
	            return f;
	        },
	        toHTML: function toHTML() {
	            var c = this.children;
	            return c.map(function (el) {
	                return avalon.vdom(el, 'toHTML');
	            }).join('');
	        }
	    };

	    /**
	     * 虚拟DOM的4大构造器
	     */
	    avalon.mix(avalon, {
	        VText: VText,
	        VComment: VComment,
	        VElement: VElement,
	        VFragment: VFragment
	    });

	    var constNameMap = {
	        '#text': 'VText',
	        '#document-fragment': 'VFragment',
	        '#comment': 'VComment'
	    };

	    var vdom = avalon.vdomAdaptor = avalon.vdom = function (obj, method) {
	        if (!obj) {
	            //obj在ms-for循环里面可能是null
	            return method === "toHTML" ? '' : createFragment();
	        }
	        var nodeName = obj.nodeName;
	        if (!nodeName) {
	            return new avalon.VFragment(obj)[method]();
	        }
	        var constName = constNameMap[nodeName] || 'VElement';
	        return avalon[constName].prototype[method].call(obj);
	    };

	    avalon.domize = function (a) {
	        return avalon.vdom(a, 'toDOM');
	    };

	    avalon.pendingActions = [];
	    avalon.uniqActions = {};
	    avalon.inTransaction = 0;
	    config.trackDeps = false;
	    avalon.track = function () {
	        if (config.trackDeps) {
	            avalon.log.apply(avalon, arguments);
	        }
	    };

	    /**
	     * Batch is a pseudotransaction, just for purposes of memoizing ComputedValues when nothing else does.
	     * During a batch `onBecomeUnobserved` will be called at most once per observable.
	     * Avoids unnecessary recalculations.
	     */

	    function runActions() {
	        if (avalon.isRunningActions === true || avalon.inTransaction > 0) return;
	        avalon.isRunningActions = true;
	        var tasks = avalon.pendingActions.splice(0, avalon.pendingActions.length);
	        for (var i = 0, task; task = tasks[i++];) {
	            task.update();
	            delete avalon.uniqActions[task.uuid];
	        }
	        avalon.isRunningActions = false;
	    }

	    function propagateChanged(target) {
	        var list = target.observers;
	        for (var i = 0, el; el = list[i++];) {
	            el.schedule(); //通知action, computed做它们该做的事
	        }
	    }

	    //将自己抛到市场上卖
	    function reportObserved(target) {
	        var action = avalon.trackingAction || null;
	        if (action !== null) {

	            avalon.track('征收到', target.expr);
	            action.mapIDs[target.uuid] = target;
	        }
	    }

	    var targetStack = [];

	    function collectDeps(action, getter) {
	        if (!action.observers) return;
	        var preAction = avalon.trackingAction;
	        if (preAction) {
	            targetStack.push(preAction);
	        }
	        avalon.trackingAction = action;
	        avalon.track('【action】', action.type, action.expr, '开始征收依赖项');
	        //多个observe持有同一个action
	        action.mapIDs = {}; //重新收集依赖
	        var hasError = true,
	            result;
	        try {
	            result = getter.call(action);
	            hasError = false;
	        } finally {
	            if (hasError) {
	                avalon.warn('collectDeps fail', getter + '');
	                action.mapIDs = {};
	                avalon.trackingAction = preAction;
	            } else {
	                // 确保它总是为null
	                avalon.trackingAction = targetStack.pop();
	                try {
	                    resetDeps(action);
	                } catch (e) {
	                    avalon.warn(e);
	                }
	            }
	            return result;
	        }
	    }

	    function resetDeps(action) {
	        var prev = action.observers,
	            curr = [],
	            checked = {},
	            ids = [];
	        for (var i in action.mapIDs) {
	            var dep = action.mapIDs[i];
	            if (!dep.isAction) {
	                if (!dep.observers) {
	                    //如果它已经被销毁
	                    delete action.mapIDs[i];
	                    continue;
	                }
	                ids.push(dep.uuid);
	                curr.push(dep);
	                checked[dep.uuid] = 1;
	                if (dep.lastAccessedBy === action.uuid) {
	                    continue;
	                }
	                dep.lastAccessedBy = action.uuid;
	                avalon.Array.ensure(dep.observers, action);
	            }
	        }
	        var ids = ids.sort().join(',');
	        if (ids === action.ids) {
	            return;
	        }
	        action.ids = ids;
	        if (!action.isComputed) {
	            action.observers = curr;
	        } else {
	            action.depsCount = curr.length;
	            action.deps = avalon.mix({}, action.mapIDs);
	            action.depsVersion = {};
	            for (var _i in action.mapIDs) {
	                var _dep = action.mapIDs[_i];
	                action.depsVersion[_dep.uuid] = _dep.version;
	            }
	        }

	        for (var _i2 = 0, _dep2; _dep2 = prev[_i2++];) {
	            if (!checked[_dep2.uuid]) {
	                avalon.Array.remove(_dep2.observers, action);
	            }
	        }
	    }

	    function transaction(action, thisArg, args) {
	        args = args || [];
	        var name = 'transaction ' + (action.name || action.displayName || 'noop');
	        transactionStart(name);
	        var res = action.apply(thisArg, args);
	        transactionEnd(name);
	        return res;
	    }
	    avalon.transaction = transaction;

	    function transactionStart(name) {
	        avalon.inTransaction += 1;
	    }

	    function transactionEnd(name) {
	        if (--avalon.inTransaction === 0) {
	            avalon.isRunningActions = false;
	            runActions();
	        }
	    }

	    /* 
	     * 将要检测的字符串的字符串替换成??123这样的格式
	     */
	    var stringNum = 0;
	    var stringPool = {
	        map: {}
	    };
	    var rfill = /\?\?\d+/g;
	    function dig(a) {
	        var key = '??' + stringNum++;
	        stringPool.map[key] = a;
	        return key + ' ';
	    }
	    function fill(a) {
	        var val = stringPool.map[a];
	        return val;
	    }
	    function clearString(str) {
	        var array = readString(str);
	        for (var i = 0, n = array.length; i < n; i++) {
	            str = str.replace(array[i], dig);
	        }
	        return str;
	    }
	    //https://github.com/RubyLouvre/avalon/issues/1944
	    function readString(str, i, ret) {
	        var end = false,
	            s = 0,
	            i = i || 0;
	        ret = ret || [];
	        for (var n = str.length; i < n; i++) {
	            var c = str.charAt(i);
	            if (!end) {
	                if (c === "'") {
	                    end = "'";
	                    s = i;
	                } else if (c === '"') {
	                    end = '"';
	                    s = i;
	                }
	            } else {
	                if (c === end) {
	                    ret.push(str.slice(s, i + 1));
	                    end = false;
	                }
	            }
	        }
	        if (end !== false) {
	            return readString(str, s + 1, ret);
	        }
	        return ret;
	    }

	    var keyMap = avalon.oneObject("break,case,catch,continue,debugger,default,delete,do,else,false," + "finally,for,function,if,in,instanceof,new,null,return,switch,this," + "throw,true,try,typeof,var,void,while,with," + /* 关键字*/
	    "abstract,boolean,byte,char,class,const,double,enum,export,extends," + "final,float,goto,implements,import,int,interface,long,native," + "package,private,protected,public,short,static,super,synchronized," + "throws,transient,volatile,arguments");

	    var skipMap = avalon.mix({
	        Math: 1,
	        Date: 1,
	        $event: 1,
	        window: 1,
	        __vmodel__: 1,
	        avalon: 1
	    }, keyMap);

	    var rvmKey = /(^|[^\w\u00c0-\uFFFF_])(@|##)(?=[$\w])/g;
	    var ruselessSp = /\s*(\.|\|)\s*/g;
	    var rshortCircuit = /\|\|/g;
	    var brackets = /\(([^)]*)\)/;
	    var rpipeline = /\|(?=\?\?)/;
	    var rregexp = /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/g;
	    var robjectProp = /\.[\w\.\$]+/g; //对象的属性 el.xxx 中的xxx
	    var robjectKey = /(\{|\,)\s*([\$\w]+)\s*:/g; //对象的键名与冒号 {xxx:1,yyy: 2}中的xxx, yyy
	    var rfilterName = /\|(\w+)/g;
	    var rlocalVar = /[$a-zA-Z_][$a-zA-Z0-9_]*/g;

	    var exprCache = new Cache(300);

	    function addScopeForLocal(str) {
	        return str.replace(robjectProp, dig).replace(rlocalVar, function (el) {
	            if (!skipMap[el]) {
	                return "__vmodel__." + el;
	            }
	            return el;
	        });
	    }

	    function addScope(expr, type) {
	        var cacheKey = expr + ':' + type;
	        var cache = exprCache.get(cacheKey);
	        if (cache) {
	            return cache.slice(0);
	        }

	        stringPool.map = {};
	        //https://github.com/RubyLouvre/avalon/issues/1849
	        var input = expr.replace(rregexp, function (a, b) {
	            return b + dig(a.slice(b.length));
	        }); //移除所有正则
	        input = clearString(input); //移除所有字符串
	        input = input.replace(rshortCircuit, dig). //移除所有短路运算符
	        replace(ruselessSp, '$1'). //移除.|两端空白

	        replace(robjectKey, function (_, a, b) {
	            //移除所有键名
	            return a + dig(b) + ':'; //比如 ms-widget="[{is:'ms-address-wrap', $id:'address'}]"这样极端的情况 
	        }).replace(rvmKey, '$1__vmodel__.'). //转换@与##为__vmodel__
	        replace(rfilterName, function (a, b) {
	            //移除所有过滤器的名字
	            return '|' + dig(b);
	        });
	        input = addScopeForLocal(input); //在本地变量前添加__vmodel__

	        var filters = input.split(rpipeline); //根据管道符切割表达式
	        var body = filters.shift().replace(rfill, fill).trim();
	        if (/\?\?\d/.test(body)) {
	            body = body.replace(rfill, fill);
	        }
	        if (filters.length) {
	            filters = filters.map(function (filter) {
	                var bracketArgs = '';
	                filter = filter.replace(brackets, function (a, b) {
	                    if (/\S/.test(b)) {
	                        bracketArgs += ',' + b; //还原字符串,正则,短路运算符
	                    }
	                    return '';
	                });
	                var arg = '[' + avalon.quote(filter.trim()) + bracketArgs + ']';
	                return arg;
	            });
	            filters = 'avalon.composeFilters(' + filters + ')(__value__)';
	            filters = filters.replace(rfill, fill);
	        } else {
	            filters = '';
	        }
	        return exprCache.put(cacheKey, [body, filters]);
	    }
	    var rhandleName = /^__vmodel__\.[$\w\.]+$/;
	    var rfixIE678 = /__vmodel__\.([^(]+)\(([^)]*)\)/;
	    function makeHandle(body) {
	        if (rhandleName.test(body)) {
	            body = body + '($event)';
	        }
	        /* istanbul ignore if */
	        if (msie$1 < 9) {
	            body = body.replace(rfixIE678, function (a, b, c) {
	                return '__vmodel__.' + b + '.call(__vmodel__' + (/\S/.test(c) ? ',' + c : '') + ')';
	            });
	        }
	        return body;
	    }
	    function createGetter(expr, type) {
	        var arr = addScope(expr, type),
	            body;
	        if (!arr[1]) {
	            body = arr[0];
	        } else {
	            body = arr[1].replace(/__value__\)$/, arr[0] + ')');
	        }
	        try {
	            return new Function('__vmodel__', 'return ' + body + ';');
	            /* istanbul ignore next */
	        } catch (e) {
	            avalon.log('parse getter: [', expr, body, ']error');
	            return avalon.noop;
	        }
	    }

	    /**
	     * 生成表达式设值函数
	     * @param  {String}  expr
	     */
	    function createSetter(expr, type) {
	        var arr = addScope(expr, type);
	        var body = 'try{ ' + arr[0] + ' = __value__}catch(e){avalon.log(e, "in on dir")}';
	        try {
	            return new Function('__vmodel__', '__value__', body + ';');
	            /* istanbul ignore next */
	        } catch (e) {
	            avalon.log('parse setter: ', expr, ' error');
	            return avalon.noop;
	        }
	    }

	    var actionUUID = 1;
	    //需要重构
	    function Action(vm, options, callback) {
	        for (var i in options) {
	            if (protectedMenbers[i] !== 1) {
	                this[i] = options[i];
	            }
	        }

	        this.vm = vm;
	        this.observers = [];
	        this.callback = callback;
	        this.uuid = ++actionUUID;
	        this.ids = '';
	        this.mapIDs = {}; //这个用于去重
	        this.isAction = true;
	        var expr = this.expr;
	        // 缓存取值函数
	        if (typeof this.getter !== 'function') {
	            this.getter = createGetter(expr, this.type);
	        }
	        // 缓存设值函数（双向数据绑定）
	        if (this.type === 'duplex') {
	            this.setter = createSetter(expr, this.type);
	        }
	        // 缓存表达式旧值
	        this.value = NaN;
	        // 表达式初始值 & 提取依赖
	        if (!this.node) {
	            this.value = this.get();
	        }
	    }

	    Action.prototype = {
	        getValue: function getValue() {
	            var scope = this.vm;
	            try {
	                return this.getter.call(scope, scope);
	            } catch (e) {
	                avalon.log(this.getter + ' exec error');
	            }
	        },
	        setValue: function setValue(value) {
	            var scope = this.vm;
	            if (this.setter) {
	                this.setter.call(scope, scope, value);
	            }
	        },


	        // get --> getValue --> getter
	        get: function get(fn) {
	            var name = 'action track ' + this.type;

	            if (this.deep) {
	                avalon.deepCollect = true;
	            }

	            var value = collectDeps(this, this.getValue);
	            if (this.deep && avalon.deepCollect) {
	                avalon.deepCollect = false;
	            }

	            return value;
	        },


	        /**
	         * 在更新视图前保存原有的value
	         */
	        beforeUpdate: function beforeUpdate() {
	            return this.oldValue = getPlainObject(this.value);
	        },
	        update: function update(args, uuid) {
	            var oldVal = this.beforeUpdate();
	            var newVal = this.value = this.get();
	            var callback = this.callback;
	            if (callback && this.diff(newVal, oldVal, args)) {
	                callback.call(this.vm, this.value, oldVal, this.expr);
	            }
	            this._isScheduled = false;
	        },
	        schedule: function schedule() {
	            if (!this._isScheduled) {
	                this._isScheduled = true;
	                if (!avalon.uniqActions[this.uuid]) {
	                    avalon.uniqActions[this.uuid] = 1;
	                    avalon.pendingActions.push(this);
	                }

	                runActions(); //这里会还原_isScheduled

	            }
	        },
	        removeDepends: function removeDepends() {
	            var self = this;
	            this.observers.forEach(function (depend) {
	                avalon.Array.remove(depend.observers, self);
	            });
	        },


	        /**
	         * 比较两个计算值是否,一致,在for, class等能复杂数据类型的指令中,它们会重写diff复法
	         */
	        diff: function diff(a, b) {
	            return a !== b;
	        },


	        /**
	         * 销毁指令
	         */
	        dispose: function dispose() {
	            this.value = null;
	            this.removeDepends();
	            if (this.beforeDispose) {
	                this.beforeDispose();
	            }
	            for (var i in this) {
	                delete this[i];
	            }
	        }
	    };

	    function getPlainObject(v) {
	        if (v && typeof v === 'object') {
	            if (v && v.$events) {
	                return v.$model;
	            } else if (Array.isArray(v)) {
	                var ret = [];
	                for (var i = 0, n = v.length; i < n; i++) {
	                    ret.push(getPlainObject(v[i]));
	                }
	                return ret;
	            } else {
	                var _ret = {};
	                for (var _i3 in v) {
	                    _ret[_i3] = getPlainObject(v[_i3]);
	                }
	                return _ret;
	            }
	        } else {
	            return v;
	        }
	    }

	    var protectedMenbers = {
	        vm: 1,
	        callback: 1,

	        observers: 1,
	        oldValue: 1,
	        value: 1,
	        getValue: 1,
	        setValue: 1,
	        get: 1,

	        removeDepends: 1,
	        beforeUpdate: 1,
	        update: 1,
	        //diff
	        //getter
	        //setter
	        //expr
	        //vdom
	        //type: "for"
	        //name: "ms-for"
	        //attrName: ":for"
	        //param: "click"
	        //beforeDispose
	        dispose: 1
	    };

	    /**
	    * 
	     与Computed等共享UUID
	    */
	    var obid = 1;
	    function Mutation(expr, value, vm) {
	        //构造函数
	        this.expr = expr;
	        if (value) {
	            var childVm = platform.createProxy(value, this);
	            if (childVm) {
	                value = childVm;
	            }
	        }
	        this.value = value;
	        this.vm = vm;
	        try {
	            vm.$mutations[expr] = this;
	        } catch (ignoreIE) {}
	        this.uuid = ++obid;
	        this.updateVersion();
	        this.mapIDs = {};
	        this.observers = [];
	    }

	    Mutation.prototype = {
	        get: function get() {
	            if (avalon.trackingAction) {
	                this.collect(); //被收集
	                var childOb = this.value;
	                if (childOb && childOb.$events) {
	                    if (Array.isArray(childOb)) {
	                        childOb.forEach(function (item) {
	                            if (item && item.$events) {
	                                item.$events.__dep__.collect();
	                            }
	                        });
	                    } else if (avalon.deepCollect) {
	                        for (var key in childOb) {
	                            if (childOb.hasOwnProperty(key)) {
	                                var collectIt = childOb[key];
	                            }
	                        }
	                    }
	                }
	            }
	            return this.value;
	        },
	        collect: function collect() {
	            avalon.track(name, '被收集');
	            reportObserved(this);
	        },
	        updateVersion: function updateVersion() {
	            this.version = Math.random() + Math.random();
	        },
	        notify: function notify() {
	            transactionStart();
	            propagateChanged(this);
	            transactionEnd();
	        },
	        set: function set(newValue) {
	            var oldValue = this.value;
	            if (newValue !== oldValue) {
	                if (avalon.isObject(newValue)) {
	                    var hash = oldValue && oldValue.$hashcode;
	                    var childVM = platform.createProxy(newValue, this);
	                    if (childVM) {
	                        if (hash) {
	                            childVM.$hashcode = hash;
	                        }
	                        newValue = childVM;
	                    }
	                }
	                this.value = newValue;
	                this.updateVersion();
	                this.notify();
	            }
	        }
	    };

	    function getBody(fn) {
	        var entire = fn.toString();
	        return entire.substring(entire.indexOf('{}') + 1, entire.lastIndexOf('}'));
	    }
	    //如果不存在三目,if,方法
	    var instability = /(\?|if\b|\(.+\))/;

	    function __create(o) {
	        var __ = function __() {};
	        __.prototype = o;
	        return new __();
	    }

	    function __extends(child, parent) {
	        if (typeof parent === 'function') {
	            var proto = child.prototype = __create(parent.prototype);
	            proto.constructor = child;
	        }
	    }
	    var Computed = function (_super) {
	        __extends(Computed, _super);

	        function Computed(name, options, vm) {
	            //构造函数
	            _super.call(this, name, undefined, vm);
	            delete options.get;
	            delete options.set;

	            avalon.mix(this, options);
	            this.deps = {};
	            this.type = 'computed';
	            this.depsVersion = {};
	            this.isComputed = true;
	            this.trackAndCompute();
	            if (!('isStable' in this)) {
	                this.isStable = !instability.test(getBody(this.getter));
	            }
	        }
	        var cp = Computed.prototype;
	        cp.trackAndCompute = function () {
	            if (this.isStable && this.depsCount > 0) {
	                this.getValue();
	            } else {
	                collectDeps(this, this.getValue.bind(this));
	            }
	        };

	        cp.getValue = function () {
	            return this.value = this.getter.call(this.vm);
	        };

	        cp.schedule = function () {
	            var observers = this.observers;
	            var i = observers.length;
	            while (i--) {
	                var d = observers[i];
	                if (d.schedule) {
	                    d.schedule();
	                }
	            }
	        };

	        cp.shouldCompute = function () {
	            if (this.isStable) {
	                //如果变动因子确定,那么只比较变动因子的版本
	                var toComputed = false;
	                for (var i in this.deps) {
	                    if (this.deps[i].version !== this.depsVersion[i]) {
	                        toComputed = true;
	                        this.depsVersion[i] = this.deps[i].version;
	                    }
	                }
	                return toComputed;
	            }
	            return true;
	        };
	        cp.set = function () {
	            if (this.setter) {
	                avalon.transaction(this.setter, this.vm, arguments);
	            }
	        };
	        cp.get = function () {

	            //当被设置了就不稳定,当它被访问了一次就是稳定
	            this.collect();

	            if (this.shouldCompute()) {
	                this.trackAndCompute();
	                // console.log('computed 2 分支')
	                this.updateVersion();
	                //  this.reportChanged()
	            }

	            //下面这一行好像没用
	            return this.value;
	        };
	        return Computed;
	    }(Mutation);

	    /**
	     * 这里放置ViewModel模块的共用方法
	     * avalon.define: 全框架最重要的方法,生成用户VM
	     * IProxy, 基本用户数据产生的一个数据对象,基于$model与vmodel之间的形态
	     * modelFactory: 生成用户VM
	     * canHijack: 判定此属性是否该被劫持,加入数据监听与分发的的逻辑
	     * createProxy: listFactory与modelFactory的封装
	     * createAccessor: 实现数据监听与分发的重要对象
	     * itemFactory: ms-for循环中产生的代理VM的生成工厂
	     * fuseFactory: 两个ms-controller间产生的代理VM的生成工厂
	     */

	    avalon.define = function (definition) {
	        var $id = definition.$id;
	        if (!$id) {
	            avalon.error('vm.$id must be specified');
	        }
	        if (avalon.vmodels[$id]) {
	            avalon.warn('error:[' + $id + '] had defined!');
	        }
	        var vm = platform.modelFactory(definition);
	        return avalon.vmodels[$id] = vm;
	    };

	    /**
	     * 在未来的版本,avalon改用Proxy来创建VM,因此
	     */

	    function IProxy(definition, dd) {
	        avalon.mix(this, definition);
	        avalon.mix(this, $$skipArray);
	        this.$hashcode = avalon.makeHashCode('$');
	        this.$id = this.$id || this.$hashcode;
	        this.$events = {
	            __dep__: dd || new Mutation(this.$id)
	        };
	        if (avalon.config.inProxyMode) {
	            delete this.$mutations;
	            this.$accessors = {};
	            this.$computed = {};
	            this.$track = '';
	        } else {
	            this.$accessors = {
	                $model: modelAccessor
	            };
	        }
	        if (dd === void 0) {
	            this.$watch = platform.watchFactory(this.$events);
	            this.$fire = platform.fireFactory(this.$events);
	        } else {
	            delete this.$watch;
	            delete this.$fire;
	        }
	    }

	    platform.modelFactory = function modelFactory(definition, dd) {
	        var $computed = definition.$computed || {};
	        delete definition.$computed;
	        var core = new IProxy(definition, dd);
	        var $accessors = core.$accessors;
	        var keys = [];

	        platform.hideProperty(core, '$mutations', {});

	        for (var key in definition) {
	            if (key in $$skipArray) continue;
	            var val = definition[key];
	            keys.push(key);
	            if (canHijack(key, val)) {
	                $accessors[key] = createAccessor(key, val);
	            }
	        }
	        for (var _key in $computed) {
	            if (_key in $$skipArray) continue;
	            var val = $computed[_key];
	            if (typeof val === 'function') {
	                val = {
	                    get: val
	                };
	            }
	            if (val && val.get) {
	                val.getter = val.get;
	                val.setter = val.set;
	                avalon.Array.ensure(keys, _key);
	                $accessors[_key] = createAccessor(_key, val, true);
	            }
	        }
	        //将系统API以unenumerable形式加入vm,
	        //添加用户的其他不可监听属性或方法
	        //重写$track
	        //并在IE6-8中增添加不存在的hasOwnPropert方法
	        var vm = platform.createViewModel(core, $accessors, core);
	        platform.afterCreate(vm, core, keys, !dd);
	        return vm;
	    };
	    var $proxyItemBackdoorMap = {};

	    function canHijack(key, val, $proxyItemBackdoor) {
	        if (key in $$skipArray) return false;
	        if (key.charAt(0) === '$') {
	            if ($proxyItemBackdoor) {
	                if (!$proxyItemBackdoorMap[key]) {
	                    $proxyItemBackdoorMap[key] = 1;
	                    avalon.warn('ms-for\u4E2D\u7684\u53D8\u91CF' + key + '\u4E0D\u518D\u5EFA\u8BAE\u4EE5$\u4E3A\u524D\u7F00');
	                }
	                return true;
	            }
	            return false;
	        }
	        if (val == null) {
	            avalon.warn('定义vmodel时' + key + '的属性值不能为null undefine');
	            return true;
	        }
	        if (/error|date|function|regexp/.test(avalon.type(val))) {
	            return false;
	        }
	        return !(val && val.nodeName && val.nodeType);
	    }

	    function createProxy(target, dd) {
	        if (target && target.$events) {
	            return target;
	        }
	        var vm;
	        if (Array.isArray(target)) {
	            vm = platform.listFactory(target, false, dd);
	        } else if (isObject(target)) {
	            vm = platform.modelFactory(target, dd);
	        }
	        return vm;
	    }

	    platform.createProxy = createProxy;

	    platform.itemFactory = function itemFactory(before, after) {
	        var keyMap = before.$model;
	        var core = new IProxy(keyMap);
	        var state = avalon.shadowCopy(core.$accessors, before.$accessors); //防止互相污染
	        var data = after.data;
	        //core是包含系统属性的对象
	        //keyMap是不包含系统属性的对象, keys
	        for (var key in data) {
	            var val = keyMap[key] = core[key] = data[key];
	            state[key] = createAccessor(key, val);
	        }
	        var keys = Object.keys(keyMap);
	        var vm = platform.createViewModel(core, state, core);
	        platform.afterCreate(vm, core, keys);
	        return vm;
	    };

	    function createAccessor(key, val, isComputed) {
	        var mutation = null;
	        var Accessor = isComputed ? Computed : Mutation;
	        return {
	            get: function Getter() {
	                if (!mutation) {
	                    mutation = new Accessor(key, val, this);
	                }
	                return mutation.get();
	            },
	            set: function Setter(newValue) {
	                if (!mutation) {
	                    mutation = new Accessor(key, val, this);
	                }
	                mutation.set(newValue);
	            },
	            enumerable: true,
	            configurable: true
	        };
	    }

	    platform.fuseFactory = function fuseFactory(before, after) {
	        var keyMap = avalon.mix(before.$model, after.$model);
	        var core = new IProxy(avalon.mix(keyMap, {
	            $id: before.$id + after.$id
	        }));
	        var state = avalon.mix(core.$accessors, before.$accessors, after.$accessors); //防止互相污染

	        var keys = Object.keys(keyMap);
	        //将系统API以unenumerable形式加入vm,并在IE6-8中添加hasOwnPropert方法
	        var vm = platform.createViewModel(core, state, core);
	        platform.afterCreate(vm, core, keys, false);
	        return vm;
	    };

	    function toJson(val) {
	        var xtype = avalon.type(val);
	        if (xtype === 'array') {
	            var array = [];
	            for (var i = 0; i < val.length; i++) {
	                array[i] = toJson(val[i]);
	            }
	            return array;
	        } else if (xtype === 'object') {
	            if (typeof val.$track === 'string') {
	                var obj = {};
	                var arr = val.$track.match(/[^☥]+/g) || [];
	                arr.forEach(function (i) {
	                    var value = val[i];
	                    obj[i] = value && value.$events ? toJson(value) : value;
	                });
	                return obj;
	            }
	        }
	        return val;
	    }

	    var modelAccessor = {
	        get: function get() {
	            return toJson(this);
	        },
	        set: avalon.noop,
	        enumerable: false,
	        configurable: true
	    };

	    platform.toJson = toJson;
	    platform.modelAccessor = modelAccessor;

	    var _splice = ap.splice;
	    var __array__ = {
	        set: function set(index, val) {
	            if (index >>> 0 === index && this[index] !== val) {
	                if (index > this.length) {
	                    throw Error(index + 'set方法的第一个参数不能大于原数组长度');
	                }
	                this.splice(index, 1, val);
	            }
	        },
	        toJSON: function toJSON() {
	            //为了解决IE6-8的解决,通过此方法显式地求取数组的$model
	            return this.$model = platform.toJson(this);
	        },
	        contains: function contains(el) {
	            //判定是否包含
	            return this.indexOf(el) !== -1;
	        },
	        ensure: function ensure(el) {
	            if (!this.contains(el)) {
	                //只有不存在才push
	                this.push(el);
	                return true;
	            }
	            return false;
	        },
	        pushArray: function pushArray(arr) {
	            return this.push.apply(this, arr);
	        },
	        remove: function remove(el) {
	            //移除第一个等于给定值的元素
	            return this.removeAt(this.indexOf(el));
	        },
	        removeAt: function removeAt(index) {
	            //移除指定索引上的元素
	            if (index >>> 0 === index) {
	                return this.splice(index, 1);
	            }
	            return [];
	        },
	        clear: function clear() {
	            this.removeAll();
	            return this;
	        },
	        removeAll: function removeAll(all) {
	            //移除N个元素
	            var size = this.length;
	            var eliminate = Array.isArray(all) ? function (el) {
	                return all.indexOf(el) !== -1;
	            } : typeof all === 'function' ? all : false;

	            if (eliminate) {
	                for (var i = this.length - 1; i >= 0; i--) {
	                    if (eliminate(this[i], i)) {
	                        _splice.call(this, i, 1);
	                    }
	                }
	            } else {
	                _splice.call(this, 0, this.length);
	            }
	            this.toJSON();
	            this.$events.__dep__.notify();
	        }
	    };
	    function hijackMethods(array) {
	        for (var i in __array__) {
	            platform.hideProperty(array, i, __array__[i]);
	        }
	    }
	    var __method__ = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

	    __method__.forEach(function (method) {
	        var original = ap[method];
	        __array__[method] = function () {
	            // 继续尝试劫持数组元素的属性
	            var core = this.$events;

	            var args = platform.listFactory(arguments, true, core.__dep__);
	            var result = original.apply(this, args);

	            this.toJSON();
	            core.__dep__.notify(method);
	            return result;
	        };
	    });

	    function listFactory(array, stop, dd) {
	        if (!stop) {
	            hijackMethods(array);
	            if (modern) {
	                Object.defineProperty(array, '$model', platform.modelAccessor);
	            }
	            platform.hideProperty(array, '$hashcode', avalon.makeHashCode('$'));
	            platform.hideProperty(array, '$events', { __dep__: dd || new Mutation() });
	        }
	        var _dd = array.$events && array.$events.__dep__;
	        for (var i = 0, n = array.length; i < n; i++) {
	            var item = array[i];
	            if (isObject(item)) {
	                array[i] = platform.createProxy(item, _dd);
	            }
	        }
	        return array;
	    }

	    platform.listFactory = listFactory;

	    //如果浏览器不支持ecma262v5的Object.defineProperties或者存在BUG，比如IE8
	    //标准浏览器使用__defineGetter__, __defineSetter__实现
	    var canHideProperty = true;
	    try {
	        Object.defineProperty({}, '_', {
	            value: 'x'
	        });
	        delete $$skipArray.$vbsetter;
	        delete $$skipArray.$vbthis;
	    } catch (e) {
	        /* istanbul ignore next*/
	        canHideProperty = false;
	    }

	    var protectedVB = { $vbthis: 1, $vbsetter: 1 };
	    /* istanbul ignore next */
	    function hideProperty(host, name, value) {
	        if (canHideProperty) {
	            Object.defineProperty(host, name, {
	                value: value,
	                writable: true,
	                enumerable: false,
	                configurable: true
	            });
	        } else if (!protectedVB[name]) {
	            /* istanbul ignore next */
	            host[name] = value;
	        }
	    }

	    function watchFactory(core) {
	        return function $watch(expr, callback, deep) {
	            var w = new Action(core.__proxy__, {
	                deep: deep,
	                type: 'user',
	                expr: expr
	            }, callback);
	            if (!core[expr]) {
	                core[expr] = [w];
	            } else {
	                core[expr].push(w);
	            }

	            return function () {
	                w.dispose();
	                avalon.Array.remove(core[expr], w);
	                if (core[expr].length === 0) {
	                    delete core[expr];
	                }
	            };
	        };
	    }

	    function fireFactory(core) {
	        return function $fire(expr, a) {
	            var list = core[expr];
	            if (Array.isArray(list)) {
	                for (var i = 0, w; w = list[i++];) {
	                    w.callback.call(w.vm, a, w.value, w.expr);
	                }
	            }
	        };
	    }

	    function wrapIt(str) {
	        return '☥' + str + '☥';
	    }

	    function afterCreate(vm, core, keys, bindThis) {
	        var ac = vm.$accessors;
	        //隐藏系统属性
	        for (var key in $$skipArray) {
	            if (avalon.msie < 9 && core[key] === void 0) continue;
	            hideProperty(vm, key, core[key]);
	        }
	        //为不可监听的属性或方法赋值
	        for (var i = 0; i < keys.length; i++) {
	            var _key2 = keys[i];
	            if (!(_key2 in ac)) {
	                var val = core[_key2];
	                if (bindThis && typeof val === 'function') {
	                    vm[_key2] = val.bind(vm);
	                    vm[_key2]._orig = val;
	                    continue;
	                }
	                vm[_key2] = val;
	            }
	        }
	        vm.$track = keys.join('☥');

	        function hasOwnKey(key) {
	            return wrapIt(vm.$track).indexOf(wrapIt(key)) > -1;
	        }
	        if (avalon.msie < 9) {
	            vm.hasOwnProperty = hasOwnKey;
	        }
	        vm.$events.__proxy__ = vm;
	    }

	    platform.hideProperty = hideProperty;
	    platform.fireFactory = fireFactory;
	    platform.watchFactory = watchFactory;
	    platform.afterCreate = afterCreate;

	    var createViewModel = Object.defineProperties;
	    var defineProperty;

	    var timeBucket = new Date() - 0;
	    /* istanbul ignore if*/
	    if (!canHideProperty) {
	        if ('__defineGetter__' in avalon) {
	            defineProperty = function defineProperty(obj, prop, desc) {
	                if ('value' in desc) {
	                    obj[prop] = desc.value;
	                }
	                if ('get' in desc) {
	                    obj.__defineGetter__(prop, desc.get);
	                }
	                if ('set' in desc) {
	                    obj.__defineSetter__(prop, desc.set);
	                }
	                return obj;
	            };
	            createViewModel = function createViewModel(obj, descs) {
	                for (var prop in descs) {
	                    if (descs.hasOwnProperty(prop)) {
	                        defineProperty(obj, prop, descs[prop]);
	                    }
	                }
	                return obj;
	            };
	        }
	        /* istanbul ignore if*/
	        if (msie$1 < 9) {
	            var VBClassPool = {};
	            window.execScript([// jshint ignore:line
	            'Function parseVB(code)', '\tExecuteGlobal(code)', 'End Function' //转换一段文本为VB代码
	            ].join('\n'), 'VBScript');

	            var VBMediator = function VBMediator(instance, accessors, name, value) {
	                // jshint ignore:line
	                var accessor = accessors[name];
	                if (arguments.length === 4) {
	                    accessor.set.call(instance, value);
	                } else {
	                    return accessor.get.call(instance);
	                }
	            };
	            createViewModel = function createViewModel(name, accessors, properties) {
	                // jshint ignore:line
	                var buffer = [];
	                buffer.push('\tPrivate [$vbsetter]', '\tPublic  [$accessors]', '\tPublic Default Function [$vbthis](ac' + timeBucket + ', s' + timeBucket + ')', '\t\tSet  [$accessors] = ac' + timeBucket + ': set [$vbsetter] = s' + timeBucket, '\t\tSet  [$vbthis]    = Me', //链式调用
	                '\tEnd Function');
	                //添加普通属性,因为VBScript对象不能像JS那样随意增删属性，必须在这里预先定义好
	                var uniq = {
	                    $vbthis: true,
	                    $vbsetter: true,
	                    $accessors: true
	                };
	                for (name in $$skipArray) {
	                    if (!uniq[name]) {
	                        buffer.push('\tPublic [' + name + ']');
	                        uniq[name] = true;
	                    }
	                }
	                //添加访问器属性 
	                for (name in accessors) {
	                    if (uniq[name]) {
	                        continue;
	                    }
	                    uniq[name] = true;
	                    buffer.push(
	                    //由于不知对方会传入什么,因此set, let都用上
	                    '\tPublic Property Let [' + name + '](val' + timeBucket + ')', //setter
	                    '\t\tCall [$vbsetter](Me, [$accessors], "' + name + '", val' + timeBucket + ')', '\tEnd Property', '\tPublic Property Set [' + name + '](val' + timeBucket + ')', //setter
	                    '\t\tCall [$vbsetter](Me, [$accessors], "' + name + '", val' + timeBucket + ')', '\tEnd Property', '\tPublic Property Get [' + name + ']', //getter
	                    '\tOn Error Resume Next', //必须优先使用set语句,否则它会误将数组当字符串返回
	                    '\t\tSet[' + name + '] = [$vbsetter](Me, [$accessors],"' + name + '")', '\tIf Err.Number <> 0 Then', '\t\t[' + name + '] = [$vbsetter](Me, [$accessors],"' + name + '")', '\tEnd If', '\tOn Error Goto 0', '\tEnd Property');
	                }

	                for (name in properties) {
	                    if (!uniq[name]) {
	                        uniq[name] = true;
	                        buffer.push('\tPublic [' + name + ']');
	                    }
	                }

	                buffer.push('\tPublic [hasOwnProperty]');
	                buffer.push('End Class');
	                var body = buffer.join('\r\n');
	                var className = VBClassPool[body];
	                if (!className) {
	                    className = avalon.makeHashCode('VBClass');
	                    window.parseVB('Class ' + className + body);
	                    window.parseVB(['Function ' + className + 'Factory(acc, vbm)', //创建实例并传入两个关键的参数
	                    '\tDim o', '\tSet o = (New ' + className + ')(acc, vbm)', '\tSet ' + className + 'Factory = o', 'End Function'].join('\r\n'));
	                    VBClassPool[body] = className;
	                }
	                var ret = window[className + 'Factory'](accessors, VBMediator); //得到其产品
	                return ret; //得到其产品
	            };
	        }
	    }

	    platform.createViewModel = createViewModel;

	    var impDir = avalon.directive('important', {
	        priority: 1,
	        getScope: function getScope(name, scope) {
	            var v = avalon.vmodels[name];
	            if (v) return v;
	            throw 'error! no vmodel called ' + name;
	        },
	        update: function update(node, attrName, $id) {
	            if (!avalon.inBrowser) return;
	            var dom = avalon.vdom(node, 'toDOM');
	            if (dom.nodeType === 1) {
	                dom.removeAttribute(attrName);
	                avalon(dom).removeClass('ms-controller');
	            }
	            var vm = avalon.vmodels[$id];
	            if (vm) {
	                vm.$element = dom;
	                vm.$render = this;
	                vm.$fire('onReady');
	                delete vm.$events.onReady;
	            }
	        }
	    });

	    var impCb = impDir.update;

	    avalon.directive('controller', {
	        priority: 2,
	        getScope: function getScope(name, scope) {
	            var v = avalon.vmodels[name];
	            if (v) {
	                v.$render = this;
	                if (scope && scope !== v) {
	                    return platform.fuseFactory(scope, v);
	                }
	                return v;
	            }
	            return scope;
	        },
	        update: impCb
	    });

	    avalon.directive('skip', {
	        delay: true
	    });

	    var arrayWarn = {};
	    var cssDir = avalon.directive('css', {
	        diff: function diff(newVal, oldVal) {
	            if (Object(newVal) === newVal) {
	                newVal = platform.toJson(newVal); //安全的遍历VBscript
	                if (Array.isArray(newVal)) {
	                    //转换成对象
	                    var b = {};
	                    newVal.forEach(function (el) {
	                        el && avalon.shadowCopy(b, el);
	                    });
	                    newVal = b;
	                    if (!arrayWarn[this.type]) {
	                        avalon.warn('ms-' + this.type + '指令的值不建议使用数组形式了！');
	                        arrayWarn[this.type] = 1;
	                    }
	                }

	                var hasChange = false;
	                var patch = {};
	                if (!oldVal) {
	                    //如果一开始为空
	                    patch = newVal;
	                    hasChange = true;
	                } else {
	                    if (this.deep) {
	                        var deep = typeof this.deep === 'number' ? this.deep : 6;
	                        for (var i in newVal) {
	                            //diff差异点  
	                            if (!deepEquals(newVal[i], oldVal[i], 4)) {
	                                this.value = newVal;
	                                return true;
	                            }
	                            patch[i] = newVal[i];
	                        }
	                    } else {
	                        for (var _i4 in newVal) {
	                            //diff差异点
	                            if (newVal[_i4] !== oldVal[_i4]) {
	                                hasChange = true;
	                            }
	                            patch[_i4] = newVal[_i4];
	                        }
	                    }

	                    for (var _i5 in oldVal) {
	                        if (!(_i5 in patch)) {
	                            hasChange = true;
	                            patch[_i5] = '';
	                        }
	                    }
	                }
	                if (hasChange) {
	                    this.value = patch;
	                    return true;
	                }
	            }
	            return false;
	        },
	        update: function update(vdom, value) {

	            var dom = vdom.dom;
	            if (dom && dom.nodeType === 1) {
	                var wrap = avalon(dom);
	                for (var name in value) {
	                    wrap.css(name, value[name]);
	                }
	            }
	        }
	    });

	    var cssDiff = cssDir.diff;

	    function getEnumerableKeys(obj) {
	        var res = [];
	        for (var key in obj) {
	            res.push(key);
	        }return res;
	    }

	    function deepEquals(a, b, level) {
	        if (level === 0) return a === b;
	        if (a === null && b === null) return true;
	        if (a === undefined && b === undefined) return true;
	        var aIsArray = Array.isArray(a);
	        if (aIsArray !== Array.isArray(b)) {
	            return false;
	        }
	        if (aIsArray) {
	            return equalArray(a, b, level);
	        } else if (typeof a === "object" && typeof b === "object") {
	            return equalObject(a, b, level);
	        }
	        return a === b;
	    }

	    function equalArray(a, b, level) {
	        if (a.length !== b.length) {
	            return false;
	        }
	        for (var i = a.length - 1; i >= 0; i--) {
	            try {
	                if (!deepEquals(a[i], b[i], level - 1)) {
	                    return false;
	                }
	            } catch (noThisPropError) {
	                return false;
	            }
	        }
	        return true;
	    }

	    function equalObject(a, b, level) {
	        if (a === null || b === null) return false;
	        if (getEnumerableKeys(a).length !== getEnumerableKeys(b).length) return false;
	        for (var prop in a) {
	            if (!(prop in b)) return false;
	            try {
	                if (!deepEquals(a[prop], b[prop], level - 1)) {
	                    return false;
	                }
	            } catch (noThisPropError) {
	                return false;
	            }
	        }
	        return true;
	    }

	    /**
	     * ------------------------------------------------------------
	     * 检测浏览器对CSS动画的支持与API名
	     * ------------------------------------------------------------
	     */

	    var checker = {
	        TransitionEvent: 'transitionend',
	        WebKitTransitionEvent: 'webkitTransitionEnd',
	        OTransitionEvent: 'oTransitionEnd',
	        otransitionEvent: 'otransitionEnd'
	    };
	    var css3 = void 0;
	    var tran = void 0;
	    var ani = void 0;
	    var name$2 = void 0;
	    var animationEndEvent = void 0;
	    var transitionEndEvent = void 0;
	    var transition = false;
	    var animation = false;
	    //有的浏览器同时支持私有实现与标准写法，比如webkit支持前两种，Opera支持1、3、4
	    for (name$2 in checker) {
	        if (window$1[name$2]) {
	            tran = checker[name$2];
	            break;
	        }
	        /* istanbul ignore next */
	        try {
	            var a = document.createEvent(name$2);
	            tran = checker[name$2];
	            break;
	        } catch (e) {}
	    }
	    if (typeof tran === 'string') {
	        transition = css3 = true;
	        transitionEndEvent = tran;
	    }

	    //animationend有两个可用形态
	    //IE10+, Firefox 16+ & Opera 12.1+: animationend
	    //Chrome/Safari: webkitAnimationEnd
	    //http://blogs.msdn.com/b/davrous/archive/2011/12/06/introduction-to-css3-animat ions.aspx
	    //IE10也可以使用MSAnimationEnd监听，但是回调里的事件 type依然为animationend
	    //  el.addEventListener('MSAnimationEnd', function(e) {
	    //     alert(e.type)// animationend！！！
	    // })
	    checker = {
	        'AnimationEvent': 'animationend',
	        'WebKitAnimationEvent': 'webkitAnimationEnd'
	    };
	    for (name$2 in checker) {
	        if (window$1[name$2]) {
	            ani = checker[name$2];
	            break;
	        }
	    }
	    if (typeof ani === 'string') {
	        animation = css3 = true;
	        animationEndEvent = ani;
	    }

	    var effectDir = avalon.directive('effect', {
	        priority: 5,
	        diff: function diff(effect) {
	            var vdom = this.node;
	            if (typeof effect === 'string') {
	                this.value = effect = {
	                    is: effect
	                };
	                avalon.warn('ms-effect的指令值不再支持字符串,必须是一个对象');
	            }
	            this.value = vdom.effect = effect;
	            var ok = cssDiff.call(this, effect, this.oldValue);
	            var me = this;
	            if (ok) {
	                setTimeout(function () {
	                    vdom.animating = true;
	                    effectDir.update.call(me, vdom, vdom.effect);
	                });
	                vdom.animating = false;
	                return true;
	            }
	            return false;
	        },

	        update: function update(vdom, change, opts) {
	            var dom = vdom.dom;
	            if (dom && dom.nodeType === 1) {
	                //要求配置对象必须指定is属性，action必须是布尔或enter,leave,move
	                var option = change || opts;
	                var is = option.is;

	                var globalOption = avalon.effects[is];
	                if (!globalOption) {
	                    //如果没有定义特效
	                    avalon.warn(is + ' effect is undefined');
	                    return;
	                }
	                var finalOption = {};
	                var action = actionMaps[option.action];
	                if (typeof Effect.prototype[action] !== 'function') {
	                    avalon.warn('action is undefined');
	                    return;
	                }
	                //必须预定义特效

	                var effect = new avalon.Effect(dom);
	                avalon.mix(finalOption, globalOption, option, { action: action });

	                if (finalOption.queue) {
	                    animationQueue.push(function () {
	                        effect[action](finalOption);
	                    });
	                    callNextAnimation();
	                } else {

	                    effect[action](finalOption);
	                }
	                return true;
	            }
	        }
	    });

	    var move = 'move';
	    var leave = 'leave';
	    var enter = 'enter';
	    var actionMaps = {
	        'true': enter,
	        'false': leave,
	        enter: enter,
	        leave: leave,
	        move: move,
	        'undefined': enter
	    };

	    var animationQueue = [];
	    function callNextAnimation() {
	        var fn = animationQueue[0];
	        if (fn) {
	            fn();
	        }
	    }

	    avalon.effects = {};
	    avalon.effect = function (name, opts) {
	        var definition = avalon.effects[name] = opts || {};
	        if (css3 && definition.css !== false) {
	            patchObject(definition, 'enterClass', name + '-enter');
	            patchObject(definition, 'enterActiveClass', definition.enterClass + '-active');
	            patchObject(definition, 'leaveClass', name + '-leave');
	            patchObject(definition, 'leaveActiveClass', definition.leaveClass + '-active');
	        }
	        return definition;
	    };

	    function patchObject(obj, name, value) {
	        if (!obj[name]) {
	            obj[name] = value;
	        }
	    }

	    var Effect = function Effect(dom) {
	        this.dom = dom;
	    };

	    avalon.Effect = Effect;

	    Effect.prototype = {
	        enter: createAction('Enter'),
	        leave: createAction('Leave'),
	        move: createAction('Move')
	    };

	    function execHooks(options, name, el) {
	        var fns = [].concat(options[name]);
	        for (var i = 0, fn; fn = fns[i++];) {
	            if (typeof fn === 'function') {
	                fn(el);
	            }
	        }
	    }
	    var staggerCache = new Cache(128);

	    function createAction(action) {
	        var lower = action.toLowerCase();
	        return function (option) {
	            var dom = this.dom;
	            var elem = avalon(dom);
	            //处理与ms-for指令相关的stagger
	            //========BEGIN=====
	            var staggerTime = isFinite(option.stagger) ? option.stagger * 1000 : 0;
	            if (staggerTime) {
	                if (option.staggerKey) {
	                    var stagger = staggerCache.get(option.staggerKey) || staggerCache.put(option.staggerKey, {
	                        count: 0,
	                        items: 0
	                    });
	                    stagger.count++;
	                    stagger.items++;
	                }
	            }
	            var staggerIndex = stagger && stagger.count || 0;
	            //=======END==========
	            var stopAnimationID;
	            var animationDone = function animationDone(e) {
	                var isOk = e !== false;
	                if (--dom.__ms_effect_ === 0) {
	                    avalon.unbind(dom, transitionEndEvent);
	                    avalon.unbind(dom, animationEndEvent);
	                }
	                clearTimeout(stopAnimationID);
	                var dirWord = isOk ? 'Done' : 'Abort';
	                execHooks(option, 'on' + action + dirWord, dom);
	                if (stagger) {
	                    if (--stagger.items === 0) {
	                        stagger.count = 0;
	                    }
	                }
	                if (option.queue) {
	                    animationQueue.shift();
	                    callNextAnimation();
	                }
	            };
	            //执行开始前的钩子
	            execHooks(option, 'onBefore' + action, dom);

	            if (option[lower]) {
	                //使用JS方式执行动画
	                option[lower](dom, function (ok) {
	                    animationDone(ok !== false);
	                });
	            } else if (css3) {
	                //使用CSS3方式执行动画
	                elem.addClass(option[lower + 'Class']);
	                elem.removeClass(getNeedRemoved(option, lower));

	                if (!dom.__ms_effect_) {
	                    //绑定动画结束事件
	                    elem.bind(transitionEndEvent, animationDone);
	                    elem.bind(animationEndEvent, animationDone);
	                    dom.__ms_effect_ = 1;
	                } else {
	                    dom.__ms_effect_++;
	                }
	                setTimeout(function () {
	                    //用xxx-active代替xxx类名的方式 触发CSS3动画
	                    var time = avalon.root.offsetWidth === NaN;
	                    elem.addClass(option[lower + 'ActiveClass']);
	                    //计算动画时长
	                    time = getAnimationTime(dom);
	                    if (!time === 0) {
	                        //立即结束动画
	                        animationDone(false);
	                    } else if (!staggerTime) {
	                        //如果动画超出时长还没有调用结束事件,这可能是元素被移除了
	                        //如果强制结束动画
	                        stopAnimationID = setTimeout(function () {
	                            animationDone(false);
	                        }, time + 32);
	                    }
	                }, 17 + staggerTime * staggerIndex); // = 1000/60
	            }
	        };
	    }

	    avalon.applyEffect = function (dom, vdom, opts) {
	        var cb = opts.cb;
	        var curEffect = vdom.effect;
	        if (curEffect && dom && dom.nodeType === 1) {
	            var hook = opts.hook;
	            var old = curEffect[hook];
	            if (cb) {
	                if (Array.isArray(old)) {
	                    old.push(cb);
	                } else if (old) {
	                    curEffect[hook] = [old, cb];
	                } else {
	                    curEffect[hook] = [cb];
	                }
	            }
	            getAction(opts);
	            avalon.directives.effect.update(vdom, curEffect, avalon.shadowCopy({}, opts));
	        } else if (cb) {
	            cb(dom);
	        }
	    };
	    /**
	     * 获取方向
	     */
	    function getAction(opts) {
	        if (!opts.action) {
	            return opts.action = opts.hook.replace(/^on/, '').replace(/Done$/, '').toLowerCase();
	        }
	    }
	    /**
	     * 需要移除的类名
	     */
	    function getNeedRemoved(options, name) {
	        var name = name === 'leave' ? 'enter' : 'leave';
	        return Array(name + 'Class', name + 'ActiveClass').map(function (cls) {
	            return options[cls];
	        }).join(' ');
	    }
	    /**
	     * 计算动画长度
	     */
	    var transitionDuration = avalon.cssName('transition-duration');
	    var animationDuration = avalon.cssName('animation-duration');
	    var rsecond = /\d+s$/;
	    function toMillisecond(str) {
	        var ratio = rsecond.test(str) ? 1000 : 1;
	        return parseFloat(str) * ratio;
	    }

	    function getAnimationTime(dom) {
	        var computedStyles = window$1.getComputedStyle(dom, null);
	        var tranDuration = computedStyles[transitionDuration];
	        var animDuration = computedStyles[animationDuration];
	        return toMillisecond(tranDuration) || toMillisecond(animDuration);
	    }
	    /**
	     * 
	    <!DOCTYPE html>
	    <html>
	        <head>
	            <meta charset="UTF-8">
	            <meta name="viewport" content="width=device-width, initial-scale=1.0">
	            <script src="dist/avalon.js"></script>
	            <script>
	                avalon.effect('animate')
	                var vm = avalon.define({
	                    $id: 'ani',
	                    a: true
	                })
	            </script>
	            <style>
	                .animate-enter, .animate-leave{
	                    width:100px;
	                    height:100px;
	                    background: #29b6f6;
	                    transition:all 2s;
	                    -moz-transition: all 2s; 
	                    -webkit-transition: all 2s;
	                    -o-transition:all 2s;
	                }  
	                .animate-enter-active, .animate-leave{
	                    width:300px;
	                    height:300px;
	                }
	                .animate-leave-active{
	                    width:100px;
	                    height:100px;
	                }
	            </style>
	        </head>
	        <body>
	            <div :controller='ani' >
	                <p><input type='button' value='click' :click='@a =!@a'></p>
	                <div :effect="{is:'animate',action:@a}"></div>
	            </div>
	    </body>
	    </html>
	     * 
	     */

	    var none = 'none';
	    function parseDisplay(elem, val) {
	        //用于取得此类标签的默认display值
	        var doc = elem.ownerDocument;
	        var nodeName = elem.nodeName;
	        var key = '_' + nodeName;
	        if (!parseDisplay[key]) {
	            var temp = doc.body.appendChild(doc.createElement(nodeName));
	            val = avalon.css(temp, 'display');
	            doc.body.removeChild(temp);
	            if (val === none) {
	                val = 'block';
	            }
	            parseDisplay[key] = val;
	        }
	        return parseDisplay[key];
	    }

	    avalon.parseDisplay = parseDisplay;
	    avalon.directive('visible', {
	        diff: function diff(newVal, oldVal) {
	            var n = !!newVal;
	            if (oldVal === void 0 || n !== oldVal) {
	                this.value = n;
	                return true;
	            }
	        },
	        ready: true,
	        update: function update(vdom, show) {
	            var dom = vdom.dom;
	            if (dom && dom.nodeType === 1) {
	                var display = dom.style.display;
	                var value;
	                if (show) {
	                    if (display === none) {
	                        value = vdom.displayValue;
	                        if (!value) {
	                            dom.style.display = '';
	                            if (dom.style.cssText === '') {
	                                dom.removeAttribute('style');
	                            }
	                        }
	                    }
	                    if (dom.style.display === '' && avalon(dom).css('display') === none &&
	                    // fix firefox BUG,必须挂到页面上
	                    avalon.contains(dom.ownerDocument, dom)) {
	                        value = parseDisplay(dom);
	                    }
	                } else {

	                    if (display !== none) {
	                        value = none;
	                        vdom.displayValue = display;
	                    }
	                }
	                var cb = function cb() {
	                    if (value !== void 0) {
	                        dom.style.display = value;
	                    }
	                };

	                avalon.applyEffect(dom, vdom, {
	                    hook: show ? 'onEnterDone' : 'onLeaveDone',
	                    cb: cb
	                });
	            }
	        }
	    });

	    avalon.directive('text', {
	        delay: true,
	        init: function init() {

	            var node = this.node;
	            if (node.isVoidTag) {
	                avalon.error('自闭合元素不能使用ms-text');
	            }
	            var child = { nodeName: '#text', nodeValue: this.getValue() };
	            node.children.splice(0, node.children.length, child);
	            if (inBrowser) {
	                avalon.clearHTML(node.dom);
	                node.dom.appendChild(avalon.vdom(child, 'toDOM'));
	            }
	            this.node = child;
	            var type = 'expr';
	            this.type = this.name = type;
	            var directive$$1 = avalon.directives[type];
	            var me = this;
	            this.callback = function (value) {
	                directive$$1.update.call(me, me.node, value);
	            };
	        }
	    });

	    avalon.directive('expr', {
	        update: function update(vdom, value) {
	            value = value == null || value === '' ? '\u200B' : value;
	            vdom.nodeValue = value;
	            //https://github.com/RubyLouvre/avalon/issues/1834
	            if (vdom.dom) vdom.dom.data = value;
	        }
	    });

	    avalon.directive('attr', {
	        diff: cssDiff,
	        update: function update(vdom, value) {
	            var props = vdom.props;
	            for (var i in value) {
	                if (!!value[i] === false) {
	                    delete props[i];
	                } else {
	                    props[i] = value[i];
	                }
	            }
	            var dom = vdom.dom;
	            if (dom && dom.nodeType === 1) {
	                updateAttrs(dom, value);
	            }
	        }
	    });

	    avalon.directive('html', {

	        update: function update(vdom, value) {
	            this.beforeDispose();

	            this.innerRender = avalon.scan('<div class="ms-html-container">' + value + '</div>', this.vm, function () {
	                var oldRoot = this.root;
	                if (vdom.children) vdom.children.length = 0;
	                vdom.children = oldRoot.children;
	                this.root = vdom;
	                if (vdom.dom) avalon.clearHTML(vdom.dom);
	            });
	        },
	        beforeDispose: function beforeDispose() {
	            if (this.innerRender) {
	                this.innerRender.dispose();
	            }
	        },
	        delay: true
	    });

	    avalon.directive('if', {
	        delay: true,
	        priority: 5,
	        init: function init() {
	            this.placeholder = createAnchor('if');
	            var props = this.node.props;
	            delete props['ms-if'];
	            delete props[':if'];
	            this.fragment = avalon.vdom(this.node, 'toHTML');
	        },
	        diff: function diff(newVal, oldVal) {
	            var n = !!newVal;
	            if (oldVal === void 0 || n !== oldVal) {
	                this.value = n;
	                return true;
	            }
	        },
	        update: function update(vdom, value) {
	            if (this.isShow === void 0 && value) {
	                continueScan(this, vdom);
	                return;
	            }
	            this.isShow = value;
	            var placeholder = this.placeholder;

	            if (value) {
	                var p = placeholder.parentNode;
	                continueScan(this, vdom);
	                p && p.replaceChild(vdom.dom, placeholder);
	            } else {
	                //移除DOM
	                this.beforeDispose();
	                vdom.nodeValue = 'if';
	                vdom.nodeName = '#comment';
	                delete vdom.children;
	                var dom = vdom.dom;
	                var p = dom && dom.parentNode;
	                vdom.dom = placeholder;
	                if (p) {
	                    p.replaceChild(placeholder, dom);
	                }
	            }
	        },
	        beforeDispose: function beforeDispose() {
	            if (this.innerRender) {
	                this.innerRender.dispose();
	            }
	        }
	    });

	    function continueScan(instance, vdom) {
	        var innerRender = instance.innerRender = avalon.scan(instance.fragment, instance.vm);
	        avalon.shadowCopy(vdom, innerRender.root);
	        delete vdom.nodeValue;
	    }

	    avalon.directive('on', {
	        beforeInit: function beforeInit() {
	            this.getter = avalon.noop;
	        },
	        init: function init() {
	            var vdom = this.node;
	            var underline = this.name.replace('ms-on-', 'e').replace('-', '_');
	            var uuid = underline + '_' + this.expr.replace(/\s/g, '').replace(/[^$a-z]/ig, function (e) {
	                return e.charCodeAt(0);
	            });
	            var fn = avalon.eventListeners[uuid];
	            if (!fn) {
	                var arr = addScope(this.expr);
	                var body = arr[0],
	                    filters = arr[1];
	                body = makeHandle(body);

	                if (filters) {
	                    filters = filters.replace(/__value__/g, '$event');
	                    filters += '\nif($event.$return){\n\treturn;\n}';
	                }
	                var ret = ['try{', '\tvar __vmodel__ = this;', '\t' + filters, '\treturn ' + body, '}catch(e){avalon.log(e, "in on dir")}'].filter(function (el) {
	                    return (/\S/.test(el)
	                    );
	                });
	                fn = new Function('$event', ret.join('\n'));
	                fn.uuid = uuid;
	                avalon.eventListeners[uuid] = fn;
	            }

	            var dom = avalon.vdom(vdom, 'toDOM');
	            dom._ms_context_ = this.vm;

	            this.eventType = this.param.replace(/\-(\d)$/, '');
	            delete this.param;
	            avalon(dom).bind(this.eventType, fn);
	        },

	        beforeDispose: function beforeDispose() {
	            avalon(this.node.dom).unbind(this.eventType);
	        }
	    });

	    function lookupOption(vdom, values) {
	        vdom.children && vdom.children.forEach(function (el) {
	            if (el.nodeName === 'option') {
	                setOption(el, values);
	            } else {
	                lookupOption(el, values);
	            }
	        });
	    }

	    function setOption(vdom, values) {
	        var props = vdom.props;
	        if (!('disabled' in props)) {
	            var value = getOptionValue(vdom, props);
	            value = String(value || '').trim();
	            if (typeof values === 'string') {
	                props.selected = value === values;
	            } else {
	                props.selected = values.indexOf(value) !== -1;
	            }

	            if (vdom.dom) {
	                vdom.dom.selected = props.selected;
	                var v = vdom.dom.selected; //必须加上这个,防止移出节点selected失效
	            }
	        }
	    }

	    function getOptionValue(vdom, props) {
	        if (props && 'value' in props) {
	            return props.value + '';
	        }
	        var arr = [];
	        vdom.children.forEach(function (el) {
	            if (el.nodeName === '#text') {
	                arr.push(el.nodeValue);
	            } else if (el.nodeName === '#document-fragment') {
	                arr.push(getOptionValue(el));
	            }
	        });
	        return arr.join('');
	    }

	    function getSelectedValue(vdom, arr) {
	        vdom.children.forEach(function (el) {
	            if (el.nodeName === 'option') {
	                if (el.props.selected === true) arr.push(getOptionValue(el, el.props));
	            } else if (el.children) {
	                getSelectedValue(el, arr);
	            }
	        });
	        return arr;
	    }

	    var updateDataActions = {
	        input: function input(prop) {
	            //处理单个value值处理
	            var field = this;
	            prop = prop || 'value';
	            var dom = field.dom;
	            var rawValue = dom[prop];
	            var parsedValue = field.parseValue(rawValue);

	            //有时候parse后一致,vm不会改变,但input里面的值
	            field.value = rawValue;
	            field.setValue(parsedValue);
	            duplexCb(field);
	            var pos = field.pos;
	            /* istanbul ignore if */
	            if (dom.caret) {
	                field.setCaret(dom, pos);
	            }
	            //vm.aaa = '1234567890'
	            //处理 <input ms-duplex='@aaa|limitBy(8)'/>{{@aaa}} 这种格式化同步不一致的情况 
	        },
	        radio: function radio() {
	            var field = this;
	            if (field.isChecked) {
	                var val = !field.value;
	                field.setValue(val);
	                duplexCb(field);
	            } else {
	                updateDataActions.input.call(field);
	                field.value = NaN;
	            }
	        },
	        checkbox: function checkbox() {
	            var field = this;
	            var array = field.value;
	            if (!Array.isArray(array)) {
	                avalon.warn('ms-duplex应用于checkbox上要对应一个数组');
	                array = [array];
	            }
	            var method = field.dom.checked ? 'ensure' : 'remove';
	            if (array[method]) {
	                var val = field.parseValue(field.dom.value);
	                array[method](val);
	                duplexCb(field);
	            }
	            this.__test__ = array;
	        },
	        select: function select() {
	            var field = this;
	            var val = avalon(field.dom).val(); //字符串或字符串数组
	            if (val + '' !== this.value + '') {
	                if (Array.isArray(val)) {
	                    //转换布尔数组或其他
	                    val = val.map(function (v) {
	                        return field.parseValue(v);
	                    });
	                } else {
	                    val = field.parseValue(val);
	                }
	                field.setValue(val);
	                duplexCb(field);
	            }
	        },
	        contenteditable: function contenteditable() {
	            updateDataActions.input.call(this, 'innerHTML');
	        }
	    };

	    function duplexCb(field) {
	        if (field.userCb) {
	            field.userCb.call(field.vm, {
	                type: 'changed',
	                target: field.dom
	            });
	        }
	    }

	    function updateDataHandle(event) {
	        var elem = this;
	        var field = elem._ms_duplex_;
	        if (elem.composing) {
	            //防止onpropertychange引发爆栈
	            return;
	        }
	        if (elem.value === field.value) {
	            return;
	        }
	        /* istanbul ignore if*/
	        if (elem.caret) {
	            try {
	                var pos = field.getCaret(elem);
	                field.pos = pos;
	            } catch (e) {}
	        }
	        /* istanbul ignore if*/
	        if (field.debounceTime > 4) {
	            var timestamp = new Date();
	            var left = timestamp - field.time || 0;
	            field.time = timestamp;
	            /* istanbul ignore if*/
	            if (left >= field.debounceTime) {
	                updateDataActions[field.dtype].call(field);
	                /* istanbul ignore else*/
	            } else {
	                clearTimeout(field.debounceID);
	                field.debounceID = setTimeout(function () {
	                    updateDataActions[field.dtype].call(field);
	                }, left);
	            }
	        } else if (field.isChanged) {
	            setTimeout(function () {
	                //https://github.com/RubyLouvre/avalon/issues/1908
	                updateDataActions[field.dtype].call(field);
	            }, 4);
	        } else {
	            updateDataActions[field.dtype].call(field);
	        }
	    }

	    var rchangeFilter = /\|\s*change\b/;
	    var rdebounceFilter = /\|\s*debounce(?:\(([^)]+)\))?/;
	    function duplexBeforeInit() {
	        var expr = this.expr;
	        if (rchangeFilter.test(expr)) {
	            this.isChanged = true;
	            expr = expr.replace(rchangeFilter, '');
	        }
	        var match = expr.match(rdebounceFilter);
	        if (match) {
	            expr = expr.replace(rdebounceFilter, '');
	            if (!this.isChanged) {
	                this.debounceTime = parseInt(match[1], 10) || 300;
	            }
	        }
	        this.expr = expr;
	    }
	    function duplexInit() {
	        var expr = this.expr;
	        var node = this.node;
	        var etype = node.props.type;
	        this.parseValue = parseValue;
	        //处理数据转换器
	        var parsers = this.param,
	            dtype;
	        var isChecked = false;
	        parsers = parsers ? parsers.split('-').map(function (a) {
	            if (a === 'checked') {
	                isChecked = true;
	            }
	            return a;
	        }) : [];
	        node.duplex = this;
	        if (rcheckedType.test(etype) && isChecked) {
	            //如果是radio, checkbox,判定用户使用了checked格式函数没有
	            parsers = [];
	            dtype = 'radio';
	            this.isChecked = isChecked;
	        }
	        this.parsers = parsers;
	        if (!/input|textarea|select/.test(node.nodeName)) {
	            if ('contenteditable' in node.props) {
	                dtype = 'contenteditable';
	            }
	        } else if (!dtype) {
	            dtype = node.nodeName === 'select' ? 'select' : etype === 'checkbox' ? 'checkbox' : etype === 'radio' ? 'radio' : 'input';
	        }
	        this.dtype = dtype;

	        //判定是否使用了 change debounce 过滤器
	        // this.isChecked = /boolean/.test(parsers)
	        if (dtype !== 'input' && dtype !== 'contenteditable') {
	            delete this.isChanged;
	            delete this.debounceTime;
	        } else if (!this.isChecked) {
	            this.isString = true;
	        }

	        var cb = node.props['data-duplex-changed'];
	        if (cb) {
	            var arr = addScope(cb, 'xx');
	            var body = makeHandle(arr[0]);
	            this.userCb = new Function('$event', 'var __vmodel__ = this\nreturn ' + body);
	        }
	    }
	    function duplexDiff(newVal, oldVal) {
	        if (Array.isArray(newVal)) {
	            if (newVal + '' !== this.compareVal) {
	                this.compareVal = newVal + '';
	                return true;
	            }
	        } else {
	            newVal = this.parseValue(newVal);
	            if (!this.isChecked) {
	                this.value = newVal += '';
	            }
	            if (newVal !== this.compareVal) {
	                this.compareVal = newVal;
	                return true;
	            }
	        }
	    }

	    function duplexBind(vdom, addEvent) {
	        var dom = vdom.dom;
	        this.dom = dom;
	        this.vdom = vdom;
	        this.duplexCb = updateDataHandle;
	        dom._ms_duplex_ = this;
	        //绑定事件
	        addEvent(dom, this);
	    }

	    var valueHijack = true;
	    try {
	        //#272 IE9-IE11, firefox
	        var setters = {};
	        var aproto = HTMLInputElement.prototype;
	        var bproto = HTMLTextAreaElement.prototype;
	        var newSetter = function newSetter(value) {
	            // jshint ignore:line
	            setters[this.tagName].call(this, value);
	            var data = this._ms_duplex_;
	            if (!this.caret && data && data.isString) {
	                data.duplexCb.call(this, { type: 'setter' });
	            }
	        };
	        var inputProto = HTMLInputElement.prototype;
	        Object.getOwnPropertyNames(inputProto); //故意引发IE6-8等浏览器报错
	        setters['INPUT'] = Object.getOwnPropertyDescriptor(aproto, 'value').set;

	        Object.defineProperty(aproto, 'value', {
	            set: newSetter
	        });
	        setters['TEXTAREA'] = Object.getOwnPropertyDescriptor(bproto, 'value').set;
	        Object.defineProperty(bproto, 'value', {
	            set: newSetter
	        });
	        valueHijack = false;
	    } catch (e) {
	        //在chrome 43中 ms-duplex终于不需要使用定时器实现双向绑定了
	        // http://updates.html5rocks.com/2015/04/DOM-attributes-now-on-the-prototype
	        // https://docs.google.com/document/d/1jwA8mtClwxI-QJuHT7872Z0pxpZz8PBkf2bGAbsUtqs/edit?pli=1
	    }

	    function parseValue(val) {
	        for (var i = 0, k; k = this.parsers[i++];) {
	            var fn = avalon.parsers[k];
	            if (fn) {
	                val = fn.call(this, val);
	            }
	        }
	        return val;
	    }

	    var updateView = {
	        input: function input() {
	            //处理单个value值处理
	            var vdom = this.node;
	            var value = this.value + '';
	            vdom.dom.value = vdom.props.value = value;
	        },
	        updateChecked: function updateChecked(vdom, checked) {
	            if (vdom.dom) {
	                vdom.dom.defaultChecked = vdom.dom.checked = checked;
	            }
	        },
	        radio: function radio() {
	            //处理单个checked属性
	            var node = this.node;
	            var nodeValue = node.props.value;
	            var checked;
	            if (this.isChecked) {
	                checked = !!this.value;
	            } else {
	                checked = this.value + '' === nodeValue;
	            }
	            node.props.checked = checked;
	            updateView.updateChecked(node, checked);
	        },
	        checkbox: function checkbox() {
	            //处理多个checked属性
	            var node = this.node;
	            var props = node.props;
	            var value = props.value + '';
	            var values = [].concat(this.value);
	            var checked = values.some(function (el) {
	                return el + '' === value;
	            });

	            props.defaultChecked = props.checked = checked;
	            updateView.updateChecked(node, checked);
	        },
	        select: function select() {
	            //处理子级的selected属性
	            var a = Array.isArray(this.value) ? this.value.map(String) : this.value + '';
	            lookupOption(this.node, a);
	        },
	        contenteditable: function contenteditable() {
	            //处理单个innerHTML 

	            var vnodes = fromString(this.value);
	            var fragment = createFragment();
	            for (var i = 0, el; el = vnodes[i++];) {
	                var child = avalon.vdom(el, 'toDOM');
	                fragment.appendChild(child);
	            }
	            avalon.clearHTML(this.dom).appendChild(fragment);
	            var list = this.node.children;
	            list.length = 0;
	            Array.prototype.push.apply(list, vnodes);

	            this.duplexCb.call(this.dom);
	        }
	    };

	    var rforAs = /\s+as\s+([$\w]+)/;
	    var rident = /^[$a-zA-Z_][$a-zA-Z0-9_]*$/;
	    var rinvalid = /^(null|undefined|NaN|window|this|\$index|\$id)$/;
	    var rargs = /[$\w_]+/g;
	    avalon.directive('for', {
	        delay: true,
	        priority: 3,
	        beforeInit: function beforeInit() {
	            var str = this.expr,
	                asName;
	            str = str.replace(rforAs, function (a, b) {
	                /* istanbul ignore if */
	                if (!rident.test(b) || rinvalid.test(b)) {
	                    avalon.error('alias ' + b + ' is invalid --- must be a valid JS identifier which is not a reserved name.');
	                } else {
	                    asName = b;
	                }
	                return '';
	            });

	            var arr = str.split(' in ');
	            var kv = arr[0].match(rargs);
	            if (kv.length === 1) {
	                //确保avalon._each的回调有三个参数
	                kv.unshift('$key');
	            }
	            this.expr = arr[1];
	            this.keyName = kv[0];
	            this.valName = kv[1];
	            this.signature = avalon.makeHashCode('for');
	            if (asName) {
	                this.asName = asName;
	            }

	            delete this.param;
	        },
	        init: function init() {
	            var cb = this.userCb;
	            if (typeof cb === 'string' && cb) {
	                var arr = addScope(cb, 'for');
	                var body = makeHandle(arr[0]);
	                this.userCb = new Function('$event', 'var __vmodel__ = this\nreturn ' + body);
	            }
	            this.node.forDir = this; //暴露给component/index.js中的resetParentChildren方法使用
	            this.fragment = ['<div>', this.fragment, '<!--', this.signature, '--></div>'].join('');
	            this.cache = {};
	        },
	        diff: function diff(newVal, oldVal) {
	            /* istanbul ignore if */
	            if (this.updating) {
	                return;
	            }
	            this.updating = true;
	            var traceIds = createFragments(this, newVal);

	            if (this.oldTrackIds === void 0) return true;

	            if (this.oldTrackIds !== traceIds) {
	                this.oldTrackIds = traceIds;
	                return true;
	            }
	        },
	        update: function update() {

	            if (!this.preFragments) {
	                this.fragments = this.fragments || [];
	                mountList(this);
	            } else {
	                diffList(this);
	                updateList(this);
	            }

	            if (this.userCb) {
	                var me = this;
	                setTimeout(function () {
	                    me.userCb.call(me.vm, {
	                        type: 'rendered',
	                        target: me.begin.dom,
	                        signature: me.signature
	                    });
	                }, 0);
	            }
	            delete this.updating;
	        },
	        beforeDispose: function beforeDispose() {
	            this.fragments.forEach(function (el) {
	                el.dispose();
	            });
	        }
	    });

	    function getTraceKey(item) {
	        var type = typeof item;
	        return item && type === 'object' ? item.$hashcode : type + ':' + item;
	    }

	    //创建一组fragment的虚拟DOM
	    function createFragments(instance, obj) {
	        if (isObject(obj)) {
	            var array = Array.isArray(obj);
	            var ids = [];
	            var fragments = [],
	                i = 0;

	            instance.isArray = array;
	            if (instance.fragments) {
	                instance.preFragments = instance.fragments;
	                avalon.each(obj, function (key, value) {
	                    var k = array ? getTraceKey(value) : key;

	                    fragments.push({
	                        key: k,
	                        val: value,
	                        index: i++
	                    });
	                    ids.push(k);
	                });
	                instance.fragments = fragments;
	            } else {
	                avalon.each(obj, function (key, value) {
	                    if (!(key in $$skipArray)) {
	                        var k = array ? getTraceKey(value) : key;
	                        fragments.push(new VFragment([], k, value, i++));
	                        ids.push(k);
	                    }
	                });
	                instance.fragments = fragments;
	            }
	            return ids.join(';;');
	        } else {
	            return NaN;
	        }
	    }

	    function mountList(instance) {
	        var args = instance.fragments.map(function (fragment, index) {
	            FragmentDecorator(fragment, instance, index);
	            saveInCache(instance.cache, fragment);
	            return fragment;
	        });
	        var list = instance.parentChildren;
	        var i = list.indexOf(instance.begin);
	        list.splice.apply(list, [i + 1, 0].concat(args));
	    }

	    function diffList(instance) {
	        var cache = instance.cache;
	        var newCache = {};
	        var fuzzy = [];
	        var list = instance.preFragments;

	        list.forEach(function (el) {
	            el._dispose = true;
	        });

	        instance.fragments.forEach(function (c, index) {
	            var fragment = isInCache(cache, c.key);
	            //取出之前的文档碎片
	            if (fragment) {
	                delete fragment._dispose;
	                fragment.oldIndex = fragment.index;
	                fragment.index = index; // 相当于 c.index

	                resetVM(fragment.vm, instance.keyName);
	                fragment.vm[instance.valName] = c.val;
	                fragment.vm[instance.keyName] = instance.isArray ? index : fragment.key;
	                saveInCache(newCache, fragment);
	            } else {
	                //如果找不到就进行模糊搜索
	                fuzzy.push(c);
	            }
	        });
	        fuzzy.forEach(function (c) {
	            var fragment = fuzzyMatchCache(cache, c.key);
	            if (fragment) {
	                //重复利用
	                fragment.oldIndex = fragment.index;
	                fragment.key = c.key;
	                var val = fragment.val = c.val;
	                var index = fragment.index = c.index;

	                fragment.vm[instance.valName] = val;
	                fragment.vm[instance.keyName] = instance.isArray ? index : fragment.key;
	                delete fragment._dispose;
	            } else {

	                c = new VFragment([], c.key, c.val, c.index);
	                fragment = FragmentDecorator(c, instance, c.index);
	                list.push(fragment);
	            }
	            saveInCache(newCache, fragment);
	        });

	        instance.fragments = list;
	        list.sort(function (a, b) {
	            return a.index - b.index;
	        });
	        instance.cache = newCache;
	    }

	    function resetVM(vm, a, b) {
	        if (avalon.config.inProxyMode) {
	            vm.$accessors[a].value = NaN;
	        } else {
	            vm.$accessors[a].set(NaN);
	        }
	    }

	    function updateList(instance) {
	        var before = instance.begin.dom;
	        var parent = before.parentNode;
	        var list = instance.fragments;
	        var end = instance.end.dom;

	        for (var i = 0, item; item = list[i]; i++) {
	            if (item._dispose) {
	                list.splice(i, 1);
	                i--;
	                item.dispose();
	                continue;
	            }
	            if (item.oldIndex !== item.index) {
	                var f = item.toFragment();
	                var isEnd = before.nextSibling === null;
	                parent.insertBefore(f, before.nextSibling);
	                if (isEnd && !parent.contains(end)) {
	                    parent.insertBefore(end, before.nextSibling);
	                }
	            }
	            before = item.split;
	        }
	        var ch = instance.parentChildren;
	        var startIndex = ch.indexOf(instance.begin);
	        var endIndex = ch.indexOf(instance.end);

	        list.splice.apply(ch, [startIndex + 1, endIndex - startIndex].concat(list));
	        if (parent.nodeName === 'SELECT' && parent._ms_duplex_) {
	            updateView['select'].call(parent._ms_duplex_);
	        }
	    }

	    /**
	     * 
	     * @param {type} fragment
	     * @param {type} this
	     * @param {type} index
	     * @returns { key, val, index, oldIndex, this, dom, split, vm}
	     */
	    function FragmentDecorator(fragment, instance, index) {
	        var data = {};
	        data[instance.keyName] = instance.isArray ? index : fragment.key;
	        data[instance.valName] = fragment.val;
	        if (instance.asName) {
	            data[instance.asName] = instance.value;
	        }
	        var vm = fragment.vm = platform.itemFactory(instance.vm, {
	            data: data
	        });
	        if (instance.isArray) {
	            vm.$watch(instance.valName, function (a) {
	                if (instance.value && instance.value.set) {
	                    instance.value.set(vm[instance.keyName], a);
	                }
	            });
	        } else {
	            vm.$watch(instance.valName, function (a) {
	                instance.value[fragment.key] = a;
	            });
	        }

	        fragment.index = index;
	        fragment.innerRender = avalon.scan(instance.fragment, vm, function () {
	            var oldRoot = this.root;
	            ap.push.apply(fragment.children, oldRoot.children);
	            this.root = fragment;
	        });
	        return fragment;
	    }
	    // 新位置: 旧位置
	    function isInCache(cache, id) {
	        var c = cache[id];
	        if (c) {
	            var arr = c.arr;
	            /* istanbul ignore if*/
	            if (arr) {
	                var r = arr.pop();
	                if (!arr.length) {
	                    c.arr = 0;
	                }
	                return r;
	            }
	            delete cache[id];
	            return c;
	        }
	    }
	    //[1,1,1] number1 number1_ number1__
	    function saveInCache(cache, component) {
	        var trackId = component.key;
	        if (!cache[trackId]) {
	            cache[trackId] = component;
	        } else {
	            var c = cache[trackId];
	            var arr = c.arr || (c.arr = []);
	            arr.push(component);
	        }
	    }

	    function fuzzyMatchCache(cache) {
	        var key;
	        for (var id in cache) {
	            var key = id;
	            break;
	        }
	        if (key) {
	            return isInCache(cache, key);
	        }
	    }

	    //根据VM的属性值或表达式的值切换类名，ms-class='xxx yyy zzz:flag'
	    //http://www.cnblogs.com/rubylouvre/archive/2012/12/17/2818540.html
	    function classNames() {
	        var classes = [];
	        for (var i = 0; i < arguments.length; i++) {
	            var arg = arguments[i];
	            var argType = typeof arg;
	            if (argType === 'string' || argType === 'number' || arg === true) {
	                classes.push(arg);
	            } else if (Array.isArray(arg)) {
	                classes.push(classNames.apply(null, arg));
	            } else if (argType === 'object') {
	                for (var key in arg) {
	                    if (arg.hasOwnProperty(key) && arg[key]) {
	                        classes.push(key);
	                    }
	                }
	            }
	        }

	        return classes.join(' ');
	    }

	    avalon.directive('class', {
	        diff: function diff(newVal, oldVal) {
	            var type = this.type;
	            var vdom = this.node;
	            var classEvent = vdom.classEvent || {};
	            if (type === 'hover') {
	                //在移出移入时切换类名
	                classEvent.mouseenter = activateClass;
	                classEvent.mouseleave = abandonClass;
	            } else if (type === 'active') {
	                //在获得焦点时切换类名
	                classEvent.tabIndex = vdom.props.tabindex || -1;
	                classEvent.mousedown = activateClass;
	                classEvent.mouseup = abandonClass;
	                classEvent.mouseleave = abandonClass;
	            }
	            vdom.classEvent = classEvent;

	            var className = classNames(newVal);

	            if (typeof oldVal === void 0 || oldVal !== className) {
	                this.value = className;

	                vdom['change-' + type] = className;
	                return true;
	            }
	        },
	        update: function update(vdom, value) {
	            var dom = vdom.dom;
	            if (dom && dom.nodeType == 1) {

	                var dirType = this.type;
	                var change = 'change-' + dirType;
	                var classEvent = vdom.classEvent;
	                if (classEvent) {
	                    for (var i in classEvent) {
	                        if (i === 'tabIndex') {
	                            dom[i] = classEvent[i];
	                        } else {
	                            avalon.bind(dom, i, classEvent[i]);
	                        }
	                    }
	                    vdom.classEvent = {};
	                }
	                var names = ['class', 'hover', 'active'];
	                names.forEach(function (type) {
	                    if (dirType !== type) return;
	                    if (type === 'class') {
	                        dom && setClass(dom, value);
	                    } else {
	                        var oldClass = dom.getAttribute(change);
	                        if (oldClass) {
	                            avalon(dom).removeClass(oldClass);
	                        }
	                        var name = 'change-' + type;
	                        dom.setAttribute(name, value);
	                    }
	                });
	            }
	        }
	    });

	    directives.active = directives.hover = directives['class'];

	    var classMap = {
	        mouseenter: 'change-hover',
	        mouseleave: 'change-hover',
	        mousedown: 'change-active',
	        mouseup: 'change-active'
	    };

	    function activateClass(e) {
	        var elem = e.target;
	        avalon(elem).addClass(elem.getAttribute(classMap[e.type]) || '');
	    }

	    function abandonClass(e) {
	        var elem = e.target;
	        var name = classMap[e.type];
	        avalon(elem).removeClass(elem.getAttribute(name) || '');
	        if (name !== 'change-active') {
	            avalon(elem).removeClass(elem.getAttribute('change-active') || '');
	        }
	    }

	    function setClass(dom, neo) {
	        var old = dom.getAttribute('change-class');
	        if (old !== neo) {
	            avalon(dom).removeClass(old).addClass(neo);
	            dom.setAttribute('change-class', neo);
	        }
	    }

	    getLongID(activateClass);
	    getLongID(abandonClass);

	    /* 
	     * 通过绑定事件同步vmodel
	     * 总共有三种方式同步视图
	     * 1. 各种事件 input, change, click, propertychange, keydown...
	     * 2. value属性重写
	     * 3. 定时器轮询
	     */

	    function updateDataEvents(dom, data) {
	        var events = {};
	        //添加需要监听的事件
	        switch (data.dtype) {
	            case 'radio':
	            case 'checkbox':
	                events.click = updateDataHandle;
	                break;
	            case 'select':
	                events.change = updateDataHandle;
	                break;
	            case 'contenteditable':
	                /* istanbul ignore if */
	                if (data.isChanged) {
	                    events.blur = updateDataHandle;
	                    /* istanbul ignore else */
	                } else {
	                    /* istanbul ignore if*/

	                    if (avalon.modern) {
	                        if (window$1.webkitURL) {
	                            // http://code.metager.de/source/xref/WebKit/LayoutTests/fast/events/
	                            // https://bugs.webkit.org/show_bug.cgi?id=110742
	                            events.webkitEditableContentChanged = updateDataHandle;
	                        } else if (window$1.MutationEvent) {
	                            events.DOMCharacterDataModified = updateDataHandle;
	                        }
	                        events.input = updateDataHandle;
	                        /* istanbul ignore else */
	                    } else {
	                        events.keydown = updateModelKeyDown;
	                        events.paste = updateModelDelay;
	                        events.cut = updateModelDelay;
	                        events.focus = closeComposition;
	                        events.blur = openComposition;
	                    }
	                }
	                break;
	            case 'input':
	                /* istanbul ignore if */
	                if (data.isChanged) {
	                    events.change = updateDataHandle;
	                    /* istanbul ignore else */
	                } else {
	                    //http://www.cnblogs.com/rubylouvre/archive/2013/02/17/2914604.html
	                    //http://www.matts411.com/post/internet-explorer-9-oninput/
	                    if (msie$1 < 10) {
	                        //IE6-8的propertychange有问题,第一次用JS修改值时不会触发,而且你是全部清空value也不会触发
	                        //IE9的propertychange不支持自动完成,退格,删除,复制,贴粘,剪切或点击右边的小X的清空操作
	                        events.propertychange = updateModelHack;
	                        events.paste = updateModelDelay;
	                        events.cut = updateModelDelay;
	                        //IE9在第一次删除字符时不会触发oninput
	                        events.keyup = updateModelKeyDown;
	                    } else {
	                        events.input = updateDataHandle;
	                        events.compositionstart = openComposition;
	                        //微软拼音输入法的问题需要在compositionend事件中处理
	                        events.compositionend = closeComposition;
	                        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
	                        //处理低版本的标准浏览器,通过Int8Array进行区分
	                        if (!/\[native code\]/.test(window$1.Int8Array)) {
	                            events.keydown = updateModelKeyDown; //safari < 5 opera < 11
	                            events.paste = updateModelDelay; //safari < 5
	                            events.cut = updateModelDelay; //safari < 5 
	                            if (window$1.netscape) {
	                                // Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
	                                events.DOMAutoComplete = updateDataHandle;
	                            }
	                        }
	                    }
	                }
	                break;
	        }

	        if (/password|text/.test(dom.type)) {
	            events.focus = openCaret; //判定是否使用光标修正功能 
	            events.blur = closeCaret;
	            data.getCaret = getCaret;
	            data.setCaret = setCaret;
	        }

	        for (var name in events) {
	            avalon.bind(dom, name, events[name]);
	        }
	    }

	    function updateModelHack(e) {
	        if (e.propertyName === 'value') {
	            updateDataHandle.call(this, e);
	        }
	    }

	    function updateModelDelay(e) {
	        var elem = this;
	        setTimeout(function () {
	            updateDataHandle.call(elem, e);
	        }, 0);
	    }

	    function openCaret() {
	        this.caret = true;
	    }
	    /* istanbul ignore next */
	    function closeCaret() {
	        this.caret = false;
	    }
	    /* istanbul ignore next */
	    function openComposition() {
	        this.composing = true;
	    }
	    /* istanbul ignore next */
	    function closeComposition(e) {
	        this.composing = false;
	        updateModelDelay.call(this, e);
	    }
	    /* istanbul ignore next */
	    function updateModelKeyDown(e) {
	        var key = e.keyCode;
	        // ignore
	        //    command            modifiers                   arrows
	        if (key === 91 || 15 < key && key < 19 || 37 <= key && key <= 40) return;
	        updateDataHandle.call(this, e);
	    }

	    getShortID(openCaret);
	    getShortID(closeCaret);
	    getShortID(openComposition);
	    getShortID(closeComposition);
	    getShortID(updateDataHandle);
	    getShortID(updateModelHack);
	    getShortID(updateModelDelay);
	    getShortID(updateModelKeyDown);

	    //IE6-8要处理光标时需要异步
	    var mayBeAsync = function mayBeAsync(fn) {
	        setTimeout(fn, 0);
	    };
	    /* istanbul ignore next */
	    function setCaret(target, cursorPosition) {
	        var range$$1;
	        if (target.createTextRange) {
	            mayBeAsync(function () {
	                target.focus();
	                range$$1 = target.createTextRange();
	                range$$1.collapse(true);
	                range$$1.moveEnd('character', cursorPosition);
	                range$$1.moveStart('character', cursorPosition);
	                range$$1.select();
	            });
	        } else {
	            target.focus();
	            if (target.selectionStart !== undefined) {
	                target.setSelectionRange(cursorPosition, cursorPosition);
	            }
	        }
	    }
	    /* istanbul ignore next*/
	    function getCaret(target) {
	        var start = 0;
	        var normalizedValue;
	        var range$$1;
	        var textInputRange;
	        var len;
	        var endRange;

	        if (target.selectionStart + target.selectionEnd > -1) {
	            start = target.selectionStart;
	        } else {
	            range$$1 = document$1.selection.createRange();

	            if (range$$1 && range$$1.parentElement() === target) {
	                len = target.value.length;
	                normalizedValue = target.value.replace(/\r\n/g, '\n');

	                textInputRange = target.createTextRange();
	                textInputRange.moveToBookmark(range$$1.getBookmark());

	                endRange = target.createTextRange();
	                endRange.collapse(false);

	                if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
	                    start = len;
	                } else {
	                    start = -textInputRange.moveStart('character', -len);
	                    start += normalizedValue.slice(0, start).split('\n').length - 1;
	                }
	            }
	        }

	        return start;
	    }

	    avalon.directive('duplex', {
	        priority: 9999999,
	        beforeInit: duplexBeforeInit,
	        init: duplexInit,
	        diff: duplexDiff,
	        update: function update(vdom, value) {
	            if (!this.dom) {
	                duplexBind.call(this, vdom, updateDataEvents);
	            }
	            //如果不支持input.value的Object.defineProperty的属性支持,
	            //需要通过轮询同步, chrome 42及以下版本需要这个hack
	            pollValue.call(this, avalon.msie, valueHijack);
	            //更新视图

	            updateView[this.dtype].call(this);
	        }
	    });

	    function pollValue(isIE, valueHijack$$1) {
	        var dom = this.dom;
	        if (this.isString && valueHijack$$1 && !isIE && !dom.valueHijack) {
	            dom.valueHijack = updateDataHandle;
	            var intervalID = setInterval(function () {
	                if (!avalon.contains(avalon.root, dom)) {
	                    clearInterval(intervalID);
	                } else {
	                    dom.valueHijack({ type: 'poll' });
	                }
	            }, 30);
	            return intervalID;
	        }
	    }
	    avalon.__pollValue = pollValue; //export to test
	    /* istanbul ignore if */
	    if (avalon.msie < 8) {
	        var oldUpdate = updateView.updateChecked;
	        updateView.updateChecked = function (vdom, checked) {
	            var dom = vdom.dom;
	            if (dom) {
	                setTimeout(function () {
	                    oldUpdate(vdom, checked);
	                    dom.firstCheckedIt = 1;
	                }, dom.firstCheckedIt ? 31 : 16);
	                //IE6,7 checkbox, radio是使用defaultChecked控制选中状态，
	                //并且要先设置defaultChecked后设置checked
	                //并且必须设置延迟(因为必须插入DOM树才生效)
	            }
	        };
	    }

	    avalon.directive('rules', {
	        diff: function diff(rules) {
	            if (isObject(rules)) {
	                var vdom = this.node;
	                vdom.rules = platform.toJson(rules);
	                return true;
	            }
	        }
	    });
	    function isRegExp(value) {
	        return avalon.type(value) === 'regexp';
	    }
	    var rmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
	    var rurl = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
	    function isCorrectDate(value) {
	        if (typeof value === "string" && value) {
	            //是字符串但不能是空字符
	            var arr = value.split("-"); //可以被-切成3份，并且第1个是4个字符
	            if (arr.length === 3 && arr[0].length === 4) {
	                var year = ~~arr[0]; //全部转换为非负整数
	                var month = ~~arr[1] - 1;
	                var date = ~~arr[2];
	                var d = new Date(year, month, date);
	                return d.getFullYear() === year && d.getMonth() === month && d.getDate() === date;
	            }
	        }
	        return false;
	    }
	    //https://github.com/adform/validator.js/blob/master/validator.js
	    avalon.shadowCopy(avalon.validators, {
	        pattern: {
	            message: '必须匹配{{pattern}}这样的格式',
	            get: function get(value, field, next) {
	                var elem = field.dom;
	                var data = field.data;
	                if (!isRegExp(data.pattern)) {
	                    var h5pattern = elem.getAttribute("pattern");
	                    data.pattern = new RegExp('^(?:' + h5pattern + ')$');
	                }
	                next(data.pattern.test(value));
	                return value;
	            }
	        },
	        digits: {
	            message: '必须整数',
	            get: function get(value, field, next) {
	                //整数
	                next(/^\-?\d+$/.test(value));
	                return value;
	            }
	        },
	        number: {
	            message: '必须数字',
	            get: function get(value, field, next) {
	                //数值
	                next(!!value && isFinite(value)); // isFinite('') --> true
	                return value;
	            }
	        },
	        norequired: {
	            message: '',
	            get: function get(value, field, next) {
	                next(true);
	                return value;
	            }
	        },
	        required: {
	            message: '必须填写',
	            get: function get(value, field, next) {
	                next(value !== '');
	                return value;
	            }
	        },
	        equalto: {
	            message: '密码输入不一致',
	            get: function get(value, field, next) {
	                var id = String(field.data.equalto);
	                var other = avalon(document.getElementById(id)).val() || "";
	                next(value === other);
	                return value;
	            }
	        },
	        date: {
	            message: '日期格式不正确',
	            get: function get(value, field, next) {
	                var data = field.data;
	                if (isRegExp(data.date)) {
	                    next(data.date.test(value));
	                } else {
	                    next(isCorrectDate(value));
	                }
	                return value;
	            }
	        },
	        url: {
	            message: 'URL格式不正确',
	            get: function get(value, field, next) {
	                next(rurl.test(value));
	                return value;
	            }
	        },
	        email: {
	            message: 'email格式不正确',
	            get: function get(value, field, next) {
	                next(rmail.test(value));
	                return value;
	            }
	        },
	        minlength: {
	            message: '最少输入{{minlength}}个字',
	            get: function get(value, field, next) {
	                var num = parseInt(field.data.minlength, 10);
	                next(value.length >= num);
	                return value;
	            }
	        },
	        maxlength: {
	            message: '最多输入{{maxlength}}个字',
	            get: function get(value, field, next) {
	                var num = parseInt(field.data.maxlength, 10);
	                next(value.length <= num);
	                return value;
	            }
	        },
	        min: {
	            message: '输入值不能小于{{min}}',
	            get: function get(value, field, next) {
	                var num = parseInt(field.data.min, 10);
	                next(parseFloat(value) >= num);
	                return value;
	            }
	        },
	        max: {
	            message: '输入值不能大于{{max}}',
	            get: function get(value, field, next) {
	                var num = parseInt(field.data.max, 10);
	                next(parseFloat(value) <= num);
	                return value;
	            }
	        },
	        chs: {
	            message: '必须是中文字符',
	            get: function get(value, field, next) {
	                next(/^[\u4e00-\u9fa5]+$/.test(value));
	                return value;
	            }
	        }
	    });

	    var valiDir = avalon.directive('validate', {
	        diff: function diff(validator) {
	            var vdom = this.node;
	            if (vdom.validator) {
	                return;
	            }
	            if (isObject(validator)) {
	                //注意，这个Form标签的虚拟DOM有两个验证对象
	                //一个是vmValidator，它是用户VM上的那个原始子对象，也是一个VM
	                //一个是validator，它是vmValidator.$model， 这是为了防止IE6－8添加子属性时添加的hack
	                //也可以称之为safeValidate
	                vdom.validator = validator;
	                validator = platform.toJson(validator);
	                validator.vdom = vdom;
	                validator.dom = vdom.dom;

	                for (var name in valiDir.defaults) {
	                    if (!validator.hasOwnProperty(name)) {
	                        validator[name] = valiDir.defaults[name];
	                    }
	                }
	                validator.fields = validator.fields || [];
	                vdom.vmValidator = validator;
	                return true;
	            }
	        },
	        update: function update(vdom) {

	            var vmValidator = vdom.vmValidator;
	            var validator = vdom.validator;
	            var dom = vdom.dom;
	            dom._ms_validate_ = vmValidator;

	            collectFeild(vdom.children, vmValidator.fields, vmValidator);
	            var type = window.netscape ? 'keypress' : 'focusin';
	            avalon.bind(document, type, findValidator);
	            //为了方便用户手动执行验证，我们需要为原始vmValidate上添加一个onManual方法
	            function onManual() {
	                var v = this;
	                v && valiDir.validateAll.call(v, v.onValidateAll);
	            }

	            try {
	                var fn = vmValidator.onManual = onManual.bind(vmValidator);
	                validator.onManual = fn;
	            } catch (e) {
	                avalon.warn('要想使用onManual方法，必须在validate对象预定义一个空的onManual函数');
	            }
	            delete vdom.vmValidator;

	            dom.setAttribute('novalidate', 'novalidate');

	            /* istanbul ignore if */
	            if (vmValidator.validateAllInSubmit) {
	                avalon.bind(dom, 'submit', validateAllInSubmitFn);
	            }
	        },
	        validateAll: function validateAll(callback) {
	            var validator = this;
	            var vdom = this.vdom;
	            var fields = validator.fields = [];
	            collectFeild(vdom.children, fields, validator);
	            var fn = typeof callback === 'function' ? callback : validator.onValidateAll;
	            var promises = validator.fields.filter(function (field) {
	                var el = field.dom;
	                return el && !el.disabled && validator.dom.contains(el);
	            }).map(function (field) {
	                return valiDir.validate(field, true);
	            });
	            var uniq = {};
	            return Promise.all(promises).then(function (array) {
	                var reasons = array.concat.apply([], array);
	                if (validator.deduplicateInValidateAll) {
	                    reasons = reasons.filter(function (reason) {
	                        var el = reason.element;
	                        var uuid = el.uniqueID || (el.uniqueID = setTimeout('1'));
	                        if (uniq[uuid]) {
	                            return false;
	                        } else {
	                            return uniq[uuid] = true;
	                        }
	                    });
	                }
	                fn.call(vdom.dom, reasons); //这里只放置未通过验证的组件
	            });
	        },

	        validate: function validate(field, isValidateAll, event) {

	            var promises = [];
	            var value = field.value;
	            var elem = field.dom;
	            /* istanbul ignore if */
	            if (typeof Promise !== 'function') {
	                //avalon-promise不支持phantomjs
	                avalon.warn('浏览器不支持原生Promise,请下载并<script src=url>引入\nhttps://github.com/RubyLouvre/avalon/blob/master/test/promise.js');
	            }
	            /* istanbul ignore if */
	            if (elem.disabled) return;
	            var rules = field.vdom.rules;
	            var ngs = [],
	                isOk = true;
	            if (!(rules.norequired && value === '')) {
	                for (var ruleName in rules) {
	                    var ruleValue = rules[ruleName];
	                    if (ruleValue === false) continue;
	                    var hook = avalon.validators[ruleName];
	                    var resolve;
	                    promises.push(new Promise(function (a, b) {
	                        resolve = a;
	                    }));
	                    var next = function next(a) {
	                        var reason = {
	                            element: elem,
	                            data: field.data,
	                            message: elem.getAttribute('data-' + ruleName + '-message') || elem.getAttribute('data-message') || hook.message,
	                            validateRule: ruleName,
	                            getMessage: getMessage
	                        };
	                        if (a) {
	                            resolve(true);
	                        } else {
	                            isOk = false;
	                            ngs.push(reason);
	                            resolve(false);
	                        }
	                    };
	                    field.data = {};
	                    field.data[ruleName] = ruleValue;
	                    hook.get(value, field, next);
	                }
	            }

	            //如果promises不为空，说明经过验证拦截器
	            return Promise.all(promises).then(function (array) {
	                if (!isValidateAll) {
	                    var validator = field.validator;
	                    if (isOk) {
	                        validator.onSuccess.call(elem, [{
	                            data: field.data,
	                            element: elem
	                        }], event);
	                    } else {
	                        validator.onError.call(elem, ngs, event);
	                    }
	                    validator.onComplete.call(elem, ngs, event);
	                }
	                return ngs;
	            });
	        }
	    });

	    //https://github.com/RubyLouvre/avalon/issues/1977
	    function getValidate(dom) {
	        while (dom.tagName !== 'FORM') {
	            dom = dom.parentNode;
	        }
	        return dom._ms_validate_;
	    }

	    function validateAllInSubmitFn(e) {
	        e.preventDefault();
	        var v = getValidate(e.target);
	        if (v && v.onManual) {
	            v.onManual();
	        }
	    }

	    function collectFeild(nodes, fields, validator) {
	        for (var i = 0, vdom; vdom = nodes[i++];) {
	            var duplex = vdom.rules && vdom.duplex;
	            if (duplex) {
	                fields.push(duplex);
	                bindValidateEvent(duplex, validator);
	            } else if (vdom.children) {
	                collectFeild(vdom.children, fields, validator);
	            } else if (Array.isArray(vdom)) {
	                collectFeild(vdom, fields, validator);
	            }
	        }
	    }

	    function findValidator(e) {
	        var dom = e.target;
	        var duplex = dom._ms_duplex_;
	        var vdom = (duplex || {}).vdom;
	        if (duplex && vdom.rules && !duplex.validator) {
	            var msValidator = getValidate(dom);
	            if (msValidator && avalon.Array.ensure(msValidator.fields, duplex)) {
	                bindValidateEvent(duplex, msValidator);
	            }
	        }
	    }

	    function singleValidate(e) {
	        var dom = e.target;
	        var duplex = dom._ms_duplex_;
	        var msValidator = getValidate(e.target);
	        msValidator && msValidator.validate(duplex, 0, e);
	    }

	    function bindValidateEvent(field, validator) {

	        var node = field.dom;
	        if (field.validator) {
	            return;
	        }
	        field.validator = validator;
	        /* istanbul ignore if */
	        if (validator.validateInKeyup && !field.isChanged && !field.debounceTime) {
	            avalon.bind(node, 'keyup', singleValidate);
	        }
	        /* istanbul ignore if */
	        if (validator.validateInBlur) {
	            avalon.bind(node, 'blur', singleValidate);
	        }
	        /* istanbul ignore if */
	        if (validator.resetInFocus) {
	            avalon.bind(node, 'focus', function (e) {
	                var dom = e.target;
	                var field = dom._ms_duplex_;
	                var validator = getValidate(e.target);
	                validator && validator.onReset.call(dom, e, field);
	            });
	        }
	    }
	    var rformat = /\\?{{([^{}]+)\}}/gm;

	    function getMessage() {
	        var data = this.data || {};
	        return this.message.replace(rformat, function (_, name) {
	            return data[name] == null ? '' : data[name];
	        });
	    }
	    valiDir.defaults = {
	        validate: valiDir.validate,
	        onError: avalon.noop,
	        onSuccess: avalon.noop,
	        onComplete: avalon.noop,
	        onManual: avalon.noop,
	        onReset: avalon.noop,
	        onValidateAll: avalon.noop,
	        validateInBlur: true, //@config {Boolean} true，在blur事件中进行验证,触发onSuccess, onError, onComplete回调
	        validateInKeyup: true, //@config {Boolean} true，在keyup事件中进行验证,触发onSuccess, onError, onComplete回调
	        validateAllInSubmit: true, //@config {Boolean} true，在submit事件中执行onValidateAll回调
	        resetInFocus: true, //@config {Boolean} true，在focus事件中执行onReset回调,
	        deduplicateInValidateAll: false //@config {Boolean} false，在validateAll回调中对reason数组根据元素节点进行去重
	    };

	    /**
	     * 一个directive装饰器
	     * @returns {directive}
	     */
	    // DirectiveDecorator(scope, binding, vdom, this)
	    // Decorator(vm, options, callback)
	    function Directive(vm, binding, vdom, render) {
	        var type = binding.type;
	        var decorator = avalon.directives[type];
	        if (inBrowser) {
	            var dom = avalon.vdom(vdom, 'toDOM');
	            if (dom.nodeType === 1) {
	                dom.removeAttribute(binding.attrName);
	            }
	            vdom.dom = dom;
	        }
	        var callback = decorator.update ? function (value) {
	            if (!render.mount && /css|visible|duplex/.test(type)) {
	                render.callbacks.push(function () {
	                    decorator.update.call(directive$$1, directive$$1.node, value);
	                });
	            } else {
	                decorator.update.call(directive$$1, directive$$1.node, value);
	            }
	        } : avalon.noop;
	        for (var key in decorator) {
	            binding[key] = decorator[key];
	        }
	        binding.node = vdom;
	        var directive$$1 = new Action(vm, binding, callback);
	        if (directive$$1.init) {
	            //这里可能会重写node, callback, type, name
	            directive$$1.init();
	        }
	        directive$$1.update();
	        return directive$$1;
	    }

	    var eventMap = avalon.oneObject('animationend,blur,change,input,' + 'click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,' + 'mouseleave,mousemove,mouseout,mouseover,mouseup,scan,scroll,submit', 'on');
	    function parseAttributes(dirs, tuple) {
	        var node = tuple[0],
	            uniq = {},
	            bindings = [];
	        var hasIf = false;
	        for (var name in dirs) {
	            var value = dirs[name];
	            var arr = name.split('-');
	            // ms-click
	            if (name in node.props) {
	                var attrName = name;
	            } else {
	                attrName = ':' + name.slice(3);
	            }
	            if (eventMap[arr[1]]) {
	                arr.splice(1, 0, 'on');
	            }
	            //ms-on-click
	            if (arr[1] === 'on') {
	                arr[3] = parseFloat(arr[3]) || 0;
	            }

	            var type = arr[1];
	            if (type === 'controller' || type === 'important') continue;
	            if (directives[type]) {

	                var binding = {
	                    type: type,
	                    param: arr[2],
	                    attrName: attrName,
	                    name: arr.join('-'),
	                    expr: value,
	                    priority: directives[type].priority || type.charCodeAt(0) * 100
	                };
	                if (type === 'if') {
	                    hasIf = true;
	                }
	                if (type === 'on') {
	                    binding.priority += arr[3];
	                }
	                if (!uniq[binding.name]) {
	                    uniq[binding.name] = value;
	                    bindings.push(binding);
	                    if (type === 'for') {
	                        return [avalon.mix(binding, tuple[3])];
	                    }
	                }
	            }
	        }
	        bindings.sort(byPriority);

	        if (hasIf) {
	            var ret = [];
	            for (var i = 0, el; el = bindings[i++];) {
	                ret.push(el);
	                if (el.type === 'if') {
	                    return ret;
	                }
	            }
	        }
	        return bindings;
	    }
	    function byPriority(a, b) {
	        return a.priority - b.priority;
	    }

	    var rimprovePriority = /[+-\?]/;
	    var rinnerValue = /__value__\)$/;
	    function parseInterpolate(dir) {
	        var rlineSp = /\n\r?/g;
	        var str = dir.nodeValue.trim().replace(rlineSp, '');
	        var tokens = [];
	        do {
	            //aaa{{@bbb}}ccc
	            var index = str.indexOf(config.openTag);
	            index = index === -1 ? str.length : index;
	            var value = str.slice(0, index);
	            if (/\S/.test(value)) {
	                tokens.push(avalon.quote(avalon._decode(value)));
	            }
	            str = str.slice(index + config.openTag.length);
	            if (str) {
	                index = str.indexOf(config.closeTag);
	                var value = str.slice(0, index);
	                var expr = avalon.unescapeHTML(value);
	                if (/\|\s*\w/.test(expr)) {
	                    //如果存在过滤器，优化干掉
	                    var arr = addScope(expr, 'expr');
	                    if (arr[1]) {
	                        expr = arr[1].replace(rinnerValue, arr[0] + ')');
	                    }
	                }
	                if (rimprovePriority) {
	                    expr = '(' + expr + ')';
	                }
	                tokens.push(expr);

	                str = str.slice(index + config.closeTag.length);
	            }
	        } while (str.length);
	        return [{
	            expr: tokens.join('+'),
	            name: 'expr',
	            type: 'expr'
	        }];
	    }

	    function getChildren(arr) {
	        var count = 0;
	        for (var i = 0, el; el = arr[i++];) {
	            if (el.nodeName === '#document-fragment') {
	                count += getChildren(el.children);
	            } else {
	                count += 1;
	            }
	        }
	        return count;
	    }
	    function groupTree(parent, children) {
	        children && children.forEach(function (vdom) {
	            if (!vdom) return;
	            var vlength = vdom.children && getChildren(vdom.children);
	            if (vdom.nodeName === '#document-fragment') {
	                var dom = createFragment();
	            } else {
	                dom = avalon.vdom(vdom, 'toDOM');
	                var domlength = dom.childNodes && dom.childNodes.length;
	                if (domlength && vlength && domlength > vlength) {
	                    if (!appendChildMayThrowError[dom.nodeName]) {
	                        avalon.clearHTML(dom);
	                    }
	                }
	            }
	            if (vlength) {
	                groupTree(dom, vdom.children);
	                if (vdom.nodeName === 'select') {
	                    var values = [];
	                    getSelectedValue(vdom, values);
	                    lookupOption(vdom, values);
	                }
	            }
	            //高级版本可以尝试 querySelectorAll

	            try {
	                if (!appendChildMayThrowError[parent.nodeName]) {
	                    parent.appendChild(dom);
	                }
	            } catch (e) {}
	        });
	    }

	    function dumpTree(elem) {
	        var firstChild;
	        while (firstChild = elem.firstChild) {
	            if (firstChild.nodeType === 1) {
	                dumpTree(firstChild);
	            }
	            elem.removeChild(firstChild);
	        }
	    }

	    function getRange(childNodes, node) {
	        var i = childNodes.indexOf(node) + 1;
	        var deep = 1,
	            nodes = [],
	            end;
	        nodes.start = i;
	        while (node = childNodes[i++]) {
	            nodes.push(node);
	            if (node.nodeName === '#comment') {
	                if (startWith(node.nodeValue, 'ms-for:')) {
	                    deep++;
	                } else if (node.nodeValue === 'ms-for-end:') {
	                    deep--;
	                    if (deep === 0) {
	                        end = node;
	                        nodes.pop();
	                        break;
	                    }
	                }
	            }
	        }
	        nodes.end = end;
	        return nodes;
	    }

	    function startWith(long, short) {
	        return long.indexOf(short) === 0;
	    }

	    var appendChildMayThrowError = {
	        '#text': 1,
	        '#comment': 1,
	        script: 1,
	        style: 1,
	        noscript: 1
	    };

	    /**
	     * 生成一个渲染器,并作为它第一个遇到的ms-controller对应的VM的$render属性
	     * @param {String|DOM} node
	     * @param {ViewModel|Undefined} vm
	     * @param {Function|Undefined} beforeReady
	     * @returns {Render}
	     */
	    avalon.scan = function (node, vm, beforeReady) {
	        return new Render(node, vm, beforeReady || avalon.noop);
	    };

	    /**
	     * avalon.scan 的内部实现
	     */
	    function Render(node, vm, beforeReady) {
	        this.root = node; //如果传入的字符串,确保只有一个标签作为根节点
	        this.vm = vm;
	        this.beforeReady = beforeReady;
	        this.bindings = []; //收集待加工的绑定属性
	        this.callbacks = [];
	        this.directives = [];
	        this.init();
	    }

	    Render.prototype = {
	        /**
	         * 开始扫描指定区域
	         * 收集绑定属性
	         * 生成指令并建立与VM的关联
	         */
	        init: function init() {
	            var vnodes;
	            if (this.root && this.root.nodeType > 0) {
	                vnodes = fromDOM(this.root); //转换虚拟DOM
	                //将扫描区域的每一个节点与其父节点分离,更少指令对DOM操作时,对首屏输出造成的频繁重绘
	                dumpTree(this.root);
	            } else if (typeof this.root === 'string') {
	                vnodes = fromString(this.root); //转换虚拟DOM
	            } else {
	                return avalon.warn('avalon.scan first argument must element or HTML string');
	            }

	            this.root = vnodes[0];
	            this.vnodes = vnodes;
	            this.scanChildren(vnodes, this.vm, true);
	        },
	        scanChildren: function scanChildren(children, scope, isRoot) {
	            for (var i = 0; i < children.length; i++) {
	                var vdom = children[i];
	                switch (vdom.nodeName) {
	                    case '#text':
	                        scope && this.scanText(vdom, scope);
	                        break;
	                    case '#comment':
	                        scope && this.scanComment(vdom, scope, children);
	                        break;
	                    case '#document-fragment':
	                        this.scanChildren(vdom.children, scope, false);
	                        break;
	                    default:
	                        this.scanTag(vdom, scope, children, false);
	                        break;
	                }
	            }
	            if (isRoot) {
	                this.complete();
	            }
	        },


	        /**
	         * 从文本节点获取指令
	         * @param {type} vdom 
	         * @param {type} scope
	         * @returns {undefined}
	         */
	        scanText: function scanText(vdom, scope) {
	            if (config.rexpr.test(vdom.nodeValue)) {
	                this.bindings.push([vdom, scope, {
	                    nodeValue: vdom.nodeValue
	                }]);
	            }
	        },


	        /**
	         * 从注释节点获取指令
	         * @param {type} vdom 
	         * @param {type} scope
	         * @param {type} parentChildren
	         * @returns {undefined}
	         */
	        scanComment: function scanComment(vdom, scope, parentChildren) {
	            if (startWith(vdom.nodeValue, 'ms-for:')) {
	                this.getForBinding(vdom, scope, parentChildren);
	            }
	        },


	        /**
	         * 从元素节点的nodeName与属性中获取指令
	         * @param {type} vdom 
	         * @param {type} scope
	         * @param {type} parentChildren
	         * @param {type} isRoot 用于执行complete方法
	         * @returns {undefined}
	         */
	        scanTag: function scanTag(vdom, scope, parentChildren, isRoot) {
	            var dirs = {},
	                attrs = vdom.props,
	                hasDir,
	                hasFor;
	            for (var attr in attrs) {
	                var value = attrs[attr];
	                var oldName = attr;
	                if (attr.charAt(0) === ':') {
	                    attr = 'ms-' + attr.slice(1);
	                }
	                if (startWith(attr, 'ms-')) {
	                    dirs[attr] = value;
	                    var type = attr.match(/\w+/g)[1];
	                    type = eventMap[type] || type;
	                    if (!directives[type]) {
	                        avalon.warn(attr + ' has not registered!');
	                    }
	                    hasDir = true;
	                }
	                if (attr === 'ms-for') {
	                    hasFor = value;
	                    delete attrs[oldName];
	                }
	            }
	            var $id = dirs['ms-important'] || dirs['ms-controller'];
	            if ($id) {
	                /**
	                 * 后端渲染
	                 * serverTemplates后端给avalon添加的对象,里面都是模板,
	                 * 将原来后端渲染好的区域再还原成原始样子,再被扫描
	                 */
	                var templateCaches = avalon.serverTemplates;
	                var temp = templateCaches && templateCaches[$id];
	                if (temp) {
	                    avalon.log('前端再次渲染后端传过来的模板');
	                    var node = fromString(temp)[0];
	                    for (var i in node) {
	                        vdom[i] = node[i];
	                    }
	                    delete templateCaches[$id];
	                    this.scanTag(vdom, scope, parentChildren, isRoot);
	                    return;
	                }
	                //推算出指令类型
	                var type = dirs['ms-important'] === $id ? 'important' : 'controller';
	                //推算出用户定义时属性名,是使用ms-属性还是:属性
	                var attrName = 'ms-' + type in attrs ? 'ms-' + type : ':' + type;

	                if (inBrowser) {
	                    delete attrs[attrName];
	                }
	                var dir = directives[type];
	                scope = dir.getScope.call(this, $id, scope);
	                if (!scope) {
	                    return;
	                } else {
	                    var clazz = attrs['class'];
	                    if (clazz) {
	                        attrs['class'] = (' ' + clazz + ' ').replace(' ms-controller ', '').trim();
	                    }
	                }
	                var render = this;
	                scope.$render = render;
	                this.callbacks.push(function () {
	                    //用于删除ms-controller
	                    dir.update.call(render, vdom, attrName, $id);
	                });
	            }
	            if (hasFor) {
	                if (vdom.dom) {
	                    vdom.dom.removeAttribute(oldName);
	                }
	                return this.getForBindingByElement(vdom, scope, parentChildren, hasFor);
	            }

	            if (/^ms\-/.test(vdom.nodeName)) {
	                attrs.is = vdom.nodeName;
	            }

	            if (attrs['is']) {
	                if (!dirs['ms-widget']) {
	                    dirs['ms-widget'] = '{}';
	                }
	                hasDir = true;
	            }
	            if (hasDir) {
	                this.bindings.push([vdom, scope, dirs]);
	            }
	            var children = vdom.children;
	            //如果存在子节点,并且不是容器元素(script, stype, textarea, xmp...)
	            if (!orphanTag[vdom.nodeName] && children && children.length && !delayCompileNodes(dirs)) {
	                this.scanChildren(children, scope, false);
	            }
	        },


	        /**
	         * 将绑定属性转换为指令
	         * 执行各种回调与优化指令
	         * @returns {undefined}
	         */
	        complete: function complete() {
	            this.yieldDirectives();
	            this.beforeReady();
	            if (inBrowser) {
	                var root$$1 = this.root;
	                if (inBrowser) {
	                    var rootDom = avalon.vdom(root$$1, 'toDOM');
	                    groupTree(rootDom, root$$1.children);
	                }
	            }

	            this.mount = true;
	            var fn;
	            while (fn = this.callbacks.pop()) {
	                fn();
	            }
	            this.optimizeDirectives();
	        },


	        /**
	         * 将收集到的绑定属性进行深加工,最后转换指令
	         * @returns {Array<tuple>}
	         */
	        yieldDirectives: function yieldDirectives() {
	            var tuple;
	            while (tuple = this.bindings.shift()) {
	                var vdom = tuple[0],
	                    scope = tuple[1],
	                    dirs = tuple[2],
	                    bindings = [];
	                if ('nodeValue' in dirs) {
	                    bindings = parseInterpolate(dirs);
	                } else if (!('ms-skip' in dirs)) {
	                    bindings = parseAttributes(dirs, tuple);
	                }
	                for (var i = 0, binding; binding = bindings[i++];) {
	                    var dir = directives[binding.type];
	                    if (!inBrowser && /on|duplex|active|hover/.test(binding.type)) {
	                        continue;
	                    }
	                    if (dir.beforeInit) {
	                        dir.beforeInit.call(binding);
	                    }

	                    var directive$$1 = new Directive(scope, binding, vdom, this);
	                    this.directives.push(directive$$1);
	                }
	            }
	        },


	        /**
	         * 修改指令的update与callback方法,让它们以后执行时更加高效
	         * @returns {undefined}
	         */
	        optimizeDirectives: function optimizeDirectives() {
	            for (var i = 0, el; el = this.directives[i++];) {
	                el.callback = directives[el.type].update;
	                el.update = newUpdate;
	                el._isScheduled = false;
	            }
	        },

	        update: function update() {
	            for (var i = 0, el; el = this.directives[i++];) {
	                el.update();
	            }
	        },

	        /**
	         * 销毁所有指令
	         * @returns {undefined}
	         */
	        dispose: function dispose() {
	            var list = this.directives || [];
	            for (var i = 0, el; el = list[i++];) {
	                el.dispose();
	            }
	            //防止其他地方的this.innerRender && this.innerRender.dispose报错
	            for (var _i6 in this) {
	                if (_i6 !== 'dispose') delete this[_i6];
	            }
	        },


	        /**
	         * 将循环区域转换为for指令
	         * @param {type} begin 注释节点
	         * @param {type} scope
	         * @param {type} parentChildren
	         * @param {type} userCb 循环结束回调
	         * @returns {undefined}
	         */
	        getForBinding: function getForBinding(begin, scope, parentChildren, userCb) {
	            var expr = begin.nodeValue.replace('ms-for:', '').trim();
	            begin.nodeValue = 'ms-for:' + expr;
	            var nodes = getRange(parentChildren, begin);
	            var end = nodes.end;
	            var fragment = avalon.vdom(nodes, 'toHTML');
	            parentChildren.splice(nodes.start, nodes.length);
	            begin.props = {};
	            this.bindings.push([begin, scope, {
	                'ms-for': expr
	            }, {
	                begin: begin,
	                end: end,
	                expr: expr,
	                userCb: userCb,
	                fragment: fragment,
	                parentChildren: parentChildren
	            }]);
	        },


	        /**
	         * 在带ms-for元素节点旁添加两个注释节点,组成循环区域
	         * @param {type} vdom
	         * @param {type} scope
	         * @param {type} parentChildren
	         * @param {type} expr
	         * @returns {undefined}
	         */
	        getForBindingByElement: function getForBindingByElement(vdom, scope, parentChildren, expr) {
	            var index = parentChildren.indexOf(vdom); //原来带ms-for的元素节点
	            var props = vdom.props;
	            var begin = {
	                nodeName: '#comment',
	                nodeValue: 'ms-for:' + expr
	            };
	            if (props.slot) {
	                begin.slot = props.slot;
	                delete props.slot;
	            }
	            var end = {
	                nodeName: '#comment',
	                nodeValue: 'ms-for-end:'
	            };
	            parentChildren.splice(index, 1, begin, vdom, end);
	            this.getForBinding(begin, scope, parentChildren, props['data-for-rendered']);
	        }
	    };
	    var viewID;

	    function newUpdate() {
	        var oldVal = this.beforeUpdate();
	        var newVal = this.value = this.get();
	        if (this.callback && this.diff(newVal, oldVal)) {
	            this.callback(this.node, this.value);
	            var vm = this.vm;
	            var $render = vm.$render;
	            var list = vm.$events['onViewChange'];
	            /* istanbul ignore if */
	            if (list && $render && $render.root && !avalon.viewChanging) {
	                if (viewID) {
	                    clearTimeout(viewID);
	                    viewID = null;
	                }
	                viewID = setTimeout(function () {
	                    list.forEach(function (el) {
	                        el.callback.call(vm, {
	                            type: 'viewchange',
	                            target: $render.root,
	                            vmodel: vm
	                        });
	                    });
	                });
	            }
	        }
	        this._isScheduled = false;
	    }

	    var events = 'onInit,onReady,onViewChange,onDispose,onEnter,onLeave';
	    var componentEvents = avalon.oneObject(events);

	    function toObject(value) {
	        var value = platform.toJson(value);
	        if (Array.isArray(value)) {
	            var v = {};
	            value.forEach(function (el) {
	                el && avalon.shadowCopy(v, el);
	            });
	            return v;
	        }
	        return value;
	    }
	    var componentQueue = [];
	    avalon.directive('widget', {
	        delay: true,
	        priority: 4,
	        deep: true,
	        init: function init() {
	            //cached属性必须定义在组件容器里面,不是template中
	            var vdom = this.node;
	            this.cacheVm = !!vdom.props.cached;
	            if (vdom.dom && vdom.nodeName === '#comment') {
	                var comment = vdom.dom;
	            }
	            var oldValue = this.getValue();
	            var value = toObject(oldValue);
	            //外部VM与内部VM
	            // ＝＝＝创建组件的VM＝＝BEGIN＝＝＝
	            var is = vdom.props.is || value.is;
	            this.is = is;
	            var component = avalon.components[is];
	            //外部传入的总大于内部
	            if (!('fragment' in this)) {
	                if (!vdom.isVoidTag) {
	                    //提取组件容器内部的东西作为模板
	                    var text = vdom.children[0];
	                    if (text && text.nodeValue) {
	                        this.fragment = text.nodeValue;
	                    } else {
	                        this.fragment = avalon.vdom(vdom.children, 'toHTML');
	                    }
	                } else {
	                    this.fragment = false;
	                }
	            }
	            //如果组件还没有注册，那么将原元素变成一个占位用的注释节点
	            if (!component) {
	                this.readyState = 0;
	                vdom.nodeName = '#comment';
	                vdom.nodeValue = 'unresolved component placeholder';
	                delete vdom.dom;
	                avalon.Array.ensure(componentQueue, this);
	                return;
	            }

	            //如果是非空元素，比如说xmp, ms-*, template
	            var id = value.id || value.$id;
	            var hasCache = avalon.vmodels[id];
	            var fromCache = false;
	            // this.readyState = 1
	            if (hasCache) {
	                comVm = hasCache;
	                this.comVm = comVm;
	                replaceRoot(this, comVm.$render);
	                fromCache = true;
	            } else {
	                if (typeof component === 'function') {
	                    component = new component(value);
	                }
	                var comVm = createComponentVm(component, value, is);
	                this.readyState = 1;
	                fireComponentHook(comVm, vdom, 'Init');
	                this.comVm = comVm;

	                // ＝＝＝创建组件的VM＝＝END＝＝＝
	                var innerRender = avalon.scan(component.template, comVm);
	                comVm.$render = innerRender;
	                replaceRoot(this, innerRender);
	                var nodesWithSlot = [];
	                var directives$$1 = [];
	                if (this.fragment || component.soleSlot) {
	                    var curVM = this.fragment ? this.vm : comVm;
	                    var curText = this.fragment || '{{##' + component.soleSlot + '}}';
	                    var childBoss = avalon.scan('<div>' + curText + '</div>', curVM, function () {
	                        nodesWithSlot = this.root.children;
	                    });
	                    directives$$1 = childBoss.directives;
	                    this.childBoss = childBoss;
	                    for (var i in childBoss) {
	                        delete childBoss[i];
	                    }
	                }
	                Array.prototype.push.apply(innerRender.directives, directives$$1);

	                var arraySlot = [],
	                    objectSlot = {};
	                //从用户写的元素内部 收集要移动到 新创建的组件内部的元素
	                if (component.soleSlot) {
	                    arraySlot = nodesWithSlot;
	                } else {
	                    nodesWithSlot.forEach(function (el, i) {
	                        //要求带slot属性
	                        if (el.slot) {
	                            var nodes = getRange(nodesWithSlot, el);
	                            nodes.push(nodes.end);
	                            nodes.unshift(el);
	                            objectSlot[el.slot] = nodes;
	                        } else if (el.props) {
	                            var name = el.props.slot;
	                            if (name) {
	                                delete el.props.slot;
	                                if (Array.isArray(objectSlot[name])) {
	                                    objectSlot[name].push(el);
	                                } else {
	                                    objectSlot[name] = [el];
	                                }
	                            }
	                        }
	                    });
	                }
	                //将原来元素的所有孩子，全部移动新的元素的第一个slot的位置上
	                if (component.soleSlot) {
	                    insertArraySlot(innerRender.vnodes, arraySlot);
	                } else {
	                    insertObjectSlot(innerRender.vnodes, objectSlot);
	                }
	            }

	            if (comment) {
	                var dom = avalon.vdom(vdom, 'toDOM');
	                comment.parentNode.replaceChild(dom, comment);
	                comVm.$element = innerRender.root.dom = dom;
	                delete this.reInit;
	            }

	            //处理DOM节点

	            dumpTree(vdom.dom);
	            comVm.$element = vdom.dom;
	            groupTree(vdom.dom, vdom.children);
	            if (fromCache) {
	                fireComponentHook(comVm, vdom, 'Enter');
	            } else {
	                fireComponentHook(comVm, vdom, 'Ready');
	            }
	        },
	        diff: function diff(newVal, oldVal) {
	            if (cssDiff.call(this, newVal, oldVal)) {
	                return true;
	            }
	        },

	        update: function update(vdom, value) {
	            //this.oldValue = value //★★防止递归

	            switch (this.readyState) {
	                case 0:
	                    if (this.reInit) {
	                        this.init();
	                        this.readyState++;
	                    }
	                    break;
	                case 1:
	                    this.readyState++;
	                    break;
	                default:
	                    this.readyState++;
	                    var comVm = this.comVm;
	                    avalon.viewChanging = true;
	                    avalon.transaction(function () {
	                        for (var i in value) {
	                            if (comVm.hasOwnProperty(i)) {
	                                if (Array.isArray(value[i])) {
	                                    comVm[i] = value[i].concat();
	                                } else {
	                                    comVm[i] = value[i];
	                                }
	                            }
	                        }
	                    });

	                    //要保证要先触发孩子的ViewChange 然后再到它自己的ViewChange
	                    fireComponentHook(comVm, vdom, 'ViewChange');
	                    delete avalon.viewChanging;
	                    break;
	            }
	            this.value = avalon.mix(true, {}, value);
	        },
	        beforeDispose: function beforeDispose() {
	            var comVm = this.comVm;
	            if (!this.cacheVm) {
	                fireComponentHook(comVm, this.node, 'Dispose');
	                comVm.$hashcode = false;
	                delete avalon.vmodels[comVm.$id];
	                this.innerRender && this.innerRender.dispose();
	            } else {
	                fireComponentHook(comVm, this.node, 'Leave');
	            }
	        }
	    });

	    function replaceRoot(instance, innerRender) {
	        instance.innerRender = innerRender;
	        var root$$1 = innerRender.root;
	        var vdom = instance.node;
	        var slot = vdom.props.slot;
	        for (var i in root$$1) {
	            vdom[i] = root$$1[i];
	        }
	        if (vdom.props && slot) {
	            vdom.props.slot = slot;
	        }
	        innerRender.root = vdom;
	        innerRender.vnodes[0] = vdom;
	    }

	    function fireComponentHook(vm, vdom, name) {
	        var list = vm.$events['on' + name];
	        if (list) {
	            list.forEach(function (el) {
	                setTimeout(function () {
	                    el.callback.call(vm, {
	                        type: name.toLowerCase(),
	                        target: vdom.dom,
	                        vmodel: vm
	                    });
	                }, 0);
	            });
	        }
	    }

	    function createComponentVm(component, value, is) {
	        var hooks = [];
	        var defaults = component.defaults;
	        collectHooks(defaults, hooks);
	        collectHooks(value, hooks);
	        var obj = {};
	        for (var i in defaults) {
	            var val = value[i];
	            if (val == null) {
	                obj[i] = defaults[i];
	            } else {
	                obj[i] = val;
	            }
	        }
	        obj.$id = value.id || value.$id || avalon.makeHashCode(is);
	        delete obj.id;
	        var def = avalon.mix(true, {}, obj);
	        var vm = avalon.define(def);
	        hooks.forEach(function (el) {
	            vm.$watch(el.type, el.cb);
	        });
	        return vm;
	    }

	    function collectHooks(a, list) {
	        for (var i in a) {
	            if (componentEvents[i]) {
	                if (typeof a[i] === 'function' && i.indexOf('on') === 0) {
	                    list.unshift({
	                        type: i,
	                        cb: a[i]
	                    });
	                }
	                //delete a[i] 这里不能删除,会导致再次切换时没有onReady
	            }
	        }
	    }

	    function resetParentChildren(nodes, arr) {
	        var dir = arr && arr[0] && arr[0].forDir;
	        if (dir) {
	            dir.parentChildren = nodes;
	        }
	    }

	    function insertArraySlot(nodes, arr) {
	        for (var i = 0, el; el = nodes[i]; i++) {
	            if (el.nodeName === 'slot') {
	                resetParentChildren(nodes, arr);
	                nodes.splice.apply(nodes, [i, 1].concat(arr));
	                break;
	            } else if (el.children) {
	                insertArraySlot(el.children, arr);
	            }
	        }
	    }

	    function insertObjectSlot(nodes, obj) {
	        for (var i = 0, el; el = nodes[i]; i++) {
	            if (el.nodeName === 'slot') {
	                var name = el.props.name;
	                resetParentChildren(nodes, obj[name]);
	                nodes.splice.apply(nodes, [i, 1].concat(obj[name]));
	                continue;
	            } else if (el.children) {
	                insertObjectSlot(el.children, obj);
	            }
	        }
	    }

	    avalon.components = {};
	    avalon.component = function (name, component) {

	        component.extend = componentExtend;
	        return addToQueue(name, component);
	    };
	    function addToQueue(name, component) {
	        avalon.components[name] = component;
	        for (var el, i = 0; el = componentQueue[i]; i++) {
	            if (el.is === name) {
	                componentQueue.splice(i, 1);
	                el.reInit = true;
	                delete el.value;
	                el.update();
	                i--;
	            }
	        }
	        return component;
	    }

	    function componentExtend(child) {
	        var name = child.displayName;
	        delete child.displayName;
	        var obj = { defaults: avalon.mix(true, {}, this.defaults, child.defaults) };
	        if (child.soleSlot) {
	            obj.soleSlot = child.soleSlot;
	        }
	        obj.template = child.template || this.template;
	        return avalon.component(name, obj);
	    }

	    return avalon;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	(function() {
	    //无依赖版
	    var noop = function(){}
	    function Deferred(mixin) {
	        var state = "pending", dirty = false
	        function ok(x) {
	            state = "fulfilled"
	            return x
	        }
	        function ng(e) {
	            state = "rejected"
	            throw e
	        }
	        
	        var dfd = {
	            callback: {
	                resolve: ok,
	                reject: ng,
	                notify: noop,
	                ensure: noop
	            },
	            dirty: function() {
	                return dirty
	            },
	            state: function() {
	                return state
	            },
	            promise: {
	                then: function() {
	                    return _post.apply(null, arguments)
	                },
	                otherwise: function(onReject) {
	                    return _post(0, onReject)
	                },
	                //https://github.com/cujojs/when/issues/103
	                ensure: function(onEnsure) {
	                    return _post(0, 0, 0, onEnsure)
	                },
	                _next: null
	            }
	        }
	        if (typeof mixin === "function") {
	            mixin(dfd.promise)
	        } else if (mixin && typeof mixin === "object") {
	            for (var i in mixin) {
	                if (!dfd.promise[i]) {
	                    dfd.promise[i] = mixin[i]
	                }
	            }
	        }


	//http://thanpol.as/javascript/promises-a-performance-hits-you-should-be-aware-of/
	        "resolve,reject,notify".replace(/\w+/g, function(method) {
	            dfd[method] = function() {
	                var that = this, args = arguments
	                //http://promisesaplus.com/ 4.1
	                if (that.dirty()) {
	                    _fire.call(that, method, args)
	                } else {
	                    Deferred.nextTick(function() {
	                        _fire.call(that, method, args)
	                    })
	                }
	            }
	        })
	        return dfd

	        function _post() {
	            var index = -1, fns = arguments;
	            "resolve,reject,notify,ensure".replace(/\w+/g, function(method) {
	                var fn = fns[++index];
	                if (typeof fn === "function") {
	                    dirty = true
	                    if (method === "resolve" || method === "reject") {
	                        dfd.callback[method] = function() {
	                            try {
	                                var value = fn.apply(this, arguments)
	                                state = "fulfilled"
	                                return value
	                            } catch (err) {
	                                state = "rejected"
	                                return err
	                            }
	                        }
	                    } else {
	                        dfd.callback[method] = fn;
	                    }
	                }
	            })
	            var deferred = dfd.promise._next = Deferred(mixin)
	            return deferred.promise;
	        }

	        function _fire(method, array) {
	            var next = "resolve", value
	            if (this.state() === "pending" || method === "notify") {
	                var fn = this.callback[method]
	                try {
	                    value = fn.apply(this, array);
	                } catch (e) {//处理notify的异常
	                    value = e
	                }
	                if (this.state() === "rejected") {
	                    next = "reject"
	                } else if (method === "notify") {
	                    next = "notify"
	                }
	                array = [value]
	            }
	            var ensure = this.callback.ensure
	            if (noop !== ensure) {
	                try {
	                    ensure.call(this)//模拟finally
	                } catch (e) {
	                    next = "reject";
	                    array = [e];
	                }
	            }
	            var nextDeferred = this.promise._next
	            if (Deferred.isPromise(value)) {
	                value._next = nextDeferred
	            } else {
	                if (nextDeferred) {
	                    _fire.call(nextDeferred, next, array);
	                }
	            }
	        }

	    }
	    window.Deferred = Deferred;
	    Deferred.isPromise = function(obj) {
	        return !!(obj && typeof obj.then === "function");
	    };

	    function some(any, promises) {
	        var deferred = Deferred(), n = 0, result = [], end
	        function loop(promise, index) {
	            promise.then(function(ret) {
	                if (!end) {
	                    result[index] = ret//保证回调的顺序
	                    n++;
	                    if (any || n >= promises.length) {
	                        deferred.resolve(any ? ret : result);
	                        end = true
	                    }
	                }
	            }, function(e) {
	                end = true
	                deferred.reject(e);
	            })
	        }
	        for (var i = 0, l = promises.length; i < l; i++) {
	            loop(promises[i], i)
	        }
	        return deferred.promise;
	    }
	    Deferred.all = function() {
	        return some(false, arguments)
	    }
	    Deferred.any = function() {
	        return some(true, arguments)
	    };
	//http://www.raychase.net/1329
	//http://www.cnblogs.com/iamzhanglei/archive/2013/02/24/2924680.html
	    var BrowserMutationObserver = window.MutationObserver || window.WebKitMutationObserver;
	    if (BrowserMutationObserver) {//chrome firefox
	        Deferred.nextTick = function(callback) {
	            var input = document.createElement("input")
	            var observer = new BrowserMutationObserver(function(mutations) {
	                mutations.forEach(function() {
	                    callback()
	                });
	            });
	            observer.observe(input, {attributes: true});
	            input.setAttribute("value", Math.random())
	        }
	    } else if (window.VBArray) {//IE
	        Deferred.nextTick = function(callback) {
	            var node = document.createElement("script");
	            node.onreadystatechange = function() {
	                callback()
	                node.onreadystatechange = null
	                node.parentNode && node.parentNode.removeChild(node);
	                node = null;
	            };
	            document.documentElement.appendChild(node);
	        }
	    } else if (window.postMessage && window.addEventListener) {//safar opera
	        Deferred.nextTick = function(callback) {
	            function onGlobalMessage(event) {
	                if (typeof event.data === "string" && event.data.indexOf("usePostMessage") === 0) {
	                    callback()
	                }
	            }
	            window.addEventListener("message", onGlobalMessage);
	            var now = new Date - 0;
	            window.postMessage("usePostMessage" + now, "*");
	        }
	    } else {
	        Deferred.nextTick = function(callback) {
	            setTimeout(callback, 0)
	        }
	    }


	})()


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Created by brave on 17/2/7.
	 */
	/**
	 * Created by brave on 16/12/28.
	 */
	//null filter


	var type = navigator.appName;
	var lang;
	var genders;

	if (type == "Netscape") {
	    lang = navigator.language;
	}
	else {
	    lang = navigator.userLanguage;
	}
	lang = lang.substr(0, 2);
	if (lang == "zh") {
	    genders = __webpack_require__(12).zh;
	}
	else {
	    genders = __webpack_require__(12).en;
	}

	var careers = __webpack_require__(13);
	var userInfoCareers = __webpack_require__(14);
	var maritalStatus = __webpack_require__(15);
	var orderStatus = __webpack_require__(16);
	var relationships = __webpack_require__(17);
	var icTypes = __webpack_require__(18);
	var uwResults = __webpack_require__(19);
	var nationLists = __webpack_require__(20);
	var provinces = __webpack_require__(21);
	var cities = __webpack_require__(22);
	var districts = __webpack_require__(23);
	var surveys = __webpack_require__(24);

	avalon.filters.onlyNumber = function (str) {
	    avalon.log("onlyNumber", str)
	    str = str.toString();
	    var regexp = /[^\d]]*/g;
	    var newstr;
	    newstr = str.replace(regexp, "");
	    return newstr
	};
	avalon.filters.payYearFilter = function (str) {
	    if (str == '0' || str == 0) {
	        return '趸交';
	    } else {
	        return str + '年'
	    }
	};
	avalon.filters.onlyChineseAndEnglish = function (str) {
	    avalon.log("onlyChineseAndEnglish", str)
	    // var regexp = /^[\u4e00-\u9fa5][a-zA-Z][0-9]+$/;
	    var regexp = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
	    var newstr;
	    newstr = str.replace(regexp, "");
	    avalon.log("onlyChineseAndEnglish:newstr", newstr)

	    return newstr
	};

	avalon.filters.nullFilter = function (str) {
	    if (str == null || str == undefined) {
	        return '';
	    } else {
	        return str
	    }
	};
	avalon.filters.setNullFilter = function (str) {
	    if (str == null || str == undefined) {
	        return '--';
	    } else {
	        return str
	    }
	};
	avalon.filters.insurance_period = function (str) {
	    if (str == null || str == undefined) {
	        return '';
	    } else {
	        if (str == 20 || str == 30) {
	            return str + '年'
	        } else {
	            return '至被保险人' + str + "周岁后的首个保单周年日"
	        }
	    }
	};

	//居民类型
	avalon.filters.residentsTypeFilter = function (str) {
	    // avalon.log('居民类型:' + str)
	    if (str == '1') {
	        return '城镇居民'
	    } else if (str == '2') {
	        return '农村居民'
	    }
	};
	//订单状态过滤器
	avalon.filters.orderStatusFilter = function (str) {
	    // avalon.log('订单状态代码:' + str)
	    if (str == '' && str != '0') {
	        return '全部'
	    } else {
	        var items = orderStatus;// 引用dic/maritalStatus.js
	        for (var i = 0; i < items.length; i++) {
	            if (str == items[i].key) {
	                return items[i].value
	            }
	        }
	    }
	};

	//核保结果过滤器
	avalon.filters.uwResultFilter = function (str) {
	    // avalon.log('核保状态代码:' + str)
	    if (str == '' && str != '0') {
	        return '全部'
	    }
	    else {
	        var items = uwResults;// 引用dic/maritalStatus.js
	        for (var i = 0; i < items.length; i++) {
	            if (str == items[i].key) {
	                return items[i].value
	            }
	        }
	    }
	};

	//调研报告过滤器
	avalon.filters.surveyFilter = function (str) {
	    if (str == '' && str != '0') {
	        return '全部'
	    }
	    else {
	        var items = surveys;// 引用dic/maritalStatus.js
	        for (var i = 0; i < items.length; i++) {
	            if (str == items[i].key) {
	                return items[i].value
	            }
	        }
	    }
	};

	//关系
	avalon.filters.relationShipFilter = function (str) {
	    // avalon.log('关系代码:' + str)
	    if (str == '' && str != '0') {
	        return ''
	    }
	    else {
	        var items = relationships;// 引用dic/maritalStatus.js
	        for (var i = 0; i < items.length; i++) {
	            if (str == items[i].key) {
	                return items[i].value
	            }
	        }
	    }
	};

	//证件
	avalon.filters.icTypeFilter = function (str) {
	    // avalon.log('证件代码:' + str)
	    if (str == '' && str != '0') {
	        return ''
	    }
	    else {
	        var items = icTypes;// 引用dic/maritalStatus.js
	        for (var i = 0; i < items.length; i++) {
	            if (str == items[i].key) {
	                return items[i].value
	            }
	        }
	    }
	}

	//性别
	avalon.filters.genderFilter = function (str) {
	    // avalon.log('性别代码:' + str)
	    if (str == '' && str != '0') {
	        return ''
	    }
	    else {
	        var items = genders;// 引用dic/maritalStatus.js
	        for (var i = 0; i < items.length; i++) {
	            if (str == items[i].key) {
	                return items[i].value
	            }
	        }
	    }


	};

	//是否长期有效
	avalon.filters.icIsLongValidFilter = function (str) {
	    // avalon.log('证件是否长期有效代码:' + str)
	    if (str == '' && str != '0') {
	        return ''
	    }
	    else if (str == '1') {
	        return '是'
	    }
	    else if (str == '0') {
	        return '否'
	    }
	};

	//婚姻
	avalon.filters.maritalFilter = function (str) {
	    // avalon.log('婚姻状态代码:' + str)
	    if (str == '' && str != '0') {
	        return ''
	    }
	    else {
	        var items = maritalStatus;// 引用dic/maritalStatus.js
	        for (var i = 0; i < items.length; i++) {
	            if (str == items[i].key) {
	                return items[i].value
	            }
	        }
	    }

	};

	//职业
	avalon.filters.careerFilter = function (str) {
	    // avalon.log('职业代码:' + str)
	    if (str == '' && str != '0') {
	        return ''
	    }
	    else {
	        var items = careers;// 引用dic/careers.js
	        for (var i = 0; i < items.length; i++) {
	            if (str == items[i].key) {
	                return items[i].value
	            }
	        }
	    }
	};
	//工作单位性质
	avalon.filters.userInfoCareersFilter = function (str) {
	    // avalon.log('职业代码:' + str)
	    if (str == '' && str != '0') {
	        return ''
	    }
	    else {
	        var items = userInfoCareers;// 引用dic/careers.js
	        for (var i = 0; i < items.length; i++) {
	            if (str == items[i].key) {
	                return items[i].value
	            }
	        }
	    }
	};
	//证件号码
	avalon.filters.ic_numberFilter = function (str) {
	    // avalon.log('职业代码:' + str)
	    return str.toLocaleUpperCase();
	};

	//国籍
	avalon.filters.countryFilter = function (str) {
	    // avalon.log('国籍代码:' + str)
	    if (str == '' && str != '0') {
	        return ''
	    }
	    else {
	        for (var i = 0; i < nationLists.length; i++) {
	            var item = nationLists[i];
	            if (str == item['id']) {
	                // avalon.log(item['cn'])
	                return item['cn'];
	            }
	        }
	    }
	}

	//省var provinces =
	avalon.filters.provinceFilter = function (str) {
	    if (str == '' && str != '0') {
	        return ''
	    } else {
	        var result = '';
	        for (var i = 0; i < provinces.length; i++) {
	            var item = provinces[i];
	            if (str == item['id']) {
	                result = item['name']
	            }
	        }
	        return result;
	    }
	};

	//市
	avalon.filters.cityFilter = function (str) {
	    if (str == '' && str != '0') {
	        return ''
	    } else {
	        var result = '';
	        // avalon.log(cities.length);
	        for (var i = 0; i < cities.length; i++) {
	            var item = cities[i];
	            if (str == item['id']) {
	                result = item['name'];
	            }
	        }
	        return result;
	    }
	};

	//区
	avalon.filters.districtFilter = function (str) {
	    if (str == '' && str != '0') {
	        return ''
	    } else {
	        var result = '';
	        for (var i = 0; i < districts.length; i++) {
	            var item = districts[i];
	            if (str == item['id']) {
	                result = item['name']
	            }
	        }
	        return result;
	    }
	};

	//省市区
	avalon.filters.addressFilter = function (str) {
	    // avalon.log('地址编码:' + str)
	    if (str == '' && str != '0') {
	        return ''
	    }
	    else {
	        var _sep = str.split('#');

	        var _province = _sep[0];
	        var _city = _sep[1];
	        var _area = _sep[2];
	        var _addr = _sep[3];

	        var finalResult = '';

	        for (var i = 0; i < provinces.length; i++) {
	            var item = provinces[i];
	            if (_province == item['ProID']) {
	                var result = item['ProName']
	                finalResult = finalResult + result;
	                // avalon.log(result)
	            }
	        }
	        for (var i = 0; i < cities.length; i++) {
	            var item = cities[i];
	            if (_city == item['CityID']) {
	                var result = item['CityName']
	                finalResult = finalResult + result;
	                // avalon.log(result)
	            }
	        }
	        for (var i = 0; i < districts.length; i++) {
	            var item = districts[i];
	            if (_area == item['DisID']) {
	                var result = item['DisName']
	                finalResult = finalResult + result;
	                // avalon.log(result)
	            }
	        }
	        finalResult = finalResult + _addr;

	        return finalResult;
	    }
	}

	// 年收入
	avalon.filters.thounsandFilter = function (str) {
	    // avalon.log('千份位解释前:' + str)
	    if (str == '' && str != '0') {
	        return ''
	    }
	    else {
	        return formatNum(str)
	    }
	}

	//千份位分隔符
	function formatNum(num) {
	    return num.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
	}

	//千份位分隔符
	function formatNumWithLetter(num) {
	    var value = parseFloat(num);
	    value = value / 10000;
	    value = value.toFixed(2);
	    return value;
	}

	//订单类型过滤器
	avalon.filters.orderTypeFilter = function (str) {
	    // avalon.log('订单类型代码:' + str)
	    if (str == 0) {
	        return '请选择'
	    }
	    else if (str == 1) {
	        return '珍爱'
	    }
	    else if (str == 2) {
	        return '精英智选'
	    }
	};

	avalon.filters.ageFilter = function (str) {
	    if (str == null || str == undefined) {
	        return '';
	    } else {
	        var age = ages(str);
	        if (age != '输入的日期格式错误！' && age != false) {
	            return age;
	        } else {
	            return ''
	        }
	    }
	};


	avalon.filters.socialSecurityFilter = function (str) {
	    if (str == null || str == undefined) {
	        return '';
	    } else {
	        if (str == '0') {
	            return '无社保';
	        }
	        else if (str == '1') {
	            return '有社保-不以社保身份参加本计划';
	        }
	        else if (str == '2') {
	            return '有社保-以社保身份参加本计划';

	        }
	    }
	};

	avalon.filters.twoNumberFilter = function (str) {
	    return str.toFixed(2)
	};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	var careers = [
	    {key: 'M', value: '企事业单位、民间组织和社会团体等工作人员、宗教业'},
	    {key: 'K', value: '金融业'},
	    {key: 'I', value: '水陆空交通运输业、邮政、水电、燃气、通讯等公共事业、计算机与互联网'},
	    {key: 'H', value: '五金电子电器、日用品、化工建材等制造业、机电及其他设备维修'},
	    {key: 'J', value: '文教业、新闻出版广告业;卫生保健业、清洁或家政、物业管理、物流、美容美发、摄影、殡葬等服务业'},
	    {key: 'L', value: '学生、学龄前儿童'},
	    {key: 'A', value: '公务员'},
	    {key: 'C4', value: '房屋中介、律师、公证人员、会计师'},
	    {key: 'D1', value: '无业、待业及无固定职业人员---家庭主妇'},
	    {key: 'D2', value: '无业、待业及无固定职业人员---离退休人员'},
	    {key: 'D4', value: '自营投资者'},
	    {key: 'C1', value: '旅游、餐饮、零售'},
	    {key: 'F', value: '农牧业、渔业、木材森林业'},
	    {key: 'G', value: '矿石开采业、建筑工程业、装潢业'},
	    {key: 'C2', value: '娱乐场所、博彩、影视娱乐业'},
	    {key: 'C3', value: '废品收购、艺术品收藏、考古及文物保护、拍卖、典当、贵金属和珠宝交易商'},
	    {key: 'B', value: '外国政要'}
	];

	module.exports = careers;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	var userInfoCareers = [
	    {key: '1', value: '政府'},
	    {key: '3', value: '银行'},
	    {key: '2', value: '中央银行/货币当局'},
	    {key: '4', value: '非银行金融机构'},
	    {key: '6', value: '国际组织'},
	    {key: '5', value: '其他企业和个人'}

	];
	/**
	 * carres.key 中 '-'用于职业太长拆解区分，便于信息页提交数据之前拼装
	 * **/
	module.exports = userInfoCareers;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	var maritalStatus = [
	    {key: '2', value: '已婚'},
	    {key: '7', value: '单身'}
	];
	module.exports = maritalStatus;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	var orderStatus = [
	    {
	        key: "0", value: '草稿'
	    },
	    {
	        key: "2", value: '待上传'
	    },
	    {
	        key: "3", value: '待上传'
	    },
	    {
	        key: "4", value: '待提交'
	    },
	    {
	        key: "5", value: '待重新提交'
	    },
	    {
	        key: "6", value: '已提交'
	    },
	    {
	        key: "7", value: '待确认供款方案'
	    },
	    {
	        key: "8", value: '待支付'
	    },
	    {
	        key: "10", value: '已完成'
	    }
	];
	module.exports = orderStatus;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	var relationships = [
	    // {
	    //     key: "00", value: '员工本人'
	    // },
	    {
	        key: "01", value: '配偶'
	    },
	    {
	        key: "02", value: '父母'
	    },
	    {
	        key: "03", value: '子女'
	    },
	    {
	        key: "13", value: '配偶父母'
	    }
	];
	module.exports = relationships;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	var icTypes = [
	    {key: '0', value: '请选择'},
	    {key: 'I', value: '身份证'},
	    {key: 'P', value: '护照'},
	    {key: 'T', value: '港澳居民来往内地通行证'},
	    {key: 'R', value: '台湾居民来往大陆通行证'},
	    {key: 'H', value: '户口本'},
	    {key: 'B', value: '出生证'},
	    {key: 'J', value: '外国人居留证'},
	    // {key: 'K', value: '香港居民身份证'},
	    // {key: 'L', value: '临时身份证'},
	    // {key: 'W', value: '警官证'},
	    // {key: 'X', value: '回乡证'},
	    // {key: 'Y', value: '旅游证件'},
	    {key: 'A', value: '军官证'},
	    {key: 'S', value: '士兵证'}
	];
	module.exports = icTypes;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	var orderStatus = [
	    {
	        key: "1", value: '通过'
	    },
	    {
	        key: "2", value: '人工核保中'
	    },
	    {
	        key: "3", value: '拒保'
	    }
	];
	module.exports = orderStatus;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	var nationalities = [{"id": "CHN", "cn": "中国"}, {"id": "MAC", "cn": "中国澳门"}, {"id": "TWN", "cn": "中国台湾"}, {
	    "id": "HKG",
	    "cn": "中国香港"
	}, {"id": "ALB", "cn": "阿尔巴尼亚"}, {"id": "DZA", "cn": "阿尔及利亚"}, {"id": "AFG", "cn": "阿富汗"}, {
	    "id": "ARG",
	    "cn": "阿根廷"
	}, {"id": "ARE", "cn": "阿联酋"}, {"id": "ABW", "cn": "阿鲁巴"}, {"id": "OMN", "cn": "阿曼"}, {
	    "id": "AZE",
	    "cn": "阿塞拜疆"
	}, {"id": "EGY", "cn": "埃及"}, {"id": "ETH", "cn": "埃塞俄比亚"}, {"id": "IRL", "cn": "爱尔兰"}, {
	    "id": "EST",
	    "cn": "爱沙尼亚"
	}, {"id": "AND", "cn": "安道尔"}, {"id": "AGO", "cn": "安哥拉"}, {"id": "AIA", "cn": "安圭拉"}, {
	    "id": "ATG",
	    "cn": "安提瓜和巴布达"
	}, {"id": "AUT", "cn": "奥地利"}, {"id": "AUS", "cn": "澳大利亚"}, {"id": "BRB", "cn": "巴巴多斯"}, {
	    "id": "PNG",
	    "cn": "巴布亚新几内亚"
	}, {"id": "BHS", "cn": "巴哈马"}, {"id": "PAK", "cn": "巴基斯坦"}, {"id": "PRY", "cn": "巴拉圭"}, {
	    "id": "PSE",
	    "cn": "巴勒斯坦"
	}, {"id": "BHR", "cn": "巴林"}, {"id": "PAN", "cn": "巴拿马"}, {"id": "BRA", "cn": "巴西"}, {
	    "id": "BLR",
	    "cn": "白俄罗斯"
	}, {"id": "BMU", "cn": "百慕大"}, {"id": "BGR", "cn": "保加利亚"}, {"id": "MNP", "cn": "北马里亚纳"}, {
	    "id": "BEN",
	    "cn": "贝宁"
	}, {"id": "BEL", "cn": "比利时"}, {"id": "ISL", "cn": "冰岛"}, {"id": "PRI", "cn": "波多黎各"}, {
	    "id": "POL",
	    "cn": "波兰"
	}, {"id": "BIH", "cn": "波斯尼亚和黑塞哥维那"}, {"id": "BOL", "cn": "玻利维亚"}, {"id": "BLZ", "cn": "伯利兹"}, {
	    "id": "BWA",
	    "cn": "博茨瓦纳"
	}, {"id": "BTN", "cn": "不丹"}, {"id": "BFA", "cn": "布基纳法索"}, {"id": "BDI", "cn": "布隆迪"}, {
	    "id": "BVT",
	    "cn": "布维岛"
	}, {"id": "PRK", "cn": "朝鲜"}, {"id": "GNQ", "cn": "赤道几内亚"}, {"id": "DNK", "cn": "丹麦"}, {
	    "id": "DEU",
	    "cn": "德国"
	}, {"id": "TMP", "cn": "东帝汶"}, {"id": "TGO", "cn": "多哥"}, {"id": "DOM", "cn": "多米尼加共和国"}, {
	    "id": "DMA",
	    "cn": "多米尼克"
	}, {"id": "RUS", "cn": "俄罗斯"}, {"id": "ECU", "cn": "厄瓜多尔"}, {"id": "ERI", "cn": "厄立特里亚"}, {
	    "id": "FRA",
	    "cn": "法国"
	}, {"id": "FRO", "cn": "法罗群岛"}, {"id": "PYF", "cn": "法属波利尼西亚"}, {"id": "GUF", "cn": "法属圭亚那"}, {
	    "id": "ATF",
	    "cn": "法属南部领土"
	}, {"id": "VAT", "cn": "梵蒂冈"}, {"id": "PHL", "cn": "菲律宾"}, {"id": "FJI", "cn": "斐济"}, {
	    "id": "FIN",
	    "cn": "芬兰"
	}, {"id": "CPV", "cn": "佛得角"}, {"id": "GMB", "cn": "冈比亚"}, {"id": "COG", "cn": "刚果（布）"}, {
	    "id": "COD",
	    "cn": "刚果（金）"
	}, {"id": "COL", "cn": "哥伦比亚"}, {"id": "CRI", "cn": "哥斯达黎加"}, {"id": "GRD", "cn": "格林纳达"}, {
	    "id": "GRL",
	    "cn": "格陵兰"
	}, {"id": "GEO", "cn": "格鲁吉亚"}, {"id": "CUB", "cn": "古巴"}, {"id": "GLP", "cn": "瓜德罗普"}, {
	    "id": "GUM",
	    "cn": "关岛"
	}, {"id": "GUY", "cn": "圭亚那"}, {"id": "KAZ", "cn": "哈萨克斯坦"}, {"id": "HTI", "cn": "海地"}, {
	    "id": "KOR",
	    "cn": "韩国"
	}, {"id": "NLD", "cn": "荷兰"}, {"id": "ANT", "cn": "荷属安的列斯"}, {"id": "HMD", "cn": "赫德岛和麦克唐纳岛"}, {
	    "id": "MNE",
	    "cn": "黑山"
	}, {"id": "HND", "cn": "洪都拉斯"}, {"id": "KIR", "cn": "基里巴斯"}, {"id": "DJI", "cn": "吉布提"}, {
	    "id": "KGZ",
	    "cn": "吉尔吉斯斯坦"
	}, {"id": "GIN", "cn": "几内亚"}, {"id": "GNB", "cn": "几内亚比绍"}, {"id": "CAN", "cn": "加拿大"}, {
	    "id": "GHA",
	    "cn": "加纳"
	}, {"id": "GAB", "cn": "加蓬"}, {"id": "KHM", "cn": "柬埔寨"}, {"id": "CZE", "cn": "捷克"}, {
	    "id": "ZWE",
	    "cn": "津巴布韦"
	}, {"id": "CMR", "cn": "喀麦隆"}, {"id": "QAT", "cn": "卡塔尔"}, {"id": "CYM", "cn": "开曼群岛"}, {
	    "id": "CCK",
	    "cn": "科科斯(基林)群岛"
	}, {"id": "COM", "cn": "科摩罗"}, {"id": "CIV", "cn": "科特迪瓦"}, {"id": "KWT", "cn": "科威特"}, {
	    "id": "HRV",
	    "cn": "克罗地亚"
	}, {"id": "KEN", "cn": "肯尼亚"}, {"id": "COK", "cn": "库克群岛"}, {"id": "LVA", "cn": "拉脱维亚"}, {
	    "id": "LSO",
	    "cn": "莱索托"
	}, {"id": "LAO", "cn": "老挝"}, {"id": "LBN", "cn": "黎巴嫩"}, {"id": "LTU", "cn": "立陶宛"}, {
	    "id": "LBR",
	    "cn": "利比里亚"
	}, {"id": "LBY", "cn": "利比亚"}, {"id": "LIE", "cn": "列支敦士登"}, {"id": "REU", "cn": "留尼汪"}, {
	    "id": "LUX",
	    "cn": "卢森堡"
	}, {"id": "RWA", "cn": "卢旺达"}, {"id": "ROM", "cn": "罗马尼亚"}, {"id": "MDG", "cn": "马达加斯加"}, {
	    "id": "MDV",
	    "cn": "马尔代夫"
	}, {"id": "FLK", "cn": "马尔维纳斯群岛(福克兰群岛)"}, {"id": "MLT", "cn": "马耳他"}, {"id": "MWI", "cn": "马拉维"}, {
	    "id": "MYS",
	    "cn": "马来西亚"
	}, {"id": "MLI", "cn": "马里"}, {"id": "MHL", "cn": "马绍尔群岛"}, {"id": "MKD", "cn": "马斯顿"}, {
	    "id": "MTQ",
	    "cn": "马提尼克"
	}, {"id": "MYT", "cn": "马约特"}, {"id": "MUS", "cn": "毛里求斯"}, {"id": "MRT", "cn": "毛里塔尼亚"}, {
	    "id": "USA",
	    "cn": "美国"
	}, {"id": "UMI", "cn": "美属本土外小岛屿"}, {"id": "ASM", "cn": "美属萨摩亚"}, {"id": "VIR", "cn": "美属维尔京群岛"}, {
	    "id": "MNG",
	    "cn": "蒙古"
	}, {"id": "MSR", "cn": "蒙特塞拉特"}, {"id": "BGD", "cn": "孟加拉国"}, {"id": "PER", "cn": "秘鲁"}, {
	    "id": "FSM",
	    "cn": "密克罗尼西亚"
	}, {"id": "MMR", "cn": "缅甸"}, {"id": "MDA", "cn": "摩尔多瓦"}, {"id": "MAR", "cn": "摩洛哥"}, {
	    "id": "MCO",
	    "cn": "摩纳哥"
	}, {"id": "MOZ", "cn": "莫桑比克"}, {"id": "MEX", "cn": "墨西哥"}, {"id": "NAM", "cn": "纳米比亚"}, {
	    "id": "ZAF",
	    "cn": "南非"
	}, {"id": "ATA", "cn": "南极洲"}, {"id": "SGS", "cn": "南乔治亚岛和南桑德韦奇岛"}, {"id": "YUG", "cn": "南斯拉夫"}, {
	    "id": "NRU",
	    "cn": "瑙鲁"
	}, {"id": "NPL", "cn": "尼泊尔"}, {"id": "NIC", "cn": "尼加拉瓜"}, {"id": "NER", "cn": "尼日尔"}, {
	    "id": "NGA",
	    "cn": "尼日利亚"
	}, {"id": "NIU", "cn": "纽埃"}, {"id": "NOR", "cn": "挪威"}, {"id": "NFK", "cn": "诺福克岛"}, {
	    "id": "PLW",
	    "cn": "帕劳"
	}, {"id": "PCN", "cn": "皮特凯恩群岛"}, {"id": "PRT", "cn": "葡萄牙"}, {"id": "JPN", "cn": "日本"}, {
	    "id": "SWE",
	    "cn": "瑞典"
	}, {"id": "CHE", "cn": "瑞士"}, {"id": "SLV", "cn": "萨尔瓦多"}, {"id": "SRB", "cn": "塞尔维亚"}, {
	    "id": "SCG",
	    "cn": "塞尔维亚和黑山"
	}, {"id": "SLE", "cn": "塞拉利昂"}, {"id": "SEN", "cn": "塞内加尔"}, {"id": "CYP", "cn": "塞浦路斯"}, {
	    "id": "SYC",
	    "cn": "塞舌尔"
	}, {"id": "SAU", "cn": "沙特阿拉伯"}, {"id": "CXR", "cn": "圣诞岛"}, {"id": "STP", "cn": "圣多美和普林西比"}, {
	    "id": "SHN",
	    "cn": "圣赫勒拿"
	}, {"id": "KNA", "cn": "圣基茨和尼维斯"}, {"id": "LCA", "cn": "圣卢西亚"}, {"id": "SMR", "cn": "圣马力诺"}, {
	    "id": "SPM",
	    "cn": "圣皮埃尔和密克隆"
	}, {"id": "VCT", "cn": "圣文森特和格林纳丁斯"}, {"id": "LKA", "cn": "斯里兰卡"}, {"id": "SVK", "cn": "斯洛伐克"}, {
	    "id": "SVN",
	    "cn": "斯洛文尼亚"
	}, {"id": "SJM", "cn": "斯瓦尔巴群岛和扬马群岛"}, {"id": "SWZ", "cn": "斯威士兰"}, {"id": "SDN", "cn": "苏丹"}, {
	    "id": "SUR",
	    "cn": "苏里南"
	}, {"id": "SLB", "cn": "所罗门群岛"}, {"id": "SOM", "cn": "索马里"}, {"id": "TJK", "cn": "塔吉克斯坦"}, {
	    "id": "THA",
	    "cn": "泰国"
	}, {"id": "TZA", "cn": "坦桑尼亚"}, {"id": "TON", "cn": "汤加"}, {"id": "TCA", "cn": "特克斯和凯科斯群岛"}, {
	    "id": "TTO",
	    "cn": "特立尼达和多巴哥"
	}, {"id": "TUN", "cn": "突尼斯"}, {"id": "TUV", "cn": "图瓦卢"}, {"id": "TUR", "cn": "土耳其"}, {
	    "id": "TKM",
	    "cn": "土库曼斯坦"
	}, {"id": "TKL", "cn": "托克劳"}, {"id": "WLF", "cn": "瓦利斯和富图纳群岛"}, {"id": "VUT", "cn": "瓦努阿图"}, {
	    "id": "GTM",
	    "cn": "危地马拉"
	}, {"id": "VEN", "cn": "委内瑞拉"}, {"id": "BRN", "cn": "文莱"}, {"id": "UGA", "cn": "乌干达"}, {
	    "id": "UKR",
	    "cn": "乌克兰"
	}, {"id": "URY", "cn": "乌拉圭"}, {"id": "UZB", "cn": "乌兹别克斯坦"}, {"id": "ESP", "cn": "西班牙"}, {
	    "id": "ESH",
	    "cn": "西撒哈拉"
	}, {"id": "WSM", "cn": "西萨摩亚"}, {"id": "GRC", "cn": "希腊"}, {"id": "SGP", "cn": "新加坡"}, {
	    "id": "NCL",
	    "cn": "新喀里多尼亚"
	}, {"id": "NZL", "cn": "新西兰"}, {"id": "HUN", "cn": "匈牙利"}, {"id": "SYR", "cn": "叙利亚"}, {
	    "id": "JAM",
	    "cn": "牙买加"
	}, {"id": "ARM", "cn": "亚美尼亚"}, {"id": "YEM", "cn": "也门"}, {"id": "IRQ", "cn": "伊拉克"}, {
	    "id": "IRN",
	    "cn": "伊朗"
	}, {"id": "ISR", "cn": "以色列"}, {"id": "ITA", "cn": "意大利"}, {"id": "IND", "cn": "印度"}, {
	    "id": "IDN",
	    "cn": "印度尼西亚"
	}, {"id": "GBR", "cn": "英国"}, {"id": "VGB", "cn": "英属维尔京群岛"}, {"id": "IOT", "cn": "英属印度洋领土"}, {
	    "id": "JOR",
	    "cn": "约旦"
	}, {"id": "VNM", "cn": "越南"}, {"id": "ZMB", "cn": "赞比亚"}, {"id": "ZAR", "cn": "扎伊尔"}, {
	    "id": "TCD",
	    "cn": "乍得"
	}, {"id": "GIB", "cn": "直布罗陀"}, {"id": "CHL", "cn": "智利"}, {"id": "CAF", "cn": "中非"}];
	module.exports = nationalities;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	var provinces=[{"id":"11","name":"北京市"},{"id":"31","name":"上海市"},{"id":"44","name":"广东省"},{"id":"33","name":"浙江省"},{"id":"32","name":"江苏省"},{"id":"51","name":"四川省"},{"id":"37","name":"山东省"},{"id":"21","name":"辽宁省"},{"id":"42","name":"湖北省"},{"id":"50","name":"重庆市"},{"id":"12","name":"天津市"},{"id":"61","name":"陕西省"},{"id":"34","name":"安徽省"},{"id":"43","name":"湖南省"},{"id":"41","name":"河南省"},{"id":"13","name":"河北省"},{"id":"14","name":"山西省"},{"id":"22","name":"吉林省"},{"id":"23","name":"黑龙江省"},{"id":"35","name":"福建省"},{"id":"36","name":"江西省"},{"id":"15","name":"内蒙古自治区"},{"id":"45","name":"广西壮族自治区"},{"id":"46","name":"海南省"},{"id":"52","name":"贵州省"},{"id":"53","name":"云南省"},{"id":"54","name":"西藏自治区"},{"id":"62","name":"甘肃省"},{"id":"63","name":"青海省"},{"id":"64","name":"宁夏回族自治区"},{"id":"65","name":"新疆维吾尔自治区"},{"id":"MAC","name":"中国澳门"},{"id":"HKG","name":"中国香港"},{"id":"TWN","name":"中国台湾"}];
	module.exports = provinces;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	var cities=[{"id":"1101","name":"市辖区"},{"id":"1102","name":"县"},{"id":"1201","name":"市辖区"},{"id":"1202","name":"县"},{"id":"1301","name":"石家庄市"},{"id":"1302","name":"唐山市"},{"id":"1303","name":"秦皇岛市"},{"id":"1304","name":"邯郸市"},{"id":"1305","name":"邢台市"},{"id":"1306","name":"保定市"},{"id":"1307","name":"张家口市"},{"id":"1308","name":"承德市"},{"id":"1309","name":"沧州市"},{"id":"1310","name":"廊坊市"},{"id":"1311","name":"衡水市"},{"id":"1390","name":"省直辖县级行政区划"},{"id":"1401","name":"太原市"},{"id":"1402","name":"大同市"},{"id":"1403","name":"阳泉市"},{"id":"1404","name":"长治市"},{"id":"1405","name":"晋城市"},{"id":"1406","name":"朔州市"},{"id":"1407","name":"晋中市"},{"id":"1408","name":"运城市"},{"id":"1409","name":"忻州市"},{"id":"1410","name":"临汾市"},{"id":"1411","name":"吕梁市"},{"id":"1501","name":"呼和浩特市"},{"id":"1502","name":"包头市"},{"id":"1503","name":"乌海市"},{"id":"1504","name":"赤峰市"},{"id":"1505","name":"通辽市"},{"id":"1506","name":"鄂尔多斯市"},{"id":"1507","name":"呼伦贝尔市"},{"id":"1508","name":"巴彦淖尔市"},{"id":"1509","name":"乌兰察布市"},{"id":"1522","name":"兴安盟"},{"id":"1525","name":"锡林郭勒盟"},{"id":"1529","name":"阿拉善盟"},{"id":"2101","name":"沈阳市"},{"id":"2102","name":"大连市"},{"id":"2103","name":"鞍山市"},{"id":"2104","name":"抚顺市"},{"id":"2105","name":"本溪市"},{"id":"2106","name":"丹东市"},{"id":"2107","name":"锦州市"},{"id":"2108","name":"营口市"},{"id":"2109","name":"阜新市"},{"id":"2110","name":"辽阳市"},{"id":"2111","name":"盘锦市"},{"id":"2112","name":"铁岭市"},{"id":"2113","name":"朝阳市"},{"id":"2114","name":"葫芦岛市"},{"id":"2201","name":"长春市"},{"id":"2202","name":"吉林市"},{"id":"2203","name":"四平市"},{"id":"2204","name":"辽源市"},{"id":"2205","name":"通化市"},{"id":"2206","name":"白山市"},{"id":"2207","name":"松原市"},{"id":"2208","name":"白城市"},{"id":"2224","name":"延边朝鲜族自治州"},{"id":"2301","name":"哈尔滨市"},{"id":"2302","name":"齐齐哈尔市"},{"id":"2303","name":"鸡西市"},{"id":"2304","name":"鹤岗市"},{"id":"2305","name":"双鸭山市"},{"id":"2306","name":"大庆市"},{"id":"2307","name":"伊春市"},{"id":"2308","name":"佳木斯市"},{"id":"2309","name":"七台河市"},{"id":"2310","name":"牡丹江市"},{"id":"2311","name":"黑河市"},{"id":"2312","name":"绥化市"},{"id":"2327","name":"大兴安岭地区"},{"id":"3101","name":"市辖区"},{"id":"3102","name":"县"},{"id":"3201","name":"南京市"},{"id":"3202","name":"无锡市"},{"id":"3203","name":"徐州市"},{"id":"3204","name":"常州市"},{"id":"3205","name":"苏州市"},{"id":"3206","name":"南通市"},{"id":"3207","name":"连云港市"},{"id":"3208","name":"淮安市"},{"id":"3209","name":"盐城市"},{"id":"3210","name":"扬州市"},{"id":"3211","name":"镇江市"},{"id":"3212","name":"泰州市"},{"id":"3213","name":"宿迁市"},{"id":"3301","name":"杭州市"},{"id":"3302","name":"宁波市"},{"id":"3303","name":"温州市"},{"id":"3304","name":"嘉兴市"},{"id":"3305","name":"湖州市"},{"id":"3306","name":"绍兴市"},{"id":"3307","name":"金华市"},{"id":"3308","name":"衢州市"},{"id":"3309","name":"舟山市"},{"id":"3310","name":"台州市"},{"id":"3311","name":"丽水市"},{"id":"3401","name":"合肥市"},{"id":"3402","name":"芜湖市"},{"id":"3403","name":"蚌埠市"},{"id":"3404","name":"淮南市"},{"id":"3405","name":"马鞍山市"},{"id":"3406","name":"淮北市"},{"id":"3407","name":"铜陵市"},{"id":"3408","name":"安庆市"},{"id":"3410","name":"黄山市"},{"id":"3411","name":"滁州市"},{"id":"3412","name":"阜阳市"},{"id":"3413","name":"宿州市"},{"id":"3415","name":"六安市"},{"id":"3416","name":"亳州市"},{"id":"3417","name":"池州市"},{"id":"3418","name":"宣城市"},{"id":"3501","name":"福州市"},{"id":"3502","name":"厦门市"},{"id":"3503","name":"莆田市"},{"id":"3504","name":"三明市"},{"id":"3505","name":"泉州市"},{"id":"3506","name":"漳州市"},{"id":"3507","name":"南平市"},{"id":"3508","name":"龙岩市"},{"id":"3509","name":"宁德市"},{"id":"3601","name":"南昌市"},{"id":"3602","name":"景德镇市"},{"id":"3603","name":"萍乡市"},{"id":"3604","name":"九江市"},{"id":"3605","name":"新余市"},{"id":"3606","name":"鹰潭市"},{"id":"3607","name":"赣州市"},{"id":"3608","name":"吉安市"},{"id":"3609","name":"宜春市"},{"id":"3610","name":"抚州市"},{"id":"3611","name":"上饶市"},{"id":"3701","name":"济南市"},{"id":"3702","name":"青岛市"},{"id":"3703","name":"淄博市"},{"id":"3704","name":"枣庄市"},{"id":"3705","name":"东营市"},{"id":"3706","name":"烟台市"},{"id":"3707","name":"潍坊市"},{"id":"3708","name":"济宁市"},{"id":"3709","name":"泰安市"},{"id":"3710","name":"威海市"},{"id":"3711","name":"日照市"},{"id":"3712","name":"莱芜市"},{"id":"3713","name":"临沂市"},{"id":"3714","name":"德州市"},{"id":"3715","name":"聊城市"},{"id":"3716","name":"滨州市"},{"id":"3717","name":"菏泽市"},{"id":"4101","name":"郑州市"},{"id":"4102","name":"开封市"},{"id":"4103","name":"洛阳市"},{"id":"4104","name":"平顶山市"},{"id":"4105","name":"安阳市"},{"id":"4106","name":"鹤壁市"},{"id":"4107","name":"新乡市"},{"id":"4108","name":"焦作市"},{"id":"4109","name":"濮阳市"},{"id":"4110","name":"许昌市"},{"id":"4111","name":"漯河市"},{"id":"4112","name":"三门峡市"},{"id":"4113","name":"南阳市"},{"id":"4114","name":"商丘市"},{"id":"4115","name":"信阳市"},{"id":"4116","name":"周口市"},{"id":"4117","name":"驻马店市"},{"id":"4190","name":"省直辖县级行政区划"},{"id":"4201","name":"武汉市"},{"id":"4202","name":"黄石市"},{"id":"4203","name":"十堰市"},{"id":"4205","name":"宜昌市"},{"id":"4206","name":"襄阳市"},{"id":"4207","name":"鄂州市"},{"id":"4208","name":"荆门市"},{"id":"4209","name":"孝感市"},{"id":"4210","name":"荆州市"},{"id":"4211","name":"黄冈市"},{"id":"4212","name":"咸宁市"},{"id":"4213","name":"随州市"},{"id":"4228","name":"恩施土家族苗族自治州"},{"id":"4290","name":"省直辖县级行政区划"},{"id":"4301","name":"长沙市"},{"id":"4302","name":"株洲市"},{"id":"4303","name":"湘潭市"},{"id":"4304","name":"衡阳市"},{"id":"4305","name":"邵阳市"},{"id":"4306","name":"岳阳市"},{"id":"4307","name":"常德市"},{"id":"4308","name":"张家界市"},{"id":"4309","name":"益阳市"},{"id":"4310","name":"郴州市"},{"id":"4311","name":"永州市"},{"id":"4312","name":"怀化市"},{"id":"4313","name":"娄底市"},{"id":"4331","name":"湘西土家族苗族自治州"},{"id":"4401","name":"广州市"},{"id":"4402","name":"韶关市"},{"id":"4403","name":"深圳市"},{"id":"4404","name":"珠海市"},{"id":"4405","name":"汕头市"},{"id":"4406","name":"佛山市"},{"id":"4407","name":"江门市"},{"id":"4408","name":"湛江市"},{"id":"4409","name":"茂名市"},{"id":"4412","name":"肇庆市"},{"id":"4413","name":"惠州市"},{"id":"4414","name":"梅州市"},{"id":"4415","name":"汕尾市"},{"id":"4416","name":"河源市"},{"id":"4417","name":"阳江市"},{"id":"4418","name":"清远市"},{"id":"4419","name":"东莞市"},{"id":"4420","name":"中山市"},{"id":"4451","name":"潮州市"},{"id":"4452","name":"揭阳市"},{"id":"4453","name":"云浮市"},{"id":"4501","name":"南宁市"},{"id":"4502","name":"柳州市"},{"id":"4503","name":"桂林市"},{"id":"4504","name":"梧州市"},{"id":"4505","name":"北海市"},{"id":"4506","name":"防城港市"},{"id":"4507","name":"钦州市"},{"id":"4508","name":"贵港市"},{"id":"4509","name":"玉林市"},{"id":"4510","name":"百色市"},{"id":"4511","name":"贺州市"},{"id":"4512","name":"河池市"},{"id":"4513","name":"来宾市"},{"id":"4514","name":"崇左市"},{"id":"4601","name":"海口市"},{"id":"4602","name":"三亚市"},{"id":"4603","name":"三沙市"},{"id":"4690","name":"省直辖县级行政区划"},{"id":"5001","name":"市辖区"},{"id":"5002","name":"县"},{"id":"5101","name":"成都市"},{"id":"5103","name":"自贡市"},{"id":"5104","name":"攀枝花市"},{"id":"5105","name":"泸州市"},{"id":"5106","name":"德阳市"},{"id":"5107","name":"绵阳市"},{"id":"5108","name":"广元市"},{"id":"5109","name":"遂宁市"},{"id":"5110","name":"内江市"},{"id":"5111","name":"乐山市"},{"id":"5113","name":"南充市"},{"id":"5114","name":"眉山市"},{"id":"5115","name":"宜宾市"},{"id":"5116","name":"广安市"},{"id":"5117","name":"达州市"},{"id":"5118","name":"雅安市"},{"id":"5119","name":"巴中市"},{"id":"5120","name":"资阳市"},{"id":"5132","name":"阿坝藏族羌族自治州"},{"id":"5133","name":"甘孜藏族自治州"},{"id":"5134","name":"凉山彝族自治州"},{"id":"5201","name":"贵阳市"},{"id":"5202","name":"六盘水市"},{"id":"5203","name":"遵义市"},{"id":"5204","name":"安顺市"},{"id":"5205","name":"毕节市"},{"id":"5206","name":"铜仁市"},{"id":"5223","name":"黔西南布依族苗族自治州"},{"id":"5226","name":"黔东南苗族侗族自治州"},{"id":"5227","name":"黔南布依族苗族自治州"},{"id":"5301","name":"昆明市"},{"id":"5303","name":"曲靖市"},{"id":"5304","name":"玉溪市"},{"id":"5305","name":"保山市"},{"id":"5306","name":"昭通市"},{"id":"5307","name":"丽江市"},{"id":"5308","name":"普洱市"},{"id":"5309","name":"临沧市"},{"id":"5323","name":"楚雄彝族自治州"},{"id":"5325","name":"红河哈尼族彝族自治州"},{"id":"5326","name":"文山壮族苗族自治州"},{"id":"5328","name":"西双版纳傣族自治州"},{"id":"5329","name":"大理白族自治州"},{"id":"5331","name":"德宏傣族景颇族自治州"},{"id":"5333","name":"怒江傈僳族自治州"},{"id":"5334","name":"迪庆藏族自治州"},{"id":"5401","name":"拉萨市"},{"id":"5402","name":"日喀则市"},{"id":"5403","name":"昌都市"},{"id":"5404","name":"林芝市"},{"id":"5422","name":"山南地区"},{"id":"5424","name":"那曲地区"},{"id":"5425","name":"阿里地区"},{"id":"6101","name":"西安市"},{"id":"6102","name":"铜川市"},{"id":"6103","name":"宝鸡市"},{"id":"6104","name":"咸阳市"},{"id":"6105","name":"渭南市"},{"id":"6106","name":"延安市"},{"id":"6107","name":"汉中市"},{"id":"6108","name":"榆林市"},{"id":"6109","name":"安康市"},{"id":"6110","name":"商洛市"},{"id":"6201","name":"兰州市"},{"id":"6202","name":"嘉峪关市"},{"id":"6203","name":"金昌市"},{"id":"6204","name":"白银市"},{"id":"6205","name":"天水市"},{"id":"6206","name":"武威市"},{"id":"6207","name":"张掖市"},{"id":"6208","name":"平凉市"},{"id":"6209","name":"酒泉市"},{"id":"6210","name":"庆阳市"},{"id":"6211","name":"定西市"},{"id":"6212","name":"陇南市"},{"id":"6229","name":"临夏回族自治州"},{"id":"6230","name":"甘南藏族自治州"},{"id":"6301","name":"西宁市"},{"id":"6302","name":"海东市"},{"id":"6322","name":"海北藏族自治州"},{"id":"6323","name":"黄南藏族自治州"},{"id":"6325","name":"海南藏族自治州"},{"id":"6326","name":"果洛藏族自治州"},{"id":"6327","name":"玉树藏族自治州"},{"id":"6328","name":"海西蒙古族藏族自治州"},{"id":"6401","name":"银川市"},{"id":"6402","name":"石嘴山市"},{"id":"6403","name":"吴忠市"},{"id":"6404","name":"固原市"},{"id":"6405","name":"中卫市"},{"id":"6501","name":"乌鲁木齐市"},{"id":"6502","name":"克拉玛依市"},{"id":"6504","name":"吐鲁番市"},{"id":"6522","name":"哈密地区"},{"id":"6523","name":"昌吉回族自治州"},{"id":"6527","name":"博尔塔拉蒙古自治州"},{"id":"6528","name":"巴音郭楞蒙古自治州"},{"id":"6529","name":"阿克苏地区"},{"id":"6530","name":"克孜勒苏柯尔克孜自治州"},{"id":"6531","name":"喀什地区"},{"id":"6532","name":"和田地区"},{"id":"6540","name":"伊犁哈萨克自治州"},{"id":"6542","name":"塔城地区"},{"id":"6543","name":"阿勒泰地区"},{"id":"6590","name":"自治区直辖县级行政区划"},{"id":"MAC","name":""},{"id":"HKG","name":""},{"id":"TWN","name":""}];
	module.exports = cities;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	var districts=[{"id":"110101","name":"东城区"},{"id":"110102","name":"西城区"},{"id":"110105","name":"朝阳区"},{"id":"110106","name":"丰台区"},{"id":"110107","name":"石景山区"},{"id":"110108","name":"海淀区"},{"id":"110109","name":"门头沟区"},{"id":"110111","name":"房山区"},{"id":"110112","name":"通州区"},{"id":"110113","name":"顺义区"},{"id":"110114","name":"昌平区"},{"id":"110115","name":"大兴区"},{"id":"110116","name":"怀柔区"},{"id":"110117","name":"平谷区"},{"id":"110228","name":"密云县"},{"id":"110229","name":"延庆县"},{"id":"120101","name":"和平区"},{"id":"120102","name":"河东区"},{"id":"120103","name":"河西区"},{"id":"120104","name":"南开区"},{"id":"120105","name":"河北区"},{"id":"120106","name":"红桥区"},{"id":"120110","name":"东丽区"},{"id":"120111","name":"西青区"},{"id":"120112","name":"津南区"},{"id":"120113","name":"北辰区"},{"id":"120114","name":"武清区"},{"id":"120115","name":"宝坻区"},{"id":"120116","name":"滨海新区"},{"id":"120117","name":"宁河区"},{"id":"120118","name":"静海区"},{"id":"120225","name":"蓟县"},{"id":"130101","name":"市辖区"},{"id":"130102","name":"长安区"},{"id":"130104","name":"桥西区"},{"id":"130105","name":"新华区"},{"id":"130107","name":"井陉矿区"},{"id":"130108","name":"裕华区"},{"id":"130109","name":"藁城区"},{"id":"130110","name":"鹿泉区"},{"id":"130111","name":"栾城区"},{"id":"130121","name":"井陉县"},{"id":"130123","name":"正定县"},{"id":"130125","name":"行唐县"},{"id":"130126","name":"灵寿县"},{"id":"130127","name":"高邑县"},{"id":"130128","name":"深泽县"},{"id":"130129","name":"赞皇县"},{"id":"130130","name":"无极县"},{"id":"130131","name":"平山县"},{"id":"130132","name":"元氏县"},{"id":"130133","name":"赵县"},{"id":"130183","name":"晋州市"},{"id":"130184","name":"新乐市"},{"id":"130201","name":"市辖区"},{"id":"130202","name":"路南区"},{"id":"130203","name":"路北区"},{"id":"130204","name":"古冶区"},{"id":"130205","name":"开平区"},{"id":"130207","name":"丰南区"},{"id":"130208","name":"丰润区"},{"id":"130209","name":"曹妃甸区"},{"id":"130223","name":"滦县"},{"id":"130224","name":"滦南县"},{"id":"130225","name":"乐亭县"},{"id":"130227","name":"迁西县"},{"id":"130229","name":"玉田县"},{"id":"130281","name":"遵化市"},{"id":"130283","name":"迁安市"},{"id":"130301","name":"市辖区"},{"id":"130302","name":"海港区"},{"id":"130303","name":"山海关区"},{"id":"130304","name":"北戴河区"},{"id":"130306","name":"抚宁区"},{"id":"130321","name":"青龙满族自治县"},{"id":"130322","name":"昌黎县"},{"id":"130324","name":"卢龙县"},{"id":"130401","name":"市辖区"},{"id":"130402","name":"邯山区"},{"id":"130403","name":"丛台区"},{"id":"130404","name":"复兴区"},{"id":"130406","name":"峰峰矿区"},{"id":"130421","name":"邯郸县"},{"id":"130423","name":"临漳县"},{"id":"130424","name":"成安县"},{"id":"130425","name":"大名县"},{"id":"130426","name":"涉县"},{"id":"130427","name":"磁县"},{"id":"130428","name":"肥乡县"},{"id":"130429","name":"永年县"},{"id":"130430","name":"邱县"},{"id":"130431","name":"鸡泽县"},{"id":"130432","name":"广平县"},{"id":"130433","name":"馆陶县"},{"id":"130434","name":"魏县"},{"id":"130435","name":"曲周县"},{"id":"130481","name":"武安市"},{"id":"130501","name":"市辖区"},{"id":"130502","name":"桥东区"},{"id":"130503","name":"桥西区"},{"id":"130521","name":"邢台县"},{"id":"130522","name":"临城县"},{"id":"130523","name":"内丘县"},{"id":"130524","name":"柏乡县"},{"id":"130525","name":"隆尧县"},{"id":"130526","name":"任县"},{"id":"130527","name":"南和县"},{"id":"130528","name":"宁晋县"},{"id":"130529","name":"巨鹿县"},{"id":"130530","name":"新河县"},{"id":"130531","name":"广宗县"},{"id":"130532","name":"平乡县"},{"id":"130533","name":"威县"},{"id":"130534","name":"清河县"},{"id":"130535","name":"临西县"},{"id":"130581","name":"南宫市"},{"id":"130582","name":"沙河市"},{"id":"130601","name":"市辖区"},{"id":"130602","name":"竞秀区"},{"id":"130606","name":"莲池区"},{"id":"130607","name":"满城区"},{"id":"130608","name":"清苑区"},{"id":"130609","name":"徐水区"},{"id":"130623","name":"涞水县"},{"id":"130624","name":"阜平县"},{"id":"130626","name":"定兴县"},{"id":"130627","name":"唐县"},{"id":"130628","name":"高阳县"},{"id":"130629","name":"容城县"},{"id":"130630","name":"涞源县"},{"id":"130631","name":"望都县"},{"id":"130632","name":"安新县"},{"id":"130633","name":"易县"},{"id":"130634","name":"曲阳县"},{"id":"130635","name":"蠡县"},{"id":"130636","name":"顺平县"},{"id":"130637","name":"博野县"},{"id":"130638","name":"雄县"},{"id":"130681","name":"涿州市"},{"id":"130683","name":"安国市"},{"id":"130684","name":"高碑店市"},{"id":"130701","name":"市辖区"},{"id":"130702","name":"桥东区"},{"id":"130703","name":"桥西区"},{"id":"130705","name":"宣化区"},{"id":"130706","name":"下花园区"},{"id":"130721","name":"宣化县"},{"id":"130722","name":"张北县"},{"id":"130723","name":"康保县"},{"id":"130724","name":"沽源县"},{"id":"130725","name":"尚义县"},{"id":"130726","name":"蔚县"},{"id":"130727","name":"阳原县"},{"id":"130728","name":"怀安县"},{"id":"130729","name":"万全县"},{"id":"130730","name":"怀来县"},{"id":"130731","name":"涿鹿县"},{"id":"130732","name":"赤城县"},{"id":"130733","name":"崇礼县"},{"id":"130801","name":"市辖区"},{"id":"130802","name":"双桥区"},{"id":"130803","name":"双滦区"},{"id":"130804","name":"鹰手营子矿区"},{"id":"130821","name":"承德县"},{"id":"130822","name":"兴隆县"},{"id":"130823","name":"平泉县"},{"id":"130824","name":"滦平县"},{"id":"130825","name":"隆化县"},{"id":"130826","name":"丰宁满族自治县"},{"id":"130827","name":"宽城满族自治县"},{"id":"130828","name":"围场满族蒙古族自治县"},{"id":"130901","name":"市辖区"},{"id":"130902","name":"新华区"},{"id":"130903","name":"运河区"},{"id":"130921","name":"沧县"},{"id":"130922","name":"青县"},{"id":"130923","name":"东光县"},{"id":"130924","name":"海兴县"},{"id":"130925","name":"盐山县"},{"id":"130926","name":"肃宁县"},{"id":"130927","name":"南皮县"},{"id":"130928","name":"吴桥县"},{"id":"130929","name":"献县"},{"id":"130930","name":"孟村回族自治县"},{"id":"130981","name":"泊头市"},{"id":"130982","name":"任丘市"},{"id":"130983","name":"黄骅市"},{"id":"130984","name":"河间市"},{"id":"131001","name":"市辖区"},{"id":"131002","name":"安次区"},{"id":"131003","name":"广阳区"},{"id":"131022","name":"固安县"},{"id":"131023","name":"永清县"},{"id":"131024","name":"香河县"},{"id":"131025","name":"大城县"},{"id":"131026","name":"文安县"},{"id":"131028","name":"大厂回族自治县"},{"id":"131081","name":"霸州市"},{"id":"131082","name":"三河市"},{"id":"131101","name":"市辖区"},{"id":"131102","name":"桃城区"},{"id":"131121","name":"枣强县"},{"id":"131122","name":"武邑县"},{"id":"131123","name":"武强县"},{"id":"131124","name":"饶阳县"},{"id":"131125","name":"安平县"},{"id":"131126","name":"故城县"},{"id":"131127","name":"景县"},{"id":"131128","name":"阜城县"},{"id":"131181","name":"冀州市"},{"id":"131182","name":"深州市"},{"id":"139001","name":"定州市"},{"id":"139002","name":"辛集市"},{"id":"140101","name":"市辖区"},{"id":"140105","name":"小店区"},{"id":"140106","name":"迎泽区"},{"id":"140107","name":"杏花岭区"},{"id":"140108","name":"尖草坪区"},{"id":"140109","name":"万柏林区"},{"id":"140110","name":"晋源区"},{"id":"140121","name":"清徐县"},{"id":"140122","name":"阳曲县"},{"id":"140123","name":"娄烦县"},{"id":"140181","name":"古交市"},{"id":"140201","name":"市辖区"},{"id":"140202","name":"城区"},{"id":"140203","name":"矿区"},{"id":"140211","name":"南郊区"},{"id":"140212","name":"新荣区"},{"id":"140221","name":"阳高县"},{"id":"140222","name":"天镇县"},{"id":"140223","name":"广灵县"},{"id":"140224","name":"灵丘县"},{"id":"140225","name":"浑源县"},{"id":"140226","name":"左云县"},{"id":"140227","name":"大同县"},{"id":"140301","name":"市辖区"},{"id":"140302","name":"城区"},{"id":"140303","name":"矿区"},{"id":"140311","name":"郊区"},{"id":"140321","name":"平定县"},{"id":"140322","name":"盂县"},{"id":"140401","name":"市辖区"},{"id":"140402","name":"城区"},{"id":"140411","name":"郊区"},{"id":"140421","name":"长治县"},{"id":"140423","name":"襄垣县"},{"id":"140424","name":"屯留县"},{"id":"140425","name":"平顺县"},{"id":"140426","name":"黎城县"},{"id":"140427","name":"壶关县"},{"id":"140428","name":"长子县"},{"id":"140429","name":"武乡县"},{"id":"140430","name":"沁县"},{"id":"140431","name":"沁源县"},{"id":"140481","name":"潞城市"},{"id":"140501","name":"市辖区"},{"id":"140502","name":"城区"},{"id":"140521","name":"沁水县"},{"id":"140522","name":"阳城县"},{"id":"140524","name":"陵川县"},{"id":"140525","name":"泽州县"},{"id":"140581","name":"高平市"},{"id":"140601","name":"市辖区"},{"id":"140602","name":"朔城区"},{"id":"140603","name":"平鲁区"},{"id":"140621","name":"山阴县"},{"id":"140622","name":"应县"},{"id":"140623","name":"右玉县"},{"id":"140624","name":"怀仁县"},{"id":"140701","name":"市辖区"},{"id":"140702","name":"榆次区"},{"id":"140721","name":"榆社县"},{"id":"140722","name":"左权县"},{"id":"140723","name":"和顺县"},{"id":"140724","name":"昔阳县"},{"id":"140725","name":"寿阳县"},{"id":"140726","name":"太谷县"},{"id":"140727","name":"祁县"},{"id":"140728","name":"平遥县"},{"id":"140729","name":"灵石县"},{"id":"140781","name":"介休市"},{"id":"140801","name":"市辖区"},{"id":"140802","name":"盐湖区"},{"id":"140821","name":"临猗县"},{"id":"140822","name":"万荣县"},{"id":"140823","name":"闻喜县"},{"id":"140824","name":"稷山县"},{"id":"140825","name":"新绛县"},{"id":"140826","name":"绛县"},{"id":"140827","name":"垣曲县"},{"id":"140828","name":"夏县"},{"id":"140829","name":"平陆县"},{"id":"140830","name":"芮城县"},{"id":"140881","name":"永济市"},{"id":"140882","name":"河津市"},{"id":"140901","name":"市辖区"},{"id":"140902","name":"忻府区"},{"id":"140921","name":"定襄县"},{"id":"140922","name":"五台县"},{"id":"140923","name":"代县"},{"id":"140924","name":"繁峙县"},{"id":"140925","name":"宁武县"},{"id":"140926","name":"静乐县"},{"id":"140927","name":"神池县"},{"id":"140928","name":"五寨县"},{"id":"140929","name":"岢岚县"},{"id":"140930","name":"河曲县"},{"id":"140931","name":"保德县"},{"id":"140932","name":"偏关县"},{"id":"140981","name":"原平市"},{"id":"141001","name":"市辖区"},{"id":"141002","name":"尧都区"},{"id":"141021","name":"曲沃县"},{"id":"141022","name":"翼城县"},{"id":"141023","name":"襄汾县"},{"id":"141024","name":"洪洞县"},{"id":"141025","name":"古县"},{"id":"141026","name":"安泽县"},{"id":"141027","name":"浮山县"},{"id":"141028","name":"吉县"},{"id":"141029","name":"乡宁县"},{"id":"141030","name":"大宁县"},{"id":"141031","name":"隰县"},{"id":"141032","name":"永和县"},{"id":"141033","name":"蒲县"},{"id":"141034","name":"汾西县"},{"id":"141081","name":"侯马市"},{"id":"141082","name":"霍州市"},{"id":"141101","name":"市辖区"},{"id":"141102","name":"离石区"},{"id":"141121","name":"文水县"},{"id":"141122","name":"交城县"},{"id":"141123","name":"兴县"},{"id":"141124","name":"临县"},{"id":"141125","name":"柳林县"},{"id":"141126","name":"石楼县"},{"id":"141127","name":"岚县"},{"id":"141128","name":"方山县"},{"id":"141129","name":"中阳县"},{"id":"141130","name":"交口县"},{"id":"141181","name":"孝义市"},{"id":"141182","name":"汾阳市"},{"id":"150101","name":"市辖区"},{"id":"150102","name":"新城区"},{"id":"150103","name":"回民区"},{"id":"150104","name":"玉泉区"},{"id":"150105","name":"赛罕区"},{"id":"150121","name":"土默特左旗"},{"id":"150122","name":"托克托县"},{"id":"150123","name":"和林格尔县"},{"id":"150124","name":"清水河县"},{"id":"150125","name":"武川县"},{"id":"150201","name":"市辖区"},{"id":"150202","name":"东河区"},{"id":"150203","name":"昆都仑区"},{"id":"150204","name":"青山区"},{"id":"150205","name":"石拐区"},{"id":"150206","name":"白云鄂博矿区"},{"id":"150207","name":"九原区"},{"id":"150221","name":"土默特右旗"},{"id":"150222","name":"固阳县"},{"id":"150223","name":"达尔罕茂明安联合旗"},{"id":"150301","name":"市辖区"},{"id":"150302","name":"海勃湾区"},{"id":"150303","name":"海南区"},{"id":"150304","name":"乌达区"},{"id":"150401","name":"市辖区"},{"id":"150402","name":"红山区"},{"id":"150403","name":"元宝山区"},{"id":"150404","name":"松山区"},{"id":"150421","name":"阿鲁科尔沁旗"},{"id":"150422","name":"巴林左旗"},{"id":"150423","name":"巴林右旗"},{"id":"150424","name":"林西县"},{"id":"150425","name":"克什克腾旗"},{"id":"150426","name":"翁牛特旗"},{"id":"150428","name":"喀喇沁旗"},{"id":"150429","name":"宁城县"},{"id":"150430","name":"敖汉旗"},{"id":"150501","name":"市辖区"},{"id":"150502","name":"科尔沁区"},{"id":"150521","name":"科尔沁左翼中旗"},{"id":"150522","name":"科尔沁左翼后旗"},{"id":"150523","name":"开鲁县"},{"id":"150524","name":"库伦旗"},{"id":"150525","name":"奈曼旗"},{"id":"150526","name":"扎鲁特旗"},{"id":"150581","name":"霍林郭勒市"},{"id":"150601","name":"市辖区"},{"id":"150602","name":"东胜区"},{"id":"150621","name":"达拉特旗"},{"id":"150622","name":"准格尔旗"},{"id":"150623","name":"鄂托克前旗"},{"id":"150624","name":"鄂托克旗"},{"id":"150625","name":"杭锦旗"},{"id":"150626","name":"乌审旗"},{"id":"150627","name":"伊金霍洛旗"},{"id":"150701","name":"市辖区"},{"id":"150702","name":"海拉尔区"},{"id":"150703","name":"扎赉诺尔区"},{"id":"150721","name":"阿荣旗"},{"id":"150722","name":"莫力达瓦达斡尔族自治旗"},{"id":"150723","name":"鄂伦春自治旗"},{"id":"150724","name":"鄂温克族自治旗"},{"id":"150725","name":"陈巴尔虎旗"},{"id":"150726","name":"新巴尔虎左旗"},{"id":"150727","name":"新巴尔虎右旗"},{"id":"150781","name":"满洲里市"},{"id":"150782","name":"牙克石市"},{"id":"150783","name":"扎兰屯市"},{"id":"150784","name":"额尔古纳市"},{"id":"150785","name":"根河市"},{"id":"150801","name":"市辖区"},{"id":"150802","name":"临河区"},{"id":"150821","name":"五原县"},{"id":"150822","name":"磴口县"},{"id":"150823","name":"乌拉特前旗"},{"id":"150824","name":"乌拉特中旗"},{"id":"150825","name":"乌拉特后旗"},{"id":"150826","name":"杭锦后旗"},{"id":"150901","name":"市辖区"},{"id":"150902","name":"集宁区"},{"id":"150921","name":"卓资县"},{"id":"150922","name":"化德县"},{"id":"150923","name":"商都县"},{"id":"150924","name":"兴和县"},{"id":"150925","name":"凉城县"},{"id":"150926","name":"察哈尔右翼前旗"},{"id":"150927","name":"察哈尔右翼中旗"},{"id":"150928","name":"察哈尔右翼后旗"},{"id":"150929","name":"四子王旗"},{"id":"150981","name":"丰镇市"},{"id":"152201","name":"乌兰浩特市"},{"id":"152202","name":"阿尔山市"},{"id":"152221","name":"科尔沁右翼前旗"},{"id":"152222","name":"科尔沁右翼中旗"},{"id":"152223","name":"扎赉特旗"},{"id":"152224","name":"突泉县"},{"id":"152501","name":"二连浩特市"},{"id":"152502","name":"锡林浩特市"},{"id":"152522","name":"阿巴嘎旗"},{"id":"152523","name":"苏尼特左旗"},{"id":"152524","name":"苏尼特右旗"},{"id":"152525","name":"东乌珠穆沁旗"},{"id":"152526","name":"西乌珠穆沁旗"},{"id":"152527","name":"太仆寺旗"},{"id":"152528","name":"镶黄旗"},{"id":"152529","name":"正镶白旗"},{"id":"152530","name":"正蓝旗"},{"id":"152531","name":"多伦县"},{"id":"152921","name":"阿拉善左旗"},{"id":"152922","name":"阿拉善右旗"},{"id":"152923","name":"额济纳旗"},{"id":"210101","name":"市辖区"},{"id":"210102","name":"和平区"},{"id":"210103","name":"沈河区"},{"id":"210104","name":"大东区"},{"id":"210105","name":"皇姑区"},{"id":"210106","name":"铁西区"},{"id":"210111","name":"苏家屯区"},{"id":"210112","name":"浑南区"},{"id":"210113","name":"沈北新区"},{"id":"210114","name":"于洪区"},{"id":"210122","name":"辽中县"},{"id":"210123","name":"康平县"},{"id":"210124","name":"法库县"},{"id":"210181","name":"新民市"},{"id":"210201","name":"市辖区"},{"id":"210202","name":"中山区"},{"id":"210203","name":"西岗区"},{"id":"210204","name":"沙河口区"},{"id":"210211","name":"甘井子区"},{"id":"210212","name":"旅顺口区"},{"id":"210213","name":"金州区"},{"id":"210224","name":"长海县"},{"id":"210281","name":"瓦房店市"},{"id":"210282","name":"普兰店市"},{"id":"210283","name":"庄河市"},{"id":"210301","name":"市辖区"},{"id":"210302","name":"铁东区"},{"id":"210303","name":"铁西区"},{"id":"210304","name":"立山区"},{"id":"210311","name":"千山区"},{"id":"210321","name":"台安县"},{"id":"210323","name":"岫岩满族自治县"},{"id":"210381","name":"海城市"},{"id":"210401","name":"市辖区"},{"id":"210402","name":"新抚区"},{"id":"210403","name":"东洲区"},{"id":"210404","name":"望花区"},{"id":"210411","name":"顺城区"},{"id":"210421","name":"抚顺县"},{"id":"210422","name":"新宾满族自治县"},{"id":"210423","name":"清原满族自治县"},{"id":"210501","name":"市辖区"},{"id":"210502","name":"平山区"},{"id":"210503","name":"溪湖区"},{"id":"210504","name":"明山区"},{"id":"210505","name":"南芬区"},{"id":"210521","name":"本溪满族自治县"},{"id":"210522","name":"桓仁满族自治县"},{"id":"210601","name":"市辖区"},{"id":"210602","name":"元宝区"},{"id":"210603","name":"振兴区"},{"id":"210604","name":"振安区"},{"id":"210624","name":"宽甸满族自治县"},{"id":"210681","name":"东港市"},{"id":"210682","name":"凤城市"},{"id":"210701","name":"市辖区"},{"id":"210702","name":"古塔区"},{"id":"210703","name":"凌河区"},{"id":"210711","name":"太和区"},{"id":"210726","name":"黑山县"},{"id":"210727","name":"义县"},{"id":"210781","name":"凌海市"},{"id":"210782","name":"北镇市"},{"id":"210801","name":"市辖区"},{"id":"210802","name":"站前区"},{"id":"210803","name":"西市区"},{"id":"210804","name":"鲅鱼圈区"},{"id":"210811","name":"老边区"},{"id":"210881","name":"盖州市"},{"id":"210882","name":"大石桥市"},{"id":"210901","name":"市辖区"},{"id":"210902","name":"海州区"},{"id":"210903","name":"新邱区"},{"id":"210904","name":"太平区"},{"id":"210905","name":"清河门区"},{"id":"210911","name":"细河区"},{"id":"210921","name":"阜新蒙古族自治县"},{"id":"210922","name":"彰武县"},{"id":"211001","name":"市辖区"},{"id":"211002","name":"白塔区"},{"id":"211003","name":"文圣区"},{"id":"211004","name":"宏伟区"},{"id":"211005","name":"弓长岭区"},{"id":"211011","name":"太子河区"},{"id":"211021","name":"辽阳县"},{"id":"211081","name":"灯塔市"},{"id":"211101","name":"市辖区"},{"id":"211102","name":"双台子区"},{"id":"211103","name":"兴隆台区"},{"id":"211121","name":"大洼县"},{"id":"211122","name":"盘山县"},{"id":"211201","name":"市辖区"},{"id":"211202","name":"银州区"},{"id":"211204","name":"清河区"},{"id":"211221","name":"铁岭县"},{"id":"211223","name":"西丰县"},{"id":"211224","name":"昌图县"},{"id":"211281","name":"调兵山市"},{"id":"211282","name":"开原市"},{"id":"211301","name":"市辖区"},{"id":"211302","name":"双塔区"},{"id":"211303","name":"龙城区"},{"id":"211321","name":"朝阳县"},{"id":"211322","name":"建平县"},{"id":"211324","name":"喀喇沁左翼蒙古族自治县"},{"id":"211381","name":"北票市"},{"id":"211382","name":"凌源市"},{"id":"211401","name":"市辖区"},{"id":"211402","name":"连山区"},{"id":"211403","name":"龙港区"},{"id":"211404","name":"南票区"},{"id":"211421","name":"绥中县"},{"id":"211422","name":"建昌县"},{"id":"211481","name":"兴城市"},{"id":"220101","name":"市辖区"},{"id":"220102","name":"南关区"},{"id":"220103","name":"宽城区"},{"id":"220104","name":"朝阳区"},{"id":"220105","name":"二道区"},{"id":"220106","name":"绿园区"},{"id":"220112","name":"双阳区"},{"id":"220113","name":"九台区"},{"id":"220122","name":"农安县"},{"id":"220182","name":"榆树市"},{"id":"220183","name":"德惠市"},{"id":"220201","name":"市辖区"},{"id":"220202","name":"昌邑区"},{"id":"220203","name":"龙潭区"},{"id":"220204","name":"船营区"},{"id":"220211","name":"丰满区"},{"id":"220221","name":"永吉县"},{"id":"220281","name":"蛟河市"},{"id":"220282","name":"桦甸市"},{"id":"220283","name":"舒兰市"},{"id":"220284","name":"磐石市"},{"id":"220301","name":"市辖区"},{"id":"220302","name":"铁西区"},{"id":"220303","name":"铁东区"},{"id":"220322","name":"梨树县"},{"id":"220323","name":"伊通满族自治县"},{"id":"220381","name":"公主岭市"},{"id":"220382","name":"双辽市"},{"id":"220401","name":"市辖区"},{"id":"220402","name":"龙山区"},{"id":"220403","name":"西安区"},{"id":"220421","name":"东丰县"},{"id":"220422","name":"东辽县"},{"id":"220501","name":"市辖区"},{"id":"220502","name":"东昌区"},{"id":"220503","name":"二道江区"},{"id":"220521","name":"通化县"},{"id":"220523","name":"辉南县"},{"id":"220524","name":"柳河县"},{"id":"220581","name":"梅河口市"},{"id":"220582","name":"集安市"},{"id":"220601","name":"市辖区"},{"id":"220602","name":"浑江区"},{"id":"220605","name":"江源区"},{"id":"220621","name":"抚松县"},{"id":"220622","name":"靖宇县"},{"id":"220623","name":"长白朝鲜族自治县"},{"id":"220681","name":"临江市"},{"id":"220701","name":"市辖区"},{"id":"220702","name":"宁江区"},{"id":"220721","name":"前郭尔罗斯蒙古族自治县"},{"id":"220722","name":"长岭县"},{"id":"220723","name":"乾安县"},{"id":"220781","name":"扶余市"},{"id":"220801","name":"市辖区"},{"id":"220802","name":"洮北区"},{"id":"220821","name":"镇赉县"},{"id":"220822","name":"通榆县"},{"id":"220881","name":"洮南市"},{"id":"220882","name":"大安市"},{"id":"222401","name":"延吉市"},{"id":"222402","name":"图们市"},{"id":"222403","name":"敦化市"},{"id":"222404","name":"珲春市"},{"id":"222405","name":"龙井市"},{"id":"222406","name":"和龙市"},{"id":"222424","name":"汪清县"},{"id":"222426","name":"安图县"},{"id":"230101","name":"市辖区"},{"id":"230102","name":"道里区"},{"id":"230103","name":"南岗区"},{"id":"230104","name":"道外区"},{"id":"230108","name":"平房区"},{"id":"230109","name":"松北区"},{"id":"230110","name":"香坊区"},{"id":"230111","name":"呼兰区"},{"id":"230112","name":"阿城区"},{"id":"230113","name":"双城区"},{"id":"230123","name":"依兰县"},{"id":"230124","name":"方正县"},{"id":"230125","name":"宾县"},{"id":"230126","name":"巴彦县"},{"id":"230127","name":"木兰县"},{"id":"230128","name":"通河县"},{"id":"230129","name":"延寿县"},{"id":"230183","name":"尚志市"},{"id":"230184","name":"五常市"},{"id":"230201","name":"市辖区"},{"id":"230202","name":"龙沙区"},{"id":"230203","name":"建华区"},{"id":"230204","name":"铁锋区"},{"id":"230205","name":"昂昂溪区"},{"id":"230206","name":"富拉尔基区"},{"id":"230207","name":"碾子山区"},{"id":"230208","name":"梅里斯达斡尔族区"},{"id":"230221","name":"龙江县"},{"id":"230223","name":"依安县"},{"id":"230224","name":"泰来县"},{"id":"230225","name":"甘南县"},{"id":"230227","name":"富裕县"},{"id":"230229","name":"克山县"},{"id":"230230","name":"克东县"},{"id":"230231","name":"拜泉县"},{"id":"230281","name":"讷河市"},{"id":"230301","name":"市辖区"},{"id":"230302","name":"鸡冠区"},{"id":"230303","name":"恒山区"},{"id":"230304","name":"滴道区"},{"id":"230305","name":"梨树区"},{"id":"230306","name":"城子河区"},{"id":"230307","name":"麻山区"},{"id":"230321","name":"鸡东县"},{"id":"230381","name":"虎林市"},{"id":"230382","name":"密山市"},{"id":"230401","name":"市辖区"},{"id":"230402","name":"向阳区"},{"id":"230403","name":"工农区"},{"id":"230404","name":"南山区"},{"id":"230405","name":"兴安区"},{"id":"230406","name":"东山区"},{"id":"230407","name":"兴山区"},{"id":"230421","name":"萝北县"},{"id":"230422","name":"绥滨县"},{"id":"230501","name":"市辖区"},{"id":"230502","name":"尖山区"},{"id":"230503","name":"岭东区"},{"id":"230505","name":"四方台区"},{"id":"230506","name":"宝山区"},{"id":"230521","name":"集贤县"},{"id":"230522","name":"友谊县"},{"id":"230523","name":"宝清县"},{"id":"230524","name":"饶河县"},{"id":"230601","name":"市辖区"},{"id":"230602","name":"萨尔图区"},{"id":"230603","name":"龙凤区"},{"id":"230604","name":"让胡路区"},{"id":"230605","name":"红岗区"},{"id":"230606","name":"大同区"},{"id":"230621","name":"肇州县"},{"id":"230622","name":"肇源县"},{"id":"230623","name":"林甸县"},{"id":"230624","name":"杜尔伯特蒙古族自治县"},{"id":"230701","name":"市辖区"},{"id":"230702","name":"伊春区"},{"id":"230703","name":"南岔区"},{"id":"230704","name":"友好区"},{"id":"230705","name":"西林区"},{"id":"230706","name":"翠峦区"},{"id":"230707","name":"新青区"},{"id":"230708","name":"美溪区"},{"id":"230709","name":"金山屯区"},{"id":"230710","name":"五营区"},{"id":"230711","name":"乌马河区"},{"id":"230712","name":"汤旺河区"},{"id":"230713","name":"带岭区"},{"id":"230714","name":"乌伊岭区"},{"id":"230715","name":"红星区"},{"id":"230716","name":"上甘岭区"},{"id":"230722","name":"嘉荫县"},{"id":"230781","name":"铁力市"},{"id":"230801","name":"市辖区"},{"id":"230803","name":"向阳区"},{"id":"230804","name":"前进区"},{"id":"230805","name":"东风区"},{"id":"230811","name":"郊区"},{"id":"230822","name":"桦南县"},{"id":"230826","name":"桦川县"},{"id":"230828","name":"汤原县"},{"id":"230833","name":"抚远县"},{"id":"230881","name":"同江市"},{"id":"230882","name":"富锦市"},{"id":"230901","name":"市辖区"},{"id":"230902","name":"新兴区"},{"id":"230903","name":"桃山区"},{"id":"230904","name":"茄子河区"},{"id":"230921","name":"勃利县"},{"id":"231001","name":"市辖区"},{"id":"231002","name":"东安区"},{"id":"231003","name":"阳明区"},{"id":"231004","name":"爱民区"},{"id":"231005","name":"西安区"},{"id":"231024","name":"东宁县"},{"id":"231025","name":"林口县"},{"id":"231081","name":"绥芬河市"},{"id":"231083","name":"海林市"},{"id":"231084","name":"宁安市"},{"id":"231085","name":"穆棱市"},{"id":"231101","name":"市辖区"},{"id":"231102","name":"爱辉区"},{"id":"231121","name":"嫩江县"},{"id":"231123","name":"逊克县"},{"id":"231124","name":"孙吴县"},{"id":"231181","name":"北安市"},{"id":"231182","name":"五大连池市"},{"id":"231201","name":"市辖区"},{"id":"231202","name":"北林区"},{"id":"231221","name":"望奎县"},{"id":"231222","name":"兰西县"},{"id":"231223","name":"青冈县"},{"id":"231224","name":"庆安县"},{"id":"231225","name":"明水县"},{"id":"231226","name":"绥棱县"},{"id":"231281","name":"安达市"},{"id":"231282","name":"肇东市"},{"id":"231283","name":"海伦市"},{"id":"232721","name":"呼玛县"},{"id":"232722","name":"塔河县"},{"id":"232723","name":"漠河县"},{"id":"310101","name":"黄浦区"},{"id":"310104","name":"徐汇区"},{"id":"310105","name":"长宁区"},{"id":"310106","name":"静安区"},{"id":"310107","name":"普陀区"},{"id":"310108","name":"闸北区"},{"id":"310109","name":"虹口区"},{"id":"310110","name":"杨浦区"},{"id":"310112","name":"闵行区"},{"id":"310113","name":"宝山区"},{"id":"310114","name":"嘉定区"},{"id":"310115","name":"浦东新区"},{"id":"310116","name":"金山区"},{"id":"310117","name":"松江区"},{"id":"310118","name":"青浦区"},{"id":"310120","name":"奉贤区"},{"id":"310230","name":"崇明县"},{"id":"320101","name":"市辖区"},{"id":"320102","name":"玄武区"},{"id":"320104","name":"秦淮区"},{"id":"320105","name":"建邺区"},{"id":"320106","name":"鼓楼区"},{"id":"320111","name":"浦口区"},{"id":"320113","name":"栖霞区"},{"id":"320114","name":"雨花台区"},{"id":"320115","name":"江宁区"},{"id":"320116","name":"六合区"},{"id":"320117","name":"溧水区"},{"id":"320118","name":"高淳区"},{"id":"320201","name":"市辖区"},{"id":"320202","name":"崇安区"},{"id":"320203","name":"南长区"},{"id":"320204","name":"北塘区"},{"id":"320205","name":"锡山区"},{"id":"320206","name":"惠山区"},{"id":"320211","name":"滨湖区"},{"id":"320281","name":"江阴市"},{"id":"320282","name":"宜兴市"},{"id":"320301","name":"市辖区"},{"id":"320302","name":"鼓楼区"},{"id":"320303","name":"云龙区"},{"id":"320305","name":"贾汪区"},{"id":"320311","name":"泉山区"},{"id":"320312","name":"铜山区"},{"id":"320321","name":"丰县"},{"id":"320322","name":"沛县"},{"id":"320324","name":"睢宁县"},{"id":"320381","name":"新沂市"},{"id":"320382","name":"邳州市"},{"id":"320401","name":"市辖区"},{"id":"320402","name":"天宁区"},{"id":"320404","name":"钟楼区"},{"id":"320411","name":"新北区"},{"id":"320412","name":"武进区"},{"id":"320413","name":"金坛区"},{"id":"320481","name":"溧阳市"},{"id":"320501","name":"市辖区"},{"id":"320505","name":"虎丘区"},{"id":"320506","name":"吴中区"},{"id":"320507","name":"相城区"},{"id":"320508","name":"姑苏区"},{"id":"320509","name":"吴江区"},{"id":"320581","name":"常熟市"},{"id":"320582","name":"张家港市"},{"id":"320583","name":"昆山市"},{"id":"320585","name":"太仓市"},{"id":"320601","name":"市辖区"},{"id":"320602","name":"崇川区"},{"id":"320611","name":"港闸区"},{"id":"320612","name":"通州区"},{"id":"320621","name":"海安县"},{"id":"320623","name":"如东县"},{"id":"320681","name":"启东市"},{"id":"320682","name":"如皋市"},{"id":"320684","name":"海门市"},{"id":"320701","name":"市辖区"},{"id":"320703","name":"连云区"},{"id":"320706","name":"海州区"},{"id":"320707","name":"赣榆区"},{"id":"320722","name":"东海县"},{"id":"320723","name":"灌云县"},{"id":"320724","name":"灌南县"},{"id":"320801","name":"市辖区"},{"id":"320802","name":"清河区"},{"id":"320803","name":"淮安区"},{"id":"320804","name":"淮阴区"},{"id":"320811","name":"清浦区"},{"id":"320826","name":"涟水县"},{"id":"320829","name":"洪泽县"},{"id":"320830","name":"盱眙县"},{"id":"320831","name":"金湖县"},{"id":"320901","name":"市辖区"},{"id":"320902","name":"亭湖区"},{"id":"320903","name":"盐都区"},{"id":"320904","name":"大丰区"},{"id":"320921","name":"响水县"},{"id":"320922","name":"滨海县"},{"id":"320923","name":"阜宁县"},{"id":"320924","name":"射阳县"},{"id":"320925","name":"建湖县"},{"id":"320981","name":"东台市"},{"id":"321001","name":"市辖区"},{"id":"321002","name":"广陵区"},{"id":"321003","name":"邗江区"},{"id":"321012","name":"江都区"},{"id":"321023","name":"宝应县"},{"id":"321081","name":"仪征市"},{"id":"321084","name":"高邮市"},{"id":"321101","name":"市辖区"},{"id":"321102","name":"京口区"},{"id":"321111","name":"润州区"},{"id":"321112","name":"丹徒区"},{"id":"321181","name":"丹阳市"},{"id":"321182","name":"扬中市"},{"id":"321183","name":"句容市"},{"id":"321201","name":"市辖区"},{"id":"321202","name":"海陵区"},{"id":"321203","name":"高港区"},{"id":"321204","name":"姜堰区"},{"id":"321281","name":"兴化市"},{"id":"321282","name":"靖江市"},{"id":"321283","name":"泰兴市"},{"id":"321301","name":"市辖区"},{"id":"321302","name":"宿城区"},{"id":"321311","name":"宿豫区"},{"id":"321322","name":"沭阳县"},{"id":"321323","name":"泗阳县"},{"id":"321324","name":"泗洪县"},{"id":"330101","name":"市辖区"},{"id":"330102","name":"上城区"},{"id":"330103","name":"下城区"},{"id":"330104","name":"江干区"},{"id":"330105","name":"拱墅区"},{"id":"330106","name":"西湖区"},{"id":"330108","name":"滨江区"},{"id":"330109","name":"萧山区"},{"id":"330110","name":"余杭区"},{"id":"330111","name":"富阳区"},{"id":"330122","name":"桐庐县"},{"id":"330127","name":"淳安县"},{"id":"330182","name":"建德市"},{"id":"330185","name":"临安市"},{"id":"330201","name":"市辖区"},{"id":"330203","name":"海曙区"},{"id":"330204","name":"江东区"},{"id":"330205","name":"江北区"},{"id":"330206","name":"北仑区"},{"id":"330211","name":"镇海区"},{"id":"330212","name":"鄞州区"},{"id":"330225","name":"象山县"},{"id":"330226","name":"宁海县"},{"id":"330281","name":"余姚市"},{"id":"330282","name":"慈溪市"},{"id":"330283","name":"奉化市"},{"id":"330301","name":"市辖区"},{"id":"330302","name":"鹿城区"},{"id":"330303","name":"龙湾区"},{"id":"330304","name":"瓯海区"},{"id":"330305","name":"洞头区"},{"id":"330324","name":"永嘉县"},{"id":"330326","name":"平阳县"},{"id":"330327","name":"苍南县"},{"id":"330328","name":"文成县"},{"id":"330329","name":"泰顺县"},{"id":"330381","name":"瑞安市"},{"id":"330382","name":"乐清市"},{"id":"330401","name":"市辖区"},{"id":"330402","name":"南湖区"},{"id":"330411","name":"秀洲区"},{"id":"330421","name":"嘉善县"},{"id":"330424","name":"海盐县"},{"id":"330481","name":"海宁市"},{"id":"330482","name":"平湖市"},{"id":"330483","name":"桐乡市"},{"id":"330501","name":"市辖区"},{"id":"330502","name":"吴兴区"},{"id":"330503","name":"南浔区"},{"id":"330521","name":"德清县"},{"id":"330522","name":"长兴县"},{"id":"330523","name":"安吉县"},{"id":"330601","name":"市辖区"},{"id":"330602","name":"越城区"},{"id":"330603","name":"柯桥区"},{"id":"330604","name":"上虞区"},{"id":"330624","name":"新昌县"},{"id":"330681","name":"诸暨市"},{"id":"330683","name":"嵊州市"},{"id":"330701","name":"市辖区"},{"id":"330702","name":"婺城区"},{"id":"330703","name":"金东区"},{"id":"330723","name":"武义县"},{"id":"330726","name":"浦江县"},{"id":"330727","name":"磐安县"},{"id":"330781","name":"兰溪市"},{"id":"330782","name":"义乌市"},{"id":"330783","name":"东阳市"},{"id":"330784","name":"永康市"},{"id":"330801","name":"市辖区"},{"id":"330802","name":"柯城区"},{"id":"330803","name":"衢江区"},{"id":"330822","name":"常山县"},{"id":"330824","name":"开化县"},{"id":"330825","name":"龙游县"},{"id":"330881","name":"江山市"},{"id":"330901","name":"市辖区"},{"id":"330902","name":"定海区"},{"id":"330903","name":"普陀区"},{"id":"330921","name":"岱山县"},{"id":"330922","name":"嵊泗县"},{"id":"331001","name":"市辖区"},{"id":"331002","name":"椒江区"},{"id":"331003","name":"黄岩区"},{"id":"331004","name":"路桥区"},{"id":"331021","name":"玉环县"},{"id":"331022","name":"三门县"},{"id":"331023","name":"天台县"},{"id":"331024","name":"仙居县"},{"id":"331081","name":"温岭市"},{"id":"331082","name":"临海市"},{"id":"331101","name":"市辖区"},{"id":"331102","name":"莲都区"},{"id":"331121","name":"青田县"},{"id":"331122","name":"缙云县"},{"id":"331123","name":"遂昌县"},{"id":"331124","name":"松阳县"},{"id":"331125","name":"云和县"},{"id":"331126","name":"庆元县"},{"id":"331127","name":"景宁畲族自治县"},{"id":"331181","name":"龙泉市"},{"id":"340101","name":"市辖区"},{"id":"340102","name":"瑶海区"},{"id":"340103","name":"庐阳区"},{"id":"340104","name":"蜀山区"},{"id":"340111","name":"包河区"},{"id":"340121","name":"长丰县"},{"id":"340122","name":"肥东县"},{"id":"340123","name":"肥西县"},{"id":"340124","name":"庐江县"},{"id":"340181","name":"巢湖市"},{"id":"340201","name":"市辖区"},{"id":"340202","name":"镜湖区"},{"id":"340203","name":"弋江区"},{"id":"340207","name":"鸠江区"},{"id":"340208","name":"三山区"},{"id":"340221","name":"芜湖县"},{"id":"340222","name":"繁昌县"},{"id":"340223","name":"南陵县"},{"id":"340225","name":"无为县"},{"id":"340301","name":"市辖区"},{"id":"340302","name":"龙子湖区"},{"id":"340303","name":"蚌山区"},{"id":"340304","name":"禹会区"},{"id":"340311","name":"淮上区"},{"id":"340321","name":"怀远县"},{"id":"340322","name":"五河县"},{"id":"340323","name":"固镇县"},{"id":"340401","name":"市辖区"},{"id":"340402","name":"大通区"},{"id":"340403","name":"田家庵区"},{"id":"340404","name":"谢家集区"},{"id":"340405","name":"八公山区"},{"id":"340406","name":"潘集区"},{"id":"340421","name":"凤台县"},{"id":"340501","name":"市辖区"},{"id":"340503","name":"花山区"},{"id":"340504","name":"雨山区"},{"id":"340506","name":"博望区"},{"id":"340521","name":"当涂县"},{"id":"340522","name":"含山县"},{"id":"340523","name":"和县"},{"id":"340601","name":"市辖区"},{"id":"340602","name":"杜集区"},{"id":"340603","name":"相山区"},{"id":"340604","name":"烈山区"},{"id":"340621","name":"濉溪县"},{"id":"340701","name":"市辖区"},{"id":"340702","name":"铜官山区"},{"id":"340703","name":"狮子山区"},{"id":"340711","name":"郊区"},{"id":"340721","name":"铜陵县"},{"id":"340801","name":"市辖区"},{"id":"340802","name":"迎江区"},{"id":"340803","name":"大观区"},{"id":"340811","name":"宜秀区"},{"id":"340822","name":"怀宁县"},{"id":"340823","name":"枞阳县"},{"id":"340824","name":"潜山县"},{"id":"340825","name":"太湖县"},{"id":"340826","name":"宿松县"},{"id":"340827","name":"望江县"},{"id":"340828","name":"岳西县"},{"id":"340881","name":"桐城市"},{"id":"341001","name":"市辖区"},{"id":"341002","name":"屯溪区"},{"id":"341003","name":"黄山区"},{"id":"341004","name":"徽州区"},{"id":"341021","name":"歙县"},{"id":"341022","name":"休宁县"},{"id":"341023","name":"黟县"},{"id":"341024","name":"祁门县"},{"id":"341101","name":"市辖区"},{"id":"341102","name":"琅琊区"},{"id":"341103","name":"南谯区"},{"id":"341122","name":"来安县"},{"id":"341124","name":"全椒县"},{"id":"341125","name":"定远县"},{"id":"341126","name":"凤阳县"},{"id":"341181","name":"天长市"},{"id":"341182","name":"明光市"},{"id":"341201","name":"市辖区"},{"id":"341202","name":"颍州区"},{"id":"341203","name":"颍东区"},{"id":"341204","name":"颍泉区"},{"id":"341221","name":"临泉县"},{"id":"341222","name":"太和县"},{"id":"341225","name":"阜南县"},{"id":"341226","name":"颍上县"},{"id":"341282","name":"界首市"},{"id":"341301","name":"市辖区"},{"id":"341302","name":"埇桥区"},{"id":"341321","name":"砀山县"},{"id":"341322","name":"萧县"},{"id":"341323","name":"灵璧县"},{"id":"341324","name":"泗县"},{"id":"341501","name":"市辖区"},{"id":"341502","name":"金安区"},{"id":"341503","name":"裕安区"},{"id":"341521","name":"寿县"},{"id":"341522","name":"霍邱县"},{"id":"341523","name":"舒城县"},{"id":"341524","name":"金寨县"},{"id":"341525","name":"霍山县"},{"id":"341601","name":"市辖区"},{"id":"341602","name":"谯城区"},{"id":"341621","name":"涡阳县"},{"id":"341622","name":"蒙城县"},{"id":"341623","name":"利辛县"},{"id":"341701","name":"市辖区"},{"id":"341702","name":"贵池区"},{"id":"341721","name":"东至县"},{"id":"341722","name":"石台县"},{"id":"341723","name":"青阳县"},{"id":"341801","name":"市辖区"},{"id":"341802","name":"宣州区"},{"id":"341821","name":"郎溪县"},{"id":"341822","name":"广德县"},{"id":"341823","name":"泾县"},{"id":"341824","name":"绩溪县"},{"id":"341825","name":"旌德县"},{"id":"341881","name":"宁国市"},{"id":"350101","name":"市辖区"},{"id":"350102","name":"鼓楼区"},{"id":"350103","name":"台江区"},{"id":"350104","name":"仓山区"},{"id":"350105","name":"马尾区"},{"id":"350111","name":"晋安区"},{"id":"350121","name":"闽侯县"},{"id":"350122","name":"连江县"},{"id":"350123","name":"罗源县"},{"id":"350124","name":"闽清县"},{"id":"350125","name":"永泰县"},{"id":"350128","name":"平潭县"},{"id":"350181","name":"福清市"},{"id":"350182","name":"长乐市"},{"id":"350201","name":"市辖区"},{"id":"350203","name":"思明区"},{"id":"350205","name":"海沧区"},{"id":"350206","name":"湖里区"},{"id":"350211","name":"集美区"},{"id":"350212","name":"同安区"},{"id":"350213","name":"翔安区"},{"id":"350301","name":"市辖区"},{"id":"350302","name":"城厢区"},{"id":"350303","name":"涵江区"},{"id":"350304","name":"荔城区"},{"id":"350305","name":"秀屿区"},{"id":"350322","name":"仙游县"},{"id":"350401","name":"市辖区"},{"id":"350402","name":"梅列区"},{"id":"350403","name":"三元区"},{"id":"350421","name":"明溪县"},{"id":"350423","name":"清流县"},{"id":"350424","name":"宁化县"},{"id":"350425","name":"大田县"},{"id":"350426","name":"尤溪县"},{"id":"350427","name":"沙县"},{"id":"350428","name":"将乐县"},{"id":"350429","name":"泰宁县"},{"id":"350430","name":"建宁县"},{"id":"350481","name":"永安市"},{"id":"350501","name":"市辖区"},{"id":"350502","name":"鲤城区"},{"id":"350503","name":"丰泽区"},{"id":"350504","name":"洛江区"},{"id":"350505","name":"泉港区"},{"id":"350521","name":"惠安县"},{"id":"350524","name":"安溪县"},{"id":"350525","name":"永春县"},{"id":"350526","name":"德化县"},{"id":"350527","name":"金门县"},{"id":"350581","name":"石狮市"},{"id":"350582","name":"晋江市"},{"id":"350583","name":"南安市"},{"id":"350601","name":"市辖区"},{"id":"350602","name":"芗城区"},{"id":"350603","name":"龙文区"},{"id":"350622","name":"云霄县"},{"id":"350623","name":"漳浦县"},{"id":"350624","name":"诏安县"},{"id":"350625","name":"长泰县"},{"id":"350626","name":"东山县"},{"id":"350627","name":"南靖县"},{"id":"350628","name":"平和县"},{"id":"350629","name":"华安县"},{"id":"350681","name":"龙海市"},{"id":"350701","name":"市辖区"},{"id":"350702","name":"延平区"},{"id":"350703","name":"建阳区"},{"id":"350721","name":"顺昌县"},{"id":"350722","name":"浦城县"},{"id":"350723","name":"光泽县"},{"id":"350724","name":"松溪县"},{"id":"350725","name":"政和县"},{"id":"350781","name":"邵武市"},{"id":"350782","name":"武夷山市"},{"id":"350783","name":"建瓯市"},{"id":"350801","name":"市辖区"},{"id":"350802","name":"新罗区"},{"id":"350803","name":"永定区"},{"id":"350821","name":"长汀县"},{"id":"350823","name":"上杭县"},{"id":"350824","name":"武平县"},{"id":"350825","name":"连城县"},{"id":"350881","name":"漳平市"},{"id":"350901","name":"市辖区"},{"id":"350902","name":"蕉城区"},{"id":"350921","name":"霞浦县"},{"id":"350922","name":"古田县"},{"id":"350923","name":"屏南县"},{"id":"350924","name":"寿宁县"},{"id":"350925","name":"周宁县"},{"id":"350926","name":"柘荣县"},{"id":"350981","name":"福安市"},{"id":"350982","name":"福鼎市"},{"id":"360101","name":"市辖区"},{"id":"360102","name":"东湖区"},{"id":"360103","name":"西湖区"},{"id":"360104","name":"青云谱区"},{"id":"360105","name":"湾里区"},{"id":"360111","name":"青山湖区"},{"id":"360112","name":"新建区"},{"id":"360121","name":"南昌县"},{"id":"360123","name":"安义县"},{"id":"360124","name":"进贤县"},{"id":"360201","name":"市辖区"},{"id":"360202","name":"昌江区"},{"id":"360203","name":"珠山区"},{"id":"360222","name":"浮梁县"},{"id":"360281","name":"乐平市"},{"id":"360301","name":"市辖区"},{"id":"360302","name":"安源区"},{"id":"360313","name":"湘东区"},{"id":"360321","name":"莲花县"},{"id":"360322","name":"上栗县"},{"id":"360323","name":"芦溪县"},{"id":"360401","name":"市辖区"},{"id":"360402","name":"庐山区"},{"id":"360403","name":"浔阳区"},{"id":"360421","name":"九江县"},{"id":"360423","name":"武宁县"},{"id":"360424","name":"修水县"},{"id":"360425","name":"永修县"},{"id":"360426","name":"德安县"},{"id":"360427","name":"星子县"},{"id":"360428","name":"都昌县"},{"id":"360429","name":"湖口县"},{"id":"360430","name":"彭泽县"},{"id":"360481","name":"瑞昌市"},{"id":"360482","name":"共青城市"},{"id":"360501","name":"市辖区"},{"id":"360502","name":"渝水区"},{"id":"360521","name":"分宜县"},{"id":"360601","name":"市辖区"},{"id":"360602","name":"月湖区"},{"id":"360622","name":"余江县"},{"id":"360681","name":"贵溪市"},{"id":"360701","name":"市辖区"},{"id":"360702","name":"章贡区"},{"id":"360703","name":"南康区"},{"id":"360721","name":"赣县"},{"id":"360722","name":"信丰县"},{"id":"360723","name":"大余县"},{"id":"360724","name":"上犹县"},{"id":"360725","name":"崇义县"},{"id":"360726","name":"安远县"},{"id":"360727","name":"龙南县"},{"id":"360728","name":"定南县"},{"id":"360729","name":"全南县"},{"id":"360730","name":"宁都县"},{"id":"360731","name":"于都县"},{"id":"360732","name":"兴国县"},{"id":"360733","name":"会昌县"},{"id":"360734","name":"寻乌县"},{"id":"360735","name":"石城县"},{"id":"360781","name":"瑞金市"},{"id":"360801","name":"市辖区"},{"id":"360802","name":"吉州区"},{"id":"360803","name":"青原区"},{"id":"360821","name":"吉安县"},{"id":"360822","name":"吉水县"},{"id":"360823","name":"峡江县"},{"id":"360824","name":"新干县"},{"id":"360825","name":"永丰县"},{"id":"360826","name":"泰和县"},{"id":"360827","name":"遂川县"},{"id":"360828","name":"万安县"},{"id":"360829","name":"安福县"},{"id":"360830","name":"永新县"},{"id":"360881","name":"井冈山市"},{"id":"360901","name":"市辖区"},{"id":"360902","name":"袁州区"},{"id":"360921","name":"奉新县"},{"id":"360922","name":"万载县"},{"id":"360923","name":"上高县"},{"id":"360924","name":"宜丰县"},{"id":"360925","name":"靖安县"},{"id":"360926","name":"铜鼓县"},{"id":"360981","name":"丰城市"},{"id":"360982","name":"樟树市"},{"id":"360983","name":"高安市"},{"id":"361001","name":"市辖区"},{"id":"361002","name":"临川区"},{"id":"361021","name":"南城县"},{"id":"361022","name":"黎川县"},{"id":"361023","name":"南丰县"},{"id":"361024","name":"崇仁县"},{"id":"361025","name":"乐安县"},{"id":"361026","name":"宜黄县"},{"id":"361027","name":"金溪县"},{"id":"361028","name":"资溪县"},{"id":"361029","name":"东乡县"},{"id":"361030","name":"广昌县"},{"id":"361101","name":"市辖区"},{"id":"361102","name":"信州区"},{"id":"361103","name":"广丰区"},{"id":"361121","name":"上饶县"},{"id":"361123","name":"玉山县"},{"id":"361124","name":"铅山县"},{"id":"361125","name":"横峰县"},{"id":"361126","name":"弋阳县"},{"id":"361127","name":"余干县"},{"id":"361128","name":"鄱阳县"},{"id":"361129","name":"万年县"},{"id":"361130","name":"婺源县"},{"id":"361181","name":"德兴市"},{"id":"370101","name":"市辖区"},{"id":"370102","name":"历下区"},{"id":"370103","name":"市中区"},{"id":"370104","name":"槐荫区"},{"id":"370105","name":"天桥区"},{"id":"370112","name":"历城区"},{"id":"370113","name":"长清区"},{"id":"370124","name":"平阴县"},{"id":"370125","name":"济阳县"},{"id":"370126","name":"商河县"},{"id":"370181","name":"章丘市"},{"id":"370201","name":"市辖区"},{"id":"370202","name":"市南区"},{"id":"370203","name":"市北区"},{"id":"370211","name":"黄岛区"},{"id":"370212","name":"崂山区"},{"id":"370213","name":"李沧区"},{"id":"370214","name":"城阳区"},{"id":"370281","name":"胶州市"},{"id":"370282","name":"即墨市"},{"id":"370283","name":"平度市"},{"id":"370285","name":"莱西市"},{"id":"370301","name":"市辖区"},{"id":"370302","name":"淄川区"},{"id":"370303","name":"张店区"},{"id":"370304","name":"博山区"},{"id":"370305","name":"临淄区"},{"id":"370306","name":"周村区"},{"id":"370321","name":"桓台县"},{"id":"370322","name":"高青县"},{"id":"370323","name":"沂源县"},{"id":"370401","name":"市辖区"},{"id":"370402","name":"市中区"},{"id":"370403","name":"薛城区"},{"id":"370404","name":"峄城区"},{"id":"370405","name":"台儿庄区"},{"id":"370406","name":"山亭区"},{"id":"370481","name":"滕州市"},{"id":"370501","name":"市辖区"},{"id":"370502","name":"东营区"},{"id":"370503","name":"河口区"},{"id":"370521","name":"垦利县"},{"id":"370522","name":"利津县"},{"id":"370523","name":"广饶县"},{"id":"370601","name":"市辖区"},{"id":"370602","name":"芝罘区"},{"id":"370611","name":"福山区"},{"id":"370612","name":"牟平区"},{"id":"370613","name":"莱山区"},{"id":"370634","name":"长岛县"},{"id":"370681","name":"龙口市"},{"id":"370682","name":"莱阳市"},{"id":"370683","name":"莱州市"},{"id":"370684","name":"蓬莱市"},{"id":"370685","name":"招远市"},{"id":"370686","name":"栖霞市"},{"id":"370687","name":"海阳市"},{"id":"370701","name":"市辖区"},{"id":"370702","name":"潍城区"},{"id":"370703","name":"寒亭区"},{"id":"370704","name":"坊子区"},{"id":"370705","name":"奎文区"},{"id":"370724","name":"临朐县"},{"id":"370725","name":"昌乐县"},{"id":"370781","name":"青州市"},{"id":"370782","name":"诸城市"},{"id":"370783","name":"寿光市"},{"id":"370784","name":"安丘市"},{"id":"370785","name":"高密市"},{"id":"370786","name":"昌邑市"},{"id":"370801","name":"市辖区"},{"id":"370811","name":"任城区"},{"id":"370812","name":"兖州区"},{"id":"370826","name":"微山县"},{"id":"370827","name":"鱼台县"},{"id":"370828","name":"金乡县"},{"id":"370829","name":"嘉祥县"},{"id":"370830","name":"汶上县"},{"id":"370831","name":"泗水县"},{"id":"370832","name":"梁山县"},{"id":"370881","name":"曲阜市"},{"id":"370883","name":"邹城市"},{"id":"370901","name":"市辖区"},{"id":"370902","name":"泰山区"},{"id":"370911","name":"岱岳区"},{"id":"370921","name":"宁阳县"},{"id":"370923","name":"东平县"},{"id":"370982","name":"新泰市"},{"id":"370983","name":"肥城市"},{"id":"371001","name":"市辖区"},{"id":"371002","name":"环翠区"},{"id":"371003","name":"文登区"},{"id":"371082","name":"荣成市"},{"id":"371083","name":"乳山市"},{"id":"371101","name":"市辖区"},{"id":"371102","name":"东港区"},{"id":"371103","name":"岚山区"},{"id":"371121","name":"五莲县"},{"id":"371122","name":"莒县"},{"id":"371201","name":"市辖区"},{"id":"371202","name":"莱城区"},{"id":"371203","name":"钢城区"},{"id":"371301","name":"市辖区"},{"id":"371302","name":"兰山区"},{"id":"371311","name":"罗庄区"},{"id":"371312","name":"河东区"},{"id":"371321","name":"沂南县"},{"id":"371322","name":"郯城县"},{"id":"371323","name":"沂水县"},{"id":"371324","name":"兰陵县"},{"id":"371325","name":"费县"},{"id":"371326","name":"平邑县"},{"id":"371327","name":"莒南县"},{"id":"371328","name":"蒙阴县"},{"id":"371329","name":"临沭县"},{"id":"371401","name":"市辖区"},{"id":"371402","name":"德城区"},{"id":"371403","name":"陵城区"},{"id":"371422","name":"宁津县"},{"id":"371423","name":"庆云县"},{"id":"371424","name":"临邑县"},{"id":"371425","name":"齐河县"},{"id":"371426","name":"平原县"},{"id":"371427","name":"夏津县"},{"id":"371428","name":"武城县"},{"id":"371481","name":"乐陵市"},{"id":"371482","name":"禹城市"},{"id":"371501","name":"市辖区"},{"id":"371502","name":"东昌府区"},{"id":"371521","name":"阳谷县"},{"id":"371522","name":"莘县"},{"id":"371523","name":"茌平县"},{"id":"371524","name":"东阿县"},{"id":"371525","name":"冠县"},{"id":"371526","name":"高唐县"},{"id":"371581","name":"临清市"},{"id":"371601","name":"市辖区"},{"id":"371602","name":"滨城区"},{"id":"371603","name":"沾化区"},{"id":"371621","name":"惠民县"},{"id":"371622","name":"阳信县"},{"id":"371623","name":"无棣县"},{"id":"371625","name":"博兴县"},{"id":"371626","name":"邹平县"},{"id":"371701","name":"市辖区"},{"id":"371702","name":"牡丹区"},{"id":"371721","name":"曹县"},{"id":"371722","name":"单县"},{"id":"371723","name":"成武县"},{"id":"371724","name":"巨野县"},{"id":"371725","name":"郓城县"},{"id":"371726","name":"鄄城县"},{"id":"371727","name":"定陶县"},{"id":"371728","name":"东明县"},{"id":"410101","name":"市辖区"},{"id":"410102","name":"中原区"},{"id":"410103","name":"二七区"},{"id":"410104","name":"管城回族区"},{"id":"410105","name":"金水区"},{"id":"410106","name":"上街区"},{"id":"410108","name":"惠济区"},{"id":"410122","name":"中牟县"},{"id":"410181","name":"巩义市"},{"id":"410182","name":"荥阳市"},{"id":"410183","name":"新密市"},{"id":"410184","name":"新郑市"},{"id":"410185","name":"登封市"},{"id":"410201","name":"市辖区"},{"id":"410202","name":"龙亭区"},{"id":"410203","name":"顺河回族区"},{"id":"410204","name":"鼓楼区"},{"id":"410205","name":"禹王台区"},{"id":"410211","name":"金明区"},{"id":"410212","name":"祥符区"},{"id":"410221","name":"杞县"},{"id":"410222","name":"通许县"},{"id":"410223","name":"尉氏县"},{"id":"410225","name":"兰考县"},{"id":"410301","name":"市辖区"},{"id":"410302","name":"老城区"},{"id":"410303","name":"西工区"},{"id":"410304","name":"瀍河回族区"},{"id":"410305","name":"涧西区"},{"id":"410306","name":"吉利区"},{"id":"410311","name":"洛龙区"},{"id":"410322","name":"孟津县"},{"id":"410323","name":"新安县"},{"id":"410324","name":"栾川县"},{"id":"410325","name":"嵩县"},{"id":"410326","name":"汝阳县"},{"id":"410327","name":"宜阳县"},{"id":"410328","name":"洛宁县"},{"id":"410329","name":"伊川县"},{"id":"410381","name":"偃师市"},{"id":"410401","name":"市辖区"},{"id":"410402","name":"新华区"},{"id":"410403","name":"卫东区"},{"id":"410404","name":"石龙区"},{"id":"410411","name":"湛河区"},{"id":"410421","name":"宝丰县"},{"id":"410422","name":"叶县"},{"id":"410423","name":"鲁山县"},{"id":"410425","name":"郏县"},{"id":"410481","name":"舞钢市"},{"id":"410482","name":"汝州市"},{"id":"410501","name":"市辖区"},{"id":"410502","name":"文峰区"},{"id":"410503","name":"北关区"},{"id":"410505","name":"殷都区"},{"id":"410506","name":"龙安区"},{"id":"410522","name":"安阳县"},{"id":"410523","name":"汤阴县"},{"id":"410526","name":"滑县"},{"id":"410527","name":"内黄县"},{"id":"410581","name":"林州市"},{"id":"410601","name":"市辖区"},{"id":"410602","name":"鹤山区"},{"id":"410603","name":"山城区"},{"id":"410611","name":"淇滨区"},{"id":"410621","name":"浚县"},{"id":"410622","name":"淇县"},{"id":"410701","name":"市辖区"},{"id":"410702","name":"红旗区"},{"id":"410703","name":"卫滨区"},{"id":"410704","name":"凤泉区"},{"id":"410711","name":"牧野区"},{"id":"410721","name":"新乡县"},{"id":"410724","name":"获嘉县"},{"id":"410725","name":"原阳县"},{"id":"410726","name":"延津县"},{"id":"410727","name":"封丘县"},{"id":"410728","name":"长垣县"},{"id":"410781","name":"卫辉市"},{"id":"410782","name":"辉县市"},{"id":"410801","name":"市辖区"},{"id":"410802","name":"解放区"},{"id":"410803","name":"中站区"},{"id":"410804","name":"马村区"},{"id":"410811","name":"山阳区"},{"id":"410821","name":"修武县"},{"id":"410822","name":"博爱县"},{"id":"410823","name":"武陟县"},{"id":"410825","name":"温县"},{"id":"410882","name":"沁阳市"},{"id":"410883","name":"孟州市"},{"id":"410901","name":"市辖区"},{"id":"410902","name":"华龙区"},{"id":"410922","name":"清丰县"},{"id":"410923","name":"南乐县"},{"id":"410926","name":"范县"},{"id":"410927","name":"台前县"},{"id":"410928","name":"濮阳县"},{"id":"411001","name":"市辖区"},{"id":"411002","name":"魏都区"},{"id":"411023","name":"许昌县"},{"id":"411024","name":"鄢陵县"},{"id":"411025","name":"襄城县"},{"id":"411081","name":"禹州市"},{"id":"411082","name":"长葛市"},{"id":"411101","name":"市辖区"},{"id":"411102","name":"源汇区"},{"id":"411103","name":"郾城区"},{"id":"411104","name":"召陵区"},{"id":"411121","name":"舞阳县"},{"id":"411122","name":"临颍县"},{"id":"411201","name":"市辖区"},{"id":"411202","name":"湖滨区"},{"id":"411221","name":"渑池县"},{"id":"411222","name":"陕县"},{"id":"411224","name":"卢氏县"},{"id":"411281","name":"义马市"},{"id":"411282","name":"灵宝市"},{"id":"411301","name":"市辖区"},{"id":"411302","name":"宛城区"},{"id":"411303","name":"卧龙区"},{"id":"411321","name":"南召县"},{"id":"411322","name":"方城县"},{"id":"411323","name":"西峡县"},{"id":"411324","name":"镇平县"},{"id":"411325","name":"内乡县"},{"id":"411326","name":"淅川县"},{"id":"411327","name":"社旗县"},{"id":"411328","name":"唐河县"},{"id":"411329","name":"新野县"},{"id":"411330","name":"桐柏县"},{"id":"411381","name":"邓州市"},{"id":"411401","name":"市辖区"},{"id":"411402","name":"梁园区"},{"id":"411403","name":"睢阳区"},{"id":"411421","name":"民权县"},{"id":"411422","name":"睢县"},{"id":"411423","name":"宁陵县"},{"id":"411424","name":"柘城县"},{"id":"411425","name":"虞城县"},{"id":"411426","name":"夏邑县"},{"id":"411481","name":"永城市"},{"id":"411501","name":"市辖区"},{"id":"411502","name":"浉河区"},{"id":"411503","name":"平桥区"},{"id":"411521","name":"罗山县"},{"id":"411522","name":"光山县"},{"id":"411523","name":"新县"},{"id":"411524","name":"商城县"},{"id":"411525","name":"固始县"},{"id":"411526","name":"潢川县"},{"id":"411527","name":"淮滨县"},{"id":"411528","name":"息县"},{"id":"411601","name":"市辖区"},{"id":"411602","name":"川汇区"},{"id":"411621","name":"扶沟县"},{"id":"411622","name":"西华县"},{"id":"411623","name":"商水县"},{"id":"411624","name":"沈丘县"},{"id":"411625","name":"郸城县"},{"id":"411626","name":"淮阳县"},{"id":"411627","name":"太康县"},{"id":"411628","name":"鹿邑县"},{"id":"411681","name":"项城市"},{"id":"411701","name":"市辖区"},{"id":"411702","name":"驿城区"},{"id":"411721","name":"西平县"},{"id":"411722","name":"上蔡县"},{"id":"411723","name":"平舆县"},{"id":"411724","name":"正阳县"},{"id":"411725","name":"确山县"},{"id":"411726","name":"泌阳县"},{"id":"411727","name":"汝南县"},{"id":"411728","name":"遂平县"},{"id":"411729","name":"新蔡县"},{"id":"419001","name":"济源市"},{"id":"420101","name":"市辖区"},{"id":"420102","name":"江岸区"},{"id":"420103","name":"江汉区"},{"id":"420104","name":"硚口区"},{"id":"420105","name":"汉阳区"},{"id":"420106","name":"武昌区"},{"id":"420107","name":"青山区"},{"id":"420111","name":"洪山区"},{"id":"420112","name":"东西湖区"},{"id":"420113","name":"汉南区"},{"id":"420114","name":"蔡甸区"},{"id":"420115","name":"江夏区"},{"id":"420116","name":"黄陂区"},{"id":"420117","name":"新洲区"},{"id":"420201","name":"市辖区"},{"id":"420202","name":"黄石港区"},{"id":"420203","name":"西塞山区"},{"id":"420204","name":"下陆区"},{"id":"420205","name":"铁山区"},{"id":"420222","name":"阳新县"},{"id":"420281","name":"大冶市"},{"id":"420301","name":"市辖区"},{"id":"420302","name":"茅箭区"},{"id":"420303","name":"张湾区"},{"id":"420304","name":"郧阳区"},{"id":"420322","name":"郧西县"},{"id":"420323","name":"竹山县"},{"id":"420324","name":"竹溪县"},{"id":"420325","name":"房县"},{"id":"420381","name":"丹江口市"},{"id":"420501","name":"市辖区"},{"id":"420502","name":"西陵区"},{"id":"420503","name":"伍家岗区"},{"id":"420504","name":"点军区"},{"id":"420505","name":"猇亭区"},{"id":"420506","name":"夷陵区"},{"id":"420525","name":"远安县"},{"id":"420526","name":"兴山县"},{"id":"420527","name":"秭归县"},{"id":"420528","name":"长阳土家族自治县"},{"id":"420529","name":"五峰土家族自治县"},{"id":"420581","name":"宜都市"},{"id":"420582","name":"当阳市"},{"id":"420583","name":"枝江市"},{"id":"420601","name":"市辖区"},{"id":"420602","name":"襄城区"},{"id":"420606","name":"樊城区"},{"id":"420607","name":"襄州区"},{"id":"420624","name":"南漳县"},{"id":"420625","name":"谷城县"},{"id":"420626","name":"保康县"},{"id":"420682","name":"老河口市"},{"id":"420683","name":"枣阳市"},{"id":"420684","name":"宜城市"},{"id":"420701","name":"市辖区"},{"id":"420702","name":"梁子湖区"},{"id":"420703","name":"华容区"},{"id":"420704","name":"鄂城区"},{"id":"420801","name":"市辖区"},{"id":"420802","name":"东宝区"},{"id":"420804","name":"掇刀区"},{"id":"420821","name":"京山县"},{"id":"420822","name":"沙洋县"},{"id":"420881","name":"钟祥市"},{"id":"420901","name":"市辖区"},{"id":"420902","name":"孝南区"},{"id":"420921","name":"孝昌县"},{"id":"420922","name":"大悟县"},{"id":"420923","name":"云梦县"},{"id":"420981","name":"应城市"},{"id":"420982","name":"安陆市"},{"id":"420984","name":"汉川市"},{"id":"421001","name":"市辖区"},{"id":"421002","name":"沙市区"},{"id":"421003","name":"荆州区"},{"id":"421022","name":"公安县"},{"id":"421023","name":"监利县"},{"id":"421024","name":"江陵县"},{"id":"421081","name":"石首市"},{"id":"421083","name":"洪湖市"},{"id":"421087","name":"松滋市"},{"id":"421101","name":"市辖区"},{"id":"421102","name":"黄州区"},{"id":"421121","name":"团风县"},{"id":"421122","name":"红安县"},{"id":"421123","name":"罗田县"},{"id":"421124","name":"英山县"},{"id":"421125","name":"浠水县"},{"id":"421126","name":"蕲春县"},{"id":"421127","name":"黄梅县"},{"id":"421181","name":"麻城市"},{"id":"421182","name":"武穴市"},{"id":"421201","name":"市辖区"},{"id":"421202","name":"咸安区"},{"id":"421221","name":"嘉鱼县"},{"id":"421222","name":"通城县"},{"id":"421223","name":"崇阳县"},{"id":"421224","name":"通山县"},{"id":"421281","name":"赤壁市"},{"id":"421301","name":"市辖区"},{"id":"421303","name":"曾都区"},{"id":"421321","name":"随县"},{"id":"421381","name":"广水市"},{"id":"422801","name":"恩施市"},{"id":"422802","name":"利川市"},{"id":"422822","name":"建始县"},{"id":"422823","name":"巴东县"},{"id":"422825","name":"宣恩县"},{"id":"422826","name":"咸丰县"},{"id":"422827","name":"来凤县"},{"id":"422828","name":"鹤峰县"},{"id":"429004","name":"仙桃市"},{"id":"429005","name":"潜江市"},{"id":"429006","name":"天门市"},{"id":"429021","name":"神农架林区"},{"id":"430101","name":"市辖区"},{"id":"430102","name":"芙蓉区"},{"id":"430103","name":"天心区"},{"id":"430104","name":"岳麓区"},{"id":"430105","name":"开福区"},{"id":"430111","name":"雨花区"},{"id":"430112","name":"望城区"},{"id":"430121","name":"长沙县"},{"id":"430124","name":"宁乡县"},{"id":"430181","name":"浏阳市"},{"id":"430201","name":"市辖区"},{"id":"430202","name":"荷塘区"},{"id":"430203","name":"芦淞区"},{"id":"430204","name":"石峰区"},{"id":"430211","name":"天元区"},{"id":"430221","name":"株洲县"},{"id":"430223","name":"攸县"},{"id":"430224","name":"茶陵县"},{"id":"430225","name":"炎陵县"},{"id":"430281","name":"醴陵市"},{"id":"430301","name":"市辖区"},{"id":"430302","name":"雨湖区"},{"id":"430304","name":"岳塘区"},{"id":"430321","name":"湘潭县"},{"id":"430381","name":"湘乡市"},{"id":"430382","name":"韶山市"},{"id":"430401","name":"市辖区"},{"id":"430405","name":"珠晖区"},{"id":"430406","name":"雁峰区"},{"id":"430407","name":"石鼓区"},{"id":"430408","name":"蒸湘区"},{"id":"430412","name":"南岳区"},{"id":"430421","name":"衡阳县"},{"id":"430422","name":"衡南县"},{"id":"430423","name":"衡山县"},{"id":"430424","name":"衡东县"},{"id":"430426","name":"祁东县"},{"id":"430481","name":"耒阳市"},{"id":"430482","name":"常宁市"},{"id":"430501","name":"市辖区"},{"id":"430502","name":"双清区"},{"id":"430503","name":"大祥区"},{"id":"430511","name":"北塔区"},{"id":"430521","name":"邵东县"},{"id":"430522","name":"新邵县"},{"id":"430523","name":"邵阳县"},{"id":"430524","name":"隆回县"},{"id":"430525","name":"洞口县"},{"id":"430527","name":"绥宁县"},{"id":"430528","name":"新宁县"},{"id":"430529","name":"城步苗族自治县"},{"id":"430581","name":"武冈市"},{"id":"430601","name":"市辖区"},{"id":"430602","name":"岳阳楼区"},{"id":"430603","name":"云溪区"},{"id":"430611","name":"君山区"},{"id":"430621","name":"岳阳县"},{"id":"430623","name":"华容县"},{"id":"430624","name":"湘阴县"},{"id":"430626","name":"平江县"},{"id":"430681","name":"汨罗市"},{"id":"430682","name":"临湘市"},{"id":"430701","name":"市辖区"},{"id":"430702","name":"武陵区"},{"id":"430703","name":"鼎城区"},{"id":"430721","name":"安乡县"},{"id":"430722","name":"汉寿县"},{"id":"430723","name":"澧县"},{"id":"430724","name":"临澧县"},{"id":"430725","name":"桃源县"},{"id":"430726","name":"石门县"},{"id":"430781","name":"津市市"},{"id":"430801","name":"市辖区"},{"id":"430802","name":"永定区"},{"id":"430811","name":"武陵源区"},{"id":"430821","name":"慈利县"},{"id":"430822","name":"桑植县"},{"id":"430901","name":"市辖区"},{"id":"430902","name":"资阳区"},{"id":"430903","name":"赫山区"},{"id":"430921","name":"南县"},{"id":"430922","name":"桃江县"},{"id":"430923","name":"安化县"},{"id":"430981","name":"沅江市"},{"id":"431001","name":"市辖区"},{"id":"431002","name":"北湖区"},{"id":"431003","name":"苏仙区"},{"id":"431021","name":"桂阳县"},{"id":"431022","name":"宜章县"},{"id":"431023","name":"永兴县"},{"id":"431024","name":"嘉禾县"},{"id":"431025","name":"临武县"},{"id":"431026","name":"汝城县"},{"id":"431027","name":"桂东县"},{"id":"431028","name":"安仁县"},{"id":"431081","name":"资兴市"},{"id":"431101","name":"市辖区"},{"id":"431102","name":"零陵区"},{"id":"431103","name":"冷水滩区"},{"id":"431121","name":"祁阳县"},{"id":"431122","name":"东安县"},{"id":"431123","name":"双牌县"},{"id":"431124","name":"道县"},{"id":"431125","name":"江永县"},{"id":"431126","name":"宁远县"},{"id":"431127","name":"蓝山县"},{"id":"431128","name":"新田县"},{"id":"431129","name":"江华瑶族自治县"},{"id":"431201","name":"市辖区"},{"id":"431202","name":"鹤城区"},{"id":"431221","name":"中方县"},{"id":"431222","name":"沅陵县"},{"id":"431223","name":"辰溪县"},{"id":"431224","name":"溆浦县"},{"id":"431225","name":"会同县"},{"id":"431226","name":"麻阳苗族自治县"},{"id":"431227","name":"新晃侗族自治县"},{"id":"431228","name":"芷江侗族自治县"},{"id":"431229","name":"靖州苗族侗族自治县"},{"id":"431230","name":"通道侗族自治县"},{"id":"431281","name":"洪江市"},{"id":"431301","name":"市辖区"},{"id":"431302","name":"娄星区"},{"id":"431321","name":"双峰县"},{"id":"431322","name":"新化县"},{"id":"431381","name":"冷水江市"},{"id":"431382","name":"涟源市"},{"id":"433101","name":"吉首市"},{"id":"433122","name":"泸溪县"},{"id":"433123","name":"凤凰县"},{"id":"433124","name":"花垣县"},{"id":"433125","name":"保靖县"},{"id":"433126","name":"古丈县"},{"id":"433127","name":"永顺县"},{"id":"433130","name":"龙山县"},{"id":"440101","name":"市辖区"},{"id":"440103","name":"荔湾区"},{"id":"440104","name":"越秀区"},{"id":"440105","name":"海珠区"},{"id":"440106","name":"天河区"},{"id":"440111","name":"白云区"},{"id":"440112","name":"黄埔区"},{"id":"440113","name":"番禺区"},{"id":"440114","name":"花都区"},{"id":"440115","name":"南沙区"},{"id":"440117","name":"从化区"},{"id":"440118","name":"增城区"},{"id":"440201","name":"市辖区"},{"id":"440203","name":"武江区"},{"id":"440204","name":"浈江区"},{"id":"440205","name":"曲江区"},{"id":"440222","name":"始兴县"},{"id":"440224","name":"仁化县"},{"id":"440229","name":"翁源县"},{"id":"440232","name":"乳源瑶族自治县"},{"id":"440233","name":"新丰县"},{"id":"440281","name":"乐昌市"},{"id":"440282","name":"南雄市"},{"id":"440301","name":"市辖区"},{"id":"440303","name":"罗湖区"},{"id":"440304","name":"福田区"},{"id":"440305","name":"南山区"},{"id":"440306","name":"宝安区"},{"id":"440307","name":"龙岗区"},{"id":"440308","name":"盐田区"},{"id":"440401","name":"市辖区"},{"id":"440402","name":"香洲区"},{"id":"440403","name":"斗门区"},{"id":"440404","name":"金湾区"},{"id":"440501","name":"市辖区"},{"id":"440507","name":"龙湖区"},{"id":"440511","name":"金平区"},{"id":"440512","name":"濠江区"},{"id":"440513","name":"潮阳区"},{"id":"440514","name":"潮南区"},{"id":"440515","name":"澄海区"},{"id":"440523","name":"南澳县"},{"id":"440601","name":"市辖区"},{"id":"440604","name":"禅城区"},{"id":"440605","name":"南海区"},{"id":"440606","name":"顺德区"},{"id":"440607","name":"三水区"},{"id":"440608","name":"高明区"},{"id":"440701","name":"市辖区"},{"id":"440703","name":"蓬江区"},{"id":"440704","name":"江海区"},{"id":"440705","name":"新会区"},{"id":"440781","name":"台山市"},{"id":"440783","name":"开平市"},{"id":"440784","name":"鹤山市"},{"id":"440785","name":"恩平市"},{"id":"440801","name":"市辖区"},{"id":"440802","name":"赤坎区"},{"id":"440803","name":"霞山区"},{"id":"440804","name":"坡头区"},{"id":"440811","name":"麻章区"},{"id":"440823","name":"遂溪县"},{"id":"440825","name":"徐闻县"},{"id":"440881","name":"廉江市"},{"id":"440882","name":"雷州市"},{"id":"440883","name":"吴川市"},{"id":"440901","name":"市辖区"},{"id":"440902","name":"茂南区"},{"id":"440904","name":"电白区"},{"id":"440981","name":"高州市"},{"id":"440982","name":"化州市"},{"id":"440983","name":"信宜市"},{"id":"441201","name":"市辖区"},{"id":"441202","name":"端州区"},{"id":"441203","name":"鼎湖区"},{"id":"441204","name":"高要区"},{"id":"441223","name":"广宁县"},{"id":"441224","name":"怀集县"},{"id":"441225","name":"封开县"},{"id":"441226","name":"德庆县"},{"id":"441284","name":"四会市"},{"id":"441301","name":"市辖区"},{"id":"441302","name":"惠城区"},{"id":"441303","name":"惠阳区"},{"id":"441322","name":"博罗县"},{"id":"441323","name":"惠东县"},{"id":"441324","name":"龙门县"},{"id":"441401","name":"市辖区"},{"id":"441402","name":"梅江区"},{"id":"441403","name":"梅县区"},{"id":"441422","name":"大埔县"},{"id":"441423","name":"丰顺县"},{"id":"441424","name":"五华县"},{"id":"441426","name":"平远县"},{"id":"441427","name":"蕉岭县"},{"id":"441481","name":"兴宁市"},{"id":"441501","name":"市辖区"},{"id":"441502","name":"城区"},{"id":"441521","name":"海丰县"},{"id":"441523","name":"陆河县"},{"id":"441581","name":"陆丰市"},{"id":"441601","name":"市辖区"},{"id":"441602","name":"源城区"},{"id":"441621","name":"紫金县"},{"id":"441622","name":"龙川县"},{"id":"441623","name":"连平县"},{"id":"441624","name":"和平县"},{"id":"441625","name":"东源县"},{"id":"441701","name":"市辖区"},{"id":"441702","name":"江城区"},{"id":"441704","name":"阳东区"},{"id":"441721","name":"阳西县"},{"id":"441781","name":"阳春市"},{"id":"441801","name":"市辖区"},{"id":"441802","name":"清城区"},{"id":"441803","name":"清新区"},{"id":"441821","name":"佛冈县"},{"id":"441823","name":"阳山县"},{"id":"441825","name":"连山壮族瑶族自治县"},{"id":"441826","name":"连南瑶族自治县"},{"id":"441881","name":"英德市"},{"id":"441882","name":"连州市"},{"id":"441900","name":"东莞"},{"id":"442000","name":"中山"},{"id":"445101","name":"市辖区"},{"id":"445102","name":"湘桥区"},{"id":"445103","name":"潮安区"},{"id":"445122","name":"饶平县"},{"id":"445201","name":"市辖区"},{"id":"445202","name":"榕城区"},{"id":"445203","name":"揭东区"},{"id":"445222","name":"揭西县"},{"id":"445224","name":"惠来县"},{"id":"445281","name":"普宁市"},{"id":"445301","name":"市辖区"},{"id":"445302","name":"云城区"},{"id":"445303","name":"云安区"},{"id":"445321","name":"新兴县"},{"id":"445322","name":"郁南县"},{"id":"445381","name":"罗定市"},{"id":"450101","name":"市辖区"},{"id":"450102","name":"兴宁区"},{"id":"450103","name":"青秀区"},{"id":"450105","name":"江南区"},{"id":"450107","name":"西乡塘区"},{"id":"450108","name":"良庆区"},{"id":"450109","name":"邕宁区"},{"id":"450110","name":"武鸣区"},{"id":"450123","name":"隆安县"},{"id":"450124","name":"马山县"},{"id":"450125","name":"上林县"},{"id":"450126","name":"宾阳县"},{"id":"450127","name":"横县"},{"id":"450201","name":"市辖区"},{"id":"450202","name":"城中区"},{"id":"450203","name":"鱼峰区"},{"id":"450204","name":"柳南区"},{"id":"450205","name":"柳北区"},{"id":"450221","name":"柳江县"},{"id":"450222","name":"柳城县"},{"id":"450223","name":"鹿寨县"},{"id":"450224","name":"融安县"},{"id":"450225","name":"融水苗族自治县"},{"id":"450226","name":"三江侗族自治县"},{"id":"450301","name":"市辖区"},{"id":"450302","name":"秀峰区"},{"id":"450303","name":"叠彩区"},{"id":"450304","name":"象山区"},{"id":"450305","name":"七星区"},{"id":"450311","name":"雁山区"},{"id":"450312","name":"临桂区"},{"id":"450321","name":"阳朔县"},{"id":"450323","name":"灵川县"},{"id":"450324","name":"全州县"},{"id":"450325","name":"兴安县"},{"id":"450326","name":"永福县"},{"id":"450327","name":"灌阳县"},{"id":"450328","name":"龙胜各族自治县"},{"id":"450329","name":"资源县"},{"id":"450330","name":"平乐县"},{"id":"450331","name":"荔浦县"},{"id":"450332","name":"恭城瑶族自治县"},{"id":"450401","name":"市辖区"},{"id":"450403","name":"万秀区"},{"id":"450405","name":"长洲区"},{"id":"450406","name":"龙圩区"},{"id":"450421","name":"苍梧县"},{"id":"450422","name":"藤县"},{"id":"450423","name":"蒙山县"},{"id":"450481","name":"岑溪市"},{"id":"450501","name":"市辖区"},{"id":"450502","name":"海城区"},{"id":"450503","name":"银海区"},{"id":"450512","name":"铁山港区"},{"id":"450521","name":"合浦县"},{"id":"450601","name":"市辖区"},{"id":"450602","name":"港口区"},{"id":"450603","name":"防城区"},{"id":"450621","name":"上思县"},{"id":"450681","name":"东兴市"},{"id":"450701","name":"市辖区"},{"id":"450702","name":"钦南区"},{"id":"450703","name":"钦北区"},{"id":"450721","name":"灵山县"},{"id":"450722","name":"浦北县"},{"id":"450801","name":"市辖区"},{"id":"450802","name":"港北区"},{"id":"450803","name":"港南区"},{"id":"450804","name":"覃塘区"},{"id":"450821","name":"平南县"},{"id":"450881","name":"桂平市"},{"id":"450901","name":"市辖区"},{"id":"450902","name":"玉州区"},{"id":"450903","name":"福绵区"},{"id":"450921","name":"容县"},{"id":"450922","name":"陆川县"},{"id":"450923","name":"博白县"},{"id":"450924","name":"兴业县"},{"id":"450981","name":"北流市"},{"id":"451001","name":"市辖区"},{"id":"451002","name":"右江区"},{"id":"451021","name":"田阳县"},{"id":"451022","name":"田东县"},{"id":"451023","name":"平果县"},{"id":"451024","name":"德保县"},{"id":"451026","name":"那坡县"},{"id":"451027","name":"凌云县"},{"id":"451028","name":"乐业县"},{"id":"451029","name":"田林县"},{"id":"451030","name":"西林县"},{"id":"451031","name":"隆林各族自治县"},{"id":"451081","name":"靖西市"},{"id":"451101","name":"市辖区"},{"id":"451102","name":"八步区"},{"id":"451121","name":"昭平县"},{"id":"451122","name":"钟山县"},{"id":"451123","name":"富川瑶族自治县"},{"id":"451201","name":"市辖区"},{"id":"451202","name":"金城江区"},{"id":"451221","name":"南丹县"},{"id":"451222","name":"天峨县"},{"id":"451223","name":"凤山县"},{"id":"451224","name":"东兰县"},{"id":"451225","name":"罗城仫佬族自治县"},{"id":"451226","name":"环江毛南族自治县"},{"id":"451227","name":"巴马瑶族自治县"},{"id":"451228","name":"都安瑶族自治县"},{"id":"451229","name":"大化瑶族自治县"},{"id":"451281","name":"宜州市"},{"id":"451301","name":"市辖区"},{"id":"451302","name":"兴宾区"},{"id":"451321","name":"忻城县"},{"id":"451322","name":"象州县"},{"id":"451323","name":"武宣县"},{"id":"451324","name":"金秀瑶族自治县"},{"id":"451381","name":"合山市"},{"id":"451401","name":"市辖区"},{"id":"451402","name":"江州区"},{"id":"451421","name":"扶绥县"},{"id":"451422","name":"宁明县"},{"id":"451423","name":"龙州县"},{"id":"451424","name":"大新县"},{"id":"451425","name":"天等县"},{"id":"451481","name":"凭祥市"},{"id":"460101","name":"市辖区"},{"id":"460105","name":"秀英区"},{"id":"460106","name":"龙华区"},{"id":"460107","name":"琼山区"},{"id":"460108","name":"美兰区"},{"id":"460201","name":"市辖区"},{"id":"460202","name":"海棠区"},{"id":"460203","name":"吉阳区"},{"id":"460204","name":"天涯区"},{"id":"460205","name":"崖州区"},{"id":"460321","name":"西沙群岛"},{"id":"460322","name":"南沙群岛"},{"id":"460323","name":"中沙群岛的岛礁及其海域"},{"id":"469001","name":"五指山市"},{"id":"469002","name":"琼海市"},{"id":"469003","name":"儋州市"},{"id":"469005","name":"文昌市"},{"id":"469006","name":"万宁市"},{"id":"469007","name":"东方市"},{"id":"469021","name":"定安县"},{"id":"469022","name":"屯昌县"},{"id":"469023","name":"澄迈县"},{"id":"469024","name":"临高县"},{"id":"469025","name":"白沙黎族自治县"},{"id":"469026","name":"昌江黎族自治县"},{"id":"469027","name":"乐东黎族自治县"},{"id":"469028","name":"陵水黎族自治县"},{"id":"469029","name":"保亭黎族苗族自治县"},{"id":"469030","name":"琼中黎族苗族自治县"},{"id":"500101","name":"万州区"},{"id":"500102","name":"涪陵区"},{"id":"500103","name":"渝中区"},{"id":"500104","name":"大渡口区"},{"id":"500105","name":"江北区"},{"id":"500106","name":"沙坪坝区"},{"id":"500107","name":"九龙坡区"},{"id":"500108","name":"南岸区"},{"id":"500109","name":"北碚区"},{"id":"500110","name":"綦江区"},{"id":"500111","name":"大足区"},{"id":"500112","name":"渝北区"},{"id":"500113","name":"巴南区"},{"id":"500114","name":"黔江区"},{"id":"500115","name":"长寿区"},{"id":"500116","name":"江津区"},{"id":"500117","name":"合川区"},{"id":"500118","name":"永川区"},{"id":"500119","name":"南川区"},{"id":"500120","name":"璧山区"},{"id":"500151","name":"铜梁区"},{"id":"500152","name":"潼南区"},{"id":"500153","name":"荣昌区"},{"id":"500228","name":"梁平县"},{"id":"500229","name":"城口县"},{"id":"500230","name":"丰都县"},{"id":"500231","name":"垫江县"},{"id":"500232","name":"武隆县"},{"id":"500233","name":"忠县"},{"id":"500234","name":"开县"},{"id":"500235","name":"云阳县"},{"id":"500236","name":"奉节县"},{"id":"500237","name":"巫山县"},{"id":"500238","name":"巫溪县"},{"id":"500240","name":"石柱土家族自治县"},{"id":"500241","name":"秀山土家族苗族自治县"},{"id":"500242","name":"酉阳土家族苗族自治县"},{"id":"500243","name":"彭水苗族土家族自治县"},{"id":"510101","name":"市辖区"},{"id":"510104","name":"锦江区"},{"id":"510105","name":"青羊区"},{"id":"510106","name":"金牛区"},{"id":"510107","name":"武侯区"},{"id":"510108","name":"成华区"},{"id":"510112","name":"龙泉驿区"},{"id":"510113","name":"青白江区"},{"id":"510114","name":"新都区"},{"id":"510115","name":"温江区"},{"id":"510121","name":"金堂县"},{"id":"510122","name":"双流县"},{"id":"510124","name":"郫县"},{"id":"510129","name":"大邑县"},{"id":"510131","name":"蒲江县"},{"id":"510132","name":"新津县"},{"id":"510181","name":"都江堰市"},{"id":"510182","name":"彭州市"},{"id":"510183","name":"邛崃市"},{"id":"510184","name":"崇州市"},{"id":"510301","name":"市辖区"},{"id":"510302","name":"自流井区"},{"id":"510303","name":"贡井区"},{"id":"510304","name":"大安区"},{"id":"510311","name":"沿滩区"},{"id":"510321","name":"荣县"},{"id":"510322","name":"富顺县"},{"id":"510401","name":"市辖区"},{"id":"510402","name":"东区"},{"id":"510403","name":"西区"},{"id":"510411","name":"仁和区"},{"id":"510421","name":"米易县"},{"id":"510422","name":"盐边县"},{"id":"510501","name":"市辖区"},{"id":"510502","name":"江阳区"},{"id":"510503","name":"纳溪区"},{"id":"510504","name":"龙马潭区"},{"id":"510521","name":"泸县"},{"id":"510522","name":"合江县"},{"id":"510524","name":"叙永县"},{"id":"510525","name":"古蔺县"},{"id":"510601","name":"市辖区"},{"id":"510603","name":"旌阳区"},{"id":"510623","name":"中江县"},{"id":"510626","name":"罗江县"},{"id":"510681","name":"广汉市"},{"id":"510682","name":"什邡市"},{"id":"510683","name":"绵竹市"},{"id":"510701","name":"市辖区"},{"id":"510703","name":"涪城区"},{"id":"510704","name":"游仙区"},{"id":"510722","name":"三台县"},{"id":"510723","name":"盐亭县"},{"id":"510724","name":"安县"},{"id":"510725","name":"梓潼县"},{"id":"510726","name":"北川羌族自治县"},{"id":"510727","name":"平武县"},{"id":"510781","name":"江油市"},{"id":"510801","name":"市辖区"},{"id":"510802","name":"利州区"},{"id":"510811","name":"昭化区"},{"id":"510812","name":"朝天区"},{"id":"510821","name":"旺苍县"},{"id":"510822","name":"青川县"},{"id":"510823","name":"剑阁县"},{"id":"510824","name":"苍溪县"},{"id":"510901","name":"市辖区"},{"id":"510903","name":"船山区"},{"id":"510904","name":"安居区"},{"id":"510921","name":"蓬溪县"},{"id":"510922","name":"射洪县"},{"id":"510923","name":"大英县"},{"id":"511001","name":"市辖区"},{"id":"511002","name":"市中区"},{"id":"511011","name":"东兴区"},{"id":"511024","name":"威远县"},{"id":"511025","name":"资中县"},{"id":"511028","name":"隆昌县"},{"id":"511101","name":"市辖区"},{"id":"511102","name":"市中区"},{"id":"511111","name":"沙湾区"},{"id":"511112","name":"五通桥区"},{"id":"511113","name":"金口河区"},{"id":"511123","name":"犍为县"},{"id":"511124","name":"井研县"},{"id":"511126","name":"夹江县"},{"id":"511129","name":"沐川县"},{"id":"511132","name":"峨边彝族自治县"},{"id":"511133","name":"马边彝族自治县"},{"id":"511181","name":"峨眉山市"},{"id":"511301","name":"市辖区"},{"id":"511302","name":"顺庆区"},{"id":"511303","name":"高坪区"},{"id":"511304","name":"嘉陵区"},{"id":"511321","name":"南部县"},{"id":"511322","name":"营山县"},{"id":"511323","name":"蓬安县"},{"id":"511324","name":"仪陇县"},{"id":"511325","name":"西充县"},{"id":"511381","name":"阆中市"},{"id":"511401","name":"市辖区"},{"id":"511402","name":"东坡区"},{"id":"511403","name":"彭山区"},{"id":"511421","name":"仁寿县"},{"id":"511423","name":"洪雅县"},{"id":"511424","name":"丹棱县"},{"id":"511425","name":"青神县"},{"id":"511501","name":"市辖区"},{"id":"511502","name":"翠屏区"},{"id":"511503","name":"南溪区"},{"id":"511521","name":"宜宾县"},{"id":"511523","name":"江安县"},{"id":"511524","name":"长宁县"},{"id":"511525","name":"高县"},{"id":"511526","name":"珙县"},{"id":"511527","name":"筠连县"},{"id":"511528","name":"兴文县"},{"id":"511529","name":"屏山县"},{"id":"511601","name":"市辖区"},{"id":"511602","name":"广安区"},{"id":"511603","name":"前锋区"},{"id":"511621","name":"岳池县"},{"id":"511622","name":"武胜县"},{"id":"511623","name":"邻水县"},{"id":"511681","name":"华蓥市"},{"id":"511701","name":"市辖区"},{"id":"511702","name":"通川区"},{"id":"511703","name":"达川区"},{"id":"511722","name":"宣汉县"},{"id":"511723","name":"开江县"},{"id":"511724","name":"大竹县"},{"id":"511725","name":"渠县"},{"id":"511781","name":"万源市"},{"id":"511801","name":"市辖区"},{"id":"511802","name":"雨城区"},{"id":"511803","name":"名山区"},{"id":"511822","name":"荥经县"},{"id":"511823","name":"汉源县"},{"id":"511824","name":"石棉县"},{"id":"511825","name":"天全县"},{"id":"511826","name":"芦山县"},{"id":"511827","name":"宝兴县"},{"id":"511901","name":"市辖区"},{"id":"511902","name":"巴州区"},{"id":"511903","name":"恩阳区"},{"id":"511921","name":"通江县"},{"id":"511922","name":"南江县"},{"id":"511923","name":"平昌县"},{"id":"512001","name":"市辖区"},{"id":"512002","name":"雁江区"},{"id":"512021","name":"安岳县"},{"id":"512022","name":"乐至县"},{"id":"512081","name":"简阳市"},{"id":"513221","name":"汶川县"},{"id":"513222","name":"理县"},{"id":"513223","name":"茂县"},{"id":"513224","name":"松潘县"},{"id":"513225","name":"九寨沟县"},{"id":"513226","name":"金川县"},{"id":"513227","name":"小金县"},{"id":"513228","name":"黑水县"},{"id":"513229","name":"马尔康县"},{"id":"513230","name":"壤塘县"},{"id":"513231","name":"阿坝县"},{"id":"513232","name":"若尔盖县"},{"id":"513233","name":"红原县"},{"id":"513301","name":"康定市"},{"id":"513322","name":"泸定县"},{"id":"513323","name":"丹巴县"},{"id":"513324","name":"九龙县"},{"id":"513325","name":"雅江县"},{"id":"513326","name":"道孚县"},{"id":"513327","name":"炉霍县"},{"id":"513328","name":"甘孜县"},{"id":"513329","name":"新龙县"},{"id":"513330","name":"德格县"},{"id":"513331","name":"白玉县"},{"id":"513332","name":"石渠县"},{"id":"513333","name":"色达县"},{"id":"513334","name":"理塘县"},{"id":"513335","name":"巴塘县"},{"id":"513336","name":"乡城县"},{"id":"513337","name":"稻城县"},{"id":"513338","name":"得荣县"},{"id":"513401","name":"西昌市"},{"id":"513422","name":"木里藏族自治县"},{"id":"513423","name":"盐源县"},{"id":"513424","name":"德昌县"},{"id":"513425","name":"会理县"},{"id":"513426","name":"会东县"},{"id":"513427","name":"宁南县"},{"id":"513428","name":"普格县"},{"id":"513429","name":"布拖县"},{"id":"513430","name":"金阳县"},{"id":"513431","name":"昭觉县"},{"id":"513432","name":"喜德县"},{"id":"513433","name":"冕宁县"},{"id":"513434","name":"越西县"},{"id":"513435","name":"甘洛县"},{"id":"513436","name":"美姑县"},{"id":"513437","name":"雷波县"},{"id":"520101","name":"市辖区"},{"id":"520102","name":"南明区"},{"id":"520103","name":"云岩区"},{"id":"520111","name":"花溪区"},{"id":"520112","name":"乌当区"},{"id":"520113","name":"白云区"},{"id":"520115","name":"观山湖区"},{"id":"520121","name":"开阳县"},{"id":"520122","name":"息烽县"},{"id":"520123","name":"修文县"},{"id":"520181","name":"清镇市"},{"id":"520201","name":"钟山区"},{"id":"520203","name":"六枝特区"},{"id":"520221","name":"水城县"},{"id":"520222","name":"盘县"},{"id":"520301","name":"市辖区"},{"id":"520302","name":"红花岗区"},{"id":"520303","name":"汇川区"},{"id":"520321","name":"遵义县"},{"id":"520322","name":"桐梓县"},{"id":"520323","name":"绥阳县"},{"id":"520324","name":"正安县"},{"id":"520325","name":"道真仡佬族苗族自治县"},{"id":"520326","name":"务川仡佬族苗族自治县"},{"id":"520327","name":"凤冈县"},{"id":"520328","name":"湄潭县"},{"id":"520329","name":"余庆县"},{"id":"520330","name":"习水县"},{"id":"520381","name":"赤水市"},{"id":"520382","name":"仁怀市"},{"id":"520401","name":"市辖区"},{"id":"520402","name":"西秀区"},{"id":"520403","name":"平坝区"},{"id":"520422","name":"普定县"},{"id":"520423","name":"镇宁布依族苗族自治县"},{"id":"520424","name":"关岭布依族苗族自治县"},{"id":"520425","name":"紫云苗族布依族自治县"},{"id":"520501","name":"市辖区"},{"id":"520502","name":"七星关区"},{"id":"520521","name":"大方县"},{"id":"520522","name":"黔西县"},{"id":"520523","name":"金沙县"},{"id":"520524","name":"织金县"},{"id":"520525","name":"纳雍县"},{"id":"520526","name":"威宁彝族回族苗族自治县"},{"id":"520527","name":"赫章县"},{"id":"520601","name":"市辖区"},{"id":"520602","name":"碧江区"},{"id":"520603","name":"万山区"},{"id":"520621","name":"江口县"},{"id":"520622","name":"玉屏侗族自治县"},{"id":"520623","name":"石阡县"},{"id":"520624","name":"思南县"},{"id":"520625","name":"印江土家族苗族自治县"},{"id":"520626","name":"德江县"},{"id":"520627","name":"沿河土家族自治县"},{"id":"520628","name":"松桃苗族自治县"},{"id":"522301","name":"兴义市"},{"id":"522322","name":"兴仁县"},{"id":"522323","name":"普安县"},{"id":"522324","name":"晴隆县"},{"id":"522325","name":"贞丰县"},{"id":"522326","name":"望谟县"},{"id":"522327","name":"册亨县"},{"id":"522328","name":"安龙县"},{"id":"522601","name":"凯里市"},{"id":"522622","name":"黄平县"},{"id":"522623","name":"施秉县"},{"id":"522624","name":"三穗县"},{"id":"522625","name":"镇远县"},{"id":"522626","name":"岑巩县"},{"id":"522627","name":"天柱县"},{"id":"522628","name":"锦屏县"},{"id":"522629","name":"剑河县"},{"id":"522630","name":"台江县"},{"id":"522631","name":"黎平县"},{"id":"522632","name":"榕江县"},{"id":"522633","name":"从江县"},{"id":"522634","name":"雷山县"},{"id":"522635","name":"麻江县"},{"id":"522636","name":"丹寨县"},{"id":"522701","name":"都匀市"},{"id":"522702","name":"福泉市"},{"id":"522722","name":"荔波县"},{"id":"522723","name":"贵定县"},{"id":"522725","name":"瓮安县"},{"id":"522726","name":"独山县"},{"id":"522727","name":"平塘县"},{"id":"522728","name":"罗甸县"},{"id":"522729","name":"长顺县"},{"id":"522730","name":"龙里县"},{"id":"522731","name":"惠水县"},{"id":"522732","name":"三都水族自治县"},{"id":"530101","name":"市辖区"},{"id":"530102","name":"五华区"},{"id":"530103","name":"盘龙区"},{"id":"530111","name":"官渡区"},{"id":"530112","name":"西山区"},{"id":"530113","name":"东川区"},{"id":"530114","name":"呈贡区"},{"id":"530122","name":"晋宁县"},{"id":"530124","name":"富民县"},{"id":"530125","name":"宜良县"},{"id":"530126","name":"石林彝族自治县"},{"id":"530127","name":"嵩明县"},{"id":"530128","name":"禄劝彝族苗族自治县"},{"id":"530129","name":"寻甸回族彝族自治县"},{"id":"530181","name":"安宁市"},{"id":"530301","name":"市辖区"},{"id":"530302","name":"麒麟区"},{"id":"530321","name":"马龙县"},{"id":"530322","name":"陆良县"},{"id":"530323","name":"师宗县"},{"id":"530324","name":"罗平县"},{"id":"530325","name":"富源县"},{"id":"530326","name":"会泽县"},{"id":"530328","name":"沾益县"},{"id":"530381","name":"宣威市"},{"id":"530401","name":"市辖区"},{"id":"530402","name":"红塔区"},{"id":"530421","name":"江川县"},{"id":"530422","name":"澄江县"},{"id":"530423","name":"通海县"},{"id":"530424","name":"华宁县"},{"id":"530425","name":"易门县"},{"id":"530426","name":"峨山彝族自治县"},{"id":"530427","name":"新平彝族傣族自治县"},{"id":"530428","name":"元江哈尼族彝族傣族自治县"},{"id":"530501","name":"市辖区"},{"id":"530502","name":"隆阳区"},{"id":"530521","name":"施甸县"},{"id":"530523","name":"龙陵县"},{"id":"530524","name":"昌宁县"},{"id":"530581","name":"腾冲市"},{"id":"530601","name":"市辖区"},{"id":"530602","name":"昭阳区"},{"id":"530621","name":"鲁甸县"},{"id":"530622","name":"巧家县"},{"id":"530623","name":"盐津县"},{"id":"530624","name":"大关县"},{"id":"530625","name":"永善县"},{"id":"530626","name":"绥江县"},{"id":"530627","name":"镇雄县"},{"id":"530628","name":"彝良县"},{"id":"530629","name":"威信县"},{"id":"530630","name":"水富县"},{"id":"530701","name":"市辖区"},{"id":"530702","name":"古城区"},{"id":"530721","name":"玉龙纳西族自治县"},{"id":"530722","name":"永胜县"},{"id":"530723","name":"华坪县"},{"id":"530724","name":"宁蒗彝族自治县"},{"id":"530801","name":"市辖区"},{"id":"530802","name":"思茅区"},{"id":"530821","name":"宁洱哈尼族彝族自治县"},{"id":"530822","name":"墨江哈尼族自治县"},{"id":"530823","name":"景东彝族自治县"},{"id":"530824","name":"景谷傣族彝族自治县"},{"id":"530825","name":"镇沅彝族哈尼族拉祜族自治县"},{"id":"530826","name":"江城哈尼族彝族自治县"},{"id":"530827","name":"孟连傣族拉祜族佤族自治县"},{"id":"530828","name":"澜沧拉祜族自治县"},{"id":"530829","name":"西盟佤族自治县"},{"id":"530901","name":"市辖区"},{"id":"530902","name":"临翔区"},{"id":"530921","name":"凤庆县"},{"id":"530922","name":"云县"},{"id":"530923","name":"永德县"},{"id":"530924","name":"镇康县"},{"id":"530925","name":"双江拉祜族佤族布朗族傣族自治县"},{"id":"530926","name":"耿马傣族佤族自治县"},{"id":"530927","name":"沧源佤族自治县"},{"id":"532301","name":"楚雄市"},{"id":"532322","name":"双柏县"},{"id":"532323","name":"牟定县"},{"id":"532324","name":"南华县"},{"id":"532325","name":"姚安县"},{"id":"532326","name":"大姚县"},{"id":"532327","name":"永仁县"},{"id":"532328","name":"元谋县"},{"id":"532329","name":"武定县"},{"id":"532331","name":"禄丰县"},{"id":"532501","name":"个旧市"},{"id":"532502","name":"开远市"},{"id":"532503","name":"蒙自市"},{"id":"532504","name":"弥勒市"},{"id":"532523","name":"屏边苗族自治县"},{"id":"532524","name":"建水县"},{"id":"532525","name":"石屏县"},{"id":"532527","name":"泸西县"},{"id":"532528","name":"元阳县"},{"id":"532529","name":"红河县"},{"id":"532530","name":"金平苗族瑶族傣族自治县"},{"id":"532531","name":"绿春县"},{"id":"532532","name":"河口瑶族自治县"},{"id":"532601","name":"文山市"},{"id":"532622","name":"砚山县"},{"id":"532623","name":"西畴县"},{"id":"532624","name":"麻栗坡县"},{"id":"532625","name":"马关县"},{"id":"532626","name":"丘北县"},{"id":"532627","name":"广南县"},{"id":"532628","name":"富宁县"},{"id":"532801","name":"景洪市"},{"id":"532822","name":"勐海县"},{"id":"532823","name":"勐腊县"},{"id":"532901","name":"大理市"},{"id":"532922","name":"漾濞彝族自治县"},{"id":"532923","name":"祥云县"},{"id":"532924","name":"宾川县"},{"id":"532925","name":"弥渡县"},{"id":"532926","name":"南涧彝族自治县"},{"id":"532927","name":"巍山彝族回族自治县"},{"id":"532928","name":"永平县"},{"id":"532929","name":"云龙县"},{"id":"532930","name":"洱源县"},{"id":"532931","name":"剑川县"},{"id":"532932","name":"鹤庆县"},{"id":"533102","name":"瑞丽市"},{"id":"533103","name":"芒市"},{"id":"533122","name":"梁河县"},{"id":"533123","name":"盈江县"},{"id":"533124","name":"陇川县"},{"id":"533321","name":"泸水县"},{"id":"533323","name":"福贡县"},{"id":"533324","name":"贡山独龙族怒族自治县"},{"id":"533325","name":"兰坪白族普米族自治县"},{"id":"533401","name":"香格里拉市"},{"id":"533422","name":"德钦县"},{"id":"533423","name":"维西傈僳族自治县"},{"id":"540101","name":"市辖区"},{"id":"540102","name":"城关区"},{"id":"540121","name":"林周县"},{"id":"540122","name":"当雄县"},{"id":"540123","name":"尼木县"},{"id":"540124","name":"曲水县"},{"id":"540125","name":"堆龙德庆县"},{"id":"540126","name":"达孜县"},{"id":"540127","name":"墨竹工卡县"},{"id":"540202","name":"桑珠孜区"},{"id":"540221","name":"南木林县"},{"id":"540222","name":"江孜县"},{"id":"540223","name":"定日县"},{"id":"540224","name":"萨迦县"},{"id":"540225","name":"拉孜县"},{"id":"540226","name":"昂仁县"},{"id":"540227","name":"谢通门县"},{"id":"540228","name":"白朗县"},{"id":"540229","name":"仁布县"},{"id":"540230","name":"康马县"},{"id":"540231","name":"定结县"},{"id":"540232","name":"仲巴县"},{"id":"540233","name":"亚东县"},{"id":"540234","name":"吉隆县"},{"id":"540235","name":"聂拉木县"},{"id":"540236","name":"萨嘎县"},{"id":"540237","name":"岗巴县"},{"id":"540302","name":"卡若区"},{"id":"540321","name":"江达县"},{"id":"540322","name":"贡觉县"},{"id":"540323","name":"类乌齐县"},{"id":"540324","name":"丁青县"},{"id":"540325","name":"察雅县"},{"id":"540326","name":"八宿县"},{"id":"540327","name":"左贡县"},{"id":"540328","name":"芒康县"},{"id":"540329","name":"洛隆县"},{"id":"540330","name":"边坝县"},{"id":"540402","name":"巴宜区"},{"id":"540421","name":"工布江达县"},{"id":"540422","name":"米林县"},{"id":"540423","name":"墨脱县"},{"id":"540424","name":"波密县"},{"id":"540425","name":"察隅县"},{"id":"540426","name":"朗县"},{"id":"542221","name":"乃东县"},{"id":"542222","name":"扎囊县"},{"id":"542223","name":"贡嘎县"},{"id":"542224","name":"桑日县"},{"id":"542225","name":"琼结县"},{"id":"542226","name":"曲松县"},{"id":"542227","name":"措美县"},{"id":"542228","name":"洛扎县"},{"id":"542229","name":"加查县"},{"id":"542231","name":"隆子县"},{"id":"542232","name":"错那县"},{"id":"542233","name":"浪卡子县"},{"id":"542421","name":"那曲县"},{"id":"542422","name":"嘉黎县"},{"id":"542423","name":"比如县"},{"id":"542424","name":"聂荣县"},{"id":"542425","name":"安多县"},{"id":"542426","name":"申扎县"},{"id":"542427","name":"索县"},{"id":"542428","name":"班戈县"},{"id":"542429","name":"巴青县"},{"id":"542430","name":"尼玛县"},{"id":"542431","name":"双湖县"},{"id":"542521","name":"普兰县"},{"id":"542522","name":"札达县"},{"id":"542523","name":"噶尔县"},{"id":"542524","name":"日土县"},{"id":"542525","name":"革吉县"},{"id":"542526","name":"改则县"},{"id":"542527","name":"措勤县"},{"id":"610101","name":"市辖区"},{"id":"610102","name":"新城区"},{"id":"610103","name":"碑林区"},{"id":"610104","name":"莲湖区"},{"id":"610111","name":"灞桥区"},{"id":"610112","name":"未央区"},{"id":"610113","name":"雁塔区"},{"id":"610114","name":"阎良区"},{"id":"610115","name":"临潼区"},{"id":"610116","name":"长安区"},{"id":"610117","name":"高陵区"},{"id":"610122","name":"蓝田县"},{"id":"610124","name":"周至县"},{"id":"610125","name":"户县"},{"id":"610201","name":"市辖区"},{"id":"610202","name":"王益区"},{"id":"610203","name":"印台区"},{"id":"610204","name":"耀州区"},{"id":"610222","name":"宜君县"},{"id":"610301","name":"市辖区"},{"id":"610302","name":"渭滨区"},{"id":"610303","name":"金台区"},{"id":"610304","name":"陈仓区"},{"id":"610322","name":"凤翔县"},{"id":"610323","name":"岐山县"},{"id":"610324","name":"扶风县"},{"id":"610326","name":"眉县"},{"id":"610327","name":"陇县"},{"id":"610328","name":"千阳县"},{"id":"610329","name":"麟游县"},{"id":"610330","name":"凤县"},{"id":"610331","name":"太白县"},{"id":"610401","name":"市辖区"},{"id":"610402","name":"秦都区"},{"id":"610403","name":"杨陵区"},{"id":"610404","name":"渭城区"},{"id":"610422","name":"三原县"},{"id":"610423","name":"泾阳县"},{"id":"610424","name":"乾县"},{"id":"610425","name":"礼泉县"},{"id":"610426","name":"永寿县"},{"id":"610427","name":"彬县"},{"id":"610428","name":"长武县"},{"id":"610429","name":"旬邑县"},{"id":"610430","name":"淳化县"},{"id":"610431","name":"武功县"},{"id":"610481","name":"兴平市"},{"id":"610501","name":"市辖区"},{"id":"610502","name":"临渭区"},{"id":"610521","name":"华县"},{"id":"610522","name":"潼关县"},{"id":"610523","name":"大荔县"},{"id":"610524","name":"合阳县"},{"id":"610525","name":"澄城县"},{"id":"610526","name":"蒲城县"},{"id":"610527","name":"白水县"},{"id":"610528","name":"富平县"},{"id":"610581","name":"韩城市"},{"id":"610582","name":"华阴市"},{"id":"610601","name":"市辖区"},{"id":"610602","name":"宝塔区"},{"id":"610621","name":"延长县"},{"id":"610622","name":"延川县"},{"id":"610623","name":"子长县"},{"id":"610624","name":"安塞县"},{"id":"610625","name":"志丹县"},{"id":"610626","name":"吴起县"},{"id":"610627","name":"甘泉县"},{"id":"610628","name":"富县"},{"id":"610629","name":"洛川县"},{"id":"610630","name":"宜川县"},{"id":"610631","name":"黄龙县"},{"id":"610632","name":"黄陵县"},{"id":"610701","name":"市辖区"},{"id":"610702","name":"汉台区"},{"id":"610721","name":"南郑县"},{"id":"610722","name":"城固县"},{"id":"610723","name":"洋县"},{"id":"610724","name":"西乡县"},{"id":"610725","name":"勉县"},{"id":"610726","name":"宁强县"},{"id":"610727","name":"略阳县"},{"id":"610728","name":"镇巴县"},{"id":"610729","name":"留坝县"},{"id":"610730","name":"佛坪县"},{"id":"610801","name":"市辖区"},{"id":"610802","name":"榆阳区"},{"id":"610821","name":"神木县"},{"id":"610822","name":"府谷县"},{"id":"610823","name":"横山县"},{"id":"610824","name":"靖边县"},{"id":"610825","name":"定边县"},{"id":"610826","name":"绥德县"},{"id":"610827","name":"米脂县"},{"id":"610828","name":"佳县"},{"id":"610829","name":"吴堡县"},{"id":"610830","name":"清涧县"},{"id":"610831","name":"子洲县"},{"id":"610901","name":"市辖区"},{"id":"610902","name":"汉滨区"},{"id":"610921","name":"汉阴县"},{"id":"610922","name":"石泉县"},{"id":"610923","name":"宁陕县"},{"id":"610924","name":"紫阳县"},{"id":"610925","name":"岚皋县"},{"id":"610926","name":"平利县"},{"id":"610927","name":"镇坪县"},{"id":"610928","name":"旬阳县"},{"id":"610929","name":"白河县"},{"id":"611001","name":"市辖区"},{"id":"611002","name":"商州区"},{"id":"611021","name":"洛南县"},{"id":"611022","name":"丹凤县"},{"id":"611023","name":"商南县"},{"id":"611024","name":"山阳县"},{"id":"611025","name":"镇安县"},{"id":"611026","name":"柞水县"},{"id":"620101","name":"市辖区"},{"id":"620102","name":"城关区"},{"id":"620103","name":"七里河区"},{"id":"620104","name":"西固区"},{"id":"620105","name":"安宁区"},{"id":"620111","name":"红古区"},{"id":"620121","name":"永登县"},{"id":"620122","name":"皋兰县"},{"id":"620123","name":"榆中县"},{"id":"620201","name":"市辖区"},{"id":"620301","name":"市辖区"},{"id":"620302","name":"金川区"},{"id":"620321","name":"永昌县"},{"id":"620401","name":"市辖区"},{"id":"620402","name":"白银区"},{"id":"620403","name":"平川区"},{"id":"620421","name":"靖远县"},{"id":"620422","name":"会宁县"},{"id":"620423","name":"景泰县"},{"id":"620501","name":"市辖区"},{"id":"620502","name":"秦州区"},{"id":"620503","name":"麦积区"},{"id":"620521","name":"清水县"},{"id":"620522","name":"秦安县"},{"id":"620523","name":"甘谷县"},{"id":"620524","name":"武山县"},{"id":"620525","name":"张家川回族自治县"},{"id":"620601","name":"市辖区"},{"id":"620602","name":"凉州区"},{"id":"620621","name":"民勤县"},{"id":"620622","name":"古浪县"},{"id":"620623","name":"天祝藏族自治县"},{"id":"620701","name":"市辖区"},{"id":"620702","name":"甘州区"},{"id":"620721","name":"肃南裕固族自治县"},{"id":"620722","name":"民乐县"},{"id":"620723","name":"临泽县"},{"id":"620724","name":"高台县"},{"id":"620725","name":"山丹县"},{"id":"620801","name":"市辖区"},{"id":"620802","name":"崆峒区"},{"id":"620821","name":"泾川县"},{"id":"620822","name":"灵台县"},{"id":"620823","name":"崇信县"},{"id":"620824","name":"华亭县"},{"id":"620825","name":"庄浪县"},{"id":"620826","name":"静宁县"},{"id":"620901","name":"市辖区"},{"id":"620902","name":"肃州区"},{"id":"620921","name":"金塔县"},{"id":"620922","name":"瓜州县"},{"id":"620923","name":"肃北蒙古族自治县"},{"id":"620924","name":"阿克塞哈萨克族自治县"},{"id":"620981","name":"玉门市"},{"id":"620982","name":"敦煌市"},{"id":"621001","name":"市辖区"},{"id":"621002","name":"西峰区"},{"id":"621021","name":"庆城县"},{"id":"621022","name":"环县"},{"id":"621023","name":"华池县"},{"id":"621024","name":"合水县"},{"id":"621025","name":"正宁县"},{"id":"621026","name":"宁县"},{"id":"621027","name":"镇原县"},{"id":"621101","name":"市辖区"},{"id":"621102","name":"安定区"},{"id":"621121","name":"通渭县"},{"id":"621122","name":"陇西县"},{"id":"621123","name":"渭源县"},{"id":"621124","name":"临洮县"},{"id":"621125","name":"漳县"},{"id":"621126","name":"岷县"},{"id":"621201","name":"市辖区"},{"id":"621202","name":"武都区"},{"id":"621221","name":"成县"},{"id":"621222","name":"文县"},{"id":"621223","name":"宕昌县"},{"id":"621224","name":"康县"},{"id":"621225","name":"西和县"},{"id":"621226","name":"礼县"},{"id":"621227","name":"徽县"},{"id":"621228","name":"两当县"},{"id":"622901","name":"临夏市"},{"id":"622921","name":"临夏县"},{"id":"622922","name":"康乐县"},{"id":"622923","name":"永靖县"},{"id":"622924","name":"广河县"},{"id":"622925","name":"和政县"},{"id":"622926","name":"东乡族自治县"},{"id":"622927","name":"积石山保安族东乡族撒拉族自治县"},{"id":"623001","name":"合作市"},{"id":"623021","name":"临潭县"},{"id":"623022","name":"卓尼县"},{"id":"623023","name":"舟曲县"},{"id":"623024","name":"迭部县"},{"id":"623025","name":"玛曲县"},{"id":"623026","name":"碌曲县"},{"id":"623027","name":"夏河县"},{"id":"630101","name":"市辖区"},{"id":"630102","name":"城东区"},{"id":"630103","name":"城中区"},{"id":"630104","name":"城西区"},{"id":"630105","name":"城北区"},{"id":"630121","name":"大通回族土族自治县"},{"id":"630122","name":"湟中县"},{"id":"630123","name":"湟源县"},{"id":"630202","name":"乐都区"},{"id":"630203","name":"平安区"},{"id":"630222","name":"民和回族土族自治县"},{"id":"630223","name":"互助土族自治县"},{"id":"630224","name":"化隆回族自治县"},{"id":"630225","name":"循化撒拉族自治县"},{"id":"632221","name":"门源回族自治县"},{"id":"632222","name":"祁连县"},{"id":"632223","name":"海晏县"},{"id":"632224","name":"刚察县"},{"id":"632321","name":"同仁县"},{"id":"632322","name":"尖扎县"},{"id":"632323","name":"泽库县"},{"id":"632324","name":"河南蒙古族自治县"},{"id":"632521","name":"共和县"},{"id":"632522","name":"同德县"},{"id":"632523","name":"贵德县"},{"id":"632524","name":"兴海县"},{"id":"632525","name":"贵南县"},{"id":"632621","name":"玛沁县"},{"id":"632622","name":"班玛县"},{"id":"632623","name":"甘德县"},{"id":"632624","name":"达日县"},{"id":"632625","name":"久治县"},{"id":"632626","name":"玛多县"},{"id":"632701","name":"玉树市"},{"id":"632722","name":"杂多县"},{"id":"632723","name":"称多县"},{"id":"632724","name":"治多县"},{"id":"632725","name":"囊谦县"},{"id":"632726","name":"曲麻莱县"},{"id":"632801","name":"格尔木市"},{"id":"632802","name":"德令哈市"},{"id":"632821","name":"乌兰县"},{"id":"632822","name":"都兰县"},{"id":"632823","name":"天峻县"},{"id":"640101","name":"市辖区"},{"id":"640104","name":"兴庆区"},{"id":"640105","name":"西夏区"},{"id":"640106","name":"金凤区"},{"id":"640121","name":"永宁县"},{"id":"640122","name":"贺兰县"},{"id":"640181","name":"灵武市"},{"id":"640201","name":"市辖区"},{"id":"640202","name":"大武口区"},{"id":"640205","name":"惠农区"},{"id":"640221","name":"平罗县"},{"id":"640301","name":"市辖区"},{"id":"640302","name":"利通区"},{"id":"640303","name":"红寺堡区"},{"id":"640323","name":"盐池县"},{"id":"640324","name":"同心县"},{"id":"640381","name":"青铜峡市"},{"id":"640401","name":"市辖区"},{"id":"640402","name":"原州区"},{"id":"640422","name":"西吉县"},{"id":"640423","name":"隆德县"},{"id":"640424","name":"泾源县"},{"id":"640425","name":"彭阳县"},{"id":"640501","name":"市辖区"},{"id":"640502","name":"沙坡头区"},{"id":"640521","name":"中宁县"},{"id":"640522","name":"海原县"},{"id":"650101","name":"市辖区"},{"id":"650102","name":"天山区"},{"id":"650103","name":"沙依巴克区"},{"id":"650104","name":"新市区"},{"id":"650105","name":"水磨沟区"},{"id":"650106","name":"头屯河区"},{"id":"650107","name":"达坂城区"},{"id":"650109","name":"米东区"},{"id":"650121","name":"乌鲁木齐县"},{"id":"650201","name":"市辖区"},{"id":"650202","name":"独山子区"},{"id":"650203","name":"克拉玛依区"},{"id":"650204","name":"白碱滩区"},{"id":"650205","name":"乌尔禾区"},{"id":"650402","name":"高昌区"},{"id":"650421","name":"鄯善县"},{"id":"650422","name":"托克逊县"},{"id":"652201","name":"哈密市"},{"id":"652222","name":"巴里坤哈萨克自治县"},{"id":"652223","name":"伊吾县"},{"id":"652301","name":"昌吉市"},{"id":"652302","name":"阜康市"},{"id":"652323","name":"呼图壁县"},{"id":"652324","name":"玛纳斯县"},{"id":"652325","name":"奇台县"},{"id":"652327","name":"吉木萨尔县"},{"id":"652328","name":"木垒哈萨克自治县"},{"id":"652701","name":"博乐市"},{"id":"652702","name":"阿拉山口市"},{"id":"652722","name":"精河县"},{"id":"652723","name":"温泉县"},{"id":"652801","name":"库尔勒市"},{"id":"652822","name":"轮台县"},{"id":"652823","name":"尉犁县"},{"id":"652824","name":"若羌县"},{"id":"652825","name":"且末县"},{"id":"652826","name":"焉耆回族自治县"},{"id":"652827","name":"和静县"},{"id":"652828","name":"和硕县"},{"id":"652829","name":"博湖县"},{"id":"652901","name":"阿克苏市"},{"id":"652922","name":"温宿县"},{"id":"652923","name":"库车县"},{"id":"652924","name":"沙雅县"},{"id":"652925","name":"新和县"},{"id":"652926","name":"拜城县"},{"id":"652927","name":"乌什县"},{"id":"652928","name":"阿瓦提县"},{"id":"652929","name":"柯坪县"},{"id":"653001","name":"阿图什市"},{"id":"653022","name":"阿克陶县"},{"id":"653023","name":"阿合奇县"},{"id":"653024","name":"乌恰县"},{"id":"653101","name":"喀什市"},{"id":"653121","name":"疏附县"},{"id":"653122","name":"疏勒县"},{"id":"653123","name":"英吉沙县"},{"id":"653124","name":"泽普县"},{"id":"653125","name":"莎车县"},{"id":"653126","name":"叶城县"},{"id":"653127","name":"麦盖提县"},{"id":"653128","name":"岳普湖县"},{"id":"653129","name":"伽师县"},{"id":"653130","name":"巴楚县"},{"id":"653131","name":"塔什库尔干塔吉克自治县"},{"id":"653201","name":"和田市"},{"id":"653221","name":"和田县"},{"id":"653222","name":"墨玉县"},{"id":"653223","name":"皮山县"},{"id":"653224","name":"洛浦县"},{"id":"653225","name":"策勒县"},{"id":"653226","name":"于田县"},{"id":"653227","name":"民丰县"},{"id":"654002","name":"伊宁市"},{"id":"654003","name":"奎屯市"},{"id":"654004","name":"霍尔果斯市"},{"id":"654021","name":"伊宁县"},{"id":"654022","name":"察布查尔锡伯自治县"},{"id":"654023","name":"霍城县"},{"id":"654024","name":"巩留县"},{"id":"654025","name":"新源县"},{"id":"654026","name":"昭苏县"},{"id":"654027","name":"特克斯县"},{"id":"654028","name":"尼勒克县"},{"id":"654201","name":"塔城市"},{"id":"654202","name":"乌苏市"},{"id":"654221","name":"额敏县"},{"id":"654223","name":"沙湾县"},{"id":"654224","name":"托里县"},{"id":"654225","name":"裕民县"},{"id":"654226","name":"和布克赛尔蒙古自治县"},{"id":"654301","name":"阿勒泰市"},{"id":"654321","name":"布尔津县"},{"id":"654322","name":"富蕴县"},{"id":"654323","name":"福海县"},{"id":"654324","name":"哈巴河县"},{"id":"654325","name":"青河县"},{"id":"654326","name":"吉木乃县"},{"id":"659001","name":"石河子市"},{"id":"659002","name":"阿拉尔市"},{"id":"659003","name":"图木舒克市"},{"id":"659004","name":"五家渠市"},{"id":"MAC","name":""},{"id":"HKG","name":""},{"id":"TWN","name":""}];
	module.exports = districts;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	var surveys = [
	    {
	        key: "0", value: '不满意'
	    },
	    {
	        key: "1", value: '一般'
	    },
	    {
	        key: "2", value: '满意'
	    }
	];
	module.exports = surveys;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by gthowe on 17/3/20.
	 */
	/**
	 * 基于iphone375宽度的基准做制作，把body的font-size按比例设置成约等于10px
	 * 设置字体大小用单位em  1em=10px,1.4em=14px....以此类推
	 * @type {string}
	 */


	if (document.body.clientWidth < 750) {
	    document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 40 + 'px';
	} else if (document.body.clientWidth > 750 && document.body.clientWidth < 970) {
	    document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 70 + 'px';
	    // document.getElementsByTagName("body")[0].style.width = "750px";
	    document.getElementsByTagName("body")[0].style.margin = "0 auto";
	} else {
	    document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 120 + 'px';
	    // document.getElementsByTagName("body")[0].style.width = "970px";
	    document.getElementsByTagName("body")[0].style.margin = "0 auto";
	}

	$(window).resize(function () {
	    if (document.body.clientWidth < 750) {
	        document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 40 + 'px';
	    } else if (document.body.clientWidth > 750 && document.body.clientWidth < 970) {
	        document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 70 + 'px';
	        // document.getElementsByTagName("body")[0].style.width = "750px";
	        document.getElementsByTagName("body")[0].style.margin = "0 auto";
	    } else {
	        document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 120 + 'px';
	        // document.getElementsByTagName("body")[0].style.width = "970px";
	        document.getElementsByTagName("body")[0].style.margin = "0 auto";
	    }

	})



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
	 * Bootstrap v3.3.7 (http://getbootstrap.com)
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under the MIT license
	 */
	if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
	this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: modal.js v3.3.7
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function (element, options) {
	    this.options             = options
	    this.$body               = $(document.body)
	    this.$element            = $(element)
	    this.$dialog             = this.$element.find('.modal-dialog')
	    this.$backdrop           = null
	    this.isShown             = null
	    this.originalBodyPad     = null
	    this.scrollbarWidth      = 0
	    this.ignoreBackdropClick = false

	    if (this.options.remote) {
	      this.$element
	        .find('.modal-content')
	        .load(this.options.remote, $.proxy(function () {
	          this.$element.trigger('loaded.bs.modal')
	        }, this))
	    }
	  }

	  Modal.VERSION  = '3.3.7'

	  Modal.TRANSITION_DURATION = 300
	  Modal.BACKDROP_TRANSITION_DURATION = 150

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  }

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget)
	  }

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this
	    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

	    this.$element.trigger(e)

	    if (this.isShown || e.isDefaultPrevented()) return

	    this.isShown = true

	    this.checkScrollbar()
	    this.setScrollbar()
	    this.$body.addClass('modal-open')

	    this.escape()
	    this.resize()

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
	      })
	    })

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade')

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body) // don't move modals dom position
	      }

	      that.$element
	        .show()
	        .scrollTop(0)

	      that.adjustDialog()

	      if (transition) {
	        that.$element[0].offsetWidth // force reflow
	      }

	      that.$element.addClass('in')

	      that.enforceFocus()

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

	      transition ?
	        that.$dialog // wait for modal to slide in
	          .one('bsTransitionEnd', function () {
	            that.$element.trigger('focus').trigger(e)
	          })
	          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	        that.$element.trigger('focus').trigger(e)
	    })
	  }

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault()

	    e = $.Event('hide.bs.modal')

	    this.$element.trigger(e)

	    if (!this.isShown || e.isDefaultPrevented()) return

	    this.isShown = false

	    this.escape()
	    this.resize()

	    $(document).off('focusin.bs.modal')

	    this.$element
	      .removeClass('in')
	      .off('click.dismiss.bs.modal')
	      .off('mouseup.dismiss.bs.modal')

	    this.$dialog.off('mousedown.dismiss.bs.modal')

	    $.support.transition && this.$element.hasClass('fade') ?
	      this.$element
	        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
	        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	      this.hideModal()
	  }

	  Modal.prototype.enforceFocus = function () {
	    $(document)
	      .off('focusin.bs.modal') // guard against infinite focus loop
	      .on('focusin.bs.modal', $.proxy(function (e) {
	        if (document !== e.target &&
	            this.$element[0] !== e.target &&
	            !this.$element.has(e.target).length) {
	          this.$element.trigger('focus')
	        }
	      }, this))
	  }

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide()
	      }, this))
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal')
	    }
	  }

	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
	    } else {
	      $(window).off('resize.bs.modal')
	    }
	  }

	  Modal.prototype.hideModal = function () {
	    var that = this
	    this.$element.hide()
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open')
	      that.resetAdjustments()
	      that.resetScrollbar()
	      that.$element.trigger('hidden.bs.modal')
	    })
	  }

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove()
	    this.$backdrop = null
	  }

	  Modal.prototype.backdrop = function (callback) {
	    var that = this
	    var animate = this.$element.hasClass('fade') ? 'fade' : ''

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate

	      this.$backdrop = $(document.createElement('div'))
	        .addClass('modal-backdrop ' + animate)
	        .appendTo(this.$body)

	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false
	          return
	        }
	        if (e.target !== e.currentTarget) return
	        this.options.backdrop == 'static'
	          ? this.$element[0].focus()
	          : this.hide()
	      }, this))

	      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

	      this.$backdrop.addClass('in')

	      if (!callback) return

	      doAnimate ?
	        this.$backdrop
	          .one('bsTransitionEnd', callback)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callback()

	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in')

	      var callbackRemove = function () {
	        that.removeBackdrop()
	        callback && callback()
	      }
	      $.support.transition && this.$element.hasClass('fade') ?
	        this.$backdrop
	          .one('bsTransitionEnd', callbackRemove)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callbackRemove()

	    } else if (callback) {
	      callback()
	    }
	  }

	  // these following methods are used to handle overflowing modals

	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog()
	  }

	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

	    this.$element.css({
	      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    })
	  }

	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    })
	  }

	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth
	    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect()
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
	    this.scrollbarWidth = this.measureScrollbar()
	  }

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
	    this.originalBodyPad = document.body.style.paddingRight || ''
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
	  }

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad)
	  }

	  Modal.prototype.measureScrollbar = function () { // thx walsh
	    var scrollDiv = document.createElement('div')
	    scrollDiv.className = 'modal-scrollbar-measure'
	    this.$body.append(scrollDiv)
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	    this.$body[0].removeChild(scrollDiv)
	    return scrollbarWidth
	  }


	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.modal')
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
	      if (typeof option == 'string') data[option](_relatedTarget)
	      else if (options.show) data.show(_relatedTarget)
	    })
	  }

	  var old = $.fn.modal

	  $.fn.modal             = Plugin
	  $.fn.modal.Constructor = Modal


	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old
	    return this
	  }


	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this   = $(this)
	    var href    = $this.attr('href')
	    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
	    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

	    if ($this.is('a')) e.preventDefault()

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus')
	      })
	    })
	    Plugin.call($target, option, this)
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* =========================================================
	 * bootstrap-datetimepicker.js
	 * =========================================================
	 * Copyright 2012 Stefan Petre
	 *
	 * Improvements by Andrew Rowls
	 * Improvements by Sébastien Malot
	 * Improvements by Yun Lai
	 * Improvements by Kenneth Henderick
	 * Improvements by CuGBabyBeaR
	 * Improvements by Christian Vaas <auspex@auspex.eu>
	 *
	 * Project URL : http://www.malot.fr/bootstrap-datetimepicker
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 * ========================================================= */

	(function (factory) {
	    if (true)
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    else if (typeof exports === 'object')
	        factory(require('jquery'));
	    else
	        factory(jQuery);

	}(function ($, undefined) {

	    // Add ECMA262-5 Array methods if not supported natively (IE8)
	    if (!('indexOf' in Array.prototype)) {
	        Array.prototype.indexOf = function (find, i) {
	            if (i === undefined) i = 0;
	            if (i < 0) i += this.length;
	            if (i < 0) i = 0;
	            for (var n = this.length; i < n; i++) {
	                if (i in this && this[i] === find) {
	                    return i;
	                }
	            }
	            return -1;
	        }
	    }

	    // Add timezone abbreviation support for ie6+, Chrome, Firefox
	    function timeZoneAbbreviation() {
	        var abbreviation, date, formattedStr, i, len, matchedStrings, ref, str;
	        date = (new Date()).toString();
	        formattedStr = ((ref = date.split('(')[1]) != null ? ref.slice(0, -1) : 0) || date.split(' ');
	        if (formattedStr instanceof Array) {
	            matchedStrings = [];
	            for (var i = 0, len = formattedStr.length; i < len; i++) {
	                str = formattedStr[i];
	                if ((abbreviation = (ref = str.match(/\b[A-Z]+\b/)) !== null) ? ref[0] : 0) {
	                    matchedStrings.push(abbreviation);
	                }
	            }
	            formattedStr = matchedStrings.pop();
	        }
	        return formattedStr;
	    }

	    function UTCDate() {
	        return new Date(Date.UTC.apply(Date, arguments));
	    }

	    // Picker object
	    var Datetimepicker = function (element, options) {
	        var that = this;

	        this.element = $(element);

	        // add container for single page application
	        // when page switch the datetimepicker div will be removed also.
	        this.container = options.container || 'body';

	        this.language = options.language || this.element.data('date-language') || 'en';
	        this.language = this.language in dates ? this.language : this.language.split('-')[0]; // fr-CA fallback to fr
	        this.language = this.language in dates ? this.language : 'en';
	        this.isRTL = dates[this.language].rtl || false;
	        this.formatType = options.formatType || this.element.data('format-type') || 'standard';
	        this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || dates[this.language].format || DPGlobal.getDefaultFormat(this.formatType, 'input'), this.formatType);
	        this.isInline = false;
	        this.isVisible = false;
	        this.isInput = this.element.is('input');
	        this.fontAwesome = options.fontAwesome || this.element.data('font-awesome') || false;

	        this.bootcssVer = options.bootcssVer || (this.isInput ? (this.element.is('.form-control') ? 3 : 2) : ( this.bootcssVer = this.element.is('.input-group') ? 3 : 2 ));

	        this.component = this.element.is('.date') ? ( this.bootcssVer === 3 ? this.element.find('.input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-remove, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o').parent() : this.element.find('.add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o').parent()) : false;
	        this.componentReset = this.element.is('.date') ? ( this.bootcssVer === 3 ? this.element.find('.input-group-addon .glyphicon-remove, .input-group-addon .fa-times').parent() : this.element.find('.add-on .icon-remove, .add-on .fa-times').parent()) : false;
	        this.hasInput = this.component && this.element.find('input').length;
	        if (this.component && this.component.length === 0) {
	            this.component = false;
	        }
	        this.linkField = options.linkField || this.element.data('link-field') || false;
	        this.linkFormat = DPGlobal.parseFormat(options.linkFormat || this.element.data('link-format') || DPGlobal.getDefaultFormat(this.formatType, 'link'), this.formatType);
	        this.minuteStep = options.minuteStep || this.element.data('minute-step') || 5;
	        this.pickerPosition = options.pickerPosition || this.element.data('picker-position') || 'bottom-right';
	        this.showMeridian = options.showMeridian || this.element.data('show-meridian') || false;
	        this.initialDate = options.initialDate || new Date();
	        this.zIndex = options.zIndex || this.element.data('z-index') || undefined;
	        this.title = typeof options.title === 'undefined' ? false : options.title;
	        this.timezone = options.timezone || timeZoneAbbreviation();

	        this.icons = {
	            leftArrow: this.fontAwesome ? 'fa-arrow-left' : (this.bootcssVer === 3 ? 'glyphicon-arrow-left' : 'icon-arrow-left'),
	            rightArrow: this.fontAwesome ? 'fa-arrow-right' : (this.bootcssVer === 3 ? 'glyphicon-arrow-right' : 'icon-arrow-right')
	        }
	        this.icontype = this.fontAwesome ? 'fa' : 'glyphicon';

	        this._attachEvents();

	        this.clickedOutside = function (e) {
	            // Clicked outside the datetimepicker, hide it
	            if ($(e.target).closest('.datetimepicker').length === 0) {
	                that.hide();
	            }
	        }

	        this.formatViewType = 'datetime';
	        if ('formatViewType' in options) {
	            this.formatViewType = options.formatViewType;
	        } else if ('formatViewType' in this.element.data()) {
	            this.formatViewType = this.element.data('formatViewType');
	        }

	        this.minView = 0;
	        if ('minView' in options) {
	            this.minView = options.minView;
	        } else if ('minView' in this.element.data()) {
	            this.minView = this.element.data('min-view');
	        }
	        this.minView = DPGlobal.convertViewMode(this.minView);

	        this.maxView = DPGlobal.modes.length - 1;
	        if ('maxView' in options) {
	            this.maxView = options.maxView;
	        } else if ('maxView' in this.element.data()) {
	            this.maxView = this.element.data('max-view');
	        }
	        this.maxView = DPGlobal.convertViewMode(this.maxView);

	        this.wheelViewModeNavigation = false;
	        if ('wheelViewModeNavigation' in options) {
	            this.wheelViewModeNavigation = options.wheelViewModeNavigation;
	        } else if ('wheelViewModeNavigation' in this.element.data()) {
	            this.wheelViewModeNavigation = this.element.data('view-mode-wheel-navigation');
	        }

	        this.wheelViewModeNavigationInverseDirection = false;

	        if ('wheelViewModeNavigationInverseDirection' in options) {
	            this.wheelViewModeNavigationInverseDirection = options.wheelViewModeNavigationInverseDirection;
	        } else if ('wheelViewModeNavigationInverseDirection' in this.element.data()) {
	            this.wheelViewModeNavigationInverseDirection = this.element.data('view-mode-wheel-navigation-inverse-dir');
	        }

	        this.wheelViewModeNavigationDelay = 100;
	        if ('wheelViewModeNavigationDelay' in options) {
	            this.wheelViewModeNavigationDelay = options.wheelViewModeNavigationDelay;
	        } else if ('wheelViewModeNavigationDelay' in this.element.data()) {
	            this.wheelViewModeNavigationDelay = this.element.data('view-mode-wheel-navigation-delay');
	        }

	        this.startViewMode = 2;
	        if ('startView' in options) {
	            this.startViewMode = options.startView;
	        } else if ('startView' in this.element.data()) {
	            this.startViewMode = this.element.data('start-view');
	        }
	        this.startViewMode = DPGlobal.convertViewMode(this.startViewMode);
	        this.viewMode = this.startViewMode;

	        this.viewSelect = this.minView;
	        if ('viewSelect' in options) {
	            this.viewSelect = options.viewSelect;
	        } else if ('viewSelect' in this.element.data()) {
	            this.viewSelect = this.element.data('view-select');
	        }
	        this.viewSelect = DPGlobal.convertViewMode(this.viewSelect);

	        this.forceParse = true;
	        if ('forceParse' in options) {
	            this.forceParse = options.forceParse;
	        } else if ('dateForceParse' in this.element.data()) {
	            this.forceParse = this.element.data('date-force-parse');
	        }
	        var template = this.bootcssVer === 3 ? DPGlobal.templateV3 : DPGlobal.template;
	        while (template.indexOf('{iconType}') !== -1) {
	            template = template.replace('{iconType}', this.icontype);
	        }
	        while (template.indexOf('{leftArrow}') !== -1) {
	            template = template.replace('{leftArrow}', this.icons.leftArrow);
	        }
	        while (template.indexOf('{rightArrow}') !== -1) {
	            template = template.replace('{rightArrow}', this.icons.rightArrow);
	        }
	        this.picker = $(template)
	            .appendTo(this.isInline ? this.element : this.container) // 'body')
	            .on({
	                click: $.proxy(this.click, this),
	                mousedown: $.proxy(this.mousedown, this)
	            });

	        if (this.wheelViewModeNavigation) {
	            if ($.fn.mousewheel) {
	                this.picker.on({mousewheel: $.proxy(this.mousewheel, this)});
	            } else {
	                console.log('Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option');
	            }
	        }

	        if (this.isInline) {
	            this.picker.addClass('datetimepicker-inline');
	        } else {
	            this.picker.addClass('datetimepicker-dropdown-' + this.pickerPosition + ' dropdown-menu');
	        }
	        if (this.isRTL) {
	            this.picker.addClass('datetimepicker-rtl');
	            var selector = this.bootcssVer === 3 ? '.prev span, .next span' : '.prev i, .next i';
	            this.picker.find(selector).toggleClass(this.icons.leftArrow + ' ' + this.icons.rightArrow);
	        }

	        $(document).on('mousedown touchend', this.clickedOutside);

	        this.autoclose = false;
	        if ('autoclose' in options) {
	            this.autoclose = options.autoclose;
	        } else if ('dateAutoclose' in this.element.data()) {
	            this.autoclose = this.element.data('date-autoclose');
	        }

	        this.keyboardNavigation = true;
	        if ('keyboardNavigation' in options) {
	            this.keyboardNavigation = options.keyboardNavigation;
	        } else if ('dateKeyboardNavigation' in this.element.data()) {
	            this.keyboardNavigation = this.element.data('date-keyboard-navigation');
	        }

	        this.todayBtn = (options.todayBtn || this.element.data('date-today-btn') || false);
	        this.clearBtn = (options.clearBtn || this.element.data('date-clear-btn') || false);
	        this.todayHighlight = (options.todayHighlight || this.element.data('date-today-highlight') || false);

	        this.weekStart = 0;
	        if (typeof options.weekStart !== 'undefined') {
	            this.weekStart = options.weekStart;
	        } else if (typeof this.element.data('date-weekstart') !== 'undefined') {
	            this.weekStart = this.element.data('date-weekstart');
	        } else if (typeof dates[this.language].weekStart !== 'undefined') {
	            this.weekStart = dates[this.language].weekStart;
	        }
	        this.weekStart = this.weekStart % 7;
	        this.weekEnd = ((this.weekStart + 6) % 7);
	        this.onRenderDay = function (date) {
	            var render = (options.onRenderDay || function () {
	                return [];
	            })(date);
	            if (typeof render === 'string') {
	                render = [render];
	            }
	            var res = ['day'];
	            return res.concat((render ? render : []));
	        };
	        this.onRenderHour = function (date) {
	            var render = (options.onRenderHour || function () {
	                return [];
	            })(date);
	            var res = ['hour'];
	            if (typeof render === 'string') {
	                render = [render];
	            }
	            return res.concat((render ? render : []));
	        };
	        this.onRenderMinute = function (date) {
	            var render = (options.onRenderMinute || function () {
	                return [];
	            })(date);
	            var res = ['minute'];
	            if (typeof render === 'string') {
	                render = [render];
	            }
	            if (date < this.startDate || date > this.endDate) {
	                res.push('disabled');
	            } else if (Math.floor(this.date.getUTCMinutes() / this.minuteStep) === Math.floor(date.getUTCMinutes() / this.minuteStep)) {
	                res.push('active');
	            }
	            return res.concat((render ? render : []));
	        };
	        this.onRenderYear = function (date) {
	            var render = (options.onRenderYear || function () {
	                return [];
	            })(date);
	            var res = ['year'];
	            if (typeof render === 'string') {
	                render = [render];
	            }
	            if (this.date.getUTCFullYear() === date.getUTCFullYear()) {
	                res.push('active');
	            }
	            var currentYear = date.getUTCFullYear();
	            var endYear = this.endDate.getUTCFullYear();
	            if ((date < this.startDate || currentYear > endYear) && (date.getUTCFullYear() != this.startDate.getUTCFullYear())) {
	                res.push('disabled');
	            }
	            return res.concat((render ? render : []));
	        }
	        this.onRenderMonth = function (date) {
	            var render = (options.onRenderMonth || function () {
	                return [];
	            })(date);
	            var res = ['month'];
	            if (typeof render === 'string') {
	                render = [render];
	            }
	            return res.concat((render ? render : []));
	        }
	        this.startDate = new Date(-8639968443048000);
	        this.endDate = new Date(8639968443048000);
	        this.datesDisabled = [];
	        this.daysOfWeekDisabled = [];
	        this.setStartDate(options.startDate || this.element.data('date-startdate'));
	        this.setEndDate(options.endDate || this.element.data('date-enddate'));
	        this.setDatesDisabled(options.datesDisabled || this.element.data('date-dates-disabled'));
	        this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data('date-days-of-week-disabled'));
	        this.setMinutesDisabled(options.minutesDisabled || this.element.data('date-minute-disabled'));
	        this.setHoursDisabled(options.hoursDisabled || this.element.data('date-hour-disabled'));
	        this.fillDow();
	        this.fillMonths();
	        this.update();
	        this.showMode();

	        if (this.isInline) {
	            this.show();
	        }
	    };

	    Datetimepicker.prototype = {
	        constructor: Datetimepicker,

	        _events: [],
	        _attachEvents: function () {
	            this._detachEvents();
	            if (this.isInput) { // single input
	                this._events = [
	                    [this.element, {
	                        focus: $.proxy(this.show, this),
	                        keyup: $.proxy(this.update, this),
	                        keydown: $.proxy(this.keydown, this)
	                    }]
	                ];
	            }
	            else if (this.component && this.hasInput) { // component: input + button
	                this._events = [
	                    // For components that are not readonly, allow keyboard nav
	                    [this.element.find('input'), {
	                        focus: $.proxy(this.show, this),
	                        keyup: $.proxy(this.update, this),
	                        keydown: $.proxy(this.keydown, this)
	                    }],
	                    [this.component, {
	                        click: $.proxy(this.show, this)
	                    }]
	                ];
	                if (this.componentReset) {
	                    this._events.push([
	                        this.componentReset,
	                        {click: $.proxy(this.reset, this)}
	                    ]);
	                }
	            }
	            else if (this.element.is('div')) {  // inline datetimepicker
	                this.isInline = true;
	            }
	            else {
	                this._events = [
	                    [this.element, {
	                        click: $.proxy(this.show, this)
	                    }]
	                ];
	            }
	            for (var i = 0, el, ev; i < this._events.length; i++) {
	                el = this._events[i][0];
	                ev = this._events[i][1];
	                el.on(ev);
	            }
	        },

	        _detachEvents: function () {
	            for (var i = 0, el, ev; i < this._events.length; i++) {
	                el = this._events[i][0];
	                ev = this._events[i][1];
	                el.off(ev);
	            }
	            this._events = [];
	        },

	        show: function (e) {
	            this.picker.show();
	            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
	            if (this.forceParse) {
	                this.update();
	            }
	            this.place();
	            $(window).on('resize', $.proxy(this.place, this));
	            if (e) {
	                e.stopPropagation();
	                e.preventDefault();
	            }
	            this.isVisible = true;
	            this.element.trigger({
	                type: 'show',
	                date: this.date
	            });
	        },

	        hide: function () {
	            if (!this.isVisible) return;
	            if (this.isInline) return;
	            this.picker.hide();
	            $(window).off('resize', this.place);
	            this.viewMode = this.startViewMode;
	            this.showMode();
	            if (!this.isInput) {
	                $(document).off('mousedown', this.hide);
	            }

	            if (
	                this.forceParse &&
	                (
	                    this.isInput && this.element.val() ||
	                    this.hasInput && this.element.find('input').val()
	                )
	            )
	                this.setValue();
	            this.isVisible = false;
	            this.element.trigger({
	                type: 'hide',
	                date: this.date
	            });
	        },

	        remove: function () {
	            this._detachEvents();
	            $(document).off('mousedown', this.clickedOutside);
	            this.picker.remove();
	            delete this.picker;
	            delete this.element.data().datetimepicker;
	        },

	        getDate: function () {
	            var d = this.getUTCDate();
	            if (d === null) {
	                return null;
	            }
	            return new Date(d.getTime() + (d.getTimezoneOffset() * 60000));
	        },

	        getUTCDate: function () {
	            return this.date;
	        },

	        getInitialDate: function () {
	            return this.initialDate
	        },

	        setInitialDate: function (initialDate) {
	            this.initialDate = initialDate;
	        },

	        setDate: function (d) {
	            this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset() * 60000)));
	        },

	        setUTCDate: function (d) {
	            if (d >= this.startDate && d <= this.endDate) {
	                this.date = d;
	                this.setValue();
	                this.viewDate = this.date;
	                this.fill();
	            } else {
	                this.element.trigger({
	                    type: 'outOfRange',
	                    date: d,
	                    startDate: this.startDate,
	                    endDate: this.endDate
	                });
	            }
	        },

	        setFormat: function (format) {
	            this.format = DPGlobal.parseFormat(format, this.formatType);
	            var element;
	            if (this.isInput) {
	                element = this.element;
	            } else if (this.component) {
	                element = this.element.find('input');
	            }
	            if (element && element.val()) {
	                this.setValue();
	            }
	        },

	        setValue: function () {
	            var formatted = this.getFormattedDate();
	            if (!this.isInput) {
	                if (this.component) {
	                    this.element.find('input').val(formatted);
	                }
	                this.element.data('date', formatted);
	            } else {
	                this.element.val(formatted);
	            }
	            if (this.linkField) {
	                $('#' + this.linkField).val(this.getFormattedDate(this.linkFormat));
	            }
	        },

	        getFormattedDate: function (format) {
	            format = format || this.format;
	            return DPGlobal.formatDate(this.date, format, this.language, this.formatType, this.timezone);
	        },

	        setStartDate: function (startDate) {
	            this.startDate = startDate || this.startDate;
	            if (this.startDate.valueOf() !== 8639968443048000) {
	                this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language, this.formatType, this.timezone);
	            }
	            this.update();
	            this.updateNavArrows();
	        },

	        setEndDate: function (endDate) {
	            this.endDate = endDate || this.endDate;
	            if (this.endDate.valueOf() !== 8639968443048000) {
	                this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language, this.formatType, this.timezone);
	            }
	            this.update();
	            this.updateNavArrows();
	        },

	        setDatesDisabled: function (datesDisabled) {
	            this.datesDisabled = datesDisabled || [];
	            if (!$.isArray(this.datesDisabled)) {
	                this.datesDisabled = this.datesDisabled.split(/,\s*/);
	            }
	            var mThis = this;
	            this.datesDisabled = $.map(this.datesDisabled, function (d) {
	                return DPGlobal.parseDate(d, mThis.format, mThis.language, mThis.formatType, mThis.timezone).toDateString();
	            });
	            this.update();
	            this.updateNavArrows();
	        },

	        setTitle: function (selector, value) {
	            return this.picker.find(selector)
	                .find('th:eq(1)')
	                .text(this.title === false ? value : this.title);
	        },

	        setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
	            this.daysOfWeekDisabled = daysOfWeekDisabled || [];
	            if (!$.isArray(this.daysOfWeekDisabled)) {
	                this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
	            }
	            this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
	                return parseInt(d, 10);
	            });
	            this.update();
	            this.updateNavArrows();
	        },

	        setMinutesDisabled: function (minutesDisabled) {
	            this.minutesDisabled = minutesDisabled || [];
	            if (!$.isArray(this.minutesDisabled)) {
	                this.minutesDisabled = this.minutesDisabled.split(/,\s*/);
	            }
	            this.minutesDisabled = $.map(this.minutesDisabled, function (d) {
	                return parseInt(d, 10);
	            });
	            this.update();
	            this.updateNavArrows();
	        },

	        setHoursDisabled: function (hoursDisabled) {
	            this.hoursDisabled = hoursDisabled || [];
	            if (!$.isArray(this.hoursDisabled)) {
	                this.hoursDisabled = this.hoursDisabled.split(/,\s*/);
	            }
	            this.hoursDisabled = $.map(this.hoursDisabled, function (d) {
	                return parseInt(d, 10);
	            });
	            this.update();
	            this.updateNavArrows();
	        },

	        place: function () {
	            if (this.isInline) return;

	            if (!this.zIndex) {
	                var index_highest = 0;
	                $('div').each(function () {
	                    var index_current = parseInt($(this).css('zIndex'), 10);
	                    if (index_current > index_highest) {
	                        index_highest = index_current;
	                    }
	                });
	                this.zIndex = index_highest + 10;
	            }

	            var offset, top, left, containerOffset;
	            if (this.container instanceof $) {
	                containerOffset = this.container.offset();
	            } else {
	                containerOffset = $(this.container).offset();
	            }

	            if (this.component) {
	                offset = this.component.offset();
	                left = offset.left;
	                if (this.pickerPosition === 'bottom-left' || this.pickerPosition === 'top-left') {
	                    left += this.component.outerWidth() - this.picker.outerWidth();
	                }
	            } else {
	                offset = this.element.offset();
	                left = offset.left;
	                if (this.pickerPosition === 'bottom-left' || this.pickerPosition === 'top-left') {
	                    left += this.element.outerWidth() - this.picker.outerWidth();
	                }
	            }

	            var bodyWidth = document.body.clientWidth || window.innerWidth;
	            if (left + 220 > bodyWidth) {
	                left = bodyWidth - 220;
	            }

	            if (this.pickerPosition === 'top-left' || this.pickerPosition === 'top-right') {
	                top = offset.top - this.picker.outerHeight();
	            } else {
	                top = offset.top + this.height;
	            }

	            top = top - containerOffset.top;
	            left = left - containerOffset.left;

	            this.picker.css({
	                top: top,
	                left: left,
	                zIndex: this.zIndex
	            });
	        },

	        hour_minute: "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]",

	        update: function () {
	            var date, fromArgs = false;
	            if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
	                date = arguments[0];
	                fromArgs = true;
	            } else {
	                date = (this.isInput ? this.element.val() : this.element.find('input').val()) || this.element.data('date') || this.initialDate;
	                if (typeof date === 'string') {
	                    date = date.replace(/^\s+|\s+$/g, '');
	                }
	            }

	            if (!date) {
	                date = new Date();
	                fromArgs = false;
	            }

	            if (typeof date === "string") {
	                if (new RegExp(this.hour_minute).test(date) || new RegExp(this.hour_minute + ":[0-5][0-9]").test(date)) {
	                    date = this.getDate()
	                }
	            }

	            this.date = DPGlobal.parseDate(date, this.format, this.language, this.formatType, this.timezone);

	            if (fromArgs) this.setValue();

	            if (this.date < this.startDate) {
	                this.viewDate = new Date(this.startDate);
	            } else if (this.date > this.endDate) {
	                this.viewDate = new Date(this.endDate);
	            } else {
	                this.viewDate = new Date(this.date);
	            }
	            this.fill();
	        },

	        fillDow: function () {
	            var dowCnt = this.weekStart,
	                html = '<tr>';
	            while (dowCnt < this.weekStart + 7) {
	                html += '<th class="dow">' + dates[this.language].daysMin[(dowCnt++) % 7] + '</th>';
	            }
	            html += '</tr>';
	            this.picker.find('.datetimepicker-days thead').append(html);
	        },

	        fillMonths: function () {
	            var html = '';
	            var d = new Date(this.viewDate);
	            for (var i = 0; i < 12; i++) {
	                d.setUTCMonth(i);
	                var classes = this.onRenderMonth(d);
	                html += '<span class="' + classes.join(' ') + '">' + dates[this.language].monthsShort[i] + '</span>';
	            }
	            this.picker.find('.datetimepicker-months td').html(html);
	        },

	        fill: function () {
	            if (!this.date || !this.viewDate) {
	                return;
	            }
	            var d = new Date(this.viewDate),
	                year = d.getUTCFullYear(),
	                month = d.getUTCMonth(),
	                dayMonth = d.getUTCDate(),
	                hours = d.getUTCHours(),
	                startYear = this.startDate.getUTCFullYear(),
	                startMonth = this.startDate.getUTCMonth(),
	                endYear = this.endDate.getUTCFullYear(),
	                endMonth = this.endDate.getUTCMonth() + 1,
	                currentDate = (new UTCDate(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate())).valueOf(),
	                today = new Date();
	            this.setTitle('.datetimepicker-days', dates[this.language].months[month] + ' ' + year)
	            if (this.formatViewType === 'time') {
	                var formatted = this.getFormattedDate();
	                this.setTitle('.datetimepicker-hours', formatted);
	                this.setTitle('.datetimepicker-minutes', formatted);
	            } else {
	                this.setTitle('.datetimepicker-hours', dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
	                this.setTitle('.datetimepicker-minutes', dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
	            }
	            this.picker.find('tfoot th.today')
	                .text(dates[this.language].today || dates['en'].today)
	                .toggle(this.todayBtn !== false);
	            this.picker.find('tfoot th.clear')
	                .text(dates[this.language].clear || dates['en'].clear)
	                .toggle(this.clearBtn !== false);
	            this.updateNavArrows();
	            this.fillMonths();
	            var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
	                day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
	            prevMonth.setUTCDate(day);
	            prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
	            var nextMonth = new Date(prevMonth);
	            nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
	            nextMonth = nextMonth.valueOf();
	            var html = [];
	            var classes;
	            while (prevMonth.valueOf() < nextMonth) {
	                if (prevMonth.getUTCDay() === this.weekStart) {
	                    html.push('<tr>');
	                }
	                classes = this.onRenderDay(prevMonth);
	                if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() === year && prevMonth.getUTCMonth() < month)) {
	                    classes.push('old');
	                } else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() === year && prevMonth.getUTCMonth() > month)) {
	                    classes.push('new');
	                }
	                // Compare internal UTC date with local today, not UTC today
	                if (this.todayHighlight &&
	                    prevMonth.getUTCFullYear() === today.getFullYear() &&
	                    prevMonth.getUTCMonth() === today.getMonth() &&
	                    prevMonth.getUTCDate() === today.getDate()) {
	                    classes.push('today');
	                }
	                if (prevMonth.valueOf() === currentDate) {
	                    classes.push('active');
	                }
	                if ((prevMonth.valueOf() + 86400000) <= this.startDate || prevMonth.valueOf() > this.endDate ||
	                    $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1 ||
	                    $.inArray(prevMonth.toDateString(), this.datesDisabled) !== -1) {
	                    classes.push('disabled');
	                }
	                html.push('<td class="' + classes.join(' ') + '">' + prevMonth.getUTCDate() + '</td>');
	                if (prevMonth.getUTCDay() === this.weekEnd) {
	                    html.push('</tr>');
	                }
	                prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
	            }
	            this.picker.find('.datetimepicker-days tbody').empty().append(html.join(''));

	            html = [];
	            var txt = '', meridian = '', meridianOld = '';
	            var hoursDisabled = this.hoursDisabled || [];
	            d = new Date(this.viewDate)
	            for (var i = 0; i < 24; i++) {
	                d.setUTCHours(i);
	                classes = this.onRenderHour(d);
	                if (hoursDisabled.indexOf(i) !== -1) {
	                    classes.push('disabled');
	                }
	                var actual = UTCDate(year, month, dayMonth, i);
	                // We want the previous hour for the startDate
	                if ((actual.valueOf() + 3600000) <= this.startDate || actual.valueOf() > this.endDate) {
	                    classes.push('disabled');
	                } else if (hours === i) {
	                    classes.push('active');
	                }
	                if (this.showMeridian && dates[this.language].meridiem.length === 2) {
	                    meridian = (i < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
	                    if (meridian !== meridianOld) {
	                        if (meridianOld !== '') {
	                            html.push('</fieldset>');
	                        }
	                        html.push('<fieldset class="hour"><legend>' + meridian.toUpperCase() + '</legend>');
	                    }
	                    meridianOld = meridian;
	                    txt = (i % 12 ? i % 12 : 12);
	                    if (i < 12) {
	                        classes.push('hour_am');
	                    } else {
	                        classes.push('hour_pm');
	                    }
	                    html.push('<span class="' + classes.join(' ') + '">' + txt + '</span>');
	                    if (i === 23) {
	                        html.push('</fieldset>');
	                    }
	                } else {
	                    txt = i + ':00';
	                    html.push('<span class="' + classes.join(' ') + '">' + txt + '</span>');
	                }
	            }
	            this.picker.find('.datetimepicker-hours td').html(html.join(''));

	            html = [];
	            txt = '';
	            meridian = '';
	            meridianOld = '';
	            var minutesDisabled = this.minutesDisabled || [];
	            d = new Date(this.viewDate);
	            for (var i = 0; i < 60; i += this.minuteStep) {
	                if (minutesDisabled.indexOf(i) !== -1) continue;
	                d.setUTCMinutes(i);
	                d.setUTCSeconds(0);
	                classes = this.onRenderMinute(d);
	                if (this.showMeridian && dates[this.language].meridiem.length === 2) {
	                    meridian = (hours < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
	                    if (meridian !== meridianOld) {
	                        if (meridianOld !== '') {
	                            html.push('</fieldset>');
	                        }
	                        html.push('<fieldset class="minute"><legend>' + meridian.toUpperCase() + '</legend>');
	                    }
	                    meridianOld = meridian;
	                    txt = (hours % 12 ? hours % 12 : 12);
	                    html.push('<span class="' + classes.join(' ') + '">' + txt + ':' + (i < 10 ? '0' + i : i) + '</span>');
	                    if (i === 59) {
	                        html.push('</fieldset>');
	                    }
	                } else {
	                    txt = i + ':00';
	                    html.push('<span class="' + classes.join(' ') + '">' + hours + ':' + (i < 10 ? '0' + i : i) + '</span>');
	                }
	            }
	            this.picker.find('.datetimepicker-minutes td').html(html.join(''));

	            var currentYear = this.date.getUTCFullYear();
	            var months = this.setTitle('.datetimepicker-months', year)
	                .end()
	                .find('.month').removeClass('active');
	            if (currentYear === year) {
	                // getUTCMonths() returns 0 based, and we need to select the next one
	                // To cater bootstrap 2 we don't need to select the next one
	                months.eq(this.date.getUTCMonth()).addClass('active');
	            }
	            if (year < startYear || year > endYear) {
	                months.addClass('disabled');
	            }
	            if (year === startYear) {
	                months.slice(0, startMonth).addClass('disabled');
	            }
	            if (year === endYear) {
	                months.slice(endMonth).addClass('disabled');
	            }

	            html = '';
	            year = parseInt(year / 10, 10) * 10;
	            var yearCont = this.setTitle('.datetimepicker-years', year + '-' + (year + 9))
	                .end()
	                .find('td');
	            year -= 1;
	            d = new Date(this.viewDate);
	            for (var i = -1; i < 11; i++) {
	                d.setUTCFullYear(year);
	                classes = this.onRenderYear(d);
	                if (i === -1 || i === 10) {
	                    classes.push(old);
	                }
	                html += '<span class="' + classes.join(' ') + '">' + year + '</span>';
	                year += 1;
	            }
	            yearCont.html(html);
	            this.place();
	        },

	        updateNavArrows: function () {
	            var d = new Date(this.viewDate),
	                year = d.getUTCFullYear(),
	                month = d.getUTCMonth(),
	                day = d.getUTCDate(),
	                hour = d.getUTCHours();
	            switch (this.viewMode) {
	                case 0:
	                    if (year <= this.startDate.getUTCFullYear()
	                        && month <= this.startDate.getUTCMonth()
	                        && day <= this.startDate.getUTCDate()
	                        && hour <= this.startDate.getUTCHours()) {
	                        this.picker.find('.prev').css({visibility: 'hidden'});
	                    } else {
	                        this.picker.find('.prev').css({visibility: 'visible'});
	                    }
	                    if (year >= this.endDate.getUTCFullYear()
	                        && month >= this.endDate.getUTCMonth()
	                        && day >= this.endDate.getUTCDate()
	                        && hour >= this.endDate.getUTCHours()) {
	                        this.picker.find('.next').css({visibility: 'hidden'});
	                    } else {
	                        this.picker.find('.next').css({visibility: 'visible'});
	                    }
	                    break;
	                case 1:
	                    if (year <= this.startDate.getUTCFullYear()
	                        && month <= this.startDate.getUTCMonth()
	                        && day <= this.startDate.getUTCDate()) {
	                        this.picker.find('.prev').css({visibility: 'hidden'});
	                    } else {
	                        this.picker.find('.prev').css({visibility: 'visible'});
	                    }
	                    if (year >= this.endDate.getUTCFullYear()
	                        && month >= this.endDate.getUTCMonth()
	                        && day >= this.endDate.getUTCDate()) {
	                        this.picker.find('.next').css({visibility: 'hidden'});
	                    } else {
	                        this.picker.find('.next').css({visibility: 'visible'});
	                    }
	                    break;
	                case 2:
	                    if (year <= this.startDate.getUTCFullYear()
	                        && month <= this.startDate.getUTCMonth()) {
	                        this.picker.find('.prev').css({visibility: 'hidden'});
	                    } else {
	                        this.picker.find('.prev').css({visibility: 'visible'});
	                    }
	                    if (year >= this.endDate.getUTCFullYear()
	                        && month >= this.endDate.getUTCMonth()) {
	                        this.picker.find('.next').css({visibility: 'hidden'});
	                    } else {
	                        this.picker.find('.next').css({visibility: 'visible'});
	                    }
	                    break;
	                case 3:
	                case 4:
	                    if (year <= this.startDate.getUTCFullYear()) {
	                        this.picker.find('.prev').css({visibility: 'hidden'});
	                    } else {
	                        this.picker.find('.prev').css({visibility: 'visible'});
	                    }
	                    if (year >= this.endDate.getUTCFullYear()) {
	                        this.picker.find('.next').css({visibility: 'hidden'});
	                    } else {
	                        this.picker.find('.next').css({visibility: 'visible'});
	                    }
	                    break;
	            }
	        },

	        mousewheel: function (e) {

	            e.preventDefault();
	            e.stopPropagation();

	            if (this.wheelPause) {
	                return;
	            }

	            this.wheelPause = true;

	            var originalEvent = e.originalEvent;

	            var delta = originalEvent.wheelDelta;

	            var mode = delta > 0 ? 1 : (delta === 0) ? 0 : -1;

	            if (this.wheelViewModeNavigationInverseDirection) {
	                mode = -mode;
	            }

	            this.showMode(mode);

	            setTimeout($.proxy(function () {

	                this.wheelPause = false

	            }, this), this.wheelViewModeNavigationDelay);

	        },

	        click: function (e) {
	            e.stopPropagation();
	            e.preventDefault();
	            var target = $(e.target).closest('span, td, th, legend');
	            if (target.is('.' + this.icontype)) {
	                target = $(target).parent().closest('span, td, th, legend');
	            }
	            if (target.length === 1) {
	                if (target.is('.disabled')) {
	                    this.element.trigger({
	                        type: 'outOfRange',
	                        date: this.viewDate,
	                        startDate: this.startDate,
	                        endDate: this.endDate
	                    });
	                    return;
	                }
	                switch (target[0].nodeName.toLowerCase()) {
	                    case 'th':
	                        switch (target[0].className) {
	                            case 'switch':
	                                this.showMode(1);
	                                break;
	                            case 'prev':
	                            case 'next':
	                                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
	                                switch (this.viewMode) {
	                                    case 0:
	                                        this.viewDate = this.moveHour(this.viewDate, dir);
	                                        break;
	                                    case 1:
	                                        this.viewDate = this.moveDate(this.viewDate, dir);
	                                        break;
	                                    case 2:
	                                        this.viewDate = this.moveMonth(this.viewDate, dir);
	                                        break;
	                                    case 3:
	                                    case 4:
	                                        this.viewDate = this.moveYear(this.viewDate, dir);
	                                        break;
	                                }
	                                this.fill();
	                                this.element.trigger({
	                                    type: target[0].className + ':' + this.convertViewModeText(this.viewMode),
	                                    date: this.viewDate,
	                                    startDate: this.startDate,
	                                    endDate: this.endDate
	                                });
	                                break;
	                            case 'clear':
	                                this.reset();
	                                if (this.autoclose) {
	                                    this.hide();
	                                }
	                                break;
	                            case 'today':
	                                var date = new Date();
	                                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);

	                                // Respect startDate and endDate.
	                                if (date < this.startDate) date = this.startDate;
	                                else if (date > this.endDate) date = this.endDate;

	                                this.viewMode = this.startViewMode;
	                                this.showMode(0);
	                                this._setDate(date);
	                                this.fill();
	                                if (this.autoclose) {
	                                    this.hide();
	                                }
	                                break;
	                        }
	                        break;
	                    case 'span':
	                        if (!target.is('.disabled')) {
	                            var year = this.viewDate.getUTCFullYear(),
	                                month = this.viewDate.getUTCMonth(),
	                                day = this.viewDate.getUTCDate(),
	                                hours = this.viewDate.getUTCHours(),
	                                minutes = this.viewDate.getUTCMinutes(),
	                                seconds = this.viewDate.getUTCSeconds();

	                            if (target.is('.month')) {
	                                this.viewDate.setUTCDate(1);
	                                month = target.parent().find('span').index(target);
	                                day = this.viewDate.getUTCDate();
	                                this.viewDate.setUTCMonth(month);
	                                this.element.trigger({
	                                    type: 'changeMonth',
	                                    date: this.viewDate
	                                });
	                                if (this.viewSelect >= 3) {
	                                    this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
	                                }
	                            } else if (target.is('.year')) {
	                                this.viewDate.setUTCDate(1);
	                                year = parseInt(target.text(), 10) || 0;
	                                this.viewDate.setUTCFullYear(year);
	                                this.element.trigger({
	                                    type: 'changeYear',
	                                    date: this.viewDate
	                                });
	                                if (this.viewSelect >= 4) {
	                                    this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
	                                }
	                            } else if (target.is('.hour')) {
	                                hours = parseInt(target.text(), 10) || 0;
	                                if (target.hasClass('hour_am') || target.hasClass('hour_pm')) {
	                                    if (hours === 12 && target.hasClass('hour_am')) {
	                                        hours = 0;
	                                    } else if (hours !== 12 && target.hasClass('hour_pm')) {
	                                        hours += 12;
	                                    }
	                                }
	                                this.viewDate.setUTCHours(hours);
	                                this.element.trigger({
	                                    type: 'changeHour',
	                                    date: this.viewDate
	                                });
	                                if (this.viewSelect >= 1) {
	                                    this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
	                                }
	                            } else if (target.is('.minute')) {
	                                minutes = parseInt(target.text().substr(target.text().indexOf(':') + 1), 10) || 0;
	                                this.viewDate.setUTCMinutes(minutes);
	                                this.element.trigger({
	                                    type: 'changeMinute',
	                                    date: this.viewDate
	                                });
	                                if (this.viewSelect >= 0) {
	                                    this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
	                                }
	                            }
	                            if (this.viewMode !== 0) {
	                                var oldViewMode = this.viewMode;
	                                this.showMode(-1);
	                                this.fill();
	                                if (oldViewMode === this.viewMode && this.autoclose) {
	                                    this.hide();
	                                }
	                            } else {
	                                this.fill();
	                                if (this.autoclose) {
	                                    this.hide();
	                                }
	                            }
	                        }
	                        break;
	                    case 'td':
	                        if (target.is('.day') && !target.is('.disabled')) {
	                            var day = parseInt(target.text(), 10) || 1;
	                            var year = this.viewDate.getUTCFullYear(),
	                                month = this.viewDate.getUTCMonth(),
	                                hours = this.viewDate.getUTCHours(),
	                                minutes = this.viewDate.getUTCMinutes(),
	                                seconds = this.viewDate.getUTCSeconds();
	                            if (target.is('.old')) {
	                                if (month === 0) {
	                                    month = 11;
	                                    year -= 1;
	                                } else {
	                                    month -= 1;
	                                }
	                            } else if (target.is('.new')) {
	                                if (month === 11) {
	                                    month = 0;
	                                    year += 1;
	                                } else {
	                                    month += 1;
	                                }
	                            }
	                            this.viewDate.setUTCFullYear(year);
	                            this.viewDate.setUTCMonth(month, day);
	                            this.element.trigger({
	                                type: 'changeDay',
	                                date: this.viewDate
	                            });
	                            if (this.viewSelect >= 2) {
	                                this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
	                            }
	                        }
	                        var oldViewMode = this.viewMode;
	                        this.showMode(-1);
	                        this.fill();
	                        if (oldViewMode === this.viewMode && this.autoclose) {
	                            this.hide();
	                        }
	                        break;
	                }
	            }
	        },

	        _setDate: function (date, which) {
	            if (!which || which === 'date')
	                this.date = date;
	            if (!which || which === 'view')
	                this.viewDate = date;
	            this.fill();
	            this.setValue();
	            var element;
	            if (this.isInput) {
	                element = this.element;
	            } else if (this.component) {
	                element = this.element.find('input');
	            }
	            if (element) {
	                element.change();
	            }
	            this.element.trigger({
	                type: 'changeDate',
	                date: this.getDate()
	            });
	            if (date === null)
	                this.date = this.viewDate;
	        },

	        moveMinute: function (date, dir) {
	            if (!dir) return date;
	            var new_date = new Date(date.valueOf());
	            //dir = dir > 0 ? 1 : -1;
	            new_date.setUTCMinutes(new_date.getUTCMinutes() + (dir * this.minuteStep));
	            return new_date;
	        },

	        moveHour: function (date, dir) {
	            if (!dir) return date;
	            var new_date = new Date(date.valueOf());
	            //dir = dir > 0 ? 1 : -1;
	            new_date.setUTCHours(new_date.getUTCHours() + dir);
	            return new_date;
	        },

	        moveDate: function (date, dir) {
	            if (!dir) return date;
	            var new_date = new Date(date.valueOf());
	            //dir = dir > 0 ? 1 : -1;
	            new_date.setUTCDate(new_date.getUTCDate() + dir);
	            return new_date;
	        },

	        moveMonth: function (date, dir) {
	            if (!dir) return date;
	            var new_date = new Date(date.valueOf()),
	                day = new_date.getUTCDate(),
	                month = new_date.getUTCMonth(),
	                mag = Math.abs(dir),
	                new_month, test;
	            dir = dir > 0 ? 1 : -1;
	            if (mag === 1) {
	                test = dir === -1
	                    // If going back one month, make sure month is not current month
	                    // (eg, Mar 31 -> Feb 31 === Feb 28, not Mar 02)
	                    ? function () {
	                        return new_date.getUTCMonth() === month;
	                    }
	                    // If going forward one month, make sure month is as expected
	                    // (eg, Jan 31 -> Feb 31 === Feb 28, not Mar 02)
	                    : function () {
	                        return new_date.getUTCMonth() !== new_month;
	                    };
	                new_month = month + dir;
	                new_date.setUTCMonth(new_month);
	                // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
	                if (new_month < 0 || new_month > 11)
	                    new_month = (new_month + 12) % 12;
	            } else {
	                // For magnitudes >1, move one month at a time...
	                for (var i = 0; i < mag; i++)
	                    // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
	                    new_date = this.moveMonth(new_date, dir);
	                // ...then reset the day, keeping it in the new month
	                new_month = new_date.getUTCMonth();
	                new_date.setUTCDate(day);
	                test = function () {
	                    return new_month !== new_date.getUTCMonth();
	                };
	            }
	            // Common date-resetting loop -- if date is beyond end of month, make it
	            // end of month
	            while (test()) {
	                new_date.setUTCDate(--day);
	                new_date.setUTCMonth(new_month);
	            }
	            return new_date;
	        },

	        moveYear: function (date, dir) {
	            return this.moveMonth(date, dir * 12);
	        },

	        dateWithinRange: function (date) {
	            return date >= this.startDate && date <= this.endDate;
	        },

	        keydown: function (e) {
	            if (this.picker.is(':not(:visible)')) {
	                if (e.keyCode === 27) // allow escape to hide and re-show picker
	                    this.show();
	                return;
	            }
	            var dateChanged = false,
	                dir, newDate, newViewDate;
	            switch (e.keyCode) {
	                case 27: // escape
	                    this.hide();
	                    e.preventDefault();
	                    break;
	                case 37: // left
	                case 39: // right
	                    if (!this.keyboardNavigation) break;
	                    dir = e.keyCode === 37 ? -1 : 1;
	                    var viewMode = this.viewMode;
	                    if (e.ctrlKey) {
	                        viewMode += 2;
	                    } else if (e.shiftKey) {
	                        viewMode += 1;
	                    }
	                    if (viewMode === 4) {
	                        newDate = this.moveYear(this.date, dir);
	                        newViewDate = this.moveYear(this.viewDate, dir);
	                    } else if (viewMode === 3) {
	                        newDate = this.moveMonth(this.date, dir);
	                        newViewDate = this.moveMonth(this.viewDate, dir);
	                    } else if (viewMode === 2) {
	                        newDate = this.moveDate(this.date, dir);
	                        newViewDate = this.moveDate(this.viewDate, dir);
	                    } else if (viewMode === 1) {
	                        newDate = this.moveHour(this.date, dir);
	                        newViewDate = this.moveHour(this.viewDate, dir);
	                    } else if (viewMode === 0) {
	                        newDate = this.moveMinute(this.date, dir);
	                        newViewDate = this.moveMinute(this.viewDate, dir);
	                    }
	                    if (this.dateWithinRange(newDate)) {
	                        this.date = newDate;
	                        this.viewDate = newViewDate;
	                        this.setValue();
	                        this.update();
	                        e.preventDefault();
	                        dateChanged = true;
	                    }
	                    break;
	                case 38: // up
	                case 40: // down
	                    if (!this.keyboardNavigation) break;
	                    dir = e.keyCode === 38 ? -1 : 1;
	                    viewMode = this.viewMode;
	                    if (e.ctrlKey) {
	                        viewMode += 2;
	                    } else if (e.shiftKey) {
	                        viewMode += 1;
	                    }
	                    if (viewMode === 4) {
	                        newDate = this.moveYear(this.date, dir);
	                        newViewDate = this.moveYear(this.viewDate, dir);
	                    } else if (viewMode === 3) {
	                        newDate = this.moveMonth(this.date, dir);
	                        newViewDate = this.moveMonth(this.viewDate, dir);
	                    } else if (viewMode === 2) {
	                        newDate = this.moveDate(this.date, dir * 7);
	                        newViewDate = this.moveDate(this.viewDate, dir * 7);
	                    } else if (viewMode === 1) {
	                        if (this.showMeridian) {
	                            newDate = this.moveHour(this.date, dir * 6);
	                            newViewDate = this.moveHour(this.viewDate, dir * 6);
	                        } else {
	                            newDate = this.moveHour(this.date, dir * 4);
	                            newViewDate = this.moveHour(this.viewDate, dir * 4);
	                        }
	                    } else if (viewMode === 0) {
	                        newDate = this.moveMinute(this.date, dir * 4);
	                        newViewDate = this.moveMinute(this.viewDate, dir * 4);
	                    }
	                    if (this.dateWithinRange(newDate)) {
	                        this.date = newDate;
	                        this.viewDate = newViewDate;
	                        this.setValue();
	                        this.update();
	                        e.preventDefault();
	                        dateChanged = true;
	                    }
	                    break;
	                case 13: // enter
	                    if (this.viewMode !== 0) {
	                        var oldViewMode = this.viewMode;
	                        this.showMode(-1);
	                        this.fill();
	                        if (oldViewMode === this.viewMode && this.autoclose) {
	                            this.hide();
	                        }
	                    } else {
	                        this.fill();
	                        if (this.autoclose) {
	                            this.hide();
	                        }
	                    }
	                    e.preventDefault();
	                    break;
	                case 9: // tab
	                    this.hide();
	                    break;
	            }
	            if (dateChanged) {
	                var element;
	                if (this.isInput) {
	                    element = this.element;
	                } else if (this.component) {
	                    element = this.element.find('input');
	                }
	                if (element) {
	                    element.change();
	                }
	                this.element.trigger({
	                    type: 'changeDate',
	                    date: this.getDate()
	                });
	            }
	        },

	        showMode: function (dir) {
	            if (dir) {
	                var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
	                if (newViewMode >= this.minView && newViewMode <= this.maxView) {
	                    this.element.trigger({
	                        type: 'changeMode',
	                        date: this.viewDate,
	                        oldViewMode: this.viewMode,
	                        newViewMode: newViewMode
	                    });

	                    this.viewMode = newViewMode;
	                }
	            }
	            /*
	             vitalets: fixing bug of very special conditions:
	             jquery 1.7.1 + webkit + show inline datetimepicker in bootstrap popover.
	             Method show() does not set display css correctly and datetimepicker is not shown.
	             Changed to .css('display', 'block') solve the problem.
	             See https://github.com/vitalets/x-editable/issues/37

	             In jquery 1.7.2+ everything works fine.
	             */
	            //this.picker.find('>div').hide().filter('.datetimepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
	            this.picker.find('>div').hide().filter('.datetimepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
	            this.updateNavArrows();
	        },

	        reset: function () {
	            this._setDate(null, 'date');
	        },

	        convertViewModeText: function (viewMode) {
	            switch (viewMode) {
	                case 4:
	                    return 'decade';
	                case 3:
	                    return 'year';
	                case 2:
	                    return 'month';
	                case 1:
	                    return 'day';
	                case 0:
	                    return 'hour';
	            }
	        }
	    };

	    var old = $.fn.datetimepicker;
	    $.fn.datetimepicker = function (option) {
	        var args = Array.apply(null, arguments);
	        args.shift();
	        var internal_return;
	        this.each(function () {
	            var $this = $(this),
	                data = $this.data('datetimepicker'),
	                options = typeof option === 'object' && option;
	            if (!data) {
	                $this.data('datetimepicker', (data = new Datetimepicker(this, $.extend({}, $.fn.datetimepicker.defaults, options))));
	            }
	            if (typeof option === 'string' && typeof data[option] === 'function') {
	                internal_return = data[option].apply(data, args);
	                if (internal_return !== undefined) {
	                    return false;
	                }
	            }
	        });
	        if (internal_return !== undefined)
	            return internal_return;
	        else
	            return this;
	    };

	    $.fn.datetimepicker.defaults = {};
	    $.fn.datetimepicker.Constructor = Datetimepicker;
	    var dates = $.fn.datetimepicker.dates = {
	        en: {
	            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	            daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
	            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	            meridiem: ['am', 'pm'],
	            suffix: ['st', 'nd', 'rd', 'th'],
	            today: 'Today',
	            clear: 'Clear'
	        }
	    };

	    var DPGlobal = {
	        modes: [
	            {
	                clsName: 'minutes',
	                navFnc: 'Hours',
	                navStep: 1
	            },
	            {
	                clsName: 'hours',
	                navFnc: 'Date',
	                navStep: 1
	            },
	            {
	                clsName: 'days',
	                navFnc: 'Month',
	                navStep: 1
	            },
	            {
	                clsName: 'months',
	                navFnc: 'FullYear',
	                navStep: 1
	            },
	            {
	                clsName: 'years',
	                navFnc: 'FullYear',
	                navStep: 10
	            }
	        ],
	        isLeapYear: function (year) {
	            return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
	        },
	        getDaysInMonth: function (year, month) {
	            return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
	        },
	        getDefaultFormat: function (type, field) {
	            if (type === 'standard') {
	                if (field === 'input')
	                    return 'yyyy-mm-dd hh:ii';
	                else
	                    return 'yyyy-mm-dd hh:ii:ss';
	            } else if (type === 'php') {
	                if (field === 'input')
	                    return 'Y-m-d H:i';
	                else
	                    return 'Y-m-d H:i:s';
	            } else {
	                throw new Error('Invalid format type.');
	            }
	        },
	        validParts: function (type) {
	            if (type === 'standard') {
	                return /t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
	            } else if (type === 'php') {
	                return /[dDjlNwzFmMnStyYaABgGhHis]/g;
	            } else {
	                throw new Error('Invalid format type.');
	            }
	        },
	        nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
	        parseFormat: function (format, type) {
	            // IE treats \0 as a string end in inputs (truncating the value),
	            // so it's a bad format delimiter, anyway
	            var separators = format.replace(this.validParts(type), '\0').split('\0'),
	                parts = format.match(this.validParts(type));
	            if (!separators || !separators.length || !parts || parts.length === 0) {
	                throw new Error('Invalid date format.');
	            }
	            return {separators: separators, parts: parts};
	        },
	        parseDate: function (date, format, language, type, timezone) {
	            if (date instanceof Date) {
	                var dateUTC = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
	                dateUTC.setMilliseconds(0);
	                return dateUTC;
	            }
	            if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
	                format = this.parseFormat('yyyy-mm-dd', type);
	            }
	            if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
	                format = this.parseFormat('yyyy-mm-dd hh:ii', type);
	            }
	            if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
	                format = this.parseFormat('yyyy-mm-dd hh:ii:ss', type);
	            }
	            if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
	                var part_re = /([-+]\d+)([dmwy])/,
	                    parts = date.match(/([-+]\d+)([dmwy])/g),
	                    part, dir;
	                date = new Date();
	                for (var i = 0; i < parts.length; i++) {
	                    part = part_re.exec(parts[i]);
	                    dir = parseInt(part[1]);
	                    switch (part[2]) {
	                        case 'd':
	                            date.setUTCDate(date.getUTCDate() + dir);
	                            break;
	                        case 'm':
	                            date = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, date, dir);
	                            break;
	                        case 'w':
	                            date.setUTCDate(date.getUTCDate() + dir * 7);
	                            break;
	                        case 'y':
	                            date = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, date, dir);
	                            break;
	                    }
	                }
	                return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 0);
	            }
	            var parts = date && date.toString().match(this.nonpunctuation) || [],
	                date = new Date(0, 0, 0, 0, 0, 0, 0),
	                parsed = {},
	                setters_order = ['hh', 'h', 'ii', 'i', 'ss', 's', 'yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'D', 'DD', 'd', 'dd', 'H', 'HH', 'p', 'P', 'z', 'Z'],
	                setters_map = {
	                    hh: function (d, v) {
	                        return d.setUTCHours(v);
	                    },
	                    h: function (d, v) {
	                        return d.setUTCHours(v);
	                    },
	                    HH: function (d, v) {
	                        return d.setUTCHours(v === 12 ? 0 : v);
	                    },
	                    H: function (d, v) {
	                        return d.setUTCHours(v === 12 ? 0 : v);
	                    },
	                    ii: function (d, v) {
	                        return d.setUTCMinutes(v);
	                    },
	                    i: function (d, v) {
	                        return d.setUTCMinutes(v);
	                    },
	                    ss: function (d, v) {
	                        return d.setUTCSeconds(v);
	                    },
	                    s: function (d, v) {
	                        return d.setUTCSeconds(v);
	                    },
	                    yyyy: function (d, v) {
	                        return d.setUTCFullYear(v);
	                    },
	                    yy: function (d, v) {
	                        return d.setUTCFullYear(2000 + v);
	                    },
	                    m: function (d, v) {
	                        v -= 1;
	                        while (v < 0) v += 12;
	                        v %= 12;
	                        d.setUTCMonth(v);
	                        while (d.getUTCMonth() !== v)
	                            if (isNaN(d.getUTCMonth()))
	                                return d;
	                            else
	                                d.setUTCDate(d.getUTCDate() - 1);
	                        return d;
	                    },
	                    d: function (d, v) {
	                        return d.setUTCDate(v);
	                    },
	                    p: function (d, v) {
	                        return d.setUTCHours(v === 1 ? d.getUTCHours() + 12 : d.getUTCHours());
	                    },
	                    z: function () {
	                        return timezone
	                    }
	                },
	                val, filtered, part;
	            setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
	            setters_map['dd'] = setters_map['d'];
	            setters_map['P'] = setters_map['p'];
	            setters_map['Z'] = setters_map['z'];
	            date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
	            if (parts.length === format.parts.length) {
	                for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
	                    val = parseInt(parts[i], 10);
	                    part = format.parts[i];
	                    if (isNaN(val)) {
	                        switch (part) {
	                            case 'MM':
	                                filtered = $(dates[language].months).filter(function () {
	                                    var m = this.slice(0, parts[i].length),
	                                        p = parts[i].slice(0, m.length);
	                                    return m === p;
	                                });
	                                val = $.inArray(filtered[0], dates[language].months) + 1;
	                                break;
	                            case 'M':
	                                filtered = $(dates[language].monthsShort).filter(function () {
	                                    var m = this.slice(0, parts[i].length),
	                                        p = parts[i].slice(0, m.length);
	                                    return m.toLowerCase() === p.toLowerCase();
	                                });
	                                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
	                                break;
	                            case 'p':
	                            case 'P':
	                                val = $.inArray(parts[i].toLowerCase(), dates[language].meridiem);
	                                break;
	                            case 'z':
	                            case 'Z':
	                                timezone;
	                                break;

	                        }
	                    }
	                    parsed[part] = val;
	                }
	                for (var i = 0, s; i < setters_order.length; i++) {
	                    s = setters_order[i];
	                    if (s in parsed && !isNaN(parsed[s]))
	                        setters_map[s](date, parsed[s])
	                }
	            }
	            return date;
	        },
	        formatDate: function (date, format, language, type, timezone) {
	            if (date === null) {
	                return '';
	            }
	            var val;
	            if (type === 'standard') {
	                val = {
	                    t: date.getTime(),
	                    // year
	                    yy: date.getUTCFullYear().toString().substring(2),
	                    yyyy: date.getUTCFullYear(),
	                    // month
	                    m: date.getUTCMonth() + 1,
	                    M: dates[language].monthsShort[date.getUTCMonth()],
	                    MM: dates[language].months[date.getUTCMonth()],
	                    // day
	                    d: date.getUTCDate(),
	                    D: dates[language].daysShort[date.getUTCDay()],
	                    DD: dates[language].days[date.getUTCDay()],
	                    p: (dates[language].meridiem.length === 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
	                    // hour
	                    h: date.getUTCHours(),
	                    // minute
	                    i: date.getUTCMinutes(),
	                    // second
	                    s: date.getUTCSeconds(),
	                    // timezone
	                    z: timezone
	                };

	                if (dates[language].meridiem.length === 2) {
	                    val.H = (val.h % 12 === 0 ? 12 : val.h % 12);
	                }
	                else {
	                    val.H = val.h;
	                }
	                val.HH = (val.H < 10 ? '0' : '') + val.H;
	                val.P = val.p.toUpperCase();
	                val.Z = val.z;
	                val.hh = (val.h < 10 ? '0' : '') + val.h;
	                val.ii = (val.i < 10 ? '0' : '') + val.i;
	                val.ss = (val.s < 10 ? '0' : '') + val.s;
	                val.dd = (val.d < 10 ? '0' : '') + val.d;
	                val.mm = (val.m < 10 ? '0' : '') + val.m;
	            } else if (type === 'php') {
	                // php format
	                val = {
	                    // year
	                    y: date.getUTCFullYear().toString().substring(2),
	                    Y: date.getUTCFullYear(),
	                    // month
	                    F: dates[language].months[date.getUTCMonth()],
	                    M: dates[language].monthsShort[date.getUTCMonth()],
	                    n: date.getUTCMonth() + 1,
	                    t: DPGlobal.getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth()),
	                    // day
	                    j: date.getUTCDate(),
	                    l: dates[language].days[date.getUTCDay()],
	                    D: dates[language].daysShort[date.getUTCDay()],
	                    w: date.getUTCDay(), // 0 -> 6
	                    N: (date.getUTCDay() === 0 ? 7 : date.getUTCDay()),       // 1 -> 7
	                    S: (date.getUTCDate() % 10 <= dates[language].suffix.length ? dates[language].suffix[date.getUTCDate() % 10 - 1] : ''),
	                    // hour
	                    a: (dates[language].meridiem.length === 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
	                    g: (date.getUTCHours() % 12 === 0 ? 12 : date.getUTCHours() % 12),
	                    G: date.getUTCHours(),
	                    // minute
	                    i: date.getUTCMinutes(),
	                    // second
	                    s: date.getUTCSeconds()
	                };
	                val.m = (val.n < 10 ? '0' : '') + val.n;
	                val.d = (val.j < 10 ? '0' : '') + val.j;
	                val.A = val.a.toString().toUpperCase();
	                val.h = (val.g < 10 ? '0' : '') + val.g;
	                val.H = (val.G < 10 ? '0' : '') + val.G;
	                val.i = (val.i < 10 ? '0' : '') + val.i;
	                val.s = (val.s < 10 ? '0' : '') + val.s;
	            } else {
	                throw new Error('Invalid format type.');
	            }
	            var date = [],
	                seps = $.extend([], format.separators);
	            for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
	                if (seps.length) {
	                    date.push(seps.shift());
	                }
	                date.push(val[format.parts[i]]);
	            }
	            if (seps.length) {
	                date.push(seps.shift());
	            }
	            return date.join('');
	        },
	        convertViewMode: function (viewMode) {
	            switch (viewMode) {
	                case 4:
	                case 'decade':
	                    viewMode = 4;
	                    break;
	                case 3:
	                case 'year':
	                    viewMode = 3;
	                    break;
	                case 2:
	                case 'month':
	                    viewMode = 2;
	                    break;
	                case 1:
	                case 'day':
	                    viewMode = 1;
	                    break;
	                case 0:
	                case 'hour':
	                    viewMode = 0;
	                    break;
	            }

	            return viewMode;
	        },
	        headTemplate: '<thead>' +
	        '<tr>' +
	        '<th class="prev"><i class="{iconType} {leftArrow}"/></th>' +
	        '<th colspan="5" class="switch"></th>' +
	        '<th class="next"><i class="{iconType} {rightArrow}"/></th>' +
	        '</tr>' +
	        '</thead>',
	        headTemplateV3: '<thead>' +
	        '<tr>' +
	        '<th class="prev"><span class="{iconType} {leftArrow}"></span> </th>' +
	        '<th colspan="5" class="switch"></th>' +
	        '<th class="next"><span class="{iconType} {rightArrow}"></span> </th>' +
	        '</tr>' +
	        '</thead>',
	        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
	        footTemplate: '<tfoot>' +
	        '<tr><th colspan="7" class="today"></th></tr>' +
	        '<tr><th colspan="7" class="clear"></th></tr>' +
	        '</tfoot>'
	    };
	    DPGlobal.template = '<div class="datetimepicker">' +
	        '<div class="datetimepicker-minutes">' +
	        '<table class=" table-condensed">' +
	        DPGlobal.headTemplate +
	        DPGlobal.contTemplate +
	        DPGlobal.footTemplate +
	        '</table>' +
	        '</div>' +
	        '<div class="datetimepicker-hours">' +
	        '<table class=" table-condensed">' +
	        DPGlobal.headTemplate +
	        DPGlobal.contTemplate +
	        DPGlobal.footTemplate +
	        '</table>' +
	        '</div>' +
	        '<div class="datetimepicker-days">' +
	        '<table class=" table-condensed">' +
	        DPGlobal.headTemplate +
	        '<tbody></tbody>' +
	        DPGlobal.footTemplate +
	        '</table>' +
	        '</div>' +
	        '<div class="datetimepicker-months">' +
	        '<table class="table-condensed">' +
	        DPGlobal.headTemplate +
	        DPGlobal.contTemplate +
	        DPGlobal.footTemplate +
	        '</table>' +
	        '</div>' +
	        '<div class="datetimepicker-years">' +
	        '<table class="table-condensed">' +
	        DPGlobal.headTemplate +
	        DPGlobal.contTemplate +
	        DPGlobal.footTemplate +
	        '</table>' +
	        '</div>' +
	        '</div>';
	    DPGlobal.templateV3 = '<div class="datetimepicker">' +
	        '<div class="datetimepicker-minutes">' +
	        '<table class=" table-condensed">' +
	        DPGlobal.headTemplateV3 +
	        DPGlobal.contTemplate +
	        DPGlobal.footTemplate +
	        '</table>' +
	        '</div>' +
	        '<div class="datetimepicker-hours">' +
	        '<table class=" table-condensed">' +
	        DPGlobal.headTemplateV3 +
	        DPGlobal.contTemplate +
	        DPGlobal.footTemplate +
	        '</table>' +
	        '</div>' +
	        '<div class="datetimepicker-days">' +
	        '<table class=" table-condensed">' +
	        DPGlobal.headTemplateV3 +
	        '<tbody></tbody>' +
	        DPGlobal.footTemplate +
	        '</table>' +
	        '</div>' +
	        '<div class="datetimepicker-months">' +
	        '<table class="table-condensed">' +
	        DPGlobal.headTemplateV3 +
	        DPGlobal.contTemplate +
	        DPGlobal.footTemplate +
	        '</table>' +
	        '</div>' +
	        '<div class="datetimepicker-years">' +
	        '<table class="table-condensed">' +
	        DPGlobal.headTemplateV3 +
	        DPGlobal.contTemplate +
	        DPGlobal.footTemplate +
	        '</table>' +
	        '</div>' +
	        '</div>';
	    $.fn.datetimepicker.DPGlobal = DPGlobal;

	    /* DATETIMEPICKER NO CONFLICT
	     * =================== */

	    $.fn.datetimepicker.noConflict = function () {
	        $.fn.datetimepicker = old;
	        return this;
	    };

	    /* DATETIMEPICKER DATA-API
	     * ================== */

	    $(document).on(
	        'focus.datetimepicker.data-api click.datetimepicker.data-api',
	        '[data-provide="datetimepicker"]',
	        function (e) {
	            var $this = $(this);
	            if ($this.data('datetimepicker')) return;
	            e.preventDefault();
	            // component click requires us to explicitly show it
	            $this.datetimepicker('show');
	        }
	    );
	    $(function () {
	        $('[data-provide="datetimepicker-inline"]').datetimepicker();
	    });

	}));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/**
	 * Simplified Chinese translation for bootstrap-datetimepicker
	 * Yuan Cheung <advanimal@gmail.com>
	 */
	;(function($){
		$.fn.datetimepicker.dates['zh-CN'] = {
				days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
				daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
				daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
				months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
				monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
				today: "今天",
				suffix: [],
				meridiem: ["上午", "下午"]
		};
	}(jQuery));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDJBNkY2OUY2MjJCMTFFOEJCOTdDOERERjM2MzMyOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDJBNkY2QTA2MjJCMTFFOEJCOTdDOERERjM2MzMyOTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMkE2RjY5RDYyMkIxMUU4QkI5N0M4RERGMzYzMzI5MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMkE2RjY5RTYyMkIxMUU4QkI5N0M4RERGMzYzMzI5MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjm59YUAAAQPSURBVHja7N1bbAxRGAfw/5mZXY12N4LSrQatrTZSklKkSITgrUklCA8SlweJEHcieERU4pLgyYPEG0HFE4lEEIm4VhDSomjLC6m2Lm1ndnynO41VW83a6e4c+/2TL2m20273t+fM+WY2zRHzzv1AnPipqp2qpMp3HsvkdFA1UT2iukR1maqr70FGnB9cTFVDFQYnNjlUpU6toGqg2kV1MfYgLeZrneqQcwBjDhxpdMEx0+ON0ANUO9kp4fSa7YodoUsYM2nUJb2gcrE5yiZJ55i0lKBLqQrYI+mMoVqmOa0Rx51US9Dp7OBaKiRoHju4lpAEHcIOrsWvsYG7YVAGZVAG5TAogzIoh0EZ9D+IMWi/WQBVkwysLdYQ9Im0v1DTBp58tnHiuYnGjxH1Ruj8iQa2TNI9gdkzcujPmDpC4PQcH/JGauqBrgrr3jzHEeyaUkM90IKh3j3PVeaqeA7tk+33TTx8Y6UFsKJIR820Xy812xDqjdC+qWuKpG1EPnqfuuc20jn1huZomJFPXYAfqG+18aLFgh2B0kkb6PwSA7sn69BjZt+rDh2bbpn41qGualoa+6KQhr1TfseUmZAjcGSO0dPDMmgCWVncf0s1MSBQOFpj0EQSDv79accGGTShfOq0//r91i6bQRNJ7dv+F50Ouuh+1sKLUkK5UW/iepwbFF300La7JkyFR2h62iby2n+7G9cKdSzI1xEwbNS3AxfqLbS1uTA6qUsIBjSMHSaQny0wKisD+lCJeu+11VNuJZSroZrepIUhgWF+kUEj1OWUjNGxuUxHSVBk6JR3KTk0rfdU6Jg50jttlrKgs8IG9tHV1hCP3XZVDlQQ4LqpPiwb783mXylQf5bAwdk+lA/37sV+yt7mGeOSm5tyBT+z0O9pzJSC7i/XURk2/mmKV5UZODvXh7ws78+ilE55iXolV+DUYxOd3+0Bm/NSaod20MJTmK3O/byUn0OrCjQsCvlx6X0EV99ZaPpkwzKjuEKLXuGUj9awokhDcUC9G6NpWZRkq7OcVunlzkr9w5LX8TYCPqHyvWXvrPJZuizVKVO8KGVKGJRBGZRBOQzKoAzKYVAGZdD+8+yLdz9bf9lmqwd6/KnpScwIWdbUmeqBNrREsP6Oicav3sGs+2xj9c1uvBnEf6sZ1LtNL5otrGm2kEnhRYlBGZRBOQzKoAzKYVAGZVAOgzKoeqDtzOBauiToB3ZwLR8k6BN2cC33JWgtO7iWWgl6HtFdWDjJpVlaSlC5hc1W9kg6W6g6e9smOUoPs8k/57Bj+FsfupvqBNsknJOO3R+Nvfw0bSOiu640sNOAkUZyH5UNjl1P4n3qKTdduuIcLHf/moboxiG+DAfsdhaeB4huoXYecbZQ+ynAALsT1Or9qeePAAAAAElFTkSuQmCC"

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(43);

	avalon.component('ms-double-common-button', {
	    template: __webpack_require__(45),
	    defaults: {
	        title: '提交核保',
	        isShowBack: true,
	        button01: "继续投保",
	        button02: "立即支付",
	        clickLeft: function () {

	        },
	        clickRight: function () {

	        },
	        onReady: function () {

	        }
	    }
	});







/***/ }),
/* 43 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"double_button\">\r\n    <button type=\"button\" onclick=\"\" :click=\"@clickLeft\">{{button01}}</button>\r\n    <button type=\"button\" onclick=\"\" :click=\"@clickRight\">{{button02}}</button>\r\n</div>";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(47);

	avalon.component('ms-common-title', {
	    template: __webpack_require__(49),
	    defaults: {
	        title:'中信',
	        isShowBack:true,
	        onReady: function () {

	        }
	    }
	});







/***/ }),
/* 47 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"header_tetel\">\r\n    <p><span>{{title}}</span></p>\r\n</div>\r\n\r\n";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(51);

	avalon.component('ms-common-button', {
	    template: __webpack_require__(53),
	    defaults: {
	        title: '提交核保',
	        isAgree:true,
	        clickNext: function () {

	        },
	        onReady: function () {

	        }
	    }
	});







/***/ }),
/* 51 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

	module.exports = "<div>\r\n    <div :if=\"@isAgree\" class=\"commo_button\" onclick=\"\" :click=\"@clickNext\">\r\n        <div style=\"cursor: pointer\">{{title}}</div>\r\n    </div>\r\n    <div :if=\"!@isAgree\" class=\"commo_button\" >\r\n        <div style=\"background: #5c5c5c;cursor: pointer\">{{title}}</div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by brave on 17/3/28.
	 */

	__webpack_require__(55);
	__webpack_require__(57);
	 var anniu = __webpack_require__(58)

	__webpack_require__(59);
	var uploadImg = __webpack_require__(60)
	var urlParams = __webpack_require__(61);
	var hostConfig = __webpack_require__(4);
	var urlParamsType = urlParams.getQueryString('type');


	__webpack_require__(62);

	avalon.component('ms-mobile-uploader', {
	    template: __webpack_require__(64),
	    defaults: {
	        uploadImg: uploadImg,
	        userName: '',
	        orderId: 0,
	        typeUpload: 101,
	        type: 1,
	        anniu: anniu,
	        onUploadSuccess: function () {

	        },
	        onUploadFail: function () {

	        },
	        onReady: function () {
	            var that = this;

	            var Uploader = Q.Uploader;

	            var uploader = new Uploader({
	                url: hostConfig.host + hostConfig.uploadFileAppName + '/uploadFile?order_id=' + that.orderId + '&file_type=' + that.type + '&type=' + urlParamsType,
	                // + '&mobile=mobile',
	                target: document.getElementById("upload-target"),
	                view: document.getElementById("upload-view"),
	                allows: ".jpg,.jpeg,.png,.gif,.pdf,.JPG,.JPEG,.PNG,.GIF,.PDF",
	                upName: "file",
	                //每次上传都会发送的参数(POST方式)
	                // data: {user: "Devin"},

	                /*
	                 上传回调事件：
	                 init,          //上传管理器初始化完毕后触发

	                 select,        //点击上传按钮准备选择上传文件之前触发,返回false可禁止选择文件
	                 add[Async],    //添加任务之前触发,返回false将跳过该任务
	                 upload[Async], //上传任务之前触发,返回false将跳过该任务
	                 send[Async],   //发送数据之前触发,返回false将跳过该任务

	                 cancel,        //取消上传任务后触发
	                 remove,        //移除上传任务后触发

	                 progress,      //上传进度发生变化后触发(仅html5模式有效)
	                 complete       //上传完成后触发
	                 */

	                on: {
	                    //添加之前触发
	                    add: function (task) {
	                        if (task.ext == '') {
	                            task.name = task.name + '.jpg';
	                            task.ext = '.jpg';
	                            task.disabled = false;
	                            task.state = 0
	                        } else {
	                            if (task.disabled) return alertModal.open("允许上传的文件格式为：" + 'jpg,jpeg,png,gif,pdf');
	                        }
	                        // log(task.name + ": 已添加!");
	                    },

	                    //任务移除后触发
	                    remove: function (task) {
	                    },

	                    //上传之前触发
	                    upload: function (task) {
	                        //exe文件可以添加，但不会上传
	                        if (task.ext == ".exe") return false;
	//                if (task.size > 1024 * 10) {
	//                    alert("上传的附件不能大于10MB")
	//                    return false;
	//                }
	                        //可针对单独的任务配置参数(POST方式)
	                        // task.data = {name: task.name + "_" + Date.now()};
	                    },

	                    //上传完成后触发
	                    complete: function (task) {
	                        if (task.state != Uploader.COMPLETE) return log(task.name + ": " + Uploader.getStatusText(task.state) + "!");

	                        var json = task.json;
	                        if (!json) return log(task.name + ": 上传失败,请保证上传大小在10M内;上传不超过80个文件！<br />");

	                        var statusCode = JSON.parse(task.response).statusCode;

	                        if (statusCode == -401) {
	                            alertModal.open("登录已失效,请重新登录！")
	                        }
	                        else if (statusCode != 1) {
	                            uploadFailHandler(task);
	                        }
	                        log();
	                        uploader.resetInput();

	                        //this.list  为上传任务列表
	                        //this.index 为当前上传任务索引
	                        if (this.index >= this.list.length - 1) {
	                            //所有任务上传完成
	                            // log("所有任务上传完成：" + new Date());
	                        }
	                        return false;
	                    }
	                }
	            });

	        }
	    }
	});


	// //错误提示信息
	// function error_tips(value) {
	//     var tmp = ['<div id="error_tips" class="tips_contain" style="display: block">',
	//         '    <table>',
	//         '        <tbody>',
	//         '        <tr>',
	//         '            <td>',
	//         '                <div class="tips_contain_div">',
	//         '                                        <span id="tips" >' + value + '</span>',
	//         '                    <div id="error_btn"  class="tips_close_btn">ok',
	//         '                    </div>',
	//         '                </div>',
	//         '            </td>',
	//         '        </tr>',
	//         '        </tbody>',
	//         '    </table>',
	//         '</div>'].join("");
	//
	//     $('body').prepend(tmp);
	//
	//     $('#error_btn').click(function () {
	//         $('#error_tips').remove();
	//     });
	// }

	function log(msg) {
	    document.getElementById("log").innerHTML += (msg != undefined ? msg : "") + "<br />";
	}
	function uploadFailHandler(task) {
	    // $('#upload-view .' + task.id).css("display", 'none');
	    $('#upload-view .' + task.id).remove();
	    $('br').remove();
	    log(task.name + ": 上传失败,请保证上传大小在10M内;上传不超过80个文件！<br />")
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */,
/* 57 */
/***/ (function(module, exports) {

	module.exports = "data:image/gif;base64,R0lGODlhAwAQALMAAPz8/Pj4+PT09O/v7+np6eTk5ODg4Nzc3NnZ2bvY+bTU+K7P9qfL9aDH9JnC85O+8SH5BAAHAP8ALAAAAAADABAAAAQYEMlDjS2Y6MGFDyAgPqRjNiijLqziJnAEADs="

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzZGQTUxQjZBNzEyMTFFN0JFMkNDNTA2MkMzQkQ2QkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzZGQTUxQjdBNzEyMTFFN0JFMkNDNTA2MkMzQkQ2QkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNkZBNTFCNEE3MTIxMUU3QkUyQ0M1MDYyQzNCRDZCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNkZBNTFCNUE3MTIxMUU3QkUyQ0M1MDYyQzNCRDZCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgnRWz0AAAM3SURBVHja5JpPaBNBFMYna1oqlfRSDxbUQClFUcE/VHoRi17EsydppB5S8J5AD/bQXGxLb4K0IMWKeCjoRQX1ED0FeglYLJRarBdPHjQQGgwYvwdvw7gk29ndt8kuPvhB2J2d975k5s2b2SRUYUMJWBpMgHEwCkZACvTz/SqogB2wDUqgCPaCOk4EEDAEJkEGnPbZxxZYA0/B904JGAZ5MAV6lIzVwSpYALteHrQ8tD0M5vhbywoGr7ivLPc9x75EBZwFZXAf9KrwrJd9lNmniAAa4xs8OTtlo+wzE1RADjwBfarz1se+c34F5HhSddsW3ERYLsMmCsHrIjKmAmjyLKvo2XKriW21SJXrXRrzJnNi3ZlinQJmhLPNQ7AE/ghmp5l2K/EwLyRSef4eeMSfb3PJYAn0+5tLl13nL5APKXiyZzwJJX6JXo71nyE0xLVNGMGHIWKKY24KmBSqbfTgB7Xrg8IiejjmpoCMcPCXwXPt3mO+Zou4K+AvYwtIB6jnbXvrCP4dOKrdH+BrtggqEV4E9Ekxpy3eSSmBzk6CaxxoqkWbFN+7AU6AcwJ+J5K8DQxqxw23hyTijeA6M251uEwWL7st3oDH1UasNuM1LpaytKOPOFq/39rkJ/gsGAj19cPPgySg6uO5C+AMeC0Q/Aeu8y/5eLZKAioeH/oFvvLnLy7tEtrnpEu7T6ABvnHfXqxCHdNx37EQxucpcBPUwEWXdo0APnZIAJ1VXglBABVcr0KexNs0hEoxzkIlElCMsYBikmuYLZ8V6UeBIPz2QTHv2dmB9qsPDB/UM8pLRsoOeWi7pm9o6Hy+brr6geshDIer4Ihh2zrH3Pw26eUCnc9nDTt4z+tHQ1DAgIe2qxxzqMcqYVnbYxW6MB+DzDOvtLc4zldMdGxXjvAmhxbd82BfL+Z0oxu3ePmPmtU4tn1nNeq0TTAdQQHTHJs6SICdY/MRCj5v531TAWSLERGR51iUVwG2iDtdmhM19r140I7MZMke4wzQyWwz1m7YeBVgT2xKXwVeSMJcpArsa9N0T2xqlL5meRVc8VA7mdY2K9z3rDNVKtd963/4Z49WllZd+rvNXwEGADDGrgBemG/GAAAAAElFTkSuQmCC"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	!function(t,e){"use strict";function n(t,n){return t!==e?t:n}function i(t){return"[object Function]"===L.call(t)}function r(t){return"number"==typeof t&&t>0&&t===Math.floor(t)}function a(t,e){return i(t)?t.apply(e,O.call(arguments,2)):void 0}function s(t,n,i){if(!t||!n)return t;for(var r in n)r!=e&&k.call(n,r)&&(i||t[r]===e)&&(t[r]=n[r]);return t}function o(t,e){if(e!==!1&&!/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))throw new Error("JSON SyntaxError");try{return new Function("return "+t)()}catch(n){}}function l(t,n){1>=n&&(n*=100),t.style.opacity!=e?t.style.opacity=n/100:t.style.filter!=e&&(t.style.filter="alpha(opacity="+parseInt(n)+")")}function u(t,e){var n=0,i=0,r=t.offsetWidth,a=t.offsetHeight;do n+=t.offsetLeft,i+=t.offsetTop,t=t.offsetParent;while(t&&t!=e);return{left:n,top:i,width:r,height:a}}function c(t,e,n,i){for(var r=t[n||e],a=[];r;){if(1==r.nodeType){if(!i)return r;a.push(r)}r=r[e]}return i?a:null}function d(t){return t.previousElementSibling||c(t,"previousSibling",null,!1)}function f(t){return t.nextElementSibling||c(t,"nextSibling",null,!1)}function p(t){return t.firstElementChild||c(t,"nextSibling","firstChild",!1)}function v(t){return t.lastElementChild||c(t,"previousSibling","lastChild",!1)}function h(t){return t.children||c(t,"nextSibling","firstChild",!0)}function m(t,e,n){var i=document.createElement(t);return e&&(i.className=e),n&&(i.innerHTML=n),i}function g(t,e){var n=m("div","",t);return e?n.childNodes:p(n)}function y(e){var n=e||t.event;return n.target||(n.target=n.srcElement),n}function w(t,e,n,i){var r=function(a){n.call(t,y(a)),i&&Q(t,e,r)};return N(t,e,r),i?void 0:{stop:function(){Q(t,e,r)}}}function _(t,e){if(i(t[e]))t[e]();else if(t.fireEvent)t.fireEvent("on"+e);else if(t.dispatchEvent){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}}function x(t,e,n){var i=y(t);e!==!1&&(i.preventDefault?i.preventDefault():i.returnValue=!1),n!==!1&&(i.stopPropagation?i.stopPropagation():i.cancelBubble=!0)}function E(t){return I.test(t)}function S(t){if(!E(t))return!0;var n=RegExp.lastMatch.length,i=t.indexOf("/",n),r=t.slice(0,-1!=i?i:e);return r.toLowerCase()==(location.protocol+"//"+location.host).toLowerCase()}function T(t,e,n){t=+t,e=e||1024;for(var i=0,a="number"==typeof e,s=1,o=r(n)?n:a?100:e.length;t>=s&&o>i;)s*=a?e:e[i],i++;return i&&s>t&&(s/=a?e:e.last(),i--),{value:i?t/s:t,level:i}}function b(t,i){if(i=i===!0?{all:!0}:i||{},isNaN(t)||t==e||0>t){var r=i.error||"--";return i.all?{text:r}:r}var a=T(t,i.steps,i.limit),s=a.value,o=s.toFixed(n(i.digit,2));return i.trim!==!1&&-1!=o.lastIndexOf(".")&&(o=o.replace(/\.?0+$/,"")),a.text=o+(i.join||"")+(i.units||C)[a.level+(i.start||0)],i.all?a:a.text}var L=Object.prototype.toString,k=Object.prototype.hasOwnProperty,O=Array.prototype.slice;s(Object,{forEach:function(t,e,n){for(var i in t)k.call(t,i)&&e.call(n,i,t[i],t)}}),s(Date,{now:function(){return+new Date}});var M;(t.ActiveXObject||t.msIndexedDB)&&(M=document.documentMode||(t.XMLHttpRequest?7:6)),t.JSON||(t.JSON={}),JSON.parse||(JSON.parse=o);var N,Q;document.addEventListener?(N=function(t,e,n){t.addEventListener(e,n,!1)},Q=function(t,e,n){t.removeEventListener(e,n,!1)}):document.attachEvent&&(N=function(t,e,n){t.attachEvent("on"+e,n)},Q=function(t,e,n){t.detachEvent("on"+e,n)});var I=/^https?:\/\//i,C=["B","KB","MB","GB","TB","PB","EB"],H={def:n,isFunc:i,isUInt:r,fire:a,extend:s,ie:M,setOpacity:l,getOffset:u,walk:c,getPrev:d,getNext:f,getFirst:p,getLast:v,getChilds:h,createEle:m,parseHTML:g,isHttpURL:E,isSameHost:S,parseLevel:T,formatSize:b};M&&(H["ie"+(6>M?6:M)]=!0),H.event={fix:y,stop:x,trigger:_,add:w},t.Q=H}(window),function(t,e){"use strict";function n(t){var e=l.Lang;switch(t){case N:return e.status_ready;case I:return e.status_processing;case C:return e.status_complete;case H:return e.status_skip;case P:return e.status_cancel;case z:return e.status_error}return t}function i(){var e=t.XMLHttpRequest;e&&(new e).upload&&t.FormData&&(T=!0);var n=document.createElement("input");n.type="file",b=!!n.files,L=T}function r(t,e){var n=t.lastIndexOf(e);return-1!=n?t.slice(n):""}function a(t){if(t){for(var e=t.split(","),n={},i=0,r=e.length;r>i;i++)n[e[i]]=!0;return n}}function s(t,e){t.attachEvent?t.attachEvent("onload",e):t.addEventListener("load",e,!1)}function o(t,e,n){if(e&&!(0>=e)){var i,r=Date.now();if(n>=e)return i=r-t.startTime,i?t.avgSpeed=Math.min(Math.round(1e3*e/i),e):t.speed||(t.avgSpeed=t.speed=e),t.time=i||0,void(t.endTime=r);i=r-t.lastTime,200>i||(t.speed=Math.min(Math.round(1e3*(n-t.loaded)/i),t.total),t.lastTime=r)}}function l(t){var e=this;e.guid=t.guid||"uploader"+ ++k,e.url=t.url,e.dataType=t.dataType||"json",e.data=t.data,e.target=t.target,e.html5=T&&!!u(t.html5,!0),e.multiple=b&&e.html5&&!!u(t.multiple,!0),e.clickTrigger=L&&!!u(t.clickTrigger,!0),e.workerThread=e.html5?t.workerThread||1:1,e.workerIdle=e.workerThread,e.auto=t.auto!==!1,e.upName=t.upName||"upfile",e.allows=a(t.allows),e.disallows=a(t.disallows),e.chunkSize=t.chunkSize||2097152,e.isSlice=!!t.isSlice,e.isQueryState=!!u(t.isQueryState,e.isSlice),e.isMd5=!!u(t.isMd5,e.isSlice),e.isUploadAfterHash=t.isUploadAfterHash!==!1,e.container=t.container||document.body,t.getPos&&(e.getPos=t.getPos);var n=t.UI||{};n.init&&(e.init=n.init),n.draw&&(e.draw=n.draw),n.update&&(e.update=n.update),n.over&&(e.over=n.over),e.fns=t.on||{},e.ops=t,e.list=[],e.map={},e.index=0,e.started=!1,e._init()}var u=Q.def,c=Q.fire,d=Q.extend,f=Q.getFirst,p=Q.getLast,v=JSON.parse,h=Q.createEle,m=Q.parseHTML,g=Q.setOpacity,y=Q.getOffset,w=Q.md5File,_=Q.event,x=_.add,E=_.trigger,S=_.stop,T=!1,b=!1,L=!1,k=0,O=0,M=0,N=0,I=1,C=2,H=-1,P=-2,z=-3;l.prototype={constructor:l,_init:function(){var t=this;if(!t._inited){t._inited=!0;var n=t.guid,i=t.target,r=t.container,a=h("div","upload-input "+n);if(r.appendChild(a),t.boxInput=a,!t.html5){var o="upload_iframe_"+n,l='<iframe class="u-iframe" name="'+o+'"></iframe><form class="u-form" action="" method="post" enctype="multipart/form-data" target="'+o+'"></form>',u=h("div","upload-html4 "+n,l);r.appendChild(u);var c=f(u),d=p(u);t.iframe=c,t.form=d,s(c,function(){if(0==t.workerIdle){var n;try{n=c.contentWindow.document.body.innerHTML}catch(i){}t.complete(e,C,n)}})}return t.clickTrigger?x(i,"click",function(e){t.fire("select",e)!==!1&&(t.resetInput(),E(t.inputFile,"click"))}):(x(a,"click",function(e){t.fire("select",e)===!1&&S(e)}),g(a,0),t.resetInput()),t.fire("init"),t.run("init")}},resetInput:function(){var t=this,e=t.boxInput;e.innerHTML='<input type="file" name="'+t.upName+'" style="'+(t.clickTrigger?"visibility: hidden;":"font-size:100px;")+'"'+(t.multiple?' multiple="multiple"':"")+">";var n=f(e);return x(n,"change",function(e){t.add(this),t.html5||t.resetInput()}),t.inputFile=n,t.updatePos()},updatePos:function(t){var e=this;if(e.clickTrigger)return e;var n=e.getPos||y,i=e.boxInput,r=f(i),a=e.target,s=a.offsetWidth,o=a.offsetHeight,l=0==s?{left:-1e4,top:-1e4}:n(a);return i.style.width=r.style.width=s+"px",i.style.height=r.style.height=o+"px",i.style.left=l.left+"px",i.style.top=l.top+"px",t&&(i.style.zIndex=++M),e},fire:function(t,e,n){if(!n)return c(this.fns[t],this,e);var i=this.fns[t+"Async"];return i?c(i,this,e,n):void n(c(this.fns[t],this,e))},run:function(t,e){var n=this[t];return n&&c(n,this,e),this},addTask:function(t,e){if(t||e){var n,i;e?(n=e.name||e.fileName,i=e.size||e.fileSize):(n=r(t.value,"\\").slice(1)||t.value,i=-1);var a=this,s=r(n,".").toLowerCase(),o=a.disallows&&a.disallows[s]||a.allows&&!a.allows[s],l={id:++O,name:n,ext:s,size:i,input:t,file:e,state:o?H:N};return o&&(l.disabled=!0),a.fire("add",l,function(t){t===!1||l.disabled||(l.index=a.list.length,a.list.push(l),a.map[l.id]=l,a.run("draw",l),a.auto&&a.start())}),l}},add:function(t){var n=this;if("INPUT"==t.tagName){var i=t.files;if(i)for(var r=0,a=i.length;a>r;r++)n.addTask(t,i[r]);else n.addTask(t)}else n.addTask(e,t)},addList:function(t){for(var e=0,n=t.length;n>e;e++)this.add(t[e])},get:function(t){return t!=e?this.map[t]:void 0},cancel:function(t,e){var n=this,i=n.get(t);if(i){var r=i.state;if(r!=N&&r!=I)return n;if(r==I){var a=i.xhr;if(a)return a.abort(),n;n.iframe.contentWindow.location="about:blank"}return e?n:n.complete(i,P)}},remove:function(t){var e=this.get(t);e&&(e.state==I&&this.cancel(t),e.deleted=!0,this.fire("remove",e))},start:function(){var t=this,e=t.workerIdle,n=t.list,i=t.index,r=n.length;if(t.started||(t.started=!0),0>=r||i>=r||0>=e)return t;var a=n[i];return t.index++,t.upload(a)},upload:function(t){var e=this;return!t||t.state!=N||t.skip?e.start():(t.url=e.url,e.workerIdle--,e.fire("upload",t,function(n){return n===!1?e.complete(t,H):void(e.html5&&t.file?e._upload_html5_ready(t):t.input?e._upload_html4(t):e.complete(t,H))}),e)},queryState:function(t,e){var n=this,i=n.url,r=new XMLHttpRequest;return t.queryUrl=i+(-1==i.indexOf("?")?"?":"&")+"action=query&hash="+(t.hash||t.name),n.fire("sliceQuery",t),r.open("GET",t.queryUrl),r.onreadystatechange=function(){if(4==r.readyState){var i,a;if(r.status>=200&&r.status<400)if(i=r.responseText,"ok"===i?a={ret:1}:i&&(a=v(i)),a&&"number"!=typeof a||(a={ret:0,start:a}),t.response=i,t.json=a,1==a.ret)t.queryOK=!0,n.cancel(t.id,!0).complete(t,C);else{var s=+a.start||0;s!=Math.floor(s)&&(s=0),t.sliceStart=s}c(e,n,r)}},r.onerror=function(){c(e,n,r)},r.send(null),n},_upload_html5_ready:function(t){var e=this,n=function(){t.state!=C&&(e.isSlice?e._upload_slice(t):e._upload_html5(t))},i=function(n){e.fire("hash",t,function(){t.hash&&e.isQueryState&&t.state!=C?e.queryState(t,n):n()})},r=function(n){if(e.isMd5&&w){var r=e.fns.hashProgress;w(t.file,function(e,r){t.hash=e,t.timeHash=r,i(n)},function(n){c(r,e,t,n)})}else i(n)};return e.isUploadAfterHash?r(n):(n(),r()),e},_process_params:function(t,e){this.data&&Object.forEach(this.data,e),t.data&&Object.forEach(t.data,e)},_upload_html5:function(t){var e=this,n=new XMLHttpRequest;t.xhr=n,n.upload.addEventListener("progress",function(n){e.progress(t,n.total,n.loaded)},!1),n.addEventListener("load",function(n){e.complete(t,C,n.target.responseText)},!1),n.addEventListener("error",function(){e.complete(t,z)},!1),n.addEventListener("abort",function(){e.complete(t,P)},!1);var i=new FormData;e._process_params(t,function(t,e){i.append(t,e)}),i.append("fileName",t.name),i.append(e.upName,t.blob||t.file,t.name),n.open("POST",t.url),e.fire("send",t,function(r){return r===!1?e.complete(t,H):(n.send(i),void e._afterSend(t))})},_upload_html4:function(t){var e=this,n=e.form,i=t.input;return i._uploaded?e.complete(t,C):(i._uploaded=!0,i.name=e.upName,n.innerHTML="",n.appendChild(i),n.action=t.url,e._process_params(t,function(t,e){n.appendChild(m('<input type="hidden" name="'+t+'" value="'+e+'">'))}),void e.fire("send",t,function(i){return i===!1?e.complete(t,H):(n.submit(),void e._afterSend(t))}))},_afterSend:function(t){t.lastTime=t.startTime=Date.now(),t.state=I,this._lastTask=t,this.progress(t)},progress:function(t,e,n){e||(e=t.size),(!n||0>n)&&(n=0);var i=t.state||N;n>e&&(n=e),n>0&&i==N&&(t.state=i=I);var r=i==C;r&&(e=n=t.size),o(t,e,n),t.total=e,t.loaded=n,this.fire("progress",t),this.run("update",t)},_process_response:function(t,e){t.response=e,e&&"json"==this.dataType&&(t.json=v(e))},complete:function(t,n,i){var r=this;return t||1!=r.workerThread||(t=r._lastTask),t&&(n!=e&&(t.state=n),t.state!=I&&n!=C||(t.state=C,r.progress(t,t.size,t.size)),i!==e&&r._process_response(t,i)),n==P&&r.fire("cancel",t),r.fire("complete",t),r.run("over",t).run("update",t),r.workerIdle++,r.started&&r.start(),r}},l.extend=function(t,e){d(l.prototype,t,e)},i(),d(l,{support:{html5:T,multiple:b},READY:N,PROCESSING:I,COMPLETE:C,SKIP:H,CANCEL:P,ERROR:z,Lang:{status_ready:"准备中",status_processing:"上传中",status_complete:"已完成",status_skip:"已跳过",status_cancel:"已取消",status_error:"上传失败,请保证上传大小在10M内;上传不超过80个文件"},getStatusText:n}),Q.Uploader=l}(window),function(t,e){"use strict";function n(t,e){t.className+=" "+e}function i(t,e){t&&(t.innerHTML=e||"")}var r=Q.def,a=Q.getFirst,s=Q.getLast,o=Q.getNext,l=Q.createEle,u=Q.formatSize,c=Q.event,d=c.add,f=Q.Uploader,p=f.Lang;f.extend({init:function(){var t=this.ops.view;t&&n(t,this.html5?"html5":"html4")},draw:function(t){var e=this,n=e.ops,i=n.view;if(i){var o=n.button||{},u=r(p.cancel||o.cancel,"取消"),c=r(p.remove||o.remove,"删除"),f=t.name,v='<div class="fl"><div class="u-name '+t.id+'" title="'+f+'">'+f+'</div></div><div class="fr"><div class="u-size"></div><div class="u-speed">--/s</div><div class="u-progress-bar"><div class="u-progress" style="width:1%;"></div></div><div class="u-detail">0%</div><div class="u-state"></div><div class="u-op"><a class="u-op-cancel">'+u+'</a><a class="u-op-remove">'+c+'</a></div></div><div class="clear"></div>',h=t.id,m=l("div","u-item "+t.id,v);m.taskId=h,t.box=m,i.appendChild(m);var g=s(m.childNodes[1]),y=a(g),w=s(g);d(y,"click",function(){e.cancel(h)}),d(w,"click",function(){e.remove(h),i.removeChild(m)}),e.update(t)}},update:function(t){if(t&&t.box){var n=t.total||t.size,r=t.loaded,s=t.state,l=t.box,c=l.childNodes[1],d=a(c),p=o(d),v=o(p),h=a(v),m=o(v),g=o(m);if(i(g,f.getStatusText(s)),!(0>n)){var y="";if(this.html5&&r!=e&&r>=0){var w;if(s==f.PROCESSING){var _=Math.min(100*r/n,100);w=_.toFixed(1),"100.0"==w&&(w="99.9")}else s==f.COMPLETE&&(w="100");w&&(w+="%",h.style.width=w,i(m,w)),y='<span class="u-loaded">'+u(r)+"</span> / ";var x=t.avgSpeed||t.speed;i(p,u(x)+"/s")}y+='<span class="u-total">'+u(n)+"</span>",i(d,y)}}},over:function(t){t&&t.box&&n(t.box,"u-over")}})}(window);

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAC3CAYAAABQbs+fAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAm1JREFUeNrs3TFKw2AYgOFfzVCldhMHLZks9gDWG9RLmJOIKFQ9h9BeQicdXARdCwpC0cVBEBXtoGAyWNRBF8UkPg9kSKby8ZJ+mf6xhc7JZghhI0C5HI6bAWUlbsQNRRN9fpAszQzWV+qx0VA0ja1Tb26sJSBuEDeIG8QN4kbcIG4QN4gbxA3iRtwgbhA3iBvEDeIGcSNuEDeIG8QN4gZxI24QN4gbxA3iBnEjbhA3iBvEDeIGcYO4ETeIG8QN4gZxg7gRNxRcZAS/7274EvrXj6P7WiUKzdlJgxF38WVhJ93z0X0rroZe0jAYawmIG8SNuEHcIG4QN4gbxI24QdwgbhA3iBvEjbhB3CBuEDeIG8QN4kbcIG4QN4gbxA3iRtwgbhA3iBvEDeJG3CBuKIjSHfi0vX/14eSwPMhOM3uvf/0UVrtnuZvdWrteqlPWShd3Fvbx4CHXv/E+jT2Pv/Fu+GwtAXGDteRn98a8/b1mO/ZO+i3wZjHda9fa87mbXXN2Stx5VoQPolplIizH016t1hIQN4gbcYO4QdwgbhA3iBtxg7hB3CBuEDeIG3GDuEHcIG4QN4gbxI24QdwgbhA3iBvEjbhB3CBuEDeIG8SNuKFsIiP4fbVKFFpxdXRftoOVxP2PZYdQ9ZKGQVhLQNwgbsQN4gZxg7hB3CBuEDfiBnGDuEHcIG4QN+IGcYO4QdwgbhA34gZxg7hB3CBuEDfiBnGDuEHcIG4QN4gbcYO4QdwgbhA3iBtxg7hB3CBuEDd8I/r84OjiPursXQ6MhgKKv4z74mY4l17GhLUExA1/sHPvpteBUVAyt68CDAAMj0q/wQVtqQAAAABJRU5ErkJggg=="

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	/**
	 * Created by zhihaoyao on 2017/3/28.
	 */

	var object = {
	    //获取url
	    getQueryString: function (name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null)return unescape(r[2]);
	        return null;
	    }
	};

	module.exports = object;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */,
/* 64 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"col-xs-12 col-sm-12 sendcenter\">\n    <div style=\"max-width: 780px;margin: auto\">\n        <!--上传资料-->\n        <div class=\"upload\">\n            <div class=\"right\">\n                <!--上传按钮-->\n                <div class=\"button\">\n                    <div class=\"two\"></div>\n                    <p :if=\"@type == 1\">请上传被保险人的[体检报告]<br>\n                      </p>\n                    <!--<p :if=\"@type == 2\">请上传被保险人的[投保确认书]</p>-->\n                    <p :if=\"@type == 3\">请上传身份证件正反面照片</p>\n                </div>\n                <div class=\"three\"></div>\n            </div>\n            <div class=\"uploadcenter\">\n                <div class=\"upcent\">\n                    <button id=\"upload-target\"><img :attr=\"{src:@anniu}\"></button>\n                    <span :if=\"@type == 1\">体检报告</span>\n                    <span :if=\"@type == 3\">证件资料</span>\n                    <div class=\"yq\">允许上传的格式为：jpg、jpeg、png、gif、pdf,大小不超过10M</div>\n                </div>\n            </div>\n            <div style=\"text-align: center\" :if=\"@type == 1\">\n                <div :if=\"typeUpload == 101\"><a href=\"physicalRequirements.html\" style=\"cursor: pointer;text-decoration:underline;color:#2179ce\" target=\"_blank\">点击了解体检资料要求</a></div>\n                <div :if=\"typeUpload == 202\" style=\"color:#2179ce\">健康告知问卷有异常情况的，请提供有关病历和检查报告</div>\n            </div>\n            <div id=\"upload-view\" style=\"float: left;width: 100%\"></div>\n            <div id=\"log\" style=\"font-size: 10px;color:red;float: left\"></div>\n            <div style=\"clear: both\"></div>\n\n        </div>\n    </div>\n</div>";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by brave on 17/3/28.
	 */

	__webpack_require__(66);

	avalon.component('ms-alert-modal', {
	    defaults: {
	        modalId:'defautModal',
	        title:'系统提示',
	        content:'默认值',
	        cancel:'',
	        confirm:'确认',
	        isShowModal: false,
	        closeCallback: function () {
	            avalon.log('关闭回调带没有绑定');
	        },
	        modal_confirm: function () {
	            this.isShowModal = false;
	            // avalon.log(window.document.getElementById("#defautModal").style.display);
	            // window.document.getElementById("#defautModal").style.display = "none";
	            $(".defautModal").css("display","none")
	            this.closeCallback();
	        },
	        modal_cancel: function () {
	            this.isShowModal = false;
	            // window.document.getElementById("#defautModal").style.display = "none";
	            $(".defautModal").css("display","none")

	        },

	        open:function(text, callback){
	            this.content = text;
	            this.isShowModal = true;
	            // window.document.getElementById("#defautModal").style.display = "block";
	            $(".defautModal").css("display","block")

	            if(callback){
	                this.closeCallback = callback;
	            }else{
	                this.closeCallback = false;
	            }
	        },
	        onInit: function () {
	            // this.modalWidth = document.documentElement.clientWidth;
	            // this.modalHeight = document.documentElement.clientHeight;
	        },
	        onReady: function () {
	            avalon.log('WIDGET:alert:onReady()');
	            window.alertModal = this;
	        }

	    },
	    template: __webpack_require__(68)
	});


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"modal defautModal\"  :if=\"@isShowModal == true\"  role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\" style=\"border: 1px solid #30aaff\">\r\n                <div class=\"modal-header\">\r\n                    <div class=\"modal-title\" id=\"myModalLabel\">{{title}}\r\n                        <div class=\"closeimg\" onclick=\"\" :click=\"@modal_cancel\">\r\n                            <img src=\"" + __webpack_require__(69) + "\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            <div class=\"modal-body\">\r\n                {{content}}\r\n            </div>\r\n            <div class=\"modal-footer\" style=\"border: none\">\r\n                <button type=\"button\" class=\" btn-default1\" data-dismiss=\"modal\" :if=\"@cancel || @cancel != ''\" onclick=\"\" :click=\"@modal_cancel\">{{@cancel}}</button>\r\n                <button type=\"button\" class=\" btn-primary1\" onclick=\"\" :click=\"@modal_confirm\">{{confirm}}</button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAACXBIWXMAAAsSAAALEgHS3X78AAAAvklEQVRIx63Wyw3CMBBF0ZsOKIUSKMUlUEJKoISUwiIFUAodDBsjLOPPsz2Rskik3LPJyLOZGcAOvIEHPtcduAA7Zob9riM+r9xH0uP7MjghaTykgAfyF8+BFaQYLwEzSDVeA0aQZrwFKEg33gNaiBRXgBIix1UgR+T4CICZnUn8VL+b+c+H5mRmiIbmZHaIZISFIZKQ6QlVkZW4hKzGu4hHvIl4xatIfiYHhzM5RdjiVnGLW8XLaau4xq3i+QFGGmWlOxJcrgAAAABJRU5ErkJggg=="

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var interface = __webpack_require__(71);
	var config = __webpack_require__(4);
	__webpack_require__(77);

	//cataloguebool产品目录

	avalon.component('ms-navigation', {
	    template: __webpack_require__(79),
	    defaults: {
	        status: 0,//0 默认两者显示 1,显示产品目录  2,我的订单
	        isCall: false,
	        isLogin: false,
	        isMyOrder: false,
	        mobile: false,
	        order_type:config.order_type,
	        organization_id:'',
	        navActive:'',
	        Ygsmstatus:1,
	        goToLogin: function () {
	            window.location.href = 'login.html?order_type='+ this.order_type + "&organization_id=" + this.organization_id;
	        },
	        goToindex:function () {
	            window.location.href = 'index.html?order_type='+ this.order_type + "&organization_id=" + this.organization_id;
	        },
	        logOut: function () {
	            var deferred = Deferred();
	            var that = this
	            interface.post("userLogOut")
	                .then(function (data) {
	                    if (data.statusCode == 1 || data.statusCode == '1') {
	                        window.alertModal.open('您已成功退出登录', function () {
	                            location.href = 'login.html?order_type='+ that.order_type + "&organization_id=" + that.organization_id;
	                        })
	                    } else {
	                        window.alertModal.open(data.msg)
	                    }
	                })
	                .otherwise(function (res) {
	                    window.alertModal.open('系统超时');
	                });
	            return deferred.promise;
	        },
	        goToMyOrder: function () {
	            var deferred = Deferred();
	            var that = this;
	            interface.post("getUserInfo", '')
	                .then(function (data) {
	                    if (data.statusCode == 1) {
	                        vm.isLogin = true;
	                        location.href = 'myOrder.html?order_type='+ that.order_type + "&organization_id=" + that.organization_id;
	                    } else {
	                        vm.isLogin = false;
	                        alertModal.open("您尚未登录，点击确定为您跳转至登录页", function () {
	                            location.href = 'login.html' + '?next=myOrder.html';
	                        });
	                    }
	                })
	                .otherwise(function (res) {
	                    deferred.reject('系统超时');
	                });
	            return deferred.promise;
	        },
	        goToProduct: function () {
	            window.location.href = 'index.html?order_type='+ this.order_type + "&organization_id=" + this.organization_id;
	        },
	        onReady: function () {
	            var that = this;

	            if (document.body.clientWidth < 750) {
	                that.mobile = true;
	            } else {
	                that.mobile = false;

	            }
	            $(window).resize(function () {
	                if (document.body.clientWidth < 750) {
	                    that.mobile = true;

	                } else {
	                    that.mobile = false;

	                }

	            })

	        }
	    }
	});






	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by brave on 17/3/28.
	 */

	var config = __webpack_require__(4);
	__webpack_require__(72);

	function showLoading() {
	    if (window.loading) {
	        window.loading.open();
	    }
	}

	function hideLoading() {
	    if (window.loading) {
	        window.loading.close();
	    }
	}

	var object = {
	    post: function (interfaceName, data) {
	        var deferred = Deferred();
	        showLoading();
	        $.ajax({
	            url: config.host + config.appName + "/" + interfaceName,
	            type: 'post',
	            timeout: 180000,
	            data: data,
	            dataType: 'json',
	            success: function (data) {
	                hideLoading();
	                deferred.resolve(data);
	            },
	            error: function (res, error) {
	                hideLoading();
	                alertModal.open('系统请求超时');
	                deferred.reject(res);
	            }
	        });
	        return deferred.promise
	    },
	    postToNoLoading: function (interfaceName, data) {
	        var deferred = Deferred();
	        $.ajax({
	            url: config.host + config.appName + "/" + interfaceName,
	            type: 'post',
	            timeout: 180000,
	            data: data,
	            dataType: 'json',
	            success: function (data) {
	                deferred.resolve(data);
	            },
	            error: function (res, error) {
	                alertModal.open('系统请求超时');
	                deferred.reject(res);
	            }
	        });
	        return deferred.promise
	    }
	};



	module.exports = object;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Created by brave on 17/3/28.
	 */

	__webpack_require__(73);
	var loadingGif = __webpack_require__(75);

	avalon.component('ms-loading', {
	    defaults: {
	        tid: 'loading-' + parseInt(Math.random() * 100000),
	        show: false,
	        loadingGif: loadingGif,
	        close: function () {
	            this.show = false;
	        },
	        open: function () {
	            this.show = true;
	            document.getElementById(this.tid).style.height = window.screen.height + 'px';
	        },
	        onReady: function () {
	            window.loading = this;
	        }

	    },
	    template: __webpack_require__(76)
	});



/***/ }),
/* 73 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */,
/* 75 */
/***/ (function(module, exports) {

	module.exports = "data:image/gif;base64,R0lGODlhgACAAKIAAP///93d3bu7u5mZmQAA/wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAEACwCAAIAfAB8AAAD/0i63P4wygYqmDjrzbtflvWNZGliYXiubKuloivPLlzReD7al+7/Eh5wSFQIi8hHYBkwHUmD6CD5YTJLz49USuVYraRsZ7vtar7XnQ1Kjpoz6LRHvGlz35O4nEPP2O94EnpNc2sef1OBGIOFMId/inB6jSmPdpGScR19EoiYmZobnBCIiZ95k6KGGp6ni4wvqxilrqBfqo6skLW2YBmjDa28r6Eosp27w8Rov8ekycqoqUHODrTRvXsQwArC2NLF29UM19/LtxO5yJd4Au4CK7DUNxPebG4e7+8n8iv2WmQ66BtoYpo/dvfacBjIkITBE9DGlMvAsOIIZjIUAixliv9ixYZVtLUos5GjwI8gzc3iCGghypQqrbFsme8lwZgLZtIcYfNmTJ34WPTUZw5oRxdD9w0z6iOpO15MgTh1BTTJUKos39jE+o/KS64IFVmsFfYT0aU7capdy7at27dw48qdS7eu3bt480I02vUbX2F/JxYNDImw4GiGE/P9qbhxVpWOI/eFKtlNZbWXuzlmG1mv58+gQ4seTbq06dOoU6vGQZJy0FNlMcV+czhQ7SQmYd8eMhPs5BxVdfcGEtV3buDBXQ+fURxx8oM6MT9P+Fh6dOrH2zavc13u9JXVJb520Vp8dvC76wXMuN5Sepm/1WtkEZHDefnzR9Qvsd9+/wi8+en3X0ntYVcSdAE+UN4zs7ln24CaLagghIxBaGF8kFGoIYV+Ybghh841GIyI5ICIFoklJsigihmimJOLEbLYIYwxSgigiZ+8l2KB+Ml4oo/w8dijjcrouCORKwIpnJIjMnkkksalNeR4fuBIm5UEYImhIlsGCeWNNJphpJdSTlkml1jWeOY6TnaRpppUctcmFW9mGSaZceYopH9zkjnjUe59iR5pdapWaGqHopboaYua1qije67GJ6CuJAAAIfkEBQUABAAsCgACAFcAMAAAA/9Iutz+ML5Ag7w46z0r5WAoSp43nihXVmnrdusrv+s332dt4Tyo9yOBUJD6oQBIQGs4RBlHySSKyczVTtHoidocPUNZaZAr9F5FYbGI3PWdQWn1mi36buLKFJvojsHjLnshdhl4L4IqbxqGh4gahBJ4eY1kiX6LgDN7fBmQEJI4jhieD4yhdJ2KkZk8oiSqEaatqBekDLKztBG2CqBACq4wJRi4PZu1sA2+v8C6EJexrBAD1AOBzsLE0g/V1UvYR9sN3eR6lTLi4+TlY1wz6Qzr8u1t6FkY8vNzZTxaGfn6mAkEGFDgL4LrDDJDyE4hEIbdHB6ESE1iD4oVLfLAqPETIsOODwmCDJlv5MSGJklaS6khAQAh+QQFBQAEACwfAAIAVwAwAAAD/0i63P5LSAGrvTjrNuf+YKh1nWieIumhbFupkivPBEzR+GnnfLj3ooFwwPqdAshAazhEGUXJJIrJ1MGOUamJ2jQ9QVltkCv0XqFh5IncBX01afGYnDqD40u2z76JK/N0bnxweC5sRB9vF34zh4gjg4uMjXobihWTlJUZlw9+fzSHlpGYhTminKSepqebF50NmTyor6qxrLO0L7YLn0ALuhCwCrJAjrUqkrjGrsIkGMW/BMEPJcphLgDaABjUKNEh29vdgTLLIOLpF80s5xrp8ORVONgi8PcZ8zlRJvf40tL8/QPYQ+BAgjgMxkPIQ6E6hgkdjoNIQ+JEijMsasNY0RQix4gKP+YIKXKkwJIFF6JMudFEAgAh+QQFBQAEACw8AAIAQgBCAAAD/kg0PPowykmrna3dzXvNmSeOFqiRaGoyaTuujitv8Gx/661HtSv8gt2jlwIChYtc0XjcEUnMpu4pikpv1I71astytkGh9wJGJk3QrXlcKa+VWjeSPZHP4Rtw+I2OW81DeBZ2fCB+UYCBfWRqiQp0CnqOj4J1jZOQkpOUIYx/m4oxg5cuAaYBO4Qop6c6pKusrDevIrG2rkwptrupXB67vKAbwMHCFcTFxhLIt8oUzLHOE9Cy0hHUrdbX2KjaENzey9Dh08jkz8Tnx83q66bt8PHy8/T19vf4+fr6AP3+/wADAjQmsKDBf6AOKjS4aaHDgZMeSgTQcKLDhBYPEswoA1BBAgAh+QQFBQAEACxOAAoAMABXAAAD7Ei6vPOjyUkrhdDqfXHm4OZ9YSmNpKmiqVqykbuysgvX5o2HcLxzup8oKLQQix0UcqhcVo5ORi+aHFEn02sDeuWqBGCBkbYLh5/NmnldxajX7LbPBK+PH7K6narfO/t+SIBwfINmUYaHf4lghYyOhlqJWgqDlAuAlwyBmpVnnaChoqOkpaanqKmqKgGtrq+wsbA1srW2ry63urasu764Jr/CAb3Du7nGt7TJsqvOz9DR0tPU1TIA2ACl2dyi3N/aneDf4uPklObj6OngWuzt7u/d8fLY9PXr9eFX+vv8+PnYlUsXiqC3c6PmUUgAACH5BAUFAAQALE4AHwAwAFcAAAPpSLrc/m7IAau9bU7MO9GgJ0ZgOI5leoqpumKt+1axPJO1dtO5vuM9yi8TlAyBvSMxqES2mo8cFFKb8kzWqzDL7Xq/4LB4TC6bz1yBes1uu9uzt3zOXtHv8xN+Dx/x/wJ6gHt2g3Rxhm9oi4yNjo+QkZKTCgGWAWaXmmOanZhgnp2goaJdpKGmp55cqqusrZuvsJays6mzn1m4uRAAvgAvuBW/v8GwvcTFxqfIycA3zA/OytCl0tPPO7HD2GLYvt7dYd/ZX99j5+Pi6tPh6+bvXuTuzujxXens9fr7YPn+7egRI9PPHrgpCQAAIfkEBQUABAAsPAA8AEIAQgAAA/lIutz+UI1Jq7026h2x/xUncmD5jehjrlnqSmz8vrE8u7V5z/m5/8CgcEgsGo/IpHLJbDqf0Kh0ShBYBdTXdZsdbb/Yrgb8FUfIYLMDTVYz2G13FV6Wz+lX+x0fdvPzdn9WeoJGAYcBN39EiIiKeEONjTt0kZKHQGyWl4mZdREAoQAcnJhBXBqioqSlT6qqG6WmTK+rsa1NtaGsuEu6o7yXubojsrTEIsa+yMm9SL8osp3PzM2cStDRykfZ2tfUtS/bRd3ewtzV5pLo4eLjQuUp70Hx8t9E9eqO5Oku5/ztdkxi90qPg3x2EMpR6IahGocPCxp8AGtigwQAIfkEBQUABAAsHwBOAFcAMAAAA/9Iutz+MMo36pg4682J/V0ojs1nXmSqSqe5vrDXunEdzq2ta3i+/5DeCUh0CGnF5BGULC4tTeUTFQVONYAs4CfoCkZPjFar83rBx8l4XDObSUL1Ott2d1U4yZwcs5/xSBB7dBMBhgEYfncrTBGDW4WHhomKUY+QEZKSE4qLRY8YmoeUfkmXoaKInJ2fgxmpqqulQKCvqRqsP7WooriVO7u8mhu5NacasMTFMMHCm8qzzM2RvdDRK9PUwxzLKdnaz9y/Kt8SyR3dIuXmtyHpHMcd5+jvWK4i8/TXHff47SLjQvQLkU+fG29rUhQ06IkEG4X/Rryp4mwUxSgLL/7IqFETB8eONT6ChCFy5ItqJomES6kgAQAh+QQFBQAEACwKAE4AVwAwAAAD/0i63A4QuEmrvTi3yLX/4MeNUmieITmibEuppCu3sDrfYG3jPKbHveDktxIaF8TOcZmMLI9NyBPanFKJp4A2IBx4B5lkdqvtfb8+HYpMxp3Pl1qLvXW/vWkli16/3dFxTi58ZRcChwIYf3hWBIRchoiHiotWj5AVkpIXi4xLjxiaiJR/T5ehoomcnZ+EGamqq6VGoK+pGqxCtaiiuJVBu7yaHrk4pxqwxMUzwcKbyrPMzZG90NGDrh/JH8t72dq3IN1jfCHb3L/e5ebh4ukmxyDn6O8g08jt7tf26ybz+m/W9GNXzUQ9fm1Q/APoSWAhhfkMAmpEbRhFKwsvCsmosRIHx444PoKcIXKkjIImjTzjkQAAIfkEBQUABAAsAgA8AEIAQgAAA/VIBNz+8KlJq72Yxs1d/uDVjVxogmQqnaylvkArT7A63/V47/m2/8CgcEgsGo/IpHLJbDqf0Kh0Sj0FroGqDMvVmrjgrDcTBo8v5fCZki6vCW33Oq4+0832O/at3+f7fICBdzsChgJGeoWHhkV0P4yMRG1BkYeOeECWl5hXQ5uNIAOjA1KgiKKko1CnqBmqqk+nIbCkTq20taVNs7m1vKAnurtLvb6wTMbHsUq4wrrFwSzDzcrLtknW16tI2tvERt6pv0fi48jh5h/U6Zs77EXSN/BE8jP09ZFA+PmhP/xvJgAMSGBgQINvEK5ReIZhQ3QEMTBLAAAh+QQFBQAEACwCAB8AMABXAAAD50i6DA4syklre87qTbHn4OaNYSmNqKmiqVqyrcvBsazRpH3jmC7yD98OCBF2iEXjBKmsAJsWHDQKmw571l8my+16v+CweEwum8+hgHrNbrvbtrd8znbR73MVfg838f8BeoB7doN0cYZvaIuMjY6PkJGSk2gClgJml5pjmp2YYJ6dX6GeXaShWaeoVqqlU62ir7CXqbOWrLafsrNctjIDwAMWvC7BwRWtNsbGFKc+y8fNsTrQ0dK3QtXAYtrCYd3eYN3c49/a5NVj5eLn5u3s6e7x8NDo9fbL+Mzy9/T5+tvUzdN3Zp+GBAAh+QQJBQAEACwCAAIAfAB8AAAD/0i63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdArcQK2TOL7/nl4PSMwIfcUk5YhUOh3M5nNKiOaoWCuWqt1Ou16l9RpOgsvEMdocXbOZ7nQ7DjzTaeq7zq6P5fszfIASAYUBIYKDDoaGIImKC4ySH3OQEJKYHZWWi5iZG0ecEZ6eHEOio6SfqCaqpaytrpOwJLKztCO2jLi1uoW8Ir6/wCHCxMG2x7muysukzb230M6H09bX2Nna29zd3t/g4cAC5OXm5+jn3Ons7eba7vHt2fL16tj2+QL0+vXw/e7WAUwnrqDBgwgTKlzIsKHDh2gGSBwAccHEixAvaqTYcFCjRoYeNyoM6REhyZIHT4o0qPIjy5YTTcKUmHImx5cwE85cmJPnSYckK66sSAAj0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gwxZJAAA7"

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"loading\" :if=\"@show\" :attr=\"{id:@tid}\">\r\n    <table class=\"loading_table\">\r\n        <tbody>\r\n        <tr>\r\n            <td>\r\n                <div class=\"loading_contain_div\">\r\n                    <img class=\"loading_img\" :attr=\"{src:@loadingGif}\">\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"\">\r\n    <div class=\"navigation\" :if=\"!@mobile\"\r\n         style=\"position: fixed;top: 0px;left:0;width: 100%;background-color: white;z-index: 100\">\r\n        <div class=\"nav_main\" id=\"nav_main\">\r\n            <div class=\"logo_img fl col-md-4 col-xs-12\">\r\n                <img style=\"width: 202px ; height: 48px\" src=\"" + __webpack_require__(80) + "\" alt=\"\">\r\n            </div>\r\n            <div class=\"\" style=\"float: right;margin-top: 8px\">\r\n                <!--<div class=\"nav_mobile_number fl\" style=\"margin-top: 5px;\">-->\r\n                <!--如有疑问，请致电客服热线：<a href=\"tel:95362\"><span class=\"navigation_red\">95362转3</span></a>-->\r\n                <!--</div>-->\r\n\r\n                <div :if=\"@Ygsmstatus==1\" style=\"display: inline-block\">\r\n                    <!--<div class=\"vline\" :visible=\"@status!=2\"></div>-->\r\n                    <div class=\"catalogue\" onclick=\"\" :click=\"@goToProduct\" style=\"cursor: pointer\"\r\n                         style=\"text-decoration: none\">产品列表\r\n                    </div>\r\n                    <div :visible=\"!@isLogin\" class=\"vline\"></div>\r\n                    <div :visible=\"!@isLogin\" class=\"m_order\" onclick=\"\" :click=\"@goToLogin\" style=\"cursor:pointer;\">\r\n                        请登录\r\n                    </div>\r\n                    <div :visible=\"@isLogin\" class=\"vline\"></div>\r\n                    <div :visible=\"@isLogin\" class=\"logout_img\" onclick=\"\" :click=\"@logOut\" style=\"cursor: pointer;\">\r\n                        退出登录\r\n                    </div>\r\n\r\n                    <div :visible=\"!@isMyOrder && @status!=1\" class=\"vline\"></div>\r\n                    <div :visible=\"!@isMyOrder && @status!=1\"\r\n                         :class=\"['m_order',(@navActive == 'myOrder'? 'header-nav':'')]\" onclick=\"\"\r\n                         :click=\"@goToMyOrder\" style=\"cursor: pointer;\">我的订单\r\n                    </div>\r\n                    <!--<div class=\"vline\"></div>-->\r\n                    <!--<div :class=\"['logout_img',(@navActive == 'index' ? 'header-nav':'')]\" onclick=\"\" :click=\"@goToindex\" style=\"cursor: pointer;margin-top: 4px;\">产品列表</div>-->\r\n                </div>\r\n                <div class=\"clb\"></div>\r\n            </div>\r\n            <div class=\"clb\"></div>\r\n        </div>\r\n    </div>\r\n    <div :if=\"@mobile\" class=\"navigation\">\r\n        <nav class=\"navbar  navbar-fixed-top site-navbar\" style=\"background-color: white\">\r\n            <div class=\"container\">\r\n                <div class=\"navbar-header\" style=\"position: relative;\">\r\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" style=\"color: #666666\" data-toggle=\"collapse\"\r\n                            data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n                        <span class=\"sr-only\">Toggle navigation</span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                    </button>\r\n                    <img style=\"position: absolute;top:13px;left: 15px;width: 147px\" src=\"" + __webpack_require__(80) + "\" alt=\"\">\r\n                    <!--<a class=\"navbar-brand\" href=\"../../\"><img src=\"./hw2_logo.png\" width=\"60%\" alt=\"\"></a>-->\r\n                </div>\r\n\r\n                <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n                    <ul class=\"nav navbar-nav\" :if=\"@Ygsmstatus==1\">\r\n                        <!--<li :visible=\"@status!=2\">-->\r\n                        <!--<div class=\"\" onclick=\"\" :click=\"@goToProduct\">产品列表</div>-->\r\n                        <!--</li>-->\r\n\r\n                        <li :visible=\"!@isMyOrder && @status!=1\">\r\n                            <div onclick=\"\" :click=\"@goToProduct\"  style=\"cursor: pointer\" style=\"text-decoration: none\">产品列表</div>\r\n                        </li>\r\n\r\n                        <li :visible=\"!@isMyOrder && @status!=1\">\r\n                            <div :class=\"[(@navActive == 'myOrder'? 'header-nav':'')]\" onclick=\"\" :click=\"@goToMyOrder\">\r\n                                我的订单\r\n                            </div>\r\n                        </li>\r\n                        <li :visible=\"!@isLogin\">\r\n                            <div class=\"\" onclick=\"\" :click=\"@goToLogin\" style=\"cursor:pointer\">请登录</div>\r\n                        </li>\r\n                        <li :visible=\"@isLogin\">\r\n                            <div onclick=\"\" :click=\"@logOut\">退出登录</div>\r\n                        </li>\r\n                        <!--<li>-->\r\n                        <!--<div :class=\"['logout_imgmobile',(@navActive == 'index' ? 'header-nav':'')]\" onclick=\"\" :click=\"@goToindex\" style=\"cursor: pointer;\">产品列表</div>-->\r\n                        <!--</li>-->\r\n                        <!--<li>-->\r\n                        <!--<div>如有疑问，请致电客服热线<a href=\"tel:95362\"><span class=\"navigation_red\">95362转3</span></a></div>-->\r\n                        <!--</li>-->\r\n\r\n                    </ul>\r\n                    <!--<ul class=\"nav navbar-nav\" :if=\"@Ygsmstatus!=1\">-->\r\n                    <!--<li>-->\r\n                    <!--<div>如有疑问，请致电客服热线<a href=\"tel:95362\"><span class=\"navigation_red\">95362转3</span></a></div>-->\r\n                    <!--</li>-->\r\n                    <!--</ul>-->\r\n\r\n                </div>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/e8c1f0d3897074c99dc2cf25c4cb965c.png";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by brave on 17/12/10.
	 */

	//region 工具
	var config = __webpack_require__(4);
	var interface = __webpack_require__(71);
	var urlParams = __webpack_require__(61);
	var validate = __webpack_require__(82);
	//endregion 工具

	var vm = avalon.define({
	    $id: "vm",

	    //region 辅助数据
	    aki_uploadbanner: __webpack_require__(83),
	    aki_uploadbutton: __webpack_require__(84),
	    aki_uploadpreview: __webpack_require__(41),
	    anniu: __webpack_require__(85),
	    showUpload: false,
	    id_card: '',
	    uploadType: 1,
	    order_type: config.order_type,
	    orderId: '',
	    userName: '',
	    previewDownloadFileUrl: config.previewDownloadFileUrl,
	    signatureFile: [],//体检文件
	    IdsignatureFile: [],//证件文件
	    UserInfo: '',
	    msg: '',
	    isLogin: false,
	    //endregion 辅助数据

	    //region 主逻辑
	    getUserInfo: function () {
	        avalon.log("CONTROLLER:getUserInfo()");
	        var that = this;
	        var deferred = Deferred();
	        interface.post("getUserInfo", '')
	            .then(function (data) {
	                if (data.statusCode == 1) {
	                    that.isLogin = true;
	                    that.userInfo = data.data;
	                    deferred.resolve()
	                } else {
	                    that.isLogin = false;
	                    alertModal.open(data.msg, function () {
	                        window.location.href = "isLogin.html?next=aki-8.html" + '&order_type=' + that.order_type + '&organization_id=' + that.organization_id;
	                    });
	                    deferred.reject(data.msg)
	                }
	            })
	            .otherwise(function (res) {
	                deferred.reject('系统超时');
	            });
	        return deferred.promise;
	    },
	    reload: function () {
	        var deferred = Deferred();
	        var that = this;
	        location.reload()
	        deferred.resolve();
	        // deferred.reject();
	        return deferred.promise;
	    },
	    getOrder: function (id) {
	        var that = this;
	        var deferred = Deferred();

	        var dataToPost = {id: id};
	        interface.post("getOrder", dataToPost)
	            .then(function (data) {
	                if (data.statusCode == 1) {
	                    that.userName = data.data.insurer_name;
	                    deferred.resolve()
	                } else {
	                    alertModal.open(data.msg, function () {
	                        window.location.href = "isLogin.html?next=aki-8.html" + '&order_type=' + that.order_type + '&organization_id=' + that.organization_id;
	                    });
	                    deferred.reject(data.msg)
	                }
	            })
	            .otherwise(function (res) {
	                deferred.reject('系统超时');
	            });

	        return deferred.promise;
	    },
	    goToMyOrder: function () {
	        var deferred = Deferred();
	        var that = this;
	        window.location.href = 'myOrder.html?' + 'order_type=' + that.order_type + '&organization_id=' + that.organization_id;
	        return deferred.promise;
	    },
	    encodeName: function (value) {
	        if (value) {
	            return encodeURI(value);
	        } else {
	            return value
	        }
	    },
	    getUserFile: function () {
	        avalon.log("CONTROLLER:getUserFile");
	        var that = this;
	        var deferred = Deferred();
	        var dataToPost = {orderId: that.orderId};
	        interface.post("getUserFile", dataToPost)
	            .then(function (data) {
	                if (data.statusCode == 1) {
	                    if (data.data.medicalReport.length > 0) {
	                        that.signatureFile = data.data.medicalReport;
	                    }
	                    if (data.data.idCardReport.length > 0) {
	                        that.IdsignatureFile = data.data.idCardReport;
	                    }
	                }
	                deferred.resolve()
	            })
	            .otherwise(function (res) {
	                deferred.reject('系统超时');
	            });
	        return deferred.promise;
	    },
	    initICUploadWidget: function (id_card) {
	        var deferred = Deferred();
	        var that = this;

	        var Uploader = Q.Uploader;
	        var uploader = new Uploader({
	            url: config.host + config.uploadFileAppName + '/uploadUserFile?id_card_number=' + id_card + '&file_type=3',
	            target: document.getElementById("upload_target_ic"),
	            view: document.getElementById("upload-view-ic"),
	            allows: ".jpg,.jpeg,.png,.gif,.pdf,.JPG,.JPEG,.PNG,.GIF,.PDF",
	            upName: "file",
	            on: {
	                //添加之前触发
	                add: function (task) {
	                    if (task.ext == '') {
	                        task.name = task.name + '.jpg';
	                        task.ext = '.jpg';
	                        task.disabled = false;
	                        task.state = 0
	                    } else {
	                        if (task.disabled) return alertModal.open("允许上传的文件格式为：" + 'jpg,jpeg,png,gif,pdf');
	                    }
	                    // log(task.name + ": 已添加!");
	                },

	                //任务移除后触发
	                remove: function (task) {
	                },
	                //取消上传任务后触发
	                cancel: function (task) {
	                },

	                //上传之前触发
	                upload: function (task) {
	                    //exe文件可以添加，但不会上传
	                    if (task.ext == ".exe") return false;
	                },

	                //上传完成后触发
	                complete: function (task) {
	                    if (task.state != Uploader.COMPLETE) return log(task.name + ": " + Uploader.getStatusText(task.state) + "!", 'ic');

	                    var json = task.json;
	                    if (!json) return log(task.name + ": 上传失败,请保证上传大小在10M内;上传不超过80个文件！<br />", 'ic');

	                    var statusCode = JSON.parse(task.response).statusCode;

	                    if (statusCode == -401) {
	                        uploadFailHandler(task, 'ic');
	                        alertModal.open("登录已失效,请重新登录！")
	                    }
	                    else if (statusCode != 1) {
	                        uploadFailHandler(task, 'ic');
	                        avalon.log(task.json)
	                        alertModal.open(task.json.msg)
	                    }
	                    uploader.resetInput();

	                    //this.list  为上传任务列表
	                    //this.index 为当前上传任务索引
	                    if (this.index >= this.list.length - 1) {
	                        //所有任务上传完成
	                        // log("所有任务上传完成：" + new Date());
	                    }
	                    return false;
	                }

	            }
	        });

	        deferred.resolve();
	        // deferred.reject();
	        return deferred.promise;
	    },
	    initMedicalUploadWidget: function (id_card) {
	        var deferred = Deferred();
	        var that = this;

	        var Uploader = Q.Uploader;
	        var uploader = new Uploader({
	            url: config.host + config.uploadFileAppName + '/uploadUserFile?id_card_number=' + id_card + '&file_type=1',
	            target: document.getElementById("upload_target_medical"),
	            view: document.getElementById("upload-view-medical"),
	            allows: ".jpg,.jpeg,.png,.gif,.pdf,.JPG,.JPEG,.PNG,.GIF,.PDF",
	            upName: "file",
	            on: {
	                //添加之前触发
	                add: function (task) {
	                    if (task.ext == '') {
	                        task.name = task.name + '.jpg';
	                        task.ext = '.jpg';
	                        task.disabled = false;
	                        task.state = 0
	                    } else {
	                        if (task.disabled) return alertModal.open("允许上传的文件格式为：" + 'jpg,jpeg,png,gif,pdf');
	                    }
	                    // log(task.name + ": 已添加!");
	                },

	                //任务移除后触发
	                remove: function (task) {
	                },
	                //取消上传任务后触发
	                cancel: function (task) {
	                },

	                //上传之前触发
	                upload: function (task) {
	                    //exe文件可以添加，但不会上传
	                    if (task.ext == ".exe") return false;
	                },

	                //上传完成后触发
	                complete: function (task) {
	                    if (task.state != Uploader.COMPLETE) return log(task.name + ": " + Uploader.getStatusText(task.state) + "!", 'medical');

	                    var json = task.json;
	                    if (!json) return log(task.name + ": 上传失败,请保证上传大小在10M内;上传不超过80个文件！<br />", 'medical');

	                    var statusCode = JSON.parse(task.response).statusCode;

	                    if (statusCode == -401) {
	                        uploadFailHandler(task, 'medical');
	                        alertModal.open("登录已失效,请重新登录！")
	                    }
	                    else if (statusCode != 1) {
	                        uploadFailHandler(task, 'medical');
	                        alertModal.open(task.json.msg)
	                    }
	                    uploader.resetInput();

	                    //this.list  为上传任务列表
	                    //this.index 为当前上传任务索引
	                    if (this.index >= this.list.length - 1) {
	                        //所有任务上传完成
	                        // log("所有任务上传完成：" + new Date());
	                    }
	                    return false;
	                }

	            }
	        });

	        deferred.resolve();
	        // deferred.reject();
	        return deferred.promise;
	    },
	    initOtherUploadWidget: function (id_card) {
	        var deferred = Deferred();
	        var that = this;

	        var Uploader = Q.Uploader;
	        var uploader = new Uploader({
	            url: config.host + config.uploadFileAppName + '/uploadUserFile?id_card_number=' + id_card + '&file_type=9',
	            target: document.getElementById("upload_target_other"),
	            view: document.getElementById("upload-view-other"),
	            allows: ".jpg,.jpeg,.png,.gif,.pdf,.JPG,.JPEG,.PNG,.GIF,.PDF",
	            upName: "file",
	            on: {
	                //添加之前触发
	                add: function (task) {
	                    if (task.ext == '') {
	                        task.name = task.name + '.jpg';
	                        task.ext = '.jpg';
	                        task.disabled = false;
	                        task.state = 0
	                    } else {
	                        if (task.disabled) return alertModal.open("允许上传的文件格式为：" + 'jpg,jpeg,png,gif,pdf');
	                    }
	                    // log(task.name + ": 已添加!");
	                },

	                //任务移除后触发
	                remove: function (task) {
	                },
	                //取消上传任务后触发
	                cancel: function (task) {
	                },

	                //上传之前触发
	                upload: function (task) {
	                    //exe文件可以添加，但不会上传
	                    if (task.ext == ".exe") return false;
	                },

	                //上传完成后触发
	                complete: function (task) {
	                    if (task.state != Uploader.COMPLETE) return log(task.name + ": " + Uploader.getStatusText(task.state) + "!", 'other');

	                    var json = task.json;
	                    if (!json) return log(task.name + ": 上传失败,请保证上传大小在10M内;上传不超过80个文件！<br />", 'other');

	                    var statusCode = JSON.parse(task.response).statusCode;

	                    if (statusCode == -401) {
	                        alertModal.open("登录已失效,请重新登录！")
	                        uploadFailHandler(task, 'other');
	                    }
	                    else if (statusCode != 1) {
	                        alertModal.open(task.json.msg)
	                        uploadFailHandler(task, 'other');
	                    }
	                    uploader.resetInput();

	                    //this.list  为上传任务列表
	                    //this.index 为当前上传任务索引
	                    if (this.index >= this.list.length - 1) {
	                        //所有任务上传完成
	                        // log("所有任务上传完成：" + new Date());
	                    }
	                    return false;
	                }

	            }
	        });

	        deferred.resolve();
	        // deferred.reject();
	        return deferred.promise;
	    },
	    confirmUpload: function () {
	        var deferred = Deferred();
	        var that = this;
	        var id_card = that.id_card
	        that.validateIdCard()
	            .then(function () {
	                that.showUpload = true;
	                $('#id_card').attr('disabled', 'true')
	                that.initICUploadWidget(id_card)
	                that.initMedicalUploadWidget(id_card)
	                that.initOtherUploadWidget(id_card)
	            })
	            .otherwise(function (msg) {
	                avalon.log("otherwise返回的错误信息");
	                setTimeout(function () {
	                    avalon.log(msg);
	                    alertModal.open(msg)
	                }, 50)
	            });
	        deferred.resolve();
	        // deferred.reject();
	        return deferred.promise;
	    },
	    //endregion 主逻辑

	    // region 验证
	    validateIdCard: function () {
	        var deferred = Deferred();
	        var that = this;
	        var result = true;

	        avalon.log("validateMyOrder:that.myOrder", {ic_number: that.id_card});

	        //region 校验订单逻辑

	        if (validate.checkIdNull({ic_number: that.id_card})) {
	        } else {
	            result = false;
	            deferred.reject('证件号码不能为空')
	        }
	        if (validate.checkIcNumberSmallLetter({ic_number: that.id_card})) {
	        } else {
	            result = false;
	            deferred.reject('证件号码不能出现小写字符')
	        }
	        if (validate.checkIcNumber({ic_number: that.id_card})) {

	        } else {
	            result = false;
	            deferred.reject('')
	        }
	        if (result) {
	            deferred.resolve();
	        }
	        return deferred.promise
	    },

	    // endregion 验证

	    // region 监听数据
	    bindListeners: function () {
	        var deferred = Deferred();
	        var that = this;

	        // $('#id_card').blur(function () {
	        //
	        // });
	        // that.$watch("id_card", function observe(newV, oldV) {
	        //
	        //
	        // });


	        deferred.resolve();
	        // deferred.reject();
	        return deferred.promise;
	    },
	    // endregion 监听数据

	    //region 监听事件
	    clickNext: function () {
	        var that = this;
	        window.location.href = 'myOrder.html?' + 'order_type=' + that.order_type + '&organization_id=' + that.organization_id;
	    },
	    //endregion 监听事件


	});

	vm.bindListeners();


	function log(msg, id) {

	    document.getElementById("log" + '-' + id).innerHTML += (msg != undefined ? msg : "") + "<br />";
	}

	function uploadFailHandler(task, id) {
	    // $('#upload-view .' + task.id).css("display", 'none');
	    $('#upload-view-' + id + ' .' + task.id).remove();
	    $('br').remove();
	    log(task.name + ": 上传失败,请重试<br />", id)
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var cities = __webpack_require__(22);
	var districts = __webpack_require__(23);
	var pro = __webpack_require__(21);

	var validate = {
	    pro: pro,
	    cities: cities,
	    districts: districts,

	    name: {
	        //
	        validateNameWithChineseAndEnGT2: function (value) {
	            var result = {isValid: true, tips: ''};
	            var patt1 = new RegExp(/^[\u4e00-\u9fa5]{2}[a-zA-Z]{4}$/);//验证只能中文输入

	            avalon.log("验证：validateNameWithChineseAndEnGT2:", value, patt1.test(value))
	            avalon.log("验证：validateNameWithChineseAndEnGT2:", validate.name.validateNameChinese(value))


	            if (validate.name.validateNameChinese(value) <= 10 && validate.name.validateNameChinese(value) > 1) {
	            } else {
	                result.tips = "员工姓名必须含有一个以上、十一个以下中文字符，或者四位或以上英文字符，且不能含有阿拉伯数字或空格";
	                result.isValid = false;
	            }
	            return result.isValid;
	        },
	        validateNameWithENGT2: function (value) {

	            var result = {isValid: true, tips: ''};
	            var patt1 = new RegExp(/^[a-zA-Z\s]{4}$/);//验证只能中文输入
	            avalon.log("验证：validateNameWithENGT2:", value, validate.name.validateNameEnglish(value))
	            // if (!patt1.test(value)) {
	            //     result.isValid = false;
	            // }
	            if (validate.name.validateNameEnglish(value) > 3) {
	            } else {
	                result.tips = "员工姓名必须含有一个以上、十一个以下中文字符，或者四位或以上英文字符，且不能含有阿拉伯数字或空格";
	                result.isValid = false;
	            }
	            return result.isValid;
	        },
	        validateNameChinese: function (str) {
	            var patt1 = new RegExp(/^[\u0391-\uFFE5]+$/);

	            var strNumber = 0;

	            for (var i = 0; i < str.length; i++) {
	                if (patt1.test(str[i])) {
	                    strNumber = strNumber + 1;
	                }
	            }
	            return strNumber

	        },

	        validateNameEnglish: function (str) {
	            var patt1 = new RegExp(/^[A-Za-z]+$/);

	            var strNumber = 0;

	            for (var i = 0; i < str.length; i++) {
	                if (patt1.test(str[i])) {
	                    strNumber = strNumber + 1;
	                }
	            }
	            return strNumber
	        },
	    },
	    insured_amount: {},
	    pay_year: {},
	    ic: {
	        ic_expired_date: function () {

	        },
	        ic_type_and_number: function (ic_number, ic_type, birthday) {
	            if (ic_number == '' || ic_number == null) {
	                alertModal.open('证件号不能为空');
	                return false;
	            } else {
	                switch (ic_type) {
	                    case "H"://户口本

	                        if (ic_number.length < 18) {
	                            alertModal.open('证件类型为身份证、户口本时,号码长度必须为18位');
	                            return false;
	                        } else {
	                            if (this.checkIdCard(ic_number)) {
	                                if ((ic_number.substring(6, 10) + '-' + ic_number.substring(10, 12) + '-' + ic_number.substring(12, 14)) == birthday) {
	                                    if (!this.checkSexAndId(data)) {
	                                        alertModal.open('证件号码与性别不匹配');

	                                        return false;
	                                    } else {
	                                        return true;
	                                    }
	                                } else {
	                                    alertModal.open('证件号码和出生日期不一致！请返回上一页确认正确的出生日期');

	                                    return false;
	                                }
	                            } else {
	                                alertModal.open('请输入正确的证件号');
	                                return false;
	                            }
	                        }


	                        break;
	                    case "I"://身份证
	                        if (ic_number.length < 18) {
	                            alertModal.open('证件类型为身份证、户口本时,号码长度必须为18位');
	                            return false;
	                        } else {
	                            if (this.checkIdCard(ic_number)) {
	                                if ((ic_number.substring(6, 10) + '-' + ic_number.substring(10, 12) + '-' + ic_number.substring(12, 14)) == birthday) {
	                                    if (!this.checkSexAndId(data)) {
	                                        alertModal.open('证件号码与性别不匹配');

	                                        return false;
	                                    } else {
	                                        return true;
	                                    }
	                                } else {
	                                    alertModal.open('证件号码和出生日期不一致！请返回上一页确认正确的出生日期。');
	                                    return false;
	                                }
	                            } else {
	                                alertModal.open('请输入正确的证件号');
	                                return false;
	                            }
	                        }

	                        break;
	                    case "L"://临时身份证
	                        if (ic_number.length < 18) {
	                            alertModal.open('证件类型为身份证、户口本时,号码长度必须为18位');

	                            return false;
	                        } else {
	                            if (this.checkIdCard(ic_number)) {
	                                if ((ic_number.substring(6, 10) + '-' + ic_number.substring(10, 12) + '-' + ic_number.substring(12, 14)) == birthday) {
	                                    if (!this.checkSexAndId(data)) {
	                                        alertModal.open('证件号码与性别不匹配');

	                                        return false;
	                                    } else {
	                                        return true;
	                                    }
	                                } else {
	                                    alertModal.open("证件号码和出生日期不一致！请返回上一页确认正确的出生日期。");
	                                    return false;
	                                }
	                            } else {
	                                alertModal.open("请输入正确的证件号");
	                                return false;
	                            }
	                        }

	                        break;
	                    case "P"://护照
	                        if (ic_number.length >= 3) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为护照时，号码长度不能少于3个字符");
	                            return false;
	                        }
	                        break;
	                    case "T"://港澳通行证
	                        if (ic_number.length >= 8) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为港澳居民来往内地通行证或台湾居民来往大陆通行证时，号码长度不能少于8个字符");
	                            return false;
	                        }
	                        break;
	                    case "R"://台胞通行证
	                        if (ic_number.length >= 8) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为港澳居民来往内地通行证或台湾居民来往大陆通行证时，号码长度不能少于8个字符");
	                            return false;
	                        }
	                        break;
	                    case "S"://士兵证
	                        if (ic_number.length >= 10 && ic_number.length <= 18) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为军官证或士兵证，号码长度在10-18个字符之间");
	                            return false;
	                        }
	                        break;
	                    case "A"://军官证
	                        if (ic_number.length >= 10 && ic_number.length <= 18) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为军官证或士兵证，号码长度在10-18个字符之间");
	                            return false;
	                        }
	                        break;
	                    case "B"://婴儿证
	                        if (ic_number.length >= 3) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为出生证,号码长度不能少于3个字符");
	                            return false;
	                        }
	                        break;
	                    default :
	                        if (ic_number.length >= 1) {
	                            return true;
	                        } else {
	                            alertModal.open("请输入正确的证件号");
	                        }
	                        break;
	                }
	            }
	        },

	        //检查空值
	        checkNull: function (v) {
	            if (v == null || v == undefined || v == "undefined" || v == "null" || v == "" || v == '' || v == []) {
	                return false;
	            } else {
	                return true;
	            }
	        },
	        checkId: function (data) {
	            var isValid = true;
	            if (this.checkCountryAndIcType(data)) {
	            } else {
	                alertModal.open('非中国籍不能选择居民身份证，请检查');
	                return false;
	            }

	            if (this.checkCountryAndAgeLt16(data)) {

	            } else {
	                alertModal.open('16周岁（含）以上中国大陆国籍被保人，证件类型必须为身份证、军官证、士兵证');
	                return false;
	            }

	            if (this.checkCountryAndAgeBetween3To16(data)) {

	            } else {
	                alertModal.open('3周岁（含）-15周岁（含）中国大陆国籍被保人，证件类型必须为户口本、身份证');
	                return false;
	            }
	            if (this.checkCountryAndAgeBetween0To3(data)) {

	            } else {
	                alertModal.open('0周岁（含）-2周岁（含）中国大陆国籍被保人，证件类型必须为出生证、户口本、身份证');
	                return false;
	            }


	            // if (this.checkHongKongAndMacaoIcType(data)) {
	            //
	            // } else {
	            //     alertModal.open('被保人国籍为香港、澳门，证件类型必须为港澳居民来往内地通行证');
	            //     return false;
	            // }
	            //
	            // if (this.checkTaiwanIcType(data)) {
	            //
	            // } else {
	            //     alertModal.open('被保人国籍为台湾，证件类型必须为台湾居民来往大陆通行证');
	            //     return false;
	            // }

	            if (this.checkOtherIcType(data)) {

	            } else {
	                alertModal.open('外籍被保人，证件类型必须为护照');
	                return false;
	            }


	            return isValid;
	        },
	        checkCountryAndIcType: function (country, ic_type) {
	            if (!(country == 'CHN' || country == 'HKG' || country == 'MAC' || country == 'TWN')) {
	                if (ic_type == 'I') {
	                    return false;
	                } else {
	                    return true;
	                }
	            } else {
	                return true;
	            }
	        },
	        //根据证件类型验证号码;
	        checkIcNumberfor: function (ic_number, ic_type, birthday, gender) {
	            if (ic_number == '' || ic_number == null) {
	                alertModal.open('证件号不能为空');
	                return false;
	            } else {
	                switch (ic_type) {
	                    case "H"://户口本
	                        if (ic_number.length < 18) {
	                            alertModal.open("证件类型为身份证、户口本时,号码长度必须为18位");
	                            return false;
	                        } else {
	                            if (this.checkIdCard(ic_number)) {
	                                if ((ic_number.substring(6, 10) + '-' + ic_number.substring(10, 12) + '-' + ic_number.substring(12, 14)) == birthday) {
	                                    if (!this.checkSexAndId(ic_number, gender)) {
	                                        alertModal.open('证件号码与性别不匹配');
	                                        return false;
	                                    } else {
	                                        return true;
	                                    }
	                                } else {
	                                    alertModal.open("证件号码和出生日期不一致！请返回上一页确认正确的出生日期。");
	                                    return false;
	                                }
	                            } else {
	                                alertModal.open("请输入正确的证件号");
	                                return false;
	                            }
	                        }

	                        break;
	                    case "I"://身份证

	                        if (ic_number.length < 18) {
	                            alertModal.open("证件类型为身份证、户口本时,号码长度必须为18位");
	                            return false;
	                        } else {
	                            if (this.checkIdCard(ic_number)) {
	                                if ((ic_number.substring(6, 10) + '-' + ic_number.substring(10, 12) + '-' + ic_number.substring(12, 14)) == birthday) {
	                                    if (!this.checkSexAndId(ic_number, gender)) {
	                                        alertModal.open('证件号码与性别不匹配');
	                                        return false;
	                                    } else {
	                                        return true;
	                                    }
	                                } else {
	                                    alertModal.open("证件号码和出生日期不一致！请返回上一页确认正确的出生日期。");
	                                    return false;
	                                }
	                            } else {
	                                alertModal.open("请输入正确的证件号");
	                                return false;
	                            }
	                        }

	                        break;
	                    case "L"://临时身份证
	                        if (ic_number.length < 18) {
	                            alertModal.open("证件类型为身份证、户口本时,号码长度必须为18位");
	                            return false;
	                        } else {
	                            if (this.checkIdCard(ic_number)) {
	                                if ((ic_number.substring(6, 10) + '-' + ic_number.substring(10, 12) + '-' + ic_number.substring(12, 14)) == birthday) {
	                                    if (!this.checkSexAndId(ic_number, gender)) {
	                                        alertModal.open('证件号码与性别不匹配');
	                                        return false;
	                                    } else {
	                                        return true;
	                                    }
	                                } else {
	                                    alertModal.open("证件号码和出生日期不一致！请返回上一页确认正确的出生日期。");
	                                    return false;
	                                }
	                            } else {
	                                alertModal.open("请输入正确的证件号");
	                                return false;
	                            }
	                        }

	                        break;
	                    case "P"://护照
	                        if (ic_number.length >= 3) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为护照时，号码长度不能少于3个字符");
	                            return false;
	                        }
	                        break;
	                    case "T"://港澳通行证
	                        if (ic_number.length >= 8) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为港澳居民来往内地通行证或台湾居民来往大陆通行证时，号码长度不能少于8个字符");
	                            return false;
	                        }
	                        break;
	                    case "R"://台胞通行证
	                        if (ic_number.length >= 8) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为港澳居民来往内地通行证或台湾居民来往大陆通行证时，号码长度不能少于8个字符");
	                            return false;
	                        }
	                        break;
	                    case "S"://士兵证
	                        if (ic_number.length >= 10 && ic_number.length <= 18) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为军官证或士兵证，号码长度在10-18个字符之间");
	                            return false;
	                        }
	                        break;
	                    case "A"://军官证
	                        if (ic_number.length >= 10 && ic_number.length <= 18) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为军官证或士兵证，号码长度在10-18个字符之间");
	                            return false;
	                        }
	                        break;
	                    case "B"://婴儿证
	                        if (ic_number.length >= 3) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为出生证,号码长度不能少于3个字符");
	                            return false;
	                        }
	                        break;
	                    default :
	                        if (ic_number.length >= 1) {
	                            return true;
	                        } else {
	                            alertModal.open("请输入正确的证件号");
	                        }
	                        break;
	                }
	            }
	        },
	        //根据证件类型验证号码;
	        checkIcNumber: function (ic_number, ic_type, birthday, gender) {
	            if (ic_number == '' || ic_number == null) {
	                alertModal.open('证件号不能为空');
	                return false;
	            } else {
	                switch (ic_type) {
	                    case "H"://户口本
	                        if (ic_number.length < 18) {
	                            alertModal.open("证件类型为身份证、户口本时,号码长度必须为18位");
	                            return false;
	                        } else {
	                            if (this.checkIdCard(ic_number)) {
	                                if ((ic_number.substring(6, 10) + '-' + ic_number.substring(10, 12) + '-' + ic_number.substring(12, 14)) == birthday) {
	                                    if (!this.checkSexAndId(ic_number, gender)) {
	                                        alertModal.open('证件号码与性别不匹配');
	                                        return false;
	                                    } else {
	                                        return true;
	                                    }
	                                } else {
	                                    alertModal.open("证件号码和出生日期不一致！请返回上一页确认正确的出生日期。");
	                                    return false;
	                                }
	                            } else {
	                                alertModal.open("请输入正确的证件号");
	                                return false;
	                            }
	                        }

	                        break;
	                    case "I"://身份证

	                        if (ic_number.length < 18) {
	                            alertModal.open("证件类型为身份证、户口本时,号码长度必须为18位");
	                            return false;
	                        } else {
	                            if (this.checkIdCard(ic_number)) {
	                                if ((ic_number.substring(6, 10) + '-' + ic_number.substring(10, 12) + '-' + ic_number.substring(12, 14)) == birthday) {
	                                    if (!this.checkSexAndId(ic_number, gender)) {
	                                        alertModal.open('证件号码与性别不匹配');
	                                        return false;
	                                    } else {
	                                        return true;
	                                    }
	                                } else {
	                                    alertModal.open("证件号码和出生日期不一致！请返回上一页确认正确的出生日期。");
	                                    return false;
	                                }
	                            } else {
	                                alertModal.open("请输入正确的证件号");
	                                return false;
	                            }
	                        }

	                        break;
	                    case "L"://临时身份证
	                        if (ic_number.length < 18) {
	                            alertModal.open("证件类型为身份证、户口本时,号码长度必须为18位");
	                            return false;
	                        } else {
	                            if (this.checkIdCard(ic_number)) {
	                                if ((ic_number.substring(6, 10) + '-' + ic_number.substring(10, 12) + '-' + ic_number.substring(12, 14)) == birthday) {
	                                    if (!this.checkSexAndId(ic_number, gender)) {
	                                        alertModal.open('证件号码与性别不匹配');
	                                        return false;
	                                    } else {
	                                        return true;
	                                    }
	                                } else {
	                                    alertModal.open("证件号码和出生日期不一致！请返回上一页确认正确的出生日期。");
	                                    return false;
	                                }
	                            } else {
	                                alertModal.open("请输入正确的证件号");
	                                return false;
	                            }
	                        }

	                        break;
	                    case "P"://护照
	                        if (ic_number.length >= 3) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为护照时，号码长度不能少于3个字符");
	                            return false;
	                        }
	                        break;
	                    case "T"://港澳通行证
	                        if (ic_number.length >= 8) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为港澳居民来往内地通行证或台湾居民来往大陆通行证时，号码长度不能少于8个字符");
	                            return false;
	                        }
	                        break;
	                    case "R"://台胞通行证
	                        if (ic_number.length >= 8) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为港澳居民来往内地通行证或台湾居民来往大陆通行证时，号码长度不能少于8个字符");
	                            return false;
	                        }
	                        break;
	                    case "S"://士兵证
	                        if (ic_number.length >= 10 && ic_number.length <= 18) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为军官证或士兵证，号码长度在10-18个字符之间");
	                            return false;
	                        }
	                        break;
	                    case "A"://军官证
	                        if (ic_number.length >= 10 && ic_number.length <= 18) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为军官证或士兵证，号码长度在10-18个字符之间");
	                            return false;
	                        }
	                        break;
	                    case "B"://婴儿证
	                        if (ic_number.length >= 3) {
	                            return true;
	                        } else {
	                            alertModal.open("证件类型为出生证,号码长度不能少于3个字符");
	                            return false;
	                        }
	                        break;
	                    default :
	                        if (ic_number.length >= 1) {
	                            return true;
	                        } else {
	                            alertModal.open("请输入正确的证件号");
	                        }
	                        break;
	                }
	            }
	        },
	        checkSexAndId: function (ic_number, gender) {

	            var sex = this.getSex(ic_number);
	            if (sex != gender) {
	                return false;
	            } else {
	                return true;
	            }
	        },
	        getSex: function (psidno) {
	            var sexno, sex;
	            if (psidno.length == 18) {
	                sexno = psidno.substring(16, 17)
	            } else if (psidno.length == 15) {
	                sexno = psidno.substring(14, 15)
	            } else {
	                // alertModal.open("错误的身份证号码，请核对！")
	                return false
	            }
	            var tempid = sexno % 2;
	            if (tempid == 0) {
	                sex = 1; //返回女
	            } else {
	                sex = 0; //返回男
	            }
	            return sex
	        },
	        checkIdCard: function (idcard) {
	            var Y, JYM, JYM_X, ereg, Errors, area, S, M, M_X, idcard_array;
	            if (idcard === '') {
	                return false;
	            }

	            Errors = [true, false, false, false, false];
	            area = {
	                11: "北京", 12: "天津", 13: "河北", 14: "山西",
	                15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江",
	                31: "上海", 32: "江苏", 33: "浙江", 34: "安徽",
	                35: "福建", 36: "江西", 37: "山东", 41: "河南",
	                42: "湖北", 43: "湖南", 44: "广东", 45: "广西",
	                46: "海南", 50: "重庆", 51: "四川", 52: "贵州",
	                53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃",
	                63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾",
	                81: "香港", 82: "澳门", 91: "国外"
	            };

	            //先看在不在36个省里
	            //再看是不是是1

	            idcard_array = idcard.split("");
	            /*地区检验*/
	            if (area[parseInt(idcard.substr(0, 2))] == null) {
	                return Errors[4];
	            }
	            /*身份号码位数及格式检验*/
	            switch (idcard.length) {
	                case 15:
	                    if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 400 == 0)) {
	                        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
	                    } else {
	                        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
	                    }
	                    if (ereg.test(idcard)) {
	                        return 15; //15位验证通过
	                    }
	                    else {
	                        return Errors[2];
	                    }
	                    break;

	                case 18:
	                    //18位身份号码检测
	                    //出生日期的合法性检查
	                    //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
	                    //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
	                    if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
	                        ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式
	                    } else {
	                        ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式
	                    }
	                    if (ereg.test(idcard)) {//测试出生日期的合法性
	                        //计算校验位
	                        S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
	                            + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
	                            + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
	                            + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
	                            + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
	                            + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
	                            + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
	                            + parseInt(idcard_array[7])
	                            + parseInt(idcard_array[8]) * 6
	                            + parseInt(idcard_array[9]) * 3;
	                        Y = S % 11;
	                        M = "F";

	                        JYM = "10x98765432";
	                        JYM_X = "10X98765432";
	                        M = JYM.substr(Y, 1);
	                        /*判断校验位*/
	                        M_X = JYM_X.substr(Y, 1);
	                        /*判断校验位*/

	                        if (M == idcard_array[17] || M_X == idcard_array[17]) {
	                            return 1;
	                            /*检测ID的校验位false;*/
	                        }
	                        else {
	                            return Errors[3];
	                        }
	                    }
	                    else {
	                        return Errors[2];
	                    }
	                    break;

	                default:
	                    return Errors[1];
	                    break;
	            }
	        },
	//国籍为中国大陆，>=16周岁，必须为身份证IL、军官证W、士兵证S
	        checkCountryAndAgeLt16: function (birthday, country, ic_type) {
	            var isValid = true;
	            var age = this.ages(birthday);
	            if (country == 'CHN') {
	                if (age >= 16) {
	                    if (ic_type == 'I' || ic_type == 'L' || ic_type == 'A' || ic_type == 'S') {
	                    } else {
	                        return false;
	                    }
	                }
	            }
	            return isValid;
	        },

	//国籍为中国大陆，>=10周岁且<16周岁必须为户口本H、身份证IL
	        checkCountryAndAgeBetween3To16: function (birthday, country, ic_type) {
	            var isValid = true;
	            var age = this.ages(birthday);
	            if (country == 'CHN') {
	                if (age >= 3 && age < 16) {
	                    if (ic_type == 'I' || ic_type == 'L' || ic_type == 'H') {
	                    } else {
	                        return false;
	                    }
	                }
	            }
	            return isValid;
	        },
	        //国籍为中国大陆，>=10周岁且<16周岁必须为户口本H、身份证IL
	        checkCountryAndAgeBetween0To3: function (birthday, country, ic_type) {
	            var isValid = true;
	            var age = this.ages(birthday);
	            if (country == 'CHN') {
	                if (age < 3) {
	                    if (ic_type == 'B' || ic_type == 'H' || ic_type == 'I' || ic_type == 'L') {
	                    } else {
	                        return false;
	                    }
	                }
	            }
	            return isValid;
	        },
	//被保险人为未成年人时，只能选择子女
	        checkRelationShipLt16: function (birthday) {
	            var isValid = true;
	            var age = this.ages(birthday);
	            if (age < 16) {
	                var guanxi = $('#guanxi option:selected').val();
	                if (guanxi != 3) {
	                    isValid = false;
	                }
	            }
	            return isValid;
	        },

	//国籍为香港、澳门，必须为港澳居民来往内地通行证
	        checkHongKongAndMacaoIcType: function (country, ic_type) {
	            var isValid = true;
	            if (country == 'HKG' || country == 'MAC') {
	                if (ic_type != 'T') {
	                    return false
	                }
	            }
	            return isValid;
	        },

	//国籍为香港、澳门，必须为港澳居民来往内地通行证
	        checkTaiwanIcType: function (country, ic_type) {
	            var isValid = true;
	            if (country == 'TWN') {
	                if (ic_type != 'R') {
	                    return false
	                }
	            }
	            return isValid;
	        },

	//外籍人士，必须为护照
	        checkOtherIcType: function (country, ic_type) {
	            var isValid = true;
	            if (country != 'CHN' && country != 'HKG' && country != 'MAC' && country != 'TWN') {
	                if (ic_type != 'P') {
	                    return false
	                }
	            }
	            return isValid;
	        },

	//证件号码校验
	        checkIdNull: function (ic_number) {
	            if (ic_number != null && ic_number != '') {
	                return true;
	            } else {
	                return false;
	            }
	        },

	        checkIcNumberSmallLetter: function (ic_number) {
	            if (this.checkSmallLetter(ic_number)) {
	                return false;//如果包含有小写字符,则不合格
	            } else {
	                return true;
	            }
	        },
	        checkSmallLetter: function (icNumber) {
	            //在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
	            var Expression = /^.*[a-z]+.*$/;
	            var objExp = new RegExp(Expression);
	            if (objExp.test(icNumber) == true) {
	                return true;
	            } else {
	                return false;
	            }
	        },

	        checkVaildIcTime: function (ic_is_long_valid, ic_expiry_day) {

	            if (ic_is_long_valid == 0 || ic_is_long_valid == '0') {
	                if (ic_expiry_day != null && ic_expiry_day != '') {
	                    var now = new Date();
	                    var dateNow = now.getFullYear() + "-" + this.MonthAndDay((now.getMonth() + 1)) + '-' + this.MonthAndDay(now.getDate());
	                    if (ic_expiry_day == dateNow) {
	                        return false
	                    }
	                    return true;
	                } else {
	                    return false;
	                }
	            } else {
	                return true;
	            }
	        },

	        MonthAndDay: function (v) {
	            if (v == 1 || v == 2 || v == 3 || v == 4 || v == 5 || v == 6 || v == 7 || v == 8 || v == 9) {
	                v = "0" + v;
	            }
	            return v
	        }
	    },

	    country: {

	        onlyNum: function () {
	            if (!(event.keyCode == 46) && !(event.keyCode == 8) && !(event.keyCode == 37) && !(event.keyCode == 39))
	                if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)))
	                    event.returnValue = false;
	        },


	    },
	    bank_number: {},
	    marital_status: {},
	    birthday: {
	        checkBirthday: function (value) {
	            var a = /^(\d{4})-(\d{2})-(\d{2})$/
	            if (!a.test(value)) {
	                return false
	            }
	            else
	                return true
	        }
	    },
	    career: {},
	    gender: {},
	    mobile: {},
	    email: {},
	    annual_income: {},
	    address: {},
	    phone: {},

	    onlyNum: function () {
	        if (!(event.keyCode == 46) && !(event.keyCode == 8) && !(event.keyCode == 37) && !(event.keyCode == 39))
	            if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)))
	                event.returnValue = false;
	    },

	//拆解信息
	    extractHomePhoneInfo: function (str) {
	        if (checkNull(str)) {
	            var _sep = str.split('-');
	            vm.home_phone_number.pre = _sep[0];
	            vm.home_phone_number.sub = _sep[1];
	        }

	    },
	    extractOfficePhoneInfo: function (str) {
	        if (checkNull(str)) {
	            var _sep = str.split('-');
	            vm.office_phone_number.pre = _sep[0];
	            vm.office_phone_number.sub = _sep[1];
	        }

	    },
	    extractEmailInfo: function (str) {
	        if (str) {
	            var _sep = str.split('@');
	            vm.email.pre = _sep[0];
	            vm.email.sub = _sep[1];
	        } else {

	        }
	    },

	//检查空值
	    checkNull: function (v) {
	        if (v == null || v == undefined || v == "undefined" || v == "null" || v == "" || v == '' || v == []) {
	            return false;
	        } else {
	            return true;
	        }
	    },
	    checkId: function (data, age) {
	        var isValid = true;
	        if (this.checkCountryAndIcType(data)) {

	        } else {
	            console.log(data.$model)
	            alertModal.open('非中国籍不能选择居民身份证，请检查');
	            return false;
	        }

	        if (this.checkCountryAndAgeLt16(data, age)) {

	        } else {
	            alertModal.open('16周岁（含）以上中国大陆国籍被保人，证件类型必须为身份证、军官证、士兵证');
	            return false;
	        }

	        if (this.checkCountryAndAgeBetween3To16(data, age)) {

	        } else {
	            alertModal.open('3周岁（含）-15周岁（含）中国大陆国籍被保人，证件类型必须为户口本、身份证');
	            return false;
	        }


	        if (this.checkCountryAndAgeBetween0To3(data, age)) {

	        } else {
	            alertModal.open('0周岁（含）-2周岁（含）中国大陆国籍被保人，证件类型必须为出生证、户口本、身份证');
	            return false;
	        }


	        if (this.checkHongKongAndMacaoIcType(data)) {

	        } else {
	            alertModal.open('被保人国籍为香港、澳门，证件类型必须为港澳居民来往内地通行证');
	            return false;
	        }

	        if (this.checkTaiwanIcType(data)) {

	        } else {
	            alertModal.open('被保人国籍为台湾，证件类型必须为台湾居民来往大陆通行证');
	            return false;
	        }

	        if (this.checkOtherIcType(data)) {

	        } else {
	            alertModal.open('外籍被保人，证件类型必须为护照');
	            return false;
	        }


	        return isValid;
	    },
	    checkCountryAndIcType: function (data) {
	        if (!(data.country == 'CHN' || data.country == 'HKG' || data.country == 'MAC' || data.country == 'TWN')) {
	            if (data.ic_type == 'I') {
	                return false;
	            } else {
	                return true;
	            }
	        } else {
	            return true;
	        }
	    },


	//国籍为中国大陆，>=16周岁，必须为身份证IL、军官证W、士兵证S
	    checkCountryAndAgeLt16: function (data, age) {
	        var isValid = true;
	        // var age = this.ages(data.birthday);
	        var age = age;
	        if (data.country == 'CHN') {
	            if (age >= 16) {
	                if (data.ic_type == 'I' || data.ic_type == 'L' || data.ic_type == 'A' || data.ic_type == 'S') {
	                } else {
	                    return false;
	                }
	            }
	        }
	        return isValid;
	    },

	//国籍为中国大陆，>=10周岁且<16周岁必须为户口本H、身份证IL
	    checkCountryAndAgeBetween3To16: function (data, age) {
	        var isValid = true;
	        // var age = this.ages(data.birthday);
	        var age = age;
	        if (data.country == 'CHN') {
	            if (age >= 3 && age < 16) {
	                if (data.ic_type == 'I' || data.ic_type == 'L' || data.ic_type == 'H') {
	                } else {
	                    return false;
	                }
	            }
	        }
	        return isValid;
	    },
	    //国籍为中国大陆，>=0周岁且<3周岁必须为户口本H、身份证IL
	    checkCountryAndAgeBetween0To3: function (data, age) {
	        var isValid = true;
	        // var age = this.ages(data.birthday);
	        var age = age;
	        if (data.country == 'CHN') {
	            if (age < 3) {
	                if (data.ic_type == 'B' || data.ic_type == 'H' || data.ic_type == 'I' || data.ic_type == 'L') {
	                } else {
	                    return false;
	                }
	            }
	        }
	        return isValid;
	    },

	//被保险人为未成年人时，只能选择子女
	    checkRelationShipLt16: function (data) {
	        var isValid = true;
	        var age = this.ages(data.birthday);
	        if (age < 16) {
	            var guanxi = $('#guanxi option:selected').val();
	            if (guanxi != 3) {
	                isValid = false;
	            }
	        }
	        return isValid;
	    },

	//国籍为香港、澳门，必须为港澳居民来往内地通行证
	    checkHongKongAndMacaoIcType: function (data) {
	        var isValid = true;
	        if (data.country == 'HKG' || data.country == 'MAC') {
	            if (data.ic_type != 'T') {
	                return false
	            }
	        }
	        return isValid;
	    },

	//国籍为香港、澳门，必须为港澳居民来往内地通行证
	    checkTaiwanIcType: function (data) {
	        var isValid = true;
	        if (data.country == 'TWN') {
	            if (data.ic_type != 'R') {
	                return false
	            }
	        }
	        return isValid;
	    },

	//外籍人士，必须为护照
	    checkOtherIcType: function (data) {
	        var isValid = true;
	        if (data.country != 'CHN' && data.country != 'HKG' && data.country != 'MAC' && data.country != 'TWN') {
	            if (data.ic_type != 'P') {
	                return false
	            }
	        }
	        return isValid;
	    },

	//证件号码校验
	    checkIdNull: function (data) {
	        if (data.ic_number || (data.ic_number != null && data.ic_number != '')) {
	            return true;
	        } else {
	            return false;
	        }
	    },

	    checkIcNumberSmallLetter: function (data) {
	        if (this.checkSmallLetter(data.ic_number)) {
	            return false;//如果包含有小写字符,则不合格
	        } else {
	            return true;
	        }
	    },
	    checkSmallLetter: function (icNumber) {
	        //在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
	        var Expression = /^.*[a-z]+.*$/;
	        var objExp = new RegExp(Expression);
	        if (objExp.test(icNumber) == true) {
	            return true;
	        } else {
	            return false;
	        }
	    },

	    checkVaildIcTime: function (data) {
	        if (data.ic_is_long_valid == 0 || data.ic_is_long_valid == '0') {
	            if (data.ic_expiry_day) {
	                if (this.isDate(data.ic_expiry_day)) {
	                    var now = new Date();
	                    var dateNow = now.getFullYear() + "-" + this.MonthAndDay((now.getMonth() + 1)) + '-' + this.MonthAndDay(now.getDate());
	                    if (data.ic_expiry_day == dateNow) {
	                        return false
	                    }
	                    return true;
	                } else {
	                    return false;
	                }
	            } else {
	                return false;
	            }
	        } else {
	            return true;
	        }
	    },

	    MonthAndDay: function (v) {
	        if (v == 1 || v == 2 || v == 3 || v == 4 || v == 5 || v == 6 || v == 7 || v == 8 || v == 9) {
	            v = "0" + v;
	        }
	        return v
	    },

	//检查根据身份证检查性别是否匹配

	    getSex: function (psidno) {
	        var sexno, sex;
	        if (psidno.length == 18) {
	            sexno = psidno.substring(16, 17)
	        } else if (psidno.length == 15) {
	            sexno = psidno.substring(14, 15)
	        } else {
	            // alert("错误的身份证号码，请核对！")
	            return false
	        }
	        var tempid = sexno % 2;
	        if (tempid == 0) {
	            sex = 1; //返回女
	        } else {
	            sex = 0; //返回男
	        }
	        return sex
	    },
	    checkSexAndId: function (ic_number, gender) {

	        var sex = this.getSex(ic_number);
	        if (sex != gender) {
	            return false;
	        } else {
	            return true;
	        }
	    },

	    checkIcNumber: function (data) {
	        avalon.log("validate：checkIcNumber", data);
	        if (data.ic_number == "" || !data.ic_number) {
	            return false;
	        }
	        else {
	            switch (data.ic_type) {
	                case "H"://户口本
	                    if (data.ic_number.length < 18) {
	                        alertModal.open("证件类型为身份证、户口本时,号码长度必须为18位");
	                        return false;
	                    } else {
	                        if (this.checkIdCard(data.ic_number)) {
	                            if ((data.ic_number.substring(6, 10) + '-' + data.ic_number.substring(10, 12) + '-' + data.ic_number.substring(12, 14)) == data.birthday) {
	                                if (!this.checkSexAndId(data.ic_number, data.gender)) {
	                                    alertModal.open('证件号码与性别不匹配');

	                                    return false;
	                                } else {
	                                    return true;
	                                }
	                            } else {
	                                alertModal.open("证件号码和出生日期不一致！请返回上一页确认正确的出生日期。");
	                                return false;
	                            }
	                        } else {
	                            alertModal.open("请输入正确的证件号");
	                            return false;
	                        }
	                    }

	                    break;
	                case "I"://身份证
	                    if (data.ic_number.length < 18) {
	                        alertModal.open("证件类型为身份证、户口本时,号码长度必须为18位");
	                        return false;
	                    } else {
	                        if (this.checkIdCard(data.ic_number)) {
	                            if ((data.ic_number.substring(6, 10) + '-' + data.ic_number.substring(10, 12) + '-' + data.ic_number.substring(12, 14)) == data.birthday) {
	                                if (!this.checkSexAndId(data.ic_number, data.gender)) {
	                                    alertModal.open('证件号码与性别不匹配');
	                                    return false;
	                                } else {
	                                    return true;
	                                }
	                            } else {
	                                alertModal.open("证件号码和出生日期不一致！请返回上一页确认正确的出生日期。");
	                                return false;
	                            }
	                        } else {
	                            alertModal.open("请输入正确的证件号");
	                            return false;
	                        }
	                    }

	                    break;
	                case "L"://临时身份证
	                    if (data.ic_number.length < 18) {
	                        alertModal.open("证件类型为身份证、户口本时,号码长度必须为18位");
	                        return false;
	                    } else {
	                        if (this.checkIdCard(data.ic_number)) {
	                            if ((data.ic_number.substring(6, 10) + '-' + data.ic_number.substring(10, 12) + '-' + data.ic_number.substring(12, 14)) == data.birthday) {
	                                if (!this.checkSexAndId(data.ic_number, data.gender)) {
	                                    alertModal.open('证件号码与性别不匹配');
	                                    return false;
	                                } else {
	                                    return true;
	                                }
	                            } else {
	                                alertModal.open("证件号码和出生日期不一致！请返回上一页确认正确的出生日期。");
	                                return false;
	                            }
	                        } else {
	                            alertModal.open("请输入正确的证件号");
	                            return false;
	                        }
	                    }

	                    break;
	                case "P"://护照
	                    if (data.ic_number.length >= 3) {
	                        return true;
	                    } else {
	                        alertModal.open("证件类型为护照时，号码长度不能少于3个字符");
	                        return false;
	                    }
	                    break;
	                case "T"://港澳通行证
	                    if (data.ic_number.length >= 8) {
	                        return true;
	                    } else {
	                        alertModal.open("证件类型为港澳居民来往内地通行证或台湾居民来往大陆通行证时，号码长度不能少于8个字符");
	                        return false;
	                    }
	                    break;
	                case "R"://台胞通行证
	                    if (data.ic_number.length >= 8) {
	                        return true;
	                    } else {
	                        alertModal.open("证件类型为港澳居民来往内地通行证或台湾居民来往大陆通行证时，号码长度不能少于8个字符");
	                        return false;
	                    }
	                    break;
	                case "S"://士兵证
	                    if (data.ic_number.length >= 10 && data.ic_number.length <= 18) {
	                        return true;
	                    } else {
	                        alertModal.open("证件类型为军官证或士兵证，号码长度在10-18个字符之间");
	                        return false;
	                    }
	                    break;
	                case "A"://军官证
	                    if (data.ic_number.length >= 10 && data.ic_number.length <= 18) {
	                        return true;
	                    } else {
	                        alertModal.open("证件类型为军官证或士兵证，号码长度在10-18个字符之间");
	                        return false;
	                    }
	                    break;
	                case "B"://婴儿证
	                    if (data.ic_number.length >= 3) {
	                        return true;
	                    } else {
	                        alertModal.open("证件类型为出生证,号码长度不能少于3个字符");
	                        return false;
	                    }
	                    break;
	                default :
	                    if (data.ic_number.length >= 1) {
	                        return true;
	                    } else {
	                        alertModal.open("请输入正确的证件号");
	                    }
	                    break;
	            }
	        }

	    },

	    // 收入
	    checkMyShouru: function (value) {
	        if (value == 0) {
	            return false;
	        }
	        else if (value == '' || value == null) {
	            return false;
	        } else {
	            return true;
	        }
	    },
	    checkShouruZero: function (v) {
	        v = parseFloat(v)
	        if (v < 0) {
	            return false;
	        } else {
	            return true;
	        }
	    },
	//检测地址输入
	//     checkAddress: function (v) {
	//
	//         var strs = v.split("#");
	//         var isValid = true;
	//
	//         if (strs[0] == 0 || strs[0] == "0") {
	//             isValid = false;
	//             return false;
	//
	//         }
	//         if (strs[1] == 0 || strs[1] == "0") {
	//             isValid = false;
	//             return false;
	//
	//             // if ($('#selProvince').val() == 50) {
	//             //
	//             // } else {
	//             //
	//             // }
	//         }
	//
	//         if (strs[2] == 0 || strs[2] == "0") {
	//             if (checkDistrictEmpty(strs[1])) {
	//
	//             } else {
	//                 isValid = false;
	//                 return false;
	//             }
	//         }
	//
	//         if (strs[3] != null && strs[3] != '') {
	//         } else {
	//             isValid = false;
	//         }
	//
	//         //验证输入必须大于5个中文字符
	//         if (this.validateInputAddressLt5Cn(strs[3])) {
	//         } else {
	//             isValid = false;
	//         }
	//
	//         alert(strs[3]);
	//         if (strs[3].indexOf('#') > 0) {
	//             alert(1)
	//             isValid = false;
	//         }
	//
	//         if (isValid) {
	//             return true;
	//         } else {
	//             return false;
	//         }
	//     },

	    checkPostCode: function (data) {

	        if (data.post_code == '') {
	            return true;
	        } else {
	            data.post_code = cnScript(data.post_code);
	            data.post_code = stripscript(data.post_code);

	            if (data.post_code.length > 0 && data.post_code.length < 6) {
	                return false;
	            } else {
	                return true;
	            }
	        }

	    },
	    ageForRealTime: function jsGetAge(strBirthday) {
	        var returnAge;
	        var strBirthdayArr = strBirthday.split("-");
	        var birthYear = strBirthdayArr[0];
	        var birthMonth = strBirthdayArr[1];
	        var birthDay = strBirthdayArr[2];

	        var d = new Date();
	        var nowYear = d.getFullYear();
	        var nowMonth = d.getMonth() + 1;
	        var nowDay = d.getDate();

	        if (nowYear == birthYear) {
	            returnAge = 0;//同年 则为0岁
	        }
	        else {
	            avalon.log(nowYear)
	            avalon.log(birthYear)
	            var ageDiff = nowYear - birthYear; //年之差
	            if (ageDiff > 0) {
	                if (nowMonth == birthMonth) {
	                    var dayDiff = nowDay - birthDay;//日之差
	                    if (dayDiff < 0) {
	                        returnAge = ageDiff - 1;
	                    }
	                    else {
	                        returnAge = ageDiff;
	                    }
	                }
	                else {
	                    var monthDiff = nowMonth - birthMonth;//月之差
	                    if (monthDiff < 0) {
	                        returnAge = ageDiff - 1;
	                    }
	                    else {
	                        returnAge = ageDiff;
	                    }
	                }
	            }
	            else {
	                returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
	            }
	        }

	        return returnAge;//返回周岁年龄

	    },
	    ages: function (str) {
	        var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	        if (r == null) return false;
	        var birth = new Date(r[1], r[3] - 1, r[4]);

	        // var birth = new Date(r[1], 4, '1);
	        if (birth.getFullYear() == r[1] && (birth.getMonth() + 1) == r[3] && birth.getDate() == r[4]) {
	            var today = new Date();
	            var age = today.getFullYear() - r[1];

	            if (birth.getMonth() + 1 < 4) {
	                return age;
	            }
	            if (birth.getMonth() + 1 == 4) {
	                return age;
	            }

	            if (birth.getMonth() + 1 == 5) {
	                if (birth.getDate() == 1) {
	                    return age;
	                } else {
	                    return age - 1;
	                }
	            }

	            if (birth.getMonth() + 1 > 4) {
	                return age - 1;
	            }

	        }
	        return ("输入的日期格式错误！");
	    },
	    validateMobile: function (value) {
	        var result = true;
	        var patt1 = new RegExp("^[1][3,4,5,6,7,8,9][0-9]{9}$");//验证长度，第一位数必须是1
	        if (!patt1.test(value)) {
	            result = false;
	        }
	        return result;
	    },
	    //电子邮件验证
	    validateEmail: function (value) {
	        var result = true
	        var patt1 = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9_\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$");//验证邮件
	        if (!patt1.test(value)) {
	            result = false;
	        }
	        return result;
	    },
	    //带小数的年收入检查(0.2  2  1.66等格式)
	    testNum: function (v) {
	        var r = new RegExp("^\\d+(\\.\\d+)?$");
	        if (r.test(v)) {
	            return true;
	        } else {
	            return false;
	        }
	    },
	    //去除空格
	    removeAllSpace: function (str) {
	        return str.replace(/\s+/g, "");
	    },


	    validateNameChinese: function (str) {
	        var patt1 = new RegExp(/^[\u0391-\uFFE5]+$/);

	        var strNumber = 0;

	        for (var i = 0; i < str.length; i++) {
	            if (patt1.test(str[i])) {
	                strNumber = strNumber + 1;
	            }
	        }

	        if (strNumber >= 5) {
	            return true
	        } else {
	            return false;
	        }
	    },

	    chineseAndEnglish: function (str) {
	        // var chineseAndEnglish = /^[\u0391-\uFFE5A-Za-z]+$/;
	        var patt1 = new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);

	        var strNumber = 0;

	        for (var i = 0; i < str.length; i++) {
	            if (patt1.test(str[i])) {
	                strNumber = strNumber + 1;
	            }
	        }

	        if (strNumber >= 5) {
	            return true
	        } else {
	            return false;
	        }
	    },
	//检测地址输入
	    checkAddress: function (v) {
	        var strs = v.split("#");
	        var isValid = true;

	        if (strs[0] == "MAC" || strs[0] == "HKG" || strs[0] == "TWN") {
	            if (strs[0] == 0 || strs[0] == "0") {
	                isValid = false;
	                return false;
	            }

	            if (strs[3] != null && strs[3] != '') {
	            } else {
	                isValid = false;
	            }
	            //验证输入必须大于5个中文字符
	            if (this.validateInputAddressLt5Cn(strs[3])) {
	            } else {
	                isValid = false;
	            }
	        } else {
	            if (strs[0] == 0 || strs[0] == "0") {
	                isValid = false;
	                return false;

	            }

	            if (strs[1] == 0 || strs[1] == "0") {
	                isValid = false;
	                return false;

	            }


	            if (strs[1] == '4420' || strs[1] == '4419') {
	            } else {
	                if (strs[2] == 0 || strs[2] == "0") {
	                    if (this.checkDistrictEmpty(strs[1])) {

	                    } else {
	                        isValid = false;
	                        return false;
	                    }
	                }
	            }


	            if (strs[3] != null && strs[3] != '') {
	            } else {
	                isValid = false;
	            }

	            //验证输入必须大于5个中文字符
	            if (this.validateInputAddressLt5Cn(strs[3])) {
	            } else {
	                isValid = false;
	            }

	            if (strs[3].indexOf('#') > 0) {
	                isValid = false;
	            }

	        }


	        if (isValid) {
	            return true;
	        } else {
	            return false;
	        }
	    },
	    //验证地址输入,中文字符不能小于5个
	    validateInputAddressLt5Cn: function (v) {
	        v = this.nameStripscript2(v);
	        var patt1 = new RegExp("^[\u4e00-\u9fa5]{5,}$");//验证只能中文输入
	        if (patt1.test(v)) {
	            return true;
	        } else {
	            return false;
	        }
	    },
	    //名称输入其他字符会自动删除
	    nameStripscript2: function (s) {
	        var pattern = new RegExp(/^[\u4e00-\u9fa5]{1}$/);
	        var rs = "";
	        for (var i = 0; i < s.length; i++) {
	            if (s.substr(i, 1).replace(pattern) == undefined || s.substr(i, 1).replace(pattern) == "undefined" || s.substr(i, 1).replace(pattern) == null) {
	                rs = rs + s.substr(i, 1);
	            }
	        }
	        return rs;
	    },

	    checkDistrictEmpty: function (cityId) {
	        var isEmpty = true;
	        for (var i = 0; i < districts.length; i++) {
	            var sub = districts[i].id.substring(0, 4);
	            if (sub == cityId) {
	                isEmpty = false;
	            }
	        }
	        return isEmpty;
	    },

	//检测区号长度
	    validateAreaCode: function (areaCode) {

	        var isValid = true;
	        if (!areaCode || areaCode == "null") {
	            // alert(2)
	            return isValid;
	        }

	        // alert(3)
	        if (areaCode != null || areaCode != '-') {
	            // alert(4)
	            var codeLength = areaCode.split('-')[0].length;
	            if (codeLength < 3 || codeLength > 4) {
	                // alert(5)
	                isValid = false;
	            }
	        }

	        return isValid;
	    },

	//检测电话长度
	    validatePhoneCode: function (phone) {

	        var isValid = true;

	        if (!phone) {
	            return isValid;
	        }

	        if (phone) {
	            var areaCode = phone.split('-')[0];
	            var phoneNumber = phone.split('-')[1];
	            var codeLength = phoneNumber.length;

	            if (codeLength == 7 || codeLength == 8) {
	                if (areaCode.length < 3 || areaCode.length > 4) {
	                    isValid = false;
	                }
	            } else if (codeLength == 10) {
	                var begin = phoneNumber.substr(0, 3);
	                if (begin == 400 || begin == 800) {

	                } else {
	                    isValid = false;
	                }
	            } else {
	                isValid = false;
	            }
	        }
	        return isValid;
	    },
	    checkIdCard: function (idcard) {
	        var Y, JYM, JYM_X, ereg, Errors, area, S, M, M_X, idcard_array;
	        if (idcard === '') {
	            return false;
	        }

	        Errors = [true, false, false, false, false];
	        area = {
	            11: "北京", 12: "天津", 13: "河北", 14: "山西",
	            15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江",
	            31: "上海", 32: "江苏", 33: "浙江", 34: "安徽",
	            35: "福建", 36: "江西", 37: "山东", 41: "河南",
	            42: "湖北", 43: "湖南", 44: "广东", 45: "广西",
	            46: "海南", 50: "重庆", 51: "四川", 52: "贵州",
	            53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃",
	            63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾",
	            81: "香港", 82: "澳门", 91: "国外"
	        };

	        //先看在不在36个省里
	        //再看是不是是1

	        idcard_array = idcard.split("");
	        /*地区检验*/
	        if (area[parseInt(idcard.substr(0, 2))] == null) {
	            return Errors[4];
	        }
	        /*身份号码位数及格式检验*/
	        switch (idcard.length) {
	            case 15:
	                if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 400 == 0)) {
	                    ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
	                } else {
	                    ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
	                }
	                if (ereg.test(idcard)) {
	                    return 15; //15位验证通过
	                }
	                else {
	                    return Errors[2];
	                }
	                break;

	            case 18:
	                //18位身份号码检测
	                //出生日期的合法性检查
	                //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
	                //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
	                if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
	                    ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式
	                } else {
	                    ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式
	                }
	                if (ereg.test(idcard)) {//测试出生日期的合法性
	                    //计算校验位
	                    S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
	                        + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
	                        + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
	                        + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
	                        + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
	                        + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
	                        + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
	                        + parseInt(idcard_array[7])
	                        + parseInt(idcard_array[8]) * 6
	                        + parseInt(idcard_array[9]) * 3;
	                    Y = S % 11;
	                    M = "F";

	                    JYM = "10x98765432";
	                    JYM_X = "10X98765432";
	                    M = JYM.substr(Y, 1);
	                    /*判断校验位*/
	                    M_X = JYM_X.substr(Y, 1);
	                    /*判断校验位*/

	                    if (M == idcard_array[17] || M_X == idcard_array[17]) {
	                        return 1;
	                        /*检测ID的校验位false;*/
	                    }
	                    else {
	                        return Errors[3];
	                    }
	                }
	                else {
	                    return Errors[2];
	                }
	                break;

	            default:
	                return Errors[1];
	                break;
	        }
	    },
	    isDate: function (dateString) {
	        if (dateString.trim() == "") return true;
	        var r = dateString.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	        if (r == null) {
	            return false;
	        }
	        var d = new Date(r[1], r[3] - 1, r[4]);
	        var num = (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
	        if (num == 0) {
	            return false;
	        }
	        return (num != 0);
	    }
	};
	module.exports = validate;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/e568ec72cadbc8fbd96abd026a6d403b.png";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAYAAABwWUfkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDJBNkY2OUI2MjJCMTFFOEJCOTdDOERERjM2MzMyOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDJBNkY2OUM2MjJCMTFFOEJCOTdDOERERjM2MzMyOTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QzE4RDdEODYyMjgxMUU4QkI5N0M4RERGMzYzMzI5MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMkE2RjY5QTYyMkIxMUU4QkI5N0M4RERGMzYzMzI5MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjyEm2wAAA0PSURBVHja7F0JcFRVFj1/60gWFjUQCJCEgMgm0RlQFuOwiBqxFEfLAdGZUXTKEmuYRQuEKcQNx6kZF3AtwFERFSxxKRYLt1IRBJFICDAYtghEZBNIAun+y9z7O521k3Q0hH7/v1PVlaT7b3nn3e38+1/rI5acGgsHCwCkohJZaSrmX2qgLlaVOJj9RbDe+3L7uN6+hH69Xf/bkMCLH+y1UjslKlUbZKcoiIbMZGDU+Xq99+X28bt927Zq5+PH7fmKQ4CEZzFnm4WlBSZUORT+gC6HwNvo217B3h4apOv2CSTRPoF69fIgnvmfJUfC60SfLHNwLCgHwvNEyyGQREt4AAU/OXh1py2J9jo+/cHGSxtCkmi/QF+Ql4B2hqywPE90ZpJbTsuRkMmYhCcsWg6BtyG1bp9BEu2XGC21bp8QLbVumXVLSKIlRIHUun0CqXX7DFLr9gvRUuv2CdFCxZsDNuZttVBy2IZjt955FQpw57RXcH22jpsyVSHNQhiiWdRZR4nF+F46RucqSGjF7CJIk6rgqINFOy18ss/Cs0MNaIKwLZTWveagjTmbLcwebCAj6cxey4yNFtLaAJPP12Qd3dKYt83CDdnaGSeZ8afeGpYViScZ66x159Eg3t07fmfonkMOrhhS21fOp8F+b4cN0zx9DklVFVzTU8WdvarHplti+Of+k0CXNgIRLYLWbROZSXo10R/sd7CW4vXjQ3S00U9fsAzZDp4nb7Jwp42JPaqdX5sEBYcrHCJanLRMyMaDpbstXJupoXfb0z3QCm7pqWHWerMW0SJCyKvn/FFVlKjZ8eZjDopOOLCdlqKazicwwRGt2zOtRP/dYeG1AgspiQpMIty0HEy50MCYLv4Wg1jr5gfhPUH0ol02NlOd+9QIA33bhYn9sMTBo6uDSMw1MLyjlPSF17r5yl/ZbOKxYdUkM0Z3VlB+sYFnCy1JNMdo1ro7BMR1bz+eCv/MObv+/3BFuooDR2xIeKDxIEGlxKsBLisoTquavGEjbHlVE+3JG3VICcfpCVm15+3LO2z06dz8uXyAvET+EQfFZTaKjjsYl60JOz4RrdsTydi0HAN//zRIFqxjbDcVlqPgzV0WVhRZmDcqENMxykzHnSzLqBQ5FXTQrYOCzskq+ndQcYvANfSoNNV9eYJojs9zRgfwJJURb2yxwCX2ALLkBfReUzIl19sLqDRbTEnbkAwNs4fo6NPWe+5eCK07FjA5LwwzmrVPyUlgypogenbQMHekgfNSvBvPdb/2dW+kGDz1ixCu6qVhSh8tqit/Y7eN/MMOEujjy8j9XdNVXBfuy4fsNhB5Uz8P4baBOsZn1Sdv7jYL72y1cEmmhpEUAk5ZwPJiG0vIxd8oaGLmO6K/PRImeVJOuC0oGsmryJJfuiJQdUuSwRPiswM2HlpjIiVJHBfPWjdXEKrfLPleIvkPA6OT/DZZ7fvbLczNNapILjfD955ZgcvtpGLWUB3HjosjwkT6uoW06GFpGlmXhbz02C///b02nloXwh0XGVFJ5rtez6wP4eEaJD9PpC/eZCLhLAWaqmDhaB1DO6qYPMiAIljeprLWfVdvsQz71mwV3Iv5wLcWQk0Y18EKsuKvTawga505PDrJjIUUf39P9fiQ1PDn3KfGJM+7MoAVYwMY3l3F7IJwC9E4+r1fO7GYFlbrnjlQc2vgcR+E3A7Rrw7ZKC4Pa987Sh2s3O9g+kYL45eHkJao4FlyuZc2cHNjFk2YCis8gRjHQg4e/MrE5MEGeiSHx2Zqfw3Fxx2sPRieWaKNmLDJGJc8D+Zo2NlTxaKdNp7cZOH4SRMW8WDoCtJSgKFUEt1/jVGrDakuXiD3nE9J1uujqmvwf3xjITdDw/Xda08MblB8dIOFJWPUVm03llk3gS1uxgVc8jS/7PmSrHNJoYUXLjdwllYdy0Nk3dMG1D/eb4n4TZTBPr3VxL39xBi6iNbt6xu1r5MnuPtXOrIr3TO7/TnfmBif3fCw3NNHxUoqwbafEOMePuvc/6T/0bdEz8y3kGyEE6sIplHWfWVPzS2jGsK5CQrGU3n2ACV4IrVr+HINExZFCg9ZeCCn2v1yz1mnJBV/7dt0CJhEk6FrWwWv7RSnnvbdGiackb9HE/uJoYGqhKqQauhX801MzI7dwU2kxOyVAtMt34Qg2m8u+5UiGzeQ1UZEEX7QY/paE7fm1O45awoXUJIzhjL+/xSK4Q19p3Xv+MnGmC7V7vlo0EEF1c0vfxOiV/gR2f7dNEzooeLic2vbAT+xsZRc/NFjdlWzd5s4170jWrcwRDstJFKkUYZdXAYMq/w7lZIrVr4iqCAO3//edmvzmkSzi351s4l/5RquKiZKK1qkr1sI181Ws6esZY51M9WUS4osl9CoQgyNyA0ZKrbss1Fa4wG+t/fYbgcKu2wR+w2F6OvO7a65D6HfP+CX3wu+8GwFA1JVTPgohOFdVSRV+jS+SzXoHAXDKmVSI8BuXUFy5eel9HmyLm7/uxBaN990WUsW9u8tLZP4zMrRMHOQjiAdbl9Z+MVa95qD1WZuErFJuncW8REiRrc1FMwfoWP61ybyllnI6KAi0WjZc5SGgM41Gg14HQjdQy1kwiRjnDS9OMzA9+Xcc22jzGz5c/RrX82sYzsIqOIzLWxfN9e/3RJPfw6pkxfZf9Jxb5rw7dDdJxy3f0w0eKqv+3Tgut4aJq0MVtV1v87ScF13cfUlJW9ZheOFvm6JJrJuuV63T4iWQyCJlvAA5HrdPoFcr9tnkOt1+4VouV63TMYkvGTRcgi8DfndlD6DJNovMfpM93V/vNvGc/k/757jwXJE3Zff4+O2NnYfc9xrinadkz8KRv2s1WL0mda6S8psFB7+eaS8td2Muu+S7yzMGKQ2OcGe+PbnTbC/DNQxMsrjt4vJYNKpirm5znNZP5bb2HLEcX+mJp6Z/FfYZKw85GD5HhuT+mpYt89GSXk4ApUGnaoJ9O53taNSzw4K+lV2dp6g/cto28eG1m5VeXeXhb60Xa/20QmZ+mXI3Vdm3a2EVZWu+XKyrEe+MrHpcHjwyyqJfqOovqXnZahVRDOSAgoGp6u1XO+aEhuDO9Uelo7JCjIrm/uTBHuWXLi+7rrWPG+L5VpzoqHgkeHVVjn9ixC6EjF35TTvX+P4OYOstQvtu6q4Omdhlzuks1rrHCIhrtbr/olyhMJD0eN0FlkSk1kTczdaruV2TlTqTQC2yLruOJYkiklmtA8Aj+ca7jn5mu75JIQ7BsQ+TPNpAkbzJq7bX23GFOtPi+uOB617f6njDmg03E5WWzO54Xj8eUn1QD6+zsTKPVa9ONoQZgwy6g3uPZ+G8LueqnsezthvWh5y3TwndXNGGFVuOxaw9Q/uFBt5A1pxHfG40LrZXU4bpDdo0TUt76GvTdcSHl4fJvOP/XVcXbko63OURbdLUDChkS8fy4pC2pt5YQtm993WCMd5Jpmv60ApKK7H9n8co/04kbu2V/y1ZcWF62Z32e/cpmd3Gblmtjy2yIfXh99LTYRbsrDb5ng6Z4Qe07Fqxua3tltYTV6CPQtbJFsxH+NdInvBVpPO5eDKDK1qQjVIdIWDeL1BJFQyxoPfEImRLJwXnuFXNAzrqkV1wycoR7itj45L0hXc+WHI9Qz8haNsmfziWM3HTDKUJnMNXuZqXyNN5yk0qZubKP4SeGq97gjY6vZFeRiv+ERYsMhxY2dtstgj3De4ehgWXhVwxRS25AVb4YaUxiZY3VyDPUJ6A1+tuOWoQ/mFQ0S33ph4rq+7objILv2+z2x3EjRGFlstx+MeFGM5NIzMDLiuu2OMShbnD4wpFxnu5IkGPt6mw2dGbvbMet1M6FKKtWOy9KqBDpMcchO0mlYbDUVkbVw/s+WzKHIpWeZv0lVy17HF3dV7w8lbQySf8Rjtlb7uXaxq/WBTHVvhWi+T9PQmExkpSkxiRyQeR0q4DQdtN8PnDLxuiRcNHJuviuMnOVrNdTckiHBMbUwwqZmINfX53FEB9ziLtlluLc2WOf1ivdnXlZQA5HZV3RdbemPXH3HJHJ/Hnaf5m+iIwtQYmvo8UvLEkpk/Mlx1zzl7vYmx7wTx5xw9agxna23qvLHE5qfyTVeISTTir7RqVa2bB5+J+qXHqGV1ZK1seY1tzxk0WxsvZVGX6BQihWMqb9McTFwRdPetWdvfSMeORcrk/doFWpfoiNatjFh8yhl9vt4iy0ZIxB/mUBhzb2rIvm5/QPZ1+wSyr9svFi2HwNuQfd0+gyTaLzHaj+t1+5JouYaJzLolJNESokCuYeITyDVMfAapdfuFaKl1y2RMwksWLYfA25Bat88gifZLjJZat0+Illq3zLolJNESokBq3T5BROvWE9ooP17WSelYdwP+Mu1omNzAagJy+/jc/uNi91GiH/R38gK3JaiYR3+k1dzg7QKzWSeS28fn9oR99Lrz/wIMAC4r7qGZmbkzAAAAAElFTkSuQmCC"

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAC3CAYAAABQbs+fAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAm1JREFUeNrs3TFKw2AYgOFfzVCldhMHLZks9gDWG9RLmJOIKFQ9h9BeQicdXARdCwpC0cVBEBXtoGAyWNRBF8UkPg9kSKby8ZJ+mf6xhc7JZghhI0C5HI6bAWUlbsQNRRN9fpAszQzWV+qx0VA0ja1Tb26sJSBuEDeIG8QN4kbcIG4QN4gbxA3iRtwgbhA3iBvEDeIGcSNuEDeIG8QN4gZxI24QN4gbxA3iBnEjbhA3iBvEDeIGcYO4ETeIG8QN4gZxg7gRNxRcZAS/7274EvrXj6P7WiUKzdlJgxF38WVhJ93z0X0rroZe0jAYawmIG8SNuEHcIG4QN4gbxI24QdwgbhA3iBvEjbhB3CBuEDeIG8QN4kbcIG4QN4gbxA3iRtwgbhA3iBvEDeJG3CBuKIjSHfi0vX/14eSwPMhOM3uvf/0UVrtnuZvdWrteqlPWShd3Fvbx4CHXv/E+jT2Pv/Fu+GwtAXGDteRn98a8/b1mO/ZO+i3wZjHda9fa87mbXXN2Stx5VoQPolplIizH016t1hIQN4gbcYO4QdwgbhA3iBtxg7hB3CBuEDeIG3GDuEHcIG4QN4gbxI24QdwgbhA3iBvEjbhB3CBuEDeIG8SNuKFsIiP4fbVKFFpxdXRftoOVxP2PZYdQ9ZKGQVhLQNwgbsQN4gZxg7hB3CBuEDfiBnGDuEHcIG4QN+IGcYO4QdwgbhA34gZxg7hB3CBuEDfiBnGDuEHcIG4QN4gbcYO4QdwgbhA3iBtxg7hB3CBuEDd8I/r84OjiPursXQ6MhgKKv4z74mY4l17GhLUExA1/sHPvpteBUVAyt68CDAAMj0q/wQVtqQAAAABJRU5ErkJggg=="

/***/ })
]);