(function(t) {
    function e(e) {
        for (var i, r, o = e[0], c = e[1], l = e[2], u = 0, v = []; u < o.length; u++) r = o[u],
        s[r] && v.push(s[r][0]),
        s[r] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        h && h(e);
        while (v.length) v.shift()();
        return a.push.apply(a, l || []),
        n()
    }
    function n() {
        for (var t, e = 0; e < a.length; e++) {
            for (var n = a[e], i = !0, o = 1; o < n.length; o++) {
                var c = n[o];
                0 !== s[c] && (i = !1)
            }
            i && (a.splice(e--, 1), t = r(r.s = n[0]))
        }
        return t
    }
    var i = {},
    s = {
        app: 0
    },
    a = [];
    function r(e) {
        if (i[e]) return i[e].exports;
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    r.m = t,
    r.c = i,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    },
    r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i,
        function(e) {
            return t[e]
        }.bind(null, i));
        return n
    },
    r.n = function(t) {
        var e = t && t.__esModule ?
        function() {
            return t["default"]
        }: function() {
            return t
        };
        return r.d(e, "a", e),
        e
    },
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    r.p = "/vue-esign/demo/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
    c = o.push.bind(o);
    o.push = e,
    o = o.slice();
    for (var l = 0; l < o.length; l++) e(o[l]);
    var h = c;
    a.push([0, "chunk-vendors"]),
    n()
})({
    0 : function(t, e, n) {
        t.exports = n("1d50")
    },
    "0056": function(t, e, n) {
        "use strict";
        var i = n("dfb7"),
        s = n.n(i);
        s.a
    },
    "1d50": function(t, e, n) {
        "use strict";
        n.r(e);
        n("e948"),
        n("3d12"),
        n("ff2b"),
        n("592e");
        var i = n("2b0e"),
        s = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "esign",
                attrs: {
                    id: "app"
                }
            },
            [t._m(0), n("div", {
                staticClass: "esign-config"
            },
            [n("div", {
                staticClass: "esign-config__group"
            },
            [n("label", {
                attrs: {
                    for: "line-width"
                }
            },
            [t._v("画笔粗细：")]), n("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.lineWidth,
                    expression: "lineWidth"
                }],
                attrs: {
                    id: "line-width"
                },
                on: {
                    change: function(e) {
                        var n = Array.prototype.filter.call(e.target.options,
                        function(t) {
                            return t.selected
                        }).map(function(t) {
                            var e = "_value" in t ? t._value: t.value;
                            return e
                        });
                        t.lineWidth = e.target.multiple ? n: n[0]
                    }
                }
            },
            t._l(t.lineWidthOptions,
            function(e) {
                return n("option", {
                    key: e,
                    domProps: {
                        selected: e === t.lineWidth,
                        value: e
                    }
                },
                [t._v(t._s(e))])
            }), 0)]), n("div", {
                staticClass: "esign-config__group"
            },
            [n("label", {
                attrs: {
                    for: "line-color"
                }
            },
            [t._v("画笔颜色：")]), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.lineColor,
                    expression: "lineColor"
                }],
                attrs: {
                    type: "color",
                    id: "line-color"
                },
                domProps: {
                    value: t.lineColor
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.lineColor = e.target.value)
                    }
                }
            })]), n("div", {
                staticClass: "esign-config__group"
            },
            [n("label", {
                attrs: {
                    for: "bg-color"
                }
            },
            [t._v("画布背景：")]), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.bgColor,
                    expression: "bgColor"
                }],
                attrs: {
                    type: "text",
                    id: "bg-color"
                },
                domProps: {
                    value: t.bgColor
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.bgColor = e.target.value)
                    }
                }
            })]), n("div", {
                staticClass: "esign-config__group"
            },
            [n("label", {
                attrs: {
                    for: "is-crop"
                }
            },
            [t._v("是否裁剪：")]), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.isCrop,
                    expression: "isCrop"
                }],
                attrs: {
                    type: "checkbox",
                    id: "is-crop"
                },
                domProps: {
                    checked: Array.isArray(t.isCrop) ? t._i(t.isCrop, null) > -1 : t.isCrop
                },
                on: {
                    change: function(e) {
                        var n = t.isCrop,
                        i = e.target,
                        s = !!i.checked;
                        if (Array.isArray(n)) {
                            var a = null,
                            r = t._i(n, a);
                            i.checked ? r < 0 && (t.isCrop = n.concat([a])) : r > -1 && (t.isCrop = n.slice(0, r).concat(n.slice(r + 1)))
                        } else t.isCrop = s
                    }
                }
            })])]), n("div", {
                staticClass: "esign-box"
            },
            [n("e-signature", {
                ref: "esign",
                staticClass: "esignature",
                attrs: {
                    name: "esign",
                    width: 800,
                    height: 300,
                    isCrop: t.isCrop,
                    lineWidth: t.lineWidth,
                    lineColor: t.lineColor,
                    bgColor: t.bgColor
                },
                on: {
                    "update:bgColor": function(e) {
                        t.bgColor = e
                    },
                    "update:bg-color": function(e) {
                        t.bgColor = e
                    }
                }
            })], 1), n("div", {
                staticClass: "esigh-btns"
            },
            [n("button", {
                on: {
                    click: function(e) {
                        return t.handleReset("esign")
                    }
                }
            },
            [t._v("清空画板")]), n("button", {
                on: {
                    click: function(e) {
                        return t.handleGenerate("esign")
                    }
                }
            },
            [t._v("生成图片")])]), n("div", {
                staticClass: "esigh-result"
            },
            [t.resultImg ? n("img", {
                attrs: {
                    src: t.resultImg,
                    alt: ""
                }
            }) : t._e()])])
        },
        a = [function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "esign-tips"
            },
            [n("p", [n("b", [t._v("画布背景：")]), n("span", [t._v("默认#ffffff白色背景，为空则是透明底色，支持多种写法\n      （"), n("strong", [t._v("'#ccc'，'#E5A1A1'，'rgb(229, 161, 161)'，'rgba(0,0,0,.6)'，'red'）")]), t._v(" 颜色无效时谷歌会变成黑色背景。")])]), n("p", [n("b", [t._v("清空画板：")]), n("span", [t._v("清掉画布所有内容包括背景色，恢复至初始透明背景。")])]), n("p", [n("b", [t._v("是否裁剪：")]), n("span", [t._v("在画布设定尺寸基础上裁掉空余部分。")])])])
        }],
        r = {
            name: "App",
            data: function() {
                return {
                    lineWidth: 6,
                    lineWidthOptions: [2, 4, 6, 8, 10],
                    lineColor: "#000000",
                    bgColor: "#ffffff",
                    resultImg: "",
                    isCrop: !1
                }
            },
            methods: {
                handleReset: function(t) {
                    this.$esign.reset(t)
                },
                handleGenerate: function(t) {
                    var e = this;
                    this.$esign.generate(t).then(function(t) {
                        e.resultImg = t
                    }).
                    catch(function(t) {
                        alert(t)
                    })
                }
            }
        },
        o = r,
        c = (n("0056"), n("2e15")),
        l = Object(c["a"])(o, s, a, !1, null, "b1760d40", null),
        h = l.exports,
        u = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("canvas", {
                ref: "canvas",
                on: {
                    mousedown: t.mouseDown,
                    mousemove: t.mouseMove,
                    mouseup: t.mouseUp,
                    touchstart: t.touchStart,
                    touchmove: t.touchMove,
                    touchend: t.touchEnd
                }
            })
        },
        v = [],
        f = n("6f79"),
        d = (n("5547"), n("e16c"), {
            name: "eSignature",
            props: {
                name: {
                    type: String,
                    required: !0
                },
                width: {
                    type: Number,
                default:
                    document.body.offsetWidth
                },
                height: {
                    type: Number,
                default:
                    500
                },
                lineWidth: {
                    type: Number,
                default:
                    4
                },
                lineColor: {
                    type: String,
                default:
                    "#000000"
                },
                bgColor: {
                    type: String,
                default:
                    ""
                },
                isCrop: {
                    type: Boolean,
                default:
                    !1
                }
            },
            data: function() {
                return {
                    hasDrew: !1,
                    resultImg: "",
                    points: [],
                    canvasTxt: null,
                    startX: 0,
                    startY: 0,
                    isDrawing: !1,
                    sratio: 1
                }
            },
            computed: {
                ratio: function() {
                    return this.height / this.width
                },
                stageInfo: function() {
                    return this.$refs.canvas.getBoundingClientRect()
                },
                myBg: function() {
                    return this.bgColor ? this.bgColor: "rgba(255, 255, 255, 0)"
                }
            },
            watch: {
                myBg: function(t) {
                    this.$refs.canvas.style.background = t
                }
            },
            beforeMount: function() {
                window.addEventListener("resize", this.$_resizeHandler),
                b.event.$on("reset", this.reset),
                b.event.$on("generate", this.generate)
            },
            beforeDestroy: function() {
                window.removeEventListener("resize", this.$_resizeHandler),
                b.event.$off("reset", this.reset),
                b.event.$off("generate", this.generate)
            },
            mounted: function() {
                var t = this,
                e = this.$refs.canvas;
                e.height = this.height,
                e.width = this.width,
                e.style.background = this.myBg,
                this.$_resizeHandler(),
                document.onmouseup = function() {
                    t.isDrawing = !1
                }
            },
            methods: {
                $_resizeHandler: function() {
                    var t = this.$refs.canvas;
                    t.style.width = this.width + "px";
                    var e = parseFloat(window.getComputedStyle(t).width);
                    t.style.height = this.ratio * e + "px",
                    this.canvasTxt = t.getContext("2d"),
                    this.canvasTxt.scale(1 * this.sratio, 1 * this.sratio),
                    this.sratio = e / this.width,
                    this.canvasTxt.scale(1 / this.sratio, 1 / this.sratio)
                },
                mouseDown: function(t) {
                    t = t || event,
                    t.preventDefault(),
                    this.isDrawing = !0,
                    this.hasDrew = !0;
                    var e = {
                        x: t.offsetX,
                        y: t.offsetY
                    };
                    this.drawStart(e)
                },
                mouseMove: function(t) {
                    if (t = t || event, t.preventDefault(), this.isDrawing) {
                        var e = {
                            x: t.offsetX,
                            y: t.offsetY
                        };
                        this.drawMove(e)
                    }
                },
                mouseUp: function(t) {
                    t = t || event,
                    t.preventDefault();
                    var e = {
                        x: t.offsetX,
                        y: t.offsetY
                    };
                    this.drawEnd(e),
                    this.isDrawing = !1
                },
                touchStart: function(t) {
                    if (t = t || event, t.preventDefault(), this.hasDrew = !0, 1 === t.touches.length) {
                        var e = {
                            x: t.targetTouches[0].clientX - this.$refs.canvas.getBoundingClientRect().left,
                            y: t.targetTouches[0].clientY - this.$refs.canvas.getBoundingClientRect().top
                        };
                        this.drawStart(e)
                    }
                },
                touchMove: function(t) {
                    if (t = t || event, t.preventDefault(), 1 === t.touches.length) {
                        var e = {
                            x: t.targetTouches[0].clientX - this.$refs.canvas.getBoundingClientRect().left,
                            y: t.targetTouches[0].clientY - this.$refs.canvas.getBoundingClientRect().top
                        };
                        this.drawMove(e)
                    }
                },
                touchEnd: function(t) {
                    if (t = t || event, t.preventDefault(), 1 === t.touches.length) {
                        var e = {
                            x: t.targetTouches[0].clientX - this.$refs.canvas.getBoundingClientRect().left,
                            y: t.targetTouches[0].clientY - this.$refs.canvas.getBoundingClientRect().top
                        };
                        this.drawEnd(e)
                    }
                },
                drawStart: function(t) {
                    this.startX = t.x,
                    this.startY = t.y,
                    this.canvasTxt.beginPath(),
                    this.canvasTxt.moveTo(this.startX, this.startY),
                    this.canvasTxt.lineTo(t.x, t.y),
                    this.canvasTxt.lineCap = "round",
                    this.canvasTxt.lineJoin = "round",
                    this.canvasTxt.lineWidth = this.lineWidth * this.sratio,
                    this.canvasTxt.stroke(),
                    this.canvasTxt.closePath(),
                    this.points.push(t)
                },
                drawMove: function(t) {
                    this.canvasTxt.beginPath(),
                    this.canvasTxt.moveTo(this.startX, this.startY),
                    this.canvasTxt.lineTo(t.x, t.y),
                    this.canvasTxt.strokeStyle = this.lineColor,
                    this.canvasTxt.lineWidth = this.lineWidth * this.sratio,
                    this.canvasTxt.lineCap = "round",
                    this.canvasTxt.lineJoin = "round",
                    this.canvasTxt.stroke(),
                    this.canvasTxt.closePath(),
                    this.startY = t.y,
                    this.startX = t.x,
                    this.points.push(t)
                },
                drawEnd: function(t) {
                    this.canvasTxt.beginPath(),
                    this.canvasTxt.moveTo(this.startX, this.startY),
                    this.canvasTxt.lineTo(t.x, t.y),
                    this.canvasTxt.lineCap = "round",
                    this.canvasTxt.lineJoin = "round",
                    this.canvasTxt.stroke(),
                    this.canvasTxt.closePath(),
                    this.points.push(t),
                    this.points.push({
                        x: -1,
                        y: -1
                    })
                },
                generate: function(t, e) {
                    var n = this;
                    if (this.name === t) {
                        var i = new Promise(function(t, e) {
                            if (n.hasDrew) {
                                var i = n.canvasTxt.getImageData(0, 0, n.$refs.canvas.width, n.$refs.canvas.height);
                                n.canvasTxt.globalCompositeOperation = "destination-over",
                                n.canvasTxt.fillStyle = n.myBg,
                                n.canvasTxt.fillRect(0, 0, n.$refs.canvas.width, n.$refs.canvas.height),
                                n.resultImg = n.$refs.canvas.toDataURL();
                                var s = n.resultImg;
                                if (n.canvasTxt.clearRect(0, 0, n.$refs.canvas.width, n.$refs.canvas.height), n.canvasTxt.putImageData(i, 0, 0), n.canvasTxt.globalCompositeOperation = "source-over", n.isCrop) {
                                    var a, r = n.getCropArea(i.data),
                                    o = document.createElement("canvas"),
                                    c = o.getContext("2d");
                                    o.width = r[2] - r[0],
                                    o.height = r[3] - r[1];
                                    var l = (a = n.canvasTxt).getImageData.apply(a, Object(f["a"])(r));
                                    c.globalCompositeOperation = "destination-over",
                                    c.putImageData(l, 0, 0),
                                    c.fillStyle = n.myBg,
                                    c.fillRect(0, 0, o.width, o.height),
                                    s = o.toDataURL(),
                                    o = null
                                }
                                t(s)
                            } else e("".concat(n.name, ": Not Signned!"))
                        });
                        e(i)
                    }
                },
                reset: function(t) {
                    this.name === t && (this.canvasTxt.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height), this.$emit("update:bgColor", "#ffffff"), this.$refs.canvas.style.background = "rgba(255, 255, 255, 0)", this.points = [], this.hasDrew = !1, this.resultImg = "")
                },
                getCropArea: function(t) {
                    for (var e = this.$refs.canvas.width,
                    n = 0,
                    i = this.$refs.canvas.height,
                    s = 0,
                    a = 0; a < this.$refs.canvas.width; a++) for (var r = 0; r < this.$refs.canvas.height; r++) {
                        var o = 4 * (a + this.$refs.canvas.width * r); (t[o] > 0 || t[o + 1] > 0 || t[o + 2] || t[o + 3] > 0) && (s = Math.max(r, s), n = Math.max(a, n), i = Math.min(r, i), e = Math.min(a, e))
                    }
                    e++,
                    n++,
                    i++,
                    s++;
                    var c = [e, i, n, s];
                    return c
                }
            }
        }),
        g = d,
        p = (n("a762"), Object(c["a"])(g, u, v, !1, null, "f8dc4756", null)),
        m = p.exports;
        m.install = function(t) {
            this.installed || (this.installed = !0, this.event = new t, t.component("eSignature", m), t.prototype.$esign = {
                reset: function(t) {
                    m.event.$emit("reset", t)
                },
                generate: function(t) {
                    return new Promise(function(e, n) {
                        m.event.$emit("generate", t,
                        function(t) {
                            t.then(function(t) {
                                e(t)
                            }).
                            catch(function(t) {
                                n(t)
                            })
                        })
                    })
                }
            })
        };
        var b = m;
        "undefined" !== typeof window && window.Vue && window.Vue.use(m),
        i["a"].use(b),
        new i["a"]({
            el: "#app",
            render: function(t) {
                return t(h)
            }
        })
    },
    a726: function(t, e, n) {},
    a762: function(t, e, n) {
        "use strict";
        var i = n("a726"),
        s = n.n(i);
        s.a
    },
    dfb7: function(t, e, n) {}
});
//# sourceMappingURL=app.d3bbbca3.js.map
