var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import t, { Fragment as e, useRef as i, useState as r, useCallback as n, useEffect as a } from "react";
const o = { x: 0, y: 0, width: 0, height: 0, unit: "px" };
function s(t2, e2, i2) {
  return Math.min(Math.max(t2, e2), i2);
}
const h = (t2, e2, i2, r2) => r2 === "pixel" ? l(t2, e2, i2) : d(t2, e2, i2), d = (t2, e2, i2) => t2.unit === "%" ? __spreadProps(__spreadValues(__spreadValues({}, o), t2), { unit: "%" }) : { unit: "%", x: t2.x ? t2.x / e2 * 100 : 0, y: t2.y ? t2.y / i2 * 100 : 0, width: t2.width ? t2.width / e2 * 100 : 0, height: t2.height ? t2.height / i2 * 100 : 0 };
function l(t2, e2, i2) {
  return t2.unit ? t2.unit === "px" ? __spreadProps(__spreadValues(__spreadValues({}, o), t2), { unit: "px" }) : { unit: "px", x: t2.x ? t2.x * e2 / 100 : 0, y: t2.y ? t2.y * i2 / 100 : 0, width: t2.width ? t2.width * e2 / 100 : 0, height: t2.height ? t2.height * i2 / 100 : 0 } : __spreadProps(__spreadValues(__spreadValues({}, o), t2), { unit: "px" });
}
const c = { position: "absolute", outline: "1px solid rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.5)", width: 10, height: 10 };
var g = { exports: {} }, u = {};
Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
!function() {
  try {
    if (!Object.assign)
      return false;
    var t2 = new String("abc");
    if (t2[5] = "de", Object.getOwnPropertyNames(t2)[0] === "5")
      return false;
    for (var e2 = {}, i2 = 0; i2 < 10; i2++)
      e2["_" + String.fromCharCode(i2)] = i2;
    var r2 = Object.getOwnPropertyNames(e2).map(function(t3) {
      return e2[t3];
    });
    if (r2.join("") !== "0123456789")
      return false;
    var n2 = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(t3) {
      n2[t3] = t3;
    }), Object.keys(Object.assign({}, n2)).join("") === "abcdefghijklmnopqrst";
  } catch (t3) {
    return false;
  }
}() || Object.assign;
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p = t, w = 60103;
if (u.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
  var x = Symbol.for;
  w = x("react.element"), u.Fragment = x("react.fragment");
}
var y = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = Object.prototype.hasOwnProperty, f = { key: true, ref: true, __self: true, __source: true };
function b(t2, e2, i2) {
  var r2, n2 = {}, a2 = null, o2 = null;
  for (r2 in i2 !== void 0 && (a2 = "" + i2), e2.key !== void 0 && (a2 = "" + e2.key), e2.ref !== void 0 && (o2 = e2.ref), e2)
    m.call(e2, r2) && !f.hasOwnProperty(r2) && (n2[r2] = e2[r2]);
  if (t2 && t2.defaultProps)
    for (r2 in e2 = t2.defaultProps)
      n2[r2] === void 0 && (n2[r2] = e2[r2]);
  return { $$typeof: w, type: t2, key: a2, ref: o2, props: n2, _owner: y.current };
}
u.jsx = b, u.jsxs = b, g.exports = u;
const v = g.exports.jsx, C = g.exports.jsxs, Y = () => C(e, { children: [v("div", { "data-dir": "s", "data-ord": "s", style: __spreadProps(__spreadValues({}, c), { bottom: 0, left: "50%", marginBottom: -5, marginLeft: -5, cursor: "s-resize" }) }), v("div", { "data-dir": "n", "data-ord": "n", style: __spreadProps(__spreadValues({}, c), { top: 0, left: "50%", marginTop: -5, marginLeft: -5, cursor: "n-resize" }) }), v("div", { "data-dir": "w", "data-ord": "w", style: __spreadProps(__spreadValues({}, c), { top: "50%", left: 0, marginTop: -5, marginLeft: -5, cursor: "w-resize" }) }), v("div", { "data-dir": "e", "data-ord": "e", style: __spreadProps(__spreadValues({}, c), { top: "50%", right: 0, marginTop: -5, marginRight: -5, cursor: "e-resize" }) }), v("div", { "data-dir": "se", "data-ord": "se", style: __spreadProps(__spreadValues({}, c), { bottom: 0, right: 0, marginBottom: -5, marginRight: -5, cursor: "se-resize" }) }), v("div", { "data-dir": "sw", "data-ord": "sw", style: __spreadProps(__spreadValues({}, c), { bottom: 0, left: 0, marginBottom: -5, marginLeft: -5, cursor: "sw-resize" }) }), v("div", { "data-dir": "nw", "data-ord": "nw", style: __spreadProps(__spreadValues({}, c), { top: 0, left: 0, marginTop: -5, marginLeft: -5, cursor: "nw-resize" }) }), v("div", { "data-dir": "ne", "data-ord": "ne", style: __spreadProps(__spreadValues({}, c), { top: 0, right: 0, marginTop: -5, marginRight: -5, cursor: "ne-resize" }) })] }), A = ({ area: t2, onCropStart: e2, showHandles: i2, globalAreaStyle: r2, customAreaRenderer: n2, areaNumber: a2 }) => {
  const o2 = { top: `${t2.y}${t2.unit}`, left: `${t2.x}${t2.unit}`, width: `${t2.width}${t2.unit}`, height: `${t2.height}${t2.unit}` };
  return C("div", { style: __spreadValues(__spreadValues(__spreadValues({ position: "absolute", border: "1px dashed rgba(0,0,0,0.5)", outline: "1px dashed rgba(255,255,255,0.5)", cursor: "move", boxSizing: "border-box", touchAction: "none" }, o2), r2), t2.areaStyle), onPointerDown: e2, "data-wrapper": "wrapper", children: [n2 ? n2(__spreadProps(__spreadValues({}, t2), { areaNumber: a2 })) : null, i2 ? v(Y, {}) : null] });
}, X = ({ areas: t2 }) => v("table", { style: { position: "absolute", right: 0, top: 0 }, children: v("tbody", { children: t2.map((t3, e2) => C("tr", { children: [C("td", { children: ["x: ", Math.round(t3.x)] }), C("td", { children: ["y: ", Math.round(t3.y)] }), C("td", { children: ["width: ", Math.round(t3.width)] }), C("td", { children: ["height: ", Math.round(t3.height)] }), C("td", { children: ["unit: ", t3.unit] })] }, e2)) }) }), O = (t2, e2) => t2 !== null && (!!e2(t2) || O(t2.parentNode, e2)), S = { capture: true, passive: false }, j = ["e", "w"], R = ["n", "s"], _ = ["nw", "ne", "se", "sw"], z = ({ maxAreas: t2 = 1 / 0, unit: e2 = "pixel", minWidth: o2 = 0, minHeight: d2 = 0, debug: c2 = false, children: g2, areas: u2, onChange: p2, maxWidth: w2, maxHeight: x, wrapperStyle: y2, globalAreaStyle: m2, customAreaRenderer: f2, mediaWrapperClassName: b2 }) => {
  const Y2 = i(null), z2 = i(null), [N, E] = r(0), [L, M] = r({ startClientX: 0, startClientY: 0, startAreaX: 0, startAreaY: 0, clientX: 0, clientY: 0, isResize: false }), [P, I] = r({ areaChangeIndex: 0, isChanging: false }), $ = () => {
    const t3 = z2.current;
    if (!t3)
      return { x: 0, y: 0, width: 0, height: 0 };
    const { x: e3, y: i2, width: r2, height: n2 } = t3.getBoundingClientRect();
    return { x: e3, y: i2, width: r2, height: n2 };
  }, T = n((t3) => {
    const e3 = L.clientX - t3.x, i2 = L.clientY - t3.y < L.startAreaY;
    return e3 < L.startAreaX ? i2 ? "nw" : "sw" : i2 ? "ne" : "se";
  }, [L]), k = n((t3) => {
    const e3 = $();
    return l(t3, e3.width, e3.height);
  }, []), D = n((t3) => {
    const e3 = $(), i2 = k(t3), r2 = L.clientX - L.startClientX, n2 = L.clientY - L.startClientY;
    return i2.x = s(L.startAreaX + r2, 0, e3.width - i2.width), i2.y = s(L.startAreaY + n2, 0, e3.height - i2.height), i2;
  }, [L, k]), B = n((t3) => {
    const e3 = $(), i2 = T(e3), r2 = k(t3), n2 = L.ord ? L.ord : i2, a2 = L.clientX - L.startClientX, s2 = L.clientY - L.startClientY, h2 = { unit: "px", x: 0, y: 0, width: 0, height: 0, isChanging: true, isNew: false };
    i2 === "ne" ? (h2.x = L.startAreaX, h2.width = a2, h2.height = Math.abs(s2), h2.y = L.startAreaY - h2.height) : i2 === "se" ? (h2.x = L.startAreaX, h2.y = L.startAreaY, h2.width = a2, h2.height = s2) : i2 === "sw" ? (h2.x = L.startAreaX + a2, h2.y = L.startAreaY, h2.width = Math.abs(a2), h2.height = s2) : i2 === "nw" && (h2.x = L.startAreaX + a2, h2.width = Math.abs(a2), h2.height = Math.abs(s2), h2.y = L.startAreaY + s2);
    const l2 = function(t4, e4, i3, r3, n3 = 0, a3 = 0, o3 = i3, s3 = r3) {
      const h3 = __spreadValues({}, t4);
      h3.y < 0 && (h3.height = Math.max(h3.height + h3.y, a3), h3.y = 0), h3.x < 0 && (h3.width = Math.max(h3.width + h3.x, n3), h3.x = 0);
      const d3 = i3 - (h3.x + h3.width);
      d3 < 0 && (h3.x = Math.min(h3.x, i3 - n3), h3.width += d3);
      const l3 = r3 - (h3.y + h3.height);
      return l3 < 0 && (h3.y = Math.min(h3.y, r3 - a3), h3.height += l3), h3.width < n3 && (e4 !== "sw" && e4 != "nw" || (h3.x -= n3 - h3.width), h3.width = n3), h3.height < a3 && (e4 !== "nw" && e4 != "ne" || (h3.y -= a3 - h3.height), h3.height = a3), h3.width > o3 && (e4 !== "sw" && e4 != "nw" || (h3.x -= o3 - h3.width), h3.width = o3), h3.height > s3 && (e4 !== "nw" && e4 != "ne" || (h3.y -= s3 - h3.height), h3.height = s3), h3;
    }(h2, i2, e3.width, e3.height, o2, d2, w2, x);
    return _.indexOf(n2) > -1 ? (r2.x = l2.x, r2.y = l2.y, r2.width = l2.width, r2.height = l2.height) : j.indexOf(n2) > -1 ? (r2.x = l2.x, r2.width = l2.width) : R.indexOf(n2) > -1 && (r2.y = l2.y, r2.height = l2.height), r2;
  }, [L, T, k, o2, d2, w2, x]), W = n((t3) => {
    t3.preventDefault(), t3.stopPropagation();
    const { isChanging: i2, areaChangeIndex: r2 } = P;
    if (!i2)
      return;
    const n2 = $(), a2 = u2[r2];
    let o3;
    if (M((e3) => __spreadProps(__spreadValues({}, e3), { clientX: t3.clientX, clientY: t3.clientY })), o3 = L.isResize ? B(a2) : D(a2), d3 = o3, (s2 = a2).width !== d3.width || s2.height !== d3.height || s2.x !== d3.x || s2.y !== d3.y || s2.unit !== d3.unit) {
      const t4 = h(o3, n2.width, n2.height, e2);
      p2([...u2.slice(0, r2), __spreadValues({}, t4), ...u2.slice(r2 + 1)]);
    }
    var s2, d3;
  }, [P, u2, L, D, p2, e2, B]), H = n((t3) => {
    t3.preventDefault(), t3.stopPropagation();
    const { isChanging: e3, areaChangeIndex: i2 } = P;
    if (e3) {
      I({ isChanging: false, areaChangeIndex: -1 }), M({ startClientX: 0, startClientY: 0, startAreaX: 0, startAreaY: 0, clientX: 0, clientY: 0, isResize: false });
      const t4 = u2[i2];
      p2([...u2.slice(0, i2), __spreadProps(__spreadValues({}, t4), { isNew: false, isChanging: false }), ...u2.slice(i2 + 1)]);
    }
  }, [P, u2, p2]);
  a(() => (document.addEventListener("pointermove", W, S), document.addEventListener("pointerup", H, S), document.addEventListener("pointercancel", H, S), () => {
    document.removeEventListener("pointermove", W, S), document.removeEventListener("pointerup", H, S), document.removeEventListener("pointercancel", H, S);
  }), [W, H]);
  return C("div", { ref: Y2, style: __spreadValues({ position: "relative", display: "inline-block", cursor: "crosshair", boxSizing: "border-box", maxWidth: "100%", touchAction: "none" }, y2), children: [v("div", { ref: z2, onPointerDown: (i2) => {
    const r2 = i2.currentTarget;
    if (r2.dataset.wrapper || r2.dataset.direction || O(r2, (t3) => {
      var _a;
      return (_a = t3.dataset) == null ? void 0 : _a.wrapper;
    }))
      return;
    i2.preventDefault(), i2.stopPropagation();
    const n2 = $(), a2 = i2.clientX - n2.x, o3 = i2.clientY - n2.y, s2 = { unit: "px", x: a2, y: o3, width: 0, height: 0, isChanging: true, isNew: true };
    M({ startClientX: i2.clientX, startClientY: i2.clientY, startAreaX: a2, startAreaY: o3, clientX: i2.clientX, clientY: i2.clientY, isResize: true }), E(N + 1);
    const d3 = h(s2, n2.width, n2.height, e2);
    let l2;
    u2.length < t2 ? (p2(u2.concat(d3)), l2 = u2.length) : (p2([...u2.slice(0, t2 - 1), d3]), l2 = t2 - 1), I({ areaChangeIndex: l2, isChanging: true });
  }, style: { boxSizing: "border-box" }, className: b2, children: g2 }), u2.map((t3, e3) => v(A, { area: t3, showHandles: !t3.isNew, onCropStart: (t4) => ((t5, e4) => {
    t5.preventDefault(), t5.stopPropagation();
    const i2 = $(), r2 = l(u2[e4], i2.width, i2.height), n2 = t5.target.dataset.ord, a2 = Boolean(n2);
    let o3 = t5.clientX, s2 = t5.clientY, h2 = r2.x, d3 = r2.y;
    n2 && (n2 === "ne" || n2 == "e" ? (h2 = r2.x, d3 = r2.y + r2.height) : n2 === "se" || n2 === "s" ? (h2 = r2.x, d3 = r2.y) : n2 === "sw" || n2 == "w" ? (h2 = r2.x + r2.width, d3 = r2.y) : n2 !== "nw" && n2 != "n" || (h2 = r2.x + r2.width, d3 = r2.y + r2.height), o3 = h2 + i2.x, s2 = d3 + i2.y), M({ startClientX: o3, startClientY: s2, startAreaX: h2, startAreaY: d3, clientX: t5.clientX, clientY: t5.clientY, isResize: a2, ord: n2 }), I({ isChanging: true, areaChangeIndex: e4 });
  })(t4, e3), globalAreaStyle: m2, customAreaRenderer: f2, areaNumber: e3 + 1 }, e3)), c2 ? v(X, { areas: u2 }) : null] });
};
export { z as AreaSelector };
