_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [40],
  {
    "20a2": function (e, t, n) {
      e.exports = n("nOHt");
    },
    SMlj: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "b", function () {
          return l;
        });
      var r = n("p46w"),
        a = n.n(r),
        c = n("20a2"),
        o = n.n(c),
        s = function (e) {
          a.a.set("token", e), o.a.push("/");
        },
        i = function (e, t) {
          e.req
            ? (e.res.writeHead(302, { Location: t }), e.res.end())
            : o.a.push(t);
        },
        l = function () {
          a.a.remove("token"), o.a.push("/");
        };
    },
    YFqc: function (e, t, n) {
      e.exports = n("cTJO");
    },
    cTJO: function (e, t, n) {
      "use strict";
      var r = n("zoAU"),
        a = n("7KCV");
      (t.__esModule = !0), (t.default = void 0);
      var c = a(n("q1tI")),
        o = n("elyg"),
        s = n("nOHt"),
        i = n("vNVm"),
        l = {};
      function u(e, t, n, r) {
        if (e && (0, o.isLocalURL)(t)) {
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
          f = c.default.useMemo(
            function () {
              var t = (0, o.resolveHref)(a, e.href, !0),
                n = r(t, 2),
                c = n[0],
                s = n[1];
              return {
                href: c,
                as: e.as ? (0, o.resolveHref)(a, e.as) : s || c,
              };
            },
            [a, e.href, e.as]
          ),
          d = f.href,
          p = f.as,
          j = e.children,
          b = e.replace,
          m = e.shallow,
          h = e.scroll,
          v = e.locale;
        "string" === typeof j && (j = c.default.createElement("a", null, j));
        var O = c.Children.only(j),
          g = O && "object" === typeof O && O.ref,
          x = (0, i.useIntersection)({ rootMargin: "200px" }),
          w = r(x, 2),
          y = w[0],
          N = w[1],
          P = c.default.useCallback(
            function (e) {
              y(e),
                g &&
                  ("function" === typeof g
                    ? g(e)
                    : "object" === typeof g && (g.current = e));
            },
            [g, y]
          );
        (0, c.useEffect)(
          function () {
            var e = N && t && (0, o.isLocalURL)(d),
              r = "undefined" !== typeof v ? v : n && n.locale,
              a = l[d + "%" + p + (r ? "%" + r : "")];
            e && !a && u(n, d, p, { locale: r });
          },
          [p, d, N, v, t, n]
        );
        var E = {
          ref: P,
          onClick: function (e) {
            O.props &&
              "function" === typeof O.props.onClick &&
              O.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, a, c, s, i) {
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
                      (0, o.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == s && (s = r.indexOf("#") < 0),
                    t[a ? "replace" : "push"](n, r, {
                      shallow: c,
                      locale: i,
                      scroll: s,
                    }).then(function (e) {
                      e && s && document.body.focus();
                    }));
                })(e, n, d, p, b, m, h, v);
          },
          onMouseEnter: function (e) {
            (0, o.isLocalURL)(d) &&
              (O.props &&
                "function" === typeof O.props.onMouseEnter &&
                O.props.onMouseEnter(e),
              u(n, d, p, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === O.type && !("href" in O.props))) {
          var C = "undefined" !== typeof v ? v : n && n.locale,
            k = (0, o.getDomainLocale)(
              p,
              C,
              n && n.locales,
              n && n.domainLocales
            );
          E.href =
            k ||
            (0, o.addBasePath)((0, o.addLocale)(p, C, n && n.defaultLocale));
        }
        return c.default.cloneElement(O, E);
      };
      t.default = f;
    },
    eGLW: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/authentication",
        function () {
          return n("eShx");
        },
      ]);
    },
    eShx: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("nKUr"),
        a = n("q1tI"),
        c = n.n(a),
        o = n("Ix5F"),
        s = n("o0o1"),
        i = n.n(s),
        l = n("HaE+"),
        u = n("rePB"),
        f = n("ODXe"),
        d = n("aLZG"),
        p = n("YFqc"),
        j = n.n(p),
        b = n("vDqi"),
        m = n.n(b),
        h = n("xUX2"),
        v = n("rjN7"),
        O = n("SMlj");
      function g(e, t) {
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                Object(u.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var w = { email: "", password: "" },
        y = function () {
          var e = c.a.useState(w),
            t = Object(f.a)(e, 2),
            n = t[0],
            a = t[1],
            o = c.a.useState(!0),
            s = Object(f.a)(o, 2),
            p = s[0],
            b = s[1],
            g = c.a.useState(!1),
            y = Object(f.a)(g, 2),
            N = y[0],
            P = y[1],
            E = c.a.useState(""),
            C = Object(f.a)(E, 2),
            k = C[0],
            S = C[1];
          c.a.useEffect(
            function () {
              var e = Object.values(n).every(function (e) {
                return Boolean(e);
              });
              b(!e);
            },
            [n]
          );
          var L = function (e) {
              var t = e.target,
                n = t.name,
                r = t.value;
              a(function (e) {
                return x(x({}, e), {}, Object(u.a)({}, n, r));
              });
            },
            D = (function () {
              var e = Object(l.a)(
                i.a.mark(function e(t) {
                  var r, a, c;
                  return i.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (e.prev = 1),
                              P(!0),
                              S(""),
                              (r = "".concat(v.a, "/api/v1/auth/signin")),
                              (a = x({}, n)),
                              (e.next = 8),
                              m.a.post(r, a)
                            );
                          case 8:
                            (c = e.sent), Object(O.a)(c.data), (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t0 = e.catch(1)),
                              Object(h.a)(e.t0, S);
                          case 15:
                            return (e.prev = 15), P(!1), e.finish(15);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 12, 15, 18]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsxs)("div", {
            className: "login-form",
            children: [
              Object(r.jsx)("h2", { children: "Login" }),
              Object(r.jsx)(d.a, { color: "danger", isOpen: !!k, children: k }),
              Object(r.jsxs)("form", {
                onSubmit: D,
                children: [
                  Object(r.jsxs)("div", {
                    className: "form-group",
                    children: [
                      Object(r.jsx)("label", { children: "Email" }),
                      Object(r.jsx)("input", {
                        className: "form-control",
                        placeholder: "Email",
                        name: "email",
                        type: "email",
                        value: n.email,
                        onChange: L,
                      }),
                    ],
                  }),
                  Object(r.jsxs)("div", {
                    className: "form-group",
                    children: [
                      Object(r.jsx)("label", { children: "Password" }),
                      Object(r.jsx)("input", {
                        className: "form-control",
                        placeholder: "Password",
                        name: "password",
                        type: "password",
                        value: n.password,
                        onChange: L,
                      }),
                    ],
                  }),
                  Object(r.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                      Object(r.jsx)("div", {
                        className:
                          "col-lg-6 col-md-6 col-sm-6 remember-me-wrap",
                        children: Object(r.jsxs)("p", {
                          children: [
                            Object(r.jsx)("input", {
                              type: "checkbox",
                              id: "test2",
                            }),
                            Object(r.jsx)("label", {
                              htmlFor: "test2",
                              children: "Remember me",
                            }),
                          ],
                        }),
                      }),
                      Object(r.jsx)("div", {
                        className:
                          "col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap",
                        children: Object(r.jsx)(j.a, {
                          href: "/reset-password",
                          children: Object(r.jsx)("a", {
                            className: "lost-your-password",
                            children: "Lost your password?",
                          }),
                        }),
                      }),
                    ],
                  }),
                  Object(r.jsxs)("button", {
                    type: "submit",
                    disabled: p,
                    children: [
                      "Log In",
                      N
                        ? Object(r.jsx)("div", {
                            className: "spinner-border text-success",
                            role: "status",
                            children: Object(r.jsx)("span", {
                              className: "visually-hidden",
                              children: "Loading...",
                            }),
                          })
                        : "",
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function N(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                Object(u.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var E = { name: "", email: "", password: "", confirmPassword: "" },
        C = function () {
          var e = c.a.useState(E),
            t = Object(f.a)(e, 2),
            n = t[0],
            a = t[1],
            o = c.a.useState(!0),
            s = Object(f.a)(o, 2),
            p = s[0],
            j = s[1],
            b = c.a.useState(!1),
            g = Object(f.a)(b, 2),
            x = g[0],
            w = g[1],
            y = c.a.useState(""),
            N = Object(f.a)(y, 2),
            C = N[0],
            k = N[1];
          c.a.useEffect(
            function () {
              var e = Object.values(n).every(function (e) {
                return Boolean(e);
              });
              j(!e);
            },
            [n]
          );
          var S = function (e) {
              var t = e.target,
                n = t.name,
                r = t.value;
              a(function (e) {
                return P(P({}, e), {}, Object(u.a)({}, n, r));
              });
            },
            L = (function () {
              var e = Object(l.a)(
                i.a.mark(function e(t) {
                  var r, a, c;
                  return i.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (e.prev = 1),
                              w(!0),
                              k(""),
                              (r = "".concat(v.a, "/api/v1/auth/signup")),
                              (a = P({}, n)),
                              (e.next = 8),
                              m.a.post(r, a)
                            );
                          case 8:
                            (c = e.sent), Object(O.a)(c.data), (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t0 = e.catch(1)),
                              Object(h.a)(e.t0, k);
                          case 15:
                            return (e.prev = 15), w(!1), e.finish(15);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 12, 15, 18]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsxs)("div", {
            className: "register-form",
            children: [
              Object(r.jsx)("h2", { children: "Register" }),
              Object(r.jsx)(d.a, { color: "danger", isOpen: !!C, children: C }),
              Object(r.jsxs)("form", {
                onSubmit: L,
                children: [
                  Object(r.jsxs)("div", {
                    className: "form-group",
                    children: [
                      Object(r.jsx)("label", { children: "Name" }),
                      Object(r.jsx)("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Full Name",
                        name: "name",
                        value: n.name,
                        onChange: S,
                      }),
                    ],
                  }),
                  Object(r.jsxs)("div", {
                    className: "form-group",
                    children: [
                      Object(r.jsx)("label", { children: "Email" }),
                      Object(r.jsx)("input", {
                        className: "form-control",
                        placeholder: "Email",
                        name: "email",
                        type: "email",
                        value: n.email,
                        onChange: S,
                      }),
                    ],
                  }),
                  Object(r.jsxs)("div", {
                    className: "form-group",
                    children: [
                      Object(r.jsx)("label", { children: "Password" }),
                      Object(r.jsx)("input", {
                        type: "password",
                        className: "form-control",
                        placeholder: "Password",
                        name: "password",
                        value: n.password,
                        onChange: S,
                      }),
                    ],
                  }),
                  Object(r.jsxs)("div", {
                    className: "form-group",
                    children: [
                      Object(r.jsx)("label", { children: "Confirm Password" }),
                      Object(r.jsx)("input", {
                        type: "password",
                        className: "form-control",
                        placeholder: "Confirm Password",
                        name: "confirmPassword",
                        value: n.confirmPassword,
                        onChange: S,
                      }),
                    ],
                  }),
                  Object(r.jsx)("p", {
                    className: "description",
                    children:
                      'The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )',
                  }),
                  Object(r.jsxs)("button", {
                    type: "submit",
                    disabled: p,
                    children: [
                      "Register",
                      x
                        ? Object(r.jsx)("div", {
                            className: "spinner-border text-success",
                            role: "status",
                            children: Object(r.jsx)("span", {
                              className: "visually-hidden",
                              children: "Loading...",
                            }),
                          })
                        : "",
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      t.default = function () {
        return Object(r.jsxs)(c.a.Fragment, {
          children: [
            Object(r.jsx)(o.a, {
              pageTitle: "Authentication",
              homePageUrl: "/",
              homePageText: "Home",
              activePageText: "Authentication",
            }),
            Object(r.jsx)("div", {
              className: "profile-authentication-area ptb-100",
              children: Object(r.jsx)("div", {
                className: "container",
                children: Object(r.jsxs)("div", {
                  className: "row",
                  children: [
                    Object(r.jsx)("div", {
                      className: "col-lg-6 col-md-12",
                      children: Object(r.jsx)(y, {}),
                    }),
                    Object(r.jsx)("div", {
                      className: "col-lg-6 col-md-12",
                      children: Object(r.jsx)(C, {}),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      };
    },
    p46w: function (e, t, n) {
      var r, a;
      !(function (c) {
        if (
          (void 0 ===
            (a = "function" === typeof (r = c) ? r.call(t, n, t, e) : r) ||
            (e.exports = a),
          !0,
          (e.exports = c()),
          !!0)
        ) {
          var o = window.Cookies,
            s = (window.Cookies = c());
          s.noConflict = function () {
            return (window.Cookies = o), s;
          };
        }
      })(function () {
        function e() {
          for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) t[r] = n[r];
          }
          return t;
        }
        function t(e) {
          return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        return (function n(r) {
          function a() {}
          function c(t, n, c) {
            if ("undefined" !== typeof document) {
              "number" ===
                typeof (c = e({ path: "/" }, a.defaults, c)).expires &&
                (c.expires = new Date(1 * new Date() + 864e5 * c.expires)),
                (c.expires = c.expires ? c.expires.toUTCString() : "");
              try {
                var o = JSON.stringify(n);
                /^[\{\[]/.test(o) && (n = o);
              } catch (l) {}
              (n = r.write
                ? r.write(n, t)
                : encodeURIComponent(String(n)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
                (t = encodeURIComponent(String(t))
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[\(\)]/g, escape));
              var s = "";
              for (var i in c)
                c[i] &&
                  ((s += "; " + i),
                  !0 !== c[i] && (s += "=" + c[i].split(";")[0]));
              return (document.cookie = t + "=" + n + s);
            }
          }
          function o(e, n) {
            if ("undefined" !== typeof document) {
              for (
                var a = {},
                  c = document.cookie ? document.cookie.split("; ") : [],
                  o = 0;
                o < c.length;
                o++
              ) {
                var s = c[o].split("="),
                  i = s.slice(1).join("=");
                n || '"' !== i.charAt(0) || (i = i.slice(1, -1));
                try {
                  var l = t(s[0]);
                  if (((i = (r.read || r)(i, l) || t(i)), n))
                    try {
                      i = JSON.parse(i);
                    } catch (u) {}
                  if (((a[l] = i), e === l)) break;
                } catch (u) {}
              }
              return e ? a[e] : a;
            }
          }
          return (
            (a.set = c),
            (a.get = function (e) {
              return o(e, !1);
            }),
            (a.getJSON = function (e) {
              return o(e, !0);
            }),
            (a.remove = function (t, n) {
              c(t, "", e(n, { expires: -1 }));
            }),
            (a.defaults = {}),
            (a.withConverter = n),
            a
          );
        })(function () {});
      });
    },
    rePB: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
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
      n.d(t, "a", function () {
        return r;
      });
    },
    vNVm: function (e, t, n) {
      "use strict";
      var r = n("zoAU"),
        a = n("AroE");
      (t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !s,
            a = (0, c.useRef)(),
            l = (0, c.useState)(!1),
            u = r(l, 2),
            f = u[0],
            d = u[1],
            p = (0, c.useCallback)(
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
                          c = r.observer,
                          o = r.elements;
                        return (
                          o.set(e, t),
                          c.observe(e),
                          function () {
                            o.delete(e),
                              c.unobserve(e),
                              0 === o.size && (c.disconnect(), i.delete(a));
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
            (0, c.useEffect)(
              function () {
                s ||
                  f ||
                  (0, o.default)(function () {
                    return d(!0);
                  });
              },
              [f]
            ),
            [p, f]
          );
        });
      var c = n("q1tI"),
        o = a(n("0G5g")),
        s = "undefined" !== typeof IntersectionObserver;
      var i = new Map();
    },
  },
  [["eGLW", 1, 0, 2, 5, 6, 11]],
]);
