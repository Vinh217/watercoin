(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8329: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(1704);
        },
      ]);
    },
    3801: function (e, t, i) {
      "use strict";
      let s = (0, i(350).zo)("div", {});
      t.Z = s;
    },
    2550: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return y;
        },
      });
      var s = i(350),
        r = i(2676);
      let n = (0, s.F4)({
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }),
        a = (0, s.zo)("div", {
          display: "flex",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 10,
          variants: {
            isStatic: {
              true: {
                pos: "static",
                t: "initial",
                l: "initial",
                transform: "none",
              },
            },
          },
        }),
        o = (0, s.zo)("div", {
          width: 48,
          height: 48,
          border: "5px solid",
          borderColor: "$main",
          borderBottomColor: "transparent",
          br: "50%",
          d: "inline-block",
          "box-sizing": "border-box",
          animation: "".concat(n, " 1s linear infinite"),
          "@sm": { w: 30, h: 30, borderWidth: 3 },
          variants: {
            border: {
              red: { borderColor: "$red", borderBottomColor: "transparent" },
              white: {
                borderColor: "$white",
                borderBottomColor: "transparent",
              },
            },
          },
        });
      var l = (e) => {
          let {
            cssWrapperOuter: t,
            cssWrapperInner: i,
            variant: s,
            isStatic: n,
          } = e;
          return (0, r.jsx)(a, {
            css: t,
            isStatic: n,
            children: (0, r.jsx)(o, { border: s, css: i }),
          });
        },
        c = i(9050),
        x = i.n(c);
      let d = {
        disabled: {
          true: {
            pointerEvents: "none",
            bg: "#E8E8E8",
            color: "#939393",
            "&::before": {
              content: "",
              w: "100%",
              h: "100%",
              pos: "absolute",
              t: 0,
              l: 0,
              r: 0,
              b: 0,
              borderRadius: "$buttonMain",
            },
          },
        },
        loading: {
          true: {
            pointerEvents: "none",
            "&::before": {
              content: "",
              w: "100%",
              h: "100%",
              pos: "absolute",
              t: 0,
              l: 0,
              r: 0,
              b: 0,
              bg: "rgba(0,0,0,0.5)",
              borderRadius: "$buttonMain",
            },
          },
        },
      };
      (0, s.zo)("div", { position: "relative", w: "fit-content", variants: d }),
        (0, s.zo)("div", { w: 16, h: 16, pos: "relative", d: "flex" });
      let p = (0, s.zo)("div", {
          w: 0,
          h: "1.5px",
          pos: "absolute",
          r: 3,
          top: "50%",
          transform: "translateY(-50%)",
          br: 2,
          bg: "$white",
          transitionDuration: "0.25s",
          variants: {
            background: { purple: { bg: "#5856D6" }, white: { bg: "$white" } },
          },
        }),
        m = (0, s.zo)("div", {
          w: 7,
          h: 10,
          d: "flex",
          pos: "absolute",
          top: "50%",
          r: 0,
          transform: "translateY(-50%)",
          transitionDuration: "0.25s",
        }),
        h = (0, s.zo)("button", {
          position: "relative",
          m: 0,
          variants: d,
          "&:hover": {
            ["& ".concat(p)]: { w: 9, r: 0 },
            ["& ".concat(m)]: { r: -3 },
          },
        }),
        g = (0, s.zo)(x(), {
          position: "relative",
          variants: d,
          "&:hover": {
            ["& ".concat(p)]: { w: 9, r: 0 },
            ["& ".concat(m)]: { r: -3 },
          },
        });
      var f = i(9807),
        u = i(193),
        b = i(7953),
        w = i(5271),
        j = i(3801),
        y = (0, s.zo)(
          (e) => {
            let {
                text: t,
                isExternal: i,
                href: s,
                children: n,
                loaderVariant: a = "white",
                disabled: o,
                locale: c,
                align: x,
                hostname: d,
                passLang: p = !0,
                customParams: m,
                background: y,
                loading: v,
                noParams: k,
                arrowColor: Z = "white",
                withBorder: z,
                withBorderWrapperCss: S,
                hash: W,
                ...$
              } = e,
              E = (0, f.useRouter)(),
              [T, F] = (0, w.useState)(s),
              C = { ...(0, b.vl)(E.asPath), ...m };
            return ((0, w.useEffect)(() => {
              E &&
                s &&
                C &&
                F(
                  i
                    ? s
                    : {
                        ...(W && { hash: W }),
                        pathname:
                          p && "en" !== E.locale
                            ? (null == E ? void 0 : E.locale) + s
                            : s,
                        ...(!k && { query: C }),
                        protocol: "localhost" === u.MX ? "http" : "https",
                        hostname: d || u.MX,
                        port: d ? void 0 : "localhost" === u.MX ? u.px : void 0,
                      }
                );
            }, [E, s]),
            s)
              ? (0, r.jsx)(g, {
                  ...$,
                  locale: !1,
                  href: T,
                  rel:
                    (null == $ ? void 0 : $.target) === "_blank"
                      ? "noopener noreferrer"
                      : void 0,
                  children: t ? (0, r.jsx)(r.Fragment, { children: t }) : n,
                })
              : z
              ? (0, r.jsx)(j.Z, {
                  css: {
                    w: "fit-content",
                    p: 12,
                    border: "1.31px dashed #8EB8BF",
                    br: "20.961px 26.202px 26.202px 20.961px",
                    pos: "relative",
                    zi: 2,
                    ...S,
                  },
                  children: (0, r.jsxs)(h, {
                    ...$,
                    disabled: o,
                    loading: v,
                    children: [
                      v &&
                        (0, r.jsx)(l, {
                          variant: a,
                          cssWrapperInner: { w: 30, h: 30, borderWidth: 3 },
                        }),
                      t ? (0, r.jsx)(r.Fragment, { children: t }) : n,
                    ],
                  }),
                })
              : (0, r.jsxs)(h, {
                  ...$,
                  disabled: o,
                  loading: v,
                  children: [
                    v &&
                      (0, r.jsx)(l, {
                        variant: a,
                        cssWrapperInner: { w: 30, h: 30, borderWidth: 3 },
                      }),
                    t ? (0, r.jsx)(r.Fragment, { children: t }) : n,
                  ],
                });
          },
          {
            minW: 188,
            h: 44,
            w: "fit-content",
            d: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "content-box",
            bg: "$main",
            color: "$white",
            appearance: "none",
            outline: "none",
            borderRadius: "$main",
            cursor: "pointer",
            fz: "$buttonDef",
            fw: 700,
            ff: "var(--font-primary)",
            textAlign: "center",
            textDecoration: "none",
            fontStyle: "normal",
            fill: "currentColor",
            transitionDuration: "0.24s",
            letterSpacing: "0.04em",
            "&:hover": { textDecoration: "none", transform: "scale(0.97)" },
            variants: {
              background: {
                violet: {
                  bg: "#8A7FCC",
                  boxShadow: "0px -5px 0px 0px #000 inset",
                  border: "3px solid #000",
                },
                yellow: {
                  bg: "linear-gradient(180deg, #FFED97 0%, #FFC32C 100%)",
                  boxShadow: "0px -5px 0px 0px #000 inset",
                  border: "3px solid #000",
                },
                blue: {
                  bg: "#4672EB",
                  boxShadow: "0px -5px 0px 0px #000 inset",
                  border: "3px solid #000",
                },
              },
              color: {
                blue: { color: "$blue" },
                grey: { color: "$textDef" },
                red: { color: "$red" },
              },
              active: { true: {} },
              centered: { true: { margin: "0 auto" } },
              fontWeight: {
                400: { fontWeight: 400 },
                500: { fontWeight: 500 },
                600: { fontWeight: 600 },
                700: { fontWeight: 700 },
              },
              fontFamily: { inter: { fontFamily: "$rubik" } },
              size: {
                sm: { p: "11px 10px", minW: 82 },
                def: { minW: 152, fz: "$buttonDef" },
                md: { p: "15px 10px", minW: 200, fz: "$buttonDef" },
                lg: { p: "15px 10px", minW: 384 },
                w100: { w: "100%", maxW: "100%", pos: "relative" },
              },
              w100Mob: {
                true: { "@md": { minW: "100%", maxW: "100%", w: "100%" } },
              },
              mt: {
                1: { marginTop: "8px" },
                2: { marginTop: "16px" },
                3: { marginTop: "24px" },
                4: { marginTop: "32px" },
                5: { marginTop: "40px" },
                6: { marginTop: "48px" },
              },
              mb: {
                1: { marginBottom: "8px" },
                2: { marginBottom: "16px" },
                3: { marginBottom: "24px" },
                4: { marginBottom: "32px" },
                5: { marginBottom: "40px" },
                6: { marginBottom: "48px" },
                7: { marginBottom: "56px" },
                8: { marginBottom: "64px" },
              },
            },
            compoundVariants: [
              {
                background: "darkRedTransparent",
                active: !0,
                css: { bg: "#260704" },
              },
              {
                background: "darkBlueTransparent",
                active: !0,
                css: { bg: "#0A1117" },
              },
            ],
          }
        );
    },
    1422: function (e, t, i) {
      "use strict";
      i.d(t, {
        ZP: function () {
          return s;
        },
      });
      var s = (0, i(350).zo)("div", {
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        variants: {
          withFlex: { true: { flex: 1 } },
          withMt: { true: { mt: 40, "@minTablet": { mt: 80 } } },
          withMb: { true: { mb: 40, "@minTablet": { mb: 80 } } },
          moreWidth: {
            true: { maxWidth: "1674px", paddingLeft: 14, paddingRight: 14 },
            false: { maxWidth: 1642, paddingLeft: 14, paddingRight: 14 },
            undefined: { maxWidth: 1642, paddingLeft: 14, paddingRight: 14 },
          },
          noPaddingOnMob: { true: { "@md": { p: 0 } } },
        },
        compoundVariants: [
          {
            noPaddingOnMob: !0,
            moreWidth: void 0,
            css: { paddingLeft: 14, paddingRight: 14, "@md": { p: 0 } },
          },
          {
            noPaddingOnMob: !0,
            moreWidth: !0,
            css: { paddingLeft: 14, paddingRight: 14, "@md": { p: 0 } },
          },
        ],
      });
    },
    8412: function (e, t, i) {
      "use strict";
      i.d(t, {
        fL: function () {
          return x;
        },
        Jv: function () {
          return d;
        },
      });
      var s = i(2676),
        r = i(5271),
        n = i(7953),
        a = i(350),
        o = i(7359);
      let l = (0, r.createContext)(void 0),
        c = a.BC.lg,
        x = (e) => {
          let { children: t } = e,
            [i, n] = (0, r.useState)(!1),
            a = (0, r.useCallback)(() => n(!0), []),
            x = (0, r.useCallback)(() => n(!1), []),
            d = (0, r.useCallback)(() => n((e) => !e), []),
            p = (0, o.Z)(c);
          return (0, s.jsx)(l.Provider, {
            value: {
              isOpen: i,
              openBar: a,
              closeBar: x,
              toggleBar: d,
              isCollapsed: p,
            },
            children: t,
          });
        },
        d = () => (0, n.EF)(l);
    },
    3676: function (e, t, i) {
      "use strict";
      i.d(t, {
        SF: function () {
          return n;
        },
        im: function () {
          return a;
        },
      });
      var s = i(350),
        r = i(5440);
      let n = 150,
        a = (0, s.zo)("div", {
          width: "100%",
          position: "fixed",
          top: 45,
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: n,
        }),
        o = (0, s.zo)(r.Z, { color: "$titlePrimary", fz: "$lg", fw: 400 });
      (0, s.zo)("div", {
        pos: "relative",
        d: "flex",
        jc: "space-between",
        ai: "center",
        variants: {
          whiteLinks: { true: { ["& ".concat(o)]: { color: "$white" } } },
        },
      }),
        (0, s.zo)("div", {
          d: "flex",
          ai: "center",
          "@lg": { mb: 15, fd: "column", ai: "flex-start" },
        }),
        (0, s.zo)("div", { ml: 10, "@lg": { mr: 10 } });
    },
    2761: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = i(2676),
        r = i(350),
        n = i(9586),
        a = i.n(n);
      let o = (0, r.zo)(a(), {
        variants: { responsive: { true: { w: "100%", h: "auto" } } },
      });
      var l = i(3801),
        c = function (e) {
          let {
              src: t,
              responsive: i = !0,
              css: r,
              sizes: n,
              alt: a,
              ...c
            } = e,
            x = !c.fill && i,
            d = i ? n || "100vw" : void 0;
          return i
            ? (0, s.jsx)(l.Z, {
                css: { maxW: c.width, w: "100%", d: "flex", ...r },
                children: (0, s.jsx)(o, {
                  quality: 100,
                  ...c,
                  src: t,
                  sizes: d,
                  responsive: x,
                  alt: a || "image",
                }),
              })
            : (0, s.jsx)(o, {
                quality: 100,
                ...c,
                src: t,
                sizes: d,
                responsive: x,
                alt: a || "image",
                css: r,
              });
        };
    },
    5440: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return h;
        },
      });
      var s = i(2676),
        r = i(6943),
        n = (e) => {
          let { text: t, children: i, leftIcon: r, rightIcon: n } = e;
          return t
            ? (0, s.jsxs)(s.Fragment, { children: [r && r, t, n && n] })
            : (0, s.jsxs)(s.Fragment, { children: [r, i, n] });
        },
        a = i(350),
        o = i(9050),
        l = i.n(o);
      (0, a.zo)("div", {});
      let c = (0, a.zo)(l(), {}),
        x = (0, a.zo)("span", {});
      var d = i(9807),
        p = i(193),
        m = i(7953),
        h = (e) => {
          let {
              href: t,
              children: i,
              passLang: a = !1,
              leftIcon: o,
              rightIcon: l,
              asComp: h,
              hostname: g,
              isExternal: f,
              customParams: u,
              target: b,
              noParams: w,
              css: j,
              secondaryFont: y,
              hash: v,
              ...k
            } = e,
            Z = (0, d.useRouter)(),
            z = (0, s.jsx)(n, {
              text: k.text,
              rightIcon: l,
              leftIcon: o,
              children: i,
            });
          if (t) {
            let e = { ...(0, m.vl)(Z.asPath), ...u },
              i = f
                ? t
                : {
                    ...(v && { hash: v }),
                    pathname: t,
                    ...(!w && { query: e }),
                    protocol: "localhost" === p.MX ? "http" : "https",
                    hostname: g || p.MX,
                    port: g ? void 0 : "localhost" === p.MX ? p.px : void 0,
                  };
            return (0, s.jsx)(c, {
              href: i,
              locale: !1,
              rel: "_blank" === b ? "noopener noreferrer" : void 0,
              target: f ? "_blank" : b,
              css: j,
              ...k,
              children: (0, s.jsx)(r.Z, {
                as: h || "span",
                ...k,
                css: { m: 0, p: 0, fontSize: "inherit" },
                children: z,
              }),
            });
          }
          return (0, s.jsx)(x, { ...k, css: j, children: z });
        };
    },
    308: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = i(2676),
        r = i(4614),
        n = i.n(r),
        a = i(3993),
        o = (e) => {
          let { title: t, description: i, preview: r, children: o } = e,
            { t: l } = (0, a.$G)(),
            c = l("seo.title", "$WATER - OFFICIAL WEBSITE"),
            x = l(
              "seo.description",
              "Water is life. Join our big and conscious community. Bring the vital liquid to your portfolio with $WATER."
            ),
            d = "/images/preview.png";
          return (0, s.jsxs)(n(), {
            children: [
              (0, s.jsx)(
                "link",
                { rel: "icon", href: "/images/favicon.ico" },
                "icon"
              ),
              (0, s.jsx)("title", { children: t || c }, "title"),
              (0, s.jsx)(
                "meta",
                { property: "og:title", content: t || c },
                "og:title"
              ),
              (0, s.jsx)("meta", { name: "twitter:title", content: t || c }),
              (0, s.jsx)(
                "meta",
                { itemProp: "name", content: t || c },
                "google:name"
              ),
              (0, s.jsx)("meta", { name: "description", content: i || x }),
              (0, s.jsx)("meta", {
                property: "og:description",
                content: i || x,
              }),
              (0, s.jsx)("meta", {
                name: "twitter:description",
                content: i || x,
              }),
              (0, s.jsx)("meta", {
                name: "google:description",
                content: i || x,
              }),
              (0, s.jsx)("meta", { property: "og:image", content: r || d }),
              (0, s.jsx)("meta", { name: "twitter:image", content: r || d }),
              (0, s.jsx)("meta", { name: "image", content: r || d }),
              (0, s.jsx)(
                "meta",
                { property: "og:type", content: "website" },
                "og:type"
              ),
              (0, s.jsx)(
                "meta",
                { property: "og:site_name", content: "Website" },
                "og:site_name"
              ),
              (0, s.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              o,
            ],
          });
        };
    },
    6943: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = i(350),
        r = i(2676);
      let n = (0, s.zo)("div", { letterSpacing: "-0.02em" });
      (0, s.F4)({
        "0%": { backgroundPosition: "left center" },
        "25%": { backgroundPosition: "center top" },
        "50%": { backgroundPosition: "right center" },
        "75%": { backgroundPosition: "center bottom" },
        "100%": { backgroundPosition: "left center" },
      });
      var a = i(2635),
        o = (0, s.zo)(
          (e) => {
            let { text: t, asComp: i, children: s, ...a } = e;
            return (0, r.jsx)(n, {
              as: i,
              ...a,
              children: t ? (0, r.jsx)(r.Fragment, { children: t }) : s,
            });
          },
          {
            fz: "$def",
            fw: 400,
            color: "$textPrimary",
            letterSpacing: "-0.084px",
            variants: a.y,
          }
        );
    },
    193: function (e, t, i) {
      "use strict";
      i.d(t, {
        MX: function () {
          return a;
        },
        px: function () {
          return o;
        },
      });
      var s,
        r = i(6710),
        n = i.n(r);
      let a = "watercoin.wtf",
        o =
          null !== (s = n().env.NEXT_PUBLIC_PORT) && void 0 !== s ? s : "3000";
    },
    7359: function (e, t, i) {
      "use strict";
      var s = i(5271);
      t.Z = (e) => {
        let [t, i] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            {
              let s = window.matchMedia(e);
              s.matches !== t && i(s.matches);
              let r = () => i(s.matches);
              return (
                window.addEventListener("resize", r),
                () => window.removeEventListener("resize", r)
              );
            }
          }, [t, e]),
          t
        );
      };
    },
    1704: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSP: function () {
            return eT;
          },
          default: function () {
            return eF;
          },
        });
      var s = i(2676),
        r = i(350);
      let n = (0, r.zo)("div", {
          pt: 160,
          d: "flex",
          flexDirection: "column",
          w: "100%",
          "@md": { pt: 90 },
        }),
        a = (0, r.zo)("div", { w: "100%" });
      var o = i(308),
        l = i(5172);
      i(634);
      var c = i(8412);
      let x = (0, r.zo)("div", { pt: 70, pb: 54 });
      var d = i(1422),
        p = i(6943),
        m = i(3801),
        h = i(2761),
        g = i(3993),
        f = i(7359),
        u = (e) => {
          let { noFooterMt: t, footerTextColor: i, bgColor: n } = e,
            { t: a } = (0, g.$G)(),
            o = (0, f.Z)(r.BC.md);
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(x, {
              css: { bg: n || "transparent" },
              children: (0, s.jsxs)(d.ZP, {
                children: [
                  (0, s.jsxs)(m.Z, {
                    css: { d: "flex", ai: "center", fd: "column", mb: "36px" },
                    children: [
                      (0, s.jsx)(h.Z, {
                        src: "/images/common/footer/logo.png",
                        alt: "logo",
                        width: o ? 175 : 364,
                        height: o ? 50 : 106,
                        css: { mb: "10px" },
                      }),
                      (0, s.jsx)(p.Z, {
                        text: a("common.isLiquidSilver", "is liquid silver"),
                        css: {
                          color: i || "#FFF",
                          fz: "40px",
                          textTransform: "uppercase",
                          fw: 500,
                          ta: "center",
                          "@md": { fz: "23px" },
                        },
                      }),
                    ],
                  }),
                  (0, s.jsxs)(m.Z, {
                    css: {
                      maxW: "840px",
                      w: "100%",
                      ta: "center",
                      m: "0 auto",
                    },
                    children: [
                      (0, s.jsx)(p.Z, {
                        css: {
                          color: i || "#FFF",
                          mb: "15px",
                          fw: 500,
                          "@md": { fz: "14px", fw: 400 },
                        },
                        fontSize: "md",
                        text: a(
                          "common.footer.text",
                          "RISK WARNING: Trading Cryptocurrencies is highly speculative, carries a level of risk and may not be suitable for all investors. You may lose some or all of your invested capital, therefore you should not speculate with capital that you cannot afford to lose. The content on this site should not be considered investment advice. Investing is speculative. When investing your capital is at risk."
                        ),
                      }),
                      (0, s.jsx)(p.Z, {
                        css: {
                          color: i || "#FFF",
                          mb: "15px",
                          fw: 500,
                          "@md": { fz: "14px", fw: 400 },
                        },
                        fontSize: "md",
                        text: a(
                          "common.footer.text3",
                          "LEGAL DISCLAIMER: $WATER is a meme coin with no intrinsic value or expectation of financial return. $WATER is completely useless and for entertainment purposes only. Trading crypto, especially memecoins, involves significant risk and potential capital loss. Memecoins can be extremely volatile. Conduct thorough research. When you trade or purchase $WATER, you are agreeing that you have seen this disclaimer."
                        ),
                      }),
                      (0, s.jsx)(p.Z, {
                        css: {
                          color: i || "#FFF",
                          fw: 500,
                          "@md": { fz: "14px", fw: 400 },
                        },
                        fontSize: "md",
                        text: "The information on this site is not intended for residents of Afghanistan, Benin, Bhutan, Bahrain, Egypt, Kuwait, China, Crimea region, Cuba, Iran, Iraq, Saudi Arabia, Syria, Oman, UAE, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        b = i(1043),
        w = i.n(b);
      let j = (0, r.zo)("div", {
          variants: {
            down: {
              m: { "@m": { display: "none" } },
              xs: { "@xs": { display: "none" } },
              iphone14ProMax: { "@iphone14ProMax": { display: "none" } },
              sm: { "@sm": { display: "none" } },
              md: { "@md": { display: "none" } },
              lg: { "@lg": { display: "none" } },
              xl: { "@xl": { display: "none" } },
              xxl: { "@xxl": { display: "none" } },
              xxxl: { "@xxxl": { display: "none" } },
              extraLarge: { "@extraLarge": { display: "none" } },
            },
            up: {
              minM: { "@minM": { display: "none" } },
              minXs: { "@minXs": { display: "none" } },
              minSm: { "@minSm": { display: "none" } },
              minMd: { "@minMd": { display: "none" } },
              minLg: { "@minLg": { display: "none" } },
              minXl: { "@minXl": { display: "none" } },
              minXxl: { "@minXxl": { display: "none" } },
              minXxxl: { "@minXxxl": { display: "none" } },
              minExtraLarge: { "@minExtraLarge": { display: "none" } },
            },
          },
        }),
        y = (e) => {
          let { up: t, down: i, children: n } = e;
          return (0, f.Z)(r.BC[null != i ? i : t])
            ? null
            : (0, s.jsx)(s.Fragment, { children: n });
        };
      var v = (e) => {
          let { children: t, up: i, down: r, css: n, ...a } = e;
          return (0, s.jsx)(j, {
            up: i,
            down: r,
            ...a,
            css: n,
            children: (0, s.jsx)(y, { up: i, down: r, children: t }),
          });
        },
        k = i(5271),
        Z = i(3676);
      let z = (0, r.F4)({
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        }),
        S = (0, r.zo)("div", {
          zIndex: Z.SF + 1,
          pos: "fixed",
          w: "100%",
          h: "100%",
          t: 0,
          r: 0,
          ff: "$title",
          d: "flex",
          flexDirection: "column",
          overflowY: "auto",
          overflowX: "hidden",
          transitionDuration: "0.35s",
          animation: "".concat(z, " 0.45s ease-in-out"),
          backgroundColor: "$bodyBg",
          backgroundImage: 'url("/images/common/navigation/bg.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          "&::-webkit-scrollbar": { d: "none" },
        });
      (0, r.zo)("div", {
        w: "100%",
        flex: 1,
        d: "flex",
        flexDirection: "column",
      }),
        (0, r.zo)("div", { mb: 60, d: "flex", flexDirection: "column" }),
        (0, r.zo)("div", {
          mb: 51,
          d: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }),
        (0, r.zo)("div", { d: "flex", alignItems: "center" }),
        (0, r.zo)("div", { ml: 10, w: 35, h: 35, d: "flex", ai: "center" });
      let W = (0, r.zo)("div", {
          zIndex: Z.SF,
          pos: "fixed",
          t: 0,
          w: "100%",
          h: "100%",
          bg: "rgba(0, 0, 0, 0.13)",
        }),
        $ = w()(() => i.e(465).then(i.bind(i, 8465)), {
          loadableGenerated: { webpack: () => [8465] },
          ssr: !1,
        });
      var E = () => {
        let { isOpen: e, closeBar: t } = (0, c.Jv)();
        return (0, s.jsx)(s.Fragment, {
          children:
            e &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(S, {
                  children: (0, s.jsx)(m.Z, {
                    css: {
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    },
                    children: (0, s.jsx)($, {}),
                  }),
                }),
                (0, s.jsx)(W, { onClick: t }),
              ],
            }),
        });
      };
      let T = w()(() => i.e(962).then(i.bind(i, 7962)), {
          loadableGenerated: { webpack: () => [7962] },
          ssr: !1,
        }),
        F = w()(() => i.e(554).then(i.bind(i, 9554)), {
          loadableGenerated: { webpack: () => [9554] },
          ssr: !1,
        });
      var C = function (e) {
          let { price: t } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(v, { up: "minXxl", children: (0, s.jsx)(T, {}) }),
              (0, s.jsx)(v, {
                down: "xxl",
                children: (0, s.jsx)(F, { price: t }),
              }),
              (0, s.jsx)(E, {}),
            ],
          });
        },
        A = (e) => {
          let {
            noFooterMt: t,
            noPt: i,
            bgColor: r,
            footerTextColor: x,
            newHeader: d,
            price: p,
            children: m,
          } = e;
          return (0, s.jsx)(n, {
            className: "Layout-container",
            css: { pt: i ? 0 : void 0 },
            children: (0, s.jsxs)(c.fL, {
              children: [
                (0, s.jsx)(o.Z, {}),
                (0, s.jsx)(C, { price: p }),
                (0, s.jsx)(a, { children: m }),
                (0, s.jsx)(u, {
                  noFooterMt: t,
                  bgColor: r,
                  footerTextColor: x,
                }),
                (0, s.jsx)(l.Ix, {}),
              ],
            }),
          });
        };
      let B = (0, r.zo)("div", {
        pb: 70,
        "& .prizes-slider": {
          "&-pagination": {
            w: "initial !important",
            transform: "none !important",
            jc: "center",
            "& .swiper-pagination": {
              jc: "center",
              "&-bullet": {
                opacity: 1,
                w: 13,
                h: 13,
                flex: "0 0 13px",
                bg: "#F8F8F8",
                br: "50%",
                border: "0.3px solid $black",
                "&-active": {
                  bg: "radial-gradient(213.64% 50% at 50% 50%, #3D6494 0%, #2A4C75 100%)",
                },
              },
            },
            "@md": { d: "flex" },
          },
        },
        "& .swiper-slide": {
          w: "658px !important",
          "@sm": { w: "350px !important" },
        },
      });
      var P = i(1729),
        R = i(2264),
        D = i(2635);
      let I = (0, r.zo)(p.Z, {
          mb: 24,
          fontSize: "$titleDef",
          fw: 900,
          color: "$titlePrimary",
          lineHeight: "104%",
          "& span": { color: "#58B7E7" },
          "@md": { fontSize: "$titleSm" },
          variants: D.y,
        }),
        _ = (e) => [
          {
            image: "/images/index/prizes/1.png",
            title: (0, s.jsx)(g.cC, {
              i18nKey: "index.prizesNew.item1.title",
              children: (0, s.jsxs)(p.Z, {
                css: {
                  mb: 15,
                  fz: 36,
                  fw: 800,
                  textTransform: "uppercase",
                  color: "#2A4C75",
                  textShadow: "0px 1px 0px #13612E",
                },
                children: [
                  "MALDIVES",
                  " ",
                  (0, s.jsx)(p.Z, {
                    as: "span",
                    css: { color: "#58B7E7", fz: 36, fw: 800 },
                    children: "Getaway",
                  }),
                ],
              }),
            }),
            text: e(
              "index.prizesNew.item1.text",
              "Escape to paradise with a luxury trip to the Maldives. Stay in the best hotels, enjoy crystal-clear waters, pristine beaches, and indulge in world-class spa treatments."
            ),
          },
          {
            image: "/images/index/prizes/2.png",
            title: (0, s.jsx)(g.cC, {
              i18nKey: "index.prizesNew.item2.title",
              children: (0, s.jsxs)(p.Z, {
                css: {
                  mb: 15,
                  fz: 36,
                  fw: 800,
                  textTransform: "uppercase",
                  color: "#2A4C75",
                  textShadow: "0px 1px 0px #13612E",
                },
                children: [
                  "Iceland Geysers",
                  " ",
                  (0, s.jsx)(p.Z, {
                    as: "span",
                    css: { color: "#58B7E7", fz: 36, fw: 800 },
                    children: "VIP Trip",
                  }),
                ],
              }),
            }),
            text: e(
              "index.prizesNew.item2.text",
              "Experience the natural wonders of Iceland with a VIP tour of the famous geysers, hot springs, and breathtaking waterfalls. Enjoy luxurious accommodations."
            ),
          },
          {
            image: "/images/index/prizes/3.png",
            title: (0, s.jsx)(g.cC, {
              i18nKey: "index.prizesNew.item3.title",
              children: (0, s.jsxs)(p.Z, {
                css: {
                  mb: 15,
                  fz: 36,
                  fw: 800,
                  textTransform: "uppercase",
                  color: "#2A4C75",
                  textShadow: "0px 1px 0px #13612E",
                },
                children: [
                  "YOUR OWN PRIVATE",
                  " ",
                  (0, s.jsx)(p.Z, {
                    as: "span",
                    css: { color: "#58B7E7", fz: 36, fw: 800 },
                    children: "YACHT",
                  }),
                ],
              }),
            }),
            text: e(
              "index.prizesNew.item3.text",
              "Win a mid sized private yacht! Enjoy luxurious and private water travel with your family or friends in any part of the world, hosting parties or simply relaxing in style."
            ),
          },
          {
            image: "/images/index/prizes/4.png",
            title: (0, s.jsx)(g.cC, {
              i18nKey: "index.prizesNew.item4.title",
              children: (0, s.jsxs)(p.Z, {
                css: {
                  mb: 15,
                  fz: 36,
                  fw: 800,
                  textTransform: "uppercase",
                  color: "#2A4C75",
                  textShadow: "0px 1px 0px #13612E",
                },
                children: [
                  "Ultimate",
                  " ",
                  (0, s.jsx)(p.Z, {
                    as: "span",
                    css: { color: "#58B7E7", fz: 36, fw: 800 },
                    children: "World Cruise",
                  }),
                ],
              }),
            }),
            text: e(
              "index.prizesNew.item4.text",
              "Embark on the adventure of a lifetime with the Ultimate World Cruise. Visit multiple continents, immerse yourself in diverse cultures, and enjoy the top-tier amenities."
            ),
          },
        ];
      var H = i(9586),
        M = i.n(H),
        X = (e) => {
          let {} = e,
            { t } = (0, g.$G)();
          return (0, s.jsxs)(B, {
            children: [
              (0, s.jsx)(d.ZP, {
                children: (0, s.jsx)(I, {
                  fontWeight: 700,
                  css: {
                    ta: "center",
                    textTransform: "uppercase",
                    "@lg": { fz: "72px" },
                    "@md": { mb: "45px", fz: "48px" },
                    "@sm": { mb: "45px", fz: "36px" },
                  },
                  children: (0, s.jsxs)(g.cC, {
                    i18nKey: "index.prizesNew.title",
                    children: [
                      "BECOME A",
                      " ",
                      (0, s.jsx)("span", {
                        style: { color: "#58B7E7" },
                        children: "$WATER",
                      }),
                      " ",
                      "HOLDER ",
                      (0, s.jsx)("br", {}),
                      " – WIN HUGE PRIZES",
                    ],
                  }),
                }),
              }),
              (0, s.jsx)(p.Z, {
                css: { mb: 45, color: "#63C2FA", ta: "center", fw: 900 },
                children: t(
                  "index.prizes.text",
                  "And so much more coming soon"
                ),
              }),
              (0, s.jsxs)(m.Z, {
                css: { m: "0 auto", maxW: 2675, w: "100%" },
                children: [
                  (0, s.jsx)(P.tq, {
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    spaceBetween: 24,
                    loop: !0,
                    pagination: { el: ".prizes-slider-pagination" },
                    navigation: {
                      prevEl: ".prizes-slider-arrow-left",
                      nextEl: ".prizes-slider-arrow-right",
                    },
                    modules: [R.pt, R.tl, R.W_],
                    className: "prizes-slider",
                    children: _(t).map((e, t) =>
                      (0, s.jsx)(
                        P.o5,
                        {
                          children: (0, s.jsxs)(m.Z, {
                            css: {
                              h: 550,
                              br: 12,
                              overflow: "hidden",
                              "@sm": { h: "auto" },
                            },
                            children: [
                              (0, s.jsx)(m.Z, {
                                css: { pb: "53%", pos: "relative" },
                                children: (0, s.jsx)(M(), {
                                  src: e.image,
                                  alt: e.image,
                                  fill: !0,
                                  loading: "eager",
                                  quality: 100,
                                }),
                              }),
                              (0, s.jsxs)(m.Z, {
                                css: {
                                  p: "40px 24px",
                                  h: "100%",
                                  bg: "#F7F7F7",
                                  br: "15px",
                                  mt: "10px",
                                  "@sm": { p: "20px 14px" },
                                },
                                children: [
                                  e.title,
                                  (0, s.jsx)(p.Z, {
                                    css: {
                                      fz: 18,
                                      color: "#6A6A6A",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: e.text,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        t
                      )
                    ),
                  }),
                  (0, s.jsxs)(m.Z, {
                    css: {
                      mt: 46,
                      d: "flex",
                      jc: "center",
                      ai: "center",
                      gap: 90,
                      "& img": { cursor: "pointer" },
                      "@sm": { mt: 24, gap: 40 },
                    },
                    children: [
                      (0, s.jsx)(M(), {
                        className: "prizes-slider-arrow-left",
                        src: "/images/index/prizes/arrow-left.png",
                        width: 67,
                        height: 52,
                        alt: "/images/index/prizes/arrow-left.png",
                      }),
                      (0, s.jsx)(m.Z, {
                        className: "prizes-slider-pagination",
                      }),
                      (0, s.jsx)(M(), {
                        className: "prizes-slider-arrow-right",
                        src: "/images/index/prizes/arrow-right.png",
                        width: 67,
                        height: 52,
                        alt: "/images/index/prizes/arrow-right.png",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      let N = (0, r.zo)("div", {});
      var G = i(2550),
        L = (e) => {
          let {} = e,
            t = (0, f.Z)(r.BC.lg);
          (0, f.Z)(r.BC.md);
          let { t: i } = (0, g.$G)();
          return (0, s.jsx)(N, {
            id: "community",
            children: (0, s.jsx)(d.ZP, {
              children: (0, s.jsxs)(m.Z, {
                css: {
                  br: "40px",
                  pos: "relative",
                  pt: "120px",
                  "@xl": {
                    pt: 50,
                    backgroundImage: "url(/images/index/join/bg-mob.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                  },
                },
                children: [
                  !t &&
                    (0, s.jsx)(h.Z, {
                      src: "/images/index/join/bg.png",
                      alt: "background",
                      fill: !0,
                      css: { "& img": { br: "40px" } },
                    }),
                  !t &&
                    (0, s.jsx)(h.Z, {
                      src: "/images/index/join/left.png",
                      width: 418,
                      height: 340,
                      alt: "glass",
                      css: { m: "0 auto", pos: "absolute", b: 0, l: "30px" },
                    }),
                  !t &&
                    (0, s.jsx)(h.Z, {
                      src: "/images/index/join/right.png",
                      width: 339,
                      height: 340,
                      alt: "glass",
                      css: { m: "0 auto", pos: "absolute", b: 0, r: "30px" },
                    }),
                  t &&
                    (0, s.jsx)(h.Z, {
                      src: "/images/index/join/glass.png",
                      width: 261,
                      height: 340,
                      alt: "glass",
                      css: {
                        m: "0 auto",
                        pos: "absolute",
                        b: 0,
                        l: "50%",
                        transform: "translateX(-50%)",
                      },
                    }),
                  (0, s.jsxs)(m.Z, {
                    css: { pos: "relative", zi: 5 },
                    children: [
                      (0, s.jsx)(m.Z, {
                        css: { pos: "relative" },
                        children: (0, s.jsx)(I, {
                          text: i(
                            "index.join.title",
                            "Community Drink together"
                          ),
                          fontSize: "titleLg",
                          css: {
                            maxWidth: "950px",
                            margin: "0 auto 38px",
                            ta: "center",
                            textTransform: "uppercase",
                            textShadow: "3px 5px 0px #375E8B",
                            color: "#FFF",
                            "@sm": { p: "0 12px" },
                          },
                        }),
                      }),
                      (0, s.jsxs)(m.Z, {
                        css: {
                          pb: "173px",
                          d: "flex",
                          gap: "12px",
                          jc: "center",
                          "@xl": { pb: "400px" },
                          "@md": { fd: "column", ai: "center" },
                        },
                        children: [
                          (0, s.jsx)("a", {
                            href: "https://x.com/WaterMemeCoin",
                            target: "_blank",
                            children: (0, s.jsxs)(G.Z, {
                              background: "blue",
                              children: [
                                (0, s.jsx)(h.Z, {
                                  src: "/images/index/join/twitter.svg",
                                  alt: "twitter",
                                  width: 22,
                                  height: 18,
                                  css: { mr: 8 },
                                }),
                                (0, s.jsx)(p.Z, {
                                  css: { textTransform: "uppercase", fw: 900 },
                                  children: "Twitter",
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)("a", {
                            href: "https://t.me/watersolmeme",
                            target: "_blank",
                            children: (0, s.jsxs)(G.Z, {
                              background: "violet",
                              children: [
                                (0, s.jsx)(h.Z, {
                                  src: "/images/index/join/telegram.svg",
                                  alt: "discord",
                                  width: 24,
                                  height: 18,
                                  css: { mr: 8 },
                                }),
                                (0, s.jsx)(p.Z, {
                                  css: { textTransform: "uppercase", fw: 900 },
                                  children: "TELEGRAM",
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)("a", {
                            href: "https://www.instagram.com/water.solana",
                            target: "_blank",
                            children: (0, s.jsx)(G.Z, {
                              css: {
                                border: "3px solid $black",
                                bg: "#F96D6D",
                                textTransform: "uppercase",
                                p: "0px 10px",
                                boxShadow:
                                  "rgb(0, 0, 0) 0px -5px 0px 0px inset",
                              },
                              children: (0, s.jsx)(p.Z, {
                                css: { textTransform: "uppercase", fw: 900 },
                                children: "INSTAGRAM",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      let O = (0, r.zo)("div", { mb: 100 }),
        q = (e) => [
          {
            title: e(
              "index.waterProducts.items.item1.title",
              "African Health Mission"
            ),
            text: e(
              "index.waterProducts.items.item1.text",
              "The struggle for clear water never ends, especially with global warming. We aim for sustainable projects that prevent deforestation and help with Water Distribution in the dryest parts of Africa!"
            ),
          },
          {
            title: e(
              "index.waterProducts.items.item2.title",
              "DONATE $WATER NFT Series"
            ),
            text: e(
              "index.waterProducts.items.item2.text",
              "The $WATER NFT Series is a way to be a charitable person and have a chance to earn even more than you donated! Being a great person should be rewarded!"
            ),
          },
          {
            title: e(
              "index.waterProducts.items.item3.title",
              "FREEZING AND VAPORIZING $WATER"
            ),
            text: e(
              "index.waterProducts.items.item3.text",
              "$WATER introduces a unique and engaging game mechanic inspired by the states of water—Freezing (Unique staking system) and Vaporizing (Regular burning events with charity and rewards)."
            ),
          },
        ];
      var U = (e) => {
        let {} = e,
          { t } = (0, g.$G)();
        return (0, s.jsx)(O, {
          children: (0, s.jsxs)(d.ZP, {
            children: [
              (0, s.jsx)(I, {
                centered: !0,
                noStroke: !0,
                color: "titleSecondary",
                css: { maxW: 653, w: "100%", mb: 72, tt: "uppercase" },
                children: t(
                  "index.waterProducts.title",
                  "$Water Future Products"
                ),
              }),
              (0, s.jsx)(m.Z, {
                css: {
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "32px",
                  "@lg": { gridTemplateColumns: "repeat(1, 1fr)" },
                },
                children: q(t).map((e, i) =>
                  (0, s.jsxs)(
                    m.Z,
                    {
                      css: {
                        p: 13,
                        pb: 38,
                        minH: 634,
                        d: "flex",
                        fd: "column",
                        jc: "space-between",
                        ta: "center",
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        "@sm": { minH: "initial" },
                      },
                      children: [
                        (0, s.jsxs)(m.Z, {
                          children: [
                            (0, s.jsx)(h.Z, {
                              src: "/images/index/water-products/".concat(
                                i + 1,
                                ".png"
                              ),
                              width: 422,
                              height: 278,
                              alt: "img",
                              css: { m: "0 auto", mb: 28 },
                            }),
                            (0, s.jsx)(p.Z, {
                              css: {
                                mb: 9,
                                fz: 36,
                                color: "#2A4C75",
                                tt: "uppercase",
                                fw: 800,
                                "@sm": { fz: 24 },
                              },
                              children: e.title,
                            }),
                            (0, s.jsx)(p.Z, {
                              centered: !0,
                              css: {
                                mb: 30,
                                maxW: 341,
                                w: "100%",
                                fz: 18,
                                fw: 400,
                                color: "$black",
                              },
                              children: e.text,
                            }),
                          ],
                        }),
                        (0, s.jsx)(G.Z, {
                          disabled: !0,
                          css: {
                            m: "0 auto",
                            br: 12,
                            border: "3px solid $black",
                            boxShadow: "0px -5px 0px 0px #000 inset",
                            textTransform: "uppercase",
                            color: "$black",
                            p: "0px 10px",
                            bg: "$white",
                            d: "flex",
                            ai: "center",
                            minH: "62px",
                          },
                          children: (0, s.jsx)(p.Z, {
                            css: { color: "$black" },
                            children: t("common.comingSoon", "Coming soon"),
                          }),
                        }),
                      ],
                    },
                    e.title
                  )
                ),
              }),
            ],
          }),
        });
      };
      let K = (0, r.zo)("div", {
        mb: 100,
        pos: "relative",
        h: 2522,
        "@lg": { mb: 70, h: 2440 },
      });
      var J = (e) => {
        let {} = e,
          t = (0, f.Z)(r.BC.lg),
          { i18n: i } = (0, g.$G)(),
          n = t
            ? "" === i.language
              ? "/images/index/roadmap/mob-en.png"
              : "/images/index/roadmap/mob-".concat(i.language, ".png")
            : "" === i.language
            ? "/images/index/roadmap/desk-en.png"
            : "/images/index/roadmap/desk-".concat(i.language, ".png");
        return (0, s.jsx)(K, {
          id: "roadmap",
          children: (0, s.jsx)(h.Z, {
            loading: "eager",
            unoptimized: !0,
            src: n,
            ...(t
              ? { width: 375, height: 2440 }
              : { width: 1675, height: 2522 }),
            alt: n,
            responsive: !1,
            css: {
              m: "0 auto",
              zi: 2,
              h: "100%",
              objectFit: "cover",
              pos: "absolute",
              l: "50%",
              transform: "translateX(-50%)",
              "& img": {
                zi: 2,
                h: "100%",
                objectFit: "cover",
                pos: "absolute",
                l: "50%",
                transform: "translateX(-50%)",
              },
            },
          }),
        });
      };
      let Y = (0, r.zo)("div", { mt: 3, pos: "relative", "@sm": { h: 726 } });
      var V = (e) => {
        let {} = e,
          { t } = (0, g.$G)();
        return (0, s.jsxs)(Y, {
          children: [
            (0, s.jsx)(h.Z, {
              src: "/images/index/hero/title-img.png",
              width: 1053,
              height: 393,
              alt: "/title-img",
              css: {
                pos: "absolute",
                t: 156,
                l: "50%",
                transform: "translateX(-50%)",
                "@sm": { p: "0 10px", t: 122 },
              },
            }),
            (0, s.jsx)(d.ZP, {
              css: {
                maxW: 1651,
                minH: 880,
                backgroundImage: "url(/images/index/hero/bg-desk.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                br: 6,
                "@sm": {
                  minH: 726,
                  backgroundImage: "url(/images/index/hero/bg-mob.png)",
                },
              },
            }),
          ],
        });
      };
      let Q = (0, r.zo)("div", { mt: -100, mb: 110, pos: "relative" });
      var ee = (e) => {
        let {} = e;
        return (0, s.jsx)(Q, {
          children: (0, s.jsx)(d.ZP, {
            css: { pos: "relative" },
            children: (0, s.jsx)(h.Z, {
              src: "/images/index/get/glass.png",
              width: 299,
              height: 402,
              responsive: !1,
              alt: "glass",
              css: {
                pos: "absolute",
                t: -350,
                l: "50%",
                transform: "translateX(-50%)",
                zi: 2,
                "@sm": { w: 227, h: 305, t: -260 },
              },
            }),
          }),
        });
      };
      let et = (0, r.zo)("div", {}),
        ei = (e) => [
          {
            title: e(
              "index.charity.items.item1.title",
              "Dedicated Charity Wallet"
            ),
            text: e(
              "index.charity.items.item1.text",
              "For the sake of transparency, we will have a separate, publicly known wallet address to use for charity donations and any campaigns aimed to achieve the greater good!"
            ),
          },
          {
            title: e(
              "index.charity.items.item2.title",
              "Sustainable opportunities and interesting Plans"
            ),
            text: e(
              "index.charity.items.item2.text",
              "Unlike many memecoins that lack universal value, $WATER stands out with a clear purpose. Our token exists to ensure fair asset redistribution among holders while also supporting charitable causes. With $WATER, you can contribute to helping others without any personal loss."
            ),
          },
          {
            title: e(
              "index.charity.items.item3.title",
              "Rapid Growth and Strong Marketing"
            ),
            text: e(
              "index.charity.items.item3.text",
              "As it already happened, we are constantly improving the approach and financial balancing models to unlock untapped potential of $WATER with outstanding Marketing and Performance"
            ),
          },
        ];
      var es = (e) => {
        let {} = e,
          { t } = (0, g.$G)();
        return (0, s.jsx)(et, {
          id: "utility",
          children: (0, s.jsxs)(d.ZP, {
            css: {
              mb: 100,
              pt: 74,
              pb: 88,
              backgroundImage: "url(/images/index/charity/bg.png)",
              backgroundColor:
                "linear-gradient(180deg, #FFF 0%, #F5FAFB 67.66%)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
              boxShadow: "0px 4px 0px 0px #649AC0",
              br: 21,
            },
            children: [
              (0, s.jsx)(I, {
                centered: !0,
                css: { mb: 20, textTransform: "uppercase", maxW: 600 },
                children: (0, s.jsxs)(g.cC, {
                  i18nKey: "index.charity.title",
                  children: [
                    (0, s.jsx)("span", { children: "$Water" }),
                    " is a CHARITY Token",
                  ],
                }),
              }),
              (0, s.jsx)(p.Z, {
                color: "titleSecondary",
                centered: !0,
                css: { maxW: 612, w: "100%", ff: "var(--font-secondary)" },
                children: t(
                  "index.charity.text",
                  "$WATER is something that is essential for everyone, and to underline this idea, we created a way not only make profits, but give an opportunity to share that for the sake of charity."
                ),
              }),
              (0, s.jsx)(h.Z, {
                src: "/images/index/charity/img.png",
                width: 760,
                height: 552,
                alt: "img",
                css: {
                  m: "0 auto",
                  mt: 20,
                  mb: 70,
                  "@lg": { mt: 30, transform: "scale(1.2)" },
                },
              }),
              (0, s.jsx)(m.Z, {
                css: {
                  d: "flex",
                  jc: "space-between",
                  gap: 10,
                  "@lg": { fd: "column", ai: "center" },
                },
                children: ei(t).map((e, t) =>
                  (0, s.jsxs)(
                    m.Z,
                    {
                      css: { maxW: 550, w: "100%", ta: "center" },
                      children: [
                        (0, s.jsxs)(p.Z, {
                          css: {
                            mb: 34,
                            color: "#63C2FA",
                            fz: 64,
                            fw: 800,
                            "@sm": { mb: 15, fz: 30 },
                          },
                          children: ["0", t + 1],
                        }),
                        (0, s.jsx)(p.Z, {
                          css: {
                            mb: 25,
                            fz: 40,
                            fw: 800,
                            tt: "uppercase",
                            color: "#2A4C75",
                            "@sm": { fz: 26 },
                          },
                          children: e.title,
                        }),
                        (0, s.jsx)(p.Z, {
                          css: {
                            mb: 25,
                            ff: "var(--font-secondary)",
                            color: "#2A4C75",
                            fz: 20,
                          },
                          children: e.text,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        });
      };
      let er = (0, r.zo)("div", {
          mt: -300,
          "@lg": { mt: 400 },
          "@sm": { mt: 100 },
        }),
        en = (0, r.zo)("div", {});
      var ea = (e) => {
        let { text: t, css: i, lgCss: r } = e,
          { t: n } = (0, g.$G)();
        return (0, s.jsx)(en, {
          css: {
            p: "8px 36px",
            w: "fit-content",
            h: 80,
            pos: "absolute",
            d: "flex",
            ai: "center",
            jc: "center",
            border: "3px solid #2A4C75",
            br: 94,
            boxShadow:
              "-3px 5px 0px 0px #2A4C75, 0px -5px 0px 0px #2A4C75 inset",
            bg: "$white",
            backgroundImage: "url(/images/index/benefits/item-bg.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            ta: "center",
            ...i,
            "@lg": {
              p: "14px 24px",
              pos: "initial",
              boxShadow:
                "-3px 5px 0px 0px #2A4C75, 0px -5px 0px 0px #2A4C75 inset",
              ...r,
            },
          },
          children: (0, s.jsx)(p.Z, {
            color: "titleSecondary",
            css: {
              fz: 20,
              ff: "var(--font-secondary)",
              fw: 700,
              "@lg": { fz: 18 },
            },
            children: t,
          }),
        });
      };
      let eo = (e) => [
        {
          title: e("index.benefits.items.item1.title", "No Perpetuals"),
          text: e(
            "index.benefits.items.item1.text",
            "To prevent market manipulation, we avoid perpetual contracts at the beginning stage of the project, reducing volatility."
          ),
          color: "#57BB7A",
        },
        {
          title: e("index.benefits.items.item2.title", "Heavy Presale Limits:"),
          text: e(
            "index.benefits.items.item2.text",
            "Limited to 100 Solana (SOL) per wallet. Each wallet can invest up to 100 SOL."
          ),
          color: "#6EC7FC",
        },
        {
          title: e(
            "index.benefits.items.item3.title",
            "Pre-agreed top listings:"
          ),
          text: e(
            "index.benefits.items.item3.text",
            "We have several listings pre-agreed with top tier exchanges with amazing liquidity and features."
          ),
          color: "#BF8DFF",
        },
        {
          title: e(
            "index.benefits.items.item4.title",
            "Vested partners & KOLs"
          ),
          text: e(
            "index.benefits.items.item4.text",
            "All of our top partners & KOLs are limited with publicly visible tokens vesting. This ensures a long-term involvement."
          ),
          color: "#F79422",
        },
      ];
      var el = (e) => {
        let {} = e,
          { t } = (0, g.$G)();
        return (0, s.jsxs)(er, {
          id: "features",
          children: [
            (0, s.jsxs)(d.ZP, {
              css: {
                minH: 895,
                pos: "relative",
                "@lg": { d: "flex", fd: "column", ai: "center" },
                "@sm": { minH: "initial" },
              },
              children: [
                (0, s.jsx)(ea, {
                  text: t("index.benefits.item1.text", "You Drink it everyday"),
                  css: { t: 302, l: "10%", transform: "rotate(13.161deg)" },
                  lgCss: { mb: 35, ml: 100 },
                }),
                (0, s.jsx)(ea, {
                  text: t(
                    "index.benefits.item2.text",
                    "Is the vital component of life in our universe"
                  ),
                  css: {
                    maxW: 350,
                    t: 345,
                    r: 100,
                    transform: "rotate(-7.117deg)",
                  },
                  lgCss: { mr: 100, maxW: 218 },
                }),
                (0, s.jsx)(m.Z, {
                  css: { pt: 350, "@lg": { pt: 41 } },
                  children: (0, s.jsxs)(m.Z, {
                    css: { m: "0 auto", pos: "relative", w: "fit-content" },
                    children: [
                      (0, s.jsx)(h.Z, {
                        src: "/images/index/benefits/left-title-icon.svg",
                        width: 65,
                        height: 100,
                        responsive: !1,
                        alt: "left-title-icon.svg",
                        css: { pos: "absolute", t: 0, l: 0, "@sm": { l: -15 } },
                      }),
                      (0, s.jsx)(h.Z, {
                        src: "/images/index/benefits/right-title-icon.svg",
                        width: 65,
                        height: 100,
                        responsive: !1,
                        alt: "right-title-icon.svg",
                        css: { pos: "absolute", t: 0, r: 0, "@sm": { r: -15 } },
                      }),
                      (0, s.jsx)(I, {
                        centered: !0,
                        css: { mb: 20, textTransform: "uppercase" },
                        children: (0, s.jsxs)(g.cC, {
                          i18nKey: "index.benefits.title",
                          children: [
                            "Key Features: ",
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)("span", { children: "$WaterCoin" }),
                          ],
                        }),
                      }),
                      (0, s.jsx)(p.Z, {
                        centered: !0,
                        color: "titleSecondary",
                        css: {
                          mb: 37,
                          maxW: 612,
                          fz: "$sm",
                          ff: "var(--font-secondary)",
                        },
                        children: (0, s.jsx)(g.cC, {
                          i18nKey: "index.benefits.text",
                          children:
                            "Our goal is to create the cleanest and most ethical platform in the crypto space, treating our community with fairness and transparency.",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(ea, {
                  text: t(
                    "index.benefits.item3.text",
                    "Tastes great when you are thirsty"
                  ),
                  css: { b: 230, l: 100, transform: "rotate(-8deg)" },
                  lgCss: { mr: 40, mb: 50 },
                }),
                (0, s.jsx)(ea, {
                  text: t(
                    "index.benefits.item4.text",
                    "Scarce, same as Bitcoin"
                  ),
                  css: { t: 460, l: 100 },
                  lgCss: { ml: 100, mb: 50 },
                }),
                (0, s.jsx)(ea, {
                  text: t(
                    "index.benefits.item5.textNew",
                    "You definitely need some WATER after you had too much alcohol"
                  ),
                  css: {
                    maxW: 420,
                    b: 288,
                    r: 50,
                    transform: "rotate(5.293deg)",
                  },
                  lgCss: { transform: "rotate(10.111deg)" },
                }),
              ],
            }),
            (0, s.jsx)(d.ZP, {
              css: {
                transform: "translateY(-200px)",
                "@lg": { transform: "translateY(0px)", mb: 100 },
                "@sm": { mt: 70 },
              },
              children: (0, s.jsxs)(m.Z, {
                css: {
                  display: "flex",
                  m: "50px auto 0",
                  jc: "center",
                  gap: 24,
                  "@lg": { fd: "column" },
                },
                children: [
                  (0, s.jsxs)(m.Z, {
                    css: {
                      p: 22,
                      minH: 230,
                      bg: "#FFF",
                      border: "3px solid #58B7E7",
                      br: 14,
                      maxW: "590px",
                      boxShadow: "0px -5px 0px 0px #58B7E7 inset",
                      "@lg": { maxW: "362px", m: "0 auto" },
                    },
                    children: [
                      (0, s.jsx)(h.Z, {
                        src: "/images/index/benefits/5.png",
                        alt: "icon",
                        width: 557,
                        height: 304,
                        css: { mb: 21 },
                      }),
                      (0, s.jsxs)(m.Z, {
                        css: { maxW: 512 },
                        children: [
                          (0, s.jsx)(p.Z, {
                            css: {
                              mb: 10,
                              color: "#58B7E7",
                              tt: "uppercase",
                              fw: 900,
                            },
                            children: t(
                              "index.benefits.items.item5.title",
                              "Charity FIRST"
                            ),
                          }),
                          (0, s.jsx)(p.Z, {
                            css: {
                              color: "#000",
                              fz: "$sm",
                              ff: "var(--font-secondary)",
                            },
                            children: t(
                              "index.benefits.items.item5.text",
                              "Global charity and research initiatives that will drive attention of millions of people. $WATER aims to have a net-positive impact on real world with the help of charity."
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(m.Z, {
                    css: {
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 24,
                      maxW: "778px",
                      "@lg": {
                        maxW: "100%",
                        gridTemplateColumns: "repeat(1, 1fr)",
                        justifyItems: "center",
                      },
                    },
                    children: eo(t).map((e, t) =>
                      (0, s.jsxs)(
                        m.Z,
                        {
                          css: {
                            p: 22,
                            minH: 230,
                            bg: "#FFF",
                            border: "3px solid ".concat(e.color),
                            br: 14,
                            maxW: "370px",
                            boxShadow: "0px -5px 0px 0px ".concat(
                              e.color,
                              " inset"
                            ),
                          },
                          children: [
                            (0, s.jsx)(h.Z, {
                              src: "/images/index/benefits/".concat(
                                t + 1,
                                ".svg"
                              ),
                              alt: "icon",
                              width: 54,
                              height: 54,
                              css: { mb: 9 },
                            }),
                            (0, s.jsxs)(m.Z, {
                              css: { maxW: 312 },
                              children: [
                                (0, s.jsx)(p.Z, {
                                  css: {
                                    mb: 10,
                                    color: e.color,
                                    tt: "uppercase",
                                    fw: 900,
                                  },
                                  children: e.title,
                                }),
                                (0, s.jsx)(p.Z, {
                                  css: {
                                    color: "#000",
                                    fz: "$sm",
                                    ff: "var(--font-secondary)",
                                  },
                                  children: e.text,
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      let ec = (0, r.zo)("div", { position: "relative", mb: "150px" });
      var ex = (e) => {
        let {} = e,
          { t, i18n: i } = (0, g.$G)(),
          n = (0, f.Z)(r.BC.md),
          a = (0, f.Z)(r.BC.xl),
          o = n
            ? "" === i.language
              ? "/images/index/tokenomics/bg-mob-en.png"
              : "/images/index/tokenomics/bg-mob-".concat(i.language, ".png")
            : "" === i.language
            ? "/images/index/tokenomics/bg-en.png"
            : "/images/index/tokenomics/bg-".concat(i.language, ".png");
        return (0, s.jsxs)(ec, {
          children: [
            (0, s.jsx)(m.Z, {
              css: {
                pos: "relative",
                w: "100%",
                maxW: "1675px",
                minHeight: "1338px",
                m: "0 auto 100px",
                "@xl": { minHeight: "1000px" },
                "@lg": { minHeight: "800px" },
                "@md": { minHeight: "1460px" },
              },
              children: (0, s.jsx)(h.Z, {
                loading: "eager",
                unoptimized: !0,
                src: o,
                alt: "bg",
                ...(n
                  ? { width: 375, height: 1577 }
                  : { width: 1645, height: 1338 }),
                css: {
                  position: "absolute",
                  maxW: "1675px",
                  t: 0,
                  "@md": { maxW: "375px", l: 0, r: 0, m: "auto" },
                },
              }),
            }),
            (0, s.jsx)(d.ZP, {
              children: (0, s.jsxs)(m.Z, {
                css: {
                  position: "relative",
                  br: "30px",
                  minH: 355,
                  d: "flex",
                  ai: "center",
                  "@xl": { fd: "column", pt: 30, minH: "500px" },
                },
                children: [
                  (0, s.jsx)(I, {
                    css: {
                      color: "#FFF",
                      zi: 2,
                      position: "relative",
                      p: "0 60px",
                      textShadow: "3px 5px 0px #375E8B",
                      fz: "96px",
                      "@xl": { ta: "center" },
                      "@md": { fz: "48px" },
                    },
                    children: t(
                      "index.tokenomics.presale",
                      "Presale Breakdown"
                    ),
                  }),
                  (0, s.jsx)(h.Z, {
                    src: a
                      ? "/images/index/tokenomics/bg-block-mob.png"
                      : "/images/index/tokenomics/bg-block.png",
                    alt: "bg",
                    fill: !0,
                  }),
                  (0, s.jsx)(h.Z, {
                    src:
                      "" === i.language
                        ? "/images/index/tokenomics/percentage-en.png"
                        : "/images/index/tokenomics/percentage-".concat(
                            i.language,
                            ".png"
                          ),
                    alt: "bg",
                    width: 569,
                    height: 558,
                    css: {
                      zi: 2,
                      position: "relative",
                      pos: "absolute",
                      r: 80,
                      "@xl": {
                        r: 0,
                        l: 0,
                        m: "auto",
                        maxW: "450px",
                        b: "-100px",
                      },
                    },
                  }),
                ],
              }),
            }),
          ],
        });
      };
      let ed = (0, r.zo)("div", { mb: "102px" });
      var ep = (e) => {
        let {} = e,
          { t } = (0, g.$G)();
        return (0, s.jsx)(ed, {
          id: "faq",
          children: (0, s.jsx)(d.ZP, {
            children: (0, s.jsxs)(m.Z, {
              css: { d: "flex", ai: "center", jc: "center", fd: "column" },
              children: [
                (0, s.jsx)(h.Z, {
                  src: "/images/index/questions/img.svg",
                  alt: "image",
                  width: 112,
                  height: 166,
                  css: { mb: "28px" },
                }),
                (0, s.jsx)(I, {
                  centered: !0,
                  noStroke: !0,
                  color: "titleSecondary",
                  css: { maxW: 653, w: "100%", mb: 24, tt: "uppercase" },
                  children: t("index.questions.title", "Have A questions?"),
                }),
                (0, s.jsx)(p.Z, {
                  centered: !0,
                  css: { color: "#2A4C75", maxW: "385px", w: "100%", mb: 32 },
                  children: t(
                    "index.questions.text",
                    "More of detailed information can also be found in our Wiki here"
                  ),
                }),
                (0, s.jsx)(G.Z, {
                  href: "https://wiki.watercoin.wtf",
                  isExternal: !0,
                  css: {
                    m: "0 auto",
                    br: 12,
                    border: "3px solid $black",
                    boxShadow: "0px -5px 0px 0px #000 inset",
                    textTransform: "uppercase",
                    color: "$black",
                    p: "0px 10px",
                    bg: "$white",
                    d: "flex",
                    ai: "center",
                    minH: "62px",
                  },
                  children: (0, s.jsx)(p.Z, {
                    css: { color: "$black", fw: 700 },
                    children: t("common.wiki", "$Water WIKI"),
                  }),
                }),
              ],
            }),
          }),
        });
      };
      let em = (0, r.zo)("div", { mb: 170, "@sm": { mb: 70 } }),
        eh = (0, r.zo)("div", {
          border: "1px solid #40BEFF",
          br: 14,
          maxW: "670px",
          w: "100%",
          p: "76px 29px 28px",
          d: "flex",
          fd: "column",
          ai: "center",
          "@sm": { p: "40px 25px 10px" },
        }),
        eg = (0, r.zo)("div", { br: 14, w: "100%", p: "24px" }),
        ef = (0, r.zo)("div", {
          d: "flex",
          gap: 21,
          ai: "center",
          "@sm": { gap: 12 },
        });
      var eu = i(1364);
      let eb = (0, r.zo)("div", { w: "100%" }),
        ew = (0, r.zo)("video", { w: "100%", overflow: "hidden" }),
        ej = (e) => {
          var t;
          let i = e.split("."),
            s = null !== (t = i[i.length - 1]) && void 0 !== t ? t : "mp4";
          return "video/".concat(s);
        };
      function ey(e) {
        let { source: t, loading: i = "lazy", lazyBoundary: r = 100, ...n } = e,
          { ref: a, inView: o } = (0, eu.YD)({ delay: 500 }),
          [l, c] = (0, k.useState)("lazy" !== i);
        return (
          (0, k.useEffect)(() => {
            !l && o && c(!0);
          }, [o]),
          (0, s.jsx)(eb, {
            ref: a,
            children: (0, s.jsxs)(ew, {
              autoPlay: !0,
              loop: !0,
              muted: !0,
              playsInline: !0,
              css: { br: "16px" },
              ...n,
              children: [
                Array.isArray(t) &&
                  t.length &&
                  l &&
                  t.map((e, t) =>
                    (0, s.jsx)("source", { src: e, type: ej(e) }, t)
                  ),
                "string" == typeof t &&
                  l &&
                  (0, s.jsx)("source", { src: t, type: ej(t) }),
                "Your browser does not support the video tag.",
              ],
            }),
          })
        );
      }
      var ev = (e) => {
        let {} = e,
          { t } = (0, g.$G)();
        return (0, s.jsx)(em, {
          children: (0, s.jsxs)(d.ZP, {
            children: [
              (0, s.jsx)(I, {
                centered: !0,
                css: { mb: 20, textTransform: "uppercase", maxW: 850 },
                children: (0, s.jsxs)(g.cC, {
                  i18nKey: "index.supply.title",
                  children: [
                    "Supply Dynamics:",
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)("span", { children: "The States of Water" }),
                  ],
                }),
              }),
              (0, s.jsx)(p.Z, {
                color: "titleSecondary",
                centered: !0,
                css: {
                  maxW: 612,
                  w: "100%",
                  mb: 65,
                  ff: "var(--font-secondary)",
                },
                children: t(
                  "index.supply.text",
                  "$WATER introduces a unique and engaging game mechanic inspired by the states of water—staking (icing) and burning (vaporizing)."
                ),
              }),
              (0, s.jsxs)(m.Z, {
                css: {
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 34,
                  "@xl": { d: "flex", fd: "column", gap: 16 },
                },
                children: [
                  (0, s.jsxs)(eh, {
                    css: { ml: "auto", "@xl": { m: "0 auto" } },
                    children: [
                      (0, s.jsx)(h.Z, {
                        src: "/images/index/supply/ice.svg",
                        alt: "ice",
                        width: 176,
                        height: 157,
                      }),
                      (0, s.jsx)(I, {
                        centered: !0,
                        css: {
                          mb: 17,
                          mt: 35,
                          textTransform: "uppercase",
                          maxW: 850,
                          fz: 40,
                          "@sm": { fz: 30 },
                        },
                        children: t(
                          "index.supply.block1.title",
                          "Freezing (Staking)"
                        ),
                      }),
                      (0, s.jsx)(p.Z, {
                        centered: !0,
                        css: {
                          maxW: 550,
                          w: "100%",
                          mb: 37,
                          ff: "var(--font-secondary)",
                          fz: 20,
                          color: "#2A4C75",
                          mt: 0,
                          "@sm": { fz: 16 },
                        },
                        children: t(
                          "index.supply.block1.text",
                          "Just as water turns into ice when it gets cold, $WATER tokens can be staked (iced) to earn rewards. Stakers are rewarded with additional $WATER tokens over time, simulating the process of accumulating ice"
                        ),
                      }),
                      (0, s.jsxs)(eg, {
                        css: { bg: "rgba(146, 100, 192, 0.13)", mb: 6 },
                        children: [
                          (0, s.jsx)(p.Z, {
                            css: {
                              w: "100%",
                              mb: 18,
                              fz: 24,
                              color: "#2A4C75",
                              tt: "uppercase",
                              fw: 800,
                            },
                            children: t("common.mechanism", "Mechanism"),
                          }),
                          (0, s.jsxs)(m.Z, {
                            css: { d: "flex", fd: "column", gap: 18 },
                            children: [
                              (0, s.jsxs)(ef, {
                                children: [
                                  (0, s.jsx)(h.Z, {
                                    src: "/images/index/supply/1.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(p.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block1.mechanism.text1",
                                      "Users stake $WATER tokens for a specified period."
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)(ef, {
                                children: [
                                  (0, s.jsx)(h.Z, {
                                    src: "/images/index/supply/2.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(p.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block1.mechanism.text2",
                                      "The longer the staking period, the higher the rewards."
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)(ef, {
                                children: [
                                  (0, s.jsx)(h.Z, {
                                    src: "/images/index/supply/3.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(p.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block1.mechanism.text3",
                                      "Staking rewards are distributed from the community rewards pool."
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)(eg, {
                        css: { bg: "rgba(100, 154, 192, 0.13)", mb: 6 },
                        children: [
                          (0, s.jsx)(p.Z, {
                            css: {
                              w: "100%",
                              mb: 18,
                              fz: 24,
                              color: "#2A4C75",
                              tt: "uppercase",
                              fw: 800,
                            },
                            children: t("common.simpleMath", "Simple Math"),
                          }),
                          (0, s.jsxs)(m.Z, {
                            css: { d: "flex", fd: "column", gap: 18 },
                            children: [
                              (0, s.jsxs)(ef, {
                                children: [
                                  (0, s.jsx)(h.Z, {
                                    src: "/images/index/supply/4.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(p.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block2.mechanism.text1",
                                      "4.5% total allocated for a year between 3 pools: daily, weekly, and monthly"
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)(ef, {
                                children: [
                                  (0, s.jsx)(h.Z, {
                                    src: "/images/index/supply/5.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(p.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block2.mechanism.text2",
                                      "At 20% of the presale tokens evenly staked to these pools, users will get 50% APR"
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)(m.Z, {
                            css: {
                              border: "1px dashed #3AA3F4",
                              mt: "21px",
                              p: "10px",
                              br: 30,
                              bg: "#FFF",
                            },
                            children: (0, s.jsx)(p.Z, {
                              css: {
                                fz: "18px",
                                ta: "center",
                                fw: 900,
                                color: "#2A4C75",
                                tt: "uppercase",
                                "@sm": { fz: 16 },
                              },
                              children: (0, s.jsxs)(g.cC, {
                                i18nKey: "common.aprFormula",
                                children: [
                                  "APR =",
                                  " ",
                                  (0, s.jsx)("span", {
                                    style: { color: "#B55AD5" },
                                    children: "% total staking rewards",
                                  }),
                                  " ",
                                  "/",
                                  " ",
                                  (0, s.jsx)("span", {
                                    style: { color: "#66DD7C" },
                                    children: "% of total supply",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)(eh, {
                    css: { mr: "auto", "@xl": { m: "0 auto" } },
                    children: [
                      (0, s.jsx)(h.Z, {
                        src: "/images/index/supply/ice2.svg",
                        alt: "ice",
                        width: 176,
                        height: 157,
                      }),
                      (0, s.jsx)(I, {
                        centered: !0,
                        css: {
                          mb: 17,
                          mt: 35,
                          textTransform: "uppercase",
                          maxW: 850,
                          fz: 40,
                          "@sm": { fz: 30 },
                        },
                        children: t(
                          "index.supply.block2.title",
                          "Vaporizing (Burning)"
                        ),
                      }),
                      (0, s.jsx)(p.Z, {
                        color: "titleSecondary",
                        centered: !0,
                        css: {
                          maxW: 550,
                          w: "100%",
                          mb: 37,
                          ff: "var(--font-secondary)",
                          fz: 20,
                          color: "#2A4C75",
                          mt: 0,
                          "@sm": { fz: 16 },
                        },
                        children: t(
                          "index.supply.block2.text",
                          "When water is heated, it turns into vapor and disappears. Similarly, $WATER tokens can be burned (vaporized) to reduce the total supply, increasing scarcity and potentially the value of the remaining tokens."
                        ),
                      }),
                      (0, s.jsxs)(eg, {
                        css: { bg: "rgba(100, 192, 109, 0.13)" },
                        children: [
                          (0, s.jsx)(p.Z, {
                            css: {
                              w: "100%",
                              mb: 18,
                              fz: 24,
                              color: "#2A4C75",
                              tt: "uppercase",
                              fw: 800,
                              "@sm": { fz: 16 },
                            },
                            children: t("common.mechanism", "Mechanism"),
                          }),
                          (0, s.jsxs)(m.Z, {
                            css: { d: "flex", fd: "column", gap: 18 },
                            children: [
                              (0, s.jsxs)(ef, {
                                children: [
                                  (0, s.jsx)(h.Z, {
                                    src: "/images/index/supply/6.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(p.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block3.mechanism.text1",
                                      "Users can send $WATER tokens to burn contract"
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)(ef, {
                                css: { ai: "flex-start" },
                                children: [
                                  (0, s.jsx)(h.Z, {
                                    src: "/images/index/supply/7.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(p.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block3.mechanism.text2",
                                      "Every week, 25% of these tokens burned, 25% sent to charity, and 50% are rained (raffled) among all participants giving them back from 0.1x to 10x of tokens they burned (with 2 times higher odds for getting less than 1x)"
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(m.Z, {
                        css: { mt: 47 },
                        children: (0, s.jsx)(ey, {
                          source: "/images/index/supply/video.mp4",
                          poster: "/images/index/supply/poster.png",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      let ek = (0, r.zo)("div", { p: "12px 0", bg: "#2A4C75" });
      var eZ = i(9507),
        ez = (e) => {
          let {} = e,
            { t } = (0, g.$G)();
          return (0, s.jsx)(ek, {
            children: (0, s.jsx)(eZ.Z, {
              children: [...Array(100)].map((e, i) =>
                (0, s.jsx)(
                  m.Z,
                  {
                    css: { mr: 24, d: "flex", ai: "center", gap: 24 },
                    children: (0, s.jsxs)(m.Z, {
                      css: { d: "flex", ai: "center" },
                      children: [
                        (0, s.jsx)(p.Z, {
                          css: {
                            fz: 15,
                            textTransform: "uppercase",
                            fw: 900,
                            mr: 5,
                          },
                          children: t("index.marquee.text", "Rehydrate"),
                        }),
                        (0, s.jsx)(h.Z, {
                          src: "/images/favicon.ico",
                          alt: "glass",
                          width: 27,
                          height: 27,
                          priority: !0,
                          loading: "eager",
                          unoptimized: !0,
                        }),
                      ],
                    }),
                  },
                  i
                )
              ),
            }),
          });
        },
        eS = (e) => {
          let {} = e,
            { t } = (0, g.$G)();
          return (0, s.jsxs)(m.Z, {
            css: { w: "100%", maxW: "397px", "@xl": { maxW: "100%" } },
            children: [
              (0, s.jsxs)(m.Z, {
                css: {
                  w: "100%",
                  bg: "#FFF",
                  border: "3px solid #000",
                  br: "12px",
                  d: "flex",
                  fd: "column",
                  ai: "center",
                  p: "81px 10px 30px",
                  mb: 23,
                  pos: "relative",
                },
                children: [
                  (0, s.jsx)(h.Z, {
                    src: "/images/index/buy/right/question-icon.svg",
                    alt: "img",
                    width: 96,
                    height: 96,
                  }),
                  (0, s.jsx)(p.Z, {
                    css: {
                      textTransform: "uppercase",
                      color: "#000",
                      fz: "36px",
                      fw: 900,
                      mb: "10px",
                      ta: "center",
                      mt: 55,
                    },
                    children: t("index.buy.right.title", "how to buy?"),
                  }),
                  (0, s.jsx)(p.Z, {
                    css: {
                      maxW: 260,
                      color: "#000",
                      ff: "var(--font-rubik)",
                      fz: "18px",
                      fw: 500,
                      mb: "18px",
                      ta: "center",
                    },
                    children: t(
                      "index.buy.right.subtitle",
                      "We create a special WIKI where you can find any answers"
                    ),
                  }),
                  (0, s.jsx)(G.Z, {
                    href: "https://wiki.watercoin.wtf/",
                    isExternal: !0,
                    target: "_blank",
                    css: {
                      br: 12,
                      border: "3px solid $black",
                      boxShadow: "0px -5px 0px 0px #000 inset",
                      textTransform: "uppercase",
                      p: "0px 10px",
                      bg: "#FFF",
                      d: "flex",
                      ai: "center",
                      minH: "62px",
                      mb: 30,
                    },
                    children: (0, s.jsx)(p.Z, {
                      css: { color: "#000", fw: 700 },
                      children: "$water WIKI",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(m.Z, {
                css: {
                  bg: "#FFF",
                  p: "11px 25px",
                  border: "3px solid #000",
                  br: "12px",
                  d: "flex",
                  ai: "center",
                  jc: "center",
                  ta: "center",
                  fd: "column",
                },
                children: [
                  (0, s.jsx)(h.Z, {
                    src: "/images/index/buy/right/sol-icon.png",
                    alt: "sol",
                    width: 32,
                    height: 34,
                    css: { mb: "10px" },
                  }),
                  (0, s.jsx)(p.Z, {
                    css: {
                      fz: "24px",
                      color: "#000",
                      ff: "var(--font-rubik)",
                      mb: 5,
                      fw: 500,
                    },
                    children: t(
                      "index.buy.right.addressTitle",
                      "Smart contract address:"
                    ),
                  }),
                  (0, s.jsx)(p.Z, {
                    css: {
                      fz: "16px",
                      ff: "var(--font-rubik)",
                      m: "0px auto 16px",
                      fw: 500,
                      maxW: "270px",
                      color: "#000",
                      wordBreak: "break-all",
                    },
                    children: "B6h248NJkAcBAkaCnji889a26tCiGXGN8cxhEJ4dX391",
                  }),
                  (0, s.jsx)(p.Z, {
                    css: {
                      fz: "14px",
                      color: "#FB0000",
                      ff: "var(--font-rubik)",
                      fw: 500,
                    },
                    children: t(
                      "index.buy.right.addressText",
                      "*Not for buying the coin. Don't send anything to it or they will be lost forever."
                    ),
                  }),
                ],
              }),
            ],
          });
        },
        eW = (e) => {
          let {} = e,
            { t } = (0, g.$G)();
          return (0, s.jsxs)(m.Z, {
            css: { w: "100%", maxW: "397px", "@xl": { maxW: "100%" } },
            children: [
              (0, s.jsxs)(m.Z, {
                css: {
                  w: "100%",
                  bg: "#98D5FB",
                  border: "3px solid #000",
                  br: "12px",
                  d: "flex",
                  fd: "column",
                  ai: "center",
                  p: "74px 10px 30px",
                  mb: 23,
                },
                children: [
                  (0, s.jsx)(h.Z, {
                    src: "/images/index/buy/left/icon.svg",
                    alt: "img",
                    width: 96,
                    height: 96,
                    css: { mb: 56 },
                  }),
                  (0, s.jsx)(p.Z, {
                    css: {
                      textTransform: "uppercase",
                      color: "#000",
                      fz: "36px",
                      fw: 900,
                      mb: "10px",
                      ta: "center",
                    },
                    children: t("index.buy.left.title", "BUY on Dex"),
                  }),
                  (0, s.jsx)(p.Z, {
                    css: {
                      color: "#000",
                      ff: "var(--font-rubik)",
                      fz: "18px",
                      fw: 500,
                      mb: "16px",
                      ta: "center",
                    },
                    children: t(
                      "index.buy.left.subtitle",
                      "Use your Phantom wallet and connect to Raydium or Jupiter to buy $WATER"
                    ),
                  }),
                  (0, s.jsxs)(G.Z, {
                    href: "https://raydium.io/swap/?inputMint=sol&outputMint=B6h248NJkAcBAkaCnji889a26tCiGXGN8cxhEJ4dX391",
                    isExternal: !0,
                    target: "_blank",
                    css: {
                      br: 12,
                      border: "3px solid $black",
                      boxShadow: "0px -5px 0px 0px #000 inset",
                      textTransform: "uppercase",
                      p: "0px 10px",
                      bg: "#8F46EB",
                      d: "flex",
                      ai: "center",
                      minH: "62px",
                      mb: 13,
                    },
                    children: [
                      (0, s.jsx)(h.Z, {
                        src: "/images/index/buy/left/raydium.png",
                        alt: "raydium",
                        width: 34,
                        height: 34,
                        css: { mr: "7px" },
                      }),
                      (0, s.jsx)(p.Z, {
                        withBlackStroke: !0,
                        fontWeight: 700,
                        children: "raydium",
                      }),
                    ],
                  }),
                  (0, s.jsxs)(G.Z, {
                    href: "https://www.okx.com/web3/dex-swap#inputChain=501&inputCurrency=11111111111111111111111111111111&outputChain=501&outputCurrency=B6h248NJkAcBAkaCnji889a26tCiGXGN8cxhEJ4dX391",
                    isExternal: !0,
                    target: "_blank",
                    css: {
                      br: 12,
                      border: "3px solid $black",
                      boxShadow: "0px -5px 0px 0px #000 inset",
                      textTransform: "uppercase",
                      p: "0px 10px",
                      bg: "#000",
                      d: "flex",
                      ai: "center",
                      minH: "62px",
                      mb: 13,
                    },
                    children: [
                      (0, s.jsx)(h.Z, {
                        src: "/images/index/buy/okx.svg",
                        alt: "okx",
                        width: 34,
                        height: 34,
                        css: { mr: "7px" },
                      }),
                      (0, s.jsx)(p.Z, {
                        withBlackStroke: !0,
                        fontWeight: 700,
                        children: "OKX DEX",
                      }),
                    ],
                  }),
                  (0, s.jsxs)(G.Z, {
                    href: "https://jup.ag/swap/SOL-B6h248NJkAcBAkaCnji889a26tCiGXGN8cxhEJ4dX391",
                    isExternal: !0,
                    css: {
                      br: 12,
                      border: "3px solid $black",
                      boxShadow: "0px -5px 0px 0px #000 inset",
                      textTransform: "uppercase",
                      p: "0px 10px",
                      bg: "#42AA91",
                      d: "flex",
                      ai: "center",
                      minH: "62px",
                    },
                    children: [
                      (0, s.jsx)(h.Z, {
                        src: "/images/index/buy/left/jup.png",
                        alt: "jupiter",
                        width: 34,
                        height: 34,
                        css: { mr: "7px" },
                      }),
                      (0, s.jsx)(p.Z, {
                        withBlackStroke: !0,
                        fontWeight: 700,
                        children: "Jupiter",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)(m.Z, {
                css: {
                  d: "flex",
                  ai: "center",
                  w: "100%",
                  jc: "center",
                  mb: 23,
                },
                children: [
                  (0, s.jsx)(h.Z, {
                    src: "/images/index/buy/left/eye.svg",
                    alt: "eye",
                    width: 24,
                    height: 24,
                    css: { mr: "5px" },
                  }),
                  (0, s.jsx)(p.Z, {
                    css: {
                      fw: 700,
                      color: "#3AA3F4",
                      textTransform: "uppercase",
                    },
                    children: t("index.buy.left.track", "Track $water CHART:"),
                  }),
                ],
              }),
              (0, s.jsxs)(G.Z, {
                href: "https://www.dextools.io/app/en/solana/pair-explorer/2c9F3UnMBxftqeSmsSCBw5yXjwD9hXFsMLXti9mqTwpr?t=1719242072664",
                isExternal: !0,
                target: "_blank",
                css: {
                  br: 12,
                  border: "3px solid $black",
                  boxShadow: "0px -5px 0px 0px #000 inset",
                  textTransform: "uppercase",
                  p: "0px 10px",
                  bg: "#FFF",
                  d: "flex",
                  ai: "center",
                  minH: "62px",
                  w: "100%",
                  mb: "13px",
                  maxW: "371px",
                  "@xl": { maxW: "calc(100% - 26px)" },
                },
                children: [
                  (0, s.jsx)(h.Z, {
                    src: "/images/index/buy/left/dextools.svg",
                    alt: "raydium",
                    width: 26,
                    height: 28,
                    css: { mr: "7px" },
                  }),
                  (0, s.jsx)(p.Z, {
                    color: "black",
                    fontWeight: 700,
                    children: "dextools",
                  }),
                ],
              }),
              (0, s.jsxs)(G.Z, {
                href: "https://dexscreener.com/solana/2c9f3unmbxftqesmsscbw5yxjwd9hxfsmlxti9mqtwpr",
                isExternal: !0,
                target: "_blank",
                css: {
                  br: 12,
                  border: "3px solid $black",
                  boxShadow: "0px -5px 0px 0px #000 inset",
                  textTransform: "uppercase",
                  p: "0px 10px",
                  bg: "#FFF",
                  d: "flex",
                  ai: "center",
                  minH: "62px",
                  w: "100%",
                  maxW: "371px",
                  "@xl": { maxW: "calc(100% - 26px)" },
                },
                children: [
                  (0, s.jsx)(h.Z, {
                    src: "/images/index/buy/left/dexscreener.svg",
                    alt: "raydium",
                    width: 34,
                    height: 34,
                    css: { mr: "7px" },
                  }),
                  (0, s.jsx)(p.Z, {
                    color: "black",
                    fontWeight: 700,
                    children: "dexscreener",
                  }),
                ],
              }),
            ],
          });
        },
        e$ = (e) => {
          let {} = e,
            { t } = (0, g.$G)();
          return (0, s.jsx)(m.Z, {
            css: { w: "100%", maxW: "623px", "@xl": { maxW: "100%" } },
            children: (0, s.jsxs)(m.Z, {
              css: {
                w: "100%",
                bg: "rgba(100, 154, 192, 0.20)",
                border: "3px solid #000",
                br: "12px",
                d: "flex",
                fd: "column",
                ai: "center",
                p: "78px 10px 70px",
                mb: 23,
              },
              children: [
                (0, s.jsx)(h.Z, {
                  src: "/images/index/buy/center/icon.svg",
                  alt: "img",
                  width: 102,
                  height: 113,
                  css: { mb: 32 },
                }),
                (0, s.jsx)(p.Z, {
                  css: {
                    textTransform: "uppercase",
                    color: "#000",
                    fz: "36px",
                    fw: 900,
                    mb: "10px",
                    ta: "center",
                  },
                  children: t("index.buy.center.title", "Buy On CEX"),
                }),
                (0, s.jsx)(p.Z, {
                  css: {
                    color: "#000",
                    ff: "var(--font-rubik)",
                    fz: "18px",
                    fw: 500,
                    mb: "55px",
                    ta: "center",
                  },
                  children: t(
                    "index.buy.center.subtitle",
                    "$WATER will be Listed on most popular CEXes"
                  ),
                }),
                (0, s.jsxs)(m.Z, {
                  css: {
                    d: "flex",
                    flexWrap: "wrap",
                    gap: "18px",
                    jc: "center",
                  },
                  children: [
                    (0, s.jsxs)(G.Z, {
                      target: "_blank",
                      href: "https://www.bitget.com/spot/WATERUSDT",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#52CAD2",
                        d: "flex",
                        ai: "center",
                        minH: "62px",
                      },
                      children: [
                        (0, s.jsx)(h.Z, {
                          src: "/images/index/buy/bitget.png",
                          alt: "bitget",
                          width: 34,
                          height: 34,
                          css: { mr: "7px" },
                        }),
                        (0, s.jsx)(p.Z, {
                          withBlackStroke: !0,
                          css: { fontWeight: 900 },
                          children: "BItGET",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(G.Z, {
                      target: "_blank",
                      href: "https://www.mexc.com/exchange/WATER_USDT?_from=search_spot_trade",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#4380FF",
                        d: "flex",
                        ai: "center",
                        minH: "62px",
                      },
                      children: [
                        (0, s.jsx)(h.Z, {
                          src: "/images/index/buy/mexc.svg",
                          alt: "mexc",
                          width: 34,
                          height: 34,
                          css: { mr: "7px" },
                        }),
                        (0, s.jsx)(p.Z, {
                          withBlackStroke: !0,
                          css: { fontWeight: 900 },
                          children: "mexc",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(G.Z, {
                      target: "_blank",
                      href: "https://www.bitmart.com/trade/en-US?symbol=WATER_USDT",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        d: "flex",
                        ai: "center",
                        minH: "62px",
                      },
                      children: [
                        (0, s.jsx)(h.Z, {
                          src: "/images/index/buy/bitmart.png",
                          alt: "bitmart",
                          width: 34,
                          height: 34,
                          css: { mr: "7px" },
                        }),
                        (0, s.jsx)(p.Z, {
                          withBlackStroke: !0,
                          css: { fontWeight: 900 },
                          children: "Bitmart",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(G.Z, {
                      target: "_blank",
                      href: "https://www.gate.io/trade/WATERSOL_USDT",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#5276D2",
                        d: "flex",
                        ai: "center",
                        minH: "62px",
                      },
                      children: [
                        (0, s.jsx)(h.Z, {
                          src: "/images/index/buy/gateio.png",
                          alt: "gateio",
                          width: 34,
                          height: 34,
                          css: { mr: "7px" },
                        }),
                        (0, s.jsx)(p.Z, {
                          withBlackStroke: !0,
                          css: { fontWeight: 900 },
                          children: "Gate.IO",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(G.Z, {
                      href: "https://bingx.com/en/spot/WATERUSDT/",
                      isExternal: !0,
                      target: "_blank",
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#384BF5",
                        d: "flex",
                        ai: "center",
                        minH: "62px",
                      },
                      children: [
                        (0, s.jsx)(h.Z, {
                          src: "/images/index/buy/bing.png",
                          alt: "jupiter",
                          width: 34,
                          height: 34,
                          css: { mr: "7px" },
                        }),
                        (0, s.jsx)(p.Z, {
                          withBlackStroke: !0,
                          children: "BingX",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(G.Z, {
                      href: "soon",
                      target: "_blank",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#FA9D48",
                        d: "none",
                        ai: "center",
                        minH: "62px",
                      },
                      children: [
                        (0, s.jsx)(h.Z, {
                          src: "/images/index/buy/bybit.png",
                          alt: "bybit",
                          width: 34,
                          height: 34,
                          css: { mr: "7px" },
                        }),
                        (0, s.jsx)(p.Z, {
                          withBlackStroke: !0,
                          css: { fontWeight: 900 },
                          children: "Bybit",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(G.Z, {
                      href: "soon",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#8CC63F",
                        d: "none",
                        ai: "center",
                        minH: "62px",
                      },
                      children: [
                        (0, s.jsx)(h.Z, {
                          src: "/images/index/buy/bitpanda.svg",
                          alt: "bitpanda",
                          width: 34,
                          height: 20,
                          css: { mr: "7px" },
                        }),
                        (0, s.jsx)(p.Z, {
                          withBlackStroke: !0,
                          css: { fontWeight: 900 },
                          children: "Bitpanda",
                        }),
                      ],
                    }),
                    (0, s.jsx)(G.Z, {
                      href: "",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#D8E7EF",
                        d: "flex",
                        ai: "center",
                        minH: "62px",
                      },
                      children: (0, s.jsx)(p.Z, {
                        withBlackStroke: !0,
                        css: { fontWeight: 900 },
                        children: "TBA",
                      }),
                    }),
                    (0, s.jsx)(G.Z, {
                      href: "",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#D8E7EF",
                        d: "flex",
                        ai: "center",
                        minH: "62px",
                      },
                      children: (0, s.jsx)(p.Z, {
                        withBlackStroke: !0,
                        css: { fontWeight: 900 },
                        children: "TBA",
                      }),
                    }),
                    (0, s.jsx)(G.Z, {
                      href: "",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#D8E7EF",
                        d: "flex",
                        ai: "center",
                        minH: "62px",
                      },
                      children: (0, s.jsx)(p.Z, {
                        withBlackStroke: !0,
                        css: { fontWeight: 900 },
                        children: "TBA",
                      }),
                    }),
                    (0, s.jsx)(G.Z, {
                      href: "",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#D8E7EF",
                        d: "flex",
                        ai: "center",
                        minH: "62px",
                      },
                      children: (0, s.jsx)(p.Z, {
                        withBlackStroke: !0,
                        css: { fontWeight: 900 },
                        children: "TBA",
                      }),
                    }),
                    (0, s.jsx)(G.Z, {
                      href: "",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#D8E7EF",
                        d: "flex",
                        ai: "center",
                        minH: "62px",
                      },
                      children: (0, s.jsx)(p.Z, {
                        withBlackStroke: !0,
                        css: { fontWeight: 900 },
                        children: "TBA",
                      }),
                    }),
                    (0, s.jsx)(G.Z, {
                      href: "",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#D8E7EF",
                        d: "flex",
                        ai: "center",
                        minH: "62px",
                      },
                      children: (0, s.jsx)(p.Z, {
                        withBlackStroke: !0,
                        css: { fontWeight: 900 },
                        children: "TBA",
                      }),
                    }),
                    (0, s.jsx)(G.Z, {
                      href: "",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#D8E7EF",
                        d: "flex",
                        ai: "center",
                        minH: "62px",
                      },
                      children: (0, s.jsx)(p.Z, {
                        withBlackStroke: !0,
                        css: { fontWeight: 900 },
                        children: "TBA",
                      }),
                    }),
                    (0, s.jsxs)(G.Z, {
                      href: "soon",
                      isExternal: !0,
                      css: {
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        bg: "#000",
                        ai: "center",
                        minH: "62px",
                        d: "none",
                      },
                      children: [
                        (0, s.jsx)(h.Z, {
                          src: "/images/index/buy/binance.svg",
                          alt: "binance",
                          width: 34,
                          height: 34,
                          css: { mr: "7px" },
                        }),
                        (0, s.jsx)(p.Z, {
                          withBlackStroke: !0,
                          css: { fontWeight: 900 },
                          children: "Binance",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        eE = (e) => {
          let {} = e;
          return (0, s.jsx)(m.Z, {
            id: "buy",
            css: { mb: 78, pos: "relative", zi: 2 },
            children: (0, s.jsx)(d.ZP, {
              children: (0, s.jsxs)(m.Z, {
                css: {
                  mt: -100,
                  p: "38px 67px",
                  d: "flex",
                  w: "100%",
                  jc: "space-between",
                  gap: "10px",
                  pos: "relative",
                  br: 21,
                  bg: "#F5FAFB",
                  boxShadow: "0px 4px 0px 0px #649AC0",
                  "@xl": { fd: "column", gap: 50 },
                  "@sm": { p: "38px 15px" },
                },
                children: [
                  (0, s.jsx)(h.Z, {
                    src: "/images/index/get/badge.svg",
                    width: 337,
                    height: 77,
                    responsive: !1,
                    alt: "badge",
                    css: {
                      pos: "absolute",
                      d: "inline-block",
                      t: -33,
                      l: -10,
                      zi: 2,
                    },
                  }),
                  (0, s.jsx)(eW, {}),
                  (0, s.jsx)(e$, {}),
                  (0, s.jsx)(eS, {}),
                ],
              }),
            }),
          });
        },
        eT = !0;
      function eF(e) {
        let {} = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(ez, {}),
            (0, s.jsx)(V, {}),
            (0, s.jsx)(ee, {}),
            (0, s.jsx)(eE, {}),
            (0, s.jsx)(el, {}),
            (0, s.jsx)(X, {}),
            (0, s.jsx)(J, {}),
            (0, s.jsx)(ex, {}),
            (0, s.jsx)(ev, {}),
            (0, s.jsx)(es, {}),
            (0, s.jsx)(U, {}),
            (0, s.jsx)(ep, {}),
            (0, s.jsx)(L, {}),
          ],
        });
      }
      eF.getLayout = function (e) {
        return (0, s.jsx)(A, {
          noPt: !0,
          bgColor: "#FFF",
          footerTextColor: "#737373",
          newHeader: !0,
          children: e,
        });
      };
    },
    2635: function (e, t, i) {
      "use strict";
      i.d(t, {
        y: function () {
          return s;
        },
      });
      let s = {
        fontWeight: {
          400: { fontWeight: 400 },
          500: { fontWeight: 500 },
          600: { fontWeight: 600 },
          700: { fontWeight: 700 },
        },
        textAlign: {
          center: { textAlign: "center" },
          left: { textAlign: "left" },
          right: { textAlign: "right" },
        },
        color: {
          main: { color: "$main" },
          titleSecondary: { color: "$titleSecondary" },
          textSecondary: { color: "$textSecondary" },
          white: { color: "$white" },
          black: { color: "$black" },
          green: { color: "$green" },
          placeholder: { color: "$text_secondary" },
          textGrey: { color: "$text_secondary" },
          titlePrimary: { color: "$titlePrimary" },
          greySecondary: { color: "$text_secondary" },
          red: { color: "$error" },
          error: { color: "$error" },
          def: { color: "$text_primary" },
          blue: { color: "$link" },
          highlightMain: { color: "$highlightMain" },
        },
        fontStyle: {
          normal: { fontStyle: "normal" },
          italic: { fontStyle: "italic" },
        },
        primaryFont: { true: { fontFamily: "var(--font-primary)" } },
        secondaryFont: { true: { fontFamily: "var(--font-secondary)" } },
        noStroke: { true: { "-webkit-text-stroke": "transparent" } },
        centered: { true: { m: "auto", ta: "center" } },
        withBlackStroke: {
          true: {
            "-webkit-text-stroke-width": "1px",
            "-webkit-text-stroke-color": "#000",
          },
        },
        withBlackStrokeTitle: {
          true: {
            "-webkit-text-stroke-width": "6px",
            "-webkit-text-stroke-color": "#010101",
          },
        },
        fontSize: {
          input: { fz: "$input" },
          xxxs: { fontSize: "$xxxs" },
          xxs: { fontSize: "$xxs" },
          xs: { fontSize: "$xs" },
          sm: { fontSize: "$sm" },
          md: { fontSize: "$md" },
          def: { fontSize: "$def" },
          lg: { fontSize: "$lg" },
          xl: { fontSize: "$xl" },
          xxl: { fontSize: "$xxl" },
          titleXs: { fontSize: "$titleXs" },
          titleSm: { fontSize: "$titleSm" },
          titleMd: { fontSize: "$titleMd", "@md": { fontSize: "$titleSm" } },
          titleDef: { fontSize: "$titleDef", "@md": { fontSize: "$titleSm" } },
          titleLg: { fontSize: "$titleLg", "@md": { fontSize: "$titleSm" } },
        },
        textTransform: {
          uppercase: { textTransform: "uppercase" },
          capitalize: { textTransform: "capitalize" },
        },
        cursor: { pointer: { cursor: "pointer" } },
      };
    },
    7953: function (e, t, i) {
      "use strict";
      i.d(t, {
        EF: function () {
          return r;
        },
        vl: function () {
          return n;
        },
      });
      var s = i(5271);
      function r(e) {
        let t = (0, s.useContext)(e);
        if (!t)
          throw Error("useContext must be used within the <ContextProvider>");
        return t;
      }
      i(5172);
      let n = (e) => {
        let t = e.slice(e.indexOf("?") + 1).split("&"),
          i = {};
        return (
          e.includes("?") &&
            t.map((e) => {
              let [t, s] = e.split("=");
              i[t] = decodeURIComponent(s);
            }),
          i
        );
      };
    },
  },
  function (e) {
    e.O(0, [729, 888, 774, 179], function () {
      return e((e.s = 8329));
    }),
      (_N_E = e.O());
  },
]);
