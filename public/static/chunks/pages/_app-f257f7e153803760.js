(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    2535: function (e, t, n) {
      "use strict";
      var r = n(6237),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      function l(e) {
        return r.isMemo(e) ? s : a[e.$$typeof] || i;
      }
      (a[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (a[r.Memo] = s);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        g = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (h) {
            var i = g(n);
            i && i !== h && e(t, i, r);
          }
          var s = c(n);
          p && (s = s.concat(p(n)));
          for (var a = l(t), f = l(n), m = 0; m < s.length; ++m) {
            var y = s[m];
            if (!o[y] && !(r && r[y]) && !(f && f[y]) && !(a && a[y])) {
              var b = d(n, y);
              try {
                u(t, y, b);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    },
    3993: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        cC: function () {
          return C;
        },
        Jc: function () {
          return eW;
        },
        $G: function () {
          return E;
        },
      });
      var i = n(5271),
        o = n(9626),
        s = n.n(o),
        a = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
      function l(e) {
        var t = {
            type: "tag",
            name: "",
            voidElement: !1,
            attrs: {},
            children: [],
          },
          n = e.match(/<\/?([^\s]+?)[/\s>]/);
        if (
          n &&
          ((t.name = n[1]),
          (s()[n[1]] || "/" === e.charAt(e.length - 2)) && (t.voidElement = !0),
          t.name.startsWith("!--"))
        ) {
          var r = e.indexOf("-->");
          return { type: "comment", comment: -1 !== r ? e.slice(4, r) : "" };
        }
        for (var i = new RegExp(a), o = null; null !== (o = i.exec(e)); )
          if (o[0].trim()) {
            if (o[1]) {
              var l = o[1].trim(),
                u = [l, ""];
              l.indexOf("=") > -1 && (u = l.split("=")),
                (t.attrs[u[0]] = u[1]),
                i.lastIndex--;
            } else
              o[2] &&
                (t.attrs[o[2]] = o[3].trim().substring(1, o[3].length - 1));
          }
        return t;
      }
      var u = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        c = /^\s*$/,
        p = Object.create(null),
        d = {
          parse: function (e, t) {
            t || (t = {}), t.components || (t.components = p);
            var n,
              r = [],
              i = [],
              o = -1,
              s = !1;
            if (0 !== e.indexOf("<")) {
              var a = e.indexOf("<");
              r.push({
                type: "text",
                content: -1 === a ? e : e.substring(0, a),
              });
            }
            return (
              e.replace(u, function (a, u) {
                if (s) {
                  if (a !== "</" + n.name + ">") return;
                  s = !1;
                }
                var p,
                  d = "/" !== a.charAt(1),
                  g = a.startsWith("<!--"),
                  h = u + a.length,
                  f = e.charAt(h);
                if (g) {
                  var m = l(a);
                  return o < 0 ? r.push(m) : (p = i[o]).children.push(m), r;
                }
                if (
                  (d &&
                    (o++,
                    "tag" === (n = l(a)).type &&
                      t.components[n.name] &&
                      ((n.type = "component"), (s = !0)),
                    n.voidElement ||
                      s ||
                      !f ||
                      "<" === f ||
                      n.children.push({
                        type: "text",
                        content: e.slice(h, e.indexOf("<", h)),
                      }),
                    0 === o && r.push(n),
                    (p = i[o - 1]) && p.children.push(n),
                    (i[o] = n)),
                  (!d || n.voidElement) &&
                    (o > -1 &&
                      (n.voidElement || n.name === a.slice(2, -1)) &&
                      (n = -1 == --o ? r : i[o]),
                    !s && "<" !== f && f))
                ) {
                  p = -1 === o ? r : i[o].children;
                  var y = e.indexOf("<", h),
                    b = e.slice(h, -1 === y ? void 0 : y);
                  c.test(b) && (b = " "),
                    ((y > -1 && o + p.length >= 0) || " " !== b) &&
                      p.push({ type: "text", content: b });
                }
              }),
              r
            );
          },
          stringify: function (e) {
            return e.reduce(function (e, t) {
              return (
                e +
                (function e(t, n) {
                  switch (n.type) {
                    case "text":
                      return t + n.content;
                    case "tag":
                      return (
                        (t +=
                          "<" +
                          n.name +
                          (n.attrs
                            ? (function (e) {
                                var t = [];
                                for (var n in e) t.push(n + '="' + e[n] + '"');
                                return t.length ? " " + t.join(" ") : "";
                              })(n.attrs)
                            : "") +
                          (n.voidElement ? "/>" : ">")),
                        n.voidElement
                          ? t
                          : t + n.children.reduce(e, "") + "</" + n.name + ">"
                      );
                    case "comment":
                      return t + "<!--" + n.comment + "-->";
                  }
                })("", t)
              );
            }, "");
          },
        };
      function g() {
        if (console && console.warn) {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          "string" == typeof t[0] && (t[0] = `react-i18next:: ${t[0]}`),
            console.warn(...t);
        }
      }
      let h = {};
      function f() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        ("string" == typeof t[0] && h[t[0]]) ||
          ("string" == typeof t[0] && (h[t[0]] = new Date()), g(...t));
      }
      let m = (e, t) => () => {
        if (e.isInitialized) t();
        else {
          let n = () => {
            setTimeout(() => {
              e.off("initialized", n);
            }, 0),
              t();
          };
          e.on("initialized", n);
        }
      };
      function y(e, t, n) {
        e.loadNamespaces(t, m(e, n));
      }
      function b(e, t, n, r) {
        "string" == typeof n && (n = [n]),
          n.forEach((t) => {
            0 > e.options.ns.indexOf(t) && e.options.ns.push(t);
          }),
          e.loadLanguages(t, m(e, r));
      }
      let v =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        x = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
          "&nbsp;": " ",
          "&#160;": " ",
          "&copy;": "\xa9",
          "&#169;": "\xa9",
          "&reg;": "\xae",
          "&#174;": "\xae",
          "&hellip;": "…",
          "&#8230;": "…",
          "&#x2F;": "/",
          "&#47;": "/",
        },
        S = (e) => x[e],
        k = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
          unescape: (e) => e.replace(v, S),
        };
      function w(e, t) {
        if (!e) return !1;
        let n = e.props ? e.props.children : e.children;
        return t ? n.length > 0 : !!n;
      }
      function $(e) {
        if (!e) return [];
        let t = e.props ? e.props.children : e.children;
        return e.props && e.props.i18nIsDynamicList ? O(t) : t;
      }
      function O(e) {
        return Array.isArray(e) ? e : [e];
      }
      let L = (0, i.createContext)();
      class j {
        constructor() {
          this.usedNamespaces = {};
        }
        addUsedNamespaces(e) {
          e.forEach((e) => {
            this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
          });
        }
        getUsedNamespaces() {
          return Object.keys(this.usedNamespaces);
        }
      }
      function C(e) {
        let {
            children: t,
            count: n,
            parent: o,
            i18nKey: s,
            context: a,
            tOptions: l = {},
            values: u,
            defaults: c,
            components: p,
            ns: h,
            i18n: m,
            t: y,
            shouldUnescape: b,
            ...v
          } = e,
          { i18n: x, defaultNS: S } = (0, i.useContext)(L) || {},
          j = m || x || r,
          C = y || (j && j.t.bind(j));
        return (function (e) {
          let {
              children: t,
              count: n,
              parent: o,
              i18nKey: s,
              context: a,
              tOptions: l = {},
              values: u,
              defaults: c,
              components: p,
              ns: h,
              i18n: m,
              t: y,
              shouldUnescape: b,
              ...v
            } = e,
            x = m || r;
          if (!x)
            return (
              f(
                "You will need to pass in an i18next instance by using i18nextReactModule"
              ),
              t
            );
          let S = y || x.t.bind(x) || ((e) => e),
            L = { ...k, ...(x.options && x.options.react) },
            j = h || S.ns || (x.options && x.options.defaultNS);
          j = "string" == typeof j ? [j] : j || ["translation"];
          let C = (function e(t, n) {
              if (!t) return "";
              let r = "",
                o = O(t),
                s =
                  n.transSupportBasicHtmlNodes && n.transKeepBasicHtmlNodesFor
                    ? n.transKeepBasicHtmlNodesFor
                    : [];
              return (
                o.forEach((t, o) => {
                  if ("string" == typeof t) r += `${t}`;
                  else if ((0, i.isValidElement)(t)) {
                    let i = Object.keys(t.props).length,
                      a = s.indexOf(t.type) > -1,
                      l = t.props.children;
                    if (!l && a && 0 === i) r += `<${t.type}/>`;
                    else if (l || (a && 0 === i)) {
                      if (t.props.i18nIsDynamicList) r += `<${o}></${o}>`;
                      else if (a && 1 === i && "string" == typeof l)
                        r += `<${t.type}>${l}</${t.type}>`;
                      else {
                        let t = e(l, n);
                        r += `<${o}>${t}</${o}>`;
                      }
                    } else r += `<${o}></${o}>`;
                  } else if (null === t)
                    g(
                      "Trans: the passed in value is invalid - seems you passed in a null child."
                    );
                  else if ("object" == typeof t) {
                    let { format: e, ...n } = t,
                      i = Object.keys(n);
                    if (1 === i.length) {
                      let t = e ? `${i[0]}, ${e}` : i[0];
                      r += `{{${t}}}`;
                    } else
                      g(
                        "react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",
                        t
                      );
                  } else
                    g(
                      "Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",
                      t
                    );
                }),
                r
              );
            })(t, L),
            R = c || C || L.transEmptyNodeValue || s,
            { hashTransKey: P } = L,
            E = s || (P ? P(C || R) : C || R);
          x.options &&
            x.options.interpolation &&
            x.options.interpolation.defaultVariables &&
            (u =
              u && Object.keys(u).length > 0
                ? { ...u, ...x.options.interpolation.defaultVariables }
                : { ...x.options.interpolation.defaultVariables });
          let N =
              u || void 0 !== n || !t
                ? l.interpolation
                : {
                    interpolation: {
                      ...l.interpolation,
                      prefix: "#$?",
                      suffix: "?$#",
                    },
                  },
            I = {
              ...l,
              context: a || l.context,
              count: n,
              ...u,
              ...N,
              defaultValue: R,
              ns: j,
            },
            A = E ? S(E, I) : R;
          p &&
            Object.keys(p).forEach((e) => {
              let t = p[e];
              "function" == typeof t.type ||
                !t.props ||
                !t.props.children ||
                (0 > A.indexOf(`${e}/>`) && 0 > A.indexOf(`${e} />`)) ||
                (p[e] = (0, i.createElement)(function () {
                  return (0, i.createElement)(i.Fragment, null, t);
                }));
            });
          let B = (function (e, t, n, r, o, s) {
              if ("" === t) return [];
              let a = r.transKeepBasicHtmlNodesFor || [],
                l = t && new RegExp(a.map((e) => `<${e}`).join("|")).test(t);
              if (!e && !l && !s) return [t];
              let u = {};
              !(function e(t) {
                O(t).forEach((t) => {
                  "string" == typeof t ||
                    (w(t)
                      ? e($(t))
                      : "object" != typeof t ||
                        (0, i.isValidElement)(t) ||
                        Object.assign(u, t));
                });
              })(e);
              let c = d.parse(`<0>${t}</0>`),
                p = { ...u, ...o };
              function g(e, t, n) {
                let r = $(e),
                  o = f(r, t.children, n);
                return ("[object Array]" ===
                  Object.prototype.toString.call(r) &&
                  r.every((e) => (0, i.isValidElement)(e)) &&
                  0 === o.length) ||
                  (e.props && e.props.i18nIsDynamicList)
                  ? r
                  : o;
              }
              function h(e, t, n, r, o) {
                e.dummy
                  ? ((e.children = t),
                    n.push((0, i.cloneElement)(e, { key: r }, o ? void 0 : t)))
                  : n.push(
                      ...i.Children.map([e], (e) => {
                        let n = { ...e.props };
                        return (
                          delete n.i18nIsDynamicList,
                          (0, i.createElement)(
                            e.type,
                            { ...n, key: r, ref: e.ref },
                            o ? null : t
                          )
                        );
                      })
                    );
              }
              function f(t, o, u) {
                let c = O(t);
                return O(o).reduce((t, o, d) => {
                  let m =
                    o.children &&
                    o.children[0] &&
                    o.children[0].content &&
                    n.services.interpolator.interpolate(
                      o.children[0].content,
                      p,
                      n.language
                    );
                  if ("tag" === o.type) {
                    let s = c[parseInt(o.name, 10)];
                    1 !== u.length || s || (s = u[0][o.name]), s || (s = {});
                    let y =
                        0 !== Object.keys(o.attrs).length
                          ? (function (e, t) {
                              let n = { ...t };
                              return (
                                (n.props = Object.assign(e.props, t.props)), n
                              );
                            })({ props: o.attrs }, s)
                          : s,
                      b = (0, i.isValidElement)(y),
                      v = b && w(o, !0) && !o.voidElement,
                      x = l && "object" == typeof y && y.dummy && !b,
                      S =
                        "object" == typeof e &&
                        null !== e &&
                        Object.hasOwnProperty.call(e, o.name);
                    if ("string" == typeof y) {
                      let e = n.services.interpolator.interpolate(
                        y,
                        p,
                        n.language
                      );
                      t.push(e);
                    } else if (w(y) || v) {
                      let e = g(y, o, u);
                      h(y, e, t, d);
                    } else if (x) h(y, f(c, o.children, u), t, d);
                    else if (Number.isNaN(parseFloat(o.name))) {
                      if (S) {
                        let e = g(y, o, u);
                        h(y, e, t, d, o.voidElement);
                      } else if (
                        r.transSupportBasicHtmlNodes &&
                        a.indexOf(o.name) > -1
                      ) {
                        if (o.voidElement)
                          t.push(
                            (0, i.createElement)(o.name, {
                              key: `${o.name}-${d}`,
                            })
                          );
                        else {
                          let e = f(c, o.children, u);
                          t.push(
                            (0, i.createElement)(
                              o.name,
                              { key: `${o.name}-${d}` },
                              e
                            )
                          );
                        }
                      } else if (o.voidElement) t.push(`<${o.name} />`);
                      else {
                        let e = f(c, o.children, u);
                        t.push(`<${o.name}>${e}</${o.name}>`);
                      }
                    } else if ("object" != typeof y || b)
                      h(y, m, t, d, 1 !== o.children.length || !m);
                    else {
                      let e = o.children[0] ? m : null;
                      e && t.push(e);
                    }
                  } else if ("text" === o.type) {
                    let e = r.transWrapTextNodes,
                      a = s
                        ? r.unescape(
                            n.services.interpolator.interpolate(
                              o.content,
                              p,
                              n.language
                            )
                          )
                        : n.services.interpolator.interpolate(
                            o.content,
                            p,
                            n.language
                          );
                    e
                      ? t.push(
                          (0, i.createElement)(e, { key: `${o.name}-${d}` }, a)
                        )
                      : t.push(a);
                  }
                  return t;
                }, []);
              }
              return $(f([{ dummy: !0, children: e || [] }], c, O(e || []))[0]);
            })(p || t, A, x, L, I, b),
            T = void 0 !== o ? o : L.defaultTransParent;
          return T ? (0, i.createElement)(T, v, B) : B;
        })({
          children: t,
          count: n,
          parent: o,
          i18nKey: s,
          context: a,
          tOptions: l,
          values: u,
          defaults: c,
          components: p,
          ns: h || (C && C.ns) || S || (j && j.options && j.options.defaultNS),
          i18n: j,
          t: y,
          shouldUnescape: b,
          ...v,
        });
      }
      let R = (e, t) => {
        let n = (0, i.useRef)();
        return (
          (0, i.useEffect)(() => {
            n.current = t ? n.current : e;
          }, [e, t]),
          n.current
        );
      };
      function P(e, t, n, r) {
        return e.getFixedT(t, n, r);
      }
      function E(e) {
        var t, n;
        let o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { i18n: s } = o,
          { i18n: a, defaultNS: l } = (0, i.useContext)(L) || {},
          u = s || a || r;
        if ((u && !u.reportNamespaces && (u.reportNamespaces = new j()), !u)) {
          f(
            "You will need to pass in an i18next instance by using initReactI18next"
          );
          let e = (e, t) =>
              "string" == typeof t
                ? t
                : t && "object" == typeof t && "string" == typeof t.defaultValue
                ? t.defaultValue
                : Array.isArray(e)
                ? e[e.length - 1]
                : e,
            t = [e, {}, !1];
          return (t.t = e), (t.i18n = {}), (t.ready = !1), t;
        }
        u.options.react &&
          void 0 !== u.options.react.wait &&
          f(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
          );
        let c = { ...k, ...u.options.react, ...o },
          { useSuspense: p, keyPrefix: d } = c,
          g = e || l || (u.options && u.options.defaultNS);
        (g = "string" == typeof g ? [g] : g || ["translation"]),
          u.reportNamespaces.addUsedNamespaces &&
            u.reportNamespaces.addUsedNamespaces(g);
        let h =
            (u.isInitialized || u.initializedStoreOnce) &&
            g.every((e) =>
              (function (e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return t.languages && t.languages.length
                  ? void 0 !== t.options.ignoreJSONStructure
                    ? t.hasLoadedNamespace(e, {
                        lng: n.lng,
                        precheck: (t, r) => {
                          if (
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1 &&
                            t.services.backendConnector.backend &&
                            t.isLanguageChangingTo &&
                            !r(t.isLanguageChangingTo, e)
                          )
                            return !1;
                        },
                      })
                    : (function (e, t) {
                        let n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          r = t.languages[0],
                          i = !!t.options && t.options.fallbackLng,
                          o = t.languages[t.languages.length - 1];
                        if ("cimode" === r.toLowerCase()) return !0;
                        let s = (e, n) => {
                          let r =
                            t.services.backendConnector.state[`${e}|${n}`];
                          return -1 === r || 2 === r;
                        };
                        return (
                          (!(
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1
                          ) ||
                            !t.services.backendConnector.backend ||
                            !t.isLanguageChangingTo ||
                            !!s(t.isLanguageChangingTo, e)) &&
                          !!(
                            t.hasResourceBundle(r, e) ||
                            !t.services.backendConnector.backend ||
                            (t.options.resources &&
                              !t.options.partialBundledLanguages) ||
                            (s(r, e) && (!i || s(o, e)))
                          )
                        );
                      })(e, t, n)
                  : (f("i18n.languages were undefined or empty", t.languages),
                    !0);
              })(e, u, c)
            ),
          m =
            ((t = o.lng || null),
            (n = "fallback" === c.nsMode ? g : g[0]),
            (0, i.useCallback)(P(u, t, n, d), [u, t, n, d])),
          v = () => m,
          x = () => P(u, o.lng || null, "fallback" === c.nsMode ? g : g[0], d),
          [S, w] = (0, i.useState)(v),
          $ = g.join();
        o.lng && ($ = `${o.lng}${$}`);
        let O = R($),
          C = (0, i.useRef)(!0);
        (0, i.useEffect)(() => {
          let { bindI18n: e, bindI18nStore: t } = c;
          function n() {
            C.current && w(x);
          }
          return (
            (C.current = !0),
            h ||
              p ||
              (o.lng
                ? b(u, o.lng, g, () => {
                    C.current && w(x);
                  })
                : y(u, g, () => {
                    C.current && w(x);
                  })),
            h && O && O !== $ && C.current && w(x),
            e && u && u.on(e, n),
            t && u && u.store.on(t, n),
            () => {
              (C.current = !1),
                e && u && e.split(" ").forEach((e) => u.off(e, n)),
                t && u && t.split(" ").forEach((e) => u.store.off(e, n));
            }
          );
        }, [u, $]),
          (0, i.useEffect)(() => {
            C.current && h && w(v);
          }, [u, d, h]);
        let E = [S, u, h];
        if (((E.t = S), (E.i18n = u), (E.ready = h), h || (!h && !p))) return E;
        throw new Promise((e) => {
          o.lng ? b(u, o.lng, g, () => e()) : y(u, g, () => e());
        });
      }
      function N(e) {
        let { i18n: t, defaultNS: n, children: r } = e,
          o = (0, i.useMemo)(() => ({ i18n: t, defaultNS: n }), [t, n]);
        return (0, i.createElement)(L.Provider, { value: o }, r);
      }
      function I() {
        return (I = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}.hasOwnProperty.call(n, r) && (e[r] = n[r]));
              }
              return e;
            }).apply(null, arguments);
      }
      function A(e) {
        return (A =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function B(e, t, n) {
        var r;
        return (
          ((r = (function (e, t) {
            if ("object" != A(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != A(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(t, "string")),
          (t = "symbol" == A(r) ? r : r + "") in e)
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var T = n(2535),
        z = n.n(T);
      function F(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function M(e, t) {
        if (e) {
          if ("string" == typeof e) return F(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? F(e, t)
              : void 0
          );
        }
      }
      function D(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                s,
                a = [],
                l = !0,
                u = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = o.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    l = !0
                  );
              } catch (e) {
                (u = !0), (i = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((s = n.return()), Object(s) !== s)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return a;
            }
          })(e, t) ||
          M(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function W(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                ({}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      var V = {
          defaultNS: "common",
          errorStackTraceLimit: 0,
          i18n: { defaultLocale: "en", locales: ["en"] },
          get initImmediate() {
            return "undefined" != typeof window;
          },
          interpolation: { escapeValue: !1 },
          load: "currentOnly",
          localeExtension: "json",
          localePath: "./public/locales",
          localeStructure: "{{lng}}/{{ns}}",
          react: { useSuspense: !1 },
          reloadOnPrerender: !1,
          serializeConfig: !0,
          use: [],
        },
        _ = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        U = ["i18n"],
        H = ["i18n"];
      function K(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                B(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var q = ["backend", "detection"],
        Y = function (e) {
          if ("string" != typeof (null == e ? void 0 : e.lng))
            throw Error("config.lng was not passed into createConfig");
          var t,
            n,
            r,
            i = e.i18n,
            o = W(e, U),
            s = V.i18n,
            a = J(J(J(J({}, W(V, H)), o), s), i),
            l = a.defaultNS,
            u = a.lng,
            c = a.localeExtension,
            p = a.localePath,
            d = a.nonExplicitSupportedLngs,
            g = a.locales.filter(function (e) {
              return "default" !== e;
            });
          if ("cimode" === u) return a;
          if (
            void 0 === a.fallbackLng &&
            ((a.fallbackLng = a.defaultLocale), "default" === a.fallbackLng)
          ) {
            var h = D(g, 1);
            a.fallbackLng = h[0];
          }
          var f =
              null == e || null === (t = e.interpolation) || void 0 === t
                ? void 0
                : t.prefix,
            m =
              null == e || null === (n = e.interpolation) || void 0 === n
                ? void 0
                : n.suffix,
            y = null != f ? f : "{{",
            b = null != m ? m : "}}";
          "string" != typeof (null == e ? void 0 : e.localeStructure) &&
            (f || m) &&
            (a.localeStructure = ""
              .concat(y, "lng")
              .concat(b, "/")
              .concat(y, "ns")
              .concat(b));
          var v = a.fallbackLng,
            x = a.localeStructure;
          if (d) {
            var S = function (e, t) {
              var n = D(t.split("-"), 1)[0];
              return (e[t] = [n]), e;
            };
            if ("string" == typeof v)
              a.fallbackLng = a.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(S, { default: [v] });
            else if (Array.isArray(v))
              a.fallbackLng = a.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(S, { default: v });
            else if ("object" === A(v))
              a.fallbackLng = Object.entries(a.fallbackLng).reduce(function (
                e,
                t
              ) {
                var n,
                  r = D(t, 2),
                  i = r[0],
                  o = r[1];
                return (
                  (e[i] = i.includes("-")
                    ? ((n = [i.split("-")[0]].concat(
                        (function (e) {
                          if (Array.isArray(e)) return F(e);
                        })(o) ||
                          (function (e) {
                            if (
                              ("undefined" != typeof Symbol &&
                                null != e[Symbol.iterator]) ||
                              null != e["@@iterator"]
                            )
                              return Array.from(e);
                          })(o) ||
                          M(o) ||
                          (function () {
                            throw TypeError(
                              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })()
                      )),
                      Array.from(new Set(n)))
                    : o),
                  e
                );
              },
              v);
            else if ("function" == typeof v)
              throw Error(
                "If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng"
              );
          }
          return (
            (null == e || null === (r = e.use) || void 0 === r
              ? void 0
              : r.some(function (e) {
                  return "backend" === e.type;
                })) ||
              ("string" == typeof p
                ? (a.backend = {
                    addPath: "".concat(p, "/").concat(x, ".missing.").concat(c),
                    loadPath: "".concat(p, "/").concat(x, ".").concat(c),
                  })
                : "function" != typeof p ||
                  (a.backend = {
                    addPath: function (e, t) {
                      return p(e, t, !0);
                    },
                    loadPath: function (e, t) {
                      return p(e, t, !1);
                    },
                  })),
            "string" == typeof a.ns || Array.isArray(a.ns) || (a.ns = [l]),
            q.forEach(function (t) {
              e[t] && (a[t] = J(J({}, a[t]), e[t]));
            }),
            a
          );
        };
      let G = {
        type: "logger",
        log(e) {
          this.output("log", e);
        },
        warn(e) {
          this.output("warn", e);
        },
        error(e) {
          this.output("error", e);
        },
        output(e, t) {
          console && console[e] && console[e].apply(console, t);
        },
      };
      class X {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.init(e, t);
        }
        init(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.prefix = t.prefix || "i18next:"),
            (this.logger = e || G),
            (this.options = t),
            (this.debug = t.debug);
        }
        log() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "log", "", !0);
        }
        warn() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "", !0);
        }
        error() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "error", "");
        }
        deprecate() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
        }
        forward(e, t, n, r) {
          return r && !this.debug
            ? null
            : ("string" == typeof e[0] && (e[0] = `${n}${this.prefix} ${e[0]}`),
              this.logger[t](e));
        }
        create(e) {
          return new X(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options,
          });
        }
        clone(e) {
          return (
            ((e = e || this.options).prefix = e.prefix || this.prefix),
            new X(this.logger, e)
          );
        }
      }
      var Q = new X();
      class Z {
        constructor() {
          this.observers = {};
        }
        on(e, t) {
          return (
            e.split(" ").forEach((e) => {
              this.observers[e] || (this.observers[e] = new Map());
              let n = this.observers[e].get(t) || 0;
              this.observers[e].set(t, n + 1);
            }),
            this
          );
        }
        off(e, t) {
          if (this.observers[e]) {
            if (!t) {
              delete this.observers[e];
              return;
            }
            this.observers[e].delete(t);
          }
        }
        emit(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          this.observers[e] &&
            Array.from(this.observers[e].entries()).forEach((e) => {
              let [t, r] = e;
              for (let e = 0; e < r; e++) t(...n);
            }),
            this.observers["*"] &&
              Array.from(this.observers["*"].entries()).forEach((t) => {
                let [r, i] = t;
                for (let t = 0; t < i; t++) r.apply(r, [e, ...n]);
              });
        }
      }
      function ee() {
        let e, t;
        let n = new Promise((n, r) => {
          (e = n), (t = r);
        });
        return (n.resolve = e), (n.reject = t), n;
      }
      function et(e) {
        return null == e ? "" : "" + e;
      }
      let en = /###/g;
      function er(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace(en, ".") : e;
        }
        function i() {
          return !e || "string" == typeof e;
        }
        let o = "string" != typeof t ? t : t.split("."),
          s = 0;
        for (; s < o.length - 1; ) {
          if (i()) return {};
          let t = r(o[s]);
          !e[t] && n && (e[t] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}),
            ++s;
        }
        return i() ? {} : { obj: e, k: r(o[s]) };
      }
      function ei(e, t, n) {
        let { obj: r, k: i } = er(e, t, Object);
        if (void 0 !== r || 1 === t.length) {
          r[i] = n;
          return;
        }
        let o = t[t.length - 1],
          s = t.slice(0, t.length - 1),
          a = er(e, s, Object);
        for (; void 0 === a.obj && s.length; )
          (o = `${s[s.length - 1]}.${o}`),
            (a = er(e, (s = s.slice(0, s.length - 1)), Object)) &&
              a.obj &&
              void 0 !== a.obj[`${a.k}.${o}`] &&
              (a.obj = void 0);
        a.obj[`${a.k}.${o}`] = n;
      }
      function eo(e, t) {
        let { obj: n, k: r } = er(e, t);
        if (n) return n[r];
      }
      function es(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var ea = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      function el(e) {
        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (e) => ea[e]) : e;
      }
      class eu {
        constructor(e) {
          (this.capacity = e),
            (this.regExpMap = new Map()),
            (this.regExpQueue = []);
        }
        getRegExp(e) {
          let t = this.regExpMap.get(e);
          if (void 0 !== t) return t;
          let n = new RegExp(e);
          return (
            this.regExpQueue.length === this.capacity &&
              this.regExpMap.delete(this.regExpQueue.shift()),
            this.regExpMap.set(e, n),
            this.regExpQueue.push(e),
            n
          );
        }
      }
      let ec = [" ", ",", "?", "!", ";"],
        ep = new eu(20);
      function ed(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
        if (!e) return;
        if (e[t]) return e[t];
        let r = t.split(n),
          i = e;
        for (let e = 0; e < r.length; ) {
          let t;
          if (!i || "object" != typeof i) return;
          let o = "";
          for (let s = e; s < r.length; ++s)
            if ((s !== e && (o += n), (o += r[s]), void 0 !== (t = i[o]))) {
              if (
                ["string", "number", "boolean"].indexOf(typeof t) > -1 &&
                s < r.length - 1
              )
                continue;
              e += s - e + 1;
              break;
            }
          i = t;
        }
        return i;
      }
      function eg(e) {
        return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
      }
      class eh extends Z {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { ns: ["translation"], defaultNS: "translation" };
          super(),
            (this.data = e || {}),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            void 0 === this.options.ignoreJSONStructure &&
              (this.options.ignoreJSONStructure = !0);
        }
        addNamespaces(e) {
          0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
        }
        removeNamespaces(e) {
          let t = this.options.ns.indexOf(e);
          t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(e, t, n) {
          let r,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            o =
              void 0 !== i.keySeparator
                ? i.keySeparator
                : this.options.keySeparator,
            s =
              void 0 !== i.ignoreJSONStructure
                ? i.ignoreJSONStructure
                : this.options.ignoreJSONStructure;
          e.indexOf(".") > -1
            ? (r = e.split("."))
            : ((r = [e, t]),
              n &&
                (Array.isArray(n)
                  ? r.push(...n)
                  : "string" == typeof n && o
                  ? r.push(...n.split(o))
                  : r.push(n)));
          let a = eo(this.data, r);
          return (!a &&
            !t &&
            !n &&
            e.indexOf(".") > -1 &&
            ((e = r[0]), (t = r[1]), (n = r.slice(2).join("."))),
          a || !s || "string" != typeof n)
            ? a
            : ed(this.data && this.data[e] && this.data[e][t], n, o);
        }
        addResource(e, t, n, r) {
          let i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : { silent: !1 },
            o =
              void 0 !== i.keySeparator
                ? i.keySeparator
                : this.options.keySeparator,
            s = [e, t];
          n && (s = s.concat(o ? n.split(o) : n)),
            e.indexOf(".") > -1 && ((s = e.split(".")), (r = t), (t = s[1])),
            this.addNamespaces(t),
            ei(this.data, s, r),
            i.silent || this.emit("added", e, t, n, r);
        }
        addResources(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { silent: !1 };
          for (let r in n)
            ("string" == typeof n[r] || Array.isArray(n[r])) &&
              this.addResource(e, t, r, n[r], { silent: !0 });
          r.silent || this.emit("added", e, t, n);
        }
        addResourceBundle(e, t, n, r, i) {
          let o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : { silent: !1, skipCopy: !1 },
            s = [e, t];
          e.indexOf(".") > -1 &&
            ((s = e.split(".")), (r = n), (n = t), (t = s[1])),
            this.addNamespaces(t);
          let a = eo(this.data, s) || {};
          o.skipCopy || (n = JSON.parse(JSON.stringify(n))),
            r
              ? (function e(t, n, r) {
                  for (let i in n)
                    "__proto__" !== i &&
                      "constructor" !== i &&
                      (i in t
                        ? "string" == typeof t[i] ||
                          t[i] instanceof String ||
                          "string" == typeof n[i] ||
                          n[i] instanceof String
                          ? r && (t[i] = n[i])
                          : e(t[i], n[i], r)
                        : (t[i] = n[i]));
                  return t;
                })(a, n, i)
              : (a = { ...a, ...n }),
            ei(this.data, s, a),
            o.silent || this.emit("added", e, t, n);
        }
        removeResourceBundle(e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t],
            this.removeNamespaces(t),
            this.emit("removed", e, t);
        }
        hasResourceBundle(e, t) {
          return void 0 !== this.getResource(e, t);
        }
        getResourceBundle(e, t) {
          return (t || (t = this.options.defaultNS),
          "v1" === this.options.compatibilityAPI)
            ? { ...this.getResource(e, t) }
            : this.getResource(e, t);
        }
        getDataByLanguage(e) {
          return this.data[e];
        }
        hasLanguageSomeTranslations(e) {
          let t = this.getDataByLanguage(e);
          return !!((t && Object.keys(t)) || []).find(
            (e) => t[e] && Object.keys(t[e]).length > 0
          );
        }
        toJSON() {
          return this.data;
        }
      }
      var ef = {
        processors: {},
        addPostProcessor(e) {
          this.processors[e.name] = e;
        },
        handle(e, t, n, r, i) {
          return (
            e.forEach((e) => {
              this.processors[e] &&
                (t = this.processors[e].process(t, n, r, i));
            }),
            t
          );
        },
      };
      let em = {};
      class ey extends Z {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            (function (e, t, n) {
              e.forEach((e) => {
                t[e] && (n[e] = t[e]);
              });
            })(
              [
                "resourceStore",
                "languageUtils",
                "pluralResolver",
                "interpolator",
                "backendConnector",
                "i18nFormat",
                "utils",
              ],
              e,
              this
            ),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            (this.logger = Q.create("translator"));
        }
        changeLanguage(e) {
          e && (this.language = e);
        }
        exists(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} };
          if (null == e) return !1;
          let n = this.resolve(e, t);
          return n && void 0 !== n.res;
        }
        extractFromKey(e, t) {
          let n =
            void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
          void 0 === n && (n = ":");
          let r =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            i = t.ns || this.options.defaultNS || [],
            o = n && e.indexOf(n) > -1,
            s =
              !this.options.userDefinedKeySeparator &&
              !t.keySeparator &&
              !this.options.userDefinedNsSeparator &&
              !t.nsSeparator &&
              !(function (e, t, n) {
                (t = t || ""), (n = n || "");
                let r = ec.filter((e) => 0 > t.indexOf(e) && 0 > n.indexOf(e));
                if (0 === r.length) return !0;
                let i = ep.getRegExp(
                    `(${r.map((e) => ("?" === e ? "\\?" : e)).join("|")})`
                  ),
                  o = !i.test(e);
                if (!o) {
                  let t = e.indexOf(n);
                  t > 0 && !i.test(e.substring(0, t)) && (o = !0);
                }
                return o;
              })(e, n, r);
          if (o && !s) {
            let t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return { key: e, namespaces: i };
            let o = e.split(n);
            (n !== r || (n === r && this.options.ns.indexOf(o[0]) > -1)) &&
              (i = o.shift()),
              (e = o.join(r));
          }
          return "string" == typeof i && (i = [i]), { key: e, namespaces: i };
        }
        translate(e, t, n) {
          if (
            ("object" != typeof t &&
              this.options.overloadTranslationOptionHandler &&
              (t = this.options.overloadTranslationOptionHandler(arguments)),
            "object" == typeof t && (t = { ...t }),
            t || (t = {}),
            null == e)
          )
            return "";
          Array.isArray(e) || (e = [String(e)]);
          let r =
              void 0 !== t.returnDetails
                ? t.returnDetails
                : this.options.returnDetails,
            i =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            { key: o, namespaces: s } = this.extractFromKey(e[e.length - 1], t),
            a = s[s.length - 1],
            l = t.lng || this.language,
            u =
              t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (l && "cimode" === l.toLowerCase()) {
            if (u) {
              let e = t.nsSeparator || this.options.nsSeparator;
              return r
                ? {
                    res: `${a}${e}${o}`,
                    usedKey: o,
                    exactUsedKey: o,
                    usedLng: l,
                    usedNS: a,
                    usedParams: this.getUsedParamsDetails(t),
                  }
                : `${a}${e}${o}`;
            }
            return r
              ? {
                  res: o,
                  usedKey: o,
                  exactUsedKey: o,
                  usedLng: l,
                  usedNS: a,
                  usedParams: this.getUsedParamsDetails(t),
                }
              : o;
          }
          let c = this.resolve(e, t),
            p = c && c.res,
            d = (c && c.usedKey) || o,
            g = (c && c.exactUsedKey) || o,
            h = Object.prototype.toString.apply(p),
            f =
              void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject,
            y =
              "string" != typeof p &&
              "boolean" != typeof p &&
              "number" != typeof p;
          if (
            m &&
            p &&
            y &&
            0 >
              [
                "[object Number]",
                "[object Function]",
                "[object RegExp]",
              ].indexOf(h) &&
            !("string" == typeof f && Array.isArray(p))
          ) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler ||
                this.logger.warn(
                  "accessing an object - but returnObjects options is not enabled!"
                );
              let e = this.options.returnedObjectHandler
                ? this.options.returnedObjectHandler(d, p, { ...t, ns: s })
                : `key '${o} (${this.language})' returned an object instead of string.`;
              return r
                ? ((c.res = e),
                  (c.usedParams = this.getUsedParamsDetails(t)),
                  c)
                : e;
            }
            if (i) {
              let e = Array.isArray(p),
                n = e ? [] : {},
                r = e ? g : d;
              for (let e in p)
                if (Object.prototype.hasOwnProperty.call(p, e)) {
                  let o = `${r}${i}${e}`;
                  (n[e] = this.translate(o, { ...t, joinArrays: !1, ns: s })),
                    n[e] === o && (n[e] = p[e]);
                }
              p = n;
            }
          } else if (m && "string" == typeof f && Array.isArray(p))
            (p = p.join(f)) && (p = this.extendTranslation(p, e, t, n));
          else {
            let r = !1,
              s = !1,
              u = void 0 !== t.count && "string" != typeof t.count,
              d = ey.hasDefaultValue(t),
              g = u ? this.pluralResolver.getSuffix(l, t.count, t) : "",
              h =
                t.ordinal && u
                  ? this.pluralResolver.getSuffix(l, t.count, { ordinal: !1 })
                  : "",
              f =
                u &&
                !t.ordinal &&
                0 === t.count &&
                this.pluralResolver.shouldUseIntlApi(),
              m =
                (f && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
                t[`defaultValue${g}`] ||
                t[`defaultValue${h}`] ||
                t.defaultValue;
            !this.isValidLookup(p) && d && ((r = !0), (p = m)),
              this.isValidLookup(p) || ((s = !0), (p = o));
            let y =
                (t.missingKeyNoValueFallbackToKey ||
                  this.options.missingKeyNoValueFallbackToKey) &&
                s
                  ? void 0
                  : p,
              b = d && m !== p && this.options.updateMissing;
            if (s || r || b) {
              if (
                (this.logger.log(
                  b ? "updateKey" : "missingKey",
                  l,
                  a,
                  o,
                  b ? m : p
                ),
                i)
              ) {
                let e = this.resolve(o, { ...t, keySeparator: !1 });
                e &&
                  e.res &&
                  this.logger.warn(
                    "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                  );
              }
              let e = [],
                n = this.languageUtils.getFallbackCodes(
                  this.options.fallbackLng,
                  t.lng || this.language
                );
              if ("fallback" === this.options.saveMissingTo && n && n[0])
                for (let t = 0; t < n.length; t++) e.push(n[t]);
              else
                "all" === this.options.saveMissingTo
                  ? (e = this.languageUtils.toResolveHierarchy(
                      t.lng || this.language
                    ))
                  : e.push(t.lng || this.language);
              let r = (e, n, r) => {
                let i = d && r !== p ? r : y;
                this.options.missingKeyHandler
                  ? this.options.missingKeyHandler(e, a, n, i, b, t)
                  : this.backendConnector &&
                    this.backendConnector.saveMissing &&
                    this.backendConnector.saveMissing(e, a, n, i, b, t),
                  this.emit("missingKey", e, a, n, p);
              };
              this.options.saveMissing &&
                (this.options.saveMissingPlurals && u
                  ? e.forEach((e) => {
                      let n = this.pluralResolver.getSuffixes(e, t);
                      f &&
                        t[`defaultValue${this.options.pluralSeparator}zero`] &&
                        0 > n.indexOf(`${this.options.pluralSeparator}zero`) &&
                        n.push(`${this.options.pluralSeparator}zero`),
                        n.forEach((n) => {
                          r([e], o + n, t[`defaultValue${n}`] || m);
                        });
                    })
                  : r(e, o, m));
            }
            (p = this.extendTranslation(p, e, t, c, n)),
              s &&
                p === o &&
                this.options.appendNamespaceToMissingKey &&
                (p = `${a}:${o}`),
              (s || r) &&
                this.options.parseMissingKeyHandler &&
                (p =
                  "v1" !== this.options.compatibilityAPI
                    ? this.options.parseMissingKeyHandler(
                        this.options.appendNamespaceToMissingKey
                          ? `${a}:${o}`
                          : o,
                        r ? p : void 0
                      )
                    : this.options.parseMissingKeyHandler(p));
          }
          return r
            ? ((c.res = p), (c.usedParams = this.getUsedParamsDetails(t)), c)
            : p;
        }
        extendTranslation(e, t, n, r, i) {
          var o = this;
          if (this.i18nFormat && this.i18nFormat.parse)
            e = this.i18nFormat.parse(
              e,
              { ...this.options.interpolation.defaultVariables, ...n },
              n.lng || this.language || r.usedLng,
              r.usedNS,
              r.usedKey,
              { resolved: r }
            );
          else if (!n.skipInterpolation) {
            let s;
            n.interpolation &&
              this.interpolator.init({
                ...n,
                interpolation: {
                  ...this.options.interpolation,
                  ...n.interpolation,
                },
              });
            let a =
              "string" == typeof e &&
              (n &&
              n.interpolation &&
              void 0 !== n.interpolation.skipOnVariables
                ? n.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables);
            if (a) {
              let t = e.match(this.interpolator.nestingRegexp);
              s = t && t.length;
            }
            let l = n.replace && "string" != typeof n.replace ? n.replace : n;
            if (
              (this.options.interpolation.defaultVariables &&
                (l = { ...this.options.interpolation.defaultVariables, ...l }),
              (e = this.interpolator.interpolate(
                e,
                l,
                n.lng || this.language,
                n
              )),
              a)
            ) {
              let t = e.match(this.interpolator.nestingRegexp);
              s < (t && t.length) && (n.nest = !1);
            }
            !n.lng &&
              "v1" !== this.options.compatibilityAPI &&
              r &&
              r.res &&
              (n.lng = r.usedLng),
              !1 !== n.nest &&
                (e = this.interpolator.nest(
                  e,
                  function () {
                    for (
                      var e = arguments.length, r = Array(e), s = 0;
                      s < e;
                      s++
                    )
                      r[s] = arguments[s];
                    return i && i[0] === r[0] && !n.context
                      ? (o.logger.warn(
                          `It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`
                        ),
                        null)
                      : o.translate(...r, t);
                  },
                  n
                )),
              n.interpolation && this.interpolator.reset();
          }
          let s = n.postProcess || this.options.postProcess,
            a = "string" == typeof s ? [s] : s;
          return (
            null != e &&
              a &&
              a.length &&
              !1 !== n.applyPostProcessor &&
              (e = ef.handle(
                a,
                e,
                t,
                this.options && this.options.postProcessPassResolved
                  ? {
                      i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n),
                      },
                      ...n,
                    }
                  : n,
                this
              )),
            e
          );
        }
        resolve(e) {
          let t,
            n,
            r,
            i,
            o,
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            "string" == typeof e && (e = [e]),
            e.forEach((e) => {
              if (this.isValidLookup(t)) return;
              let a = this.extractFromKey(e, s),
                l = a.key;
              n = l;
              let u = a.namespaces;
              this.options.fallbackNS &&
                (u = u.concat(this.options.fallbackNS));
              let c = void 0 !== s.count && "string" != typeof s.count,
                p =
                  c &&
                  !s.ordinal &&
                  0 === s.count &&
                  this.pluralResolver.shouldUseIntlApi(),
                d =
                  void 0 !== s.context &&
                  ("string" == typeof s.context ||
                    "number" == typeof s.context) &&
                  "" !== s.context,
                g = s.lngs
                  ? s.lngs
                  : this.languageUtils.toResolveHierarchy(
                      s.lng || this.language,
                      s.fallbackLng
                    );
              u.forEach((e) => {
                this.isValidLookup(t) ||
                  ((o = e),
                  !em[`${g[0]}-${e}`] &&
                    this.utils &&
                    this.utils.hasLoadedNamespace &&
                    !this.utils.hasLoadedNamespace(o) &&
                    ((em[`${g[0]}-${e}`] = !0),
                    this.logger.warn(
                      `key "${n}" for languages "${g.join(
                        ", "
                      )}" won't get resolved as namespace "${o}" was not yet loaded`,
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                    )),
                  g.forEach((n) => {
                    let o;
                    if (this.isValidLookup(t)) return;
                    i = n;
                    let a = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                      this.i18nFormat.addLookupKeys(a, l, n, e, s);
                    else {
                      let e;
                      c && (e = this.pluralResolver.getSuffix(n, s.count, s));
                      let t = `${this.options.pluralSeparator}zero`,
                        r = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                      if (
                        (c &&
                          (a.push(l + e),
                          s.ordinal &&
                            0 === e.indexOf(r) &&
                            a.push(
                              l + e.replace(r, this.options.pluralSeparator)
                            ),
                          p && a.push(l + t)),
                        d)
                      ) {
                        let n = `${l}${this.options.contextSeparator}${s.context}`;
                        a.push(n),
                          c &&
                            (a.push(n + e),
                            s.ordinal &&
                              0 === e.indexOf(r) &&
                              a.push(
                                n + e.replace(r, this.options.pluralSeparator)
                              ),
                            p && a.push(n + t));
                      }
                    }
                    for (; (o = a.pop()); )
                      this.isValidLookup(t) ||
                        ((r = o), (t = this.getResource(n, e, o, s)));
                  }));
              });
            }),
            { res: t, usedKey: n, exactUsedKey: r, usedLng: i, usedNS: o }
          );
        }
        isValidLookup(e) {
          return (
            void 0 !== e &&
            !(!this.options.returnNull && null === e) &&
            !(!this.options.returnEmptyString && "" === e)
          );
        }
        getResource(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource
            ? this.i18nFormat.getResource(e, t, n, r)
            : this.resourceStore.getResource(e, t, n, r);
        }
        getUsedParamsDetails() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.replace && "string" != typeof e.replace,
            n = t ? e.replace : e;
          if (
            (t && void 0 !== e.count && (n.count = e.count),
            this.options.interpolation.defaultVariables &&
              (n = { ...this.options.interpolation.defaultVariables, ...n }),
            !t)
          )
            for (let e of ((n = { ...n }),
            [
              "defaultValue",
              "ordinal",
              "context",
              "replace",
              "lng",
              "lngs",
              "fallbackLng",
              "ns",
              "keySeparator",
              "nsSeparator",
              "returnObjects",
              "returnDetails",
              "joinArrays",
              "postProcess",
              "interpolation",
            ]))
              delete n[e];
          return n;
        }
        static hasDefaultValue(e) {
          let t = "defaultValue";
          for (let n in e)
            if (
              Object.prototype.hasOwnProperty.call(e, n) &&
              t === n.substring(0, t.length) &&
              void 0 !== e[n]
            )
              return !0;
          return !1;
        }
      }
      function eb(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      class ev {
        constructor(e) {
          (this.options = e),
            (this.supportedLngs = this.options.supportedLngs || !1),
            (this.logger = Q.create("languageUtils"));
        }
        getScriptPartFromCode(e) {
          if (!(e = eg(e)) || 0 > e.indexOf("-")) return null;
          let t = e.split("-");
          return 2 === t.length
            ? null
            : (t.pop(), "x" === t[t.length - 1].toLowerCase())
            ? null
            : this.formatLanguageCode(t.join("-"));
        }
        getLanguagePartFromCode(e) {
          if (!(e = eg(e)) || 0 > e.indexOf("-")) return e;
          let t = e.split("-");
          return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
          if ("string" == typeof e && e.indexOf("-") > -1) {
            let t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
              n = e.split("-");
            return (
              this.options.lowerCaseLng
                ? (n = n.map((e) => e.toLowerCase()))
                : 2 === n.length
                ? ((n[0] = n[0].toLowerCase()),
                  (n[1] = n[1].toUpperCase()),
                  t.indexOf(n[1].toLowerCase()) > -1 &&
                    (n[1] = eb(n[1].toLowerCase())))
                : 3 === n.length &&
                  ((n[0] = n[0].toLowerCase()),
                  2 === n[1].length && (n[1] = n[1].toUpperCase()),
                  "sgn" !== n[0] &&
                    2 === n[2].length &&
                    (n[2] = n[2].toUpperCase()),
                  t.indexOf(n[1].toLowerCase()) > -1 &&
                    (n[1] = eb(n[1].toLowerCase())),
                  t.indexOf(n[2].toLowerCase()) > -1 &&
                    (n[2] = eb(n[2].toLowerCase()))),
              n.join("-")
            );
          }
          return this.options.cleanCode || this.options.lowerCaseLng
            ? e.toLowerCase()
            : e;
        }
        isSupportedCode(e) {
          return (
            ("languageOnly" === this.options.load ||
              this.options.nonExplicitSupportedLngs) &&
              (e = this.getLanguagePartFromCode(e)),
            !this.supportedLngs ||
              !this.supportedLngs.length ||
              this.supportedLngs.indexOf(e) > -1
          );
        }
        getBestMatchFromCodes(e) {
          let t;
          return e
            ? (e.forEach((e) => {
                if (t) return;
                let n = this.formatLanguageCode(e);
                (!this.options.supportedLngs || this.isSupportedCode(n)) &&
                  (t = n);
              }),
              !t &&
                this.options.supportedLngs &&
                e.forEach((e) => {
                  if (t) return;
                  let n = this.getLanguagePartFromCode(e);
                  if (this.isSupportedCode(n)) return (t = n);
                  t = this.options.supportedLngs.find((e) => {
                    if (
                      e === n ||
                      (!(0 > e.indexOf("-") && 0 > n.indexOf("-")) &&
                        ((e.indexOf("-") > 0 &&
                          0 > n.indexOf("-") &&
                          e.substring(0, e.indexOf("-")) === n) ||
                          (0 === e.indexOf(n) && n.length > 1)))
                    )
                      return e;
                  });
                }),
              t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
              t)
            : null;
        }
        getFallbackCodes(e, t) {
          if (!e) return [];
          if (
            ("function" == typeof e && (e = e(t)),
            "string" == typeof e && (e = [e]),
            Array.isArray(e))
          )
            return e;
          if (!t) return e.default || [];
          let n = e[t];
          return (
            n || (n = e[this.getScriptPartFromCode(t)]),
            n || (n = e[this.formatLanguageCode(t)]),
            n || (n = e[this.getLanguagePartFromCode(t)]),
            n || (n = e.default),
            n || []
          );
        }
        toResolveHierarchy(e, t) {
          let n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            r = [],
            i = (e) => {
              e &&
                (this.isSupportedCode(e)
                  ? r.push(e)
                  : this.logger.warn(
                      `rejecting language code not found in supportedLngs: ${e}`
                    ));
            };
          return (
            "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
              ? ("languageOnly" !== this.options.load &&
                  i(this.formatLanguageCode(e)),
                "languageOnly" !== this.options.load &&
                  "currentOnly" !== this.options.load &&
                  i(this.getScriptPartFromCode(e)),
                "currentOnly" !== this.options.load &&
                  i(this.getLanguagePartFromCode(e)))
              : "string" == typeof e && i(this.formatLanguageCode(e)),
            n.forEach((e) => {
              0 > r.indexOf(e) && i(this.formatLanguageCode(e));
            }),
            r
          );
        }
      }
      let ex = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        eS = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0
            );
          },
          22: function (e) {
            return Number(
              1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
            );
          },
        },
        ek = ["v1", "v2", "v3"],
        ew = ["v4"],
        e$ = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      class eO {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.languageUtils = e),
            (this.options = t),
            (this.logger = Q.create("pluralResolver")),
            (!this.options.compatibilityJSON ||
              ew.includes(this.options.compatibilityJSON)) &&
              ("undefined" == typeof Intl || !Intl.PluralRules) &&
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
              )),
            (this.rules = (function () {
              let e = {};
              return (
                ex.forEach((t) => {
                  t.lngs.forEach((n) => {
                    e[n] = { numbers: t.nr, plurals: eS[t.fc] };
                  });
                }),
                e
              );
            })());
        }
        addRule(e, t) {
          this.rules[e] = t;
        }
        getRule(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(eg("dev" === e ? "en" : e), {
                type: t.ordinal ? "ordinal" : "cardinal",
              });
            } catch (e) {
              return;
            }
          return (
            this.rules[e] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(e)]
          );
        }
        needsPlural(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.getRule(e, t);
          return this.shouldUseIntlApi()
            ? n && n.resolvedOptions().pluralCategories.length > 1
            : n && n.numbers.length > 1;
        }
        getPluralFormsOfKey(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.getSuffixes(e, n).map((e) => `${t}${e}`);
        }
        getSuffixes(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.getRule(e, t);
          return n
            ? this.shouldUseIntlApi()
              ? n
                  .resolvedOptions()
                  .pluralCategories.sort((e, t) => e$[e] - e$[t])
                  .map(
                    (e) =>
                      `${this.options.prepend}${
                        t.ordinal ? `ordinal${this.options.prepend}` : ""
                      }${e}`
                  )
              : n.numbers.map((n) => this.getSuffix(e, n, t))
            : [];
        }
        getSuffix(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = this.getRule(e, n);
          return r
            ? this.shouldUseIntlApi()
              ? `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${r.select(t)}`
              : this.getSuffixRetroCompatible(r, t)
            : (this.logger.warn(`no plural rule found for: ${e}`), "");
        }
        getSuffixRetroCompatible(e, t) {
          let n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
            r = e.numbers[n];
          this.options.simplifyPluralSuffix &&
            2 === e.numbers.length &&
            1 === e.numbers[0] &&
            (2 === r ? (r = "plural") : 1 === r && (r = ""));
          let i = () =>
            this.options.prepend && r.toString()
              ? this.options.prepend + r.toString()
              : r.toString();
          return "v1" === this.options.compatibilityJSON
            ? 1 === r
              ? ""
              : "number" == typeof r
              ? `_plural_${r.toString()}`
              : i()
            : "v2" === this.options.compatibilityJSON ||
              (this.options.simplifyPluralSuffix &&
                2 === e.numbers.length &&
                1 === e.numbers[0])
            ? i()
            : this.options.prepend && n.toString()
            ? this.options.prepend + n.toString()
            : n.toString();
        }
        shouldUseIntlApi() {
          return !ek.includes(this.options.compatibilityJSON);
        }
      }
      function eL(e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : ".",
          i =
            !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          o = (function (e, t, n) {
            let r = eo(e, n);
            return void 0 !== r ? r : eo(t, n);
          })(e, t, n);
        return (
          !o &&
            i &&
            "string" == typeof n &&
            void 0 === (o = ed(e, n, r)) &&
            (o = ed(t, n, r)),
          o
        );
      }
      class ej {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = Q.create("interpolator")),
            (this.options = e),
            (this.format =
              (e.interpolation && e.interpolation.format) || ((e) => e)),
            this.init(e);
        }
        init() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.interpolation || (e.interpolation = { escapeValue: !0 });
          let {
            escape: t,
            escapeValue: n,
            useRawValueToEscape: r,
            prefix: i,
            prefixEscaped: o,
            suffix: s,
            suffixEscaped: a,
            formatSeparator: l,
            unescapeSuffix: u,
            unescapePrefix: c,
            nestingPrefix: p,
            nestingPrefixEscaped: d,
            nestingSuffix: g,
            nestingSuffixEscaped: h,
            nestingOptionsSeparator: f,
            maxReplaces: m,
            alwaysFormat: y,
          } = e.interpolation;
          (this.escape = void 0 !== t ? t : el),
            (this.escapeValue = void 0 === n || n),
            (this.useRawValueToEscape = void 0 !== r && r),
            (this.prefix = i ? es(i) : o || "{{"),
            (this.suffix = s ? es(s) : a || "}}"),
            (this.formatSeparator = l || ","),
            (this.unescapePrefix = u ? "" : c || "-"),
            (this.unescapeSuffix = this.unescapePrefix ? "" : u || ""),
            (this.nestingPrefix = p ? es(p) : d || es("$t(")),
            (this.nestingSuffix = g ? es(g) : h || es(")")),
            (this.nestingOptionsSeparator = f || ","),
            (this.maxReplaces = m || 1e3),
            (this.alwaysFormat = void 0 !== y && y),
            this.resetRegExp();
        }
        reset() {
          this.options && this.init(this.options);
        }
        resetRegExp() {
          let e = (e, t) =>
            e && e.source === t ? ((e.lastIndex = 0), e) : RegExp(t, "g");
          (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
            (this.regexpUnescape = e(
              this.regexpUnescape,
              `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
            )),
            (this.nestingRegexp = e(
              this.nestingRegexp,
              `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
            ));
        }
        interpolate(e, t, n, r) {
          let i, o, s;
          let a =
            (this.options &&
              this.options.interpolation &&
              this.options.interpolation.defaultVariables) ||
            {};
          function l(e) {
            return e.replace(/\$/g, "$$$$");
          }
          let u = (e) => {
            if (0 > e.indexOf(this.formatSeparator)) {
              let i = eL(
                t,
                a,
                e,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              );
              return this.alwaysFormat
                ? this.format(i, void 0, n, { ...r, ...t, interpolationkey: e })
                : i;
            }
            let i = e.split(this.formatSeparator),
              o = i.shift().trim(),
              s = i.join(this.formatSeparator).trim();
            return this.format(
              eL(
                t,
                a,
                o,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              ),
              s,
              n,
              { ...r, ...t, interpolationkey: o }
            );
          };
          this.resetRegExp();
          let c =
              (r && r.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            p =
              r && r.interpolation && void 0 !== r.interpolation.skipOnVariables
                ? r.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables;
          return (
            [
              { regex: this.regexpUnescape, safeValue: (e) => l(e) },
              {
                regex: this.regexp,
                safeValue: (e) => (this.escapeValue ? l(this.escape(e)) : l(e)),
              },
            ].forEach((t) => {
              for (s = 0; (i = t.regex.exec(e)); ) {
                let n = i[1].trim();
                if (void 0 === (o = u(n))) {
                  if ("function" == typeof c) {
                    let t = c(e, i, r);
                    o = "string" == typeof t ? t : "";
                  } else if (r && Object.prototype.hasOwnProperty.call(r, n))
                    o = "";
                  else if (p) {
                    o = i[0];
                    continue;
                  } else
                    this.logger.warn(
                      `missed to pass in variable ${n} for interpolating ${e}`
                    ),
                      (o = "");
                } else
                  "string" == typeof o ||
                    this.useRawValueToEscape ||
                    (o = et(o));
                let a = t.safeValue(o);
                if (
                  ((e = e.replace(i[0], a)),
                  p
                    ? ((t.regex.lastIndex += o.length),
                      (t.regex.lastIndex -= i[0].length))
                    : (t.regex.lastIndex = 0),
                  ++s >= this.maxReplaces)
                )
                  break;
              }
            }),
            e
          );
        }
        nest(e, t) {
          let n,
            r,
            i,
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          function s(e, t) {
            let n = this.nestingOptionsSeparator;
            if (0 > e.indexOf(n)) return e;
            let r = e.split(RegExp(`${n}[ ]*{`)),
              o = `{${r[1]}`;
            e = r[0];
            let s = (o = this.interpolate(o, i)).match(/'/g),
              a = o.match(/"/g);
            ((s && s.length % 2 == 0 && !a) || a.length % 2 != 0) &&
              (o = o.replace(/'/g, '"'));
            try {
              (i = JSON.parse(o)), t && (i = { ...t, ...i });
            } catch (t) {
              return (
                this.logger.warn(
                  `failed parsing options string in nesting for key ${e}`,
                  t
                ),
                `${e}${n}${o}`
              );
            }
            return (
              i.defaultValue &&
                i.defaultValue.indexOf(this.prefix) > -1 &&
                delete i.defaultValue,
              e
            );
          }
          for (; (n = this.nestingRegexp.exec(e)); ) {
            let a = [];
            ((i =
              (i = { ...o }).replace && "string" != typeof i.replace
                ? i.replace
                : i).applyPostProcessor = !1),
              delete i.defaultValue;
            let l = !1;
            if (
              -1 !== n[0].indexOf(this.formatSeparator) &&
              !/{.*}/.test(n[1])
            ) {
              let e = n[1].split(this.formatSeparator).map((e) => e.trim());
              (n[1] = e.shift()), (a = e), (l = !0);
            }
            if (
              (r = t(s.call(this, n[1].trim(), i), i)) &&
              n[0] === e &&
              "string" != typeof r
            )
              return r;
            "string" != typeof r && (r = et(r)),
              r ||
                (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),
                (r = "")),
              l &&
                (r = a.reduce(
                  (e, t) =>
                    this.format(e, t, o.lng, {
                      ...o,
                      interpolationkey: n[1].trim(),
                    }),
                  r.trim()
                )),
              (e = e.replace(n[0], r)),
              (this.regexp.lastIndex = 0);
          }
          return e;
        }
      }
      function eC(e) {
        let t = {};
        return function (n, r, i) {
          let o = r + JSON.stringify(i),
            s = t[o];
          return s || ((s = e(eg(r), i)), (t[o] = s)), s(n);
        };
      }
      class eR {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = Q.create("formatter")),
            (this.options = e),
            (this.formats = {
              number: eC((e, t) => {
                let n = new Intl.NumberFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              currency: eC((e, t) => {
                let n = new Intl.NumberFormat(e, { ...t, style: "currency" });
                return (e) => n.format(e);
              }),
              datetime: eC((e, t) => {
                let n = new Intl.DateTimeFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              relativetime: eC((e, t) => {
                let n = new Intl.RelativeTimeFormat(e, { ...t });
                return (e) => n.format(e, t.range || "day");
              }),
              list: eC((e, t) => {
                let n = new Intl.ListFormat(e, { ...t });
                return (e) => n.format(e);
              }),
            }),
            this.init(e);
        }
        init(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { interpolation: {} },
            n = t.interpolation;
          this.formatSeparator = n.formatSeparator
            ? n.formatSeparator
            : n.formatSeparator || ",";
        }
        add(e, t) {
          this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
          this.formats[e.toLowerCase().trim()] = eC(t);
        }
        format(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return t.split(this.formatSeparator).reduce((e, t) => {
            let { formatName: i, formatOptions: o } = (function (e) {
              let t = e.toLowerCase().trim(),
                n = {};
              if (e.indexOf("(") > -1) {
                let r = e.split("(");
                t = r[0].toLowerCase().trim();
                let i = r[1].substring(0, r[1].length - 1);
                "currency" === t && 0 > i.indexOf(":")
                  ? n.currency || (n.currency = i.trim())
                  : "relativetime" === t && 0 > i.indexOf(":")
                  ? n.range || (n.range = i.trim())
                  : i.split(";").forEach((e) => {
                      if (e) {
                        let [t, ...r] = e.split(":"),
                          i = r
                            .join(":")
                            .trim()
                            .replace(/^'+|'+$/g, ""),
                          o = t.trim();
                        n[o] || (n[o] = i),
                          "false" === i && (n[o] = !1),
                          "true" === i && (n[o] = !0),
                          isNaN(i) || (n[o] = parseInt(i, 10));
                      }
                    });
              }
              return { formatName: t, formatOptions: n };
            })(t);
            if (this.formats[i]) {
              let t = e;
              try {
                let s =
                    (r &&
                      r.formatParams &&
                      r.formatParams[r.interpolationkey]) ||
                    {},
                  a = s.locale || s.lng || r.locale || r.lng || n;
                t = this.formats[i](e, a, { ...o, ...r, ...s });
              } catch (e) {
                this.logger.warn(e);
              }
              return t;
            }
            return this.logger.warn(`there was no format function for ${i}`), e;
          }, e);
        }
      }
      class eP extends Z {
        constructor(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          super(),
            (this.backend = e),
            (this.store = t),
            (this.services = n),
            (this.languageUtils = n.languageUtils),
            (this.options = r),
            (this.logger = Q.create("backendConnector")),
            (this.waitingReads = []),
            (this.maxParallelReads = r.maxParallelReads || 10),
            (this.readingCalls = 0),
            (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
            (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
            (this.state = {}),
            (this.queue = []),
            this.backend &&
              this.backend.init &&
              this.backend.init(n, r.backend, r);
        }
        queueLoad(e, t, n, r) {
          let i = {},
            o = {},
            s = {},
            a = {};
          return (
            e.forEach((e) => {
              let r = !0;
              t.forEach((t) => {
                let s = `${e}|${t}`;
                !n.reload && this.store.hasResourceBundle(e, t)
                  ? (this.state[s] = 2)
                  : this.state[s] < 0 ||
                    (1 === this.state[s]
                      ? void 0 === o[s] && (o[s] = !0)
                      : ((this.state[s] = 1),
                        (r = !1),
                        void 0 === o[s] && (o[s] = !0),
                        void 0 === i[s] && (i[s] = !0),
                        void 0 === a[t] && (a[t] = !0)));
              }),
                r || (s[e] = !0);
            }),
            (Object.keys(i).length || Object.keys(o).length) &&
              this.queue.push({
                pending: o,
                pendingCount: Object.keys(o).length,
                loaded: {},
                errors: [],
                callback: r,
              }),
            {
              toLoad: Object.keys(i),
              pending: Object.keys(o),
              toLoadLanguages: Object.keys(s),
              toLoadNamespaces: Object.keys(a),
            }
          );
        }
        loaded(e, t, n) {
          let r = e.split("|"),
            i = r[0],
            o = r[1];
          t && this.emit("failedLoading", i, o, t),
            n &&
              this.store.addResourceBundle(i, o, n, void 0, void 0, {
                skipCopy: !0,
              }),
            (this.state[e] = t ? -1 : 2);
          let s = {};
          this.queue.forEach((n) => {
            (function (e, t, n, r) {
              let { obj: i, k: o } = er(e, t, Object);
              (i[o] = i[o] || []),
                r && (i[o] = i[o].concat(n)),
                r || i[o].push(n);
            })(n.loaded, [i], o),
              void 0 !== n.pending[e] &&
                (delete n.pending[e], n.pendingCount--),
              t && n.errors.push(t),
              0 !== n.pendingCount ||
                n.done ||
                (Object.keys(n.loaded).forEach((e) => {
                  s[e] || (s[e] = {});
                  let t = n.loaded[e];
                  t.length &&
                    t.forEach((t) => {
                      void 0 === s[e][t] && (s[e][t] = !0);
                    });
                }),
                (n.done = !0),
                n.errors.length ? n.callback(n.errors) : n.callback());
          }),
            this.emit("loaded", s),
            (this.queue = this.queue.filter((e) => !e.done));
        }
        read(e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.retryTimeout,
            o = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return o(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng: e,
              ns: t,
              fcName: n,
              tried: r,
              wait: i,
              callback: o,
            });
            return;
          }
          this.readingCalls++;
          let s = (s, a) => {
              if ((this.readingCalls--, this.waitingReads.length > 0)) {
                let e = this.waitingReads.shift();
                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
              }
              if (s && a && r < this.maxRetries) {
                setTimeout(() => {
                  this.read.call(this, e, t, n, r + 1, 2 * i, o);
                }, i);
                return;
              }
              o(s, a);
            },
            a = this.backend[n].bind(this.backend);
          if (2 === a.length) {
            try {
              let n = a(e, t);
              n && "function" == typeof n.then
                ? n.then((e) => s(null, e)).catch(s)
                : s(null, n);
            } catch (e) {
              s(e);
            }
            return;
          }
          return a(e, t, s);
        }
        prepareLoading(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                "No backend was added via i18next.use. Will not load resources."
              ),
              r && r()
            );
          "string" == typeof e &&
            (e = this.languageUtils.toResolveHierarchy(e)),
            "string" == typeof t && (t = [t]);
          let i = this.queueLoad(e, t, n, r);
          if (!i.toLoad.length) return i.pending.length || r(), null;
          i.toLoad.forEach((e) => {
            this.loadOne(e);
          });
        }
        load(e, t, n) {
          this.prepareLoading(e, t, {}, n);
        }
        reload(e, t, n) {
          this.prepareLoading(e, t, { reload: !0 }, n);
        }
        loadOne(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = e.split("|"),
            r = n[0],
            i = n[1];
          this.read(r, i, "read", void 0, void 0, (n, o) => {
            n &&
              this.logger.warn(
                `${t}loading namespace ${i} for language ${r} failed`,
                n
              ),
              !n &&
                o &&
                this.logger.log(
                  `${t}loaded namespace ${i} for language ${r}`,
                  o
                ),
              this.loaded(e, n, o);
          });
        }
        saveMissing(e, t, n, r, i) {
          let o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            s =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : () => {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
          ) {
            this.logger.warn(
              `did not save key "${n}" as the namespace "${t}" was not yet loaded`,
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
            );
            return;
          }
          if (null != n && "" !== n) {
            if (this.backend && this.backend.create) {
              let a = { ...o, isUpdate: i },
                l = this.backend.create.bind(this.backend);
              if (l.length < 6)
                try {
                  let i;
                  (i = 5 === l.length ? l(e, t, n, r, a) : l(e, t, n, r)) &&
                  "function" == typeof i.then
                    ? i.then((e) => s(null, e)).catch(s)
                    : s(null, i);
                } catch (e) {
                  s(e);
                }
              else l(e, t, n, r, s, a);
            }
            e && e[0] && this.store.addResource(e[0], t, n, r);
          }
        }
      }
      function eE() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !1,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            let t = {};
            if (
              ("object" == typeof e[1] && (t = e[1]),
              "string" == typeof e[1] && (t.defaultValue = e[1]),
              "string" == typeof e[2] && (t.tDescription = e[2]),
              "object" == typeof e[2] || "object" == typeof e[3])
            ) {
              let n = e[3] || e[2];
              Object.keys(n).forEach((e) => {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: (e) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        };
      }
      function eN(e) {
        return (
          "string" == typeof e.ns && (e.ns = [e.ns]),
          "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            0 > e.supportedLngs.indexOf("cimode") &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        );
      }
      function eI() {}
      class eA extends Z {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (super(),
            (this.options = eN(e)),
            (this.services = {}),
            (this.logger = Q),
            (this.modules = { external: [] }),
            !(function (e) {
              Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(
                (t) => {
                  "function" == typeof e[t] && (e[t] = e[t].bind(e));
                }
              );
            })(this),
            t && !this.isInitialized && !e.isClone)
          ) {
            if (!this.options.initImmediate) return this.init(e, t), this;
            setTimeout(() => {
              this.init(e, t);
            }, 0);
          }
        }
        init() {
          var e = this;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
          (this.isInitializing = !0),
            "function" == typeof t && ((n = t), (t = {})),
            !t.defaultNS &&
              !1 !== t.defaultNS &&
              t.ns &&
              ("string" == typeof t.ns
                ? (t.defaultNS = t.ns)
                : 0 > t.ns.indexOf("translation") && (t.defaultNS = t.ns[0]));
          let r = eE();
          function i(e) {
            return e ? ("function" == typeof e ? new e() : e) : null;
          }
          if (
            ((this.options = { ...r, ...this.options, ...eN(t) }),
            "v1" !== this.options.compatibilityAPI &&
              (this.options.interpolation = {
                ...r.interpolation,
                ...this.options.interpolation,
              }),
            void 0 !== t.keySeparator &&
              (this.options.userDefinedKeySeparator = t.keySeparator),
            void 0 !== t.nsSeparator &&
              (this.options.userDefinedNsSeparator = t.nsSeparator),
            !this.options.isClone)
          ) {
            let t;
            this.modules.logger
              ? Q.init(i(this.modules.logger), this.options)
              : Q.init(null, this.options),
              this.modules.formatter
                ? (t = this.modules.formatter)
                : "undefined" != typeof Intl && (t = eR);
            let n = new ev(this.options);
            this.store = new eh(this.options.resources, this.options);
            let o = this.services;
            (o.logger = Q),
              (o.resourceStore = this.store),
              (o.languageUtils = n),
              (o.pluralResolver = new eO(n, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              t &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format ===
                    r.interpolation.format) &&
                ((o.formatter = i(t)),
                o.formatter.init(o, this.options),
                (this.options.interpolation.format = o.formatter.format.bind(
                  o.formatter
                ))),
              (o.interpolator = new ej(this.options)),
              (o.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (o.backendConnector = new eP(
                i(this.modules.backend),
                o.resourceStore,
                o,
                this.options
              )),
              o.backendConnector.on("*", function (t) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
                  i < n;
                  i++
                )
                  r[i - 1] = arguments[i];
                e.emit(t, ...r);
              }),
              this.modules.languageDetector &&
                ((o.languageDetector = i(this.modules.languageDetector)),
                o.languageDetector.init &&
                  o.languageDetector.init(
                    o,
                    this.options.detection,
                    this.options
                  )),
              this.modules.i18nFormat &&
                ((o.i18nFormat = i(this.modules.i18nFormat)),
                o.i18nFormat.init && o.i18nFormat.init(this)),
              (this.translator = new ey(this.services, this.options)),
              this.translator.on("*", function (t) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
                  i < n;
                  i++
                )
                  r[i - 1] = arguments[i];
                e.emit(t, ...r);
              }),
              this.modules.external.forEach((e) => {
                e.init && e.init(this);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            n || (n = eI),
            this.options.fallbackLng &&
              !this.services.languageDetector &&
              !this.options.lng)
          ) {
            let e = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng
            );
            e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0]);
          }
          this.services.languageDetector ||
            this.options.lng ||
            this.logger.warn(
              "init: no languageDetector is used and no lng is defined"
            ),
            [
              "getResource",
              "hasResourceBundle",
              "getResourceBundle",
              "getDataByLanguage",
            ].forEach((t) => {
              this[t] = function () {
                return e.store[t](...arguments);
              };
            }),
            [
              "addResource",
              "addResources",
              "addResourceBundle",
              "removeResourceBundle",
            ].forEach((t) => {
              this[t] = function () {
                return e.store[t](...arguments), e;
              };
            });
          let o = ee(),
            s = () => {
              let e = (e, t) => {
                (this.isInitializing = !1),
                  this.isInitialized &&
                    !this.initializedStoreOnce &&
                    this.logger.warn(
                      "init: i18next is already initialized. You should call init just once!"
                    ),
                  (this.isInitialized = !0),
                  this.options.isClone ||
                    this.logger.log("initialized", this.options),
                  this.emit("initialized", this.options),
                  o.resolve(t),
                  n(e, t);
              };
              if (
                this.languages &&
                "v1" !== this.options.compatibilityAPI &&
                !this.isInitialized
              )
                return e(null, this.t.bind(this));
              this.changeLanguage(this.options.lng, e);
            };
          return (
            this.options.resources || !this.options.initImmediate
              ? s()
              : setTimeout(s, 0),
            o
          );
        }
        loadResources(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : eI,
            n = t,
            r = "string" == typeof e ? e : this.language;
          if (
            ("function" == typeof e && (n = e),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (
              r &&
              "cimode" === r.toLowerCase() &&
              (!this.options.preload || 0 === this.options.preload.length)
            )
              return n();
            let e = [],
              t = (t) => {
                t &&
                  "cimode" !== t &&
                  this.services.languageUtils
                    .toResolveHierarchy(t)
                    .forEach((t) => {
                      "cimode" !== t && 0 > e.indexOf(t) && e.push(t);
                    });
              };
            r
              ? t(r)
              : this.services.languageUtils
                  .getFallbackCodes(this.options.fallbackLng)
                  .forEach((e) => t(e)),
              this.options.preload && this.options.preload.forEach((e) => t(e)),
              this.services.backendConnector.load(e, this.options.ns, (e) => {
                e ||
                  this.resolvedLanguage ||
                  !this.language ||
                  this.setResolvedLanguage(this.language),
                  n(e);
              });
          } else n(null);
        }
        reloadResources(e, t, n) {
          let r = ee();
          return (
            e || (e = this.languages),
            t || (t = this.options.ns),
            n || (n = eI),
            this.services.backendConnector.reload(e, t, (e) => {
              r.resolve(), n(e);
            }),
            r
          );
        }
        use(e) {
          if (!e)
            throw Error(
              "You are passing an undefined module! Please check the object you are passing to i18next.use()"
            );
          if (!e.type)
            throw Error(
              "You are passing a wrong module! Please check the object you are passing to i18next.use()"
            );
          return (
            "backend" === e.type && (this.modules.backend = e),
            ("logger" === e.type || (e.log && e.warn && e.error)) &&
              (this.modules.logger = e),
            "languageDetector" === e.type &&
              (this.modules.languageDetector = e),
            "i18nFormat" === e.type && (this.modules.i18nFormat = e),
            "postProcessor" === e.type && ef.addPostProcessor(e),
            "formatter" === e.type && (this.modules.formatter = e),
            "3rdParty" === e.type && this.modules.external.push(e),
            this
          );
        }
        setResolvedLanguage(e) {
          if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
            for (let e = 0; e < this.languages.length; e++) {
              let t = this.languages[e];
              if (
                !(["cimode", "dev"].indexOf(t) > -1) &&
                this.store.hasLanguageSomeTranslations(t)
              ) {
                this.resolvedLanguage = t;
                break;
              }
            }
        }
        changeLanguage(e, t) {
          var n = this;
          this.isLanguageChangingTo = e;
          let r = ee();
          this.emit("languageChanging", e);
          let i = (e) => {
              (this.language = e),
                (this.languages =
                  this.services.languageUtils.toResolveHierarchy(e)),
                (this.resolvedLanguage = void 0),
                this.setResolvedLanguage(e);
            },
            o = (e, o) => {
              o
                ? (i(o),
                  this.translator.changeLanguage(o),
                  (this.isLanguageChangingTo = void 0),
                  this.emit("languageChanged", o),
                  this.logger.log("languageChanged", o))
                : (this.isLanguageChangingTo = void 0),
                r.resolve(function () {
                  return n.t(...arguments);
                }),
                t &&
                  t(e, function () {
                    return n.t(...arguments);
                  });
            },
            s = (t) => {
              e || t || !this.services.languageDetector || (t = []);
              let n =
                "string" == typeof t
                  ? t
                  : this.services.languageUtils.getBestMatchFromCodes(t);
              n &&
                (this.language || i(n),
                this.translator.language || this.translator.changeLanguage(n),
                this.services.languageDetector &&
                  this.services.languageDetector.cacheUserLanguage &&
                  this.services.languageDetector.cacheUserLanguage(n)),
                this.loadResources(n, (e) => {
                  o(e, n);
                });
            };
          return (
            e ||
            !this.services.languageDetector ||
            this.services.languageDetector.async
              ? !e &&
                this.services.languageDetector &&
                this.services.languageDetector.async
                ? 0 === this.services.languageDetector.detect.length
                  ? this.services.languageDetector.detect().then(s)
                  : this.services.languageDetector.detect(s)
                : s(e)
              : s(this.services.languageDetector.detect()),
            r
          );
        }
        getFixedT(e, t, n) {
          var r = this;
          let i = function (e, t) {
            let o, s;
            if ("object" != typeof t) {
              for (
                var a = arguments.length, l = Array(a > 2 ? a - 2 : 0), u = 2;
                u < a;
                u++
              )
                l[u - 2] = arguments[u];
              o = r.options.overloadTranslationOptionHandler([e, t].concat(l));
            } else o = { ...t };
            (o.lng = o.lng || i.lng),
              (o.lngs = o.lngs || i.lngs),
              (o.ns = o.ns || i.ns),
              (o.keyPrefix = o.keyPrefix || n || i.keyPrefix);
            let c = r.options.keySeparator || ".";
            return (
              (s =
                o.keyPrefix && Array.isArray(e)
                  ? e.map((e) => `${o.keyPrefix}${c}${e}`)
                  : o.keyPrefix
                  ? `${o.keyPrefix}${c}${e}`
                  : e),
              r.t(s, o)
            );
          };
          return (
            "string" == typeof e ? (i.lng = e) : (i.lngs = e),
            (i.ns = t),
            (i.keyPrefix = n),
            i
          );
        }
        t() {
          return this.translator && this.translator.translate(...arguments);
        }
        exists() {
          return this.translator && this.translator.exists(...arguments);
        }
        setDefaultNamespace(e) {
          this.options.defaultNS = e;
        }
        hasLoadedNamespace(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.isInitialized)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18next was not initialized",
                this.languages
              ),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18n.languages were undefined or empty",
                this.languages
              ),
              !1
            );
          let n = t.lng || this.resolvedLanguage || this.languages[0],
            r = !!this.options && this.options.fallbackLng,
            i = this.languages[this.languages.length - 1];
          if ("cimode" === n.toLowerCase()) return !0;
          let o = (e, t) => {
            let n = this.services.backendConnector.state[`${e}|${t}`];
            return -1 === n || 2 === n;
          };
          if (t.precheck) {
            let e = t.precheck(this, o);
            if (void 0 !== e) return e;
          }
          return !!(
            this.hasResourceBundle(n, e) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (o(n, e) && (!r || o(i, e)))
          );
        }
        loadNamespaces(e, t) {
          let n = ee();
          return this.options.ns
            ? ("string" == typeof e && (e = [e]),
              e.forEach((e) => {
                0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
              }),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
          let n = ee();
          "string" == typeof e && (e = [e]);
          let r = this.options.preload || [],
            i = e.filter(
              (e) =>
                0 > r.indexOf(e) &&
                this.services.languageUtils.isSupportedCode(e)
            );
          return i.length
            ? ((this.options.preload = r.concat(i)),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        dir(e) {
          return (e ||
            (e =
              this.resolvedLanguage ||
              (this.languages && this.languages.length > 0
                ? this.languages[0]
                : this.language)),
          e)
            ? [
                "ar",
                "shu",
                "sqr",
                "ssh",
                "xaa",
                "yhd",
                "yud",
                "aao",
                "abh",
                "abv",
                "acm",
                "acq",
                "acw",
                "acx",
                "acy",
                "adf",
                "ads",
                "aeb",
                "aec",
                "afb",
                "ajp",
                "apc",
                "apd",
                "arb",
                "arq",
                "ars",
                "ary",
                "arz",
                "auz",
                "avl",
                "ayh",
                "ayl",
                "ayn",
                "ayp",
                "bbz",
                "pga",
                "he",
                "iw",
                "ps",
                "pbt",
                "pbu",
                "pst",
                "prp",
                "prd",
                "ug",
                "ur",
                "ydd",
                "yds",
                "yih",
                "ji",
                "yi",
                "hbo",
                "men",
                "xmn",
                "fa",
                "jpr",
                "peo",
                "pes",
                "prs",
                "dv",
                "sam",
                "ckb",
              ].indexOf(
                (
                  (this.services && this.services.languageUtils) ||
                  new ev(eE())
                ).getLanguagePartFromCode(e)
              ) > -1 || e.toLowerCase().indexOf("-arab") > 1
              ? "rtl"
              : "ltr"
            : "rtl";
        }
        static createInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return new eA(e, t);
        }
        cloneInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : eI,
            n = e.forkResourceStore;
          n && delete e.forkResourceStore;
          let r = { ...this.options, ...e, isClone: !0 },
            i = new eA(r);
          return (
            (void 0 !== e.debug || void 0 !== e.prefix) &&
              (i.logger = i.logger.clone(e)),
            ["store", "services", "language"].forEach((e) => {
              i[e] = this[e];
            }),
            (i.services = { ...this.services }),
            (i.services.utils = {
              hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
            }),
            n &&
              ((i.store = new eh(this.store.data, r)),
              (i.services.resourceStore = i.store)),
            (i.translator = new ey(i.services, r)),
            i.translator.on("*", function (e) {
              for (
                var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              i.emit(e, ...n);
            }),
            i.init(r, t),
            (i.translator.options = r),
            (i.translator.backendConnector.services.utils = {
              hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
            }),
            i
          );
        }
        toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        }
      }
      let eB = eA.createInstance();
      (eB.createInstance = eA.createInstance),
        eB.createInstance,
        eB.dir,
        eB.init,
        eB.loadResources,
        eB.reloadResources,
        eB.use,
        eB.changeLanguage,
        eB.getFixedT,
        eB.t,
        eB.exists,
        eB.setDefaultNamespace,
        eB.hasLoadedNamespace,
        eB.loadNamespaces,
        eB.loadLanguages;
      var eT = function (e) {
          void 0 === e.ns && (e.ns = []);
          var t,
            n,
            r = eB.createInstance(e);
          return (
            r.isInitialized
              ? (t = Promise.resolve(eB.t))
              : (null == e ||
                  null === (n = e.use) ||
                  void 0 === n ||
                  n.forEach(function (e) {
                    return r.use(e);
                  }),
                "function" == typeof e.onPreInitI18next &&
                  e.onPreInitI18next(r),
                (t = r.init(e))),
            { i18n: r, initPromise: t }
          );
        },
        ez = i.createElement;
      function eF(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eM(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eF(Object(n), !0).forEach(function (t) {
                B(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eF(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var eD = function (e, t) {
          if (t && e.isInitialized)
            for (var n = 0, r = Object.keys(t); n < r.length; n++)
              for (
                var i = r[n], o = 0, s = Object.keys(t[i]);
                o < s.length;
                o++
              ) {
                var a,
                  l = s[o];
                (null != e &&
                  null !== (a = e.store) &&
                  void 0 !== a &&
                  a.data &&
                  e.store.data[i] &&
                  e.store.data[i][l]) ||
                  e.addResourceBundle(i, l, t[i][l], !0, !0);
              }
        },
        eW = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          return z()(function (n) {
            var r,
              o,
              s = (n.pageProps || {})._nextI18Next,
              a =
                null !== (r = null == s ? void 0 : s.initialLocale) &&
                void 0 !== r
                  ? r
                  : null == n || null === (o = n.router) || void 0 === o
                  ? void 0
                  : o.locale,
              l = null == s ? void 0 : s.ns,
              u = (0, i.useRef)(null),
              c = (0, i.useMemo)(
                function () {
                  if (!s && !t) return null;
                  var e,
                    n = null != t ? t : null == s ? void 0 : s.userConfig;
                  if (!n)
                    throw Error(
                      "appWithTranslation was called without a next-i18next config"
                    );
                  if (!(null != n && n.i18n))
                    throw Error(
                      "appWithTranslation was called without config.i18n"
                    );
                  if (
                    !(
                      null != n &&
                      null !== (e = n.i18n) &&
                      void 0 !== e &&
                      e.defaultLocale
                    )
                  )
                    throw Error(
                      "config.i18n does not include a defaultLocale property"
                    );
                  var r = (s || {}).initialI18nStore,
                    i = null != t && t.resources ? t.resources : r;
                  a || (a = n.i18n.defaultLocale);
                  var o = u.current;
                  return (
                    o
                      ? eD(o, i)
                      : (eD(
                          (o = eT(
                            eM(
                              eM(
                                eM({}, Y(eM(eM({}, n), {}, { lng: a }))),
                                {},
                                { lng: a },
                                l && { ns: l }
                              ),
                              {},
                              { resources: i }
                            )
                          ).i18n),
                          i
                        ),
                        (u.current = o)),
                    o
                  );
                },
                [s, a, l]
              );
            return (
              _(
                function () {
                  c && a && c.changeLanguage(a);
                },
                [c, a]
              ),
              null !== c
                ? ez(N, { i18n: c }, ez(e, n))
                : ez(e, I({ key: a }, n))
            );
          }, e);
        };
    },
    6959: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(4064);
        },
      ]);
    },
    1815: function (e, t, n) {
      "use strict";
      let r = n(5601),
        i = [
          "en",
          "de",
          "es",
          "it",
          "pl",
          "ja",
          "zh",
          "pt",
          "th",
          "id",
          "vi",
          "kr",
          "ru",
        ];
      e.exports = {
        i18n: {
          defaultLocale: "en",
          locales: i,
          localePath: r.resolve("./public/locales"),
          localeDetection: !1,
        },
        fallbackLng: { default: ["en"] },
        nonExplicitWhitelist: !1,
        returnEmptyString: !1,
        returnNull: !1,
        whitelist: i,
        serializeConfig: !0,
        defaultNS: "translation",
      };
    },
    4064: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
          primary: function () {
            return o();
          },
          secondary: function () {
            return a();
          },
        });
      var r = n(2676),
        i = n(3733),
        o = n.n(i),
        s = n(6658),
        a = n.n(s),
        l = n(4614),
        u = n.n(l),
        c = n(350);
      let p = (0, c.zY)({
        "@supports (font: -apple-system-body) and (-webkit-appearance: none)": {
          "img[loading='lazy']": { clipPath: "inset(0.6px)" },
        },
        "*": { boxSizing: "border-box" },
        iframe: { colorScheme: "normal !important", pointerEvents: "auto" },
        ".Toastify__close-button": {
          w: 14,
          h: 16,
          pos: "relative",
          svg: { pos: "absolute", t: 0, r: 0 },
        },
        ".Toastify__toast-body": { width: "100%" },
        "html, body": {
          padding: 0,
          margin: 0,
          fontFamily: "$rubik",
          fontWeight: 400,
          color: "$textPrimary",
          fontSize: "$def",
          backgroundColor: "$bodyBg",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          scrollBehavior: "smooth",
        },
        "#__next": {
          height: "100%",
          whiteSpace: "pre-line",
          overflow: "hidden",
        },
        a: {
          backgroundColor: "transparent",
          color: "inherit",
          textDecoration: "inherit",
        },
        p: { margin: 0 },
        "button, input, optgroup, select, textarea": {
          margin: 0,
          padding: 0,
          width: "100%",
          fontFamily: "inherit",
          fontSize: "100%",
          lineHeight: 1.2,
          background: "transparent",
          textDecoration: "none",
          border: "none",
          outline: "none",
          appearance: "none",
        },
        video: { maxWidth: "100%", width: "100%", height: "auto" },
        "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "input[type=number]": { "-moz-appearance": "textfield" },
        "ol, ul": { margin: 0, padding: 0 },
        "h1, h2, h3, h4, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p":
          { margin: 0 },
      });
      (0, c.F4)({ "0%": { opacity: 0 }, "100%": { opacity: 1 } }),
        (0, c.F4)({ "0%": { opacity: 1 }, "100%": { opacity: 0 } });
      var d = n(1815),
        g = n.n(d);
      n(7097), n(3625), n(4238);
      var h = (0, n(3993).Jc)(function (e) {
        var t;
        let { Component: n, pageProps: i } = e,
          s = null !== (t = n.getLayout) && void 0 !== t ? t : (e) => e;
        return (
          p(),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(u(), {
                children: (0, r.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1.0",
                }),
              }),
              (0, r.jsx)("main", {
                className: ""
                  .concat(o().className, " ")
                  .concat(o().variable, " ")
                  .concat(a().variable),
                children: s((0, r.jsx)(n, { ...i })),
              }),
            ],
          })
        );
      }, g());
    },
    350: function (e, t, n) {
      "use strict";
      n.d(t, {
        zY: function () {
          return et;
        },
        F4: function () {
          return en;
        },
        BC: function () {
          return Q;
        },
        zo: function () {
          return ee;
        },
      });
      var r = n(5271),
        i = "colors",
        o = "sizes",
        s = "space",
        a = {
          gap: s,
          gridGap: s,
          columnGap: s,
          gridColumnGap: s,
          rowGap: s,
          gridRowGap: s,
          inset: s,
          insetBlock: s,
          insetBlockEnd: s,
          insetBlockStart: s,
          insetInline: s,
          insetInlineEnd: s,
          insetInlineStart: s,
          margin: s,
          marginTop: s,
          marginRight: s,
          marginBottom: s,
          marginLeft: s,
          marginBlock: s,
          marginBlockEnd: s,
          marginBlockStart: s,
          marginInline: s,
          marginInlineEnd: s,
          marginInlineStart: s,
          padding: s,
          paddingTop: s,
          paddingRight: s,
          paddingBottom: s,
          paddingLeft: s,
          paddingBlock: s,
          paddingBlockEnd: s,
          paddingBlockStart: s,
          paddingInline: s,
          paddingInlineEnd: s,
          paddingInlineStart: s,
          top: s,
          right: s,
          bottom: s,
          left: s,
          scrollMargin: s,
          scrollMarginTop: s,
          scrollMarginRight: s,
          scrollMarginBottom: s,
          scrollMarginLeft: s,
          scrollMarginX: s,
          scrollMarginY: s,
          scrollMarginBlock: s,
          scrollMarginBlockEnd: s,
          scrollMarginBlockStart: s,
          scrollMarginInline: s,
          scrollMarginInlineEnd: s,
          scrollMarginInlineStart: s,
          scrollPadding: s,
          scrollPaddingTop: s,
          scrollPaddingRight: s,
          scrollPaddingBottom: s,
          scrollPaddingLeft: s,
          scrollPaddingX: s,
          scrollPaddingY: s,
          scrollPaddingBlock: s,
          scrollPaddingBlockEnd: s,
          scrollPaddingBlockStart: s,
          scrollPaddingInline: s,
          scrollPaddingInlineEnd: s,
          scrollPaddingInlineStart: s,
          fontSize: "fontSizes",
          background: i,
          backgroundColor: i,
          backgroundImage: i,
          borderImage: i,
          border: i,
          borderBlock: i,
          borderBlockEnd: i,
          borderBlockStart: i,
          borderBottom: i,
          borderBottomColor: i,
          borderColor: i,
          borderInline: i,
          borderInlineEnd: i,
          borderInlineStart: i,
          borderLeft: i,
          borderLeftColor: i,
          borderRight: i,
          borderRightColor: i,
          borderTop: i,
          borderTopColor: i,
          caretColor: i,
          color: i,
          columnRuleColor: i,
          fill: i,
          outline: i,
          outlineColor: i,
          stroke: i,
          textDecorationColor: i,
          fontFamily: "fonts",
          fontWeight: "fontWeights",
          lineHeight: "lineHeights",
          letterSpacing: "letterSpacings",
          blockSize: o,
          minBlockSize: o,
          maxBlockSize: o,
          inlineSize: o,
          minInlineSize: o,
          maxInlineSize: o,
          width: o,
          minWidth: o,
          maxWidth: o,
          height: o,
          minHeight: o,
          maxHeight: o,
          flexBasis: o,
          gridTemplateColumns: o,
          gridTemplateRows: o,
          borderWidth: "borderWidths",
          borderTopWidth: "borderWidths",
          borderRightWidth: "borderWidths",
          borderBottomWidth: "borderWidths",
          borderLeftWidth: "borderWidths",
          borderStyle: "borderStyles",
          borderTopStyle: "borderStyles",
          borderRightStyle: "borderStyles",
          borderBottomStyle: "borderStyles",
          borderLeftStyle: "borderStyles",
          borderRadius: "radii",
          borderTopLeftRadius: "radii",
          borderTopRightRadius: "radii",
          borderBottomRightRadius: "radii",
          borderBottomLeftRadius: "radii",
          boxShadow: "shadows",
          textShadow: "shadows",
          transition: "transitions",
          zIndex: "zIndices",
        },
        l = (e, t) =>
          "function" == typeof t
            ? { "()": Function.prototype.toString.call(t) }
            : t,
        u = () => {
          let e = Object.create(null);
          return (t, n, ...r) => {
            let i = JSON.stringify(t, l);
            return i in e ? e[i] : (e[i] = n(t, ...r));
          };
        },
        c = Symbol.for("sxs.internal"),
        p = (e, t) =>
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
        d = (e) => {
          for (let t in e) return !0;
          return !1;
        },
        { hasOwnProperty: g } = Object.prototype,
        h = (e) =>
          e.includes("-")
            ? e
            : e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()),
        f = /\s+(?![^()]*\))/,
        m = (e) => (t) =>
          e(...("string" == typeof t ? String(t).split(f) : [t])),
        y = {
          appearance: (e) => ({ WebkitAppearance: e, appearance: e }),
          backfaceVisibility: (e) => ({
            WebkitBackfaceVisibility: e,
            backfaceVisibility: e,
          }),
          backdropFilter: (e) => ({
            WebkitBackdropFilter: e,
            backdropFilter: e,
          }),
          backgroundClip: (e) => ({
            WebkitBackgroundClip: e,
            backgroundClip: e,
          }),
          boxDecorationBreak: (e) => ({
            WebkitBoxDecorationBreak: e,
            boxDecorationBreak: e,
          }),
          clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }),
          content: (e) => ({
            content:
              e.includes('"') ||
              e.includes("'") ||
              /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
                e
              )
                ? e
                : `"${e}"`,
          }),
          hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }),
          maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }),
          maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }),
          tabSize: (e) => ({ MozTabSize: e, tabSize: e }),
          textSizeAdjust: (e) => ({
            WebkitTextSizeAdjust: e,
            textSizeAdjust: e,
          }),
          userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }),
          marginBlock: m((e, t) => ({
            marginBlockStart: e,
            marginBlockEnd: t || e,
          })),
          marginInline: m((e, t) => ({
            marginInlineStart: e,
            marginInlineEnd: t || e,
          })),
          maxSize: m((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })),
          minSize: m((e, t) => ({ minBlockSize: e, minInlineSize: t || e })),
          paddingBlock: m((e, t) => ({
            paddingBlockStart: e,
            paddingBlockEnd: t || e,
          })),
          paddingInline: m((e, t) => ({
            paddingInlineStart: e,
            paddingInlineEnd: t || e,
          })),
        },
        b = /([\d.]+)([^]*)/,
        v = (e, t) =>
          e.length
            ? e.reduce(
                (e, n) => (
                  e.push(
                    ...t.map((e) =>
                      e.includes("&")
                        ? e.replace(
                            /&/g,
                            /[ +>|~]/.test(n) && /&.*&/.test(e)
                              ? `:is(${n})`
                              : n
                          )
                        : n + " " + e
                    )
                  ),
                  e
                ),
                []
              )
            : t,
        x = (e, t) =>
          e in S && "string" == typeof t
            ? t.replace(
                /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
                (t, n, r, i) =>
                  n +
                  ("stretch" === r
                    ? `-moz-available${i};${h(e)}:${n}-webkit-fill-available`
                    : `-moz-fit-content${i};${h(e)}:${n}fit-content`) +
                  i
              )
            : String(t),
        S = {
          blockSize: 1,
          height: 1,
          inlineSize: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          width: 1,
        },
        k = (e) => (e ? e + "-" : ""),
        w = (e, t, n) =>
          e.replace(
            /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
            (e, r, i, o, s) =>
              ("$" == o) == !!i
                ? e
                : (r || "--" == o ? "calc(" : "") +
                  "var(--" +
                  ("$" === o
                    ? k(t) +
                      (s.includes("$") ? "" : k(n)) +
                      s.replace(/\$/g, "-")
                    : s) +
                  ")" +
                  (r || "--" == o ? "*" + (r || "") + (i || "1") + ")" : "")
          ),
        $ = /\s*,\s*(?![^()]*\))/,
        O = Object.prototype.toString,
        L = (e, t, n, r, i) => {
          let o, s, a;
          let l = (e, t, n) => {
            let u, c;
            let p = (e) => {
              var d;
              for (u in e) {
                let g = 64 === u.charCodeAt(0);
                for (c of g && Array.isArray(e[u]) ? e[u] : [e[u]]) {
                  let e = /[A-Z]/.test((d = u))
                      ? d
                      : d.replace(/-[^]/g, (e) => e[1].toUpperCase()),
                    f =
                      "object" == typeof c &&
                      c &&
                      c.toString === O &&
                      (!r.utils[e] || !t.length);
                  if (e in r.utils && !f) {
                    let t = r.utils[e];
                    if (t !== s) {
                      (s = t), p(t(c)), (s = null);
                      continue;
                    }
                  } else if (e in y) {
                    let t = y[e];
                    if (t !== a) {
                      (a = t), p(t(c)), (a = null);
                      continue;
                    }
                  }
                  if (
                    (g &&
                      (u = (
                        u.slice(1) in r.media
                          ? "@media " + r.media[u.slice(1)]
                          : u
                      ).replace(
                        /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                        (e, t, n, r, i, o) => {
                          let s = b.test(t),
                            a = 0.0625 * (s ? -1 : 1),
                            [l, u] = s ? [r, t] : [t, r];
                          return (
                            "(" +
                            ("=" === n[0]
                              ? ""
                              : (">" === n[0]) === s
                              ? "max-"
                              : "min-") +
                            l +
                            ":" +
                            ("=" !== n[0] && 1 === n.length
                              ? u.replace(
                                  b,
                                  (e, t, r) =>
                                    Number(t) + a * (">" === n ? 1 : -1) + r
                                )
                              : u) +
                            (i
                              ? ") and (" +
                                (">" === i[0] ? "min-" : "max-") +
                                l +
                                ":" +
                                (1 === i.length
                                  ? o.replace(
                                      b,
                                      (e, t, n) =>
                                        Number(t) + a * (">" === i ? -1 : 1) + n
                                    )
                                  : o)
                              : "") +
                            ")"
                          );
                        }
                      )),
                    f)
                  ) {
                    let e = g ? n.concat(u) : [...n],
                      r = g ? [...t] : v(t, u.split($));
                    void 0 !== o && i(j(...o)), (o = void 0), l(c, r, e);
                  } else
                    void 0 === o && (o = [[], t, n]),
                      (u =
                        g || 36 !== u.charCodeAt(0)
                          ? u
                          : `--${k(r.prefix)}${u
                              .slice(1)
                              .replace(/\$/g, "-")}`),
                      (c = f
                        ? c
                        : "number" == typeof c
                        ? c && e in C
                          ? String(c) + "px"
                          : String(c)
                        : w(x(e, null == c ? "" : c), r.prefix, r.themeMap[e])),
                      o[0].push(`${g ? `${u} ` : `${h(u)}:`}${c}`);
                }
              }
            };
            p(e), void 0 !== o && i(j(...o)), (o = void 0);
          };
          l(e, t, n);
        },
        j = (e, t, n) =>
          `${n.map((e) => `${e}{`).join("")}${
            t.length ? `${t.join(",")}{` : ""
          }${e.join(";")}${t.length ? "}" : ""}${Array(
            n.length ? n.length + 1 : 0
          ).join("}")}`,
        C = {
          animationDelay: 1,
          animationDuration: 1,
          backgroundSize: 1,
          blockSize: 1,
          border: 1,
          borderBlock: 1,
          borderBlockEnd: 1,
          borderBlockEndWidth: 1,
          borderBlockStart: 1,
          borderBlockStartWidth: 1,
          borderBlockWidth: 1,
          borderBottom: 1,
          borderBottomLeftRadius: 1,
          borderBottomRightRadius: 1,
          borderBottomWidth: 1,
          borderEndEndRadius: 1,
          borderEndStartRadius: 1,
          borderInlineEnd: 1,
          borderInlineEndWidth: 1,
          borderInlineStart: 1,
          borderInlineStartWidth: 1,
          borderInlineWidth: 1,
          borderLeft: 1,
          borderLeftWidth: 1,
          borderRadius: 1,
          borderRight: 1,
          borderRightWidth: 1,
          borderSpacing: 1,
          borderStartEndRadius: 1,
          borderStartStartRadius: 1,
          borderTop: 1,
          borderTopLeftRadius: 1,
          borderTopRightRadius: 1,
          borderTopWidth: 1,
          borderWidth: 1,
          bottom: 1,
          columnGap: 1,
          columnRule: 1,
          columnRuleWidth: 1,
          columnWidth: 1,
          containIntrinsicSize: 1,
          flexBasis: 1,
          fontSize: 1,
          gap: 1,
          gridAutoColumns: 1,
          gridAutoRows: 1,
          gridTemplateColumns: 1,
          gridTemplateRows: 1,
          height: 1,
          inlineSize: 1,
          inset: 1,
          insetBlock: 1,
          insetBlockEnd: 1,
          insetBlockStart: 1,
          insetInline: 1,
          insetInlineEnd: 1,
          insetInlineStart: 1,
          left: 1,
          letterSpacing: 1,
          margin: 1,
          marginBlock: 1,
          marginBlockEnd: 1,
          marginBlockStart: 1,
          marginBottom: 1,
          marginInline: 1,
          marginInlineEnd: 1,
          marginInlineStart: 1,
          marginLeft: 1,
          marginRight: 1,
          marginTop: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          offsetDistance: 1,
          offsetRotate: 1,
          outline: 1,
          outlineOffset: 1,
          outlineWidth: 1,
          overflowClipMargin: 1,
          padding: 1,
          paddingBlock: 1,
          paddingBlockEnd: 1,
          paddingBlockStart: 1,
          paddingBottom: 1,
          paddingInline: 1,
          paddingInlineEnd: 1,
          paddingInlineStart: 1,
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
          perspective: 1,
          right: 1,
          rowGap: 1,
          scrollMargin: 1,
          scrollMarginBlock: 1,
          scrollMarginBlockEnd: 1,
          scrollMarginBlockStart: 1,
          scrollMarginBottom: 1,
          scrollMarginInline: 1,
          scrollMarginInlineEnd: 1,
          scrollMarginInlineStart: 1,
          scrollMarginLeft: 1,
          scrollMarginRight: 1,
          scrollMarginTop: 1,
          scrollPadding: 1,
          scrollPaddingBlock: 1,
          scrollPaddingBlockEnd: 1,
          scrollPaddingBlockStart: 1,
          scrollPaddingBottom: 1,
          scrollPaddingInline: 1,
          scrollPaddingInlineEnd: 1,
          scrollPaddingInlineStart: 1,
          scrollPaddingLeft: 1,
          scrollPaddingRight: 1,
          scrollPaddingTop: 1,
          shapeMargin: 1,
          textDecoration: 1,
          textDecorationThickness: 1,
          textIndent: 1,
          textUnderlineOffset: 1,
          top: 1,
          transitionDelay: 1,
          transitionDuration: 1,
          verticalAlign: 1,
          width: 1,
          wordSpacing: 1,
        },
        R = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)),
        P = (e) =>
          ((e) => {
            let t,
              n = "";
            for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = R(t % 52) + n;
            return R(t % 52) + n;
          })(
            ((e, t) => {
              let n = t.length;
              for (; n; ) e = (33 * e) ^ t.charCodeAt(--n);
              return e;
            })(5381, JSON.stringify(e)) >>> 0
          ),
        E = [
          "themed",
          "global",
          "styled",
          "onevar",
          "resonevar",
          "allvar",
          "inline",
        ],
        N = (e) => {
          if (e.href && !e.href.startsWith(location.origin)) return !1;
          try {
            return !!e.cssRules;
          } catch (e) {
            return !1;
          }
        },
        I = (e) => {
          let t;
          let n = () => {
              let { cssRules: e } = t.sheet;
              return [].map
                .call(e, (n, r) => {
                  let { cssText: i } = n,
                    o = "";
                  if (i.startsWith("--sxs")) return "";
                  if (e[r - 1] && (o = e[r - 1].cssText).startsWith("--sxs")) {
                    if (!n.cssRules.length) return "";
                    for (let e in t.rules)
                      if (t.rules[e].group === n)
                        return `--sxs{--sxs:${[...t.rules[e].cache].join(
                          " "
                        )}}${i}`;
                    return n.cssRules.length ? `${o}${i}` : "";
                  }
                  return i;
                })
                .join("");
            },
            r = () => {
              if (t) {
                let { rules: e, sheet: n } = t;
                if (!n.deleteRule) {
                  for (; 3 === Object(Object(n.cssRules)[0]).type; )
                    n.cssRules.splice(0, 1);
                  n.cssRules = [];
                }
                for (let t in e) delete e[t];
              }
              for (let i of Object(e).styleSheets || [])
                if (N(i)) {
                  for (let e = 0, o = i.cssRules; o[e]; ++e) {
                    let s = Object(o[e]);
                    if (1 !== s.type) continue;
                    let a = Object(o[e + 1]);
                    if (4 !== a.type) continue;
                    ++e;
                    let { cssText: l } = s;
                    if (!l.startsWith("--sxs")) continue;
                    let u = l.slice(14, -3).trim().split(/\s+/),
                      c = E[u[0]];
                    c &&
                      (t ||
                        (t = { sheet: i, reset: r, rules: {}, toString: n }),
                      (t.rules[c] = { group: a, index: e, cache: new Set(u) }));
                  }
                  if (t) break;
                }
              if (!t) {
                let i = (e, t) => ({
                  type: t,
                  cssRules: [],
                  insertRule(e, t) {
                    this.cssRules.splice(
                      t,
                      0,
                      i(
                        e,
                        { import: 3, undefined: 1 }[
                          (e.toLowerCase().match(/^@([a-z]+)/) || [])[1]
                        ] || 4
                      )
                    );
                  },
                  get cssText() {
                    return "@media{}" === e
                      ? `@media{${[].map
                          .call(this.cssRules, (e) => e.cssText)
                          .join("")}}`
                      : e;
                  },
                });
                t = {
                  sheet: e
                    ? (e.head || e).appendChild(document.createElement("style"))
                        .sheet
                    : i("", "text/css"),
                  rules: {},
                  reset: r,
                  toString: n,
                };
              }
              let { sheet: i, rules: o } = t;
              for (let e = E.length - 1; e >= 0; --e) {
                let t = E[e];
                if (!o[t]) {
                  let n = E[e + 1],
                    r = o[n] ? o[n].index : i.cssRules.length;
                  i.insertRule("@media{}", r),
                    i.insertRule(`--sxs{--sxs:${e}}`, r),
                    (o[t] = {
                      group: i.cssRules[r + 1],
                      index: r,
                      cache: new Set([e]),
                    });
                }
                A(o[t]);
              }
            };
          return r(), t;
        },
        A = (e) => {
          let t = e.group,
            n = t.cssRules.length;
          e.apply = (e) => {
            try {
              t.insertRule(e, n), ++n;
            } catch (e) {}
          };
        },
        B = Symbol(),
        T = u(),
        z = (e, t) =>
          T(e, () => (...n) => {
            let r = { type: null, composers: new Set() };
            for (let t of n)
              if (null != t) {
                if (t[c])
                  for (let e of (null == r.type && (r.type = t[c].type),
                  t[c].composers))
                    r.composers.add(e);
                else
                  t.constructor !== Object || t.$$typeof
                    ? null == r.type && (r.type = t)
                    : r.composers.add(F(t, e));
              }
            return (
              null == r.type && (r.type = "span"),
              r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]),
              M(e, r, t)
            );
          }),
        F = (
          { variants: e, compoundVariants: t, defaultVariants: n, ...r },
          i
        ) => {
          let o = `${k(i.prefix)}c-${P(r)}`,
            s = [],
            a = [],
            l = Object.create(null),
            u = [];
          for (let e in n) l[e] = String(n[e]);
          if ("object" == typeof e && e)
            for (let t in e) {
              g.call(l, t) || (l[t] = "undefined");
              let n = e[t];
              for (let e in n) {
                let r = { [t]: String(e) };
                "undefined" === String(e) && u.push(t);
                let i = n[e],
                  o = [r, i, !d(i)];
                s.push(o);
              }
            }
          if ("object" == typeof t && t)
            for (let e of t) {
              let { css: t, ...n } = e;
              for (let e in ((t = ("object" == typeof t && t) || {}), n))
                n[e] = String(n[e]);
              let r = [n, t, !d(t)];
              a.push(r);
            }
          return [o, r, s, a, l, u];
        },
        M = (e, t, n) => {
          let [r, i, o, s] = D(t.composers),
            a =
              "function" == typeof t.type || t.type.$$typeof
                ? ((e) => {
                    function t() {
                      for (let n = 0; n < t[B].length; n++) {
                        let [r, i] = t[B][n];
                        e.rules[r].apply(i);
                      }
                      return (t[B] = []), null;
                    }
                    return (
                      (t[B] = []),
                      (t.rules = {}),
                      E.forEach(
                        (e) =>
                          (t.rules[e] = { apply: (n) => t[B].push([e, n]) })
                      ),
                      t
                    );
                  })(n)
                : null,
            l = (a || n).rules,
            u = `.${r}${
              i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""
            }`,
            d = (c) => {
              let { css: p, ...d } = (c = ("object" == typeof c && c) || V),
                g = {};
              for (let e in o)
                if ((delete d[e], e in c)) {
                  let t = c[e];
                  "object" == typeof t && t
                    ? (g[e] = { "@initial": o[e], ...t })
                    : ((t = String(t)),
                      (g[e] = "undefined" !== t || s.has(e) ? t : o[e]));
                } else g[e] = o[e];
              let h = new Set([...i]);
              for (let [r, i, o, s] of t.composers) {
                n.rules.styled.cache.has(r) ||
                  (n.rules.styled.cache.add(r),
                  L(i, [`.${r}`], [], e, (e) => {
                    l.styled.apply(e);
                  }));
                let t = W(o, g, e.media),
                  a = W(s, g, e.media, !0);
                for (let i of t)
                  if (void 0 !== i)
                    for (let [t, o, s] of i) {
                      let i = `${r}-${P(o)}-${t}`;
                      h.add(i);
                      let a = (s ? n.rules.resonevar : n.rules.onevar).cache,
                        u = s ? l.resonevar : l.onevar;
                      a.has(i) ||
                        (a.add(i),
                        L(o, [`.${i}`], [], e, (e) => {
                          u.apply(e);
                        }));
                    }
                for (let t of a)
                  if (void 0 !== t)
                    for (let [i, o] of t) {
                      let t = `${r}-${P(o)}-${i}`;
                      h.add(t),
                        n.rules.allvar.cache.has(t) ||
                          (n.rules.allvar.cache.add(t),
                          L(o, [`.${t}`], [], e, (e) => {
                            l.allvar.apply(e);
                          }));
                    }
              }
              if ("object" == typeof p && p) {
                let t = `${r}-i${P(p)}-css`;
                h.add(t),
                  n.rules.inline.cache.has(t) ||
                    (n.rules.inline.cache.add(t),
                    L(p, [`.${t}`], [], e, (e) => {
                      l.inline.apply(e);
                    }));
              }
              for (let e of String(c.className || "")
                .trim()
                .split(/\s+/))
                e && h.add(e);
              let f = (d.className = [...h].join(" "));
              return {
                type: t.type,
                className: f,
                selector: u,
                props: d,
                toString: () => f,
                deferredInjector: a,
              };
            };
          return p(d, {
            className: r,
            selector: u,
            [c]: t,
            toString: () => (n.rules.styled.cache.has(r) || d(), r),
          });
        },
        D = (e) => {
          let t = "",
            n = [],
            r = {},
            i = [];
          for (let [o, , , , s, a] of e)
            for (let e in ("" === t && (t = o), n.push(o), i.push(...a), s)) {
              let t = s[e];
              (void 0 === r[e] || "undefined" !== t || a.includes(t)) &&
                (r[e] = t);
            }
          return [t, n, r, new Set(i)];
        },
        W = (e, t, n, r) => {
          let i = [];
          e: for (let [o, s, a] of e) {
            if (a) continue;
            let e,
              l = 0,
              u = !1;
            for (e in o) {
              let r = o[e],
                i = t[e];
              if (i !== r) {
                if ("object" != typeof i || !i) continue e;
                {
                  let e,
                    t,
                    o = 0;
                  for (let s in i) {
                    if (r === String(i[s])) {
                      if ("@initial" !== s) {
                        let e = s.slice(1);
                        (t = t || []).push(
                          e in n ? n[e] : s.replace(/^@media ?/, "")
                        ),
                          (u = !0);
                      }
                      (l += o), (e = !0);
                    }
                    ++o;
                  }
                  if (
                    (t && t.length && (s = { ["@media " + t.join(", ")]: s }),
                    !e)
                  )
                    continue e;
                }
              }
            }
            (i[l] = i[l] || []).push([r ? "cv" : `${e}-${o[e]}`, s, u]);
          }
          return i;
        },
        V = {},
        _ = u(),
        U = (e, t) =>
          _(e, () => (...n) => {
            let r = () => {
              for (let r of n) {
                let n = P((r = ("object" == typeof r && r) || {}));
                if (!t.rules.global.cache.has(n)) {
                  if ((t.rules.global.cache.add(n), "@import" in r)) {
                    let e =
                      [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) -
                      1;
                    for (let n of [].concat(r["@import"]))
                      (n = n.includes('"') || n.includes("'") ? n : `"${n}"`),
                        t.sheet.insertRule(`@import ${n};`, e++);
                    delete r["@import"];
                  }
                  L(r, [], [], e, (e) => {
                    t.rules.global.apply(e);
                  });
                }
              }
              return "";
            };
            return p(r, { toString: r });
          }),
        H = u(),
        K = (e, t) =>
          H(e, () => (n) => {
            let r = `${k(e.prefix)}k-${P(n)}`,
              i = () => {
                if (!t.rules.global.cache.has(r)) {
                  t.rules.global.cache.add(r);
                  let i = [];
                  L(n, [], [], e, (e) => i.push(e));
                  let o = `@keyframes ${r}{${i.join("")}}`;
                  t.rules.global.apply(o);
                }
                return r;
              };
            return p(i, {
              get name() {
                return i();
              },
              toString: i,
            });
          }),
        J = class {
          constructor(e, t, n, r) {
            (this.token = null == e ? "" : String(e)),
              (this.value = null == t ? "" : String(t)),
              (this.scale = null == n ? "" : String(n)),
              (this.prefix = null == r ? "" : String(r));
          }
          get computedValue() {
            return "var(" + this.variable + ")";
          }
          get variable() {
            return "--" + k(this.prefix) + k(this.scale) + this.token;
          }
          toString() {
            return this.computedValue;
          }
        },
        q = u(),
        Y = (e, t) =>
          q(e, () => (n, r) => {
            r = ("object" == typeof n && n) || Object(r);
            let i = `.${(n =
                (n = "string" == typeof n ? n : "") ||
                `${k(e.prefix)}t-${P(r)}`)}`,
              o = {},
              s = [];
            for (let t in r)
              for (let n in ((o[t] = {}), r[t])) {
                let i = `--${k(e.prefix)}${t}-${n}`,
                  a = w(String(r[t][n]), e.prefix, t);
                (o[t][n] = new J(n, a, t, e.prefix)), s.push(`${i}:${a}`);
              }
            let a = () => {
              if (s.length && !t.rules.themed.cache.has(n)) {
                t.rules.themed.cache.add(n);
                let i = `${r === e.theme ? ":root," : ""}.${n}{${s.join(";")}}`;
                t.rules.themed.apply(i);
              }
              return n;
            };
            return {
              ...o,
              get className() {
                return a();
              },
              selector: i,
              toString: a,
            };
          }),
        G = u(),
        X = u();
      let Q = {
          minXs: "(min-width: 415px)",
          minSm: "(min-width: 576px)",
          minMd: "(min-width: 769px)",
          minLg: "(min-width: 992px)",
          minXl: "(min-width: 1200px)",
          minXxl: "(min-width: 1400px)",
          minXxxl: "(min-width: 1550px)",
          minExtraLarge: "(min-width: 2500px)",
          xs: "(max-width: 415px)",
          iphone14ProMax: "(max-width: 450px)",
          sm: "(max-width: 576px)",
          md: "(max-width: 768px)",
          lg: "(max-width: 992px)",
          xl: "(max-width: 1200px)",
          xxl: "(max-width: 1400px)",
          xxxl: "(max-width: 1550px)",
          extraLarge: "(max-width: 2500px)",
        },
        {
          getCssText: Z,
          styled: ee,
          globalCss: et,
          keyframes: en,
          theme: er,
        } = ((e) => {
          let t = ((e) => {
            let t = !1,
              n = G(e, (e) => {
                t = !0;
                let n =
                    "prefix" in (e = ("object" == typeof e && e) || {})
                      ? String(e.prefix)
                      : "",
                  r = ("object" == typeof e.media && e.media) || {},
                  i =
                    "object" == typeof e.root
                      ? e.root || null
                      : globalThis.document || null,
                  o = ("object" == typeof e.theme && e.theme) || {},
                  s = {
                    prefix: n,
                    media: r,
                    theme: o,
                    themeMap: ("object" == typeof e.themeMap && e.themeMap) || {
                      ...a,
                    },
                    utils: ("object" == typeof e.utils && e.utils) || {},
                  },
                  l = I(i),
                  u = {
                    css: z(s, l),
                    globalCss: U(s, l),
                    keyframes: K(s, l),
                    createTheme: Y(s, l),
                    reset() {
                      l.reset(), u.theme.toString();
                    },
                    theme: {},
                    sheet: l,
                    config: s,
                    prefix: n,
                    getCssText: l.toString,
                    toString: l.toString,
                  };
                return String((u.theme = u.createTheme(o))), u;
              });
            return t || n.reset(), n;
          })(e);
          return (
            (t.styled = (({ config: e, sheet: t }) =>
              X(e, () => {
                let n = z(e, t);
                return (...e) => {
                  let t = n(...e),
                    i = t[c].type,
                    o = r.forwardRef((e, n) => {
                      let o = (e && e.as) || i,
                        { props: s, deferredInjector: a } = t(e);
                      return (
                        delete s.as,
                        (s.ref = n),
                        a
                          ? r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(o, s),
                              r.createElement(a, null)
                            )
                          : r.createElement(o, s)
                      );
                    });
                  return (
                    (o.className = t.className),
                    (o.displayName = `Styled.${i.displayName || i.name || i}`),
                    (o.selector = t.selector),
                    (o.toString = () => t.selector),
                    (o[c] = t[c]),
                    o
                  );
                };
              }))(t)),
            t
          );
        })({
          theme: {
            colors: {
              main: "radial-gradient(213.64% 50% at 50% 50%, #FF286E 0%, #E62B68 100%)",
              bodyBg: "#FFF",
              textPrimary: "#FFF",
              textSecondary: "#262626",
              titlePrimary: "#2A4C75",
              titleSecondary: "#2A4C75",
              buttonBorderMain: "#FF78A4",
              pink: "#FF709F",
              white: "#fff",
              black: "#000",
              success: "#28C64A",
              error: "#EC1B2E",
            },
            space: { 1: "5px", 2: "10px", 3: "15px" },
            fontSizes: {
              xs: "12px",
              sm: "16px",
              md: "18px",
              def: "20px",
              lg: "24px",
              xl: "30px",
              xxl: "36px",
              titleXs: "38px",
              titleSm: "48px",
              titleSmMob: "64px",
              titleDef: "64px",
              titleMd: "100px",
              titleLg: "128px",
              titleXl: "164px",
              buttonDef: "18px",
            },
            fonts: { rubikBubbles: "Rubik Bubbles", rubik: "Rubik" },
            borderWidths: {},
            borderStyles: {},
            radii: { main: "46px", buttonMain: "0px", input: "8px" },
            shadows: {},
            zIndices: {},
            transitions: {},
          },
          media: Q,
          utils: {
            m: (e) => ({ margin: e }),
            mx: (e) => ({ marginLeft: e, marginRight: e }),
            my: (e) => ({ marginTop: e, marginBottom: e }),
            mt: (e) => ({ marginTop: e }),
            mr: (e) => ({ marginRight: e }),
            mb: (e) => ({ marginBottom: e }),
            ml: (e) => ({ marginLeft: e }),
            p: (e) => ({ padding: e }),
            px: (e) => ({ paddingLeft: e, paddingRight: e }),
            py: (e) => ({ paddingTop: e, paddingBottom: e }),
            pt: (e) => ({ paddingTop: e }),
            pr: (e) => ({ paddingRight: e }),
            pb: (e) => ({ paddingBottom: e }),
            pl: (e) => ({ paddingLeft: e }),
            size: (e) => ({ width: e, height: e }),
            br: (e) => ({ borderRadius: e }),
            d: (e) => ({ display: e }),
            w: (e) => ({ width: e }),
            maxW: (e) => ({ maxWidth: e }),
            h: (e) => ({ height: e }),
            maxH: (e) => ({ maxHeight: e }),
            minW: (e) => ({ minWidth: e }),
            minH: (e) => ({ minHeight: e }),
            fz: (e) => ({ fontSize: e }),
            lh: (e) => ({ lineHeight: e }),
            fw: (e) => ({ fontWeight: e }),
            ff: (e) => ({ fontFamily: e }),
            pos: (e) => ({ position: e }),
            r: (e) => ({ right: e }),
            l: (e) => ({ left: e }),
            t: (e) => ({ top: e }),
            b: (e) => ({ bottom: e }),
            bg: (e) => ({ background: e }),
            ta: (e) => ({ textAlign: e }),
            jc: (e) => ({ justifyContent: e }),
            ai: (e) => ({ alignItems: e }),
            fd: (e) => ({ flexDirection: e }),
            zi: (e) => ({ zIndex: e }),
            tt: (e) => ({ textTransform: e }),
          },
        });
    },
    4238: function () {},
    3625: function () {},
    7097: function () {},
    6658: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__secondary_42726d', '__secondary_Fallback_42726d'",
        },
        className: "__className_42726d",
        variable: "__variable_42726d",
      };
    },
    3733: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__primary_58d3a3', '__primary_Fallback_58d3a3'",
        },
        className: "__className_58d3a3",
        variable: "__variable_58d3a3",
      };
    },
    5601: function (e) {
      !(function () {
        "use strict";
        var t = {
            114: function (e) {
              function t(e) {
                if ("string" != typeof e)
                  throw TypeError(
                    "Path must be a string. Received " + JSON.stringify(e)
                  );
              }
              function n(e, t) {
                for (
                  var n, r = "", i = 0, o = -1, s = 0, a = 0;
                  a <= e.length;
                  ++a
                ) {
                  if (a < e.length) n = e.charCodeAt(a);
                  else if (47 === n) break;
                  else n = 47;
                  if (47 === n) {
                    if (o === a - 1 || 1 === s);
                    else if (o !== a - 1 && 2 === s) {
                      if (
                        r.length < 2 ||
                        2 !== i ||
                        46 !== r.charCodeAt(r.length - 1) ||
                        46 !== r.charCodeAt(r.length - 2)
                      ) {
                        if (r.length > 2) {
                          var l = r.lastIndexOf("/");
                          if (l !== r.length - 1) {
                            -1 === l
                              ? ((r = ""), (i = 0))
                              : (i =
                                  (r = r.slice(0, l)).length -
                                  1 -
                                  r.lastIndexOf("/")),
                              (o = a),
                              (s = 0);
                            continue;
                          }
                        } else if (2 === r.length || 1 === r.length) {
                          (r = ""), (i = 0), (o = a), (s = 0);
                          continue;
                        }
                      }
                      t && (r.length > 0 ? (r += "/..") : (r = ".."), (i = 2));
                    } else
                      r.length > 0
                        ? (r += "/" + e.slice(o + 1, a))
                        : (r = e.slice(o + 1, a)),
                        (i = a - o - 1);
                    (o = a), (s = 0);
                  } else 46 === n && -1 !== s ? ++s : (s = -1);
                }
                return r;
              }
              var r = {
                resolve: function () {
                  for (
                    var e, r, i = "", o = !1, s = arguments.length - 1;
                    s >= -1 && !o;
                    s--
                  )
                    s >= 0
                      ? (r = arguments[s])
                      : (void 0 === e && (e = ""), (r = e)),
                      t(r),
                      0 !== r.length &&
                        ((i = r + "/" + i), (o = 47 === r.charCodeAt(0)));
                  return ((i = n(i, !o)), o)
                    ? i.length > 0
                      ? "/" + i
                      : "/"
                    : i.length > 0
                    ? i
                    : ".";
                },
                normalize: function (e) {
                  if ((t(e), 0 === e.length)) return ".";
                  var r = 47 === e.charCodeAt(0),
                    i = 47 === e.charCodeAt(e.length - 1);
                  return (0 !== (e = n(e, !r)).length || r || (e = "."),
                  e.length > 0 && i && (e += "/"),
                  r)
                    ? "/" + e
                    : e;
                },
                isAbsolute: function (e) {
                  return t(e), e.length > 0 && 47 === e.charCodeAt(0);
                },
                join: function () {
                  if (0 == arguments.length) return ".";
                  for (var e, n = 0; n < arguments.length; ++n) {
                    var i = arguments[n];
                    t(i),
                      i.length > 0 && (void 0 === e ? (e = i) : (e += "/" + i));
                  }
                  return void 0 === e ? "." : r.normalize(e);
                },
                relative: function (e, n) {
                  if (
                    (t(e),
                    t(n),
                    e === n || (e = r.resolve(e)) === (n = r.resolve(n)))
                  )
                    return "";
                  for (var i = 1; i < e.length && 47 === e.charCodeAt(i); ++i);
                  for (
                    var o = e.length, s = o - i, a = 1;
                    a < n.length && 47 === n.charCodeAt(a);
                    ++a
                  );
                  for (
                    var l = n.length - a, u = s < l ? s : l, c = -1, p = 0;
                    p <= u;
                    ++p
                  ) {
                    if (p === u) {
                      if (l > u) {
                        if (47 === n.charCodeAt(a + p))
                          return n.slice(a + p + 1);
                        if (0 === p) return n.slice(a + p);
                      } else
                        s > u &&
                          (47 === e.charCodeAt(i + p)
                            ? (c = p)
                            : 0 === p && (c = 0));
                      break;
                    }
                    var d = e.charCodeAt(i + p);
                    if (d !== n.charCodeAt(a + p)) break;
                    47 === d && (c = p);
                  }
                  var g = "";
                  for (p = i + c + 1; p <= o; ++p)
                    (p === o || 47 === e.charCodeAt(p)) &&
                      (0 === g.length ? (g += "..") : (g += "/.."));
                  return g.length > 0
                    ? g + n.slice(a + c)
                    : ((a += c), 47 === n.charCodeAt(a) && ++a, n.slice(a));
                },
                _makeLong: function (e) {
                  return e;
                },
                dirname: function (e) {
                  if ((t(e), 0 === e.length)) return ".";
                  for (
                    var n = e.charCodeAt(0),
                      r = 47 === n,
                      i = -1,
                      o = !0,
                      s = e.length - 1;
                    s >= 1;
                    --s
                  )
                    if (47 === (n = e.charCodeAt(s))) {
                      if (!o) {
                        i = s;
                        break;
                      }
                    } else o = !1;
                  return -1 === i
                    ? r
                      ? "/"
                      : "."
                    : r && 1 === i
                    ? "//"
                    : e.slice(0, i);
                },
                basename: function (e, n) {
                  if (void 0 !== n && "string" != typeof n)
                    throw TypeError('"ext" argument must be a string');
                  t(e);
                  var r,
                    i = 0,
                    o = -1,
                    s = !0;
                  if (void 0 !== n && n.length > 0 && n.length <= e.length) {
                    if (n.length === e.length && n === e) return "";
                    var a = n.length - 1,
                      l = -1;
                    for (r = e.length - 1; r >= 0; --r) {
                      var u = e.charCodeAt(r);
                      if (47 === u) {
                        if (!s) {
                          i = r + 1;
                          break;
                        }
                      } else
                        -1 === l && ((s = !1), (l = r + 1)),
                          a >= 0 &&
                            (u === n.charCodeAt(a)
                              ? -1 == --a && (o = r)
                              : ((a = -1), (o = l)));
                    }
                    return (
                      i === o ? (o = l) : -1 === o && (o = e.length),
                      e.slice(i, o)
                    );
                  }
                  for (r = e.length - 1; r >= 0; --r)
                    if (47 === e.charCodeAt(r)) {
                      if (!s) {
                        i = r + 1;
                        break;
                      }
                    } else -1 === o && ((s = !1), (o = r + 1));
                  return -1 === o ? "" : e.slice(i, o);
                },
                extname: function (e) {
                  t(e);
                  for (
                    var n = -1, r = 0, i = -1, o = !0, s = 0, a = e.length - 1;
                    a >= 0;
                    --a
                  ) {
                    var l = e.charCodeAt(a);
                    if (47 === l) {
                      if (!o) {
                        r = a + 1;
                        break;
                      }
                      continue;
                    }
                    -1 === i && ((o = !1), (i = a + 1)),
                      46 === l
                        ? -1 === n
                          ? (n = a)
                          : 1 !== s && (s = 1)
                        : -1 !== n && (s = -1);
                  }
                  return -1 === n ||
                    -1 === i ||
                    0 === s ||
                    (1 === s && n === i - 1 && n === r + 1)
                    ? ""
                    : e.slice(n, i);
                },
                format: function (e) {
                  var t, n;
                  if (null === e || "object" != typeof e)
                    throw TypeError(
                      'The "pathObject" argument must be of type Object. Received type ' +
                        typeof e
                    );
                  return (
                    (t = e.dir || e.root),
                    (n = e.base || (e.name || "") + (e.ext || "")),
                    t ? (t === e.root ? t + n : t + "/" + n) : n
                  );
                },
                parse: function (e) {
                  t(e);
                  var n,
                    r = { root: "", dir: "", base: "", ext: "", name: "" };
                  if (0 === e.length) return r;
                  var i = e.charCodeAt(0),
                    o = 47 === i;
                  o ? ((r.root = "/"), (n = 1)) : (n = 0);
                  for (
                    var s = -1, a = 0, l = -1, u = !0, c = e.length - 1, p = 0;
                    c >= n;
                    --c
                  ) {
                    if (47 === (i = e.charCodeAt(c))) {
                      if (!u) {
                        a = c + 1;
                        break;
                      }
                      continue;
                    }
                    -1 === l && ((u = !1), (l = c + 1)),
                      46 === i
                        ? -1 === s
                          ? (s = c)
                          : 1 !== p && (p = 1)
                        : -1 !== s && (p = -1);
                  }
                  return (
                    -1 === s ||
                    -1 === l ||
                    0 === p ||
                    (1 === p && s === l - 1 && s === a + 1)
                      ? -1 !== l &&
                        (0 === a && o
                          ? (r.base = r.name = e.slice(1, l))
                          : (r.base = r.name = e.slice(a, l)))
                      : (0 === a && o
                          ? ((r.name = e.slice(1, s)), (r.base = e.slice(1, l)))
                          : ((r.name = e.slice(a, s)),
                            (r.base = e.slice(a, l))),
                        (r.ext = e.slice(s, l))),
                    a > 0 ? (r.dir = e.slice(0, a - 1)) : o && (r.dir = "/"),
                    r
                  );
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null,
              };
              (r.posix = r), (e.exports = r);
            },
          },
          n = {};
        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var o = (n[e] = { exports: {} }),
            s = !0;
          try {
            t[e](o, o.exports, r), (s = !1);
          } finally {
            s && delete n[e];
          }
          return o.exports;
        }
        r.ab = "//";
        var i = r(114);
        e.exports = i;
      })();
    },
    4614: function (e, t, n) {
      e.exports = n(8516);
    },
    198: function (e, t) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        s = n ? Symbol.for("react.strict_mode") : 60108,
        a = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        p = n ? Symbol.for("react.concurrent_mode") : 60111,
        d = n ? Symbol.for("react.forward_ref") : 60112,
        g = n ? Symbol.for("react.suspense") : 60113,
        h = n ? Symbol.for("react.suspense_list") : 60120,
        f = n ? Symbol.for("react.memo") : 60115,
        m = n ? Symbol.for("react.lazy") : 60116,
        y = n ? Symbol.for("react.block") : 60121,
        b = n ? Symbol.for("react.fundamental") : 60117,
        v = n ? Symbol.for("react.responder") : 60118,
        x = n ? Symbol.for("react.scope") : 60119;
      function S(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case c:
                case p:
                case o:
                case a:
                case s:
                case g:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case d:
                    case m:
                    case f:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function k(e) {
        return S(e) === p;
      }
      (t.AsyncMode = c),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = u),
        (t.ContextProvider = l),
        (t.Element = r),
        (t.ForwardRef = d),
        (t.Fragment = o),
        (t.Lazy = m),
        (t.Memo = f),
        (t.Portal = i),
        (t.Profiler = a),
        (t.StrictMode = s),
        (t.Suspense = g),
        (t.isAsyncMode = function (e) {
          return k(e) || S(e) === c;
        }),
        (t.isConcurrentMode = k),
        (t.isContextConsumer = function (e) {
          return S(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return S(e) === l;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return S(e) === d;
        }),
        (t.isFragment = function (e) {
          return S(e) === o;
        }),
        (t.isLazy = function (e) {
          return S(e) === m;
        }),
        (t.isMemo = function (e) {
          return S(e) === f;
        }),
        (t.isPortal = function (e) {
          return S(e) === i;
        }),
        (t.isProfiler = function (e) {
          return S(e) === a;
        }),
        (t.isStrictMode = function (e) {
          return S(e) === s;
        }),
        (t.isSuspense = function (e) {
          return S(e) === g;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === o ||
            e === p ||
            e === a ||
            e === s ||
            e === g ||
            e === h ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === f ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === d ||
                e.$$typeof === b ||
                e.$$typeof === v ||
                e.$$typeof === x ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = S);
    },
    6237: function (e, t, n) {
      "use strict";
      e.exports = n(198);
    },
    9626: function (e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6959), t(1249);
    }),
      (_N_E = e.O());
  },
]);
