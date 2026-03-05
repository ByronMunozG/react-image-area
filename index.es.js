import ye, { Fragment as fe, useRef as se, useState as re, useCallback as $, useEffect as ge } from "react";
var le, ne = { exports: {} }, J = {}, ce, q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
process.env.NODE_ENV === "production" ? ne.exports = function() {
  if (le) return J;
  le = 1;
  var t = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function g(_, v, j) {
    var y = null;
    if (j !== void 0 && (y = "" + j), v.key !== void 0 && (y = "" + v.key), "key" in v) for (var S in j = {}, v) S !== "key" && (j[S] = v[S]);
    else j = v;
    return v = j.ref, { $$typeof: t, type: _, key: y, ref: v !== void 0 ? v : null, props: j };
  }
  return J.Fragment = l, J.jsx = g, J.jsxs = g, J;
}() : ne.exports = (ce || (ce = 1, process.env.NODE_ENV !== "production" && function() {
  function t(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === E ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case V:
        return "Profiler";
      case Z:
        return "StrictMode";
      case Y:
        return "Suspense";
      case N:
        return "SuspenseList";
      case G:
        return "Activity";
    }
    if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
      case Q:
        return "Portal";
      case te:
        return e.displayName || "Context";
      case ee:
        return (e._context.displayName || "Context") + ".Consumer";
      case u:
        var r = e.render;
        return (e = e.displayName) || (e = (e = r.displayName || r.name || "") !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case I:
        return (r = e.displayName || null) !== null ? r : t(e.type) || "Memo";
      case A:
        r = e._payload, e = e._init;
        try {
          return t(e(r));
        } catch {
        }
    }
    return null;
  }
  function l(e) {
    return "" + e;
  }
  function g(e) {
    try {
      l(e);
      var r = !1;
    } catch {
      r = !0;
    }
    if (r) {
      var n = (r = console).error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return n.call(r, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), l(e);
    }
  }
  function _(e) {
    if (e === D) return "<>";
    if (typeof e == "object" && e !== null && e.$$typeof === A) return "<...>";
    try {
      var r = t(e);
      return r ? "<" + r + ">" : "<...>";
    } catch {
      return "<...>";
    }
  }
  function v() {
    return Error("react-stack-top-frame");
  }
  function j() {
    var e = t(this.type);
    return o[e] || (o[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), (e = this.props.ref) !== void 0 ? e : null;
  }
  function y(e, r, n, i, b, s) {
    var w, p = r.children;
    if (p !== void 0) if (i) if (B(p)) {
      for (i = 0; i < p.length; i++) S(p[i]);
      Object.freeze && Object.freeze(p);
    } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
    else S(p);
    if (W.call(r, "key")) {
      p = t(e);
      var x = Object.keys(r).filter(function(f) {
        return f !== "key";
      });
      i = 0 < x.length ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}", c[p + i] || (x = 0 < x.length ? "{" + x.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, i, p, x, p), c[p + i] = !0);
    }
    if (p = null, n !== void 0 && (g(n), p = "" + n), function(f) {
      if (W.call(f, "key")) {
        var k = Object.getOwnPropertyDescriptor(f, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }(r) && (g(r.key), p = "" + r.key), "key" in r) for (var R in n = {}, r) R !== "key" && (n[R] = r[R]);
    else n = r;
    return p && function(f, k) {
      function C() {
        M || (M = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", k));
      }
      C.isReactWarning = !0, Object.defineProperty(f, "key", { get: C, configurable: !0 });
    }(n, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), function(f, k, C, F, H, a) {
      var U = C.ref;
      return f = { $$typeof: K, type: f, key: k, props: C, _owner: F }, (U !== void 0 ? U : null) !== null ? Object.defineProperty(f, "ref", { enumerable: !1, get: j }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: 0 }), Object.defineProperty(f, "_debugInfo", { configurable: !1, enumerable: !1, writable: !0, value: null }), Object.defineProperty(f, "_debugStack", { configurable: !1, enumerable: !1, writable: !0, value: H }), Object.defineProperty(f, "_debugTask", { configurable: !1, enumerable: !1, writable: !0, value: a }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }(e, p, n, (w = z.A) === null ? null : w.getOwner(), b, s);
  }
  function S(e) {
    P(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === A && (e._payload.status === "fulfilled" ? P(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
  }
  function P(e) {
    return typeof e == "object" && e !== null && e.$$typeof === K;
  }
  var M, L = ye, K = Symbol.for("react.transitional.element"), Q = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), te = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), E = Symbol.for("react.client.reference"), z = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, B = Array.isArray, X = console.createTask ? console.createTask : function() {
    return null;
  }, o = {}, h = (L = { react_stack_bottom_frame: function(e) {
    return e();
  } }).react_stack_bottom_frame.bind(L, v)(), d = X(_(v)), c = {};
  q.Fragment = D, q.jsx = function(e, r, n) {
    var i = 1e4 > z.recentlyCreatedOwnerStacks++;
    return y(e, r, n, !1, i ? Error("react-stack-top-frame") : h, i ? X(_(e)) : d);
  }, q.jsxs = function(e, r, n) {
    var i = 1e4 > z.recentlyCreatedOwnerStacks++;
    return y(e, r, n, !0, i ? Error("react-stack-top-frame") : h, i ? X(_(e)) : d);
  };
}()), q);
var m = ne.exports;
const ie = { x: 0, y: 0, width: 0, height: 0, unit: "px" };
function he(t, l, g) {
  return Math.min(Math.max(t, l), g);
}
const de = (t, l, g, _) => _ === "pixel" ? ae(t, l, g) : me(t, l, g), me = (t, l, g) => t.unit === "%" ? { ...ie, ...t, unit: "%" } : { unit: "%", x: t.x ? t.x / l * 100 : 0, y: t.y ? t.y / g * 100 : 0, width: t.width ? t.width / l * 100 : 0, height: t.height ? t.height / g * 100 : 0 };
function ae(t, l, g) {
  return t.unit ? t.unit === "px" ? { ...ie, ...t, unit: "px" } : { unit: "px", x: t.x ? t.x * l / 100 : 0, y: t.y ? t.y * g / 100 : 0, width: t.width ? t.width * l / 100 : 0, height: t.height ? t.height * g / 100 : 0 } : { ...ie, ...t, unit: "px" };
}
const ue = 10, O = { position: "absolute", outline: "1px solid rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.5)", width: ue, height: ue }, xe = () => m.jsxs(fe, { children: [m.jsx("div", { "data-dir": "s", "data-ord": "s", style: { ...O, bottom: 0, left: "50%", marginBottom: -5, marginLeft: -5, cursor: "s-resize" } }), m.jsx("div", { "data-dir": "n", "data-ord": "n", style: { ...O, top: 0, left: "50%", marginTop: -5, marginLeft: -5, cursor: "n-resize" } }), m.jsx("div", { "data-dir": "w", "data-ord": "w", style: { ...O, top: "50%", left: 0, marginTop: -5, marginLeft: -5, cursor: "w-resize" } }), m.jsx("div", { "data-dir": "e", "data-ord": "e", style: { ...O, top: "50%", right: 0, marginTop: -5, marginRight: -5, cursor: "e-resize" } }), m.jsx("div", { "data-dir": "se", "data-ord": "se", style: { ...O, bottom: 0, right: 0, marginBottom: -5, marginRight: -5, cursor: "se-resize" } }), m.jsx("div", { "data-dir": "sw", "data-ord": "sw", style: { ...O, bottom: 0, left: 0, marginBottom: -5, marginLeft: -5, cursor: "sw-resize" } }), m.jsx("div", { "data-dir": "nw", "data-ord": "nw", style: { ...O, top: 0, left: 0, marginTop: -5, marginLeft: -5, cursor: "nw-resize" } }), m.jsx("div", { "data-dir": "ne", "data-ord": "ne", style: { ...O, top: 0, right: 0, marginTop: -5, marginRight: -5, cursor: "ne-resize" } })] }), be = ({ area: t, onCropStart: l, showHandles: g, globalAreaStyle: _, customAreaRenderer: v, areaNumber: j }) => {
  const y = { top: `${t.y}${t.unit}`, left: `${t.x}${t.unit}`, width: `${t.width}${t.unit}`, height: `${t.height}${t.unit}` };
  return m.jsxs("div", { style: { position: "absolute", border: "1px dashed rgba(0,0,0,0.5)", outline: "1px dashed rgba(255,255,255,0.5)", cursor: "move", boxSizing: "border-box", touchAction: "none", ...y, ..._, ...t.areaStyle }, onPointerDown: l, "data-wrapper": "wrapper", children: [v ? v({ ...t, areaNumber: j }) : null, g ? m.jsx(xe, {}) : null] });
}, we = ({ areas: t }) => m.jsx("table", { style: { position: "absolute", right: 0, top: 8 }, children: m.jsx("tbody", { children: t.map((l, g) => m.jsxs("tr", { children: [m.jsxs("td", { children: ["x: ", Math.round(l.x)] }), m.jsxs("td", { children: ["y: ", Math.round(l.y)] }), m.jsxs("td", { children: ["width: ", Math.round(l.width)] }), m.jsxs("td", { children: ["height: ", Math.round(l.height)] }), m.jsxs("td", { children: ["unit: ", l.unit] })] }, g)) }) }), pe = (t, l) => t !== null && (!!l(t) || pe(t.parentElement, l)), T = { capture: !0, passive: !1 }, ve = ["e", "w"], je = ["n", "s"], Se = ["nw", "ne", "se", "sw"], ke = ({ maxAreas: t = 1 / 0, unit: l = "pixel", minWidth: g = 0, minHeight: _ = 0, debug: v = !1, children: j, areas: y, onChange: S, maxWidth: P, maxHeight: M, wrapperStyle: L, globalAreaStyle: K, customAreaRenderer: Q, mediaWrapperClassName: D }) => {
  const Z = se(null), V = se(null), [ee, te] = re(0), [u, Y] = re({ startClientX: 0, startClientY: 0, startAreaX: 0, startAreaY: 0, clientX: 0, clientY: 0, isResize: !1 }), [N, I] = re({ areaChangeIndex: 0, isChanging: !1 }), A = () => {
    const o = V.current;
    if (!o) return { x: 0, y: 0, width: 0, height: 0 };
    const { x: h, y: d, width: c, height: e } = o.getBoundingClientRect();
    return { x: h, y: d, width: c, height: e };
  }, G = $((o, h, d) => {
    const c = h - o.x, e = d - o.y < u.startAreaY;
    return c < u.startAreaX ? e ? "nw" : "sw" : e ? "ne" : "se";
  }, [u]), E = $((o) => {
    const h = A();
    return ae(o, h.width, h.height);
  }, []), z = $((o, h, d) => {
    const c = A(), e = E(o), r = h - u.startClientX, n = d - u.startClientY;
    return e.x = he(u.startAreaX + r, 0, c.width - e.width), e.y = he(u.startAreaY + n, 0, c.height - e.height), e;
  }, [u, E]), W = $((o, h, d) => {
    const c = A(), e = G(c, h, d), r = E(o), n = u.ord ? u.ord : e, i = h - u.startClientX, b = d - u.startClientY, s = { unit: "px", x: 0, y: 0, width: 0, height: 0, isChanging: !0, isNew: !1 };
    e === "ne" ? (s.x = u.startAreaX, s.width = i, s.height = Math.abs(b), s.y = u.startAreaY - s.height) : e === "se" ? (s.x = u.startAreaX, s.y = u.startAreaY, s.width = i, s.height = b) : e === "sw" ? (s.x = u.startAreaX + i, s.y = u.startAreaY, s.width = Math.abs(i), s.height = b) : e === "nw" && (s.x = u.startAreaX + i, s.width = Math.abs(i), s.height = Math.abs(b), s.y = u.startAreaY + b);
    const w = function(p, x, R, f, k = 0, C = 0, F = R, H = f) {
      const a = { ...p };
      a.y < 0 && (a.height = Math.max(a.height + a.y, C), a.y = 0), a.x < 0 && (a.width = Math.max(a.width + a.x, k), a.x = 0);
      const U = R - (a.x + a.width);
      U < 0 && (a.x = Math.min(a.x, R - k), a.width += U);
      const oe = f - (a.y + a.height);
      return oe < 0 && (a.y = Math.min(a.y, f - C), a.height += oe), a.width < k && (x !== "sw" && x !== "nw" || (a.x -= k - a.width), a.width = k), a.height < C && (x !== "nw" && x !== "ne" || (a.y -= C - a.height), a.height = C), a.width > F && (x !== "sw" && x !== "nw" || (a.x -= F - a.width), a.width = F), a.height > H && (x !== "nw" && x !== "ne" || (a.y -= H - a.height), a.height = H), a;
    }(s, e, c.width, c.height, g, _, P, M);
    return Se.indexOf(n) > -1 ? (r.x = w.x, r.y = w.y, r.width = w.width, r.height = w.height) : ve.indexOf(n) > -1 ? (r.x = w.x, r.width = w.width) : je.indexOf(n) > -1 && (r.y = w.y, r.height = w.height), r;
  }, [u, G, E, g, _, P, M]), B = $((o) => {
    o.preventDefault(), o.stopPropagation();
    const { isChanging: h, areaChangeIndex: d } = N;
    if (!h) return;
    const c = A(), e = y[d], r = o.clientX, n = o.clientY;
    let i;
    if (Y((w) => ({ ...w, clientX: r, clientY: n })), i = u.isResize ? W(e, r, n) : z(e, r, n), s = i, (b = e).width !== s.width || b.height !== s.height || b.x !== s.x || b.y !== s.y || b.unit !== s.unit) {
      const w = de(i, c.width, c.height, l);
      S([...y.slice(0, d), { ...w }, ...y.slice(d + 1)]);
    }
    var b, s;
  }, [N, y, u, z, S, l, W]), X = $((o) => {
    o.preventDefault(), o.stopPropagation();
    const { isChanging: h, areaChangeIndex: d } = N;
    if (h) {
      I({ isChanging: !1, areaChangeIndex: -1 }), Y({ startClientX: 0, startClientY: 0, startAreaX: 0, startAreaY: 0, clientX: 0, clientY: 0, isResize: !1 });
      const c = y[d];
      S([...y.slice(0, d), { ...c, isNew: !1, isChanging: !1 }, ...y.slice(d + 1)]);
    }
  }, [N, y, S]);
  return ge(() => (document.addEventListener("pointermove", B, T), document.addEventListener("pointerup", X, T), document.addEventListener("pointercancel", X, T), () => {
    document.removeEventListener("pointermove", B, T), document.removeEventListener("pointerup", X, T), document.removeEventListener("pointercancel", X, T);
  }), [B, X]), m.jsxs("div", { ref: Z, style: { position: "relative", display: "inline-block", cursor: "crosshair", boxSizing: "border-box", maxWidth: "100%", touchAction: "none", lineHeight: 0, ...L }, children: [m.jsx("div", { ref: V, onPointerDown: (o) => {
    const h = o.currentTarget;
    if (h.dataset.wrapper || h.dataset.direction || pe(h, (b) => {
      var s;
      return !!((s = b.dataset) != null && s.wrapper);
    })) return;
    o.preventDefault(), o.stopPropagation();
    const d = A(), c = o.clientX - d.x, e = o.clientY - d.y, r = { unit: "px", x: c, y: e, width: 0, height: 0, isChanging: !0, isNew: !0 };
    Y({ startClientX: o.clientX, startClientY: o.clientY, startAreaX: c, startAreaY: e, clientX: o.clientX, clientY: o.clientY, isResize: !0 }), te(ee + 1);
    const n = de(r, d.width, d.height, l);
    let i;
    y.length < t ? (S(y.concat(n)), i = y.length) : (S([...y.slice(0, t - 1), n]), i = t - 1), I({ areaChangeIndex: i, isChanging: !0 });
  }, style: { boxSizing: "border-box" }, className: D, children: j }), y.map((o, h) => m.jsx(be, { area: o, showHandles: !o.isNew, onCropStart: (d) => ((c, e) => {
    c.preventDefault(), c.stopPropagation();
    const r = A(), n = ae(y[e], r.width, r.height), i = c.target.dataset.ord, b = !!i;
    let s = c.clientX, w = c.clientY, p = n.x, x = n.y;
    i && (i === "ne" || i == "e" ? (p = n.x, x = n.y + n.height) : i === "se" || i === "s" ? (p = n.x, x = n.y) : i === "sw" || i == "w" ? (p = n.x + n.width, x = n.y) : i !== "nw" && i != "n" || (p = n.x + n.width, x = n.y + n.height), s = p + r.x, w = x + r.y), Y({ startClientX: s, startClientY: w, startAreaX: p, startAreaY: x, clientX: c.clientX, clientY: c.clientY, isResize: b, ord: i }), I({ isChanging: !0, areaChangeIndex: e });
  })(d, h), globalAreaStyle: K, customAreaRenderer: Q, areaNumber: h + 1 }, h)), v ? m.jsx(we, { areas: y }) : null] });
};
export {
  ke as AreaSelector
};
