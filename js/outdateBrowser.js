/*!-------------------------------------------------------------------------------------------
JAVASCRIPT project compiled files - outdatedBrowser

Version:    1.0.0 - 2014
author:     Burocratik
email:      hello@burocratik.com
website:    http://www.burocratik.com
* @preserve
--------------------------------------------------------------------------------------------*/
function FastClick(e, t) {
    "use strict";
    function n(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }
    var i;
    if (t = t || {},
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        this.targetElement = null,
        this.touchStartX = 0,
        this.touchStartY = 0,
        this.lastTouchIdentifier = 0,
        this.touchBoundary = t.touchBoundary || 10,
        this.layer = e,
        this.tapDelay = t.tapDelay || 200,
        !FastClick.notNeeded(e)) {
        for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], o = this, s = 0, a = r.length; a > s; s++)
            o[r[s]] = n(o[r[s]], o);
        deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0),
            e.addEventListener("mousedown", this.onMouse, !0),
            e.addEventListener("mouseup", this.onMouse, !0)),
            e.addEventListener("click", this.onClick, !0),
            e.addEventListener("touchstart", this.onTouchStart, !1),
            e.addEventListener("touchmove", this.onTouchMove, !1),
            e.addEventListener("touchend", this.onTouchEnd, !1),
            e.addEventListener("touchcancel", this.onTouchCancel, !1),
            Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, n, i) {
                var r = Node.prototype.removeEventListener;
                "click" === t ? r.call(e, t, n.hijacked || n, i) : r.call(e, t, n, i)
            }
                ,
                e.addEventListener = function (t, n, i) {
                    var r = Node.prototype.addEventListener;
                    "click" === t ? r.call(e, t, n.hijacked || (n.hijacked = function (e) {
                        e.propagationStopped || n(e)
                    }
                    ), i) : r.call(e, t, n, i)
                }
            ),
            "function" == typeof e.onclick && (i = e.onclick,
                e.addEventListener("click", function (e) {
                    i(e)
                }, !1),
                e.onclick = null)
    }
}
$(document).ready(function () {
    $(document).on("click", "a[data-track]", function () {
        var e = $(this)
            , t = e.attr("data-track")
            , n = null;
        return n = e.hasClass("browserlink") ? "Download Browser" : "Exit Site",
            ga("send", "event", "OUTBOUND LINK", n, t),
            !0
    }),
        $(document).on("click", "#global-zeroclipboard-html-bridge", function () {
            return ga("send", "event", "COPY CODE", "Copy to clipboard", "Does not include Chrome/Opera/IE users"),
                !0
        })
}),
    function () {
        function e() { }
        function t(e, t) {
            for (var n = e.length; n--;)
                if (e[n].listener === t)
                    return n;
            return -1
        }
        function n(e) {
            return function t() {
                return this[e].apply(this, arguments)
            }
        }
        var i = e.prototype
            , r = this
            , o = r.EventEmitter;
        i.getListeners = function s(e) {
            var t = this._getEvents(), n, i;
            if ("object" == typeof e) {
                n = {};
                for (i in t)
                    t.hasOwnProperty(i) && e.test(i) && (n[i] = t[i])
            } else
                n = t[e] || (t[e] = []);
            return n
        }
            ,
            i.flattenListeners = function a(e) {
                var t = [], n;
                for (n = 0; n < e.length; n += 1)
                    t.push(e[n].listener);
                return t
            }
            ,
            i.getListenersAsObject = function c(e) {
                var t = this.getListeners(e), n;
                return t instanceof Array && (n = {},
                    n[e] = t),
                    n || t
            }
            ,
            i.addListener = function l(e, n) {
                var i = this.getListenersAsObject(e), r = "object" == typeof n, o;
                for (o in i)
                    i.hasOwnProperty(o) && -1 === t(i[o], n) && i[o].push(r ? n : {
                        listener: n,
                        once: !1
                    });
                return this
            }
            ,
            i.on = n("addListener"),
            i.addOnceListener = function u(e, t) {
                return this.addListener(e, {
                    listener: t,
                    once: !0
                })
            }
            ,
            i.once = n("addOnceListener"),
            i.defineEvent = function d(e) {
                return this.getListeners(e),
                    this
            }
            ,
            i.defineEvents = function f(e) {
                for (var t = 0; t < e.length; t += 1)
                    this.defineEvent(e[t]);
                return this
            }
            ,
            i.removeListener = function h(e, n) {
                var i = this.getListenersAsObject(e), r, o;
                for (o in i)
                    i.hasOwnProperty(o) && (r = t(i[o], n),
                        -1 !== r && i[o].splice(r, 1));
                return this
            }
            ,
            i.off = n("removeListener"),
            i.addListeners = function p(e, t) {
                return this.manipulateListeners(!1, e, t)
            }
            ,
            i.removeListeners = function v(e, t) {
                return this.manipulateListeners(!0, e, t)
            }
            ,
            i.manipulateListeners = function m(e, t, n) {
                var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners;
                if ("object" != typeof t || t instanceof RegExp)
                    for (i = n.length; i--;)
                        o.call(this, t, n[i]);
                else
                    for (i in t)
                        t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
                return this
            }
            ,
            i.removeEvent = function g(e) {
                var t = typeof e, n = this._getEvents(), i;
                if ("string" === t)
                    delete n[e];
                else if ("object" === t)
                    for (i in n)
                        n.hasOwnProperty(i) && e.test(i) && delete n[i];
                else
                    delete this._events;
                return this
            }
            ,
            i.removeAllListeners = n("removeEvent"),
            i.emitEvent = function y(e, t) {
                var n = this.getListenersAsObject(e), i, r, o, s;
                for (o in n)
                    if (n.hasOwnProperty(o))
                        for (r = n[o].length; r--;)
                            i = n[o][r],
                                i.once === !0 && this.removeListener(e, i.listener),
                                s = i.listener.apply(this, t || []),
                                s === this._getOnceReturnValue() && this.removeListener(e, i.listener);
                return this
            }
            ,
            i.trigger = n("emitEvent"),
            i.emit = function w(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(e, t)
            }
            ,
            i.setOnceReturnValue = function b(e) {
                return this._onceReturnValue = e,
                    this
            }
            ,
            i._getOnceReturnValue = function k() {
                return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
            }
            ,
            i._getEvents = function C() {
                return this._events || (this._events = {})
            }
            ,
            e.noConflict = function x() {
                return r.EventEmitter = o,
                    e
            }
            ,
            "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
                return e
            }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
    }
        .call(this),
    function (e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t,
                n
        }
        var n = document.documentElement
            , i = function () { };
        n.addEventListener ? i = function (e, t, n) {
            e.addEventListener(t, n, !1)
        }
            : n.attachEvent && (i = function (e, n, i) {
                e[n + i] = i.handleEvent ? function () {
                    var n = t(e);
                    i.handleEvent.call(i, n)
                }
                    : function () {
                        var n = t(e);
                        i.call(e, n)
                    }
                    ,
                    e.attachEvent("on" + n, e[n + i])
            }
            );
        var r = function () { };
        n.removeEventListener ? r = function (e, t, n) {
            e.removeEventListener(t, n, !1)
        }
            : n.detachEvent && (r = function (e, t, n) {
                e.detachEvent("on" + t, e[t + n]);
                try {
                    delete e[t + n]
                } catch (i) {
                    e[t + n] = void 0
                }
            }
            );
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function (e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("eventEmitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(this, function e(t, n, i) {
        function r(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function o(e) {
            return "[object Array]" === h.call(e)
        }
        function s(e) {
            var t = [];
            if (o(e))
                t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++)
                    t.push(e[n]);
            else
                t.push(e);
            return t
        }
        function a(e, t, n) {
            if (!(this instanceof a))
                return new a(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)),
                this.elements = s(e),
                this.options = r({}, this.options),
                "function" == typeof t ? n = t : r(this.options, t),
                n && this.on("always", n),
                this.getImages(),
                u && (this.jqDeferred = new u.Deferred);
            var i = this;
            setTimeout(function () {
                i.check()
            })
        }
        function c(e) {
            this.img = e
        }
        function l(e) {
            this.src = e,
                p[e] = this
        }
        var u = t.jQuery
            , d = t.console
            , f = "undefined" != typeof d
            , h = Object.prototype.toString;
        a.prototype = new n,
            a.prototype.options = {},
            a.prototype.getImages = function () {
                this.images = [];
                for (var e = 0, t = this.elements.length; t > e; e++) {
                    var n = this.elements[e];
                    "IMG" === n.nodeName && this.addImage(n);
                    var i = n.nodeType;
                    if (i && (1 === i || 9 === i || 11 === i))
                        for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                            var a = r[o];
                            this.addImage(a)
                        }
                }
            }
            ,
            a.prototype.addImage = function (e) {
                var t = new c(e);
                this.images.push(t)
            }
            ,
            a.prototype.check = function () {
                function e(e, r) {
                    return t.options.debug && f && d.log("confirm", e, r),
                        t.progress(e),
                        n++ ,
                        n === i && t.complete(),
                        !0
                }
                var t = this
                    , n = 0
                    , i = this.images.length;
                if (this.hasAnyBroken = !1,
                    !i)
                    return void this.complete();
                for (var r = 0; i > r; r++) {
                    var o = this.images[r];
                    o.on("confirm", e),
                        o.check()
                }
            }
            ,
            a.prototype.progress = function (e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
                var t = this;
                setTimeout(function () {
                    t.emit("progress", t, e),
                        t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
                })
            }
            ,
            a.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var t = this;
                setTimeout(function () {
                    if (t.emit(e, t),
                        t.emit("always", t),
                        t.jqDeferred) {
                        var n = t.hasAnyBroken ? "reject" : "resolve";
                        t.jqDeferred[n](t)
                    }
                })
            }
            ,
            u && (u.fn.imagesLoaded = function (e, t) {
                var n = new a(this, e, t);
                return n.jqDeferred.promise(u(this))
            }
            ),
            c.prototype = new n,
            c.prototype.check = function () {
                var e = p[this.img.src] || new l(this.img.src);
                if (e.isConfirmed)
                    return void this.confirm(e.isLoaded, "cached was confirmed");
                if (this.img.complete && void 0 !== this.img.naturalWidth)
                    return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                var t = this;
                e.on("confirm", function (e, n) {
                    return t.confirm(e.isLoaded, n),
                        !0
                }),
                    e.check()
            }
            ,
            c.prototype.confirm = function (e, t) {
                this.isLoaded = e,
                    this.emit("confirm", this, t)
            }
            ;
        var p = {};
        return l.prototype = new n,
            l.prototype.check = function () {
                if (!this.isChecked) {
                    var e = new Image;
                    i.bind(e, "load", this),
                        i.bind(e, "error", this),
                        e.src = this.src,
                        this.isChecked = !0
                }
            }
            ,
            l.prototype.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }
            ,
            l.prototype.onload = function (e) {
                this.confirm(!0, "onload"),
                    this.unbindProxyEvents(e)
            }
            ,
            l.prototype.onerror = function (e) {
                this.confirm(!1, "onerror"),
                    this.unbindProxyEvents(e)
            }
            ,
            l.prototype.confirm = function (e, t) {
                this.isConfirmed = !0,
                    this.isLoaded = e,
                    this.emit("confirm", this, t)
            }
            ,
            l.prototype.unbindProxyEvents = function (e) {
                i.unbind(e.target, "load", this),
                    i.unbind(e.target, "error", this)
            }
            ,
            a
    }),
    !function () {
        for (var e, t = function () { }, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = n.length, r = window.console = window.console || {}; i--;)
            e = n[i],
                r[e] || (r[e] = t)
    }(),
    jQuery.easing.jswing = jQuery.easing.swing,
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (e, t, n, i, r) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
        },
        easeInQuad: function (e, t, n, i, r) {
            return i * (t /= r) * t + n
        },
        easeOutQuad: function (e, t, n, i, r) {
            return -i * (t /= r) * (t - 2) + n
        },
        easeInOutQuad: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function (e, t, n, i, r) {
            return i * (t /= r) * t * t + n
        },
        easeOutCubic: function (e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t + 1) + n
        },
        easeInOutCubic: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function (e, t, n, i, r) {
            return i * (t /= r) * t * t * t + n
        },
        easeOutQuart: function (e, t, n, i, r) {
            return -i * ((t = t / r - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function (e, t, n, i, r) {
            return i * (t /= r) * t * t * t * t + n
        },
        easeOutQuint: function (e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function (e, t, n, i, r) {
            return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function (e, t, n, i, r) {
            return i * Math.sin(t / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function (e, t, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
        },
        easeInExpo: function (e, t, n, i, r) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
        },
        easeOutExpo: function (e, t, n, i, r) {
            return t == r ? n + i : i * (-Math.pow(2, -10 * t / r) + 1) + n
        },
        easeInOutExpo: function (e, t, n, i, r) {
            return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function (e, t, n, i, r) {
            return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
        },
        easeOutCirc: function (e, t, n, i, r) {
            return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
        },
        easeInOutCirc: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function (e, t, n, i, r) {
            var o = 1.70158
                , s = 0
                , a = i;
            if (0 == t)
                return n;
            if (1 == (t /= r))
                return n + i;
            if (s || (s = .3 * r),
                a < Math.abs(i)) {
                a = i;
                var o = s / 4
            } else
                var o = s / (2 * Math.PI) * Math.asin(i / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / s)) + n
        },
        easeOutElastic: function (e, t, n, i, r) {
            var o = 1.70158
                , s = 0
                , a = i;
            if (0 == t)
                return n;
            if (1 == (t /= r))
                return n + i;
            if (s || (s = .3 * r),
                a < Math.abs(i)) {
                a = i;
                var o = s / 4
            } else
                var o = s / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - o) * Math.PI / s) + i + n
        },
        easeInOutElastic: function (e, t, n, i, r) {
            var o = 1.70158
                , s = 0
                , a = i;
            if (0 == t)
                return n;
            if (2 == (t /= r / 2))
                return n + i;
            if (s || (s = .3 * r * 1.5),
                a < Math.abs(i)) {
                a = i;
                var o = s / 4
            } else
                var o = s / (2 * Math.PI) * Math.asin(i / a);
            return 1 > t ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / s) + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / s) * .5 + i + n
        },
        easeInBack: function (e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158),
                i * (t /= r) * t * ((o + 1) * t - o) + n
        },
        easeOutBack: function (e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158),
                i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
        },
        easeInOutBack: function (e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158),
                (t /= r / 2) < 1 ? i / 2 * t * t * (((o *= 1.525) + 1) * t - o) + n : i / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
        },
        easeInBounce: function (e, t, n, i, r) {
            return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
        },
        easeOutBounce: function (e, t, n, i, r) {
            return (t /= r) < 1 / 2.75 ? 7.5625 * i * t * t + n : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function (e, t, n, i, r) {
            return r / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
        }
    }),
    function (e) {
        "use strict";
        function t(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }
        function n(e, t) {
            var n = i(e, t) ? o : r;
            n(e, t)
        }
        var i, r, o;
        "classList" in document.documentElement ? (i = function (e, t) {
            return e.classList.contains(t)
        }
            ,
            r = function (e, t) {
                e.classList.add(t)
            }
            ,
            o = function (e, t) {
                e.classList.remove(t)
            }
        ) : (i = function (e, n) {
            return t(n).test(e.className)
        }
            ,
            r = function (e, t) {
                i(e, t) || (e.className = e.className + " " + t)
            }
            ,
            o = function (e, n) {
                e.className = e.className.replace(t(n), " ")
            }
            );
        var s = {
            hasClass: i,
            addClass: r,
            removeClass: o,
            toggleClass: n,
            has: i,
            add: r,
            remove: o,
            toggle: n
        };
        "function" == typeof define && define.amd ? define(s) : e.classie = s
    }(window),
    function ($) {
        function e(e) {
            function n() {
                e ? s.removeData(e) : d && delete t[d]
            }
            function r() {
                a.id = setTimeout(function () {
                    a.fn()
                }, f)
            }
            var o = this, s, a = {}, c = e ? $.fn : $, l = arguments, u = 4, d = l[1], f = l[2], h = l[3];
            if ("string" != typeof d && (u-- ,
                d = e = 0,
                f = l[1],
                h = l[2]),
                e ? (s = o.eq(0),
                    s.data(e, a = s.data(e) || {})) : d && (a = t[d] || (t[d] = {})),
                a.id && clearTimeout(a.id),
                delete a.id,
                h)
                a.fn = function (e) {
                    "string" == typeof h && (h = c[h]),
                        h.apply(o, i.call(l, u)) !== !0 || e ? n() : r()
                }
                    ,
                    r();
            else {
                if (a.fn)
                    return void 0 === f ? n() : a.fn(f === !1),
                        !0;
                n()
            }
        }
        var t = {}
            , n = "doTimeout"
            , i = Array.prototype.slice;
        $[n] = function () {
            return e.apply(window, [0].concat(i.call(arguments)))
        }
            ,
            $.fn[n] = function () {
                var t = i.call(arguments)
                    , r = e.apply(this, [n + t[0]].concat(t));
                return "number" == typeof t[0] || "number" == typeof t[1] ? this : r
            }
    }(jQuery),
    function (e, t) {
        var $ = e.jQuery || e.Cowboy || (e.Cowboy = {}), n;
        $.throttle = n = function (e, n, i, r) {
            function o() {
                function o() {
                    a = +new Date,
                        i.apply(l, d)
                }
                function c() {
                    s = t
                }
                var l = this
                    , u = +new Date - a
                    , d = arguments;
                r && !s && o(),
                    s && clearTimeout(s),
                    r === t && u > e ? o() : n !== !0 && (s = setTimeout(r ? c : o, r === t ? e - u : e))
            }
            var s, a = 0;
            return "boolean" != typeof n && (r = i,
                i = n,
                n = t),
                $.guid && (o.guid = i.guid = i.guid || $.guid++),
                o
        }
            ,
            $.debounce = function (e, i, r) {
                return r === t ? n(e, i, !1) : n(e, r, i !== !1)
            }
    }(this),
    function (e) {
        e.fn.animatePNG = function (t, n, i, r) {
            var o = 0;
            this.each(function () {
                var s = e(this)
                    , a = n;
                s.doTimeout("loop", i, function () {
                    if (o++ ,
                        o == a) {
                        if (0 == r)
                            return !1;
                        o = 0
                    }
                    return s.css("backgroundPosition", "-" + o * t + "px 0px"),
                        !0
                }),
                    null == t && s.doTimeout("loop")
            })
        }
    }(jQuery),
    !function (e) {
        "undefined" != typeof module && module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : this.NProgress = e()
    }(function () {
        function e(e, t, n) {
            return t > e ? t : e > n ? n : e
        }
        function t(e) {
            return 100 * (-1 + e)
        }
        function n(e, n, i) {
            var r;
            return r = "translate3d" === l.positionUsing ? {
                transform: "translate3d(" + t(e) + "%,0,0)"
            } : "translate" === l.positionUsing ? {
                transform: "translate(" + t(e) + "%,0)"
            } : {
                        "margin-left": t(e) + "%"
                    },
                r.transition = "all " + n + "ms " + i,
                r
        }
        function i(e, t) {
            var n = "string" == typeof e ? e : s(e);
            return n.indexOf(" " + t + " ") >= 0
        }
        function r(e, t) {
            var n = s(e)
                , r = n + t;
            i(n, t) || (e.className = r.substring(1))
        }
        function o(e, t) {
            var n, r = s(e);
            i(e, t) && (n = r.replace(" " + t + " ", " "),
                e.className = n.substring(1, n.length - 1))
        }
        function s(e) {
            return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
        }
        function a(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }
        var c = {};
        c.version = "0.1.3";
        var l = c.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        c.configure = function (e) {
            var t, n;
            for (t in e)
                n = e[t],
                    void 0 !== n && e.hasOwnProperty(t) && (l[t] = n);
            return this
        }
            ,
            c.status = null,
            c.set = function (t) {
                var i = c.isStarted();
                t = e(t, l.minimum, 1),
                    c.status = 1 === t ? null : t;
                var r = c.render(!i)
                    , o = r.querySelector(l.barSelector)
                    , s = l.speed
                    , a = l.easing;
                return r.offsetWidth,
                    u(function (e) {
                        "" === l.positionUsing && (l.positionUsing = c.getPositioningCSS()),
                            d(o, n(t, s, a)),
                            1 === t ? (d(r, {
                                transition: "none",
                                opacity: 1
                            }),
                                r.offsetWidth,
                                setTimeout(function () {
                                    d(r, {
                                        transition: "all " + s + "ms linear",
                                        opacity: 0
                                    }),
                                        setTimeout(function () {
                                            c.remove(),
                                                e()
                                        }, s)
                                }, s)) : setTimeout(e, s)
                    }),
                    this
            }
            ,
            c.isStarted = function () {
                return "number" == typeof c.status
            }
            ,
            c.start = function () {
                c.status || c.set(0);
                var e = function () {
                    setTimeout(function () {
                        c.status && (c.trickle(),
                            e())
                    }, l.trickleSpeed)
                };
                return l.trickle && e(),
                    this
            }
            ,
            c.done = function (e) {
                return e || c.status ? c.inc(.3 + .5 * Math.random()).set(1) : this
            }
            ,
            c.inc = function (t) {
                var n = c.status;
                return n ? ("number" != typeof t && (t = (1 - n) * e(Math.random() * n, .1, .95)),
                    n = e(n + t, 0, .994),
                    c.set(n)) : c.start()
            }
            ,
            c.trickle = function () {
                return c.inc(Math.random() * l.trickleRate)
            }
            ,
            function () {
                var e = 0
                    , t = 0;
                c.promise = function (n) {
                    return n && "resolved" != n.state() ? (0 == t && c.start(),
                        e++ ,
                        t++ ,
                        n.always(function () {
                            t-- ,
                                0 == t ? (e = 0,
                                    c.done()) : c.set((e - t) / e)
                        }),
                        this) : this
                }
            }(),
            c.render = function (e) {
                if (c.isRendered())
                    return document.getElementById("nprogress");
                r(document.documentElement, "nprogress-busy");
                var n = document.createElement("div");
                n.id = "nprogress",
                    n.innerHTML = l.template;
                var i, o = n.querySelector(l.barSelector), s = e ? "-100" : t(c.status || 0);
                return d(o, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + s + "%,0,0)"
                }),
                    l.showSpinner || (i = n.querySelector(l.spinnerSelector),
                        i && a(i)),
                    document.body.appendChild(n),
                    n
            }
            ,
            c.remove = function () {
                o(document.documentElement, "nprogress-busy");
                var e = document.getElementById("nprogress");
                e && a(e)
            }
            ,
            c.isRendered = function () {
                return !!document.getElementById("nprogress")
            }
            ,
            c.getPositioningCSS = function () {
                var e = document.body.style
                    , t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
                return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
            }
            ;
        var u = function () {
            function e() {
                var n = t.shift();
                n && n(e)
            }
            var t = [];
            return function (n) {
                t.push(n),
                    1 == t.length && e()
            }
        }()
            , d = function () {
                function e(e) {
                    return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (e, t) {
                        return t.toUpperCase()
                    })
                }
                function t(e) {
                    var t = document.body.style;
                    if (e in t)
                        return e;
                    for (var n, i = r.length, o = e.charAt(0).toUpperCase() + e.slice(1); i--;)
                        if (n = r[i] + o,
                            n in t)
                            return n;
                    return e
                }
                function n(n) {
                    return n = e(n),
                        o[n] || (o[n] = t(n))
                }
                function i(e, t, i) {
                    t = n(t),
                        e.style[t] = i
                }
                var r = ["Webkit", "O", "Moz", "ms"]
                    , o = {};
                return function (e, t) {
                    var n, r, o = arguments;
                    if (2 == o.length)
                        for (n in t)
                            r = t[n],
                                void 0 !== r && t.hasOwnProperty(n) && i(e, n, r);
                    else
                        i(e, o[1], o[2])
                }
            }();
        return c
    }),
    $.event.special.clickTouchEvent = {
        setup: function () {
            var e = "ontouchend" in document ? "touchend" : "click";
            $(this).on(e + ".myclickTouchEvent", function (e) {
                e.type = "clickTouchEvent",
                    $.event.handle.apply(this, [e])
            })
        },
        teardown: function () {
            $(this).off(".clickTouchEvent")
        }
    };
var outdatedBrowser = function (e) {
    function t(e) {
        i.style.opacity = e / 100,
            i.style.filter = "alpha(opacity=" + e + ")"
    }
    function n(e) {
        t(e),
            1 == e && (i.style.display = "block"),
            100 == e && (s = !0)
    }
    var i = document.getElementById("outdated")
        , r = document.getElementById("btnClose")
        , o = document.getElementById("btnUpdate");
    this.defaultOpts = {
        bgColor: "#F25648",
        color: "#FFF",
        lowerThan: "IE10"
    },
        e ? (this.defaultOpts.bgColor = e.bgColor,
            this.defaultOpts.color = e.color,
            "IE8" == e.lowerThan || "borderSpacing" == e.lowerThan ? e.lowerThan = "borderSpacing" : "IE9" == e.lowerThan || "boxShadow" == e.lowerThan ? e.lowerThan = "boxShadow" : "IE10" == e.lowerThan || "transform" == e.lowerThan || "" == e.lowerThan || "undefined" == typeof e.lowerThan ? e.lowerThan = "transform" : ("IE11" == e.lowerThan || "borderImage" == e.lowerThan) && (e.lowerThan = "borderImage"),
            this.defaultOpts.lowerThan = e.lowerThan,
            bkgColor = this.defaultOpts.bgColor,
            txtColor = this.defaultOpts.color,
            cssProp = this.defaultOpts.lowerThan) : (bkgColor = this.defaultOpts.bgColor,
                txtColor = this.defaultOpts.color,
                cssProp = this.defaultOpts.lowerThan);
    var s = !0
        , a = function () {
            var e = document.createElement("div")
                , t = "Khtml Ms O Moz Webkit".split(" ")
                , n = t.length;
            return function (i) {
                if (i in e.style)
                    return !0;
                for (i = i.replace(/^[a-z]/, function (e) {
                    return e.toUpperCase()
                }); n--;)
                    if (t[n] + i in e.style)
                        return !0;
                return !1
            }
        }();
    if (!a("" + cssProp)) {
        if (s && "1" !== i.style.opacity) {
            s = !1;
            for (var c = 1; 100 >= c; c++)
                setTimeout(function (e) {
                    return function () {
                        n(e)
                    }
                }(c), 10 * c)
        }
        r.onmousedown = function () {
            return i.style.display = "none",
                !1
        }
    }
    i.style.backgroundColor = bkgColor,
        i.style.color = txtColor,
        o.style.color = txtColor,
        o.style.borderColor = txtColor,
        o.onmouseover = function () {
            this.style.color = bkgColor,
                this.style.backgroundColor = txtColor
        }
        ,
        o.onmouseout = function () {
            this.style.color = txtColor,
                this.style.backgroundColor = bkgColor
        }
}
    , deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0
    , deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent)
    , deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent)
    , deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
FastClick.prototype.needsClick = function (e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (e.disabled)
                return !0;
            break;
        case "input":
            if (deviceIsIOS && "file" === e.type || e.disabled)
                return !0;
            break;
        case "label":
        case "video":
            return !0
    }
    return /\bneedsclick\b/.test(e.className)
}
    ,
    FastClick.prototype.needsFocus = function (e) {
        "use strict";
        switch (e.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !deviceIsAndroid;
            case "input":
                switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }
    ,
    FastClick.prototype.sendClick = function (e, t) {
        "use strict";
        var n, i;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(),
            i = t.changedTouches[0],
            n = document.createEvent("MouseEvents"),
            n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
            n.forwardedTouchEvent = !0,
            e.dispatchEvent(n)
    }
    ,
    FastClick.prototype.determineEventType = function (e) {
        "use strict";
        return deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }
    ,
    FastClick.prototype.focus = function (e) {
        "use strict";
        var t;
        deviceIsIOS && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type ? (t = e.value.length,
            e.setSelectionRange(t, t)) : e.focus()
    }
    ,
    FastClick.prototype.updateScrollParent = function (e) {
        "use strict";
        var t, n;
        if (t = e.fastClickScrollParent,
            !t || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n,
                        e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }
    ,
    FastClick.prototype.getTargetElementFromEventTarget = function (e) {
        "use strict";
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }
    ,
    FastClick.prototype.onTouchStart = function (e) {
        "use strict";
        var t, n, i;
        if (e.targetTouches.length > 1)
            return !0;
        if (t = this.getTargetElementFromEventTarget(e.target),
            n = e.targetTouches[0],
            deviceIsIOS) {
            if (i = window.getSelection(),
                i.rangeCount && !i.isCollapsed)
                return !0;
            if (!deviceIsIOS4) {
                if (n.identifier === this.lastTouchIdentifier)
                    return e.preventDefault(),
                        !1;
                this.lastTouchIdentifier = n.identifier,
                    this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0,
            this.trackingClickStart = e.timeStamp,
            this.targetElement = t,
            this.touchStartX = n.pageX,
            this.touchStartY = n.pageY,
            e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(),
            !0
    }
    ,
    FastClick.prototype.touchHasMoved = function (e) {
        "use strict";
        var t = e.changedTouches[0]
            , n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
    }
    ,
    FastClick.prototype.onTouchMove = function (e) {
        "use strict";
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1,
            this.targetElement = null),
            !0) : !0
    }
    ,
    FastClick.prototype.findControl = function (e) {
        "use strict";
        return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }
    ,
    FastClick.prototype.onTouchEnd = function (e) {
        "use strict";
        var t, n, i, r, o, s = this.targetElement;
        if (!this.trackingClick)
            return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay)
            return this.cancelNextClick = !0,
                !0;
        if (this.cancelNextClick = !1,
            this.lastClickTime = e.timeStamp,
            n = this.trackingClickStart,
            this.trackingClick = !1,
            this.trackingClickStart = 0,
            deviceIsIOSWithBadTarget && (o = e.changedTouches[0],
                s = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || s,
                s.fastClickScrollParent = this.targetElement.fastClickScrollParent),
            i = s.tagName.toLowerCase(),
            "label" === i) {
            if (t = this.findControl(s)) {
                if (this.focus(s),
                    deviceIsAndroid)
                    return !1;
                s = t
            }
        } else if (this.needsFocus(s))
            return e.timeStamp - n > 100 || deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null,
                !1) : (this.focus(s),
                    this.sendClick(s, e),
                    deviceIsIOS && "select" === i || (this.targetElement = null,
                        e.preventDefault()),
                    !1);
        return deviceIsIOS && !deviceIsIOS4 && (r = s.fastClickScrollParent,
            r && r.fastClickLastScrollTop !== r.scrollTop) ? !0 : (this.needsClick(s) || (e.preventDefault(),
                this.sendClick(s, e)),
                !1)
    }
    ,
    FastClick.prototype.onTouchCancel = function () {
        "use strict";
        this.trackingClick = !1,
            this.targetElement = null
    }
    ,
    FastClick.prototype.onMouse = function (e) {
        "use strict";
        return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0,
            e.stopPropagation(),
            e.preventDefault(),
            !1) : !0 : !0
    }
    ,
    FastClick.prototype.onClick = function (e) {
        "use strict";
        var t;
        return this.trackingClick ? (this.targetElement = null,
            this.trackingClick = !1,
            !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e),
                t || (this.targetElement = null),
                t)
    }
    ,
    FastClick.prototype.destroy = function () {
        "use strict";
        var e = this.layer;
        deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0),
            e.removeEventListener("mousedown", this.onMouse, !0),
            e.removeEventListener("mouseup", this.onMouse, !0)),
            e.removeEventListener("click", this.onClick, !0),
            e.removeEventListener("touchstart", this.onTouchStart, !1),
            e.removeEventListener("touchmove", this.onTouchMove, !1),
            e.removeEventListener("touchend", this.onTouchEnd, !1),
            e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }
    ,
    FastClick.notNeeded = function (e) {
        "use strict";
        var t, n;
        if ("undefined" == typeof window.ontouchstart)
            return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!deviceIsAndroid)
                return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no"))
                    return !0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                    return !0
            }
        }
        return "none" === e.style.msTouchAction ? !0 : !1
    }
    ,
    FastClick.attach = function (e, t) {
        "use strict";
        return new FastClick(e, t)
    }
    ,
    "undefined" != typeof define && define.amd ? define(function () {
        "use strict";
        return FastClick
    }) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach,
        module.exports.FastClick = FastClick) : window.FastClick = FastClick,
    window.matchMedia || (window.matchMedia = function () {
        "use strict";
        var e = window.styleMedia || window.media;
        if (!e) {
            var t = document.createElement("style")
                , n = document.getElementsByTagName("script")[0]
                , i = null;
            t.type = "text/css",
                t.id = "matchmediajs-test",
                n.parentNode.insertBefore(t, n),
                i = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle,
                e = {
                    matchMedium: function (e) {
                        var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                        return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n,
                            "1px" === i.width
                    }
                }
        }
        return function (t) {
            return {
                matches: e.matchMedium(t || "all"),
                media: t || "all"
            }
        }
    }()),
    function (e, t) {
        "use strict";
        if ("function" != typeof e.createEvent)
            return !1;
        var n = "undefined" != typeof jQuery, i = !!("ontouchstart" in window) && navigator.userAgent.indexOf("PhantomJS") < 0, r = function (e, t, n) {
            for (var i = t.split(" "), r = i.length; r--;)
                e.addEventListener(i[r], n, !1)
        }, o = function (e) {
            return e.targetTouches ? e.targetTouches[0] : e
        }, s = function (t, i, r, o) {
            var s = e.createEvent("Event");
            if (o = o || {},
                o.x = f,
                o.y = h,
                o.distance = o.distance,
                n)
                jQuery(t).trigger(i, o);
            else {
                s.originalEvent = r;
                for (var a in o)
                    s[a] = o[a];
                s.initEvent(i, !0, !0),
                    t.dispatchEvent(s)
            }
        }, a = !1, c = t.SWIPE_TRESHOLD || 80, l = t.TAP_TRESHOLD || 200, u = t.TAP_PRECISION / 2 || 30, d = 0, f, h, p, v, m;
        i = t.JUST_ON_TOUCH_DEVICES ? !0 : i,
            r(e, i ? "touchstart" : "mousedown", function (e) {
                var t = o(e);
                p = f = t.pageX,
                    v = h = t.pageY,
                    a = !0,
                    d++ ,
                    clearTimeout(m),
                    m = setTimeout(function () {
                        p >= f - u && f + u >= p && v >= h - u && h + u >= v && !a && s(e.target, 2 === d ? "dbltap" : "tap", e),
                            d = 0
                    }, l)
            }),
            r(e, i ? "touchend" : "mouseup", function (e) {
                var t = []
                    , n = v - h
                    , i = p - f;
                if (a = !1,
                    -c >= i && t.push("swiperight"),
                    i >= c && t.push("swipeleft"),
                    -c >= n && t.push("swipedown"),
                    n >= c && t.push("swipeup"),
                    t.length)
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        s(e.target, o, e, {
                            distance: {
                                x: Math.abs(i),
                                y: Math.abs(n)
                            }
                        })
                    }
            }),
            r(e, i ? "touchmove" : "mousemove", function (e) {
                var t = o(e);
                f = t.pageX,
                    h = t.pageY
            })
    }(document, window),
    function ($) {
        var e = {
            init: function (e) {
                var n = {
                    maxSize: -1,
                    minSize: -1,
                    spacing: 5,
                    duration: 500,
                    isVertical: !1,
                    easing: void 0,
                    autoResize: !0,
                    behavior: null,
                    delayMouseIn: 0,
                    delayMouseOut: 0,
                    selectOnClick: !0,
                    deselectOnClick: !1,
                    interval: 2500,
                    interactive: !0
                }
                    , i = $.extend(n, e);
                if (-1 !== i.minSize && -1 !== i.maxSize)
                    throw new Error("Kwicks options minSize and maxSize may not both be set");
                if (i.behavior && "menu" !== i.behavior && "slideshow" !== i.behavior)
                    throw new Error("Unrecognized Kwicks behavior specified: " + i.behavior);
                return $.each(["minSize", "maxSize", "spacing"], function (e, t) {
                    var n = i[t];
                    switch (typeof n) {
                        case "number":
                            i[t + "Units"] = "px";
                            break;
                        case "string":
                            if ("%" === n.slice(-1))
                                i[t + "Units"] = "%",
                                    i[t] = +n.slice(0, -1) / 100;
                            else {
                                if ("px" !== n.slice(-2))
                                    throw new Error("Invalid value for Kwicks option " + t + ": " + n);
                                i[t + "Units"] = "px",
                                    i[t] = +n.slice(0, -2)
                            }
                            break;
                        default:
                            throw new Error("Invalid value for Kwicks option " + t + ": " + n)
                    }
                }),
                    this.each(function () {
                        $(this).data("kwicks", new t(this, i))
                    })
            },
            expand: function (e, t) {
                "object" == typeof e && (t = e,
                    e = void 0);
                var n = t && t.delay || 0;
                return this.each(function () {
                    var t = $(this)
                        , i = t.data("kwicks");
                    if (i)
                        e = "number" == typeof e ? e : -1;
                    else {
                        if (!(i = t.parent().data("kwicks")))
                            return;
                        e = t.index()
                    }
                    var r = function () {
                        if (e !== i.expandedIndex) {
                            var t = i.$panels
                                , n = t[e] || null;
                            i.$container.trigger("expand.kwicks", {
                                index: e,
                                expanded: n,
                                collapsed: t.not(n).get(),
                                oldIndex: i.expandedIndex,
                                oldExpanded: i.getExpandedPanel(),
                                isAnimated: i.isAnimated
                            })
                        }
                    }
                        , o = i.$container.data("kwicks-timeout-id");
                    o && (i.$container.removeData("kwicks-timeout-id"),
                        clearTimeout(o)),
                        n > 0 ? i.$container.data("kwicks-timeout-id", setTimeout(r, n)) : r()
                })
            },
            expanded: function () {
                var e = this.first().data("kwicks");
                if (e)
                    return e.expandedIndex
            },
            select: function (e) {
                return this.each(function () {
                    var t = $(this)
                        , n = t.data("kwicks");
                    if (n)
                        e = "number" == typeof e ? e : -1;
                    else {
                        if (!(n = t.parent().data("kwicks")))
                            return;
                        e = t.index()
                    }
                    if (e !== n.selectedIndex) {
                        var i = n.$panels
                            , r = i[e] || null;
                        n.$container.trigger("select.kwicks", {
                            index: e,
                            selected: r,
                            unselected: i.not(r).get(),
                            oldIndex: n.selectedIndex,
                            oldSelected: n.getSelectedPanel()
                        })
                    }
                    n.$container.kwicks("expand", e)
                })
            },
            selected: function () {
                var e = this.first().data("kwicks");
                if (e)
                    return e.selectedIndex
            },
            resize: function () {
                return this.each(function () {
                    var e = $(this)
                        , t = e.data("kwicks");
                    t && t.resize()
                })
            },
            destroy: function () {
                return this.each(function () {
                    var e = $(this)
                        , t = e.data("kwicks");
                    t && t.destroy()
                })
            }
        };
        $.fn.kwicks = function (t) {
            if (e[t])
                return e[t].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" != typeof t && t)
                throw new Error("Unrecognized kwicks method: " + t);
            return e.init.apply(this, arguments)
        }
            ,
            $.event.special.expand = {
                _default: function (e, t) {
                    if ("kwicks" === e.namespace) {
                        var n = $(e.target).data("kwicks");
                        n && n.expand(t.index)
                    }
                }
            },
            $.event.special.select = {
                _default: function (e, t) {
                    if ("kwicks" === e.namespace) {
                        var n = $(e.target).data("kwicks");
                        n && n.select(t.index)
                    }
                }
            };
        var t = function n(e, t) {
            var n = this;
            this.opts = t,
                this.onDestroyHandlers = [];
            var i = t.isVertical ? "vertical" : "horizontal";
            this.$container = $(e),
                this.$panels = this.$container.children();
            var r = ["kwicks", "kwicks-" + i];
            $.each(r, function (e) {
                n.$container.hasClass(e) || (n.$container.addClass(e),
                    n.onDestroy(function () {
                        n.$container.removeClass(e)
                    }))
            }),
                this.selectedIndex = this.$panels.filter(".kwicks-selected").index(),
                this.expandedIndex = this.selectedIndex,
                this.primaryDimension = t.isVertical ? "height" : "width",
                this.secondaryDimension = t.isVertical ? "width" : "height",
                this.calculatePanelSizes(),
                this.primaryAlignment = t.isVertical ? "top" : "left",
                this.secondaryAlignment = t.isVertical ? "bottom" : "right",
                this.$timer = $({
                    progress: 0
                }),
                this.isAnimated = !1,
                this.offsets = this.getOffsetsForExpanded(),
                this.updatePanelStyles(),
                this.initBehavior(),
                this.initWindowResizeHandler(),
                setTimeout(function () {
                    n.updatePanelStyles()
                }, 100)
        };
        t.prototype.calculatePanelSizes = function () {
            var e = this.opts
                , t = this.getContainerSize(!0);
            this.panelSpacing = "%" === e.spacingUnits ? t * e.spacing : e.spacing;
            var n = this.$panels.length
                , i = this.panelSpacing * (n - 1)
                , r = t - i;
            this.panelSize = r / n,
                -1 === e.minSize ? (this.panelMaxSize = -1 === e.maxSize ? 5 > n ? t / 3 * 2 : t / 3 : "%" === e.maxSizeUnits ? r * e.maxSize : e.maxSize,
                    this.panelMinSize = (r - this.panelMaxSize) / (n - 1)) : -1 === e.maxSize && (this.panelMinSize = "%" === e.minSizeUnits ? r * e.minSize : e.minSize,
                        this.panelMaxSize = r - this.panelMinSize * (n - 1))
        }
            ,
            t.prototype.getOffsetsForExpanded = function () {
                for (var e = this.expandedIndex, t = this.$panels.length, n = this.panelSpacing, i = this.panelSize, r = this.panelMinSize, o = this.panelMaxSize, s = [0], a = 1; t > a; a++)
                    s[a] = -1 === e ? a * (i + n) : e >= a ? a * (r + n) : o + r * (a - 1) + a * n;
                return s
            }
            ,
            t.prototype.setStyle = function () {
                return $.support.style ? function (e, t) {
                    e.setAttribute("style", t)
                }
                    : function (e, t) {
                        e.style.cssText = t
                    }
            }(),
            t.prototype.updatePanelStyles = function () {
                for (var e = this.offsets, t = this.$panels, n = this.primaryDimension, i = this.primaryAlignment, r = this.secondaryAlignment, o = this.panelSpacing, s = this.getContainerSize(), a = this._stylesInited ? "" : "position:absolute;", c, l, u, d, f = t.length; f--;)
                    u = c,
                        c = Math.round(e[f]),
                        f === t.length - 1 ? (l = s - c,
                            d = r + ":0;" + n + ":" + l + "px;") : (l = u - c - o,
                                d = i + ":" + c + "px;" + n + ":" + l + "px;"),
                        this.setStyle(t[f], a + d);
                this._stylesInited || (this.$container.addClass("kwicks-processed"),
                    this._stylesInited = !0)
            }
            ,
            t.prototype.initBehavior = function () {
                if (this.opts.behavior)
                    switch (this.opts.behavior) {
                        case "menu":
                            this.initMenuBehavior();
                            break;
                        case "slideshow":
                            this.initSlideshowBehavior();
                            break;
                        default:
                            throw new Error("Unrecognized behavior option: " + this.opts.behavior)
                    }
            }
            ,
            t.prototype.initMenuBehavior = function () {
                var e = this
                    , t = e.opts;
                this.addEventHandler(this.$container, "mouseleave", function () {
                    e.$container.kwicks("expand", -1, {
                        delay: t.delayMouseOut
                    })
                }),
                    this.addEventHandler(this.$panels, "mouseenter", function () {
                        $(this).kwicks("expand", {
                            delay: t.delayMouseIn
                        })
                    }),
                    (t.selectOnClick || t.deselectOnClick) && this.addEventHandler(this.$panels, "click", function () {
                        var e = $(this)
                            , n = e.hasClass("kwicks-selected");
                        n && t.deselectOnClick ? e.parent().kwicks("select", -1) : !n && t.selectOnClick && e.kwicks("select")
                    })
            }
            ,
            t.prototype.initSlideshowBehavior = function () {
                var e = this, t = this.$panels.length, n = 0, i = !1, r, o = function () {
                    i || (r = setInterval(function () {
                        e.$container.kwicks("expand", ++n % t)
                    }, e.opts.interval),
                        i = !0)
                }, s = function () {
                    clearInterval(r),
                        i = !1
                };
                o(),
                    this.onDestroy(s),
                    this.opts.interactive && (this.addEventHandler(this.$container, "mouseenter", s),
                        this.addEventHandler(this.$container, "mouseleave", o),
                        this.addEventHandler(this.$panels, "mouseenter", function () {
                            n = $(this).kwicks("expand").index()
                        }))
            }
            ,
            t.prototype.initWindowResizeHandler = function () {
                if (this.opts.autoResize) {
                    var e = this
                        , t = 0
                        , n = !1
                        , i = $(window)
                        , r = function (i) {
                            i || (n = !1);
                            var o = +new Date;
                            if (20 > o - t) {
                                if (n)
                                    return;
                                return setTimeout(r, 20 - (o - t)),
                                    void (n = !0)
                            }
                            t = o,
                                e.resize()
                        };
                    this.addEventHandler(i, "resize", r)
                }
            }
            ,
            t.prototype.getContainerSize = function (e) {
                var t = this._containerSize;
                return (e || !t) && (t = this._containerSize = this.$container[this.primaryDimension]()),
                    t
            }
            ,
            t.prototype.getExpandedPanel = function () {
                return this.$panels[this.expandedIndex] || null
            }
            ,
            t.prototype.getCollapsedPanels = function () {
                return -1 === this.expandedIndex ? [] : this.$panels.not(this.getExpandedPanel()).get()
            }
            ,
            t.prototype.getSelectedPanel = function () {
                return this.$panels[this.selectedIndex] || null
            }
            ,
            t.prototype.getUnselectedPanels = function () {
                return this.$panels.not(this.getSelectedPanel()).get()
            }
            ,
            t.prototype.onDestroy = function (e) {
                this.onDestroyHandlers.push(e)
            }
            ,
            t.prototype.addEventHandler = function (e, t, n) {
                e.on(t, n),
                    this.onDestroy(function () {
                        e.off(t, n)
                    })
            }
            ,
            t.prototype.destroy = function () {
                this.$timer.stop();
                for (var e = 0, t = this.onDestroyHandlers.length; t > e; e++)
                    this.onDestroyHandlers[e]();
                this.$panels.attr("style", "").removeClass("kwicks-expanded kwicks-selected kwicks-collapsed"),
                    this.$container.removeClass("kwicks-processed").removeData("kwicks")
            }
            ,
            t.prototype.resize = function () {
                this.getContainerSize() !== this.getContainerSize(!0) && (this.calculatePanelSizes(),
                    this.offsets = this.getOffsetsForExpanded(),
                    this.isAnimated ? this._dirtyOffsets = !0 : this.updatePanelStyles())
            }
            ,
            t.prototype.select = function (e) {
                e !== this.selectedIndex && ($(this.getSelectedPanel()).removeClass("kwicks-selected"),
                    this.selectedIndex = e,
                    $(this.getSelectedPanel()).addClass("kwicks-selected"))
            }
            ,
            t.prototype.expand = function (e) {
                var t = this
                    , n = this.expandedIndex
                    , i = this.getExpandedPanel();
                if (-1 === e && (e = this.selectedIndex),
                    e !== this.expandedIndex) {
                    $(this.getExpandedPanel()).removeClass("kwicks-expanded"),
                        $(this.getCollapsedPanels()).removeClass("kwicks-collapsed"),
                        this.expandedIndex = e,
                        $(this.getExpandedPanel()).addClass("kwicks-expanded"),
                        $(this.getCollapsedPanels()).addClass("kwicks-collapsed");
                    var r = this.$timer
                        , o = this.$panels.length
                        , s = this.offsets.slice()
                        , a = this.offsets
                        , c = this.getOffsetsForExpanded();
                    r.stop()[0].progress = 0,
                        this.isAnimated = !0,
                        r.animate({
                            progress: 1
                        }, {
                                duration: this.opts.duration,
                                easing: this.opts.easing,
                                step: function (e) {
                                    t._dirtyOffsets && (a = t.offsets,
                                        c = t.getOffsetsForExpanded(),
                                        t._dirtyOffsets = !1),
                                        a.length = 0;
                                    for (var n = 0; o > n; n++) {
                                        var i = c[n]
                                            , r = i - (i - s[n]) * (1 - e);
                                        a[n] = r
                                    }
                                    t.updatePanelStyles()
                                },
                                complete: function () {
                                    t.isAnimated = !1,
                                        t.$container.trigger("expand-complete.kwicks", {
                                            index: e,
                                            expanded: t.getExpandedPanel(),
                                            collapsed: t.getCollapsedPanels(),
                                            oldIndex: n,
                                            oldExpanded: i,
                                            isAnimated: !1
                                        })
                                }
                            })
                }
            }
    }(jQuery),
    function ($, e) {
        $.Slider = function (e, t) {
            this.$el = $(t),
                this._init(e)
        }
            ,
            $.Slider.defaults = {
                current: 0,
                bgincrement: 50,
                autoplay: !1,
                interval: 4e3
            },
            $.Slider.prototype = {
                _init: function (e) {
                    this.options = $.extend(!0, {}, $.Slider.defaults, e),
                        this.$slides = this.$el.children("div.da-slide"),
                        this.slidesCount = this.$slides.length,
                        this.current = this.options.current,
                        (this.current < 0 || this.current >= this.slidesCount) && (this.current = 0),
                        this.$slides.eq(this.current).addClass("da-slide-current"),
                        $("body").removeClass("how01 how02 how03 how04 proj01 proj02 proj03 chromeBg firefoxBg internetExplorerBg safariBg operaBg"),
                        $("body").addClass(this.$slides.eq(this.current).attr("id"));
                    for (var t = $('<nav class="da-dots"/>'), n = 0; n < this.slidesCount; ++n)
                        t.append("<span/>");
                    t.appendTo(this.$el),
                        this.$pages = this.$el.find("nav.da-dots > span"),
                        this.$navNext = this.$el.find("span.da-arrows-next"),
                        this.$navPrev = this.$el.find("span.da-arrows-prev"),
                        this.isAnimating = !1,
                        this.bgpositer = 0,
                        this.cssAnimations = Modernizr.cssanimations,
                        this.cssTransitions = Modernizr.csstransitions,
                        this.cssAnimations && this.cssAnimations || this.$el.addClass("da-slider-fb"),
                        this._updatePage(),
                        this._loadEvents(),
                        this.options.autoplay && this._startSlideshow()
                },
                _navigate: function (e, t) {
                    var n = this.$slides.eq(this.current), i, r = this;
                    if (this.current === e || this.isAnimating)
                        return !1;
                    this.isAnimating = !0;
                    var o, s, a;
                    if (a = t ? t : e > this.current ? "next" : "prev",
                        this.cssAnimations && this.cssAnimations && ("next" === a ? (o = "slide-to",
                            s = "slide-from",
                            ++this.bgpositer) : (o = "slide-to",
                                s = "slide-from",
                                --this.bgpositer),
                            this.$el.css("background-position", this.bgpositer * this.options.bgincrement + "% 0%")),
                        this.current = e,
                        i = this.$slides.eq(this.current),
                        $("body").removeClass("how01 how02 how03 how04 proj01 proj02 proj03 chromeBg firefoxBg internetExplorerBg safariBg operaBg"),
                        $("body").addClass(this.$slides.eq(this.current).attr("id")),
                        this.cssAnimations && this.cssAnimations) {
                        var c = "slide-to slide-from";
                        n.removeClass(c),
                            i.removeClass(c),
                            n.addClass(o),
                            i.addClass(s),
                            n.removeClass("da-slide-current"),
                            i.addClass("da-slide-current")
                    }
                    this.cssAnimations && this.cssAnimations || (i.css("left", "next" === a ? "100%" : "-100%").stop().animate({
                        left: "0%"
                    }, 1e3, function () {
                        r.isAnimating = !1
                    }),
                        n.stop().animate({
                            left: "next" === a ? "-100%" : "100%"
                        }, 1e3, function () {
                            n.removeClass("da-slide-current")
                        })),
                        this._updatePage()
                },
                _updatePage: function () {
                    this.$pages.removeClass("da-dots-current"),
                        this.$pages.eq(this.current).addClass("da-dots-current"),
                        $(".works").hasClass("da-slide-current") ? ($(".works").addClass("goAnim"),
                            $.doTimeout(3e3, function () {
                                $.doTimeout(700, function () {
                                    $(".outdated_notice .btn_animation").animatePNG(225, 17, 50, 0)
                                })
                            })) : $.doTimeout(1e3, function () {
                                $(".outdated_notice .btn_animation").css("background-position", "0 0"),
                                    $(".works").removeClass("goAnim")
                            }),
                        $(".steps").hasClass("da-slide-current") ? ($(".steps").addClass("goBubbles"),
                            $.doTimeout(2e3, function () {
                                $(".steps").addClass("goAnim")
                            }),
                            $.doTimeout(5800, function () {
                                $(".goAnim .b1").animatePNG(100, 12, 50, 0)
                            }),
                            $.doTimeout(6300, function () {
                                $(".goAnim .b2").animatePNG(100, 12, 50, 0)
                            })) : $.doTimeout(1e3, function () {
                                $(".bubble").css("background-position", "0 0"),
                                    $(".steps").removeClass("goAnim, goBubbles")
                            })
                },
                _startSlideshow: function () {
                    var e = this;
                    this.slideshow = setTimeout(function () {
                        var t = t = e.current < e.slidesCount - 1 ? e.current + 1 : 0;
                        e._navigate(t, "next"),
                            e.options.autoplay && e._startSlideshow()
                    }, this.options.interval)
                },
                page: function (e) {
                    return e >= this.slidesCount || 0 > e ? !1 : (this.options.autoplay && (clearTimeout(this.slideshow),
                        this.options.autoplay = !1),
                        void this._navigate(e))
                },
                _loadEvents: function () {
                    function e() {
                        var e = e = n.current > 0 ? n.current - 1 : n.slidesCount - 1;
                        n._navigate(e, "prev")
                    }
                    function t() {
                        var e = e = n.current < n.slidesCount - 1 ? n.current + 1 : 0;
                        n._navigate(e, "next")
                    }
                    var n = this;
                    this.$pages.on("click.cslider", function (e) {
                        return n.page($(this).index()),
                            !1
                    }),
                        this.$navNext.on("click.cslider", function (e) {
                            n.options.autoplay && (clearTimeout(n.slideshow),
                                n.options.autoplay = !1);
                            var t = t = n.current < n.slidesCount - 1 ? n.current + 1 : 0;
                            return n._navigate(t, "next"),
                                !1
                        }),
                        $(".goNext").click(function (e) {
                            e.preventDefault();
                            var t = t = n.current < n.slidesCount - 1 ? n.current + 1 : 0;
                            return n._navigate(t, "next"),
                                !1
                        }),
                        $("body").keydown(function (n) {
                            return 37 == n.which ? (e(),
                                !1) : 39 == n.which ? (t(),
                                    !1) : void 0
                        }),
                        $("#da-slider").on("swipeleft", function (e, n) {
                            t(),
                                e.preventDefault()
                        }),
                        $("#da-slider").on("swiperight", function (t, n) {
                            e(),
                                t.preventDefault()
                        }),
                        $("#da-slider").on("touchmove", function (e) {
                            e.preventDefault()
                        }),
                        $("#da-slider").on("touchstart", function (e) {
                            e.preventDefault()
                        }),
                        $("#da-slider").on("touchend", function (e) {
                            e.preventDefault()
                        }),
                        this.$navPrev.on("click.cslider", function (e) {
                            n.options.autoplay && (clearTimeout(n.slideshow),
                                n.options.autoplay = !1);
                            var t = t = n.current > 0 ? n.current - 1 : n.slidesCount - 1;
                            return n._navigate(t, "prev"),
                                !1
                        }),
                        this.cssTransitions && (this.options.bgincrement ? this.$el.on("webkitTransitionEnd.cslider transitionend.cslider OTransitionEnd.cslider", function (e) {
                            e.target.id === n.$el.attr("id") && (n.isAnimating = !1)
                        }) : this.$el.on("webkitAnimationEnd.cslider animationend.cslider OAnimationEnd.cslider", function (e) {
                            ("toRightAnim4" === e.originalEvent.animationName || "toLeftAnim4" === e.originalEvent.animationName) && (n.isAnimating = !1)
                        }))
                }
            };
        var t = function (e) {
            this.console && console.error(e)
        };
        $.fn.cslider = function (e) {
            if ("string" == typeof e) {
                var n = Array.prototype.slice.call(arguments, 1);
                this.each(function () {
                    var i = $.data(this, "cslider");
                    return i ? $.isFunction(i[e]) && "_" !== e.charAt(0) ? void i[e].apply(i, n) : void t("no such method '" + e + "' for cslider instance") : void t("cannot call methods on cslider prior to initialization; attempted to call method '" + e + "'")
                })
            } else
                this.each(function () {
                    var t = $.data(this, "cslider");
                    t || $.data(this, "cslider", new $.Slider(e, this))
                });
            return this
        }
    }(jQuery),
    !function (e) {
        "use strict";
        var t, n = {
            bridge: null,
            version: "0.0.0",
            pluginType: "unknown",
            disabled: null,
            outdated: null,
            unavailable: null,
            deactivated: null,
            overdue: null,
            ready: null
        }, i = {}, r = null, o = 0, s = {}, a = 0, c = {}, l = function () {
            var e, t, n, i, r = "ZeroClipboard.swf";
            if (!document.currentScript || !(i = document.currentScript.src)) {
                var o = document.getElementsByTagName("script");
                if ("readyState" in o[0])
                    for (e = o.length; e-- && ("interactive" !== o[e].readyState || !(i = o[e].src));)
                        ;
                else if ("loading" === document.readyState)
                    i = o[o.length - 1].src;
                else {
                    for (e = o.length; e--;) {
                        if (n = o[e].src,
                            !n) {
                            t = null;
                            break
                        }
                        if (n = n.split("#")[0].split("?")[0],
                            n = n.slice(0, n.lastIndexOf("/") + 1),
                            null == t)
                            t = n;
                        else if (t !== n) {
                            t = null;
                            break
                        }
                    }
                    null !== t && (i = t)
                }
            }
            return i && (i = i.split("#")[0].split("?")[0],
                r = i.slice(0, i.lastIndexOf("/") + 1) + r),
                r
        }(), u = function () {
            var e = /\-([a-z])/g
                , t = function (e, t) {
                    return t.toUpperCase()
                };
            return function (n) {
                return n.replace(e, t)
            }
        }(), d = function (t, n) {
            var i, r, o;
            return e.getComputedStyle ? i = e.getComputedStyle(t, null).getPropertyValue(n) : (r = u(n),
                i = t.currentStyle ? t.currentStyle[r] : t.style[r]),
                "cursor" !== n || i && "auto" !== i || (o = t.tagName.toLowerCase(),
                    "a" !== o) ? i : "pointer"
        }, f = function (t) {
            t || (t = e.event);
            var n;
            this !== e ? n = this : t.target ? n = t.target : t.srcElement && (n = t.srcElement),
                F.activate(n)
        }, h = function (e, t, n) {
            e && 1 === e.nodeType && (e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n))
        }, p = function (e, t, n) {
            e && 1 === e.nodeType && (e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n))
        }, v = function (e, t) {
            if (!e || 1 !== e.nodeType)
                return e;
            if (e.classList)
                return e.classList.contains(t) || e.classList.add(t),
                    e;
            if (t && "string" == typeof t) {
                var n = (t || "").split(/\s+/);
                if (1 === e.nodeType)
                    if (e.className) {
                        for (var i = " " + e.className + " ", r = e.className, o = 0, s = n.length; s > o; o++)
                            i.indexOf(" " + n[o] + " ") < 0 && (r += " " + n[o]);
                        e.className = r.replace(/^\s+|\s+$/g, "")
                    } else
                        e.className = t
            }
            return e
        }, m = function (e, t) {
            if (!e || 1 !== e.nodeType)
                return e;
            if (e.classList)
                return e.classList.contains(t) && e.classList.remove(t),
                    e;
            if (t && "string" == typeof t || void 0 === t) {
                var n = (t || "").split(/\s+/);
                if (1 === e.nodeType && e.className)
                    if (t) {
                        for (var i = (" " + e.className + " ").replace(/[\n\t]/g, " "), r = 0, o = n.length; o > r; r++)
                            i = i.replace(" " + n[r] + " ", " ");
                        e.className = i.replace(/^\s+|\s+$/g, "")
                    } else
                        e.className = ""
            }
            return e
        }, g = function () {
            var e, t, n, i = 1;
            return "function" == typeof document.body.getBoundingClientRect && (e = document.body.getBoundingClientRect(),
                t = e.right - e.left,
                n = document.body.offsetWidth,
                i = Math.round(t / n * 100) / 100),
                i
        }, y = function (t, n) {
            var i = {
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                zIndex: E(n) - 1
            };
            if (t.getBoundingClientRect) {
                var r, o, s, a = t.getBoundingClientRect();
                "pageXOffset" in e && "pageYOffset" in e ? (r = e.pageXOffset,
                    o = e.pageYOffset) : (s = g(),
                        r = Math.round(document.documentElement.scrollLeft / s),
                        o = Math.round(document.documentElement.scrollTop / s));
                var c = document.documentElement.clientLeft || 0
                    , l = document.documentElement.clientTop || 0;
                i.left = a.left + r - c,
                    i.top = a.top + o - l,
                    i.width = "width" in a ? a.width : a.right - a.left,
                    i.height = "height" in a ? a.height : a.bottom - a.top
            }
            return i
        }, w = function (e, t) {
            var n = null == t || t && t.cacheBust === !0;
            return n ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + (new Date).getTime() : ""
        }, b = function (t) {
            var n, i, r, o, s = "", a = [];
            if (t.trustedDomains && ("string" == typeof t.trustedDomains ? o = [t.trustedDomains] : "object" == typeof t.trustedDomains && "length" in t.trustedDomains && (o = t.trustedDomains)),
                o && o.length)
                for (n = 0,
                    i = o.length; i > n; n++)
                    if (o.hasOwnProperty(n) && o[n] && "string" == typeof o[n]) {
                        if (r = T(o[n]),
                            !r)
                            continue;
                        if ("*" === r) {
                            a = [r];
                            break
                        }
                        a.push.apply(a, [r, "//" + r, e.location.protocol + "//" + r])
                    }
            return a.length && (s += "trustedOrigins=" + encodeURIComponent(a.join(","))),
                t.forceEnhancedClipboard === !0 && (s += (s ? "&" : "") + "forceEnhancedClipboard=true"),
                s
        }, k = function (e, t, n) {
            if ("function" == typeof t.indexOf)
                return t.indexOf(e, n);
            var i, r = t.length;
            for ("undefined" == typeof n ? n = 0 : 0 > n && (n = r + n),
                i = n; r > i; i++)
                if (t.hasOwnProperty(i) && t[i] === e)
                    return i;
            return -1
        }, C = function (e) {
            if ("string" == typeof e)
                throw new TypeError("ZeroClipboard doesn't accept query strings.");
            return "number" != typeof e.length ? [e] : e
        }, x = function (t, n, i, r) {
            r ? e.setTimeout(function () {
                t.apply(n, i)
            }, 0) : t.apply(n, i)
        }, E = function (e) {
            var t, n;
            return e && ("number" == typeof e && e > 0 ? t = e : "string" == typeof e && (n = parseInt(e, 10)) && !isNaN(n) && n > 0 && (t = n)),
                t || ("number" == typeof q.zIndex && q.zIndex > 0 ? t = q.zIndex : "string" == typeof q.zIndex && (n = parseInt(q.zIndex, 10)) && !isNaN(n) && n > 0 && (t = n)),
                t || 0
        }, S = function () {
            var e, t, n, i, r, o, s = arguments[0] || {};
            for (e = 1,
                t = arguments.length; t > e; e++)
                if (null != (n = arguments[e]))
                    for (i in n)
                        if (n.hasOwnProperty(i)) {
                            if (r = s[i],
                                o = n[i],
                                s === o)
                                continue;
                            void 0 !== o && (s[i] = o)
                        }
            return s
        }, T = function (e) {
            if (null == e || "" === e)
                return null;
            if (e = e.replace(/^\s+|\s+$/g, ""),
                "" === e)
                return null;
            var t = e.indexOf("//");
            e = -1 === t ? e : e.slice(t + 2);
            var n = e.indexOf("/");
            return e = -1 === n ? e : -1 === t || 0 === n ? null : e.slice(0, n),
                e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
        }, I = function () {
            var e = function (e, t) {
                var n, i, r;
                if (null != e && "*" !== t[0] && ("string" == typeof e && (e = [e]),
                    "object" == typeof e && "number" == typeof e.length))
                    for (n = 0,
                        i = e.length; i > n; n++)
                        if (e.hasOwnProperty(n) && (r = T(e[n]))) {
                            if ("*" === r) {
                                t.length = 0,
                                    t.push("*");
                                break
                            }
                            -1 === k(r, t) && t.push(r)
                        }
            };
            return function (t, n) {
                var i = T(n.swfPath);
                null === i && (i = t);
                var r = [];
                e(n.trustedOrigins, r),
                    e(n.trustedDomains, r);
                var o = r.length;
                if (o > 0) {
                    if (1 === o && "*" === r[0])
                        return "always";
                    if (-1 !== k(t, r))
                        return 1 === o && t === i ? "sameDomain" : "always"
                }
                return "never"
            }
        }(), O = function (e) {
            if (null == e)
                return [];
            if (Object.keys)
                return Object.keys(e);
            var t = [];
            for (var n in e)
                e.hasOwnProperty(n) && t.push(n);
            return t
        }, P = function (e) {
            if (e)
                for (var t in e)
                    e.hasOwnProperty(t) && delete e[t];
            return e
        }, L = function () {
            try {
                return document.activeElement
            } catch (e) { }
            return null
        }, M = function (e, t) {
            for (var n = {}, i = 0, r = t.length; r > i; i++)
                t[i] in e && (n[t[i]] = e[t[i]]);
            return n
        }, z = function (e, t) {
            var n = {};
            for (var i in e)
                -1 === k(i, t) && (n[i] = e[i]);
            return n
        }, A = function (e) {
            var t = {}
                , n = {};
            if ("object" == typeof e && e) {
                for (var i in e)
                    if (i && e.hasOwnProperty(i) && "string" == typeof e[i] && e[i])
                        switch (i.toLowerCase()) {
                            case "text/plain":
                            case "text":
                            case "air:text":
                            case "flash:text":
                                t.text = e[i],
                                    n.text = i;
                                break;
                            case "text/html":
                            case "html":
                            case "air:html":
                            case "flash:html":
                                t.html = e[i],
                                    n.html = i;
                                break;
                            case "application/rtf":
                            case "text/rtf":
                            case "rtf":
                            case "richtext":
                            case "air:rtf":
                            case "flash:rtf":
                                t.rtf = e[i],
                                    n.rtf = i
                        }
                return {
                    data: t,
                    formatMap: n
                }
            }
        }, D = function (e, t) {
            if ("object" != typeof e || !e || "object" != typeof t || !t)
                return e;
            var n = {};
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    if ("success" !== i && "data" !== i) {
                        n[i] = e[i];
                        continue
                    }
                    n[i] = {};
                    var r = e[i];
                    for (var o in r)
                        o && r.hasOwnProperty(o) && t.hasOwnProperty(o) && (n[i][t[o]] = r[o])
                }
            return n
        }, j = function (e) {
            return function (t) {
                return e.call(t, 0)
            }
        }(e.Array.prototype.slice), N = function () {
            function e(e) {
                var t = e.match(/[\d]+/g);
                return t.length = 3,
                    t.join(".")
            }
            function t(e) {
                return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
            }
            function i(n) {
                n && (a = !0,
                    n.version && (u = e(n.version)),
                    !u && n.description && (u = e(n.description)),
                    n.filename && (l = t(n.filename)))
            }
            var r, o, s, a = !1, c = !1, l = !1, u = "";
            if (navigator.plugins && navigator.plugins.length)
                r = navigator.plugins["Shockwave Flash"],
                    i(r),
                    navigator.plugins["Shockwave Flash 2.0"] && (a = !0,
                        u = "2.0.0.11");
            else if (navigator.mimeTypes && navigator.mimeTypes.length)
                s = navigator.mimeTypes["application/x-shockwave-flash"],
                    r = s && s.enabledPlugin,
                    i(r);
            else if ("undefined" != typeof ActiveXObject) {
                c = !0;
                try {
                    o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
                        a = !0,
                        u = e(o.GetVariable("$version"))
                } catch (d) {
                    try {
                        o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                            a = !0,
                            u = "6.0.21"
                    } catch (f) {
                        try {
                            o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                                a = !0,
                                u = e(o.GetVariable("$version"))
                        } catch (h) {
                            c = !1
                        }
                    }
                }
            }
            n.disabled = a !== !0,
                n.outdated = u && parseFloat(u) < 11,
                n.version = u || "0.0.0",
                n.pluginType = l ? "pepper" : c ? "activex" : a ? "netscape" : "unknown"
        };
        N();
        var F = function (e) {
            if (!(this instanceof F))
                return new F(e);
            if (this.id = "" + o++ ,
                s[this.id] = {
                    instance: this,
                    elements: [],
                    handlers: {}
                },
                e && this.clip(e),
                "boolean" != typeof n.ready && (n.ready = !1),
                !F.isFlashUnusable() && null === n.bridge) {
                var t = this
                    , i = q.flashLoadTimeout;
                "number" == typeof i && i >= 0 && setTimeout(function () {
                    "boolean" != typeof n.deactivated && (n.deactivated = !0),
                        n.deactivated === !0 && F.emit({
                            type: "error",
                            name: "flash-deactivated",
                            client: t
                        })
                }, i),
                    n.overdue = !1,
                    R()
            }
        };
        F.prototype.setText = function (e) {
            return F.setData("text/plain", e),
                this
        }
            ,
            F.prototype.setHtml = function (e) {
                return F.setData("text/html", e),
                    this
            }
            ,
            F.prototype.setRichText = function (e) {
                return F.setData("application/rtf", e),
                    this
            }
            ,
            F.prototype.setData = function () {
                return F.setData.apply(F, j(arguments)),
                    this
            }
            ,
            F.prototype.clearData = function () {
                return F.clearData.apply(F, j(arguments)),
                    this
            }
            ,
            F.prototype.setSize = function (e, t) {
                return X(e, t),
                    this
            }
            ;
        var B = function (e) {
            n.ready === !0 && n.bridge && "function" == typeof n.bridge.setHandCursor ? n.bridge.setHandCursor(e) : n.ready = !1
        };
        F.prototype.destroy = function () {
            this.unclip(),
                this.off(),
                delete s[this.id]
        }
            ;
        var _ = function () {
            var e, t, n, i = [], r = O(s);
            for (e = 0,
                t = r.length; t > e; e++)
                n = s[r[e]].instance,
                    n && n instanceof F && i.push(n);
            return i
        };
        F.version = "2.0.0-beta.5";
        var q = {
            swfPath: l,
            trustedDomains: e.location.host ? [e.location.host] : [],
            cacheBust: !0,
            forceHandCursor: !1,
            forceEnhancedClipboard: !1,
            zIndex: 999999999,
            debug: !1,
            title: null,
            autoActivate: !0,
            flashLoadTimeout: 3e4
        };
        F.isFlashUnusable = function () {
            return !!(n.disabled || n.outdated || n.unavailable || n.deactivated)
        }
            ,
            F.config = function (e) {
                if ("object" == typeof e && null !== e && S(q, e),
                    "string" != typeof e || !e) {
                    var t = {};
                    for (var n in q)
                        q.hasOwnProperty(n) && (t[n] = "object" == typeof q[n] && null !== q[n] ? "length" in q[n] ? q[n].slice(0) : S({}, q[n]) : q[n]);
                    return t
                }
                return q.hasOwnProperty(e) ? q[e] : void 0
            }
            ,
            F.destroy = function () {
                F.deactivate();
                for (var e in s)
                    if (s.hasOwnProperty(e) && s[e]) {
                        var t = s[e].instance;
                        t && "function" == typeof t.destroy && t.destroy()
                    }
                var i = n.bridge;
                if (i) {
                    var r = H(i);
                    r && ("activex" === n.pluginType && "readyState" in i ? (i.style.display = "none",
                        function o() {
                            if (4 === i.readyState) {
                                for (var e in i)
                                    "function" == typeof i[e] && (i[e] = null);
                                i.parentNode.removeChild(i),
                                    r.parentNode && r.parentNode.removeChild(r)
                            } else
                                setTimeout(o, 10)
                        }()) : (i.parentNode.removeChild(i),
                            r.parentNode && r.parentNode.removeChild(r))),
                        n.ready = null,
                        n.bridge = null,
                        n.deactivated = null
                }
                F.clearData()
            }
            ,
            F.activate = function (e) {
                t && (m(t, q.hoverClass),
                    m(t, q.activeClass)),
                    t = e,
                    v(e, q.hoverClass),
                    Q();
                var i = q.title || e.getAttribute("title");
                if (i) {
                    var r = H(n.bridge);
                    r && r.setAttribute("title", i)
                }
                var o = q.forceHandCursor === !0 || "pointer" === d(e, "cursor");
                B(o)
            }
            ,
            F.deactivate = function () {
                var e = H(n.bridge);
                e && (e.removeAttribute("title"),
                    e.style.left = "0px",
                    e.style.top = "-9999px",
                    X(1, 1)),
                    t && (m(t, q.hoverClass),
                        m(t, q.activeClass),
                        t = null)
            }
            ,
            F.state = function () {
                return {
                    browser: M(e.navigator, ["userAgent", "platform", "appName"]),
                    flash: z(n, ["bridge"]),
                    zeroclipboard: {
                        version: F.version,
                        config: F.config()
                    }
                }
            }
            ,
            F.setData = function (e, t) {
                var n;
                if ("object" == typeof e && e && "undefined" == typeof t)
                    n = e,
                        F.clearData();
                else {
                    if ("string" != typeof e || !e)
                        return;
                    n = {},
                        n[e] = t
                }
                for (var r in n)
                    r && n.hasOwnProperty(r) && "string" == typeof n[r] && n[r] && (i[r] = n[r])
            }
            ,
            F.clearData = function (e) {
                "undefined" == typeof e ? (P(i),
                    r = null) : "string" == typeof e && i.hasOwnProperty(e) && delete i[e]
            }
            ;
        var R = function () {
            var t, i, r = document.getElementById("global-zeroclipboard-html-bridge");
            if (!r) {
                var o = I(e.location.host, q)
                    , s = "never" === o ? "none" : "all"
                    , a = b(q)
                    , c = q.swfPath + w(q.swfPath, q);
                r = U();
                var l = document.createElement("div");
                r.appendChild(l),
                    document.body.appendChild(r);
                var u = document.createElement("div")
                    , d = "activex" === n.pluginType;
                u.innerHTML = '<object id="global-zeroclipboard-flash-bridge" name="global-zeroclipboard-flash-bridge" width="100%" height="100%" ' + (d ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + c + '"') + ">" + (d ? '<param name="movie" value="' + c + '"/>' : "") + '<param name="allowScriptAccess" value="' + o + '"/><param name="allowNetworking" value="' + s + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + a + '"/></object>',
                    t = u.firstChild,
                    u = null,
                    t.ZeroClipboard = F,
                    r.replaceChild(t, l)
            }
            t || (t = document["global-zeroclipboard-flash-bridge"],
                t && (i = t.length) && (t = t[i - 1]),
                t || (t = r.firstChild)),
                n.bridge = t || null
        }
            , U = function () {
                var e = document.createElement("div");
                return e.id = "global-zeroclipboard-html-bridge",
                    e.className = "global-zeroclipboard-container",
                    e.style.position = "absolute",
                    e.style.left = "0px",
                    e.style.top = "-9999px",
                    e.style.width = "1px",
                    e.style.height = "1px",
                    e.style.zIndex = "" + E(q.zIndex),
                    e
            }
            , H = function (e) {
                for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;)
                    t = t.parentNode;
                return t || null
            }
            , Q = function () {
                if (t) {
                    var e = y(t, q.zIndex)
                        , i = H(n.bridge);
                    i && (i.style.top = e.top + "px",
                        i.style.left = e.left + "px",
                        i.style.width = e.width + "px",
                        i.style.height = e.height + "px",
                        i.style.zIndex = e.zIndex + 1),
                        X(e.width, e.height)
                }
            }
            , X = function (e, t) {
                var i = H(n.bridge);
                i && (i.style.width = e + "px",
                    i.style.height = t + "px")
            };
        F.emit = function (t) {
            var o, s, a, c, l, u, d, f, h;
            if ("string" == typeof t && t && (o = t),
                "object" == typeof t && t && "string" == typeof t.type && t.type && (o = t.type,
                    s = t),
                o) {
                if (t = Y(o, s),
                    J(t),
                    "ready" === t.type && n.overdue === !0)
                    return F.emit({
                        type: "error",
                        name: "flash-overdue"
                    });
                if (a = !/^(before)?copy$/.test(t.type),
                    t.client)
                    V.call(t.client, t, a);
                else
                    for (c = t.target && t.target !== e && q.autoActivate === !0 ? K(t.target) : _(),
                        l = 0,
                        u = c.length; u > l; l++)
                        d = S({}, t, {
                            client: c[l]
                        }),
                            V.call(c[l], d, a);
                return "copy" === t.type && (h = A(i),
                    f = h.data,
                    r = h.formatMap),
                    f
            }
        }
            ;
        var V = function (t, n) {
            var i = s[this.id] && s[this.id].handlers[t.type];
            if (i && i.length) {
                var r, o, a, c, l = this;
                for (r = 0,
                    o = i.length; o > r; r++)
                    a = i[r],
                        c = l,
                        "string" == typeof a && "function" == typeof e[a] && (a = e[a]),
                        "object" == typeof a && a && "function" == typeof a.handleEvent && (c = a,
                            a = a.handleEvent),
                        "function" == typeof a && x(a, c, [t], n)
            }
            return this
        }
            , W = {
                ready: "Flash communication is established",
                error: {
                    "flash-disabled": "Flash is disabled or not installed",
                    "flash-outdated": "Flash is too outdated to support ZeroClipboard",
                    "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
                    "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate",
                    "flash-overdue": "Flash communication was established but NOT within the acceptable time limit"
                }
            }
            , Y = function (e, i) {
                if (e || i && i.type) {
                    i = i || {},
                        e = (e || i.type).toLowerCase(),
                        S(i, {
                            type: e,
                            target: i.target || t || null,
                            relatedTarget: i.relatedTarget || null,
                            currentTarget: n && n.bridge || null
                        });
                    var o = W[i.type];
                    return "error" === i.type && i.name && o && (o = o[i.name]),
                        o && (i.message = o),
                        "ready" === i.type && S(i, {
                            target: null,
                            version: n.version
                        }),
                        "error" === i.type && (i.target = null,
                            /^flash-(outdated|unavailable|deactivated|overdue)$/.test(i.name) && S(i, {
                                version: n.version,
                                minimumVersion: "11.0.0"
                            })),
                        "copy" === i.type && (i.clipboardData = {
                            setData: F.setData,
                            clearData: F.clearData
                        }),
                        "aftercopy" === i.type && (i = D(i, r)),
                        i.target && !i.relatedTarget && (i.relatedTarget = G(i.target)),
                        i
                }
            }
            , G = function (e) {
                var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
                return t ? document.getElementById(t) : null
            }
            , J = function (e) {
                var r = e.target || t;
                switch (e.type) {
                    case "error":
                        k(e.name, ["flash-disabled", "flash-outdated", "flash-deactivated", "flash-overdue"]) && S(n, {
                            disabled: "flash-disabled" === e.name,
                            outdated: "flash-outdated" === e.name,
                            unavailable: "flash-unavailable" === e.name,
                            deactivated: "flash-deactivated" === e.name,
                            overdue: "flash-overdue" === e.name,
                            ready: !1
                        });
                        break;
                    case "ready":
                        var o = n.deactivated === !0;
                        S(n, {
                            disabled: !1,
                            outdated: !1,
                            unavailable: !1,
                            deactivated: !1,
                            overdue: o,
                            ready: !o
                        });
                        break;
                    case "copy":
                        var s, a, c = e.relatedTarget;
                        !i["text/html"] && !i["text/plain"] && c && (a = c.value || c.outerHTML || c.innerHTML) && (s = c.value || c.textContent || c.innerText) ? (e.clipboardData.clearData(),
                            e.clipboardData.setData("text/plain", s),
                            a !== s && e.clipboardData.setData("text/html", a)) : !i["text/plain"] && e.target && (s = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(),
                                e.clipboardData.setData("text/plain", s));
                        break;
                    case "aftercopy":
                        F.clearData(),
                            r && r !== L() && r.focus && r.focus();
                        break;
                    case "mouseover":
                        v(r, q.hoverClass);
                        break;
                    case "mouseout":
                        q.autoActivate === !0 && F.deactivate();
                        break;
                    case "mousedown":
                        v(r, q.activeClass);
                        break;
                    case "mouseup":
                        m(r, q.activeClass)
                }
            };
        F.prototype.on = function (e, t) {
            var i, r, o, a = {}, c = s[this.id] && s[this.id].handlers;
            if ("string" == typeof e && e)
                o = e.toLowerCase().split(/\s+/);
            else if ("object" == typeof e && e && "undefined" == typeof t)
                for (i in e)
                    e.hasOwnProperty(i) && "string" == typeof i && i && "function" == typeof e[i] && this.on(i, e[i]);
            if (o && o.length) {
                for (i = 0,
                    r = o.length; r > i; i++)
                    e = o[i].replace(/^on/, ""),
                        a[e] = !0,
                        c[e] || (c[e] = []),
                        c[e].push(t);
                if (a.ready && n.ready && F.emit({
                    type: "ready",
                    client: this
                }),
                    a.error) {
                    var l = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                    for (i = 0,
                        r = l.length; r > i; i++)
                        if (n[l[i]]) {
                            F.emit({
                                type: "error",
                                name: "flash-" + l[i],
                                client: this
                            });
                            break
                        }
                }
            }
            return this
        }
            ,
            F.prototype.off = function (e, t) {
                var n, i, r, o, a, c = s[this.id] && s[this.id].handlers;
                if (0 === arguments.length)
                    o = O(c);
                else if ("string" == typeof e && e)
                    o = e.split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e)
                        e.hasOwnProperty(n) && "string" == typeof n && n && "function" == typeof e[n] && this.off(n, e[n]);
                if (o && o.length)
                    for (n = 0,
                        i = o.length; i > n; n++)
                        if (e = o[n].toLowerCase().replace(/^on/, ""),
                            a = c[e],
                            a && a.length)
                            if (t)
                                for (r = k(t, a); -1 !== r;)
                                    a.splice(r, 1),
                                        r = k(t, a, r);
                            else
                                c[e].length = 0;
                return this
            }
            ,
            F.prototype.handlers = function (e) {
                var t, n = null, i = s[this.id] && s[this.id].handlers;
                if (i) {
                    if ("string" == typeof e && e)
                        return i[e] ? i[e].slice(0) : null;
                    n = {};
                    for (t in i)
                        i.hasOwnProperty(t) && i[t] && (n[t] = i[t].slice(0))
                }
                return n
            }
            ,
            F.prototype.clip = function (e) {
                e = C(e);
                for (var t = 0; t < e.length; t++)
                    if (e.hasOwnProperty(t) && e[t] && 1 === e[t].nodeType) {
                        e[t].zcClippingId ? -1 === k(this.id, c[e[t].zcClippingId]) && c[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + a++ ,
                            c[e[t].zcClippingId] = [this.id],
                            q.autoActivate === !0 && h(e[t], "mouseover", f));
                        var n = s[this.id].elements;
                        -1 === k(e[t], n) && n.push(e[t])
                    }
                return this
            }
            ,
            F.prototype.unclip = function (e) {
                var t = s[this.id];
                if (!t)
                    return this;
                var n, i = t.elements;
                e = "undefined" == typeof e ? i.slice(0) : C(e);
                for (var r = e.length; r--;)
                    if (e.hasOwnProperty(r) && e[r] && 1 === e[r].nodeType) {
                        for (n = 0; -1 !== (n = k(e[r], i, n));)
                            i.splice(n, 1);
                        var o = c[e[r].zcClippingId];
                        if (o) {
                            for (n = 0; -1 !== (n = k(this.id, o, n));)
                                o.splice(n, 1);
                            0 === o.length && (q.autoActivate === !0 && p(e[r], "mouseover", f),
                                delete e[r].zcClippingId)
                        }
                    }
                return this
            }
            ,
            F.prototype.elements = function () {
                var e = s[this.id];
                return e && e.elements ? e.elements.slice(0) : []
            }
            ;
        var K = function (e) {
            var t, n, i, r, o, a = [];
            if (e && 1 === e.nodeType && (t = e.zcClippingId) && c.hasOwnProperty(t) && (n = c[t],
                n && n.length))
                for (i = 0,
                    r = n.length; r > i; i++)
                    o = s[n[i]].instance,
                        o && o instanceof F && a.push(o);
            return a
        };
        q.hoverClass = "zeroclipboard-is-hover",
            q.activeClass = "zeroclipboard-is-active",
            "function" == typeof define && define.amd ? define(function () {
                return F
            }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = F : e.ZeroClipboard = F
    }(function () {
        return this
    }()),
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function ($) {
        function e(e) {
            return s.raw ? e : encodeURIComponent(e)
        }
        function t(e) {
            return s.raw ? e : decodeURIComponent(e)
        }
        function n(t) {
            return e(s.json ? JSON.stringify(t) : String(t))
        }
        function i(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(o, " ")),
                    s.json ? JSON.parse(e) : e
            } catch (t) { }
        }
        function r(e, t) {
            var n = s.raw ? e : i(e);
            return $.isFunction(t) ? t(n) : n
        }
        var o = /\+/g
            , s = $.cookie = function (i, o, a) {
                if (void 0 !== o && !$.isFunction(o)) {
                    if (a = $.extend({}, s.defaults, a),
                        "number" == typeof a.expires) {
                        var c = a.expires
                            , l = a.expires = new Date;
                        l.setTime(+l + 864e5 * c)
                    }
                    return document.cookie = [e(i), "=", n(o), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
                }
                for (var u = i ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], f = 0, h = d.length; h > f; f++) {
                    var p = d[f].split("=")
                        , v = t(p.shift())
                        , m = p.join("=");
                    if (i && i === v) {
                        u = r(m, o);
                        break
                    }
                    i || void 0 === (m = r(m)) || (u[v] = m)
                }
                return u
            }
            ;
        s.defaults = {},
            $.removeCookie = function (e, t) {
                return void 0 === $.cookie(e) ? !1 : ($.cookie(e, "", $.extend({}, t, {
                    expires: -1
                })),
                    !$.cookie(e))
            }
    });
