webpackJsonp([2],{

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * @license
	 * lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
	 */
	;(function () {
	  function t(t, n) {
	    return t.set(n[0], n[1]), t;
	  }function n(t, n) {
	    return t.add(n), t;
	  }function r(t, n, r) {
	    switch (r.length) {case 0:
	        return t.call(n);case 1:
	        return t.call(n, r[0]);case 2:
	        return t.call(n, r[0], r[1]);case 3:
	        return t.call(n, r[0], r[1], r[2]);}return t.apply(n, r);
	  }function e(t, n, r, e) {
	    for (var u = -1, i = t ? t.length : 0; ++u < i;) {
	      var o = t[u];n(e, o, r(o), t);
	    }return e;
	  }function u(t, n) {
	    for (var r = -1, e = t ? t.length : 0; ++r < e && false !== n(t[r], r, t);) {}return t;
	  }function i(t, n) {
	    for (var r = t ? t.length : 0; r-- && false !== n(t[r], r, t);) {}
	    return t;
	  }function o(t, n) {
	    for (var r = -1, e = t ? t.length : 0; ++r < e;) {
	      if (!n(t[r], r, t)) return false;
	    }return true;
	  }function f(t, n) {
	    for (var r = -1, e = t ? t.length : 0, u = 0, i = []; ++r < e;) {
	      var o = t[r];n(o, r, t) && (i[u++] = o);
	    }return i;
	  }function c(t, n) {
	    return !(!t || !t.length) && -1 < d(t, n, 0);
	  }function a(t, n, r) {
	    for (var e = -1, u = t ? t.length : 0; ++e < u;) {
	      if (r(n, t[e])) return true;
	    }return false;
	  }function l(t, n) {
	    for (var r = -1, e = t ? t.length : 0, u = Array(e); ++r < e;) {
	      u[r] = n(t[r], r, t);
	    }return u;
	  }function s(t, n) {
	    for (var r = -1, e = n.length, u = t.length; ++r < e;) {
	      t[u + r] = n[r];
	    }return t;
	  }function h(t, n, r, e) {
	    var u = -1,
	        i = t ? t.length : 0;for (e && i && (r = t[++u]); ++u < i;) {
	      r = n(r, t[u], u, t);
	    }return r;
	  }function p(t, n, r, e) {
	    var u = t ? t.length : 0;for (e && u && (r = t[--u]); u--;) {
	      r = n(r, t[u], u, t);
	    }return r;
	  }function _(t, n) {
	    for (var r = -1, e = t ? t.length : 0; ++r < e;) {
	      if (n(t[r], r, t)) return true;
	    }return false;
	  }function v(t, n, r) {
	    var e;return r(t, function (t, r, u) {
	      if (n(t, r, u)) return e = r, false;
	    }), e;
	  }function g(t, n, r, e) {
	    var u = t.length;for (r += e ? 1 : -1; e ? r-- : ++r < u;) {
	      if (n(t[r], r, t)) return r;
	    }return -1;
	  }function d(t, n, r) {
	    if (n === n) t: {
	      --r;for (var e = t.length; ++r < e;) {
	        if (t[r] === n) {
	          t = r;
	          break t;
	        }
	      }t = -1;
	    } else t = g(t, b, r);return t;
	  }function y(t, n, r, e) {
	    --r;for (var u = t.length; ++r < u;) {
	      if (e(t[r], n)) return r;
	    }return -1;
	  }function b(t) {
	    return t !== t;
	  }function x(t, n) {
	    var r = t ? t.length : 0;return r ? k(t, n) / r : P;
	  }function j(t) {
	    return function (n) {
	      return null == n ? F : n[t];
	    };
	  }function w(t) {
	    return function (n) {
	      return null == t ? F : t[n];
	    };
	  }function m(t, n, r, e, u) {
	    return u(t, function (t, u, i) {
	      r = e ? (e = false, t) : n(r, t, u, i);
	    }), r;
	  }function A(t, n) {
	    var r = t.length;for (t.sort(n); r--;) {
	      t[r] = t[r].c;
	    }return t;
	  }function k(t, n) {
	    for (var r, e = -1, u = t.length; ++e < u;) {
	      var i = n(t[e]);i !== F && (r = r === F ? i : r + i);
	    }return r;
	  }function E(t, n) {
	    for (var r = -1, e = Array(t); ++r < t;) {
	      e[r] = n(r);
	    }return e;
	  }function O(t, n) {
	    return l(n, function (n) {
	      return [n, t[n]];
	    });
	  }function S(t) {
	    return function (n) {
	      return t(n);
	    };
	  }function I(t, n) {
	    return l(n, function (n) {
	      return t[n];
	    });
	  }function R(t, n) {
	    return t.has(n);
	  }function z(t, n) {
	    for (var r = -1, e = t.length; ++r < e && -1 < d(n, t[r], 0);) {}return r;
	  }function W(t, n) {
	    for (var r = t.length; r-- && -1 < d(n, t[r], 0);) {}return r;
	  }function B(t) {
	    return "\\" + Dt[t];
	  }function L(t) {
	    var n = -1,
	        r = Array(t.size);
	    return t.forEach(function (t, e) {
	      r[++n] = [e, t];
	    }), r;
	  }function U(t, n) {
	    return function (r) {
	      return t(n(r));
	    };
	  }function C(t, n) {
	    for (var r = -1, e = t.length, u = 0, i = []; ++r < e;) {
	      var o = t[r];o !== n && "__lodash_placeholder__" !== o || (t[r] = "__lodash_placeholder__", i[u++] = r);
	    }return i;
	  }function M(t) {
	    var n = -1,
	        r = Array(t.size);return t.forEach(function (t) {
	      r[++n] = t;
	    }), r;
	  }function D(t) {
	    var n = -1,
	        r = Array(t.size);return t.forEach(function (t) {
	      r[++n] = [t, t];
	    }), r;
	  }function T(t) {
	    if (Wt.test(t)) {
	      for (var n = Rt.lastIndex = 0; Rt.test(t);) {
	        ++n;
	      }t = n;
	    } else t = tn(t);
	    return t;
	  }function $(t) {
	    return Wt.test(t) ? t.match(Rt) || [] : t.split("");
	  }var F,
	      N = 1 / 0,
	      P = NaN,
	      Z = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]],
	      q = /\b__p\+='';/g,
	      V = /\b(__p\+=)''\+/g,
	      K = /(__e\(.*?\)|\b__t\))\+'';/g,
	      G = /&(?:amp|lt|gt|quot|#39);/g,
	      J = /[&<>"']/g,
	      Y = RegExp(G.source),
	      H = RegExp(J.source),
	      Q = /<%-([\s\S]+?)%>/g,
	      X = /<%([\s\S]+?)%>/g,
	      tt = /<%=([\s\S]+?)%>/g,
	      nt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	      rt = /^\w*$/,
	      et = /^\./,
	      ut = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
	      it = /[\\^$.*+?()[\]{}|]/g,
	      ot = RegExp(it.source),
	      ft = /^\s+|\s+$/g,
	      ct = /^\s+/,
	      at = /\s+$/,
	      lt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
	      st = /\{\n\/\* \[wrapped with (.+)\] \*/,
	      ht = /,? & /,
	      pt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
	      _t = /\\(\\)?/g,
	      vt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
	      gt = /\w*$/,
	      dt = /^[-+]0x[0-9a-f]+$/i,
	      yt = /^0b[01]+$/i,
	      bt = /^\[object .+?Constructor\]$/,
	      xt = /^0o[0-7]+$/i,
	      jt = /^(?:0|[1-9]\d*)$/,
	      wt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
	      mt = /($^)/,
	      At = /['\n\r\u2028\u2029\\]/g,
	      kt = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*",
	      Et = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + kt,
	      Ot = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
	      St = RegExp("['\u2019]", "g"),
	      It = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]", "g"),
	      Rt = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Ot + kt, "g"),
	      zt = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d+", Et].join("|"), "g"),
	      Wt = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
	      Bt = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
	      Lt = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),
	      Ut = {};
	  Ut["[object Float32Array]"] = Ut["[object Float64Array]"] = Ut["[object Int8Array]"] = Ut["[object Int16Array]"] = Ut["[object Int32Array]"] = Ut["[object Uint8Array]"] = Ut["[object Uint8ClampedArray]"] = Ut["[object Uint16Array]"] = Ut["[object Uint32Array]"] = true, Ut["[object Arguments]"] = Ut["[object Array]"] = Ut["[object ArrayBuffer]"] = Ut["[object Boolean]"] = Ut["[object DataView]"] = Ut["[object Date]"] = Ut["[object Error]"] = Ut["[object Function]"] = Ut["[object Map]"] = Ut["[object Number]"] = Ut["[object Object]"] = Ut["[object RegExp]"] = Ut["[object Set]"] = Ut["[object String]"] = Ut["[object WeakMap]"] = false;
	  var Ct = {};Ct["[object Arguments]"] = Ct["[object Array]"] = Ct["[object ArrayBuffer]"] = Ct["[object DataView]"] = Ct["[object Boolean]"] = Ct["[object Date]"] = Ct["[object Float32Array]"] = Ct["[object Float64Array]"] = Ct["[object Int8Array]"] = Ct["[object Int16Array]"] = Ct["[object Int32Array]"] = Ct["[object Map]"] = Ct["[object Number]"] = Ct["[object Object]"] = Ct["[object RegExp]"] = Ct["[object Set]"] = Ct["[object String]"] = Ct["[object Symbol]"] = Ct["[object Uint8Array]"] = Ct["[object Uint8ClampedArray]"] = Ct["[object Uint16Array]"] = Ct["[object Uint32Array]"] = true, Ct["[object Error]"] = Ct["[object Function]"] = Ct["[object WeakMap]"] = false;var Mt,
	      Dt = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
	      Tt = parseFloat,
	      $t = parseInt,
	      Ft = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global,
	      Nt = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
	      Pt = Ft || Nt || Function("return this")(),
	      Zt = ( false ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
	      qt = Zt && ( false ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
	      Vt = qt && qt.exports === Zt,
	      Kt = Vt && Ft.h;
	  t: {
	    try {
	      Mt = Kt && Kt.g("util");break t;
	    } catch (t) {}Mt = void 0;
	  }var Gt = Mt && Mt.isArrayBuffer,
	      Jt = Mt && Mt.isDate,
	      Yt = Mt && Mt.isMap,
	      Ht = Mt && Mt.isRegExp,
	      Qt = Mt && Mt.isSet,
	      Xt = Mt && Mt.isTypedArray,
	      tn = j("length"),
	      nn = w({ "\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\xe3": "a", "\xe4": "a", "\xe5": "a", "\xc7": "C", "\xe7": "c", "\xd0": "D", "\xf0": "d", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xcc": "I", "\xcd": "I", "\xce": "I", "\xcf": "I",
	    "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xd1": "N", "\xf1": "n", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O", "\xd8": "O", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xdd": "Y", "\xfd": "y", "\xff": "y", "\xc6": "Ae", "\xe6": "ae", "\xde": "Th", "\xfe": "th", "\xdf": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010A": "C", "\u010C": "C",
	    "\u0107": "c", "\u0109": "c", "\u010B": "c", "\u010D": "c", "\u010E": "D", "\u0110": "D", "\u010F": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011A": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011B": "e", "\u011C": "G", "\u011E": "G", "\u0120": "G", "\u0122": "G", "\u011D": "g", "\u011F": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012A": "I", "\u012C": "I", "\u012E": "I", "\u0130": "I", "\u0129": "i", "\u012B": "i", "\u012D": "i", "\u012F": "i",
	    "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013B": "L", "\u013D": "L", "\u013F": "L", "\u0141": "L", "\u013A": "l", "\u013C": "l", "\u013E": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014A": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014B": "n", "\u014C": "O", "\u014E": "O", "\u0150": "O", "\u014D": "o", "\u014F": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015A": "S", "\u015C": "S", "\u015E": "S",
	    "\u0160": "S", "\u015B": "s", "\u015D": "s", "\u015F": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016A": "U", "\u016C": "U", "\u016E": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016B": "u", "\u016D": "u", "\u016F": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017B": "Z", "\u017D": "Z", "\u017A": "z", "\u017C": "z", "\u017E": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n",
	    "\u017F": "s" }),
	      rn = w({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }),
	      en = w({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }),
	      un = function w(kt) {
	    function Et(t) {
	      return fi.call(t);
	    }function Ot(t) {
	      if (vu(t) && !nf(t) && !(t instanceof Dt)) {
	        if (t instanceof Mt) return t;if (ui.call(t, "__wrapped__")) return De(t);
	      }return new Mt(t);
	    }function Rt() {}function Mt(t, n) {
	      this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = F;
	    }function Dt(t) {
	      this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
	    }function Ft(t) {
	      var n = -1,
	          r = t ? t.length : 0;for (this.clear(); ++n < r;) {
	        var e = t[n];this.set(e[0], e[1]);
	      }
	    }function Nt(t) {
	      var n = -1,
	          r = t ? t.length : 0;for (this.clear(); ++n < r;) {
	        var e = t[n];this.set(e[0], e[1]);
	      }
	    }function Zt(t) {
	      var n = -1,
	          r = t ? t.length : 0;for (this.clear(); ++n < r;) {
	        var e = t[n];this.set(e[0], e[1]);
	      }
	    }function qt(t) {
	      var n = -1,
	          r = t ? t.length : 0;for (this.__data__ = new Zt(); ++n < r;) {
	        this.add(t[n]);
	      }
	    }function Kt(t) {
	      this.size = (this.__data__ = new Nt(t)).size;
	    }function tn(t, n) {
	      var r,
	          e = nf(t),
	          u = !e && tf(t),
	          i = !e && !u && ef(t),
	          o = !e && !u && !i && af(t),
	          u = (e = e || u || i || o) ? E(t.length, Hu) : [],
	          f = u.length;for (r in t) {
	        !n && !ui.call(t, r) || e && ("length" == r || i && ("offset" == r || "parent" == r) || o && ("buffer" == r || "byteLength" == r || "byteOffset" == r) || me(r, f)) || u.push(r);
	      }return u;
	    }function on(t) {
	      var n = t.length;return n ? t[cr(0, n - 1)] : F;
	    }function fn(t, n) {
	      return Le(Cr(t), dn(n, 0, t.length));
	    }function cn(t) {
	      return Le(Cr(t));
	    }function an(t, n, r, e) {
	      return t === F || fu(t, ti[r]) && !ui.call(e, r) ? n : t;
	    }function ln(t, n, r) {
	      (r === F || fu(t[n], r)) && (r !== F || n in t) || vn(t, n, r);
	    }function sn(t, n, r) {
	      var e = t[n];ui.call(t, n) && fu(e, r) && (r !== F || n in t) || vn(t, n, r);
	    }function hn(t, n) {
	      for (var r = t.length; r--;) {
	        if (fu(t[r][0], n)) return r;
	      }return -1;
	    }function pn(t, n, r, e) {
	      return to(t, function (t, u, i) {
	        n(e, t, r(t), i);
	      }), e;
	    }function _n(t, n) {
	      return t && Mr(n, Iu(n), t);
	    }function vn(t, n, r) {
	      "__proto__" == n && xi ? xi(t, n, { configurable: true, enumerable: true, value: r, writable: true }) : t[n] = r;
	    }function gn(t, n) {
	      for (var r = -1, e = null == t, u = n.length, i = Zu(u); ++r < u;) {
	        i[r] = e ? F : Ou(t, n[r]);
	      }return i;
	    }function dn(t, n, r) {
	      return t === t && (r !== F && (t = t <= r ? t : r), n !== F && (t = t >= n ? t : n)), t;
	    }function yn(t, n, r, e, i, o, f) {
	      var c;if (e && (c = o ? e(t, i, o, f) : e(t)), c !== F) return c;if (!_u(t)) return t;if (i = nf(t)) {
	        if (c = be(t), !n) return Cr(t, c);
	      } else {
	        var a = Et(t),
	            l = "[object Function]" == a || "[object GeneratorFunction]" == a;if (ef(t)) return Rr(t, n);if ("[object Object]" == a || "[object Arguments]" == a || l && !o) {
	          if (c = xe(l ? {} : t), !n) return Dr(t, _n(c, t));
	        } else {
	          if (!Ct[a]) return o ? t : {};c = je(t, a, yn, n);
	        }
	      }if (f || (f = new Kt()), o = f.get(t)) return o;f.set(t, c);
	      var s = i ? F : (r ? se : Iu)(t);return u(s || t, function (u, i) {
	        s && (i = u, u = t[i]), sn(c, i, yn(u, n, r, e, i, t, f));
	      }), c;
	    }function bn(t) {
	      var n = Iu(t);return function (r) {
	        return xn(r, t, n);
	      };
	    }function xn(t, n, r) {
	      var e = r.length;if (null == t) return !e;for (t = Ju(t); e--;) {
	        var u = r[e],
	            i = n[u],
	            o = t[u];if (o === F && !(u in t) || !i(o)) return false;
	      }return true;
	    }function jn(t, n, r) {
	      if (typeof t != "function") throw new Qu("Expected a function");return po(function () {
	        t.apply(F, r);
	      }, n);
	    }function wn(t, n, r, e) {
	      var u = -1,
	          i = c,
	          o = true,
	          f = t.length,
	          s = [],
	          h = n.length;if (!f) return s;r && (n = l(n, S(r))), e ? (i = a, o = false) : 200 <= n.length && (i = R, o = false, n = new qt(n));t: for (; ++u < f;) {
	        var p = t[u],
	            _ = r ? r(p) : p,
	            p = e || 0 !== p ? p : 0;if (o && _ === _) {
	          for (var v = h; v--;) {
	            if (n[v] === _) continue t;
	          }s.push(p);
	        } else i(n, _, e) || s.push(p);
	      }return s;
	    }function mn(t, n) {
	      var r = true;return to(t, function (t, e, u) {
	        return r = !!n(t, e, u);
	      }), r;
	    }function An(t, n, r) {
	      for (var e = -1, u = t.length; ++e < u;) {
	        var i = t[e],
	            o = n(i);if (null != o && (f === F ? o === o && !bu(o) : r(o, f))) var f = o,
	            c = i;
	      }return c;
	    }function kn(t, n) {
	      var r = [];return to(t, function (t, e, u) {
	        n(t, e, u) && r.push(t);
	      }), r;
	    }function En(t, n, r, e, u) {
	      var i = -1,
	          o = t.length;for (r || (r = we), u || (u = []); ++i < o;) {
	        var f = t[i];0 < n && r(f) ? 1 < n ? En(f, n - 1, r, e, u) : s(u, f) : e || (u[u.length] = f);
	      }return u;
	    }function On(t, n) {
	      return t && ro(t, n, Iu);
	    }function Sn(t, n) {
	      return t && eo(t, n, Iu);
	    }function In(t, n) {
	      return f(n, function (n) {
	        return su(t[n]);
	      });
	    }function Rn(t, n) {
	      n = ke(n, t) ? [n] : Sr(n);for (var r = 0, e = n.length; null != t && r < e;) {
	        t = t[Ue(n[r++])];
	      }return r && r == e ? t : F;
	    }function zn(t, n, r) {
	      return n = n(t), nf(t) ? n : s(n, r(t));
	    }function Wn(t, n) {
	      return t > n;
	    }function Bn(t, n) {
	      return null != t && ui.call(t, n);
	    }function Ln(t, n) {
	      return null != t && n in Ju(t);
	    }function Un(t, n, r) {
	      for (var e = r ? a : c, u = t[0].length, i = t.length, o = i, f = Zu(i), s = 1 / 0, h = []; o--;) {
	        var p = t[o];o && n && (p = l(p, S(n))), s = Wi(p.length, s), f[o] = !r && (n || 120 <= u && 120 <= p.length) ? new qt(o && p) : F;
	      }var p = t[0],
	          _ = -1,
	          v = f[0];t: for (; ++_ < u && h.length < s;) {
	        var g = p[_],
	            d = n ? n(g) : g,
	            g = r || 0 !== g ? g : 0;if (v ? !R(v, d) : !e(h, d, r)) {
	          for (o = i; --o;) {
	            var y = f[o];if (y ? !R(y, d) : !e(t[o], d, r)) continue t;
	          }v && v.push(d), h.push(g);
	        }
	      }return h;
	    }function Cn(t, n, r) {
	      var e = {};return On(t, function (t, u, i) {
	        n(e, r(t), u, i);
	      }), e;
	    }function Mn(t, n, e) {
	      return ke(n, t) || (n = Sr(n), t = ze(t, n), n = Pe(n)), n = null == t ? t : t[Ue(n)], null == n ? F : r(n, t, e);
	    }function Dn(t) {
	      return vu(t) && "[object Arguments]" == fi.call(t);
	    }function Tn(t) {
	      return vu(t) && "[object ArrayBuffer]" == fi.call(t);
	    }function $n(t) {
	      return vu(t) && "[object Date]" == fi.call(t);
	    }function Fn(t, n, r, e, u) {
	      if (t === n) n = true;else if (null == t || null == n || !_u(t) && !vu(n)) n = t !== t && n !== n;else t: {
	        var i = nf(t),
	            o = nf(n),
	            f = "[object Array]",
	            c = "[object Array]";i || (f = Et(t), f = "[object Arguments]" == f ? "[object Object]" : f), o || (c = Et(n), c = "[object Arguments]" == c ? "[object Object]" : c);
	        var a = "[object Object]" == f,
	            o = "[object Object]" == c;if ((c = f == c) && ef(t)) {
	          if (!ef(n)) {
	            n = false;break t;
	          }i = true, a = false;
	        }if (c && !a) u || (u = new Kt()), n = i || af(t) ? ce(t, n, Fn, r, e, u) : ae(t, n, f, Fn, r, e, u);else {
	          if (!(2 & e) && (i = a && ui.call(t, "__wrapped__"), f = o && ui.call(n, "__wrapped__"), i || f)) {
	            t = i ? t.value() : t, n = f ? n.value() : n, u || (u = new Kt()), n = Fn(t, n, r, e, u);break t;
	          }if (c) {
	            n: if (u || (u = new Kt()), i = 2 & e, f = Iu(t), o = f.length, c = Iu(n).length, o == c || i) {
	              for (a = o; a--;) {
	                var l = f[a];if (!(i ? l in n : ui.call(n, l))) {
	                  n = false;break n;
	                }
	              }if ((c = u.get(t)) && u.get(n)) n = c == n;else {
	                c = true, u.set(t, n), u.set(n, t);for (var s = i; ++a < o;) {
	                  var l = f[a],
	                      h = t[l],
	                      p = n[l];if (r) var _ = i ? r(p, h, l, n, t, u) : r(h, p, l, t, n, u);if (_ === F ? h !== p && !Fn(h, p, r, e, u) : !_) {
	                    c = false;break;
	                  }s || (s = "constructor" == l);
	                }c && !s && (r = t.constructor, e = n.constructor, r != e && "constructor" in t && "constructor" in n && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (c = false)), u.delete(t), u.delete(n), n = c;
	              }
	            } else n = false;
	          } else n = false;
	        }
	      }return n;
	    }function Nn(t) {
	      return vu(t) && "[object Map]" == Et(t);
	    }function Pn(t, n, r, e) {
	      var u = r.length,
	          i = u,
	          o = !e;
	      if (null == t) return !i;for (t = Ju(t); u--;) {
	        var f = r[u];if (o && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return false;
	      }for (; ++u < i;) {
	        var f = r[u],
	            c = f[0],
	            a = t[c],
	            l = f[1];if (o && f[2]) {
	          if (a === F && !(c in t)) return false;
	        } else {
	          if (f = new Kt(), e) var s = e(a, l, c, t, n, f);if (s === F ? !Fn(l, a, e, 3, f) : !s) return false;
	        }
	      }return true;
	    }function Zn(t) {
	      return !(!_u(t) || ri && ri in t) && (su(t) ? ai : bt).test(Ce(t));
	    }function qn(t) {
	      return _u(t) && "[object RegExp]" == fi.call(t);
	    }function Vn(t) {
	      return vu(t) && "[object Set]" == Et(t);
	    }function Kn(t) {
	      return vu(t) && pu(t.length) && !!Ut[fi.call(t)];
	    }function Gn(t) {
	      return typeof t == "function" ? t : null == t ? Mu : (typeof t === "undefined" ? "undefined" : _typeof(t)) == "object" ? nf(t) ? Xn(t[0], t[1]) : Qn(t) : Fu(t);
	    }function Jn(t) {
	      if (!Oe(t)) return Ri(t);var n,
	          r = [];for (n in Ju(t)) {
	        ui.call(t, n) && "constructor" != n && r.push(n);
	      }return r;
	    }function Yn(t, n) {
	      return t < n;
	    }function Hn(t, n) {
	      var r = -1,
	          e = cu(t) ? Zu(t.length) : [];return to(t, function (t, u, i) {
	        e[++r] = n(t, u, i);
	      }), e;
	    }function Qn(t) {
	      var n = ge(t);return 1 == n.length && n[0][2] ? Se(n[0][0], n[0][1]) : function (r) {
	        return r === t || Pn(r, t, n);
	      };
	    }function Xn(t, n) {
	      return ke(t) && n === n && !_u(n) ? Se(Ue(t), n) : function (r) {
	        var e = Ou(r, t);return e === F && e === n ? Su(r, t) : Fn(n, e, F, 3);
	      };
	    }function tr(t, n, r, e, u) {
	      t !== n && ro(n, function (i, o) {
	        if (_u(i)) {
	          u || (u = new Kt());var f = u,
	              c = t[o],
	              a = n[o],
	              l = f.get(a);if (l) ln(t, o, l);else {
	            var l = e ? e(c, a, o + "", t, n, f) : F,
	                s = l === F;if (s) {
	              var h = nf(a),
	                  p = !h && ef(a),
	                  _ = !h && !p && af(a),
	                  l = a;h || p || _ ? nf(c) ? l = c : au(c) ? l = Cr(c) : p ? (s = false, l = Rr(a, true)) : _ ? (s = false, l = Wr(a, true)) : l = [] : du(a) || tf(a) ? (l = c, tf(c) ? l = ku(c) : (!_u(c) || r && su(c)) && (l = xe(a))) : s = false;
	            }s && (f.set(a, l), tr(l, a, r, e, f), f.delete(a)), ln(t, o, l);
	          }
	        } else f = e ? e(t[o], i, o + "", t, n, u) : F, f === F && (f = i), ln(t, o, f);
	      }, Ru);
	    }function nr(t, n) {
	      var r = t.length;if (r) return n += 0 > n ? r : 0, me(n, r) ? t[n] : F;
	    }function rr(t, n, r) {
	      var e = -1;return n = l(n.length ? n : [Mu], S(_e())), t = Hn(t, function (t) {
	        return { a: l(n, function (n) {
	            return n(t);
	          }), b: ++e, c: t };
	      }), A(t, function (t, n) {
	        var e;t: {
	          e = -1;for (var u = t.a, i = n.a, o = u.length, f = r.length; ++e < o;) {
	            var c = Br(u[e], i[e]);if (c) {
	              e = e >= f ? c : c * ("desc" == r[e] ? -1 : 1);break t;
	            }
	          }e = t.b - n.b;
	        }return e;
	      });
	    }function er(t, n) {
	      return t = Ju(t), ur(t, n, function (n, r) {
	        return r in t;
	      });
	    }function ur(t, n, r) {
	      for (var e = -1, u = n.length, i = {}; ++e < u;) {
	        var o = n[e],
	            f = t[o];r(f, o) && vn(i, o, f);
	      }return i;
	    }function ir(t) {
	      return function (n) {
	        return Rn(n, t);
	      };
	    }function or(t, n, r, e) {
	      var u = e ? y : d,
	          i = -1,
	          o = n.length,
	          f = t;for (t === n && (n = Cr(n)), r && (f = l(t, S(r))); ++i < o;) {
	        for (var c = 0, a = n[i], a = r ? r(a) : a; -1 < (c = u(f, a, c, e));) {
	          f !== t && yi.call(f, c, 1), yi.call(t, c, 1);
	        }
	      }return t;
	    }function fr(t, n) {
	      for (var r = t ? n.length : 0, e = r - 1; r--;) {
	        var u = n[r];if (r == e || u !== i) {
	          var i = u;if (me(u)) yi.call(t, u, 1);else if (ke(u, t)) delete t[Ue(u)];else {
	            var u = Sr(u),
	                o = ze(t, u);null != o && delete o[Ue(Pe(u))];
	          }
	        }
	      }
	    }function cr(t, n) {
	      return t + ki(Ui() * (n - t + 1));
	    }function ar(t, n) {
	      var r = "";if (!t || 1 > n || 9007199254740991 < n) return r;do {
	        n % 2 && (r += t), (n = ki(n / 2)) && (t += t);
	      } while (n);return r;
	    }function lr(t, n) {
	      return _o(Re(t, n, Mu), t + "");
	    }function sr(t) {
	      return on(Wu(t));
	    }function hr(t, n) {
	      var r = Wu(t);return Le(r, dn(n, 0, r.length));
	    }function pr(t, n, r, e) {
	      if (!_u(t)) return t;n = ke(n, t) ? [n] : Sr(n);for (var u = -1, i = n.length, o = i - 1, f = t; null != f && ++u < i;) {
	        var c = Ue(n[u]),
	            a = r;if (u != o) {
	          var l = f[c],
	              a = e ? e(l, c, f) : F;a === F && (a = _u(l) ? l : me(n[u + 1]) ? [] : {});
	        }sn(f, c, a), f = f[c];
	      }return t;
	    }function _r(t) {
	      return Le(Wu(t));
	    }function vr(t, n, r) {
	      var e = -1,
	          u = t.length;for (0 > n && (n = -n > u ? 0 : u + n), r = r > u ? u : r, 0 > r && (r += u), u = n > r ? 0 : r - n >>> 0, n >>>= 0, r = Zu(u); ++e < u;) {
	        r[e] = t[e + n];
	      }return r;
	    }function gr(t, n) {
	      var r;return to(t, function (t, e, u) {
	        return r = n(t, e, u), !r;
	      }), !!r;
	    }function dr(t, n, r) {
	      var e = 0,
	          u = t ? t.length : e;if (typeof n == "number" && n === n && 2147483647 >= u) {
	        for (; e < u;) {
	          var i = e + u >>> 1,
	              o = t[i];null !== o && !bu(o) && (r ? o <= n : o < n) ? e = i + 1 : u = i;
	        }return u;
	      }return yr(t, n, Mu, r);
	    }function yr(t, n, r, e) {
	      n = r(n);for (var u = 0, i = t ? t.length : 0, o = n !== n, f = null === n, c = bu(n), a = n === F; u < i;) {
	        var l = ki((u + i) / 2),
	            s = r(t[l]),
	            h = s !== F,
	            p = null === s,
	            _ = s === s,
	            v = bu(s);(o ? e || _ : a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : p || v ? 0 : e ? s <= n : s < n) ? u = l + 1 : i = l;
	      }return Wi(i, 4294967294);
	    }function br(t, n) {
	      for (var r = -1, e = t.length, u = 0, i = []; ++r < e;) {
	        var o = t[r],
	            f = n ? n(o) : o;if (!r || !fu(f, c)) {
	          var c = f;i[u++] = 0 === o ? 0 : o;
	        }
	      }return i;
	    }function xr(t) {
	      return typeof t == "number" ? t : bu(t) ? P : +t;
	    }function jr(t) {
	      if (typeof t == "string") return t;if (nf(t)) return l(t, jr) + "";if (bu(t)) return Qi ? Qi.call(t) : "";var n = t + "";return "0" == n && 1 / t == -N ? "-0" : n;
	    }function wr(t, n, r) {
	      var e = -1,
	          u = c,
	          i = t.length,
	          o = true,
	          f = [],
	          l = f;if (r) o = false, u = a;else if (200 <= i) {
	        if (u = n ? null : fo(t)) return M(u);o = false, u = R, l = new qt();
	      } else l = n ? [] : f;t: for (; ++e < i;) {
	        var s = t[e],
	            h = n ? n(s) : s,
	            s = r || 0 !== s ? s : 0;if (o && h === h) {
	          for (var p = l.length; p--;) {
	            if (l[p] === h) continue t;
	          }n && l.push(h), f.push(s);
	        } else u(l, h, r) || (l !== f && l.push(h), f.push(s));
	      }return f;
	    }function mr(t, n, r, e) {
	      for (var u = t.length, i = e ? u : -1; (e ? i-- : ++i < u) && n(t[i], i, t);) {}return r ? vr(t, e ? 0 : i, e ? i + 1 : u) : vr(t, e ? i + 1 : 0, e ? u : i);
	    }function Ar(t, n) {
	      var r = t;return r instanceof Dt && (r = r.value()), h(n, function (t, n) {
	        return n.func.apply(n.thisArg, s([t], n.args));
	      }, r);
	    }function kr(t, n, r) {
	      for (var e = -1, u = t.length; ++e < u;) {
	        var i = i ? s(wn(i, t[e], n, r), wn(t[e], i, n, r)) : t[e];
	      }return i && i.length ? wr(i, n, r) : [];
	    }function Er(t, n, r) {
	      for (var e = -1, u = t.length, i = n.length, o = {}; ++e < u;) {
	        r(o, t[e], e < i ? n[e] : F);
	      }return o;
	    }function Or(t) {
	      return au(t) ? t : [];
	    }function Sr(t) {
	      return nf(t) ? t : vo(t);
	    }function Ir(t, n, r) {
	      var e = t.length;return r = r === F ? e : r, !n && r >= e ? t : vr(t, n, r);
	    }function Rr(t, n) {
	      if (n) return t.slice();var r = t.length,
	          r = pi ? pi(r) : new t.constructor(r);
	      return t.copy(r), r;
	    }function zr(t) {
	      var n = new t.constructor(t.byteLength);return new hi(n).set(new hi(t)), n;
	    }function Wr(t, n) {
	      return new t.constructor(n ? zr(t.buffer) : t.buffer, t.byteOffset, t.length);
	    }function Br(t, n) {
	      if (t !== n) {
	        var r = t !== F,
	            e = null === t,
	            u = t === t,
	            i = bu(t),
	            o = n !== F,
	            f = null === n,
	            c = n === n,
	            a = bu(n);if (!f && !a && !i && t > n || i && o && c && !f && !a || e && o && c || !r && c || !u) return 1;if (!e && !i && !a && t < n || a && r && u && !e && !i || f && r && u || !o && u || !c) return -1;
	      }return 0;
	    }function Lr(t, n, r, e) {
	      var u = -1,
	          i = t.length,
	          o = r.length,
	          f = -1,
	          c = n.length,
	          a = zi(i - o, 0),
	          l = Zu(c + a);
	      for (e = !e; ++f < c;) {
	        l[f] = n[f];
	      }for (; ++u < o;) {
	        (e || u < i) && (l[r[u]] = t[u]);
	      }for (; a--;) {
	        l[f++] = t[u++];
	      }return l;
	    }function Ur(t, n, r, e) {
	      var u = -1,
	          i = t.length,
	          o = -1,
	          f = r.length,
	          c = -1,
	          a = n.length,
	          l = zi(i - f, 0),
	          s = Zu(l + a);for (e = !e; ++u < l;) {
	        s[u] = t[u];
	      }for (l = u; ++c < a;) {
	        s[l + c] = n[c];
	      }for (; ++o < f;) {
	        (e || u < i) && (s[l + r[o]] = t[u++]);
	      }return s;
	    }function Cr(t, n) {
	      var r = -1,
	          e = t.length;for (n || (n = Zu(e)); ++r < e;) {
	        n[r] = t[r];
	      }return n;
	    }function Mr(t, n, r, e) {
	      var u = !r;r || (r = {});for (var i = -1, o = n.length; ++i < o;) {
	        var f = n[i],
	            c = e ? e(r[f], t[f], f, r, t) : F;c === F && (c = t[f]), u ? vn(r, f, c) : sn(r, f, c);
	      }return r;
	    }function Dr(t, n) {
	      return Mr(t, ao(t), n);
	    }function Tr(t, n) {
	      return function (r, u) {
	        var i = nf(r) ? e : pn,
	            o = n ? n() : {};return i(r, t, _e(u, 2), o);
	      };
	    }function $r(t) {
	      return lr(function (n, r) {
	        var e = -1,
	            u = r.length,
	            i = 1 < u ? r[u - 1] : F,
	            o = 2 < u ? r[2] : F,
	            i = 3 < t.length && typeof i == "function" ? (u--, i) : F;for (o && Ae(r[0], r[1], o) && (i = 3 > u ? F : i, u = 1), n = Ju(n); ++e < u;) {
	          (o = r[e]) && t(n, o, e, i);
	        }return n;
	      });
	    }function Fr(t, n) {
	      return function (r, e) {
	        if (null == r) return r;if (!cu(r)) return t(r, e);for (var u = r.length, i = n ? u : -1, o = Ju(r); (n ? i-- : ++i < u) && false !== e(o[i], i, o);) {}
	        return r;
	      };
	    }function Nr(t) {
	      return function (n, r, e) {
	        var u = -1,
	            i = Ju(n);e = e(n);for (var o = e.length; o--;) {
	          var f = e[t ? o : ++u];if (false === r(i[f], f, i)) break;
	        }return n;
	      };
	    }function Pr(t, n, r) {
	      function e() {
	        return (this && this !== Pt && this instanceof e ? i : t).apply(u ? r : this, arguments);
	      }var u = 1 & n,
	          i = Vr(t);return e;
	    }function Zr(t) {
	      return function (n) {
	        n = Eu(n);var r = Wt.test(n) ? $(n) : F,
	            e = r ? r[0] : n.charAt(0);return n = r ? Ir(r, 1).join("") : n.slice(1), e[t]() + n;
	      };
	    }function qr(t) {
	      return function (n) {
	        return h(Uu(Lu(n).replace(St, "")), t, "");
	      };
	    }function Vr(t) {
	      return function () {
	        var n = arguments;switch (n.length) {case 0:
	            return new t();case 1:
	            return new t(n[0]);case 2:
	            return new t(n[0], n[1]);case 3:
	            return new t(n[0], n[1], n[2]);case 4:
	            return new t(n[0], n[1], n[2], n[3]);case 5:
	            return new t(n[0], n[1], n[2], n[3], n[4]);case 6:
	            return new t(n[0], n[1], n[2], n[3], n[4], n[5]);case 7:
	            return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);}var r = Xi(t.prototype),
	            n = t.apply(r, n);return _u(n) ? n : r;
	      };
	    }function Kr(t, n, e) {
	      function u() {
	        for (var o = arguments.length, f = Zu(o), c = o, a = pe(u); c--;) {
	          f[c] = arguments[c];
	        }return c = 3 > o && f[0] !== a && f[o - 1] !== a ? [] : C(f, a), o -= c.length, o < e ? ue(t, n, Yr, u.placeholder, F, f, c, F, F, e - o) : r(this && this !== Pt && this instanceof u ? i : t, this, f);
	      }var i = Vr(t);return u;
	    }function Gr(t) {
	      return function (n, r, e) {
	        var u = Ju(n);if (!cu(n)) {
	          var i = _e(r, 3);n = Iu(n), r = function r(t) {
	            return i(u[t], t, u);
	          };
	        }return r = t(n, r, e), -1 < r ? u[i ? n[r] : r] : F;
	      };
	    }function Jr(t) {
	      return le(function (n) {
	        var r = n.length,
	            e = r,
	            u = Mt.prototype.thru;for (t && n.reverse(); e--;) {
	          var i = n[e];if (typeof i != "function") throw new Qu("Expected a function");if (u && !o && "wrapper" == he(i)) var o = new Mt([], true);
	        }for (e = o ? e : r; ++e < r;) {
	          var i = n[e],
	              u = he(i),
	              f = "wrapper" == u ? co(i) : F,
	              o = f && Ee(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? o[he(f[0])].apply(o, f[3]) : 1 == i.length && Ee(i) ? o[u]() : o.thru(i);
	        }return function () {
	          var t = arguments,
	              e = t[0];if (o && 1 == t.length && nf(e) && 200 <= e.length) return o.plant(e).value();for (var u = 0, t = r ? n[u].apply(this, t) : e; ++u < r;) {
	            t = n[u].call(this, t);
	          }return t;
	        };
	      });
	    }function Yr(t, n, r, e, u, i, o, f, c, a) {
	      function l() {
	        for (var d = arguments.length, y = Zu(d), b = d; b--;) {
	          y[b] = arguments[b];
	        }if (_) {
	          var x,
	              j = pe(l),
	              b = y.length;for (x = 0; b--;) {
	            y[b] === j && ++x;
	          }
	        }if (e && (y = Lr(y, e, u, _)), i && (y = Ur(y, i, o, _)), d -= x, _ && d < a) return j = C(y, j), ue(t, n, Yr, l.placeholder, r, y, j, f, c, a - d);if (j = h ? r : this, b = p ? j[t] : t, d = y.length, f) {
	          x = y.length;for (var w = Wi(f.length, x), m = Cr(y); w--;) {
	            var A = f[w];y[w] = me(A, x) ? m[A] : F;
	          }
	        } else v && 1 < d && y.reverse();return s && c < d && (y.length = c), this && this !== Pt && this instanceof l && (b = g || Vr(b)), b.apply(j, y);
	      }var s = 128 & n,
	          h = 1 & n,
	          p = 2 & n,
	          _ = 24 & n,
	          v = 512 & n,
	          g = p ? F : Vr(t);return l;
	    }function Hr(t, n) {
	      return function (r, e) {
	        return Cn(r, t, n(e));
	      };
	    }function Qr(t, n) {
	      return function (r, e) {
	        var u;if (r === F && e === F) return n;if (r !== F && (u = r), e !== F) {
	          if (u === F) return e;typeof r == "string" || typeof e == "string" ? (r = jr(r), e = jr(e)) : (r = xr(r), e = xr(e)), u = t(r, e);
	        }return u;
	      };
	    }function Xr(t) {
	      return le(function (n) {
	        return n = l(n, S(_e())), lr(function (e) {
	          var u = this;return t(n, function (t) {
	            return r(t, u, e);
	          });
	        });
	      });
	    }function te(t, n) {
	      n = n === F ? " " : jr(n);var r = n.length;return 2 > r ? r ? ar(n, t) : n : (r = ar(n, Ai(t / T(n))), Wt.test(n) ? Ir($(r), 0, t).join("") : r.slice(0, t));
	    }function ne(t, n, e, u) {
	      function i() {
	        for (var n = -1, c = arguments.length, a = -1, l = u.length, s = Zu(l + c), h = this && this !== Pt && this instanceof i ? f : t; ++a < l;) {
	          s[a] = u[a];
	        }for (; c--;) {
	          s[a++] = arguments[++n];
	        }return r(h, o ? e : this, s);
	      }var o = 1 & n,
	          f = Vr(t);return i;
	    }function re(t) {
	      return function (n, r, e) {
	        e && typeof e != "number" && Ae(n, r, e) && (r = e = F), n = ju(n), r === F ? (r = n, n = 0) : r = ju(r), e = e === F ? n < r ? 1 : -1 : ju(e);var u = -1;r = zi(Ai((r - n) / (e || 1)), 0);for (var i = Zu(r); r--;) {
	          i[t ? r : ++u] = n, n += e;
	        }return i;
	      };
	    }function ee(t) {
	      return function (n, r) {
	        return typeof n == "string" && typeof r == "string" || (n = Au(n), r = Au(r)), t(n, r);
	      };
	    }function ue(t, n, r, e, u, i, o, f, c, a) {
	      var l = 8 & n,
	          s = l ? o : F;o = l ? F : o;var h = l ? i : F;return i = l ? F : i, n = (n | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & n || (n &= -4), u = [t, n, u, h, s, i, o, f, c, a], r = r.apply(F, u), Ee(t) && ho(r, u), r.placeholder = e, We(r, t, n);
	    }function ie(t) {
	      var n = Gu[t];return function (t, r) {
	        if (t = Au(t), r = Wi(wu(r), 292)) {
	          var e = (Eu(t) + "e").split("e"),
	              e = n(e[0] + "e" + (+e[1] + r)),
	              e = (Eu(e) + "e").split("e");return +(e[0] + "e" + (+e[1] - r));
	        }return n(t);
	      };
	    }function oe(t) {
	      return function (n) {
	        var r = Et(n);return "[object Map]" == r ? L(n) : "[object Set]" == r ? D(n) : O(n, t(n));
	      };
	    }function fe(t, n, r, e, u, i, o, f) {
	      var c = 2 & n;if (!c && typeof t != "function") throw new Qu("Expected a function");var a = e ? e.length : 0;
	      if (a || (n &= -97, e = u = F), o = o === F ? o : zi(wu(o), 0), f = f === F ? f : wu(f), a -= u ? u.length : 0, 64 & n) {
	        var l = e,
	            s = u;e = u = F;
	      }var h = c ? F : co(t);return i = [t, n, r, e, u, l, s, i, o, f], h && (r = i[1], t = h[1], n = r | t, e = 128 == t && 8 == r || 128 == t && 256 == r && i[7].length <= h[8] || 384 == t && h[7].length <= h[8] && 8 == r, 131 > n || e) && (1 & t && (i[2] = h[2], n |= 1 & r ? 0 : 4), (r = h[3]) && (e = i[3], i[3] = e ? Lr(e, r, h[4]) : r, i[4] = e ? C(i[3], "__lodash_placeholder__") : h[4]), (r = h[5]) && (e = i[5], i[5] = e ? Ur(e, r, h[6]) : r, i[6] = e ? C(i[5], "__lodash_placeholder__") : h[6]), (r = h[7]) && (i[7] = r), 128 & t && (i[8] = null == i[8] ? h[8] : Wi(i[8], h[8])), null == i[9] && (i[9] = h[9]), i[0] = h[0], i[1] = n), t = i[0], n = i[1], r = i[2], e = i[3], u = i[4], f = i[9] = null == i[9] ? c ? 0 : t.length : zi(i[9] - a, 0), !f && 24 & n && (n &= -25), We((h ? uo : ho)(n && 1 != n ? 8 == n || 16 == n ? Kr(t, n, f) : 32 != n && 33 != n || u.length ? Yr.apply(F, i) : ne(t, n, r, e) : Pr(t, n, r), i), t, n);
	    }function ce(t, n, r, e, u, i) {
	      var o = 2 & u,
	          f = t.length,
	          c = n.length;if (f != c && !(o && c > f)) return false;if ((c = i.get(t)) && i.get(n)) return c == n;var c = -1,
	          a = true,
	          l = 1 & u ? new qt() : F;for (i.set(t, n), i.set(n, t); ++c < f;) {
	        var s = t[c],
	            h = n[c];if (e) var p = o ? e(h, s, c, n, t, i) : e(s, h, c, t, n, i);if (p !== F) {
	          if (p) continue;a = false;break;
	        }if (l) {
	          if (!_(n, function (t, n) {
	            if (!R(l, n) && (s === t || r(s, t, e, u, i))) return l.push(n);
	          })) {
	            a = false;break;
	          }
	        } else if (s !== h && !r(s, h, e, u, i)) {
	          a = false;break;
	        }
	      }return i.delete(t), i.delete(n), a;
	    }function ae(t, n, r, e, u, i, o) {
	      switch (r) {case "[object DataView]":
	          if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) break;t = t.buffer, n = n.buffer;case "[object ArrayBuffer]":
	          if (t.byteLength != n.byteLength || !e(new hi(t), new hi(n))) break;return true;case "[object Boolean]":case "[object Date]":case "[object Number]":
	          return fu(+t, +n);case "[object Error]":
	          return t.name == n.name && t.message == n.message;case "[object RegExp]":case "[object String]":
	          return t == n + "";case "[object Map]":
	          var f = L;case "[object Set]":
	          if (f || (f = M), t.size != n.size && !(2 & i)) break;return (r = o.get(t)) ? r == n : (i |= 1, o.set(t, n), n = ce(f(t), f(n), e, u, i, o), o.delete(t), n);case "[object Symbol]":
	          if (Hi) return Hi.call(t) == Hi.call(n);}return false;
	    }function le(t) {
	      return _o(Re(t, F, Fe), t + "");
	    }function se(t) {
	      return zn(t, Iu, ao);
	    }function he(t) {
	      for (var n = t.name + "", r = Zi[n], e = ui.call(Zi, n) ? r.length : 0; e--;) {
	        var u = r[e],
	            i = u.func;if (null == i || i == t) return u.name;
	      }return n;
	    }function pe(t) {
	      return (ui.call(Ot, "placeholder") ? Ot : t).placeholder;
	    }function _e() {
	      var t = Ot.iteratee || Du,
	          t = t === Du ? Gn : t;return arguments.length ? t(arguments[0], arguments[1]) : t;
	    }function ve(t, n) {
	      var r = t.__data__,
	          e = typeof n === "undefined" ? "undefined" : _typeof(n);return ("string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== n : null === n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
	    }function ge(t) {
	      for (var n = Iu(t), r = n.length; r--;) {
	        var e = n[r],
	            u = t[e];n[r] = [e, u, u === u && !_u(u)];
	      }return n;
	    }function de(t, n) {
	      var r = null == t ? F : t[n];return Zn(r) ? r : F;
	    }function ye(t, n, r) {
	      n = ke(n, t) ? [n] : Sr(n);for (var e = -1, u = n.length, i = false; ++e < u;) {
	        var o = Ue(n[e]);if (!(i = null != t && r(t, o))) break;t = t[o];
	      }return i || ++e != u ? i : (u = t ? t.length : 0, !!u && pu(u) && me(o, u) && (nf(t) || tf(t)));
	    }function be(t) {
	      var n = t.length,
	          r = t.constructor(n);return n && "string" == typeof t[0] && ui.call(t, "index") && (r.index = t.index, r.input = t.input), r;
	    }function xe(t) {
	      return typeof t.constructor != "function" || Oe(t) ? {} : Xi(_i(t));
	    }function je(r, e, u, i) {
	      var o = r.constructor;
	      switch (e) {case "[object ArrayBuffer]":
	          return zr(r);case "[object Boolean]":case "[object Date]":
	          return new o(+r);case "[object DataView]":
	          return e = i ? zr(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.byteLength);case "[object Float32Array]":case "[object Float64Array]":case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
	          return Wr(r, i);case "[object Map]":
	          return e = i ? u(L(r), true) : L(r), h(e, t, new r.constructor());case "[object Number]":case "[object String]":
	          return new o(r);case "[object RegExp]":
	          return e = new r.constructor(r.source, gt.exec(r)), e.lastIndex = r.lastIndex, e;case "[object Set]":
	          return e = i ? u(M(r), true) : M(r), h(e, n, new r.constructor());case "[object Symbol]":
	          return Hi ? Ju(Hi.call(r)) : {};}
	    }function we(t) {
	      return nf(t) || tf(t) || !!(bi && t && t[bi]);
	    }function me(t, n) {
	      return n = null == n ? 9007199254740991 : n, !!n && (typeof t == "number" || jt.test(t)) && -1 < t && 0 == t % 1 && t < n;
	    }function Ae(t, n, r) {
	      if (!_u(r)) return false;
	      var e = typeof n === "undefined" ? "undefined" : _typeof(n);return !!("number" == e ? cu(r) && me(n, r.length) : "string" == e && n in r) && fu(r[n], t);
	    }function ke(t, n) {
	      if (nf(t)) return false;var r = typeof t === "undefined" ? "undefined" : _typeof(t);return !("number" != r && "symbol" != r && "boolean" != r && null != t && !bu(t)) || rt.test(t) || !nt.test(t) || null != n && t in Ju(n);
	    }function Ee(t) {
	      var n = he(t),
	          r = Ot[n];return typeof r == "function" && n in Dt.prototype && (t === r || (n = co(r), !!n && t === n[0]));
	    }function Oe(t) {
	      var n = t && t.constructor;return t === (typeof n == "function" && n.prototype || ti);
	    }function Se(t, n) {
	      return function (r) {
	        return null != r && r[t] === n && (n !== F || t in Ju(r));
	      };
	    }function Ie(t, n, r, e, u, i) {
	      return _u(t) && _u(n) && (i.set(n, t), tr(t, n, F, Ie, i), i.delete(n)), t;
	    }function Re(t, n, e) {
	      return n = zi(n === F ? t.length - 1 : n, 0), function () {
	        for (var u = arguments, i = -1, o = zi(u.length - n, 0), f = Zu(o); ++i < o;) {
	          f[i] = u[n + i];
	        }for (i = -1, o = Zu(n + 1); ++i < n;) {
	          o[i] = u[i];
	        }return o[n] = e(f), r(t, this, o);
	      };
	    }function ze(t, n) {
	      return 1 == n.length ? t : Rn(t, vr(n, 0, -1));
	    }function We(t, n, r) {
	      var e = n + "";n = _o;var u,
	          i = Me;return u = (u = e.match(st)) ? u[1].split(ht) : [], r = i(u, r), (i = r.length) && (u = i - 1, r[u] = (1 < i ? "& " : "") + r[u], r = r.join(2 < i ? ", " : " "), e = e.replace(lt, "{\n/* [wrapped with " + r + "] */\n")), n(t, e);
	    }function Be(t) {
	      var n = 0,
	          r = 0;return function () {
	        var e = Bi(),
	            u = 16 - (e - r);if (r = e, 0 < u) {
	          if (500 <= ++n) return arguments[0];
	        } else n = 0;return t.apply(F, arguments);
	      };
	    }function Le(t, n) {
	      var r = -1,
	          e = t.length,
	          u = e - 1;for (n = n === F ? e : n; ++r < n;) {
	        var e = cr(r, u),
	            i = t[e];t[e] = t[r], t[r] = i;
	      }return t.length = n, t;
	    }function Ue(t) {
	      if (typeof t == "string" || bu(t)) return t;var n = t + "";return "0" == n && 1 / t == -N ? "-0" : n;
	    }function Ce(t) {
	      if (null != t) {
	        try {
	          return ei.call(t);
	        } catch (t) {}return t + "";
	      }return "";
	    }function Me(t, n) {
	      return u(Z, function (r) {
	        var e = "_." + r[0];n & r[1] && !c(t, e) && t.push(e);
	      }), t.sort();
	    }function De(t) {
	      if (t instanceof Dt) return t.clone();var n = new Mt(t.__wrapped__, t.__chain__);return n.__actions__ = Cr(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
	    }function Te(t, n, r) {
	      var e = t ? t.length : 0;return e ? (r = null == r ? 0 : wu(r), 0 > r && (r = zi(e + r, 0)), g(t, _e(n, 3), r)) : -1;
	    }function $e(t, n, r) {
	      var e = t ? t.length : 0;if (!e) return -1;var u = e - 1;return r !== F && (u = wu(r), u = 0 > r ? zi(e + u, 0) : Wi(u, e - 1)), g(t, _e(n, 3), u, true);
	    }function Fe(t) {
	      return t && t.length ? En(t, 1) : [];
	    }function Ne(t) {
	      return t && t.length ? t[0] : F;
	    }function Pe(t) {
	      var n = t ? t.length : 0;return n ? t[n - 1] : F;
	    }function Ze(t, n) {
	      return t && t.length && n && n.length ? or(t, n) : t;
	    }function qe(t) {
	      return t ? Ci.call(t) : t;
	    }function Ve(t) {
	      if (!t || !t.length) return [];var n = 0;return t = f(t, function (t) {
	        if (au(t)) return n = zi(t.length, n), true;
	      }), E(n, function (n) {
	        return l(t, j(n));
	      });
	    }function Ke(t, n) {
	      if (!t || !t.length) return [];var e = Ve(t);return null == n ? e : l(e, function (t) {
	        return r(n, F, t);
	      });
	    }function Ge(t) {
	      return t = Ot(t), t.__chain__ = true, t;
	    }function Je(t, n) {
	      return n(t);
	    }function Ye() {
	      return this;
	    }function He(t, n) {
	      return (nf(t) ? u : to)(t, _e(n, 3));
	    }function Qe(t, n) {
	      return (nf(t) ? i : no)(t, _e(n, 3));
	    }function Xe(t, n) {
	      return (nf(t) ? l : Hn)(t, _e(n, 3));
	    }function tu(t, n, r) {
	      return n = r ? F : n, n = t && null == n ? t.length : n, fe(t, 128, F, F, F, F, n);
	    }function nu(t, n) {
	      var r;if (typeof n != "function") throw new Qu("Expected a function");return t = wu(t), function () {
	        return 0 < --t && (r = n.apply(this, arguments)), 1 >= t && (n = F), r;
	      };
	    }function ru(t, n, r) {
	      return n = r ? F : n, t = fe(t, 8, F, F, F, F, F, n), t.placeholder = ru.placeholder, t;
	    }function eu(t, n, r) {
	      return n = r ? F : n, t = fe(t, 16, F, F, F, F, F, n), t.placeholder = eu.placeholder, t;
	    }function uu(t, n, r) {
	      function e(n) {
	        var r = c,
	            e = a;return c = a = F, _ = n, s = t.apply(e, r);
	      }function u(t) {
	        var r = t - p;return t -= _, p === F || r >= n || 0 > r || g && t >= l;
	      }function i() {
	        var t = Po();if (u(t)) return o(t);var r,
	            e = po;r = t - _, t = n - (t - p), r = g ? Wi(t, l - r) : t, h = e(i, r);
	      }function o(t) {
	        return h = F, d && c ? e(t) : (c = a = F, s);
	      }function f() {
	        var t = Po(),
	            r = u(t);if (c = arguments, a = this, p = t, r) {
	          if (h === F) return _ = t = p, h = po(i, n), v ? e(t) : s;if (g) return h = po(i, n), e(p);
	        }return h === F && (h = po(i, n)), s;
	      }var c,
	          a,
	          l,
	          s,
	          h,
	          p,
	          _ = 0,
	          v = false,
	          g = false,
	          d = true;if (typeof t != "function") throw new Qu("Expected a function");return n = Au(n) || 0, _u(r) && (v = !!r.leading, l = (g = "maxWait" in r) ? zi(Au(r.maxWait) || 0, n) : l, d = "trailing" in r ? !!r.trailing : d), f.cancel = function () {
	        h !== F && oo(h), _ = 0, c = p = a = h = F;
	      }, f.flush = function () {
	        return h === F ? s : o(Po());
	      }, f;
	    }function iu(t, n) {
	      function r() {
	        var e = arguments,
	            u = n ? n.apply(this, e) : e[0],
	            i = r.cache;return i.has(u) ? i.get(u) : (e = t.apply(this, e), r.cache = i.set(u, e) || i, e);
	      }if (typeof t != "function" || n && typeof n != "function") throw new Qu("Expected a function");return r.cache = new (iu.Cache || Zt)(), r;
	    }function ou(t) {
	      if (typeof t != "function") throw new Qu("Expected a function");return function () {
	        var n = arguments;switch (n.length) {case 0:
	            return !t.call(this);case 1:
	            return !t.call(this, n[0]);case 2:
	            return !t.call(this, n[0], n[1]);case 3:
	            return !t.call(this, n[0], n[1], n[2]);}return !t.apply(this, n);
	      };
	    }function fu(t, n) {
	      return t === n || t !== t && n !== n;
	    }function cu(t) {
	      return null != t && pu(t.length) && !su(t);
	    }function au(t) {
	      return vu(t) && cu(t);
	    }function lu(t) {
	      return !!vu(t) && ("[object Error]" == fi.call(t) || typeof t.message == "string" && typeof t.name == "string");
	    }function su(t) {
	      return t = _u(t) ? fi.call(t) : "", "[object Function]" == t || "[object GeneratorFunction]" == t || "[object Proxy]" == t;
	    }function hu(t) {
	      return typeof t == "number" && t == wu(t);
	    }function pu(t) {
	      return typeof t == "number" && -1 < t && 0 == t % 1 && 9007199254740991 >= t;
	    }function _u(t) {
	      var n = typeof t === "undefined" ? "undefined" : _typeof(t);return null != t && ("object" == n || "function" == n);
	    }function vu(t) {
	      return null != t && (typeof t === "undefined" ? "undefined" : _typeof(t)) == "object";
	    }function gu(t) {
	      return typeof t == "number" || vu(t) && "[object Number]" == fi.call(t);
	    }function du(t) {
	      return !(!vu(t) || "[object Object]" != fi.call(t)) && (t = _i(t), null === t || (t = ui.call(t, "constructor") && t.constructor, typeof t == "function" && t instanceof t && ei.call(t) == oi));
	    }function yu(t) {
	      return typeof t == "string" || !nf(t) && vu(t) && "[object String]" == fi.call(t);
	    }function bu(t) {
	      return (typeof t === "undefined" ? "undefined" : _typeof(t)) == "symbol" || vu(t) && "[object Symbol]" == fi.call(t);
	    }function xu(t) {
	      if (!t) return [];if (cu(t)) return yu(t) ? $(t) : Cr(t);if (vi && t[vi]) {
	        t = t[vi]();
	        for (var n, r = []; !(n = t.next()).done;) {
	          r.push(n.value);
	        }return r;
	      }return n = Et(t), ("[object Map]" == n ? L : "[object Set]" == n ? M : Wu)(t);
	    }function ju(t) {
	      return t ? (t = Au(t), t === N || t === -N ? 1.7976931348623157e308 * (0 > t ? -1 : 1) : t === t ? t : 0) : 0 === t ? t : 0;
	    }function wu(t) {
	      t = ju(t);var n = t % 1;return t === t ? n ? t - n : t : 0;
	    }function mu(t) {
	      return t ? dn(wu(t), 0, 4294967295) : 0;
	    }function Au(t) {
	      if (typeof t == "number") return t;if (bu(t)) return P;if (_u(t) && (t = typeof t.valueOf == "function" ? t.valueOf() : t, t = _u(t) ? t + "" : t), typeof t != "string") return 0 === t ? t : +t;
	      t = t.replace(ft, "");var n = yt.test(t);return n || xt.test(t) ? $t(t.slice(2), n ? 2 : 8) : dt.test(t) ? P : +t;
	    }function ku(t) {
	      return Mr(t, Ru(t));
	    }function Eu(t) {
	      return null == t ? "" : jr(t);
	    }function Ou(t, n, r) {
	      return t = null == t ? F : Rn(t, n), t === F ? r : t;
	    }function Su(t, n) {
	      return null != t && ye(t, n, Ln);
	    }function Iu(t) {
	      return cu(t) ? tn(t) : Jn(t);
	    }function Ru(t) {
	      if (cu(t)) t = tn(t, true);else if (_u(t)) {
	        var n,
	            r = Oe(t),
	            e = [];for (n in t) {
	          ("constructor" != n || !r && ui.call(t, n)) && e.push(n);
	        }t = e;
	      } else {
	        if (n = [], null != t) for (r in Ju(t)) {
	          n.push(r);
	        }t = n;
	      }return t;
	    }function zu(t, n) {
	      return null == t ? {} : ur(t, zn(t, Ru, lo), _e(n));
	    }function Wu(t) {
	      return t ? I(t, Iu(t)) : [];
	    }function Bu(t) {
	      return Uf(Eu(t).toLowerCase());
	    }function Lu(t) {
	      return (t = Eu(t)) && t.replace(wt, nn).replace(It, "");
	    }function Uu(t, n, r) {
	      return t = Eu(t), n = r ? F : n, n === F ? Bt.test(t) ? t.match(zt) || [] : t.match(pt) || [] : t.match(n) || [];
	    }function Cu(t) {
	      return function () {
	        return t;
	      };
	    }function Mu(t) {
	      return t;
	    }function Du(t) {
	      return Gn(typeof t == "function" ? t : yn(t, true));
	    }function Tu(t, n, r) {
	      var e = Iu(n),
	          i = In(n, e);null != r || _u(n) && (i.length || !e.length) || (r = n, n = t, t = this, i = In(n, Iu(n)));var o = !(_u(r) && "chain" in r && !r.chain),
	          f = su(t);return u(i, function (r) {
	        var e = n[r];t[r] = e, f && (t.prototype[r] = function () {
	          var n = this.__chain__;if (o || n) {
	            var r = t(this.__wrapped__);return (r.__actions__ = Cr(this.__actions__)).push({ func: e, args: arguments, thisArg: t }), r.__chain__ = n, r;
	          }return e.apply(t, s([this.value()], arguments));
	        });
	      }), t;
	    }function $u() {}function Fu(t) {
	      return ke(t) ? j(Ue(t)) : ir(t);
	    }function Nu() {
	      return [];
	    }function Pu() {
	      return false;
	    }kt = kt ? un.defaults(Pt.Object(), kt, un.pick(Pt, Lt)) : Pt;
	    var Zu = kt.Array,
	        qu = kt.Date,
	        Vu = kt.Error,
	        Ku = kt.Function,
	        Gu = kt.Math,
	        Ju = kt.Object,
	        Yu = kt.RegExp,
	        Hu = kt.String,
	        Qu = kt.TypeError,
	        Xu = Zu.prototype,
	        ti = Ju.prototype,
	        ni = kt["__core-js_shared__"],
	        ri = function () {
	      var t = /[^.]+$/.exec(ni && ni.keys && ni.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
	    }(),
	        ei = Ku.prototype.toString,
	        ui = ti.hasOwnProperty,
	        ii = 0,
	        oi = ei.call(Ju),
	        fi = ti.toString,
	        ci = Pt._,
	        ai = Yu("^" + ei.call(ui).replace(it, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
	        li = Vt ? kt.Buffer : F,
	        si = kt.Symbol,
	        hi = kt.Uint8Array,
	        pi = li ? li.f : F,
	        _i = U(Ju.getPrototypeOf, Ju),
	        vi = si ? si.iterator : F,
	        gi = Ju.create,
	        di = ti.propertyIsEnumerable,
	        yi = Xu.splice,
	        bi = si ? si.isConcatSpreadable : F,
	        xi = function () {
	      try {
	        var t = de(Ju, "defineProperty");return t({}, "", {}), t;
	      } catch (t) {}
	    }(),
	        ji = kt.clearTimeout !== Pt.clearTimeout && kt.clearTimeout,
	        wi = qu && qu.now !== Pt.Date.now && qu.now,
	        mi = kt.setTimeout !== Pt.setTimeout && kt.setTimeout,
	        Ai = Gu.ceil,
	        ki = Gu.floor,
	        Ei = Ju.getOwnPropertySymbols,
	        Oi = li ? li.isBuffer : F,
	        Si = kt.isFinite,
	        Ii = Xu.join,
	        Ri = U(Ju.keys, Ju),
	        zi = Gu.max,
	        Wi = Gu.min,
	        Bi = qu.now,
	        Li = kt.parseInt,
	        Ui = Gu.random,
	        Ci = Xu.reverse,
	        Mi = de(kt, "DataView"),
	        Di = de(kt, "Map"),
	        Ti = de(kt, "Promise"),
	        $i = de(kt, "Set"),
	        Fi = de(kt, "WeakMap"),
	        Ni = de(Ju, "create"),
	        Pi = Fi && new Fi(),
	        Zi = {},
	        qi = Ce(Mi),
	        Vi = Ce(Di),
	        Ki = Ce(Ti),
	        Gi = Ce($i),
	        Ji = Ce(Fi),
	        Yi = si ? si.prototype : F,
	        Hi = Yi ? Yi.valueOf : F,
	        Qi = Yi ? Yi.toString : F,
	        Xi = function () {
	      function t() {}return function (n) {
	        return _u(n) ? gi ? gi(n) : (t.prototype = n, n = new t(), t.prototype = F, n) : {};
	      };
	    }();Ot.templateSettings = { escape: Q, evaluate: X, interpolate: tt, variable: "", imports: { _: Ot } }, Ot.prototype = Rt.prototype, Ot.prototype.constructor = Ot, Mt.prototype = Xi(Rt.prototype), Mt.prototype.constructor = Mt, Dt.prototype = Xi(Rt.prototype), Dt.prototype.constructor = Dt, Ft.prototype.clear = function () {
	      this.__data__ = Ni ? Ni(null) : {}, this.size = 0;
	    }, Ft.prototype.delete = function (t) {
	      return t = this.has(t) && delete this.__data__[t], this.size -= t ? 1 : 0, t;
	    }, Ft.prototype.get = function (t) {
	      var n = this.__data__;return Ni ? (t = n[t], "__lodash_hash_undefined__" === t ? F : t) : ui.call(n, t) ? n[t] : F;
	    }, Ft.prototype.has = function (t) {
	      var n = this.__data__;return Ni ? n[t] !== F : ui.call(n, t);
	    }, Ft.prototype.set = function (t, n) {
	      var r = this.__data__;return this.size += this.has(t) ? 0 : 1, r[t] = Ni && n === F ? "__lodash_hash_undefined__" : n, this;
	    }, Nt.prototype.clear = function () {
	      this.__data__ = [], this.size = 0;
	    }, Nt.prototype.delete = function (t) {
	      var n = this.__data__;return t = hn(n, t), !(0 > t) && (t == n.length - 1 ? n.pop() : yi.call(n, t, 1), --this.size, true);
	    }, Nt.prototype.get = function (t) {
	      var n = this.__data__;return t = hn(n, t), 0 > t ? F : n[t][1];
	    }, Nt.prototype.has = function (t) {
	      return -1 < hn(this.__data__, t);
	    }, Nt.prototype.set = function (t, n) {
	      var r = this.__data__,
	          e = hn(r, t);return 0 > e ? (++this.size, r.push([t, n])) : r[e][1] = n, this;
	    }, Zt.prototype.clear = function () {
	      this.size = 0, this.__data__ = { hash: new Ft(), map: new (Di || Nt)(), string: new Ft() };
	    }, Zt.prototype.delete = function (t) {
	      return t = ve(this, t).delete(t), this.size -= t ? 1 : 0, t;
	    }, Zt.prototype.get = function (t) {
	      return ve(this, t).get(t);
	    }, Zt.prototype.has = function (t) {
	      return ve(this, t).has(t);
	    }, Zt.prototype.set = function (t, n) {
	      var r = ve(this, t),
	          e = r.size;return r.set(t, n), this.size += r.size == e ? 0 : 1, this;
	    }, qt.prototype.add = qt.prototype.push = function (t) {
	      return this.__data__.set(t, "__lodash_hash_undefined__"), this;
	    }, qt.prototype.has = function (t) {
	      return this.__data__.has(t);
	    }, Kt.prototype.clear = function () {
	      this.__data__ = new Nt(), this.size = 0;
	    }, Kt.prototype.delete = function (t) {
	      var n = this.__data__;return t = n.delete(t), this.size = n.size, t;
	    }, Kt.prototype.get = function (t) {
	      return this.__data__.get(t);
	    }, Kt.prototype.has = function (t) {
	      return this.__data__.has(t);
	    }, Kt.prototype.set = function (t, n) {
	      var r = this.__data__;if (r instanceof Nt) {
	        var e = r.__data__;if (!Di || 199 > e.length) return e.push([t, n]), this.size = ++r.size, this;r = this.__data__ = new Zt(e);
	      }return r.set(t, n), this.size = r.size, this;
	    };var to = Fr(On),
	        no = Fr(Sn, true),
	        ro = Nr(),
	        eo = Nr(true),
	        uo = Pi ? function (t, n) {
	      return Pi.set(t, n), t;
	    } : Mu,
	        io = xi ? function (t, n) {
	      return xi(t, "toString", { configurable: true, enumerable: false, value: Cu(n), writable: true });
	    } : Mu,
	        oo = ji || function (t) {
	      return Pt.clearTimeout(t);
	    },
	        fo = $i && 1 / M(new $i([, -0]))[1] == N ? function (t) {
	      return new $i(t);
	    } : $u,
	        co = Pi ? function (t) {
	      return Pi.get(t);
	    } : $u,
	        ao = Ei ? U(Ei, Ju) : Nu,
	        lo = Ei ? function (t) {
	      for (var n = []; t;) {
	        s(n, ao(t)), t = _i(t);
	      }return n;
	    } : Nu;(Mi && "[object DataView]" != Et(new Mi(new ArrayBuffer(1))) || Di && "[object Map]" != Et(new Di()) || Ti && "[object Promise]" != Et(Ti.resolve()) || $i && "[object Set]" != Et(new $i()) || Fi && "[object WeakMap]" != Et(new Fi())) && (Et = function Et(t) {
	      var n = fi.call(t);if (t = (t = "[object Object]" == n ? t.constructor : F) ? Ce(t) : F) switch (t) {
	        case qi:
	          return "[object DataView]";case Vi:
	          return "[object Map]";case Ki:
	          return "[object Promise]";case Gi:
	          return "[object Set]";case Ji:
	          return "[object WeakMap]";}return n;
	    });var so = ni ? su : Pu,
	        ho = Be(uo),
	        po = mi || function (t, n) {
	      return Pt.setTimeout(t, n);
	    },
	        _o = Be(io),
	        vo = function (t) {
	      t = iu(t, function (t) {
	        return 500 === n.size && n.clear(), t;
	      });var n = t.cache;return t;
	    }(function (t) {
	      t = Eu(t);var n = [];return et.test(t) && n.push(""), t.replace(ut, function (t, r, e, u) {
	        n.push(e ? u.replace(_t, "$1") : r || t);
	      }), n;
	    }),
	        go = lr(function (t, n) {
	      return au(t) ? wn(t, En(n, 1, au, true)) : [];
	    }),
	        yo = lr(function (t, n) {
	      var r = Pe(n);return au(r) && (r = F), au(t) ? wn(t, En(n, 1, au, true), _e(r, 2)) : [];
	    }),
	        bo = lr(function (t, n) {
	      var r = Pe(n);return au(r) && (r = F), au(t) ? wn(t, En(n, 1, au, true), F, r) : [];
	    }),
	        xo = lr(function (t) {
	      var n = l(t, Or);return n.length && n[0] === t[0] ? Un(n) : [];
	    }),
	        jo = lr(function (t) {
	      var n = Pe(t),
	          r = l(t, Or);return n === Pe(r) ? n = F : r.pop(), r.length && r[0] === t[0] ? Un(r, _e(n, 2)) : [];
	    }),
	        wo = lr(function (t) {
	      var n = Pe(t),
	          r = l(t, Or);return n === Pe(r) ? n = F : r.pop(), r.length && r[0] === t[0] ? Un(r, F, n) : [];
	    }),
	        mo = lr(Ze),
	        Ao = le(function (t, n) {
	      var r = t ? t.length : 0,
	          e = gn(t, n);
	      return fr(t, l(n, function (t) {
	        return me(t, r) ? +t : t;
	      }).sort(Br)), e;
	    }),
	        ko = lr(function (t) {
	      return wr(En(t, 1, au, true));
	    }),
	        Eo = lr(function (t) {
	      var n = Pe(t);return au(n) && (n = F), wr(En(t, 1, au, true), _e(n, 2));
	    }),
	        Oo = lr(function (t) {
	      var n = Pe(t);return au(n) && (n = F), wr(En(t, 1, au, true), F, n);
	    }),
	        So = lr(function (t, n) {
	      return au(t) ? wn(t, n) : [];
	    }),
	        Io = lr(function (t) {
	      return kr(f(t, au));
	    }),
	        Ro = lr(function (t) {
	      var n = Pe(t);return au(n) && (n = F), kr(f(t, au), _e(n, 2));
	    }),
	        zo = lr(function (t) {
	      var n = Pe(t);return au(n) && (n = F), kr(f(t, au), F, n);
	    }),
	        Wo = lr(Ve),
	        Bo = lr(function (t) {
	      var n = t.length,
	          n = 1 < n ? t[n - 1] : F,
	          n = typeof n == "function" ? (t.pop(), n) : F;return Ke(t, n);
	    }),
	        Lo = le(function (t) {
	      function n(n) {
	        return gn(n, t);
	      }var r = t.length,
	          e = r ? t[0] : 0,
	          u = this.__wrapped__;return !(1 < r || this.__actions__.length) && u instanceof Dt && me(e) ? (u = u.slice(e, +e + (r ? 1 : 0)), u.__actions__.push({ func: Je, args: [n], thisArg: F }), new Mt(u, this.__chain__).thru(function (t) {
	        return r && !t.length && t.push(F), t;
	      })) : this.thru(n);
	    }),
	        Uo = Tr(function (t, n, r) {
	      ui.call(t, r) ? ++t[r] : vn(t, r, 1);
	    }),
	        Co = Gr(Te),
	        Mo = Gr($e),
	        Do = Tr(function (t, n, r) {
	      ui.call(t, r) ? t[r].push(n) : vn(t, r, [n]);
	    }),
	        To = lr(function (t, n, e) {
	      var u = -1,
	          i = typeof n == "function",
	          o = ke(n),
	          f = cu(t) ? Zu(t.length) : [];return to(t, function (t) {
	        var c = i ? n : o && null != t ? t[n] : F;f[++u] = c ? r(c, t, e) : Mn(t, n, e);
	      }), f;
	    }),
	        $o = Tr(function (t, n, r) {
	      vn(t, r, n);
	    }),
	        Fo = Tr(function (t, n, r) {
	      t[r ? 0 : 1].push(n);
	    }, function () {
	      return [[], []];
	    }),
	        No = lr(function (t, n) {
	      if (null == t) return [];var r = n.length;return 1 < r && Ae(t, n[0], n[1]) ? n = [] : 2 < r && Ae(n[0], n[1], n[2]) && (n = [n[0]]), rr(t, En(n, 1), []);
	    }),
	        Po = wi || function () {
	      return Pt.Date.now();
	    },
	        Zo = lr(function (t, n, r) {
	      var e = 1;if (r.length) var u = C(r, pe(Zo)),
	          e = 32 | e;return fe(t, e, n, r, u);
	    }),
	        qo = lr(function (t, n, r) {
	      var e = 3;if (r.length) var u = C(r, pe(qo)),
	          e = 32 | e;return fe(n, e, t, r, u);
	    }),
	        Vo = lr(function (t, n) {
	      return jn(t, 1, n);
	    }),
	        Ko = lr(function (t, n, r) {
	      return jn(t, Au(n) || 0, r);
	    });iu.Cache = Zt;var Go = lr(function (t, n) {
	      n = 1 == n.length && nf(n[0]) ? l(n[0], S(_e())) : l(En(n, 1), S(_e()));var e = n.length;return lr(function (u) {
	        for (var i = -1, o = Wi(u.length, e); ++i < o;) {
	          u[i] = n[i].call(this, u[i]);
	        }return r(t, this, u);
	      });
	    }),
	        Jo = lr(function (t, n) {
	      return fe(t, 32, F, n, C(n, pe(Jo)));
	    }),
	        Yo = lr(function (t, n) {
	      return fe(t, 64, F, n, C(n, pe(Yo)));
	    }),
	        Ho = le(function (t, n) {
	      return fe(t, 256, F, F, F, n);
	    }),
	        Qo = ee(Wn),
	        Xo = ee(function (t, n) {
	      return t >= n;
	    }),
	        tf = Dn(function () {
	      return arguments;
	    }()) ? Dn : function (t) {
	      return vu(t) && ui.call(t, "callee") && !di.call(t, "callee");
	    },
	        nf = Zu.isArray,
	        rf = Gt ? S(Gt) : Tn,
	        ef = Oi || Pu,
	        uf = Jt ? S(Jt) : $n,
	        of = Yt ? S(Yt) : Nn,
	        ff = Ht ? S(Ht) : qn,
	        cf = Qt ? S(Qt) : Vn,
	        af = Xt ? S(Xt) : Kn,
	        lf = ee(Yn),
	        sf = ee(function (t, n) {
	      return t <= n;
	    }),
	        hf = $r(function (t, n) {
	      if (Oe(n) || cu(n)) Mr(n, Iu(n), t);else for (var r in n) {
	        ui.call(n, r) && sn(t, r, n[r]);
	      }
	    }),
	        pf = $r(function (t, n) {
	      Mr(n, Ru(n), t);
	    }),
	        _f = $r(function (t, n, r, e) {
	      Mr(n, Ru(n), t, e);
	    }),
	        vf = $r(function (t, n, r, e) {
	      Mr(n, Iu(n), t, e);
	    }),
	        gf = le(gn),
	        df = lr(function (t) {
	      return t.push(F, an), r(_f, F, t);
	    }),
	        yf = lr(function (t) {
	      return t.push(F, Ie), r(mf, F, t);
	    }),
	        bf = Hr(function (t, n, r) {
	      t[n] = r;
	    }, Cu(Mu)),
	        xf = Hr(function (t, n, r) {
	      ui.call(t, n) ? t[n].push(r) : t[n] = [r];
	    }, _e),
	        jf = lr(Mn),
	        wf = $r(function (t, n, r) {
	      tr(t, n, r);
	    }),
	        mf = $r(function (t, n, r, e) {
	      tr(t, n, r, e);
	    }),
	        Af = le(function (t, n) {
	      return null == t ? {} : (n = l(n, Ue), er(t, wn(zn(t, Ru, lo), n)));
	    }),
	        kf = le(function (t, n) {
	      return null == t ? {} : er(t, l(n, Ue));
	    }),
	        Ef = oe(Iu),
	        Of = oe(Ru),
	        Sf = qr(function (t, n, r) {
	      return n = n.toLowerCase(), t + (r ? Bu(n) : n);
	    }),
	        If = qr(function (t, n, r) {
	      return t + (r ? "-" : "") + n.toLowerCase();
	    }),
	        Rf = qr(function (t, n, r) {
	      return t + (r ? " " : "") + n.toLowerCase();
	    }),
	        zf = Zr("toLowerCase"),
	        Wf = qr(function (t, n, r) {
	      return t + (r ? "_" : "") + n.toLowerCase();
	    }),
	        Bf = qr(function (t, n, r) {
	      return t + (r ? " " : "") + Uf(n);
	    }),
	        Lf = qr(function (t, n, r) {
	      return t + (r ? " " : "") + n.toUpperCase();
	    }),
	        Uf = Zr("toUpperCase"),
	        Cf = lr(function (t, n) {
	      try {
	        return r(t, F, n);
	      } catch (t) {
	        return lu(t) ? t : new Vu(t);
	      }
	    }),
	        Mf = le(function (t, n) {
	      return u(n, function (n) {
	        n = Ue(n), vn(t, n, Zo(t[n], t));
	      }), t;
	    }),
	        Df = Jr(),
	        Tf = Jr(true),
	        $f = lr(function (t, n) {
	      return function (r) {
	        return Mn(r, t, n);
	      };
	    }),
	        Ff = lr(function (t, n) {
	      return function (r) {
	        return Mn(t, r, n);
	      };
	    }),
	        Nf = Xr(l),
	        Pf = Xr(o),
	        Zf = Xr(_),
	        qf = re(),
	        Vf = re(true),
	        Kf = Qr(function (t, n) {
	      return t + n;
	    }, 0),
	        Gf = ie("ceil"),
	        Jf = Qr(function (t, n) {
	      return t / n;
	    }, 1),
	        Yf = ie("floor"),
	        Hf = Qr(function (t, n) {
	      return t * n;
	    }, 1),
	        Qf = ie("round"),
	        Xf = Qr(function (t, n) {
	      return t - n;
	    }, 0);return Ot.after = function (t, n) {
	      if (typeof n != "function") throw new Qu("Expected a function");
	      return t = wu(t), function () {
	        if (1 > --t) return n.apply(this, arguments);
	      };
	    }, Ot.ary = tu, Ot.assign = hf, Ot.assignIn = pf, Ot.assignInWith = _f, Ot.assignWith = vf, Ot.at = gf, Ot.before = nu, Ot.bind = Zo, Ot.bindAll = Mf, Ot.bindKey = qo, Ot.castArray = function () {
	      if (!arguments.length) return [];var t = arguments[0];return nf(t) ? t : [t];
	    }, Ot.chain = Ge, Ot.chunk = function (t, n, r) {
	      if (n = (r ? Ae(t, n, r) : n === F) ? 1 : zi(wu(n), 0), r = t ? t.length : 0, !r || 1 > n) return [];for (var e = 0, u = 0, i = Zu(Ai(r / n)); e < r;) {
	        i[u++] = vr(t, e, e += n);
	      }return i;
	    }, Ot.compact = function (t) {
	      for (var n = -1, r = t ? t.length : 0, e = 0, u = []; ++n < r;) {
	        var i = t[n];i && (u[e++] = i);
	      }return u;
	    }, Ot.concat = function () {
	      var t = arguments.length;if (!t) return [];for (var n = Zu(t - 1), r = arguments[0]; t--;) {
	        n[t - 1] = arguments[t];
	      }return s(nf(r) ? Cr(r) : [r], En(n, 1));
	    }, Ot.cond = function (t) {
	      var n = t ? t.length : 0,
	          e = _e();return t = n ? l(t, function (t) {
	        if ("function" != typeof t[1]) throw new Qu("Expected a function");return [e(t[0]), t[1]];
	      }) : [], lr(function (e) {
	        for (var u = -1; ++u < n;) {
	          var i = t[u];if (r(i[0], this, e)) return r(i[1], this, e);
	        }
	      });
	    }, Ot.conforms = function (t) {
	      return bn(yn(t, true));
	    }, Ot.constant = Cu, Ot.countBy = Uo, Ot.create = function (t, n) {
	      var r = Xi(t);return n ? _n(r, n) : r;
	    }, Ot.curry = ru, Ot.curryRight = eu, Ot.debounce = uu, Ot.defaults = df, Ot.defaultsDeep = yf, Ot.defer = Vo, Ot.delay = Ko, Ot.difference = go, Ot.differenceBy = yo, Ot.differenceWith = bo, Ot.drop = function (t, n, r) {
	      var e = t ? t.length : 0;return e ? (n = r || n === F ? 1 : wu(n), vr(t, 0 > n ? 0 : n, e)) : [];
	    }, Ot.dropRight = function (t, n, r) {
	      var e = t ? t.length : 0;return e ? (n = r || n === F ? 1 : wu(n), n = e - n, vr(t, 0, 0 > n ? 0 : n)) : [];
	    }, Ot.dropRightWhile = function (t, n) {
	      return t && t.length ? mr(t, _e(n, 3), true, true) : [];
	    }, Ot.dropWhile = function (t, n) {
	      return t && t.length ? mr(t, _e(n, 3), true) : [];
	    }, Ot.fill = function (t, n, r, e) {
	      var u = t ? t.length : 0;if (!u) return [];for (r && typeof r != "number" && Ae(t, n, r) && (r = 0, e = u), u = t.length, r = wu(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === F || e > u ? u : wu(e), 0 > e && (e += u), e = r > e ? 0 : mu(e); r < e;) {
	        t[r++] = n;
	      }return t;
	    }, Ot.filter = function (t, n) {
	      return (nf(t) ? f : kn)(t, _e(n, 3));
	    }, Ot.flatMap = function (t, n) {
	      return En(Xe(t, n), 1);
	    }, Ot.flatMapDeep = function (t, n) {
	      return En(Xe(t, n), N);
	    }, Ot.flatMapDepth = function (t, n, r) {
	      return r = r === F ? 1 : wu(r), En(Xe(t, n), r);
	    }, Ot.flatten = Fe, Ot.flattenDeep = function (t) {
	      return t && t.length ? En(t, N) : [];
	    }, Ot.flattenDepth = function (t, n) {
	      return t && t.length ? (n = n === F ? 1 : wu(n), En(t, n)) : [];
	    }, Ot.flip = function (t) {
	      return fe(t, 512);
	    }, Ot.flow = Df, Ot.flowRight = Tf, Ot.fromPairs = function (t) {
	      for (var n = -1, r = t ? t.length : 0, e = {}; ++n < r;) {
	        var u = t[n];e[u[0]] = u[1];
	      }return e;
	    }, Ot.functions = function (t) {
	      return null == t ? [] : In(t, Iu(t));
	    }, Ot.functionsIn = function (t) {
	      return null == t ? [] : In(t, Ru(t));
	    }, Ot.groupBy = Do, Ot.initial = function (t) {
	      return t && t.length ? vr(t, 0, -1) : [];
	    }, Ot.intersection = xo, Ot.intersectionBy = jo, Ot.intersectionWith = wo, Ot.invert = bf, Ot.invertBy = xf, Ot.invokeMap = To, Ot.iteratee = Du, Ot.keyBy = $o, Ot.keys = Iu, Ot.keysIn = Ru, Ot.map = Xe, Ot.mapKeys = function (t, n) {
	      var r = {};return n = _e(n, 3), On(t, function (t, e, u) {
	        vn(r, n(t, e, u), t);
	      }), r;
	    }, Ot.mapValues = function (t, n) {
	      var r = {};return n = _e(n, 3), On(t, function (t, e, u) {
	        vn(r, e, n(t, e, u));
	      }), r;
	    }, Ot.matches = function (t) {
	      return Qn(yn(t, true));
	    }, Ot.matchesProperty = function (t, n) {
	      return Xn(t, yn(n, true));
	    }, Ot.memoize = iu, Ot.merge = wf, Ot.mergeWith = mf, Ot.method = $f, Ot.methodOf = Ff, Ot.mixin = Tu, Ot.negate = ou, Ot.nthArg = function (t) {
	      return t = wu(t), lr(function (n) {
	        return nr(n, t);
	      });
	    }, Ot.omit = Af, Ot.omitBy = function (t, n) {
	      return zu(t, ou(_e(n)));
	    }, Ot.once = function (t) {
	      return nu(2, t);
	    }, Ot.orderBy = function (t, n, r, e) {
	      return null == t ? [] : (nf(n) || (n = null == n ? [] : [n]), r = e ? F : r, nf(r) || (r = null == r ? [] : [r]), rr(t, n, r));
	    }, Ot.over = Nf, Ot.overArgs = Go, Ot.overEvery = Pf, Ot.overSome = Zf, Ot.partial = Jo, Ot.partialRight = Yo, Ot.partition = Fo, Ot.pick = kf, Ot.pickBy = zu, Ot.property = Fu, Ot.propertyOf = function (t) {
	      return function (n) {
	        return null == t ? F : Rn(t, n);
	      };
	    }, Ot.pull = mo, Ot.pullAll = Ze, Ot.pullAllBy = function (t, n, r) {
	      return t && t.length && n && n.length ? or(t, n, _e(r, 2)) : t;
	    }, Ot.pullAllWith = function (t, n, r) {
	      return t && t.length && n && n.length ? or(t, n, F, r) : t;
	    }, Ot.pullAt = Ao, Ot.range = qf, Ot.rangeRight = Vf, Ot.rearg = Ho, Ot.reject = function (t, n) {
	      return (nf(t) ? f : kn)(t, ou(_e(n, 3)));
	    }, Ot.remove = function (t, n) {
	      var r = [];if (!t || !t.length) return r;var e = -1,
	          u = [],
	          i = t.length;for (n = _e(n, 3); ++e < i;) {
	        var o = t[e];n(o, e, t) && (r.push(o), u.push(e));
	      }return fr(t, u), r;
	    }, Ot.rest = function (t, n) {
	      if (typeof t != "function") throw new Qu("Expected a function");
	      return n = n === F ? n : wu(n), lr(t, n);
	    }, Ot.reverse = qe, Ot.sampleSize = function (t, n, r) {
	      return n = (r ? Ae(t, n, r) : n === F) ? 1 : wu(n), (nf(t) ? fn : hr)(t, n);
	    }, Ot.set = function (t, n, r) {
	      return null == t ? t : pr(t, n, r);
	    }, Ot.setWith = function (t, n, r, e) {
	      return e = typeof e == "function" ? e : F, null == t ? t : pr(t, n, r, e);
	    }, Ot.shuffle = function (t) {
	      return (nf(t) ? cn : _r)(t);
	    }, Ot.slice = function (t, n, r) {
	      var e = t ? t.length : 0;return e ? (r && typeof r != "number" && Ae(t, n, r) ? (n = 0, r = e) : (n = null == n ? 0 : wu(n), r = r === F ? e : wu(r)), vr(t, n, r)) : [];
	    }, Ot.sortBy = No, Ot.sortedUniq = function (t) {
	      return t && t.length ? br(t) : [];
	    }, Ot.sortedUniqBy = function (t, n) {
	      return t && t.length ? br(t, _e(n, 2)) : [];
	    }, Ot.split = function (t, n, r) {
	      return r && typeof r != "number" && Ae(t, n, r) && (n = r = F), r = r === F ? 4294967295 : r >>> 0, r ? (t = Eu(t)) && (typeof n == "string" || null != n && !ff(n)) && (n = jr(n), !n && Wt.test(t)) ? Ir($(t), 0, r) : t.split(n, r) : [];
	    }, Ot.spread = function (t, n) {
	      if (typeof t != "function") throw new Qu("Expected a function");return n = n === F ? 0 : zi(wu(n), 0), lr(function (e) {
	        var u = e[n];return e = Ir(e, 0, n), u && s(e, u), r(t, this, e);
	      });
	    }, Ot.tail = function (t) {
	      var n = t ? t.length : 0;return n ? vr(t, 1, n) : [];
	    }, Ot.take = function (t, n, r) {
	      return t && t.length ? (n = r || n === F ? 1 : wu(n), vr(t, 0, 0 > n ? 0 : n)) : [];
	    }, Ot.takeRight = function (t, n, r) {
	      var e = t ? t.length : 0;return e ? (n = r || n === F ? 1 : wu(n), n = e - n, vr(t, 0 > n ? 0 : n, e)) : [];
	    }, Ot.takeRightWhile = function (t, n) {
	      return t && t.length ? mr(t, _e(n, 3), false, true) : [];
	    }, Ot.takeWhile = function (t, n) {
	      return t && t.length ? mr(t, _e(n, 3)) : [];
	    }, Ot.tap = function (t, n) {
	      return n(t), t;
	    }, Ot.throttle = function (t, n, r) {
	      var e = true,
	          u = true;if (typeof t != "function") throw new Qu("Expected a function");
	      return _u(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), uu(t, n, { leading: e, maxWait: n, trailing: u });
	    }, Ot.thru = Je, Ot.toArray = xu, Ot.toPairs = Ef, Ot.toPairsIn = Of, Ot.toPath = function (t) {
	      return nf(t) ? l(t, Ue) : bu(t) ? [t] : Cr(vo(t));
	    }, Ot.toPlainObject = ku, Ot.transform = function (t, n, r) {
	      var e = nf(t),
	          i = e || ef(t) || af(t);if (n = _e(n, 4), null == r) {
	        var o = t && t.constructor;r = i ? e ? new o() : [] : _u(t) && su(o) ? Xi(_i(t)) : {};
	      }return (i ? u : On)(t, function (t, e, u) {
	        return n(r, t, e, u);
	      }), r;
	    }, Ot.unary = function (t) {
	      return tu(t, 1);
	    }, Ot.union = ko, Ot.unionBy = Eo, Ot.unionWith = Oo, Ot.uniq = function (t) {
	      return t && t.length ? wr(t) : [];
	    }, Ot.uniqBy = function (t, n) {
	      return t && t.length ? wr(t, _e(n, 2)) : [];
	    }, Ot.uniqWith = function (t, n) {
	      return t && t.length ? wr(t, F, n) : [];
	    }, Ot.unset = function (t, n) {
	      var r;if (null == t) r = true;else {
	        r = t;var e = n,
	            e = ke(e, r) ? [e] : Sr(e);r = ze(r, e), e = Ue(Pe(e)), r = !(null != r && ui.call(r, e)) || delete r[e];
	      }return r;
	    }, Ot.unzip = Ve, Ot.unzipWith = Ke, Ot.update = function (t, n, r) {
	      return null == t ? t : pr(t, n, (typeof r == "function" ? r : Mu)(Rn(t, n)), void 0);
	    }, Ot.updateWith = function (t, n, r, e) {
	      return e = typeof e == "function" ? e : F, null != t && (t = pr(t, n, (typeof r == "function" ? r : Mu)(Rn(t, n)), e)), t;
	    }, Ot.values = Wu, Ot.valuesIn = function (t) {
	      return null == t ? [] : I(t, Ru(t));
	    }, Ot.without = So, Ot.words = Uu, Ot.wrap = function (t, n) {
	      return n = null == n ? Mu : n, Jo(n, t);
	    }, Ot.xor = Io, Ot.xorBy = Ro, Ot.xorWith = zo, Ot.zip = Wo, Ot.zipObject = function (t, n) {
	      return Er(t || [], n || [], sn);
	    }, Ot.zipObjectDeep = function (t, n) {
	      return Er(t || [], n || [], pr);
	    }, Ot.zipWith = Bo, Ot.entries = Ef, Ot.entriesIn = Of, Ot.extend = pf, Ot.extendWith = _f, Tu(Ot, Ot), Ot.add = Kf, Ot.attempt = Cf, Ot.camelCase = Sf, Ot.capitalize = Bu, Ot.ceil = Gf, Ot.clamp = function (t, n, r) {
	      return r === F && (r = n, n = F), r !== F && (r = Au(r), r = r === r ? r : 0), n !== F && (n = Au(n), n = n === n ? n : 0), dn(Au(t), n, r);
	    }, Ot.clone = function (t) {
	      return yn(t, false, true);
	    }, Ot.cloneDeep = function (t) {
	      return yn(t, true, true);
	    }, Ot.cloneDeepWith = function (t, n) {
	      return yn(t, true, true, n);
	    }, Ot.cloneWith = function (t, n) {
	      return yn(t, false, true, n);
	    }, Ot.conformsTo = function (t, n) {
	      return null == n || xn(t, n, Iu(n));
	    }, Ot.deburr = Lu, Ot.defaultTo = function (t, n) {
	      return null == t || t !== t ? n : t;
	    }, Ot.divide = Jf, Ot.endsWith = function (t, n, r) {
	      t = Eu(t), n = jr(n);var e = t.length,
	          e = r = r === F ? e : dn(wu(r), 0, e);return r -= n.length, 0 <= r && t.slice(r, e) == n;
	    }, Ot.eq = fu, Ot.escape = function (t) {
	      return (t = Eu(t)) && H.test(t) ? t.replace(J, rn) : t;
	    }, Ot.escapeRegExp = function (t) {
	      return (t = Eu(t)) && ot.test(t) ? t.replace(it, "\\$&") : t;
	    }, Ot.every = function (t, n, r) {
	      var e = nf(t) ? o : mn;return r && Ae(t, n, r) && (n = F), e(t, _e(n, 3));
	    }, Ot.find = Co, Ot.findIndex = Te, Ot.findKey = function (t, n) {
	      return v(t, _e(n, 3), On);
	    }, Ot.findLast = Mo, Ot.findLastIndex = $e, Ot.findLastKey = function (t, n) {
	      return v(t, _e(n, 3), Sn);
	    }, Ot.floor = Yf, Ot.forEach = He, Ot.forEachRight = Qe, Ot.forIn = function (t, n) {
	      return null == t ? t : ro(t, _e(n, 3), Ru);
	    }, Ot.forInRight = function (t, n) {
	      return null == t ? t : eo(t, _e(n, 3), Ru);
	    }, Ot.forOwn = function (t, n) {
	      return t && On(t, _e(n, 3));
	    }, Ot.forOwnRight = function (t, n) {
	      return t && Sn(t, _e(n, 3));
	    }, Ot.get = Ou, Ot.gt = Qo, Ot.gte = Xo, Ot.has = function (t, n) {
	      return null != t && ye(t, n, Bn);
	    }, Ot.hasIn = Su, Ot.head = Ne, Ot.identity = Mu, Ot.includes = function (t, n, r, e) {
	      return t = cu(t) ? t : Wu(t), r = r && !e ? wu(r) : 0, e = t.length, 0 > r && (r = zi(e + r, 0)), yu(t) ? r <= e && -1 < t.indexOf(n, r) : !!e && -1 < d(t, n, r);
	    }, Ot.indexOf = function (t, n, r) {
	      var e = t ? t.length : 0;return e ? (r = null == r ? 0 : wu(r), 0 > r && (r = zi(e + r, 0)), d(t, n, r)) : -1;
	    }, Ot.inRange = function (t, n, r) {
	      return n = ju(n), r === F ? (r = n, n = 0) : r = ju(r), t = Au(t), t >= Wi(n, r) && t < zi(n, r);
	    }, Ot.invoke = jf, Ot.isArguments = tf, Ot.isArray = nf, Ot.isArrayBuffer = rf, Ot.isArrayLike = cu, Ot.isArrayLikeObject = au, Ot.isBoolean = function (t) {
	      return true === t || false === t || vu(t) && "[object Boolean]" == fi.call(t);
	    }, Ot.isBuffer = ef, Ot.isDate = uf, Ot.isElement = function (t) {
	      return null != t && 1 === t.nodeType && vu(t) && !du(t);
	    }, Ot.isEmpty = function (t) {
	      if (cu(t) && (nf(t) || typeof t == "string" || typeof t.splice == "function" || ef(t) || af(t) || tf(t))) return !t.length;var n = Et(t);if ("[object Map]" == n || "[object Set]" == n) return !t.size;if (Oe(t)) return !Jn(t).length;for (var r in t) {
	        if (ui.call(t, r)) return false;
	      }return true;
	    }, Ot.isEqual = function (t, n) {
	      return Fn(t, n);
	    }, Ot.isEqualWith = function (t, n, r) {
	      var e = (r = typeof r == "function" ? r : F) ? r(t, n) : F;return e === F ? Fn(t, n, r) : !!e;
	    }, Ot.isError = lu, Ot.isFinite = function (t) {
	      return typeof t == "number" && Si(t);
	    }, Ot.isFunction = su, Ot.isInteger = hu, Ot.isLength = pu, Ot.isMap = of, Ot.isMatch = function (t, n) {
	      return t === n || Pn(t, n, ge(n));
	    }, Ot.isMatchWith = function (t, n, r) {
	      return r = typeof r == "function" ? r : F, Pn(t, n, ge(n), r);
	    }, Ot.isNaN = function (t) {
	      return gu(t) && t != +t;
	    }, Ot.isNative = function (t) {
	      if (so(t)) throw new Vu("Unsupported core-js use. Try https://github.com/es-shims.");return Zn(t);
	    }, Ot.isNil = function (t) {
	      return null == t;
	    }, Ot.isNull = function (t) {
	      return null === t;
	    }, Ot.isNumber = gu, Ot.isObject = _u, Ot.isObjectLike = vu, Ot.isPlainObject = du, Ot.isRegExp = ff, Ot.isSafeInteger = function (t) {
	      return hu(t) && -9007199254740991 <= t && 9007199254740991 >= t;
	    }, Ot.isSet = cf, Ot.isString = yu, Ot.isSymbol = bu, Ot.isTypedArray = af, Ot.isUndefined = function (t) {
	      return t === F;
	    }, Ot.isWeakMap = function (t) {
	      return vu(t) && "[object WeakMap]" == Et(t);
	    }, Ot.isWeakSet = function (t) {
	      return vu(t) && "[object WeakSet]" == fi.call(t);
	    }, Ot.join = function (t, n) {
	      return t ? Ii.call(t, n) : "";
	    }, Ot.kebabCase = If, Ot.last = Pe, Ot.lastIndexOf = function (t, n, r) {
	      var e = t ? t.length : 0;if (!e) return -1;var u = e;if (r !== F && (u = wu(r), u = 0 > u ? zi(e + u, 0) : Wi(u, e - 1)), n === n) {
	        for (r = u + 1; r-- && t[r] !== n;) {}t = r;
	      } else t = g(t, b, u, true);return t;
	    }, Ot.lowerCase = Rf, Ot.lowerFirst = zf, Ot.lt = lf, Ot.lte = sf, Ot.max = function (t) {
	      return t && t.length ? An(t, Mu, Wn) : F;
	    }, Ot.maxBy = function (t, n) {
	      return t && t.length ? An(t, _e(n, 2), Wn) : F;
	    }, Ot.mean = function (t) {
	      return x(t, Mu);
	    }, Ot.meanBy = function (t, n) {
	      return x(t, _e(n, 2));
	    }, Ot.min = function (t) {
	      return t && t.length ? An(t, Mu, Yn) : F;
	    }, Ot.minBy = function (t, n) {
	      return t && t.length ? An(t, _e(n, 2), Yn) : F;
	    }, Ot.stubArray = Nu, Ot.stubFalse = Pu, Ot.stubObject = function () {
	      return {};
	    }, Ot.stubString = function () {
	      return "";
	    }, Ot.stubTrue = function () {
	      return true;
	    }, Ot.multiply = Hf, Ot.nth = function (t, n) {
	      return t && t.length ? nr(t, wu(n)) : F;
	    }, Ot.noConflict = function () {
	      return Pt._ === this && (Pt._ = ci), this;
	    }, Ot.noop = $u, Ot.now = Po, Ot.pad = function (t, n, r) {
	      t = Eu(t);var e = (n = wu(n)) ? T(t) : 0;return !n || e >= n ? t : (n = (n - e) / 2, te(ki(n), r) + t + te(Ai(n), r));
	    }, Ot.padEnd = function (t, n, r) {
	      t = Eu(t);var e = (n = wu(n)) ? T(t) : 0;return n && e < n ? t + te(n - e, r) : t;
	    }, Ot.padStart = function (t, n, r) {
	      t = Eu(t);var e = (n = wu(n)) ? T(t) : 0;return n && e < n ? te(n - e, r) + t : t;
	    }, Ot.parseInt = function (t, n, r) {
	      return r || null == n ? n = 0 : n && (n = +n), Li(Eu(t).replace(ct, ""), n || 0);
	    }, Ot.random = function (t, n, r) {
	      if (r && typeof r != "boolean" && Ae(t, n, r) && (n = r = F), r === F && (typeof n == "boolean" ? (r = n, n = F) : typeof t == "boolean" && (r = t, t = F)), t === F && n === F ? (t = 0, n = 1) : (t = ju(t), n === F ? (n = t, t = 0) : n = ju(n)), t > n) {
	        var e = t;t = n, n = e;
	      }return r || t % 1 || n % 1 ? (r = Ui(), Wi(t + r * (n - t + Tt("1e-" + ((r + "").length - 1))), n)) : cr(t, n);
	    }, Ot.reduce = function (t, n, r) {
	      var e = nf(t) ? h : m,
	          u = 3 > arguments.length;return e(t, _e(n, 4), r, u, to);
	    }, Ot.reduceRight = function (t, n, r) {
	      var e = nf(t) ? p : m,
	          u = 3 > arguments.length;return e(t, _e(n, 4), r, u, no);
	    }, Ot.repeat = function (t, n, r) {
	      return n = (r ? Ae(t, n, r) : n === F) ? 1 : wu(n), ar(Eu(t), n);
	    }, Ot.replace = function () {
	      var t = arguments,
	          n = Eu(t[0]);return 3 > t.length ? n : n.replace(t[1], t[2]);
	    }, Ot.result = function (t, n, r) {
	      n = ke(n, t) ? [n] : Sr(n);var e = -1,
	          u = n.length;for (u || (t = F, u = 1); ++e < u;) {
	        var i = null == t ? F : t[Ue(n[e])];i === F && (e = u, i = r), t = su(i) ? i.call(t) : i;
	      }return t;
	    }, Ot.round = Qf, Ot.runInContext = w, Ot.sample = function (t) {
	      return (nf(t) ? on : sr)(t);
	    }, Ot.size = function (t) {
	      if (null == t) return 0;if (cu(t)) return yu(t) ? T(t) : t.length;var n = Et(t);return "[object Map]" == n || "[object Set]" == n ? t.size : Jn(t).length;
	    }, Ot.snakeCase = Wf, Ot.some = function (t, n, r) {
	      var e = nf(t) ? _ : gr;return r && Ae(t, n, r) && (n = F), e(t, _e(n, 3));
	    }, Ot.sortedIndex = function (t, n) {
	      return dr(t, n);
	    }, Ot.sortedIndexBy = function (t, n, r) {
	      return yr(t, n, _e(r, 2));
	    }, Ot.sortedIndexOf = function (t, n) {
	      var r = t ? t.length : 0;if (r) {
	        var e = dr(t, n);if (e < r && fu(t[e], n)) return e;
	      }return -1;
	    }, Ot.sortedLastIndex = function (t, n) {
	      return dr(t, n, true);
	    }, Ot.sortedLastIndexBy = function (t, n, r) {
	      return yr(t, n, _e(r, 2), true);
	    }, Ot.sortedLastIndexOf = function (t, n) {
	      if (t && t.length) {
	        var r = dr(t, n, true) - 1;if (fu(t[r], n)) return r;
	      }return -1;
	    }, Ot.startCase = Bf, Ot.startsWith = function (t, n, r) {
	      return t = Eu(t), r = dn(wu(r), 0, t.length), n = jr(n), t.slice(r, r + n.length) == n;
	    }, Ot.subtract = Xf, Ot.sum = function (t) {
	      return t && t.length ? k(t, Mu) : 0;
	    }, Ot.sumBy = function (t, n) {
	      return t && t.length ? k(t, _e(n, 2)) : 0;
	    }, Ot.template = function (t, n, r) {
	      var e = Ot.templateSettings;r && Ae(t, n, r) && (n = F), t = Eu(t), n = _f({}, n, e, an), r = _f({}, n.imports, e.imports, an);var u,
	          i,
	          o = Iu(r),
	          f = I(r, o),
	          c = 0;r = n.interpolate || mt;var a = "__p+='";r = Yu((n.escape || mt).source + "|" + r.source + "|" + (r === tt ? vt : mt).source + "|" + (n.evaluate || mt).source + "|$", "g");
	      var l = "sourceURL" in n ? "//# sourceURL=" + n.sourceURL + "\n" : "";if (t.replace(r, function (n, r, e, o, f, l) {
	        return e || (e = o), a += t.slice(c, l).replace(At, B), r && (u = true, a += "'+__e(" + r + ")+'"), f && (i = true, a += "';" + f + ";\n__p+='"), e && (a += "'+((__t=(" + e + "))==null?'':__t)+'"), c = l + n.length, n;
	      }), a += "';", (n = n.variable) || (a = "with(obj){" + a + "}"), a = (i ? a.replace(q, "") : a).replace(V, "$1").replace(K, "$1;"), a = "function(" + (n || "obj") + "){" + (n ? "" : "obj||(obj={});") + "var __t,__p=''" + (u ? ",__e=_.escape" : "") + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + a + "return __p}", n = Cf(function () {
	        return Ku(o, l + "return " + a).apply(F, f);
	      }), n.source = a, lu(n)) throw n;return n;
	    }, Ot.times = function (t, n) {
	      if (t = wu(t), 1 > t || 9007199254740991 < t) return [];var r = 4294967295,
	          e = Wi(t, 4294967295);for (n = _e(n), t -= 4294967295, e = E(e, n); ++r < t;) {
	        n(r);
	      }return e;
	    }, Ot.toFinite = ju, Ot.toInteger = wu, Ot.toLength = mu, Ot.toLower = function (t) {
	      return Eu(t).toLowerCase();
	    }, Ot.toNumber = Au, Ot.toSafeInteger = function (t) {
	      return dn(wu(t), -9007199254740991, 9007199254740991);
	    }, Ot.toString = Eu, Ot.toUpper = function (t) {
	      return Eu(t).toUpperCase();
	    }, Ot.trim = function (t, n, r) {
	      return (t = Eu(t)) && (r || n === F) ? t.replace(ft, "") : t && (n = jr(n)) ? (t = $(t), r = $(n), n = z(t, r), r = W(t, r) + 1, Ir(t, n, r).join("")) : t;
	    }, Ot.trimEnd = function (t, n, r) {
	      return (t = Eu(t)) && (r || n === F) ? t.replace(at, "") : t && (n = jr(n)) ? (t = $(t), n = W(t, $(n)) + 1, Ir(t, 0, n).join("")) : t;
	    }, Ot.trimStart = function (t, n, r) {
	      return (t = Eu(t)) && (r || n === F) ? t.replace(ct, "") : t && (n = jr(n)) ? (t = $(t), n = z(t, $(n)), Ir(t, n).join("")) : t;
	    }, Ot.truncate = function (t, n) {
	      var r = 30,
	          e = "...";if (_u(n)) var u = "separator" in n ? n.separator : u,
	          r = "length" in n ? wu(n.length) : r,
	          e = "omission" in n ? jr(n.omission) : e;
	      t = Eu(t);var i = t.length;if (Wt.test(t)) var o = $(t),
	          i = o.length;if (r >= i) return t;if (i = r - T(e), 1 > i) return e;if (r = o ? Ir(o, 0, i).join("") : t.slice(0, i), u === F) return r + e;if (o && (i += r.length - i), ff(u)) {
	        if (t.slice(i).search(u)) {
	          var f = r;for (u.global || (u = Yu(u.source, Eu(gt.exec(u)) + "g")), u.lastIndex = 0; o = u.exec(f);) {
	            var c = o.index;
	          }r = r.slice(0, c === F ? i : c);
	        }
	      } else t.indexOf(jr(u), i) != i && (u = r.lastIndexOf(u), -1 < u && (r = r.slice(0, u)));return r + e;
	    }, Ot.unescape = function (t) {
	      return (t = Eu(t)) && Y.test(t) ? t.replace(G, en) : t;
	    }, Ot.uniqueId = function (t) {
	      var n = ++ii;return Eu(t) + n;
	    }, Ot.upperCase = Lf, Ot.upperFirst = Uf, Ot.each = He, Ot.eachRight = Qe, Ot.first = Ne, Tu(Ot, function () {
	      var t = {};return On(Ot, function (n, r) {
	        ui.call(Ot.prototype, r) || (t[r] = n);
	      }), t;
	    }(), { chain: false }), Ot.VERSION = "4.16.4", u("bind bindKey curry curryRight partial partialRight".split(" "), function (t) {
	      Ot[t].placeholder = Ot;
	    }), u(["drop", "take"], function (t, n) {
	      Dt.prototype[t] = function (r) {
	        var e = this.__filtered__;if (e && !n) return new Dt(this);r = r === F ? 1 : zi(wu(r), 0);var u = this.clone();return e ? u.__takeCount__ = Wi(r, u.__takeCount__) : u.__views__.push({
	          size: Wi(r, 4294967295), type: t + (0 > u.__dir__ ? "Right" : "") }), u;
	      }, Dt.prototype[t + "Right"] = function (n) {
	        return this.reverse()[t](n).reverse();
	      };
	    }), u(["filter", "map", "takeWhile"], function (t, n) {
	      var r = n + 1,
	          e = 1 == r || 3 == r;Dt.prototype[t] = function (t) {
	        var n = this.clone();return n.__iteratees__.push({ iteratee: _e(t, 3), type: r }), n.__filtered__ = n.__filtered__ || e, n;
	      };
	    }), u(["head", "last"], function (t, n) {
	      var r = "take" + (n ? "Right" : "");Dt.prototype[t] = function () {
	        return this[r](1).value()[0];
	      };
	    }), u(["initial", "tail"], function (t, n) {
	      var r = "drop" + (n ? "" : "Right");
	      Dt.prototype[t] = function () {
	        return this.__filtered__ ? new Dt(this) : this[r](1);
	      };
	    }), Dt.prototype.compact = function () {
	      return this.filter(Mu);
	    }, Dt.prototype.find = function (t) {
	      return this.filter(t).head();
	    }, Dt.prototype.findLast = function (t) {
	      return this.reverse().find(t);
	    }, Dt.prototype.invokeMap = lr(function (t, n) {
	      return typeof t == "function" ? new Dt(this) : this.map(function (r) {
	        return Mn(r, t, n);
	      });
	    }), Dt.prototype.reject = function (t) {
	      return this.filter(ou(_e(t)));
	    }, Dt.prototype.slice = function (t, n) {
	      t = wu(t);var r = this;return r.__filtered__ && (0 < t || 0 > n) ? new Dt(r) : (0 > t ? r = r.takeRight(-t) : t && (r = r.drop(t)), n !== F && (n = wu(n), r = 0 > n ? r.dropRight(-n) : r.take(n - t)), r);
	    }, Dt.prototype.takeRightWhile = function (t) {
	      return this.reverse().takeWhile(t).reverse();
	    }, Dt.prototype.toArray = function () {
	      return this.take(4294967295);
	    }, On(Dt.prototype, function (t, n) {
	      var r = /^(?:filter|find|map|reject)|While$/.test(n),
	          e = /^(?:head|last)$/.test(n),
	          u = Ot[e ? "take" + ("last" == n ? "Right" : "") : n],
	          i = e || /^find/.test(n);u && (Ot.prototype[n] = function () {
	        function n(t) {
	          return t = u.apply(Ot, s([t], f)), e && h ? t[0] : t;
	        }var o = this.__wrapped__,
	            f = e ? [1] : arguments,
	            c = o instanceof Dt,
	            a = f[0],
	            l = c || nf(o);
	        l && r && typeof a == "function" && 1 != a.length && (c = l = false);var h = this.__chain__,
	            p = !!this.__actions__.length,
	            a = i && !h,
	            c = c && !p;return !i && l ? (o = c ? o : new Dt(this), o = t.apply(o, f), o.__actions__.push({ func: Je, args: [n], thisArg: F }), new Mt(o, h)) : a && c ? t.apply(this, f) : (o = this.thru(n), a ? e ? o.value()[0] : o.value() : o);
	      });
	    }), u("pop push shift sort splice unshift".split(" "), function (t) {
	      var n = Xu[t],
	          r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
	          e = /^(?:pop|shift)$/.test(t);Ot.prototype[t] = function () {
	        var t = arguments;if (e && !this.__chain__) {
	          var u = this.value();return n.apply(nf(u) ? u : [], t);
	        }return this[r](function (r) {
	          return n.apply(nf(r) ? r : [], t);
	        });
	      };
	    }), On(Dt.prototype, function (t, n) {
	      var r = Ot[n];if (r) {
	        var e = r.name + "";(Zi[e] || (Zi[e] = [])).push({ name: n, func: r });
	      }
	    }), Zi[Yr(F, 2).name] = [{ name: "wrapper", func: F }], Dt.prototype.clone = function () {
	      var t = new Dt(this.__wrapped__);return t.__actions__ = Cr(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Cr(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Cr(this.__views__), t;
	    }, Dt.prototype.reverse = function () {
	      if (this.__filtered__) {
	        var t = new Dt(this);t.__dir__ = -1, t.__filtered__ = true;
	      } else t = this.clone(), t.__dir__ *= -1;return t;
	    }, Dt.prototype.value = function () {
	      var t,
	          n = this.__wrapped__.value(),
	          r = this.__dir__,
	          e = nf(n),
	          u = 0 > r,
	          i = e ? n.length : 0;t = i;for (var o = this.__views__, f = 0, c = -1, a = o.length; ++c < a;) {
	        var l = o[c],
	            s = l.size;switch (l.type) {case "drop":
	            f += s;break;case "dropRight":
	            t -= s;break;case "take":
	            t = Wi(t, f + s);break;case "takeRight":
	            f = zi(f, t - s);}
	      }if (t = { start: f, end: t }, o = t.start, f = t.end, t = f - o, u = u ? f : o - 1, o = this.__iteratees__, f = o.length, c = 0, a = Wi(t, this.__takeCount__), !e || 200 > i || i == t && a == t) return Ar(n, this.__actions__);e = [];t: for (; t-- && c < a;) {
	        for (u += r, i = -1, l = n[u]; ++i < f;) {
	          var h = o[i],
	              s = h.type,
	              h = (0, h.iteratee)(l);if (2 == s) l = h;else if (!h) {
	            if (1 == s) continue t;break t;
	          }
	        }e[c++] = l;
	      }return e;
	    }, Ot.prototype.at = Lo, Ot.prototype.chain = function () {
	      return Ge(this);
	    }, Ot.prototype.commit = function () {
	      return new Mt(this.value(), this.__chain__);
	    }, Ot.prototype.next = function () {
	      this.__values__ === F && (this.__values__ = xu(this.value()));
	      var t = this.__index__ >= this.__values__.length;return { done: t, value: t ? F : this.__values__[this.__index__++] };
	    }, Ot.prototype.plant = function (t) {
	      for (var n, r = this; r instanceof Rt;) {
	        var e = De(r);e.__index__ = 0, e.__values__ = F, n ? u.__wrapped__ = e : n = e;var u = e,
	            r = r.__wrapped__;
	      }return u.__wrapped__ = t, n;
	    }, Ot.prototype.reverse = function () {
	      var t = this.__wrapped__;return t instanceof Dt ? (this.__actions__.length && (t = new Dt(this)), t = t.reverse(), t.__actions__.push({ func: Je, args: [qe], thisArg: F }), new Mt(t, this.__chain__)) : this.thru(qe);
	    }, Ot.prototype.toJSON = Ot.prototype.valueOf = Ot.prototype.value = function () {
	      return Ar(this.__wrapped__, this.__actions__);
	    }, Ot.prototype.first = Ot.prototype.head, vi && (Ot.prototype[vi] = Ye), Ot;
	  }();"function" == "function" && _typeof(__webpack_require__(26)) == "object" && __webpack_require__(26) ? (Pt._ = un, !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return un;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))) : qt ? ((qt.exports = un)._ = un, Zt._ = un) : Pt._ = un;
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(25)(module)))

/***/ },

/***/ 25:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 26:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },

/***/ 27:
/***/ function(module, exports) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*
	 AngularJS v1.5.8
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/(function(C){'use strict';function N(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.8/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e);}return Error(d);};}function ta(a){if(null==a||Va(a))return!1;if(L(a)||G(a)||F&&a instanceof F)return!0;var b="length"in Object(a)&&a.length;return T(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item);}function q(a,b,d){var c,e;if(a)if(z(a))for(c in a){"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);}else if(L(a)||ta(a)){var f="object"!==(typeof a==="undefined"?"undefined":_typeof(a));c=0;for(e=a.length;c<e;c++){(f||c in a)&&b.call(d,a[c],c,a);}}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(sc(a))for(c in a){b.call(d,a[c],c,a);}else if("function"===typeof a.hasOwnProperty)for(c in a){a.hasOwnProperty(c)&&b.call(d,a[c],c,a);}else for(c in a){ua.call(a,c)&&b.call(d,a[c],c,a);}return a;}function tc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++){b.call(d,a[c[e]],c[e]);}return c;}function uc(a){return function(b,d){a(d,b);};}function Yd(){return++pb;}function Pb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&D(n)?da(n)?a[m]=new Date(n.valueOf()):Wa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):Qb(n)?a[m]=n.clone():(D(a[m])||(a[m]=L(n)?[]:{}),Pb(a[m],[n],!0)):a[m]=n;}}c?a.$$hashKey=c:delete a.$$hashKey;return a;}function S(a){return Pb(a,va.call(arguments,1),!1);}function Zd(a){return Pb(a,va.call(arguments,1),!0);}function Z(a){return parseInt(a,10);}function Rb(a,b){return S(Object.create(a),b);}function A(){}function Xa(a){return a;}function ha(a){return function(){return a;};}function vc(a){return z(a.toString)&&a.toString!==ma;}function y(a){return"undefined"===typeof a;}function w(a){return"undefined"!==typeof a;}function D(a){return null!==a&&"object"===(typeof a==="undefined"?"undefined":_typeof(a));}function sc(a){return null!==a&&"object"===(typeof a==="undefined"?"undefined":_typeof(a))&&!wc(a);}function G(a){return"string"===typeof a;}function T(a){return"number"===typeof a;}function da(a){return"[object Date]"===ma.call(a);}function z(a){return"function"===typeof a;}function Wa(a){return"[object RegExp]"===ma.call(a);}function Va(a){return a&&a.window===a;}function Ya(a){return a&&a.$evalAsync&&a.$watch;}function Ga(a){return"boolean"===typeof a;}function $d(a){return a&&T(a.length)&&ae.test(ma.call(a));}function Qb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find));}function be(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++){b[a[d]]=!0;}return b;}function wa(a){return Q(a.nodeName||a[0]&&a[0].nodeName);}function Za(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d;}function pa(a,b){function d(a,b){var d=b.$$hashKey,e;if(L(a)){e=0;for(var f=a.length;e<f;e++){b.push(c(a[e]));}}else if(sc(a))for(e in a){b[e]=c(a[e]);}else if(a&&"function"===typeof a.hasOwnProperty)for(e in a){a.hasOwnProperty(e)&&(b[e]=c(a[e]));}else for(e in a){ua.call(a,e)&&(b[e]=c(a[e]));}d?b.$$hashKey=d:delete b.$$hashKey;return b;}function c(a){if(!D(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Va(a)||Ya(a))throw xa("cpws");var b=!1,c=e(a);void 0===c&&(c=L(a)?[]:Object.create(wc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c;}function e(a){switch(ma.call(a)){case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Float32Array]":case"[object Float64Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return new a.constructor(c(a.buffer),a.byteOffset,a.length);case"[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);new Uint8Array(b).set(new Uint8Array(a));return b;}return a.slice(0);case"[object Boolean]":case"[object Number]":case"[object String]":case"[object Date]":return new a.constructor(a.valueOf());case"[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case"[object Blob]":return new a.constructor([a],{type:a.type});}if(z(a.cloneNode))return a.cloneNode(!0);}var f=[],g=[];if(b){if($d(b)||"[object ArrayBuffer]"===ma.call(b))throw xa("cpta");if(a===b)throw xa("cpi");L(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d];});f.push(a);g.push(b);return d(a,b);}return c(a);}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a==="undefined"?"undefined":_typeof(a),c;if(d==(typeof b==="undefined"?"undefined":_typeof(b))&&"object"==d)if(L(a)){if(!L(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++){if(!na(a[c],b[c]))return!1;}return!0;}}else{if(da(a))return da(b)?na(a.getTime(),b.getTime()):!1;if(Wa(a))return Wa(b)?a.toString()==b.toString():!1;if(Ya(a)||Ya(b)||Va(a)||Va(b)||L(b)||da(b)||Wa(b))return!1;d=U();for(c in a){if("$"!==c.charAt(0)&&!z(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0;}}for(c in b){if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!z(b[c]))return!1;}return!0;}return!1;}function $a(a,b,d){return a.concat(va.call(b,d));}function ab(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,$a(d,arguments,0)):b.apply(a,d);}:function(){return arguments.length?b.apply(a,arguments):b.call(a);};}function ce(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Va(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":Ya(b)&&(d="$SCOPE");return d;}function bb(a,b){if(!y(a))return T(b)||(b=b?2:null),JSON.stringify(a,ce,b);}function xc(a){return G(a)?JSON.parse(a):a;}function yc(a,b){a=a.replace(de,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d;}function Sb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=yc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a;}function ya(a){a=F(a).clone();try{a.empty();}catch(b){}var d=F("<div>").append(a).html();try{return a[0].nodeType===Ma?Q(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b);});}catch(c){return Q(d);}}function zc(a){try{return decodeURIComponent(a);}catch(b){}}function Ac(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=zc(e),w(e)&&(f=w(f)?zc(f):!0,ua.call(b,e)?L(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f));});return b;}function Tb(a){var b=[];q(a,function(a,c){L(a)?q(a,function(a){b.push(ea(c,!0)+(!0===a?"":"="+ea(a,!0)));}):b.push(ea(c,!0)+(!0===a?"":"="+ea(a,!0)));});return b.length?b.join("&"):"";}function qb(a){return ea(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+");}function ea(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+");}function ee(a,b){var d,c,e=Na.length;for(c=0;c<e;++c){if(d=Na[c]+b,G(d=a.getAttribute(d)))return d;}return null;}function fe(a,b){var d,c,e={};q(Na,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b));});q(Na,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b));});d&&(e.strictDi=null!==ee(d,"strict-di"),b(d,c?[c]:[],e));}function Bc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function c(){a=F(a);if(a.injector()){var c=a[0]===C.document?"document":ya(a);throw xa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a);}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0);}]);b.unshift("ng");c=cb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a);});}]);return c;},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){q(a,function(a){b.push(a);});return c();};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap();}function ge(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload();}function he(a){a=ca.element(a).injector();if(!a)throw xa("test");return a.get("$$testability");}function Cc(a,b){b=b||"_";return a.replace(ie,function(a,c){return(c?b:"")+a.toLowerCase();});}function je(){var a;if(!Dc){var b=rb();(qa=y(b)?C.jQuery:b?C[b]:void 0)&&qa.fn.on?(F=qa,S(qa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=qa.cleanData,qa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++){(c=qa._data(f,"events"))&&c.$destroy&&qa(f).triggerHandler("$destroy");}a(b);}):F=O;ca.element=F;Dc=!0;}}function sb(a,b,d){if(!a)throw xa("areq",b||"?",d||"required");return a;}function Pa(a,b,d){d&&L(a)&&(a=a[a.length-1]);sb(z(a),b,"not a function, got "+(a&&"object"===(typeof a==="undefined"?"undefined":_typeof(a))?a.constructor.name||"Object":typeof a==="undefined"?"undefined":_typeof(a)));return a;}function Qa(a,b){if("hasOwnProperty"===a)throw xa("badname",b);}function Ec(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++){c=b[g],a&&(a=(e=a)[c]);}return!d&&z(a)?ab(e,a):a;}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++){if(c||a[e]!==b)c||(c=F(va.call(a,0,e))),c.push(b);}return c||a;}function U(){return Object.create(null);}function ke(a){function b(a,b,c){return a[b]||(a[b]=c());}var d=N("$injector"),c=N("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||N;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return R;};}function b(a,d){return function(b,e){e&&z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return R;};}if(!g)throw d("nomod",f);var c=[],e=[],p=[],u=a("$injector","invoke","push",e),R={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:u,run:function run(a){p.push(a);return this;}};h&&u(h);return R;});};});}function ia(a,b){if(L(a)){b=b||[];for(var d=0,c=a.length;d<c;d++){b[d]=a[d];}}else if(D(a))for(d in b=b||{},a){if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];}return b||a;}function le(a){S(a,{bootstrap:Bc,copy:pa,extend:S,merge:Zd,equals:na,element:F,forEach:q,injector:cb,noop:A,bind:ab,toJson:bb,fromJson:xc,identity:Xa,isUndefined:y,isDefined:w,isString:G,isFunction:z,isObject:D,isNumber:T,isElement:Qb,isArray:L,version:me,isDate:da,lowercase:Q,uppercase:ub,callbacks:{$$counter:0},getTestability:he,$$minErr:N,$$csp:Ba,reloadWithDebugInfo:ge});Ub=ke(C);Ub("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ne});a.provider("$compile",Fc).directive({a:oe,input:Gc,textarea:Gc,form:pe,script:qe,select:re,style:se,option:te,ngBind:ue,ngBindHtml:ve,ngBindTemplate:we,ngClass:xe,ngClassEven:ye,ngClassOdd:ze,ngCloak:Ae,ngController:Be,ngForm:Ce,ngHide:De,ngIf:Ee,ngInclude:Fe,ngInit:Ge,ngNonBindable:He,ngPluralize:Ie,ngRepeat:Je,ngShow:Ke,ngStyle:Le,ngSwitch:Me,ngSwitchWhen:Ne,ngSwitchDefault:Oe,ngOptions:Pe,ngTransclude:Qe,ngModel:Re,ngList:Se,ngChange:Te,pattern:Hc,ngPattern:Hc,required:Ic,ngRequired:Ic,minlength:Jc,ngMinlength:Jc,maxlength:Kc,ngMaxlength:Kc,ngValue:Ue,ngModelOptions:Ve}).directive({ngInclude:We}).directive(vb).directive(Lc);a.provider({$anchorScroll:Xe,$animate:Ye,$animateCss:Ze,$$animateJs:$e,$$animateQueue:af,$$AnimateRunner:bf,$$animateAsyncRun:cf,$browser:df,$cacheFactory:ef,$controller:ff,$document:gf,$exceptionHandler:hf,$filter:Mc,$$forceReflow:jf,$interpolate:kf,$interval:lf,$http:mf,$httpParamSerializer:nf,$httpParamSerializerJQLike:of,$httpBackend:pf,$xhrFactory:qf,$jsonpCallbacks:rf,$location:sf,$log:tf,$parse:uf,$rootScope:vf,$q:wf,$$q:xf,$sce:yf,$sceDelegate:zf,$sniffer:Af,$templateCache:Bf,$templateRequest:Cf,$$testability:Df,$timeout:Ef,$window:Ff,$$rAF:Gf,$$jqLite:Hf,$$HashMap:If,$$cookieReader:Jf});}]);}function db(a){return a.replace(Kf,function(a,d,c,e){return e?c.toUpperCase():c;}).replace(Lf,"Moz$1");}function Nc(a){a=a.nodeType;return 1===a||!a||9===a;}function Oc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Vb.test(a)){d=e.appendChild(b.createElement("div"));c=(Mf.exec(a)||["",""])[1].toLowerCase();c=ja[c]||ja._default;d.innerHTML=c[1]+a.replace(Nf,"<$1></$2>")+c[2];for(c=c[0];c--;){d=d.lastChild;}f=$a(f,d.childNodes);d=e.firstChild;d.textContent="";}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a);});return e;}function Pc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a);}function O(a){if(a instanceof O)return a;var b;G(a)&&(a=W(a),b=!0);if(!(this instanceof O)){if(b&&"<"!=a.charAt(0))throw Wb("nosel");return new O(a);}if(b){b=C.document;var d;a=(d=Of.exec(a))?[b.createElement(d[1])]:(d=Oc(a,b))?d.childNodes:[];}Qc(this,a);}function Xb(a){return a.cloneNode(!0);}function wb(a,b){b||eb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++){eb(d[c]);}}function Rc(a,b,d,c){if(w(c))throw Wb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function g(b){var c=e[b];w(d)&&Za(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b]);};q(b.split(" "),function(a){g(a);yb[a]&&g(yb[a]);});}else for(b in e){"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b];}}function eb(a,b){var d=a.ng339,c=d&&fb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Rc(a)),delete fb[d],a.ng339=void 0));}function xb(a,b){var d=a.ng339,d=d&&fb[d];b&&!d&&(a.ng339=d=++Pf,d=fb[d]={events:{},data:{},handle:void 0});return d;}function Yb(a,b,d){if(Nc(a)){var c=w(d),e=!c&&b&&!D(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];S(a,b);}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1;}function Ab(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+W(b)+" "," ")));});}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ");});a.setAttribute("class",W(d));}}function Qc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++){a[a.length++]=b[c];}}else a[a.length++]=b;}}function Sc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller");}function Cb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=L(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++){if(w(d=F.data(a,b[c])))return d;}a=a.parentNode||11===a.nodeType&&a.host;}}function Tc(a){for(wb(a,!0);a.firstChild;){a.removeChild(a.firstChild);}}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a);}function Qf(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else F(b).on("load",a);}function Uc(a,b){var d=Eb[b.toLowerCase()];return d&&Vc[wa(a)]&&d;}function Rf(a,b){var d=function d(c,_d){c.isDefaultPrevented=function(){return c.defaultPrevented;};var f=b[_d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c);};}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped;};var k=f.specialHandlerWrapper||Sf;1<g&&(f=ia(f));for(var l=0;l<g;l++){c.isImmediatePropagationStopped()||k(a,c,f[l]);}}};d.elem=a;return d;}function Sf(a,b,d){d.call(a,b);}function Tf(a,b,d){var c=b.relatedTarget;c&&(c===a||Uf.call(a,c))||d.call(a,b);}function Hf(){this.$get=function(){return S(O,{hasClass:function hasClass(a,b){a.attr&&(a=a[0]);return zb(a,b);},addClass:function addClass(a,b){a.attr&&(a=a[0]);return Bb(a,b);},removeClass:function removeClass(a,b){a.attr&&(a=a[0]);return Ab(a,b);}});};}function Ca(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a==="undefined"?"undefined":_typeof(a);return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Yd)():d+":"+a;}function Ra(a,b){if(b){var d=0;this.nextUid=function(){return++d;};}q(a,this.put,this);}function Wc(a){a=(Function.prototype.toString.call(a)+" ").replace(Vf,"");return a.match(Wf)||a.match(Xf);}function Yf(a){return(a=Wc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn";}function cb(a,b){function d(a){return function(b,c){if(D(b))q(b,uc(a));else return a(b,c);};}function c(a,b){Qa(a,"service");if(z(b)||L(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=b;}function e(a,b){return function(){var c=B.invoke(b,this);if(y(c))throw Ha("undef",a);return c;};}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b});}function g(a){sb(y(a)||L(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2]);}}if(!m.get(a)){m.put(a,!0);try{G(a)?(c=Ub(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(p.invoke(a)):L(a)?b.push(p.invoke(a)):Pa(a,"module");}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b;}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b];}try{return l.unshift(b),a[b]=k,a[b]=c(b,e);}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift();}}function e(a,c,f){var g=[];a=cb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f));}return g;}return{invoke:function invoke(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);L(a)&&(a=a[a.length-1]);d=11>=Ea?!1:"function"===typeof a&&/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new(Function.prototype.bind.apply(a,c))()):a.apply(b,c);},instantiate:function instantiate(a,b,c){var d=L(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new(Function.prototype.bind.apply(d,a))();},get:d,annotate:cb.$$annotate,has:function has(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b);}};}b=!0===b;var k={},l=[],m=new Ra([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b);}]);}),value:d(function(a,b){return f(a,ha(b),!1);}),constant:d(function(a,b){Qa(a,"constant");n[a]=b;u[a]=b;}),decorator:function decorator(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=B.invoke(d,c);return B.invoke(b,null,{$delegate:a});};}}},p=n.$injector=h(n,function(a,b){ca.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),u={},R=h(u,function(a,b){var c=p.get(a+"Provider",b);return B.invoke(c.$get,c,void 0,a);}),B=R;n.$injectorProvider={$get:ha(R)};var r=g(a),B=R.get("$injector");B.strictDi=b;q(r,function(a){a&&B.invoke(a);});return B;}function Xe(){var a=!0;this.disableAutoScrolling=function(){a=!1;};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0;});return b;}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Qb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):T(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c));}else b.scrollTo(0,0);}function g(a){a=G(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null);}var h=b.document;a&&c.$watch(function(){return d.hash();},function(a,b){a===b&&""===a||Qf(function(){c.$evalAsync(g);});});return g;}];}function gb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;L(a)&&(a=a.join(" "));L(b)&&(b=b.join(" "));return a+" "+b;}function Zf(a){G(a)&&(a=a.split(" "));var b=U();q(a,function(a){a.length&&(b[a]=!0);});return b;}function Ia(a){return D(a)?a:{};}function $f(a,b,d,c){function e(a){try{a.apply(null,va.call(arguments,1));}finally{if(R--,0===R)for(;B.length;){try{B.pop()();}catch(b){d.error(b);}}}}function f(){t=null;g();h();}function g(){r=K();r=y(r)?null:r;na(r,E)&&(r=E);E=r;}function h(){if(v!==k.url()||J!==r)v=k.url(),J=r,q(M,function(a){a(k.url(),r);});}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,u={};k.isMock=!1;var R=0,B=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){R++;};k.notifyWhenNoOutstandingRequests=function(a){0===R?a():B.push(a);};var r,J,v=l.href,fa=b.find("base"),t=null,K=c.history?function(){try{return m.state;}catch(a){}}:A;g();J=r;k.url=function(b,d,e){y(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=J===e;if(v===b&&(!c.history||f))return k;var h=v&&Ja(v)===Ja(b);v=b;J=e;!c.history||h&&f?(h||(t=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(t=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),J=r);t&&(t=b);return k;}return t||l.href.replace(/%27/g,"'");};k.state=function(){return r;};var M=[],H=!1,E=null;k.onUrlChange=function(b){if(!H){if(c.history)F(a).on("popstate",f);F(a).on("hashchange",f);H=!0;}M.push(b);return b;};k.$$applicationDestroyed=function(){F(a).off("hashchange popstate",f);};k.$$checkUrlChange=h;k.baseHref=function(){var a=fa.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):"";};k.defer=function(a,b){var c;R++;c=n(function(){delete u[c];e(a);},b||0);u[c]=!0;return c;};k.defer.cancel=function(a){return u[a]?(delete u[a],p(a),e(A),!0):!1;};}function df(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new $f(a,c,b,d);}];}function ef(){this.$get=function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null);}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a));}if(a in b)throw N("$cacheFactory")("iid",a);var g=0,h=S({},c,{id:a}),k=U(),l=c&&c.capacity||Number.MAX_VALUE,m=U(),n=null,p=null;return b[a]={put:function put(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c);}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b;}},get:function get(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b);}return k[a];},remove:function remove(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a];}a in k&&(delete k[a],g--);},removeAll:function removeAll(){k=U();g=0;m=U();n=p=null;},destroy:function destroy(){m=h=k=null;delete b[a];},info:function info(){return S({},h,{size:g});}};}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info();});return a;};a.get=function(a){return b[a];};return a;};}function Bf(){this.$get=["$cacheFactory",function(a){return a("templates");}];}function Fc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=U();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f]);}});return e;}function c(a){var b=a.charAt(0);if(!b||b!==Q(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!L(b)&&D(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c);});return b;}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=be("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=U();this.directive=function B(b,d){Qa(b,"directive");G(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=a.invoke(f);z(h)?h={compile:ha(h)}:!h.compile&&h.link&&(h.compile=ha(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h);}catch(k){c(k);}});return d;}])),f[b].push(d)):q(b,uc(B));return this;};this.component=function(a,b){function c(a){function e(b){return z(b)||L(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d});}:b;}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Xc(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a);});return g;}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,z(d)&&(d[b]=a));});c.$inject=["$injector"];return this.directive(a,c);};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist();};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist();};var p=!0;this.debugInfoEnabled=function(a){return w(a)?(p=a,this):p;};var u=10;this.onChangesTtl=function(a){return arguments.length?(u=a,this):u;};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,t,K,M,H,E){function I(){try{if(! --qa)throw Y=void 0,ga("infchng",u);K.$apply(function(){for(var a=[],b=0,c=Y.length;b<c;++b){try{Y[b]();}catch(d){a.push(d);}}Y=void 0;if(a.length)throw a;});}finally{qa++;}}function Da(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++){f=c[d],this[f]=b[f];}}else this.$attr={};this.$$element=a;}function P(a,b,c){pa.innerHTML="<span "+b+">";b=pa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d);}function x(a,b){try{a.addClass(b);}catch(c){}}function aa(a,b,c,d,e){a instanceof F||(a=F(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===Ma&&k.nodeValue.match(f)&&Pc(k,a[g]=C.document.createElement("span"));}var l=s(a,b,a,c,d,e);aa.$$addScopeClass(a);var m=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==wa(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?F(da(m,F("<div>").append(a).html())):c?Oa.clone.call(a):a;if(g)for(var h in g){d.data("$"+h+"Controller",g[h].instance);}aa.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d;};}function s(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,r,v;if(n)for(v=Array(c.length),m=0;m<h.length;m+=3){f=h[m],v[f]=c[f];}else v=c;m=0;for(p=h.length;m<p;){k=v[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),aa.$$addScopeInfo(F(k),l)):l=a,r=c.transcludeOnThisElement?za(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?za(a,b):null,c(f,l,k,d,r)):f&&f(a,k.childNodes,void 0,e);}}for(var h=[],k,l,m,p,n,r=0;r<a.length;r++){k=new Da();l=$b(a[r],[],k,0===r?d:void 0,e);(f=l.length?oa(l,a[r],k,b,c,null,[],[],f):null)&&f.scope&&aa.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[r].childNodes)||!m.length?null:s(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(r,f,k),p=!0,n=n||f;f=null;}return p?g:null;}function za(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h});}var e=d.$$slots=U(),f;for(f in b.$$slots){e[f]=b.$$slots[f]?za(a,b.$$slots[f],c):null;}return d;}function $b(a,b,c,d,e){var f=c.$attr;switch(a.nodeType){case 1:O(b,Aa(wa(a)),"E",d,e);for(var g,k,l,m,p=a.attributes,n=0,r=p&&p.length;n<r;n++){var v=!1,u=!1;g=p[n];k=g.name;l=W(g.value);g=Aa(k);if(m=Ba.test(g))k=k.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase();});(g=g.match(Ca))&&V(g[1])&&(v=k,u=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));g=Aa(k.toLowerCase());f[g]=k;if(m||!c.hasOwnProperty(g))c[g]=l,Uc(a,g)&&(c[g]=!0);ia(a,b,l,g,m);O(b,g,"A",d,e,v,u);}f=a.className;D(f)&&(f=f.animVal);if(G(f)&&""!==f)for(;a=h.exec(f);){g=Aa(a[2]),O(b,g,"C",d,e)&&(c[g]=W(a[3])),f=f.substr(a.index+a[0].length);}break;case Ma:if(11===Ea)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Ma;){a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);}ca(b,a.nodeValue);break;case 8:hb(a,b,c,d,e);}b.sort(Z);return b;}function hb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Aa(f[1]);O(b,h,"M",d,e)&&(c[h]=W(f[2]));}}catch(k){}}function N(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling;}while(0<e);}else d.push(a);return F(d);}function Zc(a,b,c){return function(d,e,f,g,h){e=N(e[0],b,c);return a(d,e,f,g,h);};}function ac(a,b,c,d,e,f){var g;return a?aa(b,c,d,e,f):function(){g||(g=aa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments);};}function oa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=Zc(a,c,d));a.require=x.require;a.directiveName=I;if(u===x||x.$$isolateScope)a=ja(a,{isolateScope:!0});h.push(a);}if(b){c&&(b=Zc(b,c,d));b.require=x.require;b.directiveName=I;if(u===x||x.$$isolateScope)b=ja(b,{isolateScope:!0});k.push(b);}}function p(a,e,f,g,l){function m(a,b,c,d){var e;Ya(a)||(d=c,c=b,b=a,a=void 0);fa&&(e=t);c||(c=fa?I.parent():I);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,s);if(y(f))throw ga("noslot",d,ya(I));}else return l(a,b,e,c,s);}var n,E,x,M,B,t,P,I;b===f?(g=d,I=d.$$element):(I=F(f),g=new Da(I,d));B=e;u?M=e.$new(!0):r&&(B=e.$parent);l&&(P=m,P.$$boundTransclude=l,P.isSlotFilled=function(a){return!!l.$$slots[a];});v&&(t=ag(I,g,P,v,M,e,u));u&&(aa.$$addScopeInfo(I,M,!0,!(H&&(H===u||H===u.$$originalDirective))),aa.$$addScopeClass(I,!0),M.$$isolateBindings=u.$$isolateBindings,E=ka(e,g,M,M.$$isolateBindings,u),E.removeWatches&&M.$on("$destroy",E.removeWatches));for(n in t){E=v[n];x=t[n];var Zb=E.$$bindings.bindToController;x.bindingInfo=x.identifier&&Zb?ka(B,g,x.instance,Zb,E):{};var K=x();K!==x.instance&&(x.instance=K,I.data("$"+E.name+"Controller",K),x.bindingInfo.removeWatches&&x.bindingInfo.removeWatches(),x.bindingInfo=ka(B,g,x.instance,Zb,E));}q(v,function(a,b){var c=a.require;a.bindToController&&!L(c)&&D(c)&&S(t[b].instance,ib(b,c,I,t));});q(t,function(a){var b=a.instance;if(z(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges);}catch(d){c(d);}if(z(b.$onInit))try{b.$onInit();}catch(e){c(e);}z(b.$doCheck)&&(B.$watch(function(){b.$doCheck();}),b.$doCheck());z(b.$onDestroy)&&B.$on("$destroy",function(){b.$onDestroy();});});n=0;for(E=h.length;n<E;n++){x=h[n],la(x,x.isolateScope?M:e,I,g,x.require&&ib(x.directiveName,x.require,I,t),P);}var s=e;u&&(u.template||null===u.templateUrl)&&(s=M);a&&a(s,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--){x=k[n],la(x,x.isolateScope?M:e,I,g,x.require&&ib(x.directiveName,x.require,I,t),P);}q(t,function(a){a=a.instance;z(a.$postLink)&&a.$postLink();});}l=l||{};for(var n=-Number.MAX_VALUE,r=l.newScopeDirective,v=l.controllerDirectives,u=l.newIsolateScopeDirective,H=l.templateDirective,E=l.nonTlbTranscludeDirective,M=!1,B=!1,fa=l.hasElementTranscludeDirective,t=d.$$element=F(b),x,I,P,K=e,s,Fa=!1,za=!1,w,A=0,C=a.length;A<C;A++){x=a[A];var G=x.$$start,hb=x.$$end;G&&(t=N(b,G,hb));P=void 0;if(n>x.priority)break;if(w=x.scope)x.templateUrl||(D(w)?(X("new/isolated scope",u||r,x,t),u=x):X("new/isolated scope",u,x,t)),r=r||x;I=x.name;if(!Fa&&(x.replace&&(x.templateUrl||x.template)||x.transclude&&!x.$$tlb)){for(w=A+1;Fa=a[w++];){if(Fa.transclude&&!Fa.$$tlb||Fa.replace&&(Fa.templateUrl||Fa.template)){za=!0;break;}}Fa=!0;}!x.templateUrl&&x.controller&&(w=x.controller,v=v||U(),X("'"+I+"' controller",v[I],x,t),v[I]=x);if(w=x.transclude)if(M=!0,x.$$tlb||(X("transclusion",E,x,t),E=x),"element"==w)fa=!0,n=x.priority,P=t,t=d.$$element=F(aa.$$createComment(I,d[I])),b=t[0],ea(f,va.call(P,0),b),P[0].$$parentNode=P[0].parentNode,K=ac(za,P,e,n,g&&g.name,{nonTlbTranscludeDirective:E});else{var oa=U();P=F(Xb(b)).contents();if(D(w)){P=[];var Q=U(),O=U();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;oa[b]=null;O[b]=c;});q(t.contents(),function(a){var b=Q[Aa(wa(a))];b?(O[b]=!0,oa[b]=oa[b]||[],oa[b].push(a)):P.push(a);});q(O,function(a,b){if(!a)throw ga("reqslot",b);});for(var V in oa){oa[V]&&(oa[V]=ac(za,oa[V],e));}}t.empty();K=ac(za,P,e,void 0,void 0,{needsNewScope:x.$$isolateScope||x.$$newScope});K.$$slots=oa;}if(x.template)if(B=!0,X("template",H,x,t),H=x,w=z(x.template)?x.template(t,d):x.template,w=xa(w),x.replace){g=x;P=Vb.test(w)?$c(da(x.templateNamespace,W(w))):[];b=P[0];if(1!=P.length||1!==b.nodeType)throw ga("tplrt",I,"");ea(f,t,b);C={$attr:{}};w=$b(b,[],C);var Z=a.splice(A+1,a.length-(A+1));(u||r)&&T(w,u,r);a=a.concat(w).concat(Z);$(d,C);C=a.length;}else t.html(w);if(x.templateUrl)B=!0,X("template",H,x,t),H=x,x.replace&&(g=x),p=ba(a.splice(A,a.length-A),t,d,f,M&&K,h,k,{controllerDirectives:v,newScopeDirective:r!==x&&r,newIsolateScopeDirective:u,templateDirective:H,nonTlbTranscludeDirective:E}),C=a.length;else if(x.compile)try{s=x.compile(t,d,K);var Y=x.$$originalDirective||x;z(s)?m(null,ab(Y,s),G,hb):s&&m(ab(Y,s.pre),ab(Y,s.post),G,hb);}catch(ca){c(ca,ya(t));}x.terminal&&(p.terminal=!0,n=Math.max(n,x.priority));}p.scope=r&&!0===r.scope;p.transcludeOnThisElement=M;p.templateOnThisElement=B;p.transclude=K;l.hasElementTranscludeDirective=fa;return p;}function ib(a,b,c,d){var e;if(G(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h);}if(!e&&!f)throw ga("ctreq",b,a);}else if(L(b))for(e=[],g=0,f=b.length;g<f;g++){e[g]=ib(a,b[g],c,d);}else D(b)&&(e={},q(b,function(b,f){e[f]=ib(a,b,c,d);}));return e||null;}function ag(a,b,c,d,e,f,g){var h=U(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"==p&&(p=b[l.name]);m=t(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance);}return h;}function T(a,b,c){for(var d=0,e=a.length;d<e;d++){a[d]=Rb(a[d],{$$isolateScope:b,$$newScope:c});}}function O(b,e,g,h,k,l,m){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var p;e=a.get(e+"Directive");for(var n=0,r=e.length;n<r;n++){try{if(p=e[n],(y(h)||h>p.priority)&&-1!=p.restrict.indexOf(g)){l&&(p=Rb(p,{$$start:l,$$end:m}));if(!p.$$bindings){var u=p,v=p,x=p.name,H={isolateScope:null,bindToController:null};D(v.scope)&&(!0===v.bindToController?(H.bindToController=d(v.scope,x,!0),H.isolateScope={}):H.isolateScope=d(v.scope,x,!1));D(v.bindToController)&&(H.bindToController=d(v.bindToController,x,!0));if(D(H.bindToController)){var E=v.controller,M=v.controllerAs;if(!E)throw ga("noctrl",x);if(!Xc(E,M))throw ga("noident",x);}var t=u.$$bindings=H;D(t.isolateScope)&&(p.$$isolateBindings=t.isolateScope);}b.push(p);k=p;}}catch(I){c(I);}}}return k;}function V(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++){if(b=c[d],b.multiElement)return!0;}return!1;}function $(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]));});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]));});}function ba(a,b,c,d,f,g,h,k){var l=[],m,p,n=b[0],r=a.shift(),u=Rb(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),H=z(r.templateUrl)?r.templateUrl(b,c):r.templateUrl,E=r.templateNamespace;b.empty();e(H).then(function(e){var v,M;e=xa(e);if(r.replace){e=Vb.test(e)?$c(da(E,W(e))):[];v=e[0];if(1!=e.length||1!==v.nodeType)throw ga("tplrt",r.name,H);e={$attr:{}};ea(d,b,v);var B=$b(v,[],e);D(r.scope)&&T(B,!0);a=B.concat(a);$(c,e);}else v=n,b.html(e);a.unshift(u);m=oa(a,v,c,f,b,r,g,h,k);q(d,function(a,c){a==v&&(d[c]=b[0]);});for(p=s(b[0].childNodes,f);l.length;){e=l.shift();M=l.shift();var t=l.shift(),I=l.shift(),B=b[0];if(!e.$$destroyed){if(M!==n){var P=M.className;k.hasElementTranscludeDirective&&r.replace||(B=Xb(v));ea(t,F(M),B);x(F(B),P);}M=m.transcludeOnThisElement?za(e,m.transclude,I):I;m(p,e,B,d,M);}}l=null;});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=za(b,m.transclude,e)),m(p,b,c,d,a)));};}function Z(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index;}function X(a,b,c,d){function e(a){return a?" (module: "+a+")":"";}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ca(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function compile(a){a=a.parent();var b=!!a.length;b&&aa.$$addBindingClass(a);return function(a,c){var e=c.parent();b||aa.$$addBindingClass(e);aa.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a;});};}});}function da(a,b){a=Q(a||"html");switch(a){case"svg":case"math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b;}}function ha(a,b){if("srcdoc"==b)return M.HTML;var c=wa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return M.RESOURCE_URL;}function ia(a,c,d,e,f){var g=ha(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===wa(a))throw ga("selmulti",ya(a));c.push({priority:100,compile:function compile(){return{pre:function pre(a,c,k){c=k.$$observers||(k.$$observers=U());if(m.test(e))throw ga("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a);}));}};}});}}function ea(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++){if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++){h<k?a[g]=a[h]:delete a[g];}a.length-=e-1;a.context===d&&(a.context=c);break;}}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++){a.appendChild(b[g]);}F.hasData(d)&&(F.data(c,F.data(d)),F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++){delete b[g];}b[0]=c;b.length=1;}function ja(a,b){return S(function(){return a.apply(null,arguments);},a,b);}function la(a,b,d,e,f,g){try{a(b,d,e,f,g);}catch(h){c(h,ya(d));}}function ka(a,c,d,e,f){function g(b,c,e){z(d.$onChanges)&&c!==e&&(Y||(a.$$postDigest(I),Y=[]),m||(m={},Y.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Fb(e,c));}function h(){d.$onChanges(m);m=void 0;}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,v,u,x,H;switch(e.mode){case"@":p||ua.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(G(a)||Ga(a))g(h,a,d[h]),d[h]=a;});c.$$observers[m].$$scope=a;v=c[m];G(v)?d[h]=b(v)(a):Ga(v)&&(d[h]=v);l[h]=new Fb(bc,d[h]);break;case"=":if(!ua.call(c,m)){if(p)break;c[m]=void 0;}if(p&&!c[m])break;u=n(c[m]);H=u.literal?na:function(a,b){return a===b||a!==a&&b!==b;};x=u.assign||function(){v=d[h]=u(a);throw ga("nonassign",c[m],m,f.name);};v=d[h]=u(a);p=function p(b){H(b,d[h])||(H(b,v)?x(a,b=d[h]):d[h]=b);return v=b;};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,u.literal);k.push(p);break;case"<":if(!ua.call(c,m)){if(p)break;c[m]=void 0;}if(p&&!c[m])break;u=n(c[m]);var E=d[h]=u(a);l[h]=new Fb(bc,d[h]);p=a.$watch(u,function(a,b){if(b===a){if(b===E)return;b=E;}g(h,a,b);d[h]=a;},u.literal);k.push(p);break;case"&":u=c.hasOwnProperty(m)?n(c[m]):A;if(u===A&&p)break;d[h]=function(b){return u(a,b);};}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a){k[a]();}}};}var ta=/^\w/,pa=C.document.createElement("div"),qa=u,Y;Da.prototype={$normalize:Aa,$addClass:function $addClass(a){a&&0<a.length&&H.addClass(this.$$element,a);},$removeClass:function $removeClass(a){a&&0<a.length&&H.removeClass(this.$$element,a);},$updateClass:function $updateClass(a,b){var c=ad(a,b);c&&c.length&&H.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&H.removeClass(this.$$element,c);},$set:function $set(a,b,d,e){var f=Uc(this.$$element[0],a),g=bd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Cc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=E(b,"src"===a);else if("img"===f&&"srcset"===a&&w(b)){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++){var m=2*l,f=f+E(W(g[m]),!0),f=f+(" "+W(g[m+1]));}g=W(g[2*l]).split(/\s/);f+=E(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f;}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):ta.test(e)?this.$$element.attr(e,b):P(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b);}catch(d){c(d);}});},$observe:function $observe(a,b){var c=this,d=c.$$observers||(c.$$observers=U()),e=d[a]||(d[a]=[]);e.push(b);K.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a]);});return function(){Za(e,b);};}};var ra=b.startSymbol(),sa=b.endSymbol(),xa="{{"==ra&&"}}"==sa?Xa:function(a){return a.replace(/\{\{/g,ra).replace(/}}/g,sa);},Ba=/^ngAttr[A-Z]/,Ca=/^(.+)Start$/;aa.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];L(b)?c=c.concat(b):c.push(b);a.data("$binding",c);}:A;aa.$$addBindingClass=p?function(a){x(a,"ng-binding");}:A;aa.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b);}:A;aa.$$addScopeClass=p?function(a,b){x(a,b?"ng-isolate-scope":"ng-scope");}:A;aa.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c);};return aa;}];}function Fb(a,b){this.previousValue=a;this.currentValue=b;}function Aa(a){return db(a.replace(Yc,""));}function ad(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++){if(g==e[h])continue a;}d+=(0<d.length?" ":"")+g;}return d;}function $c(a){a=F(a);var b=a.length;if(1>=b)return a;for(;b--;){8===a[b].nodeType&&bg.call(a,b,1);}return a;}function Xc(a,b){if(b&&G(b))return b;if(G(a)){var d=cd.exec(a);if(d)return d[3];}}function ff(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b);};this.register=function(b,c){Qa(b,"controller");D(b)?S(a,b):a[b]=c;};this.allowGlobals=function(){b=!0;};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!D(a.$scope))throw N("$controller")("noscp",d,b);a.$scope[b]=c;}return function(f,g,h,k){var l,m,n;h=!0===h;k&&G(k)&&(n=k);if(G(f)){k=f.match(cd);if(!k)throw cg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Ec(g.$scope,m,!0)||(b?Ec(c,m,!0):void 0);Pa(f,m,!0);}if(h)return h=(L(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),S(function(){var a=d.invoke(f,l,g,m);a!==l&&(D(a)||z(a))&&(l=a,n&&e(g,n,l,m||f.name));return l;},{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l;};}];}function gf(){this.$get=["$window",function(a){return F(a.document);}];}function hf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments);};}];}function cc(a){return D(a)?da(a)?a.toISOString():bb(a):a;}function nf(){this.$get=function(){return function(a){if(!a)return"";var b=[];tc(a,function(a,c){null===a||y(a)||(L(a)?q(a,function(a){b.push(ea(c)+"="+ea(cc(a)));}):b.push(ea(c)+"="+ea(cc(a))));});return b.join("&");};};}function of(){this.$get=function(){return function(a){function b(a,e,f){null===a||y(a)||(L(a)?q(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]");}):D(a)&&!da(a)?tc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"));}):d.push(ea(e)+"="+ea(cc(a))));}if(!a)return"";var d=[];b(a,"",!0);return d.join("&");};};}function dc(a,b){if(G(a)){var d=a.replace(dg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(dd))||(c=(c=d.match(eg))&&fg[c[0]].test(d));c&&(a=xc(d));}}return a;}function ed(a){var b=U(),d;G(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=Q(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a);}):D(a)&&q(a,function(a,d){var f=Q(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g);});return b;}function fd(a){var b;return function(d){b||(b=ed(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b;};}function gd(a,b,d,c){if(z(c))return c(a,b,d);q(c,function(c){a=c(a,b,d);});return a;}function mf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return D(a)&&"[object File]"!==ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?bb(a):a;}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(ec),put:ia(ec),patch:ia(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b;};var d=!0;this.useLegacyPromiseExtensions=function(a){return w(a)?(d=!!a,this):d;};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,g);}b.length=0;return a;}function e(a,b){var c,d={};q(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a;});return d;}function f(a){var b=S({},a);b.data=gd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b);}if(!D(b))throw N("$http")("badreq",b);if(!G(b.url))throw N("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);g.headers=function(b){var c=a.headers,d=S({},b.headers),f,g,h,c=S({},c.common,c[Q(b.method)]);a:for(f in c){g=Q(f);for(h in d){if(Q(h)===g)continue a;}d[f]=c[f];}return e(d,ia(b));}(b);g.method=ub(g.method);g.paramSerializer=G(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;var h=[],m=[],p=k.when(g);q(R,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&m.push(a.response,a.responseError);});p=c(p,h);p=p.then(function(b){var c=b.headers,d=gd(b.data,fd(c),void 0,b.transformRequest);y(d)&&q(c,function(a,b){"content-type"===Q(b)&&delete c[b];});y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,d).then(f,f);});p=c(p,m);d?(p.success=function(a){Pa(a,"fn");p.then(function(b){a(b.data,b.status,b.headers,g);});return p;},p.error=function(a){Pa(a,"fn");p.then(null,function(b){a(b.data,b.status,b.headers,g);});return p;}):(p.success=hd("success"),p.error=hd("error"));return p;}function n(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c);}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d);};});return c;}}function l(a,c,d,e){function f(){n(c,a,d,e);}E&&(200<=a&&300>a?E.put(P,[a,c,ed(d),e]):E.remove(P));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply());}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?M.resolve:M.reject)({data:a,status:b,headers:fd(d),config:c,statusText:e});}function t(a){n(a.data,a.status,ia(a.headers()),a.statusText);}function R(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1);}var M=k.defer(),H=M.promise,E,I,Da=c.headers,P=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);H.then(R,R);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(E=D(c.cache)?c.cache:D(a.cache)?a.cache:u);E&&(I=E.get(P),w(I)?I&&z(I.then)?I.then(t,t):L(I)?n(I[1],I[0],ia(I[2]),I[3]):n(I,200,{},"OK"):E.put(P,H));y(I)&&((I=id(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(Da[c.xsrfHeaderName||a.xsrfHeaderName]=I),e(c.method,P,d,l,Da,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return H;}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a;}var u=g("$http");a.paramSerializer=G(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var R=[];q(c,function(a){R.unshift(G(a)?l.get(a):l.invoke(a));});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(S({},c||{},{method:a,url:b}));};});})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,c,d){return m(S({},d||{},{method:a,url:b,data:c}));};});})("post","put","patch");m.defaults=a;return m;}];}function qf(){this.$get=function(){return function(){return new C.XMLHttpRequest();};};}function pf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return gg(a,c,a.defer,b,d[0]);}];}function gg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),_m=null;f.type="text/javascript";f.src=a;f.async=!0;_m=function m(a){f.removeEventListener("load",_m,!1);f.removeEventListener("error",_m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);d&&d(g,u);};f.addEventListener("load",_m,!1);f.addEventListener("error",_m,!1);e.body.appendChild(f);return _m;}return function(e,h,k,l,m,n,p,u,R,B){function r(){fa&&fa();t&&t.abort();}function J(b,c,e,f,g){w(M)&&d.cancel(M);fa=t=null;b(c,e,f,g);a.$$completeOutstandingRequest(A);}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"===Q(e))var v=c.createCallback(h),fa=f(h,v,function(a,b){var d=200===a&&c.getResponse(v);J(l,a,d,"",b);c.removeCallback(v);});else{var t=b(e,h);t.open(e,h,!0);q(m,function(a,b){w(a)&&t.setRequestHeader(b,a);});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"==Y(h).protocol?404:0);J(l,c,b,t.getAllResponseHeaders(),a);};e=function e(){J(l,-1,null,null,"");};t.onerror=e;t.onabort=e;q(R,function(a,b){t.addEventListener(b,a);});q(B,function(a,b){t.upload.addEventListener(b,a);});p&&(t.withCredentials=!0);if(u)try{t.responseType=u;}catch(K){if("json"!==u)throw K;}t.send(y(k)?null:k);}if(0<n)var M=d(r,n);else n&&z(n.then)&&n.then(r);};}function kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a;};this.endSymbol=function(a){return a?(b=a,this):b;};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a;}function g(c){return c.replace(n,a).replace(p,b);}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a);},b,c);}function k(f,k,p,n){function J(a){try{var b=a;a=p?e.getTrusted(p,b):e.valueOf(b);var d;if(n&&!w(a))d=a;else if(null==a)d="";else{switch(typeof a==="undefined"?"undefined":_typeof(a)){case"string":break;case"number":a=""+a;break;default:a=bb(a);}d=a;}return d;}catch(g){c(Ka.interr(f,g));}}if(!f.length||-1===f.indexOf(a)){var v;k||(k=g(f),v=ha(k),v.exp=f,v.expressions=[],v.$$watchDelegate=h);return v;}n=!!n;var q,t,K=0,M=[],H=[];v=f.length;for(var E=[],I=[];K<v;){if(-1!=(q=f.indexOf(a,K))&&-1!=(t=f.indexOf(b,q+l)))K!==q&&E.push(g(f.substring(K,q))),K=f.substring(q+l,t),M.push(K),H.push(d(K,J)),K=t+m,I.push(E.length),E.push("");else{K!==v&&E.push(g(f.substring(K)));break;}}p&&1<E.length&&Ka.throwNoconcat(f);if(!k||M.length){var Da=function Da(a){for(var b=0,c=M.length;b<c;b++){if(n&&y(a[b]))return;E[I[b]]=a[b];}return E.join("");};return S(function(a){var b=0,d=M.length,e=Array(d);try{for(;b<d;b++){e[b]=H[b](a);}return Da(e);}catch(g){c(Ka.interr(f,g));}},{exp:f,expressions:M,$$watchDelegate:function $$watchDelegate(a,b){var c;return a.$watchGroup(H,function(d,e){var f=Da(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f;});}});}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a;};k.endSymbol=function(){return b;};return k;}];}function lf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,u):f(r);}var p=4<arguments.length,u=p?va.call(arguments,4):[],R=b.setInterval,q=b.clearInterval,r=0,J=w(m)&&!m,v=(J?c:d).defer(),fa=v.promise;l=w(l)?l:0;fa.$$intervalId=R(function(){J?e.defer(n):a.$evalAsync(n);v.notify(r++);0<l&&r>=l&&(v.resolve(r),q(fa.$$intervalId),delete g[fa.$$intervalId]);J||a.$apply();},k);g[fa.$$intervalId]=v;return fa;}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1;};return f;}];}function fc(a){a=a.split("/");for(var b=a.length;b--;){a[b]=qb(a[b]);}return a.join("/");}function jd(a,b){var d=Y(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||hg[d.protocol]||null;}function kd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Y(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Ac(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path);}function ka(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length);}function Ja(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b);}function jb(a){return a.replace(/(#.+)|#$/,"$1");}function gc(a,b,d){this.$$html5=!0;d=d||"";jd(a,this);this.$$parse=function(a){var d=ka(b,a);if(!G(d))throw Gb("ipthprfx",a,b);kd(d,this);this.$$path||(this.$$path="/");this.$$compose();};this.$$compose=function(){var a=Tb(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1);};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=ka(a,c))?(g=f,g=w(f=ka(d,f))?b+(ka("/",f)||f):a+g):w(f=ka(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g;};}function hc(a,b,d){jd(a,this);this.$$parse=function(c){var e=ka(a,c)||ka(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=ka(d,e),y(f)&&(f=e));kd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose();};this.$$compose=function(){var b=Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1;};}function ld(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?f=c:(g=ka(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f;};this.$$compose=function(){var b=Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url;};}function Hb(a){return function(){return this[a];};}function md(a,b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this;};}function sf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):a;};this.html5Mode=function(a){return Ga(a)?(b.enabled=a,this):D(a)?(Ga(a.enabled)&&(b.enabled=a.enabled),Ga(a.requireBase)&&(b.requireBase=a.requireBase),Ga(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b;};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state();}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b);}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Gb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?gc:ld;}else p=Ja(n),m=hc;var u=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,u,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var R=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=F(a.target);"a"!==wa(e[0]);){if(e[0]===f[0]||!(e=e.parent())[0])return;}var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");D(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Y(h.animVal).href);R.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0));}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){y(ka(u,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)));}),d.$$phase||d.$digest());});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)));});l.$$replace=!1;});return l;}];}function tf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a;};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a;}function e(a){var b=d.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply;}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b));});return e.apply(b,a);}:function(a,b){e(a,null==b?"":b);};}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments);};}()};}];}function Sa(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw X("isecfld",b);return a;}function ig(a){return a+"";}function ra(a,b){if(a){if(a.constructor===a)throw X("isecfn",b);if(a.window===a)throw X("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw X("isecdom",b);if(a===Object)throw X("isecobj",b);}return a;}function nd(a,b){if(a){if(a.constructor===a)throw X("isecfn",b);if(a===jg||a===kg||a===lg)throw X("isecff",b);}}function Ib(a,b){if(a&&(a===0 .constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw X("isecaf",b);}function mg(a,b){return"undefined"!==typeof a?a:b;}function od(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b;}function V(a,b){var d,c;switch(a.type){case s.Program:d=!0;q(a.body,function(a){V(a.expression,b);d=d&&a.expression.constant;});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:V(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:V(a.test,b);V(a.alternate,b);V(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:V(a.object,b);a.computed&&V(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch);});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch);});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){V(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch);});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[];}}function pd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0;}}function qd(a){return a.type===s.Identifier||a.type===s.MemberExpression;}function rd(a){if(1===a.body.length&&qd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="};}function sd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression);}function td(a,b){this.astBuilder=a;this.$filter=b;}function ud(a,b){this.astBuilder=a;this.$filter=b;}function Jb(a){return"constructor"==a;}function ic(a){return z(a.valueOf)?a.valueOf():ng.call(a);}function uf(){var a=U(),b=U(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b;};this.setIdentifierFns=function(a,b){c=a;e=b;return this;};this.$get=["$filter",function(f){function g(c,d,e){var g,k,H;e=e||J;switch(typeof c==="undefined"?"undefined":_typeof(c)){case"string":H=c=c.trim();var E=e?b:a;g=E[H];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?r:B;var q=new jc(g);g=new kc(q,f,g).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));E[H]=g;}return u(g,d);case"function":return u(c,d);default:return u(A,d);}}function h(a){function b(c,d,e,f){var g=J;J=!0;try{return a(c,d,e,f);}finally{J=g;}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c){a.inputs[c]=h(a.inputs[c]);}b.inputs=a.inputs;return b;}function k(a,b){return null==a||null==b?a===b:"object"===(typeof a==="undefined"?"undefined":_typeof(a))&&(a=ic(a),"object"===(typeof a==="undefined"?"undefined":_typeof(a)))?!1:a===b||a!==a&&b!==b;}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,void 0,[b]),h=b&&ic(b));return g;},b,c,e);}for(var l=[],m=[],p=0,n=f.length;p<n;p++){l[p]=k,m[p]=null;}return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&ic(h);}b&&(g=d(a,void 0,void 0,m));return g;},b,c,e);}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a);},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);w(a)&&d.$$postDigest(function(){w(f)&&e();});},c);}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){w(a)||(b=!1);});return b;}var f,g;return f=a.$watch(function(a){return d(a);},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f();});},c);}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a);},b,c);}function u(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e);}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return w(e)?c:e;};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c;}var R=Ba().noUnsafeEval,B={csp:R,expensiveChecks:!1,literals:pa(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},r={csp:R,expensiveChecks:!0,literals:pa(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},J=!1;g.$$runningExpensiveChecks=function(){return J;};return g;}];}function wf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return vd(function(b){a.$evalAsync(b);},b);}];}function xf(){this.$get=["$browser","$exceptionHandler",function(a,b){return vd(function(b){a.defer(b);},b);}];}function vd(a,b){function d(){this.$$state={status:0};}function c(a,b){return function(c){b.call(a,c);};}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value);}catch(h){d.reject(h),b(h);}}}));}function f(){this.promise=new d();}var g=N("$q",TypeError),h=function h(){var a=new f();a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a;};S(d.prototype,{then:function then(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f();this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise;},"catch":function _catch(a){return this.then(null,a);},"finally":function _finally(a,b){return this.then(function(b){return l(b,!0,a);},function(b){return l(b,!1,a);},b);}});S(f.prototype,{resolve:function resolve(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a));},$$resolve:function $$resolve(a){function d(a){k||(k=!0,h.$$resolve(a));}function f(a){k||(k=!0,h.$$reject(a));}var g,h=this,k=!1;try{if(D(a)||z(a))g=a&&a.then;z(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state));}catch(l){f(l),b(l);}},reject:function reject(a){this.promise.$$state.status||this.$$reject(a);},$$reject:function $$reject(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state);},notify:function notify(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?a(c):c);}catch(h){b(h);}}});}});var k=function k(a,b){var c=new f();b?c.resolve(a):c.reject(a);return c.promise;},l=function l(a,b,c){var d=null;try{z(c)&&(d=c());}catch(e){return k(e,!1);}return d&&z(d.then)?d.then(function(){return k(a,b);},function(a){return k(a,!1);}):k(a,b);},m=function m(a,b,c,d){var e=new f();e.resolve(a);return e.promise.then(b,c,d);},n=function n(a){if(!z(a))throw g("norslvr",a);var b=new f();a(function(a){b.resolve(a);},function(a){b.reject(a);});return b.promise;};n.prototype=d.prototype;n.defer=h;n.reject=function(a){var b=new f();b.reject(a);return b.promise;};n.when=m;n.resolve=m;n.all=function(a){var b=new f(),c=0,d=L(a)?[]:{};q(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d));},function(a){d.hasOwnProperty(e)||b.reject(a);});});0===c&&b.resolve(d);return b.promise;};n.race=function(a){var b=h();q(a,function(a){m(a).then(b.resolve,b.reject);});return b.promise;};return n;}function Gf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b);};}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c);};};f.supported=e;return f;}];}function vf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null;}b.prototype=a;return b;}var b=10,d=N("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b;};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0;}function l(a){9===Ea&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null;}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null;}function n(a){if(J.$$phase)throw d("inprog",J.$$phase);J.$$phase=a;}function p(a,b){do{a.$$watchersCount+=b;}while(a=a.$parent);}function u(a,b,c){do{a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];}while(a=a.$parent);}function s(){}function B(){for(;t.length;){try{t.shift()();}catch(a){f(a);}}e=null;}function r(){null===e&&(e=h.defer(function(){J.$apply(B);}));}m.prototype={constructor:m,$new:function $new(b,c){var d;c=c||this;b?(d=new m(),d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope());d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",k);return d;},$watch:function $watch(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=A);k||(k=h.$$watchers=[]);k.unshift(l);p(this,1);return function(){0<=Za(k,l)&&p(h,-1);c=null;};},$watchGroup:function $watchGroup(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g);}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g);});return function(){l=!1;};}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f);});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c));});f.push(k);});return function(){for(;f.length;){f.shift()();}};},$watchCollection:function $watchCollection(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(D(e)){if(ta(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++){h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);}else{f!==p&&(f=p={},u=0,l++);a=0;for(b in e){ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));}if(u>a)for(b in l++,f){ua.call(e,b)||(u--,delete f[b]);}}}else f!==e&&(f=e,l++);return l;}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e)){if(ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++){h[a]=e[a];}}else for(a in h={},e){ua.call(e,a)&&(h[a]=e[a]);}}else h=e;});},$digest:function $digest(){var a,g,k,l,m,p,u,r,q=b,t,y=[],A,C;n("$digest");h.$$checkUrlChange();this===J&&null!==e&&(h.defer.cancel(e),B());c=null;do{r=!1;t=this;for(p=0;p<v.length;p++){try{C=v[p],C.scope.$eval(C.expression,C.locals);}catch(F){f(F);}c=null;}v.length=0;a:do{if(p=t.$$watchers)for(u=p.length;u--;){try{if(a=p[u])if(m=a.get,(g=m(t))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))r=!0,c=a,a.last=a.eq?pa(g,null):g,l=a.fn,l(g,k===s?g:k,t),5>q&&(A=4-q,y[A]||(y[A]=[]),y[A].push({msg:z(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a;}}catch(G){f(G);}}if(!(p=t.$$watchersCount&&t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(p=t.$$nextSibling);){t=t.$parent;}}while(t=p);if((r||v.length)&&!q--)throw J.$$phase=null,d("infdig",b,y);}while(r||v.length);for(J.$$phase=null;K<w.length;){try{w[K++]();}catch(D){f(D);}}w.length=K=0;},$destroy:function $destroy(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===J&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount){u(this,this.$$listenerCount[b],b);}a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A;};this.$$listeners={};this.$$nextSibling=null;l(this);}},$eval:function $eval(a,b){return g(a)(this,b);},$evalAsync:function $evalAsync(a,b){J.$$phase||v.length||h.defer(function(){v.length&&J.$digest();});v.push({scope:this,expression:g(a),locals:b});},$$postDigest:function $$postDigest(a){w.push(a);},$apply:function $apply(a){try{n("$apply");try{return this.$eval(a);}finally{J.$$phase=null;}}catch(b){f(b);}finally{try{J.$digest();}catch(c){throw f(c),c;}}},$applyAsync:function $applyAsync(a){function b(){c.$eval(a);}var c=this;a&&t.push(b);a=g(a);r();},$on:function $on(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do{d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;}while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,u(e,1,a));};},$emit:function $emit(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function stopPropagation(){g=!0;},preventDefault:function preventDefault(){h.defaultPrevented=!0;},defaultPrevented:!1},k=$a([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++){if(d[l])try{d[l].apply(null,k);}catch(n){f(n);}else d.splice(l,1),l--,m--;}if(g)return h.currentScope=null,h;e=e.$parent;}while(e);h.currentScope=null;return h;},$broadcast:function $broadcast(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function preventDefault(){e.defaultPrevented=!0;},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=$a([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++){if(d[h])try{d[h].apply(null,g);}catch(l){f(l);}else d.splice(h,1),h--,k--;}if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);){c=c.$parent;}}e.currentScope=null;return e;}};var J=new m(),v=J.$$asyncQueue=[],w=J.$$postDigestQueue=[],t=J.$$applyAsyncQueue=[],K=0;return J;}];}function ne(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a;};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b;};this.$get=function(){return function(d,c){var e=c?b:a,f;f=Y(d).href;return""===f||f.match(e)?d:"unsafe:"+f;};};}function og(a){if("self"===a)return a;if(G(a)){if(-1<a.indexOf("***"))throw sa("iwcard",a);a=wd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$");}if(Wa(a))return new RegExp("^"+a.source+"$");throw sa("imatcher");}function xd(a){var b=[];w(a)&&q(a,function(a){b.push(og(a));});return b;}function zf(){this.SCE_CONTEXTS=la;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=xd(b));return a;};this.resourceUrlBlacklist=function(a){arguments.length&&(b=xd(a));return b;};this.$get=["$injector",function(d){function c(a,b){return"self"===a?id(b):!!a.exec(b.href);}function e(a){var b=function b(a){this.$$unwrapTrustedValue=function(){return a;};};a&&(b.prototype=new a());b.prototype.valueOf=function(){return this.$$unwrapTrustedValue();};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString();};return b;}var f=function f(a){throw sa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function trustAs(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw sa("icontext",a,b);if(null===b||y(b)||""===b)return b;if("string"!==typeof b)throw sa("itype",a);return new c(b);},getTrusted:function getTrusted(d,e){if(null===e||y(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===la.RESOURCE_URL){var g=Y(e.toString()),n,p,u=!1;n=0;for(p=a.length;n<p;n++){if(c(a[n],g)){u=!0;break;}}if(u)for(n=0,p=b.length;n<p;n++){if(c(b[n],g)){u=!1;break;}}if(u)return e;throw sa("insecurl",e.toString());}if(d===la.HTML)return f(e);throw sa("unsafe");},valueOf:function valueOf(a){return a instanceof g?a.$$unwrapTrustedValue():a;}};}];}function yf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a;};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ea)throw sa("iequirks");var c=ia(la);c.isEnabled=function(){return a;};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b;},c.valueOf=Xa);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b);});};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;q(la,function(a,b){var d=Q(b);c[db("parse_as_"+d)]=function(b){return e(a,b);};c[db("get_trusted_"+d)]=function(b){return f(a,b);};c[db("trust_as_"+d)]=function(b){return g(a,b);};});return c;}];}function Af(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(Q((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l){if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break;}}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in l);!e||m&&n||(m=G(l.webkitTransition),n=G(l.webkitAnimation));}return{history:!(!c||4>e||f),hasEvent:function hasEvent(a){if("input"===a&&11>=Ea)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b;}return d[a];},csp:Ba(),vendorPrefix:h,transitions:m,animations:n,android:e};}];}function Cf(){var a;this.httpOptions=function(b){return b?(a=b,this):a;};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!G(g)||y(b.get(g)))g=e.getTrustedResourceUrl(g);var k=d.defaults&&d.defaults.transformResponse;L(k)?k=k.filter(function(a){return a!==dc;}):k===dc&&(k=null);return d.get(g,S({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--;}).then(function(a){b.put(g,a.data);return a.data;},function(a){if(!h)throw pg("tpload",g,a.status,a.statusText);return c.reject(a);});}f.totalPendingRequests=0;return f;}];}function Df(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function findBindings(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ca.element(a).data("$binding");c&&q(c,function(c){d?new RegExp("(^|\\s)"+wd(b)+"(\\s|\\||$)").test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a);});});return g;},findModels:function findModels(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k;}},getLocation:function getLocation(){return d.url();},setLocation:function setLocation(b){b!==d.url()&&(d.url(b),a.$digest());},whenStable:function whenStable(a){b.notifyWhenNoOutstandingRequests(a);}};}];}function Ef(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=A);var m=va.call(arguments,3),n=w(l)&&!l,p=(n?c:d).defer(),u=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,m));}catch(b){p.reject(b),e(b);}finally{delete g[u.$$timeoutId];}n||a.$apply();},k);u.$$timeoutId=q;g[q]=p;return u;}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1;};return f;}];}function Y(a){Ea&&($.setAttribute("href",a),a=$.href);$.setAttribute("href",a);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:"/"===$.pathname.charAt(0)?$.pathname:"/"+$.pathname};}function id(a){a=G(a)?Y(a):a;return a.protocol===yd.protocol&&a.host===yd.host;}function Ff(){this.$get=ha(C);}function zd(a){function b(a){try{return decodeURIComponent(a);}catch(b){return a;}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++){g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),y(c[l])&&(c[l]=b(g.substring(k+1))));}return c;};}function Jf(){this.$get=zd;}function Mc(a){function b(d,c){if(D(d)){var e={};q(d,function(a,c){e[c]=b(c,a);});return e;}return a.factory(d+"Filter",c);}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter");};}];b("currency",Ad);b("date",Bd);b("filter",qg);b("json",rg);b("limitTo",sg);b("lowercase",tg);b("number",Cd);b("orderBy",Dd);b("uppercase",ug);}function qg(){return function(a,b,d,c){if(!ta(a)){if(null==a)return a;throw N("filter")("notarray",a);}c=c||"$";var e;switch(lc(b)){case"function":break;case"boolean":case"null":case"number":case"string":e=!0;case"object":b=vg(b,d,c,e);break;default:return a;}return Array.prototype.filter.call(a,b);};}function vg(a,b,d,c){var e=D(a)&&d in a;!0===b?b=na:z(b)||(b=function b(a,_b){if(y(a))return!1;if(null===a||null===_b)return a===_b;if(D(_b)||D(a)&&!vc(a))return!1;a=Q(""+a);_b=Q(""+_b);return-1!==a.indexOf(_b);});return function(f){return e&&!D(f)?La(f,a[d],b,d,!1):La(f,a,b,d,c);};}function La(a,b,d,c,e,f){var g=lc(a),h=lc(b);if("string"===h&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c,e);if(L(a))return a.some(function(a){return La(a,b,d,c,e);});switch(g){case"object":var k;if(e){for(k in a){if("$"!==k.charAt(0)&&La(a[k],b,d,c,!0))return!0;}return f?!1:La(a,b,d,c,!1);}if("object"===h){for(k in b){if(f=b[k],!z(f)&&!y(f)&&(g=k===c,!La(g?a:a[k],f,d,c,g,g)))return!1;}return!0;}return d(a,b);case"function":return!1;default:return d(a,b);}}function lc(a){return null===a?"null":typeof a==="undefined"?"undefined":_typeof(a);}function Ad(a){var b=a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ed(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c);};}function Cd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ed(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c);};}function wg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Fd))&&(a=a.replace(Fd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++){}if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;){g--;}c-=e;d=[];for(f=0;e<=g;e++,f++){d[f]=+a.charAt(e);}}c>Gd&&(d=d.splice(0,Gd-1),b=c-1,c=1);return{d:d,e:b,i:c};}function xg(a,b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++){e[g]=0;}}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++){e[g]=0;}if(5<=c)if(0>d-1){for(c=0;c>d;c--){e.unshift(0),a.i++;}e.unshift(1);a.i++;}else e[d-1]++;for(;f<Math.max(0,b);f++){e.push(0);}if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10);},0))e.unshift(b),a.i++;}function Ed(a,b,d,c,e){if(!G(a)&&!T(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221E";else{g=wg(h);xg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b;},!0);0>h;){k.unshift(0),h++;}0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;){h.unshift(k.splice(-b.gSize,k.length).join(""));}k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e);}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf;}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;){a=mc+a;}d&&(a=a.substr(a.length-b));return e+a;}function ba(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Kb(f,b,c,e);};}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f];};}function Hd(a){var b=new Date(a,0,1).getDay();return new Date(a,0,(4>=b?5:12)-b);}function Id(a){return function(b){var d=Hd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a);};}function nc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1];}function Bd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b);}return a;}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;G(c)&&(c=yg.test(c)?Z(c):b(c));T(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;d;){(l=zg.exec(d))?(h=$a(h,l,1),d=h.pop()):(h.push(d),d=null);}var m=c.getTimezoneOffset();f&&(m=yc(f,m),c=Sb(c,f,!0));q(h,function(b){k=Ag[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'");});return g;};}function rg(){return function(a,b){y(b)&&(b=2);return bb(a,b);};}function sg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(isNaN(b))return a;T(a)&&(a=a.toString());if(!ta(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?oc(a,d,d+b):0===d?oc(a,b,a.length):oc(a,Math.max(0,d+b),d);};}function oc(a,b,d){return G(a)?a.slice(b,d):va.call(a,b,d);}function Dd(a){function b(b){return b.map(function(b){var c=1,d=Xa;if(z(b))d=b;else if(G(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function d(a){return a[e];};}return{get:d,descending:c};});}function d(a){switch(typeof a==="undefined"?"undefined":_typeof(a)){case"number":case"boolean":case"string":return!0;default:return!1;}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(k)&&(k=a.index),D(l)&&(l=b.index));k!==l&&(c=k<l?-1:1);}else c=d<k?-1:1;return c;}return function(a,f,g,h){if(null==a)return a;if(!ta(a))throw N("orderBy")("notarray",a);L(f)||(f=[f]);0===f.length&&(f=["+"]);var k=b(f),l=g?-1:1,m=z(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e==="undefined"?"undefined":_typeof(e);if(null===e)c="string",e="null";else if("object"===c)a:{if(z(e.valueOf)&&(e=e.valueOf(),d(e)))break a;vc(e)&&(e=e.toString(),d(e));}return{value:e,type:c,index:b};})};});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l;}return m(a.tieBreaker,b.tieBreaker)*l;});return a=a.map(function(a){return a.value;});};}function Ta(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ha(a);}function Jd(a,b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Lb;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue();});};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue();});};f.$addControl=function(a){Qa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f;};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b;};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a);});q(f.$error,function(b,c){f.$setValidity(c,null,a);});q(f.$$success,function(b,c){f.$setValidity(c,null,a);});Za(g,a);a.$$parentForm=Lb;};Kd({ctrl:this,$element:a,set:function set(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c];},unset:function unset(a,b,c){var d=a[b];d&&(Za(d,c),0===d.length&&delete a[b]);},$animate:c});f.$setDirty=function(){c.removeClass(a,Ua);c.addClass(a,Mb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty();};f.$setPristine=function(){c.setClass(a,Ua,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine();});};f.$setUntouched=function(){q(g,function(a){a.$setUntouched();});};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted();};}function pc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString();});}function lb(a,b,d,c,e,f){var g=Q(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0;});b.on("compositionend",function(){h=!1;l();});}var k,l=function l(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a);}};if(e.hasEvent("input"))b.on("input",l);else{var m=function m(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a);}));};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value);});if(e.hasEvent("paste"))b.on("paste cut",m);}b.on("change",l);if(Ld[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a);});}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a);};}function Nb(a,b){return function(d,c){var e,f;if(da(d))return d;if(G(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Bg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a);}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0);}return NaN;};}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime());}function p(a){return w(a)&&!da(a)?d(a)||void 0:a;}Md(e,f,g,h);lb(e,f,g,h,k,l);var u=h&&h.$options&&h.$options.timezone,q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),u&&(a=Sb(a,u)),a;});h.$formatters.push(function(a){if(a&&!da(a))throw nb("datefmt",a);if(n(a))return(q=a)&&u&&(q=Sb(q,u,!0)),m("date")(a,c,u);q=null;return"";});if(w(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||y(s)||d(a)>=s;};g.$observe("min",function(a){s=p(a);h.$validate();});}if(w(g.max)||g.ngMax){var r;h.$validators.max=function(a){return!n(a)||y(r)||d(a)<=r;};g.$observe("max",function(a){r=p(a);h.$validate();});}};}function Md(a,b,d,c){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a;});}function Nd(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b);}return e;}function qc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++){if(e==b[m])continue a;}c.push(e);}return c;}function e(a){var b=[];return L(a)?(q(a,function(a){b=b.concat(e(a));}),b):G(a)?a.split(" "):D(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")));}),b):a;}return{restrict:"AC",link:function link(f,g,h){function k(a){a=l(a,1);h.$addClass(a);}function l(a,b){var c=g.data("$classCounts")||U(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a);});g.data("$classCounts",c);return d.join(" ");}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f);}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c);}}p=L(a)?a.map(function(a){return ia(a);}):ia(a);}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]));});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g));}});}};}];}function Kd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1);}function d(a,c){a=a?"-"+Cc(a,"-"):"";b(ob+a,!0===c);b(Od+a,!1===c);}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Od]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){y(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Pd(c.$pending)&&(c.$pending=void 0));Ga(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Qd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Qd,!1),c.$valid=Pd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c);};}function Pd(a){if(a)for(var b in a){if(a.hasOwnProperty(b))return!1;}return!0;}var Cg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,Q=function Q(a){return G(a)?a.toLowerCase():a;},ub=function ub(a){return G(a)?a.toUpperCase():a;},Ea,F,qa,va=[].slice,bg=[].splice,Dg=[].push,ma=Object.prototype.toString,wc=Object.getPrototypeOf,xa=N("ng"),ca=C.angular||(C.angular={}),Ub,pb=0;Ea=C.document.documentMode;A.$inject=[];Xa.$inject=[];var L=Array.isArray,ae=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function W(a){return G(a)?a.trim():a;},wd=function wd(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08");},Ba=function Ba(){if(!w(Ba.rules)){var a=C.document.querySelector("[ng-csp]")||C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ba.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")};}else{a=Ba;try{new Function(""),b=!1;}catch(d){b=!0;}a.rules={noUnsafeEval:b,noInlineStyle:!1};}}return Ba.rules;},rb=function rb(){if(w(rb.name_))return rb.name_;var a,b,d=Na.length,c,e;for(b=0;b<d;++b){if(c=Na[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break;}}return rb.name_=e;},de=/:/g,Na=["ng-","data-ng-","ng:","x-ng-"],ie=/[A-Z]/g,Dc=!1,Ma=3,me={full:"1.5.8",major:1,minor:5,dot:8,codeName:"arbitrary-fallbacks"};O.expando="ng339";var fb=O.cache={},Pf=1;O._data=function(a){return this.cache[a[this.expando]]||{};};var Kf=/([\:\-\_]+(.))/g,Lf=/^moz([A-Z])/,yb={mouseleave:"mouseout",mouseenter:"mouseover"},Wb=N("jqLite"),Of=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Vb=/<|&#?\w+;/,Mf=/<([\w:-]+)/,Nf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Uf=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16);},Oa=O.prototype={ready:function ready(a){function b(){d||(d=!0,a());}var d=!1;"complete"===C.document.readyState?C.setTimeout(b):(this.on("DOMContentLoaded",b),O(C).on("load",b));},toString:function toString(){var a=[];q(this,function(b){a.push(""+b);});return"["+a.join(", ")+"]";},eq:function eq(a){return 0<=a?F(this[a]):F(this[this.length+a]);},length:0,push:Dg,sort:[].sort,splice:[].splice},Eb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Eb[Q(a)]=a;});var Vc={};q("input select option textarea button form details".split(" "),function(a){Vc[a]=!0;});var bd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Yb,removeData:eb,hasData:function hasData(a){for(var b in fb[a.ng339]){return!0;}return!1;},cleanData:function cleanData(a){for(var b=0,d=a.length;b<d;b++){eb(a[b]);}}},function(a,b){O[b]=a;});q({data:Yb,inheritedData:Cb,scope:function scope(a){return F.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope","$scope"]);},isolateScope:function isolateScope(a){return F.data(a,"$isolateScope")||F.data(a,"$isolateScopeNoTemplate");},controller:Sc,injector:function injector(a){return Cb(a,"$injector");},removeAttr:function removeAttr(a,b){a.removeAttribute(b);},hasClass:zb,css:function css(a,b,d){b=db(b);if(w(d))a.style[b]=d;else return a.style[b];},attr:function attr(a,b,d){var c=a.nodeType;if(c!==Ma&&2!==c&&8!==c)if(c=Q(b),Eb[c]){if(w(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||A).specified?c:void 0;}else if(w(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a;},prop:function prop(a,b,d){if(w(d))a[b]=d;else return a[b];},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Ma?a.textContent:"";}a.textContent=d;}a.$dv="";return a;}(),val:function val(a,b){if(y(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text);});return 0===d.length?null:d;}return a.value;}a.value=b;},html:function html(a,b){if(y(b))return a.innerHTML;wb(a,!0);a.innerHTML=b;},empty:Tc},function(a,b){O.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Tc&&y(2==a.length&&a!==zb&&a!==Sc?b:c)){if(D(b)){for(e=0;e<g;e++){if(a===Yb)a(this[e],b);else for(f in b){a(this[e],f,b[f]);}}return this;}e=a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h;}return e;}for(e=0;e<g;e++){a(this[e],b,c);}return this;};});q({removeData:eb,on:function on(a,b,d,c){if(w(c))throw Wb("onargs");if(Nc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Rf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function h(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d);};g--;){b=c[g],yb[b]?(h(yb[b],Tf),h(b,void 0,!0)):h(b);}}},off:Rc,one:function one(a,b,d){a=F(a);a.on(b,function e(){a.off(b,d);a.off(b,e);});a.on(b,d);},replaceWith:function replaceWith(a,b){var d,c=a.parentNode;wb(a);q(new O(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b;});},children:function children(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a);});return b;},contents:function contents(a){return a.contentDocument||a.childNodes||[];},append:function append(a,b){var d=a.nodeType;if(1===d||11===d){b=new O(b);for(var d=0,c=b.length;d<c;d++){a.appendChild(b[d]);}}},prepend:function prepend(a,b){if(1===a.nodeType){var d=a.firstChild;q(new O(b),function(b){a.insertBefore(b,d);});}},wrap:function wrap(a,b){Pc(a,F(b).eq(0).clone()[0]);},remove:Db,detach:function detach(a){Db(a,!0);},after:function after(a,b){var d=a,c=a.parentNode;b=new O(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g;}},addClass:Bb,removeClass:Ab,toggleClass:function toggleClass(a,b,d){b&&q(b.split(" "),function(b){var e=d;y(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b);});},parent:function parent(a){return(a=a.parentNode)&&11!==a.nodeType?a:null;},next:function next(a){return a.nextElementSibling;},find:function find(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[];},clone:Xb,triggerHandler:function triggerHandler(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function preventDefault(){this.defaultPrevented=!0;},isDefaultPrevented:function isDefaultPrevented(){return!0===this.defaultPrevented;},stopImmediatePropagation:function stopImmediatePropagation(){this.immediatePropagationStopped=!0;},isImmediatePropagationStopped:function isImmediatePropagationStopped(){return!0===this.immediatePropagationStopped;},stopPropagation:A,type:f,target:a},b.type&&(c=S(c,b)),b=ia(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e);});}},function(a,b){O.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++){y(f)?(f=a(this[g],b,c,e),w(f)&&(f=F(f))):Qc(f,a(this[g],b,c,e));}return w(f)?f:this;};O.prototype.bind=O.prototype.on;O.prototype.unbind=O.prototype.off;});Ra.prototype={put:function put(a,b){this[Ca(a,this.nextUid)]=b;},get:function get(a){return this[Ca(a,this.nextUid)];},remove:function remove(a){var b=this[a=Ca(a,this.nextUid)];delete this[a];return b;}};var If=[function(){this.$get=[function(){return Ra;}];}],Wf=/^([^\(]+?)=>/,Xf=/^[^\(]*\(\s*([^\)]*)\)/m,Eg=/,/,Fg=/^\s*(_?)(\S+?)\1\s*$/,Vf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=N("$injector");cb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw G(d)&&d||(d=a.name||Yf(a)),Ha("strictdi",d);b=Wc(a);q(b[1].split(Eg),function(a){a.replace(Fg,function(a,b,d){c.push(d);});});}a.$inject=c;}}else L(a)?(b=a.length-1,Pa(a[b],"fn"),c=a.slice(0,b)):Pa(a,"fn",!0);return c;};var Rd=N("$animate"),$e=function $e(){this.$get=A;},af=function af(){var a=new Ra(),b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=G(b)?b.split(" "):L(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c);}));return d;}function f(){q(b,function(b){var c=a.get(b);if(c){var d=Zf(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b);});q(b,function(a){e&&Bb(a,e);f&&Ab(a,f);});a.remove(b);}});b.length=0;}return{enabled:A,on:A,off:A,pin:A,push:function push(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d();g.complete();return g;}};}];},Ye=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Rd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c);};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Rd("nongcls","ng-animate");return this.$$classNameFilter;};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a;}}h=void 0;}!h||h.parentNode||h.previousElementSibling||(d=null);}d?d.after(a):c.prepend(a);}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function cancel(a){a.end&&a.end();},enter:function enter(e,f,g,h){f=f&&F(f);g=g&&F(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h));},move:function move(e,f,g,h){f=f&&F(f);g=g&&F(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h));},leave:function leave(b,c){return a.push(b,"leave",Ia(c),function(){b.remove();});},addClass:function addClass(b,c,g){g=Ia(g);g.addClass=gb(g.addclass,c);return a.push(b,"addClass",g);},removeClass:function removeClass(b,c,g){g=Ia(g);g.removeClass=gb(g.removeClass,c);return a.push(b,"removeClass",g);},setClass:function setClass(b,c,g,h){h=Ia(h);h.addClass=gb(h.addClass,c);h.removeClass=gb(h.removeClass,g);return a.push(b,"setClass",h);},animate:function animate(b,c,g,h,k){k=Ia(k);k.from=k.from?S(k.from,c):c;k.to=k.to?S(k.to,g):g;k.tempClasses=gb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k);}};}];}],cf=function cf(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++){d[a]();}d=[];});}var d=[];return function(){var a=!1;b(function(){a=!0;});return function(d){a?d():b(d);};};}];},bf=function bf(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a);};this._state=0;}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c());});}var d=0;c();};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e);}var d=0,e=!0;q(a,function(a){a.done(c);});};f.prototype={setHost:function setHost(a){this.host=a||{};},done:function done(a){2===this._state?a():this._doneCallbacks.push(a);},progress:A,getPromise:function getPromise(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a();});});}return this.promise;},then:function then(a,b){return this.getPromise().then(a,b);},"catch":function _catch(a){return this.getPromise()["catch"](a);},"finally":function _finally(a){return this.getPromise()["finally"](a);},pause:function pause(){this.host.pause&&this.host.pause();},resume:function resume(){this.host.resume&&this.host.resume();},end:function end(){this.host.end&&this.host.end();this._resolve(!0);},cancel:function cancel(){this.host.cancel&&this.host.cancel();this._resolve(!1);},complete:function complete(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a);}));},_resolve:function _resolve(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a);}),this._doneCallbacks.length=0,this._state=2);}};return f;}];},Ze=function Ze(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0;});return k;}var g=e||{};g.$$prepared||(g=pa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d();return{start:f,end:f};};}];},ga=N("$compile"),bc=new function(){}();Fc.$inject=["$provide","$$sanitizeUriProvider"];Fb.prototype.isFirstChange=function(){return this.previousValue===bc;};var Yc=/^((?:x|data)[\:\-_])/i,cg=N("$controller"),cd=/^(\S+)(\s+as\s+([\w$]+))?$/,jf=function jf(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof F&&(b=b[0]):b=a[0].body;return b.offsetWidth+1;};}];},dd="application/json",ec={"Content-Type":dd+";charset=utf-8"},eg=/^\[|^\{(?!\{)/,fg={"[":/]$/,"{":/}$/},dg=/^\)\]\}',?\n/,Gg=N("$http"),hd=function hd(a){return function(){throw Gg("legacy",a);};},Ka=ca.$interpolateMinErr=N("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString());};var rf=function rf(){this.$get=["$window",function(a){function b(a){var b=function b(a){b.data=a;b.called=!0;};b.id=a;return b;}var d=a.angular.callbacks,c={};return{createCallback:function createCallback(a){a="_"+(d.$$counter++).toString(36);var f="angular.callbacks."+a,g=b(a);c[f]=d[a]=g;return f;},wasCalled:function wasCalled(a){return c[a].called;},getResponse:function getResponse(a){return c[a].data;},removeCallback:function removeCallback(a){delete d[c[a].id];delete c[a];}};}];},Hg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,hg={http:80,https:443,ftp:21},Gb=N("$location"),Ig={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Hb("$$absUrl"),url:function url(a){if(y(a))return this.$$url;var b=Hg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this;},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:md("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a;}),search:function search(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||T(a))a=a.toString(),this.$$search=Ac(a);else if(D(a))a=pa(a,{}),q(a,function(b,c){null==b&&delete a[c];}),this.$$search=a;else throw Gb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b;}this.$$compose();return this;},hash:md("$$hash",function(a){return null!==a?a.toString():"";}),replace:function replace(){this.$$replace=!0;return this;}};q([ld,hc,gc],function(a){a.prototype=Object.create(Ig);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Gb("nostate");this.$$state=y(b)?null:b;return this;};});var X=N("$parse"),jg=Function.prototype.call,kg=Function.prototype.apply,lg=Function.prototype.bind,Ob=U();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ob[a]=!0;});var Jg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},jc=function jc(a){this.options=a;};jc.prototype={constructor:jc,lex:function lex(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;){if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ob[b],e=Ob[d];Ob[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1);}}return this.tokens;},is:function is(a,b){return-1!==b.indexOf(a);},peek:function peek(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1;},isNumber:function isNumber(a){return"0"<=a&&"9">=a&&"string"===typeof a;},isWhitespace:function isWhitespace(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\xA0"===a;},isIdentifierStart:function isIdentifierStart(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a);},isValidIdentifierStart:function isValidIdentifierStart(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a;},isIdentifierContinue:function isIdentifierContinue(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a);},isValidIdentifierContinue:function isValidIdentifierContinue(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a);},codePointAt:function codePointAt(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888;},peekMultichar:function peekMultichar(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a;},isExpOperator:function isExpOperator(a){return"-"===a||"+"===a||this.isNumber(a);},throwError:function throwError(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw X("lexerr",a,b,this.text);},readNumber:function readNumber(){for(var a="",b=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent");}this.index++;}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)});},readIdent:function readIdent(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length;}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0});},readString:function readString(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Jg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return;}d+=f;}this.index++;}this.throwError("Unterminated quote",b);}};var s=function s(a,b){this.lexer=a;this.options=b;};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function ast(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a;},program:function program(){for(var a=[];;){if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a};}},expressionStatement:function expressionStatement(){return{type:s.ExpressionStatement,expression:this.filterChain()};},filterChain:function filterChain(){for(var a=this.expression();this.expect("|");){a=this.filter(a);}return a;},expression:function expression(){return this.assignment();},assignment:function assignment(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a;},ternary:function ternary(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a;},logicalOR:function logicalOR(){for(var a=this.logicalAND();this.expect("||");){a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};}return a;},logicalAND:function logicalAND(){for(var a=this.equality();this.expect("&&");){a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};}return a;},equality:function equality(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");){a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};}return a;},relational:function relational(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");){a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};}return a;},additive:function additive(){for(var a=this.multiplicative(),b;b=this.expect("+","-");){a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};}return a;},multiplicative:function multiplicative(){for(var a=this.unary(),b;b=this.expect("*","/","%");){a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};}return a;},unary:function unary(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary();},primary:function primary(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=pa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");){"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");}return a;},filter:function filter(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");){a.push(this.expression());}return b;},parseArguments:function parseArguments(){var a=[];if(")"!==this.peekToken().text){do{a.push(this.filterChain());}while(this.expect(","));}return a;},identifier:function identifier(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text};},constant:function constant(){return{type:s.Literal,value:this.consume().value};},arrayDeclaration:function arrayDeclaration(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression());}while(this.expect(","));}this.consume("]");return{type:s.ArrayExpression,elements:a};},object:function object(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b);}while(this.expect(","));}this.consume("}");return{type:s.ObjectExpression,properties:a};},throwError:function throwError(a,b){throw X("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function consume(a){if(0===this.tokens.length)throw X("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b;},peekToken:function peekToken(){if(0===this.tokens.length)throw X("ueoe",this.text);return this.tokens[0];},peek:function peek(a,b,d,c){return this.peekAhead(0,a,b,d,c);},peekAhead:function peekAhead(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a;}return!1;},expect:function expect(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1;},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};td.prototype={compile:function compile(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};V(c,d.$filter);var e="",f;this.stage="assign";if(f=rd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=pd(c.body);d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b;});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e)(this.$filter,Sa,ra,nd,ig,Ib,mg,od,a);this.state=this.stage=void 0;e.literal=sd(c);e.constant=c.constant;return e;},USE:"use",STRICT:"strict",watchFns:function watchFns(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"));});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("");},generateFunction:function generateFunction(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};";},filterPrefix:function filterPrefix(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")");});return a.length?"var "+a.join(",")+";":"";},varsPrefix:function varsPrefix(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":"";},body:function body(a){return this.state[a].body.join("");},recurse:function recurse(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||A;if(!f&&w(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a;});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h);});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a;});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a;});this.recurse(a.right,void 0,void 0,function(a){h=a;});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Sa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name));});},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Jb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Sa(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Jb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name);}},function(){k.assign(b,"undefined");});c(b);},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b);}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a));});});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m);},function(){k.assign(b,"undefined");});c(b);}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!qd(a.left))throw X("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m);});},1);break;case s.ArrayExpression:l=[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a);});});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0);});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h);})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a);});}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.LocalsExpression:this.assign(b,"l");c("l");break;case s.NGValueParameter:this.assign(b,"v"),c("v");}},getHasOwnProperty:function getHasOwnProperty(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d];},assign:function assign(a,b){if(a)return this.current().body.push(a,"=",b,";"),a;},filter:function filter(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a];},ifDefined:function ifDefined(a,b){return"ifDefined("+a+","+this.escape(b)+")";},plus:function plus(a,b){return"plus("+a+","+b+")";},return_:function return_(a){this.current().body.push("return ",a,";");},if_:function if_(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"));}},not:function not(a){return"!("+a+")";},notNull:function notNull(a){return a+"!=null";},nonComputedMember:function nonComputedMember(a,b){var d=/[^$_a-zA-Z0-9]/g;return /[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]';},computedMember:function computedMember(a,b){return a+"["+b+"]";},member:function member(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b);},addEnsureSafeObject:function addEnsureSafeObject(a){this.current().body.push(this.ensureSafeObject(a),";");},addEnsureSafeMemberName:function addEnsureSafeMemberName(a){this.current().body.push(this.ensureSafeMemberName(a),";");},addEnsureSafeFunction:function addEnsureSafeFunction(a){this.current().body.push(this.ensureSafeFunction(a),";");},addEnsureSafeAssignContext:function addEnsureSafeAssignContext(a){this.current().body.push(this.ensureSafeAssignContext(a),";");},ensureSafeObject:function ensureSafeObject(a){return"ensureSafeObject("+a+",text)";},ensureSafeMemberName:function ensureSafeMemberName(a){return"ensureSafeMemberName("+a+",text)";},ensureSafeFunction:function ensureSafeFunction(a){return"ensureSafeFunction("+a+",text)";},getStringValue:function getStringValue(a){this.assign(a,"getStringValue("+a+")");},ensureSafeAssignContext:function ensureSafeAssignContext(a){return"ensureSafeAssignContext("+a+",text)";},lazyRecurse:function lazyRecurse(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f);};},lazyAssign:function lazyAssign(a,b){var d=this;return function(){d.assign(a,b);};},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function stringEscapeFn(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);},escape:function escape(a){if(G(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(T(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw X("esc");},nextId:function nextId(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d;},current:function current(){return this.state[this.state.computing];}};ud.prototype={compile:function compile(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;V(c,d.$filter);var e,f;if(e=rd(c))f=this.recurse(e);e=pd(c.body);var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b;}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression));});e=0===c.body.length?A:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b);});return c;};f&&(e.assign=function(a,b,c){return f(a,c,b);});g&&(e.inputs=g);e.literal=sd(c);e.constant=c.constant;return e;},recurse:function recurse(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Sa(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Jb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Sa(a.property.name,f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a));}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p){n.push(g[p](a,c,d,f));}a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a;}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){ra(n.context,f.expression);nd(n.value,f.expression);p=[];for(var q=0;q<g.length;++q){p.push(ra(g[q](a,c,d,m),f.expression));}p=ra(n.value.apply(n.context,p),f.expression);}return b?{value:p}:p;};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);ra(n.value,f.expression);Ib(n.context);n.context[n.name]=a;return b?{value:a}:a;};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a));}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p){f.push(g[p](a,c,d,e));}return b?{value:f}:f;};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)});}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p){g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);}return b?{value:f}:f;};case s.ThisExpression:return function(a){return b?{value:a}:a;};case s.LocalsExpression:return function(a,c){return b?{value:c}:c;};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d;};}},"unary+":function unary(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d;};},"unary-":function unary(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?-d:0;return b?{value:d}:d;};},"unary!":function unary(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d;};},"binary+":function binary(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=od(h,c);return d?{value:h}:h;};},"binary-":function binary(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(w(h)?h:0)-(w(c)?c:0);return d?{value:h}:h;};},"binary*":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c;};},"binary/":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c;};},"binary%":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c;};},"binary===":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c;};},"binary!==":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c;};},"binary==":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c;};},"binary!=":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c;};},"binary<":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c;};},"binary>":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c;};},"binary<=":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c;};},"binary>=":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c;};},"binary&&":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c;};},"binary||":function binary(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c;};},"ternary?:":function ternary(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e;};},value:function value(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a;};},identifier:function identifier(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&ra(g,e);return d?{context:f,name:a,value:g}:g;};},computedMember:function computedMember(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m+="",Sa(m,e),c&&1!==c&&(Ib(l),l&&!l[m]&&(l[m]={})),n=l[m],ra(n,e));return d?{context:l,name:m,value:n}:n;};},nonComputedMember:function nonComputedMember(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Ib(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Jb(b))&&ra(h,f);return c?{context:g,name:b,value:h}:h;};},inputs:function inputs(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e);};}};var kc=function kc(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new ud(this.ast,b):new td(this.ast,b);};kc.prototype={constructor:kc,parse:function parse(a){return this.astCompiler.compile(a,this.options.expensiveChecks);}};var ng=Object.prototype.valueOf,sa=N("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},pg=N("$compile"),$=C.document.createElement("a"),yd=Y(C.location.href);zd.$inject=["$document"];Mc.$inject=["$provide"];var Gd=22,Fd=".",mc="0";Ad.$inject=["$locale"];Cd.$inject=["$locale"];var Ag={yyyy:ba("FullYear",4,0,!1,!0),yy:ba("FullYear",2,0,!0,!0),y:ba("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),LLLL:kb("Month",!1,!0),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function a(_a,b){return 12>_a.getHours()?b.AMPMS[0]:b.AMPMS[1];},Z:function Z(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2));},ww:Id(2),w:Id(1),G:nc,GG:nc,GGG:nc,GGGG:function GGGG(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1];}},zg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,yg=/^\-?\d+$/;Bd.$inject=["$locale"];var tg=ha(Q),ug=ha(ub);Dd.$inject=["$parse"];var oe=ha({restrict:"E",compile:function compile(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault();});}};}}),vb={};q(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a);});}if("multiple"!=a){var c=Aa("ng-"+b),e=d;"checked"===a&&(e=function e(a,b,_e){_e.ngModel!==_e[c]&&d(a,b,_e);});vb[c]=function(){return{restrict:"A",priority:100,link:e};};}});q(bd,function(a,b){vb[b]=function(){return{priority:100,link:function link(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Cg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return;}a.$watch(e[b],function(a){e.$set(b,a);});}};};});q(["src","srcset","href"],function(a){var b=Aa("ng-"+a);vb[b]=function(){return{priority:99,link:function link(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ea&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null);});}};};});var Lb={$addControl:A,$$renameControl:function $$renameControl(a,b){a.$name=b;},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};Jd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Sd=function Sd(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||A;}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Jd,compile:function compile(d,f){d.addClass(Ua).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function pre(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function p(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted();});b.preventDefault();};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1);},0,!1);});}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):A;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n));}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);q(a,void 0);S(n,Lb);});}};}};}];},pe=Sd(),Ce=Sd(!0),Bg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Kg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Lg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Mg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Td=/^(\d{4,})-(\d{2})-(\d{2})$/,Ud=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,rc=/^(\d{4,})-W(\d\d)$/,Vd=/^(\d{4,})-(\d\d)$/,Wd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ld=U();q(["date","datetime-local","month","time","week"],function(a){Ld[a]=!0;});var Xd={text:function text(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);},date:mb("date",Td,Nb(Td,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ud,Nb(Ud,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Wd,Nb(Wd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",rc,function(a,b){if(da(a))return a;if(G(a)){rc.lastIndex=0;var d=rc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Hd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h);}}return NaN;},"yyyy-Www"),month:mb("month",Vd,Nb(Vd,["yyyy","MM"]),"yyyy-MM"),number:function number(a,b,d,c,e,f){Md(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Mg.test(a))return parseFloat(a);});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!T(a))throw nb("numfmt",a);a=a.toString();}return a;});if(w(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||y(g)||a>=g;};d.$observe("min",function(a){w(a)&&!T(a)&&(a=parseFloat(a));g=T(a)&&!isNaN(a)?a:void 0;c.$validate();});}if(w(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||y(h)||a<=h;};d.$observe("max",function(a){w(a)&&!T(a)&&(a=parseFloat(a));h=T(a)&&!isNaN(a)?a:void 0;c.$validate();});}},url:function url(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d);};},email:function email(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Lg.test(d);};},radio:function radio(a,b,d,c){y(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type);});c.$render=function(){b[0].checked=d.value==c.$viewValue;};d.$observe("value",c.$render);},checkbox:function checkbox(a,b,d,c,e,f,g,h){var k=Nd(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Nd(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type);});c.$render=function(){b[0].checked=c.$viewValue;};c.$isEmpty=function(a){return!1===a;};c.$formatters.push(function(a){return na(a,k);});c.$parsers.push(function(a){return a?k:l;});},hidden:A,button:A,submit:A,reset:A,file:A},Gc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function pre(e,f,g,h){h[0]&&(Xd[Q(g.type)]||Xd.text)(e,f,g,h[0],b,a,d,c);}}};}],Ng=/^(true|false|\d+)$/,Ue=function Ue(){return{restrict:"A",priority:100,compile:function compile(a,b){return Ng.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue));}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a);});};}};},ue=["$compile",function(a){return{restrict:"AC",compile:function compile(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=y(a)?"":a;});};}};}],we=["$interpolate","$compile",function(a,b){return{compile:function compile(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a;});};}};}],ve=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function compile(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b);});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"");});};}};}],Te=ha({restrict:"A",require:"ngModel",link:function link(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange);});}}),xe=qc("",!0),ze=qc("Odd",0),ye=qc("Even",1),Ae=Ta({compile:function compile(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak");}}),Be=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500};}],Lc={},Og={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=Aa("ng-"+a);Lc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function compile(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function e(){g(b,{$event:d});};Og[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e);});};}};}];});var Ee=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function link(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c);}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null;}),h=null));});}};}],Fe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function compile(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var q=0,s,B,r,y=function y(){B&&(B.remove(),B=null);s&&(s.$destroy(),s=null);r&&(d.leave(r).then(function(){B=null;}),B=r,r=null);};c.$watch(f,function(f){var m=function m(){!w(h)||h&&!c.$eval(h)||b();},t=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===q){var b=c.$new();n.template=a;a=p(b,function(a){y();d.enter(a,null,e).then(m);});s=b;r=a;s.$emit("$includeContentLoaded",f);c.$eval(g);}},function(){c.$$destroyed||t!==q||(y(),c.$emit("$includeContentError",f));}),c.$emit("$includeContentRequested",f)):(y(),n.template=null);});};}};}],We=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function link(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(Oc(e.template,C.document).childNodes)(b,function(a){d.append(a);},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b));}};}],Ge=Ta({priority:450,compile:function compile(){return{pre:function pre(a,b,d){a.$eval(d.ngInit);}};}}),Se=function Se(){return{restrict:"A",priority:100,require:"ngModel",link:function link(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!y(a)){var b=[];a&&q(a.split(g),function(a){a&&b.push(f?W(a):a);});return b;}});c.$formatters.push(function(a){if(L(a))return a.join(e);});c.$isEmpty=function(a){return!a||!a.length;};}};},ob="ng-valid",Od="ng-invalid",Ua="ng-pristine",Mb="ng-dirty",Qd="ng-pending",nb=N("ngModel"),Pg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Lb;var m=e(d.ngModel),n=m.assign,p=m,u=n,s=null,B,r=this;this.$$setOptions=function(a){if((r.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function p(a){var c=m(a);z(c)&&(c=b(a));return c;};u=function u(a,b){z(m(a))?f(a,{$$$p:b}):n(a,b);};}else if(!m.assign)throw nb("nonassign",d.ngModel,ya(c));};this.$render=A;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a;};this.$$updateEmptyClasses=function(a){r.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"));};var J=0;Kd({ctrl:this,$element:c,set:function set(a,b){a[b]=!0;},unset:function unset(a,b){delete a[b];},$animate:f});this.$setPristine=function(){r.$dirty=!1;r.$pristine=!0;f.removeClass(c,Mb);f.addClass(c,Ua);};this.$setDirty=function(){r.$dirty=!0;r.$pristine=!1;f.removeClass(c,Ua);f.addClass(c,Mb);r.$$parentForm.$setDirty();};this.$setUntouched=function(){r.$touched=!1;r.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched");};this.$setTouched=function(){r.$touched=!0;r.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched");};this.$rollbackViewValue=function(){g.cancel(s);r.$viewValue=r.$$lastCommittedViewValue;r.$render();};this.$validate=function(){if(!T(r.$modelValue)||!isNaN(r.$modelValue)){var a=r.$$rawModelValue,b=r.$valid,c=r.$modelValue,d=r.$options&&r.$options.allowInvalid;r.$$runValidators(a,r.$$lastCommittedViewValue,function(e){d||b===e||(r.$modelValue=e?a:void 0,r.$modelValue!==c&&r.$$writeModelToScope());});}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(r.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g);});return c?!0:(q(r.$asyncValidators,function(a,b){f(b,null);}),!1);}function e(){var c=[],d=!0;q(r.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!z(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0);},function(){d=!1;f(g,!1);}));});c.length?k.all(c).then(function(){g(d);},A):g(!0);}function f(a,b){h===J&&r.$setValidity(a,b);}function g(a){h===J&&c(a);}J++;var h=J;(function(){var a=r.$$parserName||"parse";if(y(B))f(a,null);else return B||(q(r.$validators,function(a,b){f(b,null);}),q(r.$asyncValidators,function(a,b){f(b,null);})),f(a,B),B;return!0;})()?d()?e():g(!1):g(!1);};this.$commitViewValue=function(){var a=r.$viewValue;g.cancel(s);if(r.$$lastCommittedViewValue!==a||""===a&&r.$$hasNativeValidators)r.$$updateEmptyClasses(a),r.$$lastCommittedViewValue=a,r.$pristine&&this.$setDirty(),this.$$parseAndValidate();};this.$$parseAndValidate=function(){var b=r.$$lastCommittedViewValue;if(B=y(b)?void 0:!0)for(var c=0;c<r.$parsers.length;c++){if(b=r.$parsers[c](b),y(b)){B=!1;break;}}T(r.$modelValue)&&isNaN(r.$modelValue)&&(r.$modelValue=p(a));var d=r.$modelValue,e=r.$options&&r.$options.allowInvalid;r.$$rawModelValue=b;e&&(r.$modelValue=b,r.$modelValue!==d&&r.$$writeModelToScope());r.$$runValidators(b,r.$$lastCommittedViewValue,function(a){e||(r.$modelValue=a?b:void 0,r.$modelValue!==d&&r.$$writeModelToScope());});};this.$$writeModelToScope=function(){u(a,r.$modelValue);q(r.$viewChangeListeners,function(a){try{a();}catch(c){b(c);}});};this.$setViewValue=function(a,b){r.$viewValue=a;r.$options&&!r.$options.updateOnDefault||r.$$debounceViewValueCommit(b);};this.$$debounceViewValueCommit=function(b){var c=0,d=r.$options;d&&w(d.debounce)&&(d=d.debounce,T(d)?c=d:T(d[b])?c=d[b]:T(d["default"])&&(c=d["default"]));g.cancel(s);c?s=g(function(){r.$commitViewValue();},c):h.$$phase?r.$commitViewValue():a.$apply(function(){r.$commitViewValue();});};a.$watch(function(){var b=p(a);if(b!==r.$modelValue&&(r.$modelValue===r.$modelValue||b===b)){r.$modelValue=r.$$rawModelValue=b;B=void 0;for(var c=r.$formatters,d=c.length,e=b;d--;){e=c[d](e);}r.$viewValue!==e&&(r.$$updateEmptyClasses(e),r.$viewValue=r.$$lastCommittedViewValue=e,r.$render(),r.$$runValidators(b,e,A));}return b;});}],Re=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pg,priority:1,compile:function compile(b){b.addClass(Ua).addClass("ng-untouched").addClass(ob);return{pre:function pre(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a);});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g);});},post:function post(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type);});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched));});}};}};}],Qg=/(\s+|^)default(\s+|$)/,Ve=function Ve(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=pa(a.$eval(b.ngModelOptions));w(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Qg,function(){d.$options.updateOnDefault=!0;return" ";}))):this.$options.updateOnDefault=!0;}]};},He=Ta({terminal:!0,priority:1E3}),Rg=N("ngOptions"),Sg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Pe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f;}function f(a){var b;if(!q&&ta(a))b=a;else{b=[];for(var c in a){a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c);}}return b;}var n=a.match(Sg);if(!n)throw Rg("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var w=a&&d(a)||b,r=s&&d(s),y=s?function(a,b){return r(c,b);}:function(a){return Ca(a);},v=function v(a,b){return y(a,E(a,b));},A=d(n[2]||n[1]),t=d(n[3]||""),K=d(n[4]||""),z=d(n[8]),H={},E=q?function(a,b){H[q]=b;H[p]=a;return H;}:function(a){H[p]=a;return H;};return{trackBy:s,getTrackByValue:v,getWatchables:d(z,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=E(l,h),l=y(l,h);b.push(l);if(n[2]||n[1])l=A(c,h),b.push(l);n[4]&&(h=K(c,h),b.push(h));}return b;}),getOptions:function getOptions(){for(var a=[],b={},d=z(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=E(d[p],p),r=w(c,q),p=y(r,q),u=A(c,q),H=t(c,q),q=K(c,q),r=new e(p,r,u,H,q);a.push(r);b[p]=r;}return{items:a,selectValueMap:b,getOptionFromViewValue:function getOptionFromViewValue(a){return b[v(a)];},getViewValueFromOption:function getViewValueFromOption(a){return s?ca.copy(a.viewValue):a.viewValue;}};}};}var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function pre(a,b,c,d){d[0].registerOption=A;},post:function post(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue);}function n(){var a=t&&p.readValue();if(t)for(var b=t.items.length-1;0<=b;b--){var c=t.items[b];w(c.group)?Db(c.element.parentNode):Db(c.element);}t=K.getOptions();var d={};v&&h.prepend(B);t.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1);}else b=C,c=e.cloneNode(!1);b.appendChild(c);m(a,c);});h[0].appendChild(C);s.$render();s.$isEmpty(a)||(b=p.readValue(),(K.trackBy||y?na(a,b):a===b)||(s.$setViewValue(b),s.$render()));}var p=l[0],s=l[1],y=k.multiple,B;l=0;for(var r=h.children(),A=r.length;l<A;l++){if(""===r[l].value){B=r.eq(l);break;}}var v=!!B,z=F(e.cloneNode(!1));z.val("?");var t,K=c(k.ngOptions,h,d),C=b[0].createDocumentFragment();y?(s.$isEmpty=function(a){return!a||0===a.length;},p.writeValue=function(a){t.items.forEach(function(a){a.element.selected=!1;});a&&a.forEach(function(a){if(a=t.getOptionFromViewValue(a))a.element.selected=!0;});},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a));});return b;},K.trackBy&&d.$watchCollection(function(){if(L(s.$viewValue))return s.$viewValue.map(function(a){return K.getTrackByValue(a);});},function(){s.$render();})):(p.writeValue=function(a){var b=t.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(z.remove(),v||B.remove(),h[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||v?(z.remove(),v||h.prepend(B),h.val(""),B.prop("selected",!0),B.attr("selected",!0)):(v||B.remove(),h.prepend(z),h.val("?"),z.prop("selected",!0),z.attr("selected",!0));},p.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(v||B.remove(),z.remove(),t.getViewValueFromOption(a)):null;},K.trackBy&&d.$watch(function(){return K.getTrackByValue(s.$viewValue);},function(){s.$render();}));v?(B.remove(),a(B)(d),B.removeClass("ng-scope")):B=F(e.cloneNode(!1));h.empty();n();d.$watchCollection(K.getWatchables,n);}}};}],Ie=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function link(f,g,h){function k(a){g.text(a||"");}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},w=b.startSymbol(),B=b.endSymbol(),r=w+l+"-"+n+B,z=ca.noop,v;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+Q(c[2]),p[c]=g.attr(h.$attr[b]));});q(p,function(a,d){s[d]=b(a.replace(c,r));});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===v||e&&T(v)&&isNaN(v)||(z(),e=s[c],y(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),z=A,k()):z=f.$watch(e,k),v=c);});}};}],Je=["$parse","$animate","$compile",function(a,b,d){var c=N("ngRepeat"),e=function e(a,b,c,d,_e2,m,n){a[c]=d;_e2&&(a[_e2]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1));};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function compile(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var w=l[3]||l[1],y=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var r,z,v,A,t={$id:Ca};s?r=a(s):(v=function v(a,b){return Ca(b);},A=function A(a){return a;});return function(a,d,f,g,l){r&&(z=function z(b,c,d){y&&(t[y]=b);t[w]=c;t.$index=d;return r(a,t);});var m=U();a.$watchCollection(n,function(f){var g,n,r=d[0],s,u=U(),t,C,F,E,G,D,H;p&&(a[p]=f);if(ta(f))G=f,n=z||v;else for(H in n=z||A,G=[],f){ua.call(f,H)&&"$"!==H.charAt(0)&&G.push(H);}t=G.length;H=Array(t);for(g=0;g<t;g++){if(C=f===G?g:G[g],F=f[C],E=n(C,F,g),m[E])D=m[E],delete m[E],u[E]=D,H[g]=D;else{if(u[E])throw q(H,function(a){a&&a.scope&&(m[a.id]=a);}),c("dupes",h,E,F);H[g]={id:E,scope:void 0,clone:void 0};u[E]=!0;}}for(s in m){D=m[s];E=tb(D.clone);b.leave(E);if(E[0].parentNode)for(g=0,n=E.length;g<n;g++){E[g].$$NG_REMOVED=!0;}D.scope.$destroy();}for(g=0;g<t;g++){if(C=f===G?g:G[g],F=f[C],D=H[g],D.scope){s=r;do{s=s.nextSibling;}while(s&&s.$$NG_REMOVED);D.clone[0]!=s&&b.move(tb(D.clone),null,r);r=D.clone[D.clone.length-1];e(D.scope,g,w,F,y,C,t);}else l(function(a,c){D.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;D.clone=a;u[D.id]=D;e(D.scope,g,w,F,y,C,t);});}m=u;});};}};}],Ke=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function link(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"});});}};}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function link(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"});});}};}],Le=Ta(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"");});a&&b.css(a);},!0);}),Me=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={};}],link:function link(d,c,e,f){var g=[],h=[],k=[],l=[],m=function m(a,b){return function(){a.splice(b,1);};};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d){a.cancel(k[d]);}d=k.length=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d));}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f);});});});}};}],Ne=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function link(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b});}}),Oe=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function link(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b});}}),Tg=N("ngTransclude"),Qe=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function compile(b){var d=a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){b.append(a);});}if(!h)throw Tg("orphan",ya(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;h(function(a,c){a.length?b.append(a):(k(),c.$destroy());},null,f);f&&!h.isSlotFilled(f)&&k();};}};}],qe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function compile(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text);}};}],Ug={$setViewValue:A,$render:A},Vg=["$element","$scope",function(a,b){var d=this,c=new Ra();d.ngModelCtrl=Ug;d.unknownOption=F(C.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Ca(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b);};b.$on("$destroy",function(){d.renderUnknownOption=A;});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove();};d.readValue=function(){d.removeUnknownOption();return a.val();};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b);};d.addOption=function(a,b){if(8!==b[0].nodeType){Qa(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0);}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1));};d.hasOption=function(a){return!!c.get(a);};d.registerOption=function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){w(l)&&d.removeOption(l);l=a;d.addOption(a,b);});}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b);}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render();});};}],re=function re(){return{restrict:"E",require:["select","?ngModel"],controller:Vg,priority:1,link:{pre:function pre(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue());});});if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value);});return a;};f.writeValue=function(a){var c=new Ra(a);q(b.find("option"),function(a){a.selected=w(c.get(a.value));});};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=ia(e.$viewValue),e.$render());h=e.$viewValue;});e.$isEmpty=function(a){return!a||0===a.length;};}}},post:function post(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue);};}}}};},te=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function compile(b,d){if(w(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text());}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e);};}};}],se=ha({restrict:"E",terminal:!1}),Ic=function Ic(){return{restrict:"A",require:"?ngModel",link:function link(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b);},d.$observe("required",function(){c.$validate();}));}};},Hc=function Hc(){return{restrict:"A",require:"?ngModel",link:function link(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){G(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw N("ngPattern")("noregexp",f,a,ya(b));e=a||void 0;c.$validate();});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||y(e)||e.test(b);};}}};},Kc=function Kc(){return{restrict:"A",require:"?ngModel",link:function link(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=isNaN(a)?-1:a;c.$validate();});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e;};}}};},Jc=function Jc(){return{restrict:"A",require:"?ngModel",link:function link(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate();});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e;};}}};};C.angular.bootstrap?C.console&&console.log("WARNING: Tried to load angular more than once."):(je(),le(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1;}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\xA4",negSuf:"",posPre:"\xA4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function pluralCat(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other";}});}]),F(C.document).ready(function(){fe(C.document,Bc);}));})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');//# sourceMappingURL=angular.min.js.map

/***/ },

/***/ 28:
/***/ function(module, exports) {

	"use strict";

	/*
	 AngularJS v1.5.7
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function (R, C) {
	  'use strict';
	  function Aa(a, b, c) {
	    if (!a) throw Ma("areq", b || "?", c || "required");return a;
	  }function Ba(a, b) {
	    if (!a && !b) return "";if (!a) return b;if (!b) return a;ca(a) && (a = a.join(" "));ca(b) && (b = b.join(" "));return a + " " + b;
	  }function Na(a) {
	    var b = {};a && (a.to || a.from) && (b.to = a.to, b.from = a.from);return b;
	  }function Y(a, b, c) {
	    var d = "";a = ca(a) ? a : a && O(a) && a.length ? a.split(/\s+/) : [];s(a, function (a, l) {
	      a && 0 < a.length && (d += 0 < l ? " " : "", d += c ? b + a : a + b);
	    });return d;
	  }function Oa(a) {
	    if (a instanceof G) switch (a.length) {case 0:
	        return a;
	      case 1:
	        if (1 === a[0].nodeType) return a;break;default:
	        return G(da(a));}if (1 === a.nodeType) return G(a);
	  }function da(a) {
	    if (!a[0]) return a;for (var b = 0; b < a.length; b++) {
	      var c = a[b];if (1 == c.nodeType) return c;
	    }
	  }function Pa(a, b, c) {
	    s(b, function (b) {
	      a.addClass(b, c);
	    });
	  }function Qa(a, b, c) {
	    s(b, function (b) {
	      a.removeClass(b, c);
	    });
	  }function V(a) {
	    return function (b, c) {
	      c.addClass && (Pa(a, b, c.addClass), c.addClass = null);c.removeClass && (Qa(a, b, c.removeClass), c.removeClass = null);
	    };
	  }function oa(a) {
	    a = a || {};if (!a.$$prepared) {
	      var b = a.domOperation || Q;a.domOperation = function () {
	        a.$$domOperationFired = !0;b();b = Q;
	      };a.$$prepared = !0;
	    }return a;
	  }function ha(a, b) {
	    Ca(a, b);Da(a, b);
	  }function Ca(a, b) {
	    b.from && (a.css(b.from), b.from = null);
	  }function Da(a, b) {
	    b.to && (a.css(b.to), b.to = null);
	  }function W(a, b, c) {
	    var d = b.options || {};c = c.options || {};var e = (d.addClass || "") + " " + (c.addClass || ""),
	        l = (d.removeClass || "") + " " + (c.removeClass || "");a = Ra(a.attr("class"), e, l);c.preparationClasses && (d.preparationClasses = Z(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
	    e = d.domOperation !== Q ? d.domOperation : null;Ea(d, c);e && (d.domOperation = e);d.addClass = a.addClass ? a.addClass : null;d.removeClass = a.removeClass ? a.removeClass : null;b.addClass = d.addClass;b.removeClass = d.removeClass;return d;
	  }function Ra(a, b, c) {
	    function d(a) {
	      O(a) && (a = a.split(" "));var b = {};s(a, function (a) {
	        a.length && (b[a] = !0);
	      });return b;
	    }var e = {};a = d(a);b = d(b);s(b, function (a, b) {
	      e[b] = 1;
	    });c = d(c);s(c, function (a, b) {
	      e[b] = 1 === e[b] ? null : -1;
	    });var l = { addClass: "", removeClass: "" };s(e, function (b, c) {
	      var d, e;1 === b ? (d = "addClass", e = !a[c]) : -1 === b && (d = "removeClass", e = a[c]);e && (l[d].length && (l[d] += " "), l[d] += c);
	    });return l;
	  }function z(a) {
	    return a instanceof C.element ? a[0] : a;
	  }function Sa(a, b, c) {
	    var d = "";b && (d = Y(b, "ng-", !0));c.addClass && (d = Z(d, Y(c.addClass, "-add")));c.removeClass && (d = Z(d, Y(c.removeClass, "-remove")));d.length && (c.preparationClasses = d, a.addClass(d));
	  }function pa(a, b) {
	    var c = b ? "-" + b + "s" : "";la(a, [ma, c]);return [ma, c];
	  }function ta(a, b) {
	    var c = b ? "paused" : "",
	        d = $ + "PlayState";la(a, [d, c]);return [d, c];
	  }function la(a, b) {
	    a.style[b[0]] = b[1];
	  }function Z(a, b) {
	    return a ? b ? a + " " + b : a : b;
	  }function Fa(a, b, c) {
	    var d = Object.create(null),
	        e = a.getComputedStyle(b) || {};s(c, function (a, b) {
	      var c = e[a];if (c) {
	        var g = c.charAt(0);if ("-" === g || "+" === g || 0 <= g) c = Ta(c);0 === c && (c = null);d[b] = c;
	      }
	    });return d;
	  }function Ta(a) {
	    var b = 0;a = a.split(/\s*,\s*/);s(a, function (a) {
	      "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));a = parseFloat(a) || 0;b = b ? Math.max(a, b) : a;
	    });return b;
	  }function ua(a) {
	    return 0 === a || null != a;
	  }function Ga(a, b) {
	    var c = S,
	        d = a + "s";b ? c += "Duration" : d += " linear all";
	    return [c, d];
	  }function Ha() {
	    var a = Object.create(null);return { flush: function flush() {
	        a = Object.create(null);
	      }, count: function count(b) {
	        return (b = a[b]) ? b.total : 0;
	      }, get: function get(b) {
	        return (b = a[b]) && b.value;
	      }, put: function put(b, c) {
	        a[b] ? a[b].total++ : a[b] = { total: 1, value: c };
	      } };
	  }function Ia(a, b, c) {
	    s(c, function (c) {
	      a[c] = ea(a[c]) ? a[c] : b.style.getPropertyValue(c);
	    });
	  }var Q = C.noop,
	      Ja = C.copy,
	      Ea = C.extend,
	      G = C.element,
	      s = C.forEach,
	      ca = C.isArray,
	      O = C.isString,
	      va = C.isObject,
	      I = C.isUndefined,
	      ea = C.isDefined,
	      Ka = C.isFunction,
	      wa = C.isElement,
	      S,
	      xa,
	      $,
	      ya;I(R.ontransitionend) && ea(R.onwebkittransitionend) ? (S = "WebkitTransition", xa = "webkitTransitionEnd transitionend") : (S = "transition", xa = "transitionend");I(R.onanimationend) && ea(R.onwebkitanimationend) ? ($ = "WebkitAnimation", ya = "webkitAnimationEnd animationend") : ($ = "animation", ya = "animationend");var qa = $ + "Delay",
	      za = $ + "Duration",
	      ma = S + "Delay",
	      La = S + "Duration",
	      Ma = C.$$minErr("ng"),
	      Ua = { transitionDuration: La, transitionDelay: ma, transitionProperty: S + "Property", animationDuration: za, animationDelay: qa, animationIterationCount: $ + "IterationCount" },
	      Va = { transitionDuration: La, transitionDelay: ma, animationDuration: za, animationDelay: qa };C.module("ngAnimate", []).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) {
	    return { restrict: "A", transclude: "element", terminal: !0, priority: 600, link: function link(b, d, e, l, n) {
	        var H, g;b.$watchCollection(e.ngAnimateSwap || e["for"], function (e) {
	          H && a.leave(H);g && (g.$destroy(), g = null);if (e || 0 === e) g = b.$new(), n(g, function (b) {
	            H = b;a.enter(b, null, d);
	          });
	        });
	      } };
	  }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
	    return { link: function link(b, c, d) {
	        function e(a) {
	          c.data("$$ngAnimateChildren", "on" === a || "true" === a);
	        }var l = d.ngAnimateChildren;C.isString(l) && 0 === l.length ? c.data("$$ngAnimateChildren", !0) : (e(a(l)(b)), d.$observe("ngAnimateChildren", e));
	      } };
	  }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
	    function b(a) {
	      d = d.concat(a);c();
	    }function c() {
	      if (d.length) {
	        for (var b = d.shift(), n = 0; n < b.length; n++) {
	          b[n]();
	        }e || a(function () {
	          e || c();
	        });
	      }
	    }var d, e;d = b.queue = [];b.waitUntilQuiet = function (b) {
	      e && e();e = a(function () {
	        e = null;b();c();
	      });
	    };return b;
	  }]).provider("$$animateQueue", ["$animateProvider", function (a) {
	    function b(a) {
	      if (!a) return null;a = a.split(" ");var b = Object.create(null);s(a, function (a) {
	        b[a] = !0;
	      });return b;
	    }function c(a, c) {
	      if (a && c) {
	        var d = b(c);return a.split(" ").some(function (a) {
	          return d[a];
	        });
	      }
	    }function d(a, b, c, d) {
	      return l[a].some(function (a) {
	        return a(b, c, d);
	      });
	    }function e(a, b) {
	      var c = 0 < (a.addClass || "").length,
	          d = 0 < (a.removeClass || "").length;return b ? c && d : c || d;
	    }var l = this.rules = { skip: [], cancel: [], join: [] };l.join.push(function (a, b, c) {
	      return !b.structural && e(b);
	    });l.skip.push(function (a, b, c) {
	      return !b.structural && !e(b);
	    });l.skip.push(function (a, b, c) {
	      return "leave" == c.event && b.structural;
	    });l.skip.push(function (a, b, c) {
	      return c.structural && 2 === c.state && !b.structural;
	    });l.cancel.push(function (a, b, c) {
	      return c.structural && b.structural;
	    });l.cancel.push(function (a, b, c) {
	      return 2 === c.state && b.structural;
	    });l.cancel.push(function (a, b, d) {
	      if (d.structural) return !1;a = b.addClass;b = b.removeClass;var e = d.addClass;d = d.removeClass;return I(a) && I(b) || I(e) && I(d) ? !1 : c(a, d) || c(b, e);
	    });this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (b, c, g, l, v, Wa, P, t, F, T) {
	      function J() {
	        var a = !1;return function (b) {
	          a ? b() : c.$$postDigest(function () {
	            a = !0;b();
	          });
	        };
	      }function y(a, b, c) {
	        var f = z(b),
	            d = z(a),
	            N = [];(a = h[c]) && s(a, function (a) {
	          x.call(a.node, f) ? N.push(a.callback) : "leave" === c && x.call(a.node, d) && N.push(a.callback);
	        });return N;
	      }function r(a, b, c) {
	        var f = da(b);return a.filter(function (a) {
	          return !(a.node === f && (!c || a.callback === c));
	        });
	      }function p(a, h, w) {
	        function r(c, f, d, h) {
	          sa(function () {
	            var c = y(T, a, f);c.length ? b(function () {
	              s(c, function (b) {
	                b(a, d, h);
	              });"close" !== d || a[0].parentNode || ra.off(a);
	            }) : "close" !== d || a[0].parentNode || ra.off(a);
	          });c.progress(f, d, h);
	        }function k(b) {
	          var c = a,
	              f = m;f.preparationClasses && (c.removeClass(f.preparationClasses), f.preparationClasses = null);f.activeClasses && (c.removeClass(f.activeClasses), f.activeClasses = null);E(a, m);ha(a, m);m.domOperation();B.complete(!b);
	        }var m = Ja(w),
	            p,
	            T;if (a = Oa(a)) p = z(a), T = a.parent();var m = oa(m),
	            B = new P(),
	            sa = J();ca(m.addClass) && (m.addClass = m.addClass.join(" "));m.addClass && !O(m.addClass) && (m.addClass = null);ca(m.removeClass) && (m.removeClass = m.removeClass.join(" "));m.removeClass && !O(m.removeClass) && (m.removeClass = null);m.from && !va(m.from) && (m.from = null);m.to && !va(m.to) && (m.to = null);if (!p) return k(), B;w = [p.className, m.addClass, m.removeClass].join(" ");if (!Xa(w)) return k(), B;var g = 0 <= ["enter", "move", "leave"].indexOf(h),
	            x = l[0].hidden,
	            t = !f || x || N.get(p);w = !t && A.get(p) || {};var F = !!w.state;t || F && 1 == w.state || (t = !M(a, T, h));if (t) return x && r(B, h, "start"), k(), x && r(B, h, "close"), B;g && K(a);x = { structural: g, element: a, event: h, addClass: m.addClass, removeClass: m.removeClass, close: k, options: m, runner: B };if (F) {
	          if (d("skip", a, x, w)) {
	            if (2 === w.state) return k(), B;W(a, w, x);return w.runner;
	          }if (d("cancel", a, x, w)) {
	            if (2 === w.state) w.runner.end();else if (w.structural) w.close();else return W(a, w, x), w.runner;
	          } else if (d("join", a, x, w)) if (2 === w.state) W(a, x, {});else return Sa(a, g ? h : null, m), h = x.event = w.event, m = W(a, w, x), w.runner;
	        } else W(a, x, {});(F = x.structural) || (F = "animate" === x.event && 0 < Object.keys(x.options.to || {}).length || e(x));if (!F) return k(), ka(a), B;var v = (w.counter || 0) + 1;x.counter = v;L(a, 1, x);c.$$postDigest(function () {
	          var b = A.get(p),
	              c = !b,
	              b = b || {},
	              f = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || e(b));if (c || b.counter !== v || !f) {
	            c && (E(a, m), ha(a, m));if (c || g && b.event !== h) m.domOperation(), B.end();f || ka(a);
	          } else h = !b.structural && e(b, !0) ? "setClass" : b.event, L(a, 2), b = Wa(a, h, b.options), B.setHost(b), r(B, h, "start", {}), b.done(function (b) {
	            k(!b);
	            (b = A.get(p)) && b.counter === v && ka(z(a));r(B, h, "close", {});
	          });
	        });return B;
	      }function K(a) {
	        a = z(a).querySelectorAll("[data-ng-animate]");s(a, function (a) {
	          var b = parseInt(a.getAttribute("data-ng-animate")),
	              c = A.get(a);if (c) switch (b) {case 2:
	              c.runner.end();case 1:
	              A.remove(a);}
	        });
	      }function ka(a) {
	        a = z(a);a.removeAttribute("data-ng-animate");A.remove(a);
	      }function k(a, b) {
	        return z(a) === z(b);
	      }function M(a, b, c) {
	        c = G(l[0].body);var f = k(a, c) || "HTML" === a[0].nodeName,
	            d = k(a, g),
	            h = !1,
	            r,
	            e = N.get(z(a));(a = G.data(a[0], "$ngAnimatePin")) && (b = a);for (b = z(b); b;) {
	          d || (d = k(b, g));if (1 !== b.nodeType) break;a = A.get(b) || {};if (!h) {
	            var p = N.get(b);if (!0 === p && !1 !== e) {
	              e = !0;break;
	            } else !1 === p && (e = !1);h = a.structural;
	          }if (I(r) || !0 === r) a = G.data(b, "$$ngAnimateChildren"), ea(a) && (r = a);if (h && !1 === r) break;f || (f = k(b, c));if (f && d) break;if (!d && (a = G.data(b, "$ngAnimatePin"))) {
	            b = z(a);continue;
	          }b = b.parentNode;
	        }return (!h || r) && !0 !== e && d && f;
	      }function L(a, b, c) {
	        c = c || {};c.state = b;a = z(a);a.setAttribute("data-ng-animate", b);c = (b = A.get(a)) ? Ea(b, c) : c;A.put(a, c);
	      }var A = new v(),
	          N = new v(),
	          f = null,
	          B = c.$watch(function () {
	        return 0 === t.totalPendingRequests;
	      }, function (a) {
	        a && (B(), c.$$postDigest(function () {
	          c.$$postDigest(function () {
	            null === f && (f = !0);
	          });
	        }));
	      }),
	          h = {},
	          sa = a.classNameFilter(),
	          Xa = sa ? function (a) {
	        return sa.test(a);
	      } : function () {
	        return !0;
	      },
	          E = V(F),
	          x = R.Node.prototype.contains || function (a) {
	        return this === a || !!(this.compareDocumentPosition(a) & 16);
	      },
	          ra = { on: function on(a, b, c) {
	          var f = da(b);h[a] = h[a] || [];h[a].push({ node: f, callback: c });G(b).on("$destroy", function () {
	            A.get(f) || ra.off(a, b, c);
	          });
	        }, off: function off(a, b, c) {
	          if (1 !== arguments.length || C.isString(arguments[0])) {
	            var f = h[a];f && (h[a] = 1 === arguments.length ? null : r(f, b, c));
	          } else for (f in b = arguments[0], h) {
	            h[f] = r(h[f], b);
	          }
	        }, pin: function pin(a, b) {
	          Aa(wa(a), "element", "not an element");Aa(wa(b), "parentElement", "not an element");a.data("$ngAnimatePin", b);
	        }, push: function push(a, b, c, f) {
	          c = c || {};c.domOperation = f;return p(a, b, c);
	        }, enabled: function enabled(a, b) {
	          var c = arguments.length;if (0 === c) b = !!f;else if (wa(a)) {
	            var d = z(a),
	                h = N.get(d);1 === c ? b = !h : N.put(d, !b);
	          } else b = f = !!a;return b;
	        } };return ra;
	    }];
	  }]).provider("$$animation", ["$animateProvider", function (a) {
	    var b = this.drivers = [];this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, d, e, l, n, H) {
	      function g(a) {
	        function b(a) {
	          if (a.processed) return a;a.processed = !0;var d = a.domNode,
	              p = d.parentNode;e.put(d, a);for (var K; p;) {
	            if (K = e.get(p)) {
	              K.processed || (K = b(K));break;
	            }p = p.parentNode;
	          }(K || c).children.push(a);return a;
	        }var c = { children: [] },
	            d,
	            e = new n();for (d = 0; d < a.length; d++) {
	          var g = a[d];e.put(g.domNode, a[d] = { domNode: g.domNode, fn: g.fn, children: [] });
	        }for (d = 0; d < a.length; d++) {
	          b(a[d]);
	        }return function (a) {
	          var b = [],
	              c = [],
	              d;for (d = 0; d < a.children.length; d++) {
	            c.push(a.children[d]);
	          }a = c.length;var e = 0,
	              k = [];for (d = 0; d < c.length; d++) {
	            var g = c[d];0 >= a && (a = e, e = 0, b.push(k), k = []);k.push(g.fn);g.children.forEach(function (a) {
	              e++;c.push(a);
	            });a--;
	          }k.length && b.push(k);return b;
	        }(c);
	      }var u = [],
	          v = V(a);return function (n, P, t) {
	        function F(a) {
	          a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");var b = [];s(a, function (a) {
	            var c = a.getAttribute("ng-animate-ref");c && c.length && b.push(a);
	          });return b;
	        }function T(a) {
	          var b = [],
	              c = {};s(a, function (a, d) {
	            var h = z(a.element),
	                e = 0 <= ["enter", "move"].indexOf(a.event),
	                h = a.structural ? F(h) : [];if (h.length) {
	              var k = e ? "to" : "from";s(h, function (a) {
	                var b = a.getAttribute("ng-animate-ref");c[b] = c[b] || {};c[b][k] = { animationID: d, element: G(a) };
	              });
	            } else b.push(a);
	          });var d = {},
	              e = {};s(c, function (c, k) {
	            var r = c.from,
	                p = c.to;if (r && p) {
	              var A = a[r.animationID],
	                  g = a[p.animationID],
	                  B = r.animationID.toString();if (!e[B]) {
	                var n = e[B] = { structural: !0, beforeStart: function beforeStart() {
	                    A.beforeStart();
	                    g.beforeStart();
	                  }, close: function close() {
	                    A.close();g.close();
	                  }, classes: J(A.classes, g.classes), from: A, to: g, anchors: [] };n.classes.length ? b.push(n) : (b.push(A), b.push(g));
	              }e[B].anchors.push({ out: r.element, "in": p.element });
	            } else r = r ? r.animationID : p.animationID, p = r.toString(), d[p] || (d[p] = !0, b.push(a[r]));
	          });return b;
	        }function J(a, b) {
	          a = a.split(" ");b = b.split(" ");for (var c = [], d = 0; d < a.length; d++) {
	            var e = a[d];if ("ng-" !== e.substring(0, 3)) for (var r = 0; r < b.length; r++) {
	              if (e === b[r]) {
	                c.push(e);break;
	              }
	            }
	          }return c.join(" ");
	        }function y(a) {
	          for (var c = b.length - 1; 0 <= c; c--) {
	            var d = e.get(b[c])(a);if (d) return d;
	          }
	        }function r(a, b) {
	          function c(a) {
	            (a = a.data("$$animationRunner")) && a.setHost(b);
	          }a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element);
	        }function p() {
	          var a = n.data("$$animationRunner");!a || "leave" === P && t.$$domOperationFired || a.end();
	        }function K(b) {
	          n.off("$destroy", p);n.removeData("$$animationRunner");v(n, t);ha(n, t);t.domOperation();L && a.removeClass(n, L);n.removeClass("ng-animate");k.complete(!b);
	        }t = oa(t);var ka = 0 <= ["enter", "move", "leave"].indexOf(P),
	            k = new l({ end: function end() {
	            K();
	          }, cancel: function cancel() {
	            K(!0);
	          } });if (!b.length) return K(), k;n.data("$$animationRunner", k);var M = Ba(n.attr("class"), Ba(t.addClass, t.removeClass)),
	            L = t.tempClasses;L && (M += " " + L, t.tempClasses = null);var A;ka && (A = "ng-" + P + "-prepare", a.addClass(n, A));u.push({ element: n, classes: M, event: P, structural: ka, options: t, beforeStart: function beforeStart() {
	            n.addClass("ng-animate");L && a.addClass(n, L);A && (a.removeClass(n, A), A = null);
	          }, close: K });n.on("$destroy", p);if (1 < u.length) return k;d.$$postDigest(function () {
	          var a = [];s(u, function (b) {
	            b.element.data("$$animationRunner") ? a.push(b) : b.close();
	          });u.length = 0;var b = T(a),
	              c = [];s(b, function (a) {
	            c.push({ domNode: z(a.from ? a.from.element : a.element), fn: function fn() {
	                a.beforeStart();var b,
	                    c = a.close;if ((a.anchors ? a.from.element || a.to.element : a.element).data("$$animationRunner")) {
	                  var d = y(a);d && (b = d.start);
	                }b ? (b = b(), b.done(function (a) {
	                  c(!a);
	                }), r(a, b)) : c();
	              } });
	          });H(g(c));
	        });return k;
	      };
	    }];
	  }]).provider("$animateCss", ["$animateProvider", function (a) {
	    var b = Ha(),
	        c = Ha();this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, e, l, n, H, g, u, v) {
	      function C(a, b) {
	        var c = a.parentNode;return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++J)) + "-" + a.getAttribute("class") + "-" + b;
	      }function P(r, p, g, n) {
	        var k;0 < b.count(g) && (k = c.get(g), k || (p = Y(p, "-stagger"), e.addClass(r, p), k = Fa(a, r, n), k.animationDuration = Math.max(k.animationDuration, 0), k.transitionDuration = Math.max(k.transitionDuration, 0), e.removeClass(r, p), c.put(g, k)));return k || {};
	      }function t(a) {
	        y.push(a);
	        u.waitUntilQuiet(function () {
	          b.flush();c.flush();for (var a = H(), d = 0; d < y.length; d++) {
	            y[d](a);
	          }y.length = 0;
	        });
	      }function F(c, e, g) {
	        e = b.get(g);e || (e = Fa(a, c, Ua), "infinite" === e.animationIterationCount && (e.animationIterationCount = 1));b.put(g, e);c = e;g = c.animationDelay;e = c.transitionDelay;c.maxDelay = g && e ? Math.max(g, e) : g || e;c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);return c;
	      }var T = V(e),
	          J = 0,
	          y = [];return function (a, c) {
	        function d() {
	          k();
	        }function u() {
	          k(!0);
	        }function k(b) {
	          if (!(x || G && J)) {
	            x = !0;J = !1;f.$$skipPreparationClasses || e.removeClass(a, ga);e.removeClass(a, ea);ta(h, !1);pa(h, !1);s(y, function (a) {
	              h.style[a[0]] = "";
	            });T(a, f);ha(a, f);Object.keys(B).length && s(B, function (a, b) {
	              a ? h.style.setProperty(b, a) : h.style.removeProperty(b);
	            });if (f.onDone) f.onDone();fa && fa.length && a.off(fa.join(" "), A);var c = a.data("$$animateCss");c && (n.cancel(c[0].timer), a.removeData("$$animateCss"));I && I.complete(!b);
	          }
	        }function M(a) {
	          q.blockTransition && pa(h, a);q.blockKeyframeAnimation && ta(h, !!a);
	        }function L() {
	          I = new l({ end: d, cancel: u });t(Q);k();return { $$willAnimate: !1, start: function start() {
	              return I;
	            }, end: d };
	        }function A(a) {
	          a.stopPropagation();var b = a.originalEvent || a;a = b.$manualTimeStamp || Date.now();b = parseFloat(b.elapsedTime.toFixed(3));Math.max(a - W, 0) >= R && b >= m && (G = !0, k());
	        }function N() {
	          function b() {
	            if (!x) {
	              M(!1);s(y, function (a) {
	                h.style[a[0]] = a[1];
	              });T(a, f);e.addClass(a, ea);if (q.recalculateTimingStyles) {
	                na = h.className + " " + ga;ia = C(h, na);D = F(h, na, ia);aa = D.maxDelay;O = Math.max(aa, 0);m = D.maxDuration;if (0 === m) {
	                  k();return;
	                }q.hasTransitions = 0 < D.transitionDuration;q.hasAnimations = 0 < D.animationDuration;
	              }q.applyAnimationDelay && (aa = "boolean" !== typeof f.delay && ua(f.delay) ? parseFloat(f.delay) : aa, O = Math.max(aa, 0), D.animationDelay = aa, ba = [qa, aa + "s"], y.push(ba), h.style[ba[0]] = ba[1]);R = 1E3 * O;V = 1E3 * m;if (f.easing) {
	                var d,
	                    g = f.easing;q.hasTransitions && (d = S + "TimingFunction", y.push([d, g]), h.style[d] = g);q.hasAnimations && (d = $ + "TimingFunction", y.push([d, g]), h.style[d] = g);
	              }D.transitionDuration && fa.push(xa);D.animationDuration && fa.push(ya);W = Date.now();var p = R + 1.5 * V;d = W + p;var g = a.data("$$animateCss") || [],
	                  N = !0;if (g.length) {
	                var l = g[0];(N = d > l.expectedEndTime) ? n.cancel(l.timer) : g.push(k);
	              }N && (p = n(c, p, !1), g[0] = { timer: p, expectedEndTime: d }, g.push(k), a.data("$$animateCss", g));if (fa.length) a.on(fa.join(" "), A);f.to && (f.cleanupStyles && Ia(B, h, Object.keys(f.to)), Da(a, f));
	            }
	          }function c() {
	            var b = a.data("$$animateCss");if (b) {
	              for (var d = 1; d < b.length; d++) {
	                b[d]();
	              }a.removeData("$$animateCss");
	            }
	          }if (!x) if (h.parentNode) {
	            var d = function d(a) {
	              if (G) J && a && (J = !1, k());else if (J = !a, D.animationDuration) if (a = ta(h, J), J) y.push(a);else {
	                var b = y,
	                    c = b.indexOf(a);0 <= a && b.splice(c, 1);
	              }
	            },
	                g = 0 < da && (D.transitionDuration && 0 === X.transitionDuration || D.animationDuration && 0 === X.animationDuration) && Math.max(X.animationDelay, X.transitionDelay);g ? n(b, Math.floor(g * da * 1E3), !1) : b();w.resume = function () {
	              d(!0);
	            };w.pause = function () {
	              d(!1);
	            };
	          } else k();
	        }var f = c || {};f.$$prepared || (f = oa(Ja(f)));var B = {},
	            h = z(a);if (!h || !h.parentNode || !v.enabled()) return L();var y = [],
	            H = a.attr("class"),
	            E = Na(f),
	            x,
	            J,
	            G,
	            I,
	            w,
	            O,
	            R,
	            m,
	            V,
	            W,
	            fa = [];if (0 === f.duration || !g.animations && !g.transitions) return L();var ja = f.event && ca(f.event) ? f.event.join(" ") : f.event,
	            Z = "",
	            U = "";ja && f.structural ? Z = Y(ja, "ng-", !0) : ja && (Z = ja);f.addClass && (U += Y(f.addClass, "-add"));f.removeClass && (U.length && (U += " "), U += Y(f.removeClass, "-remove"));f.applyClassesEarly && U.length && T(a, f);var ga = [Z, U].join(" ").trim(),
	            na = H + " " + ga,
	            ea = Y(ga, "-active"),
	            H = E.to && 0 < Object.keys(E.to).length;if (!(0 < (f.keyframeStyle || "").length || H || ga)) return L();var ia, X;0 < f.stagger ? (E = parseFloat(f.stagger), X = { transitionDelay: E, animationDelay: E,
	          transitionDuration: 0, animationDuration: 0 }) : (ia = C(h, na), X = P(h, ga, ia, Va));f.$$skipPreparationClasses || e.addClass(a, ga);f.transitionStyle && (E = [S, f.transitionStyle], la(h, E), y.push(E));0 <= f.duration && (E = 0 < h.style[S].length, E = Ga(f.duration, E), la(h, E), y.push(E));f.keyframeStyle && (E = [$, f.keyframeStyle], la(h, E), y.push(E));var da = X ? 0 <= f.staggerIndex ? f.staggerIndex : b.count(ia) : 0;(ja = 0 === da) && !f.skipBlocking && pa(h, 9999);var D = F(h, na, ia),
	            aa = D.maxDelay;O = Math.max(aa, 0);m = D.maxDuration;var q = {};q.hasTransitions = 0 < D.transitionDuration;q.hasAnimations = 0 < D.animationDuration;q.hasTransitionAll = q.hasTransitions && "all" == D.transitionProperty;q.applyTransitionDuration = H && (q.hasTransitions && !q.hasTransitionAll || q.hasAnimations && !q.hasTransitions);q.applyAnimationDuration = f.duration && q.hasAnimations;q.applyTransitionDelay = ua(f.delay) && (q.applyTransitionDuration || q.hasTransitions);q.applyAnimationDelay = ua(f.delay) && q.hasAnimations;q.recalculateTimingStyles = 0 < U.length;if (q.applyTransitionDuration || q.applyAnimationDuration) m = f.duration ? parseFloat(f.duration) : m, q.applyTransitionDuration && (q.hasTransitions = !0, D.transitionDuration = m, E = 0 < h.style[S + "Property"].length, y.push(Ga(m, E))), q.applyAnimationDuration && (q.hasAnimations = !0, D.animationDuration = m, y.push([za, m + "s"]));if (0 === m && !q.recalculateTimingStyles) return L();if (null != f.delay) {
	          var ba;"boolean" !== typeof f.delay && (ba = parseFloat(f.delay), O = Math.max(ba, 0));q.applyTransitionDelay && y.push([ma, ba + "s"]);q.applyAnimationDelay && y.push([qa, ba + "s"]);
	        }null == f.duration && 0 < D.transitionDuration && (q.recalculateTimingStyles = q.recalculateTimingStyles || ja);R = 1E3 * O;V = 1E3 * m;f.skipBlocking || (q.blockTransition = 0 < D.transitionDuration, q.blockKeyframeAnimation = 0 < D.animationDuration && 0 < X.animationDelay && 0 === X.animationDuration);f.from && (f.cleanupStyles && Ia(B, h, Object.keys(f.from)), Ca(a, f));q.blockTransition || q.blockKeyframeAnimation ? M(m) : f.skipBlocking || pa(h, !1);return { $$willAnimate: !0, end: d, start: function start() {
	            if (!x) return w = { end: d, cancel: u, resume: null, pause: null }, I = new l(w), t(N), I;
	          } };
	      };
	    }];
	  }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
	    a.drivers.push("$$animateCssDriver");this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, e, l, n, H) {
	      function g(a) {
	        return a.replace(/\bng-\S+\b/g, "");
	      }function u(a, b) {
	        O(a) && (a = a.split(" "));O(b) && (b = b.split(" "));return a.filter(function (a) {
	          return -1 === b.indexOf(a);
	        }).join(" ");
	      }function v(c, e, n) {
	        function l(a) {
	          var b = {},
	              c = z(a).getBoundingClientRect();s(["width", "height", "top", "left"], function (a) {
	            var d = c[a];
	            switch (a) {case "top":
	                d += t.scrollTop;break;case "left":
	                d += t.scrollLeft;}b[a] = Math.floor(d) + "px";
	          });return b;
	        }function p() {
	          var c = g(n.attr("class") || ""),
	              d = u(c, k),
	              c = u(k, c),
	              d = a(v, { to: l(n), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: !0 });return d.$$willAnimate ? d : null;
	        }function H() {
	          v.remove();e.removeClass("ng-animate-shim");n.removeClass("ng-animate-shim");
	        }var v = G(z(e).cloneNode(!0)),
	            k = g(v.attr("class") || "");e.addClass("ng-animate-shim");n.addClass("ng-animate-shim");v.addClass("ng-anchor");
	        F.append(v);var M;c = function () {
	          var c = a(v, { addClass: "ng-anchor-out", delay: !0, from: l(e) });return c.$$willAnimate ? c : null;
	        }();if (!c && (M = p(), !M)) return H();var L = c || M;return { start: function start() {
	            function a() {
	              c && c.end();
	            }var b,
	                c = L.start();c.done(function () {
	              c = null;if (!M && (M = p())) return c = M.start(), c.done(function () {
	                c = null;H();b.complete();
	              }), c;H();b.complete();
	            });return b = new d({ end: a, cancel: a });
	          } };
	      }function C(a, b, c, e) {
	        var g = P(a, Q),
	            n = P(b, Q),
	            l = [];s(e, function (a) {
	          (a = v(c, a.out, a["in"])) && l.push(a);
	        });if (g || n || 0 !== l.length) return { start: function start() {
	            function a() {
	              s(b, function (a) {
	                a.end();
	              });
	            }var b = [];g && b.push(g.start());n && b.push(n.start());s(l, function (a) {
	              b.push(a.start());
	            });var c = new d({ end: a, cancel: a });d.all(b, function (a) {
	              c.complete(a);
	            });return c;
	          } };
	      }function P(c) {
	        var d = c.element,
	            e = c.options || {};c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation));e.preparationClasses && (e.event = Z(e.event, e.preparationClasses));c = a(d, e);return c.$$willAnimate ? c : null;
	      }if (!l.animations && !l.transitions) return Q;var t = H[0].body;
	      c = z(e);var F = G(c.parentNode && 11 === c.parentNode.nodeType || t.contains(c) ? c : t);V(n);return function (a) {
	        return a.from && a.to ? C(a.from, a.to, a.classes, a.anchors) : P(a);
	      };
	    }];
	  }]).provider("$$animateJs", ["$animateProvider", function (a) {
	    this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
	      function e(c) {
	        c = ca(c) ? c : c.split(" ");for (var d = [], e = {}, l = 0; l < c.length; l++) {
	          var v = c[l],
	              s = a.$$registeredAnimations[v];s && !e[v] && (d.push(b.get(s)), e[v] = !0);
	        }return d;
	      }var l = V(d);return function (a, b, d, u) {
	        function v() {
	          u.domOperation();
	          l(a, u);
	        }function C(a, b, d, e, f) {
	          switch (d) {case "animate":
	              b = [b, e.from, e.to, f];break;case "setClass":
	              b = [b, G, J, f];break;case "addClass":
	              b = [b, G, f];break;case "removeClass":
	              b = [b, J, f];break;default:
	              b = [b, f];}b.push(e);if (a = a.apply(a, b)) if (Ka(a.start) && (a = a.start()), a instanceof c) a.done(f);else if (Ka(a)) return a;return Q;
	        }function z(a, b, d, e, f) {
	          var g = [];s(e, function (e) {
	            var k = e[f];k && g.push(function () {
	              var e,
	                  f,
	                  g = !1,
	                  h = function h(a) {
	                g || (g = !0, (f || Q)(a), e.complete(!a));
	              };e = new c({ end: function end() {
	                  h();
	                }, cancel: function cancel() {
	                  h(!0);
	                } });
	              f = C(k, a, b, d, function (a) {
	                h(!1 === a);
	              });return e;
	            });
	          });return g;
	        }function t(a, b, d, e, f) {
	          var g = z(a, b, d, e, f);if (0 === g.length) {
	            var h, k;"beforeSetClass" === f ? (h = z(a, "removeClass", d, e, "beforeRemoveClass"), k = z(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = z(a, "removeClass", d, e, "removeClass"), k = z(a, "addClass", d, e, "addClass"));h && (g = g.concat(h));k && (g = g.concat(k));
	          }if (0 !== g.length) return function (a) {
	            var b = [];g.length && s(g, function (a) {
	              b.push(a());
	            });b.length ? c.all(b, a) : a();return function (a) {
	              s(b, function (b) {
	                a ? b.cancel() : b.end();
	              });
	            };
	          };
	        }var F = !1;3 === arguments.length && va(d) && (u = d, d = null);u = oa(u);d || (d = a.attr("class") || "", u.addClass && (d += " " + u.addClass), u.removeClass && (d += " " + u.removeClass));var G = u.addClass,
	            J = u.removeClass,
	            y = e(d),
	            r,
	            p;if (y.length) {
	          var K, I;"leave" == b ? (I = "leave", K = "afterLeave") : (I = "before" + b.charAt(0).toUpperCase() + b.substr(1), K = b);"enter" !== b && "move" !== b && (r = t(a, b, u, y, I));p = t(a, b, u, y, K);
	        }if (r || p) {
	          var k;return { $$willAnimate: !0, end: function end() {
	              k ? k.end() : (F = !0, v(), ha(a, u), k = new c(), k.complete(!0));return k;
	            },
	            start: function start() {
	              function b(c) {
	                F = !0;v();ha(a, u);k.complete(c);
	              }if (k) return k;k = new c();var d,
	                  e = [];r && e.push(function (a) {
	                d = r(a);
	              });e.length ? e.push(function (a) {
	                v();a(!0);
	              }) : v();p && e.push(function (a) {
	                d = p(a);
	              });k.setHost({ end: function end() {
	                  F || ((d || Q)(void 0), b(void 0));
	                }, cancel: function cancel() {
	                  F || ((d || Q)(!0), b(!0));
	                } });c.chain(e, b);return k;
	            } };
	        }
	      };
	    }];
	  }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
	    a.drivers.push("$$animateJsDriver");this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
	      function d(c) {
	        return a(c.element, c.event, c.classes, c.options);
	      }return function (a) {
	        if (a.from && a.to) {
	          var b = d(a.from),
	              n = d(a.to);if (b || n) return { start: function start() {
	              function a() {
	                return function () {
	                  s(d, function (a) {
	                    a.end();
	                  });
	                };
	              }var d = [];b && d.push(b.start());n && d.push(n.start());c.all(d, function (a) {
	                e.complete(a);
	              });var e = new c({ end: a(), cancel: a() });return e;
	            } };
	        } else return d(a);
	      };
	    }];
	  }]);
	})(window, window.angular);
	//# sourceMappingURL=angular-animate.min.js.map

/***/ },

/***/ 29:
/***/ function(module, exports) {

	"use strict";

	/*
	 AngularJS v1.5.8
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function (t, p) {
	  'use strict';
	  var b = "BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),
	      l = function l(a, c) {
	    if (-1 !== c.indexOf(a[0].nodeName)) return !0;
	  };p.module("ngAria", ["ng"]).provider("$aria", function () {
	    function a(a, b, m, h) {
	      return function (d, f, e) {
	        var q = e.$normalize(b);!c[q] || l(f, m) || e[q] || d.$watch(e[a], function (a) {
	          a = h ? !a : !!a;f.attr(b, a);
	        });
	      };
	    }var c = { ariaHidden: !0, ariaChecked: !0, ariaReadonly: !0, ariaDisabled: !0, ariaRequired: !0, ariaInvalid: !0, ariaValue: !0, tabindex: !0, bindKeypress: !0, bindRoleForClick: !0 };
	    this.config = function (a) {
	      c = p.extend(c, a);
	    };this.$get = function () {
	      return { config: function config(a) {
	          return c[a];
	        }, $$watchExpr: a };
	    };
	  }).directive("ngShow", ["$aria", function (a) {
	    return a.$$watchExpr("ngShow", "aria-hidden", [], !0);
	  }]).directive("ngHide", ["$aria", function (a) {
	    return a.$$watchExpr("ngHide", "aria-hidden", [], !1);
	  }]).directive("ngValue", ["$aria", function (a) {
	    return a.$$watchExpr("ngValue", "aria-checked", b, !1);
	  }]).directive("ngChecked", ["$aria", function (a) {
	    return a.$$watchExpr("ngChecked", "aria-checked", b, !1);
	  }]).directive("ngReadonly", ["$aria", function (a) {
	    return a.$$watchExpr("ngReadonly", "aria-readonly", b, !1);
	  }]).directive("ngRequired", ["$aria", function (a) {
	    return a.$$watchExpr("ngRequired", "aria-required", b, !1);
	  }]).directive("ngModel", ["$aria", function (a) {
	    function c(c, h, d, f) {
	      return a.config(h) && !d.attr(c) && (f || !l(d, b));
	    }function g(a, c) {
	      return !c.attr("role") && c.attr("type") === a && "INPUT" !== c[0].nodeName;
	    }function k(a, c) {
	      var d = a.type,
	          f = a.role;return "checkbox" === (d || f) || "menuitemcheckbox" === f ? "checkbox" : "radio" === (d || f) || "menuitemradio" === f ? "radio" : "range" === d || "progressbar" === f || "slider" === f ? "range" : "";
	    }return { restrict: "A", require: "ngModel", priority: 200, compile: function compile(b, h) {
	        var d = k(h, b);return { pre: function pre(a, e, c, b) {
	            "checkbox" === d && (b.$isEmpty = function (a) {
	              return !1 === a;
	            });
	          }, post: function post(f, e, b, n) {
	            function h() {
	              return n.$modelValue;
	            }function k(a) {
	              e.attr("aria-checked", b.value == n.$viewValue);
	            }function l() {
	              e.attr("aria-checked", !n.$isEmpty(n.$viewValue));
	            }var m = c("tabindex", "tabindex", e, !1);switch (d) {case "radio":case "checkbox":
	                g(d, e) && e.attr("role", d);c("aria-checked", "ariaChecked", e, !1) && f.$watch(h, "radio" === d ? k : l);m && e.attr("tabindex", 0);break;case "range":
	                g(d, e) && e.attr("role", "slider");if (a.config("ariaValue")) {
	                  var p = !e.attr("aria-valuemin") && (b.hasOwnProperty("min") || b.hasOwnProperty("ngMin")),
	                      r = !e.attr("aria-valuemax") && (b.hasOwnProperty("max") || b.hasOwnProperty("ngMax")),
	                      s = !e.attr("aria-valuenow");p && b.$observe("min", function (a) {
	                    e.attr("aria-valuemin", a);
	                  });r && b.$observe("max", function (a) {
	                    e.attr("aria-valuemax", a);
	                  });s && f.$watch(h, function (a) {
	                    e.attr("aria-valuenow", a);
	                  });
	                }m && e.attr("tabindex", 0);}!b.hasOwnProperty("ngRequired") && n.$validators.required && c("aria-required", "ariaRequired", e, !1) && b.$observe("required", function () {
	              e.attr("aria-required", !!b.required);
	            });c("aria-invalid", "ariaInvalid", e, !0) && f.$watch(function () {
	              return n.$invalid;
	            }, function (a) {
	              e.attr("aria-invalid", !!a);
	            });
	          } };
	      } };
	  }]).directive("ngDisabled", ["$aria", function (a) {
	    return a.$$watchExpr("ngDisabled", "aria-disabled", b, !1);
	  }]).directive("ngMessages", function () {
	    return { restrict: "A", require: "?ngMessages",
	      link: function link(a, b, g, k) {
	        b.attr("aria-live") || b.attr("aria-live", "assertive");
	      } };
	  }).directive("ngClick", ["$aria", "$parse", function (a, c) {
	    return { restrict: "A", compile: function compile(g, k) {
	        var m = c(k.ngClick, null, !0);return function (c, d, f) {
	          if (!l(d, b) && (a.config("bindRoleForClick") && !d.attr("role") && d.attr("role", "button"), a.config("tabindex") && !d.attr("tabindex") && d.attr("tabindex", 0), a.config("bindKeypress") && !f.ngKeypress)) d.on("keypress", function (a) {
	            function b() {
	              m(c, { $event: a });
	            }var d = a.which || a.keyCode;32 !== d && 13 !== d || c.$apply(b);
	          });
	        };
	      } };
	  }]).directive("ngDblclick", ["$aria", function (a) {
	    return function (c, g, k) {
	      !a.config("tabindex") || g.attr("tabindex") || l(g, b) || g.attr("tabindex", 0);
	    };
	  }]);
	})(window, window.angular);
	//# sourceMappingURL=angular-aria.min.js.map

/***/ },

/***/ 30:
/***/ function(module, exports) {

	"use strict";

	/*
	 AngularJS v1.5.8
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function (y, l) {
	  'use strict';
	  function w() {
	    return ["$animate", function (t) {
	      return { restrict: "AE", transclude: "element", priority: 1, terminal: !0, require: "^^ngMessages", link: function link(u, n, a, c, f) {
	          var e = n[0],
	              d,
	              r = a.ngMessage || a.when;a = a.ngMessageExp || a.whenExp;var k = function k(a) {
	            d = a ? p(a) ? a : a.split(/[\s,]+/) : null;c.reRender();
	          };a ? (k(u.$eval(a)), u.$watchCollection(a, k)) : k(r);var g, s;c.register(e, s = { test: function test(a) {
	              var m = d;a = m ? p(m) ? 0 <= m.indexOf(a) : m.hasOwnProperty(a) : void 0;return a;
	            }, attach: function attach() {
	              g || f(function (a, m) {
	                t.enter(a, null, n);g = a;var d = g.$$attachId = c.getAttachId();g.on("$destroy", function () {
	                  g && g.$$attachId === d && (c.deregister(e), s.detach());m.$destroy();
	                });
	              });
	            }, detach: function detach() {
	              if (g) {
	                var a = g;g = null;t.leave(a);
	              }
	            } });
	        } };
	    }];
	  }var v, p, q, x;l.module("ngMessages", [], function () {
	    v = l.forEach;p = l.isArray;q = l.isString;x = l.element;
	  }).directive("ngMessages", ["$animate", function (t) {
	    function u(a, c) {
	      return q(c) && 0 === c.length || n(a.$eval(c));
	    }function n(a) {
	      return q(a) ? a.length : !!a;
	    }return { require: "ngMessages", restrict: "AE", controller: ["$element", "$scope", "$attrs", function (a, c, f) {
	        function e(a, c) {
	          for (var b = c, d = []; b && b !== a;) {
	            var h = b.$$ngMessageNode;if (h && h.length) return g[h];b.childNodes.length && -1 === d.indexOf(b) ? (d.push(b), b = b.childNodes[b.childNodes.length - 1]) : b.previousSibling ? b = b.previousSibling : (b = b.parentNode, d.push(b));
	          }
	        }var d = this,
	            r = 0,
	            k = 0;this.getAttachId = function () {
	          return k++;
	        };var g = this.messages = {},
	            s,
	            l;this.render = function (m) {
	          m = m || {};s = !1;l = m;for (var g = u(c, f.ngMessagesMultiple) || u(c, f.multiple), b = [], e = {}, h = d.head, r = !1, k = 0; null != h;) {
	            k++;
	            var q = h.message,
	                p = !1;r || v(m, function (a, b) {
	              !p && n(a) && q.test(b) && !e[b] && (p = e[b] = !0, q.attach());
	            });p ? r = !g : b.push(q);h = h.next;
	          }v(b, function (a) {
	            a.detach();
	          });b.length !== k ? t.setClass(a, "ng-active", "ng-inactive") : t.setClass(a, "ng-inactive", "ng-active");
	        };c.$watchCollection(f.ngMessages || f["for"], d.render);a.on("$destroy", function () {
	          v(g, function (a) {
	            a.message.detach();
	          });
	        });this.reRender = function () {
	          s || (s = !0, c.$evalAsync(function () {
	            s && l && d.render(l);
	          }));
	        };this.register = function (c, f) {
	          var b = r.toString();g[b] = { message: f };
	          var k = a[0],
	              h = g[b];d.head ? (k = e(k, c)) ? (h.next = k.next, k.next = h) : (h.next = d.head, d.head = h) : d.head = h;c.$$ngMessageNode = b;r++;d.reRender();
	        };this.deregister = function (c) {
	          var f = c.$$ngMessageNode;delete c.$$ngMessageNode;var b = g[f];(c = e(a[0], c)) ? c.next = b.next : d.head = b.next;delete g[f];d.reRender();
	        };
	      }] };
	  }]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile", function (l, p, n) {
	    function a(a, f) {
	      var e = n.$$createComment ? n.$$createComment("ngMessagesInclude", f) : p[0].createComment(" ngMessagesInclude: " + f + " "),
	          e = x(e);a.after(e);a.remove();
	    }return { restrict: "AE", require: "^^ngMessages", link: function link(c, f, e) {
	        var d = e.ngMessagesInclude || e.src;l(d).then(function (e) {
	          c.$$destroyed || (q(e) && !e.trim() ? a(f, d) : n(e)(c, function (c) {
	            f.after(c);a(f, d);
	          }));
	        });
	      } };
	  }]).directive("ngMessage", w()).directive("ngMessageExp", w());
	})(window, window.angular);
	//# sourceMappingURL=angular-messages.min.js.map

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var duScrollDefaultEasing = function duScrollDefaultEasing(e) {
	  "use strict";
	  return .5 > e ? Math.pow(2 * e, 2) / 2 : 1 - Math.pow(2 * (1 - e), 2) / 2;
	},
	    duScroll = angular.module("duScroll", ["duScroll.scrollspy", "duScroll.smoothScroll", "duScroll.scrollContainer", "duScroll.spyContext", "duScroll.scrollHelpers"]).value("duScrollDuration", 350).value("duScrollSpyWait", 100).value("duScrollGreedy", !1).value("duScrollOffset", 0).value("duScrollEasing", duScrollDefaultEasing).value("duScrollCancelOnEvents", "scroll mousedown mousewheel touchmove keydown").value("duScrollBottomSpy", !1).value("duScrollActiveClass", "active");"undefined" != typeof module && module && module.exports && (module.exports = duScroll), angular.module("duScroll.scrollHelpers", ["duScroll.requestAnimation"]).run(["$window", "$q", "cancelAnimation", "requestAnimation", "duScrollEasing", "duScrollDuration", "duScrollOffset", "duScrollCancelOnEvents", function (e, t, n, r, o, l, u, c) {
	  "use strict";
	  var i = {},
	      a = function a(e) {
	    return "undefined" != typeof HTMLDocument && e instanceof HTMLDocument || e.nodeType && e.nodeType === e.DOCUMENT_NODE;
	  },
	      s = function s(e) {
	    return "undefined" != typeof HTMLElement && e instanceof HTMLElement || e.nodeType && e.nodeType === e.ELEMENT_NODE;
	  },
	      d = function d(e) {
	    return s(e) || a(e) ? e : e[0];
	  };i.duScrollTo = function (t, n, r, o) {
	    var l;if (angular.isElement(t) ? l = this.duScrollToElement : angular.isDefined(r) && (l = this.duScrollToAnimated), l) return l.apply(this, arguments);var u = d(this);return a(u) ? e.scrollTo(t, n) : (u.scrollLeft = t, void (u.scrollTop = n));
	  };var f, m;i.duScrollToAnimated = function (e, l, u, i) {
	    u && !i && (i = o);var a = this.duScrollLeft(),
	        s = this.duScrollTop(),
	        d = Math.round(e - a),
	        p = Math.round(l - s),
	        S = null,
	        g = 0,
	        v = this,
	        h = function h(e) {
	      (!e || g && e.which > 0) && (c && v.unbind(c, h), n(f), m.reject(), f = null);
	    };if (f && h(), m = t.defer(), 0 === u || !d && !p) return 0 === u && v.duScrollTo(e, l), m.resolve(), m.promise;var y = function y(e) {
	      null === S && (S = e), g = e - S;var t = g >= u ? 1 : i(g / u);v.scrollTo(a + Math.ceil(d * t), s + Math.ceil(p * t)), 1 > t ? f = r(y) : (c && v.unbind(c, h), f = null, m.resolve());
	    };return v.duScrollTo(a, s), c && v.bind(c, h), f = r(y), m.promise;
	  }, i.duScrollToElement = function (e, t, n, r) {
	    var o = d(this);(!angular.isNumber(t) || isNaN(t)) && (t = u);var l = this.duScrollTop() + d(e).getBoundingClientRect().top - t;return s(o) && (l -= o.getBoundingClientRect().top), this.duScrollTo(0, l, n, r);
	  }, i.duScrollLeft = function (t, n, r) {
	    if (angular.isNumber(t)) return this.duScrollTo(t, this.duScrollTop(), n, r);var o = d(this);return a(o) ? e.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft : o.scrollLeft;
	  }, i.duScrollTop = function (t, n, r) {
	    if (angular.isNumber(t)) return this.duScrollTo(this.duScrollLeft(), t, n, r);var o = d(this);return a(o) ? e.scrollY || document.documentElement.scrollTop || document.body.scrollTop : o.scrollTop;
	  }, i.duScrollToElementAnimated = function (e, t, n, r) {
	    return this.duScrollToElement(e, t, n || l, r);
	  }, i.duScrollTopAnimated = function (e, t, n) {
	    return this.duScrollTop(e, t || l, n);
	  }, i.duScrollLeftAnimated = function (e, t, n) {
	    return this.duScrollLeft(e, t || l, n);
	  }, angular.forEach(i, function (e, t) {
	    angular.element.prototype[t] = e;var n = t.replace(/^duScroll/, "scroll");angular.isUndefined(angular.element.prototype[n]) && (angular.element.prototype[n] = e);
	  });
	}]), angular.module("duScroll.polyfill", []).factory("polyfill", ["$window", function (e) {
	  "use strict";
	  var t = ["webkit", "moz", "o", "ms"];return function (n, r) {
	    if (e[n]) return e[n];for (var o, l = n.substr(0, 1).toUpperCase() + n.substr(1), u = 0; u < t.length; u++) {
	      if (o = t[u] + l, e[o]) return e[o];
	    }return r;
	  };
	}]), angular.module("duScroll.requestAnimation", ["duScroll.polyfill"]).factory("requestAnimation", ["polyfill", "$timeout", function (e, t) {
	  "use strict";
	  var n = 0,
	      r = function r(e, _r) {
	    var o = new Date().getTime(),
	        l = Math.max(0, 16 - (o - n)),
	        u = t(function () {
	      e(o + l);
	    }, l);return n = o + l, u;
	  };return e("requestAnimationFrame", r);
	}]).factory("cancelAnimation", ["polyfill", "$timeout", function (e, t) {
	  "use strict";
	  var n = function n(e) {
	    t.cancel(e);
	  };return e("cancelAnimationFrame", n);
	}]), angular.module("duScroll.spyAPI", ["duScroll.scrollContainerAPI"]).factory("spyAPI", ["$rootScope", "$timeout", "$window", "$document", "scrollContainerAPI", "duScrollGreedy", "duScrollSpyWait", "duScrollBottomSpy", "duScrollActiveClass", function (e, t, n, r, o, l, u, c, i) {
	  "use strict";
	  var a = function a(o) {
	    var a = !1,
	        s = !1,
	        d = function d() {
	      s = !1;var t,
	          u = o.container,
	          a = u[0],
	          d = 0;if ("undefined" != typeof HTMLElement && a instanceof HTMLElement || a.nodeType && a.nodeType === a.ELEMENT_NODE) d = a.getBoundingClientRect().top, t = Math.round(a.scrollTop + a.clientHeight) >= a.scrollHeight;else {
	        var f = r[0].body.scrollHeight || r[0].documentElement.scrollHeight;t = Math.round(n.pageYOffset + n.innerHeight) >= f;
	      }var m,
	          p,
	          S,
	          g,
	          v,
	          h,
	          y = c && t ? "bottom" : "top";for (g = o.spies, p = o.currentlyActive, S = void 0, m = 0; m < g.length; m++) {
	        v = g[m], h = v.getTargetPosition(), h && (c && t || h.top + v.offset - d < 20 && (l || -1 * h.top + d) < h.height) && (!S || S[y] < h[y]) && (S = { spy: v }, S[y] = h[y]);
	      }S && (S = S.spy), p === S || l && !S || (p && (p.$element.removeClass(i), e.$broadcast("duScrollspy:becameInactive", p.$element, angular.element(p.getTargetElement()))), S && (S.$element.addClass(i), e.$broadcast("duScrollspy:becameActive", S.$element, angular.element(S.getTargetElement()))), o.currentlyActive = S);
	    };return u ? function () {
	      a ? s = !0 : (d(), a = t(function () {
	        a = !1, s && d();
	      }, u, !1));
	    } : d;
	  },
	      s = {},
	      d = function d(e) {
	    var t = e.$id,
	        n = { spies: [] };return n.handler = a(n), s[t] = n, e.$on("$destroy", function () {
	      f(e);
	    }), t;
	  },
	      f = function f(e) {
	    var t = e.$id,
	        n = s[t],
	        r = n.container;r && r.off("scroll", n.handler), delete s[t];
	  },
	      m = d(e),
	      p = function p(e) {
	    return s[e.$id] ? s[e.$id] : e.$parent ? p(e.$parent) : s[m];
	  },
	      S = function S(e) {
	    var t,
	        n,
	        r = e.$scope;if (r) return p(r);for (n in s) {
	      if (t = s[n], -1 !== t.spies.indexOf(e)) return t;
	    }
	  },
	      g = function g(e) {
	    for (; e.parentNode;) {
	      if (e = e.parentNode, e === document) return !0;
	    }return !1;
	  },
	      v = function v(e) {
	    var t = S(e);t && (t.spies.push(e), t.container && g(t.container) || (t.container && t.container.off("scroll", t.handler), t.container = o.getContainer(e.$scope), t.container.on("scroll", t.handler).triggerHandler("scroll")));
	  },
	      h = function h(t) {
	    var n = S(t);t === n.currentlyActive && (e.$broadcast("duScrollspy:becameInactive", n.currentlyActive.$element), n.currentlyActive = null);var r = n.spies.indexOf(t);-1 !== r && n.spies.splice(r, 1), t.$element = null;
	  };return { addSpy: v, removeSpy: h, createContext: d, destroyContext: f, getContextForScope: p };
	}]), angular.module("duScroll.scrollContainerAPI", []).factory("scrollContainerAPI", ["$document", function (e) {
	  "use strict";
	  var t = {},
	      n = function n(e, _n) {
	    var r = e.$id;return t[r] = _n, r;
	  },
	      r = function r(e) {
	    return t[e.$id] ? e.$id : e.$parent ? r(e.$parent) : void 0;
	  },
	      o = function o(n) {
	    var o = r(n);return o ? t[o] : e;
	  },
	      l = function l(e) {
	    var n = r(e);n && delete t[n];
	  };return { getContainerId: r, getContainer: o, setContainer: n, removeContainer: l };
	}]), angular.module("duScroll.smoothScroll", ["duScroll.scrollHelpers", "duScroll.scrollContainerAPI"]).directive("duSmoothScroll", ["duScrollDuration", "duScrollOffset", "scrollContainerAPI", function (e, t, n) {
	  "use strict";
	  return { link: function link(r, o, l) {
	      o.on("click", function (o) {
	        if (l.href && -1 !== l.href.indexOf("#") || "" !== l.duSmoothScroll) {
	          var u = l.href ? l.href.replace(/.*(?=#[^\s]+$)/, "").substring(1) : l.duSmoothScroll,
	              c = document.getElementById(u) || document.getElementsByName(u)[0];if (c && c.getBoundingClientRect) {
	            o.stopPropagation && o.stopPropagation(), o.preventDefault && o.preventDefault();var i = l.offset ? parseInt(l.offset, 10) : t,
	                a = l.duration ? parseInt(l.duration, 10) : e,
	                s = n.getContainer(r);s.duScrollToElement(angular.element(c), isNaN(i) ? 0 : i, isNaN(a) ? 0 : a);
	          }
	        }
	      });
	    } };
	}]), angular.module("duScroll.spyContext", ["duScroll.spyAPI"]).directive("duSpyContext", ["spyAPI", function (e) {
	  "use strict";
	  return { restrict: "A", scope: !0, compile: function compile(t, n, r) {
	      return { pre: function pre(t, n, r, o) {
	          e.createContext(t);
	        } };
	    } };
	}]), angular.module("duScroll.scrollContainer", ["duScroll.scrollContainerAPI"]).directive("duScrollContainer", ["scrollContainerAPI", function (e) {
	  "use strict";
	  return { restrict: "A", scope: !0, compile: function compile(t, n, r) {
	      return { pre: function pre(t, n, r, o) {
	          r.$observe("duScrollContainer", function (r) {
	            angular.isString(r) && (r = document.getElementById(r)), r = angular.isElement(r) ? angular.element(r) : n, e.setContainer(t, r), t.$on("$destroy", function () {
	              e.removeContainer(t);
	            });
	          });
	        } };
	    } };
	}]), angular.module("duScroll.scrollspy", ["duScroll.spyAPI"]).directive("duScrollspy", ["spyAPI", "duScrollOffset", "$timeout", "$rootScope", function (e, t, n, r) {
	  "use strict";
	  var o = function o(e, t, n, r) {
	    angular.isElement(e) ? this.target = e : angular.isString(e) && (this.targetId = e), this.$scope = t, this.$element = n, this.offset = r;
	  };return o.prototype.getTargetElement = function () {
	    return !this.target && this.targetId && (this.target = document.getElementById(this.targetId) || document.getElementsByName(this.targetId)[0]), this.target;
	  }, o.prototype.getTargetPosition = function () {
	    var e = this.getTargetElement();return e ? e.getBoundingClientRect() : void 0;
	  }, o.prototype.flushTargetCache = function () {
	    this.targetId && (this.target = void 0);
	  }, { link: function link(l, u, c) {
	      var i,
	          a = c.ngHref || c.href;if (a && -1 !== a.indexOf("#") ? i = a.replace(/.*(?=#[^\s]+$)/, "").substring(1) : c.duScrollspy ? i = c.duScrollspy : c.duSmoothScroll && (i = c.duSmoothScroll), i) {
	        var s = n(function () {
	          var n = new o(i, l, u, -(c.offset ? parseInt(c.offset, 10) : t));e.addSpy(n), l.$on("$locationChangeSuccess", n.flushTargetCache.bind(n));var a = r.$on("$stateChangeSuccess", n.flushTargetCache.bind(n));l.$on("$destroy", function () {
	            e.removeSpy(n), a();
	          });
	        }, 0, !1);l.$on("$destroy", function () {
	          n.cancel(s);
	        });
	      }
	    } };
	}]);
	//# sourceMappingURL=angular-scroll.min.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)(module)))

/***/ },

/***/ 32:
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	!function () {
	  function a(a, b) {
	    var c = a.directive;a.directive = function (a, d) {
	      return b.register(a, d), c.apply(this, arguments);
	    };
	  }function c(a, b, c) {
	    function e(c, e, f, h, i) {
	      var j = function () {
	        function d(a, b) {
	          this.controller = a, this.router = b;
	        }return d.prototype.cleanupLastView = function () {
	          var b = this;this.previousLeaveAnimation && (a.cancel(this.previousLeaveAnimation), this.previousLeaveAnimation = null), this.currentScope && (this.currentScope.$destroy(), this.currentScope = null), this.currentElement && (this.previousLeaveAnimation = a.leave(this.currentElement), this.previousLeaveAnimation.then(function () {
	            return b.previousLeaveAnimation = null;
	          }), this.currentElement = null);
	        }, d.prototype.reuse = function (a) {
	          var c = b.when(!0),
	              d = this.currentInstruction;return this.currentInstruction = a, this.currentController && this.currentController.$routerOnReuse && (c = b.when(this.currentController.$routerOnReuse(this.currentInstruction, d))), c;
	        }, d.prototype.routerCanReuse = function (a) {
	          var c;return c = !(!this.currentInstruction || this.currentInstruction.componentType !== a.componentType) && (this.currentController && this.currentController.$routerCanReuse ? this.currentController.$routerCanReuse(a, this.currentInstruction) : a === this.currentInstruction || angular.equals(a.params, this.currentInstruction.params)), b.when(c);
	        }, d.prototype.routerCanDeactivate = function (a) {
	          return this.currentController && this.currentController.$routerCanDeactivate ? b.when(this.currentController.$routerCanDeactivate(a, this.currentInstruction)) : b.when(!0);
	        }, d.prototype.deactivate = function (a) {
	          return this.currentController && this.currentController.$routerOnDeactivate ? b.when(this.currentController.$routerOnDeactivate(a, this.currentInstruction)) : b.when();
	        }, d.prototype.activate = function (d) {
	          var f = this;this.previousInstruction = this.currentInstruction, this.currentInstruction = d;var h = this.controller.$$componentName = d.componentType;if ("string" != typeof h) throw new Error("Component is not a string for " + d.urlPath);this.controller.$$template = "<" + g(h) + ' $router="::$$router"></' + g(h) + ">", this.controller.$$router = this.router.childRouter(d.componentType), this.controller.$$outlet = this;var j = c.$new();j.$$router = this.controller.$$router, this.deferredActivation = b.defer();var k = i(j, function (b) {
	            a.enter(b, null, f.currentElement || e), f.cleanupLastView();
	          });return this.currentElement = k, this.currentScope = j, this.deferredActivation.promise;
	        }, d;
	      }(),
	          k = h[0],
	          l = h[1],
	          m = k && k.$$router || d;l.$$currentComponent = null, m.registerPrimaryOutlet(new j(l, m));
	    }var d = c;return { restrict: "AE", transclude: "element", terminal: !0, priority: 400, require: ["?^^ngOutlet", "ngOutlet"], link: e, controller: function () {
	        function a() {}return a;
	      }(), controllerAs: "$$ngOutlet" };
	  }function d(a) {
	    return { restrict: "EA", priority: -400, require: "ngOutlet", link: function link(b, c, d, e) {
	        var f = e.$$template;c.html(f), a(c.contents())(b);
	      } };
	  }function e(a) {
	    return { require: "^ngOutlet", priority: -1e3, link: function link(b, c, d, e) {
	        var f = a.when(),
	            g = e.$$outlet,
	            h = g.currentController = c.controller(e.$$componentName);h.$routerOnActivate && (f = a.when(h.$routerOnActivate(g.currentInstruction, g.previousInstruction))), f.then(g.deferredActivation.resolve, g.deferredActivation.reject);
	      } };
	  }function f(a, b) {
	    function c(c, d, e, f) {
	      function j(a) {
	        return h = g.generate(a), "./" + angular.stringifyInstruction(h);
	      }var g = f && f.$$router || a;if (g) {
	        var h = null,
	            i = e.ngLink || "",
	            k = b(i);if (k.constant) {
	          var l = k();d.attr("href", j(l));
	        } else c.$watch(function () {
	          return k(c);
	        }, function (a) {
	          return d.attr("href", j(a));
	        }, !0);d.on("click", function (b) {
	          1 === b.which && h && (a.navigateByInstruction(h), b.preventDefault());
	        });
	      }
	    }return { require: "?^^ngOutlet", restrict: "A", link: c };
	  }function g(a) {
	    return a.replace(/[A-Z]/g, function (a) {
	      return "-" + a.toLowerCase();
	    });
	  }function h(a, b, c, d, e, f, g) {
	    function h() {
	      return function (a) {
	        return a;
	      };
	    }function i(a) {
	      return a;
	    }function j(a) {
	      return !!a;
	    }function k(a) {
	      return !a;
	    }function l(a) {
	      return "string" == typeof a;
	    }function m(a) {
	      return "function" == typeof a;
	    }function n(a) {
	      return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a;
	    }function o(a) {
	      return Array.isArray(a);
	    }function p(a) {
	      return a.name || "Root";
	    }function y() {}function C() {}function G(a) {
	      return k(a) ? null : a.toString();
	    }function I(a) {
	      var b = [];return k(a) ? [] : (u.forEach(a, function (a, c) {
	        b.push(a === !0 ? c : c + "=" + a);
	      }), b);
	    }function J(a, b) {
	      return void 0 === b && (b = "&"), I(a).join(b);
	    }function M(a) {
	      for (var b = new K(a[a.length - 1]), c = a.length - 2; c >= 0; c -= 1) {
	        b = new K(a[c], b);
	      }return b;
	    }function O(a) {
	      var b = r.firstMatch(N, a);return j(b) ? b[0] : "";
	    }function U(a, b) {
	      return b instanceof Type && a.name in b.prototype;
	    }function V(a) {
	      for (var b = s.annotations(a), c = 0; c < b.length; c += 1) {
	        var d = b[c];if (d instanceof T.CanActivate) return d.fn;
	      }return null;
	    }function ca(a, b) {
	      if (a instanceof ba.AsyncRoute) {
	        var c = da(a.loader, b);return new ba.AsyncRoute({ path: a.path, loader: c, name: a.name, data: a.data, useAsDefault: a.useAsDefault });
	      }if (a instanceof ba.Route || a instanceof ba.Redirect || a instanceof ba.AuxRoute) return a;if (+!!a.component + +!!a.redirectTo + +!!a.loader != 1) throw new z('Route config should contain exactly one "component", "loader", or "redirectTo" property.');if (a.as && a.name) throw new z('Route config should contain exactly one "as" or "name" property.');if (a.as && (a.name = a.as), a.loader) {
	        var c = da(a.loader, b);return new ba.AsyncRoute({ path: a.path, loader: c, name: a.name, data: a.data, useAsDefault: a.useAsDefault });
	      }if (a.aux) return new ba.AuxRoute({ path: a.aux, component: a.component, name: a.name });if (a.component) {
	        if ("object" == _typeof(a.component)) {
	          var d = a.component;if ("constructor" == d.type) return new ba.Route({ path: a.path, component: d.constructor, name: a.name, data: a.data, useAsDefault: a.useAsDefault });if ("loader" == d.type) return new ba.AsyncRoute({ path: a.path, loader: d.loader, name: a.name, data: a.data, useAsDefault: a.useAsDefault });throw new z('Invalid component type "' + d.type + '". Valid types are "constructor" and "loader".');
	        }return new ba.Route(a);
	      }return a.redirectTo ? new ba.Redirect({ path: a.path, redirectTo: a.redirectTo }) : a;
	    }function da(a, b) {
	      return function () {
	        return a().then(function (a) {
	          return b.configFromComponent(a), a;
	        });
	      };
	    }function ea(a, b) {
	      if (!m(a)) throw new z('Component for route "' + b + '" is not defined, or is not a class.');
	    }function Sa(a) {
	      var b = [];return a.forEach(function (a) {
	        if (l(a)) {
	          var c = a;b = b.concat(c.split("/"));
	        } else b.push(a);
	      }), b;
	    }function Ta(a) {
	      if (a = a.filter(function (a) {
	        return j(a);
	      }), 0 == a.length) return null;if (1 == a.length) return a[0];var b = a[0],
	          c = a.slice(1);return c.reduce(function (a, b) {
	        return Ua(b.specificity, a.specificity) == -1 ? b : a;
	      }, b);
	    }function Ua(a, b) {
	      for (var c = Math.min(a.length, b.length), d = 0; d < c; d += 1) {
	        var e = x.charCodeAt(a, d),
	            f = x.charCodeAt(b, d),
	            g = f - e;if (0 != g) return g;
	      }return a.length - b.length;
	    }function Va(a, b) {
	      if (m(a)) {
	        var c = s.annotations(a);if (j(c)) for (var d = 0; d < c.length; d++) {
	          var e = c[d];if (e instanceof pa.RouteConfig) throw new z('Child routes are not allowed for "' + b + '". Use "..." on the parent\'s route path.');
	        }
	      }
	    }function ab(a, b) {
	      var c = Xa;return k(a.component) ? c : (j(a.child) && (c = ab(a.child, j(b) ? b.child : null)), c.then(function (c) {
	        if (0 == c) return !1;if (a.component.reuse) return !0;var d = Wa.getCanActivateHook(a.component.componentType);return !j(d) || d(a.component, j(b) ? b.component : null);
	      }));
	    }var q = { resolve: function resolve(b) {
	        return a.when(b);
	      }, reject: function reject(b) {
	        return a.reject(b);
	      }, catchError: function catchError(a, b) {
	        return a.then(null, b);
	      }, all: function all(b) {
	        return a.all(b);
	      } },
	        r = { create: function create(a, b) {
	        return b = b ? b.replace(/g/g, "") : "", new RegExp(a, b + "g");
	      }, firstMatch: function firstMatch(a, b) {
	        return a.lastIndex = 0, a.exec(b);
	      }, matcher: function matcher(a, b) {
	        return a.lastIndex = 0, { re: a, input: b };
	      } },
	        s = { annotations: function annotations(a) {
	        return a.annotations || [];
	      } },
	        u = { create: function create() {
	        return {};
	      }, set: function set(a, b, c) {
	        return a[b] = c;
	      }, get: function get(a, b) {
	        return a.hasOwnProperty(b) ? a[b] : void 0;
	      }, contains: function contains(a, b) {
	        return a.hasOwnProperty(b);
	      }, keys: function keys(a) {
	        return Object.keys(a);
	      }, isEmpty: function isEmpty(a) {
	        for (var b in a) {
	          if (a.hasOwnProperty(b)) return !1;
	        }return !0;
	      }, delete: function _delete(a, b) {
	        delete a[b];
	      }, forEach: function forEach(a, b) {
	        for (var c in a) {
	          a.hasOwnProperty(c) && b(a[c], c);
	        }
	      }, equals: function equals(a, b) {
	        var c = Object.keys(a),
	            d = Object.keys(b);if (c.length != d.length) return !1;for (var e, f = 0; f < c.length; f++) {
	          if (e = c[f], a[e] !== b[e]) return !1;
	        }return !0;
	      }, merge: function merge(a, b) {
	        var c = {};for (var d in a) {
	          a.hasOwnProperty(d) && (c[d] = a[d]);
	        }for (var d in b) {
	          b.hasOwnProperty(d) && (c[d] = b[d]);
	        }return c;
	      } },
	        w = (Array, { toJSON: function toJSON(a) {
	        return JSON.stringify(a);
	      }, clear: function clear(a) {
	        a.length = 0;
	      }, create: function create() {
	        return [];
	      }, push: function push(a, b) {
	        return a.push(b);
	      }, forEach: function forEach(a, b) {
	        return a.forEach(b);
	      }, first: function first(a) {
	        return a ? a[0] : null;
	      }, last: function last(a) {
	        return (a && a.length) > 0 ? a[a.length - 1] : null;
	      }, map: function map(a, b) {
	        return a.map(b);
	      }, join: function join(a, b) {
	        return a.join(b);
	      }, reduce: function reduce(a, b, c) {
	        return a.reduce(b, c);
	      }, filter: function filter(a, b) {
	        return a.filter(b);
	      }, concat: function concat(a, b) {
	        return a.concat(b);
	      }, slice: function slice(a) {
	        var b = void 0 !== arguments[1] ? arguments[1] : 0,
	            c = void 0 !== arguments[2] ? arguments[2] : null;return a.slice(b, null === c ? void 0 : c);
	      }, maximum: function maximum(a, b) {
	        if (0 == a.length) return null;for (var c = null, d = -(1 / 0), e = 0; e < a.length; e++) {
	          var f = a[e];if (!k(f)) {
	            var g = b(f);g > d && (c = f, d = g);
	          }
	        }return c;
	      } }),
	        x = { charCodeAt: function charCodeAt(a, b) {
	        return a.charCodeAt(b);
	      }, equals: function equals(a, b) {
	        return a === b;
	      }, split: function split(a, b) {
	        return a.split(b);
	      }, replaceAll: function replaceAll(a, b, c) {
	        return a.replace(b, c);
	      }, replaceAllMapped: function replaceAllMapped(a, b, c) {
	        return a.replace(b, function (a) {
	          return a.splice(-2, 2), c.apply(null, a);
	        });
	      }, contains: function contains(a, b) {
	        return a.indexOf(b) != -1;
	      } },
	        z = Error,
	        A = { callNext: function callNext(a, b) {
	        a.fn(b);
	      }, callEmit: function callEmit(a, b) {
	        a.fn(b);
	      }, subscribe: function subscribe(a, b) {
	        a.fn = b;
	      } };C.prototype.subscribe = function () {}, C.prototype.path = function () {
	      return b.url();
	    }, C.prototype.go = function (a, c) {
	      return b.url(a + c);
	    };var D = { Injectable: function Injectable() {}, OpaqueToken: function OpaqueToken() {}, Inject: function Inject() {} },
	        E = function E() {
	      return D;
	    },
	        F = function () {
	      function a(a) {
	        var b = this;this.map = {}, this.keys = {}, j(a) && u.forEach(a, function (a, c) {
	          b.map[c] = j(a) ? a.toString() : null, b.keys[c] = !0;
	        });
	      }return a.prototype.get = function (a) {
	        return u.delete(this.keys, a), this.map[a];
	      }, a.prototype.getUnused = function () {
	        var a = this,
	            b = {},
	            c = u.keys(this.keys);return c.forEach(function (c) {
	          return b[c] = u.get(a.map, c);
	        }), b;
	      }, a;
	    }();D.TouchMap = F, D.normalizeString = G;var H = this && this.__extends || function (a, b) {
	      function d() {
	        this.constructor = a;
	      }for (var c in b) {
	        b.hasOwnProperty(c) && (a[c] = b[c]);
	      }a.prototype = null === b ? Object.create(b) : (d.prototype = b.prototype, new d());
	    };D.convertUrlParamsToArray = I, D.serializeParams = J;var K = function () {
	      function a(a, b, c, d) {
	        void 0 === b && (b = null), void 0 === c && (c = i([])), void 0 === d && (d = i({})), this.path = a, this.child = b, this.auxiliary = c, this.params = d;
	      }return a.prototype.toString = function () {
	        return this.path + this._matrixParamsToString() + this._auxToString() + this._childString();
	      }, a.prototype.segmentToString = function () {
	        return this.path + this._matrixParamsToString();
	      }, a.prototype._auxToString = function () {
	        return this.auxiliary.length > 0 ? "(" + this.auxiliary.map(function (a) {
	          return a.toString();
	        }).join("//") + ")" : "";
	      }, a.prototype._matrixParamsToString = function () {
	        var a = J(this.params, ";");return a.length > 0 ? ";" + a : "";
	      }, a.prototype._childString = function () {
	        return j(this.child) ? "/" + this.child.toString() : "";
	      }, a;
	    }();D.Url = K;var L = function (a) {
	      function b(b, c, d, e) {
	        void 0 === c && (c = null), void 0 === d && (d = i([])), void 0 === e && (e = null), a.call(this, b, c, d, e);
	      }return H(b, a), b.prototype.toString = function () {
	        return this.path + this._auxToString() + this._childString() + this._queryParamsToString();
	      }, b.prototype.segmentToString = function () {
	        return this.path + this._queryParamsToString();
	      }, b.prototype._queryParamsToString = function () {
	        return k(this.params) ? "" : "?" + J(this.params);
	      }, b;
	    }(K);D.RootUrl = L, D.pathSegmentsToUrl = M;var N = r.create("^[^\\/\\(\\)\\?;=&#]+"),
	        P = function () {
	      function a() {}return a.prototype.peekStartsWith = function (a) {
	        return this._remaining.startsWith(a);
	      }, a.prototype.capture = function (a) {
	        if (!this._remaining.startsWith(a)) throw new z('Expected "' + a + '".');this._remaining = this._remaining.substring(a.length);
	      }, a.prototype.parse = function (a) {
	        return this._remaining = a, "" == a || "/" == a ? new K("") : this.parseRoot();
	      }, a.prototype.parseRoot = function () {
	        this.peekStartsWith("/") && this.capture("/");var a = O(this._remaining);this.capture(a);var b = [];this.peekStartsWith("(") && (b = this.parseAuxiliaryRoutes()), this.peekStartsWith(";") && this.parseMatrixParams();var c = null;this.peekStartsWith("/") && !this.peekStartsWith("//") && (this.capture("/"), c = this.parseSegment());var d = null;return this.peekStartsWith("?") && (d = this.parseQueryParams()), new L(a, c, b, d);
	      }, a.prototype.parseSegment = function () {
	        if (0 == this._remaining.length) return null;this.peekStartsWith("/") && this.capture("/");var a = O(this._remaining);this.capture(a);var b = null;this.peekStartsWith(";") && (b = this.parseMatrixParams());var c = [];this.peekStartsWith("(") && (c = this.parseAuxiliaryRoutes());var d = null;return this.peekStartsWith("/") && !this.peekStartsWith("//") && (this.capture("/"), d = this.parseSegment()), new K(a, d, c, b);
	      }, a.prototype.parseQueryParams = function () {
	        var a = {};for (this.capture("?"), this.parseParam(a); this._remaining.length > 0 && this.peekStartsWith("&");) {
	          this.capture("&"), this.parseParam(a);
	        }return a;
	      }, a.prototype.parseMatrixParams = function () {
	        for (var a = {}; this._remaining.length > 0 && this.peekStartsWith(";");) {
	          this.capture(";"), this.parseParam(a);
	        }return a;
	      }, a.prototype.parseParam = function (a) {
	        var b = O(this._remaining);if (!k(b)) {
	          this.capture(b);var c = !0;if (this.peekStartsWith("=")) {
	            this.capture("=");var d = O(this._remaining);j(d) && (c = d, this.capture(c));
	          }a[b] = c;
	        }
	      }, a.prototype.parseAuxiliaryRoutes = function () {
	        var a = [];for (this.capture("("); !this.peekStartsWith(")") && this._remaining.length > 0;) {
	          a.push(this.parseSegment()), this.peekStartsWith("//") && this.capture("//");
	        }return this.capture(")"), a;
	      }, a;
	    }();D.UrlParser = P, D.parser = new P();var Q = this && this.__decorate || function (a, b, c, d) {
	      var g,
	          e = arguments.length,
	          f = e < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) f = Reflect.decorate(a, b, c, d);else for (var h = a.length - 1; h >= 0; h--) {
	        (g = a[h]) && (f = (e < 3 ? g(f) : e > 3 ? g(b, c, f) : g(b, c)) || f);
	      }return e > 3 && f && Object.defineProperty(b, c, f), f;
	    },
	        R = function () {
	      function a(a) {
	        this.name = a;
	      }return a = Q([h()], a);
	    }();D.RouteLifecycleHook = R;var S = function () {
	      function a(a) {
	        this.fn = a;
	      }return a = Q([h()], a);
	    }();D.CanActivate = S, D.routerCanReuse = i(new R("routerCanReuse")), D.routerCanDeactivate = i(new R("routerCanDeactivate")), D.routerOnActivate = i(new R("routerOnActivate")), D.routerOnReuse = i(new R("routerOnReuse")), D.routerOnDeactivate = i(new R("routerOnDeactivate"));var T = E("./lifecycle_annotations_impl");D.hasLifecycleHook = U, D.getCanActivateHook = V;var H = this && this.__extends || function (a, b) {
	      function d() {
	        this.constructor = a;
	      }for (var c in b) {
	        b.hasOwnProperty(c) && (a[c] = b[c]);
	      }a.prototype = null === b ? Object.create(b) : (d.prototype = b.prototype, new d());
	    },
	        Q = this && this.__decorate || function (a, b, c, d) {
	      var g,
	          e = arguments.length,
	          f = e < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) f = Reflect.decorate(a, b, c, d);else for (var h = a.length - 1; h >= 0; h--) {
	        (g = a[h]) && (f = (e < 3 ? g(f) : e > 3 ? g(b, c, f) : g(b, c)) || f);
	      }return e > 3 && f && Object.defineProperty(b, c, f), f;
	    },
	        W = E("../route_definition");D.RouteDefinition = W.RouteDefinition;var X = function () {
	      function a(a) {
	        this.configs = a;
	      }return a = Q([h()], a);
	    }();D.RouteConfig = X;var Y = function () {
	      function a(a) {
	        var b = a.name,
	            c = a.useAsDefault,
	            d = a.path,
	            e = a.regex,
	            f = a.serializer,
	            g = a.data;this.name = b, this.useAsDefault = c, this.path = d, this.regex = e, this.serializer = f, this.data = g;
	      }return a = Q([h()], a);
	    }();D.AbstractRoute = Y;var Z = function (a) {
	      function b(b) {
	        var c = b.name,
	            d = b.useAsDefault,
	            e = b.path,
	            f = b.regex,
	            g = b.serializer,
	            h = b.data,
	            i = b.component;a.call(this, { name: c, useAsDefault: d, path: e, regex: f, serializer: g, data: h }), this.aux = null, this.component = i;
	      }return H(b, a), b = Q([h()], b);
	    }(Y);D.Route = Z;var $ = function (a) {
	      function b(b) {
	        var c = b.name,
	            d = b.useAsDefault,
	            e = b.path,
	            f = b.regex,
	            g = b.serializer,
	            h = b.data,
	            i = b.component;a.call(this, { name: c, useAsDefault: d, path: e, regex: f, serializer: g, data: h }), this.component = i;
	      }return H(b, a), b = Q([h()], b);
	    }(Y);D.AuxRoute = $;var _ = function (a) {
	      function b(b) {
	        var c = b.name,
	            d = b.useAsDefault,
	            e = b.path,
	            f = b.regex,
	            g = b.serializer,
	            h = b.data,
	            i = b.loader;a.call(this, { name: c, useAsDefault: d, path: e, regex: f, serializer: g, data: h }), this.aux = null, this.loader = i;
	      }return H(b, a), b = Q([h()], b);
	    }(Y);D.AsyncRoute = _;var aa = function (a) {
	      function b(b) {
	        var c = b.name,
	            d = b.useAsDefault,
	            e = b.path,
	            f = b.regex,
	            g = b.serializer,
	            h = b.data,
	            i = b.redirectTo;a.call(this, { name: c, useAsDefault: d, path: e, regex: f, serializer: g, data: h }), this.redirectTo = i;
	      }return H(b, a), b = Q([h()], b);
	    }(Y);D.Redirect = aa;var ba = E("./route_config_decorator");D.normalizeRouteConfig = ca, D.assertComponentExists = ea;var fa = E("../../instruction"),
	        ga = function () {
	      function a(a, b) {
	        void 0 === b && (b = null), this._loader = a, this._resolvedComponent = null, this.data = j(b) ? new fa.RouteData(b) : fa.BLANK_ROUTE_DATA;
	      }return a.prototype.resolveComponentType = function () {
	        var a = this;return j(this._resolvedComponent) ? this._resolvedComponent : this._resolvedComponent = this._loader().then(function (b) {
	          return a.componentType = b, b;
	        });
	      }, a;
	    }();D.AsyncRouteHandler = ga;var fa = E("../../instruction"),
	        ha = function () {
	      function a(a, b) {
	        this.componentType = a, this._resolvedComponent = null, this._resolvedComponent = q.resolve(a), this.data = j(b) ? new fa.RouteData(b) : fa.BLANK_ROUTE_DATA;
	      }return a.prototype.resolveComponentType = function () {
	        return this._resolvedComponent;
	      }, a;
	    }();D.SyncRouteHandler = ha;var H = this && this.__extends || function (a, b) {
	      function d() {
	        this.constructor = a;
	      }for (var c in b) {
	        b.hasOwnProperty(c) && (a[c] = b[c]);
	      }a.prototype = null === b ? Object.create(b) : (d.prototype = b.prototype, new d());
	    },
	        ia = E("../url_parser"),
	        fa = E("../instruction"),
	        ja = function () {
	      function a() {}return a;
	    }();D.RouteMatch = ja;var ka = function (a) {
	      function b(b, c, d) {
	        a.call(this), this.instruction = b, this.remaining = c, this.remainingAux = d;
	      }return H(b, a), b;
	    }(ja);D.PathMatch = ka;var la = function (a) {
	      function b(b, c) {
	        a.call(this), this.redirectTo = b, this.specificity = c;
	      }return H(b, a), b;
	    }(ja);D.RedirectMatch = la;var ma = function () {
	      function a(a, b) {
	        this._pathRecognizer = a, this.redirectTo = b, this.hash = this._pathRecognizer.hash;
	      }return Object.defineProperty(a.prototype, "path", { get: function get() {
	          return this._pathRecognizer.toString();
	        }, set: function set(a) {
	          throw new z("you cannot set the path of a RedirectRule directly");
	        }, enumerable: !0, configurable: !0 }), a.prototype.recognize = function (a) {
	        var b = null;return j(this._pathRecognizer.matchUrl(a)) && (b = new la(this.redirectTo, this._pathRecognizer.specificity)), q.resolve(b);
	      }, a.prototype.generate = function (a) {
	        throw new z("Tried to generate a redirect.");
	      }, a;
	    }();D.RedirectRule = ma;var na = function () {
	      function a(a, b) {
	        this._routePath = a, this.handler = b, this._cache = new Map(), this.specificity = this._routePath.specificity, this.hash = this._routePath.hash, this.terminal = this._routePath.terminal;
	      }return Object.defineProperty(a.prototype, "path", { get: function get() {
	          return this._routePath.toString();
	        }, set: function set(a) {
	          throw new z("you cannot set the path of a RouteRule directly");
	        }, enumerable: !0, configurable: !0 }), a.prototype.recognize = function (a) {
	        var b = this,
	            c = this._routePath.matchUrl(a);return k(c) ? null : this.handler.resolveComponentType().then(function (a) {
	          var d = b._getInstruction(c.urlPath, c.urlParams, c.allParams);return new ka(d, c.rest, c.auxiliary);
	        });
	      }, a.prototype.generate = function (a) {
	        var b = this._routePath.generateUrl(a),
	            c = b.urlPath,
	            d = b.urlParams;return this._getInstruction(c, ia.convertUrlParamsToArray(d), a);
	      }, a.prototype.generateComponentPathValues = function (a) {
	        return this._routePath.generateUrl(a);
	      }, a.prototype._getInstruction = function (a, b, c) {
	        if (k(this.handler.componentType)) throw new z("Tried to get instruction before the type was loaded.");var d = a + "?" + b.join("&");if (this._cache.has(d)) return this._cache.get(d);var e = new fa.ComponentInstruction(a, b, this.handler.data, this.handler.componentType, this.terminal, this.specificity, c);return this._cache.set(d, e), e;
	      }, a;
	    }();D.RouteRule = na;var oa = E("./rules"),
	        pa = E("../route_config/route_config_impl"),
	        qa = E("./route_handlers/async_route_handler"),
	        ra = E("./route_handlers/sync_route_handler"),
	        sa = E("./route_paths/param_route_path"),
	        ta = E("./route_paths/regex_route_path"),
	        ua = function () {
	      function a() {
	        this.rulesByName = new Map(), this.auxRulesByName = new Map(), this.auxRulesByPath = new Map(), this.rules = [], this.defaultRule = null;
	      }return a.prototype.config = function (a) {
	        var b;if (j(a.name) && a.name[0].toUpperCase() != a.name[0]) {
	          var c = a.name[0].toUpperCase() + a.name.substring(1);throw new z('Route "' + a.path + '" with name "' + a.name + '" does not begin with an uppercase letter. Route names should be CamelCase like "' + c + '".');
	        }if (a instanceof pa.AuxRoute) {
	          b = new ra.SyncRouteHandler(a.component, a.data);var d = this._getRoutePath(a),
	              e = new oa.RouteRule(d, b);return this.auxRulesByPath.set(d.toString(), e), j(a.name) && this.auxRulesByName.set(a.name, e), e.terminal;
	        }var f = !1;if (a instanceof pa.Redirect) {
	          var g = this._getRoutePath(a),
	              h = new oa.RedirectRule(g, a.redirectTo);return this._assertNoHashCollision(h.hash, a.path), this.rules.push(h), !0;
	        }a instanceof pa.Route ? (b = new ra.SyncRouteHandler(a.component, a.data), f = j(a.useAsDefault) && a.useAsDefault) : a instanceof pa.AsyncRoute && (b = new qa.AsyncRouteHandler(a.loader, a.data), f = j(a.useAsDefault) && a.useAsDefault);var i = this._getRoutePath(a),
	            k = new oa.RouteRule(i, b);if (this._assertNoHashCollision(k.hash, a.path), f) {
	          if (j(this.defaultRule)) throw new z("Only one route can be default");this.defaultRule = k;
	        }return this.rules.push(k), j(a.name) && this.rulesByName.set(a.name, k), k.terminal;
	      }, a.prototype.recognize = function (a) {
	        var b = [];return this.rules.forEach(function (c) {
	          var d = c.recognize(a);j(d) && b.push(d);
	        }), 0 == b.length && j(a) && a.auxiliary.length > 0 ? [q.resolve(new oa.PathMatch(null, null, a.auxiliary))] : b;
	      }, a.prototype.recognizeAuxiliary = function (a) {
	        var b = this.auxRulesByPath.get(a.path);return j(b) ? [b.recognize(a)] : [q.resolve(null)];
	      }, a.prototype.hasRoute = function (a) {
	        return this.rulesByName.has(a);
	      }, a.prototype.componentLoaded = function (a) {
	        return this.hasRoute(a) && j(this.rulesByName.get(a).handler.componentType);
	      }, a.prototype.loadComponent = function (a) {
	        return this.rulesByName.get(a).handler.resolveComponentType();
	      }, a.prototype.generate = function (a, b) {
	        var c = this.rulesByName.get(a);return k(c) ? null : c.generate(b);
	      }, a.prototype.generateAuxiliary = function (a, b) {
	        var c = this.auxRulesByName.get(a);return k(c) ? null : c.generate(b);
	      }, a.prototype._assertNoHashCollision = function (a, b) {
	        this.rules.forEach(function (c) {
	          if (a == c.hash) throw new z("Configuration '" + b + "' conflicts with existing route '" + c.path + "'");
	        });
	      }, a.prototype._getRoutePath = function (a) {
	        if (j(a.regex)) {
	          if (isFunction(a.serializer)) return new ta.RegexRoutePath(a.regex, a.serializer);throw new z("Route provides a regex property, '" + a.regex + "', but no serializer property");
	        }if (j(a.path)) {
	          var b = a instanceof pa.AuxRoute && a.path.startsWith("/") ? a.path.substring(1) : a.path;return new sa.ParamRoutePath(b);
	        }throw new z("Route must provide either a path or regex property");
	      }, a;
	    }();D.RuleSet = ua;var va = function () {
	      function a(a, b, c, d, e) {
	        this.urlPath = a, this.urlParams = b, this.allParams = c, this.auxiliary = d, this.rest = e;
	      }return a;
	    }();D.MatchedUrl = va;var wa = function () {
	      function a(a, b) {
	        this.urlPath = a, this.urlParams = b;
	      }return a;
	    }();D.GeneratedUrl = wa;var xa = E("../../utils"),
	        ia = E("../../url_parser"),
	        ya = E("./route_path"),
	        za = function () {
	      function a() {
	        this.name = "", this.specificity = "", this.hash = "...";
	      }return a.prototype.generate = function (a) {
	        return "";
	      }, a.prototype.match = function (a) {
	        return !0;
	      }, a;
	    }(),
	        Aa = function () {
	      function a(a) {
	        this.path = a, this.name = "", this.specificity = "2", this.hash = a;
	      }return a.prototype.match = function (a) {
	        return a == this.path;
	      }, a.prototype.generate = function (a) {
	        return this.path;
	      }, a;
	    }(),
	        Ba = function () {
	      function a(a) {
	        this.name = a, this.specificity = "1", this.hash = ":";
	      }return a.prototype.match = function (a) {
	        return a.length > 0;
	      }, a.prototype.generate = function (a) {
	        if (!u.contains(a.map, this.name)) throw new z("Route generator for '" + this.name + "' was not included in parameters passed.");return xa.normalizeString(a.get(this.name));
	      }, a.paramMatcher = /^:([^\/]+)$/g, a;
	    }(),
	        Ca = function () {
	      function a(a) {
	        this.name = a, this.specificity = "0", this.hash = "*";
	      }return a.prototype.match = function (a) {
	        return !0;
	      }, a.prototype.generate = function (a) {
	        return xa.normalizeString(a.get(this.name));
	      }, a.wildcardMatcher = /^\*([^\/]+)$/g, a;
	    }(),
	        Da = function () {
	      function a(a) {
	        this.routePath = a, this.terminal = !0, this._assertValidPath(a), this._parsePathString(a), this.specificity = this._calculateSpecificity(), this.hash = this._calculateHash();var b = this._segments[this._segments.length - 1];this.terminal = !(b instanceof za);
	      }return a.prototype.matchUrl = function (a) {
	        for (var c, b = a, d = {}, e = [], f = 0; f < this._segments.length; f += 1) {
	          var g = this._segments[f];if (c = b, g instanceof za) break;if (j(c)) {
	            if (g instanceof Ca) {
	              d[g.name] = c.toString(), e.push(c.toString()), b = null;break;
	            }if (e.push(c.path), g instanceof Ba) d[g.name] = c.path;else if (!g.match(c.path)) return null;b = c.child;
	          } else if (!g.match("")) return null;
	        }if (this.terminal && j(b)) return null;var h = e.join("/"),
	            i = [],
	            k = [],
	            l = d;if (j(c)) {
	          var m = a instanceof ia.RootUrl ? a : c;j(m.params) ? (l = u.merge(m.params, d), k = ia.convertUrlParamsToArray(m.params)) : l = d, i = c.auxiliary;
	        }return new ya.MatchedUrl(h, k, l, i, b);
	      }, a.prototype.generateUrl = function (a) {
	        for (var b = new xa.TouchMap(a), c = [], d = 0; d < this._segments.length; d++) {
	          var e = this._segments[d];e instanceof za || c.push(e.generate(b));
	        }var f = c.join("/"),
	            g = b.getUnused(),
	            h = g;return new ya.GeneratedUrl(f, h);
	      }, a.prototype.toString = function () {
	        return this.routePath;
	      }, a.prototype._parsePathString = function (a) {
	        a.startsWith("/") && (a = a.substring(1));var b = a.split("/");this._segments = [];for (var c = b.length - 1, d = 0; d <= c; d++) {
	          var f,
	              e = b[d];if (j(f = r.firstMatch(Ba.paramMatcher, e))) this._segments.push(new Ba(f[1]));else if (j(f = r.firstMatch(Ca.wildcardMatcher, e))) this._segments.push(new Ca(f[1]));else if ("..." == e) {
	            if (d < c) throw new z('Unexpected "..." before the end of the path for "' + a + '".');this._segments.push(new za());
	          } else this._segments.push(new Aa(e));
	        }
	      }, a.prototype._calculateSpecificity = function () {
	        var a,
	            c,
	            b = this._segments.length;if (0 == b) c += "2";else for (c = "", a = 0; a < b; a++) {
	          c += this._segments[a].specificity;
	        }return c;
	      }, a.prototype._calculateHash = function () {
	        var a,
	            b = this._segments.length,
	            c = [];for (a = 0; a < b; a++) {
	          c.push(this._segments[a].hash);
	        }return c.join("/");
	      }, a.prototype._assertValidPath = function (b) {
	        if (x.contains(b, "#")) throw new z('Path "' + b + '" should not include "#". Use "HashLocationStrategy" instead.');var c = r.firstMatch(a.RESERVED_CHARS, b);if (j(c)) throw new z('Path "' + b + '" contains "' + c[0] + '" which is not allowed in a route config.');
	      }, a.RESERVED_CHARS = r.create("//|\\(|\\)|;|\\?|="), a;
	    }();D.ParamRoutePath = Da;var ya = E("./route_path"),
	        Ea = function () {
	      function a(a, b) {
	        this._reString = a, this._serializer = b, this.terminal = !0, this.specificity = "2", this.hash = this._reString, this._regex = r.create(this._reString);
	      }return a.prototype.matchUrl = function (a) {
	        var b = a.toString(),
	            c = {},
	            d = r.matcher(this._regex, b),
	            e = RegExpMatcherWrapper.next(d);if (k(e)) return null;for (var f = 0; f < e.length; f += 1) {
	          c[f.toString()] = e[f];
	        }return new ya.MatchedUrl(b, [], c, [], null);
	      }, a.prototype.generateUrl = function (a) {
	        return this._serializer(a);
	      }, a.prototype.toString = function () {
	        return this._reString;
	      }, a;
	    }();D.RegexRoutePath = Ea;var H = this && this.__extends || function (a, b) {
	      function d() {
	        this.constructor = a;
	      }for (var c in b) {
	        b.hasOwnProperty(c) && (a[c] = b[c]);
	      }a.prototype = null === b ? Object.create(b) : (d.prototype = b.prototype, new d());
	    },
	        Fa = function () {
	      function a(a) {
	        this.params = a;
	      }return a.prototype.get = function (a) {
	        return normalizeBlank(u.get(this.params, a));
	      }, a;
	    }();D.RouteParams = Fa;var Ga = function () {
	      function a(a) {
	        void 0 === a && (a = i({})), this.data = a;
	      }return a.prototype.get = function (a) {
	        return normalizeBlank(u.get(this.data, a));
	      }, a;
	    }();D.RouteData = Ga, D.BLANK_ROUTE_DATA = new Ga();var Ha = function () {
	      function a(a, b, c) {
	        this.component = a, this.child = b, this.auxInstruction = c;
	      }return Object.defineProperty(a.prototype, "urlPath", { get: function get() {
	          return j(this.component) ? this.component.urlPath : "";
	        }, enumerable: !0, configurable: !0 }), Object.defineProperty(a.prototype, "urlParams", { get: function get() {
	          return j(this.component) ? this.component.urlParams : [];
	        }, enumerable: !0, configurable: !0 }), Object.defineProperty(a.prototype, "specificity", { get: function get() {
	          var a = "";return j(this.component) && (a += this.component.specificity), j(this.child) && (a += this.child.specificity), a;
	        }, enumerable: !0, configurable: !0 }), a.prototype.toRootUrl = function () {
	        return this.toUrlPath() + this.toUrlQuery();
	      }, a.prototype._toNonRootUrl = function () {
	        return this._stringifyPathMatrixAuxPrefixed() + (j(this.child) ? this.child._toNonRootUrl() : "");
	      }, a.prototype.toUrlQuery = function () {
	        return this.urlParams.length > 0 ? "?" + this.urlParams.join("&") : "";
	      }, a.prototype.replaceChild = function (a) {
	        return new Ia(this.component, a, this.auxInstruction);
	      }, a.prototype.toUrlPath = function () {
	        return this.urlPath + this._stringifyAux() + (j(this.child) ? this.child._toNonRootUrl() : "");
	      }, a.prototype.toLinkUrl = function () {
	        return this.urlPath + this._stringifyAux() + (j(this.child) ? this.child._toLinkUrl() : "");
	      }, a.prototype._toLinkUrl = function () {
	        return this._stringifyPathMatrixAuxPrefixed() + (j(this.child) ? this.child._toLinkUrl() : "");
	      }, a.prototype._stringifyPathMatrixAuxPrefixed = function () {
	        var a = this._stringifyPathMatrixAux();return a.length > 0 && (a = "/" + a), a;
	      }, a.prototype._stringifyMatrixParams = function () {
	        return this.urlParams.length > 0 ? ";" + this.urlParams.join(";") : "";
	      }, a.prototype._stringifyPathMatrixAux = function () {
	        return k(this.component) ? "" : this.urlPath + this._stringifyMatrixParams() + this._stringifyAux();
	      }, a.prototype._stringifyAux = function () {
	        var a = [];return u.forEach(this.auxInstruction, function (b, c) {
	          a.push(b._stringifyPathMatrixAux());
	        }), a.length > 0 ? "(" + a.join("//") + ")" : "";
	      }, a;
	    }();D.Instruction = Ha;var Ia = function (a) {
	      function b(b, c, d) {
	        a.call(this, b, c, d);
	      }return H(b, a), b.prototype.resolveComponent = function () {
	        return q.resolve(this.component);
	      }, b;
	    }(Ha);D.ResolvedInstruction = Ia;var Ja = function (a) {
	      function b(b, c) {
	        a.call(this, b, c, {});
	      }return H(b, a), b.prototype.toLinkUrl = function () {
	        return "";
	      }, b.prototype._toLinkUrl = function () {
	        return "";
	      }, b;
	    }(Ia);D.DefaultInstruction = Ja;var Ka = function (a) {
	      function b(b, c, d) {
	        void 0 === c && (c = ""), void 0 === d && (d = i([])), a.call(this, null, null, {}), this._resolver = b, this._urlPath = c, this._urlParams = d;
	      }return H(b, a), Object.defineProperty(b.prototype, "urlPath", { get: function get() {
	          return j(this.component) ? this.component.urlPath : j(this._urlPath) ? this._urlPath : "";
	        }, enumerable: !0, configurable: !0 }), Object.defineProperty(b.prototype, "urlParams", { get: function get() {
	          return j(this.component) ? this.component.urlParams : j(this._urlParams) ? this._urlParams : [];
	        }, enumerable: !0, configurable: !0 }), b.prototype.resolveComponent = function () {
	        var a = this;return j(this.component) ? q.resolve(this.component) : this._resolver().then(function (b) {
	          return a.child = b.child, a.component = b.component;
	        });
	      }, b;
	    }(Ha);D.UnresolvedInstruction = Ka;var La = function (a) {
	      function b(b, c, d, e) {
	        a.call(this, b, c, d), this._specificity = e;
	      }return H(b, a), Object.defineProperty(b.prototype, "specificity", { get: function get() {
	          return this._specificity;
	        }, enumerable: !0, configurable: !0 }), b;
	    }(Ia);D.RedirectInstruction = La;var Ma = function () {
	      function a(a, b, c, d, e, f, g) {
	        void 0 === g && (g = null), this.urlPath = a, this.urlParams = b, this.componentType = d, this.terminal = e, this.specificity = f, this.params = g, this.reuse = !1, this.routeData = j(c) ? c : D.BLANK_ROUTE_DATA;
	      }return a;
	    }();D.ComponentInstruction = Ma;var Na = E("angular2/core"),
	        pa = E("./route_config/route_config_impl"),
	        oa = E("./rules/rules"),
	        Oa = E("./rules/rule_set"),
	        fa = E("./instruction"),
	        Pa = E("./route_config/route_config_normalizer"),
	        ia = E("./url_parser"),
	        Qa = q.resolve(null);D.ROUTER_PRIMARY_COMPONENT = i(new Na.OpaqueToken("RouterPrimaryComponent"));var Ra = function () {
	      function a(a) {
	        this._rootComponent = a, this._rules = new Map();
	      }return a.prototype.config = function (a, b) {
	        b = Pa.normalizeRouteConfig(b, this), b instanceof pa.Route ? Pa.assertComponentExists(b.component, b.path) : b instanceof pa.AuxRoute && Pa.assertComponentExists(b.component, b.path);var c = this._rules.get(a);k(c) && (c = new Oa.RuleSet(), this._rules.set(a, c));var d = c.config(b);b instanceof pa.Route && (d ? Va(b.component, b.path) : this.configFromComponent(b.component));
	      }, a.prototype.configFromComponent = function (a) {
	        var b = this;if (m(a) && !this._rules.has(a)) {
	          var c = s.annotations(a);if (j(c)) for (var d = 0; d < c.length; d++) {
	            var e = c[d];if (e instanceof pa.RouteConfig) {
	              var f = e.configs;f.forEach(function (c) {
	                return b.config(a, c);
	              });
	            }
	          }
	        }
	      }, a.prototype.recognize = function (a, b) {
	        var c = ia.parser.parse(a);return this._recognize(c, []);
	      }, a.prototype._recognize = function (a, b, c) {
	        var d = this;void 0 === c && (c = !1);var e = w.last(b),
	            f = j(e) ? e.component.componentType : this._rootComponent,
	            g = this._rules.get(f);if (k(g)) return Qa;var h = c ? g.recognizeAuxiliary(a) : g.recognize(a),
	            i = h.map(function (a) {
	          return a.then(function (a) {
	            if (a instanceof oa.PathMatch) {
	              var c = b.length > 0 ? [w.last(b)] : [],
	                  e = d._auxRoutesToUnresolved(a.remainingAux, c),
	                  f = new fa.ResolvedInstruction(a.instruction, null, e);if (k(a.instruction) || a.instruction.terminal) return f;var g = b.concat([f]);return d._recognize(a.remaining, g).then(function (a) {
	                return k(a) ? null : a instanceof fa.RedirectInstruction ? a : (f.child = a, f);
	              });
	            }if (a instanceof oa.RedirectMatch) {
	              var f = d.generate(a.redirectTo, b.concat([null]));return new fa.RedirectInstruction(f.component, f.child, f.auxInstruction, a.specificity);
	            }
	          });
	        });return !k(a) && "" != a.path || 0 != h.length ? q.all(i).then(Ta) : q.resolve(this.generateDefault(f));
	      }, a.prototype._auxRoutesToUnresolved = function (a, b) {
	        var c = this,
	            d = {};return a.forEach(function (a) {
	          d[a.path] = new fa.UnresolvedInstruction(function () {
	            return c._recognize(a, b, !0);
	          });
	        }), d;
	      }, a.prototype.generate = function (a, b, c) {
	        void 0 === c && (c = !1);var e,
	            d = Sa(a);if ("" == w.first(d)) d.shift(), e = w.first(b), b = [];else if (e = b.length > 0 ? b.pop() : null, "." == w.first(d)) d.shift();else if (".." == w.first(d)) for (; ".." == w.first(d);) {
	          if (b.length <= 0) throw new z('Link "' + w.toJSON(a) + '" has too many "../" segments.');e = b.pop(), d = w.slice(d, 1);
	        } else {
	          var f = w.first(d),
	              g = this._rootComponent,
	              h = null;if (b.length > 1) {
	            var i = b[b.length - 1],
	                l = b[b.length - 2];g = i.component.componentType, h = l.component.componentType;
	          } else 1 == b.length && (g = b[0].component.componentType, h = this._rootComponent);var m = this.hasRoute(f, g),
	              n = j(h) && this.hasRoute(f, h);if (n && m) {
	            var o = 'Link "' + w.toJSON(a) + '" is ambiguous, use "./" or "../" to disambiguate.';throw new z(o);
	          }n && (e = b.pop());
	        }if ("" == d[d.length - 1] && d.pop(), d.length > 0 && "" == d[0] && d.shift(), d.length < 1) {
	          var o = 'Link "' + w.toJSON(a) + '" must include a route name.';throw new z(o);
	        }for (var p = this._generate(d, b, e, c, a), q = b.length - 1; q >= 0; q--) {
	          var r = b[q];if (k(r)) break;p = r.replaceChild(p);
	        }return p;
	      }, a.prototype._generate = function (a, b, c, d, e) {
	        var f = this;void 0 === d && (d = !1);var g = this._rootComponent,
	            h = null,
	            i = {},
	            m = w.last(b);if (j(m) && j(m.component) && (g = m.component.componentType), 0 == a.length) {
	          var q = this.generateDefault(g);if (k(q)) throw new z('Link "' + w.toJSON(e) + '" does not resolve to a terminal instruction.');return q;
	        }j(c) && !d && (i = u.merge(c.auxInstruction, i), h = c.component);var r = this._rules.get(g);if (k(r)) throw new z('Component "' + p(g) + '" has no route config.');var s = 0,
	            t = {};if (s < a.length && l(a[s])) {
	          var v = a[s];if ("" == v || "." == v || ".." == v) throw new z('"' + v + '/" is only allowed at the beginning of a link DSL.');if (s += 1, s < a.length) {
	            var x = a[s];n(x) && !o(x) && (t = x, s += 1);
	          }var y = (d ? r.auxRulesByName : r.rulesByName).get(v);if (k(y)) throw new z('Component "' + p(g) + '" has no route named "' + v + '".');if (k(y.handler.componentType)) {
	            var A = y.generateComponentPathValues(t);return new fa.UnresolvedInstruction(function () {
	              return y.handler.resolveComponentType().then(function (g) {
	                return f._generate(a, b, c, d, e);
	              });
	            }, A.urlPath, ia.convertUrlParamsToArray(A.urlParams));
	          }h = d ? r.generateAuxiliary(v, t) : r.generate(v, t);
	        }for (; s < a.length && o(a[s]);) {
	          var B = [m],
	              C = this._generate(a[s], B, null, !0, e);i[C.component.urlPath] = C, s += 1;
	        }var D = new fa.ResolvedInstruction(h, null, i);if (j(h) && j(h.componentType)) {
	          var E = null;if (h.terminal) s >= a.length;else {
	            var F = b.concat([D]),
	                G = a.slice(s);E = this._generate(G, F, null, !1, e);
	          }D.child = E;
	        }return D;
	      }, a.prototype.hasRoute = function (a, b) {
	        var c = this._rules.get(b);return !k(c) && c.hasRoute(a);
	      }, a.prototype.generateDefault = function (a) {
	        var b = this;if (k(a)) return null;var c = this._rules.get(a);if (k(c) || k(c.defaultRule)) return null;var d = null;if (j(c.defaultRule.handler.componentType)) {
	          var e = c.defaultRule.generate({});return c.defaultRule.terminal || (d = this.generateDefault(c.defaultRule.handler.componentType)), new fa.DefaultInstruction(e, d);
	        }return new fa.UnresolvedInstruction(function () {
	          return c.defaultRule.handler.resolveComponentType().then(function (c) {
	            return b.generateDefault(a);
	          });
	        });
	      }, a;
	    }();D.RouteRegistry = Ra;var H = this && this.__extends || function (a, b) {
	      function d() {
	        this.constructor = a;
	      }for (var c in b) {
	        b.hasOwnProperty(c) && (a[c] = b[c]);
	      }a.prototype = null === b ? Object.create(b) : (d.prototype = b.prototype, new d());
	    },
	        Wa = E("./lifecycle/route_lifecycle_reflector"),
	        Xa = q.resolve(!0),
	        Ya = q.resolve(!1),
	        Za = function () {
	      function a(a, b, c) {
	        this.registry = a, this.parent = b, this.hostComponent = c, this.navigating = !1, this._currentInstruction = null, this._currentNavigation = Xa, this._outlet = null, this._auxRouters = new Map(), this._subject = new y();
	      }return a.prototype.childRouter = function (a) {
	        return this._childRouter = new _a(this, a);
	      }, a.prototype.auxRouter = function (a) {
	        return new _a(this, a);
	      }, a.prototype.registerPrimaryOutlet = function (a) {
	        if (j(a.name)) throw new z("registerPrimaryOutlet expects to be called with an unnamed outlet.");if (j(this._outlet)) throw new z("Primary outlet is already registered.");return this._outlet = a, j(this._currentInstruction) ? this.commit(this._currentInstruction, !1) : Xa;
	      }, a.prototype.unregisterPrimaryOutlet = function (a) {
	        if (j(a.name)) throw new z("registerPrimaryOutlet expects to be called with an unnamed outlet.");this._outlet = null;
	      }, a.prototype.registerAuxOutlet = function (a) {
	        var b = a.name;if (k(b)) throw new z("registerAuxOutlet expects to be called with an outlet with a name.");var c = this.auxRouter(this.hostComponent);this._auxRouters.set(b, c), c._outlet = a;var d;return j(this._currentInstruction) && j(d = this._currentInstruction.auxInstruction[b]) ? c.commit(d) : Xa;
	      }, a.prototype.isRouteActive = function (a) {
	        for (var b = this; j(b.parent) && j(a.child);) {
	          b = b.parent, a = a.child;
	        }return j(this._currentInstruction) && this._currentInstruction.component == a.component;
	      }, a.prototype.config = function (a) {
	        var b = this;return a.forEach(function (a) {
	          b.registry.config(b.hostComponent, a);
	        }), this.renavigate();
	      }, a.prototype.navigate = function (a) {
	        var b = this.generate(a);return this.navigateByInstruction(b, !1);
	      }, a.prototype.navigateByUrl = function (a, b) {
	        var c = this;return void 0 === b && (b = !1), this._currentNavigation = this._currentNavigation.then(function (d) {
	          return c.lastNavigationAttempt = a, c._startNavigating(), c._afterPromiseFinishNavigating(c.recognize(a).then(function (a) {
	            return !k(a) && c._navigate(a, b);
	          }));
	        });
	      }, a.prototype.navigateByInstruction = function (a, b) {
	        var c = this;return void 0 === b && (b = !1), k(a) ? Ya : this._currentNavigation = this._currentNavigation.then(function (d) {
	          return c._startNavigating(), c._afterPromiseFinishNavigating(c._navigate(a, b));
	        });
	      }, a.prototype._settleInstruction = function (a) {
	        var b = this;return a.resolveComponent().then(function (c) {
	          var d = [];return j(a.component) && (a.component.reuse = !1), j(a.child) && d.push(b._settleInstruction(a.child)), u.forEach(a.auxInstruction, function (a, c) {
	            d.push(b._settleInstruction(a));
	          }), q.all(d);
	        });
	      }, a.prototype._navigate = function (a, b) {
	        var c = this;return this._settleInstruction(a).then(function (b) {
	          return c._routerCanReuse(a);
	        }).then(function (b) {
	          return c._canActivate(a);
	        }).then(function (d) {
	          return !!d && c._routerCanDeactivate(a).then(function (d) {
	            if (d) return c.commit(a, b).then(function (b) {
	              return c._emitNavigationFinish(a.toRootUrl()), !0;
	            });
	          });
	        });
	      }, a.prototype._emitNavigationFinish = function (a) {
	        A.callEmit(this._subject, a);
	      }, a.prototype._afterPromiseFinishNavigating = function (a) {
	        var b = this;return q.catchError(a.then(function (a) {
	          return b._finishNavigating();
	        }), function (a) {
	          throw b._finishNavigating(), a;
	        });
	      }, a.prototype._routerCanReuse = function (a) {
	        var b = this;return k(this._outlet) ? Ya : k(a.component) ? Xa : this._outlet.routerCanReuse(a.component).then(function (c) {
	          if (a.component.reuse = c, c && j(b._childRouter) && j(a.child)) return b._childRouter._routerCanReuse(a.child);
	        });
	      }, a.prototype._canActivate = function (a) {
	        return ab(a, this._currentInstruction);
	      }, a.prototype._routerCanDeactivate = function (a) {
	        var b = this;if (k(this._outlet)) return Xa;var c,
	            d = null,
	            e = !1,
	            f = null;return j(a) && (d = a.child, f = a.component, e = k(a.component) || a.component.reuse), c = e ? Xa : this._outlet.routerCanDeactivate(f), c.then(function (a) {
	          return 0 != a && (!j(b._childRouter) || b._childRouter._routerCanDeactivate(d));
	        });
	      }, a.prototype.commit = function (a, b) {
	        var c = this;void 0 === b && (b = !1), this._currentInstruction = a;var d = Xa;if (j(this._outlet) && j(a.component)) {
	          var e = a.component;d = e.reuse ? this._outlet.reuse(e) : this.deactivate(a).then(function (a) {
	            return c._outlet.activate(e);
	          }), j(a.child) && (d = d.then(function (b) {
	            if (j(c._childRouter)) return c._childRouter.commit(a.child);
	          }));
	        }var f = [];return this._auxRouters.forEach(function (b, c) {
	          j(a.auxInstruction[c]) && f.push(b.commit(a.auxInstruction[c]));
	        }), d.then(function (a) {
	          return q.all(f);
	        });
	      }, a.prototype._startNavigating = function () {
	        this.navigating = !0;
	      }, a.prototype._finishNavigating = function () {
	        this.navigating = !1;
	      }, a.prototype.subscribe = function (a) {
	        return A.subscribe(this._subject, a);
	      }, a.prototype.deactivate = function (a) {
	        var b = this,
	            c = null,
	            d = null;j(a) && (c = a.child, d = a.component);var e = Xa;return j(this._childRouter) && (e = this._childRouter.deactivate(c)), j(this._outlet) && (e = e.then(function (a) {
	          return b._outlet.deactivate(d);
	        })), e;
	      }, a.prototype.recognize = function (a) {
	        var b = this._getAncestorInstructions();return this.registry.recognize(a, b);
	      }, a.prototype._getAncestorInstructions = function () {
	        for (var a = [this._currentInstruction], b = this; j(b = b.parent);) {
	          a.unshift(b._currentInstruction);
	        }return a;
	      }, a.prototype.renavigate = function () {
	        return k(this.lastNavigationAttempt) ? this._currentNavigation : this.navigateByUrl(this.lastNavigationAttempt);
	      }, a.prototype.generate = function (a) {
	        var b = this._getAncestorInstructions();return this.registry.generate(a, b);
	      }, a;
	    }();D.Router = Za;var $a = function (a) {
	      function b(b, c, d) {
	        var e = this;a.call(this, b, null, d), this._location = c, this._locationSub = this._location.subscribe(function (a) {
	          e.recognize(a.url).then(function (b) {
	            e.navigateByInstruction(b, j(a.pop)).then(function (c) {
	              if (!j(a.pop) || "hashchange" == a.type) {
	                var d = b.toUrlPath(),
	                    f = b.toUrlQuery();d.length > 0 && "/" != d[0] && (d = "/" + d), "hashchange" == a.type ? b.toRootUrl() != e._location.path() && e._location.replaceState(d, f) : e._location.go(d, f);
	              }
	            });
	          });
	        }), this.registry.configFromComponent(d), this.navigateByUrl(c.path());
	      }return H(b, a), b.prototype.commit = function (b, c) {
	        var d = this;void 0 === c && (c = !1);var e = b.toUrlPath(),
	            f = b.toUrlQuery();e.length > 0 && "/" != e[0] && (e = "/" + e);var g = a.prototype.commit.call(this, b);return c || (g = g.then(function (a) {
	          d._location.go(e, f);
	        })), g;
	      }, b.prototype.dispose = function () {
	        j(this._locationSub) && (A.dispose(this._locationSub), this._locationSub = null);
	      }, b;
	    }(Za);D.RootRouter = $a;var _a = function (a) {
	      function b(b, c) {
	        a.call(this, b.registry, b, c), this.parent = b;
	      }return H(b, a), b.prototype.navigateByUrl = function (a, b) {
	        return void 0 === b && (b = !1), this.parent.navigateByUrl(a, b);
	      }, b.prototype.navigateByInstruction = function (a, b) {
	        return void 0 === b && (b = !1), this.parent.navigateByInstruction(a, b);
	      }, b;
	    }(Za);D.getCanActivateHook = function (a) {
	      var b = c.getTypeByName(a);return b && b.$canActivate && function (a, c) {
	        return f.invoke(b.$canActivate, null, { $nextInstruction: a, $prevInstruction: c });
	      };
	    }, D.assertComponentExists = function () {}, angular.stringifyInstruction = function (a) {
	      return a.toRootUrl();
	    };var Ra = D.RouteRegistry,
	        $a = D.RootRouter,
	        bb = new Ra(g),
	        cb = new C();c(function (a, b) {
	      angular.isArray(b.$routeConfig) && b.$routeConfig.forEach(function (b) {
	        bb.config(a, b);
	      });
	    });var db = new $a(bb, cb, g);return e.$watch(function () {
	      return b.url();
	    }, function (a) {
	      db.lastNavigationAttempt !== a && db.navigateByUrl(a);
	    }), db.subscribe(function () {
	      e.$broadcast("$routeChangeSuccess", {});
	    }), db;
	  }var b = function () {
	    function a() {
	      this.directiveBuffer = [], this.directiveFactoriesByName = {}, this.onDirectiveRegistered = null;
	    }return a.prototype.register = function (a, b) {
	      angular.isArray(b) && (b = b[b.length - 1]), this.directiveFactoriesByName[a] = b, this.onDirectiveRegistered ? this.onDirectiveRegistered(a, b) : this.directiveBuffer.push({ name: a, factory: b });
	    }, a.prototype.$get = function () {
	      var a = this,
	          b = function b(_b) {
	        for (a.onDirectiveRegistered = _b; a.directiveBuffer.length > 0;) {
	          var c = a.directiveBuffer.pop();a.onDirectiveRegistered(c.name, c.factory);
	        }
	      };return b.getTypeByName = function (b) {
	        return a.directiveFactoriesByName[b];
	      }, b;
	    }, a;
	  }();angular.module("ngComponentRouter", []).directive("ngOutlet", ["$animate", "$q", "$rootRouter", c]).directive("ngOutlet", ["$compile", d]).directive("ngLink", ["$rootRouter", "$parse", f]).directive("$router", ["$q", e]), angular.module("ng").provider("$$directiveIntrospector", b).config(["$compileProvider", "$$directiveIntrospectorProvider", a]), angular.module("ngComponentRouter").value("$route", null).value("$routerRootComponent", new Object()).factory("$rootRouter", ["$q", "$location", "$$directiveIntrospector", "$browser", "$rootScope", "$injector", "$routerRootComponent", h]);
	}();

/***/ },

/***/ 33:
/***/ function(module, exports) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*!
	 * Angular Material Design
	 * https://github.com/angular/material
	 * @license MIT
	 * v1.1.0
	 */!function(e,t,n){"use strict";!function(){t.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.gestures","material.core.layout","material.core.theming.palette","material.core.theming","material.core.animate","material.components.autocomplete","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.chips","material.components.colors","material.components.content","material.components.datepicker","material.components.dialog","material.components.divider","material.components.fabActions","material.components.fabShared","material.components.fabSpeedDial","material.components.fabToolbar","material.components.gridList","material.components.icon","material.components.input","material.components.list","material.components.menu","material.components.menuBar","material.components.navBar","material.components.panel","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.select","material.components.showHide","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.tabs","material.components.toast","material.components.toolbar","material.components.tooltip","material.components.virtualRepeat","material.components.whiteframe"]);}(),function(){function e(e,t){if(t.has("$swipe")){var n="You are using the ngTouch module. \nAngular Material already has mobile click, tap, and swipe support... \nngTouch is not supported with Angular Material!";e.warn(n);}}function n(e,t){e.decorator("$$rAF",["$delegate",o]),t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("deep-orange").backgroundPalette("grey");}function o(e){return e.throttle=function(t){var n,o,i,r;return function(){n=arguments,r=this,i=t,o||(o=!0,e(function(){i.apply(r,Array.prototype.slice.call(n)),o=!1;}));};},e;}t.module("material.core",["ngAnimate","material.core.animate","material.core.layout","material.core.gestures","material.core.theming"]).config(n).run(e),e.$inject=["$log","$injector"],n.$inject=["$provide","$mdThemingProvider"],o.$inject=["$delegate"];}(),function(){function e(){return{restrict:"A",link:n};}function n(e,t,n){var o=n.mdAutoFocus||n.mdAutofocus||n.mdSidenavFocus;e.$watch(o,function(e){t.toggleClass("md-autofocus",e);});}t.module("material.core").directive("mdAutofocus",e).directive("mdAutoFocus",e).directive("mdSidenavFocus",e);}(),function(){function e(){function e(e){var t="#"===e[0]?e.substr(1):e,n=t.length/3,o=t.substr(0,n),i=t.substr(n,n),r=t.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),"rgba("+parseInt(o,16)+","+parseInt(i,16)+","+parseInt(r,16)+",0.1)";}function t(e){e=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);var t=e&&4===e.length?"#"+("0"+parseInt(e[1],10).toString(16)).slice(-2)+("0"+parseInt(e[2],10).toString(16)).slice(-2)+("0"+parseInt(e[3],10).toString(16)).slice(-2):"";return t.toUpperCase();}function n(e){return e.replace(")",", 0.1)").replace("(","a(");}function o(e){return e?e.replace("rgba","rgb").replace(/,[^\),]+\)/,")"):"rgb(0,0,0)";}return{rgbaToHex:t,hexToRgba:e,rgbToRgba:n,rgbaToRgb:o};}t.module("material.core").factory("$mdColorUtil",e);}(),function(){function e(e,n,o){function i(e){var t=d+"-"+e,n=a(t),o=n.charAt(0).toLowerCase()+n.substring(1);return r(e)?e:r(n)?n:r(o)?o:e;}function r(e){return t.isDefined(l.style[e]);}function a(e){return e.replace(c,function(e,t,n,o){return o?n.toUpperCase():n;});}var d=e.vendorPrefix,s=/webkit/i.test(d),c=/([:\-_]+(.))/g,l=document.createElement("div"),m={isInputKey:function isInputKey(e){return e.keyCode>=31&&e.keyCode<=90;},isNumPadKey:function isNumPadKey(e){return 3===e.location&&e.keyCode>=97&&e.keyCode<=105;},isNavigationKey:function isNavigationKey(e){var t=m.KEY_CODE,n=[t.SPACE,t.ENTER,t.UP_ARROW,t.DOWN_ARROW];return n.indexOf(e.keyCode)!=-1;},KEY_CODE:{COMMA:188,SEMICOLON:186,ENTER:13,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9,BACKSPACE:8,DELETE:46},CSS:{TRANSITIONEND:"transitionend"+(s?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(s?" webkitAnimationEnd":""),TRANSFORM:i("transform"),TRANSFORM_ORIGIN:i("transformOrigin"),TRANSITION:i("transition"),TRANSITION_DURATION:i("transitionDuration"),ANIMATION_PLAY_STATE:i("animationPlayState"),ANIMATION_DURATION:i("animationDuration"),ANIMATION_NAME:i("animationName"),ANIMATION_TIMING:i("animationTimingFunction"),ANIMATION_DIRECTION:i("animationDirection")},MEDIA:{xs:"(max-width: 599px)","gt-xs":"(min-width: 600px)",sm:"(min-width: 600px) and (max-width: 959px)","gt-sm":"(min-width: 960px)",md:"(min-width: 960px) and (max-width: 1279px)","gt-md":"(min-width: 1280px)",lg:"(min-width: 1280px) and (max-width: 1919px)","gt-lg":"(min-width: 1920px)",xl:"(min-width: 1920px)",landscape:"(orientation: landscape)",portrait:"(orientation: portrait)",print:"print"},MEDIA_PRIORITY:["xl","gt-lg","lg","gt-md","md","gt-sm","sm","gt-xs","xs","landscape","portrait","print"]};return m;}t.module("material.core").factory("$mdConstant",e),e.$inject=["$sniffer","$window","$document"];}(),function(){function e(e,n){function o(){return[].concat(v);}function i(){return v.length;}function r(e){return v.length&&e>-1&&e<v.length;}function a(e){return!!e&&r(u(e)+1);}function d(e){return!!e&&r(u(e)-1);}function s(e){return r(e)?v[e]:null;}function c(e,t){return v.filter(function(n){return n[e]===t;});}function l(e,n){return e?(t.isNumber(n)||(n=v.length),v.splice(n,0,e),u(e)):-1;}function m(e){p(e)&&v.splice(u(e),1);}function u(e){return v.indexOf(e);}function p(e){return e&&u(e)>-1;}function h(){return v.length?v[0]:null;}function f(){return v.length?v[v.length-1]:null;}function g(e,o,i,a){i=i||b;for(var d=u(o);;){if(!r(d))return null;var s=d+(e?-1:1),c=null;if(r(s)?c=v[s]:n&&(c=e?f():h(),s=u(c)),null===c||s===a)return null;if(i(c))return c;t.isUndefined(a)&&(a=s),d=s;}}var b=function b(){return!0;};e&&!t.isArray(e)&&(e=Array.prototype.slice.call(e)),n=!!n;var v=e||[];return{items:o,count:i,inRange:r,contains:p,indexOf:u,itemAt:s,findBy:c,add:l,remove:m,first:h,last:f,next:t.bind(null,g,!1),previous:t.bind(null,g,!0),hasPrevious:d,hasNext:a};}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t;}]);}]);}(),function(){function e(e,n,o){function i(e){var n=u[e];t.isUndefined(n)&&(n=u[e]=r(e));var o=h[n];return t.isUndefined(o)&&(o=a(n)),o;}function r(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t);}function a(e){var t=p[e];return t||(t=p[e]=o.matchMedia(e)),t.addListener(d),h[t.media]=!!t.matches;}function d(e){n.$evalAsync(function(){h[e.media]=!!e.matches;});}function s(e){return p[e];}function c(t,n){for(var o=0;o<e.MEDIA_PRIORITY.length;o++){var i=e.MEDIA_PRIORITY[o];if(p[u[i]].matches){var r=m(t,n+"-"+i);if(t[r])return t[r];}}return t[m(t,n)];}function l(n,o,i){var r=[];return n.forEach(function(n){var a=m(o,n);t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,null)));for(var d in e.MEDIA){a=m(o,n+"-"+d),t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,d)));}}),function(){r.forEach(function(e){e();});};}function m(e,t){return f[t]||(f[t]=e.$normalize(t));}var u={},p={},h={},f={};return i.getResponsiveAttribute=c,i.getQuery=s,i.watchResponsiveAttributes=l,i;}t.module("material.core").factory("$mdMedia",e),e.$inject=["$mdConstant","$rootScope","$window"];}(),function(){function e(e,n){function o(e){return e=t.isArray(e)?e:[e],e.forEach(function(t){d.forEach(function(n){e.push(n+"-"+t);});}),e;}function i(e){return e=t.isArray(e)?e:[e],o(e).map(function(e){return"["+e+"]";}).join(",");}function r(e,t){e=e[0]||e;for(var n=o(t),i=0;i<n.length;i++){if(e.hasAttribute(n[i]))return!0;}return!1;}function a(e,t){e=e[0]||e,o(t).forEach(function(t){e.removeAttribute(t);});}var d=["data","x"];return e?n?i(e):o(e):{buildList:o,buildSelector:i,hasAttribute:r,removeAttribute:a};}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.prefixer=e,t;}]);}]);}(),function(){function o(o,r,a,d,s,c,l,m,u,p){function h(e){return e?f(e)||g(e)?e:e+"px":"0";}function f(e){return String(e).indexOf("px")>-1;}function g(e){return String(e).indexOf("%")>-1;}function b(e){return e[0]||e;}var v=c.startSymbol(),E=c.endSymbol(),$="{{"===v&&"}}"===E,C=function C(e,n,o){var i=!1;if(e&&e.length){var r=u.getComputedStyle(e[0]);i=t.isDefined(r[n])&&(!o||r[n]==o);}return i;},y={dom:{},now:e.performance?t.bind(e.performance,e.performance.now):Date.now||function(){return new Date().getTime();},bidi:function bidi(e,n,i,r){var a=!("rtl"==o[0].dir||"rtl"==o[0].body.dir);if(0==arguments.length)return a?"ltr":"rtl";var d=t.element(e);a&&t.isDefined(i)?d.css(n,h(i)):!a&&t.isDefined(r)&&d.css(n,h(r));},bidiProperty:function bidiProperty(e,n,i,r){var a=!("rtl"==o[0].dir||"rtl"==o[0].body.dir),d=t.element(e);a&&t.isDefined(n)?(d.css(n,h(r)),d.css(i,"")):!a&&t.isDefined(i)&&(d.css(i,h(r)),d.css(n,""));},clientRect:function clientRect(e,t,n){var o=b(e);t=b(t||o.offsetParent||document.body);var i=o.getBoundingClientRect(),r=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:i.left-r.left,top:i.top-r.top,width:i.width,height:i.height};},offsetRect:function offsetRect(e,t){return y.clientRect(e,t,!0);},nodesToArray:function nodesToArray(e){e=e||[];for(var t=[],n=0;n<e.length;++n){t.push(e.item(n));}return t;},scrollTop:function scrollTop(e){e=t.element(e||o[0].body);var i=e[0]==o[0].body?o[0].body:n,r=i?i.scrollTop+i.parentElement.scrollTop:0;return r||Math.abs(e[0].getBoundingClientRect().top);},findFocusTarget:function findFocusTarget(e,n){function o(e,n){var o,i=e[0].querySelectorAll(n);return i&&i.length&&i.length&&t.forEach(i,function(e){e=t.element(e);var n=e.hasClass("md-autofocus");n&&(o=e);}),o;}var i,r=this.prefixer("md-autofocus",!0);return i=o(e,n||r),i||n==r||(i=o(e,this.prefixer("md-auto-focus",!0)),i||(i=o(e,r))),i;},disableScrollAround:function disableScrollAround(e,n,i){function r(e){function n(e){e.preventDefault();}e=t.element(e||s);var o;return i&&i.disableScrollMask?o=e:(e=e[0],o=t.element('<div class="md-scroll-mask">  <div class="md-scroll-mask-bar"></div></div>'),e.appendChild(o[0])),o.on("wheel",n),o.on("touchmove",n),function(){o.off("wheel"),o.off("touchmove"),o[0].parentNode.removeChild(o[0]),delete y.disableScrollAround._enableScrolling;};}function a(){var e=s.parentNode,t=e.style.cssText||"",n=s.style.cssText||"",o=y.scrollTop(s),i=s.clientWidth;return s.scrollHeight>s.clientHeight+1&&(d(s,{position:"fixed",width:"100%",top:-o+"px"}),e.style.overflowY="scroll"),s.clientWidth<i&&d(s,{overflow:"hidden"}),function(){s.style.cssText=n,e.style.cssText=t,s.scrollTop=o,e.scrollTop=o;};}function d(e,t){for(var n in t){e.style[n]=t[n];}}if(y.disableScrollAround._count=y.disableScrollAround._count||0,++y.disableScrollAround._count,y.disableScrollAround._enableScrolling)return y.disableScrollAround._enableScrolling;var s=o[0].body,c=a(),l=r(n);return y.disableScrollAround._enableScrolling=function(){--y.disableScrollAround._count||(c(),l(),delete y.disableScrollAround._enableScrolling);};},enableScrolling:function enableScrolling(){var e=this.disableScrollAround._enableScrolling;e&&e();},floatingScrollbars:function floatingScrollbars(){if(this.floatingScrollbars.cached===n){var e=t.element("<div><div></div></div>").css({width:"100%","z-index":-1,position:"absolute",height:"35px","overflow-y":"scroll"});e.children().css("height","60px"),o[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove();}return this.floatingScrollbars.cached;},forceFocus:function forceFocus(t){var n=t[0]||t;document.addEventListener("click",function i(e){e.target===n&&e.$focus&&(n.focus(),e.stopImmediatePropagation(),e.preventDefault(),n.removeEventListener("click",i));},!0);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!1,!0,e,{},0,0,0,0,!1,!1,!1,!1,0,null),o.$material=!0,o.$focus=!0,n.dispatchEvent(o);},createBackdrop:function createBackdrop(e,t){return a(y.supplant('<md-backdrop class="{0}">',[t]))(e);},supplant:function supplant(e,t,n){return n=n||/\{([^\{\}]*)\}/g,e.replace(n,function(e,n){var o=n.split("."),i=t;try{for(var r in o){o.hasOwnProperty(r)&&(i=i[o[r]]);}}catch(a){i=e;}return"string"==typeof i||"number"==typeof i?i:e;});},fakeNgModel:function fakeNgModel(){return{$fake:!0,$setTouched:t.noop,$setViewValue:function $setViewValue(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e();});},$isEmpty:function $isEmpty(e){return 0===(""+e).length;},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:t.noop};},debounce:function debounce(e,t,o,i){var a;return function(){var d=o,s=Array.prototype.slice.call(arguments);r.cancel(a),a=r(function(){a=n,e.apply(d,s);},t||10,i);};},throttle:function throttle(e,t){var n;return function(){var o=this,i=arguments,r=y.now();(!n||r-n>t)&&(e.apply(o,i),n=r);};},time:function time(e){var t=y.now();return e(),y.now()-t;},valueOnUse:function valueOnUse(e,t,n){var o=null,i=Array.prototype.slice.call(arguments),r=i.length>3?i.slice(3):[];Object.defineProperty(e,t,{get:function get(){return null===o&&(o=n.apply(e,r)),o;}});},nextUid:function nextUid(){return""+i++;},disconnectScope:function disconnectScope(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null;}},reconnectScope:function reconnectScope(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t;}},getClosest:function getClosest(e,n,o){if(t.isString(n)){var i=n.toUpperCase();n=function n(e){return e.nodeName===i;};}if(e instanceof t.element&&(e=e[0]),o&&(e=e.parentNode),!e)return null;do{if(n(e))return e;}while(e=e.parentNode);return null;},elementContains:function elementContains(n,o){var i=e.Node&&e.Node.prototype&&Node.prototype.contains,r=i?t.bind(n,n.contains):t.bind(n,function(e){return n===o||!!(16&this.compareDocumentPosition(e));});return r(o);},extractElementByName:function extractElementByName(e,n,o,i){function r(e){return a(e)||(o?d(e):null);}function a(e){if(e)for(var t=0,o=e.length;t<o;t++){if(e[t].nodeName.toLowerCase()===n)return e[t];}return null;}function d(e){var t;if(e)for(var n=0,o=e.length;n<o;n++){var i=e[n];if(!t)for(var a=0,d=i.childNodes.length;a<d;a++){t=t||r([i.childNodes[a]]);}}return t;}var s=r(e);return!s&&i&&l.warn(y.supplant("Unable to find node '{0}' in element '{1}'.",[n,e[0].outerHTML])),t.element(s||e);},initOptionalProperties:function initOptionalProperties(e,n,o){o=o||{},t.forEach(e.$$isolateBindings,function(i,r){if(i.optional&&t.isUndefined(e[r])){var a=t.isDefined(n[i.attrName]);e[r]=t.isDefined(o[r])?o[r]:a;}});},nextTick:function nextTick(e,t,n){function o(){var e=i.queue,t=i.digest;i.queue=[],i.timeout=null,i.digest=!1,e.forEach(function(e){var t=e.scope&&e.scope.$$destroyed;t||e.callback();}),t&&d.$digest();}var i=y.nextTick,a=i.timeout,s=i.queue||[];return s.push({scope:n,callback:e}),null==t&&(t=!0),i.digest=i.digest||t,i.queue=s,a||(i.timeout=r(o,0,!1));},processTemplate:function processTemplate(e){return $?e:e&&t.isString(e)?e.replace(/\{\{/g,v).replace(/}}/g,E):e;},getParentWithPointerEvents:function getParentWithPointerEvents(e){for(var t=e.parent();C(t,"pointer-events","none");){t=t.parent();}return t;},getNearestContentElement:function getNearestContentElement(e){for(var t=e.parent()[0];t&&t!==m[0]&&t!==document.body&&"MD-CONTENT"!==t.nodeName.toUpperCase();){t=t.parentNode;}return t;},checkStickySupport:function checkStickySupport(){var e,n=t.element("<div>");o[0].body.appendChild(n[0]);for(var i=["sticky","-webkit-sticky"],r=0;r<i.length;++r){if(n.css({position:i[r],top:0,"z-index":2}),n.css("position")==i[r]){e=i[r];break;}}return n.remove(),e;},parseAttributeBoolean:function parseAttributeBoolean(e,t){return""===e||!!e&&(t===!1||"false"!==e&&"0"!==e);},hasComputedStyle:C,isParentFormSubmitted:function isParentFormSubmitted(e){var n=y.getClosest(e,"form"),o=n?t.element(n).controller("form"):null;return!!o&&o.$submitted;},animateScrollTo:function animateScrollTo(e,t){function n(){var i=o();e.scrollTop=i,(d?i<t:i>t)&&p(n);}function o(){var e=1e3,t=y.now()-s;return i(t,r,a,e);}function i(e,t,n,o){if(e>o)return t+n;var i=(e/=o)*e,r=i*e;return t+n*(-2*r+3*i);}var r=e.scrollTop,a=t-r,d=r<t,s=y.now();p(n);}};return y.dom.animator=s(y),y;}var i=0;t.module("material.core").factory("$mdUtil",o),o.$inject=["$document","$timeout","$compile","$rootScope","$$mdAnimate","$interpolate","$log","$rootElement","$window","$$rAF"],t.element.prototype.focus=t.element.prototype.focus||function(){return this.length&&this[0].focus(),this;},t.element.prototype.blur=t.element.prototype.blur||function(){return this.length&&this[0].blur(),this;};}(),function(){function e(){function e(){t.showWarnings=!1;}var t=this;return t.showWarnings=!0,{disableWarnings:e,$get:["$$rAF","$log","$window","$interpolate",function(e,o,i,r){return n.apply(t,arguments);}]};}function n(e,n,o,i){function r(e,o,i){var r=t.element(e)[0]||e;!r||r.hasAttribute(o)&&0!==r.getAttribute(o).length||l(r,o)||(i=t.isString(i)?i.trim():"",i.length?e.attr(o,i):m&&n.warn('ARIA: Attribute "',o,'", required for accessibility, is missing on node:',r));}function a(t,n,o){e(function(){r(t,n,o());});}function d(e,t){var n=c(e)||"",o=n.indexOf(i.startSymbol())>-1;o?a(e,t,function(){return c(e);}):r(e,t,n);}function s(e,t){var n=c(e),o=n.indexOf(i.startSymbol())>-1;o||n||r(e,t,n);}function c(e){function t(t){for(;t.parentNode&&(t=t.parentNode)!==e;){if(t.getAttribute&&"true"===t.getAttribute("aria-hidden"))return!0;}}e=e[0]||e;for(var n,o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1),i="";n=o.nextNode();){t(n)||(i+=n.textContent);}return i.trim()||"";}function l(e,t){function n(e){var t=e.currentStyle?e.currentStyle:o.getComputedStyle(e);return"none"===t.display;}var i=e.hasChildNodes(),r=!1;if(i)for(var a=e.childNodes,d=0;d<a.length;d++){var s=a[d];1===s.nodeType&&s.hasAttribute(t)&&(n(s)||(r=!0));}return r;}var m=this.showWarnings;return{expect:r,expectAsync:a,expectWithText:d,expectWithoutText:s};}t.module("material.core").provider("$mdAria",e),n.$inject=["$$rAF","$log","$window","$interpolate"];}(),function(){function e(e,n,o,i,r){this.compile=function(a){var d=a.templateUrl,s=a.template||"",c=a.controller,l=a.controllerAs,m=t.extend({},a.resolve||{}),u=t.extend({},a.locals||{}),p=a.transformTemplate||t.identity,h=a.bindToController;return t.forEach(m,function(e,n){t.isString(e)?m[n]=o.get(e):m[n]=o.invoke(e);}),t.extend(m,u),d?m.$template=n(d).then(function(e){return e;}):m.$template=e.when(s),e.all(m).then(function(e){var n,o=p(e.$template,a),d=a.element||t.element("<div>").html(o.trim()).contents(),s=i(d);return n={locals:e,element:d,link:function link(o){if(e.$scope=o,c){var i=r(c,e,!0);h&&t.extend(i.instance,e);var a=i();d.data("$ngControllerController",a),d.children().data("$ngControllerController",a),l&&(o[l]=a),n.controller=a;}return s(o);}};});};}t.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$templateRequest","$injector","$compile","$controller"];}(),function(){function n(){}function o(n,o,i){function r(e){return function(t,n){n.distance<this.state.options.maxDistance&&this.dispatchEvent(t,e,n);};}function a(e,t,n){var o=h[t.replace(/^\$md./,"")];if(!o)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(h).join(", "));return o.registerElement(e,n);}function s(e,o){var i=new n(e);return t.extend(i,o),h[e]=i,v;}function c(){for(var e=document.createElement("div"),n=["","webkit","Moz","MS","ms","o"],o=0;o<n.length;o++){var i=n[o],r=i?i+"TouchAction":"touchAction";if(t.isDefined(e.style[r]))return r;}}var m=navigator.userAgent||navigator.vendor||e.opera,u=m.match(/ipad|iphone|ipod/i),p=m.match(/android/i),g=c(),b="undefined"!=typeof e.jQuery&&t.element===e.jQuery,v={handler:s,register:a,isIos:u,isAndroid:p,isHijackingClicks:(u||p)&&!b&&!f};if(v.isHijackingClicks){var E=6;v.handler("click",{options:{maxDistance:E},onEnd:r("click")}),v.handler("focus",{options:{maxDistance:E},onEnd:function onEnd(e,t){function n(e){var t=["INPUT","SELECT","BUTTON","TEXTAREA","VIDEO","AUDIO"];return"-1"!=e.getAttribute("tabindex")&&!e.hasAttribute("DISABLED")&&(e.hasAttribute("tabindex")||e.hasAttribute("href")||e.isContentEditable||t.indexOf(e.nodeName)!=-1);}t.distance<this.state.options.maxDistance&&n(e.target)&&(this.dispatchEvent(e,"focus",t),e.target.focus());}}),v.handler("mouseup",{options:{maxDistance:E},onEnd:r("mouseup")}),v.handler("mousedown",{onStart:function onStart(e){this.dispatchEvent(e,"mousedown");}});}return v.handler("press",{onStart:function onStart(e,t){this.dispatchEvent(e,"$md.pressdown");},onEnd:function onEnd(e,t){this.dispatchEvent(e,"$md.pressup");}}).handler("hold",{options:{maxDistance:6,delay:500},onCancel:function onCancel(){i.cancel(this.state.timeout);},onStart:function onStart(e,n){return this.state.registeredParent?(this.state.pos={x:n.x,y:n.y},void(this.state.timeout=i(t.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel();}),this.state.options.delay,!1))):this.cancel();},onMove:function onMove(e,t){g||"touchmove"!==e.type||e.preventDefault();var n=this.state.pos.x-t.x,o=this.state.pos.y-t.y;Math.sqrt(n*n+o*o)>this.options.maxDistance&&this.cancel();},onEnd:function onEnd(){this.onCancel();}}).handler("drag",{options:{minDistance:6,horizontal:!0,cancelMultiplier:1.5},onSetup:function onSetup(e,t){g&&(this.oldTouchAction=e[0].style[g],e[0].style[g]=t.horizontal===!1?"pan-y":"pan-x");},onCleanup:function onCleanup(e){this.oldTouchAction&&(e[0].style[g]=this.oldTouchAction);},onStart:function onStart(e){this.state.registeredParent||this.cancel();},onMove:function onMove(e,t){var n,o;g||"touchmove"!==e.type||e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,o=Math.abs(t.distanceY)>this.state.options.minDistance*this.state.options.cancelMultiplier):(n=Math.abs(t.distanceY)>this.state.options.minDistance,o=Math.abs(t.distanceX)>this.state.options.minDistance*this.state.options.cancelMultiplier),n?(this.state.dragPointer=d(e),l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):o&&this.cancel());},dispatchDragMove:o.throttle(function(e){this.state.isRunning&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer));}),onEnd:function onEnd(e,t){this.state.dragPointer&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer));}}).handler("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function onEnd(e,t){var n;Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance?(n="left"==t.directionX?"$md.swipeleft":"$md.swiperight",this.dispatchEvent(e,n)):Math.abs(t.velocityY)>this.state.options.minVelocity&&Math.abs(t.distanceY)>this.state.options.minDistance&&(n="up"==t.directionY?"$md.swipeup":"$md.swipedown",this.dispatchEvent(e,n));}});}function i(e){this.name=e,this.state={};}function r(){function n(e,n,o){o=o||u;var i=new t.element.Event(n);i.$material=!0,i.pointer=o,i.srcEvent=e,t.extend(i,{clientX:o.x,clientY:o.y,screenX:o.x,screenY:o.y,pageX:o.x,pageY:o.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),t.element(o.target).trigger(i);}function o(t,n,o){o=o||u;var i;"click"===n||"mouseup"==n||"mousedown"==n?(i=document.createEvent("MouseEvents"),i.initMouseEvent(n,!0,!0,e,t.detail,o.x,o.y,o.x,o.y,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget||null)):(i=document.createEvent("CustomEvent"),i.initCustomEvent(n,!0,!0,{})),i.$material=!0,i.pointer=o,i.srcEvent=t,o.target.dispatchEvent(i);}var r="undefined"!=typeof e.jQuery&&t.element===e.jQuery;return i.prototype={options:{},dispatchEvent:r?n:o,onSetup:t.noop,onCleanup:t.noop,onStart:t.noop,onMove:t.noop,onEnd:t.noop,onCancel:t.noop,start:function start(e,n){if(!this.state.isRunning){var o=this.getNearestParent(e.target),i=o&&o.$mdGesture[this.name]||{};this.state={isRunning:!0,options:t.extend({},this.options,i),registeredParent:o},this.onStart(e,n);}},move:function move(e,t){this.state.isRunning&&this.onMove(e,t);},end:function end(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1);},cancel:function cancel(e,t){this.onCancel(e,t),this.state={};},getNearestParent:function getNearestParent(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode;}return null;},registerElement:function registerElement(e,t){function n(){delete e[0].$mdGesture[o.name],e.off("$destroy",n),o.onCleanup(e,t||{});}var o=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),o.onSetup(e,t||{}),n;}},i;}function a(e,n){function o(e){var t=!e.clientX&&!e.clientY;t||e.$material||e.isIonicTap||c(e)||(e.preventDefault(),e.stopPropagation());}function i(e){var t=0===e.clientX&&0===e.clientY;t||e.$material||e.isIonicTap||c(e)?(g=null,"label"==e.target.tagName.toLowerCase()&&(g={x:e.x,y:e.y})):(e.preventDefault(),e.stopPropagation(),g=null);}function r(e,t){var o;for(var i in h){o=h[i],o instanceof n&&("start"===e&&o.cancel(),o[e](t,u));}}function a(e){if(!u){var t=+Date.now();p&&!s(e,p)&&t-p.endTime<1500||(u=d(e),r("start",e));}}function m(e){u&&s(e,u)&&(l(e,u),r("move",e));}function f(e){u&&s(e,u)&&(l(e,u),u.endTime=+Date.now(),r("end",e),p=u,u=null);}document.contains||(document.contains=function(e){return document.body.contains(e);}),!b&&e.isHijackingClicks&&(document.addEventListener("click",i,!0),document.addEventListener("mouseup",o,!0),document.addEventListener("mousedown",o,!0),document.addEventListener("focus",o,!0),b=!0);var v="mousedown touchstart pointerdown",E="mousemove touchmove pointermove",$="mouseup mouseleave touchend touchcancel pointerup pointercancel";t.element(document).on(v,a).on(E,m).on($,f).on("$$mdGestureReset",function(){p=u=null;});}function d(e){var t=m(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n;}function s(e,t){return e&&t&&e.type.charAt(0)===t.type;}function c(e){return g&&g.x==e.x&&g.y==e.y;}function l(e,t){var n=m(e),o=t.x=n.pageX,i=t.y=n.pageY;t.distanceX=o-t.startX,t.distanceY=i-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"down":t.distanceY<0?"up":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration;}function m(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e;}var u,p,h={},f=!1,g=null,b=!1;t.module("material.core.gestures",[]).provider("$mdGesture",n).factory("$$MdGestureHandler",r).run(a),n.prototype={skipClickHijack:function skipClickHijack(){return f=!0;},$get:["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){return new o(e,t,n);}]},o.$inject=["$$MdGestureHandler","$$rAF","$timeout"],a.$inject=["$mdGesture","$$MdGestureHandler"];}(),function(){function e(){function e(e){function n(e){return s.optionsFactory=e.options,s.methods=(e.methods||[]).concat(a),c;}function o(e,t){return d[e]=t,c;}function i(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{};},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return s.presets[t]={methods:n.methods.concat(a),optionsFactory:n.options,argOption:n.argOption},c;}function r(n,o){function i(e){return e=e||{},e._options&&(e=e._options),m.show(t.extend({},l,e));}function r(e){return m.destroy(e);}function a(t,n){var i={};return i[e]=u,o.invoke(t||function(){return n;},{},i);}var c,l,m=n(),u={hide:m.hide,cancel:m.cancel,show:i,destroy:r};return c=s.methods||[],l=a(s.optionsFactory,{}),t.forEach(d,function(e,t){u[t]=e;}),t.forEach(s.presets,function(e,n){function o(e){this._options=t.extend({},i,e);}var i=a(e.optionsFactory,{}),r=(e.methods||[]).concat(c);if(t.extend(i,{$type:n}),t.forEach(r,function(e){o.prototype[e]=function(t){return this._options[e]=t,this;};}),e.argOption){var d="show"+n.charAt(0).toUpperCase()+n.slice(1);u[d]=function(e){var t=u[n](e);return u.show(t);};}u[n]=function(n){return arguments.length&&e.argOption&&!t.isObject(n)&&!t.isArray(n)?new o()[e.argOption](n):new o(n);};}),u;}var a=["onHide","onShow","onRemove"],d={},s={presets:{}},c={setDefaults:n,addPreset:i,addMethod:o,$get:r};return c.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),r.$inject=["$$interimElement","$injector"],c;}function o(e,o,i,r,a,d,s,c,l,m,u){return function(){function p(e){e=e||{};var t=new b(e||{}),n=!e.skipHide&&$.length?v.cancel():o.when(!0);return n["finally"](function(){$.push(t),t.show()["catch"](function(e){return e;});}),t.deferred.promise;}function h(e,t){function i(n){return n.remove(e,!1,t||{})["catch"](function(e){return e;}),n.deferred.promise;}if(!$.length)return o.when(e);if(t=t||{},t.closeAll){var r=o.all($.reverse().map(i));return $=[],r;}if(t.closeTo!==n)return o.all($.splice(t.closeTo).map(i));var a=$.pop();return i(a);}function f(e,n){var i=$.pop();return i?(i.remove(e,!0,n||{})["catch"](function(e){return e;}),i.deferred.promise["catch"](t.noop)):o.when(e);}function g(e){var n=e?null:$.shift(),i=t.element(e).length?t.element(e)[0].parentNode:null;if(i){var r=$.filter(function(e){var t=e.options.element[0];return t===i;});r.length>0&&(n=r[0],$.splice($.indexOf(n),1));}return n?n.remove(E,!1,{$destroy:!0}):o.when(E);}function b(u){function p(){return o(function(e,t){function n(e){M.deferred.reject(e),t(e);}u.onCompiling&&u.onCompiling(u),g(u).then(function(t){T=b(t,u),A=C(T,u,t.controller).then(e,n);},n);});}function h(e,n,i){function r(e){M.deferred.resolve(e);}function a(e){M.deferred.reject(e);}return T?(u=t.extend(u||{},i||{}),u.cancelAutoHide&&u.cancelAutoHide(),u.element.triggerHandler("$mdInterimElementRemove"),u.$destroy===!0?y(u.element,u).then(function(){n&&a(e)||r(e);}):(o.when(A)["finally"](function(){y(u.element,u).then(function(){n&&a(e)||r(e);},a);}),M.deferred.promise)):o.when(!1);}function f(e){return e=e||{},e.template&&(e.template=c.processTemplate(e.template)),t.extend({preserveScope:!1,cancelAutoHide:t.noop,scope:e.scope||r.$new(e.isolateScope),onShow:function onShow(e,t,n){return s.enter(t,n.parent);},onRemove:function onRemove(e,t){return t&&s.leave(t)||o.when();}},e);}function g(e){var t=e.skipCompile?null:l.compile(e);return t||o(function(t){t({locals:{},link:function link(){return e.element;}});});}function b(e,n){t.extend(e.locals,n);var o=e.link(n.scope);return n.element=o,n.parent=E(o,n),n.themable&&m(o),o;}function E(n,o){var i=o.parent;if(i=t.isFunction(i)?i(o.scope,n,o):t.isString(i)?t.element(e[0].querySelector(i)):t.element(i),!(i||{}).length){var r;return d[0]&&d[0].querySelector&&(r=d[0].querySelector(":not(svg) > body")),r||(r=d[0]),"#comment"==r.nodeName&&(r=e[0].body),t.element(r);}return i;}function $(){var e,o=t.noop;u.hideDelay&&(e=a(v.hide,u.hideDelay),o=function o(){a.cancel(e);}),u.cancelAutoHide=function(){o(),u.cancelAutoHide=n;};}function C(e,n,i){var r=n.onShowing||t.noop,a=n.onComplete||t.noop;return r(n.scope,e,n,i),o(function(t,r){try{o.when(n.onShow(n.scope,e,n,i)).then(function(){a(n.scope,e,n),$(),t(e);},r);}catch(d){r(d.message);}});}function y(e,n){var o=n.onRemoving||t.noop;return i(function(t,r){try{var a=i.when(n.onRemove(n.scope,e,n)||!0);o(e,a),1==n.$destroy?t(e):a.then(function(){!n.preserveScope&&n.scope&&n.scope.$destroy(),t(e);},r);}catch(d){r(d);}});}var M,T,A=o.when(!0);return u=f(u),M={options:u,deferred:o.defer(),show:p,remove:h};}var v,E=!1,$=[];return v={show:p,hide:h,cancel:f,destroy:g,$injector_:u};};}return e.$get=o,o.$inject=["$document","$q","$$q","$rootScope","$timeout","$rootElement","$animate","$mdUtil","$mdCompiler","$mdTheming","$injector"],e;}t.module("material.core").provider("$$interimElement",e);}(),function(){!function(){function e(e){function d(e){return e.replace(m,"").replace(u,function(e,t,n,o){return o?n.toUpperCase():n;});}var m=/^((?:x|data)[\:\-_])/i,u=/([\:\-\_]+(.))/g,p=["","xs","gt-xs","sm","gt-sm","md","gt-md","lg","gt-lg","xl","print"],h=["layout","flex","flex-order","flex-offset","layout-align"],f=["show","hide","layout-padding","layout-margin"];t.forEach(p,function(n){t.forEach(h,function(t){var o=n?t+"-"+n:t;e.directive(d(o),r(o));}),t.forEach(f,function(t){var o=n?t+"-"+n:t;e.directive(d(o),a(o));});}),e.provider("$$mdLayout",function(){return{$get:t.noop,validateAttributeValue:l,validateAttributeUsage:c,disableLayouts:function disableLayouts(e){A.enabled=e!==!0;}};}).directive("mdLayoutCss",o).directive("ngCloak",i("ng-cloak")).directive("layoutWrap",a("layout-wrap")).directive("layoutNowrap",a("layout-nowrap")).directive("layoutNoWrap",a("layout-no-wrap")).directive("layoutFill",a("layout-fill")).directive("layoutLtMd",s("layout-lt-md",!0)).directive("layoutLtLg",s("layout-lt-lg",!0)).directive("flexLtMd",s("flex-lt-md",!0)).directive("flexLtLg",s("flex-lt-lg",!0)).directive("layoutAlignLtMd",s("layout-align-lt-md")).directive("layoutAlignLtLg",s("layout-align-lt-lg")).directive("flexOrderLtMd",s("flex-order-lt-md")).directive("flexOrderLtLg",s("flex-order-lt-lg")).directive("offsetLtMd",s("flex-offset-lt-md")).directive("offsetLtLg",s("flex-offset-lt-lg")).directive("hideLtMd",s("hide-lt-md")).directive("hideLtLg",s("hide-lt-lg")).directive("showLtMd",s("show-lt-md")).directive("showLtLg",s("show-lt-lg")).config(n);}function n(){var e=!!document.querySelector("[md-layouts-disabled]");A.enabled=!e;}function o(){return A.enabled=!1,{restrict:"A",priority:"900"};}function i(e){return["$timeout",function(n){return{restrict:"A",priority:-10,compile:function compile(o){return A.enabled?(o.addClass(e),function(t,o){n(function(){o.removeClass(e);},10,!1);}):t.noop;}};}];}function r(e){function n(t,n,o){var i=d(n,e,o),r=o.$observe(o.$normalize(e),i);i(p(e,o,"")),t.$on("$destroy",function(){r();});}return["$mdUtil","$interpolate","$log",function(o,i,r){return g=o,b=i,v=r,{restrict:"A",compile:function compile(o,i){var r;return A.enabled&&(c(e,i,o,v),l(e,p(e,i,""),m(o,e,i)),r=n),r||t.noop;}};}];}function a(e){function n(t,n){n.addClass(e);}return["$mdUtil","$interpolate","$log",function(o,i,r){return g=o,b=i,v=r,{restrict:"A",compile:function compile(o,i){var r;return A.enabled&&(l(e,p(e,i,""),m(o,e,i)),n(null,o),r=n),r||t.noop;}};}];}function d(e,n){var o;return function(i){var r=l(n,i||"");t.isDefined(r)&&(o&&e.removeClass(o),o=r?n+"-"+r.replace($,"-"):n,e.addClass(o));};}function s(e){var n=e.split("-");return["$log",function(o){return o.warn(e+"has been deprecated. Please use a `"+n[0]+"-gt-<xxx>` variant."),t.noop;}];}function c(e,t,n,o){var i,r,a,d=n[0].nodeName.toLowerCase();switch(e.replace(E,"")){case"flex":"md-button"!=d&&"fieldset"!=d||(r="<"+d+" "+e+"></"+d+">",a="https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers",i="Markup '{0}' may not work as expected in IE Browsers. Consult '{1}' for details.",o.warn(g.supplant(i,[r,a])));}}function l(e,n,o){var i=n;if(!u(n)){switch(e.replace(E,"")){case"layout":h(n,y)||(n=y[0]);break;case"flex":h(n,C)||isNaN(n)&&(n="");break;case"flex-offset":case"flex-order":n&&!isNaN(+n)||(n="0");break;case"layout-align":var r=f(n);n=g.supplant("{main}-{cross}",r);break;case"layout-padding":case"layout-margin":case"layout-fill":case"layout-wrap":case"layout-nowrap":case"layout-nowrap":n="";}n!=i&&(o||t.noop)(n);}return n;}function m(e,t,n){return function(e){u(e)||(n[n.$normalize(t)]=e);};}function u(e){return(e||"").indexOf(b.startSymbol())>-1;}function p(e,t,n){var o=t.$normalize(e);return t[o]?t[o].replace($,"-"):n||null;}function h(e,t,n){e=n&&e?e.replace($,n):e;var o=!1;return e&&t.forEach(function(t){t=n?t.replace($,n):t,o=o||t===e;}),o;}function f(e){var t,n={main:"start",cross:"stretch"};return e=e||"",0!=e.indexOf("-")&&0!=e.indexOf(" ")||(e="none"+e),t=e.toLowerCase().trim().replace($,"-").split("-"),t.length&&"space"===t[0]&&(t=[t[0]+"-"+t[1],t[2]]),t.length>0&&(n.main=t[0]||n.main),t.length>1&&(n.cross=t[1]||n.cross),M.indexOf(n.main)<0&&(n.main="start"),T.indexOf(n.cross)<0&&(n.cross="stretch"),n;}var g,b,v,E=/(-gt)?-(sm|md|lg|print)/g,$=/\s+/g,C=["grow","initial","auto","none","noshrink","nogrow"],y=["row","column"],M=["","start","center","end","stretch","space-around","space-between"],T=["","start","center","end","stretch"],A={enabled:!0,breakpoints:[]};e(t.module("material.core.layout",["ng"]));}();}(),function(){function e(e,o){function i(e){return e&&""!==e;}var r,a=[],d={};return r={notFoundError:function notFoundError(t,n){e.error((n||"")+"No instance found for handle",t);},getInstances:function getInstances(){return a;},get:function get(e){if(!i(e))return null;var t,n,o;for(t=0,n=a.length;t<n;t++){if(o=a[t],o.$$mdHandle===e)return o;}return null;},register:function register(e,n){function o(){var t=a.indexOf(e);t!==-1&&a.splice(t,1);}function i(){var t=d[n];t&&(t.forEach(function(t){t.resolve(e);}),delete d[n]);}return n?(e.$$mdHandle=n,a.push(e),i(),o):t.noop;},when:function when(e){if(i(e)){var t=o.defer(),a=r.get(e);return a?t.resolve(a):(d[e]===n&&(d[e]=[]),d[e].push(t)),t.promise;}return o.reject("Invalid `md-component-id` value.");}};}t.module("material.core").factory("$mdComponentRegistry",e),e.$inject=["$log","$q"];}(),function(){!function(){function e(e){function n(e){return e.hasClass("md-icon-button")?{isMenuItem:e.hasClass("md-menu-item"),fitRipple:!0,center:!0}:{isMenuItem:e.hasClass("md-menu-item"),dimBackground:!0};}return{attach:function attach(o,i,r){return r=t.extend(n(i),r),e.attach(o,i,r);}};}t.module("material.core").factory("$mdButtonInkRipple",e),e.$inject=["$mdInkRipple"];}();}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!0,dimBackground:!1,fitRipple:!0},i));}return{attach:n};}t.module("material.core").factory("$mdCheckboxInkRipple",e),e.$inject=["$mdInkRipple"];}();}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i));}return{attach:n};}t.module("material.core").factory("$mdListInkRipple",e),e.$inject=["$mdInkRipple"];}();}(),function(){function e(e,n){return{controller:t.noop,link:function link(t,o,i){i.hasOwnProperty("mdInkRippleCheckbox")?n.attach(t,o):e.attach(t,o);}};}function n(){function e(){n=!0;}var n=!1;return{disableInkRipple:e,$get:["$injector",function(e){function i(i,r,a){return n||r.controller("mdNoInk")?t.noop:e.instantiate(o,{$scope:i,$element:r,rippleOptions:a});}return{attach:i};}]};}function o(e,n,o,i,r,a,d){this.$window=i,this.$timeout=r,this.$mdUtil=a,this.$mdColorUtil=d,this.$scope=e,this.$element=n,this.options=o,this.mousedown=!1,this.ripples=[],this.timeout=null,this.lastRipple=null,a.valueOnUse(this,"container",this.createContainer),this.$element.addClass("md-ink-ripple"),(n.controller("mdInkRipple")||{}).createRipple=t.bind(this,this.createRipple),(n.controller("mdInkRipple")||{}).setColor=t.bind(this,this.color),this.bindEvents();}function i(e,n){(e.mousedown||e.lastRipple)&&(e.mousedown=!1,e.$mdUtil.nextTick(t.bind(e,n),!1));}function r(){return{controller:t.noop};}t.module("material.core").provider("$mdInkRipple",n).directive("mdInkRipple",e).directive("mdNoInk",r).directive("mdNoBar",r).directive("mdNoStretch",r);var a=450;e.$inject=["$mdButtonInkRipple","$mdCheckboxInkRipple"],o.$inject=["$scope","$element","rippleOptions","$window","$timeout","$mdUtil","$mdColorUtil"],o.prototype.color=function(e){function n(){var e=o.options&&o.options.colorElement?o.options.colorElement:[],t=e.length?e[0]:o.$element[0];return t?o.$window.getComputedStyle(t).color:"rgb(0,0,0)";}var o=this;return t.isDefined(e)&&(o._color=o._parseColor(e)),o._color||o._parseColor(o.inkRipple())||o._parseColor(n());},o.prototype.calculateColor=function(){return this.color();},o.prototype._parseColor=function(e,t){t=t||1;var n=this.$mdColorUtil;if(e)return 0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,(.1*t).toString()+")"):0===e.indexOf("rgb")?n.rgbToRgba(e):0===e.indexOf("#")?n.hexToRgba(e):void 0;},o.prototype.bindEvents=function(){this.$element.on("mousedown",t.bind(this,this.handleMousedown)),this.$element.on("mouseup touchend",t.bind(this,this.handleMouseup)),this.$element.on("mouseleave",t.bind(this,this.handleMouseup)),this.$element.on("touchmove",t.bind(this,this.handleTouchmove));},o.prototype.handleMousedown=function(e){if(!this.mousedown)if(e.hasOwnProperty("originalEvent")&&(e=e.originalEvent),this.mousedown=!0,this.options.center)this.createRipple(this.container.prop("clientWidth")/2,this.container.prop("clientWidth")/2);else if(e.srcElement!==this.$element[0]){var t=this.$element[0].getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;this.createRipple(n,o);}else this.createRipple(e.offsetX,e.offsetY);},o.prototype.handleMouseup=function(){i(this,this.clearRipples);},o.prototype.handleTouchmove=function(){i(this,this.deleteRipples);},o.prototype.deleteRipples=function(){for(var e=0;e<this.ripples.length;e++){this.ripples[e].remove();}},o.prototype.clearRipples=function(){for(var e=0;e<this.ripples.length;e++){this.fadeInComplete(this.ripples[e]);}},o.prototype.createContainer=function(){var e=t.element('<div class="md-ripple-container"></div>');return this.$element.append(e),e;},o.prototype.clearTimeout=function(){this.timeout&&(this.$timeout.cancel(this.timeout),this.timeout=null);},o.prototype.isRippleAllowed=function(){var e=this.$element[0];do{if(!e.tagName||"BODY"===e.tagName)break;if(e&&t.isFunction(e.hasAttribute)){if(e.hasAttribute("disabled"))return!1;if("false"===this.inkRipple()||"0"===this.inkRipple())return!1;}}while(e=e.parentNode);return!0;},o.prototype.inkRipple=function(){return this.$element.attr("md-ink-ripple");},o.prototype.createRipple=function(e,n){function o(e,t,n){return e?Math.max(t,n):Math.sqrt(Math.pow(t,2)+Math.pow(n,2));}if(this.isRippleAllowed()){var i=this,r=i.$mdColorUtil,d=t.element('<div class="md-ripple"></div>'),s=this.$element.prop("clientWidth"),c=this.$element.prop("clientHeight"),l=2*Math.max(Math.abs(s-e),e),m=2*Math.max(Math.abs(c-n),n),u=o(this.options.fitRipple,l,m),p=this.calculateColor();d.css({left:e+"px",top:n+"px",background:"black",width:u+"px",height:u+"px",backgroundColor:r.rgbaToRgb(p),borderColor:r.rgbaToRgb(p)}),this.lastRipple=d,this.clearTimeout(),this.timeout=this.$timeout(function(){i.clearTimeout(),i.mousedown||i.fadeInComplete(d);},.35*a,!1),this.options.dimBackground&&this.container.css({backgroundColor:p}),this.container.append(d),this.ripples.push(d),d.addClass("md-ripple-placed"),this.$mdUtil.nextTick(function(){d.addClass("md-ripple-scaled md-ripple-active"),i.$timeout(function(){i.clearRipples();},a,!1);},!1);}},o.prototype.fadeInComplete=function(e){this.lastRipple===e?this.timeout||this.mousedown||this.removeRipple(e):this.removeRipple(e);},o.prototype.removeRipple=function(e){var t=this,n=this.ripples.indexOf(e);n<0||(this.ripples.splice(this.ripples.indexOf(e),1),e.removeClass("md-ripple-active"),e.addClass("md-ripple-remove"),0===this.ripples.length&&this.container.css({backgroundColor:""}),this.$timeout(function(){t.fadeOutComplete(e);},a,!1));},o.prototype.fadeOutComplete=function(e){e.remove(),this.lastRipple=null;};}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i));}return{attach:n};}t.module("material.core").factory("$mdTabInkRipple",e),e.$inject=["$mdInkRipple"];}();}(),function(){t.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100",contrastStrongLightColors:"400 500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A700",contrastStrongLightColors:"600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100 A200",contrastStrongLightColors:"300 400"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#ffffff",A200:"#000000",A400:"#303030",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A200 A400 A700"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100 A200",contrastStrongLightColors:"400 500 700"}});}(),function(){!function(e){function t(e){var t=!!document.querySelector("[md-themes-disabled]");e.disableTheming(t);}function o(t){function o(e,t){return t=t||{},p[e]=r(e,t),m;}function i(t,n){return r(t,e.extend({},p[t]||{},n));}function r(e,t){var n=w.filter(function(e){return!t[e];});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t;}function a(t,n){if(h[t])return h[t];n=n||"default";var o="string"==typeof n?h[n]:n,i=new s(t);return o&&e.forEach(o.colors,function(t,n){i.colors[n]={name:t.name,hues:e.extend({},t.hues)};}),h[t]=i,i;}function s(t){function n(t){if(t=0===arguments.length||!!t,t!==o.isDark){o.isDark=t,o.foregroundPalette=o.isDark?g:f,o.foregroundShadow=o.isDark?b:v;var n=o.isDark?A:T,i=o.isDark?T:A;return e.forEach(n,function(e,t){var n=o.colors[t],r=i[t];if(n)for(var a in n.hues){n.hues[a]===r[a]&&(n.hues[a]=e[a]);}}),o;}}var o=this;o.name=t,o.colors={},o.dark=n,n(!1),y.forEach(function(t){var n=(o.isDark?A:T)[t];o[t+"Palette"]=function(i,r){var a=o.colors[t]={name:i,hues:e.extend({},n,r)};return Object.keys(a.hues).forEach(function(e){if(!n[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",o.name).replace("%3",i).replace("%4",Object.keys(n).join(", ")));}),Object.keys(a.hues).map(function(e){return a.hues[e];}).forEach(function(e){if(w.indexOf(e)==-1)throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",e).replace("%2",o.name).replace("%3",t).replace("%4",i).replace("%5",w.join(", ")));}),o;},o[t+"Color"]=function(){var e=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+t+"Color() has been deprecated. Use $mdThemingProviderTheme."+t+"Palette() instead."),o[t+"Palette"].apply(o,e);};});}function l(t,o){function i(e){return e===n||""===e||a.THEMES[e]!==n;}function r(n,r){function a(){return c=r.controller("mdTheme")||n.data("$mdThemeController"),c&&c.$mdTheme||("default"==$?"":$);}function d(e){if(e){i(e)||o.warn("Attempted to use unregistered theme '"+e+"'. Register it with $mdThemingProvider.theme().");var t=n.data("$mdThemeName");t&&n.removeClass("md-"+t+"-theme"),n.addClass("md-"+e+"-theme"),n.data("$mdThemeName",e),c&&n.data("$mdThemeController",c);}}function s(){var e=r.controller("mdTheme");return!!e&&(n.on("$destroy",e.registerChanges(function(){d(a());})),!0);}var c=r.controller("mdTheme"),l=n.attr("md-theme-watch"),m=(E||e.isDefined(l))&&"false"!=l;d(a()),(E&&!s()||!E&&m)&&n.on("$destroy",t.$watch(a,d));}var a=function a(e,o){o===n&&(o=e,e=n),e===n&&(e=t),a.inherit(o,o);};return a.THEMES=e.extend({},h),a.PALETTES=e.extend({},p),a.inherit=r,a.registered=i,a.defaultTheme=function(){return $;},a.generateTheme=function(e){c(h[e],e,k.nonce);},a;}p={};var m,h={},E=!1,$="default";return e.extend(p,t),l.$inject=["$rootScope","$log"],m={definePalette:o,extendPalette:i,theme:a,configuration:function configuration(){var t={defaultTheme:$,alwaysWatchTheme:E};return e.extend({},config,t);},disableTheming:function disableTheming(t){k.disableTheming=e.isUndefined(t)||!!t;},registerStyles:function registerStyles(e){k.registeredStyles.push(e);},setNonce:function setNonce(e){k.nonce=e;},generateThemesOnDemand:function generateThemesOnDemand(e){k.generateOnDemand=e;},setDefaultTheme:function setDefaultTheme(e){$=e;},alwaysWatchTheme:function alwaysWatchTheme(e){E=e;},$get:l,_LIGHT_DEFAULT_HUES:T,_DARK_DEFAULT_HUES:A,_PALETTES:p,_THEMES:h,_parseRules:d,_rgba:u};}function i(t,n,o){return{priority:100,link:{pre:function pre(i,r,a){var d=[],s={registerChanges:function registerChanges(t,n){return n&&(t=e.bind(n,t)),d.push(t),function(){var e=d.indexOf(t);e>-1&&d.splice(e,1);};},$setTheme:function $setTheme(e){t.registered(e)||o.warn("attempted to use unregistered theme '"+e+"'"),s.$mdTheme=e,d.forEach(function(e){e();});}};r.data("$mdThemeController",s),s.$setTheme(n(a.mdTheme)(i)),a.$observe("mdTheme",s.$setTheme);}}};}function r(){return k.disableTheming=!0,{restrict:"A",priority:"900"};}function a(e){return e;}function d(t,n,o){l(t,n),o=o.replace(/THEME_NAME/g,t.name);var i=[],r=t.colors[n],a=new RegExp("\\.md-"+t.name+"-theme","g"),d=new RegExp("('|\")?{{\\s*("+n+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),s=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow|default)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,c=p[r.name];return o=o.replace(s,function(e,n,o,i,r){return"foreground"===n?"shadow"==o?t.foregroundShadow:t.foregroundPalette[o]||t.foregroundPalette[1]:(0!==o.indexOf("hue")&&"default"!==o||(o=t.colors[n].hues[o]),u((p[t.colors[n].name][o]||"")[r?"contrast":"value"],i));}),e.forEach(r.hues,function(e,n){var r=o.replace(d,function(t,n,o,i,r){return u(c[e]["color"===i?"value":"contrast"],r);});if("default"!==n&&(r=r.replace(a,".md-"+t.name+"-theme.md-"+n)),"default"==t.name){var s=/((?:(?:(?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)+) )?)((?:(?:\w|\.|-)+)?)\.md-default-theme((?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g;r=r.replace(s,function(e,t,n,o){return e+", "+t+n+o;});}i.push(r);}),i;}function s(t,n){function o(t,n){var o=t.contrastDefaultColor,i=t.contrastLightColors||[],r=t.contrastStrongLightColors||[],a=t.contrastDarkColors||[];"string"==typeof i&&(i=i.split(" ")),"string"==typeof r&&(r=r.split(" ")),"string"==typeof a&&(a=a.split(" ")),delete t.contrastDefaultColor,delete t.contrastLightColors,delete t.contrastStrongLightColors,delete t.contrastDarkColors,e.forEach(t,function(n,d){function s(){return"light"===o?a.indexOf(d)>-1?E:r.indexOf(d)>-1?C:$:i.indexOf(d)>-1?r.indexOf(d)>-1?C:$:E;}if(!e.isObject(n)){var c=m(n);if(!c)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",n).replace("%2",t.name).replace("%3",d));t[d]={value:c,contrast:s()};}});}var i=document.head,r=i?i.firstElementChild:null,a=!k.disableTheming&&t.has("$MD_THEME_CSS")?t.get("$MD_THEME_CSS"):"";if(a+=k.registeredStyles.join(""),r&&0!==a.length){e.forEach(p,o);var d=a.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.trim().length;}).map(function(e){return e.trim()+"}";}),s=new RegExp("md-("+y.join("|")+")","g");y.forEach(function(e){_[e]="";}),d.forEach(function(e){for(var t,n=(e.match(s),0);t=y[n];n++){if(e.indexOf(".md-"+t)>-1)return _[t]+=e;}for(n=0;t=y[n];n++){if(e.indexOf(t)>-1)return _[t]+=e;}return _[M]+=e;}),k.generateOnDemand||e.forEach(n.THEMES,function(e){h[e.name]||"default"!==n.defaultTheme()&&"default"===e.name||c(e,e.name,k.nonce);});}}function c(e,t,n){var o=document.head,i=o?o.firstElementChild:null;h[t]||(y.forEach(function(t){for(var r=d(e,t,_[t]);r.length;){var a=r.shift();if(a){var s=document.createElement("style");s.setAttribute("md-theme-style",""),n&&s.setAttribute("nonce",n),s.appendChild(document.createTextNode(a)),o.insertBefore(s,i);}}}),h[e.name]=!0);}function l(e,t){if(!p[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(p).join(", ")));}function m(t){if(e.isArray(t)&&3==t.length)return t;if(/^rgb/.test(t))return t.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10);});if("#"==t.charAt(0)&&(t=t.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(t)){var n=t.length/3,o=t.substr(0,n),i=t.substr(n,n),r=t.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),[parseInt(o,16),parseInt(i,16),parseInt(r,16)];}}function u(t,n){return t?(4==t.length&&(t=e.copy(t),n?t.pop():n=t.pop()),n&&("number"==typeof n||"string"==typeof n&&n.length)?"rgba("+t.join(",")+","+n+")":"rgb("+t.join(",")+")"):"rgb('0,0,0')";}e.module("material.core.theming",["material.core.theming.palette"]).directive("mdTheme",i).directive("mdThemable",a).directive("mdThemesDisabled",r).provider("$mdTheming",o).config(t).run(s),t.$inject=["$mdThemingProvider"];var p,h={},f={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.38)",4:"rgba(0,0,0,0.12)"},g={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.5)",4:"rgba(255,255,255,0.12)"},b="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",v="",E=m("rgba(0,0,0,0.87)"),$=m("rgba(255,255,255,0.87)"),C=m("rgb(255,255,255)"),y=["primary","accent","warn","background"],M="primary",T={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"},background:{"default":"50","hue-1":"A100","hue-2":"100","hue-3":"300"}},A={background:{"default":"A400","hue-1":"800","hue-2":"900","hue-3":"A200"}};y.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};T[e]||(T[e]=t),A[e]||(A[e]=t);});var w=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"],k={disableTheming:!1,generateOnDemand:!1,registeredStyles:[],nonce:null};o.$inject=["$mdColorPalette"],i.$inject=["$mdTheming","$interpolate","$log"],a.$inject=["$mdTheming"];var _={};s.$inject=["$injector","$mdTheming"];}(e.angular);}(),function(){function n(n,o,i,r,a){var d;return d={translate3d:function translate3d(e,t,n,o){function i(n){return a(e,{to:n||t,addClass:o.transitionOutClass,removeClass:o.transitionInClass}).start();}return a(e,{from:t,to:n,addClass:o.transitionInClass,removeClass:o.transitionOutClass}).start().then(function(){return i;});},waitTransitionEnd:function waitTransitionEnd(t,n){var a=3e3;return o(function(o,d){function s(e){e&&e.target!==t[0]||(e&&i.cancel(l),t.off(r.CSS.TRANSITIONEND,s),o());}function c(n){return n=n||e.getComputedStyle(t[0]),"0s"==n.transitionDuration||!n.transition&&!n.transitionProperty;}n=n||{},c(n.cachedTransitionStyles)&&(a=0);var l=i(s,n.timeout||a);t.on(r.CSS.TRANSITIONEND,s);});},calculateTransformValues:function calculateTransformValues(e,t){function n(){var t=e?e.parent():null,n=t?t.parent():null;return n?d.clientRect(n):null;}var o=t.element,i=t.bounds;if(o||i){var r=o?d.clientRect(o)||n():d.copyRect(i),a=d.copyRect(e[0].getBoundingClientRect()),s=d.centerPointFor(a),c=d.centerPointFor(r);return{centerX:c.x-s.x,centerY:c.y-s.y,scaleX:Math.round(100*Math.min(.5,r.width/a.width))/100,scaleY:Math.round(100*Math.min(.5,r.height/a.height))/100};}return{centerX:0,centerY:0,scaleX:.5,scaleY:.5};},calculateZoomToOrigin:function calculateZoomToOrigin(e,o){var i="translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",r=t.bind(null,n.supplant,i);return r(d.calculateTransformValues(e,o));},calculateSlideToOrigin:function calculateSlideToOrigin(e,o){var i="translate3d( {centerX}px, {centerY}px, 0 )",r=t.bind(null,n.supplant,i);return r(d.calculateTransformValues(e,o));},toCss:function toCss(e){function n(e,n,i){t.forEach(n.split(" "),function(e){o[e]=i;});}var o={},i="left top right bottom width height x y min-width min-height max-width max-height";return t.forEach(e,function(e,a){if(!t.isUndefined(e))if(i.indexOf(a)>=0)o[a]=e+"px";else switch(a){case"transition":n(a,r.CSS.TRANSITION,e);break;case"transform":n(a,r.CSS.TRANSFORM,e);break;case"transformOrigin":n(a,r.CSS.TRANSFORM_ORIGIN,e);break;case"font-size":o["font-size"]=e;}}),o;},toTransformCss:function toTransformCss(e,n,o){var i={};return t.forEach(r.CSS.TRANSFORM.split(" "),function(t){i[t]=e;}),n&&(o=o||"all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important",i.transition=o),i;},copyRect:function copyRect(e,n){return e?(n=n||{},t.forEach("left top right bottom width height".split(" "),function(t){n[t]=Math.round(e[t]);}),n.width=n.width||n.right-n.left,n.height=n.height||n.bottom-n.top,n):null;},clientRect:function clientRect(e){var n=t.element(e)[0].getBoundingClientRect(),o=function o(e){return e&&e.width>0&&e.height>0;};return o(n)?d.copyRect(n):null;},centerPointFor:function centerPointFor(e){return e?{x:Math.round(e.left+e.width/2),y:Math.round(e.top+e.height/2)}:{x:0,y:0};}};}t.module("material.core").factory("$$mdAnimate",["$q","$timeout","$mdConstant","$animateCss",function(e,t,o,i){return function(r){return n(r,e,t,o,i);};}]);}(),function(){t.version.minor>=4?t.module("material.core.animate",[]):!function(){function e(e){return e.replace(/-[a-z]/g,function(e){return e.charAt(1).toUpperCase();});}var n=t.forEach,o=t.isDefined(document.documentElement.style.WebkitAppearance),i=o?"-webkit-":"",r=(o?"webkitTransitionEnd ":"")+"transitionend",a=(o?"webkitAnimationEnd ":"")+"animationend",d=["$document",function(e){return function(){return e[0].body.clientWidth+1;};}],s=["$$rAF",function(e){return function(){var t=!1;return e(function(){t=!0;}),function(n){t?n():e(n);};};}],c=["$q","$$rAFMutex",function(e,o){function i(e){this.setHost(e),this._doneCallbacks=[],this._runInAnimationFrame=o(),this._state=0;}var r=0,a=1,d=2;return i.prototype={setHost:function setHost(e){this.host=e||{};},done:function done(e){this._state===d?e():this._doneCallbacks.push(e);},progress:t.noop,getPromise:function getPromise(){if(!this.promise){var t=this;this.promise=e(function(e,n){t.done(function(t){t===!1?n():e();});});}return this.promise;},then:function then(e,t){return this.getPromise().then(e,t);},"catch":function _catch(e){return this.getPromise()["catch"](e);},"finally":function _finally(e){return this.getPromise()["finally"](e);},pause:function pause(){this.host.pause&&this.host.pause();},resume:function resume(){this.host.resume&&this.host.resume();},end:function end(){this.host.end&&this.host.end(),this._resolve(!0);},cancel:function cancel(){this.host.cancel&&this.host.cancel(),this._resolve(!1);},complete:function complete(e){var t=this;t._state===r&&(t._state=a,t._runInAnimationFrame(function(){t._resolve(e);}));},_resolve:function _resolve(e){this._state!==d&&(n(this._doneCallbacks,function(t){t(e);}),this._doneCallbacks.length=0,this._state=d);}},i.all=function(e,t){function o(n){r=r&&n,++i===e.length&&t(r);}var i=0,r=!0;n(e,function(e){e.done(o);});},i;}];t.module("material.core.animate",[]).factory("$$forceReflow",d).factory("$$AnimateRunner",c).factory("$$rAFMutex",s).factory("$animateCss",["$window","$$rAF","$$AnimateRunner","$$forceReflow","$$jqLite","$timeout","$animate",function(t,d,s,c,l,m,u){function p(o,d){var c=[],l=C(o),p=l&&u.enabled(),g=!1,M=!1;p&&(d.transitionStyle&&c.push([i+"transition",d.transitionStyle]),d.keyframeStyle&&c.push([i+"animation",d.keyframeStyle]),d.delay&&c.push([i+"transition-delay",d.delay+"s"]),d.duration&&c.push([i+"transition-duration",d.duration+"s"]),g=d.keyframeStyle||d.to&&(d.duration>0||d.transitionStyle),M=!!d.addClass||!!d.removeClass,y(o,!0));var T=p&&(g||M);E(o,d);var A,w,k=!1;return{close:t.close,start:function start(){function t(){if(!k)return k=!0,A&&w&&o.off(A,w),h(o,d),v(o,d),n(c,function(t){l.style[e(t[0])]="";}),u.complete(!0),u;}var u=new s();return b(function(){if(y(o,!1),!T)return t();n(c,function(t){var n=t[0],o=t[1];l.style[e(n)]=o;}),h(o,d);var s=f(o);if(0===s.duration)return t();var u=[];d.easing&&(s.transitionDuration&&u.push([i+"transition-timing-function",d.easing]),s.animationDuration&&u.push([i+"animation-timing-function",d.easing])),d.delay&&s.animationDelay&&u.push([i+"animation-delay",d.delay+"s"]),d.duration&&s.animationDuration&&u.push([i+"animation-duration",d.duration+"s"]),n(u,function(t){var n=t[0],o=t[1];l.style[e(n)]=o,c.push(t);});var p=s.delay,g=1e3*p,b=s.duration,v=1e3*b,E=Date.now();A=[],s.transitionDuration&&A.push(r),s.animationDuration&&A.push(a),A=A.join(" "),w=function w(e){e.stopPropagation();var n=e.originalEvent||e,o=n.timeStamp||Date.now(),i=parseFloat(n.elapsedTime.toFixed(3));Math.max(o-E,0)>=g&&i>=b&&t();},o.on(A,w),$(o,d),m(t,g+1.5*v,!1);}),u;}};}function h(e,t){t.addClass&&(l.addClass(e,t.addClass),t.addClass=null),t.removeClass&&(l.removeClass(e,t.removeClass),t.removeClass=null);}function f(e){function n(e){return o?"Webkit"+e.charAt(0).toUpperCase()+e.substr(1):e;}var i=C(e),r=t.getComputedStyle(i),a=g(r[n("transitionDuration")]),d=g(r[n("animationDuration")]),s=g(r[n("transitionDelay")]),c=g(r[n("animationDelay")]);d*=parseInt(r[n("animationIterationCount")],10)||1;var l=Math.max(d,a),m=Math.max(c,s);return{duration:l,delay:m,animationDuration:d,transitionDuration:a,animationDelay:c,transitionDelay:s};}function g(e){var t=0,o=(e||"").split(/\s*,\s*/);return n(o,function(e){"s"==e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),e=parseFloat(e)||0,t=t?Math.max(e,t):e;}),t;}function b(e){M&&M(),T.push(e),M=d(function(){M=null;for(var e=c(),t=0;t<T.length;t++){T[t](e);}T.length=0;});}function v(e,t){E(e,t),$(e,t);}function E(e,t){t.from&&(e.css(t.from),t.from=null);}function $(e,t){t.to&&(e.css(t.to),t.to=null);}function C(e){for(var t=0;t<e.length;t++){if(1===e[t].nodeType)return e[t];}}function y(t,n){var o=C(t),r=e(i+"transition-delay");o.style[r]=n?"-9999s":"";}var M,T=[];return p;}]);}();}(),function(){t.module("material.components.autocomplete",["material.core","material.components.icon","material.components.virtualRepeat"]);}(),function(){t.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",["$mdTheming","$mdUtil","$animate","$rootElement","$window","$log","$$rAF","$document",function(e,n,o,i,r,a,d,s){function c(c,m,u){function p(){var e=parseInt(h.height,10)+Math.abs(parseInt(h.top,10));m.css("height",e+"px");}o.pin&&o.pin(m,i);var h;d(function(){if(h=r.getComputedStyle(s[0].body),"fixed"===h.position){var o=n.debounce(function(){h=r.getComputedStyle(s[0].body),p();},60,null,!1);p(),t.element(r).on("resize",o),c.$on("$destroy",function(){t.element(r).off("resize",o);});}var i=m.parent();if(i.length){"BODY"===i[0].nodeName&&m.css("position","fixed");var d=r.getComputedStyle(i[0]);"static"===d.position&&a.warn(l),e.inherit(m,i);}});}var l="<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";return{restrict:"E",link:c};}]);}(),function(){function e(e){return{restrict:"E",link:function link(t,n){n.addClass("_md"),t.$on("$destroy",function(){e.destroy();});}};}function n(e){function n(e,n,r,a,d,s,c,l){function m(o,i,c,m){if(i=r.extractElementByName(i,"md-bottom-sheet"),i.attr("tabindex","-1"),i.hasClass("ng-cloak")){var u="$mdBottomSheet: using `<md-bottom-sheet ng-cloak >` will affect the bottom-sheet opening animations.";l.warn(u,i[0]);}c.disableBackdrop||(h=r.createBackdrop(o,"md-bottom-sheet-backdrop md-opaque"),h[0].tabIndex=-1,c.clickOutsideToClose&&h.on("click",function(){r.nextTick(d.cancel,!0);}),a.inherit(h,c.parent),e.enter(h,c.parent,null));var f=new p(i,c.parent);return c.bottomSheet=f,a.inherit(f.element,c.parent),c.disableParentScroll&&(c.restoreScroll=r.disableScrollAround(f.element,c.parent)),e.enter(f.element,c.parent,h).then(function(){var e=r.findFocusTarget(i)||t.element(i[0].querySelector("button")||i[0].querySelector("a")||i[0].querySelector(r.prefixer("ng-click",!0)))||h;c.escapeToClose&&(c.rootElementKeyupCallback=function(e){e.keyCode===n.KEY_CODE.ESCAPE&&r.nextTick(d.cancel,!0);},s.on("keyup",c.rootElementKeyupCallback),e&&e.focus());});}function u(t,n,o){var i=o.bottomSheet;return o.disableBackdrop||e.leave(h),e.leave(i.element).then(function(){o.disableParentScroll&&(o.restoreScroll(),delete o.restoreScroll),i.cleanup();});}function p(e,t){function a(t){e.css(n.CSS.TRANSITION_DURATION,"0ms");}function s(t){var o=t.pointer.distanceY;o<5&&(o=Math.max(-i,o/2)),e.css(n.CSS.TRANSFORM,"translate3d(0,"+(i+o)+"px,0)");}function l(t){if(t.pointer.distanceY>0&&(t.pointer.distanceY>20||Math.abs(t.pointer.velocityY)>o)){var i=e.prop("offsetHeight")-t.pointer.distanceY,a=Math.min(i/t.pointer.velocityY*.75,500);e.css(n.CSS.TRANSITION_DURATION,a+"ms"),r.nextTick(d.cancel,!0);}else e.css(n.CSS.TRANSITION_DURATION,""),e.css(n.CSS.TRANSFORM,"");}var m=c.register(t,"drag",{horizontal:!1});return t.on("$md.dragstart",a).on("$md.drag",s).on("$md.dragend",l),{element:e,cleanup:function cleanup(){m(),t.off("$md.dragstart",a),t.off("$md.drag",s),t.off("$md.dragend",l);}};}var h;return{themable:!0,onShow:m,onRemove:u,disableBackdrop:!1,escapeToClose:!0,clickOutsideToClose:!0,disableParentScroll:!0};}var o=.5,i=80;return n.$inject=["$animate","$mdConstant","$mdUtil","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture","$log"],e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","clickOutsideToClose"],options:n});}t.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",n),e.$inject=["$mdBottomSheet"],n.$inject=["$$interimElementProvider"];}(),function(){function e(e){return{restrict:"E",link:function link(t,n){e(n);}};}function n(e,n,o,i){function r(e){return t.isDefined(e.href)||t.isDefined(e.ngHref)||t.isDefined(e.ngLink)||t.isDefined(e.uiSref);}function a(e,t){if(r(t))return'<a class="md-button" ng-transclude></a>';var n="undefined"==typeof t.type?"button":t.type;return'<button class="md-button" type="'+n+'" ng-transclude></button>';}function d(a,d,s){n(d),e.attach(a,d),o.expectWithoutText(d,"aria-label"),r(s)&&t.isDefined(s.ngDisabled)&&a.$watch(s.ngDisabled,function(e){d.attr("tabindex",e?-1:0);}),d.on("click",function(e){s.disabled===!0&&(e.preventDefault(),e.stopImmediatePropagation());}),d.hasClass("md-no-focus")||(a.mouseActive=!1,d.on("mousedown",function(){a.mouseActive=!0,i(function(){a.mouseActive=!1;},100);}).on("focus",function(){a.mouseActive===!1&&d.addClass("md-focused");}).on("blur",function(e){d.removeClass("md-focused");}));}return{restrict:"EA",replace:!0,transclude:!0,template:a,link:d};}t.module("material.components.button",["material.core"]).directive("mdButton",n).directive("a",e),e.$inject=["$mdTheming"],n.$inject=["$mdButtonInkRipple","$mdTheming","$mdAria","$timeout"];}(),function(){function e(e){return{restrict:"E",link:function link(t,n,o){n.addClass("_md"),e(n);}};}t.module("material.components.card",["material.core"]).directive("mdCard",e),e.$inject=["$mdTheming"];}(),function(){function e(e,n,o,i,r,a){function d(d,s){function c(d,s,c,l){function m(e,t,n){c[e]&&d.$watch(c[e],function(e){n[e]&&s.attr(t,n[e]);});}function u(e){var t=e.which||e.keyCode;t!==o.KEY_CODE.SPACE&&t!==o.KEY_CODE.ENTER||(e.preventDefault(),s.addClass("md-focused"),p(e));}function p(e){s[0].hasAttribute("disabled")||d.skipToggle||d.$apply(function(){var t=c.ngChecked?c.checked:!l.$viewValue;l.$setViewValue(t,e&&e.type),l.$render();});}function h(){s.toggleClass("md-checked",!!l.$viewValue&&!g);}function f(e){g=e!==!1,g&&s.attr("aria-checked","mixed"),s.toggleClass("md-indeterminate",g);}var g;l=l||r.fakeNgModel(),i(s),s.children().on("focus",function(){s.focus();}),r.parseAttributeBoolean(c.mdIndeterminate)&&(f(),d.$watch(c.mdIndeterminate,f)),c.ngChecked&&d.$watch(d.$eval.bind(d,c.ngChecked),l.$setViewValue.bind(l)),m("ngDisabled","tabindex",{"true":"-1","false":c.tabindex}),n.expectWithText(s,"aria-label"),e.link.pre(d,{on:t.noop,0:{}},c,[l]),d.mouseActive=!1,s.on("click",p).on("keypress",u).on("mousedown",function(){d.mouseActive=!0,a(function(){d.mouseActive=!1;},100);}).on("focus",function(){d.mouseActive===!1&&s.addClass("md-focused");}).on("blur",function(){s.removeClass("md-focused");}),l.$render=h;}return s.$set("tabindex",s.tabindex||"0"),s.$set("type","checkbox"),s.$set("role",s.type),{pre:function pre(e,t){t.on("click",function(e){this.hasAttribute("disabled")&&e.stopImmediatePropagation();});},post:c};}return e=e[0],{restrict:"E",transclude:!0,require:"?ngModel",priority:210,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:d};}t.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e),e.$inject=["inputDirective","$mdAria","$mdConstant","$mdTheming","$mdUtil","$timeout"];}(),function(){t.module("material.components.chips",["material.core","material.components.autocomplete"]);}(),function(){!function(){function e(e,n,o){function i(e,t){try{t&&e.css(s(t));}catch(n){o.error(n.message);}}function a(e){var t=l(e);return d(t);}function d(t,o){o=o||!1;var i=e.PALETTES[t.palette][t.hue];return i=o?i.contrast:i.value,n.supplant("rgba({0}, {1}, {2}, {3})",[i[0],i[1],i[2],i[3]||t.opacity]);}function s(e){var n={},o=e.hasOwnProperty("color");return t.forEach(e,function(e,t){var i=l(e),r=t.indexOf("background")>-1;n[t]=d(i),r&&!o&&(n.color=d(i,!0));}),n;}function c(n){return t.isDefined(e.THEMES[n.split("-")[0]]);}function l(n){var o=n.split("-"),i=t.isDefined(e.THEMES[o[0]]),r=i?o.splice(0,1)[0]:e.defaultTheme();return{theme:r,palette:m(o,r),hue:u(o,r),opacity:o[2]||1};}function m(t,o){var i=t.length>1&&r.indexOf(t[1])!==-1,a=t[0].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(i&&(a=t[0]+"-"+t.splice(1,1)),r.indexOf(a)===-1){var d=e.THEMES[o].colors[a];if(!d)throw new Error(n.supplant("mdColors: couldn't find '{palette}' in the palettes.",{palette:a}));a=d.name;}return a;}function u(t,o){var i=e.THEMES[o].colors;if("hue"===t[1]){var r=parseInt(t.splice(2,1)[0],10);if(r<1||r>3)throw new Error(n.supplant("mdColors: 'hue-{hueNumber}' is not a valid hue, can be only 'hue-1', 'hue-2' and 'hue-3'",{hueNumber:r}));if(t[1]="hue-"+r,!(t[0]in i))throw new Error(n.supplant("mdColors: 'hue-x' can only be used with [{availableThemes}], but was used with '{usedTheme}'",{availableThemes:Object.keys(i).join(", "),usedTheme:t[0]}));return i[t[0]].hues[t[1]];}return t[1]||i[t[0]in i?t[0]:"primary"].hues["default"];}return r=r||Object.keys(e.PALETTES),{applyThemeColors:i,getThemeColor:a,hasTheme:c};}function o(e,n,o,r){return{restrict:"A",require:["^?mdTheme"],compile:function compile(a,d){function s(){var e=d.mdColors,o=e.indexOf("::")>-1,r=!!o||i.test(d.mdColors);d.mdColors=e.replace("::","");var a=t.isDefined(d.mdColorsWatch);return!o&&!r&&(!a||n.parseAttributeBoolean(d.mdColorsWatch));}var c=s();return function(n,i,a,d){var s=d[0],l={},m=function m(t){"string"!=typeof t&&(t=""),a.mdColors||(a.mdColors="{}");var o=r(a.mdColors)(n);return s&&Object.keys(o).forEach(function(n){var i=o[n];e.hasTheme(i)||(o[n]=(t||s.$mdTheme)+"-"+i);}),u(o),o;},u=function u(e){if(!t.equals(e,l)){var n=Object.keys(l);l.background&&!n.color&&n.push("color"),n.forEach(function(e){i.css(e,"");});}l=e;},p=t.noop;s&&(p=s.registerChanges(function(t){e.applyThemeColors(i,m(t));})),n.$on("$destroy",function(){p();});try{c?n.$watch(m,t.bind(this,e.applyThemeColors,i),!0):e.applyThemeColors(i,m());}catch(h){o.error(h.message);}};}};}var i=/^{((\s|,)*?["'a-zA-Z-]+?\s*?:\s*?('|")[a-zA-Z0-9-.]*('|"))+\s*}$/,r=n;t.module("material.components.colors",["material.core"]).directive("mdColors",o).service("$mdColors",e),e.$inject=["$mdTheming","$mdUtil","$log"],o.$inject=["$mdColors","$mdUtil","$log","$parse"];}();}(),function(){function e(e){function t(e,t){this.$scope=e,this.$element=t;}return{restrict:"E",controller:["$scope","$element",t],link:function link(t,o){o.addClass("_md"),e(o),t.$broadcast("$mdContentLoaded",o),n(o[0]);}};}function n(e){t.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)));});}t.module("material.components.content",["material.core"]).directive("mdContent",e),e.$inject=["$mdTheming"];}(),function(){t.module("material.components.datepicker",["material.core","material.components.icon","material.components.virtualRepeat"]);}(),function(){function e(e,n,o){return{restrict:"E",link:function link(i,r){r.addClass("_md"),n(r),e(function(){function e(){r.toggleClass("md-content-overflow",a.scrollHeight>a.clientHeight);}var n,a=r[0].querySelector("md-dialog-content");a&&(n=a.getElementsByTagName("img"),e(),t.element(n).on("load",e)),i.$on("$destroy",function(){o.destroy(r);});});}};}function o(e){function o(e,t){return{template:['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">','  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">','    <h2 class="md-title">{{ dialog.title }}</h2>','    <div ng-if="::dialog.mdHtmlContent" class="md-dialog-content-body" ','        ng-bind-html="::dialog.mdHtmlContent"></div>','    <div ng-if="::!dialog.mdHtmlContent" class="md-dialog-content-body">',"      <p>{{::dialog.mdTextContent}}</p>","    </div>",'    <md-input-container md-no-float ng-if="::dialog.$type == \'prompt\'" class="md-prompt-input-container">','      <input ng-keypress="dialog.keypress($event)" md-autofocus ng-model="dialog.result"              placeholder="{{::dialog.placeholder}}">',"    </md-input-container>","  </md-dialog-content>","  <md-dialog-actions>",'    <md-button ng-if="dialog.$type === \'confirm\' || dialog.$type === \'prompt\'"               ng-click="dialog.abort()" class="md-primary">',"      {{ dialog.cancel }}","    </md-button>",'    <md-button ng-click="dialog.hide()" class="md-primary" md-autofocus="dialog.$type===\'alert\'">',"      {{ dialog.ok }}","    </md-button>","  </md-dialog-actions>","</md-dialog>"].join("").replace(/\s\s+/g,""),controller:function controller(){var n="prompt"==this.$type;n&&this.initialValue&&(this.result=this.initialValue),this.hide=function(){e.hide(!n||this.result);},this.abort=function(){e.cancel();},this.keypress=function(n){n.keyCode===t.KEY_CODE.ENTER&&e.hide(this.result);};},controllerAs:"dialog",bindToController:!0};}function i(e,o,i,d,s,c,l,m,u,p,h){function f(e){E(e);}function g(e,t,n,o){if(o){if(o.mdHtmlContent=o.htmlContent||n.htmlContent||"",o.mdTextContent=o.textContent||n.textContent||o.content||n.content||"",o.mdHtmlContent&&!p.has("$sanitize"))throw Error("The ngSanitize module must be loaded in order to use htmlContent.");if(o.mdHtmlContent&&o.mdTextContent)throw Error("md-dialog cannot have both `htmlContent` and `textContent`");}}function b(e,n,o,r){function a(){n[0].querySelector(".md-actions")&&u.warn("Using a class of md-actions is deprecated, please use <md-dialog-actions>.");}function d(){function e(){var e=n[0].querySelector(".dialog-close");if(!e){var o=n[0].querySelectorAll(".md-actions button, md-dialog-actions button");e=o[o.length-1];}return t.element(e);}if(o.focusOnOpen){var r=i.findFocusTarget(n)||e();r.focus();}}if(t.element(c[0].body).addClass("md-dialog-is-showing"),o.contentElement){var s=o.contentElement;t.isString(s)?(s=document.querySelector(s),o.elementInsertionSibling=s.nextElementSibling,o.elementInsertionParent=s.parentNode):(s=s[0]||s,document.contains(s)&&(o.elementInsertionSibling=s.nextElementSibling,o.elementInsertionParent=s.parentNode)),o.elementInsertionEntry=s,n=t.element(s);}var l=n.find("md-dialog");if(l.hasClass("ng-cloak")){var m="$mdDialog: using `<md-dialog ng-cloak >` will affect the dialog opening animations.";u.warn(m,n[0]);}return $(o),M(l,o),y(e,n,o),C(n,o),w(n,o).then(function(){T(n,o),a(),d();});}function v(e,n,o){function i(){return k(n,o);}function d(){o.contentElement&&(o.reverseContainerStretch(),o.elementInsertionParent?o.elementInsertionSibling?o.elementInsertionParent.insertBefore(o.elementInsertionEntry,o.elementInsertionSibling):o.elementInsertionParent.appendChild(o.elementInsertionEntry):o.elementInsertionEntry.parentNode.removeChild(o.elementInsertionEntry));}function s(){t.element(c[0].body).removeClass("md-dialog-is-showing"),o.contentElement?d():n.remove(),o.$destroy||o.origin.focus();}return o.deactivateListeners(),o.unlockScreenReader(),o.hideBackdrop(o.$destroy),r&&r.parentNode&&r.parentNode.removeChild(r),a&&a.parentNode&&a.parentNode.removeChild(a),o.$destroy?s():i().then(s);}function E(e){if(!e.theme&&(e.theme=h.defaultTheme(),e.targetEvent&&e.targetEvent.target)){var n=t.element(e.targetEvent.target);e.theme=(n.controller("mdTheme")||{}).$mdTheme||e.theme;}}function $(e){function o(e,o){var i=t.element(e||{});if(i&&i.length){var r={top:0,left:0,height:0,width:0},a=t.isFunction(i[0].getBoundingClientRect);return t.extend(o||{},{element:a?i:n,bounds:a?i[0].getBoundingClientRect():t.extend({},r,i[0]),focus:t.bind(i,i.focus)});}}function i(e,n){return t.isString(e)&&(e=c[0].querySelector(e)),t.element(e||n);}e.origin=t.extend({element:null,bounds:null,focus:t.noop},e.origin||{}),e.parent=i(e.parent,m),e.closeTo=o(i(e.closeTo)),e.openFrom=o(i(e.openFrom)),e.targetEvent&&(e.origin=o(e.targetEvent.target,e.origin));}function C(n,o){var r=t.element(l),a=i.debounce(function(){A(n,o);},60),s=[],c=function c(){var t="alert"==o.$type?e.hide:e.cancel;i.nextTick(t,!0);};if(o.escapeToClose){var m=o.parent,u=function u(e){e.keyCode===d.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),c());};n.on("keydown",u),m.on("keydown",u),s.push(function(){n.off("keydown",u),m.off("keydown",u);});}if(r.on("resize",a),s.push(function(){r.off("resize",a);}),o.clickOutsideToClose){var p,h=n,f=function f(e){p=e.target;},g=function g(e){p===h[0]&&e.target===h[0]&&(e.stopPropagation(),e.preventDefault(),c());};h.on("mousedown",f),h.on("mouseup",g),s.push(function(){h.off("mousedown",f),h.off("mouseup",g);});}o.deactivateListeners=function(){s.forEach(function(e){e();}),o.deactivateListeners=null;};}function y(e,t,n){n.disableParentScroll&&(n.restoreScroll=i.disableScrollAround(t,n.parent)),n.hasBackdrop&&(n.backdrop=i.createBackdrop(e,"md-dialog-backdrop md-opaque"),s.enter(n.backdrop,n.parent)),n.hideBackdrop=function(e){n.backdrop&&(e?n.backdrop.remove():s.leave(n.backdrop)),n.disableParentScroll&&(n.restoreScroll(),delete n.restoreScroll),n.hideBackdrop=null;};}function M(e,t){var n="alert"===t.$type?"alertdialog":"dialog",d=e.find("md-dialog-content"),s=e.attr("id"),c="dialogContent_"+(s||i.nextUid());e.attr({role:n,tabIndex:"-1"}),0===d.length&&(d=e,s&&(c=s)),d.attr("id",c),e.attr("aria-describedby",c),t.ariaLabel?o.expect(e,"aria-label",t.ariaLabel):o.expectAsync(e,"aria-label",function(){var e=d.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ");}),r=document.createElement("div"),r.classList.add("md-dialog-focus-trap"),r.tabIndex=0,a=r.cloneNode(!1);var l=function l(){e.focus();};r.addEventListener("focus",l),a.addEventListener("focus",l),e[0].parentNode.insertBefore(r,e[0]),e.after(a);}function T(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var t=e.parentNode.children,i=0;i<t.length;i++){e===t[i]||_(t[i],["SCRIPT","STYLE"])||t[i].setAttribute("aria-hidden",o);}n(e=e.parentNode);}}var o=!0;n(e[0]),t.unlockScreenReader=function(){o=!1,n(e[0]),t.unlockScreenReader=null;};}function A(e,t){var n="fixed"==l.getComputedStyle(c[0].body).position,o=t.backdrop?l.getComputedStyle(t.backdrop[0]):null,r=o?Math.min(c[0].body.clientHeight,Math.ceil(Math.abs(parseInt(o.height,10)))):0,a={top:e.css("top"),height:e.css("height")};return e.css({top:(n?i.scrollTop(t.parent):0)+"px",height:r?r+"px":"100%"}),function(){e.css(a);};}function w(e,t){t.parent.append(e),t.reverseContainerStretch=A(e,t);var n=e.find("md-dialog"),o=i.dom.animator,r=o.calculateZoomToOrigin,a={transitionInClass:"md-transition-in",transitionOutClass:"md-transition-out"},d=o.toTransformCss(r(n,t.openFrom||t.origin)),s=o.toTransformCss("");return t.fullscreen&&n.addClass("md-dialog-fullscreen"),o.translate3d(n,d,s,a).then(function(e){return t.reverseAnimate=function(){return delete t.reverseAnimate,t.closeTo?(a={transitionInClass:"md-transition-out",transitionOutClass:"md-transition-in"},d=s,s=o.toTransformCss(r(n,t.closeTo)),o.translate3d(n,d,s,a)):e(s=o.toTransformCss(r(n,t.origin)));},t.clearAnimate=function(){return delete t.clearAnimate,o.translate3d(n,s,o.toTransformCss(""),{});},!0;});}function k(e,t){return t.reverseAnimate().then(function(){t.contentElement&&t.clearAnimate();});}function _(e,t){if(t.indexOf(e.nodeName)!==-1)return!0;}return{hasBackdrop:!0,isolateScope:!0,onCompiling:f,onShow:b,onShowing:g,onRemove:v,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,contentElement:null,closeTo:null,openFrom:null,focusOnOpen:!0,disableParentScroll:!0,autoWrap:!0,fullscreen:!1,transformTemplate:function transformTemplate(e,t){function n(e){return t.autoWrap&&!/<\/md-dialog>/g.test(e)?"<md-dialog>"+(e||"")+"</md-dialog>":e||"";}return'<div class="md-dialog-container" tabindex="-1">'+n(e)+"</div>";}};}var r,a;return o.$inject=["$mdDialog","$mdConstant"],i.$inject=["$mdDialog","$mdAria","$mdUtil","$mdConstant","$animate","$document","$window","$rootElement","$log","$injector","$mdTheming"],e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","closeTo","openFrom","parent","fullscreen","contentElement"],options:i}).addPreset("alert",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","theme","css"],options:o}).addPreset("confirm",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","cancel","theme","css"],options:o}).addPreset("prompt",{methods:["title","htmlContent","textContent","initialValue","content","placeholder","ariaLabel","ok","cancel","theme","css"],options:o});}t.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",o),e.$inject=["$$rAF","$mdTheming","$mdDialog"],o.$inject=["$$interimElementProvider"];}(),function(){function e(e){return{restrict:"E",link:e};}t.module("material.components.divider",["material.core"]).directive("mdDivider",e),e.$inject=["$mdTheming"];}(),function(){!function(){function e(e){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"],compile:function compile(t,n){var o=t.children(),i=e.prefixer().hasAttribute(o,"ng-repeat");i?o.addClass("md-fab-action-item"):o.wrap('<div class="md-fab-action-item">');}};}t.module("material.components.fabActions",["material.core"]).directive("mdFabActions",e),e.$inject=["$mdUtil"];}();}(),function(){!function(){function e(e,n,o,i,r,a){function d(){S.direction=S.direction||"down",S.isOpen=S.isOpen||!1,l(),n.addClass("md-animations-waiting");}function s(){var o=["click","focusin","focusout"];t.forEach(o,function(e){n.on(e,c);}),e.$on("$destroy",function(){t.forEach(o,function(e){n.off(e,c);}),h();});}function c(e){"click"==e.type&&k(e),"focusout"!=e.type||D||(D=a(function(){S.close();},100,!1)),"focusin"==e.type&&D&&(a.cancel(D),D=null);}function l(){S.currentActionIndex=-1;}function m(){e.$watch("vm.direction",function(e,t){o.removeClass(n,"md-"+t),o.addClass(n,"md-"+e),l();});var t,i;e.$watch("vm.isOpen",function(e){l(),t&&i||(t=_(),i=x()),e?p():h();var r=e?"md-is-open":"",a=e?"":"md-is-open";t.attr("aria-haspopup",!0),t.attr("aria-expanded",e),i.attr("aria-hidden",!e),o.setClass(n,r,a);});}function u(){n[0].scrollHeight>0?o.addClass(n,"_md-animations-ready").then(function(){n.removeClass("md-animations-waiting");}):N<10&&(a(u,100),N+=1);}function p(){n.on("keydown",g),i.nextTick(function(){t.element(document).on("click touchend",f);});}function h(){n.off("keydown",g),t.element(document).off("click touchend",f);}function f(e){if(e.target){var t=i.getClosest(e.target,"md-fab-trigger"),n=i.getClosest(e.target,"md-fab-actions");t||n||S.close();}}function g(e){switch(e.which){case r.KEY_CODE.ESCAPE:return S.close(),e.preventDefault(),!1;case r.KEY_CODE.LEFT_ARROW:return C(e),!1;case r.KEY_CODE.UP_ARROW:return y(e),!1;case r.KEY_CODE.RIGHT_ARROW:return M(e),!1;case r.KEY_CODE.DOWN_ARROW:return T(e),!1;}}function b(e){E(e,-1);}function v(e){E(e,1);}function E(e,n){var o=$();S.currentActionIndex=S.currentActionIndex+n,S.currentActionIndex=Math.min(o.length-1,S.currentActionIndex),S.currentActionIndex=Math.max(0,S.currentActionIndex);var i=t.element(o[S.currentActionIndex]).children()[0];t.element(i).attr("tabindex",0),i.focus(),e.preventDefault(),e.stopImmediatePropagation();}function $(){var e=x()[0].querySelectorAll(".md-fab-action-item");return t.forEach(e,function(e){t.element(t.element(e).children()[0]).attr("tabindex",-1);}),e;}function C(e){"left"===S.direction?v(e):b(e);}function y(e){"down"===S.direction?b(e):v(e);}function M(e){"left"===S.direction?b(e):v(e);}function T(e){"up"===S.direction?b(e):v(e);}function A(e){return i.getClosest(e,"md-fab-trigger");}function w(e){return i.getClosest(e,"md-fab-actions");}function k(e){A(e.target)&&S.toggle(),w(e.target)&&S.close();}function _(){return n.find("md-fab-trigger");}function x(){return n.find("md-fab-actions");}var S=this;S.open=function(){e.$evalAsync("vm.isOpen = true");},S.close=function(){e.$evalAsync("vm.isOpen = false"),n.find("md-fab-trigger")[0].focus();},S.toggle=function(){e.$evalAsync("vm.isOpen = !vm.isOpen");},d(),s(),m();var N=0;u();var D;}t.module("material.components.fabShared",["material.core"]).controller("MdFabController",e),e.$inject=["$scope","$element","$animate","$mdUtil","$mdConstant","$timeout"];}();}(),function(){!function(){function n(){function e(e,t){t.prepend('<div class="_md-css-variables"></div>');}return{restrict:"E",scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:e};}function o(n){function o(e){n(e,r,!1);}function i(n){if(!n.hasClass("md-animations-waiting")||n.hasClass("_md-animations-ready")){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),a=o.querySelector("md-fab-trigger"),d=o.querySelector("._md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style;n.transform=n.webkitTransform="",n.transitionDelay="",n.opacity=1,n.zIndex=r.length-t+s;}),a.style.zIndex=s+r.length+1,i.isOpen||t.forEach(r,function(e,t){var n,o,r=e.style,d=(a.clientHeight-e.clientHeight)/2,s=(a.clientWidth-e.clientWidth)/2;switch(i.direction){case"up":n=e.scrollHeight*(t+1)+d,o="Y";break;case"down":n=-(e.scrollHeight*(t+1)+d),o="Y";break;case"left":n=e.scrollWidth*(t+1)+s,o="X";break;case"right":n=-(e.scrollWidth*(t+1)+s),o="X";}var c="translate"+o+"("+n+"px)";r.transform=r.webkitTransform=c;});}}return{addClass:function addClass(e,t,n){e.hasClass("md-fling")?(i(e),o(n)):n();},removeClass:function removeClass(e,t,n){i(e),o(n);}};}function i(n){function o(e){n(e,r,!1);}function i(n){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),d=o.querySelector("._md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style,o=t*a;n.opacity=i.isOpen?1:0,n.transform=n.webkitTransform=i.isOpen?"scale(1)":"scale(0)",n.transitionDelay=(i.isOpen?o:r.length-o)+"ms",n.zIndex=r.length-t+s;});}var a=65;return{addClass:function addClass(e,t,n){i(e),o(n);},removeClass:function removeClass(e,t,n){i(e),o(n);}};}var r=300;t.module("material.components.fabSpeedDial",["material.core","material.components.fabShared","material.components.fabActions"]).directive("mdFabSpeedDial",n).animation(".md-fling",o).animation(".md-scale",i).service("mdFabSpeedDialFlingAnimation",o).service("mdFabSpeedDialScaleAnimation",i),o.$inject=["$timeout"],i.$inject=["$timeout"];}();}(),function(){!function(){function n(){function e(e,t,n){t.addClass("md-fab-toolbar"),t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>');}return{restrict:"E",transclude:!0,template:'<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:e};}function o(){function n(n,o,i){if(o){var r=n[0],a=n.controller("mdFabToolbar"),d=r.querySelector(".md-fab-toolbar-background"),s=r.querySelector("md-fab-trigger button"),c=r.querySelector("md-toolbar"),l=r.querySelector("md-fab-trigger button md-icon"),m=n.find("md-fab-actions").children();if(s&&d){var u=e.getComputedStyle(s).getPropertyValue("background-color"),p=r.offsetWidth,h=(r.offsetHeight,2*(p/s.offsetWidth));d.style.backgroundColor=u,d.style.borderRadius=p+"px",a.isOpen?(c.style.pointerEvents="inherit",d.style.width=s.offsetWidth+"px",d.style.height=s.offsetHeight+"px",d.style.transform="scale("+h+")",d.style.transitionDelay="0ms",l&&(l.style.transitionDelay=".3s"),t.forEach(m,function(e,t){e.style.transitionDelay=25*(m.length-t)+"ms";})):(c.style.pointerEvents="none",d.style.transform="scale(1)",d.style.top="0",n.hasClass("md-right")&&(d.style.left="0",d.style.right=null),n.hasClass("md-left")&&(d.style.right="0",d.style.left=null),d.style.transitionDelay="200ms",l&&(l.style.transitionDelay="0ms"),t.forEach(m,function(e,t){e.style.transitionDelay=200+25*t+"ms";}));}}}return{addClass:function addClass(e,t,o){n(e,t,o),o();},removeClass:function removeClass(e,t,o){n(e,t,o),o();}};}t.module("material.components.fabToolbar",["material.core","material.components.fabShared","material.components.fabActions"]).directive("mdFabToolbar",n).animation(".md-fab-toolbar",o).service("mdFabToolbarAnimation",o);}();}(),function(){function e(e,o,i,r){function a(n,a,d,s){function c(){for(var e in o.MEDIA){r(e),r.getQuery(o.MEDIA[e]).addListener(M);}return r.watchResponsiveAttributes(["md-cols","md-row-height","md-gutter"],d,m);}function l(){s.layoutDelegate=t.noop,T();for(var e in o.MEDIA){r.getQuery(o.MEDIA[e]).removeListener(M);}}function m(e){null==e?s.invalidateLayout():r(e)&&s.invalidateLayout();}function u(e){var o=g(),r={tileSpans:b(o),colCount:v(),rowMode:C(),rowHeight:$(),gutter:E()};if(e||!t.equals(r,A)){var d=i(r.colCount,r.tileSpans,o).map(function(e,n){return{grid:{element:a,style:f(r.colCount,n,r.gutter,r.rowMode,r.rowHeight)},tiles:e.map(function(e,i){return{element:t.element(o[i]),style:h(e.position,e.spans,r.colCount,n,r.gutter,r.rowMode,r.rowHeight)};})};}).reflow().performance();n.mdOnLayout({$event:{performance:d}}),A=r;}}function p(e){return w+e+k;}function h(e,t,n,o,i,r,a){var d=1/n*100,s=(n-1)/n,c=_({share:d,gutterShare:s,gutter:i}),l={left:x({unit:c,offset:e.col,gutter:i}),width:S({unit:c,span:t.col,gutter:i}),paddingTop:"",marginTop:"",top:"",height:""};switch(r){case"fixed":l.top=x({unit:a,offset:e.row,gutter:i}),l.height=S({unit:a,span:t.row,gutter:i});break;case"ratio":var m=d/a,u=_({share:m,gutterShare:s,gutter:i});l.paddingTop=S({unit:u,span:t.row,gutter:i}),l.marginTop=x({unit:u,offset:e.row,gutter:i});break;case"fit":var p=(o-1)/o,m=1/o*100,u=_({share:m,gutterShare:p,gutter:i});l.top=x({unit:u,offset:e.row,gutter:i}),l.height=S({unit:u,span:t.row,gutter:i});}return l;}function f(e,t,n,o,i){var r={};switch(o){case"fixed":r.height=S({unit:i,span:t,gutter:n}),r.paddingBottom="";break;case"ratio":var a=1===e?0:(e-1)/e,d=1/e*100,s=d*(1/i),c=_({share:s,gutterShare:a,gutter:n});r.height="",r.paddingBottom=S({unit:c,span:t,gutter:n});break;case"fit":}return r;}function g(){return[].filter.call(a.children(),function(e){return"MD-GRID-TILE"==e.tagName&&!e.$$mdDestroyed;});}function b(e){return[].map.call(e,function(e){var n=t.element(e).controller("mdGridTile");return{row:parseInt(r.getResponsiveAttribute(n.$attrs,"md-rowspan"),10)||1,col:parseInt(r.getResponsiveAttribute(n.$attrs,"md-colspan"),10)||1};});}function v(){var e=parseInt(r.getResponsiveAttribute(d,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return e;}function E(){return y(r.getResponsiveAttribute(d,"md-gutter")||1);}function $(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";switch(C()){case"fixed":return y(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0;}}function C(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";return"fit"==e?"fit":e.indexOf(":")!==-1?"ratio":"fixed";}function y(e){return /\D$/.test(e)?e:e+"px";}a.addClass("_md"),a.attr("role","list"),s.layoutDelegate=u;var M=t.bind(s,s.invalidateLayout),T=c();n.$on("$destroy",l);var A,w=e.startSymbol(),k=e.endSymbol(),_=e(p("share")+"% - ("+p("gutter")+" * "+p("gutterShare")+")"),x=e("calc(("+p("unit")+" + "+p("gutter")+") * "+p("offset")+")"),S=e("calc(("+p("unit")+") * "+p("span")+" + ("+p("span")+" - 1) * "+p("gutter")+")");}return{restrict:"E",controller:n,scope:{mdOnLayout:"&"},link:a};}function n(e){this.layoutInvalidated=!1,this.tilesInvalidated=!1,this.$timeout_=e.nextTick,this.layoutDelegate=t.noop;}function o(e){function n(t,n){var o,a,d,s,c,l;return s=e.time(function(){a=i(t,n);}),o={layoutInfo:function layoutInfo(){return a;},map:function map(t){return c=e.time(function(){var e=o.layoutInfo();d=t(e.positioning,e.rowCount);}),o;},reflow:function reflow(t){return l=e.time(function(){var e=t||r;e(d.grid,d.tiles);}),o;},performance:function performance(){return{tileCount:n.length,layoutTime:s,mapTime:c,reflowTime:l,totalTime:s+c+l};}};}function o(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style);});}function i(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var a=0,l=0;l-a<t.col;){d>=e?o():(a=c.indexOf(0,d),a!==-1&&(l=r(a+1))!==-1?d=l+1:(a=l=0,o()));}return i(a,t.col,t.row),d=a+t.col,{col:a,row:s};}function o(){d=0,s++,i(0,e,-1);}function i(e,t,n){for(var o=e;o<e+t;o++){c[o]=Math.max(c[o]+n,0);}}function r(e){var t;for(t=e;t<c.length;t++){if(0!==c[t])return t;}if(t===c.length)return t;}function a(){for(var t=[],n=0;n<e;n++){t.push(0);}return t;}var d=0,s=0,c=a();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)};}),rowCount:s+Math.max.apply(Math,c)};}var r=o;return n.animateWith=function(e){r=t.isFunction(e)?e:o;},n;}function i(e){function n(n,o,i,r){o.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],i,t.bind(r,r.invalidateLayout));r.invalidateTiles(),n.$on("$destroy",function(){o[0].$$mdDestroyed=!0,a(),r.invalidateLayout();}),t.isDefined(n.$parent.$index)&&n.$watch(function(){return n.$parent.$index;},function(e,t){e!==t&&r.invalidateTiles();});}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},controller:["$attrs",function(e){this.$attrs=e;}],link:n};}function r(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0};}t.module("material.components.gridList",["material.core"]).directive("mdGridList",e).directive("mdGridTile",i).directive("mdGridTileFooter",r).directive("mdGridTileHeader",r).factory("$mdGridLayout",o),e.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia"],n.$inject=["$mdUtil"],n.prototype={invalidateTiles:function invalidateTiles(){this.tilesInvalidated=!0,this.invalidateLayout();},invalidateLayout:function invalidateLayout(){this.layoutInvalidated||(this.layoutInvalidated=!0,this.$timeout_(t.bind(this,this.layout)));},layout:function layout(){try{this.layoutDelegate(this.tilesInvalidated);}finally{this.layoutInvalidated=!1,this.tilesInvalidated=!1;}}},o.$inject=["$mdUtil"],i.$inject=["$mdMedia"];}(),function(){t.module("material.components.icon",["material.core"]);}(),function(){function n(e,t){function n(t,n){e(n);var o=n[0].querySelector(r),i=n[0].querySelector(a);o&&n.addClass("md-icon-left"),i&&n.addClass("md-icon-right");}function o(e,n,o,i){var r=this;r.isErrorGetter=o.mdIsError&&t(o.mdIsError),r.delegateClick=function(){r.input.focus();},r.element=n,r.setFocused=function(e){n.toggleClass("md-input-focused",!!e);},r.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e);},r.setHasPlaceholder=function(e){n.toggleClass("md-input-has-placeholder",!!e);},r.setInvalid=function(e){e?i.addClass(n,"md-input-invalid"):i.removeClass(n,"md-input-invalid");},e.$watch(function(){return r.label&&r.input;},function(e){e&&!r.label.attr("for")&&r.label.attr("for",r.input.attr("id"));});}var i=["INPUT","TEXTAREA","SELECT","MD-SELECT"],r=i.reduce(function(e,t){return e.concat(["md-icon ~ "+t,".md-icon ~ "+t]);},[]).join(","),a=i.reduce(function(e,t){return e.concat([t+" ~ md-icon",t+" ~ .md-icon"]);},[]).join(",");return o.$inject=["$scope","$element","$attrs","$animate"],{restrict:"E",link:n,controller:o};}function o(){return{restrict:"E",require:"^?mdInputContainer",link:function link(e,t,n,o){!o||n.mdNoFloat||t.hasClass("md-container-ignore")||(o.label=t,e.$on("$destroy",function(){o.label=null;}));}};}function i(e,n,o,i,r){function a(a,d,s,c){function l(e){return h.setHasValue(!g.$isEmpty(e)),e;}function m(){h.label&&s.$observe("required",function(e){h.label.toggleClass("md-required",e&&!E);});}function u(){h.setHasValue(d.val().length>0||(d[0].validity||{}).badInput);}function p(){function o(){d.attr("rows",1).css("height","auto").addClass("md-no-flex");var e=c();if(!$){var t=d[0].style.padding||"";$=d.css("padding",0).prop("offsetHeight"),d[0].style.padding=t;}if(b&&$&&(e=Math.max(e,$*b)),v&&$){var n=$*v;n<e?(d.attr("md-no-autogrow",""),e=n):d.removeAttr("md-no-autogrow");}$&&d.attr("rows",Math.round(e/$)),d.css("height",e+"px").removeClass("md-no-flex");}function c(){var e=C.offsetHeight,t=C.scrollHeight-e;return e+Math.max(t,0);}function l(t){return e.nextTick(o),t;}function m(){if(p&&(p=!1,t.element(n).off("resize",o),E&&E(),d.attr("md-no-autogrow","").off("input",o),f)){var e=g.$formatters.indexOf(l);e>-1&&g.$formatters.splice(e,1);}}function u(){function n(e){e.preventDefault(),u=!0,p=e.clientY,f=parseFloat(d.css("height"))||d.prop("offsetHeight");}function o(e){u&&(e.preventDefault(),m(),g.addClass("md-input-resized"));}function i(t){u&&d.css("height",f+(t.pointer.y-p)-e.scrollTop()+"px");}function c(e){u&&(u=!1,g.removeClass("md-input-resized"));}if(!s.hasOwnProperty("mdNoResize")){var l=t.element('<div class="md-resize-handle"></div>'),u=!1,p=null,f=0,g=h.element,b=r.register(l,"drag",{horizontal:!1});d.after(l),l.on("mousedown",n),g.on("$md.dragstart",o).on("$md.drag",i).on("$md.dragend",c),a.$on("$destroy",function(){l.off("mousedown",n).remove(),g.off("$md.dragstart",o).off("$md.drag",i).off("$md.dragend",c),b(),l=null,g=null,b=null;});}}var p=!s.hasOwnProperty("mdNoAutogrow");if(u(),p){var b=s.hasOwnProperty("rows")?parseInt(s.rows):NaN,v=s.hasOwnProperty("maxRows")?parseInt(s.maxRows):NaN,E=a.$on("md-resize-textarea",o),$=null,C=d[0];if(i(function(){e.nextTick(o);},10,!1),d.on("input",o),f&&g.$formatters.push(l),b||d.attr("rows",1),t.element(n).on("resize",o),a.$on("$destroy",m),s.hasOwnProperty("mdDetectHidden")){var y=function(){var e=!1;return function(){var t=0===C.offsetHeight;t===!1&&e===!0&&o(),e=t;};}();a.$watch(function(){return e.nextTick(y,!1),!0;});}}}var h=c[0],f=!!c[1],g=c[1]||e.fakeNgModel(),b=c[2],v=t.isDefined(s.readonly),E=e.parseAttributeBoolean(s.mdNoAsterisk),$=d[0].tagName.toLowerCase();if(h){if("hidden"===s.type)return void d.attr("aria-hidden","true");if(h.input){if(h.input[0].contains(d[0]))return;throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!");}h.input=d,m();var C=t.element('<div class="md-errors-spacer">');d.after(C),h.label||o.expect(d,"aria-label",s.placeholder),d.addClass("md-input"),d.attr("id")||d.attr("id","input_"+e.nextUid()),"input"===$&&"number"===s.type&&s.min&&s.max&&!s.step?d.attr("step","any"):"textarea"===$&&p(),f||u();var y=h.isErrorGetter||function(){return g.$invalid&&(g.$touched||b&&b.$submitted);};a.$watch(y,h.setInvalid),s.ngValue&&s.$observe("value",u),g.$parsers.push(l),g.$formatters.push(l),d.on("input",u),v||d.on("focus",function(t){e.nextTick(function(){h.setFocused(!0);});}).on("blur",function(t){e.nextTick(function(){h.setFocused(!1),u();});}),a.$on("$destroy",function(){h.setFocused(!1),h.setHasValue(!1),h.input=null;});}}return{restrict:"E",require:["^?mdInputContainer","?ngModel","?^form"],link:a};}function r(e,n){function o(o,i,r,a){function d(e){return c.parent?(c.text(String(i.val()||e||"").length+" / "+s),e):e;}var s,c,l,m=a[0],u=a[1];n.nextTick(function(){l=t.element(u.element[0].querySelector(".md-errors-spacer")),c=t.element('<div class="md-char-counter">'),l.append(c),r.$set("ngTrim","false"),m.$formatters.push(d),m.$viewChangeListeners.push(d),i.on("input keydown keyup",function(){d();}),o.$watch(r.mdMaxlength,function(n){s=n,t.isNumber(n)&&n>0?(c.parent().length||e.enter(c,l),d()):e.leave(c);}),m.$validators["md-maxlength"]=function(e,n){return!t.isNumber(s)||s<0||(e||i.val()||n||"").length<=s;};});}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:o};}function a(e){function n(n,o,i,r){if(r){var a=r.element.find("label"),d=r.element.attr("md-no-float");if(a&&a.length||""===d||n.$eval(d))return void r.setHasPlaceholder(!0);if("MD-SELECT"!=o[0].nodeName){var s=t.element('<label ng-click="delegateClick()" tabindex="-1">'+i.placeholder+"</label>");i.$set("placeholder",null),r.element.addClass("md-icon-float").prepend(s),e(s)(n);}}}return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:{pre:n}};}function d(e){function t(t,n,o){function i(){a=!0,e(function(){n[0].select(),a=!1;},1,!1);}function r(e){a&&e.preventDefault();}if("INPUT"===n[0].nodeName||"TEXTAREA"===n[0].nodeName){var a=!1;n.on("focus",i).on("mouseup",r),t.$on("$destroy",function(){n.off("focus",i).off("mouseup",r);});}}return{restrict:"A",link:t};}function s(){function e(e,n,o,i){i&&(n.toggleClass("md-input-messages-animation",!0),n.toggleClass("md-auto-hide",!0),("false"==o.mdAutoHide||t(o))&&n.toggleClass("md-auto-hide",!1));}function t(e){return $.some(function(t){return e[t];});}return{restrict:"EA",link:e,require:"^^?mdInputContainer"};}function c(e){function t(t){function n(){for(var e=t[0];e=e.parentNode;){if(e.nodeType===Node.DOCUMENT_FRAGMENT_NODE)return!0;}return!1;}function o(t){return!!e.getClosest(t,"md-input-container");}function i(e){e.toggleClass("md-input-message-animation",!0);}if(o(t))i(t);else if(n())return function(e,n){o(n)&&i(t);};}return{restrict:"EA",compile:t,priority:100};}function l(e,t,n){return E(e,t,n),{addClass:function addClass(e,t,n){p(e,n);}};}function m(e,t,n){return E(e,t,n),{enter:function enter(e,t){p(e,t);},leave:function leave(e,t){h(e,t);},addClass:function addClass(e,t,n){"ng-hide"==t?h(e,n):n();},removeClass:function removeClass(e,t,n){"ng-hide"==t?p(e,n):n();}};}function u(e,t,n){return E(e,t,n),{enter:function enter(e,t){return f(e);},leave:function leave(e,t){return g(e);}};}function p(e,n){var o,i=[],r=v(e);t.forEach(r.children(),function(e){o=f(t.element(e)),i.push(o.start());}),C.all(i,n);}function h(e,n){var o,i=[],r=v(e);t.forEach(r.children(),function(e){o=g(t.element(e)),i.push(o.start());}),C.all(i,n);}function f(t){var n=parseInt(e.getComputedStyle(t[0]).height),o=parseInt(e.getComputedStyle(t[0]).marginTop),i=v(t),r=b(t),a=o>-n;return a||i.hasClass("md-auto-hide")&&!r.hasClass("md-input-invalid")?y(t,{}):y(t,{event:"enter",structural:!0,from:{opacity:0,"margin-top":-n+"px"},to:{opacity:1,"margin-top":"0"},duration:.3});}function g(t){var n=t[0].offsetHeight,o=e.getComputedStyle(t[0]);return 0==o.opacity?y(t,{}):y(t,{event:"leave",structural:!0,from:{opacity:1,"margin-top":0},to:{opacity:0,"margin-top":-n+"px"},duration:.3});}function b(e){var t=e.controller("mdInputContainer");return t.element;}function v(e){return e.hasClass("md-input-message-animation")?t.element(M.getClosest(e,function(e){return e.classList.contains("md-input-messages-animation");})):t.element(e[0].querySelector(".md-input-messages-animation"));}function E(e,t,n){C=e,y=t,M=n;}t.module("material.components.input",["material.core"]).directive("mdInputContainer",n).directive("label",o).directive("input",i).directive("textarea",i).directive("mdMaxlength",r).directive("placeholder",a).directive("ngMessages",s).directive("ngMessage",c).directive("ngMessageExp",c).directive("mdSelectOnFocus",d).animation(".md-input-invalid",l).animation(".md-input-messages-animation",m).animation(".md-input-message-animation",u).service("mdInputInvalidAnimation",l).service("mdInputMessagesAnimation",m).service("mdInputMessageAnimation",u),n.$inject=["$mdTheming","$parse"],i.$inject=["$mdUtil","$window","$mdAria","$timeout","$mdGesture"],r.$inject=["$animate","$mdUtil"],a.$inject=["$compile"],d.$inject=["$timeout"];var $=["ngIf","ngShow","ngHide","ngSwitchWhen","ngSwitchDefault"];c.$inject=["$mdUtil"];var C,y,M;l.$inject=["$$AnimateRunner","$animateCss","$mdUtil"],m.$inject=["$$AnimateRunner","$animateCss","$mdUtil"],u.$inject=["$$AnimateRunner","$animateCss","$mdUtil"];}(),function(){function e(e){return{restrict:"E",compile:function compile(t){return t[0].setAttribute("role","list"),e;}};}function n(e,n,o,i){var r=["md-checkbox","md-switch","md-menu"];return{restrict:"E",controller:"MdListController",compile:function compile(a,d){function s(){for(var e,t,n=["md-switch","md-checkbox"],o=0;t=n[o];++o){if((e=a.find(t)[0])&&!e.hasAttribute("aria-label")){var i=a.find("p")[0];if(!i)return;e.setAttribute("aria-label","Toggle "+i.textContent);}}}function c(){var e=t.element(E),n=e.parent().hasClass("md-secondary-container")||E.parentNode.firstElementChild!==E,o="left";n&&(o="right"),e.attr("md-position-mode")||e.attr("md-position-mode",o+" target");var i=e.children().eq(0);g(i[0])||i.attr("ng-click","$mdOpenMenu($event)"),i.attr("aria-label")||i.attr("aria-label","Open List Menu");}function l(e){if("div"==e)C=t.element('<div class="md-no-style md-list-item-inner">'),C.append(a.contents()),a.addClass("md-proxy-focus");else{C=t.element('<div class="md-button md-no-style">   <div class="md-list-item-inner"></div></div>');var n=t.element('<md-button class="md-no-style"></md-button>');n[0].setAttribute("aria-label",a[0].textContent),p(a[0],n[0]),a.hasClass("md-no-focus")&&n.addClass("md-no-focus"),C.prepend(n),C.children().eq(1).append(a.contents()),a.addClass("_md-button-wrap");}a[0].setAttribute("tabindex","-1"),a.append(C);}function m(){var e=t.element('<div class="md-secondary-container">');t.forEach($,function(t){u(t,e);}),C.append(e);}function u(n,o){if(n&&!f(n)&&n.hasAttribute("ng-click")){e.expect(n,"aria-label");var i=t.element('<md-button class="md-secondary md-icon-button">');p(n,i[0],["ng-if","ng-hide","ng-show"]),n.setAttribute("tabindex","-1"),i.append(n),n=i[0];}n&&(!g(n)||!d.ngClick&&h(n))&&t.element(n).removeClass("md-secondary"),a.addClass("md-with-secondary"),o.append(n);}function p(e,n,i){var r=o.prefixer(["ng-if","ng-click","ng-dblclick","aria-label","ng-disabled","ui-sref","href","ng-href","target","ng-attr-ui-sref","ui-sref-opts"]);i&&(r=r.concat(o.prefixer(i))),t.forEach(r,function(t){e.hasAttribute(t)&&(n.setAttribute(t,e.getAttribute(t)),e.removeAttribute(t));});}function h(e){return r.indexOf(e.nodeName.toLowerCase())!=-1;}function f(e){var t=e.nodeName.toUpperCase();return"MD-BUTTON"==t||"BUTTON"==t;}function g(e){for(var t=e.attributes,n=0;n<t.length;n++){if("ngClick"===d.$normalize(t[n].name))return!0;}return!1;}function b(e,a,d,s){function c(){p&&p.children&&!b&&t.forEach(r,function(e){t.forEach(p.querySelectorAll(e+":not(.md-secondary)"),function(e){u.push(e);});});}function l(){(1==u.length||b)&&(a.addClass("md-clickable"),b||s.attachRipple(e,t.element(a[0].querySelector(".md-no-style"))));}function m(e){var t=["md-slider"];if(!e.path)return t.indexOf(e.target.tagName.toLowerCase())!==-1;for(var n=e.path.indexOf(a.children()[0]),o=0;o<n;o++){if(t.indexOf(e.path[o].tagName.toLowerCase())!==-1)return!0;}}a.addClass("_md");var u=[],p=a[0].firstElementChild,h=a.hasClass("_md-button-wrap"),f=h?p.firstElementChild:p,b=f&&g(f);c(),l(),a.hasClass("md-proxy-focus")&&u.length&&t.forEach(u,function(n){n=t.element(n),e.mouseActive=!1,n.on("mousedown",function(){e.mouseActive=!0,i(function(){e.mouseActive=!1;},100);}).on("focus",function(){e.mouseActive===!1&&a.addClass("md-focused"),n.on("blur",function t(){a.removeClass("md-focused"),n.off("blur",t);});});});var v=function v(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName&&!e.target.isContentEditable){var t=e.which||e.keyCode;t==n.KEY_CODE.SPACE&&f&&(f.click(),e.preventDefault(),e.stopPropagation());}};b||u.length||f&&f.addEventListener("keypress",v),a.off("click"),a.off("keypress"),1==u.length&&f&&a.children().eq(0).on("click",function(e){if(!m(e)){var n=o.getClosest(e.target,"BUTTON");!n&&f.contains(e.target)&&t.forEach(u,function(n){e.target===n||n.contains(e.target)||("MD-MENU"===n.nodeName&&(n=n.children[0]),t.element(n).triggerHandler("click"));});}}),e.$on("$destroy",function(){f&&f.removeEventListener("keypress",v);});}var v,E,$=a[0].querySelectorAll(".md-secondary"),C=a;if(a[0].setAttribute("role","listitem"),d.ngClick||d.ngDblclick||d.ngHref||d.href||d.uiSref||d.ngAttrUiSref)l("button");else{for(var y,M=0;y=r[M];++M){if(E=a[0].querySelector(y)){v=!0;break;}}v?l("div"):a[0].querySelector("md-button:not(.md-secondary):not(.md-exclude)")||a.addClass("md-no-proxy");}return m(),s(),v&&"MD-MENU"===E.nodeName&&c(),b;}};}function o(e,t,n){function o(e,t){var o={};n.attach(e,t,o);}var i=this;i.attachRipple=o;}t.module("material.components.list",["material.core"]).controller("MdListController",o).directive("mdList",e).directive("mdListItem",n),e.$inject=["$mdTheming"],n.$inject=["$mdAria","$mdConstant","$mdUtil","$timeout"],o.$inject=["$scope","$element","$mdListInkRipple"];}(),function(){t.module("material.components.menu",["material.core","material.components.backdrop"]);}(),function(){t.module("material.components.menuBar",["material.core","material.components.menu"]);}(),function(){function e(e){return{restrict:"E",transclude:!0,controller:o,controllerAs:"ctrl",bindToController:!0,scope:{mdSelectedNavItem:"=?",navBarAriaLabel:"@?"},template:'<div class="md-nav-bar"><nav role="navigation"><ul class="_md-nav-bar-list" ng-transclude role="listbox"tabindex="0"ng-focus="ctrl.onFocus()"ng-blur="ctrl.onBlur()"ng-keydown="ctrl.onKeydown($event)"aria-label="{{ctrl.navBarAriaLabel}}"></ul></nav><md-nav-ink-bar></md-nav-ink-bar></div>',link:function link(n,o,i,r){r.navBarAriaLabel||e.expectAsync(o,"aria-label",t.noop);}};}function o(e,t,n,o){this._$timeout=n,this._$scope=t,this._$mdConstant=o,this.mdSelectedNavItem,this.navBarAriaLabel,this._navBarEl=e[0],this._inkbar;var i=this,r=this._$scope.$watch(function(){return i._navBarEl.querySelectorAll("._md-nav-button").length;},function(e){e>0&&(i._initTabs(),r());});}function i(e){return{restrict:"E",require:["mdNavItem","^mdNavBar"],controller:r,bindToController:!0,controllerAs:"ctrl",replace:!0,transclude:!0,template:'<li class="md-nav-item" role="option" aria-selected="{{ctrl.isSelected()}}"><md-button ng-if="ctrl.mdNavSref" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ui-sref="{{ctrl.mdNavSref}}"><span ng-transclude class="_md-nav-button-text"></span></md-button><md-button ng-if="ctrl.mdNavHref" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ng-href="{{ctrl.mdNavHref}}"><span ng-transclude class="_md-nav-button-text"></span></md-button><md-button ng-if="ctrl.mdNavClick" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ng-click="ctrl.mdNavClick()"><span ng-transclude class="_md-nav-button-text"></span></md-button></li>',scope:{mdNavClick:"&?",mdNavHref:"@?",mdNavSref:"@?",name:"@"},link:function link(n,o,i,r){var a=r[0],d=r[1];e(function(){a.name||(a.name=t.element(o[0].querySelector("._md-nav-button-text")).text().trim());var e=t.element(o[0].querySelector("._md-nav-button"));e.on("click",function(){d.mdSelectedNavItem=a.name,n.$apply();});});}};}function r(e){this._$element=e,this.mdNavClick,this.mdNavHref,this.name,this._selected=!1,this._focused=!1;var t=!!e.attr("md-nav-click"),n=!!e.attr("md-nav-href"),o=!!e.attr("md-nav-sref");if((t?1:0)+(n?1:0)+(o?1:0)>1)throw Error("Must specify exactly one of md-nav-click, md-nav-href, md-nav-sref for nav-item directive");}t.module("material.components.navBar",["material.core"]).controller("MdNavBarController",o).directive("mdNavBar",e).controller("MdNavItemController",r).directive("mdNavItem",i),e.$inject=["$mdAria"],o.$inject=["$element","$scope","$timeout","$mdConstant"],o.prototype._initTabs=function(){this._inkbar=t.element(this._navBarEl.getElementsByTagName("md-nav-ink-bar")[0]);var e=this;this._$timeout(function(){e._updateTabs(e.mdSelectedNavItem,n);}),this._$scope.$watch("ctrl.mdSelectedNavItem",function(t,n){e._$timeout(function(){e._updateTabs(t,n);});});},o.prototype._updateTabs=function(e,t){var n=this,o=this._getTabs(),i=-1,r=-1,a=this._getTabByName(e),d=this._getTabByName(t);d&&(d.setSelected(!1),i=o.indexOf(d)),a&&(a.setSelected(!0),r=o.indexOf(a)),this._$timeout(function(){n._updateInkBarStyles(a,r,i);});},o.prototype._updateInkBarStyles=function(e,t,n){if(this._inkbar.toggleClass("_md-left",t<n).toggleClass("_md-right",t>n),this._inkbar.css({display:t<0?"none":""}),e){var o=e.getButtonEl(),i=o.offsetLeft;this._inkbar.css({left:i+"px",width:o.offsetWidth+"px"});}},o.prototype._getTabs=function(){var e=Array.prototype.slice.call(this._navBarEl.querySelectorAll(".md-nav-item"));return e.map(function(e){return t.element(e).controller("mdNavItem");});},o.prototype._getTabByName=function(e){return this._findTab(function(t){return t.getName()==e;});},o.prototype._getSelectedTab=function(){return this._findTab(function(e){return e.isSelected();});},o.prototype.getFocusedTab=function(){return this._findTab(function(e){return e.hasFocus();});},o.prototype._findTab=function(e){for(var t=this._getTabs(),n=0;n<t.length;n++){if(e(t[n]))return t[n];}return null;},o.prototype.onFocus=function(){var e=this._getSelectedTab();e&&e.setFocused(!0);},o.prototype.onBlur=function(){var e=this.getFocusedTab();e&&e.setFocused(!1);},o.prototype._moveFocus=function(e,t){e.setFocused(!1),t.setFocused(!0);},o.prototype.onKeydown=function(e){var t=this._$mdConstant.KEY_CODE,n=this._getTabs(),o=this.getFocusedTab();if(o){var i=n.indexOf(o);switch(e.keyCode){case t.UP_ARROW:case t.LEFT_ARROW:i>0&&this._moveFocus(o,n[i-1]);break;case t.DOWN_ARROW:case t.RIGHT_ARROW:i<n.length-1&&this._moveFocus(o,n[i+1]);break;case t.SPACE:case t.ENTER:this._$timeout(function(){o.getButtonEl().click();});}}},i.$inject=["$$rAF"],r.$inject=["$element"],r.prototype.getNgClassMap=function(){return{"md-active":this._selected,"md-primary":this._selected,"md-unselected":!this._selected,"md-focused":this._focused};},r.prototype.getName=function(){return this.name;},r.prototype.getButtonEl=function(){return this._$element[0].querySelector("._md-nav-button");},r.prototype.setSelected=function(e){this._selected=e;},r.prototype.isSelected=function(){return this._selected;},r.prototype.setFocused=function(e){this._focused=e;},r.prototype.hasFocus=function(){return this._focused;};}(),function(){function e(e,n,o,a){this._defaultConfigOptions={bindToController:!0,clickOutsideToClose:!1,disableParentScroll:!1,escapeToClose:!1,focusOnOpen:!0,fullscreen:!1,hasBackdrop:!1,propagateContainerEvents:!1,transformTemplate:t.bind(this,this._wrapTemplate),trapFocus:!1,zIndex:d},this._config={},this._$rootElement=e,this._$rootScope=n,this._$injector=o,this._$window=a,this.animation=r.animation,this.xPosition=i.xPosition,this.yPosition=i.yPosition;}function o(e,t){this._$q=t.get("$q"),this._$mdCompiler=t.get("$mdCompiler"),this._$mdConstant=t.get("$mdConstant"),this._$mdUtil=t.get("$mdUtil"),this._$rootScope=t.get("$rootScope"),this._$animate=t.get("$animate"),this._$mdPanel=t.get("$mdPanel"),this._$log=t.get("$log"),this._$window=t.get("$window"),this._$$rAF=t.get("$$rAF"),this.id=e.id,this.config=e,this.isAttached=!1,this._panelContainer,this._panelEl,this._removeListeners=[],this._topFocusTrap,this._bottomFocusTrap,this._backdropRef,this._restoreScroll=null;}function i(e){this._$window=e.get("$window"),this._isRTL="rtl"===e.get("$mdUtil").bidi(),this._absolute=!1,this._relativeToEl,this._top="",this._bottom="",this._left="",this._right="",this._translateX=[],this._translateY=[],this._positions=[],this._actualPosition;}function r(e){this._$mdUtil=e.get("$mdUtil"),this._openFrom,this._closeTo,this._animationClass="";}function a(e){var n=t.isString(e)?document.querySelector(e):e;return t.element(n);}t.module("material.components.panel",["material.core","material.components.backdrop"]).service("$mdPanel",e);var d=80,s="_md-panel-hidden",c=t.element('<div class="_md-panel-focus-trap" tabindex="0"></div>');e.$inject=["$rootElement","$rootScope","$injector","$window"],e.prototype.create=function(e){var n=e||{};this._config={scope:this._$rootScope.$new(!0),attachTo:this._$rootElement},t.extend(this._config,this._defaultConfigOptions,n);var i="panel_"+this._$injector.get("$mdUtil").nextUid(),r=t.extend({id:i},this._config);return new o(r,this._$injector);},e.prototype.open=function(e){var t=this.create(e);return t.open().then(function(){return t;});},e.prototype.newPanelPosition=function(){return new i(this._$injector);},e.prototype.newPanelAnimation=function(){return new r(this._$injector);},e.prototype._wrapTemplate=function(e){var t=e||"";return'<div class="md-panel-outer-wrapper">  <div class="md-panel" style="left: -9999px;">'+t+"</div></div>";},o.prototype.open=function(){var e=this;return this._$q(function(t,n){var o=e._done(t,e),i=e._simpleBind(e.show,e);e.attach().then(i).then(o)["catch"](n);});},o.prototype.close=function(){var e=this;return this._$q(function(t,n){var o=e._done(t,e),i=e._simpleBind(e.detach,e);e.hide().then(i).then(o)["catch"](n);});},o.prototype.attach=function(){if(this.isAttached&&this._panelEl)return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e.config.onDomAdded||t.noop,a=function a(t){return e.isAttached=!0,e._addEventListeners(),t;};e._$q.all([e._createBackdrop(),e._createPanel().then(a)["catch"](o)]).then(r).then(i)["catch"](o);});},o.prototype.detach=function(){if(!this.isAttached)return this._$q.when(this);var e=this,n=e.config.onDomRemoved||t.noop,o=function o(){return e._removeEventListeners(),e._topFocusTrap&&e._topFocusTrap.parentNode&&e._topFocusTrap.parentNode.removeChild(e._topFocusTrap),e._bottomFocusTrap&&e._bottomFocusTrap.parentNode&&e._bottomFocusTrap.parentNode.removeChild(e._bottomFocusTrap),e._panelContainer.remove(),e.isAttached=!1,e._$q.when(e);};return this._restoreScroll&&(this._restoreScroll(),this._restoreScroll=null),this._$q(function(t,i){var r=e._done(t,e);e._$q.all([o(),!e._backdropRef||e._backdropRef.detach()]).then(n).then(r)["catch"](i);});},o.prototype.destroy=function(){this.config.scope.$destroy(),this.config.locals=null;},o.prototype.show=function(){if(!this._panelContainer)return this._$q(function(e,t){t("Panel does not exist yet. Call open() or attach().");});if(!this._panelContainer.hasClass(s))return this._$q.when(this);var e=this,n=function n(){return e.removeClass(s),e._animateOpen();};return this._$q(function(o,i){var r=e._done(o,e),a=e.config.onOpenComplete||t.noop;e._$q.all([e._backdropRef?e._backdropRef.show():e,n().then(function(){e._focusOnOpen();},i)]).then(a).then(r)["catch"](i);});},o.prototype.hide=function(){if(!this._panelContainer)return this._$q(function(e,t){t("Panel does not exist yet. Call open() or attach().");});if(this._panelContainer.hasClass(s))return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e.config.onRemoving||t.noop,d=function d(){var t=e.config.origin;t&&a(t).focus();},c=function c(){e.addClass(s);};e._$q.all([e._backdropRef?e._backdropRef.hide():e,e._animateClose().then(r).then(c).then(d)["catch"](o)]).then(i,o);});},o.prototype.addClass=function(e,t){if(!this._panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");t||this._panelContainer.hasClass(e)?t&&!this._panelEl.hasClass(e)&&this._panelEl.addClass(e):this._panelContainer.addClass(e);},o.prototype.removeClass=function(e,t){if(!this._panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");!t&&this._panelContainer.hasClass(e)?this._panelContainer.removeClass(e):t&&this._panelEl.hasClass(e)&&this._panelEl.removeClass(e);},o.prototype.toggleClass=function(e,t){if(!this._panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");t?this._panelEl.toggleClass(e):this._panelContainer.toggleClass(e);},o.prototype._createPanel=function(){var e=this;return this._$q(function(n,o){e.config.locals||(e.config.locals={}),e.config.locals.mdPanelRef=e,e._$mdCompiler.compile(e.config).then(function(i){e._panelContainer=i.link(e.config.scope),a(e.config.attachTo).append(e._panelContainer),e.config.disableParentScroll&&(e._restoreScroll=e._$mdUtil.disableScrollAround(null,e._panelContainer,{disableScrollMask:!0})),e._panelEl=t.element(e._panelContainer[0].querySelector(".md-panel")),e.config.panelClass&&e._panelEl.addClass(e.config.panelClass),e.config.propagateContainerEvents&&e._panelContainer.css("pointer-events","none"),e._$animate.pin&&e._$animate.pin(e._panelContainer,a(e.config.attachTo)),e._configureTrapFocus(),e._addStyles().then(function(){n(e);},o);},o);});},o.prototype._addStyles=function(){var e=this;return this._$q(function(t){e._panelContainer.css("z-index",e.config.zIndex),e._panelEl.css("z-index",e.config.zIndex+1);var n=function n(){e._panelEl.css("left",""),e._panelContainer.addClass(s),t(e);};if(e.config.fullscreen)return e._panelEl.addClass("_md-panel-fullscreen"),void n();var o=e.config.position;return o?void e._$rootScope.$$postDigest(function(){e._updatePosition(!0),t(e);}):void n();});},o.prototype.updatePosition=function(e){if(!this._panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");this.config.position=e,this._updatePosition();},o.prototype._updatePosition=function(e){var t=this.config.position;if(t){t._setPanelPosition(this._panelEl),e&&this._panelContainer.addClass(s),this._panelEl.css(i.absPosition.TOP,t.getTop()),this._panelEl.css(i.absPosition.BOTTOM,t.getBottom()),this._panelEl.css(i.absPosition.LEFT,t.getLeft()),this._panelEl.css(i.absPosition.RIGHT,t.getRight());var n=this._$mdConstant.CSS.TRANSFORM;this._panelEl.css(n,t.getTransform());}},o.prototype._focusOnOpen=function(){if(this.config.focusOnOpen){var e=this;this._$rootScope.$$postDigest(function(){var t=e._$mdUtil.findFocusTarget(e._panelEl)||e._panelEl;t.focus();});}},o.prototype._createBackdrop=function(){if(this.config.hasBackdrop){if(!this._backdropRef){var e=this._$mdPanel.newPanelAnimation().openFrom(this.config.attachTo).withAnimation({open:"_md-opaque-enter",close:"_md-opaque-leave"}),t={animation:e,attachTo:this.config.attachTo,focusOnOpen:!1,panelClass:"_md-panel-backdrop",zIndex:this.config.zIndex-1};this._backdropRef=this._$mdPanel.create(t);}if(!this._backdropRef.isAttached)return this._backdropRef.attach();}},o.prototype._addEventListeners=function(){this._configureEscapeToClose(),this._configureClickOutsideToClose(),this._configureScrollListener();},o.prototype._removeEventListeners=function(){this._removeListeners&&this._removeListeners.forEach(function(e){e();}),this._removeListeners=[];},o.prototype._configureEscapeToClose=function(){if(this.config.escapeToClose){var e=a(this.config.attachTo),t=this,n=function n(e){e.keyCode===t._$mdConstant.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),t.close());};this._panelContainer.on("keydown",n),e.on("keydown",n),this._removeListeners.push(function(){t._panelContainer.off("keydown",n),e.off("keydown",n);});}},o.prototype._configureClickOutsideToClose=function(){if(this.config.clickOutsideToClose){var e,t=this._panelContainer,n=function n(t){e=t.target;},o=this,i=function i(n){e===t[0]&&n.target===t[0]&&(n.stopPropagation(),n.preventDefault(),o.close());};t.on("mousedown",n),t.on("mouseup",i),this._removeListeners.push(function(){t.off("mousedown",n),t.off("mouseup",i);});}},o.prototype._configureScrollListener=function(){var e=t.bind(this,this._updatePosition),n=this._$$rAF.throttle(e),o=this,i=function i(){o.config.disableParentScroll||n();};this._$window.addEventListener("scroll",i,!0),this._removeListeners.push(function(){o._$window.removeEventListener("scroll",i,!0);});},o.prototype._configureTrapFocus=function(){if(this._panelEl.attr("tabIndex","-1"),this.config.trapFocus){var e=this._panelEl;this._topFocusTrap=c.clone()[0],this._bottomFocusTrap=c.clone()[0];var t=function t(){e.focus();};this._topFocusTrap.addEventListener("focus",t),this._bottomFocusTrap.addEventListener("focus",t),this._removeListeners.push(this._simpleBind(function(){this._topFocusTrap.removeEventListener("focus",t),this._bottomFocusTrap.removeEventListener("focus",t);},this)),e[0].parentNode.insertBefore(this._topFocusTrap,e[0]),e.after(this._bottomFocusTrap);}},o.prototype._animateOpen=function(){this.addClass("md-panel-is-showing");var e=this.config.animation;if(!e)return this.addClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=t._done(n,t),i=function i(){t._$log.warn("MdPanel Animations failed. Showing panel without animating."),o();};e.animateOpen(t._panelEl).then(o,i);});},o.prototype._animateClose=function(){var e=this.config.animation;if(!e)return this.removeClass("md-panel-is-showing"),this.removeClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=function o(){t.removeClass("md-panel-is-showing"),n(t);},i=function i(){t._$log.warn("MdPanel Animations failed. Hiding panel without animating."),o();};e.animateClose(t._panelEl).then(o,i);});},o.prototype._simpleBind=function(e,t){return function(n){return e.apply(t,n);};},o.prototype._done=function(e,t){return function(){e(t);};},i.xPosition={CENTER:"center",ALIGN_START:"align-start",ALIGN_END:"align-end",OFFSET_START:"offset-start",OFFSET_END:"offset-end"},i.yPosition={CENTER:"center",ALIGN_TOPS:"align-tops",ALIGN_BOTTOMS:"align-bottoms",ABOVE:"above",BELOW:"below"},i.absPosition={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},i.prototype.absolute=function(){return this._absolute=!0,this;},i.prototype._setPosition=function(e,n){if(e===i.absPosition.RIGHT||e===i.absPosition.LEFT)this._left=this._right="";else{if(e!==i.absPosition.BOTTOM&&e!==i.absPosition.TOP){var o=Object.keys(i.absPosition).join().toLowerCase();throw new Error("Position must be one of "+o+".");}this._top=this._bottom="";}return this["_"+e]=t.isString(n)?n:"0",this;},i.prototype.top=function(e){return this._setPosition(i.absPosition.TOP,e);},i.prototype.bottom=function(e){return this._setPosition(i.absPosition.BOTTOM,e);},i.prototype.start=function(e){var t=this._isRTL?i.absPosition.RIGHT:i.absPosition.LEFT;return this._setPosition(t,e);},i.prototype.end=function(e){var t=this._isRTL?i.absPosition.LEFT:i.absPosition.RIGHT;return this._setPosition(t,e);},i.prototype.left=function(e){return this._setPosition(i.absPosition.LEFT,e);},i.prototype.right=function(e){return this._setPosition(i.absPosition.RIGHT,e);},i.prototype.centerHorizontally=function(){return this._left="50%",this._right="",this._translateX=["-50%"],this;},i.prototype.centerVertically=function(){return this._top="50%",this._bottom="",this._translateY=["-50%"],this;},i.prototype.center=function(){return this.centerHorizontally().centerVertically();},i.prototype.relativeTo=function(e){return this._absolute=!1,this._relativeToEl=a(e),this;},i.prototype.addPanelPosition=function(e,t){if(!this._relativeToEl)throw new Error("addPanelPosition can only be used with relative positioning. Set relativeTo first.");return this._validateXPosition(e),this._validateYPosition(t),this._positions.push({x:e,y:t}),this;},i.prototype._validateYPosition=function(e){if(null!=e){for(var t,n=Object.keys(i.yPosition),o=[],r=0;t=n[r];r++){var a=i.yPosition[t];if(o.push(a),a===e)return;}throw new Error("Panel y position only accepts the following values:\n"+o.join(" | "));}},i.prototype._validateXPosition=function(e){if(null!=e){for(var t,n=Object.keys(i.xPosition),o=[],r=0;t=n[r];r++){var a=i.xPosition[t];if(o.push(a),a===e)return;}throw new Error("Panel x Position only accepts the following values:\n"+o.join(" | "));}},i.prototype.withOffsetX=function(e){return this._translateX.push(e),this;},i.prototype.withOffsetY=function(e){return this._translateY.push(e),this;},i.prototype.getTop=function(){return this._top;},i.prototype.getBottom=function(){return this._bottom;},i.prototype.getLeft=function(){return this._left;},i.prototype.getRight=function(){return this._right;},i.prototype.getTransform=function(){var e=this._reduceTranslateValues("translateX",this._translateX),t=this._reduceTranslateValues("translateY",this._translateY);return(e+" "+t).trim();},i.prototype._isOnscreen=function(e){var t=parseInt(this.getLeft()),n=parseInt(this.getTop()),o=t+e[0].offsetWidth,i=n+e[0].offsetHeight;return t>=0&&n>=0&&i<=this._$window.innerHeight&&o<=this._$window.innerWidth;},i.prototype.getActualPosition=function(){return this._actualPosition;},i.prototype._reduceTranslateValues=function(e,t){return t.map(function(t){return e+"("+t+")";}).join(" ");},i.prototype._setPanelPosition=function(e){if(!this._absolute){if(this._actualPosition)return void this._calculatePanelPosition(e,this._actualPosition);for(var t=0;t<this._positions.length&&(this._actualPosition=this._positions[t],this._calculatePanelPosition(e,this._actualPosition),!this._isOnscreen(e));t++){}}},i.prototype._reverseXPosition=function(e){if(e!==i.xPosition.CENTER){var t="start",n="end";return e.indexOf(t)>-1?e.replace(t,n):e.replace(n,t);}},i.prototype._bidi=function(e){return this._isRTL?this._reverseXPosition(e):e;},i.prototype._calculatePanelPosition=function(e,t){var n=e[0].getBoundingClientRect(),o=n.width,r=n.height,a=this._relativeToEl[0].getBoundingClientRect(),d=a.left,s=a.right,c=a.width;switch(this._bidi(t.x)){case i.xPosition.OFFSET_START:this._left=d-o+"px";break;case i.xPosition.ALIGN_END:this._left=s-o+"px";break;case i.xPosition.CENTER:var l=d+.5*c-.5*o;this._left=l+"px";break;case i.xPosition.ALIGN_START:this._left=d+"px";break;case i.xPosition.OFFSET_END:this._left=s+"px";}var m=a.top,u=a.bottom,p=a.height;switch(t.y){case i.yPosition.ABOVE:this._top=m-r+"px";break;case i.yPosition.ALIGN_BOTTOMS:this._top=u-r+"px";break;case i.yPosition.CENTER:var h=m+.5*p-.5*r;this._top=h+"px";break;case i.yPosition.ALIGN_TOPS:this._top=m+"px";break;case i.yPosition.BELOW:this._top=u+"px";}},r.animation={SLIDE:"md-panel-animate-slide",SCALE:"md-panel-animate-scale",FADE:"md-panel-animate-fade"},r.prototype.openFrom=function(e){return e=e.target?e.target:e,this._openFrom=this._getPanelAnimationTarget(e),this._closeTo||(this._closeTo=this._openFrom),this;},r.prototype.closeTo=function(e){return this._closeTo=this._getPanelAnimationTarget(e),this;},r.prototype._getPanelAnimationTarget=function(e){return t.isDefined(e.top)||t.isDefined(e.left)?{element:n,bounds:{top:e.top||0,left:e.left||0}}:this._getBoundingClientRect(a(e));},r.prototype.withAnimation=function(e){return this._animationClass=e,this;},r.prototype.animateOpen=function(e){var n=this._$mdUtil.dom.animator;this._fixBounds(e);var o={},i=e[0].style.transform||"",a=n.toTransformCss(i),d=n.toTransformCss(i);switch(this._animationClass){case r.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-enter"};var s=n.calculateSlideToOrigin(e,this._openFrom)||"";a=n.toTransformCss(s+" "+i);break;case r.animation.SCALE:o={transitionInClass:"_md-panel-animate-enter"};var c=n.calculateZoomToOrigin(e,this._openFrom)||"";a=n.toTransformCss(c+" "+i);break;case r.animation.FADE:o={transitionInClass:"_md-panel-animate-enter"};break;default:o=t.isString(this._animationClass)?{transitionInClass:this._animationClass}:{transitionInClass:this._animationClass.open,transitionOutClass:this._animationClass.close};}return n.translate3d(e,a,d,o);},r.prototype.animateClose=function(e){var n=this._$mdUtil.dom.animator,o={},i=e[0].style.transform||"",a=n.toTransformCss(i),d=n.toTransformCss(i);switch(this._animationClass){case r.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-leave"};var s=n.calculateSlideToOrigin(e,this._closeTo)||"";d=n.toTransformCss(s+" "+i);break;case r.animation.SCALE:o={transitionInClass:"_md-panel-animate-scale-out _md-panel-animate-leave"};var c=n.calculateZoomToOrigin(e,this._closeTo)||"";d=n.toTransformCss(c+" "+i);break;case r.animation.FADE:o={transitionInClass:"_md-panel-animate-fade-out _md-panel-animate-leave"};break;default:o=t.isString(this._animationClass)?{transitionOutClass:this._animationClass}:{transitionInClass:this._animationClass.close,transitionOutClass:this._animationClass.open};}return n.translate3d(e,a,d,o);},r.prototype._fixBounds=function(e){var t=e[0].offsetWidth,n=e[0].offsetHeight;this._openFrom&&null==this._openFrom.bounds.height&&(this._openFrom.bounds.height=n),this._openFrom&&null==this._openFrom.bounds.width&&(this._openFrom.bounds.width=t),this._closeTo&&null==this._closeTo.bounds.height&&(this._closeTo.bounds.height=n),this._closeTo&&null==this._closeTo.bounds.width&&(this._closeTo.bounds.width=t);},r.prototype._getBoundingClientRect=function(e){if(e instanceof t.element)return{element:e,bounds:e[0].getBoundingClientRect()};};}(),function(){t.module("material.components.progressCircular",["material.core"]);}(),function(){function e(e,n,o){function i(e,t,n){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),r;}function r(o,i,r){function u(){r.$observe("value",function(e){var t=a(e);i.attr("aria-valuenow",t),h()!=l&&f($,t);}),r.$observe("mdBufferValue",function(e){f(E,a(e));}),r.$observe("disabled",function(e){b=e===!0||e===!1?!!e:t.isDefined(e),i.toggleClass(m,b),C.toggleClass(g,!b);}),r.$observe("mdMode",function(e){switch(g&&C.removeClass(g),e){case l:case c:case d:case s:C.addClass(g="md-mode-"+e);break;default:C.addClass(g="md-mode-"+s);}});}function p(){if(t.isUndefined(r.mdMode)){var e=t.isDefined(r.value),n=e?d:s;i.attr("md-mode",n),r.mdMode=n;}}function h(){var e=(r.mdMode||"").trim();if(e)switch(e){case d:case s:case c:case l:break;default:e=s;}return e;}function f(e,o){if(!b&&h()){var i=n.supplant("translateX({0}%) scale({1},1)",[(o-100)/2,o/100]),r=v({transform:i});t.element(e).css(r);}}e(i);var g,b=r.hasOwnProperty("disabled"),v=n.dom.animator.toCss,E=t.element(i[0].querySelector(".md-bar1")),$=t.element(i[0].querySelector(".md-bar2")),C=t.element(i[0].querySelector(".md-container"));i.attr("md-mode",h()).toggleClass(m,b),p(),u();}function a(e){return Math.max(0,Math.min(e||0,100));}var d="determinate",s="indeterminate",c="buffer",l="query",m="_md-progress-linear-disabled";return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:i};}t.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e),e.$inject=["$mdTheming","$mdUtil","$log"];}(),function(){function e(e,n,o,i){function r(r,a,d,s){function c(){a.hasClass("md-focused")||a.addClass("md-focused");}function l(o){var i=o.which||o.keyCode;if(i==n.KEY_CODE.ENTER||o.currentTarget==o.target)switch(i){case n.KEY_CODE.LEFT_ARROW:case n.KEY_CODE.UP_ARROW:o.preventDefault(),m.selectPrevious(),c();break;case n.KEY_CODE.RIGHT_ARROW:case n.KEY_CODE.DOWN_ARROW:o.preventDefault(),m.selectNext(),c();break;case n.KEY_CODE.ENTER:var r=t.element(e.getClosest(a[0],"form"));r.length>0&&r.triggerHandler("submit");}}a.addClass("_md"),o(a);var m=s[0],u=s[1]||e.fakeNgModel();m.init(u),r.mouseActive=!1,a.attr({role:"radiogroup",tabIndex:a.attr("tabindex")||"0"}).on("keydown",l).on("mousedown",function(e){r.mouseActive=!0,i(function(){r.mouseActive=!1;},100);}).on("focus",function(){r.mouseActive===!1&&m.$element.addClass("md-focused");}).on("blur",function(){m.$element.removeClass("md-focused");});}function a(e){this._radioButtonRenderFns=[],this.$element=e;}function d(){return{init:function init(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=t.bind(this,this.render);},add:function add(e){this._radioButtonRenderFns.push(e);},remove:function remove(e){var t=this._radioButtonRenderFns.indexOf(e);t!==-1&&this._radioButtonRenderFns.splice(t,1);},render:function render(){this._radioButtonRenderFns.forEach(function(e){e();});},setViewValue:function setViewValue(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render();},getViewValue:function getViewValue(){return this._ngModelCtrl.$viewValue;},selectNext:function selectNext(){return s(this.$element,1);},selectPrevious:function selectPrevious(){return s(this.$element,-1);},setActiveDescendant:function setActiveDescendant(e){this.$element.attr("aria-activedescendant",e);},isDisabled:function isDisabled(){return this.$element[0].hasAttribute("disabled");}};}function s(n,o){var i=e.iterator(n[0].querySelectorAll("md-radio-button"),!0);if(i.count()){var r=function r(e){return!t.element(e).attr("disabled");},a=n[0].querySelector("md-radio-button.md-checked"),d=i[o<0?"previous":"next"](a,r)||i.first();t.element(d).triggerHandler("click");}}return a.prototype=d(),{restrict:"E",controller:["$element",a],require:["mdRadioGroup","?ngModel"],link:{pre:r}};}function n(e,t,n){function o(o,r,a,d){function s(){if(!d)throw"RadioButton: No RadioGroupController could be found.";d.add(l),a.$observe("value",l),r.on("click",c).on("$destroy",function(){d.remove(l);});}function c(e){r[0].hasAttribute("disabled")||d.isDisabled()||o.$apply(function(){d.setViewValue(a.value,e&&e.type);});}function l(){function e(e){"MD-RADIO-GROUP"!=r.parent()[0].nodeName&&r.parent()[e?"addClass":"removeClass"](i);}var t=d.getViewValue()==a.value;t!==u&&(u=t,r.attr("aria-checked",t),t?(e(!0),r.addClass(i),d.setActiveDescendant(r.attr("id"))):(e(!1),r.removeClass(i)));}function m(n,o){function i(){return a.id||"radio_"+t.nextUid();}o.ariaId=i(),n.attr({id:o.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label");}var u;n(r),m(r,o),s();}var i="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:o};}t.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",n),e.$inject=["$mdUtil","$mdConstant","$mdTheming","$timeout"],n.$inject=["$mdAria","$mdUtil","$mdTheming"];}(),function(){function o(e,o,i,r,a,d,s){function c(d,c){var l=t.element("<md-select-value><span></span></md-select-value>");if(l.append('<span class="md-select-icon" aria-hidden="true"></span>'),l.addClass("md-select-value"),l[0].hasAttribute("id")||l.attr("id","select_value_label_"+o.nextUid()),d.find("md-content").length||d.append(t.element("<md-content>").append(d.contents())),c.mdOnOpen&&(d.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="indeterminate" ng-if="$$loadingAsyncDone === false" md-diameter="25px"></md-progress-circular></div>')),d.find("md-option").attr("ng-show","$$loadingAsyncDone")),c.name){var m=t.element('<select class="md-visually-hidden">');m.attr({name:c.name,"aria-hidden":"true",tabindex:"-1"});var u=d.find("md-option");t.forEach(u,function(e){var n=t.element("<option>"+e.innerHTML+"</option>");e.hasAttribute("ng-value")?n.attr("ng-value",e.getAttribute("ng-value")):e.hasAttribute("value")&&n.attr("value",e.getAttribute("value")),m.append(n);}),m.append('<option ng-value="'+c.ngModel+'" selected></option>'),d.parent().append(m);}var p=o.parseAttributeBoolean(c.multiple),h=p?"multiple":"",f='<div class="md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';return f=o.supplant(f,[h,d.html()]),d.empty().append(l),d.append(f),c.tabindex||c.$set("tabindex",0),function(d,c,l,m){function u(){var e=c.attr("aria-label")||c.attr("placeholder");!e&&M&&M.label&&(e=M.label.text()),C=e,a.expect(c,"aria-label",e);}function h(){N&&(H=H||N.find("md-select-menu").controller("mdSelectMenu"),T.setLabelText(H.selectedLabels()));}function f(){if(C){var e=H.selectedLabels({mode:"aria"});c.attr("aria-label",e.length?C+": "+e:C);}}function g(){M&&M.setHasValue(H.selectedLabels().length>0||(c[0].validity||{}).badInput);}function b(){if(N=t.element(c[0].querySelector(".md-select-menu-container")),D=d,l.mdContainerClass){var e=N[0].getAttribute("class")+" "+l.mdContainerClass;N[0].setAttribute("class",e);}H=N.find("md-select-menu").controller("mdSelectMenu"),H.init(A,l.ngModel),c.on("$destroy",function(){N.remove();});}function v(e){if(i.isNavigationKey(e))e.preventDefault(),E(e);else if(i.isInputKey(e)||i.isNumPadKey(e)){e.preventDefault();var n=H.optNodeForKeyboardSearch(e);if(!n||n.hasAttribute("disabled"))return;var o=t.element(n).controller("mdOption");H.isMultiple||H.deselect(Object.keys(H.selected)[0]),H.select(o.hashKey,o.value),H.refreshViewValue();}}function E(){D._mdSelectIsOpen=!0,c.attr("aria-expanded","true"),e.show({scope:D,preserveScope:!0,skipCompile:!0,element:N,target:c[0],selectCtrl:T,preserveElement:!0,hasBackdrop:!0,loadingAsync:!!l.mdOnOpen&&(d.$eval(l.mdOnOpen)||!0)})["finally"](function(){D._mdSelectIsOpen=!1,c.focus(),c.attr("aria-expanded","false"),A.$setTouched();});}var $,C,y=!0,M=m[0],T=m[1],A=m[2],w=m[3],k=c.find("md-select-value"),_=t.isDefined(l.readonly),x=o.parseAttributeBoolean(l.mdNoAsterisk);if(M){var S=M.isErrorGetter||function(){return A.$invalid&&(A.$touched||w&&w.$submitted);};if(M.input&&c.find("md-select-header").find("input")[0]!==M.input[0])throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");M.input=c,M.label||a.expect(c,"aria-label",c.attr("placeholder")),d.$watch(S,M.setInvalid);}var N,D,H;b(),r(c),w&&t.isDefined(l.multiple)&&o.nextTick(function(){var e=A.$modelValue||A.$viewValue;e&&w.$setPristine();});var I=A.$render;A.$render=function(){I(),h(),f(),g();},l.$observe("placeholder",A.$render),M&&M.label&&l.$observe("required",function(e){M.label.toggleClass("md-required",e&&!x);}),T.setLabelText=function(e){if(T.setIsPlaceholder(!e),l.mdSelectedText)e=s(l.mdSelectedText)(d);else{var t=l.placeholder||(M&&M.label?M.label.text():"");e=e||t||"";}var n=k.children().eq(0);n.html(e);},T.setIsPlaceholder=function(e){e?(k.addClass("md-select-placeholder"),M&&M.label&&M.label.addClass("md-placeholder")):(k.removeClass("md-select-placeholder"),M&&M.label&&M.label.removeClass("md-placeholder"));},_||(c.on("focus",function(e){M&&M.setFocused(!0);}),c.on("blur",function(e){y&&(y=!1,D._mdSelectIsOpen&&e.stopImmediatePropagation()),D._mdSelectIsOpen||(M&&M.setFocused(!1),g());})),T.triggerClose=function(){s(l.mdOnClose)(d);},d.$$postDigest(function(){u(),h(),f();}),d.$watch(function(){return H.selectedLabels();},h);var O;l.$observe("ngMultiple",function(e){O&&O();var t=s(e);O=d.$watch(function(){return t(d);},function(e,t){e===n&&t===n||(e?c.attr("multiple","multiple"):c.removeAttr("multiple"),c.attr("aria-multiselectable",e?"true":"false"),N&&(H.setMultiple(e),I=A.$render,A.$render=function(){I(),h(),f(),g();},A.$render()));});}),l.$observe("disabled",function(e){t.isString(e)&&(e=!0),$!==n&&$===e||($=e,e?c.attr({"aria-disabled":"true"}).removeAttr("tabindex").off("click",E).off("keydown",v):c.attr({tabindex:l.tabindex,"aria-disabled":"false"}).on("click",E).on("keydown",v));}),l.hasOwnProperty("disabled")||l.hasOwnProperty("ngDisabled")||(c.attr({"aria-disabled":"false"}),c.on("click",E),c.on("keydown",v));var R={role:"listbox","aria-expanded":"false","aria-multiselectable":p&&!l.ngMultiple?"true":"false"};c[0].hasAttribute("id")||(R.id="select_"+o.nextUid());var L="select_container_"+o.nextUid();N.attr("id",L),R["aria-owns"]=L,c.attr(R),d.$on("$destroy",function(){e.destroy()["finally"](function(){M&&(M.setFocused(!1),M.setHasValue(!1),M.input=null),A.$setTouched();});});};}var l=i.KEY_CODE;[l.SPACE,l.ENTER,l.UP_ARROW,l.DOWN_ARROW];return{restrict:"E",require:["^?mdInputContainer","mdSelect","ngModel","?^form"],compile:c,controller:function controller(){}};}function i(e,o,i,r){function a(e,n,i,a){function d(e){13!=e.keyCode&&32!=e.keyCode||s(e);}function s(n){var i=o.getClosest(n.target,"md-option"),r=i&&t.element(i).data("$mdOptionController");if(i&&r){if(i.hasAttribute("disabled"))return n.stopImmediatePropagation(),!1;var a=c.hashGetter(r.value),d=t.isDefined(c.selected[a]);e.$apply(function(){c.isMultiple?d?c.deselect(a):c.select(a,r.value):d||(c.deselect(Object.keys(c.selected)[0]),c.select(a,r.value)),c.refreshViewValue();});}}var c=a[0];n.addClass("_md"),r(n),n.on("click",s),n.on("keypress",d);}function d(r,a,d){function s(){var e=m.ngModel.$modelValue||m.ngModel.$viewValue||[];if(t.isArray(e)){var n=Object.keys(m.selected),o=e.map(m.hashGetter),i=n.filter(function(e){return o.indexOf(e)===-1;});i.forEach(m.deselect),o.forEach(function(t,n){m.select(t,e[n]);});}}function c(){var e=m.ngModel.$viewValue||m.ngModel.$modelValue;Object.keys(m.selected).forEach(m.deselect),m.select(m.hashGetter(e),e);}var m=this;m.isMultiple=t.isDefined(a.multiple),m.selected={},m.options={},r.$watchCollection(function(){return m.options;},function(){m.ngModel.$render();});var u,p;m.setMultiple=function(e){function n(e,n){return t.isArray(e||n||[]);}var o=m.ngModel;p=p||o.$isEmpty,m.isMultiple=e,u&&u(),m.isMultiple?(o.$validators["md-multiple"]=n,o.$render=s,r.$watchCollection(m.modelBinding,function(e){n(e)&&s(e),m.ngModel.$setPristine();}),o.$isEmpty=function(e){return!e||0===e.length;}):(delete o.$validators["md-multiple"],o.$render=c);};var h,f,g,b="",v=300;m.optNodeForKeyboardSearch=function(e){h&&clearTimeout(h),h=setTimeout(function(){h=n,b="",g=n,f=n;},v);var o=e.keyCode-(i.isNumPadKey(e)?48:0);b+=String.fromCharCode(o);var r=new RegExp("^"+b,"i");f||(f=d.find("md-option"),g=new Array(f.length),t.forEach(f,function(e,t){g[t]=e.textContent.trim();}));for(var a=0;a<g.length;++a){if(r.test(g[a]))return f[a];}},m.init=function(n,o){if(m.ngModel=n,m.modelBinding=o,m.ngModel.$isEmpty=function(e){return!m.options[m.hashGetter(e)];},n.$options&&n.$options.trackBy){var i={},a=e(n.$options.trackBy);m.hashGetter=function(e,t){return i.$value=e,a(t||r,i);};}else m.hashGetter=function(e){return t.isObject(e)?"object_"+(e.$$mdSelectId||(e.$$mdSelectId=++l)):e;};m.setMultiple(m.isMultiple);},m.selectedLabels=function(e){e=e||{};var t=e.mode||"html",n=o.nodesToArray(d[0].querySelectorAll("md-option[selected]"));if(n.length){var i;return"html"==t?i=function i(e){if(e.hasAttribute("md-option-empty"))return"";var t=e.innerHTML,n=e.querySelector(".md-ripple-container");n&&(t=t.replace(n.outerHTML,""));var o=e.querySelector(".md-container");return o&&(t=t.replace(o.outerHTML,"")),t;}:"aria"==t&&(i=function i(e){return e.hasAttribute("aria-label")?e.getAttribute("aria-label"):e.textContent;}),n.map(i).join(", ");}return"";},m.select=function(e,t){var n=m.options[e];n&&n.setSelected(!0),m.selected[e]=t;},m.deselect=function(e){var t=m.options[e];t&&t.setSelected(!1),delete m.selected[e];},m.addOption=function(e,n){if(t.isDefined(m.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+n.value+'" found.');m.options[e]=n,t.isDefined(m.selected[e])&&(m.select(e,n.value),t.isDefined(m.ngModel.$modelValue)&&m.hashGetter(m.ngModel.$modelValue)===e&&m.ngModel.$validate(),m.refreshViewValue());},m.removeOption=function(e){delete m.options[e];},m.refreshViewValue=function(){var e,n=[];for(var o in m.selected){(e=m.options[o])?n.push(e.value):n.push(m.selected[o]);}var i=m.ngModel.$options&&m.ngModel.$options.trackBy,r=m.isMultiple?n:n[0],a=m.ngModel.$modelValue;(i?t.equals(a,r):a==r)||(m.ngModel.$setViewValue(r),m.ngModel.$render());};}return d.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu"],scope:!1,controller:d,link:{pre:a}};}function r(e,n){function o(e,n){return e.append(t.element('<div class="md-text">').append(e.contents())),e.attr("tabindex",n.tabindex||"0"),i(n)||e.attr("md-option-empty",""),r;}function i(e){var t=e.value,n=e.ngValue;return t||n;}function r(o,i,r,a){function d(e,t,n){if(!l.hashGetter)return void(n||o.$$postDigest(function(){d(e,t,!0);}));var i=l.hashGetter(t,o),r=l.hashGetter(e,o);c.hashKey=r,c.value=e,l.removeOption(i,c),l.addOption(r,c);}function s(){var e={role:"option","aria-selected":"false"};i[0].hasAttribute("id")||(e.id="select_option_"+n.nextUid()),i.attr(e);}var c=a[0],l=a[1];l.isMultiple&&(i.addClass("md-checkbox-enabled"),i.prepend(m.clone())),t.isDefined(r.ngValue)?o.$watch(r.ngValue,d):t.isDefined(r.value)?d(r.value):o.$watch(function(){return i.text().trim();},d),r.$observe("disabled",function(e){e?i.attr("tabindex","-1"):i.attr("tabindex","0");}),o.$$postDigest(function(){r.$observe("selected",function(e){t.isDefined(e)&&("string"==typeof e&&(e=!0),e?(l.isMultiple||l.deselect(Object.keys(l.selected)[0]),l.select(c.hashKey,c.value)):l.deselect(c.hashKey),l.refreshViewValue());});}),e.attach(o,i),s(),o.$on("$destroy",function(){l.removeOption(c.hashKey,c);});}function a(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t;};}return a.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:a,compile:o};}function a(){function e(e,n){function o(){return e.parent().find("md-select-header").length;}function i(){var o=e.find("label");o.length||(o=t.element("<label>"),e.prepend(o)),o.addClass("md-container-ignore"),n.label&&o.text(n.label);}o()||i();}return{restrict:"E",compile:e};}function d(){return{restrict:"E"};}function s(o){function i(o,i,l,m,u,p,h,f,g){function b(e,t,n){function o(){return h(t,{addClass:"md-leave"}).start();}function i(){t.removeClass("md-active"),t.attr("aria-hidden","true"),t[0].style.display="none",E(n),!n.$destroy&&n.restoreFocus&&n.target.focus();}return n=n||{},n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?i():o().then(i);}function v(e,r,a){function d(e,t,n){return n.parent.append(t),u(function(e,n){try{h(t,{removeClass:"md-leave",duration:0}).start().then(s).then(e);}catch(o){n(o);}});}function s(){return u(function(t){if(a.isRemoved)return u.reject(!1);var n=$(e,r,a);n.container.element.css(y.toCss(n.container.styles)),n.dropDown.element.css(y.toCss(n.dropDown.styles)),p(function(){r.addClass("md-active"),n.dropDown.element.css(y.toCss({transform:""})),b(a.focusedNode),t();});});}function c(e,t,n){return n.disableParentScroll&&!l.getClosest(n.target,"MD-DIALOG")?n.restoreScroll=l.disableScrollAround(n.element,n.parent):n.disableParentScroll=!1,n.hasBackdrop&&(n.backdrop=l.createBackdrop(e,"md-select-backdrop md-click-catcher"),f.enter(n.backdrop,g[0].body,null,{duration:0})),function(){n.backdrop&&n.backdrop.remove(),n.disableParentScroll&&n.restoreScroll(),delete n.restoreScroll;};}function b(e){e&&!e.hasAttribute("disabled")&&e.focus();}function v(e,n){var o=r.find("md-select-menu");if(!n.target)throw new Error(l.supplant(C,[n.target]));t.extend(n,{isRemoved:!1,target:t.element(n.target),parent:t.element(n.parent),selectEl:o,contentEl:r.find("md-content"),optionNodes:o[0].getElementsByTagName("md-option")});}function E(){var n=function(e,t,n){return function(){if(!n.isRemoved){var o=$(e,t,n),i=o.container,r=o.dropDown;i.element.css(y.toCss(i.styles)),r.element.css(y.toCss(r.styles));}};}(e,r,a),o=t.element(m);return o.on("resize",n),o.on("orientationchange",n),function(){o.off("resize",n),o.off("orientationchange",n);};}function T(){a.loadingAsync&&!a.isRemoved&&(e.$$loadingAsyncDone=!1,u.when(a.loadingAsync).then(function(){e.$$loadingAsyncDone=!0,delete a.loadingAsync;}).then(function(){p(s);}));}function A(){function e(e){e.preventDefault(),e.stopPropagation(),a.restoreFocus=!1,l.nextTick(o.hide,!0);}function t(e){switch(e.preventDefault(),e.stopPropagation(),e.keyCode){case M.UP_ARROW:return c();case M.DOWN_ARROW:return s();case M.SPACE:case M.ENTER:var t=l.getClosest(e.target,"md-option");t&&(u.triggerHandler({type:"click",target:t}),e.preventDefault()),m(e);break;case M.TAB:case M.ESCAPE:e.stopPropagation(),e.preventDefault(),a.restoreFocus=!0,l.nextTick(o.hide,!0);break;default:if(i.isInputKey(e)||i.isNumPadKey(e)){var n=u.controller("mdSelectMenu").optNodeForKeyboardSearch(e);a.focusedNode=n||a.focusedNode,n&&n.focus();}}}function d(e){var t,o=l.nodesToArray(a.optionNodes),i=o.indexOf(a.focusedNode);do{i===-1?i=0:"next"===e&&i<o.length-1?i++:"prev"===e&&i>0&&i--,t=o[i],t.hasAttribute("disabled")&&(t=n);}while(!t&&i<o.length-1&&i>0);t&&t.focus(),a.focusedNode=t;}function s(){d("next");}function c(){d("prev");}function m(e){function t(){var t=!1;if(e&&e.currentTarget.children.length>0){var n=e.currentTarget.children[0],o=n.scrollHeight>n.clientHeight;if(o&&n.children.length>0){var i=e.pageX-e.currentTarget.getBoundingClientRect().left;i>n.querySelector("md-option").offsetWidth&&(t=!0);}}return t;}if(!(e&&"click"==e.type&&e.currentTarget!=u[0]||t())){var n=l.getClosest(e.target,"md-option");n&&n.hasAttribute&&!n.hasAttribute("disabled")&&(e.preventDefault(),e.stopPropagation(),p.isMultiple||(a.restoreFocus=!0,l.nextTick(function(){o.hide(p.ngModel.$viewValue);},!0)));}}if(!a.isRemoved){var u=a.selectEl,p=u.controller("mdSelectMenu")||{};return r.addClass("md-clickable"),a.backdrop&&a.backdrop.on("click",e),u.on("keydown",t),u.on("click",m),function(){a.backdrop&&a.backdrop.off("click",e),u.off("keydown",t),u.off("click",m),r.removeClass("md-clickable"),a.isRemoved=!0;};}}return T(),v(e,a),a.hideBackdrop=c(e,r,a),d(e,r,a).then(function(e){return r.attr("aria-hidden","false"),a.alreadyOpen=!0,a.cleanupInteraction=A(),a.cleanupResizing=E(),e;},a.hideBackdrop);}function E(e){var t=e.selectCtrl;if(t){var n=e.selectEl.controller("mdSelectMenu");t.setLabelText(n?n.selectedLabels():""),t.triggerClose();}}function $(n,o,i){var u,p=o[0],h=i.target[0].children[0],f=g[0].body,b=i.selectEl[0],v=i.contentEl[0],E=f.getBoundingClientRect(),$=h.getBoundingClientRect(),C=!1,y={left:E.left+c,top:c,bottom:E.height-c,right:E.width-c-(l.floatingScrollbars()?16:0)},M={top:$.top-y.top,left:$.left-y.left,right:y.right-($.left+$.width),bottom:y.bottom-($.top+$.height)},T=E.width-2*c,A=b.querySelector("md-option[selected]"),w=b.getElementsByTagName("md-option"),k=b.getElementsByTagName("md-optgroup"),_=s(o,v),x=r(i.loadingAsync);u=x?v.firstElementChild||v:A?A:k.length?k[0]:w.length?w[0]:v.firstElementChild||v,v.offsetWidth>T?v.style["max-width"]=T+"px":v.style.maxWidth=null,C&&(v.style["min-width"]=$.width+"px"),_&&b.classList.add("md-overflow");var S=u;"MD-OPTGROUP"===(S.tagName||"").toUpperCase()&&(S=w[0]||v.firstElementChild||v,u=S),i.focusedNode=S,p.style.display="block";var N=b.getBoundingClientRect(),D=d(u);if(u){var H=m.getComputedStyle(u);D.paddingLeft=parseInt(H.paddingLeft,10)||0,D.paddingRight=parseInt(H.paddingRight,10)||0;}if(_){var I=v.offsetHeight/2;v.scrollTop=D.top+D.height/2-I,M.top<I?v.scrollTop=Math.min(D.top,v.scrollTop+I-M.top):M.bottom<I&&(v.scrollTop=Math.max(D.top+D.height-N.height,v.scrollTop-I+M.bottom));}var O,R,L,P,F;C?(O=$.left,R=$.top+$.height,L="50% 0",R+N.height>y.bottom&&(R=$.top-N.height,L="50% 100%")):(O=$.left+D.left-D.paddingLeft+2,R=Math.floor($.top+$.height/2-D.height/2-D.top+v.scrollTop)+2,L=D.left+$.width/2+"px "+(D.top+D.height/2-v.scrollTop)+"px 0px",P=Math.min($.width+D.paddingLeft+D.paddingRight,T),F=e.getComputedStyle(h)["font-size"]);var B=p.getBoundingClientRect(),U=Math.round(100*Math.min($.width/N.width,1))/100,j=Math.round(100*Math.min($.height/N.height,1))/100;return{container:{element:t.element(p),styles:{left:Math.floor(a(y.left,O,y.right-B.width)),top:Math.floor(a(y.top,R,y.bottom-B.height)),"min-width":P,"font-size":F}},dropDown:{element:t.element(b),styles:{transformOrigin:L,transform:i.alreadyOpen?"":l.supplant("scale({0},{1})",[U,j])}}};}var C="$mdSelect.show() expected a target element in options.target but got '{0}'!",y=l.dom.animator,M=i.KEY_CODE;return{parent:"body",themable:!0,onShow:v,onRemove:b,hasBackdrop:!0,disableParentScroll:!0};}function r(e){return e&&t.isFunction(e.then);}function a(e,t,n){return Math.max(e,Math.min(t,n));}function d(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0};}function s(e,t){var n=!1;try{var o=e[0].style.display;e[0].style.display="block",n=t.scrollHeight>t.offsetHeight,e[0].style.display=o;}finally{}return n;}return i.$inject=["$mdSelect","$mdConstant","$mdUtil","$window","$q","$$rAF","$animateCss","$animate","$document"],o("$mdSelect").setDefaults({methods:["target"],options:i});}var c=8,l=0,m=t.element('<div class="md-container"><div class="md-icon"></div></div>');t.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",o).directive("mdSelectMenu",i).directive("mdOption",r).directive("mdOptgroup",a).directive("mdSelectHeader",d).provider("$mdSelect",s),o.$inject=["$mdSelect","$mdUtil","$mdConstant","$mdTheming","$mdAria","$compile","$parse"],i.$inject=["$parse","$mdUtil","$mdConstant","$mdTheming"],r.$inject=["$mdButtonInkRipple","$mdUtil"],s.$inject=["$$interimElementProvider"];}(),function(){function e(e,t){return["$mdUtil","$window",function(n,o){return{restrict:"A",multiElement:!0,link:function link(i,r,a){var d=i.$on("$md-resize-enable",function(){d();var s=r[0],c=s.nodeType===o.Node.ELEMENT_NODE?o.getComputedStyle(s):{};i.$watch(a[e],function(e){if(!!e===t){n.nextTick(function(){i.$broadcast("$md-resize");});var o={cachedTransitionStyles:c};n.dom.animator.waitTransitionEnd(r,o).then(function(){i.$broadcast("$md-resize");});}});});}};}];}t.module("material.components.showHide",["material.core"]).directive("ngShow",e("ngShow",!0)).directive("ngHide",e("ngHide",!1));}(),function(){function e(e,o,i,r){function a(e,n){var r=function r(){return!1;},a=function a(){return i.when(o.supplant(c,[n||""]));};return t.extend({isLockedOpen:r,isOpen:r,toggle:a,open:a,close:a,onClose:t.noop,then:function then(e){return s(n).then(e||t.noop);}},e);}function d(t,i){var a=e.get(t);return a||i?a:(r.error(o.supplant(c,[t||""])),n);}function s(t){return e.when(t)["catch"](r.error);}var c="SideNav '{0}' is not available! Did you use md-component-id='{0}'?",l={find:d,waitFor:s};return function(e,n){if(t.isUndefined(e))return l;var o=n===!0,i=l.find(e,o);return!i&&o?l.waitFor(e):!i&&t.isUndefined(n)?a(l,e):i;};}function o(){return{restrict:"A",require:"^mdSidenav",link:function link(e,t,n,o){}};}function i(e,o,i,r,a,d,s,c,l,m){function u(d,u,p,h){function f(e,t){d.isLockedOpen=e,e===t?u.toggleClass("md-locked-open",!!e):a[e?"addClass":"removeClass"](u,"md-locked-open"),M&&M.toggleClass("md-locked-open",!!e);}function g(e){var t=o.findFocusTarget(u)||o.findFocusTarget(u,"[md-sidenav-focus]")||u,n=u.parent();n[e?"on":"off"]("keydown",$),M&&M[e?"on":"off"]("click",C);var i=b(n,e);return e&&(A=m[0].activeElement),v(e),w=l.all([e&&M?a.enter(M,n):M?a.leave(M):l.when(!0),a[e?"removeClass":"addClass"](u,"md-closed")]).then(function(){d.isOpen&&t&&t.focus(),i&&i();});}function b(e,t){var n=u[0],o=e[0].scrollTop;if(t&&o){T={top:n.style.top,bottom:n.style.bottom,height:n.style.height};var i={top:o+"px",bottom:"auto",height:e[0].clientHeight+"px"};u.css(i),M.css(i);}if(!t&&T)return function(){n.style.top=T.top,n.style.bottom=T.bottom,n.style.height=T.height,M[0].style.top=null,M[0].style.bottom=null,M[0].style.height=null,T=null;};}function v(e){var o=u.parent();e&&!y?(y=o.css("overflow"),o.css("overflow","hidden")):t.isDefined(y)&&(o.css("overflow",y),y=n);}function E(e){return d.isOpen==e?l.when(!0):(d.isOpen&&h.onCloseCb&&h.onCloseCb(),l(function(t){d.isOpen=e,o.nextTick(function(){w.then(function(e){d.isOpen||(A&&A.focus(),A=null),t(e);});});}));}function $(e){var t=e.keyCode===i.KEY_CODE.ESCAPE;return t?C(e):l.when(!0);}function C(e){return e.preventDefault(),h.close();}var y,M,T,A=null,w=l.when(!0),k=s(p.mdIsLockedOpen),_=function _(){return k(d.$parent,{$media:function $media(t){return c.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),e(t);},$mdMedia:e});};t.isDefined(p.mdDisableBackdrop)||(M=o.createBackdrop(d,"md-sidenav-backdrop md-opaque ng-enter")),u.addClass("_md"),r(u),M&&r.inherit(M,u),u.on("$destroy",function(){M&&M.remove(),h.destroy();}),d.$on("$destroy",function(){M&&M.remove();}),d.$watch(_,f),d.$watch("isOpen",g),h.$toggleOpen=E;}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function compile(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),u;}};}function r(e,t,n,o,i){var r=this;r.isOpen=function(){return!!e.isOpen;},r.isLockedOpen=function(){return!!e.isLockedOpen;},r.onClose=function(e){return r.onCloseCb=e,r;},r.open=function(){return r.$toggleOpen(!0);},r.close=function(){return r.$toggleOpen(!1);},r.toggle=function(){return r.$toggleOpen(!e.isOpen);},r.$toggleOpen=function(t){return i.when(e.isOpen=t);},r.destroy=o.register(r,n.mdComponentId);}t.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",i).directive("mdSidenavFocus",o).controller("$mdSidenavController",r),e.$inject=["$mdComponentRegistry","$mdUtil","$q","$log"],i.$inject=["$mdMedia","$mdUtil","$mdConstant","$mdTheming","$animate","$compile","$parse","$log","$q","$document"],r.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"];}(),function(){function e(){return{controller:function controller(){},compile:function compile(e){var o=e.find("md-slider");if(o){var i=o.attr("md-vertical");return i!==n&&e.attr("md-vertical",""),o.attr("flex")||o.attr("flex",""),function(e,n,o,i){function r(e){n.children().attr("disabled",e),n.find("input").attr("disabled",e);}n.addClass("_md");var a=t.noop;o.disabled?r(!0):o.ngDisabled&&(a=e.$watch(o.ngDisabled,function(e){r(e);})),e.$on("$destroy",function(){a();});var d;i.fitInputWidthToTextLength=function(e){var t=n[0].querySelector("md-input-container");if(t){var o=getComputedStyle(t),i=parseInt(o.minWidth),r=2*parseInt(o.padding);d=d||parseInt(o.maxWidth);var a=Math.max(d,i+r+i/2*e);t.style.maxWidth=a+"px";}};};}}};}function o(e,n,o,i,r,a,d,s,c,l){function m(e,n){var i=t.element(e[0].getElementsByClassName("md-slider-wrapper")),r=n.tabindex||0;return i.attr("tabindex",r),(n.disabled||n.ngDisabled)&&i.attr("tabindex",-1),i.attr("role","slider"),o.expect(e,"aria-label"),u;}function u(o,m,u,p){function h(){y(),x();}function f(e){se=parseFloat(e),m.attr("aria-valuemin",e),h();}function g(e){ce=parseFloat(e),m.attr("aria-valuemax",e),h();}function b(e){le=parseFloat(e);}function v(e){me=S(parseInt(e),0,6);}function E(){m.attr("aria-disabled",!!Y());}function $(){if(ie&&!Y()&&!t.isUndefined(le)){if(le<=0){var e="Slider step value must be greater than zero when in discrete mode";throw c.error(e),new Error(e);}var o=Math.floor((ce-se)/le);ue||(ue=t.element("<canvas>").css("position","absolute"),J.append(ue),pe=ue[0].getContext("2d"));var i=M();!i||i.height||i.width||(y(),i=he),ue[0].width=i.width,ue[0].height=i.height;for(var r,a=0;a<=o;a++){var d=n.getComputedStyle(J[0]);pe.fillStyle=d.color||"black",r=Math.floor((oe?i.height:i.width)*(a/o)),pe.fillRect(oe?0:r-1,oe?r-1:0,oe?i.width:2,oe?2:i.height);}}}function C(){if(ue&&pe){var e=M();pe.clearRect(0,0,e.width,e.height);}}function y(){he=Q[0].getBoundingClientRect();}function M(){return te(),he;}function T(e){if(!Y()){var t;(oe?e.keyCode===r.KEY_CODE.DOWN_ARROW:e.keyCode===r.KEY_CODE.LEFT_ARROW)?t=-le:(oe?e.keyCode===r.KEY_CODE.UP_ARROW:e.keyCode===r.KEY_CODE.RIGHT_ARROW)&&(t=le),t=re?-t:t,t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),o.$evalAsync(function(){_(W.$viewValue+t);}));}}function A(){$(),o.mouseActive=!0,ee.removeClass("md-focused"),l(function(){o.mouseActive=!1;},100);}function w(){o.mouseActive===!1&&ee.addClass("md-focused");}function k(){ee.removeClass("md-focused"),m.removeClass("md-active"),C();}function _(e){W.$setViewValue(S(N(e)));}function x(){isNaN(W.$viewValue)&&(W.$viewValue=W.$modelValue),W.$viewValue=S(W.$viewValue);var e=z(W.$viewValue);o.modelValue=W.$viewValue,m.attr("aria-valuenow",W.$viewValue),D(e),G.text(W.$viewValue);}function S(e,n,o){if(t.isNumber(e))return n=t.isNumber(n)?n:se,o=t.isNumber(o)?o:ce,Math.max(n,Math.min(o,e));}function N(e){if(t.isNumber(e)){var n=Math.round((e-se)/le)*le+se;return n=Math.round(n*Math.pow(10,me))/Math.pow(10,me),V&&V.fitInputWidthToTextLength&&i.debounce(function(){V.fitInputWidthToTextLength(n.toString().length);},100)(),n;}}function D(e){e=U(e);var t=100*e+"%",n=re?100*(1-e)+"%":t;oe?X.css("bottom",t):i.bidiProperty(X,"left","right",t),Z.css(oe?"height":"width",n),m.toggleClass(re?"md-max":"md-min",0===e),m.toggleClass(re?"md-min":"md-max",1===e);}function H(e){if(!Y()){m.addClass("md-active"),m[0].focus(),y();var t=q(j(oe?e.pointer.y:e.pointer.x)),n=S(N(t));o.$apply(function(){_(n),D(z(n));});}}function I(e){if(!Y()){m.removeClass("md-dragging");var t=q(j(oe?e.pointer.y:e.pointer.x)),n=S(N(t));o.$apply(function(){_(n),x();});}}function O(e){Y()||(fe=!0,e.stopPropagation(),m.addClass("md-dragging"),P(e));}function R(e){fe&&(e.stopPropagation(),P(e));}function L(e){fe&&(e.stopPropagation(),fe=!1);}function P(e){ie?B(oe?e.pointer.y:e.pointer.x):F(oe?e.pointer.y:e.pointer.x);}function F(e){o.$evalAsync(function(){_(q(j(e)));});}function B(e){var t=q(j(e)),n=S(N(t));D(j(e)),G.text(n);}function U(e){return Math.max(0,Math.min(e||0,1));}function j(e){var t=oe?he.top:he.left,n=oe?he.height:he.width,o=(e-t)/n;return oe||"rtl"!==i.bidi()||(o=1-o),Math.max(0,Math.min(1,oe?1-o:o));}function q(e){var t=re?1-e:e;return se+t*(ce-se);}function z(e){var t=(e-se)/(ce-se);return re?1-t:t;}a(m);var W=p[0]||{$setViewValue:function $setViewValue(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e();});},$parsers:[],$formatters:[],$viewChangeListeners:[]},V=p[1],Y=(t.element(i.getClosest(m,"_md-slider-container",!0)),u.ngDisabled?t.bind(null,s(u.ngDisabled),o.$parent):function(){return m[0].hasAttribute("disabled");}),K=t.element(m[0].querySelector(".md-thumb")),G=t.element(m[0].querySelector(".md-thumb-text")),X=K.parent(),Q=t.element(m[0].querySelector(".md-track-container")),Z=t.element(m[0].querySelector(".md-track-fill")),J=t.element(m[0].querySelector(".md-track-ticks")),ee=t.element(m[0].getElementsByClassName("md-slider-wrapper")),te=(t.element(m[0].getElementsByClassName("md-slider-content")),i.throttle(y,5e3)),ne=3,oe=t.isDefined(u.mdVertical),ie=t.isDefined(u.mdDiscrete),re=t.isDefined(u.mdInvert);t.isDefined(u.min)?u.$observe("min",f):f(0),t.isDefined(u.max)?u.$observe("max",g):g(100),t.isDefined(u.step)?u.$observe("step",b):b(1),t.isDefined(u.round)?u.$observe("round",v):v(ne);var ae=t.noop;u.ngDisabled&&(ae=o.$parent.$watch(u.ngDisabled,E)),d.register(ee,"drag",{horizontal:!oe}),o.mouseActive=!1,ee.on("keydown",T).on("mousedown",A).on("focus",w).on("blur",k).on("$md.pressdown",H).on("$md.pressup",I).on("$md.dragstart",O).on("$md.drag",R).on("$md.dragend",L),setTimeout(h,0);var de=e.throttle(h);t.element(n).on("resize",de),o.$on("$destroy",function(){t.element(n).off("resize",de);}),W.$render=x,W.$viewChangeListeners.push(x),W.$formatters.push(S),W.$formatters.push(N);var se,ce,le,me,ue,pe,he={};y();var fe=!1;}return{scope:{},require:["?ngModel","?^mdSliderContainer"],template:'<div class="md-slider-wrapper"><div class="md-slider-content"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div></div>',compile:m};}t.module("material.components.slider",["material.core"]).directive("mdSlider",o).directive("mdSliderContainer",e),o.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse","$log","$timeout"];}(),function(){function e(e,t,o,i){function r(i){function r(e,t){t.addClass("md-sticky-clone");var n={element:e,clone:t};return f.items.push(n),o.nextTick(function(){p.prepend(n.clone);}),h(),function(){f.items.forEach(function(t,n){t.element[0]===e[0]&&(f.items.splice(n,1),t.clone.remove());}),h();};}function d(){f.items.forEach(s),f.items=f.items.sort(function(e,t){return e.top<t.top?-1:1;});for(var e,t=p.prop("scrollTop"),n=f.items.length-1;n>=0;n--){if(t>f.items[n].top){e=f.items[n];break;}}l(e);}function s(e){var t=e.element[0];for(e.top=0,e.left=0,e.right=0;t&&t!==p[0];){e.top+=t.offsetTop,e.left+=t.offsetLeft,t.offsetParent&&(e.right+=t.offsetParent.offsetWidth-t.offsetWidth-t.offsetLeft),t=t.offsetParent;}e.height=e.element.prop("offsetHeight");var i=o.floatingScrollbars()?"0":n;o.bidi(e.clone,"margin-left",e.left,i),o.bidi(e.clone,"margin-right",i,e.right);}function c(){var e=p.prop("scrollTop"),t=e>(c.prevScrollTop||0);if(c.prevScrollTop=e,0===e)return void l(null);if(t){if(f.next&&f.next.top<=e)return void l(f.next);if(f.current&&f.next&&f.next.top-e<=f.next.height)return void u(f.current,e+(f.next.top-f.next.height-e));}if(!t){if(f.current&&f.prev&&e<f.current.top)return void l(f.prev);if(f.next&&f.current&&e>=f.next.top-f.current.height)return void u(f.current,e+(f.next.top-e-f.current.height));}f.current&&u(f.current,e);}function l(e){if(f.current!==e){f.current&&(u(f.current,null),m(f.current,null)),e&&m(e,"active"),f.current=e;var t=f.items.indexOf(e);f.next=f.items[t+1],f.prev=f.items[t-1],m(f.next,"next"),m(f.prev,"prev");}}function m(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t);}function u(t,i){t&&(null===i||i===n?t.translateY&&(t.translateY=null,t.clone.css(e.CSS.TRANSFORM,"")):(t.translateY=i,o.bidi(t.clone,e.CSS.TRANSFORM,"translate3d("+t.left+"px,"+i+"px,0)","translateY("+i+"px)")));}var p=i.$element,h=t.throttle(d);a(p),p.on("$scrollstart",h),p.on("$scroll",c);var f;return f={prev:null,current:null,next:null,items:[],add:r,refreshElements:d};}function a(e){function n(){+o.now()-r>a?(i=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),t.throttle(n));}var i,r,a=200;e.on("scroll touchmove",function(){i||(i=!0,t.throttle(n),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),r=+o.now();});}var d=o.checkStickySupport();return function(e,t,n){var o=t.controller("mdContent");if(o)if(d)t.css({position:d,top:0,"z-index":2});else{var a=o.$element.data("$$sticky");a||(a=r(o),o.$element.data("$$sticky",a));var s=n||i(t.clone())(e),c=a.add(t,s);e.$on("$destroy",c);}};}t.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e),e.$inject=["$mdConstant","$$rAF","$mdUtil","$compile"];}(),function(){function e(e,n,o,i){return{restrict:"E",replace:!0,transclude:!0,template:'<div class="md-subheader _md">  <div class="md-subheader-inner">    <div class="md-subheader-content"></div>  </div></div>',link:function link(r,a,d,s,c){function l(e){return t.element(e[0].querySelector(".md-subheader-content"));}o(a),a.addClass("_md"),i.prefixer().removeAttribute(a,"ng-repeat");var m=a[0].outerHTML;c(r,function(e){l(a).append(e);}),a.hasClass("md-no-sticky")||c(r,function(t){var o=n('<div class="md-subheader-wrapper">'+m+"</div>")(r);i.nextTick(function(){l(o).append(t);}),e(r,a,o);});}};}t.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e),e.$inject=["$mdSticky","$compile","$mdTheming","$mdUtil"];}(),function(){function e(e){function t(e){function t(t,i,r){var a=e(r[n]);i.on(o,function(e){t.$applyAsync(function(){a(t,{$event:e});});});}return{restrict:"A",link:t};}var n="md"+e,o="$md."+e.toLowerCase();return t.$inject=["$parse"],t;}t.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",e("SwipeLeft")).directive("mdSwipeRight",e("SwipeRight")).directive("mdSwipeUp",e("SwipeUp")).directive("mdSwipeDown",e("SwipeDown"));}(),function(){function e(e,n,o,i,r,a,d){function s(e,s){var l=c.compile(e,s).post;return e.addClass("md-dragging"),function(e,s,c,m){function u(t){g&&g(e)||(t.stopPropagation(),s.addClass("md-dragging"),E={width:b.prop("offsetWidth")});}function p(e){if(E){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/E.width,n=m.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),b.css(o.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),E.translate=n;}}function h(t){if(E){t.stopPropagation(),s.removeClass("md-dragging"),b.css(o.CSS.TRANSFORM,"");var n=m.$viewValue?E.translate<.5:E.translate>.5;n&&f(!m.$viewValue),E=null,e.skipToggle=!0,d(function(){e.skipToggle=!1;},1);}}function f(t){e.$apply(function(){m.$setViewValue(t),m.$render();});}m=m||n.fakeNgModel();var g=null;null!=c.disabled?g=function g(){return!0;}:c.ngDisabled&&(g=i(c.ngDisabled));var b=t.element(s[0].querySelector(".md-thumb-container")),v=t.element(s[0].querySelector(".md-container"));r(function(){s.removeClass("md-dragging");}),l(e,s,c,m),g&&e.$watch(g,function(e){s.attr("tabindex",e?-1:0);}),a.register(v,"drag"),v.on("$md.dragstart",u).on("$md.drag",p).on("$md.dragend",h);var E;};}var c=e[0];return{restrict:"E",priority:210,transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:"?ngModel",compile:s};}t.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e),e.$inject=["mdCheckboxDirective","$mdUtil","$mdConstant","$parse","$$rAF","$mdGesture","$timeout"];}(),function(){t.module("material.components.tabs",["material.core","material.components.icon"]);}(),function(){function e(e){return{restrict:"E",link:function link(t,n){n.addClass("_md"),t.$on("$destroy",function(){e.destroy();});}};}function n(e){function n(e){i=e;}function o(e,n,o,r){function a(t,a,d){i=d.textContent||d.content;var l=!r("gt-sm");return a=o.extractElementByName(a,"md-toast",!0),d.element=a,d.onSwipe=function(e,t){var i=e.type.replace("$md.",""),r=i.replace("swipe","");"down"===r&&d.position.indexOf("top")!=-1&&!l||"up"===r&&(d.position.indexOf("bottom")!=-1||l)||("left"!==r&&"right"!==r||!l)&&(a.addClass("md-"+i),o.nextTick(n.cancel));},d.openClass=s(d.position),a.addClass(d.toastClass),d.parent.addClass(d.openClass),o.hasComputedStyle(d.parent,"position","static")&&d.parent.css("position","relative"),a.on(c,d.onSwipe),a.addClass(l?"md-bottom":d.position.split(" ").map(function(e){return"md-"+e;}).join(" ")),d.parent&&d.parent.addClass("md-toast-animating"),e.enter(a,d.parent).then(function(){d.parent&&d.parent.removeClass("md-toast-animating");});}function d(t,n,i){return n.off(c,i.onSwipe),i.parent&&i.parent.addClass("md-toast-animating"),i.openClass&&i.parent.removeClass(i.openClass),(1==i.$destroy?n.remove():e.leave(n)).then(function(){i.parent&&i.parent.removeClass("md-toast-animating"),o.hasComputedStyle(i.parent,"position","static")&&i.parent.css("position","");});}function s(e){return r("gt-xs")?"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom"):"md-toast-open-bottom";}var c="$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";return{onShow:a,onRemove:d,toastClass:"",position:"bottom left",themable:!0,hideDelay:3e3,autoWrap:!0,transformTemplate:function transformTemplate(e,n){var o=n.autoWrap&&e&&!/md-toast-content/g.test(e);if(o){var i=document.createElement("md-template");i.innerHTML=e;for(var r=0;r<i.children.length;r++){if("MD-TOAST"===i.children[r].nodeName){var a=t.element('<div class="md-toast-content">');a.append(t.element(i.children[r].childNodes)),i.children[r].appendChild(a[0]);}}return i.innerHTML;}return e||"";}};}var i,r="ok",a=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule","parent","position","toastClass"],options:o}).addPreset("simple",{argOption:"textContent",methods:["textContent","content","action","highlightAction","highlightClass","theme","parent"],options:["$mdToast","$mdTheming",function(e,t){return{template:'<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span class="md-toast-text" role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()"         ng-class="highlightClasses">      {{ toast.action }}    </md-button>  </div></md-toast>',controller:["$scope",function(t){var n=this;n.highlightAction&&(t.highlightClasses=["md-highlight",n.highlightClass]),t.$watch(function(){return i;},function(){n.content=i;}),this.resolve=function(){e.hide(r);};}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0};}]}).addMethod("updateTextContent",n).addMethod("updateContent",n);return o.$inject=["$animate","$mdToast","$mdUtil","$mdMedia"],a;}t.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",n),e.$inject=["$mdToast"],n.$inject=["$$interimElementProvider"];}(),function(){function e(e,n,o,i,r){var a=t.bind(null,o.supplant,"translate3d(0,{0}px,0)");return{template:"",restrict:"E",link:function link(d,s,c){function l(){function i(e){var t=s.parent().find("md-content");!f&&t.length&&l(null,t),e=d.$eval(e),e===!1?g():g=u();}function l(e,t){t&&s.parent()[0]===t.parent()[0]&&(f&&f.off("scroll",$),f=t,g=u());}function m(e){var t=e?e.target.scrollTop:v;C(),b=Math.min(h/E,Math.max(0,b+t-v)),s.css(n.CSS.TRANSFORM,a([-b*E])),f.css(n.CSS.TRANSFORM,a([(h-b)*E])),v=t,o.nextTick(function(){var e=s.hasClass("md-whiteframe-z1");e&&!b?r.removeClass(s,"md-whiteframe-z1"):!e&&b&&r.addClass(s,"md-whiteframe-z1");});}function u(){return f?(f.on("scroll",$),f.attr("scroll-shrink","true"),o.nextTick(p,!1),function(){f.off("scroll",$),f.attr("scroll-shrink","false"),p();}):t.noop;}function p(){h=s.prop("offsetHeight");var e=-h*E+"px";f.css({"margin-top":e,"margin-bottom":e}),m();}var h,f,g=t.noop,b=0,v=0,E=c.mdShrinkSpeedFactor||.5,$=e.throttle(m),C=o.debounce(p,5e3);d.$on("$mdContentLoaded",l),c.$observe("mdScrollShrink",i),c.ngShow&&d.$watch(c.ngShow,p),c.ngHide&&d.$watch(c.ngHide,p),d.$on("$destroy",g);}s.addClass("_md"),i(s),o.nextTick(function(){s.addClass("_md-toolbar-transitions");},!1),t.isDefined(c.mdScrollShrink)&&l();}};}t.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e),e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming","$animate"];}(),function(){function e(e,n,o,i,r,a,d,s,c,l){function m(d,c,m){function b(){d.delay=d.delay||f;}function v(){var e="center top";switch(d.direction){case"left":e="right center";break;case"right":e="left center";break;case"top":e="center bottom";break;case"bottom":e="center top";}S.css("transform-origin",e);}function E(e){e?A():w();}function $(){if(c[0]&&"MutationObserver"in n){var e=new MutationObserver(function(e){e.forEach(function(e){"md-visible"===e.attributeName&&(d.visibleWatcher||(d.visibleWatcher=d.$watch("visible",E))),"md-direction"===e.attributeName&&k(d.direction);});});e.observe(c[0],{attributes:!0}),m.hasOwnProperty("mdVisible")&&(d.visibleWatcher=d.$watch("visible",E));}else d.visibleWatcher=d.$watch("visible",E),d.$watch("direction",k);var t=function t(){d.$destroy();};c.one("$destroy",t),x.one("$destroy",t),d.$on("$destroy",function(){T(!1),c.remove(),e&&e.disconnect();}),c.text().indexOf(l.startSymbol())>-1&&d.$watch(function(){return c.text().trim();},C);}function C(e){if((e||!x.attr("aria-label"))&&!x.text().trim()){var t=e||c.text().trim(),n=l(t)(x.scope());x.attr("aria-label",n);}}function y(){c.detach(),c.attr("role","tooltip");}function M(){function o(){T(!1);}var a=!1;if(x[0]&&"MutationObserver"in n){var s=new MutationObserver(function(e){e.some(function(e){return"disabled"===e.attributeName&&x[0].disabled;})&&r.nextTick(function(){T(!1);});});s.observe(x[0],{attributes:!0});}var c=function c(){l=document.activeElement===x[0];},l=!1;t.element(n).on("blur",c).on("resize",H),document.addEventListener("scroll",o,!0),d.$on("$destroy",function(){t.element(n).off("blur",c).off("resize",H),x.off(u,h).off(p,f).off("mousedown",g),f(),document.removeEventListener("scroll",o,!0),s&&s.disconnect();});var h=function h(e){"focus"===e.type&&l?l=!1:d.visible||(x.on(p,f),T(!0),"touchstart"===e.type&&x.one("touchend",function(){r.nextTick(function(){i.one("touchend",f);},!1);}));},f=function f(){var t=d.hasOwnProperty("autohide")?d.autohide:m.hasOwnProperty("mdAutohide");(t||a||i[0].activeElement!==x[0])&&(D&&(e.cancel(D),T.queued=!1,D=null),x.off(p,f),x.triggerHandler("blur"),T(!1)),a=!1;},g=function g(){a=!0;};x.on("mousedown",g),x.on(u,h);}function T(t){T.queued&&T.value===!!t||!T.queued&&d.visible===!!t||(T.value=!!t,T.queued||(t?(T.queued=!0,D=e(function(){d.visible=T.value,T.queued=!1,D=null,d.visibleWatcher||E(d.visible);},d.delay)):r.nextTick(function(){d.visible=!1,d.visibleWatcher||E(!1);})));}function A(){if(c[0].textContent.trim()){if(c.css({top:0,left:0}),N.append(c),r.hasComputedStyle(c,"display","none"))return d.visible=!1,void c.detach();k(),s.addClass(S,h).then(function(){c.addClass(h);});}}function w(){s.removeClass(S,h).then(function(){c.removeClass(h),d.visible||c.detach();});}function k(){d.visible&&(v(),_());}function _(){function e(e){var t={left:e.left,top:e.top};return t.left=Math.min(t.left,N.prop("scrollWidth")-n.width-g),t.left=Math.max(t.left,g),t.top=Math.min(t.top,N.prop("scrollHeight")-n.height-g),t.top=Math.max(t.top,g),t;}function t(e){return"left"===e?{left:o.left-n.width-g,top:o.top+o.height/2-n.height/2}:"right"===e?{left:o.left+o.width+g,top:o.top+o.height/2-n.height/2}:"top"===e?{left:o.left+o.width/2-n.width/2,top:o.top-n.height-g}:{left:o.left+o.width/2-n.width/2,top:o.top+o.height+g};}var n=r.offsetRect(c,N),o=r.offsetRect(x,N),i=t(d.direction),a=c.prop("offsetParent");d.direction?i=e(i):a&&i.top>a.scrollHeight-n.height-g&&(i=e(t("top"))),c.css({left:i.left+"px",top:i.top+"px"});}a(c);var x=r.getParentWithPointerEvents(c),S=t.element(c[0].getElementsByClassName("md-content")[0]),N=t.element(document.body),D=null,H=o.throttle(function(){k();});s.pin&&s.pin(c,x),b(),y(),M(),v(),$(),C();}var u="focus touchstart mouseenter",p="blur touchcancel mouseleave",h="md-show",f=0,g=8;return{restrict:"E",transclude:!0,priority:210,template:'<div class="md-content _md" ng-transclude></div>',scope:{delay:"=?mdDelay",visible:"=?mdVisible",autohide:"=?mdAutohide",direction:"@?mdDirection"},compile:function compile(e,t){return t.mdDirection||t.$set("mdDirection","bottom"),m;}};}t.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e),e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement","$animate","$q","$interpolate"];}(),function(){function e(){return{controller:o,template:n,compile:function compile(e,t){e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal")?"md-orient-horizontal":"md-orient-vertical");}};}function n(e){return'<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">'+e[0].innerHTML+"</div></div>";}function o(e,n,o,i,r,a,d,s){this.$rootScope=i,this.$scope=a,this.$element=d,this.$attrs=s,this.size=0,this.scrollSize=0,this.scrollOffset=0,this.horizontal=this.$attrs.hasOwnProperty("mdOrientHorizontal"),this.repeater=null,this.autoShrink=this.$attrs.hasOwnProperty("mdAutoShrink"),this.autoShrinkMin=parseInt(this.$attrs.mdAutoShrinkMin,10)||0,this.originalSize=null,this.offsetSize=parseInt(this.$attrs.mdOffsetSize,10)||0,this.oldElementSize=null,this.$attrs.mdTopIndex?(this.bindTopIndex=o(this.$attrs.mdTopIndex),this.topIndex=this.bindTopIndex(this.$scope),t.isDefined(this.topIndex)||(this.topIndex=0,this.bindTopIndex.assign(this.$scope,0)),this.$scope.$watch(this.bindTopIndex,t.bind(this,function(e){e!==this.topIndex&&this.scrollToIndex(e);}))):this.topIndex=0,this.scroller=d[0].querySelector(".md-virtual-repeat-scroller"),this.sizer=this.scroller.querySelector(".md-virtual-repeat-sizer"),this.offsetter=this.scroller.querySelector(".md-virtual-repeat-offsetter");var c=t.bind(this,this.updateSize);e(t.bind(this,function(){c();var e=n.debounce(c,10,null,!1),o=t.element(r);this.size||e(),o.on("resize",e),a.$on("$destroy",function(){o.off("resize",e);}),a.$emit("$md-resize-enable"),a.$on("$md-resize",c);}));}function i(e){return{controller:r,priority:1e3,require:["mdVirtualRepeat","^^mdVirtualRepeatContainer"],restrict:"A",terminal:!0,transclude:"element",compile:function compile(t,n){var o=n.mdVirtualRepeat,i=o.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),r=i[1],a=e(i[2]),d=n.mdExtraName&&e(n.mdExtraName);return function(e,t,n,o,i){o[0].link_(o[1],i,r,a,d);};}};}function r(e,n,o,i,r,a,d,s){this.$scope=e,this.$element=n,this.$attrs=o,this.$browser=i,this.$document=r,this.$rootScope=a,this.$$rAF=d,this.onDemand=s.parseAttributeBoolean(o.mdOnDemand),this.browserCheckUrlChange=i.$$checkUrlChange,this.newStartIndex=0,this.newEndIndex=0,this.newVisibleEnd=0,this.startIndex=0,this.endIndex=0,this.itemSize=e.$eval(o.mdItemSize)||null,this.isFirstRender=!0,this.isVirtualRepeatUpdating_=!1,this.itemsLength=0,this.unwatchItemSize_=t.noop,this.blocks={},this.pooledBlocks=[],e.$on("$destroy",t.bind(this,this.cleanupBlocks_));}function a(e){if(!t.isFunction(e.getItemAtIndex)||!t.isFunction(e.getLength))throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");this.model=e;}t.module("material.components.virtualRepeat",["material.core","material.components.showHide"]).directive("mdVirtualRepeatContainer",e).directive("mdVirtualRepeat",i);var d=1533917,s=3;o.$inject=["$$rAF","$mdUtil","$parse","$rootScope","$window","$scope","$element","$attrs"],o.prototype.register=function(e){this.repeater=e,t.element(this.scroller).on("scroll wheel touchmove touchend",t.bind(this,this.handleScroll_));},o.prototype.isHorizontal=function(){return this.horizontal;},o.prototype.getSize=function(){return this.size;},o.prototype.setSize_=function(e){var t=this.getDimensionName_();this.size=e,this.$element[0].style[t]=e+"px";},o.prototype.unsetSize_=function(){this.$element[0].style[this.getDimensionName_()]=this.oldElementSize,this.oldElementSize=null;},o.prototype.updateSize=function(){this.originalSize||(this.size=this.isHorizontal()?this.$element[0].clientWidth:this.$element[0].clientHeight,this.handleScroll_(),this.repeater&&this.repeater.containerUpdated());},o.prototype.getScrollSize=function(){return this.scrollSize;},o.prototype.getDimensionName_=function(){return this.isHorizontal()?"width":"height";},o.prototype.sizeScroller_=function(e){var t=this.getDimensionName_(),n=this.isHorizontal()?"height":"width";if(this.sizer.innerHTML="",e<d)this.sizer.style[t]=e+"px";else{this.sizer.style[t]="auto",this.sizer.style[n]="auto";var o=Math.floor(e/d),i=document.createElement("div");i.style[t]="1533917px",i.style[n]="1px";for(var r=0;r<o;r++){this.sizer.appendChild(i.cloneNode(!1));}i.style[t]=e-o*d+"px",this.sizer.appendChild(i);}},o.prototype.autoShrink_=function(e){var t=Math.max(e,this.autoShrinkMin*this.repeater.getItemSize());if(this.autoShrink&&t!==this.size){null===this.oldElementSize&&(this.oldElementSize=this.$element[0].style[this.getDimensionName_()]);var n=this.originalSize||this.size;if(!n||t<n)this.originalSize||(this.originalSize=this.size),this.setSize_(t);else if(null!==this.originalSize){this.unsetSize_();var o=this.originalSize;this.originalSize=null,o||this.updateSize(),this.setSize_(o||this.size);}this.repeater.containerUpdated();}},o.prototype.setScrollSize=function(e){var t=e+this.offsetSize;this.scrollSize!==t&&(this.sizeScroller_(t),this.autoShrink_(t),this.scrollSize=t);},o.prototype.getScrollOffset=function(){return this.scrollOffset;},o.prototype.scrollTo=function(e){this.scroller[this.isHorizontal()?"scrollLeft":"scrollTop"]=e,this.handleScroll_();},o.prototype.scrollToIndex=function(e){var t=this.repeater.getItemSize(),n=this.repeater.itemsLength;e>n&&(e=n-1),this.scrollTo(t*e);},o.prototype.resetScroll=function(){this.scrollTo(0);},o.prototype.handleScroll_=function(){var e=t.element(document)[0],n="rtl"!=e.dir&&"rtl"!=e.body.dir;n||this.maxSize||(this.scroller.scrollLeft=this.scrollSize,this.maxSize=this.scroller.scrollLeft);var o=this.isHorizontal()?n?this.scroller.scrollLeft:this.maxSize-this.scroller.scrollLeft:this.scroller.scrollTop;if(!(o===this.scrollOffset||o>this.scrollSize-this.size)){var i=this.repeater.getItemSize();if(i){var r=Math.max(0,Math.floor(o/i)-s),a=(this.isHorizontal()?"translateX(":"translateY(")+(!this.isHorizontal()||n?r*i:-(r*i))+"px)";if(this.scrollOffset=o,this.offsetter.style.webkitTransform=a,this.offsetter.style.transform=a,this.bindTopIndex){var d=Math.floor(o/i);d!==this.topIndex&&d<this.repeater.getItemCount()&&(this.topIndex=d,this.bindTopIndex.assign(this.$scope,d),this.$rootScope.$$phase||this.$scope.$digest());}this.repeater.containerUpdated();}}},i.$inject=["$parse"],r.$inject=["$scope","$element","$attrs","$browser","$document","$rootScope","$$rAF","$mdUtil"],r.Block,r.prototype.link_=function(e,n,o,i,r){this.container=e,this.transclude=n,this.repeatName=o,this.rawRepeatListExpression=i,this.extraName=r,this.sized=!1,this.repeatListExpression=t.bind(this,this.repeatListExpression_),this.container.register(this);},r.prototype.cleanupBlocks_=function(){t.forEach(this.pooledBlocks,function(e){e.element.remove();});},r.prototype.readItemSize_=function(){if(!this.itemSize){this.items=this.repeatListExpression(this.$scope),this.parentNode=this.$element[0].parentNode;var e=this.getBlock_(0);e.element[0].parentNode||this.parentNode.appendChild(e.element[0]),this.itemSize=e.element[0][this.container.isHorizontal()?"offsetWidth":"offsetHeight"]||null,this.blocks[0]=e,this.poolBlock_(0),this.itemSize&&this.containerUpdated();}},r.prototype.repeatListExpression_=function(e){var t=this.rawRepeatListExpression(e);if(this.onDemand&&t){var n=new a(t);return n.$$includeIndexes(this.newStartIndex,this.newVisibleEnd),n;}return t;},r.prototype.containerUpdated=function(){return this.itemSize?(this.sized||(this.items=this.repeatListExpression(this.$scope)),this.sized||(this.unwatchItemSize_(),this.sized=!0,this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e,t){this.isVirtualRepeatUpdating_||this.virtualRepeatUpdate_(e,t);}))),this.updateIndexes_(),void((this.newStartIndex!==this.startIndex||this.newEndIndex!==this.endIndex||this.container.getScrollOffset()>this.container.getScrollSize())&&(this.items instanceof a&&this.items.$$includeIndexes(this.newStartIndex,this.newEndIndex),this.virtualRepeatUpdate_(this.items,this.items)))):(this.unwatchItemSize_&&this.unwatchItemSize_!==t.noop&&this.unwatchItemSize_(),this.unwatchItemSize_=this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e){e&&e.length&&this.readItemSize_();})),void(this.$rootScope.$$phase||this.$scope.$digest()));},r.prototype.getItemSize=function(){return this.itemSize;},r.prototype.getItemCount=function(){return this.itemsLength;},r.prototype.virtualRepeatUpdate_=function(e,n){this.isVirtualRepeatUpdating_=!0;var o=e&&e.length||0,i=!1;if(this.items&&o<this.items.length&&0!==this.container.getScrollOffset()){this.items=e;var r=this.container.getScrollOffset();return this.container.resetScroll(),void this.container.scrollTo(r);}if(o!==this.itemsLength&&(i=!0,this.itemsLength=o),this.items=e,(e!==n||i)&&this.updateIndexes_(),this.parentNode=this.$element[0].parentNode,i&&this.container.setScrollSize(o*this.itemSize),this.isFirstRender){this.isFirstRender=!1;var a=this.$attrs.mdStartIndex?this.$scope.$eval(this.$attrs.mdStartIndex):this.container.topIndex;this.container.scrollToIndex(a);}Object.keys(this.blocks).forEach(function(e){var t=parseInt(e,10);(t<this.newStartIndex||t>=this.newEndIndex)&&this.poolBlock_(t);},this),this.$browser.$$checkUrlChange=t.noop;var d,s,c=[],l=[];for(d=this.newStartIndex;d<this.newEndIndex&&null==this.blocks[d];d++){s=this.getBlock_(d),this.updateBlock_(s,d),c.push(s);}for(;null!=this.blocks[d];d++){this.updateBlock_(this.blocks[d],d);}for(var m=d-1;d<this.newEndIndex;d++){s=this.getBlock_(d),this.updateBlock_(s,d),l.push(s);}c.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(c),this.$element[0].nextSibling),l.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(l),this.blocks[m]&&this.blocks[m].element[0].nextSibling),this.$browser.$$checkUrlChange=this.browserCheckUrlChange,this.startIndex=this.newStartIndex,this.endIndex=this.newEndIndex,this.isVirtualRepeatUpdating_=!1;},r.prototype.getBlock_=function(e){if(this.pooledBlocks.length)return this.pooledBlocks.pop();var n;return this.transclude(t.bind(this,function(t,o){n={element:t,"new":!0,scope:o},this.updateScope_(o,e),this.parentNode.appendChild(t[0]);})),n;},r.prototype.updateBlock_=function(e,t){this.blocks[t]=e,(e["new"]||e.scope.$index!==t||e.scope[this.repeatName]!==this.items[t])&&(e["new"]=!1,this.updateScope_(e.scope,t),this.$rootScope.$$phase||e.scope.$digest());},r.prototype.updateScope_=function(e,t){e.$index=t,e[this.repeatName]=this.items&&this.items[t],this.extraName&&(e[this.extraName(this.$scope)]=this.items[t]);},r.prototype.poolBlock_=function(e){this.pooledBlocks.push(this.blocks[e]),this.parentNode.removeChild(this.blocks[e].element[0]),delete this.blocks[e];},r.prototype.domFragmentFromBlocks_=function(e){var t=this.$document[0].createDocumentFragment();return e.forEach(function(e){t.appendChild(e.element[0]);}),t;},r.prototype.updateIndexes_=function(){var e=this.items?this.items.length:0,t=Math.ceil(this.container.getSize()/this.itemSize);this.newStartIndex=Math.max(0,Math.min(e-t,Math.floor(this.container.getScrollOffset()/this.itemSize))),this.newVisibleEnd=this.newStartIndex+t+s,this.newEndIndex=Math.min(e,this.newVisibleEnd),this.newStartIndex=Math.max(0,this.newStartIndex-s);},a.prototype.$$includeIndexes=function(e,t){for(var n=e;n<t;n++){this.hasOwnProperty(n)||(this[n]=this.model.getItemAtIndex(n));}this.length=this.model.getLength();};}(),function(){function e(e){function t(t,a,d){var s="";d.$observe("mdWhiteframe",function(t){t=parseInt(t,10)||r,t!=n&&(t>i||t<o)&&(e.warn("md-whiteframe attribute value is invalid. It should be a number between "+o+" and "+i,a[0]),t=r);var c=t==n?"":"md-whiteframe-"+t+"dp";d.$updateClass(c,s),s=c;});}var n=-1,o=1,i=24,r=4;return{link:t};}t.module("material.components.whiteframe",["material.core"]).directive("mdWhiteframe",e),e.$inject=["$log"];}(),function(){function e(e,o,d,s,c,l,m,u,p,h,f){function g(){d.initOptionalProperties(e,p,{searchText:"",selectedItem:null}),c(o),C(),d.nextTick(function(){M(),E(),$(),o.on("focus",$);});}function b(){e.requireMatch&&_e&&_e.$setValidity("md-require-match",!!e.selectedItem);}function v(){function t(){var e=0,t=o.find("md-input-container");if(t.length){var n=t.find("input");e=t.prop("offsetHeight"),e-=n.prop("offsetTop"),e-=n.prop("offsetHeight"),e+=t.prop("offsetTop");}return e;}function n(){var e=$e.scrollContainer.getBoundingClientRect(),t={};e.right>m.right-r&&(t.left=c.right-e.width+"px"),$e.$.scrollContainer.css(t);}if(!$e)return d.nextTick(v,!1,e);var s,c=$e.wrap.getBoundingClientRect(),l=$e.snap.getBoundingClientRect(),m=$e.root.getBoundingClientRect(),u=l.bottom-m.top,h=m.bottom-l.top,f=c.left-m.left,g=c.width,b=t();p.mdFloatingLabel&&(f+=a,g-=2*a),s={left:f+"px",minWidth:g+"px",maxWidth:Math.max(c.right-m.left,m.right-c.left)-r+"px"},u>h&&m.height-c.bottom-r<i?(s.top="auto",s.bottom=h+"px",s.maxHeight=Math.min(i,c.top-m.top-r)+"px"):(s.top=u-b+"px",s.bottom="auto",s.maxHeight=Math.min(i,m.bottom+d.scrollTop()-c.bottom-r)+"px"),$e.$.scrollContainer.css(s),d.nextTick(n,!1);}function E(){$e.$.root.length&&(c($e.$.scrollContainer),$e.$.scrollContainer.detach(),$e.$.root.append($e.$.scrollContainer),m.pin&&m.pin($e.$.scrollContainer,u));}function $(){e.autofocus&&$e.input.focus();}function C(){var n=parseInt(e.delay,10)||0;p.$observe("disabled",function(e){be.isDisabled=d.parseAttributeBoolean(e,!1);}),p.$observe("required",function(e){be.isRequired=d.parseAttributeBoolean(e,!1);}),p.$observe("readonly",function(e){be.isReadonly=d.parseAttributeBoolean(e,!1);}),e.$watch("searchText",n?d.debounce(L,n):L),e.$watch("selectedItem",N),t.element(l).on("resize",v),e.$on("$destroy",y);}function y(){if(be.hidden||d.enableScrolling(),t.element(l).off("resize",v),$e){var e=["ul","scroller","scrollContainer","input"];t.forEach(e,function(e){$e.$[e].remove();});}}function M(){$e={main:o[0],scrollContainer:o[0].querySelector(".md-virtual-repeat-container"),scroller:o[0].querySelector(".md-virtual-repeat-scroller"),ul:o.find("ul")[0],input:o.find("input")[0],wrap:o.find("md-autocomplete-wrap")[0],root:document.body},$e.li=$e.ul.getElementsByTagName("li"),$e.snap=T(),$e.$=A($e),_e=$e.$.input.controller("ngModel");}function T(){for(var e=o;e.length;e=e.parent()){if(t.isDefined(e.attr("md-autocomplete-snap")))return e[0];}return $e.wrap;}function A(e){var n={};for(var o in e){e.hasOwnProperty(o)&&(n[o]=t.element(e[o]));}return n;}function w(n,o){!n&&o?(v(),$e&&d.nextTick(function(){d.disableScrollAround($e.ul),ke=k(t.element($e.wrap));},!1,e)):n&&!o&&d.nextTick(function(){d.enableScrolling(),ke&&(ke(),ke=null);},!1,e);}function k(e){function t(e){e.preventDefault();}return e.on("wheel",t),e.on("touchmove",t),function(){e.off("wheel",t),e.off("touchmove",t);};}function _(){ye=!0;}function x(){Te||be.hidden||$e.input.focus(),ye=!1,be.hidden=Y();}function S(){$e.input.focus();}function N(t,n){b(),t?q(t).then(function(o){e.searchText=o,I(t,n);}):n&&e.searchText&&q(n).then(function(t){t.toString().toLowerCase()===e.searchText.toLowerCase()&&(e.searchText="");}),t!==n&&D();}function D(){t.isFunction(e.itemChange)&&e.itemChange(z(e.selectedItem));}function H(){t.isFunction(e.textChange)&&e.textChange();}function I(e,t){Me.forEach(function(n){n(e,t);});}function O(e){Me.indexOf(e)==-1&&Me.push(e);}function R(e){var t=Me.indexOf(e);t!=-1&&Me.splice(t,1);}function L(t,n){be.index=W(),t!==n&&(b(),q(e.selectedItem).then(function(o){t!==o&&(e.selectedItem=null,t!==n&&H(),te()?he():(be.matches=[],V(!1),se()));}));}function P(){Te=!1,ye||(be.hidden=Y());}function F(e){e&&(ye=!1,Te=!1),$e.input.blur();}function B(n){Te=!0,t.isString(e.searchText)||(e.searchText=""),be.hidden=Y(),be.hidden||he();}function U(t){switch(t.keyCode){case s.KEY_CODE.DOWN_ARROW:if(be.loading)return;t.stopPropagation(),t.preventDefault(),be.index=Math.min(be.index+1,be.matches.length-1),le(),se();break;case s.KEY_CODE.UP_ARROW:if(be.loading)return;t.stopPropagation(),t.preventDefault(),be.index=be.index<0?be.matches.length-1:Math.max(0,be.index-1),le(),se();break;case s.KEY_CODE.TAB:if(x(),be.hidden||be.loading||be.index<0||be.matches.length<1)return;oe(be.index);break;case s.KEY_CODE.ENTER:if(be.hidden||be.loading||be.index<0||be.matches.length<1)return;if(Z())return;t.stopPropagation(),t.preventDefault(),oe(be.index);break;case s.KEY_CODE.ESCAPE:if(t.preventDefault(),!K())return;t.stopPropagation(),re(),e.searchText&&G("clear")&&ae(),be.hidden=!0,G("blur")&&F(!0);}}function j(){return t.isNumber(e.minLength)?e.minLength:1;}function q(n){function o(t){return t&&e.itemText?e.itemText(z(t)):null;}return h.when(o(n)||n).then(function(e){return e&&!t.isString(e)&&f.warn("md-autocomplete: Could not resolve display value to a string. Please check the `md-item-text` attribute."),e;});}function z(e){if(!e)return n;var t={};return be.itemName&&(t[be.itemName]=e),t;}function W(){return e.autoselect?0:-1;}function V(e){be.loading!=e&&(be.loading=e),be.hidden=Y();}function Y(){return!(!be.loading||Q())||!!Z()||!Te||!X();}function K(){return G("blur")||!be.hidden||be.loading||G("clear")&&e.searchText;}function G(t){return!e.escapeOptions||e.escapeOptions.toLowerCase().indexOf(t)!==-1;}function X(){return te()&&Q()||pe();}function Q(){return!!be.matches.length;}function Z(){return!!be.scope.selectedItem;}function J(){return be.loading&&!Z();}function ee(){return q(be.matches[be.index]);}function te(){return(e.searchText||"").length>=j();}function ne(e,t,n){Object.defineProperty(be,e,{get:function get(){return n;},set:function set(e){var o=n;n=e,t(e,o);}});}function oe(t){d.nextTick(function(){q(be.matches[t]).then(function(e){var t=$e.$.input.controller("ngModel");t.$setViewValue(e),t.$render();})["finally"](function(){e.selectedItem=be.matches[t],V(!1);});},!1);}function ie(){re(),ae();}function re(){be.index=0,be.matches=[];}function ae(){V(!0),e.searchText="";var t=document.createEvent("CustomEvent");t.initCustomEvent("change",!0,!0,{value:""}),$e.input.dispatchEvent(t),$e.input.blur(),e.searchText="",$e.input.focus();}function de(n){function o(t){t&&(t=h.when(t),we++,V(!0),d.nextTick(function(){t.then(i)["finally"](function(){0===--we&&V(!1);});},!0,e));}function i(t){Ce[a]=t,(n||"")===(e.searchText||"")&&fe(t);}var r=e.$parent.$eval(Ee),a=n.toLowerCase(),s=t.isArray(r),c=!!r.then;s?i(r):c&&o(r);}function se(){ee().then(function(e){be.messages=[ce(),e];});}function ce(){if(Ae===be.matches.length)return"";switch(Ae=be.matches.length,be.matches.length){case 0:return"There are no matches available.";case 1:return"There is 1 match available.";default:return"There are "+be.matches.length+" matches available.";}}function le(){if($e.li[0]){var e=$e.li[0].offsetHeight,t=e*be.index,n=t+e,o=$e.scroller.clientHeight,i=$e.scroller.scrollTop;t<i?ue(t):n>i+o&&ue(n-o);}}function me(){return 0!==we;}function ue(e){$e.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e);}function pe(){var e=(be.scope.searchText||"").length;return be.hasNotFound&&!Q()&&(!be.loading||me())&&e>=j()&&(Te||ye)&&!Z();}function he(){var t=e.searchText||"",n=t.toLowerCase();!e.noCache&&Ce[n]?fe(Ce[n]):de(t),be.hidden=Y();}function fe(t){be.matches=t,be.hidden=Y(),be.loading&&V(!1),e.selectOnMatch&&ge(),se(),v();}function ge(){var t=e.searchText,n=be.matches,o=n[0];1===n.length&&q(o).then(function(n){var o=t==n;e.matchInsensitive&&!o&&(o=t.toLowerCase()==n.toLowerCase()),o&&oe(0);});}var be=this,ve=e.itemsExpr.split(/ in /i),Ee=ve[1],$e=null,Ce={},ye=!1,Me=[],Te=!1,Ae=0,we=0,ke=null,_e=null;return ne("hidden",w,!0),be.scope=e,be.parent=e.$parent,be.itemName=ve[0],be.matches=[],be.loading=!1,be.hidden=!0,be.index=null,be.messages=[],be.id=d.nextUid(),be.isDisabled=null,be.isRequired=null,be.isReadonly=null,be.hasNotFound=!1,be.keydown=U,be.blur=P,be.focus=B,be.clear=ie,be.select=oe,be.listEnter=_,be.listLeave=x,be.mouseUp=S,be.getCurrentDisplayValue=ee,be.registerSelectedItemWatcher=O,be.unregisterSelectedItemWatcher=R,be.notFoundVisible=pe,be.loadingIsVisible=J,be.positionDropdown=v,g();}t.module("material.components.autocomplete").controller("MdAutocompleteCtrl",e);var o=41,i=5.5*o,r=8,a=2;e.$inject=["$scope","$element","$mdUtil","$mdConstant","$mdTheming","$window","$animate","$rootElement","$attrs","$q","$log"];}(),function(){function e(e){return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",scope:{inputName:"@mdInputName",inputMinlength:"@mdInputMinlength",inputMaxlength:"@mdInputMaxlength",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",requireMatch:"=?mdRequireMatch",selectOnMatch:"=?mdSelectOnMatch",matchInsensitive:"=?mdMatchCaseInsensitive",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass",inputId:"@?mdInputId",escapeOptions:"@?mdEscapeOptions"},link:function link(e,t,n,o){o.hasNotFound=!!t.attr("md-has-not-found");},template:function template(t,n){function o(){var e=t.find("md-item-template").detach(),n=e.length?e.html():t.html();return e.length||t.empty(),"<md-autocomplete-parent-scope md-autocomplete-replace>"+n+"</md-autocomplete-parent-scope>";}function i(){var e=t.find("md-not-found").detach(),n=e.length?e.html():"";return n?'<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>'+n+"</li>":"";}function r(){return n.mdFloatingLabel?'            <md-input-container ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  '+(null!=c?'tabindex="'+c+'"':"")+'                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-readonly="$mdAutocompleteCtrl.isReadonly"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-model-options="{ allowInvalid: true }"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur()"                  '+(null!=n.mdNoAsterisk?'md-no-asterisk="'+n.mdNoAsterisk+'"':"")+'                  ng-focus="$mdAutocompleteCtrl.focus($event)"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  '+(null!=n.mdSelectOnFocus?'md-select-on-focus=""':"")+'                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  role="combobox"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>'+s+"</div>            </md-input-container>":'            <input type="search"                '+(null!=c?'tabindex="'+c+'"':"")+'                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-readonly="$mdAutocompleteCtrl.isReadonly"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus($event)"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                '+(null!=n.mdSelectOnFocus?'md-select-on-focus=""':"")+'                aria-label="{{placeholder}}"                aria-autocomplete="list"                role="combobox"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear($event)">              <md-icon md-svg-src="'+e.mdClose+'"></md-icon>              <span class="md-visually-hidden">Clear</span>            </button>                ';}var a=i(),d=o(),s=t.html(),c=n.tabindex;return a&&t.attr("md-has-not-found",!0),t.attr("tabindex","-1"),"        <md-autocomplete-wrap            ng-class=\"{ 'md-whiteframe-z1': !floatingLabel, 'md-menu-showing': !$mdAutocompleteCtrl.hidden }\">          "+r()+'          <md-progress-linear              class="'+(n.mdFloatingLabel?"md-inline":"")+'"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  '+d+"                  </li>"+a+'            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages track by $index" ng-if="message">{{message}}</p>        </aria-status>';}};}t.module("material.components.autocomplete").directive("mdAutocomplete",e),e.$inject=["$$mdSvgRegistry"];}(),function(){function e(e,t){function n(e,n,o){return function(e,n,i){function r(n,o){s[o]=e[n],e.$watch(n,function(e){t.nextTick(function(){s[o]=e;});});}function a(){var t=!1,n=!1;e.$watch(function(){n||t||(t=!0,e.$$postDigest(function(){n||s.$digest(),t=n=!1;}));}),s.$watch(function(){n=!0;});}var d=e.$mdAutocompleteCtrl,s=d.parent.$new(),c=d.itemName;r("$index","$index"),r("item",c),a(),o(s,function(e){n.after(e);});};}return{restrict:"AE",compile:n,terminal:!0,transclude:"element"};}t.module("material.components.autocomplete").directive("mdAutocompleteParentScope",e),e.$inject=["$compile","$mdUtil"];}(),function(){function e(e,n,o){function i(i,r){var d=null,s=null,c=o.mdHighlightFlags||"",l=e.$watch(function(e){return{term:i(e),unsafeText:r(e)};},function(e,o){null!==d&&e.unsafeText===o.unsafeText||(d=t.element("<div>").text(e.unsafeText).html()),null!==s&&e.term===o.term||(s=a(e.term,c)),n.html(d.replace(s,'<span class="highlight">$&</span>'));},!0);n.on("$destroy",l);}function r(e){return e&&e.toString().replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g,"\\$&");}function a(e,t){var n="",o="";return t.indexOf("^")>=0&&(n="^"),t.indexOf("$")>=0&&(o="$"),new RegExp(n+r(e)+o,t.replace(/[\$\^]/g,""));}this.init=i;}t.module("material.components.autocomplete").controller("MdHighlightCtrl",e),e.$inject=["$scope","$element","$attrs"];}(),function(){function e(e,t){return{terminal:!0,controller:"MdHighlightCtrl",compile:function compile(n,o){var i=t(o.mdHighlightText),r=e(n.html());return function(e,t,n,o){o.init(i,r);};}};}t.module("material.components.autocomplete").directive("mdHighlightText",e),e.$inject=["$interpolate","$parse"];}(),function(){function o(e,t,o,i,r){this.$scope=e,this.$element=t,this.$mdConstant=o,this.$timeout=i,this.$mdUtil=r,this.isEditting=!1,this.parentController=n,this.enableChipEdit=!1;}t.module("material.components.chips").controller("MdChipCtrl",o),o.$inject=["$scope","$element","$mdConstant","$timeout","$mdUtil"],o.prototype.init=function(e){this.parentController=e,this.enableChipEdit=this.parentController.enableChipEdit,this.enableChipEdit&&(this.$element.on("keydown",this.chipKeyDown.bind(this)),this.$element.on("mousedown",this.chipMouseDown.bind(this)),this.getChipContent().addClass("_md-chip-content-edit-is-enabled"));},o.prototype.getChipContent=function(){var e=this.$element[0].getElementsByClassName("md-chip-content");return t.element(e[0]);},o.prototype.getContentElement=function(){return t.element(this.getChipContent().children()[0]);},o.prototype.getChipIndex=function(){return parseInt(this.$element.attr("index"));},o.prototype.goOutOfEditMode=function(){if(this.isEditting){this.isEditting=!1,this.$element.removeClass("_md-chip-editing"),this.getChipContent()[0].contentEditable="false";var e=this.getChipIndex(),t=this.getContentElement().text();t?(this.parentController.updateChipContents(e,this.getContentElement().text()),this.$mdUtil.nextTick(function(){this.parentController.selectedChip===e&&this.parentController.focusChip(e);}.bind(this))):this.parentController.removeChipAndFocusInput(e);}},o.prototype.selectNodeContents=function(t){var n,o;document.body.createTextRange?(n=document.body.createTextRange(),n.moveToElementText(t),n.select()):e.getSelection&&(o=e.getSelection(),n=document.createRange(),n.selectNodeContents(t),o.removeAllRanges(),o.addRange(n));},o.prototype.goInEditMode=function(){this.isEditting=!0,this.$element.addClass("_md-chip-editing"),this.getChipContent()[0].contentEditable="true",this.getChipContent().on("blur",function(){this.goOutOfEditMode();}.bind(this)),this.selectNodeContents(this.getChipContent()[0]);},o.prototype.chipKeyDown=function(e){this.isEditting||e.keyCode!==this.$mdConstant.KEY_CODE.ENTER&&e.keyCode!==this.$mdConstant.KEY_CODE.SPACE?this.isEditting&&e.keyCode===this.$mdConstant.KEY_CODE.ENTER&&(e.preventDefault(),this.goOutOfEditMode()):(e.preventDefault(),this.goInEditMode());},o.prototype.chipMouseDown=function(){this.getChipIndex()==this.parentController.selectedChip&&this.enableChipEdit&&!this.isEditting&&this.goInEditMode();};}(),function(){function e(e,o){function i(n,i){return n.append(o.processTemplate(r)),function(n,o,i,r){var a=r.shift(),d=r.shift();e(o),a&&(d.init(a),t.element(o[0].querySelector(".md-chip-content")).on("blur",function(){a.resetSelectedChip(),a.$scope.$applyAsync();}));};}var r=o.processTemplate(n);return{restrict:"E",require:["^?mdChips","mdChip"],compile:i,controller:"MdChipCtrl"};}t.module("material.components.chips").directive("mdChip",e);var n='    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';e.$inject=["$mdTheming","$mdUtil"];}(),function(){function e(e){function t(t,n,o,i){n.on("click",function(e){t.$apply(function(){i.removeChip(t.$$replacedScope.$index);});}),e(function(){n.attr({tabindex:-1,"aria-hidden":!0}),n.find("button").attr("tabindex","-1");});}return{restrict:"A",require:"^mdChips",scope:!1,link:t};}t.module("material.components.chips").directive("mdChipRemove",e),e.$inject=["$timeout"];}(),function(){function e(e){function t(t,n,o){var i=t.$parent.$mdChipsCtrl,r=i.parent.$new(!1,i.parent);r.$$replacedScope=t,r.$chip=t.$chip,r.$index=t.$index,r.$mdChipsCtrl=i;var a=i.$scope.$eval(o.mdChipTransclude);n.html(a),e(n.contents())(r);}return{restrict:"EA",terminal:!0,link:t,scope:!1};}t.module("material.components.chips").directive("mdChipTransclude",e),e.$inject=["$compile"];}(),function(){function e(e,t,n,o,i,r){this.$timeout=i,this.$mdConstant=t,this.$scope=e,this.parent=e.$parent,this.$log=n,this.$element=o,this.ngModelCtrl=null,this.userInputNgModelCtrl=null,this.userInputElement=null,this.items=[],this.selectedChip=-1,this.hasAutocomplete=!1,this.enableChipEdit=r.parseAttributeBoolean(this.mdEnableChipEdit),this.deleteHint="Press delete to remove this chip.",this.deleteButtonLabel="Remove",this.chipBuffer="",this.useTransformChip=!1,this.useOnAdd=!1,this.useOnRemove=!1;}t.module("material.components.chips").controller("MdChipsCtrl",e),e.$inject=["$scope","$mdConstant","$log","$element","$timeout","$mdUtil"],e.prototype.inputKeydown=function(e){var t=this.getChipBuffer();if(!(this.hasAutocomplete&&e.isDefaultPrevented&&e.isDefaultPrevented())){if(e.keyCode===this.$mdConstant.KEY_CODE.BACKSPACE){if(0!==this.getCursorPosition(e.target))return;return e.preventDefault(),e.stopPropagation(),void(this.items.length&&this.selectAndFocusChipSafe(this.items.length-1));}if((!this.separatorKeys||this.separatorKeys.length<1)&&(this.separatorKeys=[this.$mdConstant.KEY_CODE.ENTER]),this.separatorKeys.indexOf(e.keyCode)!==-1){if(this.hasAutocomplete&&this.requireMatch||!t)return;if(e.preventDefault(),this.hasMaxChipsReached())return;this.appendChip(t.trim()),this.resetChipBuffer();}}},e.prototype.getCursorPosition=function(e){try{if(e.selectionStart===e.selectionEnd)return e.selectionStart;}catch(t){if(!e.value)return 0;}},e.prototype.updateChipContents=function(e,t){e>=0&&e<this.items.length&&(this.items[e]=t,this.ngModelCtrl.$setDirty());},e.prototype.isEditingChip=function(){return!!this.$element[0].getElementsByClassName("_md-chip-editing").length;},e.prototype.isRemovable=function(){return!!this.ngModelCtrl&&(this.readonly?this.removable:!t.isDefined(this.removable)||this.removable);},e.prototype.chipKeydown=function(e){if(!this.getChipBuffer()&&!this.isEditingChip())switch(e.keyCode){case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:if(this.selectedChip<0)return;if(e.preventDefault(),!this.isRemovable())return;this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:e.preventDefault(),this.selectedChip<0&&(this.selectedChip=this.items.length),this.items.length&&this.selectAndFocusChipSafe(this.selectedChip-1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:e.preventDefault(),this.selectAndFocusChipSafe(this.selectedChip+1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:if(this.selectedChip<0)return;e.preventDefault(),this.onFocus();}},e.prototype.getPlaceholder=function(){var e=this.items&&this.items.length&&(""==this.secondaryPlaceholder||this.secondaryPlaceholder);return e?this.secondaryPlaceholder:this.placeholder;},e.prototype.removeAndSelectAdjacentChip=function(e){var n=this.getAdjacentChipIndex(e);this.removeChip(e),this.$timeout(t.bind(this,function(){this.selectAndFocusChipSafe(n);}));},e.prototype.resetSelectedChip=function(){this.selectedChip=-1;},e.prototype.getAdjacentChipIndex=function(e){var t=this.items.length-1;return 0==t?-1:e==t?e-1:e;},e.prototype.appendChip=function(e){if(this.useTransformChip&&this.transformChip){var n=this.transformChip({$chip:e});t.isDefined(n)&&(e=n);}if(t.isObject(e)){var o=this.items.some(function(n){return t.equals(e,n);});if(o)return;}if(!(null==e||this.items.indexOf(e)+1)){var i=this.items.push(e);this.ngModelCtrl.$setDirty(),this.validateModel(),this.useOnAdd&&this.onAdd&&this.onAdd({$chip:e,$index:i});}},e.prototype.useTransformChipExpression=function(){this.useTransformChip=!0;},e.prototype.useOnAddExpression=function(){this.useOnAdd=!0;},e.prototype.useOnRemoveExpression=function(){this.useOnRemove=!0;},e.prototype.useOnSelectExpression=function(){this.useOnSelect=!0;},e.prototype.getChipBuffer=function(){return this.userInputElement?this.userInputNgModelCtrl?this.userInputNgModelCtrl.$viewValue:this.userInputElement[0].value:this.chipBuffer;},e.prototype.resetChipBuffer=function(){this.userInputElement?this.userInputNgModelCtrl?(this.userInputNgModelCtrl.$setViewValue(""),this.userInputNgModelCtrl.$render()):this.userInputElement[0].value="":this.chipBuffer="";},e.prototype.hasMaxChipsReached=function(){return t.isString(this.maxChips)&&(this.maxChips=parseInt(this.maxChips,10)||0),this.maxChips>0&&this.items.length>=this.maxChips;},e.prototype.validateModel=function(){this.ngModelCtrl.$setValidity("md-max-chips",!this.hasMaxChipsReached());},e.prototype.removeChip=function(e){var t=this.items.splice(e,1);this.ngModelCtrl.$setDirty(),this.validateModel(),t&&t.length&&this.useOnRemove&&this.onRemove&&this.onRemove({$chip:t[0],$index:e});},e.prototype.removeChipAndFocusInput=function(e){this.removeChip(e),this.onFocus();},e.prototype.selectAndFocusChipSafe=function(e){return this.items.length?e===this.items.length?this.onFocus():(e=Math.max(e,0),e=Math.min(e,this.items.length-1),this.selectChip(e),void this.focusChip(e)):(this.selectChip(-1),void this.onFocus());},e.prototype.selectChip=function(e){e>=-1&&e<=this.items.length?(this.selectedChip=e,this.useOnSelect&&this.onSelect&&this.onSelect({$chip:this.items[this.selectedChip]})):this.$log.warn("Selected Chip index out of bounds; ignoring.");},e.prototype.selectAndFocusChip=function(e){this.selectChip(e),e!=-1&&this.focusChip(e);},e.prototype.focusChip=function(e){this.$element[0].querySelector('md-chip[index="'+e+'"] .md-chip-content').focus();},e.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.items=t.ngModelCtrl.$viewValue;};},e.prototype.onFocus=function(){var e=this.$element[0].querySelector("input");e&&e.focus(),this.resetSelectedChip();},e.prototype.onInputFocus=function(){this.inputHasFocus=!0,this.resetSelectedChip();},e.prototype.onInputBlur=function(){this.inputHasFocus=!1;},e.prototype.configureUserInput=function(e){this.userInputElement=e;var n=e.controller("ngModel");n!=this.ngModelCtrl&&(this.userInputNgModelCtrl=n);var o=this.$scope,i=this,r=function r(e,n){o.$evalAsync(t.bind(i,n,e));};e.attr({tabindex:0}).on("keydown",function(e){r(e,i.inputKeydown);}).on("focus",function(e){r(e,i.onInputFocus);}).on("blur",function(e){r(e,i.onInputBlur);});},e.prototype.configureAutocomplete=function(e){e&&(this.hasAutocomplete=!0,e.registerSelectedItemWatcher(t.bind(this,function(e){if(e){if(this.hasMaxChipsReached())return;this.appendChip(e),this.resetChipBuffer();}})),this.$element.find("input").on("focus",t.bind(this,this.onInputFocus)).on("blur",t.bind(this,this.onInputBlur)));},e.prototype.hasFocus=function(){return this.inputHasFocus||this.selectedChip>=0;};}(),function(){function e(e,t,a,d,s,c){function l(n,o){function i(e){if(o.ngModel){var t=r[0].querySelector(e);return t&&t.outerHTML;}}var r=o.$mdUserTemplate;o.$mdUserTemplate=null;var l=i("md-chips>md-chip-template"),m=t.prefixer().buildList("md-chip-remove").map(function(e){return"md-chips>*["+e+"]";}).join(","),p=i(m)||u.remove,h=l||u["default"],f=i("md-chips>md-autocomplete")||i("md-chips>input")||u.input,g=r.find("md-chip");return r[0].querySelector("md-chip-template>*[md-chip-remove]")&&d.warn("invalid placement of md-chip-remove within md-chip-template."),function(n,i,r,d){t.initOptionalProperties(n,o),e(i);var m=d[0];if(l&&(m.enableChipEdit=!1),m.chipContentsTemplate=h,m.chipRemoveTemplate=p,m.chipInputTemplate=f,m.mdCloseIcon=c.mdClose,i.attr({"aria-hidden":!0,tabindex:-1}).on("focus",function(){m.onFocus();}),o.ngModel&&(m.configureNgModel(i.controller("ngModel")),r.mdTransformChip&&m.useTransformChipExpression(),r.mdOnAppend&&m.useOnAppendExpression(),r.mdOnAdd&&m.useOnAddExpression(),r.mdOnRemove&&m.useOnRemoveExpression(),r.mdOnSelect&&m.useOnSelectExpression(),f!=u.input&&n.$watch("$mdChipsCtrl.readonly",function(e){e||t.nextTick(function(){0===f.indexOf("<md-autocomplete")&&m.configureAutocomplete(i.find("md-autocomplete").controller("mdAutocomplete")),m.configureUserInput(i.find("input"));});}),t.nextTick(function(){var e=i.find("input");e&&e.toggleClass("md-input",!0);})),g.length>0){var b=a(g.clone())(n.$parent);s(function(){i.find("md-chips-wrap").prepend(b);});}};}function m(){return{chips:t.processTemplate(n),input:t.processTemplate(o),"default":t.processTemplate(i),remove:t.processTemplate(r)};}var u=m();return{template:function template(e,t){return t.$mdUserTemplate=e.clone(),u.chips;},require:["mdChips"],restrict:"E",controller:"MdChipsCtrl",controllerAs:"$mdChipsCtrl",bindToController:!0,compile:l,scope:{readonly:"=readonly",removable:"=mdRemovable",placeholder:"@",mdEnableChipEdit:"@",secondaryPlaceholder:"@",maxChips:"@mdMaxChips",transformChip:"&mdTransformChip",onAppend:"&mdOnAppend",onAdd:"&mdOnAdd",onRemove:"&mdOnRemove",onSelect:"&mdOnSelect",deleteHint:"@",deleteButtonLabel:"@",separatorKeys:"=?mdSeparatorKeys",requireMatch:"=?mdRequireMatch"}};}t.module("material.components.chips").directive("mdChips",e);var n='      <md-chips-wrap          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(),                       \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly,                      \'md-removable\': $mdChipsCtrl.isRemovable() }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-click="!$mdChipsCtrl.readonly && $mdChipsCtrl.focusChip($index)"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="$mdChipsCtrl.isRemovable()"               class="md-chip-remove-container"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div class="md-chip-input-container" ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl">          <div md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',o='        <input            class="md-input"            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',i="      <span>{{$chip}}</span>",r='      <button          class="md-chip-remove"          ng-if="$mdChipsCtrl.isRemovable()"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-src="{{ $mdChipsCtrl.mdCloseIcon }}"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';e.$inject=["$mdTheming","$mdUtil","$compile","$log","$timeout","$$mdSvgRegistry"];}(),function(){function e(){this.selectedItem=null,this.searchText="";}t.module("material.components.chips").controller("MdContactChipsCtrl",e),e.prototype.queryContact=function(e){var n=this.contactQuery({$query:e});return this.filterSelected?n.filter(t.bind(this,this.filterSelectedContacts)):n;},e.prototype.itemName=function(e){return e[this.contactName];},e.prototype.filterSelectedContacts=function(e){return this.contacts.indexOf(e)==-1;};}(),function(){function e(e,t){function o(n,o){return function(n,i,r,a){t.initOptionalProperties(n,o),e(i),i.attr("tabindex","-1");};}return{template:function template(e,t){return n;},restrict:"E",controller:"MdContactChipsCtrl",controllerAs:"$mdContactChipsCtrl",bindToController:!0,compile:o,scope:{contactQuery:"&mdContacts",placeholder:"@",secondaryPlaceholder:"@",contactName:"@mdContactName",contactImage:"@mdContactImage",contactEmail:"@mdContactEmail",contacts:"=ngModel",requireMatch:"=?mdRequireMatch",highlightFlags:"@?mdHighlightFlags"}};}t.module("material.components.chips").directive("mdContactChips",e);var n='      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';e.$inject=["$mdTheming","$mdUtil"];}(),function(){!function(){function e(){return{template:function template(e,t){var n=t.hasOwnProperty("ngIf")?"":'ng-if="calendarCtrl.isInitialized"',o='<div ng-switch="calendarCtrl.currentView" '+n+'><md-calendar-year ng-switch-when="year"></md-calendar-year><md-calendar-month ng-switch-default></md-calendar-month></div>';return o;},scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",dateFilter:"=mdDateFilter",_currentView:"@mdCurrentView"},require:["ngModel","mdCalendar"],controller:n,controllerAs:"calendarCtrl",bindToController:!0,link:function link(e,t,n,o){var i=o[0],r=o[1];r.configureNgModel(i);}};}function n(e,n,o,r,a,d,s,c){d(e),this.$element=e,this.$scope=n,this.dateUtil=o,this.$mdUtil=r,this.keyCode=a.KEY_CODE,this.$$rAF=s,this.today=this.dateUtil.createDateAtMidnight(),this.ngModelCtrl=null,this.currentView=this._currentView||"month",this.SELECTED_DATE_CLASS="md-calendar-selected-date",this.TODAY_CLASS="md-calendar-date-today",this.FOCUSED_DATE_CLASS="md-focus",this.id=i++,this.displayDate=null,this.selectedDate=null,this.isInitialized=!1,this.width=0,this.scrollbarWidth=0,c.tabindex||e.attr("tabindex","-1"),e.on("keydown",t.bind(this,this.handleKeyEvent));}t.module("material.components.datepicker").directive("mdCalendar",e);var o=340,i=0;n.$inject=["$element","$scope","$$mdDateUtil","$mdUtil","$mdConstant","$mdTheming","$$rAF","$attrs"],n.prototype.configureNgModel=function(e){var t=this;t.ngModelCtrl=e,t.$mdUtil.nextTick(function(){t.isInitialized=!0;}),e.$render=function(){var e=this.$viewValue;t.$scope.$broadcast("md-calendar-parent-changed",e),t.selectedDate||(t.selectedDate=e),t.displayDate||(t.displayDate=t.selectedDate||t.today);};},n.prototype.setNgModelValue=function(e){var t=this.dateUtil.createDateAtMidnight(e);return this.focus(t),this.$scope.$emit("md-calendar-change",t),this.ngModelCtrl.$setViewValue(t),this.ngModelCtrl.$render(),t;},n.prototype.setCurrentView=function(e,n){var o=this;o.$mdUtil.nextTick(function(){o.currentView=e,n&&(o.displayDate=t.isDate(n)?n:new Date(n));});},n.prototype.focus=function(e){if(this.dateUtil.isValidDate(e)){var t=this.$element[0].querySelector(".md-focus");t&&t.classList.remove(this.FOCUSED_DATE_CLASS);var n=this.getDateId(e,this.currentView),o=document.getElementById(n);o&&(o.classList.add(this.FOCUSED_DATE_CLASS),o.focus(),this.displayDate=e);}else{var i=this.$element[0].querySelector("[ng-switch]");i&&i.focus();}},n.prototype.getActionFromKeyEvent=function(e){var t=this.keyCode;switch(e.which){case t.ENTER:return"select";case t.RIGHT_ARROW:return"move-right";case t.LEFT_ARROW:return"move-left";case t.DOWN_ARROW:return e.metaKey?"move-page-down":"move-row-down";case t.UP_ARROW:return e.metaKey?"move-page-up":"move-row-up";case t.PAGE_DOWN:return"move-page-down";case t.PAGE_UP:return"move-page-up";case t.HOME:return"start";case t.END:return"end";default:return null;}},n.prototype.handleKeyEvent=function(e){var t=this;this.$scope.$apply(function(){if(e.which==t.keyCode.ESCAPE||e.which==t.keyCode.TAB)return t.$scope.$emit("md-calendar-close"),void(e.which==t.keyCode.TAB&&e.preventDefault());var n=t.getActionFromKeyEvent(e);n&&(e.preventDefault(),e.stopPropagation(),t.$scope.$broadcast("md-calendar-parent-action",n));});},n.prototype.hideVerticalScrollbar=function(e){function t(){var t=n.width||o,i=n.scrollbarWidth,a=e.calendarScroller;r.style.width=t+"px",a.style.width=t+i+"px",a.style.paddingRight=i+"px";}var n=this,i=e.$element[0],r=i.querySelector(".md-calendar-scroll-mask");n.width>0?t():n.$$rAF(function(){var o=e.calendarScroller;n.scrollbarWidth=o.offsetWidth-o.clientWidth,n.width=i.querySelector("table").offsetWidth,t();});},n.prototype.getDateId=function(e,t){if(!t)throw new Error("A namespace for the date id has to be specified.");return["md",this.id,t,e.getFullYear(),e.getMonth(),e.getDate()].join("-");},n.prototype.updateVirtualRepeat=function(){var e=this.$scope,t=e.$on("$md-resize-enable",function(){e.$$phase||e.$apply(),t();});};}();}(),function(){!function(){function e(){return{template:'<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="'+(i-o)+'"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-month-body role="rowgroup" md-virtual-repeat="i in monthCtrl.items" md-month-offset="$index" class="md-calendar-month" md-start-index="monthCtrl.getSelectedMonthIndex()" md-item-size="'+o+'"></tbody></table></md-virtual-repeat-container></div>',require:["^^mdCalendar","mdCalendarMonth"],controller:n,controllerAs:"monthCtrl",bindToController:!0,link:function link(e,t,n,o){var i=o[0],r=o[1];r.initialize(i);}};}function n(e,t,n,o,i,r){this.$element=e,this.$scope=t,this.$animate=n,this.$q=o,this.dateUtil=i,this.dateLocale=r,this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.firstRenderableDate=null,this.isInitialized=!1,this.isMonthTransitionInProgress=!1;var a=this;this.cellClickHandler=function(){var e=i.getTimestampFromNode(this);a.$scope.$apply(function(){a.calendarCtrl.setNgModelValue(e);});},this.headerClickHandler=function(){a.calendarCtrl.setCurrentView("year",i.getTimestampFromNode(this));};}t.module("material.components.datepicker").directive("mdCalendarMonth",e);var o=265,i=45;n.$inject=["$element","$scope","$animate","$q","$$mdDateUtil","$mdDateLocale"],n.prototype.initialize=function(e){var t=e.minDate,n=e.maxDate;if(this.calendarCtrl=e,this.items={length:2e3},n&&t){var o=this.dateUtil.getMonthDistance(t,n)+1;o=Math.max(o,1),o+=1,this.items.length=o;}if(this.firstRenderableDate=this.dateUtil.incrementMonths(e.today,-this.items.length/2),t&&t>this.firstRenderableDate)this.firstRenderableDate=t;else if(n){this.items.length-2;this.firstRenderableDate=this.dateUtil.incrementMonths(n,-(this.items.length-2));}this.attachScopeListeners(),e.updateVirtualRepeat(),e.ngModelCtrl&&e.ngModelCtrl.$render();},n.prototype.getSelectedMonthIndex=function(){var e=this.calendarCtrl;return this.dateUtil.getMonthDistance(this.firstRenderableDate,e.displayDate||e.selectedDate||e.today);},n.prototype.changeSelectedDate=function(e){var t=this,n=t.calendarCtrl,o=n.selectedDate;n.selectedDate=e,this.changeDisplayDate(e).then(function(){var t=n.SELECTED_DATE_CLASS,i="month";if(o){var r=document.getElementById(n.getDateId(o,i));r&&(r.classList.remove(t),r.setAttribute("aria-selected","false"));}if(e){var a=document.getElementById(n.getDateId(e,i));a&&(a.classList.add(t),a.setAttribute("aria-selected","true"));}});},n.prototype.changeDisplayDate=function(e){if(!this.isInitialized)return this.buildWeekHeader(),this.calendarCtrl.hideVerticalScrollbar(this),this.isInitialized=!0,this.$q.when();if(!this.dateUtil.isValidDate(e)||this.isMonthTransitionInProgress)return this.$q.when();this.isMonthTransitionInProgress=!0;var t=this.animateDateChange(e);this.calendarCtrl.displayDate=e;var n=this;return t.then(function(){n.isMonthTransitionInProgress=!1;}),t;},n.prototype.animateDateChange=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getMonthDistance(this.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o;}return this.$q.when();},n.prototype.buildWeekHeader=function(){for(var e=this.dateLocale.firstDayOfWeek,t=this.dateLocale.shortDays,n=document.createElement("tr"),o=0;o<7;o++){var i=document.createElement("th");i.textContent=t[(o+e)%7],n.appendChild(i);}this.$element.find("thead").append(n);},n.prototype.attachScopeListeners=function(){var e=this;e.$scope.$on("md-calendar-parent-changed",function(t,n){e.changeSelectedDate(n);}),e.$scope.$on("md-calendar-parent-action",t.bind(this,this.handleKeyEvent));},n.prototype.handleKeyEvent=function(e,t){var n=this.calendarCtrl,o=n.displayDate;if("select"===t)n.setNgModelValue(o);else{var i=null,r=this.dateUtil;switch(t){case"move-right":i=r.incrementDays(o,1);break;case"move-left":i=r.incrementDays(o,-1);break;case"move-page-down":i=r.incrementMonths(o,1);break;case"move-page-up":i=r.incrementMonths(o,-1);break;case"move-row-down":i=r.incrementDays(o,7);break;case"move-row-up":i=r.incrementDays(o,-7);break;case"start":i=r.getFirstDateOfMonth(o);break;case"end":i=r.getLastDateOfMonth(o);}i&&(i=this.dateUtil.clampDate(i,n.minDate,n.maxDate),this.changeDisplayDate(i).then(function(){n.focus(i);}));}};}();}(),function(){!function(){function e(e,t){var o=e('<md-icon md-svg-src="'+t.mdTabsArrow+'"></md-icon>')({})[0];return{require:["^^mdCalendar","^^mdCalendarMonth","mdCalendarMonthBody"],scope:{offset:"=mdMonthOffset"},controller:n,controllerAs:"mdMonthBodyCtrl",bindToController:!0,link:function link(e,t,n,i){var r=i[0],a=i[1],d=i[2];d.calendarCtrl=r,d.monthCtrl=a,d.arrowIcon=o.cloneNode(!0),d.generateContent(),e.$watch(function(){return d.offset;},function(e,t){e!==t&&d.generateContent();});}};}function n(e,t,n){this.$element=e,this.dateUtil=t,this.dateLocale=n,this.monthCtrl=null,this.calendarCtrl=null,this.offset=null,this.focusAfterAppend=null;}t.module("material.components.datepicker").directive("mdCalendarMonthBody",e),e.$inject=["$compile","$$mdSvgRegistry"],n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],n.prototype.generateContent=function(){var e=this.dateUtil.incrementMonths(this.monthCtrl.firstRenderableDate,this.offset);this.$element.empty(),this.$element.append(this.buildCalendarForMonth(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS),this.focusAfterAppend.focus(),this.focusAfterAppend=null);},n.prototype.buildDateCell=function(e){var t=this.monthCtrl,n=this.calendarCtrl,o=document.createElement("td");if(o.tabIndex=-1,o.classList.add("md-calendar-date"),o.setAttribute("role","gridcell"),e){o.setAttribute("tabindex","-1"),o.setAttribute("aria-label",this.dateLocale.longDateFormatter(e)),o.id=n.getDateId(e,"month"),o.setAttribute("data-timestamp",e.getTime()),this.dateUtil.isSameDay(e,n.today)&&o.classList.add(n.TODAY_CLASS),this.dateUtil.isValidDate(n.selectedDate)&&this.dateUtil.isSameDay(e,n.selectedDate)&&(o.classList.add(n.SELECTED_DATE_CLASS),o.setAttribute("aria-selected","true"));var i=this.dateLocale.dates[e.getDate()];if(this.isDateEnabled(e)){var r=document.createElement("span");r.classList.add("md-calendar-date-selection-indicator"),r.textContent=i,o.appendChild(r),o.addEventListener("click",t.cellClickHandler),n.displayDate&&this.dateUtil.isSameDay(e,n.displayDate)&&(this.focusAfterAppend=o);}else o.classList.add("md-calendar-date-disabled"),o.textContent=i;}return o;},n.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.calendarCtrl.minDate,this.calendarCtrl.maxDate)&&(!t.isFunction(this.calendarCtrl.dateFilter)||this.calendarCtrl.dateFilter(e));},n.prototype.buildDateRow=function(e){var t=document.createElement("tr");return t.setAttribute("role","row"),t.setAttribute("aria-label",this.dateLocale.weekNumberFormatter(e)),t;},n.prototype.buildCalendarForMonth=function(e){var t=this.dateUtil.isValidDate(e)?e:new Date(),n=this.dateUtil.getFirstDateOfMonth(t),o=this.getLocaleDay_(n),i=this.dateUtil.getNumberOfDaysInMonth(t),r=document.createDocumentFragment(),a=1,d=this.buildDateRow(a);r.appendChild(d);var s=this.offset===this.monthCtrl.items.length-1,c=0,l=document.createElement("td"),m=document.createElement("span");if(m.textContent=this.dateLocale.monthHeaderFormatter(t),l.appendChild(m),l.classList.add("md-calendar-month-label"),this.calendarCtrl.maxDate&&n>this.calendarCtrl.maxDate?l.classList.add("md-calendar-month-label-disabled"):(l.addEventListener("click",this.monthCtrl.headerClickHandler),l.setAttribute("data-timestamp",n.getTime()),l.setAttribute("aria-label",this.dateLocale.monthFormatter(t)),l.appendChild(this.arrowIcon.cloneNode(!0))),o<=2){l.setAttribute("colspan","7");var u=this.buildDateRow();if(u.appendChild(l),r.insertBefore(u,d),s)return r;}else c=3,l.setAttribute("colspan","3"),d.appendChild(l);for(var p=c;p<o;p++){d.appendChild(this.buildDateCell());}for(var h=o,f=n,g=1;g<=i;g++){if(7===h){if(s)return r;h=0,a++,d=this.buildDateRow(a),r.appendChild(d);}f.setDate(g);var b=this.buildDateCell(f);d.appendChild(b),h++;}for(;d.childNodes.length<7;){d.appendChild(this.buildDateCell());}for(;r.childNodes.length<6;){for(var v=this.buildDateRow(),E=0;E<7;E++){v.appendChild(this.buildDateCell());}r.appendChild(v);}return r;},n.prototype.getLocaleDay_=function(e){return(e.getDay()+(7-this.dateLocale.firstDayOfWeek))%7;};}();}(),function(){!function(){function e(){return{template:'<div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-year-body role="rowgroup" md-virtual-repeat="i in yearCtrl.items" md-year-offset="$index" class="md-calendar-year" md-start-index="yearCtrl.getFocusedYearIndex()" md-item-size="'+o+'"></tbody></table></md-virtual-repeat-container></div>',require:["^^mdCalendar","mdCalendarYear"],controller:n,controllerAs:"yearCtrl",bindToController:!0,link:function link(e,t,n,o){var i=o[0],r=o[1];r.initialize(i);}};}function n(e,t,n,o,i){this.$element=e,this.$scope=t,this.$animate=n,this.$q=o,this.dateUtil=i,this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.firstRenderableDate=null,this.isInitialized=!1,this.isMonthTransitionInProgress=!1;var r=this;this.cellClickHandler=function(){r.calendarCtrl.setCurrentView("month",i.getTimestampFromNode(this));};}t.module("material.components.datepicker").directive("mdCalendarYear",e);var o=88;n.$inject=["$element","$scope","$animate","$q","$$mdDateUtil"],n.prototype.initialize=function(e){var t=e.minDate,n=e.maxDate;if(this.calendarCtrl=e,this.items={length:400},this.firstRenderableDate=this.dateUtil.incrementYears(e.today,-(this.items.length/2)),t&&t>this.firstRenderableDate?this.firstRenderableDate=t:n&&(this.firstRenderableDate=this.dateUtil.incrementMonths(n,-(this.items.length-1))),n&&t){var o=this.dateUtil.getYearDistance(this.firstRenderableDate,n)+1;this.items.length=Math.max(o,1);}this.attachScopeListeners(),e.updateVirtualRepeat(),e.ngModelCtrl&&e.ngModelCtrl.$render();},n.prototype.getFocusedYearIndex=function(){var e=this.calendarCtrl;return this.dateUtil.getYearDistance(this.firstRenderableDate,e.displayDate||e.selectedDate||e.today);},n.prototype.changeDate=function(e){if(!this.isInitialized)return this.calendarCtrl.hideVerticalScrollbar(this),this.isInitialized=!0,this.$q.when();if(this.dateUtil.isValidDate(e)&&!this.isMonthTransitionInProgress){var t=this,n=this.animateDateChange(e);return t.isMonthTransitionInProgress=!0,t.calendarCtrl.displayDate=e,n.then(function(){t.isMonthTransitionInProgress=!1;});}},n.prototype.animateDateChange=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getYearDistance(this.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o;}return this.$q.when();},n.prototype.handleKeyEvent=function(e,t){var n=this.calendarCtrl,o=n.displayDate;if("select"===t)this.changeDate(o).then(function(){n.setCurrentView("month",o),n.focus(o);});else{var i=null,r=this.dateUtil;switch(t){case"move-right":i=r.incrementMonths(o,1);break;case"move-left":i=r.incrementMonths(o,-1);break;case"move-row-down":i=r.incrementMonths(o,6);break;case"move-row-up":i=r.incrementMonths(o,-6);}if(i){var a=n.minDate?r.incrementMonths(r.getFirstDateOfMonth(n.minDate),1):null,d=n.maxDate?r.getFirstDateOfMonth(n.maxDate):null;i=r.getFirstDateOfMonth(this.dateUtil.clampDate(i,a,d)),this.changeDate(i).then(function(){n.focus(i);});}}},n.prototype.attachScopeListeners=function(){var e=this;e.$scope.$on("md-calendar-parent-changed",function(t,n){e.changeDate(n);}),e.$scope.$on("md-calendar-parent-action",t.bind(e,e.handleKeyEvent));};}();}(),function(){!function(){function e(){return{require:["^^mdCalendar","^^mdCalendarYear","mdCalendarYearBody"],scope:{offset:"=mdYearOffset"},controller:n,controllerAs:"mdYearBodyCtrl",bindToController:!0,link:function link(e,t,n,o){var i=o[0],r=o[1],a=o[2];a.calendarCtrl=i,a.yearCtrl=r,a.generateContent(),e.$watch(function(){return a.offset;},function(e,t){e!=t&&a.generateContent();});}};}function n(e,t,n){this.$element=e,this.dateUtil=t,this.dateLocale=n,this.calendarCtrl=null,this.yearCtrl=null,this.offset=null,this.focusAfterAppend=null;}t.module("material.components.datepicker").directive("mdCalendarYearBody",e),n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],n.prototype.generateContent=function(){var e=this.dateUtil.incrementYears(this.yearCtrl.firstRenderableDate,this.offset);this.$element.empty(),this.$element.append(this.buildCalendarForYear(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS),this.focusAfterAppend.focus(),this.focusAfterAppend=null);},n.prototype.buildMonthCell=function(e,t){var n=this.calendarCtrl,o=this.yearCtrl,i=this.buildBlankCell(),r=new Date(e,t,1);i.setAttribute("aria-label",this.dateLocale.monthFormatter(r)),i.id=n.getDateId(r,"year"),i.setAttribute("data-timestamp",r.getTime()),this.dateUtil.isSameMonthAndYear(r,n.today)&&i.classList.add(n.TODAY_CLASS),this.dateUtil.isValidDate(n.selectedDate)&&this.dateUtil.isSameMonthAndYear(r,n.selectedDate)&&(i.classList.add(n.SELECTED_DATE_CLASS),i.setAttribute("aria-selected","true"));var a=this.dateLocale.shortMonths[t];if(this.dateUtil.isMonthWithinRange(r,n.minDate,n.maxDate)){var d=document.createElement("span");d.classList.add("md-calendar-date-selection-indicator"),d.textContent=a,i.appendChild(d),i.addEventListener("click",o.cellClickHandler),n.displayDate&&this.dateUtil.isSameMonthAndYear(r,n.displayDate)&&(this.focusAfterAppend=i);}else i.classList.add("md-calendar-date-disabled"),i.textContent=a;return i;},n.prototype.buildBlankCell=function(){var e=document.createElement("td");return e.tabIndex=-1,e.classList.add("md-calendar-date"),e.setAttribute("role","gridcell"),e.setAttribute("tabindex","-1"),e;},n.prototype.buildCalendarForYear=function(e){var t,n=e.getFullYear(),o=document.createDocumentFragment(),i=document.createElement("tr"),r=document.createElement("td");for(r.className="md-calendar-month-label",r.textContent=n,i.appendChild(r),t=0;t<6;t++){i.appendChild(this.buildMonthCell(n,t));}o.appendChild(i);var a=document.createElement("tr");for(a.appendChild(this.buildBlankCell()),t=6;t<12;t++){a.appendChild(this.buildMonthCell(n,t));}return o.appendChild(a),o;};}();}(),function(){!function(){t.module("material.components.datepicker").config(["$provide",function(e){function t(){this.months=null,this.shortMonths=null,this.days=null,this.shortDays=null,this.dates=null,this.firstDayOfWeek=0,this.formatDate=null,this.parseDate=null,this.monthHeaderFormatter=null,this.weekNumberFormatter=null,this.longDateFormatter=null,this.msgCalendar="",this.msgOpenCalendar="";}t.prototype.$get=function(e,t){function n(e){if(!e)return"";var n=e.toLocaleTimeString(),o=e;return 0!=e.getHours()||n.indexOf("11:")===-1&&n.indexOf("23:")===-1||(o=new Date(e.getFullYear(),e.getMonth(),e.getDate(),1,0,0)),t("date")(o,"M/d/yyyy");}function o(e){return new Date(e);}function i(e){e=e.trim();var t=/^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return t.test(e);}function r(e){return h.shortMonths[e.getMonth()]+" "+e.getFullYear();}function a(e){return h.months[e.getMonth()]+" "+e.getFullYear();}function d(e){return"Week "+e;}function s(e){return[h.days[e.getDay()],h.months[e.getMonth()],h.dates[e.getDate()],e.getFullYear()].join(" ");}for(var c=e.DATETIME_FORMATS.SHORTDAY.map(function(e){return e.substring(0,1);}),l=Array(32),m=1;m<=31;m++){l[m]=m;}var u="Calendar",p="Open calendar",h={months:this.months||e.DATETIME_FORMATS.MONTH,shortMonths:this.shortMonths||e.DATETIME_FORMATS.SHORTMONTH,days:this.days||e.DATETIME_FORMATS.DAY,shortDays:this.shortDays||c,dates:this.dates||l,firstDayOfWeek:this.firstDayOfWeek||0,formatDate:this.formatDate||n,parseDate:this.parseDate||o,isDateComplete:this.isDateComplete||i,monthHeaderFormatter:this.monthHeaderFormatter||r,monthFormatter:this.monthFormatter||a,weekNumberFormatter:this.weekNumberFormatter||d,longDateFormatter:this.longDateFormatter||s,msgCalendar:this.msgCalendar||u,msgOpenCalendar:this.msgOpenCalendar||p};return h;},t.prototype.$get.$inject=["$locale","$filter"],e.provider("$mdDateLocale",new t());}]);}();}(),function(){!function(){t.module("material.components.datepicker").factory("$$mdDateUtil",function(){function e(e){return new Date(e.getFullYear(),e.getMonth(),1);}function n(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate();}function o(e){return new Date(e.getFullYear(),e.getMonth()+1,1);}function i(e){return new Date(e.getFullYear(),e.getMonth()-1,1);}function r(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth();}function a(e,t){return e.getDate()==t.getDate()&&r(e,t);}function d(e,t){var n=o(e);return r(n,t);}function s(e,t){var n=i(e);return r(t,n);}function c(e,t){return b((e.getTime()+t.getTime())/2);}function l(t){var n=e(t);return Math.floor((n.getDay()+t.getDate()-1)/7);}function m(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t);}function u(e,t){var o=new Date(e.getFullYear(),e.getMonth()+t,1),i=n(o);return i<e.getDate()?o.setDate(i):o.setDate(e.getDate()),o;}function p(e,t){return 12*(t.getFullYear()-e.getFullYear())+(t.getMonth()-e.getMonth());}function h(e){return new Date(e.getFullYear(),e.getMonth(),n(e));}function f(e){return null!=e&&e.getTime&&!isNaN(e.getTime());}function g(e){f(e)&&e.setHours(0,0,0,0);}function b(e){var n;return n=t.isUndefined(e)?new Date():new Date(e),g(n),n;}function v(e,t,n){var o=b(e),i=f(t)?b(t):null,r=f(n)?b(n):null;return(!i||i<=o)&&(!r||r>=o);}function E(e,t){return u(e,12*t);}function $(e,t){return t.getFullYear()-e.getFullYear();}function C(e,t,n){var o=e;return t&&e<t&&(o=new Date(t.getTime())),n&&e>n&&(o=new Date(n.getTime())),o;}function y(e){if(e&&e.hasAttribute("data-timestamp"))return Number(e.getAttribute("data-timestamp"));}function M(e,t,n){var o=e.getMonth(),i=e.getFullYear();return(!t||t.getFullYear()<i||t.getMonth()<=o)&&(!n||n.getFullYear()>i||n.getMonth()>=o);}return{getFirstDateOfMonth:e,getNumberOfDaysInMonth:n,getDateInNextMonth:o,getDateInPreviousMonth:i,isInNextMonth:d,isInPreviousMonth:s,getDateMidpoint:c,isSameMonthAndYear:r,getWeekOfMonth:l,incrementDays:m,incrementMonths:u,getLastDateOfMonth:h,isSameDay:a,getMonthDistance:p,isValidDate:f,setDateTimeToMidnight:g,createDateAtMidnight:b,isDateWithinRange:v,incrementYears:E,getYearDistance:$,clampDate:C,getTimestampFromNode:y,isMonthWithinRange:M};});}();}(),function(){!function(){function n(e,n,i){return{template:function template(t,n){var o=n.mdHideIcons,i="all"===o||"calendar"===o?"":'<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" aria-label="md-calendar" md-svg-src="'+e.mdCalendar+'"></md-icon></md-button>',r="all"===o||"triangle"===o?"":'<md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button>';return""+i+'<div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)">'+r+'</div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-current-view="{{::ctrl.currentView}}"md-min-date="ctrl.minDate"md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>';},require:["ngModel","mdDatepicker","?^mdInputContainer","?^form"],scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",placeholder:"@mdPlaceholder",currentView:"@mdCurrentView",dateFilter:"=mdDateFilter",isOpen:"=?mdIsOpen",debounceInterval:"=mdDebounceInterval"},controller:o,controllerAs:"ctrl",bindToController:!0,link:function link(e,o,r,a){var c=a[0],l=a[1],m=a[2],u=a[3],p=n.parseAttributeBoolean(r.mdNoAsterisk);if(l.configureNgModel(c,m),m){var h=o[0].querySelector(".md-errors-spacer");h&&o.after(t.element("<div>").append(h)),m.setHasPlaceholder(r.mdPlaceholder),m.input=o,m.element.addClass(d).toggleClass(s,"calendar"!==r.mdHideIcons&&"all"!==r.mdHideIcons),m.label?p||r.$observe("required",function(e){m.label.toggleClass("md-required",!!e);}):i.expect(o,"aria-label",r.mdPlaceholder),e.$watch(m.isErrorGetter||function(){return c.$invalid&&(c.$touched||u&&u.$submitted);},m.setInvalid);}else if(u)var f=e.$watch(function(){return u.$submitted;},function(e){e&&(l.updateErrorState(),f());});}};}function o(e,n,o,i,r,a,d,s,c,l,m){this.$window=i,this.dateLocale=s,this.dateUtil=c,this.$mdConstant=r,this.$mdUtil=d,this.$$rAF=l,this.documentElement=t.element(document.documentElement),this.ngModelCtrl=null,this.inputElement=n[0].querySelector("input"),this.ngInputElement=t.element(this.inputElement),this.inputContainer=n[0].querySelector(".md-datepicker-input-container"),this.calendarPane=n[0].querySelector(".md-datepicker-calendar-pane"),this.calendarButton=n[0].querySelector(".md-datepicker-button"),this.inputMask=n[0].querySelector(".md-datepicker-input-mask-opaque"),this.$element=n,this.$attrs=o,this.$scope=e,this.date=null,this.isFocused=!1,this.isDisabled,this.setDisabled(n[0].disabled||t.isString(o.disabled)),this.isCalendarOpen=!1,this.openOnFocus=o.hasOwnProperty("mdOpenOnFocus"),this.mdInputContainer=null,this.calendarPaneOpenedFrom=null,this.calendarPane.id="md-date-pane"+d.nextUid(),this.bodyClickHandler=t.bind(this,this.handleBodyClick),this.windowEventName=m.isIos||m.isAndroid?"orientationchange":"resize",this.windowEventHandler=d.debounce(t.bind(this,this.closeCalendarPane),100),this.windowBlurHandler=t.bind(this,this.handleWindowBlur),o.tabindex||n.attr("tabindex","-1"),a(n),a(t.element(this.calendarPane)),this.installPropertyInterceptors(),this.attachChangeListeners(),this.attachInteractionListeners();var u=this;e.$on("$destroy",function(){u.detachCalendarPane();}),o.mdIsOpen&&e.$watch("ctrl.isOpen",function(e){e?u.openCalendarPane({target:u.inputElement}):u.closeCalendarPane();});}t.module("material.components.datepicker").directive("mdDatepicker",n),n.$inject=["$$mdSvgRegistry","$mdUtil","$mdAria"];var i=3,r="md-datepicker-invalid",a="md-datepicker-open",d="_md-datepicker-floating-label",s="_md-datepicker-has-calendar-icon",c=500,l=368,m=360;o.$inject=["$scope","$element","$attrs","$window","$mdConstant","$mdTheming","$mdUtil","$mdDateLocale","$$mdDateUtil","$$rAF","$mdGesture"],o.prototype.configureNgModel=function(e,n){this.ngModelCtrl=e,this.mdInputContainer=n;var o=this;e.$render=function(){var e=o.ngModelCtrl.$viewValue;if(e&&!(e instanceof Date))throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: "+(typeof e==="undefined"?"undefined":_typeof(e)));o.date=e,o.inputElement.value=o.dateLocale.formatDate(e),o.mdInputContainer&&o.mdInputContainer.setHasValue(!!e),o.resizeInputElement(),o.updateErrorState();},e.$viewChangeListeners.unshift(t.bind(this,this.updateErrorState));},o.prototype.attachChangeListeners=function(){var e=this;e.$scope.$on("md-calendar-change",function(t,n){e.ngModelCtrl.$setViewValue(n),e.date=n,e.inputElement.value=e.dateLocale.formatDate(n),e.mdInputContainer&&e.mdInputContainer.setHasValue(!!n),e.closeCalendarPane(),e.resizeInputElement(),e.updateErrorState();}),e.ngInputElement.on("input",t.bind(e,e.resizeInputElement));var n=t.isDefined(this.debounceInterval)?this.debounceInterval:c;e.ngInputElement.on("input",e.$mdUtil.debounce(e.handleInputEvent,n,e));},o.prototype.attachInteractionListeners=function(){var e=this,n=this.$scope,o=this.$mdConstant.KEY_CODE;e.ngInputElement.on("keydown",function(t){t.altKey&&t.keyCode==o.DOWN_ARROW&&(e.openCalendarPane(t),n.$digest());}),e.openOnFocus&&(e.ngInputElement.on("focus",t.bind(e,e.openCalendarPane)),t.element(e.$window).on("blur",e.windowBlurHandler),n.$on("$destroy",function(){t.element(e.$window).off("blur",e.windowBlurHandler);})),n.$on("md-calendar-close",function(){e.closeCalendarPane();});},o.prototype.installPropertyInterceptors=function(){var e=this;if(this.$attrs.ngDisabled){var t=this.$scope.$parent;t&&t.$watch(this.$attrs.ngDisabled,function(t){e.setDisabled(t);});}Object.defineProperty(this,"placeholder",{get:function get(){return e.inputElement.placeholder;},set:function set(t){e.inputElement.placeholder=t||"";}});},o.prototype.setDisabled=function(e){this.isDisabled=e,this.inputElement.disabled=e,this.calendarButton&&(this.calendarButton.disabled=e);},o.prototype.updateErrorState=function(e){var n=e||this.date;if(this.clearErrorState(),this.dateUtil.isValidDate(n)){if(n=this.dateUtil.createDateAtMidnight(n),this.dateUtil.isValidDate(this.minDate)){var o=this.dateUtil.createDateAtMidnight(this.minDate);this.ngModelCtrl.$setValidity("mindate",n>=o);}if(this.dateUtil.isValidDate(this.maxDate)){var i=this.dateUtil.createDateAtMidnight(this.maxDate);this.ngModelCtrl.$setValidity("maxdate",n<=i);}t.isFunction(this.dateFilter)&&this.ngModelCtrl.$setValidity("filtered",this.dateFilter(n));}else this.ngModelCtrl.$setValidity("valid",null==n);this.ngModelCtrl.$valid||this.inputContainer.classList.add(r);},o.prototype.clearErrorState=function(){this.inputContainer.classList.remove(r),["mindate","maxdate","filtered","valid"].forEach(function(e){this.ngModelCtrl.$setValidity(e,!0);},this);},o.prototype.resizeInputElement=function(){this.inputElement.size=this.inputElement.value.length+i;},o.prototype.handleInputEvent=function(){var e=this.inputElement.value,t=e?this.dateLocale.parseDate(e):null;this.dateUtil.setDateTimeToMidnight(t);var n=""==e||this.dateUtil.isValidDate(t)&&this.dateLocale.isDateComplete(e)&&this.isDateEnabled(t);n&&(this.ngModelCtrl.$setViewValue(t),this.date=t),this.updateErrorState(t);},o.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.minDate,this.maxDate)&&(!t.isFunction(this.dateFilter)||this.dateFilter(e));},o.prototype.attachCalendarPane=function(){var e=this.calendarPane,n=document.body;e.style.transform="",this.$element.addClass(a),this.mdInputContainer&&this.mdInputContainer.element.addClass(a),t.element(n).addClass("md-datepicker-is-showing");var o=this.inputContainer.getBoundingClientRect(),i=n.getBoundingClientRect(),r=o.top-i.top,d=o.left-i.left,s=i.top<0&&0==document.body.scrollTop?-i.top:document.body.scrollTop,c=i.left<0&&0==document.body.scrollLeft?-i.left:document.body.scrollLeft,u=s+this.$window.innerHeight,p=c+this.$window.innerWidth;if(d+m>p){if(p-m>0)d=p-m;else{d=c;var h=this.$window.innerWidth/m;e.style.transform="scale("+h+")";}e.classList.add("md-datepicker-pos-adjusted");}r+l>u&&u-l>s&&(r=u-l,e.classList.add("md-datepicker-pos-adjusted")),e.style.left=d+"px",e.style.top=r+"px",document.body.appendChild(e),this.inputMask.style.left=o.width+"px",this.$$rAF(function(){e.classList.add("md-pane-open");});},o.prototype.detachCalendarPane=function(){this.$element.removeClass(a),this.mdInputContainer&&this.mdInputContainer.element.removeClass(a),t.element(document.body).removeClass("md-datepicker-is-showing"),this.calendarPane.classList.remove("md-pane-open"),this.calendarPane.classList.remove("md-datepicker-pos-adjusted"),this.isCalendarOpen&&this.$mdUtil.enableScrolling(),this.calendarPane.parentNode&&this.calendarPane.parentNode.removeChild(this.calendarPane);},o.prototype.openCalendarPane=function(t){if(!this.isCalendarOpen&&!this.isDisabled&&!this.inputFocusedOnWindowBlur){this.isCalendarOpen=this.isOpen=!0,this.calendarPaneOpenedFrom=t.target,this.$mdUtil.disableScrollAround(this.calendarPane),this.attachCalendarPane(),this.focusCalendar(),this.evalAttr("ngFocus");var n=this;this.$mdUtil.nextTick(function(){n.documentElement.on("click touchstart",n.bodyClickHandler);},!1),e.addEventListener(this.windowEventName,this.windowEventHandler);}},o.prototype.closeCalendarPane=function(){function t(){n.isCalendarOpen=n.isOpen=!1;}if(this.isCalendarOpen){var n=this;n.detachCalendarPane(),n.ngModelCtrl.$setTouched(),n.evalAttr("ngBlur"),n.documentElement.off("click touchstart",n.bodyClickHandler),e.removeEventListener(n.windowEventName,n.windowEventHandler),n.calendarPaneOpenedFrom.focus(),n.calendarPaneOpenedFrom=null,n.openOnFocus?n.$mdUtil.nextTick(t):t();}},o.prototype.getCalendarCtrl=function(){return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar");},o.prototype.focusCalendar=function(){var e=this;this.$mdUtil.nextTick(function(){e.getCalendarCtrl().focus();},!1);},o.prototype.setFocused=function(e){e||this.ngModelCtrl.$setTouched(),this.openOnFocus||this.evalAttr(e?"ngFocus":"ngBlur"),this.isFocused=e;},o.prototype.handleBodyClick=function(e){if(this.isCalendarOpen){var t=this.$mdUtil.getClosest(e.target,"md-calendar");t||this.closeCalendarPane(),this.$scope.$digest();}},o.prototype.handleWindowBlur=function(){this.inputFocusedOnWindowBlur=document.activeElement===this.inputElement;},o.prototype.evalAttr=function(e){this.$attrs[e]&&this.$scope.$parent.$eval(this.$attrs[e]);};}();}(),function(){function e(e,t,n,o){function i(o,i,r){function a(){var e=i.parent();return!(!e.attr("aria-label")&&!e.text())||!(!e.parent().attr("aria-label")&&!e.parent().text());}function d(){r.mdSvgIcon||r.mdSvgSrc||(r.mdFontIcon&&i.addClass("md-font "+r.mdFontIcon),i.addClass(l));}function s(){if(!r.mdSvgIcon&&!r.mdSvgSrc){r.mdFontIcon&&(i.removeClass(c),i.addClass(r.mdFontIcon),c=r.mdFontIcon);var t=e.fontSet(r.mdFontSet);l!==t&&(i.removeClass(l),i.addClass(t),l=t);}}t(i);var c=r.mdFontIcon,l=e.fontSet(r.mdFontSet);d(),r.$observe("mdFontIcon",s),r.$observe("mdFontSet",s);var m=(i[0].getAttribute(r.$attr.mdSvgSrc),r.alt||r.mdFontIcon||r.mdSvgIcon||i.text()),u=r.$normalize(r.$attr.mdSvgIcon||r.$attr.mdSvgSrc||"");r["aria-label"]||(""===m||a()?i.text()||n.expect(i,"aria-hidden","true"):(n.expect(i,"aria-label",m),n.expect(i,"role","img"))),u&&r.$observe(u,function(t){i.empty(),t&&e(t).then(function(e){i.empty(),i.append(e);});});}return{restrict:"E",link:i};}t.module("material.components.icon").directive("mdIcon",["$mdIcon","$mdTheming","$mdAria","$sce",e]);}(),function(){function n(){}function o(e,t){this.url=e,this.viewBoxSize=t||r.defaultViewBoxSize;}function i(n,o,i,r,a,d){function s(e){if(e=e||"",t.isString(e)||(e=d.getTrustedUrl(e)),E[e])return i.when(l(E[e]));if(C.test(e)||y.test(e))return h(e).then(m(e));e.indexOf(":")==-1&&(e="$default:"+e);var o=n[e]?u:p;return o(e).then(m(e));}function c(e){var o=t.isUndefined(e)||!(e&&e.length);if(o)return n.defaultFontSet;var i=e;return t.forEach(n.fontSets,function(t){t.alias==e&&(i=t.fontSet||i);}),i;}function l(e){var n=e.clone(),o="_cache"+a.nextUid();return n.id&&(n.id+=o),t.forEach(n.querySelectorAll("[id]"),function(e){e.id+=o;}),n;}function m(e){return function(t){return E[e]=f(t)?t:new g(t,n[e]),E[e].clone();};}function u(e){var t=n[e];return h(t.url).then(function(e){return new g(e,t);});}function p(e){function t(t){var n=e.slice(e.lastIndexOf(":")+1),i=t.querySelector("#"+n);return i?new g(i,d):o(e);}function o(e){var t="icon "+e+" not found";return r.warn(t),i.reject(t||e);}var a=e.substring(0,e.lastIndexOf(":"))||"$default",d=n[a];return d?h(d.url).then(t):o(e);}function h(n){function a(n){var o=y.exec(n),r=/base64/i.test(n),a=r?e.atob(o[2]):o[2];return i.when(t.element(a)[0]);}function d(e){return i(function(n,i){var a=function a(e){var n=t.isString(e)?e:e.message||e.data||e.statusText;r.warn(n),i(e);},d=function d(o){$[e]||($[e]=t.element("<div>").append(o)[0].querySelector("svg")),n($[e]);};o(e,!0).then(d,a);});}return y.test(n)?a(n):d(n);}function f(e){return t.isDefined(e.element)&&t.isDefined(e.config);}function g(e,n){e&&"svg"!=e.tagName&&(e=t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e.cloneNode(!0))[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=n,this.prepare();}function b(){var e=this.config?this.config.viewBoxSize:n.defaultViewBoxSize;t.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+e+" "+e,focusable:!1},function(e,t){this.element.setAttribute(t,e);},this);}function v(){return this.element.cloneNode(!0);}var E={},$={},C=/[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,y=/^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;return g.prototype={clone:v,prepare:b},s.fontSet=c,s;}t.module("material.components.icon").constant("$$mdSvgRegistry",{mdTabsArrow:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyICIvPjwvZz48L3N2Zz4=",mdClose:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xOSA2LjQxbC0xLjQxLTEuNDEtNS41OSA1LjU5LTUuNTktNS41OS0xLjQxIDEuNDEgNS41OSA1LjU5LTUuNTkgNS41OSAxLjQxIDEuNDEgNS41OS01LjU5IDUuNTkgNS41OSAxLjQxLTEuNDEtNS41OS01LjU5eiIvPjwvZz48L3N2Zz4=",mdCancel:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xMiAyYy01LjUzIDAtMTAgNC40Ny0xMCAxMHM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTAtNC40Ny0xMC0xMC0xMHptNSAxMy41OWwtMS40MSAxLjQxLTMuNTktMy41OS0zLjU5IDMuNTktMS40MS0xLjQxIDMuNTktMy41OS0zLjU5LTMuNTkgMS40MS0xLjQxIDMuNTkgMy41OSAzLjU5LTMuNTkgMS40MSAxLjQxLTMuNTkgMy41OSAzLjU5IDMuNTl6Ii8+PC9nPjwvc3ZnPg==",mdMenu:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNloiIC8+PC9zdmc+",mdToggleArrow:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGQ9Ik0yNCAxNmwtMTIgMTIgMi44MyAyLjgzIDkuMTctOS4xNyA5LjE3IDkuMTcgMi44My0yLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==",mdCalendar:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3eiIvPjwvc3ZnPg=="}).provider("$mdIcon",n);var r={defaultViewBoxSize:24,defaultFontSet:"material-icons",fontSets:[]};n.prototype={icon:function icon(e,t,n){return e.indexOf(":")==-1&&(e="$default:"+e),r[e]=new o(t,n),this;},iconSet:function iconSet(e,t,n){return r[e]=new o(t,n),this;},defaultIconSet:function defaultIconSet(e,t){var n="$default";return r[n]||(r[n]=new o(e,t)),r[n].viewBoxSize=t||r.defaultViewBoxSize,this;},defaultViewBoxSize:function defaultViewBoxSize(e){return r.defaultViewBoxSize=e,this;},fontSet:function fontSet(e,t){return r.fontSets.push({alias:e,fontSet:t||e}),this;},defaultFontSet:function defaultFontSet(e){return r.defaultFontSet=e?e:"",this;},defaultIconSize:function defaultIconSize(e){return r.defaultIconSize=e,this;},$get:["$templateRequest","$q","$log","$mdUtil","$sce",function(e,t,n,o,a){return i(r,e,t,n,o,a);}]},i.$inject=["config","$templateRequest","$q","$log","$mdUtil","$sce"];}(),function(){function e(e,o,i,r,a,d,s,c){var l,m,u=a.prefixer(),p=this;this.nestLevel=parseInt(o.mdNestLevel,10)||0,this.init=function(n,o){o=o||{},l=n,m=i[0].querySelector(u.buildSelector(["ng-click","ng-mouseenter"])),m.setAttribute("aria-expanded","false"),this.isInMenuBar=o.isInMenuBar,this.nestedMenus=a.nodesToArray(l[0].querySelectorAll(".md-nested-menu")),l.on("$mdInterimElementRemove",function(){p.isOpen=!1,a.nextTick(function(){p.onIsOpenChanged(p.isOpen);});}),a.nextTick(function(){p.onIsOpenChanged(p.isOpen);});var d="menu_container_"+a.nextUid();l.attr("id",d),t.element(m).attr({"aria-owns":d,"aria-haspopup":"true"}),r.$on("$destroy",t.bind(this,function(){this.disableHoverListener(),e.destroy();})),l.on("$destroy",function(){e.destroy();});};var h,f,g=[];this.enableHoverListener=function(){g.push(s.$on("$mdMenuOpen",function(e,t){l[0].contains(t[0])&&(p.currentlyOpenMenu=t.controller("mdMenu"),p.isAlreadyOpening=!1,p.currentlyOpenMenu.registerContainerProxy(p.triggerContainerProxy.bind(p)));})),g.push(s.$on("$mdMenuClose",function(e,t){l[0].contains(t[0])&&(p.currentlyOpenMenu=n);})),f=t.element(a.nodesToArray(l[0].children[0].children)),f.on("mouseenter",p.handleMenuItemHover),f.on("mouseleave",p.handleMenuItemMouseLeave);},this.disableHoverListener=function(){for(;g.length;){g.shift()();}f&&f.off("mouseenter",p.handleMenuItemHover),f&&f.off("mouseleave",p.handleMenuItemMouseLeave);},this.handleMenuItemHover=function(e){if(!p.isAlreadyOpening){var n=e.target.querySelector("md-menu")||a.getClosest(e.target,"MD-MENU");h=d(function(){if(n&&(n=t.element(n).controller("mdMenu")),p.currentlyOpenMenu&&p.currentlyOpenMenu!=n){var e=p.nestLevel+1;p.currentlyOpenMenu.close(!0,{closeTo:e}),p.isAlreadyOpening=!!n,n&&n.open();}else n&&!n.isOpen&&n.open&&(p.isAlreadyOpening=!!n,n&&n.open());},n?100:250);var o=e.currentTarget.querySelector(".md-button:not([disabled])");o&&o.focus();}},this.handleMenuItemMouseLeave=function(){h&&(d.cancel(h),h=n);},this.open=function(t){t&&t.stopPropagation(),t&&t.preventDefault(),p.isOpen||(p.enableHoverListener(),p.isOpen=!0,a.nextTick(function(){p.onIsOpenChanged(p.isOpen);}),m=m||(t?t.target:i[0]),m.setAttribute("aria-expanded","true"),r.$emit("$mdMenuOpen",i),e.show({scope:r,mdMenuCtrl:p,nestLevel:p.nestLevel,element:l,target:m,preserveElement:!0,parent:"body"})["finally"](function(){m.setAttribute("aria-expanded","false"),p.disableHoverListener();}));},r.$mdOpenMenu=this.open,this.onIsOpenChanged=function(e){e?(l.attr("aria-hidden","false"),i[0].classList.add("md-open"),t.forEach(p.nestedMenus,function(e){e.classList.remove("md-open");})):(l.attr("aria-hidden","true"),i[0].classList.remove("md-open")),r.$mdMenuIsOpen=p.isOpen;},this.focusMenuContainer=function(){var e=l[0].querySelector(u.buildSelector(["md-menu-focus-target","md-autofocus"]));e||(e=l[0].querySelector(".md-button")),e.focus();},this.registerContainerProxy=function(e){this.containerProxy=e;},this.triggerContainerProxy=function(e){this.containerProxy&&this.containerProxy(e);},this.destroy=function(){return p.isOpen?e.destroy():c.when(!1);},this.close=function(n,o){if(p.isOpen){p.isOpen=!1,a.nextTick(function(){p.onIsOpenChanged(p.isOpen);});var d=t.extend({},o,{skipFocus:n});if(r.$emit("$mdMenuClose",i,d),e.hide(null,o),!n){var s=p.restoreFocusTo||i.find("button")[0];s instanceof t.element&&(s=s[0]),s&&s.focus();}}},this.positionMode=function(){var e=(o.mdPositionMode||"target").split(" ");return 1==e.length&&e.push(e[0]),{left:e[0],top:e[1]};},this.offsets=function(){var e=(o.mdOffset||"0 0").split(" ").map(parseFloat);if(2==e.length)return{left:e[0],top:e[1]};if(1==e.length)return{top:e[0],left:e[0]};throw Error("Invalid offsets specified. Please follow format <x, y> or <n>");};}t.module("material.components.menu").controller("mdMenuCtrl",e),e.$inject=["$mdMenu","$attrs","$element","$scope","$mdUtil","$timeout","$rootScope","$q"];}(),function(){function e(e){function o(n){n.addClass("md-menu");var o=n.children()[0],a=e.prefixer();if(a.hasAttribute(o,"ng-click")||(o=o.querySelector(a.buildSelector(["ng-click","ng-mouseenter"]))||o),!o||"MD-BUTTON"!=o.nodeName&&"BUTTON"!=o.nodeName||o.hasAttribute("type")||o.setAttribute("type","button"),2!=n.children().length)throw Error(r+"Expected two children elements.");o&&o.setAttribute("aria-haspopup","true");var d=n[0].querySelectorAll("md-menu"),s=parseInt(n[0].getAttribute("md-nest-level"),10)||0;return d&&t.forEach(e.nodesToArray(d),function(e){e.hasAttribute("md-position-mode")||e.setAttribute("md-position-mode","cascade"),e.classList.add("_md-nested-menu"),e.setAttribute("md-nest-level",s+1);}),i;}function i(e,o,i,r){var a=r[0],d=r[1]!=n,s=t.element('<div class="_md md-open-menu-container md-whiteframe-z2"></div>'),c=o.children()[1];o.addClass("_md"),c.hasAttribute("role")||c.setAttribute("role","menu"),s.append(c),o.on("$destroy",function(){s.remove();}),o.append(s),s[0].style.display="none",a.init(s,{isInMenuBar:d});}var r="Invalid HTML for md-menu: ";return{restrict:"E",require:["mdMenu","?^mdMenuBar"],controller:"mdMenuCtrl",scope:!0,compile:o};}t.module("material.components.menu").directive("mdMenu",e),e.$inject=["$mdUtil"];}(),function(){function e(e){function o(e,o,a,d,s,c,l,m,u){function p(n,o,i){return i.nestLevel?t.noop:(i.disableParentScroll&&!e.getClosest(i.target,"MD-DIALOG")?i.restoreScroll=e.disableScrollAround(i.element,i.parent):i.disableParentScroll=!1,i.hasBackdrop&&(i.backdrop=e.createBackdrop(n,"md-menu-backdrop md-click-catcher"),u.enter(i.backdrop,d[0].body)),function(){i.backdrop&&i.backdrop.remove(),i.disableParentScroll&&i.restoreScroll();});}function h(e,t,n){function o(){return m(t,{addClass:"md-leave"}).start();}function i(){t.removeClass("md-active"),v(t,n),n.alreadyOpen=!1;}return n.cleanupInteraction&&n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?i():o().then(i);}function f(n,i,r){function d(){return r.parent.append(i),i[0].style.display="",c(function(e){var t=E(i,r);i.removeClass("md-leave"),m(i,{addClass:"md-active",from:C.toCss(t),to:C.toCss({transform:""})}).start().then(e);});}function u(){if(!r.target)throw Error("$mdMenu.show() expected a target to animate from in options.target");t.extend(r,{alreadyOpen:!1,isRemoved:!1,target:t.element(r.target),parent:t.element(r.parent),menuContentEl:t.element(i[0].querySelector("md-menu-content"))});}function h(){var e=function(e,t){return l.throttle(function(){if(!r.isRemoved){var n=E(e,t);e.css(C.toCss(n));}});}(i,r);return s.addEventListener("resize",e),s.addEventListener("orientationchange",e),function(){s.removeEventListener("resize",e),s.removeEventListener("orientationchange",e);};}function f(){function t(t){var n;switch(t.keyCode){case a.KEY_CODE.ESCAPE:r.mdMenuCtrl.close(!1,{closeAll:!0}),n=!0;break;case a.KEY_CODE.UP_ARROW:g(t,r.menuContentEl,r,-1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.DOWN_ARROW:g(t,r.menuContentEl,r,1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.LEFT_ARROW:r.nestLevel?r.mdMenuCtrl.close():r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.RIGHT_ARROW:var o=e.getClosest(t.target,"MD-MENU");o&&o!=r.parent[0]?t.target.click():r.mdMenuCtrl.triggerContainerProxy(t),n=!0;}n&&(t.preventDefault(),t.stopImmediatePropagation());}function o(e){e.preventDefault(),e.stopPropagation(),n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0});});}function d(t){function o(){n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0});});}function i(e,t){if(!e)return!1;for(var n,o=0;n=t[o];++o){if($.hasAttribute(e,n))return!0;}return!1;}var a=t.target;do{if(a==r.menuContentEl[0])return;if((i(a,["ng-click","ng-href","ui-sref"])||"BUTTON"==a.nodeName||"MD-BUTTON"==a.nodeName)&&!i(a,["md-prevent-menu-close"])){var d=e.getClosest(a,"MD-MENU");a.hasAttribute("disabled")||d&&d!=r.parent[0]||o();break;}}while(a=a.parentNode);}i.addClass("md-clickable"),r.backdrop&&r.backdrop.on("click",o),r.menuContentEl.on("keydown",t),r.menuContentEl[0].addEventListener("click",d,!0);var s=r.menuContentEl[0].querySelector($.buildSelector(["md-menu-focus-target","md-autofocus"]));if(!s){var c=r.menuContentEl[0].firstElementChild;s=c&&(c.querySelector(".md-button:not([disabled])")||c.firstElementChild);}return s&&s.focus(),function(){i.removeClass("md-clickable"),r.backdrop&&r.backdrop.off("click",o),r.menuContentEl.off("keydown",t),r.menuContentEl[0].removeEventListener("click",d,!0);};}return u(r),o.inherit(r.menuContentEl,r.target),r.cleanupResizing=h(),r.hideBackdrop=p(n,i,r),d().then(function(e){return r.alreadyOpen=!0,r.cleanupInteraction=f(),e;});}function g(t,n,o,i){for(var r,a=e.getClosest(t.target,"MD-MENU-ITEM"),d=e.nodesToArray(n[0].children),s=d.indexOf(a),c=s+i;c>=0&&c<d.length;c+=i){var l=d[c].querySelector(".md-button");if(r=b(l))break;}return r;}function b(e){if(e&&e.getAttribute("tabindex")!=-1)return e.focus(),d[0].activeElement==e;}function v(e,t){t.preserveElement?i(e).style.display="none":i(e).parentNode===i(t.parent)&&i(t.parent).removeChild(i(e));}function E(t,o){function i(e){e.top=Math.max(Math.min(e.top,v.bottom-l.offsetHeight),v.top),e.left=Math.max(Math.min(e.left,v.right-l.offsetWidth),v.left);}function a(){for(var e=0;e<m.children.length;++e){if("none"!=s.getComputedStyle(m.children[e]).display)return m.children[e];}}var c,l=t[0],m=t[0].firstElementChild,u=m.getBoundingClientRect(),p=d[0].body,h=p.getBoundingClientRect(),f=s.getComputedStyle(m),g=o.target[0].querySelector($.buildSelector("md-menu-origin"))||o.target[0],b=g.getBoundingClientRect(),v={left:h.left+r,top:Math.max(h.top,0)+r,bottom:Math.max(h.bottom,Math.max(h.top,0)+h.height)-r,right:h.right-r},E={top:0,left:0,right:0,bottom:0},C={top:0,left:0,right:0,bottom:0},y=o.mdMenuCtrl.positionMode();"target"!=y.top&&"target"!=y.left&&"target-right"!=y.left||(c=a(),c&&(c=c.firstElementChild||c,c=c.querySelector($.buildSelector("md-menu-align-target"))||c,E=c.getBoundingClientRect(),C={top:parseFloat(l.style.top||0),left:parseFloat(l.style.left||0)}));var M={},T="top ";switch(y.top){case"target":M.top=C.top+b.top-E.top;break;case"cascade":M.top=b.top-parseFloat(f.paddingTop)-g.style.top;break;case"bottom":M.top=b.top+b.height;break;default:throw new Error('Invalid target mode "'+y.top+'" specified for md-menu on Y axis.');}var A="rtl"==e.bidi();switch(y.left){case"target":M.left=C.left+b.left-E.left,T+=A?"right":"left";break;case"target-left":M.left=b.left,T+="left";break;case"target-right":M.left=b.right-u.width+(u.right-E.right),T+="right";break;case"cascade":var w=A?b.left-u.width<v.left:b.right+u.width<v.right;M.left=w?b.right-g.style.left:b.left-g.style.left-u.width,T+=w?"left":"right";break;case"right":A?(M.left=b.right-b.width,T+="left"):(M.left=b.right-u.width,T+="right");break;case"left":A?(M.left=b.right-u.width,T+="right"):(M.left=b.left,T+="left");break;default:throw new Error('Invalid target mode "'+y.left+'" specified for md-menu on X axis.');}var k=o.mdMenuCtrl.offsets();M.top+=k.top,M.left+=k.left,i(M);var _=Math.round(100*Math.min(b.width/l.offsetWidth,1))/100,x=Math.round(100*Math.min(b.height/l.offsetHeight,1))/100;return{top:Math.round(M.top),left:Math.round(M.left),transform:o.alreadyOpen?n:e.supplant("scale({0},{1})",[_,x]),transformOrigin:T};}var $=e.prefixer(),C=e.dom.animator;return{parent:"body",onShow:f,onRemove:h,hasBackdrop:!0,disableParentScroll:!0,skipCompile:!0,preserveScope:!0,skipHide:!0,themable:!0};}function i(e){return e instanceof t.element&&(e=e[0]),e;}var r=8;return o.$inject=["$mdUtil","$mdTheming","$mdConstant","$document","$window","$q","$$rAF","$animateCss","$animate"],e("$mdMenu").setDefaults({methods:["target"],options:o});}t.module("material.components.menu").provider("$mdMenu",e),e.$inject=["$$interimElementProvider"];}(),function(){function e(e,n,i,r,a,d,s,c){this.$element=i,this.$attrs=r,this.$mdConstant=a,this.$mdUtil=s,this.$document=d,this.$scope=e,this.$rootScope=n,this.$timeout=c;var l=this;t.forEach(o,function(e){l[e]=t.bind(l,l[e]);});}t.module("material.components.menuBar").controller("MenuBarController",e);var o=["handleKeyDown","handleMenuHover","scheduleOpenHoveredMenu","cancelScheduledOpen"];e.$inject=["$scope","$rootScope","$element","$attrs","$mdConstant","$document","$mdUtil","$timeout"],e.prototype.init=function(){var e=this.$element,t=this.$mdUtil,o=this.$scope,i=this,r=[];e.on("keydown",this.handleKeyDown),this.parentToolbar=t.getClosest(e,"MD-TOOLBAR"),r.push(this.$rootScope.$on("$mdMenuOpen",function(t,n){i.getMenus().indexOf(n[0])!=-1&&(e[0].classList.add("md-open"),n[0].classList.add("md-open"),i.currentlyOpenMenu=n.controller("mdMenu"),i.currentlyOpenMenu.registerContainerProxy(i.handleKeyDown),i.enableOpenOnHover());})),r.push(this.$rootScope.$on("$mdMenuClose",function(o,r,a){var d=i.getMenus();if(d.indexOf(r[0])!=-1&&(e[0].classList.remove("md-open"),r[0].classList.remove("md-open")),e[0].contains(r[0])){for(var s=r[0];s&&d.indexOf(s)==-1;){s=t.getClosest(s,"MD-MENU",!0);}s&&(a.skipFocus||s.querySelector("button:not([disabled])").focus(),i.currentlyOpenMenu=n,i.disableOpenOnHover(),i.setKeyboardMode(!0));}})),o.$on("$destroy",function(){for(;r.length;){r.shift()();}}),this.setKeyboardMode(!0);},e.prototype.setKeyboardMode=function(e){e?this.$element[0].classList.add("md-keyboard-mode"):this.$element[0].classList.remove("md-keyboard-mode");},e.prototype.enableOpenOnHover=function(){if(!this.openOnHoverEnabled){this.openOnHoverEnabled=!0;var e;(e=this.parentToolbar)&&(e.dataset.mdRestoreStyle=e.getAttribute("style"),e.style.position="relative",e.style.zIndex=100),t.element(this.getMenus()).on("mouseenter",this.handleMenuHover);}},e.prototype.handleMenuHover=function(e){this.setKeyboardMode(!1),this.openOnHoverEnabled&&this.scheduleOpenHoveredMenu(e);},e.prototype.disableOpenOnHover=function(){if(this.openOnHoverEnabled){this.openOnHoverEnabled=!1;var e;(e=this.parentToolbar)&&(e.style.cssText=e.dataset.mdRestoreStyle||""),t.element(this.getMenus()).off("mouseenter",this.handleMenuHover);}},e.prototype.scheduleOpenHoveredMenu=function(e){var n=t.element(e.currentTarget),o=n.controller("mdMenu");this.setKeyboardMode(!1),this.scheduleOpenMenu(o);},e.prototype.scheduleOpenMenu=function(e){var t=this,o=this.$timeout;e!=t.currentlyOpenMenu&&(o.cancel(t.pendingMenuOpen),t.pendingMenuOpen=o(function(){t.pendingMenuOpen=n,t.currentlyOpenMenu&&t.currentlyOpenMenu.close(!0,{closeAll:!0}),e.open();},200,!1));},e.prototype.handleKeyDown=function(e){var n=this.$mdConstant.KEY_CODE,o=this.currentlyOpenMenu,i=o&&o.isOpen;this.setKeyboardMode(!0);var r,a,d;switch(e.keyCode){case n.DOWN_ARROW:o?o.focusMenuContainer():this.openFocusedMenu(),r=!0;break;case n.UP_ARROW:o&&o.close(),r=!0;break;case n.LEFT_ARROW:a=this.focusMenu(-1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0;break;case n.RIGHT_ARROW:a=this.focusMenu(1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0;}r&&(e&&e.preventDefault&&e.preventDefault(),e&&e.stopImmediatePropagation&&e.stopImmediatePropagation());},e.prototype.focusMenu=function(e){var t=this.getMenus(),n=this.getFocusedMenuIndex();n==-1&&(n=this.getOpenMenuIndex());var o=!1;if(n==-1?(n=0,o=!0):(e<0&&n>0||e>0&&n<t.length-e)&&(n+=e,o=!0),o)return t[n].querySelector("button").focus(),t[n];},e.prototype.openFocusedMenu=function(){var e=this.getFocusedMenu();e&&t.element(e).controller("mdMenu").open();},e.prototype.getMenus=function(){var e=this.$element;return this.$mdUtil.nodesToArray(e[0].children).filter(function(e){return"MD-MENU"==e.nodeName;});},e.prototype.getFocusedMenu=function(){return this.getMenus()[this.getFocusedMenuIndex()];},e.prototype.getFocusedMenuIndex=function(){var e=this.$mdUtil,t=e.getClosest(this.$document[0].activeElement,"MD-MENU");if(!t)return-1;var n=this.getMenus().indexOf(t);return n;},e.prototype.getOpenMenuIndex=function(){for(var e=this.getMenus(),t=0;t<e.length;++t){if(e[t].classList.contains("md-open"))return t;}return-1;};}(),function(){function e(e,n){return{restrict:"E",require:"mdMenuBar",controller:"MenuBarController",compile:function compile(o,i){return i.ariaRole||o[0].setAttribute("role","menubar"),t.forEach(o[0].children,function(n){if("MD-MENU"==n.nodeName){n.hasAttribute("md-position-mode")||(n.setAttribute("md-position-mode","left bottom"),n.querySelector("button, a, md-button").setAttribute("role","menuitem"));var o=e.nodesToArray(n.querySelectorAll("md-menu-content"));t.forEach(o,function(e){e.classList.add("md-menu-bar-menu"),e.classList.add("md-dense"),e.hasAttribute("width")||e.setAttribute("width",5);});}}),o.find("md-menu-item").addClass("md-in-menu-bar"),function(e,t,o,i){t.addClass("_md"),n(e,t),i.init();};}};}t.module("material.components.menuBar").directive("mdMenuBar",e),e.$inject=["$mdUtil","$mdTheming"];}(),function(){function e(){return{restrict:"E",compile:function compile(e,t){t.role||e[0].setAttribute("role","separator");}};}t.module("material.components.menuBar").directive("mdMenuDivider",e);}(),function(){function e(e,t,n){this.$element=t,this.$attrs=n,this.$scope=e;}t.module("material.components.menuBar").controller("MenuItemController",e),e.$inject=["$scope","$element","$attrs"],e.prototype.init=function(e){var t=this.$element,n=this.$attrs;this.ngModel=e,"checkbox"!=n.type&&"radio"!=n.type||(this.mode=n.type,this.iconEl=t[0].children[0],this.buttonEl=t[0].children[1],e&&this.initClickListeners());},e.prototype.clearNgAria=function(){var e=this.$element[0],n=["role","tabindex","aria-invalid","aria-checked"];t.forEach(n,function(t){e.removeAttribute(t);});},e.prototype.initClickListeners=function(){function e(){if("radio"==d){var e=a.ngValue?r.$eval(a.ngValue):a.value;return i.$modelValue==e;}return i.$modelValue;}function n(e){e?c.off("click",l):c.on("click",l);}var o=this,i=this.ngModel,r=this.$scope,a=this.$attrs,d=(this.$element,this.mode);this.handleClick=t.bind(this,this.handleClick);var s=this.iconEl,c=t.element(this.buttonEl),l=this.handleClick;a.$observe("disabled",n),n(a.disabled),i.$render=function(){o.clearNgAria(),e()?(s.style.display="",c.attr("aria-checked","true")):(s.style.display="none",c.attr("aria-checked","false"));},r.$$postDigest(i.$render);},e.prototype.handleClick=function(e){var t,n=this.mode,o=this.ngModel,i=this.$attrs;"checkbox"==n?t=!o.$modelValue:"radio"==n&&(t=i.ngValue?this.$scope.$eval(i.ngValue):i.value),o.$setViewValue(t),o.$render();};}(),function(){function e(e){return{controller:"MenuItemController",require:["mdMenuItem","?ngModel"],priority:210,compile:function compile(n,o){function i(e,o,i){i=i||n,i instanceof t.element&&(i=i[0]),i.hasAttribute(e)||i.setAttribute(e,o);}function r(o){var i=e.prefixer(o);t.forEach(i,function(e){if(n[0].hasAttribute(e)){var t=n[0].getAttribute(e);c[0].setAttribute(e,t),n[0].removeAttribute(e);}});}var a=o.type,d="md-in-menu-bar";if("checkbox"!=a&&"radio"!=a||!n.hasClass(d))i("role","menuitem",n[0].querySelector("md-button, button, a"));else{var s=n[0].textContent,c=t.element('<md-button type="button"></md-button>');c.html(s),c.attr("tabindex","0"),n.html(""),n.append(t.element('<md-icon md-svg-icon="check"></md-icon>')),n.append(c),n.addClass("md-indent").removeClass(d),i("role","checkbox"==a?"menuitemcheckbox":"menuitemradio",c),r("ng-disabled");}return function(e,t,n,o){var i=o[0],r=o[1];i.init(r);};}};}t.module("material.components.menuBar").directive("mdMenuItem",e),e.$inject=["$mdUtil"];}(),function(){function e(e,n,o,i,r,a){function d(a,d,c){function f(t,o,r,d,c){var l=++N,h=i.now(),f=o-t,g=m(a.mdDiameter),b=g-u(g),v=r||n.easeFn,E=d||n.duration;o===t?k.attr("d",s(o,g,b,c)):M=p(function $(n){var o=e.Math.max(0,e.Math.min((n||i.now())-h,E));k.attr("d",s(v(o,t,f,E),g,b,c)),l===N&&o<E&&(M=p($));});}function $(){f(_,x,n.easeFnIndeterminate,n.durationIndeterminate,S),S=(S+x)%100;var e=_;_=-x,x=-e;}function C(){T||(T=r($,n.durationIndeterminate+50,0,!1),$(),d.addClass(E).removeAttr("aria-valuenow"));}function y(){T&&(r.cancel(T),T=null,d.removeClass(E));}var M,T,A=d[0],w=t.element(A.querySelector("svg")),k=t.element(A.querySelector("path")),_=n.startIndeterminate,x=n.endIndeterminate,S=0,N=0;o(d),d.toggleClass(v,c.hasOwnProperty("disabled")),a.mdMode===b&&C(),a.$on("$destroy",function(){y(),M&&h(M);}),a.$watchGroup(["value","mdMode",function(){var e=A.disabled;return e===!0||e===!1?e:t.isDefined(d.attr("disabled"));}],function(e,t){var n=e[1],o=e[2],i=t[2];if(o!==i&&d.toggleClass(v,!!o),o)y();else if(n!==g&&n!==b&&(n=b,c.$set("mdMode",n)),n===b)C();else{var r=l(e[0]);y(),d.attr("aria-valuenow",r),f(l(t[0]),r);}}),a.$watch("mdDiameter",function(e){var t=m(e),n=u(t),o=t/2+"px",i={width:t+"px",height:t+"px"};w[0].setAttribute("viewBox","0 0 "+t+" "+t),w.css(i).css("transform-origin",o+" "+o+" "+o),d.css(i),k.css("stroke-width",n+"px");});}function s(e,t,n,o){var i,r=3.5999,a=o||0,d=t/2,s=n/2,l=a*r,m=e*r,u=c(d,s,l),p=c(d,s,m+l),h=m<0?0:1;return i=m<0?m>=-180?0:1:m<=180?0:1,"M"+u+"A"+s+","+s+" 0 "+i+","+h+" "+p;}function c(t,n,o){var i=(o-90)*f;return t+n*e.Math.cos(i)+","+(t+n*e.Math.sin(i));}function l(t){return e.Math.max(0,e.Math.min(t||0,100));}function m(e){var t=n.progressSize;if(e){var o=parseFloat(e);return e.lastIndexOf("%")===e.length-1&&(o=o/100*t),o;}return t;}function u(e){return n.strokeWidth/100*e;}var p=e.requestAnimationFrame||t.noop,h=e.cancelAnimationFrame||t.noop,f=e.Math.PI/180,g="determinate",b="indeterminate",v="_md-progress-circular-disabled",E="md-mode-indeterminate";return{restrict:"E",scope:{value:"@",mdDiameter:"@",mdMode:"@"},template:'<svg xmlns="http://www.w3.org/2000/svg"><path fill="none"/></svg>',compile:function compile(e,n){if(e.attr({"aria-valuemin":0,"aria-valuemax":100,role:"progressbar"}),t.isUndefined(n.mdMode)){var o=t.isDefined(n.value),i=o?g:b;n.$set("mdMode",i);}else n.$set("mdMode",n.mdMode.trim());return d;}};}t.module("material.components.progressCircular").directive("mdProgressCircular",e),e.$inject=["$window","$mdProgressCircular","$mdTheming","$mdUtil","$interval","$log"];}(),function(){function e(){function e(e,t,n,o){return n*e/o+t;}function n(e,t,n,o){var i=(e/=o)*e,r=i*e;return t+n*(6*r*i+-15*i*i+10*r);}var o={progressSize:50,strokeWidth:10,duration:100,easeFn:e,durationIndeterminate:500,startIndeterminate:3,endIndeterminate:80,easeFnIndeterminate:n,easingPresets:{linearEase:e,materialEase:n}};return{configure:function configure(e){return o=t.extend(o,e||{});},$get:function $get(){return o;}};}t.module("material.components.progressCircular").provider("$mdProgressCircular",e);}(),function(){function e(){function e(e,o,i,r){if(r){var a=r.getTabElementIndex(o),d=n(o,"md-tab-body").remove(),s=n(o,"md-tab-label").remove(),c=r.insertTab({scope:e,parent:e.$parent,index:a,element:o,template:d.html(),label:s.html()},a);e.select=e.select||t.noop,e.deselect=e.deselect||t.noop,e.$watch("active",function(e){e&&r.select(c.getIndex(),!0);}),e.$watch("disabled",function(){r.refreshIndex();}),e.$watch(function(){return r.getTabElementIndex(o);},function(e){c.index=e,r.updateTabOrder();}),e.$on("$destroy",function(){r.removeTab(c);});}}function n(e,n){for(var o=e[0].children,i=0,r=o.length;i<r;i++){var a=o[i];if(a.tagName===n.toUpperCase())return t.element(a);}return t.element();}return{require:"^?mdTabs",terminal:!0,compile:function compile(o,i){var r=n(o,"md-tab-label"),a=n(o,"md-tab-body");if(0==r.length&&(r=t.element("<md-tab-label></md-tab-label>"),i.label?r.text(i.label):r.append(o.contents()),0==a.length)){var d=o.contents().detach();a=t.element("<md-tab-body></md-tab-body>"),a.append(d);}return o.append(r),a.html()&&o.append(a),e;},scope:{active:"=?mdActive",disabled:"=?ngDisabled",select:"&?mdOnSelect",deselect:"&?mdOnDeselect"}};}t.module("material.components.tabs").directive("mdTab",e);}(),function(){function e(){return{require:"^?mdTabs",link:function link(e,t,n,o){o&&o.attachRipple(e,t);}};}t.module("material.components.tabs").directive("mdTabItem",e);}(),function(){function e(){return{terminal:!0};}t.module("material.components.tabs").directive("mdTabLabel",e);}(),function(){function e(e){return{restrict:"A",compile:function compile(t,n){var o=e(n.mdTabScroll,null,!0);return function(e,t){t.on("mousewheel",function(t){e.$apply(function(){o(e,{$event:t});});});};}};}t.module("material.components.tabs").directive("mdTabScroll",e),e.$inject=["$parse"];}(),function(){function e(e,o,i,r,a,d,s,c,l,m){function u(){le.selectedIndex=le.selectedIndex||0,p(),f(),h(),m(o),d.nextTick(function(){ue=F(),re(),te(),ae(),le.tabs[le.selectedIndex]&&le.tabs[le.selectedIndex].scope.select(),fe=!0,Y();});}function p(){var e=c.$mdTabsTemplate,n=t.element(o[0].querySelector("md-tab-data"));n.html(e),l(n.contents())(le.parent),delete c.$mdTabsTemplate;}function h(){t.element(i).on("resize",I),e.$on("$destroy",v);}function f(){e.$watch("$mdTabsCtrl.selectedIndex",w);}function g(e,t){var n=c.$normalize("md-"+e);t&&V(e,t),c.$observe(n,function(t){le[e]=t;});}function b(e,t){function n(t){le[e]="false"!==t;}var o=c.$normalize("md-"+e);t&&V(e,t),c.hasOwnProperty(o)&&n(c[o]),c.$observe(o,n);}function v(){he=!0,t.element(i).off("resize",I);}function E(e){var n=F();t.element(n.wrapper).toggleClass("md-stretch-tabs",j()),ae();}function $(e){le.shouldCenterTabs=q();}function C(e,n){if(e!==n){var o=F();t.forEach(o.tabs,function(t){t.style.maxWidth=e+"px";}),d.nextTick(le.updateInkBarStyles);}}function y(e,t){e!==t&&(le.maxTabWidth=Q(),le.shouldCenterTabs=q(),d.nextTick(function(){le.maxTabWidth=Q(),te(le.selectedIndex);}));}function M(e){o[e?"removeClass":"addClass"]("md-no-tab-content");}function T(n){var o=F(),i=le.shouldCenterTabs?"":"-"+n+"px";t.element(o.paging).css(r.CSS.TRANSFORM,"translate3d("+i+", 0, 0)"),e.$broadcast("$mdTabsPaginationChanged");}function A(e,t){e!==t&&F().tabs[e]&&(te(),ee());}function w(t,n){t!==n&&(le.selectedIndex=W(t),le.lastSelectedIndex=n,le.updateInkBarStyles(),re(),te(t),e.$broadcast("$mdTabsChanged"),le.tabs[n]&&le.tabs[n].scope.deselect(),le.tabs[t]&&le.tabs[t].scope.select());}function k(e){var t=o[0].getElementsByTagName("md-tab");return Array.prototype.indexOf.call(t,e[0]);}function _(){_.watcher||(_.watcher=e.$watch(function(){d.nextTick(function(){_.watcher&&o.prop("offsetParent")&&(_.watcher(),_.watcher=null,I());},!1);}));}function x(e){switch(e.keyCode){case r.KEY_CODE.LEFT_ARROW:e.preventDefault(),J(-1,!0);break;case r.KEY_CODE.RIGHT_ARROW:e.preventDefault(),J(1,!0);break;case r.KEY_CODE.SPACE:case r.KEY_CODE.ENTER:e.preventDefault(),me||S(le.focusIndex);}le.lastClick=!1;}function S(e,t){me||(le.focusIndex=le.selectedIndex=e),le.lastClick=!0,t&&le.noSelectClick||d.nextTick(function(){le.tabs[e].element.triggerHandler("click");},!1);}function N(e){le.shouldPaginate&&(e.preventDefault(),le.offsetLeft=se(le.offsetLeft-e.wheelDelta));}function D(){var e,t,n=F(),o=n.canvas.clientWidth,i=o+le.offsetLeft;for(e=0;e<n.tabs.length&&(t=n.tabs[e],!(t.offsetLeft+t.offsetWidth>i));e++){}le.offsetLeft=se(t.offsetLeft);}function H(){var e,t,n=F();for(e=0;e<n.tabs.length&&(t=n.tabs[e],!(t.offsetLeft+t.offsetWidth>=le.offsetLeft));e++){}le.offsetLeft=se(t.offsetLeft+t.offsetWidth-n.canvas.clientWidth);}function I(){le.lastSelectedIndex=le.selectedIndex,le.offsetLeft=se(le.offsetLeft),d.nextTick(function(){le.updateInkBarStyles(),Y();});}function O(e){t.element(F().inkBar).toggleClass("ng-hide",e);}function R(e){o.toggleClass("md-dynamic-height",e);}function L(e){if(!he){var t=le.selectedIndex,n=le.tabs.splice(e.getIndex(),1)[0];ie(),le.selectedIndex===t&&(n.scope.deselect(),le.tabs[le.selectedIndex]&&le.tabs[le.selectedIndex].scope.select()),d.nextTick(function(){Y(),le.offsetLeft=se(le.offsetLeft);});}}function P(e,n){var o=fe,i={getIndex:function getIndex(){return le.tabs.indexOf(r);},isActive:function isActive(){return this.getIndex()===le.selectedIndex;},isLeft:function isLeft(){return this.getIndex()<le.selectedIndex;},isRight:function isRight(){return this.getIndex()>le.selectedIndex;},shouldRender:function shouldRender(){return!le.noDisconnect||this.isActive();},hasFocus:function hasFocus(){return!le.lastClick&&le.hasFocus&&this.getIndex()===le.focusIndex;},id:d.nextUid()},r=t.extend(i,e);return t.isDefined(n)?le.tabs.splice(n,0,r):le.tabs.push(r),ne(),oe(),d.nextTick(function(){Y(),o&&le.autoselect&&d.nextTick(function(){d.nextTick(function(){S(le.tabs.indexOf(r));});});}),r;}function F(){var e={},t=o[0];return e.wrapper=t.querySelector("md-tabs-wrapper"),e.canvas=e.wrapper.querySelector("md-tabs-canvas"),e.paging=e.canvas.querySelector("md-pagination-wrapper"),e.inkBar=e.paging.querySelector("md-ink-bar"),e.contents=t.querySelectorAll("md-tabs-content-wrapper > md-tab-content"),e.tabs=e.paging.querySelectorAll("md-tab-item"),e.dummies=e.canvas.querySelectorAll("md-dummy-tab"),e;}function B(){return le.offsetLeft>0;}function U(){var e=F(),t=e.tabs[e.tabs.length-1];return t&&t.offsetLeft+t.offsetWidth>e.canvas.clientWidth+le.offsetLeft;}function j(){switch(le.stretchTabs){case"always":return!0;case"never":return!1;default:return!le.shouldPaginate&&i.matchMedia("(max-width: 600px)").matches;}}function q(){return le.centerTabs&&!le.shouldPaginate;}function z(){if(le.noPagination||!fe)return!1;var e=o.prop("clientWidth");return t.forEach(F().dummies,function(t){e-=t.offsetWidth;}),e<0;}function W(e){if(e===-1)return-1;var t,n,o=Math.max(le.tabs.length-e,e);for(t=0;t<=o;t++){if(n=le.tabs[e+t],n&&n.scope.disabled!==!0)return n.getIndex();if(n=le.tabs[e-t],n&&n.scope.disabled!==!0)return n.getIndex();}return e;}function V(e,t,n){Object.defineProperty(le,e,{get:function get(){return n;},set:function set(e){var o=n;n=e,t&&t(e,o);}});}function Y(){K(),le.maxTabWidth=Q(),le.shouldPaginate=z();}function K(){var e=F();j()?t.element(e.paging).css("width",""):t.element(e.paging).css("width",G()+"px");}function G(){return X(F().dummies);}function X(e){var n=0;return t.forEach(e,function(e){n+=Math.max(e.offsetWidth,e.getBoundingClientRect().width);}),Math.ceil(n);}function Q(){return o.prop("clientWidth");}function Z(){var e=le.tabs[le.selectedIndex],t=le.tabs[le.focusIndex];le.tabs=le.tabs.sort(function(e,t){return e.index-t.index;}),le.selectedIndex=le.tabs.indexOf(e),le.focusIndex=le.tabs.indexOf(t);}function J(e,t){var n,o=t?"focusIndex":"selectedIndex",i=le[o];for(n=i+e;le.tabs[n]&&le.tabs[n].scope.disabled;n+=e){}le.tabs[n]&&(le[o]=n);}function ee(){F().dummies[le.focusIndex].focus();}function te(e){var t=F();if(null==e&&(e=le.focusIndex),t.tabs[e]&&!le.shouldCenterTabs){var n=t.tabs[e],o=n.offsetLeft,i=n.offsetWidth+o;le.offsetLeft=Math.max(le.offsetLeft,se(i-t.canvas.clientWidth+64)),le.offsetLeft=Math.min(le.offsetLeft,se(o));}}function ne(){pe.forEach(function(e){d.nextTick(e);}),pe=[];}function oe(){var e=!1;t.forEach(le.tabs,function(t){t.template&&(e=!0);}),le.hasContent=e;}function ie(){le.selectedIndex=W(le.selectedIndex),le.focusIndex=W(le.focusIndex);}function re(){if(!le.dynamicHeight)return o.css("height","");if(!le.tabs.length)return pe.push(re);var e=F(),t=e.contents[le.selectedIndex],i=t?t.offsetHeight:0,r=e.wrapper.offsetHeight,a=i+r,c=o.prop("clientHeight");if(c!==a){"bottom"===o.attr("md-align-tabs")&&(c-=r,a-=r,o.attr("md-border-bottom")!==n&&++c),me=!0;var l={height:c+"px"},m={height:a+"px"};o.css(l),s(o,{from:l,to:m,easing:"cubic-bezier(0.35, 0, 0.25, 1)",duration:.5}).start().done(function(){o.css({transition:"none",height:""}),d.nextTick(function(){o.css("transition","");}),me=!1;});}}function ae(){var e=F();if(!e.tabs[le.selectedIndex])return void t.element(e.inkBar).css({left:"auto",right:"auto"});if(!le.tabs.length)return pe.push(le.updateInkBarStyles);if(!o.prop("offsetParent"))return _();var n=le.selectedIndex,i=e.paging.offsetWidth,r=e.tabs[n],a=r.offsetLeft,s=i-a-r.offsetWidth;if(le.shouldCenterTabs){var c=X(e.tabs);i>c&&d.nextTick(ae,!1);}de(),t.element(e.inkBar).css({left:a+"px",right:s+"px"});}function de(){var e=F(),n=le.selectedIndex,o=le.lastSelectedIndex,i=t.element(e.inkBar);t.isNumber(o)&&i.toggleClass("md-left",n<o).toggleClass("md-right",n>o);}function se(e){var t=F();if(!t.tabs.length||!le.shouldPaginate)return 0;var n=t.tabs[t.tabs.length-1],o=n.offsetLeft+n.offsetWidth;return e=Math.max(0,e),e=Math.min(o-t.canvas.clientWidth,e);}function ce(e,n){var o=F(),i={colorElement:t.element(o.inkBar)};a.attach(e,n,i);}var le=this,me=!1,ue=F(),pe=[],he=!1,fe=!1;g("stretchTabs",E),V("focusIndex",A,le.selectedIndex||0),V("offsetLeft",T,0),V("hasContent",M,!1),V("maxTabWidth",C,Q()),V("shouldPaginate",y,!1),b("noInkBar",O),b("dynamicHeight",R),b("noPagination"),b("swipeContent"),b("noDisconnect"),b("autoselect"),b("noSelectClick"),b("centerTabs",$,!1),b("enableDisconnect"),le.scope=e,le.parent=e.$parent,le.tabs=[],le.lastSelectedIndex=null,le.hasFocus=!1,le.lastClick=!0,le.shouldCenterTabs=q(),le.updatePagination=d.debounce(Y,100),le.redirectFocus=ee,le.attachRipple=ce,le.insertTab=P,le.removeTab=L,le.select=S,le.scroll=N,le.nextPage=D,le.previousPage=H,le.keydown=x,le.canPageForward=U,le.canPageBack=B,le.refreshIndex=ie,le.incrementIndex=J,le.getTabElementIndex=k,le.updateInkBarStyles=d.debounce(ae,100),le.updateTabOrder=d.debounce(Z,100),u();}t.module("material.components.tabs").controller("MdTabsController",e),e.$inject=["$scope","$element","$window","$mdConstant","$mdTabInkRipple","$mdUtil","$animateCss","$attrs","$compile","$mdTheming"];}(),function(){function e(e){return{scope:{selectedIndex:"=?mdSelected"},template:function template(t,n){return n.$mdTabsTemplate=t.html(),'<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-src="'+e.mdTabsArrow+'"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-src="'+e.mdTabsArrow+'"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <md-tabs-dummy-wrapper class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </md-tabs-dummy-wrapper> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0" class="_md"> <md-tab-content id="tab-content-{{::tab.id}}" class="_md" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="$mdTabsCtrl.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>';},controller:"MdTabsController",controllerAs:"$mdTabsCtrl",bindToController:!0};}t.module("material.components.tabs").directive("mdTabs",e),e.$inject=["$$mdSvgRegistry"];}(),function(){function e(e){return{require:"^?mdTabs",link:function link(e,t,n,o){if(o){var i=new MutationObserver(function(e){o.updatePagination(),o.updateInkBarStyles();}),r={childList:!0,subtree:!0,characterData:!0};i.observe(t[0],r),e.$on("$destroy",function(){i&&i.disconnect();});}}};}t.module("material.components.tabs").directive("mdTabsDummyWrapper",e),e.$inject=["$mdUtil"];}(),function(){function e(e,t){function n(n,o,i,r){function a(){n.$watch("connected",function(e){e===!1?d():s();}),n.$on("$destroy",s);}function d(){r.enableDisconnect&&t.disconnectScope(c);}function s(){r.enableDisconnect&&t.reconnectScope(c);}if(r){var c=r.enableDisconnect?n.compileScope.$new():n.compileScope;return o.html(n.template),e(o.contents())(c),t.nextTick(a);}}return{restrict:"A",link:n,scope:{template:"=mdTabsTemplate",connected:"=?mdConnectedIf",compileScope:"=mdScope"},require:"^?mdTabs"};}t.module("material.components.tabs").directive("mdTabsTemplate",e),e.$inject=["$compile","$mdUtil"];}(),function(){t.module("material.core").constant("$MD_THEME_CSS","md-autocomplete.md-THEME_NAME-theme {  background: '{{background-A100}}'; }  md-autocomplete.md-THEME_NAME-theme[disabled]:not([md-floating-label]) {    background: '{{background-100}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions-container.md-THEME_NAME-theme {  background: '{{background-A100}}'; }  .md-autocomplete-suggestions-container.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop {  background-color: '{{background-900-0.0}}'; }  md-backdrop.md-opaque.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }.md-button.md-THEME_NAME-theme:not([disabled]):hover {  background-color: '{{background-500-0.2}}'; }.md-button.md-THEME_NAME-theme:not([disabled]).md-focused {  background-color: '{{background-500-0.2}}'; }.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {  background-color: transparent; }.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab md-icon {    color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }.md-button.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }  .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {    color: '{{primary-contrast}}';    background-color: '{{primary-color}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {      color: '{{primary-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {      background-color: '{{primary-600}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {      background-color: '{{primary-600}}'; }  .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {    color: '{{primary-color}}'; }.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {    color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }.md-button.md-THEME_NAME-theme.md-raised {  color: '{{background-900}}';  background-color: '{{background-50}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) md-icon {    color: '{{background-900}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {    background-color: '{{background-50}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {    background-color: '{{background-200}}'; }.md-button.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }  .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {    color: '{{warn-contrast}}';    background-color: '{{warn-color}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {      color: '{{warn-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {      background-color: '{{warn-600}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {      background-color: '{{warn-600}}'; }  .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {    color: '{{warn-color}}'; }.md-button.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }  .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {    color: '{{accent-contrast}}';    background-color: '{{accent-color}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {      color: '{{accent-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {      background-color: '{{accent-A700}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {      background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {    color: '{{accent-color}}'; }.md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-accent[disabled], .md-button.md-THEME_NAME-theme.md-warn[disabled] {  color: '{{foreground-3}}';  cursor: default; }  .md-button.md-THEME_NAME-theme[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {    color: '{{foreground-3}}'; }.md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {  background-color: '{{foreground-4}}'; }.md-button.md-THEME_NAME-theme[disabled] {  background-color: transparent; }._md a.md-THEME_NAME-theme:not(.md-button).md-primary {  color: '{{primary-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-primary:hover {    color: '{{primary-700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-accent {  color: '{{accent-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover {    color: '{{accent-700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-accent {  color: '{{accent-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover {    color: '{{accent-A700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-warn {  color: '{{warn-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-warn:hover {    color: '{{warn-700}}'; }md-card.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-hue-1}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }  md-card.md-THEME_NAME-theme md-card-header md-card-avatar md-icon {    color: '{{background-color}}';    background-color: '{{foreground-3}}'; }  md-card.md-THEME_NAME-theme md-card-header md-card-header-text .md-subhead {    color: '{{foreground-2}}'; }  md-card.md-THEME_NAME-theme md-card-title md-card-title-text:not(:only-child) .md-subhead {    color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-A700}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{accent-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-indeterminate[disabled] .md-container {  color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled]:not(.md-checked) .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon:after {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{foreground-4}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }  md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input {    color: '{{foreground-1}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-webkit-input-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-moz-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-moz-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-ms-input-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-webkit-input-placeholder {      color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme md-chip md-icon {    color: '{{background-700}}'; }  md-chips.md-THEME_NAME-theme md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }  md-chips.md-THEME_NAME-theme md-chip._md-chip-editing {    background: transparent;    color: '{{background-800}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-content.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-default}}'; }/** Theme styles for mdCalendar. */.md-calendar.md-THEME_NAME-theme {  background: '{{background-A100}}';  color: '{{background-A200-0.87}}'; }  .md-calendar.md-THEME_NAME-theme tr:last-child td {    border-bottom-color: '{{background-200}}'; }.md-THEME_NAME-theme .md-calendar-day-header {  background: '{{background-300}}';  color: '{{background-A200-0.87}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {  border: 1px solid '{{primary-500}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {  color: '{{primary-500-0.6}}'; }.md-calendar-date.md-focus .md-THEME_NAME-theme .md-calendar-date-selection-indicator, .md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover {  background: '{{background-300}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {  background: '{{primary-500}}';  color: '{{primary-500-contrast}}';  border-color: transparent; }.md-THEME_NAME-theme .md-calendar-date-disabled,.md-THEME_NAME-theme .md-calendar-month-label-disabled {  color: '{{background-A200-0.435}}'; }/** Theme styles for mdDatepicker. */.md-THEME_NAME-theme .md-datepicker-input {  color: '{{foreground-1}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-input-container {  border-bottom-color: '{{foreground-4}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {    border-bottom-color: '{{primary-color}}'; }    .md-accent .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {      border-bottom-color: '{{accent-color}}'; }    .md-warn .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {      border-bottom-color: '{{warn-A700}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid {    border-bottom-color: '{{warn-A700}}'; }.md-THEME_NAME-theme .md-datepicker-calendar-pane {  border-color: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle {  border-top-color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button:hover .md-datepicker-expand-triangle {  border-top-color: '{{foreground-2}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  color: '{{primary-color}}'; }.md-THEME_NAME-theme .md-datepicker-open.md-accent .md-datepicker-calendar-icon, .md-accent .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  color: '{{accent-color}}'; }.md-THEME_NAME-theme .md-datepicker-open.md-warn .md-datepicker-calendar-icon, .md-warn .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  color: '{{warn-A700}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-input-container,.md-THEME_NAME-theme .md-datepicker-input-mask-opaque {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-datepicker-calendar {  background: '{{background-A100}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-hue-1}}';  color: '{{foreground-1}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions, md-dialog.md-THEME_NAME-theme.md-content-overflow md-dialog-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }.layout-row > md-divider.md-THEME_NAME-theme,.layout-xs-row > md-divider.md-THEME_NAME-theme, .layout-gt-xs-row > md-divider.md-THEME_NAME-theme,.layout-sm-row > md-divider.md-THEME_NAME-theme, .layout-gt-sm-row > md-divider.md-THEME_NAME-theme,.layout-md-row > md-divider.md-THEME_NAME-theme, .layout-gt-md-row > md-divider.md-THEME_NAME-theme,.layout-lg-row > md-divider.md-THEME_NAME-theme, .layout-gt-lg-row > md-divider.md-THEME_NAME-theme,.layout-xl-row > md-divider.md-THEME_NAME-theme {  border-right-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label,md-input-container.md-THEME_NAME-theme .md-placeholder {  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme label.md-required:after {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-focused):not(.md-input-invalid) label.md-required:after {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme .md-input-messages-animation, md-input-container.md-THEME_NAME-theme .md-input-message-animation {  color: '{{warn-A700}}'; }  md-input-container.md-THEME_NAME-theme .md-input-messages-animation .md-char-counter, md-input-container.md-THEME_NAME-theme .md-input-message-animation .md-char-counter {    color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input, md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-resized .md-input {  border-color: '{{primary-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent md-icon {  color: '{{accent-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn md-icon {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid label,md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input-message-animation,md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled],[disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item .md-avatar-icon {  background-color: '{{foreground-3}}';  color: '{{background-color}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-menu-content.md-THEME_NAME-theme {  background-color: '{{background-A100}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-item {    color: '{{background-A200-0.87}}'; }    md-menu-content.md-THEME_NAME-theme md-menu-item md-icon {      color: '{{background-A200-0.54}}'; }    md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] {      color: '{{background-A200-0.25}}'; }      md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] md-icon {        color: '{{background-A200-0.25}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-divider {    background-color: '{{background-A200-0.11}}'; }md-menu-bar.md-THEME_NAME-theme > button.md-button {  color: '{{foreground-2}}';  border-radius: 2px; }md-menu-bar.md-THEME_NAME-theme md-menu.md-open > button, md-menu-bar.md-THEME_NAME-theme md-menu > button:focus {  outline: none;  background: '{{background-200}}'; }md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover > button {  background-color: '{{ background-500-0.2}}'; }md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover,md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus {  background: transparent; }md-menu-content.md-THEME_NAME-theme .md-menu > .md-button:after {  color: '{{background-A200-0.54}}'; }md-menu-content.md-THEME_NAME-theme .md-menu.md-open > .md-button {  background-color: '{{ background-500-0.2}}'; }md-toolbar.md-THEME_NAME-theme.md-menu-toolbar {  background-color: '{{background-A100}}';  color: '{{background-A200}}'; }  md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler {    background-color: '{{primary-color}}';    color: '{{background-A100-0.87}}'; }    md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon {      color: '{{background-A100-0.87}}'; }md-nav-bar.md-THEME_NAME-theme .md-nav-bar {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-nav-bar.md-THEME_NAME-theme .md-button._md-nav-button.md-unselected {  color: '{{foreground-2}}'; }md-nav-bar.md-THEME_NAME-theme md-nav-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }.md-panel {  background-color: '{{background-900-0.0}}'; }  .md-panel._md-panel-backdrop.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-progress-circular.md-THEME_NAME-theme path {  stroke: '{{primary-color}}'; }md-progress-circular.md-THEME_NAME-theme.md-warn path {  stroke: '{{warn-color}}'; }md-progress-circular.md-THEME_NAME-theme.md-accent path {  stroke: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient(\"{{warn-100}}\" 0%, \"{{warn-100}}\" 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient(\"{{accent-100}}\" 0%, \"{{accent-100}}\" 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-A700}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled],md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple {  color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple, md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple {  color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple {  color: '{{warn-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-primary .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-warn .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-warn .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-input-container md-select.md-THEME_NAME-theme .md-select-value span:first-child:after {  color: '{{warn-A700}}'; }md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-THEME_NAME-theme .md-select-value span:first-child:after {  color: '{{foreground-3}}'; }md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value {  color: '{{primary-color}}'; }  md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{primary-color}}'; }md-input-container.md-input-invalid md-select.md-THEME_NAME-theme .md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-input-container.md-input-invalid md-select.md-THEME_NAME-theme.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  border-bottom-color: transparent;  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-select.md-THEME_NAME-theme .md-select-value {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme .md-select-value span:first-child:after {    color: '{{warn-A700}}'; }md-select.md-THEME_NAME-theme.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme.ng-invalid.ng-touched .md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-select.md-THEME_NAME-theme.ng-invalid.ng-touched.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-content {  background: '{{background-A100}}'; }  md-select-menu.md-THEME_NAME-theme md-content md-optgroup {    color: '{{background-600-0.87}}'; }  md-select-menu.md-THEME_NAME-theme md-content md-option {    color: '{{background-900-0.87}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option[disabled] .md-text {      color: '{{background-400-0.87}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):focus, md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):hover {      background: '{{background-200}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option[selected] {      color: '{{primary-500}}'; }      md-select-menu.md-THEME_NAME-theme md-content md-option[selected]:focus {        color: '{{primary-600}}'; }      md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent {        color: '{{accent-color}}'; }        md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent:focus {          color: '{{accent-A700}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-ripple {  color: '{{primary-600}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ripple {  color: '{{background-600}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ink-ripple {  color: '{{primary-color-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon {  background-color: '{{primary-color-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected].md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-indeterminate[disabled] .md-container {  color: '{{foreground-3}}'; }.md-checkbox-enabled.md-THEME_NAME-theme md-option .md-text {  color: '{{background-900-0.87}}'; }md-sidenav.md-THEME_NAME-theme, md-sidenav.md-THEME_NAME-theme md-content {  background-color: '{{background-hue-1}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  color: '{{background-contrast}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  background-color: '{{accent-A200-0.2}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}';  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}';  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme.md-min .md-focus-ring {  background-color: '{{foreground-3-0.38}}'; }md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-thumb:after {  background-color: '{{background-contrast}}';  border-color: transparent; }md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign {  background-color: '{{background-400}}'; }  md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign:after {    border-top-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme.md-min[md-discrete][md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme[md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring {  background-color: '{{warn-200-0.38}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn[md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring {  background-color: '{{primary-200-0.38}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary[md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: transparent; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after, md-slider.md-THEME_NAME-theme[disabled][md-discrete] .md-thumb:after {  background-color: '{{foreground-3}}';  border-color: transparent; }md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign {  background-color: '{{background-400}}'; }  md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign:after {    border-top-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme[disabled][readonly][md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme[disabled][readonly] .md-disabled-thumb {  border-color: transparent;  background-color: transparent; }md-slider-container[disabled] > *:first-child:not(md-slider),md-slider-container[disabled] > *:last-child:not(md-slider) {  color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-default}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-ink-ripple {  color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple {  color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple {  color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled], md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon, md-tabs.md-THEME_NAME-theme .md-tab.md-focused, md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-A100}}'; }md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-A100}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-A100}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toast.md-THEME_NAME-theme .md-toast-content {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-toast-content .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight {      color: '{{accent-color}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-primary {        color: '{{primary-color}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-warn {        color: '{{warn-color}}'; }md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon {    color: '{{primary-contrast}}';    fill: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button[disabled] md-icon {    color: '{{primary-contrast-0.26}}';    fill: '{{primary-contrast-0.26}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-ink-ripple {      color: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent md-icon {      color: '{{accent-contrast}}';      fill: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon {      color: '{{accent-contrast-0.26}}';      fill: '{{accent-contrast-0.26}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-content {    background-color: '{{foreground-2}}'; }/*  Only used with Theme processes */html.md-THEME_NAME-theme, body.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-color}}'; }");}();}(window,window.angular),window.ngMaterial={version:{full:"1.1.0"}};

/***/ },

/***/ 34:
/***/ function(module, exports) {

	"use strict";

	/*! 12.0.4 */
	!function () {
	  function a(a, b) {
	    window.XMLHttpRequest.prototype[a] = b(window.XMLHttpRequest.prototype[a]);
	  }function b(a, b, c) {
	    try {
	      Object.defineProperty(a, b, { get: c });
	    } catch (d) {}
	  }if (window.FileAPI || (window.FileAPI = {}), !window.XMLHttpRequest) throw "AJAX is not supported. XMLHttpRequest is not defined.";if (FileAPI.shouldLoad = !window.FormData || FileAPI.forceLoad, FileAPI.shouldLoad) {
	    var c = function c(a) {
	      if (!a.__listeners) {
	        a.upload || (a.upload = {}), a.__listeners = [];var b = a.upload.addEventListener;a.upload.addEventListener = function (c, d) {
	          a.__listeners[c] = d, b && b.apply(this, arguments);
	        };
	      }
	    };a("open", function (a) {
	      return function (b, d, e) {
	        c(this), this.__url = d;try {
	          a.apply(this, [b, d, e]);
	        } catch (f) {
	          f.message.indexOf("Access is denied") > -1 && (this.__origError = f, a.apply(this, [b, "_fix_for_ie_crossdomain__", e]));
	        }
	      };
	    }), a("getResponseHeader", function (a) {
	      return function (b) {
	        return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(b) : null == a ? null : a.apply(this, [b]);
	      };
	    }), a("getAllResponseHeaders", function (a) {
	      return function () {
	        return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : null == a ? null : a.apply(this);
	      };
	    }), a("abort", function (a) {
	      return function () {
	        return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : null == a ? null : a.apply(this);
	      };
	    }), a("setRequestHeader", function (a) {
	      return function (b, d) {
	        if ("__setXHR_" === b) {
	          c(this);var e = d(this);e instanceof Function && e(this);
	        } else this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[b] = d, a.apply(this, arguments);
	      };
	    }), a("send", function (a) {
	      return function () {
	        var c = this;if (arguments[0] && arguments[0].__isFileAPIShim) {
	          var d = arguments[0],
	              e = { url: c.__url, jsonp: !1, cache: !0, complete: function complete(a, d) {
	              a && angular.isString(a) && -1 !== a.indexOf("#2174") && (a = null), c.__completed = !0, !a && c.__listeners.load && c.__listeners.load({ type: "load", loaded: c.__loaded, total: c.__total, target: c, lengthComputable: !0 }), !a && c.__listeners.loadend && c.__listeners.loadend({ type: "loadend", loaded: c.__loaded, total: c.__total, target: c, lengthComputable: !0 }), "abort" === a && c.__listeners.abort && c.__listeners.abort({ type: "abort", loaded: c.__loaded, total: c.__total, target: c, lengthComputable: !0 }), void 0 !== d.status && b(c, "status", function () {
	                return 0 === d.status && a && "abort" !== a ? 500 : d.status;
	              }), void 0 !== d.statusText && b(c, "statusText", function () {
	                return d.statusText;
	              }), b(c, "readyState", function () {
	                return 4;
	              }), void 0 !== d.response && b(c, "response", function () {
	                return d.response;
	              });var e = d.responseText || (a && 0 === d.status && "abort" !== a ? a : void 0);b(c, "responseText", function () {
	                return e;
	              }), b(c, "response", function () {
	                return e;
	              }), a && b(c, "err", function () {
	                return a;
	              }), c.__fileApiXHR = d, c.onreadystatechange && c.onreadystatechange(), c.onload && c.onload();
	            }, progress: function progress(a) {
	              if (a.target = c, c.__listeners.progress && c.__listeners.progress(a), c.__total = a.total, c.__loaded = a.loaded, a.total === a.loaded) {
	                var b = this;setTimeout(function () {
	                  c.__completed || (c.getAllResponseHeaders = function () {}, b.complete(null, { status: 204, statusText: "No Content" }));
	                }, FileAPI.noContentTimeout || 1e4);
	              }
	            }, headers: c.__requestHeaders };e.data = {}, e.files = {};for (var f = 0; f < d.data.length; f++) {
	            var g = d.data[f];null != g.val && null != g.val.name && null != g.val.size && null != g.val.type ? e.files[g.key] = g.val : e.data[g.key] = g.val;
	          }setTimeout(function () {
	            if (!FileAPI.hasFlash) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';c.__fileApiXHR = FileAPI.upload(e);
	          }, 1);
	        } else {
	          if (this.__origError) throw this.__origError;a.apply(c, arguments);
	        }
	      };
	    }), window.XMLHttpRequest.__isFileAPIShim = !0, window.FormData = FormData = function FormData() {
	      return { append: function append(a, b, c) {
	          b.__isFileAPIBlobShim && (b = b.data[0]), this.data.push({ key: a, val: b, name: c });
	        }, data: [], __isFileAPIShim: !0 };
	    }, window.Blob = Blob = function Blob(a) {
	      return { data: a, __isFileAPIBlobShim: !0 };
	    };
	  }
	}(), function () {
	  function a(a) {
	    return "input" === a[0].tagName.toLowerCase() && a.attr("type") && "file" === a.attr("type").toLowerCase();
	  }function b() {
	    try {
	      var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if (a) return !0;
	    } catch (b) {
	      if (void 0 !== navigator.mimeTypes["application/x-shockwave-flash"]) return !0;
	    }return !1;
	  }function c(a) {
	    var b = 0,
	        c = 0;if (window.jQuery) return jQuery(a).offset();if (a.offsetParent) do {
	      b += a.offsetLeft - a.scrollLeft, c += a.offsetTop - a.scrollTop, a = a.offsetParent;
	    } while (a);return { left: b, top: c };
	  }if (FileAPI.shouldLoad) {
	    if (FileAPI.hasFlash = b(), FileAPI.forceLoad && (FileAPI.html5 = !1), !FileAPI.upload) {
	      var d,
	          e,
	          f,
	          g,
	          h,
	          i = document.createElement("script"),
	          j = document.getElementsByTagName("script");if (window.FileAPI.jsUrl) d = window.FileAPI.jsUrl;else if (window.FileAPI.jsPath) e = window.FileAPI.jsPath;else for (f = 0; f < j.length; f++) {
	        if (h = j[f].src, g = h.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/), g > -1) {
	          e = h.substring(0, g + 1);break;
	        }
	      }null == FileAPI.staticPath && (FileAPI.staticPath = e), i.setAttribute("src", d || e + "FileAPI.min.js"), document.getElementsByTagName("head")[0].appendChild(i);
	    }FileAPI.ngfFixIE = function (d, e, f) {
	      if (!b()) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';var g = function g() {
	        var b = e.parent();d.attr("disabled") ? b && b.removeClass("js-fileapi-wrapper") : (e.attr("__ngf_flash_") || (e.unbind("change"), e.unbind("click"), e.bind("change", function (a) {
	          h.apply(this, [a]), f.apply(this, [a]);
	        }), e.attr("__ngf_flash_", "true")), b.addClass("js-fileapi-wrapper"), a(d) || (b.css("position", "absolute").css("top", c(d[0]).top + "px").css("left", c(d[0]).left + "px").css("width", d[0].offsetWidth + "px").css("height", d[0].offsetHeight + "px").css("filter", "alpha(opacity=0)").css("display", d.css("display")).css("overflow", "hidden").css("z-index", "900000").css("visibility", "visible"), e.css("width", d[0].offsetWidth + "px").css("height", d[0].offsetHeight + "px").css("position", "absolute").css("top", "0px").css("left", "0px")));
	      };d.bind("mouseenter", g);var h = function h(a) {
	        for (var b = FileAPI.getFiles(a), c = 0; c < b.length; c++) {
	          void 0 === b[c].size && (b[c].size = 0), void 0 === b[c].name && (b[c].name = "file"), void 0 === b[c].type && (b[c].type = "undefined");
	        }a.target || (a.target = {}), a.target.files = b, a.target.files !== b && (a.__files_ = b), (a.__files_ || a.target.files).item = function (b) {
	          return (a.__files_ || a.target.files)[b] || null;
	        };
	      };
	    }, FileAPI.disableFileInput = function (a, b) {
	      b ? a.removeClass("js-fileapi-wrapper") : a.addClass("js-fileapi-wrapper");
	    };
	  }
	}(), window.FileReader || (window.FileReader = function () {
	  var a = this,
	      b = !1;this.listeners = {}, this.addEventListener = function (b, c) {
	    a.listeners[b] = a.listeners[b] || [], a.listeners[b].push(c);
	  }, this.removeEventListener = function (b, c) {
	    a.listeners[b] && a.listeners[b].splice(a.listeners[b].indexOf(c), 1);
	  }, this.dispatchEvent = function (b) {
	    var c = a.listeners[b.type];if (c) for (var d = 0; d < c.length; d++) {
	      c[d].call(a, b);
	    }
	  }, this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;var c = function c(b, _c) {
	    var d = { type: b, target: a, loaded: _c.loaded, total: _c.total, error: _c.error };return null != _c.result && (d.target.result = _c.result), d;
	  },
	      d = function d(_d) {
	    b || (b = !0, a.onloadstart && a.onloadstart(c("loadstart", _d)));var e;"load" === _d.type ? (a.onloadend && a.onloadend(c("loadend", _d)), e = c("load", _d), a.onload && a.onload(e), a.dispatchEvent(e)) : "progress" === _d.type ? (e = c("progress", _d), a.onprogress && a.onprogress(e), a.dispatchEvent(e)) : (e = c("error", _d), a.onerror && a.onerror(e), a.dispatchEvent(e));
	  };this.readAsDataURL = function (a) {
	    FileAPI.readAsDataURL(a, d);
	  }, this.readAsText = function (a) {
	    FileAPI.readAsText(a, d);
	  };
	});

/***/ },

/***/ 35:
/***/ function(module, exports) {

	"use strict";

	/*! 12.0.4 */
	!window.XMLHttpRequest || window.FileAPI && FileAPI.shouldLoad || (window.XMLHttpRequest.prototype.setRequestHeader = function (a) {
	  return function (b, c) {
	    if ("__setXHR_" === b) {
	      var d = c(this);d instanceof Function && d(this);
	    } else a.apply(this, arguments);
	  };
	}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload = angular.module("ngFileUpload", []);ngFileUpload.version = "12.0.4", ngFileUpload.service("UploadBase", ["$http", "$q", "$timeout", function (a, b, c) {
	  function d(d) {
	    function e(a) {
	      j.notify && j.notify(a), k.progressFunc && c(function () {
	        k.progressFunc(a);
	      });
	    }function h(a) {
	      return null != d._start && g ? { loaded: a.loaded + d._start, total: d._file && d._file.size || a.total, type: a.type, config: d, lengthComputable: !0, target: a.target } : a;
	    }function i() {
	      a(d).then(function (a) {
	        g && d._chunkSize && !d._finished && d._file ? (e({ loaded: d._end, total: d._file && d._file.size, config: d, type: "progress" }), f.upload(d, !0)) : (d._finished && delete d._finished, j.resolve(a));
	      }, function (a) {
	        j.reject(a);
	      }, function (a) {
	        j.notify(a);
	      });
	    }d.method = d.method || "POST", d.headers = d.headers || {};var j = d._deferred = d._deferred || b.defer(),
	        k = j.promise;return d.disableProgress || (d.headers.__setXHR_ = function () {
	      return function (a) {
	        a && a.upload && a.upload.addEventListener && (d.__XHR = a, d.xhrFn && d.xhrFn(a), a.upload.addEventListener("progress", function (a) {
	          a.config = d, e(h(a));
	        }, !1), a.upload.addEventListener("load", function (a) {
	          a.lengthComputable && (a.config = d, e(h(a)));
	        }, !1));
	      };
	    }), g ? d._chunkSize && d._end && !d._finished ? (d._start = d._end, d._end += d._chunkSize, i()) : d.resumeSizeUrl ? a.get(d.resumeSizeUrl).then(function (a) {
	      d._start = d.resumeSizeResponseReader ? d.resumeSizeResponseReader(a.data) : parseInt((null == a.data.size ? a.data : a.data.size).toString()), d._chunkSize && (d._end = d._start + d._chunkSize), i();
	    }, function (a) {
	      throw a;
	    }) : d.resumeSize ? d.resumeSize().then(function (a) {
	      d._start = a, i();
	    }, function (a) {
	      throw a;
	    }) : (d._chunkSize && (d._start = 0, d._end = d._start + d._chunkSize), i()) : i(), k.success = function (a) {
	      return k.then(function (b) {
	        a(b.data, b.status, b.headers, d);
	      }), k;
	    }, k.error = function (a) {
	      return k.then(null, function (b) {
	        a(b.data, b.status, b.headers, d);
	      }), k;
	    }, k.progress = function (a) {
	      return k.progressFunc = a, k.then(null, null, function (b) {
	        a(b);
	      }), k;
	    }, k.abort = k.pause = function () {
	      return d.__XHR && c(function () {
	        d.__XHR.abort();
	      }), k;
	    }, k.xhr = function (a) {
	      return d.xhrFn = function (b) {
	        return function () {
	          b && b.apply(k, arguments), a.apply(k, arguments);
	        };
	      }(d.xhrFn), k;
	    }, f.promisesCount++, k["finally"](function () {
	      f.promisesCount--;
	    }), k;
	  }function e(a) {
	    var b = {};for (var c in a) {
	      a.hasOwnProperty(c) && (b[c] = a[c]);
	    }return b;
	  }var f = this;f.promisesCount = 0, this.isResumeSupported = function () {
	    return window.Blob && window.Blob.prototype.slice;
	  };var g = this.isResumeSupported();this.isUploadInProgress = function () {
	    return f.promisesCount > 0;
	  }, this.rename = function (a, b) {
	    return a.ngfName = b, a;
	  }, this.jsonBlob = function (a) {
	    null == a || angular.isString(a) || (a = JSON.stringify(a));var b = new window.Blob([a], { type: "application/json" });return b._ngfBlob = !0, b;
	  }, this.json = function (a) {
	    return angular.toJson(a);
	  }, this.isFile = function (a) {
	    return null != a && (a instanceof window.Blob || a.flashId && a.name && a.size);
	  }, this.upload = function (a, b) {
	    function c(b, c) {
	      if (b._ngfBlob) return b;if (a._file = a._file || b, null != a._start && g) {
	        a._end && a._end >= b.size && (a._finished = !0, a._end = b.size);var d = b.slice(a._start, a._end || b.size);return d.name = b.name, d.ngfName = b.ngfName, a._chunkSize && (c.append("_chunkSize", a._chunkSize), c.append("_currentChunkSize", a._end - a._start), c.append("_chunkNumber", Math.floor(a._start / a._chunkSize)), c.append("_totalSize", a._file.size)), d;
	      }return b;
	    }function h(b, d, e) {
	      if (void 0 !== d) if (angular.isDate(d) && (d = d.toISOString()), angular.isString(d)) b.append(e, d);else if (f.isFile(d)) {
	        var g = c(d, b),
	            i = e.split(",");i[1] && (g.ngfName = i[1].replace(/^\s+|\s+$/g, ""), e = i[0]), a._fileKey = a._fileKey || e, b.append(e, g, g.ngfName || g.name);
	      } else if (angular.isObject(d)) {
	        if (d.$$ngfCircularDetection) throw "ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: " + e;d.$$ngfCircularDetection = !0;try {
	          for (var j in d) {
	            if (d.hasOwnProperty(j) && "$$ngfCircularDetection" !== j) {
	              var k = null == a.objectKey ? "[i]" : a.objectKey;d.length && parseInt(j) > -1 && (k = null == a.arrayKey ? k : a.arrayKey), h(b, d[j], e + k.replace(/[ik]/g, j));
	            }
	          }
	        } finally {
	          delete d.$$ngfCircularDetection;
	        }
	      } else b.append(e, d);
	    }function i() {
	      a._chunkSize = f.translateScalars(a.resumeChunkSize), a._chunkSize = a._chunkSize ? parseInt(a._chunkSize.toString()) : null, a.headers = a.headers || {}, a.headers["Content-Type"] = void 0, a.transformRequest = a.transformRequest ? angular.isArray(a.transformRequest) ? a.transformRequest : [a.transformRequest] : [], a.transformRequest.push(function (b) {
	        var c,
	            d = new window.FormData();b = b || a.fields || {}, a.file && (b.file = a.file);for (c in b) {
	          if (b.hasOwnProperty(c)) {
	            var e = b[c];a.formDataAppender ? a.formDataAppender(d, c, e) : h(d, e, c);
	          }
	        }return d;
	      });
	    }return b || (a = e(a)), a._isDigested || (a._isDigested = !0, i()), d(a);
	  }, this.http = function (b) {
	    return b = e(b), b.transformRequest = b.transformRequest || function (b) {
	      return window.ArrayBuffer && b instanceof window.ArrayBuffer || b instanceof window.Blob ? b : a.defaults.transformRequest[0].apply(this, arguments);
	    }, b._chunkSize = f.translateScalars(b.resumeChunkSize), b._chunkSize = b._chunkSize ? parseInt(b._chunkSize.toString()) : null, d(b);
	  }, this.translateScalars = function (a) {
	    if (angular.isString(a)) {
	      if (a.search(/kb/i) === a.length - 2) return parseFloat(1024 * a.substring(0, a.length - 2));if (a.search(/mb/i) === a.length - 2) return parseFloat(1048576 * a.substring(0, a.length - 2));if (a.search(/gb/i) === a.length - 2) return parseFloat(1073741824 * a.substring(0, a.length - 2));if (a.search(/b/i) === a.length - 1) return parseFloat(a.substring(0, a.length - 1));if (a.search(/s/i) === a.length - 1) return parseFloat(a.substring(0, a.length - 1));if (a.search(/m/i) === a.length - 1) return parseFloat(60 * a.substring(0, a.length - 1));if (a.search(/h/i) === a.length - 1) return parseFloat(3600 * a.substring(0, a.length - 1));
	    }return a;
	  }, this.urlToBlob = function (c) {
	    var d = b.defer();return a({ url: c, method: "get", responseType: "arraybuffer" }).then(function (a) {
	      var b = new Uint8Array(a.data),
	          c = a.headers("content-type") || "image/WebP",
	          e = new window.Blob([b], { type: c });d.resolve(e);
	    }, function (a) {
	      d.reject(a);
	    }), d.promise;
	  }, this.setDefaults = function (a) {
	    this.defaults = a || {};
	  }, this.defaults = {}, this.version = ngFileUpload.version;
	}]), ngFileUpload.service("Upload", ["$parse", "$timeout", "$compile", "$q", "UploadExif", function (a, b, c, d, e) {
	  function f(a, b, c) {
	    var e = [i.emptyPromise()];return angular.forEach(a, function (d, f) {
	      0 === d.type.indexOf("image/jpeg") && i.attrGetter("ngfFixOrientation", b, c, { $file: d }) && e.push(i.happyPromise(i.applyExifRotation(d), d).then(function (b) {
	        a.splice(f, 1, b);
	      }));
	    }), d.all(e);
	  }function g(a, b, c) {
	    var e = i.attrGetter("ngfResize", b, c);if (!e || !i.isResizeSupported() || !a.length) return i.emptyPromise();if (!(e instanceof Function)) return h(e, a, b, c);var f = d.defer();e(a).then(function (d) {
	      h(d, a, b, c).then(function (a) {
	        f.resolve(a);
	      }, function (a) {
	        f.reject(a);
	      });
	    }, function (a) {
	      f.reject(a);
	    });
	  }function h(a, b, c, e) {
	    function f(d, f) {
	      if (0 === d.type.indexOf("image")) {
	        if (a.pattern && !i.validatePattern(d, a.pattern)) return;var h = i.resize(d, a.width, a.height, a.quality, a.type, a.ratio, a.centerCrop, function (a, b) {
	          return i.attrGetter("ngfResizeIf", c, e, { $width: a, $height: b, $file: d });
	        }, a.restoreExif !== !1);g.push(h), h.then(function (a) {
	          b.splice(f, 1, a);
	        }, function (a) {
	          d.$error = "resize", d.$errorParam = (a ? (a.message ? a.message : a) + ": " : "") + (d && d.name);
	        });
	      }
	    }for (var g = [i.emptyPromise()], h = 0; h < b.length; h++) {
	      f(b[h], h);
	    }return d.all(g);
	  }var i = e;return i.getAttrWithDefaults = function (a, b) {
	    if (null != a[b]) return a[b];var c = i.defaults[b];return null == c ? c : angular.isString(c) ? c : JSON.stringify(c);
	  }, i.attrGetter = function (b, c, d, e) {
	    var f = this.getAttrWithDefaults(c, b);if (!d) return f;try {
	      return e ? a(f)(d, e) : a(f)(d);
	    } catch (g) {
	      if (b.search(/min|max|pattern/i)) return f;throw g;
	    }
	  }, i.shouldUpdateOn = function (a, b, c) {
	    var d = i.attrGetter("ngModelOptions", b, c);return d && d.updateOn ? d.updateOn.split(" ").indexOf(a) > -1 : !0;
	  }, i.emptyPromise = function () {
	    var a = d.defer(),
	        c = arguments;return b(function () {
	      a.resolve.apply(a, c);
	    }), a.promise;
	  }, i.rejectPromise = function () {
	    var a = d.defer(),
	        c = arguments;return b(function () {
	      a.reject.apply(a, c);
	    }), a.promise;
	  }, i.happyPromise = function (a, c) {
	    var e = d.defer();return a.then(function (a) {
	      e.resolve(a);
	    }, function (a) {
	      b(function () {
	        throw a;
	      }), e.resolve(c);
	    }), e.promise;
	  }, i.updateModel = function (c, d, e, h, j, k, l) {
	    function m(f, g, j, l, m) {
	      d.$$ngfPrevValidFiles = f, d.$$ngfPrevInvalidFiles = g;var n = f && f.length ? f[0] : null,
	          o = g && g.length ? g[0] : null;c && (i.applyModelValidation(c, f), c.$setViewValue(m ? n : f)), h && a(h)(e, { $files: f, $file: n, $newFiles: j, $duplicateFiles: l, $invalidFiles: g, $invalidFile: o, $event: k });var p = i.attrGetter("ngfModelInvalid", d);p && b(function () {
	        a(p).assign(e, m ? o : g);
	      }), b(function () {});
	    }function n() {
	      function a(a, b) {
	        return a.name === b.name && (a.$ngfOrigSize || a.size) === (b.$ngfOrigSize || b.size) && a.type === b.type;
	      }function b(b) {
	        var c;for (c = 0; c < s.length; c++) {
	          if (a(b, s[c])) return !0;
	        }for (c = 0; c < t.length; c++) {
	          if (a(b, t[c])) return !0;
	        }return !1;
	      }if (j) {
	        r = [], u = [];for (var c = 0; c < j.length; c++) {
	          b(j[c]) ? u.push(j[c]) : r.push(j[c]);
	        }
	      }
	    }function o(a) {
	      return angular.isArray(a) ? a : [a];
	    }function p() {
	      w = [], v = [], angular.forEach(r, function (a) {
	        a.$error ? v.push(a) : w.push(a);
	      });
	    }function q() {
	      function a() {
	        b(function () {
	          m(x ? s.concat(w) : w, x ? t.concat(v) : v, j, u, y);
	        }, A && A.debounce ? A.debounce.change || A.debounce : 0);
	      }g(z ? r : w, d, e).then(function () {
	        z ? i.validate(r, s.length, c, d, e).then(function () {
	          p(), a();
	        }) : a();
	      }, function (a) {
	        throw "Could not resize files " + a;
	      });
	    }var r,
	        s,
	        t,
	        u = [],
	        v = [],
	        w = [];s = d.$$ngfPrevValidFiles || [], t = d.$$ngfPrevInvalidFiles || [], c && c.$modelValue && (s = o(c.$modelValue));var x = i.attrGetter("ngfKeep", d, e);r = (j || []).slice(0), ("distinct" === x || i.attrGetter("ngfKeepDistinct", d, e) === !0) && n(d, e);var y = !x && !i.attrGetter("ngfMultiple", d, e) && !i.attrGetter("multiple", d);if (!x || r.length) {
	      i.attrGetter("ngfBeforeModelChange", d, e, { $files: j, $file: j && j.length ? j[0] : null, $newFiles: r, $duplicateFiles: u, $event: k });var z = i.attrGetter("ngfValidateAfterResize", d, e),
	          A = i.attrGetter("ngModelOptions", d, e);i.validate(r, s.length, c, d, e).then(function () {
	        l ? m(r, [], j, u, y) : (A && A.allowInvalid || z ? w = r : p(), i.attrGetter("ngfFixOrientation", d, e) && i.isExifSupported() ? f(w, d, e).then(function () {
	          q();
	        }) : q());
	      });
	    }
	  }, i;
	}]), ngFileUpload.directive("ngfSelect", ["$parse", "$timeout", "$compile", "Upload", function (a, b, c, d) {
	  function e(a) {
	    var b = a.match(/Android[^\d]*(\d+)\.(\d+)/);if (b && b.length > 2) {
	      var c = d.defaults.androidFixMinorVersion || 4;return parseInt(b[1]) < 4 || parseInt(b[1]) === c && parseInt(b[2]) < c;
	    }return -1 === a.indexOf("Chrome") && /.*Windows.*Safari.*/.test(a);
	  }function f(a, b, c, d, f, h, i, j) {
	    function k() {
	      return "input" === b[0].tagName.toLowerCase() && c.type && "file" === c.type.toLowerCase();
	    }function l() {
	      return t("ngfChange") || t("ngfSelect");
	    }function m(b) {
	      if (j.shouldUpdateOn("change", c, a)) {
	        for (var e = b.__files_ || b.target && b.target.files, f = [], g = 0; g < e.length; g++) {
	          f.push(e[g]);
	        }j.updateModel(d, c, a, l(), f.length ? f : null, b);
	      }
	    }function n(a) {
	      if (b !== a) for (var c = 0; c < b[0].attributes.length; c++) {
	        var d = b[0].attributes[c];"type" !== d.name && "class" !== d.name && "style" !== d.name && ((null == d.value || "" === d.value) && ("required" === d.name && (d.value = "required"), "multiple" === d.name && (d.value = "multiple")), a.attr(d.name, "id" === d.name ? "ngf-" + d.value : d.value));
	      }
	    }function o() {
	      if (k()) return b;var a = angular.element('<input type="file">');n(a);var c = angular.element("<label>upload</label>");return c.css("visibility", "hidden").css("position", "absolute").css("overflow", "hidden").css("width", "0px").css("height", "0px").css("border", "none").css("margin", "0px").css("padding", "0px").attr("tabindex", "-1"), g.push({ el: b, ref: c }), document.body.appendChild(c.append(a)[0]), a;
	    }function p(c) {
	      if (b.attr("disabled")) return !1;if (!t("ngfSelectDisabled", a)) {
	        var d = q(c);if (null != d) return d;r(c);try {
	          k() || document.body.contains(w[0]) || (g.push({ el: b, ref: w.parent() }), document.body.appendChild(w.parent()[0]), w.bind("change", m));
	        } catch (f) {}return e(navigator.userAgent) ? setTimeout(function () {
	          w[0].click();
	        }, 0) : w[0].click(), !1;
	      }
	    }function q(a) {
	      var b = a.changedTouches || a.originalEvent && a.originalEvent.changedTouches;if ("touchstart" === a.type) return v = b ? b[0].clientY : 0, !0;if (a.stopPropagation(), a.preventDefault(), "touchend" === a.type) {
	        var c = b ? b[0].clientY : 0;if (Math.abs(c - v) > 20) return !1;
	      }
	    }function r(b) {
	      j.shouldUpdateOn("click", c, a) && w.val() && (w.val(null), j.updateModel(d, c, a, l(), null, b, !0));
	    }function s(a) {
	      if (w && !w.attr("__ngf_ie10_Fix_")) {
	        if (!w[0].parentNode) return void (w = null);a.preventDefault(), a.stopPropagation(), w.unbind("click");var b = w.clone();return w.replaceWith(b), w = b, w.attr("__ngf_ie10_Fix_", "true"), w.bind("change", m), w.bind("click", s), w[0].click(), !1;
	      }w.removeAttr("__ngf_ie10_Fix_");
	    }var t = function t(a, b) {
	      return j.attrGetter(a, c, b);
	    };j.registerModelChangeValidator(d, c, a);var u = [];u.push(a.$watch(t("ngfMultiple"), function () {
	      w.attr("multiple", t("ngfMultiple", a));
	    })), u.push(a.$watch(t("ngfCapture"), function () {
	      w.attr("capture", t("ngfCapture", a));
	    })), u.push(a.$watch(t("ngfAccept"), function () {
	      w.attr("accept", t("ngfAccept", a));
	    })), c.$observe("accept", function () {
	      w.attr("accept", t("accept"));
	    }), u.push(function () {
	      c.$$observers && delete c.$$observers.accept;
	    });var v = 0,
	        w = b;k() || (w = o()), w.bind("change", m), k() ? b.bind("click", r) : b.bind("click touchstart touchend", p), -1 !== navigator.appVersion.indexOf("MSIE 10") && w.bind("click", s), d && d.$formatters.push(function (a) {
	      return (null == a || 0 === a.length) && w.val() && w.val(null), a;
	    }), a.$on("$destroy", function () {
	      k() || w.parent().remove(), angular.forEach(u, function (a) {
	        a();
	      });
	    }), h(function () {
	      for (var a = 0; a < g.length; a++) {
	        var b = g[a];document.body.contains(b.el[0]) || (g.splice(a, 1), b.ref.remove());
	      }
	    }), window.FileAPI && window.FileAPI.ngfFixIE && window.FileAPI.ngfFixIE(b, w, m);
	  }var g = [];return { restrict: "AEC", require: "?ngModel", link: function link(e, g, h, i) {
	      f(e, g, h, i, a, b, c, d);
	    } };
	}]), function () {
	  function a(a) {
	    return "img" === a.tagName.toLowerCase() ? "image" : "audio" === a.tagName.toLowerCase() ? "audio" : "video" === a.tagName.toLowerCase() ? "video" : /./;
	  }function b(b, c, d, e, f, g, h, i) {
	    function j(a) {
	      var g = b.attrGetter("ngfNoObjectUrl", f, d);b.dataUrl(a, g)["finally"](function () {
	        c(function () {
	          var b = (g ? a.$ngfDataUrl : a.$ngfBlobUrl) || a.$ngfDataUrl;i ? e.css("background-image", "url('" + (b || "") + "')") : e.attr("src", b), b ? e.removeClass("ng-hide") : e.addClass("ng-hide");
	        });
	      });
	    }c(function () {
	      var c = d.$watch(f[g], function (c) {
	        var d = h;if ("ngfThumbnail" === g && (d || (d = { width: e[0].clientWidth, height: e[0].clientHeight }), 0 === d.width && window.getComputedStyle)) {
	          var f = getComputedStyle(e[0]);d = { width: parseInt(f.width.slice(0, -2)), height: parseInt(f.height.slice(0, -2)) };
	        }return angular.isString(c) ? (e.removeClass("ng-hide"), i ? e.css("background-image", "url('" + c + "')") : e.attr("src", c)) : void (!c || !c.type || 0 !== c.type.search(a(e[0])) || i && 0 !== c.type.indexOf("image") ? e.addClass("ng-hide") : d && b.isResizeSupported() ? b.resize(c, d.width, d.height, d.quality).then(function (a) {
	          j(a);
	        }, function (a) {
	          throw a;
	        }) : j(c));
	      });d.$on("$destroy", function () {
	        c();
	      });
	    });
	  }ngFileUpload.service("UploadDataUrl", ["UploadBase", "$timeout", "$q", function (a, b, c) {
	    var d = a;return d.base64DataUrl = function (a) {
	      if (angular.isArray(a)) {
	        var b = c.defer(),
	            e = 0;return angular.forEach(a, function (c) {
	          d.dataUrl(c, !0)["finally"](function () {
	            if (e++, e === a.length) {
	              var c = [];angular.forEach(a, function (a) {
	                c.push(a.$ngfDataUrl);
	              }), b.resolve(c, a);
	            }
	          });
	        }), b.promise;
	      }return d.dataUrl(a, !0);
	    }, d.dataUrl = function (a, e) {
	      if (!a) return d.emptyPromise(a, a);if (e && null != a.$ngfDataUrl || !e && null != a.$ngfBlobUrl) return d.emptyPromise(e ? a.$ngfDataUrl : a.$ngfBlobUrl, a);var f = e ? a.$$ngfDataUrlPromise : a.$$ngfBlobUrlPromise;if (f) return f;var g = c.defer();return b(function () {
	        if (window.FileReader && a && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 8") || a.size < 2e4) && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 9") || a.size < 4e6)) {
	          var c = window.URL || window.webkitURL;if (c && c.createObjectURL && !e) {
	            var f;try {
	              f = c.createObjectURL(a);
	            } catch (h) {
	              return void b(function () {
	                a.$ngfBlobUrl = "", g.reject();
	              });
	            }b(function () {
	              if (a.$ngfBlobUrl = f, f) {
	                g.resolve(f, a), d.blobUrls = d.blobUrls || [], d.blobUrlsTotalSize = d.blobUrlsTotalSize || 0, d.blobUrls.push({ url: f, size: a.size }), d.blobUrlsTotalSize += a.size || 0;for (var b = d.defaults.blobUrlsMaxMemory || 268435456, e = d.defaults.blobUrlsMaxQueueSize || 200; (d.blobUrlsTotalSize > b || d.blobUrls.length > e) && d.blobUrls.length > 1;) {
	                  var h = d.blobUrls.splice(0, 1)[0];c.revokeObjectURL(h.url), d.blobUrlsTotalSize -= h.size;
	                }
	              }
	            });
	          } else {
	            var i = new FileReader();i.onload = function (c) {
	              b(function () {
	                a.$ngfDataUrl = c.target.result, g.resolve(c.target.result, a), b(function () {
	                  delete a.$ngfDataUrl;
	                }, 1e3);
	              });
	            }, i.onerror = function () {
	              b(function () {
	                a.$ngfDataUrl = "", g.reject();
	              });
	            }, i.readAsDataURL(a);
	          }
	        } else b(function () {
	          a[e ? "$ngfDataUrl" : "$ngfBlobUrl"] = "", g.reject();
	        });
	      }), f = e ? a.$$ngfDataUrlPromise = g.promise : a.$$ngfBlobUrlPromise = g.promise, f["finally"](function () {
	        delete a[e ? "$$ngfDataUrlPromise" : "$$ngfBlobUrlPromise"];
	      }), f;
	    }, d;
	  }]), ngFileUpload.directive("ngfSrc", ["Upload", "$timeout", function (a, c) {
	    return { restrict: "AE", link: function link(d, e, f) {
	        b(a, c, d, e, f, "ngfSrc", a.attrGetter("ngfResize", f, d), !1);
	      } };
	  }]), ngFileUpload.directive("ngfBackground", ["Upload", "$timeout", function (a, c) {
	    return { restrict: "AE", link: function link(d, e, f) {
	        b(a, c, d, e, f, "ngfBackground", a.attrGetter("ngfResize", f, d), !0);
	      } };
	  }]), ngFileUpload.directive("ngfThumbnail", ["Upload", "$timeout", function (a, c) {
	    return { restrict: "AE", link: function link(d, e, f) {
	        var g = a.attrGetter("ngfSize", f, d);b(a, c, d, e, f, "ngfThumbnail", g, a.attrGetter("ngfAsBackground", f, d));
	      } };
	  }]), ngFileUpload.config(["$compileProvider", function (a) {
	    a.imgSrcSanitizationWhitelist && a.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/), a.aHrefSanitizationWhitelist && a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/);
	  }]), ngFileUpload.filter("ngfDataUrl", ["UploadDataUrl", "$sce", function (a, b) {
	    return function (c, d, e) {
	      if (angular.isString(c)) return b.trustAsResourceUrl(c);var f = c && ((d ? c.$ngfDataUrl : c.$ngfBlobUrl) || c.$ngfDataUrl);return c && !f ? (!c.$ngfDataUrlFilterInProgress && angular.isObject(c) && (c.$ngfDataUrlFilterInProgress = !0, a.dataUrl(c, d)), "") : (c && delete c.$ngfDataUrlFilterInProgress, (c && f ? e ? b.trustAsResourceUrl(f) : f : c) || "");
	    };
	  }]);
	}(), ngFileUpload.service("UploadValidate", ["UploadDataUrl", "$q", "$timeout", function (a, b, c) {
	  function d(a) {
	    var b = "",
	        c = [];if (a.length > 2 && "/" === a[0] && "/" === a[a.length - 1]) b = a.substring(1, a.length - 1);else {
	      var e = a.split(",");if (e.length > 1) for (var f = 0; f < e.length; f++) {
	        var g = d(e[f]);g.regexp ? (b += "(" + g.regexp + ")", f < e.length - 1 && (b += "|")) : c = c.concat(g.excludes);
	      } else 0 === a.indexOf("!") ? c.push("^((?!" + d(a.substring(1)).regexp + ").)*$") : (0 === a.indexOf(".") && (a = "*" + a), b = "^" + a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$", b = b.replace(/\\\*/g, ".*").replace(/\\\?/g, "."));
	    }return { regexp: b, excludes: c };
	  }function e(a, b) {
	    null == b || a.$dirty || (a.$setDirty ? a.$setDirty() : a.$dirty = !0);
	  }var f = a;return f.validatePattern = function (a, b) {
	    if (!b) return !0;var c = d(b),
	        e = !0;if (c.regexp && c.regexp.length) {
	      var f = new RegExp(c.regexp, "i");e = null != a.type && f.test(a.type) || null != a.name && f.test(a.name);
	    }for (var g = c.excludes.length; g--;) {
	      var h = new RegExp(c.excludes[g], "i");e = e && (null == a.type || h.test(a.type)) && (null == a.name || h.test(a.name));
	    }return e;
	  }, f.ratioToFloat = function (a) {
	    var b = a.toString(),
	        c = b.search(/[x:]/i);return b = c > -1 ? parseFloat(b.substring(0, c)) / parseFloat(b.substring(c + 1)) : parseFloat(b);
	  }, f.registerModelChangeValidator = function (a, b, c) {
	    a && a.$formatters.push(function (d) {
	      a.$dirty && (d && !angular.isArray(d) && (d = [d]), f.validate(d, 0, a, b, c).then(function () {
	        f.applyModelValidation(a, d);
	      }));
	    });
	  }, f.applyModelValidation = function (a, b) {
	    e(a, b), angular.forEach(a.$ngfValidations, function (b) {
	      a.$setValidity(b.name, b.valid);
	    });
	  }, f.getValidationAttr = function (a, b, c, d, e) {
	    var g = "ngf" + c[0].toUpperCase() + c.substr(1),
	        h = f.attrGetter(g, a, b, { $file: e });if (null == h && (h = f.attrGetter("ngfValidate", a, b, { $file: e }))) {
	      var i = (d || c).split(".");h = h[i[0]], i.length > 1 && (h = h && h[i[1]]);
	    }return h;
	  }, f.validate = function (a, c, d, e, g) {
	    function h(b, c, h) {
	      if (a) {
	        for (var i = a.length, j = null; i--;) {
	          var k = a[i];if (k) {
	            var l = f.getValidationAttr(e, g, b, c, k);null != l && (h(k, l, i) || (k.$error = b, (k.$errorMessages = k.$errorMessages || {})[b] = !0, k.$errorParam = l, a.splice(i, 1), j = !1));
	          }
	        }null !== j && d.$ngfValidations.push({ name: b, valid: j });
	      }
	    }function i(c, h, i, k, l) {
	      function m(a, b, d) {
	        null != d ? k(b, d).then(function (e) {
	          l(e, d) ? a.resolve() : (b.$error = c, (b.$errorMessages = b.$errorMessages || {})[c] = !0, b.$errorParam = d, a.reject());
	        }, function () {
	          j("ngfValidateForce", { $file: b }) ? (b.$error = c, (b.$errorMessages = b.$errorMessages || {})[c] = !0, b.$errorParam = d, a.reject()) : a.resolve();
	        }) : a.resolve();
	      }var n = [f.emptyPromise()];return a ? (a = void 0 === a.length ? [a] : a, angular.forEach(a, function (a) {
	        var d = b.defer();return n.push(d.promise), !i || null != a.type && 0 === a.type.search(i) ? void ("dimensions" === c && null != f.attrGetter("ngfDimensions", e) ? f.imageDimensions(a).then(function (b) {
	          m(d, a, j("ngfDimensions", { $file: a, $width: b.width, $height: b.height }));
	        }, function () {
	          d.reject();
	        }) : "duration" === c && null != f.attrGetter("ngfDuration", e) ? f.mediaDuration(a).then(function (b) {
	          m(d, a, j("ngfDuration", { $file: a, $duration: b }));
	        }, function () {
	          d.reject();
	        }) : m(d, a, f.getValidationAttr(e, g, c, h, a))) : void d.resolve();
	      }), b.all(n).then(function () {
	        d.$ngfValidations.push({ name: c, valid: !0 });
	      }, function () {
	        d.$ngfValidations.push({ name: c, valid: !1 });
	      })) : void 0;
	    }d = d || {}, d.$ngfValidations = d.$ngfValidations || [], angular.forEach(d.$ngfValidations, function (a) {
	      a.valid = !0;
	    });var j = function j(a, b) {
	      return f.attrGetter(a, e, g, b);
	    };if (null == a || 0 === a.length) return f.emptyPromise(d);a = void 0 === a.length ? [a] : a.slice(0), h("maxFiles", null, function (a, b, d) {
	      return b > c + d;
	    }), h("pattern", null, f.validatePattern), h("minSize", "size.min", function (a, b) {
	      return a.size + .1 >= f.translateScalars(b);
	    }), h("maxSize", "size.max", function (a, b) {
	      return a.size - .1 <= f.translateScalars(b);
	    });var k = 0;if (h("maxTotalSize", null, function (b, c) {
	      return k += b.size, k > f.translateScalars(c) ? (a.splice(0, a.length), !1) : !0;
	    }), h("validateFn", null, function (a, b) {
	      return b === !0 || null === b || "" === b;
	    }), !a.length) return f.emptyPromise(d, d.$ngfValidations);var l = b.defer(),
	        m = [];return m.push(f.happyPromise(i("maxHeight", "height.max", /image/, this.imageDimensions, function (a, b) {
	      return a.height <= b;
	    }))), m.push(f.happyPromise(i("minHeight", "height.min", /image/, this.imageDimensions, function (a, b) {
	      return a.height >= b;
	    }))), m.push(f.happyPromise(i("maxWidth", "width.max", /image/, this.imageDimensions, function (a, b) {
	      return a.width <= b;
	    }))), m.push(f.happyPromise(i("minWidth", "width.min", /image/, this.imageDimensions, function (a, b) {
	      return a.width >= b;
	    }))), m.push(f.happyPromise(i("dimensions", null, /image/, function (a, b) {
	      return f.emptyPromise(b);
	    }, function (a) {
	      return a;
	    }))), m.push(f.happyPromise(i("ratio", null, /image/, this.imageDimensions, function (a, b) {
	      for (var c = b.toString().split(","), d = !1, e = 0; e < c.length; e++) {
	        Math.abs(a.width / a.height - f.ratioToFloat(c[e])) < 1e-4 && (d = !0);
	      }return d;
	    }))), m.push(f.happyPromise(i("maxRatio", "ratio.max", /image/, this.imageDimensions, function (a, b) {
	      return a.width / a.height - f.ratioToFloat(b) < 1e-4;
	    }))), m.push(f.happyPromise(i("minRatio", "ratio.min", /image/, this.imageDimensions, function (a, b) {
	      return a.width / a.height - f.ratioToFloat(b) > -1e-4;
	    }))), m.push(f.happyPromise(i("maxDuration", "duration.max", /audio|video/, this.mediaDuration, function (a, b) {
	      return a <= f.translateScalars(b);
	    }))), m.push(f.happyPromise(i("minDuration", "duration.min", /audio|video/, this.mediaDuration, function (a, b) {
	      return a >= f.translateScalars(b);
	    }))), m.push(f.happyPromise(i("duration", null, /audio|video/, function (a, b) {
	      return f.emptyPromise(b);
	    }, function (a) {
	      return a;
	    }))), m.push(f.happyPromise(i("validateAsyncFn", null, null, function (a, b) {
	      return b;
	    }, function (a) {
	      return a === !0 || null === a || "" === a;
	    }))), b.all(m).then(function () {
	      l.resolve(d, d.$ngfValidations);
	    });
	  }, f.imageDimensions = function (a) {
	    if (a.$ngfWidth && a.$ngfHeight) {
	      var d = b.defer();return c(function () {
	        d.resolve({ width: a.$ngfWidth, height: a.$ngfHeight });
	      }), d.promise;
	    }if (a.$ngfDimensionPromise) return a.$ngfDimensionPromise;var e = b.defer();return c(function () {
	      return 0 !== a.type.indexOf("image") ? void e.reject("not image") : void f.dataUrl(a).then(function (b) {
	        function d() {
	          var b = h[0].clientWidth,
	              c = h[0].clientHeight;h.remove(), a.$ngfWidth = b, a.$ngfHeight = c, e.resolve({ width: b, height: c });
	        }function f() {
	          h.remove(), e.reject("load error");
	        }function g() {
	          c(function () {
	            h[0].parentNode && (h[0].clientWidth ? d() : i > 10 ? f() : g());
	          }, 1e3);
	        }var h = angular.element("<img>").attr("src", b).css("visibility", "hidden").css("position", "fixed").css("max-width", "none !important").css("max-height", "none !important");h.on("load", d), h.on("error", f);var i = 0;g(), angular.element(document.getElementsByTagName("body")[0]).append(h);
	      }, function () {
	        e.reject("load error");
	      });
	    }), a.$ngfDimensionPromise = e.promise, a.$ngfDimensionPromise["finally"](function () {
	      delete a.$ngfDimensionPromise;
	    }), a.$ngfDimensionPromise;
	  }, f.mediaDuration = function (a) {
	    if (a.$ngfDuration) {
	      var d = b.defer();return c(function () {
	        d.resolve(a.$ngfDuration);
	      }), d.promise;
	    }if (a.$ngfDurationPromise) return a.$ngfDurationPromise;var e = b.defer();return c(function () {
	      return 0 !== a.type.indexOf("audio") && 0 !== a.type.indexOf("video") ? void e.reject("not media") : void f.dataUrl(a).then(function (b) {
	        function d() {
	          var b = h[0].duration;a.$ngfDuration = b, h.remove(), e.resolve(b);
	        }function f() {
	          h.remove(), e.reject("load error");
	        }function g() {
	          c(function () {
	            h[0].parentNode && (h[0].duration ? d() : i > 10 ? f() : g());
	          }, 1e3);
	        }var h = angular.element(0 === a.type.indexOf("audio") ? "<audio>" : "<video>").attr("src", b).css("visibility", "none").css("position", "fixed");h.on("loadedmetadata", d), h.on("error", f);var i = 0;g(), angular.element(document.body).append(h);
	      }, function () {
	        e.reject("load error");
	      });
	    }), a.$ngfDurationPromise = e.promise, a.$ngfDurationPromise["finally"](function () {
	      delete a.$ngfDurationPromise;
	    }), a.$ngfDurationPromise;
	  }, f;
	}]), ngFileUpload.service("UploadResize", ["UploadValidate", "$q", function (a, b) {
	  var c = a,
	      d = function d(a, b, c, _d, e) {
	    var f = e ? Math.max(c / a, _d / b) : Math.min(c / a, _d / b);return { width: a * f, height: b * f, marginX: a * f - c, marginY: b * f - _d };
	  },
	      e = function e(a, _e, f, g, h, i, j, k) {
	    var l = b.defer(),
	        m = document.createElement("canvas"),
	        n = document.createElement("img");return n.onload = function () {
	      if (null != k && k(n.width, n.height) === !1) return void l.reject("resizeIf");try {
	        if (i) {
	          var a = c.ratioToFloat(i),
	              b = n.width / n.height;a > b ? (_e = n.width, f = _e / a) : (f = n.height, _e = f * a);
	        }_e || (_e = n.width), f || (f = n.height);var o = d(n.width, n.height, _e, f, j);m.width = Math.min(o.width, _e), m.height = Math.min(o.height, f);var p = m.getContext("2d");p.drawImage(n, Math.min(0, -o.marginX / 2), Math.min(0, -o.marginY / 2), o.width, o.height), l.resolve(m.toDataURL(h || "image/WebP", g || .934));
	      } catch (q) {
	        l.reject(q);
	      }
	    }, n.onerror = function () {
	      l.reject();
	    }, n.src = a, l.promise;
	  };return c.dataUrltoBlob = function (a, b, c) {
	    for (var d = a.split(","), e = d[0].match(/:(.*?);/)[1], f = atob(d[1]), g = f.length, h = new Uint8Array(g); g--;) {
	      h[g] = f.charCodeAt(g);
	    }var i = new window.Blob([h], { type: e });return i.name = b, i.$ngfOrigSize = c, i;
	  }, c.isResizeSupported = function () {
	    var a = document.createElement("canvas");return window.atob && a.getContext && a.getContext("2d") && window.Blob;
	  }, c.isResizeSupported() && Object.defineProperty(window.Blob.prototype, "name", { get: function get() {
	      return this.$ngfName;
	    }, set: function set(a) {
	      this.$ngfName = a;
	    }, configurable: !0 }), c.resize = function (a, d, f, g, h, i, j, k, l) {
	    if (0 !== a.type.indexOf("image")) return c.emptyPromise(a);var m = b.defer();return c.dataUrl(a, !0).then(function (b) {
	      e(b, d, f, g, h || a.type, i, j, k).then(function (d) {
	        if ("image/jpeg" === a.type && l) try {
	          d = c.restoreExif(b, d);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 1);
	        }try {
	          var f = c.dataUrltoBlob(d, a.name, a.size);m.resolve(f);
	        } catch (e) {
	          m.reject(e);
	        }
	      }, function (b) {
	        "resizeIf" === b && m.resolve(a), m.reject(b);
	      });
	    }, function (a) {
	      m.reject(a);
	    }), m.promise;
	  }, c;
	}]), function () {
	  function a(a, c, d, e, f, g, h, i, j, k) {
	    function l() {
	      return c.attr("disabled") || r("ngfDropDisabled", a);
	    }function m(b, c) {
	      i.updateModel(e, d, a, r("ngfChange") || r("ngfDrop"), b, c);
	    }function n(b, c) {
	      if (!i.shouldUpdateOn(b, d, a) || !c) return i.rejectPromise([]);var e = [];c.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi, function (a, b, c) {
	        e.push(c);
	      });var f = [],
	          g = [];if (e.length) {
	        angular.forEach(e, function (a) {
	          f.push(i.urlToBlob(a).then(function (a) {
	            g.push(a);
	          }));
	        });var h = k.defer();return k.all(f).then(function () {
	          h.resolve(g);
	        }, function (a) {
	          h.reject(a);
	        }), h.promise;
	      }return i.emptyPromise();
	    }function o(a, b, c, d) {
	      var e = r("ngfDragOverClass", a, { $event: c }),
	          f = "dragover";if (angular.isString(e)) f = e;else if (e && (e.delay && (v = e.delay), e.accept || e.reject)) {
	        var g = c.dataTransfer.items;if (null != g && g.length) for (var h = e.pattern || r("ngfPattern", a, { $event: c }), j = g.length; j--;) {
	          if (!i.validatePattern(g[j], h)) {
	            f = e.reject;break;
	          }f = e.accept;
	        } else f = e.accept;
	      }d(f);
	    }function p(b, c, e, f) {
	      function g(a, b) {
	        var c = k.defer();if (null != a) if (a.isDirectory) {
	          var d = [i.emptyPromise()];if (m) {
	            var e = { type: "directory" };e.name = e.path = (b || "") + a.name + a.name, n.push(e);
	          }var f = a.createReader(),
	              h = [],
	              p = function p() {
	            f.readEntries(function (e) {
	              try {
	                e.length ? (h = h.concat(Array.prototype.slice.call(e || [], 0)), p()) : (angular.forEach(h.slice(0), function (c) {
	                  n.length <= j && l >= o && d.push(g(c, (b ? b : "") + a.name + "/"));
	                }), k.all(d).then(function () {
	                  c.resolve();
	                }, function (a) {
	                  c.reject(a);
	                }));
	              } catch (f) {
	                c.reject(f);
	              }
	            }, function (a) {
	              c.reject(a);
	            });
	          };p();
	        } else a.file(function (a) {
	          try {
	            a.path = (b ? b : "") + a.name, m && (a = i.rename(a, a.path)), n.push(a), o += a.size, c.resolve();
	          } catch (d) {
	            c.reject(d);
	          }
	        }, function (a) {
	          c.reject(a);
	        });return c.promise;
	      }var j = i.getValidationAttr(d, a, "maxFiles") || Number.MAX_VALUE,
	          l = i.getValidationAttr(d, a, "maxTotalSize") || Number.MAX_VALUE,
	          m = r("ngfIncludeDir", a),
	          n = [],
	          o = 0,
	          p = [i.emptyPromise()];if (b && b.length > 0 && "file" !== h.protocol()) for (var q = 0; q < b.length; q++) {
	        if (b[q].webkitGetAsEntry && b[q].webkitGetAsEntry() && b[q].webkitGetAsEntry().isDirectory) {
	          var s = b[q].webkitGetAsEntry();if (s.isDirectory && !e) continue;null != s && p.push(g(s));
	        } else {
	          var t = b[q].getAsFile();null != t && (n.push(t), o += t.size);
	        }if (n.length > j || o > l || !f && n.length > 0) break;
	      } else if (null != c) for (var u = 0; u < c.length; u++) {
	        var v = c.item(u);if ((v.type || v.size > 0) && (n.push(v), o += v.size), n.length > j || o > l || !f && n.length > 0) break;
	      }var w = k.defer();return k.all(p).then(function () {
	        if (f || m || !n.length) w.resolve(n);else {
	          for (var a = 0; n[a] && "directory" === n[a].type;) {
	            a++;
	          }w.resolve([n[a]]);
	        }
	      }, function (a) {
	        w.reject(a);
	      }), w.promise;
	    }var q = b(),
	        r = function r(a, b, c) {
	      return i.attrGetter(a, d, b, c);
	    };if (r("dropAvailable") && g(function () {
	      a[r("dropAvailable")] ? a[r("dropAvailable")].value = q : a[r("dropAvailable")] = q;
	    }), !q) return void (r("ngfHideOnDropNotAvailable", a) === !0 && c.css("display", "none"));null == r("ngfSelect") && i.registerModelChangeValidator(e, d, a);var s,
	        t = null,
	        u = f(r("ngfStopPropagation")),
	        v = 1;c[0].addEventListener("dragover", function (b) {
	      if (!l() && i.shouldUpdateOn("drop", d, a)) {
	        if (b.preventDefault(), u(a) && b.stopPropagation(), navigator.userAgent.indexOf("Chrome") > -1) {
	          var e = b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect = "move" === e || "linkMove" === e ? "move" : "copy";
	        }g.cancel(t), s || (s = "C", o(a, d, b, function (d) {
	          s = d, c.addClass(s), r("ngfDrag", a, { $isDragging: !0, $class: s, $event: b });
	        }));
	      }
	    }, !1), c[0].addEventListener("dragenter", function (b) {
	      !l() && i.shouldUpdateOn("drop", d, a) && (b.preventDefault(), u(a) && b.stopPropagation());
	    }, !1), c[0].addEventListener("dragleave", function (b) {
	      !l() && i.shouldUpdateOn("drop", d, a) && (b.preventDefault(), u(a) && b.stopPropagation(), t = g(function () {
	        s && c.removeClass(s), s = null, r("ngfDrag", a, { $isDragging: !1, $event: b });
	      }, v || 100));
	    }, !1), c[0].addEventListener("drop", function (b) {
	      if (!l() && i.shouldUpdateOn("drop", d, a)) {
	        b.preventDefault(), u(a) && b.stopPropagation(), s && c.removeClass(s), s = null;var e,
	            f = b.dataTransfer.items;try {
	          e = b.dataTransfer && b.dataTransfer.getData && b.dataTransfer.getData("text/html");
	        } catch (g) {}p(f, b.dataTransfer.files, r("ngfAllowDir", a) !== !1, r("multiple") || r("ngfMultiple", a)).then(function (a) {
	          a.length ? m(a, b) : n("dropUrl", e).then(function (a) {
	            m(a, b);
	          });
	        });
	      }
	    }, !1), c[0].addEventListener("paste", function (b) {
	      if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && r("ngfEnableFirefoxPaste", a) && b.preventDefault(), !l() && i.shouldUpdateOn("paste", d, a)) {
	        var c = [],
	            e = b.clipboardData || b.originalEvent.clipboardData;if (e && e.items) for (var f = 0; f < e.items.length; f++) {
	          -1 !== e.items[f].type.indexOf("image") && c.push(e.items[f].getAsFile());
	        }c.length ? m(c, b) : n("pasteUrl", e).then(function (a) {
	          m(a, b);
	        });
	      }
	    }, !1), navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && r("ngfEnableFirefoxPaste", a) && (c.attr("contenteditable", !0), c.on("keypress", function (a) {
	      a.metaKey || a.ctrlKey || a.preventDefault();
	    }));
	  }function b() {
	    var a = document.createElement("div");return "draggable" in a && "ondrop" in a && !/Edge\/12./i.test(navigator.userAgent);
	  }ngFileUpload.directive("ngfDrop", ["$parse", "$timeout", "$location", "Upload", "$http", "$q", function (b, c, d, e, f, g) {
	    return { restrict: "AEC", require: "?ngModel", link: function link(h, i, j, k) {
	        a(h, i, j, k, b, c, d, e, f, g);
	      } };
	  }]), ngFileUpload.directive("ngfNoFileDrop", function () {
	    return function (a, c) {
	      b() && c.css("display", "none");
	    };
	  }), ngFileUpload.directive("ngfDropAvailable", ["$parse", "$timeout", "Upload", function (a, c, d) {
	    return function (e, f, g) {
	      if (b()) {
	        var h = a(d.attrGetter("ngfDropAvailable", g));c(function () {
	          h(e), h.assign && h.assign(e, !0);
	        });
	      }
	    };
	  }]);
	}(), ngFileUpload.service("UploadExif", ["UploadResize", "$q", function (a, b) {
	  function c(a, b, c, d) {
	    switch (b) {case 2:
	        return a.transform(-1, 0, 0, 1, c, 0);case 3:
	        return a.transform(-1, 0, 0, -1, c, d);case 4:
	        return a.transform(1, 0, 0, -1, 0, d);case 5:
	        return a.transform(0, 1, 1, 0, 0, 0);case 6:
	        return a.transform(0, 1, -1, 0, d, 0);case 7:
	        return a.transform(0, -1, -1, 0, d, c);case 8:
	        return a.transform(0, -1, 1, 0, 0, c);}
	  }function d(a) {
	    for (var b = "", c = new Uint8Array(a), d = c.byteLength, e = 0; d > e; e++) {
	      b += String.fromCharCode(c[e]);
	    }return window.btoa(b);
	  }var e = a;return e.isExifSupported = function () {
	    return window.FileReader && new FileReader().readAsArrayBuffer && e.isResizeSupported();
	  }, e.readOrientation = function (a) {
	    var c = b.defer(),
	        d = new FileReader(),
	        e = a.slice ? a.slice(0, 65536) : a;return d.readAsArrayBuffer(e), d.onerror = function (a) {
	      return c.reject(a);
	    }, d.onload = function (a) {
	      var b = { orientation: 1 },
	          d = new DataView(this.result);if (65496 !== d.getUint16(0, !1)) return c.resolve(b);for (var e = d.byteLength, f = 2; e > f;) {
	        var g = d.getUint16(f, !1);if (f += 2, 65505 === g) {
	          if (1165519206 !== d.getUint32(f += 2, !1)) return c.resolve(b);var h = 18761 === d.getUint16(f += 6, !1);f += d.getUint32(f + 4, h);var i = d.getUint16(f, h);f += 2;for (var j = 0; i > j; j++) {
	            if (274 === d.getUint16(f + 12 * j, h)) {
	              var k = d.getUint16(f + 12 * j + 8, h);return k >= 2 && 8 >= k && (d.setUint16(f + 12 * j + 8, 1, h), b.fixedArrayBuffer = a.target.result), b.orientation = k, c.resolve(b);
	            }
	          }
	        } else {
	          if (65280 !== (65280 & g)) break;f += d.getUint16(f, !1);
	        }
	      }return c.resolve(b);
	    }, c.promise;
	  }, e.applyExifRotation = function (a) {
	    if (0 !== a.type.indexOf("image/jpeg")) return e.emptyPromise(a);var f = b.defer();return e.readOrientation(a).then(function (b) {
	      return b.orientation < 2 || b.orientation > 8 ? f.resolve(a) : void e.dataUrl(a, !0).then(function (g) {
	        var h = document.createElement("canvas"),
	            i = document.createElement("img");i.onload = function () {
	          try {
	            h.width = b.orientation > 4 ? i.height : i.width, h.height = b.orientation > 4 ? i.width : i.height;var g = h.getContext("2d");c(g, b.orientation, i.width, i.height), g.drawImage(i, 0, 0);var j = h.toDataURL(a.type || "image/WebP", .934);j = e.restoreExif(d(b.fixedArrayBuffer), j);var k = e.dataUrltoBlob(j, a.name);f.resolve(k);
	          } catch (l) {
	            return f.reject(l);
	          }
	        }, i.onerror = function () {
	          f.reject();
	        }, i.src = g;
	      }, function (a) {
	        f.reject(a);
	      });
	    }, function (a) {
	      f.reject(a);
	    }), f.promise;
	  }, e.restoreExif = function (a, b) {
	    var c = {};return c.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c.encode64 = function (a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g = "",
	          h = "",
	          i = "",
	          j = 0;do {
	        b = a[j++], c = a[j++], h = a[j++], d = b >> 2, e = (3 & b) << 4 | c >> 4, f = (15 & c) << 2 | h >> 6, i = 63 & h, isNaN(c) ? f = i = 64 : isNaN(h) && (i = 64), g = g + this.KEY_STR.charAt(d) + this.KEY_STR.charAt(e) + this.KEY_STR.charAt(f) + this.KEY_STR.charAt(i), b = c = h = "", d = e = f = i = "";
	      } while (j < a.length);return g;
	    }, c.restore = function (a, b) {
	      a.match("data:image/jpeg;base64,") && (a = a.replace("data:image/jpeg;base64,", ""));var c = this.decode64(a),
	          d = this.slice2Segments(c),
	          e = this.exifManipulation(b, d);return "data:image/jpeg;base64," + this.encode64(e);
	    }, c.exifManipulation = function (a, b) {
	      var c = this.getExifArray(b),
	          d = this.insertExif(a, c);return new Uint8Array(d);
	    }, c.getExifArray = function (a) {
	      for (var b, c = 0; c < a.length; c++) {
	        if (b = a[c], 255 === b[0] & 225 === b[1]) return b;
	      }return [];
	    }, c.insertExif = function (a, b) {
	      var c = a.replace("data:image/jpeg;base64,", ""),
	          d = this.decode64(c),
	          e = d.indexOf(255, 3),
	          f = d.slice(0, e),
	          g = d.slice(e),
	          h = f;return h = h.concat(b), h = h.concat(g);
	    }, c.slice2Segments = function (a) {
	      for (var b = 0, c = [];;) {
	        if (255 === a[b] & 218 === a[b + 1]) break;if (255 === a[b] & 216 === a[b + 1]) b += 2;else {
	          var d = 256 * a[b + 2] + a[b + 3],
	              e = b + d + 2,
	              f = a.slice(b, e);c.push(f), b = e;
	        }if (b > a.length) break;
	      }return c;
	    }, c.decode64 = function (a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g = "",
	          h = "",
	          i = 0,
	          j = [],
	          k = /[^A-Za-z0-9\+\/\=]/g;k.exec(a) && console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."), a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");do {
	        d = this.KEY_STR.indexOf(a.charAt(i++)), e = this.KEY_STR.indexOf(a.charAt(i++)), f = this.KEY_STR.indexOf(a.charAt(i++)), h = this.KEY_STR.indexOf(a.charAt(i++)), b = d << 2 | e >> 4, c = (15 & e) << 4 | f >> 2, g = (3 & f) << 6 | h, j.push(b), 64 !== f && j.push(c), 64 !== h && j.push(g), b = c = g = "", d = e = f = h = "";
	      } while (i < a.length);return j;
	    }, c.restore(a, b);
	  }, e;
	}]);

/***/ },

/***/ 36:
/***/ function(module, exports) {

	"use strict";

	!function () {
	  "use strict";
	  angular.module("angularjs-datetime-picker", []);var e = function e(_e) {
	    "string" == typeof _e && (_e = new Date(_e));var t = new Date(_e.getFullYear(), 0, 1),
	        a = new Date(_e.getFullYear(), 6, 1),
	        n = Math.max(t.getTimezoneOffset(), a.getTimezoneOffset()),
	        l = _e.getTimezoneOffset() < n,
	        i = l ? n - 60 : n,
	        r = i >= 0 ? "-" : "+";return r + ("0" + i / 60).slice(-2) + ":" + ("0" + i % 60).slice(-2);
	  },
	      t = function t(e, _t, a) {
	    var n = a("DatetimePickerCtrl");return { open: function open(e) {
	        n.openDatetimePicker(e);
	      }, close: function close() {
	        n.closeDatetimePicker();
	      } };
	  };t.$inject = ["$compile", "$document", "$controller"], angular.module("angularjs-datetime-picker").factory("DatetimePicker", t);var a = function a(e, t) {
	    var a,
	        n = this,
	        l = function l(e) {
	      e && e.remove(), t[0].body.removeEventListener("click", n.closeDatetimePicker);
	    };this.openDatetimePicker = function (n) {
	      this.closeDatetimePicker();var l = angular.element("<div datetime-picker-popup ng-cloak></div>");n.dateFormat && l.attr("date-format", n.dateFormat), n.ngModel && l.attr("ng-model", n.ngModel), n.year && l.attr("year", parseInt(n.year)), n.month && l.attr("month", parseInt(n.month)), n.day && l.attr("day", parseInt(n.day)), n.hour && l.attr("hour", parseInt(n.hour)), n.minute && l.attr("minute", parseInt(n.minute)), ("" === n.dateOnly || n.dateOnly === !0) && l.attr("date-only", "true"), "false" === n.closeOnSelect && l.attr("close-on-select", "false");var i = n.triggerEl;n.scope = n.scope || angular.element(i).scope(), a = e(l)(n.scope)[0], a.triggerEl = n.triggerEl, t[0].body.appendChild(a);var r = i.getBoundingClientRect();n.scope.$apply();var o = a.getBoundingClientRect();a.style.position = "absolute", a.style.left = r.width > o.width ? r.left + r.width - o.width + window.scrollX + "px" : r.left + window.scrollX + "px", a.style.top = r.top < 300 || window.innerHeight - r.bottom > 300 ? r.bottom + window.scrollY + "px" : r.top - o.height + window.scrollY + "px", t[0].body.addEventListener("click", this.closeDatetimePicker);
	    }, this.closeDatetimePicker = function (e) {
	      var a = e && e.target,
	          n = t[0].querySelector("div[datetime-picker-popup]");e && a ? a.hasAttribute("datetime-picker") || n && n.contains(a) || l(n) : l(n);
	    };
	  };a.$inject = ["$compile", "$document"], angular.module("angularjs-datetime-picker").controller("DatetimePickerCtrl", a);var n = ['<div class="angularjs-datetime-picker">', '  <div class="adp-month">', '    <button type="button" class="adp-prev" ng-click="addMonth(-1)">&laquo;</button>', '    <span title="{{months[mv.month].fullName}}">{{months[mv.month].shortName}}</span> {{mv.year}}', '    <button type="button" class="adp-next" ng-click="addMonth(1)">&raquo;</button>', "  </div>", '  <div class="adp-days" ng-click="setDate($event)">', '    <div class="adp-day-of-week" ng-repeat="dayOfWeek in ::daysOfWeek" title="{{dayOfWeek.fullName}}">{{::dayOfWeek.firstLetter}}</div>', '    <div class="adp-day" ng-show="mv.leadingDays.length < 7" ng-repeat="day in mv.leadingDays">{{::day}}</div>', '    <div class="adp-day selectable" ng-repeat="day in mv.days" ', "      today=\"{{today}}\" d2=\"{{mv.year + '-' + (mv.month + 1) + '-' + day}}\"", '      ng-class="{', "        selected: (day == selectedDay),", "        today: (today == (mv.year + '-' + (mv.month + 1) + '-' + day)),", "        weekend: (mv.leadingDays.length + day)%7 == 1 || (mv.leadingDays.length + day)%7 == 0", '      }">', "      {{::day}}", "    </div>", '    <div class="adp-day" ng-show="mv.trailingDays.length < 7" ng-repeat="day in mv.trailingDays">{{::day}}</div>', "  </div>", '  <div class="adp-days" id="adp-time"> ', '    <label class="timeLabel">Time:</label> <span class="timeValue">{{("0"+inputHour).slice(-2)}} : {{("0"+inputMinute).slice(-2)}}</span><br/>', "  </div> ", "</div>"].join("\n"),
	      l = function l(t, a) {
	    var l,
	        i,
	        r,
	        o,
	        d = function d() {
	      l = [], i = [], r = [], o = 0;for (var e = 1; 31 >= e; e++) {
	        l.push(e);
	      }for (var e = 0; 12 > e; e++) {
	        i.push({ fullName: t.DATETIME_FORMATS.MONTH[e], shortName: t.DATETIME_FORMATS.SHORTMONTH[e] });
	      }for (var e = 0; 7 > e; e++) {
	        var a = t.DATETIME_FORMATS.DAY[(e + o) % 7];r.push({ fullName: a, firstLetter: a.substr(0, 1) });
	      }o = 0;
	    },
	        s = function s(e, t) {
	      t > 11 ? e++ : 0 > t && e--, t = (t + 12) % 12;var a = new Date(e, t, 1),
	          n = new Date(e, t + 1, 0),
	          i = new Date(e, t, 0),
	          r = n.getDate(),
	          d = i.getDate(),
	          s = a.getDay(),
	          c = (s - o + 7) % 7 || 7,
	          u = l.slice(0, 42 - (c + r));return u.length > 7 && (u = u.slice(0, u.length - 7)), { year: e, month: t, days: l.slice(0, r), leadingDays: l.slice(-c - (31 - d), d), trailingDays: u };
	    },
	        c = function c(t, n, l, o) {
	      d();var c = l.dateFormat || "short";t.months = i, t.daysOfWeek = r, t.inputHour, t.inputMinute, t.dateOnly === !0 && (n[0].querySelector("#adp-time").style.display = "none"), t.$applyAsync(function () {
	        if (o.triggerEl = angular.element(n[0].triggerEl), l.ngModel) {
	          var i = "" + o.triggerEl.scope().$eval(l.ngModel);if (i) {
	            i.match(/[0-9]{2}:/) || (i += " 00:00:00"), i = i.replace(/([0-9]{2}-[0-9]{2})-([0-9]{4})/, "$2-$1"), i = i.replace(/([\/-][0-9]{2,4})\ ([0-9]{2}\:[0-9]{2}\:)/, "$1T$2"), i = i.replace(/EDT|EST|CDT|CST|MDT|PDT|PST|UT|GMT/g, ""), i = i.replace(/\s*\(\)\s*/, ""), i = i.replace(/[\-\+][0-9]{2}:?[0-9]{2}$/, ""), i += e(i);var r = new Date(i);t.selectedDate = new Date(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds());
	          }
	        }if (!t.selectedDate || isNaN(t.selectedDate.getTime())) {
	          var d = new Date(),
	              c = t.year || d.getFullYear(),
	              u = t.month ? t.month - 1 : d.getMonth(),
	              m = t.day || d.getDate(),
	              g = t.hour || d.getHours(),
	              p = t.minute || d.getMinutes();t.selectedDate = new Date(c, u, m, g, p, 0);
	        }t.inputHour = t.selectedDate.getHours(), t.inputMinute = t.selectedDate.getMinutes(), t.mv = s(t.selectedDate.getFullYear(), t.selectedDate.getMonth()), t.today = a(new Date(), "yyyy-M-d"), t.selectedDay = t.mv.year == t.selectedDate.getFullYear() && t.mv.month == t.selectedDate.getMonth() ? t.selectedDate.getDate() : null;
	      }), t.addMonth = function (e) {
	        t.mv = s(t.mv.year, t.mv.month + e);
	      }, t.setDate = function (e) {
	        var a = angular.element(e.target)[0];-1 !== a.className.indexOf("selectable") && (t.updateNgModel(parseInt(a.innerHTML)), t.closeOnSelect !== !1 && o.closeDatetimePicker());
	      }, t.updateNgModel = function (e) {
	        if (e = e ? e : t.selectedDate.getDate(), t.selectedDate = new Date(t.mv.year, t.mv.month, e, t.inputHour, t.inputMinute, 0), t.selectedDay = t.selectedDate.getDate(), l.ngModel) {
	          var n,
	              i = o.triggerEl.scope();n = i.$eval(l.ngModel) && "Date" === i.$eval(l.ngModel).constructor.name ? new Date(a(t.selectedDate, c)) : a(t.selectedDate, c), i.$eval(l.ngModel + "= date", { date: n });
	        }
	      }, t.$on("$destroy", o.closeDatetimePicker);
	    };return { restrict: "A", template: n, controller: "DatetimePickerCtrl", replace: !0, scope: { year: "=", month: "=", day: "=", hour: "=", minute: "=", dateOnly: "=", closeOnSelect: "=" }, link: c };
	  };l.$inject = ["$locale", "dateFilter"], angular.module("angularjs-datetime-picker").directive("datetimePickerPopup", l);var i = function i(e, t) {
	    return { require: "ngModel", link: function link(e, a, n, l) {
	        e.$watch(n.ngModel, function (e) {
	          if (e && "" != e) {
	            var t = new Date(e);l.$setValidity("date", t ? !0 : !1);var a = new Date();n.hasOwnProperty("futureOnly") && l.$setValidity("future-only", a > t ? !1 : !0);
	          }
	        }), a[0].addEventListener("click", function () {
	          t.open({ triggerEl: a[0], dateFormat: n.dateFormat, ngModel: n.ngModel, year: n.year, month: n.month, day: n.day, hour: n.hour, minute: n.minute, dateOnly: n.dateOnly, futureOnly: n.futureOnly, closeOnSelect: n.closeOnSelect });
	        });
	      } };
	  };i.$inject = ["$parse", "DatetimePicker"], angular.module("angularjs-datetime-picker").directive("datetimePicker", i);
	}();

/***/ },

/***/ 37:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Angular Facebook service
	 * ---------------------------
	 *
	 * Authored by  AlmogBaku (GoDisco)
	 *              almog@GoDisco.net
	 *              http://www.GoDisco.net/
	 *
	 * 9/8/13 10:25 PM
	 */
	angular.module('ngFacebook', []).provider('$facebook', function () {
	  var config = {
	    permissions: 'email',
	    appId: null,
	    version: 'v1.0',
	    customInit: {}
	  };

	  this.setAppId = function (appId) {
	    config.appId = appId;
	    return this;
	  };
	  this.getAppId = function () {
	    return config.appId;
	  };
	  this.setVersion = function (version) {
	    config.version = version;
	    return this;
	  };
	  this.getVersion = function () {
	    return config.version;
	  };
	  this.setPermissions = function (permissions) {
	    if (permissions instanceof Array) {
	      permissions.join(',');
	    }
	    config.permissions = permissions;
	    return this;
	  };
	  this.getPermissions = function () {
	    return config.permissions;
	  };
	  this.setCustomInit = function (customInit) {
	    if (angular.isDefined(customInit.appId)) {
	      this.setAppId(customInit.appId);
	    }
	    config.customInit = customInit;
	    return this;
	  };
	  this.getCustomInit = function () {
	    return config.customInit;
	  };

	  this.$get = ['$q', '$rootScope', '$window', function ($q, $rootScope, $window) {
	    var $facebook = $q.defer();
	    $facebook.config = function (property) {
	      return config[property];
	    };

	    //Initialization
	    $facebook.init = function () {
	      if ($facebook.config('appId') == null) throw "$facebookProvider: `appId` cannot be null";

	      $window.FB.init(angular.extend({ appId: $facebook.config('appId'), version: $facebook.config('version') }, $facebook.config("customInit")));
	      $rootScope.$broadcast("fb.load", $window.FB);
	    };

	    $rootScope.$on("fb.load", function (e, FB) {
	      $facebook.resolve(FB);

	      //Define action events
	      angular.forEach(['auth.login', 'auth.logout', 'auth.prompt', 'auth.sessionChange', 'auth.statusChange', 'auth.authResponseChange', 'xfbml.render', 'edge.create', 'edge.remove', 'comment.create', 'comment.remove', 'message.send'], function (event) {
	        FB.Event.subscribe(event, function (response) {
	          $rootScope.$broadcast("fb." + event, response, FB);
	          if (!$rootScope.$$phase) $rootScope.$apply();
	        });
	      });

	      // Make sure 'fb.auth.authResponseChange' fires even if the user is not logged in.
	      $facebook.getLoginStatus();
	    });

	    /**
	     * Internal cache
	     */
	    $facebook._cache = {};
	    $facebook.setCache = function (attr, val) {
	      $facebook._cache[attr] = val;
	    };
	    $facebook.getCache = function (attr) {
	      if (angular.isUndefined($facebook._cache[attr])) return false;
	      return $facebook._cache[attr];
	    };
	    $facebook.clearCache = function () {
	      $facebook._cache = {};
	    };

	    /**
	     * Authentication
	     */

	    var firstAuthResp = $q.defer();
	    var firstAuthRespReceived = false;
	    function resolveFirstAuthResp(FB) {
	      if (!firstAuthRespReceived) {
	        firstAuthRespReceived = true;
	        firstAuthResp.resolve(FB);
	      }
	    }

	    $facebook.setCache("connected", null);
	    $facebook.isConnected = function () {
	      return $facebook.getCache("connected");
	    };
	    $rootScope.$on("fb.auth.authResponseChange", function (event, response, FB) {
	      $facebook.clearCache();

	      if (response.status == "connected") {
	        $facebook.setCache("connected", true);
	      } else {
	        $facebook.setCache("connected", false);
	      }
	      resolveFirstAuthResp(FB);
	    });

	    $facebook.getAuthResponse = function () {
	      return FB.getAuthResponse();
	    };
	    $facebook.getLoginStatus = function (force) {
	      var deferred = $q.defer();

	      return $facebook.promise.then(function (FB) {
	        FB.getLoginStatus(function (response) {
	          if (response.error) deferred.reject(response.error);else {
	            deferred.resolve(response);
	            if ($facebook.isConnected() == null) $rootScope.$broadcast("fb.auth.authResponseChange", response, FB);
	          }
	          if (!$rootScope.$$phase) $rootScope.$apply();
	        }, force);
	        return deferred.promise;
	      });
	    };
	    $facebook.login = function (permissions, rerequest) {
	      if (permissions == undefined) permissions = $facebook.config("permissions");
	      var deferred = $q.defer();

	      var loginOptions = { scope: permissions };
	      if (rerequest) {
	        loginOptions.auth_type = 'rerequest';
	      }

	      return $facebook.promise.then(function (FB) {
	        FB.login(function (response) {
	          if (response.error) deferred.reject(response.error);else deferred.resolve(response);
	          if (!$rootScope.$$phase) $rootScope.$apply();
	        }, loginOptions);
	        return deferred.promise;
	      });
	    };
	    $facebook.logout = function () {
	      var deferred = $q.defer();

	      return $facebook.promise.then(function (FB) {
	        FB.logout(function (response) {
	          if (response.error) deferred.reject(response.error);else deferred.resolve(response);
	          if (!$rootScope.$$phase) $rootScope.$apply();
	        });
	        return deferred.promise;
	      });
	    };
	    $facebook.ui = function (params) {
	      var deferred = $q.defer();

	      return $facebook.promise.then(function (FB) {
	        FB.ui(params, function (response) {
	          if (response && response.error_code) {
	            deferred.reject(response.error_message);
	          } else {
	            deferred.resolve(response);
	          }
	          if (!$rootScope.$$phase) $rootScope.$apply();
	        });
	        return deferred.promise;
	      });
	    };
	    $facebook.api = function () {
	      var deferred = $q.defer();
	      var args = arguments;
	      args[args.length++] = function (response) {
	        if (response.error) deferred.reject(response.error);
	        if (response.error_msg) deferred.reject(response);else deferred.resolve(response);
	        if (!$rootScope.$$phase) $rootScope.$apply();
	      };

	      return firstAuthResp.promise.then(function (FB) {
	        FB.api.apply(FB, args);
	        return deferred.promise;
	      });
	    };

	    /**
	     * API cached request - cached request api with promise
	     *
	     * @param path
	     * @returns $q.defer.promise
	     */
	    $facebook.cachedApi = function () {
	      if (typeof arguments[0] !== 'string') throw "$facebook.cacheApi can works only with graph requests!";

	      var promise = $facebook.getCache(arguments[0]);
	      if (promise) return promise;

	      var result = $facebook.api.apply($facebook, arguments);
	      $facebook.setCache(arguments[0], result);

	      return result;
	    };

	    return $facebook;
	  }];
	}).run(['$rootScope', '$window', '$facebook', function ($rootScope, $window, $facebook) {
	  $window.fbAsyncInit = function () {
	    $facebook.init();
	    if (!$rootScope.$$phase) $rootScope.$apply();
	  };
	}]);

/***/ }

});