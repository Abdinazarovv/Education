_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [49],
  {
    ODXe: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                r = !0,
                a = !1,
                o = void 0;
              try {
                for (
                  var c, s = e[Symbol.iterator]();
                  !(r = (c = s.next()).done) &&
                  (n.push(c.value), !t || n.length !== t);
                  r = !0
                );
              } catch (i) {
                (a = !0), (o = i);
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (a) throw o;
                }
              }
              return n;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" === typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      n.d(t, "a", function () {
        return a;
      });
    },
    YFqc: function (e, t, n) {
      e.exports = n("cTJO");
    },
    cTJO: function (e, t, n) {
      "use strict";
      var r = n("zoAU"),
        a = n("7KCV");
      (t.__esModule = !0), (t.default = void 0);
      var o = a(n("q1tI")),
        c = n("elyg"),
        s = n("nOHt"),
        i = n("vNVm"),
        l = {};
      function u(e, t, n, r) {
        if (e && (0, c.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0;
          });
          var a =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          l[t + "%" + n + (a ? "%" + a : "")] = !0;
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, s.useRouter)(),
          a = (n && n.pathname) || "/",
          f = o.default.useMemo(
            function () {
              var t = (0, c.resolveHref)(a, e.href, !0),
                n = r(t, 2),
                o = n[0],
                s = n[1];
              return {
                href: o,
                as: e.as ? (0, c.resolveHref)(a, e.as) : s || o,
              };
            },
            [a, e.href, e.as]
          ),
          d = f.href,
          p = f.as,
          b = e.children,
          j = e.replace,
          m = e.shallow,
          v = e.scroll,
          h = e.locale;
        "string" === typeof b && (b = o.default.createElement("a", null, b));
        var y = o.Children.only(b),
          g = y && "object" === typeof y && y.ref,
          O = (0, i.useIntersection)({ rootMargin: "200px" }),
          x = r(O, 2),
          w = x[0],
          N = x[1],
          E = o.default.useCallback(
            function (e) {
              w(e),
                g &&
                  ("function" === typeof g
                    ? g(e)
                    : "object" === typeof g && (g.current = e));
            },
            [g, w]
          );
        (0, o.useEffect)(
          function () {
            var e = N && t && (0, c.isLocalURL)(d),
              r = "undefined" !== typeof h ? h : n && n.locale,
              a = l[d + "%" + p + (r ? "%" + r : "")];
            e && !a && u(n, d, p, { locale: r });
          },
          [p, d, N, h, t, n]
        );
        var M = {
          ref: E,
          onClick: function (e) {
            y.props &&
              "function" === typeof y.props.onClick &&
              y.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, a, o, s, i) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, c.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == s && (s = r.indexOf("#") < 0),
                    t[a ? "replace" : "push"](n, r, {
                      shallow: o,
                      locale: i,
                      scroll: s,
                    }).then(function (e) {
                      e && s && document.body.focus();
                    }));
                })(e, n, d, p, j, m, v, h);
          },
          onMouseEnter: function (e) {
            (0, c.isLocalURL)(d) &&
              (y.props &&
                "function" === typeof y.props.onMouseEnter &&
                y.props.onMouseEnter(e),
              u(n, d, p, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === y.type && !("href" in y.props))) {
          var _ = "undefined" !== typeof h ? h : n && n.locale,
            I = (0, c.getDomainLocale)(
              p,
              _,
              n && n.locales,
              n && n.domainLocales
            );
          M.href =
            I ||
            (0, c.addBasePath)((0, c.addLocale)(p, _, n && n.defaultLocale));
        }
        return o.default.cloneElement(y, M);
      };
      t.default = f;
    },
    grO0: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/coming-soon",
        function () {
          return n("w/X4");
        },
      ]);
    },
    vNVm: function (e, t, n) {
      "use strict";
      var r = n("zoAU"),
        a = n("AroE");
      (t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !s,
            a = (0, o.useRef)(),
            l = (0, o.useState)(!1),
            u = r(l, 2),
            f = u[0],
            d = u[1],
            p = (0, o.useCallback)(
              function (e) {
                a.current && (a.current(), (a.current = void 0)),
                  n ||
                    f ||
                    (e &&
                      e.tagName &&
                      (a.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || "",
                              n = i.get(t);
                            if (n) return n;
                            var r = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && n && t(n);
                                });
                              }, e);
                            return (
                              i.set(
                                t,
                                (n = { id: t, observer: a, elements: r })
                              ),
                              n
                            );
                          })(n),
                          a = r.id,
                          o = r.observer,
                          c = r.elements;
                        return (
                          c.set(e, t),
                          o.observe(e),
                          function () {
                            c.delete(e),
                              o.unobserve(e),
                              0 === c.size && (o.disconnect(), i.delete(a));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && d(e);
                        },
                        { rootMargin: t }
                      )));
              },
              [n, t, f]
            );
          return (
            (0, o.useEffect)(
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
      var o = n("q1tI"),
        c = a(n("0G5g")),
        s = "undefined" !== typeof IntersectionObserver;
      var i = new Map();
    },
    "w/X4": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("nKUr"),
        a = n("ODXe"),
        o = n("q1tI"),
        c = n.n(o),
        s = n("YFqc"),
        i = n.n(s);
      t.default = function () {
        var e = c.a.useState(""),
          t = Object(a.a)(e, 2),
          n = t[0],
          o = t[1],
          s = c.a.useState(""),
          l = Object(a.a)(s, 2),
          u = l[0],
          f = l[1],
          d = c.a.useState(""),
          p = Object(a.a)(d, 2),
          b = p[0],
          j = p[1],
          m = c.a.useState(""),
          v = Object(a.a)(m, 2),
          h = v[0],
          y = v[1];
        c.a.useEffect(function () {
          var e = setInterval(function () {
            g();
          }, 1e3);
          return function () {
            return clearInterval(e);
          };
        }, []);
        var g = function () {
          var e = new Date("August 23, 2022 17:00:00 PDT"),
            t = Date.parse(e) / 1e3,
            n = new Date(),
            r = t - Date.parse(n) / 1e3,
            a = Math.floor(r / 86400),
            c = Math.floor((r - 86400 * a) / 3600),
            s = Math.floor((r - 86400 * a - 3600 * c) / 60),
            i = Math.floor(r - 86400 * a - 3600 * c - 60 * s);
          c < "10" && (c = "0" + c),
            s < "10" && (s = "0" + s),
            i < "10" && (i = "0" + i),
            o(a),
            f(c),
            j(s),
            y(i);
        };
        return Object(r.jsx)("div", {
          className: "coming-soon-area",
          children: Object(r.jsx)("div", {
            className: "d-table",
            children: Object(r.jsx)("div", {
              className: "d-table-cell",
              children: Object(r.jsxs)("div", {
                className: "coming-soon-content",
                children: [
                  Object(r.jsx)(i.a, {
                    href: "/",
                    children: Object(r.jsx)("a", {
                      className: "logo",
                      children: Object(r.jsx)("img", {
                        src: "/images/logo.png",
                        alt: "image",
                      }),
                    }),
                  }),
                  Object(r.jsx)("h2", { children: "We Are Launching Soon" }),
                  Object(r.jsxs)("div", {
                    id: "timer",
                    className: "flex-wrap d-flex justify-content-center",
                    children: [
                      Object(r.jsxs)("div", {
                        id: "days",
                        className:
                          "align-items-center flex-column d-flex justify-content-center",
                        children: [
                          n,
                          " ",
                          Object(r.jsx)("span", { children: "Days" }),
                        ],
                      }),
                      Object(r.jsxs)("div", {
                        id: "hours",
                        className:
                          "align-items-center flex-column d-flex justify-content-center",
                        children: [
                          u,
                          " ",
                          Object(r.jsx)("span", { children: "Hours" }),
                        ],
                      }),
                      Object(r.jsxs)("div", {
                        id: "minutes",
                        className:
                          "align-items-center flex-column d-flex justify-content-center",
                        children: [
                          b,
                          " ",
                          Object(r.jsx)("span", { children: "Minutes" }),
                        ],
                      }),
                      Object(r.jsxs)("div", {
                        id: "seconds",
                        className:
                          "align-items-center flex-column d-flex justify-content-center",
                        children: [
                          h,
                          " ",
                          Object(r.jsx)("span", { children: "Seconds" }),
                        ],
                      }),
                    ],
                  }),
                  Object(r.jsxs)("form", {
                    className: "newsletter-form",
                    "data-toggle": "validator",
                    children: [
                      Object(r.jsxs)("div", {
                        className: "form-group",
                        children: [
                          Object(r.jsx)("input", {
                            type: "email",
                            className: "input-newsletter",
                            placeholder: "Enter your email",
                            name: "EMAIL",
                            required: !0,
                          }),
                          Object(r.jsx)("span", {
                            className: "label-title",
                            children: Object(r.jsx)("i", {
                              className: "bx bx-envelope",
                            }),
                          }),
                        ],
                      }),
                      Object(r.jsxs)("button", {
                        type: "submit",
                        className: "default-btn",
                        children: [
                          Object(r.jsx)("i", { className: "flaticon-user" }),
                          " Subscribe ",
                          Object(r.jsx)("span", {}),
                        ],
                      }),
                      Object(r.jsx)("p", {
                        children:
                          "If you would like to be notified when your app is live, Please subscribe to our mailing list.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
  },
  [["grO0", 1, 0, 2]],
]);
