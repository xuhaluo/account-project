webpackJsonp([1], {

    0 : function(e, t) {},

    "0DHW": function(e, t) {},

    "1QDn": function(e, t, a) {

        e.exports = a.p + "static/img/tp_1.276afef.jpg"

    },

    "1dOt": function(e, t, a) {

        e.exports = a.p + "static/img/router_06.c5c58ac.jpg"

    },

    "365/": function(e, t) {},

    "3k+B": function(e, t) {},

    "3psS": function(e, t, a) {

        e.exports = a.p + "static/img/banner_02.63ded01.jpg"

    },

    "4/bX": function(e, t) {},

    "4ml/": function(e, t) {},

    "5MaO": function(e, t) {},

    "6isa": function(e, t) {

        var a, i = function() {

            var e, t, a, i, n, s, d = [],

            r = d.slice,

            l = d.filter,

            o = window.document,

            u = {},

            v = {},

            c = {

                "column-count": 1,

                columns: 1,

                "font-weight": 1,

                "line-height": 1,

                opacity: 1,

                "z-index": 1,

                zoom: 1

            },

            p = /^\s*<(\w+|!)[^>]*>/,

            I = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

            h = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,

            m = /^(?:body|html)$/i,

            f = /([A-Z])/g,

            g = ["val", "css", "html", "text", "data", "width", "height", "offset"],

            _ = o.createElement("table"),

            C = o.createElement("tr"),

            y = {

                tr: o.createElement("tbody"),

                tbody: _,

                thead: _,

                tfoot: _,

                td: C,

                th: C,

                "*": o.createElement("div")

            },

            A = /complete|loaded|interactive/,

            b = /^[\w-]*$/,

            w = {},

            x = w.toString,

            S = {},

            M = o.createElement("div"),

            k = {

                tabindex: "tabIndex",

                readonly: "readOnly",

                for: "htmlFor",

                class: "className",

                maxlength: "maxLength",

                cellspacing: "cellSpacing",

                cellpadding: "cellPadding",

                rowspan: "rowSpan",

                colspan: "colSpan",

                usemap: "useMap",

                frameborder: "frameBorder",

                contenteditable: "contentEditable"

            },

            N = Array.isArray ||

            function(e) {

                return e instanceof Array

            };

            function E(e) {

                return null == e ? String(e) : w[x.call(e)] || "object"

            }

            function R(e) {

                return "function" == E(e)

            }

            function j(e) {

                return null != e && e == e.window

            }

            function D(e) {

                return null != e && e.nodeType == e.DOCUMENT_NODE

            }

            function z(e) {

                return "object" == E(e)

            }

            function T(e) {

                return z(e) && !j(e) && Object.getPrototypeOf(e) == Object.prototype

            }

            function B(e) {

                return "number" == typeof e.length

            }

            function L(e) {

                return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()

            }

            function F(e) {

                return e in v ? v[e] : v[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")

            }

            function U(e, t) {

                return "number" != typeof t || c[L(e)] ? t: t + "px"

            }

            function P(e) {

                return "children" in e ? r.call(e.children) : a.map(e.childNodes,

                function(e) {

                    if (1 == e.nodeType) return e

                })

            }

            function O(e, t) {

                return null == t ? a(e) : a(e).filter(t)

            }

            function Y(e, t, a, i) {

                return R(t) ? t.call(e, a, i) : t

            }

            function G(e, t, a) {

                null == a ? e.removeAttribute(t) : e.setAttribute(t, a)

            }

            function Z(t, a) {

                var i = t.className || "",

                n = i && i.baseVal !== e;

                if (a === e) return n ? i.baseVal: i;

                n ? i.baseVal = a: t.className = a

            }

            function W(e) {

                try {

                    return e ? "true" == e || "false" != e && ("null" == e ? null: +e + "" == e ? +e: /^[\[\{]/.test(e) ? a.parseJSON(e) : e) : e

                } catch(t) {

                    return e

                }

            }

            return S.matches = function(e, t) {

                if (!t || !e || 1 !== e.nodeType) return ! 1;

                var a, i = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;

                if (i) return i.call(e, t);

                var n = e.parentNode,

                s = !n;

                return s && (n = M).appendChild(e),

                a = ~S.qsa(n, t).indexOf(e),

                s && M.removeChild(e),

                a

            },

            n = function(e) {

                return e.replace(/-+(.)?/g,

                function(e, t) {

                    return t ? t.toUpperCase() : ""

                })

            },

            s = function(e) {

                return l.call(e,

                function(t, a) {

                    return e.indexOf(t) == a

                })

            },

            S.fragment = function(t, i, n) {

                var s, d, l;

                return I.test(t) && (s = a(o.createElement(RegExp.$1))),

                s || (t.replace && (t = t.replace(h, "<$1></$2>")), i === e && (i = p.test(t) && RegExp.$1), i in y || (i = "*"), (l = y[i]).innerHTML = "" + t, s = a.each(r.call(l.childNodes),

                function() {

                    l.removeChild(this)

                })),

                T(n) && (d = a(s), a.each(n,

                function(e, t) {

                    g.indexOf(e) > -1 ? d[e](t) : d.attr(e, t)

                })),

                s

            },

            S.Z = function(e, t) {

                return (e = e || []).__proto__ = a.fn,

                e.selector = t || "",

                e

            },

            S.isZ = function(e) {

                return e instanceof S.Z

            },

            S.init = function(t, i) {

                var n, s;

                if (!t) return S.Z();

                if ("string" == typeof t) if ("<" == (t = t.trim())[0] && p.test(t)) n = S.fragment(t, RegExp.$1, i),

                t = null;

                else {

                    if (i !== e) return a(i).find(t);

                    n = S.qsa(o, t)

                } else {

                    if (R(t)) return a(o).ready(t);

                    if (S.isZ(t)) return t;

                    if (N(t)) s = t,

                    n = l.call(s,

                    function(e) {

                        return null != e

                    });

                    else if (z(t)) n = [t],

                    t = null;

                    else if (p.test(t)) n = S.fragment(t.trim(), RegExp.$1, i),

                    t = null;

                    else {

                        if (i !== e) return a(i).find(t);

                        n = S.qsa(o, t)

                    }

                }

                return S.Z(n, t)

            },

            (a = function(e, t) {

                return S.init(e, t)

            }).extend = function(a) {

                var i, n = r.call(arguments, 1);

                return "boolean" == typeof a && (i = a, a = n.shift()),

                n.forEach(function(n) { !

                    function a(i, n, s) {

                        for (t in n) s && (T(n[t]) || N(n[t])) ? (T(n[t]) && !T(i[t]) && (i[t] = {}), N(n[t]) && !N(i[t]) && (i[t] = []), a(i[t], n[t], s)) : n[t] !== e && (i[t] = n[t])

                    } (a, n, i)

                }),

                a

            },

            S.qsa = function(e, t) {

                var a, i = "#" == t[0],

                n = !i && "." == t[0],

                s = i || n ? t.slice(1) : t,

                d = b.test(s);

                return D(e) && d && i ? (a = e.getElementById(s)) ? [a] : [] : 1 !== e.nodeType && 9 !== e.nodeType ? [] : r.call(d && !i ? n ? e.getElementsByClassName(s) : e.getElementsByTagName(t) : e.querySelectorAll(t))

            },

            a.contains = o.documentElement.contains ?

            function(e, t) {

                return e !== t && e.contains(t)

            }: function(e, t) {

                for (; t && (t = t.parentNode);) if (t === e) return ! 0;

                return ! 1

            },

            a.type = E,

            a.isFunction = R,

            a.isWindow = j,

            a.isArray = N,

            a.isPlainObject = T,

            a.isEmptyObject = function(e) {

                var t;

                for (t in e) return ! 1;

                return ! 0

            },

            a.inArray = function(e, t, a) {

                return d.indexOf.call(t, e, a)

            },

            a.camelCase = n,

            a.trim = function(e) {

                return null == e ? "": String.prototype.trim.call(e)

            },

            a.uuid = 0,

            a.support = {},

            a.expr = {},

            a.map = function(e, t) {

                var i, n, s, d, r = [];

                if (B(e)) for (n = 0; n < e.length; n++) null != (i = t(e[n], n)) && r.push(i);

                else for (s in e) null != (i = t(e[s], s)) && r.push(i);

                return (d = r).length > 0 ? a.fn.concat.apply([], d) : d

            },

            a.each = function(e, t) {

                var a, i;

                if (B(e)) {

                    for (a = 0; a < e.length; a++) if (!1 === t.call(e[a], a, e[a])) return e

                } else for (i in e) if (!1 === t.call(e[i], i, e[i])) return e;

                return e

            },

            a.grep = function(e, t) {

                return l.call(e, t)

            },

            window.JSON && (a.parseJSON = JSON.parse),

            a.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),

            function(e, t) {

                w["[object " + t + "]"] = t.toLowerCase()

            }),

            a.fn = {

                forEach: d.forEach,

                reduce: d.reduce,

                push: d.push,

                sort: d.sort,

                indexOf: d.indexOf,

                concat: d.concat,

                map: function(e) {

                    return a(a.map(this,

                    function(t, a) {

                        return e.call(t, a, t)

                    }))

                },

                slice: function() {

                    return a(r.apply(this, arguments))

                },

                ready: function(e) {

                    return A.test(o.readyState) && o.body ? e(a) : o.addEventListener("DOMContentLoaded",

                    function() {

                        e(a)

                    },

                    !1),

                    this

                },

                get: function(t) {

                    return t === e ? r.call(this) : this[t >= 0 ? t: t + this.length]

                },

                toArray: function() {

                    return this.get()

                },

                size: function() {

                    return this.length

                },

                remove: function() {

                    return this.each(function() {

                        null != this.parentNode && this.parentNode.removeChild(this)

                    })

                },

                each: function(e) {

                    return d.every.call(this,

                    function(t, a) {

                        return ! 1 !== e.call(t, a, t)

                    }),

                    this

                },

                filter: function(e) {

                    return R(e) ? this.not(this.not(e)) : a(l.call(this,

                    function(t) {

                        return S.matches(t, e)

                    }))

                },

                add: function(e, t) {

                    return a(s(this.concat(a(e, t))))

                },

                is: function(e) {

                    return this.length > 0 && S.matches(this[0], e)

                },

                not: function(t) {

                    var i = [];

                    if (R(t) && t.call !== e) this.each(function(e) {

                        t.call(this, e) || i.push(this)

                    });

                    else {

                        var n = "string" == typeof t ? this.filter(t) : B(t) && R(t.item) ? r.call(t) : a(t);

                        this.forEach(function(e) {

                            n.indexOf(e) < 0 && i.push(e)

                        })

                    }

                    return a(i)

                },

                has: function(e) {

                    return this.filter(function() {

                        return z(e) ? a.contains(this, e) : a(this).find(e).size()

                    })

                },

                eq: function(e) {

                    return - 1 === e ? this.slice(e) : this.slice(e, +e + 1)

                },

                first: function() {

                    var e = this[0];

                    return e && !z(e) ? e: a(e)

                },

                last: function() {

                    var e = this[this.length - 1];

                    return e && !z(e) ? e: a(e)

                },

                find: function(e) {

                    var t = this;

                    return e ? "object" == typeof e ? a(e).filter(function() {

                        var e = this;

                        return d.some.call(t,

                        function(t) {

                            return a.contains(t, e)

                        })

                    }) : 1 == this.length ? a(S.qsa(this[0], e)) : this.map(function() {

                        return S.qsa(this, e)

                    }) : a()

                },

                closest: function(e, t) {

                    var i = this[0],

                    n = !1;

                    for ("object" == typeof e && (n = a(e)); i && !(n ? n.indexOf(i) >= 0 : S.matches(i, e));) i = i !== t && !D(i) && i.parentNode;

                    return a(i)

                },

                parents: function(e) {

                    for (var t = [], i = this; i.length > 0;) i = a.map(i,

                    function(e) {

                        if ((e = e.parentNode) && !D(e) && t.indexOf(e) < 0) return t.push(e),

                        e

                    });

                    return O(t, e)

                },

                parent: function(e) {

                    return O(s(this.pluck("parentNode")), e)

                },

                children: function(e) {

                    return O(this.map(function() {

                        return P(this)

                    }), e)

                },

                contents: function() {

                    return this.map(function() {

                        return r.call(this.childNodes)

                    })

                },

                siblings: function(e) {

                    return O(this.map(function(e, t) {

                        return l.call(P(t.parentNode),

                        function(e) {

                            return e !== t

                        })

                    }), e)

                },

                empty: function() {

                    return this.each(function() {

                        this.innerHTML = ""

                    })

                },

                pluck: function(e) {

                    return a.map(this,

                    function(t) {

                        return t[e]

                    })

                },



                show: function() {

                    return this.each(function() {

                        var e, t, a;

                        "none" == this.style.display && (this.style.display = ""),

                        "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (e = this.nodeName, u[e] || (t = o.createElement(e), o.body.appendChild(t), a = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == a && (a = "block"), u[e] = a), u[e]))

                    })

                },

                replaceWith: function(e) {

                    return this.before(e).remove()

                },

                wrap: function(e) {

                    var t = R(e);

                    if (this[0] && !t) var i = a(e).get(0);

                    var n = i.parentNode || this.length > 1;

                    return this.each(function(s) {

                        a(this).wrapAll(t ? e.call(this, s) : n ? i.cloneNode(!0) : i)

                    })

                },

                wrapAll: function(e) {

                    if (this[0]) {

                        var t;

                        for (a(this[0]).before(e = a(e)); (t = e.children()).length;) e = t.first();

                        a(e).append(this)

                    }

                    return this

                },

                wrapInner: function(e) {

                    var t = R(e);

                    return this.each(function(i) {

                        var n = a(this),

                        s = n.contents(),

                        d = t ? e.call(this, i) : e;

                        s.length ? s.wrapAll(d) : n.append(d)

                    })

                },

                unwrap: function() {

                    return this.parent().each(function() {

                        a(this).replaceWith(a(this).children())

                    }),

                    this

                },

                clone: function() {

                    return this.map(function() {

                        return this.cloneNode(!0)

                    })

                },

                hide: function() {

                    return this.css("display", "none")

                },

                toggle: function(t) {

                    return this.each(function() {

                        var i = a(this); (t === e ? "none" == i.css("display") : t) ? i.show() : i.hide()

                    })

                },

                prev: function(e) {

                    return a(this.pluck("previousElementSibling")).filter(e || "*")

                },

                next: function(e) {

                    return a(this.pluck("nextElementSibling")).filter(e || "*")

                },

                html: function(e) {

                    return 0 in arguments ? this.each(function(t) {

                        var i = this.innerHTML;

                        a(this).empty().append(Y(this, e, t, i))

                    }) : 0 in this ? this[0].innerHTML: null

                },

                text: function(e) {

                    return 0 in arguments ? this.each(function(t) {

                        var a = Y(this, e, t, this.textContent);

                        this.textContent = null == a ? "": "" + a

                    }) : 0 in this ? this[0].textContent: null

                },

                attr: function(a, i) {

                    var n;

                    return "string" != typeof a || 1 in arguments ? this.each(function(e) {

                        if (1 === this.nodeType) if (z(a)) for (t in a) G(this, t, a[t]);

                        else G(this, a, Y(this, i, e, this.getAttribute(a)))

                    }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : n: e

                },

                removeAttr: function(e) {

                    return this.each(function() {

                        1 === this.nodeType && e.split(" ").forEach(function(e) {

                            G(this, e)

                        },

                        this)

                    })

                },

                prop: function(e, t) {

                    return e = k[e] || e,

                    1 in arguments ? this.each(function(a) {

                        this[e] = Y(this, t, a, this[e])

                    }) : this[0] && this[0][e]

                },

                data: function(t, a) {

                    var i = "data-" + t.replace(f, "-$1").toLowerCase(),

                    n = 1 in arguments ? this.attr(i, a) : this.attr(i);

                    return null !== n ? W(n) : e

                },

                val: function(e) {

                    return 0 in arguments ? this.each(function(t) {

                        this.value = Y(this, e, t, this.value)

                    }) : this[0] && (this[0].multiple ? a(this[0]).find("option").filter(function() {

                        return this.selected

                    }).pluck("value") : this[0].value)

                },

                offset: function(e) {

                    if (e) return this.each(function(t) {

                        var i = a(this),

                        n = Y(this, e, t, i.offset()),

                        s = i.offsetParent().offset(),

                        d = {

                            top: n.top - s.top,

                            left: n.left - s.left

                        };

                        "static" == i.css("position") && (d.position = "relative"),

                        i.css(d)

                    });

                    if (!this.length) return null;

                    var t = this[0].getBoundingClientRect();

                    return {

                        left: t.left + window.pageXOffset,

                        top: t.top + window.pageYOffset,

                        width: Math.round(t.width),

                        height: Math.round(t.height)

                    }

                },

                css: function(e, i) {

                    if (arguments.length < 2) {

                        var s, d = this[0];

                        if (!d) return;

                        if (s = getComputedStyle(d, ""), "string" == typeof e) return d.style[n(e)] || s.getPropertyValue(e);

                        if (N(e)) {

                            var r = {};

                            return a.each(e,

                            function(e, t) {

                                r[t] = d.style[n(t)] || s.getPropertyValue(t)

                            }),

                            r

                        }

                    }

                    var l = "";

                    if ("string" == E(e)) i || 0 === i ? l = L(e) + ":" + U(e, i) : this.each(function() {

                        this.style.removeProperty(L(e))

                    });

                    else for (t in e) e[t] || 0 === e[t] ? l += L(t) + ":" + U(t, e[t]) + ";": this.each(function() {

                        this.style.removeProperty(L(t))

                    });

                    return this.each(function() {

                        this.style.cssText += ";" + l

                    })

                },

                index: function(e) {

                    return e ? this.indexOf(a(e)[0]) : this.parent().children().indexOf(this[0])

                },

                hasClass: function(e) {

                    return !! e && d.some.call(this,

                    function(e) {

                        return this.test(Z(e))

                    },

                    F(e))

                },

                addClass: function(e) {

                    return e ? this.each(function(t) {

                        if ("className" in this) {

                            i = [];

                            var n = Z(this);

                            Y(this, e, t, n).split(/\s+/g).forEach(function(e) {

                                a(this).hasClass(e) || i.push(e)

                            },

                            this),

                            i.length && Z(this, n + (n ? " ": "") + i.join(" "))

                        }

                    }) : this

                },

                removeClass: function(t) {

                    return this.each(function(a) {

                        if ("className" in this) {

                            if (t === e) return Z(this, "");

                            i = Z(this),

                            Y(this, t, a, i).split(/\s+/g).forEach(function(e) {

                                i = i.replace(F(e), " ")

                            }),

                            Z(this, i.trim())

                        }

                    })

                },

                toggleClass: function(t, i) {

                    return t ? this.each(function(n) {

                        var s = a(this);

                        Y(this, t, n, Z(this)).split(/\s+/g).forEach(function(t) { (i === e ? !s.hasClass(t) : i) ? s.addClass(t) : s.removeClass(t)

                        })

                    }) : this

                },

                scrollTop: function(t) {

                    if (this.length) {

                        var a = "scrollTop" in this[0];

                        return t === e ? a ? this[0].scrollTop: this[0].pageYOffset: this.each(a ?

                        function() {

                            this.scrollTop = t

                        }: function() {

                            this.scrollTo(this.scrollX, t)

                        })

                    }

                },

                scrollLeft: function(t) {

                    if (this.length) {

                        var a = "scrollLeft" in this[0];

                        return t === e ? a ? this[0].scrollLeft: this[0].pageXOffset: this.each(a ?

                        function() {

                            this.scrollLeft = t

                        }: function() {

                            this.scrollTo(t, this.scrollY)

                        })

                    }

                },

                position: function() {

                    if (this.length) {

                        var e = this[0],

                        t = this.offsetParent(),

                        i = this.offset(),

                        n = m.test(t[0].nodeName) ? {

                            top: 0,

                            left: 0

                        }: t.offset();

                        return i.top -= parseFloat(a(e).css("margin-top")) || 0,

                        i.left -= parseFloat(a(e).css("margin-left")) || 0,

                        n.top += parseFloat(a(t[0]).css("border-top-width")) || 0,

                        n.left += parseFloat(a(t[0]).css("border-left-width")) || 0,

                        {

                            top: i.top - n.top,

                            left: i.left - n.left

                        }

                    }

                },

                offsetParent: function() {

                    return this.map(function() {

                        for (var e = this.offsetParent || o.body; e && !m.test(e.nodeName) && "static" == a(e).css("position");) e = e.offsetParent;

                        return e

                    })

                }

            },

            a.fn.detach = a.fn.remove,

            ["width", "height"].forEach(function(t) {

                var i = t.replace(/./,

                function(e) {

                    return e[0].toUpperCase()

                });

                a.fn[t] = function(n) {

                    var s, d = this[0];

                    return n === e ? j(d) ? d["inner" + i] : D(d) ? d.documentElement["scroll" + i] : (s = this.offset()) && s[t] : this.each(function(e) { (d = a(this)).css(t, Y(this, n, e, d[t]()))

                    })

                }

            }),

            ["after", "prepend", "before", "append"].forEach(function(e, t) {

                var i = t % 2;

                a.fn[e] = function() {

                    var e, n, s = a.map(arguments,

                    function(t) {

                        return "object" == (e = E(t)) || "array" == e || null == t ? t: S.fragment(t)

                    }),

                    d = this.length > 1;

                    return s.length < 1 ? this: this.each(function(e, r) {

                        n = i ? r: r.parentNode,

                        r = 0 == t ? r.nextSibling: 1 == t ? r.firstChild: 2 == t ? r: null;

                        var l = a.contains(o.documentElement, n);

                        s.forEach(function(e) {

                            if (d) e = e.cloneNode(!0);

                            else if (!n) return a(e).remove();

                            n.insertBefore(e, r),

                            l &&

                            function e(t, a) {

                                a(t);

                                for (var i = 0,

                                n = t.childNodes.length; i < n; i++) e(t.childNodes[i], a)

                            } (e,

                            function(e) {

                                null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML)

                            })

                        })

                    })

                },

                a.fn[i ? e + "To": "insert" + (t ? "Before": "After")] = function(t) {

                    return a(t)[e](this),

                    this

                }

            }),

            S.Z.prototype = a.fn,

            S.uniq = s,

            S.deserializeValue = W,

            a.zepto = S,

            a

        } ();

        window.Zepto = i,

        void 0 === window.$ && (window.$ = i),

        function(e) {

            var t, a = 1,

            i = Array.prototype.slice,

            n = e.isFunction,

            s = function(e) {

                return "string" == typeof e

            },

            d = {},

            r = {},

            l = "onfocusin" in window,

            o = {

                focus: "focusin",

                blur: "focusout"

            },

            u = {

                mouseenter: "mouseover",

                mouseleave: "mouseout"

            };

            function v(e) {

                return e._zid || (e._zid = a++)

            }

            function c(e, t, a, i) {

                if ((t = p(t)).ns) var n = (s = t.ns, new RegExp("(?:^| )" + s.replace(" ", " .* ?") + "(?: |$)"));

                var s;

                return (d[v(e)] || []).filter(function(e) {

                    return e && (!t.e || e.e == t.e) && (!t.ns || n.test(e.ns)) && (!a || v(e.fn) === v(a)) && (!i || e.sel == i)

                })

            }

            function p(e) {

                var t = ("" + e).split(".");

                return {

                    e: t[0],

                    ns: t.slice(1).sort().join(" ")

                }

            }

            function I(e, t) {

                return e.del && !l && e.e in o || !!t

            }

            function h(e) {

                return u[e] || l && o[e] || e

            }

            function m(a, i, n, s, r, l, o) {

                var c = v(a),

                m = d[c] || (d[c] = []);

                i.split(/\s/).forEach(function(i) {

                    if ("ready" == i) return e(document).ready(n);

                    var d = p(i);

                    d.fn = n,

                    d.sel = r,

                    d.e in u && (n = function(t) {

                        var a = t.relatedTarget;

                        if (!a || a !== this && !e.contains(this, a)) return d.fn.apply(this, arguments)

                    }),

                    d.del = l;

                    var v = l || n;

                    d.proxy = function(e) {

                        if (! (e = A(e)).isImmediatePropagationStopped()) {

                            e.data = s;

                            var i = v.apply(a, e._args == t ? [e] : [e].concat(e._args));

                            return ! 1 === i && (e.preventDefault(), e.stopPropagation()),

                            i

                        }

                    },

                    d.i = m.length,

                    m.push(d),

                    "addEventListener" in a && a.addEventListener(h(d.e), d.proxy, I(d, o))

                })

            }

            function f(e, t, a, i, n) {

                var s = v(e); (t || "").split(/\s/).forEach(function(t) {

                    c(e, t, a, i).forEach(function(t) {

                        delete d[s][t.i],

                        "removeEventListener" in e && e.removeEventListener(h(t.e), t.proxy, I(t, n))

                    })

                })

            }

            r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents",

            e.event = {

                add: m,

                remove: f

            },

            e.proxy = function(t, a) {

                var d = 2 in arguments && i.call(arguments, 2);

                if (n(t)) {

                    var r = function() {

                        return t.apply(a, d ? d.concat(i.call(arguments)) : arguments)

                    };

                    return r._zid = v(t),

                    r

                }

                if (s(a)) return d ? (d.unshift(t[a], t), e.proxy.apply(null, d)) : e.proxy(t[a], t);

                throw new TypeError("expected function")

            },

            e.fn.bind = function(e, t, a) {

                return this.on(e, t, a)

            },

            e.fn.unbind = function(e, t) {

                return this.off(e, t)

            },

            e.fn.one = function(e, t, a, i) {

                return this.on(e, t, a, i, 1)

            };

            var g = function() {

                return ! 0

            },

            _ = function() {

                return ! 1

            },

            C = /^([A-Z]|returnValue$|layer[XY]$)/,

            y = {

                preventDefault: "isDefaultPrevented",

                stopImmediatePropagation: "isImmediatePropagationStopped",

                stopPropagation: "isPropagationStopped"

            };

            function A(a, i) {

                return ! i && a.isDefaultPrevented || (i || (i = a), e.each(y,

                function(e, t) {

                    var n = i[e];

                    a[e] = function() {

                        return this[t] = g,

                        n && n.apply(i, arguments)

                    },

                    a[t] = _

                }), (i.defaultPrevented !== t ? i.defaultPrevented: "returnValue" in i ? !1 === i.returnValue: i.getPreventDefault && i.getPreventDefault()) && (a.isDefaultPrevented = g)),

                a

            }

            function b(e) {

                var a, i = {

                    originalEvent: e

                };

                for (a in e) C.test(a) || e[a] === t || (i[a] = e[a]);

                return A(i, e)

            }

            e.fn.delegate = function(e, t, a) {

                return this.on(t, e, a)

            },

            e.fn.undelegate = function(e, t, a) {

                return this.off(t, e, a)

            },

            e.fn.live = function(t, a) {

                return e(document.body).delegate(this.selector, t, a),

                this

            },

            e.fn.die = function(t, a) {

                return e(document.body).undelegate(this.selector, t, a),

                this

            },

            e.fn.on = function(a, d, r, l, o) {

                var u, v, c = this;

                return a && !s(a) ? (e.each(a,

                function(e, t) {

                    c.on(e, d, r, t, o)

                }), c) : (s(d) || n(l) || !1 === l || (l = r, r = d, d = t), (n(r) || !1 === r) && (l = r, r = t), !1 === l && (l = _), c.each(function(t, n) {

                    o && (u = function(e) {

                        return f(n, e.type, l),

                        l.apply(this, arguments)

                    }),

                    d && (v = function(t) {

                        var a, s = e(t.target).closest(d, n).get(0);

                        if (s && s !== n) return a = e.extend(b(t), {

                            currentTarget: s,

                            liveFired: n

                        }),

                        (u || l).apply(s, [a].concat(i.call(arguments, 1)))

                    }),

                    m(n, a, l, r, d, v || u)

                }))

            },

            e.fn.off = function(a, i, d) {

                var r = this;

                return a && !s(a) ? (e.each(a,

                function(e, t) {

                    r.off(e, i, t)

                }), r) : (s(i) || n(d) || !1 === d || (d = i, i = t), !1 === d && (d = _), r.each(function() {

                    f(this, a, d, i)

                }))

            },

            e.fn.trigger = function(t, a) {

                return (t = s(t) || e.isPlainObject(t) ? e.Event(t) : A(t))._args = a,

                this.each(function() {

                    t.type in o && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, a)

                })

            },

            e.fn.triggerHandler = function(t, a) {

                var i, n;

                return this.each(function(d, r) { (i = b(s(t) ? e.Event(t) : t))._args = a,

                    i.target = r,

                    e.each(c(r, t.type || t),

                    function(e, t) {

                        if (n = t.proxy(i), i.isImmediatePropagationStopped()) return ! 1

                    })

                }),

                n

            },

            "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {

                e.fn[t] = function(e) {

                    return 0 in arguments ? this.bind(t, e) : this.trigger(t)

                }

            }),

            e.Event = function(e, t) {

                s(e) || (e = (t = e).type);

                var a = document.createEvent(r[e] || "Events"),

                i = !0;

                if (t) for (var n in t)"bubbles" == n ? i = !!t[n] : a[n] = t[n];

                return a.initEvent(e, i, !0),

                A(a)

            }

        } (i),

        function(e) {

            var t, a, i = 0,

            n = window.document,

            s = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,

            d = /^(?:text|application)\/javascript/i,

            r = /^(?:text|application)\/xml/i,

            l = "application/json",

            o = "text/html",

            u = /^\s*$/,

            v = n.createElement("a");

            function c(t, a, i, s) {

                if (t.global) return function(t, a, i) {

                    var n = e.Event(a);

                    return e(t).trigger(n, i),

                    !n.isDefaultPrevented()

                } (a || n, i, s)

            }

            function p(e, t) {

                var a = t.context;

                if (!1 === t.beforeSend.call(a, e, t) || !1 === c(t, a, "ajaxBeforeSend", [e, t])) return ! 1;

                c(t, a, "ajaxSend", [e, t])

            }

            function I(e, t, a, i) {

                var n = a.context;

                a.success.call(n, e, "success", t),

                i && i.resolveWith(n, [e, "success", t]),

                c(a, n, "ajaxSuccess", [t, a, e]),

                m("success", t, a)

            }

            function h(e, t, a, i, n) {

                var s = i.context;

                i.error.call(s, a, t, e),

                n && n.rejectWith(s, [a, t, e]),

                c(i, s, "ajaxError", [a, i, e || t]),

                m(t, a, i)

            }

            function m(t, a, i) {

                var n = i.context;

                i.complete.call(n, a, t),

                c(i, n, "ajaxComplete", [a, i]),

                function(t) {

                    t.global && !--e.active && c(t, null, "ajaxStop")

                } (i)

            }

            function f() {}

            function g(e, t) {

                return "" == t ? e: (e + "&" + t).replace(/[&?]{1,2}/, "?")

            }

            function _(t, a, i, n) {

                return e.isFunction(a) && (n = i, i = a, a = void 0),

                e.isFunction(i) || (n = i, i = void 0),

                {

                    url: t,

                    data: a,

                    success: i,

                    dataType: n

                }

            }

            v.href = window.location.href,

            e.active = 0,

            e.ajaxJSONP = function(t, a) {

                if (! ("type" in t)) return e.ajax(t);

                var s, d, r = t.jsonpCallback,

                l = (e.isFunction(r) ? r() : r) || "jsonp" + ++i,

                o = n.createElement("script"),

                u = window[l],

                v = function(t) {

                    e(o).triggerHandler("error", t || "abort")

                },

                c = {

                    abort: v

                };

                return a && a.promise(c),

                e(o).on("load error",

                function(i, n) {

                    clearTimeout(d),

                    e(o).off().remove(),

                    "error" != i.type && s ? I(s[0], c, t, a) : h(null, n || "error", c, t, a),

                    window[l] = u,

                    s && e.isFunction(u) && u(s[0]),

                    u = s = void 0

                }),

                !1 === p(c, t) ? (v("abort"), c) : (window[l] = function() {

                    s = arguments

                },

                o.src = t.url.replace(/\?(.+)=\?/, "?$1=" + l), n.head.appendChild(o), t.timeout > 0 && (d = setTimeout(function() {

                    v("timeout")

                },

                t.timeout)), c)

            },

            e.ajaxSettings = {

                type: "GET",

                beforeSend: f,

                success: f,

                error: f,

                complete: f,

                context: null,

                global: !0,

                xhr: function() {

                    return new window.XMLHttpRequest

                },

                accepts: {

                    script: "text/javascript, application/javascript, application/x-javascript",

                    json: l,

                    xml: "application/xml, text/xml",

                    html: o,

                    text: "text/plain"

                },

                crossDomain: !1,

                timeout: 0,

                processData: !0,

                cache: !0

            },

            e.ajax = function(i) {

                var s, m = e.extend({},

                i || {}),

                _ = e.Deferred && e.Deferred();

                for (t in e.ajaxSettings) void 0 === m[t] && (m[t] = e.ajaxSettings[t]); !

                function(t) {

                    t.global && 0 == e.active++&&c(t, null, "ajaxStart")

                } (m),

                m.crossDomain || ((s = n.createElement("a")).href = m.url, s.href = s.href, m.crossDomain = v.protocol + "//" + v.host != s.protocol + "//" + s.host),

                m.url || (m.url = window.location.toString()),

                function(t) {

                    t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)),

                    !t.data || t.type && "GET" != t.type.toUpperCase() || (t.url = g(t.url, t.data), t.data = void 0)

                } (m);

                var C = m.dataType,

                y = /\?.+=\?/.test(m.url);

                if (y && (C = "jsonp"), !1 !== m.cache && (i && !0 === i.cache || "script" != C && "jsonp" != C) || (m.url = g(m.url, "_=" + Date.now())), "jsonp" == C) return y || (m.url = g(m.url, m.jsonp ? m.jsonp + "=?": !1 === m.jsonp ? "": "callback=?")),

                e.ajaxJSONP(m, _);

                var A, b = m.accepts[C],

                w = {},

                x = function(e, t) {

                    w[e.toLowerCase()] = [e, t]

                },

                S = /^([\w-]+:)\/\//.test(m.url) ? RegExp.$1: window.location.protocol,

                M = m.xhr(),

                k = M.setRequestHeader;

                if (_ && _.promise(M), m.crossDomain || x("X-Requested-With", "XMLHttpRequest"), x("Accept", b || "*/*"), (b = m.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), M.overrideMimeType && M.overrideMimeType(b)), (m.contentType || !1 !== m.contentType && m.data && "GET" != m.type.toUpperCase()) && x("Content-Type", m.contentType || "application/x-www-form-urlencoded"), m.headers) for (a in m.headers) x(a, m.headers[a]);

                if (M.setRequestHeader = x, M.onreadystatechange = function() {

                    if (4 == M.readyState) {

                        var t;

                        M.onreadystatechange = f,

                        clearTimeout(A);

                        var a = !1;

                        if (M.status >= 200 && M.status < 300 || 304 == M.status || 0 == M.status && "file:" == S) {

                            C = C || ((i = m.mimeType || M.getResponseHeader("content-type")) && (i = i.split(";", 2)[0]), i && (i == o ? "html": i == l ? "json": d.test(i) ? "script": r.test(i) && "xml") || "text"),

                            t = M.responseText;

                            try {

                                "script" == C ? (0, eval)(t) : "xml" == C ? t = M.responseXML: "json" == C && (t = u.test(t) ? null: e.parseJSON(t))

                            } catch(e) {

                                a = e

                            }

                            a ? h(a, "parsererror", M, m, _) : I(t, M, m, _)

                        } else h(M.statusText || null, M.status ? "error": "abort", M, m, _)

                    }

                    var i

                }, !1 === p(M, m)) return M.abort(),

                h(null, "abort", M, m, _),

                M;

                if (m.xhrFields) for (a in m.xhrFields) M[a] = m.xhrFields[a];

                var N = !("async" in m) || m.async;

                for (a in M.open(m.type, m.url, N, m.username, m.password), w) k.apply(M, w[a]);

                return m.timeout > 0 && (A = setTimeout(function() {

                    M.onreadystatechange = f,

                    M.abort(),

                    h(null, "timeout", M, m, _)

                },

                m.timeout)),

                M.send(m.data ? m.data: null),

                M

            },

            e.get = function() {

                return e.ajax(_.apply(null, arguments))

            },

            e.post = function() {

                var t = _.apply(null, arguments);

                return t.type = "POST",

                e.ajax(t)

            },

            e.getJSON = function() {

                var t = _.apply(null, arguments);

                return t.dataType = "json",

                e.ajax(t)

            },

            e.fn.load = function(t, a, i) {

                if (!this.length) return this;

                var n, d = this,

                r = t.split(/\s/),

                l = _(t, a, i),

                o = l.success;

                return r.length > 1 && (l.url = r[0], n = r[1]),

                l.success = function(t) {

                    d.html(n ? e("<div>").html(t.replace(s, "")).find(n) : t),

                    o && o.apply(d, arguments)

                },

                e.ajax(l),

                this

            };

            var C = encodeURIComponent;

            e.param = function(t, a) {

                var i = [];

                return i.add = function(t, a) {

                    e.isFunction(a) && (a = a()),

                    null == a && (a = ""),

                    this.push(C(t) + "=" + C(a))

                },

                function t(a, i, n, s) {

                    var d, r = e.isArray(i),

                    l = e.isPlainObject(i);

                    e.each(i,

                    function(i, o) {

                        d = e.type(o),

                        s && (i = n ? s: s + "[" + (l || "object" == d || "array" == d ? i: "") + "]"),

                        !s && r ? a.add(o.name, o.value) : "array" == d || !n && "object" == d ? t(a, o, n, i) : a.add(i, o)

                    })

                } (i, t, a),

                i.join("&").replace(/%20/g, "+")

            }

        } (i),

        (a = i).fn.serializeArray = function() {

            var e, t, i = [],

            n = function(t) {

                if (t.forEach) return t.forEach(n);

                i.push({

                    name: e,

                    value: t

                })

            };

            return this[0] && a.each(this[0].elements,

            function(i, s) {

                t = s.type,

                (e = s.name) && "fieldset" != s.nodeName.toLowerCase() && !s.disabled && "submit" != t && "reset" != t && "button" != t && "file" != t && ("radio" != t && "checkbox" != t || s.checked) && n(a(s).val())

            }),

            i

        },

        a.fn.serialize = function() {

            var e = [];

            return this.serializeArray().forEach(function(t) {

                e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))

            }),

            e.join("&")

        },

        a.fn.submit = function(e) {

            if (0 in arguments) this.bind("submit", e);

            else if (this.length) {

                var t = a.Event("submit");

                this.eq(0).trigger(t),

                t.isDefaultPrevented() || this.get(0).submit()

            }

            return this

        },

        function(e) {

            "__proto__" in {} || e.extend(e.zepto, {

                Z: function(t, a) {

                    return t = t || [],

                    e.extend(t, e.fn),

                    t.selector = a || "",

                    t.__Z = !0,

                    t

                },

                isZ: function(t) {

                    return "array" === e.type(t) && "__Z" in t

                }

            });

            try {

                getComputedStyle(void 0)

            } catch(e) {

                var t = getComputedStyle;

                window.getComputedStyle = function(e) {

                    try {

                        return t(e)

                    } catch(e) {

                        return null

                    }

                }

            }

        } (i)

    },

    "6vSO": function(e, t) {},

    "7ETt": function(e, t) {},

    "8Ybq": function(e, t) {},

    "8xZC": function(e, t) {},

    "900P": function(e, t, a) {

        e.exports = a.p + "static/img/title_box.7d21111.jpg"

    },

    "9Nfh": function(e, t) {

        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABBCAYAAACUyynLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZGE3ZTcyMC04YTA5LWEwNGYtYjIxNi0yNGIzNDA5YTc1MzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzgzMzg0NjlDNDc2MTFFODlBMzk5OEFFNEJEMjMyNkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzgzMzg0NjhDNDc2MTFFODlBMzk5OEFFNEJEMjMyNkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRTUxRUIzMEMyQzNFODExQjFGMTlBMjNDMzZBMkQxOSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU5ZTBiNWQyLTM2MDEtYjI0OS05YjJmLWY0MzBiZDZiZGJlYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PirHLPIAAAY3SURBVHja7JtrbBVFFMfn9m0opUBpijSI1iggjRoVfCaIURJapFZEMSZ+M0pjP6ioieGzMRoSY3zER0yAVAQfVRGIRltSfIBWFHykYlALtaCgViyVR7n+T3puPAx7r7uzM3tv2z3JL5m9d3dm97/zOHNmNpFMJlWWrQDUgEvAFDANVIB8kADHwH7QDXrAdvBTtm84W3YraABXg+qA13aBz0Er2Az+jvLGE1mqaQ+DRy3ldQi8Dl7iWjhiahrVpk/AIB+P0/6nmvIZ+B4cYCF+B0luolQTzxHNWF4/EdzFtPLL2D6ca9oc8BS4DGwBN3AfVcy1jQr/mJvanz7zLAO1YD4371qPc54GD4IjTp6KRHPEiuTpVu6gnGvAWo+yukGdi2dzIVYxaNEe4CBocPiCiIvAWx7iPTIcRCvTbpoEnOBYMMltoFe7h1W5LhpxN+gA90QolmQ8eE8Tbr2t/BM54Ny6tMfBA+L4TdAYNtM8NbJtueYP3gSeyAWXo4JdiJ4cFu8xdkFStgi8nS3RzgU7WLR5YGsOC0ciLeQ0OdmV7EBH3jxXg1JQyI5rLluDaA0UDHg+GzVtoajiJ3iK053jws0G28TxlTy9i6ymPadNwE0Euw+8A64NcA3V6A2gyaA8mpOuEsfPRjmNWiL8nz2GeVRpfpSfGUODdk2lQbljwFGRx+VRObcfiULvNMyDbn6nJkJjhvMbtXM7eMpmUvZKkc+mKESbJQrsA4UhvOuxHsLVe5xXr53TDvJClEu1fFDkd2aQ6036tCUiTf3D8RD94mHunHeI317xOK9FpD8Ec8HJEOVS+PxdbVBzOhBcJdLrLIxo/3DcrYOP13ick/ptE7jO0ki6XnNHnLkcY0EvGAMG2EG0GZ/PF9Fd1zYB/MKOOT3DJH6B1sPdc1gwxRFXU8Hm8gxCiWbWD/p4WlaknX+UvfdycIbWSqi5thvcA+X3NYfPyUGfCb5wIVqNSHcaCnY+aLNYY1aA6bxCFdS+YtHIZvkVLWifVqV1piZ2zEFTM83zG+1lOlmNOkuk9xne6I/gPF6hOs6LK9KoT1sMbuZjWp57jfu7U/pjnvNu5TxN7IBIj3Ml2niR/i1EzdjNZConJdoHYK2jwUBGOcpcuRz9cgbmcGSrSJO2bf1RiCat0OHDHEyTtm0Jk34xaPPMN+kDPGwKRzbyPPyyQeGOKE7/4dGn5bO70qbMo8ayFg+4Em2/hWYzDXwHSnyev5jJNKOYocx2Ek1N01StNs9dIj3TULTSAIL5sRLO08Q2sttBo+8LrmraDyI93fBGyQu/ESxI0zxP8MxjtggcbvO411Tz3Mh5mlgXO7VOg5CVIqRyKGRYKBNNImzTZHG7RF2IGJxxaOhX8KmY8M5zOJn2SptaHvt7G3iqVB42s6Am1wsXqeFh5FpcKPpi2to1MUrRWkX6FpXdLah+jfrNajGQ1bBwk0wyKzDsPDs5OkBuB+1AfMbyQ5akSafsbFDPA4HfmQnFzmi3Za1wfUi4K/g/ZwNBijrRUe9zMBA0i/ybtf9KwZGkPet0PRCkjOLre4R3f6/lmvaiGloXaOH0ae/aYlmBA6lhVtipP1sn+ozJISMfQWcV1DyLlXl4vIi9AQo9HY5KNMWxrNRCy/sq9/dzWLGwG2BuF+nrwUOjQTQb+9PuV6dulKPg4RuO75tGwKU8spquuxZwOOhlNfT9QqSiKe6wl4pjCvu0OxKMVqP+sugfUj9cGWXzlM1UfiXS9j/hnDBGb7nXYn67stE8ZciH5qUXiN+WKwt7XNPEwSjyUSWEXMkjYZXPPAp51Nwc2IVx8OFFm+Y80q6cqQ4c4GrQI8rZDSqi2HLvKuM1mnAD7NnnWy5nMtgryumKQjRXW+LvAMvUf4sVNMo9ybOIZRY78V6eA6dW118dLi5HJqNoAn0RN1/7fS9HS4gtKvymF3oJtAD97UgQTU65aB//pR7//ayG9lRQcJDi9bTq3cduxSDXUprffqn8f944IkST4jWroS0JfuykcIuoKdJ3oz2jTbSUzeCZwwLuk4p8XkfR152jVTRplezbXcx9IO3joHWBMq5lA9wsaWq2ejQ2zzjKEYsWWyxaLFosWixaLFpssWixaLlk/wowAMokk2ygRlu/AAAAAElFTkSuQmCC"

    },

    "9bZ9": function(e, t) {},

    "9hOS": function(e, t) {},

    B2jS: function(e, t, a) {

        e.exports = a.p + "static/img/ewm.99153cf.jpg"

    },

    "C+zq": function(e, t) {},

    "E+jV": function(e, t) {},

    EIoW: function(e, t) {},

    ELLR: function(e, t) {},

    FA4p: function(e, t) {},

    JdHl: function(e, t) {

        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZGE3ZTcyMC04YTA5LWEwNGYtYjIxNi0yNGIzNDA5YTc1MzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTE5QzM5MzRDNDRDMTFFODk3NzFGNkNBRkVCREMwMEYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTE5QzM5MzNDNDRDMTFFODk3NzFGNkNBRkVCREMwMEYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRjUxRUIzMEMyQzNFODExQjFGMTlBMjNDMzZBMkQxOSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjk2M2RkOTYzLWIxMDctMDk0MS1iYTIwLWI4YTQ1ZGM0Mzk3MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsJokXIAAAJUSURBVHjaxJffS1RBFMf3ru4KC2ZCa0bYw4rlLzYM+/GWKBKtRVZ/gw/5ruC7oIJgsPi0UA+2Ui9FICQSCSoi9iIG+QOR9qWWMFE310XT9XvhXDiMO/fXjtuBD/fc3ZlzvnNnmDmjZbNZjw27BCKgCdQCP8iANbAAPoGUx43pAkxoBaMgnTW3bRAFLRbxzmD256sciQ7BL5AAW/Qu2st8BdSCTSHoCLgLKoCX2vnAZdAG4kL7NXDFjYAwjcywt+C6zdHcAR9Z3y07IsQfdlmAHqfzSQyyGCvsi1kKGGcd+1wmN+hlsQbsCLjNOkzmmdxgnuIdmU2FOPoTcFWRgHJwwNaSVMAFNvqoouQGxqLMyNp4sRd1sn0p5lFrH+hZAupzNdAF3Cf/H0goFjAJTsi/JxNwjfwd8FexgCT4TX6NTEAx+cdMrUpL07NMJmCfzZP/HASUCkLOCNhkCi8qTn4DBMlflwmYIV8DVYoFtDN/TlYPBNh5/0bxPjDN9gHNbCeMsc2oWlHyahYzbrUVN7PGs4oEJFjMoJ3TkH+F13kmf8diDTqpB36yjkNWZ3kOisAYi/HNaUFSBVIswBJotJn8Fthgfffc1oQhsCzUeBPgBZVnRWy0DVQ5TQntF0El6AJfQKebqnhYUoLr07QuTBe3fkmJ99ipAJ06mtM/FveCJC3ckND/mdDukZhDs3kzCoAwuEk3Ix/djFbBV/AdHEn6doAJ9v4cvLd7M1JFRPYlCiVA56kg4qGTKVBlD6hKMuxJoQXo1gY+k//jfwgwjuluMHUqwABbfEq6FJsXcAAAAABJRU5ErkJggg=="

    },

    KLBP: function(e, t) {},

    KbJn: function(e, t) {},

    MrH0: function(e, t) {},

    NHnr: function(e, t, a) {

        "use strict";

        Object.defineProperty(t, "__esModule", {

            value: !0

        });

        var i = a("7+uW"),

        n = {

            render: function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    attrs: {

                        id: "app"

                    }

                },

                [t("router-view")], 1)

            },

            staticRenderFns: []

        };

        var s = a("VU/8")({

            name: "App"

        },

        n, !1,

        function(e) {

            a("VW6p"),

            a("c1+2")

        },

        null, null).exports,

        d = a("/ocq"),

        r = {

            mounted: function() {

                console.log(this.$route.path)

            },

            data: function() {

                return {

                    activeIndex: 0,

                    navbar: [{

                        title: "首页",

                        icon: "&#xe63b;",

                        actIcon: "&#xe65d;",

                        link: "/"

                    },

                    {

                        title: "自选",

                        icon: "&#xe62a;",

                        actIcon: "&#xe64b;",

                        link: "self"

                    },

                    {

                        title: "策略",

                        icon: "&#xe638;",

                        actIcon: "&#xe64e;",

                        link: "/cl"

                    },

                    {

                        title: "资讯",

                        icon: "&#xe631;",

                        actIcon: "&#xe643;",

                        link: "zx"

                    },

                    {

                        title: "我的",

                        icon: "&#xe63a;",

                        actIcon: "&#xe65b;",

                        link: "me"

                    }]

                }

            },

            methods: {

                tap: function(e) {

                    this.activeIndex = e

                }

            }

        },

        l = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", {

                    staticClass: "footer"

                },

                [a("ul", e._l(e.navbar,

                function(t, i) {

                    return a("router-link", {

                        key: i,

                        staticClass: "li",

                        attrs: {

                            tag: "li",

                            "active-class": "active",

                            to: t.link,

                            exact: ""

                        }

                    },

                    ["-1" != e.$route.path.indexOf(t.link) && "0" != e.$route.path.indexOf(t.link) || e.$route.path == t.link ? a("i", {

                        staticClass: "top iconfont",

                        domProps: {

                            innerHTML: e._s(t.actIcon)

                        }

                    }) : a("i", {

                        staticClass: "top iconfont",

                        domProps: {

                            innerHTML: e._s(t.icon)

                        }

                    }), e._v(" "), a("p", {

                        staticClass: "bottom"

                    },

                    [e._v(e._s(t.title))])])

                }), 1)])

            },

            staticRenderFns: []

        };

        var o = {

            components: {

                BootomFooter: a("VU/8")(r, l, !1,

                function(e) {

                    a("E+jV")

                },

                "data-v-912f2240", null).exports

            }

        },

        u = {

            render: function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", [t("bootom-footer"), this._v(" "), t("router-view")], 1)

            },

            staticRenderFns: []

        };

        var v = a("VU/8")(o, u, !1,

        function(e) {

            a("KbJn")

        },

        null, null).exports,

        c = a("//Fk"),

        p = a.n(c),

        I = a("mtWM"),

        h = a.n(I),

        m = a("mw3O"),

        f = a.n(m),

        g = a("GmCl"),

        _ = function(e, t, a) {

            return new g.promise(function(i, n) {

                h()({

                    url: e,

                    method: "post",

                    data: f.a.stringify(t),

                    headers: a || {

                        "Content-Type": "application/x-www-form-urlencoded"

                    }

                }).then(function(e) {

                    i(e)

                }).

                catch(function(e) {

                    n(e)

                })

            })

        },

        C = function(e, t, a) {

            return new g.promise(function(i, n) {

                h.a.get(e, {

                    headers: a || {},

                    params: t

                }).then(function(e) {

                    i(e)

                }).

                catch(function(e) {

                    n(e)

                })

            })

        },

        y = function(e, t, a) {

            return new p.a(function(i, n) {

                h.a.delete(e, {

                    headers: a || {},

                    params: t

                }).then(function(e) {

                    i(e)

                }).

                catch(function(e) {

                    n(e)

                })

            })

        },

        A = {

            mounted: function() {

                this.getZs(),

                this.getDt(),

                this.getCl(),

                this.getBull()

            },

            filters: {

                toPercentage: function(e) {

                    var t = Number(100 * e).toFixed(2);

                    return t += "%"

                },

                filterDate: function(e) {

                    var t = e.split("-"),

                    a = t[1] + "-" + t[2];

                    return a = (t = a.split(":"))[0] + ":" + t[1]

                }

            },

            watch: {

                searchInput: function(e) {

                    var t = this;

                    C("/api/stock/search", {

                        code: e

                    }).then(function(e) {

                        t.addInput = e.data.data,

                        console.log(t.addInput)

                    },

                    function(e) {

                        console.log(e)

                    })

                }

            },

            data: function() {

                return {

                    searchInput: "",

                    addInput: [],

                    tab: [{

                        title: "最新动态",

                        more: "动态",

                        moreLink: "/dynamic"

                    },

                    {

                        title: " ",

                        more: "策略2",

                        moreLink: "/morecl"

                    },

                    {

                        title: " ",

                        more: "达人2",

                        moreLink: "/bullUser"

                    }],

                    tabIndex: 0,

                    swiperOption: {

                        autoplay: !0,

                        loop: !0,

                        pagination: {

                            el: ".swiper-pagination"

                        }

                    },

                    Zs: [],

                    Dt: [],

                    Cl: [],

                    Bull: [],

                    more: "动态",

                    moreLink: "/dynamic"

                }

            },

            methods: {

                toBull: function(e) {

                    this.$router.push({

                        path: "/bullUser",

                        query: {

                            id: e

                        }

                    })

                },

                changeCount: function() {},

                postSearch: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    _("/api/search", {

                        code: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(a) {

                        a.status && console.log("历史记录添加成功"),

                        t.$router.push({

                            path: "/ks",

                            query: {

                                code: e

                            }

                        })

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                addMyself: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    _("/api/selfstock", {

                        code: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(e) {

                        e.status && t.$message("已添加到自选股票")

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                getZs: function() {

                    var e = this;

                    C("/api/stock/getRealTimeInfos/sh000001,sz399006,sz399001", {},

                    {}).then(function(t) {

                        e.Zs = t.data

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                getDt: function() {

                    var e = this;

                    this.Dt = this.Dt.splice(0, -1),

                    C("/api/tactics/home/new?include=user,shares", {},

                    {}).then(function(t) {

                        console.log(t),

                        e.Dt = t.data.data

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                getCl: function() {

                    var e = this;

                    this.Cl = this.Cl.splice(0, -1),

                    C("/api/tactics/home/best?include=user,shares", {},

                    {}).then(function(t) {

                        console.log(t),

                        e.Cl = t.data.data

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                getBull: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    t ? C("/api/getbestinfo_login", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        e.Bull = t.data.data

                    }) : C("/api/getbestinfo_nologin", {}).then(function(t) {

                        console.log(t),

                        e.Bull = t.data.data

                    })

                },

                tabClick: function(e) {

                    this.tabIndex = e,

                    this.more = this.tab[e].more,

                    this.moreLink = this.tab[e].moreLink,

                    0 == e ? this.getDt() : 1 == e ? this.getCl() : 2 == e && this.getBull(),

                    console.log(this.tabIndex)

                },

                gz: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    _("/api/follow", {

                        to_user_id: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(e) {

                        console.log(e),

                        t.$message({

                            message: e.data.msg,

                            type: "success"

                        }),

                        t.getBull()

                    },

                    function(e) {

                        console.log(e)

                    })

                }

            }

        },

        b = {

            render: function() {

                var e = this,

                t = e.$createElement,

                i = e._self._c || t;

                return i("div", [i("div", {

                    staticClass: "banner"

                },

                [i("div", {

                    staticClass: "search"

                },

                [i("div", {

                    staticClass: "input",

                    staticStyle: {

                        margin: "0 auto",

                        float: "none"

                    }

                },

                [e._m(0), e._v(" "), i("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.searchInput,

                        expression: "searchInput"

                    }],

                    attrs: {

                        placeholder: "请输入股票代码/名称",

                        type: "",

                        name: "",

                        id: ""

                    },

                    domProps: {

                        value: e.searchInput

                    },

                    on: {

                        blur: function(t) {

                            return t.preventDefault(),

                            e.changeCount()

                        },

                        input: function(t) {

                            t.target.composing || (e.searchInput = t.target.value)

                        }

                    }

                }), e._v(" "), i("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 0 != e.addInput.length,

                        expression: "addInput.length != 0"

                    }],

                    staticClass: "search_div",

                    staticStyle: {

                        "z-index": "999",

                        position: "relative"

                    }

                },

                [i("ul", e._l(e.addInput,

                function(t, a) {

                    return i("li", {

                        key: a

                    },

                    [i("div", {

                        on: {

                            click: function(a) {

                                return e.postSearch(t.code)

                            }

                        }

                    },

                    [i("span", {

                        staticClass: "left"

                    },

                    [e._v(e._s(e._f("filtersName")(t.code)))]), e._v(" "), i("span", {

                        staticClass: "left",

                        staticStyle: {

                            "margin-left": ".2rem"

                        }

                    },

                    [e._v(e._s(t.name))])]), e._v(" "), i("span", {

                        staticClass: "right",

                        on: {

                            click: function(a) {

                                return e.addMyself(t.code)

                            }

                        }

                    },

                    [e._v("点击添加")])])

                }), 0)])])]), e._v(" "), i("swiper", {

                    ref: "mySwiper",

                    attrs: {

                        options: e.swiperOption

                    }

                },

                [i("swiper-slide", [i("img", {

                    attrs: {

                        src: a("VTq3")

                    }

                })]), e._v(" "), i("swiper-slide", [i("img", {

                    attrs: {

                        src: a("3psS")

                    }

                })]), e._v(" "), i("div", {

                    staticClass: "swiper-pagination",

                    attrs: {

                        slot: "pagination"

                    },

                    slot: "pagination"

                })], 1)], 1), e._v(" "), i("div", {

                    staticClass: "container"

                },

                [i("div", {

                    staticClass: "nav"

                },

                [i("ul", [i("li", [i("router-link", {

                    attrs: {

                        tag: "a",

                        to: "/self"

                    }

                },

                [i("img", {

                    attrs: {

                        src: a("Wxr6")

                    }

                }), e._v(" "), i("p", [e._v("发布策略")])])], 1), e._v(" "), i("li", [i("router-link", {

                    attrs: {

                        tag: "a",

                        to: "/recharge"

                    }

                },

                [i("img", {

                    attrs: {

                        src: a("OYuN")

                    }

                }), e._v(" "), i("p", [e._v("充值中心")])])], 1), e._v(" "), i("li", {

                    staticClass: "nomargin"

                },

                [i("router-link", {

                    attrs: {

                        tag: "a",

                        to: "mrouter"

                    }

                },

                [i("img", {

                    attrs: {

                        src: a("oZfJ")

                    }

                }), e._v(" "), i("p", [e._v("新手指引")])])], 1)])]), e._v(" "), i("div", {

                    staticClass: "share_num"

                },

                [i("ul", e._l(e.Zs,

                function(t, a) {

                    return i("li", {

                        key: a,

                        staticClass: "li"

                    },

                    [i("p", {

                        staticClass: "top"

                    },

                    [e._v(e._s(t.name))]), e._v(" "), i("p", {

                        staticClass: "center",

                        class: {

                            down_green: -1 != t.up_value.indexOf("-")

                        },

                        staticStyle: {

                            color: "red"

                        }

                    },

                    [e._v(e._s(t.current_price))]), e._v(" "), i("div", {

                        staticClass: "bottom"

                    },

                    [i("span", {

                        staticClass: "left",

                        class: {

                            down_green: -1 != t.up_value.indexOf("-")

                        },

                        staticStyle: {

                            color: "red"

                        }

                    },

                    [e._v(e._s(t.up_value))]), e._v(" "), i("span", {

                        staticClass: "right",

                        class: {

                            down_green: -1 != t.up_value.indexOf("-")

                        },

                        staticStyle: {

                            color: "red"

                        }

                    },

                    [e._v(e._s(t.up_ratio))])])])

                }), 0)]), e._v(" "), i("div", {

                    staticClass: "comment"

                },

                [i("router-link", {

                    staticClass: "more",

                    attrs: {

                        to: e.moreLink

                    }

                },

                [e._v(" ")]), e._v(" "), i("div", {

                    staticClass: "tabbar"

                },

                [i("ul", e._l(e.tab,

                function(t, a) {

                    return i("li", {

                        key: a,

                        class: {

                            active: a == e.tabIndex

                        },

                        on: {

                            click: function(t) {

                                return e.tabClick(a)

                            }

                        }

                    },

                    [e._v(e._s(t.title))])

                }), 0)]), e._v(" "), i("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 0 == e.tabIndex,

                        expression: "tabIndex == 0"

                    }],

                    staticClass: "tab"

                },

                [i("ul", e._l(e.Dt,

                function(t, a) {

                    return i("li", {

                        key: a

                    },

                    [i("div", {

                        staticClass: "dynamic"

                    },

                    [i("div", {

                        staticClass: "user"

                    },

                    [i("span", {

                        staticClass: "icon"

                    },

                    [i("img", {

                        staticStyle: {

                            "border-radius": ".18rem",

                            width: "0rem",

                            height: "0rem"

                        },

                        attrs: {

                            src: t.user.data.image

                        }

                    })]), e._v(" "), i("span", {

                        staticClass: "username"

                    },

                    [e._v(e._s(t.user.data.name))])]), e._v(" "), i("div", {

                        staticClass: "transaction"

                    },

                    [i("div", {

                        staticClass: "user_num"

                    },

                    [e._v("\n\t\t\t\t\t\t\t\t\t" + e._s(t.shares.data.name) + "  " + e._s(e._f("filtersName")(t.shares.data.code)) + "\n\t\t\t\t\t\t\t\t")]), e._v(" "), null != t.price ? i("div", {

                        staticClass: "buy"

                    },

                    [e._v("\n\t\t\t\t\t\t\t\t\t" + e._s(t.price) + "  "),i("span", [e._v("买入")]) ,i("router-link", {staticClass: "goumai",attrs: {to: "/ks?code="+t.shares.data.code}},[e._v("跟买")])]) : e._e(), e._v(" "), null != t.created_time ? i("div", {

                        staticClass: "time"

                    },

                    [e._v("\n\t\t\t\t\t\t\t\t\t" + e._s(t.created_time) + " \n\t\t\t\t\t\t\t\t")]) : e._e()])])])

                }), 0)]), e._v(" "), i("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 1 == e.tabIndex,

                        expression: "tabIndex == 1"

                    }],

                    staticClass: "tab2"

                },

                e._l(e.Cl,

                function(t, a) {

                    return i("div", {

                        key: a,

                        staticClass: "box"

                    },

                    [i("div", {

                        staticClass: "img"

                    },

                    [a < 3 ? i("img", {

                        attrs: {

                            src: "static/images/medal_0" + (a + 1) + ".jpg",

                            alt: ""

                        }

                    }) : e._e()]), e._v(" "), i("div", {

                        staticClass: "right"

                    },

                    [i("div", {

                        staticClass: "top"

                    },

                    [i("p", {

                        staticClass: "name"

                    },

                    [e._v(e._s(t.shares.data.name) + "  " + e._s(t.shares.data.code))]), e._v(" "), i("div", {

                        staticClass: "user"

                    },

                    [i("i", {

                        staticClass: "icon"

                    },

                    [null != t.user.data.image ? i("img", {

                        staticStyle: {

                            "border-radius": ".18rem",

                            width: ".36rem",

                            height: ".36rem"

                        },

                        attrs: {

                            src: t.user.data.image,

                            alt: ""

                        }

                    }) : e._e()]), e._v(" "), i("span", [e._v(e._s(t.user.data.name ? t.user.data.name: "时金用户"))])])]), e._v(" "), i("div", {

                        staticClass: "center"

                    },

                    [i("ul", [i("li", [i("span", {

                        staticClass: "first",

                        class: {

                            down_green: parseInt(t.rate) < 0

                        }

                    },

                    [e._v(e._s(t.rate))])]), e._v(" "), i("li", [i("span", {

                        staticClass: "title"

                    },

                    [e._v("买价:")]), e._v(" "), i("span", {

                        staticClass: "num"

                    },

                    [e._v(e._s(t.price))])]), e._v(" "), i("li", [i("span", {

                        staticClass: "title"

                    },

                    [e._v("卖价:")]), e._v(" "), i("span", {

                        staticClass: "num"

                    },

                    [e._v(e._s(t.deal_price))])]), e._v(" "), e._m(1, !0), e._v(" "), i("li", [i("span", {

                        staticClass: "title"

                    },

                    [e._v("盈亏:")]), e._v(" "), i("span", {

                        staticClass: "num red",

                        class: {

                            down_green: t.profit_money < 0

                        }

                    },

                    [e._v(e._s(t.profit_money))])]), e._v(" "), i("li", [i("span", {

                        staticClass: "title"

                    },

                    [e._v("数量: ")]), e._v(" "), i("span", {

                        staticClass: "num"

                    },

                    [e._v(e._s(t.num))])])])])])])

                }), 0), e._v(" "), i("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 2 == e.tabIndex,

                        expression: "tabIndex == 2"

                    }],

                    staticClass: "tab2"

                },

                e._l(e.Bull,

                function(t, a) {

                    return i("div", {

                        key: a,

                        staticClass: "box",

                        on: {

                            click: function(a) {

                                return e.toBull(t.id)

                            }

                        }

                    },

                    [i("div", {

                        staticClass: "img"

                    },

                    [a < 3 ? i("img", {

                        attrs: {

                            src: "static/images/medal_0" + (a + 1) + ".jpg",

                            alt: ""

                        }

                    }) : e._e()]), e._v(" "), i("div", {

                        staticClass: "right"

                    },

                    [i("div", {

                        staticClass: "top",

                        staticStyle: {

                            "margin-top": "0.7rem",

                            "margin-bottom": ".2rem",

                            "line-height": "1"

                        }

                    },

                    [i("p", {

                        staticClass: "name"

                    },

                    [e._v(e._s("金鼎达人") + "  ")]), e._v(" "), i("span", {

                        directives: [{

                            name: "show",

                            rawName: "v-show",

                            value: t.is_follow,

                            expression: "item.is_follow"

                        }],

                        staticClass: "iconfont",

                        staticStyle: {

                            float: "right"

                        },

                        on: {

                            click: function(a) {

                                return a.stopPropagation(),

                                e.gz(t.id)

                            }

                        }

                    },

                    [e._v("")]), e._v(" "), i("span", {

                        directives: [{

                            name: "show",

                            rawName: "v-show",

                            value: !t.is_follow,

                            expression: "!item.is_follow"

                        }],

                        staticClass: "iconfont",

                        staticStyle: {

                            float: "right"

                        },

                        on: {

                            click: function(a) {

                                return a.stopPropagation(),

                                e.gz(t.id)

                            }

                        }

                    },

                    [e._v("")])]), e._v(" "), i("div", {

                        staticClass: "center"

                    },

                    [i("ul", [i("li", [i("span", {

                        staticClass: "title"

                    },

                    [e._v("策略数")]), e._v(" "), i("span", {

                        staticClass: "num"

                    },

                    [e._v(e._s(t.tacticsnum))])]), e._v(" "), i("li", [i("span", {

                        staticClass: "title"

                    },

                    [e._v("胜算率:")]), e._v(" "), i("span", {

                        staticClass: "num"

                    },

                    [e._v(e._s(t.winrate))])]), e._v(" "), i("li", [i("span", {

                        staticClass: "title"

                    },

                    [e._v("收益率: ")]), e._v(" "), i("span", {

                        staticClass: "num"

                    },

                    [e._v(e._s(t.yieldrate))])])])])])])

                }), 0)], 1)])])

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("i", [t("img", {

                    attrs: {

                        src: a("JdHl")

                    }

                })])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("li", [t("span", {

                    staticClass: "title"

                },

                [this._v("收益率")])])

            }]

        };

        var w = a("VU/8")(A, b, !1,

        function(e) {

            a("oRD9")

        },

        "data-v-451aa151", null).exports,

        x = a("dKrH"),

        S = a.n(x),

        M = {

            beforeCreate: function() {

                document.getElementsByTagName("body")[0].className = "bg"

            },

            beforeDestroy: function() {

                document.body.removeAttribute("class", "bg")

            },

            mounted: function() {

                this.getUserInfo()

            },

            methods: {

                login: function() {

                    this.isLogin || this.$router.push("/loginRegistrat")

                },

                getUserInfo: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/user/", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        t ? (e.isLogin = !0, e.money = t.data.data.money, e.username = t.data.data.name, console.log(t), t.data.data.image ? e.userimg = t.data.data.image: (e.userimg = "../../static/images/user_icon_big.png", console.log(2))) : e.$message.error("登录失败，请重新登录")

                    },

                    function(e) {})

                }

            },

            data: function() {

                return {

                    isLogin: !1,

                    money: "--",

                    username: "请登录",

                    userimg: "@/../static/images/user_icon_big.png",

                    bg: S.a,

                    page1: [],

                    page2: [{

                        title: "公告列表",

                        icon: "@/../static/images/me/mav_02.png",

                        link: "/outNotice"

                    },

                    {

                        title: "资金明细",

                        icon: "@/../static/images/me/mav_04.png",

                        link: "/myMoney"

                    },

                    {

                        title: "我的策略",

                        icon: "@/../static/images/me/mav_05.png",

                        link: "/cl"

                    }],

                    page3: [{

                        title: "关注牛人",

                        icon: "@/../static/images/me/mav_03.png",

                        link: "/followBull"

                    },

                    {

                        title: "客服中心",

                        icon: "@/../static/images/me/mav_01.png",

                        link: "/kf"

                    },

                    {

                        title: "实名认证",

                        icon: "@/../static/images/me/mav_06.png",

                        link: "/rz"

                    },

                    {

                        title: "合作协议",

                        icon: "@/../static/images/me/mav_07.png",

                        link: "/agreeMent"

                    }]

                }

            }

        },

        k = {

            render: function() {

                var e = this,

                t = e.$createElement,

                i = e._self._c || t;

                return i("div", [i("div", {

                    staticClass: "user"

                },

                [i("ul", [i("router-link", {

                    staticClass: "pay pay_in",

                    attrs: {

                        to: "/recharge",

                        tag: "li"

                    }

                },

                [i("img", {

                    attrs: {

                        src: a("9Nfh"),

                        alt: ""

                    }

                }), e._v(" "), i("p", [e._v("充值")])]), e._v(" "), i("li", {

                    staticClass: "user_icon",

                    staticStyle: {

                        width: "1.28rem"

                    },

                    on: {

                        click: function(t) {

                            return e.login()

                        }

                    }

                },

                [i("img", {

                    attrs: {

                        src: e.userimg,

                        alt: ""

                    }

                }), e._v(" "), i("p", {

                    staticClass: "big"

                },

                [e._v(e._s(e.username))])]), e._v(" "), i("router-link", {

                    staticClass: "pay pay_out",

                    attrs: {

                        to: "/charge",

                        tag: "li"

                    }

                },

                [i("img", {

                    attrs: {

                        src: a("YJUm"),

                        alt: ""

                    }

                }), e._v(" "), i("p", [e._v("提现")])])], 1), e._v(" "), i("router-link", {

                    staticClass: "setting",

                    attrs: {

                        to: "/setting"

                    }

                },

                [i("img", {

                    attrs: {

                        src: a("g6wN"),

                        alt: ""

                    }

                })])], 1), e._v(" "), i("div", {

                    staticClass: "surplus_money",

                    style: {

                        backgroundImage: "url(" + e.bg + ")"

                    }

                },

                [i("p", {

                    staticClass: "money"

                },

                [e._v("\n      账户余额：" + e._s(e.money) + "元\n    ")])]), e._v(" "), i("div", {

                    staticClass: "more_page"

                },

                [i("ul", e._l(e.page2,

                function(t, a) {

                    return i("router-link", {

                        key: a,

                        attrs: {

                            tag: "li",

                            to: t.link

                        }

                    },

                    [i("i", {

                        staticClass: "iconfont"

                    },

                    [i("img", {

                        attrs: {

                            src: t.icon,

                            alt: ""

                        }

                    })]), e._v(" "), i("p", [e._v(e._s(t.title))]), e._v(" "), i("span", {

                        staticClass: "iconfont"

                    },

                    [e._v("")])])

                }), 1), e._v(" "), i("div", {

                    staticClass: "hx"

                }), e._v(" "), i("ul", e._l(e.page3,

                function(t, a) {

                    return i("router-link", {

                        key: a,

                        attrs: {

                            tag: "li",

                            to: t.link

                        }

                    },

                    [i("i", {

                        staticClass: "iconfont"

                    },

                    [i("img", {

                        attrs: {

                            src: t.icon,

                            alt: ""

                        }

                    })]), e._v(" "), i("p", [e._v(e._s(t.title))]), e._v(" "), i("span", {

                        staticClass: "iconfont"

                    },

                    [e._v("")])])

                }), 1)])])

            },

            staticRenderFns: []

        };

        var N = a("VU/8")(M, k, !1,

        function(e) {

            a("nFtQ")

        },

        "data-v-4ead8454", null).exports,

        E = a("Xxa5"),

        R = a.n(E),

        j = a("exGp"),

        D = a.n(j),

        z = a("Fd2+"),

        T = {

            filters: {

                toPercentage: function(e) {

                    var t = Number(100 * e).toFixed(2);

                    return t += "%"

                }

            },

            data: function() {

                return {

                    xingyongjin: 1e3,

                    wt: [],

                    time: "",

                    input: "",

                    hotShares: [],

                    historyInfo: [],

                    accountCount: {},

                    tmpId: "",

                    ojbkShow: !1,

                    stopIn: 0,

                    stopOut: 0,

                    tmpOut: 0,

                    historyPage: 1,

                    history: [],

                    searchInput: [],

                    addInput: [],

                    nowCc: [],

                    nowStatus: 0,

                    sindex: 0,

                    tabIndex: 0,

                    tab: [{

                        title: "持仓"

                    },

                    {

                        title: "策略"

                    }],

                    snav: [{

                        title: "当前持仓"

                    },

                    {

                        title: "当前委托"

                    },

                    {

                        title: "历史交易"

                    }]

                }

            },

            watch: {

                searchInput: function(e) {

                    var t = this;

                    C("/api/stock/search", {

                        code: e

                    }).then(function(e) {

                        t.addInput = e.data.data

                    },

                    function(e) {

                        console.log(e)

                    })

                }

            },

            mounted: function() {

                this.getNow(),

                this.showHistory(),

                this.getAccountCount(),

                this.getHot(),

                this.time = setInterval(function() {},

                3e3)

            },

            beforeDestroy: function() {

                clearInterval(this.time)

            },

            methods: {

                getWt: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/strategyEntrust", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        e.wt = t.data.data

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                postSearch: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    _("/api/search", {

                        code: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(a) {

                        a.status && console.log("历史记录添加成功"),

                        t.$router.push({

                            path: "/ks",

                            query: {

                                code: e

                            }

                        })

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                addXyj: function(e, t) {

                    var a = this,

                    i = localStorage.getItem("Authorization");

                    _("/api/tactics/addshoudong", {

                        tactic_id: e,

                        xingyongjin: t

                    },

                    {

                        Authorization: "Bearer " + i

                    }).then(function(e) {

                        console.log(e.data),

                        e.data.status ? a.$message.success(e.data.msg) : a.$message.error(e.data.msg)

                    },

                    function(e) {

                        console.log(e),

                        a.$message.error("添加失败")

                    })

                },

                getHot: function() {

                    var e = this;

                    C("/api/goods/hot", {},

                    {}).then(function(t) {

                        e.hotShares = t.data.data

                    },

                    function(e) {})

                },

                getHistoryInfo: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/strategyHistory/normal", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        e.historyInfo = t.data.data,

                        console.log(t)

                    },

                    function(e) {})

                },

                getAccountCount: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/accountCount/normal", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        e.accountCount = t.data.data

                    },

                    function(e) {})

                },

                sell: function(e) {

                    var t = this;

                    return D()(R.a.mark(function a() {

                        var i, n;

                        return R.a.wrap(function(a) {

                            for (;;) switch (a.prev = a.next) {

                            case 0:

                                return i = localStorage.getItem("Authorization"),

                                n = !0,

                                a.next = 4,

                                z.a.confirm({

                                    title: "确认卖出",

                                    message: "您确认卖出此策略吗"

                                }).then(function() {}).

                                catch(function() {

                                    n = !1

                                });

                            case 4:

                                if (n) {

                                    a.next = 6;

                                    break

                                }

                                return a.abrupt("return", !1);

                            case 6:

                                _("/api/tactics/sale", {

                                    tactic_id: e

                                },

                                {

                                    Authorization: "Bearer " + i

                                }).then(function(e) {

                                    0 == e.data.status ? t.$message.error(e.data.msg) : (t.$message.success(e.data.msg), t.getNow())

                                },

                                function(e) {

                                    console.log(e)

                                });

                            case 7:

                            case "end":

                                return a.stop()

                            }

                        },

                        a, t)

                    }))()

                },

                stop: function(e, t, a, i) {

                    this.tmpId = e,

                    this.ojbkShow = !0,

                    this.stopIn = t,

                    this.stopOut = a,

                    this.tmpOut = i

                },

                hide: function() {

                    this.tmpId = "",

                    this.ojbkShow = !1

                },

                ojbk: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    if (this.stopOut < this.tmpOut) return this.$message.error("最小止损不能小于" + this.tmpOut),

                    !1;

                    _("/api/tactics/editprice", {

                        tactic_id: this.tmpId,

                        max_price: this.stopIn,

                        min_price: this.stopOut

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        if (console.log(t), !t.data.status) return e.$message.success(t.data.msg),

                        !1;

                        e.$message.success(t.data.msg),

                        e.getNow(),

                        e.ojbkShow = !1

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                delay: function(e, t) {

                    var a = this,

                    i = localStorage.getItem("Authorization");

                    _("/api/tactics/issell", {

                        tactic_id: e,

                        is_sell: t

                    },

                    {

                        Authorization: "Bearer " + i

                    }).then(function(e) {

                        if (!e.data.status) return a.$message.error("修改失败"),

                        !1;

                        a.$message.success("修改成功"),

                        a.getNow()

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                remove: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    y("/api/search", {

                        code: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(e) {

                        t.showHistory()

                    },

                    function(e) {

                        t.showHistory()

                    })

                },

                removeAll: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    y("/api/search", {

                        type: 1

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        e.showHistory()

                    },

                    function(t) {

                        e.showHistory()

                    })

                },

                upDown: function(e) {

                    if (0 == e) {

                        if (1 == this.historyPage) return ! 1;

                        this.historyPage--

                    } else 1 == e && this.historyPage++;

                    console.log(this.historyPage),

                    this.showHistory()

                },

                showHistory: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/search", {

                        page: this.historyPage

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        if (!t.data.status) return e.history.splice(0, e.history.length),

                        e.upDown(0),

                        !1;

                        e.history.splice(0, e.history.length),

                        e.history = e.history.concat(e.history, t.data.data)

                    },

                    function(e) {})

                },

                changeCount: function() {},

                isShow: function(e) {

                    0 == this.nowCc[e].is_show ? this.nowCc[e].is_show = 1 : this.nowCc[e].is_show = 0

                },

                isShow2: function(e) {

                    1 == this.historyInfo[e].is_show ? this.historyInfo[e].is_show = 0 : this.historyInfo[e].is_show = 1

                },

                isShow3: function(e) {

                    1 == this.wt[e].is_show ? this.wt[e].is_show = 0 : this.wt[e].is_show = 1

                },

                getNow: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/strategyChiCang/normal", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        e.nowCc = t.data.data,

                        e.nowStatus = t.data.status

                    },

                    function(t) {

                        e.$router.push("/me")

                    })

                },

                snavClick: function(e) {

                    this.sindex = e,

                    2 == e && this.getHistoryInfo(),

                    0 == e && this.getNow(),

                    1 == e && this.getWt()

                },

                tabClick: function(e) {

                    this.tabIndex = e,

                    1 == e && this.getNow()

                }

            }

        },

        B = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: e.ojbkShow,

                        expression: "ojbkShow"

                    }],

                    staticClass: "zz"

                }), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: e.ojbkShow,

                        expression: "ojbkShow"

                    }],

                    staticClass: "outer_box1"

                },

                [a("div", {

                    staticClass: "box"

                },

                [a("span", {

                    staticClass: "stop"

                },

                [e._v("止盈")]), e._v(" "), a("el-input", {

                    attrs: {

                        type: "number",

                        placeholder: "请输入止盈价格"

                    },

                    model: {

                        value: e.stopIn,

                        callback: function(t) {

                            e.stopIn = t

                        },

                        expression: "stopIn"

                    }

                })], 1), e._v(" "), a("div", {

                    staticClass: "box"

                },

                [a("span", {

                    staticClass: "down_green stop"

                },

                [e._v("止损")]), e._v(" "), a("el-input", {

                    attrs: {

                        type: "number",

                        placeholder: "请输入止损价格"

                    },

                    model: {

                        value: e.stopOut,

                        callback: function(t) {

                            e.stopOut = t

                        },

                        expression: "stopOut"

                    }

                })], 1), e._v(" "), a("div", {

                    staticClass: "box"

                },

                [a("el-button", {

                    attrs: {

                        type: "info"

                    },

                    on: {

                        click: function(t) {

                            return e.hide()

                        }

                    }

                },

                [e._v("取消")]), e._v(" "), a("el-button", {

                    attrs: {

                        type: "danger"

                    },

                    on: {

                        click: function(t) {

                            return e.ojbk()

                        }

                    }

                },

                [e._v("确定")])], 1)]), e._v(" "), a("div", {

                    staticClass: "tab"

                },

                [a("ul", e._l(e.tab,

                function(t, i) {

                    return a("li", {

                        key: i,

                        class: {

                            active: i == e.tabIndex

                        },

                        on: {

                            click: function(t) {

                                return e.tabClick(i)

                            }

                        }

                    },

                    [e._v(e._s(t.title))])

                }), 0)]), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 1 == e.tabIndex,

                        expression: "tabIndex == 1"

                    }],

                    staticClass: "tab1"

                },

                [a("div", {

                    staticClass: "search"

                },

                [e._m(0), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.searchInput,

                        expression: "searchInput"

                    }],

                    attrs: {

                        placeholder: "请输入股票代码",

                        type: "",

                        name: "",

                        id: ""

                    },

                    domProps: {

                        value: e.searchInput

                    },

                    on: {

                        blur: function(t) {

                            return t.preventDefault(),

                            e.changeCount()

                        },

                        input: function(t) {

                            t.target.composing || (e.searchInput = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "search_div"

                },

                [a("ul", e._l(e.addInput,

                function(t, i) {

                    return a("li", {

                        key: i,

                        on: {

                            click: function(a) {

                                return e.postSearch(t.code)

                            }

                        }

                    },

                    [a("span", {

                        staticClass: "left"

                    },

                    [e._v(e._s(e._f("filtersName")(t.code)))]), e._v(" "), a("span", {

                        staticClass: "left",

                        staticStyle: {

                            "margin-left": ".2rem",

                            float: "right"

                        }

                    },

                    [e._v(e._s(t.name))])])

                }), 0)]), e._v(" "), a("div", {

                    staticClass: "title"

                },

                [a("p", {

                    staticClass: "sx"

                }), e._v(" "), a("p", {

                    staticClass: "left"

                },

                [e._v("搜索历史")]), e._v(" "), a("p", {

                    staticClass: "right",

                    on: {

                        click: function(t) {

                            return e.removeAll()

                        }

                    }

                },

                [e._v("清空")])]), e._v(" "), a("div", {

                    staticClass: "searh_history"

                },

                [e._l(e.history,

                function(t, i) {

                    return a("li", {

                        key: i,

                        staticClass: "li"

                    },

                    [a("router-link", {

                        attrs: {

                            to: {

                                path: "/ks",

                                query: {

                                    code: t[0]

                                }

                            }

                        }

                    },

                    [a("p", {

                        staticClass: "name"

                    },

                    [e._v(e._s(t[1]) + " " + e._s(e._f("filtersName")(t[0])))]), e._v(" "), a("p", {

                        staticClass: "num",

                        class: {

                            down_green: (t[4] - t[3]) / t[3] < 0

                        }

                    },

                    [e._v(e._s(t[3]))]), e._v(" "), a("p", {

                        staticClass: "percentage",



                        class: {

                            down_green: (t[4] - t[3]) / t[3] < 0

                        }

                    },

                    [e._v(e._s(e._f("toPercentage")((t[4] - t[3]) / t[3])))])]), e._v(" "), a("p", {

                        staticClass: "close iconfont",

                        on: {

                            click: function(a) {

                                return e.remove(t[0])

                            }

                        }

                    },

                    [e._v("")])], 1)

                }), e._v(" "), a("div", {

                    staticClass: "title",

                    staticStyle: {

                        "margin-top": ".26rem"

                    }

                },

                [a("div", {

                    staticStyle: {

                        width: "3rem",

                        margin: "0 auto"

                    }

                },

                [a("div", {

                    staticClass: "mleft",

                    on: {

                        click: function(t) {

                            return e.upDown(0)

                        }

                    }

                },

                [e._v("<")]), e._v(" "), a("div", {

                    staticClass: "mright",

                    on: {

                        click: function(t) {

                            return e.upDown(1)

                        }

                    }

                },

                [e._v(">")])])]), e._v(" "), e._m(1)], 2), e._v(" "), a("div", {

                    staticClass: "hot",

                    staticStyle: {

                        height: "auto"

                    }

                },

                [a("ul", [e._l(e.hotShares,

                function(t, i) {

                    return a("router-link", {

                        key: i,

                        class: {

                            nomargin: i % 3 == 2

                        },

                        staticStyle: {

                            "margin-bottom": ".2rem"

                        },

                        attrs: {

                            tag: "li",

                            to: {

                                path: "/ks",

                                query: {

                                    code: t[0]

                                }

                            }

                        }

                    },

                    [a("p", {

                        staticClass: "top"

                    },

                    [e._v(e._s(t[1]))]), e._v(" "), a("p", {

                        staticClass: "center"

                    },

                    [e._v(e._s(e._f("filtersName")(t[0])))]), e._v(" "), a("p", {

                        staticClass: "num",

                        class: {

                            down_green: (t[4] - t[3]) / t[3] < 0

                        }

                    },

                    [e._v(e._s(parseFloat(t[4]).toFixed(2)))]), e._v(" "), a("p", {

                        staticClass: "bottom",

                        class: {

                            down_green: (t[4] - t[3]) / t[3] < 0

                        }

                    },

                    [e._v("\n              " + e._s((t[4] - t[3]).toFixed(2)) + "   " + e._s(e._f("toPercentage")((t[4] - t[3]) / t[3])) + "\n            ")])])

                }), e._v(" "), a("div", {

                    staticStyle: {

                        clear: "both"

                    }

                })], 2)])]), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 0 == e.tabIndex,

                        expression: "tabIndex == 0"

                    }],

                    staticClass: "tab2"

                },

                [a("div", {

                    staticClass: "money"

                },

                [a("ul", [a("li", {

                    staticClass: "left"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("净资产")]), e._v(" "), a("p", {

                    staticClass: "num"

                },

                [e._v("￥" + e._s(e.accountCount.asset))])]), e._v(" "), a("li", {

                    staticClass: "right"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("可用资金")]), e._v(" "), a("p", {

                    staticClass: "num"

                },

                [e._v("￥" + e._s(e.accountCount.can_use))])])]), e._v(" "), a("ul", [a("li", {

                    staticClass: "left"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("持仓市值")]), e._v(" "), a("p", {

                    staticClass: "num"

                },

                [e._v("￥" + e._s(e.accountCount.market_value))])]), e._v(" "), a("li", {

                    staticClass: "right"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("浮动盈亏")]), e._v(" "), a("p", {

                    staticClass: "num"

                },

                [e._v("￥" + e._s(e.accountCount.float_earn))])])])]), e._v(" "), a("div", {

                    staticClass: "snav"

                },

                [a("ul", [e._l(e.snav,

                function(t, i) {

                    return a("li", {

                        key: i,

                        staticClass: "txt",

                        class: {

                            active: i == e.sindex

                        },

                        on: {

                            click: function(t) {

                                return e.snavClick(i)

                            }

                        }

                    },

                    [e._v(e._s(t.title))])

                }), e._v(" "), a("li", {

                    staticClass: "sx"

                }), e._v(" "), a("li", {

                    staticClass: "sx"

                })], 2)]), e._v(" "), a("div", {

                    staticClass: "snav1"

                },

                [e._l(e.nowCc,

                function(t, i) {

                    return 0 != e.nowStatus ? a("div", {

                        directives: [{

                            name: "show",

                            rawName: "v-show",

                            value: 0 == e.sindex,

                            expression: "sindex == 0"

                        }],

                        key: "chi" + i,

                        staticClass: "now"

                    },

                    [a("div", {

                        staticClass: "title_box",

                        on: {

                            click: function(t) {

                                return e.isShow(i)

                            }

                        }

                    },

                    [a("div", {

                        staticClass: "left"

                    },

                    [e._v(e._s(t.name))]), e._v(" "), a("div", {

                        staticClass: "right"

                    },

                    [e._v(e._s(t.code))])]), e._v(" "), a("ul", {

                        directives: [{

                            name: "show",

                            rawName: "v-show",

                            value: 1 == t.is_show,

                            expression: "item.is_show == 1"

                        }]

                    },

                    [a("li", [e._v("信用金 "), a("span", [e._v(e._s(t.xingyongjin))])]), e._v(" "), a("li", [e._v("买入价 "), a("span", [e._v(e._s(t.price))])]), e._v(" "), a("li", [e._v("止 盈 "), a("span", [e._v(e._s(t.max_price))])]), e._v(" "), a("li", [e._v("股票数 "), a("span", [e._v(e._s(t.num))])]), e._v(" "), a("li", [e._v("现 价 "), a("span", {

                        class: {

                            down_green: t.current_price - t.price < 0

                        },

                        staticStyle: {

                            color: "#ef584d"

                        }

                    },

                    [e._v(e._s(t.current_price))])]), e._v(" "), a("li", [e._v("止 损 "), a("span", [e._v(e._s(t.min_price))])]), e._v(" "), a("li", {

                        staticStyle: {

                            width: "60%"

                        }

                    },

                    [e._v("浮动盈亏 "), a("span", {

                        class: {

                            down_green: t.float_earn < 0

                        },

                        staticStyle: {

                            color: "#ef584d"

                        }

                    },

                    [e._v(e._s(t.float_earn))])]), e._v(" "), a("li", {

                        staticStyle: {

                            width: "60%"

                        }

                    },

                    [e._v("创建时间 "), a("span", [e._v(e._s(t.created_at))])]), e._v(" "), e._l(t.xingyongjin_appends,

                    function(t, i) {

                        return a("div", {

                            key: i,

                            staticClass: "box"

                        },

                        [a("li", {

                            staticStyle: {

                                width: "50%"

                            }

                        },

                        [e._v("追加信用金："), a("span", [e._v(e._s(t.money))])]), e._v(" "), a("li", {

                            staticStyle: {

                                width: "50%"

                            }

                        },

                        [e._v("追加时间："), a("span", [e._v(e._s(t.created_at))])])])

                    }), e._v(" "), a("li", [e._v("市 值 "), a("span", [e._v(e._s(t.market_value))])]), e._v(" "), a("div", {

                        staticClass: "sell"

                    },

                    [a("div", {

                        staticClass: "box"

                    },

                    [a("div", {

                        staticClass: "left"

                    },

                    [e._v("当前递延状态："), 1 == t.is_sell ? a("span", [e._v("不递延")]) : e._e(), 2 == t.is_sell ? a("span", [e._v("递延")]) : e._e()])]), e._v(" "), a("div", {

                        staticClass: "box"

                    },

                    [a("div", {

                        staticClass: "left"

                    },

                    [e._v("当前:还剩下" + e._s((t.current_price - t.min_price).toFixed(2)) + "元即将到达止损价")])]), e._v(" "), e._m(2, !0)]), e._v(" "), a("div", {

                        staticClass: "sell2"

                    },

                    [a("div", {

                        staticClass: "button active",

                        on: {

                            click: function(a) {

                                return e.sell(t.tactic_id)

                            }

                        }

                    },

                    [e._v("卖出")]), e._v(" "), a("div", {

                        staticClass: "button",

                        on: {

                            click: function(a) {

                                return e.stop(t.tactic_id, t.max_price, t.min_price, t.min_min_price)

                            }

                        }

                    },

                    [e._v("止盈止损")]), e._v(" "), 1 == t.is_sell ? a("div", {

                        staticClass: "button",

                        on: {

                            click: function(a) {

                                return e.delay(t.tactic_id, 2)

                            }

                        }

                    },

                    [e._v("递延")]) : e._e(), e._v(" "), 2 == t.is_sell ? a("div", {

                        staticClass: "button nomargin",

                        on: {

                            click: function(a) {

                                return e.delay(t.tactic_id, 1)

                            }

                        }

                    },

                    [e._v("不递延")]) : e._e()]), e._v(" "), 1 == t.is_add ? a("div", {

                        staticClass: "sell2"

                    },

                    [a("input", {

                        directives: [{

                            name: "model",

                            rawName: "v-model",

                            value: e.xingyongjin,

                            expression: "xingyongjin"

                        }],

                        staticClass: "button",

                        staticStyle: {

                            flex: ".6"

                        },

                        attrs: {

                            type: "text"

                        },

                        domProps: {

                            value: e.xingyongjin

                        },

                        on: {

                            input: function(t) {

                                t.target.composing || (e.xingyongjin = t.target.value)

                            }

                        }

                    }), e._v(" "), a("div", {

                        staticClass: "button active",

                        staticStyle: {

                            flex: ".4",

                            "margin-left": ".2rem"

                        },

                        on: {

                            click: function(a) {

                                return e.addXyj(t.tactic_id, e.xingyongjin)

                            }

                        }

                    },

                    [e._v("追加信用金")])]) : e._e()], 2)]) : e._e()

                }), e._v(" "), e._l(e.wt,

                function(t, i) {

                    return a("div", {

                        directives: [{

                            name: "show",

                            rawName: "v-show",

                            value: 1 == e.sindex,

                            expression: "sindex == 1"

                        }],

                        key: i,

                        staticClass: "now",

                        on: {

                            click: function(t) {

                                return e.isShow3(i)

                            }

                        }

                    },

                    [a("div", {

                        staticClass: "title_box"

                    },

                    [a("div", {

                        staticClass: "left"

                    },

                    [e._v(e._s(t.name) + "   "), a("span", {

                        staticStyle: {

                            "font-size": ".3rem"

                        }

                    },

                    [e._v(e._s(t.code))])]), e._v(" "), 0 == t.out_in ? a("div", {

                        staticClass: "right"

                    },

                    [e._v("买入")]) : e._e(), e._v(" "), 2 == t.out_in ? a("div", {

                        staticClass: "right"

                    },

                    [e._v("卖出")]) : e._e()]), e._v(" "), a("ul", {

                        directives: [{

                            name: "show",

                            rawName: "v-show",

                            value: 1 == t.is_show,

                            expression: "item.is_show == 1"

                        }]

                    },

                    [a("li", [e._v("买价 "), a("span", [e._v(e._s(t.price))])]), e._v(" "), a("li", [e._v("当前价 "), a("span", [e._v(e._s(t.current_price))])]), e._v(" "), a("li", [e._v("股票数 "), a("span", [e._v(e._s(t.num))])]), e._v(" "), a("li", [e._v("总信用金 "), a("span", [e._v(e._s(t.count_xingyongjin))])]), e._v(" "), a("li", [e._v("止盈 "), a("span", [e._v(e._s(t.max_price))])]), e._v(" "), a("li", [e._v("止损 "), a("span", [e._v(e._s(t.min_price))])]), e._v(" "), a("li", {

                        staticStyle: {

                            width: "100%"

                        }



                    },

                    [e._v("创建时间 "), a("span", [e._v(e._s(t.created_at))])])])])

                }), e._v(" "), e._l(e.historyInfo,

                function(t, i) {

                    return a("div", {

                        directives: [{

                            name: "show",

                            rawName: "v-show",

                            value: 2 == e.sindex,

                            expression: "sindex == 2"

                        }],

                        key: "his_" + i,

                        staticClass: "now",

                        on: {

                            click: function(t) {

                                return e.isShow2(i)

                            }

                        }

                    },

                    [a("div", {

                        staticClass: "title_box"

                    },

                    [a("div", {

                        staticClass: "left"

                    },

                    [e._v(e._s(t.name))]), e._v(" "), a("div", {

                        staticClass: "right"

                    },

                    [e._v(e._s(t.code))])]), e._v(" "), a("ul", {

                        directives: [{

                            name: "show",

                            rawName: "v-show",

                            value: 1 == t.is_show,

                            expression: "item.is_show == 1"

                        }]

                    },

                    [a("li", [e._v("信用金 "), a("span", [e._v(e._s(t.xingyongjin))])]), e._v(" "), a("li", [e._v("买价 "), a("span", [e._v(e._s(t.price))])]), e._v(" "), a("li", [e._v("卖价 "), a("span", [e._v(e._s(t.deal_money))])]), e._v(" "), a("li", [e._v("股票数 "), a("span", [e._v(e._s(t.num))])]), e._v(" "), a("li", [e._v("盈亏 "), a("span", [e._v(e._s(t.profit))])]), e._v(" "), a("li", [e._v("收益率 "), a("span", [e._v(e._s(t.rate))])]), e._v(" "), a("li", [e._v("建仓费 "), a("span", [e._v(e._s(t.cangfei))])]), e._v(" "), a("li", [e._v("递延费 "), a("span", [e._v(e._s(t.count_diyanfei))])]), e._v(" "), a("li", {

                        staticStyle: {

                            width: "50%"

                        }

                    },

                    [e._v("买入 "), a("span", [e._v(e._s(t.created_at))])]), e._v(" "), a("li", {

                        staticStyle: {

                            width: "50%"

                        }

                    },

                    [e._v("卖出 "), a("span", [e._v(e._s(t.deal_time))])]), e._v(" "), a("li", {

                        staticStyle: {

                            width: "100%"

                        }

                    },

                    [e._v("平仓类型 "), a("span", [e._v(e._s(t.pingcang_type))])])])])

                }), e._v(" "), 0 == e.nowStatus ? a("p", {

                    staticClass: "nothing"

                },

                [e._v("暂无数据~")]) : e._e()], 2)]), e._v(" "), a("div", {

                    staticStyle: {

                        height: "1rem"

                    }

                })])

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("i", [t("img", {

                    attrs: {

                        src: a("JdHl")

                    }

                })])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "title"

                },

                [t("p", {

                    staticClass: "sx"

                }), this._v(" "), t("p", {

                    staticClass: "left"

                },

                [this._v("热门推荐")])])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "box"

                },

                [t("div", {

                    staticClass: "left"

                },

                [this._v("每天14：00扣除递延费，请保持可用余额充足")])])

            }]

        };

        var L = a("VU/8")(T, B, !1,

        function(e) {

            a("be6y")

        },

        "data-v-2a2eb9c2", null).exports,

        F = a("GQaK"),

        U = {

            filters: {

                toPercentage: function(e) {

                    var t = Number(100 * e).toFixed(2);

                    return t += "%"

                }

            },

            mounted: function() {

                this.getRank(),

                this.showMyself(),

                this.getHot(),

                this.scroll = new F.a(this.$refs.wrapper, {

                    click: "true",

                    pullUpLoad: {

                        threshold: 10

                    }

                }),

                this.lazyLoad()

            },

            data: function() {

                return {

                    hot: "",

                    initLeft: "",

                    moveIndex: 0,

                    moveLeft: "",

                    moveRight: "-2rem",

                    isSelf: !0,

                    msearchInput: "",

                    searchArr: [],

                    myShares: [],

                    page: 1,

                    tabIndex: 1,

                    addInput: [],

                    searchInput: "",

                    rank: [],

                    tab: [{

                        title: "自选"

                    },

                    {

                        title: "沪深"

                    }]

                }

            },

            watch: {

                searchInput: function(e) {

                    this.addInput.splice(0, this.addInput.length),

                    this.getAddSearch(e)

                },

                msearchInput: function(e) {

                    this.searchArr.splice(0, this.searchArr.length),

                    this.searchMyself(e)

                }

            },

            methods: {

                getHot: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/hotshare", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        e.hot = t.data

                    },

                    function(t) {

                        e.$router.push("/me")

                    })

                },

                deleteMyself: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    y("/api/selfstock", {

                        code: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(e) {

                        t.$message("删除成功"),

                        t.showMyself()

                    },

                    function(e) {

                        console.log(e),

                        t.$message("删除失败")

                    })

                },

                touchMove: function(e) {

                    this.moveLeft = e.targetTouches[0].clientX,

                    this.moveRight = .019 * (this.moveLeft - this.initLeft),

                    this.moveRight < 0 ? this.moveRight = 0 : this.moveRight = 2,

                    this.moveRight = -this.moveRight + "rem",

                    this.$refs.q[this.moveIndex].style.right = this.moveRight

                },

                touchStart: function(e, t) {

                    this.initLeft = e.targetTouches[0].clientX,

                    this.moveIndex = t

                },

                touchEnd: function(e) {},

                postSearch: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    _("/api/search", {

                        code: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(a) {

                        a.status && console.log("历史记录添加成功"),

                        t.$router.push({

                            path: "/ks",

                            query: {

                                code: e

                            }

                        })

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                showMyself: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/selfstock", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        t.data.status ? (e.myShares = e.myShares.concat(e.myShares, t.data.data), e.isSelf = !1) : e.isSelf = !0,

                        console.log(t)

                    },

                    function(t) {

                        e.$router.push("/me")

                    })

                },

                searchMyself: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    C("/api/selfstock/search", {

                        code: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(e) {

                        if (console.log(e), !e.data.status) return ! 1;

                        t.searchArr = e.data.data

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                addMyself: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    _("/api/selfstock", {

                        code: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(e) {

                        if (!e.data.status) return t.$message("该股票代码已经存在"),

                        !1;

                        t.$message("添加成功，请在自选页面查看")

                    },

                    function(e) {

                        t.$message("添加失败")

                    })

                },

                changeCount: function() {},

                lazyLoad: function() {

                    var e = this;

                    this.$nextTick(function() {

                        e.scroll.on("pullingUp",

                        function() {

                            console.log("run"),

                            e.getRank()

                        })

                    })

                },

                getAddSearch: function(e) {

                    var t = this;

                    C("/api/stock/search", {

                        code: e

                    }).then(function(e) {

                        var a = e.data.data;

                        a && a.forEach(function(e) {

                            t.addInput.push(e)

                        })

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                getRank: function() {

                    var e = this;

                    C("/api/stock", {

                        page: this.page

                    }).then(function(t) {

                        console.log(t),

                        e.rank = e.rank.concat(t.data.data),

                        e.scroll.finishPullUp(),

                        e.scroll.refresh(),

                        e.lazyLoad(),

                        e.page++

                    },

                    function(e) {

                        console.log("err:" + e)

                    })

                },

                tabClick: function(e) {

                    this.tabIndex = e,

                    1 == e ? this.getRank() : 0 == e && (this.myShares.splice(0, this.myShares.length), console.log(this.myShares), this.showMyself())

                }

            }

        },

        P = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("div", {

                    staticClass: "tab"

                },

                [a("ul", e._l(e.tab,

                function(t, i) {

                    return a("li", {

                        key: i,

                        class: {

                            active: i == e.tabIndex

                        },

                        on: {

                            click: function(t) {

                                return e.tabClick(i)

                            }

                        }

                    },

                    [e._v(e._s(t.title))])

                }), 0)]), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 0 == e.tabIndex,

                        expression: "tabIndex == 0"

                    }],

                    staticClass: "tab1"

                },

                [a("div", {

                    staticClass: "search_box"

                },

                [a("div", {

                    staticClass: "search",

                    staticStyle: {

                        margin: ".4rem auto",

                        float: "none"

                    }

                },

                [e._m(0), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.msearchInput,

                        expression: "msearchInput"

                    }],

                    attrs: {

                        placeholder: "请输入股票代码/名称/拼音",

                        type: "",

                        name: "",

                        id: ""

                    },

                    domProps: {

                        value: e.msearchInput

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.msearchInput = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "search_div"

                },

                [a("ul", e._l(e.searchArr,

                function(t, i) {

                    return a("li", {

                        key: i,

                        on: {

                            click: function(a) {

                                return e.postSearch(t.code)

                            }

                        }

                    },

                    [a("span", {

                        staticClass: "left"

                    },

                    [e._v(e._s(e._f("filtersName")(t.code)))]), e._v(" "), a("span", {

                        staticClass: "left",

                        staticStyle: {

                            "margin-left": ".2rem",

                            float: "right"

                        }

                    },

                    [e._v(e._s(t.name))])])

                }), 0)])]), e._v(" "), e._m(1), e._v(" "), e.isSelf ? e._e() : a("ul", {

                    staticClass: "container"

                },

                e._l(e.myShares,

                function(t, i) {

                    return a("router-link", {

                        key: i,

                        attrs: {

                            tag: "li",

                            to: {

                                path: "/ks",

                                query: {

                                    code: t[0]

                                }

                            }

                        }

                    },

                    [a("div", {

                        staticClass: "move",

                        on: {

                            touchstart: function(t) {

                                return e.touchStart(t, i)

                            },

                            touchend: e.touchEnd,

                            touchmove: e.touchMove

                        }

                    },

                    [a("p", {

                        staticClass: "name"

                    },

                    [e._v(e._s(t[1])), a("span", [e._v(e._s(e._f("filtersName")(t[0])))])]), e._v(" "), a("p", {

                        staticClass: "money"

                    },

                    [e._v(e._s(t[4]))]), e._v(" "), a("p", {

                        staticClass: "num",

                        class: {

                            down_green: (t[4] - t[3]) / t[3] < 0

                        }

                    },

                    [e._v(e._s(e._f("toPercentage")((t[4] - t[3]) / t[3])))]), e._v(" "), a("router-link", {

                        staticClass: "create",

                        attrs: {

                            tag: "div",

                            to: {

                                path: "/createSelf/",

                                query: {

                                    code: t[0]

                                }

                            }

                        }

                    },

                    [e._v("创建策略")]), e._v(" "), a("div", {

                        ref: "q",

                        refInFor: !0,

                        staticClass: "remove",

                        on: {

                            click: function(a) {

                                return a.stopPropagation(),

                                e.deleteMyself(t[0])

                            }

                        }

                    },

                    [e._v("删除自选")])], 1)])

                }), 1)]), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 1 == e.tabIndex,

                        expression: "tabIndex == 1"

                    }],

                    staticClass: "tab2"

                },

                [a("div", {

                    staticClass: "search"

                },

                [e._m(2), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.searchInput,

                        expression: "searchInput"

                    }],

                    attrs: {

                        placeholder: "请输入股票代码",

                        type: "",

                        name: "",

                        id: ""

                    },

                    domProps: {

                        value: e.searchInput

                    },

                    on: {

                        blur: function(t) {

                            return t.preventDefault(),

                            e.changeCount()

                        },

                        input: function(t) {

                            t.target.composing || (e.searchInput = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "search_div"

                },

                [a("ul", e._l(e.addInput,

                function(t, i) {

                    return a("li", {

                        key: i,

                        on: {

                            click: function(a) {

                                return e.postSearch(t.code)

                            }

                        }

                    },

                    [a("span", {

                        staticClass: "left"

                    },

                    [e._v(e._s(e._f("filtersName")(t.code)))]), e._v(" "), a("span", {

                        staticClass: "left",

                        staticStyle: {

                            "margin-left": ".2rem"

                        }

                    },

                    [e._v(e._s(t.name))]), e._v(" "), a("span", {

                        staticClass: "right",

                        on: {

                            click: function(a) {

                                return e.addMyself(t.code)

                            }

                        }

                    },

                    [e._v("点击添加")])])

                }), 0)]), e._v(" "), a("div", {

                    staticClass: "hot"

                },

                [a("ul", e._l(e.hot,

                function(t, i) {

                    return a("li", {

                        key: i

                    },

                    [a("p", {

                        staticClass: "top"

                    },

                    [e._v(e._s(t.name))]), e._v(" "), a("p", {

                        staticClass: "center"

                    },

                    [e._v(e._s(t.code))]), e._v(" "), a("p", {

                        staticClass: "num",

                        class: {

                            green: t.up_value < 0

                        }

                    },

                    [e._v(e._s(t.current_price))]), e._v(" "), a("p", {

                        staticClass: "bottom",

                        class: {

                            green: t.up_value < 0

                        }

                    },

                    [e._v("\n            " + e._s(t.up_value) + "   " + e._s(t.up_ratio) + "\n          ")])])

                }), 0)]), e._v(" "), a("div", {

                    staticClass: "rank"

                },

                [a("div", {

                    staticClass: "title"

                },

                [a("span", [e._v("股票")]), e._v(" "), a("router-link", {

                    staticClass: "iconfont",

                    attrs: {

                        tag: "span",

                        to: "selfMore"

                    }

                },

                [e._v("")])], 1), e._v(" "), a("div", {

                    ref: "wrapper",

                    staticClass: "wrapper"

                },

                [a("div", {

                    staticClass: "scroll_container"

                },

                [a("div", {

                    staticClass: "container"

                },

                [a("ul", e._l(e.rank,

                function(t, i) {

                    return a("router-link", {

                        key: i,

                        attrs: {

                            tag: "li",

                            to: {

                                path: "/ks",

                                query: {

                                    code: t[0]

                                }

                            }

                        }

                    },

                    [a("div", {

                        staticClass: "name"

                    },

                    [a("p", {

                        staticClass: "top"

                    },

                    [e._v(e._s(t[1]))]), e._v(" "), a("p", {

                        staticClass: "bottom"

                    },

                    [e._v(e._s(e._f("filtersName")(t[0])))])]), e._v(" "), a("div", {

                        staticClass: "num"

                    },

                    [e._v(e._s(t[4]))]), e._v(" "), a("div", {

                        staticClass: "percentage",

                        class: {

                            down_green: (t[4] - t[3]) / t[3] < 0

                        }

                    },

                    [e._v(e._s(e._f("toPercentage")((t[4] - t[3]) / t[3])))])])

                }), 1)])])])])])])

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("i", {

                    staticClass: "search_icon"

                },

                [t("img", {

                    attrs: {

                        src: a("JdHl")

                    }

                })])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "title"

                },

                [t("p", {

                    staticClass: "name"

                },

                [this._v("名称代码")]), this._v(" "), t("p", {

                    staticClass: "money"

                },

                [this._v("现价")]), this._v(" "), t("p", {

                    staticClass: "num"

                },

                [this._v("涨跌幅")])])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("i", [t("img", {

                    attrs: {

                        src: a("JdHl")

                    }

                })])

            }]

        };

        var O = a("VU/8")(U, P, !1,

        function(e) {

            a("UJXf")

        },

        "data-v-3324974c", null).exports,

        Y = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", {

                    staticClass: "return_header"

                },

                [a("div", {

                    staticClass: "return",

                    on: {

                        click: function(t) {

                            return e.back()

                        }

                    }

                },

                [a("span", {

                    staticClass: "iconfont"

                },

                [e._v("")])]), e._v(" "), a("span", {

                    staticClass: "txt"

                },

                [e._v("返回")]), e._v(" "), a("p", {

                    staticClass: "title",

                    on: {

                        click: function(t) {

                            return e.back()

                        }

                    }

                },

                [e._t("title")], 2)])

            },

            staticRenderFns: []

        };

        var G = a("VU/8")({

            methods: {

                back: function() {

                    this.$router.go( - 1)

                }

            }

        },

        Y, !1,

        function(e) {

            a("p8VF")

        },

        "data-v-43fffb3e", null).exports,

        Z = a("zL8q"),

        W = a.n(Z),

        V = {

            filters: {

                toPercentage: function(e) {

                    var t = Number(100 * e).toFixed(2);

                    return t += "%"

                }

            },

            mounted: function() {

                var e = this;

                this.getMultiple(),

                this.getShare(),

                this.getCDMoney(),

                this.getUserInfo(),

                this.interval = setInterval(function() {

                    e.getMultiple(),

                    e.getShare(),

                    e.getCDMoney(),

                    e.getUserInfo()

                },

                1e4)

            },

            watch: {

                selectaddxinyongjin: function(e) {

                    for (var t = !1,

                    a = 0; a < this.selectNum.length; a++) e == this.selectNum[a] && (this.selectNumIndex = a, t = !0);

                    0 == t && (this.selectNumIndex = -1),

                    this.getCDMoney()

                }

            },

            data: function() {

                return {

                    interval: "",

                    isdanger: "",

                    myMoney: 0,

                    agree: !1,

                    minLess: 0,

                    minAdd: 0,

                    deferred: "",

                    buildCost: "",

                    share: [],

                    code: this.$route.query.code,

                    ydf: !0,

                    zj: !1,

                    addReduceNum: 1,

                    lessReduceNum: "",

                    selectNumIndex: 0,

                    selectMultipleIndex: 0,

                    selectNum: [1e3, 5e3, 1e4, 2e4, 3e4, 5e4, 8e4, 1e5],

                    selectaddxinyongjin: 1e3,

                    selectMultiple: ["", ""],

                    is_add: 1,

                    is_sell: 1

                }

            },

            components: {

                ReturnTop: G

            },

            computed: {

                num: function() {

                    var e = this.selectaddxinyongjin * this.selectMultiple[this.selectMultipleIndex];

                    return Math.round(e / this.share[4]) > 100 ? 100 * Math.floor(Math.round(e / this.share[4]) / 100) : 100

                }

            },

            methods: {

                agreeClick: function() {

                    this.agree = !this.agree

                },

                sendCreate: function() {

                    var e = this;

                    return D()(R.a.mark(function t() {

                        var a, i, n;

                        return R.a.wrap(function(t) {

                            for (;;) switch (t.prev = t.next) {

                            case 0:

                                if (e.agree) {

                                    t.next = 3;

                                    break

                                }

                                return e.$message("请先阅读并同意支付协议后再创建订单"),

                                t.abrupt("return", !1);

                            case 3:

                                return a = localStorage.getItem("Authorization"),

                                e.ydf ? e.is_sell = 2 : e.is_sell = 1,

                                e.zj ? e.is_add = 2 : e.is_add = 1,

                                i = !0,

                                t.next = 9,

                                z.a.confirm({

                                    title: "确认创建",

                                    message: "您确认创建此策略吗"

                                }).then(function() {}).

                                catch(function() {

                                    i = !1

                                });

                            case 9:

                                if (i) {

                                    t.next = 11;

                                    break

                                }

                                return t.abrupt("return", !1);

                            case 11:

                                n = Z.Loading.service({

                                    fullscreen: !0,

                                    background: "rgba(0,0,0,0.5)"

                                }),

                                _("/api/tactics", {

                                    code: e.code,

                                    price: e.share[4],

                                    xingyongjin: e.selectaddxinyongjin,

                                    multiple: parseInt(e.selectMultiple[e.selectMultipleIndex]),

                                    max_price: e.addReduceNum,

                                    min_price: e.lessReduceNum,

                                    create_money: parseFloat(e.buildCost) + parseInt(e.selectNum[e.selectNumIndex]),

                                    is_add: e.is_add,

                                    is_sell: e.is_sell,

                                    is_analog: 0,

                                    uuid: Math.random().toString(36).substr(2)

                                },

                                {

                                    Authorization: "Bearer " + a

                                }).then(function(t) {

                                    n.close(),

                                    1 == t.data.status ? (e.$message(t.data.msg), e.$router.push("/cl")) : e.$message(t.data.msg)

                                },

                                function(e) {

                                    n.close(),

                                    console.log(e.response)

                                });

                            case 13:

                            case "end":

                                return t.stop()

                            }

                        },

                        t, e)

                    }))()

                },

                getUserInfo: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/user/", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        t ? e.myMoney = t.data.data.money: e.$message("登录失败，请重新登录")

                    },

                    function(e) {})

                },

                getMultiple: function() {

                    var e = this;

                    C("/api/multiple", {},

                    {}).then(function(t) {

                        t.data.status && (e.selectMultiple = t.data.data, e.getCDMoney())

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                getCDMoney: function() {

                    var e = this;

                    console.log(11111);

                    var t = localStorage.getItem("Authorization");

                    _("/api/tactics/procedure", {

                        code: this.code,

                        xingyongjin: this.selectaddxinyongjin,

                        multiple: parseInt(this.selectMultiple[this.selectMultipleIndex])

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        e.deferred = t.data.data.diyanfei,

                        e.buildCost = t.data.data.cangfei,

                        e.lessReduceNum = t.data.data.min_min_price,

                        e.addReduceNum = t.data.data.max_max_price

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                changeNum: function(e) {

                    this.selectNumIndex = e,

                    this.selectaddxinyongjin = this.selectNum[e]

                },

                changeMultiple: function(e) {

                    this.selectMultipleIndex = e,

                    this.getCDMoney(),

                    this.getShare()

                },

                getBuild: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/tactics/storage/", {

                        multiple: parseInt(this.selectMultiple[this.selectMultipleIndex]),

                        xingyongjin: this.selectaddxinyongjin

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        t.data.status ? e.buildCost = t.data.data.cangfei: (e.buildCost = "", e.$message("仓费获取出错"))

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                getShare: function() {

                    var e = this;

                    C("/api/stock/getprice/", {

                        code: this.code

                    }).then(function(t) {

                        console.log(t),

                        e.isdanger = t.data.data.is_danger,

                        e.share = t.data.data[0]; (parseFloat(e.share[4]) - parseFloat((.8 * parseFloat(e.share[4])).toFixed(2) + .01) / parseInt(e.selectMultiple[e.selectMultipleIndex])).toFixed(2);

                        e.minLess = e.lessReduceNum,

                        e.addReduceNumeff = (parseFloat(parseFloat(e.share[4]).toFixed(2)) + .01).toFixed(2),

                        e.minAdd = e.addReduceNum

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                reduce1: function() {

                    this.addReduceNum = (parseInt(100 * this.addReduceNum) - 1) / 100,

                    this.addReduceNum < this.addReduceNumeff && (this.$message("您的止盈设置不能低于" + this.addReduceNumeff), this.addReduceNum = this.addReduceNumeff)

                },

                add1: function() {

                    this.addReduceNum = (parseInt(100 * this.addReduceNum) + 1) / 100

                },

                reduce2: function() {

                    this.lessReduceNum = (parseInt(100 * this.lessReduceNum) - 1) / 100,

                    this.lessReduceNum < this.minLess && (this.$message("您的止损设置不能低于" + this.minLess), this.lessReduceNum = this.minLess)

                },

                add2: function() {

                    this.lessReduceNum = (parseInt(100 * this.lessReduceNum) + 1) / 100

                }

            }

        },

        H = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", {

                    staticStyle: {

                        overflow: "hidden"

                    }

                },

                [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("创建策略")])]), e._v(" "), a("div", {

                    staticClass: "share_box"

                },

                [a("ul", {

                    staticClass: "ul1"

                },

                [a("li", {

                    staticClass: "first"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v(e._s(e.share[1]))]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v(e._s(e._f("filtersName")(e.share[0])))])]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [a("p", {

                    staticClass: "top",

                    class: {

                        down_green: (e.share[4] - e.share[3]) / e.share[3] < 0

                    }

                },

                [e._v(e._s(parseFloat(e.share[4]).toFixed(2)))]), e._v(" "), a("div", {

                    staticClass: "bottom"

                },

                [a("span", {

                    staticClass: "left",

                    class: {

                        down_green: (e.share[4] - e.share[3]) / e.share[3] < 0

                    }

                },

                [e._v(e._s((e.share[4] - e.share[3]).toFixed(2)) + "  ")]), e._v(" "), a("span", {

                    staticClass: "right",

                    class: {

                        down_green: (e.share[4] - e.share[3]) / e.share[3] < 0

                    }

                },

                [e._v(e._s(e._f("toPercentage")((e.share[4] - e.share[3]) / e.share[3])))])])]), e._v(" "), a("router-link", {

                    staticClass: "third",

                    staticStyle: {

                        color: "red"

                    },

                    attrs: {

                        tag: "div",

                        to: {

                            path: "/Ks/",

                            query: {

                                code: e.code

                            }

                        }

                    }

                },

                [e._v("行情"), a("span", {

                    staticClass: "iconfont",

                    staticStyle: {

                        "font-size": ".12rem",

                        "margin-left": ".1rem"

                    }

                },

                [e._v("")])])], 1), e._v(" "), a("ul", {

                    staticClass: "ul2"

                },

                [a("li", [e._v("市价委托")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [e._v(e._s(parseFloat(e.share[4]).toFixed(2)))])])]), e._v(" "), a("div", {

                    staticClass: "select_box1"

                },

                [a("ul", {

                    staticClass: "title"

                },

                [a("li", [e._v("选择信用金（元）")]), e._v(" "), a("li", {

                    staticStyle: {

                        color: "#fff"

                    }

                },

                [e._v("1")]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.selectaddxinyongjin,

                        expression: "selectaddxinyongjin"

                    }],

                    attrs: {

                        type: "text"

                    },

                    domProps: {

                        value: e.selectaddxinyongjin

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.selectaddxinyongjin = t.target.value)

                        }

                    }

                })])]), e._v(" "), a("ul", {

                    staticClass: "select_num"

                },

                [a("li", {

                    staticClass: "left"

                },

                [e._v("\n        你也可选择\n      ")]), e._v(" "), a("li", {

                    staticClass: "right"

                },

                [a("ul", e._l(e.selectNum,

                function(t, i) {

                    return a("li", {

                        key: i,

                        class: {

                            nomargin: i % 4 == 3,

                            active: i == e.selectNumIndex

                        },

                        on: {

                            click: function(t) {

                                return e.changeNum(i)

                            }

                        }

                    },

                    [e._v(e._s(t))])

                }), 0)])])]), e._v(" "), a("div", {

                    staticClass: "select_box2"

                },

                [a("ul", {

                    staticClass: "ul1"

                },

                [a("li", {

                    staticClass: "first"

                },

                [e._v("\n        策略匹配\n      ")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [a("ul", e._l(e.selectMultiple,

                function(t, i) {

                    return a("li", {

                        key: i,

                        class: {

                            nomargin: i % 3 == 2,

                            active: i == e.selectMultipleIndex

                        },

                        on: {

                            click: function(t) {

                                return e.changeMultiple(i)

                            }

                        }

                    },

                    [e._v(e._s(t) + "倍")])

                }), 0)]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v(e._s(e.num) + "股")]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v("值" + e._s(Math.round(e.num * e.share[4])) + "元")])])])]), e._v(" "), a("div", {

                    staticClass: "select_box3"

                },

                [a("ul", {

                    staticClass: "ul1"

                },

                [a("li", {

                    staticClass: "first"

                },

                [e._v("\n        止盈\n      ")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [a("div", {

                    staticClass: "reduce",

                    on: {

                        click: function(t) {

                            return e.reduce1()

                        }

                    }

                },

                [e._v("-")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.addReduceNum,

                        expression: "addReduceNum"

                    }],

                    staticClass: "number",

                    attrs: {

                        type: "number"

                    },

                    domProps: {

                        value: e.addReduceNum

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.addReduceNum = t.target.value)

                        }

                    }

                }), e._v(" "), a("div", {

                    staticClass: "add",

                    on: {

                        click: function(t) {

                            return e.add1()

                        }

                    }

                },

                [e._v("+")])]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [e._v("\n        涨幅约"), a("span", {

                    staticClass: "red"

                },

                [e._v(e._s(e._f("toPercentage")((e.addReduceNum - parseFloat(e.share[4])) / parseFloat(e.share[4]))))])])]), e._v(" "), a("ul", {

                    staticClass: "ul1"

                },

                [a("li", {

                    staticClass: "first"

                },

                [e._v("\n        止损\n      ")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [a("div", {

                    staticClass: "reduce",

                    on: {

                        click: function(t) {

                            return e.reduce2()

                        }

                    }

                },

                [e._v("-")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.lessReduceNum,

                        expression: "lessReduceNum"

                    }],

                    staticClass: "number",

                    attrs: {

                        type: "number"

                    },

                    domProps: {

                        value: e.lessReduceNum

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.lessReduceNum = t.target.value)

                        }

                    }

                }), e._v(" "), a("div", {

                    staticClass: "add",

                    on: {

                        click: function(t) {

                            return e.add2()

                        }

                    }

                },

                [e._v("+")])]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [e._v("\n        跌幅约"), a("span", {

                    staticClass: "red down_green"

                },

                [e._v(e._s(e._f("toPercentage")((e.lessReduceNum - parseFloat(e.share[4])) / parseFloat(e.share[4]))))])])])]), e._v(" "), a("div", {

                    staticClass: "select_box4"

                },

                [a("div", {

                    staticClass: "first"

                },

                [e._v("建仓费")]), e._v(" "), a("div", {

                    staticClass: "secend"

                },

                [e._v(e._s(e.buildCost) + "元"), a("span", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: "" == e.buildCost,

                        expression: "buildCost == '' "

                    }]

                },

                [e._v("请选择信用金与策略匹配来计算仓费")])])]), e._v(" "), a("div", {

                    staticClass: "select_box5"

                },

                [a("div", {

                    staticClass: "select_box4"

                },

                [a("div", {

                    staticClass: "first"

                },

                [e._v("递延费")]), e._v(" "), a("div", {

                    staticClass: "secend"

                },

                [e._v(e._s(e.deferred) + "/天")])]), e._v(" "), a("div", {

                    staticClass: "select_box4"

                },

                [a("div", {

                    staticClass: "first"

                },

                [e._v("是否递延")]), e._v(" "), e._m(0), e._v(" "), a("div", {

                    staticClass: "ydf"

                },

                [a("el-switch", {

                    staticClass: "ydf",

                    attrs: {

                        "active-color": "#ff5a5a"

                    },

                    model: {

                        value: e.ydf,

                        callback: function(t) {

                            e.ydf = t

                        },

                        expression: "ydf"

                    }

                })], 1)]), e._v(" "), a("div", {

                    staticClass: "select_box4"

                },

                [a("div", {

                    staticClass: "first"

                },

                [e._v("追加信用金")]), e._v(" "), e._m(1), e._v(" "), a("div", {

                    staticClass: "ydf"

                },

                [a("el-switch", {

                    staticClass: "ydf",

                    attrs: {

                        "active-color": "#ff5a5a"

                    },

                    model: {

                        value: e.zj,

                        callback: function(t) {

                            e.zj = t

                        },

                        expression: "zj"

                    }

                })], 1)])]), e._v(" "), a("div", {

                    staticClass: "should_pay"

                },

                [a("div", {

                    staticClass: "left"

                },

                [e.selectNumIndex > 0 ? a("p", {

                    staticClass: "top"

                },

                [e._v("需支付"), a("span", [e._v(e._s(parseFloat(e.buildCost) + parseFloat(e.selectNum[e.selectNumIndex])))]), e._v("元")]) : a("p", {

                    staticClass: "top"

                },

                [e._v("需支付"), a("span", [e._v(e._s(parseFloat(e.buildCost) + parseFloat(e.selectaddxinyongjin)))]), e._v("元")]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v("（账户余额" + e._s(e.myMoney) + "元）")])]), e._v(" "), 1 != e.isdanger ? a("div", {

                    staticClass: "right",

                    on: {

                        click: function(t) {

                            return e.sendCreate()

                        }

                    }

                },

                [e._v("马上创建")]) : a("div", {

                    staticClass: "right",

                    staticStyle: {

                        background: "#ccc",

                        color: "#fff"

                    }

                },

                [e._v("马上创建")])]), e._v(" "), a("div", {

                    staticClass: "agree",

                    on: {

                        click: function(t) {

                            return e.agreeClick()

                        }

                    }

                },

                [a("i", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: e.agree,

                        expression: "agree"

                    }],

                    staticClass: "iconfont"

                },

                [e._v("  ")]), e._v(" "), a("i", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: !e.agree,

                        expression: "!agree"

                    }],

                    staticClass: "iconfont"

                },

                [e._v("")]), e._v(" "), a("span", {

                    staticClass: "txt"

                },

                [e._v("我已阅读并同意"), a("router-link", {

                    attrs: {

                        tag: "span",

                        targe: "_blank",

                        to: "/agreeMent"

                    }

                },

                [e._v("《支付服务协议》")])], 1)])], 1)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "secend special"

                },

                [this._v("若未开启自动递延"), t("br"), this._v("到期日 14:50 将卖出股票")])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "secend special"

                },

                [this._v("开启为自动"), t("br"), this._v("关闭为手动")])

            }]

        };

        var Q = a("VU/8")(V, H, !1,

        function(e) {

            a("P0Yb")

        },

        "data-v-7451a75c", null).exports,

        J = {

            components: {

                ReturnTop: G

            }

        },

        q = {

            render: function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", [t("return-top", [t("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [this._v("涨幅榜")])]), this._v(" "), this._m(0)], 1)

            },

            staticRenderFns: [function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", {

                    staticClass: "rank"

                },

                [a("div", {

                    staticClass: "title"

                },

                [a("ul", [a("li", {

                    staticClass: "first"

                },

                [e._v("名称代码")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [e._v("最新价")]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [e._v("涨幅")])])]), e._v(" "), a("div", {

                    staticClass: "container"

                },

                [a("ul", [a("li", [a("div", {

                    staticClass: "name"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("嘉麟杰")]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v("002486")])]), e._v(" "), a("div", {

                    staticClass: "num"

                },

                [e._v("3.58")]), e._v(" "), a("div", {

                    staticClass: "percentage"

                },

                [e._v("+10.15%")])]), e._v(" "), a("li", [a("div", {

                    staticClass: "name"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("嘉麟杰")]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v("002486")])]), e._v(" "), a("div", {

                    staticClass: "num"

                },

                [e._v("3.58")]), e._v(" "), a("div", {

                    staticClass: "percentage"

                },

                [e._v("+10.15%")])])])])])

            }]

        };

        var X = a("VU/8")(J, q, !1,

        function(e) {

            a("cvdU")

        },

        "data-v-1f1b9e21", null).exports,

        K = {

            data: function() {

                return {

                    mustNew: [],

                    tabIndex: 0,

                    tab: [{

                        title: "要闻"

                    },

                    {

                        title: "操盘必读"

                    },

                    {

                        title: "行业研究"

                    },

                    {

                        title: "新股快讯"

                    },

                    {

                        title: "全球股市"

                    }]

                }

            },

            mounted: function() {

                this.getMessage(1),

                this.scroll = new F.a(this.$refs.wrapper, {

                    click: "true",

                    pullUpLoad: {

                        threshold: 10

                    }

                }),

                this.lazyLoad()

            },

            methods: {

                lazyLoad: function() {

                    var e = this;

                    this.$nextTick(function() {

                        e.scroll.on("pullingUp",

                        function() {

                            console.log("run"),

                            e.getMessage()

                        })

                    })

                },

                getMessage: function(e) {

                    var t = this;

                    C("/api/articles/" + e, {},

                    {}).then(function(e) {

                        t.mustNew = t.mustNew.concat(e.data.data)

                    },

                    function(e) {

                        t.$message("信息获取失效，请刷新后重试")

                    })

                },

                tabClick: function(e) {

                    this.tabIndex = e,

                    this.mustNew.splice(0, this.mustNew.length),

                    this.getMessage(++e)

                }

            }

        },

        ee = {

            render: function() {

                this.$createElement;

                this._self._c;

                return this._m(0)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", [t("iframe", {

                    attrs: {

                        frameborder: "0",

                        width: "100%",

                        height: "100%",

                        scrolling: "yes",

                        src: "https://emwap.eastmoney.com/info/channel/kuaixun?from=singlemessage"

                    }

                })])

            }]

        };

        var te = a("VU/8")(K, ee, !1,

        function(e) {

            a("KLBP")

        },

        "data-v-2f0113f8", null).exports,

        ae = {

            data: function() {

                return {

                    id: this.$route.query.id,

                    news: {}

                }

            },

            mounted: function() {

                this.getMessage(this.id)

            },

            methods: {

                getMessage: function(e) {

                    var t = this;

                    C("/api/article/" + e, {},

                    {}).then(function(e) {

                        t.news = e.data.data

                    },

                    function(e) {

                        t.$message("信息获取失效，请刷新后重试")

                    })

                }

            },

            components: {

                ReturnTop: G

            }

        },

        ie = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("资讯详情")])]), e._v(" "), a("div", {

                    staticClass: "author_box"

                },

                [a("p", {

                    staticClass: "h1"

                },

                [e._v(e._s(e.news.title))]), e._v(" "), a("p", {

                    staticClass: "more"

                },

                [a("span", [e._v(e._s(e.news.created_at))]), e._v(" "), a("span", {

                    staticClass: "red"

                },

                [e._v(e._s(e.news.source))])])]), e._v(" "), a("div", {

                    staticClass: "box",

                    domProps: {

                        innerHTML: e._s(e.news.announcement)

                    }

                })], 1)

            },

            staticRenderFns: []

        };

        var ne = a("VU/8")(ae, ie, !1,

        function(e) {

            a("C+zq")

        },

        "data-v-3dbe5292", null).exports,

        se = {

            data: function() {

                return {

                    swiperOption: {

                        autoplay: !0,

                        loop: !1,

                        pagination: {}

                    }

                }

            },

            components: {

                ReturnTop: G

            }

        },

        de = {

            render: function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "div"

                },

                [t("return-top", [t("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [this._v("新手指引")])]), this._v(" "), t("swiper", {

                    ref: "mySwiper",

                    attrs: {

                        options: this.swiperOption

                    }

                },

                [t("swiper-slide", [t("img", {

                    attrs: {

                        src: a("WEQa")

                    }

                })]), this._v(" "), t("swiper-slide", [t("img", {

                    attrs: {

                        src: a("Zw8s")

                    }

                })]), this._v(" "), t("swiper-slide", [t("img", {

                    attrs: {

                        src: a("1dOt")

                    }

                })]), this._v(" "), t("swiper-slide", [t("img", {

                    attrs: {

                        src: a("xCo2")

                    }

                })]), this._v(" "), t("div", {

                    staticClass: "swiper-pagination",

                    attrs: {

                        slot: "pagination"

                    },

                    slot: "pagination"

                })], 1)], 1)

            },

            staticRenderFns: []

        };

        var re = a("VU/8")(se, de, !1,

        function(e) {

            a("mVmT")

        },

        "data-v-3d1be6b4", null).exports,

        le = {

            mounted: function() {

                this.getDt(),

                this.scroll = new F.a(this.$refs.wrapper, {

                    click: "true",

                    pullUpLoad: {

                        threshold: 10

                    }

                }),

                this.lazyLoad()

            },

            data: function() {

                return {

                    page: 0,

                    Dt: []

                }

            },

            components: {

                ReturnTop: G

            },

            filters: {

                filterDate: function(e) {

                    var t = e.split("-"),

                    a = t[1] + "-" + t[2];

                    return a = (t = a.split(":"))[0] + ":" + t[1]

                }

            },

            methods: {

                lazyLoad: function() {

                    var e = this;

                    this.$nextTick(function() {

                        e.scroll.on("pullingUp",

                        function() {

                            console.log("run"),

                            e.getDt()

                        })

                    })

                },

                getDt: function() {

                    var e = this;

                    C("/api/tactics/list/new?include=user,shares", {

                        page: this.page

                    },

                    {}).then(function(t) {

                        e.Dt = e.Dt.concat(e.Dt, t.data.data),

                        e.page++,

                        e.scroll.finishPullUp(),

                        e.scroll.refresh()

                    },

                    function(e) {

                        console.log(e)

                    })

                }

            }

        },

        oe = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("最新动态")])]), e._v(" "), a("div", {

                    ref: "wrapper",

                    staticClass: "wrapper"

                },

                [a("div", {

                    staticClass: "scroll_container"

                },

                [a("div", {

                    staticClass: "tab"

                },

                [a("ul", e._l(e.Dt,

                function(t, i) {

                    return a("li", {

                        key: i

                    },

                    [a("div", {

                        staticClass: "dynamic"

                    },

                    [a("div", {

                        staticClass: "user"

                    },

                    [a("span", {

                        staticClass: "icon"

                    },

                    [a("img", {

                        staticStyle: {

                            "border-radius": ".18rem",

                            width: ".36rem",

                            height: ".36rem"

                        },

                        attrs: {

                            src: t.user.data.image

                        }

                    })]), e._v(" "), a("span", {

                        staticClass: "username"

                    },

                    [e._v(e._s(t.user.data.name))])]), e._v(" "), a("div", {

                        staticClass: "transaction"

                    },

                    [a("div", {

                        staticClass: "user_num"

                    },

                    [e._v("\n                  " + e._s(t.shares.data.name) + "   " + e._s(t.shares.data.code) + "\n                ")]), e._v(" "), null != t.price ? a("div", {

                        staticClass: "buy"

                    },

                    [e._v("\n                  " + e._s(t.price) + "   "), a("span", [e._v("买入")])]) : e._e(), e._v(" "), null != t.user.data.updated_at ? a("div", {

                        staticClass: "time"

                    },

                    [e._v("\n                  " + e._s(e._f("filterDate")(t.user.data.updated_at)) + "\n                  ")]) : e._e()])])])

                }), 0)])])])], 1)

            },

            staticRenderFns: []

        };

        var ue = a("VU/8")(le, oe, !1,

        function(e) {

            a("4/bX")

        },

        "data-v-2b3f60c3", null).exports,

        ve = {

            mounted: function() {

                this.scroll = new F.a(this.$refs.wrapper, {

                    click: "true",

                    pullUpLoad: {



                        threshold: 10

                    }

                }),

                this.getCl(),

                this.lazyLoad()

            },

            data: function() {

                return {

                    page: 0,

                    Cl: []

                }

            },

            components: {

                ReturnTop: G

            },

            methods: {

                lazyLoad: function() {

                    var e = this;

                    this.$nextTick(function() {

                        e.scroll.on("pullingUp",

                        function() {

                            console.log("run"),

                            e.getCl()

                        })

                    })

                },

                getCl: function() {

                    var e = this;

                    C("/api/tactics/list/best?include=user,shares", {

                        page: this.page

                    },

                    {}).then(function(t) {

                        console.log(t),

                        e.Cl = e.Cl.concat(e.Cl, t.data.data),

                        console.log(e.Cl),

                        e.page++,

                        e.scroll.finishPullUp(),

                        e.scroll.refresh()

                    },

                    function(e) {

                        console.log(e)

                    })

                }

            }

        },

        ce = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("最新策略")])]), e._v(" "), a("div", {

                    staticClass: "tab2"

                },

                [a("div", {

                    ref: "wrapper",

                    staticClass: "wrapper"

                },

                [a("div", {

                    staticClass: "scroll_container"

                },

                e._l(e.Cl,

                function(t, i) {

                    return a("div", {

                        key: i,

                        staticClass: "box"

                    },

                    [a("div", {

                        staticClass: "img"

                    },

                    [i < 3 ? a("img", {

                        attrs: {

                            src: "../../../static/images/medal_0" + (i + 1) + ".jpg",

                            alt: ""

                        }

                    }) : e._e()]), e._v(" "), a("div", {

                        staticClass: "right"

                    },

                    [a("div", {

                        staticClass: "top"

                    },

                    [a("p", {

                        staticClass: "name"

                    },

                    [e._v(e._s(t.shares.data.name) + "  " + e._s(t.shares.data.code))]), e._v(" "), a("div", {

                        staticClass: "user"

                    },

                    [a("i", {

                        staticClass: "icon"

                    },

                    [null != t.user.data.image ? a("img", {

                        staticStyle: {

                            "border-radius": ".18rem",

                            width: ".36rem",

                            height: ".36rem"

                        },

                        attrs: {

                            src: t.user.data.image,

                            alt: ""

                        }

                    }) : e._e()]), e._v(" "), a("span", [e._v(e._s(t.user.data.name ? t.user.data.name: "时金用户"))])])]), e._v(" "), a("div", {

                        staticClass: "center"

                    },

                    [a("ul", [a("li", [a("span", {

                        staticClass: "first",

                        class: {

                            down_green: parseInt(t.rate) < 0

                        }

                    },

                    [e._v(e._s(t.rate))])]), e._v(" "), a("li", [a("span", {

                        staticClass: "title"

                    },

                    [e._v("买价:")]), e._v(" "), a("span", {

                        staticClass: "num"

                    },

                    [e._v(e._s(t.price))])]), e._v(" "), a("li", [a("span", {

                        staticClass: "title"

                    },

                    [e._v("卖价:")]), e._v(" "), a("span", {

                        staticClass: "num"

                    },

                    [e._v(e._s(t.deal_price))])]), e._v(" "), e._m(0, !0), e._v(" "), a("li", [a("span", {

                        staticClass: "title"

                    },

                    [e._v("盈亏:")]), e._v(" "), a("span", {

                        staticClass: "num red",

                        class: {

                            down_green: t.profit_money < 0

                        }

                    },

                    [e._v(e._s(t.profit_money))])]), e._v(" "), a("li", [a("span", {

                        staticClass: "title"

                    },

                    [e._v("数量: ")]), e._v(" "), a("span", {

                        staticClass: "num"

                    },

                    [e._v(e._s(t.num))])])])])])])

                }), 0)])])], 1)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("li", [t("span", {

                    staticClass: "title"

                },

                [this._v("收益率")])])

            }]

        };

        var pe = a("VU/8")(ve, ce, !1,

        function(e) {

            a("U/C2")

        },

        "data-v-a7781582", null).exports,

        Ie = {

            render: function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", [t("router-view")], 1)

            },

            staticRenderFns: []

        };

        var he = a("VU/8")({},

        Ie, !1,

        function(e) {

            a("n2mJ")

        },

        null, null).exports,

        me = {

            beforeCreate: function() {

                document.getElementsByTagName("body")[0].className = "bg2"

            },

            beforeDestroy: function() {

                document.body.removeAttribute("class", "bg2")

            },

            mounted: function() {},

            data: function() {

                return {

                    isShow: !1,

                    selectType: "企业支付宝 ",

                    other: "企业对公账户",

                    activeNames: ["0"],

                    ewm: a("B2jS"),

                    dg: "",

                    sms: "",

                    sms2: "",

                    rnm: ""

                }

            },

            methods: {

                pay: function() {

                    var e = localStorage.getItem("Authorization");

                    _("/api/payGo", {

                        money: this.sms

                    },

                    {

                        Authorization: "Bearer " + e

                    }).then(function(e) {

                        window.location.href = e.data.payurl

                    })

                },

                getYhk: function() {

                    var e = this;

                    C("/api/recharge/", {},

                    {}).then(function(t) {

                        e.dg = t.data.dg_img,

                        e.ewm = t.data.zfb_img,

                        e.rnm = t.data

                    },

                    function(t) {

                        e.$message("请检查网络或登录状态")

                    })

                },

                change: function() {

                    console.log(1)

                },

                changeType: function() {

                    var e = this.selectType;

                    this.selectType = this.other,

                    this.other = e,

                    this.isShow = !this.isShow,

                    this.activeNames = ["0"]

                }

            },

            components: {

                ReturnTop: G

            }

        },

        fe = {

            render: function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", [t("return-top", [t("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [this._v("充值")])]), this._v(" "), t("router-view")], 1)

            },

            staticRenderFns: []

        };

        var ge = a("VU/8")(me, fe, !1,

        function(e) {

            a("8Ybq")

        },

        "data-v-6413531c", null).exports,

        _e = {

            data: function() {

                return {

                    name: "",

                    id: "",

                    prePageData: {},

                    payType: "1",

                    payShow: !1,

                    clickOnOff: !0,

                    payMoney: "123",

                    passwordGroup: ["", "", "", "", "", ""],

                    number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "&#xe621;", "9", "确定"],

                    clickIndex: 0,

                    payIndex: 0,

                    returnPay: ""

                }

            },

            components: {

                ReturnTop: G

            },

            mounted: function() {

                this.getbank(),

                this.prePageData = JSON.parse(this.$route.query.prePageData2),

                console.log(this.prePageData)

            },

            methods: {

                getbank: function() {

                    var e = this;

                    C("/api/banks", {},

                    {}).then(function(t) {

                        e.payChoice = t.data;

                        for (var a = 0; a < e.payChoice.length; a++) e.payChoice[a].choiceOk = 0 == a ? "&#xe62b;": "&#xe60f;"

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                pay2: function() {

                    var e = this;

                    if ("" == this.name) return this.$message("请输入姓名"),

                    !1;

                    if ("" == this.id) return this.$message("请输入身份证号"),

                    !1;

                    var t = localStorage.getItem("Authorization");

                    _("/api/pay", {

                        no_order: this.prePageData.orderData.no_order,

                        id_no: this.id,

                        acct_name: this.name,

                        no_agree: this.prePageData.orderData.no_agree

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        e.$refs.req_data.value = t.data.data,

                        console.log(t.data.data),

                        e.$refs.submit.click()

                    },

                    function(e) {})

                },

                select: function(e) {

                    this.payChoice.forEach(function(e) {

                        e.choiceOk = "&#xe60f;"

                    }),

                    this.payChoice[e].choiceOk = "&#xe62b;",

                    this.payIndex = e

                },

                submitNext: function() {

                    this.$router.push({

                        path: "third"

                    })

                },

                payClose: function() {

                    this.payShow = !1

                },

                wap_pay: function() {

                    var e = this.returnPay;

                    console.log(e),

                    paymentjs.createPayment(e,

                    function(e, t) {

                        console.log(e),

                        console.log(t.msg),

                        console.log(t.extra)

                    })

                },

                pay: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    _("/api/pay", {

                        order_no: this.query.order_no,

                        bankCode: this.payChoice[this.payIndex].code,

                        payType: this.payType

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        e.returnPay = t.data.data,

                        e.wap_pay()

                    },

                    function(e) {

                        console.log(e.response)

                    })

                },

                inputPwd: function(e) {

                    switch (e) {

                    case "&#xe621;":

                        this.passwordGroup.splice(--this.clickIndex, 1, ""),

                        this.clickIndex < 0 && (this.clickIndex = 0),

                        this.clickIndex < 6 && this.clickIndex > 0 && (this.clickOnOff = !0);

                        break;

                    case "确定":

                        break;

                    default:

                        this.clickOnOff ? (this.passwordGroup.splice(this.clickIndex++, 1, e), 6 == this.clickIndex && (this.clickOnOff = !1)) : this.$message("请输入6位以内密码")

                    }

                    console.log(this.clickIndex)

                }

            }

        },

        Ce = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("充值")])]), e._v(" "), a("p", {

                    staticClass: "order"

                },

                [e._v("订单编号：" + e._s(e.prePageData.orderData.no_order))]), e._v(" "), a("div", {

                    staticClass: "should_pay"

                },

                [a("div", {

                    staticClass: "box"

                },

                [a("p", {

                    staticClass: "left"

                },

                [e._v("应付金额")]), e._v(" "), a("p", {

                    staticClass: "right"

                },

                [e._v("¥" + e._s(e.prePageData.orderData.money))])]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v("（手续费：0元）")])]), e._v(" "), a("p", {

                    staticClass: "pay_wait"

                },

                [e._v("您的订单已提交成功，正在等待付款")]), e._v(" "), a("p", {

                    staticClass: "order"

                },

                [e._v("银行卡类别")]), e._v(" "), a("p", {

                    staticClass: "order"

                },

                [e._v("支付方式")]), e._v(" "), a("div", {

                    staticClass: "pay_choice",

                    on: {

                        click: function(t) {

                            return e.select(1)

                        }

                    }

                },

                [e._m(0), e._v(" "), a("div", {

                    staticClass: "right"

                })]), e._v(" "), e.prePageData.cardData.bank_name ? a("div", {

                    staticClass: "pay_choice",

                    staticStyle: {

                        display: "flex"

                    },

                    on: {

                        click: function(t) {

                            return e.select(1)

                        }

                    }

                },

                [e._m(1), e._v(" "), a("div", {

                    staticClass: "right",

                    staticStyle: {

                        "text-align": "left",

                        flex: "2"

                    }

                },

                [e._v("\n" + e._s(e.prePageData.cardData.bank_name) + e._s(e.prePageData.cardData.card_no) + "\n      ")])]) : e._e(), e._v(" "), a("div", {

                    staticClass: "pay_choice",

                    staticStyle: {

                        display: "flex"

                    },

                    on: {

                        click: function(t) {

                            return e.select(1)

                        }

                    }

                },

                [e._m(2), e._v(" "), a("div", {

                    staticClass: "right",

                    staticStyle: {

                        "text-align": "left",

                        flex: "2"

                    }

                },

                [a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.name,

                        expression: "name"

                    }],

                    attrs: {

                        type: "text"

                    },

                    domProps: {

                        value: e.name

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.name = t.target.value)

                        }

                    }

                })])]), e._v(" "), a("div", {

                    staticClass: "pay_choice",

                    staticStyle: {

                        display: "flex"

                    },

                    on: {

                        click: function(t) {

                            return e.select(1)

                        }

                    }

                },

                [e._m(3), e._v(" "), a("div", {

                    staticClass: "right",

                    staticStyle: {

                        "text-align": "left",

                        flex: "2"

                    }

                },

                [a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.id,

                        expression: "id"

                    }],

                    attrs: {

                        type: "text"

                    },

                    domProps: {

                        value: e.id

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.id = t.target.value)

                        }

                    }

                })])]), e._v(" "), a("div", {

                    staticClass: "submit",

                    staticStyle: {

                        "margin-top": ".4em"

                    },

                    on: {

                        click: function(t) {

                            return e.pay2()

                        }

                    }

                },

                [e._v("\n      立即充值\n    ")]), e._v(" "), a("form", {

                    ref: "form",

                    attrs: {

                        action: "https://wap.lianlianpay.com/authpay.htm",

                        method: "post",

                        hidden: ""

                    }

                },

                [a("input", {

                    ref: "req_data",

                    attrs: {

                        name: "req_data"

                    }

                }), e._v(" "), a("input", {

                    ref: "submit",

                    attrs: {

                        type: "submit"

                    }

                })])], 1)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "left"

                },

                [t("i", {

                    staticClass: "img"

                },

                [t("img", {

                    attrs: {

                        src: a("OxRS"),

                        alt: ""

                    }

                })]), this._v(" "), t("span", [this._v("连连支付")])])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "left",

                    staticStyle: {

                        flex: "1"

                    }

                },

                [t("span", [this._v("银行卡")])])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "left",

                    staticStyle: {

                        flex: "1"

                    }

                },

                [t("span", [this._v("姓名")])])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "left",

                    staticStyle: {

                        flex: "1"

                    }

                },

                [t("span", [this._v("身份证号")])])

            }]

        };

        var ye = a("VU/8")(_e, Ce, !1,

        function(e) {

            a("Z5vj")

        },

        "data-v-f90c80ba", null).exports,

        Ae = (a("9bZ9"), a("OPfe"), a("6isa"), [{

            id: "110000",

            value: "北京市",

            parentId: "0"

        },

        {

            id: "120000",

            value: "天津市",

            parentId: "0"

        },

        {

            id: "130000",

            value: "河北省",

            parentId: "0"

        },

        {

            id: "140000",

            value: "山西省",

            parentId: "0"

        },

        {

            id: "150000",

            value: "内蒙古自治区",

            parentId: "0"

        },

        {

            id: "210000",

            value: "辽宁省",

            parentId: "0"

        },

        {

            id: "220000",

            value: "吉林省",

            parentId: "0"

        },

        {

            id: "230000",

            value: "黑龙江省",

            parentId: "0"

        },

        {

            id: "310000",

            value: "上海市",

            parentId: "0"

        },

        {

            id: "320000",

            value: "江苏省",

            parentId: "0"

        },

        {

            id: "330000",

            value: "浙江省",

            parentId: "0"

        },

        {

            id: "340000",

            value: "安徽省",

            parentId: "0"

        },

        {

            id: "350000",

            value: "福建省",

            parentId: "0"

        },

        {

            id: "360000",

            value: "江西省",

            parentId: "0"

        },

        {

            id: "370000",

            value: "山东省",

            parentId: "0"

        },

        {

            id: "410000",

            value: "河南省",

            parentId: "0"

        },

        {

            id: "420000",

            value: "湖北省",

            parentId: "0"

        },

        {

            id: "430000",

            value: "湖南省",

            parentId: "0"

        },

        {

            id: "440000",

            value: "广东省",

            parentId: "0"

        },

        {

            id: "450000",

            value: "广西壮族自治区",

            parentId: "0"

        },

        {

            id: "460000",

            value: "海南省",

            parentId: "0"

        },

        {

            id: "500000",

            value: "重庆市",

            parentId: "0"

        },

        {

            id: "510000",

            value: "四川省",

            parentId: "0"

        },

        {

            id: "520000",

            value: "贵州省",

            parentId: "0"

        },

        {

            id: "530000",

            value: "云南省",

            parentId: "0"

        },

        {

            id: "540000",

            value: "西藏自治区",

            parentId: "0"

        },

        {

            id: "610000",

            value: "陕西省",

            parentId: "0"

        },

        {

            id: "620000",

            value: "甘肃省",

            parentId: "0"

        },

        {

            id: "630000",

            value: "青海省",

            parentId: "0"

        },

        {

            id: "640000",

            value: "宁夏回族自治区",

            parentId: "0"

        },

        {

            id: "650000",

            value: "新疆维吾尔族自治区",

            parentId: "0"

        }]),

        be = [{

            id: "110100",

            value: "北京市",

            parentId: "110000"

        },

        {

            id: "120100",

            value: "天津市",

            parentId: "120000"

        },

        {

            id: "130100",

            value: "石家庄市",

            parentId: "130000"

        },

        {

            id: "130200",

            value: "唐山市",

            parentId: "130000"

        },

        {

            id: "130300",

            value: "秦皇岛市",

            parentId: "130000"

        },

        {

            id: "130400",

            value: "邯郸市",

            parentId: "130000"

        },

        {

            id: "130500",

            value: "邢台市",

            parentId: "130000"

        },

        {

            id: "130600",

            value: "保定市",

            parentId: "130000"

        },

        {

            id: "130700",

            value: "张家口市",

            parentId: "130000"

        },

        {

            id: "130800",

            value: "承德市",

            parentId: "130000"

        },

        {

            id: "130900",

            value: "沧州市",

            parentId: "130000"

        },

        {

            id: "131000",

            value: "廊坊市",

            parentId: "130000"

        },

        {

            id: "131100",

            value: "衡水市",

            parentId: "130000"

        },

        {

            id: "140100",

            value: "太原市",

            parentId: "140000"

        },

        {

            id: "140200",

            value: "大同市",

            parentId: "140000"

        },

        {

            id: "140300",

            value: "阳泉市",

            parentId: "140000"

        },

        {

            id: "140400",

            value: "长治市",

            parentId: "140000"

        },

        {

            id: "140500",

            value: "晋城市",

            parentId: "140000"

        },

        {

            id: "140600",

            value: "朔州市",

            parentId: "140000"

        },

        {

            id: "140700",

            value: "晋中市",

            parentId: "140000"

        },

        {

            id: "140800",

            value: "运城市",

            parentId: "140000"

        },

        {

            id: "140900",

            value: "忻州市",

            parentId: "140000"

        },

        {

            id: "141000",

            value: "临汾市",

            parentId: "140000"

        },

        {

            id: "141100",

            value: "吕梁市",

            parentId: "140000"

        },

        {

            id: "150100",

            value: "呼和浩特市",

            parentId: "150000"

        },

        {

            id: "150200",

            value: "包头市",

            parentId: "150000"

        },

        {

            id: "150300",

            value: "乌海市",

            parentId: "150000"

        },

        {

            id: "150400",

            value: "赤峰市",

            parentId: "150000"

        },

        {

            id: "150500",

            value: "通辽市",

            parentId: "150000"

        },

        {

            id: "150600",

            value: "鄂尔多斯市",

            parentId: "150000"

        },

        {

            id: "150700",

            value: "呼伦贝尔市",

            parentId: "150000"

        },

        {

            id: "150800",

            value: "巴彦淖尔市",

            parentId: "150000"

        },

        {

            id: "150900",

            value: "乌兰察布市",

            parentId: "150000"

        },

        {

            id: "152200",

            value: "兴安盟",

            parentId: "150000"

        },

        {

            id: "152500",

            value: "锡林郭勒盟",

            parentId: "150000"

        },

        {

            id: "152900",

            value: "阿拉善盟",

            parentId: "150000"

        },

        {

            id: "210100",

            value: "沈阳市",

            parentId: "210000"

        },

        {

            id: "210200",

            value: "大连市",

            parentId: "210000"

        },

        {

            id: "210300",

            value: "鞍山市",

            parentId: "210000"

        },

        {

            id: "210400",

            value: "抚顺市",

            parentId: "210000"

        },

        {

            id: "210500",

            value: "本溪市",

            parentId: "210000"

        },

        {

            id: "210600",

            value: "丹东市",

            parentId: "210000"

        },

        {

            id: "210700",

            value: "锦州市",

            parentId: "210000"

        },

        {

            id: "210800",

            value: "营口市",

            parentId: "210000"

        },

        {

            id: "210900",

            value: "阜新市",

            parentId: "210000"

        },

        {

            id: "211000",

            value: "辽阳市",

            parentId: "210000"

        },

        {

            id: "211100",

            value: "盘锦市",

            parentId: "210000"

        },

        {

            id: "211200",

            value: "铁岭市",

            parentId: "210000"

        },

        {

            id: "211300",

            value: "朝阳市",

            parentId: "210000"

        },

        {

            id: "211400",

            value: "葫芦岛市",

            parentId: "210000"

        },

        {

            id: "220100",

            value: "长春市",

            parentId: "220000"

        },

        {

            id: "220200",

            value: "吉林市",

            parentId: "220000"

        },

        {

            id: "220300",

            value: "四平市",

            parentId: "220000"

        },

        {

            id: "220400",

            value: "辽源市",

            parentId: "220000"

        },

        {

            id: "220500",

            value: "通化市",

            parentId: "220000"

        },

        {

            id: "220600",

            value: "白山市",

            parentId: "220000"

        },

        {

            id: "220700",

            value: "松原市",

            parentId: "220000"

        },

        {

            id: "220800",

            value: "白城市",

            parentId: "220000"

        },

        {

            id: "222400",

            value: "延边朝鲜族自治州",

            parentId: "220000"

        },

        {

            id: "230100",

            value: "哈尔滨市",

            parentId: "230000"

        },

        {

            id: "230200",

            value: "齐齐哈尔市",

            parentId: "230000"

        },

        {

            id: "230300",

            value: "鸡西市",

            parentId: "230000"

        },

        {

            id: "230400",

            value: "鹤岗市",

            parentId: "230000"

        },

        {

            id: "230500",

            value: "双鸭山市",

            parentId: "230000"

        },

        {

            id: "230600",

            value: "大庆市",

            parentId: "230000"

        },

        {

            id: "230700",

            value: "伊春市",

            parentId: "230000"

        },

        {

            id: "230800",

            value: "佳木斯市",

            parentId: "230000"

        },

        {

            id: "230900",

            value: "七台河市",

            parentId: "230000"

        },

        {

            id: "231000",

            value: "牡丹江市",

            parentId: "230000"

        },

        {

            id: "231100",

            value: "黑河市",

            parentId: "230000"

        },

        {

            id: "231200",

            value: "绥化市",

            parentId: "230000"

        },

        {

            id: "232700",

            value: "大兴安岭地区",

            parentId: "230000"

        },

        {

            id: "310100",

            value: "上海市",

            parentId: "310000"

        },

        {

            id: "320100",

            value: "南京市",

            parentId: "320000"

        },

        {

            id: "320200",

            value: "无锡市",

            parentId: "320000"

        },

        {

            id: "320300",

            value: "徐州市",

            parentId: "320000"

        },

        {

            id: "320400",

            value: "常州市",

            parentId: "320000"

        },

        {

            id: "320500",

            value: "苏州市",

            parentId: "320000"

        },

        {

            id: "320600",

            value: "南通市",

            parentId: "320000"

        },

        {

            id: "320700",

            value: "连云港市",

            parentId: "320000"

        },

        {

            id: "320800",

            value: "淮安市",

            parentId: "320000"

        },

        {

            id: "320900",

            value: "盐城市",

            parentId: "320000"

        },

        {

            id: "321000",

            value: "扬州市",

            parentId: "320000"

        },

        {

            id: "321100",

            value: "镇江市",

            parentId: "320000"

        },

        {

            id: "321200",

            value: "泰州市",

            parentId: "320000"

        },

        {

            id: "321300",

            value: "宿迁市",

            parentId: "320000"

        },

        {

            id: "330100",

            value: "杭州市",

            parentId: "330000"

        },

        {

            id: "330200",

            value: "宁波市",

            parentId: "330000"

        },

        {

            id: "330300",

            value: "温州市",

            parentId: "330000"

        },

        {

            id: "330400",

            value: "嘉兴市",

            parentId: "330000"

        },

        {

            id: "330500",

            value: "湖州市",

            parentId: "330000"

        },

        {

            id: "330600",

            value: "绍兴市",

            parentId: "330000"

        },

        {

            id: "330700",

            value: "金华市",

            parentId: "330000"

        },

        {

            id: "330800",

            value: "衢州市",

            parentId: "330000"

        },

        {

            id: "330900",

            value: "舟山市",

            parentId: "330000"

        },

        {

            id: "331000",

            value: "台州市",

            parentId: "330000"

        },

        {

            id: "331100",

            value: "丽水市",

            parentId: "330000"

        },

        {

            id: "340100",

            value: "合肥市",

            parentId: "340000"

        },

        {

            id: "340200",

            value: "芜湖市",

            parentId: "340000"

        },

        {

            id: "340300",

            value: "蚌埠市",

            parentId: "340000"

        },

        {

            id: "340400",

            value: "淮南市",

            parentId: "340000"

        },

        {

            id: "340500",

            value: "马鞍山市",

            parentId: "340000"

        },

        {

            id: "340600",

            value: "淮北市",

            parentId: "340000"

        },

        {

            id: "340700",

            value: "铜陵市",

            parentId: "340000"

        },

        {

            id: "340800",

            value: "安庆市",

            parentId: "340000"

        },

        {

            id: "341000",

            value: "黄山市",

            parentId: "340000"

        },

        {

            id: "341100",

            value: "滁州市",

            parentId: "340000"

        },

        {

            id: "341200",

            value: "阜阳市",

            parentId: "340000"

        },

        {

            id: "341300",

            value: "宿州市",

            parentId: "340000"

        },

        {

            id: "341500",

            value: "六安市",

            parentId: "340000"

        },

        {

            id: "341600",

            value: "亳州市",

            parentId: "340000"

        },

        {

            id: "341700",

            value: "池州市",

            parentId: "340000"

        },

        {

            id: "341800",

            value: "宣城市",

            parentId: "340000"

        },

        {

            id: "350100",

            value: "福州市",

            parentId: "350000"

        },

        {

            id: "350200",

            value: "厦门市",

            parentId: "350000"

        },

        {

            id: "350300",

            value: "莆田市",

            parentId: "350000"

        },

        {

            id: "350400",

            value: "三明市",

            parentId: "350000"

        },

        {

            id: "350500",

            value: "泉州市",

            parentId: "350000"

        },

        {

            id: "350600",

            value: "漳州市",

            parentId: "350000"

        },

        {

            id: "350700",

            value: "南平市",

            parentId: "350000"

        },

        {

            id: "350800",

            value: "龙岩市",

            parentId: "350000"

        },

        {

            id: "350900",

            value: "宁德市",

            parentId: "350000"

        },

        {

            id: "360100",

            value: "南昌市",

            parentId: "360000"

        },

        {

            id: "360200",

            value: "景德镇市",

            parentId: "360000"

        },

        {

            id: "360300",

            value: "萍乡市",

            parentId: "360000"

        },

        {

            id: "360400",

            value: "九江市",

            parentId: "360000"

        },

        {

            id: "360500",

            value: "新余市",

            parentId: "360000"

        },

        {

            id: "360600",

            value: "鹰潭市",

            parentId: "360000"

        },

        {

            id: "360700",

            value: "赣州市",

            parentId: "360000"

        },

        {

            id: "360800",

            value: "吉安市",

            parentId: "360000"

        },

        {

            id: "360900",

            value: "宜春市",

            parentId: "360000"

        },

        {

            id: "361000",

            value: "抚州市",

            parentId: "360000"

        },

        {

            id: "361100",

            value: "上饶市",

            parentId: "360000"

        },

        {

            id: "370100",

            value: "济南市",

            parentId: "370000"

        },

        {

            id: "370200",

            value: "青岛市",

            parentId: "370000"

        },

        {

            id: "370300",

            value: "淄博市",

            parentId: "370000"

        },

        {

            id: "370400",

            value: "枣庄市",

            parentId: "370000"

        },

        {

            id: "370500",

            value: "东营市",

            parentId: "370000"

        },

        {

            id: "370600",

            value: "烟台市",

            parentId: "370000"

        },

        {

            id: "370700",

            value: "潍坊市",

            parentId: "370000"

        },

        {

            id: "370800",

            value: "济宁市",

            parentId: "370000"

        },

        {

            id: "370900",

            value: "泰安市",

            parentId: "370000"

        },

        {

            id: "371000",

            value: "威海市",

            parentId: "370000"

        },

        {

            id: "371100",

            value: "日照市",

            parentId: "370000"

        },

        {

            id: "371200",

            value: "莱芜市",

            parentId: "370000"

        },

        {

            id: "371300",

            value: "临沂市",

            parentId: "370000"

        },

        {

            id: "371400",

            value: "德州市",

            parentId: "370000"

        },

        {

            id: "371500",

            value: "聊城市",

            parentId: "370000"

        },

        {

            id: "371600",

            value: "滨州市",

            parentId: "370000"

        },

        {

            id: "371700",

            value: "菏泽市",

            parentId: "370000"

        },

        {

            id: "410100",

            value: "郑州市",

            parentId: "410000"

        },

        {

            id: "410200",

            value: "开封市",

            parentId: "410000"

        },

        {

            id: "410300",

            value: "洛阳市",

            parentId: "410000"

        },

        {

            id: "410400",

            value: "平顶山市",

            parentId: "410000"

        },

        {

            id: "410500",

            value: "安阳市",

            parentId: "410000"

        },

        {

            id: "410600",

            value: "鹤壁市",

            parentId: "410000"

        },

        {

            id: "410700",

            value: "新乡市",

            parentId: "410000"

        },

        {

            id: "410800",

            value: "焦作市",

            parentId: "410000"

        },

        {

            id: "410900",

            value: "濮阳市",

            parentId: "410000"

        },

        {

            id: "411000",

            value: "许昌市",

            parentId: "410000"

        },

        {

            id: "411100",

            value: "漯河市",

            parentId: "410000"

        },

        {

            id: "411200",

            value: "三门峡市",

            parentId: "410000"

        },

        {

            id: "411300",

            value: "南阳市",

            parentId: "410000"

        },

        {

            id: "411400",

            value: "商丘市",

            parentId: "410000"

        },

        {

            id: "411500",

            value: "信阳市",

            parentId: "410000"

        },

        {

            id: "411600",

            value: "周口市",

            parentId: "410000"

        },

        {

            id: "411700",

            value: "驻马店市",

            parentId: "410000"

        },

        {

            id: "419001",

            value: "济源市",

            parentId: "410000"

        },

        {

            id: "420100",

            value: "武汉市",

            parentId: "420000"

        },

        {

            id: "420200",

            value: "黄石市",

            parentId: "420000"

        },

        {

            id: "420300",

            value: "十堰市",

            parentId: "420000"

        },

        {

            id: "420500",

            value: "宜昌市",

            parentId: "420000"

        },

        {

            id: "420600",

            value: "襄阳市",

            parentId: "420000"

        },

        {

            id: "420700",

            value: "鄂州市",

            parentId: "420000"

        },

        {

            id: "420800",

            value: "荆门市",

            parentId: "420000"

        },

        {

            id: "420900",

            value: "孝感市",

            parentId: "420000"

        },

        {

            id: "421000",

            value: "荆州市",

            parentId: "420000"

        },

        {

            id: "421100",

            value: "黄冈市",

            parentId: "420000"

        },

        {

            id: "421200",

            value: "咸宁市",

            parentId: "420000"

        },

        {

            id: "421300",

            value: "随州市",

            parentId: "420000"

        },

        {

            id: "422800",

            value: "恩施土家族苗族自治州",

            parentId: "420000"

        },

        {

            id: "429004",

            value: "仙桃市",

            parentId: "420000"

        },

        {

            id: "429005",

            value: "潜江市",

            parentId: "420000"

        },

        {

            id: "429006",

            value: "天门市",

            parentId: "420000"

        },

        {

            id: "429021",

            value: "神农架林区",

            parentId: "420000"

        },

        {

            id: "430100",

            value: "长沙市",

            parentId: "430000"

        },

        {

            id: "430200",

            value: "株洲市",

            parentId: "430000"

        },

        {

            id: "430300",

            value: "湘潭市",

            parentId: "430000"

        },

        {

            id: "430400",

            value: "衡阳市",

            parentId: "430000"

        },

        {

            id: "430500",

            value: "邵阳市",

            parentId: "430000"

        },

        {

            id: "430600",

            value: "岳阳市",

            parentId: "430000"

        },

        {

            id: "430700",

            value: "常德市",

            parentId: "430000"

        },

        {

            id: "430800",

            value: "张家界市",

            parentId: "430000"

        },

        {

            id: "430900",

            value: "益阳市",

            parentId: "430000"

        },

        {

            id: "431000",

            value: "郴州市",

            parentId: "430000"

        },

        {

            id: "431100",

            value: "永州市",

            parentId: "430000"

        },

        {

            id: "431200",

            value: "怀化市",

            parentId: "430000"

        },

        {

            id: "431300",

            value: "娄底市",

            parentId: "430000"

        },

        {

            id: "433100",

            value: "湘西土家族苗族自治州",

            parentId: "430000"

        },

        {

            id: "440100",

            value: "广州市",

            parentId: "440000"

        },

        {

            id: "440200",

            value: "韶关市",

            parentId: "440000"

        },

        {

            id: "440300",

            value: "深圳市",

            parentId: "440000"

        },

        {

            id: "440400",

            value: "珠海市",

            parentId: "440000"

        },

        {

            id: "440500",

            value: "汕头市",

            parentId: "440000"

        },

        {

            id: "440600",

            value: "佛山市",

            parentId: "440000"

        },

        {

            id: "440700",

            value: "江门市",

            parentId: "440000"

        },

        {

            id: "440800",

            value: "湛江市",

            parentId: "440000"

        },

        {

            id: "440900",

            value: "茂名市",

            parentId: "440000"

        },

        {

            id: "441200",

            value: "肇庆市",

            parentId: "440000"

        },

        {

            id: "441300",

            value: "惠州市",

            parentId: "440000"

        },

        {

            id: "441400",

            value: "梅州市",

            parentId: "440000"

        },

        {

            id: "441500",

            value: "汕尾市",

            parentId: "440000"

        },

        {

            id: "441600",

            value: "河源市",

            parentId: "440000"

        },

        {

            id: "441700",

            value: "阳江市",

            parentId: "440000"

        },

        {

            id: "441800",

            value: "清远市",

            parentId: "440000"

        },

        {

            id: "441900",

            value: "东莞市",

            parentId: "440000"

        },

        {

            id: "442000",

            value: "中山市",

            parentId: "440000"

        },

        {

            id: "445100",

            value: "潮州市",

            parentId: "440000"

        },

        {

            id: "445200",

            value: "揭阳市",

            parentId: "440000"

        },

        {

            id: "445300",

            value: "云浮市",

            parentId: "440000"

        },

        {

            id: "450100",

            value: "南宁市",

            parentId: "450000"

        },

        {

            id: "450200",

            value: "柳州市",

            parentId: "450000"

        },

        {

            id: "450300",

            value: "桂林市",

            parentId: "450000"

        },

        {

            id: "450400",

            value: "梧州市",

            parentId: "450000"

        },

        {

            id: "450500",

            value: "北海市",

            parentId: "450000"

        },

        {

            id: "450600",

            value: "防城港市",

            parentId: "450000"

        },

        {

            id: "450700",

            value: "钦州市",

            parentId: "450000"

        },

        {

            id: "450800",

            value: "贵港市",

            parentId: "450000"

        },

        {

            id: "450900",

            value: "玉林市",

            parentId: "450000"

        },

        {

            id: "451000",

            value: "百色市",

            parentId: "450000"

        },

        {

            id: "451100",

            value: "贺州市",

            parentId: "450000"

        },

        {

            id: "451200",

            value: "河池市",

            parentId: "450000"

        },

        {

            id: "451300",

            value: "来宾市",

            parentId: "450000"

        },

        {

            id: "451400",

            value: "崇左市",

            parentId: "450000"

        },

        {

            id: "460100",

            value: "海口市",

            parentId: "460000"

        },

        {

            id: "460200",

            value: "三亚市",

            parentId: "460000"

        },

        {

            id: "460300",

            value: "三沙市",

            parentId: "460000"

        },

        {

            id: "469001",

            value: "五指山市",

            parentId: "460000"

        },

        {

            id: "469002",

            value: "琼海市",

            parentId: "460000"

        },

        {

            id: "469003",

            value: "儋州市",

            parentId: "460000"

        },

        {

            id: "469005",

            value: "文昌市",

            parentId: "460000"

        },

        {

            id: "469006",

            value: "万宁市",

            parentId: "460000"

        },

        {

            id: "469007",

            value: "东方市",

            parentId: "460000"

        },

        {

            id: "469021",

            value: "定安县",

            parentId: "460000"

        },

        {

            id: "469022",

            value: "屯昌县",

            parentId: "460000"

        },

        {

            id: "469023",

            value: "澄迈县",

            parentId: "460000"

        },

        {

            id: "469024",

            value: "临高县",

            parentId: "460000"

        },

        {

            id: "469025",

            value: "白沙黎族自治县",

            parentId: "460000"

        },

        {

            id: "469026",

            value: "昌江黎族自治县",

            parentId: "460000"

        },

        {

            id: "469027",

            value: "乐东黎族自治县",

            parentId: "460000"

        },

        {

            id: "469028",

            value: "陵水黎族自治县",

            parentId: "460000"

        },

        {

            id: "469029",

            value: "保亭黎族苗族自治县",

            parentId: "460000"

        },

        {

            id: "469030",

            value: "琼中黎族苗族自治县",

            parentId: "460000"

        },

        {

            id: "500100",

            value: "重庆市",

            parentId: "500000"

        },

        {

            id: "510100",

            value: "成都市",

            parentId: "510000"

        },

        {

            id: "510300",

            value: "自贡市",

            parentId: "510000"

        },

        {

            id: "510400",

            value: "攀枝花市",

            parentId: "510000"

        },

        {

            id: "510500",

            value: "泸州市",

            parentId: "510000"

        },

        {

            id: "510600",

            value: "德阳市",

            parentId: "510000"

        },

        {

            id: "510700",

            value: "绵阳市",

            parentId: "510000"

        },

        {

            id: "510800",

            value: "广元市",

            parentId: "510000"

        },

        {

            id: "510900",

            value: "遂宁市",

            parentId: "510000"

        },

        {

            id: "511000",

            value: "内江市",

            parentId: "510000"

        },

        {

            id: "511100",

            value: "乐山市",

            parentId: "510000"

        },

        {

            id: "511300",

            value: "南充市",

            parentId: "510000"

        },

        {

            id: "511400",

            value: "眉山市",

            parentId: "510000"

        },

        {

            id: "511500",

            value: "宜宾市",

            parentId: "510000"

        },

        {

            id: "511600",

            value: "广安市",

            parentId: "510000"

        },

        {

            id: "511700",

            value: "达州市",

            parentId: "510000"

        },

        {

            id: "511800",

            value: "雅安市",

            parentId: "510000"

        },

        {

            id: "511900",

            value: "巴中市",

            parentId: "510000"

        },

        {

            id: "512000",

            value: "资阳市",

            parentId: "510000"

        },

        {

            id: "513200",

            value: "阿坝藏族羌族自治州",

            parentId: "510000"

        },

        {

            id: "513300",

            value: "甘孜藏族自治州",

            parentId: "510000"

        },

        {

            id: "513400",

            value: "凉山彝族自治州",

            parentId: "510000"

        },

        {

            id: "520100",

            value: "贵阳市",

            parentId: "520000"

        },

        {

            id: "520200",

            value: "六盘水市",

            parentId: "520000"

        },

        {

            id: "520300",

            value: "遵义市",

            parentId: "520000"

        },

        {

            id: "520400",

            value: "安顺市",

            parentId: "520000"

        },

        {

            id: "522200",

            value: "铜仁市",

            parentId: "520000"

        },

        {

            id: "522300",

            value: "黔西南布依族苗族自治州",

            parentId: "520000"

        },

        {

            id: "522400",

            value: "毕节市",

            parentId: "520000"

        },

        {

            id: "522600",

            value: "黔东南苗族侗族自治州",

            parentId: "520000"

        },

        {

            id: "522700",

            value: "黔南布依族苗族自治州",

            parentId: "520000"

        },

        {

            id: "530100",

            value: "昆明市",

            parentId: "530000"

        },

        {

            id: "530300",

            value: "曲靖市",

            parentId: "530000"

        },

        {

            id: "530400",

            value: "玉溪市",

            parentId: "530000"

        },

        {

            id: "530500",

            value: "保山市",

            parentId: "530000"

        },

        {

            id: "530600",

            value: "昭通市",

            parentId: "530000"

        },

        {

            id: "530700",

            value: "丽江市",

            parentId: "530000"

        },

        {

            id: "530800",

            value: "普洱市",

            parentId: "530000"

        },

        {

            id: "530900",

            value: "临沧市",

            parentId: "530000"

        },

        {

            id: "532300",

            value: "楚雄彝族自治州",

            parentId: "530000"

        },

        {

            id: "532500",

            value: "红河哈尼族彝族自治州",

            parentId: "530000"

        },

        {

            id: "532600",

            value: "文山壮族苗族自治州",

            parentId: "530000"

        },

        {

            id: "532800",

            value: "西双版纳傣族自治州",

            parentId: "530000"

        },

        {

            id: "532900",

            value: "大理白族自治州",

            parentId: "530000"

        },

        {

            id: "533100",

            value: "德宏傣族景颇族自治州",

            parentId: "530000"

        },

        {

            id: "533300",

            value: "怒江傈僳族自治州",

            parentId: "530000"

        },

        {

            id: "533400",

            value: "迪庆藏族自治州",

            parentId: "530000"

        },

        {

            id: "540100",

            value: "拉萨市",

            parentId: "540000"

        },

        {

            id: "542100",

            value: "昌都地区",

            parentId: "540000"

        },

        {

            id: "542200",

            value: "山南地区",

            parentId: "540000"

        },

        {

            id: "542300",

            value: "日喀则地区",

            parentId: "540000"

        },

        {

            id: "542400",

            value: "那曲地区",

            parentId: "540000"

        },

        {

            id: "542500",

            value: "阿里地区",

            parentId: "540000"

        },

        {

            id: "542600",

            value: "林芝地区",

            parentId: "540000"

        },

        {

            id: "610100",

            value: "西安市",

            parentId: "610000"

        },

        {

            id: "610200",

            value: "铜川市",

            parentId: "610000"

        },

        {

            id: "610300",

            value: "宝鸡市",

            parentId: "610000"

        },

        {

            id: "610400",

            value: "咸阳市",

            parentId: "610000"

        },

        {

            id: "610500",

            value: "渭南市",

            parentId: "610000"

        },

        {

            id: "610600",

            value: "延安市",

            parentId: "610000"

        },

        {

            id: "610700",

            value: "汉中市",

            parentId: "610000"

        },

        {

            id: "610800",

            value: "榆林市",

            parentId: "610000"

        },

        {

            id: "610900",

            value: "安康市",

            parentId: "610000"

        },

        {

            id: "611000",

            value: "商洛市",

            parentId: "610000"

        },

        {

            id: "620100",

            value: "兰州市",

            parentId: "620000"

        },

        {

            id: "620200",

            value: "嘉峪关市",

            parentId: "620000"

        },

        {

            id: "620300",

            value: "金昌市",

            parentId: "620000"

        },

        {

            id: "620400",

            value: "白银市",

            parentId: "620000"

        },

        {

            id: "620500",

            value: "天水市",

            parentId: "620000"

        },

        {

            id: "620600",

            value: "武威市",

            parentId: "620000"

        },

        {

            id: "620700",

            value: "张掖市",

            parentId: "620000"

        },

        {

            id: "620800",

            value: "平凉市",

            parentId: "620000"

        },

        {

            id: "620900",

            value: "酒泉市",

            parentId: "620000"

        },

        {

            id: "621000",

            value: "庆阳市",

            parentId: "620000"

        },

        {

            id: "621100",

            value: "定西市",

            parentId: "620000"

        },

        {

            id: "621200",

            value: "陇南市",

            parentId: "620000"

        },

        {



            id: "622900",

            value: "临夏回族自治州",

            parentId: "620000"

        },

        {

            id: "623000",

            value: "甘南藏族自治州",

            parentId: "620000"

        },

        {

            id: "630100",

            value: "西宁市",

            parentId: "630000"

        },

        {

            id: "632100",

            value: "海东地区",

            parentId: "630000"

        },

        {

            id: "632200",

            value: "海北藏族自治州",

            parentId: "630000"

        },

        {

            id: "632300",

            value: "黄南藏族自治州",

            parentId: "630000"

        },

        {

            id: "632500",

            value: "海南藏族自治州",

            parentId: "630000"

        },

        {

            id: "632600",

            value: "果洛藏族自治州",

            parentId: "630000"

        },

        {

            id: "632700",

            value: "玉树藏族自治州",

            parentId: "630000"

        },

        {

            id: "632800",

            value: "海西蒙古族藏族自治州",

            parentId: "630000"

        },

        {

            id: "640100",

            value: "银川市",

            parentId: "640000"

        },

        {

            id: "640200",

            value: "石嘴山市",

            parentId: "640000"

        },

        {

            id: "640300",

            value: "吴忠市",

            parentId: "640000"

        },

        {

            id: "640400",

            value: "固原市",

            parentId: "640000"

        },

        {

            id: "640500",

            value: "中卫市",

            parentId: "640000"

        },

        {

            id: "650100",

            value: "乌鲁木齐市",

            parentId: "650000"

        },

        {

            id: "650200",

            value: "克拉玛依市",

            parentId: "650000"

        },

        {

            id: "652100",

            value: "吐鲁番地区",

            parentId: "650000"

        },

        {

            id: "652200",

            value: "哈密地区",

            parentId: "650000"

        },

        {

            id: "652300",

            value: "昌吉回族自治州",

            parentId: "650000"

        },

        {

            id: "652700",

            value: "博尔塔拉蒙古自治州",

            parentId: "650000"

        },

        {

            id: "652800",

            value: "巴音郭楞蒙古自治州",

            parentId: "650000"

        },

        {

            id: "652900",

            value: "阿克苏地区",

            parentId: "650000"

        },

        {

            id: "653000",

            value: "克孜勒苏柯尔克孜自治州",

            parentId: "650000"

        },

        {

            id: "653100",

            value: "喀什地区",

            parentId: "650000"

        },

        {

            id: "653200",

            value: "和田地区",

            parentId: "650000"

        },

        {

            id: "654000",

            value: "伊犁哈萨克自治州",

            parentId: "650000"

        },

        {

            id: "654200",

            value: "塔城地区",

            parentId: "650000"

        },

        {

            id: "654300",

            value: "阿勒泰地区",

            parentId: "650000"

        },

        {

            id: "659001",

            value: "石河子市",

            parentId: "650000"

        },

        {

            id: "659002",

            value: "阿拉尔市",

            parentId: "650000"

        },

        {

            id: "659003",

            value: "图木舒克市",

            parentId: "650000"

        },

        {

            id: "659004",

            value: "五家渠市",

            parentId: "650000"

        }],

        we = [{

            id: "110101",

            value: "东城区",

            parentId: "110100"

        },

        {

            id: "110102",

            value: "西城区",

            parentId: "110100"

        },

        {

            id: "110105",

            value: "朝阳区",

            parentId: "110100"

        },

        {

            id: "110106",

            value: "丰台区",

            parentId: "110100"

        },

        {

            id: "110107",

            value: "石景山区",

            parentId: "110100"

        },

        {

            id: "110108",

            value: "海淀区",

            parentId: "110100"

        },

        {

            id: "110109",

            value: "门头沟区",

            parentId: "110100"

        },

        {

            id: "110111",

            value: "房山区",

            parentId: "110100"

        },

        {

            id: "110112",

            value: "通州区",

            parentId: "110100"

        },

        {

            id: "110113",

            value: "顺义区",

            parentId: "110100"

        },

        {

            id: "110114",

            value: "昌平区",

            parentId: "110100"

        },

        {

            id: "110115",

            value: "大兴区",

            parentId: "110100"

        },

        {

            id: "110116",

            value: "怀柔区",

            parentId: "110100"

        },

        {

            id: "110117",

            value: "平谷区",

            parentId: "110100"

        },

        {

            id: "110228",

            value: "密云县",

            parentId: "110100"

        },

        {

            id: "110229",

            value: "延庆县",

            parentId: "110100"

        },

        {

            id: "120101",

            value: "和平区",

            parentId: "120100"

        },

        {

            id: "120102",

            value: "河东区",

            parentId: "120100"

        },

        {

            id: "120103",

            value: "河西区",

            parentId: "120100"

        },

        {

            id: "120104",

            value: "南开区",

            parentId: "120100"

        },

        {

            id: "120105",

            value: "河北区",

            parentId: "120100"

        },

        {

            id: "120106",

            value: "红桥区",

            parentId: "120100"

        },

        {

            id: "120110",

            value: "东丽区",

            parentId: "120100"

        },

        {

            id: "120111",

            value: "西青区",

            parentId: "120100"

        },

        {

            id: "120112",

            value: "津南区",

            parentId: "120100"

        },

        {

            id: "120113",

            value: "北辰区",

            parentId: "120100"

        },

        {

            id: "120114",

            value: "武清区",

            parentId: "120100"

        },

        {

            id: "120115",

            value: "宝坻区",

            parentId: "120100"

        },

        {

            id: "120116",

            value: "滨海新区",

            parentId: "120100"

        },

        {

            id: "130102",

            value: "长安区",

            parentId: "130100"

        },

        {

            id: "130103",

            value: "桥东区",

            parentId: "130100"

        },

        {

            id: "130104",

            value: "桥西区",

            parentId: "130100"

        },

        {

            id: "130105",

            value: "新华区",

            parentId: "130100"

        },

        {

            id: "130107",

            value: "井陉矿区",

            parentId: "130100"

        },

        {

            id: "130108",

            value: "裕华区",

            parentId: "130100"

        },

        {

            id: "130121",

            value: "井陉县",

            parentId: "130100"

        },

        {

            id: "130123",

            value: "正定县",

            parentId: "130100"

        },

        {

            id: "130124",

            value: "栾城县",

            parentId: "130100"

        },

        {

            id: "130125",

            value: "行唐县",

            parentId: "130100"

        },

        {

            id: "130126",

            value: "灵寿县",

            parentId: "130100"

        },

        {

            id: "130127",

            value: "高邑县",

            parentId: "130100"

        },

        {

            id: "130128",

            value: "深泽县",

            parentId: "130100"

        },

        {

            id: "130129",

            value: "赞皇县",

            parentId: "130100"

        },

        {

            id: "130130",

            value: "无极县",

            parentId: "130100"

        },

        {

            id: "130131",

            value: "平山县",

            parentId: "130100"

        },

        {

            id: "130132",

            value: "元氏县",

            parentId: "130100"

        },

        {

            id: "130133",

            value: "赵县",

            parentId: "130100"

        },

        {

            id: "130181",

            value: "辛集市",

            parentId: "130100"

        },

        {

            id: "130182",

            value: "藁城市",

            parentId: "130100"

        },

        {

            id: "130183",

            value: "晋州市",

            parentId: "130100"

        },

        {

            id: "130184",

            value: "新乐市",

            parentId: "130100"

        },

        {

            id: "130185",

            value: "鹿泉市",

            parentId: "130100"

        },

        {

            id: "130202",

            value: "路南区",

            parentId: "130200"

        },

        {

            id: "130203",

            value: "路北区",

            parentId: "130200"

        },

        {

            id: "130204",

            value: "古冶区",

            parentId: "130200"

        },

        {

            id: "130205",

            value: "开平区",

            parentId: "130200"

        },

        {

            id: "130207",

            value: "丰南区",

            parentId: "130200"

        },

        {

            id: "130208",

            value: "丰润区",

            parentId: "130200"

        },

        {

            id: "130223",

            value: "滦县",

            parentId: "130200"

        },

        {

            id: "130224",

            value: "滦南县",

            parentId: "130200"

        },

        {

            id: "130225",

            value: "乐亭县",

            parentId: "130200"

        },

        {

            id: "130227",

            value: "迁西县",

            parentId: "130200"

        },

        {

            id: "130229",

            value: "玉田县",

            parentId: "130200"

        },

        {

            id: "130230",

            value: "曹妃甸区",

            parentId: "130200"

        },

        {

            id: "130281",

            value: "遵化市",

            parentId: "130200"

        },

        {

            id: "130283",

            value: "迁安市",

            parentId: "130200"

        },

        {

            id: "130302",

            value: "海港区",

            parentId: "130300"

        },

        {

            id: "130303",

            value: "山海关区",

            parentId: "130300"

        },

        {

            id: "130304",

            value: "北戴河区",

            parentId: "130300"

        },

        {

            id: "130321",

            value: "青龙满族自治县",

            parentId: "130300"

        },

        {

            id: "130322",

            value: "昌黎县",

            parentId: "130300"

        },

        {

            id: "130323",

            value: "抚宁县",

            parentId: "130300"

        },

        {

            id: "130324",

            value: "卢龙县",

            parentId: "130300"

        },

        {

            id: "130402",

            value: "邯山区",

            parentId: "130400"

        },

        {

            id: "130403",

            value: "丛台区",

            parentId: "130400"

        },

        {

            id: "130404",

            value: "复兴区",

            parentId: "130400"

        },

        {

            id: "130406",

            value: "峰峰矿区",

            parentId: "130400"

        },

        {

            id: "130421",

            value: "邯郸县",

            parentId: "130400"

        },

        {

            id: "130423",

            value: "临漳县",

            parentId: "130400"

        },

        {

            id: "130424",

            value: "成安县",

            parentId: "130400"

        },

        {

            id: "130425",

            value: "大名县",

            parentId: "130400"

        },

        {

            id: "130426",

            value: "涉县",

            parentId: "130400"

        },

        {

            id: "130427",

            value: "磁县",

            parentId: "130400"

        },

        {

            id: "130428",

            value: "肥乡县",

            parentId: "130400"

        },

        {

            id: "130429",

            value: "永年县",

            parentId: "130400"

        },

        {

            id: "130430",

            value: "邱县",

            parentId: "130400"

        },

        {

            id: "130431",

            value: "鸡泽县",

            parentId: "130400"

        },

        {

            id: "130432",

            value: "广平县",

            parentId: "130400"

        },

        {

            id: "130433",

            value: "馆陶县",

            parentId: "130400"

        },

        {

            id: "130434",

            value: "魏县",

            parentId: "130400"

        },

        {

            id: "130435",

            value: "曲周县",

            parentId: "130400"

        },

        {

            id: "130481",

            value: "武安市",

            parentId: "130400"

        },

        {

            id: "130502",

            value: "桥东区",

            parentId: "130500"

        },

        {

            id: "130503",

            value: "桥西区",

            parentId: "130500"

        },

        {

            id: "130521",

            value: "邢台县",

            parentId: "130500"

        },

        {

            id: "130522",

            value: "临城县",

            parentId: "130500"

        },

        {

            id: "130523",

            value: "内丘县",

            parentId: "130500"

        },

        {

            id: "130524",

            value: "柏乡县",

            parentId: "130500"

        },

        {

            id: "130525",

            value: "隆尧县",

            parentId: "130500"

        },

        {

            id: "130526",

            value: "任县",

            parentId: "130500"

        },

        {

            id: "130527",

            value: "南和县",

            parentId: "130500"

        },

        {

            id: "130528",

            value: "宁晋县",

            parentId: "130500"

        },

        {

            id: "130529",

            value: "巨鹿县",

            parentId: "130500"

        },

        {

            id: "130530",

            value: "新河县",

            parentId: "130500"

        },

        {

            id: "130531",

            value: "广宗县",

            parentId: "130500"

        },

        {

            id: "130532",

            value: "平乡县",

            parentId: "130500"

        },

        {

            id: "130533",

            value: "威县",

            parentId: "130500"

        },

        {

            id: "130534",

            value: "清河县",

            parentId: "130500"

        },

        {

            id: "130535",

            value: "临西县",

            parentId: "130500"

        },

        {

            id: "130581",

            value: "南宫市",

            parentId: "130500"

        },

        {

            id: "130582",

            value: "沙河市",

            parentId: "130500"

        },

        {

            id: "130602",

            value: "新市区",

            parentId: "130600"

        },

        {

            id: "130603",

            value: "北市区",

            parentId: "130600"

        },

        {

            id: "130604",

            value: "南市区",

            parentId: "130600"

        },

        {

            id: "130621",

            value: "满城县",

            parentId: "130600"

        },

        {

            id: "130622",

            value: "清苑县",

            parentId: "130600"

        },

        {

            id: "130623",

            value: "涞水县",

            parentId: "130600"

        },

        {

            id: "130624",

            value: "阜平县",

            parentId: "130600"

        },

        {

            id: "130625",

            value: "徐水县",

            parentId: "130600"

        },

        {

            id: "130626",

            value: "定兴县",

            parentId: "130600"

        },

        {

            id: "130627",

            value: "唐县",

            parentId: "130600"

        },

        {

            id: "130628",

            value: "高阳县",

            parentId: "130600"

        },

        {

            id: "130629",

            value: "容城县",

            parentId: "130600"

        },

        {

            id: "130630",

            value: "涞源县",

            parentId: "130600"

        },

        {

            id: "130631",

            value: "望都县",

            parentId: "130600"

        },

        {

            id: "130632",

            value: "安新县",

            parentId: "130600"

        },

        {

            id: "130633",

            value: "易县",

            parentId: "130600"

        },

        {

            id: "130634",

            value: "曲阳县",

            parentId: "130600"

        },

        {

            id: "130635",

            value: "蠡县",

            parentId: "130600"

        },

        {

            id: "130636",

            value: "顺平县",

            parentId: "130600"

        },

        {

            id: "130637",

            value: "博野县",

            parentId: "130600"

        },

        {

            id: "130638",

            value: "雄县",

            parentId: "130600"

        },

        {

            id: "130681",

            value: "涿州市",

            parentId: "130600"

        },

        {

            id: "130682",

            value: "定州市",

            parentId: "130600"

        },

        {

            id: "130683",

            value: "安国市",

            parentId: "130600"

        },

        {

            id: "130684",

            value: "高碑店市",

            parentId: "130600"

        },

        {

            id: "130702",

            value: "桥东区",

            parentId: "130700"

        },

        {

            id: "130703",

            value: "桥西区",

            parentId: "130700"

        },

        {

            id: "130705",

            value: "宣化区",

            parentId: "130700"

        },

        {

            id: "130706",

            value: "下花园区",

            parentId: "130700"

        },

        {

            id: "130721",

            value: "宣化县",

            parentId: "130700"

        },

        {

            id: "130722",

            value: "张北县",

            parentId: "130700"

        },

        {

            id: "130723",

            value: "康保县",

            parentId: "130700"

        },

        {

            id: "130724",

            value: "沽源县",

            parentId: "130700"

        },

        {

            id: "130725",

            value: "尚义县",

            parentId: "130700"

        },

        {

            id: "130726",

            value: "蔚县",

            parentId: "130700"

        },

        {

            id: "130727",

            value: "阳原县",

            parentId: "130700"

        },

        {

            id: "130728",

            value: "怀安县",

            parentId: "130700"

        },

        {

            id: "130729",

            value: "万全县",

            parentId: "130700"

        },

        {

            id: "130730",

            value: "怀来县",

            parentId: "130700"

        },

        {

            id: "130731",

            value: "涿鹿县",

            parentId: "130700"

        },

        {

            id: "130732",

            value: "赤城县",

            parentId: "130700"

        },

        {

            id: "130733",

            value: "崇礼县",

            parentId: "130700"

        },

        {

            id: "130802",

            value: "双桥区",

            parentId: "130800"

        },

        {

            id: "130803",

            value: "双滦区",

            parentId: "130800"

        },

        {

            id: "130804",

            value: "鹰手营子矿区",

            parentId: "130800"

        },

        {

            id: "130821",

            value: "承德县",

            parentId: "130800"

        },

        {

            id: "130822",

            value: "兴隆县",

            parentId: "130800"

        },

        {

            id: "130823",

            value: "平泉县",

            parentId: "130800"

        },

        {

            id: "130824",

            value: "滦平县",

            parentId: "130800"

        },

        {

            id: "130825",

            value: "隆化县",

            parentId: "130800"

        },

        {

            id: "130826",

            value: "丰宁满族自治县",

            parentId: "130800"

        },

        {

            id: "130827",

            value: "宽城满族自治县",

            parentId: "130800"

        },

        {

            id: "130828",

            value: "围场满族蒙古族自治县",

            parentId: "130800"

        },

        {

            id: "130902",

            value: "新华区",

            parentId: "130900"

        },

        {

            id: "130903",

            value: "运河区",

            parentId: "130900"

        },

        {

            id: "130921",

            value: "沧县",

            parentId: "130900"

        },

        {

            id: "130922",

            value: "青县",

            parentId: "130900"

        },

        {

            id: "130923",

            value: "东光县",

            parentId: "130900"

        },

        {

            id: "130924",

            value: "海兴县",

            parentId: "130900"

        },

        {

            id: "130925",

            value: "盐山县",

            parentId: "130900"

        },

        {

            id: "130926",

            value: "肃宁县",

            parentId: "130900"

        },

        {

            id: "130927",

            value: "南皮县",

            parentId: "130900"

        },

        {

            id: "130928",

            value: "吴桥县",

            parentId: "130900"

        },

        {

            id: "130929",

            value: "献县",

            parentId: "130900"

        },

        {

            id: "130930",

            value: "孟村回族自治县",

            parentId: "130900"

        },

        {

            id: "130981",

            value: "泊头市",

            parentId: "130900"

        },

        {

            id: "130982",

            value: "任丘市",

            parentId: "130900"

        },

        {

            id: "130983",

            value: "黄骅市",

            parentId: "130900"

        },

        {

            id: "130984",

            value: "河间市",

            parentId: "130900"

        },

        {

            id: "131002",

            value: "安次区",

            parentId: "131000"

        },

        {

            id: "131003",

            value: "广阳区",

            parentId: "131000"

        },

        {

            id: "131022",

            value: "固安县",

            parentId: "131000"

        },

        {

            id: "131023",

            value: "永清县",

            parentId: "131000"

        },

        {

            id: "131024",

            value: "香河县",

            parentId: "131000"

        },

        {

            id: "131025",

            value: "大城县",

            parentId: "131000"

        },

        {

            id: "131026",

            value: "文安县",

            parentId: "131000"

        },

        {

            id: "131028",

            value: "大厂回族自治县",

            parentId: "131000"

        },

        {

            id: "131081",

            value: "霸州市",

            parentId: "131000"

        },

        {

            id: "131082",

            value: "三河市",

            parentId: "131000"

        },

        {

            id: "131102",

            value: "桃城区",

            parentId: "131100"

        },

        {

            id: "131121",

            value: "枣强县",

            parentId: "131100"

        },

        {

            id: "131122",

            value: "武邑县",

            parentId: "131100"

        },

        {

            id: "131123",

            value: "武强县",

            parentId: "131100"

        },

        {

            id: "131124",

            value: "饶阳县",

            parentId: "131100"

        },

        {

            id: "131125",

            value: "安平县",

            parentId: "131100"

        },

        {

            id: "131126",

            value: "故城县",

            parentId: "131100"

        },

        {

            id: "131127",

            value: "景县",

            parentId: "131100"

        },

        {

            id: "131128",

            value: "阜城县",

            parentId: "131100"

        },

        {

            id: "131181",

            value: "冀州市",

            parentId: "131100"

        },

        {

            id: "131182",

            value: "深州市",

            parentId: "131100"

        },

        {

            id: "140105",

            value: "小店区",

            parentId: "140100"

        },

        {

            id: "140106",

            value: "迎泽区",

            parentId: "140100"

        },

        {

            id: "140107",

            value: "杏花岭区",

            parentId: "140100"

        },

        {

            id: "140108",

            value: "尖草坪区",

            parentId: "140100"

        },

        {

            id: "140109",

            value: "万柏林区",

            parentId: "140100"

        },

        {

            id: "140110",

            value: "晋源区",

            parentId: "140100"

        },

        {

            id: "140121",

            value: "清徐县",

            parentId: "140100"

        },

        {

            id: "140122",

            value: "阳曲县",

            parentId: "140100"

        },

        {

            id: "140123",

            value: "娄烦县",

            parentId: "140100"

        },

        {

            id: "140181",

            value: "古交市",

            parentId: "140100"

        },

        {

            id: "140202",

            value: "城区",

            parentId: "140200"

        },

        {

            id: "140203",

            value: "矿区",

            parentId: "140200"

        },

        {

            id: "140211",

            value: "南郊区",

            parentId: "140200"

        },

        {

            id: "140212",

            value: "新荣区",

            parentId: "140200"

        },

        {

            id: "140221",

            value: "阳高县",

            parentId: "140200"

        },

        {

            id: "140222",

            value: "天镇县",

            parentId: "140200"

        },

        {

            id: "140223",

            value: "广灵县",

            parentId: "140200"

        },

        {

            id: "140224",

            value: "灵丘县",

            parentId: "140200"

        },

        {

            id: "140225",

            value: "浑源县",

            parentId: "140200"

        },

        {

            id: "140226",

            value: "左云县",

            parentId: "140200"

        },

        {

            id: "140227",

            value: "大同县",

            parentId: "140200"

        },

        {

            id: "140302",

            value: "城区",

            parentId: "140300"

        },

        {

            id: "140303",

            value: "矿区",

            parentId: "140300"

        },

        {

            id: "140311",

            value: "郊区",

            parentId: "140300"

        },

        {

            id: "140321",

            value: "平定县",

            parentId: "140300"

        },

        {

            id: "140322",

            value: "盂县",

            parentId: "140300"

        },

        {

            id: "140402",

            value: "城区",

            parentId: "140400"

        },

        {

            id: "140411",

            value: "郊区",

            parentId: "140400"

        },

        {

            id: "140421",

            value: "长治县",

            parentId: "140400"

        },

        {

            id: "140423",

            value: "襄垣县",

            parentId: "140400"

        },

        {

            id: "140424",

            value: "屯留县",

            parentId: "140400"

        },

        {

            id: "140425",

            value: "平顺县",

            parentId: "140400"

        },

        {

            id: "140426",

            value: "黎城县",

            parentId: "140400"

        },

        {

            id: "140427",

            value: "壶关县",

            parentId: "140400"

        },

        {

            id: "140428",

            value: "长子县",

            parentId: "140400"

        },

        {

            id: "140429",

            value: "武乡县",

            parentId: "140400"

        },

        {

            id: "140430",

            value: "沁县",

            parentId: "140400"

        },

        {

            id: "140431",

            value: "沁源县",

            parentId: "140400"

        },

        {

            id: "140481",

            value: "潞城市",

            parentId: "140400"

        },

        {

            id: "140502",

            value: "城区",

            parentId: "140500"

        },

        {

            id: "140521",

            value: "沁水县",

            parentId: "140500"

        },

        {

            id: "140522",

            value: "阳城县",

            parentId: "140500"

        },

        {

            id: "140524",

            value: "陵川县",

            parentId: "140500"

        },

        {

            id: "140525",

            value: "泽州县",

            parentId: "140500"

        },

        {

            id: "140581",

            value: "高平市",

            parentId: "140500"

        },

        {

            id: "140602",

            value: "朔城区",

            parentId: "140600"

        },

        {

            id: "140603",

            value: "平鲁区",

            parentId: "140600"

        },

        {

            id: "140621",

            value: "山阴县",

            parentId: "140600"

        },

        {

            id: "140622",

            value: "应县",

            parentId: "140600"

        },

        {

            id: "140623",

            value: "右玉县",

            parentId: "140600"

        },

        {

            id: "140624",

            value: "怀仁县",

            parentId: "140600"

        },

        {

            id: "140702",

            value: "榆次区",

            parentId: "140700"

        },

        {

            id: "140721",

            value: "榆社县",

            parentId: "140700"

        },

        {

            id: "140722",

            value: "左权县",

            parentId: "140700"

        },

        {

            id: "140723",

            value: "和顺县",

            parentId: "140700"

        },

        {

            id: "140724",

            value: "昔阳县",

            parentId: "140700"

        },

        {

            id: "140725",

            value: "寿阳县",

            parentId: "140700"

        },

        {

            id: "140726",

            value: "太谷县",

            parentId: "140700"

        },

        {

            id: "140727",

            value: "祁县",

            parentId: "140700"

        },

        {

            id: "140728",

            value: "平遥县",

            parentId: "140700"

        },

        {

            id: "140729",

            value: "灵石县",

            parentId: "140700"

        },

        {

            id: "140781",

            value: "介休市",

            parentId: "140700"

        },

        {

            id: "140802",

            value: "盐湖区",

            parentId: "140800"

        },

        {

            id: "140821",

            value: "临猗县",

            parentId: "140800"

        },

        {

            id: "140822",

            value: "万荣县",

            parentId: "140800"

        },

        {

            id: "140823",

            value: "闻喜县",

            parentId: "140800"

        },

        {

            id: "140824",

            value: "稷山县",

            parentId: "140800"

        },

        {

            id: "140825",

            value: "新绛县",

            parentId: "140800"

        },

        {

            id: "140826",

            value: "绛县",

            parentId: "140800"

        },

        {

            id: "140827",

            value: "垣曲县",

            parentId: "140800"

        },

        {

            id: "140828",

            value: "夏县",

            parentId: "140800"

        },

        {

            id: "140829",

            value: "平陆县",

            parentId: "140800"

        },

        {

            id: "140830",

            value: "芮城县",

            parentId: "140800"

        },

        {

            id: "140881",

            value: "永济市",

            parentId: "140800"

        },

        {

            id: "140882",

            value: "河津市",

            parentId: "140800"

        },

        {

            id: "140902",

            value: "忻府区",

            parentId: "140900"

        },

        {

            id: "140921",

            value: "定襄县",

            parentId: "140900"

        },

        {

            id: "140922",

            value: "五台县",

            parentId: "140900"

        },

        {

            id: "140923",

            value: "代县",

            parentId: "140900"

        },

        {

            id: "140924",

            value: "繁峙县",

            parentId: "140900"

        },

        {

            id: "140925",

            value: "宁武县",

            parentId: "140900"

        },

        {

            id: "140926",

            value: "静乐县",

            parentId: "140900"

        },

        {

            id: "140927",

            value: "神池县",

            parentId: "140900"

        },

        {

            id: "140928",

            value: "五寨县",

            parentId: "140900"

        },

        {

            id: "140929",

            value: "岢岚县",

            parentId: "140900"

        },

        {

            id: "140930",

            value: "河曲县",

            parentId: "140900"

        },

        {

            id: "140931",

            value: "保德县",

            parentId: "140900"

        },

        {

            id: "140932",

            value: "偏关县",

            parentId: "140900"

        },

        {

            id: "140981",

            value: "原平市",

            parentId: "140900"

        },

        {

            id: "141002",

            value: "尧都区",

            parentId: "141000"

        },

        {

            id: "141021",

            value: "曲沃县",

            parentId: "141000"

        },

        {

            id: "141022",

            value: "翼城县",

            parentId: "141000"

        },

        {

            id: "141023",

            value: "襄汾县",

            parentId: "141000"

        },

        {

            id: "141024",

            value: "洪洞县",

            parentId: "141000"

        },

        {

            id: "141025",

            value: "古县",

            parentId: "141000"

        },

        {

            id: "141026",

            value: "安泽县",

            parentId: "141000"

        },

        {

            id: "141027",

            value: "浮山县",

            parentId: "141000"

        },

        {

            id: "141028",

            value: "吉县",

            parentId: "141000"

        },

        {

            id: "141029",

            value: "乡宁县",

            parentId: "141000"

        },

        {

            id: "141030",

            value: "大宁县",

            parentId: "141000"

        },

        {

            id: "141031",

            value: "隰县",

            parentId: "141000"

        },

        {

            id: "141032",

            value: "永和县",

            parentId: "141000"

        },

        {

            id: "141033",

            value: "蒲县",

            parentId: "141000"

        },

        {

            id: "141034",

            value: "汾西县",

            parentId: "141000"

        },

        {

            id: "141081",

            value: "侯马市",

            parentId: "141000"

        },

        {

            id: "141082",

            value: "霍州市",

            parentId: "141000"

        },

        {

            id: "141102",

            value: "离石区",

            parentId: "141100"

        },

        {

            id: "141121",

            value: "文水县",

            parentId: "141100"

        },

        {

            id: "141122",

            value: "交城县",

            parentId: "141100"

        },

        {

            id: "141123",

            value: "兴县",

            parentId: "141100"

        },

        {

            id: "141124",

            value: "临县",

            parentId: "141100"

        },

        {

            id: "141125",

            value: "柳林县",

            parentId: "141100"

        },

        {

            id: "141126",

            value: "石楼县",

            parentId: "141100"

        },

        {

            id: "141127",

            value: "岚县",

            parentId: "141100"

        },

        {

            id: "141128",

            value: "方山县",

            parentId: "141100"

        },

        {

            id: "141129",

            value: "中阳县",

            parentId: "141100"

        },

        {

            id: "141130",

            value: "交口县",

            parentId: "141100"

        },

        {

            id: "141181",

            value: "孝义市",

            parentId: "141100"

        },

        {

            id: "141182",

            value: "汾阳市",

            parentId: "141100"

        },

        {

            id: "150102",

            value: "新城区",

            parentId: "150100"

        },

        {

            id: "150103",

            value: "回民区",

            parentId: "150100"

        },

        {

            id: "150104",

            value: "玉泉区",

            parentId: "150100"

        },

        {

            id: "150105",

            value: "赛罕区",

            parentId: "150100"

        },

        {

            id: "150121",

            value: "土默特左旗",

            parentId: "150100"

        },

        {

            id: "150122",

            value: "托克托县",

            parentId: "150100"

        },

        {

            id: "150123",

            value: "和林格尔县",

            parentId: "150100"

        },

        {

            id: "150124",

            value: "清水河县",

            parentId: "150100"

        },

        {

            id: "150125",

            value: "武川县",

            parentId: "150100"

        },

        {

            id: "150202",

            value: "东河区",

            parentId: "150200"

        },

        {

            id: "150203",

            value: "昆都仑区",

            parentId: "150200"

        },

        {

            id: "150204",

            value: "青山区",

            parentId: "150200"

        },

        {

            id: "150205",

            value: "石拐区",

            parentId: "150200"

        },

        {

            id: "150206",

            value: "白云鄂博矿区",

            parentId: "150200"

        },

        {

            id: "150207",

            value: "九原区",

            parentId: "150200"

        },

        {

            id: "150221",

            value: "土默特右旗",

            parentId: "150200"

        },

        {

            id: "150222",

            value: "固阳县",

            parentId: "150200"

        },

        {

            id: "150223",

            value: "达尔罕茂明安联合旗",

            parentId: "150200"

        },

        {

            id: "150302",

            value: "海勃湾区",

            parentId: "150300"

        },

        {

            id: "150303",

            value: "海南区",

            parentId: "150300"

        },

        {

            id: "150304",

            value: "乌达区",

            parentId: "150300"

        },

        {

            id: "150402",

            value: "红山区",

            parentId: "150400"

        },

        {

            id: "150403",

            value: "元宝山区",

            parentId: "150400"

        },

        {

            id: "150404",

            value: "松山区",

            parentId: "150400"

        },

        {

            id: "150421",

            value: "阿鲁科尔沁旗",

            parentId: "150400"

        },

        {

            id: "150422",

            value: "巴林左旗",

            parentId: "150400"

        },

        {

            id: "150423",

            value: "巴林右旗",

            parentId: "150400"

        },

        {

            id: "150424",

            value: "林西县",

            parentId: "150400"

        },

        {

            id: "150425",

            value: "克什克腾旗",

            parentId: "150400"

        },

        {

            id: "150426",

            value: "翁牛特旗",

            parentId: "150400"

        },

        {

            id: "150428",

            value: "喀喇沁旗",

            parentId: "150400"

        },

        {

            id: "150429",

            value: "宁城县",

            parentId: "150400"

        },

        {

            id: "150430",

            value: "敖汉旗",

            parentId: "150400"

        },

        {

            id: "150502",

            value: "科尔沁区",

            parentId: "150500"

        },

        {

            id: "150521",

            value: "科尔沁左翼中旗",

            parentId: "150500"

        },

        {

            id: "150522",

            value: "科尔沁左翼后旗",

            parentId: "150500"

        },

        {

            id: "150523",

            value: "开鲁县",

            parentId: "150500"

        },

        {

            id: "150524",

            value: "库伦旗",

            parentId: "150500"

        },

        {

            id: "150525",

            value: "奈曼旗",

            parentId: "150500"

        },

        {

            id: "150526",

            value: "扎鲁特旗",

            parentId: "150500"

        },

        {

            id: "150581",

            value: "霍林郭勒市",

            parentId: "150500"

        },

        {

            id: "150602",

            value: "东胜区",

            parentId: "150600"

        },

        {

            id: "150621",

            value: "达拉特旗",

            parentId: "150600"

        },

        {

            id: "150622",

            value: "准格尔旗",

            parentId: "150600"

        },

        {

            id: "150623",

            value: "鄂托克前旗",

            parentId: "150600"

        },

        {

            id: "150624",

            value: "鄂托克旗",

            parentId: "150600"

        },

        {

            id: "150625",

            value: "杭锦旗",

            parentId: "150600"

        },

        {

            id: "150626",

            value: "乌审旗",

            parentId: "150600"

        },

        {

            id: "150627",

            value: "伊金霍洛旗",

            parentId: "150600"

        },

        {

            id: "150702",

            value: "海拉尔区",

            parentId: "150700"

        },

        {

            id: "150721",

            value: "阿荣旗",

            parentId: "150700"

        },

        {

            id: "150722",

            value: "莫力达瓦达斡尔族自治旗",

            parentId: "150700"

        },

        {

            id: "150723",

            value: "鄂伦春自治旗",

            parentId: "150700"

        },

        {

            id: "150724",

            value: "鄂温克族自治旗",

            parentId: "150700"

        },

        {

            id: "150725",

            value: "陈巴尔虎旗",

            parentId: "150700"

        },

        {

            id: "150726",

            value: "新巴尔虎左旗",

            parentId: "150700"

        },

        {

            id: "150727",

            value: "新巴尔虎右旗",

            parentId: "150700"

        },

        {

            id: "150781",

            value: "满洲里市",

            parentId: "150700"

        },

        {

            id: "150782",

            value: "牙克石市",

            parentId: "150700"

        },

        {

            id: "150783",

            value: "扎兰屯市",

            parentId: "150700"

        },

        {

            id: "150784",

            value: "额尔古纳市",

            parentId: "150700"

        },

        {

            id: "150785",

            value: "根河市",

            parentId: "150700"

        },

        {

            id: "150802",

            value: "临河区",

            parentId: "150800"

        },

        {

            id: "150821",

            value: "五原县",

            parentId: "150800"

        },

        {

            id: "150822",

            value: "磴口县",

            parentId: "150800"

        },

        {

            id: "150823",

            value: "乌拉特前旗",

            parentId: "150800"

        },

        {

            id: "150824",

            value: "乌拉特中旗",

            parentId: "150800"

        },

        {

            id: "150825",

            value: "乌拉特后旗",

            parentId: "150800"

        },

        {

            id: "150826",

            value: "杭锦后旗",

            parentId: "150800"

        },

        {

            id: "150902",

            value: "集宁区",

            parentId: "150900"

        },

        {

            id: "150921",

            value: "卓资县",

            parentId: "150900"

        },

        {

            id: "150922",

            value: "化德县",

            parentId: "150900"

        },

        {

            id: "150923",

            value: "商都县",

            parentId: "150900"

        },

        {

            id: "150924",

            value: "兴和县",

            parentId: "150900"

        },

        {

            id: "150925",

            value: "凉城县",

            parentId: "150900"

        },

        {

            id: "150926",

            value: "察哈尔右翼前旗",

            parentId: "150900"

        },

        {

            id: "150927",

            value: "察哈尔右翼中旗",

            parentId: "150900"

        },

        {

            id: "150928",

            value: "察哈尔右翼后旗",

            parentId: "150900"

        },

        {

            id: "150929",

            value: "四子王旗",

            parentId: "150900"

        },

        {

            id: "150981",

            value: "丰镇市",

            parentId: "150900"

        },

        {

            id: "152201",

            value: "乌兰浩特市",

            parentId: "152200"

        },

        {

            id: "152202",

            value: "阿尔山市",

            parentId: "152200"

        },

        {

            id: "152221",

            value: "科尔沁右翼前旗",

            parentId: "152200"

        },

        {

            id: "152222",

            value: "科尔沁右翼中旗",

            parentId: "152200"

        },

        {

            id: "152223",

            value: "扎赉特旗",

            parentId: "152200"

        },

        {

            id: "152224",

            value: "突泉县",

            parentId: "152200"

        },

        {

            id: "152501",

            value: "二连浩特市",

            parentId: "152500"

        },

        {

            id: "152502",

            value: "锡林浩特市",

            parentId: "152500"

        },

        {

            id: "152522",

            value: "阿巴嘎旗",

            parentId: "152500"

        },

        {

            id: "152523",

            value: "苏尼特左旗",

            parentId: "152500"

        },

        {

            id: "152524",

            value: "苏尼特右旗",

            parentId: "152500"

        },

        {

            id: "152525",

            value: "东乌珠穆沁旗",

            parentId: "152500"

        },

        {

            id: "152526",

            value: "西乌珠穆沁旗",

            parentId: "152500"

        },

        {

            id: "152527",

            value: "太仆寺旗",

            parentId: "152500"

        },

        {

            id: "152528",

            value: "镶黄旗",

            parentId: "152500"

        },

        {

            id: "152529",

            value: "正镶白旗",

            parentId: "152500"

        },



        {

            id: "152530",

            value: "正蓝旗",

            parentId: "152500"

        },

        {

            id: "152531",

            value: "多伦县",

            parentId: "152500"

        },

        {

            id: "152921",

            value: "阿拉善左旗",

            parentId: "152900"

        },

        {

            id: "152922",

            value: "阿拉善右旗",

            parentId: "152900"

        },

        {

            id: "152923",

            value: "额济纳旗",

            parentId: "152900"

        },

        {

            id: "210102",

            value: "和平区",

            parentId: "210100"

        },

        {

            id: "210103",

            value: "沈河区",

            parentId: "210100"

        },

        {

            id: "210104",

            value: "大东区",

            parentId: "210100"

        },

        {

            id: "210105",

            value: "皇姑区",

            parentId: "210100"

        },

        {

            id: "210106",

            value: "铁西区",

            parentId: "210100"

        },

        {

            id: "210111",

            value: "苏家屯区",

            parentId: "210100"

        },

        {

            id: "210112",

            value: "东陵区",

            parentId: "210100"

        },

        {

            id: "210113",

            value: "沈北新区",

            parentId: "210100"

        },

        {

            id: "210114",

            value: "于洪区",

            parentId: "210100"

        },

        {

            id: "210122",

            value: "辽中县",

            parentId: "210100"

        },

        {

            id: "210123",

            value: "康平县",

            parentId: "210100"

        },

        {

            id: "210124",

            value: "法库县",

            parentId: "210100"

        },

        {

            id: "210181",

            value: "新民市",

            parentId: "210100"

        },

        {

            id: "210202",

            value: "中山区",

            parentId: "210200"

        },

        {

            id: "210203",

            value: "西岗区",

            parentId: "210200"

        },

        {

            id: "210204",

            value: "沙河口区",

            parentId: "210200"

        },

        {

            id: "210211",

            value: "甘井子区",

            parentId: "210200"

        },

        {

            id: "210212",

            value: "旅顺口区",

            parentId: "210200"

        },

        {

            id: "210213",

            value: "金州区",

            parentId: "210200"

        },

        {

            id: "210224",

            value: "长海县",

            parentId: "210200"

        },

        {

            id: "210281",

            value: "瓦房店市",

            parentId: "210200"

        },

        {

            id: "210282",

            value: "普兰店市",

            parentId: "210200"

        },

        {

            id: "210283",

            value: "庄河市",

            parentId: "210200"

        },

        {

            id: "210302",

            value: "铁东区",

            parentId: "210300"

        },

        {

            id: "210303",

            value: "铁西区",

            parentId: "210300"

        },

        {

            id: "210304",

            value: "立山区",

            parentId: "210300"

        },

        {

            id: "210311",

            value: "千山区",

            parentId: "210300"

        },

        {

            id: "210321",

            value: "台安县",

            parentId: "210300"

        },

        {

            id: "210323",

            value: "岫岩满族自治县",

            parentId: "210300"

        },

        {

            id: "210381",

            value: "海城市",

            parentId: "210300"

        },

        {

            id: "210402",

            value: "新抚区",

            parentId: "210400"

        },

        {

            id: "210403",

            value: "东洲区",

            parentId: "210400"

        },

        {

            id: "210404",

            value: "望花区",

            parentId: "210400"

        },

        {

            id: "210411",

            value: "顺城区",

            parentId: "210400"

        },

        {

            id: "210421",

            value: "抚顺县",

            parentId: "210400"

        },

        {

            id: "210422",

            value: "新宾满族自治县",

            parentId: "210400"

        },

        {

            id: "210423",

            value: "清原满族自治县",

            parentId: "210400"

        },

        {

            id: "210502",

            value: "平山区",

            parentId: "210500"

        },

        {

            id: "210503",

            value: "溪湖区",

            parentId: "210500"

        },

        {

            id: "210504",

            value: "明山区",

            parentId: "210500"

        },

        {

            id: "210505",

            value: "南芬区",

            parentId: "210500"

        },

        {

            id: "210521",

            value: "本溪满族自治县",

            parentId: "210500"

        },

        {

            id: "210522",

            value: "桓仁满族自治县",

            parentId: "210500"

        },

        {

            id: "210602",

            value: "元宝区",

            parentId: "210600"

        },

        {

            id: "210603",

            value: "振兴区",

            parentId: "210600"

        },

        {

            id: "210604",

            value: "振安区",

            parentId: "210600"

        },

        {

            id: "210624",

            value: "宽甸满族自治县",

            parentId: "210600"

        },

        {

            id: "210681",

            value: "东港市",

            parentId: "210600"

        },

        {

            id: "210682",

            value: "凤城市",

            parentId: "210600"

        },

        {

            id: "210702",

            value: "古塔区",

            parentId: "210700"

        },

        {

            id: "210703",

            value: "凌河区",

            parentId: "210700"

        },

        {

            id: "210711",

            value: "太和区",

            parentId: "210700"

        },

        {

            id: "210726",

            value: "黑山县",

            parentId: "210700"

        },

        {

            id: "210727",

            value: "义县",

            parentId: "210700"

        },

        {

            id: "210781",

            value: "凌海市",

            parentId: "210700"

        },

        {

            id: "210782",

            value: "北镇市",

            parentId: "210700"

        },

        {

            id: "210802",

            value: "站前区",

            parentId: "210800"

        },

        {

            id: "210803",

            value: "西市区",

            parentId: "210800"

        },

        {

            id: "210804",

            value: "鲅鱼圈区",

            parentId: "210800"

        },

        {

            id: "210811",

            value: "老边区",

            parentId: "210800"

        },

        {

            id: "210881",

            value: "盖州市",

            parentId: "210800"

        },

        {

            id: "210882",

            value: "大石桥市",

            parentId: "210800"

        },

        {

            id: "210902",

            value: "海州区",

            parentId: "210900"

        },

        {

            id: "210903",

            value: "新邱区",

            parentId: "210900"

        },

        {

            id: "210904",

            value: "太平区",

            parentId: "210900"

        },

        {

            id: "210905",

            value: "清河门区",

            parentId: "210900"

        },

        {

            id: "210911",

            value: "细河区",

            parentId: "210900"

        },

        {

            id: "210921",

            value: "阜新蒙古族自治县",

            parentId: "210900"

        },

        {

            id: "210922",

            value: "彰武县",

            parentId: "210900"

        },

        {

            id: "211002",

            value: "白塔区",

            parentId: "211000"

        },

        {

            id: "211003",

            value: "文圣区",

            parentId: "211000"

        },

        {

            id: "211004",

            value: "宏伟区",

            parentId: "211000"

        },

        {

            id: "211005",

            value: "弓长岭区",

            parentId: "211000"

        },

        {

            id: "211011",

            value: "太子河区",

            parentId: "211000"

        },

        {

            id: "211021",

            value: "辽阳县",

            parentId: "211000"

        },

        {

            id: "211081",

            value: "灯塔市",

            parentId: "211000"

        },

        {

            id: "211102",

            value: "双台子区",

            parentId: "211100"

        },

        {

            id: "211103",

            value: "兴隆台区",

            parentId: "211100"

        },

        {

            id: "211121",

            value: "大洼县",

            parentId: "211100"

        },

        {

            id: "211122",

            value: "盘山县",

            parentId: "211100"

        },

        {

            id: "211202",

            value: "银州区",

            parentId: "211200"

        },

        {

            id: "211204",

            value: "清河区",

            parentId: "211200"

        },

        {

            id: "211221",

            value: "铁岭县",

            parentId: "211200"

        },

        {

            id: "211223",

            value: "西丰县",

            parentId: "211200"

        },

        {

            id: "211224",

            value: "昌图县",

            parentId: "211200"

        },

        {

            id: "211281",

            value: "调兵山市",

            parentId: "211200"

        },

        {

            id: "211282",

            value: "开原市",

            parentId: "211200"

        },

        {

            id: "211302",

            value: "双塔区",

            parentId: "211300"

        },

        {

            id: "211303",

            value: "龙城区",

            parentId: "211300"

        },

        {

            id: "211321",

            value: "朝阳县",

            parentId: "211300"

        },

        {

            id: "211322",

            value: "建平县",

            parentId: "211300"

        },

        {

            id: "211324",

            value: "喀喇沁左翼蒙古族自治县",

            parentId: "211300"

        },

        {

            id: "211381",

            value: "北票市",

            parentId: "211300"

        },

        {

            id: "211382",

            value: "凌源市",

            parentId: "211300"

        },

        {

            id: "211402",

            value: "连山区",

            parentId: "211400"

        },

        {

            id: "211403",

            value: "龙港区",

            parentId: "211400"

        },

        {

            id: "211404",

            value: "南票区",

            parentId: "211400"

        },

        {

            id: "211421",

            value: "绥中县",

            parentId: "211400"

        },

        {

            id: "211422",

            value: "建昌县",

            parentId: "211400"

        },

        {

            id: "211481",

            value: "兴城市",

            parentId: "211400"

        },

        {

            id: "220102",

            value: "南关区",

            parentId: "220100"

        },

        {

            id: "220103",

            value: "宽城区",

            parentId: "220100"

        },

        {

            id: "220104",

            value: "朝阳区",

            parentId: "220100"

        },

        {

            id: "220105",

            value: "二道区",

            parentId: "220100"

        },

        {

            id: "220106",

            value: "绿园区",

            parentId: "220100"

        },

        {

            id: "220112",

            value: "双阳区",

            parentId: "220100"

        },

        {

            id: "220122",

            value: "农安县",

            parentId: "220100"

        },

        {

            id: "220181",

            value: "九台市",

            parentId: "220100"

        },

        {

            id: "220182",

            value: "榆树市",

            parentId: "220100"

        },

        {

            id: "220183",

            value: "德惠市",

            parentId: "220100"

        },

        {

            id: "220202",

            value: "昌邑区",

            parentId: "220200"

        },

        {

            id: "220203",

            value: "龙潭区",

            parentId: "220200"

        },

        {

            id: "220204",

            value: "船营区",

            parentId: "220200"

        },

        {

            id: "220211",

            value: "丰满区",

            parentId: "220200"

        },

        {

            id: "220221",

            value: "永吉县",

            parentId: "220200"

        },

        {

            id: "220281",

            value: "蛟河市",

            parentId: "220200"

        },

        {

            id: "220282",

            value: "桦甸市",

            parentId: "220200"

        },

        {

            id: "220283",

            value: "舒兰市",

            parentId: "220200"

        },

        {

            id: "220284",

            value: "磐石市",

            parentId: "220200"

        },

        {

            id: "220302",

            value: "铁西区",

            parentId: "220300"

        },

        {

            id: "220303",

            value: "铁东区",

            parentId: "220300"

        },

        {

            id: "220322",

            value: "梨树县",

            parentId: "220300"

        },

        {

            id: "220323",

            value: "伊通满族自治县",

            parentId: "220300"

        },

        {

            id: "220381",

            value: "公主岭市",

            parentId: "220300"

        },

        {

            id: "220382",

            value: "双辽市",

            parentId: "220300"

        },

        {

            id: "220402",

            value: "龙山区",

            parentId: "220400"

        },

        {

            id: "220403",

            value: "西安区",

            parentId: "220400"

        },

        {

            id: "220421",

            value: "东丰县",

            parentId: "220400"

        },

        {

            id: "220422",

            value: "东辽县",

            parentId: "220400"

        },

        {

            id: "220502",

            value: "东昌区",

            parentId: "220500"

        },

        {

            id: "220503",

            value: "二道江区",

            parentId: "220500"

        },

        {

            id: "220521",

            value: "通化县",

            parentId: "220500"

        },

        {

            id: "220523",

            value: "辉南县",

            parentId: "220500"

        },

        {

            id: "220524",

            value: "柳河县",

            parentId: "220500"

        },

        {

            id: "220581",

            value: "梅河口市",

            parentId: "220500"

        },

        {

            id: "220582",

            value: "集安市",

            parentId: "220500"

        },

        {

            id: "220602",

            value: "浑江区",

            parentId: "220600"

        },

        {

            id: "220605",

            value: "江源区",

            parentId: "220600"

        },

        {

            id: "220621",

            value: "抚松县",

            parentId: "220600"

        },

        {

            id: "220622",

            value: "靖宇县",

            parentId: "220600"

        },

        {

            id: "220623",

            value: "长白朝鲜族自治县",

            parentId: "220600"

        },

        {

            id: "220681",

            value: "临江市",

            parentId: "220600"

        },

        {

            id: "220702",

            value: "宁江区",

            parentId: "220700"

        },

        {

            id: "220721",

            value: "前郭尔罗斯蒙古族自治县",

            parentId: "220700"

        },

        {

            id: "220722",

            value: "长岭县",

            parentId: "220700"

        },

        {

            id: "220723",

            value: "乾安县",

            parentId: "220700"

        },

        {

            id: "220724",

            value: "扶余县",

            parentId: "220700"

        },

        {

            id: "220802",

            value: "洮北区",

            parentId: "220800"

        },

        {

            id: "220821",

            value: "镇赉县",

            parentId: "220800"

        },

        {

            id: "220822",

            value: "通榆县",

            parentId: "220800"

        },

        {

            id: "220881",

            value: "洮南市",

            parentId: "220800"

        },

        {

            id: "220882",

            value: "大安市",

            parentId: "220800"

        },

        {

            id: "222401",

            value: "延吉市",

            parentId: "222400"

        },

        {

            id: "222402",

            value: "图们市",

            parentId: "222400"

        },

        {

            id: "222403",

            value: "敦化市",

            parentId: "222400"

        },

        {

            id: "222404",

            value: "珲春市",

            parentId: "222400"

        },

        {

            id: "222405",

            value: "龙井市",

            parentId: "222400"

        },

        {

            id: "222406",

            value: "和龙市",

            parentId: "222400"

        },

        {

            id: "222424",

            value: "汪清县",

            parentId: "222400"

        },

        {

            id: "222426",

            value: "安图县",

            parentId: "222400"

        },

        {

            id: "230102",

            value: "道里区",

            parentId: "230100"

        },

        {

            id: "230103",

            value: "南岗区",

            parentId: "230100"

        },

        {

            id: "230104",

            value: "道外区",

            parentId: "230100"

        },

        {

            id: "230108",

            value: "平房区",

            parentId: "230100"

        },

        {

            id: "230109",

            value: "松北区",

            parentId: "230100"

        },

        {

            id: "230110",

            value: "香坊区",

            parentId: "230100"

        },

        {

            id: "230111",

            value: "呼兰区",

            parentId: "230100"

        },

        {

            id: "230112",

            value: "阿城区",

            parentId: "230100"

        },

        {

            id: "230123",

            value: "依兰县",

            parentId: "230100"

        },

        {

            id: "230124",

            value: "方正县",

            parentId: "230100"

        },

        {

            id: "230125",

            value: "宾县",

            parentId: "230100"

        },

        {

            id: "230126",

            value: "巴彦县",

            parentId: "230100"

        },

        {

            id: "230127",

            value: "木兰县",

            parentId: "230100"

        },

        {

            id: "230128",

            value: "通河县",

            parentId: "230100"

        },

        {

            id: "230129",

            value: "延寿县",

            parentId: "230100"

        },

        {

            id: "230182",

            value: "双城市",

            parentId: "230100"

        },

        {

            id: "230183",

            value: "尚志市",

            parentId: "230100"

        },

        {

            id: "230184",

            value: "五常市",

            parentId: "230100"

        },

        {

            id: "230202",

            value: "龙沙区",

            parentId: "230200"

        },

        {

            id: "230203",

            value: "建华区",

            parentId: "230200"

        },

        {

            id: "230204",

            value: "铁锋区",

            parentId: "230200"

        },

        {

            id: "230205",

            value: "昂昂溪区",

            parentId: "230200"

        },

        {

            id: "230206",

            value: "富拉尔基区",

            parentId: "230200"

        },

        {

            id: "230207",

            value: "碾子山区",

            parentId: "230200"

        },

        {

            id: "230208",

            value: "梅里斯达斡尔族区",

            parentId: "230200"

        },

        {

            id: "230221",

            value: "龙江县",

            parentId: "230200"

        },

        {

            id: "230223",

            value: "依安县",

            parentId: "230200"

        },

        {

            id: "230224",

            value: "泰来县",

            parentId: "230200"

        },

        {

            id: "230225",

            value: "甘南县",

            parentId: "230200"

        },

        {

            id: "230227",

            value: "富裕县",

            parentId: "230200"

        },

        {

            id: "230229",

            value: "克山县",

            parentId: "230200"

        },

        {

            id: "230230",

            value: "克东县",

            parentId: "230200"

        },

        {

            id: "230231",

            value: "拜泉县",

            parentId: "230200"

        },

        {

            id: "230281",

            value: "讷河市",

            parentId: "230200"

        },

        {

            id: "230302",

            value: "鸡冠区",

            parentId: "230300"

        },

        {

            id: "230303",

            value: "恒山区",

            parentId: "230300"

        },

        {

            id: "230304",

            value: "滴道区",

            parentId: "230300"

        },

        {

            id: "230305",

            value: "梨树区",

            parentId: "230300"

        },

        {

            id: "230306",

            value: "城子河区",

            parentId: "230300"

        },

        {

            id: "230307",

            value: "麻山区",

            parentId: "230300"

        },

        {

            id: "230321",

            value: "鸡东县",

            parentId: "230300"

        },

        {

            id: "230381",

            value: "虎林市",

            parentId: "230300"

        },

        {

            id: "230382",

            value: "密山市",

            parentId: "230300"

        },

        {

            id: "230402",

            value: "向阳区",

            parentId: "230400"

        },

        {

            id: "230403",

            value: "工农区",

            parentId: "230400"

        },

        {

            id: "230404",

            value: "南山区",

            parentId: "230400"

        },

        {

            id: "230405",

            value: "兴安区",

            parentId: "230400"

        },

        {

            id: "230406",

            value: "东山区",

            parentId: "230400"

        },

        {

            id: "230407",

            value: "兴山区",

            parentId: "230400"

        },

        {

            id: "230421",

            value: "萝北县",

            parentId: "230400"

        },

        {

            id: "230422",

            value: "绥滨县",

            parentId: "230400"

        },

        {

            id: "230502",

            value: "尖山区",

            parentId: "230500"

        },

        {

            id: "230503",

            value: "岭东区",

            parentId: "230500"

        },

        {

            id: "230505",

            value: "四方台区",

            parentId: "230500"

        },

        {

            id: "230506",

            value: "宝山区",

            parentId: "230500"

        },

        {

            id: "230521",

            value: "集贤县",

            parentId: "230500"

        },

        {

            id: "230522",

            value: "友谊县",

            parentId: "230500"

        },

        {

            id: "230523",

            value: "宝清县",

            parentId: "230500"

        },

        {

            id: "230524",

            value: "饶河县",

            parentId: "230500"

        },

        {

            id: "230602",

            value: "萨尔图区",

            parentId: "230600"

        },

        {

            id: "230603",

            value: "龙凤区",

            parentId: "230600"

        },

        {

            id: "230604",

            value: "让胡路区",

            parentId: "230600"

        },

        {

            id: "230605",

            value: "红岗区",

            parentId: "230600"

        },

        {

            id: "230606",

            value: "大同区",

            parentId: "230600"

        },

        {

            id: "230621",

            value: "肇州县",

            parentId: "230600"

        },

        {

            id: "230622",

            value: "肇源县",

            parentId: "230600"

        },

        {

            id: "230623",

            value: "林甸县",

            parentId: "230600"

        },

        {

            id: "230624",

            value: "杜尔伯特蒙古族自治县",

            parentId: "230600"

        },

        {

            id: "230702",

            value: "伊春区",

            parentId: "230700"

        },

        {

            id: "230703",

            value: "南岔区",

            parentId: "230700"

        },

        {

            id: "230704",

            value: "友好区",

            parentId: "230700"

        },

        {

            id: "230705",

            value: "西林区",

            parentId: "230700"

        },

        {

            id: "230706",

            value: "翠峦区",

            parentId: "230700"

        },

        {

            id: "230707",

            value: "新青区",

            parentId: "230700"

        },

        {

            id: "230708",

            value: "美溪区",

            parentId: "230700"

        },

        {

            id: "230709",

            value: "金山屯区",

            parentId: "230700"

        },

        {

            id: "230710",

            value: "五营区",

            parentId: "230700"

        },

        {

            id: "230711",

            value: "乌马河区",

            parentId: "230700"

        },

        {

            id: "230712",

            value: "汤旺河区",

            parentId: "230700"

        },

        {

            id: "230713",

            value: "带岭区",

            parentId: "230700"

        },

        {

            id: "230714",

            value: "乌伊岭区",

            parentId: "230700"

        },

        {

            id: "230715",

            value: "红星区",

            parentId: "230700"

        },

        {

            id: "230716",

            value: "上甘岭区",

            parentId: "230700"

        },

        {

            id: "230722",

            value: "嘉荫县",

            parentId: "230700"

        },

        {

            id: "230781",

            value: "铁力市",

            parentId: "230700"

        },

        {

            id: "230803",

            value: "向阳区",

            parentId: "230800"

        },

        {

            id: "230804",

            value: "前进区",

            parentId: "230800"

        },

        {

            id: "230805",

            value: "东风区",

            parentId: "230800"

        },

        {

            id: "230811",

            value: "郊区",

            parentId: "230800"

        },

        {

            id: "230822",

            value: "桦南县",

            parentId: "230800"

        },

        {

            id: "230826",

            value: "桦川县",

            parentId: "230800"

        },

        {

            id: "230828",

            value: "汤原县",

            parentId: "230800"

        },

        {

            id: "230833",

            value: "抚远县",

            parentId: "230800"

        },

        {

            id: "230881",

            value: "同江市",

            parentId: "230800"

        },

        {

            id: "230882",

            value: "富锦市",

            parentId: "230800"

        },

        {

            id: "230902",

            value: "新兴区",

            parentId: "230900"

        },

        {

            id: "230903",

            value: "桃山区",

            parentId: "230900"

        },

        {

            id: "230904",

            value: "茄子河区",

            parentId: "230900"

        },

        {

            id: "230921",

            value: "勃利县",

            parentId: "230900"

        },

        {

            id: "231002",

            value: "东安区",

            parentId: "231000"

        },

        {

            id: "231003",

            value: "阳明区",

            parentId: "231000"

        },

        {

            id: "231004",

            value: "爱民区",

            parentId: "231000"

        },

        {

            id: "231005",

            value: "西安区",

            parentId: "231000"

        },

        {

            id: "231024",

            value: "东宁县",

            parentId: "231000"

        },

        {

            id: "231025",

            value: "林口县",

            parentId: "231000"

        },

        {

            id: "231081",

            value: "绥芬河市",

            parentId: "231000"

        },

        {

            id: "231083",

            value: "海林市",

            parentId: "231000"

        },

        {

            id: "231084",

            value: "宁安市",

            parentId: "231000"

        },

        {

            id: "231085",

            value: "穆棱市",

            parentId: "231000"

        },

        {

            id: "231102",

            value: "爱辉区",

            parentId: "231100"

        },

        {

            id: "231121",

            value: "嫩江县",

            parentId: "231100"

        },

        {

            id: "231123",

            value: "逊克县",

            parentId: "231100"

        },

        {

            id: "231124",

            value: "孙吴县",

            parentId: "231100"

        },

        {

            id: "231181",

            value: "北安市",

            parentId: "231100"

        },

        {

            id: "231182",

            value: "五大连池市",

            parentId: "231100"

        },

        {

            id: "231202",

            value: "北林区",

            parentId: "231200"

        },

        {

            id: "231221",

            value: "望奎县",

            parentId: "231200"

        },

        {

            id: "231222",

            value: "兰西县",

            parentId: "231200"

        },

        {

            id: "231223",

            value: "青冈县",

            parentId: "231200"

        },

        {

            id: "231224",

            value: "庆安县",

            parentId: "231200"

        },

        {

            id: "231225",

            value: "明水县",

            parentId: "231200"

        },

        {

            id: "231226",

            value: "绥棱县",

            parentId: "231200"

        },

        {

            id: "231281",

            value: "安达市",

            parentId: "231200"

        },

        {

            id: "231282",

            value: "肇东市",

            parentId: "231200"

        },

        {

            id: "231283",

            value: "海伦市",

            parentId: "231200"

        },

        {

            id: "232701",

            value: "加格达奇区",

            parentId: "232700"

        },

        {

            id: "232702",

            value: "松岭区",

            parentId: "232700"

        },

        {

            id: "232703",

            value: "新林区",

            parentId: "232700"

        },

        {

            id: "232704",

            value: "呼中区",

            parentId: "232700"

        },

        {

            id: "232721",

            value: "呼玛县",

            parentId: "232700"

        },

        {

            id: "232722",

            value: "塔河县",

            parentId: "232700"

        },

        {

            id: "232723",

            value: "漠河县",

            parentId: "232700"

        },

        {

            id: "310101",

            value: "黄浦区",

            parentId: "310100"

        },

        {

            id: "310104",

            value: "徐汇区",

            parentId: "310100"

        },

        {

            id: "310105",

            value: "长宁区",

            parentId: "310100"

        },

        {

            id: "310106",

            value: "静安区",

            parentId: "310100"

        },

        {

            id: "310107",

            value: "普陀区",

            parentId: "310100"

        },

        {

            id: "310108",

            value: "闸北区",

            parentId: "310100"

        },

        {

            id: "310109",

            value: "虹口区",

            parentId: "310100"

        },

        {

            id: "310110",

            value: "杨浦区",

            parentId: "310100"

        },

        {

            id: "310112",

            value: "闵行区",

            parentId: "310100"

        },

        {

            id: "310113",

            value: "宝山区",

            parentId: "310100"

        },

        {

            id: "310114",

            value: "嘉定区",

            parentId: "310100"

        },

        {

            id: "310115",

            value: "浦东新区",

            parentId: "310100"

        },

        {

            id: "310116",

            value: "金山区",

            parentId: "310100"

        },

        {

            id: "310117",

            value: "松江区",

            parentId: "310100"

        },

        {

            id: "310118",

            value: "青浦区",

            parentId: "310100"

        },

        {

            id: "310120",

            value: "奉贤区",

            parentId: "310100"

        },

        {

            id: "310230",

            value: "崇明县",

            parentId: "310100"

        },

        {

            id: "320102",

            value: "玄武区",

            parentId: "320100"

        },

        {

            id: "320103",

            value: "白下区",

            parentId: "320100"

        },

        {

            id: "320104",

            value: "秦淮区",

            parentId: "320100"

        },

        {

            id: "320105",

            value: "建邺区",

            parentId: "320100"

        },

        {

            id: "320106",

            value: "鼓楼区",

            parentId: "320100"

        },

        {

            id: "320107",

            value: "下关区",

            parentId: "320100"

        },

        {

            id: "320111",

            value: "浦口区",

            parentId: "320100"

        },

        {

            id: "320113",

            value: "栖霞区",

            parentId: "320100"

        },

        {

            id: "320114",

            value: "雨花台区",

            parentId: "320100"

        },

        {

            id: "320115",

            value: "江宁区",

            parentId: "320100"

        },

        {

            id: "320116",

            value: "六合区",

            parentId: "320100"

        },

        {

            id: "320124",

            value: "溧水县",

            parentId: "320100"

        },

        {

            id: "320125",

            value: "高淳县",

            parentId: "320100"

        },

        {

            id: "320202",

            value: "崇安区",

            parentId: "320200"

        },

        {

            id: "320203",

            value: "南长区",

            parentId: "320200"

        },

        {

            id: "320204",

            value: "北塘区",

            parentId: "320200"

        },

        {

            id: "320205",

            value: "锡山区",

            parentId: "320200"

        },

        {

            id: "320206",

            value: "惠山区",

            parentId: "320200"

        },

        {

            id: "320211",

            value: "滨湖区",

            parentId: "320200"

        },

        {

            id: "320281",

            value: "江阴市",

            parentId: "320200"

        },

        {

            id: "320282",

            value: "宜兴市",

            parentId: "320200"

        },

        {

            id: "320302",

            value: "鼓楼区",

            parentId: "320300"

        },

        {

            id: "320303",

            value: "云龙区",

            parentId: "320300"

        },

        {

            id: "320305",

            value: "贾汪区",

            parentId: "320300"

        },

        {

            id: "320311",

            value: "泉山区",

            parentId: "320300"

        },

        {

            id: "320312",

            value: "铜山区",

            parentId: "320300"

        },

        {

            id: "320321",

            value: "丰县",

            parentId: "320300"

        },

        {

            id: "320322",

            value: "沛县",

            parentId: "320300"

        },

        {

            id: "320324",

            value: "睢宁县",

            parentId: "320300"

        },

        {

            id: "320381",

            value: "新沂市",

            parentId: "320300"

        },

        {

            id: "320382",

            value: "邳州市",

            parentId: "320300"

        },

        {

            id: "320402",

            value: "天宁区",

            parentId: "320400"

        },

        {

            id: "320404",

            value: "钟楼区",

            parentId: "320400"

        },

        {

            id: "320405",

            value: "戚墅堰区",

            parentId: "320400"

        },

        {

            id: "320411",

            value: "新北区",

            parentId: "320400"

        },

        {

            id: "320412",

            value: "武进区",

            parentId: "320400"

        },

        {

            id: "320481",

            value: "溧阳市",

            parentId: "320400"

        },

        {

            id: "320482",

            value: "金坛市",

            parentId: "320400"

        },

        {

            id: "320503",

            value: "姑苏区",

            parentId: "320500"

        },

        {

            id: "320505",

            value: "虎丘区",

            parentId: "320500"

        },

        {

            id: "320506",

            value: "吴中区",

            parentId: "320500"

        },

        {

            id: "320507",

            value: "相城区",

            parentId: "320500"

        },

        {

            id: "320581",

            value: "常熟市",

            parentId: "320500"

        },

        {

            id: "320582",

            value: "张家港市",

            parentId: "320500"

        },

        {

            id: "320583",

            value: "昆山市",

            parentId: "320500"

        },

        {

            id: "320584",

            value: "吴江区",

            parentId: "320500"

        },

        {

            id: "320585",

            value: "太仓市",

            parentId: "320500"

        },

        {

            id: "320602",

            value: "崇川区",

            parentId: "320600"

        },

        {

            id: "320611",

            value: "港闸区",

            parentId: "320600"

        },

        {

            id: "320612",

            value: "通州区",

            parentId: "320600"

        },

        {

            id: "320621",

            value: "海安县",

            parentId: "320600"

        },

        {

            id: "320623",

            value: "如东县",

            parentId: "320600"

        },

        {

            id: "320681",

            value: "启东市",

            parentId: "320600"

        },

        {

            id: "320682",

            value: "如皋市",

            parentId: "320600"

        },

        {

            id: "320684",

            value: "海门市",

            parentId: "320600"

        },

        {

            id: "320703",

            value: "连云区",

            parentId: "320700"

        },

        {

            id: "320705",

            value: "新浦区",

            parentId: "320700"

        },

        {

            id: "320706",

            value: "海州区",

            parentId: "320700"

        },

        {

            id: "320721",

            value: "赣榆县",

            parentId: "320700"

        },

        {

            id: "320722",

            value: "东海县",

            parentId: "320700"

        },

        {

            id: "320723",

            value: "灌云县",

            parentId: "320700"

        },

        {

            id: "320724",

            value: "灌南县",

            parentId: "320700"

        },

        {

            id: "320802",

            value: "清河区",

            parentId: "320800"

        },

        {

            id: "320803",

            value: "淮安区",

            parentId: "320800"

        },

        {

            id: "320804",

            value: "淮阴区",

            parentId: "320800"

        },

        {

            id: "320811",

            value: "青浦区",

            parentId: "320800"

        },

        {

            id: "320826",

            value: "涟水县",

            parentId: "320800"

        },

        {

            id: "320829",

            value: "洪泽县",

            parentId: "320800"

        },

        {

            id: "320830",

            value: "盱眙县",

            parentId: "320800"

        },

        {

            id: "320831",

            value: "金湖县",

            parentId: "320800"

        },

        {

            id: "320902",

            value: "亭湖区",

            parentId: "320900"

        },

        {

            id: "320903",

            value: "盐都区",

            parentId: "320900"

        },

        {

            id: "320921",

            value: "响水县",

            parentId: "320900"

        },

        {

            id: "320922",

            value: "滨海县",

            parentId: "320900"

        },

        {

            id: "320923",

            value: "阜宁县",

            parentId: "320900"

        },

        {

            id: "320924",

            value: "射阳县",

            parentId: "320900"

        },

        {

            id: "320925",

            value: "建湖县",

            parentId: "320900"

        },

        {

            id: "320981",

            value: "东台市",

            parentId: "320900"

        },

        {

            id: "320982",

            value: "大丰市",

            parentId: "320900"

        },

        {

            id: "321002",

            value: "广陵区",

            parentId: "321000"

        },

        {

            id: "321003",

            value: "邗江区",

            parentId: "321000"

        },

        {

            id: "321023",

            value: "宝应县",

            parentId: "321000"

        },

        {

            id: "321081",

            value: "仪征市",

            parentId: "321000"

        },

        {

            id: "321084",

            value: "高邮市",

            parentId: "321000"

        },

        {

            id: "321088",

            value: "江都市",

            parentId: "321000"

        },

        {

            id: "321102",

            value: "京口区",

            parentId: "321100"

        },

        {

            id: "321111",

            value: "润州区",

            parentId: "321100"

        },

        {

            id: "321112",

            value: "丹徒区",

            parentId: "321100"

        },

        {

            id: "321181",

            value: "丹阳市",

            parentId: "321100"

        },

        {

            id: "321182",

            value: "扬中市",

            parentId: "321100"

        },

        {

            id: "321183",

            value: "句容市",

            parentId: "321100"

        },

        {

            id: "321202",

            value: "海陵区",

            parentId: "321200"

        },

        {

            id: "321203",

            value: "高港区",

            parentId: "321200"

        },

        {

            id: "321281",

            value: "兴化市",

            parentId: "321200"

        },

        {

            id: "321282",

            value: "靖江市",

            parentId: "321200"

        },

        {

            id: "321283",

            value: "泰兴市",

            parentId: "321200"

        },

        {

            id: "321284",

            value: "姜堰市",

            parentId: "321200"

        },

        {

            id: "321302",

            value: "宿城区",

            parentId: "321300"

        },

        {

            id: "321311",

            value: "宿豫区",

            parentId: "321300"

        },

        {

            id: "321322",

            value: "沭阳县",

            parentId: "321300"

        },

        {

            id: "321323",

            value: "泗阳县",

            parentId: "321300"

        },

        {

            id: "321324",

            value: "泗洪县",

            parentId: "321300"

        },

        {

            id: "330102",

            value: "上城区",

            parentId: "330100"

        },

        {

            id: "330103",

            value: "下城区",

            parentId: "330100"

        },

        {

            id: "330104",

            value: "江干区",

            parentId: "330100"

        },

        {

            id: "330105",

            value: "拱墅区",

            parentId: "330100"

        },

        {

            id: "330106",

            value: "西湖区",

            parentId: "330100"

        },

        {

            id: "330108",

            value: "滨江区",

            parentId: "330100"

        },

        {

            id: "330109",

            value: "萧山区",

            parentId: "330100"

        },

        {

            id: "330110",

            value: "余杭区",

            parentId: "330100"

        },

        {

            id: "330122",

            value: "桐庐县",

            parentId: "330100"

        },

        {

            id: "330127",

            value: "淳安县",

            parentId: "330100"

        },

        {

            id: "330182",

            value: "建德市",

            parentId: "330100"

        },

        {

            id: "330183",

            value: "富阳市",

            parentId: "330100"

        },

        {

            id: "330185",

            value: "临安市",

            parentId: "330100"

        },

        {

            id: "330203",

            value: "海曙区",

            parentId: "330200"

        },

        {

            id: "330204",

            value: "江东区",

            parentId: "330200"

        },

        {

            id: "330205",

            value: "江北区",

            parentId: "330200"

        },

        {

            id: "330206",

            value: "北仑区",

            parentId: "330200"

        },

        {

            id: "330211",

            value: "镇海区",

            parentId: "330200"

        },

        {

            id: "330212",

            value: "鄞州区",

            parentId: "330200"

        },

        {

            id: "330225",

            value: "象山县",

            parentId: "330200"

        },

        {

            id: "330226",

            value: "宁海县",

            parentId: "330200"

        },

        {

            id: "330281",

            value: "余姚市",

            parentId: "330200"

        },

        {

            id: "330282",

            value: "慈溪市",

            parentId: "330200"

        },

        {

            id: "330283",

            value: "奉化市",

            parentId: "330200"

        },

        {

            id: "330302",

            value: "鹿城区",

            parentId: "330300"

        },

        {

            id: "330303",

            value: "龙湾区",

            parentId: "330300"

        },

        {

            id: "330304",

            value: "瓯海区",

            parentId: "330300"

        },

        {

            id: "330322",

            value: "洞头县",

            parentId: "330300"

        },

        {

            id: "330324",

            value: "永嘉县",

            parentId: "330300"

        },

        {

            id: "330326",

            value: "平阳县",

            parentId: "330300"

        },

        {

            id: "330327",

            value: "苍南县",

            parentId: "330300"

        },

        {

            id: "330328",

            value: "文成县",

            parentId: "330300"

        },

        {

            id: "330329",

            value: "泰顺县",

            parentId: "330300"

        },

        {

            id: "330381",

            value: "瑞安市",

            parentId: "330300"

        },

        {

            id: "330382",

            value: "乐清市",

            parentId: "330300"

        },

        {

            id: "330402",

            value: "南湖区",

            parentId: "330400"

        },

        {

            id: "330411",

            value: "秀洲区",

            parentId: "330400"

        },

        {

            id: "330421",

            value: "嘉善县",

            parentId: "330400"

        },

        {

            id: "330424",

            value: "海盐县",

            parentId: "330400"

        },

        {

            id: "330481",

            value: "海宁市",

            parentId: "330400"

        },

        {

            id: "330482",

            value: "平湖市",

            parentId: "330400"

        },

        {

            id: "330483",

            value: "桐乡市",

            parentId: "330400"

        },

        {

            id: "330502",

            value: "吴兴区",

            parentId: "330500"

        },

        {

            id: "330503",

            value: "南浔区",

            parentId: "330500"

        },

        {

            id: "330521",

            value: "德清县",

            parentId: "330500"

        },

        {

            id: "330522",

            value: "长兴县",

            parentId: "330500"

        },

        {

            id: "330523",

            value: "安吉县",

            parentId: "330500"

        },

        {

            id: "330602",

            value: "越城区",

            parentId: "330600"

        },

        {

            id: "330621",

            value: "绍兴县",

            parentId: "330600"

        },

        {

            id: "330624",

            value: "新昌县",

            parentId: "330600"

        },

        {

            id: "330681",

            value: "诸暨市",

            parentId: "330600"

        },

        {

            id: "330682",

            value: "上虞市",

            parentId: "330600"

        },

        {

            id: "330683",

            value: "嵊州市",

            parentId: "330600"

        },

        {

            id: "330702",

            value: "婺城区",

            parentId: "330700"

        },

        {

            id: "330703",

            value: "金东区",

            parentId: "330700"

        },

        {

            id: "330723",

            value: "武义县",

            parentId: "330700"

        },

        {

            id: "330726",

            value: "浦江县",

            parentId: "330700"

        },

        {

            id: "330727",

            value: "磐安县",

            parentId: "330700"

        },

        {

            id: "330781",

            value: "兰溪市",

            parentId: "330700"

        },

        {

            id: "330782",

            value: "义乌市",

            parentId: "330700"

        },

        {

            id: "330783",

            value: "东阳市",

            parentId: "330700"

        },

        {

            id: "330784",

            value: "永康市",

            parentId: "330700"

        },

        {

            id: "330802",

            value: "柯城区",

            parentId: "330800"

        },

        {

            id: "330803",

            value: "衢江区",

            parentId: "330800"

        },

        {

            id: "330822",

            value: "常山县",

            parentId: "330800"

        },

        {

            id: "330824",

            value: "开化县",

            parentId: "330800"

        },

        {

            id: "330825",

            value: "龙游县",

            parentId: "330800"

        },

        {

            id: "330881",

            value: "江山市",

            parentId: "330800"

        },

        {

            id: "330902",

            value: "定海区",

            parentId: "330900"

        },

        {

            id: "330903",

            value: "普陀区",

            parentId: "330900"

        },

        {

            id: "330921",

            value: "岱山县",

            parentId: "330900"

        },

        {

            id: "330922",

            value: "嵊泗县",

            parentId: "330900"

        },

        {

            id: "331002",

            value: "椒江区",

            parentId: "331000"

        },

        {

            id: "331003",

            value: "黄岩区",

            parentId: "331000"

        },

        {

            id: "331004",

            value: "路桥区",

            parentId: "331000"

        },

        {

            id: "331021",

            value: "玉环县",

            parentId: "331000"

        },

        {

            id: "331022",

            value: "三门县",

            parentId: "331000"

        },

        {

            id: "331023",

            value: "天台县",

            parentId: "331000"

        },

        {

            id: "331024",

            value: "仙居县",

            parentId: "331000"

        },

        {

            id: "331081",

            value: "温岭市",

            parentId: "331000"

        },

        {

            id: "331082",

            value: "临海市",

            parentId: "331000"

        },

        {

            id: "331102",

            value: "莲都区",

            parentId: "331100"

        },

        {

            id: "331121",

            value: "青田县",

            parentId: "331100"

        },

        {

            id: "331122",

            value: "缙云县",

            parentId: "331100"

        },

        {

            id: "331123",

            value: "遂昌县",

            parentId: "331100"

        },

        {

            id: "331124",

            value: "松阳县",

            parentId: "331100"

        },

        {

            id: "331125",

            value: "云和县",

            parentId: "331100"

        },

        {

            id: "331126",

            value: "庆元县",

            parentId: "331100"

        },

        {

            id: "331127",

            value: "景宁畲族自治县",

            parentId: "331100"

        },

        {

            id: "331181",

            value: "龙泉市",

            parentId: "331100"

        },

        {

            id: "340102",

            value: "瑶海区",

            parentId: "340100"

        },

        {

            id: "340103",

            value: "庐阳区",

            parentId: "340100"

        },

        {

            id: "340104",

            value: "蜀山区",

            parentId: "340100"

        },

        {

            id: "340111",

            value: "包河区",

            parentId: "340100"

        },

        {

            id: "340121",

            value: "长丰县",

            parentId: "340100"

        },

        {

            id: "340122",

            value: "肥东县",

            parentId: "340100"

        },

        {

            id: "340123",

            value: "肥西县",

            parentId: "340100"

        },

        {

            id: "340124",

            value: "庐江县",

            parentId: "340100"

        },

        {

            id: "340181",

            value: "巢湖市",

            parentId: "340100"

        },

        {

            id: "340202",

            value: "镜湖区",

            parentId: "340200"

        },

        {

            id: "340203",

            value: "弋江区",

            parentId: "340200"

        },

        {

            id: "340207",

            value: "鸠江区",

            parentId: "340200"

        },

        {

            id: "340208",

            value: "三山区",

            parentId: "340200"

        },

        {

            id: "340221",

            value: "芜湖县",

            parentId: "340200"

        },

        {

            id: "340222",

            value: "繁昌县",

            parentId: "340200"

        },

        {

            id: "340223",

            value: "南陵县",

            parentId: "340200"

        },

        {

            id: "340225",

            value: "无为县",

            parentId: "340200"

        },

        {

            id: "340302",

            value: "龙子湖区",

            parentId: "340300"

        },

        {

            id: "340303",

            value: "蚌山区",

            parentId: "340300"

        },

        {

            id: "340304",

            value: "禹会区",

            parentId: "340300"

        },

        {

            id: "340311",

            value: "淮上区",

            parentId: "340300"

        },

        {

            id: "340321",

            value: "怀远县",

            parentId: "340300"

        },

        {

            id: "340322",

            value: "五河县",

            parentId: "340300"

        },

        {

            id: "340323",

            value: "固镇县",

            parentId: "340300"

        },

        {

            id: "340402",

            value: "大通区",

            parentId: "340400"

        },

        {

            id: "340403",

            value: "田家庵区",

            parentId: "340400"

        },

        {

            id: "340404",

            value: "谢家集区",

            parentId: "340400"

        },

        {

            id: "340405",

            value: "八公山区",

            parentId: "340400"

        },

        {

            id: "340406",

            value: "潘集区",

            parentId: "340400"

        },

        {

            id: "340421",

            value: "凤台县",

            parentId: "340400"

        },

        {

            id: "340503",

            value: "花山区",

            parentId: "340500"

        },

        {

            id: "340504",

            value: "雨山区",

            parentId: "340500"

        },

        {

            id: "340521",

            value: "当涂县",

            parentId: "340500"

        },

        {

            id: "340522",

            value: "含山县",

            parentId: "340500"

        },

        {

            id: "340523",

            value: "和县",

            parentId: "340500"

        },

        {

            id: "340596",

            value: "博望区",

            parentId: "340500"

        },

        {

            id: "340602",

            value: "杜集区",

            parentId: "340600"

        },

        {

            id: "340603",

            value: "相山区",

            parentId: "340600"

        },

        {

            id: "340604",

            value: "烈山区",

            parentId: "340600"

        },

        {

            id: "340621",

            value: "濉溪县",

            parentId: "340600"

        },

        {

            id: "340702",

            value: "铜官山区",

            parentId: "340700"

        },

        {

            id: "340703",

            value: "狮子山区",

            parentId: "340700"

        },

        {

            id: "340711",

            value: "郊区",

            parentId: "340700"

        },

        {

            id: "340721",

            value: "铜陵县",

            parentId: "340700"

        },

        {

            id: "340802",

            value: "迎江区",

            parentId: "340800"

        },

        {

            id: "340803",

            value: "大观区",

            parentId: "340800"

        },

        {

            id: "340811",

            value: "宜秀区",

            parentId: "340800"

        },

        {

            id: "340822",

            value: "怀宁县",

            parentId: "340800"

        },

        {

            id: "340823",

            value: "枞阳县",

            parentId: "340800"

        },

        {

            id: "340824",

            value: "潜山县",

            parentId: "340800"

        },

        {

            id: "340825",

            value: "太湖县",

            parentId: "340800"

        },

        {

            id: "340826",

            value: "宿松县",

            parentId: "340800"

        },

        {

            id: "340827",

            value: "望江县",

            parentId: "340800"

        },

        {

            id: "340828",

            value: "岳西县",

            parentId: "340800"

        },

        {

            id: "340881",

            value: "桐城市",

            parentId: "340800"

        },

        {

            id: "341002",

            value: "屯溪区",

            parentId: "341000"

        },

        {

            id: "341003",

            value: "黄山区",

            parentId: "341000"

        },

        {

            id: "341004",

            value: "徽州区",

            parentId: "341000"

        },

        {

            id: "341021",

            value: "歙县",

            parentId: "341000"

        },

        {

            id: "341022",

            value: "休宁县",

            parentId: "341000"

        },

        {

            id: "341023",

            value: "黟县",

            parentId: "341000"

        },

        {

            id: "341024",

            value: "祁门县",

            parentId: "341000"

        },

        {

            id: "341102",

            value: "琅琊区",

            parentId: "341100"

        },

        {

            id: "341103",

            value: "南谯区",

            parentId: "341100"

        },

        {

            id: "341122",

            value: "来安县",

            parentId: "341100"

        },

        {

            id: "341124",

            value: "全椒县",

            parentId: "341100"

        },

        {

            id: "341125",

            value: "定远县",

            parentId: "341100"

        },

        {

            id: "341126",

            value: "凤阳县",

            parentId: "341100"

        },

        {

            id: "341181",

            value: "天长市",

            parentId: "341100"

        },

        {

            id: "341182",

            value: "明光市",

            parentId: "341100"

        },

        {

            id: "341202",

            value: "颍州区",

            parentId: "341200"

        },

        {

            id: "341203",

            value: "颍东区",

            parentId: "341200"

        },

        {

            id: "341204",

            value: "颍泉区",

            parentId: "341200"

        },

        {

            id: "341221",

            value: "临泉县",

            parentId: "341200"

        },

        {

            id: "341222",

            value: "太和县",

            parentId: "341200"

        },

        {

            id: "341225",

            value: "阜南县",

            parentId: "341200"

        },

        {

            id: "341226",

            value: "颍上县",

            parentId: "341200"

        },

        {

            id: "341282",

            value: "界首市",

            parentId: "341200"

        },

        {

            id: "341302",

            value: "埇桥区",

            parentId: "341300"

        },

        {

            id: "341321",

            value: "砀山县",

            parentId: "341300"

        },

        {

            id: "341322",

            value: "萧县",

            parentId: "341300"

        },

        {

            id: "341323",

            value: "灵璧县",

            parentId: "341300"

        },

        {

            id: "341324",

            value: "泗县",

            parentId: "341300"

        },

        {

            id: "341502",

            value: "金安区",

            parentId: "341500"

        },

        {

            id: "341503",

            value: "裕安区",

            parentId: "341500"

        },

        {

            id: "341521",

            value: "寿县",

            parentId: "341500"

        },

        {

            id: "341522",

            value: "霍邱县",

            parentId: "341500"

        },

        {

            id: "341523",

            value: "舒城县",

            parentId: "341500"

        },

        {

            id: "341524",

            value: "金寨县",

            parentId: "341500"

        },

        {

            id: "341525",

            value: "霍山县",

            parentId: "341500"

        },

        {

            id: "341602",

            value: "谯城区",

            parentId: "341600"

        },

        {

            id: "341621",

            value: "涡阳县",

            parentId: "341600"

        },

        {

            id: "341622",

            value: "蒙城县",

            parentId: "341600"

        },

        {

            id: "341623",

            value: "利辛县",

            parentId: "341600"

        },

        {

            id: "341702",

            value: "贵池区",

            parentId: "341700"

        },

        {

            id: "341721",

            value: "东至县",

            parentId: "341700"

        },

        {

            id: "341722",

            value: "石台县",

            parentId: "341700"

        },

        {

            id: "341723",

            value: "青阳县",

            parentId: "341700"

        },

        {

            id: "341802",

            value: "宣州区",

            parentId: "341800"

        },

        {

            id: "341821",

            value: "郎溪县",

            parentId: "341800"

        },

        {

            id: "341822",

            value: "广德县",

            parentId: "341800"

        },

        {

            id: "341823",

            value: "泾县",

            parentId: "341800"

        },

        {

            id: "341824",

            value: "绩溪县",

            parentId: "341800"

        },

        {

            id: "341825",

            value: "旌德县",

            parentId: "341800"

        },

        {

            id: "341881",

            value: "宁国市",

            parentId: "341800"

        },

        {

            id: "350102",

            value: "鼓楼区",

            parentId: "350100"

        },

        {

            id: "350103",

            value: "台江区",

            parentId: "350100"

        },

        {

            id: "350104",

            value: "仓山区",

            parentId: "350100"

        },

        {

            id: "350105",

            value: "马尾区",

            parentId: "350100"

        },

        {

            id: "350111",

            value: "晋安区",

            parentId: "350100"

        },

        {

            id: "350121",

            value: "闽侯县",

            parentId: "350100"

        },

        {

            id: "350122",

            value: "连江县",

            parentId: "350100"

        },

        {

            id: "350123",

            value: "罗源县",

            parentId: "350100"

        },

        {

            id: "350124",

            value: "闽清县",

            parentId: "350100"

        },

        {

            id: "350125",

            value: "永泰县",

            parentId: "350100"

        },

        {

            id: "350128",

            value: "平潭县",

            parentId: "350100"

        },

        {

            id: "350181",

            value: "福清市",

            parentId: "350100"

        },

        {

            id: "350182",

            value: "长乐市",

            parentId: "350100"

        },

        {

            id: "350203",

            value: "思明区",

            parentId: "350200"

        },

        {

            id: "350205",

            value: "海沧区",

            parentId: "350200"

        },

        {

            id: "350206",

            value: "湖里区",

            parentId: "350200"

        },

        {

            id: "350211",

            value: "集美区",

            parentId: "350200"

        },

        {

            id: "350212",

            value: "同安区",

            parentId: "350200"

        },

        {

            id: "350213",

            value: "翔安区",

            parentId: "350200"

        },

        {

            id: "350302",

            value: "城厢区",

            parentId: "350300"

        },

        {

            id: "350303",

            value: "涵江区",

            parentId: "350300"

        },

        {

            id: "350304",

            value: "荔城区",

            parentId: "350300"

        },

        {

            id: "350305",

            value: "秀屿区",

            parentId: "350300"

        },

        {

            id: "350322",

            value: "仙游县",

            parentId: "350300"

        },

        {

            id: "350402",

            value: "梅列区",

            parentId: "350400"

        },

        {

            id: "350403",

            value: "三元区",

            parentId: "350400"

        },

        {

            id: "350421",

            value: "明溪县",

            parentId: "350400"

        },

        {

            id: "350423",

            value: "清流县",

            parentId: "350400"

        },

        {

            id: "350424",

            value: "宁化县",

            parentId: "350400"

        },

        {

            id: "350425",

            value: "大田县",

            parentId: "350400"

        },

        {

            id: "350426",

            value: "尤溪县",

            parentId: "350400"

        },

        {

            id: "350427",

            value: "沙县",

            parentId: "350400"

        },

        {

            id: "350428",

            value: "将乐县",

            parentId: "350400"

        },

        {

            id: "350429",

            value: "泰宁县",

            parentId: "350400"

        },

        {

            id: "350430",

            value: "建宁县",

            parentId: "350400"

        },

        {

            id: "350481",

            value: "永安市",

            parentId: "350400"

        },

        {

            id: "350502",

            value: "鲤城区",

            parentId: "350500"

        },

        {

            id: "350503",

            value: "丰泽区",

            parentId: "350500"

        },

        {

            id: "350504",

            value: "洛江区",

            parentId: "350500"

        },

        {

            id: "350505",

            value: "泉港区",

            parentId: "350500"

        },

        {

            id: "350521",

            value: "惠安县",

            parentId: "350500"

        },

        {

            id: "350524",

            value: "安溪县",

            parentId: "350500"

        },

        {

            id: "350525",

            value: "永春县",

            parentId: "350500"

        },

        {

            id: "350526",

            value: "德化县",

            parentId: "350500"

        },

        {

            id: "350527",

            value: "金门县",

            parentId: "350500"

        },

        {

            id: "350581",

            value: "石狮市",

            parentId: "350500"

        },

        {

            id: "350582",

            value: "晋江市",

            parentId: "350500"

        },

        {

            id: "350583",

            value: "南安市",

            parentId: "350500"

        },

        {

            id: "350602",

            value: "芗城区",

            parentId: "350600"

        },

        {

            id: "350603",

            value: "龙文区",

            parentId: "350600"

        },

        {

            id: "350622",

            value: "云霄县",

            parentId: "350600"

        },

        {

            id: "350623",

            value: "漳浦县",

            parentId: "350600"

        },

        {

            id: "350624",

            value: "诏安县",

            parentId: "350600"

        },

        {

            id: "350625",

            value: "长泰县",

            parentId: "350600"

        },

        {

            id: "350626",

            value: "东山县",

            parentId: "350600"

        },

        {

            id: "350627",

            value: "南靖县",

            parentId: "350600"

        },

        {

            id: "350628",

            value: "平和县",

            parentId: "350600"

        },

        {

            id: "350629",

            value: "华安县",

            parentId: "350600"

        },

        {

            id: "350681",

            value: "龙海市",

            parentId: "350600"

        },

        {

            id: "350702",

            value: "延平区",

            parentId: "350700"

        },

        {

            id: "350721",

            value: "顺昌县",

            parentId: "350700"

        },

        {

            id: "350722",

            value: "浦城县",

            parentId: "350700"

        },

        {

            id: "350723",

            value: "光泽县",

            parentId: "350700"

        },

        {

            id: "350724",

            value: "松溪县",

            parentId: "350700"

        },

        {

            id: "350725",

            value: "政和县",

            parentId: "350700"

        },

        {

            id: "350781",

            value: "邵武市",

            parentId: "350700"

        },

        {

            id: "350782",

            value: "武夷山市",

            parentId: "350700"

        },

        {

            id: "350783",

            value: "建瓯市",

            parentId: "350700"

        },

        {

            id: "350784",

            value: "建阳市",

            parentId: "350700"

        },

        {

            id: "350802",

            value: "新罗区",

            parentId: "350800"

        },

        {

            id: "350821",

            value: "长汀县",

            parentId: "350800"

        },

        {

            id: "350822",

            value: "永定县",

            parentId: "350800"

        },

        {

            id: "350823",

            value: "上杭县",

            parentId: "350800"

        },

        {

            id: "350824",

            value: "武平县",

            parentId: "350800"

        },

        {

            id: "350825",

            value: "连城县",

            parentId: "350800"

        },

        {

            id: "350881",

            value: "漳平市",

            parentId: "350800"

        },

        {

            id: "350902",

            value: "蕉城区",

            parentId: "350900"

        },

        {

            id: "350921",

            value: "霞浦县",

            parentId: "350900"

        },

        {

            id: "350922",

            value: "古田县",

            parentId: "350900"

        },

        {

            id: "350923",

            value: "屏南县",

            parentId: "350900"

        },

        {

            id: "350924",

            value: "寿宁县",

            parentId: "350900"

        },

        {

            id: "350925",

            value: "周宁县",

            parentId: "350900"

        },

        {

            id: "350926",

            value: "柘荣县",

            parentId: "350900"

        },

        {

            id: "350981",

            value: "福安市",

            parentId: "350900"

        },

        {

            id: "350982",

            value: "福鼎市",

            parentId: "350900"

        },

        {

            id: "360102",

            value: "东湖区",

            parentId: "360100"

        },

        {

            id: "360103",

            value: "西湖区",

            parentId: "360100"

        },

        {

            id: "360104",

            value: "青云谱区",

            parentId: "360100"

        },

        {

            id: "360105",

            value: "湾里区",

            parentId: "360100"

        },

        {

            id: "360111",

            value: "青山湖区",

            parentId: "360100"

        },

        {

            id: "360121",

            value: "南昌县",

            parentId: "360100"

        },

        {

            id: "360122",

            value: "新建县",

            parentId: "360100"

        },

        {

            id: "360123",

            value: "安义县",

            parentId: "360100"

        },

        {

            id: "360124",

            value: "进贤县",

            parentId: "360100"

        },

        {

            id: "360202",

            value: "昌江区",

            parentId: "360200"

        },

        {

            id: "360203",

            value: "珠山区",

            parentId: "360200"

        },

        {

            id: "360222",

            value: "浮梁县",

            parentId: "360200"

        },

        {

            id: "360281",

            value: "乐平市",

            parentId: "360200"

        },

        {

            id: "360302",

            value: "安源区",

            parentId: "360300"

        },

        {

            id: "360313",

            value: "湘东区",

            parentId: "360300"

        },

        {

            id: "360321",

            value: "莲花县",

            parentId: "360300"

        },

        {

            id: "360322",

            value: "上栗县",

            parentId: "360300"

        },

        {

            id: "360323",

            value: "芦溪县",

            parentId: "360300"

        },

        {

            id: "360402",

            value: "庐山区",

            parentId: "360400"

        },

        {

            id: "360403",

            value: "浔阳区",

            parentId: "360400"

        },

        {

            id: "360421",

            value: "九江县",

            parentId: "360400"

        },

        {

            id: "360423",

            value: "武宁县",

            parentId: "360400"

        },

        {

            id: "360424",

            value: "修水县",

            parentId: "360400"

        },

        {

            id: "360425",

            value: "永修县",

            parentId: "360400"

        },

        {

            id: "360426",

            value: "德安县",

            parentId: "360400"

        },

        {

            id: "360427",

            value: "星子县",

            parentId: "360400"

        },

        {

            id: "360428",

            value: "都昌县",

            parentId: "360400"

        },

        {

            id: "360429",

            value: "湖口县",

            parentId: "360400"

        },

        {

            id: "360430",

            value: "彭泽县",

            parentId: "360400"

        },

        {

            id: "360481",

            value: "瑞昌市",

            parentId: "360400"

        },

        {

            id: "360482",

            value: "共青城市",

            parentId: "360400"

        },

        {

            id: "360502",

            value: "渝水区",

            parentId: "360500"

        },

        {

            id: "360521",

            value: "分宜县",

            parentId: "360500"

        },

        {

            id: "360602",

            value: "月湖区",

            parentId: "360600"

        },

        {

            id: "360622",

            value: "余江县",

            parentId: "360600"

        },

        {

            id: "360681",

            value: "贵溪市",

            parentId: "360600"

        },

        {

            id: "360702",

            value: "章贡区",

            parentId: "360700"

        },

        {

            id: "360721",

            value: "赣县",

            parentId: "360700"

        },

        {

            id: "360722",

            value: "信丰县",

            parentId: "360700"

        },

        {

            id: "360723",

            value: "大余县",

            parentId: "360700"

        },

        {

            id: "360724",

            value: "上犹县",

            parentId: "360700"

        },

        {

            id: "360725",

            value: "崇义县",

            parentId: "360700"

        },

        {

            id: "360726",

            value: "安远县",

            parentId: "360700"

        },

        {

            id: "360727",

            value: "龙南县",

            parentId: "360700"

        },

        {

            id: "360728",

            value: "定南县",

            parentId: "360700"

        },

        {

            id: "360729",

            value: "全南县",

            parentId: "360700"

        },

        {

            id: "360730",

            value: "宁都县",

            parentId: "360700"

        },

        {

            id: "360731",

            value: "于都县",

            parentId: "360700"

        },

        {

            id: "360732",

            value: "兴国县",

            parentId: "360700"

        },

        {

            id: "360733",

            value: "会昌县",

            parentId: "360700"

        },

        {

            id: "360734",

            value: "寻乌县",

            parentId: "360700"

        },

        {

            id: "360735",

            value: "石城县",

            parentId: "360700"

        },

        {

            id: "360781",

            value: "瑞金市",

            parentId: "360700"

        },

        {

            id: "360782",

            value: "南康市",

            parentId: "360700"

        },

        {

            id: "360802",

            value: "吉州区",

            parentId: "360800"

        },

        {

            id: "360803",

            value: "青原区",

            parentId: "360800"

        },

        {

            id: "360821",

            value: "吉安县",

            parentId: "360800"

        },

        {

            id: "360822",

            value: "吉水县",

            parentId: "360800"

        },

        {

            id: "360823",

            value: "峡江县",

            parentId: "360800"

        },

        {

            id: "360824",

            value: "新干县",

            parentId: "360800"

        },

        {

            id: "360825",

            value: "永丰县",

            parentId: "360800"

        },

        {

            id: "360826",

            value: "泰和县",

            parentId: "360800"

        },

        {

            id: "360827",

            value: "遂川县",

            parentId: "360800"

        },

        {

            id: "360828",

            value: "万安县",

            parentId: "360800"

        },

        {

            id: "360829",

            value: "安福县",

            parentId: "360800"

        },

        {

            id: "360830",

            value: "永新县",

            parentId: "360800"

        },

        {

            id: "360881",

            value: "井冈山市",

            parentId: "360800"

        },

        {

            id: "360902",

            value: "袁州区",

            parentId: "360900"

        },

        {

            id: "360921",

            value: "奉新县",

            parentId: "360900"

        },

        {

            id: "360922",

            value: "万载县",

            parentId: "360900"

        },

        {

            id: "360923",

            value: "上高县",

            parentId: "360900"

        },

        {

            id: "360924",

            value: "宜丰县",

            parentId: "360900"

        },

        {

            id: "360925",

            value: "靖安县",

            parentId: "360900"

        },

        {

            id: "360926",

            value: "铜鼓县",

            parentId: "360900"

        },

        {

            id: "360981",

            value: "丰城市",

            parentId: "360900"

        },

        {

            id: "360982",

            value: "樟树市",

            parentId: "360900"

        },

        {

            id: "360983",

            value: "高安市",

            parentId: "360900"

        },

        {

            id: "361002",

            value: "临川区",

            parentId: "361000"

        },

        {

            id: "361021",

            value: "南城县",

            parentId: "361000"

        },

        {

            id: "361022",

            value: "黎川县",

            parentId: "361000"

        },

        {

            id: "361023",

            value: "南丰县",

            parentId: "361000"

        },

        {

            id: "361024",

            value: "崇仁县",

            parentId: "361000"

        },

        {

            id: "361025",

            value: "乐安县",

            parentId: "361000"

        },

        {

            id: "361026",

            value: "宜黄县",

            parentId: "361000"

        },

        {

            id: "361027",

            value: "金溪县",

            parentId: "361000"

        },

        {

            id: "361028",

            value: "资溪县",

            parentId: "361000"

        },

        {

            id: "361029",

            value: "东乡县",

            parentId: "361000"

        },

        {

            id: "361030",

            value: "广昌县",

            parentId: "361000"

        },

        {

            id: "361102",

            value: "信州区",

            parentId: "361100"

        },

        {

            id: "361121",

            value: "上饶县",

            parentId: "361100"

        },

        {

            id: "361122",

            value: "广丰县",

            parentId: "361100"

        },

        {

            id: "361123",

            value: "玉山县",

            parentId: "361100"

        },

        {

            id: "361124",

            value: "铅山县",

            parentId: "361100"

        },

        {

            id: "361125",

            value: "横峰县",

            parentId: "361100"

        },

        {

            id: "361126",

            value: "弋阳县",

            parentId: "361100"

        },

        {

            id: "361127",

            value: "余干县",

            parentId: "361100"

        },

        {

            id: "361128",

            value: "鄱阳县",

            parentId: "361100"

        },

        {

            id: "361129",

            value: "万年县",

            parentId: "361100"

        },

        {

            id: "361130",

            value: "婺源县",

            parentId: "361100"

        },

        {

            id: "361181",

            value: "德兴市",

            parentId: "361100"

        },

        {

            id: "370102",

            value: "历下区",

            parentId: "370100"

        },

        {

            id: "370103",

            value: "市中区",

            parentId: "370100"

        },

        {

            id: "370104",

            value: "槐荫区",

            parentId: "370100"

        },

        {

            id: "370105",

            value: "天桥区",

            parentId: "370100"

        },

        {

            id: "370112",

            value: "历城区",

            parentId: "370100"

        },

        {

            id: "370113",

            value: "长清区",

            parentId: "370100"

        },

        {

            id: "370124",

            value: "平阴县",

            parentId: "370100"

        },

        {

            id: "370125",

            value: "济阳县",

            parentId: "370100"

        },

        {

            id: "370126",

            value: "商河县",

            parentId: "370100"

        },

        {

            id: "370181",

            value: "章丘市",

            parentId: "370100"

        },

        {

            id: "370202",

            value: "市南区",

            parentId: "370200"

        },

        {

            id: "370203",

            value: "市北区",

            parentId: "370200"

        },

        {

            id: "370205",

            value: "四方区",

            parentId: "370200"

        },

        {

            id: "370211",

            value: "黄岛区",

            parentId: "370200"

        },

        {

            id: "370212",

            value: "崂山区",

            parentId: "370200"

        },

        {

            id: "370213",

            value: "李沧区",

            parentId: "370200"

        },

        {

            id: "370214",

            value: "城阳区",

            parentId: "370200"

        },

        {

            id: "370281",

            value: "胶州市",

            parentId: "370200"

        },

        {

            id: "370282",

            value: "即墨市",

            parentId: "370200"

        },

        {

            id: "370283",

            value: "平度市",

            parentId: "370200"

        },

        {

            id: "370284",

            value: "胶南市",

            parentId: "370200"

        },

        {

            id: "370285",

            value: "莱西市",

            parentId: "370200"

        },

        {

            id: "370302",

            value: "淄川区",

            parentId: "370300"

        },

        {

            id: "370303",

            value: "张店区",

            parentId: "370300"

        },

        {

            id: "370304",

            value: "博山区",

            parentId: "370300"

        },

        {

            id: "370305",

            value: "临淄区",

            parentId: "370300"

        },

        {

            id: "370306",

            value: "周村区",

            parentId: "370300"

        },

        {

            id: "370321",

            value: "桓台县",

            parentId: "370300"

        },

        {

            id: "370322",

            value: "高青县",

            parentId: "370300"

        },

        {

            id: "370323",

            value: "沂源县",

            parentId: "370300"

        },

        {

            id: "370402",

            value: "市中区",

            parentId: "370400"

        },

        {

            id: "370403",

            value: "薛城区",

            parentId: "370400"

        },

        {

            id: "370404",

            value: "峄城区",

            parentId: "370400"

        },

        {

            id: "370405",

            value: "台儿庄区",

            parentId: "370400"

        },

        {

            id: "370406",

            value: "山亭区",

            parentId: "370400"

        },

        {

            id: "370481",

            value: "滕州市",

            parentId: "370400"

        },

        {

            id: "370502",

            value: "东营区",

            parentId: "370500"

        },

        {

            id: "370503",

            value: "河口区",

            parentId: "370500"

        },

        {

            id: "370521",

            value: "垦利县",

            parentId: "370500"

        },

        {

            id: "370522",

            value: "利津县",

            parentId: "370500"

        },

        {

            id: "370523",

            value: "广饶县",

            parentId: "370500"

        },

        {

            id: "370602",

            value: "芝罘区",

            parentId: "370600"

        },

        {

            id: "370611",

            value: "福山区",

            parentId: "370600"

        },

        {

            id: "370612",

            value: "牟平区",

            parentId: "370600"

        },

        {

            id: "370613",

            value: "莱山区",

            parentId: "370600"

        },

        {

            id: "370634",

            value: "长岛县",

            parentId: "370600"

        },

        {

            id: "370681",

            value: "龙口市",

            parentId: "370600"

        },

        {

            id: "370682",

            value: "莱阳市",

            parentId: "370600"

        },

        {

            id: "370683",

            value: "莱州市",

            parentId: "370600"

        },

        {

            id: "370684",

            value: "蓬莱市",

            parentId: "370600"

        },

        {

            id: "370685",

            value: "招远市",

            parentId: "370600"

        },

        {

            id: "370686",

            value: "栖霞市",

            parentId: "370600"

        },

        {

            id: "370687",

            value: "海阳市",

            parentId: "370600"

        },

        {

            id: "370702",

            value: "潍城区",

            parentId: "370700"

        },

        {

            id: "370703",

            value: "寒亭区",

            parentId: "370700"

        },

        {

            id: "370704",

            value: "坊子区",

            parentId: "370700"

        },

        {

            id: "370705",

            value: "奎文区",

            parentId: "370700"

        },

        {

            id: "370724",

            value: "临朐县",

            parentId: "370700"

        },

        {

            id: "370725",

            value: "昌乐县",

            parentId: "370700"

        },

        {

            id: "370781",

            value: "青州市",

            parentId: "370700"

        },

        {

            id: "370782",

            value: "诸城市",

            parentId: "370700"

        },

        {

            id: "370783",

            value: "寿光市",

            parentId: "370700"

        },

        {

            id: "370784",

            value: "安丘市",

            parentId: "370700"

        },

        {

            id: "370785",

            value: "高密市",

            parentId: "370700"

        },

        {

            id: "370786",

            value: "昌邑市",

            parentId: "370700"

        },

        {

            id: "370802",

            value: "市中区",

            parentId: "370800"

        },

        {

            id: "370811",

            value: "任城区",

            parentId: "370800"

        },

        {

            id: "370826",

            value: "微山县",

            parentId: "370800"

        },

        {

            id: "370827",

            value: "鱼台县",

            parentId: "370800"

        },

        {

            id: "370828",

            value: "金乡县",

            parentId: "370800"

        },

        {

            id: "370829",

            value: "嘉祥县",

            parentId: "370800"

        },

        {

            id: "370830",

            value: "汶上县",

            parentId: "370800"

        },

        {

            id: "370831",

            value: "泗水县",

            parentId: "370800"

        },

        {

            id: "370832",

            value: "梁山县",

            parentId: "370800"

        },

        {

            id: "370881",

            value: "曲阜市",

            parentId: "370800"

        },

        {

            id: "370882",

            value: "兖州市",

            parentId: "370800"

        },

        {

            id: "370883",

            value: "邹城市",

            parentId: "370800"

        },

        {

            id: "370902",

            value: "泰山区",

            parentId: "370900"

        },

        {

            id: "370911",

            value: "岱岳区",

            parentId: "370900"

        },

        {

            id: "370921",

            value: "宁阳县",

            parentId: "370900"

        },

        {

            id: "370923",

            value: "东平县",

            parentId: "370900"

        },

        {

            id: "370982",

            value: "新泰市",

            parentId: "370900"

        },

        {

            id: "370983",

            value: "肥城市",

            parentId: "370900"

        },

        {

            id: "371002",

            value: "环翠区",

            parentId: "371000"

        },

        {

            id: "371081",

            value: "文登市",

            parentId: "371000"

        },

        {

            id: "371082",

            value: "荣成市",

            parentId: "371000"

        },

        {

            id: "371083",

            value: "乳山市",

            parentId: "371000"

        },

        {

            id: "371102",

            value: "东港区",

            parentId: "371100"

        },

        {

            id: "371103",

            value: "岚山区",

            parentId: "371100"

        },

        {

            id: "371121",

            value: "五莲县",

            parentId: "371100"

        },

        {

            id: "371122",

            value: "莒县",

            parentId: "371100"

        },

        {

            id: "371202",

            value: "莱城区",

            parentId: "371200"

        },

        {

            id: "371203",

            value: "钢城区",

            parentId: "371200"

        },

        {

            id: "371302",

            value: "兰山区",

            parentId: "371300"

        },

        {

            id: "371311",

            value: "罗庄区",

            parentId: "371300"

        },

        {

            id: "371312",

            value: "河东区",

            parentId: "371300"

        },

        {

            id: "371321",

            value: "沂南县",

            parentId: "371300"

        },

        {

            id: "371322",

            value: "郯城县",

            parentId: "371300"

        },

        {

            id: "371323",

            value: "沂水县",

            parentId: "371300"

        },

        {

            id: "371324",

            value: "苍山县",

            parentId: "371300"

        },

        {

            id: "371325",

            value: "费县",

            parentId: "371300"

        },

        {

            id: "371326",

            value: "平邑县",

            parentId: "371300"

        },

        {

            id: "371327",

            value: "莒南县",

            parentId: "371300"

        },

        {

            id: "371328",

            value: "蒙阴县",

            parentId: "371300"

        },

        {

            id: "371329",

            value: "临沭县",

            parentId: "371300"

        },

        {

            id: "371402",

            value: "德城区",

            parentId: "371400"

        },

        {

            id: "371421",

            value: "陵县",

            parentId: "371400"

        },

        {

            id: "371422",

            value: "宁津县",

            parentId: "371400"

        },

        {

            id: "371423",

            value: "庆云县",

            parentId: "371400"

        },

        {

            id: "371424",

            value: "临邑县",

            parentId: "371400"

        },

        {

            id: "371425",

            value: "齐河县",

            parentId: "371400"

        },

        {

            id: "371426",

            value: "平原县",

            parentId: "371400"

        },

        {

            id: "371427",

            value: "夏津县",

            parentId: "371400"

        },

        {

            id: "371428",

            value: "武城县",

            parentId: "371400"

        },

        {

            id: "371481",

            value: "乐陵市",

            parentId: "371400"

        },

        {

            id: "371482",

            value: "禹城市",

            parentId: "371400"

        },

        {

            id: "371502",

            value: "东昌府区",

            parentId: "371500"

        },

        {

            id: "371521",

            value: "阳谷县",

            parentId: "371500"

        },

        {

            id: "371522",

            value: "莘县",

            parentId: "371500"

        },

        {

            id: "371523",

            value: "茌平县",

            parentId: "371500"

        },

        {

            id: "371524",

            value: "东阿县",

            parentId: "371500"

        },

        {

            id: "371525",

            value: "冠县",

            parentId: "371500"

        },

        {

            id: "371526",

            value: "高唐县",

            parentId: "371500"

        },

        {

            id: "371581",

            value: "临清市",

            parentId: "371500"

        },

        {

            id: "371602",

            value: "滨城区",

            parentId: "371600"

        },

        {

            id: "371621",

            value: "惠民县",

            parentId: "371600"

        },

        {

            id: "371622",

            value: "阳信县",

            parentId: "371600"

        },

        {

            id: "371623",

            value: "无棣县",

            parentId: "371600"

        },

        {

            id: "371624",

            value: "沾化县",

            parentId: "371600"

        },

        {

            id: "371625",

            value: "博兴县",

            parentId: "371600"

        },

        {

            id: "371626",

            value: "邹平县",

            parentId: "371600"

        },

        {

            id: "371702",

            value: "牡丹区",

            parentId: "371700"

        },

        {

            id: "371721",

            value: "曹县",

            parentId: "371700"

        },

        {

            id: "371722",

            value: "单县",

            parentId: "371700"

        },

        {

            id: "371723",

            value: "成武县",

            parentId: "371700"

        },

        {

            id: "371724",

            value: "巨野县",

            parentId: "371700"

        },

        {

            id: "371725",

            value: "郓城县",

            parentId: "371700"

        },

        {

            id: "371726",

            value: "鄄城县",

            parentId: "371700"

        },

        {

            id: "371727",

            value: "定陶县",

            parentId: "371700"

        },

        {

            id: "371728",

            value: "东明县",

            parentId: "371700"

        },

        {

            id: "410102",

            value: "中原区",

            parentId: "410100"

        },

        {

            id: "410103",

            value: "二七区",

            parentId: "410100"

        },

        {

            id: "410104",

            value: "管城回族区",

            parentId: "410100"

        },

        {

            id: "410105",

            value: "金水区",

            parentId: "410100"

        },

        {

            id: "410106",

            value: "上街区",

            parentId: "410100"

        },

        {

            id: "410108",

            value: "惠济区",

            parentId: "410100"

        },

        {

            id: "410122",

            value: "中牟县",

            parentId: "410100"

        },

        {

            id: "410181",

            value: "巩义市",

            parentId: "410100"

        },

        {

            id: "410182",

            value: "荥阳市",

            parentId: "410100"

        },

        {

            id: "410183",

            value: "新密市",

            parentId: "410100"

        },

        {

            id: "410184",

            value: "新郑市",

            parentId: "410100"

        },

        {

            id: "410185",

            value: "登封市",

            parentId: "410100"

        },

        {

            id: "410202",

            value: "龙亭区",

            parentId: "410200"

        },

        {

            id: "410203",

            value: "顺河回族区",

            parentId: "410200"

        },

        {

            id: "410204",

            value: "鼓楼区",

            parentId: "410200"

        },

        {

            id: "410205",

            value: "禹王台区",

            parentId: "410200"

        },

        {

            id: "410211",

            value: "金明区",

            parentId: "410200"

        },

        {

            id: "410221",

            value: "杞县",

            parentId: "410200"

        },

        {

            id: "410222",

            value: "通许县",

            parentId: "410200"

        },

        {

            id: "410223",

            value: "尉氏县",

            parentId: "410200"

        },

        {

            id: "410224",

            value: "开封县",

            parentId: "410200"

        },

        {

            id: "410225",

            value: "兰考县",

            parentId: "410200"

        },

        {

            id: "410302",

            value: "老城区",

            parentId: "410300"

        },

        {

            id: "410303",

            value: "西工区",

            parentId: "410300"

        },

        {

            id: "410304",

            value: "瀍河回族区",

            parentId: "410300"

        },

        {

            id: "410305",

            value: "涧西区",

            parentId: "410300"

        },

        {

            id: "410306",

            value: "吉利区",

            parentId: "410300"

        },

        {

            id: "410311",

            value: "洛龙区",

            parentId: "410300"

        },

        {

            id: "410322",

            value: "孟津县",

            parentId: "410300"

        },

        {

            id: "410323",

            value: "新安县",

            parentId: "410300"

        },

        {

            id: "410324",

            value: "栾川县",

            parentId: "410300"

        },

        {

            id: "410325",

            value: "嵩县",

            parentId: "410300"

        },

        {

            id: "410326",

            value: "汝阳县",

            parentId: "410300"

        },

        {

            id: "410327",

            value: "宜阳县",

            parentId: "410300"

        },

        {

            id: "410328",

            value: "洛宁县",

            parentId: "410300"

        },

        {

            id: "410329",

            value: "伊川县",

            parentId: "410300"

        },

        {

            id: "410381",

            value: "偃师市",

            parentId: "410300"

        },

        {

            id: "410402",

            value: "新华区",

            parentId: "410400"

        },

        {

            id: "410403",

            value: "卫东区",

            parentId: "410400"

        },

        {

            id: "410404",

            value: "石龙区",

            parentId: "410400"

        },



        {

            id: "410411",

            value: "湛河区",

            parentId: "410400"

        },

        {

            id: "410421",

            value: "宝丰县",

            parentId: "410400"

        },

        {

            id: "410422",

            value: "叶县",

            parentId: "410400"

        },

        {

            id: "410423",

            value: "鲁山县",

            parentId: "410400"

        },

        {

            id: "410425",

            value: "郏县",

            parentId: "410400"

        },

        {

            id: "410481",

            value: "舞钢市",

            parentId: "410400"

        },

        {

            id: "410482",

            value: "汝州市",

            parentId: "410400"

        },

        {

            id: "410502",

            value: "文峰区",

            parentId: "410500"

        },

        {

            id: "410503",

            value: "北关区",

            parentId: "410500"

        },

        {

            id: "410505",

            value: "殷都区",

            parentId: "410500"

        },

        {

            id: "410506",

            value: "龙安区",

            parentId: "410500"

        },

        {

            id: "410522",

            value: "安阳县",

            parentId: "410500"

        },

        {

            id: "410523",

            value: "汤阴县",

            parentId: "410500"

        },

        {

            id: "410526",

            value: "滑县",

            parentId: "410500"

        },

        {

            id: "410527",

            value: "内黄县",

            parentId: "410500"

        },

        {

            id: "410581",

            value: "林州市",

            parentId: "410500"

        },

        {

            id: "410602",

            value: "鹤山区",

            parentId: "410600"

        },

        {

            id: "410603",

            value: "山城区",

            parentId: "410600"

        },

        {

            id: "410611",

            value: "淇滨区",

            parentId: "410600"

        },

        {

            id: "410621",

            value: "浚县",

            parentId: "410600"

        },

        {

            id: "410622",

            value: "淇县",

            parentId: "410600"

        },

        {

            id: "410702",

            value: "红旗区",

            parentId: "410700"

        },

        {

            id: "410703",

            value: "卫滨区",

            parentId: "410700"

        },

        {

            id: "410704",

            value: "凤泉区",

            parentId: "410700"

        },

        {

            id: "410711",

            value: "牧野区",

            parentId: "410700"

        },

        {

            id: "410721",

            value: "新乡县",

            parentId: "410700"

        },

        {

            id: "410724",

            value: "获嘉县",

            parentId: "410700"

        },

        {

            id: "410725",

            value: "原阳县",

            parentId: "410700"

        },

        {

            id: "410726",

            value: "延津县",

            parentId: "410700"

        },

        {

            id: "410727",

            value: "封丘县",

            parentId: "410700"

        },

        {

            id: "410728",

            value: "长垣县",

            parentId: "410700"

        },

        {

            id: "410781",

            value: "卫辉市",

            parentId: "410700"

        },

        {

            id: "410782",

            value: "辉县市",

            parentId: "410700"

        },

        {

            id: "410802",

            value: "解放区",

            parentId: "410800"

        },

        {

            id: "410803",

            value: "中站区",

            parentId: "410800"

        },

        {

            id: "410804",

            value: "马村区",

            parentId: "410800"

        },

        {

            id: "410811",

            value: "山阳区",

            parentId: "410800"

        },

        {

            id: "410821",

            value: "修武县",

            parentId: "410800"

        },

        {

            id: "410822",

            value: "博爱县",

            parentId: "410800"

        },

        {

            id: "410823",

            value: "武陟县",

            parentId: "410800"

        },

        {

            id: "410825",

            value: "温县",

            parentId: "410800"

        },

        {

            id: "410882",

            value: "沁阳市",

            parentId: "410800"

        },

        {

            id: "410883",

            value: "孟州市",

            parentId: "410800"

        },

        {

            id: "410902",

            value: "华龙区",

            parentId: "410900"

        },

        {

            id: "410922",

            value: "清丰县",

            parentId: "410900"

        },

        {

            id: "410923",

            value: "南乐县",

            parentId: "410900"

        },

        {

            id: "410926",

            value: "范县",

            parentId: "410900"

        },

        {

            id: "410927",

            value: "台前县",

            parentId: "410900"

        },

        {

            id: "410928",

            value: "濮阳县",

            parentId: "410900"

        },

        {

            id: "411002",

            value: "魏都区",

            parentId: "411000"

        },

        {

            id: "411023",

            value: "许昌县",

            parentId: "411000"

        },

        {

            id: "411024",

            value: "鄢陵县",

            parentId: "411000"

        },

        {

            id: "411025",

            value: "襄城县",

            parentId: "411000"

        },

        {

            id: "411081",

            value: "禹州市",

            parentId: "411000"

        },

        {

            id: "411082",

            value: "长葛市",

            parentId: "411000"

        },

        {

            id: "411102",

            value: "源汇区",

            parentId: "411100"

        },

        {

            id: "411103",

            value: "郾城区",

            parentId: "411100"

        },

        {

            id: "411104",

            value: "召陵区",

            parentId: "411100"

        },

        {

            id: "411121",

            value: "舞阳县",

            parentId: "411100"

        },

        {

            id: "411122",

            value: "临颍县",

            parentId: "411100"

        },

        {

            id: "411202",

            value: "湖滨区",

            parentId: "411200"

        },

        {

            id: "411221",

            value: "渑池县",

            parentId: "411200"

        },

        {

            id: "411222",

            value: "陕县",

            parentId: "411200"

        },

        {

            id: "411224",

            value: "卢氏县",

            parentId: "411200"

        },

        {

            id: "411281",

            value: "义马市",

            parentId: "411200"

        },

        {

            id: "411282",

            value: "灵宝市",

            parentId: "411200"

        },

        {

            id: "411302",

            value: "宛城区",

            parentId: "411300"

        },

        {

            id: "411303",

            value: "卧龙区",

            parentId: "411300"

        },

        {

            id: "411321",

            value: "南召县",

            parentId: "411300"

        },

        {

            id: "411322",

            value: "方城县",

            parentId: "411300"

        },

        {

            id: "411323",

            value: "西峡县",

            parentId: "411300"

        },

        {

            id: "411324",

            value: "镇平县",

            parentId: "411300"

        },

        {

            id: "411325",

            value: "内乡县",

            parentId: "411300"

        },

        {

            id: "411326",

            value: "淅川县",

            parentId: "411300"

        },

        {

            id: "411327",

            value: "社旗县",

            parentId: "411300"

        },

        {

            id: "411328",

            value: "唐河县",

            parentId: "411300"

        },

        {

            id: "411329",

            value: "新野县",

            parentId: "411300"

        },

        {

            id: "411330",

            value: "桐柏县",

            parentId: "411300"

        },

        {

            id: "411381",

            value: "邓州市",

            parentId: "411300"

        },

        {

            id: "411402",

            value: "梁园区",

            parentId: "411400"

        },

        {

            id: "411403",

            value: "睢阳区",

            parentId: "411400"

        },

        {

            id: "411421",

            value: "民权县",

            parentId: "411400"

        },

        {

            id: "411422",

            value: "睢县",

            parentId: "411400"

        },

        {

            id: "411423",

            value: "宁陵县",

            parentId: "411400"

        },

        {

            id: "411424",

            value: "柘城县",

            parentId: "411400"

        },

        {

            id: "411425",

            value: "虞城县",

            parentId: "411400"

        },

        {

            id: "411426",

            value: "夏邑县",

            parentId: "411400"

        },

        {

            id: "411481",

            value: "永城市",

            parentId: "411400"

        },

        {

            id: "411502",

            value: "浉河区",

            parentId: "411500"

        },

        {

            id: "411503",

            value: "平桥区",

            parentId: "411500"

        },

        {

            id: "411521",

            value: "罗山县",

            parentId: "411500"

        },

        {

            id: "411522",

            value: "光山县",

            parentId: "411500"

        },

        {

            id: "411523",

            value: "新县",

            parentId: "411500"

        },

        {

            id: "411524",

            value: "商城县",

            parentId: "411500"

        },

        {

            id: "411525",

            value: "固始县",

            parentId: "411500"

        },

        {

            id: "411526",

            value: "潢川县",

            parentId: "411500"

        },

        {

            id: "411527",

            value: "淮滨县",

            parentId: "411500"

        },

        {

            id: "411528",

            value: "息县",

            parentId: "411500"

        },

        {

            id: "411602",

            value: "川汇区",

            parentId: "411600"

        },

        {

            id: "411621",

            value: "扶沟县",

            parentId: "411600"

        },

        {

            id: "411622",

            value: "西华县",

            parentId: "411600"

        },

        {

            id: "411623",

            value: "商水县",

            parentId: "411600"

        },

        {

            id: "411624",

            value: "沈丘县",

            parentId: "411600"

        },

        {

            id: "411625",

            value: "郸城县",

            parentId: "411600"

        },

        {

            id: "411626",

            value: "淮阳县",

            parentId: "411600"

        },

        {

            id: "411627",

            value: "太康县",

            parentId: "411600"

        },

        {

            id: "411628",

            value: "鹿邑县",

            parentId: "411600"

        },

        {

            id: "411681",

            value: "项城市",

            parentId: "411600"

        },

        {

            id: "411702",

            value: "驿城区",

            parentId: "411700"

        },

        {

            id: "411721",

            value: "西平县",

            parentId: "411700"

        },

        {

            id: "411722",

            value: "上蔡县",

            parentId: "411700"

        },

        {

            id: "411723",

            value: "平舆县",

            parentId: "411700"

        },

        {

            id: "411724",

            value: "正阳县",

            parentId: "411700"

        },

        {

            id: "411725",

            value: "确山县",

            parentId: "411700"

        },

        {

            id: "411726",

            value: "泌阳县",

            parentId: "411700"

        },

        {

            id: "411727",

            value: "汝南县",

            parentId: "411700"

        },

        {

            id: "411728",

            value: "遂平县",

            parentId: "411700"

        },

        {

            id: "411729",

            value: "新蔡县",

            parentId: "411700"

        },

        {

            id: "419001",

            value: "济源市",

            parentId: "419001"

        },

        {

            id: "420102",

            value: "江岸区",

            parentId: "420100"

        },

        {

            id: "420103",

            value: "江汉区",

            parentId: "420100"

        },

        {

            id: "420104",

            value: "硚口区",

            parentId: "420100"

        },

        {

            id: "420105",

            value: "汉阳区",

            parentId: "420100"

        },

        {

            id: "420106",

            value: "武昌区",

            parentId: "420100"

        },

        {

            id: "420107",

            value: "青山区",

            parentId: "420100"

        },

        {

            id: "420111",

            value: "洪山区",

            parentId: "420100"

        },

        {

            id: "420112",

            value: "东西湖区",

            parentId: "420100"

        },

        {

            id: "420113",

            value: "汉南区",

            parentId: "420100"

        },

        {

            id: "420114",

            value: "蔡甸区",

            parentId: "420100"

        },

        {

            id: "420115",

            value: "江夏区",

            parentId: "420100"

        },

        {

            id: "420116",

            value: "黄陂区",

            parentId: "420100"

        },

        {

            id: "420117",

            value: "新洲区",

            parentId: "420100"

        },

        {

            id: "420202",

            value: "黄石港区",

            parentId: "420200"

        },

        {

            id: "420203",

            value: "西塞山区",

            parentId: "420200"

        },

        {

            id: "420204",

            value: "下陆区",

            parentId: "420200"

        },

        {

            id: "420205",

            value: "铁山区",

            parentId: "420200"

        },

        {

            id: "420222",

            value: "阳新县",

            parentId: "420200"

        },

        {

            id: "420281",

            value: "大冶市",

            parentId: "420200"

        },

        {

            id: "420302",

            value: "茅箭区",

            parentId: "420300"

        },

        {

            id: "420303",

            value: "张湾区",

            parentId: "420300"

        },

        {

            id: "420321",

            value: "郧县",

            parentId: "420300"

        },

        {

            id: "420322",

            value: "郧西县",

            parentId: "420300"

        },

        {

            id: "420323",

            value: "竹山县",

            parentId: "420300"

        },

        {

            id: "420324",

            value: "竹溪县",

            parentId: "420300"

        },

        {

            id: "420325",

            value: "房县",

            parentId: "420300"

        },

        {

            id: "420381",

            value: "丹江口市",

            parentId: "420300"

        },

        {

            id: "420502",

            value: "西陵区",

            parentId: "420500"

        },

        {

            id: "420503",

            value: "伍家岗区",

            parentId: "420500"

        },

        {

            id: "420504",

            value: "点军区",

            parentId: "420500"

        },

        {

            id: "420505",

            value: "猇亭区",

            parentId: "420500"

        },

        {

            id: "420506",

            value: "夷陵区",

            parentId: "420500"

        },

        {

            id: "420525",

            value: "远安县",

            parentId: "420500"

        },

        {

            id: "420526",

            value: "兴山县",

            parentId: "420500"

        },

        {

            id: "420527",

            value: "秭归县",

            parentId: "420500"

        },

        {

            id: "420528",

            value: "长阳土家族自治县",

            parentId: "420500"

        },

        {

            id: "420529",

            value: "五峰土家族自治县",

            parentId: "420500"

        },

        {

            id: "420581",

            value: "宜都市",

            parentId: "420500"

        },

        {

            id: "420582",

            value: "当阳市",

            parentId: "420500"

        },

        {

            id: "420583",

            value: "枝江市",

            parentId: "420500"

        },

        {

            id: "420602",

            value: "襄城区",

            parentId: "420600"

        },

        {

            id: "420606",

            value: "樊城区",

            parentId: "420600"

        },

        {

            id: "420607",

            value: "襄州区",

            parentId: "420600"

        },

        {

            id: "420624",

            value: "南漳县",

            parentId: "420600"

        },

        {

            id: "420625",

            value: "谷城县",

            parentId: "420600"

        },

        {

            id: "420626",

            value: "保康县",

            parentId: "420600"

        },

        {

            id: "420682",

            value: "老河口市",

            parentId: "420600"

        },

        {

            id: "420683",

            value: "枣阳市",

            parentId: "420600"

        },

        {

            id: "420684",

            value: "宜城市",

            parentId: "420600"

        },

        {

            id: "420702",

            value: "梁子湖区",

            parentId: "420700"

        },

        {

            id: "420703",

            value: "华容区",

            parentId: "420700"

        },

        {

            id: "420704",

            value: "鄂城区",

            parentId: "420700"

        },

        {

            id: "420802",

            value: "东宝区",

            parentId: "420800"

        },

        {

            id: "420804",

            value: "掇刀区",

            parentId: "420800"

        },

        {

            id: "420821",

            value: "京山县",

            parentId: "420800"

        },

        {

            id: "420822",

            value: "沙洋县",

            parentId: "420800"

        },

        {

            id: "420881",

            value: "钟祥市",

            parentId: "420800"

        },

        {

            id: "420902",

            value: "孝南区",

            parentId: "420900"

        },

        {

            id: "420921",

            value: "孝昌县",

            parentId: "420900"

        },

        {

            id: "420922",

            value: "大悟县",

            parentId: "420900"

        },

        {

            id: "420923",

            value: "云梦县",

            parentId: "420900"

        },

        {

            id: "420981",

            value: "应城市",

            parentId: "420900"

        },

        {

            id: "420982",

            value: "安陆市",

            parentId: "420900"

        },

        {

            id: "420984",

            value: "汉川市",

            parentId: "420900"

        },

        {

            id: "421002",

            value: "沙市区",

            parentId: "421000"

        },

        {

            id: "421003",

            value: "荆州区",

            parentId: "421000"

        },

        {

            id: "421022",

            value: "公安县",

            parentId: "421000"

        },

        {

            id: "421023",

            value: "监利县",

            parentId: "421000"

        },

        {

            id: "421024",

            value: "江陵县",

            parentId: "421000"

        },

        {

            id: "421081",

            value: "石首市",

            parentId: "421000"

        },

        {

            id: "421083",

            value: "洪湖市",

            parentId: "421000"

        },

        {

            id: "421087",

            value: "松滋市",

            parentId: "421000"

        },

        {

            id: "421102",

            value: "黄州区",

            parentId: "421100"

        },

        {

            id: "421121",

            value: "团风县",

            parentId: "421100"

        },

        {

            id: "421122",

            value: "红安县",

            parentId: "421100"

        },

        {

            id: "421123",

            value: "罗田县",

            parentId: "421100"

        },

        {

            id: "421124",

            value: "英山县",

            parentId: "421100"

        },

        {

            id: "421125",

            value: "浠水县",

            parentId: "421100"

        },

        {

            id: "421126",

            value: "蕲春县",

            parentId: "421100"

        },

        {

            id: "421127",

            value: "黄梅县",

            parentId: "421100"

        },

        {

            id: "421181",

            value: "麻城市",

            parentId: "421100"

        },

        {

            id: "421182",

            value: "武穴市",

            parentId: "421100"

        },

        {

            id: "421202",

            value: "咸安区",

            parentId: "421200"

        },

        {

            id: "421221",

            value: "嘉鱼县",

            parentId: "421200"

        },

        {

            id: "421222",

            value: "通城县",

            parentId: "421200"

        },

        {

            id: "421223",

            value: "崇阳县",

            parentId: "421200"

        },

        {

            id: "421224",

            value: "通山县",

            parentId: "421200"

        },

        {

            id: "421281",

            value: "赤壁市",

            parentId: "421200"

        },

        {

            id: "421303",

            value: "曾都区",

            parentId: "421300"

        },

        {

            id: "421321",

            value: "随县",

            parentId: "421300"

        },

        {

            id: "421381",

            value: "广水市",

            parentId: "421300"

        },

        {

            id: "422801",

            value: "恩施市",

            parentId: "422800"

        },

        {

            id: "422802",

            value: "利川市",

            parentId: "422800"

        },

        {

            id: "422822",

            value: "建始县",

            parentId: "422800"

        },

        {

            id: "422823",

            value: "巴东县",

            parentId: "422800"

        },

        {

            id: "422825",

            value: "宣恩县",

            parentId: "422800"

        },

        {

            id: "422826",

            value: "咸丰县",

            parentId: "422800"

        },

        {

            id: "422827",

            value: "来凤县",

            parentId: "422800"

        },

        {

            id: "422828",

            value: "鹤峰县",

            parentId: "422800"

        },

        {

            id: "429004",

            value: "仙桃市",

            parentId: "429004"

        },

        {

            id: "429005",

            value: "潜江市",

            parentId: "429005"

        },

        {

            id: "429006",

            value: "天门市",

            parentId: "429006"

        },

        {

            id: "429021",

            value: "神农架林区",

            parentId: "429021"

        },

        {

            id: "430102",

            value: "芙蓉区",

            parentId: "430100"

        },

        {

            id: "430103",

            value: "天心区",

            parentId: "430100"

        },

        {

            id: "430104",

            value: "岳麓区",

            parentId: "430100"

        },

        {

            id: "430105",

            value: "开福区",

            parentId: "430100"

        },

        {

            id: "430111",

            value: "雨花区",

            parentId: "430100"

        },

        {

            id: "430112",

            value: "望城区",

            parentId: "430100"

        },

        {

            id: "430121",

            value: "长沙县",

            parentId: "430100"

        },

        {

            id: "430124",

            value: "宁乡县",

            parentId: "430100"

        },

        {

            id: "430181",

            value: "浏阳市",

            parentId: "430100"

        },

        {

            id: "430202",

            value: "荷塘区",

            parentId: "430200"

        },

        {

            id: "430203",

            value: "芦淞区",

            parentId: "430200"

        },

        {

            id: "430204",

            value: "石峰区",

            parentId: "430200"

        },

        {

            id: "430211",

            value: "天元区",

            parentId: "430200"

        },

        {

            id: "430221",

            value: "株洲县",

            parentId: "430200"

        },

        {

            id: "430223",

            value: "攸县",

            parentId: "430200"

        },

        {

            id: "430224",

            value: "茶陵县",

            parentId: "430200"

        },

        {

            id: "430225",

            value: "炎陵县",

            parentId: "430200"

        },

        {

            id: "430281",

            value: "醴陵市",

            parentId: "430200"

        },

        {

            id: "430302",

            value: "雨湖区",

            parentId: "430300"

        },

        {

            id: "430304",

            value: "岳塘区",

            parentId: "430300"

        },

        {

            id: "430321",

            value: "湘潭县",

            parentId: "430300"

        },

        {

            id: "430381",

            value: "湘乡市",

            parentId: "430300"

        },

        {

            id: "430382",

            value: "韶山市",

            parentId: "430300"

        },

        {

            id: "430405",

            value: "珠晖区",

            parentId: "430400"

        },

        {

            id: "430406",

            value: "雁峰区",

            parentId: "430400"

        },

        {

            id: "430407",

            value: "石鼓区",

            parentId: "430400"

        },

        {

            id: "430408",

            value: "蒸湘区",

            parentId: "430400"

        },

        {

            id: "430412",

            value: "南岳区",

            parentId: "430400"

        },

        {

            id: "430421",

            value: "衡阳县",

            parentId: "430400"

        },

        {

            id: "430422",

            value: "衡南县",

            parentId: "430400"

        },

        {

            id: "430423",

            value: "衡山县",

            parentId: "430400"

        },

        {

            id: "430424",

            value: "衡东县",

            parentId: "430400"

        },

        {

            id: "430426",

            value: "祁东县",

            parentId: "430400"

        },

        {

            id: "430481",

            value: "耒阳市",

            parentId: "430400"

        },

        {

            id: "430482",

            value: "常宁市",

            parentId: "430400"

        },

        {

            id: "430502",

            value: "双清区",

            parentId: "430500"

        },

        {

            id: "430503",

            value: "大祥区",

            parentId: "430500"

        },

        {

            id: "430511",

            value: "北塔区",

            parentId: "430500"

        },

        {

            id: "430521",

            value: "邵东县",

            parentId: "430500"

        },

        {

            id: "430522",

            value: "新邵县",

            parentId: "430500"

        },

        {

            id: "430523",

            value: "邵阳县",

            parentId: "430500"

        },

        {

            id: "430524",

            value: "隆回县",

            parentId: "430500"

        },

        {

            id: "430525",

            value: "洞口县",

            parentId: "430500"

        },

        {

            id: "430527",

            value: "绥宁县",

            parentId: "430500"

        },

        {

            id: "430528",

            value: "新宁县",

            parentId: "430500"

        },

        {

            id: "430529",

            value: "城步苗族自治县",

            parentId: "430500"

        },

        {

            id: "430581",

            value: "武冈市",

            parentId: "430500"

        },

        {

            id: "430602",

            value: "岳阳楼区",

            parentId: "430600"

        },

        {

            id: "430603",

            value: "云溪区",

            parentId: "430600"

        },

        {

            id: "430611",

            value: "君山区",

            parentId: "430600"

        },

        {

            id: "430621",

            value: "岳阳县",

            parentId: "430600"

        },

        {

            id: "430623",

            value: "华容县",

            parentId: "430600"

        },

        {

            id: "430624",

            value: "湘阴县",

            parentId: "430600"

        },

        {

            id: "430626",

            value: "平江县",

            parentId: "430600"

        },

        {

            id: "430681",

            value: "汨罗市",

            parentId: "430600"

        },

        {

            id: "430682",

            value: "临湘市",

            parentId: "430600"

        },

        {

            id: "430702",

            value: "武陵区",

            parentId: "430700"

        },

        {

            id: "430703",

            value: "鼎城区",

            parentId: "430700"

        },

        {

            id: "430721",

            value: "安乡县",

            parentId: "430700"

        },

        {

            id: "430722",

            value: "汉寿县",

            parentId: "430700"

        },

        {

            id: "430723",

            value: "澧县",

            parentId: "430700"

        },

        {

            id: "430724",

            value: "临澧县",

            parentId: "430700"

        },

        {

            id: "430725",

            value: "桃源县",

            parentId: "430700"

        },

        {

            id: "430726",

            value: "石门县",

            parentId: "430700"

        },

        {

            id: "430781",

            value: "津市市",

            parentId: "430700"

        },

        {

            id: "430802",

            value: "永定区",

            parentId: "430800"

        },

        {

            id: "430811",

            value: "武陵源区",

            parentId: "430800"

        },

        {

            id: "430821",

            value: "慈利县",

            parentId: "430800"

        },

        {

            id: "430822",

            value: "桑植县",

            parentId: "430800"

        },

        {

            id: "430902",

            value: "资阳区",

            parentId: "430900"

        },

        {

            id: "430903",

            value: "赫山区",

            parentId: "430900"

        },

        {

            id: "430921",

            value: "南县",

            parentId: "430900"

        },

        {

            id: "430922",

            value: "桃江县",

            parentId: "430900"

        },

        {

            id: "430923",

            value: "安化县",

            parentId: "430900"

        },

        {

            id: "430981",

            value: "沅江市",

            parentId: "430900"

        },

        {

            id: "431002",

            value: "北湖区",

            parentId: "431000"

        },

        {

            id: "431003",

            value: "苏仙区",

            parentId: "431000"

        },

        {

            id: "431021",

            value: "桂阳县",

            parentId: "431000"

        },

        {

            id: "431022",

            value: "宜章县",

            parentId: "431000"

        },

        {

            id: "431023",

            value: "永兴县",

            parentId: "431000"

        },

        {

            id: "431024",

            value: "嘉禾县",

            parentId: "431000"

        },

        {

            id: "431025",

            value: "临武县",

            parentId: "431000"

        },

        {

            id: "431026",

            value: "汝城县",

            parentId: "431000"

        },

        {

            id: "431027",

            value: "桂东县",

            parentId: "431000"

        },

        {

            id: "431028",

            value: "安仁县",

            parentId: "431000"

        },

        {

            id: "431081",

            value: "资兴市",

            parentId: "431000"

        },

        {

            id: "431102",

            value: "零陵区",

            parentId: "431100"

        },

        {

            id: "431103",

            value: "冷水滩区",

            parentId: "431100"

        },

        {

            id: "431121",

            value: "祁阳县",

            parentId: "431100"

        },

        {

            id: "431122",

            value: "东安县",

            parentId: "431100"

        },

        {

            id: "431123",

            value: "双牌县",

            parentId: "431100"

        },

        {

            id: "431124",

            value: "道县",

            parentId: "431100"

        },

        {

            id: "431125",

            value: "江永县",

            parentId: "431100"

        },

        {

            id: "431126",

            value: "宁远县",

            parentId: "431100"

        },

        {

            id: "431127",

            value: "蓝山县",

            parentId: "431100"

        },

        {

            id: "431128",

            value: "新田县",

            parentId: "431100"

        },

        {

            id: "431129",

            value: "江华瑶族自治县",

            parentId: "431100"

        },

        {

            id: "431202",

            value: "鹤城区",

            parentId: "431200"

        },

        {

            id: "431221",

            value: "中方县",

            parentId: "431200"

        },

        {

            id: "431222",

            value: "沅陵县",

            parentId: "431200"

        },

        {

            id: "431223",

            value: "辰溪县",

            parentId: "431200"

        },

        {

            id: "431224",

            value: "溆浦县",

            parentId: "431200"

        },

        {

            id: "431225",

            value: "会同县",

            parentId: "431200"

        },

        {

            id: "431226",

            value: "麻阳苗族自治县",

            parentId: "431200"

        },

        {

            id: "431227",

            value: "新晃侗族自治县",

            parentId: "431200"

        },

        {

            id: "431228",

            value: "芷江侗族自治县",

            parentId: "431200"

        },

        {

            id: "431229",

            value: "靖州苗族侗族自治县",

            parentId: "431200"

        },

        {

            id: "431230",

            value: "通道侗族自治县",

            parentId: "431200"

        },

        {

            id: "431281",

            value: "洪江市",

            parentId: "431200"

        },

        {

            id: "431302",

            value: "娄星区",

            parentId: "431300"

        },

        {

            id: "431321",

            value: "双峰县",

            parentId: "431300"

        },

        {

            id: "431322",

            value: "新化县",

            parentId: "431300"

        },

        {

            id: "431381",

            value: "冷水江市",

            parentId: "431300"

        },

        {

            id: "431382",

            value: "涟源市",

            parentId: "431300"

        },

        {

            id: "433101",

            value: "吉首市",

            parentId: "433100"

        },

        {

            id: "433122",

            value: "泸溪县",

            parentId: "433100"

        },

        {

            id: "433123",

            value: "凤凰县",

            parentId: "433100"

        },

        {

            id: "433124",

            value: "花垣县",

            parentId: "433100"

        },

        {

            id: "433125",

            value: "保靖县",

            parentId: "433100"

        },

        {

            id: "433126",

            value: "古丈县",

            parentId: "433100"

        },

        {

            id: "433127",

            value: "永顺县",

            parentId: "433100"

        },

        {

            id: "433130",

            value: "龙山县",

            parentId: "433100"

        },

        {

            id: "440103",

            value: "荔湾区",

            parentId: "440100"

        },

        {

            id: "440104",

            value: "越秀区",

            parentId: "440100"

        },

        {

            id: "440105",

            value: "海珠区",

            parentId: "440100"

        },

        {

            id: "440106",

            value: "天河区",

            parentId: "440100"

        },

        {

            id: "440111",

            value: "白云区",

            parentId: "440100"

        },

        {

            id: "440112",

            value: "黄埔区",

            parentId: "440100"

        },

        {

            id: "440113",

            value: "番禺区",

            parentId: "440100"

        },

        {

            id: "440114",

            value: "花都区",

            parentId: "440100"

        },

        {

            id: "440115",

            value: "南沙区",

            parentId: "440100"

        },

        {

            id: "440116",

            value: "萝岗区",

            parentId: "440100"

        },

        {

            id: "440183",

            value: "增城市",

            parentId: "440100"

        },

        {

            id: "440184",

            value: "从化市",

            parentId: "440100"

        },

        {

            id: "440203",

            value: "武江区",

            parentId: "440200"

        },

        {

            id: "440204",

            value: "浈江区",

            parentId: "440200"

        },

        {

            id: "440205",

            value: "曲江区",

            parentId: "440200"

        },

        {

            id: "440222",

            value: "始兴县",

            parentId: "440200"

        },

        {

            id: "440224",

            value: "仁化县",

            parentId: "440200"

        },

        {

            id: "440229",

            value: "翁源县",

            parentId: "440200"

        },

        {

            id: "440232",

            value: "乳源瑶族自治县",

            parentId: "440200"

        },

        {

            id: "440233",

            value: "新丰县",

            parentId: "440200"

        },

        {

            id: "440281",

            value: "乐昌市",

            parentId: "440200"

        },

        {

            id: "440282",

            value: "南雄市",

            parentId: "440200"

        },

        {

            id: "440303",

            value: "罗湖区",

            parentId: "440300"

        },

        {

            id: "440304",

            value: "福田区",

            parentId: "440300"

        },

        {

            id: "440305",

            value: "南山区",

            parentId: "440300"

        },

        {

            id: "440306",

            value: "宝安区",

            parentId: "440300"

        },

        {

            id: "440307",

            value: "龙岗区",

            parentId: "440300"

        },

        {

            id: "440308",

            value: "盐田区",

            parentId: "440300"

        },

        {

            id: "440402",

            value: "香洲区",

            parentId: "440400"

        },

        {

            id: "440403",

            value: "斗门区",

            parentId: "440400"

        },

        {

            id: "440404",

            value: "金湾区",

            parentId: "440400"

        },

        {

            id: "440507",

            value: "龙湖区",

            parentId: "440500"

        },

        {

            id: "440511",

            value: "金平区",

            parentId: "440500"

        },

        {

            id: "440512",

            value: "濠江区",

            parentId: "440500"

        },

        {

            id: "440513",

            value: "潮阳区",

            parentId: "440500"

        },

        {

            id: "440514",

            value: "潮南区",

            parentId: "440500"

        },

        {

            id: "440515",

            value: "澄海区",

            parentId: "440500"

        },

        {

            id: "440523",

            value: "南澳县",

            parentId: "440500"

        },

        {

            id: "440604",

            value: "禅城区",

            parentId: "440600"

        },

        {

            id: "440605",

            value: "南海区",

            parentId: "440600"

        },

        {

            id: "440606",

            value: "顺德区",

            parentId: "440600"

        },

        {

            id: "440607",

            value: "三水区",

            parentId: "440600"

        },

        {

            id: "440608",

            value: "高明区",

            parentId: "440600"

        },

        {

            id: "440703",

            value: "蓬江区",

            parentId: "440700"

        },

        {

            id: "440704",

            value: "江海区",

            parentId: "440700"

        },

        {

            id: "440705",

            value: "新会区",

            parentId: "440700"

        },

        {

            id: "440781",

            value: "台山市",

            parentId: "440700"

        },

        {

            id: "440783",

            value: "开平市",

            parentId: "440700"

        },

        {

            id: "440784",

            value: "鹤山市",

            parentId: "440700"

        },

        {

            id: "440785",

            value: "恩平市",

            parentId: "440700"

        },

        {

            id: "440802",

            value: "赤坎区",

            parentId: "440800"

        },

        {

            id: "440803",

            value: "霞山区",

            parentId: "440800"

        },

        {

            id: "440804",

            value: "坡头区",

            parentId: "440800"

        },

        {

            id: "440811",

            value: "麻章区",

            parentId: "440800"

        },

        {

            id: "440823",

            value: "遂溪县",

            parentId: "440800"

        },

        {

            id: "440825",

            value: "徐闻县",

            parentId: "440800"

        },

        {

            id: "440881",

            value: "廉江市",

            parentId: "440800"

        },

        {

            id: "440882",

            value: "雷州市",

            parentId: "440800"

        },

        {

            id: "440883",

            value: "吴川市",

            parentId: "440800"

        },

        {

            id: "440902",

            value: "茂南区",

            parentId: "440900"

        },

        {

            id: "440903",

            value: "茂港区",

            parentId: "440900"

        },

        {

            id: "440923",

            value: "电白县",

            parentId: "440900"

        },

        {

            id: "440981",

            value: "高州市",

            parentId: "440900"

        },

        {

            id: "440982",

            value: "化州市",

            parentId: "440900"

        },

        {

            id: "440983",

            value: "信宜市",

            parentId: "440900"

        },

        {

            id: "441202",

            value: "端州区",

            parentId: "441200"

        },

        {

            id: "441203",

            value: "鼎湖区",

            parentId: "441200"

        },

        {

            id: "441223",

            value: "广宁县",

            parentId: "441200"

        },

        {

            id: "441224",

            value: "怀集县",

            parentId: "441200"

        },



        {

            id: "441225",

            value: "封开县",

            parentId: "441200"

        },

        {

            id: "441226",

            value: "德庆县",

            parentId: "441200"

        },

        {

            id: "441283",

            value: "高要市",

            parentId: "441200"

        },

        {

            id: "441284",

            value: "四会市",

            parentId: "441200"

        },

        {

            id: "441302",

            value: "惠城区",

            parentId: "441300"

        },

        {

            id: "441303",

            value: "惠阳区",

            parentId: "441300"

        },

        {

            id: "441322",

            value: "博罗县",

            parentId: "441300"

        },

        {

            id: "441323",

            value: "惠东县",

            parentId: "441300"

        },

        {

            id: "441324",

            value: "龙门县",

            parentId: "441300"

        },

        {

            id: "441402",

            value: "梅江区",

            parentId: "441400"

        },

        {

            id: "441421",

            value: "梅县",

            parentId: "441400"

        },

        {

            id: "441422",

            value: "大埔县",

            parentId: "441400"

        },

        {

            id: "441423",

            value: "丰顺县",

            parentId: "441400"

        },

        {

            id: "441424",

            value: "五华县",

            parentId: "441400"

        },

        {

            id: "441426",

            value: "平远县",

            parentId: "441400"

        },

        {

            id: "441427",

            value: "蕉岭县",

            parentId: "441400"

        },

        {

            id: "441481",

            value: "兴宁市",

            parentId: "441400"

        },

        {

            id: "441502",

            value: "城区",

            parentId: "441500"

        },

        {

            id: "441521",

            value: "海丰县",

            parentId: "441500"

        },

        {

            id: "441523",

            value: "陆河县",

            parentId: "441500"

        },

        {

            id: "441581",

            value: "陆丰市",

            parentId: "441500"

        },

        {

            id: "441602",

            value: "源城区",

            parentId: "441600"

        },

        {

            id: "441621",

            value: "紫金县",

            parentId: "441600"

        },

        {

            id: "441622",

            value: "龙川县",

            parentId: "441600"

        },

        {

            id: "441623",

            value: "连平县",

            parentId: "441600"

        },

        {

            id: "441624",

            value: "和平县",

            parentId: "441600"

        },

        {

            id: "441625",

            value: "东源县",

            parentId: "441600"

        },

        {

            id: "441702",

            value: "江城区",

            parentId: "441700"

        },

        {

            id: "441721",

            value: "阳西县",

            parentId: "441700"

        },

        {

            id: "441723",

            value: "阳东县",

            parentId: "441700"

        },

        {

            id: "441781",

            value: "阳春市",

            parentId: "441700"

        },

        {

            id: "441802",

            value: "清城区",

            parentId: "441800"

        },

        {

            id: "441821",

            value: "佛冈县",

            parentId: "441800"

        },

        {

            id: "441823",

            value: "阳山县",

            parentId: "441800"

        },

        {

            id: "441825",

            value: "连山壮族瑶族自治县",

            parentId: "441800"

        },

        {

            id: "441826",

            value: "连南瑶族自治县",

            parentId: "441800"

        },

        {

            id: "441827",

            value: "清新县",

            parentId: "441800"

        },

        {

            id: "441881",

            value: "英德市",

            parentId: "441800"

        },

        {

            id: "441882",

            value: "连州市",

            parentId: "441800"

        },

        {

            id: "441901",

            value: "东莞市",

            parentId: "441900"

        },

        {

            id: "442001",

            value: "中山市",

            parentId: "442000"

        },

        {

            id: "445102",

            value: "湘桥区",

            parentId: "445100"

        },

        {

            id: "445121",

            value: "潮安县",

            parentId: "445100"

        },

        {

            id: "445122",

            value: "饶平县",

            parentId: "445100"

        },

        {

            id: "445202",

            value: "榕城区",

            parentId: "445200"

        },

        {

            id: "445221",

            value: "揭东县",

            parentId: "445200"

        },

        {

            id: "445222",

            value: "揭西县",

            parentId: "445200"

        },

        {

            id: "445224",

            value: "惠来县",

            parentId: "445200"

        },

        {

            id: "445281",

            value: "普宁市",

            parentId: "445200"

        },

        {

            id: "445302",

            value: "云城区",

            parentId: "445300"

        },

        {

            id: "445321",

            value: "新兴县",

            parentId: "445300"

        },

        {

            id: "445322",

            value: "郁南县",

            parentId: "445300"

        },

        {

            id: "445323",

            value: "云安县",

            parentId: "445300"

        },

        {

            id: "445381",

            value: "罗定市",

            parentId: "445300"

        },

        {

            id: "450102",

            value: "兴宁区",

            parentId: "450100"

        },

        {

            id: "450103",

            value: "青秀区",

            parentId: "450100"

        },

        {

            id: "450105",

            value: "江南区",

            parentId: "450100"

        },

        {

            id: "450107",

            value: "西乡塘区",

            parentId: "450100"

        },

        {

            id: "450108",

            value: "良庆区",

            parentId: "450100"

        },

        {

            id: "450109",

            value: "邕宁区",

            parentId: "450100"

        },

        {

            id: "450122",

            value: "武鸣县",

            parentId: "450100"

        },

        {

            id: "450123",

            value: "隆安县",

            parentId: "450100"

        },

        {

            id: "450124",

            value: "马山县",

            parentId: "450100"

        },

        {

            id: "450125",

            value: "上林县",

            parentId: "450100"

        },

        {

            id: "450126",

            value: "宾阳县",

            parentId: "450100"

        },

        {

            id: "450127",

            value: "横县",

            parentId: "450100"

        },

        {

            id: "450202",

            value: "城中区",

            parentId: "450200"

        },

        {

            id: "450203",

            value: "鱼峰区",

            parentId: "450200"

        },

        {

            id: "450204",

            value: "柳南区",

            parentId: "450200"

        },

        {

            id: "450205",

            value: "柳北区",

            parentId: "450200"

        },

        {

            id: "450221",

            value: "柳江县",

            parentId: "450200"

        },

        {

            id: "450222",

            value: "柳城县",

            parentId: "450200"

        },

        {

            id: "450223",

            value: "鹿寨县",

            parentId: "450200"

        },

        {

            id: "450224",

            value: "融安县",

            parentId: "450200"

        },

        {

            id: "450225",

            value: "融水苗族自治县",

            parentId: "450200"

        },

        {

            id: "450226",

            value: "三江侗族自治县",

            parentId: "450200"

        },

        {

            id: "450302",

            value: "秀峰区",

            parentId: "450300"

        },

        {

            id: "450303",

            value: "叠彩区",

            parentId: "450300"

        },

        {

            id: "450304",

            value: "象山区",

            parentId: "450300"

        },

        {

            id: "450305",

            value: "七星区",

            parentId: "450300"

        },

        {

            id: "450311",

            value: "雁山区",

            parentId: "450300"

        },

        {

            id: "450321",

            value: "阳朔县",

            parentId: "450300"

        },

        {

            id: "450322",

            value: "临桂县",

            parentId: "450300"

        },

        {

            id: "450323",

            value: "灵川县",

            parentId: "450300"

        },

        {

            id: "450324",

            value: "全州县",

            parentId: "450300"

        },

        {

            id: "450325",

            value: "兴安县",

            parentId: "450300"

        },

        {

            id: "450326",

            value: "永福县",

            parentId: "450300"

        },

        {

            id: "450327",

            value: "灌阳县",

            parentId: "450300"

        },

        {

            id: "450328",

            value: "龙胜各族自治县",

            parentId: "450300"

        },

        {

            id: "450329",

            value: "资源县",

            parentId: "450300"

        },

        {

            id: "450330",

            value: "平乐县",

            parentId: "450300"

        },

        {

            id: "450331",

            value: "荔蒲县",

            parentId: "450300"

        },

        {

            id: "450332",

            value: "恭城瑶族自治县",

            parentId: "450300"

        },

        {

            id: "450403",

            value: "万秀区",

            parentId: "450400"

        },

        {

            id: "450404",

            value: "蝶山区",

            parentId: "450400"

        },

        {

            id: "450405",

            value: "长洲区",

            parentId: "450400"

        },

        {

            id: "450421",

            value: "苍梧县",

            parentId: "450400"

        },

        {

            id: "450422",

            value: "藤县",

            parentId: "450400"

        },

        {

            id: "450423",

            value: "蒙山县",

            parentId: "450400"

        },

        {

            id: "450481",

            value: "岑溪市",

            parentId: "450400"

        },

        {

            id: "450502",

            value: "海城区",

            parentId: "450500"

        },

        {

            id: "450503",

            value: "银海区",

            parentId: "450500"

        },

        {

            id: "450512",

            value: "铁山港区",

            parentId: "450500"

        },

        {

            id: "450521",

            value: "合浦县",

            parentId: "450500"

        },

        {

            id: "450602",

            value: "港口区",

            parentId: "450600"

        },

        {

            id: "450603",

            value: "防城区",

            parentId: "450600"

        },

        {

            id: "450621",

            value: "上思县",

            parentId: "450600"

        },

        {

            id: "450681",

            value: "东兴市",

            parentId: "450600"

        },

        {

            id: "450702",

            value: "钦南区",

            parentId: "450700"

        },

        {

            id: "450703",

            value: "钦北区",

            parentId: "450700"

        },

        {

            id: "450721",

            value: "灵山县",

            parentId: "450700"

        },

        {

            id: "450722",

            value: "浦北县",

            parentId: "450700"

        },

        {

            id: "450802",

            value: "港北区",

            parentId: "450800"

        },

        {

            id: "450803",

            value: "港南区",

            parentId: "450800"

        },

        {

            id: "450804",

            value: "覃塘区",

            parentId: "450800"

        },

        {

            id: "450821",

            value: "平南县",

            parentId: "450800"

        },

        {

            id: "450881",

            value: "桂平市",

            parentId: "450800"

        },

        {

            id: "450902",

            value: "玉州区",

            parentId: "450900"

        },

        {

            id: "450921",

            value: "容县",

            parentId: "450900"

        },

        {

            id: "450922",

            value: "陆川县",

            parentId: "450900"

        },

        {

            id: "450923",

            value: "博白县",

            parentId: "450900"

        },

        {

            id: "450924",

            value: "兴业县",

            parentId: "450900"

        },

        {

            id: "450981",

            value: "北流市",

            parentId: "450900"

        },

        {

            id: "451002",

            value: "右江区",

            parentId: "451000"

        },

        {

            id: "451021",

            value: "田阳县",

            parentId: "451000"

        },

        {

            id: "451022",

            value: "田东县",

            parentId: "451000"

        },

        {

            id: "451023",

            value: "平果县",

            parentId: "451000"

        },

        {

            id: "451024",

            value: "德保县",

            parentId: "451000"

        },

        {

            id: "451025",

            value: "靖西县",

            parentId: "451000"

        },

        {

            id: "451026",

            value: "那坡县",

            parentId: "451000"

        },

        {

            id: "451027",

            value: "凌云县",

            parentId: "451000"

        },

        {

            id: "451028",

            value: "乐业县",

            parentId: "451000"

        },

        {

            id: "451029",

            value: "田林县",

            parentId: "451000"

        },

        {

            id: "451030",

            value: "西林县",

            parentId: "451000"

        },

        {

            id: "451031",

            value: "隆林各族自治县",

            parentId: "451000"

        },

        {

            id: "451102",

            value: "八步区",

            parentId: "451100"

        },

        {

            id: "451119",

            value: "平桂管理区",

            parentId: "451100"

        },

        {

            id: "451121",

            value: "昭平县",

            parentId: "451100"

        },

        {

            id: "451122",

            value: "钟山县",

            parentId: "451100"

        },

        {

            id: "451123",

            value: "富川瑶族自治县",

            parentId: "451100"

        },

        {

            id: "451202",

            value: "金城江区",

            parentId: "451200"

        },

        {

            id: "451221",

            value: "南丹县",

            parentId: "451200"

        },

        {

            id: "451222",

            value: "天峨县",

            parentId: "451200"

        },

        {

            id: "451223",

            value: "凤山县",

            parentId: "451200"

        },

        {

            id: "451224",

            value: "东兰县",

            parentId: "451200"

        },

        {

            id: "451225",

            value: "罗城仫佬族自治县",

            parentId: "451200"

        },

        {

            id: "451226",

            value: "环江毛南族自治县",

            parentId: "451200"

        },

        {

            id: "451227",

            value: "巴马瑶族自治县",

            parentId: "451200"

        },

        {

            id: "451228",

            value: "都安瑶族自治县",

            parentId: "451200"

        },

        {

            id: "451229",

            value: "大化瑶族自治县",

            parentId: "451200"

        },

        {

            id: "451281",

            value: "宜州市",

            parentId: "451200"

        },

        {

            id: "451302",

            value: "兴宾区",

            parentId: "451300"

        },

        {

            id: "451321",

            value: "忻城县",

            parentId: "451300"

        },

        {

            id: "451322",

            value: "象州县",

            parentId: "451300"

        },

        {

            id: "451323",

            value: "武宣县",

            parentId: "451300"

        },

        {

            id: "451324",

            value: "金秀瑶族自治县",

            parentId: "451300"

        },

        {

            id: "451381",

            value: "合山市",

            parentId: "451300"

        },

        {

            id: "451402",

            value: "江洲区",

            parentId: "451400"

        },

        {

            id: "451421",

            value: "扶绥县",

            parentId: "451400"

        },

        {

            id: "451422",

            value: "宁明县",

            parentId: "451400"

        },

        {

            id: "451423",

            value: "龙州县",

            parentId: "451400"

        },

        {

            id: "451424",

            value: "大新县",

            parentId: "451400"

        },

        {

            id: "451425",

            value: "天等县",

            parentId: "451400"

        },

        {

            id: "451481",

            value: "凭祥市",

            parentId: "451400"

        },

        {

            id: "460105",

            value: "秀英区",

            parentId: "460100"

        },

        {

            id: "460106",

            value: "龙华区",

            parentId: "460100"

        },

        {

            id: "460107",

            value: "琼山区",

            parentId: "460100"

        },

        {

            id: "460108",

            value: "美兰区",

            parentId: "460100"

        },

        {

            id: "460201",

            value: "三亚市",

            parentId: "460200"

        },

        {

            id: "460301",

            value: "三沙市",

            parentId: "460300"

        },

        {

            id: "469001",

            value: "五指山市",

            parentId: "469001"

        },

        {

            id: "469002",

            value: "琼海市",

            parentId: "469002"

        },

        {

            id: "469003",

            value: "儋州市",

            parentId: "469003"

        },

        {

            id: "469005",

            value: "文昌市",

            parentId: "469005"

        },

        {

            id: "469006",

            value: "万宁市",

            parentId: "469006"

        },

        {

            id: "469007",

            value: "东方市",

            parentId: "469007"

        },

        {

            id: "469021",

            value: "定安县",

            parentId: "469021"

        },

        {

            id: "469022",

            value: "屯昌县",

            parentId: "469022"

        },

        {

            id: "469023",

            value: "澄迈县",

            parentId: "469023"

        },

        {

            id: "469024",

            value: "临高县",

            parentId: "469024"

        },

        {

            id: "469025",

            value: "白沙黎族自治县",

            parentId: "469025"

        },

        {

            id: "469026",

            value: "昌江黎族自治县",

            parentId: "469026"

        },

        {

            id: "469027",

            value: "乐东黎族自治县",

            parentId: "469027"

        },

        {

            id: "469028",

            value: "陵水黎族自治县",

            parentId: "469028"

        },

        {

            id: "469029",

            value: "保亭黎族苗族自治县",

            parentId: "469029"

        },

        {

            id: "469030",

            value: "琼中黎族苗族自治县",

            parentId: "469030"

        },

        {

            id: "500101",

            value: "万州区",

            parentId: "500100"

        },

        {

            id: "500102",

            value: "涪陵区",

            parentId: "500100"

        },

        {

            id: "500103",

            value: "渝中区",

            parentId: "500100"

        },

        {

            id: "500104",

            value: "大渡口区",

            parentId: "500100"

        },

        {

            id: "500105",

            value: "江北区",

            parentId: "500100"

        },

        {

            id: "500106",

            value: "沙坪坝区",

            parentId: "500100"

        },

        {

            id: "500107",

            value: "九龙坡区",

            parentId: "500100"

        },

        {

            id: "500108",

            value: "南岸区",

            parentId: "500100"

        },

        {

            id: "500109",

            value: "北碚区",

            parentId: "500100"

        },

        {

            id: "500110",

            value: "綦江区",

            parentId: "500100"

        },

        {

            id: "500111",

            value: "大足区",

            parentId: "500100"

        },

        {

            id: "500112",

            value: "渝北区",

            parentId: "500100"

        },

        {

            id: "500113",

            value: "巴南区",

            parentId: "500100"

        },

        {

            id: "500114",

            value: "黔江区",

            parentId: "500100"

        },

        {

            id: "500115",

            value: "长寿区",

            parentId: "500100"

        },

        {

            id: "500116",

            value: "江津区",

            parentId: "500100"

        },

        {

            id: "500117",

            value: "合川区",

            parentId: "500100"

        },

        {

            id: "500118",

            value: "永川区",

            parentId: "500100"

        },

        {

            id: "500119",

            value: "南川区",

            parentId: "500100"

        },

        {

            id: "510104",

            value: "锦江区",

            parentId: "510100"

        },

        {

            id: "510105",

            value: "青羊区",

            parentId: "510100"

        },

        {

            id: "510106",

            value: "金牛区",

            parentId: "510100"

        },

        {

            id: "510107",

            value: "武侯区",

            parentId: "510100"

        },

        {

            id: "510108",

            value: "成华区",

            parentId: "510100"

        },

        {

            id: "510112",

            value: "龙泉驿区",

            parentId: "510100"

        },

        {

            id: "510113",

            value: "青白江区",

            parentId: "510100"

        },

        {

            id: "510114",

            value: "新都区",

            parentId: "510100"

        },

        {

            id: "510115",

            value: "温江区",

            parentId: "510100"

        },

        {

            id: "510121",

            value: "金堂县",

            parentId: "510100"

        },

        {

            id: "510122",

            value: "双流县",

            parentId: "510100"

        },

        {

            id: "510124",

            value: "郫县",

            parentId: "510100"

        },

        {

            id: "510129",

            value: "大邑县",

            parentId: "510100"

        },

        {

            id: "510131",

            value: "蒲江县",

            parentId: "510100"

        },

        {

            id: "510132",

            value: "新津县",

            parentId: "510100"

        },

        {

            id: "510181",

            value: "都江堰市",

            parentId: "510100"

        },

        {

            id: "510182",

            value: "彭州市",

            parentId: "510100"

        },

        {

            id: "510183",

            value: "邛崃市",

            parentId: "510100"

        },

        {

            id: "510184",

            value: "崇州市",

            parentId: "510100"

        },

        {

            id: "510302",

            value: "自流井区",



            parentId: "510300"

        },

        {

            id: "510303",

            value: "贡井区",

            parentId: "510300"

        },

        {

            id: "510304",

            value: "大安区",

            parentId: "510300"

        },

        {

            id: "510311",

            value: "沿滩区",

            parentId: "510300"

        },

        {

            id: "510321",

            value: "荣县",

            parentId: "510300"

        },

        {

            id: "510322",

            value: "富顺县",

            parentId: "510300"

        },

        {

            id: "510402",

            value: "东区",

            parentId: "510400"

        },

        {

            id: "510403",

            value: "西区",

            parentId: "510400"

        },

        {

            id: "510411",

            value: "仁和区",

            parentId: "510400"

        },

        {

            id: "510421",

            value: "米易县",

            parentId: "510400"

        },

        {

            id: "510422",

            value: "盐边县",

            parentId: "510400"

        },

        {

            id: "510502",

            value: "江阳区",

            parentId: "510500"

        },

        {

            id: "510503",

            value: "纳溪区",

            parentId: "510500"

        },

        {

            id: "510504",

            value: "龙马潭区",

            parentId: "510500"

        },

        {

            id: "510521",

            value: "泸县",

            parentId: "510500"

        },

        {

            id: "510522",

            value: "合江县",

            parentId: "510500"

        },

        {

            id: "510524",

            value: "叙永县",

            parentId: "510500"

        },

        {

            id: "510525",

            value: "古蔺县",

            parentId: "510500"

        },

        {

            id: "510603",

            value: "旌阳区",

            parentId: "510600"

        },

        {

            id: "510623",

            value: "中江县",

            parentId: "510600"

        },

        {

            id: "510626",

            value: "罗江县",

            parentId: "510600"

        },

        {

            id: "510681",

            value: "广汉市",

            parentId: "510600"

        },

        {

            id: "510682",

            value: "什邡市",

            parentId: "510600"

        },

        {

            id: "510683",

            value: "绵竹市",

            parentId: "510600"

        },

        {

            id: "510703",

            value: "涪城区",

            parentId: "510700"

        },

        {

            id: "510704",

            value: "游仙区",

            parentId: "510700"

        },

        {

            id: "510722",

            value: "三台县",

            parentId: "510700"

        },

        {

            id: "510723",

            value: "盐亭县",

            parentId: "510700"

        },

        {

            id: "510724",

            value: "安县",

            parentId: "510700"

        },

        {

            id: "510725",

            value: "梓潼县",

            parentId: "510700"

        },

        {

            id: "510726",

            value: "北川羌族自治县",

            parentId: "510700"

        },

        {

            id: "510727",

            value: "平武县",

            parentId: "510700"

        },

        {

            id: "510781",

            value: "江油市",

            parentId: "510700"

        },

        {

            id: "510802",

            value: "利州区",

            parentId: "510800"

        },

        {

            id: "510811",

            value: "元坝区",

            parentId: "510800"

        },

        {

            id: "510812",

            value: "朝天区",

            parentId: "510800"

        },

        {

            id: "510821",

            value: "旺苍县",

            parentId: "510800"

        },

        {

            id: "510822",

            value: "青川县",

            parentId: "510800"

        },

        {

            id: "510823",

            value: "剑阁县",

            parentId: "510800"

        },

        {

            id: "510824",

            value: "苍溪县",

            parentId: "510800"

        },

        {

            id: "510903",

            value: "船山区",

            parentId: "510900"

        },

        {

            id: "510904",

            value: "安居区",

            parentId: "510900"

        },

        {

            id: "510921",

            value: "蓬溪县",

            parentId: "510900"

        },

        {

            id: "510922",

            value: "射洪县",

            parentId: "510900"

        },

        {

            id: "510923",

            value: "大英县",

            parentId: "510900"

        },

        {

            id: "511002",

            value: "市中区",

            parentId: "511000"

        },

        {

            id: "511011",

            value: "东兴区",

            parentId: "511000"

        },

        {

            id: "511024",

            value: "威远县",

            parentId: "511000"

        },

        {

            id: "511025",

            value: "资中县",

            parentId: "511000"

        },

        {

            id: "511028",

            value: "隆昌县",

            parentId: "511000"

        },

        {

            id: "511102",

            value: "市中区",

            parentId: "511100"

        },

        {

            id: "511111",

            value: "沙湾区",

            parentId: "511100"

        },

        {

            id: "511112",

            value: "五通桥区",

            parentId: "511100"

        },

        {

            id: "511113",

            value: "金口河区",

            parentId: "511100"

        },

        {

            id: "511123",

            value: "犍为县",

            parentId: "511100"

        },

        {

            id: "511124",

            value: "井研县",

            parentId: "511100"

        },

        {

            id: "511126",

            value: "夹江县",

            parentId: "511100"

        },

        {

            id: "511129",

            value: "沐川县",

            parentId: "511100"

        },

        {

            id: "511132",

            value: "峨边彝族自治县",

            parentId: "511100"

        },

        {

            id: "511133",

            value: "马边彝族自治县",

            parentId: "511100"

        },

        {

            id: "511181",

            value: "峨眉山市",

            parentId: "511100"

        },

        {

            id: "511302",

            value: "顺庆区",

            parentId: "511300"

        },

        {

            id: "511303",

            value: "高坪区",

            parentId: "511300"

        },

        {

            id: "511304",

            value: "嘉陵区",

            parentId: "511300"

        },

        {

            id: "511321",

            value: "南部县",

            parentId: "511300"

        },

        {

            id: "511322",

            value: "营山县",

            parentId: "511300"

        },

        {

            id: "511323",

            value: "蓬安县",

            parentId: "511300"

        },

        {

            id: "511324",

            value: "仪陇县",

            parentId: "511300"

        },

        {

            id: "511325",

            value: "西充县",

            parentId: "511300"

        },

        {

            id: "511381",

            value: "阆中市",

            parentId: "511300"

        },

        {

            id: "511402",

            value: "东坡区",

            parentId: "511400"

        },

        {

            id: "511421",

            value: "仁寿县",

            parentId: "511400"

        },

        {

            id: "511422",

            value: "彭山县",

            parentId: "511400"

        },

        {

            id: "511423",

            value: "洪雅县",

            parentId: "511400"

        },

        {

            id: "511424",

            value: "丹棱县",

            parentId: "511400"

        },

        {

            id: "511425",

            value: "青神县",

            parentId: "511400"

        },

        {

            id: "511502",

            value: "翠屏区",

            parentId: "511500"

        },

        {

            id: "511521",

            value: "宜宾县",

            parentId: "511500"

        },

        {

            id: "511522",

            value: "南溪区",

            parentId: "511500"

        },

        {

            id: "511523",

            value: "江安县",

            parentId: "511500"

        },

        {

            id: "511524",

            value: "长宁县",

            parentId: "511500"

        },

        {

            id: "511525",

            value: "高县",

            parentId: "511500"

        },

        {

            id: "511526",

            value: "珙县",

            parentId: "511500"

        },

        {

            id: "511527",

            value: "筠连县",

            parentId: "511500"

        },

        {

            id: "511528",

            value: "兴文县",

            parentId: "511500"

        },

        {

            id: "511529",

            value: "屏山县",

            parentId: "511500"

        },

        {

            id: "511602",

            value: "广安区",

            parentId: "511600"

        },

        {

            id: "511621",

            value: "岳池县",

            parentId: "511600"

        },

        {

            id: "511622",

            value: "武胜县",

            parentId: "511600"

        },

        {

            id: "511623",

            value: "邻水县",

            parentId: "511600"

        },

        {

            id: "511681",

            value: "华蓥市",

            parentId: "511600"

        },

        {

            id: "511702",

            value: "通川区",

            parentId: "511700"

        },

        {

            id: "511721",

            value: "达县",

            parentId: "511700"

        },

        {

            id: "511722",

            value: "宣汉县",

            parentId: "511700"

        },

        {

            id: "511723",

            value: "开江县",

            parentId: "511700"

        },

        {

            id: "511724",

            value: "大竹县",

            parentId: "511700"

        },

        {

            id: "511725",

            value: "渠县",

            parentId: "511700"

        },

        {

            id: "511781",

            value: "万源市",

            parentId: "511700"

        },

        {

            id: "511802",

            value: "雨城区",

            parentId: "511800"

        },

        {

            id: "511821",

            value: "名山县",

            parentId: "511800"

        },

        {

            id: "511822",

            value: "荥经县",

            parentId: "511800"

        },

        {

            id: "511823",

            value: "汉源县",

            parentId: "511800"

        },

        {

            id: "511824",

            value: "石棉县",

            parentId: "511800"

        },

        {

            id: "511825",

            value: "天全县",

            parentId: "511800"

        },

        {

            id: "511826",

            value: "芦山县",

            parentId: "511800"

        },

        {

            id: "511827",

            value: "宝兴县",

            parentId: "511800"

        },

        {

            id: "511902",

            value: "巴州区",

            parentId: "511900"

        },

        {

            id: "511921",

            value: "通江县",

            parentId: "511900"

        },

        {

            id: "511922",

            value: "南江县",

            parentId: "511900"

        },

        {

            id: "511923",

            value: "平昌县",

            parentId: "511900"

        },

        {

            id: "512002",

            value: "雁江区",

            parentId: "512000"

        },

        {

            id: "512021",

            value: "安岳县",

            parentId: "512000"

        },

        {

            id: "512022",

            value: "乐至县",

            parentId: "512000"

        },

        {

            id: "512081",

            value: "简阳市",

            parentId: "512000"

        },

        {

            id: "513221",

            value: "汶川县",

            parentId: "513200"

        },

        {

            id: "513222",

            value: "理县",

            parentId: "513200"

        },

        {

            id: "513223",

            value: "茂县",

            parentId: "513200"

        },

        {

            id: "513224",

            value: "松潘县",

            parentId: "513200"

        },

        {

            id: "513225",

            value: "九寨沟县",

            parentId: "513200"

        },

        {

            id: "513226",

            value: "金川县",

            parentId: "513200"

        },

        {

            id: "513227",

            value: "小金县",

            parentId: "513200"

        },

        {

            id: "513228",

            value: "黑水县",

            parentId: "513200"

        },

        {

            id: "513229",

            value: "马尔康县",

            parentId: "513200"

        },

        {

            id: "513230",

            value: "壤塘县",

            parentId: "513200"

        },

        {

            id: "513231",

            value: "阿坝县",

            parentId: "513200"

        },

        {

            id: "513232",

            value: "若尔盖县",

            parentId: "513200"

        },

        {

            id: "513233",

            value: "红原县",

            parentId: "513200"

        },

        {

            id: "513321",

            value: "康定县",

            parentId: "513300"

        },

        {

            id: "513322",

            value: "泸定县",

            parentId: "513300"

        },

        {

            id: "513323",

            value: "丹巴县",

            parentId: "513300"

        },

        {

            id: "513324",

            value: "九龙县",

            parentId: "513300"

        },

        {

            id: "513325",

            value: "雅江县",

            parentId: "513300"

        },

        {

            id: "513326",

            value: "道孚县",

            parentId: "513300"

        },

        {

            id: "513327",

            value: "炉霍县",

            parentId: "513300"

        },

        {

            id: "513328",

            value: "甘孜县",

            parentId: "513300"

        },

        {

            id: "513329",

            value: "新龙县",

            parentId: "513300"

        },

        {

            id: "513330",

            value: "德格县",

            parentId: "513300"

        },

        {

            id: "513331",

            value: "白玉县",

            parentId: "513300"

        },

        {

            id: "513332",

            value: "石渠县",

            parentId: "513300"

        },

        {

            id: "513333",

            value: "色达县",

            parentId: "513300"

        },

        {

            id: "513334",

            value: "理塘县",

            parentId: "513300"

        },

        {

            id: "513335",

            value: "巴塘县",

            parentId: "513300"

        },

        {

            id: "513336",

            value: "乡城县",

            parentId: "513300"

        },

        {

            id: "513337",

            value: "稻城县",

            parentId: "513300"

        },

        {

            id: "513338",

            value: "得荣县",

            parentId: "513300"

        },

        {

            id: "513401",

            value: "西昌市",

            parentId: "513400"

        },

        {

            id: "513422",

            value: "木里藏族自治县",

            parentId: "513400"

        },

        {

            id: "513423",

            value: "盐源县",

            parentId: "513400"

        },

        {

            id: "513424",

            value: "德昌县",

            parentId: "513400"

        },

        {

            id: "513425",

            value: "会理县",

            parentId: "513400"

        },

        {

            id: "513426",

            value: "会东县",

            parentId: "513400"

        },

        {

            id: "513427",

            value: "宁南县",

            parentId: "513400"

        },

        {

            id: "513428",

            value: "普格县",

            parentId: "513400"

        },

        {

            id: "513429",

            value: "布拖县",

            parentId: "513400"

        },

        {

            id: "513430",

            value: "金阳县",

            parentId: "513400"

        },

        {

            id: "513431",

            value: "昭觉县",

            parentId: "513400"

        },

        {

            id: "513432",

            value: "喜德县",

            parentId: "513400"

        },

        {

            id: "513433",

            value: "冕宁县",

            parentId: "513400"

        },

        {

            id: "513434",

            value: "越西县",

            parentId: "513400"

        },

        {

            id: "513435",

            value: "甘洛县",

            parentId: "513400"

        },

        {

            id: "513436",

            value: "美姑县",

            parentId: "513400"

        },

        {

            id: "513437",

            value: "雷波县",

            parentId: "513400"

        },

        {

            id: "520102",

            value: "南明区",

            parentId: "520100"

        },

        {

            id: "520103",

            value: "云岩区",

            parentId: "520100"

        },

        {

            id: "520111",

            value: "花溪区",

            parentId: "520100"

        },

        {

            id: "520112",

            value: "乌当区",

            parentId: "520100"

        },

        {

            id: "520113",

            value: "白云区",

            parentId: "520100"

        },

        {

            id: "520114",

            value: "小河区",

            parentId: "520100"

        },

        {

            id: "520121",

            value: "开阳县",

            parentId: "520100"

        },

        {

            id: "520122",

            value: "息烽县",

            parentId: "520100"

        },

        {

            id: "520123",

            value: "修文县",

            parentId: "520100"

        },

        {

            id: "520181",

            value: "清镇市",

            parentId: "520100"

        },

        {

            id: "520201",

            value: "钟山区",

            parentId: "520200"

        },

        {

            id: "520203",

            value: "六枝特区",

            parentId: "520200"

        },

        {

            id: "520221",

            value: "水城县",

            parentId: "520200"

        },

        {

            id: "520222",

            value: "盘县",

            parentId: "520200"

        },

        {

            id: "520302",

            value: "红花岗区",

            parentId: "520300"

        },

        {

            id: "520303",

            value: "汇川区",

            parentId: "520300"

        },

        {

            id: "520321",

            value: "遵义县",

            parentId: "520300"

        },

        {

            id: "520322",

            value: "桐梓县",

            parentId: "520300"

        },

        {

            id: "520323",

            value: "绥阳县",

            parentId: "520300"

        },

        {

            id: "520324",

            value: "正安县",

            parentId: "520300"

        },

        {

            id: "520325",

            value: "道真仡佬族苗族自治县",

            parentId: "520300"

        },

        {

            id: "520326",

            value: "务川仡佬族苗族自治县",

            parentId: "520300"

        },

        {

            id: "520327",

            value: "凤冈县",

            parentId: "520300"

        },

        {

            id: "520328",

            value: "湄潭县",

            parentId: "520300"

        },

        {

            id: "520329",

            value: "余庆县",

            parentId: "520300"

        },

        {

            id: "520330",

            value: "习水县",

            parentId: "520300"

        },

        {

            id: "520381",

            value: "赤水市",

            parentId: "520300"

        },

        {

            id: "520382",

            value: "仁怀市",

            parentId: "520300"

        },

        {

            id: "520402",

            value: "西秀区",

            parentId: "520400"

        },

        {

            id: "520421",

            value: "平坝县",

            parentId: "520400"

        },

        {

            id: "520422",

            value: "普定县",

            parentId: "520400"

        },

        {

            id: "520423",

            value: "镇宁布依族苗族自治县",

            parentId: "520400"

        },

        {

            id: "520424",

            value: "关岭布依族苗族自治县",

            parentId: "520400"

        },

        {

            id: "520425",

            value: "紫云苗族布依族自治县",

            parentId: "520400"

        },

        {

            id: "522201",

            value: "铜仁市",

            parentId: "522200"

        },

        {

            id: "522301",

            value: "兴义市",

            parentId: "522300"

        },

        {

            id: "522322",

            value: "兴仁县",

            parentId: "522300"

        },

        {

            id: "522323",

            value: "普安县",

            parentId: "522300"

        },

        {

            id: "522324",

            value: "晴隆县",

            parentId: "522300"

        },

        {

            id: "522325",

            value: "贞丰县",

            parentId: "522300"

        },

        {

            id: "522326",

            value: "望谟县",

            parentId: "522300"

        },

        {

            id: "522327",

            value: "册亨县",

            parentId: "522300"

        },

        {

            id: "522328",

            value: "安龙县",

            parentId: "522300"

        },

        {

            id: "522401",

            value: "毕节市",

            parentId: "522400"

        },

        {

            id: "522601",

            value: "凯里市",

            parentId: "522600"

        },

        {

            id: "522622",

            value: "黄平县",

            parentId: "522600"

        },

        {

            id: "522623",

            value: "施秉县",

            parentId: "522600"

        },

        {

            id: "522624",

            value: "三穗县",

            parentId: "522600"

        },

        {

            id: "522625",

            value: "镇远县",

            parentId: "522600"

        },

        {

            id: "522626",

            value: "岑巩县",

            parentId: "522600"

        },

        {

            id: "522627",

            value: "天柱县",

            parentId: "522600"

        },

        {

            id: "522628",

            value: "锦屏县",

            parentId: "522600"

        },

        {

            id: "522629",

            value: "剑河县",

            parentId: "522600"

        },

        {

            id: "522630",

            value: "台江县",

            parentId: "522600"

        },

        {

            id: "522631",

            value: "黎平县",

            parentId: "522600"

        },

        {

            id: "522632",

            value: "榕江县",

            parentId: "522600"

        },

        {

            id: "522633",

            value: "从江县",

            parentId: "522600"

        },

        {

            id: "522634",

            value: "雷山县",

            parentId: "522600"

        },

        {

            id: "522635",

            value: "麻江县",

            parentId: "522600"

        },

        {

            id: "522636",

            value: "丹寨县",

            parentId: "522600"

        },

        {

            id: "522701",

            value: "都匀市",

            parentId: "522700"

        },

        {

            id: "522702",

            value: "福泉市",

            parentId: "522700"

        },

        {

            id: "522722",

            value: "荔波县",

            parentId: "522700"

        },

        {

            id: "522723",

            value: "贵定县",

            parentId: "522700"

        },

        {

            id: "522725",

            value: "瓮安县",

            parentId: "522700"

        },

        {

            id: "522726",

            value: "独山县",

            parentId: "522700"

        },

        {

            id: "522727",

            value: "平塘县",

            parentId: "522700"

        },

        {

            id: "522728",

            value: "罗甸县",

            parentId: "522700"

        },

        {

            id: "522729",

            value: "长顺县",

            parentId: "522700"

        },

        {

            id: "522730",

            value: "龙里县",

            parentId: "522700"

        },

        {

            id: "522731",

            value: "惠水县",

            parentId: "522700"

        },

        {

            id: "522732",

            value: "三都水族自治县",

            parentId: "522700"

        },

        {

            id: "530102",

            value: "五华区",

            parentId: "530100"

        },

        {

            id: "530103",

            value: "盘龙区",

            parentId: "530100"

        },

        {

            id: "530111",

            value: "官渡区",

            parentId: "530100"

        },

        {

            id: "530112",

            value: "西山区",

            parentId: "530100"

        },

        {

            id: "530113",

            value: "东川区",

            parentId: "530100"

        },

        {

            id: "530121",

            value: "呈贡区",

            parentId: "530100"

        },

        {

            id: "530122",

            value: "晋宁县",

            parentId: "530100"

        },

        {

            id: "530124",

            value: "富民县",

            parentId: "530100"

        },

        {

            id: "530125",

            value: "宜良县",

            parentId: "530100"

        },

        {

            id: "530126",

            value: "石林彝族自治县",

            parentId: "530100"

        },

        {

            id: "530127",

            value: "嵩明县",

            parentId: "530100"

        },

        {

            id: "530128",

            value: "禄劝彝族苗族自治县",

            parentId: "530100"

        },

        {

            id: "530129",

            value: "寻甸回族彝族自治县",

            parentId: "530100"

        },

        {

            id: "530181",

            value: "安宁市",

            parentId: "530100"

        },

        {

            id: "530302",

            value: "麒麟区",

            parentId: "530300"

        },

        {

            id: "530321",

            value: "马龙县",

            parentId: "530300"

        },

        {

            id: "530322",

            value: "陆良县",

            parentId: "530300"

        },

        {

            id: "530323",

            value: "师宗县",

            parentId: "530300"

        },

        {

            id: "530324",

            value: "罗平县",

            parentId: "530300"

        },

        {

            id: "530325",

            value: "富源县",

            parentId: "530300"

        },

        {

            id: "530326",

            value: "会泽县",

            parentId: "530300"

        },

        {

            id: "530328",

            value: "沾益县",

            parentId: "530300"

        },

        {

            id: "530381",

            value: "宣威市",

            parentId: "530300"

        },

        {

            id: "530402",

            value: "红塔区",

            parentId: "530400"

        },

        {

            id: "530421",

            value: "江川县",

            parentId: "530400"

        },

        {

            id: "530422",

            value: "澄江县",

            parentId: "530400"

        },

        {

            id: "530423",

            value: "通海县",

            parentId: "530400"

        },

        {

            id: "530424",

            value: "华宁县",

            parentId: "530400"

        },

        {

            id: "530425",

            value: "易门县",

            parentId: "530400"

        },

        {

            id: "530426",

            value: "峨山彝族自治县",

            parentId: "530400"

        },

        {

            id: "530427",

            value: "新平彝族傣族自治县",

            parentId: "530400"

        },

        {

            id: "530428",

            value: "元江哈尼族彝族傣族自治县",

            parentId: "530400"

        },

        {

            id: "530502",

            value: "隆阳区",

            parentId: "530500"

        },

        {

            id: "530521",

            value: "施甸县",

            parentId: "530500"

        },

        {

            id: "530522",

            value: "腾冲县",

            parentId: "530500"

        },

        {

            id: "530523",

            value: "龙陵县",

            parentId: "530500"

        },

        {

            id: "530524",

            value: "昌宁县",

            parentId: "530500"

        },

        {

            id: "530602",

            value: "昭阳区",

            parentId: "530600"

        },

        {

            id: "530621",

            value: "鲁甸县",

            parentId: "530600"

        },

        {

            id: "530622",

            value: "巧家县",

            parentId: "530600"

        },

        {

            id: "530623",

            value: "盐津县",

            parentId: "530600"

        },

        {

            id: "530624",

            value: "大关县",

            parentId: "530600"

        },

        {

            id: "530625",

            value: "永善县",

            parentId: "530600"

        },

        {

            id: "530626",

            value: "绥江县",

            parentId: "530600"

        },

        {

            id: "530627",

            value: "镇雄县",

            parentId: "530600"

        },

        {

            id: "530628",

            value: "彝良县",

            parentId: "530600"

        },

        {

            id: "530629",

            value: "威信县",

            parentId: "530600"

        },

        {

            id: "530630",

            value: "水富县",

            parentId: "530600"

        },

        {

            id: "530702",

            value: "古城区",

            parentId: "530700"

        },

        {

            id: "530721",

            value: "玉龙纳西族自治县",

            parentId: "530700"

        },

        {

            id: "530722",

            value: "永胜县",

            parentId: "530700"

        },

        {

            id: "530723",

            value: "华坪县",

            parentId: "530700"

        },

        {

            id: "530724",

            value: "宁蒗彝族自治县",

            parentId: "530700"

        },

        {

            id: "530802",

            value: "思茅区",

            parentId: "530800"

        },

        {

            id: "530821",

            value: "宁洱哈尼族彝族自治县",

            parentId: "530800"

        },

        {

            id: "530822",

            value: "墨江哈尼族自治县",

            parentId: "530800"

        },

        {

            id: "530823",

            value: "景东彝族自治县",

            parentId: "530800"

        },

        {

            id: "530824",

            value: "景谷傣族彝族自治县",

            parentId: "530800"

        },

        {

            id: "530825",

            value: "镇沅彝族哈尼族拉祜族自治县",

            parentId: "530800"

        },

        {

            id: "530826",

            value: "江城哈尼族彝族自治县",

            parentId: "530800"

        },

        {

            id: "530827",

            value: "孟连傣族拉祜族佤族自治县",

            parentId: "530800"

        },

        {

            id: "530828",

            value: "澜沧拉祜族自治县",

            parentId: "530800"

        },

        {

            id: "530829",

            value: "西盟佤族自治县",

            parentId: "530800"

        },

        {

            id: "530902",

            value: "临翔区",

            parentId: "530900"

        },

        {

            id: "530921",

            value: "凤庆县",

            parentId: "530900"

        },

        {

            id: "530922",

            value: "云县",

            parentId: "530900"

        },

        {

            id: "530923",

            value: "永德县",

            parentId: "530900"

        },

        {

            id: "530924",

            value: "镇康县",

            parentId: "530900"

        },

        {

            id: "530925",

            value: "双江拉祜族佤族布朗族傣族自治县",

            parentId: "530900"

        },

        {

            id: "530926",

            value: "耿马傣族佤族自治县",

            parentId: "530900"

        },

        {

            id: "530927",

            value: "沧源佤族自治县",

            parentId: "530900"

        },

        {

            id: "532301",

            value: "楚雄市",

            parentId: "532300"

        },

        {

            id: "532322",

            value: "双柏县",

            parentId: "532300"

        },

        {

            id: "532323",

            value: "牟定县",

            parentId: "532300"

        },

        {

            id: "532324",

            value: "南华县",

            parentId: "532300"

        },

        {

            id: "532325",

            value: "姚安县",

            parentId: "532300"

        },

        {

            id: "532326",

            value: "大姚县",

            parentId: "532300"

        },

        {

            id: "532327",

            value: "永仁县",

            parentId: "532300"

        },

        {

            id: "532328",

            value: "元谋县",

            parentId: "532300"

        },

        {

            id: "532329",

            value: "武定县",

            parentId: "532300"

        },

        {

            id: "532331",

            value: "禄丰县",

            parentId: "532300"

        },

        {

            id: "532501",

            value: "个旧市",

            parentId: "532500"

        },

        {

            id: "532502",

            value: "开远市",

            parentId: "532500"

        },

        {

            id: "532503",

            value: "蒙自市",

            parentId: "532500"

        },

        {

            id: "532523",

            value: "屏边苗族自治县",

            parentId: "532500"

        },

        {

            id: "532524",

            value: "建水县",

            parentId: "532500"

        },

        {

            id: "532525",

            value: "石屏县",

            parentId: "532500"

        },

        {

            id: "532526",

            value: "弥勒县",

            parentId: "532500"

        },

        {

            id: "532527",

            value: "泸西县",

            parentId: "532500"

        },

        {

            id: "532528",

            value: "元阳县",

            parentId: "532500"

        },

        {

            id: "532529",

            value: "红河县",

            parentId: "532500"

        },

        {

            id: "532530",

            value: "金平苗族瑶族傣族自治县",

            parentId: "532500"

        },

        {

            id: "532531",

            value: "绿春县",

            parentId: "532500"

        },

        {

            id: "532532",

            value: "河口瑶族自治县",

            parentId: "532500"

        },

        {

            id: "532621",

            value: "文山市",

            parentId: "532600"

        },

        {

            id: "532622",

            value: "砚山县",

            parentId: "532600"

        },

        {

            id: "532623",

            value: "西畴县",

            parentId: "532600"

        },

        {

            id: "532624",

            value: "麻栗坡县",

            parentId: "532600"

        },

        {

            id: "532625",

            value: "马关县",

            parentId: "532600"

        },

        {

            id: "532626",

            value: "丘北县",

            parentId: "532600"

        },

        {

            id: "532627",

            value: "广南县",

            parentId: "532600"

        },

        {

            id: "532628",

            value: "富宁县",

            parentId: "532600"

        },

        {

            id: "532801",

            value: "景洪市",

            parentId: "532800"

        },

        {

            id: "532822",

            value: "勐海县",

            parentId: "532800"

        },

        {

            id: "532823",

            value: "勐腊县",

            parentId: "532800"

        },

        {

            id: "532901",

            value: "大理市",

            parentId: "532900"

        },

        {

            id: "532922",

            value: "漾濞彝族自治县",

            parentId: "532900"

        },

        {

            id: "532923",

            value: "祥云县",

            parentId: "532900"

        },

        {

            id: "532924",

            value: "宾川县",

            parentId: "532900"

        },

        {

            id: "532925",

            value: "弥渡县",

            parentId: "532900"

        },

        {

            id: "532926",

            value: "南涧彝族自治县",

            parentId: "532900"

        },

        {

            id: "532927",

            value: "巍山彝族回族自治县",

            parentId: "532900"

        },

        {

            id: "532928",

            value: "永平县",

            parentId: "532900"

        },

        {

            id: "532929",

            value: "云龙县",

            parentId: "532900"

        },

        {

            id: "532930",

            value: "洱源县",

            parentId: "532900"

        },

        {

            id: "532931",

            value: "剑川县",

            parentId: "532900"

        },

        {

            id: "532932",

            value: "鹤庆县",

            parentId: "532900"

        },

        {

            id: "533102",

            value: "瑞丽市",

            parentId: "533100"

        },

        {

            id: "533103",

            value: "芒市",

            parentId: "533100"

        },

        {

            id: "533122",

            value: "梁河县",

            parentId: "533100"

        },

        {

            id: "533123",

            value: "盈江县",

            parentId: "533100"

        },

        {

            id: "533124",

            value: "陇川县",

            parentId: "533100"

        },

        {

            id: "533321",

            value: "泸水县",

            parentId: "533300"

        },

        {

            id: "533323",

            value: "福贡县",

            parentId: "533300"

        },

        {

            id: "533324",

            value: "贡山独龙族怒族自治县",

            parentId: "533300"

        },

        {

            id: "533325",

            value: "兰坪白族普米族自治县",

            parentId: "533300"

        },

        {

            id: "533421",

            value: "香格里拉县",

            parentId: "533400"

        },

        {

            id: "533422",

            value: "德钦县",

            parentId: "533400"

        },

        {

            id: "533423",

            value: "维西傈僳族自治县",

            parentId: "533400"

        },

        {

            id: "540102",

            value: "城关区",

            parentId: "540100"

        },

        {

            id: "540121",

            value: "林周县",

            parentId: "540100"

        },

        {

            id: "540122",

            value: "当雄县",

            parentId: "540100"

        },

        {

            id: "540123",

            value: "尼木县",

            parentId: "540100"

        },

        {

            id: "540124",

            value: "曲水县",

            parentId: "540100"

        },

        {

            id: "540125",

            value: "堆龙德庆县",

            parentId: "540100"

        },

        {

            id: "540126",

            value: "达孜县",

            parentId: "540100"

        },

        {

            id: "540127",

            value: "墨竹工卡县",

            parentId: "540100"

        },

        {

            id: "542121",

            value: "昌都县",

            parentId: "542100"

        },

        {

            id: "542122",

            value: "江达县",

            parentId: "542100"

        },

        {

            id: "542123",

            value: "贡觉县",

            parentId: "542100"

        },

        {

            id: "542124",

            value: "类乌齐县",

            parentId: "542100"

        },

        {

            id: "542125",

            value: "丁青县",

            parentId: "542100"

        },

        {

            id: "542126",

            value: "察雅县",

            parentId: "542100"

        },

        {

            id: "542127",

            value: "八宿县",

            parentId: "542100"

        },

        {

            id: "542128",

            value: "左贡县",

            parentId: "542100"

        },

        {

            id: "542129",

            value: "芒康县",

            parentId: "542100"

        },

        {

            id: "542132",

            value: "洛隆县",

            parentId: "542100"

        },

        {

            id: "542133",

            value: "边坝县",

            parentId: "542100"

        },

        {

            id: "542221",

            value: "乃东县",

            parentId: "542200"

        },

        {

            id: "542222",

            value: "扎囊县",

            parentId: "542200"

        },

        {

            id: "542223",

            value: "贡嘎县",

            parentId: "542200"

        },

        {

            id: "542224",

            value: "桑日县",

            parentId: "542200"

        },

        {

            id: "542225",

            value: "琼结县",

            parentId: "542200"

        },

        {

            id: "542226",

            value: "曲松县",

            parentId: "542200"

        },

        {

            id: "542227",

            value: "措美县",

            parentId: "542200"

        },

        {

            id: "542228",

            value: "洛扎县",

            parentId: "542200"

        },

        {

            id: "542229",

            value: "加查县",

            parentId: "542200"

        },

        {

            id: "542231",

            value: "隆子县",

            parentId: "542200"

        },

        {

            id: "542232",

            value: "错那县",

            parentId: "542200"

        },

        {

            id: "542233",

            value: "浪卡子县",

            parentId: "542200"

        },

        {

            id: "542301",

            value: "日喀则市",

            parentId: "542300"

        },

        {

            id: "542322",

            value: "南木林县",

            parentId: "542300"

        },

        {

            id: "542323",

            value: "江孜县",

            parentId: "542300"

        },

        {

            id: "542324",

            value: "定日县",

            parentId: "542300"

        },

        {

            id: "542325",

            value: "萨迦县",

            parentId: "542300"

        },

        {

            id: "542326",

            value: "拉孜县",

            parentId: "542300"

        },

        {

            id: "542327",

            value: "昂仁县",

            parentId: "542300"

        },

        {

            id: "542328",

            value: "谢通门县",

            parentId: "542300"

        },

        {

            id: "542329",

            value: "白朗县",

            parentId: "542300"

        },

        {

            id: "542330",

            value: "仁布县",

            parentId: "542300"

        },

        {

            id: "542331",

            value: "康马县",

            parentId: "542300"

        },

        {

            id: "542332",

            value: "定结县",

            parentId: "542300"

        },

        {

            id: "542333",

            value: "仲巴县",

            parentId: "542300"

        },

        {

            id: "542334",

            value: "亚东县",

            parentId: "542300"

        },

        {

            id: "542335",

            value: "吉隆县",

            parentId: "542300"

        },

        {

            id: "542336",

            value: "聂拉木县",

            parentId: "542300"

        },

        {

            id: "542337",

            value: "萨嘎县",

            parentId: "542300"

        },

        {

            id: "542338",

            value: "岗巴县",

            parentId: "542300"

        },

        {

            id: "542421",

            value: "那曲县",

            parentId: "542400"

        },

        {

            id: "542422",

            value: "嘉黎县",

            parentId: "542400"

        },

        {

            id: "542423",

            value: "比如县",

            parentId: "542400"

        },

        {

            id: "542424",

            value: "聂荣县",

            parentId: "542400"

        },

        {

            id: "542425",

            value: "安多县",

            parentId: "542400"

        },

        {

            id: "542426",

            value: "申扎县",

            parentId: "542400"

        },

        {

            id: "542427",

            value: "索县",

            parentId: "542400"

        },

        {

            id: "542428",

            value: "班戈县",

            parentId: "542400"

        },

        {

            id: "542429",

            value: "巴青县",

            parentId: "542400"

        },

        {

            id: "542430",

            value: "尼玛县",

            parentId: "542400"

        },

        {

            id: "542521",

            value: "普兰县",

            parentId: "542500"

        },

        {

            id: "542522",

            value: "札达县",

            parentId: "542500"

        },

        {

            id: "542523",

            value: "噶尔县",

            parentId: "542500"

        },

        {

            id: "542524",

            value: "日土县",

            parentId: "542500"

        },

        {

            id: "542525",

            value: "革吉县",

            parentId: "542500"

        },

        {

            id: "542526",

            value: "改则县",

            parentId: "542500"

        },

        {

            id: "542527",

            value: "措勤县",

            parentId: "542500"

        },

        {

            id: "542621",

            value: "林芝县",

            parentId: "542600"

        },

        {

            id: "542622",

            value: "工布江达县",

            parentId: "542600"

        },

        {

            id: "542623",

            value: "米林县",

            parentId: "542600"

        },

        {

            id: "542624",

            value: "墨脱县",

            parentId: "542600"

        },

        {

            id: "542625",

            value: "波密县",

            parentId: "542600"

        },

        {

            id: "542626",

            value: "察隅县",

            parentId: "542600"

        },

        {

            id: "542627",

            value: "朗县",

            parentId: "542600"

        },

        {

            id: "610102",

            value: "新城区",

            parentId: "610100"

        },

        {

            id: "610103",

            value: "碑林区",

            parentId: "610100"

        },

        {

            id: "610104",

            value: "莲湖区",

            parentId: "610100"

        },

        {

            id: "610111",

            value: "灞桥区",

            parentId: "610100"

        },

        {

            id: "610112",

            value: "未央区",

            parentId: "610100"

        },

        {

            id: "610113",

            value: "雁塔区",

            parentId: "610100"

        },

        {

            id: "610114",

            value: "阎良区",

            parentId: "610100"

        },

        {

            id: "610115",

            value: "临潼区",

            parentId: "610100"

        },

        {

            id: "610116",

            value: "长安区",

            parentId: "610100"

        },

        {

            id: "610122",

            value: "蓝田县",

            parentId: "610100"

        },

        {

            id: "610124",

            value: "周至县",

            parentId: "610100"

        },

        {

            id: "610125",

            value: "户县",

            parentId: "610100"

        },

        {

            id: "610126",

            value: "高陵县",

            parentId: "610100"

        },

        {

            id: "610202",

            value: "王益区",

            parentId: "610200"

        },

        {

            id: "610203",

            value: "印台区",

            parentId: "610200"

        },

        {

            id: "610204",

            value: "耀州区",

            parentId: "610200"

        },

        {

            id: "610222",

            value: "宜君县",

            parentId: "610200"

        },

        {

            id: "610302",

            value: "渭滨区",

            parentId: "610300"

        },

        {

            id: "610303",

            value: "金台区",

            parentId: "610300"

        },

        {

            id: "610304",

            value: "陈仓区",

            parentId: "610300"

        },

        {

            id: "610322",

            value: "凤翔县",

            parentId: "610300"

        },

        {

            id: "610323",

            value: "岐山县",

            parentId: "610300"

        },

        {

            id: "610324",

            value: "扶风县",

            parentId: "610300"

        },

        {

            id: "610326",

            value: "眉县",

            parentId: "610300"

        },

        {

            id: "610327",

            value: "陇县",

            parentId: "610300"

        },

        {

            id: "610328",

            value: "千阳县",

            parentId: "610300"

        },

        {

            id: "610329",

            value: "麟游县",

            parentId: "610300"

        },

        {

            id: "610330",

            value: "凤县",

            parentId: "610300"

        },

        {

            id: "610331",

            value: "太白县",

            parentId: "610300"

        },

        {

            id: "610402",

            value: "秦都区",

            parentId: "610400"

        },

        {

            id: "610403",

            value: "杨陵区",

            parentId: "610400"

        },

        {

            id: "610404",

            value: "渭城区",

            parentId: "610400"

        },

        {

            id: "610422",

            value: "三原县",

            parentId: "610400"

        },

        {

            id: "610423",

            value: "泾阳县",

            parentId: "610400"

        },

        {

            id: "610424",

            value: "乾县",

            parentId: "610400"

        },

        {

            id: "610425",

            value: "礼泉县",

            parentId: "610400"

        },

        {

            id: "610426",

            value: "永寿县",

            parentId: "610400"

        },

        {

            id: "610427",

            value: "彬县",

            parentId: "610400"

        },

        {

            id: "610428",

            value: "长武县",

            parentId: "610400"

        },

        {

            id: "610429",

            value: "旬邑县",

            parentId: "610400"

        },

        {

            id: "610430",

            value: "淳化县",

            parentId: "610400"

        },

        {

            id: "610431",

            value: "武功县",

            parentId: "610400"

        },

        {

            id: "610481",

            value: "兴平市",

            parentId: "610400"

        },

        {

            id: "610502",

            value: "临渭区",

            parentId: "610500"

        },

        {

            id: "610521",

            value: "华县",

            parentId: "610500"

        },

        {

            id: "610522",

            value: "潼关县",

            parentId: "610500"

        },

        {

            id: "610523",

            value: "大荔县",

            parentId: "610500"

        },

        {

            id: "610524",

            value: "合阳县",

            parentId: "610500"

        },

        {

            id: "610525",

            value: "澄城县",

            parentId: "610500"

        },

        {

            id: "610526",

            value: "蒲城县",

            parentId: "610500"

        },

        {

            id: "610527",

            value: "白水县",

            parentId: "610500"

        },

        {

            id: "610528",

            value: "富平县",

            parentId: "610500"

        },

        {

            id: "610581",

            value: "韩城市",

            parentId: "610500"

        },

        {

            id: "610582",

            value: "华阴市",

            parentId: "610500"

        },

        {

            id: "610602",

            value: "宝塔区",

            parentId: "610600"

        },

        {

            id: "610621",

            value: "延长县",

            parentId: "610600"

        },

        {

            id: "610622",

            value: "延川县",

            parentId: "610600"

        },

        {

            id: "610623",

            value: "子长县",

            parentId: "610600"

        },

        {

            id: "610624",

            value: "安塞县",

            parentId: "610600"

        },

        {

            id: "610625",

            value: "志丹县",

            parentId: "610600"

        },

        {

            id: "610626",

            value: "吴起县",

            parentId: "610600"

        },

        {

            id: "610627",

            value: "甘泉县",

            parentId: "610600"

        },

        {

            id: "610628",

            value: "富县",

            parentId: "610600"

        },

        {

            id: "610629",

            value: "洛川县",

            parentId: "610600"

        },

        {

            id: "610630",

            value: "宜川县",

            parentId: "610600"

        },

        {

            id: "610631",

            value: "黄龙县",

            parentId: "610600"

        },

        {

            id: "610632",

            value: "黄陵县",

            parentId: "610600"

        },

        {

            id: "610702",

            value: "汉台区",

            parentId: "610700"

        },

        {

            id: "610721",

            value: "南郑县",

            parentId: "610700"

        },

        {

            id: "610722",

            value: "城固县",

            parentId: "610700"

        },

        {

            id: "610723",

            value: "洋县",

            parentId: "610700"

        },

        {

            id: "610724",

            value: "西乡县",

            parentId: "610700"

        },

        {

            id: "610725",

            value: "勉县",

            parentId: "610700"

        },

        {

            id: "610726",

            value: "宁强县",

            parentId: "610700"

        },

        {

            id: "610727",

            value: "略阳县",

            parentId: "610700"

        },

        {

            id: "610728",

            value: "镇巴县",

            parentId: "610700"

        },

        {

            id: "610729",

            value: "留坝县",

            parentId: "610700"

        },

        {

            id: "610730",

            value: "佛坪县",

            parentId: "610700"

        },

        {

            id: "610802",

            value: "榆阳区",

            parentId: "610800"

        },

        {

            id: "610821",

            value: "神木县",

            parentId: "610800"

        },

        {

            id: "610822",

            value: "府谷县",

            parentId: "610800"

        },

        {

            id: "610823",

            value: "横山县",

            parentId: "610800"

        },

        {

            id: "610824",

            value: "靖边县",

            parentId: "610800"

        },

        {

            id: "610825",

            value: "定边县",

            parentId: "610800"

        },

        {

            id: "610826",

            value: "绥德县",

            parentId: "610800"

        },

        {

            id: "610827",

            value: "米脂县",

            parentId: "610800"

        },

        {

            id: "610828",

            value: "佳县",

            parentId: "610800"

        },

        {

            id: "610829",

            value: "吴堡县",

            parentId: "610800"

        },

        {

            id: "610830",

            value: "清涧县",

            parentId: "610800"

        },

        {

            id: "610831",

            value: "子洲县",

            parentId: "610800"

        },

        {

            id: "610902",

            value: "汉滨区",

            parentId: "610900"

        },

        {

            id: "610921",

            value: "汉阴县",

            parentId: "610900"

        },

        {

            id: "610922",

            value: "石泉县",

            parentId: "610900"

        },

        {

            id: "610923",

            value: "宁陕县",

            parentId: "610900"

        },

        {

            id: "610924",

            value: "紫阳县",

            parentId: "610900"

        },

        {

            id: "610925",

            value: "岚皋县",

            parentId: "610900"

        },

        {

            id: "610926",

            value: "平利县",

            parentId: "610900"

        },

        {

            id: "610927",

            value: "镇坪县",

            parentId: "610900"

        },

        {

            id: "610928",

            value: "旬阳县",

            parentId: "610900"

        },

        {

            id: "610929",

            value: "白河县",

            parentId: "610900"

        },

        {

            id: "611002",

            value: "商州区",

            parentId: "611000"

        },

        {

            id: "611021",

            value: "洛南县",

            parentId: "611000"

        },

        {

            id: "611022",

            value: "丹凤县",

            parentId: "611000"

        },

        {

            id: "611023",

            value: "商南县",

            parentId: "611000"

        },

        {

            id: "611024",

            value: "山阳县",

            parentId: "611000"

        },

        {

            id: "611025",

            value: "镇安县",

            parentId: "611000"

        },

        {

            id: "611026",

            value: "柞水县",

            parentId: "611000"

        },

        {

            id: "620102",

            value: "城关区",

            parentId: "620100"

        },

        {

            id: "620103",

            value: "七里河区",

            parentId: "620100"

        },

        {

            id: "620104",

            value: "西固区",

            parentId: "620100"

        },

        {

            id: "620105",

            value: "安宁区",

            parentId: "620100"

        },

        {

            id: "620111",

            value: "红古区",

            parentId: "620100"

        },

        {

            id: "620121",

            value: "永登县",

            parentId: "620100"

        },

        {

            id: "620122",

            value: "皋兰县",

            parentId: "620100"

        },

        {

            id: "620123",

            value: "榆中县",

            parentId: "620100"

        },

        {

            id: "620201",

            value: "嘉峪关市",

            parentId: "620200"

        },

        {

            id: "620302",

            value: "金川区",

            parentId: "620300"

        },

        {

            id: "620321",

            value: "永昌县",

            parentId: "620300"

        },

        {

            id: "620402",

            value: "白银区",

            parentId: "620400"

        },

        {

            id: "620403",

            value: "平川区",

            parentId: "620400"

        },

        {

            id: "620421",

            value: "靖远县",

            parentId: "620400"

        },

        {

            id: "620422",

            value: "会宁县",

            parentId: "620400"

        },

        {

            id: "620423",

            value: "景泰县",

            parentId: "620400"

        },

        {

            id: "620502",

            value: "秦州区",

            parentId: "620500"

        },

        {

            id: "620503",

            value: "麦积区",

            parentId: "620500"

        },

        {

            id: "620521",

            value: "清水县",

            parentId: "620500"

        },

        {

            id: "620522",

            value: "秦安县",

            parentId: "620500"

        },

        {

            id: "620523",

            value: "甘谷县",

            parentId: "620500"

        },

        {

            id: "620524",

            value: "武山县",

            parentId: "620500"

        },

        {

            id: "620525",

            value: "张家川回族自治县",

            parentId: "620500"

        },

        {

            id: "620602",

            value: "凉州区",

            parentId: "620600"

        },

        {

            id: "620621",

            value: "民勤县",

            parentId: "620600"

        },

        {

            id: "620622",

            value: "古浪县",

            parentId: "620600"

        },

        {

            id: "620623",

            value: "天祝藏族自治县",

            parentId: "620600"

        },

        {

            id: "620702",

            value: "甘州区",

            parentId: "620700"

        },

        {

            id: "620721",

            value: "肃南裕固族自治县",

            parentId: "620700"

        },

        {

            id: "620722",

            value: "民乐县",

            parentId: "620700"

        },

        {

            id: "620723",

            value: "临泽县",

            parentId: "620700"

        },

        {

            id: "620724",

            value: "高台县",

            parentId: "620700"

        },

        {

            id: "620725",

            value: "山丹县",

            parentId: "620700"

        },

        {

            id: "620802",

            value: "崆峒区",

            parentId: "620800"

        },

        {

            id: "620821",

            value: "泾川县",

            parentId: "620800"

        },

        {

            id: "620822",

            value: "灵台县",

            parentId: "620800"

        },

        {

            id: "620823",

            value: "崇信县",

            parentId: "620800"

        },

        {

            id: "620824",

            value: "华亭县",

            parentId: "620800"

        },

        {

            id: "620825",

            value: "庄浪县",

            parentId: "620800"

        },

        {

            id: "620826",

            value: "静宁县",

            parentId: "620800"

        },

        {

            id: "620902",

            value: "肃州区",

            parentId: "620900"

        },

        {

            id: "620921",

            value: "金塔县",

            parentId: "620900"

        },

        {

            id: "620922",

            value: "瓜州县",

            parentId: "620900"

        },

        {

            id: "620923",

            value: "肃北蒙古族自治县",

            parentId: "620900"

        },

        {

            id: "620924",

            value: "阿克塞哈萨克族自治县",

            parentId: "620900"

        },

        {

            id: "620981",

            value: "玉门市",

            parentId: "620900"

        },

        {

            id: "620982",

            value: "敦煌市",

            parentId: "620900"

        },

        {

            id: "621002",

            value: "西峰区",

            parentId: "621000"

        },

        {

            id: "621021",

            value: "庆城县",

            parentId: "621000"

        },

        {

            id: "621022",

            value: "环县",

            parentId: "621000"

        },

        {

            id: "621023",

            value: "华池县",

            parentId: "621000"

        },

        {

            id: "621024",

            value: "合水县",

            parentId: "621000"

        },

        {

            id: "621025",

            value: "正宁县",

            parentId: "621000"

        },

        {

            id: "621026",

            value: "宁县",

            parentId: "621000"

        },

        {

            id: "621027",

            value: "镇原县",

            parentId: "621000"

        },

        {

            id: "621102",

            value: "安定区",

            parentId: "621100"

        },

        {

            id: "621121",

            value: "通渭县",

            parentId: "621100"

        },

        {

            id: "621122",

            value: "陇西县",

            parentId: "621100"

        },

        {

            id: "621123",

            value: "渭源县",

            parentId: "621100"

        },

        {

            id: "621124",

            value: "临洮县",

            parentId: "621100"

        },

        {

            id: "621125",

            value: "漳县",

            parentId: "621100"

        },

        {

            id: "621126",

            value: "岷县",

            parentId: "621100"

        },

        {

            id: "621202",

            value: "武都区",

            parentId: "621200"

        },

        {

            id: "621221",

            value: "成县",

            parentId: "621200"

        },

        {

            id: "621222",

            value: "文县",

            parentId: "621200"

        },

        {

            id: "621223",

            value: "宕昌县",

            parentId: "621200"

        },

        {

            id: "621224",

            value: "康县",

            parentId: "621200"

        },

        {

            id: "621225",

            value: "西和县",

            parentId: "621200"

        },

        {

            id: "621226",

            value: "礼县",

            parentId: "621200"

        },

        {

            id: "621227",

            value: "徽县",

            parentId: "621200"

        },

        {

            id: "621228",

            value: "两当县",

            parentId: "621200"

        },

        {

            id: "622901",

            value: "临夏市",

            parentId: "622900"

        },

        {

            id: "622921",

            value: "临夏县",

            parentId: "622900"

        },

        {

            id: "622922",

            value: "康乐县",

            parentId: "622900"

        },

        {

            id: "622923",

            value: "永靖县",

            parentId: "622900"

        },

        {

            id: "622924",

            value: "广河县",

            parentId: "622900"

        },

        {

            id: "622925",

            value: "和政县",

            parentId: "622900"

        },

        {

            id: "622926",

            value: "东乡族自治县",

            parentId: "622900"

        },

        {

            id: "622927",

            value: "积石山保安族东乡族撒拉族自治县",

            parentId: "622900"

        },

        {

            id: "623001",

            value: "合作市",

            parentId: "623000"

        },

        {

            id: "623021",

            value: "临潭县",

            parentId: "623000"

        },

        {

            id: "623022",

            value: "卓尼县",

            parentId: "623000"

        },

        {

            id: "623023",

            value: "舟曲县",

            parentId: "623000"

        },

        {

            id: "623024",

            value: "迭部县",

            parentId: "623000"

        },

        {

            id: "623025",

            value: "玛曲县",

            parentId: "623000"

        },

        {

            id: "623026",

            value: "碌曲县",

            parentId: "623000"

        },

        {

            id: "623027",

            value: "夏河县",

            parentId: "623000"

        },

        {

            id: "630102",

            value: "城东区",

            parentId: "630100"

        },

        {

            id: "630103",

            value: "城中区",

            parentId: "630100"

        },

        {

            id: "630104",

            value: "城西区",

            parentId: "630100"

        },

        {

            id: "630105",

            value: "城北区",

            parentId: "630100"

        },

        {

            id: "630121",

            value: "大通回族土族自治县",

            parentId: "630100"

        },

        {

            id: "630122",

            value: "湟中县",

            parentId: "630100"

        },

        {

            id: "630123",

            value: "湟源县",

            parentId: "630100"

        },



        {

            id: "632121",

            value: "平安县",

            parentId: "632100"

        },

        {

            id: "632122",

            value: "民和回族土族自治县",

            parentId: "632100"

        },

        {

            id: "632123",

            value: "乐都县",

            parentId: "632100"

        },

        {

            id: "632126",

            value: "互助土族自治县",

            parentId: "632100"

        },

        {

            id: "632127",

            value: "化隆回族自治县",

            parentId: "632100"

        },

        {

            id: "632128",

            value: "循化撒拉族自治县",

            parentId: "632100"

        },

        {

            id: "632221",

            value: "门源回族自治县",

            parentId: "632200"

        },

        {

            id: "632222",

            value: "祁连县",

            parentId: "632200"

        },

        {

            id: "632223",

            value: "海晏县",

            parentId: "632200"

        },

        {

            id: "632224",

            value: "刚察县",

            parentId: "632200"

        },

        {

            id: "632321",

            value: "同仁县",

            parentId: "632300"

        },

        {

            id: "632322",

            value: "尖扎县",

            parentId: "632300"

        },

        {

            id: "632323",

            value: "泽库县",

            parentId: "632300"

        },

        {

            id: "632324",

            value: "河南蒙古族自治县",

            parentId: "632300"

        },

        {

            id: "632521",

            value: "共和县",

            parentId: "632500"

        },

        {

            id: "632522",

            value: "同德县",

            parentId: "632500"

        },

        {

            id: "632523",

            value: "贵德县",

            parentId: "632500"

        },

        {

            id: "632524",

            value: "兴海县",

            parentId: "632500"

        },

        {

            id: "632525",

            value: "贵南县",

            parentId: "632500"

        },

        {

            id: "632621",

            value: "玛沁县",

            parentId: "632600"

        },

        {

            id: "632622",

            value: "班玛县",

            parentId: "632600"

        },

        {

            id: "632623",

            value: "甘德县",

            parentId: "632600"

        },

        {

            id: "632624",

            value: "达日县",

            parentId: "632600"

        },

        {

            id: "632625",

            value: "久治县",

            parentId: "632600"

        },

        {

            id: "632626",

            value: "玛多县",

            parentId: "632600"

        },

        {

            id: "632721",

            value: "玉树县",

            parentId: "632700"

        },

        {

            id: "632722",

            value: "杂多县",

            parentId: "632700"

        },

        {

            id: "632723",

            value: "称多县",

            parentId: "632700"

        },

        {

            id: "632724",

            value: "治多县",

            parentId: "632700"

        },

        {

            id: "632725",

            value: "囊谦县",

            parentId: "632700"

        },

        {

            id: "632726",

            value: "曲麻莱县",

            parentId: "632700"

        },

        {

            id: "632801",

            value: "格尔木市",

            parentId: "632800"

        },

        {

            id: "632802",

            value: "德令哈市",

            parentId: "632800"

        },

        {

            id: "632821",

            value: "乌兰县",

            parentId: "632800"

        },

        {

            id: "632822",

            value: "都兰县",

            parentId: "632800"

        },

        {

            id: "632823",

            value: "天峻县",

            parentId: "632800"

        },

        {

            id: "640104",

            value: "兴庆区",

            parentId: "640100"

        },

        {

            id: "640105",

            value: "西夏区",

            parentId: "640100"

        },

        {

            id: "640106",

            value: "金凤区",

            parentId: "640100"

        },

        {

            id: "640121",

            value: "永宁县",

            parentId: "640100"

        },

        {

            id: "640122",

            value: "贺兰县",

            parentId: "640100"

        },

        {

            id: "640181",

            value: "灵武市",

            parentId: "640100"

        },

        {

            id: "640202",

            value: "大武口区",

            parentId: "640200"

        },

        {

            id: "640205",

            value: "惠农区",

            parentId: "640200"

        },

        {

            id: "640221",

            value: "平罗县",

            parentId: "640200"

        },

        {

            id: "640302",

            value: "利通区",

            parentId: "640300"

        },

        {

            id: "640303",

            value: "红寺堡区",

            parentId: "640300"

        },

        {

            id: "640323",

            value: "盐池县",

            parentId: "640300"

        },

        {

            id: "640324",

            value: "同心县",

            parentId: "640300"

        },

        {

            id: "640381",

            value: "青铜峡市",

            parentId: "640300"

        },

        {

            id: "640402",

            value: "原州区",

            parentId: "640400"

        },

        {

            id: "640422",

            value: "西吉县",

            parentId: "640400"

        },

        {

            id: "640423",

            value: "隆德县",

            parentId: "640400"

        },

        {

            id: "640424",

            value: "泾源县",

            parentId: "640400"

        },

        {

            id: "640425",

            value: "彭阳县",

            parentId: "640400"

        },

        {

            id: "640502",

            value: "沙坡头区",

            parentId: "640500"

        },

        {

            id: "640521",

            value: "中宁县",

            parentId: "640500"

        },

        {

            id: "640522",

            value: "海原县",

            parentId: "640500"

        },

        {

            id: "650102",

            value: "天山区",

            parentId: "650100"

        },

        {

            id: "650103",

            value: "沙依巴克区",

            parentId: "650100"

        },

        {

            id: "650104",

            value: "新市区",

            parentId: "650100"

        },

        {

            id: "650105",

            value: "水磨沟区",

            parentId: "650100"

        },

        {

            id: "650106",

            value: "头屯河区",

            parentId: "650100"

        },

        {

            id: "650107",

            value: "达坂城区",

            parentId: "650100"

        },

        {

            id: "650109",

            value: "米东区",

            parentId: "650100"

        },

        {

            id: "650121",

            value: "乌鲁木齐县",

            parentId: "650100"

        },

        {

            id: "650202",

            value: "独山子区",

            parentId: "650200"

        },

        {

            id: "650203",

            value: "克拉玛依区",

            parentId: "650200"

        },

        {

            id: "650204",

            value: "白碱滩区",

            parentId: "650200"

        },

        {

            id: "650205",

            value: "乌尔禾区",

            parentId: "650200"

        },

        {

            id: "652101",

            value: "吐鲁番市",

            parentId: "652100"

        },

        {

            id: "652122",

            value: "鄯善县",

            parentId: "652100"

        },

        {

            id: "652123",

            value: "托克逊县",

            parentId: "652100"

        },

        {

            id: "652201",

            value: "哈密市",

            parentId: "652200"

        },

        {

            id: "652222",

            value: "巴里坤哈萨克自治县",

            parentId: "652200"

        },

        {

            id: "652223",

            value: "伊吾县",

            parentId: "652200"

        },

        {

            id: "652301",

            value: "昌吉市",

            parentId: "652300"

        },

        {

            id: "652302",

            value: "阜康市",

            parentId: "652300"

        },

        {

            id: "652323",

            value: "呼图壁县",

            parentId: "652300"

        },

        {

            id: "652324",

            value: "玛纳斯县",

            parentId: "652300"

        },

        {

            id: "652325",

            value: "奇台县",

            parentId: "652300"

        },

        {

            id: "652327",

            value: "吉木萨尔县",

            parentId: "652300"

        },

        {

            id: "652328",

            value: "木垒哈萨克自治县",

            parentId: "652300"

        },

        {

            id: "652701",

            value: "博乐市",

            parentId: "652700"

        },

        {

            id: "652722",

            value: "精河县",

            parentId: "652700"

        },

        {

            id: "652723",

            value: "温泉县",

            parentId: "652700"

        },

        {

            id: "652801",

            value: "库尔勒市",

            parentId: "652800"

        },

        {

            id: "652822",

            value: "轮台县",

            parentId: "652800"

        },

        {

            id: "652823",

            value: "尉犁县",

            parentId: "652800"

        },

        {

            id: "652824",

            value: "若羌县",

            parentId: "652800"

        },

        {

            id: "652825",

            value: "且末县",

            parentId: "652800"

        },

        {

            id: "652826",

            value: "焉耆回族自治县",

            parentId: "652800"

        },

        {

            id: "652827",

            value: "和静县",

            parentId: "652800"

        },

        {

            id: "652828",

            value: "和硕县",

            parentId: "652800"

        },

        {

            id: "652829",

            value: "博湖县",

            parentId: "652800"

        },

        {

            id: "652901",

            value: "阿克苏市",

            parentId: "652900"

        },

        {

            id: "652922",

            value: "温宿县",

            parentId: "652900"

        },

        {

            id: "652923",

            value: "库车县",

            parentId: "652900"

        },

        {

            id: "652924",

            value: "沙雅县",

            parentId: "652900"

        },

        {

            id: "652925",

            value: "新和县",

            parentId: "652900"

        },

        {

            id: "652926",

            value: "拜城县",

            parentId: "652900"

        },

        {

            id: "652927",

            value: "乌什县",

            parentId: "652900"

        },

        {

            id: "652928",

            value: "阿瓦提县",

            parentId: "652900"

        },

        {

            id: "652929",

            value: "柯坪县",

            parentId: "652900"

        },

        {

            id: "653001",

            value: "阿图什市",

            parentId: "653000"

        },

        {

            id: "653022",

            value: "阿克陶县",

            parentId: "653000"

        },

        {

            id: "653023",

            value: "阿合奇县",

            parentId: "653000"

        },

        {

            id: "653024",

            value: "乌恰县",

            parentId: "653000"

        },

        {

            id: "653101",

            value: "喀什市",

            parentId: "653100"

        },

        {

            id: "653121",

            value: "疏附县",

            parentId: "653100"

        },

        {

            id: "653122",

            value: "疏勒县",

            parentId: "653100"

        },

        {

            id: "653123",

            value: "英吉沙县",

            parentId: "653100"

        },

        {

            id: "653124",

            value: "泽普县",

            parentId: "653100"

        },

        {

            id: "653125",

            value: "莎车县",

            parentId: "653100"

        },

        {

            id: "653126",

            value: "叶城县",

            parentId: "653100"

        },

        {

            id: "653127",

            value: "麦盖提县",

            parentId: "653100"

        },

        {

            id: "653128",

            value: "岳普湖县",

            parentId: "653100"

        },

        {

            id: "653129",

            value: "伽师县",

            parentId: "653100"

        },

        {

            id: "653130",

            value: "巴楚县",

            parentId: "653100"

        },

        {

            id: "653131",

            value: "塔什库尔干塔吉克自治县",

            parentId: "653100"

        },

        {

            id: "653201",

            value: "和田市",

            parentId: "653200"

        },

        {

            id: "653221",

            value: "和田县",

            parentId: "653200"

        },

        {

            id: "653222",

            value: "墨玉县",

            parentId: "653200"

        },

        {

            id: "653223",

            value: "皮山县",

            parentId: "653200"

        },

        {

            id: "653224",

            value: "洛浦县",

            parentId: "653200"

        },

        {

            id: "653225",

            value: "策勒县",

            parentId: "653200"

        },

        {

            id: "653226",

            value: "于田县",

            parentId: "653200"

        },

        {

            id: "653227",

            value: "民丰县",

            parentId: "653200"

        },

        {

            id: "654002",

            value: "伊宁市",

            parentId: "654000"

        },

        {

            id: "654003",

            value: "奎屯市",

            parentId: "654000"

        },

        {

            id: "654021",

            value: "伊宁县",

            parentId: "654000"

        },

        {

            id: "654022",

            value: "察布查尔锡伯自治县",

            parentId: "654000"

        },

        {

            id: "654023",

            value: "霍城县",

            parentId: "654000"

        },

        {

            id: "654024",

            value: "巩留县",

            parentId: "654000"

        },

        {

            id: "654025",

            value: "新源县",

            parentId: "654000"

        },

        {

            id: "654026",

            value: "昭苏县",

            parentId: "654000"

        },

        {

            id: "654027",

            value: "特克斯县",

            parentId: "654000"

        },

        {

            id: "654028",

            value: "尼勒克县",

            parentId: "654000"

        },

        {

            id: "654201",

            value: "塔城市",

            parentId: "654200"

        },

        {

            id: "654202",

            value: "乌苏市",

            parentId: "654200"

        },

        {

            id: "654221",

            value: "额敏县",

            parentId: "654200"

        },

        {

            id: "654223",

            value: "沙湾县",

            parentId: "654200"

        },

        {

            id: "654224",

            value: "托里县",

            parentId: "654200"

        },

        {

            id: "654225",

            value: "裕民县",

            parentId: "654200"

        },

        {

            id: "654226",

            value: "和布克赛尔蒙古自治县",

            parentId: "654200"

        },

        {

            id: "654301",

            value: "阿勒泰市",

            parentId: "654300"

        },

        {

            id: "654321",

            value: "布尔津县",

            parentId: "654300"

        },

        {

            id: "654322",

            value: "富蕴县",

            parentId: "654300"

        },

        {

            id: "654323",

            value: "福海县",

            parentId: "654300"

        },

        {

            id: "654324",

            value: "哈巴河县",

            parentId: "654300"

        },

        {

            id: "654325",

            value: "青河县",

            parentId: "654300"

        },

        {

            id: "654326",

            value: "吉木乃县",

            parentId: "654300"

        },

        {

            id: "659001",

            value: "石河子市",

            parentId: "659001"

        },

        {

            id: "659002",

            value: "阿拉尔市",

            parentId: "659002"

        },

        {

            id: "659003",

            value: "图木舒克市",

            parentId: "659003"

        },

        {

            id: "659004",

            value: "五家渠市",

            parentId: "659004"

        }],

        xe = {

            data: function() {

                return {

                    cityEx: "北京市 北京市",

                    payIndex: 0,

                    payChoice: [{

                        title: "快捷支付",

                        img: "../../../static/images/me/pay_img.jpg",

                        choiceOk: "&#xe62b;"

                    },

                    {

                        title: "银直联快捷支付",

                        img: "../../../static/images/me/pay_img.jpg",

                        choiceOk: "&#xe60f;"

                    }]

                }

            },

            components: {

                ReturnTop: G

            },

            methods: {

                showSelect: function() {

                    var e = this,

                    t = this.textToLevel(this.cityEx);

                    new IosSelect(3, [Ae, be, we], {

                        title: "地址选择",

                        itemHeight: 35,

                        relation: [1, 1],

                        oneLevelId: t[0],

                        twoLevelId: t[1],

                        threeLevelId: t[2],

                        callback: function(t, a, i) {

                            e.cityEx = t.value + " " + a.value,

                            console.log(e.cityEx)

                        }

                    })

                },

                textToLevel: function(e) {

                    var t = [];

                    if (e) {

                        var a = e.split(" ");

                        a[0] && Ae.forEach(function(e, i) {

                            e.value == a[0] && t.push(e.id)

                        }),

                        a[1] && be.forEach(function(e, i) {

                            e.value == a[1] && t.push(e.id)

                        }),

                        a[2] && we.forEach(function(e, i) {

                            e.value == a[2] && t.push(e.id)

                        })

                    }

                    return t

                },

                select: function(e) {

                    this.payChoice.forEach(function(e) {

                        e.choiceOk = "&#xe60f;"

                    }),

                    this.payChoice[e].choiceOk = "&#xe62b;",

                    this.payIndex = e

                },

                submitNext: function() {

                    this.$router.push({

                        path: "third"

                    })

                }

            }

        },

        Se = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("添加银行卡")])]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("省份 城市")]), e._v(" "), a("div", {

                    staticClass: "a",

                    on: {

                        click: e.showSelect

                    }

                },

                [a("el-input", {

                    attrs: {

                        placeholder: "请选择地址"

                    },

                    model: {

                        value: e.cityEx,

                        callback: function(t) {

                            e.cityEx = t

                        },

                        expression: "cityEx"

                    }

                })], 1)]), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), a("div", {

                    staticClass: "submit",

                    on: {

                        click: function(t) {

                            return e.submitNext()

                        }

                    }

                },

                [e._v("\n        保存\n    ")])], 1)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "order"

                },

                [t("span", {

                    staticClass: "qes"

                },

                [this._v("身份证号码")]), this._v(" "), t("input", {

                    staticClass: "a",

                    attrs: {

                        type: "text"

                    }

                })])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "order"

                },

                [t("span", {

                    staticClass: "qes"

                },

                [this._v("银行卡号")]), this._v(" "), t("input", {

                    staticClass: "a",

                    attrs: {

                        type: "text"

                    }

                })])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "order"

                },

                [t("span", {

                    staticClass: "qes"

                },

                [this._v("支行名称")]), this._v(" "), t("input", {

                    staticClass: "a",

                    attrs: {

                        type: "text"

                    }

                })])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "order"

                },

                [t("span", {

                    staticClass: "qes"

                },

                [this._v("预留手机")]), this._v(" "), t("input", {

                    staticClass: "a",

                    attrs: {

                        type: "text"

                    }

                })])

            }]

        };

        var Me = a("VU/8")(xe, Se, !1,

        function(e) {

            a("zcWR"),

            a("MrH0")

        },

        "data-v-5eeab43d", null).exports,

        ke = {

            render: function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", [t("el-col", {

                    attrs: {

                        span: 24

                    }

                },

                [t("router-link", {

                    attrs: {

                        to: "/recharge/dg"

                    }

                },

                [t("el-card", {

                    staticStyle: {

                        "text-align": "center",

                        "font-size": ".3rem",

                        "margin-bottom": ".4rem"

                    },

                    attrs: {

                        shadow: "always"

                    }

                },

                [this._v("                    \n            在线充值\n            ")])], 1), this._v(" "), t("router-link", {

                    attrs: {

                        to: "/recharge/xs"

                    }

                },

                [t("el-card", {

                    staticStyle: {

                        "text-align": "center",

                        "font-size": ".3rem",

                        "margin-bottom": ".4rem",
						"display" : "none"

                    },

                    attrs: {

                        shadow: "always"

                    }

                },

                [this._v("\n        企业对公转账"), t("br")])], 1)], 1)], 1)

            },

            staticRenderFns: []

        };

        var Ne = a("VU/8")({},

        ke, !1,

        function(e) {

            a("3k+B")

        },

        "data-v-609f30d4", null).exports,

        Ee = {

            data: function() {

                return {

                    sms: "",

                    sms2: ""

                }

            },

            methods: {

                pay: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    _("/api/threepay", {

                        money: this.sms,

                        card: this.sms2

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        //console.log(t),

						if(t.data.code == '0'){

							 e.$message.error("充值失败-" + t.data.error);

						

						}else{

							e.$message.success("充值成功-" + t.data.error);

							 window.location.href = t.data.url;

						}

                       

                    },

                    function(t) {

                        e.$message.error("充值失败#2")

                    })

                }

            }

        },

        Re = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("h1", {

                    staticStyle: {

                        "margin-top": ".2rem",

                        "text-align": "center",

                        "margin-bottom": ".3rem"

                    }

                },

                [e._v("请输入充值金额")]), e._v(" "), a("van-cell-group", {

                    staticStyle: {

                        width: "6.6rem",

                        "box-shadow": "rgb(165, 165, 165) 0px 0px 3px 0px",

                        margin: "0 auto"

                    }

                },

                [a("van-field", {

                    staticStyle: {

                        "font-size": ".3rem"

                    },

                    attrs: {

                        "input-align": "center",

                        center: "",

                        clearable: "",

                        placeholder: "请输入充值金额(元)"

                    },

                    model: {

                        value: e.sms,

                        callback: function(t) {

                            e.sms = t

                        },

                        expression: "sms"

                    }

                })], 1), e._v(" "), a("h1", {

                    staticStyle: {

                        "margin-top": ".2rem",

                        "text-align": "center",

                        "margin-bottom": ".3rem"

                    }

                },

                [e._v("请输入你的姓名+银行卡号")]), e._v(" "), a("van-cell-group", {

                    staticStyle: {

                        width: "6.6rem",

                        "box-shadow": "rgb(165, 165, 165) 0px 0px 3px 0px",

                        margin: "0 auto"

                    }

                },

                [a("van-field", {

                    staticStyle: {

                        "font-size": ".3rem"

                    },

                    attrs: {

                        "input-align": "center",

                        center: "",

                        clearable: "",

                        placeholder: "如：张三+622222222222"

                    },

                    model: {

                        value: e.sms2,

                        callback: function(t) {

                            e.sms2 = t

                        },

                        expression: "sms2"

                    }

                })], 1), e._v(" "), a("van-button", {

                    staticStyle: {

                        margin: ".6rem auto",

                        display: "block",

                        width: "6rem"

                    },

                    attrs: {

                        type: "warning"

                    },

                    on: {

                        click: e.pay

                    }

                },

                [e._v("充值")]), e._v(" "), e._m(0)], 1)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("h1", {

                    staticStyle: {

                        width: "96%",

                        margin: ".4rem auto",

                        "font-size": ".3rem",

                        "text-align": "center"

                    }

                },

                [t("p", {

                    staticClass: "bottom",

                    staticStyle: {

                        color: "#df411e",

                        "font-size": ".479rem"

                    }

                },

                [this._v("  \n  账户名称：广州xxxxx限公司    卡号 ：360200000000       银行：中国xxxx支行")])])

            }]

        };

        var je = a("VU/8")(Ee, Re, !1,

        function(e) {

            a("S7CQ")

        },

        null, null).exports,

        De = {

            mounted: function() {

                this.getYhk()

            },

            data: function() {

                return {

                    rnm: "",

                    dg: "",

                    ewm: ""

                }

            },

            methods: {

                getYhk: function() {

                    var e = this;

                    C("/api/recharge/", {},

                    {}).then(function(t) {

                        e.dg = t.data.dg_img,

                        e.ewm = t.data.zfb_img,

                        e.rnm = t.data

                    },

                    function(t) {

                        e.$message("请检查网络或登录状态")

                    })

                }

            }

        },

        ze = {

            render: function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", [t("img", {

                    staticStyle: {

                        width: "100%"

                    },

                    attrs: {

                        src: this.ewm,

                        alt: ""

                    }

                }), this._v(" "), this._m(0)])

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("h1", {

                    staticStyle: {

                        width: "96%",

                        margin: ".4rem auto",

                        "font-size": ".3rem",

                        "text-align": "center"

                    }

                },

                [t("p", {

                    staticClass: "bottom",

                    staticStyle: {

                        color: "#df411e"

                    }

                },

                [this._v("周一至周日（7*24小时实时充值）")]), this._v(" "), t("p", {

                    staticClass: "bottom",

                    staticStyle: {

                        color: "#df411e"

                    }

                },

                [this._v("转账时请备注用户名和转账金额")])])

            }]

        };

        var Te = a("VU/8")(De, ze, !1,

        function(e) {

            a("O1Gf")

        },

        "data-v-1003bcb4", null).exports,

        Be = {

            data: function() {

                return {

                    html: "",

                    sms: "",

                    options: [{

                        value: "选项1",

                        label: "黄金糕"

                    },

                    {

                        value: "选项2",

                        label: "双皮奶"

                    },

                    {

                        value: "选项3",

                        label: "蚵仔煎"

                    },

                    {

                        value: "选项4",

                        label: "龙须面"

                    },

                    {

                        value: "选项5",

                        label: "北京烤鸭"

                    }],

                    value: ""

                }

            },

            methods: {

                pay: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    _("/api/DfPayOrder", {

                        money: this.sms,

                        bankcode: 921

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        t.data.status ? (e.html = t.data.data, setTimeout(function() {

                            document.getElementById("df").submit()

                        },

                        500)) : e.$message.error(t.data.msg)

                    },

                    function(t) {

                        e.$message.error("充值失败#3")

                    })

                }

            }

        },

        Le = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("h1", {

                    staticStyle: {

                        "text-align": "center",

                        "margin-bottom": ".3rem"

                    }

                },

                [e._v("请输入充值金额")]), e._v(" "), a("van-cell-group", {

                    staticStyle: {

                        width: "6.6rem",

                        "box-shadow": "rgb(165, 165, 165) 0px 0px 3px 0px",

                        margin: "0 auto"

                    }

                },

                [a("van-field", {

                    staticStyle: {

                        "font-size": ".3rem"

                    },

                    attrs: {

                        "input-align": "center",

                        center: "",

                        clearable: "",

                        placeholder: "请输入充值金额(元)"

                    },

                    model: {

                        value: e.sms,

                        callback: function(t) {

                            e.sms = t

                        },

                        expression: "sms"

                    }

                })], 1), e._v(" "), a("van-button", {

                    staticStyle: {

                        margin: ".6rem auto",

                        display: "block",

                        width: "6rem"

                    },

                    attrs: {

                        type: "warning"

                    },

                    on: {

                        click: e.pay

                    }

                },

                [e._v("充值")]), e._v(" "), e._m(0), e._v(" "), a("div", {

                    domProps: {

                        innerHTML: e._s(e.html)

                    }

                })], 1)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("h1", {

                    staticStyle: {

                        width: "96%",

                        margin: ".4rem auto",

                        "font-size": ".3rem",

                        "text-align": "center"

                    }

                },

                [t("p", {

                    staticClass: "bottom",

                    staticStyle: {

                        color: "#df411e"

                    }

                },

                [this._v("周一至周日（7*24小时实时充值）")])])

            }]

        };

        var Fe = a("VU/8")(Be, Le, !1,

        function(e) {

            a("T/GJ")

        },

        null, null).exports,

        Ue = {

            render: function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", [t("router-view")], 1)

            },

            staticRenderFns: []

        };

        var Pe = a("VU/8")({},

        Ue, !1,

        function(e) {

            a("b+Sd")

        },

        null, null).exports,

        Oe = a("Dd8w"),

        Ye = a.n(Oe),

        Ge = a("bOdI"),

        Ze = a.n(Ge),

        We = a("+6Bu"),

        Ve = a.n(We),

        He = {

            data: function() {

                return {

                    message: {},

                    cityEx: "",

                    money: "",

                    name: "",

                    id_card: "",

                    card_number: "",

                    verificationKey: "",

                    verificationCode: "",

                    content: "获取验证码",

                    totalTime: 60,

                    timer: null,

                    cards: null

                }

            },

            components: {

                ReturnTop: G

            },

            mounted: function() {

                this.getAgree(),

                this.getCard(),

                this.getMsg()

            },

            methods: {

                getMsg: function() {

                    var e = localStorage.getItem("Authorization");

                    _("/api/Open_bank", {},

                    {

                        Authorization: "Bearer " + e

                    }).then(function(e) {

                        console.log(e)

                    })

                },

                getCard: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/cards", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        t.data.status ? e.cards = t.data.data: e.cards = null

                    },

                    function(t) {

                        e.$message("请检查网络或登录状态")

                    })

                },

                sendCode: function() {

                    var e = this;

                    if (!this.timer) {

                        this.countDown();

                        var t = localStorage.getItem("Authorization");

                        C("/api/tixianCode", {},

                        {

                            Authorization: "Bearer " + t

                        }).then(function(t) {

                            t.data.status && (e.verificationKey = t.data.data.verificationKey)

                        },

                        function(t) {

                            e.$message("请检查网络或登录状态")

                        })

                    }

                },

                getAgree: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/user", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        t.data.data.phone = t.data.data.phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2"),

                        e.message = t.data.data,

                        console.log(t.data.data.image)

                    },

                    function(t) {

                        e.$message("请检查网络或登录状态")

                    })

                },

                showSelect: function() {

                    var e = this,

                    t = this.textToLevel(this.cityEx);

                    new IosSelect(3, [Ae, be, we], {

                        title: "地址选择",

                        itemHeight: 35,

                        relation: [1, 1],

                        oneLevelId: t[0],

                        twoLevelId: t[1],

                        threeLevelId: t[2],

                        callback: function(t, a, i) {

                            e.cityEx = t.value + " " + a.value,

                            console.log(e.cityEx)

                        }

                    })

                },

                textToLevel: function(e) {

                    var t = [];

                    if (e) {

                        var a = e.split(" ");

                        a[0] && Ae.forEach(function(e, i) {

                            e.value == a[0] && t.push(e.id)

                        }),

                        a[1] && be.forEach(function(e, i) {

                            e.value == a[1] && t.push(e.id)

                        }),

                        a[2] && we.forEach(function(e, i) {

                            e.value == a[2] && t.push(e.id)

                        })

                    }

                    return t

                },

                charge: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization"),

                    a = this.cards ? {

                        money: this.money,

                        id: this.cards.id,

                        verificationKey: this.verificationKey,

                        verificationCode: this.verificationCode

                    }: Ze()({

                        money: this.money,

                        id_card: this.id_card,

                        card_address: this.card_address,

                        name: this.name,

                        card_number: this.card_number,

                        verificationKey: this.verificationKey,

                        verificationCode: this.verificationCode

                    },

                    "card_address", this.cityEx),

                    i = Ve()(a, []);

                    _("/api/tixian", Ye()({},

                    i), {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        t.data.status ? (e.money = "", e.$message(t.data.msg)) : e.$message(t.data.msg)

                    },

                    function(t) {

                        e.$message("请检查网络或登录状态")

                    })

                },

                inputPwd: function(e) {

                    switch (e) {

                    case "&#xe621;":

                        this.passwordGroup.splice(--this.clickIndex, 1, ""),

                        this.clickIndex < 0 && (this.clickIndex = 0),

                        this.clickIndex < 6 && this.clickIndex > 0 && (this.clickOnOff = !0);

                        break;

                    case "确定":

                        break;

                    default:

                        this.clickOnOff ? (this.passwordGroup.splice(this.clickIndex++, 1, e), 6 == this.clickIndex && (this.clickOnOff = !1)) : this.$message("请输入6位以内密码")

                    }

                    console.log(this.clickIndex)

                },

                countDown: function() {

                    var e = this;

                    this.timer || (this.timer = setInterval(function() {

                        e.totalTime > 0 ? (e.content = e.totalTime + "s后重新发送", e.totalTime--) : (clearInterval(e.timer), e.timer = null, e.content = "发送验证码", e.totalTime = 60)

                    },

                    1e3))

                }

            }

        },

        Qe = {

            render: function() {

                var e = this,

                t = e.$createElement,

                i = e._self._c || t;

                return i("div", [i("return-top", [i("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("提现")])]), e._v(" "), i("div", {

                    staticClass: "top_user"

                },

                [i("div", {

                    staticClass: "left"

                },

                [e.message.image ? i("img", {

                    attrs: {

                        src: e.message.image,

                        alt: ""

                    }

                }) : i("img", {

                    attrs: {

                        src: a("jh3X"),

                        alt: ""

                    }

                })]), e._v(" "), i("div", {

                    staticClass: "right"

                },

                [i("p", {

                    staticClass: "name"

                },

                [e._v(e._s(e.message.name))]), e._v(" "), i("p", {

                    staticClass: "num"

                },

                [e._v("可提现金额:"), i("span", [e._v(e._s(e.message.money))]), e._v("元")])])]), e._v(" "), i("p", {

                    staticClass: "order"

                },

                [e._v("\n    提现金额\n    "), i("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.money,

                        expression: "money"

                    }],

                    staticStyle: {

                        "margin-left": ".5rem"

                    },

                    attrs: {

                        placeholder: "请输入提现金额",

                        type: "number"

                    },

                    domProps: {

                        value: e.money

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.money = t.target.value)

                        }

                    }

                })]), e._v(" "), i("div", {

                    staticClass: "order"

                },

                [i("span", {

                    staticClass: "qes"

                },

                [e._v("开户行")]), e._v(" "), e.cards ? i("span", {

                    staticClass: "a",

                    staticStyle: {

                        color: "#0084ff"

                    }

                },

                [e._v(e._s(e.cards.card_address))]) : i("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.cityEx,

                        expression: "cityEx"

                    }],

                    staticClass: "a",

                    attrs: {

                        placeholder: "请填写开户行"

                    },

                    domProps: {

                        value: e.cityEx

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.cityEx = t.target.value)

                        }

                    }

                })]), e._v(" "), i("div", {

                    staticClass: "order"

                },

                [i("span", {

                    staticClass: "qes"

                },

                [e._v("身份证号码")]), e._v(" "), e.cards ? i("span", {

                    staticClass: "a",

                    staticStyle: {

                        color: "#0084ff"

                    }

                },

                [e._v(e._s(e.cards.id_card))]) : i("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.id_card,

                        expression: "id_card"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请输入您的身份证号码"

                    },

                    domProps: {

                        value: e.id_card

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.id_card = t.target.value)

                        }

                    }

                })]), e._v(" "), i("div", {

                    staticClass: "order"

                },

                [i("span", {

                    staticClass: "qes"

                },

                [e._v("持卡人")]), e._v(" "), e.cards ? i("span", {

                    staticClass: "a",

                    staticStyle: {

                        color: "#0084ff"

                    }

                },

                [e._v(e._s(e.cards.name))]) : i("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.name,

                        expression: "name"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请输入您的姓名"

                    },

                    domProps: {

                        value: e.name

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.name = t.target.value)

                        }

                    }

                })]), e._v(" "), i("div", {

                    staticClass: "order"

                },

                [i("span", {

                    staticClass: "qes"

                },

                [e._v("银行卡号")]), e._v(" "), e.cards ? i("span", {

                    staticClass: "a",

                    staticStyle: {

                        color: "#0084ff"

                    }

                },

                [e._v(e._s(e.cards.card_number))]) : i("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.card_number,

                        expression: "card_number"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请输入您的银行卡号"

                    },

                    domProps: {

                        value: e.card_number

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.card_number = t.target.value)

                        }

                    }

                })]), e._v(" "), i("div", {

                    staticClass: "order"

                },

                [i("span", {

                    staticClass: "qes"

                },

                [e._v("已验证手机")]), e._v(" "), i("span", {

                    staticClass: "a",

                    staticStyle: {

                        color: "#0084ff"

                    }

                },

                [e._v(e._s(e.message.phone))])]), e._v(" "), i("div", {

                    staticClass: "order"

                },

                [i("span", {

                    staticClass: "qes"

                },

                [e._v("验证码")]), e._v(" "), i("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.verificationCode,

                        expression: "verificationCode"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请在输入验证码"

                    },

                    domProps: {

                        value: e.verificationCode

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.verificationCode = t.target.value)

                        }

                    }

                }), e._v(" "), i("span", {

                    staticClass: "send",

                    on: {

                        click: function(t) {

                            return e.sendCode()

                        }

                    }

                },

                [e._v(e._s(e.content))])]), e._v(" 提现请在工作日9:00-16:00内申请，T+1个工作日内到账。提现手续费率:200元以内每笔2元，200元以上为提现金额的1％"), i("div", {

                    staticClass: "submit",

                    on: {

                        click: function(t) {

                            return e.charge()

                        }

                    }

                },

                [e._v("\n    立即提现\n  ")])], 1)

            },

            staticRenderFns: []

        };

        var Je = a("VU/8")(He, Qe, !1,

        function(e) {

            a("yUAI")

        },

        "data-v-f316b6f2", null).exports,

        qe = {

            data: function() {

                return {

                    a1: !0,

                    a2: !1,

                    message: [],

                    message2: []

                }

            },

            mounted: function() {

                this.getAgree()

            },

            components: {

                ReturnTop: G

            },

            methods: {

                getAgree2: function() {

                    var e = this;

                    this.a2 = !this.a2;

                    var t = localStorage.getItem("Authorization");

                    C("/api/payagreement/", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        e.message2 = t.data.msg,

                        console.log(e.message2)

                    },

                    function(t) {

                        e.$message("请检查网络或登录状态")

                    })

                },

                getAgree: function() {

                    var e = this;

                    this.a1 = !this.a1;

                    var t = localStorage.getItem("Authorization");

                    C("/api/agreement/", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t.data.msg),

                        e.message = e.message.concat(t.data.msg)

                    },

                    function(t) {

                        e.$message("请检查网络或登录状态")

                    })

                }

            }

        },

        Xe = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("相关协议")])]), e._v(" "), a("div", {

                    staticClass: "box a",

                    on: {

                        click: function(t) {

                            return e.getAgree()

                        }

                    }

                },

                [e._v("\n    股票（交易合作协议）\n  ")]), e._v(" "), e._l(e.message,

                function(t, i) {

                    return e.a1 ? a("div", {

                        key: i,

                        staticClass: "box"

                    },

                    [a("p", {

                        staticClass: "title"

                    },

                    [e._v(e._s(t.title))]), e._v(" "), a("p", {

                        staticClass: "txt",

                        domProps: {

                            innerHTML: e._s(t.announcement)

                        }

                    },

                    [e._v(e._s(t.announcement))])]) : e._e()

                }), e._v(" "), a("div", {

                    staticClass: "box a",

                    on: {

                        click: function(t) {

                            return e.getAgree2()

                        }

                    }

                },

                [e._v("\n    股票（交易居间合作协议）\n  ")]), e._v(" "), e.a2 ? a("div", {

                    staticClass: "box"

                },

                [a("p", {

                    staticClass: "title"

                },

                [e._v(e._s(e.message2.title))]), e._v(" "), a("p", {

                    staticClass: "txt",

                    domProps: {

                        innerHTML: e._s(e.message2.announcement)

                    }

                })]) : e._e()], 2)

            },

            staticRenderFns: []

        };

        var Ke = a("VU/8")(qe, Xe, !1,

        function(e) {

            a("wJuB")

        },

        "data-v-88557e90", null).exports,

        $e = {

            render: function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", [t("router-view")], 1)

            },

            staticRenderFns: []

        };

        var et = a("VU/8")({},

        $e, !1,

        function(e) {

            a("U6Xv")

        },

        null, null).exports,

        tt = {

            data: function() {

                return {

                    username: "",

                    userphone: "",

                    userToken: "",

                    value3: !0,

                    imageUrl: "@/../static/images/user.jpg",

                    imgheader: {

                        Authorization: "Bearer " + localStorage.getItem("Authorization")

                    },

                    file: "",

                    imgdata: {

                        name: this.file

                    }

                }

            },

            mounted: function() {

                this.userToken = localStorage.getItem("Authorization")

            },

            components: {

                ReturnTop: G

            },

            methods: {

                exit: function() {

                    localStorage.clear(),

                    this.$router.push("/")

                },

                changeName: function() {

                    var e = this;

                    this.username ? _("/api/changeuserdata", {

                        type: "name",

                        data: this.username

                    },

                    {

                        Authorization: "Bearer " + this.userToken

                    }).then(function(t) {

                        e.$message("修改成功")

                    },

                    function(t) {

                        e.$message("修改失败，请检查网络或登录状态")

                    }) : this.$message("修改名称不能为空")

                },

                changePhone: function() {

                    var e = this;

                    if (this.userphone) {

                        if (!/^1[34578]\d{9}$/.test(this.userphone)) return this.$message("手机号码有误，请重填"),

                        !1;

                        _("/api/changeuserdata", {

                            type: "phone",

                            data: this.userphone

                        },

                        {

                            Authorization: "Bearer " + this.userToken

                        }).then(function(t) {

                            e.$message("修改成功")

                        },

                        function(t) {

                            e.$message("修改失败，请检查网络或登录状态")

                        })

                    } else this.$message("修改电话不能为空")

                },

                handleAvatarSuccess: function(e, t) {

                    this.imageUrl = URL.createObjectURL(t.raw),

                    this.$message("上传成功")

                },

                beforeAvatarUpload: function(e) {

                    var t = "image/jpeg" === e.type,

                    a = "image/png" === e.type,

                    i = e.size / 1024 / 1024 < 2;

                    return t || a ? i ? (console.log(e), this.file = e, (t || a) && i) : (this.$message.error("上传头像图片大小不能超过 2MB!"), !1) : (this.$message.error("上传头像图片只能是 JPG或者PNG 格式!"), !1)

                }

            }

        },

        at = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("修改个人信息")])]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("头像")]), e._v(" "), a("span", {

                    staticClass: "a ts"

                },

                [a("img", {

                    attrs: {

                        src: e.imageUrl,

                        alt: ""

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "upload"

                },

                [a("el-upload", {

                    staticClass: "avatar-uploader",

                    attrs: {

                        action: "/api/avatar",

                        headers: e.imgheader,

                        data: e.imgdata,

                        "show-file-list": !1,

                        "on-success": e.handleAvatarSuccess,

                        "before-upload": e.beforeAvatarUpload

                    }

                },

                [e.imageUrl ? a("img", {

                    staticClass: "avatar",

                    attrs: {

                        src: e.imageUrl

                    }

                }) : a("i", {

                    staticClass: "el-icon-plus avatar-uploader-icon"

                })])], 1)]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("昵称")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.username,

                        expression: "username"

                    }],

                    staticClass: "a b",

                    attrs: {

                        type: "text",

                        placeholder: "请输入需要修改的昵称"

                    },

                    domProps: {

                        value: e.username

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.username = t.target.value)

                        }

                    }

                }), e._v(" "), a("span", {

                    staticClass: "send",

                    attrs: {

                        "data-v-3a803749": ""

                    },

                    on: {

                        click: function(t) {

                            return e.changeName()

                        }

                    }

                },

                [e._v("确认修改")])]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("登录密码")]), e._v(" "), a("router-link", {

                    staticClass: "a",

                    attrs: {

                        tag: "span",

                        to: "/setting/modify",

                        type: "text"

                    }

                },

                [e._v("修改密码 ")])], 1), e._v(" "), a("div", {

                    staticClass: "submit",

                    on: {

                        click: function(t) {

                            return e.exit()

                        }

                    }

                },

                [e._v("\n        退出系统\n    ")])], 1)

            },

            staticRenderFns: []

        };

        var it = a("VU/8")(tt, at, !1,

        function(e) {

            a("7ETt"),

            a("O/W2")

        },

        "data-v-07f80562", null).exports,

        nt = {

            data: function() {

                return {

                    pwd1: "",

                    pwd2: "",

                    userToken: ""

                }

            },

            mounted: function() {

                this.userToken = localStorage.getItem("Authorization")

            },

            components: {

                ReturnTop: G

            },

            methods: {

                changePwd: function() {

                    var e = this;

                    if (this.pwd1) {

                        if (this.pwd1.length < 6 || this.pwd1.length > 12) return this.$message("密码长度必须在6-12位之间"),

                        !1;

                        if (this.pwd1 != this.pwd2) return this.$message("新密码与确认密码必须相同"),

                        !1;

                        _("/api/changeuserpwd", {

                            password: this.pwd1

                        },

                        {

                            Authorization: "Bearer " + this.userToken

                        }).then(function(t) {

                            localStorage.clear(),

                            e.$message("修改成功,请重新登录"),

                            e.$router.push("/")

                        },

                        function(t) {

                            e.$message("修改失败，请检查网络或登录状态")

                        })

                    } else this.$message("修改密码不能为空")

                }

            }

        },

        st = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("修改密码")])]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("新密码")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.pwd1,

                        expression: "pwd1"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "number",

                        placeholder: "请输入6~12位新密码"

                    },

                    domProps: {

                        value: e.pwd1

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.pwd1 = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("确认密码")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.pwd2,

                        expression: "pwd2"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "number",

                        placeholder: "请确认6~12位新密码"

                    },

                    domProps: {

                        value: e.pwd2

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.pwd2 = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "submit",

                    on: {

                        click: function(t) {

                            return e.changePwd()

                        }

                    }

                },

                [e._v("\n        提交\n    ")])], 1)

            },

            staticRenderFns: []

        };

        var dt = a("VU/8")(nt, st, !1,

        function(e) {

            a("0DHW")

        },

        "data-v-2989fe14", null).exports,

        rt = {

            mounted: function() {

                this.getAll(),

                this.getUserInfo()

            },

            data: function() {

                return {

                    money: 1,

                    bzjMoney: [],

                    bzjMoneyPage: 1,

                    jcfMoney: [],

                    jcfMoneyPage: 1,

                    dyfMoney: [],

                    dyfMoneyPage: 1,

                    tx: [],

                    txPage: 1,

                    allMoney: [],

                    allMoneyPage: 1,

                    userToken: localStorage.getItem("Authorization"),

                    tabIndex: 0,

                    tab: [{

                        title: "全部"

                    },

                    {

                        title: "保证金"

                    },

                    {

                        title: "建仓费"

                    },

                    {

                        title: "递延费"

                    },

                    {

                        title: "提现"

                    }]

                }

            },

            components: {

                ReturnTop: G

            },

            methods: {

                upDown: function(e, t) {

                    switch (e) {

                    case 0:

                        if (0 == t) {

                            if (0 == this.allMoneyPage) return ! 1;

                            this.allMoneyPage--

                        } else this.allMoneyPage++;

                        this.getAll();

                        break;

                    case 1:

                        if (0 == t) {

                            if (0 == this.bzjMoneyPage) return ! 1;

                            this.bzjMoneyPage--

                        } else this.bzjMoneyPage++;

                        this.getBZJ(),

                        console.log(this.bzjMoneyPage);

                        break;

                    case 2:

                        if (0 == t) {

                            if (0 == this.jcfMoneyPage) return ! 1;

                            this.jcfMoneyPage--

                        } else this.jcfMoneyPage++;

                        this.getJCF(),

                        console.log(this.jcfMoneyPage);

                        break;

                    case 3:

                        if (0 == t) {

                            if (0 == this.dyfMoneyPage) return ! 1;

                            this.dyfMoneyPage--

                        } else this.dyfMoneyPage++;

                        this.getDYF(),

                        console.log(this.dyfMoneyPage);

                        break;

                    case 4:

                        if (0 == t) {

                            if (0 == this.txPage) return ! 1;

                            this.txPage--

                        } else this.txPage++;

                        this.getTx()

                    }

                },

                getUserInfo: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/user/", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        t && (console.log(t), e.money = t.data.data.money)

                    },

                    function(e) {})

                },

                getAll: function() {

                    var e = this;

                    C("/api/financialdetails", {

                        page: this.allMoneyPage

                    },

                    {

                        Authorization: "Bearer " + this.userToken

                    }).then(function(t) {

                        e.allMoney.splice(0, e.allMoney.length),

                        e.allMoney = e.allMoney.concat(t.data.data.data)

                    },

                    function(t) {

                        e.$message("请登录后查看")

                    })

                },

                getBZJ: function() {

                    var e = this;

                    C("/api/financialdetails", {

                        type: "bailaccount",

                        page: this.bzjMoneyPage

                    },

                    {

                        Authorization: "Bearer " + this.userToken

                    }).then(function(t) {

                        e.bzjMoney.splice(0, e.bzjMoney.length),

                        e.bzjMoney = e.bzjMoney.concat(t.data.data.data)

                    },

                    function(t) {

                        e.$message("请登录后查看")

                    })

                },

                getTx: function() {

                    var e = this;

                    C("/api/financialdetails", {

                        type: "tixiancount",

                        page: this.txPage

                    },

                    {

                        Authorization: "Bearer " + this.userToken

                    }).then(function(t) {

                        e.tx.splice(0, e.tx.length),

                        e.tx = t.data.data.data

                    },

                    function(t) {

                        e.$message("请登录后查看")

                    })

                },

                getJCF: function() {

                    var e = this;

                    C("/api/financialdetails?type=jiancangaccount", {

                        page: this.jcfMoneyPage

                    },

                    {

                        Authorization: "Bearer " + this.userToken

                    }).then(function(t) {

                        e.jcfMoney.splice(0, e.jcfMoney.length),

                        e.jcfMoney = e.jcfMoney.concat(t.data.data.data)

                    },

                    function(t) {

                        e.$message("请登录后查看")

                    })

                },

                getDYF: function() {

                    var e = this;

                    C("/api/financialdetails?type=diyanaccount", {

                        page: this.dyfMoneyPage

                    },

                    {

                        Authorization: "Bearer " + this.userToken

                    }).then(function(t) {

                        e.dyfMoney.splice(0, e.dyfMoney.length),

                        e.dyfMoney = e.dyfMoney.concat(t.data.data.data)

                    },

                    function(t) {

                        e.$message("请登录后查看")

                    })

                },

                tabClick: function(e) {

                    this.tabIndex = e,

                    1 == e ? this.getBZJ() : 2 == e ? this.getJCF() : 3 == e ? this.getDYF() : 0 == e ? this.getAll() : 4 == e && this.getTx()

                }

            }

        },

        lt = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("资金明细")])]), e._v(" "), a("div", {

                    staticClass: "top_box"

                },

                [a("div", {

                    staticClass: "top"

                },

                [a("p", {

                    staticClass: "name"

                },

                [e._v("当前余额（元）")]), e._v(" "), a("p", {

                    staticClass: "num"

                },

                [e._v(e._s(e.money))])]), e._v(" "), a("div", {

                    staticClass: "bottom"

                },

                [a("router-link", {

                    staticClass: "left",

                    attrs: {

                        to: "/charge"

                    }

                },

                [e._v("提现")]), e._v(" "), a("router-link", {

                    staticClass: "right",

                    attrs: {

                        to: "/recharge"

                    }

                },

                [e._v("充值")])], 1)]), e._v(" "), a("div", {

                    staticClass: "tab"

                },

                [a("div", {

                    staticClass: "table"

                },

                [a("ul", e._l(e.tab,

                function(t, i) {

                    return a("li", {

                        key: i,

                        class: {

                            active: i == e.tabIndex

                        },

                        on: {

                            click: function(t) {

                                return e.tabClick(i)

                            }

                        }

                    },

                    [e._v(e._s(t.title))])

                }), 0)])]), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 0 == e.tabIndex,

                        expression: "tabIndex == 0"

                    }],

                    staticClass: "tab1"

                },

                [a("ul", e._l(e.allMoney,

                function(t, i) {

                    return a("li", {

                        key: i

                    },

                    [a("p", {

                        staticClass: "title"

                    },

                    [e._v("股票代码：" + e._s(t.code))]), e._v(" "), a("div", {

                        staticClass: "more"

                    },

                    [a("p", {

                        staticClass: "author"

                    },

                    [e._v("建仓费：" + e._s(t.cangfei))]), e._v(" "), a("p", {

                        staticClass: "date",

                        staticStyle: {

                            "margin-left": ".4rem"

                        }

                    },

                    [e._v("递延费：" + e._s(t.diyanfei))]), e._v(" "), a("p", {

                        staticClass: "date"

                    },

                    [e._v("信用金：" + e._s(t.xingyongjin))])])])

                }), 0), e._v(" "), a("div", {

                    staticClass: "title",

                    staticStyle: {

                        "margin-top": ".26rem",

                        height: "1rem"

                    }

                },

                [a("div", {

                    staticStyle: {

                        width: "3rem",

                        margin: "0 auto"

                    }

                },

                [a("div", {

                    staticClass: "mleft",

                    on: {

                        click: function(t) {

                            return e.upDown(0, 0)

                        }

                    }

                },

                [e._v("<")]), e._v(" "), a("div", {

                    staticClass: "mright",

                    on: {

                        click: function(t) {

                            return e.upDown(0, 1)

                        }

                    }

                },

                [e._v(">")])])]), e._v(" "), 0 == e.allMoney.length ? a("p", {

                    staticClass: "nothing"

                },

                [e._v("暂无数据~")]) : e._e()]), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 1 == e.tabIndex,

                        expression: "tabIndex == 1"

                    }],

                    staticClass: "tab1"

                },

                [a("ul", e._l(e.bzjMoney,

                function(t, i) {

                    return a("li", {

                        key: i

                    },

                    [a("p", {

                        staticClass: "title"

                    },

                    [e._v("股票代码：" + e._s(t.code))]), e._v(" "), a("div", {

                        staticClass: "more"

                    },

                    [a("p", {

                        staticClass: "author"

                    },

                    [e._v("保证金：" + e._s(t.xingyongjin))])])])

                }), 0), e._v(" "), a("div", {

                    staticClass: "title",

                    staticStyle: {

                        "margin-top": ".26rem",

                        height: "1rem"

                    }

                },

                [a("div", {

                    staticStyle: {

                        width: "3rem",

                        margin: "0 auto"

                    }

                },

                [a("div", {

                    staticClass: "mleft",

                    on: {

                        click: function(t) {

                            return e.upDown(1, 0)

                        }

                    }

                },

                [e._v("<")]), e._v(" "), a("div", {

                    staticClass: "mright",

                    on: {

                        click: function(t) {

                            return e.upDown(1, 1)

                        }

                    }

                },

                [e._v(">")])])]), e._v(" "), 0 == e.allMoney.length ? a("p", {

                    staticClass: "nothing"

                },

                [e._v("暂无数据~")]) : e._e()]), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 2 == e.tabIndex,

                        expression: "tabIndex == 2"

                    }],

                    staticClass: "tab1"

                },

                [a("ul", e._l(e.jcfMoney,

                function(t, i) {

                    return a("li", {

                        key: i

                    },

                    [a("p", {

                        staticClass: "title"

                    },

                    [e._v("股票代码：" + e._s(t.code))]), e._v(" "), a("div", {

                        staticClass: "more"

                    },

                    [a("p", {

                        staticClass: "author"

                    },

                    [e._v("建仓费：" + e._s(t.cangfei))])])])

                }), 0), e._v(" "), a("div", {

                    staticClass: "title",

                    staticStyle: {

                        "margin-top": ".26rem",

                        height: "1rem"

                    }

                },

                [a("div", {

                    staticStyle: {

                        width: "3rem",

                        margin: "0 auto"

                    }

                },

                [a("div", {

                    staticClass: "mleft",

                    on: {

                        click: function(t) {

                            return e.upDown(2, 0)

                        }

                    }

                },

                [e._v("<")]), e._v(" "), a("div", {

                    staticClass: "mright",

                    on: {

                        click: function(t) {

                            return e.upDown(2, 1)

                        }

                    }

                },

                [e._v(">")])])]), e._v(" "), 0 == e.allMoney.length ? a("p", {

                    staticClass: "nothing"

                },

                [e._v("暂无数据~")]) : e._e()]), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 3 == e.tabIndex,

                        expression: "tabIndex == 3"

                    }],

                    staticClass: "tab1"

                },

                [a("ul", e._l(e.dyfMoney,

                function(t, i) {

                    return a("li", {

                        key: i

                    },

                    [a("p", {

                        staticClass: "title"

                    },

                    [e._v("股票代码：" + e._s(t.code))]), e._v(" "), a("div", {

                        staticClass: "more"

                    },

                    [a("p", {

                        staticClass: "author"

                    },

                    [e._v("递延费：" + e._s(t.diyanfei))])])])

                }), 0), e._v(" "), a("div", {

                    staticClass: "title",

                    staticStyle: {

                        "margin-top": ".26rem",

                        height: "1rem"

                    }

                },

                [a("div", {

                    staticStyle: {

                        width: "3rem",

                        margin: "0 auto"

                    }

                },

                [a("div", {

                    staticClass: "mleft",

                    on: {

                        click: function(t) {

                            return e.upDown(3, 0)

                        }

                    }

                },

                [e._v("<")]), e._v(" "), a("div", {

                    staticClass: "mright",

                    on: {

                        click: function(t) {

                            return e.upDown(3, 1)

                        }

                    }

                },

                [e._v(">")])])]), e._v(" "), 0 == e.allMoney.length ? a("p", {

                    staticClass: "nothing"

                },

                [e._v("暂无数据~")]) : e._e()]), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: 4 == e.tabIndex,

                        expression: "tabIndex == 4"

                    }],

                    staticClass: "tab1"

                },

                [a("ul", e._l(e.tx,

                function(t, i) {

                    return a("li", {

                        key: i

                    },

                    [a("p", {

                        staticClass: "title"

                    },

                    [e._v("费用：" + e._s(t.money))]), e._v(" "), a("div", {

                        staticClass: "more"

                    },

                    [1 == t.status ? a("p", {

                        staticClass: "author"

                    },

                    [e._v("审核状态：审核通过")]) : e._e(), e._v(" "), 2 == t.status ? a("p", {

                        staticClass: "author"

                    },

                    [e._v("审核状态：审核失败")]) : e._e(), e._v(" "), 0 == t.status ? a("p", {

                        staticClass: "author"

                    },

                    [e._v("审核状态：未审核")]) : e._e()])])

                }), 0), e._v(" "), a("div", {

                    staticClass: "title",

                    staticStyle: {

                        "margin-top": ".26rem",

                        height: "1rem"

                    }

                },

                [a("div", {

                    staticStyle: {

                        width: "3rem",

                        margin: "0 auto"

                    }

                },

                [a("div", {

                    staticClass: "mleft",

                    on: {

                        click: function(t) {

                            return e.upDown(4, 0)

                        }

                    }

                },

                [e._v("<")]), e._v(" "), a("div", {

                    staticClass: "mright",

                    on: {

                        click: function(t) {

                            return e.upDown(4, 1)

                        }

                    }

                },

                [e._v(">")])])]), e._v(" "), 0 == e.allMoney.length ? a("p", {

                    staticClass: "nothing"

                },

                [e._v("暂无数据~")]) : e._e()])], 1)

            },

            staticRenderFns: []

        };

        var ot = a("VU/8")(rt, lt, !1,

        function(e) {

            a("9hOS")

        },

        "data-v-58585442", null).exports,

        ut = {

            data: function() {

                return {

                    value3: !0

                }

            },

            components: {

                ReturnTop: G

            }

        },

        vt = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("推广")])]), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), a("div", {

                    staticClass: "submit",

                    on: {

                        click: function(t) {

                            return e.submitNext()

                        }

                    }

                },

                [e._v("\n        提交申请\n    ")])], 1)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "order"

                },

                [t("span", {

                    staticClass: "qes"

                },

                [this._v("手机号码")]), this._v(" "), t("input", {

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请输入推荐人手机号码"

                    }

                })])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "order"

                },

                [t("span", {

                    staticClass: "qes"

                },

                [this._v("验证码")]), this._v(" "), t("input", {

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请输入验证码"

                    }

                })])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "order"

                },

                [t("span", {

                    staticClass: "qes"

                },

                [this._v("机构编码")]), this._v(" "), t("input", {

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "默认选择：9999"

                    }

                })])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "order"

                },

                [t("span", {

                    staticClass: "qes"

                },

                [this._v("验证码")]), this._v(" "), t("input", {

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请在输入验证码"

                    }

                }), this._v(" "), t("span", {

                    staticClass: "send"

                },

                [this._v("获取验证码")])])

            }]

        };

        var ct = a("VU/8")(ut, vt, !1,

        function(e) {

            a("rDGr")

        },

        "data-v-463c04da", null).exports,

        pt = {

            render: function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", [t("router-view")], 1)

            },

            staticRenderFns: []

        };

        var It = a("VU/8")({},

        pt, !1,

        function(e) {

            a("tURl")

        },

        null, null).exports,

        ht = a("NYxO"),

        mt = {

            data: function() {

                return {

                    modelShow: !1,

                    phone: "",

                    pwd: ""

                }

            },

            computed: Ye()({},

            Object(ht.b)(["Authorization"])),

            methods: Ye()({},

            Object(ht.c)({

                setAuthorization: "SET_AUTHORIZATION"

            }), {

                submit: function() {

                    var e = this;

                    _("/api/authorizations", {

                        phone: this.phone,

                        password: this.pwd

                    }).then(function(t) {

                        e.setAuthorization(t.data.access_token),

                        localStorage.setItem("Authorization", e.Authorization),

                        e.$router.push("/me")

                    },

                    function(t) {

                        e.$message("请检查您的用户名或密码是否正确"),

                        console.log(t.response)

                    })

                },

                forget: function() {

                    this.$router.push("/loginRegistrat/forget")

                },

                select: function() {

                    this.modelShow = !0

                },

                selectBesure: function() {

                    this.modelShow = !1

                }

            })

        },

        ft = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [e._m(0), e._v(" "), a("div", {

                    staticClass: "message"

                },

                [a("div", {

                    staticClass: "tel"

                },

                [a("div", {

                    staticClass: "left"

                },

                [a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.phone,

                        expression: "phone"

                    }],

                    attrs: {

                        placeholder: "请输入手机号码",

                        type: "number",

                        min: "0"

                    },

                    domProps: {

                        value: e.phone

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.phone = t.target.value)

                        }

                    }

                })])]), e._v(" "), a("div", {

                    staticClass: "pwd"

                },

                [a("div", {

                    staticClass: "left"

                },

                [a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.pwd,

                        expression: "pwd"

                    }],

                    attrs: {

                        placeholder: "请输入密码",

                        type: "password"

                    },

                    domProps: {

                        value: e.pwd

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.pwd = t.target.value)

                        }

                    }

                })])])]), e._v(" "), a("div", {

                    staticClass: "login",

                    on: {

                        click: function(t) {

                            return e.submit()

                        }

                    }

                },

                [e._v("登录")]), e._v(" "), a("div", {

                    staticClass: "forget"

                },

                [a("span", {

                    staticClass: "left",

                    on: {

                        click: function(t) {

                            return e.forget()

                        }

                    }

                },

                [e._v("忘记密码？")]), e._v("\n    |\n    "), a("router-link", {

                    staticClass: "right",

                    attrs: {

                        tag: "span",

                        to: "/loginRegistrat/registrat"

                    }

                },

                [e._v("现在注册  >")])], 1), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: e.modelShow,

                        expression: "modelShow"

                    }],

                    staticClass: "model"

                },

                [a("div", {

                    staticClass: "box"

                },

                [a("div", {

                    staticClass: "top"

                },

                [e._v("选择登录会员单位")]), e._v(" "), a("div", {

                    staticClass: "bottom"

                },

                [a("p", {

                    on: {

                        click: function(t) {

                            return e.selectBesure()

                        }

                    }

                },

                [e._v("测试专用")])])])])])

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "logo"

                },

                [t("img", {

                    attrs: {

                        src: "/uploads/images/logo/logo_web.jpg",

                        alt: ""

                    }

                })])

            }]

        };

        var gt = a("VU/8")(mt, ft, !1,

        function(e) {

            a("EIoW")

        },

        "data-v-0deb2dc4", null).exports,

        _t = {

            data: function() {

                return {

                    num: 60,

                    send: !0,

                    getMsg: "获取验证码",

                    value3: !0,

                    modelShow: !1,

                    tel: "",

                    passwordRepeat: "",

                    msg: "",

                    password: "",

                    verificationKey: ""

                }

            },

            components: {

                ReturnTop: G

            },

            methods: {

                sendMsg: function() {

                    var e = this;

                    if (!this.send) return this.$message("请在" + this.num + "秒后再次发送验证码"),

                    !1;

                    _("/api/verificationCode/forgetPassword", {

                        phone: this.tel

                    }).then(function(t) {

                        if ("手机号已被注册！" == t.data.msg) e.$message("手机号已被注册！");

                        else if (t.data.status) {

                            e.$message("短信发送成功"),

                            e.verificationKey = t.data.data.verificationKey,

                            e.send = !1;

                            var a = e,

                            i = setInterval(function() {

                                a.num--,

                                a.getMsg = a.num,

                                0 == a.num && (a.num = 60, clearInterval(i), a.send = !0, a.getMsg = "获取验证码")

                            },

                            1e3)

                        } else "请输入手机号！" == t.data.msg ? e.$message("请输入手机号！") : "请输入正确的手机号！" == t.data.msg ? e.$message("请输入正确的手机号！") : e.$message("此手机号未注册")

                    },

                    function(e) {

                        console.log(e.response)

                    })

                },

                sendRegist: function() {

                    var e = this;

                    return "" == this.tel ? (this.$message("手机号码不能为空"), !1) : "" == this.msg ? (this.$message("验证码不能为空"), !1) : "" == this.password ? (this.$message("密码不能为空"), !1) : "" == this.passwordRepeat ? (this.$message("确认密码不能为空"), !1) : void _("/api/forgetPassword", {

                        phone: this.tel,

                        verificationKey: this.verificationKey,

                        verificationCode: this.msg,

                        password: this.password,

                        passwordRepeat: this.passwordRepeat

                    }).then(function(t) {

                        console.log(t),

                        "OK" != t.statusText ? e.$message("系统异常,请检查验证码是否正确以及密码与确认密码是否相同") : (e.$message("注册成功,请重新登陆"), e.$router.push("/loginRegistrat"))

                    },

                    function(e) {

                        console.log(e.response)

                    })

                },

                select: function() {

                    this.modelShow = !0

                },

                selectBesure: function() {

                    this.modelShow = !1

                }

            }

        },

        Ct = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("忘记密码")])]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("手机号码")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.tel,

                        expression: "tel"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请输入注册手机号码"

                    },

                    domProps: {

                        value: e.tel

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.tel = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("验证码")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.msg,

                        expression: "msg"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请在输入验证码"

                    },

                    domProps: {

                        value: e.msg

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.msg = t.target.value)

                        }

                    }

                }), e._v(" "), a("span", {

                    staticClass: "send",

                    on: {

                        click: function(t) {

                            return e.sendMsg()

                        }

                    }

                },

                [e._v(e._s(e.getMsg))])]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("登录密码")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.password,

                        expression: "password"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请输入6~12位密码"

                    },

                    domProps: {

                        value: e.password

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.password = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("确认密码")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.passwordRepeat,

                        expression: "passwordRepeat"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请在输入密码"

                    },

                    domProps: {

                        value: e.passwordRepeat

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.passwordRepeat = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "submit",

                    on: {

                        click: function(t) {

                            return e.sendRegist()

                        }

                    }

                },

                [e._v("\n    确认\n  ")]), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: e.modelShow,

                        expression: "modelShow"

                    }],

                    staticClass: "model"

                },

                [a("div", {

                    staticClass: "box"

                },

                [a("div", {

                    staticClass: "top"

                },

                [e._v("选择登录会员单位")]), e._v(" "), a("div", {

                    staticClass: "bottom"

                },

                [a("p", {

                    on: {

                        click: function(t) {

                            return e.selectBesure()

                        }

                    }

                },

                [e._v("测试专用")])])])])], 1)

            },

            staticRenderFns: []

        };

        var yt = a("VU/8")(_t, Ct, !1,

        function(e) {

            a("Y3FK")

        },

        "data-v-53aaa886", null).exports,

        At = {

            mounted: function() {

                this.code = this.$route.query.code

            },

            data: function() {

                return {

                    num: 60,

                    send: !0,

                    getMsg: "获取验证码",

                    code: "",

                    tel: "",

                    verificationKey: "",

                    msg: "",

                    password: "",

                    passwordRepeat: ""

                }

            },

            methods: {

                sendMsg: function() {

                    var e = this;

                    if (!this.send) return this.$message("请在" + this.num + "秒后再次发送验证码"),

                    !1;

                    _("/api/verificationCode/register", {

                        phone: this.tel

                    }).then(function(t) {

                        if (console.log(t), "手机号已被注册！" == t.data.msg) e.$message("手机号已被注册！");

                        else if (t.data.status) {

                            e.$message("短信发送成功"),

                            e.verificationKey = t.data.data.verificationKey,

                            e.send = !1;

                            var a = e,

                            i = setInterval(function() {

                                a.num--,

                                a.getMsg = a.num,

                                0 == a.num && (a.num = 60, clearInterval(i), a.send = !0, a.getMsg = "获取验证码")

                            },

                            1e3)

                        } else "请输入手机号！" == t.data.msg ? e.$message("请输入手机号！") : "请输入正确的手机号！" == t.data.msg ? e.$message("请输入正确的手机号！") : "该手机号已被注册！" == t.data.msg && e.$message("该手机号已被注册！")

                    },

                    function(e) {

                        console.log(e.response)

                    })

                },

                sendRegist: function() {

                    var e = this;

                    return "" == this.code || void 0 == this.code ? (this.$message("邀请码不能为空"), !1) : "" == this.tel ? (this.$message("手机号码不能为空"), !1) : "" == this.msg ? (this.$message("验证码不能为空"), !1) : "" == this.password ? (this.$message("密码不能为空"), !1) : "" == this.passwordRepeat ? (this.$message("确认密码不能为空"), !1) : void _("/api/users", {

                        code: this.code,

                        phone: this.tel,

                        verificationKey: this.verificationKey,

                        verificationCode: this.msg,

                        password: this.password,

                        passwordRepeat: this.passwordRepeat

                    }).then(function(t) {

                        console.log(t),

                        t.data.status ? (e.$message("注册成功,请重新登陆"), e.$router.push("/loginRegistrat")) : e.$message(t.data.msg)

                    },

                    function(e) {

                        console.log(e.response)

                    })

                }

            },

            components: {

                ReturnTop: G

            }

        },

        bt = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("注册")])]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("邀请码")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.code,

                        expression: "code"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请填写邀请码"

                    },

                    domProps: {

                        value: e.code

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.code = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("手机号码")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.tel,

                        expression: "tel"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请输入手机号码"

                    },

                    domProps: {

                        value: e.tel

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.tel = t.target.value)

                        }

                    }

                }), e._v(" "), a("span", {

                    staticClass: "send",

                    on: {

                        click: function(t) {

                            return e.sendMsg()

                        }

                    }

                },

                [e._v(e._s(e.getMsg))])]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("手机验证码")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.msg,

                        expression: "msg"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "text",

                        placeholder: "请输入手机验证码"

                    },

                    domProps: {

                        value: e.msg

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.msg = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("登录密码")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.password,

                        expression: "password"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "password",

                        placeholder: "请输入6~12位密码"

                    },

                    domProps: {

                        value: e.password

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.password = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "order"

                },

                [a("span", {

                    staticClass: "qes"

                },

                [e._v("确认密码")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.passwordRepeat,

                        expression: "passwordRepeat"

                    }],

                    staticClass: "a",

                    attrs: {

                        type: "password",

                        placeholder: "请再次输入密码"

                    },

                    domProps: {

                        value: e.passwordRepeat

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.passwordRepeat = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "submit",

                    on: {

                        click: function(t) {

                            return e.sendRegist()

                        }

                    }

                },

                [e._v("\n    立即注册\n  ")])], 1)

            },

            staticRenderFns: []

        };

        var wt = a("VU/8")(At, bt, !1,

        function(e) {

            a("uFsl")

        },

        "data-v-6c464724", null).exports,

        xt = {

            render: function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", [t("router-view")], 1)

            },

            staticRenderFns: []

        };

        var St = a("VU/8")({},

        xt, !1,

        function(e) {

            a("365/")

        },

        null, null).exports,

        Mt = function(e, t, a) {

            function i(e, t) {

                for (var a = [], i = 0, n = t.values.length; i < n; i++) if (i < e) a.push("-");

                else {

                    for (var s = 0,

                    d = 0; d < e; d++) s += t.values[i - d][1];

                    a.push( + (s / e).toFixed(3))

                }

                return a

            }

            $.get("/api/stock/kline/" + t + "/" + a,

            function(t) {

                var a = function(e) {

                    for (var t = [], a = [], i = [], n = 0; n < e.length; n++) t.push(e[n].splice(0, 1)[0]),

                    a.push(e[n]),

                    i.push([n, e[n][4], e[n][0] > e[n][1] ? 1 : -1]);

                    return {

                        categoryData: t,

                        values: a,

                        volumes: i

                    }

                } (t);

                e.setOption({

                    backgroundColor: "#fff",

                    animation: !1,

                    legend: {

                        bottom: 10,

                        left: "50%",

                        data: ["Dow-Jones index", "MA5", "MA10", "MA20", "MA30"]

                    },

                    tooltip: {

                        trigger: "axis",

                        axisPointer: {

                            type: "cross"

                        },

                        backgroundColor: "rgba(245, 245, 245, 0.8)",

                        borderWidth: 1,

                        borderColor: "#ccc",

                        padding: 10,

                        textStyle: {

                            color: "#000"

                        },

                        position: function(e, t, a, i, n) {

                            var s = {

                                top: 10

                            };

                            return s[["left", "right"][ + (e[0] < n.viewSize[0] / 2)]] = 30,

                            s

                        }

                    },

                    axisPointer: {

                        link: {

                            xAxisIndex: "all"

                        },

                        label: {

                            backgroundColor: "#777"

                        }

                    },

                    visualMap: {

                        show: !1,

                        seriesIndex: 5,

                        dimension: 2,

                        pieces: [{

                            value: 1,

                            color: "#90cc92"

                        },

                        {

                            value: -1,

                            color: "#e3605e"

                        }]

                    },

                    grid: [{

                        top: "10%",

                        left: "12%",

                        right: "3%",

                        height: "80%"

                    },

                    {

                        left: "12%",

                        right: "3%",

                        bottom: "0%",

                        height: "0%"

                    }],

                    xAxis: [{

                        type: "category",

                        data: a.categoryData,

                        scale: !0,

                        boundaryGap: !1,

                        axisLine: {

                            onZero: !1

                        },

                        splitLine: {

                            show: !1

                        },

                        splitNumber: 20,

                        min: "dataMin",

                        max: "dataMax",

                        axisPointer: {

                            z: 100

                        }

                    },

                    {

                        type: "category",

                        gridIndex: 1,

                        data: a.categoryData,

                        scale: !0,

                        boundaryGap: !1,

                        axisLine: {

                            onZero: !1

                        },

                        axisTick: {

                            show: !1

                        },

                        splitLine: {

                            show: !1

                        },

                        axisLabel: {

                            show: !1

                        },

                        splitNumber: 20,

                        min: "dataMin",

                        max: "dataMax"

                    }],

                    yAxis: [{

                        scale: !0,

                        splitArea: {

                            show: !0

                        }

                    },

                    {

                        splitArea: {

                            show: !1

                        },

                        scale: !0,

                        gridIndex: 1,

                        splitNumber: 2,

                        axisLabel: {

                            show: !1

                        },

                        axisLine: {

                            show: !1

                        },

                        axisTick: {

                            show: !1

                        },

                        splitLine: {

                            show: !1

                        }

                    }],

                    dataZoom: [{

                        type: "inside",

                        xAxisIndex: [0, 1],

                        start: 0,

                        end: 100

                    }],

                    series: [{

                        type: "candlestick",

                        data: a.values,

                        itemStyle: {

                            normal: {

                                color: "#e3605e",

                                color0: "#90cc92",

                                borderColor: null,

                                borderColor0: null

                            }

                        },

                        tooltip: {

                            formatter: function(e) {

                                return ["Date: " + (e = e[0]).name + '<hr size=1 style="margin: 3px 0">', "Open: " + e.data[0] + "<br/>", "Close: " + e.data[1] + "<br/>", "Lowest: " + e.data[2] + "<br/>", "Highest: " + e.data[3] + "<br/>"].join("")

                            }

                        }

                    },

                    {

                        type: "line",

                        data: i(5, a),

                        smooth: !0,

                        showSymbol: !1,

                        lineStyle: {

                            normal: {

                                opacity: .5

                            }

                        }

                    },

                    {

                        type: "line",

                        data: i(10, a),

                        smooth: !0,

                        showSymbol: !1,

                        lineStyle: {

                            normal: {

                                opacity: .5

                            }

                        }

                    },

                    {

                        type: "line",

                        data: i(20, a),

                        smooth: !0,

                        showSymbol: !1,

                        lineStyle: {

                            normal: {

                                opacity: .5

                            }

                        }

                    },

                    {

                        type: "line",

                        data: i(30, a),

                        smooth: !0,

                        showSymbol: !1,

                        lineStyle: {

                            normal: {

                                opacity: .5

                            }

                        }

                    },

                    {

                        name: "Volume",

                        type: "bar",

                        showSymbol: !1,

                        xAxisIndex: 1,

                        yAxisIndex: 1,

                        data: a.volumes

                    }]

                },

                !0)

            })

        },

        kt = function(e) {

            var t = {

                series: [{

                    name: "姓名",

                    type: "pie",

                    radius: "55%",

                    center: ["40%", "50%"],

                    data: [{

                        name: "散户流入",

                        value: "12"

                    },

                    {

                        name: "散户流出",

                        value: "13"

                    },

                    {

                        name: "主力流入",

                        value: "46"

                    },

                    {

                        name: "主力流出",

                        value: "30"

                    }],

                    label: {

                        formatter: "{b}: \n{d}",

                        align: "center"

                    },

                    itemStyle: {

                        emphasis: {

                            shadowBlur: 10,

                            shadowOffsetX: 0,

                            shadowColor: "rgba(0, 0, 0, 0.5)"

                        }

                    }

                }]

            };

            e.setOption(t)

        },

        Nt = function(e, t) {

            $.get("/api/stock/kline/hourly/" + t,

            function(t) {

                e.setOption({

                    tooltip: {

                        trigger: "axis",

                        formatter: "{c0}"

                    },

                    xAxis: {

                        lineStyle: {

                            color: "#ff0000"

                        },

                        data: t.map(function(e) {

                            return e[0]

                        })

                    },

                    yAxis: {

                        splitLine: {

                            show: !1

                        },

                        lineStyle: {

                            color: "#ff0000"

                        },

                        max: function(e) {

                            return e.max

                        },

                        min: function(e) {

                            return e.min

                        }

                    },

                    dataZoom: [{

                        start: 80,

                        show: !1

                    },

                    {

                        type: "inside"

                    }],

                    series: [{

                        areaStyle: {

                            color: "#ff0000",

                            opacity: .5

                        },

                        name: "Beijing AQI",

                        type: "line",

                        lineStyle: {

                            color: "#ff0000"

                        },

                        data: t.map(function(e) {

                            return e[1]

                        })

                    },

                    {

                        type: "line",

                        data: "",

                        smooth: !0,

                        lineStyle: {

                            normal: {

                                opacity: .5

                            }

                        }

                    },

                    {

                        type: "line",

                        data: "",

                        smooth: !0,

                        lineStyle: {

                            normal: {

                                opacity: .5

                            }

                        }

                    },

                    {

                        type: "line",

                        data: "",

                        smooth: !0,

                        lineStyle: {

                            normal: {

                                opacity: .5

                            }

                        }

                    },

                    {

                        type: "line",

                        data: "",

                        smooth: !0,

                        lineStyle: {

                            normal: {

                                opacity: .5

                            }

                        }

                    },

                    {

                        name: "Volume",

                        type: "bar",

                        xAxisIndex: 1,

                        yAxisIndex: 1

                    }]

                },

                !1)

            })

        },

        Et = {

            filters: {

                toPercentage: function(e) {

                    var t = Number(100 * e).toFixed(2);

                    return t += "%"

                }

            },

            data: function() {

                return {

                    interval: "",

                    isSim: this.$route.query.isSim,

                    codeData: {},

                    code: this.$route.query.code,

                    barGraphMax: 7e3,

                    barGraph: [{

                        num: 188,

                        date: "09-26"

                    },

                    {

                        num: -1022,

                        date: "09-27"

                    },

                    {

                        num: -529,

                        date: "09-28"

                    },

                    {

                        num: -3355.9,

                        date: "10-01"

                    },

                    {

                        num: 5053.4,

                        date: "10-20"

                    }],

                    KsIndex: 1,

                    ks: ["分时", "日K", "周K", "月K"],

                    NewsIndex: 0,

                    News: ["新闻", "公告", "资金", "研报"],

                    loadingPie: !0

                }

            },

            mounted: function() {

                this.drawLine("daily"),

                this.getCodeData(),

                console.log(this.isSim)

            },

            beforeDestroy: function() {

                window.clearInterval(this.interval)

            },

            methods: {

                getCodeData: function() {

                    var e = this;

                    C("/api/stock/realTimeInfo/" + this.code, {}).then(function(t) {

                        e.codeData = t.data

                    },

                    function(e) {})

                },

                changeKs: function(e) {

                    var t = this;

                    this.KsIndex = e,

                    1 == e ? (window.clearInterval(this.interval), this.drawLine("daily")) : 2 == e ? (window.clearInterval(this.interval), this.drawLine("weekly")) : 3 == e ? (window.clearInterval(this.interval), this.drawLine("monthly")) : 0 == e && (this.drawZx(), this.interval = window.setInterval(function() {

                        t.drawZx(),

                        t.getCodeData()

                    },

                    1e3))

                },

                drawZx: function() {

                    var e = this.$echarts.init(document.getElementById("myChart"));

                    Nt(e, this.code),

                    console.log(1)

                },

                drawLine: function(e) {

                    var t = this.$echarts.init(document.getElementById("myChart"));

                    Mt(t, e, this.code)

                },

                newsClick: function(e) {

                    this.NewsIndex = e,

                    2 == e && (this.loadingPie && this.drawPies(), this.loadingPie = !1)

                },

                drawPies: function() {

                    var e = this.$echarts.init(document.getElementById("myChart2"));

                    kt(e)

                }

            },

            components: {

                ReturnTop: G

            }

        },

        Rt = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v(e._s(e.codeData.name))])]), e._v(" "), a("div", {

                    staticClass: "days"

                },

                [a("div", {

                    staticClass: "box1"

                },

                [a("div", {

                    staticClass: "left"

                },

                [a("div", {

                    staticClass: "top",

                    class: {

                        down_green: (e.codeData.current_price - e.codeData.yesterday_end_price).toFixed(2) < 0

                    }

                },

                [e._v(e._s(e.codeData.current_price))]), e._v(" "), a("div", {

                    staticClass: "bottom",

                    class: {

                        down_green: (e.codeData.current_price - e.codeData.yesterday_end_price).toFixed(2) < 0

                    }

                },

                [e._v(e._s((e.codeData.current_price - e.codeData.yesterday_end_price).toFixed(2)) + " " + e._s(e._f("toPercentage")((e.codeData.current_price - e.codeData.yesterday_end_price) / e.codeData.yesterday_end_price)))])]), e._v(" "), a("div", {

                    staticClass: "right"

                },

                [a("ul", [a("li", [a("p", {

                    staticClass: "top"

                },

                [e._v("昨收")]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v(e._s(e.codeData.yesterday_end_price))])]), e._v(" "), a("li", {

                    staticClass: "nomargin"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("今开")]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v(e._s(e.codeData.today_begin_price))])]), e._v(" "), a("li", [a("p", {

                    staticClass: "top"

                },

                [e._v("最低")]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v(e._s(e.codeData.low))])]), e._v(" "), a("li", {

                    staticClass: "nomargin"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("最高")]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v(e._s(e.codeData.high))])])])])]), e._v(" "), a("div", {

                    staticClass: "box2"

                },

                [a("ul", [a("li", [e._v("振 幅 "), a("span", [e._v(e._s(e.codeData.zhenfu) + "%")])]), e._v(" "), a("li", [e._v("成交量 "), a("span", [e._v(e._s(e.codeData.volume))])]), e._v(" "), a("li", [e._v("成交额 "), a("span", [e._v(e._s(e.codeData.turnover))])]), e._v(" "), a("li", [e._v("内 盘 "), a("span", [e._v(e._s(e.codeData.inpan))])]), e._v(" "), a("li", [e._v("外 盘 "), a("span", [e._v(e._s(e.codeData.outpan))])]), e._v(" "), a("li", [e._v("总市值 "), a("span", [e._v(e._s(e.codeData.market_value))])]), e._v(" "), a("li", [e._v("市盈率 "), a("span", [e._v(e._s(e.codeData.PEratio))])]), e._v(" "), a("li", [e._v("市净率 "), a("span", [e._v(e._s(e.codeData.PBratio))])]), e._v(" "), a("li", [e._v("流通市值 "), a("span", [e._v(e._s(e.codeData.circulation_market_value))])])])])]), e._v(" "), a("div", {

                    staticClass: "ktab"

                },

                [a("ul", e._l(e.ks,

                function(t, i) {

                    return a("li", {

                        key: i,

                        class: {

                            active: i == e.KsIndex

                        },

                        on: {

                            click: function(t) {

                                return e.changeKs(i)

                            }

                        }

                    },

                    [e._v(e._s(t))])

                }), 0)]), e._v(" "), a("div", {

                    style: {

                        width: "7.5rem",

                        height: "6rem"

                    },

                    attrs: {

                        id: "myChart"

                    }

                }), e._v(" "), a("div", {

                    staticClass: "bottom_click"

                },

                [1 == e.isSim ? a("router-link", {

                    staticClass: "right",

                    staticStyle: {

                        width: "100%"

                    },

                    attrs: {

                        tag: "div",

                        to: {

                            path: "/simCreate/",

                            query: {

                                code: e.code

                            }

                        }

                    }

                },

                [e._v("创建策略")]) : a("router-link", {

                    staticClass: "right",

                    staticStyle: {

                        width: "100%"

                    },

                    attrs: {

                        tag: "div",

                        to: {

                            path: "/createSelf/",

                            query: {

                                code: e.code

                            }

                        }

                    }

                },

                [e._v("创建策略")])], 1)], 1)

            },

            staticRenderFns: []

        };

        var jt = a("VU/8")(Et, Rt, !1,

        function(e) {

            a("cOth")

        },

        "data-v-736f90d2", null).exports,

        Dt = {

            data: function() {

                return {

                    message: []

                }

            },

            mounted: function() {

                this.getAgree()

            },

            components: {

                ReturnTop: G

            },

            methods: {

                getAgree: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/payagreement/", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t.data.msg),

                        e.message = e.message.concat(t.data.msg)

                    },

                    function(t) {

                        e.$message("请检查网络或登录状态")

                    })

                }

            }

        },

        zt = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("支付协议")])]), e._v(" "), e._l(e.message,

                function(t, i) {

                    return a("div", {

                        key: i,

                        staticClass: "box"

                    },

                    [a("p", {

                        staticClass: "title"

                    },

                    [e._v(e._s(t.title))]), e._v(" "), a("p", {

                        staticClass: "txt",

                        domProps: {

                            innerHTML: e._s(t.announcement)

                        }

                    },

                    [e._v(e._s(t.announcement))])])

                })], 2)

            },

            staticRenderFns: []

        };

        var Tt = a("VU/8")(Dt, zt, !1,

        function(e) {

            a("ZBuA")

        },

        "data-v-5c5d0262", null).exports,

        Bt = {

            components: {

                ReturnTop: G

            },

            filters: {

                toPercentage: function(e) {

                    var t = Number(100 * e).toFixed(2);

                    return t += "%"

                }

            },

            data: function() {

                return {

                    input: "",

                    accountCount: {},

                    historyInfo: [],

                    userInfo: {},

                    tmpId: "",

                    ojbkShow: !1,

                    stopIn: 0,

                    stopOut: 0,

                    tmpOut: 0,

                    historyPage: 1,

                    history: [],

                    searchInput: [],

                    addInput: [],

                    nowCc: [],

                    nowStatus: 0,

                    sindex: 0,

                    tabIndex: 0,

                    tab: [{

                        title: "策略"

                    },

                    {

                        title: "持仓"

                    }],

                    snav: [{

                        title: "当前持仓"

                    },

                    {

                        title: "当前委托"

                    },

                    {

                        title: "历史交易"

                    }]

                }

            },

            watch: {

                searchInput: function(e) {

                    var t = this;

                    C("/api/stock/search", {

                        code: e

                    }).then(function(e) {

                        t.addInput = e.data.data

                    },

                    function(e) {

                        console.log(e)

                    })

                }

            },

            mounted: function() {

                this.getNow(),

                this.getAccountCount()

            },

            methods: {

                postSearch: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    _("/api/search", {

                        code: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(a) {

                        a.status && console.log("历史记录添加成功"),

                        t.$router.push({

                            path: "/ks",

                            query: {

                                code: e,

                                isSim: 1

                            }

                        })

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                addXyj: function(e, t) {

                    var a = this,

                    i = localStorage.getItem("Authorization");

                    _("/api/tactics/addshoudong", {

                        tactic_id: e,

                        xingyongjin: t

                    },

                    {

                        Authorization: "Bearer " + i

                    }).then(function(e) {

                        console.log(e),

                        a.$message("添加成功")

                    },

                    function(e) {

                        console.log(e),

                        a.$message("添加失败")

                    })

                },

                getHistoryInfo: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/strategyHistory/analog", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        e.historyInfo = t.data.data,

                        console.log(t.data.data)

                    },

                    function(e) {})

                },

                getAccountCount: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/accountCount/analog", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        e.accountCount = t.data.data

                    },

                    function(e) {})

                },

                sell: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    _("/api/tactics/sale", {

                        tactic_id: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(e) {

                        console.log(e),

                        t.$message.success(e.data.msg),

                        t.getNow()

                    },

                    function(e) {

                        console.log(e),

                        t.$message.success(e.data.msg)

                    })

                },

                stop: function(e, t, a) {

                    this.tmpId = e,

                    this.ojbkShow = !0,

                    this.stopIn = t,

                    this.stopOut = a,

                    this.tmpOut = this.stopOut

                },

                hide: function() {

                    this.tmpId = "",

                    this.ojbkShow = !1

                },

                ojbk: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    if (this.stopOut < this.tmpOut) return this.$message("最小止损不能小于" + this.tmpOut),

                    !1;

                    _("/api/tactics/editprice", {

                        tactic_id: this.tmpId,

                        max_price: this.stopIn,

                        min_price: this.stopOut

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        if (console.log(t), !t.data.status) return e.$message("当前价格设置过低"),

                        !1;

                        e.$message("修改成功"),

                        e.getNow(),

                        e.ojbkShow = !1

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                delay: function(e, t) {

                    var a = this,

                    i = localStorage.getItem("Authorization");

                    _("/api/tactics/issell", {

                        tactic_id: e,

                        is_sell: t

                    },

                    {

                        Authorization: "Bearer " + i

                    }).then(function(e) {

                        if (!e.data.status) return a.$message("修改失败"),

                        !1;

                        a.$message("修改成功"),

                        a.getNow()

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                remove: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    y("/api/search", {

                        code: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(e) {

                        t.showHistory()

                    },

                    function(e) {

                        t.showHistory()

                    })

                },

                removeAll: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    y("/api/search", {

                        type: 1

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        e.showHistory()

                    },

                    function(t) {

                        e.showHistory()

                    })

                },

                upDown: function(e) {

                    if (0 == e) {

                        if (1 == this.historyPage) return ! 1;

                        this.historyPage--

                    } else 1 == e && this.historyPage++;

                    console.log(this.historyPage),

                    this.showHistory()

                },

                changeCount: function() {},

                isShow: function(e) {

                    0 == this.nowCc[e].is_show ? this.nowCc[e].is_show = 1 : this.nowCc[e].is_show = 0

                },

                isShow2: function(e) {

                    console.log(e),

                    0 == this.historyInfo[e].is_show ? this.historyInfo[e].is_show = 1 : this.historyInfo[e].is_show = 0

                },

                getNow: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/strategyChiCang/analog", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        e.nowCc = t.data.data,

                        e.nowStatus = t.data.status

                    },

                    function(t) {

                        e.$router.push("/me")

                    })

                },

                snavClick: function(e) {

                    console.log(e),

                    this.sindex = e,

                    2 == e ? this.getHistoryInfo() : 0 == e && this.getNow()

                },

                tabClick: function(e) {

                    this.tabIndex = e,

                    1 == e && this.getNow()

                }

            }

        },

        Lt = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("模拟点买")])]), e._v(" "), a("div", {

                    staticClass: "tab1"

                },

                [a("div", {

                    staticClass: "search"

                },

                [e._m(0), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.searchInput,

                        expression: "searchInput"

                    }],

                    attrs: {

                        placeholder: "请输入股票代码",

                        type: "",

                        name: "",

                        id: ""

                    },

                    domProps: {

                        value: e.searchInput

                    },

                    on: {

                        blur: function(t) {

                            return t.preventDefault(),

                            e.changeCount()

                        },

                        input: function(t) {

                            t.target.composing || (e.searchInput = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "search_div"

                },

                [a("ul", e._l(e.addInput,

                function(t, i) {

                    return a("li", {

                        key: i,

                        on: {

                            click: function(a) {

                                return e.postSearch(t.code)

                            }

                        }

                    },

                    [a("span", {

                        staticClass: "left"

                    },

                    [e._v(e._s(t.code))]), e._v(" "), a("span", {

                        staticClass: "left",

                        staticStyle: {

                            "margin-left": ".2rem",

                            float: "right"

                        }

                    },

                    [e._v(e._s(t.name))])])

                }), 0)])]), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: e.ojbkShow,

                        expression: "ojbkShow"

                    }],

                    staticClass: "zz"

                }), e._v(" "), a("div", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: e.ojbkShow,

                        expression: "ojbkShow"

                    }],

                    staticClass: "outer_box1"

                },

                [a("div", {

                    staticClass: "box"

                },

                [a("span", {

                    staticClass: "stop"

                },

                [e._v("止盈")]), e._v(" "), a("el-input", {

                    attrs: {

                        type: "number",

                        placeholder: "请输入止盈价格"

                    },

                    model: {

                        value: e.stopIn,

                        callback: function(t) {

                            e.stopIn = t

                        },

                        expression: "stopIn"

                    }

                })], 1), e._v(" "), a("div", {

                    staticClass: "box"

                },

                [a("span", {

                    staticClass: "down_green stop"

                },

                [e._v("止损")]), e._v(" "), a("el-input", {

                    attrs: {

                        type: "number",

                        placeholder: "请输入止损价格"

                    },

                    model: {

                        value: e.stopOut,

                        callback: function(t) {

                            e.stopOut = t

                        },

                        expression: "stopOut"

                    }

                })], 1), e._v(" "), a("div", {

                    staticClass: "box"

                },

                [a("el-button", {

                    attrs: {

                        type: "info"

                    },

                    on: {

                        click: function(t) {

                            return e.hide()

                        }

                    }

                },

                [e._v("取消")]), e._v(" "), a("el-button", {

                    attrs: {

                        type: "danger"

                    },

                    on: {

                        click: function(t) {

                            return e.ojbk()

                        }

                    }

                },

                [e._v("确定")])], 1)]), e._v(" "), a("div", {

                    staticClass: "tab2"

                },

                [a("div", {

                    staticClass: "money"

                },

                [a("ul", [a("li", {

                    staticClass: "left"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("净资产")]), e._v(" "), a("p", {

                    staticClass: "num"

                },

                [e._v("￥" + e._s(e.accountCount.asset))])]), e._v(" "), a("li", {

                    staticClass: "right"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("可用资金")]), e._v(" "), a("p", {

                    staticClass: "num"

                },

                [e._v("￥" + e._s(e.accountCount.can_use))])])]), e._v(" "), a("ul", [a("li", {

                    staticClass: "left"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("持仓市值")]), e._v(" "), a("p", {

                    staticClass: "num"

                },

                [e._v("￥" + e._s(e.accountCount.market_value))])]), e._v(" "), a("li", {

                    staticClass: "right"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("浮动盈亏")]), e._v(" "), a("p", {

                    staticClass: "num"

                },

                [e._v("￥" + e._s(e.accountCount.float_earn))])])])]), e._v(" "), a("div", {

                    staticClass: "snav"

                },

                [a("ul", [e._l(e.snav,

                function(t, i) {

                    return a("li", {

                        key: i,

                        staticClass: "txt",

                        class: {

                            active: i == e.sindex

                        },

                        on: {

                            click: function(t) {

                                return e.snavClick(i)

                            }

                        }

                    },

                    [e._v(e._s(t.title))])

                }), e._v(" "), a("li", {

                    staticClass: "sx"

                }), e._v(" "), a("li", {

                    staticClass: "sx"

                })], 2)]), e._v(" "), a("div", {

                    staticClass: "snav1"

                },

                [e._l(e.nowCc,

                function(t, i) {

                    return 0 != e.nowStatus ? a("div", {

                        directives: [{

                            name: "show",

                            rawName: "v-show",

                            value: 0 == e.sindex,

                            expression: "sindex == 0"

                        }],

                        key: i,

                        staticClass: "now"

                    },

                    [a("div", {

                        staticClass: "title_box",

                        on: {

                            click: function(t) {

                                return e.isShow(i)

                            }

                        }

                    },

                    [a("div", {

                        staticClass: "left"

                    },

                    [e._v(e._s(t.name))]), e._v(" "), a("div", {

                        staticClass: "right"

                    },

                    [e._v(e._s(t.code))])]), e._v(" "), a("ul", {

                        directives: [{

                            name: "show",

                            rawName: "v-show",

                            value: 1 == t.is_show,

                            expression: "item.is_show == 1"

                        }]

                    },

                    [a("li", [e._v("信用金 "), a("span", [e._v(e._s(t.xingyongjin))])]), e._v(" "), a("li", [e._v("买入价 "), a("span", [e._v(e._s(t.price))])]), e._v(" "), a("li", [e._v("止 盈 "), a("span", [e._v(e._s(t.max_price))])]), e._v(" "), a("li", [e._v("股票数 "), a("span", [e._v(e._s(t.num))])]), e._v(" "), a("li", [e._v("现 价 "), a("span", [e._v(e._s(t.current_price))])]), e._v(" "), a("li", [e._v("止 损 "), a("span", [e._v(e._s(t.min_price))])]), e._v(" "), a("li", [e._v("浮动盈亏 "), a("span", [e._v(e._s(t.float_earn))])]), e._v(" "), a("li", [e._v("创建时间 "), a("span", [e._v(e._s(t.created_at))])]), e._v(" "), a("li", [e._v("市 值 "), a("span", [e._v(e._s(t.market_value))])]), e._v(" "), a("div", {

                        staticClass: "sell"

                    },

                    [a("div", {

                        staticClass: "box"

                    },

                    [a("div", {

                        staticClass: "left"

                    },

                    [e._v("当前递延状态："), 1 == t.is_sell ? a("span", [e._v("不递延")]) : e._e(), 2 == t.is_sell ? a("span", [e._v("递延")]) : e._e()])]), e._v(" "), a("div", {

                        staticClass: "box"

                    },

                    [a("div", {

                        staticClass: "left"

                    },

                    [e._v("当前:还剩下" + e._s((t.price - t.min_price).toFixed(2)) + "元即将到达止损价")])]), e._v(" "), e._m(1, !0)]), e._v(" "), a("div", {

                        staticClass: "sell2"

                    },

                    [a("div", {

                        staticClass: "button active",

                        on: {

                            click: function(a) {

                                return e.sell(t.tactic_id)

                            }

                        }

                    },

                    [e._v("卖出")]), e._v(" "), a("div", {

                        staticClass: "button",

                        on: {

                            click: function(a) {

                                return e.stop(t.tactic_id, t.max_price, t.min_price)

                            }

                        }

                    },

                    [e._v("止盈止损")]), e._v(" "), a("div", {

                        staticClass: "button",

                        on: {

                            click: function(a) {

                                return e.delay(t.tactic_id, 2)

                            }

                        }

                    },

                    [e._v("递延")]), e._v(" "), a("div", {

                        staticClass: "button nomargin",

                        on: {

                            click: function(a) {

                                return e.delay(t.tactic_id, 1)

                            }

                        }

                    },

                    [e._v("不递延")])]), e._v(" "), 1 == t.is_add ? a("div", {

                        staticClass: "sell2"

                    },

                    [a("div", {

                        staticClass: "button",

                        staticStyle: {

                            flex: ".6"

                        }

                    },

                    [e._v("追加" + e._s(t.xingyongjin) + "元")]), e._v(" "), a("div", {

                        staticClass: "button active",

                        staticStyle: {

                            flex: ".4",

                            "margin-left": ".2rem"

                        },

                        on: {

                            click: function(a) {

                                return e.addXyj(t.tactic_id, t.xingyongjin)

                            }

                        }

                    },

                    [e._v("追加信用金")])]) : e._e()])]) : e._e()

                }), e._v(" "), e._l(e.historyInfo,

                function(t, i) {

                    return a("div", {

                        directives: [{

                            name: "show",

                            rawName: "v-show",

                            value: 2 == e.sindex,

                            expression: "sindex == 2"

                        }],

                        key: t.code,

                        staticClass: "now",

                        on: {

                            click: function(t) {

                                return e.isShow2(i)

                            }

                        }

                    },

                    [a("div", {

                        staticClass: "title_box"

                    },

                    [a("div", {

                        staticClass: "left"

                    },

                    [e._v(e._s(t.name))]), e._v(" "), a("div", {

                        staticClass: "right"

                    },

                    [e._v(e._s(t.code))])]), e._v(" "), a("ul", {

                        directives: [{

                            name: "show",

                            rawName: "v-show",

                            value: 1 == t.is_show,

                            expression: "item.is_show == 1"

                        }]

                    },

                    [a("li", [e._v("信用金 "), a("span", [e._v(e._s(t.xingyongjin))])]), e._v(" "), a("li", [e._v("买价 "), a("span", [e._v(e._s(t.price))])]), e._v(" "), a("li", [e._v("卖价 "), a("span", [e._v(e._s(t.deal_money))])]), e._v(" "), a("li", [e._v("股票数 "), a("span", [e._v(e._s(t.num))])]), e._v(" "), a("li", [e._v("盈亏 "), a("span", [e._v(e._s((Number(100 * t.deal_money).toFixed(2) - Number(100 * t.price).toFixed(2)) * t.num / 100))])]), e._v(" "), a("li", [e._v("收益率 "), a("span", [e._v(e._s(t.rate))])]), e._v(" "), a("li", [e._v("买入 "), a("span", [e._v(e._s(t.created_at))])]), e._v(" "), a("li", [e._v("卖出 "), a("span", [e._v(e._s(t.deal_time))])]), e._v(" "), a("li", [e._v("建仓费 "), a("span", [e._v(e._s(t.cangfei))])]), e._v(" "), a("li", [e._v("递延费 "), a("span", [e._v(e._s(t.count_diyanfei))])]), e._v(" "), a("li", {

                        staticStyle: {

                            width: "100%"

                        }

                    },

                    [e._v("平仓类型 "), a("span", [e._v(e._s(t.pingcang_type))])])])])

                }), e._v(" "), 0 == e.nowStatus ? a("p", {

                    staticClass: "nothing"

                },

                [e._v("暂无数据~")]) : e._e()], 2)])], 1)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("i", [t("img", {

                    attrs: {

                        src: a("JdHl")

                    }

                })])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "box"

                },

                [t("div", {

                    staticClass: "left"

                },

                [this._v("每天14：50扣除递延费，请保持可用余额充足")])])

            }]

        };

        var Ft = a("VU/8")(Bt, Lt, !1,

        function(e) {

            a("6vSO")

        },

        "data-v-619040c4", null).exports,

        Ut = {

            filters: {

                toPercentage: function(e) {

                    var t = Number(100 * e).toFixed(2);

                    return t += "%"

                }

            },

            mounted: function() {

                this.getMultiple(),

                this.getShare(),

                this.getCDMoney(),

                this.getUserInfo(),

                this.getInit()

            },

            watch: {

                selectaddxinyongjin: function(e) {

                    for (var t = !1,

                    a = 0; a < this.selectNum.length; a++) e == this.selectNum[a] && (this.selectNumIndex = a, t = !0);

                    0 == t && (this.selectNumIndex = -1),

                    this.getCDMoney()

                }

            },

            data: function() {

                return {

                    isdanger: "",

                    myMoney: 0,

                    agree: !1,

                    minLess: 0,

                    minAdd: 0,

                    deferred: "",

                    buildCost: "",

                    share: [],

                    code: this.$route.query.code,

                    ydf: !0,

                    zj: !1,

                    addReduceNum: 1,

                    lessReduceNum: "",

                    selectNumIndex: 0,

                    selectMultipleIndex: 0,

                    selectNum: [1e3, 5e3, 1e4, 2e4, 3e4, 5e4, 8e4, 1e5],

                    selectaddxinyongjin: 1e3,

                    selectMultiple: ["", "", ""],

                    is_add: 1,

                    is_sell: 1

                }

            },

            components: {

                ReturnTop: G

            },

            computed: {

                num: function() {

                    var e = this.selectaddxinyongjin * this.selectMultiple[this.selectMultipleIndex];

                    return Math.round(e / this.share[4]) > 100 ? 100 * Math.floor(Math.round(e / this.share[4]) / 100) : 100

                }

            },

            methods: {

                getInit: function() {

                    var e = localStorage.getItem("Authorization");

                    C("/api/newfollowbuy/", {

                        id: this.id

                    },

                    {

                        Authorization: "Bearer " + e

                    }).then(function(e) {

                        console.log(e)

                    })

                },

                agreeClick: function() {

                    this.agree = !this.agree

                },

                sendCreate: function() {

                    var e = this;

                    return D()(R.a.mark(function t() {

                        var a, i, n;

                        return R.a.wrap(function(t) {

                            for (;;) switch (t.prev = t.next) {

                            case 0:

                                if (e.agree) {

                                    t.next = 3;

                                    break

                                }

                                return e.$message("请先阅读并同意支付协议后再创建订单"),

                                t.abrupt("return", !1);

                            case 3:

                                return a = localStorage.getItem("Authorization"),

                                e.ydf ? e.is_sell = 2 : e.is_sell = 1,

                                e.zj ? e.is_add = 2 : e.is_add = 1,

                                i = !0,

                                t.next = 9,

                                z.a.confirm({

                                    title: "确认创建",

                                    message: "您确认创建此策略吗"

                                }).then(function() {}).

                                catch(function() {

                                    i = !1

                                });

                            case 9:

                                if (i) {

                                    t.next = 11;

                                    break

                                }

                                return t.abrupt("return", !1);

                            case 11:

                                n = Z.Loading.service({

                                    fullscreen: !0,

                                    background: "rgba(0,0,0,0.5)"

                                }),

                                _("/api/tactics", {

                                    code: e.code,

                                    price: e.share[4],

                                    xingyongjin: e.selectaddxinyongjin,

                                    multiple: parseInt(e.selectMultiple[e.selectMultipleIndex]),

                                    max_price: e.addReduceNum,

                                    min_price: e.lessReduceNum,

                                    create_money: parseFloat(e.buildCost) + parseInt(e.selectNum[e.selectNumIndex]),

                                    is_add: e.is_add,

                                    is_sell: e.is_sell,

                                    is_analog: 1,

                                    uuid: Math.random().toString(36).substr(2)

                                },

                                {

                                    Authorization: "Bearer " + a

                                }).then(function(t) {

                                    n.close(),

                                    1 == t.data.status ? e.$message("订单创建成功！") : e.$message(t.data.msg)

                                },

                                function(e) {

                                    n.close(),

                                    console.log(e.response)

                                });

                            case 13:

                            case "end":

                                return t.stop()

                            }

                        },

                        t, e)

                    }))()

                },

                getUserInfo: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/user/", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        t ? e.myMoney = t.data.data.money: e.$message("登录失败，请重新登录")

                    },

                    function(e) {})

                },

                getMultiple: function() {

                    var e = this;

                    C("/api/multiple", {},

                    {}).then(function(t) {

                        t.data.status && (e.selectMultiple = t.data.data, e.getCDMoney())

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                getCDMoney: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    _("/api/tactics/procedure", {

                        code: this.code,

                        xingyongjin: this.selectaddxinyongjin,

                        multiple: parseInt(this.selectMultiple[this.selectMultipleIndex])

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        e.deferred = t.data.data.diyanfei,

                        e.buildCost = t.data.data.cangfei,

                        e.lessReduceNum = t.data.data.min_min_price

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                changeNum: function(e) {

                    this.selectNumIndex = e,

                    this.selectaddxinyongjin = this.selectNum[e]

                },

                changeMultiple: function(e) {

                    this.selectMultipleIndex = e,

                    this.getCDMoney(),

                    this.getShare()

                },

                getBuild: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/tactics/storage/", {

                        multiple: parseInt(this.selectMultiple[this.selectMultipleIndex]),

                        xingyongjin: this.selectaddxinyongjin

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        t.data.status ? e.buildCost = t.data.data.cangfei: (e.buildCost = "", e.$message("仓费获取出错"))

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                getShare: function() {

                    var e = this;

                    C("/api/stock/getprice/", {

                        code: this.code

                    }).then(function(t) {

                        console.log(t),

                        e.isdanger = t.data.data.is_danger,

                        e.share = t.data.data[0]; (parseFloat(e.share[4]) - parseFloat((.8 * parseFloat(e.share[4])).toFixed(2) + .01) / parseInt(e.selectMultiple[e.selectMultipleIndex])).toFixed(2);

                        e.minLess = e.lessReduceNum,

                        e.addReduceNum = (1.1 * parseFloat(parseFloat(e.share[4]).toFixed(2))).toFixed(2),

                        e.addReduceNumeff = (parseFloat(parseFloat(e.share[4]).toFixed(2)) + .01).toFixed(2),

                        e.minAdd = e.addReduceNum

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                reduce1: function() {

                    this.addReduceNum = (parseInt(100 * this.addReduceNum) - 1) / 100,

                    this.addReduceNum < this.addReduceNumeff && (this.$message("您的止盈设置不能低于" + this.addReduceNumeff), this.addReduceNum = this.addReduceNumeff)

                },

                add1: function() {

                    this.addReduceNum = (parseInt(100 * this.addReduceNum) + 1) / 100

                },

                reduce2: function() {

                    this.lessReduceNum = (parseInt(100 * this.lessReduceNum) - 1) / 100,

                    this.lessReduceNum < this.minLess && (this.$message("您的止损设置不能低于" + this.minLess), this.lessReduceNum = this.minLess)

                },

                add2: function() {

                    this.lessReduceNum = (parseInt(100 * this.lessReduceNum) + 1) / 100

                }

            }

        },

        Pt = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("创建策略")])]), e._v(" "), a("div", {

                    staticClass: "share_box"

                },

                [a("ul", {

                    staticClass: "ul1"

                },

                [a("li", {

                    staticClass: "first"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v(e._s(e.share[1]))]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v(e._s(e._f("filtersName")(e.share[0])))])]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [a("p", {

                    staticClass: "top",

                    class: {

                        down_green: (e.share[4] - e.share[3]) / e.share[3] < 0

                    }

                },

                [e._v(e._s(parseFloat(e.share[4]).toFixed(2)))]), e._v(" "), a("div", {

                    staticClass: "bottom"

                },

                [a("span", {

                    staticClass: "left",

                    class: {

                        down_green: (e.share[4] - e.share[3]) / e.share[3] < 0

                    }

                },

                [e._v(e._s((e.share[4] - e.share[3]).toFixed(2)) + "  ")]), e._v(" "), a("span", {

                    staticClass: "right",

                    class: {

                        down_green: (e.share[4] - e.share[3]) / e.share[3] < 0

                    }

                },

                [e._v(e._s(e._f("toPercentage")((e.share[4] - e.share[3]) / e.share[3])))])])]), e._v(" "), a("router-link", {

                    staticClass: "third",

                    staticStyle: {

                        color: "red"

                    },

                    attrs: {

                        tag: "div",

                        to: {

                            path: "/Ks/",

                            query: {

                                code: e.code

                            }

                        }

                    }

                },

                [e._v("行情"), a("span", {

                    staticClass: "iconfont",

                    staticStyle: {

                        "font-size": ".12rem",

                        "margin-left": ".1rem"

                    }

                },

                [e._v("")])])], 1), e._v(" "), a("ul", {

                    staticClass: "ul2"

                },

                [a("li", [e._v("市价委托")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [e._v(e._s(parseFloat(e.share[4]).toFixed(2)))])])]), e._v(" "), a("div", {

                    staticClass: "select_box1"

                },

                [a("ul", {

                    staticClass: "title"

                },

                [a("li", [e._v("选择信用金（元）")]), e._v(" "), a("li", {

                    staticStyle: {

                        color: "#fff"

                    }

                },

                [e._v("1")]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.selectaddxinyongjin,

                        expression: "selectaddxinyongjin"

                    }],

                    attrs: {

                        type: "text"

                    },

                    domProps: {

                        value: e.selectaddxinyongjin

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.selectaddxinyongjin = t.target.value)

                        }

                    }

                })])]), e._v(" "), a("ul", {

                    staticClass: "select_num"

                },

                [a("li", {

                    staticClass: "left"

                },

                [e._v("\n        你也可选择\n      ")]), e._v(" "), a("li", {

                    staticClass: "right"

                },

                [a("ul", e._l(e.selectNum,

                function(t, i) {

                    return a("li", {

                        key: i,

                        class: {

                            nomargin: i % 4 == 3,

                            active: i == e.selectNumIndex

                        },

                        on: {

                            click: function(t) {

                                return e.changeNum(i)

                            }

                        }

                    },

                    [e._v(e._s(t))])

                }), 0)])])]), e._v(" "), a("div", {

                    staticClass: "select_box2"

                },

                [a("ul", {

                    staticClass: "ul1"

                },

                [a("li", {

                    staticClass: "first"

                },

                [e._v("\n        策略匹配\n      ")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [a("ul", e._l(e.selectMultiple,

                function(t, i) {

                    return a("li", {

                        key: i,

                        class: {

                            nomargin: i % 3 == 2,

                            active: i == e.selectMultipleIndex

                        },

                        on: {

                            click: function(t) {

                                return e.changeMultiple(i)

                            }

                        }

                    },

                    [e._v(e._s(t) + "倍")])

                }), 0)]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v(e._s(e.num) + "股")]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v("值" + e._s(Math.round(e.num * e.share[4])) + "元")])])])]), e._v(" "), a("div", {

                    staticClass: "select_box3"

                },

                [a("ul", {

                    staticClass: "ul1"

                },

                [a("li", {

                    staticClass: "first"

                },



                [e._v("\n        止盈\n      ")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [a("div", {

                    staticClass: "reduce",

                    on: {

                        click: function(t) {

                            return e.reduce1()

                        }

                    }

                },

                [e._v("-")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.addReduceNum,

                        expression: "addReduceNum"

                    }],

                    staticClass: "number",

                    attrs: {

                        type: "number"

                    },

                    domProps: {

                        value: e.addReduceNum

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.addReduceNum = t.target.value)

                        }

                    }

                }), e._v(" "), a("div", {

                    staticClass: "add",

                    on: {

                        click: function(t) {

                            return e.add1()

                        }

                    }

                },

                [e._v("+")])]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [e._v("\n        涨幅约"), a("span", {

                    staticClass: "red"

                },

                [e._v(e._s(e._f("toPercentage")((e.addReduceNum - parseFloat(e.share[4])) / parseFloat(e.share[4]))))])])]), e._v(" "), a("ul", {

                    staticClass: "ul1"

                },

                [a("li", {

                    staticClass: "first"

                },

                [e._v("\n        止损\n      ")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [a("div", {

                    staticClass: "reduce",

                    on: {

                        click: function(t) {

                            return e.reduce2()

                        }

                    }

                },

                [e._v("-")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.lessReduceNum,

                        expression: "lessReduceNum"

                    }],

                    staticClass: "number",

                    attrs: {

                        type: "number"

                    },

                    domProps: {

                        value: e.lessReduceNum

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.lessReduceNum = t.target.value)

                        }

                    }

                }), e._v(" "), a("div", {

                    staticClass: "add",

                    on: {

                        click: function(t) {

                            return e.add2()

                        }

                    }

                },

                [e._v("+")])]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [e._v("\n        跌幅约"), a("span", {

                    staticClass: "red down_green"

                },

                [e._v(e._s(e._f("toPercentage")((e.lessReduceNum - parseFloat(e.share[4])) / parseFloat(e.share[4]))))])])])]), e._v(" "), a("div", {

                    staticClass: "select_box4"

                },

                [a("div", {

                    staticClass: "first"

                },

                [e._v("建仓费")]), e._v(" "), a("div", {

                    staticClass: "secend"

                },

                [e._v(e._s(e.buildCost) + "元"), a("span", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: "" == e.buildCost,

                        expression: "buildCost == '' "

                    }]

                },

                [e._v("请选择信用金与策略匹配来计算仓费")])])]), e._v(" "), a("div", {

                    staticClass: "select_box5"

                },

                [a("div", {

                    staticClass: "select_box4"

                },

                [a("div", {

                    staticClass: "first"

                },

                [e._v("递延费")]), e._v(" "), a("div", {

                    staticClass: "secend"

                },

                [e._v(e._s(e.deferred) + "/天")])]), e._v(" "), a("div", {

                    staticClass: "select_box4"

                },

                [a("div", {

                    staticClass: "first"

                },

                [e._v("是否递延")]), e._v(" "), e._m(0), e._v(" "), a("div", {

                    staticClass: "ydf"

                },

                [a("el-switch", {

                    staticClass: "ydf",

                    attrs: {

                        "active-color": "#ff5a5a"

                    },

                    model: {

                        value: e.ydf,

                        callback: function(t) {

                            e.ydf = t

                        },

                        expression: "ydf"

                    }

                })], 1)]), e._v(" "), a("div", {

                    staticClass: "select_box4"

                },

                [a("div", {

                    staticClass: "first"

                },

                [e._v("追加信用金")]), e._v(" "), e._m(1), e._v(" "), a("div", {

                    staticClass: "ydf"

                },

                [a("el-switch", {

                    staticClass: "ydf",

                    attrs: {

                        "active-color": "#ff5a5a"

                    },

                    model: {

                        value: e.zj,

                        callback: function(t) {

                            e.zj = t

                        },

                        expression: "zj"

                    }

                })], 1)])]), e._v(" "), a("div", {

                    staticClass: "should_pay"

                },

                [a("div", {

                    staticClass: "left"

                },

                [e.selectNumIndex > 0 ? a("p", {

                    staticClass: "top"

                },

                [e._v("需支付"), a("span", [e._v(e._s(parseFloat(e.buildCost) + parseFloat(e.selectNum[e.selectNumIndex])))]), e._v("元")]) : a("p", {

                    staticClass: "top"

                },

                [e._v("需支付"), a("span", [e._v(e._s(parseFloat(e.buildCost) + parseFloat(e.selectaddxinyongjin)))]), e._v("元")]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v("（账户余额" + e._s(e.myMoney) + "元）")])]), e._v(" "), 1 != e.isdanger ? a("div", {

                    staticClass: "right",

                    on: {

                        click: function(t) {

                            return e.sendCreate()

                        }

                    }

                },

                [e._v("马上创建")]) : a("div", {

                    staticClass: "right",

                    staticStyle: {

                        background: "#ccc",

                        color: "#fff"

                    }

                },

                [e._v("马上创建")])]), e._v(" "), a("div", {

                    staticClass: "agree",

                    on: {

                        click: function(t) {

                            return e.agreeClick()

                        }

                    }

                },

                [a("i", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: e.agree,

                        expression: "agree"

                    }],

                    staticClass: "iconfont"

                },

                [e._v("  ")]), e._v(" "), a("i", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: !e.agree,

                        expression: "!agree"

                    }],

                    staticClass: "iconfont"

                },

                [e._v("")]), e._v(" "), a("span", {

                    staticClass: "txt"

                },

                [e._v("我已阅读并同意"), a("router-link", {

                    attrs: {

                        tag: "span",

                        targe: "_blank",

                        to: "/agreeMent"

                    }

                },

                [e._v("《支付服务协议》")])], 1)])], 1)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "secend special"

                },

                [this._v("若未开启自动递延"), t("br"), this._v("到期日 14:40 将卖出股票")])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "secend special"

                },

                [this._v("开启为自动"), t("br"), this._v("关闭为手动")])

            }]

        };

        var Ot = a("VU/8")(Ut, Pt, !1,

        function(e) {

            a("FA4p")

        },

        "data-v-3ed52ac8", null).exports,

        Yt = a("900P"),

        Gt = a.n(Yt),

        Zt = {

            filters: {

                toPercentage: function(e) {

                    var t = Number(100 * e).toFixed(2);

                    return t += "%"

                }

            },

            data: function() {

                return {

                    isGz: "",

                    title_box: Gt.a,

                    id: this.$route.query.id,

                    userinfo: {},

                    shareinfo: []

                }

            },

            mounted: function() {

                this.getInit()

            },

            methods: {

                back: function() {

                    this.$router.go( - 1)

                },

                is_see: function(e) {

                    var t = this,

                    a = localStorage.getItem("Authorization");

                    _("/api/follow", {

                        to_user_id: e

                    },

                    {

                        Authorization: "Bearer " + a

                    }).then(function(e) {

                        0 == t.isGz ? t.isGz = 1 : t.isGz = 0,

                        t.$message({

                            message: e.data.msg,

                            type: "success"

                        })

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                getInit: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/bestmaninfo", {

                        to_user_id: this.id

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        e.userinfo = t.data.data.userinfo,

                        e.shareinfo = t.data.data.getdynamicinfo.data,

                        e.isGz = t.data.data.focus

                    },

                    function(e) {})

                }

            }

        },

        Wt = {

            render: function() {

                var e = this,

                t = e.$createElement,

                i = e._self._c || t;

                return i("div", [i("div", {

                    staticClass: "title_box",

                    style: {

                        backgroundImage: "url(" + e.title_box + ")"

                    }

                },

                [i("div", {

                    staticClass: "return",

                    on: {

                        click: function(t) {

                            return e.back()

                        }

                    }

                },

                [e._m(0), e._v(" "), i("span", {

                    staticClass: "txt"

                },

                [e._v("返回")])]), e._v(" "), i("div", {

                    staticClass: "user_info"

                },

                [i("div", {

                    staticClass: "icon"

                },

                [i("img", {

                    attrs: {

                        src: e.userinfo.image

                    }

                })]), e._v(" "), i("div", {

                    staticClass: "user"

                },

                [i("p", {

                    staticClass: "top"

                },

                [e._v(e._s(e.userinfo.name))]), e._v(" "), i("p", {

                    staticClass: "bottom"

                },

                [e._v(e._s(e.userinfo.intro))])]), e._v(" "), i("div", {

                    staticClass: "see",

                    on: {

                        click: function(t) {

                            return e.is_see(e.userinfo.id)

                        }

                    }

                },

                [1 == e.isGz ? i("img", {

                    attrs: {

                        src: a("WWG4"),

                        alt: ""

                    }

                }) : i("img", {

                    attrs: {

                        src: a("mO1R"),

                        alt: ""

                    }

                })])]), e._v(" "), i("div", {

                    staticClass: "more_news"

                },

                [i("ul", [i("li", [i("p", {

                    staticClass: "top"

                },

                [e._v("策略数")]), e._v(" "), i("p", {

                    staticClass: "bottom"

                },

                [e._v(e._s(e.userinfo.tacticsnum))])]), e._v(" "), i("li", [i("p", {

                    staticClass: "top"

                },

                [e._v("胜算率")]), e._v(" "), i("p", {

                    staticClass: "bottom"

                },

                [e._v(e._s(e._f("toPercentage")(e.userinfo.winsum / e.userinfo.tacticsnum)))])]), e._v(" "), i("li", [i("p", {

                    staticClass: "top"

                },

                [e._v("收益率")]), e._v(" "), i("p", {

                    staticClass: "bottom"

                },

                [e._v(e._s(e.userinfo.yieldrate))])]), e._v(" "), i("li", [i("p", {

                    staticClass: "top"

                },

                [e._v("粉丝数")]), e._v(" "), i("p", {

                    staticClass: "bottom"

                },

                [e._v(e._s(e.userinfo.follower))])])])])]), e._v(" "), i("div", {

                    staticClass: "center_box"

                },

                [i("div", {

                    staticClass: "title_top"

                },

                [i("div", {

                    staticClass: "left"

                },

                [e._v("最新动态")]), e._v(" "), i("router-link", {

                    staticClass: "right",

                    attrs: {

                        to: {

                            path: "bullUserMore",

                            query: {

                                id: e.id

                            }

                        }

                    }

                },

                [e._v("查看更多>")])], 1), e._v(" "), i("ul", {

                    staticClass: "center"

                },

                e._l(e.shareinfo,

                function(t, a) {

                    return i("li", {

                        key: a,

                        staticClass: "item"

                    },

                    [i("div", {

                        staticClass: "top"

                    },

                    [i("p", {

                        staticClass: "left"

                    },

                    [e._v(e._s(t.name))]), e._v(" "), i("router-link", {

                        staticClass: "right",

                        attrs: {

                            tag: "p",

                            to: {

                                path: "bullCreate",

                                query: {

                                    id: t.id,

                                    code: t.code

                                }

                            }

                        }

                    },

                    [e._v("跟买")])], 1), e._v(" "), i("div", {

                        staticClass: "bottom"

                    },

                    [i("ul", [i("li", {

                        staticClass: "left down_green"

                    },

                    [e._v("卖出: "), i("span", [e._v(e._s(t.num) + " 股")])]), e._v(" "), i("li", {

                        staticClass: "right"

                    },

                    [e._v("价格："), i("span", [e._v(e._s(t.price) + " 元")])]), e._v(" "), i("li", {

                        staticClass: "right"

                    },

                    [e._v("操作时间："), i("span", [e._v(e._s(t.created_at))])])])])])

                }), 0)])])

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "a"

                },

                [t("span", {

                    staticClass: "iconfont"

                },

                [this._v("")])])

            }]

        };

        var Vt = a("VU/8")(Zt, Wt, !1,

        function(e) {

            a("olhG")

        },

        "data-v-7c8f4391", null).exports,

        Ht = {

            mounted: function() {

                this.getInit()

            },

            data: function() {

                return {

                    page: 0,

                    Cl: [],

                    id: this.$route.query.id,

                    shareinfo: []

                }

            },

            components: {

                ReturnTop: G

            },

            methods: {

                getInit: function() {

                    var e = this;

                    C("api/morebestmaninfo", {

                        to_user_id: this.id

                    },

                    {}).then(function(t) {

                        e.shareinfo = t.data.data.data

                    },

                    function(e) {

                        console.log(e)

                    })

                }

            }

        },

        Qt = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("最新动态")])]), e._v(" "), a("div", {

                    staticClass: "tab2"

                },

                [a("div", {

                    staticClass: "center_box"

                },

                [a("ul", {

                    staticClass: "center"

                },

                e._l(e.shareinfo,

                function(t, i) {

                    return a("li", {

                        key: i,

                        staticClass: "item"

                    },

                    [a("div", {

                        staticClass: "top"

                    },

                    [a("p", {

                        staticClass: "left"

                    },

                    [e._v(e._s(t.name))]), e._v(" "), a("router-link", {

                        staticClass: "right",

                        attrs: {

                            tag: "p",

                            to: {

                                path: "bullCreate",

                                query: {

                                    id: t.id

                                }

                            }

                        }

                    },

                    [e._v("跟买")])], 1), e._v(" "), a("div", {

                        staticClass: "bottom"

                    },

                    [a("ul", [a("li", {

                        staticClass: "left down_green"

                    },

                    [e._v("卖出: "), a("span", [e._v(e._s(t.num) + " 股")])]), e._v(" "), a("li", {

                        staticClass: "right"

                    },

                    [e._v("价格："), a("span", [e._v(e._s(t.price) + " 元")])]), e._v(" "), a("li", {

                        staticClass: "right",

                        staticStyle: {

                            width: "100%"

                        }

                    },

                    [e._v("操作时间："), a("span", [e._v(e._s(t.created_at))])])])])])

                }), 0)])])], 1)

            },

            staticRenderFns: []

        };

        var Jt = a("VU/8")(Ht, Qt, !1,

        function(e) {

            a("jhYv")

        },

        "data-v-5fb79daa", null).exports,

        qt = {

            data: function() {

                return {

                    bullMsg: []

                }

            },

            created: function() {

                this.getBull()

            },

            methods: {

                back: function() {

                    this.$router.go( - 1)

                },

                getBull: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/myfocus", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        e.bullMsg = t.data.data

                    },

                    function(e) {})

                }

            }

        },

        Xt = {

            render: function() {

                var e = this,

                t = e.$createElement,

                i = e._self._c || t;

                return i("div", [i("div", {

                    staticClass: "title_box",

                    staticStyle: {

                        height: "auto"

                    }

                },

                [i("div", {

                    staticClass: "return",

                    staticStyle: {

                        background: "#000",

                        position: "relative"

                    },

                    on: {

                        click: function(t) {

                            return e.back()

                        }

                    }

                },

                [e._m(0), e._v(" "), i("span", {

                    staticClass: "txt"

                },

                [e._v("返回")]), e._v(" "), i("span", {

                    staticClass: "cl"

                },

                [e._v("关注牛人")])])]), e._v(" "), e._l(e.bullMsg,

                function(t, n) {

                    return i("ul", {

                        key: n,

                        staticClass: "users"

                    },

                    [i("router-link", {

                        attrs: {

                            tag: "li",

                            to: {

                                path: "/bullUser",

                                query: {

                                    id: e.v

                                }

                            }

                        }

                    },

                    [i("div", {

                        staticClass: "user_info"

                    },

                    [i("div", {

                        staticClass: "icon"

                    },

                    [i("img", {

                        attrs: {

                            src: a("hNoF"),

                            alt: "用户头像"

                        }

                    })]), e._v(" "), i("div", {

                        staticClass: "user"

                    },

                    [i("p", {

                        staticClass: "top"

                    },

                    [e._v(e._s(t.name))]), e._v(" "), i("p", {

                        staticClass: "bottom"

                    },

                    [e._v("简介：" + e._s(t.intro))])])]), e._v(" "), i("div", {

                        staticClass: "more_news"

                    },

                    [i("ul", [i("li", [i("p", {

                        staticClass: "top"

                    },

                    [e._v("策略数")]), e._v(" "), i("p", {

                        staticClass: "bottom"

                    },

                    [e._v(e._s(t.tacticsnum))])]), e._v(" "), i("li", [i("p", {

                        staticClass: "top"

                    },

                    [e._v("胜算率")]), e._v(" "), i("p", {

                        staticClass: "bottom"

                    },

                    [e._v(e._s(t.winsum / t.tacticsnum))])]), e._v(" "), i("li", [i("p", {

                        staticClass: "top"

                    },

                    [e._v("收益率")]), e._v(" "), i("p", {

                        staticClass: "bottom"

                    },

                    [e._v(e._s(t.yieldrate))])]), e._v(" "), i("li", [i("p", {

                        staticClass: "top"

                    },

                    [e._v("粉丝数")]), e._v(" "), i("p", {

                        staticClass: "bottom"

                    },

                    [e._v(e._s(t.follower))])])])])])], 1)

                })], 2)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "a"

                },

                [t("span", {

                    staticClass: "iconfont"

                },

                [this._v("")])])

            }]

        };

        var Kt = a("VU/8")(qt, Xt, !1,

        function(e) {

            a("5MaO")

        },

        "data-v-b35b9a5e", null).exports,

        $t = {

            filters: {

                toPercentage: function(e) {

                    var t = Number(100 * e).toFixed(2);

                    return t += "%"

                }

            },

            mounted: function() {

                this.getInit(),

                this.getMultiple(),

                this.getShare(),

                this.getUserInfo()

            },

            watch: {

                selectaddxinyongjin: function(e) {

                    for (var t = !1,

                    a = 0; a < this.selectNum.length; a++) e == this.selectNum[a] && (this.selectNumIndex = a, t = !0);

                    0 == t && (this.selectNumIndex = -1),

                    this.getCDMoney()

                }

            },

            data: function() {

                return {

                    id: this.$route.query.id,

                    isdanger: "",

                    myMoney: 0,

                    agree: !0,

                    minLess: 0,

                    minAdd: 0,

                    deferred: "",

                    buildCost: "",

                    share: [],

                    code: this.$route.query.code,

                    ydf: !0,

                    zj: !1,

                    addReduceNum: 1,

                    lessReduceNum: "",

                    selectNumIndex: 0,

                    selectMultipleIndex: 0,

                    selectNum: [1e3, 5e3, 1e4, 2e4, 3e4, 5e4, 8e4, 1e5],

                    selectaddxinyongjin: 1e3,

                    selectMultiple: ["", "", ""],

                    is_add: 1,

                    is_sell: 1,

                    bullXyj: 0,

                    bullCl: 0

                }

            },

            components: {

                ReturnTop: G

            },

            computed: {

                num: function() {

                    var e = this.selectaddxinyongjin * this.selectMultiple[this.selectMultipleIndex];

                    return Math.round(e / this.share[4]) > 100 ? 100 * Math.floor(Math.round(e / this.share[4]) / 100) : 100

                }

            },

            methods: {

                getInit: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    _("/api/newfollowbuy", {

                        id: this.id

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        switch (e.bullXyj = t.data.data.xingyongjin, e.bullCl = t.data.data.multiple, e.bullCl) {

                        case 8:

                            e.selectMultipleIndex = 0;

                            break;

                        case 5:

                            e.selectMultipleIndex = 1;

                            break;

                        case 3:

                            e.selectMultipleIndex = 2

                        }

                        e.selectaddxinyongjin = e.bullXyj

                    },

                    function(e) {

                        console.log(e.response)

                    })

                },

                agreeClick: function() {

                    this.agree = !this.agree

                },

                sendCreate: function() {

                    var e = this;

                    if (!this.agree) return this.$message("请先阅读并同意支付协议后再创建订单"),

                    !1;

                    var t = localStorage.getItem("Authorization");

                    this.ydf ? this.is_sell = 2 : this.is_sell = 1,

                    this.zj ? this.is_add = 2 : this.is_add = 1,

                    _("/api/tactics", {

                        code: this.code,

                        price: this.share[4],

                        xingyongjin: this.selectaddxinyongjin,

                        multiple: parseInt(this.selectMultiple[this.selectMultipleIndex]),

                        max_price: this.addReduceNum,

                        min_price: this.lessReduceNum,

                        create_money: parseFloat(this.buildCost) + parseInt(this.selectNum[this.selectNumIndex]),

                        is_add: this.is_add,

                        is_sell: this.is_sell,

                        is_analog: 0

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        1 == t.data.status ? (e.$message("订单创建成功！"), e.$router.push("/cl")) : e.$message(t.data.msg)

                    },

                    function(e) {

                        console.log(e.response)

                    })

                },

                getUserInfo: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/user/", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        t ? e.myMoney = t.data.data.money: e.$message("登录失败，请重新登录")

                    },

                    function(e) {})

                },

                getMultiple: function() {

                    var e = this;

                    C("/api/multiple", {},

                    {}).then(function(t) {

                        t.data.status && (e.selectMultiple = t.data.data, e.getCDMoney())

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                getCDMoney: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    _("/api/tactics/procedure", {

                        code: this.code,

                        xingyongjin: this.selectaddxinyongjin,

                        multiple: parseInt(this.selectMultiple[this.selectMultipleIndex])

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t.data.data),

                        e.deferred = t.data.data.diyanfei,

                        e.buildCost = t.data.data.cangfei,

                        e.lessReduceNum = t.data.data.min_min_price

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                changeNum: function(e) {

                    this.selectNumIndex = e,

                    this.selectaddxinyongjin = this.selectNum[e]

                },

                changeMultiple: function(e) {

                    this.selectMultipleIndex = e,

                    this.getCDMoney(),

                    this.getShare()

                },

                getBuild: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/tactics/storage/", {

                        multiple: parseInt(this.selectMultiple[this.selectMultipleIndex]),

                        xingyongjin: this.selectaddxinyongjin

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        t.data.status ? e.buildCost = t.data.data.cangfei: (e.buildCost = "", e.$message("仓费获取出错"))

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                getShare: function() {

                    var e = this;

                    C("/api/stock/getprice/", {

                        code: this.code

                    }).then(function(t) {

                        e.isdanger = t.data.data.is_danger,

                        e.share = t.data.data[0]; (parseFloat(e.share[4]) - parseFloat((.8 * parseFloat(e.share[4])).toFixed(2) + .01) / parseInt(e.selectMultiple[e.selectMultipleIndex])).toFixed(2);

                        e.minLess = e.lessReduceNum,

                        e.addReduceNum = (1.1 * parseFloat(parseFloat(e.share[4]).toFixed(2))).toFixed(2),

                        e.addReduceNumeff = (parseFloat(parseFloat(e.share[4]).toFixed(2)) + .01).toFixed(2),

                        e.minAdd = e.addReduceNum

                    },

                    function(e) {

                        console.log(e)

                    })

                },

                reduce1: function() {

                    this.addReduceNum = (parseInt(100 * this.addReduceNum) - 1) / 100,

                    this.addReduceNum < this.addReduceNumeff && (this.$message("您的止盈设置不能低于" + this.addReduceNumeff), this.addReduceNum = this.addReduceNumeff)

                },

                add1: function() {

                    this.addReduceNum = (parseInt(100 * this.addReduceNum) + 1) / 100

                },

                reduce2: function() {

                    this.lessReduceNum = (parseInt(100 * this.lessReduceNum) - 1) / 100,

                    this.lessReduceNum < this.minLess && (this.$message("您的止损设置不能低于" + this.minLess), this.lessReduceNum = this.minLess)

                },

                add2: function() {

                    this.lessReduceNum = (parseInt(100 * this.lessReduceNum) + 1) / 100

                }

            }

        },

        ea = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("创建策略")])]), e._v(" "), a("div", {

                    staticClass: "share_box"

                },

                [a("ul", {

                    staticClass: "ul1"

                },

                [a("li", {

                    staticClass: "first"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v(e._s(e.share[1]))]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v(e._s(e.share[0]))])]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [a("p", {

                    staticClass: "top",

                    class: {

                        down_green: (e.share[4] - e.share[3]) / e.share[3] < 0

                    }

                },

                [e._v(e._s(parseFloat(e.share[4]).toFixed(2)))]), e._v(" "), a("div", {

                    staticClass: "bottom"

                },

                [a("span", {

                    staticClass: "left",

                    class: {

                        down_green: (e.share[4] - e.share[3]) / e.share[3] < 0

                    }

                },

                [e._v(e._s((e.share[4] - e.share[3]).toFixed(2)) + "  ")]), e._v(" "), a("span", {

                    staticClass: "right",

                    class: {

                        down_green: (e.share[4] - e.share[3]) / e.share[3] < 0

                    }

                },

                [e._v(e._s(e._f("toPercentage")((e.share[4] - e.share[3]) / e.share[3])))])])]), e._v(" "), a("router-link", {

                    staticClass: "third",

                    staticStyle: {

                        color: "red"

                    },

                    attrs: {

                        tag: "div",

                        to: {

                            path: "/Ks/",

                            query: {

                                code: e.code

                            }

                        }

                    }

                },

                [e._v("行情"), a("span", {

                    staticClass: "iconfont",

                    staticStyle: {

                        "font-size": ".12rem",

                        "margin-left": ".1rem"

                    }

                },

                [e._v("")])])], 1), e._v(" "), a("ul", {

                    staticClass: "ul2"

                },

                [a("li", [e._v("市价委托")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [e._v(e._s(parseFloat(e.share[4]).toFixed(2)))])])]), e._v(" "), a("div", {

                    staticClass: "select_box1"

                },

                [a("ul", {

                    staticClass: "title"

                },

                [a("li", [e._v("选择信用金（元）")]), e._v(" "), a("li", {

                    staticStyle: {

                        color: "#fff"

                    }

                },

                [e._v("1")]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.selectaddxinyongjin,

                        expression: "selectaddxinyongjin"

                    }],

                    attrs: {

                        type: "text"

                    },

                    domProps: {

                        value: e.selectaddxinyongjin

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.selectaddxinyongjin = t.target.value)

                        }

                    }

                })])]), e._v(" "), a("ul", {

                    staticClass: "select_num"

                },

                [a("li", {

                    staticClass: "left"

                },

                [e._v("\n        你也可选择\n      ")]), e._v(" "), a("li", {

                    staticClass: "right"

                },

                [a("ul", e._l(e.selectNum,

                function(t, i) {

                    return a("li", {

                        key: i,

                        class: {

                            nomargin: i % 4 == 3,

                            active: i == e.selectNumIndex

                        },

                        on: {

                            click: function(t) {

                                return e.changeNum(i)

                            }

                        }

                    },

                    [e._v(e._s(t))])

                }), 0)])])]), e._v(" "), a("div", {

                    staticClass: "select_box2"

                },

                [a("ul", {

                    staticClass: "ul1"

                },

                [a("li", {

                    staticClass: "first"

                },

                [e._v("\n        策略匹配\n      ")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [a("ul", e._l(e.selectMultiple,

                function(t, i) {

                    return a("li", {

                        key: i,

                        class: {

                            nomargin: i % 3 == 2,

                            active: i == e.selectMultipleIndex

                        },

                        on: {

                            click: function(t) {

                                return e.changeMultiple(i)

                            }

                        }

                    },

                    [e._v(e._s(t) + "倍")])

                }), 0)]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v(e._s(e.num) + "股")]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v("值" + e._s(Math.round(e.num * e.share[4])) + "元")])])])]), e._v(" "), a("div", {

                    staticClass: "select_box3"

                },

                [a("ul", {

                    staticClass: "ul1"

                },

                [a("li", {

                    staticClass: "first"

                },

                [e._v("\n        止盈\n      ")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [a("div", {

                    staticClass: "reduce",

                    on: {

                        click: function(t) {

                            return e.reduce1()

                        }

                    }

                },

                [e._v("-")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.addReduceNum,

                        expression: "addReduceNum"

                    }],

                    staticClass: "number",

                    attrs: {

                        type: "number"

                    },

                    domProps: {

                        value: e.addReduceNum

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.addReduceNum = t.target.value)

                        }

                    }

                }), e._v(" "), a("div", {

                    staticClass: "add",

                    on: {

                        click: function(t) {

                            return e.add1()

                        }

                    }

                },

                [e._v("+")])]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [e._v("\n        涨幅约"), a("span", {

                    staticClass: "red"

                },

                [e._v(e._s(e._f("toPercentage")((e.addReduceNum - parseFloat(e.share[4])) / parseFloat(e.share[4]))))])])]), e._v(" "), a("ul", {

                    staticClass: "ul1"

                },

                [a("li", {

                    staticClass: "first"

                },

                [e._v("\n        止损\n      ")]), e._v(" "), a("li", {

                    staticClass: "secend"

                },

                [a("div", {

                    staticClass: "reduce",

                    on: {

                        click: function(t) {

                            return e.reduce2()

                        }

                    }

                },

                [e._v("-")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.lessReduceNum,

                        expression: "lessReduceNum"

                    }],

                    staticClass: "number",

                    attrs: {

                        type: "number"

                    },

                    domProps: {

                        value: e.lessReduceNum

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.lessReduceNum = t.target.value)

                        }

                    }

                }), e._v(" "), a("div", {

                    staticClass: "add",

                    on: {

                        click: function(t) {

                            return e.add2()

                        }

                    }

                },

                [e._v("+")])]), e._v(" "), a("li", {

                    staticClass: "third"

                },

                [e._v("\n        跌幅约"), a("span", {

                    staticClass: "red down_green"

                },

                [e._v(e._s(e._f("toPercentage")((e.lessReduceNum - parseFloat(e.share[4])) / parseFloat(e.share[4]))))])])])]), e._v(" "), a("div", {

                    staticClass: "select_box4"

                },

                [a("div", {

                    staticClass: "first"

                },

                [e._v("建仓费")]), e._v(" "), a("div", {

                    staticClass: "secend"

                },

                [e._v(e._s(e.buildCost) + "元"), a("span", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: "" == e.buildCost,

                        expression: "buildCost == '' "

                    }]

                },

                [e._v("请选择信用金与策略匹配来计算仓费")])])]), e._v(" "), a("div", {

                    staticClass: "select_box5"

                },

                [a("div", {

                    staticClass: "select_box4"

                },

                [a("div", {

                    staticClass: "first"

                },

                [e._v("递延费")]), e._v(" "), a("div", {

                    staticClass: "secend"

                },

                [e._v(e._s(e.deferred) + "/天")])]), e._v(" "), a("div", {

                    staticClass: "select_box4"

                },

                [a("div", {

                    staticClass: "first"

                },

                [e._v("是否递延")]), e._v(" "), e._m(0), e._v(" "), a("div", {

                    staticClass: "ydf"

                },

                [a("el-switch", {

                    staticClass: "ydf",

                    attrs: {

                        "active-color": "#ff5a5a"

                    },

                    model: {

                        value: e.ydf,

                        callback: function(t) {

                            e.ydf = t

                        },

                        expression: "ydf"

                    }

                })], 1)]), e._v(" "), a("div", {

                    staticClass: "select_box4"

                },

                [a("div", {

                    staticClass: "first"

                },

                [e._v("追加信用金")]), e._v(" "), e._m(1), e._v(" "), a("div", {

                    staticClass: "ydf"

                },

                [a("el-switch", {

                    staticClass: "ydf",

                    attrs: {

                        "active-color": "#ff5a5a"

                    },

                    model: {

                        value: e.zj,

                        callback: function(t) {

                            e.zj = t

                        },

                        expression: "zj"

                    }

                })], 1)])]), e._v(" "), a("div", {

                    staticClass: "should_pay"

                },

                [a("div", {

                    staticClass: "left"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v("需支付"), a("span", [e._v(e._s(parseFloat(e.buildCost) + parseFloat(e.selectNum[e.selectNumIndex])))]), e._v("元")]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v("（账户余额" + e._s(e.myMoney) + "元）")])]), e._v(" "), 1 != e.isdanger ? a("div", {

                    staticClass: "right",

                    on: {

                        click: function(t) {

                            return e.sendCreate()

                        }

                    }

                },

                [e._v("马上创建")]) : a("div", {

                    staticClass: "right",

                    staticStyle: {

                        background: "#ccc",

                        color: "#fff"

                    }

                },

                [e._v("马上创建")])]), e._v(" "), a("div", {

                    staticClass: "agree",

                    on: {

                        click: function(t) {

                            return e.agreeClick()

                        }

                    }

                },

                [a("i", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: e.agree,

                        expression: "agree"

                    }],

                    staticClass: "iconfont"

                },

                [e._v("  ")]), e._v(" "), a("i", {

                    directives: [{

                        name: "show",

                        rawName: "v-show",

                        value: !e.agree,

                        expression: "!agree"

                    }],

                    staticClass: "iconfont"

                },

                [e._v("")]), e._v(" "), a("span", {

                    staticClass: "txt"

                },

                [e._v("我已阅读并同意"), a("router-link", {

                    attrs: {

                        tag: "span",

                        targe: "_blank",

                        to: "/payMessage"

                    }

                },

                [e._v("《支付服务协议》")])], 1)])], 1)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "secend special"

                },

                [this._v("若未开启自动递延"), t("br"), this._v("到期日 14:40 将卖出股票")])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "secend special"

                },

                [this._v("开启为自动"), t("br"), this._v("关闭为手动")])

            }]

        };

        var ta = a("VU/8")($t, ea, !1,

        function(e) {

            a("O8bn")

        },

        "data-v-46b4f25c", null).exports,

        aa = {

            data: function() {

                return {

                    message: {}

                }

            },

            beforeDestroy: function() {

                document.querySelector("body").setAttribute("style", "background-color:#fff")

            },

            mounted: function() {

                this.getAgree(),

                document.querySelector("body").setAttribute("style", "background-color:#f4f5f7")

            },

            components: {

                ReturnTop: G

            },

            methods: {

                getAgree: function() {

                    var e = this;

                    C("/api/contactWay/", {},

                    {}).then(function(t) {

                        console.log(t),

                        e.message = t.data.data

                    },

                    function(t) {

                        e.$message("请检查网络或登录状态")

                    })

                }

            }

        },

        ia = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("客服中心")])]), e._v(" "), a("div", {

                    staticClass: "item",

                    staticStyle: {

                        "border-bottom": "1px solid #dcdcdc"

                    }

                },

                [e._m(0), e._v(" "), a("div", {

                    staticClass: "right"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v(e._s(e.message.qq))]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v("服务时间09:00-18:00")])])]), e._v(" "), a("div", {

                    staticClass: "item",

                    staticStyle: {

                        "border-bottom": "1px solid #dcdcdc"

                    }

                },

                [e._m(1), e._v(" "), a("div", {

                    staticClass: "right"

                },

                [a("p", {

                    staticClass: "top"

                },

                [e._v(e._s(e.message.tel))]), e._v(" "), a("p", {

                    staticClass: "bottom"

                },

                [e._v("服务时间09:00-18:00")])])])], 1)

            },

            staticRenderFns: [function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "left"

                },

                [t("img", {

                    attrs: {

                        src: "static/yl_1.jpg",

                        alt: ""

                    }

                }), this._v(" "), t("span", [this._v("客服QQ")])])

            },

            function() {

                var e = this.$createElement,

                t = this._self._c || e;

                return t("div", {

                    staticClass: "left"

                },

                [t("img", {

                    attrs: {

                        src: "static/yl_2.jpg",

                        alt: ""

                    }

                }), this._v(" "), t("span", [this._v("客服热线")])])

            }]

        };

        var na = a("VU/8")(aa, ia, !1,

        function(e) {

            a("8xZC")

        },

        "data-v-4f760a95", null).exports,

        sa = {

            data: function() {

                return {

                    message: []

                }

            },

            mounted: function() {

                this.getAgree()

            },

            components: {

                ReturnTop: G

            },

            methods: {

                getAgree: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/park/", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        e.message = e.message.concat(t.data.msg)

                    },

                    function(t) {

                        e.$message("请检查网络或登录状态")

                    })

                }

            }

        },

        da = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("策略消息")])]), e._v(" "), e._l(e.message,

                function(t, i) {

                    return a("router-link", {

                        key: i,

                        staticClass: "box",

                        attrs: {

                            to: {

                                path: "/inNotice",

                                query: {

                                    id: t.id

                                }

                            },

                            tag: "div"

                        }

                    },

                    [a("div", {

                        staticClass: "top"

                    },

                    [a("p", {

                        staticClass: "left"

                    },

                    [e._v(e._s(t.title))]), e._v(" "), a("p", {

                        staticClass: "right"

                    },

                    [e._v(e._s(t.updated_at))])]), e._v(" "), a("p", {

                        staticClass: "bottom",

                        domProps: {

                            innerHTML: e._s(t.announcement)

                        }

                    })])

                })], 2)

            },

            staticRenderFns: []

        };

        var ra = a("VU/8")(sa, da, !1,

        function(e) {

            a("VRDD")

        },

        "data-v-633e5d52", null).exports,

        la = {

            data: function() {

                return {

                    message: [],

                    id: this.$route.query.id

                }

            },

            mounted: function() {

                this.getAgree()

            },

            components: {

                ReturnTop: G

            },

            methods: {

                getAgree: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    C("/api/parkdetail/", {

                        id: this.id

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t.data.msg),

                        e.message = e.message.concat(t.data.msg)

                    },

                    function(t) {

                        e.$message("请检查网络或登录状态")

                    })

                }

            }

        },

        oa = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("消息详情")])]), e._v(" "), e._l(e.message,

                function(t, i) {

                    return a("div", {

                        key: i,

                        staticClass: "box"

                    },

                    [a("p", {

                        staticClass: "title"

                    },

                    [e._v(e._s(t.title))]), e._v(" "), a("p", {

                        staticClass: "txt",

                        domProps: {

                            innerHTML: e._s(t.announcement)

                        }

                    })])

                })], 2)

            },

            staticRenderFns: []

        };

        var ua = a("VU/8")(la, oa, !1,

        function(e) {

            a("b5vz")

        },

        "data-v-ab5935d4", null).exports,

        va = {

            beforeCreate: function() {},

            beforeMount: function() {

                this.isSm()

            },

            mounted: function() {

                document.getElementsByTagName("body")[0].className = "bg4",

                document.body.scrollTop = document.documentElement.scrollTop = 0

            },

            beforeDestroy: function() {

                document.body.removeAttribute("class", "bg4"),

                document.body.removeAttribute("class", "bg5")

            },

            components: {

                ReturnTop: G

            },

            data: function() {

                return {

                    tp: !0,

                    isWRz: !1,

                    isRz: !1,

                    is_upload1: !1,

                    img1: "",

                    img2: "",

                    name: "",

                    id: "",

                    tp1: a("1QDn"),

                    tp2: a("e2aK"),

                    return1: "",

                    return2: "",

                    imgheader: {

                        Authorization: "Bearer " + localStorage.getItem("Authorization")

                    },

                    card: "",

                    addr: ""

                }

            },

            methods: {

                isSm: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    _("/api/query", {},

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        1 == t.data.status ? (e.isRz = !0, e.tp = !0) : 3 == t.data.status ? (e.isRz = !0, e.tp = !1) : (e.isWRz = !0, document.getElementsByTagName("body")[0].className = "bg5")

                    })

                },

                submit: function() {

                    var e = this,

                    t = localStorage.getItem("Authorization");

                    _("/api/real_user", {

                        realname: this.name,

                        id_num: this.id,

                        id_card_on: this.return1,

                        id_card_off: this.return2,

                        card_number: this.card,

                        card_address: this.addr

                    },

                    {

                        Authorization: "Bearer " + t

                    }).then(function(t) {

                        console.log(t),

                        t.data.status ? (e.$message.success(t.data.msg), e.$router.push("/me")) : e.$message.error(t.data.msg)

                    })

                },

                before: function() {

                    if (!this.is_upload1) return this.$message.error("请先上传第一张图片！！！"),

                    !1

                },

                onRead1: function(e, t) {

                    this.tp1 = URL.createObjectURL(t.raw),

                    200 == e.status ? (this.return1 = e.msg, this.is_upload1 = !0) : this.$message.error("上传失败")

                },

                onRead2: function(e, t) {

                    this.tp2 = URL.createObjectURL(t.raw),

                    200 == e.status ? this.return2 = e.msg: this.$message.error("上传失败"),

                    console.log(e)

                }

            }

        },

        ca = {

            render: function() {

                var e = this,

                t = e.$createElement,

                a = e._self._c || t;

                return a("div", [a("return-top", [a("p", {

                    attrs: {

                        slot: "title"

                    },

                    slot: "title"

                },

                [e._v("实名认证")])]), e._v(" "), e.isRz ? a("div", {

                    staticClass: "yrz"

                },

                [a("div", {

                    staticClass: "sbbox"

                },

                [e.tp ? a("img", {

                    staticStyle: {

                        width: "100%"

                    },

                    attrs: {

                        src: "static/smrz/yrz.png",

                        alt: ""

                    }

                }) : a("img", {

                    staticStyle: {

                        width: "100%"

                    },

                    attrs: {

                        src: "static/smrz/dsh.png",

                        alt: ""

                    }

                })])]) : e._e(), e._v(" "), e.isWRz ? a("div", [a("img", {

                    staticStyle: {

                        width: "100%"

                    },

                    attrs: {

                        src: "static/smrz/title.jpg",

                        alt: ""

                    }

                }), e._v(" "), a("div", {

                    staticClass: "form"

                },

                [a("div", {

                    staticClass: "label"

                },

                [a("span", [e._v("真实姓名")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.name,

                        expression: "name"

                    }],

                    attrs: {

                        placeholder: "请输入您的真实姓名",

                        type: "text"

                    },

                    domProps: {

                        value: e.name

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.name = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "label"

                },

                [a("span", [e._v("身份证号")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.id,

                        expression: "id"

                    }],

                    attrs: {

                        placeholder: "请输入您的身份证号",

                        type: "text"

                    },

                    domProps: {

                        value: e.id

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.id = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "label"

                },

                [a("span", [e._v("银行卡号")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.card,

                        expression: "card"

                    }],

                    attrs: {

                        placeholder: "请输入您的银行卡号",

                        type: "text"

                    },

                    domProps: {

                        value: e.card

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.card = t.target.value)

                        }

                    }

                })]), e._v(" "), a("div", {

                    staticClass: "label"

                },

                [a("span", {

                    staticStyle: {

                        flex: "2"

                    }

                },

                [e._v("开户行地址")]), e._v(" "), a("input", {

                    directives: [{

                        name: "model",

                        rawName: "v-model",

                        value: e.addr,

                        expression: "addr"

                    }],

                    attrs: {

                        placeholder: "开户行地址",

                        type: "text"

                    },

                    domProps: {

                        value: e.addr

                    },

                    on: {

                        input: function(t) {

                            t.target.composing || (e.addr = t.target.value)

                        }

                    }

                })])]), e._v(" "), a("p", {

                    staticStyle: {

                        display: "none"

                    }

                },

                {

                    staticClass: "upload"

                },

                [e._v("\n      上传证件材料\n    ")]), e._v(" "), a("div", {

                    staticStyle: {

                        display: "none"

                    }

                },

                {

                    staticClass: "sc"

                },

                [a("el-upload", {

                    staticClass: "avatar-uploader",

                    attrs: {

                        headers: e.imgheader,

                        action: "/api/uploads",

                        "show-file-list": !1,

                        "on-success": e.onRead1

                    }

                },

                [a("img", {

                    staticStyle: {

                        width: "100%"

                    },

                    attrs: {

                        src: e.tp1,

                        alt: ""

                    }

                })]), e._v(" "), a("el-upload", {

                    staticClass: "avatar-uploader",

                    staticStyle: {

                        "margin-top": ".4rem"

                    },

                    attrs: {

                        headers: e.imgheader,

                        action: "/api/uploads",

                        "show-file-list": !1,

                        "on-success": e.onRead2,

                        "before-upload": e.before

                    }

                },

                [a("img", {

                    staticStyle: {

                        width: "100%"

                    },

                    attrs: {

                        src: e.tp2,

                        alt: ""

                    }

                })])], 1), e._v(" "), a("div", {

                    staticClass: "submit",

                    staticStyle: {

                        "margin-top": "1rem"

                    },

                    on: {

                        click: e.submit

                    }

                },

                [e._v("提交")])]) : e._e()], 1)

            },

            staticRenderFns: []

        };

        var pa = a("VU/8")(va, ca, !1,

        function(e) {

            a("ELLR")

        },

        "data-v-004eede8", null).exports;

        i.

    default.use(d.a);

        var Ia, ha = new d.a({

            routes: [{

                path: "/kf",

                component: na

            },

            {

                path: "/rz",

                component: pa

            },

            {

                path: "/outNotice",

                component: ra

            },

            {

                path: "/inNotice",

                component: ua

            },

            {

                path: "/bullUser",

                component: Vt

            },

            {

                path: "/bullUserMore",

                component: Jt

            },

            {

                path: "/bullCreate",

                component: ta

            },

            {

                path: "/followBull",

                component: Kt

            },

            {

                path: "/simBuy",

                component: Ft

            },

            {

                path: "/simCreate",

                component: Ot

            },

            {

                path: "/payMessage",

                component: Tt

            },

            {

                path: "/ks",

                component: St,

                children: [{

                    path: "",

                    component: jt

                }]

            },

            {

                path: "/mrouter",

                component: re

            },

            {

                path: "/loginRegistrat",

                component: It,

                children: [{

                    path: "",

                    component: gt

                },

                {

                    path: "forget",

                    component: yt

                },

                {

                    path: "registrat",

                    component: wt

                }]

            },

            {

                path: "/",

                component: v,

                children: [{

                    path: "me",

                    name: "Me",

                    component: N

                },

                {

                    path: "cl",

                    name: "Cl",

                    component: L

                },

                {

                    path: "self",

                    name: "Self",

                    component: O

                },

                {

                    path: "zx",

                    name: "Zx",

                    component: te

                },

                {

                    path: "",

                    component: w

                }]

            },

            {

                path: "/createSelf",

                name: "CreateSelf",

                component: Q

            },

            {

                path: "/selfMore",

                name: "SelfMore",

                component: X

            },

            {

                path: "/dynamic",

                name: "Dynamic",

                component: ue

            },

            {

                path: "/morecl",

                name: "MoreCl",

                component: pe

            },

            {

                path: "/recharge",

                component: he,

                children: [{

                    path: "",

                    component: ge,

                    children: [{

                        path: "",

                        component: Ne

                    },

                    {

                        path: "xs",

                        component: je

                    },

                    {

                        path: "zfb",

                        component: Te

                    },

                    {

                        path: "dg",

                        component: Fe

                    }]

                },

                {

                    path: "secend",

                    name: "RechargeSecend",

                    component: ye

                },

                {

                    path: "third",

                    name: "RechargeThird",

                    component: Me

                }]

            },

            {

                path: "/charge",

                component: Pe,

                children: [{

                    path: "",

                    component: Je

                }]

            },

            {

                path: "/setting",

                component: et,

                children: [{

                    path: "",

                    component: it

                },

                {

                    path: "modify",

                    name: "Modify",

                    component: dt

                }]

            },

            {

                path: "/agreeMent",

                name: "AgreeMent",

                component: Ke

            },

            {

                path: "/myMoney",

                name: "Mymoney",

                component: ot

            },

            {

                path: "/adv",

                name: "Adv",

                component: ct

            },

            {

                path: "/zxMores",

                name: "ZxMores",

                component: ne

            }]

        }),

        ma = a("7QTg"),

        fa = a.n(ma),

        ga = (a("v2ns"), a("tvR6"), a("mUbh")),

        _a = {

            isLogin: !0,

            Authorization: ""

        },

        Ca = "SET_ISLOGIN",

        ya = "SET_AUTHORIZATION",

        Aa = (Ia = {},

        Ze()(Ia, Ca,

        function(e, t) {

            e.isLogin = t

        }), Ze()(Ia, ya,

        function(e, t) {

            e.Authorization = t

        }), Ia);

        i.

    default.use(ht.a);

        var ba = new ht.a.Store({

            actions: ga,

            getters: {

                isLogin: function(e) {

                    return e.isLogin

                },

                Authorization: function(e) {

                    return e.Authorization

                }

            },

            state: _a,

            mutations: Aa

        }),

        wa = a("XLwt"),

        xa = a.n(wa),

        Sa = {

            filtersName: function(e) {

                return e.substring(2)

            }

        };

        a("4ml/");

        for (var Ma in i.

    default.config.productionTip = !1,

        i.

    default.use(fa.a), i.

    default.use(W.a), i.

    default.prototype.$echarts = xa.a, Sa) i.

    default.filter(Ma, Sa[Ma]);

        i.

    default.use(z.b),

        new i.

    default({

            el:

            "#app",

            router: ha,

            store: ba,

            components: {

                App: s

            },

            template: "<App/>"

        })

    },

    "O/W2": function(e, t) {},

    O1Gf: function(e, t) {},

    O8bn: function(e, t) {},

    OPfe: function(e, t, a) {

        var i; !

        function() {

            var n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||

            function(e) {

                window.setTimeout(e, 1e3 / 60)

            },

            s = function() {

                for (var e = document.createElement("div").style, t = ["a", "webkitA", "MozA", "OA", "msA"], a = ["animationend", "webkitAnimationEnd", "animationend", "oAnimationEnd", "MSAnimationEnd"], i = 0, n = t.length; i < n; i++) if (t[i] + "nimation" in e) return a[i];

                return "animationend"

            } (),

            d = function() {

                var e = {},

                t = document.createElement("div").style,

                a = function() {

                    for (var e = ["t", "webkitT", "MozT", "msT", "OT"], a = 0, i = e.length; a < i; a++) if (e[a] + "ransform" in t) return e[a].substr(0, e[a].length - 1);

                    return ! 1

                } ();

                function i(e) {

                    return ! 1 !== a && ("" === a ? e: a + e.charAt(0).toUpperCase() + e.substr(1))

                }

                e.getTime = Date.now ||

                function() {

                    return (new Date).getTime()

                },

                e.extend = function(e, t) {

                    for (var a in t) e[a] = t[a]

                },

                e.addEvent = function(e, t, a, i) {

                    e.addEventListener(t, a, !!i)

                },

                e.removeEvent = function(e, t, a, i) {

                    e.removeEventListener(t, a, !!i)

                },

                e.prefixPointerEvent = function(e) {

                    return window.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e

                },

                e.momentum = function(e, t, a, i, n, s) {

                    var d, r, l = e - t,

                    o = Math.abs(l) / a;

                    return r = o / (s = void 0 === s ? 6e-4: s),

                    (d = e + o * o / (2 * s) * (l < 0 ? -1 : 1)) < i ? (d = n ? i - n / 2.5 * (o / 8) : i, r = (l = Math.abs(d - e)) / o) : d > 0 && (d = n ? n / 2.5 * (o / 8) : 0, r = (l = Math.abs(e) + d) / o),

                    {

                        destination: Math.round(d),

                        duration: r

                    }

                };

                var n = i("transform");

                return e.extend(e, {

                    hasTransform: !1 !== n,

                    hasPerspective: i("perspective") in t,

                    hasTouch: "ontouchstart" in window,

                    hasPointer: !(!window.PointerEvent && !window.MSPointerEvent),

                    hasTransition: i("transition") in t

                }),

                e.isBadAndroid = function() {

                    var e = window.navigator.appVersion;

                    if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {

                        var t = e.match(/Safari\/(\d+.\d)/);

                        return ! (t && "object" == typeof t && t.length >= 2) || parseFloat(t[1]) < 535.19

                    }

                    return ! 1

                } (),

                e.extend(e.style = {},

                {

                    transform: n,

                    transitionTimingFunction: i("transitionTimingFunction"),

                    transitionDuration: i("transitionDuration"),

                    transitionDelay: i("transitionDelay"),

                    transformOrigin: i("transformOrigin")

                }),

                e.hasClass = function(e, t) {

                    return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)

                },

                e.addClass = function(t, a) {

                    if (!e.hasClass(t, a)) {

                        var i = t.className.split(" ");

                        i.push(a),

                        t.className = i.join(" ")

                    }

                },

                e.removeClass = function(t, a) {

                    if (e.hasClass(t, a)) {

                        var i = new RegExp("(^|\\s)" + a + "(\\s|$)", "g");

                        t.className = t.className.replace(i, " ")

                    }

                },

                e.offset = function(e) {

                    for (var t = -e.offsetLeft,

                    a = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft,

                    a -= e.offsetTop;

                    return {

                        left: t,

                        top: a

                    }

                },

                e.preventDefaultException = function(e, t) {

                    for (var a in t) if (t[a].test(e[a])) return ! 0;

                    return ! 1

                },

                e.extend(e.eventType = {},

                {

                    touchstart: 1,

                    touchmove: 1,

                    touchend: 1,

                    mousedown: 2,

                    mousemove: 2,

                    mouseup: 2,

                    pointerdown: 3,

                    pointermove: 3,

                    pointerup: 3,

                    MSPointerDown: 3,

                    MSPointerMove: 3,

                    MSPointerUp: 3

                }),

                e.extend(e.ease = {},

                {

                    quadratic: {

                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",

                        fn: function(e) {

                            return e * (2 - e)

                        }

                    },

                    circular: {

                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",

                        fn: function(e) {

                            return Math.sqrt(1 - --e * e)

                        }

                    },

                    back: {

                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",

                        fn: function(e) {

                            return (e -= 1) * e * (5 * e + 4) + 1

                        }

                    },

                    bounce: {

                        style: "",

                        fn: function(e) {

                            return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e: e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375

                        }

                    },

                    elastic: {

                        style: "",

                        fn: function(e) {

                            return 0 === e ? 0 : 1 == e ? 1 : .4 * Math.pow(2, -10 * e) * Math.sin((e - .055) * (2 * Math.PI) / .22) + 1

                        }

                    }

                }),

                e.tap = function(e, t) {

                    var a = document.createEvent("Event");

                    a.initEvent(t, !0, !0),

                    a.pageX = e.pageX,

                    a.pageY = e.pageY,

                    e.target.dispatchEvent(a)

                },

                e.click = function(e) {

                    var t, a = e.target;

                    /(SELECT|INPUT|TEXTAREA)/i.test(a.tagName) || ((t = document.createEvent(window.MouseEvent ? "MouseEvents": "Event")).initEvent("click", !0, !0), t.view = e.view || window, t.detail = 1, t.screenX = a.screenX || 0, t.screenY = a.screenY || 0, t.clientX = a.clientX || 0, t.clientY = a.clientY || 0, t.ctrlKey = !!e.ctrlKey, t.altKey = !!e.altKey, t.shiftKey = !!e.shiftKey, t.metaKey = !!e.metaKey, t.button = 0, t.relatedTarget = null, t._constructed = !0, a.dispatchEvent(t))

                },

                e

            } ();

            function r(e, t) {

                for (var a in this.wrapper = "string" == typeof e ? document.querySelector(e) : e, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {

                    disablePointer: !0,

                    disableTouch: !d.hasTouch,

                    disableMouse: d.hasTouch,

                    startX: 0,

                    startY: 0,

                    scrollY: !0,

                    directionLockThreshold: 5,

                    momentum: !0,

                    bounce: !0,

                    bounceTime: 600,

                    bounceEasing: "",

                    preventDefault: !0,

                    preventDefaultException: {

                        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/

                    },

                    HWCompositing: !0,

                    useTransition: !0,

                    useTransform: !0,

                    bindToWrapper: void 0 === window.onmousedown

                },

                t) this.options[a] = t[a];

                this.translateZ = this.options.HWCompositing && d.hasPerspective ? " translateZ(0)": "",

                this.options.useTransition = d.hasTransition && this.options.useTransition,

                this.options.useTransform = d.hasTransform && this.options.useTransform,

                this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical": this.options.eventPassthrough,

                this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,

                this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY,

                this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX,

                this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,

                this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,

                this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? d.ease[this.options.bounceEasing] || d.ease.circular: this.options.bounceEasing,

                this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,

                !0 === this.options.tap && (this.options.tap = "tap"),

                this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"),

                "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),

                this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,

                3 == this.options.probeType && (this.options.useTransition = !1),

                this.x = 0,

                this.y = 0,

                this.directionX = 0,

                this.directionY = 0,

                this._events = {},

                this._init(),

                this.refresh(),

                this.scrollTo(this.options.startX, this.options.startY),

                this.enable()

            }

            r.prototype = {

                version: "1.0.0",

                _init: function() {

                    this._initEvents()

                },

                destroy: function() {

                    this._initEvents(!0),

                    clearTimeout(this.resizeTimeout),

                    this.resizeTimeout = null,

                    this._execEvent("destroy")

                },

                _transitionEnd: function(e) {

                    e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))

                },

                _start: function(e) {

                    if (1 != d.eventType[e.type] && 0 !== (e.which ? e.button: e.button < 2 ? 0 : 4 == e.button ? 1 : 2)) return;

                    if (this.enabled && (!this.initiated || d.eventType[e.type] === this.initiated)) { ! this.options.preventDefault || d.isBadAndroid || d.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();

                        var t, a = e.touches ? e.touches[0] : e;

                        this.initiated = d.eventType[e.type],

                        this.moved = !1,

                        this.distX = 0,

                        this.distY = 0,

                        this.directionX = 0,

                        this.directionY = 0,

                        this.directionLocked = 0,

                        this.startTime = d.getTime(),

                        this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, t = this.getComputedPosition(), this._translate(Math.round(t.x), Math.round(t.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")),

                        this.startX = this.x,

                        this.startY = this.y,

                        this.absStartX = this.x,

                        this.absStartY = this.y,

                        this.pointX = a.pageX,

                        this.pointY = a.pageY,

                        this._execEvent("beforeScrollStart")

                    }

                },

                _move: function(e) {

                    if (this.enabled && d.eventType[e.type] === this.initiated) {

                        this.options.preventDefault;

                        var t, a, i, n, s = e.touches ? e.touches[0] : e,

                        r = s.pageX - this.pointX,

                        l = s.pageY - this.pointY,

                        o = d.getTime();

                        if (this.pointX = s.pageX, this.pointY = s.pageY, this.distX += r, this.distY += l, i = Math.abs(this.distX), n = Math.abs(this.distY), !(o - this.endTime > 300 && i < 10 && n < 10)) {

                            if (this.directionLocked || this.options.freeScroll || (i > n + this.options.directionLockThreshold ? this.directionLocked = "h": n >= i + this.options.directionLockThreshold ? this.directionLocked = "v": this.directionLocked = "n"), "h" == this.directionLocked) {

                                if ("vertical" == this.options.eventPassthrough) e.preventDefault();

                                else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);

                                l = 0

                            } else if ("v" == this.directionLocked) {

                                if ("horizontal" == this.options.eventPassthrough) e.preventDefault();

                                else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);

                                r = 0

                            }

                            r = this.hasHorizontalScroll ? r: 0,

                            l = this.hasVerticalScroll ? l: 0,

                            t = this.x + r,

                            a = this.y + l,

                            (t > 0 || t < this.maxScrollX) && (t = this.options.bounce ? this.x + r / 3 : t > 0 ? 0 : this.maxScrollX),

                            (a > 0 || a < this.maxScrollY) && (a = this.options.bounce ? this.y + l / 3 : a > 0 ? 0 : this.maxScrollY),

                            this.directionX = r > 0 ? -1 : r < 0 ? 1 : 0,

                            this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0,

                            this.moved || this._execEvent("scrollStart"),

                            this.moved = !0,

                            this._translate(t, a),

                            o - this.startTime > 300 && (this.startTime = o, this.startX = this.x, this.startY = this.y, 1 == this.options.probeType && this._execEvent("scroll")),

                            this.options.probeType > 1 && this._execEvent("scroll")

                        }

                    }

                },

                _end: function(e) {

                    if (this.enabled && d.eventType[e.type] === this.initiated) {

                        this.options.preventDefault && !d.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();

                        e.changedTouches && e.changedTouches[0];

                        var t, a, i = d.getTime() - this.startTime,

                        n = Math.round(this.x),

                        s = Math.round(this.y),

                        r = Math.abs(n - this.startX),

                        l = Math.abs(s - this.startY),

                        o = 0,

                        u = "";

                        if (this.isInTransition = 0, this.initiated = 0, this.endTime = d.getTime(), !this.resetPosition(this.options.bounceTime)) {

                            if (this.scrollTo(n, s), !this.moved) return this.options.tap && d.tap(e, this.options.tap),

                            this.options.click && d.click(e),

                            void this._execEvent("scrollCancel");

                            if (this._events.flick && i < 200 && r < 100 && l < 100) this._execEvent("flick");

                            else {

                                if (this.options.momentum && i < 300 && (t = this.hasHorizontalScroll ? d.momentum(this.x, this.startX, i, this.maxScrollX, this.options.bounce ? this.wrapperWidth: 0, this.options.deceleration) : {

                                    destination: n,

                                    duration: 0

                                },

                                a = this.hasVerticalScroll ? d.momentum(this.y, this.startY, i, this.maxScrollY, this.options.bounce ? this.wrapperHeight: 0, this.options.deceleration) : {

                                    destination: s,

                                    duration: 0

                                },

                                n = t.destination, s = a.destination, o = Math.max(t.duration, a.duration), this.isInTransition = 1), this.options.snap) {

                                    var v = this._nearestSnap(n, s);

                                    this.currentPage = v,

                                    o = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(n - v.x), 1e3), Math.min(Math.abs(s - v.y), 1e3)), 300),

                                    n = v.x,

                                    s = v.y,

                                    this.directionX = 0,

                                    this.directionY = 0,

                                    u = this.options.bounceEasing

                                }

                                if (n != this.x || s != this.y) return (n > 0 || n < this.maxScrollX || s > 0 || s < this.maxScrollY) && (u = d.ease.quadratic),

                                void this.scrollTo(n, s, o, u);

                                this._execEvent("scrollEnd")

                            }

                        }

                    }

                },

                _resize: function() {

                    var e = this;

                    clearTimeout(this.resizeTimeout),

                    this.resizeTimeout = setTimeout(function() {

                        e.refresh()

                    },

                    this.options.resizePolling)

                },

                resetPosition: function(e) {

                    var t = this.x,

                    a = this.y;

                    return e = e || 0,

                    !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX),

                    !this.hasVerticalScroll || this.y > 0 ? a = 0 : this.y < this.maxScrollY && (a = this.maxScrollY),

                    (t != this.x || a != this.y) && (this.scrollTo(t, a, e, this.options.bounceEasing), !0)

                },

                disable: function() {

                    this.enabled = !1

                },

                enable: function() {

                    this.enabled = !0

                },

                refresh: function() {

                    this.wrapper.offsetHeight;

                    this.wrapperWidth = this.wrapper.clientWidth,

                    this.wrapperHeight = this.wrapper.clientHeight,

                    this.scrollerWidth = this.scroller.offsetWidth,

                    this.scrollerHeight = this.scroller.offsetHeight,

                    this.maxScrollX = this.wrapperWidth - this.scrollerWidth,

                    this.maxScrollY = this.wrapperHeight - this.scrollerHeight,

                    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,

                    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,

                    this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth),

                    this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),

                    this.endTime = 0,

                    this.directionX = 0,

                    this.directionY = 0,

                    this.wrapperOffset = d.offset(this.wrapper),

                    this._execEvent("refresh"),

                    this.resetPosition()

                },

                on: function(e, t) {

                    this._events[e] || (this._events[e] = []),

                    this._events[e].push(t)

                },

                off: function(e, t) {

                    if (this._events[e]) {

                        var a = this._events[e].indexOf(t);

                        a > -1 && this._events[e].splice(a, 1)

                    }

                },

                _execEvent: function(e) {

                    if (this._events[e]) {

                        var t = 0,

                        a = this._events[e].length;

                        if (a) for (; t < a; t++) this._events[e][t].apply(this, [].slice.call(arguments, 1))

                    }

                },

                scrollTo: function(e, t, a, i) {

                    i = i || d.ease.circular,

                    this.isInTransition = this.options.useTransition && a > 0;

                    var n = this.options.useTransition && i.style; ! a || n ? (n && (this._transitionTimingFunction(i.style), this._transitionTime(a)), this._translate(e, t)) : this._animate(e, t, a, i.fn)

                },

                scrollToElement: function(e, t, a, i, n) {

                    if (e = e.nodeType ? e: this.scroller.querySelector(e)) {

                        var s = d.offset(e);

                        s.left -= this.wrapperOffset.left,

                        s.top -= this.wrapperOffset.top,

                        !0 === a && (a = Math.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),

                        !0 === i && (i = Math.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),

                        s.left -= a || 0,

                        s.top -= i || 0,

                        s.left = s.left > 0 ? 0 : s.left < this.maxScrollX ? this.maxScrollX: s.left,

                        s.top = s.top > 0 ? 0 : s.top < this.maxScrollY ? this.maxScrollY: s.top,

                        t = void 0 === t || null === t || "auto" === t ? Math.max(Math.abs(this.x - s.left), Math.abs(this.y - s.top)) : t,

                        this.scrollTo(s.left, s.top, t, n)

                    }

                },

                _transitionTime: function(e) {

                    if (this.options.useTransition) {

                        e = e || 0;

                        var t = d.style.transitionDuration;

                        if (t && (this.scrollerStyle[t] = e + "ms", !e && d.isBadAndroid)) {

                            this.scrollerStyle[t] = "0.0001ms";

                            var a = this;

                            n(function() {

                                "0.0001ms" === a.scrollerStyle[t] && (a.scrollerStyle[t] = "0s")

                            })

                        }

                    }

                },

                _transitionTimingFunction: function(e) {

                    this.scrollerStyle[d.style.transitionTimingFunction] = e

                },

                _translate: function(e, t) {

                    this.options.useTransform ? this.scrollerStyle[d.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ: (e = Math.round(e), t = Math.round(t), this.scrollerStyle.left = e + "px", this.scrollerStyle.top = t + "px"),

                    this.x = e,

                    this.y = t

                },

                _initEvents: function(e) {

                    var t = e ? d.removeEvent: d.addEvent,

                    a = this.options.bindToWrapper ? this.wrapper: window;

                    t(window, "orientationchange", this),

                    t(window, "resize", this),

                    this.options.click && t(this.wrapper, "click", this, !0),

                    this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(a, "mousemove", this), t(a, "mousecancel", this), t(a, "mouseup", this)),

                    d.hasPointer && !this.options.disablePointer && (t(this.wrapper, d.prefixPointerEvent("pointerdown"), this), t(a, d.prefixPointerEvent("pointermove"), this), t(a, d.prefixPointerEvent("pointercancel"), this), t(a, d.prefixPointerEvent("pointerup"), this)),

                    d.hasTouch && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(a, "touchmove", this), t(a, "touchcancel", this), t(a, "touchend", this)),

                    t(this.scroller, "transitionend", this),

                    t(this.scroller, "webkitTransitionEnd", this),

                    t(this.scroller, "oTransitionEnd", this),

                    t(this.scroller, "MSTransitionEnd", this)

                },

                getComputedPosition: function() {

                    var e, t, a = window.getComputedStyle(this.scroller, null);

                    return this.options.useTransform ? (e = +((a = a[d.style.transform].split(")")[0].split(", "))[12] || a[4]), t = +(a[13] || a[5])) : (e = +a.left.replace(/[^-\d.]/g, ""), t = +a.top.replace(/[^-\d.]/g, "")),

                    {

                        x: e,

                        y: t

                    }

                },

                _animate: function(e, t, a, i) {

                    var s = this,

                    r = this.x,

                    l = this.y,

                    o = d.getTime(),

                    u = o + a;

                    this.isAnimating = !0,

                    function v() {

                        var c, p, I, h = d.getTime();

                        if (h >= u) return s.isAnimating = !1,

                        s._translate(e, t),

                        void(s.resetPosition(s.options.bounceTime) || s._execEvent("scrollEnd"));

                        I = i(h = (h - o) / a),

                        c = (e - r) * I + r,

                        p = (t - l) * I + l,

                        s._translate(c, p),

                        s.isAnimating && n(v),

                        3 == s.options.probeType && s._execEvent("scroll")

                    } ()

                },

                handleEvent: function(e) {

                    switch (e.type) {

                    case "touchstart":

                    case "pointerdown":

                    case "MSPointerDown":

                    case "mousedown":

                        this._start(e);

                        break;

                    case "touchmove":

                    case "pointermove":

                    case "MSPointerMove":

                    case "mousemove":

                        this._move(e);

                        break;

                    case "touchend":

                    case "pointerup":

                    case "MSPointerUp":

                    case "mouseup":

                    case "touchcancel":

                    case "pointercancel":

                    case "MSPointerCancel":

                    case "mousecancel":

                        this._end(e);

                        break;

                    case "orientationchange":

                    case "resize":

                        this._resize();

                        break;

                    case "transitionend":

                    case "webkitTransitionEnd":

                    case "oTransitionEnd":

                    case "MSTransitionEnd":

                        this._transitionEnd(e);

                        break;

                    case "click":

                        this.enabled && !e._constructed && (e.preventDefault(), e.stopPropagation())

                    }

                }

            },

            r.utils = d;

            var l = {

                isArray: function(e) {

                    return "[object Array]" === Object.prototype.toString.call(e)

                },

                isFunction: function(e) {

                    return "function" == typeof e

                },

                attrToData: function(e, t) {

                    var a = {};

                    for (var i in e.dataset) a[i] = e.dataset[i];

                    return a.dom = e,

                    a.atindex = t,

                    a

                },

                attrToHtml: function(e) {

                    var t = "";

                    for (var a in e) t += "data-" + a + '="' + e[a] + '"';

                    return t

                }

            };

            function o(e, t) {

                if (! (this instanceof o)) return new o(e, t);

                this.html = e,

                this.opts = t;

                var a = document.createElement("div");

                a.className = "olay";

                var i = document.createElement("div");

                i.className = "layer",

                this.el = a,

                this.layer_el = i,

                this.init()

            }

            function u(e, t, a) {

                if (!l.isArray(t) || 0 === t.length) throw new TypeError("the data must be a non-empty array!");

                if ( - 1 == [1, 2, 3, 4, 5, 6].indexOf(e)) throw new RangeError("the level parameter must be one of 1,2,3,4,5,6!");

                this.data = t,

                this.level = e || 1,

                this.options = a,

                this.typeBox = "one-level-box";

                this.level <= 6 && this.level >= 1 && (this.typeBox = ["one", "two", "three", "four", "five", "six"][parseInt(this.level) - 1] + "-level-box"),

                this.title = a.title || "",

                this.options.itemHeight = a.itemHeight || 35,

                this.options.itemShowCount = -1 !== [3, 5, 7, 9].indexOf(a.itemShowCount) ? a.itemShowCount: 7,

                this.options.coverArea1Top = Math.floor(this.options.itemShowCount / 2),

                this.options.coverArea2Top = Math.ceil(this.options.itemShowCount / 2),

                this.options.headerHeight = a.headerHeight || 44,

                this.options.relation = l.isArray(this.options.relation) ? this.options.relation: [],

                this.options.oneTwoRelation = this.options.relation[0],

                this.options.twoThreeRelation = this.options.relation[1],

                this.options.threeFourRelation = this.options.relation[2],

                this.options.fourFiveRelation = this.options.relation[3],

                this.options.fiveSixRelation = this.options.relation[4],

                "px" !== this.options.cssUnit && "rem" !== this.options.cssUnit && (this.options.cssUnit = "px");

                this.selectOneObj = {

                    id: this.options.oneLevelId

                },

                this.selectTwoObj = {

                    id: this.options.twoLevelId

                },

                this.selectThreeObj = {

                    id: this.options.threeLevelId

                },

                this.selectFourObj = {

                    id: this.options.fourLevelId

                },

                this.selectFiveObj = {

                    id: this.options.fiveLevelId

                },

                this.selectSixObj = {

                    id: this.options.sixLevelId

                },

                this.setBase(),

                this.init()

            }

            o.prototype = {

                init: function() {

                    this.layer_el.innerHTML = this.html,

                    this.opts.container && document.querySelector(this.opts.container) ? document.querySelector(this.opts.container).appendChild(this.el) : document.body.appendChild(this.el),

                    this.el.appendChild(this.layer_el),

                    this.el.style.height = Math.max(document.documentElement.getBoundingClientRect().height, window.innerHeight),

                    this.opts.className && (this.el.className += " " + this.opts.className),

                    this.bindEvent()

                },

                bindEvent: function() {

                    var e = this.el.querySelectorAll(".sure"),

                    t = this.el.querySelectorAll(".close"),

                    a = this;

                    this.el.addEventListener("click",

                    function(e) {

                        a.close(),

                        a.opts.maskCallback && a.opts.maskCallback()

                    }),

                    this.layer_el.addEventListener("click",

                    function(e) {

                        e.stopPropagation()

                    }),

                    Array.prototype.slice.call(e).forEach(function(e, t) {

                        e.addEventListener("click",

                        function() {

                            a.close()

                        })

                    }),

                    Array.prototype.slice.call(t).forEach(function(e, t) {

                        e.addEventListener("click",

                        function() {

                            a.close(),

                            a.opts.fallback && a.opts.fallback()

                        })

                    })

                },

                close: function() {

                    var e = this;

                    e.el && (e.opts.showAnimate ? (e.el.className += " fadeOutDown", e.el.addEventListener(s,

                    function() {

                        e.removeDom()

                    })) : e.removeDom())

                },

                removeDom: function() {

                    this.el.parentNode.removeChild(this.el),

                    this.el = null,

                    document.documentElement.classList.contains("ios-select-body-class") && document.documentElement.classList.remove("ios-select-body-class")

                }

            },

            u.prototype = {

                init: function() {

                    this.initLayer(),

                    this.setLevelData(1, this.options.oneLevelId, this.options.twoLevelId, this.options.threeLevelId, this.options.fourLevelId, this.options.fiveLevelId, this.options.sixLevelId)

                },

                initLayer: function() {

                    var e = this,

                    t = this.options.sureText || "确定",

                    a = this.options.closeText || "取消",

                    i = this.options.headerHeight + this.options.cssUnit,

                    n = ['<header style="height: ' + i + "; line-height: " + i + '" class="iosselect-header">', '<a style="height: ' + i + "; line-height: " + i + '" href="javascript:void(0)" class="close">' + a + "</a>", '<a style="height: ' + i + "; line-height: " + i + '" href="javascript:void(0)" class="sure">' + t + "</a>", '<h2 id="iosSelectTitle"></h2>', "</header>", '<section class="iosselect-box">', '<div class="one-level-contain" id="oneLevelContain">', '<ul class="select-one-level">', "</ul>", "</div>", '<div class="two-level-contain" id="twoLevelContain">', '<ul class="select-two-level">', "</ul>", "</div>", '<div class="three-level-contain" id="threeLevelContain">', '<ul class="select-three-level">', "</ul>", "</div>", '<div class="four-level-contain" id="fourLevelContain">', '<ul class="select-four-level">', "</ul>", "</div>", '<div class="five-level-contain" id="fiveLevelContain">', '<ul class="select-five-level">', "</ul>", "</div>", '<div class="six-level-contain" id="sixLevelContain">', '<ul class="select-six-level">', "</ul>", "</div>", "</section>", '<hr class="cover-area1"/>', '<hr class="cover-area2"/>', '<div class="ios-select-loading-box" id="iosSelectLoadingBox">', '<div class="ios-select-loading"></div>', "</div>"].join("\r\n");

                    this.iosSelectLayer = new o(n, {

                        className: "ios-select-widget-box " + this.typeBox + (this.options.addClassName ? " " + this.options.addClassName: "") + (this.options.showAnimate ? " fadeInUp": ""),

                        container: this.options.container || "",

                        showAnimate: this.options.showAnimate,

                        fallback: this.options.fallback,

                        maskCallback: this.options.maskCallback

                    }),

                    this.iosSelectTitleDom = this.iosSelectLayer.el.querySelector("#iosSelectTitle"),

                    this.iosSelectLoadingBoxDom = this.iosSelectLayer.el.querySelector("#iosSelectLoadingBox"),

                    this.iosSelectTitleDom.innerHTML = this.title,

                    this.options.headerHeight && this.options.itemHeight && (this.coverArea1Dom = this.iosSelectLayer.el.querySelector(".cover-area1"), this.coverArea1Dom.style.top = this.options.headerHeight + this.options.itemHeight * this.options.coverArea1Top + this.options.cssUnit, this.coverArea2Dom = this.iosSelectLayer.el.querySelector(".cover-area2"), this.coverArea2Dom.style.top = this.options.headerHeight + this.options.itemHeight * this.options.coverArea2Top + this.options.cssUnit),

                    this.oneLevelContainDom = this.iosSelectLayer.el.querySelector("#oneLevelContain"),

                    this.twoLevelContainDom = this.iosSelectLayer.el.querySelector("#twoLevelContain"),

                    this.threeLevelContainDom = this.iosSelectLayer.el.querySelector("#threeLevelContain"),

                    this.fourLevelContainDom = this.iosSelectLayer.el.querySelector("#fourLevelContain"),

                    this.fiveLevelContainDom = this.iosSelectLayer.el.querySelector("#fiveLevelContain"),

                    this.sixLevelContainDom = this.iosSelectLayer.el.querySelector("#sixLevelContain"),

                    this.oneLevelUlContainDom = this.iosSelectLayer.el.querySelector(".select-one-level"),

                    this.twoLevelUlContainDom = this.iosSelectLayer.el.querySelector(".select-two-level"),

                    this.threeLevelUlContainDom = this.iosSelectLayer.el.querySelector(".select-three-level"),

                    this.fourLevelUlContainDom = this.iosSelectLayer.el.querySelector(".select-four-level"),

                    this.fiveLevelUlContainDom = this.iosSelectLayer.el.querySelector(".select-five-level"),

                    this.sixLevelUlContainDom = this.iosSelectLayer.el.querySelector(".select-six-level"),

                    this.iosSelectLayer.el.querySelector(".layer").style.height = this.options.itemHeight * this.options.itemShowCount + this.options.headerHeight + this.options.cssUnit,

                    this.oneLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit,

                    document.documentElement.classList.add("ios-select-body-class"),

                    this.scrollOne = new r("#oneLevelContain", {

                        probeType: 3,

                        bounce: !1

                    }),

                    this.setScorllEvent(this.scrollOne, 1),

                    this.level >= 2 && (this.twoLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit, this.scrollTwo = new r("#twoLevelContain", {

                        probeType: 3,

                        bounce: !1

                    }), this.setScorllEvent(this.scrollTwo, 2)),

                    this.level >= 3 && (this.threeLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit, this.scrollThree = new r("#threeLevelContain", {

                        probeType: 3,

                        bounce: !1

                    }), this.setScorllEvent(this.scrollThree, 3)),

                    this.level >= 4 && (this.fourLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit, this.scrollFour = new r("#fourLevelContain", {

                        probeType: 3,

                        bounce: !1

                    }), this.setScorllEvent(this.scrollFour, 4)),

                    this.level >= 5 && (this.fiveLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit, this.scrollFive = new r("#fiveLevelContain", {

                        probeType: 3,

                        bounce: !1

                    }), this.setScorllEvent(this.scrollFive, 5)),

                    this.level >= 6 && (this.sixLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit, this.scrollSix = new r("#sixLevelContain", {

                        probeType: 3,

                        bounce: !1

                    }), this.setScorllEvent(this.scrollSix, 6)),

                    this.selectBtnDom = this.iosSelectLayer.el.querySelector(".sure"),

                    this.selectBtnDom.addEventListener("click",

                    function(t) {

                        e.options.callback && e.options.callback(e.selectOneObj, e.selectTwoObj, e.selectThreeObj, e.selectFourObj, e.selectFiveObj, e.selectSixObj)

                    })

                },

                mapKeyByIndex: function(e) {

                    var t = {

                        index: 1,

                        levelContain: this.oneLevelContainDom,

                        relation: this.options.oneTwoRelation

                    };

                    return 2 === e ? t = {

                        index: 2,

                        levelContain: this.twoLevelContainDom,

                        relation: this.options.twoThreeRelation

                    }: 3 === e ? t = {

                        index: 3,

                        levelContain: this.threeLevelContainDom,

                        relation: this.options.threeFourRelation

                    }: 4 === e ? t = {

                        index: 4,

                        levelContain: this.fourLevelContainDom,

                        relation: this.options.fourFiveRelation



                    }: 5 === e ? t = {

                        index: 5,

                        levelContain: this.fiveLevelContainDom,

                        relation: this.options.fiveSixRelation

                    }: 6 === e && (t = {

                        index: 6,

                        levelContain: this.sixLevelContainDom,

                        relation: 0

                    }),

                    t

                },

                setScorllEvent: function(e, t) {

                    var a = this,

                    i = a.mapKeyByIndex(t);

                    e.on("scrollStart",

                    function() {

                        a.toggleClassList(i.levelContain)

                    }),

                    e.on("scroll",

                    function() {

                        if (!isNaN(this.y)) {

                            var e, t = Math.abs(this.y / a.baseSize) / a.options.itemHeight;

                            e = Math.round(t) + 1,

                            a.toggleClassList(i.levelContain),

                            a.changeClassName(i.levelContain, e)

                        }

                    }),

                    e.on("scrollEnd",

                    function() {

                        var n = Math.abs(this.y / a.baseSize) / a.options.itemHeight,

                        s = 1,

                        d = 0;

                        Math.ceil(n) === Math.round(n) ? (d = Math.ceil(n) * a.options.itemHeight * a.baseSize, s = Math.ceil(n) + 1) : (d = Math.floor(n) * a.options.itemHeight * a.baseSize, s = Math.floor(n) + 1),

                        e.scrollTo(0, -d, 0),

                        a.toggleClassList(i.levelContain);

                        var r = a.changeClassName(i.levelContain, s),

                        o = l.attrToData(r, s);

                        a.setSelectObj(t, o),

                        a.level > t && (1 === i.relation && l.isArray(a.data[t]) || l.isFunction(a.data[t])) && a.setLevelData(t + 1, a.selectOneObj.id, a.selectTwoObj.id, a.selectThreeObj.id, a.selectFourObj.id, a.selectFiveObj.id, a.selectSixObj.id)

                    }),

                    e.on("scrollCancel",

                    function() {

                        var n = Math.abs(this.y / a.baseSize) / a.options.itemHeight,

                        s = 1,

                        d = 0;

                        Math.ceil(n) === Math.round(n) ? (d = Math.ceil(n) * a.options.itemHeight * a.baseSize, s = Math.ceil(n) + 1) : (d = Math.floor(n) * a.options.itemHeight * a.baseSize, s = Math.floor(n) + 1),

                        e.scrollTo(0, -d, 0),

                        a.toggleClassList(i.levelContain);

                        var r = a.changeClassName(i.levelContain, s),

                        o = l.attrToData(r, s);

                        a.setSelectObj(t, o),

                        a.level > t && (1 === i.relation && l.isArray(a.data[t]) || l.isFunction(a.data[t])) && a.setLevelData(t + 1, a.selectOneObj.id, a.selectTwoObj.id, a.selectThreeObj.id, a.selectFourObj.id, a.selectFiveObj.id, a.selectSixObj.id)

                    })

                },

                loadingShow: function() {

                    this.options.showLoading && (this.iosSelectLoadingBoxDom.style.display = "block")

                },

                loadingHide: function() {

                    this.iosSelectLoadingBoxDom.style.display = "none"

                },

                mapRenderByIndex: function(e) {

                    var t = {

                        index: 1,

                        relation: 0,

                        levelUlContainDom: this.oneLevelUlContainDom,

                        scrollInstance: this.scrollOne,

                        levelContainDom: this.oneLevelContainDom

                    };

                    return 2 === e ? t = {

                        index: 2,

                        relation: this.options.oneTwoRelation,

                        levelUlContainDom: this.twoLevelUlContainDom,

                        scrollInstance: this.scrollTwo,

                        levelContainDom: this.twoLevelContainDom

                    }: 3 === e ? t = {

                        index: 3,

                        relation: this.options.twoThreeRelation,

                        levelUlContainDom: this.threeLevelUlContainDom,

                        scrollInstance: this.scrollThree,

                        levelContainDom: this.threeLevelContainDom

                    }: 4 === e ? t = {

                        index: 4,

                        relation: this.options.threeFourRelation,

                        levelUlContainDom: this.fourLevelUlContainDom,

                        scrollInstance: this.scrollFour,

                        levelContainDom: this.fourLevelContainDom

                    }: 5 === e ? t = {

                        index: 5,

                        relation: this.options.fourFiveRelation,

                        levelUlContainDom: this.fiveLevelUlContainDom,

                        scrollInstance: this.scrollFive,

                        levelContainDom: this.fiveLevelContainDom

                    }: 6 === e && (t = {

                        index: 6,

                        relation: this.options.fiveSixRelation,

                        levelUlContainDom: this.sixLevelUlContainDom,

                        scrollInstance: this.scrollSix,

                        levelContainDom: this.sixLevelContainDom

                    }),

                    t

                },

                getLevelData: function(e, t, a, i, n, s) {

                    var d = [],

                    r = this.mapRenderByIndex(e);

                    if (1 === e) d = this.data[0];

                    else if (1 === r.relation) {

                        var l = arguments[e - 1];

                        this.data[e - 1].forEach(function(e, t, a) {

                            e.parentId == l && d.push(e)

                        })

                    } else d = this.data[e - 1];

                    return d

                },

                setLevelData: function(e, t, a, i, n, s, d) {

                    if (l.isArray(this.data[e - 1])) {

                        var r = this.getLevelData(e, t, a, i, n);

                        this.renderLevel(e, t, a, i, n, s, d, r)

                    } else {

                        if (!l.isFunction(this.data[e - 1])) throw new Error("data format error");

                        this.loadingShow(),

                        this.data[e - 1].apply(this, [t, a, i, n, s].slice(0, e - 1).concat(function(r) {

                            this.loadingHide(),

                            this.renderLevel(e, t, a, i, n, s, d, r)

                        }.bind(this)))

                    }

                },

                renderLevel: function(e, t, a, i, n, s, d, r) {

                    var o = 0,

                    u = arguments[e];

                    r.some(function(e, t, a) {

                        return e.id == u

                    }) || (u = r[0].id);

                    var v = "",

                    c = this.options.itemHeight + this.options.cssUnit;

                    v += this.getWhiteItem(),

                    r.forEach(function(e, t, a) {

                        e.id == u ? (v += '<li style="height: ' + c + "; line-height: " + c + ';"' + l.attrToHtml(e) + ' class="at">' + e.value + "</li>", o = t + 1) : v += '<li style="height: ' + c + "; line-height: " + c + ';"' + l.attrToHtml(e) + ">" + e.value + "</li>"

                    }),

                    v += this.getWhiteItem();

                    var p = this.mapRenderByIndex(e);

                    p.levelUlContainDom.innerHTML = v,

                    p.scrollInstance.refresh(),

                    p.scrollInstance.scrollToElement(":nth-child(" + o + ")", 0);

                    var I = this.changeClassName(p.levelContainDom, o),

                    h = l.attrToData(I, o);

                    this.setSelectObj(e, h),

                    this.level > e && this.setLevelData(e + 1, this.selectOneObj.id, this.selectTwoObj.id, this.selectThreeObj.id, this.selectFourObj.id, this.selectFiveObj.id, this.selectSixObj.id)

                },

                setSelectObj: function(e, t) {

                    1 === e ? this.selectOneObj = t: 2 === e ? this.selectTwoObj = t: 3 === e ? this.selectThreeObj = t: 4 === e ? this.selectFourObj = t: 5 === e ? this.selectFiveObj = t: 6 === e && (this.selectSixObj = t)

                },

                getWhiteItem: function() {

                    var e = "",

                    t = this.options.itemHeight + this.options.cssUnit,

                    a = '<li style="height: ' + t + "; line-height: " + t + '"></li>';

                    return e += a,

                    this.options.itemShowCount > 3 && (e += a),

                    this.options.itemShowCount > 5 && (e += a),

                    this.options.itemShowCount > 7 && (e += a),

                    e

                },

                changeClassName: function(e, t) {

                    var a;

                    return 3 === this.options.itemShowCount ? (a = e.querySelector("li:nth-child(" + (t + 1) + ")")).classList.add("at") : 5 === this.options.itemShowCount ? ((a = e.querySelector("li:nth-child(" + (t + 2) + ")")).classList.add("at"), e.querySelector("li:nth-child(" + (t + 1) + ")").classList.add("side1"), e.querySelector("li:nth-child(" + (t + 3) + ")").classList.add("side1")) : 7 === this.options.itemShowCount ? ((a = e.querySelector("li:nth-child(" + (t + 3) + ")")).classList.add("at"), e.querySelector("li:nth-child(" + (t + 2) + ")").classList.add("side1"), e.querySelector("li:nth-child(" + (t + 1) + ")").classList.add("side2"), e.querySelector("li:nth-child(" + (t + 4) + ")").classList.add("side1"), e.querySelector("li:nth-child(" + (t + 5) + ")").classList.add("side2")) : 9 === this.options.itemShowCount && ((a = e.querySelector("li:nth-child(" + (t + 4) + ")")).classList.add("at"), e.querySelector("li:nth-child(" + (t + 3) + ")").classList.add("side1"), e.querySelector("li:nth-child(" + (t + 2) + ")").classList.add("side2"), e.querySelector("li:nth-child(" + (t + 5) + ")").classList.add("side1"), e.querySelector("li:nth-child(" + (t + 6) + ")").classList.add("side2")),

                    a

                },

                setBase: function() {

                    if ("rem" === this.options.cssUnit) {

                        var e = document.documentElement,

                        t = window.getComputedStyle(e, null).fontSize;

                        try {

                            this.baseSize = /\d+(?:\.\d+)?/.exec(t)[0]

                        } catch(e) {

                            this.baseSize = 1

                        }

                    } else this.baseSize = 1

                },

                toggleClassList: function(e) {

                    Array.prototype.slice.call(e.querySelectorAll("li")).forEach(function(e) {

                        e.classList.contains("at") ? e.classList.remove("at") : e.classList.contains("side1") ? e.classList.remove("side1") : e.classList.contains("side2") && e.classList.remove("side2")

                    })

                }

            },

            void 0 !== e && e.exports ? e.exports = u: void 0 === (i = function() {

                return u

            }.call(t, a, t, e)) || (e.exports = i)

        } ()

    },

    OYuN: function(e, t, a) {

        e.exports = a.p + "static/img/nav_02.9f67008.png"

    },

    OxRS: function(e, t) {

        e.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QOIaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDQ5ZTBlMWEtODRiMC00MTRlLWFjNjItNGEzZGU4NjY2ZWNkIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRFODRERkI3Q0QxQjExRThCNzM5RUEzM0I5NTg2RUE2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRFODRERkI2Q0QxQjExRThCNzM5RUEzM0I5NTg2RUE2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YzRmYzgxMS1hYmM4LWI4NGQtYjAwMC0yZDkyMjg2MDZkZDMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3YmNhMGNiYi04NWNjLTg5NDMtYTY4OC1mYzc5MTY2NWU2ZDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAmQWRvYmUAZMAAAAABAwAVBAMGCg0AAAblAAALagAADbsAABAs/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wgARCAAcACwDAREAAhEBAxEB/8QA4gAAAwADAAAAAAAAAAAAAAAABwgJAQQFAQACAwEBAAAAAAAAAAAAAAAGCAUHCQQDEAABAwIHAAMBAAAAAAAAAAAEAgMFAQYAEhMUFRYHESUXJhEAAAUDAwEGAwMNAAAAAAAAAQIDBAUREhMAFBUhMSIjMwYWQXEyEFFhkUJictJDUyQ0JTU2BxIAAQIEBAIJAQUJAAAAAAAAARECACESAzFBEwRRIhBhcYGhMkIjFLGR0eFSBcFicoKy0jNDFRMBAAIBAwQCAwEBAAAAAAAAAREhADFBYfBRcZGBoRDB4dGx/9oADAMBAAIRAxEAAAGnAzd8XBVp1VfzE85iYdvw4Qbo0roouuuCll4dzbuTUyCg7jz4TFwFCFLjscmzOIO09gKuzgJAB/vGboVs28Haa0pWtqs4udZCulcLrpnYY8tZXbU//9oACAEBAAEFAvZ5OUHgJNBQEepSlqtS25mWHrStK8bK/nXol0xoV8zVzeZuw0M/Y90iJU1bTEyRAgY6vX8Dv6U5i8rlezE2D6PA27Aj+tQjMvdFyM3yVsBuPkujchP9J5QPou5Z6hpeU/nvcsf/2gAIAQIAAQUCk1uUZiQqmyTbbbSJEhCHMZkbs0hCS7XaUUc7QwZS6qIW3R1WNb7MxeoTYI2mBIAvOu1Bcqhlqo1M1cy9pntHe8Q/u9Kuv8m7rb4//9oACAEDAAEFArFEEckrkmG4qBfffKdMZMKXjQI4S2Igp+3/AEVRkXFNVEIS+7UZZSw2ccf/AB1uCbGD9rkdebYkmAxEXGKkk85Ms5oo0Rewbb1DY9nK4/b04z4t3heTx//aAAgBAgIGPwIW7S1vOXAYxY2zwdO5cHe31eCwLdoBtsZCQgW3OACceihOehfGKXFEtHuLvwgXNn/ksNEzwwPHzK7iY9zcNFyj83ZUUMpczgcThlDn7m56acpqp+gGENY25NciZACfjh+EL6Vp/Z9Ye7r+kou7o43LidzR97jD76jTpARevm9OYwn4QG8vX2/Zw+sPu3E4xX6lg06iL1Q3R0/i1OpqWrGeEsYNenT3xKlO+ClNOfHo/9oACAEDAgY/Arm+3+mNrt7aq9KQ9zg1uMuKdaZxvt9Ye35G3suzBpuEe2oymWyMG/uXuuX3FS5xUntJija27j2NE6Wk48U6Pk1H43yKaclpVY19uwPL99bc5q012rOS4eZfvh1r9QcBt9/ec9zGzVyqAqB3tNZa4NJMe3t3G3V+XtpCic+UEYDGANhty95v6nqkGNbbBE58xcirMhRFzc3tqjG2ylbGiq464tsSJqpY3mKqeZfNGmnuaer41/0yja7f1aQJ7Xcx8TG1/TWnlsWC4/xXXf2sb9sI4GttTlRZpy+sZ4hIuXkuIgDOUSaKnDC4AtZC4ghuE5bfZ7asNk2ebiUDsTiMssFIjQ/10092EM1vialIXzxc+Xqf9PTt10Jp+UUpVzeVFyh1etSn7sT11/li3Vray8lVNNXdnw6+j//aAAgBAQEGPwJjDQgPTyU89USwxxFlHasexaqunxUytwFe36L6fu7q9K63yyC6KbhuqqyXVSUIk5tOZDI3UOUCrkI4C0RLUAMFNCY5hMYeomMIiI/MR04dRUJKSuJQCKqR8c7fA3KICJQVM2RVBG8Sm7aVt0ICAgIDQQHoICHaAh8BDXL7tzxHuzj9hkNt8/F7jd4+zt7leyutk+dqsytPRcsyZPU253QMJufDGDhRFMQUFMrAhepbhuEOlNFZTbRd+DGL4SJMdGSSdmTZR+UHyCDN8izTWez79VYCrKeWkBTCWoUV4r/mMk4jE5tQXKqECmcrZTczDj0/HllotwrLqHl01GDNdATJNkKGUMcwqAbTBn6O9IqOhWnvcyLUEZUCMW8Uwi4NN61Is+FZdRWVfuTkIudUpFFSgYo0ANTEs/8ARJGzZrGPQZ81DRjVWQ9Qys+i5gkCC0dPSSCMfEsDA6VFQVVSlVuoKve2uJPd8V7rrjJ5m753yqY68d4VtKW9Ka9Rv7riGk126Jq1q3Y0YtxD8BRbhpFH+ElcP6ypv2SBqJhlWb3k28pNyIv0I/eYXjliRGBcthcepmjYQYvSAo4SO1xqFKW2ihbzSshimBTMk1ZQVY9rkZRzLfv26aqSE61QIuM26ROcfFTOi1CpLj9z0pAQwP0kinbRZk3qZAMvILPBaIPgFJ66E4uUFiiKZqmQMIkKocltOMs/k9nsMXT+mw7ezsp5XTT3a+6NvulsOTjLrMg0rd3vy9fv0H+0W4y7n/FXVt8PF8Pp7a6Swe7c1Rsy8NjraP1296ny0Tce5M1PEw8Ziu/Qv71NReXn+Ry/2fkNjx3IUHDm2vjZ6+V+ZkpX4fZ//9oACAEBAwE/IVpREnD+1dPLNA6zV9AjcQKxMfJ8oZ3Qq5P8I4iSBo0HDETOGUEIWjUzpJhV6BnFS9gG6ToZsKXApfZp4eodRTPiZJtycRkLh02QlmGViUC6RDb6Ma14OcgTpj64y3mdoQZSwBiIqfnnIvZH4rB5lfOB/wA8mqI8SU8ni2u1KoKIM6UkzBJ0OKuZCRZLGy/EPWnBGdR0SK9tvunPRz2vV4/qzoJRWx11ds6AyeD73nWTT/lfkPw//9oACAECAwE/Ie2kkpgnRfaeJywaDWhmD4WMFLMAAHYCjLw+Qgl+daj3+Ntb7eKRkmwCMT3UYEioKoWoMOKAYfnNB1UYs5wqAEMsIWPcQMEaCQSFZYuzMyldhEqkQVGO/wD4v7Z2dmHij6MhdAzzSfR+MHM+chISDDdhExWbQTXlK3bUDvdLGjOqrlMN02IlNDTvvrA574+dc5gox/vqBbYvG8a7Zw/uL/GfsfHGvRNPnbvx+P/aAAgBAwMBPyGLE0gIiut3+LRlZ3wIgxdJcBYmzkpySHO6FXy5DZ6tjKKGKKnnERh1z2ingv15yVzLnUIrVOjBA6sUkkxdX41m5Ri6IXTRbk3jSxKs5AQVI5VqVBgkGmQk3nQwIoQVEo1S0HFNe3pwxpUZMpAO6+3LhOGrB5l+MW9WJyAkK1EGtElXKvUyKEsHVTmWMWoYSdhk8gytyI0bL23hT1nxrlZj16rtWdDJQ1vmNN8+hq3H3n6Wz0RAJ1fTSdvx/9oADAMBAAIRAxEAABDaYdZ4h6r21ej/2gAIAQEDAT8QGr1Lw43EXIm0KMC9ihNnJPBCDt2N5bN3Vwn0Vv0gXRpiSOH/AJMzhaEUQESHOkn8/juz345Y3LmPUkqFWAt7Wqk8sA49rQKamw50nzY9EihuB6oUmWWGc+ZYPCAjOC+ovyv9rlWMp31nlwDYmDU6tDaQ57/isEI8mUduoA3y89bqwkkJhYFgBrfJCfKR8iEXodOF/wDjraKzp+nZ3OJxdYaV0uNnyzpceHc/+lGcKnMGfHI3s4l/x2Fhf//aAAgBAgMBPxCcekgTSQaHY5KnEcDZgJdokDKUjcmEzQPFoEAdgMGc9RI9kU+DywRJLHPUM+QffjjIglOtKkLgBZLKVGLkhiDGSA04BBjbIowTImckRhRMRGDDBkVqlYQDCKFErkolVoqiSzpSG4pDWct07mvJOtzkPstjoKMWXkHhjj5hcZvqljYeXaOgEhnSI6FTcKggChohg6DSRtOoxSEBAYUydw7nyt7z5Mi8T7933vOsmd/uE0Y/t85FqmY1rvWXN9WpHMV6zqC6xo+y0b/j/9oACAEDAwE/EFikE+RQOhLN9TynAYhY5gfCeBBWGAR3StGdVHETVLiyU0pqKpviI0LCNImonfPZbPQOuvTyyXM8QgY6HeaqEGBMsTECg4bOezCs3IYhFGkCFxjAnE3a1jNmhBSdQBajOJd4W5bYSMz8g/6LtxGDRQooiUnkK8mAIHg7Y/0GghtgwA0GxRKymIJkVWU9iHpcMlUgSz4ONTiKAFyaSrOXjZ/E+sjt0jjP0b2ZiPbcnYzqrJXgnZ1Z+UDmFJrZrUa1lba3ozxN5/nPt8+/aPw//9k="

    },

    P0Yb: function(e, t) {},

    S7CQ: function(e, t) {},

    "T/GJ": function(e, t) {},

    "U/C2": function(e, t) {},

    U6Xv: function(e, t) {},

    UJXf: function(e, t) {},

    VRDD: function(e, t) {},

    VTq3: function(e, t, a) {

        e.exports = a.p + "static/img/banner_01.1f7f5f4.jpg"

    },

    VW6p: function(e, t) {},

    WEQa: function(e, t, a) {

        e.exports = a.p + "static/img/router_02.6d31fee.jpg"

    },

    WWG4: function(e, t) {

        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAwCAYAAADuFn/PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAb3SURBVHja7FxNbFTXFf7OfX7V84wt1QqI2pGFIG7kysKCebcKiyKFytBIUcEQwSIKUgVl1zY/wmy6KMkiiowFBJYpqGqyqIxCgQSpohYgNQus3PtEJ0LMglqKRh0XJgoLwzDKeN7pwsd0Mhq7tue9AdtzpFnMzLv33fude757znnnPkIEks1mW/P5/A5m3g6gF0APM3cQUTsz/wDLWIjoO2aeIqIHAO4CyBDR9bVr1/69u7v7cd39L7VhOp3uKJVKu5l5N4CdABJYXVIAcJWILrmue6m/v/9BQxRgjEkopd4Jw/AogHZZJQxgnIiuhGE44ThOjohynudN9vb2Ti1nlDOZTHuxWOxk5q5yudyllNrIzK8CeImZZ/GbUkoNh2F4QmtdiEUBzOwEQXCImY8B6BTgxwCc9zzvcl9f339W0/K/ffv2j4rF4i4A+5h5QH6eJKJjqVTqLBGVI1PArVu3ni+XyxeZWQvwNwEc9X3/H2gKrLXbAAwz81bBxziOM7h58+Z/160AY8xLAP4qq36CiIZ837/QhL2mIvYy8wiADQAmAezRWo8vWQHW2jeY+SMAHhGNua67f6mbzWoRcU5GhZaKRHTY9/1PFq0AAf9j+XrG9/23F8prq12Y2bHWngTwW6GkA3MpgeahnRsAPABvaa0/bMK6eDHGvAngFIAigJdr0RHV2nCnp6e/FM4/o7X+XRyuXaFQOBKG4S4i6pFVc1cpdTmRSIwsd9e1SgmnxRImW1paflq9MVMNV/MmM2siGkulUq9ETTvW2p8DOMfM6+eIPL8GcND3/WsrhY6CIPgbMw8QkUmlUlsrMVWVF4ufrwFMuK67Pybwx+YCXwa8HsCYXLvshYjKruvuBzDBzDoIgkM1LcAYk5BcRycRvRa1q5nJZNofPXr01XzgV1tCMpnctFLoSFzUT8U97ZmNmJ9YgFLqHQH/Zhx+fqFQOLJQ8GctoVAoHFkpe4Hv+xckgO0UrP9HQel0ukNyO2DmoZi4cPdi24RhuGuFuadDMq+j6XS644kCSqXSbgDtRDSmtf4ipvu/sAT+7FlJCtBafyH5s3bBfEYBFatztOm9L4jPf2GtPZPNZluX0Px8JeZKOtlJROx53mcxmt/dRrSJW4IgeI2ZP2fm39y/f//Hi23ved5lSd/vzGazrSqfz+/AzMOU8ThTykqpy41oEzf4YRj+BUALEb3v+356sX0IxuMAEvl8foeSx4ggoitxDj6RSIxIkLVQ/v86kUiMPMPg/76O2OCKWPh2hZlnuAjDcCLOCYg/f1DM7/8NkAEcfFZigCjBr8K6VwHoAQDHcXIN8IWvARiYzxLkv4FnJRURNfhVWPcoZu6QiecaMSHf968lk8lNSqn3iOifRPSQiB4CuKWUei+ZTG6KGnxjzE5r7bfW2refNviVWDNzR4uUjsB13VyjVpVQyx/kE7s4jvNdGIY/ZOYTxhhHaz3ytMAHANd1c9PT0yCidlUxSMIKlS1bttwgol/L3nLcGHPkaYFfjXULM08BeK5YLHYCiGXTM8a4AAblo4moi5nb5jDPh8ycA2AAXARwUWtdqncMqVTqXBAEAPBHZj5ujEEtS4gbfAAQrMHMU0oqvsDMXTFFjXsA3JEo+3UAL84FvoyjDcCLcu0ogDvSB6JQwnyW0AjwK7EmogcKMylolMvlrohvoqy1w8x8YSl5oMocEjNfkL5UXEpoFPhVWN9VADISdW6M2H37IMrMKjMPBUHwQRyWYK39c6PAr8I6o4joukzw1ShpJ460NjMPxUFHzHygUeBXYk1E1ymbzbbeu3fvGyJq9Tyvq958kGy4d+qknfnkXwB+EsXGLIvlV8w8QkRnfN9/N27wpaQxx8yP161bt0ZJifVVZiapdaxXBmMEH9L3YISB4Z+01msaAb54QLukqPdqd3f3YyWmcEn+3xeRAuKWRtwjLtlXibmSyOwSgClmHpBC03pEN2ASejkib63dJiWLU4L5jAL6+/sfKKWG5brhOvMcXXFPpBH3iEmGxQsanq2xfeJXh2F4AsAkM2+11u6tY4dva4AX0bYMV/9eKV+fFKzxPQVorQtEdEwmeHz2qX1T6pd0Ot0hZesgomOVp2hUlW98logMgI1SYu004avbWp1SqTQKYIOUJp79XlBWxa1lx3EGhYoGpMS6KfVRz0nZeCcdxxmsLvdslqfHKAspT6+Z3NJajxPRYfl6yhhzuklHi6MdKUs/JcxyeK6jSs0jSjFsuJEcUaqio+YhvYW7mtEd0puVWsdUmXkoxjrS5cb1PyOi47EcU63ktTkOao96nvfZKj2o/UsA+2M/qF2l7QW/qsB13VxfX9/DZQ50W6lU6nrqryqYY7Npvqyj0S/rqCXN19UsXf47APhlScPU8bj4AAAAAElFTkSuQmCC"

    },

    Wxr6: function(e, t, a) {

        e.exports = a.p + "static/img/nav_01.09bb50a.png"

    },

    Y3FK: function(e, t) {},

    YJUm: function(e, t) {

        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABBCAYAAACUyynLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZGE3ZTcyMC04YTA5LWEwNGYtYjIxNi0yNGIzNDA5YTc1MzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjMxNDQxOERDNDc2MTFFOEI3N0VCMUQ2NTUxQjI4MUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjMxNDQxOENDNDc2MTFFOEI3N0VCMUQ2NTUxQjI4MUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRTUxRUIzMEMyQzNFODExQjFGMTlBMjNDMzZBMkQxOSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU5ZTBiNWQyLTM2MDEtYjI0OS05YjJmLWY0MzBiZDZiZGJlYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmxB8ZgAAAR5SURBVHja7JtdbBVFGIaHnv6E+NNC+REICQKKUSQ0IFVAKZUL0CgGkJQo4cIrghBuVPDCK2PCjdZGiQRjDJACEiQhwEVJtEiJUggEAliipk0gVKG1gLFWKBzfL/tuOhx72u12d/bsMm/ypLune7az787PN99Mh6TTaWU1MA2xplnTrGnWtPCUB54BZaARnLKm9a6nwXOgEswG4/n5X6AU3LamKfUYzakAz4NJfVw7D/wQZmHyc9SkCaCcJs1hzcqmi6AbPMXzBWGblis1bQyYyeY2F8yQsmW59jr7riPge/AjmAh+4+9/YtNNnGmlNKaSzU2Oi7Jc2wZOgnqa1Jjlul/ZbOWBHgFX4948H+AIN4/I8YN9XN8M6sBRcJyG6CoAKdZGMakLNNA0+exFsDOuNU0e7EPwFhjp8TtSoBYaVwiKQQmNytZkb/HFDOd5LXgjrqaNBr9H0PzF9Efj2jzbwZdgMegwYJbUxr9Zu2M/EBSyCdlplJ17+tcsMB08xCAzl5XPqdZpcCIK08SkXeClmFaYQ6CKJhoxLcVswrSYt7SzbCVpE6atBTU8vgs+Z+QeB40Aa5STUhK9zfJ7l5jmg0PpHq3yeY8oqdLKf3Cg388bRKTv6kgMm+V3g4lV/Qa3epKvJKIHXwiWgSc5hbrj8Xu3ODVz1W3KtHv6RcNmSevYC14LsI/LySxHkJL00AsZn3X6vJcMYtuTbtr6DMPeB1vAnxnXPayNjv1lVG4k2TQx4V3tfAWDa1Ep+6Z8Jgluhl2QuEgWV8bwuJGGbWDTbGMWxf35pjWtp8m5OsOfH4ChGQNSCYPvUCewcdE17Xi+FnZsYsjh6g/wXqgl8RlRH9Ai6jKDkfzP2t/9KKoZRdxGTxktv+XxRvC4chZQWpWTtXW7nEIP95LrZTmwwVRNO6q98XLDb7omHayqTc09z2vHzYZr2zrwDvgnoPu9bCqfJgu7K5mP0hdvZQlNFoDrwo6VoHHgVTCVA5rXuadcJ6tkr2vhS7kJ03qTLJkdYywlqeRZOZ5Tc0djWYx+NoqQY7Jy9lCU8nxsjg8o46MObqewZrmGtWtxVCI1WNNmsE9wc2qXlbNu8Is1rXdJtuGkNr2RzSqyAeWKSrj89mmyhywzzS27gPYp7xtdBqLrDDWacsE0v6OnLLZON1zWPWB5QPeSTc2nTI+eW9X/l71amdQbFtCD3WY8WKTFhrFunps5v/tE++wSA9u06nvDnlf9y35zP8+74m6aqJoGVfNcgtltYKnyn7PPVEsSQ45PMxJ+S5Sz8JEKqHzFSTRN9BlYrZ1XgG9snNa/vlDOvlpXlTZO86av2Fm/woHCmuZRtSSM8nUGeF99T1pBVM0zLOk5uScCvO9k7bgr6poWtM4pZx1zGKP2r8FhBr5+XrhsQxilnKU/V/WmplEmJf9EsSOke3cwydCRNNNEsofjYxXsDqULDMSbkljTXMm2hEXKyQp3qwHuk6VS/K4sDO02neW4r2VNs6ZZ06xp1jRrmjXNmmZNs6YlRv8JMADuaO1vPtzovgAAAABJRU5ErkJggg=="

    },

    Z5vj: function(e, t) {},

    ZBuA: function(e, t) {},

    Zw8s: function(e, t, a) {

        e.exports = a.p + "static/img/router_04.b79aa5d.jpg"

    },

    "b+Sd": function(e, t) {},

    b5vz: function(e, t) {},

    be6y: function(e, t) {},

    "c1+2": function(e, t) {},

    cOth: function(e, t) {},

    cvdU: function(e, t) {},

    dKrH: function(e, t, a) {

        e.exports = a.p + "static/img/surplus_money.51b7c1c.jpg"

    },

    e2aK: function(e, t, a) {

        e.exports = a.p + "static/img/tp_2.8df895c.jpg"

    },

    g6wN: function(e, t) {

        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAoCAYAAAC4h3lxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZGE3ZTcyMC04YTA5LWEwNGYtYjIxNi0yNGIzNDA5YTc1MzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTNEOEU4MjBDREU1MTFFODkzRUNCMDdBN0E0RTBFNzgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTNEOEU4MUZDREU1MTFFODkzRUNCMDdBN0E0RTBFNzgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMwMzJjNzAwLWFmMzctZGQ0MS1hZDhlLWMyMmU5MTYxNzZhNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU5ZTBiNWQyLTM2MDEtYjI0OS05YjJmLWY0MzBiZDZiZGJlYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu+GC/8AAAYaSURBVHjavJkLTFZlGMc/vg8QEC8prhTFjLRgUGEShji0LG9bDmPdXKUutbJYc1GxbF3MVcOalStsFWUtWluLRJtzoZVYmqZMhYrMW+rAaxICyuXr/9D/1LvTd95zzved8W6/HfjOc857f57/+xxfMBj0ecSt4FPQDNrAWpBr88xloBQcAMdABZgJAk7r9aLhUWAB6Az+U74FG/l3E8izeG4oqKHdXrAt+F9ZBuJ6qwPp4Bw4AgpAfxAPFrMxMrIzTM9kgE28/x4YDgaD6aCWg1HQWx2Yy4aUhLj3lDKqMjNloJLLTMonIUZ6Gu+VcXa19Uf7Ii8Xee0Ice9l8AsoAhlgHO0OgnKwCnSanjnNawBEgaCuci86cITXYRb3K0EVuAYMBudBPThnYZ/EazPotqvciw4YFbZobLrAbofvO8nrcM5Cl87YH2HjpYKFnOYffd6UA2AHKAC5ttYRbF7x4Su54daDAR7GlHtAF/iVHiyRv0ebbXt2uYNRvhvcwhmTNR8P8sFYUAvmcF17VWJAMVjOTV8DToD+4AL4Cqzp+dtmJAJ0Z93B/xdxhavAMIejKqMXE2oUNYhLXQf+Yp0XlPrfkXhjNwNz6e52gcdBEzdXJ93jcQcbPJezlQUG0PvIht4Etilu06qIKx3KZ8UzJYMVYGLPytD0XkZrKzgPJoaxju8E3ysj9geo59Uo8v7bw3h3HqN/tc5oCGgEPzuJiKal8iLlgPA2mAquBim8ytJYzU50Uvu4WVoJ4DsRjToj2fm/gdMg08XLn2XD6kC+pvN+cBNooP3TLuoYzeeO2hkW8+W7wHgHL55C+waOtJPGpIHfwUV22M4+GWxgPUudTNUKeqGjNp2IocKUhhS6XNOF9DDrbZbSILCFjf9IYo/TCh7mQzuUoGImC7RQ1wdcdiCOalWC11UaO0PdVlCyO5YSb9GdipqcYGEjbjIBVNvplxClHWxhoMy2sIllwDzLANdmJ+YySRp98Uj+PgtsDSHeLqVdQ5jR9zA1VYrF/WTWcQjU6dRoDlgMpjCAmMuD1PYfclYMydsdoUD0m95jLh2KzAgY5whzBx4FL4G+YA94k1rnFIgDo8FUUMhIOJ2HleNEKk8PswOpnMGDFvfl/fvBdeBGLjmfejAv4QY5BRaBPprNlA2+Vo6K4h2uZHSUM22sy03cD2ynBxulsbufdW6mGv63A7NBK9gPxrmotJwv/Jie53N6kgdcdmC+4l38GjsZ1A9oKxmNEfJjEtgH2sFklxX3VdzfLDCG2qnRYeATJoAT4CwY63DgytiJ1WpW4Q0XaZQSZarzGOg2cBYWKjmhuzT5nXgKvjO0X+Ri4JKoDpp9nHYZ/UkOHsykxgkyg2ZE643MxqXztyLuBylVXLs5fP4GcB+jbpB2j7ic+UQq2VYf5W0tM2XmjJv6//WK8FpuisjP8XdVGsuAfKFIZ5EKJ02HkkqH+ifUQUeWalU0DyhykD6juCxJkaxkUFrKCPwZGAWWgedN0dZIrQxUfvsGbGc6ZTyD4iWMpHvBD2AfaHWQOUnl4Uii7+WMxBL1e/bAWo6o2kNJ9e3kKJVzk+sk7wLen28zcn6XIz2TLtN8pG1nmwPGUvFbrPedykNPaJK7pbSZ4VFWQtqzhA2XvfUleJXe53UuIUe50Svo44s0NgPBTwyAqR51YBpH+TAHJRBJcjfWwdm3m1lmvweNT6BnlHKbnb0qvGSDXqtJ3oYqohxfoIZp8SgnNARMpuLd7FQBSnmFnmOew4pEtFWAMcoAJGjsR/IskcMkr87rJIJGi4y3ZWrxDgYVYzmkaUL5Q+CQIqwks7DG4jiYQf0in5H+ZOStZ+ZikMWZV2yq+bHE1QeOSdyQhqsSefAMv7aIV3hfyetItuwxeqtuBq2oEIf8Y8pBv4LBq0kRZCkhtJER5OLD+ULTj42tYUolaIqmdUzrZSn2xkF7CWOInxpJPjt1gCdNoznCpCqzKQTvZR5KBmROpJ+YEqhbZjNbLN7mZotcaD5dnpQ9DI5G54s1B/l3ldk0lmQbA2af3vpGpga+19gRGcHdYJ5NVi+O0XsdZ7GUs+G43r8FGAA8lslfrP7d5wAAAABJRU5ErkJggg=="

    },

    hNoF: function(e, t) {

        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURf/////+/scsNNbFrvKXABQxfzobEPLhwswsNfTCPcosNPHgwbMpLvn4+MUsMiMZFvSxJPz7+/OtH9nOwsMwN7orMu/dv/S/OPPw79XEq+zbvPOqGv39/rtDRvOcBtbHtPDt6vOaBPS8NPKYAfOiDvOnFfOkEvOfCt3UzOLNsbYqMOOOA/f087pNTb6qkOXe2N/a174rM9vSydjBpb1HSsCXRL00OdO/o8BiZbo8QPTBPPS3LcErMunXudnMvr1bWLAoLvS0KO3n5b5TVt/NssJydNKQGYRrWMubh9TJvvS6Mb9hXdnKubmVUc+6oL9pbOXUt9TFsdrHq8uRksmWg9aqQMM2PMGnfc/BsuDY0b88P8axl9TIuuri4dClQODIrMJyZ+TRtMy8rNmMDEQlGcuHF9e4t+TU09OwmJoqOsq1mrqifMacRRoyerugcc2jjcR8b7c3PNa2nuXg3iMjJseJisKHKM6am9nAwNOrq29TQ7pUUcKEdc+qlMBrYrmca8Z6fL2dZdGjpMKcTseDhOHOzr6OQbFbWYBmU5V9aDdDeM2bO8E9Q+2UAtu7oUFPeLBHSNabJY10YLw0Kt3JyMVdFIe211IrVbGYb+W2PLWVXyo8er2sme+9PFs/MK+ZfL+njhstbNWyspyEbtyGBOq4ObCZhVEzJRhxrzCGwqXK5R82SejX1sKioDQtY1orUmwqS8qNfSUub4EqQ82SJj86OsSynr6ZXMSONruINM+EDdvV069AQM/Mz7WghuGvNb5TG5mQlIF4geHi5FVmg0qVy7yHhqQ0OzwsXqqel05Zhezhy48rNOGbGbFqYoAuMK+uvHZcSs6qZtTW3MS1paxOULxBIsttDNjo9JyfrV6h0BJfl2NHOL2MeXZ7mG1vhdGjU+KzPUY1NFcyMayQY9Ktds2yiLa2wquEgcCPjqhkRtLAqNmlL+LUv32oxw9ViB0sOcHY6RY/XhRGaz00MpJQW8yvcqV/Sa17Nm2au7p7HvTlyvPiw1ZPTLN4cumtKihWBKAAAA0MSURBVHja7Zx3WBTXFsBn2YHZWVjCLsvC7lKkgxQRqdKRXgVRQUQpomIBFETF3nsssccWNcYWo1FjjYlG016K6T15SV7y0stLXn/v+96d2Z3ZmWVnGO7M7vf+4Hx+4s7sPfObc84999yCCDIogzIogzIogzIoUNI8E7pp3Z/shzV+UgNs0/ZZ0fai8i3HY2HbJsI37U9ujcTHQzZVJeLldjJX7SQcGss3EcftE11PASr8AGzrVTg+cn+u5FDxy/YBqsQhsO1ngtb4Konj68er20cSepdBa5j4OdG+pGe8dFCq9igU9dd442M94ZWswPG0MBRFr3pKRDWsHM8JBgqDw1aIiYLt/kAHGuY9SRpPeoJoxYNCgcpWHzF6VmwBJs8BuvbtlYJqFk5KSWiUXJymnnAPMkDxg+K5GlbhZhk5U2wwzKJU7RPtx/2UKny/+Mz3KKVr7ERxmo4clEoT+x3LVaLsvolWJEWcFo+l1S0To+dqeBBlrAgpevUyKk41LcPgtUREocEhRg8PjTHkmiTJZsaWUA1QFxqIorNElH1GlBIhg0Z8nbq/r7RS+sI3QSdBUI2UhAWTWq4LUeJp0PfnmrUmKH+QwaCTRDPRDb1zNEZNTrmgBlVYXj8lxoE0jdHoUULEF/RINh4fYD+MwDBP/pG49hla5VjYImmVBWumUKwyPW+XbbBkHFwPWc9MojV4C3KiurlJF+taxfeVuEsWrK/hsP5g0RB2VUjurdqRd2I0plfxZogSWunf4LB0tIJQtLVfJs8qw47CSMMIrIkvZq6g/lSCxt8UZy1vUGu1xPHPmasMWHXvlORbhTpMLuNPEP4l4rAMaWTrHKKqTDvMF1O1AGrHFBcXl94MDCvm+WbXrHBQ5Rq9ybf9I6S1UP9QYyhZ6mp45zy12LHHAJPLYycwTFfLZ6zDeFAgUX6HGI0hwZsge+JxaqQwgpdr5+5dhtgT1YbqIxX/+feP37/NOzqBCqIkkNIKaS3kuql5IFGA459XcI45GCkZ8gD9aCyjjuc9rxCKgkLMWF/BLmeEhgcHhmi8TYHfUsaLVV+44Vjh+gxM7sup75rGFOs5of6E3gDxgw+Oe6AtHHriMSxPhxneIMKrEMPquHthOFNhoi8k1tsHGVqA6S/Z4FItmJ//2javJYS9ekHUY9i6lOXzd/Z9pM9+4LcShkLooZpYZqGkBCgNGrs3mtXP1oxJSVWQ0kg68pbLISxSCz4q/fJXsrqurLmceLFQBhb87Gcmy1hhxOJGD71KdXbMKCcFJdolJFdhIdZJXUqqXEhXhV+tBQsraSAzWMw1C3qVBYmgB2sN5YHg639v3RSJyI5WahVMGddYNBfDDtfPHce4mDAmF4l+s+AfPVE55lcL96Y0tkswJUgLphwQjHq0olHf3VT0FWXMg9UPTmBfS/ruX2jUD6ARqYVYgzBNrPFJcSKwukwTYQ9AFUwOsd4o6vFMFPqewqY0dkywvvQuihaAd9GYh3xibWQABRyX1IOYCCLWf0zvS7xwDl6AbnnIJlaqU59Lu9CoZ/BAs6m9iQxPLo+Im74iyF6NKSmH0TGWhm9H0WcVwsTpODAWHo76mxOpaYJh3FQncmbne800fzKHKigAvHHgxV0CsR4ifIiHES9jTsqEtOgRsaJeu4UOCOJtQaZ+lMRSurm5eXEDeWUTtwHWdhImhBosQJgWBCASyJVXc8w6iaoEVBM/0E50dxvO4Ty3dPJnehRhrSCyNjLr0PTUIZJIcbmpV6cFmjpkAYq+Sz0/fagtKsvV99Djj5JeRE3FHz5ppi8ilcSWjyzxCDGXXgdb0OPuNIG7Da50i3OfJb1YEkxGepr32GV1iISiik18lVAdAux2CWVFfF8uJ8aVh6LQFmAuck04/FJ7BCK11LZfCjcCqu1R6HFG2ho1/1vrwL/pp2QmLrQVcKWFv5oYOwSxh6gOtJf3FGxBo961PLXy11Mnb7Oz6Du7Ty/cbDHmeyAhFFy7Mj4esaN83XN9F8NWfs+dPHP7gztMrm13t350b4FlIHd/trV1bS5ib5nKtMy83b91q33PfOOlID3plO227e7v6uc+Op3PQEccISysqfd+eeC/cb//NMfNbDDlB93dT8edubeQMVI6Hmvnqe4HgPwzhmb4CXy8030qwhL1cxyCtYCF9eEZAmu3H+2x3cTn7lNd7g621jRmfC88/TOg+MtbdIQn/foLceHDBY6OregkBla+772fz/y2eyUj2k52P9B98v35jMzmECwkgYGl3ana/eFpnxgG6PunPjp5Wj3KciXFMVgpzOBK2CmT5TKvOC2Uva+SzWNcWe4YrNWsnK4trWQX8NrVC6bmM0YfxRjHYK1UDEyOIo7vioz5GAeVNhdxfMwTOSGrs6Zj+tzk6UuKLjRm9Zn9OKgjIshyZoRnFWVgTHGde6E0lTVsOgrrKCPep2M2xFCziHapcgFriURaEnW0j2X3S+1HQc3FuKQohu3D3AjPsgC5Xq+XB2RGSFHNR8dnBujleZHVhMb4LjpFaJdyQxHOrIlRmtODui6zajTznlx0SThkYh7bP/qAMs/mmJjSxZOx/qRjacKcbcWeAXJX6zu6WrUoqvg8zD5SK2qGaLATFeYq4qhNvN2owCow9Kawj7UHZ2xYvyF5gFaJ3bDhiM7WHWhzFbP1jO51Ide4dQOgSj5E7rrU27gFe2JHrWfr+djFJL3CuWZMMTWZUmEj53ZBLuhaPcKFkkKhVNVTqCZv2LgLmbw82Vpu0VguJ4RR6T6mWxyycTsTDivAKkwsWFOaBGEds7SwZa0ySbCwXjPT+mPrdwhy4aHC9Y+ZsWzFPOSaoFXEY01kr9pBjG6RGQKwKsCY43qYDK9jmHRdUd4nVg4X7qgYaNps2tC7vh6TDit3xmTMrgKHVYYlu/7/YcnkmGuyXbGgQr4O5PIKu2JB5a1MIlXZFQtmeVclF4+1hD+01LDVgzismg7e28UwPqwSjdV0M5K3DIRZDX87mZD65Gp4rKUJvLdhTtfGUYOLITm5CdKFTkt5Iyta5Cg9WQ9DBTata3huj4bZ+hnCtFBFJATVZD+Flmfscp0osi7Nq4AZgSaDqf4invvN4upSw4xIKA8SS02Leajg5tSZ5ub64ngYW9UQa9HaEdwzasiZfhntwrJvBgzVYVpEyuKs8KHXHzItSjKODCRFZHR0UnuJRVxfKUYQ8ViERApJqk0XOktjLDsJMRzezxOxKWw1FXMdIQArkrWiqrRtLNdaMRuw8Wxln4wQmEAtYjuy8sT9RtQw5kqNrtNJ+4mQ+f10C9cEW6k0Y6LYvWrGpGf6IjJU6oXYi9q+G2ej0tJVDUPESrGOWjLOMm/JKdcJqKCbGslv+/VdfjZUSXL+oRl0pKaipcwFdqd1R/pfhRuxeGljTZ+vRZbFIZKI7LXGRUl9z2cthph06IpKtZVS/d7rmnG2N3b8Fi/JGACToaiRtHiKj0Rc8zh3vJKyFncIGcFdp18onUM1KpWISzWKbzNOu+21zhMHRnMa6amazqwX3JktSiXy47RxPFhecxRtzs6zN269+9md2weq5MS2if77p1566aXbdz67u/Vh5yfAl9xYXJVqabhWKvmoFBedadl43/fp+2/df9hyxXmPog+XVJvD+ZzRRYRxGwNi9kZn50dmMy44nye/mM3cXFTOlyi8UmxTpW8jn/Iig+IR8o9FnjQfnspmneRdIw1XboxNrHdMP9pmc2NdpCzE4holUdifTbBFRXnmPE3x8NaNW1/eahVZ1ufxJNyJndaX6yZ9ZGz4k1Ro/VkG5LmNdKi9YPn6UGZ4jTsrEVdDlvXBv3WWf+8xY3wgI+Vpqiu+yGzAcmOlZNvB89j5ax3j7c1e/FRmlvvmaHuC1UGYR1O1a6TiQhrm5yfQLEnMXvAECfGyD4Ul+9QGlsKN+SFf2iMZK1en+BHJcR0zEZ0jw/0tkqgrGvylermvE9knQFOl/z80GqaufJ7ZBV4hM9RfTXGl6sq1hH0bt7kW2uMIxPPMJwwFPfFcm3YNwPEBTHHgZ+4L55hpy2wuLzufT/JZxHpe257zIJ5XE9a6IVMRWMsVXqB7nrM6gJ1t57Mtj9s69TNhCOAZcoOgIo+btl20PrY7PN3y7zky6bEqbQ5GY6iOyFmjMaJruI/kVDdSbT40IdqMtZqr5GB4MV36c1PfcjzVbK6pWi4sRtAPj3aQDxWKzQ0EVYMfdzU71I7HPeNSuZ6aT+SILIUQLOnPVT7O/XszR2VcNaP1wCj9AcZ87sdu3pnCf26R6otOa6SmUvF4yWtoP8cph9rNhzeSuJ+arRCGtfmsA0OL8JGSH2s4OTfT2mGgfp4P6/UvvvTqN7iU9jiwW8nz0OwvLl9+vT8vKlfbgcqXb1HC7cvLl1/pB8vJLoebu1L5sLJff6WfmN9slwIQmeguIC3xYE2zCxVvRxSAlS74FNn/AHclRPpLgWaUAAAAAElFTkSuQmCC"

    },

    jh3X: function(e, t) {

        e.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QOIaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MGRhN2U3MjAtOGEwOS1hMDRmLWIyMTYtMjRiMzQwOWE3NTM5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjczMERFOTY1QzNDMjExRTg5OUU1Qzc4MDA4RDU1M0MwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjczMERFOTY0QzNDMjExRTg5OUU1Qzc4MDA4RDU1M0MwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplZjc4MzVjYS1mMmNlLTUwNDYtOTc0NC0wM2E4MjkzNDRkYTQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5NjNkZDk2My1iMTA3LTA5NDEtYmEyMC1iOGE0NWRjNDM5NzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAmQWRvYmUAZMAAAAABAwAVBAMGCg0AAAXrAAAH2AAACNkAAAnZ/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wgARCAAkACQDAREAAhEBAxEB/8QAuQAAAwEBAQAAAAAAAAAAAAAABwgJBgAFAQEBAQAAAAAAAAAAAAAAAAAAAQIQAAEDAwQDAAAAAAAAAAAAAAQCAwUVBgcAARMUQBIXEQABAgMFBQMICwAAAAAAAAACAQMREgQAIRMUBTFBUSIVYTIjcaFCUnIzQxYQsWKCksJTJDRkNRIBAAAAAAAAAAAAAAAAAAAAQBMBAAEDAgUEAwAAAAAAAAAAAREAITFBcRDwUWGRIECBocHR4f/aAAwDAQACEQMRAAABuvAUjJBaC/oumSOiZFXg1mRFBEqKvG7PXqU0E44rFWjqOuS8FeqaOv/aAAgBAQABBQKRkWwGyZEojQsqE87HzrravZPrIEblF5UmiWdMPvDPW3JrmYOorpDid0LyhAEmIEDKPIgIyjQ/ErgvRSIMIW/rjHk38pbJYx7dM2XcFKRTSODgvv5b242h9nGnz7pa/9oACAECAAEFAvJ//9oACAEDAAEFAvJ//9oACAECAgY/Ak//2gAIAQMCBj8CT//aAAgBAQEGPwL13j923+cuAJ57ETz5IF6yoUjQp7KXXdtlCi1KldfDvBS1jRujDiLTimkLC1WLiNLdi/Eb7S9cfPaeZJYTTR5ZYRmjshCzzqrdOot9jYLAfNf5bUeiMOE01UMLWVkqqmOCuE0wyqp8NCaJSTesOFm6indNl9k0Np1slAwMdhCSXottN1JxER2oY8aCQFX2TNh4hTcJOtKqJwtlZufFwo78vCeH4rvJYwXaBkK+UVgtqTWqNo38o0VNWNtopGNPOrrT6Al6g2ZFPwmRdkbN0lGw5U1DxILbTQzEqrvXcIpvVbkTbbT9MmQypWEFwh7pPGROvqMYLIrxrDstj+hi4X3pJ/qtXa+QEdMy1iPAHex1gDY3IsqVDpIk2xFW+xaidYVSDhqrunukWRw1X3TLUf28id0h5uMb4u9N0Gnoqx4YLUk8DgiS+mrYUrKvKi7JlhZrSqt6s1RvVSIRnnfOlfRFMXh24VNBIGlwAnNdC2Rik8J8T+xtm9nd7Nns1hZbCczGYkwMGVcXGxPDwpO9G6FnvlzqubmKfpmD0KePNhZzxtuzB8GHdsPV+q5Sbm6blMzL9nM+HNZz5OkzUg5/Of7csU/k4nNgzfpeBN2/R//aAAgBAQMBPyE0oHb8YsrlHyrGqPjgRxN24RGsnq1KvR1BTvRUxNgGZMIY9dPfFeIffsFT0qexEtEDOkiXc0/PUso5BWNkqk1Y2MlqAawkj4gZ25CitTdW3fn+OrL+8Z+4p+AzLhdQ+iUQIMZ1RBIHceXF8gvUuSGZgz2Q8GytOdfppN6tTeW3U/coxLNlLbvBlsn8gC+YpMMQCoyi2nJZHFBkRm9Yw5W63A58cFb7N2/dXK8DLUd2m1fkZYdp/UEV2Tu9b9m62ryFnSNteJlw/9oACAECAwE/Ifc//9oACAEDAwE/Ifc//9oADAMBAAIRAxEAABDG6W0qk0i0qY4f/9oACAEBAwE/EI/IJElg5sq1ABYMPOqMG93hJS7V9omfc41lBFCBEosgCixvRCUYj5cxUdyRlilaTsZGPxZAsq1pRThfam8fSXqNJhOwROsjcs2WiFrggE8k2ZiyYmvOOPoho47VqHlGzkJHuPQ2ad7ME7xNCtvLAIBUILgbkqgVivG4OVXcGQM14QV74xqbU2QWlDRN9IdRGnDAWLgYZQOAKGkErPjuJEdjCJZRb0mm1jIdAG0/y4rJjj4PQ6q5JV0/11Vc+q4dbRLkHVW36lczizOj8Nv/2gAIAQIDAT8QWKmeA8Fn0TaPUnoi0cGK3ojTh//aAAgBAwMBPxD3P//Z"

    },

    jhYv: function(e, t) {},

    mO1R: function(e, t) {

        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAwCAYAAADuFn/PAAAAAXNSR0IArs4c6QAABYBJREFUeAHtXE2IHEUU/qp382/AoO6yGsXgCqIXA1FDkJCA/7jZiHhRc4weFAQP3mIScstB8OBBQRAULyLuJqJohA0hhIQEzCUQyIqg0clGQWHNf3bK99VMzXbv9vR0zXTNMJ160PRPVb1X9b2uV+9VV7VCAbT2mF5x4y88XQW2KuAhYTkKjTVyXq2BpQWI6BkLac91ET4LhX/kPC3tORsBU0vuwqHzm9SVTism/Nuj+77Va65UMa7kkMo9ozVWtsepP0sphcvykv2oI0yukOO3FxUV5EzOCrj7oF45V8W78ra/JxVY7SyxjAUUZqVX7B+I8MGfY+qySxOlXD56ReuB4QP6jRtzmK5q7Avgx3CTF5GYEBtiRKxiqZmXuXrA2oP6nmtVTAjoGzK5hcQaAgqnlkXYfn5M/dEKkpYKGJ7QT4i5+UYYjbRiFtITCFTEvLw0s12dSDxdcJNpgoYm9eta4bCUCeAvAC7H7QixI4ZZeZv2AAO+xudZhUNaPgTEY9pxcVx9kZY7VQE0O9SeuJbL0wqFZ24IiAKuKo0taeZokQLMgDuHkyLCm9lZNQi89QDwrEhYt6rWmF8vAT9UgI9+AS7ddGtgn+SuLBvAYwsH5oQC6D4dPoDjPr2dJ+8EPlwP3NskbPtdvOh3fgaO/t0nsLpUU7yjLduw8Sul5myxhALow1ar+NgmFn0m+F9vAqRLZpKYPrx8rJxKiCK8ObNNfWIBaEDBCJeBhCR4MT00O0e2Nn/zbYXsmT1h81QpzVFlyQBGbcTccEM5veALfIJKm9/M7FjQ42fmZZkS0kgda9M0owBOrJm5HY+tfa6NfsVB2jd9uRHg0U0i1sScMo0COKvpe27n/rq349JQ6yG5lHHN+9QwwKOrJHNHBnMRahRgppS7WoMgzGIe8WMK5/N9Q0I/35XaKeMqo2f5BXNiH/FLVjc+pjDIcqV2yrjK6FV+Yk7sIxkQxDn0T4xw6VrmJeZlmTITsY8kEOA3XO/E6QVGuAyyWhHzMG9JpyQazSf2HIRHG088X3B6gRFuVk9gWlmj4BR4RwfF/TT+aEqil0dUAiNcBlmMDax7egtMxi3GU7BXQxP6mvT4pYtTb40nF8dr7Rya7H57xQRdlxmachKjW5cAyyoiC42fZoBXj2flcE+jAmbluMO9aP4Sg6LqF8TcPC/Ho7cDw/KZ57Ymqv9PBuuZq8Dpf4HvxXX9To6bOQbu/LVpP2ceB8KR+6yST4/nhLG3gZjA735k/sOLYwXBsWHvmZoiXMvmyW/f/J6YIIVpekGcgi6c5KXH+w8Dnz3ePvisFOeDyIO8yLNkNB1J7z7ro1G7BLC3HyyOM3mRZ5mI2MsHGkwV3SianSLBt/UjT/IuCxH7iKt8zULTglrFAZc23xeRN2X0OxFzYh+ZJdayyreoBvEN9TmPT96l6AWCObHnIAwusS5KAXQ1fVM3ZPhug8XcKIDr28XFYDzQMdHP903dkOG1DYK1wVyEGAVwc4Fc7C9CKIMs39QNGT7bQKzthg6jAArj5gI5tfHZJFnVZhFuMldnd0XK4PTCoQud1cexdKWOtSnWUADXqYhPuseRWd9n59zOa5kLyIttIjG2a4LIuaEA3mwew6cyFpzidSAPCAi2BuMY64QCuGaROzskvWNTFJMRLmsIVIhtfF0oH6eGNGF5erHvTNby9EQPsGLr69h32vtw7hiBnWl7A8g1VQFM4I4O0dwOao/3gdwRMG9+xu4Yckw1QXFRYZNeHA2n61yb9FoqgCLDNlUn4Pla596m2tQExUVyWw13dnBzgTwPHlIcnOR1hRgRq4VbkZLZ5u9y9YD57ED4VUEcjfp1B78qcFaAFR9+1tGjn3VYBcTP4Xc1cTTcrv8H6jW/jkHzBNgAAAAASUVORK5CYII="

    },

    mUbh: function(e, t) {},

    mVmT: function(e, t) {},

    n2mJ: function(e, t) {},

    nFtQ: function(e, t) {},

    oRD9: function(e, t) {},

    oZfJ: function(e, t, a) {

        e.exports = a.p + "static/img/nav_04.9288cd8.png"

    },

    olhG: function(e, t) {},

    p8VF: function(e, t) {},

    rDGr: function(e, t) {},

    tURl: function(e, t) {},

    tvR6: function(e, t) {},

    uFsl: function(e, t) {},

    v2ns: function(e, t) {},

    wJuB: function(e, t) {},

    xCo2: function(e, t, a) {

        e.exports = a.p + "static/img/router_08.f1a3afa.jpg"

    },

    yUAI: function(e, t) {},

    zcWR: function(e, t) {}

},

["NHnr"]);

//# sourceMappingURL=app.c99435956f6bb8d007b6.js.map

