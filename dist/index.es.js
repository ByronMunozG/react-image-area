import ye, { Fragment as fe, useRef as oe, useState as te, useCallback as E, useEffect as ge } from "react";
var se, re = { exports: {} }, F = {}, le, ce, G = {};
function me() {
  return le || (le = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.$$typeof === R ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case D:
          return "Fragment";
        case U:
          return "Profiler";
        case Q:
          return "StrictMode";
        case O:
          return "Suspense";
        case N:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
        case q:
          return "Portal";
        case ee:
          return e.displayName || "Context";
        case Z:
          return (e._context.displayName || "Context") + ".Consumer";
        case c:
          var n = e.render;
          return (e = e.displayName) || (e = (e = n.displayName || n.name || "") !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case I:
          return (n = e.displayName || null) !== null ? n : r(e.type) || "Memo";
        case _:
          n = e._payload, e = e._init;
          try {
            return r(e(n));
          } catch {
          }
      }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function f(e) {
      try {
        u(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        var i = (n = console).error, t = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(n, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", t), u(e);
      }
    }
    function S(e) {
      if (e === D) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === _) return "<...>";
      try {
        var n = r(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function x() {
      return Error("react-stack-top-frame");
    }
    function v() {
      var e = r(this.type);
      return o[e] || (o[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), (e = this.props.ref) !== void 0 ? e : null;
    }
    function y(e, n, i, t, m, $) {
      var w, h = n.children;
      if (h !== void 0) if (t) if (B(h)) {
        for (t = 0; t < h.length; t++) j(h[t]);
        Object.freeze && Object.freeze(h);
      } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
      else j(h);
      if (W.call(n, "key")) {
        h = r(e);
        var b = Object.keys(n).filter(function(p) {
          return p !== "key";
        });
        t = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", l[h + t] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, t, h, b, h), l[h + t] = !0);
      }
      if (h = null, i !== void 0 && (f(i), h = "" + i), (function(p) {
        if (W.call(p, "key")) {
          var k = Object.getOwnPropertyDescriptor(p, "key").get;
          if (k && k.isReactWarning) return !1;
        }
        return p.key !== void 0;
      })(n) && (f(n.key), h = "" + n.key), "key" in n) for (var A in i = {}, n) A !== "key" && (i[A] = n[A]);
      else i = n;
      return h && (function(p, k) {
        function X() {
          M || (M = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", k));
        }
        X.isReactWarning = !0, Object.defineProperty(p, "key", { get: X, configurable: !0 });
      })(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), (function(p, k, X, a, K, V) {
        var ae = X.ref;
        return p = { $$typeof: H, type: p, key: k, props: X, _owner: a }, (ae !== void 0 ? ae : null) !== null ? Object.defineProperty(p, "ref", { enumerable: !1, get: v }) : Object.defineProperty(p, "ref", { enumerable: !1, value: null }), p._store = {}, Object.defineProperty(p._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: 0 }), Object.defineProperty(p, "_debugInfo", { configurable: !1, enumerable: !1, writable: !0, value: null }), Object.defineProperty(p, "_debugStack", { configurable: !1, enumerable: !1, writable: !0, value: K }), Object.defineProperty(p, "_debugTask", { configurable: !1, enumerable: !1, writable: !0, value: V }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
      })(e, h, i, (w = z.A) === null ? null : w.getOwner(), m, $);
    }
    function j(e) {
      P(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === _ && (e._payload.status === "fulfilled" ? P(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function P(e) {
      return typeof e == "object" && e !== null && e.$$typeof === H;
    }
    var M, L = ye, H = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), ee = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), R = Symbol.for("react.client.reference"), z = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, B = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    }, o = {}, d = (L = { react_stack_bottom_frame: function(e) {
      return e();
    } }).react_stack_bottom_frame.bind(L, x)(), s = C(S(x)), l = {};
    G.Fragment = D, G.jsx = function(e, n, i) {
      var t = 1e4 > z.recentlyCreatedOwnerStacks++;
      return y(e, n, i, !1, t ? Error("react-stack-top-frame") : d, t ? C(S(e)) : s);
    }, G.jsxs = function(e, n, i) {
      var t = 1e4 > z.recentlyCreatedOwnerStacks++;
      return y(e, n, i, !0, t ? Error("react-stack-top-frame") : d, t ? C(S(e)) : s);
    };
  })()), G;
}
var g = (ce || (ce = 1, process.env.NODE_ENV === "production" ? re.exports = (function() {
  if (se) return F;
  se = 1;
  var r = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function f(S, x, v) {
    var y = null;
    if (v !== void 0 && (y = "" + v), x.key !== void 0 && (y = "" + x.key), "key" in x) for (var j in v = {}, x) j !== "key" && (v[j] = x[j]);
    else v = x;
    return x = v.ref, { $$typeof: r, type: S, key: y, ref: x !== void 0 ? x : null, props: v };
  }
  return F.Fragment = u, F.jsx = f, F.jsxs = f, F;
})() : re.exports = me()), re.exports);
const ne = { x: 0, y: 0, width: 0, height: 0, unit: "px" };
function ue(r, u, f) {
  return Math.min(Math.max(r, u), f);
}
const de = (r, u, f, S) => S === "pixel" ? ie(r, u, f) : xe(r, u, f), xe = (r, u, f) => r.unit === "%" ? { ...ne, ...r, unit: "%" } : { unit: "%", x: r.x ? r.x / u * 100 : 0, y: r.y ? r.y / f * 100 : 0, width: r.width ? r.width / u * 100 : 0, height: r.height ? r.height / f * 100 : 0 };
function ie(r, u, f) {
  return r.unit ? r.unit === "px" ? { ...ne, ...r, unit: "px" } : { unit: "px", x: r.x ? r.x * u / 100 : 0, y: r.y ? r.y * f / 100 : 0, width: r.width ? r.width * u / 100 : 0, height: r.height ? r.height * f / 100 : 0 } : { ...ne, ...r, unit: "px" };
}
const he = 10, Y = { position: "absolute", outline: "1px solid rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.5)", width: he, height: he }, be = () => g.jsxs(fe, { children: [g.jsx("div", { "data-dir": "s", "data-ord": "s", style: { ...Y, bottom: 0, left: "50%", marginBottom: -5, marginLeft: -5, cursor: "s-resize" } }), g.jsx("div", { "data-dir": "n", "data-ord": "n", style: { ...Y, top: 0, left: "50%", marginTop: -5, marginLeft: -5, cursor: "n-resize" } }), g.jsx("div", { "data-dir": "w", "data-ord": "w", style: { ...Y, top: "50%", left: 0, marginTop: -5, marginLeft: -5, cursor: "w-resize" } }), g.jsx("div", { "data-dir": "e", "data-ord": "e", style: { ...Y, top: "50%", right: 0, marginTop: -5, marginRight: -5, cursor: "e-resize" } }), g.jsx("div", { "data-dir": "se", "data-ord": "se", style: { ...Y, bottom: 0, right: 0, marginBottom: -5, marginRight: -5, cursor: "se-resize" } }), g.jsx("div", { "data-dir": "sw", "data-ord": "sw", style: { ...Y, bottom: 0, left: 0, marginBottom: -5, marginLeft: -5, cursor: "sw-resize" } }), g.jsx("div", { "data-dir": "nw", "data-ord": "nw", style: { ...Y, top: 0, left: 0, marginTop: -5, marginLeft: -5, cursor: "nw-resize" } }), g.jsx("div", { "data-dir": "ne", "data-ord": "ne", style: { ...Y, top: 0, right: 0, marginTop: -5, marginRight: -5, cursor: "ne-resize" } })] }), we = ({ area: r, onCropStart: u, showHandles: f, globalAreaStyle: S, customAreaRenderer: x, areaNumber: v }) => {
  const y = { top: `${r.y}${r.unit}`, left: `${r.x}${r.unit}`, width: `${r.width}${r.unit}`, height: `${r.height}${r.unit}` };
  return g.jsxs("div", { style: { position: "absolute", border: "1px dashed rgba(0,0,0,0.5)", outline: "1px dashed rgba(255,255,255,0.5)", cursor: "move", boxSizing: "border-box", touchAction: "none", ...y, ...S, ...r.areaStyle }, onPointerDown: u, "data-wrapper": "wrapper", children: [x ? x({ ...r, areaNumber: v }) : null, f ? g.jsx(be, {}) : null] });
}, ve = ({ areas: r }) => g.jsx("table", { style: { position: "absolute", right: 0, top: 0 }, children: g.jsx("tbody", { children: r.map((u, f) => g.jsxs("tr", { children: [g.jsxs("td", { children: ["x: ", Math.round(u.x)] }), g.jsxs("td", { children: ["y: ", Math.round(u.y)] }), g.jsxs("td", { children: ["width: ", Math.round(u.width)] }), g.jsxs("td", { children: ["height: ", Math.round(u.height)] }), g.jsxs("td", { children: ["unit: ", u.unit] })] }, f)) }) }), pe = (r, u) => r !== null && (!!u(r) || pe(r.parentNode, u)), T = { capture: !0, passive: !1 }, je = ["e", "w"], Se = ["n", "s"], _e = ["nw", "ne", "se", "sw"], Ce = ({ maxAreas: r = 1 / 0, unit: u = "pixel", minWidth: f = 0, minHeight: S = 0, debug: x = !1, children: v, areas: y, onChange: j, maxWidth: P, maxHeight: M, wrapperStyle: L, globalAreaStyle: H, customAreaRenderer: q, mediaWrapperClassName: D }) => {
  const Q = oe(null), U = oe(null), [Z, ee] = te(0), [c, O] = te({ startClientX: 0, startClientY: 0, startAreaX: 0, startAreaY: 0, clientX: 0, clientY: 0, isResize: !1 }), [N, I] = te({ areaChangeIndex: 0, isChanging: !1 }), _ = () => {
    const o = U.current;
    if (!o) return { x: 0, y: 0, width: 0, height: 0 };
    const { x: d, y: s, width: l, height: e } = o.getBoundingClientRect();
    return { x: d, y: s, width: l, height: e };
  }, J = E((o) => {
    const d = c.clientX - o.x, s = c.clientY - o.y < c.startAreaY;
    return d < c.startAreaX ? s ? "nw" : "sw" : s ? "ne" : "se";
  }, [c]), R = E((o) => {
    const d = _();
    return ie(o, d.width, d.height);
  }, []), z = E((o) => {
    const d = _(), s = R(o), l = c.clientX - c.startClientX, e = c.clientY - c.startClientY;
    return s.x = ue(c.startAreaX + l, 0, d.width - s.width), s.y = ue(c.startAreaY + e, 0, d.height - s.height), s;
  }, [c, R]), W = E((o) => {
    const d = _(), s = J(d), l = R(o), e = c.ord ? c.ord : s, n = c.clientX - c.startClientX, i = c.clientY - c.startClientY, t = { unit: "px", x: 0, y: 0, width: 0, height: 0, isChanging: !0, isNew: !1 };
    s === "ne" ? (t.x = c.startAreaX, t.width = n, t.height = Math.abs(i), t.y = c.startAreaY - t.height) : s === "se" ? (t.x = c.startAreaX, t.y = c.startAreaY, t.width = n, t.height = i) : s === "sw" ? (t.x = c.startAreaX + n, t.y = c.startAreaY, t.width = Math.abs(n), t.height = i) : s === "nw" && (t.x = c.startAreaX + n, t.width = Math.abs(n), t.height = Math.abs(i), t.y = c.startAreaY + i);
    const m = (function($, w, h, b, A = 0, p = 0, k = h, X = b) {
      const a = { ...$ };
      a.y < 0 && (a.height = Math.max(a.height + a.y, p), a.y = 0), a.x < 0 && (a.width = Math.max(a.width + a.x, A), a.x = 0);
      const K = h - (a.x + a.width);
      K < 0 && (a.x = Math.min(a.x, h - A), a.width += K);
      const V = b - (a.y + a.height);
      return V < 0 && (a.y = Math.min(a.y, b - p), a.height += V), a.width < A && (w !== "sw" && w != "nw" || (a.x -= A - a.width), a.width = A), a.height < p && (w !== "nw" && w != "ne" || (a.y -= p - a.height), a.height = p), a.width > k && (w !== "sw" && w != "nw" || (a.x -= k - a.width), a.width = k), a.height > X && (w !== "nw" && w != "ne" || (a.y -= X - a.height), a.height = X), a;
    })(t, s, d.width, d.height, f, S, P, M);
    return _e.indexOf(e) > -1 ? (l.x = m.x, l.y = m.y, l.width = m.width, l.height = m.height) : je.indexOf(e) > -1 ? (l.x = m.x, l.width = m.width) : Se.indexOf(e) > -1 && (l.y = m.y, l.height = m.height), l;
  }, [c, J, R, f, S, P, M]), B = E((o) => {
    o.preventDefault(), o.stopPropagation();
    const { isChanging: d, areaChangeIndex: s } = N;
    if (!d) return;
    const l = _(), e = y[s];
    let n;
    if (O((m) => ({ ...m, clientX: o.clientX, clientY: o.clientY })), n = c.isResize ? W(e) : z(e), t = n, (i = e).width !== t.width || i.height !== t.height || i.x !== t.x || i.y !== t.y || i.unit !== t.unit) {
      const m = de(n, l.width, l.height, u);
      j([...y.slice(0, s), { ...m }, ...y.slice(s + 1)]);
    }
    var i, t;
  }, [N, y, c, z, j, u, W]), C = E((o) => {
    o.preventDefault(), o.stopPropagation();
    const { isChanging: d, areaChangeIndex: s } = N;
    if (d) {
      I({ isChanging: !1, areaChangeIndex: -1 }), O({ startClientX: 0, startClientY: 0, startAreaX: 0, startAreaY: 0, clientX: 0, clientY: 0, isResize: !1 });
      const l = y[s];
      j([...y.slice(0, s), { ...l, isNew: !1, isChanging: !1 }, ...y.slice(s + 1)]);
    }
  }, [N, y, j]);
  return ge(() => (document.addEventListener("pointermove", B, T), document.addEventListener("pointerup", C, T), document.addEventListener("pointercancel", C, T), () => {
    document.removeEventListener("pointermove", B, T), document.removeEventListener("pointerup", C, T), document.removeEventListener("pointercancel", C, T);
  }), [B, C]), g.jsxs("div", { ref: Q, style: { position: "relative", display: "inline-block", cursor: "crosshair", boxSizing: "border-box", maxWidth: "100%", touchAction: "none", lineHeight: 0, ...L }, children: [g.jsx("div", { ref: U, onPointerDown: (o) => {
    const d = o.currentTarget;
    if (d.dataset.wrapper || d.dataset.direction || pe(d, (m) => m.dataset?.wrapper)) return;
    o.preventDefault(), o.stopPropagation();
    const s = _(), l = o.clientX - s.x, e = o.clientY - s.y, n = { unit: "px", x: l, y: e, width: 0, height: 0, isChanging: !0, isNew: !0 };
    O({ startClientX: o.clientX, startClientY: o.clientY, startAreaX: l, startAreaY: e, clientX: o.clientX, clientY: o.clientY, isResize: !0 }), ee(Z + 1);
    const i = de(n, s.width, s.height, u);
    let t;
    y.length < r ? (j(y.concat(i)), t = y.length) : (j([...y.slice(0, r - 1), i]), t = r - 1), I({ areaChangeIndex: t, isChanging: !0 });
  }, style: { boxSizing: "border-box" }, className: D, children: v }), y.map((o, d) => g.jsx(we, { area: o, showHandles: !o.isNew, onCropStart: (s) => ((l, e) => {
    l.preventDefault(), l.stopPropagation();
    const n = _(), i = ie(y[e], n.width, n.height), t = l.target.dataset.ord, m = !!t;
    let $ = l.clientX, w = l.clientY, h = i.x, b = i.y;
    t && (t === "ne" || t == "e" ? (h = i.x, b = i.y + i.height) : t === "se" || t === "s" ? (h = i.x, b = i.y) : t === "sw" || t == "w" ? (h = i.x + i.width, b = i.y) : t !== "nw" && t != "n" || (h = i.x + i.width, b = i.y + i.height), $ = h + n.x, w = b + n.y), O({ startClientX: $, startClientY: w, startAreaX: h, startAreaY: b, clientX: l.clientX, clientY: l.clientY, isResize: m, ord: t }), I({ isChanging: !0, areaChangeIndex: e });
  })(s, d), globalAreaStyle: H, customAreaRenderer: q, areaNumber: d + 1 }, d)), x ? g.jsx(ve, { areas: y }) : null] });
};
export {
  Ce as AreaSelector
};
