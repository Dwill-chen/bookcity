"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Bmob = t() : e.Bmob = t();
}("undefined" != typeof self ? self : undefined, function () {
  return function (e) {
    var t = {};function n(r) {
      if (t[r]) return t[r].exports;var o = t[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 17);
  }([function (e, t, n) {
    (function (t) {
      var r = n(5),
          o = t.Bmob || {};o.utils = r, o._config = r.getConfig(), o.initialize = function (e, t, n) {
        o._config.applicationId = e, o._config.applicationKey = t, o._config.applicationMasterKey = n;
      }, e.exports = o;
    }).call(t, n(6));
  }, function (e, t, n) {
    "use strict";
    var r = n(11),
        o = n(25),
        s = Object.prototype.toString;function i(e) {
      return "[object Array]" === s.call(e);
    }function a(e) {
      return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
    }function c(e) {
      return "[object Function]" === s.call(e);
    }function u(e, t) {
      if (null !== e && void 0 !== e) if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e = [e]), i(e)) for (var n = 0, r = e.length; n < r; n++) {
        t.call(null, e[n], n, e);
      } else for (var o in e) {
        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
      }
    }e.exports = { isArray: i, isArrayBuffer: function isArrayBuffer(e) {
        return "[object ArrayBuffer]" === s.call(e);
      }, isBuffer: o, isFormData: function isFormData(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      }, isArrayBufferView: function isArrayBufferView(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
      }, isString: function isString(e) {
        return "string" == typeof e;
      }, isNumber: function isNumber(e) {
        return "number" == typeof e;
      }, isObject: a, isUndefined: function isUndefined(e) {
        return void 0 === e;
      }, isDate: function isDate(e) {
        return "[object Date]" === s.call(e);
      }, isFile: function isFile(e) {
        return "[object File]" === s.call(e);
      }, isBlob: function isBlob(e) {
        return "[object Blob]" === s.call(e);
      }, isFunction: c, isStream: function isStream(e) {
        return a(e) && c(e.pipe);
      }, isURLSearchParams: function isURLSearchParams(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
      }, isStandardBrowserEnv: function isStandardBrowserEnv() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
      }, forEach: u, merge: function e() {
        var t = {};function n(n, r) {
          "object" == _typeof(t[r]) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? t[r] = e(t[r], n) : t[r] = n;
        }for (var r = 0, o = arguments.length; r < o; r++) {
          u(arguments[r], n);
        }return t;
      }, extend: function extend(e, t, n) {
        return u(t, function (t, o) {
          e[o] = n && "function" == typeof t ? r(t, n) : t;
        }), e;
      }, trim: function trim(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      } };
  }, function (e, t) {
    e.exports = { isObject: function isObject(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }, isNumber: function isNumber(e) {
        return "[object Number]" === Object.prototype.toString.call(e);
      }, isString: function isString(e) {
        return "[object String]" === Object.prototype.toString.call(e);
      }, isUndefined: function isUndefined(e) {
        return "[object Undefined]" === Object.prototype.toString.call(e);
      }, isBoolean: function isBoolean(e) {
        return "[object Boolean]" === Object.prototype.toString.call(e);
      }, isArray: function isArray(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }, isFunction: function isFunction(e) {
        return "[object Function]" === Object.prototype.toString.call(e);
      } };
  }, function (e, t) {
    e.exports = function () {
      function _class(e, t) {
        _classCallCheck(this, _class);

        var n = new Error();return n.code = e, n.message = t ? "Bmob.Error:{code:" + e + ", message:" + t + "}" : "Bmob.Error:{code:" + e + ", message:" + this.errorMsg(e) + "}", n;
      }

      _createClass(_class, [{
        key: "errorMsg",
        value: function errorMsg(e) {
          switch (e) {case 415:
              return "incorrect parameter type.";case 416:
              return "Parameter is null.";case 417:
              return "There is no upload content.";case 418:
              return "Log in failure.";case 419:
              return "Bmob.GeoPoint location error.";default:
              return "unknown error";}
        }
      }]);

      return _class;
    }();
  }, function (e, t, n) {
    var r = void 0;var o = n(5).getAppType();"h5" === o ? r = n(10) : "wx" === o ? r = n(42) : "hap" === o ? r = n(43) : "nodejs" === o && (r = n(10)), e.exports = r;
  }, function (e, t, n) {
    (function (t, r) {
      var o = void 0;try {
        o = n(18);
      } catch (e) {
        o = n(20);
      }var s = function s() {
        return o;
      };e.exports = { getConfig: s, getAppType: function getAppType() {
          var e = s();var n = void 0;return n = "undefined" != typeof wx ? "wx" : "undefined" != typeof window ? "h5" : t === r.process ? "nodejs" : 3 === e.type ? "hap" : "h5";
        } };
    }).call(t, n(7), n(6));
  }, function (e, t) {
    var n;n = function () {
      return this;
    }();try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }e.exports = n;
  }, function (e, t) {
    var n,
        r,
        o = e.exports = {};function s() {
      throw new Error("setTimeout has not been defined");
    }function i() {
      throw new Error("clearTimeout has not been defined");
    }function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }!function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : s;
      } catch (e) {
        n = s;
      }try {
        r = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        r = i;
      }
    }();var c,
        u = [],
        l = !1,
        p = -1;function f() {
      l && c && (l = !1, c.length ? u = c.concat(u) : p = -1, u.length && h());
    }function h() {
      if (!l) {
        var e = a(f);l = !0;for (var t = u.length; t;) {
          for (c = u, u = []; ++p < t;) {
            c && c[p].run();
          }p = -1, t = u.length;
        }c = null, l = !1, function (e) {
          if (r === clearTimeout) return clearTimeout(e);if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);try {
            r(e);
          } catch (t) {
            try {
              return r.call(null, e);
            } catch (t) {
              return r.call(this, e);
            }
          }
        }(e);
      }
    }function d(e, t) {
      this.fun = e, this.array = t;
    }function m() {}o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }u.push(new d(e, t)), 1 !== u.length || l || a(h);
    }, d.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (e) {
      return [];
    }, o.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, o.cwd = function () {
      return "/";
    }, o.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, o.umask = function () {
      return 0;
    };
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(1),
          o = n(27),
          s = { "Content-Type": "application/x-www-form-urlencoded" };function i(e, t) {
        !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
      }var a = { adapter: function () {
          var e;return "undefined" != typeof XMLHttpRequest ? e = n(12) : void 0 !== t && (e = n(12)), e;
        }(), transformRequest: [function (e, t) {
          return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
        }], transformResponse: [function (e) {
          if ("string" == typeof e) try {
            e = JSON.parse(e);
          } catch (e) {}return e;
        }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function validateStatus(e) {
          return e >= 200 && e < 300;
        }, headers: { common: { Accept: "application/json, text/plain, */*" } } };r.forEach(["delete", "get", "head"], function (e) {
        a.headers[e] = {};
      }), r.forEach(["post", "put", "patch"], function (e) {
        a.headers[e] = r.merge(s);
      }), e.exports = a;
    }).call(t, n(7));
  }, function (e, t, n) {
    var r = n(0);var o = n(4),
        _n = n(2),
        s = _n.isObject,
        i = _n.isString,
        a = _n.isNumber,
        c = _n.isUndefined,
        u = _n.isArray,
        l = n(3),
        p = n(16);function f(e, t, n) {
      var r = {},
          o = {};o[t] = n, r[e] = o;var s = r;return Object.keys(this.queryData).length ? c(this.queryData.$and) ? this.queryData = { $and: [this.queryData, s] } : this.queryData.$and.push(s) : this.queryData = s, s;
    }e.exports = function () {
      function _class2(e) {
        _classCallCheck(this, _class2);

        this.tableName = r._config.parameters.QUERY + "/" + e, this.className = e, this.init(), this.addArray = {}, this.setData = {};
      }

      _createClass(_class2, [{
        key: "init",
        value: function init() {
          this.queryData = {}, this.location = {}, this.andData = {}, this.orData = {}, this.stat = {}, this.limitNum = 100, this.skipNum = 0, this.includes = "", this.queryReilation = {}, this.orders = null, this.keys = null;
        }
      }, {
        key: "get",
        value: function get(e) {
          var _this = this;

          if (!i(e)) throw new l(415);var t = {};var n = {},
              r = {},
              s = {},
              f = function f(e, t) {
            if (!i(e) || !u(t)) throw new l(415);s[e] = { __op: "Add", objects: t };
          },
              h = function h(e, t) {
            if (!i(e) || !u(t)) throw new l(415);s[e] = { __op: "AddUnique", objects: t };
          },
              d = function d(e, t) {
            if (!i(e) || !u(t)) throw new l(415);s[e] = { __op: "Remove", objects: t };
          },
              m = function m(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            if (!i(e) || !a(t)) throw new l(415);n[e] = { __op: "Increment", amount: t };
          },
              w = function w(t) {
            if (!i(e)) throw new l(415);r[t] = { __op: "Delete" };
          },
              g = function g(e, n) {
            if (!i(e) || c(n)) throw new l(415);var r = n.filename,
                o = n.cdn,
                s = n.url;
            c(r) || c(o) || c(s) ? t[e] = n : t[e] = { __type: "File", group: o, filename: r, url: s };
          },
              y = function y() {
            var i = Object.assign(r, t, n, s);return "_User" === _this.className ? new Promise(function (t, n) {
              o(_this.tableName + "/" + e, "put", i).then(function (e) {
                var n = _this.current();var r = Object.assign(n, i);p.save("bmob", r), t(e);
              }).catch(function (e) {
                n(e);
              });
            }) : o(_this.tableName + "/" + e, "put", i);
          },
              b = {};return "" !== this.includes && (b.include = this.includes), new Promise(function (t, n) {
            o(_this.tableName + "/" + e, "get", b).then(function (n) {
              Object.defineProperty(n, "set", { value: g }), Object.defineProperty(n, "unset", { value: w }), Object.defineProperty(n, "save", { value: y }), Object.defineProperty(n, "increment", { value: m }), Object.defineProperty(n, "add", { value: f }), Object.defineProperty(n, "remove", { value: d }), Object.defineProperty(n, "addUnique", { value: h }), Object.defineProperty(n, "destroy", { value: function value() {
                  return _this.destroy(e);
                } }), t(n);
            }).catch(function (e) {
              n(e);
            });
          });
        }
      }, {
        key: "destroy",
        value: function destroy(e) {
          if (!i(e)) throw new l(415);return o(this.tableName + "/" + e, "delete");
        }
      }, {
        key: "set",
        value: function set(e, t) {
          if (!i(e) || c(t)) throw new l(415, e + "\u5B57\u6BB5\u53C2\u6570,\u7C7B\u578B\u4E0D\u6B63\u786E");var n = t.filename,
              r = t.cdn,
              o = t.url;
          c(n) || c(r) || c(o) ? this.setData[e] = t : this.setData[e] = { __type: "File", group: r, filename: n, url: o };
        }
      }, {
        key: "add",
        value: function add(e, t) {
          if (!i(e) || !u(t)) throw new l(415);this.addArray[e] = { __op: "Add", objects: t };
        }
      }, {
        key: "addUnique",
        value: function addUnique(e, t) {
          if (!i(e) || !u(t)) throw new l(415);this.addArray[e] = { __op: "AddUnique", objects: t };
        }
      }, {
        key: "current",
        value: function current() {
          if ("hap" !== r.type) {
            var _e = p.fetch("bmob");return "object" == (typeof _e === "undefined" ? "undefined" : _typeof(_e)) ? _e : JSON.parse(_e);
          }return new Promise(function (e, t) {
            return p.fetch("bmob").then(function (t) {
              e(t);
            }).catch(function (e) {
              t(e);
            });
          });
        }
      }, {
        key: "updateStorage",
        value: function updateStorage(e) {
          var _this2 = this;

          if (!i(e)) throw new l(415);return new Promise(function (t, n) {
            var r = _this2.current();if (!r) throw new l(415);_this2.get(e).then(function (e) {
              var n = Object.assign(r, e);p.save("bmob", n), t(e);
            }).catch(function (e) {
              console.log(e), n(e);
            });
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          if (!s(e)) throw new l(415);var t = this.setData.id ? "PUT" : "POST",
              n = this.setData.id ? this.setData.id : "";delete this.setData.id;var r = Object.assign(e, this.setData, this.addArray);return new Promise(function (e, s) {
            o(_this3.tableName + "/" + n, t, r).then(function (t) {
              if (_this3.addArray = {}, _this3.setData = {}, "_User" === _this3.className) {
                var _e2 = _this3.current();var _t = Object.assign(_e2, r);p.save("bmob", _t);
              }e(t);
            }).catch(function (e) {
              s(e);
            });
          });
        }
      }, {
        key: "saveAll",
        value: function saveAll(e) {
          var _this4 = this;

          if (!u(e)) throw new l(415);if (e.length < 1) throw new l(416);var t = void 0,
              n = void 0,
              s = "put",
              i = [];e.map(function (e) {
            return "/undefined" === (t = "/" + e.objectId) && (t = "", s = "post"), n = { method: s, path: "" + _this4.tableName + t, body: e.setData }, i.push(n), e;
          });var a = { requests: i },
              c = r._config.parameters.BATCH;return o(c, "POST", a);
        }
      }, {
        key: "withinKilometers",
        value: function withinKilometers(e, _ref) {
          var t = _ref.latitude,
              n = _ref.longitude;
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
          var o = {};return o[e] = { $nearSphere: { __type: "GeoPoint", latitude: t, longitude: n }, $maxDistanceInKilometers: r }, this.location = o, o;
        }
      }, {
        key: "withinGeoBox",
        value: function withinGeoBox(e, _ref2, r) {
          var t = _ref2.latitude,
              n = _ref2.longitude;
          var o = {};return o[e] = { $within: { $box: [{ __type: "GeoPoint", latitude: t, longitude: n }, { __type: "GeoPoint", latitude: r.latitude, longitude: r.longitude }] } }, this.location = o, o;
        }
      }, {
        key: "statTo",
        value: function statTo(e, t) {
          if (!i(e)) throw new l(415);return this.stat[e] = t, this.stat;
        }
      }, {
        key: "equalTo",
        value: function equalTo(e, t, n) {
          if (!i(e)) throw new l(415);var r = function (e, t, n) {
            var r = {},
                o = null;switch (o = "createdAt" === e || "updateAt" === e ? { __type: "Date", iso: n } : n, t) {case "==":case "===":
                r[e] = o;break;case "!=":
                r[e] = { $ne: o };break;case "<":
                r[e] = { $lt: o };break;case "<=":
                r[e] = { $lte: o };break;case ">":
                r[e] = { $gt: o };break;case ">=":
                r[e] = { $gte: o };break;default:
                throw new l(415);}return r;
          }(e, t, n);return Object.keys(this.queryData).length ? c(this.queryData.$and) ? this.queryData = { $and: [this.queryData, r] } : this.queryData.$and.push(r) : this.queryData = r, r;
        }
      }, {
        key: "containedIn",
        value: function containedIn(e, t) {
          if (!i(e) || !u(t)) throw new l(415);return f.call(this, e, "$in", t);
        }
      }, {
        key: "notContainedIn",
        value: function notContainedIn(e, t) {
          if (!i(e) || !u(t)) throw new l(415);return f.call(this, e, "$nin", t);
        }
      }, {
        key: "exists",
        value: function exists(e) {
          if (!i(e)) throw new l(415);return f.call(this, e, "$exists", !0);
        }
      }, {
        key: "doesNotExist",
        value: function doesNotExist(e) {
          if (!i(e)) throw new l(415);return f.call(this, e, "$exists", !1);
        }
      }, {
        key: "or",
        value: function or() {
          for (var _len = arguments.length, e = Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          e.map(function (e, t) {
            if (!s(e)) throw new l(415);
          });var t = this.queryData.$and;if (console.log(t.length), !c(t)) {
            for (var _n2 = 0; _n2 < t.length; _n2++) {
              for (var _r = 0; _r < e.length; _r++) {
                JSON.stringify(t[_n2]) === JSON.stringify(e[_r]) && this.queryData.$and.splice(_n2, 1);
              }
            }t.length || delete this.queryData.$and;
          }this.orData = { $or: e };
        }
      }, {
        key: "and",
        value: function and() {
          for (var _len2 = arguments.length, e = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            e[_key2] = arguments[_key2];
          }

          e.map(function (e, t) {
            if (!s(e)) throw new l(415);
          }), this.andData = { $and: e };
        }
      }, {
        key: "limit",
        value: function limit(e) {
          if (!a(e)) throw new l(415);e > 1e3 && (e = 1e3), this.limitNum = e;
        }
      }, {
        key: "skip",
        value: function skip(e) {
          if (!a(e)) throw new l(415);this.skipNum = e;
        }
      }, {
        key: "order",
        value: function order() {
          for (var _len3 = arguments.length, e = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            e[_key3] = arguments[_key3];
          }

          e.map(function (e) {
            if (!i(e)) throw new l(415);
          }), this.orders = e.join(",");
        }
      }, {
        key: "include",
        value: function include() {
          for (var _len4 = arguments.length, e = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            e[_key4] = arguments[_key4];
          }

          e.map(function (e) {
            if (!i(e)) throw new l(415);
          }), this.includes = e.join(",");
        }
      }, {
        key: "select",
        value: function select() {
          for (var _len5 = arguments.length, e = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            e[_key5] = arguments[_key5];
          }

          e.map(function (e) {
            if (!i(e)) throw new l(415);
          }), this.keys = e.join(",");
        }
      }, {
        key: "field",
        value: function field(e, t) {
          if (!i(e) || !i(t)) throw new l(415);this.queryReilation.where = { $relatedTo: { object: { __type: "Pointer", className: this.className, objectId: t }, key: e } };
        }
      }, {
        key: "relation",
        value: function relation(e) {
          if (!i(e)) throw new l(415);e = "_User" === e ? "users" : "classes/" + e, this.queryReilation.count = 1;var t = Object.assign(this.getParams(), this.queryReilation);return new Promise(function (n, r) {
            o("/1/" + e, "get", t).then(function (e) {
              n(e);
            }).catch(function (e) {
              r(e);
            });
          });
        }
      }, {
        key: "getParams",
        value: function getParams() {
          var e = {};Object.keys(this.queryData).length && (e.where = this.queryData), Object.keys(this.location).length && (e.where = Object.assign(this.location, this.queryData)), Object.keys(this.andData).length && (e.where = Object.assign(this.andData, this.queryData)), Object.keys(this.orData).length && (e.where = Object.assign(this.orData, this.queryData)), e.limit = this.limitNum, e.skip = this.skipNum, e.include = this.includes, e.order = this.orders, e.keys = this.keys, Object.keys(this.stat).length && (e = this.stat);for (var _t2 in e) {
            (e.hasOwnProperty(_t2) && null === e[_t2] || 0 === e[_t2] || "" === e[_t2]) && delete e[_t2];
          }return e;
        }
      }, {
        key: "find",
        value: function find() {
          var _this5 = this;

          var e = {},
              t = {};var n = this.getParams(),
              s = function s(t, n) {
            if (!t || c(n)) throw new l(415);e[t] = n;
          },
              i = function i() {
            var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "updata";
            if (console.log(n), t.length < 1) throw new l(416);var s = void 0,
                i = void 0,
                a = "put",
                c = [];t.map(function (t) {
              return "/undefined" === (s = "/" + t.objectId) && (s = "", a = "post"), i = { method: a, path: "" + _this5.tableName + s, body: e }, "delete" === n && (i = { method: "DELETE", path: "" + _this5.tableName + s }), c.push(i), t;
            });var u = { requests: c },
                p = r._config.parameters.BATCH;return o(p, "POST", u);
          };return new Promise(function (e, r) {
            o("" + _this5.tableName, "get", n).then(function (r) {
              var o = r.results;n.hasOwnProperty("count") && (o = r), _this5.init(), Object.defineProperty(o, "set", { value: s }), Object.defineProperty(o, "saveAll", { value: function value() {
                  return i();
                } }), Object.defineProperty(o, "destroyAll", { value: function value() {
                  return i("delete");
                } }), t = o, e(o);
            }).catch(function (e) {
              r(e);
            });
          });
        }
      }, {
        key: "count",
        value: function count() {
          var _this6 = this;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var t = {};return Object.keys(this.queryData).length && (t.where = this.queryData), Object.keys(this.andData).length && (t.where = Object.assign(this.andData, this.queryData)), Object.keys(this.orData).length && (t.where = Object.assign(this.orData, this.queryData)), t.count = 1, t.limit = e, new Promise(function (e, n) {
            o("" + _this6.tableName, "get", t).then(function (_ref3) {
              var t = _ref3.count;
              e(t);
            }).catch(function (e) {
              n(e);
            });
          });
        }
      }]);

      return _class2;
    }();
  }, function (e, t, n) {
    var r = n(23);var o = n(0);e.exports = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "get";
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (i, a) {
        void 0 === o.User && (o = n(0));var c = function (e) {
          var t = "wechatApp";"nodejs" === o.type && (t = "cloudcode");var n = { "content-type": "application/json", "X-Bmob-SDK-Type": t, "X-Bmob-Application-Id": e.applicationId, "X-Bmob-REST-API-Key": e.applicationKey };return e.applicationMasterKey && (n["X-Bmob-Master-Key"] = e.applicationMasterKey), n;
        }(o._config);var u = o.User.current();u && (c["X-Bmob-Session-Token"] = u.sessionToken);var l = r.create({ baseURL: o._config.host, headers: c, validateStatus: function validateStatus(e) {
            return e < 500;
          } }),
            p = { url: e, method: t };"get" === p.method ? p.params = s : p.data = s, l(p).then(function (_ref4) {
          var e = _ref4.data;
          (e.code && e.error || e.error) && a(e), i(e);
        }).catch(function (e) {
          a(e);
        });
      });
    };
  }, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) {
          n[r] = arguments[r];
        }return e.apply(t, n);
      };
    };
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(1),
          o = n(28),
          s = n(30),
          i = n(31),
          a = n(32),
          c = n(13),
          u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(33);e.exports = function (e) {
        return new Promise(function (l, p) {
          var f = e.data,
              h = e.headers;r.isFormData(f) && delete h["Content-Type"];var d = new XMLHttpRequest(),
              m = "onreadystatechange",
              w = !1;if ("test" === t.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || a(e.url) || (d = new window.XDomainRequest(), m = "onload", w = !0, d.onprogress = function () {}, d.ontimeout = function () {}), e.auth) {
            var g = e.auth.username || "",
                y = e.auth.password || "";h.Authorization = "Basic " + u(g + ":" + y);
          }if (d.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d[m] = function () {
            if (d && (4 === d.readyState || w) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
              var t = "getAllResponseHeaders" in d ? i(d.getAllResponseHeaders()) : null,
                  n = { data: e.responseType && "text" !== e.responseType ? d.response : d.responseText, status: 1223 === d.status ? 204 : d.status, statusText: 1223 === d.status ? "No Content" : d.statusText, headers: t, config: e, request: d };o(l, p, n), d = null;
            }
          }, d.onerror = function () {
            p(c("Network Error", e, null, d)), d = null;
          }, d.ontimeout = function () {
            p(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null;
          }, r.isStandardBrowserEnv()) {
            var b = n(34),
                S = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;S && (h[e.xsrfHeaderName] = S);
          }if ("setRequestHeader" in d && r.forEach(h, function (e, t) {
            void 0 === f && "content-type" === t.toLowerCase() ? delete h[t] : d.setRequestHeader(t, e);
          }), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
            d.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }"function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
            d && (d.abort(), p(e), d = null);
          }), void 0 === f && (f = null), d.send(f);
        });
      };
    }).call(t, n(7));
  }, function (e, t, n) {
    "use strict";
    var r = n(29);e.exports = function (e, t, n, o, s) {
      var i = new Error(e);return r(i, t, n, o, s);
    };
  }, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  }, function (e, t, n) {
    "use strict";
    function r(e) {
      this.message = e;
    }r.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }, r.prototype.__CANCEL__ = !0, e.exports = r;
  }, function (e, t, n) {
    var r = void 0;var o = n(5).getAppType();"h5" === o ? r = n(44) : "wx" === o ? r = n(45) : "hap" === o ? r = n(46) : "nodejs" === o && (r = n(47)), e.exports = r;
  }, function (e, t, n) {
    (function (t) {
      var r = n(0),
          o = n(21),
          s = n(22),
          i = n(9),
          a = n(48),
          c = n(49),
          u = n(50),
          l = n(51),
          _n3 = n(52),
          p = _n3.generateCode,
          f = _n3.sendMessage,
          h = _n3.getAccessToken,
          d = _n3.sendWeAppMessage,
          m = _n3.refund,
          w = _n3.notifyMsg,
          g = _n3.functions,
          y = _n3.timestamp,
          b = _n3.requestPasswordReset,
          S = _n3.resetPasswordBySmsCode,
          E = _n3.updateUserPassword,
          v = _n3.geoPoint,
          T = _n3.checkMsg,
          _ = _n3.push,
          _n4 = n(53),
          D = _n4.requestSmsCode,
          x = _n4.verifySmsCode;r.GeoPoint = v, r.generateCode = p, r.sendMessage = f, r.getAccessToken = h, r.sendWeAppMessage = d, r.refund = m, r.checkMsg = T, r.notifyMsg = w, r.requestSmsCode = D, r.verifySmsCode = x, r.run = r.functions = g, r.timestamp = y, r.requestPasswordReset = b, r.resetPasswordBySmsCode = S, r.updateUserPassword = E, r.push = _, r.Pay = new u(), r.User = new a(), r.Socket = l, r.Query = function (e) {
        return new i(e);
      }, r.File = function (e, t) {
        return new c(e, t);
      }, r.request = n(4), r.type = r.utils.getAppType(), r.Pointer = function (e) {
        return new o(e);
      }, r.Relation = function (e) {
        return new s(e);
      }, "wx" === r.type ? wx.Bmob = r : "h5" === r.type ? window.Bmob = r : "hap" === r.type ? t.Bmob = r : "nodejs" === r.type && (t.Bmob = r), e.exports = r;
    }).call(t, n(6));
  }, function (e, t, n) {
    var r = "v" + n(19).version;e.exports = { host: "https://api.bmobcloud.com", applicationId: "", applicationKey: "", applicationMasterKey: "", parameters: { GENERATECODE: "/1/wechatApp/qr/generatecode", GETACCESSTOKEN: "/1/wechatApp/getAccessToken", SENDWEAPPMESSAGE: "/1/wechatApp/SendWeAppMessage", NOTIFYMSG: "/1/wechatApp/notifyMsg", REFUND: "/1/pay/refund", REQUESTSMSCODE: "/1/requestSmsCode", VERIFYSMSCODE: "/1/verifySmsCode", FUNCTIONS: "/1/functions", REQUESTPASSWORDRESET: "/1/requestPasswordReset", RESETPASSWORDBYSMSCODE: "/1/resetPasswordBySmsCode", UPDATEUSERPASSWORD: "/1/updateUserPassword", PUSH: "/1/push", FILES: "/2/files", DELFILES: "/2/cdnBatchDelete", TIMESTAMP: "/1/timestamp", LOGIN: "/1/login", REGISTER: "/1/users", REQUEST_EMAIL_VERIFY: "/1/requestEmailVerify", USERS: "/1/users", PAY: "/1/pay", WECHAT_APP: "/1/wechatApp/", BATCH: "/1/batch", CHECK_MSG: "/1/wechatApp/checkMsg", DECRYPTION: "/1/wechatApp/decryption", QUERY: "/1/classes" }, version: r, type: 3 };
  }, function (e, t) {
    e.exports = { name: "hydrogen-js-sdk", version: "1.6.4", description: "Bmob SDK", main: "./src/lib/app.js", scripts: { test: 'echo "Error: no test specified" && exit 1', build: "webpack --config config/prod.env.js", watch: "webpack --watch --config config/prod.env.js", dev: "webpack-dev-server --config config/dev.env.js" }, repository: { type: "git", url: "git+https://github.com/bmob/hydrogen-js-sdk.git" }, author: "Bmob", license: "ISC", bugs: { url: "https://github.com/bmob/hydrogen-js-sdk/issues" }, homepage: "https://github.com/bmob/hydrogen-js-sdk#readme", dependencies: { axios: "^0.18.0", "node.extend": "^2.0.0", webpack: "^3.12.0" }, devDependencies: { "clean-webpack-plugin": "^0.1.19", eslint: "^4.19.1", "eslint-config-standard": "^11.0.0", "eslint-friendly-formatter": "^4.0.1", "eslint-loader": "^2.0.0", "eslint-plugin-import": "^2.12.0", "eslint-plugin-node": "^6.0.1", "eslint-plugin-promise": "^3.7.0", "eslint-plugin-standard": "^3.1.0", "html-webpack-plugin": "^2.30.1", "uglifyjs-webpack-plugin": "^1.2.5", "webpack-dev-server": "^2.11.2" }, directories: { doc: "docs" }, keywords: ["Bmob"] };
  }, function (e, t) {
    e.exports = { host: "https://api.bmobcloud.com", applicationId: "", applicationKey: "", parameters: { GENERATECODE: "/1/wechatApp/qr/generatecode", GETACCESSTOKEN: "/1/wechatApp/getAccessToken", SENDWEAPPMESSAGE: "/1/wechatApp/SendWeAppMessage", NOTIFYMSG: "/1/wechatApp/notifyMsg", REFUND: "/1/pay/refund", REQUESTSMSCODE: "/1/requestSmsCode", VERIFYSMSCODE: "/1/verifySmsCode", FUNCTIONS: "/1/functions", REQUESTPASSWORDRESET: "/1/requestPasswordReset", RESETPASSWORDBYSMSCODE: "/1/resetPasswordBySmsCode", UPDATEUSERPASSWORD: "/1/updateUserPassword", PUSH: "/1/push", FILES: "/2/files", DELFILES: "/2/cdnBatchDelete", TIMESTAMP: "/1/timestamp", LOGIN: "/1/login", REGISTER: "/1/users", REQUEST_EMAIL_VERIFY: "/1/requestEmailVerify", USERS: "/1/users", PAY: "/1/pay", WECHAT_APP: "/1/wechatApp/", BATCH: "/1/batch", CHECK_MSG: "/1/wechatApp/checkMsg", DECRYPTION: "/1/wechatApp/decryption", QUERY: "/1/classes" }, version: 1, type: 1 };
  }, function (e, t, n) {
    var _n5 = n(2),
        r = _n5.isString,
        o = n(3);

    e.exports = function () {
      function _class3(e) {
        _classCallCheck(this, _class3);

        if (!r(e)) throw new o(415);this.tableName = e;
      }

      _createClass(_class3, [{
        key: "set",
        value: function set(e) {
          if (!r(e)) throw new o(415);return { __type: "Pointer", className: this.tableName, objectId: e };
        }
      }]);

      return _class3;
    }();
  }, function (e, t, n) {
    var _n6 = n(2),
        r = _n6.isString,
        o = _n6.isArray,
        s = n(3);

    function i(e, t) {
      var _this7 = this;

      if (r(e)) return { __op: t, objects: [{ __type: "Pointer", className: this.tableName, objectId: e }] };if (o(e)) {
        var _n7 = [];return e.map(function (e) {
          if (!r(e)) throw new s(415);_n7.push({ __type: "Pointer", className: _this7.tableName, objectId: e });
        }), { __op: t, objects: _n7 };
      }throw new s(415);
    }e.exports = function () {
      function _class4(e) {
        _classCallCheck(this, _class4);

        if (!r(e)) throw new s(415);this.tableName = e;
      }

      _createClass(_class4, [{
        key: "add",
        value: function add(e) {
          return i.call(this, e, "AddRelation");
        }
      }, {
        key: "remove",
        value: function remove(e) {
          return i.call(this, e, "RemoveRelation");
        }
      }]);

      return _class4;
    }();
  }, function (e, t, n) {
    e.exports = n(24);
  }, function (e, t, n) {
    "use strict";
    var r = n(1),
        o = n(11),
        s = n(26),
        i = n(8);function a(e) {
      var t = new s(e),
          n = o(s.prototype.request, t);return r.extend(n, s.prototype, t), r.extend(n, t), n;
    }var c = a(i);c.Axios = s, c.create = function (e) {
      return a(r.merge(i, e));
    }, c.Cancel = n(15), c.CancelToken = n(40), c.isCancel = n(14), c.all = function (e) {
      return Promise.all(e);
    }, c.spread = n(41), e.exports = c, e.exports.default = c;
  }, function (e, t) {
    function n(e) {
      return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function (e) {
      return null != e && (n(e) || function (e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
      }(e) || !!e._isBuffer);
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(8),
        o = n(1),
        s = n(35),
        i = n(36);function a(e) {
      this.defaults = e, this.interceptors = { request: new s(), response: new s() };
    }a.prototype.request = function (e) {
      "string" == typeof e && (e = o.merge({ url: arguments[0] }, arguments[1])), (e = o.merge(r, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase();var t = [i, void 0],
          n = Promise.resolve(e);for (this.interceptors.request.forEach(function (e) {
        t.unshift(e.fulfilled, e.rejected);
      }), this.interceptors.response.forEach(function (e) {
        t.push(e.fulfilled, e.rejected);
      }); t.length;) {
        n = n.then(t.shift(), t.shift());
      }return n;
    }, o.forEach(["delete", "get", "head", "options"], function (e) {
      a.prototype[e] = function (t, n) {
        return this.request(o.merge(n || {}, { method: e, url: t }));
      };
    }), o.forEach(["post", "put", "patch"], function (e) {
      a.prototype[e] = function (t, n, r) {
        return this.request(o.merge(r || {}, { method: e, url: t, data: n }));
      };
    }), e.exports = a;
  }, function (e, t, n) {
    "use strict";
    var r = n(1);e.exports = function (e, t) {
      r.forEach(e, function (n, r) {
        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
      });
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(13);e.exports = function (e, t, n) {
      var o = n.config.validateStatus;n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
    };
  }, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, o) {
      return e.config = t, n && (e.code = n), e.request = r, e.response = o, e;
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(1);function o(e) {
      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }e.exports = function (e, t, n) {
      if (!t) return e;var s;if (n) s = n(t);else if (r.isURLSearchParams(t)) s = t.toString();else {
        var i = [];r.forEach(t, function (e, t) {
          null !== e && void 0 !== e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function (e) {
            r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(o(t) + "=" + o(e));
          }));
        }), s = i.join("&");
      }return s && (e += (-1 === e.indexOf("?") ? "?" : "&") + s), e;
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(1),
        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];e.exports = function (e) {
      var t,
          n,
          s,
          i = {};return e ? (r.forEach(e.split("\n"), function (e) {
        if (s = e.indexOf(":"), t = r.trim(e.substr(0, s)).toLowerCase(), n = r.trim(e.substr(s + 1)), t) {
          if (i[t] && o.indexOf(t) >= 0) return;i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n;
        }
      }), i) : i;
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(1);e.exports = r.isStandardBrowserEnv() ? function () {
      var e,
          t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");function o(e) {
        var r = e;return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname };
      }return e = o(window.location.href), function (t) {
        var n = r.isString(t) ? o(t) : t;return n.protocol === e.protocol && n.host === e.host;
      };
    }() : function () {
      return !0;
    };
  }, function (e, t, n) {
    "use strict";
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o() {
      this.message = "String contains an invalid character";
    }o.prototype = new Error(), o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", e.exports = function (e) {
      for (var t, n, s = String(e), i = "", a = 0, c = r; s.charAt(0 | a) || (c = "=", a % 1); i += c.charAt(63 & t >> 8 - a % 1 * 8)) {
        if ((n = s.charCodeAt(a += .75)) > 255) throw new o();t = t << 8 | n;
      }return i;
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(1);e.exports = r.isStandardBrowserEnv() ? { write: function write(e, t, n, o, s, i) {
        var a = [];a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(s) && a.push("domain=" + s), !0 === i && a.push("secure"), document.cookie = a.join("; ");
      }, read: function read(e) {
        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));return t ? decodeURIComponent(t[3]) : null;
      }, remove: function remove(e) {
        this.write(e, "", Date.now() - 864e5);
      } } : { write: function write() {}, read: function read() {
        return null;
      }, remove: function remove() {} };
  }, function (e, t, n) {
    "use strict";
    var r = n(1);function o() {
      this.handlers = [];
    }o.prototype.use = function (e, t) {
      return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
    }, o.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null);
    }, o.prototype.forEach = function (e) {
      r.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    }, e.exports = o;
  }, function (e, t, n) {
    "use strict";
    var r = n(1),
        o = n(37),
        s = n(14),
        i = n(8),
        a = n(38),
        c = n(39);function u(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }e.exports = function (e) {
      return u(e), e.baseURL && !a(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
        delete e.headers[t];
      }), (e.adapter || i.adapter)(e).then(function (t) {
        return u(e), t.data = o(t.data, t.headers, e.transformResponse), t;
      }, function (t) {
        return s(t) || (u(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
      });
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(1);e.exports = function (e, t, n) {
      return r.forEach(n, function (n) {
        e = n(e, t);
      }), e;
    };
  }, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
      );
    };
  }, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(15);function o(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");var t;this.promise = new Promise(function (e) {
        t = e;
      });var n = this;e(function (e) {
        n.reason || (n.reason = new r(e), t(n.reason));
      });
    }o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }, o.source = function () {
      var e;return { token: new o(function (t) {
          e = t;
        }), cancel: e };
    }, e.exports = o;
  }, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  }, function (e, t, n) {
    var r = n(0);e.exports = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "get";
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (s, i) {
        var a = function (e) {
          var t = { "content-type": "application/json", "X-Bmob-SDK-Type": "wechatApp", "X-Bmob-Application-Id": e.applicationId, "X-Bmob-REST-API-Key": e.applicationKey };return e.applicationMasterKey && (t["X-Bmob-Master-Key"] = e.applicationMasterKey), t;
        }(r._config);void 0 === r.User && (r = n(0));var c = r.User.current();c && (a["X-Bmob-Session-Token"] = c.sessionToken), wx.request({ url: r._config.host + e, method: t, data: o, header: a, success: function success(e) {
            (e.data.code && e.data.error || e.data.error) && i(e.data), s(e.data);
          }, fail: function fail(e) {
            console.log(e), i(e);
          } });
      });
    };
  }, function (e, t, n) {
    var r = n(0);e.exports = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "get";
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (s, i) {
        var a = function (e) {
          var t = { "content-type": "application/json", "X-Bmob-SDK-Type": "wechatApp", "X-Bmob-Application-Id": e.applicationId, "X-Bmob-REST-API-Key": e.applicationKey };return e.applicationMasterKey && (t["X-Bmob-Master-Key"] = e.applicationMasterKey), t;
        }(r._config);void 0 === r.User && (r = n(0));var c = r.User.current();c && (a["X-Bmob-Session-Token"] = c.sessionToken), "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && (o = JSON.stringify(o)), "xxrequire('@system.fetch')xx".fetch({ url: r._config.host + e, header: a, method: t, data: o, success: function success(e) {
            var t = JSON.parse(e.data);t.code && i(t), s(t);
          }, fail: function fail(e, t) {
            console.log("handling fail, code = " + t), i(e);
          } });
      });
    };
  }, function (e, t, n) {
    var _n8 = n(2),
        r = _n8.isString;

    var o = void 0;o = "undefined" != typeof cc ? cc.sys.localStorage : localStorage;var s = {
      save: function save(e, t) {
        if (!r(e) || !t) throw new Error(415);o.setItem(e, JSON.stringify(t));
      },
      fetch: function fetch(e) {
        if (!r(e)) throw new Error(415);return JSON.parse(o.getItem(e)) || null;
      },
      remove: function remove(e) {
        if (!r(e)) throw new Error(415);o.removeItem(e);
      },
      clear: function clear() {
        o.clear();
      }
    };e.exports = s;
  }, function (e, t, n) {
    var _n9 = n(2),
        r = _n9.isString,
        o = _n9.isObject,
        s = {
      save: function save(e, t) {
        if (!r(e) || !t) throw new Error(415);return t = o(t) ? JSON.stringify(t) : t, wx.setStorageSync(e, t);
      },
      fetch: function fetch(e) {
        if (!r(e)) throw new Error(415);return wx.getStorageSync(e) || null;
      },
      remove: function remove(e) {
        if (!r(e)) throw new Error(415);return wx.removeStorageSync(e);
      },
      clear: function clear() {
        return wx.clearStorageSync();
      } };

    e.exports = s;
  }, function (e, t, n) {
    var _n10 = n(2),
        r = _n10.isString,
        o = "xxrequire('@system.storage')xx",
        s = {
      save: function save(e, t) {
        if (!r(e) || !t) throw new Error(415);o.set({ key: e, value: JSON.stringify(t), success: function success(e) {
            return console.log("handling success"), e;
          }, fail: function fail(e, t) {
            console.log("handling fail, code = " + t);
          } });
      },
      fetch: function fetch(e) {
        if (!r(e)) throw new Error(415);return new Promise(function (t, n) {
          return o.get({ key: e, success: function success(e) {
              t(e || null);
            }, fail: function fail(e, t) {
              console.log("handling fail, code = " + t), n(e);
            } });
        });
      },
      remove: function remove(e) {
        if (!r(e)) throw new Error(415);o.delete({ key: e, success: function success(e) {
            console.log("handling success");
          }, fail: function fail(e, t) {
            console.log("handling fail, code = " + t);
          } });
      },
      clear: function clear() {
        o.clear({ success: function success(e) {
            console.log("handling success");
          }, fail: function fail(e, t) {
            console.log("handling fail, code = " + t);
          } });
      }
    };

    e.exports = s;
  }, function (e, t) {
    var n = {
      save: function save(e, t) {},
      fetch: function fetch(e) {
        return null;
      }, remove: function remove(e) {},
      clear: function clear() {}
    };e.exports = n;
  }, function (e, t, n) {
    var r = n(4),
        o = n(16),
        s = n(9),
        i = n(0),
        a = n(3),
        _n11 = n(2),
        c = _n11.isObject,
        u = _n11.isString,
        l = _n11.isNumber;e.exports = function (_s) {
      _inherits(_class5, _s);

      function _class5() {
        _classCallCheck(this, _class5);

        return _possibleConstructorReturn(this, (_class5.__proto__ || Object.getPrototypeOf(_class5)).call(this, "_User"));
      }

      _createClass(_class5, [{
        key: "set",
        value: function set(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          u(e) && (this.setData[e] = t);
        }
      }, {
        key: "requestEmailVerify",
        value: function requestEmailVerify(e) {
          if (!u(e)) throw new a(415);this.setData = Object.assign({}, { email: e }), console.log(this.setData);var t = i._config.parameters.REQUEST_EMAIL_VERIFY;return r(t, "post", this.setData);
        }
      }, {
        key: "register",
        value: function register(e) {
          if (!c(e)) throw new a(415);this.setData = Object.assign({}, e);var t = i._config.parameters.REGISTER;return r(t, "post", this.setData);
        }
      }, {
        key: "login",
        value: function login(e, t) {
          var _this9 = this;

          if (!u(e) || !u(t)) throw new a(415);this.setData = Object.assign({}, { username: e, password: t });var n = i._config.parameters.LOGIN;return new Promise(function (e, t) {
            r(n, "get", _this9.setData).then(function (t) {
              o.save("bmob", t), e(t);
            }).catch(function (e) {
              t(e);
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          o.clear();
        }
      }, {
        key: "users",
        value: function users() {
          var e = i._config.parameters.USERS;return r(e, "get");
        }
      }, {
        key: "decryption",
        value: function decryption(e) {
          var t = this;return new Promise(function (n, o) {
            var s = e.iv ? e.iv : e.detail.iv,
                a = e.encryptedData ? e.encryptedData : e.detail.encryptedData,
                c = { sessionKey: t.current().authData.weapp.session_key, encryptedData: a, iv: s },
                u = i._config.parameters.DECRYPTION;r(u, "POST", c).then(function (e) {
              n(e);
            }).catch(function (e) {
              o(e);
            });
          });
        }
      }, {
        key: "signOrLoginByMobilePhone",
        value: function signOrLoginByMobilePhone(e, t) {
          if (!l(e) || !l(t)) throw new a(415);this.setData = Object.assign({}, { mobilePhoneNumber: e, smsCode: t });var n = i._config.parameters.LOGIN;return r(n, "get", this.setData);
        }
      }, {
        key: "requestOpenId",
        value: function requestOpenId(e) {
          var t = i._config.parameters.WECHAT_APP;return r(t + e, "POST", {});
        }
      }, {
        key: "linkWith",
        value: function linkWith(e) {
          var t = { authData: e };var n = i._config.parameters.USERS;return r(n, "POST", t);
        }
      }, {
        key: "loginWithWeapp",
        value: function loginWithWeapp(e) {
          var _this10 = this;

          return new Promise(function (t, n) {
            _this10.requestOpenId(e).then(function (e) {
              var n = { weapp: e },
                  r = _this10.linkWith(n);t(r);
            }).catch(function (e) {
              n(e);
            });
          });
        }
      }, {
        key: "upInfo",
        value: function upInfo(e) {
          var _this11 = this;

          return new Promise(function (t, n) {
            var r = e.nickName,
                s = e.avatarUrl,
                i = _this11.current();if (!i) throw new a(415);var c = o.fetch("openid");_this11.get(i.objectId).then(function (e) {
              e.set("nickName", r), e.set("userPic", s), e.set("openid", c), e.save().then(function (e) {
                t(e);
              }).catch(function (e) {
                console.log(e), n(e);
              });
            }).catch(function (e) {
              console.log(e), n(e);
            });
          });
        }
      }, {
        key: "auth",
        value: function auth() {
          var e = this;return new Promise(function (t, n) {
            var r = function r() {
              wx.login({ success: function success(r) {
                  e.loginWithWeapp(r.code).then(function (e) {
                    if (e.error) throw new a(415);var n = e.authData.weapp.openid;o.save("openid", n), o.save("bmob", e), t(e);
                  }, function (e) {
                    n(e);
                  });
                } });
            };wx.checkSession({ success: function success() {
                var o = e.current();null === o && n("登陆错误，请在Bmob后台填写小程序AppSecret。"), t(o), r();
              }, fail: function fail() {
                r();
              } });
          });
        }
      }]);

      return _class5;
    }(s);
  }, function (e, t, n) {
    var r = n(4);var o = n(0);var s = n(3),
        i = n(5),
        a = "xxrequire('@system.request')xx",
        _n12 = n(2),
        c = _n12.isString,
        u = _n12.isArray;var l = [];e.exports = function () {
      function _class6(e, t) {
        _classCallCheck(this, _class6);

        if (e && t) {
          if (!c(e)) throw new s(415);l.push({ name: e, route: o._config.parameters.FILES + "/" + e, data: t });
        }
      }

      _createClass(_class6, [{
        key: "save",
        value: function save() {
          if (!l.length) throw new s(417);var e = void 0;var t = i.getAppType();return "h5" === t || "nodejs" === t ? e = new Promise(function (e, t) {
            var n = [];var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = l[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _o = _step.value;
                r(_o.route, "post", _o.data).then(function (r) {
                  n.push(r), n.length === l.length && (l = [], e(n), t(n));
                }).catch(function (e) {
                  n.push(e);
                });
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }) : "wx" === t ? e = new Promise(function (e, t) {
            void 0 === o.User && (o = n(0));var r = "bmob";var s = o.User.current();s && (r = s.sessionToken);var i = [],
                a = { _ApplicationId: o._config.applicationId, _RestKey: o._config.applicationKey, _SessionToken: r },
                c = Object.assign({ _ContentType: "text/plain", mime_type: "text/plain", category: "wechatApp", _ClientVersion: "js3.6.1", _InstallationId: "bmob" }, a);var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = l[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _n13 = _step2.value;
                wx.uploadFile({ url: o._config.host + _n13.route, filePath: _n13.data, name: "file", header: { "X-Bmob-SDK-Type": "wechatApp" }, formData: c, success: function success(n) {
                    var r = JSON.parse(n.data);i.push(r), i.length === l.length && (l = [], e(i), t(i));
                  }, fail: function fail(e) {
                    i.push(e);
                  } });
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }) : "hap" === t && (e = new Promise(function (e, t) {
            void 0 === o.User && (o = n(0));var r = o.User.current();var s = [],
                i = { _ApplicationId: o._config.applicationId, _RestKey: o._config.applicationKey, _SessionToken: r.sessionToken },
                c = Object.assign({ _ContentType: "text/plain", mime_type: "text/plain", category: "wechatApp", _ClientVersion: "js3.6.1", _InstallationId: "bmob" }, i);var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = l[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _n14 = _step3.value;
                a.upload({ url: o._config.host + _n14.route, files: [{ uri: _n14.data, name: "file", filename: _n14.name }], header: { "X-Bmob-SDK-Type": "wechatApp" }, data: c, success: function success(n) {
                    console.log("handling success" + s);var r = n.data;s.push(r), s.length === l.length && (l = [], e(s), t(s));
                  }, fail: function fail(e, t) {
                    console.log("handling fail, code = " + t);
                  } });
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          })), e;
        }
      }, {
        key: "destroy",
        value: function destroy(e) {
          if (c(e)) return r(o._config.parameters.FILES + "/upyun/" + e.split(".com/")[1], "delete");if (u(e)) {
            var _t3 = [];return e.map(function (e) {
              _t3.push(e.split(".com/")[1]);
            }), r(o._config.parameters.DELFILES, "post", { upyun: _t3 });
          }throw new s(415);
        }
      }]);

      return _class6;
    }();
  }, function (e, t, n) {
    var r = n(4),
        o = n(0),
        s = n(3);e.exports = function () {
      function _class7() {
        _classCallCheck(this, _class7);
      }

      _createClass(_class7, [{
        key: "weApp",
        value: function weApp(e, t, n) {
          var i = wx.getStorageSync("openid");if (!(e && t && n && i)) throw new s(416);var a = { order_price: e, product_name: t, body: n, open_id: i, pay_type: 4 };var c = o._config.parameters.PAY;return r(c, "post", a);
        }
      }]);

      return _class7;
    }();
  }, function (t, n, r) {
    var o = r(0),
        s = r(3),
        i = {
      setup: function setup(e) {
        var t = [];Object.assign(e, {
          on: function on(e, n) {
            "function" == typeof n && t.push([e, n]);
          },
          emit: function emit(e) {
            for (var _len6 = arguments.length, n = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
              n[_key6 - 1] = arguments[_key6];
            }

            t.forEach(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  t = _ref6[0],
                  r = _ref6[1];

              return e === t && r.apply(undefined, _toConsumableArray(n));
            });
          },
          removeAllListeners: function removeAllListeners() {
            t = [];
          }
        });
      }
    };t.exports = function () {
      function _class8() {
        _classCallCheck(this, _class8);

        if (!o._config.applicationId) throw new s(415);this.config = { host: "wss.bmobcloud.com" }, i.setup(this.emitter = {}), this.applicationId = o._config.applicationId, this.initialize();
      }

      _createClass(_class8, [{
        key: "handshake",
        value: function handshake() {
          var t = "https://" + this.config.host + "/socket.io/1/?t=" + new Date().getTime(),
              n = JSON.stringify({});return new Promise(function (r, o) {
            wx.request({ method: "GET", url: t, data: n, header: { "content-type": "text/plain" }, success: function success(t) {
                return t.data && t.data.statusCode ? r("request error", e) : 200 !== t.statusCode ? r("request error", e) : r(function (e) {
                  if (!(e instanceof s)) return e.split(":")[0];self.connecting = !1, self.onError(e.message);
                }(t.data));
              }, fail: function fail(e) {
                return r("request error", e);
              } });
          });
        }
      }, {
        key: "initialize",
        value: function initialize() {
          var _this12 = this;

          return this.handshake().then(function (e) {
            try {
              _this12.connect("wss://" + _this12.config.host + "/socket.io/1/websocket/" + e, {});
            } catch (e) {
              throw console.error({ connectError: e }), e;
            }
          }), this.on("close", function () {
            console.log("连接已中断");
          }), new Promise(function (e, t) {
            _this12.on("server_pub", function (e) {
              switch (e.action) {case "updateTable":
                  _this12.onUpdateTable(e.tableName, e.data);break;case "updateRow":
                  _this12.onUpdateRow(e.tableName, e.objectId, e.data);break;case "deleteTable":
                  _this12.onDeleteTable(e.tableName, e.data);break;case "deleteRow":
                  _this12.onDeleteRow(e.tableName, e.objectId, e.data);}
            }), _this12.on("client_send_data", function (e) {
              _this12.onInitListen();
            });
          });
        }
      }, {
        key: "onInitListen",
        value: function onInitListen() {}
      }, {
        key: "connect",
        value: function connect(e, t) {
          var _this13 = this;

          var n = Object.keys(t).map(function (e) {
            return e + "=" + encodeURIComponent(t[e]);
          }).join("&"),
              r = e.indexOf("?") > -1 ? "&" : "?";return e = [e, n].join(r), new Promise(function (n, r) {
            wx.onSocketOpen(n), wx.onSocketError(r), wx.onSocketMessage(function (e) {
              try {
                var _t4 = function _t4(e) {
                  var _JSON$parse = JSON.parse(e),
                      t = _JSON$parse.name,
                      n = _JSON$parse.args;

                  return { name: t, args: n };
                },
                    _n15 = e.data;if ("2:::" === _n15.slice(0, 4) && _this13.emit(!1, !0), null === (_n15 = _n15.slice(4)) || "" === _n15) return;
                var _t5 = _t4(_n15),
                    _r2 = _t5.name,
                    _o2 = _t5.args;

                var _s2 = null == _o2 ? "" : JSON.parse(_o2[0]);_this13.emitter.emit(_r2, _s2);
              } catch (t) {
                console.log("Handle packet failed: " + e.data, t);
              }
            }), wx.onSocketClose(function () {
              return _this13.emitter.emit("close");
            }), wx.connectSocket({ url: e, header: t });
          });
        }
      }, {
        key: "on",
        value: function on(e, t) {
          this.emitter.on(e, t);
        }
      }, {
        key: "emit",
        value: function emit(e, t) {
          t = void 0 === t ? "5:::" : "2:::", e = e ? JSON.stringify(e) : "", wx.sendSocketMessage({ data: t + e });
        }
      }, {
        key: "emitData",
        value: function emitData(e, t) {
          return { name: e, args: [t = JSON.stringify(t)] };
        }
      }, {
        key: "updateTable",
        value: function updateTable(e) {
          var t = { appKey: this.applicationId, tableName: e, objectId: "", action: "updateTable" };t = this.emitData("client_sub", t), this.emit(t);
        }
      }, {
        key: "unsubUpdateTable",
        value: function unsubUpdateTable(e) {
          var t = { appKey: this.applicationId, tableName: e, objectId: "", action: "unsub_updateTable" };t = this.emitData("client_sub", t), this.emit(t);
        }
      }, {
        key: "updateRow",
        value: function updateRow(e, t) {
          var n = { appKey: this.applicationId, tableName: e, objectId: t, action: "updateRow" };n = this.emitData("client_sub", n), this.emit(n);
        }
      }, {
        key: "unsubUpdateRow",
        value: function unsubUpdateRow(e, t) {
          var n = { appKey: this.applicationId, tableName: e, objectId: t, action: "unsub_updateRow" };n = this.emitData("client_sub", n), this.emit(n);
        }
      }, {
        key: "deleteTable",
        value: function deleteTable(e) {
          var t = { appKey: this.applicationId, tableName: e, objectId: "", action: "deleteTable" };t = this.emitData("client_sub", t), this.emit(t);
        }
      }, {
        key: "unsubDeleteTable",
        value: function unsubDeleteTable(e) {
          var t = { appKey: this.applicationId, tableName: e, objectId: "", action: "unsub_deleteTable" };t = this.emitData("client_sub", t), this.emit(t);
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(e, t) {
          var n = { appKey: this.applicationId, tableName: e, objectId: t, action: "deleteRow" };n = this.emitData("client_sub", n), this.emit(n);
        }
      }, {
        key: "unsubDeleteRow",
        value: function unsubDeleteRow(e, t) {
          var n = { appKey: this.applicationId, tableName: e, objectId: t, action: "unsub_deleteRow" };n = this.emitData("client_sub", n), this.emit(n);
        }
      }, {
        key: "onUpdateTable",
        value: function onUpdateTable(e, t) {}
      }, {
        key: "onUpdateRow",
        value: function onUpdateRow(e, t, n) {}
      }, {
        key: "onDeleteTable",
        value: function onDeleteTable(e, t) {}
      }, {
        key: "onDeleteRow",
        value: function onDeleteRow(e, t, n) {}
      }]);

      return _class8;
    }();
  }, function (e, t, n) {
    var r = n(4),
        o = n(0),
        s = n(3),
        _n16 = n(2),
        i = _n16.isObject,
        a = _n16.isString;e.exports = { generateCode: function generateCode(e) {
        if (!i(e)) throw new s(415);var t = o._config.parameters.GENERATECODE;return r(t, "post", e);
      }, sendMessage: function sendMessage(e) {
        return 1;
      }, getAccessToken: function getAccessToken(e) {
        var t = o._config.parameters.GETACCESSTOKEN;return r(t, "get");
      }, sendWeAppMessage: function sendWeAppMessage(e) {
        if (!i(e)) throw new s(415);var t = o._config.parameters.SENDWEAPPMESSAGE;return r(t, "post", e);
      }, refund: function refund(e) {
        if (!i(e)) throw new s(415);var t = o._config.parameters.REFUND;return r(t, "post", e);
      }, notifyMsg: function notifyMsg(e) {
        if (!i(e)) throw new s(415);var t = o._config.parameters.NOTIFYMSG;return r(t, "post", e);
      }, functions: function functions(e, t) {
        if (t || (t = {}), !a(e)) throw new s(415);var n = o._config.parameters.FUNCTIONS + "/" + e;return new Promise(function (e, o) {
          r(n, "post", t).then(function (_ref7) {
            var t = _ref7.result;
            try {
              e(JSON.parse(t));
            } catch (n) {
              e(t);
            }
          }).catch(function (e) {
            o(e);
          });
        });
      }, timestamp: function timestamp() {
        var e = o._config.parameters.TIMESTAMP;return r(e, "get");
      }, requestPasswordReset: function requestPasswordReset(e) {
        if (!i(e)) throw new s(415);var t = o._config.parameters.REQUESTPASSWORDRESET;return r(t, "post", e);
      }, resetPasswordBySmsCode: function resetPasswordBySmsCode(e, t) {
        if (!a(e)) throw new s(415);var n = o._config.parameters.RESETPASSWORDBYSMSCODE + "/" + e;return r(n, "put", t);
      }, updateUserPassword: function updateUserPassword(e, t) {
        if (!i(t) || !a(e)) throw new s(415);var n = o._config.parameters.UPDATEUSERPASSWORD + "/" + e;return r(n, "put", t);
      }, geoPoint: function geoPoint(_ref8) {
        var e = _ref8.latitude,
            t = _ref8.longitude;
        return function (e, t) {
          if (e < -90) throw new s(419);if (e > 90) throw new s(419);if (t < -180) throw new s(419);if (t > 180) throw new s(419);
        }(e, t), { __type: "GeoPoint", latitude: e, longitude: t };
      }, checkMsg: function checkMsg(e) {
        if (!a(e)) throw new s(415);var t = "" + o._config.parameters.CHECK_MSG;return r(t, "post", { content: e });
      }, push: function push(e) {
        if (!i(e)) throw new s(415);var t = o._config.parameters.PUSH;return r(t, "post", e);
      } };
  }, function (e, t, n) {
    var r = n(4),
        o = n(0),
        s = n(3),
        _n17 = n(2),
        i = _n17.isObject,
        a = _n17.isString;e.exports = { requestSmsCode: function requestSmsCode(e, t) {
        if (!i(e)) throw new s(415);var n = o._config.parameters.REQUESTSMSCODE;return r(n, "post", e);
      }, verifySmsCode: function verifySmsCode(e, t, n) {
        if (!a(e)) throw new s(415);if (!i(t)) throw new s(415);var c = o._config.parameters.VERIFYSMSCODE + "/" + e;return r(c, "post", t);
      } };
  }]);
});