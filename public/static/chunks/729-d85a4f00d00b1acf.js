(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [729],
  {
    6710: function (e, t, i) {
      "use strict";
      var r, s;
      e.exports =
        (null == (r = i.g.process) ? void 0 : r.env) &&
        "object" == typeof (null == (s = i.g.process) ? void 0 : s.env)
          ? i.g.process
          : i(3234);
    },
    2202: function (e, t) {
      "use strict";
      var i, r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          PrefetchKind: function () {
            return i;
          },
          ACTION_REFRESH: function () {
            return s;
          },
          ACTION_NAVIGATE: function () {
            return n;
          },
          ACTION_RESTORE: function () {
            return a;
          },
          ACTION_SERVER_PATCH: function () {
            return l;
          },
          ACTION_PREFETCH: function () {
            return o;
          },
          ACTION_FAST_REFRESH: function () {
            return d;
          },
          ACTION_SERVER_ACTION: function () {
            return u;
          },
          isThenable: function () {
            return c;
          },
        });
      let s = "refresh",
        n = "navigate",
        a = "restore",
        l = "server-patch",
        o = "prefetch",
        d = "fast-refresh",
        u = "server-action";
      function c(e) {
        return (
          e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      }
      ((r = i || (i = {})).AUTO = "auto"),
        (r.FULL = "full"),
        (r.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9613: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = i(2347);
      function s(e, t, s, n) {
        {
          let a = i(8101).normalizeLocalePath,
            l = i(4695).detectDomainLocale,
            o = t || a(e, s).detectedLocale,
            d = l(n, void 0, o);
          if (d) {
            let t = "http" + (d.http ? "" : "s") + "://",
              i = o === d.defaultLocale ? "" : "/" + o;
            return (
              "" + t + d.domain + (0, r.normalizePathTrailingSlash)("" + i + e)
            );
          }
          return !1;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5784: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let r = i(1351),
        s = i(5815),
        n = i(2676),
        a = s._(i(5271)),
        l = r._(i(967)),
        o = r._(i(8516)),
        d = i(1559),
        u = i(4293),
        c = i(3752);
      i(2940);
      let p = i(7155),
        f = r._(i(2601)),
        h = {
          deviceSizes: [375, 415, 576, 768, 992, 1200, 1920],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(e, t, i, r, s, n) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && s(!0), null == i ? void 0 : i.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    s = !1;
                  i.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => s,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (s = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function g(e) {
        let [t, i] = a.version.split(".", 2),
          r = parseInt(t, 10),
          s = parseInt(i, 10);
        return r > 18 || (18 === r && s >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let v = (0, a.forwardRef)((e, t) => {
        let {
          src: i,
          srcSet: r,
          sizes: s,
          height: l,
          width: o,
          decoding: d,
          className: u,
          style: c,
          fetchPriority: p,
          placeholder: f,
          loading: h,
          unoptimized: v,
          fill: y,
          onLoadRef: b,
          onLoadingCompleteRef: w,
          setBlurComplete: E,
          setShowAltText: T,
          onLoad: S,
          onError: x,
          ...C
        } = e;
        return (0, n.jsx)("img", {
          ...C,
          ...g(p),
          loading: h,
          width: o,
          height: l,
          decoding: d,
          "data-nimg": y ? "fill" : "1",
          className: u,
          style: c,
          sizes: s,
          srcSet: r,
          src: i,
          ref: (0, a.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (x && (e.src = e.src), e.complete && m(e, f, b, w, E, v));
            },
            [i, f, b, w, E, x, v, t]
          ),
          onLoad: (e) => {
            m(e.currentTarget, f, b, w, E, v);
          },
          onError: (e) => {
            T(!0), "empty" !== f && E(!0), x && x(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: i } = e,
          r = {
            as: "image",
            imageSrcSet: i.srcSet,
            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...g(i.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(i.src, r), null)
          : (0, n.jsx)(o.default, {
              children: (0, n.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...r },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let b = (0, a.forwardRef)((e, t) => {
        let i = (0, a.useContext)(p.RouterContext),
          r = (0, a.useContext)(c.ImageConfigContext),
          s = (0, a.useMemo)(() => {
            let e = h || r || u.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              i = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: i };
          }, [r]),
          { onLoad: l, onLoadingComplete: o } = e,
          m = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          m.current = l;
        }, [l]);
        let g = (0, a.useRef)(o);
        (0, a.useEffect)(() => {
          g.current = o;
        }, [o]);
        let [b, w] = (0, a.useState)(!1),
          [E, T] = (0, a.useState)(!1),
          { props: S, meta: x } = (0, d.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: s,
            blurComplete: b,
            showAltText: E,
          });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(v, {
              ...S,
              unoptimized: x.unoptimized,
              placeholder: x.placeholder,
              fill: x.fill,
              onLoadRef: m,
              onLoadingCompleteRef: g,
              setBlurComplete: w,
              setShowAltText: T,
              ref: t,
            }),
            x.priority
              ? (0, n.jsx)(y, { isAppRouter: !i, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1121: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = i(1351),
        s = i(2676),
        n = r._(i(5271)),
        a = i(857),
        l = i(2400),
        o = i(3531),
        d = i(9676),
        u = i(4376),
        c = i(7155),
        p = i(4456),
        f = i(2077),
        h = i(9613),
        m = i(4735),
        g = i(2202),
        v = new Set();
      function y(e, t, i, r, s, n) {
        if (n || (0, l.isLocalURL)(t)) {
          if (!r.bypassPrefetchedCheck) {
            let s =
              t +
              "%" +
              i +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (v.has(s)) return;
            v.add(s);
          }
          Promise.resolve(n ? e.prefetch(t, s) : e.prefetch(t, i, r)).catch(
            (e) => {}
          );
        }
      }
      function b(e) {
        return "string" == typeof e ? e : (0, o.formatUrl)(e);
      }
      let w = n.default.forwardRef(function (e, t) {
        let i, r;
        let {
          href: o,
          as: v,
          children: w,
          prefetch: E = null,
          passHref: T,
          replace: S,
          shallow: x,
          scroll: C,
          locale: _,
          onClick: M,
          onMouseEnter: P,
          onTouchStart: L,
          legacyBehavior: O = !1,
          ...k
        } = e;
        (i = w),
          O &&
            ("string" == typeof i || "number" == typeof i) &&
            (i = (0, s.jsx)("a", { children: i }));
        let I = n.default.useContext(c.RouterContext),
          A = n.default.useContext(p.AppRouterContext),
          z = null != I ? I : A,
          N = !I,
          j = !1 !== E,
          D = null === E ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: $, as: R } = n.default.useMemo(() => {
            if (!I) {
              let e = b(o);
              return { href: e, as: v ? b(v) : e };
            }
            let [e, t] = (0, a.resolveHref)(I, o, !0);
            return { href: e, as: v ? (0, a.resolveHref)(I, v) : t || e };
          }, [I, o, v]),
          B = n.default.useRef($),
          G = n.default.useRef(R);
        O && (r = n.default.Children.only(i));
        let F = O ? r && "object" == typeof r && r.ref : t,
          [V, H, q] = (0, f.useIntersection)({ rootMargin: "200px" }),
          W = n.default.useCallback(
            (e) => {
              (G.current !== R || B.current !== $) &&
                (q(), (G.current = R), (B.current = $)),
                V(e),
                F &&
                  ("function" == typeof F
                    ? F(e)
                    : "object" == typeof F && (F.current = e));
            },
            [R, F, $, q, V]
          );
        n.default.useEffect(() => {
          z && H && j && y(z, $, R, { locale: _ }, { kind: D }, N);
        }, [R, $, H, _, j, null == I ? void 0 : I.locale, z, N, D]);
        let Y = {
          ref: W,
          onClick(e) {
            O || "function" != typeof M || M(e),
              O &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              z &&
                !e.defaultPrevented &&
                (function (e, t, i, r, s, a, o, d, u) {
                  let { nodeName: c } = e.currentTarget;
                  if (
                    "A" === c.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!u && !(0, l.isLocalURL)(i)))
                  )
                    return;
                  e.preventDefault();
                  let p = () => {
                    let e = null == o || o;
                    "beforePopState" in t
                      ? t[s ? "replace" : "push"](i, r, {
                          shallow: a,
                          locale: d,
                          scroll: e,
                        })
                      : t[s ? "replace" : "push"](r || i, { scroll: e });
                  };
                  u ? n.default.startTransition(p) : p();
                })(e, z, $, R, S, x, C, _, N);
          },
          onMouseEnter(e) {
            O || "function" != typeof P || P(e),
              O &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              z &&
                (j || !N) &&
                y(
                  z,
                  $,
                  R,
                  { locale: _, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: D },
                  N
                );
          },
          onTouchStart(e) {
            O || "function" != typeof L || L(e),
              O &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              z &&
                (j || !N) &&
                y(
                  z,
                  $,
                  R,
                  { locale: _, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: D },
                  N
                );
          },
        };
        if ((0, d.isAbsoluteUrl)(R)) Y.href = R;
        else if (!O || T || ("a" === r.type && !("href" in r.props))) {
          let e = void 0 !== _ ? _ : null == I ? void 0 : I.locale,
            t =
              (null == I ? void 0 : I.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                R,
                e,
                null == I ? void 0 : I.locales,
                null == I ? void 0 : I.domainLocales
              );
          Y.href =
            t ||
            (0, m.addBasePath)(
              (0, u.addLocale)(R, e, null == I ? void 0 : I.defaultLocale)
            );
        }
        return O
          ? n.default.cloneElement(r, Y)
          : (0, s.jsx)("a", { ...k, ...Y, children: i });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8101: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeLocalePath", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (e, t) => i(3237).normalizeLocalePath(e, t);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2077: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = i(5271),
        s = i(9402),
        n = "function" == typeof IntersectionObserver,
        a = new Map(),
        l = [];
      function o(e) {
        let { rootRef: t, rootMargin: i, disabled: o } = e,
          d = o || !n,
          [u, c] = (0, r.useState)(!1),
          p = (0, r.useRef)(null),
          f = (0, r.useCallback)((e) => {
            p.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (n) {
              if (d || u) return;
              let e = p.current;
              if (e && e.tagName)
                return (function (e, t, i) {
                  let {
                    id: r,
                    observer: s,
                    elements: n,
                  } = (function (e) {
                    let t;
                    let i = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = l.find(
                        (e) => e.root === i.root && e.margin === i.margin
                      );
                    if (r && (t = a.get(r))) return t;
                    let s = new Map();
                    return (
                      (t = {
                        id: i,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = s.get(e.target),
                              i = e.isIntersecting || e.intersectionRatio > 0;
                            t && i && t(i);
                          });
                        }, e),
                        elements: s,
                      }),
                      l.push(i),
                      a.set(i, t),
                      t
                    );
                  })(i);
                  return (
                    n.set(e, t),
                    s.observe(e),
                    function () {
                      if ((n.delete(e), s.unobserve(e), 0 === n.size)) {
                        s.disconnect(), a.delete(r);
                        let e = l.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        e > -1 && l.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && c(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: i,
                });
            } else if (!u) {
              let e = (0, s.requestIdleCallback)(() => c(!0));
              return () => (0, s.cancelIdleCallback)(e);
            }
          }, [d, i, t, u, p.current]),
          [
            f,
            u,
            (0, r.useCallback)(() => {
              c(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    702: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          noSSR: function () {
            return a;
          },
          default: function () {
            return l;
          },
        });
      let r = i(1351);
      i(2676), i(5271);
      let s = r._(i(5995));
      function n(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function a(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function l(e, t) {
        let i = s.default,
          r = {
            loading: (e) => {
              let { error: t, isLoading: i, pastDelay: r } = e;
              return null;
            },
          };
        e instanceof Promise
          ? (r.loader = () => e)
          : "function" == typeof e
          ? (r.loader = e)
          : "object" == typeof e && (r = { ...r, ...e });
        let l = (r = { ...r, ...t }).loader;
        return (r.loadableGenerated &&
          ((r = { ...r, ...r.loadableGenerated }), delete r.loadableGenerated),
        "boolean" != typeof r.ssr || r.ssr)
          ? i({
              ...r,
              loader: () =>
                null != l ? l().then(n) : Promise.resolve(n(() => null)),
            })
          : (delete r.webpack, delete r.modules, a(i, r));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1559: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        i(2940);
      let r = i(2830),
        s = i(4293);
      function n(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function l(e, t) {
        var i;
        let l,
          o,
          d,
          {
            src: u,
            sizes: c,
            unoptimized: p = !1,
            priority: f = !1,
            loading: h,
            className: m,
            quality: g,
            width: v,
            height: y,
            fill: b = !1,
            style: w,
            onLoad: E,
            onLoadingComplete: T,
            placeholder: S = "empty",
            blurDataURL: x,
            fetchPriority: C,
            layout: _,
            objectFit: M,
            objectPosition: P,
            lazyBoundary: L,
            lazyRoot: O,
            ...k
          } = e,
          { imgConf: I, showAltText: A, blurComplete: z, defaultLoader: N } = t,
          j = I || s.imageConfigDefault;
        if ("allSizes" in j) l = j;
        else {
          let e = [...j.deviceSizes, ...j.imageSizes].sort((e, t) => e - t),
            t = j.deviceSizes.sort((e, t) => e - t);
          l = { ...j, allSizes: e, deviceSizes: t };
        }
        let D = k.loader || N;
        delete k.loader, delete k.srcSet;
        let $ = "__next_img_default" in D;
        if ($) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                u +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = D;
          D = (t) => {
            let { config: i, ...r } = t;
            return e(r);
          };
        }
        if (_) {
          "fill" === _ && (b = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[_];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[_];
          t && !c && (c = t);
        }
        let R = "",
          B = a(v),
          G = a(y);
        if ("object" == typeof (i = u) && (n(i) || void 0 !== i.src)) {
          let e = n(u) ? u.default : u;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((o = e.blurWidth),
            (d = e.blurHeight),
            (x = x || e.blurDataURL),
            (R = e.src),
            !b)
          ) {
            if (B || G) {
              if (B && !G) {
                let t = B / e.width;
                G = Math.round(e.height * t);
              } else if (!B && G) {
                let t = G / e.height;
                B = Math.round(e.width * t);
              }
            } else (B = e.width), (G = e.height);
          }
        }
        let F = !f && ("lazy" === h || void 0 === h);
        (!(u = "string" == typeof u ? u : R) ||
          u.startsWith("data:") ||
          u.startsWith("blob:")) &&
          ((p = !0), (F = !1)),
          l.unoptimized && (p = !0),
          $ && u.endsWith(".svg") && !l.dangerouslyAllowSVG && (p = !0),
          f && (C = "high");
        let V = a(g),
          H = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: M,
                  objectPosition: P,
                }
              : {},
            A ? {} : { color: "transparent" },
            w
          ),
          q =
            z || "empty" === S
              ? null
              : "blur" === S
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: B,
                  heightInt: G,
                  blurWidth: o,
                  blurHeight: d,
                  blurDataURL: x || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + S + '")',
          W = q
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: q,
              }
            : {},
          Y = (function (e) {
            let {
              config: t,
              src: i,
              unoptimized: r,
              width: s,
              quality: n,
              sizes: a,
              loader: l,
            } = e;
            if (r) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: o, kind: d } = (function (e, t, i) {
                let { deviceSizes: r, allSizes: s } = e;
                if (i) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(i)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: s.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: s, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => s.find((t) => t >= e) || s[s.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, s, a),
              u = o.length - 1;
            return {
              sizes: a || "w" !== d ? a : "100vw",
              srcSet: o
                .map(
                  (e, r) =>
                    l({ config: t, src: i, quality: n, width: e }) +
                    " " +
                    ("w" === d ? e : r + 1) +
                    d
                )
                .join(", "),
              src: l({ config: t, src: i, quality: n, width: o[u] }),
            };
          })({
            config: l,
            src: u,
            unoptimized: p,
            width: B,
            quality: V,
            sizes: c,
            loader: D,
          });
        return {
          props: {
            ...k,
            loading: F ? "lazy" : h,
            fetchPriority: C,
            width: B,
            height: G,
            decoding: "async",
            className: m,
            style: { ...H, ...W },
            sizes: Y.sizes,
            srcSet: Y.srcSet,
            src: Y.src,
          },
          meta: { unoptimized: p, priority: f, placeholder: S, fill: b },
        };
      }
    },
    2830: function (e, t) {
      "use strict";
      function i(e) {
        let {
            widthInt: t,
            heightInt: i,
            blurWidth: r,
            blurHeight: s,
            blurDataURL: n,
            objectFit: a,
          } = e,
          l = r ? 40 * r : t,
          o = s ? 40 * s : i,
          d = l && o ? "viewBox='0 0 " + l + " " + o + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          d +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (d
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          n +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    7879: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          getImageProps: function () {
            return l;
          },
          default: function () {
            return o;
          },
        });
      let r = i(1351),
        s = i(1559),
        n = i(5784),
        a = r._(i(2601)),
        l = (e) => {
          let { props: t } = (0, s.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [375, 415, 576, 768, 992, 1200, 1920],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
          return { props: t };
        },
        o = n.Image;
    },
    2601: function (e, t) {
      "use strict";
      function i(e) {
        let { config: t, src: i, width: r, quality: s } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(i) +
          "&w=" +
          r +
          "&q=" +
          (s || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (i.__next_img_default = !0);
      let r = i;
    },
    3150: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = i(1351)._(i(5271)).default.createContext(null);
    },
    5995: function (e, t, i) {
      "use strict";
      /**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return p;
          },
        });
      let r = i(1351)._(i(5271)),
        s = i(3150),
        n = [],
        a = [],
        l = !1;
      function o(e) {
        let t = e(),
          i = { loading: !0, loaded: null, error: null };
        return (
          (i.promise = t
            .then((e) => ((i.loading = !1), (i.loaded = e), e))
            .catch((e) => {
              throw ((i.loading = !1), (i.error = e), e);
            })),
          i
        );
      }
      class d {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: t } = this;
          e.loading &&
            ("number" == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, t.delay))),
            "number" == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, t.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((e) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(e) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...e,
          }),
            this._callbacks.forEach((e) => e());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, t) {
          (this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function u(e) {
        return (function (e, t) {
          let i = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t
            ),
            n = null;
          function o() {
            if (!n) {
              let t = new d(e, i);
              n = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return n.promise();
          }
          if (!l) {
            let e = i.webpack ? i.webpack() : i.modules;
            e &&
              a.push((t) => {
                for (let i of e) if (t.includes(i)) return o();
              });
          }
          function u(e, t) {
            !(function () {
              o();
              let e = r.default.useContext(s.LoadableContext);
              e &&
                Array.isArray(i.modules) &&
                i.modules.forEach((t) => {
                  e(t);
                });
            })();
            let a = r.default.useSyncExternalStore(
              n.subscribe,
              n.getCurrentValue,
              n.getCurrentValue
            );
            return (
              r.default.useImperativeHandle(t, () => ({ retry: n.retry }), []),
              r.default.useMemo(() => {
                var t;
                return a.loading || a.error
                  ? r.default.createElement(i.loading, {
                      isLoading: a.loading,
                      pastDelay: a.pastDelay,
                      timedOut: a.timedOut,
                      error: a.error,
                      retry: n.retry,
                    })
                  : a.loaded
                  ? r.default.createElement(
                      (t = a.loaded) && t.default ? t.default : t,
                      e
                    )
                  : null;
              }, [e, a])
            );
          }
          return (
            (u.preload = () => o()),
            (u.displayName = "LoadableComponent"),
            r.default.forwardRef(u)
          );
        })(o, e);
      }
      function c(e, t) {
        let i = [];
        for (; e.length; ) {
          let r = e.pop();
          i.push(r(t));
        }
        return Promise.all(i).then(() => {
          if (e.length) return c(e, t);
        });
      }
      (u.preloadAll = () =>
        new Promise((e, t) => {
          c(n).then(e, t);
        })),
        (u.preloadReady = (e) => (
          void 0 === e && (e = []),
          new Promise((t) => {
            let i = () => ((l = !0), t());
            c(a, e).then(i, i);
          })
        )),
        (window.__NEXT_PRELOADREADY = u.preloadReady);
      let p = u;
    },
    634: function () {},
    3234: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                i,
                r,
                s = (e.exports = {});
              function n() {
                throw Error("setTimeout has not been defined");
              }
              function a() {
                throw Error("clearTimeout has not been defined");
              }
              function l(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === n || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (i) {
                  try {
                    return t.call(null, e, 0);
                  } catch (i) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : n;
                } catch (e) {
                  t = n;
                }
                try {
                  i = "function" == typeof clearTimeout ? clearTimeout : a;
                } catch (e) {
                  i = a;
                }
              })();
              var o = [],
                d = !1,
                u = -1;
              function c() {
                d &&
                  r &&
                  ((d = !1),
                  r.length ? (o = r.concat(o)) : (u = -1),
                  o.length && p());
              }
              function p() {
                if (!d) {
                  var e = l(c);
                  d = !0;
                  for (var t = o.length; t; ) {
                    for (r = o, o = []; ++u < t; ) r && r[u].run();
                    (u = -1), (t = o.length);
                  }
                  (r = null),
                    (d = !1),
                    (function (e) {
                      if (i === clearTimeout) return clearTimeout(e);
                      if ((i === a || !i) && clearTimeout)
                        return (i = clearTimeout), clearTimeout(e);
                      try {
                        i(e);
                      } catch (t) {
                        try {
                          return i.call(null, e);
                        } catch (t) {
                          return i.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function f(e, t) {
                (this.fun = e), (this.array = t);
              }
              function h() {}
              (s.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var i = 1; i < arguments.length; i++)
                    t[i - 1] = arguments[i];
                o.push(new f(e, t)), 1 !== o.length || d || l(p);
              }),
                (f.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (s.title = "browser"),
                (s.browser = !0),
                (s.env = {}),
                (s.argv = []),
                (s.version = ""),
                (s.versions = {}),
                (s.on = h),
                (s.addListener = h),
                (s.once = h),
                (s.off = h),
                (s.removeListener = h),
                (s.removeAllListeners = h),
                (s.emit = h),
                (s.prependListener = h),
                (s.prependOnceListener = h),
                (s.listeners = function (e) {
                  return [];
                }),
                (s.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (s.cwd = function () {
                  return "/";
                }),
                (s.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (s.umask = function () {
                  return 0;
                });
            },
          },
          i = {};
        function r(e) {
          var s = i[e];
          if (void 0 !== s) return s.exports;
          var n = (i[e] = { exports: {} }),
            a = !0;
          try {
            t[e](n, n.exports, r), (a = !1);
          } finally {
            a && delete i[e];
          }
          return n.exports;
        }
        r.ab = "//";
        var s = r(229);
        e.exports = s;
      })();
    },
    1043: function (e, t, i) {
      e.exports = i(702);
    },
    9586: function (e, t, i) {
      e.exports = i(7879);
    },
    9050: function (e, t, i) {
      e.exports = i(1121);
    },
    9807: function (e, t, i) {
      e.exports = i(1249);
    },
    9507: function (e, t, i) {
      var r = i(5271),
        s = r && "object" == typeof r && "default" in r ? r : { default: r };
      !(function (e) {
        if (!e || "undefined" == typeof window) return;
        let t = document.createElement("style");
        t.setAttribute("type", "text/css"),
          (t.innerHTML = e),
          document.head.appendChild(t);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      );
      let n = r.forwardRef(function (
        {
          style: e = {},
          className: t = "",
          autoFill: i = !1,
          play: n = !0,
          pauseOnHover: a = !1,
          pauseOnClick: l = !1,
          direction: o = "left",
          speed: d = 50,
          delay: u = 0,
          loop: c = 0,
          gradient: p = !1,
          gradientColor: f = "white",
          gradientWidth: h = 200,
          onFinish: m,
          onCycleComplete: g,
          onMount: v,
          children: y,
        },
        b
      ) {
        let [w, E] = r.useState(0),
          [T, S] = r.useState(0),
          [x, C] = r.useState(1),
          [_, M] = r.useState(!1),
          P = r.useRef(null),
          L = b || P,
          O = r.useRef(null),
          k = r.useCallback(() => {
            if (O.current && L.current) {
              let e = L.current.getBoundingClientRect(),
                t = O.current.getBoundingClientRect(),
                r = e.width,
                s = t.width;
              ("up" === o || "down" === o) && ((r = e.height), (s = t.height)),
                i && r && s ? C(s < r ? Math.ceil(r / s) : 1) : C(1),
                E(r),
                S(s);
            }
          }, [i, L, o]);
        r.useEffect(() => {
          if (_ && (k(), O.current && L.current)) {
            let e = new ResizeObserver(() => k());
            return (
              e.observe(L.current),
              e.observe(O.current),
              () => {
                e && e.disconnect();
              }
            );
          }
        }, [k, L, _]),
          r.useEffect(() => {
            k();
          }, [k, y]),
          r.useEffect(() => {
            M(!0);
          }, []),
          r.useEffect(() => {
            "function" == typeof v && v();
          }, []);
        let I = r.useMemo(
            () => (i ? (T * x) / d : T < w ? w / d : T / d),
            [i, w, T, x, d]
          ),
          A = r.useMemo(
            () =>
              Object.assign(Object.assign({}, e), {
                "--pause-on-hover": !n || a ? "paused" : "running",
                "--pause-on-click": !n || (a && !l) || l ? "paused" : "running",
                "--width": "up" === o || "down" === o ? "100vh" : "100%",
                "--transform":
                  "up" === o
                    ? "rotate(-90deg)"
                    : "down" === o
                    ? "rotate(90deg)"
                    : "none",
              }),
            [e, n, a, l, o]
          ),
          z = r.useMemo(
            () => ({
              "--gradient-color": f,
              "--gradient-width": "number" == typeof h ? `${h}px` : h,
            }),
            [f, h]
          ),
          N = r.useMemo(
            () => ({
              "--play": n ? "running" : "paused",
              "--direction": "left" === o ? "normal" : "reverse",
              "--duration": `${I}s`,
              "--delay": `${u}s`,
              "--iteration-count": c ? `${c}` : "infinite",
              "--min-width": i ? "auto" : "100%",
            }),
            [n, o, I, u, c, i]
          ),
          j = r.useMemo(
            () => ({
              "--transform":
                "up" === o
                  ? "rotate(90deg)"
                  : "down" === o
                  ? "rotate(-90deg)"
                  : "none",
            }),
            [o]
          ),
          D = r.useCallback(
            (e) =>
              [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                s.default.createElement(
                  r.Fragment,
                  { key: t },
                  r.Children.map(y, (e) =>
                    s.default.createElement(
                      "div",
                      { style: j, className: "rfm-child" },
                      e
                    )
                  )
                )
              ),
            [j, y]
          );
        return _
          ? s.default.createElement(
              "div",
              { ref: L, style: A, className: "rfm-marquee-container " + t },
              p &&
                s.default.createElement("div", {
                  style: z,
                  className: "rfm-overlay",
                }),
              s.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: N,
                  onAnimationIteration: g,
                  onAnimationEnd: m,
                },
                s.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: O },
                  r.Children.map(y, (e) =>
                    s.default.createElement(
                      "div",
                      { style: j, className: "rfm-child" },
                      e
                    )
                  )
                ),
                D(x - 1)
              ),
              s.default.createElement(
                "div",
                { className: "rfm-marquee", style: N },
                D(x)
              )
            )
          : null;
      });
      t.Z = n;
    },
    1364: function (e, t, i) {
      "use strict";
      i.d(t, {
        YD: function () {
          return d;
        },
      });
      var r = i(5271),
        s = Object.defineProperty,
        n = new Map(),
        a = new WeakMap(),
        l = 0,
        o = void 0;
      function d({
        threshold: e,
        delay: t,
        trackVisibility: i,
        rootMargin: s,
        root: d,
        triggerOnce: u,
        skip: c,
        initialInView: p,
        fallbackInView: f,
        onChange: h,
      } = {}) {
        var m;
        let [g, v] = r.useState(null),
          y = r.useRef(),
          [b, w] = r.useState({ inView: !!p, entry: void 0 });
        (y.current = h),
          r.useEffect(() => {
            let r;
            if (!c && g)
              return (
                (r = (function (e, t, i = {}, r = o) {
                  if (void 0 === window.IntersectionObserver && void 0 !== r) {
                    let s = e.getBoundingClientRect();
                    return (
                      t(r, {
                        isIntersecting: r,
                        target: e,
                        intersectionRatio:
                          "number" == typeof i.threshold ? i.threshold : 0,
                        time: 0,
                        boundingClientRect: s,
                        intersectionRect: s,
                        rootBounds: s,
                      }),
                      () => {}
                    );
                  }
                  let {
                      id: s,
                      observer: d,
                      elements: u,
                    } = (function (e) {
                      let t = Object.keys(e)
                          .sort()
                          .filter((t) => void 0 !== e[t])
                          .map((t) => {
                            var i;
                            return `${t}_${
                              "root" === t
                                ? (i = e.root)
                                  ? (a.has(i) ||
                                      ((l += 1), a.set(i, l.toString())),
                                    a.get(i))
                                  : "0"
                                : e[t]
                            }`;
                          })
                          .toString(),
                        i = n.get(t);
                      if (!i) {
                        let r;
                        let s = new Map(),
                          a = new IntersectionObserver((t) => {
                            t.forEach((t) => {
                              var i;
                              let n =
                                t.isIntersecting &&
                                r.some((e) => t.intersectionRatio >= e);
                              e.trackVisibility &&
                                void 0 === t.isVisible &&
                                (t.isVisible = n),
                                null == (i = s.get(t.target)) ||
                                  i.forEach((e) => {
                                    e(n, t);
                                  });
                            });
                          }, e);
                        (r =
                          a.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (i = { id: t, observer: a, elements: s }),
                          n.set(t, i);
                      }
                      return i;
                    })(i),
                    c = u.get(e) || [];
                  return (
                    u.has(e) || u.set(e, c),
                    c.push(t),
                    d.observe(e),
                    function () {
                      c.splice(c.indexOf(t), 1),
                        0 === c.length && (u.delete(e), d.unobserve(e)),
                        0 === u.size && (d.disconnect(), n.delete(s));
                    }
                  );
                })(
                  g,
                  (e, t) => {
                    w({ inView: e, entry: t }),
                      y.current && y.current(e, t),
                      t.isIntersecting && u && r && (r(), (r = void 0));
                  },
                  {
                    root: d,
                    rootMargin: s,
                    threshold: e,
                    trackVisibility: i,
                    delay: t,
                  },
                  f
                )),
                () => {
                  r && r();
                }
              );
          }, [Array.isArray(e) ? e.toString() : e, g, d, s, u, c, i, f, t]);
        let E = null == (m = b.entry) ? void 0 : m.target,
          T = r.useRef();
        g ||
          !E ||
          u ||
          c ||
          T.current === E ||
          ((T.current = E), w({ inView: !!p, entry: void 0 }));
        let S = [v, b.inView, b.entry];
        return (S.ref = S[0]), (S.inView = S[1]), (S.entry = S[2]), S;
      }
      r.Component;
    },
    5172: function (e, t, i) {
      "use strict";
      i.d(t, {
        Ix: function () {
          return z;
        },
      });
      var r = i(5271),
        s = function () {
          for (var e, t, i = 0, r = "", s = arguments.length; i < s; i++)
            (e = arguments[i]) &&
              (t = (function e(t) {
                var i,
                  r,
                  s = "";
                if ("string" == typeof t || "number" == typeof t) s += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t)) {
                    var n = t.length;
                    for (i = 0; i < n; i++)
                      t[i] && (r = e(t[i])) && (s && (s += " "), (s += r));
                  } else for (r in t) t[r] && (s && (s += " "), (s += r));
                }
                return s;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        };
      let n = (e) => "number" == typeof e && !isNaN(e),
        a = (e) => "string" == typeof e,
        l = (e) => "function" == typeof e,
        o = (e) => (a(e) || l(e) ? e : null),
        d = (e) => (0, r.isValidElement)(e) || a(e) || l(e) || n(e);
      function u(e) {
        let {
          enter: t,
          exit: i,
          appendPosition: s = !1,
          collapse: n = !0,
          collapseDuration: a = 300,
        } = e;
        return function (e) {
          let {
              children: l,
              position: o,
              preventExitTransition: d,
              done: u,
              nodeRef: c,
              isIn: p,
              playToast: f,
            } = e,
            h = s ? `${t}--${o}` : t,
            m = s ? `${i}--${o}` : i,
            g = (0, r.useRef)(0);
          return (
            (0, r.useLayoutEffect)(() => {
              let e = c.current,
                t = h.split(" "),
                i = (r) => {
                  r.target === c.current &&
                    (f(),
                    e.removeEventListener("animationend", i),
                    e.removeEventListener("animationcancel", i),
                    0 === g.current &&
                      "animationcancel" !== r.type &&
                      e.classList.remove(...t));
                };
              e.classList.add(...t),
                e.addEventListener("animationend", i),
                e.addEventListener("animationcancel", i);
            }, []),
            (0, r.useEffect)(() => {
              let e = c.current,
                t = () => {
                  e.removeEventListener("animationend", t),
                    n
                      ? (function (e, t, i) {
                          void 0 === i && (i = 300);
                          let { scrollHeight: r, style: s } = e;
                          requestAnimationFrame(() => {
                            (s.minHeight = "initial"),
                              (s.height = r + "px"),
                              (s.transition = `all ${i}ms`),
                              requestAnimationFrame(() => {
                                (s.height = "0"),
                                  (s.padding = "0"),
                                  (s.margin = "0"),
                                  setTimeout(t, i);
                              });
                          });
                        })(e, u, a)
                      : u();
                };
              p ||
                (d
                  ? t()
                  : ((g.current = 1),
                    (e.className += ` ${m}`),
                    e.addEventListener("animationend", t)));
            }, [p]),
            r.createElement(r.Fragment, null, l)
          );
        };
      }
      function c(e, t) {
        return null != e
          ? {
              content: e.content,
              containerId: e.props.containerId,
              id: e.props.toastId,
              theme: e.props.theme,
              type: e.props.type,
              data: e.props.data || {},
              isLoading: e.props.isLoading,
              icon: e.props.icon,
              status: t,
            }
          : {};
      }
      let p = new Map(),
        f = [],
        h = new Set(),
        m = (e) => h.forEach((t) => t(e)),
        g = () => p.size > 0;
      function v(e, t) {
        var i;
        if (t) return !(null == (i = p.get(t)) || !i.isToastActive(e));
        let r = !1;
        return (
          p.forEach((t) => {
            t.isToastActive(e) && (r = !0);
          }),
          r
        );
      }
      function y(e, t) {
        d(e) &&
          (g() || f.push({ content: e, options: t }),
          p.forEach((i) => {
            i.buildToast(e, t);
          }));
      }
      function b(e, t) {
        p.forEach((i) => {
          null != t && null != t && t.containerId
            ? (null == t ? void 0 : t.containerId) === i.id &&
              i.toggle(e, null == t ? void 0 : t.id)
            : i.toggle(e, null == t ? void 0 : t.id);
        });
      }
      function w(e) {
        let {
            delay: t,
            isRunning: i,
            closeToast: n,
            type: a = "default",
            hide: o,
            className: d,
            style: u,
            controlledProgress: c,
            progress: p,
            rtl: f,
            isIn: h,
            theme: m,
          } = e,
          g = o || (c && 0 === p),
          v = {
            ...u,
            animationDuration: `${t}ms`,
            animationPlayState: i ? "running" : "paused",
          };
        c && (v.transform = `scaleX(${p})`);
        let y = s(
            "Toastify__progress-bar",
            c
              ? "Toastify__progress-bar--controlled"
              : "Toastify__progress-bar--animated",
            `Toastify__progress-bar-theme--${m}`,
            `Toastify__progress-bar--${a}`,
            { "Toastify__progress-bar--rtl": f }
          ),
          b = l(d) ? d({ rtl: f, type: a, defaultClassName: y }) : s(y, d);
        return r.createElement(
          "div",
          { className: "Toastify__progress-bar--wrp", "data-hidden": g },
          r.createElement("div", {
            className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${a}`,
          }),
          r.createElement("div", {
            role: "progressbar",
            "aria-hidden": g ? "true" : "false",
            "aria-label": "notification timer",
            className: b,
            style: v,
            [c && p >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
              c && p < 1
                ? null
                : () => {
                    h && n();
                  },
          })
        );
      }
      let E = 1,
        T = () => "" + E++;
      function S(e, t) {
        return y(e, t), t.toastId;
      }
      function x(e, t) {
        return {
          ...t,
          type: (t && t.type) || e,
          toastId: t && (a(t.toastId) || n(t.toastId)) ? t.toastId : T(),
        };
      }
      function C(e) {
        return (t, i) => S(t, x(e, i));
      }
      function _(e, t) {
        return S(e, x("default", t));
      }
      (_.loading = (e, t) =>
        S(
          e,
          x("default", {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...t,
          })
        )),
        (_.promise = function (e, t, i) {
          let r,
            { pending: s, error: n, success: o } = t;
          s &&
            (r = a(s) ? _.loading(s, i) : _.loading(s.render, { ...i, ...s }));
          let d = {
              isLoading: null,
              autoClose: null,
              closeOnClick: null,
              closeButton: null,
              draggable: null,
            },
            u = (e, t, s) => {
              if (null == t) return void _.dismiss(r);
              let n = { type: e, ...d, ...i, data: s },
                l = a(t) ? { render: t } : t;
              return (
                r ? _.update(r, { ...n, ...l }) : _(l.render, { ...n, ...l }), s
              );
            },
            c = l(e) ? e() : e;
          return (
            c.then((e) => u("success", o, e)).catch((e) => u("error", n, e)), c
          );
        }),
        (_.success = C("success")),
        (_.info = C("info")),
        (_.error = C("error")),
        (_.warning = C("warning")),
        (_.warn = _.warning),
        (_.dark = (e, t) => S(e, x("default", { theme: "dark", ...t }))),
        (_.dismiss = function (e) {
          !(function (e) {
            var t;
            if (g()) {
              if (null == e || a((t = e)) || n(t))
                p.forEach((t) => {
                  t.removeToast(e);
                });
              else if (e && ("containerId" in e || "id" in e)) {
                let t = p.get(e.containerId);
                t
                  ? t.removeToast(e.id)
                  : p.forEach((t) => {
                      t.removeToast(e.id);
                    });
              }
            } else f = f.filter((t) => null != e && t.options.toastId !== e);
          })(e);
        }),
        (_.clearWaitingQueue = function (e) {
          void 0 === e && (e = {}),
            p.forEach((t) => {
              !t.props.limit ||
                (e.containerId && t.id !== e.containerId) ||
                t.clearQueue();
            });
        }),
        (_.isActive = v),
        (_.update = function (e, t) {
          void 0 === t && (t = {});
          let i = ((e, t) => {
            var i;
            let { containerId: r } = t;
            return null == (i = p.get(r || 1)) ? void 0 : i.toasts.get(e);
          })(e, t);
          if (i) {
            let { props: r, content: s } = i,
              n = {
                delay: 100,
                ...r,
                ...t,
                toastId: t.toastId || e,
                updateId: T(),
              };
            n.toastId !== e && (n.staleId = e);
            let a = n.render || s;
            delete n.render, S(a, n);
          }
        }),
        (_.done = (e) => {
          _.update(e, { progress: 1 });
        }),
        (_.onChange = function (e) {
          return (
            h.add(e),
            () => {
              h.delete(e);
            }
          );
        }),
        (_.play = (e) => b(!0, e)),
        (_.pause = (e) => b(!1, e));
      let M = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        P = (e) => {
          let { theme: t, type: i, isLoading: s, ...n } = e;
          return r.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill:
              "colored" === t
                ? "currentColor"
                : `var(--toastify-icon-color-${i})`,
            ...n,
          });
        },
        L = {
          info: function (e) {
            return r.createElement(
              P,
              { ...e },
              r.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
              })
            );
          },
          warning: function (e) {
            return r.createElement(
              P,
              { ...e },
              r.createElement("path", {
                d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
              })
            );
          },
          success: function (e) {
            return r.createElement(
              P,
              { ...e },
              r.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
              })
            );
          },
          error: function (e) {
            return r.createElement(
              P,
              { ...e },
              r.createElement("path", {
                d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
              })
            );
          },
          spinner: function () {
            return r.createElement("div", { className: "Toastify__spinner" });
          },
        },
        O = (e) => {
          let {
              isRunning: t,
              preventExitTransition: i,
              toastRef: n,
              eventHandlers: a,
              playToast: o,
            } = (function (e) {
              var t, i;
              let [s, n] = (0, r.useState)(!1),
                [a, l] = (0, r.useState)(!1),
                o = (0, r.useRef)(null),
                d = (0, r.useRef)({
                  start: 0,
                  delta: 0,
                  removalDistance: 0,
                  canCloseOnClick: !0,
                  canDrag: !1,
                  didMove: !1,
                }).current,
                {
                  autoClose: u,
                  pauseOnHover: c,
                  closeToast: f,
                  onClick: h,
                  closeOnClick: m,
                } = e;
              function g() {
                n(!0);
              }
              function v() {
                n(!1);
              }
              function y(t) {
                let i = o.current;
                d.canDrag &&
                  i &&
                  ((d.didMove = !0),
                  s && v(),
                  (d.delta =
                    "x" === e.draggableDirection
                      ? t.clientX - d.start
                      : t.clientY - d.start),
                  d.start !== t.clientX && (d.canCloseOnClick = !1),
                  (i.style.transform = `translate3d(${
                    "x" === e.draggableDirection
                      ? `${d.delta}px, var(--y)`
                      : `0, calc(${d.delta}px + var(--y))`
                  },0)`),
                  (i.style.opacity =
                    "" + (1 - Math.abs(d.delta / d.removalDistance))));
              }
              function b() {
                document.removeEventListener("pointermove", y),
                  document.removeEventListener("pointerup", b);
                let t = o.current;
                if (d.canDrag && d.didMove && t) {
                  if (((d.canDrag = !1), Math.abs(d.delta) > d.removalDistance))
                    return l(!0), e.closeToast(), void e.collapseAll();
                  (t.style.transition = "transform 0.2s, opacity 0.2s"),
                    t.style.removeProperty("transform"),
                    t.style.removeProperty("opacity");
                }
              }
              null ==
                (i = p.get(
                  (t = { id: e.toastId, containerId: e.containerId, fn: n })
                    .containerId || 1
                )) || i.setToggle(t.id, t.fn),
                (0, r.useEffect)(() => {
                  if (e.pauseOnFocusLoss)
                    return (
                      document.hasFocus() || v(),
                      window.addEventListener("focus", g),
                      window.addEventListener("blur", v),
                      () => {
                        window.removeEventListener("focus", g),
                          window.removeEventListener("blur", v);
                      }
                    );
                }, [e.pauseOnFocusLoss]);
              let w = {
                onPointerDown: function (t) {
                  if (!0 === e.draggable || e.draggable === t.pointerType) {
                    (d.didMove = !1),
                      document.addEventListener("pointermove", y),
                      document.addEventListener("pointerup", b);
                    let i = o.current;
                    (d.canCloseOnClick = !0),
                      (d.canDrag = !0),
                      (i.style.transition = "none"),
                      "x" === e.draggableDirection
                        ? ((d.start = t.clientX),
                          (d.removalDistance =
                            i.offsetWidth * (e.draggablePercent / 100)))
                        : ((d.start = t.clientY),
                          (d.removalDistance =
                            (i.offsetHeight *
                              (80 === e.draggablePercent
                                ? 1.5 * e.draggablePercent
                                : e.draggablePercent)) /
                            100));
                  }
                },
                onPointerUp: function (t) {
                  let {
                    top: i,
                    bottom: r,
                    left: s,
                    right: n,
                  } = o.current.getBoundingClientRect();
                  "touchend" !== t.nativeEvent.type &&
                  e.pauseOnHover &&
                  t.clientX >= s &&
                  t.clientX <= n &&
                  t.clientY >= i &&
                  t.clientY <= r
                    ? v()
                    : g();
                },
              };
              return (
                u &&
                  c &&
                  ((w.onMouseEnter = v), e.stacked || (w.onMouseLeave = g)),
                m &&
                  (w.onClick = (e) => {
                    h && h(e), d.canCloseOnClick && f();
                  }),
                {
                  playToast: g,
                  pauseToast: v,
                  isRunning: s,
                  preventExitTransition: a,
                  toastRef: o,
                  eventHandlers: w,
                }
              );
            })(e),
            {
              closeButton: d,
              children: u,
              autoClose: c,
              onClick: f,
              type: h,
              hideProgressBar: m,
              closeToast: g,
              transition: v,
              position: y,
              className: b,
              style: E,
              bodyClassName: T,
              bodyStyle: S,
              progressClassName: x,
              progressStyle: C,
              updateId: _,
              role: M,
              progress: P,
              rtl: O,
              toastId: k,
              deleteToast: I,
              isIn: A,
              isLoading: z,
              closeOnClick: N,
              theme: j,
            } = e,
            D = s(
              "Toastify__toast",
              `Toastify__toast-theme--${j}`,
              `Toastify__toast--${h}`,
              { "Toastify__toast--rtl": O },
              { "Toastify__toast--close-on-click": N }
            ),
            $ = l(b)
              ? b({ rtl: O, position: y, type: h, defaultClassName: D })
              : s(D, b),
            R = (function (e) {
              let { theme: t, type: i, isLoading: s, icon: n } = e,
                a = null,
                o = { theme: t, type: i };
              return (
                !1 === n ||
                  (l(n)
                    ? (a = n({ ...o, isLoading: s }))
                    : (0, r.isValidElement)(n)
                    ? (a = (0, r.cloneElement)(n, o))
                    : s
                    ? (a = L.spinner())
                    : i in L && (a = L[i](o))),
                a
              );
            })(e),
            B = !!P || !c,
            G = { closeToast: g, type: h, theme: j },
            F = null;
          return (
            !1 === d ||
              (F = l(d)
                ? d(G)
                : (0, r.isValidElement)(d)
                ? (0, r.cloneElement)(d, G)
                : (function (e) {
                    let { closeToast: t, theme: i, ariaLabel: s = "close" } = e;
                    return r.createElement(
                      "button",
                      {
                        className: `Toastify__close-button Toastify__close-button--${i}`,
                        type: "button",
                        onClick: (e) => {
                          e.stopPropagation(), t(e);
                        },
                        "aria-label": s,
                      },
                      r.createElement(
                        "svg",
                        { "aria-hidden": "true", viewBox: "0 0 14 16" },
                        r.createElement("path", {
                          fillRule: "evenodd",
                          d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                        })
                      )
                    );
                  })(G)),
            r.createElement(
              v,
              {
                isIn: A,
                done: I,
                position: y,
                preventExitTransition: i,
                nodeRef: n,
                playToast: o,
              },
              r.createElement(
                "div",
                {
                  id: k,
                  onClick: f,
                  "data-in": A,
                  className: $,
                  ...a,
                  style: E,
                  ref: n,
                },
                r.createElement(
                  "div",
                  {
                    ...(A && { role: M }),
                    className: l(T)
                      ? T({ type: h })
                      : s("Toastify__toast-body", T),
                    style: S,
                  },
                  null != R &&
                    r.createElement(
                      "div",
                      {
                        className: s("Toastify__toast-icon", {
                          "Toastify--animate-icon Toastify__zoom-enter": !z,
                        }),
                      },
                      R
                    ),
                  r.createElement("div", null, u)
                ),
                F,
                r.createElement(w, {
                  ...(_ && !B ? { key: `pb-${_}` } : {}),
                  rtl: O,
                  theme: j,
                  delay: c,
                  isRunning: t,
                  isIn: A,
                  closeToast: g,
                  hide: m,
                  type: h,
                  style: C,
                  className: x,
                  controlledProgress: B,
                  progress: P || 0,
                })
              )
            )
          );
        },
        k = function (e, t) {
          return (
            void 0 === t && (t = !1),
            {
              enter: `Toastify--animate Toastify__${e}-enter`,
              exit: `Toastify--animate Toastify__${e}-exit`,
              appendPosition: t,
            }
          );
        },
        I = u(k("bounce", !0)),
        A =
          (u(k("slide", !0)),
          u(k("zoom")),
          u(k("flip")),
          {
            position: "top-right",
            transition: I,
            autoClose: 5e3,
            closeButton: !0,
            pauseOnHover: !0,
            pauseOnFocusLoss: !0,
            draggable: "touch",
            draggablePercent: 80,
            draggableDirection: "x",
            role: "alert",
            theme: "light",
          });
      function z(e) {
        let t = { ...A, ...e },
          i = e.stacked,
          [u, h] = (0, r.useState)(!0),
          g = (0, r.useRef)(null),
          {
            getToastToRender: b,
            isToastActive: w,
            count: E,
          } = (function (e) {
            let {
              subscribe: t,
              getSnapshot: i,
              setProps: s,
            } = (0, r.useRef)(
              (function (e) {
                let t = e.containerId || 1;
                return {
                  subscribe(i) {
                    let s = (function (e, t, i) {
                      let s = 1,
                        u = 0,
                        p = [],
                        f = [],
                        h = [],
                        m = t,
                        g = new Map(),
                        v = new Set(),
                        y = () => {
                          (h = Array.from(g.values())), v.forEach((e) => e());
                        },
                        b = (e) => {
                          (f = null == e ? [] : f.filter((t) => t !== e)), y();
                        },
                        w = (e) => {
                          let {
                              toastId: t,
                              onOpen: s,
                              updateId: n,
                              children: a,
                            } = e.props,
                            o = null == n;
                          e.staleId && g.delete(e.staleId),
                            g.set(t, e),
                            (f = [...f, e.props.toastId].filter(
                              (t) => t !== e.staleId
                            )),
                            y(),
                            i(c(e, o ? "added" : "updated")),
                            o && l(s) && s((0, r.isValidElement)(a) && a.props);
                        };
                      return {
                        id: e,
                        props: m,
                        observe: (e) => (v.add(e), () => v.delete(e)),
                        toggle: (e, t) => {
                          g.forEach((i) => {
                            (null != t && t !== i.props.toastId) ||
                              (l(i.toggle) && i.toggle(e));
                          });
                        },
                        removeToast: b,
                        toasts: g,
                        clearQueue: () => {
                          (u -= p.length), (p = []);
                        },
                        buildToast: (t, f) => {
                          var h, v;
                          if (
                            ((t) => {
                              let {
                                  containerId: i,
                                  toastId: r,
                                  updateId: s,
                                } = t,
                                n = g.has(r) && null == s;
                              return (i ? i !== e : 1 !== e) || n;
                            })(f)
                          )
                            return;
                          let {
                              toastId: E,
                              updateId: T,
                              data: S,
                              staleId: x,
                              delay: C,
                            } = f,
                            _ = () => {
                              b(E);
                            },
                            M = null == T;
                          M && u++;
                          let P = {
                            ...m,
                            style: m.toastStyle,
                            key: s++,
                            ...Object.fromEntries(
                              Object.entries(f).filter((e) => {
                                let [t, i] = e;
                                return null != i;
                              })
                            ),
                            toastId: E,
                            updateId: T,
                            data: S,
                            closeToast: _,
                            isIn: !1,
                            className: o(f.className || m.toastClassName),
                            bodyClassName: o(
                              f.bodyClassName || m.bodyClassName
                            ),
                            progressClassName: o(
                              f.progressClassName || m.progressClassName
                            ),
                            autoClose:
                              !f.isLoading &&
                              ((h = f.autoClose),
                              (v = m.autoClose),
                              !1 === h || (n(h) && h > 0) ? h : v),
                            deleteToast() {
                              let e = g.get(E),
                                { onClose: t, children: s } = e.props;
                              l(t) && t((0, r.isValidElement)(s) && s.props),
                                i(c(e, "removed")),
                                g.delete(E),
                                --u < 0 && (u = 0),
                                p.length > 0 ? w(p.shift()) : y();
                            },
                          };
                          (P.closeButton = m.closeButton),
                            !1 === f.closeButton || d(f.closeButton)
                              ? (P.closeButton = f.closeButton)
                              : !0 === f.closeButton &&
                                (P.closeButton =
                                  !d(m.closeButton) || m.closeButton);
                          let L = t;
                          (0, r.isValidElement)(t) && !a(t.type)
                            ? (L = (0, r.cloneElement)(t, {
                                closeToast: _,
                                toastProps: P,
                                data: S,
                              }))
                            : l(t) &&
                              (L = t({
                                closeToast: _,
                                toastProps: P,
                                data: S,
                              }));
                          let O = { content: L, props: P, staleId: x };
                          m.limit && m.limit > 0 && u > m.limit && M
                            ? p.push(O)
                            : n(C)
                            ? setTimeout(() => {
                                w(O);
                              }, C)
                            : w(O);
                        },
                        setProps(e) {
                          m = e;
                        },
                        setToggle: (e, t) => {
                          g.get(e).toggle = t;
                        },
                        isToastActive: (e) => f.some((t) => t === e),
                        getSnapshot: () => (m.newestOnTop ? h.reverse() : h),
                      };
                    })(t, e, m);
                    p.set(t, s);
                    let u = s.observe(i);
                    return (
                      f.forEach((e) => y(e.content, e.options)),
                      (f = []),
                      () => {
                        u(), p.delete(t);
                      }
                    );
                  },
                  setProps(e) {
                    var i;
                    null == (i = p.get(t)) || i.setProps(e);
                  },
                  getSnapshot() {
                    var e;
                    return null == (e = p.get(t)) ? void 0 : e.getSnapshot();
                  },
                };
              })(e)
            ).current;
            s(e);
            let u = (0, r.useSyncExternalStore)(t, i, i);
            return {
              getToastToRender: function (e) {
                if (!u) return [];
                let t = new Map();
                return (
                  u.forEach((e) => {
                    let { position: i } = e.props;
                    t.has(i) || t.set(i, []), t.get(i).push(e);
                  }),
                  Array.from(t, (t) => e(t[0], t[1]))
                );
              },
              isToastActive: v,
              count: null == u ? void 0 : u.length,
            };
          })(t),
          { className: T, style: S, rtl: x, containerId: C } = t;
        function P() {
          i && (h(!0), _.play());
        }
        return (
          M(() => {
            if (i) {
              var e;
              let i = g.current.querySelectorAll('[data-in="true"]'),
                r = null == (e = t.position) ? void 0 : e.includes("top"),
                s = 0,
                n = 0;
              Array.from(i)
                .reverse()
                .forEach((e, t) => {
                  e.classList.add("Toastify__toast--stacked"),
                    t > 0 && (e.dataset.collapsed = `${u}`),
                    e.dataset.pos || (e.dataset.pos = r ? "top" : "bot");
                  let i = s * (u ? 0.2 : 1) + (u ? 0 : 12 * t);
                  e.style.setProperty("--y", `${r ? i : -1 * i}px`),
                    e.style.setProperty("--g", "12"),
                    e.style.setProperty("--s", "" + (1 - (u ? n : 0))),
                    (s += e.offsetHeight),
                    (n += 0.025);
                });
            }
          }, [u, E, i]),
          r.createElement(
            "div",
            {
              ref: g,
              className: "Toastify",
              id: C,
              onMouseEnter: () => {
                i && (h(!1), _.pause());
              },
              onMouseLeave: P,
            },
            b((e, t) => {
              let n = t.length ? { ...S } : { ...S, pointerEvents: "none" };
              return r.createElement(
                "div",
                {
                  className: (function (e) {
                    let t = s(
                      "Toastify__toast-container",
                      `Toastify__toast-container--${e}`,
                      { "Toastify__toast-container--rtl": x }
                    );
                    return l(T)
                      ? T({ position: e, rtl: x, defaultClassName: t })
                      : s(t, o(T));
                  })(e),
                  style: n,
                  key: `container-${e}`,
                },
                t.map((e) => {
                  let { content: t, props: s } = e;
                  return r.createElement(
                    O,
                    {
                      ...s,
                      stacked: i,
                      collapseAll: P,
                      isIn: w(s.toastId, s.containerId),
                      style: s.style,
                      key: `toast-${s.key}`,
                    },
                    t
                  );
                })
              );
            })
          )
        );
      }
    },
    2264: function (e, t, i) {
      "use strict";
      i.d(t, {
        pt: function () {
          return d;
        },
        W_: function () {
          return a;
        },
        tl: function () {
          return o;
        },
      });
      var r = i(1326),
        s = i(4703);
      function n(e, t, i, r) {
        return (
          e.params.createElements &&
            Object.keys(r).forEach((n) => {
              if (!i[n] && !0 === i.auto) {
                let a = (0, s.e)(e.el, `.${r[n]}`)[0];
                a ||
                  (((a = (0, s.c)("div", r[n])).className = r[n]),
                  e.el.append(a)),
                  (i[n] = a),
                  (t[n] = a);
              }
            }),
          i
        );
      }
      function a(e) {
        let { swiper: t, extendParams: i, on: r, emit: a } = e;
        function l(e) {
          let i;
          return e &&
            "string" == typeof e &&
            t.isElement &&
            (i = t.el.querySelector(e))
            ? i
            : (e &&
                ("string" == typeof e &&
                  (i = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                "string" == typeof e &&
                i &&
                i.length > 1 &&
                1 === t.el.querySelectorAll(e).length
                  ? (i = t.el.querySelector(e))
                  : i && 1 === i.length && (i = i[0])),
              e && !i)
            ? e
            : i;
        }
        function o(e, i) {
          let r = t.params.navigation;
          (e = (0, s.m)(e)).forEach((e) => {
            e &&
              (e.classList[i ? "add" : "remove"](...r.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = i),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](r.lockClass));
          });
        }
        function d() {
          let { nextEl: e, prevEl: i } = t.navigation;
          if (t.params.loop) {
            o(i, !1), o(e, !1);
            return;
          }
          o(i, t.isBeginning && !t.params.rewind),
            o(e, t.isEnd && !t.params.rewind);
        }
        function u(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), a("navigationPrev"));
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), a("navigationNext"));
        }
        function p() {
          let e = t.params.navigation;
          if (
            ((t.params.navigation = n(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !(e.nextEl || e.prevEl))
          )
            return;
          let i = l(e.nextEl),
            r = l(e.prevEl);
          Object.assign(t.navigation, { nextEl: i, prevEl: r }),
            (i = (0, s.m)(i)),
            (r = (0, s.m)(r));
          let a = (i, r) => {
            i && i.addEventListener("click", "next" === r ? c : u),
              !t.enabled && i && i.classList.add(...e.lockClass.split(" "));
          };
          i.forEach((e) => a(e, "next")), r.forEach((e) => a(e, "prev"));
        }
        function f() {
          let { nextEl: e, prevEl: i } = t.navigation;
          (e = (0, s.m)(e)), (i = (0, s.m)(i));
          let r = (e, i) => {
            e.removeEventListener("click", "next" === i ? c : u),
              e.classList.remove(
                ...t.params.navigation.disabledClass.split(" ")
              );
          };
          e.forEach((e) => r(e, "next")), i.forEach((e) => r(e, "prev"));
        }
        i({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null }),
          r("init", () => {
            !1 === t.params.navigation.enabled ? h() : (p(), d());
          }),
          r("toEdge fromEdge lock unlock", () => {
            d();
          }),
          r("destroy", () => {
            f();
          }),
          r("enable disable", () => {
            let { nextEl: e, prevEl: i } = t.navigation;
            if (((e = (0, s.m)(e)), (i = (0, s.m)(i)), t.enabled)) {
              d();
              return;
            }
            [...e, ...i]
              .filter((e) => !!e)
              .forEach((e) => e.classList.add(t.params.navigation.lockClass));
          }),
          r("click", (e, i) => {
            let { nextEl: r, prevEl: n } = t.navigation;
            (r = (0, s.m)(r)), (n = (0, s.m)(n));
            let l = i.target,
              o = n.includes(l) || r.includes(l);
            if (t.isElement && !o) {
              let e = i.path || (i.composedPath && i.composedPath());
              e && (o = e.find((e) => r.includes(e) || n.includes(e)));
            }
            if (t.params.navigation.hideOnClick && !o) {
              let e;
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === l || t.pagination.el.contains(l))
              )
                return;
              r.length
                ? (e = r[0].classList.contains(t.params.navigation.hiddenClass))
                : n.length &&
                  (e = n[0].classList.contains(
                    t.params.navigation.hiddenClass
                  )),
                !0 === e ? a("navigationShow") : a("navigationHide"),
                [...r, ...n]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.toggle(t.params.navigation.hiddenClass)
                  );
            }
          });
        let h = () => {
          t.el.classList.add(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            f();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(
              ...t.params.navigation.navigationDisabledClass.split(" ")
            ),
              p(),
              d();
          },
          disable: h,
          update: d,
          init: p,
          destroy: f,
        });
      }
      function l(e) {
        return (
          void 0 === e && (e = ""),
          `.${e
            .trim()
            .replace(/([\.:!+\/])/g, "\\$1")
            .replace(/ /g, ".")}`
        );
      }
      function o(e) {
        let t,
          { swiper: i, extendParams: r, on: a, emit: o } = e,
          d = "swiper-pagination";
        r({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${d}-bullet`,
            bulletActiveClass: `${d}-bullet-active`,
            modifierClass: `${d}-`,
            currentClass: `${d}-current`,
            totalClass: `${d}-total`,
            hiddenClass: `${d}-hidden`,
            progressbarFillClass: `${d}-progressbar-fill`,
            progressbarOppositeClass: `${d}-progressbar-opposite`,
            clickableClass: `${d}-clickable`,
            lockClass: `${d}-lock`,
            horizontalClass: `${d}-horizontal`,
            verticalClass: `${d}-vertical`,
            paginationDisabledClass: `${d}-disabled`,
          },
        }),
          (i.pagination = { el: null, bullets: [] });
        let u = 0;
        function c() {
          return (
            !i.params.pagination.el ||
            !i.pagination.el ||
            (Array.isArray(i.pagination.el) && 0 === i.pagination.el.length)
          );
        }
        function p(e, t) {
          let { bulletActiveClass: r } = i.params.pagination;
          e &&
            (e = e[`${"prev" === t ? "previous" : "next"}ElementSibling`]) &&
            (e.classList.add(`${r}-${t}`),
            (e = e[`${"prev" === t ? "previous" : "next"}ElementSibling`]) &&
              e.classList.add(`${r}-${t}-${t}`));
        }
        function f(e) {
          let t = e.target.closest(l(i.params.pagination.bulletClass));
          if (!t) return;
          e.preventDefault();
          let r = (0, s.h)(t) * i.params.slidesPerGroup;
          if (i.params.loop) {
            if (i.realIndex === r) return;
            i.slideToLoop(r);
          } else i.slideTo(r);
        }
        function h() {
          let e, r;
          let n = i.rtl,
            a = i.params.pagination;
          if (c()) return;
          let d = i.pagination.el;
          d = (0, s.m)(d);
          let f =
              i.virtual && i.params.virtual.enabled
                ? i.virtual.slides.length
                : i.slides.length,
            h = i.params.loop
              ? Math.ceil(f / i.params.slidesPerGroup)
              : i.snapGrid.length;
          if (
            (i.params.loop
              ? ((r = i.previousRealIndex || 0),
                (e =
                  i.params.slidesPerGroup > 1
                    ? Math.floor(i.realIndex / i.params.slidesPerGroup)
                    : i.realIndex))
              : void 0 !== i.snapIndex
              ? ((e = i.snapIndex), (r = i.previousSnapIndex))
              : ((r = i.previousIndex || 0), (e = i.activeIndex || 0)),
            "bullets" === a.type &&
              i.pagination.bullets &&
              i.pagination.bullets.length > 0)
          ) {
            let l, o, c;
            let f = i.pagination.bullets;
            if (
              (a.dynamicBullets &&
                ((t = (0, s.f)(
                  f[0],
                  i.isHorizontal() ? "width" : "height",
                  !0
                )),
                d.forEach((e) => {
                  e.style[i.isHorizontal() ? "width" : "height"] = `${
                    t * (a.dynamicMainBullets + 4)
                  }px`;
                }),
                a.dynamicMainBullets > 1 &&
                  void 0 !== r &&
                  ((u += e - (r || 0)) > a.dynamicMainBullets - 1
                    ? (u = a.dynamicMainBullets - 1)
                    : u < 0 && (u = 0)),
                (c =
                  ((o =
                    (l = Math.max(e - u, 0)) +
                    (Math.min(f.length, a.dynamicMainBullets) - 1)) +
                    l) /
                  2)),
              f.forEach((e) => {
                let t = [
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => `${a.bulletActiveClass}${e}`),
                ]
                  .map((e) =>
                    "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              d.length > 1)
            )
              f.forEach((t) => {
                let r = (0, s.h)(t);
                r === e
                  ? t.classList.add(...a.bulletActiveClass.split(" "))
                  : i.isElement && t.setAttribute("part", "bullet"),
                  a.dynamicBullets &&
                    (r >= l &&
                      r <= o &&
                      t.classList.add(
                        ...`${a.bulletActiveClass}-main`.split(" ")
                      ),
                    r === l && p(t, "prev"),
                    r === o && p(t, "next"));
              });
            else {
              let t = f[e];
              if (
                (t && t.classList.add(...a.bulletActiveClass.split(" ")),
                i.isElement &&
                  f.forEach((t, i) => {
                    t.setAttribute(
                      "part",
                      i === e ? "bullet-active" : "bullet"
                    );
                  }),
                a.dynamicBullets)
              ) {
                let e = f[l],
                  t = f[o];
                for (let e = l; e <= o; e += 1)
                  f[e] &&
                    f[e].classList.add(
                      ...`${a.bulletActiveClass}-main`.split(" ")
                    );
                p(e, "prev"), p(t, "next");
              }
            }
            if (a.dynamicBullets) {
              let e = Math.min(f.length, a.dynamicMainBullets + 4),
                r = (t * e - t) / 2 - c * t,
                s = n ? "right" : "left";
              f.forEach((e) => {
                e.style[i.isHorizontal() ? s : "top"] = `${r}px`;
              });
            }
          }
          d.forEach((t, r) => {
            if (
              ("fraction" === a.type &&
                (t.querySelectorAll(l(a.currentClass)).forEach((t) => {
                  t.textContent = a.formatFractionCurrent(e + 1);
                }),
                t.querySelectorAll(l(a.totalClass)).forEach((e) => {
                  e.textContent = a.formatFractionTotal(h);
                })),
              "progressbar" === a.type)
            ) {
              let r;
              r = a.progressbarOpposite
                ? i.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : i.isHorizontal()
                ? "horizontal"
                : "vertical";
              let s = (e + 1) / h,
                n = 1,
                o = 1;
              "horizontal" === r ? (n = s) : (o = s),
                t.querySelectorAll(l(a.progressbarFillClass)).forEach((e) => {
                  (e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${o})`),
                    (e.style.transitionDuration = `${i.params.speed}ms`);
                });
            }
            "custom" === a.type && a.renderCustom
              ? ((t.innerHTML = a.renderCustom(i, e + 1, h)),
                0 === r && o("paginationRender", t))
              : (0 === r && o("paginationRender", t), o("paginationUpdate", t)),
              i.params.watchOverflow &&
                i.enabled &&
                t.classList[i.isLocked ? "add" : "remove"](a.lockClass);
          });
        }
        function m() {
          let e = i.params.pagination;
          if (c()) return;
          let t =
              i.virtual && i.params.virtual.enabled
                ? i.virtual.slides.length
                : i.grid && i.params.grid.rows > 1
                ? i.slides.length / Math.ceil(i.params.grid.rows)
                : i.slides.length,
            r = i.pagination.el;
          r = (0, s.m)(r);
          let n = "";
          if ("bullets" === e.type) {
            let r = i.params.loop
              ? Math.ceil(t / i.params.slidesPerGroup)
              : i.snapGrid.length;
            i.params.freeMode && i.params.freeMode.enabled && r > t && (r = t);
            for (let t = 0; t < r; t += 1)
              e.renderBullet
                ? (n += e.renderBullet.call(i, t, e.bulletClass))
                : (n += `<${e.bulletElement} ${
                    i.isElement ? 'part="bullet"' : ""
                  } class="${e.bulletClass}"></${e.bulletElement}>`);
          }
          "fraction" === e.type &&
            (n = e.renderFraction
              ? e.renderFraction.call(i, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            "progressbar" === e.type &&
              (n = e.renderProgressbar
                ? e.renderProgressbar.call(i, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
            (i.pagination.bullets = []),
            r.forEach((t) => {
              "custom" !== e.type && (t.innerHTML = n || ""),
                "bullets" === e.type &&
                  i.pagination.bullets.push(
                    ...t.querySelectorAll(l(e.bulletClass))
                  );
            }),
            "custom" !== e.type && o("paginationRender", r[0]);
        }
        function g() {
          let e;
          i.params.pagination = n(
            i,
            i.originalParams.pagination,
            i.params.pagination,
            { el: "swiper-pagination" }
          );
          let t = i.params.pagination;
          t.el &&
            ("string" == typeof t.el &&
              i.isElement &&
              (e = i.el.querySelector(t.el)),
            e ||
              "string" != typeof t.el ||
              (e = [...document.querySelectorAll(t.el)]),
            e || (e = t.el),
            e &&
              0 !== e.length &&
              (i.params.uniqueNavElements &&
                "string" == typeof t.el &&
                Array.isArray(e) &&
                e.length > 1 &&
                (e = [...i.el.querySelectorAll(t.el)]).length > 1 &&
                (e = e.filter((e) => (0, s.a)(e, ".swiper")[0] === i.el)[0]),
              Array.isArray(e) && 1 === e.length && (e = e[0]),
              Object.assign(i.pagination, { el: e }),
              (e = (0, s.m)(e)).forEach((e) => {
                "bullets" === t.type &&
                  t.clickable &&
                  e.classList.add(...(t.clickableClass || "").split(" ")),
                  e.classList.add(t.modifierClass + t.type),
                  e.classList.add(
                    i.isHorizontal() ? t.horizontalClass : t.verticalClass
                  ),
                  "bullets" === t.type &&
                    t.dynamicBullets &&
                    (e.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                    (u = 0),
                    t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                  "progressbar" === t.type &&
                    t.progressbarOpposite &&
                    e.classList.add(t.progressbarOppositeClass),
                  t.clickable && e.addEventListener("click", f),
                  i.enabled || e.classList.add(t.lockClass);
              })));
        }
        function v() {
          let e = i.params.pagination;
          if (c()) return;
          let t = i.pagination.el;
          t &&
            (t = (0, s.m)(t)).forEach((t) => {
              t.classList.remove(e.hiddenClass),
                t.classList.remove(e.modifierClass + e.type),
                t.classList.remove(
                  i.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                e.clickable &&
                  (t.classList.remove(...(e.clickableClass || "").split(" ")),
                  t.removeEventListener("click", f));
            }),
            i.pagination.bullets &&
              i.pagination.bullets.forEach((t) =>
                t.classList.remove(...e.bulletActiveClass.split(" "))
              );
        }
        a("changeDirection", () => {
          if (!i.pagination || !i.pagination.el) return;
          let e = i.params.pagination,
            { el: t } = i.pagination;
          (t = (0, s.m)(t)).forEach((t) => {
            t.classList.remove(e.horizontalClass, e.verticalClass),
              t.classList.add(
                i.isHorizontal() ? e.horizontalClass : e.verticalClass
              );
          });
        }),
          a("init", () => {
            !1 === i.params.pagination.enabled ? y() : (g(), m(), h());
          }),
          a("activeIndexChange", () => {
            void 0 === i.snapIndex && h();
          }),
          a("snapIndexChange", () => {
            h();
          }),
          a("snapGridLengthChange", () => {
            m(), h();
          }),
          a("destroy", () => {
            v();
          }),
          a("enable disable", () => {
            let { el: e } = i.pagination;
            e &&
              (e = (0, s.m)(e)).forEach((e) =>
                e.classList[i.enabled ? "remove" : "add"](
                  i.params.pagination.lockClass
                )
              );
          }),
          a("lock unlock", () => {
            h();
          }),
          a("click", (e, t) => {
            let r = t.target,
              n = (0, s.m)(i.pagination.el);
            if (
              i.params.pagination.el &&
              i.params.pagination.hideOnClick &&
              n &&
              n.length > 0 &&
              !r.classList.contains(i.params.pagination.bulletClass)
            ) {
              if (
                i.navigation &&
                ((i.navigation.nextEl && r === i.navigation.nextEl) ||
                  (i.navigation.prevEl && r === i.navigation.prevEl))
              )
                return;
              !0 === n[0].classList.contains(i.params.pagination.hiddenClass)
                ? o("paginationShow")
                : o("paginationHide"),
                n.forEach((e) =>
                  e.classList.toggle(i.params.pagination.hiddenClass)
                );
            }
          });
        let y = () => {
          i.el.classList.add(i.params.pagination.paginationDisabledClass);
          let { el: e } = i.pagination;
          e &&
            (e = (0, s.m)(e)).forEach((e) =>
              e.classList.add(i.params.pagination.paginationDisabledClass)
            ),
            v();
        };
        Object.assign(i.pagination, {
          enable: () => {
            i.el.classList.remove(i.params.pagination.paginationDisabledClass);
            let { el: e } = i.pagination;
            e &&
              (e = (0, s.m)(e)).forEach((e) =>
                e.classList.remove(i.params.pagination.paginationDisabledClass)
              ),
              g(),
              m(),
              h();
          },
          disable: y,
          render: m,
          update: h,
          init: g,
          destroy: v,
        });
      }
      function d(e) {
        let t,
          i,
          s,
          n,
          a,
          l,
          o,
          d,
          u,
          c,
          { swiper: p, extendParams: f, on: h, emit: m, params: g } = e;
        (p.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
          f({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !1,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          });
        let v = g && g.autoplay ? g.autoplay.delay : 3e3,
          y = g && g.autoplay ? g.autoplay.delay : 3e3,
          b = new Date().getTime();
        function w(e) {
          p &&
            !p.destroyed &&
            p.wrapperEl &&
            e.target === p.wrapperEl &&
            (p.wrapperEl.removeEventListener("transitionend", w),
            !c && (!e.detail || !e.detail.bySwiperTouchMove) && M());
        }
        let E = () => {
            if (p.destroyed || !p.autoplay.running) return;
            p.autoplay.paused ? (n = !0) : n && ((y = s), (n = !1));
            let e = p.autoplay.paused ? s : b + y - new Date().getTime();
            (p.autoplay.timeLeft = e),
              m("autoplayTimeLeft", e, e / v),
              (i = requestAnimationFrame(() => {
                E();
              }));
          },
          T = () => {
            let e;
            if (
              (e =
                p.virtual && p.params.virtual.enabled
                  ? p.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active")
                    )[0]
                  : p.slides[p.activeIndex])
            )
              return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          },
          S = (e) => {
            if (p.destroyed || !p.autoplay.running) return;
            cancelAnimationFrame(i), E();
            let r = void 0 === e ? p.params.autoplay.delay : e;
            (v = p.params.autoplay.delay), (y = p.params.autoplay.delay);
            let n = T();
            !Number.isNaN(n) &&
              n > 0 &&
              void 0 === e &&
              ((r = n), (v = n), (y = n)),
              (s = r);
            let a = p.params.speed,
              l = () => {
                p &&
                  !p.destroyed &&
                  (p.params.autoplay.reverseDirection
                    ? !p.isBeginning || p.params.loop || p.params.rewind
                      ? (p.slidePrev(a, !0, !0), m("autoplay"))
                      : p.params.autoplay.stopOnLastSlide ||
                        (p.slideTo(p.slides.length - 1, a, !0, !0),
                        m("autoplay"))
                    : !p.isEnd || p.params.loop || p.params.rewind
                    ? (p.slideNext(a, !0, !0), m("autoplay"))
                    : p.params.autoplay.stopOnLastSlide ||
                      (p.slideTo(0, a, !0, !0), m("autoplay")),
                  p.params.cssMode &&
                    ((b = new Date().getTime()),
                    requestAnimationFrame(() => {
                      S();
                    })));
              };
            return (
              r > 0
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    l();
                  }, r)))
                : requestAnimationFrame(() => {
                    l();
                  }),
              r
            );
          },
          x = () => {
            (b = new Date().getTime()),
              (p.autoplay.running = !0),
              S(),
              m("autoplayStart");
          },
          C = () => {
            (p.autoplay.running = !1),
              clearTimeout(t),
              cancelAnimationFrame(i),
              m("autoplayStop");
          },
          _ = (e, i) => {
            if (p.destroyed || !p.autoplay.running) return;
            clearTimeout(t), e || (u = !0);
            let r = () => {
              m("autoplayPause"),
                p.params.autoplay.waitForTransition
                  ? p.wrapperEl.addEventListener("transitionend", w)
                  : M();
            };
            if (((p.autoplay.paused = !0), i)) {
              d && (s = p.params.autoplay.delay), (d = !1), r();
              return;
            }
            (s = (s || p.params.autoplay.delay) - (new Date().getTime() - b)),
              (p.isEnd && s < 0 && !p.params.loop) || (s < 0 && (s = 0), r());
          },
          M = () => {
            (p.isEnd && s < 0 && !p.params.loop) ||
              p.destroyed ||
              !p.autoplay.running ||
              ((b = new Date().getTime()),
              u ? ((u = !1), S(s)) : S(),
              (p.autoplay.paused = !1),
              m("autoplayResume"));
          },
          P = () => {
            if (p.destroyed || !p.autoplay.running) return;
            let e = (0, r.g)();
            "hidden" === e.visibilityState && ((u = !0), _(!0)),
              "visible" === e.visibilityState && M();
          },
          L = (e) => {
            "mouse" === e.pointerType &&
              ((u = !0), (c = !0), p.animating || p.autoplay.paused || _(!0));
          },
          O = (e) => {
            "mouse" === e.pointerType && ((c = !1), p.autoplay.paused && M());
          },
          k = () => {
            p.params.autoplay.pauseOnMouseEnter &&
              (p.el.addEventListener("pointerenter", L),
              p.el.addEventListener("pointerleave", O));
          },
          I = () => {
            p.el &&
              "string" != typeof p.el &&
              (p.el.removeEventListener("pointerenter", L),
              p.el.removeEventListener("pointerleave", O));
          },
          A = () => {
            (0, r.g)().addEventListener("visibilitychange", P);
          },
          z = () => {
            (0, r.g)().removeEventListener("visibilitychange", P);
          };
        h("init", () => {
          p.params.autoplay.enabled && (k(), A(), x());
        }),
          h("destroy", () => {
            I(), z(), p.autoplay.running && C();
          }),
          h("_freeModeStaticRelease", () => {
            (l || u) && M();
          }),
          h("_freeModeNoMomentumRelease", () => {
            p.params.autoplay.disableOnInteraction ? C() : _(!0, !0);
          }),
          h("beforeTransitionStart", (e, t, i) => {
            !p.destroyed &&
              p.autoplay.running &&
              (i || !p.params.autoplay.disableOnInteraction ? _(!0, !0) : C());
          }),
          h("sliderFirstMove", () => {
            if (!p.destroyed && p.autoplay.running) {
              if (p.params.autoplay.disableOnInteraction) {
                C();
                return;
              }
              (a = !0),
                (l = !1),
                (u = !1),
                (o = setTimeout(() => {
                  (u = !0), (l = !0), _(!0);
                }, 200));
            }
          }),
          h("touchEnd", () => {
            if (!p.destroyed && p.autoplay.running && a) {
              if (
                (clearTimeout(o),
                clearTimeout(t),
                p.params.autoplay.disableOnInteraction)
              ) {
                (l = !1), (a = !1);
                return;
              }
              l && p.params.cssMode && M(), (l = !1), (a = !1);
            }
          }),
          h("slideChange", () => {
            !p.destroyed && p.autoplay.running && (d = !0);
          }),
          Object.assign(p.autoplay, { start: x, stop: C, pause: _, resume: M });
      }
    },
    1326: function (e, t, i) {
      "use strict";
      function r(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function s(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : r(t[i]) &&
                r(e[i]) &&
                Object.keys(t[i]).length > 0 &&
                s(e[i], t[i]);
          });
      }
      i.d(t, {
        a: function () {
          return o;
        },
        g: function () {
          return a;
        },
      });
      let n = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function a() {
        let e = "undefined" != typeof document ? document : {};
        return s(e, n), e;
      }
      let l = {
        document: n,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function o() {
        let e = "undefined" != typeof window ? window : {};
        return s(e, l), e;
      }
    },
    4703: function (e, t, i) {
      "use strict";
      i.d(t, {
        a: function () {
          return y;
        },
        c: function () {
          return f;
        },
        d: function () {
          return a;
        },
        e: function () {
          return c;
        },
        f: function () {
          return b;
        },
        h: function () {
          return v;
        },
        j: function () {
          return l;
        },
        m: function () {
          return w;
        },
        n: function () {
          return n;
        },
        o: function () {
          return g;
        },
        p: function () {
          return m;
        },
        q: function () {
          return h;
        },
        r: function () {
          return u;
        },
        s: function () {
          return d;
        },
        t: function () {
          return p;
        },
        u: function () {
          return function e() {
            let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
              i = ["__proto__", "constructor", "prototype"];
            for (let r = 1; r < arguments.length; r += 1) {
              let s = r < 0 || arguments.length <= r ? void 0 : arguments[r];
              if (
                null != s &&
                ("undefined" != typeof window && void 0 !== window.HTMLElement
                  ? !(s instanceof HTMLElement)
                  : !s || (1 !== s.nodeType && 11 !== s.nodeType))
              ) {
                let r = Object.keys(Object(s)).filter((e) => 0 > i.indexOf(e));
                for (let i = 0, n = r.length; i < n; i += 1) {
                  let n = r[i],
                    a = Object.getOwnPropertyDescriptor(s, n);
                  void 0 !== a &&
                    a.enumerable &&
                    (o(t[n]) && o(s[n])
                      ? s[n].__swiper__
                        ? (t[n] = s[n])
                        : e(t[n], s[n])
                      : !o(t[n]) && o(s[n])
                      ? ((t[n] = {}),
                        s[n].__swiper__ ? (t[n] = s[n]) : e(t[n], s[n]))
                      : (t[n] = s[n]));
                }
              }
            }
            return t;
          };
        },
        v: function () {
          return s;
        },
      });
      var r = i(1326);
      function s(e) {
        Object.keys(e).forEach((t) => {
          try {
            e[t] = null;
          } catch (e) {}
          try {
            delete e[t];
          } catch (e) {}
        });
      }
      function n(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function a() {
        return Date.now();
      }
      function l(e, t) {
        let i, s, n;
        void 0 === t && (t = "x");
        let a = (0, r.a)(),
          l = (function (e) {
            let t;
            let i = (0, r.a)();
            return (
              i.getComputedStyle && (t = i.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          a.WebKitCSSMatrix
            ? ((s = l.transform || l.webkitTransform).split(",").length > 6 &&
                (s = s
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (n = new a.WebKitCSSMatrix("none" === s ? "" : s)))
            : (i = (n =
                l.MozTransform ||
                l.OTransform ||
                l.MsTransform ||
                l.msTransform ||
                l.transform ||
                l
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (s = a.WebKitCSSMatrix
              ? n.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (s = a.WebKitCSSMatrix
              ? n.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          s || 0
        );
      }
      function o(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function d(e, t, i) {
        e.style.setProperty(t, i);
      }
      function u(e) {
        let t,
          { swiper: i, targetPosition: s, side: n } = e,
          a = (0, r.a)(),
          l = -i.translate,
          o = null,
          d = i.params.speed;
        (i.wrapperEl.style.scrollSnapType = "none"),
          a.cancelAnimationFrame(i.cssModeFrameID);
        let u = s > l ? "next" : "prev",
          c = (e, t) => ("next" === u && e >= t) || ("prev" === u && e <= t),
          p = () => {
            (t = new Date().getTime()), null === o && (o = t);
            let e =
              l +
              (0.5 -
                Math.cos(Math.max(Math.min((t - o) / d, 1), 0) * Math.PI) / 2) *
                (s - l);
            if (
              (c(e, s) && (e = s), i.wrapperEl.scrollTo({ [n]: e }), c(e, s))
            ) {
              (i.wrapperEl.style.overflow = "hidden"),
                (i.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (i.wrapperEl.style.overflow = ""),
                    i.wrapperEl.scrollTo({ [n]: e });
                }),
                a.cancelAnimationFrame(i.cssModeFrameID);
              return;
            }
            i.cssModeFrameID = a.requestAnimationFrame(p);
          };
        p();
      }
      function c(e, t) {
        return (
          void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
        );
      }
      function p(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function f(e, t) {
        var i;
        void 0 === t && (t = []);
        let r = document.createElement(e);
        return (
          r.classList.add(
            ...(Array.isArray(t)
              ? t
              : (void 0 === (i = t) && (i = ""),
                i
                  .trim()
                  .split(" ")
                  .filter((e) => !!e.trim())))
          ),
          r
        );
      }
      function h(e, t) {
        let i = [];
        for (; e.previousElementSibling; ) {
          let r = e.previousElementSibling;
          t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
        }
        return i;
      }
      function m(e, t) {
        let i = [];
        for (; e.nextElementSibling; ) {
          let r = e.nextElementSibling;
          t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
        }
        return i;
      }
      function g(e, t) {
        return (0, r.a)().getComputedStyle(e, null).getPropertyValue(t);
      }
      function v(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); )
            1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function y(e, t) {
        let i = [],
          r = e.parentElement;
        for (; r; )
          t ? r.matches(t) && i.push(r) : i.push(r), (r = r.parentElement);
        return i;
      }
      function b(e, t, i) {
        let s = (0, r.a)();
        return i
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      function w(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
    },
    1729: function (e, t, i) {
      "use strict";
      let r, s, n;
      i.d(t, {
        tq: function () {
          return q;
        },
        o5: function () {
          return W;
        },
      });
      var a = i(5271),
        l = i(1326),
        o = i(4703);
      function d() {
        return (
          r ||
            (r = (function () {
              let e = (0, l.a)(),
                t = (0, l.g)();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          r
        );
      }
      function u(e) {
        return (
          void 0 === e && (e = {}),
          s ||
            (s = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e,
                i = d(),
                r = (0, l.a)(),
                s = r.navigator.platform,
                n = t || r.navigator.userAgent,
                a = { ios: !1, android: !1 },
                o = r.screen.width,
                u = r.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                p = n.match(/(iPad).*OS\s([\d_]+)/),
                f = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "MacIntel" === s;
              return (
                !p &&
                  m &&
                  i.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${o}x${u}`) >= 0 &&
                  ((p = n.match(/(Version)\/([\d.]+)/)) ||
                    (p = [0, 1, "13_0_0"]),
                  (m = !1)),
                c && "Win32" !== s && ((a.os = "android"), (a.android = !0)),
                (p || h || f) && ((a.os = "ios"), (a.ios = !0)),
                a
              );
            })(e)),
          s
        );
      }
      let c = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        p = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        f = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          let i = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (i) {
            let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (i.shadowRoot
                ? (t = i.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  ))
                : requestAnimationFrame(() => {
                    i.shadowRoot &&
                      (t = i.shadowRoot.querySelector(
                        `.${e.params.lazyPreloaderClass}`
                      )) &&
                      t.remove();
                  })),
              t && t.remove();
          }
        },
        h = (e, t) => {
          if (!e.slides[t]) return;
          let i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute("loading");
        },
        m = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext,
            i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          let r =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            s = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            let i = [s - t];
            i.push(...Array.from({ length: t }).map((e, t) => s + r + t)),
              e.slides.forEach((t, r) => {
                i.includes(t.column) && h(e, r);
              });
            return;
          }
          let n = s + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let r = s - t; r <= n + t; r += 1) {
              let t = ((r % i) + i) % i;
              (t < s || t > n) && h(e, t);
            }
          else
            for (
              let r = Math.max(s - t, 0);
              r <= Math.min(n + t, i - 1);
              r += 1
            )
              r !== s && (r > n || r < s) && h(e, r);
        };
      function g(e) {
        let { swiper: t, runCallbacks: i, direction: r, step: s } = e,
          { activeIndex: n, previousIndex: a } = t,
          l = r;
        if (
          (l || (l = n > a ? "next" : n < a ? "prev" : "reset"),
          t.emit(`transition${s}`),
          i && n !== a)
        ) {
          if ("reset" === l) {
            t.emit(`slideResetTransition${s}`);
            return;
          }
          t.emit(`slideChangeTransition${s}`),
            "next" === l
              ? t.emit(`slideNextTransition${s}`)
              : t.emit(`slidePrevTransition${s}`);
        }
      }
      function v(e, t, i) {
        let r = (0, l.a)(),
          { params: s } = e,
          n = s.edgeSwipeDetection,
          a = s.edgeSwipeThreshold;
        return (
          !n ||
          (!(i <= a) && !(i >= r.innerWidth - a)) ||
          ("prevent" === n && (t.preventDefault(), !0))
        );
      }
      function y(e) {
        let t = (0, l.g)(),
          i = e;
        i.originalEvent && (i = i.originalEvent);
        let r = this.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
          r.pointerId = i.pointerId;
        } else
          "touchstart" === i.type &&
            1 === i.targetTouches.length &&
            (r.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) {
          v(this, i, i.targetTouches[0].pageX);
          return;
        }
        let { params: s, touches: n, enabled: a } = this;
        if (
          !a ||
          (!s.simulateTouch && "mouse" === i.pointerType) ||
          (this.animating && s.preventInteractionOnTransition)
        )
          return;
        !this.animating && s.cssMode && s.loop && this.loopFix();
        let d = i.target;
        if (
          ("wrapper" === s.touchEventsTarget && !this.wrapperEl.contains(d)) ||
          ("which" in i && 3 === i.which) ||
          ("button" in i && i.button > 0) ||
          (r.isTouched && r.isMoved)
        )
          return;
        let u = !!s.noSwipingClass && "" !== s.noSwipingClass,
          c = i.composedPath ? i.composedPath() : i.path;
        u && i.target && i.target.shadowRoot && c && (d = c[0]);
        let p = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          f = !!(i.target && i.target.shadowRoot);
        if (
          s.noSwiping &&
          (f
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(i) {
                    if (!i || i === (0, l.g)() || i === (0, l.a)()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let r = i.closest(e);
                    return r || i.getRootNode
                      ? r || t(i.getRootNode().host)
                      : null;
                  })(t)
                );
              })(p, d)
            : d.closest(p))
        ) {
          this.allowClick = !0;
          return;
        }
        if (s.swipeHandler && !d.closest(s.swipeHandler)) return;
        (n.currentX = i.pageX), (n.currentY = i.pageY);
        let h = n.currentX,
          m = n.currentY;
        if (!v(this, i, h)) return;
        Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (n.startX = h),
          (n.startY = m),
          (r.touchStartTime = (0, o.d)()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          s.threshold > 0 && (r.allowThresholdMove = !1);
        let g = !0;
        d.matches(r.focusableElements) &&
          ((g = !1), "SELECT" === d.nodeName && (r.isTouched = !1)),
          t.activeElement &&
            t.activeElement.matches(r.focusableElements) &&
            t.activeElement !== d &&
            t.activeElement.blur();
        let y = g && this.allowTouchMove && s.touchStartPreventDefault;
        (s.touchStartForcePreventDefault || y) &&
          !d.isContentEditable &&
          i.preventDefault(),
          s.freeMode &&
            s.freeMode.enabled &&
            this.freeMode &&
            this.animating &&
            !s.cssMode &&
            this.freeMode.onTouchStart(),
          this.emit("touchStart", i);
      }
      function b(e) {
        let t, i;
        let r = (0, l.g)(),
          s = this.touchEventsData,
          { params: n, touches: a, rtlTranslate: d, enabled: u } = this;
        if (!u || (!n.simulateTouch && "mouse" === e.pointerType)) return;
        let c = e;
        if (
          (c.originalEvent && (c = c.originalEvent),
          "pointermove" === c.type &&
            (null !== s.touchId || c.pointerId !== s.pointerId))
        )
          return;
        if ("touchmove" === c.type) {
          if (
            !(t = [...c.changedTouches].filter(
              (e) => e.identifier === s.touchId
            )[0]) ||
            t.identifier !== s.touchId
          )
            return;
        } else t = c;
        if (!s.isTouched) {
          s.startMoving && s.isScrolling && this.emit("touchMoveOpposite", c);
          return;
        }
        let p = t.pageX,
          f = t.pageY;
        if (c.preventedByNestedSwiper) {
          (a.startX = p), (a.startY = f);
          return;
        }
        if (!this.allowTouchMove) {
          c.target.matches(s.focusableElements) || (this.allowClick = !1),
            s.isTouched &&
              (Object.assign(a, {
                startX: p,
                startY: f,
                currentX: p,
                currentY: f,
              }),
              (s.touchStartTime = (0, o.d)()));
          return;
        }
        if (n.touchReleaseOnEdges && !n.loop) {
          if (this.isVertical()) {
            if (
              (f < a.startY && this.translate <= this.maxTranslate()) ||
              (f > a.startY && this.translate >= this.minTranslate())
            ) {
              (s.isTouched = !1), (s.isMoved = !1);
              return;
            }
          } else if (
            (p < a.startX && this.translate <= this.maxTranslate()) ||
            (p > a.startX && this.translate >= this.minTranslate())
          )
            return;
        }
        if (
          r.activeElement &&
          c.target === r.activeElement &&
          c.target.matches(s.focusableElements)
        ) {
          (s.isMoved = !0), (this.allowClick = !1);
          return;
        }
        s.allowTouchCallbacks && this.emit("touchMove", c),
          (a.previousX = a.currentX),
          (a.previousY = a.currentY),
          (a.currentX = p),
          (a.currentY = f);
        let h = a.currentX - a.startX,
          m = a.currentY - a.startY;
        if (
          this.params.threshold &&
          Math.sqrt(h ** 2 + m ** 2) < this.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let e;
          (this.isHorizontal() && a.currentY === a.startY) ||
          (this.isVertical() && a.currentX === a.startX)
            ? (s.isScrolling = !1)
            : h * h + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
              (s.isScrolling = this.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (s.isScrolling && this.emit("touchMoveOpposite", c),
          void 0 === s.startMoving &&
            (a.currentX !== a.startX || a.currentY !== a.startY) &&
            (s.startMoving = !0),
          s.isScrolling ||
            ("touchmove" === c.type && s.preventTouchMoveFromPointerMove))
        ) {
          s.isTouched = !1;
          return;
        }
        if (!s.startMoving) return;
        (this.allowClick = !1),
          !n.cssMode && c.cancelable && c.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && c.stopPropagation();
        let g = this.isHorizontal() ? h : m,
          v = this.isHorizontal()
            ? a.currentX - a.previousX
            : a.currentY - a.previousY;
        n.oneWayMovement &&
          ((g = Math.abs(g) * (d ? 1 : -1)), (v = Math.abs(v) * (d ? 1 : -1))),
          (a.diff = g),
          (g *= n.touchRatio),
          d && ((g = -g), (v = -v));
        let y = this.touchesDirection;
        (this.swipeDirection = g > 0 ? "prev" : "next"),
          (this.touchesDirection = v > 0 ? "prev" : "next");
        let b = this.params.loop && !n.cssMode,
          w =
            ("next" === this.touchesDirection && this.allowSlideNext) ||
            ("prev" === this.touchesDirection && this.allowSlidePrev);
        if (!s.isMoved) {
          if (
            (b && w && this.loopFix({ direction: this.swipeDirection }),
            (s.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating)
          ) {
            let e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            this.wrapperEl.dispatchEvent(e);
          }
          (s.allowMomentumBounce = !1),
            n.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", c);
        }
        if (
          (new Date().getTime(),
          s.isMoved &&
            s.allowThresholdMove &&
            y !== this.touchesDirection &&
            b &&
            w &&
            Math.abs(g) >= 1)
        ) {
          Object.assign(a, {
            startX: p,
            startY: f,
            currentX: p,
            currentY: f,
            startTranslate: s.currentTranslate,
          }),
            (s.loopSwapReset = !0),
            (s.startTranslate = s.currentTranslate);
          return;
        }
        this.emit("sliderMove", c),
          (s.isMoved = !0),
          (s.currentTranslate = g + s.startTranslate);
        let E = !0,
          T = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (T = 0),
          g > 0
            ? (b &&
                w &&
                !i &&
                s.allowThresholdMove &&
                s.currentTranslate >
                  (n.centeredSlides
                    ? this.minTranslate() -
                      this.slidesSizesGrid[this.activeIndex + 1]
                    : this.minTranslate()) &&
                this.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              s.currentTranslate > this.minTranslate() &&
                ((E = !1),
                n.resistance &&
                  (s.currentTranslate =
                    this.minTranslate() -
                    1 +
                    (-this.minTranslate() + s.startTranslate + g) ** T)))
            : g < 0 &&
              (b &&
                w &&
                !i &&
                s.allowThresholdMove &&
                s.currentTranslate <
                  (n.centeredSlides
                    ? this.maxTranslate() +
                      this.slidesSizesGrid[this.slidesSizesGrid.length - 1]
                    : this.maxTranslate()) &&
                this.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    this.slides.length -
                    ("auto" === n.slidesPerView
                      ? this.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(n.slidesPerView, 10))),
                }),
              s.currentTranslate < this.maxTranslate() &&
                ((E = !1),
                n.resistance &&
                  (s.currentTranslate =
                    this.maxTranslate() +
                    1 -
                    (this.maxTranslate() - s.startTranslate - g) ** T))),
          E && (c.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          this.allowSlidePrev ||
            this.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          n.threshold > 0)
        ) {
          if (Math.abs(g) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
              (s.allowThresholdMove = !0),
                (a.startX = a.currentX),
                (a.startY = a.currentY),
                (s.currentTranslate = s.startTranslate),
                (a.diff = this.isHorizontal()
                  ? a.currentX - a.startX
                  : a.currentY - a.startY);
              return;
            }
          } else {
            s.currentTranslate = s.startTranslate;
            return;
          }
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && this.freeMode) ||
            n.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          n.freeMode &&
            n.freeMode.enabled &&
            this.freeMode &&
            this.freeMode.onTouchMove(),
          this.updateProgress(s.currentTranslate),
          this.setTranslate(s.currentTranslate));
      }
      function w(e) {
        let t, i;
        let r = this,
          s = r.touchEventsData,
          n = e;
        if (
          (n.originalEvent && (n = n.originalEvent),
          "touchend" === n.type || "touchcancel" === n.type)
        ) {
          if (
            !(t = [...n.changedTouches].filter(
              (e) => e.identifier === s.touchId
            )[0]) ||
            t.identifier !== s.touchId
          )
            return;
        } else {
          if (null !== s.touchId || n.pointerId !== s.pointerId) return;
          t = n;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(n.type) &&
          !(
            ["pointercancel", "contextmenu"].includes(n.type) &&
            (r.browser.isSafari || r.browser.isWebView)
          )
        )
          return;
        (s.pointerId = null), (s.touchId = null);
        let {
          params: a,
          touches: l,
          rtlTranslate: d,
          slidesGrid: u,
          enabled: c,
        } = r;
        if (!c || (!a.simulateTouch && "mouse" === n.pointerType)) return;
        if (
          (s.allowTouchCallbacks && r.emit("touchEnd", n),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        ) {
          s.isMoved && a.grabCursor && r.setGrabCursor(!1),
            (s.isMoved = !1),
            (s.startMoving = !1);
          return;
        }
        a.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) &&
          r.setGrabCursor(!1);
        let p = (0, o.d)(),
          f = p - s.touchStartTime;
        if (r.allowClick) {
          let e = n.path || (n.composedPath && n.composedPath());
          r.updateClickedSlide((e && e[0]) || n.target, e),
            r.emit("tap click", n),
            f < 300 &&
              p - s.lastClickTime < 300 &&
              r.emit("doubleTap doubleClick", n);
        }
        if (
          ((s.lastClickTime = (0, o.d)()),
          (0, o.n)(() => {
            r.destroyed || (r.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !r.swipeDirection ||
            (0 === l.diff && !s.loopSwapReset) ||
            (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
        ) {
          (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
          return;
        }
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (i = a.followFinger
            ? d
              ? r.translate
              : -r.translate
            : -s.currentTranslate),
          a.cssMode)
        )
          return;
        if (a.freeMode && a.freeMode.enabled) {
          r.freeMode.onTouchEnd({ currentPos: i });
          return;
        }
        let h = i >= -r.maxTranslate() && !r.params.loop,
          m = 0,
          g = r.slidesSizesGrid[0];
        for (
          let e = 0;
          e < u.length;
          e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
        ) {
          let t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== u[e + t]
            ? (h || (i >= u[e] && i < u[e + t])) &&
              ((m = e), (g = u[e + t] - u[e]))
            : (h || i >= u[e]) &&
              ((m = e), (g = u[u.length - 1] - u[u.length - 2]));
        }
        let v = null,
          y = null;
        a.rewind &&
          (r.isBeginning
            ? (y =
                a.virtual && a.virtual.enabled && r.virtual
                  ? r.virtual.slides.length - 1
                  : r.slides.length - 1)
            : r.isEnd && (v = 0));
        let b = (i - u[m]) / g,
          w = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (f > a.longSwipesMs) {
          if (!a.longSwipes) {
            r.slideTo(r.activeIndex);
            return;
          }
          "next" === r.swipeDirection &&
            (b >= a.longSwipesRatio
              ? r.slideTo(a.rewind && r.isEnd ? v : m + w)
              : r.slideTo(m)),
            "prev" === r.swipeDirection &&
              (b > 1 - a.longSwipesRatio
                ? r.slideTo(m + w)
                : null !== y && b < 0 && Math.abs(b) > a.longSwipesRatio
                ? r.slideTo(y)
                : r.slideTo(m));
        } else {
          if (!a.shortSwipes) {
            r.slideTo(r.activeIndex);
            return;
          }
          r.navigation &&
          (n.target === r.navigation.nextEl || n.target === r.navigation.prevEl)
            ? n.target === r.navigation.nextEl
              ? r.slideTo(m + w)
              : r.slideTo(m)
            : ("next" === r.swipeDirection && r.slideTo(null !== v ? v : m + w),
              "prev" === r.swipeDirection && r.slideTo(null !== y ? y : m));
        }
      }
      function E() {
        let e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: r, allowSlidePrev: s, snapGrid: n } = e,
          a = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        let l = a && t.loop;
        ("auto" !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        l
          ? e.params.loop && !a
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = s),
          (e.allowSlideNext = r),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function T(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function S() {
        let { wrapperEl: e, rtlTranslate: t, enabled: i } = this;
        if (!i) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let r = this.maxTranslate() - this.minTranslate();
        (0 === r ? 0 : (this.translate - this.minTranslate()) / r) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      function x(e) {
        f(this, e.target),
          !this.params.cssMode &&
            ("auto" === this.params.slidesPerView || this.params.autoHeight) &&
            this.update();
      }
      function C() {
        !this.documentTouchHandlerProceeded &&
          ((this.documentTouchHandlerProceeded = !0),
          this.params.touchReleaseOnEdges &&
            (this.el.style.touchAction = "auto"));
      }
      let _ = (e, t) => {
          let i = (0, l.g)(),
            { params: r, el: s, wrapperEl: n, device: a } = e,
            o = !!r.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener";
          s &&
            "string" != typeof s &&
            (i[d]("touchstart", e.onDocumentTouchStart, {
              passive: !1,
              capture: o,
            }),
            s[d]("touchstart", e.onTouchStart, { passive: !1 }),
            s[d]("pointerdown", e.onTouchStart, { passive: !1 }),
            i[d]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("touchend", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerup", e.onTouchEnd, { passive: !0 }),
            i[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
            i[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerout", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
            i[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (r.preventClicks || r.preventClicksPropagation) &&
              s[d]("click", e.onClick, !0),
            r.cssMode && n[d]("scroll", e.onScroll),
            r.updateOnWindowResize
              ? e[t](
                  a.ios || a.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  E,
                  !0
                )
              : e[t]("observerUpdate", E, !0),
            s[d]("load", e.onLoad, { capture: !0 }));
        },
        M = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var P = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let L = {
          eventsEmitter: {
            on(e, t, i) {
              let r = this;
              if (!r.eventsListeners || r.destroyed || "function" != typeof t)
                return r;
              let s = i ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  r.eventsListeners[e] || (r.eventsListeners[e] = []),
                    r.eventsListeners[e][s](t);
                }),
                r
              );
            },
            once(e, t, i) {
              let r = this;
              if (!r.eventsListeners || r.destroyed || "function" != typeof t)
                return r;
              function s() {
                r.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                for (var i = arguments.length, n = Array(i), a = 0; a < i; a++)
                  n[a] = arguments[a];
                t.apply(r, n);
              }
              return (s.__emitterProxy = t), r.on(e, s, i);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let i = this;
              return (
                i.eventsListeners &&
                  !i.destroyed &&
                  i.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((r, s) => {
                          (r === t ||
                            (r.__emitterProxy && r.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(s, 1);
                        });
                  }),
                i
              );
            },
            emit() {
              let e, t, i;
              let r = this;
              if (!r.eventsListeners || r.destroyed || !r.eventsListeners)
                return r;
              for (var s = arguments.length, n = Array(s), a = 0; a < s; a++)
                n[a] = arguments[a];
              return (
                "string" == typeof n[0] || Array.isArray(n[0])
                  ? ((e = n[0]), (t = n.slice(1, n.length)), (i = r))
                  : ((e = n[0].events),
                    (t = n[0].data),
                    (i = n[0].context || r)),
                t.unshift(i),
                (Array.isArray(e) ? e : e.split(" ")).forEach((e) => {
                  r.eventsAnyListeners &&
                    r.eventsAnyListeners.length &&
                    r.eventsAnyListeners.forEach((r) => {
                      r.apply(i, [e, ...t]);
                    }),
                    r.eventsListeners &&
                      r.eventsListeners[e] &&
                      r.eventsListeners[e].forEach((e) => {
                        e.apply(i, t);
                      });
                }),
                r
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let i = this.el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : i.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : i.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt((0, o.o)(i, "padding-left") || 0, 10) -
                    parseInt((0, o.o)(i, "padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt((0, o.o)(i, "padding-top") || 0, 10) -
                    parseInt((0, o.o)(i, "padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function i(e, i) {
                return parseFloat(
                  e.getPropertyValue(t.getDirectionLabel(i)) || 0
                );
              }
              let r = t.params,
                {
                  wrapperEl: s,
                  slidesEl: n,
                  size: a,
                  rtlTranslate: l,
                  wrongRTL: d,
                } = t,
                u = t.virtual && r.virtual.enabled,
                c = u ? t.virtual.slides.length : t.slides.length,
                p = (0, o.e)(n, `.${t.params.slideClass}, swiper-slide`),
                f = u ? t.virtual.slides.length : p.length,
                h = [],
                m = [],
                g = [],
                v = r.slidesOffsetBefore;
              "function" == typeof v && (v = r.slidesOffsetBefore.call(t));
              let y = r.slidesOffsetAfter;
              "function" == typeof y && (y = r.slidesOffsetAfter.call(t));
              let b = t.snapGrid.length,
                w = t.slidesGrid.length,
                E = r.spaceBetween,
                T = -v,
                S = 0,
                x = 0;
              if (void 0 === a) return;
              "string" == typeof E && E.indexOf("%") >= 0
                ? (E = (parseFloat(E.replace("%", "")) / 100) * a)
                : "string" == typeof E && (E = parseFloat(E)),
                (t.virtualSize = -E),
                p.forEach((e) => {
                  l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                    (e.style.marginBottom = ""),
                    (e.style.marginTop = "");
                }),
                r.centeredSlides &&
                  r.cssMode &&
                  ((0, o.s)(s, "--swiper-centered-offset-before", ""),
                  (0, o.s)(s, "--swiper-centered-offset-after", ""));
              let C = r.grid && r.grid.rows > 1 && t.grid;
              C ? t.grid.initSlides(p) : t.grid && t.grid.unsetSlides();
              let _ =
                "auto" === r.slidesPerView &&
                r.breakpoints &&
                Object.keys(r.breakpoints).filter(
                  (e) => void 0 !== r.breakpoints[e].slidesPerView
                ).length > 0;
              for (let s = 0; s < f; s += 1) {
                let n;
                if (
                  ((e = 0),
                  p[s] && (n = p[s]),
                  C && t.grid.updateSlide(s, n, p),
                  !p[s] || "none" !== (0, o.o)(n, "display"))
                ) {
                  if ("auto" === r.slidesPerView) {
                    _ && (p[s].style[t.getDirectionLabel("width")] = "");
                    let a = getComputedStyle(n),
                      l = n.style.transform,
                      d = n.style.webkitTransform;
                    if (
                      (l && (n.style.transform = "none"),
                      d && (n.style.webkitTransform = "none"),
                      r.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? (0, o.f)(n, "width", !0)
                        : (0, o.f)(n, "height", !0);
                    else {
                      let t = i(a, "width"),
                        r = i(a, "padding-left"),
                        s = i(a, "padding-right"),
                        l = i(a, "margin-left"),
                        o = i(a, "margin-right"),
                        d = a.getPropertyValue("box-sizing");
                      if (d && "border-box" === d) e = t + l + o;
                      else {
                        let { clientWidth: i, offsetWidth: a } = n;
                        e = t + r + s + l + o + (a - i);
                      }
                    }
                    l && (n.style.transform = l),
                      d && (n.style.webkitTransform = d),
                      r.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (a - (r.slidesPerView - 1) * E) / r.slidesPerView),
                      r.roundLengths && (e = Math.floor(e)),
                      p[s] &&
                        (p[s].style[t.getDirectionLabel("width")] = `${e}px`);
                  p[s] && (p[s].swiperSlideSize = e),
                    g.push(e),
                    r.centeredSlides
                      ? ((T = T + e / 2 + S / 2 + E),
                        0 === S && 0 !== s && (T = T - a / 2 - E),
                        0 === s && (T = T - a / 2 - E),
                        0.001 > Math.abs(T) && (T = 0),
                        r.roundLengths && (T = Math.floor(T)),
                        x % r.slidesPerGroup == 0 && h.push(T),
                        m.push(T))
                      : (r.roundLengths && (T = Math.floor(T)),
                        (x - Math.min(t.params.slidesPerGroupSkip, x)) %
                          t.params.slidesPerGroup ==
                          0 && h.push(T),
                        m.push(T),
                        (T = T + e + E)),
                    (t.virtualSize += e + E),
                    (S = e),
                    (x += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, a) + y),
                l &&
                  d &&
                  ("slide" === r.effect || "coverflow" === r.effect) &&
                  (s.style.width = `${t.virtualSize + E}px`),
                r.setWrapperSize &&
                  (s.style[t.getDirectionLabel("width")] = `${
                    t.virtualSize + E
                  }px`),
                C && t.grid.updateWrapperSize(e, h),
                !r.centeredSlides)
              ) {
                let e = [];
                for (let i = 0; i < h.length; i += 1) {
                  let s = h[i];
                  r.roundLengths && (s = Math.floor(s)),
                    h[i] <= t.virtualSize - a && e.push(s);
                }
                (h = e),
                  Math.floor(t.virtualSize - a) - Math.floor(h[h.length - 1]) >
                    1 && h.push(t.virtualSize - a);
              }
              if (u && r.loop) {
                let e = g[0] + E;
                if (r.slidesPerGroup > 1) {
                  let i = Math.ceil(
                      (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                        r.slidesPerGroup
                    ),
                    s = e * r.slidesPerGroup;
                  for (let e = 0; e < i; e += 1) h.push(h[h.length - 1] + s);
                }
                for (
                  let i = 0;
                  i < t.virtual.slidesBefore + t.virtual.slidesAfter;
                  i += 1
                )
                  1 === r.slidesPerGroup && h.push(h[h.length - 1] + e),
                    m.push(m[m.length - 1] + e),
                    (t.virtualSize += e);
              }
              if ((0 === h.length && (h = [0]), 0 !== E)) {
                let e =
                  t.isHorizontal() && l
                    ? "marginLeft"
                    : t.getDirectionLabel("marginRight");
                p.filter(
                  (e, t) => !r.cssMode || !!r.loop || t !== p.length - 1
                ).forEach((t) => {
                  t.style[e] = `${E}px`;
                });
              }
              if (r.centeredSlides && r.centeredSlidesBounds) {
                let e = 0;
                g.forEach((t) => {
                  e += t + (E || 0);
                });
                let t = (e -= E) - a;
                h = h.map((e) => (e <= 0 ? -v : e > t ? t + y : e));
              }
              if (r.centerInsufficientSlides) {
                let e = 0;
                g.forEach((t) => {
                  e += t + (E || 0);
                }),
                  (e -= E);
                let t =
                  (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
                if (e + t < a) {
                  let i = (a - e - t) / 2;
                  h.forEach((e, t) => {
                    h[t] = e - i;
                  }),
                    m.forEach((e, t) => {
                      m[t] = e + i;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: p,
                  snapGrid: h,
                  slidesGrid: m,
                  slidesSizesGrid: g,
                }),
                r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
              ) {
                (0, o.s)(s, "--swiper-centered-offset-before", `${-h[0]}px`),
                  (0, o.s)(
                    s,
                    "--swiper-centered-offset-after",
                    `${t.size / 2 - g[g.length - 1] / 2}px`
                  );
                let e = -t.snapGrid[0],
                  i = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + i));
              }
              if (
                (f !== c && t.emit("slidesLengthChange"),
                h.length !== b &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                m.length !== w && t.emit("slidesGridLengthChange"),
                r.watchSlidesProgress && t.updateSlidesOffset(),
                t.emit("slidesUpdated"),
                !u &&
                  !r.cssMode &&
                  ("slide" === r.effect || "fade" === r.effect))
              ) {
                let e = `${r.containerModifierClass}backface-hidden`,
                  i = t.el.classList.contains(e);
                f <= r.maxBackfaceHiddenSlides
                  ? i || t.el.classList.add(e)
                  : i && t.el.classList.remove(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let i = this,
                r = [],
                s = i.virtual && i.params.virtual.enabled,
                n = 0;
              "number" == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed);
              let a = (e) =>
                s ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
              if (
                "auto" !== i.params.slidesPerView &&
                i.params.slidesPerView > 1
              ) {
                if (i.params.centeredSlides)
                  (i.visibleSlides || []).forEach((e) => {
                    r.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    let e = i.activeIndex + t;
                    if (e > i.slides.length && !s) break;
                    r.push(a(e));
                  }
              } else r.push(a(i.activeIndex));
              for (t = 0; t < r.length; t += 1)
                if (void 0 !== r[t]) {
                  let e = r[t].offsetHeight;
                  n = e > n ? e : n;
                }
              (n || 0 === n) && (i.wrapperEl.style.height = `${n}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0;
              for (let i = 0; i < e.length; i += 1)
                e[i].swiperSlideOffset =
                  (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
                  t -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              let t = this.params,
                { slides: i, rtlTranslate: r, snapGrid: s } = this;
              if (0 === i.length) return;
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              let n = -e;
              r && (n = e),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              let a = t.spaceBetween;
              "string" == typeof a && a.indexOf("%") >= 0
                ? (a = (parseFloat(a.replace("%", "")) / 100) * this.size)
                : "string" == typeof a && (a = parseFloat(a));
              for (let e = 0; e < i.length; e += 1) {
                let l = i[e],
                  o = l.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                let d =
                    (n + (t.centeredSlides ? this.minTranslate() : 0) - o) /
                    (l.swiperSlideSize + a),
                  u =
                    (n -
                      s[0] +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      o) /
                    (l.swiperSlideSize + a),
                  p = -(n - o),
                  f = p + this.slidesSizesGrid[e],
                  h = p >= 0 && p <= this.size - this.slidesSizesGrid[e],
                  m =
                    (p >= 0 && p < this.size - 1) ||
                    (f > 1 && f <= this.size) ||
                    (p <= 0 && f >= this.size);
                m &&
                  (this.visibleSlides.push(l),
                  this.visibleSlidesIndexes.push(e)),
                  c(l, m, t.slideVisibleClass),
                  c(l, h, t.slideFullyVisibleClass),
                  (l.progress = r ? -d : d),
                  (l.originalProgress = r ? -u : u);
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                {
                  progress: r,
                  isBeginning: s,
                  isEnd: n,
                  progressLoop: a,
                } = this,
                l = s,
                o = n;
              if (0 === i) (r = 0), (s = !0), (n = !0);
              else {
                r = (e - this.minTranslate()) / i;
                let t = 1 > Math.abs(e - this.minTranslate()),
                  a = 1 > Math.abs(e - this.maxTranslate());
                (s = t || r <= 0),
                  (n = a || r >= 1),
                  t && (r = 0),
                  a && (r = 1);
              }
              if (t.loop) {
                let t = this.getSlideIndexByData(0),
                  i = this.getSlideIndexByData(this.slides.length - 1),
                  r = this.slidesGrid[t],
                  s = this.slidesGrid[i],
                  n = this.slidesGrid[this.slidesGrid.length - 1],
                  l = Math.abs(e);
                (a = l >= r ? (l - r) / n : (l + n - s) / n) > 1 && (a -= 1);
              }
              Object.assign(this, {
                progress: r,
                progressLoop: a,
                isBeginning: s,
                isEnd: n,
              }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                s && !l && this.emit("reachBeginning toEdge"),
                n && !o && this.emit("reachEnd toEdge"),
                ((l && !s) || (o && !n)) && this.emit("fromEdge"),
                this.emit("progress", r);
            },
            updateSlidesClasses: function () {
              let e, t, i;
              let { slides: r, params: s, slidesEl: n, activeIndex: a } = this,
                l = this.virtual && s.virtual.enabled,
                d = this.grid && s.grid && s.grid.rows > 1,
                u = (e) =>
                  (0, o.e)(n, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
              if (l) {
                if (s.loop) {
                  let t = a - this.virtual.slidesBefore;
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length &&
                      (t -= this.virtual.slides.length),
                    (e = u(`[data-swiper-slide-index="${t}"]`));
                } else e = u(`[data-swiper-slide-index="${a}"]`);
              } else
                d
                  ? ((e = r.filter((e) => e.column === a)[0]),
                    (i = r.filter((e) => e.column === a + 1)[0]),
                    (t = r.filter((e) => e.column === a - 1)[0]))
                  : (e = r[a]);
              e &&
                !d &&
                ((i = (0, o.p)(e, `.${s.slideClass}, swiper-slide`)[0]),
                s.loop && !i && (i = r[0]),
                (t = (0, o.q)(e, `.${s.slideClass}, swiper-slide`)[0]),
                s.loop),
                r.forEach((r) => {
                  p(r, r === e, s.slideActiveClass),
                    p(r, r === i, s.slideNextClass),
                    p(r, r === t, s.slidePrevClass);
                }),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t, i;
              let r = this,
                s = r.rtlTranslate ? r.translate : -r.translate,
                {
                  snapGrid: n,
                  params: a,
                  activeIndex: l,
                  realIndex: o,
                  snapIndex: d,
                } = r,
                u = e,
                c = (e) => {
                  let t = e - r.virtual.slidesBefore;
                  return (
                    t < 0 && (t = r.virtual.slides.length + t),
                    t >= r.virtual.slides.length &&
                      (t -= r.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === u &&
                  (u = (function (e) {
                    let t;
                    let { slidesGrid: i, params: r } = e,
                      s = e.rtlTranslate ? e.translate : -e.translate;
                    for (let e = 0; e < i.length; e += 1)
                      void 0 !== i[e + 1]
                        ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                          ? (t = e)
                          : s >= i[e] && s < i[e + 1] && (t = e + 1)
                        : s >= i[e] && (t = e);
                    return (
                      r.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    );
                  })(r)),
                n.indexOf(s) >= 0)
              )
                t = n.indexOf(s);
              else {
                let e = Math.min(a.slidesPerGroupSkip, u);
                t = e + Math.floor((u - e) / a.slidesPerGroup);
              }
              if (
                (t >= n.length && (t = n.length - 1), u === l && !r.params.loop)
              ) {
                t !== d && ((r.snapIndex = t), r.emit("snapIndexChange"));
                return;
              }
              if (
                u === l &&
                r.params.loop &&
                r.virtual &&
                r.params.virtual.enabled
              ) {
                r.realIndex = c(u);
                return;
              }
              let p = r.grid && a.grid && a.grid.rows > 1;
              if (r.virtual && a.virtual.enabled && a.loop) i = c(u);
              else if (p) {
                let e = r.slides.filter((e) => e.column === u)[0],
                  t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(t) && (t = Math.max(r.slides.indexOf(e), 0)),
                  (i = Math.floor(t / a.grid.rows));
              } else if (r.slides[u]) {
                let e = r.slides[u].getAttribute("data-swiper-slide-index");
                i = e ? parseInt(e, 10) : u;
              } else i = u;
              Object.assign(r, {
                previousSnapIndex: d,
                snapIndex: t,
                previousRealIndex: o,
                realIndex: i,
                previousIndex: l,
                activeIndex: u,
              }),
                r.initialized && m(r),
                r.emit("activeIndexChange"),
                r.emit("snapIndexChange"),
                (r.initialized || r.params.runCallbacksOnInit) &&
                  (o !== i && r.emit("realIndexChange"), r.emit("slideChange"));
            },
            updateClickedSlide: function (e, t) {
              let i;
              let r = this.params,
                s = e.closest(`.${r.slideClass}, swiper-slide`);
              !s &&
                this.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !s &&
                    e.matches &&
                    e.matches(`.${r.slideClass}, swiper-slide`) &&
                    (s = e);
                });
              let n = !1;
              if (s) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === s) {
                    (n = !0), (i = e);
                    break;
                  }
              }
              if (s && n)
                (this.clickedSlide = s),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        s.getAttribute("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = i);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              r.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              let {
                params: t,
                rtlTranslate: i,
                translate: r,
                wrapperEl: s,
              } = this;
              if (t.virtualTranslate) return i ? -r : r;
              if (t.cssMode) return r;
              let n = (0, o.j)(s, e);
              return (n += this.cssOverflowAdjustment()), i && (n = -n), n || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: i,
                  params: r,
                  wrapperEl: s,
                  progress: n,
                } = this,
                a = 0,
                l = 0;
              this.isHorizontal() ? (a = i ? -e : e) : (l = e),
                r.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? a : l),
                r.cssMode
                  ? (s[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -a : -l)
                  : r.virtualTranslate ||
                    (this.isHorizontal()
                      ? (a -= this.cssOverflowAdjustment())
                      : (l -= this.cssOverflowAdjustment()),
                    (s.style.transform = `translate3d(${a}px, ${l}px, 0px)`));
              let o = this.maxTranslate() - this.minTranslate();
              (0 === o ? 0 : (e - this.minTranslate()) / o) !== n &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, r, s) {
              let n;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === r && (r = !0);
              let a = this,
                { params: l, wrapperEl: d } = a;
              if (a.animating && l.preventInteractionOnTransition) return !1;
              let u = a.minTranslate(),
                c = a.maxTranslate();
              if (
                ((n = r && e > u ? u : r && e < c ? c : e),
                a.updateProgress(n),
                l.cssMode)
              ) {
                let e = a.isHorizontal();
                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -n;
                else {
                  if (!a.support.smoothScroll)
                    return (
                      (0, o.r)({
                        swiper: a,
                        targetPosition: -n,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  d.scrollTo({ [e ? "left" : "top"]: -n, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (a.setTransition(0),
                    a.setTranslate(n),
                    i &&
                      (a.emit("beforeTransitionStart", t, s),
                      a.emit("transitionEnd")))
                  : (a.setTransition(t),
                    a.setTranslate(n),
                    i &&
                      (a.emit("beforeTransitionStart", t, s),
                      a.emit("transitionStart")),
                    a.animating ||
                      ((a.animating = !0),
                      a.onTranslateToWrapperTransitionEnd ||
                        (a.onTranslateToWrapperTransitionEnd = function (e) {
                          a &&
                            !a.destroyed &&
                            e.target === this &&
                            (a.wrapperEl.removeEventListener(
                              "transitionend",
                              a.onTranslateToWrapperTransitionEnd
                            ),
                            (a.onTranslateToWrapperTransitionEnd = null),
                            delete a.onTranslateToWrapperTransitionEnd,
                            (a.animating = !1),
                            i && a.emit("transitionEnd"));
                        }),
                      a.wrapperEl.addEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = `${e}ms`),
                (this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                g({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              (this.animating = !1),
                i.cssMode ||
                  (this.setTransition(0),
                  g({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e, t, i, r, s) {
              let n;
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let a = this,
                l = e;
              l < 0 && (l = 0);
              let {
                params: d,
                snapGrid: u,
                slidesGrid: c,
                previousIndex: p,
                activeIndex: f,
                rtlTranslate: h,
                wrapperEl: m,
                enabled: g,
              } = a;
              if (
                (!g && !r && !s) ||
                a.destroyed ||
                (a.animating && d.preventInteractionOnTransition)
              )
                return !1;
              void 0 === t && (t = a.params.speed);
              let v = Math.min(a.params.slidesPerGroupSkip, l),
                y = v + Math.floor((l - v) / a.params.slidesPerGroup);
              y >= u.length && (y = u.length - 1);
              let b = -u[y];
              if (d.normalizeSlideIndex)
                for (let e = 0; e < c.length; e += 1) {
                  let t = -Math.floor(100 * b),
                    i = Math.floor(100 * c[e]),
                    r = Math.floor(100 * c[e + 1]);
                  void 0 !== c[e + 1]
                    ? t >= i && t < r - (r - i) / 2
                      ? (l = e)
                      : t >= i && t < r && (l = e + 1)
                    : t >= i && (l = e);
                }
              if (
                a.initialized &&
                l !== f &&
                ((!a.allowSlideNext &&
                  (h
                    ? b > a.translate && b > a.minTranslate()
                    : b < a.translate && b < a.minTranslate())) ||
                  (!a.allowSlidePrev &&
                    b > a.translate &&
                    b > a.maxTranslate() &&
                    (f || 0) !== l))
              )
                return !1;
              if (
                (l !== (p || 0) && i && a.emit("beforeSlideChangeStart"),
                a.updateProgress(b),
                (n = l > f ? "next" : l < f ? "prev" : "reset"),
                (h && -b === a.translate) || (!h && b === a.translate))
              )
                return (
                  a.updateActiveIndex(l),
                  d.autoHeight && a.updateAutoHeight(),
                  a.updateSlidesClasses(),
                  "slide" !== d.effect && a.setTranslate(b),
                  "reset" !== n &&
                    (a.transitionStart(i, n), a.transitionEnd(i, n)),
                  !1
                );
              if (d.cssMode) {
                let e = a.isHorizontal(),
                  i = h ? b : -b;
                if (0 === t) {
                  let t = a.virtual && a.params.virtual.enabled;
                  t &&
                    ((a.wrapperEl.style.scrollSnapType = "none"),
                    (a._immediateVirtual = !0)),
                    t &&
                    !a._cssModeVirtualInitialSet &&
                    a.params.initialSlide > 0
                      ? ((a._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          m[e ? "scrollLeft" : "scrollTop"] = i;
                        }))
                      : (m[e ? "scrollLeft" : "scrollTop"] = i),
                    t &&
                      requestAnimationFrame(() => {
                        (a.wrapperEl.style.scrollSnapType = ""),
                          (a._immediateVirtual = !1);
                      });
                } else {
                  if (!a.support.smoothScroll)
                    return (
                      (0, o.r)({
                        swiper: a,
                        targetPosition: i,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  m.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
                }
                return !0;
              }
              return (
                a.setTransition(t),
                a.setTranslate(b),
                a.updateActiveIndex(l),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, r),
                a.transitionStart(i, n),
                0 === t
                  ? a.transitionEnd(i, n)
                  : a.animating ||
                    ((a.animating = !0),
                    a.onSlideToWrapperTransitionEnd ||
                      (a.onSlideToWrapperTransitionEnd = function (e) {
                        a &&
                          !a.destroyed &&
                          e.target === this &&
                          (a.wrapperEl.removeEventListener(
                            "transitionend",
                            a.onSlideToWrapperTransitionEnd
                          ),
                          (a.onSlideToWrapperTransitionEnd = null),
                          delete a.onSlideToWrapperTransitionEnd,
                          a.transitionEnd(i, n));
                      }),
                    a.wrapperEl.addEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, i, r) {
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let s = this;
              if (s.destroyed) return;
              void 0 === t && (t = s.params.speed);
              let n = s.grid && s.params.grid && s.params.grid.rows > 1,
                a = e;
              if (s.params.loop) {
                if (s.virtual && s.params.virtual.enabled)
                  a += s.virtual.slidesBefore;
                else {
                  let e;
                  if (n) {
                    let t = a * s.params.grid.rows;
                    e = s.slides.filter(
                      (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                    )[0].column;
                  } else e = s.getSlideIndexByData(a);
                  let t = n
                      ? Math.ceil(s.slides.length / s.params.grid.rows)
                      : s.slides.length,
                    { centeredSlides: i } = s.params,
                    l = s.params.slidesPerView;
                  "auto" === l
                    ? (l = s.slidesPerViewDynamic())
                    : ((l = Math.ceil(parseFloat(s.params.slidesPerView, 10))),
                      i && l % 2 == 0 && (l += 1));
                  let o = t - e < l;
                  if (
                    (i && (o = o || e < Math.ceil(l / 2)),
                    r &&
                      i &&
                      "auto" !== s.params.slidesPerView &&
                      !n &&
                      (o = !1),
                    o)
                  ) {
                    let r = i
                      ? e < s.activeIndex
                        ? "prev"
                        : "next"
                      : e - s.activeIndex - 1 < s.params.slidesPerView
                      ? "next"
                      : "prev";
                    s.loopFix({
                      direction: r,
                      slideTo: !0,
                      activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                      slideRealIndex: "next" === r ? s.realIndex : void 0,
                    });
                  }
                  if (n) {
                    let e = a * s.params.grid.rows;
                    a = s.slides.filter(
                      (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                    )[0].column;
                  } else a = s.getSlideIndexByData(a);
                }
              }
              return (
                requestAnimationFrame(() => {
                  s.slideTo(a, t, i, r);
                }),
                s
              );
            },
            slideNext: function (e, t, i) {
              void 0 === t && (t = !0);
              let r = this,
                { enabled: s, params: n, animating: a } = r;
              if (!s || r.destroyed) return r;
              void 0 === e && (e = r.params.speed);
              let l = n.slidesPerGroup;
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
              let o = r.activeIndex < n.slidesPerGroupSkip ? 1 : l,
                d = r.virtual && n.virtual.enabled;
              if (n.loop) {
                if (a && !d && n.loopPreventsSliding) return !1;
                if (
                  (r.loopFix({ direction: "next" }),
                  (r._clientLeft = r.wrapperEl.clientLeft),
                  r.activeIndex === r.slides.length - 1 && n.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      r.slideTo(r.activeIndex + o, e, t, i);
                    }),
                    !0
                  );
              }
              return n.rewind && r.isEnd
                ? r.slideTo(0, e, t, i)
                : r.slideTo(r.activeIndex + o, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === t && (t = !0);
              let r = this,
                {
                  params: s,
                  snapGrid: n,
                  slidesGrid: a,
                  rtlTranslate: l,
                  enabled: o,
                  animating: d,
                } = r;
              if (!o || r.destroyed) return r;
              void 0 === e && (e = r.params.speed);
              let u = r.virtual && s.virtual.enabled;
              if (s.loop) {
                if (d && !u && s.loopPreventsSliding) return !1;
                r.loopFix({ direction: "prev" }),
                  (r._clientLeft = r.wrapperEl.clientLeft);
              }
              function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let p = c(l ? r.translate : -r.translate),
                f = n.map((e) => c(e)),
                h = n[f.indexOf(p) - 1];
              if (void 0 === h && s.cssMode) {
                let e;
                n.forEach((t, i) => {
                  p >= t && (e = i);
                }),
                  void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
              }
              let m = 0;
              if (
                (void 0 !== h &&
                  ((m = a.indexOf(h)) < 0 && (m = r.activeIndex - 1),
                  "auto" === s.slidesPerView &&
                    1 === s.slidesPerGroup &&
                    s.slidesPerGroupAuto &&
                    (m = Math.max(
                      (m = m - r.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                s.rewind && r.isBeginning)
              ) {
                let s =
                  r.params.virtual && r.params.virtual.enabled && r.virtual
                    ? r.virtual.slides.length - 1
                    : r.slides.length - 1;
                return r.slideTo(s, e, t, i);
              }
              return s.loop && 0 === r.activeIndex && s.cssMode
                ? (requestAnimationFrame(() => {
                    r.slideTo(m, e, t, i);
                  }),
                  !0)
                : r.slideTo(m, e, t, i);
            },
            slideReset: function (e, t, i) {
              if ((void 0 === t && (t = !0), !this.destroyed))
                return (
                  void 0 === e && (e = this.params.speed),
                  this.slideTo(this.activeIndex, e, t, i)
                );
            },
            slideToClosest: function (e, t, i, r) {
              if (
                (void 0 === t && (t = !0),
                void 0 === r && (r = 0.5),
                this.destroyed)
              )
                return;
              void 0 === e && (e = this.params.speed);
              let s = this.activeIndex,
                n = Math.min(this.params.slidesPerGroupSkip, s),
                a = n + Math.floor((s - n) / this.params.slidesPerGroup),
                l = this.rtlTranslate ? this.translate : -this.translate;
              if (l >= this.snapGrid[a]) {
                let e = this.snapGrid[a];
                l - e > (this.snapGrid[a + 1] - e) * r &&
                  (s += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[a - 1];
                l - e <= (this.snapGrid[a] - e) * r &&
                  (s -= this.params.slidesPerGroup);
              }
              return (
                (s = Math.min(
                  (s = Math.max(s, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(s, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this;
              if (t.destroyed) return;
              let { params: i, slidesEl: r } = t,
                s =
                  "auto" === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                n = t.clickedIndex,
                a = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                  t.clickedSlide.getAttribute("data-swiper-slide-index"),
                  10
                )),
                  i.centeredSlides
                    ? n < t.loopedSlides - s / 2 ||
                      n > t.slides.length - t.loopedSlides + s / 2
                      ? (t.loopFix(),
                        (n = t.getSlideIndex(
                          (0, o.e)(r, `${a}[data-swiper-slide-index="${e}"]`)[0]
                        )),
                        (0, o.n)(() => {
                          t.slideTo(n);
                        }))
                      : t.slideTo(n)
                    : n > t.slides.length - s
                    ? (t.loopFix(),
                      (n = t.getSlideIndex(
                        (0, o.e)(r, `${a}[data-swiper-slide-index="${e}"]`)[0]
                      )),
                      (0, o.n)(() => {
                        t.slideTo(n);
                      }))
                    : t.slideTo(n);
              } else t.slideTo(n);
            },
          },
          loop: {
            loopCreate: function (e) {
              let t = this,
                { params: i, slidesEl: r } = t;
              if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
              let s = t.grid && i.grid && i.grid.rows > 1,
                n = i.slidesPerGroup * (s ? i.grid.rows : 1),
                a = t.slides.length % n != 0,
                l = s && t.slides.length % i.grid.rows != 0,
                d = (e) => {
                  for (let r = 0; r < e; r += 1) {
                    let e = t.isElement
                      ? (0, o.c)("swiper-slide", [i.slideBlankClass])
                      : (0, o.c)("div", [i.slideClass, i.slideBlankClass]);
                    t.slidesEl.append(e);
                  }
                };
              a
                ? i.loopAddBlankSlides
                  ? (d(n - (t.slides.length % n)),
                    t.recalcSlides(),
                    t.updateSlides())
                  : (0, o.t)(
                      "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                    )
                : l &&
                  (i.loopAddBlankSlides
                    ? (d(i.grid.rows - (t.slides.length % i.grid.rows)),
                      t.recalcSlides(),
                      t.updateSlides())
                    : (0, o.t)(
                        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                      )),
                (0, o.e)(r, `.${i.slideClass}, swiper-slide`).forEach(
                  (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                  }
                ),
                t.loopFix({
                  slideRealIndex: e,
                  direction: i.centeredSlides ? void 0 : "next",
                });
            },
            loopFix: function (e) {
              let {
                  slideRealIndex: t,
                  slideTo: i = !0,
                  direction: r,
                  setTranslate: s,
                  activeSlideIndex: n,
                  byController: a,
                  byMousewheel: l,
                } = void 0 === e ? {} : e,
                d = this;
              if (!d.params.loop) return;
              d.emit("beforeLoopFix");
              let {
                  slides: u,
                  allowSlidePrev: c,
                  allowSlideNext: p,
                  slidesEl: f,
                  params: h,
                } = d,
                { centeredSlides: m } = h;
              if (
                ((d.allowSlidePrev = !0),
                (d.allowSlideNext = !0),
                d.virtual && h.virtual.enabled)
              ) {
                i &&
                  (h.centeredSlides || 0 !== d.snapIndex
                    ? h.centeredSlides && d.snapIndex < h.slidesPerView
                      ? d.slideTo(
                          d.virtual.slides.length + d.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : d.snapIndex === d.snapGrid.length - 1 &&
                        d.slideTo(d.virtual.slidesBefore, 0, !1, !0)
                    : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                  (d.allowSlidePrev = c),
                  (d.allowSlideNext = p),
                  d.emit("loopFix");
                return;
              }
              let g = h.slidesPerView;
              "auto" === g
                ? (g = d.slidesPerViewDynamic())
                : ((g = Math.ceil(parseFloat(h.slidesPerView, 10))),
                  m && g % 2 == 0 && (g += 1));
              let v = h.slidesPerGroupAuto ? g : h.slidesPerGroup,
                y = v;
              y % v != 0 && (y += v - (y % v)),
                (y += h.loopAdditionalSlides),
                (d.loopedSlides = y);
              let b = d.grid && h.grid && h.grid.rows > 1;
              u.length < g + y
                ? (0, o.t)(
                    "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
                  )
                : b &&
                  "row" === h.grid.fill &&
                  (0, o.t)(
                    "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
                  );
              let w = [],
                E = [],
                T = d.activeIndex;
              void 0 === n
                ? (n = d.getSlideIndex(
                    u.filter((e) => e.classList.contains(h.slideActiveClass))[0]
                  ))
                : (T = n);
              let S = "next" === r || !r,
                x = "prev" === r || !r,
                C = 0,
                _ = 0,
                M = b ? Math.ceil(u.length / h.grid.rows) : u.length,
                P =
                  (b ? u[n].column : n) +
                  (m && void 0 === s ? -g / 2 + 0.5 : 0);
              if (P < y) {
                C = Math.max(y - P, v);
                for (let e = 0; e < y - P; e += 1) {
                  let t = e - Math.floor(e / M) * M;
                  if (b) {
                    let e = M - t - 1;
                    for (let t = u.length - 1; t >= 0; t -= 1)
                      u[t].column === e && w.push(t);
                  } else w.push(M - t - 1);
                }
              } else if (P + g > M - y) {
                _ = Math.max(P - (M - 2 * y), v);
                for (let e = 0; e < _; e += 1) {
                  let t = e - Math.floor(e / M) * M;
                  b
                    ? u.forEach((e, i) => {
                        e.column === t && E.push(i);
                      })
                    : E.push(t);
                }
              }
              if (
                ((d.__preventObserver__ = !0),
                requestAnimationFrame(() => {
                  d.__preventObserver__ = !1;
                }),
                x &&
                  w.forEach((e) => {
                    (u[e].swiperLoopMoveDOM = !0),
                      f.prepend(u[e]),
                      (u[e].swiperLoopMoveDOM = !1);
                  }),
                S &&
                  E.forEach((e) => {
                    (u[e].swiperLoopMoveDOM = !0),
                      f.append(u[e]),
                      (u[e].swiperLoopMoveDOM = !1);
                  }),
                d.recalcSlides(),
                "auto" === h.slidesPerView
                  ? d.updateSlides()
                  : b &&
                    ((w.length > 0 && x) || (E.length > 0 && S)) &&
                    d.slides.forEach((e, t) => {
                      d.grid.updateSlide(t, e, d.slides);
                    }),
                h.watchSlidesProgress && d.updateSlidesOffset(),
                i)
              ) {
                if (w.length > 0 && x) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[T],
                      t = d.slidesGrid[T + C] - e;
                    l
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(T + Math.ceil(C), 0, !1, !0),
                        s &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else if (s) {
                    let e = b ? w.length / h.grid.rows : w.length;
                    d.slideTo(d.activeIndex + e, 0, !1, !0),
                      (d.touchEventsData.currentTranslate = d.translate);
                  }
                } else if (E.length > 0 && S) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[T],
                      t = d.slidesGrid[T - _] - e;
                    l
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(T - _, 0, !1, !0),
                        s &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else {
                    let e = b ? E.length / h.grid.rows : E.length;
                    d.slideTo(d.activeIndex - e, 0, !1, !0);
                  }
                }
              }
              if (
                ((d.allowSlidePrev = c),
                (d.allowSlideNext = p),
                d.controller && d.controller.control && !a)
              ) {
                let e = {
                  slideRealIndex: t,
                  direction: r,
                  setTranslate: s,
                  activeSlideIndex: n,
                  byController: !0,
                };
                Array.isArray(d.controller.control)
                  ? d.controller.control.forEach((t) => {
                      !t.destroyed &&
                        t.params.loop &&
                        t.loopFix({
                          ...e,
                          slideTo:
                            t.params.slidesPerView === h.slidesPerView && i,
                        });
                    })
                  : d.controller.control instanceof d.constructor &&
                    d.controller.control.params.loop &&
                    d.controller.control.loopFix({
                      ...e,
                      slideTo:
                        d.controller.control.params.slidesPerView ===
                          h.slidesPerView && i,
                    });
              }
              d.emit("loopFix");
            },
            loopDestroy: function () {
              let { params: e, slidesEl: t } = this;
              if (!e.loop || (this.virtual && this.params.virtual.enabled))
                return;
              this.recalcSlides();
              let i = [];
              this.slides.forEach((e) => {
                i[
                  void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex
                ] = e;
              }),
                this.slides.forEach((e) => {
                  e.removeAttribute("data-swiper-slide-index");
                }),
                i.forEach((e) => {
                  t.append(e);
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              let i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = "move"),
                (i.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              let e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              let { params: e } = this;
              (this.onTouchStart = y.bind(this)),
                (this.onTouchMove = b.bind(this)),
                (this.onTouchEnd = w.bind(this)),
                (this.onDocumentTouchStart = C.bind(this)),
                e.cssMode && (this.onScroll = S.bind(this)),
                (this.onClick = T.bind(this)),
                (this.onLoad = x.bind(this)),
                _(this, "on");
            },
            detachEvents: function () {
              _(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: i, params: r, el: s } = e,
                n = r.breakpoints;
              if (!n || (n && 0 === Object.keys(n).length)) return;
              let a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
              if (!a || e.currentBreakpoint === a) return;
              let l = (a in n ? n[a] : void 0) || e.originalParams,
                d = M(e, r),
                u = M(e, l),
                c = e.params.grabCursor,
                p = l.grabCursor,
                f = r.enabled;
              d && !u
                ? (s.classList.remove(
                    `${r.containerModifierClass}grid`,
                    `${r.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !d &&
                  u &&
                  (s.classList.add(`${r.containerModifierClass}grid`),
                  ((l.grid.fill && "column" === l.grid.fill) ||
                    (!l.grid.fill && "column" === r.grid.fill)) &&
                    s.classList.add(`${r.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                c && !p ? e.unsetGrabCursor() : !c && p && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === l[t]) return;
                  let i = r[t] && r[t].enabled,
                    s = l[t] && l[t].enabled;
                  i && !s && e[t].disable(), !i && s && e[t].enable();
                });
              let h = l.direction && l.direction !== r.direction,
                m = r.loop && (l.slidesPerView !== r.slidesPerView || h),
                g = r.loop;
              h && i && e.changeDirection(), (0, o.u)(e.params, l);
              let v = e.params.enabled,
                y = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                f && !v ? e.disable() : !f && v && e.enable(),
                (e.currentBreakpoint = a),
                e.emit("_beforeBreakpoint", l),
                i &&
                  (m
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !g && y
                    ? (e.loopCreate(t), e.updateSlides())
                    : g && !y && e.loopDestroy()),
                e.emit("breakpoint", l);
            },
            getBreakpoint: function (e, t, i) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !i))
              )
                return;
              let r = !1,
                s = (0, l.a)(),
                n = "window" === t ? s.innerHeight : i.clientHeight,
                a = Object.keys(e).map((e) =>
                  "string" == typeof e && 0 === e.indexOf("@")
                    ? { value: n * parseFloat(e.substr(1)), point: e }
                    : { value: e, point: e }
                );
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < a.length; e += 1) {
                let { point: n, value: l } = a[e];
                "window" === t
                  ? s.matchMedia(`(min-width: ${l}px)`).matches && (r = n)
                  : l <= i.clientWidth && (r = n);
              }
              return r || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: i } = t;
              if (i) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev &&
                  (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: i, el: r, device: s } = this,
                n = (function (e, t) {
                  let i = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((r) => {
                            e[r] && i.push(t + r);
                          })
                        : "string" == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: s.android },
                    { ios: s.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...n), r.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this;
              e &&
                "string" != typeof e &&
                (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        O = {};
      class k {
        constructor() {
          let e, t;
          for (var i = arguments.length, r = Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
          1 === r.length &&
          r[0].constructor &&
          "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
            ? (t = r[0])
            : ([e, t] = r),
            t || (t = {}),
            (t = (0, o.u)({}, t)),
            e && !t.el && (t.el = e);
          let a = (0, l.g)();
          if (
            t.el &&
            "string" == typeof t.el &&
            a.querySelectorAll(t.el).length > 1
          ) {
            let e = [];
            return (
              a.querySelectorAll(t.el).forEach((i) => {
                let r = (0, o.u)({}, t, { el: i });
                e.push(new k(r));
              }),
              e
            );
          }
          let c = this;
          (c.__swiper__ = !0),
            (c.support = d()),
            (c.device = u({ userAgent: t.userAgent })),
            (c.browser =
              (n ||
                (n = (function () {
                  let e = (0, l.a)(),
                    t = u(),
                    i = !1;
                  function r() {
                    let t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      0 > t.indexOf("chrome") &&
                      0 > t.indexOf("android")
                    );
                  }
                  if (r()) {
                    let t = String(e.navigator.userAgent);
                    if (t.includes("Version/")) {
                      let [e, r] = t
                        .split("Version/")[1]
                        .split(" ")[0]
                        .split(".")
                        .map((e) => Number(e));
                      i = e < 16 || (16 === e && r < 2);
                    }
                  }
                  let s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                    n = r(),
                    a = n || (s && t.ios);
                  return {
                    isSafari: i || n,
                    needPerspectiveFix: i,
                    need3dFix: a,
                    isWebView: s,
                  };
                })()),
              n)),
            (c.eventsListeners = {}),
            (c.eventsAnyListeners = []),
            (c.modules = [...c.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              c.modules.push(...t.modules);
          let p = {};
          c.modules.forEach((e) => {
            var i;
            e({
              params: t,
              swiper: c,
              extendParams:
                ((i = t),
                function (e) {
                  void 0 === e && (e = {});
                  let t = Object.keys(e)[0],
                    r = e[t];
                  if (
                    "object" != typeof r ||
                    null === r ||
                    (!0 === i[t] && (i[t] = { enabled: !0 }),
                    "navigation" === t &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].prevEl &&
                      !i[t].nextEl &&
                      (i[t].auto = !0),
                    ["pagination", "scrollbar"].indexOf(t) >= 0 &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].el &&
                      (i[t].auto = !0),
                    !(t in i && "enabled" in r))
                  ) {
                    (0, o.u)(p, e);
                    return;
                  }
                  "object" != typeof i[t] ||
                    "enabled" in i[t] ||
                    (i[t].enabled = !0),
                    i[t] || (i[t] = { enabled: !1 }),
                    (0, o.u)(p, e);
                }),
              on: c.on.bind(c),
              once: c.once.bind(c),
              off: c.off.bind(c),
              emit: c.emit.bind(c),
            });
          });
          let f = (0, o.u)({}, P, p);
          return (
            (c.params = (0, o.u)({}, f, O, t)),
            (c.originalParams = (0, o.u)({}, c.params)),
            (c.passedParams = (0, o.u)({}, t)),
            c.params &&
              c.params.on &&
              Object.keys(c.params.on).forEach((e) => {
                c.on(e, c.params.on[e]);
              }),
            c.params && c.params.onAny && c.onAny(c.params.onAny),
            Object.assign(c, {
              enabled: c.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === c.params.direction,
              isVertical: () => "vertical" === c.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return 8388608 * Math.trunc(this.translate / 8388608);
              },
              allowSlideNext: c.params.allowSlideNext,
              allowSlidePrev: c.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: c.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: c.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            c.emit("_swiper"),
            c.params.init && c.init(),
            c
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: i } = this,
            r = (0, o.e)(t, `.${i.slideClass}, swiper-slide`),
            s = (0, o.h)(r[0]);
          return (0, o.h)(e) - s;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0]
          );
        }
        recalcSlides() {
          let { slidesEl: e, params: t } = this;
          this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let i = this.minTranslate(),
            r = (this.maxTranslate() - i) * e + i;
          this.translateTo(r, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.forEach((i) => {
            let r = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          let {
              params: i,
              slides: r,
              slidesGrid: s,
              slidesSizesGrid: n,
              size: a,
              activeIndex: l,
            } = this,
            o = 1;
          if ("number" == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let e,
              t = r[l] ? Math.ceil(r[l].swiperSlideSize) : 0;
            for (let i = l + 1; i < r.length; i += 1)
              r[i] &&
                !e &&
                ((t += Math.ceil(r[i].swiperSlideSize)),
                (o += 1),
                t > a && (e = !0));
            for (let i = l - 1; i >= 0; i -= 1)
              r[i] &&
                !e &&
                ((t += r[i].swiperSlideSize), (o += 1), t > a && (e = !0));
          } else if ("current" === e)
            for (let e = l + 1; e < r.length; e += 1)
              (t ? s[e] + n[e] - s[l] < a : s[e] - s[l] < a) && (o += 1);
          else for (let e = l - 1; e >= 0; e -= 1) s[l] - s[e] < a && (o += 1);
          return o;
        }
        update() {
          let e;
          let t = this;
          if (!t || t.destroyed) return;
          let { snapGrid: i, params: r } = t;
          function s() {
            let e = Math.min(
              Math.max(
                t.rtlTranslate ? -1 * t.translate : t.translate,
                t.maxTranslate()
              ),
              t.minTranslate()
            );
            t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          if (
            (r.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && f(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            r.freeMode && r.freeMode.enabled && !r.cssMode)
          )
            s(), r.autoHeight && t.updateAutoHeight();
          else {
            if (
              ("auto" === r.slidesPerView || r.slidesPerView > 1) &&
              t.isEnd &&
              !r.centeredSlides
            ) {
              let i =
                t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
              e = t.slideTo(i.length - 1, 0, !1, !0);
            } else e = t.slideTo(t.activeIndex, 0, !1, !0);
            e || s();
          }
          r.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
            t.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          let i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.el.classList.remove(
                `${this.params.containerModifierClass}${i}`
              ),
              this.el.classList.add(
                `${this.params.containerModifierClass}${e}`
              ),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || "rtl" !== e) &&
            (this.rtl || "ltr" !== e) &&
            ((this.rtl = "rtl" === e),
            (this.rtlTranslate =
              "horizontal" === this.params.direction && this.rtl),
            this.rtl
              ? (this.el.classList.add(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "rtl"))
              : (this.el.classList.remove(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "ltr")),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if (("string" == typeof i && (i = document.querySelector(i)), !i))
            return !1;
          (i.swiper = t),
            i.parentNode &&
              i.parentNode.host &&
              i.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          let r = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
            s =
              i && i.shadowRoot && i.shadowRoot.querySelector
                ? i.shadowRoot.querySelector(r())
                : (0, o.e)(i, r())[0];
          return (
            !s &&
              t.params.createElements &&
              ((s = (0, o.c)("div", t.params.wrapperClass)),
              i.append(s),
              (0, o.e)(i, `.${t.params.slideClass}`).forEach((e) => {
                s.append(e);
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: s,
              slidesEl:
                t.isElement && !i.parentNode.host.slideSlots
                  ? i.parentNode.host
                  : s,
              hostEl: t.isElement ? i.parentNode.host : i,
              mounted: !0,
              rtl:
                "rtl" === i.dir.toLowerCase() ||
                "rtl" === (0, o.o)(i, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === i.dir.toLowerCase() ||
                  "rtl" === (0, o.o)(i, "direction")),
              wrongRTL: "-webkit-box" === (0, o.o)(s, "display"),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized || !1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          let i = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((e) => {
              e.complete
                ? f(t, e)
                : e.addEventListener("load", (e) => {
                    f(t, e.target);
                  });
            }),
            m(t),
            (t.initialized = !0),
            m(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          let i = this,
            { params: r, el: s, wrapperEl: n, slides: a } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              r.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                s && "string" != typeof s && s.removeAttribute("style"),
                n && n.removeAttribute("style"),
                a &&
                  a.length &&
                  a.forEach((e) => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideFullyVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                (i.el && "string" != typeof i.el && (i.el.swiper = null),
                (0, o.v)(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          (0, o.u)(O, e);
        }
        static get extendedDefaults() {
          return O;
        }
        static get defaults() {
          return P;
        }
        static installModule(e) {
          k.prototype.__modules__ || (k.prototype.__modules__ = []);
          let t = k.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => k.installModule(e))
              : k.installModule(e),
            k
          );
        }
      }
      Object.keys(L).forEach((e) => {
        Object.keys(L[e]).forEach((t) => {
          k.prototype[t] = L[e][t];
        });
      }),
        k.use([
          function (e) {
            let { swiper: t, on: i, emit: r } = e,
              s = (0, l.a)(),
              n = null,
              a = null,
              o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              d = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (n = new ResizeObserver((e) => {
                    a = s.requestAnimationFrame(() => {
                      let { width: i, height: r } = t,
                        s = i,
                        n = r;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: i,
                          contentRect: r,
                          target: a,
                        } = e;
                        (a && a !== t.el) ||
                          ((s = r ? r.width : (i[0] || i).inlineSize),
                          (n = r ? r.height : (i[0] || i).blockSize));
                      }),
                        (s !== i || n !== r) && o();
                    });
                  })).observe(t.el);
              },
              u = () => {
                a && s.cancelAnimationFrame(a),
                  n && n.unobserve && t.el && (n.unobserve(t.el), (n = null));
              },
              c = () => {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            i("init", () => {
              if (t.params.resizeObserver && void 0 !== s.ResizeObserver) {
                d();
                return;
              }
              s.addEventListener("resize", o),
                s.addEventListener("orientationchange", c);
            }),
              i("destroy", () => {
                u(),
                  s.removeEventListener("resize", o),
                  s.removeEventListener("orientationchange", c);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: r, emit: s } = e,
              n = [],
              a = (0, l.a)(),
              d = function (e, i) {
                void 0 === i && (i = {});
                let r = new (a.MutationObserver || a.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) {
                      s("observerUpdate", e[0]);
                      return;
                    }
                    let i = function () {
                      s("observerUpdate", e[0]);
                    };
                    a.requestAnimationFrame
                      ? a.requestAnimationFrame(i)
                      : a.setTimeout(i, 0);
                  }
                );
                r.observe(e, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList: void 0 === i.childList || i.childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  n.push(r);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    let e = (0, o.a)(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) d(e[t]);
                  }
                  d(t.hostEl, { childList: t.params.observeSlideChildren }),
                    d(t.wrapperEl, { attributes: !1 });
                }
              }),
              r("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      let I = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function A(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function z(e, t) {
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : A(t[i]) && A(e[i]) && Object.keys(t[i]).length > 0
              ? t[i].__swiper__
                ? (e[i] = t[i])
                : z(e[i], t[i])
              : (e[i] = t[i]);
          });
      }
      function N(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            void 0 === e.navigation.nextEl &&
            void 0 === e.navigation.prevEl
        );
      }
      function j(e) {
        return (
          void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
        );
      }
      function D(e) {
        return (
          void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
        );
      }
      function $(e) {
        void 0 === e && (e = "");
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          i = [];
        return (
          t.forEach((e) => {
            0 > i.indexOf(e) && i.push(e);
          }),
          i.join(" ")
        );
      }
      let R = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      };
      function B() {
        return (B = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function G(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function F(e, t) {
        return "undefined" == typeof window
          ? (0, a.useEffect)(e, t)
          : (0, a.useLayoutEffect)(e, t);
      }
      let V = (0, a.createContext)(null),
        H = (0, a.createContext)(null),
        q = (0, a.forwardRef)(function (e, t) {
          var i;
          let {
              className: r,
              tag: s = "div",
              wrapperTag: n = "div",
              children: l,
              onSwiper: o,
              ...d
            } = void 0 === e ? {} : e,
            u = !1,
            [c, p] = (0, a.useState)("swiper"),
            [f, h] = (0, a.useState)(null),
            [m, g] = (0, a.useState)(!1),
            v = (0, a.useRef)(!1),
            y = (0, a.useRef)(null),
            b = (0, a.useRef)(null),
            w = (0, a.useRef)(null),
            E = (0, a.useRef)(null),
            T = (0, a.useRef)(null),
            S = (0, a.useRef)(null),
            x = (0, a.useRef)(null),
            C = (0, a.useRef)(null),
            {
              params: _,
              passedParams: M,
              rest: L,
              events: O,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              let i = { on: {} },
                r = {},
                s = {};
              z(i, P), (i._emitClasses = !0), (i.init = !1);
              let n = {},
                a = I.map((e) => e.replace(/_/, ""));
              return (
                Object.keys(Object.assign({}, e)).forEach((l) => {
                  void 0 !== e[l] &&
                    (a.indexOf(l) >= 0
                      ? A(e[l])
                        ? ((i[l] = {}),
                          (s[l] = {}),
                          z(i[l], e[l]),
                          z(s[l], e[l]))
                        : ((i[l] = e[l]), (s[l] = e[l]))
                      : 0 === l.search(/on[A-Z]/) && "function" == typeof e[l]
                      ? t
                        ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                        : (i.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                      : (n[l] = e[l]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e];
                }),
                { params: i, passedParams: s, rest: n, events: r }
              );
            })(d),
            { slides: V, slots: q } = (function (e) {
              let t = [],
                i = {
                  "container-start": [],
                  "container-end": [],
                  "wrapper-start": [],
                  "wrapper-end": [],
                };
              return (
                a.Children.toArray(e).forEach((e) => {
                  if (G(e)) t.push(e);
                  else if (e.props && e.props.slot && i[e.props.slot])
                    i[e.props.slot].push(e);
                  else if (e.props && e.props.children) {
                    let r = (function e(t) {
                      let i = [];
                      return (
                        a.Children.toArray(t).forEach((t) => {
                          G(t)
                            ? i.push(t)
                            : t.props &&
                              t.props.children &&
                              e(t.props.children).forEach((e) => i.push(e));
                        }),
                        i
                      );
                    })(e.props.children);
                    r.length > 0
                      ? r.forEach((e) => t.push(e))
                      : i["container-end"].push(e);
                  } else i["container-end"].push(e);
                }),
                { slides: t, slots: i }
              );
            })(l),
            W = () => {
              g(!m);
            };
          Object.assign(_.on, {
            _containerClasses(e, t) {
              p(t);
            },
          });
          let Y = () => {
            Object.assign(_.on, O), (u = !0);
            let e = { ..._ };
            if (
              (delete e.wrapperClass,
              (b.current = new k(e)),
              b.current.virtual && b.current.params.virtual.enabled)
            ) {
              b.current.virtual.slides = V;
              let e = {
                cache: !1,
                slides: V,
                renderExternal: h,
                renderExternalUpdate: !1,
              };
              z(b.current.params.virtual, e),
                z(b.current.originalParams.virtual, e);
            }
          };
          y.current || Y(), b.current && b.current.on("_beforeBreakpoint", W);
          let X = () => {
              !u &&
                O &&
                b.current &&
                Object.keys(O).forEach((e) => {
                  b.current.on(e, O[e]);
                });
            },
            U = () => {
              O &&
                b.current &&
                Object.keys(O).forEach((e) => {
                  b.current.off(e, O[e]);
                });
            };
          return (
            (0, a.useEffect)(() => () => {
              b.current && b.current.off("_beforeBreakpoint", W);
            }),
            (0, a.useEffect)(() => {
              !v.current &&
                b.current &&
                (b.current.emitSlidesClasses(), (v.current = !0));
            }),
            F(() => {
              if ((t && (t.current = y.current), y.current))
                return (
                  b.current.destroyed && Y(),
                  (function (e, t) {
                    let {
                      el: i,
                      nextEl: r,
                      prevEl: s,
                      paginationEl: n,
                      scrollbarEl: a,
                      swiper: l,
                    } = e;
                    N(t) &&
                      r &&
                      s &&
                      ((l.params.navigation.nextEl = r),
                      (l.originalParams.navigation.nextEl = r),
                      (l.params.navigation.prevEl = s),
                      (l.originalParams.navigation.prevEl = s)),
                      j(t) &&
                        n &&
                        ((l.params.pagination.el = n),
                        (l.originalParams.pagination.el = n)),
                      D(t) &&
                        a &&
                        ((l.params.scrollbar.el = a),
                        (l.originalParams.scrollbar.el = a)),
                      l.init(i);
                  })(
                    {
                      el: y.current,
                      nextEl: T.current,
                      prevEl: S.current,
                      paginationEl: x.current,
                      scrollbarEl: C.current,
                      swiper: b.current,
                    },
                    _
                  ),
                  o && !b.current.destroyed && o(b.current),
                  () => {
                    b.current &&
                      !b.current.destroyed &&
                      b.current.destroy(!0, !1);
                  }
                );
            }, []),
            F(() => {
              X();
              let e = (function (e, t, i, r, s) {
                let n = [];
                if (!t) return n;
                let a = (e) => {
                  0 > n.indexOf(e) && n.push(e);
                };
                if (i && r) {
                  let e = r.map(s),
                    t = i.map(s);
                  e.join("") !== t.join("") && a("children"),
                    r.length !== i.length && a("children");
                }
                return (
                  I.filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((i) => {
                      if (i in e && i in t) {
                        if (A(e[i]) && A(t[i])) {
                          let r = Object.keys(e[i]),
                            s = Object.keys(t[i]);
                          r.length !== s.length
                            ? a(i)
                            : (r.forEach((r) => {
                                e[i][r] !== t[i][r] && a(i);
                              }),
                              s.forEach((r) => {
                                e[i][r] !== t[i][r] && a(i);
                              }));
                        } else e[i] !== t[i] && a(i);
                      }
                    }),
                  n
                );
              })(M, w.current, V, E.current, (e) => e.key);
              return (
                (w.current = M),
                (E.current = V),
                e.length &&
                  b.current &&
                  !b.current.destroyed &&
                  (function (e) {
                    let t,
                      i,
                      r,
                      s,
                      n,
                      a,
                      l,
                      o,
                      {
                        swiper: d,
                        slides: u,
                        passedParams: c,
                        changedParams: p,
                        nextEl: f,
                        prevEl: h,
                        scrollbarEl: m,
                        paginationEl: g,
                      } = e,
                      v = p.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: y,
                        pagination: b,
                        navigation: w,
                        scrollbar: E,
                        virtual: T,
                        thumbs: S,
                      } = d;
                    p.includes("thumbs") &&
                      c.thumbs &&
                      c.thumbs.swiper &&
                      y.thumbs &&
                      !y.thumbs.swiper &&
                      (t = !0),
                      p.includes("controller") &&
                        c.controller &&
                        c.controller.control &&
                        y.controller &&
                        !y.controller.control &&
                        (i = !0),
                      p.includes("pagination") &&
                        c.pagination &&
                        (c.pagination.el || g) &&
                        (y.pagination || !1 === y.pagination) &&
                        b &&
                        !b.el &&
                        (r = !0),
                      p.includes("scrollbar") &&
                        c.scrollbar &&
                        (c.scrollbar.el || m) &&
                        (y.scrollbar || !1 === y.scrollbar) &&
                        E &&
                        !E.el &&
                        (s = !0),
                      p.includes("navigation") &&
                        c.navigation &&
                        (c.navigation.prevEl || h) &&
                        (c.navigation.nextEl || f) &&
                        (y.navigation || !1 === y.navigation) &&
                        w &&
                        !w.prevEl &&
                        !w.nextEl &&
                        (n = !0);
                    let x = (e) => {
                      d[e] &&
                        (d[e].destroy(),
                        "navigation" === e
                          ? (d.isElement &&
                              (d[e].prevEl.remove(), d[e].nextEl.remove()),
                            (y[e].prevEl = void 0),
                            (y[e].nextEl = void 0),
                            (d[e].prevEl = void 0),
                            (d[e].nextEl = void 0))
                          : (d.isElement && d[e].el.remove(),
                            (y[e].el = void 0),
                            (d[e].el = void 0)));
                    };
                    p.includes("loop") &&
                      d.isElement &&
                      (y.loop && !c.loop
                        ? (a = !0)
                        : !y.loop && c.loop
                        ? (l = !0)
                        : (o = !0)),
                      v.forEach((e) => {
                        if (A(y[e]) && A(c[e]))
                          Object.assign(y[e], c[e]),
                            ("navigation" === e ||
                              "pagination" === e ||
                              "scrollbar" === e) &&
                              "enabled" in c[e] &&
                              !c[e].enabled &&
                              x(e);
                        else {
                          let t = c[e];
                          (!0 === t || !1 === t) &&
                          ("navigation" === e ||
                            "pagination" === e ||
                            "scrollbar" === e)
                            ? !1 === t && x(e)
                            : (y[e] = c[e]);
                        }
                      }),
                      v.includes("controller") &&
                        !i &&
                        d.controller &&
                        d.controller.control &&
                        y.controller &&
                        y.controller.control &&
                        (d.controller.control = y.controller.control),
                      p.includes("children") && u && T && y.virtual.enabled
                        ? ((T.slides = u), T.update(!0))
                        : p.includes("virtual") &&
                          T &&
                          y.virtual.enabled &&
                          (u && (T.slides = u), T.update(!0)),
                      p.includes("children") && u && y.loop && (o = !0),
                      t && S.init() && S.update(!0),
                      i && (d.controller.control = y.controller.control),
                      r &&
                        (d.isElement &&
                          (!g || "string" == typeof g) &&
                          ((g = document.createElement("div")).classList.add(
                            "swiper-pagination"
                          ),
                          g.part.add("pagination"),
                          d.el.appendChild(g)),
                        g && (y.pagination.el = g),
                        b.init(),
                        b.render(),
                        b.update()),
                      s &&
                        (d.isElement &&
                          (!m || "string" == typeof m) &&
                          ((m = document.createElement("div")).classList.add(
                            "swiper-scrollbar"
                          ),
                          m.part.add("scrollbar"),
                          d.el.appendChild(m)),
                        m && (y.scrollbar.el = m),
                        E.init(),
                        E.updateSize(),
                        E.setTranslate()),
                      n &&
                        (d.isElement &&
                          ((f && "string" != typeof f) ||
                            ((f = document.createElement("div")).classList.add(
                              "swiper-button-next"
                            ),
                            (f.innerHTML = d.hostEl.constructor.nextButtonSvg),
                            f.part.add("button-next"),
                            d.el.appendChild(f)),
                          (h && "string" != typeof h) ||
                            ((h = document.createElement("div")).classList.add(
                              "swiper-button-prev"
                            ),
                            (h.innerHTML = d.hostEl.constructor.prevButtonSvg),
                            h.part.add("button-prev"),
                            d.el.appendChild(h))),
                        f && (y.navigation.nextEl = f),
                        h && (y.navigation.prevEl = h),
                        w.init(),
                        w.update()),
                      p.includes("allowSlideNext") &&
                        (d.allowSlideNext = c.allowSlideNext),
                      p.includes("allowSlidePrev") &&
                        (d.allowSlidePrev = c.allowSlidePrev),
                      p.includes("direction") &&
                        d.changeDirection(c.direction, !1),
                      (a || o) && d.loopDestroy(),
                      (l || o) && d.loopCreate(),
                      d.update();
                  })({
                    swiper: b.current,
                    slides: V,
                    passedParams: M,
                    changedParams: e,
                    nextEl: T.current,
                    prevEl: S.current,
                    scrollbarEl: C.current,
                    paginationEl: x.current,
                  }),
                () => {
                  U();
                }
              );
            }),
            F(() => {
              R(b.current);
            }, [f]),
            a.createElement(
              s,
              B({ ref: y, className: $(`${c}${r ? ` ${r}` : ""}`) }, L),
              a.createElement(
                H.Provider,
                { value: b.current },
                q["container-start"],
                a.createElement(
                  n,
                  {
                    className: (void 0 === (i = _.wrapperClass) && (i = ""), i)
                      ? i.includes("swiper-wrapper")
                        ? i
                        : `swiper-wrapper ${i}`
                      : "swiper-wrapper",
                  },
                  q["wrapper-start"],
                  _.virtual
                    ? (function (e, t, i) {
                        if (!i) return null;
                        let r = (e) => {
                            let i = e;
                            return (
                              e < 0
                                ? (i = t.length + e)
                                : i >= t.length && (i -= t.length),
                              i
                            );
                          },
                          s = e.isHorizontal()
                            ? {
                                [e.rtlTranslate
                                  ? "right"
                                  : "left"]: `${i.offset}px`,
                              }
                            : { top: `${i.offset}px` },
                          { from: n, to: l } = i,
                          o = e.params.loop ? -t.length : 0,
                          d = e.params.loop ? 2 * t.length : t.length,
                          u = [];
                        for (let e = o; e < d; e += 1)
                          e >= n && e <= l && u.push(t[r(e)]);
                        return u.map((t, i) =>
                          a.cloneElement(t, {
                            swiper: e,
                            style: s,
                            key: t.props.virtualIndex || t.key || `slide-${i}`,
                          })
                        );
                      })(b.current, V, f)
                    : V.map((e, t) =>
                        a.cloneElement(e, {
                          swiper: b.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  q["wrapper-end"]
                ),
                N(_) &&
                  a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("div", {
                      ref: S,
                      className: "swiper-button-prev",
                    }),
                    a.createElement("div", {
                      ref: T,
                      className: "swiper-button-next",
                    })
                  ),
                D(_) &&
                  a.createElement("div", {
                    ref: C,
                    className: "swiper-scrollbar",
                  }),
                j(_) &&
                  a.createElement("div", {
                    ref: x,
                    className: "swiper-pagination",
                  }),
                q["container-end"]
              )
            )
          );
        });
      q.displayName = "Swiper";
      let W = (0, a.forwardRef)(function (e, t) {
        let {
            tag: i = "div",
            children: r,
            className: s = "",
            swiper: n,
            zoom: l,
            lazy: o,
            virtualIndex: d,
            swiperSlideIndex: u,
            ...c
          } = void 0 === e ? {} : e,
          p = (0, a.useRef)(null),
          [f, h] = (0, a.useState)("swiper-slide"),
          [m, g] = (0, a.useState)(!1);
        function v(e, t, i) {
          t === p.current && h(i);
        }
        F(() => {
          if (
            (void 0 !== u && (p.current.swiperSlideIndex = u),
            t && (t.current = p.current),
            p.current && n)
          ) {
            if (n.destroyed) {
              "swiper-slide" !== f && h("swiper-slide");
              return;
            }
            return (
              n.on("_slideClass", v),
              () => {
                n && n.off("_slideClass", v);
              }
            );
          }
        }),
          F(() => {
            n && p.current && !n.destroyed && h(n.getSlideClasses(p.current));
          }, [n]);
        let y = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0,
          },
          b = () => ("function" == typeof r ? r(y) : r);
        return a.createElement(
          i,
          B(
            {
              ref: p,
              className: $(`${f}${s ? ` ${s}` : ""}`),
              "data-swiper-slide-index": d,
              onLoad: () => {
                g(!0);
              },
            },
            c
          ),
          l &&
            a.createElement(
              V.Provider,
              { value: y },
              a.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" == typeof l ? l : void 0,
                },
                b(),
                o &&
                  !m &&
                  a.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !l &&
            a.createElement(
              V.Provider,
              { value: y },
              b(),
              o &&
                !m &&
                a.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      W.displayName = "SwiperSlide";
    },
  },
]);
