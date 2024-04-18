import { defineComponent as M, ref as I, inject as V, computed as y, watch as X, resolveDirective as ee, openBlock as k, createElementBlock as q, createElementVNode as o, renderSlot as te, withDirectives as R, normalizeStyle as z, createBlock as C, unref as f, withCtx as W, pushScopeId as L, popScopeId as P, normalizeClass as he, isRef as K, createVNode as $, provide as ve, Fragment as fe, toDisplayString as G, vModelText as U } from "vue";
function Q(e) {
  "@babel/helpers - typeof";
  return Q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, Q(e);
}
var _e = /^\s+/, ge = /\s+$/;
function d(e, a) {
  if (e = e || "", a = a || {}, e instanceof d)
    return e;
  if (!(this instanceof d))
    return new d(e, a);
  var t = pe(e);
  this._originalInput = e, this._r = t.r, this._g = t.g, this._b = t.b, this._a = t.a, this._roundA = Math.round(100 * this._a) / 100, this._format = a.format || t.format, this._gradientType = a.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = t.ok;
}
d.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var a = this.toRgb();
    return (a.r * 299 + a.g * 587 + a.b * 114) / 1e3;
  },
  getLuminance: function() {
    var a = this.toRgb(), t, l, r, n, u, s;
    return t = a.r / 255, l = a.g / 255, r = a.b / 255, t <= 0.03928 ? n = t / 12.92 : n = Math.pow((t + 0.055) / 1.055, 2.4), l <= 0.03928 ? u = l / 12.92 : u = Math.pow((l + 0.055) / 1.055, 2.4), r <= 0.03928 ? s = r / 12.92 : s = Math.pow((r + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * u + 0.0722 * s;
  },
  setAlpha: function(a) {
    return this._a = oe(a), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var a = le(this._r, this._g, this._b);
    return {
      h: a.h * 360,
      s: a.s,
      v: a.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var a = le(this._r, this._g, this._b), t = Math.round(a.h * 360), l = Math.round(a.s * 100), r = Math.round(a.v * 100);
    return this._a == 1 ? "hsv(" + t + ", " + l + "%, " + r + "%)" : "hsva(" + t + ", " + l + "%, " + r + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var a = ae(this._r, this._g, this._b);
    return {
      h: a.h * 360,
      s: a.s,
      l: a.l,
      a: this._a
    };
  },
  toHslString: function() {
    var a = ae(this._r, this._g, this._b), t = Math.round(a.h * 360), l = Math.round(a.s * 100), r = Math.round(a.l * 100);
    return this._a == 1 ? "hsl(" + t + ", " + l + "%, " + r + "%)" : "hsla(" + t + ", " + l + "%, " + r + "%, " + this._roundA + ")";
  },
  toHex: function(a) {
    return ne(this._r, this._g, this._b, a);
  },
  toHexString: function(a) {
    return "#" + this.toHex(a);
  },
  toHex8: function(a) {
    return xe(this._r, this._g, this._b, this._a, a);
  },
  toHex8String: function(a) {
    return "#" + this.toHex8(a);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(x(this._r, 255) * 100) + "%",
      g: Math.round(x(this._g, 255) * 100) + "%",
      b: Math.round(x(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(x(this._r, 255) * 100) + "%, " + Math.round(x(this._g, 255) * 100) + "%, " + Math.round(x(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(x(this._r, 255) * 100) + "%, " + Math.round(x(this._g, 255) * 100) + "%, " + Math.round(x(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : We[ne(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(a) {
    var t = "#" + re(this._r, this._g, this._b, this._a), l = t, r = this._gradientType ? "GradientType = 1, " : "";
    if (a) {
      var n = d(a);
      l = "#" + re(n._r, n._g, n._b, n._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + t + ",endColorstr=" + l + ")";
  },
  toString: function(a) {
    var t = !!a;
    a = a || this._format;
    var l = !1, r = this._a < 1 && this._a >= 0, n = !t && r && (a === "hex" || a === "hex6" || a === "hex3" || a === "hex4" || a === "hex8" || a === "name");
    return n ? a === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (a === "rgb" && (l = this.toRgbString()), a === "prgb" && (l = this.toPercentageRgbString()), (a === "hex" || a === "hex6") && (l = this.toHexString()), a === "hex3" && (l = this.toHexString(!0)), a === "hex4" && (l = this.toHex8String(!0)), a === "hex8" && (l = this.toHex8String()), a === "name" && (l = this.toName()), a === "hsl" && (l = this.toHslString()), a === "hsv" && (l = this.toHsvString()), l || this.toHexString());
  },
  clone: function() {
    return d(this.toString());
  },
  _applyModification: function(a, t) {
    var l = a.apply(null, [this].concat([].slice.call(t)));
    return this._r = l._r, this._g = l._g, this._b = l._b, this.setAlpha(l._a), this;
  },
  lighten: function() {
    return this._applyModification(Me, arguments);
  },
  brighten: function() {
    return this._applyModification(we, arguments);
  },
  darken: function() {
    return this._applyModification(He, arguments);
  },
  desaturate: function() {
    return this._applyModification(ke, arguments);
  },
  saturate: function() {
    return this._applyModification(Se, arguments);
  },
  greyscale: function() {
    return this._applyModification($e, arguments);
  },
  spin: function() {
    return this._applyModification(Ve, arguments);
  },
  _applyCombination: function(a, t) {
    return a.apply(null, [this].concat([].slice.call(t)));
  },
  analogous: function() {
    return this._applyCombination(Ie, arguments);
  },
  complement: function() {
    return this._applyCombination(Re, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(Ce, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(Ae, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(se, [3]);
  },
  tetrad: function() {
    return this._applyCombination(se, [4]);
  }
};
d.fromRatio = function(e, a) {
  if (Q(e) == "object") {
    var t = {};
    for (var l in e)
      e.hasOwnProperty(l) && (l === "a" ? t[l] = e[l] : t[l] = Y(e[l]));
    e = t;
  }
  return d(e, a);
};
function pe(e) {
  var a = {
    r: 0,
    g: 0,
    b: 0
  }, t = 1, l = null, r = null, n = null, u = !1, s = !1;
  return typeof e == "string" && (e = ze(e)), Q(e) == "object" && (j(e.r) && j(e.g) && j(e.b) ? (a = me(e.r, e.g, e.b), u = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : j(e.h) && j(e.s) && j(e.v) ? (l = Y(e.s), r = Y(e.v), a = ye(e.h, l, r), u = !0, s = "hsv") : j(e.h) && j(e.s) && j(e.l) && (l = Y(e.s), n = Y(e.l), a = be(e.h, l, n), u = !0, s = "hsl"), e.hasOwnProperty("a") && (t = e.a)), t = oe(t), {
    ok: u,
    format: e.format || s,
    r: Math.min(255, Math.max(a.r, 0)),
    g: Math.min(255, Math.max(a.g, 0)),
    b: Math.min(255, Math.max(a.b, 0)),
    a: t
  };
}
function me(e, a, t) {
  return {
    r: x(e, 255) * 255,
    g: x(a, 255) * 255,
    b: x(t, 255) * 255
  };
}
function ae(e, a, t) {
  e = x(e, 255), a = x(a, 255), t = x(t, 255);
  var l = Math.max(e, a, t), r = Math.min(e, a, t), n, u, s = (l + r) / 2;
  if (l == r)
    n = u = 0;
  else {
    var i = l - r;
    switch (u = s > 0.5 ? i / (2 - l - r) : i / (l + r), l) {
      case e:
        n = (a - t) / i + (a < t ? 6 : 0);
        break;
      case a:
        n = (t - e) / i + 2;
        break;
      case t:
        n = (e - a) / i + 4;
        break;
    }
    n /= 6;
  }
  return {
    h: n,
    s: u,
    l: s
  };
}
function be(e, a, t) {
  var l, r, n;
  e = x(e, 360), a = x(a, 100), t = x(t, 100);
  function u(v, A, p) {
    return p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? v + (A - v) * 6 * p : p < 1 / 2 ? A : p < 2 / 3 ? v + (A - v) * (2 / 3 - p) * 6 : v;
  }
  if (a === 0)
    l = r = n = t;
  else {
    var s = t < 0.5 ? t * (1 + a) : t + a - t * a, i = 2 * t - s;
    l = u(i, s, e + 1 / 3), r = u(i, s, e), n = u(i, s, e - 1 / 3);
  }
  return {
    r: l * 255,
    g: r * 255,
    b: n * 255
  };
}
function le(e, a, t) {
  e = x(e, 255), a = x(a, 255), t = x(t, 255);
  var l = Math.max(e, a, t), r = Math.min(e, a, t), n, u, s = l, i = l - r;
  if (u = l === 0 ? 0 : i / l, l == r)
    n = 0;
  else {
    switch (l) {
      case e:
        n = (a - t) / i + (a < t ? 6 : 0);
        break;
      case a:
        n = (t - e) / i + 2;
        break;
      case t:
        n = (e - a) / i + 4;
        break;
    }
    n /= 6;
  }
  return {
    h: n,
    s: u,
    v: s
  };
}
function ye(e, a, t) {
  e = x(e, 360) * 6, a = x(a, 100), t = x(t, 100);
  var l = Math.floor(e), r = e - l, n = t * (1 - a), u = t * (1 - r * a), s = t * (1 - (1 - r) * a), i = l % 6, v = [t, u, n, n, s, t][i], A = [s, t, t, u, n, n][i], p = [n, n, s, t, t, u][i];
  return {
    r: v * 255,
    g: A * 255,
    b: p * 255
  };
}
function ne(e, a, t, l) {
  var r = [O(Math.round(e).toString(16)), O(Math.round(a).toString(16)), O(Math.round(t).toString(16))];
  return l && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function xe(e, a, t, l, r) {
  var n = [O(Math.round(e).toString(16)), O(Math.round(a).toString(16)), O(Math.round(t).toString(16)), O(ue(l))];
  return r && n[0].charAt(0) == n[0].charAt(1) && n[1].charAt(0) == n[1].charAt(1) && n[2].charAt(0) == n[2].charAt(1) && n[3].charAt(0) == n[3].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) + n[3].charAt(0) : n.join("");
}
function re(e, a, t, l) {
  var r = [O(ue(l)), O(Math.round(e).toString(16)), O(Math.round(a).toString(16)), O(Math.round(t).toString(16))];
  return r.join("");
}
d.equals = function(e, a) {
  return !e || !a ? !1 : d(e).toRgbString() == d(a).toRgbString();
};
d.random = function() {
  return d.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function ke(e, a) {
  a = a === 0 ? 0 : a || 10;
  var t = d(e).toHsl();
  return t.s -= a / 100, t.s = Z(t.s), d(t);
}
function Se(e, a) {
  a = a === 0 ? 0 : a || 10;
  var t = d(e).toHsl();
  return t.s += a / 100, t.s = Z(t.s), d(t);
}
function $e(e) {
  return d(e).desaturate(100);
}
function Me(e, a) {
  a = a === 0 ? 0 : a || 10;
  var t = d(e).toHsl();
  return t.l += a / 100, t.l = Z(t.l), d(t);
}
function we(e, a) {
  a = a === 0 ? 0 : a || 10;
  var t = d(e).toRgb();
  return t.r = Math.max(0, Math.min(255, t.r - Math.round(255 * -(a / 100)))), t.g = Math.max(0, Math.min(255, t.g - Math.round(255 * -(a / 100)))), t.b = Math.max(0, Math.min(255, t.b - Math.round(255 * -(a / 100)))), d(t);
}
function He(e, a) {
  a = a === 0 ? 0 : a || 10;
  var t = d(e).toHsl();
  return t.l -= a / 100, t.l = Z(t.l), d(t);
}
function Ve(e, a) {
  var t = d(e).toHsl(), l = (t.h + a) % 360;
  return t.h = l < 0 ? 360 + l : l, d(t);
}
function Re(e) {
  var a = d(e).toHsl();
  return a.h = (a.h + 180) % 360, d(a);
}
function se(e, a) {
  if (isNaN(a) || a <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var t = d(e).toHsl(), l = [d(e)], r = 360 / a, n = 1; n < a; n++)
    l.push(d({
      h: (t.h + n * r) % 360,
      s: t.s,
      l: t.l
    }));
  return l;
}
function Ae(e) {
  var a = d(e).toHsl(), t = a.h;
  return [d(e), d({
    h: (t + 72) % 360,
    s: a.s,
    l: a.l
  }), d({
    h: (t + 216) % 360,
    s: a.s,
    l: a.l
  })];
}
function Ie(e, a, t) {
  a = a || 6, t = t || 30;
  var l = d(e).toHsl(), r = 360 / t, n = [d(e)];
  for (l.h = (l.h - (r * a >> 1) + 720) % 360; --a; )
    l.h = (l.h + r) % 360, n.push(d(l));
  return n;
}
function Ce(e, a) {
  a = a || 6;
  for (var t = d(e).toHsv(), l = t.h, r = t.s, n = t.v, u = [], s = 1 / a; a--; )
    u.push(d({
      h: l,
      s: r,
      v: n
    })), n = (n + s) % 1;
  return u;
}
d.mix = function(e, a, t) {
  t = t === 0 ? 0 : t || 50;
  var l = d(e).toRgb(), r = d(a).toRgb(), n = t / 100, u = {
    r: (r.r - l.r) * n + l.r,
    g: (r.g - l.g) * n + l.g,
    b: (r.b - l.b) * n + l.b,
    a: (r.a - l.a) * n + l.a
  };
  return d(u);
};
d.readability = function(e, a) {
  var t = d(e), l = d(a);
  return (Math.max(t.getLuminance(), l.getLuminance()) + 0.05) / (Math.min(t.getLuminance(), l.getLuminance()) + 0.05);
};
d.isReadable = function(e, a, t) {
  var l = d.readability(e, a), r, n;
  switch (n = !1, r = Te(t), r.level + r.size) {
    case "AAsmall":
    case "AAAlarge":
      n = l >= 4.5;
      break;
    case "AAlarge":
      n = l >= 3;
      break;
    case "AAAsmall":
      n = l >= 7;
      break;
  }
  return n;
};
d.mostReadable = function(e, a, t) {
  var l = null, r = 0, n, u, s, i;
  t = t || {}, u = t.includeFallbackColors, s = t.level, i = t.size;
  for (var v = 0; v < a.length; v++)
    n = d.readability(e, a[v]), n > r && (r = n, l = d(a[v]));
  return d.isReadable(e, l, {
    level: s,
    size: i
  }) || !u ? l : (t.includeFallbackColors = !1, d.mostReadable(e, ["#fff", "#000"], t));
};
var J = d.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, We = d.hexNames = Le(J);
function Le(e) {
  var a = {};
  for (var t in e)
    e.hasOwnProperty(t) && (a[e[t]] = t);
  return a;
}
function oe(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function x(e, a) {
  Pe(e) && (e = "100%");
  var t = Ue(e);
  return e = Math.min(a, Math.max(0, parseFloat(e))), t && (e = parseInt(e * a, 10) / 100), Math.abs(e - a) < 1e-6 ? 1 : e % a / parseFloat(a);
}
function Z(e) {
  return Math.min(1, Math.max(0, e));
}
function B(e) {
  return parseInt(e, 16);
}
function Pe(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function Ue(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function O(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function Y(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function ue(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ie(e) {
  return B(e) / 255;
}
var D = function() {
  var e = "[-\\+]?\\d+%?", a = "[-\\+]?\\d*\\.\\d+%?", t = "(?:" + a + ")|(?:" + e + ")", l = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?", r = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(t),
    rgb: new RegExp("rgb" + l),
    rgba: new RegExp("rgba" + r),
    hsl: new RegExp("hsl" + l),
    hsla: new RegExp("hsla" + r),
    hsv: new RegExp("hsv" + l),
    hsva: new RegExp("hsva" + r),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function j(e) {
  return !!D.CSS_UNIT.exec(e);
}
function ze(e) {
  e = e.replace(_e, "").replace(ge, "").toLowerCase();
  var a = !1;
  if (J[e])
    e = J[e], a = !0;
  else if (e == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var t;
  return (t = D.rgb.exec(e)) ? {
    r: t[1],
    g: t[2],
    b: t[3]
  } : (t = D.rgba.exec(e)) ? {
    r: t[1],
    g: t[2],
    b: t[3],
    a: t[4]
  } : (t = D.hsl.exec(e)) ? {
    h: t[1],
    s: t[2],
    l: t[3]
  } : (t = D.hsla.exec(e)) ? {
    h: t[1],
    s: t[2],
    l: t[3],
    a: t[4]
  } : (t = D.hsv.exec(e)) ? {
    h: t[1],
    s: t[2],
    v: t[3]
  } : (t = D.hsva.exec(e)) ? {
    h: t[1],
    s: t[2],
    v: t[3],
    a: t[4]
  } : (t = D.hex8.exec(e)) ? {
    r: B(t[1]),
    g: B(t[2]),
    b: B(t[3]),
    a: ie(t[4]),
    format: a ? "name" : "hex8"
  } : (t = D.hex6.exec(e)) ? {
    r: B(t[1]),
    g: B(t[2]),
    b: B(t[3]),
    format: a ? "name" : "hex"
  } : (t = D.hex4.exec(e)) ? {
    r: B(t[1] + "" + t[1]),
    g: B(t[2] + "" + t[2]),
    b: B(t[3] + "" + t[3]),
    a: ie(t[4] + "" + t[4]),
    format: a ? "name" : "hex8"
  } : (t = D.hex3.exec(e)) ? {
    r: B(t[1] + "" + t[1]),
    g: B(t[2] + "" + t[2]),
    b: B(t[3] + "" + t[3]),
    format: a ? "name" : "hex"
  } : !1;
}
function Te(e) {
  var a, t;
  return e = e || {
    level: "AA",
    size: "small"
  }, a = (e.level || "AA").toUpperCase(), t = (e.size || "small").toLowerCase(), a !== "AA" && a !== "AAA" && (a = "AA"), t !== "small" && t !== "large" && (t = "small"), {
    level: a,
    size: t
  };
}
const w = Symbol(), Fe = { class: "content" }, Ne = ["x", "y"], Be = /* @__PURE__ */ M({
  __name: "circle",
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    circleSize: {
      type: Number,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: a }) {
    const t = e, l = a, r = I(null), n = I(null), { data: u, config: s } = V(w), i = y(() => t.circleSize || s.value.circleSize || 200), v = I({ x: i.value / 2, y: i.value / 2 });
    function A(H) {
      var N, m, g, b;
      if (H.target !== n.value) {
        const E = ((m = (N = r.value) == null ? void 0 : N.getBoundingClientRect()) == null ? void 0 : m.y) || 0, h = ((b = (g = r.value) == null ? void 0 : g.getBoundingClientRect()) == null ? void 0 : b.x) || 0;
        p({ x: H.x - h, y: H.y - E });
      }
    }
    function p({ x: H, y: N }) {
      const m = Math.atan2(N - i.value / 2, H - i.value / 2);
      v.value = {
        x: Math.cos(m) * (i.value / 2 - s.value.pointerSize / 2) + i.value / 2,
        y: Math.sin(m) * (i.value / 2 - s.value.pointerSize / 2) + i.value / 2
      };
    }
    return X(
      () => [v.value.x, v.value.y],
      () => {
        const H = (Math.atan2(v.value.y - i.value / 2, v.value.x - i.value / 2) / Math.PI * 180 + 450) % 360;
        l("update:modelValue", H);
      }
    ), X(
      () => t.modelValue,
      () => {
        const H = (t.modelValue - 90) / 360 * Math.PI * 2;
        v.value = {
          x: Math.cos(H) * (i.value / 2 - s.value.pointerSize / 2) + i.value / 2,
          y: Math.sin(H) * (i.value / 2 - s.value.pointerSize / 2) + i.value / 2
        };
      },
      { immediate: !0 }
    ), (H, N) => {
      const m = ee("drag");
      return k(), q("div", {
        class: "circlePanel",
        onClick: A,
        ref_key: "circlePanel",
        ref: r
      }, [
        o("div", Fe, [
          te(H.$slots, "default", {}, void 0, !0)
        ]),
        R(o("div", {
          class: "thumb",
          ref_key: "thumb",
          ref: n,
          style: z({ top: v.value.y + "px", left: v.value.x + "px" }),
          x: v.value.x,
          y: v.value.y
        }, null, 12, Ne), [
          [m, p]
        ])
      ], 512);
    };
  }
}), S = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [l, r] of a)
    t[l] = r;
  return t;
}, Ee = /* @__PURE__ */ S(Be, [["__scopeId", "data-v-da3e437c"]]), De = (e) => (L("data-v-64532732"), e = e(), P(), e), Oe = /* @__PURE__ */ De(() => /* @__PURE__ */ o("div", { class: "hue" }, null, -1)), Ge = /* @__PURE__ */ M({
  __name: "hsl_h",
  setup(e) {
    const { hsl: a, config: t } = V(w);
    return (l, r) => (k(), C(Ee, {
      modelValue: f(a).h,
      "onUpdate:modelValue": r[0] || (r[0] = (n) => f(a).h = n)
    }, {
      default: W(() => [
        Oe
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), je = /* @__PURE__ */ S(Ge, [["__scopeId", "data-v-64532732"]]), Xe = { class: "content" }, qe = ["x", "y"], Ye = /* @__PURE__ */ M({
  __name: "liner",
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    toward: {
      type: String,
      default: "bottom"
    },
    linerWidth: {
      type: Number,
      default: null
    },
    linerLength: {
      type: Number,
      default: null
    },
    scale: {
      type: Number,
      default: 1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: a }) {
    const { config: t } = V(w), l = e, r = a, n = I(null), u = I(null), s = I({ x: 0, y: 0 }), i = y(() => l.linerWidth || t.value.linerWidth || 20), v = y(() => l.linerLength || t.value.linerLength || 200), A = y(() => ["top", "bottom"].includes(l.toward)), p = y(() => ({
      top: s.value.y + "px",
      left: s.value.x + "px"
    })), H = y(() => A.value ? {
      width: i.value + "px",
      height: v.value + "px"
    } : {
      height: i.value + "px",
      width: v.value + "px"
    });
    function N(g) {
      var b, E, h, c;
      if (g.target !== u.value) {
        const _ = ((E = (b = n.value) == null ? void 0 : b.getBoundingClientRect()) == null ? void 0 : E.x) || 0, ce = ((c = (h = n.value) == null ? void 0 : h.getBoundingClientRect()) == null ? void 0 : c.y) || 0;
        m({ x: g.x - _, y: g.y - ce });
      }
    }
    function m({ x: g, y: b }) {
      A.value ? (b < 0 ? b = 0 : b > v.value && (b = v.value), s.value.y = b) : (g < 0 ? g = 0 : g > v.value && (g = v.value), s.value.x = g);
    }
    return X(
      () => [s.value.x, s.value.y],
      () => {
        l.toward === "top" ? r("update:modelValue", (1 - s.value.y / v.value) * l.scale) : l.toward === "bottom" ? r("update:modelValue", s.value.y / v.value * l.scale) : l.toward === "right" ? r("update:modelValue", s.value.x / v.value * l.scale) : l.toward === "left" && r("update:modelValue", (1 - s.value.x / v.value) * l.scale);
      }
    ), X(
      () => l.modelValue,
      (g) => {
        g = g / l.scale, l.toward === "top" ? s.value.y = (1 - g) * v.value : l.toward === "bottom" ? s.value.y = g * v.value : l.toward === "right" ? s.value.x = g * v.value : l.toward === "left" && (s.value.x = (1 - g) * v.value);
      },
      {
        immediate: !0
      }
    ), (g, b) => {
      const E = ee("drag");
      return k(), q("div", {
        class: he(["linerPanel", { isVertical: A.value }]),
        style: z(H.value),
        onClick: N,
        ref_key: "linerPanel",
        ref: n
      }, [
        o("div", Xe, [
          te(g.$slots, "default", {}, void 0, !0)
        ]),
        R(o("div", {
          class: "thumb",
          ref_key: "linerThumb",
          ref: u,
          style: z(p.value),
          x: s.value.x,
          y: s.value.y
        }, null, 12, qe), [
          [E, m]
        ])
      ], 6);
    };
  }
}), T = /* @__PURE__ */ S(Ye, [["__scopeId", "data-v-6b4204eb"]]), Qe = /* @__PURE__ */ M({
  __name: "hsl_s",
  setup(e) {
    const { hsl: a, config: t } = V(w), l = y(() => ({
      background: `linear-gradient(to bottom, hsl(${a.value.h}, 100%, 50%), hsl(${a.value.h}, 0%, 50%)`
    }));
    return (r, n) => (k(), C(T, {
      modelValue: f(a).s,
      "onUpdate:modelValue": n[0] || (n[0] = (u) => f(a).s = u),
      toward: "top",
      scale: 100,
      linerLength: f(t).circleSize
    }, {
      default: W(() => [
        o("div", {
          class: "saturation",
          style: z(l.value)
        }, null, 4)
      ]),
      _: 1
    }, 8, ["modelValue", "linerLength"]));
  }
}), Ke = /* @__PURE__ */ S(Qe, [["__scopeId", "data-v-9bf16af6"]]), Ze = /* @__PURE__ */ M({
  __name: "hsl_l",
  setup(e) {
    const { hsl: a, config: t } = V(w), l = y(() => ({
      background: `linear-gradient(to top, hsl(${a.value.h}, 100%, 0%), hsl(${a.value.h}, 100%, 50%),  hsl(${a.value.h}, 100%, 100%)`
    }));
    return (r, n) => (k(), C(T, {
      modelValue: f(a).l,
      "onUpdate:modelValue": n[0] || (n[0] = (u) => f(a).l = u),
      toward: "top",
      scale: 100,
      linerLength: f(t).circleSize
    }, {
      default: W(() => [
        o("div", {
          class: "lightness",
          style: z(l.value)
        }, null, 4)
      ]),
      _: 1
    }, 8, ["modelValue", "linerLength"]));
  }
}), Je = /* @__PURE__ */ S(Ze, [["__scopeId", "data-v-3f520549"]]), et = (e) => (L("data-v-76029d42"), e = e(), P(), e), tt = /* @__PURE__ */ et(() => /* @__PURE__ */ o("div", { class: "bg" }, null, -1)), at = /* @__PURE__ */ M({
  __name: "hsl_a",
  setup(e) {
    const { alpha: a, hsl: t, color: l, data: r, config: n } = V(w), u = y(() => ({
      background: `linear-gradient(to bottom, hsla(${t.value.h}, ${t.value.s}%, ${t.value.l}%, 1), hsla(${t.value.h}, ${t.value.s}%, ${t.value.l}%, 0))`
    }));
    return (s, i) => (k(), C(T, {
      modelValue: f(a),
      "onUpdate:modelValue": i[0] || (i[0] = (v) => K(a) ? a.value = v : null),
      toward: "top",
      linerLength: f(n).circleSize
    }, {
      default: W(() => [
        tt,
        o("div", {
          class: "color",
          style: z(u.value)
        }, null, 4)
      ]),
      _: 1
    }, 8, ["modelValue", "linerLength"]));
  }
}), lt = /* @__PURE__ */ S(at, [["__scopeId", "data-v-76029d42"]]), nt = { class: "hslContainer" }, rt = {
  __name: "index",
  setup(e) {
    return (a, t) => (k(), q("div", nt, [
      $(je, { class: "panel" }),
      $(Ke, { class: "panel" }),
      $(Je, { class: "panel" }),
      $(lt, { class: "panel" })
    ]));
  }
}, st = /* @__PURE__ */ S(rt, [["__scopeId", "data-v-79460a13"]]), it = (e) => (L("data-v-1d68ddaa"), e = e(), P(), e), ot = /* @__PURE__ */ it(() => /* @__PURE__ */ o("div", { class: "color right" }, null, -1)), ut = /* @__PURE__ */ M({
  __name: "hsv_h",
  setup(e) {
    const { hsv: a, config: t } = V(w);
    return (l, r) => (k(), C(T, {
      modelValue: f(a).h,
      "onUpdate:modelValue": r[0] || (r[0] = (n) => f(a).h = n),
      scale: 360,
      toward: "right",
      linerLength: f(t).boardWidth
    }, {
      default: W(() => [
        ot
      ]),
      _: 1
    }, 8, ["modelValue", "linerLength"]));
  }
}), dt = /* @__PURE__ */ S(ut, [["__scopeId", "data-v-1d68ddaa"]]), ct = { class: "content" }, ht = ["x", "y"], vt = /* @__PURE__ */ M({
  __name: "board",
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    pointerSize: {
      type: Number,
      default: null
    },
    boardWidth: {
      type: Number,
      default: null
    },
    boardHeight: {
      type: Number,
      default: null
    },
    scale: {
      type: Number,
      default: 1
    }
  },
  emits: ["update:x", "update:y"],
  setup(e, { emit: a }) {
    const t = e, l = a, { config: r } = V(w), n = I(null), u = I(null), s = y(() => t.pointerSize || r.value.pointerSize || 10), i = y(() => t.boardWidth || r.value.boardWidth || 200), v = y(() => t.boardHeight || r.value.boardHeight || 200), A = y(() => ({
      "--boardWidth": i.value + "px",
      "--boardHeight": v.value + "px",
      "--pointerSize": s.value + "px"
    })), p = I({ x: i.value, y: 0 });
    function H(m) {
      var g, b, E, h;
      if (m.target !== u.value) {
        const c = ((b = (g = n.value) == null ? void 0 : g.getBoundingClientRect()) == null ? void 0 : b.y) || 0, _ = ((h = (E = n.value) == null ? void 0 : E.getBoundingClientRect()) == null ? void 0 : h.x) || 0;
        N({ x: m.x - _ - s.value / 2, y: m.y - c - s.value / 2 });
      }
    }
    function N({ x: m, y: g }) {
      m < 0 - s.value / 2 ? m = 0 - s.value / 2 : m > i.value - s.value / 2 && (m = i.value - s.value / 2), g < 0 - s.value / 2 ? g = 0 - s.value / 2 : g > v.value - s.value / 2 && (g = v.value - s.value / 2), p.value = {
        x: m + s.value / 2,
        y: g + s.value / 2
      };
    }
    return X(
      () => [p.value.x, p.value.y],
      () => {
        l("update:x", p.value.x / i.value * t.scale), l("update:y", (1 - p.value.y / v.value) * t.scale);
      }
    ), X(
      () => [t.x, t.y],
      () => {
        p.value = {
          x: t.x / t.scale * i.value,
          y: (1 - t.y / t.scale) * v.value
        };
      },
      { immediate: !0 }
    ), (m, g) => {
      const b = ee("drag");
      return k(), q("div", {
        class: "boardPanel",
        onClick: H,
        ref_key: "boardPanel",
        ref: n,
        style: z(A.value)
      }, [
        o("div", ct, [
          te(m.$slots, "default", {}, void 0, !0)
        ]),
        R(o("div", {
          class: "thumb",
          ref_key: "boardThumb",
          ref: u,
          style: z({ top: p.value.y + "px", left: p.value.x + "px" }),
          x: p.value.x,
          y: p.value.y
        }, null, 12, ht), [
          [b, N]
        ])
      ], 4);
    };
  }
}), ft = /* @__PURE__ */ S(vt, [["__scopeId", "data-v-bdc27e3e"]]), de = (e) => (L("data-v-c2880361"), e = e(), P(), e), _t = /* @__PURE__ */ de(() => /* @__PURE__ */ o("div", { class: "white" }, null, -1)), gt = /* @__PURE__ */ de(() => /* @__PURE__ */ o("div", { class: "black" }, null, -1)), pt = /* @__PURE__ */ M({
  __name: "hsv_sv",
  setup(e) {
    const { hsv: a, config: t } = V(w), l = y(() => ({
      backgroundColor: `hsl(${a.value.h}, 100%, 50%)`
    }));
    return (r, n) => (k(), C(ft, {
      x: f(a).s,
      "onUpdate:x": n[0] || (n[0] = (u) => f(a).s = u),
      y: f(a).v,
      "onUpdate:y": n[1] || (n[1] = (u) => f(a).v = u),
      scale: 100
    }, {
      default: W(() => [
        o("div", {
          class: "bg",
          style: z(l.value)
        }, null, 4),
        _t,
        gt
      ]),
      _: 1
    }, 8, ["x", "y"]));
  }
}), mt = /* @__PURE__ */ S(pt, [["__scopeId", "data-v-c2880361"]]), bt = (e) => (L("data-v-ba59847b"), e = e(), P(), e), yt = /* @__PURE__ */ bt(() => /* @__PURE__ */ o("div", { class: "bg" }, null, -1)), xt = /* @__PURE__ */ M({
  __name: "hsv_a",
  setup(e) {
    const { alpha: a, hsv: t } = V(w), l = y(() => {
      const r = d({ h: t.value.h, s: t.value.s, v: t.value.v });
      return {
        background: `linear-gradient(to bottom, ${r.setAlpha(1).toRgbString()},   ${r.setAlpha(0).toRgbString()}`
      };
    });
    return (r, n) => (k(), C(T, {
      modelValue: f(a),
      "onUpdate:modelValue": n[0] || (n[0] = (u) => K(a) ? a.value = u : null),
      toward: "top",
      linerLength: 200
    }, {
      default: W(() => [
        yt,
        o("div", {
          class: "color",
          style: z(l.value)
        }, null, 4)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), kt = /* @__PURE__ */ S(xt, [["__scopeId", "data-v-ba59847b"]]), St = { class: "hsvContainer" }, $t = {
  __name: "index",
  setup(e) {
    return (a, t) => (k(), q("div", St, [
      o("div", null, [
        $(mt, { class: "panel" }),
        $(dt, { class: "panel" })
      ]),
      $(kt, { class: "panel" })
    ]));
  }
}, Mt = /* @__PURE__ */ S($t, [["__scopeId", "data-v-0efcb21f"]]), wt = (e) => (L("data-v-22376d98"), e = e(), P(), e), Ht = /* @__PURE__ */ wt(() => /* @__PURE__ */ o("div", { class: "color" }, null, -1)), Vt = /* @__PURE__ */ M({
  __name: "rgb_r",
  setup(e) {
    const { rgb: a, config: t } = V(w);
    return (l, r) => (k(), C(T, {
      modelValue: f(a).r,
      "onUpdate:modelValue": r[0] || (r[0] = (n) => f(a).r = n),
      scale: 255,
      toward: "right",
      linerLength: f(t).boardWidth,
      linerWidth: f(t).linerWidth * 1.5
    }, {
      default: W(() => [
        Ht
      ]),
      _: 1
    }, 8, ["modelValue", "linerLength", "linerWidth"]));
  }
}), Rt = /* @__PURE__ */ S(Vt, [["__scopeId", "data-v-22376d98"]]), At = (e) => (L("data-v-ffdfdfe5"), e = e(), P(), e), It = /* @__PURE__ */ At(() => /* @__PURE__ */ o("div", { class: "color" }, null, -1)), Ct = /* @__PURE__ */ M({
  __name: "rgb_g",
  setup(e) {
    const { rgb: a, config: t } = V(w);
    return (l, r) => (k(), C(T, {
      modelValue: f(a).g,
      "onUpdate:modelValue": r[0] || (r[0] = (n) => f(a).g = n),
      scale: 255,
      toward: "right",
      linerLength: f(t).boardWidth,
      linerWidth: f(t).linerWidth * 1.5
    }, {
      default: W(() => [
        It
      ]),
      _: 1
    }, 8, ["modelValue", "linerLength", "linerWidth"]));
  }
}), Wt = /* @__PURE__ */ S(Ct, [["__scopeId", "data-v-ffdfdfe5"]]), Lt = (e) => (L("data-v-d9739968"), e = e(), P(), e), Pt = /* @__PURE__ */ Lt(() => /* @__PURE__ */ o("div", { class: "color" }, null, -1)), Ut = /* @__PURE__ */ M({
  __name: "rgb_b",
  setup(e) {
    const { rgb: a, config: t } = V(w);
    return (l, r) => (k(), C(T, {
      modelValue: f(a).b,
      "onUpdate:modelValue": r[0] || (r[0] = (n) => f(a).b = n),
      scale: 255,
      toward: "right",
      linerLength: f(t).boardWidth,
      linerWidth: f(t).linerWidth * 1.5
    }, {
      default: W(() => [
        Pt
      ]),
      _: 1
    }, 8, ["modelValue", "linerLength", "linerWidth"]));
  }
}), zt = /* @__PURE__ */ S(Ut, [["__scopeId", "data-v-d9739968"]]), Tt = (e) => (L("data-v-3e94eea6"), e = e(), P(), e), Ft = /* @__PURE__ */ Tt(() => /* @__PURE__ */ o("div", { class: "bg" }, null, -1)), Nt = /* @__PURE__ */ M({
  __name: "rgb_a",
  setup(e) {
    const { alpha: a, rgb: t } = V(w), l = y(() => ({
      background: `linear-gradient(to bottom, rgba(${t.value.r}, ${t.value.g}, ${t.value.b}, 1),   rgba(${t.value.r}, ${t.value.g}, ${t.value.b}, 0))`
    }));
    return (r, n) => (k(), C(T, {
      modelValue: f(a),
      "onUpdate:modelValue": n[0] || (n[0] = (u) => K(a) ? a.value = u : null),
      toward: "top",
      linerLength: 200
    }, {
      default: W(() => [
        Ft,
        o("div", {
          class: "color",
          style: z(l.value)
        }, null, 4)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Bt = /* @__PURE__ */ S(Nt, [["__scopeId", "data-v-3e94eea6"]]), Et = { class: "rgbContainer" }, Dt = { class: "rgbPanel" }, Ot = {
  __name: "index",
  setup(e) {
    return (a, t) => (k(), q("div", Et, [
      o("div", Dt, [
        $(Rt, { class: "panel" }),
        $(Wt, { class: "panel" }),
        $(zt, { class: "panel" })
      ]),
      $(Bt, { class: "panel" })
    ]));
  }
}, Gt = /* @__PURE__ */ S(Ot, [["__scopeId", "data-v-2ca51f25"]]), jt = (e) => (L("data-v-4148f6c9"), e = e(), P(), e), Xt = /* @__PURE__ */ jt(() => /* @__PURE__ */ o("div", { class: "bg" }, null, -1)), qt = /* @__PURE__ */ M({
  __name: "cmyk_a",
  setup(e) {
    const { alpha: a, rgb: t } = V(w), l = y(() => ({
      background: `linear-gradient(to bottom, rgba(${t.value.r}, ${t.value.g}, ${t.value.b}, 1),   rgba(${t.value.r}, ${t.value.g}, ${t.value.b}, 0))`
    }));
    return (r, n) => (k(), C(T, {
      modelValue: f(a),
      "onUpdate:modelValue": n[0] || (n[0] = (u) => K(a) ? a.value = u : null),
      toward: "top",
      linerLength: 200
    }, {
      default: W(() => [
        Xt,
        o("div", {
          class: "color",
          style: z(l.value)
        }, null, 4)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Yt = /* @__PURE__ */ S(qt, [["__scopeId", "data-v-4148f6c9"]]), Qt = (e) => (L("data-v-780798e9"), e = e(), P(), e), Kt = /* @__PURE__ */ Qt(() => /* @__PURE__ */ o("div", { class: "color" }, null, -1)), Zt = /* @__PURE__ */ M({
  __name: "cmyk_c",
  setup(e) {
    const { cmyk: a, config: t } = V(w);
    return (l, r) => (k(), C(T, {
      modelValue: f(a).c,
      "onUpdate:modelValue": r[0] || (r[0] = (n) => f(a).c = n),
      scale: 1,
      toward: "right",
      linerLength: f(t).boardWidth,
      linerWidth: f(t).linerWidth
    }, {
      default: W(() => [
        Kt
      ]),
      _: 1
    }, 8, ["modelValue", "linerLength", "linerWidth"]));
  }
}), Jt = /* @__PURE__ */ S(Zt, [["__scopeId", "data-v-780798e9"]]), ea = (e) => (L("data-v-448dfa5a"), e = e(), P(), e), ta = /* @__PURE__ */ ea(() => /* @__PURE__ */ o("div", { class: "color" }, null, -1)), aa = /* @__PURE__ */ M({
  __name: "cmyk_m",
  setup(e) {
    const { cmyk: a, config: t } = V(w);
    return (l, r) => (k(), C(T, {
      modelValue: f(a).m,
      "onUpdate:modelValue": r[0] || (r[0] = (n) => f(a).m = n),
      scale: 1,
      toward: "right",
      linerLength: f(t).boardWidth,
      linerWidth: f(t).linerWidth
    }, {
      default: W(() => [
        ta
      ]),
      _: 1
    }, 8, ["modelValue", "linerLength", "linerWidth"]));
  }
}), la = /* @__PURE__ */ S(aa, [["__scopeId", "data-v-448dfa5a"]]), na = (e) => (L("data-v-959a0264"), e = e(), P(), e), ra = /* @__PURE__ */ na(() => /* @__PURE__ */ o("div", { class: "color" }, null, -1)), sa = /* @__PURE__ */ M({
  __name: "cmyk_y",
  setup(e) {
    const { cmyk: a, config: t } = V(w);
    return (l, r) => (k(), C(T, {
      modelValue: f(a).y,
      "onUpdate:modelValue": r[0] || (r[0] = (n) => f(a).y = n),
      scale: 1,
      toward: "right",
      linerLength: f(t).boardWidth,
      linerWidth: f(t).linerWidth
    }, {
      default: W(() => [
        ra
      ]),
      _: 1
    }, 8, ["modelValue", "linerLength", "linerWidth"]));
  }
}), ia = /* @__PURE__ */ S(sa, [["__scopeId", "data-v-959a0264"]]), oa = (e) => (L("data-v-aabe9778"), e = e(), P(), e), ua = /* @__PURE__ */ oa(() => /* @__PURE__ */ o("div", { class: "color" }, null, -1)), da = /* @__PURE__ */ M({
  __name: "cmyk_k",
  setup(e) {
    const { cmyk: a, config: t } = V(w);
    return (l, r) => (k(), C(T, {
      modelValue: f(a).k,
      "onUpdate:modelValue": r[0] || (r[0] = (n) => f(a).k = n),
      scale: 1,
      toward: "right",
      linerLength: f(t).boardWidth,
      linerWidth: f(t).linerWidth
    }, {
      default: W(() => [
        ua
      ]),
      _: 1
    }, 8, ["modelValue", "linerLength", "linerWidth"]));
  }
}), ca = /* @__PURE__ */ S(da, [["__scopeId", "data-v-aabe9778"]]), ha = { class: "rgbContainer" }, va = { class: "rgbPanel" }, fa = {
  __name: "index",
  setup(e) {
    return (a, t) => (k(), q("div", ha, [
      o("div", va, [
        $(Jt, { class: "panel" }),
        $(la, { class: "panel" }),
        $(ia, { class: "panel" }),
        $(ca, { class: "panel" })
      ]),
      $(Yt, { class: "panel" })
    ]));
  }
}, _a = /* @__PURE__ */ S(fa, [["__scopeId", "data-v-18315894"]]), F = (e) => (L("data-v-4347f731"), e = e(), P(), e), ga = { class: "resultContainer" }, pa = { class: "result" }, ma = { class: "result" }, ba = { class: "result" }, ya = { class: "result" }, xa = { class: "result" }, ka = { class: "resultContainer" }, Sa = { class: "result" }, $a = { class: "result" }, Ma = { class: "result" }, wa = { class: "form" }, Ha = { class: "inputItem" }, Va = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "hsl.h", -1)), Ra = { class: "inputItem" }, Aa = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "hsl.s", -1)), Ia = { class: "inputItem" }, Ca = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "hsl.l", -1)), Wa = { class: "form" }, La = { class: "inputItem" }, Pa = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "hsv.h", -1)), Ua = { class: "inputItem" }, za = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "hsv.s", -1)), Ta = { class: "inputItem" }, Fa = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "hsv.v", -1)), Na = { class: "form" }, Ba = { class: "inputItem" }, Ea = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "rgb.r", -1)), Da = { class: "inputItem" }, Oa = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "rgb.g", -1)), Ga = { class: "inputItem" }, ja = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "rgb.b", -1)), Xa = { class: "form" }, qa = { class: "inputItem" }, Ya = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "cmyk.c", -1)), Qa = { class: "inputItem" }, Ka = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "cmyk.m", -1)), Za = { class: "inputItem" }, Ja = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "cmyk.y", -1)), el = { class: "inputItem" }, tl = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "cmyk.k", -1)), al = { class: "form" }, ll = { class: "inputItem" }, nl = /* @__PURE__ */ F(() => /* @__PURE__ */ o("div", { class: "label" }, "alpha", -1)), rl = /* @__PURE__ */ M({
  __name: "colorPicker",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    panel: {
      type: String,
      default: "hsv"
    },
    format: {
      type: String,
      default: "rgb"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: a }) {
    const t = e, l = I("hsl"), r = I(1), n = I({
      h: 0,
      s: 100,
      l: 50
    }), u = I({
      h: 0,
      s: 100,
      v: 100
    }), s = I({
      r: 255,
      g: 255,
      b: 255
    }), i = I({
      c: 0,
      m: 0,
      y: 0,
      k: 0
    }), v = y(() => d({
      h: n.value.h,
      s: n.value.s,
      l: n.value.l,
      a: r.value
    }).toHslString()), A = y(() => d({
      r: s.value.r,
      g: s.value.g,
      b: s.value.b,
      a: r.value
    }).toRgbString()), p = y(() => d({
      r: s.value.r,
      g: s.value.g,
      b: s.value.b,
      a: r.value
    }).toPercentageRgbString()), H = y(() => d({
      h: u.value.h,
      s: u.value.s,
      v: u.value.v,
      a: r.value
    }).toHsvString()), N = y(() => d({
      r: (1 - i.value.c) * (1 - i.value.k) * 255,
      g: (1 - i.value.m) * (1 - i.value.k) * 255,
      b: (1 - i.value.y) * (1 - i.value.k) * 255,
      a: r.value
    }).toRgbString()), m = y(() => l.value === "hsv" ? H.value : l.value === "hsl" ? v.value : l.value === "cmyk" ? N.value : A.value), g = y(() => d(m.value).toHex8String()), b = I({
      linerWidth: 25,
      linerLength: 200,
      circleSize: 210,
      boardWidth: 300,
      boardHeight: 200,
      pointerSize: 30,
      thumbSize: 4
    }), E = y(() => ({
      "--linerWidth": b.value.linerWidth + "px",
      "--linerLength": b.value.linerLength + "px",
      "--circleSize": b.value.circleSize + "px",
      "--boardWidth": b.value.boardWidth + "px",
      "--boardHeight": b.value.boardHeight + "px",
      "--pointerSize": b.value.pointerSize + "px",
      "--thumbSize": b.value.thumbSize + "px"
    }));
    return ve(w, {
      hsl: n,
      hsv: u,
      rgb: s,
      cmyk: i,
      alpha: r,
      config: b
    }), X(
      () => t.modelValue,
      (h) => {
        if (h === "")
          return;
        const c = d(h);
        n.value.h = c.toHsl().h, n.value.s = c.toHsl().s * 100, n.value.l = c.toHsl().l * 100, u.value.h = c.toHsv().h, u.value.s = c.toHsv().s * 100, u.value.v = c.toHsv().v * 100, s.value.r = c.toRgb().r, s.value.g = c.toRgb().g, s.value.b = c.toRgb().b, r.value = c.getAlpha();
      },
      { immediate: !0 }
    ), X(
      () => m.value,
      () => {
        if (l.value === "hsl") {
          const h = d({
            h: n.value.h,
            s: n.value.s / 100,
            l: n.value.l / 100,
            a: r.value
          });
          u.value.h = h.toHsv().h, u.value.s = h.toHsv().s * 100, u.value.v = h.toHsv().v * 100, s.value.r = h.toRgb().r, s.value.g = h.toRgb().g, s.value.b = h.toRgb().b, i.value.c = 1 - h.toRgb().r / 255, i.value.m = 1 - h.toRgb().g / 255, i.value.y = 1 - h.toRgb().b / 255, i.value.k = 1 - Math.max(i.value.c, i.value.m, i.value.y);
        } else if (l.value === "hsv") {
          const h = d({
            h: u.value.h,
            s: u.value.s / 100,
            v: u.value.v / 100,
            a: r.value
          });
          n.value.h = h.toHsl().h, n.value.s = h.toHsl().s * 100, n.value.l = h.toHsl().l * 100, s.value.r = h.toRgb().r, s.value.g = h.toRgb().g, s.value.b = h.toRgb().b, i.value.c = 1 - h.toRgb().r / 255, i.value.m = 1 - h.toRgb().g / 255, i.value.y = 1 - h.toRgb().b / 255, i.value.k = 1 - Math.max(i.value.c, i.value.m, i.value.y);
        } else if (l.value === "cmyk") {
          const h = d({
            r: (1 - i.value.c) * (1 - i.value.k) * 255,
            g: (1 - i.value.m) * (1 - i.value.k) * 255,
            b: (1 - i.value.y) * (1 - i.value.k) * 255,
            a: r.value
          });
          u.value.h = h.toHsv().h, u.value.s = h.toHsv().s * 100, u.value.v = h.toHsv().v * 100, n.value.h = h.toHsl().h, n.value.s = h.toHsl().s * 100, n.value.l = h.toHsl().l * 100, s.value.r = h.toRgb().r, s.value.g = h.toRgb().g, s.value.b = h.toRgb().b;
        } else {
          const h = d({
            r: s.value.r,
            g: s.value.g,
            b: s.value.b,
            a: r.value
          });
          n.value.h = h.toHsl().h, n.value.s = h.toHsl().s * 100, n.value.l = h.toHsl().l * 100, u.value.h = h.toHsv().h, u.value.s = h.toHsv().s * 100, u.value.v = h.toHsv().v * 100, i.value.c = 1 - h.toRgb().r / 255, i.value.m = 1 - h.toRgb().g / 255, i.value.y = 1 - h.toRgb().b / 255, i.value.k = 1 - Math.max(i.value.c, i.value.m, i.value.y);
        }
      }
    ), (h, c) => (k(), q(fe, null, [
      o("div", {
        class: "colorPreview",
        style: z({ backgroundColor: m.value })
      }, G(m.value), 5),
      o("div", {
        class: "colorPickerContainer",
        style: z(E.value)
      }, [
        $(st, {
          onClick: c[0] || (c[0] = (_) => l.value = "hsl")
        }),
        $(Mt, {
          onClick: c[1] || (c[1] = (_) => l.value = "hsv")
        }),
        $(Gt, {
          onClick: c[2] || (c[2] = (_) => l.value = "rgb")
        }),
        $(_a, {
          onClick: c[3] || (c[3] = (_) => l.value = "cmyk")
        })
      ], 4),
      o("div", ga, [
        o("div", pa, G(v.value), 1),
        o("div", ma, G(A.value), 1),
        o("div", ba, G(p.value), 1),
        o("div", ya, G(H.value), 1),
        o("div", xa, G(N.value), 1)
      ]),
      o("div", ka, [
        o("div", Sa, "mode: " + G(l.value), 1),
        o("div", $a, G(g.value), 1),
        o("div", Ma, G(m.value), 1)
      ]),
      o("div", wa, [
        o("div", Ha, [
          Va,
          R(o("input", {
            "onUpdate:modelValue": c[4] || (c[4] = (_) => n.value.h = _),
            type: "number"
          }, null, 512), [
            [U, n.value.h]
          ])
        ]),
        o("div", Ra, [
          Aa,
          R(o("input", {
            "onUpdate:modelValue": c[5] || (c[5] = (_) => n.value.s = _),
            type: "number"
          }, null, 512), [
            [U, n.value.s]
          ])
        ]),
        o("div", Ia, [
          Ca,
          R(o("input", {
            "onUpdate:modelValue": c[6] || (c[6] = (_) => n.value.l = _),
            type: "number"
          }, null, 512), [
            [U, n.value.l]
          ])
        ])
      ]),
      o("div", Wa, [
        o("div", La, [
          Pa,
          R(o("input", {
            "onUpdate:modelValue": c[7] || (c[7] = (_) => u.value.h = _),
            type: "number"
          }, null, 512), [
            [U, u.value.h]
          ])
        ]),
        o("div", Ua, [
          za,
          R(o("input", {
            "onUpdate:modelValue": c[8] || (c[8] = (_) => u.value.s = _),
            type: "number"
          }, null, 512), [
            [U, u.value.s]
          ])
        ]),
        o("div", Ta, [
          Fa,
          R(o("input", {
            "onUpdate:modelValue": c[9] || (c[9] = (_) => u.value.v = _),
            type: "number"
          }, null, 512), [
            [U, u.value.v]
          ])
        ])
      ]),
      o("div", Na, [
        o("div", Ba, [
          Ea,
          R(o("input", {
            "onUpdate:modelValue": c[10] || (c[10] = (_) => s.value.r = _),
            type: "number"
          }, null, 512), [
            [U, s.value.r]
          ])
        ]),
        o("div", Da, [
          Oa,
          R(o("input", {
            "onUpdate:modelValue": c[11] || (c[11] = (_) => s.value.g = _),
            type: "number"
          }, null, 512), [
            [U, s.value.g]
          ])
        ]),
        o("div", Ga, [
          ja,
          R(o("input", {
            "onUpdate:modelValue": c[12] || (c[12] = (_) => s.value.b = _),
            type: "number"
          }, null, 512), [
            [U, s.value.b]
          ])
        ])
      ]),
      o("div", Xa, [
        o("div", qa, [
          Ya,
          R(o("input", {
            "onUpdate:modelValue": c[13] || (c[13] = (_) => i.value.c = _),
            type: "number"
          }, null, 512), [
            [U, i.value.c]
          ])
        ]),
        o("div", Qa, [
          Ka,
          R(o("input", {
            "onUpdate:modelValue": c[14] || (c[14] = (_) => i.value.m = _),
            type: "number"
          }, null, 512), [
            [U, i.value.m]
          ])
        ]),
        o("div", Za, [
          Ja,
          R(o("input", {
            "onUpdate:modelValue": c[15] || (c[15] = (_) => i.value.y = _),
            type: "number"
          }, null, 512), [
            [U, i.value.y]
          ])
        ]),
        o("div", el, [
          tl,
          R(o("input", {
            "onUpdate:modelValue": c[16] || (c[16] = (_) => i.value.k = _),
            type: "number"
          }, null, 512), [
            [U, i.value.k]
          ])
        ])
      ]),
      o("div", al, [
        o("div", ll, [
          nl,
          R(o("input", {
            "onUpdate:modelValue": c[17] || (c[17] = (_) => r.value = _),
            type: "number"
          }, null, 512), [
            [U, r.value]
          ])
        ])
      ])
    ], 64));
  }
}), sl = /* @__PURE__ */ S(rl, [["__scopeId", "data-v-4347f731"]]);
function il(e, a) {
  !e || !a || (e.onmousedown = (t) => {
    t.preventDefault(), t.stopPropagation();
    let l = 0, r = 0, n = t.clientX - e.offsetLeft, u = t.clientY - e.offsetTop;
    document.onmousemove = (s) => {
      l = s.clientX - n, r = s.clientY - u, a.modifiers.x ? l && a.value({ x: l }) : a.modifiers.y ? r && a.value({ y: r }) : (l || r) && a.value({ x: l, y: r });
    }, document.onmouseup = () => {
      (l || r) && a.value({ x: l, y: r }), document.onmousemove = null, document.onmouseup = null;
    };
  });
}
const ol = {
  install(e) {
    e && e.directive("drag", il);
  }
};
function dl(e) {
  e && (e.component("ColorPickerQ", sl), e.use(ol));
}
export {
  dl as default
};
