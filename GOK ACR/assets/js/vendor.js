(self.webpackChunkasic = self.webpackChunkasic || []).push([
    [555], {
        443: function(e) {
            e.exports = function() {
                "use strict";

                function e(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function t(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, i)
                    }
                    return n
                }

                function n(n) {
                    for (var i = 1; i < arguments.length; i++) {
                        var r = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? t(Object(r), !0).forEach((function(t) {
                            e(n, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach((function(e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                        }))
                    }
                    return n
                }

                function i() {
                    return new Promise((e => {
                        "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
                    }))
                }

                function r(e) {
                    return Array.from(new Set(e))
                }

                function s() {
                    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")
                }

                function o(e, t) {
                    return e == t
                }

                function a(e, t) {
                    "template" !== e.tagName.toLowerCase() ? console.warn(`Alpine: [${t}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${t}`) : 1 !== e.content.childElementCount && console.warn(`Alpine: <template> tag with [${t}] encountered with multiple element roots. Make sure <template> only has a single child element.`)
                }

                function l(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
                }

                function c(e) {
                    return e.toLowerCase().replace(/-(\w)/g, ((e, t) => t.toUpperCase()))
                }

                function u(e, t) {
                    if (!1 === t(e)) return;
                    let n = e.firstElementChild;
                    for (; n;) u(n, t), n = n.nextElementSibling
                }

                function d(e, t) {
                    var n;
                    return function() {
                        var i = this,
                            r = arguments,
                            s = function() {
                                n = null, e.apply(i, r)
                            };
                        clearTimeout(n), n = setTimeout(s, t)
                    }
                }

                function f(e, t, n = {}) {
                    return "function" == typeof e ? e.call(t) : new Function(["$data", ...Object.keys(n)], `var __alpine_result; with($data) { __alpine_result = ${e} }; return __alpine_result`)(t, ...Object.values(n))
                }

                function m(e, t, n = {}) {
                    if ("function" == typeof e) return Promise.resolve(e.call(t, n.$event));
                    let i = Function;
                    if (i = Object.getPrototypeOf((async function() {})).constructor, Object.keys(t).includes(e)) {
                        let i = new Function(["dataContext", ...Object.keys(n)], `with(dataContext) { return ${e} }`)(t, ...Object.values(n));
                        return "function" == typeof i ? Promise.resolve(i.call(t, n.$event)) : Promise.resolve()
                    }
                    return Promise.resolve(new i(["dataContext", ...Object.keys(n)], `with(dataContext) { ${e} }`)(t, ...Object.values(n)))
                }
                const h = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;

                function p(e) {
                    const t = x(e.name);
                    return h.test(t)
                }

                function v(e, t, n) {
                    let i = Array.from(e.attributes).filter(p).map(b),
                        r = i.filter((e => "spread" === e.type))[0];
                    if (r) {
                        let e = f(r.expression, t.$data);
                        i = i.concat(Object.entries(e).map((([e, t]) => b({
                            name: e,
                            value: t
                        }))))
                    }
                    return n ? i.filter((e => e.type === n)) : y(i)
                }

                function y(e) {
                    let t = ["bind", "model", "show", "catch-all"];
                    return e.sort(((e, n) => {
                        let i = -1 === t.indexOf(e.type) ? "catch-all" : e.type,
                            r = -1 === t.indexOf(n.type) ? "catch-all" : n.type;
                        return t.indexOf(i) - t.indexOf(r)
                    }))
                }

                function b({
                    name: e,
                    value: t
                }) {
                    const n = x(e),
                        i = n.match(h),
                        r = n.match(/:([a-zA-Z0-9\-:]+)/),
                        s = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
                    return {
                        type: i ? i[1] : null,
                        value: r ? r[1] : null,
                        modifiers: s.map((e => e.replace(".", ""))),
                        expression: t
                    }
                }

                function g(e) {
                    return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
                }

                function x(e) {
                    return e.startsWith("@") ? e.replace("@", "x-on:") : e.startsWith(":") ? e.replace(":", "x-bind:") : e
                }

                function _(e, t = Boolean) {
                    return e.split(" ").filter(t)
                }
                const w = "in",
                    E = "out",
                    O = "cancelled";

                function k(e, t, n, i, r = !1) {
                    if (r) return t();
                    if (e.__x_transition && e.__x_transition.type === w) return;
                    const s = v(e, i, "transition"),
                        o = v(e, i, "show")[0];
                    if (o && o.modifiers.includes("transition")) {
                        let i = o.modifiers;
                        if (i.includes("out") && !i.includes("in")) return t();
                        const r = i.includes("in") && i.includes("out");
                        i = r ? i.filter(((e, t) => t < i.indexOf("out"))) : i, S(e, i, t, n)
                    } else s.some((e => ["enter", "enter-start", "enter-end"].includes(e.value))) ? j(e, i, s, t, n) : t()
                }

                function A(e, t, n, i, r = !1) {
                    if (r) return t();
                    if (e.__x_transition && e.__x_transition.type === E) return;
                    const s = v(e, i, "transition"),
                        o = v(e, i, "show")[0];
                    if (o && o.modifiers.includes("transition")) {
                        let i = o.modifiers;
                        if (i.includes("in") && !i.includes("out")) return t();
                        const r = i.includes("in") && i.includes("out");
                        i = r ? i.filter(((e, t) => t > i.indexOf("out"))) : i, $(e, i, r, t, n)
                    } else s.some((e => ["leave", "leave-start", "leave-end"].includes(e.value))) ? T(e, i, s, t, n) : t()
                }

                function S(e, t, n, i) {
                    C(e, t, n, (() => {}), i, {
                        duration: P(t, "duration", 150),
                        origin: P(t, "origin", "center"),
                        first: {
                            opacity: 0,
                            scale: P(t, "scale", 95)
                        },
                        second: {
                            opacity: 1,
                            scale: 100
                        }
                    }, w)
                }

                function $(e, t, n, i, r) {
                    C(e, t, (() => {}), i, r, {
                        duration: n ? P(t, "duration", 150) : P(t, "duration", 150) / 2,
                        origin: P(t, "origin", "center"),
                        first: {
                            opacity: 1,
                            scale: 100
                        },
                        second: {
                            opacity: 0,
                            scale: P(t, "scale", 95)
                        }
                    }, E)
                }

                function P(e, t, n) {
                    if (-1 === e.indexOf(t)) return n;
                    const i = e[e.indexOf(t) + 1];
                    if (!i) return n;
                    if ("scale" === t && !z(i)) return n;
                    if ("duration" === t) {
                        let e = i.match(/([0-9]+)ms/);
                        if (e) return e[1]
                    }
                    return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [i, e[e.indexOf(t) + 2]].join(" ") : i
                }

                function C(e, t, n, i, r, s, o) {
                    e.__x_transition && e.__x_transition.cancel && e.__x_transition.cancel();
                    const a = e.style.opacity,
                        l = e.style.transform,
                        c = e.style.transformOrigin,
                        u = !t.includes("opacity") && !t.includes("scale"),
                        d = u || t.includes("opacity"),
                        f = u || t.includes("scale"),
                        m = {
                            start() {
                                d && (e.style.opacity = s.first.opacity), f && (e.style.transform = `scale(${s.first.scale/100})`)
                            },
                            during() {
                                f && (e.style.transformOrigin = s.origin), e.style.transitionProperty = [d ? "opacity" : "", f ? "transform" : ""].join(" ").trim(), e.style.transitionDuration = s.duration / 1e3 + "s", e.style.transitionTimingFunction = "cubic-bezier(0.4, 0.0, 0.2, 1)"
                            },
                            show() {
                                n()
                            },
                            end() {
                                d && (e.style.opacity = s.second.opacity), f && (e.style.transform = `scale(${s.second.scale/100})`)
                            },
                            hide() {
                                i()
                            },
                            cleanup() {
                                d && (e.style.opacity = a), f && (e.style.transform = l), f && (e.style.transformOrigin = c), e.style.transitionProperty = null, e.style.transitionDuration = null, e.style.transitionTimingFunction = null
                            }
                        };
                    N(e, m, o, r)
                }
                const D = (e, t, n) => "function" == typeof e ? n.evaluateReturnExpression(t, e) : e;

                function j(e, t, n, i, r) {
                    L(e, _(D((n.find((e => "enter" === e.value)) || {
                        expression: ""
                    }).expression, e, t)), _(D((n.find((e => "enter-start" === e.value)) || {
                        expression: ""
                    }).expression, e, t)), _(D((n.find((e => "enter-end" === e.value)) || {
                        expression: ""
                    }).expression, e, t)), i, (() => {}), w, r)
                }

                function T(e, t, n, i, r) {
                    L(e, _(D((n.find((e => "leave" === e.value)) || {
                        expression: ""
                    }).expression, e, t)), _(D((n.find((e => "leave-start" === e.value)) || {
                        expression: ""
                    }).expression, e, t)), _(D((n.find((e => "leave-end" === e.value)) || {
                        expression: ""
                    }).expression, e, t)), (() => {}), i, E, r)
                }

                function L(e, t, n, i, r, s, o, a) {
                    e.__x_transition && e.__x_transition.cancel && e.__x_transition.cancel();
                    const l = e.__x_original_classes || [],
                        c = {
                            start() {
                                e.classList.add(...n)
                            },
                            during() {
                                e.classList.add(...t)
                            },
                            show() {
                                r()
                            },
                            end() {
                                e.classList.remove(...n.filter((e => !l.includes(e)))), e.classList.add(...i)
                            },
                            hide() {
                                s()
                            },
                            cleanup() {
                                e.classList.remove(...t.filter((e => !l.includes(e)))), e.classList.remove(...i.filter((e => !l.includes(e))))
                            }
                        };
                    N(e, c, o, a)
                }

                function N(e, t, n, i) {
                    const r = R((() => {
                        t.hide(), e.isConnected && t.cleanup(), delete e.__x_transition
                    }));
                    e.__x_transition = {
                        type: n,
                        cancel: R((() => {
                            i(O), r()
                        })),
                        finish: r,
                        nextFrame: null
                    }, t.start(), t.during(), e.__x_transition.nextFrame = requestAnimationFrame((() => {
                        let n = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", ""));
                        0 === n && (n = 1e3 * Number(getComputedStyle(e).animationDuration.replace("s", ""))), t.show(), e.__x_transition.nextFrame = requestAnimationFrame((() => {
                            t.end(), setTimeout(e.__x_transition.finish, n)
                        }))
                    }))
                }

                function z(e) {
                    return !Array.isArray(e) && !isNaN(e)
                }

                function R(e) {
                    let t = !1;
                    return function() {
                        t || (t = !0, e.apply(this, arguments))
                    }
                }

                function F(e, t, n, i, r) {
                    a(t, "x-for");
                    let s = I("function" == typeof n ? e.evaluateReturnExpression(t, n) : n),
                        o = q(e, t, s, r),
                        l = t;
                    o.forEach(((n, a) => {
                        let c = M(s, n, a, o, r()),
                            u = B(e, t, a, c),
                            d = W(l.nextElementSibling, u);
                        d ? (delete d.__x_for_key, d.__x_for = c, e.updateElements(d, (() => d.__x_for))) : (d = U(t, l), k(d, (() => {}), (() => {}), e, i), d.__x_for = c, e.initializeElements(d, (() => d.__x_for))), l = d, l.__x_for_key = u
                    })), K(l, e)
                }

                function I(e) {
                    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                        n = /^\(|\)$/g,
                        i = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
                        r = e.match(i);
                    if (!r) return;
                    let s = {};
                    s.items = r[2].trim();
                    let o = r[1].trim().replace(n, ""),
                        a = o.match(t);
                    return a ? (s.item = o.replace(t, "").trim(), s.index = a[1].trim(), a[2] && (s.collection = a[2].trim())) : s.item = o, s
                }

                function M(e, t, i, r, s) {
                    let o = s ? n({}, s) : {};
                    return o[e.item] = t, e.index && (o[e.index] = i), e.collection && (o[e.collection] = r), o
                }

                function B(e, t, n, i) {
                    let r = v(t, e, "bind").filter((e => "key" === e.value))[0];
                    return r ? e.evaluateReturnExpression(t, r.expression, (() => i)) : n
                }

                function q(e, t, n, i) {
                    let r = v(t, e, "if")[0];
                    if (r && !e.evaluateReturnExpression(t, r.expression)) return [];
                    let s = e.evaluateReturnExpression(t, n.items, i);
                    return z(s) && s > 0 && (s = Array.from(Array(s).keys(), (e => e + 1))), s
                }

                function U(e, t) {
                    let n = document.importNode(e.content, !0);
                    return t.parentElement.insertBefore(n, t.nextElementSibling), t.nextElementSibling
                }

                function W(e, t) {
                    if (!e) return;
                    if (e.__x_for_key === t) return e;
                    let n = e;
                    for (; n;) {
                        if (n.__x_for_key === t) return n.parentElement.insertBefore(n, e);
                        n = !(!n.nextElementSibling || void 0 === n.nextElementSibling.__x_for_key) && n.nextElementSibling
                    }
                }

                function K(e, t) {
                    for (var n = !(!e.nextElementSibling || void 0 === e.nextElementSibling.__x_for_key) && e.nextElementSibling; n;) {
                        let e = n,
                            i = n.nextElementSibling;
                        A(n, (() => {
                            e.remove()
                        }), (() => {}), t), n = !(!i || void 0 === i.__x_for_key) && i
                    }
                }

                function G(e, t, n, i, s, a, l) {
                    var u = e.evaluateReturnExpression(t, i, s);
                    if ("value" === n) {
                        if (We.ignoreFocusedForValueBinding && document.activeElement.isSameNode(t)) return;
                        if (void 0 === u && i.match(/\./) && (u = ""), "radio" === t.type) void 0 === t.attributes.value && "bind" === a ? t.value = u : "bind" !== a && (t.checked = o(t.value, u));
                        else if ("checkbox" === t.type) "boolean" == typeof u || [null, void 0].includes(u) || "bind" !== a ? "bind" !== a && (Array.isArray(u) ? t.checked = u.some((e => o(e, t.value))) : t.checked = !!u) : t.value = String(u);
                        else if ("SELECT" === t.tagName) V(t, u);
                        else {
                            if (t.value === u) return;
                            t.value = u
                        }
                    } else if ("class" === n)
                        if (Array.isArray(u)) {
                            const e = t.__x_original_classes || [];
                            t.setAttribute("class", r(e.concat(u)).join(" "))
                        } else if ("object" == typeof u) Object.keys(u).sort(((e, t) => u[e] - u[t])).forEach((e => {
                        u[e] ? _(e).forEach((e => t.classList.add(e))) : _(e).forEach((e => t.classList.remove(e)))
                    }));
                    else {
                        const e = t.__x_original_classes || [],
                            n = _(u);
                        t.setAttribute("class", r(e.concat(n)).join(" "))
                    } else n = l.includes("camel") ? c(n) : n, [null, void 0, !1].includes(u) ? t.removeAttribute(n) : g(n) ? H(t, n, n) : H(t, n, u)
                }

                function H(e, t, n) {
                    e.getAttribute(t) != n && e.setAttribute(t, n)
                }

                function V(e, t) {
                    const n = [].concat(t).map((e => e + ""));
                    Array.from(e.options).forEach((e => {
                        e.selected = n.includes(e.value || e.text)
                    }))
                }

                function Z(e, t, n) {
                    void 0 === t && n.match(/\./) && (t = ""), e.textContent = t
                }

                function J(e, t, n, i) {
                    t.innerHTML = e.evaluateReturnExpression(t, n, i)
                }

                function Q(e, t, n, i, r = !1) {
                    const s = () => {
                            t.style.display = "none", t.__x_is_shown = !1
                        },
                        o = () => {
                            1 === t.style.length && "none" === t.style.display ? t.removeAttribute("style") : t.style.removeProperty("display"), t.__x_is_shown = !0
                        };
                    if (!0 === r) return void(n ? o() : s());
                    const a = (i, r) => {
                        n ? (("none" === t.style.display || t.__x_transition) && k(t, (() => {
                            o()
                        }), r, e), i((() => {}))) : "none" !== t.style.display ? A(t, (() => {
                            i((() => {
                                s()
                            }))
                        }), r, e) : i((() => {}))
                    };
                    i.includes("immediate") ? a((e => e()), (() => {})) : (e.showDirectiveLastElement && !e.showDirectiveLastElement.contains(t) && e.executeAndClearRemainingShowDirectiveStack(), e.showDirectiveStack.push(a), e.showDirectiveLastElement = t)
                }

                function X(e, t, n, i, r) {
                    a(t, "x-if");
                    const s = t.nextElementSibling && !0 === t.nextElementSibling.__x_inserted_me;
                    if (!n || s && !t.__x_transition) !n && s && A(t.nextElementSibling, (() => {
                        t.nextElementSibling.remove()
                    }), (() => {}), e, i);
                    else {
                        const n = document.importNode(t.content, !0);
                        t.parentElement.insertBefore(n, t.nextElementSibling), k(t.nextElementSibling, (() => {}), (() => {}), e, i), e.initializeElements(t.nextElementSibling, r), t.nextElementSibling.__x_inserted_me = !0
                    }
                }

                function Y(e, t, n, i, r, s = {}) {
                    const o = {
                        passive: i.includes("passive")
                    };
                    if (i.includes("camel") && (n = c(n)), i.includes("away")) {
                        let a = l => {
                            t.contains(l.target) || t.offsetWidth < 1 && t.offsetHeight < 1 || (ee(e, r, l, s), i.includes("once") && document.removeEventListener(n, a, o))
                        };
                        document.addEventListener(n, a, o)
                    } else {
                        let a = i.includes("window") ? window : i.includes("document") ? document : t,
                            l = c => {
                                a !== window && a !== document || document.body.contains(t) ? te(n) && ne(c, i) || (i.includes("prevent") && c.preventDefault(), i.includes("stop") && c.stopPropagation(), i.includes("self") && c.target !== t) || ee(e, r, c, s).then((e => {
                                    !1 === e ? c.preventDefault() : i.includes("once") && a.removeEventListener(n, l, o)
                                })) : a.removeEventListener(n, l, o)
                            };
                        if (i.includes("debounce")) {
                            let e = i[i.indexOf("debounce") + 1] || "invalid-wait",
                                t = z(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
                            l = d(l, t)
                        }
                        a.addEventListener(n, l, o)
                    }
                }

                function ee(e, t, i, r) {
                    return e.evaluateCommandExpression(i.target, t, (() => n(n({}, r()), {}, {
                        $event: i
                    })))
                }

                function te(e) {
                    return ["keydown", "keyup"].includes(e)
                }

                function ne(e, t) {
                    let n = t.filter((e => !["window", "document", "prevent", "stop"].includes(e)));
                    if (n.includes("debounce")) {
                        let e = n.indexOf("debounce");
                        n.splice(e, z((n[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                    }
                    if (0 === n.length) return !1;
                    if (1 === n.length && n[0] === ie(e.key)) return !1;
                    const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((e => n.includes(e)));
                    return n = n.filter((e => !i.includes(e))), !(i.length > 0 && i.filter((t => ("cmd" !== t && "super" !== t || (t = "meta"), e[`${t}Key`]))).length === i.length && n[0] === ie(e.key))
                }

                function ie(e) {
                    switch (e) {
                        case "/":
                            return "slash";
                        case " ":
                        case "Spacebar":
                            return "space";
                        default:
                            return e && l(e)
                    }
                }

                function re(e, t, i, r, s) {
                    var o = "select" === t.tagName.toLowerCase() || ["checkbox", "radio"].includes(t.type) || i.includes("lazy") ? "change" : "input";
                    Y(e, t, o, i, `${r} = rightSideOfExpression($event, ${r})`, (() => n(n({}, s()), {}, {
                        rightSideOfExpression: se(t, i, r)
                    })))
                }

                function se(e, t, n) {
                    return "radio" === e.type && (e.hasAttribute("name") || e.setAttribute("name", n)), (n, i) => {
                        if (n instanceof CustomEvent && n.detail) return n.detail;
                        if ("checkbox" === e.type) {
                            if (Array.isArray(i)) {
                                const e = t.includes("number") ? oe(n.target.value) : n.target.value;
                                return n.target.checked ? i.concat([e]) : i.filter((t => !o(t, e)))
                            }
                            return n.target.checked
                        }
                        if ("select" === e.tagName.toLowerCase() && e.multiple) return t.includes("number") ? Array.from(n.target.selectedOptions).map((e => oe(e.value || e.text))) : Array.from(n.target.selectedOptions).map((e => e.value || e.text)); {
                            const e = n.target.value;
                            return t.includes("number") ? oe(e) : t.includes("trim") ? e.trim() : e
                        }
                    }
                }

                function oe(e) {
                    const t = e ? parseFloat(e) : null;
                    return z(t) ? t : e
                }
                const {
                    isArray: ae
                } = Array, {
                    getPrototypeOf: le,
                    create: ce,
                    defineProperty: ue,
                    defineProperties: de,
                    isExtensible: fe,
                    getOwnPropertyDescriptor: me,
                    getOwnPropertyNames: he,
                    getOwnPropertySymbols: pe,
                    preventExtensions: ve,
                    hasOwnProperty: ye
                } = Object, {
                    push: be,
                    concat: ge,
                    map: xe
                } = Array.prototype;

                function _e(e) {
                    return void 0 === e
                }

                function we(e) {
                    return "function" == typeof e
                }

                function Ee(e) {
                    return "object" == typeof e
                }
                const Oe = new WeakMap;

                function ke(e, t) {
                    Oe.set(e, t)
                }
                const Ae = e => Oe.get(e) || e;

                function Se(e, t) {
                    return e.valueIsObservable(t) ? e.getProxy(t) : t
                }

                function $e(e) {
                    return ye.call(e, "value") && (e.value = Ae(e.value)), e
                }

                function Pe(e, t, n) {
                    ge.call(he(n), pe(n)).forEach((i => {
                        let r = me(n, i);
                        r.configurable || (r = Ie(e, r, Se)), ue(t, i, r)
                    })), ve(t)
                }
                class Ce {
                    constructor(e, t) {
                        this.originalTarget = t, this.membrane = e
                    }
                    get(e, t) {
                        const {
                            originalTarget: n,
                            membrane: i
                        } = this, r = n[t], {
                            valueObserved: s
                        } = i;
                        return s(n, t), i.getProxy(r)
                    }
                    set(e, t, n) {
                        const {
                            originalTarget: i,
                            membrane: {
                                valueMutated: r
                            }
                        } = this;
                        return i[t] !== n ? (i[t] = n, r(i, t)) : "length" === t && ae(i) && r(i, t), !0
                    }
                    deleteProperty(e, t) {
                        const {
                            originalTarget: n,
                            membrane: {
                                valueMutated: i
                            }
                        } = this;
                        return delete n[t], i(n, t), !0
                    }
                    apply(e, t, n) {}
                    construct(e, t, n) {}
                    has(e, t) {
                        const {
                            originalTarget: n,
                            membrane: {
                                valueObserved: i
                            }
                        } = this;
                        return i(n, t), t in n
                    }
                    ownKeys(e) {
                        const {
                            originalTarget: t
                        } = this;
                        return ge.call(he(t), pe(t))
                    }
                    isExtensible(e) {
                        const t = fe(e);
                        if (!t) return t;
                        const {
                            originalTarget: n,
                            membrane: i
                        } = this, r = fe(n);
                        return r || Pe(i, e, n), r
                    }
                    setPrototypeOf(e, t) {}
                    getPrototypeOf(e) {
                        const {
                            originalTarget: t
                        } = this;
                        return le(t)
                    }
                    getOwnPropertyDescriptor(e, t) {
                        const {
                            originalTarget: n,
                            membrane: i
                        } = this, {
                            valueObserved: r
                        } = this.membrane;
                        r(n, t);
                        let s = me(n, t);
                        if (_e(s)) return s;
                        const o = me(e, t);
                        return _e(o) ? (s = Ie(i, s, Se), s.configurable || ue(e, t, s), s) : o
                    }
                    preventExtensions(e) {
                        const {
                            originalTarget: t,
                            membrane: n
                        } = this;
                        return Pe(n, e, t), ve(t), !0
                    }
                    defineProperty(e, t, n) {
                        const {
                            originalTarget: i,
                            membrane: r
                        } = this, {
                            valueMutated: s
                        } = r, {
                            configurable: o
                        } = n;
                        if (ye.call(n, "writable") && !ye.call(n, "value")) {
                            const e = me(i, t);
                            n.value = e.value
                        }
                        return ue(i, t, $e(n)), !1 === o && ue(e, t, Ie(r, n, Se)), s(i, t), !0
                    }
                }

                function De(e, t) {
                    return e.valueIsObservable(t) ? e.getReadOnlyProxy(t) : t
                }
                class je {
                    constructor(e, t) {
                        this.originalTarget = t, this.membrane = e
                    }
                    get(e, t) {
                        const {
                            membrane: n,
                            originalTarget: i
                        } = this, r = i[t], {
                            valueObserved: s
                        } = n;
                        return s(i, t), n.getReadOnlyProxy(r)
                    }
                    set(e, t, n) {
                        return !1
                    }
                    deleteProperty(e, t) {
                        return !1
                    }
                    apply(e, t, n) {}
                    construct(e, t, n) {}
                    has(e, t) {
                        const {
                            originalTarget: n,
                            membrane: {
                                valueObserved: i
                            }
                        } = this;
                        return i(n, t), t in n
                    }
                    ownKeys(e) {
                        const {
                            originalTarget: t
                        } = this;
                        return ge.call(he(t), pe(t))
                    }
                    setPrototypeOf(e, t) {}
                    getOwnPropertyDescriptor(e, t) {
                        const {
                            originalTarget: n,
                            membrane: i
                        } = this, {
                            valueObserved: r
                        } = i;
                        r(n, t);
                        let s = me(n, t);
                        if (_e(s)) return s;
                        const o = me(e, t);
                        return _e(o) ? (s = Ie(i, s, De), ye.call(s, "set") && (s.set = void 0), s.configurable || ue(e, t, s), s) : o
                    }
                    preventExtensions(e) {
                        return !1
                    }
                    defineProperty(e, t, n) {
                        return !1
                    }
                }

                function Te(e) {
                    let t;
                    return ae(e) ? t = [] : Ee(e) && (t = {}), t
                }
                const Le = Object.prototype;

                function Ne(e) {
                    if (null === e) return !1;
                    if ("object" != typeof e) return !1;
                    if (ae(e)) return !0;
                    const t = le(e);
                    return t === Le || null === t || null === le(t)
                }
                const ze = (e, t) => {},
                    Re = (e, t) => {},
                    Fe = e => e;

                function Ie(e, t, n) {
                    const {
                        set: i,
                        get: r
                    } = t;
                    return ye.call(t, "value") ? t.value = n(e, t.value) : (_e(r) || (t.get = function() {
                        return n(e, r.call(Ae(this)))
                    }), _e(i) || (t.set = function(t) {
                        i.call(Ae(this), e.unwrapProxy(t))
                    })), t
                }
                class Me {
                    constructor(e) {
                        if (this.valueDistortion = Fe, this.valueMutated = Re, this.valueObserved = ze, this.valueIsObservable = Ne, this.objectGraph = new WeakMap, !_e(e)) {
                            const {
                                valueDistortion: t,
                                valueMutated: n,
                                valueObserved: i,
                                valueIsObservable: r
                            } = e;
                            this.valueDistortion = we(t) ? t : Fe, this.valueMutated = we(n) ? n : Re, this.valueObserved = we(i) ? i : ze, this.valueIsObservable = we(r) ? r : Ne
                        }
                    }
                    getProxy(e) {
                        const t = Ae(e),
                            n = this.valueDistortion(t);
                        if (this.valueIsObservable(n)) {
                            const i = this.getReactiveState(t, n);
                            return i.readOnly === e ? e : i.reactive
                        }
                        return n
                    }
                    getReadOnlyProxy(e) {
                        e = Ae(e);
                        const t = this.valueDistortion(e);
                        return this.valueIsObservable(t) ? this.getReactiveState(e, t).readOnly : t
                    }
                    unwrapProxy(e) {
                        return Ae(e)
                    }
                    getReactiveState(e, t) {
                        const {
                            objectGraph: n
                        } = this;
                        let i = n.get(t);
                        if (i) return i;
                        const r = this;
                        return i = {
                            get reactive() {
                                const n = new Ce(r, t),
                                    i = new Proxy(Te(t), n);
                                return ke(i, e), ue(this, "reactive", {
                                    value: i
                                }), i
                            },
                            get readOnly() {
                                const n = new je(r, t),
                                    i = new Proxy(Te(t), n);
                                return ke(i, e), ue(this, "readOnly", {
                                    value: i
                                }), i
                            }
                        }, n.set(t, i), i
                    }
                }

                function Be(e, t) {
                    let n = new Me({
                        valueMutated(e, n) {
                            t(e, n)
                        }
                    });
                    return {
                        data: n.getProxy(e),
                        membrane: n
                    }
                }

                function qe(e, t) {
                    let n = e.unwrapProxy(t),
                        i = {};
                    return Object.keys(n).forEach((e => {
                        ["$el", "$refs", "$nextTick", "$watch"].includes(e) || (i[e] = n[e])
                    })), i
                }
                class Ue {
                    constructor(e, t = null) {
                        this.$el = e;
                        const n = this.$el.getAttribute("x-data"),
                            i = "" === n ? "{}" : n,
                            r = this.$el.getAttribute("x-init");
                        let s = {
                                $el: this.$el
                            },
                            o = t ? t.$el : this.$el;
                        Object.entries(We.magicProperties).forEach((([e, t]) => {
                            Object.defineProperty(s, `$${e}`, {
                                get: function() {
                                    return t(o)
                                }
                            })
                        })), this.unobservedData = t ? t.getUnobservedData() : f(i, s);
                        let {
                            membrane: a,
                            data: l
                        } = this.wrapDataInObservable(this.unobservedData);
                        var c;
                        this.$data = l, this.membrane = a, this.unobservedData.$el = this.$el, this.unobservedData.$refs = this.getRefsProxy(), this.nextTickStack = [], this.unobservedData.$nextTick = e => {
                            this.nextTickStack.push(e)
                        }, this.watchers = {}, this.unobservedData.$watch = (e, t) => {
                            this.watchers[e] || (this.watchers[e] = []), this.watchers[e].push(t)
                        }, Object.entries(We.magicProperties).forEach((([e, t]) => {
                            Object.defineProperty(this.unobservedData, `$${e}`, {
                                get: function() {
                                    return t(o)
                                }
                            })
                        })), this.showDirectiveStack = [], this.showDirectiveLastElement, t || We.onBeforeComponentInitializeds.forEach((e => e(this))), r && !t && (this.pauseReactivity = !0, c = this.evaluateReturnExpression(this.$el, r), this.pauseReactivity = !1), this.initializeElements(this.$el), this.listenForNewElementsToInitialize(), "function" == typeof c && c.call(this.$data), t || setTimeout((() => {
                            We.onComponentInitializeds.forEach((e => e(this)))
                        }), 0)
                    }
                    getUnobservedData() {
                        return qe(this.membrane, this.$data)
                    }
                    wrapDataInObservable(e) {
                        var t = this;
                        let n = d((function() {
                            t.updateElements(t.$el)
                        }), 0);
                        return Be(e, ((e, i) => {
                            t.watchers[i] ? t.watchers[i].forEach((t => t(e[i]))) : Array.isArray(e) ? Object.keys(t.watchers).forEach((n => {
                                let r = n.split(".");
                                "length" !== i && r.reduce(((i, r) => (Object.is(e, i[r]) && t.watchers[n].forEach((t => t(e))), i[r])), t.unobservedData)
                            })) : Object.keys(t.watchers).filter((e => e.includes("."))).forEach((n => {
                                let r = n.split(".");
                                i === r[r.length - 1] && r.reduce(((r, s) => (Object.is(e, r) && t.watchers[n].forEach((t => t(e[i]))), r[s])), t.unobservedData)
                            })), t.pauseReactivity || n()
                        }))
                    }
                    walkAndSkipNestedComponents(e, t, n = (() => {})) {
                        u(e, (e => e.hasAttribute("x-data") && !e.isSameNode(this.$el) ? (e.__x || n(e), !1) : t(e)))
                    }
                    initializeElements(e, t = (() => {})) {
                        this.walkAndSkipNestedComponents(e, (e => void 0 === e.__x_for_key && void 0 === e.__x_inserted_me && void this.initializeElement(e, t)), (e => {
                            e.__x = new Ue(e)
                        })), this.executeAndClearRemainingShowDirectiveStack(), this.executeAndClearNextTickStack(e)
                    }
                    initializeElement(e, t) {
                        e.hasAttribute("class") && v(e, this).length > 0 && (e.__x_original_classes = _(e.getAttribute("class"))), this.registerListeners(e, t), this.resolveBoundAttributes(e, !0, t)
                    }
                    updateElements(e, t = (() => {})) {
                        this.walkAndSkipNestedComponents(e, (e => {
                            if (void 0 !== e.__x_for_key && !e.isSameNode(this.$el)) return !1;
                            this.updateElement(e, t)
                        }), (e => {
                            e.__x = new Ue(e)
                        })), this.executeAndClearRemainingShowDirectiveStack(), this.executeAndClearNextTickStack(e)
                    }
                    executeAndClearNextTickStack(e) {
                        e === this.$el && this.nextTickStack.length > 0 && requestAnimationFrame((() => {
                            for (; this.nextTickStack.length > 0;) this.nextTickStack.shift()()
                        }))
                    }
                    executeAndClearRemainingShowDirectiveStack() {
                        this.showDirectiveStack.reverse().map((e => new Promise(((t, n) => {
                            e(t, n)
                        })))).reduce(((e, t) => e.then((() => t.then((e => {
                            e()
                        }))))), Promise.resolve((() => {}))).catch((e => {
                            if (e !== O) throw e
                        })), this.showDirectiveStack = [], this.showDirectiveLastElement = void 0
                    }
                    updateElement(e, t) {
                        this.resolveBoundAttributes(e, !1, t)
                    }
                    registerListeners(e, t) {
                        v(e, this).forEach((({
                            type: n,
                            value: i,
                            modifiers: r,
                            expression: s
                        }) => {
                            switch (n) {
                                case "on":
                                    Y(this, e, i, r, s, t);
                                    break;
                                case "model":
                                    re(this, e, r, s, t)
                            }
                        }))
                    }
                    resolveBoundAttributes(e, t = !1, n) {
                        let i = v(e, this);
                        i.forEach((({
                            type: r,
                            value: s,
                            modifiers: o,
                            expression: a
                        }) => {
                            switch (r) {
                                case "model":
                                    G(this, e, "value", a, n, r, o);
                                    break;
                                case "bind":
                                    if ("template" === e.tagName.toLowerCase() && "key" === s) return;
                                    G(this, e, s, a, n, r, o);
                                    break;
                                case "text":
                                    var l = this.evaluateReturnExpression(e, a, n);
                                    Z(e, l, a);
                                    break;
                                case "html":
                                    J(this, e, a, n);
                                    break;
                                case "show":
                                    l = this.evaluateReturnExpression(e, a, n), Q(this, e, l, o, t);
                                    break;
                                case "if":
                                    if (i.some((e => "for" === e.type))) return;
                                    l = this.evaluateReturnExpression(e, a, n), X(this, e, l, t, n);
                                    break;
                                case "for":
                                    F(this, e, a, t, n);
                                    break;
                                case "cloak":
                                    e.removeAttribute("x-cloak")
                            }
                        }))
                    }
                    evaluateReturnExpression(e, t, i = (() => {})) {
                        return f(t, this.$data, n(n({}, i()), {}, {
                            $dispatch: this.getDispatchFunction(e)
                        }))
                    }
                    evaluateCommandExpression(e, t, i = (() => {})) {
                        return m(t, this.$data, n(n({}, i()), {}, {
                            $dispatch: this.getDispatchFunction(e)
                        }))
                    }
                    getDispatchFunction(e) {
                        return (t, n = {}) => {
                            e.dispatchEvent(new CustomEvent(t, {
                                detail: n,
                                bubbles: !0
                            }))
                        }
                    }
                    listenForNewElementsToInitialize() {
                        const e = this.$el,
                            t = {
                                childList: !0,
                                attributes: !0,
                                subtree: !0
                            };
                        new MutationObserver((e => {
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t].target.closest("[x-data]");
                                if (n && n.isSameNode(this.$el)) {
                                    if ("attributes" === e[t].type && "x-data" === e[t].attributeName) {
                                        const n = f(e[t].target.getAttribute("x-data") || "{}", {
                                            $el: this.$el
                                        });
                                        Object.keys(n).forEach((e => {
                                            this.$data[e] !== n[e] && (this.$data[e] = n[e])
                                        }))
                                    }
                                    e[t].addedNodes.length > 0 && e[t].addedNodes.forEach((e => {
                                        1 !== e.nodeType || e.__x_inserted_me || (!e.matches("[x-data]") || e.__x ? this.initializeElements(e) : e.__x = new Ue(e))
                                    }))
                                }
                            }
                        })).observe(e, t)
                    }
                    getRefsProxy() {
                        var e = this;
                        return new Proxy({}, {
                            get(t, n) {
                                return "$isAlpineProxy" === n || (e.walkAndSkipNestedComponents(e.$el, (e => {
                                    e.hasAttribute("x-ref") && e.getAttribute("x-ref") === n && (i = e)
                                })), i);
                                var i
                            }
                        })
                    }
                }
                const We = {
                    version: "2.7.3",
                    pauseMutationObserver: !1,
                    magicProperties: {},
                    onComponentInitializeds: [],
                    onBeforeComponentInitializeds: [],
                    ignoreFocusedForValueBinding: !1,
                    start: async function() {
                        s() || await i(), this.discoverComponents((e => {
                            this.initializeComponent(e)
                        })), document.addEventListener("turbolinks:load", (() => {
                            this.discoverUninitializedComponents((e => {
                                this.initializeComponent(e)
                            }))
                        })), this.listenForNewUninitializedComponentsAtRunTime()
                    },
                    discoverComponents: function(e) {
                        document.querySelectorAll("[x-data]").forEach((t => {
                            e(t)
                        }))
                    },
                    discoverUninitializedComponents: function(e, t = null) {
                        const n = (t || document).querySelectorAll("[x-data]");
                        Array.from(n).filter((e => void 0 === e.__x)).forEach((t => {
                            e(t)
                        }))
                    },
                    listenForNewUninitializedComponentsAtRunTime: function() {
                        const e = document.querySelector("body"),
                            t = {
                                childList: !0,
                                attributes: !0,
                                subtree: !0
                            };
                        new MutationObserver((e => {
                            if (!this.pauseMutationObserver)
                                for (let t = 0; t < e.length; t++) e[t].addedNodes.length > 0 && e[t].addedNodes.forEach((e => {
                                    1 === e.nodeType && (e.parentElement && e.parentElement.closest("[x-data]") || this.discoverUninitializedComponents((e => {
                                        this.initializeComponent(e)
                                    }), e.parentElement))
                                }))
                        })).observe(e, t)
                    },
                    initializeComponent: function(e) {
                        if (!e.__x) try {
                            e.__x = new Ue(e)
                        } catch (e) {
                            setTimeout((() => {
                                throw e
                            }), 0)
                        }
                    },
                    clone: function(e, t) {
                        t.__x || (t.__x = new Ue(t, e))
                    },
                    addMagicProperty: function(e, t) {
                        this.magicProperties[e] = t
                    },
                    onComponentInitialized: function(e) {
                        this.onComponentInitializeds.push(e)
                    },
                    onBeforeComponentInitialized: function(e) {
                        this.onBeforeComponentInitializeds.push(e)
                    }
                };
                return s() || (window.Alpine = We, window.deferLoadingAlpine ? window.deferLoadingAlpine((function() {
                    window.Alpine.start()
                })) : window.Alpine.start()), We
            }()
        }
    }
]);