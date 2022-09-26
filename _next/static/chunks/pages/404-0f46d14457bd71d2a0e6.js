_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [31],
  {
    "97Is": function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/404",
        function () {
          return t("uNx/");
        },
      ]);
    },
    YFqc: function (e, n, t) {
      e.exports = t("cTJO");
    },
    cTJO: function (e, n, t) {
      "use strict";
      var r = t("zoAU"),
        o = t("7KCV");
      (n.__esModule = !0), (n.default = void 0);
      var a = o(t("q1tI")),
        c = t("elyg"),
        s = t("nOHt"),
        i = t("vNVm"),
        l = {};
      function u(e, n, t, r) {
        if (e && (0, c.isLocalURL)(n)) {
          e.prefetch(n, t, r).catch(function (e) {
            0;
          });
          var o =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          l[n + "%" + t + (o ? "%" + o : "")] = !0;
        }
      }
      var f = function (e) {
        var n = !1 !== e.prefetch,
          t = (0, s.useRouter)(),
          o = (t && t.pathname) || "/",
          f = a.default.useMemo(
            function () {
              var n = (0, c.resolveHref)(o, e.href, !0),
                t = r(n, 2),
                a = t[0],
                s = t[1];
              return {
                href: a,
                as: e.as ? (0, c.resolveHref)(o, e.as) : s || a,
              };
            },
            [o, e.href, e.as]
          ),
          d = f.href,
          p = f.as,
          v = e.children,
          h = e.replace,
          b = e.shallow,
          j = e.scroll,
          m = e.locale;
        "string" === typeof v && (v = a.default.createElement("a", null, v));
        var g = a.Children.only(v),
          x = g && "object" === typeof g && g.ref,
          O = (0, i.useIntersection)({ rootMargin: "200px" }),
          y = r(O, 2),
          N = y[0],
          E = y[1],
          _ = a.default.useCallback(
            function (e) {
              N(e),
                x &&
                  ("function" === typeof x
                    ? x(e)
                    : "object" === typeof x && (x.current = e));
            },
            [x, N]
          );
        (0, a.useEffect)(
          function () {
            var e = E && n && (0, c.isLocalURL)(d),
              r = "undefined" !== typeof m ? m : t && t.locale,
              o = l[d + "%" + p + (r ? "%" + r : "")];
            e && !o && u(t, d, p, { locale: r });
          },
          [p, d, E, m, n, t]
        );
        var w = {
          ref: _,
          onClick: function (e) {
            g.props &&
              "function" === typeof g.props.onClick &&
              g.props.onClick(e),
              e.defaultPrevented ||
                (function (e, n, t, r, o, a, s, i) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var n = e.currentTarget.target;
                      return (
                        (n && "_self" !== n) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, c.isLocalURL)(t))) &&
                    (e.preventDefault(),
                    null == s && (s = r.indexOf("#") < 0),
                    n[o ? "replace" : "push"](t, r, {
                      shallow: a,
                      locale: i,
                      scroll: s,
                    }).then(function (e) {
                      e && s && document.body.focus();
                    }));
                })(e, t, d, p, h, b, j, m);
          },
          onMouseEnter: function (e) {
            (0, c.isLocalURL)(d) &&
              (g.props &&
                "function" === typeof g.props.onMouseEnter &&
                g.props.onMouseEnter(e),
              u(t, d, p, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === g.type && !("href" in g.props))) {
          var L = "undefined" !== typeof m ? m : t && t.locale,
            M = (0, c.getDomainLocale)(
              p,
              L,
              t && t.locales,
              t && t.domainLocales
            );
          w.href =
            M ||
            (0, c.addBasePath)((0, c.addLocale)(p, L, t && t.defaultLocale));
        }
        return a.default.cloneElement(g, w);
      };
      n.default = f;
    },
    "uNx/": function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t("nKUr"),
        o = (t("q1tI"), t("YFqc")),
        a = t.n(o);
      n.default = function () {
        return Object(r.jsx)("div", {
          className: "error-area",
          children: Object(r.jsx)("div", {
            className: "d-table",
            children: Object(r.jsx)("div", {
              className: "d-table-cell",
              children: Object(r.jsx)("div", {
                className: "container",
                children: Object(r.jsxs)("div", {
                  className: "error-content",
                  children: [
                    Object(r.jsx)("img", {
                      src: "/images/error.png",
                      alt: "image",
                    }),
                    Object(r.jsx)("h3", {
                      children: "Error 404 : Page Not Found",
                    }),
                    Object(r.jsx)("p", {
                      children:
                        "The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
                    }),
                    Object(r.jsxs)("div", {
                      className: "btn-box",
                      children: [
                        Object(r.jsx)(a.a, {
                          href: "/",
                          children: Object(r.jsxs)("a", {
                            className: "default-btn",
                            children: [
                              Object(r.jsx)("i", {
                                className: "flaticon-history",
                              }),
                              " Go Back ",
                              Object(r.jsx)("span", {}),
                            ],
                          }),
                        }),
                        Object(r.jsx)(a.a, {
                          href: "/",
                          children: Object(r.jsxs)("a", {
                            className: "default-btn",
                            children: [
                              Object(r.jsx)("i", {
                                className: "flaticon-home",
                              }),
                              " Homepage ",
                              Object(r.jsx)("span", {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
    },
    vNVm: function (e, n, t) {
      "use strict";
      var r = t("zoAU"),
        o = t("AroE");
      (n.__esModule = !0),
        (n.useIntersection = function (e) {
          var n = e.rootMargin,
            t = e.disabled || !s,
            o = (0, a.useRef)(),
            l = (0, a.useState)(!1),
            u = r(l, 2),
            f = u[0],
            d = u[1],
            p = (0, a.useCallback)(
              function (e) {
                o.current && (o.current(), (o.current = void 0)),
                  t ||
                    f ||
                    (e &&
                      e.tagName &&
                      (o.current = (function (e, n, t) {
                        var r = (function (e) {
                            var n = e.rootMargin || "",
                              t = i.get(n);
                            if (t) return t;
                            var r = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var n = r.get(e.target),
                                    t =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  n && t && n(t);
                                });
                              }, e);
                            return (
                              i.set(
                                n,
                                (t = { id: n, observer: o, elements: r })
                              ),
                              t
                            );
                          })(t),
                          o = r.id,
                          a = r.observer,
                          c = r.elements;
                        return (
                          c.set(e, n),
                          a.observe(e),
                          function () {
                            c.delete(e),
                              a.unobserve(e),
                              0 === c.size && (a.disconnect(), i.delete(o));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && d(e);
                        },
                        { rootMargin: n }
                      )));
              },
              [t, n, f]
            );
          return (
            (0, a.useEffect)(
              function () {
                s ||
                  f ||
                  (0, c.default)(function () {
                    return d(!0);
                  });
              },
              [f]
            ),
            [p, f]
          );
        });
      var a = t("q1tI"),
        c = o(t("0G5g")),
        s = "undefined" !== typeof IntersectionObserver;
      var i = new Map();
    },
  },
  [["97Is", 1, 0, 2]],
]);
