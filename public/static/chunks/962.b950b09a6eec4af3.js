"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [962],
  {
    7962: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return a;
          },
        });
      var c = n(2676);
      n(5271);
      var r = n(2761),
        i = n(1422),
        p = n(3676),
        x = n(8412),
        t = n(3801),
        a = () => {
          let { toggleBar: e } = (0, x.Jv)();
          return (0, c.jsx)(p.im, {
            children: (0, c.jsx)(i.ZP, {
              moreWidth: !0,
              children: (0, c.jsxs)(t.Z, {
                css: {
                  d: "flex",
                  jc: "space-between",
                  ai: "center",
                  gap: 72,
                  bg: "#F5FAFB",
                  boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.25)",
                  br: "21px",
                  p: "22px 22px 22px 38px",
                  "@sm": { gap: 0, p: "13px 10px" },
                },
                children: [
                  (0, c.jsx)(t.Z, {
                    css: { d: "flex", ai: "center" },
                    children: (0, c.jsx)(r.Z, {
                      src: "/images/common/footer/logo.png",
                      alt: "logo",
                      width: 118,
                      height: 35,
                      css: { width: "118px" },
                    }),
                  }),
                  (0, c.jsx)(t.Z, {
                    css: { d: "flex", ai: "center", gap: "9px" },
                    children: (0, c.jsx)(r.Z, {
                      onClick: e,
                      src: "/images/common/navigation/menu.svg",
                      width: 41,
                      height: 44,
                      responsive: !1,
                      alt: "menu",
                      css: { cursor: "pointer" },
                    }),
                  }),
                ],
              }),
            }),
          });
        };
    },
  },
]);
